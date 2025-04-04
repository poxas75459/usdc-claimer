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
    "3eAvs3oayEGnFctt1LLvgYmRcv2wRGRqnDvUJyTsw2EzKFDCTH8Z22kh2qFoRs6NB6SBBMcTfyT5x8Bcf4pHTa4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LQyLz2NXVxFjjkCV6fEjVncbePmsANeeFQPE8VNzVcyHYSUwkLUJ9tUgL6UjaaHb48JcfJ8oGzZYMuERLbdDHi",
  "key1": "26SaLfCjeYp4K7dM7nTEYqTFnWZpVzJ7GVb9Yp8CRcZ6auz399TQ8pvU8VqQmuDkRL7EnBW7KGT5fstnNj3kktpD",
  "key2": "2pZg5A2JNVPL7g7qhs73KqEDxQZUtXUaKUUzqzS3Khtvw5LgcYLLGW6Ha4j25pUCi6oZVNZdRFZS9Dy7FrmwveNQ",
  "key3": "63dksW8VRNn4NLpWhYoeygoXxmYfs6kuWWgVEeCw9U8gaamAKvBR39fcRwWftDCLLo58TUHh1KDULU2vtYuLXvWW",
  "key4": "md6BLt5XosmjmWRMXL1Z6bYHrrzx38j8GWUyij5wAnJZ3wBuq89DDjmC8Y6kLEoGFaMNbvR2CNgUNatNEhTYzwx",
  "key5": "tdsjC48MB7a7BJ3cFK4zhV39VQjgW4ReozZgS7cfThskKRLgbsRYjM1fng37EEqbCugo81UZkqFrHfSPzzVLHb7",
  "key6": "4DmHb6d8KGyhuhN6hucW66r8qdbMPtn4SQD1NzFgGm3yemJTMNCq72KCEjh5RWnQ486QLzwSxWJsHKMHDiA1wRQc",
  "key7": "39nuwEica2egK2ewsMY7GudezfW8dhFyfvVe1LuNcZMYszuJiTKpp7ETc35ksX4quso5jyxhVCNPoJfuD23DVb7T",
  "key8": "2WpnLQ8H4dZrzS4DAbokHz3bR8tqj5ThqSNZ9JD55ad2LXeZE9xMzMyLozEa7enMBRsZHwobKbdSzovYNTeViEc1",
  "key9": "2qDQXZSWWK84nD7LfpMgaABJFARjV7dDPupis98HNPDeAMTaXFMqVZH29zb3sA2gnZHw7BFDdiXQPMXeNGDfGmPC",
  "key10": "2eoEfQss6EeUZX1K79UuMm7LNNcKp4PhgJHxWGWo23YRYKYon2jb3qyMhnC5wYgBzZif2m7cBkr3GcpSLXX4k3KQ",
  "key11": "ipWCzxdq4LvUi5f5AqJ7BjUxifKpU3Wm5VWd18QdX4NKFMVPmU7g9JmQfZC1V4DQCPjfAnkYVcoBMbjktynYjbx",
  "key12": "42h5ZcrbpHyyHLgixU2TssBzLRobL1dBrMYrbpNzcT1dG2gehFmd6m6Jn945erbKQgP3VeNnjGapWDcNN6SxoCdV",
  "key13": "513WyWcg6boL9PM5PHYHCmqVvSLiZgMzvLUHrmh1AED2gttdonBxC21gcHHjtsm8qBKH2T9387HH94nmXQGhTHQb",
  "key14": "2iurYtgMzBis45oZtkWT8uPdP8aho8Hb1bewJVMsdcPVxggLNHPyw5REr9rt4ENmbZMoMMW3j2gJEzoGNcYWdmHQ",
  "key15": "3TDgBevN55vrZqqWS31QqqjcWreq2MWuEo9sLDHfFFdFqQM9j4cQhgUhX3YSfwqsmpst2PGJTg1sGde31LwzMmZu",
  "key16": "5rTWEHpsRv6Zp86Tx6AuzWxwRd7mVTMKFFiBoLhDH3LVADGBE9SKTduainKBU6h18sVcGxjqAKMTooAqDaxzJovV",
  "key17": "3Fm6Nbad7tyHMLCkjCiCososRt7xALYcRyTvpfALWc96G7phnkbbp21Pvpx2SX2eNWcvhsBQvScD3PGmF63zN8Wt",
  "key18": "3Mmsc813BqaNiNqsg3NhhKKH1pJLE4YzmRCNs95knZj6JSbeTs2VQZH1AF9YyAXi9Z4bbqmRQUJCcyBzzw5gvpDt",
  "key19": "3nQzpejoBzW3YKV5TTEh6ZwGC1uFxq8akiKkATS2y7jA6iWYfqgFwM4gJr2Tu5XTYqFacyXuosGsAQCKAGrYevWc",
  "key20": "3dBaA6j2QbbcNS3cUC84vGRf59FBs3LruCANSVyn3pfJ47KcRigt9XsKzNK7NT7PbfpXKezqb4GMbBHsx3iEnq2V",
  "key21": "4y94iM5Uwd44La1sCrFoBVA6NJGkCE9UM5aCJkgmyGhNSdfBYRDLGutmjpg5ENfjoDKqiP8tvarKNwaS9HqVv4Jb",
  "key22": "3hb3SKoQ9SAT86ik4bG53KZZaBAA7H3mrsRo5KwXaAjc1boEmq5Gz34fxQYzpft94nD69RcffB6EDihSoebD4s5d",
  "key23": "2y1Wp3SLga598m1bimrC1gaiuYCrZXu4tULq4vrarMGeRoCZhFyLfmjeMqUWWhUXZhCWQCEc8b7vUpeaGF7dEw5o",
  "key24": "CABeLHJLpsxzKUt6UJVW7J52osBHZv81YXLAojtA9b98cTc448LsCDLjKMoJQs1P4ZqqY2dJb8aNxSVjF3VtcV3",
  "key25": "4LG8fujxx91weh9WWLqZpdvtjRWJG2D5gCh7DRwyWsqbV9FXMf4aWtxQbAnFB59ogUbXXJhMEjnp53mHoxvnsj4A",
  "key26": "2p9VWpkup9V7MR3ExZVYcgDubGmg2jtoAVTP83cU8K9iZ8VdYYfdRFrMv2vMGqzJ4U6xGLTM2bZow7dX6A2fJWmt",
  "key27": "3NLa8yjJhBoEXgdJsBcqPkTyJMNyWVBAXa5LgFtWHm7kN8ppcTdyqf3ZUswHdicdsgxM4L6mepeHJ1sBh2TCY1np",
  "key28": "57iuadj9ukqvumv3VWi9KSJ5Uup4yDbk78HEpVJLdhSprMS2To9V8xNxYbv84E7rAzx5ozGKSZkvB2QD2NginG52",
  "key29": "363fQyAgyj7VyhDJUFKqicFL9bmiv76xKCa6W3staAUTjmUW1jTkPp3qUjHEaRnuA5hpdDyMHParEW3xaB85tvXm",
  "key30": "4vEptzM1UPnsm3vthik7Vm7zv14NsSSqQ6rwdRyxPriLiSU8p7zfhMfFe9Z9L9LrvkwZ2HHWcXwVLkChzVCMYirG",
  "key31": "2pj25zbXSxWZmTrjkxdCeWiSu3LutKVc7TNVXVq3aBN8Ch8vfrT5daFUX5S7gmtb6LhqsYZaF6Z8V7R9sfiM9HqD",
  "key32": "3U3pZeAojPVGVuMrJKEYFE8d5EwGMCeRyU74UYB521MXkAmWqB8Mxk4xiMoymZoT8KSmhsiEtTGGTCpNrAMYH58Y",
  "key33": "5XYuewjdN8NEAYY3g8KVFwZyxUtGHPWW4J2M6PG77vehpoStCTKKVuprhk9cNtAR1n6wb5pYpoWzXBFJDXE68DdK",
  "key34": "4sYkNrbT3uDrHLsPctAsd6SbNvWpBJmP7B6pxjRnMiU9KBGCQX4UNN1tEdnWKe4S45hz8EBd2nMqmBXWDma7bT6j",
  "key35": "2wQXxR39FJg1gDX53k23WvzA6UTzMJ7ohHZ7rNZBpqMBDxbBBMi4YwAnDF84YJS2yaQuVpUv43thM9oqhV5E2iQp",
  "key36": "39Sc96w5aMPu8xWVRcrgoC5DVkw2u1YDGgGoAeAnTaS6U8CVBp51Xs6KAFEJujiDGrrLDFsvpbNVX5EzrE8UrGEr",
  "key37": "LeAaiw9SQNFqbD5u3uTzRuQuqP3frdnzvB5qxyhFyczmFsuKrGBzcPEj29TmSUHUodXvqxccWo88SNL86iKeMMM",
  "key38": "5TbhHxHrxtoy9m9MMpR99oeYQxFkVtCiV2o9CRYRwB9TwAzogac9PHyc6XmTgXF68jeNKU7PKeVnnsideoEd6E6w",
  "key39": "55RLhPZGPysHb4SbyfWP7curF2Me3929xfNGt6AZYdN6gEwHKwSEDX6336mVWp48jXxjUnxdZfJB94YPFT2wcF16",
  "key40": "3X53QufAGtS3R3Hy9ACnU7LZvfDjFxdpVN77bGUUNAPsbMGSt1SratLjgSACZw1AZW7aof826bLmGKqzTEzwdstx",
  "key41": "4oBzpqc3GG2DEHtowJMnd9v9NoFUUVeqSwDnRYWsgNCjP1C7FuwaEVs3fu2EWXSor3ZsR9ZayH3M29nMcFrHiMZ2",
  "key42": "4zzf5jXraPsMAcwKgCeEYb4NA5VbAfK4dVJEceKuthRXYB9nbRj2rMsTrDYA72BD9ZwszUPn5iwLx5bjN6df8VwE",
  "key43": "4uGi81R3ab5aVNmUHmESLTRh3ABKMuheVfjQ9aG6j1k9GTxjY4baWGRn9YDwzW7L4cutuFdYLPawTmUkv9oVtFrr",
  "key44": "3VdHVuZ6sak66hdgyJk6NNx78yHn5XjarWUk8AtNAqncegkkAuCqqyyiqz6Cn8KbHytirWaymJfpdSQ7Eqw5YJXo",
  "key45": "3yUeiVS9wG7qCmiet5Xn5AKAbhSudu4KLyYHjLisManDAz4xUMdatGP1QmYUVRiKp2ujkAg4SsaRFiKDS6HiZVDm",
  "key46": "5JypwJ1gNUr5fq5ufWizNXVCgKDsVYR2est7rtdNtXSTqb8yC51JQnaSTWE5sKqV5YsQiQ6ZHHHPBKN6qfD5m6Rg",
  "key47": "KMfJkUfdrtmbMyRerNLBQraKncN5KFzbYLMXwKDzBWYRxwwudUAHyDWQQ1ujmHCRdsUJ7SsuCDq2vfkEWrfAHa1",
  "key48": "4yHzuaGb27LbAvbBdQ66vn2va1HrHyYNpEKxMYSvrW7BpsVXWQRiyeT6SyR4SnRxhf1WdFYiUbRU5LhzPwdsHdhc"
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
