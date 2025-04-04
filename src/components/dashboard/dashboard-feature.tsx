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
    "3fq7PVttAmRbRmXhMp5djc9umxNkM6BBAEuNWL6NYttdhdz9hwb7GpE9hAaKNiNWUYwLASVwcLqkvjc78BmWX9T9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDmC8MLLxVnNuowAEA5KYGRMFKSeopUGw1fEwye9REUgsNx7JwdKQkmY4V164sfbRfHA12SsBAd9UTyGVaRJMYE",
  "key1": "49acjef5wyQFcpe9dCx77HhSXctvuGoJGcddvFXx1L2B6iz4vgjvR99Av3Kzir2n7mL8baEfF986fwYg5tqPyKtP",
  "key2": "3tKZ2gqGEzwqzj1MqZxjkU7cHZ1Q2y2i4gM89P2HxukXcJqCibtGDSHENcY5WYrHRj2dX9CS5QqeAGTaaaSZ5uP4",
  "key3": "4THymUwQzb7dw3AtGKLp8Zvru6r1akbt1SQNqz3sPemnd7e34FnSLULNejgAy4eTXHV3SKyRZob7caJiY3tN1zga",
  "key4": "3yVY2uQM8m2KhLueGh7Qfp7Z1VLFJrwpbzR24PSg4bA8diHVejH9KBZdQUooeh6MDieQTF689J8JLZRVUF8vHjhf",
  "key5": "4P2UWbTEVhVxbVPKzT4NEjxezE3U5xM7xFTuK4DGUQdhVze59TpJFMriBp2GMACQc2MCbJhaPAiMSqtfGxNQRaFc",
  "key6": "5gbhY6drXMNL3nVEQ7vAVQZ7beyKouDmG9aSJYuY2b2PrGyUGVaRvrSRak2YAkdQPsLgBp2z8JAhr2GPSZzoLRK7",
  "key7": "4Hyi8BuKywUBCPHaTsNEiXhGRncTh26pfGQ6ymcMJjKtWHxreMxKDmEfQkkzwxuttWg5b62s5Dseqq3br5Pz84Pm",
  "key8": "42HFakS1PEuewSY9mam9TNi4VAPXXSMT4zJuJATqgWgAskuphdnTj6JXdeBG9n1KmfXHfp58PjSrPmy22cwKizVU",
  "key9": "nLqkvzRo571RFPdUBRqTypQXLs5ajwAeAjZoAvmFudGMHrxb9oYFEYikiBW24fQumwXYnNDU98VutUytKmh9hZs",
  "key10": "21rs9rtAYVNj3ksRY8kBkLqVinfg2wPh1D1U7xbAinJzv6iZLsSYq73jbS2sRv2xoJN46hNJnshxvseek9Anm8xK",
  "key11": "33UM8FvAywzZr7RpTnkya9rHh3G1CgUMMGkBjuQE7NbN9TEaCrsfUbMVeVergXnuhfbT95M6phP1mDibMDZgehXT",
  "key12": "MNmR84sd7b78sJdx27aZ6ncG7tdKY1Hb3GS58rvgaytpyXHXcxbR7hGvjEuhwnnRoVThAjkptBvSCroou9ny68m",
  "key13": "2FmW2ovTevLovY2M4B7TK4VAe8iWuc6dRdWZjBiNwHPz8eiifip5ZGC6KD82DHGvLyohzEh13EZuxNvZktqyWmAp",
  "key14": "4GdXk34jspztkWaBTdECqCxn2em5iRe8d2TkBADM79BGWFdBnUk5oEUY3Ssob5PZzZmti16dSrK98Nj8Hm6YhhPF",
  "key15": "5ux7LyGo74JMM1E7sjnTVcWrYn77a8qwhjW9mjpd1VY6PigQq57hwS28DnUj9Sm7LT9wzyHYX8bFAhksrDv45bMt",
  "key16": "jWFX9bcsrknC3kiDQe1SL3HMGSKL5MjxpxHu7G3HBCbsJfv2kTDbxzX1Z5Gi2yiKYV4SheqLaHjD41heTeQ6bke",
  "key17": "3g6NGR2bpTDPmj5S3wmJirDhbqiAoVNfXyW6rWgwNhkekkAyXDLJWMYskoD1AbfyZY2qYuAQor9EaMdrr8faMpJ",
  "key18": "54MhAhyqvBBfwmyYaNostQE6bakW13rdTSS2BxjiLtu2ucsJzwXrkDkVCic5Z7fWz3EPJCTQ85Y9v8Vst4JSjmrf",
  "key19": "5nSaKhMxG4NbTigZaN6oKVQDiE8q4DWGNZAogxZTGF1qiL7hfdZgCksBJuFLAZpWDGi38cK5U3H9GVpAkgPUZxGL",
  "key20": "5SmVTxRcnaya6uBmmJ447zpyXKWTWhVy8Sh2QPgAZdVXVx6MhwuxzqUjVVyUuQKVwnAmmuvRacdmTETaWzPHn9w6",
  "key21": "4joCUeYjuvqjcTohyUDPy3motRsvHA136q4hjajtUVzwS1ckHempz5vw2FQrkdVHD2p5K9ncRhBnWtqjvCRmbYxg",
  "key22": "3giV5XUYEPGQguEbodDWAMKbL45TQyrtWTqS5hEaN7EATPVN2rfPQ6MrX4X2bytf17vSPDkAiwE1teyQWK2geVXj",
  "key23": "4iMhGoFp1gqtsocdWyqGfY3GmyFPotyqNWghKuBCXePv9hrfdVseMC8dUXJfgYbvmFritr9kccTFwBRvXeW4uwx1",
  "key24": "2KFouoEJnizaba9vrfXvyh1z4dLBQS9RWFSAtgVGUgVSZEdxNWRfCyRDZ2AUmowXnzddg71rWegLqEJFBBrUAdpP",
  "key25": "4U7LcLcDT4ZRSF5GZVTJ5GuxA6VVQgaMbCXAdwgfPppsyXbpbri1yprNae33NsGhjNV1tcvfk9tw9auuuCFWKabC",
  "key26": "5yWqhjxp2QNdS38cuZSwptwUEDCtpq8XkAwHZbXsbo1WnxpSZMZtnCN28L4bwbZx8WL4Xa5xqkcoYUTzN7Lktky6",
  "key27": "369wDz8ovdo7bemJMVczNJvaSUgHTe9YjYGuGSmZtNGdEfgpRyQgjoJrBg3E43brVGbEn3rxGWQMdBmo2qs1wQhw",
  "key28": "3k9V4qiU5kdK3Qx1Gbmrzcx5crcBQGFJ9zCpfoKV3XvqKZCWaHmh7urBqVeKKQNEixws3dMD9rkCPPz8pXS9KVDL",
  "key29": "5NPN2h1ErtYw5v5sbH417R3Lu13x43ATCqECdJnVeZ35D92zS9jn2jZ5ukfAEUe4dy6Z7fA3YLZ2z7am9JJ6KyJ6",
  "key30": "4u2KQ7WM7vK4RSAue726omjZZJ5cwuDa9J6Cgbn51XsSDaVBecTfYFLTthyq3bJr18xqD1KvUZDWqdzRZMHgJPfS",
  "key31": "4MpQ3uKvEJEsCA5S4FtqNXATRzN5R3skMVxfmEF2LdtVCfJVi6HKmK1VN58PviqHLY6cfScZrTHboANKwC1YCN7f",
  "key32": "Nbmkf1PH7ZLD8o2CJ79xjuBmbpo7CixW6pFXka6TExYZFNdZ5BW1CmDUxA3uv2q7S4oNdu6iZmkvz8xQvh4Z6Pu",
  "key33": "4RhMXJSPQhZq255Kogr8Jp4nVQ2YS5v1kCcwTgWx9eqzGPTQMHAA5jXU6BfTxaheDeGPaa2u3kg3CdRrVxd1nSS6",
  "key34": "3kaj9fK6chq356M2wzn1YPeeg88FqGEJrw9DY5kJxgoYodigLAERns2sGtGDyiJaZP6nuY6HSydMpmYMJJyyMejp",
  "key35": "5ZKd2GnnSDhz5vdgco317TYHegwYwzvDtoMN1gU6fA8RenQjUC6okxHFFvhsnhXidYjqts3WX1dPSq3K6fZX1CDr",
  "key36": "66AvkHnsqkgWfqaN7geASzsTXPnBjHaMokJ3hN1AAEb2SR6DnBG6767S5egct6Nfqf6X5EV8iiHTtTzDHwbeBtFx",
  "key37": "5hFKVLCbUGrpkfA68M3nwdChwG5rSaLaHvtQCvXe2eZSmNB3FpWAJtaHiCmULDfJpZMvopjH2uneaBB7ubyqLfXP",
  "key38": "owE1AUexpy6o312Nvk4qd5ieL1wQDQb9RYR2XE3AJjvJbq1mULiwrQ9yRsvqFHRAbwxroqzWfcxkq1W568pZd53",
  "key39": "3sJy4Zs2khoCKZcZpNcEjbvG1FxpZhzb6cqXWdZy3RvFLXyb42tUxtPHLqrMqfSanWkatvh4Ksj3Jvn1kMT8pNAQ",
  "key40": "abja2dS2TkewUy6peAauA7YGhuU1Bc6g5FeACUvWkoLDzvvHBK369amx3gBeqMoy1xvLvmnpmaoWKviBhSvfN1b",
  "key41": "tA2mSPLhbAWXLMhWToKwcTiXjXUGHFdZVNAkTWJeiSUZtdqkucTH3PbvFhimt39QdF9T7TZbJ8espLe9fCLo6em",
  "key42": "4jULv78NRHMbZ8uaVzz8ooKWNvnQprL6d1QJAxPZdbsJ7WzRNzMKiR1ezqD9p3W4JzcuJQv95YDFhSbmxy6wGEpx",
  "key43": "4SjaRheVrZtaTPc1iBGQQXtPR3h9a9UTgFY3aE9TKnsCR1ZazuJ54sSZZoHYF4hQ1q87PKWMXurxhh54NnDiWAHK",
  "key44": "3PMD1n2X6qKwjD3mRgLeBLqng8jWNxS5SGVaDFG7mJwqgCU9vzDfnDZQuZUMxiBY3vkFUYdkttxqhyJwjRuMmLuX",
  "key45": "218SpSkGdfQC4DfWjenBg4PdBzUCVqHUpEvKv6BuprVZk76XwvrwYdXYmo3mf1ffVE1YUcDeLAzB8K8rsteHbqQt",
  "key46": "4PXhjNvbkcA1gb7iDFzer7uvXhSKbj1kLmGLmiWarf6gPR5NKKSzxQk6v27aDufpL3qNvY2HMFZfz8322tasQVTR",
  "key47": "5szYysJPkie7LZX1kC2hEkXHxUrc5o6QbGTMy55nNRfaFYPAGoRfWpiJPnC3gjTWVvgM9uLGzKveQZXJz258gjLi"
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
