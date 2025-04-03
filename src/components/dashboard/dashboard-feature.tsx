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
    "2iKijQPJHNkutnZSwyXAzfwcWA96uZ3VbqGJEfcnSFu1CLPn4KS3GwtnVczA2JvMP1dscJM4XNzvRUHLcgjcEVkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NottE3Cps5Dhy1f9KEsDKyvogR9LzD5k7ecqWKEkve6wkPw5Yb1v4L4xbdfL9ZAV7zNLTEaPdt9ng1PSof5K7WW",
  "key1": "5EsQUYkvxWxrsXnaAg4Rgay5jTiWP91sodyQtnf39WH8qS3ySrUMkRy24NDMXmo15CyjKefcigfYH4xww28zYhc9",
  "key2": "3cCgqdz9K19nEyBJ6csz4mixVbCt6C4mKx1ufBULcEMisa3VtqL8GK9DLBCit9Tcw44zAEUpq5S8PtK7ULRXGdh2",
  "key3": "1ts3U48skFUiEPjymLa3AACQStQnghjK96yRkPLSPPBrdLpzBZXa4PvYExDTWFuBVnPxNvxeaNnSDuEo22mrrBT",
  "key4": "5qhWa6D47zdQznkzuBNAJENoXqwDGR37KHHFZj1XD9h1jfcDtr3RmyaBton3ZvCnfDciZJHVfo6yFJdmgdZ5hJQK",
  "key5": "4ge34dayW9BfRYDoeWNeN2j8T5gVsjU9HKwggtndHLRUStiKdxsYtYLBkTDzbAiL91JpP3XLmU2nEYX9iBsEeeV9",
  "key6": "4tFVkCvGwoTMDbBUCdKMcf6vVPapc2PLsEMMS2nifB9YK9hgRBexoZgaewYToNatRuqmHWhyjVGMa11aTJzcZ9Ud",
  "key7": "36JHTMftTGE38afhP91MLgsbAcoXmRv8JiUMshPZKs54UaRECCYZ4fPd3QNuCLFMS2z95d6SLGmuSkFFCZ1nT5Qf",
  "key8": "2PCpERnLfS69r54s5j18yf3tv9cFzYUJzrH4GnDxhmTFEM8gCXEkrEYgZQFVFvxMDz8CLiKT6Vs5QFNyuepRQH4n",
  "key9": "5jK93d5Nv4FU4dnaKjxoYyCm7kp9hz1nqSnPtxjorgLeLCzJG6twxrMk2z5Lgvtk2w6C1nWENPWZHPqDvmf4U9VE",
  "key10": "3oJcHhQrPvbV6naCKMztW6CT2Y1scTimDHdShp19cGBtDhJ3LvWQ5k8mch5xyKWfnui17NmpcE6Uuo2rdNzRX3XW",
  "key11": "4bi8T3Sak2Wc1Qzyoncqjie9Dy8YmEC72yf2cDEoSrxWExiPQqgYGNLSDratqD88fts8wRXNTQF5fYvHWayBWduB",
  "key12": "34xJhzVA5r3KeqFM4EUNe32wjzxxrtSXXvWhKfxX1sDGvgtNTP2YApVp4UYSv1kr8RqYJDiLW9QYPdr8XAK7ZyBE",
  "key13": "5Z54y4hqkbiwzUJSB9uczBoaFTDd5mV61qqWXCrbsc9AMRpXxPQTyDAr4RY6nWqgmyKtHTua2rwon1crPYYvCeyW",
  "key14": "4RoUCoqN7oKetMX2UDBmAJEJWkk1S5K4DaKUSmh4gGLXJPFdz1QFjqGxNb8xY814bsJiAW4id6RV1NnGfkrKGPE2",
  "key15": "3pXXZyTw5CXetkVjsWTBWPqYeEeZtekg4eykDBMdBGK963havgVKbnxMYYnQHFADzF892tLjCkAxBTwGeszrg6Di",
  "key16": "2gejcm7CMFDi3ADcASzvsb5V9F5azMNGDEKHoFhcHv1EfRD2Vj9bu6rxTnfFHUSFrzjQEtAaNb2gviAEjvaGiDpX",
  "key17": "5WKRS5kTKMczp2e6mohq5fLkTA8TFPyZWEHwCiqSg6Q7kHF7cCCV6eRWLynabiMskwVm8hsMTsVUGtu5RzWLn4n",
  "key18": "3VzP8RCoYWMwYWDaGhRhRN2BsLESK7AUxmvX6Xz5K1MTaeDioa4hp3B5gre3cjEh6Wr53vCtrBub3r1Je6VhGzkw",
  "key19": "5HD93cMjW1R6xXppeKMcojC9Q1YPRnbDtg1G95TvriXgNgkNqBAqbGavK2BwWj6a3QJJy3HTer3swQPRLcUnkmyH",
  "key20": "gAAMWe5FW46RHUiozNCoWp2BxZYeQ5wtHUiqhRhirpAkzk6sk76evbP4JoiHZrmFZyAQYSJLaq659nagd35r9RL",
  "key21": "5x5FXnpfXeeFVcnt61PyAJ2KiGBG3KuuM5EkcEt3daFci3WNxP7WDA9md7tN3aHjRaiKUwthq8nHj8uysdUu5KG4",
  "key22": "3BWzorDaLNyp7VQkw6RHRiDz54ZuNAGmhPUktQGikKLjEgFwkqxp7ye1Vfw8jtGxUcwdYobqBn2Wk3Rg8W3oNw39",
  "key23": "4XHwemMLgJD1fH6q9gdyhBVQhqjnEmeFmwTJUE7o85PMcJt32b1swgP88ScTLjR51RL328zin1TsS6QepZUhbsXQ",
  "key24": "hCs12dzTNggVoVzv38iPJH12xzBrGaX1RtYExgjyhfXP2Q2WnzXuBrYWPZCmNZ9EXpstKcbGBPY72QfTqqxkY3q",
  "key25": "QcsZSvi1MmB8G5ubUmYkphFjFKnart5uNiT6uegTfEsH2JacY9isXJx2UbjYZHEd1eVri9KifBKEwTHE7bpSyvQ",
  "key26": "5r28DapGQcKyX2UNLxdYnbVnnqreF4K2nLBpbjh6B2S8h4p28JQwqoKk3DaXXoccsih257keBGpjxNm9zbmPQ3XH",
  "key27": "5aSqEkpMUwnKx9rubqmVEBtbF7uZ733MLwAte4QxhzhDPPDVvrVp8JbdcSiZuH5T26kxgf21b2LNDQryrLxdbkCd",
  "key28": "8fxQtrsSZ2UCG35ay3539aiBeabXhfyey62gpiVsYutS2vbyV6MvSjSEKF2V7kjjWYgE74w984bXXQZpoJw3d7P",
  "key29": "5rxE3xsm1RrETh24DRGq65JKewYJMcaTbg9X5y71wKwWhCZeG1mXpgt7sq4Jro8XuZXYmY7AYxQWrDaRXBk3t7rJ",
  "key30": "23hyq4RMTBbZo9iABVmGmXrQCvNpS6hraqKohZGjKxMMXsf29V8JyoCHzeKbPpTa4CbdAndAW9p74oGEtnQpUDFr",
  "key31": "2MQCazZSMQ63PKXxs3mB17TyA1cZrUZ2zPj3RRVViK6BSiAgpxUWDpxTwYZDF9gg6UDLfuqJ7sMBUjjXgVPQMRnV",
  "key32": "5xivX3ruiwDBFZDubQH8rnez5jcfV3ToGpNySJioLuaghbMr1rm1SDEroD39GtMcuRAcHGS7Kk7q3N98CkfXqjay",
  "key33": "np6Xpkc7esbrT17He6yyZTkQiVx2wmCeeqvZLqqgWPjhs6ysGA19V2vpuDPdsEPmhkxcWkYRrAAFmcgUco4cSoP"
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
