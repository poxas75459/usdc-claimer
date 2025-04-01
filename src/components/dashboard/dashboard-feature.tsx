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
    "22QnerYbS31EGXqEwQsStU9WovXdKY3AsAdbR9BExRjXefmTNZUu4cie4kNFcQzs7fdAbGZuECwU76DnET3iUR8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23eXJ6JnCmc2pVgmVs5x1xHpBeUWkq6SrhwsJA1gQAR1v224BLeBScy7meSwGwUoGFxPBawCgVmepLT3o9eZ4u8K",
  "key1": "y7HTdHFgZsQyfesb4nvQne1nPdi9hdknanFsjr46cZ8ZsDD4ZxK5SsJp9jauTFJk7zc3iqnHHWAHVLzcPYRFi4T",
  "key2": "5d3DKafhUpLcZACyK3jgsHm55WegkvZ3NNF61sw8CGHWfiRuLdMeW28dysmnyxsixyg1gpXZhbJzm77SugsoCfaZ",
  "key3": "5dqKB6T6gaD1UioiSYHqq8xW94NLFr5JFAPyvEeMN3PWWZuagptQn6s2ziMu6n5pS6CTgCAurFE13RYgRacHE4Fg",
  "key4": "2fmZhyemRAu853SUFNWRkzivT9Nb4sRq2KuHeYexsaxtq1UFr8Ljk6nSE4yqCGQwxrQb1uiEjwF1v4qAPNUc3Tod",
  "key5": "5JkUgL1f4edkZ4BSGcCsRczytvkEasr6AbYvzTXsyt3Ce3WHXcojB6UvU3zPP8H7SDgWEiDqC3NparLwJ4CJfDCH",
  "key6": "CqDjHvbi9Yu5RzrGJC7JLwSkh3hbNr7thDfK9e3bwWJScZdtNFXEnXhYRsuHwjTtDvvMTBSSsuBCk2HZi1zRZ3N",
  "key7": "pVETBmMFYieLPMVvhErnbXpFWCwcZSyD6wqys2G1hXP1iRcEUsC8L2Yp4zXJd4cth9NMyboUAGvnZ8Vac53hNGo",
  "key8": "2Ui5J8MkzXbvo6JxpCf8Cx13S8fqEFZu51eqcfJUPvYznQ4mTHJ3Ls3fFFB31vk49yUU1EG4x2PJwYXGp7gEq7iU",
  "key9": "5nBndanUu6TfvZYTtt7pHNe2tQndrLtsDwkvnxEkmmUxMf9hpASEFKUB5fVPGV8JcyDkVTdweveDZdNoEswSkfGX",
  "key10": "2zFE67Z99NneZxB46ZWcaDFfZ7iPXVFiwMhoiJgofe9tEvPz8dErL3daZHqd1qvyCnzZGDiZsBQ59T1juuAheGnV",
  "key11": "4DvdebeXJDJX7RufBZMutiLtoCuMTgsZKmSZDPhhw5BDsFjYpvpXUbsFTKcSg1WTRzuX2H8HGzpHcoLPzVB2tKQr",
  "key12": "29mJiNGDYAaFKEje7KvzerhEHAmXadxC2Z2Zu6FWgpDXHSnbpAaJHZCe5DeFhTTaM6UT15wsSkkUdEzUhhCjBf43",
  "key13": "4AoBXmZ8qjU6uXB8eLYzoLphkoo3oVjVcnGYZkLwhLTSB1RzB3TtSB4NQA1xxi1mwSsv1f58YFSaSFPN7tgpkf93",
  "key14": "2LBfmS2tzM6wm97prjzhbD64aUwKMPtakX4AxfcXfLPEsfBhxD8amAjUSf4UFZpPxnsACqNcjMHcaCgMrbeBPv6w",
  "key15": "5kp4YQmGN1m13jZ2KYXFSUyWojvKiiPtbcx3yjFebnvxf5qL6Sta9DenGwzTAL4fZcsjjmFBFoKJFwm8ZK3zyjB8",
  "key16": "mwcF6m1Wg92STc8R3TxjTqkjq9x4Jt1mK7tDr2GrEn56eYyStvHP5w8kgwDijCAoHs28FsFvXm7ibVZF1YaBBSe",
  "key17": "2E5tyyM1ZoK29A9v4KhqHxigEhEAqnis3kFWU3vuMHxNXJPUTWoMpCqtRXN4pSN11e5RchxtLvLBxNFUgtQBcqXL",
  "key18": "4S3pG7dFTXQCu2xjHpwTnuhyLWjHm3CpcLfBaBSZ6uYtwkDk2DDKZCBZjtMSwtxB6qHwQRSv7xqdjZYMBgStrSxr",
  "key19": "SvhHLkYy4Lh1NfSk5byPzsgc86gG3UQYmbuDkVMGQr78cfuYBGE2kiLX6cVw5DcNvvwC1qgGa7FZ3zm5YsKxjWZ",
  "key20": "5QkiVeP2U4kgy1MFDKifud5iRxgNHgyFAFtumrQcGy19SdfDLj7zAzJYthchtPBKsHC92rXMP69YKb6V9AEgkbqC",
  "key21": "LSPMzMhytAhzptcCjErsmTDyy2Hqv1SUuTemX3XWHFhstzdW91p3m3XgD6M68HuAHghP7ZFQRMgfviyssqZn3do",
  "key22": "3dSkLoaah2Wkq79uwbeiuF5APy61t86bqow3Tb3JBNDwWdKKzS66h7CpqtqLiFWMaTeh65xFaEHzUi8a4WRxned4",
  "key23": "4AqdvT5mjDG8VqAC1GbbJwM5XH7X2Qaf7777Pv4fpAsXmAvkafYKjyK98ZFW2o1XA2DQDkNfHfrHgqTAYGX2uakf",
  "key24": "NRzKEKKorfp4shiu2Q3RWk9NaBHYV5pEX9jjoNt9iGtfVduRqueYtbpHTgnzZrSiiPTv4QErX2Vj8c2jhsNhq3i",
  "key25": "46hC7pkZRCzJxMZ5GZ6dYLhvJgZMcSwLCVPQajs5dpxFQpwzsEmmno815YMd7zXkqT3NrEwQCQnDjiLxvayBGfi3",
  "key26": "5RYyi8PbNgqEtf7GmQS4TDgmpb8EGuxtveZEFgP3EoV2wK1VvoQqwq6pR5TNhDFzVgjTX5G4oibsyFkJqMNvFsWL",
  "key27": "4ujVSW4J5UUrDQHYPtmeTJfoWNGKCouGFXFqDVLiSQ9yJK8jZCwcgX9tYu9x4tJRQUoK2ocpLp3eb3yRCSJx1cEW",
  "key28": "2oyyqiA9cNHZggUkFgSyxXWJkujK5Gkgv4nJTrz9NVrHewACugaWCiVZzWoo7HEf6RhzYwSDM29rhnWWnbh56Z3P",
  "key29": "4TTJ2k51STKjZbn1a7mfhnnJQcpYANwSrN2Go3o6aQMBQjvszrE8wiAmg1yY7kmT79z5hsxtaArwD8EvQLcXEqBx",
  "key30": "2cx63e75QXAQfNMTdhunNrAaRRrWUBq3E9MgztLztTupxT8qrefXvcJmrDtJV1eG9K5b3u5CL57o3HE6r7SvfNUT",
  "key31": "4Tvfwf1WLEv7uH2pY2QFvyYpGC3WFo5zpWuk8uTwMhqRxVonjsDkU3GqHiNsRzpibPuSUD1i3YJtm82J8Sp6uCML",
  "key32": "WhffLzC67MmtacN1DhebWNth8J4e4wsBF4c3mv9kmo6Gun3FGSuUNRx9ktEov9cftwhbf1gSK54bKUQEb3vXhcu",
  "key33": "38SKn8tp1RCz7FLRwCKgxFVdiWLxvbZsdYVUEsfHyvo11VWhtJy9jM4fnG1GcPQ4kmAN1PNDkg6Be2Fx14a4dGpu",
  "key34": "2dtJvLPxGjVA6jQr6ks6Hgqj6QHRGAW2JfJ1jRohkbNhCzBundT4jwntfucVAvYLCZBotsqYEenu2YPwmaQgFTsH",
  "key35": "23KWq1tBaQtASGSMyRSjhQvzJweBrjfAHBRvfLVYR3ZCK5GMwdKirNeXkQECuTan9wwdm5ZZVw1iYJYmCF1CuBEV",
  "key36": "5zrzWtABKsqUGZBLc9nL5QySMh3NF2buTvgCCBbY5upgdmK3drT1HUQXALeCDuPJqBSsKoqjEvEF7cahEmMEdMMN",
  "key37": "4J79NJbVyuYV5BksKMDnB8HNf3k6aLFpRySj3XVhqHqJWn4PRb64jo3JKjoTpAiVtVhVRDThJ3BNwgyfJrpc825o",
  "key38": "4RgafpQAWVP2n2t6tUvEy4y1q8XjVDiZL23aF1aLqvax3mXrEu9zcZcZGnPUTkXFDjcLBfifGUkR5bfmYUen3AXp",
  "key39": "5CwU2Q1xBwofTNkY5yGz7sQhVgxRFK3J1cK5V8CPydzh9T2RRhhqXJ3qpZg56NkfhVtg4JtCgytUtSgoJvJucfpy",
  "key40": "4c9XA6K48ySJybvPddvnxrEq5HRiBmRKJBJ97VFU7zK9KwHYKwfFS4K4Vg4gqkJK3GkHTwujAqf7wGR3rAS2TbE6",
  "key41": "ij6GS2eVr7XHysWiLZsPbrENpJKfBvrKQVR98ZyRP92DfLB3pRpGkhKFMVx32cgdGh33UttuG8TT2jjPqPqh61B",
  "key42": "5WTiGLyVsLceyUB3zWrjwSyjUtyF32xkPWdKasJXryfDfzsMQdB4ttqRB8Curkkw9YhKv1m9WYd6fSBL4j6U1H7s",
  "key43": "5h2LLCRCWvSKj5XxYvEWfTw6AtjknzsSJTXbrgqbmAHMi4GLykuZLFdhWcCn9TtT7SXFFStD1FdMCiFU3mtXng5s",
  "key44": "2ttdgqNkdZDQVfz1jH4U4bvf4XE26eRG47exXKP29SCkwSfNjWds4bJwhRSkKaA4ASRCmGuYXh49MtM3khcMy4AA",
  "key45": "2TmfK8aPexfgW4kZk8fEzMv6D7B573LEMjLzXrtwrshmmytquYEQRphyKw8XvjwNL8aPKzLgbnvjVu4waZGkFb4F"
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
