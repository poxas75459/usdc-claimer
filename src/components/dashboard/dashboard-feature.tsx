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
    "4RTVRSaXCuWYBsUMJELXWCExBC9EPNjpm8uMx24BjDskUaBedi8Z3sUsrc7swNRo7mxXUMgvchVV9fw9hStoNUdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25hHgnPCBUQeZnRBpi1DUXW5bUpTGEQu1Dmkgufeb6p9ujLHtzwNg5UCbUGjiK3jaDQE3QGStWYT51wFTg6H3d2u",
  "key1": "5EokaUTNaMkAZVE1qeuAQm6LpLaKG2dvjeVg4CqN9dTRHuYj7QcE6bY2wE6Hrt8W5kptSRQ3ZGXEojcUkt2d8HUm",
  "key2": "2eBRbs6DYEMz1b3brb9L9VmABZCEiV3NYkFtppu7JPHXbkeiQXLZ1G6y5Lqg4AwjZL9y1ejHY5S5uGNMUWozgHVS",
  "key3": "5GoGbimXyu8k4Yn8nEupy83H6LwAS1inx6T1w16X2J5GCmm9MG4PwRGBEFwAFVCQNxFCi4aLwiRosZ5YYwXjiXzR",
  "key4": "5HefUuJYw9qA4MHmvPsMBpPsh1RBipZbVtDprkzsDLp8hxwJqpk1sdxim37kiZwCduTDm2MGY79KuALaiiQCM5dy",
  "key5": "2sjbTfwGmotkLiuQgEc7x6uzEj9EHs5zjFT1HndfzBSwevXe1UW4Ta5Roys3Xt16GquNsFFHPyVYtEnXuhe92Scb",
  "key6": "4cSXxL8dSYmETzMU2HZe4DyrSbivezvpHnyTNLUqGkHadBhPxKjMaYyfo9vRZNDXL1noeRahsL5YSRfgiswggZS3",
  "key7": "jnMoFn5SgoDeXMb8FQ69oD1XMkAR7yoLc28FDPZDNT59mfnfssgnYqxwgbHt5rvFFgB5HdjghUyKBWLZn9qoxNX",
  "key8": "4mingp64gUSqtKXTFusfnoLFzR8dNxrYiETaRzNqwqrHpyBFYJxccRqQGiwvvsUUTiAeDpwhcEtfvJTvrt6htvud",
  "key9": "bZKvoaFEHsYEaBZTWWBEvAtfEJuZuWuM7SB6oZ1QeVY6mmL5rVo6F2jA4iTH5Lj1jh2tXxjUwex3E9kzw52iMum",
  "key10": "32pzzqUR4d7VtCdwE3TqXB5jb5TB7h1TYNEqUPdeo6BVZZg9PLbcMNXkv3pKf4pDh64em1DMs99VKFq8UtkxrKrw",
  "key11": "2ARQns3K6APn16Jb5WPYJB8gqy1jimih35GKryqzUYEmVPPBbTAYK9tLDFU92cM2DLfTEJqwjXMnPcaY4fYMux7G",
  "key12": "4YGHNaS2HutqLE5AEuaBVEP6ZZ5fdp12S2BMNh2Bwvc9Y2HRsvXgrCv1zuLQwV24kVCP8DVDLTEnyCzGVmePsdfg",
  "key13": "5Tt5vwUWX5a6BXLPz5naGFhixEPPgoZucyvoe2udCdoaiSTiHMHLdE7UM1dwmnui8Jd9g5BQaEwRh4uswzfSpbFR",
  "key14": "5gwo2p5fUMLEQ42uJS8i4YimfcjT5QWT5eNTdUqr4XXdRsCxEd18m9rgk5d4QV42foZ714hSmejKWcf2gEpJSa1U",
  "key15": "28x3xzLKrgW8p7WwfHxvwnC769mwDg2nqzWPxgVgvFJntSSe4t7UnAZtZoGzbApGTrC2K8hgmxCjKXgA77dfam2L",
  "key16": "vywwjrnswy3gkDUthqzKSfEEuNcJSU3NaJWGYhELiw9B7urYzeeSqtGt8utGKy4xGoJoGfhCdkkXYettpHdcsqk",
  "key17": "7rg75opwB72cV3zxqLQinxb7qVGRxnxU1TirET68yHdL9T4533fty9kGehnk5fBg2kSGD4Kkp2gCiAE3xYAbAkp",
  "key18": "3AaSEWkuD79y1nYiM9LaetG2Y2d9sJ8wxvPGuWxDzjW9zGJYQ85M6vtVRvNEwgntT3W7dmtrteUnBR7jsQoS1uW1",
  "key19": "bWDo8xUQZkhFUjbrwuUxrWXDccTt21fZ9CUp4GgFaQSwxf8bA9gehzk2pJm5veewDd5jTdSKoJtgqVX1hussrA3",
  "key20": "6NrPWbwTi1BeEQpcFiY6nUmRizQUQM3AEEK9QkRofDTG1R6UMQoUt9zmMXZZvoHVhdoDLX2XueDfUnoo6hgTPEA",
  "key21": "2CgQMSE9bqphau866PruPjHCCdjzxk5zjwFuAvXW4DG2LXtCqzDkcsHuuX6WB9ZSa8QhKhraosY2udcPWjb3oV6e",
  "key22": "4bA5rKHFVEpEn7caDNvYx8HT7g3GQTc2DgirJz9QSSkBhM1A7HFjvG6cSqQ3caBG3YY5ypbrRfac6FXAwKgDxFBS",
  "key23": "45K75B65Bes9iB12vnQ8U6mCkxRe9jz9h5jDgf9WgH3MDNnmYvAL9LgE75odgaExUmqsJjNTQfwRLXYdqPS81XpS",
  "key24": "5MZWHRNqCS7BqJx68QEGtQUES6fdTiAq7XYzmGd7jTKz4uzNHjCvQsZjp99VirbDsQ3dioB1S16HTUn7fKjZAeTN",
  "key25": "abmFJYjfuPqPWEBSE5sMG443ndtQNBvR6V16GAPZf8B441rFpjYyALdCDjZLxT3Q3aiTy9r988p3KF5GCEu5kYE",
  "key26": "FZEvSSKzyQ81K66t3wTmZSzRuW4NTuSnnmUQG58An4j8DQx661CT4YcxynCKh85dCVuzC2vGdo8ya5BEDhcASj6",
  "key27": "3U5aLag4zwPC3vYvDmQT4uDAD1rdTMV7dkM6UQWh36LfhyPRqLdJpodmagBZ6ifKpvvt5FGvzkRcayKa7D54STvQ",
  "key28": "4DXUzCXpPYNYzGeFv4eupmdCSsCiQ1nb6DVVzf96XYeyiX2ygFwUpFuK3Uv8m9fVUY9hDC46HHGFvY69rpmo5vK8",
  "key29": "24546M4oCRfzK9R6akPBSWXqpGH5K5aTGPcQRwjG7kNYmqLAXrx5PH4vhnMYQwJgxnKxbCYLF9BUyhSufU2V222i",
  "key30": "4zFTCGbFpPby2Mb1H7qdWk6K9q2HipdzEZRpaYVS93FRBps5hjAEyofTVgQFKeiaumKKkMy3NuManwaXzaJtbUaD",
  "key31": "3vB8MWovbuusYzQMoqUKpDBNWa9akneDSqcKqkkDX8jiYjct9gEoVcAAvPBF6qpauNPWPtReh9zhyFPR8v1UHpHP",
  "key32": "2E81mzCwarxhbD6CUwurVKhSgMPE2Z3V6R3pSxMFQWijhBZgj1KXDQepM8pu2CenSpY3YcVCcyj4Uw77hBjtjx4u",
  "key33": "61bs6LMwcsZYi33iKSW9qVeP5KfV7w38dVmMcMjvfdEevBauCbLofNF1THAejeSM4tLSWcqFFADebpN3ga6cRw6H",
  "key34": "5SjxyvbgrPxcoNTGCde8QjyiAdw5G2AVQkfGs7uEA2rXXEArbUCSiLhsnxK28Znb3KzSFs6dGd8v4pQaLasCik6R",
  "key35": "5kcjqu2RX88ZtchbzrbNwA13qLK7hC82k1dQqAvv9Bvt2eUsFpqwj2n4SdPZjX7F6K9Kw5q7s5iPuW895RW5iqRf",
  "key36": "27x4aUHXMAdguevMtfQXTWnH5iNkxxBYrVckVK1jzJpk5NUsfx82gxXgC7ZMKqfyWZz17W414tFkKUeL8J54wJiS",
  "key37": "4rHUP8uuDM4bRxq6jZnD71K2P4fPU3MUYrp71i1cCDfCximZXcSJgowKUepA1iFkBAAMsWXCQGDkJNSLEndFUs34",
  "key38": "5kkZoa8iJfXo523aTxh9Y6MgqajahTszK68MfaXWbPYRfdD26V8kySdPUCeY3v1DLdG56YVMiTpPsCvAA3mEsY8r",
  "key39": "3Z6wYmPwLNCNdNr6rcSXAVVk7z4skD3JhZWBcuAegs3mUmYf3Tt5UKjybFUVpvYLteCwX1Byh2C6yvWn3wkLYzD4",
  "key40": "cwm7C57QCgixogeRqi83EJCC6612tBrVv1w7f7zmNdQ5T9ykpGSQ6SLgoV4uLi5dHPxmBqhiK19kenGurLtb7Mq"
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
