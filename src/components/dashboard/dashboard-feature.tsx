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
    "3Q4KCyD8GRwtsMFSEBwqQdvKT7qpdK9EkQsNgTJhPtHPYDpE8oxac5ozDXHtakYHxhxPPxb7FwkpgojerP2T3kt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9LbKeX35h2Z9XvTZaMsVeDUbyMUw5cyVnQeGZAhLruz9udoTEa23Moakd6GzwGUrQMuvtRk42fH5yFQPGEinSok",
  "key1": "3neUgvZEFpxvCjudQidTEDJuoiwnZuFtYcjW8cmuN5fe8gi66ZP2E44Ztrpaix7wdJcMLrcYouQviGCm7JBt6Loc",
  "key2": "3L9ttFo6ZYK7nGV13kAkWeFgMgkrN8xymzAci6kttW7diw4Z1NaDj4E9zQ9ENWGyE9r9PJDyVYzWqEbpJmYMtKxh",
  "key3": "yPNnSYKDLjoCp6mEMEpPvGPeh1oGh9Yeyf7cArGZ55PKVMM94gtniLz673nGcRDdid7bcXBWXEGKLDhX8qwjAoZ",
  "key4": "2UwtU4ekxAwX4Kdm1wcnxcWnCjE81dPtraSCuby5Bya1pPTrd6j6hFm3kzrxTpU676sYgcktWxMWNTCo8dys31Nj",
  "key5": "4AA8BzHhGgasfKeQgqUCWYDvchVyfhqaxtdavvpj5J1oPG2KSoYYdZ74ppzGaVQHYdHpYP58vrTVoW8DT6j1Xh91",
  "key6": "4RH5AgZ7od6KAieDZfh7PNnKKtffKrwhdVudgn2BfjJUMRNehUNt2YsBZzEZfBjEMJYPVTLT3uEz6HGnMvnTiWqw",
  "key7": "9fSpfQL32Xzr3jHX7aHjBjSHHwCizdYo2FB9T2xbssaN2t9swFsFCmPjvScHJg5Qj1fYwQGbbzR5AaTmv1dVM4Y",
  "key8": "5QNdnSLuccd5oEvovRgaswmM7pC3BuKz7x7bBG1vrrSMq2cJvT22jmSZjTZYQ3J26mT3dcSQNqMQhfZQdmx5bHLw",
  "key9": "cDbXWNiZhKpugdfus7TusXnvV8msZoLjvq9TEYxGnrWXNmxb1T6aqEEEJA9Go3dUGwNer4eNtpxukkuARDoRPNH",
  "key10": "62XjRJHGgWDBSFvLjeC7a41NgC4b8r3YvPgZkHCvNERdfztEJtNei6gDf8x91Uc8LHonLUGS3cVQvJ4affVjkGTz",
  "key11": "xPxiZg6QWHBMNiYM9MMhnxjLuAvWmnH3iwCHtMgK9jRHxAQvEFKwcaPKz6Gmawaf4aPbemtkEoMmXGyuDTj7m63",
  "key12": "2CCY3G3SJkWSSETcgf29ohb3qhZC4Mm9g5RZx3mnucghSzeEs9pA5VK3RySvEAPfRm393Wu7wqiFb1TPFmEngwUF",
  "key13": "2GLbLkt4Dqir1dvdg3mwie7tgXcUnDXYJUbGtsL5kip22prYf4egBKMk3dF7R8oaMbdfiEgrkcsip9HjXKXGSW5v",
  "key14": "DjTf55ErLkESaDuXhBarwXu5Fp2XM7NBtcaaRDCJsaUc7rSTkDc2mScJ5fsFjURpgfeGSbfcQMJfHXyLKTrHpu7",
  "key15": "cbgXhghfdSBs2AD6A4dGg2KmPyZon8GyiWbUc8vmq8LFWu9WqMwAs6XcJ33Uw1LCuRFsbtG6RTy6qyMLGqWTUQt",
  "key16": "5FBMGiGuvGRczkcJekzAAcj9B3VPNsvSqddSna4bJxkFyKTw3z49idSqwh57GTzLG6XX3f5jM47YqnW1S22q4PcP",
  "key17": "63iPjysk6pUYiTLn3DWAxeYc2KyCzETjwA5MsJzuiyVLUWdBkTTzxvyrhyC9K1yHy8bujJguaCbkVDZpA6mM3A2k",
  "key18": "51axguMYaQr1fHJ7H222GPuwNc17MwKrL3Uy9jd9JCc7AanLQyFrgq9Kk34vzfVVe1fwaDGANxiTeBMstZHFZn2G",
  "key19": "2nYfKmTDCEGLpb9Mvtyb8zBN8CnMeEMvYqFVgkFrpgAZSutoarrmbkWetmE8z1T5ZDvqFw69i9B8XCX68pe48QLA",
  "key20": "5UM7eGLYarJUeEkKzRrkNC8i7heXhS54hHZtgihyviwo4DJ8LahXKrAgShioTeYkEe9J8ttGcfKnZmvtD76wQNKT",
  "key21": "95woK4EWfxa3L68bX4rZ75AwDLK3YfKeBH3y2rLsWvMNy2HKyfraM9rgmw2nPrwxedmUD37JNLx4QagGCQMaZ2N",
  "key22": "4PErNgy25XGXJ1A2M6DhoBkQfAVaHydTCzvhGkpmtvyskCPLpwF9ZH6YC5pmP72YphVDRMoNSG5TaqHXUnXG9eB6",
  "key23": "61ygpLzLd36otBxcQyevXHn3KxvgrMqNLon5A3fMqk1tuSZVmWQysf72x6fk9ATjcqwwUrLMezZU3YQdkYSXAwJF",
  "key24": "3ZNcVQCSicWtqbjbJh8s48qa2pgPTtzjjtD49iQhZUASKQYbHkKKMAqHQwFkaR5YuEFZwCCnnyL1L6PxCUrNZxoi",
  "key25": "5biSENimCseXSkMddtZJitE8JvxeDZCuADWMCihHX9hQ5ZAgjXtDEWDtXT2tRvT1zzF4k3qwxramjFpjCDNhRhnQ"
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
