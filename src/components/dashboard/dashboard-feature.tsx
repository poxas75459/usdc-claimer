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
    "4KLwwvcC93bqugWsQuBCtELQSDkWkEH9zFv3mkuVwqHvsnTRF9YtJgLMCYX5aAgL8bnGcqrjNz4Bnzqn8AEGFUb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62aoX7LhN5YbCjCoPeCMHKK4LUDVGG4VLRZra59jrdDx5TnT7qKXtZbVFCR6Mi6DT28iWKdT3PH426d2FmYKtg75",
  "key1": "22tg4oXS4pKQAd72xUrqWKPuMU8XcYRwGPQVLj6WMWxxiZZNX9YM8JbDgTyYfwsNtxSoRUePQnV1JPHDW2XkV8ua",
  "key2": "4SKAb1S4mckncN3SokSwPmy7UuYo9PE3mXW9UZ6jK5RFU7wR73QEVc5B7EpvmeYfQQtrhfD9pHQhrxN1QYEVDLiT",
  "key3": "3pyEgaURNLbnXobDbQCxYhbgPAuEsY5q3Vp1x5UoHt6QdwMYWeJjtVkUQVaD9ZSZMDzVmu7EkHJDnxX6JKVsuswB",
  "key4": "5F3o1Q4Tkiava66xUi2PDxPm7ZCuDsbbU7unuzd2tRbhtZAYBkoXSoMk8LkYYXTG2reTvCRWWSXq4CYKir3eY9da",
  "key5": "644F1srZuChnAUDZZ6C7CtE9cKL7qjzVYfsuWaYWd7uQs7Uc1T13MLWL7ZEAUGUJhBvaMfie3NiFagG5DvMEBd4j",
  "key6": "2VPgbzGa5oCLcHPPTUogtmWuEnnUjA2XxQaRf7sHn8uRzKiD4JygTSum9bUUCkVv92fJSRrRcepf5eMLQVX8kK3p",
  "key7": "4QuUuBtHu2xMPQwn8J2eFoNF8Qouhjueu69SQMJa6yLRGCdnixt7XBmC4EnAFwbpXGw4ZyiCwVG5zGcMRZXtVXyb",
  "key8": "363JWLvSbvPSnntnmxmXKqnJkwDTmbmNbjVPVvSAo2xUH3577VHLet6J94pHqFJg5BDugT1DztiTY1ogJMM66Ks8",
  "key9": "3udzkw1D2U7LyMRWo8yvbzrRNYYnH3Ch1UTomUBMBnEBsVLKHm6PkvjjicF3n1BZ3vQ5ZAnRL6cHivsNbM87HbHJ",
  "key10": "21Z7u5kF2A7EjcUtKPL1WHvDbmFfQAAUKTS8ebdzsuGsNhFaMzzLPq3ALoMvfs4M3tC9qGN3EguJaUQDkaoTx3mT",
  "key11": "cVpA4azwVzkMyhm3xzv5MuzvDyHxtjv68Uf2JLS15k2CWjMVteCK2i5v4L8dtMQKv1zSAQTqFoBdzZGM1TiY6bq",
  "key12": "2oP1MdPAHPUi4fCVEwfWVRD4miNbXNGAoyic9z9NaMUebicUSDJjXXHHVVzwB6b86rPum9st1XWiFhzfJA4Mpae1",
  "key13": "4XVWdcAF9LCWAdc4FzZYgRGpDzZTe5pwfteg7PzJkC2ALpVe9qFdxi27steriKQr7PfwLxeohUGiDs5HhfuF1mxH",
  "key14": "59y4KcwgXyWZeupqBLhCNKoyghV1GCiXmPCFWmxmjkTDn9GTVHAcs9wxvj1fz87xKTZoP2wjq7ukCwvNeQYuCpxm",
  "key15": "xKVJHwajFkZ4wrTr5wRq8V8s4KEehCKK4q358LiryJiseSAzZpHngBJK31R7ytAayA2zG8pjLZ25utgoW5ej4RD",
  "key16": "5gdYNj5RTDt3b9JMY7kCSALTqKkeq3vnW2oUJv2y6SEXXsMWKRwqUXYcmswHKmcD9mKA5fLm9oTB7ozfF2HnVAmp",
  "key17": "Q6uocraRvJNZa1KoZL3D5DpPeA5kRC75fxgTHWyj4qxf41MLeAyaHp37GKsCc8GS6BsvBTiYfMBwCAWi9nrstKm",
  "key18": "5JmnnvsYeoA2iRLxuGJMD5FrDmzVhjdqUSKzM75ad4LKA4n9Hdyhf1GMz2QsHQYVroFVXzMyUkk3bLxbBWdRBaeE",
  "key19": "3Hf4yoKh1PkmmHmAU7MDpfyjbouCeF3dxvfrUcUnrvMZsToe2QUnMyUkPh34TiQdEMWVooL36KKNBmvmVAypxCi9",
  "key20": "5FAJ2C172ETH9HPJ32EsneNLuDAwJYc9hAExL4h3fQEtsfRh9nYt4RTKrGMSkhJdH1fE4asrcK997K4KSh8JJf7s",
  "key21": "2Qq2Q5EpDzVhPxaBZ35tWztJuFuGKhthSYDLY3HeFZ7J3niU4nkvQUqn7bYNCf5f4stJJb1N83hCbXTX2spZo7FJ",
  "key22": "5o7joUYGrhJLbHq2o9qtA8urSbinDnVjMg1jsaez5QACmS5SAX9aM9dX6eA5EtnEghmXnxNg9sDCALz1oEjUcVZC",
  "key23": "3QvWfbLjjJzHocAJH4fa8pHatBXT9c21zZzyw3hmYR4TN915rUozE4xUFN38wkm1MTkXexSdsfRUWs78KVKjcAyk",
  "key24": "3uZhKcsfYriyfRN4PZi8WHk5wxBAjtBe6dqZUToCvKHs4PeHunnb4wEmzB4tPH6ANS4e87tWM47SFUKjAztzhxGV",
  "key25": "3FTQyrNA6dAf6YnvidRqJubucE6iLxBpShk5yH4LDBhhHtZtcnYfwjEt92oT9WaFXVELqUpWVnbqGDPfwfmoaJ4E",
  "key26": "2DGUYVtrJT48sZ2UJkSMhPJciUGzDpvZXUbUCHcb6k2CjzNzhZS1Nv13gB1196U4UdBMFZghVy7y6ouGkmiNY8Vj",
  "key27": "2kRuAuXeNV4SwzBaC8tcZqucyxqhepwc41WUhsSvMGvZbB8ptoDAwtrZaYE56zTa2VcF7FXrT5XefHDCeXq5cQx"
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
