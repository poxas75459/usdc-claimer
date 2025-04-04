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
    "4bmV9Pqm15CcC4f9ZabmK8CVkySTweNiKF56xRvhCiKJK5j6St1x96nKUSLcMrL7jHxj9zoDX9WRUVAJ8RS9it7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCyRNLBW1R59niv2VmSetukZ32uCR17jCAmH5KM814Y1Eig3FBpHc1GhWKMMTwarHwsX6iSx87Tboh8QECpeoQN",
  "key1": "7LkaSwaTksJdArXvxE4Behc2TnpzACthvho69uZJ3pyxcBZVbVNHXz9oJHxn4auVD2pTwN4CFwNMLy9eekHV7HB",
  "key2": "aN2SLmUGL6vwkAJvRqHZwPYwTHTnX59XQf5kvqBZ8PmpBqpr7aMUk35LRfDLzVXq8T3ysQxTJprdc3oU3MhSN4m",
  "key3": "2ouri3qcHMpbec5oUmirgv7Krxs4uAsWgjVPECbkXwfeZr2wC32f377mVbcXL8Ur3k7pLzBGD5HWGfqQRJapms47",
  "key4": "4ntBdFeYv5QspRPj3QeRadcN2WfhnoqzMXffWVPQXxdjov8pNbEEp9DxJ1GSti3gexnRCkBbrpbREppQgjJTHqL",
  "key5": "5KKS1fmiqk3h7LfoKPgiWCQvtJzfEn82rRXWUmryRfhJ14WZ7WFcWv6U2EhgSmwdfr33NriwX11ta8RHaKuxs8oW",
  "key6": "BghJ5c9BuJbSZdvXWGfyg39LGKyCmPX4EHDauUHTF1CxhgoyXeYa4o1LDeQyLCfRTqGfeBr3a8SVXDG5Q2VQqyU",
  "key7": "221C5ygdGVyEPotB9BL6YhFcSLg7hYsuhcPXKj3kq6hoaRhdEicxB45Z6S4gE3kLhSpWAww1HxqnbdEh8whtKa6p",
  "key8": "2Vk3wkacmZ2iLVhX8AEmHyTQhQVXweJpjj7uVdkjLGoPrLopDBUR4T4rdQAn9Nn9AoKjBGB938VBBzWrkQW5bvh2",
  "key9": "2wnTD5XdJjqSEE1JZHxkRZeaAisa8iZfXftqp3hEMZs1pYPu1um82QNb9yng6uhmsVXn71wDgD4vxpEf2D7x8otL",
  "key10": "3urrfKcKBLLm5qJBDBRqyvLrHCHMgpesEQj3nePtrkDwKD7dAKw94KvLmCRqhuzThezCz7NTcLPZb5846xTzjSte",
  "key11": "r3TbZzE5JrVFkYGnFV6rufyaTi38UBCJ4JYSECpQ7pdGYEYcdMykXKWByYu9FeNe2VDXYzc7jaDUQ63LiRnEamn",
  "key12": "77Uqm2ct41HakVBvYDrfFuCBjyr6fP5eDCaLrs6k6Yvh4sDZRnexbwpvrh5uf7DGQBNVNhnx4J2gfEY8iNSUh4A",
  "key13": "3vZgocdqwor49Eu4ZkLkrUZgXatE46BkbsgmSzqgi9QBMP9kFm6TYF6yCkGGAd8XgBVtXxSWnABtiY81XpkSyXtv",
  "key14": "3JWNHsqf7xs3Y63va5RNsicGx3M1hNGUb8nSg1tYpM2eX8fYbfGFM4ey39HVWGV7Knqx1MDtpTC6CMkNG7tnuFcd",
  "key15": "nsAi8UYHJXjPuayQV4BDTLrzJ7aMzBKBjTQWUDe8NaiNsaa14GZJGveKsQTfQbQsZ38J4nFn2jPUKocjtHn1wVL",
  "key16": "4eqeFeYbsR6Fj3jrE8nLK2kwUzLBZzAJTjWwgLmw1aoqZk1reXNKbPi7Tn6J4JvLGEcKaTovU4knkaXQDq5pm7bg",
  "key17": "JQB972BmfsE1EQQHm98hgAd1HukuuL6FyZzpqz3TL3QeTtCSFhQnGVboDiF2c5jYBbEwaTUE7eafngMbbJzsXkG",
  "key18": "gu998fBEMQzL2uRXCpGJiEx1rCwNJs5yrTGvQLMaUFRizRBCsmcJH3D11wSD62QY812u2BT9BcuXKjwNjGqe9kZ",
  "key19": "UM3rnhZzV2FQanaMdoWgaoBPukkQbr3w5BZkJU7sk2YxVbUekDfXgGDQLzC2MYENSNmw3JGB21uPusk6tTcATfy",
  "key20": "5Cr58HuhLAcpB8tDYJNRX3oPeN1uUGBbej8kqScuyXpnvZz2JTBFhYRTqmWadFXTqLfm9GKbKBKrp5R6rG5apveh",
  "key21": "3kEbHuQyaXFBt6DS5U1yXG37c6NDpSr8pjnVT7tKTt31ZacUwzmokyjqLAVB4JBHNQpDwzkU7mizVyNrtqVvS98V",
  "key22": "jFfKytz1XJADArVR7LYbEba5jm5QYFUDYp5n1BNxbNxwZxqLd3RG7q2pHATnuMcJn7jq2vzwaXBqryQ88yP3YDK",
  "key23": "4NeY532hZCixFFwSG2zTCrrHN9m2PoZTfGWDGhLCYrV3PsEh6jVnC4yi5Qf8pR2JByZuAEwwidP83pYYqd5QdXQr",
  "key24": "57MceJHDJEWwNJfjdt6ZGhCzKuVQD5uBuTz4ZapyxfT5nPy16T3TMYPRtBUvv66t8psaftiu8g4e9pwGuSA9vju3",
  "key25": "5hzqJqke1t9M8ToqNUnnvZvnjeSRSqkTvLvnfokETxUsQSaDmUZxcX29phHpnkqehCKQ6QAnjmwyL4M8RM4EH8uD",
  "key26": "2V3StDmA3zHaDuYLR7bpwY2H1BeStCgDLjNtUS7VmdqR78ni1e41j5t5WBc8xSTmUcbqain4iBKmpcRriNx1MvPg",
  "key27": "3jRPi8qty8fK2TkqA6ESNFRrSC6tJkCXHF36cMHnM8y8uxuxVH26ieAsBH7N95VgpiCBQTmE6nmEaU6tnKHroCnX",
  "key28": "2gcYczsUuNw255tbq2wPJpf2ym9JiryjeNjBab39dYDVQtaUvGvDpw3GQmWMBFVD9k6pTtP1W5SHjVTR2UtAciFv",
  "key29": "2axKcAdhFi1GAYRsPPUGd2tvhKLGG5qxWSQMBQxeSwb3fVCSstPmUDcVoxKd2cyPtUyUxFoUs4NixE7DTd5U4QRz",
  "key30": "3ebnYwJcsJzMXneFwR5rUmTeNyoh68DTPHP46Ckypfw5gBFZxVfVgQDWuUBgxEMtodkYTxSSaPRhfzn99ZashrHT",
  "key31": "Db9Kra1sLZZNcuXV9H7JgYtc5m841mMsTBQb6BR73QQeP3CCbbLGGNfUFZmCherK89cfF8v4pfpUXMDD25GM9Q8",
  "key32": "45CFf33Pnpdy3qNEWyAbyotmNJ8akV45e8h7Mej9iZ7UNkwLj2k52LPyFsLroJkAJnqJE8RdtBNJDY7bN8eYdTjh",
  "key33": "hxpf2oVR1ykp4i4Xz38u5LeHLiFuZcWiTvBiQfLg4cr2ZPHE6Xnq6ERtQyYKuvBppMnaargURa9JSgGsqjFrTRM",
  "key34": "2cPpQXm9jAvJcXHXS4MztAPffwc1M2wYFiiuYgoF8kF2QHz2Xpa3gjV6iv5K7y7tFsD8H94QnsLBGNPoAMJrp6j9",
  "key35": "4qf2WaVcJtUiFRseTzXQ11M5wyBz8ceNk5XERdUr4dLaScjxtrm2uXpP9ikaaBH3aoXTF22ru6nwuCf583jw4d26",
  "key36": "c7z687VgtKkrWmZ6ksa4MTXFgkJHtVGxjoKweq8cBW1tMqq1z66ZYu5tMrzmzXSJmXfBf7ZhhXdYv5jNmqeKXZa"
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
