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
    "2GPYSDkZF4HPBGGCS6AmtyhXxrELH9pSyfdQdJyfgmL3JTeiyt8rLfJommoDqWnUqQDsgTkhnE1vCNrUCvooUqnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51omDqNHjCLcARDnf94SyckAbNv6ZRSeECPkWXwanyjGyqSv4c4vCNa7PH99MRXxRTkoesAGYeBu5dbvucTPTVHz",
  "key1": "MgZXjZA5KkknSLM1BhFnkA9Uc1TKVDAm6W5s5K9sYcqUjUpLxGaXEvxeutMJVeNJXpamBvTUtUXiB5E7tFL6Ttp",
  "key2": "5p5pAwfJnLxi9yWsbFkKaA9cGVscvuvzq6dgJKn92g6iasZKHMRzjbrPyE1dQUgvf3FqDJi11PngxTdSJaqbioQQ",
  "key3": "5knsFCrRAYKrFibAFEHBVKJBkR6QMejpTBu9eG8BnqyvopQHD9BiAHUqGZqZbkPV5LVf3N3QCXvqHnkJUJ2Lby4o",
  "key4": "3VAWdzVRn4zUCgNEgvtwiDYUnwGQdvN9LvpxTajKVowe6a9mWV13Q47gGPpdVkrdXhWCAtVLEzE8KhBzgHwg7kib",
  "key5": "2Ga2jcsrCDi77KJtLp5Qu4T4VeybBFLjQxx6rynsCFK6qvmtAQ3P4evtNd21GNZAeJFjAfqMFK93FEwnmmqZd1Fx",
  "key6": "4ppj9SnvckLeRC1kF1Di4xSTTMqGSwwQbPpGNqyQUGCQuGf5ZUYSix9aUsEgQgsE3sEZAxav3BrNttGfqZaLFGcR",
  "key7": "2iHmyRPrrywUfEaYzwY6EsdgwXMNwpN1REPtsfwPnZmsQEAPTVnoiUYD9o51CsteCuF4uTNwXXLZEUHMy5GphfTQ",
  "key8": "8CH5LqqtmYcT7HrgssL85hcNYTThMJR9jBPyx9ZTmQGEisuWueFXAchfCQUozxaYwo2rA84kDnFKw2wz4BQhBGK",
  "key9": "3JQEELLfEYpruTE4yRPnqzbpvzhpE3AAY5vb26hYc8zsXWkMUUinup9njtJWrmAshsXwZhuYpMFU3eqyKQs8UdG4",
  "key10": "4cyprihsamVS7Ea4VLZotRp4sJKzVGaH5omESJrBtpGdQ4HPHmnJDP9zErdmyQ2YuMThcRJLjxuwNWMhpSvb68dy",
  "key11": "24BzuEv4vZNbDkEZ8K1ZUVVG4MK17X6fK7BLvd6WV2F8E7MnubbrbAJRRbirWYAq8RGRa5YSDXb36xkrnj56HHLM",
  "key12": "m21hhzx9nAEgjh1hkAE7ywjUjATttP3psAMpKdGNQ1HPhmDxka4D2UKqMd7hHoniKbkJe5YreuuvgoFShXAS9de",
  "key13": "5GcHC1zkbLPGSQJnvR1shR6rPuRLcQyLtfQ9vFP7Fb1hJ4uT92FefiT9TX2QJfQVsUjjiDc7mbz2h9hPjEiECGwT",
  "key14": "5vQeRWavVqwjzTe7ahvgv6vfGAcTybqd9zyEuUPsQjJqpD71S1x5PDutoTKuv6Y9zqFMiea9pds9AX3tPf6wsX6p",
  "key15": "5h3jWJNmpgadJSPWsProrKY2KoCvvT19QGZjLoqaZ2An1KUciVDUnR4raQA86V3mEz7iVtTK7vNgurZh5sdi7GPR",
  "key16": "CLzgQ22eRwTwvbTxnCpn4YMpogEoQs2upM9CNkpLv66wYGWByDWYZiFcqU3TThZKAqy12enepv1crYCP7Zk1T2K",
  "key17": "HqSCidxopp9RhMncjF2zanztVYQSJAFd5GxM4e3DKvdhXRbtfEdKB6XaxpyMf5UCPVteKfcd1AgERf7VTyZ2MPx",
  "key18": "2ApRzTkDv9zqBDS9dURH4yfUhPeLgWv7rdhBpTePsainYehf8u4WqSntYJpMqAL1nBvWQvJgwoD2yW6SeQHBynJ7",
  "key19": "2JsMoTp8FgAqDivCUKH6XiVf53a97BpMtwyoT8igA6uMYNepJXPzr9vLaZfZAVQwFXEfUNPS9WcsX67BnziDL1p1",
  "key20": "3irLXSkNxNq6PhVVHJ2J4powJySkfRxofvqBbvxsZbWDW8agKH2p6G6f8cKg1jGezm3CLqAJqH81AYjvQEf7QXhb",
  "key21": "3oChL2bVwZyVc28wq7L7Lh8FHfvHjg5ve7hAeHnQeL7T1CghoEXkzfhvwz5EBzMGWzJH56PkLMHu8h2cDmeabyT7",
  "key22": "3PVFKvaHAPKaUyujpYmuiSmnnxgifaoc2GSmbiChNZcwMmRpZrKTs6THc96uDT4r9AiW7mNCpuUq6fQCu4ZumC3q",
  "key23": "27P7jaoggUjgnEysmGSefuQF77gaR1CghgAZ8E7VzBUS37sWSFMEf8pMbTjGkaGriDjUVXWLuxjTVNNwpgLEj26N",
  "key24": "4gWacZyxJbSrDtH9dsM99nvJA85wEUnNkFEgeX85fhcYdoFx9sHyoXDaY4Ho1eiK91ekmr8uaWuivCqK5hZTbDmX",
  "key25": "miJHcDUCw8TQKqN94X18Pay4XcA1mmCYChRpK2ufqp79JKasxbkFKeV5vMWvWcnPBtht1XiAtQu2dA4TDtx1bMU",
  "key26": "4RHqE8VxKLWj9SyL3jDfT5auMJb37VRVk8bVEKRZcpiEWfT8C5RjHZEo3TBfVDePU26cPain6Pd9qME4dBUr5P4A",
  "key27": "55NsneznZJm7UffUaLPf1Jd3WjJ4QEUeTKfrxdTYftdDjQmBH2DbUhCNWqrn5daDRAY7FB1SYU8nmkYJREetzJsr",
  "key28": "5BTt9XsKBHHP3ZrmSgKYZmb4EuKrNX7TqGyqUWh3CEezbM4dtKFNNmQfgfb5dJiNYVCtyUeyTTiSMgC1bCXi22K1",
  "key29": "3LDosaYPZt8aDRau3AhxExcAsXYqSsveS3dAamU1oNzv5bfrpUFDA8vhuScVTL6BDcXhE1U6pRAy58LDBGQGAcFv",
  "key30": "3b85mH682B1M1CG4pTiNrBkwqH2qbhYxAAY3H3F2kP8egTJtTrpsGhjqNPdYTSWa2pxM9gboWohBU2hTPZoS3L4z",
  "key31": "2Z2sRVWk7QmmiEX77nX2tbsEhC31Fxk719k55U7PJgFiWghqsjNxFPzVGwC5iUTPqPpeRBVLPMp4rzDESojNY1nd",
  "key32": "2BvvmqXG2ENAA5Zeq6ZESznkJzMJyEnpC88Vvbrbjh6hKpaDYW2xxsES2btFQfouF9UUmkD5bF6Hj3tGoCzj5B8u",
  "key33": "5rnLNHrzfFcb2N4F3tWMpeXBUqizRF8AnVbR1zF2APvpBUR2M5x524WDbZWTXEckXCGChLc8rrrhaYqMNzp89zmG"
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
