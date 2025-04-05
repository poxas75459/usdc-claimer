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
    "5XJgyQrLbwCU9kd5Wy7aMFk3rQLL4fqaCQusfK1nozdUSAHaWYiTnznTkkHet2P1XdkoaSw9SMnQ43WktiJgJ6E2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uhWtJE7Bm8F6U9PNG34YdMNkWmbcPQomwyC2MHB3Yse9sEfcKjt2hraAqtGSvAFAfLXbjvRvQEHEnTRA89uYdMC",
  "key1": "4b5LgLKp3VqJcvu3658Ny7Y9oz9n7TrHXx9NSQuzJcxKRyAQUCFis3phb35NWMQ97n3anzcrEs3VQ2pFpTxTnrFj",
  "key2": "3vpYkkeSiCZsGL4AhxA1tbZ8KaB1J3aJrzqg7TjeucksMiryxPWG5TkCXaQ6jTmC3QgdM6Vjamk4gE1QQDcq3ibf",
  "key3": "4ai1YBiBAhM8NYJHoFM7G9Ungxfw2E72fx7vLus1an4Xmhw85JEyrZQj71GnpcKXkeXSLpx2DeCPpCfGMENdnkqK",
  "key4": "4jdTs9c45NGHjV76sCAcX7fFkM2jdM13Hg8x4bu5u9TNYECatkyNUMUbYahpxKZyswUtHSXXRQWXCzTD29Teyy7F",
  "key5": "2qsXQBbjDW3Jvnj82eP2CcCDZboBCApT8eD5ZfhaXBvoaEgjjRQGD7pMzKCjhyK6y1grzPTomsBLwLi21SJkyZSW",
  "key6": "8bEk3hp2R9cMf3794CsvsCGXc94BUtJGQ2yNrdgLyQKs9t8hzU8feXk2EZbKrjamRoiyZBiaX8SZnNbTDZNWLQw",
  "key7": "koD9nzFt1vgVeZNSKQ5q3PqwPf9j2Jf1GHGrGZmwPSQUpxghkW6okM9pjfPmdbb2VimfnrjeDRMx23QPSuK8gtW",
  "key8": "64M5BVNLX3pQRZTAQMSTy8WBH94bTgwY7hw1aX3pVkCrRV6BskxvhBuLncYxqp3ifDzxo743iYKiatez5ZWfZxgu",
  "key9": "53SJf1tUCgdZ5iFYYTHPvCntLcywUaDjUfAXC3mXKxtpUtfuSSG4qKj1ydMKuSVGfMXvZhf5bs2rEyAnLZR2KjjS",
  "key10": "4Y7LWpngCHEvyXYJLBrRZUYCRdpfpURd97pRot5d9VK2SjvUZKzTU6rcoLVkvscMs2fHRvDebaBSRcCZmUb45i67",
  "key11": "56TWEqpRpWHKTu1p8R59hbHGJXnJt3mmJiGbXCAi9xj9gGSu2W1CZBoGUdSVCBkoK6jsvdqVj6ayoGQ4zm1a3bUe",
  "key12": "3cjvAk1uYgp7PFNvTGmAbDjzFofjM34cqipw3uyNAczKoDhcQ5d6aVXdSLMVVxQio7Uxzc72DHY2vybDD14xDqjq",
  "key13": "3RPh9CRYRrFLbm4EotDKUknG6kUJHaSwoS2MUg544hDYbSyMm9EEYMqdzrH4Aomk94wbGWVpTNwN4ubq5KBFu9Nb",
  "key14": "56h86fNoVNiq3L7z8tqVw7M1J4hb4rUoERRrXthTFQSWcfLa3FcbkKrCCq2nNB653pyXufTGxiiw1cuek6TMDimx",
  "key15": "3q9dCDhE6E7gCzVNVPUfXsYvoifPv1quHGDsJnb5xaqqfXsnfhPVw4afvyt5YL8NY3Vs1Nx8ccdLHBqMnbcdeRGs",
  "key16": "QachuS1CqLNb5mWyVJXZaF1NGQoLBYW9voeqnQDUwBMsTZRcAQfJyceG1RaJuV7uM2CronYnBujvmQL33Xk8VGL",
  "key17": "YdZfWD2CWJXajxMrEmjUDzo26GzHyWKpJjJoaz5WkS5xh6Y8CUd4wGFBDkoQuSWDvcHF9T3q9vv4hF64tHDWby3",
  "key18": "3bQQ7qgXab8sbyNpCgA3sYn7iYZTLpyzctXFFgZYhzpdWVB6857UKg6GnCFDqZ4EPng2SfSFbod8Wq2pqPRieisH",
  "key19": "iX7kB4RDrmPUJsaezexu5Dx8D745mQBQoj5Gs6jM6ezh9H4zBXBVMhsPkLRrwE5ccGZM27rsXpsUB9WJr2Y4Jau",
  "key20": "2QyaEKC6PYpet8sbuoXKcWMHTjjHURt2ekPKDrzEfAf6qFm4bnWkwSqTTwYHZPwy1ZsY2qfcKvvZ131mZNd2s9yw",
  "key21": "2vXUxnDwvbDy5RouqwgV2t5zSptiMFRURZ3MNFvfMydRtamxhzyhYBQrm9UyfqofjazzLziviioi1LQm3Qeh6CqV",
  "key22": "5fs6ft4nZTWvW2Z9nLF2S7DwyTEV1PxnXRqGXmX3exRMMsbsvUYHeMV25dVmxW9SW5QUzVorhu2jfRHxHXt99wZ2",
  "key23": "5MoQov9q5EKLF3SXWMNuSubQ9N8A8HKJfU3nWtWpNCbtN4MGc75GMFXvD7wA5fiQhcqpws6LqZFLpdiQtVujRLtm",
  "key24": "53LzvrAufN61nmBx6JXZTqxp45csfu57EJjhkNcXfkRggozbhxAvxuTqihq4xmKtNfw2gatQe55wPhYfcnURmJfG",
  "key25": "3VUGeqE6o2TBPKt9Nzyg85AUxK8VjDK3teXFYk1yaaBhP4jDySxBrC6MSXRuhp6nsTHef8Mhhf91tVs46vwzSwaE",
  "key26": "Ywq8wwVTPJWPGoieyirRGxH7T23MbEsoh6YTNCo3pSaUMQjoFNFkuP9DE5eA8Y4R1ykonigUF1PQCMEFpgKTLf2",
  "key27": "52YPehb8xme3vXNf4h2sUos5r4xTY463dek77KBs2c1XXGUPx91KXZCwNkG794VK2kYHSXxXr3JCNkuuxRWq5R2W",
  "key28": "2x2jjgvxffLDhxCdQGiqhSfR4Pc5bhyQnpVbtDbdobDQVD4QK3CHKbekFp3eq8ymR6ohUn7XUZy1r6xTdeksnewq"
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
