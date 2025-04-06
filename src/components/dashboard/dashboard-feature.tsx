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
    "4cGGGfARYEwavtVF1Uhvakkonpq6UVbiTrcr92tGqvHBBFZupU9uyi6aoL5GyncxSEzmQsoik7vJoRuLD7bcsW4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vggjzqn8zHZMj8bLfYuZZ7o1W4j3QhJtUq64SKefdD2cdGznkCkyPjsiQWKnr6rtpuZcr35ReByrqziP8Mbaeq8",
  "key1": "4CVYuGxCG1WRBavfQjRPZ4ZC1Y9YAAxPPWY8TtLj7EV5v4kbLkDRbMfaCiPYAZ2yS7Nc5PPbo6Z8BuEq2d8opqop",
  "key2": "2kFqx6w3tC4d16vG1n6fNs3MANPQDYwpCRsGXbmtvVQdLvcBoTPqGacdtfaQ5UWjwXdxwMEQp835Tqbu6ydD3f2c",
  "key3": "4hQUYGsNepjoetGmtKvgspd3wSWUrmxfMuGAZNR4QMNnCv93NcCpFX8UJnh6XyZoMX9mZFLZZYtdS1ci5J7gEgLu",
  "key4": "DvX5huFaCYxunG3XpafzZPFdx19AzEbtrgrZPz9PvCEq3xE6mF2TPetHcGn1gDeGDyJDDfiqbA1NrCjKnWjvaAL",
  "key5": "3VWcERAgcivy9CSb8Ge1kfPvVCGnjjMdkafJdLWxUTQDHrtvn3x2muBsC4xMyhDGs5hvreP2VYg34i9E4cycniiU",
  "key6": "5CF5EjG7K7mQ9NKLNAoQv7b2w1uHGwScJkkgTwuQGzkxUfn144okJwvo2DghGNk2ND7nZhLcnFE5Q3oi8tUHgqi8",
  "key7": "4DqY7wgLvsZ23S819QFdtHQqxNMhu6XQLm3Tfvp22R6nE3c66awDRvVdbKQ9tvVFMdj9Gt5QWhNVBfoeRsHQs2Ms",
  "key8": "mxH3VgUYcfDxyA2zkpzuZZEC2mmkcdhsyME6vyePygbwWJ5pNqrKPDQVX6AUc5jfjG5YQ32evV77iobkn5NRW1B",
  "key9": "3Yx4xtsc7YdtghFSCitz3dt27FZ6KAiiVCxVvafehqyzXsEiM5uxXYGhk6aDfn8ofWLnA98Dm95C972kiD1yaEN7",
  "key10": "25CAFENB34vu681y1RstCzV7U8hvuShHSz3sbawKpd94GyntxypLka7syDFw1uBUrmoTnYdzSut5PM5dxrH7gMsD",
  "key11": "3xnYPUxLNPyhZNAVh1tyBbxsEoWdXcBfe8etUM7s7MZLsxvPjzx9PqPQqBNwemPrus7Zfv5n95sdBdtTUtkF4vvG",
  "key12": "4FX1ZJtGxrcxMdmmjLNS6KtsDbcpidWcebzXf5UUQLSAjGRsGvMXFNCA6BuBocPqSYAsEMQk331cbEZr2CQ3qAdW",
  "key13": "5orDfP2BbRKSjWbiVej513yuMSHRRHLjNR8kupGVkTfSd6XDSQgLWu62i1kt1h1tewRmusNtp2evmLDYCynC1sdF",
  "key14": "4KGifsovNv4gekqjH8bWnj5L8ihkWJsQ1FTJbs9xRjVp4wCFZQCzsVnhn35XkYuqdFJpCg9kJ94SWDs89FmUqhwB",
  "key15": "4FxGy6EqpvnLmBpxa66F6Z6oXJ4sQgwhRYHDMsKQWeb5hUqPXfSeU1vpqkohFdJSmv43yPDpHtfF3AjX6Wfnkgfb",
  "key16": "2dLMUzXkoDvSVj2B1UWxsHmfJjCCjZCtySQ7EKkZ8qetJjTozapujNiWuQ5MyVdZAemCSuE2Dma2rsriRNrsHVFV",
  "key17": "gWdobuj7wNSWXXoikXeqscdcebDVLHDw828u34H6tHaogForGGkPVJgg6kTBe31jEUpfR2CkEZH3yZn6pU3V9SG",
  "key18": "2JATt6GCvNnkfoqfuAcZ66n9ciR2Pxn3w3uRr7atbUAtTRMcvdhBYzNjkpreCvJAbkM8gZpMRmyPL14jJG2Fe885",
  "key19": "4hWAMym2JUtZTGGnNNNFaNWGPJD3qf8V4X8f3D46gBxA6xGkKUECccntKnFFsrwMnhQ3yWZrW3c3RSKswctEz98y",
  "key20": "5coydGD4ohuaqWU4emGFm3EjEsB2n1apwr5JAK7JspkxRKCcKsQzH7BCy9s2x3buLSNDPXuaaQFig8PSuMb9F6bv",
  "key21": "3LugfppUQ5ViNbDQ6iZ539WpXTLhcNM46quZCyut3JKQ3Urvm7URLKDXMiAW3JRnWvgzpW5FXmvSFRXktVkoWn4f",
  "key22": "4cGhJGhTSpxvea8Uys4LTvv3iyY7sqQWvd2EF8yTpe355Eo4ZtJr2nRbMRDxTEL5yVnt6Lg1ceLRaeuPhWNqo1uk",
  "key23": "28XVsnmkBWHpxukWktMRgY95NEWfdp7xQ1LNVS1k7ARG1dLFHeodHsdxAewreeXUJbwnxBksxwfRRvsYpGC9kzko",
  "key24": "65DnL5m2dm7yGepXFyUCMAJnmSCukcvZcKXrZ9DvKqZ1bc8E2aJjCkr7eAbv7nHr277kymfhVv1XWUVsGGWMRops",
  "key25": "5Kj6yGHveDkuizVvK9yMJ9u4CbPuzBohtbTvEpXgWaAPuJZ9gePGG4Wsw1NSRgB2YXv3iVHAfud7qJzuNtXVWZ6X",
  "key26": "3R9PuCN4QXSGeTAFfTJJN9K3C9MoR55r7T5oUp7aKPFk659qfYDCJeEvZsfvBPwcSzxmcurSF3n5tBD25iPRRs4i",
  "key27": "4ZDPKnPhL7izHuXkUd7Y8xpruwzdcWM2PYMeM8yLwVGax4jhRdHbeBecCYpwTMFfLgd9fXayn5rUmyXAuGSBBzjj",
  "key28": "2aJnpbn8a18TDNVmquz3o1zTJnRFLmi7pzjupB1jYN7pnRg5APRhuhrkuJkRugjA5bHmoPNFMzpib5aRw7A2q3wY",
  "key29": "2L1e6DBBgPSnQ69Q2QDMJt9rFgHEge33Sz72VJ8EmCCQD6niDygQHtTArMBAFqanQFLtfkKBSK59gHtyk7tp6Dnp",
  "key30": "58Lr65nFQtSLpGa699yXigQQvtF91KwV3zVviTkLxjVo2DQoe1hGqFPQ3FwGrtRxWvAc6ucCa1y1n4LPyE5kAqc5",
  "key31": "iTphxVFzV4UVnM8oHsUdtPKkbURjcf3FW95Fr7LNHNUaCzuNbz1KZobqCpxVnJEajmD2277Y95K2b5juKRWJ8Rt",
  "key32": "5wBcD14pgt6qZTmmHYeVik2UGGKgWh2k47Co2pVwSRM2jWA8WLy6WGKNRHWsyWj75QrasDH8atQQrvGrubpXPQpJ",
  "key33": "4if5WcaBYaK6PecNe4cTg8RqygrPbcGEdNmiWQu8rxnGcrikp6Q5mWrZkiYMamhiAYypUJ74vdjuhbWXUoG7acD5",
  "key34": "8SUQ68L2iP5LynY9PFf35YsCuBQAxkMurXfxobVAtdvSDUXb2Vyuee3r4nbLAFURGc4GTWEjE1D7sotXPtAtvuR",
  "key35": "5HRGnzhxdRmVMPUxCoxB2XVAnyKXViBPgMe63yYfWinEPyQvnbpMKfwmzyuQooNBumvEzMf4EqKTnbTKBkhAgd2L",
  "key36": "66HWPeVxVvphK18c7eys4LiLnaSUgodEfJEfmu218Gp5WYBGW2Z2NZKT5AYdcwanxPnBmsmnJ2XTJqCkSYRWtAUr",
  "key37": "3WVtddGRTfPMrQf7APYvdxayc6neurhF7ZQwBgBfwZZW25syRrpH7K4jYC6jS8G2CKssK4f1XJZ2MGwTxPnqiYpP"
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
