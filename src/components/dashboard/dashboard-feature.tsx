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
    "5zn1nKHrdbDbQdk4z7xwofGsiixuuA7tp63hZyPL6EFAREDpBgPG9VQ36PAReNpQyjw6TeWSze2VxyKytHG29ByT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkZ6YRBftDdQBEafdRJ5ZgRCUaEHxAR12FEHdWaJQWfdDABh8cBLVkrvKafqV4J2PXrTqjuf92YMJozrFVisjCs",
  "key1": "27HpBeLw4ejA3LAtSkWVt3eWFVH53fHQDKbHPQvAkvDUTRdPTNHB768TjrLosxXbspMFgAjYo3iZuoa7DtY6qwMS",
  "key2": "4MPs18QSpFTD3FxyZVPuJnrkjvtXYBBW4LyaUGQetH7TfbsJiHJePTWWPxnbsTzYqDq3gL6ej79jzrypecA5wU75",
  "key3": "4xdLkrGEFZAEaU8HLxipuJz4oPuJpTBL8wXzkhFwv2ioS5NsmnsyrHFumQUrzSHuEvnDB6uhYLKFkT5dHCSCDHoq",
  "key4": "3QvRhaUf7uXSSCEnZXJU2u9orgmDEdyjutTY1ytb4vo5GE9UN2YWPcK5ddELT2qjqR7US31HnuKZLBYpN8NEDUTi",
  "key5": "432mhXHymvnPxbhRwW8io1ePRncTEGT24F3D8NszwLnX44Q9VAPJ6JVDawo29CTzTWciGA4NrQNNZfP9o3N5DTG",
  "key6": "jN8rCaLPs6cMHEymrNHXKfjewi9ZMTJTbozYkWivHWpZMFbt1eZAJ5ZiBLNJErPfv8bT835aiL6Kd4yXMnQWCPs",
  "key7": "4v87bhpmzytgMwkmTKiBpAe5UPne2iZ4wF444sX3ywTWwbGSJ1rQnMUNKpXcRBchXMmcm8Bf6rWnaWf4tP6sNd6w",
  "key8": "37cLvwhAeaM4jaDhGjrJQukRJFrHsNWLETyfqNAkPa9VdZnqK9R9dhJmnHzTm2pYx4GE3C2JB6nGZPjGPz3TUNXs",
  "key9": "uWMEKz9iwLT2GHtuKfpWm9YTPXHWYWYZr8oz1JzarybtvXZy78cDwz9iHwM3WEnKaHbFiuveJLSznFVVW7jvHp9",
  "key10": "ULtzZt4eCJnj2Lp2Q4MJFNdCxD2n6KFrmbAnbLH2QpiXyZopPzFR5UkDi9jVkXJLYyhqWy5XPZ1KQ7aJL7kRizC",
  "key11": "5hMm4GE5dkgopbVPsqbMJgSECUMuq6xGkzJw4DheBZEyNTRrb6p4z4S6HSwU6N4ZTZA5FEoVXgQrJ2iFdPME21SL",
  "key12": "2WBkcE7VaP5e77idDm4aWwJE5CKkKAzxMW2ZaixjcjnaW18152PFDWhrx5jvCihDGNztg1N44U9KJVfdfcoCwZWb",
  "key13": "1gSFk3FwcigA42DiauwdjEaPUsp2G9ytnLBuHmyM79Sw881BRXX4kz8XsBhLiQNdx6tGUn9x32GC5mQG5vYBXjL",
  "key14": "3iSTUtteifFKHLbgW4u7xXkVXNZcAKoxWFeNpvyrjxH3h2DMT8Mic8ZkF8mjKaoc2jm6LpjMXfvyV21b9TzLxvqq",
  "key15": "4WsrjAhM9mR2Ngrc862zzcaTe6FvornrxZWzyXhi9hk9v1dVKJHVC6qCggJhBDhZzodT5vqDN5aAVxUsZndiWShQ",
  "key16": "2TDPiW4ZNetZyrKhjWvPDgbCQtCYTyphEoTu4woxeyKHC1uTASmGvdHswiLu2hyVGbctE9LGfJsgKEu9K8Sfpsg4",
  "key17": "3VzFozQH1AherCCztcwhCvcxVzwYfdRouLxqthmVsEGwxW9s5mYZ1yqvi757t7bG5QUryNTixfnZiCsAYdditkRR",
  "key18": "Hn5kY8SBSXTgsuZQtnwV4MQusufA4vB2WeWGEQPHnzARfk1dTAAsTVfXus3JA5ekCb6YjsJEe2hBSfpz1VPzieS",
  "key19": "wY194upSX8tRuWzd29Xirxf54Cocp8ewCsEMBHNBLC59AXKKmDrTRuNKctQge4A9a6KCqnk21MjnqZ8ncy7erDk",
  "key20": "4uWbj7wTox6aHnbnHCLty3j5M7MjtCMdTD3CvWgGe4LwSxjJZadwb3cwTDt8tX9Yai5bdWvSXmzP9R4gN5BHQQA6",
  "key21": "4nukUvHK6X85einFLke4S6DeHVsjbfuQCem7Yt6BJGNB9Pc6SyyqK46pWE8gXHBH8LQDV2VZWDjEmaJtP5AmS6x4",
  "key22": "3WvH64VjFRv9gZ8fpWdWGoWmWrskJ2X8QCR14RgYUhbTBGMU1Zk8vMir7F27rtUzu3JYdEfQs7Pqe6LVcGFykUUd",
  "key23": "4vFVp9jtuWHFHszzPPZcr7TK9pSeWBG12mek8yZgvFadS22w7g5eRmbNS4CYCM6fDQscXwih8FgdYkxZ5jxyDfRf",
  "key24": "dc9q1qRpEzYUfgfZiy1mwJrr6fqamNzpJqB13c6NUoNaFSakvePur9kkmWZaFTkHVaXtS73GneACCPbHiigGT7k",
  "key25": "4N8xgf2z6uYEHdXoXgUpKNJ8RX8A9WuTL8zXZ4CtEbiY5YGW1UjnkCpK5K6oCGac1oTxQd3bt2eYkzKgK4ed5bMg",
  "key26": "2Qukf1T7CwmUyBphu3XFWo3ZM4x5tRSZdKxuYpRx8QykwM8wm9FXLyfdR1XnJiVLndjS4GZtc1iy8ZYMPnhoAsPz",
  "key27": "3wokwFqobnXLDf1NEh9n8DqE32jgj4QqiV1tgGDBQ5RMfhw6tMC4YgprG2TKRf89xedENZ5X57RGE85QJr7tVNVF",
  "key28": "4eqeGZp847NN4t6JJKThWPckLKeKYPpPQ8EMPbZ4cQmfJ5UD1hdqhsBaCM1BBG27qNfdpVR23oBpwaYaRc86oe1T",
  "key29": "4vo7uvaZVduvxPoendmbnZxAXdECqDLK2vFy52eEWX1vFWpKdjuFNN9XieLJFFbd8wSZpzJVmCisR22NFhp3yGMg",
  "key30": "26FpzM3QVZGzrz8etG14igFJzz4kxnpn6yujFD22LiQtq1GJGSq1VHJDbSUWT2d8pbRXDh4gJpKtKv5zjvB6ssWv",
  "key31": "erh1MvN9nCdX7TVb8CsQ6B7urEkuZrz9mvLo7St3c574FVpDTQtDsZTxUgnHPvK5Y5gMmxkFpEyN359gFNb9XTR",
  "key32": "4h1UhZtvHF84ZE6JH3dmR1XVY4KDNjyiAVyaWG6yQWuYaGw1UFxWvdF1D35QNx6UGNdESFKd7YLuCdVwZvvpb8rq",
  "key33": "2B3B1P77729oaqe9GnVyMwZDxf8dmr2A7mdkMPAabUEDAp8VvSgsSLJnFaX37us48LapwGYi3PZFzwwzdvs3chdy",
  "key34": "2ZBTkj65fDmpETiXZLBnuh36Vqo3RWGkvVwrKaNaF76gvPeSU2ad4GqSX6Y47765wo8ZfGNweGDor1fpLhvZQcNY",
  "key35": "4YBrLVvqTMWzHiQG9unv9HLXYDiW3xite3AhAMbrzjhwZrRAfri9TVHcdWwFW585NYTwkT7x5vASJcXJdZwYjagN",
  "key36": "5MPAbWxJ2CVjRFu5BJeBrjrkVnxjXAiAdnpwgJqDkFL32Txti1orVPajEFMCRbaaCoVXoTk5hYM8h5jDob4vmjWv",
  "key37": "HSpLZoabpkaVUpTYvAvdodYXMCYAwCkeU526rP1fBQ4mz1nb6euSoowsdKV2999fzqdHBsyBYqZc2QvBSmEFZZu",
  "key38": "5hekSTLPy1NmzAgmYH6ee3woykhQMfcbRFDYfR7NPKHYkRCvMzDNXyJ46vQA765Rv93UFHpkYxeSseWsYCsGWHLB",
  "key39": "5S47WkdNDWgQw3dAGe27Z1FaJbjh5cF2Ce6hEaMbwQu45GLCagBqQ1VhWvynLP3uaz9HFHyFZ9qcKKhibSLns8qD",
  "key40": "5eRxq4nydU1A9C8NCJdn5RqkWJc57rdgfpoWFJEi2nocpGiCUdXfQUoYgsp4x1QDmuqFZWU9NdCr4KxyPEC1XmUU",
  "key41": "5MUmSZAUXt79tTYmAHrRMkMofUNf3yCqzsqjUSYrwFCXQqRiTvPLnEqMwWzwiY62FCPUidXFrp1oyqBoy8kuhmsP",
  "key42": "TiughJic9hLj3q8GqxsR1cmp19Z1J879QKnLnWhtUMZ742YjVg4NS5dx7qfGieYeuHcCAyJJjaHyGUwx1xz4SkP",
  "key43": "43pnZ88pNgWBF2CWtEJ1yzyh2uXGZT2G7dBvTkJUKXEpXtErbLKi9oCaWCTiTPrLjh7jLahFQRCosYGGwkiNMZeQ",
  "key44": "5MoxzkEWy1zrUAM1CLhcKgTEjgx7hKVVcnx5d23WyvDjCrhDo6tqxqLr5hgnZM94tqJRemn1t1RAmGWdfeEyvn9c",
  "key45": "4sMhuURiD4irZX3XtXiygVCrGzj8xpjjV6A4LhcVrQ1Kivo4Xy42U2jhRWFswiHuo9xXXgjkpZRRcTys3JvfmhDf",
  "key46": "2M3q1BKBChg5sbDoHHGbtACdGq7ehRhHQe7BDZjX7ork6GTkMCqpzMXRDrDduMdd46DeYrfobXEhhP2cyp7W1tbm",
  "key47": "5MW52T1qSTTozKXoTRbpV6YT7Brq4vLN5LhMkPiMSb9TJX85SXb2U4H6wpetGVpJ1vXsqnSpUjeu4FQ7Wbg3tALn",
  "key48": "53hgLNEnqF6oH4JojbKLCFmBkKu7F17VdunABpAeoJnpz8hkDgi5iAdDyWjiEAiVxQQMERZ7UwkpzuHP6EbuUghg"
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
