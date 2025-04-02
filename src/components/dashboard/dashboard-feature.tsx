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
    "62GtCdLR1k94gVQt5g5NJbaPGWjzbiiqKehjQWtjTUMJisaX5KD54XtLmy4Fs43eTQy4jnfvv1JUP2AXrbThYZZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rxr1FaZAxerGaYG4ZfVeLeQg9gdhp2bHDQuBTNaXTtHj2wCvKrW6juAbestasYM7Ax3QDkjBkJ46jCyzdWvcUrL",
  "key1": "497cbLsbvweKKmwgziapFj9hVg1FLGy13Kp2SkGRZmHMx8TMo5mT3UShg9j17L9nQG4muKs5H66yRpBHfWwkxkTB",
  "key2": "59R9TAx7GYbDnjXdcDcQNaP9JtGvrMFNyJgJ5228B7zarBSrrTJPcS175vd5fqKMCVzBTNWhEesTtA41FqRD6LVx",
  "key3": "2pJhDx5EytiuN5Wv8x4DFVd9mAdqVz2Q65zQzjz56puajnyS4tSnzpvNgyodbWMPgmSfzfGXvUM7TbahB7uikeEA",
  "key4": "4fedsvKJYHEriRZSuwPJ2QkmCwginG9XM2FmuvSLUEbYmKbDjEWcU4NNUhQSV8JP4ZyAx7rQoznkZeWXJytRGAfD",
  "key5": "Bd3GEKrKAhLeHpfUhHwoofPg1oCMHK3p8ijYQoJrc8UXdu2BtoE47TStKaqzUGCX85eMnDhWcvAvJCrb4yTaWgP",
  "key6": "zbsZ2niiXuqK1fToHWoeHvqE13PGpSnGvp6Mt7WRpvaXVN85vCuF1UhVzXG5SKcDh7wFszWkgNmFTx2ffL9whZF",
  "key7": "2FWtWycoc6XN9L11ZJLQ5EScw9N13x6vhe4b3bNyc7Durghuc6R3UhqGEVaEfP3YsKHPMRzh5QbS8iZmn4zczfuW",
  "key8": "51WtoQw9NGLbZVdDP1A9NcJ8fHAAxzYcRffnBq6FxfzrTUuj7fXq8wRmDHPdz8WfQeH9VWBdFncyXzSFWHmCcmcm",
  "key9": "2fetdJTVRonEwQcqWEt9nWfxy2kyagcxLG95jU3JdQomcxJqf7tj6xWSodE4kyT2eYmi1bud5y6f1WDY2kFegq3o",
  "key10": "5dzKwcZMWA4SyUkJSc9JGHF8UkDWMmB1baUxZodqFvrMMsy6Tb2n1DvShEsRNaj5uBogVBFZU4fFJhGExt1LwTuf",
  "key11": "eyouWhag9Uyai9woXsrqXEWQFXn7zvLm2bwCgyCyHsieweDJC6kG2xnLbV4sDh9fQX5GQ7mW7YXaBfhqg8MJDER",
  "key12": "Kzp1A3gex1wTjgfeaGSk6ycN9hNgyxWcMawmhonpDPE5syGfAVkK2u1Yat7U815WWRxECvrC514o8opwJck7AaW",
  "key13": "3yV82KN5VHtpyLjoFW77VvrgSAw8c5FH6nzPPtwuMsUpLsDhAUvRgwyNXfGZesAeSepyFnp7CsubdqCpLGJribFX",
  "key14": "2GTvaZZeLrH7V7ZkFoYzjN4gevNcN3bAYaUuAyuZ9yzmSJvyb6AgL16CBXSfAJK5kbR27XJW4MfjiKSraciJBM95",
  "key15": "4Ca9j5dtYEFmCJatbKf3Kryf47367DAHY3NPzXca6zvaNJqwrsojRHLGg62ohUznb3eGQKJ945KQZmAeLHNoGN5b",
  "key16": "3poKFg66TDqW9LVX8wDAjQ3mxXAhdoDZUA1bVaSbbmxDkvGVLYJqvCsfq3DHdCcAz6KRJZaRG4UrPGvDvE8XRBkb",
  "key17": "2iJsUDSakTLZpRqboiDAWBWpH14oBeGkRW41mHgs8rBqkyxHqMLtvZMnXxV7MumQ9dmte9pyVJskxFvGqFd5SJzu",
  "key18": "2Z65XTeorDwrAvjVVtrZsaJq8npXzRdBaUL3mhMGKMQM5rxpdiMac7KWGyViLbd849i8PJqpEyCQh99yS8YBKqHo",
  "key19": "2TGoEiN5LV9JxjVYFzQ9iTFKLuhr4xQoGVea6kfDaFcZzd5q1qv1eFHmWBmznYozmd6qeQJh8o49Fqu4gShXxa26",
  "key20": "2Z9S9v99H7bZY6uCdtmCV93kZZtEtXP8LBCCYZ6nWRoHZMEAfbyyGh7Vqi4G6QMiRSVnwKH5o5J6pGRvpDMvzKc2",
  "key21": "4kKQ8zSqxqUBjxR7F8nexdMCYkfs4Qg7UPCNKHSePSyzKgPNHF5ioASihirJXDoq5DzYbZci4eEgeHDtqemMx6ET",
  "key22": "5seZG5boJ4uYRjS5daQfVyiSu91kjMYPaxyWU3vv6hLNp35uQyTuN1Ej3b4RHzCVvZ18MmE6bxLi7pRtADEKP9gf",
  "key23": "5cF1nNQ6dBqnRXDvadqHXxMTTo8HRydJiS4dohXyCG885fXEPJqZaYYsXRzkr2g6LRz2HT3n3YppvMYQL2yuXjoK",
  "key24": "51E7CkkJresEhaAh9ttGHpuJwiQ9FMca9FB4Pfq7my4rVD4UH4RGCMoXQSE1fUGXGRfaQAPVnZEhaX4pATeKmuRi"
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
