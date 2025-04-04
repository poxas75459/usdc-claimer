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
    "2pn8dpE5MQuyYnEp8pPukxxvGajqPuBcvVc6y9VFaQEWkwdMBczdMqZE7cpbVNbXxxtkEV9EtP8D2shDA6A5ihkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4STTgfeA92qHV1Q1hjdZ5sH1TeBPAuqX3zEsTzJCrcgC3D4RrMy1a8qLfafNGLNYBwsLSVM7xy24kFLU8noQCB7k",
  "key1": "4DiPgm9LecBfP1TzMCtT993kDmeZ8855beFLnDTVAJK4W4paBxCemoMwBZ3eo5QPNUnNqRqFjMhfbGFDEfJro9Bb",
  "key2": "3UMy9LdAcXUbGUjeAMCespu5Aa9fo3Nv1Uo8dHwUaf5XqqyLMVaw2zUo4n8yfmXQxnCD4JR7hNChRBKM4sErXrUU",
  "key3": "64SMeK5cLzEiQdv2rMa9E5jAf5qLHwWGBXyYto4jJ3ujtDqdpakgCexGG6Cv6Mc2e79ZQbqCsRLZy35kty86o2AE",
  "key4": "3qnaRGfapkJx1qHWXQ17rdkeDtYZePpijofqcAbj6YDU6fN7JjNhQzAgs3FUV4q3xMNVKMBfbXW5kHcKmCqTZRgm",
  "key5": "5V231YDakdP6DJijcW3ZctSxph2eYXHFJWsV1XofPjz1k6cLpA6VUf3rKYLgCTUt52Ya55MNK7wxLyeMq5T4MRtF",
  "key6": "vQiwPYwTjMK6AqPrtjZqpUMXQgXdiquakHnNdGWVdKMnxe2Xx3tACp9Evikj7XSuitYLqncBfAxABP5hngNZCJv",
  "key7": "3DyBiFCQgSTi5E8okhYbFJGgMWeqnpWWA6ZuKXe7b2GhCjkc9eb7eSGjfu6tHFxcjKwfS2oU1gzRC6UsyppKxD1y",
  "key8": "4kpExM9N4MXk2YLguSPHmCErKm5gcRcnN6gjqaiNxit6xrECTutgykZJeuUYriiftnshUKdhrdcxjJ12C5JiC5j9",
  "key9": "2mYuu8fGHWsG526jR3DD48ghPcxV4kZ9gGp7pNVZfcqeUeee6MDzzgvhga1d5LXFpJqBS6LegT8v8MpfTNswHKr2",
  "key10": "597Cs6My4dWffVckMNGwtiBmoGp6SBJ5seoTpq5T193PkyoANdawdwuoJG6sjEhxdR8Sxw25L4UQv1gNoAd53GvS",
  "key11": "z8M5DhVdS3xGgiiYuYUXaAyrs5Zho3K5T5dbBLietFNXQs9sjqfSZ2m9wGZagKoffivR65DQsWGwFPNQtaq4uAV",
  "key12": "4LQqXHeDWEWA6Ziq2tUfWbNecubHQEH5AsJeUYXKkCW56j2tL3kSNBWptB1KJoC4rKWwrpZ5zoXoUvvgG6xyVc3j",
  "key13": "2HPcY2C3T7rvPze3jEehuBJGgYhKQ9xzQ9p2RCkZP967nv4mDJYxe5LeQaxcPy38DXKZko3HzHat5tE6firCMKXC",
  "key14": "39qvATV5qSCd5JvcpWyQbgrG7fFvArm16Az1yrXNMYVBodLtHenpTKaGUzz8yR9VyjjBpNnyQePRSDk7wMLSKELG",
  "key15": "3BXj1BV2jmn9b8qpAVPnhYEgGz4n239KhpTs2E8pHKqnCbNcK4UAZBfwYRRkmzw9VFB5cur9pCM6Czr6QG1VrHYi",
  "key16": "2i4F1bxQjSm9kxbRsSqtaeLbefiT9Px2RCYgxPBpPjCGV4BD6BAATTSsjydpyW3CLuhYhQs2XpiGuZSvnRiih5J8",
  "key17": "3zF1iZc8GC8LfnNFJd8YsDEQTMP3bNUu6XRV8tZDbhcLsEPTVKsbeNbe4kxuvbFJtv632PkiSz1atmPoGga8KmAD",
  "key18": "48yJrBB1mQ8GZQwTBpX1jK5gSTdkELPN5dBB5gd1YCggBh5wzFPFHfXfSk9HDoe4ZDsc6n9nPzNfUzzCCZVXn3Zq",
  "key19": "4C7qYsxb1Ne3eWwbz1uA7J8nPvDpfvUhcqnS1J5EAekKxdGsoRipncRJQYp6m9NeUqJNPDLhLZhhyf1W8bKCBtzg",
  "key20": "3DFL8x5hQrsRLLsAFeFnUduF7Hrfw6cQEcHvycLAvmN5nPw5iRzAGGbEEWRcR2yAYGDXTL9SV4YtiHycFDJMuTku",
  "key21": "49LEZfrNihPY2gTtmugUnXSo32NeLdCZuYU3fpU5PQWo6XLi8yFw5qANVWGTTsR8yUwFLvpaTKSDSFUABrash6sG",
  "key22": "4pNZ7Qh1j4PrHuX3uSzE15JY1oceCVAeXdxsLqsyP2wVS8rNgfsshRVix8jgeDyud75rSXxvGwg2LCdLeeDb3z5j",
  "key23": "32P3sUAeZjr3YGckvxLVSGg158XpTtgBUAW2s5RPkE17Z66isPrzyhShmAWeJ2VQ3BqAP4amQfPaFhKMkBA6RSeD",
  "key24": "4EFZqkAKvkmez5bzZ9VnaBYDbEKRKU4Tz8KJwcpcNq6NvH5cKnJcvdxWf6wohdPTEZuPXAsLMUprbRo75qJusKjv",
  "key25": "4sXNNyE6ingSpLgRXrbCaf8vxuWEUNZJqAdxWnzHH7CG21vdFDKQ2UyhNRyQHi16uBaUuquQGzThk3rzBkcdjK7V",
  "key26": "3mcrPFMKvN4HkzFBK9PbKi2EwijqPmxpDZXCvnMfchgnD8ubeXBpcMZdSPuUC9UHWsHghf1cu34nEeid6AWXEVet",
  "key27": "2LFvnEB7GQcjJPqoGaK3nouDx4MJFqmGFh8gW5Yi9kjj7G7EJmcyPHwANCgTMTpHc3AhnqeWz2cfo55Tomsg7naG",
  "key28": "5ogVFxcc9i5XTsSR3kcCazfvCbqnpabALssomsVcic7HzQkpk4SCcwRgiYqpPvwBqiRq5g1xW7juzRgw4ZdFYbgS"
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
