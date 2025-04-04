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
    "4KLQfbZ9nBozp5XMXnATfzxubwhyEN6zuo5KHGEAqXbBAfeq1hwPTvwZCZZtJrwRKr6dJVdZFmNsNfnfTQrgSjHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4twqC2kD4jHSCgERnoJwscYQhwqzEik9PRmuyif4ZkftNVPQWNqze2Wz1q4RTULJUYmUK2qBRNwjh3rAK8HfoYkH",
  "key1": "3H4p4zCXrutjVGuEUGL7jEkuaYCgh7jGQR166KyeDFpam2kkopQVXqxTJupPKyHeBaBSpYbpRXbWLvnE4o8LxbD8",
  "key2": "3ADhCAgvqjptEvSd7yUevJ84VuDM2dXZAQ6jAwhFJekGTrByAhkkeq8kVc2p38hwP79CFNsWyUQRPL83fqwdGxd2",
  "key3": "64F3aZ2CByFwHBNUVgtHvBUuWGS9JVCWU5zrASgcu1hyp3t4WKSFcgijfQQrkALE4ioj3h7vdNPdTqbrBRqqa2Bo",
  "key4": "rdLenMpaCx69BSMnDYDwtZ5wZWGZrjZPLCAWrXAFm1PBTZS3Zf4qy5Z2D3Ut8uNTSn9RA8M7RtkVU5nwxNH99Jj",
  "key5": "2aGY2X7MwRbaFCL4YgYuVyJ3CtNAjUajiEu5GM5WWYUnzgcmpiBggYdEDhkyqfCjE5HYVy74VGbVJVDgVAJCGnx1",
  "key6": "4a5EBQHW4kg4rGWDZCrmVoBnmfaKj2u9LUUzH39oLb71BMxXhyDRaMKZZBch7z16KdvingfpgeEMUc2GFuADAqQS",
  "key7": "mNb3PrC9ehG3AvT8mMpDzgHkiiUxt8NscdwYQmAjsqFjkGbBAYYqBrwnskDo6CqpZHFVdBZCgYdh6gXkr8jpjaH",
  "key8": "5Ye2rCqi57Tk8EuX9mXgEC85tXXty1k5aSC574YjhH3rp3BNG3KmNMVAMcfYyiZadge1UV5myZBjxvW1RjtXDDWa",
  "key9": "58wq46VCRNrdFNoYkSA719wYW18bNeQX7XvtDyxVNGdx9Qk7ZMBAnGi3Ra8CUBBUaK1B47ki4FRejp2Hm6z5bCjZ",
  "key10": "4VcSVyo3iqGZ2MWvEZUvqhcKGGrP3rcrseuh4d6ajGXpfQ64SvheAayUXc2MRh4LUf5Vh6FTwM4rmx2vis8mSfrw",
  "key11": "Pw8Mh87WC4i3kLabGkJfUjEbNGZz8wbRt85XHQoh79zyTdE5wX95CbbJuR4dDCBFyoPRKtsdeqcrG5F8xZn4TZ6",
  "key12": "iVcvAt62fi8jB5kknyfbCHVQr7TSisGUtAQyxsPUpxdbepGS8EsMGcCRj3UTS5jeHSP1rPP8ZBi7gtpnwpdHCMW",
  "key13": "3vNfYmaocCrMPHi6k9HPcxntptBA25q5mam6uE37dDZLUoaqx9jaqJWPvNWcMs2Yk3TRLVL7N6dDrxcZ3Kx88iiU",
  "key14": "5eYjXGJDJRgPZRSP4CciZ5gKZWfJgi3oqLdtbipirRM6j1H8xtixgp1NHZomQuvSqPbNi7anHfQrsNi881x4uoN7",
  "key15": "2CvfFZUKUfjBVbjfh2wfzRD3Z1ABbKiQfuvXrqfuophLCxjZ5bn2DsafvYJZCEmzJNupUtiyCT4p6ykxdkBvJpMB",
  "key16": "jEkrpSNutjXoTChbVxea2GiWz4bkk9K6ifrCdDkWXDHiu8vWHb8eXvh6RQ6uKT9xNqPQaT1nn1j6cD3sj4AsQYV",
  "key17": "4huHG7JkH2yi6TpmSpu2v8U8f7eXfbv1vsrqJazykxPo2Bys6UhMsyLRN8bfaccGQZfuWsWVfZtYyif2GJb4yrgy",
  "key18": "2CwBCNGWhsfgcCCBHRrUGMe1xbEuCKuDPAgEW6UhYrxzgoHaSSYdc9qrG8WkS4jht7GXKJbZF6XFNH6aUsgFxQ9n",
  "key19": "fdALe2LLHhEQKg3qQLeumnQmtxA3TXmBWxdTUx1k4HQjFvChckJUpQYf7Hsm8jdvbwwLujcgmZTwf7R8ebjxktY",
  "key20": "53jGe3oKfRBgyLv1LYj5xP8ZMrM5or2euHv7Zxz9sqd7QqGKBYenYdQjsWQH5NcrAGgU1RuNnA6Ndp4aTiKZGujH",
  "key21": "3D9rwhVWTtzYhxcmNng9vhPTM7ZHwUoY1btKfXEwu4ZQJGNLAwHbW27xKDrr1tyKebP2Dm46PZyUcMJcVbTGkpaq",
  "key22": "A2DxoTf4ojZurP4k6iK4z2MYNvFieQCMDY5EzGHss2odWjTewx1LtEUEBteURbFviJazCeJs4ns6Vjr26tjWVko",
  "key23": "63oMoHZWU6PGTMDVhFGvYP5vpPZFX3uGiP9cuX5VCd81f7vdZFgCgLYGGoAhLXanvGtZ1wwR9yFm8mvyALRf9hKj",
  "key24": "5UJNUaMeNyaSBJR1qpAZVbmAY7Cn7w5PZxqrWspzsj6yZAwg8pzWcVstaBpoK5st3bQg55653gb6Hi1b9wt5nBU",
  "key25": "3wp37raTqoMuuxr3Xd6qoueqmiwZ2tckoKRisPMnPpfn9zrrjQCLuCg6jmLjwMbzrGZktDgQJJ7z57FBmnEZH6kS",
  "key26": "2kFCPU4ZJtNokQfpPjyqTbj8xSoMCHgGWSs4LFfX45t5dDT3hvJxqH5ptUSjqVmuHxfctV6iVoB4hkFB1S48SBgn",
  "key27": "5T8chr4MiVWeGu9QoX2nrarnCk5juQTMQUXhSZHbXqADqDXUEAWnsVycKAeMviXAPkiD7h4NEhU43kHyn7EbLxsg"
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
