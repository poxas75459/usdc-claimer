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
    "3G48VcdDhkH2LnvcHbPnbEJzrMEXvVj9Rct1C2ziGkJHzacezo95aSeXmwQApvEM4yZKfb1FFBntJgkngXUFVnyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "erRDao1hSmFzzuYYSza67726YxJHV4es4ZMEwkq3LSwu9pgzKQWfRz2uifJthtz5ZjWWHCon1qDbcPYr5uG67L7",
  "key1": "4LiKANtYtmaKgTij4RPjoB3Wp7hZ1rcfqS5DrQdWQEy4z193ki92tSCLnABKKk9sE2KWPhoSKZXAcEvnRMmasmrs",
  "key2": "3xStwj1Hurckefbr7H1aMTzXs7WzD3kWCZ8HqQW4Z2VYFLirEGghdknBJ2rRZUhZxru8nv3BNdsepEF5e2dbcpDe",
  "key3": "4jEdqrubbTZpo7eREzAvYgdQi4PcCEo1yWeAdmBv9oW8RHJZ6ZCJqCJyrj7ktiuWw8WT7A9HBKZvkJqhZLFssDEg",
  "key4": "YQoVrrihfmPqCh55BwNrVQn6pXC8AkkcS8BCFkhDAP39MznLxsG2Xn3hpzPuFEfEguc9VTrUT5z8tm5UeYpbic1",
  "key5": "4JomzSKUgnpkXbamVhkVxXat3paBcNR8zc16qcmSLRrZSwTBuAycS2MkUW5KV15yVkVmLc8ejjEiEasxwjrM6RV4",
  "key6": "5W1d4VHPSMKniADeQB5emNSYP3UdKToxYMZejJQsDSqUsMN3zwLeaRcrvf4eBrHRcAsT1cmkX2cBhW5NGiydn6qv",
  "key7": "2m8kpVW5MaV4WS7xrEP1YnB3XwPxnrk3fhppnghUAvQJaY1zzoYu512D6LtoVAUemuJybPeVbkJMT9Rx3QunSX97",
  "key8": "4BD3cwqxgaKgXPE6TPR5hQQaGsvygjJxKFdCBSjnfoizMXnEfvZFJsTP1dNecCwqFA7PRy8JmJPH7jvDTbmqP56C",
  "key9": "4pHapmoFNRLpMBQYXQHSNb9pEix4ZoSEhGSLqESBqJjq8y1iYFt86qFoJiN6k1cT24ceBCeDJzfS1aVPHtwSxgEE",
  "key10": "cUA6jovaCD8gskWRfGzb7TcMBtkaaQLwLYhuzWAUg8zRqQv2fhEfCqrZ3wa2aABB3Nk179DbwAeZdNAL58huwP3",
  "key11": "2CK4VUec3By1V2YapR7zG2dhPW4qbmzcxqwHW77LMa441Gb6geKbTSjLQ3HT1BGaRTyYUD5yoYTVq2GPZJL9rTcE",
  "key12": "4uMJ3u8fdJiUUPag3zQC4FHpgv4nQfArzNgKNyGndXmojYW2QbPnHvnHXTPAbkmNQU8pPgi9AgCAYkDC4onFmnj3",
  "key13": "3ZPhvKNjHVC4PzsdiKYB7UQM91PbdB9rvdJqFw24Gbsd3PWRsfSsa46TGM8s6U2aWHcPEbwg62sh4uVYoMdM2Ysw",
  "key14": "4wxSh2cPCFk1fUtpzNYFq5RBQC7rgwcXRi4HxBjEAgc8rmjEDAt5kqWhfjTJoMKk8xW7bHxvGdrQ4h2xD5aJTbPw",
  "key15": "mq7UuPMq3SzjF7WA8LYa9cvAUfgbXrCGaS2McuqCzSLP7DqnVn1E2ZRiNu5b3oELYq79BDjwGGHfvXoRh7FDph3",
  "key16": "3XZGrusa2nwv12hFbwDrGeVDYkTcSuVM6GsVPm7XtTequ2RpvWV6sjhdfrHN2rkhgJPg9XyesYyvP1DFjVffdC6z",
  "key17": "XyLuu1cSN6HwJ8DfMhGAZdtSCC2ihGu71ncNBG7fKcbr6aK6TurKHtfPWDCcbtSP6zkg2w8GXjMVpuvLBHBjNCg",
  "key18": "4CnyiuYKw8T9ANxBZ9cFnYZQCueuEs74wdJizXeashLfMWnQugQvpL4dGaefXkfjCNxFq2zd6E4nuCCHLtxpRuUo",
  "key19": "47oC1Nfs5u9q2kGkrVj6GVPtvhAdjuN7yuv7e8Q75rAzk8LgW6FyoghCM1ZQCzemSeqbVvGkhUU2hhQ5ZcJAnBVw",
  "key20": "5VopFwsLUrA6UjqPKeE3ZyNXNxxMy927yqX458nrCbTwHjCrYDVH75VCkwK2AsbmEqjA5o1hrjfoAQfowdC9VodS",
  "key21": "5QTvWmWQP8Fv391Q1DyRxT5HxjWyHadSmaPrRfsbAW83PoQpnpPHT3VXCgjfE5MLpoC6LQUPgsUvSqNEjt8iWnut",
  "key22": "4h9MefwmT5PiXDAMQLUTKrNmTktrRSsct6E4MkeDYZsyBn7DRnDxQpNaVCgVENJqh5KSBJj1EwSBy1Ea5ZWua4xt",
  "key23": "FqB1X3w8tSFZawrQSii4uufMGjeY8brPrwKC3Curtaqfr8v2KeU2yVeVXZ6stVAvMKepzujoDgy2AEvJUatf84h",
  "key24": "3uzTrmBui6oyhaoG6SeuZuVxnQJfUkYNjcY6btBFSQdMrLdoDvbNkJq1WgnHAstgqCGh9uZCz8mU9FMuYFhxVhxU",
  "key25": "4pzuQaYxwbCpVVmgYHYB8Wy46tQMEsstLvm36p4YBhrLJArNHnJVbZwQFUtdyT5GjsRWuXebULBvXRxrzxgSfr8G",
  "key26": "47LyZYpdjzrMmCp6WL4rwniw6UeH35p8CiGonK313Bp1AV9DDBYz8U2Ufd7Nx6xJ96sKvRc9fbq5PeCJ1QV21wkm",
  "key27": "vL9PK7YrUYcSfRPLHRERsCmKY4fbLFNDLbu3i5FWPvj6Nyto5pGkd91xTdiC8wdiwpYDcYLqF4Kp2N8n1sUEigs",
  "key28": "VZCXQSkf63zANuJG5novJNN1EjjXzHxKqJgEsuMYvmUwCiaQpMHzDt9JBpKm9romqiHoiUxtEJPKE8aaB3kWWDU",
  "key29": "42NaTBHpQDuBuj4kxt7uFLaCq6LqJH8KACDubyqnC21cTmEV3foatQPfP5bL6FX4v7PctmAUqpJLWPVZCfJKYGQ2",
  "key30": "2gnMFeUFUt5CG3ZHpBoQsVjuTZHC4sP4mixbFr2GxcaCmVVBiEiW5hsmj36pbPJtVHMtxCtJwKJhCkVvQEFLfMrd",
  "key31": "4QwrMwJMLp2jb5KnNTkfGcmhWC1WXTE4VyZTQqAFczc7tz674cSRyiDmeKqmyk7Wz6Bmp3akvnF9eaBsx8j9fg3B"
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
