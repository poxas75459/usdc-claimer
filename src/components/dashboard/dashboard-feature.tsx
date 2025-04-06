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
    "5kGokWZk95XyS8TJnQjperMXrNhh5dURKEVAjf2SvBKcm6VQgFNmboUU8Uvvd8DJuD7VzDxYNJZjGDV9ucdeJy6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BTEiSwc4mMXVw2U1QhoLejT3ust3r2W1kPuEhjr1KKFXrhvYZqVW4EstoKAkLbh9Wh8bMM8kVnQVTRnh5uSLJne",
  "key1": "3QrQjcQuaBuGNQ1URUKqAVeLWrv4Ne8LVoEEBEkfu9rnumC23KnWBz5jArcpYunG5DSRH8m9vubR5MHpikegLPi3",
  "key2": "43fTJkkgP1rSrAw4Ww19EamzNJqXrZANwAxuQwYncwM7ccLkTtKVXoM9u4wP8Hv1BPQ5G2HJfiLFLQ7t5VXorzFC",
  "key3": "KTGpKQ4zLGEQTGsFAMduJTvwGMRugEMnxcsP7n95Yz7jUhFXgzj74REwQNWt8PjLDpLWEhan2sky1jPmiZfgSR3",
  "key4": "43iPQhVhEtpWACB4vFBrdTs4U2ys9qf8CJiCbN32bRdgDt2GW3X4sbJRuWVXtvBnLR2dWUK34YAckHsiuFi4TTaS",
  "key5": "3mELpT9mGzXGf8tyQCT4y2CEV3dCaXXfK2BR35QWp328z1JKD6FJVgTVwBtczuTJoUzqXgc8LuXZc65gNmwyiXe9",
  "key6": "3FSKt3NMiTKQXF1gf4EqnudLVjMJUC8DwLDjrvjjj1WGKRbmoRDpqEAjhAd8T8myBD5gQtpzEYjuVdf9mKEoXa5y",
  "key7": "4qzAoSpwty3j8U84AeRxhDPXtzPqzs8S2z59GosDxcrQk6iJ35ss9SaAzriWS7cz3ybATJjHpAHkE3tAnTnShzVk",
  "key8": "5hmm9p1vRo6TCWm84LDPGiTukA3Rj42QM4bM2WxQgmcRsJU9Em2DNxj9gXTq7bywp9pvWQpx7R7AQSNhCNA1P1Q6",
  "key9": "rX9CFKPrWKsi7bdk4pT1M7AukeGX597FsV48BEUEJcMCvCSVFg6hULQKTZsfzS5hgQ5yExP8gDbeTzW2Ana34iH",
  "key10": "4RfME96RAf6i6o7peB9zVYEykNRkq4WAhVKX2dh7ekx6KarRZoGXQS2UQwCMwHJGy8wT8piGSadxKY4SSRr86vef",
  "key11": "vp8ViJidDggPCAp7npAjVuypCADXetB287gD7aQ5keZzUQumPQbEcTBGx4icWV8XH3jFsMSGArq1bYNVL3YDtvd",
  "key12": "3MS673oZNPQMTKjhnDxk5N2Me3wgrJmXjcpQv8FLcijrpCh1EhDBK5WKBF22GcA9s7jkfnkBxa4ecq36cRfyoTtq",
  "key13": "eGkiQCp6bESMK3FbZpdBEWhQZXHTQcSCNpsN3k5NK4dzSYwQsjPtp5gzhjcRSdFkzkJL8kRzhJyeSPq1xWmFake",
  "key14": "4mRsRRjoz7TtrrW89SViESRAwRe3GCEq1GrPskrboZJB3sTHCNEZYkRdRQKR6se9JXtD2UnBZ99Ben88virX5ypp",
  "key15": "3M9AheinL8UXL5KbffPgc1iocc9LPF2M1XF6qJC7DLCuaCnEsLZxTydELZ3Sgm9MidyuHSvyndvoE7Jnvn8DhLPf",
  "key16": "5CvYpDXJXQKRwuHWDRVEUeEXuXmj1zPCnn84RxBaWF3vtMepf2psZFe3bmjKq7PJb2zhmPJchX2wzVeCn6N7k9NQ",
  "key17": "5tQr9zdx2SG6eWoV6RC1qdSt97k6Nip8CXpcdjkCqffZLN3p3JVqD3vDsX39zPTiQejYiJakkJgmtkBw9UdvhCy2",
  "key18": "3fa3nes1yPi4MTUVAv3sxmS4jboUqv9KYa8h8mbd1rRcEaoaX7QACz6x5hmwpuKeGp8RrsxmjFmMhjhQgZhPf9Gh",
  "key19": "4XZjNyKdGDyBgb7caLZRfcLpfYv9kcMptQrG8H1utVYXv5iyvciCkF1v3TeLVoHgeaqHt6QVgNbaeazN8MLdG8J5",
  "key20": "5W14ZNELXCkGRVdgnb2gjx2hFEVdRJkSRvwTScqgaQYGW85UrcDVAf27gfCcwqcbGfvA4yYyMgpNV6FZfaPVj2bi",
  "key21": "2HVpLii3vfobUG4xe3NbA7ixzzH8dRu9Kga7fZ8KcCf23dzdUFaJfkk74HrLrbn22nr72ZDpDEaBbpZ6WKnwgD2w",
  "key22": "2JVVa18wc4CrypoTN6H1L6TwpHWGtXRXfoufWJYSjopX1P1kQ83aMj2wRy8ThLapNVtnCKTQU7qki7nd5QQTP9bT",
  "key23": "2cqWGmuSNG4Vrh5i6KUDPn9CyDfdVgEeM7bMmUHugFNStJruMp9w1sZPgyiTRxvV9WgexrnmZQwTm5wc64KqSixH",
  "key24": "4mptV8Po5b1JE4fAEF1eXbLrp2kHzokrgiSwtjHc5QGpMgYFnK2usT94xCJg6g7EPtNxwiUjobV3ZNRZMaD57gxG",
  "key25": "3HLfiK3zQqdWqgKv7r8kcBXgxxnJPuo7W2Xi2XpU19Xqm4NDWbYf8hdHePkVrZW4CH5tEk6wokv5X2ugAcL3zuuw",
  "key26": "3Vweg2dzP125Q55TkMFCNhKUKhmRarVWwNUM1qHiaGM4pVDbyJEWmEBDCowtoyktkJyTn2gXvyzwcWuXdyeYJEQG",
  "key27": "33uWDHgoHYB1BqUvxrYsoaCv4YPcybm5R9ryjkQUbQx9hJWDYuYPbHuWoXMjo3YoJ64ds8xdUfPvTxN4bJ8AVtHw",
  "key28": "rprktP58RcBPiivnE9gaKELKrwvhUV6eF9aedrZRTy25ARzJB3mHgndpGKriLqcHtKjZ4aZGMJ5ZxzrgQQMeYTC",
  "key29": "57dtCyk9icwSP3JnZmvXNivdNqwzcHq1AYDjZcYDqRrp3vHvHjX3gueVrhZhXCgQoeBHh5vftoBBJea7wd3Bca1a",
  "key30": "3oe7SSvcsus9WMEVeCne7mKScNKbwK6Vs1D5dNHpermBk1XFb7U7ci72gHB5xiRizYnsgpXdy9wL2E24KHRd9NXm",
  "key31": "4QDuE1wsGFmWPSueKPKk4JFiDRy23L8J5ndpuJQR4ww6pZJy7x4CGd4DfWZDndXoSF9MQSbZdWtp2FiaNQSEPDLD",
  "key32": "2MM8W8KcGH5KxAL1iP6UNdb4NonzPnjseYNXaGyjY3FV2mzjjJyNpxvKJkmDoAsBuhhSH12LeiFr6oJeVmGjzZvm",
  "key33": "oscGAGa8dvhtb2M8dJaeQLKK6DHSvpntbgiwWJFRYx34xvrc2gib5mKXw57whKuGAtDHrXMegeJcdikuxwo3tZ9",
  "key34": "4gv4j2R9PgZ1hri9aXi3Gt31WW36vCNuaDQqHBsQBJmw6jza5wv9QfZjyQCQ7agfsttvdyXspyq3d7pZyWk6q1kX"
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
