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
    "54gTBEHTxjqMKwBkdBvg7WBancwRHSzkm77dZcgu9f9FEcyGrWy2vpihZSuDajt9UaujP9XckWaHeiTocyjUXF7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TkmBGXKM1Dpw3ydjGuez9d8qtWLzbpKSow2pVuJyNfMt8rsxy8Sk1ikX7jsq9Mu3WEryJ7JPfP463uDZ8BmTKZT",
  "key1": "3mTbVxw4eDPf3WfB62Jq93FCSxY5XYpQNz8rekqwCoMjM6vsLrxcSZY3zwFqbsZcPRnSycbiAReqxpUNY9XSquKL",
  "key2": "2GzatSUquQWpayiaPZpMq4iv6QJmEfYXrgKufVMbwcLtXqkG9QVPdQSyBsEMLHzrMUQGNfQUfnuZiZTHmsFbptGh",
  "key3": "pBnMYkhwq4oQ1ZfPoinR4CDN4UR6RvAcw53SsfnUr8kjL2soGruHHeom2Rprs3cxzBDYajXbNz9i8TEwxxWDUBp",
  "key4": "5F9SPSP3FWo8r3pkkRPznHnPhFS5813Kui1Pewq33jmLtGr5wtx5FZKeppZDwmtrbyy86PQxPjAjtSmd996iPx8c",
  "key5": "2eTUtaNCFcWtH9hiUTBmVyQBjggQ9uMPW1C3dDnE2m56kVXiDtFxtXEdH3F2CAbmWecDUv33FEpaVUz9uSKYf1RW",
  "key6": "ohuJkxnmpLYVy5zyxj3KWVkgMz6xituzrtnhv7iVsjKAvC9AF5wFTrCdefyEphRfhoLkkPMXox27i2z9zsMATWL",
  "key7": "45K7ouTcPjVrCjYYVZihF15gjE897UxgoGMZg85zqCVYPKCv8edkzM12u5DTM2tmjFvZ1ypdKoJGTcDAgeHrNiWC",
  "key8": "22PkzU71ZQDNwRVpTVCqBR82DqJtf3v6Exq84qf6EFMHQ6DfqPATK7HDPUkjoqco6RwBAfN5xJydj5mPFqfZ3VoZ",
  "key9": "5S2dUjNw3yHQuYoN2fp6eWcnjXkxShq8cjAAogXJRCfUi35T1XXuXkBY1q6SoMRRrrS8HKmsEfNKtythJYFwpsjn",
  "key10": "3WZkW6gn2h9STazBjaxLMy4ZhW2qt7RUfnpLkqjVizQVS8oBQf4QEjty3Pj4tkSMLhFqcpNL4RnqF1zTDtpY1972",
  "key11": "3bKXQCXUjMTf44kDVSRYgyDKc4w1nFMo8VNRHrzJRDWcb9mn4uDdmfiXThJi3MmA9cqs8bizh4VDsSz6b7UVLUvW",
  "key12": "5MPW86j52ByCVmpnzV8nZMmFqpnJQhXe49wQ2rU5kTjpizr5pfczmjHD95nVbCrpXDcctEkUYdG8pdkZwQvbMpSP",
  "key13": "2cqTsvHwA63JbS9u8DqWYquQ4FHD41eecRU3cBPQTwWtyzSPuEAyDW8h7yAV4fsWDLq6vBa6ZzCq6wjTdzQ2SdCs",
  "key14": "SyBDymToREvVNihjbSEZtSfnqMFjBejxmn4LjQ8r19fPSojmUZAgg4vPP9UjjeD12DvaXi9q42ySUQ4onqM7QVn",
  "key15": "3bhuM4aStTgLafW11NUmk8FAkS5AYekTKkLkV4FPxWNRSKy3KCEeKaxhneGwE1LTEGdG4A2RQLQZaRjGDqaRFU5S",
  "key16": "34ggQKRmdhpqMtYDgStvgcfSRkPHJr5xiZGLNbCLxpmvvjqyaxSvHxqEPsFpw16FcHcLCfX16MNFgothZPuLaaeE",
  "key17": "5VuyrdbaLdAHEjEANxQ2FHsoX1XdbdvxLFEquvTPEyhGjQJCMeGEVkJq6X39PPAZpNoLmXVufxhvByegsjsTJFHX",
  "key18": "4gcBKoLPy1NtuL8goUwnwxTct8g1U17GSzH4tPbJGkXEAtjUvaxgx4iUSTrV461J27dpUMsks7AGxqSepooddZov",
  "key19": "PEW3DUM23wTsjsTx86QLND4rp9Knsc7ugbDtmUZej3FJGePmQ8bVbkcMLpyWSrXCPLYg6LvFooAjMCERpJsdp5x",
  "key20": "B6GgXnvPsqpNb69HbdcVmRykhMDBc5NKEPSbYrMRfnTcRGJmsiGPtb5eKvZmUPz8ULzqD8jYFFJecsHrqEtqo3E",
  "key21": "Ytn3QggbEmFKnc7ACSeFxtr3BAoJGAu6HvehUnnn4hKgWCSYEhTq7upsKxDDoLpC272474PbJaPZ1ygfQRaP6qN",
  "key22": "2piUL9hBLTBDjCcWRtWENZqkefUrVfGHwVxfJj5YCbY8HGXTjNja9RYJSpJ1Q3qAqVJpUpcrfLbvF9LztYtLosrm",
  "key23": "6XDpS95EugFV6LmrdvU3thoyfstndBr6VCCVMdSWCW4XZ4Ev1VWdRHHqoBPNfuZufyKUbjfMRtq2DcK5EgSosjn",
  "key24": "5CAo6eLZUFxN5iPTS3BLGmCR3kdwZC6CNiqGjFQbzVA13wCwt5PvM4JYdh7P1QzJ9L1WfH7jY66TGk36VrhPCC62",
  "key25": "2xjAbQHrcXhxg7a4qqXxAinHgQsjy2DsYTvXS4vA774fpaABuKmBmvbsUxv9gThaE94QLNQU6L2CSdHvyUuN3awm",
  "key26": "4Y5457ic6CNNPXGWAPYravyju3EKxTKgGqG766xyzDAwNSfYbmfR1sJ1ZvLF69gk3eDFS2ZYvPXfXhKBjHz3Frhb",
  "key27": "4q2cMBo1rpjSyi4h63JiqmwNCeUSLGneLDLHRPMSTTNT9CyPFnkwCmgpQpDAGk9Dv86azhE1t4g845UjfWx1GJEL",
  "key28": "65y9kmy2VtZ6ZWwkoLW6zjDGGSnSyDagzYntTeFLkhuh8wmJHrNYTK8YtXGgDWtQ7EGnrwroqaJXbD7Np6rdPri2",
  "key29": "ySYTLaX8YksWCBSopYPMVLVkC3DGVdrdxdiC4vGnk9XXtHKxF6FmeT3ShfbZVErYhEXukYrcp8QzYC5gewqN183",
  "key30": "5T1HvgTGJ7a6wU5UmczaiHSePAFaR64aZDaHYZ5RsAxkjxuLsRFZKf96ZoBEDmMmQTeSSkyFjrgi1J8ZTV8Yyrap",
  "key31": "NpM6meG6bYQ7M4kaQ8cYiHe1gzMB79M9Gb6UDwTpLHbDLyFnEA7hHUqiERjgkGjBb18CTzhdZfD54eB7HoWGcLL",
  "key32": "4xTciYbcZbkohT7ANFELXtJ7LGKcBgqKGZNe3avUxE5PApXVooXPfp14kGzZGp9qa8CzomNXDUAACmtJ2Dzg1r2U"
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
