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
    "5jbUekXfayAvTWETC7YPEgCdi3WZeQ3dScEgkFHhsu5uWkTKgiXVk9HrFfDa2NP4eem45fYFXF7JD14Auh71VsLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aftBiLZ9u3sSEpi5QCvnBUQgP9rERjensZRQGBBRjY5HjH2uyTEp5oanBvkr6Wn8JZ653Anc9BPmmFB7Y6ni8Nx",
  "key1": "3bZ63Be46LwtX3UFuWSXSzKCR1W1FvBZcQeD2AKPUSjWhVrYZE6WBkKDxQ18PpEhRt5a6oyzK9WTzswZW9m9iEHM",
  "key2": "5ALjEWE7h29wQytegReLmDziokTrR6DNbeqdbBBZedCyG9Xi9CQY6Grt8MLDnzp5jCSA7GqxoQvM8rRRrGU571BZ",
  "key3": "2ySnaYEgCUm1PSeGz9Jhi2DRJHS72jFMHVuw6DvJuaK9GEqdR5b3ZBUV5cHDNGNc9tFsm1hoBrrhaxsdyZGpD1Uo",
  "key4": "2nJpuSVhGqMDeZhEHvKdWnDaRwGiMWGmVEGY6jvz9PWJi82FLJFxQcFkQbBWoj3sXuz2Fdy9jM2bgXo5QC9Q8zBs",
  "key5": "3xTwRQV5JpZh7iZJuDW5Yk32rtFX85sgHtubdSAdegQgbyg7y5TUQX6B8iaKV7rzyc3uF9ku3t6pKHgWJhtw79vH",
  "key6": "38YXxyBhAVe7Ha57rspNnS787prGhDjGdjJWDQUUAVQq1LGu2sgUkym9nXpWxEYWnn4Kw4mApC4BRCtcvktdYpkF",
  "key7": "3X28HtA55ex38vXJPMj5HL1FeshsB62M4vJX93FuHxvFCZiE7pHjMJahUeWrXNSu3AZkLpQJDQi6mRvfcmfdFPtA",
  "key8": "43sfSW94CscKBT7reVijuLXsY5MrhoAv2epJ9qjBE9RtRvsKDxzscoxC85134sUuj1GGpmRZC9jAKWCu9ntd2JRX",
  "key9": "5MKhgxsYNRguv8ncxuMR8ftSxtaKxAcr4Uu3vrNhgppFtcj144WFy2VxyaNNGHViMBLWZCDtakZCUu5TtrVvQWq6",
  "key10": "5BNiVkkFKD5egZGwzt53pa334QevJsY1KtT6LV29zmyGviDoYbXf1Mt1BDq9AkwLREXwCF122NSfE3z6GsVLECnT",
  "key11": "3SgSGr78E4x1uMbFrDWGCNhtssGCv5qQHaPFmvDHW9X9r2VmHWQFkS23nr9xmAzhs4EVXuXXUEGjh38FMG3f5A14",
  "key12": "2utbwuBwhMXXv65GRwNodXuXqcYEVvhYwu5EzFQbDZDo52iJrHZECc1dbHhGdtUacNJR1jmS8SD1zhcPGqgFBCpC",
  "key13": "4dPdmB6ExYiFBGME3NzAYDy4R7FNhDAg2kaVe88T4Z3CdMbpZnbBuDogZsFEgnew3h5JfA7qAvGSebuV2Gqmz7An",
  "key14": "4fAaPX8k2Z2xNdXtV7UhKMuLNr45XYyCjxcVuETiJKrpcW2AGfCQBfjxJjnghcS5Qz8QHgVgNKrE29zuQKFiD9Bv",
  "key15": "xFtcKzXFXo1uuh59xTEXBQPiiCNbJs9SBBxtT8FTgySeD1Xi2GeAUMzRNQDP9YU9LrWvqom2rceKaes36v85tdS",
  "key16": "1iFNracZFTCzbp2f7DV4tRTj9z8s9cwegxxaRXSwKukTrLou7YVoHEf8dyN8TnwnGTN3H5JYkPERyRRaEWgqjMJ",
  "key17": "3FPX1jKZojTAUitu5C8qAXHnoWGTm2YLZuZq8raCYMUvfqa6dqXcPvPBxLmvbT48TtKciZ4x7jcRuDTW8ArKGH3n",
  "key18": "2WejUSHdD3uuypruY8SXNyuTSLkTdxchARjT8pZkCFPdF5ue3cVqWzDLRbGV7fJCqGRnAJn2X8urUCRFHoyZdGP3",
  "key19": "3y4uzTHv3a3NBtG9KdA2hUEYDyXF74Y5CHAkHCXnnnc4pux44VtKpGntE8mLeVnSx27mB2fSRRDe4uUiixv3aJ4b",
  "key20": "4EUDu1jiN1VuvNFen32oaFYnfyD3wuXnMFtbPUTs649467M6SRhubMF3ftdUK6SRKhQakb8WJb5AkYhZ51K7fiLk",
  "key21": "2BPtg3KoQWH6xPUtyAPKYBrx6XoUiNSXr5uNUGqA1SEDhoVU8NfjDdDTXZsdBpKYWokEM1TzBiASgVoxFnfyUZfG",
  "key22": "5Y3XNLoJnJDjMt5SJT1NauFCxXteMCSUJaxZWigVHo5LyDMaxmf7YhuRiRW8magoX3YTtWR4YksGcHxXxShkp8Ys",
  "key23": "CJBrCeQYk7MUrMBjZToah7UG4bgEYWLFSpKLKa2AjKQpNDUveMAZxMgyJSxEZtXvXCFb6Hc7FFP2x1KJAeL2ojh",
  "key24": "3TjZLrg3znegRxFwi6szTDBuhBd8jaDEZZyUGKWtGdiRvVvmJmszN9ETJwGKfuhSHvF37CTQRTkgCeGbmH6KHmrL",
  "key25": "4AQQQihYbCuaEK144fUWRr13gZtxzrqk1Uy8H3ynuotbfxfmtuGVsDC6e7HcqLtcBPssqixpcRGavqZoDpyJoPb6",
  "key26": "2shPxfSUtNS2mTmsFKmWGSSL5tUZcY1BZDv6dAGUfDRGYszEomFb6kyfWxJBopp1mkzHAuoarqNpzCknwLXNYueQ",
  "key27": "u4ZDyMDyRSkE6zmeenpuUzPBcz9xS5dGB8tpcYGPSfaSPo5vx1uhWtC7jngMeszaUnKEavn4M4earbj46yNkRpx"
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
