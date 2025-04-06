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
    "4cnN1G1Bg7ti8RcLFodcvPKG76DoUCrJdu53SFTGJgAzFxNJc7iqNYukLiTXTtpRzJrmkGahi2gqgrVdAavjVviN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672v7tVAZLUYaxUnmfZJVAap9chU59BJaGF2D1cG97qLKnBYZSB89r6rGDgfCd12hRR7iSxRj9xPrVG4mEZE5DYS",
  "key1": "2EkBPZ8HAHXEXvMMUYgQPztLrZPiuU2PmeCrjYuVJgGqdpksLqPytQbS1AG25AGBcGvECW354bgQMgMYJfiaExYb",
  "key2": "Ly7QrGWaWGViM8CY8G235gpWsBvsVgCgzWBmU3L5wMJJmxaTSfxDJLWTYPLMsefXSYM56nkRjrURQF7PJwQyhYm",
  "key3": "2WmJLnTJRRBD51viL4CjVjU1iAz9zzZRadwJZ3qv7Det8T2wo92bQ1x7aLJg6R8jUZQ11icEukywyngneiRPzU1Z",
  "key4": "3g2m6RfQ2oRSgneiavNp9dEUJ87ocSPXbtr2Jni2oTksBQdxkY7FsB8Fyynk5dVDCuBpSNd8BPJ3L9sKCdHE5XcC",
  "key5": "4sZXXKRsjbK3FNmK1e5vzwSaMRYktyJeBPu5ZcZCgkKWboBhjLuqU3UESfD8oakWTMFNGhGefQP6jVTneCUnGo9",
  "key6": "3zdnq1ZMhjBoZWswm7QNekYGBe46UAXSP3zLosxK3diaY5LtKpPPfmtiWsZ9WmNdvoDXmMFyMZzeqLwT6PxgWPeg",
  "key7": "4xLyTMjMP6kHbTuFN9ypWRpPhsjJmSGHTNcyX4W96rHWVyc2DeEKJGQzdy7xZjtrBD6PpsNZXBn7DJgxZmYfcbH7",
  "key8": "2KszFgturBAgJqhcc7SFrmdsptxi658E3GkimCCehvqpDj5LrfeZQHoirZw4rJ1r9tcyoonHQ7mRHnEdVP5k7bX3",
  "key9": "31nVxUu8iiC7U1hGR1RNgteCWGVp9NppRWbcAE3h5Ya4C6rCFqN3iiL5dBvpaK9LnkaH3WnHv8b4xtZUSCttZvW5",
  "key10": "4JwUA46vyiYSgtg265QpTk2DgeFwUDocaEXUSzF2146M1a1ydCr1XnMZLBfq7exHEDTnqEAgBNmgbBqMVdxL3iGG",
  "key11": "4GDvD6r5oBJ1MtH7ywBt6y2NWfcmjsLndWoR8Fn4RPjxWY8n8L24uQ1P4MXDJu5QhSiTJcXopVLus29MbbZn3mgk",
  "key12": "2N79PN128CQwPTTqATxfLJMjcJk3dnNqizdCNsUFZPKyKcyt8oXJYNT3QrCU1fSYskKcydJAL3y4geT5k4gnS6x5",
  "key13": "28zFAdDmLCZjBCQPLFSdyvvmtpQdeSZUFyfUnLqCCW5zGoRNRxEjKy8aN2oG5UQWKsfKn8wxX8T76F4BPCkN718o",
  "key14": "48tjmnPajew9vaHSoQaHUAo1J53UsyH8TcaffECWx41Hfu6nuuSwx7isxbTinFcmpCakWwbohLBig5EsDVeznmUA",
  "key15": "4ocggEo3NrNoxJRhVTpMR7n7aQGshHw1RRJsfxEavUGsbBHTX3b2uQttfC2jEpQ5MSTuQTAdTEnL3DZdaERZiYTb",
  "key16": "36xFWC8Kx5CCKpWjH9VQ2vUEu98MV3zCw5A8rTv3JVixbiHzdQmxd3dPabrHCqpyAa3yA9r45pD7uwTs9AFBQ2fU",
  "key17": "5uE29X5qQVmvpcAkdo7sNTwbkGtyHk7uJkotaLfyayxnss4PmZoVfCH1p7uyeEpVsEV4Xffc3wo3dC9AsfPnxa6D",
  "key18": "244wXmKpp7CJfpB7FmW8SHVpHPmfxoCR1aTU55Hdkfbg7WKQ6zXAcsJYWg5Xotqsc1wJiT36L9ZTcF6FdzYgxF5R",
  "key19": "PgWpDcLXTWL8CCG5KQ6RpUfYCoYRQt2cCwvdGV9Cge1vXavt554FQMBKq7KNKWQx9Gk1a2tfcU1qS76ESkQFogy",
  "key20": "SQvUfV9rh7AQRZQBYonwvpQ8P2znvxQidcPsD9dBWmr3Sxp3c78PksFSykex9uwYE4rjoGsBtoKxmShr52ma8iW",
  "key21": "2oF46nxJiY5HnfSE62VPbvGHizw9nmYJsKYfPLpGDZGfXU63HSPy6Bf9a8UtnLq2A2jbLwN7MkAYmTVMsj8kiyQA",
  "key22": "5niTTMU6Wxg91wi3Y2XnHLDWCofsYV53NPbaAsqTr9J5HVq2VP7FC4msz72ae2E4PVP2prcZAqwWZUAVJYu2yT7k",
  "key23": "52NWoykrN8UJ2b4yx2yroqA9eQbrcjXWT4jX8z32dUZ7x6VraqGsQPKnzVuoHHifTuMKw435yun9i9Do1FSuKov7",
  "key24": "3pfZms4y1id6tKtn8Aoh9oZrSbr4i4Zk1FGgRKh7bL9jTEoeDgRqyWkpZdbajVyc6KSym89CY9WrqAnx7v5LUt9y",
  "key25": "2d3Rvb66cNE4qQXt36RLCgroy7dDBGGiNQ1DxKS4xZwAYDSgeNFq8uUhV3JEJzoLdnBgfcrW8A74Y9qWX87SRfzK",
  "key26": "RJFage7Cnkc5E3oFPmy8a1wvmZm2b54xJTpdKzxL6DTqjd48anWa542GPbn5hw11QF9DQhxV6ygXiNqefrNWhMf",
  "key27": "HTYanvKR6e2HUTSLbGZ988Vv9obAiaNrNP8y6EyaRkDNfTbphcttiSceUreXLwj2q4vV1hnoKt2c7tZVEz8uGN9",
  "key28": "5D3UrmJuZpbsXoBLsom8U8iAipniYpRHt7sqfqw926FbJEaDbcdMjLg1vkuY5VwQtnNFHQXxDR8gY4tjsTreCqZw"
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
