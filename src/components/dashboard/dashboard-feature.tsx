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
    "48C2R1VuxY3F48aW2XQ9N13bHsXXGHj7LJHpeDwLYJoUNsTbt2STnGxCGZApRDqtWZHZuyryZphaAAHLFznD1xSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454ep9pySvKazjBE8zcqzbtKKXgoyVPaxZaznxSi5em7tpwTeCWFfwtcDXza1jCEV8obe9D2NqxWYNGpiv4fpw5t",
  "key1": "5jo6iMgNgkTkqR1zvquwAqtkjuR5SB9G92pkdUu42YH82uKrsFSoc9rWQ8UZBpBhiNEXPc68CoBscf8jz1wbxSSn",
  "key2": "5gZpb2PyCFdsiNU75DeBtLdkBE5tMh17VNb6F98R3H1WDDk568J6JdrHwaJZxmZaJ7mWeTuoJPHqcJxviSfHvytB",
  "key3": "3vzX89TGhEYvt2wHTiG4rz7tFNu8Z1TGBPDV9gwcUvEepk96ShVrzT8trrW9aBhVgNvHAf9sWtxaWkuLHBtzPPV9",
  "key4": "7PFLDixqNvAeF26nG2T8dWzXgwFfc7WzY8WdDjGomKtTEMg5MwU6t45aYNak1ykVtBKfd2Faoop9K7z4N4nRKwK",
  "key5": "2oVy5Byy1AbMV7fTmNPugpjvZuBKjLNxxBWsKW6fCNt5r1y1BtNY7gWdcUuUcR7RP3YWxpApV4LcePEEYVdxxBQJ",
  "key6": "3S2hsaHCkFM2uoB8Up7tiGu3E2CK7hA74LQuom7UTrBjjTMNUksWbJ8rPXM2TaZDTT5b1oTExm9uUbNsnYg7X6cw",
  "key7": "5BgyfyQEcxToEEKkqVLMd5ni1FtJHpt1FZJb2gW4n8GsypFQU4LMDMhXCTUntVnhqhn91TVW92yx4WN4W14EY6eE",
  "key8": "4o3bVLrsyHcAW1NuJss6yMKN5skarAoidg5pU6SjBKFnowS6mxz3QkdGwuAmXYQCfqhrmceGL9SuCmeL8GMrEWun",
  "key9": "36aqidNU2Qwyr6s1UGeBExPJAEYs4fWjYFbJTM9BPUHbd6TrFezxgGjCPu2JHBp1Uj7AAQQjbUQ6b3VhHU3uGSD4",
  "key10": "3qSUpoRhUWyLVPREARyxsBxSTfYUDArzW3hpjpnx99c15noJacGDxVPZHfe3JjT5Wc26EYFeAG4ZWHJh8eByqwEZ",
  "key11": "wdbn1s2N59sromraneEezL7k2xwGSGcPoawq9F6gWPjw1MzDqBUwRMMken8RJcnE56Egn5crzz8Yio5sqnBBLJJ",
  "key12": "5qKWKCvF1GxrY1feQ1ogUzXyY1xAAz9KuURTdQdf37YNZcQu8i2hbBxQUzr5mToiFWMkZnAqg74KBmvqaxaERZYs",
  "key13": "3nCAipLcT9X62KkGBVtomGEuwa97QECi4EqfR6hM6erH3112UA3jaXppezCDNa5ZRA1JKeS5QkdQgDEapZ4xbZkr",
  "key14": "2C9Av3vygMyduFsJamntFvwB74LaWY6zcjE6kZcbbYbXcgdvs7onyZYJ46qkuyxNzDL2nF1GY9WmYBUduTHtLYwt",
  "key15": "67SQPaS6pLaZ1BC5cFAEdN2kotRCLL7hrTihfbez4U48uFEN4BnNLQc1Mvt2eeRykB945xp8FQ1biN4SbG1t3DQa",
  "key16": "4vWvbY86irv8jYCH7tKuufG7spARi1LqVYBrsS6eUU8a48xX64FkRUKWomz2Mq2Aoce9WfTAujwPRQjJkQBa26yZ",
  "key17": "57J9d3vBVNLt1hjQL3FguQJ257wugr2LggEDBJ5HyLQ4GjQSuxDBkwSwf3gvBQmQPMDBzHFLFmKWWrNHmCgeewvi",
  "key18": "4PxHYBt4zPXxXUG6zGZFDagmK7ChiHWzKyhBvaiKSBwJHxez8Y4XqiSBVsSrwvyCnPbnsd6QaBTNF9p7BN1PgYXF",
  "key19": "5gbgqGk1u48MPqw9ySZtApuTi357vXx4bJp5vfsRunaxxHg3HMfZwwGH6ughMZepcAY9CbqwEF1gzfrH5zfsrPym",
  "key20": "3ByobomspqNtacsp6joXSbyRM4mqWHfsRJo8QGjbqh4TASEVPdJWN45us2fB5ZP15h6aQkSipGvSNB2TcuqdMVbC",
  "key21": "3DrwAuBzxp44ab31z5WtmLCu8dERJYqWfGis8zrVYChcPunBop5aYbdu3worRdbDHpucKX6nUAEuc517SL7ZZPJt",
  "key22": "6cDWWzFcUZYXt3WUo3Dc9nXxpMVLTScCMir5duRweYvtXGP8dRsbbz3M8heKwqBeDhAXCtkhWBUNC1NjPHsXTLE",
  "key23": "3n79ArQGBaTXUEjJAUBM5g6FXFP7qD4fvTPHdXAByC1KJd2G7Z2SHXtjAPFTrC4HKCDDmJvLQQHBTdBmrWKV2GLV",
  "key24": "4wCgfnCka4L28BUGUvm7q8jxmusGYxCvj4pgdBziZqVByrkhw7ouJFKY6FC4CtobV8RCwJn2PKDVNPpWRFVH31eD",
  "key25": "3EeSXhu3MkTy5rdn1tc9GBxTiQz81hkjqp1o9GYYie9US5VoR1VZZbiAMGn1GYcjuePcx356oMmp2ZuAKTbM7VP8"
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
