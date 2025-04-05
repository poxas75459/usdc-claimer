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
    "5MaCTE2mJueL7SEzDFqujViz24LsCyHR9b4xF77f3YgKnSh9TJQXPekzN9FbzDLcfjsRCcsh3rJhRdoqKvmZi8Up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPkfSZzPiQnx1ewNMyYdQPQquKUFvfL9PWbnqYib6yhr6DBgutHtvLhc1k3WytXD7nyUDWN9FFy3ABSsqVnvK8b",
  "key1": "32JinC46Wn2V79bErgonzRX4pqp98XPJT2H67dyKYWioZMwYKqiYv89dZ4VP6MH5rxXzCvnXkZ3Zy3Lsk3jmbEaA",
  "key2": "b9Fxu9FqSJxrKCYqYepq4or5CYExN6Fs2EP8nntunws15ccrwevQc5iLFiy65t3gECCAXWTxDJsFvP4wrzjLaow",
  "key3": "2K6R7hfkEotB1EDLjjqkagoV1XXqTBe16XNPLgKmgSBKXvQv19V6uVbMuyyEZhGwrsThQiNpW9ZUNQXenCjVfuXB",
  "key4": "62yhsrLse7Wf77BU6N9Rm1WoJmQYvksBG34ZtYHzc6Rpxo51GpcqTiysKgZsu6d31UU7fG5fJN2SehTSmN9cG38v",
  "key5": "5GVhQpo3Q41yhA7okKmEAvPYbD45WQ5dzkKyYQ5MeHAXzQFdTPAsR6tKZbxAMuBTwi6fEMjQPQ3cXVHPz7D333uS",
  "key6": "5jLqMybRk9Drn3Au4MpbHvPmt1efjtrzmwKEW4f4oA4pBfdD1TpRPFmzwogdyf8zT79cLawK56EcapaLMLp8YnRr",
  "key7": "3wwXWqbavGggRVvRLXQhnq9EvGoABxjBp53xJR1AKQuutaieYnycdE2gMWqNbNHSEqemccrmrrdiFUZZ71owoumU",
  "key8": "2TEnamoQ58VLEwcKJ7iPYz8MCpvHL1LDsg7nyKkJ9YJzXN6xWmcdYaUmijHjyjTcvPuBAzBb3W9BfDUhc8uQmd7y",
  "key9": "3AqXNkej7M7HLySVndNKNKXhPNW5omsrV8wnMrDakoWYYa7A813wVYfJtisrbArBnAzfT1i4jcV5M4mfet89cRD4",
  "key10": "4fMgEozrweJHjSAoyPMTGVjTNMjYxYnX3Y3icRzAptMzM9z686MJe2FvxUWxu2gP5kVsTH6ZYbhjS2M63bfPehXx",
  "key11": "45mB4FmADKxAP7S7eHnzrjoELaqq8mj39xPbHxmCxWE6km3hA7Qrsek2Hy2oTj3iefB1DMhA9yZDVXSrczDxtUZi",
  "key12": "5o2puaNUrKQ6AvanMn9V5doapHEey7nat8opvdFRq1GkfrYMUq5pr6kggKqvBch2jPkwLy8pxipaHwmo1gw92EJx",
  "key13": "2RPPGe4iZvBCe2N9Dk4o7VtAUsBt22Gp869k3DLadXUJAM9ZqhWApWyq6eravWmV84LFUQ36mfGcrQW8fFtM8SNV",
  "key14": "2fkzYTf6zvtge2AMaPp8QseHWBuYmoy3QakcK6S4PEvXKLyVrf9nNGx7k4CzwHcLP6LeX3ykP1bdmjsSAXaZKsyV",
  "key15": "5WLjcCLNiSKm6mqZiYgCJ8QGq2Jmz27Q1t4Kwma7E7SzpyVCDH4ghhD98A3tCdMYn2CBZ1FgyYa6SckYDwsD3vsk",
  "key16": "5APau7F3qP4hHQQz5dXHtnesq5w8zeSxhoYi65rz4HBRPSHaa5WxfHDjL2MrryKNnuHMvtNHKVesz5T61JR7iKQc",
  "key17": "2BC2rx2wxMHQqG3npwajThK5pW9mjL55aB26wQaiQXyCcKPbVeYvp6zrcFDCdeRVLZjKvzCSXvZpLfS7EMgS8VKj",
  "key18": "3Bq9gkLVXENJVXKMJCYmcuphhJtBTpcfjsAsapCugmtwX5oebpEM4vj67thZL6y61et4bCdWkfNhZGNCY5uqJPGD",
  "key19": "2K7QkmZ4d6BYUb4zj6Z4mebX6TKfLqvSU3MAAQEwaKpczcSCWxwxL5jnZLX5gVJ8aShZz8G1SWz9VPGUEo1VSZKV",
  "key20": "34AT5TCjMEtmR4xVivjegc5QtN4pTh5GyApvXmVPJPuhZ8RjkDte7zQ1cDMiQwGFgyUoU7XcPTspLY9BZqri2Q9o",
  "key21": "4q4LNjoiii6pNHy78pwPpXVPAygiseitHufny3xm6AyeU5JnmnMnrkUzN9rQq132NXxGVypzmtq2gf6XEAfy4csJ",
  "key22": "27evwugnbSnYWnFxe9ToQoYWLjt715jrEKSVUHrEo1WkwXbu9QM2Cfu5n55MinszQAJJPfjhSivVeVgGRAtQMdsJ",
  "key23": "4RWGoqzj3FdyDJzNx7ezSoBwDuBAVMe1SydA3egKyHHSyXbGKgV9aCmZHurgi4avssPFWU6CxH42cnjR2H1s4TTr",
  "key24": "aTbrJmbGyBGYwFT24jfZ9NBwPN27NZFUV7qAGU98aFjK44KvvHbT3jwjbMsZAp3sFunqX7zrGAUD9L24yQLRMUw",
  "key25": "2hC5cRzSwaEbPPKuR1ihE2RKaYVvnQvUFpaV5vJaHubpUdRr4jUtfxp2U8sSoZteNhgLZQK2LJRMTgT69MHLoebX",
  "key26": "5sfczRPNSfLVcXmvb83FDfQjydAyuooew8cCQmWQJKyMLFTFC47XdPhDDk9RpqMuZ7c17eUtbtHqSqfpnXjrj9Fh",
  "key27": "4n9mjmFzwpXQ4H7DKWGCn4NcTPfEj73PbLEwLrVoUsiAjnob5JDHN1qoyDnbhR7LF86NZ76n2RN2U44Uk6V2mV4Z",
  "key28": "2a1ewNNru9mZW6HcEwvH6nkcVSLXM9xmPRvvbgSfJ7mtJz9QwMTBQU4nDNM995552m77Fsjw8tvGUzErkCfMuTKi",
  "key29": "4drKSqRq2z1ycQXHz94GhqnoGd3s3VbwJ7K3rLm8ngi277E1Rp3fCnjzeFgpWVvG1kyGMZHSg25ViTeLywJLrPyh",
  "key30": "5MhruPtQZ2278dmLJcS2hE7tBNZVf5QYHsWBLpxXccrHmQ4NEWDjUiM5dApm6pQ1F6sj6DRC655GKh8QgmxPT3Vr",
  "key31": "4Xuvpk5MbUL2SZdPexkGMBJCVLBLsq5ZxUPueQUULsAAw2r1idKhEfBkwuzCic7xLBaTQCHdBk5M7X5XPfTCbzG8",
  "key32": "3tyvP2pZLRJsYveqDMbgE7kibDXqVDiDnba2FR5gDksWGrG9i3YrSWgRCbCAMhNGAiFieMhfv5QeTpM8p4Q8Rq4W"
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
