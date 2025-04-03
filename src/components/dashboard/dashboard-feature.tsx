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
    "44PQHvKmCJsT6H81mDf16TxF454EAg9w56r4Pi1x4zScZAGWpX99gQhoreSJVDh2mMUrrZtTGRfZ37g7JXZMM63C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434oREP4NVHa9UdU3mw4bZnYRxx8eZTvTdwZkNFyb4w3oPUK3JyUtJSJun2HUSF1L1NosZTBzLcVi5u33UYKYLyy",
  "key1": "Pymbip2XFUEcCANLiLAPtP1VrooWLhE7BPsHZazwA8YuamgAZxJ845feZT9nwp32AejmREWdkK51nFwMuQXGZBk",
  "key2": "47wUwaHde8DwVvUbjGAs76AEGYnbwikvJRAjT9Trp9UC1XHS2VDm3H6oWJnPJTzVSQAwtByQP2gHcf2L4ZAWWjTa",
  "key3": "4xGGVnQtqrbwMv8Zj2N4Nuq57DPLpyr38RyhP34zBfVCQwFSEerKF82i3DbCKG5burVt3DTA3hxj6mmEiViNDBGS",
  "key4": "gnXw93mSbKaTn29ixq2fHBgyZ27ehSoLphxY9bMjdQhtHscyqkU54754PELZ3nBWmVQ4U98XtUhWRbX4x2zWXwu",
  "key5": "3zTunjuSRgemf2aCyjZ27km3uNcsJE4dGs3Cj9CMD5jFurhbERtvJN9effqr4eCdzdwf6KrEvV45Mf8yeDA4RfhX",
  "key6": "3tHHQ3UxorFdFt5KcMNu11ZqdGNvKwDs6oMuvD8NYVDL2Up5U1xeSAo2sXEvoLMpHJmF5BRZ6x8TctMFiAWA1Mqi",
  "key7": "271DPxdqQEVKA94RMpakxSJtVHrbwDRrYhMCwfWXZYK8zGjDPYFTa1AKvam3h2Vra4kkNfNqP4g63NRXoHCWeuFC",
  "key8": "4Diqb8utebTWFVB5TtLeJUUPkxRKgdY2njiSemkonQKVEfKtVEeo3BaViaXQansQxuNdqv4JugXpkWcgBd8fEuiA",
  "key9": "5g6PpW7YtB8NPNyoDhXuNZAsXgEvCRtRk8HdbPnjGCRCXWNP9XQwJeeE5afm1ghWqgMjCtzGRjyR1BbsqWAW6ffn",
  "key10": "5QRDuGmXurt8MWvy89szDXXammA5RSGoe7T1q6PpKatMdzsprrCDvNPBuqET5539ukzaxdS4VFGKK8xRYmzSipBj",
  "key11": "2kMifG1PuKkEA8TK2RCSSx7kxvu1xdoCdbj4cwKyZXqcRKK7xpxEuddNCt2h1q8C1sJUQ2NTShwGDjGoLGLeQUuT",
  "key12": "FKPM6j8riXwtWHf6C7TrmurgUowVbi2cbgtuQ92FkNVcjc1qTWvtjtowkBmZEYu6SopcHhJVnLSELtfcLCRiT3j",
  "key13": "4cQFbk8VJik8bvSZX664fYm52PnQsWJFDBxu5ygv2SHunbyY7N8TpET4PwwCHKbxuHRSsxZtnwFhHyCfew89k2iw",
  "key14": "3Wp3UrCebFYKfvMkVnS6LEDRy7jYPXTXGgLPSCMz5QJN21ugk6dA8nGjWnkQCC2yTEQMe6Ch8Cwjg5zTzqmuZoWT",
  "key15": "3XzJhS8Lv5DcFE9MRpWZ4Jreb8r81i6RQuSKgkuWcsq9fXM4ia2ajvjta5i25tui4g8NuFM3JCY5DmuVQDdY9Hxx",
  "key16": "fnepU1zbHyaKFMrbY5kjstaXecGff5m1gFF684c2vsqSg8nQ2LijYam4p1ZQwkk5SUDAKcUozc1F7omSQ74D8Y2",
  "key17": "bsRkkaFPxQvc6ru44cG4RTmT5RYGR7e5RpSUaqhQ4nfbwiQWETCYQ9SneEsxviVjAqhnB49q3Fsb2pDNXPeTNzV",
  "key18": "4EJiySqVEiwzbDqaEKkE8dzfLsaRm6GNmqSJFsmGnywFKNK5iSHABbRchcioq5d2thz9dYCjedkdGQcxVW7AhesW",
  "key19": "4N4cD6yF9Posb6oc2h9NDCKXeDpRaRPL7x52pVawyQdGuWERch342G8imDKJdFGmwVdxPFLJRs3LraxNyS6HVSHC",
  "key20": "26ysKFb4uomRX6d4K2493HbzaUKeeRmg9cWQiGm6PNpdvXvoJLKeS98qSuposRiLKEi72Y84CPbxqiVtMZZMHnXp",
  "key21": "5QZBFJeW6q1ruNNEBrED9YQrkLzveu2WNjdWebsXEoiMhvU9afWqo8VnBD6rhJRXPNzvSm9exqSV2h9PEHZBRyrz",
  "key22": "4KNvcDmni9xnWNaj6RGEjQFcsGsKwrYtiN6YHbmS8SYAL9UgDveWtbzXoVT7kRWJKHYCCmo6AzGvmD4GezmkRBHx",
  "key23": "2PNx637KehDXjjkSgfBqJfnRYbiuk5TQN81G5ZVmsMQwJGhCHuNASiuvEBQb83TfPCzFxsJKcY2fmYKze8geq6sA",
  "key24": "32bjAVxYaZouo93NLV82NWTd3dL8B3enJGGycsmS9HQk9j1X6KQjyNDJBA5ozh87xR86MHQCy87CKEtytqeETja4",
  "key25": "4qFCWxbgDL1neYuKJfkVQ39ATdSayFz6nKcMnfeGgvWkoS3Z3oqJzMuV8Vrg6VYjepqYWRm9W2CduftKSsowjz2t",
  "key26": "3rvDWoas6n195wF96cC6hYHDfFzFruMvqDfRJvHZKirra1nwdggLFvQv1o4HQ7mFTeyT3Mobzyqm2gmKM7iCUN44",
  "key27": "2rFCMUm7eDskysWASK81uE8NDToBSTJTmX9rjf33PqbiMQADsaxJnLGVsta6GyGbogqz22jY3XpzAj4MAMunUZSH",
  "key28": "55ZFiRE1EPP8af8kK79QSHpm8W845Q9K8DEJKBqCkkbxRSvaHe4MBUwjt3uYWUdEFb1NuCjvpZSZoiZvij1esif5",
  "key29": "51cbatHj7f7DhmjA6j2peTcKTgGMMvxnMUfSHeJYupWFBEZbjFrmhRphHgvSZYhbGeRLotpsScKvqEFgQiGu9Ntj",
  "key30": "3CGg6jbsAvif7HfXadm4A4xywd3vGeN4RcGHGxPDpQx4zXUhQfzedZhxACcpt3xdAbG8DF2UT9ibR2cHJtxUkQP7",
  "key31": "5eQNNf7b4fogSKHec7tbiUK8GCqh2p22CdtYmcfJCgF3FCFFz6v6AuVBdycoTAChMnkjUy8t1rMXqKNehR9UfN9G"
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
