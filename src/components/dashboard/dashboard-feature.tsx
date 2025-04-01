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
    "faPxAyUcqHfubsxTBkPRLLY7avdSEquXEmrqojjyoU6LkjzeiD7kayCmh3NfNWun6m8EdAL3298XyczU5TAAtNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LQxLx66djc6HnNkQKAdzDQzhCWDEcwiompScWbPExSiqaKrGkA2NMC9JmFytw78ttaiFADe23k1UNYmz1ePHgYN",
  "key1": "2VQLstvc8tWsYR72suEieB8B6TD3YSDxVZgPeV1DpAd2fdDiyfLbofEjKfohbbUjb6zzk3UTxFWaBQePJ4aC2qRv",
  "key2": "cwrokr6tK1fzQXc3tf1cmZHXAUpvpxKgTucJswg1d5LAF2TLnsD4VEpZTxYnU1eq5qjUaxUhCDSkiX2nrqcEVin",
  "key3": "3khpJ2PxF3JEgnahz5qgtAVFfvFNwExhRm8dgtB79oCgRujZYWPceyy8EHX4fcgh4AEo7tsX7ckv5Si93EPRnEQG",
  "key4": "tQEYPEwW5hK5iC3ER3B1ZoVsYyASpPKaVQpGoUC7p5LxUkDUtC8iK7k1mNB1SWxKRaF7LVySWvZeKGaV2Sdnccq",
  "key5": "5U1esWVSeP1wcxK1vz9nRwUiKPCugK8zTMie99Rde75w4Q9AkJU88XQNHNG4CKFps9FHUdjstKaevgyQhcdR1zHG",
  "key6": "2zrbyX81dxidv8qGaP1DvMXuWY7cp8iPeDeoetr6mtqhGo8CZFh7aVf9aqH9SoYLqveXA1D8JqW5ULYL1uqfXfzQ",
  "key7": "3RMuwKsToFHwdspdBAZAJmhb5fGC2CEgkWupUAwQVauMGRXqrZH14QJnmPt41t75okfaeSz4DxhhGo3jv5ud2Dez",
  "key8": "3iBGR6nc4ZHCXdzco4mvQyGnaPmYCuuycKdg5yhhDR9FBVV2RBHhWr9WRsDAMqBEcaDCRdRYmVixJfseUkUSLiSt",
  "key9": "3VyotB9adp2Pqv4BFsLWE9wsFpvCMd45fRNVEXo56LyyGE8fVUD3T1mW7LBNz2a5op6WiJmoR4je5N4DsMTL6fGg",
  "key10": "3i2oUAhnfn7A4LTYSNGVRcFJmJzNUHMSBwa7XfPZNTybTmzaYtaWQzkgmkxh54TryV3cVt92ZHracQ5uC4cAzPsx",
  "key11": "49pdCCexTePDP5Nj7giw3ZkLJaWRU61SpPG78rQWgHURdwY813huU1xz8NYChJTvtn4ZWWVWB1pzdKg2Rnt7C8sh",
  "key12": "5Vs9Y9Lk76SLTEEX2E4atiYmN32bCEVQF2ReKAkE8gwXa5a58Ziyy1LnD3QtgjSg2DS1nqgkcjhKJwwFK2ULGc3U",
  "key13": "2UxUhvuLxDuEsoxe7uDMnkLk6MgFugrLQFUJBf7Gn5VctLCqKpkeBFkJ5EuNGYrWoGYAzUMNwFdKErgf6HqWLzAV",
  "key14": "2PohornfktSkSmSnHERGZh5nrEVNHJeyXKM9NwrrPuSaicmTTuVzGTtKbmq7cC59r6SjpnCxDgZ7PasPST4X7A6J",
  "key15": "36qQk7BWywxymfVtBsfboctZTRuQAyTyRfSKbEKADpJGpfCvSx7LkBAvGSZvRTh8NeUxhint4tRkV7tXMb9q8YKc",
  "key16": "5xq6vWnqsE3b6f2GByzWzei46tTg2KNvjy2XKvRxDKowZjdAHhWxbENA3ijz6gf3RVMKU1Eo7xXvgnzqGboe65q7",
  "key17": "Vgz6k1c1gWFmn1QDNUiwp8zB6FHLWjAypWnxEX2E9ZZLj3jGwZ5vXCNEA5vZ17oKkuuk1shzRYo1DQNbzyjgYts",
  "key18": "2naNqPCsH9VcUZpZ9JVPTR9Waj7rxRTbw3LUhN7paku5sHe3SqZky9JEEA1oaAMLAxWVNMewgcDq1WufagF1T4iy",
  "key19": "3BTnfvUuzpad5nGR9qbbjHHKoesAFFatdXJ6kcbsWX6i34xX5YMtA46uPramvZZ6ZZdcBwM19rbsyBUejFivPWbi",
  "key20": "XxLjkzSje2MSjStjjr2xxH4Yg3J2BVDpsZ3THqPvwoAud4Yai1dYKechUg5twb71aRDTknpQxt56vgkLNCakRRn",
  "key21": "3zKZdcrLGtQqqH9hTCs4WqEPkKnVqmxARuRVpDs5vBKiMZyG2GUS1hxX5cs2CMbptS31kRTvkj3V7Aw5LKP6hjRx",
  "key22": "2B1p6U5pnJ19o18n3tSUHWugMF2obnYrJoLV6z8Lt6inMUKjRwGNCuypaRxdCUwNSRYgnQR24y9iGUey4wy2pX91",
  "key23": "597VceCGU9TmgeLnE778BeNR7XkHSTKNERc2Cy3rKGdqfPCb8jDdDGyyqjMjwNVFQx18ipcVN1W8aAVZVJuwaHnm",
  "key24": "5Z54MxP2SF665CKiSDgZ13BCy87YTCavCCsFL2vu1H97mv3UF765TF7N1xjFwjS3nC4saEpUWhUPXg6Xa8rrV7VP",
  "key25": "2PdBWukEcVZ2nBE7VGmGWJMoCFLwtwnM3cqUynT1tmgWa4ebVAvxckfSj8xUQ5MG9cYw7ukVF7qHf14WDXDEF89Y",
  "key26": "5dzw6bCWCJcdGU2tup92hDU6FBbRFZGxrdGrj5crscm443gW4Jiqinx6u9CK9FvazjNfmm6KqYgdg3mywGbXV9ar",
  "key27": "47g76anzSbxoE7k2oFZDWF7933RXrSek5BjPjivAyRFJ1hCCWBKJvCXDokZei892TqiaZFVoZKxb77wWUMGXjTi",
  "key28": "cNdtz3sHx31jTbwbTzQ2bG4GNw82HuNEbHbBYpA7ma4ZhPx62ascVUodYXSqeKotrRYH6BdphafPzCAYjMSQNX9",
  "key29": "4Pnpwj2wQUTiUantKRBuV2jHdYyQxK8U3Y4qUH3iZVybZXcBbt1S1q8w3D6kKMEejfBwAZkjumXjd5MX4BbFUvuM",
  "key30": "4gXoR4BY942i52BDzLGzcdvL5M8rWsz5nTDQsokQpPeHnaP5TGizaENGbr4q2QLrgPivMNo9VyLh6hjvSsAdQYd5"
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
