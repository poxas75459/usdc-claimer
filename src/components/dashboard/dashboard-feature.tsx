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
    "wcmM8JECtbQDrpJwsVNdcQrtRLweVYic5J9TEG8Vx36TDHG6jNGzEB7YHdNBUzkf8C4CppBXLesobHz9aZ2wxNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ESKjgg2NJwBMUiy6wZ5hd2Ju56h2WWn4sRG2WMnTjPwUTiWaarimCV3hgdMEsf3kTuS86ZpJFCs4QeTjtPiyLk",
  "key1": "5Hi3o5PieReXLWekb3ooBtd24kFB1MUip6kjNBeyg5AKyPwxn2HWhUU8uy75J7rVnuhdP34h3sCteXGHMu8WE2nK",
  "key2": "4rFTgkRdXvrBieuyUemyMWZt6zz6qniRF86x9Ssh4QyiL4NK7nvjnxZJdJ4JyFE9CLXQPDFFySqFuhhUmMoMadKB",
  "key3": "32G4i4iLAGACn23KbRAHnpUdnKPFBuBjAd2epbqiYzgZpRbG7hCBnYBcjBEmXnDegVs4rH4HDEi5Pm5jxg5MZuQ3",
  "key4": "5v3QwKFGKUTZVupouRLrznLviEpy5kMo2UTqbytxp7573F82uyos2415PyNWHtvB6wDjXQk97NwwngU344PBhbXf",
  "key5": "5tEKV6vHrmybtbHRi1WXJtYeDvYhSgguQzkpRzeCZYJvX38BuPCsNGZ9sUN7CnW5ZjczoeM7rdo8FQfqtKdhSrLz",
  "key6": "K11xLiZN3jWjZCBQrjMjBr55rw9MG8A7HYCWbK5NN5fqvs71eoeX8HMDkcAx27vDu98ATLXH5vCjwhdZmK6znxj",
  "key7": "5TfFY5UAk8kSKmVsgnDysbnH3LCFqZAv9DLc3aaB8YJMhnw5hyBvse4U3JaYC9gftyEpLN2qmSLuWMtQLfk3Ekfx",
  "key8": "sDKAULh51Txhx3HmnUqZ3UaRpJcGvXECbbwxuVAJwxxD9Qsa5FCVVkNXximymdocc47V71j5rZySooEWbX6EufN",
  "key9": "2aaH4d6eH1j9YVY4qj2KySgQbz7NECZeegR3vf1WzuQ8EzGEmZyaWGdj8vBTSv3myjDX4uMV2zeTrdenEUjvzrNA",
  "key10": "5UdTmEvEgkwZ6wdYQTKpURdeyfouMxkK4xLNcHqTTzk8HNEdouh2jfiwu8ppGCdrVaxaGdhpkarpLXn2PGfcFbPf",
  "key11": "3AQVqjS2G7zKVuemMWQFcPFr4ZsZnNnzGbVTLHJXZCo73HLdT7vM4TQ9L5a23S1KcaYAeKSPhix72ci88bs2BPoj",
  "key12": "52T2vqVU47SBujazRnRhwc39pLhcbERdcDmNMuQVyYvvxCwQjmf5v4TD9tB4cucqmsmzxyU6LYBp8C6nA5KkGZAt",
  "key13": "4T462WUZygq2UsWAAavh9XQzycspXDHXFWkLyUGYg3U5Ssci2Txv7umbUNdTQLDVh2EZTt33Lt3gQo5Ed5YProfa",
  "key14": "4fyubTvUpbBDXcWurtBVY6Smr55ZA8vRoFMYLbFkv7D8MW12JzLkwCrA5DKWyJiMkZkiTHPJvySU1AvWxL1cNcKe",
  "key15": "34b3vXfdnwR8zdhJe48HgTQ81XiZ5AcLg7ds7gFKQedLWDbJUBUY8mahpU1K4D3Ae45cTUTKD3PQkQdn78L3RZxq",
  "key16": "3UG54YpjKwvo2pYEYxwcurVMbYUfLYcquo4fM2piencg1133Jh8hVnyopG5k7TWijpmJ8Mzqe5NHwwYs7CWs72Xv",
  "key17": "5dQZSrRMD5QaAuALpixuViyxgNBvJW87e2Tn4SKSt9ZcFNrzkro2DjsHaXJDpx5xmoetGfVpp3hQje9fKvaeS9iG",
  "key18": "r7C8g8eZxoYgcLM81vh3hP53Q8r95Gtko5rWb1ostrKivNsgqDv7sNCjk5Furobm1o6DMnTGhT6wvj2stcDxc7Q",
  "key19": "41K5JJfBdPURLcuCqLyxvRxHuukJ4eganhNCWEmRiYnkvDuBxkpPRrrVNLBGL1pKz3kAksTYE7uaPkBdN9gDfztX",
  "key20": "ucRTsRb7jtcwLXjLSXgc2mVEaZVoqinTQNbhtpSfwuMsJEp4yABuJgguQi5gTXJ1YaZEAA1Hxq4BBH6D7fAYRea",
  "key21": "AngwtZCErTmWT4XNKLHhrpYVpu4zr4vaNFrFQdd2FDt9z5hpFvdCGtqkJQeD5LUsTJWjEQJvoiw3DSmrFqw2iVc",
  "key22": "N8emkhea8rcMh6ruJJWy3jzBzRZtMuhgNSYKyk8ZN1pPkiRPznWqriTSjSr151LqxddkvQ64XoXiuZ5qynKEHUF",
  "key23": "3dB2XJKFB3uxAHtpmTeCa5DCFPuGaRPCr5KGxs5j21NHjQRQ68NRnz5wYuW2JRCeywgm9keskYMYCedbz2WAwTDC",
  "key24": "3iR4nPXLu8Y3nZ3y6qTFwFY82ge71mrpd66ZbB8FDAPBsQ2kYDZ6oRZwozvp9QTzY5RBsUKwjWomFkZqRSkitmru",
  "key25": "3wv4PAANYNHDyA8hG4LnG6Bp5k6XaNdtUJB17Z2kUxMzfC7SE1TEw4b4wehRreb62ZpignLRy95kUcgxezZx6ppa",
  "key26": "5USXYDsn6ceDotKRKL6By4JnaG3ABGPiWp65axt477vmW5jgcdDafpzeyUrQrKP7CDCL7aDLAvWF8yVDkEC2fd1u",
  "key27": "DgHRhBu4DqnBQ3YcTBkkuM9AbWuzycZJVuikXwX1dtiPs6tHJwg2P6SjmbmmBkgM5qWPL1v1w3a3CwcrQuPyt3E",
  "key28": "448BayV94RQvT38zTZMsYhAmztpUmiMuKYMe47oMMZZ5PyUmz67mV9tVzi7SrjdCymtwqkEJsV2Q2cPKg92Nu46n",
  "key29": "PiQzdQM8AZxLPUw88UB6cXqvgiyw7gvCoeCY4L1pcc1wXnTQgntkLWic9uPQBnSCJgfg6DxwckhQd6u9CDdvjm7",
  "key30": "4CQtT1hwyP1Et3st6gfHziRMPr5xWjND3k2TVTdy2BHuiBH5MBsaRbP2HiTP8Pojz7k23R5LSfUtuh8sQM7fjwjB",
  "key31": "JhzqBQ2ozcBafYdkCuZUVWXiWSVjwyr1sFVyhfRG95frZf5A1RU9xWii1DKts91RPdYyXA6KWJaLLEk66fn1L5X",
  "key32": "2PZqrkWaydhcdRVhmMgivqWYi2ufLN3TTYdgeq56sj4pYRKmQn38xxWC6cYHqBzMJJuM73rJ1LFQqJBsbhnXVLqG",
  "key33": "52antyN2B7oLqkE4EQx1Vuet9DCBTNNKNBxBqt5WVSXNHTCgkoX28mTzFjhsCYthbARugHio5cknPEtxnKYoDk6d",
  "key34": "5fEqzxhDoSQ3pbVeszPMtrLpGeRW91owmek9itxMYEje7uVgHiTA82fYWCV6vrcgdLZqLSfDBkFwkRHtA9GmHRbi",
  "key35": "4QJw1zE15TXQ12fKr2V582h3EDFydDVoetNAU8APB1LSWj1jjmBbBEz4N1zTLb4iaqWLpTDsfLsaQ8YEoEwqrc6G"
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
