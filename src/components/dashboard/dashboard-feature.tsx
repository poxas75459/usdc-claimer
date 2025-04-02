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
    "3wVTMNcKLec3VfcdXe6yrQxkjq2VesXX8T6JhJHPV2sTJ5JsBo54mTURE9cq1ziG9VtV5Zhkm6SePB51T7s1hVnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHef8t9ximYu1iYra5iTu7QYJakQUuDfyDzKmgmxkRBr1pDL4SoUdSrZh9uz9zpgXrLiQQvoM3yHSQxnai2JacA",
  "key1": "JLncz8HKeoeR6UhsfhxHyQZxZc2dZNBKLyc3LQoWx8Ao3vMFfRtY138drGjxou8D1ooJq6i2j1qtzJLXoSz2U8Y",
  "key2": "3UvQDUtWNS4dsaTSMHaLqzhidTbemfeMKwysRxZ9PWuFDK7FXXaoWa3dxQDNwMyUwEbDaLXcD3NXzGLp3THQE5v6",
  "key3": "5gZ8GLPG37HGNC5h8YjvmA26BXUMt89nBVMDGBxPbj8fSHAjucsMLt1nu5SkYrAR1CqntS2TGViwcmQyPLPvX7ZX",
  "key4": "6HcSRrdZEY6BGHwRqbLtMuutAmoWEexRLJQJWroXxvcBqUF59C6QBghxwRy19gHNkVd6cwnPjHcYKu3FitviMy4",
  "key5": "4eCQYsg7JUHjE4emF1x8UCC7RNV6R12EpEz4gqjVvueoWZqdti26o6adGGA6NZgDHvfsyMGXuygGdBqJvQ4YDyHH",
  "key6": "5DMc5V6GQJi4hMnV7BKPyMpV29bS4JQp9am5DWoJaryqC6JZanrUrg158YKKGsKzs1jyL18yaetd5344nyqDpQ6h",
  "key7": "3bGm7xFCAWDpbN9wxhVff9KHw2mUSWXhZZCBUsULEZnjdk1WXVAFPERFGqj497LAcfczqsh9hNNzHUtDu7x2UVoJ",
  "key8": "BxEoPacpRizCnMaH5rntKBXydQtW8Z2mAUiVVA2HuMWirDm5XofvUnm9M3Hixxb67nn73u9U98e6UjkDrpA3JQR",
  "key9": "4j6qFmevPMAzZ6xeEkPWVr8NY2q9YKHoYrSKSrFJAxqcEpqGgqm7wTSb3SiZDfwUvVKd89moSHDhrC57kDDU6iRh",
  "key10": "5UDWouvLP9BxtNx1thBFKxvPyUiqfAN4DRor25TR4dkudebraTUkajkQ6fjKjuPbaMC83SfGGZn9QQdXQ7fyUk6g",
  "key11": "tVHwnFqoNrgPXkuUXSxGBH2LniCkS1ZsBnaL8VjZvGD922qnSaes7K8cG5LSZy9G7NvhmWD5iWHruxmcGsofEro",
  "key12": "3AfPZnTQUsaGnKkHcEpWrkTd32hUNn9SSHcujrAL7G1Hhsn6deSZScWo7scjJnTMH4VikvECGmdUkQY5SeKFfbdf",
  "key13": "2qZC4EkR7VSW76qWu3aHBCR6zXE4D6avvzDmYJd3P8sTKZj2MMCVzQ13VVDnrZdUALiQHaL2ozMxKAgnUMBGqGhy",
  "key14": "4Gk7uGniWsHiRfgJMH69Y3vWm7ygo7ahWgg4DwX92PyNchPCbwcz74xRvzvrgSyStHSsKVpgeU3udSGzUubhSr8n",
  "key15": "5MQTM6z6FdoyzLT2bZKak5jGVCMKoL1quiggkkCMV1r2wYJVGxqo8HZf8xyPQpjDYYbLhFVUt83zNF7WC3qAFgKW",
  "key16": "3BVUykJa9E1D6Xx4EgkXojM4soRzdLoJZ7iAUPgyDda2Ev6TGwA6EWxgLkctVvosnmidSr35u5HMGWNE9MqWR8yz",
  "key17": "27ZYRYCKsWSkyqBd4YtrshqmgLemZZxg3aZrZFobTNEcnArtQTpVYBjZsaHJmUHQ5TYJ9DGPvmNDt82dgd7vEVns",
  "key18": "3g2ru7Y3s6FxhCn7cAMT6CRpzowvjwmFLWytAUa8knX5jfCZEKQFgWxRrNCKxVErXo8bSPFMLoD4rk4Co9pmKmqU",
  "key19": "4bhMQNeCeDpFUtAP8ayKVgSiKJrymqBP6WZz4WNxx5WFDVcBQk37iD76xPzTX5EPv8Lv3Qx4o7KawfKx3pua6hMo",
  "key20": "41AwhFw8xaMZ8YqgncrhWiiP3MdaTXERtM3n5hACBLfqeHaFVVq7StNUXBuYkBfoh2Fow2oXbngPTZeUi8kZauAN",
  "key21": "5JWKUUCKgLbgSnLmv23GcoJQqvCKDd8V8jBFArHooHArVdWYzL5gyqvLnzY3TV8zMZVV1zUGQeudJttbXzZzjXxA",
  "key22": "WYSULvRMzGz19VGoTjhUfJMrmbfwjQAfwDVBQVbfqC9zEpdLjA9R7xkuVbxTd6Z8L3eVnee3sezG9TB2T23kTzD",
  "key23": "5zh8eHTfE7juSCGoa9DNTKvmwkP5KvSVQKB7hGcqkznaRYmZefEZvNrN1iy9ku1VuDoD18hkPYE1F4FRE6aK2hwP",
  "key24": "4X9v6CMD35FBkLf4GdZ7Aw8fcxFaAejcf87z4kNc9b5dYSnozRHrCmHfZHomSmGiBonDtCrkKpyBKG27BF5QNeUY",
  "key25": "r5xd1eErDhyaKgdwXcMEFZcWvC12UCxPyKiUYoZunEW2Y1nmYat6a3UMSFzNKcvvpHm7uSczmKMtAipE48oRjKm",
  "key26": "2Q1Z2esSQjaXGapnhZFk95mpiwuMr2UfCh2jx779JVCBKeQX7kcse5cFTLDtzTnJcdENg61SfatrB3RDh29VE3V1",
  "key27": "uzTE3c29NC3g2Qx3c5YZNsM6NQ5Bk5ouuB6X8DCjdewYkgNPophq3KAU9J9ZC8CCpGqp64TY9tvLnVbN2jc1tLv",
  "key28": "1RxtYYwwQAtUzinCFDFpM1PLMM8ozBaBWkE2AcEcL3wuUSPpAEfRiWNJHGaAx8EA6L2pFoKznyNmtWCXPctCzuP",
  "key29": "5DzRtnfteeo5arqGwjq3BHsTiQ2DxPvNeiNEFhELR4cxwTUMR7mSKPJLrCnYbc41jz8hd52y3hh14Apw1WrxG7uU",
  "key30": "5dDViVruSp1f9tJN7atJkAjuq2sbGUwxZw8AkNc18uJExDL3nZJzdcWMpeWbxzxe9tX9fD44NHr73tWif7FHX4fY",
  "key31": "4GosJDZdtpCGLWEwBSj8vrXukXPJTUcVBwn1ak9vaRsRygMFthR82sybwzaKmNbNxi8Z8TYWV8kBvkzc42Qw7qH6",
  "key32": "5r2J4pWYgtkj5w9ynvc5UbfQh7u99JCyT39KCNMBZhYXRHoN7QMUcQDEQTVX4sX1GeLnXDTN7HZ4iVhzntwnQX5e",
  "key33": "2As6wDRXCQui3xuLmbPyTNJaWxV5poJjrUkh4rmC365Jp7j7drMWqZdPV8Uj8tkhQPXodeJYVsJRJXnQud7tvC2e",
  "key34": "oHKpaN375He2JcQzTeephBe9gAj1AxrC7yfpQ5becp6vKZRuY5DZyyS2yJtnxqf8HimAD4SXsxiv9LJCk267gQn",
  "key35": "3jmTp52PCBvdpLU8uxrjw7QiPkqCJRQN2xYpSRaFdLWRKgiLBGVEvdmAFPnTVVfmyjxPcthFmFZKs5i68cCca2Zw",
  "key36": "4snhsi9s8ikRXX73sabte3JstCCJgSb7M6NC3KUpVa4c4hrsGX4YzTu157TJjx54hinyCvJYrmjoWP3NA7MNebYq",
  "key37": "2rMkYfvta2sAtBvNuhYaHUCdbNYwkZSXtwZVLjCitwgFuog1ugfTpQAUFSPdndtE2TG5yUugVwRCScwCCuAmgzoi",
  "key38": "4XdkaN19HQptA4xMpYdvebp6HbrfkBFJdQSyf6aS3qZHVhCVCPKBKFaRwAKamY8zUV2DhczJ7zetotEpfvYhKZN5",
  "key39": "5au2BrV9NHhbdT5gYqZL6eys9E1sPKzdD9V6mji8yytKzf29AFt1cgx5VmJeCwd3567EchE1qFve3YBAu7Kj4FYp",
  "key40": "2giVRSKmkMC9E4cnoMFGAHE7MF29Lf364ftDi8aKHCHEHKd2zWWfkk5axkC8mbXBAErYwSZH6iCZ838KFLYzGyUg",
  "key41": "3qKjdCjuQ1UKtUZ1vfjrYSzhQEXggqjLVCkZMfcmAnS9w8ZoAvowapKtqj9xjk1kdjmHH7uJHU5upHueg4G3ksmX",
  "key42": "61cAaWBw9Kn7L6Vnjzm7v7sVGj3dER9sWmoS8ZKUXdk8bfpEr5j2cjazujinbdgMYzGYAbZbqMX5T6QzCyMVeG1c",
  "key43": "DLyf35FBr2E4bmfJCYdyfebh2czzeT1At6ZG4yhdEZ6bNg3Z99eqdEkxJggQ9YTzicvbXciGPV3WyRRYAFbuHcd",
  "key44": "PQx7kCGYUw98kfP6RdVfGXXuUonD6Q1zMg2iWqe7ZabTYJE8jE3F98Mqe5qUzyCTZ8anWPeSaLd44ezvtREVZkf",
  "key45": "QopifytNjcGuRX8UnacnGEY87qLGgjysDDMrMBo95AnWNdr5HbQD6VcYWRZdKKsX1HECVt3oVmjuST81Cg4wfnG",
  "key46": "3rTmwkWDqnPdXktC8NP8FfFBWLKL1JagkwrXfeoMPYnqaYXS1xVcx6Q1WxcuU6eEF3XYKMbCBcPHBMGxvnbemneo",
  "key47": "3aQaFcooV6e27ciVL57GHaXp3BB61PcLJgpyqaZWDzvsvU7cGtqpCbZqrP22ksY4McASjobEw4XDq5eQFTMNQYnK",
  "key48": "8gcahBuDJrPDLt5oFngzXBBTDe5HDRQYGQTHsFSGeT2oeX2hqoDW8KEQh1ZHzDfZ5nWtaUrgpRzTgBNP9K5v4Qc"
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
