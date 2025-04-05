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
    "557jdZhQuF1y7vGcPx8PkureCNv7Cw6a9h6uAom8RwoUs2LN2WZc4AxAWbNnhMePAWSwkZkNk1WjEAkyygUPtgsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KF9onGhwXBtAzTY28kwGknVvNjLY619qXDgZs8mJDq1w2S6kQHjkLLdWwwnsnJNyWWeQmKLvMZ89AVBaMiQik25",
  "key1": "5qopPoToPere1rBLDZem4MTtXMgBda1VNnmTZL3gF9xRvVQAUiEHoM2S5Z1g9hdWDid6oSwt5WUVakQMjtKznour",
  "key2": "4LwkfLxp5CZJiqWsfD8uwSpjB54xJH4PTgGu2dSZaMLaBDNs31i5KF83MdwvqTkt33KMZiZLMebwg4H8SH5XXebn",
  "key3": "3gHSEZ8rEDiRhWXjQbqbUSsuhDB9WqeQYFz22XktChtboT8yKJG8c9Kjo9YCsW13jAzD3JFvujeQXEuwAKeQftDL",
  "key4": "272JNDoy9NYxX591TkJTUUq62gSajh8tGp1nQxpdZg37eTTBSHPxoXqJSTNJKkj24wqHccdp2StNwGE3a4sRSTSn",
  "key5": "5xKKSNn5UB9J6dHjaAemXVfWCwy4SoatfagstCQ4xGaifSkjCmyzftTXVfa5i2sfmUecDaHk7Lkq32Dc97yRuQPY",
  "key6": "62B8cHA19mXV1DVmkSkQKE8YhmcsT6EXL9E9mFca9qCkPtdweYTPU4N3RFXZMbLDSVcxxoEiMLGWaapxfuGwPc4v",
  "key7": "59AnBNnQBJsxnV3oeCMM9mPSXqGjgm948XjYPnS4wtJGg6r1qaW7oUPh6oHJsV6Hhaem8dByrxxGsKa4Qe2UA9h",
  "key8": "4Uo23uB1hZsh4JhDPKFweCwGAES5QKo9J8tuqHsSzHjMEHqibkcmcYV6U1SW4BWbfjXYVofALAbVAumnzwWEMhiM",
  "key9": "3oULUeGhyRHbGgw2psdhY8i56CxH74e4jAxzPGmAbKSqxnxBBEm7ceaAMfCkumiTR9whh4F8KHYrcJjuLNP22M4i",
  "key10": "Yc7GrXijqtBZmteSC1uNocgcEjcX3eou3pXemr8A29WcgYWhnZfV5a5ZT3a2nXdfcjqJ58zveTpqKDYqNSky4Kq",
  "key11": "4jSdngyq3gv31VhNhUga6aCsE9Wu8mSBYjLBiAq99wRN7b353AtPnRq87ynFP5EbBsUqSerYHMjVKtqB84sp7H1p",
  "key12": "3xgkKRDcqTCmugJsK8ZT67EFpUWyWau9Vkh6ePudav6k2cmwKr9mQpzL6jTUBW6mFKtuV8GFptYk3KPiSgAnv1GG",
  "key13": "38sp5EZWyZguaSnog9gwNUFZzy3eZDHpnLjwZ6XjwZqABykXqJ2Zktxco2ZnyKpgjshTARGiEFZTDz2epBxsK6us",
  "key14": "5nuaEncVYyDefxgRHJtMvxUAWhiKD2UhwEuHS85npBSt83Zemgrn8SEJAQpioPtE6WNSMn57ZvgwrTH3Li5P8eax",
  "key15": "3uoKvzpo1h2UHD63hDTLQhW9HB3UeeiYnr879h5omswkgxiNvRzgoTYNU1oCmg9eVzobdTrg2Li9ZnHd3G5CR7T7",
  "key16": "4yB7Jm2FyxoNZ74apw7KybKKTiCrQKhQNDGhP4Q9Q7m5bkPfddoeqQmbFxxeyEBD3h71P4o9vZY7ciKQ21z5XyN2",
  "key17": "4dNKMnq1gNR8ZT8bKiq9RQj1ERyT1xBwmu6MfxxyW8qJuuUud73qVmdJE2guDRFe1TbzxKYroUvjzMCNFpB5qtes",
  "key18": "3oGbCCSwbZ8DmTak1sAxt357UZVnxCo8L5vNBbt4BM4jV1Wskc53WLvcSnTDNNMsdKgNY1iGiooxMukFQ7qRLkrh",
  "key19": "HQiZK6m7xyhpLBdchUiFKruXF2kRiHor6dMwMrQ9qzCrFZYRa1Gsxi3Tu7cFtXDBncrniagDPuru5PRhppaFJTW",
  "key20": "4zSwNhmEkmiHQz6aYmTHQWV4vTTs3UL4RyHy5kC1WYiy49at4XjaowDFCZqCaXi9qLaYBrkSgzY3zTasNBFVrWLP",
  "key21": "3S6NB1M9xovSt29GQGjVeJmsmZ9D75KLxPRvBJcCkhZyJTTQwbePkWxPh8XPA99Nnsb2GrvWYm8WFuwFZ2GcSR7g",
  "key22": "jKkehjPviQX8tSJRRnDECTg4Y3XqFESoSH3Pqy5wZhjYRFT1FQqL3WQN3XCsvw5DrWi6NoQ9iwWng3SFA9Ub8Qg",
  "key23": "5tzfpXE8QTb2E2Mq4b57x6m3D5r3WeaV4Fe6VJQwtfthCLpGpYWyzc2WE7vAVQoZktMQjmuo5D4opVV4HV5eeYgm",
  "key24": "zhTLbHaNq7FLnovuYvWWrNKv3BR9WPjg5tWszbLbxxcTzTutsc64Gp75uFAyVMZ4y8X8Pc4gGfZZoPdrDVbt4M7",
  "key25": "419LHdWksunFFPoSxwe2Cr2w57kfehBBqcXFza5W5kqk8Z7gSYMAEDNNhriyZriSi6fCKvMgrRKU1Yk5VSL4jhAq",
  "key26": "21uKi7U4nzt4L3hLuSXaWiU4nxBy9Fob2AxYFpgjuscrCAf4W3LxdRdm7FcZvJhMLwu59PxE3Ty9nKgYF2pVECiB",
  "key27": "5Jm1NBxioSoqzgxEt7HzgaDXy7fioFJpXq2rT4fRjgHgW4x3fYHrxxPPhbAqq3f2ou3bXTyVgPuYjAkKeFUfBsCv",
  "key28": "3osz9YnCDoBatmQ9wTtUe6PohvWw8zu8Hz4M5nxRESDSxeX9kP3Jssbqczbjwv8RT36NJyBEc69pfmJXdjw5WAHf",
  "key29": "24ZxnMwcGhhTNAzF83wbuJ8cv4eHiu51cvyohKNKBoEfHf5QFAisH9emdxoHbny4dp6bfHVCmBuGERc57vPzJz5v",
  "key30": "3KpC4YW87cnUjeiTRwWs6iTVqQp4uuJcsDmbf8B75RAHKXRF9TMB9bYzjgvAEqfv68P2Lq3rFvYX4zqjzdjGqhBo",
  "key31": "3P7sYaKGyqYeWoH6CzfrVcMie5yeE2sMFDfmcjnFmdVTNbHxhpDd4Z1K9oBFNsx7jApVWgRs4Kwn4aBAcrqGVikJ",
  "key32": "3mo8vkHSsCAbvAPcHWX3EfRS5zMppiFRytsgzihCAkTsMFm84XgBc3RVcyYPx2zY4paNpaGZiDFrcRbq5XZFHRTS",
  "key33": "2cEhAUjTrnakRKHhemu3ep5FW5RPJWYDhJrMcg7m9P47yedKt9epij7pwe6Mvzu7bi5iAuYLsefD4xMmpoq9fGFa",
  "key34": "3nhBg2NzkWEUoDTdxiXEbiRLxrLzscqqpa4M2KDLK7J7KbfHeDtKe6zNUKZZkuBhXu5v9v5yuYm1LHrFaXAdteQ6",
  "key35": "5LihMZWHXxD2JezsqdsrqWz9eGHb9G4srRByFSAZYJ6TrRUWA7DKWqPBBhxQUr8sWWRjUaoZLXL2saqtDraHP9rm",
  "key36": "4oZuF3o1HNQ2iJstfyTLNzW5gLK5rami4S3vhkGMdwYTgF6WkwgH7HLMQyfcQkefMJAjB2MmEH2jBnW2f1jvKFr2",
  "key37": "6cuHViwgHVg7iaksDzUX7FPhCkMQ24cjMnfNVW1P5VCpgd1bUrokAM9zwnJVi8mKkkmGAFfChrMDfU25LSazuUj",
  "key38": "5w31NQRSmtB6L35qVPXVWYMm1Bd79osvRycUw2z597naoaMUioj18bPhGCMcicqSAdhLwP854RTiAAjiNL3iZUt3"
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
