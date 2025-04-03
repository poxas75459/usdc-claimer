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
    "obenUxFKJ4GaawsM6gELBGkohnmd5fQnRVWtLfHXST2oM5r458ZRQezTFpPjpG3Me6peCqgfGNzUEdrdwK7fJVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GBn9NnscBDpKkmshk95RQguV4JFgPgfLBkVNs3VfsM9j6ppU3Q6QLSgymWfJZEaAECt9gw2ja9n6zX9SPTkgfNq",
  "key1": "51X14bwcAHQ2kzmT8Q8xPBttmfxx7WvGxgf9nys4BtCGdctAHLMfjtv3xjpyXLbp39qbvVDXkr3QWBqhUzXrzttt",
  "key2": "5cKqed9uqFVu1Ar5RrqF4ZFkbUW8oa2ccWp64TarcGg3dyjGcdstitgQyvRhhwq1YcQXWGb4wmqAuCdLwkHQ9wQJ",
  "key3": "3WVb2umAzP9SxsxsU1fkCSVY1nFRu5peBW7hWYDmNz55SapwJ64wookoEpZnTFo2kTUbkTPxa7hcR2r1zeZq1QgW",
  "key4": "51x1TYiJMygS1p51jUxu9CjrRhoExeF8rpAMhRzoZJsEJNADpM7rg46v8MXJuW3TYVZM9TTZpw63572XHiL61L7E",
  "key5": "3tn8tFAMiu1MmQRrw7kLx1e9bx9DJqX5op9WSKT1e2gcgHGQTFGWvHhWYziZYxpF4zoQDUAEwUJynwMzfw3ZQP1R",
  "key6": "3Un7uB8M3GHcenRvvdRhRfT3hwcsLtHqQzcATbjMxsDP1f3QZTVNKwhHNJJgL58DERjPjnaZtgVRMa8NZdbkNEQv",
  "key7": "3U9PY4CwCytU861ku1itifuS8KC96ZB68psehVvfcNcabWzdceT6p2CzQSjLPawxDbLECWpu1iK4cj6YyayPMj6a",
  "key8": "5virUqfsBJjzqcycV9ookixE7j46Rb5WSsPwDXFLf6hnA3iBXyzZH224JPLz33gAyVEBouVR9Ghp6HYAYgB5dbBm",
  "key9": "3DXJjHXF3iTTxDN7Ngye6tKN8v9CTrBS5wv9nGk4MdMsfJDN9gfvySppbc5SLC4oouVacsK48wTRz2uxVcWZmWPY",
  "key10": "EZrzqDWARKzfR8DNe9mmokJaAnq42ENX9SsFeZS3uupNDXi7AAsGC4HyG6k9tfnQhKQhPD9AdEupSJuZr3TcLdx",
  "key11": "1G3qDf1rzynNTJoy2nPJDWKAYCdXiSQDZKbTBwu5goe4xESMf6jdHh6HKmAuPdF1NF8qkfswdd2X4pcohkZkUmR",
  "key12": "2vf5QwrmBfdu85KLcBZBpP81onMbmeAooi4KU2sd5tQDhczkFNRJ27F5ziq4pFWPesv97cix9ZVJhcexmVq5Vdgp",
  "key13": "mzcqEs1mwTTNdU1Wb1nWHZRF5pn4FjUY5Z5Hj1UmubQwUh94KHWcsEBxWfZ13aBgmB6t9vr618Y5meqfZ5m9Qd8",
  "key14": "2cJfgJxSnxJeQ7hzpiEXp5GZrrECfCKSphsifkdMUkRnEBNpVH2QQEAegzsFmqmiA2Rca7hp2SBgow8G6WmaW63W",
  "key15": "2KyjwvjLuU7Z7yxxh7xJEBjGToVNwbWEzbnL6nfjBwbaGi6GDeXo5zCDRpgr5Ds1FoPi9XM66ty7FkF61cZLuNk8",
  "key16": "5tzJkUVzCpk8dEV5zusfdP8MT7Gs2RzKoqrNDHrdmFpkTJWAULGCLQ2YDWALJq82rUhnPfcpGNztmjrArQJuVCdg",
  "key17": "Tzz4WLeiFRTwoR4YQSgPBr16hLn9eUvQst89EzLAAaWjDV5uLEFBKoHR2jsawPK2CAyALiQe8dtqbzkPDWYouEo",
  "key18": "4FBogz4ooajGTZtZKSEordjbGRNLt8GDk51QbgReduHRNxzQqMSQE2WjQ4u44wQfnJsPDtGhc8VdGMhU5gXkP2Q",
  "key19": "4GjYZ5WLeKXTm9PkJuZfWQSfYq1YzEBUQCGz3ZYoQ3RSBVPx8LJkuSqSh5Yz4FwL7toUexAagvTbY93r6YyECKS9",
  "key20": "2a7nMRpUhJubejmm32qgYrrDLmJ2s12TfJHHs2zPawpF6C5ES4FM74Cj271iwMMimxE9btY5a4gsZXff2zHSHWc2",
  "key21": "53jbLjkDBgN2chZQh77jvigQe9C7NHRR3PAyX2ff87bGQpw6tQTCmy7hnmLGr2xqoDwDuknnS7zrM8b3Zoqcs72u",
  "key22": "44es6RDLEfZEYRB7Da62uoAJBqXFsfSqMKTXwnjpets36bmfjKPtRRhK6sNjHVfonTUzsJHhdyLjrnbcYksHrj6H",
  "key23": "33972RrnrytTdRkm8cAd4CVtASXaTeuU3A2ZxANCGdQ7XXLFMvVrHeaeJP12TLYbRSCxxRBDgqwQ5JKdNmuEJ7kn",
  "key24": "5jYARoJ2RtZzzQ1wLJEWSjvsm2ZdrR5oqTTbCHjnirYt4JTf8qeUzCGjQFWJwuz1Z9xpCz5TD2Erpf93AzGQMp1b",
  "key25": "56QCcQE83aJpYfRncPDxVSa6z7qhGaEGETiW952feooym49mxvqGD1Kn2KS9vcnBCzacRpQXMtEuyMtKcDQKk9qd",
  "key26": "5mauf2N9E3uRR8D4N23gCV7gR8iMcvLtkgd6S8QotNH6xCZ6fV1Bbga2c9JZQPi7FRLtoHvtNQb7gAuDciM4FXMo",
  "key27": "62uhbKjZUNpdaaM3g1Swoexv24PvRkqzckfNzRXVVCu7r23yB32EAkiUqWj1VSmFRcHxGUrz7Nx7k1cJrDPfJr2K",
  "key28": "23wwvPGqUzS2A6n6ay8jNidiafard1Zth9qAPRQYmii7SNHf6znSuf3AeHQA1iAoT891752KDbcoRLkw9MNnne54",
  "key29": "2Y2GJNdiMSHCCWWUzzPrvvBuLDS5LNGjTQdDDJ8e1cLMUMj5J1SPntRyahD13sXxzzHmJCL23rV48Vpaa8EYHE6W"
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
