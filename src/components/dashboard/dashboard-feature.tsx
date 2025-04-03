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
    "4f19QGhUtcWkwp4nVGtTYuN95CSZGei7pEr43cfgvXq1gZnSau6vkh1FkFB23qG3NA65hGSeWzpGJzHgQyNMLvAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zaif13gzes6WSencgZxNJamMpENmbveobvyPcJcNb74mG5pfogKGYbnqXXtXXk1yHxeiYon3Q1c6RMg7tngQtnd",
  "key1": "2SS7gTbzaQte2RWTDeA1KfubRaZaDzmtEmNGocWvzLLBGUXxSnSmrBkECWiVez96WBBx99PDxS9kGBaf2vHUWrSU",
  "key2": "4YhUrwkXMV8yJXMetQZmgxQG4ncKDVeukq6SbvjakgwYBMdwKXXk4ja8dxiwKQNHQGF7ZFgHqbULFK3zSqS9eAWp",
  "key3": "2Co53SLQSgP7qZ7vwC6Knb6f89Ca41jsX6hrLBVwGUc7fEF9ifvPuib6ALCX9G89jdj6KaWk2YW5mxS2JUrnyK6Y",
  "key4": "4GGP3JTSWh46hLFAMXiD8dSVU8TweymyoqZyBcrBonrz72s4qM6C191p2D11wdhuKymkTXk9p7qb9MZAipnYzf3w",
  "key5": "33os1SkVsMvW14MZGe82cUiv4perhjhP8Sw7mTNx4JMMWDQ4eu6SnWeaQoAcVGh4LmD3ch2NpzCNpUdewzfDonVm",
  "key6": "toxDbWJmjJXnJFmH9XAoNFnYVFMdHDHYyPNRnatCC3UBwECqroDi3koDPvzWUDrDse4BN1EuiTm8ynHLiaSo6KD",
  "key7": "4gmpgWViLR818jvBBW8CuVDxhpwksY2ZYGJiGay3JkF8JVj7pGHCyKAqcYZi7CebT2YVsH6o9T2kN9CLKSwstuH9",
  "key8": "5ZS7ZFWfUnW3G15w1Hssb73KZzYyH6VZgiyjhyVLJ8LFa3F89ewiud8bHWeBMRg9VyUns8SJoL8Dq5G6D7Pz2Aug",
  "key9": "2L6G5UcrzfKd3HfcGSZEBJ3QapgofCNZdn9xfPExS5FEDqoJ2mKdPzYC3rjJrYJhwXvMmDb6PPGxZXwyTDPTehGf",
  "key10": "31bByUtGpMEk5ZPWRmZshbDZzqUQE1GL53Vxxzg3Dr53NRRpbwCUEvGGC72VVs6a8vNBw57xLEKzh5ZDHGguPSeu",
  "key11": "JH9H8FQQLibdPBKbgsZHNnbQWteksBiTjWmgqT2sXiPdtxygaiZWWndjnd1eoE6KJakYhWcSXYzBU3rT6YE9LPa",
  "key12": "54rEkJiKE3r9QgMzPa36BfdrBZfrf16MRM2sGCfACC1V2Pzis6rmjPpgt1sLeYFqP71qhbVQStNUdQdpZzz7JEdg",
  "key13": "2FQeYMTF17ucHCNQV3BwdUBaPA8GXh2gGnRMVoCUGa2XnWDZn8n9kBgXHZwdyePKzN1fRQG5uSDkU1QYUQ2Ay27x",
  "key14": "3PGjSkVEGfVKzqfsN2BN2huuhae5F1Bm1vhXaBHYi1c7fFHYnmq3vqpR4jw8fMA64d1UQKte9YYo7nrGGt56Az1D",
  "key15": "5oANb9dPD9mVP4appLiXhHWJw6Ped9z5ojRXCTCuwGn9hDmnV3WRRd8xjQCAVmFG2wkhqv7ChSKXCyTbjLXa7VKT",
  "key16": "4rwBunupqeohh5cirYQXGnaJuRG8TgiAfSkbbioRspG7niY56caYY9NfT2p6ULdgDvp1Enc8yrcEEiEBK1AK6dcS",
  "key17": "3d1vtgoBcJhEKVdrkHGuhd6HzXFPRgKPPQHhey7Wzj1nwbbra2s2zYCxE71mqQwMUJLdbhkqgqiU739ozDEd6V22",
  "key18": "yyMPSsPiCNRqh4JnomcTJd687daa4XETGrtXFYZ4FithyibijeyXzWcVm5V7bu64vZY9ZqAXtYcNmqHXrpYDArn",
  "key19": "2YsHgxajAwaHge9j4AX3PyQsUSWPjB1CthP2cmEiX7XRsBnzyY34mrXdEBJ9V8ujQbF3aMge7zzAGM8M2bRUgSwu",
  "key20": "2pKdd2oXwpE2ErmrBnxFVVXFGkH1dBiSsdfwqXPeiyRcvtQbkPN52uE8Um1nen5uwVEt17yVhFxKXRgTnZcnJZYn",
  "key21": "2F8D3GkP21F8arKcsofo7Ez7YK9yczifEaioD3R9QCt8o1Q1uNhF321f1oGLX4esysb7G8m3Te6mnuVkyAuCQDJh",
  "key22": "5pikY8n2jyz6AjUaYg9ToeGyFHvUy8F9P9CZdRWvVpYcCfQast9Sv5JLtoTxYvftz2gxHi8UjLBNk6cnQcY4WETV",
  "key23": "591Py1daJoFd1qLrrStow8gFYVLJNzMtEwgKcYnH7z9dXezDfqugovkJmKVTR6snM2ra96uxc7M3mEv8a1vNTjww",
  "key24": "3YfWdoofX4ZfRQRJ4nfScwPHqysRKFvCKY5SsiC7uqNjzY4coViJrJMs51uY53vR9ucY5mMK5hvUVUenVUJi6Uq9",
  "key25": "2Qp6ZZTvoaeJfuME4PL5tc3otMoAEVRXaUAGhhaEXcGgm4gg4v5qjS2SwDSX627p489LB6fCB3ukiQDroCVpNVKa",
  "key26": "65HgXhev5fbiy3iww16rfuBsgRkRXfeiyiosym8UgovvJn4BaTFMGoGZGTHTW4u44bdU7dsVqQXhSorj7keYNx2C",
  "key27": "8B1FYWeqtQ2BfSgaWAFuEs6no8eNDbvkarjkgrCxuYaLkzfrwuKU57rrQLWM6xCXuhPk3KW3QwiDi8cVkRUpcvC",
  "key28": "5xQhwHHMedyZmC3knJs3AJ24KJddHCmb4y7awX6MA3nGwHEHiBdgkEqVtnSgDChECmq9JkBHFmaJAo25Y1FnwDN8",
  "key29": "5CBoCB2sPk9Sd5EURjr2b5Zpia7KmNriCwrVV2s4jiRGdTkVvPQ5e9kXHbEVxiDF2HrD86LSBede4cbCM8xnavgP",
  "key30": "3xGXDLBtZyuCZBPyXPxeA5z9WQYHv9Hg4AmTfgLXeRuUHzaPkR3cp4bMDhke54DZ8vRadNJeBCPcHVdUdijxnJLG",
  "key31": "5sdCRxKGAVNUyEyV9baHgygrDMTQuZyD22MN3BiyuE9ypZLeBkULSbNhdqLJ1taqSQtba9xuXs1vuUFUYKp34Djj",
  "key32": "FS3aFw2pBC8KyJ2seHmw9FQgVAu2qmjvhzu1oqTmPZmRw8EvQkKxF15PhJSKWiYAiWf7zFMsFtE4aTSjCfQryno",
  "key33": "5EFvfXcMhUtr3ZakQDjRPbU5E2FBpyhyruUTLuZmxPKawTMJyPBNA48JXjKeqCUFrYLfDVaEgZfzwLsKJanSzX4f",
  "key34": "4mUqdfaUk5s713QXu2t1ymBt51Sc2ZryywEtM5BVnWbKdA4E5okenPHsUVXKYo9NXBNvcXu3u6RkGom6k1ziAuD5",
  "key35": "63x2PZkcSmkkt7yhzG2NDT6Pvtj2KqbgwTiq8qkPgE9wvsSD3RfUcnuj4beDjmJsFdQhbuzNSH71be8Vi4bYU19s",
  "key36": "7ke5d3bE9nLVpXhgWAf8cDczmNPKXCg3JG9MwEHwn6XRiUxXNbAHsaeeyVzdZbJNEDrJcPbHykqCMKpHiVkqZfg",
  "key37": "45QETqcvHMjDA11q28kBQ5uP2roCJhP5BqANzoHgLe3xxRJdA7YduAAnRPdYbjXYoM6ZUWXpq461Lxx8ThZ9dVDf",
  "key38": "2aYVinCKDTijvutEN4Wpr3RMTR8cbZHQB6UZm1kmaMFHSrzLTwVvA4gnV8ei5732UQTXV9MiewUVYKhxZJitUsQx",
  "key39": "3vHEfJpdzNnpSNzgUYoYKjghXvhZDDLc28w1HFj39MNdciHrM65KUXgSCNjPw9nspiLdaqHw8etqxa4ZfxQZgT4F",
  "key40": "2fJ4381MmWTGAd2TSSF8eLxkjdQ5AgWoYG7uQbq1QDurwz2P6BneKT8Wce8NyQRoopCik95gfud1yW3P9ve3Zjo7",
  "key41": "2roZkKYk1ReYp3sdjK9vCFV6CVKSLk3C4SbJPwerXPBnH2CFwoShedafSmGLZrHS3rbQc1NwzKqDj1wgKB8Aw8Qo",
  "key42": "PTFCeRmfw5bFFFvg4eM6ECY9ZdXNh8K6PvMeXJNELJcEPoiTqB6qkRhxP6EBUBynfPNSYA3PTvBnMDzCC14iqEa",
  "key43": "1WHjXhhEcWPktuVhBNt6AE8hW8XCmzs3mbYXaUxA9bLibxrqNF9Pmv5uttMmGfZYWLFWBgMtYQwnHRCvwcnr6ws",
  "key44": "wALHJJiDRxkCB6qjL91gr9DJWuHBjLsjUSWoKAHZ91XbMjYgPzVSpsXB7boVgwwGt2bnXgEZd3LX3G1zJRHbKoa",
  "key45": "2GmepvhBbaHypAXKoKscHgvWAZx2YjAaDGwq9KpeodTS8X5B8LpUWfiYFe4a3uVqWCFuikSUQ9ZrY7VkJV5Gr941",
  "key46": "3woMqwUhvrWwgXrZYKAk4qTpXVaFxrVudpwv4eEQ46WxGS5GEqUdvjV5L1GHNxweJmb9NB952w6LqtxCcYoXDGqU"
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
