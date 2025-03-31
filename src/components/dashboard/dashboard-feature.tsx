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
    "55wqS8DcM5YZuU3U58iBKHw1keaxpNCPQv1r8mh5JAwNcTWd8StuhZYedYpfpwoChNvXmEnb4EVamsBJjdw1P7rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abw8WLYXgTeisa8SGRTeHNZqCMdmnjK9cUDL4m52QCiC4LL3s1Ga6iDYNehnUhteVXnZHzHQHHo8J7wRGcqhqsW",
  "key1": "47QX4yk9urq9c7G6poXfPU7YUFVzwWmB3WbjQ8327oEfvwiY1UjrGUQtE6vPbFMnEg2QzWnaZ1sfCXpcne8SZh42",
  "key2": "5iLAd1zN5UBbvBZjMbKLvgf5tzhfHtdHn9BvtAuAD7s1rxWPypLBFgYq7iMFbUaneXRrXdSgqTgRQCjDecnSXFrf",
  "key3": "4WNEJi9zXJvbVbErDuN22Y6qGewXeeLz5YTQpDGENUBrnvZ2LbUo3NABkDzthtox8wezatd9Z2BWK3BY69wgs1VR",
  "key4": "3egRtcde4RzW6URE1EjMKobruMCtqC3kNToanPhtWTJ35C3tK8qqzyKekczF96zCSQKNMiDd84Wenp9wTc32c8zQ",
  "key5": "AwSjRYoQ4GW5uUy5Z6JdZnKfSRftb3FbZrUytP4ktodQhnDGmG4wwW3VeLrPpZJtve9Rbx8aPdourh21DnV4zn3",
  "key6": "38zQeySXhGjX6HfE3h5rwxAhMf5Lg4ZD92myyHefe1b38Cya9p6pGgwgNExi5mKDWawiQGbQeAC6D5byMQdmZnCX",
  "key7": "3vuv5dvhW4ot6icvgiwcHhJmCCs3jqkptXhcbWZ32wrG5MBbZykBh5ousnSRymmuUtZPtp3XKfUD89YKTpf6b1cL",
  "key8": "2buHNSRezr3TToWD3nMHeWoG88CBFbZLG5GQ1sq4GTG5fQ4sN2NJuJcoAQyrjUzwbQWKcVeXVGzpDz8fswFWUME1",
  "key9": "Ct3vgcAPtJdwCVbyzsx86ARgcbFyCaryR1ZooFmxtcMvr5H5geRPVn6Ac68VF8TMVZhRckVhuz3LQHquSWDFnU5",
  "key10": "5NLuT4jrDbLe9miJXfY1P2Uuj6MYBWFi2ZHei8ZBwfCZDCPGHzUARhGf8FeCBEKFaoXL9TQXVnGqPphZ2aA1JdXm",
  "key11": "a8MRBxznDSxxoNGAYUnUpYjiAqtrzhazAb8vMoa4TKxc2WoPutvef5Fic8p7PB2CQenh2ii76E931acT9WNC43i",
  "key12": "5CY2jZrRoUT4SUDjXFbdm1Dj27izxkp5TVhsZv2uoR1RfsnRSSCCXtJiWHBS6KVVJMzS9ekvjTahiEy4T8EdGnK9",
  "key13": "5MQZuwVaCMeSnu8R4QvzHJqfnZREURuymTAhfD5VQESR5esNkzoN753w2RMqf39dDMwSCjfFwQmEzPwaGS4z43YT",
  "key14": "5EeUWhU1Mzu7m6v44mGnqeCJ5GoQPU4aba6ckdku7TaDMBUb5pBwXBGLhZXnCJ4rqjnPoM7TTXQCAU3Pk6vJtmvH",
  "key15": "4C8qUi6twLck5PsT9ZJvJodgiNWxKKjjpqrcvTdwGsd7cMxiVq2PPgsQvesxyvfzfKamQefSDLkR8icToANFac88",
  "key16": "4fVgT3GSUScPJjehJpHnNQM678Nqw9DJE6koNfyw82HevBc5MNPzVmcfndd2Lr8rCBxrzRunJCKwst3TRsnVp1Sz",
  "key17": "nQqierKMy4aVqDCRhBR7e3J68eomamd91acnLZfBDSEXxpy9X6KA7ceYohAW91hW1PtGkqeiNsvDnbxV9Us5gXB",
  "key18": "3iX84S7rD43yq7okmrydJ6r58ZdV7ytNKPCK8gD7QPTaN33cFumUQdAEkvv8WAPHDPcbTv1WS8wyYvYd6MfnW6cS",
  "key19": "ry9uBjvSUS9tbPAjXcPyLv6sq4v8n5BEnq7Uqcna7C3XgUoy1de3odxBvhwMM7LmNCZ2A9nMQTqEsEyfi6TubYN",
  "key20": "4XBU7QLkrzudzXdJfRzdeEYhmmfq1WCwVjGbunQwCzAwqikmtYm3mSLin62eADJzMLwrzsBszA9TtJKMnvejAQxj",
  "key21": "59WzoPBNr49CMpTt1CpqgSQHEEjPXSe7uVTvfjjqriumY1oVmnMKYesaa25BHwLbxHVEo5LjJByyPTKxQ4FUCDbC",
  "key22": "oP3h9p4WwxzoEPL61AYZrpbJ4969Bhu9cQQ8bNVSRFURR2DL19ckRqEZbcd4JDTM3d4Xmrb7iyqBbfJp7TqQWef",
  "key23": "39HkJKbw6GXsm59CJaeVQL9VMo8yAsoib9E1thLihKZFotyxz4DoDYoEVsrGoygYqKUAFCxFfkqUjgUqpmuCkXbE",
  "key24": "3sLfAFL6XRtQMJb98iCqScMQCvx5QHbL5MvL8WvzCipk4qoLkA6xKrfsSTeKophyje1bJeqs3U7qURKDjXkNj5qc",
  "key25": "44uZB9SY2irm9dgHUngbMDBGb5goWjgRcyBUW8aGCVhnQ8E5ntKFbJ592RqYohSsq5UMVEjBs1kd3QMXaLu6LJKo",
  "key26": "3DdRte8Ei8icdyQVh8JNZCLj2qqD7npLC5Mbcnx6uaCMS3vmdQhLoLfXAuzQevjz76Ja4QknWbL4K7qFcPs7pV1h",
  "key27": "3qf7CdFKkqjgV69M24VSbQC5urvKiq5eBwMtyfJjVDbPwJxu7gKzyZ1Jbd3qXgnaYa2LCBQNUU3egoeRmtLdfsC4",
  "key28": "5oWUBEKjz7zHsuNvxeNFFvf3F7Rwf79LGxFcK6z8oBVNa8fimSAk7ARbF74QRnMXfTgkKCaN1XhgmDCf4Q9diw9z",
  "key29": "3fEQJX81XSturUHJB1oFcknmCaUx5aN49PGX9NnQ1y1HK2wtxG3zUJkYmYz6tcmfTpBftb6yKV6Kj9ZbDwjny5wh",
  "key30": "2LxWGYALzVdSSMctzBgs7vsZRWtbbnNcgRLn11nDgnza9EGKw3rdVrPyBt5Tj9zo9tPtqUB1UZjpuA7cLX8DUdWs",
  "key31": "2oyekXB1H7tsdm48323DTcQ6np3xFm5j1AaG7SS6LEZjYropeAhr9cayRRpv7UGabbxFdGK7rGEHUbRaiyxsQ1b8",
  "key32": "wBAFFXf3nn4GaXFbNVGtnpQhchxatbNzvWSKgV4u6n2txZEC9pFzVt7dkeCKH4imgV2DosMmx1onZXvGnseRHq9",
  "key33": "4DYKGYJJzV2fpB2dk6F2t6hbD8kM4CxPo3FvZX3LcJ78wb9WW79eZoVfV7ECP84mJJsusHVfEzJB6ePDX8S9uHGT",
  "key34": "3i51Cyd6cpWGgXXQMWkcsZcrFungLSZqhnjzardZgzYFfoxRZMW3WHdHKiB9TtnTgLvRDw7ChNLCc96G35R1m4oY",
  "key35": "aa2XJ9BQPuAXWbj3WVbeRJ63N78J9GwyQxz4X8tTpWrAQ5evJhw3Mr4rQ1nYArBL6j1KHQJqAhceHgrMhuCmXHd",
  "key36": "3yLQUgGTuyQt318o2z9yKgkSZQTNxjYbiVdN84BhbN2cy8CLefQtBNgvyWQ89Z8aKa3fYXeo1JTj9BH8TnNooqJK",
  "key37": "4HdhXJ3h6iMa6GrxWGsuDdTBrBPgvP2nPWjwxZQAJCVfnq3kjUEsATk35BSh3V26gmKdKs4WifsWHueq4vTYMio2",
  "key38": "tbQNzQ8kT4RCTUsiomEExcewLmKVfEDAgHJ4Xzr8o6ByVy9h1dzprbfEfPH3gH8C4xVFY6ahvRRWhZfG95oBeXw",
  "key39": "5YJhgHKJnWQwKyvKYUxESvRga3q5gfYwzUFFqUyKcPGPUCPGzdDD8MBTTnp9L7sNPnd2UPbqsne9FnNYBmTokES5",
  "key40": "8VTmqDu4RbyJjAsXsZXRJ6ZuDnfg9fiNnPMM9vMox6YS4XDVEo6a8iEDZTv7tTqdkbxZTpx8J33d6i73U3DeMVB",
  "key41": "64SDxcGXvXr1eJ66Gv2cisp2AwD1QaPmy3DpogUUBYYe3U3gRSMjpSsPD45a5EvKrrGehamjhKjPvKZYU7HNt96g",
  "key42": "3XpvL1eZ1NrzwVqUrcbqAGBVvsHGuYJXvHD9uz2BG2iTT3Px5RYUScYSDmcmDyDbtvbFPdrjzNKqVSvvwHzRQTzh",
  "key43": "492HN3xYY4N8kobVufMm1PaUzM72QafCXs5rKjTn9zX9cqfcnsq4dG7zDfDkEGNtY69BJwbx73QQo8d9DLa8ACkN",
  "key44": "32APv3PqFvMNoJRhSjnaEuFHX3jKJsqmDVQNFxyZxbLv2Q6EBnWJdxK1tXMz9dDyQyy2puKMMt3FxoZvZ6GhKjsB",
  "key45": "2Sz5wt351RtQfN2rktVGM31JrN4dVS4y6Erhp7z6uVfSazzqYcuyimyVxpg9ArWPXxmrZBM39ZVWmQJKeys2ceY8",
  "key46": "AkoKHyB5XZdp2aofVukqqaRi4qEKm18evj9dCJwfrPsCxARx4eEZ2YKPpwtU2c6qwRHEsJ9JbCg5Q7JWA4JTXX5",
  "key47": "3imosC454ARp7Hvzh5Fr1q8h7txq1RRZieRADeQpTkUCeQQtcGz7JqGiTsxvpdKvtbr43dL42yhkosUC3bX3Z8Vs"
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
