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
    "52J9MbooJ1vTLRtPi1ta1mgchjuq19n8LymXxkGWAi47fFEsD8LgKFF39ZCnhbY6bo5npM2mahQUwU79rqubsWVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RfKZXGmupyHh65HsDacsMhqmjEoV4MYC9kfqopbGV4912HnuvEEQFF7MYa5fheNjczHotbftC1FYp5YWfM4PRYM",
  "key1": "4nRqifCNH59q28xwyYTYGiBR3v7dZnYDD6cTB6UDjkDMdJuKfJgPtqMbofa3J8nV2sodMMHzmAeC6fd99yhcatTb",
  "key2": "HPdxmFtnTzJZcWfnGMrZw7hEQP8GTZsyJZMqqrLo4qypk6KiDyR3Fwfh6uBtihesdPX1KHuAMQeiGZt9iDpaKvV",
  "key3": "GJb8Aer8syabTUtiA96G6YpSVr7FunngHwgzC3HDtJpZAFpDBiW21JoiqHdjaaTd1FvP2dxSrnMEJsAmJMPEuEK",
  "key4": "5i9uyk1cCq8ZK23S9DciGWKVSeJtamM11uaBnqdoNcCx6MMoVKp2E9QdH8ViiNH888Q3vpzfzfc7DNDpuE7aFPMu",
  "key5": "5Eg9STPjJJhaEuV8JacjB2DEyfx9LiBuAmwDMvred7czVhnt13LpVgpzbAFTUfc5BopkJLqVn1NDu2fGkGy4Uye",
  "key6": "5L1B9ZDbBjFLnCjN5VmSPB7zMk9x1VSha5yCgbYSMmxzrV8zgGtLhqi4QWyULxKRgEPULcM3wTiGHjhM8LDKaCCp",
  "key7": "2LG9wb7D3pyjNpS2RC6TUxqRwoyKkC9CSG2D3PMp9YqzoF4LBKtpzpT4r5uX19r9cRg3scuJA4zcroQ5WxCDTTML",
  "key8": "4L5dfhALQxat5i5pHhLdT5quhdrTji4zmki255eD5krd6xbZA8rGrrVzdNonLVJt9iWYFK1MrAAiDv4eNvv2WnvN",
  "key9": "4VTcjyvPVFPTXmAiLCts6Q4LcCaKx7R3rPDwiF4VSDMnTynH4YAeukC7zTAUgt92DmBos7zQXfPE21saJcx2ZWod",
  "key10": "5RTYnjYbxUjh9trTvPJNnsjZphk6sK8sCzgFhBQQ35ciuYZHwwU8UGJi7q4N8Kq6iSQA9oAm7HTS6A7uMWayWN5M",
  "key11": "4eEA8fq2RPFDzMNctEU92ALogzMj587dL3iGdMhfRJJ1WZ1QaHA7iZL2XrAJz4wmEty3KDwvhGjp9RG8T1DjXE35",
  "key12": "27FbWZ4ptKcbKPbqiP33UcKt1if9mwZFKkRwW1TYxPWp5T4Q8DSGwWmgyQXF1hPWzKHKmE5vPDrfq15HmoFw1Nfi",
  "key13": "3XeEdxDECUSdA1RaxMqeTZvLEutQJBAiYso1LEd37psiomJ8Jnr64AMookY6s5nPjHmaR8TBrTop3W5jmxzpqH9A",
  "key14": "cR9pFMW4m9g8dvbpLbbjPx5CMq3zm5tXgtSk6Dwctg1Pt45Ruaqtdpy6n2jnXLBiNHBuMVEotZdFBHyQqjc7F1M",
  "key15": "2AF9NV5Se8BoJ5QBjFj8sjJgJxEWsiskuL7aFtBLp4FtWmx1YwpGh16W7eDP16G855iriSYk1RvsYUUaSKHthW3N",
  "key16": "61sYVk33hyQBGDcDjYte1fQb2GEvz3P5UwGsAsD1frbPfXdGfMaxQjeGHyUGQX2FZGEUu9QnFJeDVN8yLYcUACr2",
  "key17": "4jEnQTbVRQJ3XWZnnaDVDRN5wYx2jpPvbpzMHPsgR57PipLQ9cLxJGPRD54FSdDdkc3YJS3Jidamtiueoxk7QHYW",
  "key18": "3jnWAFpqA4ETh2ZozjrYHgcBuhsmNS4tbkbhBcZu3VFtVpJPBG9EhxYuJFxSvCNMToW5UiAJafXQXmaqKYjAVpkD",
  "key19": "5pxnUQ3RJMcmwnLk88SiyGbXFk41yBHAYQ1AgmJECwVgYTarYGvNtoyGNyaojxhLDZKjsiEk7ZVq6neMBUiiikzD",
  "key20": "28URTuY5r1rspyn6k18SkfJeR1nBMqx1gKZgTwQi5xQRTQqBZ5exzrfGFec9SvAEqxxhRZxU9uAsrTGzq4BkjfRT",
  "key21": "7MUPFTXLiF9xw1ovW4VkmrCLJLskkubfAX4pD8oVKQ56wXnDwCHFa9m6zf2Z7ZLvfEtkTUCEmnRQ7DG69TGbrWU",
  "key22": "3QWJY5PghHhkE8vqauhD92YMiM1G6jCwpP4pLh2VmYBw7wRgDd7DaMfwS1Miydg2MHH7RGwy99BUT3U9VmDzxRQb",
  "key23": "2KeHkNER9XDMWc3c51tJCqYYQyrALKRibVcUQ2jruQEHjTR2JCTt1oEHK2o4zpGcgyNoHuLVigyE5fR7oPHHoSSS",
  "key24": "5Xg9mNzuCxGBhXBX4vfw7hT5fHi3L6Mwn71VFrwAhRv9jye7a4T2xQJHzbQBre7BBs1ERjViwifrW8xnjXv99Tyf",
  "key25": "2wfJdnNCoisH7x6N1LScHpZvQXsWj34UQL8HxiY8kaYCBbQEFXWfqEjvVuaAGcVPKy7yoK7BPZ63SATdCHcQNeSA",
  "key26": "4cpksCjMejRbGFnrAhxtT5MD317dRFyH6RvUWne4wySV641hvS6qtbzi5ycfaFzZNm5RZ36mNPmSQuJRQyjfw5q4",
  "key27": "5TN67kqGFLnC1gX6pr3RANgWZaYUEtqR6KFJPVY1VwLicjDeD5sZMzSA5jsaYMYLLrWHVoyJ29stdaQTzsD1cWem",
  "key28": "4hmKkDNsKVwMrxtpgNR5vTizzrB7Ds9zV45CEAnRy6TVxf6pe5PyreCHkmNxw5s8anhEVKtHBVXuDaUp9LXQkNXf",
  "key29": "5eKSQwv4azDm9VgRgLbZiUjnutfhJTz2tWDZssEm1kjNnCFNut9xC7NGyMXC4PtbEtijF21cxkkSScpW1L1SFP94",
  "key30": "2JxY7gF4PnVByJ4pqC8fem4jhKbWLRMAw95q45bxvJ7WzfsQjDK1ZQvcJ36VMNkLdRhDXuK88KL34wHwQXcWYTQs",
  "key31": "gpXyTxtREjWmpgDunA5NqmYEnKJQLPxVC4uQgkAfG5vtHkDwBo8UZ9amQUB34LQ7arP7vKgkoDTU4JqKtJA2LKp",
  "key32": "2sMAvJMBsLWXnihapDx2m9uT4ateCoLzSXALGPM45CM3gShgGFdovrQYgJvxw55kSq2dsKHg76jwdQ421N9oqvJz"
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
