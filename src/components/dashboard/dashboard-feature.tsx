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
    "2dxbSSC2zuKzfMaCiLKdiHUoVGoccdWCBwvMSPgCbAd8vuqinxiojU55aHMSAbk9iiGzSufeQk6WUibAqpYM9KkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RuvNUeR6FYrE43QLEWner617Fv48md7R3KGsM2UerAoodd3T68e4iaj4brPbAjisnN3RfhU7RyzNYpXq57nbaH",
  "key1": "2BpPwebfhgi92KtWJRTBbrZW2dQNj6VDPbirTtn57Ue9TGaz22hP3TSU7caYcAk7nGPyVnKJ9YbJAeT1v6q3SqcK",
  "key2": "39xDGxjzgPQ4RMYVFmpU32Zk8zqhuy2vrqBHRaMhwYqcaeGHVZ8ModmvyxxQYn6Fa8dNDjtdJ5LkEnJrRrmriKMY",
  "key3": "2AKydhRUZzpcEWqtTgEMdQb2AEq3kG2B5hPnMjogKsp4jmWaf7BDrPCQwNatmAtBwSNY9VKxxrnZoafyaPHrE78J",
  "key4": "2Uu4HSL5Aupw1HYA2LHD278oZFwTR6avpoNZfWPcJszX7A8CjcMb9hJwx5gFTfjDDcmw9tDAXQCsNZcmZz6goiBp",
  "key5": "3FbD6v9qj3PB5PigYhapPwsF5pFZMt56Udw96u7HGhP4oyEU9he1VYFsUhXTsEym9zUuWccRZ3Wzz5q4RUWCqwEf",
  "key6": "AfxEZV8p8WC1Vm7m1ULy6oZ7DDVdLgRzvTs8EKsh57LqD9Wsuz3LsHj6bf5SFfov2PQrZNk9AGic1pFTXCgYo4d",
  "key7": "5AotfM3bDtKraAtdUT4LUWgZxqRbRd9QZcwRhPoDtctu77r7j43kpm9VN91mD5izZHQxt58mtbUs8s38iE5guo2f",
  "key8": "4wrJnYtGneZeKdQsjy1A77zNrFa65pX2w5MjbMC8Q7HjCDDdgpSoEP1Pm87cbjtxD5mBGVz4hPTKU156F5pMnW6v",
  "key9": "3DKH2GhJrPuLm55gDvi2xCLhKJ3WbzxMbUxsncAgqX4fVNqixZ3MGQFnhJ9hTpDodFuaQQ1VGYnoDA55KT9Qasm4",
  "key10": "52Q5Xq13WjaUCfkKxsyXpSfdx4WevLcLoEGuKjMR7vtUABjEn8grSGZerkLQ6XYJcrAWA5uEB8AcpiLq1TxLpGfu",
  "key11": "59uBRxTu4LAVWMiMFaW6aYJf3XFEcKNcTjLHEGSHD5xyJuXmjj6Z4H9N39hwRib4GaDGf9mteQ6wYkTjD3Ya15rB",
  "key12": "mXUB3uBFkzbZSDDs2nwxgE4qLn2KRq8PAV5PTP5hxF5Baunc6RLv6ePMNJefzovfTKMC3nHz8L2epeEdg66pmzC",
  "key13": "q9tvNpqm4bFKMWELvp1oeP9B4dZMAUg4ZWuMtnyysgU3RHXjyCQbvmUs5YjczVa4dinJLZAp4tifJwX2gpRqe7o",
  "key14": "3AXsVXp251oL1xtQH1UGWpKJoxkT1qcmSZAmf9nifeJSK1eBAeouUku6HTVLvaJZPEXwLHHkKkgr9zYsCCcrqeJd",
  "key15": "3z5TxeDSegq2F9s9bRhaBWxz8AUcdHmW1oL27fdBD1UDWb3MGTSN9Y34Fw2oxXqi52kkb1FChv9YnTrNci2pdam3",
  "key16": "3QnRMvHLA5RZipLqXehSE3EEaRLuSQa4quHFcgiYSnag25QdRDPszdRdwruWyzYbqMWZvyJ6CZie5feWxsXAKy8N",
  "key17": "5ejQGyzT9VtrtKMtR46BXQ7FAbmXteJyy9wKD3BvCW9dsuaLTFFvUqanbWzKSV1V9c6dsJ2FhHhXXYaJqmvzFE3v",
  "key18": "2Er7ts3Rc3Go74q2WekGUboTcyA9R89qvqXCR9HKHvVnNW3eZTs9yonZaZFCf7yNPrV9pRvTVw5eV4LVYbUvAY8N",
  "key19": "3Fi5sdLWdcc4uE65wBYLsTpjVhJFjCNGgtLpjQjZVdptBrTvDDAE5fHZYNDHwLSDiGuoDxfB1Fqh3L24ZnmHiQrF",
  "key20": "2sP2Fn8h5gikP5yMjYVJ1PUWUqLynCCJAk7hdDyueUDYuYc8Gvc2VKRhueiiUz3LiSvV1RjT19TdDQ3VQ18ZjrBY",
  "key21": "4FEArENrjH1tViE8f5YbYS82xa7BvxmHLaA7dpm4gfq3k7ifX99TRGt1cGoCiwxmLMAFPvrrvUum4wNpujcnYymU",
  "key22": "4EpFQ8MSDPUEpQqGdE4DVBsVdG7RmXcE1kCTmDtczf7XVtna5tpSAk9pQpuPDNFNAoiA5hoxYaywbnPTmPNGEXs9",
  "key23": "3anaQJLgum7EgTj2f5c6fAYFLvoPLD7wKEurTSCVG6f29xyQ96typVB5zkZTVWgjNRyHJwA1uYbHqoEAZ2nPxpe8",
  "key24": "5iQ9NtqUt9X5xEdwKcB5NJpF4vnNW5aRsaN1uewgx2Po2q1YmLaY84vTjhi61CtQKnDxkcEPEV2KifrkVA2fi8TE",
  "key25": "4ynJbSQbDNnDUNSr4csZ5YgUjKAYJP4Wrmq5bZStEyLM7r65GWvXqcB9yCEXUMzTWxtUf1C42GBgBGPraYuHNpyk",
  "key26": "44PDh4srjE52uLMEBe3eekvpF4HQpEGYqq5CE7S9MFBD1wvUjH1GH1EsDQt83M4GuG9yrB9kqa6TgBLF4anfVd8y",
  "key27": "2Gc6CFM5BdzaVpMuVsar3ev8xsWSPAsqjKckWSFKo17SEGjsNeczFWbUnc5oVBxgpBwQ9uwpdg1pStmtUF3vAxGT",
  "key28": "4cGRStXV374u6emqwnm2R5vGbjyosbEE8gPzoYWmC2QvG3cq97fTyhcKwPvTFnbtR38Lj8Ja1DJmPUy8dmJaFPXi",
  "key29": "3f75avNSYV7sSN8hy1UJ42tS3yQyps4NJtH3RPz7HszsS1fnFT3Gs19vqJS3hJ8oGTy8Y1DRotybK32hysBFj3BH",
  "key30": "2tDrYHfmuQpemwSYD4eTJeoQSnXMCQJrPVE6JKTyyKnQXAf92pvzRxiriULjpNg34qtZXYgM5yk2Q9eHMEM4Amqo",
  "key31": "AC3anK4F9cArgh2RgiG6vTXycGE24r7j5S8kuSwJUucbKy66UJk1bKbaeUiAfCMw25urHEgM2m4KvmFmsEhL2VE",
  "key32": "2TsHhrr4F5GgDKK54qrm8MPZR8dirz1HRoqyRdWyY6gZR7jhbVMhbQt6BQcT7Xomge3VZnA6dTC8E1HiWhRfhNSq",
  "key33": "2gZdZ9MZ5FWzDw8YLk6DdK55J3FcdcHMpVreCKLgHvcsA1jzrCCvFgJpsQusnCjpo6zKDTzhTPewbpTmMqGtMkuy",
  "key34": "jjKGHq4QoKrzUq46nvqjSA2vEnzNnC1NTiBcLART8NNXQN7FbjSJHM7wbWCD9puta9asxTHwhJbULor6ReVtapE",
  "key35": "2gWLkzPBevTg778fqBuvp3UxbHe3mq1xeGry8QaB2HvK35DvLWGTgKyoiRuMbZ4nzPHLbZALqGa4HFnjEzHUjRdJ",
  "key36": "47HYYiris9bP2AEc7CbRHpKTcZ4ofjP19GEJPBXRzcDjCrsHjKkhy6J8ZHdqMbrfnTHr1QuX31hazeZcgAbQzSc8",
  "key37": "2AHQbQtsMFr7rs3LNcGvSeHAQE4XZgmF8bND5GCMhe3RnvkEbHu3D9fPCmCZJGfkG7QhY4v86Rxi36m95PzWWauf",
  "key38": "2LYhH85qihXXH7umQWetyhmVvv1sKG4ACdcLXWZNBkRfvGRzj9sNkiV2xEe3KcikAB2QAxCF86wRshKdkxaoFSHM",
  "key39": "fhWnSDQ5PKHqtSJoRB5T62EK3dsq15Z9AwBs3jfvCEL7vPndEw1edjmyhBdihSyMshFa8q8AE92jjatQ8ZzJQ8X"
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
