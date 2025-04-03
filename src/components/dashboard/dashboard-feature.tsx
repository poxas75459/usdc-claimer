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
    "2sZAr3kc4TymFX76REsPKbfC2NgUiqvqWsKgUuHEaVUgFu1r64nYXZM2N2dzkrA4fGRoH7pPnpzqm92Gfw7AP84h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvG6qnGkeD1b9PrNjD4wTkroN2DZcz9GBJoJruhkiT45sdc5D63no7AGy8TCnDKoFmCR6yFXYAZyE8EZP1trF2A",
  "key1": "8nLDhtUsijFRzSp5v7j9wqi1zxPyRYRyXp49FBdPqbZdKNAGfCZNYR6UXcTGFmATmi5sAbdwBEGJj7RuuEJ4FVS",
  "key2": "3TmkE9KBe91xaPkB1Fnx5UDbhx5NJsBapzhAwzyVGWS3xjVtn8EB2YYn96NB9yGVLLkWYLsWLSWezWVwXGK6QAdQ",
  "key3": "5AhMm4KPCNzraYURW2YD33EwRpnmb9sp6rc9JjtZrsCGaEeEcFjDH8BrDHADcEgR4NUCJks7zyLqaPCPWELVKG7m",
  "key4": "Adr5wDwgoL7deESVkBvPY1ZTbKkwhSWpDniwWRzsU62tz3ruT5J74WbYE6xjm5NxmK78dsuFB6kbQt71czcQCDF",
  "key5": "h3Q5jcDrNnksUFpayshYsLyfz71BT8X4rz5Ub1wSkxJWVumhjhchZWHgRKADu4RUFwz1NptNNa5BNKxymJJFGAb",
  "key6": "2HkgsENyad55CdHfwUJii3txTdaRb8ULpmwpNquZsuY88rJXbKZSd5UKU1vx12cVKEVWkdeQ2JJdFzZXynz1EkEJ",
  "key7": "5XiJ8MdVLn5nybJh9irDcFEvFf4znmc5jZEG16GTzVhRHQbh8YdWu4UF1A2HydxEbqGRriPZuZ2kstbVh3wnkwBT",
  "key8": "Grvw2wAkEbpG6dgRo5W9jTxkJdtrxUPT3P9Qkg4BCb2ptcvdnD4zmiJj7RArxWpUWADGt5rG2LBUSC7Qi2SuAQ1",
  "key9": "65gdFSqqJVsHih6xTDEWC1i2hdrgbhVKZRA6Si7yS1b7uAr77DpjvqzvAi76ryh8shPSxKVRJYCkBBUASf6ZSKEc",
  "key10": "5uSnxC6zETXQsABdBp35j9RfryzP1xfLxxexDpy8xTrddVB2aoc9NLqkHkaDpNF7nebjeef3kFqsjzwiAP7ZgiS8",
  "key11": "nzLwoEYwpkfEM1a3bJPMgA8yC7wEAXsgSLf9FCsJQkjqpxkPzeGhWUvWcb2C3NtHQ6w1aeTKkZuVHaKdTyzAUJH",
  "key12": "5dUPR58qBUHek2i6CMr7ccQoC5jRgpPGfcNw8qg4mBrerMuUDZQCpjfM4GYJwiP8qjM1KW27UVvhrBFbLjusYKac",
  "key13": "4Aart231pkYYZkmUyEs4YLAPK8d9qRMC55EwMrdRTLcQfhAKhaqG7aX2x41wRAAcfN22ew4NYGK234HGWgFFEXYV",
  "key14": "2DALrKWGG7fSQvrW56itB4UFNssD4LJ58pQ7Z6pF7k3SohRVPKZYdN6QyxDR37NifduS6g3SzQUj2aLTDzcDQnd",
  "key15": "2HUp2UZ6VL8tNR91NQ81zrdGcSavizmqEzBhPnzSRE9hPn6Xq58qm6CuywudmCbHn5j5rR4Qp99VvfYNwpeNXnqs",
  "key16": "2go3ibDixbixAy3bMRgPRPUDHnLMMJVuN8tRUTzgBTGzGmyk8UzcMEPutSfJ3eauWq5CBuJMobURj4Jq9bAmdCFQ",
  "key17": "3WDx7vX3ZtqXVhr9uP4otfmtN6u8WTMCSbh6cGCoj4am83gMThWXaUjaQn9QG25gYWkoaLLZGKd88BnvywwvhWVA",
  "key18": "4q8ioQK8129NaygdYqbs4oNuZgKmDnrX3yWPM73NnF5vP49TUS6EUEWTeBiBxEqHeMeV2VcuoF6saGfpkqhNcnji",
  "key19": "EcPkQkPhMhjerKTG6QgUzF7Z9YoQ2XwC7Kwm5WzJyM5XLUYGn9qEsvBTRbQiu62MDR1QDXxVYCPNGnGXiiM2NNR",
  "key20": "52V2wuJfAD9QHT928hus5MfBoWVdfrBX6Vowwo29PgJasmigSuP3GpPyCNcHaCzc5JpQF4V5Hnc253ap9aDBqvp9",
  "key21": "3QSSTksH6eLAk2YSCojX3MHo6E6yTmn7z4f3ZrZT1knEPhtuy1NbwhGbju7iv2xVM2nQbfjmQMpfAREqDmS9Z7Wx",
  "key22": "5CYh5VNXoLyfQFFbxbDhpkyQWegt9XJGqEbcqqVyYC2bEkhhkWgRQWcLqywFbGRBEFp62EGksCsx11LChZHD8s5o",
  "key23": "4aijrB5nUyk2jqzNBUg1qjC9R3kshqgra8DDukrjY85jcxWVrE7CPWz7qcRkAa3dBjAHGTuqKk2Ki3SK9w6copeT",
  "key24": "3B9bKdu2nvqnogteDTSRLECbNFMsZEDkzJ5jcLEftwpKL8SheLEkmtjw1RDCHbK9eim3aPp9MnDMUJt8S1w8s3Hr"
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
