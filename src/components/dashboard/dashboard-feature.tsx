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
    "32o392fRMutp6CuefBgN79nHNk1vemZHGxhDQcmxi3fYv92vrtHneJgvBgVj3o1VXTTtK5WdL73rdjihN5EtbFNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32dkR3pvHSUdXBBSNURaP6XqyU3cgxWz1H9vMoLZZnHPZ154fxVqygb1Dx63X3mFogsUncLwkNwviSZAJUv4GfCi",
  "key1": "38TsYYHj48PpVFCBZ84RZUcbPEuzU4P2hiPurhLvsjN2NftxTWX6x6FuUVAsemfCoT77KH2W5ZPYzQCW8ZM57QTV",
  "key2": "4fC2ybWc3aKBcswLaxKhZwSEzKG73eih9gUR12NbGfTUiKMhtjtsnCZ5QLFkzWvsb6gZyGohfwg23Chg3kr96ayh",
  "key3": "3CpDi1W6WuWParQiXNN3TATnBFSN7PZoxJ15vfrgLGW22RYHLmyfxjTQcZDyWqRTwinGSyemvhdrgd1H6u8brmMH",
  "key4": "xdMoq3xwqyKNTUfFyLz1EAJYHdDdGbDyu81hK3sPNjcdd3r1gREUeP1LRRpQ1j63zm8pcSLa1hc3qVMjpXu9Yx8",
  "key5": "3d8MAGuAQEEWnTUW4aHABQT6TTfNVgGn8UVkYAj6heWimC8hMJtVb7MvkmfwzewKwq43Lw1VDyR9BG4ZuTdWdpY6",
  "key6": "3BaydA7QewjuW2uhtUw5x6XWQofD5eZ91bS2w24dnN18jQczQngFdMT9i6s5SzjR3KLuNMdhypJe1D4NyqVnJDpz",
  "key7": "pzwiS7qpF5kqLNryjSVZo8QRcKsqbkyyGkBefkBLEFVhLsPqxPZB3rrvk6irFntdLcBWwNqGBDnYoxuHXaTEFNX",
  "key8": "4FcKNSJNrAgT865PQdysFoToWBdGJNgJiAFtHQfeNeKodiwaceqFALuKHCYnpdxxKA6Z6BLHhHuP3ZmkJTzDkK86",
  "key9": "629uz2rCNb4htH6dkzbBqJHp2m9Rrward9hEdTR3CMCxwy8jNiCUoxg3sU4xWyRquowNqkGbZtAFhnSWp5Lhqh8m",
  "key10": "2RWJ3TwfECfEY14W7x5q4BycnayZFTso7rQy78n5sgZ7XjjrLeofdDoULW5ahq3rVVigas7D33tcHVoL9aATvfoi",
  "key11": "3p4kAdWHQvPTs8XXRJpaP9EGdHzENiWjiujH9GGYt6NA8yW4xVVa2DCMcKE97qypmj9gbf1xJ1RwJwq8fMnET7vy",
  "key12": "2hVJjntsMtUzjXHepBa1khdxwW3PTT85RnBbYtpY9FzKawU5JE5uyx9KqUf2qWCsmB7Niew1LVZR8PBqQ5oxYyAm",
  "key13": "4rqeBxukmq8BTFk3ZMBNPNNJifCJvHKJaRz6sKReesxUfWqf6h566zZLDo1j7Qg6iVS2VmvGZu3K7N29WwsLSULv",
  "key14": "3HP6da1MRg9NGJ44HGW86Cg5SHm1uCHBVMvCeSJZCuRvEbKSSe5eJMLcPTtz3RNXTgVxtURNdjNtBHpM1PdH5zqP",
  "key15": "4kN4JhbRnDn9k8sjPdkvKu2oAWGdAJxnHioeZZQkoDLJ9RiYKZrZMqYZTDkXy2qhm4XNpseNFbNXvCm4EAVQJVDb",
  "key16": "4kcsPRFLsCDHeTnxjhgCZzmGNaM4hScob73RS2pNXcCWfwXQCz32otNeHHqAL63sMfDQk5YPGjsmDhzGJwLt8fb1",
  "key17": "5w5zyFfzDJjG8bbyE6HT72iYkGQpLKKofBfU7YRxoy2HCens4hAxn55ZWExHE43PQdHf4yQRvrKMYBqyB8Tstare",
  "key18": "L5DiLw7ntXrUDKoXwuwx17E4nidwVwDfQAfoCMNKfWsHaQ4PjTmavY2uHScyLsp4HFyhBBkDogh3MLGpvbtSRia",
  "key19": "LmqCsCQFr44yxcyiNFK8mwHMpurNPEX2rhTFpCEUTaXr5wCgR2yauUA2JDJKMtUK5LoB6tJdoPGjfjzLfyLLsXV",
  "key20": "FmzvzWqUmRbCoFGpitQ9Vi2JYZoWU7U8hKJeaEZ26xi8goAiB9FocdjR6bmKpm7jwanCLMtP274HpsyAEEhojK9",
  "key21": "4s79faXfM4LWgwyyij9cb4wx8r4tNKUkVdU28q683ApjaF89aVrkfREw5SztUZ3R2yxeKMA7fMGq2sj2Bz8va8nN",
  "key22": "5Efn8vXa23qrzf29DDr7FtD1AE8LHGHxUo9JLkHsyLdygqEjb8PgoyrB6iF5GuRUSYPAkFzfZZTkavL63XKcjWfU",
  "key23": "2TeD8RXPQ3Wx5bUEeoRTYw2ZbdtnUwCn6cx98XYMNP23XCXugmSXvUMJaLMbjPMVWa7j12mTV9B4UHqAyJLZHieB",
  "key24": "5jVPyxpt1RZJUb27ZcgCiGGXqNTyVCtugpZ22Zava5izV4rCiUt56w5Q5D76cWoMQ4zvk4A5yUa32v4bi8TmfW6f",
  "key25": "5uTT6zKkazX7qSaYCb7kXGpGYDXtv38KE9n5HoZawuVaY3xhfCcG6GtwQJg38EnmDJgt8SUgLEc9FNdzQXGHMz89",
  "key26": "5vERkM7ZQdknwZzFmy6vQmvhets7JSUAojmqz1yd1g9o1MeQnaH1J7TMvYXHUh9CJPwiww5SW1q8pcPs6hNUVLSP",
  "key27": "3AzpC8yf9NyNPnPhDNzNUqEsNtpUVph2Zbzcxtt66zaVWx9dK9xFbQ24cmojShmjhjK2fSWRjXuEcUPmDqpmVgYm",
  "key28": "4y5rdfCoBSxhYhSXMSNXpmsAW7rcsnKxHdApe7o8fLUynfs3mRGCRUh5Q1VN4oHDXRs3gSLdJUBhQ6bSbuUnRgzF",
  "key29": "3Lf3hcfZjatD1nWP5pbS9Khm6cnqHAGtbDSNgWGYk9fUX5kT9YXVBWsXspHJVuLPcVkDS9dC8AWxNMC61tHv82VL",
  "key30": "33GHW9VHwSv7zdqiMBnCpQyWL9uikaN2ftRd3VtNdnRhV1tyGjnayQyQJsyvAsZeyDK1J9RRKpRjBJm3fse3yuxt",
  "key31": "psSevkejEXneEQuaxpSkkZV9V1HTD1xGWjgPWVuwKhF5tWbJMsuc9nDt6PSiLFGcGm7BY33qVzNpFH6AugJbKyk",
  "key32": "5xkFCKFfZpi9h2GbZge5qu82hmsmC1wThGpohGcSm33oZ1jCBLjDB7R6vQ8K6D4zahfTRMzdHtoHpU81S9N4yRvm",
  "key33": "QDYUAUMzUuaa7JAShQFPSpHZn3ysitVMBWFmqJ6vQxi5FazeBnsnVKZFsjhkbiF9ekeGEp4c5h3Njj3p3DhfnJQ",
  "key34": "Z846Ahr9w8ey31jwzwDaaW3tSnchv36qZ3gdYohLMzyyf6h5Qo27BKuGjVmhJhYt5MtH5ghuTnwFJA2aFYRzPXB",
  "key35": "3ovSkvRTUPFBJMho27ETLS3CaG3sRULRxyoin7gCRUwXELswccFPqnKYMMgVUafb8Cw7r4NYHxjpjfG8YD3SKpBT",
  "key36": "6WGsUuxfNthaSERyfYWkrzURVdhubdmYeJgfeomnKKYuXshz1YJhbmgZyxjwNmDiKUjWpat22NHNXj3FoeFeCJ1",
  "key37": "4YHudHND6tSsE3E5j5qsgdrNVsagHJCry5nz2CsBiXanupTsxfe38CgnETUfySQBH3gPLJCZZvuek1aiaoGfeqUk",
  "key38": "3remQJ87XwMQZpT6vapMz4Sv6pKciB5qXPnp6ksC4wjv29KbwECFepVRJH5pCoGP9y69TWJPwsSJXGQxaqLkQJ5M",
  "key39": "23gW25iw3ueyxRn6vJ5g5TtBXghVFcGNQCkzGuPZwpMEjikFS2FNidhrhnv2KejVJwRAWkVbCVbiJsBRwcGAPXhp"
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
