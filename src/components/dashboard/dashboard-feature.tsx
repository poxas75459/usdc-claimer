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
    "3qXh4WfdRDzhovAi1LpqvuRUjhCoTMRtEf1jH3WrqRS1nuTKzyqR2Q2tGbjRb8UW9xF9bArGimdDhcuMLtkFjmCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ler6GVksCR17C2Q3w91hjf8P3ce5RtLfJjHBSqiKPp5HdrHQc2rzNmD1RL973QyKjWWy1AEN1MGKBHY9F6uJTUA",
  "key1": "5tdzsHMqC9fFFc7Wj4hU9qwVS4inH1YcvustfMpqYNiW5HkbaNrX8LRT4vmwURVEjQSrEM7x4fmkqkKc67sfayWm",
  "key2": "5dEpoTu4GT8SrCfWGRXnYWJ4ws2ZQqSGyDq9ZW2fPW1jPdkUaxh5LrMPBEkzqJooodxLXWWqSr1D1wEjRPoVziHa",
  "key3": "3Dy5eFZYrqFruf6nree65K4wMYV4GYDYUKMmt3f1ne7hts9BtJT8EC3nedT61QaRVKJnWW45GwXRyFt3okLxyHRo",
  "key4": "3P4MDytxLhgpox69eZ2zjuWrLLEBytDcDTtCd8PyLG4YYED1wXvx1CNiCFptyfeqmnf69uB2Eng3vn5RQvWf1yFL",
  "key5": "2P8fScPVoRrnRTF72aCmtev1PAPHrbJpTA3L3DgG111ZLZCaUngMf96Wn3Tt4PYm5eAcHLhE7NZEmE1a8cTffkVj",
  "key6": "3gYrvCpUjhP83kAtMSh9vwA2eDskUxwE1FqsgC3cTV65veSdf1JxShnEBB4QwnpmSLKfhMtVoSQfeiQBhp7pdpEh",
  "key7": "5U7yRb5oWQFyKnZapVEgsfgxQp6E63zQGSh2VeV1WRbRNxnTEY7HxzBYe5zsWjqLqxmoCYPJc5jXy4t11DqNe4pn",
  "key8": "4wPdB1ATxUGxRM2EjYmjmSp6wxtCJdFXG8H9HyGpj5Stoa22HyDWLbBWjhAPZZ82kZE5DHhkVdkVzszz3vT7QK9H",
  "key9": "45oH4bKAHWsWaEk5b9RRNDPaRPhaQuFwRCPdvrTVnQzZkY3GEhjdgcDGXdr7H65s5Pv1JHZDij4brQ7CdEzfoNhF",
  "key10": "4zahWma7aALuNWgUvyvTYnEd7vZYrrdef1YzeA7yBLH9QJe5WkTBDWDsCLoUQAUUCWq8pxmcrJzZ6LvzVpzZwxRw",
  "key11": "2Yr9uoew7DresfzMMi2AEizAjQLeggxUYwWxt9kK6eCvCSEPBWB6xNjmWHMDYdP97LkuUHCrTsnUEgJnNwzT6mUh",
  "key12": "3pVLZszLMZ1AuM2cbVmVyJDZn1fZsHjvWdRTxajbkN9FMsbk6Yz7u4ZxFtfxX6yXgadA3FAAHQ8pDEGUKcbYTtJS",
  "key13": "5yhN6KM1r2WuyAjwLscuWCXgjovaF2CREot3SgfcdHwvR7EUDqRUHXq6BUh13YEyxT9XadaVHvw2uPttsPH33o7A",
  "key14": "2KTscdfva5SQ3i1CESu14aqerUXzvhsmdywVvMZB9GcDSQYyBwtKTMnoJ4iPV9ZcuKBmDcUuDR5TQoHfpL1yZm9e",
  "key15": "2xZW4T2YTSQKCEA1T16Y8bENstwABhFYXPBuwcWkRZv6SoHvGFh598SGdTFEdiqjEtkVwKgrg8UjSiG7PHRFa2JZ",
  "key16": "5VWnRKq7eFbCSCkcnJHopWnEJ6RmT9UQ1fWNTPPFbu6MDd3ArPToZBD7yWxB3ABcRikEbs6s9AnRbDRheH6Dp9ju",
  "key17": "3oPRcMWXAgAZbN2YHCGVV7icDsD6rmCqifBQySkCpVjb4s5DaoM4jHjWk4y7M2B8tCEnU4SHJzKP8B54vHYWmdu3",
  "key18": "4s4Ye7VfyKf2J7PcHJDNd74bUnEKiBKxKaFsz4rsCiVn4JaYeoiD4d2Frdx2SSYUXpfVp57AgSuhi87NqupK2p6y",
  "key19": "2ChwBC3P4tZ9psnGSwCSoyBxAynwf51MDW2aqg7gRT6sk25frajWYQoerDGqyZksSD1z5sLxYudjXqeEHbc2eYiV",
  "key20": "4Tf2vM1K3KECZ7FEbekoJUEQ1BXdw8segYoUm5va4YqaGXbUAJPADFAJ3qFnFFc9RuNcRVqUpGPiNoHGsivScc2V",
  "key21": "4RwNDHzRF13RYR19ke2B7vcyNFoJRvutyAZe4SVMUaawJrCeEzH8DiRMgwzy8mwXuK632YZsKoexwKFganWHae97",
  "key22": "58vuLhUyh5gvcFLX23wkJKg8qvcibgLe7W3MuW86FF2G8xNcNpRvn71uqxoXf4LzWaMwVKPcxYqjECqWkvTQzQgL",
  "key23": "2UMxzLdPyxbFST7VHVkqa4vHC87ZjfE1HPqT9xDzPVMxFcfVki1EW2hTV39JVrhbVscw7dQjf7f6DE8VZBBHv2KJ",
  "key24": "n6fvJ88qRNZ9BKExsmgDhVYWR6kUES5SeT818GedTtn9hu4PMviPQwQAgHajNyFCiBmcNcuQKQwg3vpRbNemPTy",
  "key25": "2gwQXReQHhKY8DQi2wi8pY5QGZZ2BhYnRVGYK5cugfsrD5ZJXKhmk4AVxbBVLYBsMYomZmS4XreCkuCunf36NFWc",
  "key26": "2Q5nzcbRve8jYAmcTiJdzthFv4W8of41fpHETmuSmhPmvZEncSBHMnCDJeTHCLHJMzyh4ytpYc2zPvBsifywGyGp",
  "key27": "5nH6HvJ7SqSRmMMdJw22ijbCB2myGmSUwQZqqRXu1iGQK3r6h6LwEwPKSNaH8tb747B2FsSFJj14n7mZLSK1aKsc",
  "key28": "5B7FAzjGMS3kibbKCgkx8imn62fPf9ZUbe1zzCeMMXcpzB4N7ATBXkbACiGUjwoJeBvmQZJiLDub5PF4XBBhGzoe",
  "key29": "5HDqaBs1uDvXpcTxi4Um5D2KdUSmaTCUsUER2xFaruc1qNd9nx6RxjZn536FGB3tDk293mhMaWNeLSZ34Co5N1JV",
  "key30": "3o1Lyx6fY5HX5frD7JGg8cXsFsC1MQwGuH74c8r7zqBaxYdjrUiCw43fXiUAf3iDNoegRdmYgoSjbVAPgdFzxP1Z",
  "key31": "4sLhsQvCB1hmy8RZpBDcD8sLjvij5Bbbjb9wsBhHhtzSKNE63hWmasQr2Rm3wec2Kjw6pV1wKvZDCLXKRnVzRyYd"
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
