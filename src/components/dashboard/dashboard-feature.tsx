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
    "3gT2QasKoBF4yuVGFV31Yn2KJoBfRGrhQECJhoR3ThSS8PPx5TGn1irDpcL4f74LaxCytgWA791ZHDsE47KySX7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWkPHkNb3CavxavQUN3Z11FZvbVyWV8AeQ72KAz3ixH8BzJvnw4wn2fFuwokUWvcGTxoquhMM2rGTPAudJaCakY",
  "key1": "4WZTyXV4RGzSVGzYc5BvAKpasQz6U5hp22UhVAD4ZmaCw2bGtoeCu5c466PW5qR4GRe9uBsx5bqjxccFv8Xmk8T7",
  "key2": "4wtSRgU5f34FuVLA9JJgFGrrJF9VUsdhmurmXRnrRmQPyJdkQXivEM4ZiZebZ283xwJmc9QD9CDUg9FXagVvxL8p",
  "key3": "57rUZtFZN8KNet9GXUKXpNidPTdrtcwtNa9sy2Qgwr7L7eRGZqFriCszUaGn44Z6CNYbddx8zrS5bLhzqS42vxcu",
  "key4": "3Weg7HhxDPZLtZwzuGbVhY7wsasK5wGAwAm8iRqYs7redqSKND9kJ48Ah5K7TgAovDJrioUbsyZvW4qq2qmo3VD3",
  "key5": "4rxEPYFQKk93me9p2ryyDqWK4ogjNo29jFoRYNwfeaG982YdtiiocDeWLyxDuhMwXBZweYQQxkPU24mNGbWRVq4g",
  "key6": "5MYZSVPfumSSjRUomPUyrSfxd9ZDDi9iRYYE5S3jrLTkTxsUjDwBFVtZri37tsbbsx4dCvLsaigUrgnzseGFS7Wa",
  "key7": "3nyF3QKjovDkhoFaDrm1y377JQi44uWAFhkmrg4e9WZbVwLHkJDLQmFoEoYy8dV9QDZBtZHfwN8NpSWHACPXg1SV",
  "key8": "4tHw5RU4ogDTTN8UaFVz69wjN1WxTZ5ZvEbzCrRzThL86hxE1V1HKFzrub5wT1Fta9cThh7rnG8Rq28LcB41PUaE",
  "key9": "3LeW1ArnhuZyAjfvfA5gGhd1nZ7GMxUo6Cbnx4Xs8Y6r85kGfENFw653pnHm8RAQ7sijLyseeAMLp1u6PNQbKkxu",
  "key10": "4eJ5eMApzr3XDFZwC1dVk48M3yynPXHNkVJoYLCpc7x5pan39dPe9zq18sZjwRUPijy463dMiSB5qsg6dmmtnbU",
  "key11": "34wL3Lh7ZLWaogpRvUXbANibx87u6hXxiYjLbHa8PrGhvYHG4yk2uvQUs3h1xLiF5RVVj7GfFv9dEHC5oiKFdz7b",
  "key12": "4BTzSoj2P7xAW5yNv8iXdB2pXYzoXz9XzaKCio7cnZLyLWe1Cr3qy7MpcocL4k3sQFfrb7Pv6dF1VqjxpcmW939Y",
  "key13": "R52wjcQU2ZSNwsP8Y3WuHdWvgMxFeYxkdfLufSXmY2o3KuR6tqejy1twjcWQNp422GjpAL5ZyGyUEgofcDmnUhs",
  "key14": "2i3BYnVVNinKXD6ta8aMbg7i3KpkRwxiQ8B5wxQ7Fi1B7KVRMVFYkuuCm9cYWkKERL9bKitDwZQdegiwV1FPeGfG",
  "key15": "5MgRymdiF1NE4gJ1tLEc2uGDwJ2MdB3DWoVwoS1nnb2yLfTrFMYJcfroWEHNTrEAcy42oneakbQTq5k6FGnGuJ5C",
  "key16": "5PchzjXQnsba7FmQLc6PUSCmVjvRtELzgJiENkY7p9KKGYc2LAKgx7fZXt6mKkzZMH2QKZBWATRUimq7iYJNXcju",
  "key17": "prZdb5tgpd1KtEt78ddHUMAyaHTHKG6ep14vY1ZCBrTuewUzrFf7a9sKi1Ax53YwYk1hyLPNnMEzXMhyQa4CUaX",
  "key18": "3KDVjvtiesLjvyCLd8bCN9ukFXgjTPpnisHvVpVhgbwyv4ksdvCGE8T5rMS8Gw5m2a3HTjDCab2969DYP8qLPgQN",
  "key19": "3gbfAnka34RcAfMcjBkUMUL78A65FEEGJpkRHgVFQPDfZXaf4iBRCkeo81q4kvS4JppsHdUUTdjM7tmLZLjANEGT",
  "key20": "wBxjtgh4hzDHnavKgSCxbrnGD1aqJuRw86tVSgaiFXwEcY6KvjyFrv4WoAAjmBht1vkPSPMxCuN9HWmJumaddpj",
  "key21": "5R3dXQ1H4hpRqvwWhuc9HBbP6MgfC9zwHcEahxawpcRvNoYW6kQTd19uLVe8mnmy1Sg7ucZbJoa2x43yuG4jsqKe",
  "key22": "2S6Aj7fKLcD8fK5Gnrm4Zz5YyuHoAzmQ9pFQJ57qaF2cE6L6gAjNYeQUv9giWFU1nEMACA2Fy4dpEkGzC4fktn7v",
  "key23": "5aLZPYNVniCVTEvoPcLxAptVwffJrFSRNqo8sjVcxCEUvQSbkkbX6vx51pwnpFvjF2rL5Rfksc25T5yEapbRBm9s",
  "key24": "3LoLYjsSYoMZyDatS453Qr6JfDZqE1i6mskSWpA4ZdxyRcHekuMRiEMqy1hzE4RNdRu6M8jCso6sp2Stzop6wV4w",
  "key25": "4jTao8uws2izRwPgzzUUDY4GzywQ75STE7cfj5L4GnUk26YuxVr7ub53aaucpGvW2xotpauCG8C2hGzsdKAVUw7K",
  "key26": "3Z5MXR7pFJd1UkPSTjADvTeuifstXcuGaWfFmPHxU5YtKXCKZYsera88ZHdTRgvFwN4hrZ3GpxRGFxDaBCgbgfhc",
  "key27": "368mTg2ZV5UneDGB2sdTmwed2etpkpcqEUPBvG79eYJE4pUqFNW5hypLxzC2ewx6wJAFognUy3gp8dhCxUBpEuYb",
  "key28": "4T7SRFMSqNX2iT7SjaRVfvfhigwHeKjUnQ17xzGJ8YR3UUbbx2LuFX9HDNFvef2aJAbjGmxEsPEdE8LpYJj1TMF9",
  "key29": "5kQeH38XCF29mfrPfcbikG5bVTSAQAssaUmKf3ZDYRTWjA5X42yVf1BLRAPB4pcjerAFzzyFZjf13eE5GHihzsW9",
  "key30": "5vD1M1pK1fTEg775vTNTqEshaCeMunHMGj9uDxYnXADTKK32K1V1x9CoL5YMvjzVt1q3rLvBNUKnhuLahZsDmujE",
  "key31": "4qdDEPdMZwp5eFRWCm8LpERUc9vTgceXMqJjr1DSHU2xZjrLFeoWkR4TLu75Tg2xT9MBUUxQA3wFLNxYmuzaG2m4",
  "key32": "3cgGqH4rjASsD7s4Kb6Sx2HCNoYSrB21rB8oznrtaVUjB1xh5bivw3BANSgfbe8RWHVCmVUFXoMvM42p8qD7DVWx",
  "key33": "24V1wsW38gZKfMENF1zFQzPKriL5c8MeGFAC9n4iJ9NbcbcTdDN5tE6k6GWuDCBrN8GevGsokKUoU1NWvNNqH29K",
  "key34": "5VbQ3ci5bYV69XzQg7ZRs7P2BoaYvmRv47JuNYDkMrdAMHASHdX3VbBdyFE6hsE3yMsTG6DAtL7iyrxVyegR8GuD",
  "key35": "5Ve7LyF2skJKAzJs6FA7aqVQ57mdyzSVHBjwUTvmm3jFCfrP9f64dmZ2kBe7ZJk2EEgF9idmvAvLdBmVbqmz1UNZ",
  "key36": "5wNTRtYBpGHWy8NuyUmr9RHqiw8nGRPA6FFmPH2v7zLm7iEQcRvaeiuGTTt6iB4yurNKZc1PFhDhoC1j8ELmtjud",
  "key37": "4Di6WJ6a7hoYTLMwtmaTB829ytnxvxtHN6qtqtj7LFghTrxuAHfkR4CBbWVqWkzBc4ZMmFqMkqoRsqPGX7EQKgjV"
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
