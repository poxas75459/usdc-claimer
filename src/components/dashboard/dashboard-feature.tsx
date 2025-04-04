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
    "uJuKezM4Y61SsY6PWRVT5mreQsCFc2PscDo3dLnsyWLQqLHqNY9ZyVWHosU9NPEfcvt64odhkSApbpoEwTEkVUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "569KqJUzZZUj3TvaNY2mCU6ps7uymx6h6zNS6DdEBwmAp3JK1hi9EVgLgaTA87JX5fX7kht7afMHxrGp4JUwpfQb",
  "key1": "diUyagdsJUosGoPi1gTnrsp6znB34dL7moo3LW4nmhrrXpFX6dECvGCwjNv6tFpn6VGLzrgtKDAzh2LMHUEySpQ",
  "key2": "4xRjgajjWwjSzsaZKbuHLfsUVp9iuRXagyHtBmY8CHaCzkMvWxPxjv31tKgSHhQB59NoifpqsNcpF89u2gsEgAJK",
  "key3": "3FM9PwHtFNTshFApeqDGdHK7BdY7yLT8HWgUnqQK8oCn9MhZ63Me9GDqLT238xRGCJ3nTmoQeqvFNzjZdN6xGBB4",
  "key4": "Q5743dP6t8aArz97MJexYoLYB6Qg8cZboFAabTCXRR3iHkSBJZNWySZgSj6YNfr51k3wi2yNuSZget8iWSZwfwU",
  "key5": "352Qku1bxTUVY5k1efB4sZsrnDoiVRbhnAhgkQj7qbRYuTw5qJe7s2ikoWsd6gTW2tGjdT1uN5vKk4vhUnvYhW9H",
  "key6": "444jrB3ccqxnx3nbpso22LVfDLUVGJvqDeEbFyeKNLYfxLLiTyCNn91x7w3AcVVFXvDsC6K7dLGKeXm2YnAhVy8u",
  "key7": "JWH7XKgAb5VwAeNeeNaLAvqvNEdRoUiGNCvfmM3cKfB45BCEEXAWiAcAAeoieH3xQJzh3KFB7cEg1ewXUkAKEzD",
  "key8": "5Vgn9g21SaLpS8sZF5tBMVTHXVjhHpN5Yzx14xk67k5Cd2o2TQhheTu7ZkcCGMzNHievtKT7DUkrdrrN53Fq6oe7",
  "key9": "2kwERBYP9kzPEZ4Z2Z3EM4TTViYfyHypEYFRPn1jyZizwLi3L6nhRt9oKkou94DuSKqsWKCWeZ3reG7XojG7g2ME",
  "key10": "5MjcB2mMWUh8NizuHTyXjeLDqGHLVeRFuFkYdsz2JMcHpnpT62kWXQbacAt88seShBRQ3mMPw5U8bG4YVAdnLYi2",
  "key11": "2XYxJdDvF72ay1VvkrfRLqkgyAQEH8HuR5T8DuXYZZwAHi6YA3e4pVHd4MRdBwf2YRfDSuQg8GhGDRowPYUdDLbK",
  "key12": "YbyLCAUn7nfxGFDFyEj3KDRfixUzQE1boHscw6a1mfetCRj68Kd4WVhfdG6aHF5iaJ51mqWNzBsYAR8MuzWWmAc",
  "key13": "3XiQutiLBzi3be6HFP94RX9wztW4GWpsk6kVpzwRjLJZYy3cPGnLJjAT2qXJ4YTYGvRbFTyLKYouUj6u48gsedji",
  "key14": "qqRDQUKTcYiL6cMR11F8vPvEEm7sAB2EraoLanCiWAC235GAzUsmBRCR7G8U2SW6cWgVcCyqf3RHDZAcXd8gKqL",
  "key15": "5w16ya94PiYRWY7vquacGzgt5GJXoQ7jLxVioCujvhzj1bGZqHuRudXabt8beFtXrL4GX3KRYdVJfz3m8ZB9vkBH",
  "key16": "474D7wcDCWSwVRrUVxzN5MUJoQcgryWHFEpcDYwSs5pB3MA8xN7aTTkaaTRf5QoMnpz6zVY1xDLtRK9nsTNvxXrH",
  "key17": "5Q1Fewsdh91ji9xcDNPHkG8WwxNAjAN7rMsZKxshZgNYa3dMsbjzdGUNBov6zpWXNn52Yk4aNh62pJTvH2dN78a1",
  "key18": "28PPL2oeisfGomxNsaV2E5aXKK31y22Jd8ZQUhUE8dXsuq6PDfeWjQAMBRrQ1qiSHhtUAoDTqmnvpBuynUsFo3Gf",
  "key19": "5Wr64EedJu3FJ3C7MpfKsYcUm8aG32ZbkNCNtx8XKFyWzUeGq1RsHfLUR9he325zTg7fohqyeyRJ2BJML9qh5ia",
  "key20": "o792dTtB7W1iKrL4ierRQX6gESRG54oy8X7Mj6kYknYMfq41XKMEsoxwPhLsnxNnmGsxXgRoCeudWLP5auCnnVR",
  "key21": "R1sLYHmRxtbZfB5FQ8eyCKhhz1qExGiTKsDK7xbCFpRykUmwkXeP4ccozcGF1w1ULSXpraLjaEWBeAGSA27nyJh",
  "key22": "4oV4gA9otA37Lw4RpAiMVjdC2vS4GTmBDRrn6UpQxhagdbJTt1pvLdtP8dL7xfWheRb9peiAivSHteJrMu4HgeP5",
  "key23": "n6fWjLbGpHM7sqRTBeu9vXde17Juqziu3GnjFhRFsZ26YAifaCZgNRis25AZAwVqUFLoHS1w8hncTyyGbjDSfWA",
  "key24": "MPsZCfS2uxzz6q4fZbYMTLsoBELPVFGFNQvh8B7jowUMdRPmZ4CbiHheUBu5C9VntsjFZL2ttPipn6ePyB4tda4",
  "key25": "2AwgJ9amH6PYmCtqb3xvjPzffodFwwBuyP2NQDy26nAdiSCtgsYq2Vk7fa6Qp4FuFK6yySRkn5PiPSnbRTeNFPds",
  "key26": "4c2sNrsb2suHhJiQQy9ibwLBusA6JJpzrdYyrcS7xRhDitvzTd1jbzHpz6Kf1viL24U559N2mT856MNTuDgn8kwG",
  "key27": "2sdFM31eJyGofTkiZNcwiwvLPsBNkE3f9wrAnDEXvCJSNbrVrYoCf35ff5M3wKLHFx2MsgEEHCs6kDuYCQQgvGdN",
  "key28": "PK6TiTtZDxm7ZGnqY5xocAyZ2bz5mFxU3YYvGwJKrgbUyDagLANQLop5Eo54B71pgynkfRgLT7AbB2g5KJm1jGF",
  "key29": "25Eb6vugb3nbpMgctZmu9dXaifWHZ3H6Ky1S2d5Nvknt6VfDmA9m68us5AXrGFGM4nechixrwRCkgz8kE4iU5CZx",
  "key30": "5R5Js3oUmrN1y5pJavY2E4maf3opT6GHEQ41nnJevbFjQLtgtWuQ2d5SfvhkS1eD2zNmgvj8ytJWWPTLte2ZqmxM",
  "key31": "678LQC1a6mai3iwYMkqaQbonjKoCSxN8RRZNdVMvjWi28bGAGuXShRNnxr44iuxWFzNxZMye2gPXmKRSkpGMysMq",
  "key32": "3HV5914GaegxWWcPMQwUQ6MhRST7ek2tvexxqq74D8Q3WzXZyErFDYRm41DCJydtQVBebhzMZGpoLzk937veQ74p",
  "key33": "2HvcFt8hdgApaesF2Cd1ZQTqBNUxNo9rS7ZUqPZLTscx6uhesUFRXvXjVpWRQtLdYqyT9hjRHg83K3Yt6aGfpchT",
  "key34": "5VtUPP9o4udjfJsauPpjDvo6tRcwfjfrKFuuR9YS9YciECjU9xGJFnJ7RRMe6o6nssq39By5EkNLUTzLFPe5Wt1w",
  "key35": "2tNCCHrKxyuKHABZgpz3aBkb82MVtjvrj2yM9SfZdWDdK7JbbVhWDS9P54yBMDxsm8Vx9GAJ75F9JkhQybs7hgTU",
  "key36": "UzQWobaQofNDsFbpiBNGRM57E99ucyYmCF5MALb1XaHPENSLPjPZXv7BswrpAFV2VwebM21z2Y9UBAWNgjF9w5h",
  "key37": "4hMqBQ6qUGfoStirvqqWjNeqVhz7CT2BzQT6EeDxmJwbdGJ6i39NKA1NgFza7xjUzKnHT4ZRs4TYLNz6bmK8tL6F",
  "key38": "2cV3Coq1UCqGY2Qqc66ozU97BTF9XUY2Hp8CvQayn3dVvpGjGpLk1BETGmRTtujfYZHSityxN2x1zknPjEtiGqvc",
  "key39": "451ZsoFsYkVosiz4BczQP8jRDxh8iyVSW962Pnxgoqj7CA9NYJxYE2YKfwFysdizc74AYCofbNGB8KYdhAVHL47Z",
  "key40": "4vWqwNuthJCtXs1Gxw5on2X83ctKqUJTQHaHExfXWSnF56rV8qcMNhmudqM9ggPjhZ4AT6THH8iUdg7jYJFNLRR",
  "key41": "3pZP7rxCSy3CH2myuy2EyoemMfzekiGWJTM5ja359CC7XCvoJUH4tSM5kktLAe8QGF9Yf2QX7wS7677ntNyAXft2",
  "key42": "4NnX9Aad8Ri4tVkV2qwEYdNghX59fUCZnUCTR6HwnogTCV6yAp9272x2pvjQ4fSTSTtFJsAXzK91KYjEnK61DWQb",
  "key43": "3qNetv9Xo2tGu81hpkm7RaAuUTdCBLGag68PnqJMu5Aofk8AfhusBi7YaWU2a63qTPFuSf52obGKLiQR7ApcCJ6R"
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
