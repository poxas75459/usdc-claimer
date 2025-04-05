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
    "3RujzGxNcfqyC5ZSzG6YbTVHqLxEFMaSPZPEKpzKHwNCUEWuBi2iQVmJZ6P7ikp2Eznt45XZHbEK8PBoGut5Ymyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i3P7SjRAyaA6BAAwo7UZP47j3VyCDBSGaa5YUcsLoMCQNaoXYAixedJnFxKEPf5kNkDjQ3Z4uT9ZB55imMSkSNT",
  "key1": "4yWW7Knhfu7nCjDaPPk6rMxnrAMAeT2ft8HmSfEKi78Dr92PHmagRDtGqpCfU6vFArSkjrwE7buTZhJrD11MZp7R",
  "key2": "2gzS5gTYMQf5pdKyGsxA8rXJpvQWwHwbG66MyJanDg5s16NQQtvXnhdPWX8Actdt9ftbz1Kebpgy2q5BZUA5CGyx",
  "key3": "87Q3WQDK1LcUPZbLmiJ4qhcHG5eyXHReq3wMpuffqkN67qxq8BGjAxQgHJC5NTAY93pf8Cgr1q3A4ADPatQF7vq",
  "key4": "2pxuGodnFbyYh2sT2c2vn6ig8pQeVQDxZ4LTmWPwnnVC3shxNnTXmnvAovGotr1o8NZE6F8tizMs3gM1WaD4zPNi",
  "key5": "2i5r1n3C15LLsc4JebnqR6UvYPYK3FVuu67bVuU7z5ANB8pVk83cfNvFnzTGMqb6aUv6tshMywydMGSVXSQu52TK",
  "key6": "5jx5KQ65uRCXYmUB4BRmkWMwoQecwQoz7fUbNkEYhfb9xAyBeiUrycTEddqiHJ4vMcGVPmFjYvXjzETgZ9tNXBWs",
  "key7": "67DBGSpRuyWN4Y6Fmxh52mvHTT2KowaQnSZuVNqw24UpkrqWKCWswkuEisxpoGo11n5j8oVgrLEmsYcYNwFkTZL3",
  "key8": "4k9WirUGmp2KGyJyVW6YfTCF9ZCgMhkjmSJcmuvfpzmQMS6Cynm2QHWDPMsBui4EHRKihpTF1WDVHQx8Gs6nuM6d",
  "key9": "2RcCUiaTEeueUoBarikAV21CZmJNUtqLJtUgd2Y6Lct4bTeJa4bNj7Kbj4PbfEVMWUyTTbgqiT7mNg1JWPj4tKj3",
  "key10": "5enG2J7hf3rX3AdCTXCwmfxVtA8waQ6dpsPv46nYxhb3v2gZCSURpxf82x7VZNPKFrs5DcLR4YJtaGGbxePaUjJi",
  "key11": "3UpaFJsxGZuzsBNnfMfKN76n955dqFB17DJ945E8WDEFLaR2JaTJbjvM83uL6BfrQUuyjkmUsRRDWcjufXn4yZqB",
  "key12": "48pS8KBMxCiJ1ZwEJjpAHRnUJebiiLqF5Hym2ssAndLGSnzaUBaJJGK3Gpj7UyvhgNN6ZqwwtxPRHVXyA699XZEr",
  "key13": "snvUKoMbxU7eJKAX5eDJuYJzSTY15NbfyKYBE5Fj6X2nY7SDQEpbfDnxQyDhfKYRsjUBYDfHJXpWFgnYW8QLzu5",
  "key14": "2P5kmxVLsBq2K1GuYNWSY45ZFGM9n9xirnMwwudJ247E9YrvbeQiqpUsiMHQ6abww3ewXEhof1wbNze9XVqkPGdb",
  "key15": "4vJRcE1GL9wh5irS6BGoF4MXb4CLof597irYr7JQtKc9ZwLWFrXyKbnN8wny7UHShGGLjrLSeVsoaTGZbLp73Zxe",
  "key16": "WLPPUhnU74fCynmvPg3k6kXvkMWoLViRaEDc54bSvUgMwtchzguHEPDNc7TGjZwuDkWytJbPZHzEzr3qqbJSsVa",
  "key17": "4pzK6HLYGMNWj57tbZhrZWdN9JXewGfJKi6CZpdCxFQi4SwsL9eq3XqPYN4oaWXrxjssRGMk3ywE14pvqZe3h8mf",
  "key18": "5hG81E2LJc3p3GJ3JcZDfAvUYXroWKCfx7XPhBdVgBAZcL1fXJXtWfHwVdVxX9cQNCv5Q8aZ3Tzm8SgaeoaKyMr2",
  "key19": "5iNx8vHapj7DQUDVt3AGZmC4YCiyXKsN54dYBFJoAgyWnxpzevaMxmiVK2MBp98dcVJiwrMpdaNpodigVUcjAKmA",
  "key20": "2KLDeq5NYzULFt59NvpBZ5J6LEm1mHC3oJEqwCoD7RaggLNrbgoQhKDm8pFUmEWjHXVK9sxLv8RjQP9kW2kCR4Tz",
  "key21": "4TPnR3CXt522zXKpfbisguHoGsikDgjkCMvCBex63JagknwGZoyyRfHjL3j33moK6KT8CBDa9enM7CU5bViE5xBS",
  "key22": "5tosJ5GogzsWW9iZRdXFJe4ohJUMyMuYWBcDh9xPk8Bh9sLW2dRDiGpYLFT7srdt3NYPvJpoRWLvTzvQGnQ9zP2x",
  "key23": "uiRHpDeWSUeWBSnYyti52yhfwzwMxQyEZPrr5BDZonvA4sS4A5CNKjTguGHtoTaigUqn5juf4yDjqYmabxwaPQ3",
  "key24": "3UesDkS7eTcuEbRb5wdyrS9pQtYHyrgGsk72FKrVM7BFbYzq9b4z5dv2B95x5wp7giVGDY7NJbzk2WAcJGiZ7SSh",
  "key25": "LxdSuuc4LFxh6GpC18pwBs5PXwS2DvVKENnH73dE2p4wrqzQVPW8nojFy3sApeXuWYkSrrX8DzVWtK7df8ZSnq7",
  "key26": "2LL9ndzCXz6AJcshsvSkgN2RskmCKhyZMWy9rJZ2qyTFnvPkbGbnNF6TzsZ2ugCnZNx1hXVQ1C2geYJKAZP4bZbe",
  "key27": "4WBT19pN3se5UUPn6qVB7DBp89mJfwucg3VoLbDqiA39U7YAup8rr24uy6pLwKxfvGYVRWZnaUria5DygRREp6tY",
  "key28": "4KgAyfxBRDCBzWiktkQGavdqGy6pjWRpcEQfzSvNMvSfQSiFJVbeG6CvDRG7djp6hSRDB5j1EMCoi2RriSEBK5io",
  "key29": "4EkJiw9nP5AvMDcBfa2Kg4yubfPVURv4k6Y1hTnDM637eHo6bdFsuykLq4nPe4UhMkArSQZFjCZHYo3QwhBgQkJX",
  "key30": "2kjSvGFovEXbDN21AxUBimUksjVK5yCJmmnx7V6rpgCqzEWC2XBc8eecLGU8zrukq8u8PeuV8RLuQgEBfFZToqEZ",
  "key31": "5i7w3RuWHSVAwTkr3XuuUGXgbFirUPT6xPW4xAvhHNt9zTvTPurPiYuLuYJmr3f9ejMBBetAsX6kqjpEHBHLuKnG",
  "key32": "2HCKexupk846gWur3LWWiVDrWeVGLZXaoCjP2yWoaKi337ENuH6FZzNopGHEuLhtDbNQVTyv3scXTbYTdfJmNETQ",
  "key33": "45jsS4fg6nw9Ly1dzXmbybkX457iiZtveiScEEKFPuY7xEgd3L8pfoR1JoroXao8FTcji7FVC88UoDgLKottMJz1",
  "key34": "eiQXPVbFct9pZrf97S7sPYHBaBC6fzb3aYTTMGhk5votYwQU7SBeYZKTPStiu2FryYimrF8gcr2Hvq1aAXR25tA",
  "key35": "6bQH7ecr1F1UjVnHZNnuAKHZw9jSTCjfoVv2cBZpHB6Ln2HzwKoLfutMWUM8RBbbPHJP29EPaTSkWgTrwHg19fQ",
  "key36": "4aRbJJnepbbTWSeJqsKv8Jz6uKRSF9V9PyVnTUvXJWysDbqZ7jbAWEGuS7sScNRXMWLU9qd8PiNENNcQmFnPRres",
  "key37": "4JLCnNGPym5wgB16JeDgt7aqoxoFCZB4yEhn9TFBvzEm1bdss6frg3rQua1VuHsrvTQur63YVpVqzYnrdmX1iESY",
  "key38": "2a6x2TPcjYEqq8kUXQBL7jUCoVf7QPyEJcUQVuLfMHsSofhqgeBScjpcK5eVN5JEZLEkNrKWPTBx79nw1GV9pwZE",
  "key39": "3pW37Ua76P3qsw3ow8MMfgPKeNxyTpgdNo4E8x8JMXRzd1ehHw5vqeAH62S9b5JdvxantWVKJFToNwdYS3PP4j4n"
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
