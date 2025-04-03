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
    "4rrHTNqSE7LvYWP6Prgr2z4bBTFerhpq9xp74ubcgLV7HDgtRT2mTDvpei9E7i79zsQ2yQex3BNHM9qVEUizLDoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igYW8xU6kbvQBXwiUVuEoS3LPVHdp8VAteysBWcWXzNsHSZBhWt42hSNt6fccEfBTx3szMZk4tNNR52dRL3urog",
  "key1": "5TS1VE6Xe5CTuccyHtJScaUQuPA3XeyjQD4tCLBDyJwDdVeEDC7e3aj5CEpXBNdWLkyVEAJmGCr36915qWumXxa8",
  "key2": "RYHGqMN2LS8UWASE3KXXz7KFRUEEwtt1dNte8ySmZqjpwu292uQXzCnATPzmWPQaNVw9G16NLNnNY8Hc3UhNprm",
  "key3": "3rq7JZFFqKmLKKWAt8Y6nV77QLREkzXzA5SoaQ9vhXbvRfFv3jUfsMcw2pMw9HcsyVU6f6rgQUicY4AmqxwiCChs",
  "key4": "2SWgMkqoXtf3ZVTmuxuda49ywD4sTEzWr8CnGPk7Mx9rw2fSyGfggNshWBSzmfn8tnp98tZnbnJA8xbtp1cMRdCV",
  "key5": "58rARjtcLPYNa8eLXapYW2uPHkc9kmjeTctgmdu9JJXSFD4XawHhANU13ZUvdjbfNjxepVqm5qemmquHr5T22uyq",
  "key6": "3L7qJ36C5DAmFfiVaHts3KJzLCpNgY9dfeuRmvVtEivWvt9DS9Qib6HCVVLxoLAxUSefBRTAaMfVpiPq5tVkxu9c",
  "key7": "2HoRK2iw8DdKwomjvHXyAM65Skp3JCgkRkcbfLRCgEjGX1xYzsEN4kzvwAQvJt3966hdixPepXaoWSjunF3yxeLf",
  "key8": "XVWez4qLWwWuhXV3UT1jPLUEsbivLcXAWJPcCWCD7QqNsT1UfFgUQktxZFn9cjJM57uen5bCJSB6Tcs3woUgGaK",
  "key9": "3gRKqxXwQVgS88cvh4u2auUfo3zTgRmihZb92M9zwkXwGARmTMB1beCZzGrFvUxqsxEzaB8Feu8Ay2z98KcUJuv1",
  "key10": "5wXX7npREYwSbcikR1yAyDWe1pCpMHdhmaXccuANMwNv31HMnAttM3P3YVnt2XUQi6DrKR27SiAtfb4xer9NrKvr",
  "key11": "5gXT3D8jnkEAzcFaFk9VtGU9bnzHo5SrpX5dGsaBMFvbLWhmukECw6WcPtAn8EeaAY9R2BeVaSUT7RCgZfUMQafp",
  "key12": "3BTEtf62WD5ebC5Fxwwj8U7fqxnpLUfZUjsn2Wvzn9WwYba9FUKy22VcAKiN8xtUhrdNginx5bJUBqRPRovjrW82",
  "key13": "2qkKv5yqWjUHkLpWvoB1jKSXbg4cqoaDzmx2EeXdoLeYjtGaTgrjyNKC4YdXS4SyaCF8hknVLHFACErCqUKpdaH5",
  "key14": "3GCAxvVSHfedP8CSZruXUXpNjUdBdpMkFfv7pY2GyVhFokwR1mfhM5UAPFni6ro3D2wiCZnynjbe1Pj7aUFDMZ6U",
  "key15": "3gNvGzyxhDyC2gbU82gbCscShJETDNBLCThFtnEe4HxTHzuqrz9PsX885yQrK2G8gFvrJ4Ngv3NM7zvQwhE1KPA7",
  "key16": "3sPiqzmf4Kn5xBXt53wJ8y95GZt1uxhBDzvkhXtvcghCB2Ji5xUrEk7QMRLM9oNuMqpdjhHBS3yuGbu2BZxKu1ho",
  "key17": "2A9XkPmjZ2zRxfhe6S8oNVNRhBWLEJU1tsyAhyF29chEoxP3KkUbCm7yj42GXGBauvkJ4Zdyw49ryCV6BpzUEwGD",
  "key18": "toRzvMjrzy6w9aRWygdjTbpsnowN4QE1aLiasdqKGb2CeYyTmvC8PKtQ5ki7iMPyMy4yT8CqsH4KhRngi8gWQUP",
  "key19": "5L3D36JrA37eHnzJcqSigSKNQMe2Dj7bK5VHp95xFU6WPJ4atsrPybcaZh7Z6YT69wa88zQUSjpmBhNzt6xWxAhA",
  "key20": "4w8cJgeoCsTMgPKqD7DSav7oFMwjNq27CnY5SanE2tp4sn7jRBmFhGnAJ3GmzuPEbGFLc63P7RqYrqMcazKxa4Sh",
  "key21": "4JN71bso7xnU8ZugNXAm35sSzmtC9Pzaf1zp9sqGV7VDJjyppFutsA9QJmuQ415h6oPWvo8Da8aYB2b2jhGCPm6G",
  "key22": "4MBH7VnDj7T3Yv3sTAzUGNNciAaUCERAERVpmMCGJm5kw54wK9H22wDUQhQ2zRL47fjUfxDdRejHN1JtWdNpdxrp",
  "key23": "dB95sVkF9tTETe5bzFCh6qVGAHTMpVg5GVCWjGyTYbQSxxaQHDCa9QeHxEhG7Bk7kBab2Ub3ScafQV5XkT4VnbW",
  "key24": "65DWcsMfFzeCwGRQtyPFvZGT3tNHiwvBuMtikr2KzxcUrnNx7bt9XToWiVwpYViEj6vCgepgC5LdDcvjNnqF8U9T",
  "key25": "5Kvx1YSGHHAiAyMn2SZ1k3hBwx6obxJHu5jf3x1DFF9KYWHAJKus5KUEvZP7TzgoqjJKJXLxab5f71iAKizjVeyg"
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
