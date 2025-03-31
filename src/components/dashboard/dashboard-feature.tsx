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
    "cHTyW1Aaif9pRu27TnSUyhhziTA6W21z9qRAJEG5AVBZ9XZazUPemzbat7cgNKeWDjLVTLYcPoUTEyLfXuZVGGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wb9FRoG6Gm81FbmSNxvMd3Kur1ezAMMK68cBCaciAKAjiMcbDSkLojZyzXwDWNHmrwVHPXjeYQMqVXR7HUYeeP1",
  "key1": "NeU3XcgWoJLWEztfY1p9uRJd7jgxCnTHS4ZA9kyAGswgvwgXtbtWWgF9QXQN2YwvHJhDjMeKw8Aa1iPExuVKGKk",
  "key2": "4tyq5t7w176oF855ZBumPc9n34dwBGAk4Qk6a91KCWLBrUT5KZWzb3TEryiqC4RADxQ4PocvmZZDaE5JMAkJzMGp",
  "key3": "mNjLifNjbGVEo4hqNz1h6W3Eug21dHW2raW9pXbbBeeJNeB9VA2a2REVkVvYk1QCd3W7nebmWw8aK2qNeQEkPDN",
  "key4": "2hot97DENV9DJfktVd9iWr2abdCKqfMfdZeS2gaMV2jt3ndegpPf27ayrGzdRKgRpwngRTnnmJicSQGHcy5mSPzx",
  "key5": "5QUY19VkAefPDSt5WLfZgRy8zewyt4dnAFRcegW8p1pqxEED6fiirDW2MXVoJ67v93uRfU5LVGYfREDm2mfSt4Vh",
  "key6": "5ZTrfJsScicjRyQbRaFBzKRJf7NWTnnyyWKSotkpZoTMCkx5qKcs1bfXeNaXyRxM6tcPk1uGkzA3mVcdEgb5msak",
  "key7": "DcRnueQCzMvebE6SQ9Mhx3XyG7QtSKLEKdbAVHBVjf9qW279g7DnritGT6u27b8aKnV5uyGrx1KD2v5VN3J3Zni",
  "key8": "2ynn9xLp7jrevc78eVNDA9EZNSJQLii12f3c8xuEXde9VdMcjDTvxsLkKrCXjV9bcCraCB3NpewMutgX3QYjvPKa",
  "key9": "wweZScB5g9z7VfEkXyzomKbj5MBaB7JGvYngS7uynuqCStcaT9UNxKzuesoERQGHoQgaMqAWK29QeE57TPevVaQ",
  "key10": "62S3wQjeSpyN6ThudbNt9bXdZQco6TNjSpdu3JrPCwaZ945dqvgYzqU5R5vNaGfo6fA3gvtjSiJAh2CcZGuXmeog",
  "key11": "2UefufpPeeTP3QvFGY73gtY6SkSNnF8cKTa2VpK3o1H1p1vmLcnAd1NqKC3JPLYW7eAw5yoHQekWDSgopsJXEs7a",
  "key12": "5Z15tvst7AHW5VP6eQVgf92SqNcoV3kTSTNPmRqGY1YqGycj2K58fsRmmwS1gbWUGbQbB6xw2cP3BvnN3Nsi61Cw",
  "key13": "5EAjL5vWnysxZq1oGB3MK2raBNuM1t2ScbHC7i3xURwoAcb5fYiAH6pQuvfBRwxjAY8eaNG8dVMzr5PgPryYVHP1",
  "key14": "ZihbGHfAfCTcdUWRmMsvEST8Xv7h9UnRYj7vVVjtCi8LMYXH3CHmHZeWjDkn4m3crA6PC9tN6bfWgDbcwsgkZgP",
  "key15": "3HE3vg42Rto8XNJ9YJteYup4VVVJnoB8AoZVAp5FH2bk6TnDTiBoRLDvB11UrWuk3kmkTLrtUCNPvytCwNxcYuMJ",
  "key16": "4XXVoKpCWYKGk8CQSyy71qZbWeUSyf6P2GYqHW8gywmNxMh3We8JgTc1cGNcGitdu2CLdkFHVL7FRyk9Mr5XXW5C",
  "key17": "3XGsWCUEUFZhu7hszJw3xwHe25jjidBMaeGbqvf3XFCeVPmHzcTHSPS2Bh4c2wLUgt1aKrb2ZJfwLamdrVH3Gtdk",
  "key18": "KaBRfk3xVZTw3raniHsfGRSsnReKscH9NmqCSXtBnueKD8NusARkuBVH5wezrBFJbwCm2xhC6ws197gPWKB1kt5",
  "key19": "2PRKxKnHNXGde4Qqh285BxjaG2kPCJUuMY9eKJxQTGn832UWCGsQ2qKE6yc7sYT6CRakXLJKN7h3qt39n3tstqiV",
  "key20": "mBLGSi9XW4Vi8jV8R2AGirM2ooE1tdmHfPgszYMNbzqs6dL82urQbTbN5sU9MrTUYgFDWumKFtFnbJUWjDmbkHa",
  "key21": "5GgHm1GdWYCTPY3nFfpohS9Lzsm1gTtBGECvssWsK4aaiZpKXG7WCM3VQS3ZU33j4vGNRTAQHmRPMQNS2gxpbHpm",
  "key22": "5BQWgwu79nbug9vHTheg6ZxRyxjSaR9S6xx1UFyUAG6apud4UB5af624GFSG2tLKV2sJg2B5ELaVe9Pg4HNZ7JyE",
  "key23": "8EQGKpS33YBrkwYgtE8KpHgfRqqFcBWXXGyqKiZT4SUceF93Su71eF75wmnd1kPfo5jTF9RCv1SxYLnpRd7G2d4",
  "key24": "4u1vDyV5Bw1cZDvxziGASBMREkgdNvxtH1tWTqWy47gTVKqXKeGUvusL7dhx9tefUYLynes2tpWxJCgpciLyHWiW",
  "key25": "5QKbwGWsJQvT7d1yLi2A2rNfGF7EC7zYxznCWevEmj92hFxdpwaVT12drh6hbrV7FBNcQ16HwvTww73FH4zVymCF",
  "key26": "FTyYFbmQvfw4SLpWEE8ZXhCr2LppTmkSSLWxJTSnT4KKCiojDTJJmmR2rZr7oWUfYxPbxEFrRxqFZSyhGMTzY7p",
  "key27": "2sSfL9Bf9bFktw4qAaGHcpbBBEuDZdRPAfG39XTPKVHYFaQwQ3CdnTMoZeP4oniRy9hud3R3EqQneiak6NZhVmTN",
  "key28": "robZdcY2erZMewnPK8hiude6QWXP56dNHzi3Am28ga5f4CH2AcD1MDfRbZEntFUpgtF5EStv8UMG1wfdJ8SXwYY",
  "key29": "4xaeCQqKynBcR1YkqhXX1rz46WiJQuHtX8vE4nhkdyYzrTMPYb1pF8W4BBUa5LN425gAzxHbc6aXy28AqfVJ4D8w",
  "key30": "4VevaZkfgLAbBdY8EYAKsgh7AsmiMmpDa5EPVpNocv2CdJiYcmPcgoLAvKicBLdzqtGzfMg8BqZsVVN8VEFB9W1B",
  "key31": "33JsZjk22tqxMcLpzcQWJ68PrpB9VYR7N7froNkJcV2Yqrq25JReCFbGBik5qJ5cEeWhDJtkGJbwnDRybsA9APpD",
  "key32": "28NjK9XiJFuCTB9C5Noo5BYz2A1h9jNEUxCLmN5zW7aNhG87NWGuc8nb1dVmJ6UDDmuci5dStp2Js9Mudg7uakQn",
  "key33": "5Xtws74eRrGV2pwoWk7emD86mX6n1rgoNmczh9N4zxje2hN4mJXqnBZ4DWXv6d6azxb2YPRLFfwWEfY6PVmH81tY",
  "key34": "4DKTvzJqMrWHWb1aiyeFNsGBC5srB7CUFk4YR3pMKujRH24BPnzq4KTJhrjzDAZbXLtKkaRZwzEerxvCAikcJSeC",
  "key35": "4Qk6tB4AWjf7ny5nK1orkxAPbCNfjsdWCfkGtWmtDo4HbjveVeKGfMRpiaBGGSv1nqxfvtvup9mKiNo6gv6HU674",
  "key36": "2tK5DKbXcNRjQJtCSrEf4QE9P5wKDi6iDQncrC3cJJ1s65cqpfrS9vkNcoNUW4AmxmPWdqxwxtHqduU5Rw5tD5K5",
  "key37": "679caGJSJxszSDycoNEpHNgCREnKQd1tnHhq9FhcGrhcYBL4A1aSph7TL18o43wKCaXV54dKUXouWze3ZsPZo13g",
  "key38": "JytPUqvxQD2iHcz5DY1AHzPSF9FqT3VnNbqLz8DfeDA63w9YKArnQzWaq8K9evRGtBJu9iCBYDu6RwJUTZDkZi8",
  "key39": "2gi523SLJuUG3uwjFLM2NFmWBSyqivK92mtQnWX7UkAhYEY6sKL2Qi4mEu3BMqz7g9v5q5ESUPnLp96JS1JvgkWC",
  "key40": "5yb2FPcReUSVJWhVvqfRzqFgN1w3jYtorLqToG6tG8eCNYJct8XbovXz5m89yttg37NzV1uFx2Y1etB4RGeurJgc",
  "key41": "4xrxFYiw3arkvB3mwyXwzK6kT9YcRX1irzk1KTbEKzfSemuA2TDy9kAfr3VCMWbbygeUgtQZspsZry9ZJebqA1n9",
  "key42": "5Dwidmci7HFyjeeLGeysjnUNWhcpRBUwAQ8Kuz4hGtqPbYwf4RvMsHKjjKusTvn7vVXB9Zy7Vy3dMopVU95m6j4F",
  "key43": "e8T3UtcdkfUP47Q6jSAMqh7xccK9MqTSAVWUmjLfnypS5ZZzmFvGN7QFusaGH56VEpUBRSCkBw1VnkYzfcYQ328",
  "key44": "5muAY1QP7KWPbxVTxrxUBt9MPX1X6rroEdUny8pDqK9RJTxsC5exQuFy8TN4JVgrb2iWRDY8UHWEAT9hpMC2Hmq",
  "key45": "4LDdy2rGweX58cKk4mG76JZ9UKqC1W5Bhz9APdwDaqstwrmpUg5aiU3XtxUnQwunsUWfFfxYkBbya55tzWoroofQ",
  "key46": "4hJhADn515AbDTpi1evUfBzHB6dha2Ep6qjJVB5E6mUrWpW6LgaojzmYX3hKYV71KR3WAQfSwMyXJBaWt4FZHZmC",
  "key47": "31hsGDwdQz82TZHBRtzPZ6UnQT4v1tqd2shoQ5tLiweQ2qsQ1kNb9cY4Msx7dahxCDCAJCe2zEyzASJxhshjkvsj"
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
