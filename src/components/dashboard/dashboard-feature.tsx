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
    "4hyUbaRMWfc1gc9BSXCzHyUKH1ui1mGLGewktp7bz3bmxwYL92ixqEo8HHBbMSAZrckKqjt887oHKFuCL3GGbfLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F9Ak6znAaPpUEn2UbU24yTADKBseykrRTGSR19eCfMDcUnQEnme3YdYaFgWRaQKGuzaf9XRxV7bvpY8fiK8shHk",
  "key1": "5osvft9BpYYu2Ka8UuCBax6tRF1ZNRFv7fryqQFEUfd2mfGCTeWajrjvitpVcULowpr5BXogZ7h7Te1yq3LUDc3o",
  "key2": "43eBVLfLvbkA78qQCrX4qbzM2RkN9zNK7FoaRN6WSYDyGtLGsA6L89fmiPXraL9qf3WX6LPNeUQuqBSnZ9YtuQZn",
  "key3": "5q8QkbB2zEwPHp1yvzku3gbxdtZzhVAfKzpgr3jwR4ARTwyGB7fKhbcBFPC5egMvekqEc84GEScnqg7eptZ7R6bL",
  "key4": "3gYWEyDgVActV1f7XQiT1dDTQ12CKHaPZjdoRgwqaFNGzrsbv8dEym6BsRph5ABdPP1E8q6HgXiMAeBCktwBm3sy",
  "key5": "5Vo6kaebGQ4yco3SU8MdCZvGyNdYSkZ1kLYyYsD96auZrQw3TZCVJCZRGWW6nEr3xWWhXJRQWUjgbPXKuqRoQ8LG",
  "key6": "62DnJFNoREqYyiWLTC9JtsBHuDu1TY5SxpLqGvW9V8z6MbjoGoLLeVwfRZ2DFwH1KeK3fuusUpYZjotZcCakgb5p",
  "key7": "5fZJ3JjCnS5scFYTcNnrovWD64CgWP7Du52rexAb7diwYTaX1L3njj78dihBA9jzTjBJBbKBY8RNG4VhciR9a53t",
  "key8": "5sPFGZK9XoVgn4m5YLiD9AZPFYrLhMkguChJw3ZxdZy9mSrUe1k3vmH3dYjjw646AVpXEoQzpaFe8UXkw3VHG5yd",
  "key9": "oGPBvSVmRK5jAqBQGtuHiyVGjNv2tWzP33ibfdmAUdhLjsruEKvoVWAdet6ftMLax2BC9CkBbTFr3UTVzbEQW3w",
  "key10": "4iKpzwtzyRFRk3U95rneAKULL4HPXhpW76NUDY6D81n46hz2L8NtZb98zGqwfBDc6hEYPy6eaEDbxXx2zF6Wivgp",
  "key11": "fczhYVj6BLauWYkEUgCZbMWngWbd4SCaEH2cpxedH6uWkmjuPB1upoYaWbiDK5ay1Q1rWHVyjVzKyteUpsaunsU",
  "key12": "4v6vaFLw8UVBVskjyFD27LWamhhqdzErfhLRk5BJwn9wQHPNaNxPRjpAdYKCkWsNZLQVvSeEX144vk6fsYj5YnaH",
  "key13": "3QTvdjh48nzxweuQCAE3jrS1f77DmkcYNNi9HQQFfC7LiXwZwsn5obZ4nQouTnMh3VQxKVYdpv6bB7XWdmhrpCb",
  "key14": "438SY97Pd5LWJY3Q6Mdn8SpP4Zrej9oVDxomG4eryBrSNc2c7S1WuKn5ieX7uzecFVYoJ7JcX4xFnZPodGTtBnro",
  "key15": "22wWtvzFpEjsPetSEkt8HYrjAawS7DhqYcpCSPpTc7o3TJoJC6weHLM1sQN2j4KUzR6jNWHkNwc91Enw9cjnJPMU",
  "key16": "4ShZ4G4TZFZPwQ36n9wJF6rrcDoBcWtNVR5rDATEDpTvDdBPWTBT2L7xmEiUR3Vuhy6dNCjF3ojR4ndPjxVmcYvA",
  "key17": "4U6Ca2bSdThKnpgUrY8g8tfbqVgyJyDECpfWZzYd4ZKXRD5yF2r6J2atEeAQRH5GTZYh5B3m5pNSnmqgyinVbKTa",
  "key18": "5iThFxQC7rTj1p9QK4zb3YeTce1VuHvjHyodJ84qq73FASU53PTcZCz9DJBsSssMMaSSnQCapvdxU9px4x2WMrqB",
  "key19": "2wnaceR1puP7917kNzdHwdXzdqhdCJ9cotH4xtVHprMDDs9bDadpP42zKVvoJPmemcsdayvbStyR474xKzsvz9zq",
  "key20": "4mKzo4RVAHf9Qghs2mj2YwBuS3paXqWd5GSZykLswR2C4Xti6yjnFaENLjQNffFpLCRjQ78cnApKGRSAvJWeREDs",
  "key21": "3SvbzJDedHMzs37WXXjbATT5WHa17byorcPLqnBvFk3SMFWoTjC3xvG3f3nYC5VYcqg2KadbN41DEyFTKJCnno99",
  "key22": "2Ap7e3ziMfbFNwsMM5zAzfnNUUtWy5FsWidkc9jUiGWNj8GabV2iBAwnNaZjPEqewfbh3rii7bsxgFbRWJ3DBbVq",
  "key23": "3rJ8j7utZW5r2mBCEYJQ14BBF3Rh8f9zCWFti2xmjV1HArSq9XTyt9gdL4F1vt6FvvzQS5oobZKBkE5c9umGyePA",
  "key24": "57ZDQYvvacjE22Zr5hZgsJnDc8gcrJRaJeXXhd3jAoRoFKBL3qq8CQfYnJN3XMscpfgxQLq1hAMJAEW2NBfpcBpr",
  "key25": "59dNsW6y8vpYVQtEpwBtvPDL1zyiP7TdJq9LaWkKzDQ8UqvXQp4rcPCXwR7Vzn3xu7xmmFsTRQXm4DV4tPh3b3xb"
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
