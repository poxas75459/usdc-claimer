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
    "27XoD2UhChGSkbZdJwyP52AcFTFRTqBXWCuFwJBP8e1hQGpNcuS7SbCPDdKL3tTP83rz18kkZCyQ56NjvcXwzqsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufsbLC8e9JyfmdPpTzUGG8oe7P6Bp46Lmaxa5LiMzX4BiB3rSZq99WBU8wYxz5os1HyH1Me2Qrywy6TyZFXGyNv",
  "key1": "WmxDaakArzdatwdD5EbWYCzCcaawbyZqq5GoCKsjvrs7XrAL7nwe7r6nk53iLCKLd5rUJr1qURN8sySjFFDn55C",
  "key2": "4hU5HJoVWBYgUwJgvbhyAUtkRXQ4CLxaDEYkTr2M27ido1dx7JhibsgjEwKrAb378eD3afQvX8YrnnCpU1AiNtsA",
  "key3": "44UhqJeUge3sDuGDJ6Y4sZFduVLGeuezthrekBVnV5wDaQc8PomJFXwM4KW5E5oAmQyDnLqSrpMzzxKonx7MQD1N",
  "key4": "3nJLgtX9Dcx7dYsc9pRLFW6zAXPrai3iV7AJMhk7Rp1R4sGNfAViriYCy2bQEd87YVPut3vZFqRdhvzvM4iYXDnE",
  "key5": "5heUW7S5ijHFBrm9V7nrgAH3e4T74V1GrCpdNGUdjoJjEkp6QDBGruACobdPbCm3aAKC1s57oB87WqGhPPq51kHP",
  "key6": "Nc7KoNqoqQJqkVS7u12PwJwEmrHkcV1L4K6GKUdxu8L2b9m3JAftjxLhYqv1WrfHYgsDWDPNgKeXR4U9PL7idyn",
  "key7": "5LzpGKrhYtUd1Nx3XAzhH9Pg9AwW6PTRE2HXi5SpVvZH3stN1qCqxNeAqXuVXku1T94dVwpE55wZ55bCKU1fssf9",
  "key8": "3zZqJnFRTzsfrX9KtFVdmXrQQpGK2qk9MezYDouWg9GUXAiXiwx9GbsiLhW3wYZSM7dBnf4PYLTahGA4c3CtCMu2",
  "key9": "5RHX3fwM6b99KSXDHxVxdS18i8kM98VBWs6TvCqy5DngHcMXTFiSHmqCSyBXmcRqZsv7c43gMUwJhGbhekabz5Tn",
  "key10": "GA3AZnhQTTxuiJTD83UheqtECkxitpuzysxpHLET8Sk8VNZVod8EgQBB8xuNEXGSWLcwsV1zbz1i6TxKKLZRRrQ",
  "key11": "3abNUMCN6ZyLw7BhZr1NGHgrDUyXjPGFsD2ybBEocrb1zZ4YpehWtgtz1enzFb5XEGGXRf9DWoesJUpX1PYo4JhH",
  "key12": "hDwLyvVHWg4eGFEJUtmYkPfusjU2Zv8gHMMuh1ifYDUHkpmG2QSgAN6AhPC8j3yXHxyQfFEba8uB4wxjjURhaqu",
  "key13": "5u23yie5bmwwVQTTDcp1W9fcgBGKaHQMGQMWDbSqAC5w2aQW5Sus2cLSkvMD5vN1iVbRHiEgNkiQVCWqjTSCqoSf",
  "key14": "2Pj8yvaB5Kskp8sNSzhHejnntKAFGY9C4xNhKrmDaT5uk5wgFGeqXSU6XhE2w267z8HyA6r1SQFMbes2VyFBRwwN",
  "key15": "2nb9vPZCuTwuuNKNRoTZ8nRzcbA4KX4n9r26yEwExgSBrXoQPGaFGGXgGoZiHbX27uj2iGTW5Fro4tJ1k4arQCdR",
  "key16": "kaK7tRt8v8sr3UJq4MhyfXtiwxntyCXbjoSLGgisCLwNk718vZVzCawHDo2RofXvyuiX3Mo5gJfXSzCmiuYVMHn",
  "key17": "2nrWY8HAJ8inGAeC8EpqoBjkoPfosynrFYe9MHc3T9NoTDXc7PjZwiJmtDaHSWYDA9TZuLPaRAkLbwxaAEqHfiUs",
  "key18": "4DY1yykGGuujd6fFnaMmxFRmSFN5519C3nX15A889Ex8N5MRkr6DTrSwntBBqjVEEAr4tfMXVSfEnR4mWRxYQ4tR",
  "key19": "gpNPvvHkaeqJPYAdzzWVgWZpVKezcHPQgr3oeJ9SnLSxXAMNsbyVeC8UXaJZVpzKR937Pr1zcmztgmMB3Pr6wpQ",
  "key20": "3uZWbqfgu8MaUYmQXdiJgpxqvsRrk7DB5ZFedYJtxjVNyJvGJ6PJHyooNvipkPUaxaEj9fSw4wudrw7ptGSJYPnS",
  "key21": "5gjTESd4a2DmagFDFAJQKHWutP3UYN546LWvkdpWRycMK2nJYA4GEsbhVDeZmiZ6zXnExHcLeqjQW6BTTWMRpEZR",
  "key22": "2GuHMKSL3hycP2EhoLmvZiX5WtNSiaexKiaSiRKxQByLDFrG7GAvuAHRTX3VNtoEBqdAeNy7xe7AtMeXUd1S47eh",
  "key23": "2t7aoq2dvyCk6BwnteWSeU8VkjY6CR4kjaXTtQ9dzsp9mkEh4PSqBKpyegmcdGszEThU9LD9pPFnbw1sNn2YYh38",
  "key24": "5emqa9gur3o9FwmbL4zqXzArGN4EEy1dyeTXHThijpaptztQbViG3U3RA3eG2En9fNLmQvAdFH7p6tbCjK5aJmQM",
  "key25": "2q9rWJyEcV3Dii7kV3F4sduoKSD96q5W5rBquowe466MFZfFSQBxoi3MP7K28M3vEm5uc9QMNXAUiuZ4CYcbDJLG",
  "key26": "wp2j3RSyK3GoC11CkUauCrr7xH9si9FHzjGmhhMEuBZWsgdz5fE1z1mroeyVj8wCEhBnjhfS1x1FKmX89uL8CC5",
  "key27": "twF4qEoyXuy76zBhQyRqVW8SxJAuAcX9w9fK2h2pz27zBWtsnHgXZKSRis3tZNUVxP43J7gJE8NN29c79h7BXcj",
  "key28": "3r5uwnq9z1yVqbkH5xxzYawMLh4oRG9GvKE5o6tFbeiVB2e17kiSCzoNXeyEiR9k94iLKiStxsCEr72btF13i7AC",
  "key29": "53XoGEHCFtLfHqAnfRTqhN4N6CLddpmWm8VRDcSjTwDaFrdXH92N4uUfn7X5PXZb1KT6dtfzricQGAz9MyABnvwe",
  "key30": "4xzs65KiLVsJAWfPTGPAgTE17HUhb9S5iDpHENeYj2xA4tVYJtGkv3jvFNRSasNoBE5QLssUwjGi9YoCFwUUvsna",
  "key31": "8eYf2ihWZe5WX9phXuVEwJVFdWGmxzuvstGRLMJJfFzZNfrnMKb6X47MC2j5KK9PzF4umw9VMwrUagcyWyga4sa",
  "key32": "XXCVexiDKsPxm4rZ7u5qoEqVRMzJNWxVcY8SMrif5tL6irHKUWAm93BmKdhUWWgX7C7AfZfkc8rBdA6qoeivZXA",
  "key33": "3WGEGoV2ojFFPhqxkesZKBAYbfTgmQU6sUXWskuUwAY8DxEFc8rfajmMkt27yYcyM4QVdToB3TxDkM8PkwPtrZaM",
  "key34": "3iwoQeT7LEJc2eZVLQYb37nwQ2PbTcfeuLqQNyMjtjUcpWFL2EEztaWgMFcwuc2TyEsEuv5YJTBUz4n3nZ9Pk3Rq",
  "key35": "yYFoQbrmcZB4XY7FSATDq3HA5dwn81BsQGfFzQUFMyGA7rDZNPQPi6xbyo6JrtKoHEnbYW3G7xoMiUbZ9XH8SLX",
  "key36": "hXJtkLYL4iZCFMZFs8k7pKceDDwGaxiV53tE1w2kpVUPUdA14QKaPTfyqEYxZ1Bee8wcdpRbXWxy9Cr7PjY6WWG",
  "key37": "poMm3yU7kYpaNUrC6oMmbe93mDz6Xdg5SDutAi1w7X1VsdWA8scMEXty1Y3qF4aXotfnmotVoAaGenXTmbjW54d",
  "key38": "2TCSPD2MUmAA643XW7fFA4kCZYav1ooFwH8FkfNHxc7Y7quWQX5E2HKmHq6rQXQsvi7Uk8KRoZVaFphDjztSEiEA",
  "key39": "5oCGofgRfbrEEueihCGWTEX9Wf2ZU16awQNDXeDLGXn4XFZY4v61kqCs1MuAPDjF1fpEBgt1KeQoAemDJz31rYka",
  "key40": "4fHoXvoJYyTWP32dJDGbYWbEXsvgZhAXkFkGA8Z5s62p1BWaBZPaWL1P4pA3EEyAEAKKMtNeQcJSsBQzvyeLEW1n",
  "key41": "3mqJH3TpaWpEkXpYQqnKz185gzbJ8MsYSLJendM36jeSTFCnQVrLwC8yaKirQ7nc5Vy7NtdiiTFB8W4coZDZrhQV"
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
