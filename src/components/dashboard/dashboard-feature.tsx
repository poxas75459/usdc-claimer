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
    "2roRBo2GmE9iXDqH2kyVMxvACzM2Q5gyy7NZAc1Y21LSNCzbx4PY6KfVN3agChAEtumCXN8mzqZzzcWSRNVhSLvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AtWJrFiw87G9Y8Abxiuw3SFw5v4vKp9QmRxacLhyPM2H34w7E1KNc1xfDkHY7igZ8Qe4ZGhQSnQYXouPywEEYaz",
  "key1": "twbadiFk8cHSDmqq8UeWXtZkgUetUR4Yq4dy296RKsMbbXnYxx1p9hqPWap4fWntPg6gq1iakqzMDDjTSDadJMu",
  "key2": "4c4uyHajmENiTpZYKSa17Sj2voLJXbiK4rPSiX4zmbmjtMnyMBHjyoNihi5pufq8h7Nu16tqJ6yu38PdfXeYytmQ",
  "key3": "2hQqfXyWVJ9VFtukgQumN6wGuKzaXKk2NaPtYyDcZVFs7jtYEWComqsWPvUxGXV6saXbTRiiRs4Rbas2pMHpJkcH",
  "key4": "enC9Gwkt3DSPRiiiWB7j2G6RzY94uPZcWqJzuqyNCUEjRjEdGJDSVWKbrVHkhUSSo9tWmhMv7itARjsChe5Nkqp",
  "key5": "5iZP322EaXDxDNoN374xXabcMZNASpoD6Yyjyu9RwxviwtnVxvm9k9k8HP5ca2Uuz9pRVNkbonw97pSAyBZNGngt",
  "key6": "eTAcs6h4rmW6FnVm7SCRMHB6t8aEVn5x2LJeAWZF943jnLb4gHxASVPGQX2WCPufu2jzwXBRHk8hCRKbVafWiTo",
  "key7": "3A9Z6EdRU4ibvFSZhS7i75SJ1TWdjVdGYs93ZYEpgoyrKEVrCb4EduEhbeJbfxo1NK75GvcbMr5nQaRrVxzJAW9L",
  "key8": "4ok7KQvwysy9F6W6MAAHVVWP47RSZTRd1GQ86E3SqjVV2yuWAQrLvTF1r8rf9t6bjffdRoeUinQyw11FmLXRpdja",
  "key9": "4Q9fCPje3gCqNj4buMYsSBkiDDZyGkoK55xoTihVS8XuoTxVZsbnGfPtKoCAR47z4eJzgVwmURavk8kgnEnM3CkT",
  "key10": "xEzdDWA3uAaMAGAvMuS8Fi8E2ufiy4hz4ypXApwvPCTCHbeTKXdEXWeva9PYh98hzrbLqoeEFa9apyRiFgcgrjQ",
  "key11": "2iik2C2AhRN4m25uAFmxEHQE3zcwoaumWzRwzwmDhv2v8H2En8eSRhy4MiVasFY9nNCkdxkhKHxWZBRaJSj7nGiS",
  "key12": "i1RCPR5ZtHYdh6cE6fd5UQBa7PKcviogqkSc34CvuPDR9p97LfWF8n7tXnYF4NAxCXeS3VfykiGB1E1NAPYfRQy",
  "key13": "3TGS78gKFHd3AHCYpnFCZM6LW2kpbuJHYr4rjDXFKU5NqQzQNuqyCkoigJ1yDcU1eJLmCXQXZpYfWQUtUSAMhECc",
  "key14": "4YDqHPzm8rvZUFDt2w2bwvvAACK5zwPipuW5o5sWY7be1RBmXdeuYdqvAZKo3rcrvAdmDr9R3ufyx6nzyugHLrZh",
  "key15": "3n2itvZCeLxPam1khAy5D7iVX3UwDe3wP3sHDdgaYGfZMyHyg62EQTcvysNRSauTp8KdMAkhR8zJGZsyT5xEzm1r",
  "key16": "5VFfwNSc6krZvMfDEMzA2Ab7KL8duqBUZfeQu3PJcwxyadNcxg4VjwYL3nX4NLSBW6MVCrJw2S1KAR884JUoM8kD",
  "key17": "35RK4qboqMZYfBv5uGTfUdrwLZUVZKHkiX1XWmG1NH4GM7RWvwYujJZypJbAzGZvjeGFtZwkyJP6253hS6gBn7yx",
  "key18": "YJjj91Tdq1SSnJ2XKb5LyN11xKPKJ6auY24QHNgeSZ2FQ7MM7uyHdwY8MPvms3mwCmMJMEGbcbjK9YU1kiWwCKf",
  "key19": "pAfDVCubsmM9NgP6M8ciHmrtHZsbUoJQzzaG4J3GaftagsmxDRW6VNTi4qr4Q6aKdan4uHrd1eesak3hJfmpP4C",
  "key20": "4jdYh59f3JnQXKTFu5HfGvUF7UtoPZQhnvM7bYWyJkJPBA5Qu9yJ7ej8LNs7s2jJoHEqA3LSfCQQhZ2NBkurfYkj",
  "key21": "5vSrxWMYvDSE8E4r9Vgm4H7uqm2JjD2xzvvYXLN4bCPRTgcETXgf9Ctr9Xupoyjq9tR7ijxUTrh3cSw7dz8ieU6G",
  "key22": "3z9YYMcvrrkUrPxWNoRUH9kYVCPruRgAZzAbEBxjNMdaQ34RSXzXzMQMJHhvWvD994b1TPjCDrBdshVSn6h5oZgw",
  "key23": "38xbYRhwTLHju4GSoZdxmKW7AhwxwUEKZ7QBa71EatG9fHhEDMWvGei4DH2pnKcvV9pp1ZLqcy6SvTZdtajkEHhB",
  "key24": "3cdf9x3vNkH1LozKk5uDrULGWbmvQWXfAvzcpB1kymQT8JnorAnQi57nwswV5gdx4tFCNYrAujx8SeqVwX7CUnR6",
  "key25": "3PRRDGDnXbfKtu3K4N6TjDdt4F3Cv1bMY9msTb1DJ8tthZ8Jdrb1gz99uFVjekdy9AeN38K4w5888EmWs9mRfN5X",
  "key26": "3uK2rrf6f9ksszFsq6XRvmmsQoiwuhwsCdpjYu41zTEkVW5qnqq7cuzv6ejDkx7GSUS7RTu6iZkVjkdkfizxQLHu",
  "key27": "1QXPq39bV4fUD6XAcFCJ47PqDrbtdCmqv3V8u6UFom6tyTCESfBVCgH8NwbgXi3y7Pid2wRQfg4zT26tAGN4n7V",
  "key28": "215R8A7RGnKMTAsDcNKK5tktDXs3PJBhiG2cU45KoYJetcyFjFRWSjbRxwBPCweTktVFfS69GgPo4XxDny4oHrEy",
  "key29": "4UJY4n1a69E2N3BX9XbampJwwi53kyUG3ULJTnXkgKx3Z4BQ132cMUA9USTyFLDswamr4H5f6ztvBrwvxms8d14",
  "key30": "4nFysxuVJbxSAXuXGDgGC1oZk4bfPk6gk3brdLegBYYemBgq93zeb3qY9kHnrQ1i93ns7Sg3XWtTpdq9GBkEyeVZ",
  "key31": "3t8FjQbNhaGUhzTxjbvMfuSbDaYM7yaoE8NS7P6Z1Rk8tqyzSy5rMHjz23BtGxJdBZ2HXk5G5Yn6fUFWvKQKEmPC",
  "key32": "8ZwhWWQVDqhys8Cprzpf32VX4cAiBzaxgM7W7gMK43WqEtqpDXJzmyKczpokC7JuyqRuL9CoqsLy4JgrvJPUSbt",
  "key33": "56oUTkMmsmTbycGiAigbxdW4BptVRt2haaSwrQz6HEe29qB8iit4rpzL3FwPXRwDtCgvXQeqnUK7WJ7pKdubQF8X",
  "key34": "4mwhzfUEoRXnbTjssMPuV5oMNCJSo4DiY5CByMZmrphhD3NpgcgAQ6Zs14FTzDfrer2Jts6czh4rVvUxwUEFnnWR",
  "key35": "KGUnW2RW46oDh3bmEPn8Usk8ueVkvAzJ7enaM74SojybhaqTt1yFhGpxH23TKAhJYJAjDu2QZkWtYiMwTiBQ23z",
  "key36": "4bcNxTwbBCmDGAKJRiAmyQLnWZz2ds5ygtQ1ASPNFPe955DHM2hNrFhaNMJU4yF1YGopkfYGhAbVXvEyUAnKbWtw",
  "key37": "463fgjrhpSJ65VtzpUtrjrCJJZWAx2n8ZakH2qdteF9b5T25GBwfLcmEnKaHPNYovKNDv2Kv8F6CLcdkNgp2RmmE",
  "key38": "3iQJH7kLzz7RimbhmUjqycvr5NxKWPNhy1p1rDnyzJr17UnaWgnFmyHRW8f5MmC1o7ppXDmUbe8MkQ8oJ1Fi1z9K",
  "key39": "2JfPxRdL3WB3zr7MJ6RWfmYhHvw4xiK37HprGdCdDA4N3fAW7RtoRW9Xvcpt6H3mBzLa1ME68UQ8kYcX2p3mHYKc",
  "key40": "2r4RA8JZ7jNwycoL1EcnVpXapESB2A2178HfDxANLppot6vPCdYttiQ8g7AWidqX6npsSBUT37je73fSKyzsUUSJ",
  "key41": "JcRaxGeqRSAUQ2mTcfzZWgM2R6cuqYjesU6TjkfCpSokuvd15ayQLtENskAYT7tiLZiuPZEAPUo4YZvsG2HFNF6",
  "key42": "38z8kBMFr8rg8VcUs6H4Z4xQaTLgzwgjU8iBLE3f9NjUyGKDXwFezLfJ4BNkzuEECFptbe8a4Q5q1ML3UJXMksJC",
  "key43": "2ALKBwwGgSG94186kMNM2WevbMZd2zJZGX2VDvB5LXN662CpXhcRztiVk29cU33eXgiWQcowaZDDVkaB4uY3vvFK",
  "key44": "4ZBT2DQu8b6m7WzXVvU7GZcjG53peg8wpg2HhZCpeoCxFdUtr8nscXikQMRnEY8p6fvok8pBwXj53J7knx2YJK9K"
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
