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
    "4bxBpiscismKgegEMYqm6Nv1u3MJgesUiXwMdB5mickztAAjdxkemdcLQvm1w9RPyMU4biwDdGJzwMT5EDEQnebj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2byh2RsSP4QqhK9jFwANjsnuFajfNWzxJj9MkG7LS55inrckaSK8YeTfBcu6zRWcACZzREfS23ohhyK2fjrQmUew",
  "key1": "3MfKTdG7kEDts1pys8fgaNJC8yBRCMzdokff12JAtsDxua6yJExkogzvnApS3XQjMUQn7T5S4kjNVS6xrnaxihvK",
  "key2": "5qxRhNz3qyLtmoDNPVkiXBjKSJL6KkM3dsAourMFdH8yt9AByb77R3wyNTr5UAmLLq9Phut7XXdB7BqnGW2p7Usv",
  "key3": "2ho8uVsVcG2znJMc4J8CUuEy9gzM8chYA36TPbCJ9HEubquTi4YKTEwDTAQvvGGt8Fj6GdHGXVy3vUWMs8XbUBoa",
  "key4": "2mGS7DBTxycqn4vQbGPfzEd4iyC3X3TLMiSC8th9chvBJkQrPvNnGKUYT1ghXLoRZ9TErNGgDyTHxSJ4YStG7ysZ",
  "key5": "5oY73mPL4KNVAsBCSmd2n2iWtmpxAg8FUiK1iGLjosaK445NdyAVdXAcyt3XVVxueLntqmkz1Y137ggYJD9RQozb",
  "key6": "4Gaqcv9yFWvgKGd4Udwhkbh51hx256stzDyouKYxxX4KRpVKddwvnbyYHijGs8Y96SwahEz8J1S6uT4ubLm6VkaD",
  "key7": "9UppLcyiKPM8LwVkB44GD2T1WZ5fgpTCea8A4ALGnpD5RuMVWKyxyjJig9NVrc5y21RhNy2DfZ9B5VxNWEuCAF6",
  "key8": "2daF6wxkpaTLXaFWvaDET9ruXQ2NjuibPxwAWhWd3YK4MYMMuQZBeYkuAtNFGTGroTCv6r4CP9z7mvxbHSoJPcpP",
  "key9": "65JuqaDTdBu1ApMKwv55fCmgE2po4qNERyhdUcyQzzGaaUQJnc9QsDHgfuZMJfSxQXqAP3wE19TPzUWDwDF7pnLg",
  "key10": "xCcxp65vbW3Z7B8wAuZbnkKkR3YQ6JiRu2wRQEq1NBgv7wNudio4EGQQPeF5LwSMa4gEu7QeSMPBcPFnDSLu7gc",
  "key11": "3JjBX9YAD3kMt56JbgA1HTv91oeJiKb2jo7mgNvShbYx7HqJHSqy562HScmruKvrg8ZehpJZ6UyMEWEMZk4Jix9H",
  "key12": "4LndpEpNE5LBu6nHBCKJKvJfFTKQsDWdYokDNKjuLrYx6xcATfd4yH3duZEGsSVtNJBUemdVmNxsRF2im3nA5YSx",
  "key13": "2GPsjJXt7yUXGJN9e8fZXVwRHx2o8Be9gGp1wFzWHqv375dBdJRnEGjgJQ83L6ioT9uyXQHM8qKUJvHWwXY4NKKi",
  "key14": "S9MgW1U1FwRtRoRXdjHQfdAKwjqG4MQFjtFpYkR7coKTiJkPUS96aNADx1bvnCLP5ZGhKz9wNhrDJzQ9oy7ZUor",
  "key15": "KwPqTvAqZd7SghaohkXo3JU4Q88cxQJe7ogT2fo15tvbQWpLNoFYbXvFCW3DwtKPsWNQfUQEomG4h39pWLyPfxu",
  "key16": "42mh9L5vKGEa4WpEN5XBLZ31QFuMvFtxFZLLNFX9FtEYjBf6dA8PbRpwcYxCXi9XstJHT4HRfn5AKTK3yt1NKzJV",
  "key17": "5T51WavWtgrXuez8gmbB7V9qbte1t9TE4GiMYiqFmkeA33P13w2yxMQ98M3nbeRQXtYLpSmLJwZdUV4NifmAmKeE",
  "key18": "5DBWTghw8oHYmiGgnfDnDMWFUPg2gsJpSYYCfWs2CyQjNwDVpHhN2sgzJzHUxFp3vPmtn475BhXZz8McA4NL4Egh",
  "key19": "5PkzvvSS8Bp3YW2TStf8MUnH9WNgK7T593ZoGJDJCyi1tycSKD7t8v3wpuZP78kRyHuGyeTGUkNE2PcJDMXHrqi4",
  "key20": "216tBe6hLJ5UUm5pExYSPXLpBuyC7wxSbBYPP9kDfUAFHrDXKoCMhoNdHFGbR16FSy2MmRCGqmJxsAGLhauZJb7u",
  "key21": "4C5dhke5LpWJoMDc7Qghf9WV8iTAoYX24YBri2Gnh7QTFGYFLWAdTdnDtAGoAN5Z8uKGduxAHpEJEwCYkRUYkpug",
  "key22": "41Z6Qj4yHFU6x5ynsomHfQTHNeCgqECfme9a62NMyeg2mxwivhkxawn46VRZYXCzPPV9iY2EHZLaAAvWnySpKjGg",
  "key23": "XVPbKAEuUSUdikTwFUVAH4LZiyrNWqhseD3V8UkkqdTNph8iWviTyBJAvqyzUJU4b85ppyQsAoLtq4PonLkSWU1",
  "key24": "kohKThKtC8WYJq2e73hhWJhtqLVrSj8NBae95bEjSQSvRuK4GGcn6jZuhExegnPhZ2TEohUBH4XkWuRUWo5giUE",
  "key25": "2Wb5A2RTf2jpUkkKc6d7PVFP2vKRWeyptMivn7D1D7e9j47sAPvJtQxHbGiCs6b6xBz6zq5vWpaVngu6cNvfXXjs",
  "key26": "5dvTsjUBcXo2XkPa95uzC1WesEwvMj2FBqhY3KMyEtKaXYMfXsRMo6DZB2A38p2XKqnJsmKGUaq3uuXWJ59px4v1",
  "key27": "bunmx1Y2o29wW7JmqFC5ywBFtAfvjjcui7qH1WAvt6svZE4xcMuhdj4V8foMi6t44D5JdHQ24jiqnotguSwbpxk",
  "key28": "64evQDAP1V7WyVqX5GFXp6NDjaSNsxjDgSsimzUCdNkL7vqERKKVTEveFqXv1r6QBhq56LBeHYst21CtfumEBqEQ",
  "key29": "23i2XKt9fwzeoyQVFNdpJ363fdd3m6CcWrFxHfgadKazT9CX5i76id6hr9r14P6STJfYjboNwwwkSY3u4dnJpkWE",
  "key30": "2SP15TC5g4iXabSwHrzPWKa586sGMog5jR3KXPKGGjGFedGpyLTstQWQEi2gNSNXnmHvQkt6GFxJNrT8kjh7rzzM",
  "key31": "2SLYSwJMCyau9mViM3xiEyLfPGK3rbntnq4NahxTkCVjk5Cm6RLeVdn2JUrKWGBGR2VxUsKdxdJCdaHic26dBsXr",
  "key32": "3pPRdeVZXfqbGwLja9RTcKHBE4fUKToPwtxS1dbjS7k7i9aEkks7drSeLfFSZ645kyQREvCu3P5cjFiTfNGicnc4",
  "key33": "GLw7ay3e6UdqA9T3HGdHjYYUbhKKViTgc8qkgyMYR1vdABpnfvCmTJbgkSSZYk6rP4xBuFAC9mM5Yy9ThLvDXPH",
  "key34": "3qgYxnzsBRNmh7akFW6yFA2UpKTHmemYPSjbUjCX5xPtYwL8BHczWZoGJMMJVEXVqzmMdgygiJWMA9samNbUCVsS",
  "key35": "3kMk14ET3Jn2K4rjW2KKz1x1bXXd6hHUXkBS6vcj3ykfDEDJUrGbBAzPqCNccoUR7UU3nC1bNKSjp7qD3mHaLWp8",
  "key36": "2Tun9nH54dsPHHkZHUnXzpvP6niFaNKngKxMKdjWUaa773ccHnaEtjaBc9BjFaYMLut6tVcV7kno9wJDDpWdC2nA",
  "key37": "5cLgTzfo366BfyN6G4XcorfWAkEYMBsNKgHphm4hHzaFAQKt8BG1cci63EEFYG2Et6tFNnGV3uqYA2mrWhi7rHtF",
  "key38": "2mN5p6d93WLzC1xVCkA8QhQ9CypPAC33apEg1gdPnu1RqiQS5CvJgzcFZo36jA3Rti8w4cKCafGx94TLtVCt4JAA",
  "key39": "4xU5dKi5KkGERRGx8HWGyTbaMJt66sQpDBmPmBc3PhDxwTdn7iwFeDCPFAJBEoyQPD9ShDaJgQng2jYV5WCKkWuQ",
  "key40": "5QNA9rb8DvZxkKmEY3tJtamaRhrdYw7Mpn28v1fWRCZjoB3w3aGRvB5v3RH6AsCPSZaYSktBNVhcuehuHb95ex4M",
  "key41": "3FFKjRBkyMQUQybcsfPrthUDcXdo6qqiSjXQKepTk5d53imSP2971PPNtpoKxEHNht37qE7NigEKqsgM7DV8HXrB",
  "key42": "4v2MmVFFNBDY5kZvVCdhczTij3P4oirB6Esui4Cw3zCfHUefKok7yNLZjwGKogNPESnXaLryszk6oeLTyVG9LwDb"
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
