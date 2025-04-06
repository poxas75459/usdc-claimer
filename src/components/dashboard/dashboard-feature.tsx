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
    "2pLEaTS9EyGMkqvn7HCf86oeM3cw4nJ5eULji3uKyR5VJSCdh2dYUbeDYknL4FrLV1VH1Qkj7mLAgZY9V17szT71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k8SJCWXo7z1FJHeh4KwNfuVx41Z5xjts2dTfKPWWkGtDAF9RAoz9kDHp3TfqpkmmcvG3itDrg7tXUjxGdxsQxQv",
  "key1": "wDJs9oGRpSxRamwdRcWWQALxxtoV1ok1SX9MBvRzPBawYhe3bLCCAaWnp7vgUQqShpvZZWYyekSPyMGxJAJopjV",
  "key2": "LGJqctVkAV89JQPhPxpFVK7QQFSzci6vRJ37o1uPU8GSTHYQUn57PD8xbajAnji4XhzeXo77XtykxkknTLT45YP",
  "key3": "4yN5joiEGDZLwcgfLesYQ3JszwofHD1Hgrn8MY86i7kKcT1UwEfMjxzE5Xx6ro45Y2uYKHZtfGJsrF3eYdkssqqd",
  "key4": "32LTzjf7z3CRtz4MC98rmvVNY9ZcHJzVPs9wX4G6Nz3JUnDZPnidCQfSPTKqTvrAJArLSjWeFKGGggtMwadr4xVE",
  "key5": "48kSNqAF2F9TSvJ4d6DEDuwdwEtqv2zkSEgYyHVbRZ6kiGAnZonrbdspyHqsivP35XApUYMvi3pz485e8kHLMdnR",
  "key6": "3w1MdwwtuDYdUWj4LH4fbZFLH2zh1KDUxzGejAGsY8GK79zs3M3aex6WL9WWCnjGmpfsrdurhNpei1eEdxSeG7jS",
  "key7": "w8ZM3TzGWMNKeXaoD2HyfcmQSq4PD4AGHhrvqLwV26i4zXzA535MgZ1mTqRhW1acFk72JN1hj33JSxv73HB2npQ",
  "key8": "4rKQvSDUFbib2LzowDEVbKJj5LqbsAt8i9B7SoDcmvpjjs3oxZQgRgtaZkaJkt3GJHdGkXLodwG3NuEtR4ehcpuy",
  "key9": "3NMZfcfcoBxbQcHmxLgLEq5x5gHUjzKdgarzexi9sVW3aWru7mZU5zcqV6Joh2xWSmmfRWQmd4tg5FT9jERM13DF",
  "key10": "5NqsxasgUc3LJqE5NhFmrH6sJSStvWNC1btzqfQPNpvxFjxZ5XzhTaFTnksvN8TgM7qGC3TnKX9UVHuonhjQoi4z",
  "key11": "3Lmo1aP9FiyfeVZDvNUtZEBxFFxqasJwhPPTPQm1xqBbjFUseEVoVWJpAbCfVwzCCCMFm4DXY4Ei2TnuQ5X3xafM",
  "key12": "4j3kywquMV6xKF5zwbJuNZMsgmDyqqCQFN4C9JkaEPtcRW8w4BQb8TD1CQtXeErVNq2fn2KziRUqrAvWDhjU84MH",
  "key13": "4cm7oK9AdVy6pyANe5nEscZv5wwNpFk45aFEfsNfeoad5KDyUTYnt8xUXoNbMATWGAEMoPT4SfmYXHu41BugysUp",
  "key14": "5FwFqdsjXYqWmAwMMGmuQVL2P7y1WtLm5Si8E7K9QzrYnLLsRGTWc66eSdnt2zmGF5Gf91beAUioaFH5nQ1YVV7U",
  "key15": "3ZhCkuS26SehycU9JAc7hvT8QzFiusbcNznS138nXx3RYsoxvKB3Bo3aykh5fAkMXXZoXaamS92Hb4NVAcvkazte",
  "key16": "2PB7TG9omVRX4sa6GJ1EV61Qb2RYCqFEAAzV4qZQHEwoRer4fFAHhN3j7j7LxxcFP5kQNaEVwncw6rgp2CeCZNPJ",
  "key17": "5gBF27zy4dmgi4VGnX9oRrdeN4so9CDvZb7Z9Tv9RWzFBdZz7SM1re6bcCbhgju89AXoMv4vLdLeom7QAnk8hTFV",
  "key18": "3fMJNNYp7jJkqT9E5rvWN1xBdHwqmX1r48JSiRYjd7jPCWr738QuNTErk8SMFthPqYA5V3au6FaHNBvgDDqLX7nm",
  "key19": "41QcrvP1BRW2KS1WRX21RPM1R1zJZJdkYTNinBoqjiiyzNM6xcT9ByP1GDLiDDxK2bdY1GuiejLJ1XXpkFeRdaNB",
  "key20": "3NcSYFJLDWiCuLmHQsSUixYx6s8G3upBPxbwpsMfXqEBUM6ujZMypdrqf4k78c4TeXseqm8ywok7dZiL4r9QEKXC",
  "key21": "5r9DwVr191sGdhJnmAc5RRjiRCUo3UCrpwD6RMx9QtP6kPTub415tdmfZgc4eAQ2fBPho3hATCK3KJmznKxuxAev",
  "key22": "5HRACcG6WCzoX7EbH4FwC7pypYSCDUNDyYZNLPoFE7N8dak3nNwKr5aUkXBi4o5u2DKbTWiUpNi28hGNNpHX6iLU",
  "key23": "4Nb5QSSZZjw8ELSzN2crmZdkgyDb4dtY5cgdBh8s6FS5rQAMtjhtjPk7SZskR5Vvc2p95UFV4KeU9ZXyqWoTcSw4",
  "key24": "4ouPJQbrrDU6gQrad4AYQAdK48WUmTmK7KbXQwAWvJoE4Fw3Dx8fMMe5mjPvDHBue722kydBoqd5kJwf61XGtkzn",
  "key25": "59kzBgE1Ntivj9kpN7Hq7vhDgMktit7iJe29gbaZfnhpmHdxbbfKqcMYxNYrpdd7zjSDMHsKzFhnEwZGRyD9gJ92",
  "key26": "2xW5dkMZXiCGxg3AnhfEYCK3pKkk4HzYmpwMkecgGU3WHfZ41ZvtDyxv3PBT98fNKfn5iQYopCFjbCiGShSsVecX",
  "key27": "4E3kEYF1vApi5RXXtcZH8yXj6rGEwcibYyGeQTVkhZmh5PH9Am7QRTTdJBQnGpeRQ5iUhEHJZXNuvhREKGmuNwE",
  "key28": "2NFPyiKjnp6uQHQDU9L3QuNdTj3SDBppp3e4KgiWMn4JVBqXqWKWjyrSscpwXCGT7kgiEKUXSyatFFduyEMyhXff",
  "key29": "62ZoakCVgk5jwrnMNitBFjZ8m7bJK9pNs2D2Kd8eUrAxRkGYihUBEnx6axG1L4oxhgUq13o5nP87Uj7DXQxqLtam"
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
