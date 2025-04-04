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
    "2WzCyep2RnXajwdQrMvheJW1GVWA1QaMGwvHTvAZCnWGwj38MgykN11tyWY6sPxG5oHrS93K1HoEEcpwu4UA9v8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GUD5XaCA9Re5jYNSUbExe5G6PtXw3wEZmxQmmh4WKU1cbB2LvKBwM7tY7CHBJtnCqeFe9iTVqWNv8aiLNv1z3LG",
  "key1": "Gseco5vTBhnjsJ8B3UzQasfqH21KmVBHr6FBnH7Zyw5mS99A1QqaNAktiyp44sGdmnVgkccJicvNeXECMpyBvfG",
  "key2": "p5UX7hkkvM4xGrup41cmkQqs2DUxApkLVRQT73f6TMjunQA7o7AuLTnnerqWLxXipAmfDancLpZs6CynCFiarev",
  "key3": "5vJS36oqgpCndxowpiEn3H88DFSKnuSHFg4cNY17ez9Ty8UkhkVsjTg4NSH3YGfuBd7M3NYQAq6xKo48R4UGyLP3",
  "key4": "2sFwHFYTgFkxLwCZvUy3sxPjws1PkF6FBBRYSJ845TscVJ8kTD37WXZKyGbUfdh68qAcqnoBZGJi5hg5UZtP2d8f",
  "key5": "TWsQpfog1tzYnwndcsVgQZRGzAtKm9eJNaKNZGyGnTDnEcQ5u5yoJ1ETpq3mdNipPdWYwV6NLKnbLjH3uaowRu7",
  "key6": "UbkUTTX3fcn9ayhNxWUUaTTZ3Brr2Em5W5ou12H18fXbbunqDoLhiJ4ozqiEQLwVXeM8uXKfRixmfPh8ACGqPSS",
  "key7": "3mzoA7m2pMMBwtVYDeLjyVmJJcQ8XypWuvkQVLiYMd7hpZTY6XW5ZN3rhwtu951brGM2KosKiU9oxEBxG7ahdtD3",
  "key8": "4MNV9AYhK47jiUpSyexB441MwZjkZXFxMQw6VMm1C8PsBsDVLN2v3XkF4hUPm5N2y5BNLbo3rgF92dVFnJx7czhF",
  "key9": "4aEUkgniUEfuKKSxY4otKS9RC9f9t8U1KoTAvd26vxbeWddMSfVoBY7hk8qBotFBC6cnqf2w2R8aF1sVnRVtpvKu",
  "key10": "3aFjecRjMxPyM6KdynpjNugsrvQPjAa91rFqpZJhdF8CM19UpPqdQJz3mBrNyFKwciGfa15PYsDa3hRn14BNGtpB",
  "key11": "5SfpkiRP3dgWdQpssCoiqe7KJZvyBnXNvmgKmfR6VZzjdJeYZU8rFDcXgPW6r1eYdWPcCMDzge7kRBiPdYDt1oKG",
  "key12": "5QTgKDGMLJHrcrjAy4V1PhRu1TqzBsAg9x7fzFLXPzkWSw7571RnR94Novs88JHNV1b9d2KKFJjhheRtearwbKQm",
  "key13": "5r1HGFuKcC4mVPbdoAnk3W44rX1uTRjRfFKvCQjJvUGnzkZTqdABeAePGyZcs89VBhnRjckqQPBPZXByxJLwpbbt",
  "key14": "2cnD1zR1opEa8L4cPa7ZoQ3XS3mB8rwbVrtCotdgSEM3VjNNRfXZKKaArMZxtiyQpK1XDLan9yJqVUhqdAoFQUxC",
  "key15": "4oN9T1ViP2sRYi2spTc4zVQoxJKtXRPN2ufXon6r4LJh9Hrcg1ysJZ4TvKcn24PrZ87Za1UJKorrLgoovj5cmQcW",
  "key16": "5oNLg53sugVzTm9Gc69PUUQvbaZqMMKPtTCPkuYCegYhb5F3TdCpfcAnGnbcShDGebmwHhhhACKH4tPPMaav8Lbe",
  "key17": "33mSsUW3g8bqkCMzpt3VCUMtzprtGWDaNEYzJauFniHZvo7V1owkWXVHjCwpDTT9tuZTHWna3ycwRQxn8QxW5J6Q",
  "key18": "2TTAyn7tMtiZ9remzKHCQKQ4T1D2erj3YqDPifvB9yD6Q6mLmUBVbyizSKmvqZmZBKXswVTviZD98dVU9JjvJCoM",
  "key19": "3UghPpRWUfmDfVSP2R3ogwNPZ6JGtXitHqgxzmHETznXM3qtEHbQy5YDwf3f56Gis2QFSzDRQmHqiqcnJ3ejhJWU",
  "key20": "5Y93Sg5fkNPPjHBJTucuW6TTfY7kK1pFN8Aow6FfmncKhvcfVyxtJfsvqRuhnNZ51sHda9dwj1FTJYE9VpJ967Zz",
  "key21": "4D5XN9QD6cimGoULUX5q7523RSRaiZZ1W5Ei7JS9RvrPQGBJ6csJEgWbCFCJyQqb27eGg5CbZAac7y2vwAYeA4T5",
  "key22": "34YmDXHGKmYRiY69EywPYsf5cK5Sjh3t9CRTgrNJVhyaGSQmckRViHb1XSeP5F52bkzDzajz2SNN7mrv3LAA9nf4",
  "key23": "42MDeMLRfNxfPWXEdPP4f8TEcZvQLLw2MGiUYdHNZu6KTQfQMXF9zDxtEQSVnQ1gkijkvcCxC7TsN3BHUyySNSeL",
  "key24": "5WihQ9w2axfV3pmvnff3Nd3rgJM1tzhydQ3rxRRzDQTvporT7py4Btr9DSy9BQdEJ2cNifva7c6L69PYjEYsd76E",
  "key25": "2QqZFBtiAFndctpj4Z5M7dNWph4c1DxK5opd5HNPqbFboEYECyUnq91DUERc3Jgoka5k3M3bkow2jwmuKwQrcx69",
  "key26": "ahrt6sdnoMCsjJ8tyH2UmopRRqXiQiTpvtYmGMeHmSFQswYWkR3zKSB4xKn45affoomKasraWyzPSJvw7gSWhha",
  "key27": "SFSUTEkdpHqEQHBYRybzxhGB43WxqUixT8Zr2LMd4XqVtBFjbNeH4iYghSW8iWvmuVzw7nb3VZBP5sJAJrHjYpk",
  "key28": "5PGbFX4gDuQ58nBtHSUGtJJjcXsK9ZwX4kv39m6sy2NzJaWPfU75bufYzqwcaoHjiDD2igYGy4CqFxEuYH9M6hWk",
  "key29": "2GEoJgVpFs9z1McEzVNCSFP6r1X4FXeQYAgPiaDt9z6zbnjbKWDmWkgKiQExN9pFHMHAPR8mDFQbVFKMvQZWMBVs",
  "key30": "24QDU1Q1XhMj9XL4EYYY5sHgmNg1PCF59QpQPniaMABamaxSYf9hH35bumQQVk993fuj2ufqqBgWzeZcc4oPv7Cp",
  "key31": "58Hde7783uFMdwYNihcma9mbz5gHrTEy3pZ82tzgKCxZZ6HL6uz2weF1xzBFwV5vmvagqaWMhdEoph8hWKs1NWrY",
  "key32": "2bhFvrQEBz6DBmTVvDvcNSXX29DUQNpRXGVBnUtdLWsEBboB4gcL99vfmb1RdTNiNwguefQC1xpdpqYasYLdFHQT",
  "key33": "5pYE9VG6NboxriWbtfacgyZRFxz2AgmZd2aqLGgKtvdHDe6nNG3s2DhZh7dABKPK9Fb3AY2Q81EUzrxbvoA4dgL",
  "key34": "WwUSAHsgVFkUL9HGcM3ngSBE4A517ZMGAs8pmQh4nTcbJNM2MvzeCwHi9MZasH7B1Q8YCyhTCdTttKN5iDqoxqk",
  "key35": "bgThVqnpRhpBYcSRCZVp9gFfptW3io84yDFBvxTEsAPVAj9sXZVsjw2aNvqY4a2JLG5wyzAcAcdz1QjMigV7qQJ",
  "key36": "3fB3XnPj846UVPz8UGWxwcLfkRp1YB4R81Z14J2jDdpHVRyxyeqppLd7A85vjrRQTRfoqxdaxM6BVziD1FQUpXb3",
  "key37": "374rARX5wLvzULjRvZrux9hDH5GEDReFw3Nzyh4N2EYVTHUDEaDYnZCEsVgj1UHyr5nuC4io8nUA16LVCEv8H3Qi",
  "key38": "Agkq6FsyoRfVAXyMScLgLAX2VFxmjPuUhybW44ZdsTog9b8a8TQCRBCtYHTynRZdZiCr7UQy1zaemwt7WVGr4VQ",
  "key39": "3PwhBUn95gkR5hJZc2RvBurvYeUipNKiD9xMdzU3ZtY511YC6ubG5cdtXCpk2rT4ibzteYMgWXwQ1D4xPTq4nAxB",
  "key40": "3PkSr4ubbVok6k1AzJGP9VpLPnzfv2puzm43wuMnHsuK4n9re8AaFcR6ncW5QFNmMHZJAAD9oPgYn9xyL8ECWmyg",
  "key41": "37TKtncA55hwPbrAPE8EyRLU95Fv83m43gE12wfBY5iGK4ZcRM849usdy2pB1LrggeBj3SqPQrFzNHvcTjFkugkc",
  "key42": "5NbSkknNUedUPqoWMYCE3GrGPtZ9ed5DSPsa3yKPKoHbR8TMtLNtLaCT5wy75sjYM8ZaDKni4YsNB7EXvDttGcnA",
  "key43": "386cudCrgTXtR2himC3hiZAZQkR96CP5miR3cfi1TjhDTvZTSsnqpHKx97ydpCT2s3szA3bEHiAFH1iM4RWZP61w",
  "key44": "5QMahdV4iGrFr8nicNUBLTHfDsVLPFPVseBXAicqMhWMJbBYuiyi2d5jwWdoHyRdTqLs7EJnH2theNt49GzEtXEi",
  "key45": "3bXKg73Axuuri2Vs9ioYyPbJFCpbRop7rzZpsuSwzwnmPD4q6345Wgjvz7Qy1FQF1nLVbSpwsT9PWShpFtgvSVfy",
  "key46": "2gYUUHk1aDnWpMdQBAquzfYYsiq2uHV7Az1ndxX2TU1Ag5vyYroMGpJcA4yuf37c7EAkURZGSEstT4Cu6i9SinzU"
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
