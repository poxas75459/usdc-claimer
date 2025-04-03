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
    "3DGFSNriweuETTCKRzrQvDJLNPVnd1xfkCUS4grchFt3VPktz4mbSr2vGbstJdezDUpmFRRMnd51918ikRbYPgy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KPjQzEbf8p7Qb22meNX6JSkUuEsaYHdczsnqXCwfn8JhFxZiNJf9CBQk8yKmKvKtG38L9Udtmqg79quKUSCVb37",
  "key1": "LDGvkTrwGnZDmNkpYuFzBYr1rejmwRC8VMtQgQt6krn16ijqw1rnMNCRSaX2S2DYHonaomBKuoPN2LmPCcEzqWE",
  "key2": "3VDCmsGTzkPDWh1bMgvr5zJu7f7ZdSuqMK4w2EjYbSJvCTcd4vmrAynYTutFaZSFzNJKJ53tt5G8R7iD8jaLmC5M",
  "key3": "5mbon4RPEnWU4aZEnQw4Am3hKP8mAvi2D2uH73MHSAYpBMAd1aue2M2b1LfxK8FUi5zEXyYwqDwXAjpYFERT7MpL",
  "key4": "JSbKEZXnuo4JRTtR9cciPRjdCvaZvodanEiXjVCxLkdPHaxtUg1NKbR8VnKSdvdzAkucDs6eXPHmSThVkboSP85",
  "key5": "3WVDGSgnjyiBKQHhn1xbQofvNp59c5gxkMKzLB6TizLXi3esXLhXhCMT4Sf9jopoq8KURtuA1Y6U6qAGk8mjSsFh",
  "key6": "abuVJbZueZhzeRS6AWhwqhgjHbjKv775mSRvvZxAVRZpYMWGTtvnCWwYaT2rZmgw7gFEAmhkcr8FajcvTqAd4tW",
  "key7": "5ycwiGWjacEkcKo4Z47KW4dJ3qVSqh2aDsEbHLCjoekbUundwDMYSGQA88m5HT2RPEhz7PRnmDj45hiosFzGjPy1",
  "key8": "qCNTht9LBkFLh1WEb1qRvBvPrkC8BY1dHd84r7ZkJHJH2PNSEm2Zh4RiuF1zw4c1T5rLYuvzSBv5PJpNmT48GMo",
  "key9": "53ZsQ2dwLLkqfPZCMY54XD5sPfVhRv1xod1xVsGxDuJLnBETo4jbGsYxnpvCb96HwAFrM3C62hfdhABNYZ7tMbSq",
  "key10": "4WfYPQ1ns9vjpNaoHv1LueCPBPBXeuapvKeonpJwuj5kMLXtyyL95qWXHWEW7KG5QhkoxHLuvWDjWpfsF4nFbo4T",
  "key11": "3rGfnNF6beqBs24DFZVxQqGSiYrKpfAyuHGfiN4d6XcWjuDa5n6fdHdBSotgC5KJ7XniymtgbbvoXgE2CyRdrfSS",
  "key12": "3HpjJy7Xz1WGnBZzWBSXdCPNhT3GgwZfiBjvnGQvLSmaNynXht4W49jen2VjvAHqvEHeGP9a7JPHkc1D6M2UAHNe",
  "key13": "2TYCUEB6kFhR51azHuzjVcgpytDmTcVMzv3rDWReYDe8fmVZshN7YqrnJFEvSBF3zSNbksera4RxGR7jeKDLyGBi",
  "key14": "4jdNjK9pH9tNPcFxRK6fB2cAAHaKMZ52szWEZGN5wkAYhg8WMY1yvNN7PUUSgDoQGET6CmVjfcfWVeDUx81V3mcx",
  "key15": "54DEhpmEqYCBhKkzchYw8d48Ee2gdmcRFZnX3ct7PtCovy4Xj4gtaK2HpZRL7EPrfVLgPzEjjapb1L4RuVojxnZN",
  "key16": "2JtxLBTUUqSixps12pygxK2GMGyFhDkdZiTUTD98ra1xvBqMrWwLXQYg78ZrmKCrD9dSxMDhcig7ypD7D4LBqrha",
  "key17": "5asyD1QydX1mPwWgwmvCzKYtGp9m6ccj6CLugehYHAmvp3D4YMgr29tggzPPSAhwZHSBqccRLThc3PTivKoF7x5j",
  "key18": "26GmaToY63xmUVAJ2xwzwLzWBdHE1MgfHbjuVX8Ytg58mnoxqY9thHZFqGKuQJNVT4daJgYMYz5P1Rb3SzeXftVB",
  "key19": "4mJNrRs1HrFpps1zPmzN6gMnvxSMdgZZxosA5KkkNxeDCB9MJBxmhMrvReS6Gnhmc41hNbQs8VuoooTL2oyefWY5",
  "key20": "5KwRTJvvvq7rGQpeNQxKiNW9GyQR24pvfLUNKEazV3SVpyCKFS14mdMQxYApsJ6Ldws26t6G7Xd71ieaaTH4iKkn",
  "key21": "5gP9v4q3Eupa47PF2E39ztcZ1wYtonLd2Cpw6hAkz8PAki9ySF6FTH24ajsJHYBm2qRgt16Pp4quXQk1TJz6ap5T",
  "key22": "32XRYdhWTTcDyE6uT4vDfDuqTuWgTeCwxshTE8kENgbLn2tnNYSoZ898FiLgctThafb3zjgPegfkRq1hpRxWxzBc",
  "key23": "3Lr6yqtaoWqChWRRaVkFUJpP4B8TS9fd9wNpA9JE3BEWTnfXyibHhWe1uY7uRmSWaPpr3P2XrJmvt1NZbuoi8GEn",
  "key24": "5JjD2XxD8HLGyGQ6xQ9wcRSaHYTL4PBgWJZeRXabUpJfb6R5BNKZ1PYy1HEZiDVyMzKtsauFdCqTrNn1zHAwgwgK",
  "key25": "4by6b9FfNymMbqwaspYcBsQDPXkAdAu2ocYtjTpyEHVznVSLdXNLsVGJbZCZj7gY3Bztec4rXmvZJeQkV5KgFj6C",
  "key26": "65L8K4DGnwNJaeAM51MYhP9TQNuikKE4A4XLsFXNgFbUC48mpuynNB5dyNZw38o1RFbFrfHZNNcozcu3TX37gKhp",
  "key27": "3cbcLJwcVboo68yQ2k6dkzKWpMLQwqivcqtbHCVANDnzuwZFm7tU8kBgGi3KjR5x68XiDvaQqtJZLJ1ucvT1taF8",
  "key28": "2qKwhPHHTSf9xTWGeACjEWBxnxcxw1hJeHBLGW1rBpReGiEZc9gd9i9ozjZRZQbYDD2mHaWL1R1HGLuy2PNsFo6Y",
  "key29": "3kweFrT5Vpj16wUgHEiTtcbbwHJzwrmp87JwyqLv7zxJhB5yvT9fboDvy9XgcXGKTJbmAFwbAE7ip1Y97uHmqbH4",
  "key30": "uMYMWmqQuZThbtScE5LaugKEYT8d2LsGWk61rmHFBu6WTCU1J1AZLvT1qBNZdMVpXQUwN7ouwerjXBEMmaBDuSj",
  "key31": "2UwqDf4LiGeLT9tikc3wetNxCs6e7HnSAan9y24mMJnnpoYMRXbTk6EygC77Jhz9qy4VHjDZbrCzQvLET6vEWSc8",
  "key32": "3eBuroJZvZpTKnrDkrBfVo8cGyz2vQSGTSMLoPLnRe8w3Nna5mP8LJmsMAmJwJZXQVcnJwPxMr9Nw7zA8x8BpWJr",
  "key33": "2T2EaNJVkwQwhqaV24GYvEVgecUdMSVRcNeJyk1j5pfbA1LADcPmeN9o8gp2udZYTEggpQQFyksSnUZ4ZEzy3J7s",
  "key34": "yZFwSMJhFQ6uBtQHV6GebuMv4j41772HpvzCNcLSwyPi9oAq2P8cJJDhSDPA5VtXXKPPrFcii3VF7if9zsHLvUW",
  "key35": "XkC3HNkdA3f8Qss36frzALc81V6wEMZLYpUAw6f2EtEP7aD7sMm3v3byFBSWXkBfUJRxDsxmC4QTAA9nEbbtnz8",
  "key36": "aaRLik9N3nUB2RdEUUhh8cjtXE5jvUFFRTM7wJ2NoQjvYzTHthXDiMHZs164VrjvZXRFitPY6BywAhZyyXF8cUs",
  "key37": "5SoYATNLMXDdYJVSKeNxLAS9AFf27uey5tWJBoDAFfne6QMBztTSKtnjTAzJ7uow58TZp5y3istR8AyxQGQhhC9o",
  "key38": "5SnuNHNjf3V2McSNi4YMgw697hxYvuLznyhPnwsj3ZFUEFJagLXfeabc5LwzenbVZq1b7Sr2i41BfF6unbZfjB6w",
  "key39": "3fd8tiFFDBpiwo4sdeoiSfaPwfteTTBzNy4PWZy3e95vZCDe34wMGXgRRWMi99ktrXGfcNLVa3hVpvkd4i4sSmn4",
  "key40": "2SjQcDdyh631XyWzbknoGR4VKrLSdS3us8Uz7j5bRudiP5KGH2m5N5CUzAVz59WHDZBGdt53EGdGUxxNrNX18gTZ"
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
