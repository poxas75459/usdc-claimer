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
    "4KMRzeGQiMkoa6Hj6EKDeKFAemDfX1w4qdhRBZEiARo4mmciCRq2H3yq2vnboJeNf6vRr664KfzhNTTR8vzP6B1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QiwW4owTBZo1KgH4PGbSaqwY5eZErbqNCLpPpbKJA5KwE5HUieHU3hEVinQKm3u1edtMWkCjYur2SVZftTLixEY",
  "key1": "2epodyhWj9SFuFJv9dzEceXqxWmdjKhzPnetsJedArcmvXdfQi2TRgjurVRo6VesVnwSzYiP1G8MJofEUCEGiEJi",
  "key2": "52r7GTkE8j6iHbqZanToinNuiXNmYoGpjMovYXWGPSeXM5qWZtiWUzQsZaSj8fH9j9KTk5jne3eyAdwH8ir6E3Sh",
  "key3": "64TW92Sy1Kpy6cLtYwe43PGQPnvX7DPVTu3LeS9VAjwEtZ8T3tSFFCaCFHPc6exUpXvJzSdH7sXYwc7G1KDNgnnE",
  "key4": "4JhoL2bDRngcR3Tng6SEnZ4nZvSaTSbRzdAzZsQZPbD8EeZ54pwC5NXcYC5wHcDfXG5QaUsgbTzmnnvZiJrATHuF",
  "key5": "4H7daxRYvhphpK93RHCxYz7gP3yfymceCnaUbkTcU9uccPovEYdWrThGMGLHCuU9U3FZioB41t2jNNVCgx6cC74A",
  "key6": "5zzthqjx4r1n6UiTuN7yqTa4c19TwykdDSTDisZ75PUWoMaCxiy79yfyrgsVGGVXtgW7syt2wg5VSbv7hmTAMVfU",
  "key7": "3sx2BoTadbTppzwUhzS7ka2U4txaJC194PTCrTZnYauRieTLARw2adxokntk9faQ734JWtWfJrvy4dHnq33TdkLm",
  "key8": "5M1S6RnirApodMHrXbpUaKznr6BF9LSfdQM4zUKJZDEy4ha85GrhX8hGppmW4tb7cTxwWfgP8dQDGGLteMNgsKka",
  "key9": "32brvypfuJNVEGpmkGTdCTDNRXRnixCs9zZRfypgjjjHPZLLdvxmvCLLd1Ubn2aT2B3WxsXTcxPXWyLGyBSEgoyC",
  "key10": "3ax8kHgNiKRZkhptaGCYuMWgKHj2QpPeLgZHN99VyC3UqZLVVVZ74eHbVfVeYKa49fsA1TpC38h5xHJbehRXogsa",
  "key11": "3MVttoXLZhLCvjHAoxnY3RgyJNvk4aCgLbGDNT4fojswUgaUvP2ojPHdDVY2fTkM3H3CUVAHpJ9Y15x3wXkAsR6X",
  "key12": "4829frC9CmJVzgABUmTGrD9C3j44WzXeVPQTJJwLeCi1bWvm5aNRKQ84hKjWy96BSBLLKB1MnnBw1j8R9MtmzaZD",
  "key13": "54DbNobBouhhHZExQA6pBp7iyc8McvG88wF2LzdRbttbeFDXmCgymtwah4xHZYQ8CzZrwoVL58xicN6v2TtFyeUZ",
  "key14": "4qThfh1cLDSZ7mhq1yt54AyDYqBa6urBMbumzHgPq2q6dke2uycHnKmoktZUzxyxtRDSHwo3YJGPtDuptx3ntbdf",
  "key15": "5LRQDmJLD2irQWvtgeh1nk1Dorow1nkHzQZnRwoQXeqXMEz7NK9jPsBPQ9jZy46y3P8Y7EPd4nvzBixmW3v9FPjb",
  "key16": "4Kg2eDaMRV2s8rECSnPSrcm1H6EU3LC5TwVThofZBcrs6sVSg19p4orS4vPNSsrAdQpoTgKcCN6Yb11qezmzpdCA",
  "key17": "5yeRvTAqBk9SJG1i2vzgSkpWHvgvkpigH5mzvM8r3LjQsMuKWPJNhGDZ9n3YwJ7RJXjy6dmBBAHcAQJjHk2wk3H1",
  "key18": "56GGNzTA3Dg7SNkohodBdkiT44dXg3x14SAbYbP6ghqBvzPJzLmHvp1ysDqSExaGd6mhb9C39j9ZncF5beKMNjge",
  "key19": "5hHYNTg42WgVoW1zTLBgWnDBR99yRfBEokTqNjuchiAWEqr2NJn5JiQqVcwnQS223KkMSUfQ4XzQq4niXgrHFu2H",
  "key20": "5gf4utwbdYrfMmw7oUSybiaDX9LMHbXYoTJACLV3st1gyjMv23qqFe4EUmEoEFnkEHJP5AnfUwU4Lf29CmF9ug9n",
  "key21": "2N7RS7fnNw1GBazLnhAK3ijoX8baHzq5qYvkzBLnAuFt8TTP5Hn4mRdDqtWapuJkDWPqJqwRFs1pkHdwGqaKDW4X",
  "key22": "2GdZQXXvRyMtKgPeuZs98o3LoqMeUgWw7rWjfR5k9nhBu8AExsRBSxxmXE6Q1cMeNvp1Fk5GaRTQHrvQfia3g8iA",
  "key23": "2zgxarmWkqxdPnn7vCvMzYWjsf9bC4XaN9351XpJ57tbiCLqH1TtfsnEfQZGN5TfLxr5bZaPbuU8axGbnAmBxCet",
  "key24": "dtzcpkRqANWB2YqrTFB3ouqTkzfrojio7TDL7YQS4PatooRC2h5Stk1DL2ytrmqCUCjysX6M5WzBkoGWiWEFvcb",
  "key25": "3vAQKXxQUQUDuy6QLQgrhhyfkgtD9sATqd7Lg7FDU1yNkj8jjFq64DwpMLqjRWtfqj5bK9xkLeGsG4S6fJhyx3S6",
  "key26": "2ufAHLKW1c7bVpBSVPiXvHWw7qkvA2h26C9uwQjBmUDbb7kfGCp31MsvHWKFCcsrTdG2wwSUTu5zjctmVH6DNsNT",
  "key27": "2SSNcacLeyhXncMkyoopECh3Jz6b6nXZZM9i2bDxsmh4Buf4Te55LuTEzzuVdHxXJ5M1PYrvVnwki5m4gA7saHS1",
  "key28": "2WLMVFXBuAQNaYVVmkaWepTjGWrqiG1TRoxxZfWbRBez5VisCXeWfpPWgrxgjt1pqtbfyLBqA5sJ3syUCkn3z64Z",
  "key29": "64FAVtTyqy7C4EbwSGsRWA73JuaAydwVTPgvUyEyYRp9A2p9ozTPpDh2cNooKs5rrYDg78wbsDQuY2Es3hXZsvwo",
  "key30": "4DzAXqSGK6R25izrQiUE71S4hM258trc4JD7JnwXgvFFEGSLudBLpYJSkWYu1Xft2fPD8BVWAYAWQ4GuDXjHVYtA",
  "key31": "2KQAgKo8JvjawkemAL87oRPYzzjERXqQu5msR15rgPtpevWbbB29J5hwxStenyYiYhNp7cdB7Qn2AbpvHSVjF1Cp",
  "key32": "2RxNJu5t5jTpgMtWf9nwj3BEARUWEKNanxugJB5dgWEXrirNKgu98RY4beQbCaeXTKuNW9fksQE5XsF52131SFQf",
  "key33": "4NxW1UPLg5vKPDpFXhnmsfQCuFBm6a9kYeXCLTTp8MNPqTb7FbVQvZgaL1NF6CxKwRJ72F8YW8Kh3YHUNofvSF6B",
  "key34": "ydxujB9ZTrpfjqoEhHSx2iWjJ5Pxm9SCY9K8pAho5uSLMyr76pYeiRVh5TQeeVrquv6m1puKFJWEZFV1EGGJ8yZ",
  "key35": "65nMiYDrmV1gBDhdNc82GZpvWCFMTvkvB5919t5anXHQERtxTL4eEkUCzZdtB4eeBHZ2YzpyXetJTWyQ1LkL2PKC",
  "key36": "5VWM3A9Knv5CGb1WuKgujE1Uw2P4WB6RjZYwSnS4GuMyBuvKXAi2w7rdMrzLNyvmguDxfeA4M9xMrhmA7R1wcGvH",
  "key37": "5tNW8GbbgKHWAMhbJipTaVSBTb29FV9PBSASg6gp7Be3V9NxYYZsYz3n1RkxzYMxA2xLXAb54T4ny9cxSX7rQBVo",
  "key38": "288YdGwp4xqV2o7bSKwMQLhPYJFTGHurY25rsq4P93myRVc9Y4tRB4tUEFTA5ZP2U9DyenXvL5vcRAHBoGawEiWj",
  "key39": "yv3sHqxcQJRfQjnLRntCJQohbVTs6Q7hSDjgmBHqxWNq2i3d7cLJiuM7kM3AaYFR83XYN9vfXpur6A5Fu4JZd5p",
  "key40": "2rbecWBaWwkE3FhVpve7vZqzXZTr1gqb7TbeBijbKwV232be2n6kHbDg9mM6Nob1oqKpF6h6M7RRVcag3p3tC1HM",
  "key41": "vtznxQe9DZ2bJ9yRkX8fxf4QifNZdwNrvnqfdUDjJEJBcugGTQPhaK9CVu6wMb8gSaksxeNaqVPSpGRyH3zcjdi",
  "key42": "VPWQwNwkMPQ6vv9w2xLAdfvy6Mg6d3MaH8JqtJHqBBf5Yw1mEdUQD6hkwhNH9iJ8MuqvCrXuuy3TBgJBaeUfHC8",
  "key43": "5RzYTp6cMnBxcR2J47SbHLdzhXDMf9JifRAn1nsQVMUo5PHfaqUywxaFukgzjdKyyKe9hzzNfcGSQw6pRVZCGevS",
  "key44": "33QAUSF7fyVSwfnjxcv7cDmSajwiFPRrwGt1WiW66a5MBcfLw5eizEKpqdFkSPMQf2rtwuZ5LMh1tKM9wGYYzHfj",
  "key45": "zwJVyKEwtV1ufmjoRFCCLoqosCVWC9ba7uysaVGpt9nPz4e47oUtUDnH4nsbaY8MyCT3s5FCANmYAuEUeR9F7XM"
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
