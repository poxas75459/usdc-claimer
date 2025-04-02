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
    "32BqsVD34DoYBqdE2SgBDYzxCYnbLznEb7SF2BX51dJXSagFk4EqLnreYp6DQVpnQVjEmHmj383XgavLHtf3AM3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLhHbtEz19QJQVBHK4pumohbHbZwQVfD9CcXWHxsMVB1arMna9dSSDPdrxdjbnARyRGpESxDiX8tghviXwAGyvm",
  "key1": "fnMDhDTYbKpUX2Vpm13Zcyo3y4yPSMJGTH4L4FizrxcrCerathQT83JSJAmhU8zpzQQXjP3ePZJRS5q7Ti6fjon",
  "key2": "49RifsWd7y5igmqD8ioDeacVfmPp5QUCDStaBA44p5vUzwdAMhZCyLn24WQYbMXjk7cXUqWPhoEjoZ5LPHGGCgg9",
  "key3": "2WRhyeZHTB7QaeA96rE3fHt84czZAgFSXcAm9t7HrTp5LSwaDANVjEJzVd4T2UgsXgN9DSB77811vSh9c9GB5amL",
  "key4": "67mTQgFj6iWix34mfTzJaKWGNPric2hjWwdoFejhtD7bYqpCPZo4HSupYy7syxJqWYFbk3p8AdBMP4hVqhoKCXvU",
  "key5": "5LRaZtcbBjS8TEBn9XpzxBi2gBakjxVgQG1UnqHkq4uqwFm4yebGyzRLtFFjsDKu1RLWzWHV2cuWkPpd2b4GApAG",
  "key6": "5cUiQZJKqJpoZjfJJDTCSB2mCm5ikUVJcUf1tejfGLcXc4fTGpJToo3PMBomCaBtjCQkjFpK2yMaHnByuhwD9gGX",
  "key7": "3vP4JstGr1uHEjB9MjLnZMVPYv4xAGR7Mjpy91XpHCj59tuW8SbQs9A8ViCHFdUSfRgfQ6mkiBuuENKzfxpPRgfC",
  "key8": "4jDgvenXQ5F1WKpLY8TfKe6UreoP3U1UK5a5XqrzKwB62YkbutCH8qpPAsru41RMnJ83DsM3TT6WqZiZ3HL4ZDeM",
  "key9": "aaprndPq7DLWsft6UJ7d3tX1cA7TU71dEpXbyzasLXjoujg58GcRXDHNzeC6fKtwoUkUM4w9fRthJWCBcsyLhfN",
  "key10": "5JSJEDrW73DQvM56VGCPvdM2oYJpGPK8x3ih9CRbhNviP4G47VVUzFvwPrtZN5dpZZVcVnKYfyuiu9uHyvDzZ8fM",
  "key11": "Fmg44gBwGeqdTkonLkHwqr3wEEcr9hNqFemt71VJNT95tDFgqncNQarAefEsz4yuMqaERqqrW3TrjqpdzmFT2gq",
  "key12": "61ZuyjxB1NEqbr952iW1SM1S4fVNg37HKeop1yQ6fALTMmLiUYkSUfszhMZG6JPhyPTF3H9P5fJerP1VYxF4BBFq",
  "key13": "5ARVPNgWUM87q1F6ymQTchMx1og7pyXqJAhDMakgUzPTgMd7nBpX7kPFCQFXAucWBbQvAgdxQqjqBiGzfqxbAoQq",
  "key14": "5187Wnyp6TggrmV7JKGcr8GGJVLkJtbUArb7wuArDgy3Q4CGinV5r2SDWWPzSJaH4Vpit21jpcxhL4cXUoq6fptg",
  "key15": "3DjwraSyvL95UkfAeSVTJRJZiUs2QTdotifntrC3zLHPb9MkJxhjjtu8jkEi1YsnuE5uXeGWUm36e1uf9TA1Whi3",
  "key16": "4i5G6Au5yR5YkeLZfCJxrQPCzy6F3eMoq4ynjKrddEYV8ehYLvLZL7mpUrd4VF1jBsvGzRqg1aphXPoi3qTSFUFV",
  "key17": "5f5n8zniwqTUy8UYqBX5tsZkeEGc8pBD5XtPKVZWoZA3t5XjyqKFgHxwLuzigNhWe5qyktntmtz5qgX34jpT9D5t",
  "key18": "S2L5cThqWFXEdtwr5eLvofzWq7eY8rXHYbarL1fQVirEyLkJkqHgyAvMj7DDa81hVe8DuW5uLxzv3ichFzj6gLf",
  "key19": "38fUKNW7CUXHMaEWsmMojW51vKf8MULcrpdrScNaGvCeP8wDcavLGXvS8pxXS81XYZiv48ABuDtcme7n5aSm7L56",
  "key20": "3RBAHAW3Xor8JGSKbAkkbBLh9B6UGLo3JyhLzAzajmYcKkuDiufHYnTar9t7cdJ1yyUMZsaWV9MVxNGc9TS2iqy9",
  "key21": "5QDMrLgUZeYuGGcVZ4UxxFq9ZVUSQ7nPr6qB7zYpLpu9HaNVsUF8nhEVwFJN6xeVbT1v3JG8Kp6hGaRuVBGMxjsr",
  "key22": "3RZumgsYyrHBaP9WLXSAfRo33fC771T4BygH5FMSEJLaW2HNhG5gMjQLqpeLcGfezjerx7hT2AyuvTC3BnLi7qhZ",
  "key23": "2qZhVVYnzeyNn7qp1YHrtXtswRhDSqGHgqggV9rogV6Dfb7GsuH6cwiovAK6EPw2he97FcYxVWHDPdrayZQrqwUn",
  "key24": "5YTKAshs7mDx99CaZAQUqtWGayFjvYqkhoPkvUts8HTd9nkARobvCwoeuThMCMbTUJXCsmgaLfxnWEhMjVuv2PyD",
  "key25": "YCYczATmCWYaHe22f1rC5awuMHW6NyYw5WPgCCNhAP4Rn3c7f6KQ4YZiyT9cN6MavRALD2BjZPbtan5Ce7im9i7",
  "key26": "2gPQw8snEa3AotMo2bxDH6fKmi8qHZ95fGK2BDqZrxhk9S5Agqu9iGwctnc1iCqWRFxAEyze3t3HgyjKCZABUhZV",
  "key27": "2NNxgdxhKJKSHygDQ8sXCGzbTHK6Ww4Hkp6tg171HtnwyAfLq79NmjCmiVLf2nLCJw2MdSZj8zw6vMgAZVM6LF19"
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
