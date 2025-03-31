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
    "4mkgSPqSdGd7KjDtEw5HQK4Gph5n81J1ed1sXoQVkZgVN71K453pi1ggELVVnr2asvT27RfUMwys2LtmkXCUUUFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oURiBe7dsp4iTFmgcRkipoXoCZxmkdSFCkD5E59iTH7kedr2o3FgUMZLxFyowKwKV4i9YXStmErQ3k9SUZViSZt",
  "key1": "4xuxQiSeKNHmoYdm8NqJ1tWgiQs2ZvkdiwtRrQVYYDxr4XxCze8dbH12CTFMJdSvVscCDmWdERUR2ES2Yq9WznFq",
  "key2": "3zDP2HBozURn6sMmYm1QwED4fUAjTrnejwcGd8693vDZCdK9PxFUGvtUhMQif1WVVfyypFGZn3ZdBt8y5fWzQAKB",
  "key3": "KHm3oKuHTd85Y6bbrQGfSyiAZGQrm88m3w8BpuJymkChGp59yg6uFZLtqXJqdZJ5J41UcVhNYgRREjJrenhg3D8",
  "key4": "4CgKHTVLpXzzLPtGUzfqDg6ey5U5ff6xz5T5iaX3wQvBi29gCd9fa4GpT2dUE9YiXdFQj7PAEp5ofeW247SMVy3J",
  "key5": "4SMaTq97bbs4vEs1XToxAunCWFinTe15dZbHgJb4JS89CVAGYMeosEwZoecxwDr5PngCN6c2iArXD2T8G5R8M6X1",
  "key6": "4aQ4vBLYLJvnj7PStY7di5dmSbMUsDow8c4cAcAz99pVpoGiYMMVoWGmwi7YuzdXvfZ7DnBzw2SKrA86ckhQrjT1",
  "key7": "3nLJYZwxrurYE8bYsYZovyg7GQKqcjfpNPA4xRUfwKQjNfcwU6CuBxiiE2TowUDJMaeTTQCUBV9BZ7cxAyU7EjoQ",
  "key8": "3devL6taQRKZrPUvi9qR3Y9ExwU6qteHwqfkjvJbPSrAvHyji4esyhc2Ltrp45wmAqv49aEX2weZbx7o51uTDf56",
  "key9": "3A7J5ykSdAKiHP1A45pvTLpVyUSA9vpnta6mkrd7vWtQZuJP5KM9qTZcYkf874XRgYqTuipNwZkjEFxLgFwwJMRm",
  "key10": "oenWiu2wHDU6rCSBXwv96qDzFEsM765jDP19sT3BxWEtfwdHxbk21n8rf4Rt8Tnibu8ebApCoSEcunxxRennWbK",
  "key11": "37mvWSobXYHEp5SXQcEihrs23RbZsnz3Z7woFvxMPEVbQCxkDy3Mg89k8DTGSnfSk7ZVwn1CpC9W5zo1GeFPSwkE",
  "key12": "3iQZoRQ2YiiRL569LRDv2e3ZkpZ7g1TGRw1YdkyuffWMuHahJT3ThHSud1NojbYYyxMZE1nMR9QqHj5U6UZyVwce",
  "key13": "1y8Bq4SqXJ4WTYnudVbDukCxSpY7aUB3Yc1JPSE9fTVApo2SdJnHXijw94bqi6jVT9epHD1cjdkchxidK95psgr",
  "key14": "2HFZyrLJdavD1827xG1aEiMTma4PoVbRz5HmR1fzbxv6HZTUtLsKCdBWejQ9XtFXu9A8vJyeK3g2CpwcWbRLq63X",
  "key15": "9CaxPxAE88VPFzRTT6DH8BoUhuboBVC2taSPpwnJAmNfCvGoTq5tLbhCZHuu9dH3CSha8j3iw5ye9d3dfj18U66",
  "key16": "3Kixfxca2YZFqaiJsvrAg9YAgzH8jVCAbhnzwr1FdRqGLTvVPgNYMbSGeCFMr3BFJguTFibCpVM639iHavq7nCuB",
  "key17": "2Ce1JFuKG2yQN15a1Ruc9AXAheTY5bAx6jbV5bYKuDMNhddNRNPqXBvmZPJSnfacgZqtoX4GguBmfKD29WC2cLR5",
  "key18": "5auqeXWbmQnJg7jiNwEGK32DYmcbPee2TuFLVLm4dBdWQXTm8Q3hWZpbtSHZRoAhRvMfsHSpzWfxyYCinydsEwH3",
  "key19": "614CL8p2TGxgNQGD72Qrp92PcPnuMiLpsSoTAk52g1oJ6VGaTJptDTyEncMxm7WopihZEiaYQLVTnruBaLanLuub",
  "key20": "3fPKbb8ZFd8QG4pzXuwa1QVXk3AfXVnrCqMmEnLwsizEu1E3nnRSySUufkE9pDkJxkc4M4We4wvp81Z9Wx8VnGBH",
  "key21": "3fmh8sdE7euPyZxYJT5ov6cKRXSJQog96YZaG6oV6RpBqhicVSke1MNDHbtdPQYeicffNqnc1hCnikgD7ov8igKF",
  "key22": "4f1jWcZ6GGR51M4CyyfiHypAjqbdBGw8rDh88vmWrZiwaufBAcgwWUVzkE2vTg7HzLe2BgeiE2Dab3bLR1VNPjzt",
  "key23": "2971HU48RXmzD6v32dhFy173KW6XchaYcUVPxFmiuAZoeGRMmpSnVDWm6scfG28KZUBZcQrbMb4h2HC56DQfmum2",
  "key24": "YBR89rRVfWeMFuURoJa4PECTmqJkK5Lsm7vJc31ST4tv37NZn88yPn7wWhm6CsbKwUpBKGv8BQDZzQ3aUATbLDa",
  "key25": "2tK1TSR5ngaJSHxNkHMNww5XCrf77pR5TQTEqLpX843D8Az7yRkGZ3bZod9L5vML56Z5puLSv6TP1mQb52fCMffs",
  "key26": "reMxyymBzhGoeY5HrkzxuBrf2r6yDEPnsH1mdYCKidJM4Twjrp1koYf4fTGhwGd8STKp2E4AEBLkJGm6ZZs3PX6",
  "key27": "5LdEave6idtYRHjML6SSNg2mGCrAzUYG26TkUntD1MBPJegKDxzT4X5MpphMJQ9nsmAzZ59dBsBDGbWay6kHcat5",
  "key28": "2rXNqa6Tsx7fkXk3oHQLoU1zULBxnDEMW2iTkD4jkcF9oXEygkyFJTrVR5vHy88TvASANjBiae8P6Sn8tywrZUt5",
  "key29": "5vdDgrCeHGdsi1ZgbcNuTN2o14EecLmV6NbJymRd2uj3Yd9XAsEYHuqNyLnbQZM1g1jkSDWNngCqnXBsbF4eTNbh",
  "key30": "4VUpviqz4e9tR5WXFLxYLJ8K4qSqQgosqWK7UYRuFAfCXXmp49guzsBQ6a6FfF9naVAHeAT5eQL8Sjw34W4tZ9Af",
  "key31": "3qL8AjS9P3kUmoNS86cu7qkshFrPLw2exh8WUCyU3qv3w6izQ7BUBKhEifRUztdex7zJToXcYUN9UkHSfL6PvzFy",
  "key32": "4uMqEXTeDvnbTvCxvitPEcNzN75opddi5yezjZUpaCnb8UxAgU48bQe9XWWZPyTxX6HL89WatdDRVKF7phTC8adL",
  "key33": "49SqUQxpbBcq8LvdQtPLXdakRH7jLG69MuhjqLWzMU4mGbzqThhuEeGYaEaGeEWkDYmm2yEHtHpora3ciNdr3jzV",
  "key34": "qmrLo1DJEZYL6WFZqww9uu8HchvL9T6JZ8YUDMU6gnZzzzyC8kXbAZS7ASUwcTjdF5NKLjJrg6YEYb7r1vW1vVx",
  "key35": "4TuRPcdPQHx15DGbXfyEA8UjusMK1xHJ7vy88CJFuTkwNN8HfRzxBR3pRnKytBJ9dPb6o5sgujdXiZe5eHqPadvE",
  "key36": "3Bxfhkd7UjYzuDXFY4yGy9TMBkbquejck5vcmaRc2oa4R1Q4kbS9BPUoGvkd3XvgC3KgSp4EUifv6cWcE5jKqzgM",
  "key37": "412hbmJmz6gp7BfP7qHuPTgDCyCQa84JjTFPhWhPnBNFXn685PQTgNwYB2DELKfCmoNYNy1rfGwMvH6HCg3e8frg",
  "key38": "3Kr5hPSQTKJoEAdaa3WDfanFgi92mnWuWAhwpvc3oo31bqQUXFeNeHeA2AAdp1VfzjHJaxis57r1YcFJVcfTZ9Qd",
  "key39": "Y6Zg7P9EZMu3UXUHAMwmFfMvKzy2CYiVPEzsotRgy3fZRBaBSD57EnYtonfBCWb3mRsq2RwX5cE2gVta7LETMeW",
  "key40": "ea1F44yYWouX1SG3NQN95zbozF2wTxTFeBWk53z1jti61MLNgnatukiE4TuxPWqnarvePzekCGfa37qbGx78gEz",
  "key41": "DhGX7gayVCagwav8voos6kXvJh7K8ZQf1YybwXPg79mbES4ZZPKKFx8DQMfPssy3yyzJfWujr5M2KS1LtCU5exG",
  "key42": "2ATfJB2XF1ud6Gq6YpkNJzdqCuvS91WTYvt3MCBvtjQuNRqwGDLgRqBonqY6h1cr1dAMo6tsNSWgNDrVkRJFQhnk",
  "key43": "4Q4b7M8JLLy9vJURYhhttZRxq8bcLmSnV1Cm1mV2bz6u79duE2JqwFx7tTjwCMjigfBfvuY8eXeorBKrBbJuw6SV",
  "key44": "3L5CMeeksfJJYJt6UrwaT1N8YnyJ6zAQynVUguZUNDP9wW6snCyGJwRSrqr4ggwr1yoGNW1BJB5PWKwyRkPaGRzR",
  "key45": "3CJ6ySGZR56wGcZr1EsJANsj2dxumyp5thVUmJbEywS5MR9uRchJmRJmtWe5NtFaaU2YfUgPJdn89RAbDESDNsHJ",
  "key46": "5EQ99CgBjWVxKSJNm8h7sKgQod3j4Nj1wdnsvRKe13vzsdLKVKn26rR9GLecr2EhfxJ5EVwdQoi9zzxGPh7JWs3K",
  "key47": "4JV4nQGEDa8tRAYHwJ67jLfnjUh9dvwUimSCT15DDd9ao9F7uAcF5TLNuBTmJghy1TQa8ZdCHjW36cDGcV56ydqG",
  "key48": "2uiaUkxHN2Yqx7gU6GoJX6P6pkCwZ7D8JTNcdwBH2VUj2im4rxUfYKFDnJ3DSMMNxU5tk6DxUjv9yv44eDP8CNpW",
  "key49": "2L5hTtA9Ha9pp5UA4TzVn8ufvscJi5D8Bgf3ccawA3CvHuh3fRemC86dB4gS471cB3Zz9PKCKWSeX1KysNsnJUfF"
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
