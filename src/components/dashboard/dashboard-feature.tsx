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
    "3nBJE8gcFSNftFHLs9Se9FmMtEaAeNBwxmdFg6XevaPgEkEyjfKawpv5DCsjpPM5j4qCWR26cLvPrNaNQcGLbivf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28g9Xweiv4XJF4ZxuHZtgoGfbmVvoRJXNt57L3U4dHcvHvTtyJnqMovi6wzVbKaVeMvvEpNKJiUmCdBN2QiLUTfs",
  "key1": "4c8EskiLBakQix6NdWmToZ7eu2LK9Cez7pRzoknemUiVJfUvetKkXRPdWrv4hEMVhdp9bFMb8hmoHqFvKofuDPEC",
  "key2": "5PoGreKKzYXSwB4iwhrvqpNwwaipNUQYzpQsDxATDuZ83Gair3U9aUiambeu3irS7TZDfAHi9JcHg9i6LogvPpbf",
  "key3": "4yQwdf92JBVqBtuVehxSZSmw5tQ5EEPmTox1gMYkYAUgY71UTg7kJXc4Tv1VM97aeXP2gZkBYWbbczhgnQYPtTNc",
  "key4": "4mZ6zH18SGUYHvYvXf6BtFQYxXQoToD2vuYFVU7hNBLMJkYCjiRC7DQAZ5kegNAnaHJ2qRcBBj4k1n4DvF6Kf7Lf",
  "key5": "5UT7EZuNvbqodXrZ9EqgRCX4rjFPYKbC8EFHtyhRr9cLidfhzvXUkBigP6NwbDapK2BLShrL47ZJ5chYWUCgJbxQ",
  "key6": "3rm7qgStn6PP5c3kYdrcGrsuXzQt3AxVmr2bcpCKRp8UdGnwWsUh9SoT3A8q3H7xpBck2BCXkpREoWM9C94rZMC8",
  "key7": "2cYFpSv5ZZToqJdQ1TfAEz2nu3EVKhwc7h7CNSFRrotsHHJ3d89a6ZwHFobBmNUWzmEeNAj3FKMKmhEeDy1WdMTa",
  "key8": "2dAf3S2kBxRbyrRnBt7L79Po4B6LUkRmmVLZ1tiRFXq5JJKVbme7cZGUyXBisGhqwXq1HBC1qBEVg7Asww6u6vU8",
  "key9": "56988bwdxsrBpVGZ7bDWauVqbWwTb8n2hcsDPLVHFnqGmSAX8K241oJCd1Rj84doKy5G5oXHAwiWh6bUW15YNTfp",
  "key10": "3gnTcYpMpx1Lz1jiEKAGJ7pBaDiYExuPudHJPfwZbw993FdMwZRu9tsvWj7Qx41N25mkVxT4FqJoSUDf2TwNZHyH",
  "key11": "5tp6E4bXbakAEqmJ4nmsWxyxtoNHs7kdhKhb45Z6XEkwo3wSSmgupAGSMFdkCrFU4hhFijWNytfPVURkGpkxHMWE",
  "key12": "38LBCUW5ioXdAncvS1ZHnGNoKApLx9t2gzeLoWeEq5W7xbdXF3gKJaej4bnkes7BDvBU6YtdpA6fQ1chqi4DSyFR",
  "key13": "3bJYY64iuFoeTwKEs93TLovkLXZqafdoHq1imHhHzoKCNxEEQkhXbghSGW8CMGiVEZroMKaAZ4M3Zi5quFqi1yLq",
  "key14": "2C939RWjAAtxm35NFo5raTfFSMyyrpF5sPahnvEXVtRfLCq37tVSpSidLWnBsWxYAtZb5Z6coeSdATGuXmLnxbew",
  "key15": "3RUC3G5EKHYXfKynzybfmAEBxQZpW8oKrLnZRci8BFArh3Lny1paJDCMHco6bXU6mSubLFnjuvHhzMZevStjHrAS",
  "key16": "Ach6bzeHxh9PUNYzQN8zV848QcyxPFDA7ZrHnTk5MP1USS5k33EWNjj2BDtTh7YPRcZK5db5wdaBRt8CcuWBjog",
  "key17": "2ehndfanzoMWd9CTqrGF5kZSQ312HELALMkRYWZARmzcxex2LrbiLrX56N4TpYY5Ah6TQzpVQxYHsdqyKwL9PiMf",
  "key18": "5YWeR2EnPK7eNUcDboeP9MtdpyjGeHic5pEWS9ErAr9LC3FgsfMDHf3cAAhcNiDopTm64a5METfS9vhjbvdq2iac",
  "key19": "4vEj7QtCyFCvSstWJL35X5MDWveWE8P7cJba8s9SAC8kmmyv1PrJr9kyKhAepvHfvPCJN78PjLZk6jcRg46TatHT",
  "key20": "3BS4yMqE9kebwqrs6pjqo4W5oQqx5fnowt3S2qTXwh5VFWCY57scxUYmgTcmCuqd15fftcVM836sPP2fKaVLjtXD",
  "key21": "3oHJdhTJGBwD5gDTXXCcjZaPiFCTwkKjaByVfRDRPFR5ZQBU2Cye2RkasN1VCsDobk3jMWqh7J2vzVJ5irno8dJL",
  "key22": "2NoC4rUztbXzcLt2GcXDBisJjh3WcdrgU4EQA51XgFAEiXLf9CPQP9brjS13UugeP3jdi22TT6kponpXbEXbizQE",
  "key23": "3qNYmTu4YTqNhx6Xm4Wvg68XzdDPhQ43JCBnZreSSFXZBFUDb2AckCDgVBjTfsfMmeumHJ4Vce62kwWB4E4g2RMt",
  "key24": "2naK92bZhWtMK1e8pe7UfN6vKwoHwLWJ6cuo9Dh3FD3MX1roxXRNdat26TGgmxyhQoFWdz9ATcLZpviAkETbcsBr",
  "key25": "3fWN3M61wR8Vb6danSiSHPWyksukdUVyWvn5eKFHuG5dvGeJN3tAiBw3WvV7wGNdSES7W4aCLbiTbCA27WM6yZns",
  "key26": "65hfFYiXC63dJr3dZt3eYzFXa43bUGNk1kvM5h5i1a1PGUrHSQA5Foe7sJ8cdUyF9xFDyLS1bdeYCHND7deHzxEr",
  "key27": "xhgXwNnvYdsqMKSqKRSJXDvUaZqMP3BcpawkpEHCcTQPYG7YniPdUvtEwvAizQT88xPg1p9qWhvBtQemxZfhoa5",
  "key28": "9NHDHD7xVRFZUpaDUNEjdMpdNcFkU7X1terPkFCNFVRWjHXXFm8VS7CEYbuLN6x4VvXeciG3HwXtEwAvwgZbaPb"
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
