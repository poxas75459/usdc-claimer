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
    "2BWXLHvzspBgSe2WZ3ESMizLbsAe8qXvkUAxmsju6rGJFjKuFWCSVBz5ArSAjNBe4zHFB21y7RToYMmSP6cA4dzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aY4niCVBnc2ZViqkW82nkeLrdGPxhhHMxvkh7uRwo1r8xDdVZA8Xyq4epjdeaCUVNm9APgcWhpvQvDKQ2bS7JqK",
  "key1": "41mgEFcaJnMXf1ndDgmk5cgkGBnbvp2D89duhMMnb3wpa3PF3AhfCHMcEhetmt2vmPVWf5br7b1SWY2Z6Knm52Uv",
  "key2": "5tJNr4HGNPaHWiNLWhtSZPdevJGR4GK79EN7KxT9M35Avm6tPV1ZiEwNKqCqbGsLMs91dVXsMgDgHDtDRhB3pDQi",
  "key3": "KNjuTeSwMsnrkGHyWgAKWMyKZHHGkKqXL6cgzq4vDiH91bmzTUBUn53vgaBUndMedLvv2s57wJ6U9S6XnyBrdkE",
  "key4": "3ydNdAYF3Bakn4mQj7n69UKfMtwVdUVqB6NzZRGmV8QYd97TyBP9mfQmjcuhMs6t66ECjndiiRKmiTowuLFJMs5H",
  "key5": "5LAB5ApmCFy2BKTvJD1Pg1aSR1Zjh49qnsDFgvnEJEfmb2eYGzYaXdTrNMPFfTdy1hAY6o78iP3Xo54Qt3KFnGXm",
  "key6": "2cSNrkbo8NkTDWE3Upmo51UURuHjSh7suqHjBxVYtK6q5M9Gmw7QiqCZ63mwrmfGv3LR4SaFX5BL1aZT8jNDYm4p",
  "key7": "5UXXzZVsGNTNYyRqyb1v21aeDadAY4RdafR8PKCr6x1QueKEh76qTnoGnkq2nftfsFp91NjSvMWYvvWYo5HnwFdk",
  "key8": "gk1qiTZePn7umtqghpsoBFhJfW2kAHm19titxwvCq9zE3MJmCcxHYVS5YMTenhgucxV2LG21rjA8URJxWoB6bww",
  "key9": "3N3rSz6KiAZ9UTqtubkB8ZogU8XT6md14jYxtL4Wo5ypDHPRGe7NoLq6DoaK8R4SJmmpTLSWMKMtM78gQTFznFq9",
  "key10": "4ZjPJXhGqWhJUaBQgpC35cdhp9tWv4XrwJaG5VDdR9dJaTRGmUUBpqtvqL4GN1HC4EfyS58o12Jdh2dy8CPhNuFY",
  "key11": "WhfWvtKWKeCsgZdnMQLGLCcHDU23DBSn7RaesFWPbr3hgM5MfPBv8TaA23gj6D11Gx83qVSexbGLisuFAG3rWH7",
  "key12": "2o5frzm1qmWSxBiJ5umE2rX2w5GEp67gxhcKZ1qC62Qhg3GeyopazPvX4UvPsPfv2MdaPVgSy5WczRY1A5jvWJsH",
  "key13": "3dJBD8BneAqj12KbdMx1iM27zMijKcyKJRhuLXRkWi8EHnMWFmnJwiRuRaAh9fukTtPbDnyv8c4Pn8Bqb2mMQWxa",
  "key14": "3pt5vB14E8FUKbttDwTmL7zgmLiqxqLXpbydArAb6thUPH9G5XHDsk42sHzELAe88bSgbNCXXkPQ5QpEiYcEYk3r",
  "key15": "Z7CgXHtvffrYUexHMPN9tFzH7h31spsf9Kuf2p6J4vUyE2NFo6N5ua1rYqotSpw5pd9eW5kELWMTBX8Fz4ZZkXU",
  "key16": "5XxaDq2EoFamsg2VYZBfsvPEvr3QmKXob7PTh3QzUpFTMUw3CCpeicdtHi7Z3GS1kqZoSdBYPAWiGyXrNm3SkSfE",
  "key17": "2pZshKALfofstzo6zLjmPUiaX9bFk7DPzpdKoFKb8QSm7N8qeqHbXZY7jBp7vFNcXqqmKkZNH1WtzuwM5sAss4s",
  "key18": "FAD7bdRgcNnsG7ERAs61s6WWFsEGTXkiSiimxmPhxntMCWJWRWUSSw3VmKgG96iL6sagPp5B7R6oTyduB6EXHdA",
  "key19": "66EoboPuWS7q1vgpqYYAdg1y3DLJeWqT7h9M5EuyEdvbZGU6eyAKLNbFpM6yQk3Xd47NuUhWY9n7Fp9fpJdM4gYG",
  "key20": "46B7VPMzyMNEnK37RfUc4tCDFCXm9p5AGpnyRiGwmGyT6ZeYQyBpruseAaW1UDMoqkUUL7DoGGEwuvkest2fpr7y",
  "key21": "64m1MAYhTaBRNaqiyrCdQC9P81TuVcy9z6kBJYRvJGFR7uAEM9m5tQxikZzWvxptxRRML2mov1GMKFwmVuq9vUSh",
  "key22": "2hDZeVepp5S31yDiKj2HyrK31eAV7AfWEENcChA6Fdx4TAamFifiywuxsuRvtmQTMhLb8r8vxuco4HgjmjpmDwiA",
  "key23": "5qzTmL4UAvFWmGn9HFHwLqixPfMxiTBotAzqGGvJVn7Mqnfgn3P8gpp3S8yk9pCEPF1qqCK5DQmyRbC8UpAy6FnC",
  "key24": "4sahK7SQyBANYDc12S5e7KpFtZ5fwge6j4WEUtaaDgmUdEwVGRHkaLUpubc6q7x8L9u5SaLD5vLiWUyuxZXMLxdC",
  "key25": "Ug77hZCdsHzMc9eSLvEQySi8TtCxMuasWvnYxSVHAthLbMAukZujLybSbi22jpHAnKAJEMU7vMXyn41NVmp2oMD",
  "key26": "3zA6emj6MXVbGrseufU2Usobr6eehLTA9ppoJTaf4pmpXUpcpe6DzVt5XJHBCbBGH9nomuhqb31VHViNFLuPr41n",
  "key27": "3eAanxcmBiRjuKu5Z5uo5f8DmFnVMZ5SwMpevYM3JRLG2zSMqYPNqBnp7tus4EWBS5AgwMSSsZ8ZZB8cfrbcfPEs",
  "key28": "JXQoBpVfRNaXJUMjaCAgZ2oe8cD7A9w4fg5HMNU21DWYSJy4gcm4DavXrxV3oZDtZJWbn3aqjnudZk77tGPUCg7",
  "key29": "5CHsJNB6tsUmBUWy3UmTvGrJF3N5Pt8Hg3VbcDxo7MEYNXyyG2QekaGoxc1FSwHYtggKqNUpa6fDVC1yXj9TwiKG",
  "key30": "4jmQVsEZNtXx2AFBjmRAJEE9tMJWUjUxMPbPz9irhtfX6taRiQEjrZqxXLxV7Kvxrwv88ALdk11Wr9F7ng4Z726D",
  "key31": "4DRU1nVmWL6UeWe5UvQ4EcKr8R5QdxLQgX2GV64vGrJ9PGneXXhZ13gQFcDqw1nn3ojBen8bJuyu36F9bj5tef4y",
  "key32": "iSiUTZWTrx8bWyfrbWyWcwcBKGY2AqbLmYe6VrTFUcHq8vMkcitf982Hh8k8Xbw6biNdhY3inxKuCwYK9ToqQm8",
  "key33": "42N2H16VnWSCXvnXe2eTzsHfgkgfLkkbqVnxHegLNzNJR6QSNyU6EZQeQhggBvkUGhbAyh4gqTFg4YVGYFx4yWXx",
  "key34": "2y3FcDs4Zs6JjXQqU6rZfw6XuAhn8kC1wd9ARtcnitixfJgygyph2mPnqR6TugddZZPBTkouLxfwKwVm4GpgYxUy",
  "key35": "5mcDQEZjwWxYFsQyyXwJNYhZvxU5VKgmgkeqf2gku5bJFx5gxDaYgKVYnfxWw9YXNaeQPdQ7f3chW3BYwBFDx67z",
  "key36": "vUBb4wbjRBe8p44mrsWTj4gRKpizwNcREpfVgosfsCvijpecyvFiiWcaqMCiMUmYFc4kmiavTmDMWvh5jEUPu3i",
  "key37": "54n15YVuG6TMuR1ijGWWcjT4krNDKwPKHbApQQrgpCXSWweRk3JHN8yJkcjfcomVKfeRHedczqnbKjqkTfBpiH2a",
  "key38": "5Ze7ZXvJ63LkxwodNzAvepTxLrMpKf7Ebxsfo3nrWZ9rBckc9u6fojaxbBYHoMLQaCeEjyLqBLWLtSSe4sTqJe6B",
  "key39": "5dxERBWVjvXXo8xMxYiPHv7Fece5xPUFo1JXYPWW1CP4i5AsmQSEZhLgGPQxDatw4TzXxwsAotQsZnpthiFri1wz",
  "key40": "3kfKcsPPopmCVp9g417Umx6dmUsedQ8CEdDTG54QZrBjLKNC4frVZNg948nYbvKuN2jx9Tg73fzNXyfKXB9e9Xcn",
  "key41": "5UksGcBcATMYWG9kx2zEXQE8M3sPRu7PeKB6hCniV3DuDPz6DmPJmvSTpeXkty6fHibBJrjoEDyBYKGWQRfWYQEh",
  "key42": "2GrwDiYeEuKVe51E7AoPJdcqRscdugNhoJBZeUegASbHcF8pXKGmVNXnTymYaK6EYuPkeKsMWUdaUVqsWfCv4cBo",
  "key43": "2L8Q4WcfVNvGnkPjiwyqHwHeNPT7DPYAc6g6Ci2Fqese26w2kYr876EZNUvuhRvWr1bXMBJUg66G6B5nXHY24svY"
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
