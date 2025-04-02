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
    "2Aoc2zpmuCcYTjkeFjmNK1mxLVABKYYU3bcaUsERg1WKECFdM9SHFU1tsj58B6hqNQTUGKMJXcohnE1KhAycpb5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dU4YeN41x4rczs6hW9n3LmFBPkizbANWSusETPeb9up8NEqjtLXkWJtNdqiAHG8EWX4dS7hxa8PZdpFmY7SkKvC",
  "key1": "2efJG5W1JQcJJvpaSzRHQfYmntph4c3mjarWZfamn2E9L5JzisRFBBKmRvwiYT8zXBZz6r9N7jkpyo5f4Bm4KpSi",
  "key2": "32EkgAwtx7qTys8p4ykFXzx5LfWif1DXyqHz6xELGKsz9LZ4ois5MtGo7EmdxZDKa8iUGT1AYrGr7MGTkBYGNdRm",
  "key3": "BHLBSi5EfKzF6FPn99d318AgFFoAZTXv4HdVSB98YKqR9wzD8d3sSsAvTBwn3unHW3S9ASDsM6PTBRDRsMwk1XD",
  "key4": "D9Yg1Ji7LximA2J8QfMBGKv4ioow7BSMG81Txp15MZum2APwna79UcTAtSZrikhMprDDH9KC3KGhtbkfEL1hmk6",
  "key5": "3aEvu7bsSxgjVaAtSqWYTV1KoL5CyQkp6AzfyWeq1uMai35ZPXQeyDm1NNTzEKVLHFzetaHmF9HmtkXUAtWSvqDk",
  "key6": "61dF7kMoiKJzc5N2sDdA35Rw15uYqcKuwiBNcw9Nwu6vToSSgChW7dgMGKhfRh9rdLqqsgSXbdLfmT8V7wdaATic",
  "key7": "664LkcQfs5Z36ain6VzYwwoBZtKN9Fe868BZ3GPtvBNtVqmwb2sn5x7kEZY77jVTUwwRHmfRDeEUjogXWfawxVKB",
  "key8": "3CVyW2kkKKo2ht2EttaNEjAu4rpqURf87qZuQTYZmg6WxonGvSVZzx24XT1DFDvidTmkGsCsJYqDxH6Sy64kwa2D",
  "key9": "3ghyuVWrv2nQU1mEa4bobKKYM4GsqWpZw3wE14BLxdhm9ZbRz5BYBeiYWAYdLhjPQL9LCfY4ohUjZQVb22j5YEpT",
  "key10": "oKo1tTjmpXucUWaiS5QpuVUSE7QiCntK4sfNRR87Ep1VgyRGbzQrC8hvrUV6xEb1VSnnx4spmEjAL4PkkXyGECh",
  "key11": "5GxDympDYsLtYouYaApU9EiuHDPTn9UcRBGDsyFkCZuULxs3wKU23CF8QTFaa53de8Dx5tyXJzfpeuVn6V2X6G1X",
  "key12": "Bb2bWrNFu1WWEkq5LhqbEK2UJAvfyRpF7XycGeSYFjX1MveXRS3i1cXqEmrm5dVRzFEAGTKNeML7kcK6oXoDfvo",
  "key13": "5UsbtZh56jfkgrFuwftCvRyd5iw4RmQqaYGpC9sPJCvXxSZiXpzA2aPHzZuiqvURsteUJjCx2DjFjov7J24xXs2T",
  "key14": "gQ3Q9Bn3gjGCJmEwy1SmVpQEo6iF6TG7RodCCWKHP228QPCm2ELXkUs7wDyQEKRuGGRh2hSngcRD2zLs2FNPDkw",
  "key15": "3Xq5VQ9akpgQxGSAis9ZdXAC6nAVjeSmogYakFcAWsvih1e1E5Pj3LuhCcceqDZafiZUAv14LQZ4wGZz97Der996",
  "key16": "52ASoTG3zCTEHxbxBEPu7DmYbF2rVcn6RQLjGHfRd8VnJQbSorxZNMXGcqTCjRWnie5YpPXdZQYwQSbb8a3AYStA",
  "key17": "5gG2vjRRX5Nc9phRkbPQreJLukwaYy7y8K9eKQ4CEmvnskS3jBobBE6Tch6wE64utpTxBKuptSY86gPZ6V6oH9Um",
  "key18": "2V6mg2PgZP7o318X7APPGbgmpFnGDo34Z1rGeedZEWqXen6jGrtSHBWTvDC2Uh9TTA8P4pkefToqgsyN1iGnU1hJ",
  "key19": "2a3FPqkXMzMGSVhFA3epS98Yh13AN8LpMKgo4XC6Go7pkgux43TPEQrymH4w6TTPuMrJKNkjPKuvjXy2FwKg73GF",
  "key20": "veaoCL7mpvp9BqhmwJWBkhRxw8uQxr4kHRE2kq8Q4swBEgKMVqEvqes7GYv9Ywh1P4k5PKfE2CZVoyDf3AXDxQa",
  "key21": "e2xS7pbMXziB3qPaPVeZSyCQCd2x5o2BsUsT1y3gdNV34ykbRd1TUNTQ8e8svUJ2wB3DEc6FTorf4oKfe73MJkV",
  "key22": "585Li1EQ3MJt46fM6Ur1qLCs91qrgHbJiT6odWDobhi64XKojGhS1HzPLBcRwVDB2366Pw9uyk6hEAbJ9MZTfUnQ",
  "key23": "2WqKuhpkUnYcgeR3q29s5PJEpqCaC22uGz2SsbdLtFyYGVwistmTQLsme7yfvFfpdDErEuRwVAHYqRCxa8DX1crD",
  "key24": "22YtLWhkwa1zqqsT3poASAgsAofXFxR1K8mK7nt6ySLHrEz9iDu12rrwRDNMaYGN2MXruUWAAyuDVggzyRoBz1Ha",
  "key25": "5aGWdssXJrQacxUe5ZRjUrpBwpNHhCNcTGhWTyfkvnLAU4j4m9gUy3vWKcsLRKwFmhke22bT5a2Rq4PzS7TPSQVz",
  "key26": "4gjqCZfLFvo77wUvdUcjgANcQjUyA17xHyYmmHCrq1r8fUmXsKeTzT1GC21UpxMtH3GUHXoZ13b4153kQLfdRC24"
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
