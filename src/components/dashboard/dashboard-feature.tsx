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
    "3s6njwH2M1D7xUX8tcpPEzdAwCFtZLxKatFLgtjt7RwW1mXeMLE2ZxahfdfpVVhK2mcyZdpKopJsc5vr2DMRMaLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YUFvoNFmMWshWo6e3weLH1YpsXYu8p3KRj2JzvF8g3g3VQm22jxC2Ajm5AuxYpRN9gPPxs1d9Kt3XXkk6NapAYR",
  "key1": "PqvvTp9UhZ3C49xg3qK86NrL4a7oAi774dtzErw5imppsjgu5NRc8wMrkYBivK7sb9XGeEDey4oDXaCJPe38QeL",
  "key2": "4rr7PiGjKudePi1pBqvP7Q6FzNXBGwaE9Qt2cqenGDuMawCMWKCnS4eMGgfneqr5Vk15CG2qFdBuXGxUucyTYTFh",
  "key3": "ihFpLabxJxosiAqUEBtBtDtoWqkLEU4Pk2jGKmvAq4NAVY3X7Au3L8w7jsesB36K8hbVqCUa4seczEpwLdzrjwb",
  "key4": "2hW4pTUJvz1DUANDbcFdkgbm3odQBRse3QZ83kYDiE5jtiQUrD3xmznFadAyv3n8EwURwv8ihjHuLYx2UdS6T9AP",
  "key5": "2sqrJJViNUdxAef2wn6TYi4bVTa4Ynia7JXxRq7a4uMVmvFZoUvGsfPNXkRgTzfET9EkQ39X9yPkrfRGuxB4rdFL",
  "key6": "3XJb9rYHZDzbXg81xURXwNR3UUTGGhWvD2TuzsybxEJUqvxjrBwk2QzcdDXT3Nj2Q7htdR2DRpMbLPi6YbQhGKB9",
  "key7": "dDLvW64SefFDkMZGLjFef2ACSLBpUzBXakMaMWEBMJm5Kf73rcQ1XF5iwuj8wAYuvoYGWv1RoLXQvwnjYXpch5x",
  "key8": "5MqXFCoaW2kBWHfhxJDZcCmJyJEF55nCJRsmxv362s7VjNMUf9xPcZcFzFpbCB644oNhe1HkzfDf11zUfPE5vwFt",
  "key9": "4AkghZR3n1h2KipzZkhxXTd2A9VwpJ5vcKBrNsVbXsssGbuzYuY56z53wMz2puF5Mjatc6FserLKat6PLm4NrqTj",
  "key10": "pCTegygFqQjVWLHXBujPUvZAovjJL3TpsqrG5hgnMZFdLWohfwaVjUCM1xQ4JoBAsruuA1BRJNzJgAFnZGBMGt2",
  "key11": "4kPZo93SYUDwtznV65PZHGSNpmd4N2rxkmLNmi6q5HQqGi25nZy8SksxhDdaYt9qBTaGgfNUDCNfC757h51f97Qc",
  "key12": "2hywBYkmfcv5AeLumNoTHgaqXw3PW8WJV8JVyFRaMAswa3C3cfhsDKAtuBof7fBB5fLUWYBHWnaKSvcgA7scJ2Xs",
  "key13": "4UKsAnBCVNhMQw8cnpyvqGjPfT1tw7V4x5x1uGizt1dWsHUQzyJUBTnCiCVLpsaASBXS7dktjFiK3e3in7vq7EKE",
  "key14": "655ZTbPdPTA3CC2TEuhfsVp26XN7iW7eypwfnAJGythGrqGvYGf6a2JHiceBcUpmHViTPKCAEMtkzemmKaKbD65f",
  "key15": "4caLkKfnGFxZdDDP5dBZS1zG7sQnDBD56oZLvUbQB35cetN1uuwNaCuezBbshCNUpxG59TYrEJTGNT4Q8xJwVaVk",
  "key16": "3LeP8hhYenU6oNY28Hx5jNQNyoxMd1EArDqRti6C3XwLejWcsbnivtcWzWQPm4BpBJQd9zjq1H7rvZqh1LuVMfEk",
  "key17": "38DSRSHch1dv2bMXN6NjJ6bsWheyonAtWJt8dTSw2cx9HcLCL1V4ZdzQKsX7RG9HzHdoEmti8qCmBsY8BP4rnReX",
  "key18": "4uB2ruGnoGVjjQAzLbMgjLpo2R5ae4GgKSZqAp7TJnUqDiiwDY2kJDnqP9dr3rhVKHC5Cx9vxLpJaW1b2mHH82Sj",
  "key19": "2X6dVeoDSCkHr5AyX2PUqHtduqqAwruBTefRnTR6wPBJhjn6VgNVEt6WvXJSnM1EpCzQGwbpJXPVCZqPgb82breC",
  "key20": "P7zFjx7JLjHXEJDJJxPLrwRQnx9Mb4EW29viWgUDYA2gPJbVUjbdhicwq3KhnYYR9Pcy4ivpZNzevTg3rDCteho",
  "key21": "4r4jjfiCJ2iJ1QF6QC5KwwK3Ad1Yw3i6HHXUdJ4CzFKKZJiCbV3vohYAEu5CuLj1RxkR94Na4k4BBKRHoHDkHLDb",
  "key22": "TH4mb2EaVsTS9Ei2SMr8jBT2eUcPjE3BcpiMauQiHdehwNUAdzBEzRFUg5pwhnnqSALkHuNVkoMAhwiomeMygCw",
  "key23": "4pzQZdnmhTezHDt9Mwznj8U5rewGoi3WSmsHeUguU3fp8Cht7hvTrcqtJwYD6bfcZmDgKuDB4p6sL4PTkEh8Nhh8",
  "key24": "3tJZQA6LroKViP496gRf8HvR5nrYhoAUSaEFbngRtGZHYtg9Jgn9V6meN8a3zfUYoUw8Fgw6mE6Z5zwPWzZAAFpS",
  "key25": "36GCYf7deDPkBq5HfJqNm9NxQxBScLAHuwuFwHR9LWAgX3x2784vyP8vRyN76ckr1Z65fFyEwC2T3zuegSwAWv8i",
  "key26": "4m6CPvM79DmWg23aLxogghXeVsi8WdPiuRVRZod8CY5uFoimgR6AdhxRJS9DRbEAwU7vWAoPqwP65Egv2yjr15Q3",
  "key27": "4Pb4zyftM1NqHHyr2bfxrLUMDru36qAvFwnWFry9nodj6r34DbatGYaYh9dGH6dVQpMC9XuoKfNLhDt3wyUF5V4G",
  "key28": "c51JnjxVikBmBqNhdCRtu8vAaNT9xwgNyhusnW42prgKX6oD5gG8PKMVfLdGUBSXMzPC5krG8EoChxx23sMsLBD",
  "key29": "5S7N93Je9pdDLCNwtCcL7wLnkz9YPwFUukg6yaLBZYzZEEEJvtdWs9rL78FCsLSFW7CqK22JVACebG6dYpv6Mk1v",
  "key30": "a9U5PAnL87bpxD8o3Z9aTJCjBWBDKiBQx8teqiMFNAeUK9t3f5KnVUNLnG3P7y85QPVx1WSNhmnnaxzSSgaq2WL",
  "key31": "5qkc8FLFd8JKSMLtKkZk3NPHsty5fu5PfC2HtJRuwFUMeEQhXW3KPRYP89P43V2xRX8etRdS7agK4HSjDZnAsmzo",
  "key32": "4YYf8bxD7waJ2JVRMMk1YEATooHis1h2PyzsAXtWkUiESK3SREcuSoz8RQ4mxKEp7s2UPHggjRtmYao46aLc15U9",
  "key33": "WUm97QZHKYumYvfVAbRS5R2uh9S9BarmDkEmNhottDjnsknAQvccgMjjG71xrKaWmyjKuq8Dv3h65e4TYYUVRDo",
  "key34": "5Jiz2qkPjns5yK32FehJGXa4NFp6b4BuSn9xCHohxScuLT6wT7jvsWABDX417rsnznozEakJBHw7jvR5C2Bm6CoV",
  "key35": "4LdwjQLorZF8frVsCwCBALjyFXwhPPF8X7RdzEJagi2HTZVdRrvk1WXPwAbkb99VjmoNyjvtHnyyiG4Yb9jCX9sM",
  "key36": "4ped4pdGAePFxYUg94iZSHaYRfMwq6UHF7oKc5ktrYV3EDZ3KDprzqAXN2sxv586zGSUH1bmYTg9ASF12TwhhiGM",
  "key37": "5kaBWQjCX5N3Nm5HKrUXwmRtd5wgP1Giavvx19jWw87DtDNpY7XfFhRpapdkMq61HgJZFjKGnZUFk1rqd3msEnWe",
  "key38": "3hyCSNrkjZ65C3jShSG5niA8jEnyzYRi1MjuAZUVVqnB1DY4U28JU4V3mwNwfgD42zvY6WFgiucuCvuknj8ymzAP",
  "key39": "2SGuTKHFykMSeHvAEZG9zWrsKDYZkkBgSPkfJz9c4tBpiLp3qdfeWRCSnjCfPQMfosSFjE6VEKAdzM2fN7KjThh4",
  "key40": "3G1ZZ4bStkekVPDBvL9fy8JwiMN6vgJquhZe2U18vaQfPeh7t6xsa7dn2x3fa9nhP4AxE8MtDLVgEpBijz5vGG1U",
  "key41": "5Vh9Bn1XLyJRXNMiaGSvdrpbbDCqHUZsU2T8TPBEnUtckiwHBz6aehK9ziBYpq9ekJCM2BVf1FMKB8327oVNvv5e",
  "key42": "3aYwDayXWm4YuqNiDoaRR6hLBa5jpMmXa6782bWw3pHLgYtT3mS1NuZbawfpmWUXqxWDUijq3FusqMffekXwYgME",
  "key43": "45jJmi3wvtTHx5EQPReGZRspU6Ac1keSPtvNPssE1JRw3cy8SXNYav6dimx6LUjBT1QLb5NYy2d77gdQzgu5E6wc",
  "key44": "4hXT4Rhse6pGA6RN2KtVjvAKSnGjZCBLEaNHTgRYsRkRKzMgDq3mYezhYdCQWVHS5G5fkT9UJfxvhzLPNxV4F2YD",
  "key45": "5uYseUH3F9Q9UmhgkS4wRew1gV54h3GaxT8cwQ1Xos8miCsxtLgDBrom3UqwNd5JDNG8JgFTigjBQys8bBoeC45f",
  "key46": "3Yaao9Agb3csbUgsELSuRohgrbw2x76zTqA8AstVV1BHSD4Q1MMyuzKQN5jnz61MwCFC8ULoFywPe82hEYypiqm",
  "key47": "5Ljsg63zWZ9NdFtzG4vbFq4eX4sAGEegAW1TZXxpRdgGTZvKRffXEcQ6sre7aeAnuQ45mELkagWeGNfm8B5DvD19",
  "key48": "2e1jYDr6B2UekX6hHjRLapQGxEEBi8qXFNNk6rMB6phTDVKDurAPjxeEjihAieW2YxQA3jmGjXcNTtfcbU7RFamE",
  "key49": "58BAe2CDUWeC1JXEd18K8c6vHzr84MunzCp12wpQDauDb9MPnycchz4mxxhEbos8H6UPTWPwSxFdv9hQrFhwEPk1"
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
