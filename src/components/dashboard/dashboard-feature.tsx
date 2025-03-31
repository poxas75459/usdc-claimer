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
    "5SKiXRDibd9j2GGQjjMEi51nBMMwLwnpFgeSJQ8rQKfPDdsgMeHUsEZemgLjuY5k7ywozbn3TxSpQatMpNfwhTpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LGEc5zv7qc7x1e3CcWQRvvUkJtgE5XcZLyH4ZKXyvkcU4RFNYA2RQJ3iDW2qtaZJw51DgbNTC6ows44MW5EzY",
  "key1": "55kjVAdNuPPjYzR7wh5KBBWnWTFkP3UGMZ2W4gZ29L1kYW4fziAdkeoDLGAfNeUvs3a4bEbWWgf2pG3c33yzvxbf",
  "key2": "5godNFDdg8WscLTymg1tksoJUjrAuERkNGF5UmrBJrdfeT9exXfMGa6AZiiweoJc9yqVxWEn9dgntJ6TBe5KsQHX",
  "key3": "573ZspPjB3krYTWtanb46sS66yR2pRyW5j8A6JkhdPehw89hrmuDzv44vzi3VjoUCmojcVv6XHZQzic4qZuXWmeL",
  "key4": "5bNM3RXL9FLWcXVH8SkknYXrFsmm4P7e6xUXHq7kkm5DhHPZM6VtmUZrjfhpNDZSD4gAjKpKsNLxNxMv8ergm3yQ",
  "key5": "3VRiGp11qENn6MkDXXA2ZvjUVsCNrp9GdsZwExqcxTQ5BxiwycwfX7LqwY6MfWmx5FaLLmfhAAm4A1DvGcg88Bd1",
  "key6": "nJeXtjowvtNb63wjx1CGd4C4gzFnqnvdd2cSpUerw3mpvNSDQFvpvyQs2zAqya8hEVq1yYNTdnEtHARDjK4hjbb",
  "key7": "4tjBWVFp8BKFJVfDQngVwHCm6mVpeVLJmNMQTpxu69qhLhowpRQ6icXTjbWZUSn4yetTynSQSbyURnaMMdAcPcy3",
  "key8": "5RBVMvXeBNPncyPRotHK28WMnVUCi4HWKy32o5JxLukuJtgQHuxJfXxL8xMpf1MadWrDffQgj9kiyxWApiaDdeta",
  "key9": "2xqhhsqL1zYNgwgjhdNmNQohWeYyGZB7YbpenUpPktvMyQ3TFNpaXT1fra82dEN4KeVVuXn5CTYmb9w4T7VHErcj",
  "key10": "268bkmfzBDiWaq4zLXLgbmtHKc7Vta8kocc3qcMqv2xu55HxNSQYEE5jGaCD1PtBij5A27kEVxn3xmFqdPcqBLnP",
  "key11": "5bKMxaqQshYooq3fbhbF3xArtsu1oqph4XE8kDmkKUff9kMHsGmeXynkDvWghQSQVGF6ciETWJ5KHfLa84TuKLa",
  "key12": "28Fm5B7mQWutTw1eMoK6YqMF2vCwLRQYN1HKcWRFVUvUvoZnrNyUszotLQ3SFcDHEKosqMpiaxR8MHvogV2ZWoz2",
  "key13": "5U15qFBLr3kdEYvPbCWNrrFLmhC1ewzrM9YdEYnQrFuKkTeprxsDCP8sNdBeUY5o5gGSM6Ci3s3KsJ6FhxwdWN8i",
  "key14": "29eAygCuKqiosH2xUcBrw6fbs5fHmtcNHp4qK2JS1Z5x7vJw5fRjhqrpVtUiQJ35kW4mcdVPSpCfDjeqvXHqzwbS",
  "key15": "2igKibSVuGFN1FRRdkFNqFD2jRX2TWFLKZR8xPbifnPKVPeHE1uASXY82ZFbWQFGMeLpB5WBAYb5ZHdRrUaKkyUG",
  "key16": "4LDXdbk4vVoxd2j5hcpuj4cSbfnpQQNbEy6gGjccK1kW8Zey3DBo4UyTgUur4ehgpSTW1zVpEaLd6oe8yamG7d2K",
  "key17": "3UEuaP1yvt119AmnDChsa1wLEbVxtwNx4NyM6v1J8Kk7tNLPzujVUD29gSZfp3tEMm6mncva6LzMk3XinDgRqDta",
  "key18": "28XNHGc8PnaU2K5w5BTSoaHGy7cYdf8NCxCyWNMYM72sAVGV9aowEuoh7CV7cNASZFiJ4VsKoUuKaXdVasqqaCrz",
  "key19": "3W6uBAy7k5vRVvUjGazZBq1LP12hNQC7hLuwqMnmx4VBY7kq51MaioPhAqdRH2ERATKm4dyUu4jZ7xJGwAdAHUJz",
  "key20": "2C4iEn71BZn6GJH7DgGcmV6uNcasE2nrDeNHa3Q34pFuqEpopMfSQg2pf1oxRgqhqngT2YiR3GoNDVmREB2RyWzR",
  "key21": "wRQeewDJMKB5n4xrT5ofb4JKA9irXHutn5uu2atsUwPm7YW1nksD7bq2feMahUFWMgfi2PeHAQyw3aXnByYE61c",
  "key22": "5KZfJ1MaY33mxkFJopeCR5EvDv4owQhJT5n7Fp99inLPopmMY6NrUaX3s91xCZzwP5iwikEBWuoPrwGs1rcR9njX",
  "key23": "4okPP5eBjQxfbgR3WCh1f68P5sJjWrCrbQ6KwhjPRUXs7CjE1QpcjaH5dmCoExHLpggGrB5ZK6pSgRrNQHyPAhk8",
  "key24": "2P2gQvRdzV4qP8DAx82ygeujHvnEvKRUHimm2akGSiAzMZVDvxuAh2B4sMqS8A1rcTVEaG32xdYDyXnLHhpaf1oo",
  "key25": "v5D8nm729UhJzuo5GYfq8Xymjpvx26j7r7dCPPt93GRfrcUPAG1GkyTq2GZZdfYEoXCSw4cZa2vcbQ8R15ChcgU",
  "key26": "mNnsPXQiFjBnoNBqfB7oaeiTA6RMoHeXZdfnUH7mwUv43F6KgNLMRYyKwFaUzE5SiCfPuu2Pig5VmorW2eoAscQ",
  "key27": "4o54Njjsq9tPRXXAMqvgpycmCsA7uJiCZQSfFATkYNnHmtjwS7AGskzW8cpmNg5a586SPmhHbTmPL5Kzs52ZAc3A",
  "key28": "CPEGRau4gvfaJL3Bjcz7oSohwJUZy3rTwR9147qWfpoaJTtZYmbc9u61hppKE3DwESz6CYAnxch3FnG3MQBHDhF",
  "key29": "PTLTBEnM5Ko1qay27SnRoFvqN5Gx3ApxcK4nWiJapm7cGazMVhkqQnYNjreWWDCEJjyvf8U2zXR7VHLbtLMgcMe",
  "key30": "5q8Vovib7vtew24ehYEBHhKd3pgLqniskCxkzNnvkJJjEAkxfkmstpUpG82hCkwoqj4p9dNQ2S2Wd4WL1k7RR9eJ",
  "key31": "5SGwonDX3VB9x5tYoW6b5BuzRLSrJpTZcMX3JoMwc7QQu6vDkLTWLC4sL81XfsxWvjpXVpkvc7wmTfZWiE8sZaKx",
  "key32": "78qdgkTHZfqaYRDiSsqx7jPhZED9nkmehgPmst5jNgDdwuvWtq2q5ABo2dDEGpmWidm63QsTz6uLJAg9V6tYKSd",
  "key33": "2J1n2fwNcSPu6JKkfxDMUTUxAZQ3swtfHmHwTfCH8qHGEsuyeFXi36698NpLqRnXLbQEux9Ptp7gz1xKmLX3KES8",
  "key34": "DPKsJoUj6EoKRZz9utKzqkXecC6GQGxUuqacJygMgLV9SpCeQxG6n5xjW8gtr8pZnBr7TFgDVmXVia8tbDjXpbS",
  "key35": "4P5UdLbdmzugwg7F93heqPKipY1MBrJhfQGkACpPwdZcCDgZd2eaPEj5wmpSCH53FYnxx6vgB5G6pAPe4NzyTYbf",
  "key36": "P2DDQLDPsdmNvYSr55Uu9h6XEJdvcooBY2h4fvkHXKKkqoaVTWhPn4Bd87P98LsRykYSUven3oAHuYfn5hwC68Y",
  "key37": "8sQYXb5L7D4jR8ogMK8sgcWDbH98XCS9LfeTLvPVJhJdSSYMqaSnTPUox3AVdTxceXR5GCk2B1hqtqiBcjtguNz",
  "key38": "3djSv7fz4w7URJ3jxK3HCraDi39jSHC4MeXK8bhvXjyFbvX6jAw17UcjjYCvXj9w8Sai6Enn5ioJiMW8j6HML3xX",
  "key39": "3yuSuQ9NMfdXAyT95UeFA9cY6o5TihvLm3y7H9mykuHZxkJUA92pLT3qoX9iNWtKG2zyJLREYgxCTfpzo2RQVhmt"
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
