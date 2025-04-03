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
    "3UFvNAQfqVNnQ8g6yEjAAwrPZMUotDapfBWjc9QNQu4DTNMwaVSkTEJejGAkdEyKpJgF7pHpkx5kj2VWsDFCH7bg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HAMU5Je5p2YSWZGSKMYsD3qD1S7Q4XK2SxjSrFnuoJtxmzY2296YzV2EcqNeSRd9qoPVe5dMVJDEt9RnZx9GDWL",
  "key1": "4Rvp9NSjPHdX3JLZRCw3ZrzFgGzsWEEm9zSgt2x7YyH7q5n6ZdPxypnF1fLBFUF8Mt2XYh45V2Thjh696HGQEWeb",
  "key2": "4YyB1RuGwqGEdMhc732MnEapMV6gPFYU1qwsus3zDRMTtb9y2vif68rPgvEXfTzB7wTcXw7VwvVE7Lc4v1ykLELF",
  "key3": "3AwokBBKhg72ogQC51xVy9VUKAWTPCnS42Zq5HGCSRuu633uLJ5T1Jv9YBLGjxVQmkqE6jbJ2b1xyNQnrmtimeU7",
  "key4": "3LSvdYBE6VipMMZYQhDGy8ZkcekEw7GNwdAJ1JTNyBedu8JZnoj7rdgQ39fWnYMrAc3uaHNCWxED514zvoCsJN36",
  "key5": "YjnjSkLW4uHyksrpVfL98RkpZ74c6f3yzTjZyvdu3f8ja1eLoHy1J8o6WTEDTiNedq5zmarZnk8dmUeQrrPEKLa",
  "key6": "58hAQ2PhiYQ2dKD4W5QaQYa5UdnVb7UpC47PBBXNYYZi7yYk5YVQ9ELrNMhrPj4LXhaYnr2kGnbtaNLQ3c8mU6uh",
  "key7": "DcLibieV3b81BT6yRej1M6diPB2EVy4kMqfVHWi68cqSU7Ff3HHgtwdvUfkhJQ892GoiSqT3aHDjM2ozMGtwP8G",
  "key8": "2mT61rcMFJ3QNXVymoV31Z9AkH7YF6LqkhJAkbgRc4XWpVT8YTQFwcYsiYszsfd7o3VPZT6SLpfrrmMe6KnE2mYg",
  "key9": "3pwachxFMjPRVo7BdRc8sxLfS2QySmSNL43NKymJ36tBdLCF31rNQq8bzY9csbZxPeCcCrAdbbiZ8RSvoF6vhpBG",
  "key10": "4k3UNDeaNC2y4vYYe6fgsHrJDPEUr3kUJhZ6VvbEeZ7Eb8gS6UrybD8Q8gMLfmZiQ9Yt7gRoCPafZGBLLtyf4cRT",
  "key11": "4A7CGAGJ1srXCh4Cuda5hvzpqfhTNdAeQS4GCH7N1iGyptsgYGFnchjxfz4ya6PLTeM13eCU9RftCGHvrrnVRQpu",
  "key12": "3Rpc8wPwCFnYizuL3PwMqhMHM8ffNUzZFK14ugpdbEBjGoFip2eeXC3RC1hVMCe3wnS8pZ85SjRt2vhVigNvgzVo",
  "key13": "2PGU9EPRTki5Vni9MExDVQiVoY4tum6d2KQWSLNeEcr5F7y1VpnRQVzk8MuL9seex23rieWaWo4GFwd78Gh2xSmi",
  "key14": "618ydkbxpiCKJAjcW8WsWm4Kmb8awzzuizh6EY91o52VWMtAs4h9PQaCYWwRkN7stNqPKegPenaJNqUHqBnsgtDd",
  "key15": "4Bt6qbJ8JWr1k57bh7rg1vgy8EddCuvaEj7rrH4HN1QZmcikhE6oYFqoUwyf6hhD5WYkdbsQcdSBqkafqRQb28v",
  "key16": "67EuZnuEKZ6iwiAhpGhbheLqTAPeF2uKyXA4SkwxRPAusJjfxUBP5LV3hjJeZHxiXm7KwTgHm6iEf3eicvSnP35B",
  "key17": "4w3y5VSK5P1Ydm6DwtZynBbk4qZW1HioC5im3rYtbY9B8m46bbZRysTRHEGAYASpCPzVvQwLei3MQQqkQKZ8SYB5",
  "key18": "2KqLK37C6wUNn4XdC9qtXFCzdEPa342dFhzxqE7KMFtQcyaQcjQnNQuUYPzrGNE1426udwu8NSFoEXHUGezhNrfs",
  "key19": "3Mf75BiSaZU8d2tLsgkFEyfBCv6NhFW26oZWajhtaEVBrQBS1Kp3HgaGB2QNPjcG24FX68yE59ZrjpmSBDSg2e7F",
  "key20": "vSgMPhAoRTkzZpFp57XTc1FFBrxsseS6M8dzLr5FvAMU5ZLtQJaKrcACCJMS5JT6oE8XYjd8uDS9FrviurUx2cU",
  "key21": "3H56P7Q23if4X9w6HmbM8oaeqsxzKDPcZUiSSPVfV8kQaavHHJDa5JxuTxDnZNxkjTWr6dVTmUjmpA7ByK7vCAdQ",
  "key22": "PAYEQLGZhHNaKFtE5onVHPFYRHsfzrVpw93QofgHSUYXYPMKiTBjigDwB99WtYrWRtrzc5wPwD66nkW2H119RZW",
  "key23": "2TW7tUf4ygYoG5NP6pTmseDMgcA4oZeDUe3KvdJ7awBVV9dVWm8gqTGVdJ4r5Q4vMDCtqQMrPMK5onceUHu3vk8",
  "key24": "yoKZAGNbES1JdGUrpoNDa5tRaRPdmmH4KQ4UZ4PcRbfSWoWNUqpWxYza5SJzxtmZRzUKqD8f9cPXDU93k4TH6DJ",
  "key25": "2s5LFT9SZ9MBVoVPzy9bfNZGgygeH9KdzZeNsUBQqwYhN7zv8eDY9dFvd8z8x6Jvtqbxeud3gQ333hwD5cLpQQ8s",
  "key26": "4Hph6jbBbBYcaeoUgt92W5LtRfSV8xqdF9oZfDegupohHbyJBQPNh2yxZ4YDMhFau22bb5eAZ2Mc5nK2jhju63TX",
  "key27": "2UoJtzWeyXjoGobB49JhqCRFnS8UcBMc6m6eTKUt3FXruwFHvddmDbEqakRkHaCdereZqGqCbxKHQPsMWym5Pamu",
  "key28": "5pnCWHd4LitAAnQkN1eu12b1M6s6iwWwgbrnryXwBSKJGfBotra286V8bXDYaGgzj9H62VSXdmoe8h1xfqeyRpk3",
  "key29": "21z3xjWA6y24H68Us5SQfhnC4mu86E8mDdm2Ggnu9bPmUcpZ6wjFvZSXP9sSnQHQ9CfAnBszYrFG1PjrVDCMDSwf",
  "key30": "4JVQypzeirkfyRaXBqwv12K7NAcb8cXGj1TZByQysuaeoas3FvvcvRPjSosuRwKpd2Mg7om646Z8fccb4wJymF1E"
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
