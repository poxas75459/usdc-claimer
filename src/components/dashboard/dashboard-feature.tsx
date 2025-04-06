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
    "WNrApGDD8UcvZBG2vd7jEwrCudD23xLx1xtmi1rU6QaWjHeFZoprj3Ee9p5Ep9uapBFJPVehb3oiUseV69cPvcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uhoJhpd9eoruLkAck6AFRU54tDffhHKkmKD1UKHhxZaot3cD7ryPJMKxYu9mNQ78HPtW62yQ27p5gawkiFpSQps",
  "key1": "3NxmLKaaYr7eJrNjXoQSQE91zVviG8JNoGFAaVcszvRK6VTWSJX9Mh9xwS7NEvfkF3v1KfcWVJs9xbrRP6q9DQFo",
  "key2": "4oEpFdghbDVnQ44VgTQp6ctrqbjfyj8w9vjv2jQaE3t57teAXNkFDNGw2BSh9AXKn2Dj5onxX9GyHWjjLFqbdTbq",
  "key3": "3DWMUXCBa69uBkTWBNMcjyV5Q75gGjtAdMUqstij2iwvbiH7TeswCYLukViUKKzNuhkFzWwas7Hv3vACgMmUjB4X",
  "key4": "4kgsC18SC7qqY2w3wsQTtszWmxNqJy4AnUPK6pmwRk75NWwgwn4FShPQdEtDDa7nEzTVwoRsPuzwsHthYLJWuEaN",
  "key5": "2TT6tjTgHVoCsc4BtXip59FtXfquQGXqBX35BzJkN5ZRxTKdUVRkfSD6GfuCJAd4BaRhFzhYQyd6B4wwwff2We1u",
  "key6": "3LagncUNKJzMZ7ugpWkWiyqPbFncSvhvwmdzdqjXm5z1MnsmLCMur3LJ8NtEb9VYSzpjQ8U1NKctD8Y1fYgRVZFJ",
  "key7": "63hFZPrAYeTeqzRA5FdaJie5zV1tKBcBjtNjsHS5kUqyzzLWRoAf7pUrTvh4924EzPKkJKmXknepbhzEskyw1TT6",
  "key8": "4gxxcizfLStqXz5DxBeWFxughWS9uiJmEmeSndoLmVsdEzDSbYDt65RkmTnQreuFbMPChJQRucEBaFjfuNJZqXnp",
  "key9": "3wrKRncNHB1nszegopXPhxZMyTQkdhEe9N2cKgWg7KrT2xpLh9t4Tv8WG45Z4CdbwW3sQjn9i3uWDt2KoS5gGCAq",
  "key10": "39zMkSUd3eo1jCQReEjtV6z9Te79uNBufN18nBH9ZT8MuHN5eCyi4v7FLLVp9NnaMZfhGVRqMwuneN3w4fm8h8GP",
  "key11": "3EBhiFfsXqFmmZYL7fkEAxvPrmrQxbXi5RAtrPTSL8wSQZHyUfj2Jd9bXd5NBn9EUTndhkzMM92K3ZPhkHafcnNP",
  "key12": "4Kc7wvew9vmp3KabecxWfSRVxSv75qn1eCTyU6qjpUEVg7tS3gvwsndoCAAcbHpaVeu9z57v5EEZVRTenHFg8PYh",
  "key13": "5XeBBCMopVd7xKjn7ueQasoHif8xV2X2AwvUfsXHecYPtZcfNrWHtktBr6fi68T29bHv45DY64bdP26LZCNkxuTQ",
  "key14": "5SF4q3p5xwFKJRgGqcYLNV92mMMHxdyZdc3Ho9VEFbp7hJiuspb519wFFYzQToHpwRmCbuaczGP1REQKvwE16FYb",
  "key15": "4zFsnMJJo4keTzKsP78Zd6KzET2XrdK1MunCZkG86a7BeCyxVYUBo3k9HE1TatBqaM1XkeCzQ737Xp9fXnkoTNQz",
  "key16": "56qDj3j9YueGFnJ8n5YEDxBH5oTnThKrBCgxeFaJiiW2VP1R7Un4RVvzjiipYVf81LcEcuU2Do71EsNTeaG3TgdL",
  "key17": "63Kbn5DEjNKy9Y5mAD3WA49i6QkK6nWNvhtEGnCSGW4xJSCxP6YtgZfPHXNtmQvKvaVLmUUNuyqmdTk2jpaqNzES",
  "key18": "3b84RKFVVj2UGAfJBe7geE169uE8tbJ7yTgKd6U6bpTrpeW7oCvuu1jp5PdrTriMt1vQKfK6CtjLz3oB3AJqDBsg",
  "key19": "5KgRsmeCnqe1F7TANZWwCh4EfDepsJFHsS44TmyD5Mf1XMnrqhkLs1tob7kMyBrbHZzP1egMXQmS8PvgjEuHyEgv",
  "key20": "4xSfHw7YmyqDs32zSH4Rqn8ANzPgDCyUkZCmY4KaDhoegBDDnM2m1bwXtPmGFHWAs69PPpg2vCeWgRRqGumShec5",
  "key21": "5ZVR4s9oyajLAoC8dsYENo5Me39xetGMUK8Ji7ZGc7ts92t2aE8P8MQt8euKhVBKKGBRNKuge77n2TSnGZkt1r95",
  "key22": "41t8Pda1zmHsJq6tcBhxkUASB5orgQjzwbPvoQ8jdAfWe1n9m14XsRVTqiERzvv1fykDau9zpbf28qPcDTLmgJmr",
  "key23": "63GT2WSQCHhGrJfYhfuMC1rLPQXoJKGyqmLFukwX42yDq4Q8t4XHodWbJXvvZ3TUqswbKFkvUGLA6WubNNyu8tQm",
  "key24": "pY3TJ54HcKKYr8S1cXRijv1uSJyQ3ytQAxe64xvdEfSFt6UxtWTmXjae8sp69xLaWGCKidYRhywWAu9UVqFxtHY",
  "key25": "66qVYGsyQuMpMP49RMFiNLpvis9RQBYKLG1ZuFZjJU6FP38Pfx1jSz6HYSpZoJkwQEXCVXriT6A6YSoydMdE5qWi"
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
