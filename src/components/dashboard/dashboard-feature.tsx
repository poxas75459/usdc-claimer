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
    "4h2VrxghH3GeM4D4YZTnUERRUCAozH6W4PaHaoV45K1VBryYsh8iZtXTSbYurkeYAHjVhwN7u9PbAcJGwxw8aXPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g4ckcnMrMygZRXtrXoGcEUGFmUyD8rd61TRjP6Ya1RtWWXTvYBVJarDju4mench6cX8cjn7FN5hKEoSQ8g1ehQN",
  "key1": "5Cxu5i8ereApAPYKtKgopr1LgDKXNEujGnkv2YN7y97seMuqhJqcR824zrGXxxHh9fLv2g2V1CSs2BZZSSjkHGGG",
  "key2": "65bNu6ytmXDmY5AoZXkUWYoGhnRoS949sx4P3KCZUVQdmhhHrsC9ggHNbJtPm3TtgM2P1qErsT4D7dnjTr8t2654",
  "key3": "4z5QMnASRM1fMEb2yGFa6KHigVqhRUYc43mc2NCs4bwkYnbjGVkrCpZT1unAUXQEU226JDMd9fyseP3CUHpns4sr",
  "key4": "4moNGCcVVirnhGHT9jyy1HWtHbhfdD7mjgdwBXR2KR8PpB5Esnz1es93yqsdE4mAgn1avq4jFUWo1ccKuNdkxqgb",
  "key5": "qW9i7cCT7j1e2ziDWr9jA73wMMo4B1hH23YXCv8w6CQgRrCEPGuANfrevCyrRYyMBL1YRt69bKKYbpLK3bquBLG",
  "key6": "5FvnNvohm16xMaXF4bLZjvxdwXD68s8aqGZxpsdRwDfoVXef86jEzM5vJQhcGryYkCn762c1ddmxxeG6gYixJUKN",
  "key7": "2hyQQyeRN18pThs8VxgZDBmTZsqcA3QvZByQNGQb2Y1CJB5d9WZJ7N8tCaoarasBJYuMqYmVFxWkzHMEWe9byKni",
  "key8": "aXaeA6N9fEFiEnHpBDLW36UY9sJfs1ixQ7cxEtugRjsaDYGPqxAbuu34xtw9D4ARYpkQDHf6svGLzh1p77Nb3E3",
  "key9": "QZi986sp58dKH9pyVYGZq3AajuSPuqryUYSLASP2m4qmDGHJvcayzee3TQio2wU2mqYXcMM9RQC7atouRxxZFA5",
  "key10": "4jiVBVUskvoT9Ne59pQdLAP3TVrYt4cKY9Dh2J1weqUk1nMPGpYufMKyHjqPKMPKQLsaoP4ae2QLJyYvNNDddhvi",
  "key11": "21wwKvXrCvDz9x8VWLTq8YheeN9Auft9RgLsx4XALehuK3CUy5Adn8uYUWb9xZQA5Bd26DG8EF4A9QRMJqJ2wpP9",
  "key12": "2eEnDnXcyZeF18z893bsSMJFWQnzPH1J1qEJTBnLjGtf1YYficSaM4rsx9Mno1KzLvXELttvzF9UE7diUDPpbMk6",
  "key13": "4xSmSAFTchG4JGjTG9HntZJiwn6ZcydofM3Vd1DyqwoUiZQqKLKBMTzAS61VWbiMMoZCMYeqWQEpwhBEN8m8FNzR",
  "key14": "5pzYYv9ukgHxQ2UQCmzdHQys52XYk1kZDVrCc2WK65cf3zins3qhLW4ucnx6pcTS2XRh3vbnrDs2rorQGL7sCBpR",
  "key15": "5c6Kpc5zorZJnqSQrQzSvnQ2hsYv6r4u9QGfHXhPbEsscMGT928cpYZKmcYYzkaAPCL5wFEti58BfvsoDLjFZzUJ",
  "key16": "2XKY1VszkVVLhWht42inuawJwBxqpKANw2zNezpXjJ8VsDmfs3fwveS1XnrkaNXzqmxsHJdAWXKhjnX5x2LuqvGX",
  "key17": "4G8rNRq7XJ8iUBaDGWN76FE51uWAH2zNMyXQMhPHNzM1ieJq585QFvWGgBC6oUaVmHb3SLCUF79Ex5bZTQZpkoEf",
  "key18": "AnokWHJkDmwykic33eBMw5TZpxYb3dbXmxhPuvvHP7BeyiASaWPiwVAeTjEb9pjnp41xgFL3KHES2GGzFgHexWv",
  "key19": "37FxaH78Lort3hfahe5WQX2F7bEDSskQgDFfnAmZkZR3MyQzGLJUByNwyL7bRV8jLj1kPDRsyDzQXHdRdVdsZd61",
  "key20": "4g3DBLPLvMU9S9uStHoq5hW5rqb2ZdWfyEuFodTrNJVoePohPvskbW48bKiDBx8a7dcLKnp2byS7TMkhK36kR4sr",
  "key21": "P2PBNmb9B29EST7CzQdcjQaCSa8R7sjNfAQ5vPQjQDJGZteSgqnWFKetSwqrmxP8fkdjd9hV7aupDGpWHuCEFjs",
  "key22": "T5L4eVQ2vJGzWM88daZZTEu8qNANfB9rUWWhzv7rLHjCMXxkiHGxRzQpc6JR8a5cWcmffCXQqeQEBsebeVCWSTZ",
  "key23": "3NTtenhdNGkrFd7Ev9JcEJTW651UxVrCzbAiJd9TdCLYj7pcNMtMXDCqAhKRRHJzvxhUmpSCW75QRo8HA9Zrhbd6",
  "key24": "5H1h82x3Aq9khCDeufK5LG7Q2C7wF24HrnsGBDtG9a6hwvHydB3binRE7bahGugfymuE2wrgwKojvGYj38NMEMs9",
  "key25": "4UFnhKVDwXoUVfsshZiMdLx9FF9R88VzsUG9nt4LVfRDtnT5gdWndWNUwxKA3cjNztU997qy26N1NKgARLDKx3G6",
  "key26": "3ohTQVYPUDonZp3dpQ83AuGbpsUDa4jt63ZfM7q9urXzZR5WFFjJmEbHsPmWb3YmQc7QfiiDbBavEQrKyNwTfEgn",
  "key27": "3F86TJZjcCgn2TVk9QyKLnYkdqy1xx8RBa81V7769tthrUd9aHZNJambnaoV6R256JcSkzNGQENiE5fXtZTEt4q2",
  "key28": "5a8Fq9X44BwbGdKmLyRSdtqsnej5y9gXbfBgH1rUG66xQygHhePCSH3YzdSLSvRAkBVkEPSqtw6BufBPKitwLzmU",
  "key29": "4QD5RdPTMHKksWCwqmBmWe1q11PEvJ5bPxYXSthgCL4EBZvHYRfUrb4LFYYQNKNk18GgjdygUbkABMitQMRquVWr",
  "key30": "2kZVfF4WmYa56vcoK4ZkrQ29KuyANSVfLSkBiAcmLgy49WJDq3evpYdFEiZTnNMPi3GQUJjCWVQcjmewpXZh7Z6b",
  "key31": "23gf5xjSRX8WwvFNg4Abp2RaMZLrQPuFiuHQdL1goaT7QRKEhtAGkcPrq7rZrJ8pXHTCm3Wb2o7g1QfJounubNbw",
  "key32": "53t3p1wy5r58fonY61UBPSbvX4bNXZYSAeJN3fk3jcvD5g8r2K4f5r7UVgc4tuqLDWjAHQpXLUHLFaKwEs49ZSzK",
  "key33": "4QqmnDDa9ezTNrnKGkw6UZzWCj6gSa3sG4qeppaStmnV9YkcXReWBJbJRCw25PqhmNNneeT6KfQS5S4Ff9oB7wbX",
  "key34": "4SZcVRLNoyyPZLL939XFiSCJmtwXatyiDcixEZVpH6G3xVgrKvsxNV5LWDqMpDUgzzJvcj2Dkgtf3CSEMbXR4RhE",
  "key35": "5avCLEGiLQ2CKipeSgGRzdhPFxuPP9gs7MEQLKHSX8pvdCUsTQoEavXWMPaCotS2wVtfQoRxs3SQCHQGUF9WQPXX",
  "key36": "4huCyRvp5vkmJC69BZ9dDZxKeWF74aLCDMHLYvMfvkbES7V74sBssZLQARZC21vuLRsioQC1SLxGKYWgnpiEmnTj",
  "key37": "2T6RVutWSZmkj5nXmzf1qsvmTWVqBMo1kAZw2rihKEstecdBH4NVv5CgBsTH8QHT6VysPMyKuGPUoUnqn6nuGEpF",
  "key38": "3f1VkGhjLf1Tyu9v8Kr5wgZWS9SE3tMj1kv5h6fbdiTjkPAZEbvqyktak9vP3xueWbtm29ygQavvTB2uLc8HSQyp",
  "key39": "Fx4UpL9kPemhUzSkPj6bnvrJ3NMmN457dndpG4vp3cseUcqKJPQh3LT3vcmLxHR16hFv6EVxNsejmxeLRPax7fk",
  "key40": "5tpjqho7euawbkxBHq8S66JbqGHe7fd9Cr5dgR3EYzCW1x2AMCGs8Cu9Sj1TpFEDFNhwQP34vr5EaJoBvvffqgNz",
  "key41": "DFfgR2ZRLpALzJPDXw4MG8PMwwHoiRXPuhqgi2y14kNmX7SZUP4eSyq1dMUTAbannyA44fYTzYuF2gvN4TSEHLS",
  "key42": "EgdfaMnPNk1ckE4m1w5gMcGNMKSt66JhNNsn4QqRChEvDkBwsLBN8bUtSyhraivuL1zGPr2wm3oQFg5Kw22w8fi",
  "key43": "2QZocYfLJGdnD2jnJVM7Tif5WYgjj9vUDddsaPyGJv2gozfGFW8nKYjyLdS3LbcSknL4Ymu21PHaU4fukumVvPSa",
  "key44": "5WN1GwnD7Aj4t9tPzrgZV3K5xAzsE7aA1LSae4HWSirpJhenuVR8nb4u9HEXa9VP6BoTMTWTHbxdtWUWbFFAYhQ4",
  "key45": "57puJpHopk3rQya6F872Eb5axvUQJWWwys2sCjWfnepmUWW434Va3KcrBCfJxjrHzwawiDxtpKKjc6HqvpEBGVFN"
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
