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
    "4MSAjeGhF5H5TQxqcPHZNShAwV9Bqoite8XCznpAM2FDFGVCBP6jLt7HhwKG7Xtu1JuKRmjt929LkDezZpK8qiVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uP54N3A2iUPeKn2vvpU2nEbajq3qJmSQB14waVVFGuk6ayire7ayRJfKfnqtndGK3f13qeQNuVFrxPnkaVgxj8N",
  "key1": "5E3NEST62buBQBEX6fCa7AoYdEpS33A93jcquvkioskLy1GZnjMW6Nu8DGfZK8Kt95eNgXrN6N3y4RrYSFwKmfj2",
  "key2": "2YWEUmdcmj2eoAuAiGxQ1uTfXpD7WGBsENWPDHWYutJi1RAur66f6PtyHzthgp19Y3qrav7gUFyupov8KkgssFDA",
  "key3": "SQFVoQgkorqCb4z5GJ1paG5i8KcNa3LViusvvLp9VSBRMmjWfdiyAFTu31LDn1vR3Z2GQ9kCyzHEM9yCbjpUFsu",
  "key4": "2EYibipwLctGtzqWsKMA1HCEoPi4QnURwcQcmzRUdLSH3G3jWbh8nk7hThcgeRVQWpfmfTuoDfvVWVNqvvLhaTeJ",
  "key5": "5VuWwJEZgv5q66qigGCPnTCc9tQTCDPHgP242skkoQXkdtJ5yywsAG59Y5F3iETmvu8t3PWUyntRFX1TLkotgMX1",
  "key6": "5aYNvvPf3LddFkxB42Z5BjCpQKdDbTWsnR2mP8gsWfh2xMQMPHEywbRoUmUc8VhoqqLziKacVkKpQakUjAm4anAj",
  "key7": "4G4gzg4Kv9cAyeMFFscyqnhS1h3xGp49NBtbDdS1sypzmVNFMjeoRyiEJTt1DonXj9Uc7C5gQxc4Pdr2VKgT1Z8",
  "key8": "5EdX6Nr2it8Beg7gEDuDUQeDiSsWfMXBXbfH5szQeSMUzY6B6ouojYyKX4va6gUbHkfidu3xiJTuhRoj1uz2WWvY",
  "key9": "29kTHoP74EyxKwH6yVA6mwvs2T1wKF3TTB4XBH1iTwXoxKxAWXCiPP3WhjttfwCb567MZqJnHessF93TKyrHwUGw",
  "key10": "4Dy1sRFtZdQN8A3XXRtxBXmEHkAf5gYX62vRDkZnpdWaC9EbrgQiioj8tqjyfKc6zBttcWG425ehkSCwy5fJXFeU",
  "key11": "LRvTxgkqmv2t8BuuUjR59SaxDtUvP5HqFi4ykBQwMyWdevz87zxqfhSAncx8mjDkvHZoRzez8P8Yhi6qcfsKTmm",
  "key12": "2Lew1orPH9Thmy1e3LzFjMQm9b6nqx41QmpHM4VMGugMJ6UE4dwNuxKFkQAZuimV1WUq2xE8aDmELvuzTY2zerfA",
  "key13": "3TpaK7yDn4MrtMrUh1URLqDa5qMXT9dS4eiZv5Cj57D8g5sx8hrvKo2gr2fd4BWpVqCYE1gN2tr5DxLgWHJwGhZT",
  "key14": "5qtkhvpJ3bXQTpACmik3JNWcoXS9teJPPVBVG5tcQU9tTVYqK3ZVVACL9FF2iamZy14vmD7ak8b1ir5fmaUQCXrK",
  "key15": "5C1FEUYTWCXi1sFKpKwJDCgoHYkps2LgzepSMg4Gf37evyWo6UfCadb56c72NKwPW1vw58Zqdehw5jZ3NvVrwspn",
  "key16": "5aZAY73xY9xEFD4EaC2Q5g7jAnG1in5pxHrgVqzF6xAU22j8YLYkDr3iiDXzLArpUHCoGmx5DjM2HjT5UqedXypQ",
  "key17": "4iGJeoKCFPh3f65TcNL89L95TFdqBSJ3dc3tTZH4MkV41RjUXqBGMFJePZ32XLC99fNC4vSxFMXNXFey33sgvMRW",
  "key18": "3yMSDvsHo5wDgHk4xg3hv1LVK4EN6ba1GzYAPNimMsBhPnjhQg7BoktYuU4EHBXeYwF6dkf3PFWK7rYmLrBAo1GM",
  "key19": "2Xxey321kcdJ7ppMJMu2eb79jVKuA945o7ssGLqFAS6r8tZNzfPushqA3vzcBvYeqCsYitN7QdFMev69EEK1fu6U",
  "key20": "5xezPnZjVDyCycAV9fnX1utCjKptnJQTowmBFNJHREBG3HFvcnqsoidbd3WyHEiENxHKmUsuZk2sCypSPqST2FGN",
  "key21": "2txdpk6htSni5t1819g5NfiXYrqEcEhPrr1XyRhnw2SLDdJL9eMqf8rXCvJDM6B6BBPPwiAqZtSLNRuk39RKoGQ6",
  "key22": "2a9r5Zmex5vQDyaufqAj2T88sU6VzcqsoVDiPRtma3cEg2PFpmRYqq9FtERodgo2cCr5DjMduPtbjQow3F2Ndc4P",
  "key23": "355b4PY3szL7SjLPyNH7BcozbLYijo9bVHEMNP4cY8jX2cT7uZqTbTTNT6CD6QvZUhDDe2tPF5wJ8ZTZz4p19q44",
  "key24": "2azqysLC87nbWG48tMnidD8erwc36xsXQBLwbgHYp4mHo77YdsmqHrzRwBCja9uSaUDsbHYbE6LHHswAxN7xzpB3",
  "key25": "4757DNSdQoe4bQoZQEgxBsxkwqnroVT5PU1bvwVsFGpa1ShYMbUH14Z2Y5f6fSnerNLWqPcXyVnfMX1gAmcXPuiK",
  "key26": "5vV9dZkksrQYNfVMhUCY7ocgT8ZPvra31DkZHCtMpYR8m7CXMsA5xof5tKSvoAJXUTZkis8DYYDXaiJ6VaBixPw",
  "key27": "2vMFXUMP5YXExkeguybkVjDwbLf3pB7aJw3mGDV7tn7fBXXne5UfoBbKLZWXtgkn27CDvq3YJv7p9mjcVsZD2ZNH",
  "key28": "34bETm4NZVxaKtVZbQYNAGoYsVtMh6vniquDUL46XjLcSHVz1Qt6AoeQzzV2CKAhM6sUsKqVKVXHZBU3wqvjJ7fK"
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
