/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "45df4EwuDdigFjyexYd3mqEYtvXQxscoWTNwR2mzj9bVPXqBqUhoKkCKnv9HZJCGtX4pEPuQVawxvB2P8ZXjjSCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9e3h3DM6PUwkE2objgALuT4yUHeD5Yi6vixvm6o62xshFj4Ng1ELb32Kw5RmCCJYA9tzx6dXV7PyczgyQMBGPB",
  "key1": "4SUoru88rrjwCNatTQQcMPD3pn6g1AKz8zMXiNyyGqSM8fPrp7N9qVs64r8yVowRz6ZWpsua4H6xgP315Ra9JVg6",
  "key2": "4bJPYp8ARTSbFNxhctxkLQdRzauc5iQY7WS46wJcgQbQ3i6bszD5fQEN3qghLBMG7rxxFaaC9xAgcCmYJdFzK54S",
  "key3": "3UaH16mK5MWyxw5eQfB2RRqhmD9QmTNL7ChQ75DkXQYXivwGowk9uEMTYewKwZydMrePoRbvb5vUxrk37ZuoywNa",
  "key4": "2AvS51zZ5BqLzix7FrC1AZ5PsbJLiy8PNMproycAtrCEAjqBDwKVTc47fx3CbcZYr99UqUNp45UBkAKwwFusjjZP",
  "key5": "2dq3Us1X8AA4126FJebjeSjeZ96fiaUhUpWBUtjMxZQe9bay3uBk2s7NKaubPqvmkz2hTzPHdepNCaWL9a5DT61G",
  "key6": "41LvLb4Ees4NU6oPUDAiuuyCgQeh15jj6YaDY9drWzdrd1N8N6QWn1KcXmyRhxpLDTN64TFSWXnveFAEQnosAqmZ",
  "key7": "49qCdDK51ZgMTDd5HydvJNCfFc3bmGNbvBxcS5QYvzx1hn571HsGHCHQ15wFeJUn3gfS3MnNEs5wjizEHw3pThVx",
  "key8": "2g5xKk1Ky6484hwcCTZ7Mv6z89CAJ91C28PoBNsa3PSMu69npbEwgyDiGrGtciMjehERdfTEE6MwvofgTZueN1P4",
  "key9": "4aZxsPZWZekfpSKMQuQpspSsGRmsM8KdQTf8Dzx8DSDJ8sfWR2nFtFEsHLUC13KjJCg7pAJAN4u4VX9GTkjAqWvH",
  "key10": "3YoLggcQvekxKx12KssxqiMwaKb43SDF544FSPb1VhjY5YB9amyEXhaX4jpPDFLTodZpNPYxj3my2XwVubAWJ6ws",
  "key11": "4DW1X7APEgHzShxmpMTGc83qSGCC1aMtxUTVC4bqD2necj7JXaYAiWjwsRQk2ZNTN4iXT2Yj7jKnyAud6y7BE5Cp",
  "key12": "2iFMwyQxtqmR31E7xxSrYbr46sY71wkGok1nt6quuPq4RqythjUSSCacRBfNRvDXWQriJXB16pwtZamybuJv8RPA",
  "key13": "3mLDmkgEE5exAdqa3FcLfRzAkiGjgXo2XsniZEanCSaxmjWgaxpWyZyYXzyRRLZ7bsW6TBJYb5wVwdaYM8jZH9WK",
  "key14": "rybkWndXjE8ysdfE7bXuk6VDng5zm5ax6k5xxmSiW1J8ugyCJM9KVpMVAuD21yJQLc7XKnKip77qXQdthdaFGme",
  "key15": "3R7EZLDTBTyE4PqLsJHtGLFmUC8AggGKCi2RucF228MCBobqwaD3xMic1J6o2ygzoGHF8EVkr2URX78QNvWSneFh",
  "key16": "aML8UJFoX8U5w5hK59BjSmr658FGiEtQSwDFvRfxpcrMf5np8oE3nyhr7H5RLUJ95UWVA8QkJPKRQGpH5vv5cw3",
  "key17": "5Wrsr87j2sitcLQMugEKSanoa7yALeG3utT6n3HiAJZSs1RFaaPdqDcXi6ppX3CwrCbkrvKwjomxT8MmeT1M9xMp",
  "key18": "hBpHQtt5dRJdi4oregTyvXFpEyR37VsNWaG2XFfEGfTvCJF4yvwBfMP44vwPT7XDLXn2Y9XtcoesfeakaiwzpH6",
  "key19": "46jwfEmPEGSFqHVT1gEqTyXjMGWSThgHZGKMYaWhgYNK3CEtsuNgsua6E1xjj4e4NptHBgJ6358fRGs3gEc72UMe",
  "key20": "37mCTMwRg41uu6z6W5XLZpFdRzWjMJ965DokUx5pNRbLnjt1gsEzHCHLpcDBmVFcRUsemuNbHv2kt4bnYx9B35Nc",
  "key21": "zW9wJQxFxPhi31QSgPBwW2jK3BbAjx6sr4My2z3Mq3GyEdkHQgqR9t99ZWEsEidj8joy6KrqaN1hkC4ioWtVXUL",
  "key22": "4yc2YiFvrS58ecwkKZvshoDxFNWEGLrdicd8QcSoqN4kGKLrWq6J1CX2u1gqDQ1XA9x8cDSGoetHMRCEpL3EmC2P",
  "key23": "5zbUEnGW9RX1x6PMq1xp3qoiQE2L5S7xAWRPKd4LLedVKdrD5XFonLUiPDoJzrvvGD7XuaSTBmPSbCEiRxY42d1y",
  "key24": "4gQibDR3KE1UFUfwEwN2G51SEd45gFBohHCBfYQWmzEL9EYzpZ4CC5UForzrYU47AoasKjJ37ghe6J7at4xNCkF4",
  "key25": "bddSWENZ2gjW95pYQzKC4veUG6U6W7cDSep2jii7ejUYhquW4vE7GAADskSCTzi5HdFnJdoCV8PG8EhqezaV57N",
  "key26": "4XsYfM549fuCWqMFgVFyZhE2HmkZx6YArTXCAn11KcW6FeEeftCx5crnGVM3ro9XaKyR87owuMqBuxvU9qyms1y5",
  "key27": "QrmrDJPan1S2KZF5H9bXyta544HnU23D8KUF4YgQeE8NFvdbJ5fxVJ3T2TJYHcbcGQuBgjkwSXDCPwW6iFSgzHd",
  "key28": "5boztXNVayrFYLD6d8wWaQWWLjcKoN4VtDXvCyyDXPi6nAD9pYYYqBVA2wva1aoJtZzMMQD4NUWo8NL4XGbrzhSK",
  "key29": "48LTm52J82NDoVHZJKntL2Kx2JVzNZT5bMGafQoqNnSgFnHYF4rQWEyxEMHvgJHR76v9p89b89oky2MK1PfvhfNr",
  "key30": "Df1AQVptE2yQZR459cvde168fsnQCjYLqiA7oKGzkW8ETEJTXsK5HQjcgSuFg4oucpf5Rd5cpWAdMSAtA88q2Z3",
  "key31": "26vpAsbeUvTGyEH7hkrPHmget9Z6Rk6CYm4iqvvvFXngB1JeXoz2yuNMhyPFKesPfFy1kBCabWge6g7mtp6Mrs1X",
  "key32": "4yV3B3Kb6yPmxM4hyDPFE5FbXquWxzwWk3unxaTD5QcA52n8YryMT4obkewhdis1jR1Q9ye3TLMBuX1t4YQPJV6Z",
  "key33": "2PPm8cVbHdRije3qV1YctZpNomL3U1A4N5EfQAgQfSxi8ppQnp4LYyFHpn9c6gTZDSR369BLbwGeHs2CC2R9ByPH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
