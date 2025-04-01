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
    "26KWN2gnV4jQBjCZN2tiQyi3atQ7sQdGDepkHY2Kk3xTDNF4oWWXVb94kX5f8Z9jLyJYzeEy1ZrGns4ibNjbRngU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PGwR46VBdodnhWLUMLuzEREakKuyJfJ28kjTMD7geiCLPbXcufGstvh5dj3Pp2AHjBUYibkfbJTHGtxCiE7RQG",
  "key1": "22nTCu7d8FKh27DVGbRVJWT4R7vhXibZPS9aFxsFqtDifUA4EH4PeegZgefCFmydNkdfLDEg6CRAkH4grSD1zFtK",
  "key2": "2GAAWpo9nJadReJRFuMVmxsPHZxgobhFurBmZhqCTxQpGhJcJsa99pRvmjNzYoJ5oDdbyXRZyq8eB9AdWSuzGYE6",
  "key3": "44iYtpWKYoTGCsz9pTTEhbRXGZEzUybMbuN8XEyUCM5UJqzAea75NfUT6M9yGt6s5q2wZjw22LAL1VLJpKNQAxYn",
  "key4": "vAsJxC6nLQ5MvmN5bK7AGSD3wmKbfvdsNgWLDS9Wr9pBe3txW83dZxZxTQZbXSPrfAdv2VKQFzBMfwVuZGXybzK",
  "key5": "3zGi3a6qemEe6EGppuiHM66b8CEDehAfCdfmEZtoqtd7LhTNHzxujAD314M7Trgsx3uYPkexfqLVPB1bxNG5cKbm",
  "key6": "2DSBSHPwDTrmcvrjjwAKV9wdt4EM1HMxvSibQLEmiWMhYarHBPK9shSrSjXqqmEKDfxxDGWnuzNeRT662XiduQaV",
  "key7": "33QroVsy2JCCLxvaHj75EhZFqfGup6BrXwhaexiXBfmQAgpMFzu32TShxarsyyFYTrq27sg3cJbrxMcLjQjBXBs",
  "key8": "3Miz87DfZiqwbx5Q2aFEzcw9dfqQx7CtTCbDEad43KySGs8cVJhgHSp69SBGaemq4iCZwgmKtuWr2F6cipRDoxjs",
  "key9": "rhkL755n8BjZshZqJSk9x39jY2aELqfBiNjXhRQmq9S8a9QbzHDx4RDqAQEpbeiG3m9DwqmCe1B5ZVdUByZw8Na",
  "key10": "5V3hEovVF3YTGnowcNRXm9HHrAgF17nUknb4EDJCPpwd2f1PBF35BjEvgFp8h7PfNjG84G7JMVbYYMi2YKPJRZ1D",
  "key11": "5jaM2MKnm36AjgXxybmzAq1jdVLDtMpBEu4T4ZHKdLGzVGd8QBmX7441BLWe8YNXm3VWbgXu42fMDqF4s1zfEkKf",
  "key12": "21ht7t1J4kNY93u45s3bDPhbxoCzBpor6cC1BpPX59hfr4xZHeV2JUTT7gE5EjEPoeVEnHTfLkQtwd7G6hPGufVP",
  "key13": "5krTsdwKNxYaN2cDdAyM5P8iFqDYXx26K6L9ZPtQY4T7dV3E22pKRwH9Lx1AGsV6RzyYUVzv95fUTXSXC2FAcNYa",
  "key14": "kXsXRG5vpKF633VJEDXN1fNRmcTjD9xgpa4y4cn24y1SruceWtvBfA5VyZhx5bfL9Gh95x6igc6aLVWLrDBh7s9",
  "key15": "4YK8F7kPWSF2ucEs3FESk98SvHeF9TX9CDmLu8nt5TsRokAd2qCqyVH5tz53pHnipJfqRFrEvipVyrnZVtgXfRsp",
  "key16": "u5VmavyS2UoJpefcVzUnUyH5f1QjegAep6df6Uj4hcr8qGTrt2YB3ES8hNH3xvhLkwEMtWpFikWY8JSyFSQycZ4",
  "key17": "4a35j896aQwtnnh4ttURbhRMmcUoL4FL9VdREhbPjdqd6CVB7McUavHznVurjaZrZtNdyP1ZotoLZLnPMpdq1ejR",
  "key18": "4T3EVc4nLqd46srFo5rUMcUdxVzWrBx3QAqesXqebG4VNVZZE6r9QKuXk5zYDdhWHbmoH4LBviojRDBzUpEkgWY8",
  "key19": "64CWSQSq6ZSKgy2neJDn7aVzmFpVu86NP7qr9DEUwXfc1mksdFHFBadLkWa8wDejALjczWU6JBE9v9ePeeAwrc76",
  "key20": "4C16AExuhkz9JHKdZpXiJek2hYf2MeqshYTkUk7QmXmWKYdgdb9GVSpGhsuiayhrfEFRZXr4XeV9zE94Xj3jVd68",
  "key21": "4KN3yStX566iA95ufu4WCKbY8tvov2rEcxxQCYxLvb46AeH1WzmDz1eoA14YZ6yVaeRZaAuco2Ezwn8zP48FEaiZ",
  "key22": "2xN8YgwUhjNJ6kqLTnKufvCySLrDnfMk2XJKDEoHznCBYZtfgFgvQYJm18wFfpM6mgVnSdpddKskoFqEGG1sCvdd",
  "key23": "2N7mioRHhnyn6REtArxcjn4r4MuHoUCKt6zgeEkALRJhZXhK2gK5FPwsSY7CrgvuEpqWQg3P9dsPBEtytMXPAu3Y",
  "key24": "5brmDTbGYwnhMQm5tTENvfzQ4d1mBMkZ1wCxSG9Sg67ZUS8quVcx5an7dD43rTVkWjmyqTFNtym4vUrZU9kWs61g",
  "key25": "67Da9ieZg39CDMXfko7X8nwhvg4L8b8uygJaiEhJDxUM31zsrRCmBjP981mtmTncQh1SMBNT7VNeLAJmkCU1xzY2",
  "key26": "4EEgWZKDWLYR8U8CQMUFMmoBwWYS6o7Z7Qtxk3NFsFDKBK1m3h44dqDzAQFfDuGqn1iHBs8LAK1vodQ1LT96zBgA",
  "key27": "4qYaGHZKP32mxQbQBDTTHtnjgedXcRkE6AE8W85aV7bnpARdeB544Bg199yjKiDGbBD5gEPtxWemNzd2DdRivWmW",
  "key28": "nB64gTrFP3ZMAdoRt85uQpK8h7gRCzSLBiFMVEEV2UMXbjA5fjr9rmkjW6nRvbCZH9voZmuNKUXzH7fBGMfCUrb"
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
