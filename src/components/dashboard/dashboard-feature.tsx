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
    "4YMvzDQFkREwN8G3nt7gj3jkZDXaL5tFfBNWRkDiiQxqca3EMc8ZS1so71Fj5hmZf8kKMdeKKkWkmgd6tJGaZc56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KYnCpmEqhPRPGk26oSQ56EyNaRmY8N3QDEfJjZGjNLzg2rVUJyTQHYUxMGAf4ybEktwuRY5Sawte5LHaPbdd1r6",
  "key1": "5yu1XVsNkpvXxQNnjPKko3fwySH42WXAqbSRgAMC6HyjjMYAqY5cpxSpjvMXr2ZbSPoXvMwQEde4PUT5vG82aWP6",
  "key2": "j4FLNJjGDzdnn98wNQTunXiL5RzKsjAKv42iLps2QMPnSh7ZcT2ARTgUzWbHP4tftShZg8HZ3nmbuYfHotnq1Ck",
  "key3": "3ZEeKsLeJpfAgN3po6WYo6VYdFAvQXq5BQNdL1AWbHYRXb4RmKY5f65HP3yP9ymNXaE38oNS4nv2K8NMNLg5GbTa",
  "key4": "4FfpYHB1YoCaWHJVLeiqfWpzBpxu6rwGMzu5qtV73NGT69FGmCe6xrjvAyuvvHsxCZtCbarhAKrWZsJVUsYPzre3",
  "key5": "3xwxhA5QCaQMRX1Tfvoe8FtNkVH2HMpymqVL34VywtvDEGv3UWmatZR4asNpXfMDZbB9pGouCNtmjS9wSjBNnbnn",
  "key6": "51ViJZWVi5pDDSBCwDqCxmTz3Kg4WgPgZpi8TJiQwYAWH7etADEY5PakcE5QqS2PPedcqjSzN7QT4tN1QQAUizup",
  "key7": "4So6z7dA8VGxVXw29BFyy8Tn1txKQgGAa8AgVFU3D1AY2U5KQpo5rCVrvbUz2Z9UZ3m4WB6bjVBUw5wimweJHP4Y",
  "key8": "5bHzsGp3ykPHPWjEg2tz88kBXpBv3ZzmB5jTJ3QiQCLvMinviceCP2gQH8t6Ao6yhpSfbV2gwc3qoByWJJfu27LH",
  "key9": "4NdsuzfAEaVubz2mEtXFGubQeP6MGmAYVMGtPUzsAkgahAzCceNWZwTDc7PH6nbg8BEFx8RQtixvwyeLsF96Kbp1",
  "key10": "5PRdM5sNUHJ2NYvzL2Z7BJLSy6g7q7jkwXP4Hp3qJQv3K7N149ERqgFwPre4AMevT9cjpqZbier11TLWbYc4pPs7",
  "key11": "53d9R4JX8bzAF5umCsswLiLGhYWr2hyFyqdYzeLmsGCPGwdacyF2i8T7gF6wgS58jHpbGVZi7TdvfJvb1HqsiX7o",
  "key12": "5qyf4uDALvBeSSm1nv9D6tZWt5wuNX97rHYaA2N5YC25NKVAcJLSKKJ6c8tHxJTHXi54uLQv9JSXndzga84DwcG4",
  "key13": "2imsqXXcXwfLFZGYQ7HrPbsy3eemLQ6S6nUfKZ7QuY8DgZKWs15vKYraYWGEntDUEMGdPp2ujFmbpmuvCo3CjfGC",
  "key14": "2393yd17bSk2SoZnhFRmwTPCQ219aFDJWUMHEjwwjSYGXhgYyMUHTwJPxDM92m6U2xx26EEvdTsr3tsM1fEsXa3X",
  "key15": "3inrV7yaxZcvYA4eGkbDL1s5VZRsXwDXqGLv3fh1BTvcrN116htQvMxPqu3TRHAvVxMfmHBT2AibF2KfTChdHSdU",
  "key16": "4U2RnW3acNbynTSepqpnfbPUvu2Yihn84BkXAxNGw8DHAJUwwjkeSoBXZykugmEjWeFkk7VGh8UXEw4S8Mihk6SP",
  "key17": "2njQScFjHkJPfzeb8tg6xdkYwiu5obCcGQF9XNiU9ccCZ2M48ErCPzuWq4pTq5s8Dann2f4iL239wG7mb5Zb647b",
  "key18": "37vwzwKMhoudKB8kGBVBTRA989iLxZxYuXLsYh1qMMHrvZXVYCAS8C63d9ng2KHLxQm7GdeoPYkYqwjw3YoCRCCi",
  "key19": "5fygMDhsEH5aTm6zTobbHchYF97zFuR1NanDKYXPKb4Ct7NWYsfsuz8PtC2wQ3EgtwWRXzcEEQy59eugRs7kC2H5",
  "key20": "XUygQuszXcTxoAKtLb5bntjigetpqMdRKxVcwUwKnKWoTifr12Xm1CPW9jczVGvABrZjFSEZJV6KHYZEJXewc89",
  "key21": "5YScanW2UoUFwuiAQhTdgDhYNicVSTa7wKwFkikweCYkcj2khhNzNuxTxPMSw69NXBS9xRFTUeGmXsWzfLC3814s",
  "key22": "2VnoeStpTGiu34hGwZUuncJYZNqMmVxZuJnn65F9wsmh1WvVMJAW58YLQSV4RswtdcTkPpy9ZYuTWhagyVt1u8tW",
  "key23": "4ZCQySYx2TQkgEtGssLKfzbbtAmzpv7DbYmXbR4SndW81EtKbmyWL1gMEsKUsQUSJTWUmE2BtF9Z3eyq6RqtCJeD",
  "key24": "2s7U4uvpGJEMzgrJNs8LriMp2DuToDBUwBRrAA52EHpbKTAB6EuubTEWfxPSBaT1ZmRzAuXtM2xB3LpXPDoA4rV4"
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
