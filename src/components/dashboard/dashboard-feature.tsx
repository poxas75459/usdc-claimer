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
    "2gsXbJjzXNQqGfbm7G62jSgWPbsak7dvHHGZ9sZqgHYLAWe1TZpVE3WnzBYFaF5xRvshhJrM81vMN1qAcXZ7W32b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvLJ5vdHVTmmjM7FxdoaGwBWVyRBuxyU38RT2xPNtTEpLd9YMjt7qwKRXXuaqZ54kYCw3mvoSwkmjNwk4z8qXH1",
  "key1": "2VfvNgCxZdTSB4WAbQKN1bqRZNxBBNppdseeQQgEKJimcAEcX47FDsHiis4bG9Wf4cB4YbUMuj4fU8Xx8ayB1Apj",
  "key2": "y7UFxQ15bvwP89ZY9i697CbpH7JdaLfJBaPyikXchAV1q4vmHfiELqa4nhBeNt7gZhzrX7z8bicc2x8Tj49whm9",
  "key3": "3i73iVE68Qwy3tr5CEvL76se2wnMDT5sUVTzcFVDFWducuTsVRztYEwThJad4U7i2e2RYVEYvXBqV8dfJjvWE4mG",
  "key4": "3KpZcXQKBH1qiDz54Hek4Zut9Z1fQDFdVrFvfK6KZVFz57Z9ka7fBtQ63FXd7tuqiGycpzSyWnTufcEXpB9Jghj7",
  "key5": "5xb3zLpCnnjPCsTkxfmrt1KGVkNVH7Vtv3m4vp1kBnusUmmKXenD2hqc7UeLhxEydyAusUWT68W6ncTUQT7ahy8t",
  "key6": "4cy5q5A9tSot874K5qfrAEsUtCYxWNGzPMzn5GfKfju2Vce8pcttwbDRgHLv11RH3i95nygyT3pcx7c6kPa1Suty",
  "key7": "2yBxc8a7v2oxSQW6HDA5CcqSR9s6P9wMquQ8SABetXZHn2ZunC6kB5pWrcYD3unSVcDGZoAtjGc63tSUB7TaETci",
  "key8": "2SKsyjNe8u3adHsuFzfSNDWDy5UvK5AGPn3S9iZFyuAhnhrmfbd6dvW9QchGVuvJhrC6xNSpwesjvUY7vGFVaUET",
  "key9": "21e5sm6kCD251FbrX8BuWi2yJPUjyKxnh8YXupfvFzUBhczcf1bpgE9ZBbe3myWkthdTvCEK9P1PJF8rKyMKg5yJ",
  "key10": "2G1ejD3Mp4jmgraJiwMirmHLvdqZu2MBPVJfaXARmuhNRsdgVhRC13HhHf69dE4AyAmBJNnUrJWQGNB89F92s89b",
  "key11": "5B4J9nvchd3C8EpyDbApybrzyEwzpxcQBiPNFccApudvJEgLdXdLd2cPXNvhnWWuC8JLb8GwNzqubTViKc5tXnHs",
  "key12": "4u4PwyJqaEmMi3yYDBWV3h9gPRjP3dTAa92ab4HrYSVHz4CiTxE9LUxSsfpGT7jt5ZPi36MYBQtdXhYTt62AMydA",
  "key13": "5p82wu5a26exWzNGvVo8w8tfHtNHphpC3LJgVgV1bKSAN8NWfE88988KQBP4LdXZxx75FFqo1vQxZEF7rmdr2QY8",
  "key14": "3whzLR9FvNe8UFTiAQmzYY2VJNKuBnTfZBf8T8CDQmDVHC6vbLAQaqZnsijLLvLRwWAFt84dKbJ35P8PH4PFHruN",
  "key15": "iJz9eEf6k8xYbH7Cof1Z8Uxh5aNmdkqAeTKDdnzf6hjz4WZD7wYwo1d3u68wSEWRhZEqex3nL58AvkiCpBV6CFv",
  "key16": "STArxzuZSssQTx7aNqv8jNaksx881RYoHZZPjvKggY9rk1uwsL7VmeVjMQsLz2nqipLyd1ZiYrkeVLR98qaoZkA",
  "key17": "3xigfMC48fTd4UVkuuQqfrYcN5BVhD6ULsV3wkNeQaebVsFbaAmuJKhRQD7Sa9PjdQngPhQy8yT52Hcpuy37xPUv",
  "key18": "4auKXp4eGt2m92gafnBYhqiKmXGnsvAxwWxRuB5SL5CRTS64M6or6gB5xAKBR6DRtxgiZBrtRJrcKWAndKXMcoRX",
  "key19": "2ygQtArPmeTGokHuCzvwefZ3xeaczDZkJ81Mwe71UWYaZLkUP4G2rZeKE8tR1Jp2zMUKuWHXgnkzqmkUgsNkiRKb",
  "key20": "CXvUz1J9GLzQhSvr5vbR95XPcC7W7uZ8poXBxjizisfKi6UKyUyGAhxn4LnSF43EKxKdL1xLC8Go8u7TKRB3aDq",
  "key21": "5b6BzP2JzZHDo7oFP5KwFs7jn2NiDpZENtUq5Hz16Sp9ocTJNW1yu2pFSWjcN83deRmutHD63P3AmcVrgpHDY5fk",
  "key22": "47oot1STqZFoDYu7J3KxzyWvAJbmmBnSotdTQeB1Z4RvCoUiViJp8iVic6sUGDGuDMiT5bjF7tr157bbv4immu8F",
  "key23": "5R42Bxe41hq4JFLrGMNkVjvbpcxZDN7LUkqhvnPgQTGXXo3b8EhYJNSHP5aA2jaZCjyxeFzT1r1EnacNTs3KNB4V",
  "key24": "3Xo8iRwD7MJDWBrFfxMA3ECjXfkHw3KfaNTzMcfyV7Vvp4aLCJRAUPfPDvVizavdCjczmYLJcCwzRjeWzY9oYLq5",
  "key25": "5EwaFbF1RtpCaxinXmGusuJC5aqKrTro71kTTSow3HGuSkPQGw8mgLqRCh7S88F43AhzdZHeMCMX2Cs8dgnQDfnh",
  "key26": "pLiZ7o6LaJ4P9q2NUe1rLHevAcnzP4QTjaeKoXQCmhiJVbbi3TCPBXzk2hRNgzXGw4pHsvYX3Q6x6XqM4p1Qaf6",
  "key27": "qBkQ9U3XdTnWhnmsVmJSCw5QqF8NmHyuZKBkU2VN9frwMvmD3z2MvnMYGLimWZUMegZi5MGRpv3AG61TGgnWYDk",
  "key28": "5FnvWsJVawWqxG6YJmoH8FAucsPBxNPPK5XcdbuyKdybCCinGDXuHTN5Hb4MrzASoodxbm7itEKREvDevsNAv4Dw",
  "key29": "54mdkyF7sJe1iDjvFdSgzpw93o9onH4QsZ52Bg6zHznzaATSyse9XnZVXKXRb5a3Yg9JdTrztYRh433U9cS3F62H",
  "key30": "5fNtv4DFKJCZqS9dC8HK6JC5FDwvVYr32dtjNrV67kLqkuucCNceBqqyvVUV3q89gtK8w3ybyj5sjK8pnnnb821G",
  "key31": "2Z7pEmvBjgvAFq6Up2NMpajDLbwJvrCN33aAi5kM3XJR2jDKCcPvhUVKGr4HYEPnZLD3pXDQSeFN79rYTVkMSAZq",
  "key32": "3tEtwLw5PQoMKxKszpfFTu1EkanxR2adbigTMm7UQ3rain8Ax62ezow3tQmbdX4k9dn7RxhmX8hDbfh4fpjT2x5b"
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
