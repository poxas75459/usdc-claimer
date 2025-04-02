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
    "thmB9bySGJRi5Lgbg41rLR3dSJnrwdf2ZEGXoFACoDBuZamK1qP4zDG8iqo8W74g1NfGz5YiQAdYBfiVbQPXbkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tA41n6rrNJBu5K3oSrZyTufimXiastBMWDQucSP3Arugq2hE7Ghnd8iZFPrNAZQUPYxS2W1czsAXhKz8mskqV7q",
  "key1": "aVcocNoW4CMNm7xSnqPq2iEE32YqkmUJT4mDtA54u35wTrSUitWSiVLbPycgSGc8bvXuuYqVGFvAm8zZrniq4Bw",
  "key2": "xLUb5QowvXunFGzDrUQedeafTQKddA9oDyfsMqYenpxQRft4qpfaNK7NRH4qRsD9R5jj8nH5aJY1VvvHb7dD4DP",
  "key3": "3keCVft33DFKpgikEkHDsh7zZCyVEyTgiNmRixE6MrRC8gcwJXWF3PJqSaqCrNMy89LwPNNrVasNMynu9iPSuLAf",
  "key4": "xmeUU7tGCvkeHQg4bQEqAUjNixCDKyo8X3wYT8y6qchG7pf43txbK7Bd8fiVsnFkGLhM2i8moYAGiPc5SwsYMnk",
  "key5": "3oEChJJaqKeFX2y4xtg4jiFstV3Z8shj4mmkxa7SfZJ8pY2v7KcV1NcB3kfGYv3MGZ5YiC7xdDpxR2UyDfEnPSZn",
  "key6": "4uBpmWihcqqMrGYixub3CwgbK1yqrWojnyQ6qVhBXmFukUUYsGoL4jJmXTWLxscediYqr5rMB3TagEZE6ajNKqZP",
  "key7": "4egbssg7t6BsiZoQU5Cg2xp1Z5bPggStqkEpS6uBzH4N3WDk6He9r3bAL5oJjwfBLGb2zXsZK5C4bFsgeb2TrrXp",
  "key8": "4DzaZk9tECMwovDxcKWApRjyDRHLAadmCCXsmLQukL6NZ6zR3frRHopFLj7hBBbwfQmfvbfHUmZogfWjix67fnn1",
  "key9": "3q4fEWccmPg4gKcpdkaiGrrACSSr7vbHZ8EHYQRSak6sf1Wf3qc2aV5b4yZHekwqxoHAAbNNB3h7NoYgfPfgHfHo",
  "key10": "5rgEVTbN6rJqXXuVC7rUfkvMBoEMpJVUcnPeH79QmRugNsJ3fyMoNFWmAAuKGQN872yrVxWQCFqjHC52qVxksFc8",
  "key11": "62SRQ7ytAjNXhDbpgUDdsbUZ9MLvhpCquPk6fD3eddso3Nzyhhj6pTa85AXRBd9ezJffrxxfrhixxBHds3FhMFW1",
  "key12": "ibvJVVWkQ6yrnT38nWHPVdPeuMfvUD2hWpXbqmpXKT66wmpvg85ynhxw7zgjFY93Uh8zzjASxauc12RJigB2CZx",
  "key13": "3zG97bAzM6UWEfjhJA5Y9wUv967h4aGXRiiJV7HF47zhvAEFWkJPPBLLkAHVWqgQFVmQE23AgcHM1246AYmX1Pqt",
  "key14": "2yQgBNXJKwVx889KCHUDZqPhGgLWoeivL8Admmo5Sr93WHhhuWpufDnwi9yv39x8AhctnK8oZtZebtNbdceBp7JC",
  "key15": "4QAC43Rzo3AmsbnvGvsKcjdbAt4GV1TgdqWkmvuQjkmR7Ze9sfk6LMnMiskgZ6VUAUqAaYEkNi4aX67eYNmcL9to",
  "key16": "5irimwGyhCDyWvFJrzGz1U767vgD6NU5Ch347kzJed329kqrAc7sNYX5695PcBfPVX5scXg6URZQDuwCSjFeNxT9",
  "key17": "5jBAf4qDkf2qy6iYpkCD2kQqo7jnvDJiM4WosLybgo6yEd1nS27Lxk6PzfgwTwVGriDBqi3VmA9L7is85TJEmgbq",
  "key18": "42WGZhMYTUATRZVbsvFNZafkG2z1QHMTBma86iPrSiBD8TQNZMonuTcT1bHUMNB2cjBE6KSJbUkViAzqD7Smr6Jq",
  "key19": "RGwbMxJhicqq7jDpUUhvFRgZeQ7djsdZM1GgWFG5SVzYRLjjCAoEjd1bL2CmAZDwucSZpaJ3tnSuVVRz8z1pz7F",
  "key20": "4fF4DcFchpvyPCUr9q9wjNuVU5kyaSNrT3ni3udf2qmfoUZTuEDwFQ6ku8m61ki8uzH5sAdtNCxtmxMHNcQyTksa",
  "key21": "24iPDJ73o8i9SDZpR7Wooewjfm7fa3fndAGT7nEdrATdNVZ173zJrXc9Laazb516uxdSZibJjVsw6ustjdE8fybr",
  "key22": "33KVU66KsN6NTmayhHSLBnfyjgBGpR1zKWnpM9b2Sf6qzUbjnTjMyajeLbxoF2kXqm2qztGCfguoSiyF3sDPwiMT",
  "key23": "53A53eU98spKVaQXGZp3Tge3ugGSCjUrfqYsv6SiBaMgfAyeRDJtChrfj88HDkNpTRrsfe4WnyfkiLb8QEpjmUL5",
  "key24": "4e5Qkj6VMQcGZtaN1NuPAtW3eaZ4712i3WVGZoXPkeDiqmeXjQA52y2bT7ntnv4ojQfvA4GitLBYYT9r8owUKvhB",
  "key25": "61vGTXsQvS17fVrwt5QJTTMKbELyVn2t3Ek5znozQvLC2SsxmyUSFwXTN8KRVM2WBgPbjpxWm773f2jK53P6KECr",
  "key26": "2VyUhAh89guVLBXp25N7bdQ57ieG53cGCRBQsnBtpmNugYywwgbHtqzk8hiq3shQ7tz6StsmgdrtxESHJATwYNKd",
  "key27": "4M9PruBPCyB6EGvghkeKRNwj5DvBDgMyyeXCj2h2VzNBb2q1LLheTvXpJrgzQDjPCbFzC3NeiZnK9DJSv9nVoKWy",
  "key28": "JMPz4ckZjnSiowfejYpuqZTeAMyCnf3t75RLapLZrESqiuJK1XM6xfKR8WoHV7cidYdsehj9TerXWzxu8E96aPX",
  "key29": "o8yCTAS5adDV34JnHbUG5RTXiMnUx66zgxVcMrSwBjzrRhj1JCaKBaMSzfGsXBBYWAsYf6Rxj9u2Fdt6tm99PxX",
  "key30": "9hiqkufwUgzVsjtPtssQJQvcMz9EpaZL47WV7a1dXEfuBXBh3sr7J6hLjzzRzhvsNvePKpoAGkqBmNkWZuWueyy",
  "key31": "tjyH8MEsf5wDB9QJJaeU9ZRiZVaw2fHHxU3JMy9utg6LdrkVsaS5W94y7kJD97wQhUCA3DDzJXR8Fj4zH3KBJdd",
  "key32": "D3Lqj8agFfvvzkS59xDiwnrZjwjXVkSY9g2EgfTxhtZMaqHbwgL2ni5gk8XzgxGMURsCMytHb6TE5X8VDZmus2C",
  "key33": "xXYc3uVBk6vka5Ba13DV4p8fudVTMVMsXbzfGPnSjY78DLZLw8ombUFGNH4rtQgfRWgGsGvQLxJUF3VbYTtxDXB",
  "key34": "25Vfkibo2BXQB5azZu2ixUuXAKj4vcAEmfAak2GbY549XshMgiCeVNcva5h7Q6zccaCFQT4bmPYHebHhzXNeGL9Z",
  "key35": "44ViibjZHTaWByN2AjKqzPsUX4Rn2ebQR5GKmTWceD5Bcvifeo8meE5VLbMgkuTCcAobAguH3Xe1vaWUEp6sEQfJ",
  "key36": "tua3RvBxQCXwEfY566weTapermiXTUVhbtHFGkQzD3EmGsxgFgJG2P5i9RMACGustE66WHboUwxqtXxaHEMVZf4",
  "key37": "HrTmw81M27ToiiniyKfEnV65fjsnj9ShspBAkjMvHuPQY3tgZ3dLxzYKFHAb3SU4cVMfr9TtEKBZNJWTeBGr1hM",
  "key38": "3UbSaYacA2DxDMQXVKAaq5gNJ7WHA11J4Ha9SM4a94TG8g6HViqfdTe8LCNc4GVh5DH2LQFBXtc8ZYdf4Wug9sQJ",
  "key39": "PVcBqVAs7Qsd1BYK3PawnR46mTS6BByh9eJuLvDR8tbELvcVEtz25Yq3xpNrhQvZNRDxf164ViWU6Fbteg4GWq4",
  "key40": "GpBZMKXRdX1VDWjUG3TFkpGQiXF77x7BWxjDECWTx5mCzf4hTiKqAYbbwjPuzi6VK14vu3xauALZfUUSJa5ZyuD",
  "key41": "5hVdqrt9Pz2uZ2crETUnviAWBN9U1yjR6GkEH1btTGpkA87zL55KLqzjixvU9mZZRMsdUY1vX4fwBBkuLP61MtGL"
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
