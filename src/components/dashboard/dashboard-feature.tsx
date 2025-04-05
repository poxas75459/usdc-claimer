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
    "36dmcVmSW2ibV8yt69ZghF7X5EqRtvhZzFs5sKseKi2AEmei7nUf7DM4AXVHD8XrDihsafZKdPLYKKszPLHUw8Y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5pBhSqHvrxsBH6iypFPkN2NSK54apiyttrj1TzkLswTb4MZGhDReHAY2bfbfWqj4XCc8dvPA9je7DnxNqoEwrc",
  "key1": "2uDCqLT4gp9hGsCpJbki6eELa6tgK64MGexanNoKYeZd5nkzcu2snCDmi1nYVfiKxFkUmjM6ZbeR5uwQE1vcYX8R",
  "key2": "w2Q3riWKQxnz9jwiAwdjW41V7Lx1KFWUchHrPztGMqeu22yZyRz7jh6gMMskK9BDkA7zD1VSqfh4B9fDT3XD9oA",
  "key3": "4x9cqiLRKXxybm2E5D5yaqTgcvdh1w4V65kW6Skg3Gw4GZinfu6WsdChcUNKooabGPgSxWtqnhdCzmbL66DeejSt",
  "key4": "4qefV9uM2CJEyfvs3zigWriAF8fcnRxt94iFt5C4UrTFoxpE6L8R5aJqmv36uCWb1KwJLArjqxDRozotmhL1chLL",
  "key5": "5DvBnatfBHS3uGBrKjZcNqgbUV4YEe5XxCkwEPfaYvNtsTExP8BYWFg2DdLF8nZVgxZQCdh61GevH8E9wasYEgKM",
  "key6": "5cwA1oLp43e9Ts4QagUkHmQfpTDfFera9pf38BqkXoWT55hQpwuefwV54F3b9nHFspG33kcpw3pGUrQYDWgGzPy",
  "key7": "fNgUWrMGigFwjGRc9yr4PSJ4AGqRsS7BSsLFTrPcCx4eSdfgo829Po1nBzBhypM9E6oq7wUsBFhLH5GDba1vqZP",
  "key8": "2Xce4VfsPfjzNKfCYzmRNeTsAnwz6dmEc6JXE5YXTxfM86LnR67jyrm4sf7F3FmX8NtBxjehL97bEj6ua2X8L9mF",
  "key9": "fYY2CgGv7xjyq8DsAVzhQCpfCyTMbf1UXNbEWDG7EJKUvzTU6HAWSYtsjxUkfZkk8x1fi64rsjWzJ1wjpT6Px4r",
  "key10": "VeigKn3PEauje6YL2mUBuKUwZi6XpTp3HnbcDb7tdKEq42v4jUmnk163Xyz8cHRkqui6hAnA7KRqSpUJkN7Bxk9",
  "key11": "sJtkucNyVjCDwDp9c2acnLRtNxZ5gLoDTL5MwQVvVz6tLv3g5Rk1S68sGFwkiLTsAXQ5TcYBd6WB7rBVUMo5SYc",
  "key12": "5Gqj1bRB6XVMWBVhT6QkSegkX59P455QU7atbAELsS2Q1xLTuQbwTgjw5UTYm8Zi4udDC9WCcaEd4zFpB8MMUz7X",
  "key13": "28CmHireQDioVXe3YQC8dm2Rpd1B6j6ZifUVZFEPHeDCiFicvNF9AxbUkhz5WTenyTjVrtzCnBc7JqSpiDAcRNdB",
  "key14": "2XyCRbZLSu5j58J4CB9But8spK1nZxJjdY66uBFjeHJPwmc8uWpSAzjHDJUPUWGXS7oyBYBvvrdu7KfbUsD3hFFu",
  "key15": "43AxmrEKCAHUeLqmYkQD4mF8HWopLMVPYmUKJJjveprQrcuoQYqMc1ATj56gLwuxZWMcrosJkhEjYG3QNEMLGpQk",
  "key16": "52KJuxDCnqLYzJwfKH6bHd1SXJUvxozdii4m7zzzws3TmUJuzUMaWXYGq1yGDEz2v2k6nyUZVunKc6aNdDTXhFci",
  "key17": "Dwbe6Q54RVrQTsFBTtZzMZQCHZcXBZvd27aRfqgkgRfcWEMLBwmhJ6DaGxGUbF2JXUuhwv2isSYwAoSZtUnpoYv",
  "key18": "5mi1vFZgc7XhonBd8uLX5riyx1uiJXaqfmfVR1ZUx71GqxMSBCpm3ZpLXzZQhnDPxxRLwEPv8KXsQFF6ezMuFskH",
  "key19": "5cPMTaQ542YzgrCzADuZr35WjGicBNM1hdSEtwZffpfpm2k3Js7jEhuYUje3awT4GpSFk5FzACjJaC8HhNwJAVpD",
  "key20": "5Kyy2ECQ2ENFavmo6wLS1XLxVHct6Tb7ervsAaENt5dLgWkfkRtKY7g4XGJf1gUgrrvhsL2VAZHhMGU1a5QGDX1S",
  "key21": "4koKH3ynCABAshnrBH6sLAStgxV8igyTcFni8eSxjY3R8ENmUJNFFKk15bdEE4kQmsExHLqa9PU5CAzFGnoTHNKo",
  "key22": "3wAUuuYAk6jvf9gDmxkECXR1k7fmGvCwDeAUcj2wHfGhQA2Y1qxKoCuskz2wL9N12zD58xS6GzmJi5VDCVANrjTa",
  "key23": "WrYZrrUL6XPp4Bvp4RoS5XBsbtToNczSUYHsH5ZXs56DAwd4TtA7FLNvk7N8SorouoLpArmHme6dgNgQNF7kgQR",
  "key24": "drRxNqy8VMdMGTKT18TcaUaXvnGrnjZUEwzKXDH1cqcQs5njs3XFXHFE5R13iZWEaPkJLhoF61anJbpmGuRDfPq",
  "key25": "i4VYjqiTuMb8eFKTcDyJAXNHpNfvM1aUAViSvGiTsXbw7og7ntaaRZdCzmeiQ8TuT5VCazKVqSyLJEU5nGfr21m"
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
