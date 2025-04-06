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
    "yNhp8p6pFbhJxFMdTgfUzPqaooZAJq2kMqS51SnZrBEXFgFSPGQdJKMEe678QwmHr1HYM5jZGGnG4BVuRjJCowv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVBVBX8x9YNSpzsnEjU7RuBNzijgHg6GGAcdgRJhvSUEjZz2vbW4oPeTR3MZJf6bTXb2yrDsazhx7xK5DCkTStx",
  "key1": "5q57gVUJkgUmX93Qn86A9HAH1sWVHkhwRbg6jrY3GyqYoqwNDpKVNNbZy6oYAvc7croNLirK4TAvvJTZAjziDGfd",
  "key2": "2HU5gYuxRc9u5NmQnAsAop3g1PUihhwNhe7Jnj954FGtpu84YqXQhFoXZETqfeLRpGR6SBWeBVVvBu1KbKphnZvA",
  "key3": "5xgoFF7qSha6c9fkqr7Tsp87yLRcCdoAfqmuno1ZisW8rAXrX5qKEGzAtvb5atmpCFosB6MYpkrvkQ3nzkmhN7J3",
  "key4": "2PfUoRodhBLAc6cw8N9JmLo15qzzEBkoiL9JrtiVEFu3tU5vZa435LA8PzTGacUavuwfAxRXx5bktqDMmkAuxrh5",
  "key5": "2FVE7vLnkWjyUfosYWYSoV6caDHDGJmfB9vfMrKGdyTSUDWb8MQvN1avotPumrhF74Vh8g3tp4giZwtr4Ji3pEck",
  "key6": "aDwHtirpSUPBPPQaSomoVXeXDej3Fs6yGK35MFHLfZwc6cpcKYrM7snHbPZJ5J27D5roCSpkcAAqXz3YVDPxaMQ",
  "key7": "hbgVcdMVZd7cQNVNYNC8NiPxTGRx5SJFrriYE1YmWKTFaHnimPhcnhW9gWYqoBjQRqFbaLD3m4UTRURuS6yUWL2",
  "key8": "37E5BAXxN14Q3UrE2eeQEZD4uhTizFe9t5uweApZ1pqBUciabda7ujLK2n8AtHEFm2tJ1Db2ZxE2TjrrMABrjZBE",
  "key9": "641zYkizRXprvpEzjgEGRfUVxVUwMjGS2MnKs1zYBARwYcY7aBHq18gvuANLVojuJEtWvhD5jULHT2jjD6hFAfHN",
  "key10": "4ZQ99kqZqm8r1c37dh3xWhhXkKfJ1sSGFyHUZ7SRi8LP9eqz4FXjusXRcADY6XjCRxmZ8qNEinq8kPbABXzNquTz",
  "key11": "2w7vB9wWRA3e7WUfe3zu73X6or75dka1rV6fS8qdb5U6KiXhQCAPD3SHAnPYKES3oZU9jDzqXcvVxabnMhptxY8r",
  "key12": "wyQ41MYawCDHxiuUiZX7zdD9D4LAmWUoTTrXvYMbKDQb8XXzPTc1HbyvbbfM728rQ53nXkiminRqkhLK11fqBxC",
  "key13": "4b5wmSJwU9Nbq58chBh5F2vV9SbhhihHyA7ojT9XYcWDvLs1ANGRe5fij7WNfdo29GtFbzWg6MaJuoAGfoL1Vpr3",
  "key14": "4Vr8P47UdoX7S1Bio7cu3PBUrSSkQzptkZNVohoDJzhKKVqeVp3P7cdDumfyvo1Xu9UJTe3tbFMhoBY2q4zGXhsf",
  "key15": "5BDZZXfT5ArJRVST8TEUVYSCW1ekZGayWGtXLaiKvMn6i3oVmS86oq7Mr6AqH9BVyQi2J8unQTnwH6yfxdz4Ww4s",
  "key16": "33bmMh1Yfdw8GEwkcxKbTSxm296EhwUAEgFZkhKUizmZWfSDBScyJQtCwpZkH38y6x88FETwedc5JWfH5W1WJL1c",
  "key17": "2smUzvapUX8ioFjF73NpCsqopa7Gqv3sURSkgtPTaUZS1cFqFP2ADSpnXeu863HnKiUwtWVudxockJR1xQDLF2UL",
  "key18": "4vPJ4eeWkBhEzaXkoT9X6BSsrDytw99oc9d345pu4Mf9KE39zDNxq7BYWgVX68JgC753eKKijZ2ENUio6yTyiGtN",
  "key19": "3GDMyuxkahuysjgadMhhj77hzmitQsdArggUhVBR29zhG6Z25r7ERddUEneeYrsDmGRFTrqYG6fNehWqtwXFYWhy",
  "key20": "L1T3D75kqdksmjv9AHFqoHmQTRPAv1PzU76wLsNEmFm4mH4pF1482pt5J5tbXGSEMzNLhnbxzC3MNNL1X9JQ9sn",
  "key21": "nRe1zULGQ9PyroeggvqbUpVT3BRAexk6piq6YyLTrrd3Uz8nGmVjtCpHfvQb99H7WSsHbrZCEnoZzEw47WNgbXm",
  "key22": "3GdnazXvBijX1XCEZ83ELAGb8jEPrg6tUjfVzGxwkN1RyYPYHvGLhASaHXrNNJT4qBJr8MHqkewyKEFNXm669XLK",
  "key23": "3eNnfdAcVbjQwa4S7Y56qXghSTuzDHf5xNzJMNU1qcZ2AtCn5X9FK7Sok8iqKuwZe651Q4sac96GpySE1MRUrorv",
  "key24": "3Z8TJZwXWpZ1JspH2DJGqVzdHiSdRFWg4295F6R8bEKipwqXjkHqX1X1eM7sW97CjXD2qfBVeppGQP21UtD7HWtJ",
  "key25": "46ZRmicD8xE5d1XyRLRYLeS7gkGDZcNVEFFSasCFveVYtv7sPEti6Sfo9DKkrCDAYSHLH8Gz9E1LtoaLA67oceN5",
  "key26": "WFfSztC3jjUm4hT9Jezvnx1yEoWc11eJYPhWpfY18ji9FNPbewTc8LAYStRF8sCaCA7cErPbY8mbGKqb5DMxVXS"
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
