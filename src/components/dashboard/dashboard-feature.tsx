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
    "5qbV29VDNd6thLxLoX5BefyDfwi4ohMQTmqojpVyJMAKGh8ZTex1PGYw4F8WMSjtneWSFqneukU4WNWgYo6pfwCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iseEHmdGHaN6nvw1NsfkEde2X6QTrnK6pmxHkTbBA2suyEhx2UzQ8ugxtqpSTDJRjqmjA31BVBX4FZgsqhpqmPK",
  "key1": "2HR24PBoQUyZciztdc9TpKRZcnVJBBNBpR5sukmskVyw5188U8BAMsAhQCTqQPmmhzfcL8HbJS2wDSMUo86Zrd4B",
  "key2": "2BMZ4xNh7KGU27rH7W6vvWmmxL6XxRKTyBJwqUw31mvjKGkh8kNjb7Kft1dHTTAMvhPNnoHYrUmd5eSMoKtc6Heq",
  "key3": "2St7Qes55wne4JTWk7Hm3XFxJHSNWKh3kLJnSZdjyNSM1V5iSxHnFVpifdi1cyAGEpzsdiV39x71THdMz2bvFWVL",
  "key4": "2zzL1QmuYRu3MHDW6zCHMFG6SV1VkAhfgU3nugWBJjjA8izRSttiuuwQYGp9GRjeDja1BXowuMKSgJhB4HzNSCwt",
  "key5": "4MbxJQ3bqntgDFnUbBWovD2wHYD2n18SXsWSArMRbPtfyRntM575sKhybW4hQpFzH6AkmR6y7DXpxkicEaiLkmgt",
  "key6": "31R3P2DSXMjwFVyBgc1EcrCUHHzgTuB5W7JcceN714ia9ydLzVeQRoKrqQCRxdYUikaE36tqJmhxVLTJ5PPQPZw",
  "key7": "5xcCzwCTttQWW2mKppfdDSJTAytVXbrRVzo7kgYzfCkzTtHGTtN1MiEf3KXUJytUgdFo2do9cHZo5zatBimdDJb4",
  "key8": "5Szt44RXfXFtSR91DieAvZ6RjV2fYuXhyQpCQTCkeW96VTUEtim85MUF9SmcdtD5HYhV7jeqnyKn1Q2HwtmTpvcV",
  "key9": "4UaYs6BEQd5vmzuXraAdNaCtv2B5664oEQ9weXKFqi5CthUg3gcCXWgFT59sJbdELrCnn5YyYj6SS3ozY4kqFued",
  "key10": "4wBsqwkgJCm6i2yykH1mShhQXciymzKaVTLh3uGtuvhwZZL6CjXyMPDitgMcyoHyKj1iqJZ75gKUBxhNHioVHk2P",
  "key11": "2YTS1ja4eBqocExZMYXzmsrZNDAzipFDMCQ6GnLwRX6dtBwHKW7f3183H9Nxu54NguAw3nDwVwB9PdtCuPgBVcVo",
  "key12": "51WoiBYLU7owEBWSKQTfK3i2ouD4aXqdkM8HyDnBgxR4trZjYL8Lvka9A9prWU7pwomEbFHzScs4XkEEx3juG29P",
  "key13": "4TuUzZsBtbk8JMRQE4RMZZQZ4LZU86ppF7Qed4aB2MU8zcqCkRc9TYztHrJ3YZCsY8fWCAH8hGQbtJ3EYYiKz4rv",
  "key14": "NswrGwYUQWZxVFxTFLcTyLmmthjTBMXzh49YH2EPH1qckAWNBjLu3Hd2UwMx4YrYudYCR8Af2ktivG85HWivTPW",
  "key15": "5Ceki6UPw8g2ErJLbEnjAJmt7Nn9axsyq7GcV27H6o4UrTEr4G7azvsb1QzHL5LRQ9KKHUGbnXn4PcELUKzUXn2X",
  "key16": "3JDKu51Cwfpj9riSVs3ocV6SRkRLBJ8HoH7srmTpJeaKUhHGB9uLejSFY1mJ9GAL3dC7iBxmGirE2VK5B991tfaz",
  "key17": "5tWzbbEugzcTA4B4pJcxy25xejTxVq6UuEMFtRyNmPjeCgawuBsf3NAaFaRcEa1qsCAevurByvEpiUiW5A7i7wzA",
  "key18": "5Fi112Z9iBYrU9a7zHQFtMt4RNCxfGKbqGuzih8SUBzVR3mcMuec24kiU6ofWbA6eUEo7b7dH8h65JwAWu6BzRqX",
  "key19": "hQFuAXE3JCjJoQ6SAcSugza3P7v68rY6WzVnwmnM9Wc8wPii3vt2WkfNceCgsRByQEYTBh3SezJTpZLW1RChoaD",
  "key20": "25ivypQnQaQNqy8fg1dTkeHMdqhZB2W734ggqYp57yW6YWAXta4325ahaeKk8eXEvVngugoqNK6GM6yhSxwGkbbW",
  "key21": "28tFoH3Sv8AkvYNCM2wwDcb46WADAA9tevZwdh6715jcdNUym55Y6iW6t9QRpaSN1ioSdN2Fyz3vApr7q1sDaG9o",
  "key22": "2JgJBH1hMtwms8HzrNcUzkmL72rrRxJh2ua6FMxVRj8iyNDpAGSmxn6AUD2q6H5mYbvGEjJWDJwAB1UQii2eEg8u",
  "key23": "5dcqTYa2sxaBgKCnvwTf4mCY4o1cnWhTQFABZxiA58bGcdycGdyaf8h4whNSJfWysr9T59Cc4StnFKndN2qJ5AbA",
  "key24": "5gcKsaUsW7rbnjHSw8WRaUK1TNujuzbJZrNVGw2oND2hzGe6cP4JYA3JMvXyEGYZsrrKvb688nFFRh3LhzuGDjF7",
  "key25": "2SFGMr7Xr7ziHGw8nvFbqWhYuL5bsXWYkuXZMav1rYVfsnCUMSbPga9ChKDVoXtnpGjh8Bry3VtypvmaJ89Q8kUv",
  "key26": "4mCZ8D7bWqCHxJEvqjNLf6neMUbUCGXH56xUqvFLoXLzWzNKD5co6xp5krR2HhF6n24ESDWqaYHNTJSH2LPJnbgX",
  "key27": "2Mj3dgz1N1PobxwwPVdURhYCNAtAucgCSaym2daa2e9Zb2mopj4NpaXrW26BKZGDDAyxWML95oHeZPxkC89i7RXa",
  "key28": "3d9uHJ245qbohGQThAqbsidAXdYpDqivdE29aMtpDnRWgd4orfgHNVdHc62i9BknetwscUuQM3K7PKsNNLC3pnAY",
  "key29": "AYkWfHtujjvK4cbpGCfpUjWHvBtH19NxTCefJQSjs6Ab41oQ5RmXJTQQfVvwBsbcWQAvMDgJFdGRo2zyyqizCSG",
  "key30": "49gfmBQe5sgBHSa6aMcXsd1M6whLxsfZ9LVBfE5JMBc9noQUyBDmbaPs48bQBkaxvVqizTLKFj2n3NvCHs633XyR",
  "key31": "5SiUqFEbzctLqZHBNiUgAfH45uW8nqeZNFBUkQkGfcaB3Z1VQZ83tQvWzbQ3ARAe6HfxS7fqWgCD2v9CnskPkH9R",
  "key32": "ZR1Zos5yFdGMSSRE9ahThbNUgBfaZnCffjwf3kXVDdZDairvRUduBHhETu4NcP9utu7z2rEJDjVjVZLgmGkekA3",
  "key33": "64XCdz48ViWPuVpCrHXwfpivaU94CvdbwM2dfbBkj5PaKJiHXn2C94ibfNwVgcvaw9xxGGUmcit9aKdtFXcWUY74",
  "key34": "5fLMYNxwM7z2H3fHTLLdNxJJ4ZSVDCx9z2sm2CchHVb9h6Gq3jEgyc1u8tVFTR2MPddCrxxmB3SPou9vtcdkfgU2",
  "key35": "1TNjPrDTjgc9RfVt2LqQxscFL3KcGvXiC9Pj8bGX9cJ54Vsicg2U8EAQGscgCybiQgMy3TpMDJze6wwFTc4WH6Q",
  "key36": "v4Er4tuZpKxAmb4JXfi9rdeXcKeUwEfutHypqPnPyDjaSR3SdgjSdDbKmDFDviUixjQJuajsZMK4k57YbAfArtL",
  "key37": "2z5KQnWq88CWTWsH9D3Ff2KGh8GpVe9kgME3jurzpR74Cm1yceM71EQnNTcYc2Botm8vbrCQPwKNtr2yfHpzrG9B",
  "key38": "wEtjEFKiaQZ6ZPKC9D3J81anpaJEkJPb3X2cs76Nt5xwnMAyv5nyP4M4EDnD5tKNMXHhugGzga2iApy9AkuK3Nj",
  "key39": "2uC7LDwWjPsp6SkLhkt4kDfTbZoE2zirRp4HyskohQ4i6ymo21RM4cw8nikQRP9qeBnPwvJsDjs9JsncJdEUGvVM",
  "key40": "5oTVjpTNwjphfgA8FG5PLei2KDJohUTbATmxfi4hCJ8PRH156pyANMskBEijEyr81HsWVajCfDTdSCGTuo7Qf6Ch"
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
