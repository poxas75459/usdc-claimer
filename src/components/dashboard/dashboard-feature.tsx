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
    "4deCxg2K8WwwtojZUcjYd6JjdKFFrkA5erTX99mEnX4sxN2Q9cUYug72xbdnGRBxHBEU6nUY6AqpDUe5qB3R6Z84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6UBRXjRU4egic4xpT45HGvFVRnrcy1SXuCC7sF7gp6tzewmp1FRZiv7MgCibaVhgFRvPA3jRkKepaKLoJh5Zoj",
  "key1": "3ij1tNQUV1BNhs9cJm8TmL4kiFtYabENQG1NZySSoxChBKFJcd2WjAh8fandoiTFa8oEPj1j8tbRMYrJuisJi3Je",
  "key2": "4Y5XxXSkCn2Lbszs2phPzV1KXaLPDP7weULTDn4Dmf7hyNPAxgHEpmfpaydnMMb3zTn3fEN56e5QHo8NPbiWGX7c",
  "key3": "1U45iYdqvUhxi18DU7E53DqXa4ZcCMLFNDSmMnB1bSAKcX8BxruGN1y5Vw19Pu3q1V1m9pvq3RZSYrYocNS1bjX",
  "key4": "ynt3SvmrygzwiHwro8wnG2zZye5Fszrd24e7uwGdXtkkxBUzY3LTKmabxSnhrgJTy5wGcSu77SCk5oSrTxEi9NL",
  "key5": "4htjp9FDvS2KrhCQPJwZopVwU9SjMLAJ8eHTVfjvZaMqmXjKxTic4iRagaSsK3CNw7AxyKJVWM4xPj9wo3Nh58fW",
  "key6": "2BbEx5SDhWrZMzuMDFoaTFtQ89dVpi9DS4fta2Kn8zXCBFPtMDMAdwPiETqtHq3E8WzwuAVsaoL5pjbu7AECEYLh",
  "key7": "4H79o574XwSKnbGixeewFqtKCUksKReRdmVniXPaQJBKdSQ3VCegHdMhGiitfpAFauH4xtm1XoUje4h8nopjwyg6",
  "key8": "5bYoZjDjkJ4MuigUzsTVVDBHUgC9yVpzxtt7s2U3wURPQGicRbPcZks42F2RbcEUpzsPnBhZC5K6Dvb3ucAWkeeK",
  "key9": "2uNjoVmW1KHsuVREsapdMJk1pEoGK2BDJ1vhXYrrwMsdaFi8t6Wyv6RBmK2YuBHxBmH7bXz3pAq9nu4hZZiciE5W",
  "key10": "QobZMKGNjk2U3LrTjtY1K7Hx2ArJ4QtyfSJp9MRmwwdyXhU7Y4Ry7z6UfQ74vJ1MiPSdsNGzPRTxKzvHQdgeudx",
  "key11": "2bSqsaKT96yS9Pyj662D2vEWboB5XFHQkxGmwa1kozFcurZrMAcRKTWh5uh14k6U1KgGB7vQf6FZVpnGVWs7ga4m",
  "key12": "3cwq7yAVpEScBZQKMwfP3HrCHi9yLikifFTEXmzvC3eJ26X9tZHpP448vBd8qKZ2CKE17fw2ATbHCgiHMWo7bqy",
  "key13": "4ueWGEgt1sUArWZrLuxNf5sFeZCuJxJANKpPp8VywK7L2UaQnQ52g2Wfx2LhhjjRJ3VxHQMb3R8LR8MSAsNu5cQd",
  "key14": "4T1jgp2qtByhJ5AUfgs6tZQgRa87M5NjFM8XGqqAKRftns8UbrV8JMG1zRjQZcNUtG7xJn9UiFRAjD2uBt8opmej",
  "key15": "3VJYJZ3pqpHGbjPAhr6vWEvGqyjfxMh8um1pUyA41v55ffrSivPojVwC5K6WttEFfPQGkB5N8iWLZ6UcwsUuokoV",
  "key16": "xydTs7yGGpegYXNJeV9Fbm2pk4mLkHRdMpjaYEVcsGfp5M3htt47csJK22VvPBg934RpEgA8q2waF3HtJfNRe53",
  "key17": "4Z45hTUofNDUNYsm7UFhLGJ8vZJCZLNHt39AjQmV6Zs2jCVkquMdFY4s4RPi5xpTfLFpQRFnTKFyySwt2eKCJTRz",
  "key18": "2UzH9ePehMMDsmfZkeAcwv5L87D1SX8f14hryVo3F8kfQ8yvvF61N9dShFfy3ABkhCDm9UZXSQ1gG9QDX5ooXQph",
  "key19": "vcBpmJ37gjUgx6QTJjF8kXVGncWFVnmYgX3XF8Luorurqw6ZgrLDqzierHJYqFaEoHFDURFLEpfTWuXukFjqgWU",
  "key20": "3R2Dg1Z36wELHk7aAMdhLEZuuP9gWpL8ZCYN78BoX3Ln5WQiSk3iYPFNyQe4vSt7943WNczffyprrovDQGb4Lcj7",
  "key21": "5UpaHc6GLWKr78Z2FFHkwknHUVpDjp6DybRsm8nLdNV4XdjNSaoHMhT7HKcjR2SPX1JPYFbSFVvVXRP6j2LJ2Bnt",
  "key22": "3oT5ZifHjjYcpQVRQww3U7vr8CK6p9ou7cMKwug3ZiABvHJVBxfdUX3C1K9bYPhVuyxpgdrG7VBTQdGt3Cc1tF5P",
  "key23": "5FnRYFr8fX9rYxUmpERYfAwpjAgRUxK2AfPKFJ1p5X27DCGiHKccD6Pj3FipHdWTvPpYzqboi3gzT6xUf3JnmNCe",
  "key24": "2Vxoe1xb61sQ3NKPeJM5yWvNejGnfYRSkKqXNznHDSwPJz2rbsbWzDsGbs4uasdp4se5bmPp91eH7Qicyb795LrM",
  "key25": "297b8oz6eCCgEDd3piLsF1xFjAyVCtbGJ8RykM6zUEb8X8HhC1e5A5Sjwc2EaUWrRA1XAZFdxDexoMostSNPXLMy"
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
