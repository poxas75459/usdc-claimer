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
    "2LkYVMvbKWBqXuiGeeVvaaGZXBYerVy6ZBxpizVaXCLLsjFErcoawY85QKoYSxjzeJgNaTvRzUiZtnDfPdC31Soc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKsa5S8bwawjiCYHo2Z6ofi5Nyj4wpUShFXstweGYqV1FTKUcmZReCwEr4qoxaE7MVkZsQybncJA34K9TPT2gne",
  "key1": "2r2xoowk7szkWc1fJ5dApFsEDcikyXnejhXi7oe5kABKGCf22pQmzsesnwGYKyn3LvALotWGbkoMfy5EPVkZSAj7",
  "key2": "4cda1zHsBZYATa5PR8tHVx5R72gzqmpvwbE5MdZgMWcg6qZPdtk8sWhmzXv3Q44q9pXkoHnXs8ZKNND2gH41S263",
  "key3": "6791vaVSTngkdif3WVVGNT9FyfpCtJQgZCpw6Bg4X2LaYmGV3M81hqDnpDDF8MPEEC9VvU4Lmyqfy7GW2XG7k3gZ",
  "key4": "L9d3mG9dSas68RE3Y1ozdpYGWzLfJmaeVcSBN8B7Btj6LhgFqSgmHByJKnor916LeVQJZrHumrkjRwcQrG9epJE",
  "key5": "5nGJYohavV3SHWjULLpriJBCauaBZaT5dJEkYiizbA7Wn26uarFgbtRr1o2VTXWeSyox2d9aCc3CEu6LSqgi8wud",
  "key6": "4WrzNrfmY9veV7h6EFpkAtKkCa2By2SqtinEFAXjBfnHioEXD8hHyBceXfnjAo5kyWfKDW2tVE7Hv4ubSEiSZj9i",
  "key7": "27v3NZbM2LfvL2qYb8UjzHGpPcvRcW3p4s85BrLcM5HF4Qn6UjAqScmLRZdpwecCUuU1ypbouDeHfpQ5gWBFzenr",
  "key8": "3UFWkpsUszh8agsoTkPHYZ38Ckdnek2cfzfbinG3d7q11o3ncbJPUR1Qp9XVZZeuiU3Q7ZAnrZ3N3PrHXQhnPwoz",
  "key9": "3XPvCF3GgschSQZGF1GDufTyDxCqyfPWU8mP5TfPbZbtifn7MEPbLgE5tM4o8gNiMA5NdcsWmbZssSSuFKyaEv7U",
  "key10": "34GMQcPwTKY1F2MGPkmTYvWYJAMhd6U3GkAJeoCTt7qJR5dQo5pBDRaCFkdHjT3btCXUTAC5gPFF4gVPtqpj2APY",
  "key11": "m69sVHWxwPArpZY2DP3P2pGE93rYBnr7pg8RfDRMG5o9cp3pmePqwAhpC7UgKkG9FPZoMxrFwsxV86G5EfCi9dc",
  "key12": "3UHnGLBg6Q8Fnau1r2PArRv5VPLoXESzvzWdgzCU6nsGGsDQgyQR6w3USJMNt7rAw1APuGHwWRwzXmaj9wXqgS1c",
  "key13": "5EuwJUT3aAemUD48n79K1oF2aacJBg2h2LwXjagyH46z2ZM5JTqVyWVnXTaTgAnL9gVXT8eSJrKhjLEFoibiNPm6",
  "key14": "3RPQx3BZHkhTsGMheWSMwctYdD4dwnzM41WbfknxCPkLCawHWTCtQF6ZsNXsv5WrtiUhCEXzckeacm8mbPkZcbo5",
  "key15": "pqp58UGRca5bf1bq8xjh2bBXfRUXSMp32We72ttferPapk1G2QwYD71bhCa8G2CTUP3i1WUoNVpBcmKZz2DvKNB",
  "key16": "fQr8cAB9bFBQTgDh4oAMDizMVkKZNsn7Ufd7q8ZgiE6Cz9AtXULBHK1rPsHskDWYuUKxpYfTqhtWarZuUQCVxDE",
  "key17": "2ZgkL9Hs3fmZyEMzEbdk2qecLPdGBy718fRbLV5NeHdSZsUv3KUWh6a1YsgyRpy8nxvSG6F9qC1Rz7bBu6DjE6s2",
  "key18": "22Br4DeXrrCQWB2SiaPZ6fKiiydDGD3kA6e5Kaeh2LNTtMEQcZKjmLEARoNHQNQJafMHsMaMBBcTUmKhXLo8hFtv",
  "key19": "27B3y8nvForzyBng1E3VBKSW5m4UnqsMSJJEmyPeHf6gqpAwgRYq1FLTLAtca6XRhhfojgWEsDZQs6ugMJyzA3bn",
  "key20": "5QnzuJXcHBaNuFYbrWudbBAsDB13r7k287nZKDGimmh6jyJoUU4Ny42bFCHas16UfbgCV4d14tHePA4DoRMd7JrG",
  "key21": "3MnaHjYoM58bVywZL5RBVWuNAJhfWTGc12dCVMUm2e32Pa6cVvLRSAbziQgqpJd196uo94zJQtqXKREUPTD6597B",
  "key22": "5hB1AtVMFZ6CVjUZsnMt3DUQJW1tLrxENopYg8MVhXaA4hfiqqbegCRK3UMZgwVoENDjmnjrW1JKhhUQMdwqUhxY",
  "key23": "5Vg1gLevVExiDRP1LQFEPnU8ZbsVRnyZuEcynmo5xajkMPFiuvcQV4WWFhUACvFBrGpkbkhbg2rFx1CdWwPJ1F9P",
  "key24": "1cNPR9ngeAkUinGhkiZYsJdvp3VDqW7SEBdXG25FFrVuRk9sqC3AD2ymMhABryars2ayeTdfKe9ACDSNibiX3Qv",
  "key25": "2YgQ8CHQmy62ieY8hRGjhEB63n6o5v9MDFrFhxPtnnZR8FpHko2ryCFNQfn3S88adWeArjFEdsc8Me2aPvVgx9Gf",
  "key26": "3wR1vwbbn8tPbmRuNeVJkEo6Awd2t6ib7WsWxM5GV87Hifrji9cHavnT1LCciQQQcYYkUESdwNffVdrvbnMkyV8n",
  "key27": "44b4GGv39yUfHdwY6zaqE7mgUF9HBzvy8a3sLooj8BcL3Yc2TVjavnZHmjuGqybRm8NTdg96s6vuzovaKzXFEm4M",
  "key28": "2HJ1yWZ7ZDFrSFmBywHDNwByiKEZdvaLoHcY2FsP9CWv3KP1ioJY41PFNz9hvFWtSi1wi6UKACrg37Y6BTW38LCJ",
  "key29": "3u54PiYkNtGApgpKpS26TuwnB9onuhtGQMAymQcX9p6tMzJ6mrTosR83KuLRKJieMjZufNGZwmGSVovEtZiddHD5",
  "key30": "2QXXJUE4F4rHzW9RnruirLFuShXjwM1RBF3QjTZ5qDRXh5bZvYWKqVNq8uWf4zMzjNWMLasJkRW9fDbUdiEjbJ3q",
  "key31": "9Aa1QnTMLarYhfe8a1fAxZgo3R9aWjJ9cu5REGNo1bgURGwuoQ5hpAuAeNMA3eXQmWnwC1b4x5zjZbYdd75Rt2v",
  "key32": "2vc2ijrJbHN8QAdMpiEAYJ36j4a5BRWafSkUrTa5o3R4K4RpPajFpFbVYJdEkSrvARHVqmRkLhWtRf5PHvYKvMM6",
  "key33": "515X9LQtbSG5ZBnPjuLNd8EuKzT3kiBzxEZtLzUz7bGk56JcWjDxhs5NbJLyrSfjhxwjpXK88ekvBjmiUTzK2jRC",
  "key34": "4EKrwWarqqsg42PZwm6JRe3BN3tib1QwDWNtK2XYYsZ6nP6xysMKmYKZyCLKBzj8nYo9YqxVsevufbW4rPQ1U4XP"
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
