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
    "5af2ngnyvY1WHBNkA9XMpYZU3jtKnxYJroaN12FZW4NJbfDTG1noWRSRPDYcK9uJPoFPAiQ61TtC5aVAiTFSMZJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xf2Zoyg92JYvK3HotnDw5LATtoFKMMPusd4qZZa5LYJM7BJojQiYNxymP4GPWuvKZrQquRzgUMZkHxswEvHBF9a",
  "key1": "4cyTKG1XmKKp8KM3PNYrBUCpiR6yyprKCurNFHxdnKJ8TamRZvieWUZ9RtdTo7GYepxWSLuE68YxwSZ8f8NfyQQ",
  "key2": "4J1V289pU2jYBABTZ9M7R88YGwxMExKjqZbM6nUDyXDi82vNNZvJjVcgZjU97o8UmgdPNCyqcFsrUpJoT7zo8mRM",
  "key3": "aHnQRCTLNpZ4NpKxnAE1gK25NWZfSDHpfpzu9LGKek6qnfyRWap3HZ11qMDDw2e7xcynjBjJZgJitfcPAt9anBB",
  "key4": "2BxMUhxzqcBSnsmsYF3Zn2whn4CR2sEQM2bvSDm2rpuwvi4Jw5vApKg1souneVTDmW436ECwUjBH1rvxwiepCJTS",
  "key5": "5EbyX4PQWsjyMsnXwwfPtVkJTLpERuu78B2AvzvK2HbtjUvgkEHa9HVn1MnrsSWKqg92sDZiaF4wW6qYzCDWWcLF",
  "key6": "3vBFzKkv581NAArwyY4ZcXzcHhJkZ643nPJjQnTAK2MitaBMByEjf9S2fsxtAdjYCVHHtsZnUkavcNL1pJHh9eAm",
  "key7": "5fxiPPnQ7yW1T7mchwf57yEWbjrovFZvahvRhToErctUExJPNfWGkP8iGk6aYABYDUoD8KPmn5TEiB36cSNCp2FM",
  "key8": "5iufsH15CLppmVJPicGxf37aXKBc1NcF335PDq13S9PsBNNunLpcGvEbwXheGYAvxVuFXE1rrLGZFoNZVApaNGFg",
  "key9": "2bxKNCUHCY7YAeYUWihGrh9G9WaQddt19UpHyMAitjb1ZxV8ybMqeQxamcsxQjPnNe45kUhcmXcSPPRYf6qx5VEk",
  "key10": "2swp6PucgUNmRQNCR3SnKHKsLPgFXzjt9cst7Unt3sg2x3iUCtCHp8zeGjUs5ZJNmqDBgF9VHMjbbB89uAwiyK1b",
  "key11": "tXrttnN2YGtrZoifwnSrYhVE7FiGkLvJ5PpeFTvSYr9t9UpT9oPkciaJwARRJkkuhxakpNEDsiJqFCUrC5dZ9QT",
  "key12": "2juP2VZ7BwDSA1C4dfoNnFuWJ794YhNh3w5khq8e97Exbyj11nti4GYnjL3LZU2z3ksuopyLxXRCb7NeJLJo9zKv",
  "key13": "upf8eAB4jRjihxLTmZtxrnBEsmUN3CX2cYdmWYNNXYpJCi5qcVMFgRKYcWZjhrXJzNAxWvbEsAGuQFTq6JNdjaY",
  "key14": "ms4j51BEmdAuA8PRXamMkTgFGchBi9KedSrMkbiiaaT2JaSigRxMt8ARJUzvpD1NtdQSCYrgpaAwiacK9xT83am",
  "key15": "33kBUUBxxmkKRAwmtHXP6rud6gxbt2mPKapZk8qgaRMigYZCEUPoGM9SVg7m7uGZBik42eS84wZfmzFCD45cSRHg",
  "key16": "5prgZUenCdMEWAo8p1LJ5MbepeNDct9ok5RP6btn9cWNdJJanj4LuA7yyoXMtrgHActgH4zDt1L3yVQNPHM4zxYZ",
  "key17": "zWL9dtueGPU4YKnFYkziTcR6bH8KDMxeL9KPryqWTaFf7PM1feUsS2o3A6vLQHKZzZrmSbaeQYhNbF5DtSXhU43",
  "key18": "5QQ86euxZqL14Abbhyn4VKubhxAjkb7noPVk9fE2Ef3M7MrS78EBp9iTZaZsoQR7zkar6phj37S1SQAQePcDJ61",
  "key19": "4v7SPcwXhfQgGV79TXVTf6hwPXaaWryJgcTxQeowMWBQMBuPL75JWRCHTYvmdkymZUgKb3GqBJ9mW5bs1FUZgEAV",
  "key20": "PGVbiDpXgehDTALwjWN8ZhrWPK4zwXhxSRL2jL48M7UqfeavkHkS2JyGySwngwZTYfxy1NJJNYhJkGFavyAqNPU",
  "key21": "43GJ8NTyd14pbdLUmoi6pbrBadzJibeJojYTqbB5HoJR89EevmfR9crJCprpxvTWxBoPzi3ZAP9mUtYJZAuP6CpT",
  "key22": "5xjYh6z4TSsLBVhjqaVog5zT1ouDYMHqpaeoNLKuzBtFs46qwzZiBhYCe2toN17Pt5kPKsqkowdGZDdyPQs8a2kz",
  "key23": "3HjoTuAL1cWEPBV8uDKAZx33fCDc6rdNTvFU9BeQotr78tNDcMH9o79wzYN6DwzNkVWGCrq2rJG75YCiGZ75vCJ5",
  "key24": "3dSEzezhiwmLbSXuMXu1vvvNf56dDu6vRcsRigsYdxLDyVzDF31M4sBL4iSJgdoMjEuqy74LHJWL13twYy3yznfP"
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
