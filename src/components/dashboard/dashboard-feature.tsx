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
    "3qLpEirvMJUuDubhddTU3WiNYUpquPjSUu1zJgqedUEPco1CJ7Lq8k4nLt5oUf7yMbByCprho533DSUtMA1NR9TL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bLoMp8G7NTdnXjDRseX6g7rvH4z2A6ZrhLLxiAhhyaHaQBtxEvmupDwQSinemBWoHU8DjGdtmWgL5VscVVFDukV",
  "key1": "3nrjWuoyar2qmhppJuJaH4Y1FnaFs5bXv9XD9USBDDQNbFdfgUrhigVjEeVsbwhaH4HTm1sZ4Syg1SPMnCqsfFnM",
  "key2": "2vVN77S9znPCsLHe4D5WvpPk9CgUez1zVGiU3r98iHLjf7hFbW6n3ptJNVBbhzmK6CXn7Nj193cj8TB5T23Lp2T9",
  "key3": "rWrWh5AU54V3jbRXRxVGGMz6nhhVJRx7mNd7SULYQV1qJ4PGJBnkYA5B8PUjaMYohRvqMBba1jK1j1aRqtWB11A",
  "key4": "UXpuBDQhRdr79cvZ5uXguFFMusL64pJutEh9zY57MnsszGgywadPyJaQauxprptM2ZVWCcEbr6ZcpD2vPDp8mzg",
  "key5": "3ZFBZck4smaZ7kZPDzikYYtmkbje5KY7oFWTDYoNkPm8XiEmgQHKKiSnztry5TsunPDyBGdn6WYCAXLfjHW6AQth",
  "key6": "3abSkPrMgJZMcM3kkG3rayCQW4m3HHoC2dv1bgw3LuumHctLyY2CYANtQhhdobEpBoifrkthckjgP5NBP9oxYJaG",
  "key7": "5ChTUya5dQiJNMkLdU5FErStvpuW5nedwmTBk6DEVB39vmvTY8CScjveWVT6xe7Nzaorjf5yxFaNLcm5y32BbCqg",
  "key8": "5DUjRGSPacvPADoHKnN4f8GV4tt98rzv7dKWod2uxcboV2pHDU2QKZe9nqAZkns8TYYVPFhumeYSeKoDpPCfGQ6u",
  "key9": "4Laysf2bP5QaMbGFKBiRRFPY6o9mRP4iCib63kzvRyNd1eNUKKwCHW4ux5LmxFf5grCttrqT9eAiWMtxBfJHqRWj",
  "key10": "4e7NhScirGAqBKMyMdrswdY7mPfFcSuMxTyCtZtXpU4saYgJjsjKZT65XvA8zVbTGTFJtkTySY6QG1BiXdrPZMid",
  "key11": "5qEsZkXfdTXqCx4MsmZyCdnaByLNzixmhCe1gQ8HwFXBBuh1jmpv3k61aPbnMbDFDWNVoY2y8q1MgwkdbZGwohXU",
  "key12": "3jXpixXgvB8UYjq3nYee5yHN789FwEr2JTCiJzvvL1rMMtkA5QFmuQHDtyopAT3nci3hWqspxbaNVAkmuPDamsJo",
  "key13": "5pobLRiySgneaz5YYZv89N6Wib6TM7rQTHLZDz4eU46JN6iw7gaRHHQoHBW38KQYLXPrRYbFkL9DJqKnGjWrTmuV",
  "key14": "q4qcLGHXgxDLbTHM592AyYTgHBTETE7NNzkR7Ti8FPXEpAWonBQfNkUgRKLnoqv4LxBuoNphqUZiGaXPVJh2Qbr",
  "key15": "V3Y3gdQf8RVfm1yo5i1q9ZKFJtfY69Um1hmCzuntkUUpgGm82m1z1XGT7xUaRzmRF4PBxfpqma5E24UwRQwmjju",
  "key16": "4fBiwi3Xvr6WR8sq4by8tkoMKuqQUg7SKtN2P8wvictEdMYDHGs9rRTfhaYzACs7V8tXa2JMuittwEKycuYFb8sr",
  "key17": "iizgD4rFLdJjXR3wJgzBbU1aVn4os5btnmWF7N8jkJu1FHH3tvRz7BS1Z6Vm8J2tjnhazsjkNQvWzBNTH5EGSZ8",
  "key18": "5x1mPm4JRU1Xbyb1UAJbVNBWKoJRHRbdSms7EuuiFmpnAhYwJLo4BkfCnsZq3u8UgnnkSyaEhC5YRNc1NYPGmFVg",
  "key19": "1mfqfi9n9GsSW1vcFbxoTiDYFYP8GSek9FnQAWKjavfyr3d2WLtu5UHVLat27kYiCDiP29jadcMWg5wabDwX2JV",
  "key20": "2gA1zofrDkkkCypWqQibLDk7EWq5xWa88jsCEeN65AFeS8JwjcTUDrss8tzT2NDRy8gT22oKm4afM63CzqBtwW3M",
  "key21": "49sxgMvBM9fn3AFzajkpvfyxNR7H5L3ER136N2iyWQaTy2QcqcjWJ4Ww1eCVzHaURaRAC9xxRgipAVGDccXNkdCU",
  "key22": "2vhUZdgUUAGo3tBDRhAUjPtvPLk7XhDd5J7Gs62dDRh9MtrWhxcWc98LXaCzSfXH9vupwQ2GHKdjRJ9AsepKnn6v",
  "key23": "3eJqSmTGPeVY5Xc9kPKsTKRDQiQjXwdiZXNj5Gh4Qx5PXzyEL2UY91KfQfqcaPkXQ2CA1G2EEQwKNwPbCdj16LBU",
  "key24": "38afFx6wovP79sKaF9RRs3K9qXnNo1fawyKp4GB8dL1g12KxShEg8BGAG99if8YKAKKcA12pxAP39A5bKqDH3yNr",
  "key25": "4owVAyHNJpW3WSDLDitD5dKPoJ765dxkqG5ZSkzUnMXPxrKThfdGWYy1NxqXKT35Vvj6uhrUuTBmqX4vWAdCsAYk",
  "key26": "4wjFXTmujoWPLVgPW66RNZXZ8MXQSbos8xj7pBZm4fhvgRLv2U3nuFBGaJBSeYT8EGyLuQ5ci63WgQYfbqMU6rsq"
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
