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
    "5noV1n9F2aB4tppJXKNN5cQp83a8CDoo3UKPytanSv5kNTw94uen8KNvRtZZJDN8o1P2S73s7txz7YqpktjfNfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jNJZwyGz5Ra6zjQW6okM9SvBXKATg7jChJPehJdZ3VgjYQYAPDCfbNYLFpcqGRv6wvwQ5qR6A73p73qh3yuBm7Z",
  "key1": "2e6YhULPtwSUYe84tXWzYwPc4TXiLCre2ChfHSR3QdigPqZ41ZEGd3b7tzAnRK1vvYdDw94bWJQ8iBasz1ucGSr7",
  "key2": "2ZRoq6XWro4h4XSxMhunPBUBh6k7JxUSfuw9MKkNzizbFJXdz6GixirvXp69RARwgZQzfTd24Mga55Hs4MfJa9vr",
  "key3": "2vP7NB9bsDRPmZtMTyoGwHYXiBCSwWamfjm8XiGQuNnPU2RjzPYTbLVy9WaBEqJRnMEfpJXfmufkrP6n8MC47RCs",
  "key4": "58F6YspkQgHf7wAYhTiY2F1Wt5XkTZfBrk9rPtzgAGeUqEdgdt4DPLBvaEXStzm6A8hKJMtFvukRyW7bVsWtvPQR",
  "key5": "NBpaxLudhP7A6Lbnh7ReuWFJQUeQRi8Pz5BJJKbGi5Y6YfoYXK9FTk6U98hCSoBMBRZFKeHohzekrTUwk85eQL3",
  "key6": "3z38zDUpxKcgzjXqEzQQqstXgiz3wMEJRtyDhoL56GHo8sAa7y5FhqeXRTixDNRU1nkjxfwRhx9DutYfzdqbRjWs",
  "key7": "3nW7VqMeanNxTzdMg4P6UTs8n7KSntmtoJR2F51389b3mfAudzv5RNUfvkVtbhVXGTgaCzA1c6CL3qneGbhCi6Gv",
  "key8": "25xGXne1n5Ne3zV4XWNa6Xctr6fkMpWUmQXoDgGMHgZnE8mBcpmkT7nHp1BtA2qwaJQd24gZTwqM5N6BgZsCDyA2",
  "key9": "3bnmUgwiYbiTkSg7jshUkxwYLaY22ooXewPLkAzpso4dSZNVUCJx6hTeB9XDVos2mgS8L9Dykz27WudgUTBKaA7Q",
  "key10": "sfSw4tf8bRrZ3NmRnxu6EPq3pxNrmBpRN5YF9WBgWLKCs3qGRfP6aEuEmvwh2T6FJ1TtDSmQ8rVpnigiV8aMwvX",
  "key11": "3wPJKGJucsETkkBPX2PuRN6rVi4JCE4Vz4JnT1G13KTWdxdAkEvsmbGevV3RKirveDq6k1XVoUoETFuGagdQj4UP",
  "key12": "44C1Qq2qN5gFUoYqdJifYPcxD753duNbuYE18LuSQBpnNt9iHotdKsrWvdKp4VBGcPB5kSHQLt8VcHsLeAze6xjo",
  "key13": "4L2SMxdmFGx4aEqacHEpYZC6BW4jPzzSDYUj4Fh6ZnyDSCb5Ah4jNok3pBLhbGP9g45NeZyeeeeMrBP1PLC4h4k9",
  "key14": "5c8qbHGzrkRnC6vNhXokhs4Ezkevt4QArv8hPXspiodS3QbLaz4ESrwvpt2zis4z39cnwqpH8ftJT69XSi5KPnaM",
  "key15": "66aLodAsFJUY92qbvxigV1qHzaWL3zQtnP9MPa6YvRx4x3iooxLSzAbdVRkUzRqcUG9UV7Lj3YfdY3cSbML69GQH",
  "key16": "3UFcARLTf3AyUs1Sx5tBZXzc9c85tcwz6xKg7VHqUdzN5AvkmBAiGheKsqqxzABwYHMbJXXfmz14D31BZebtVUQY",
  "key17": "2W4K1mrVc18hEgc26TjeEDccThqmSqy6NcRcK8TGfyPrEijy8gudNYxXSaBrqLqbcoDPfZ8P7hEgArGJktVzgiuU",
  "key18": "u2LEUmoDGY6xQE7Yur8bks1MbbjjfC7cmfTM2MHckcpmaLKExYnByokb55fUAF1dn3RWuMsqWpaYr55mypJMs1d",
  "key19": "5NsfuxbJxWD1hvxs1gJDo4ebYazHm1u68hXgsgUFFmLHCZ87pKcQoXbnzZGBjYrDWYepXLKRpvqC6cQ34Zf333ve",
  "key20": "5CCKWdyQK6S3F9KhugjiRhgr4KEErMFqF7hdwzuPkbqeSRrTszc2dcoPmtFXxopPiBG9MJ2mFD3Uaf4hYQMJ64Hc",
  "key21": "4k8cRQNJSM5UUaHeDnMT6VfH4JfFoi11DDG3zGxeP1nkP9A9pQTJai5zH4ChyKmryC3VZJfUxhE8hXUeAffn1GVA",
  "key22": "C85Di1Q5k1Y2nSeovPozcm9dS3LppzzpSdtgeABeQAtjkmoHtSsaziFFxPjoxBQP3SSdp8Goo2nV6FeMcobtwNv",
  "key23": "hyWQ9hLrmwJTyJhCeMUUpFaKne1dxS3pv4jgyMg8yAvKjNfy5DUw177pHVgEAedUbFXbGzqRMFEei6rD3Xym3Q1",
  "key24": "3gYuUdqfzkyYRqs2BLV3fZCfp5rcBdjXfPk3dJon6DV2EDkSqaNQuhyqEgTzV47QCAiL5s3x562zRomf8B6sGKmL",
  "key25": "5hcPxPJP2Gb9KguvFKJUTBPybE9hMjcTPJzU5FBF1DGpvvGzjZePpxXrXwyx1xxjAna7nNr2RtTQv9Ff4XuY3MZ2",
  "key26": "3axEKZochFtftdxNfJd7F3gH8fuHG75msMbt7HnH4aoubMHYdUKQyvD64mx2LLBkat9W91qAE79eQeEDEFH2jhCB",
  "key27": "SNMnpDB4ZbC1c8HXxmsAVhnox3EwFfLgYkU63XXLDhoJBAXQjZFDrByURR2hJLA349CYYoweFSGM9navKMNa1fG",
  "key28": "2PhSYHfmo4FZSs9rKk37BRtS4zrsaKqA3ukkD8NkmwYaNG4Up2Q2MydisRDXdbz17Bvc84Ymwt5tZzP7AMG65B1",
  "key29": "iQVTy6D2dqwgGJzXPRLfJQPFnWWu2RGqpWtpWvQSB3aCin35k62YaPShtd6dnB32YooGCRo3EQPsFPdj9EY3Pqg",
  "key30": "Vs2qjTb5VtGdeVHAwoFfDNdsnK7be3LnrMS3EJLPhQ5XxnZM96jjToqX5zozyauwmPSotPr1NZjLKvyS6iybwth",
  "key31": "3W3fveEtBY5yEU6YAejQc6BAZ74EbJejgjG5jZDt9HVgGjk8HkuvxwLtCqm3AQTUooTAhDsAnFMftrovmtDVAM72",
  "key32": "45Eca6Hq9GEfyv6H4HS1XzRtgWRhL1QFxCVDTK8DknWucgN8fNfsTRNanynChqT4m9MeT7DeGxF2iJFvcE7XL3Np",
  "key33": "31aYQefpGwTMYLtjMaDC22V45PAPpuc6Gd4ggUmnze5TAnTGSEBwqQmqLFAgD2hmQkghKKCVvVJbwMWYma4ySZrF"
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
