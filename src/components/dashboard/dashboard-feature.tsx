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
    "4uKSuzpeLGzJTfbDuRmAHFRSjSEGoRboEH5gMfDgDmYD4ZaEmCfLKa9GA1NydRJFT1yxD97TtQjF7xYJdWBPTP2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6kzCQcR29fRgfj4TY1zvyNwbMbzdZPTX1My1KDwvRjaLUYGr6me5kmTAbkSY8WeoHtK6UD1rV2wfzhnActaFsm",
  "key1": "5e17BRipshtE1EcMqQu5ZFSfGKohmQotCq9h5pWqvHTHNPPAonXKj2aMaLKpbuMhCYzRRbxRfVooAgaKfYkAw76D",
  "key2": "3MqLF8uaEhciRKaB7qDHPzWQohbbeCABRktdocjiEhFnJRhCBwiURL2diFKUuJcRcs6jrMJFjFo3BTP52mAfRFcL",
  "key3": "4A6A7ro2Fr666mJBXwnLgb8tXKreQrLDaPfCx6CWoqDju1vPeh1tdYZ2E2S7sPbhMPdUJaZbryEv2yNBKW93TFX1",
  "key4": "5HpWpSSGMmjCTopufFAn4wLwMHibomeaqBLUmo7SzAsxhxEV6G42tR8AvDLakpo7butpLYEZ5bbrbfmuLoCsGsY2",
  "key5": "67UBJt1ghyfn7EPxMMwVrvzFCPtRfaUSsfTVaCwMWugm3bBn5WT9xuzcuKyJdY4B6EjYDnjM8ozoYqb7u5SrwYix",
  "key6": "RPgcNSRS6vdEJDDtpYfNo1pHip7JgTTW3d33mKbAfZdUTHJUD56UksSXnPZDmTzoqXVYjNXEfXHMAf4QQq8JybR",
  "key7": "5bRs6aUUfJU1K7XqxazqudAxzvFDdQmbXvFEwRUUhpbt3P9tX5qmX4HS5bd5sKx4DVQrMNzSeuCY7N11RUH3tDXe",
  "key8": "3u27V2MnWt2gXBT3MTXX7fw8rQyCuY6xP9Gf7WCbNP3o2acTTQFT5nZ23gEtkCXRfvEYmM1aqQu4s4obHZBHgkt3",
  "key9": "zDL2uTDd4TNYsp8fmsedvmihzyZw7sevWSVsvrLTWmDBTQmcvgAZja1bzJ9exUBeu7GjGbuhqrCcqrumrh27wTR",
  "key10": "5m26ocwiN5okrcAbM8FdbVkkxnd5maCFsoA6yPS29GdfR1VN2dPk7jGz7fLVUy8ezbRbwxokQf6uTLqLcrDjD8Ud",
  "key11": "2dXJozpaBCWqNxCa1fu53XioW4jeBK6mVD7bjsKdukiEcyR5DHWXC2BRsKxHxGfTGQYbiRKxuv7Q1CZ8AMCRoDU7",
  "key12": "4YshFs7oEffBo4RdR6GVqeK51uM5gUUDbXmwPHLnWKEJp7aEqqTtWjc5TEtLPgYG1C26TWcVbbdXyHEg5S7cP8BB",
  "key13": "67PRK3AYkwcdgPMuHLTJ8waFieaE7PWHverraUTV1hKCt46hB4jhBbJpLrL4J2jQnukEK3xkskRfTo5dRu8AeCyr",
  "key14": "5qMNnbtpPtN6cqQrLN8Ls9gT7enBEsV1FAtGoFmFG7Rd9KrurqnT8K8RrLEGreZkAdcB6pK3TerrNpyioQowEpaa",
  "key15": "3eqAU5hTNFJNr57TadtcJco1q1sGEXVQrWV6xTmi68tU1qUrkFL3CMr4X5R3dfckg7DnVSNprWadWqwduu4M6Qry",
  "key16": "5FZ1QV6nyg5VeaeMJyZgjmZ9AUPznAp1bjsvrCJaEZ4KzXmTtttfRhxsAgAoTYv7Aw426vdMcTxDe2A1TsH5F1DN",
  "key17": "4GBVCNxYKnSuvQUc9dK1vdW5MYyPi5cw7nS6JocZg6eZYD2de8jZYHJiVcD11MqMs7iekwYkKcYoD4uto1jUz5rH",
  "key18": "3oHvRfwtnqJyJQu26QKLX4io2TXAfvvGf6eBJMSiueLu8oakg2EvWfCrwr5bBBtBYN69nKWn2RCrrh3T4iYZsoRN",
  "key19": "2d9GfBsV2ChMPRvgZDKXpQS16N6P7y2gJPJpviFgFCKMLb6ZMMtaU2V2TtYZrHjLmhy1Xt7VY9zKP5NcuPUiWwPh",
  "key20": "5R32DYQ82M54yvgtfY5KGwKr26m4VoDmBrGTLhftgPPE26WTzzVdCakPH4yp2vLntavadBtrawRpF1DNGiGPFVER",
  "key21": "25MQVmFzyiAC4viEzi8JF8GGEmY7rVKvd1BsXagAMgq2E4KjWdBb2VoTuGx3Vpos3CcA7KDgkcG56WpGKhjkbsyp",
  "key22": "23KbsPL6pVUbfbeCJ3uzd8sY6aFhx584jwQsgGY2a3TkG1DCANt3DokETR2ZcQ1SHYnpG7iLCkyHVcYW3EjihVbT",
  "key23": "4G9cwZvJBWpi6m8CHzZd8KvF14WxZ57zWxtKeDqt7oBnQmp83YgBpqjAe9DvA3UX4bJsBE4JnRdoVgGpPmHaS99",
  "key24": "5To3rxpwtXLUfZQn24JHhkBs1SZ7KzhqAQG1cFnJxFiLtz7vv2rxjGa3CkMdsCqtXHsg4NfK8zwwAkjwBdzx1gMc",
  "key25": "2RUKdnqBe183V6Hvx6R1LAzYJaxjzqiYyLuiBxhmRadgthtuCjahQw1LPSEymqjAeNpoadtaks8wbD5pkaLLLNyh"
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
