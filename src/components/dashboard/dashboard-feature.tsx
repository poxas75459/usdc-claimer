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
    "29ahnSqVgQ4JtVfDEnA1UK3GjqfXhbuwsLKphi4N7PrGLLZ3xxQg8emR2VsHUVpmofyiYffLZ1BxDXmgCZ8unGXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yk6B9aWpAN7bS7a7LJJ4HHAPL1XWMnnunp5gAvYTo8GAGZSsRUDFyzNsUszH5Kurbb6qvYFQaLhQJd6atavYCK1",
  "key1": "wMCH6HxtKgxND2aTripx3tGedt28FSnqxkzRvJ6EiNhqPxkw7CEzoPHdZ64SinPv4LHfyooRuTgfrEoRiHMdNoj",
  "key2": "3MrqG7PotYgCCVcCSt53Wh7Jwyr7cgCx893RAVf7poR8tdXZJfjes5usZZXRAudGPJt1UEPDykYFJbbndHNFp7AG",
  "key3": "4HCH1AWspHafMHqmfkBLPb8UKbwVS229u8mv5eWBqMN56aUyy6xWWsEiZwPe7NX2szhERFrS8rzwteMUArBFHUDZ",
  "key4": "3uHUGYk2Rarf5VcriUqC1RqUyumGXmbSbvXT1CnN4fEXaSDtv2MzsPZXXbL4NoGxbRk17cJm2kZ76ej3YRYamb7d",
  "key5": "23F6ku8nF5yJ2CNhkFNu6AHxoZXQWGXDEVQ1iX8j2STXXz4oFr9YAueER5d9Y7onaa7kyyjgG2MSXFs6kbbvsCQu",
  "key6": "5VzY8kuuenhG8QPczxud2ZUGh81ex2smRVQoXajsHNH3g3PM4yoVWu4ThY4gFHKVDBVjpHaRYvS8EfaaNZwf5dyM",
  "key7": "7GR3YNkKcVqNKHctn8rzRxJrxMcYBUUTahpbb3ezXPzyzS84MDvWJfLBnBNjtx5oPDrwfWChSE83sUZyLHkxL9U",
  "key8": "52ZwYcvJdEvYagJ4HGvqK7iNNQRUEVg79RQQ5FBHrwozCvYvYJ3ma3WYzeDF4sQqwm1QtZJvtDVdMnVPk9qKvRR6",
  "key9": "2X7iMBEqxpHfwDoVG8xggU6yhoz4DdG5Qq12JGS6F9peZpdrzsDxE7aKsHmfXuYHTEgzBa35jAS1qgdUjD9k4Mkg",
  "key10": "2BfgFhsCF41D1dE5Mnximh83LFsNRsnyBEGyTpGYBEasBgwmFMWdHDt9i61eqis41iFiS8JJscq9sCoTCncof7Kd",
  "key11": "3ctU1u5M83MzurP2Qo1brxuAbvYa4ooQsgpAdAAEdMdcQ25ZLpER5yFQZ2vMvScSY6e3TgPy1nm1afBWymzXUda2",
  "key12": "4nk9crszjhxg2ARYM5d8SfoqZBNPT48sHGRyruJ6z8nArhKgC5MMWLZgyszEXZtrdcKaei4UegUZkaPkVGeRZ37p",
  "key13": "hsXVdyjQMdH8mPPko9bLpkMjBkyHVCBqcq3kxh9mNbXvhz7GfFiE3vnxkYWGZgvCbiRrjYw72oJcGreoWEJJXm6",
  "key14": "2cnYwHMJnYMonKb7dzzEgJmRBf6znuu91PnGMUvPC7mHA7rRMHhQgUbAzDgjWihZ1kVazBdDXwwwyK45MJnJ5RpD",
  "key15": "4sGYufM2i2oM3i5fujbPHNKnvjiMy7FK2FLZ2nREwbfjzyz7rxRmVAEoB5wRq6JN23ZRAtJr2k6KDXmYVuLQswDv",
  "key16": "61Rhvv5nknbpoMpP5eNdfE9LDqrxu5spMjW1pHZZxkWWFShHcLbCCbAriG5ytdkD9tVZcJfg2NwGcW6zDcbibLb4",
  "key17": "4tWMPKNYy1u2eCbcW6ykQzaW3ZdaKR2iCFYpMCs1Tme5yrw1UoxuK5q9GdUdZ5ForjDGznfRm5HjYC7PaMfmG4dt",
  "key18": "mKSburGzpJQ9kgCXaVfx68ZYqJQFHy7WxF9Hfm9u3UAzccikX3T9FbRpmqkpZfM3QA7JzR31fonJCNwsaQKAbs1",
  "key19": "5kfwM5t3ptPW3gyjYxhrNCkbfeAtKFiiGJbJ1qzdJRBK6NDYdpLPMkhFarB9ni7vMUwJhpYvq6NvHKuGtXczQgdY",
  "key20": "2w4VASJ9RPEPpjPCShaDnP63f8o3M9uzJSfYczggvHciqjcdNTzzEygZyVeorqwC1i5yMbqWo9zASat4vxuMAwN6",
  "key21": "2RzNCydguxBjDkWf7yDwE2h68wvrLtm5rvALHjso7hUW9WtANd5GXHgoPHT8XpUsvuzL8NSbhkoEDbdrMq8wbSZL",
  "key22": "5FRx1hAX4LRT9GP5aQQKXnFBUw2k1wcyTScXuaHrYHuE1b9hSpGJhDJCak6ovjxhhYr4Yo7SPasRNBtFka8Wf5oC",
  "key23": "44qjGP2pVg92Y5FqFhPTQSfhkzUgMktgL7MiFbnsk4WnGNyLT19wNGaM1SayAfChHfPU11CmXdLMstDiQEqMYJBv",
  "key24": "K3WhbBU2o5goiVhpENc5MLwbP7ooxrpVgxBKypbJteMS4CcP4kQR5o51oe2ktM21qmAT7cqzuph2cKzgkmu82ir",
  "key25": "vmLDTbK4KvR2EMw9aWgQfx9D6xDJArsDf2RbwgKkCR3AFtbwC4jQt8Z7bz7dbyidFgiKSNSk3JRyCd8S2rnRSFE",
  "key26": "4TyqMGwsbvejguQJTgoApFC1uqUPYjUTumipmCqQbxYaBAB2Sp9p5UnBSq3QEhUUrpSZ9NF6aszJEqNytHrYe7DH",
  "key27": "4h8Ct2FX1nJhDm82L36e2zDBsen9LKWpJuw9ZuNxfReKZDx6SEG6ACSDVMbGXZekC76Z2UT6gKyquMQqKk9sFVaf",
  "key28": "5F9FRnmbdXYviZKHCBhFKCAwznutEudp8XQa272aoPwaRuWcwEUAUdJS5iaajZ5PcftM5BiKbvxrkB4g1Rf2SNU8",
  "key29": "3sVBjvu1VHi1QMWoheQ4JrzZDFkFTRwCw5FE9oz3cJ27sHQoChR2g8a35Vsg1bqpomJ8mXmAAWDjATsZyj11Rx2y",
  "key30": "4omv8LdFpQeA61HnSHcZQMchoGXtWfHPR3NQvT85gbtF3caB2uP6MWqExNEidou6WhUdmDVE8bHJfAi1TcAKujsF",
  "key31": "2pdUUe7SS1E9E22qGWWfstsS1wVBPmBGErtbmvJAe815aC9mefEdNJPPdsEWpQ5YPeKTEVE54vijYHxbhfxArgWu",
  "key32": "5hExt5rGmgc5QGD2skxfCeMrmPLPiCdofB3PnDfxih9bP266MGVq8JQZA2vu8jFmskYVYxXZVFG2TF4TNWdJfiiM"
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
