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
    "M2BsfbJZ1mnDH5YcYcD8ZzsbbFARyMdtap3sLRhgawKJG3qMqBrawPBpKyyzUqANdQKyezi7PEJRbCLwfyqjbLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwfpZhF1TnkxCKVAEUb6vHbh4UUQ4UJJKRwEi51qHWJNDAJ4WKtw4nGDZs7qHtERJWdrG7PwveFzMaYHg8K2jd1",
  "key1": "5LxTaqEyzSoEzi2jFZ26NZ9M6Pdt4suRSJYccYua5Yy9uz32G4ZmYNyuTFP7DpHBDXPgkS2nofbPD64R2DqqVxpz",
  "key2": "2EU9giakw6fu4WoREreKWULDPvCb81GXKZEE9fdqwn34mgVa6k24JuNtLinwDDHm9b3bHF8h1ZHArRFJUrFqiyL",
  "key3": "4UF6oJsN4K4LguRRyKFWemQ5t75gsmAk4JHJjTpkP52G9fDX6cHnaZCazFECymfVq5TrU5BaJLMnUvkSv7xTtcMe",
  "key4": "3uDu2DVa9r81P9RMeNJKbcA6pkvyNQZHSJRXMQHUVvQvGdbyR2ybtneWsB3NhSEcGdwZuzmwfyPRLwXfhk9ZSJEN",
  "key5": "5MCUJBc6zVzQkcAKFz2BD17Q6sHFLP6MXMBQRJbvk3A5zF9yojgtBv9U8sjZkrDJh4KU91xW6pG2nu8nkAhGgCfE",
  "key6": "4wEVJpyNiSLdnwgfVmCQ2PDJLFcajnBBRGD3U7ChqpaKjJbf9EH7wUtaiL7G1wjcUQMkTjQjzbwM351CcFhdXg84",
  "key7": "cnswVqq4KYBLTuPkUwMbmJfQBVFS6MNomcJ7cvZH1Hy2qFfQvG9KsBwc5zArBXCcisiyFRLNTvZNUfcTgRsF7N8",
  "key8": "4FbzGYnwa2TT6bWX5rME2BrmRiyqxvWaJWk1LyFdirte4Ty1GGtaGAhKPEav1nvgDgPTrPaQD9YVXt44Kbnhuuot",
  "key9": "5cUpJRCPjWuXfiGxerAYPxfKmGAt3rHMfYoqHYeSh6prrV8GHV2awzWcVAi8aMtPn7uHKiEbBSGWDqpCj6j4FEvf",
  "key10": "5HdgjANeY3wYDyB2Ar1KuAL34QfcmNSEfJ5pGDZBn9eyvBEnPT3TVjkdG6rR7DTnMVW4CkcQRUhJ8ozaxrGdEkc4",
  "key11": "2SaaLQrDWLmvjSMD1a7WAaZvNEbP3XgrvmAZXaNE5ouUc8NXdkvXcgJGwFqm6kvRUcbPDq59rL1LJrJfgQ6zqoQv",
  "key12": "p6FNFLCzYPYBtaQdZWwh9abxNRFA4D7BiZBRbi8RmRBAcxVonKN6hYbah6WfQaTJz4k94AynAPC8wpvhVrRFbeb",
  "key13": "5sRkPXFDQeCbFxYj13ppLXwpNrZPthbbH5cHTSWLRdDQMjmkyd2LwNdQKDm3R483jGyvivuxJqFPk7phficNwy4z",
  "key14": "3HFewfx9y7dpYFWmMjumfTLzc8tigRUBRwLJrravbVtWBi1EFTN3Ddc9XyCusS2UqH3599wNPDtheNW2pLiuXMuX",
  "key15": "5dEzncdCz4NXJLqzwUnUHHHy1beYHM69mSbAGyh21r88JyBvDGGm3B62Fa1RSDkjtfq73fBoMzQm1WKfiKr4BAFv",
  "key16": "55M3madzCX8fs1HHPS64V9pZHrvrLtLBLQR98xByqiH1KTdRk5qJ4Fv3kMecdtbEHUwM8sRV3agrPKQMN4dZYcrw",
  "key17": "4tzLPRXTpsUPAPXJqUQYTDmNVVb91JXo4u9uRELU78JPdEisaTjwn1vLGET63x3yajv4v82N7xrvNxZCF1n9Gm5C",
  "key18": "5aCLg1KeMtcYnZJtm5u9UgNH77R1kb5f8yr1M9FZJikFk9t28m1YKn6V1WSmvWKRfm5noC78eiwuRiCfip94sg6Y",
  "key19": "3KuXvzQ4eADiYZTEZxQP6uVUVMYz938K5yadHBvkMBzdxByB1pXQinbhWssuBuN5Ma39anMXVC9F2WP9fMwYRo8R",
  "key20": "4xxP2Pk3xcHyGpJYChStBJaFVuhSRsSHk8TZzDr7p9JsuQZyuLc6gS4JJCG2CNXKQ6pzejSJBrT9yTwE4HEQYwXQ",
  "key21": "678zhX1XcCA91jGh2hwmT3AHtoYYRQfP6TcDPn1Ht15UhPCc5XyjUzwHsLcHvX5qegU3gMrk7axphGKsLZgoKMGZ",
  "key22": "ifCodgjKAhydPuKkeDTsevax3SkwFvhGXtEYcQi4jmkd6QtqTMEMvaXMEAHmAKKpThkgKr32ZpMQFbbsQyyX6Ft",
  "key23": "5x7GgJx8ZpHhNKWMmyjcnhD6VLe2bY8KLR8vgcj9jjyqeBGoQupnmtaKmV2vs6ZqqtdC59zqhKUSAo2iMvjyfk14",
  "key24": "44e5TZnerbkJSnr5r5ACRJKRbeTBuRtPDSRLuVJEgGoEwrbiijW5iayzfsKGPU8eAJNiFUEGKadUGBbQYMjR2PDU"
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
