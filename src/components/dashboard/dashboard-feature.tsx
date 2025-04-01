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
    "3yhXVUsM9mLPbs2pdUdgxDYQBwDj6YJxiNJwmAzKnbp4QMwa7qu16TYXYWEbNHZ3C5iwkTjyABQao5Jk3huxYzHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTRjUVk27EHvKso63r1RTXX9RKUtLqSRMpSMjnr4pLqFRaX5DEPxqrJJuuvEfnrvYLKxsNqnkdx7UuvpqEWK6tD",
  "key1": "ee2D6fNH3whRUsR1HKfzuXij2j3tdoe8nvfoc6UCqSXvYQMmsnj5Gcz3NstD5PdqQ2DWeA3Q1WRkqzvRfU1g2Ci",
  "key2": "4ikJUaLAXz6JqzqF5gEnkTMMCYz46CoGMCTjUYeeGMoBKDVoyofBwSFgav2JkHj4RXxgszw2H18AZmTFWebfWu1G",
  "key3": "5Vxn7tpnsseee3rxQcJwKQtH9MTyDKprst3dXz8K5EJ5W8BYmei72pWRmfgW14vraCeG5ZwsAFssxegKKqsqHoFD",
  "key4": "32z26xLMYZEMpUjYduLYaxbr9t9mGX3kKwnMmj1tvTpFuKPGK1DjikMGuKwctEEm27ZqxDUQ8L6j59EB973GC1Hn",
  "key5": "3ys2KgskAoiaXCDX16Me41UX7fcgwRU53EYR3BBcASDTKHXk4AaVAcgjwezwW9L2v99jRjjYCKzAc4qR73UHxYat",
  "key6": "4TS37fmMfTUtuKtP3VZ76CmdUhoVAi81qyPaxM9NGwfZsLBRX7mrXNPr4Kj3C2hQRDb9bM35SuwYJsJhepkDNHAc",
  "key7": "36FJZVREQXaAKtHk58guxjxKVxfiqKGVUNF4nchEx72ZKzxEV6Cp6gp3yDz2xT95zbCGsvYqGqo8SkKqn3aQ5kAo",
  "key8": "2JuoxBrDYq6c9FSPqEtB5W1spiLKh16pWY142w4KxVpPfFRfimeLDTAPus9CZdtd9Q29AezTBuXghk1Z1F4bYchN",
  "key9": "371gTZkm7VvvwmxjZcSKMKHqMfMjDdw7V71DagTXTYZc151JVSy4cRBc5QxjtSoQ8yx9w5FAnZF38vNjpBaVWNse",
  "key10": "NV5tdqXcfJ3KdaFYZJGMNVqCR44FHcrFLszFbspSrAB6s2QFXFkfTqvKX3A5G4qjFAkKdMVvqsX1DVu3E4cG2sw",
  "key11": "3ppx6n75xsz9ZiqCCn9tGzMSAnxrZDJ4mzmLV8mvVTvjMLRo5nAL511r8Win6mCCMSoLSJp1MYB2t3Hv3nHqLrck",
  "key12": "4ia4oT52QrEC6cWgqAStfNqjUwn4SB1Zn46voGe9SDEwQmy1mzMPN5nFbNtgV4aE491Ug2gameSv9sYxunxo2LKX",
  "key13": "2gU1hewPcV8C3PRQYVYRUeDh6Vm3Z61E6KMGhRSgTUxTWum6sFZwJ5CK7zfL9cCjqqzUaFXfD1rMLHNcjpRvzhjj",
  "key14": "3hzzbfdu1eByDCDaPuCf5nQEAQyzbBWbmTgpYbq6mLgasmmmGa91y8AKKTuCfN3iJ7XSBodns86eGkQdGbzn4uiU",
  "key15": "3AQG7dB5sBxGFDebwqt54WHuBfNvFjcb4bTjWbrDbS7DztTcsnQxhrn6v418P95R4hrjrFx6B6UdiWgfaLERPauW",
  "key16": "56dJN8Zz3wk28bxpq4qtX4yZdeb8UbZJgNiTbwAqhWAyhTp1Kv5tejMygCQs4JiJuicjkz54C2u7XWtLpJqHeryY",
  "key17": "23v5Z1Srx89r5mr1VrbSFDK3yaQiyjwqgDksUnUVbpbYVYqbWyydFnwaNDgnCoxzCnwAeY1arGN7fyVhJAqD5h71",
  "key18": "2twPucUi4zK3nXKkmD7iBXfe29dE4qUiLYv9c3anBCiFptBehCYVuCzFK5JvpDkQxACSE1tGx6SdhoHaB8hFG46N",
  "key19": "3z162sVhHoohJbC3fKFUecXJPoPTN33d5ohhGYf5fd7qmBzZdfhGqLCZR7kwA7ZzGQ7viZQJuSpjy3moMAqbBBwQ",
  "key20": "4btXJnzv4D6EEkY13UvhqAAW26dadWUiD7zNqpuCHPZZBQEhpoHuFxuZKo7DcAh6t5KexjqH8Rb7XVWpCg9Gmy2r",
  "key21": "5WXnm7Nn5v6EF2eHMnNNM3CF3g8Wcmz34kv62yaCaREXoePFTZsKKzsRTrP357hT2arBhGRjBMyCpDAzSpEpAf5",
  "key22": "2FzyiP9mbkN8RV2hVaiar3v1fwqRJgi4XhYQ8KMqoZX6BvQmcB6Lee9GAbP8jtxqMZFvbdRKVYHwsSwuLCtyaG5b",
  "key23": "3HmRdwkD2LE2ASMwpPaaKtUXYHcSh3M7TyypxGzEGj6rRJ1wt6LKLVKZjicdHri9QrMkn3EqnqCEDcrbnDY7UkBH",
  "key24": "3LM7zEwGCPBZYXYdiw6DW3cY7Z4kHMEQSTZnURJTPjM7UJvLmw9a9iJtcQ7LkKRKn9yMT2XhigxNqy5oMS2wvVk7",
  "key25": "39kxnLJSB7Nqt6GzEJ6bzGdN1Y88YSajLFGCnB3TjCBhE9LsbitzJc79uyDgSpas6eHJypNRk1A1VWksGBtCUnjY",
  "key26": "2eNu4GWMM6ZdsWwt5XdHp3URTEABrA3y81nusHeGXNP8SeK54KazLZEke8RLTdcYA66UFU6XLo8wsUYpEeQ3GcsE",
  "key27": "4aCgcJHhaAjusNq5tuG42xJpQmdyi7kXoXSQ2AbYdFXQfdSdGYYB9urQEGPhjNu9d9H5WBQ5s4HPPguYTwDPxQFL"
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
