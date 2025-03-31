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
    "2ubkvjEP4kBsv5DtC9j6D969v9MVqAGSQC9XhMU9iYEeQzpA9bMbRioUyAVtRBoXvqdYiW5Du6Mwm2DDWybZZC1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B2bQErmVa3V569VSMtQJRqrBCQ2Cv9hfBHSSyFWSQ6Mcdvd74W3qq47s2UDJ6ovaoss8aGBTB67Ys2yksfw2t6q",
  "key1": "3kwqygfCiBC2KGAdznn7ZLku93dQwd1sXyFYteA6ZXz2vxR7birT93jddgEsg7Prxd21nMTcFdwUYGVGQEvq2Bw5",
  "key2": "1WZvFYehcigzqxELhVipND1c8GkZSShLj3hjw9uGrmBnhpgm1abagbGnKaFHXCqDkV7ctzpQq1baYqkTd1nnN2h",
  "key3": "3RD6pNhHvGTxWofevBsCbRwdnWJ5DAmGxkE7s9u7ECUdFpvnhizsZvNS8eiPixedPiojtsKKctruhz6NCYGoi2BJ",
  "key4": "251UJGtjwBnv2ddsqpoo1Kmhfcp1517PrqaLCLqEjkqx2Ld1XGhDtgkBdibKUehUspH3eMcswQzDKQTP9L12tsHy",
  "key5": "mRK3KGJFftUf8KhActApbnoHRESC5VrcvRgkwNaoYg9XzX6WqQNUshD3qWvB4NvffUJidMiu9YqcAHyzbZQxX16",
  "key6": "3yMtv4aFgpgtZzb6DRKa3N2XdconEw65FY6WhSGT5FP8QrNeqSziiaZFWXCD7nJET8wya8vBKYxxYK3mBW2H6cre",
  "key7": "2vDB8H9ZbXUBXPLTcHaR5eUM6WHgPKyUBzMBPPeRQDjUo9FdYDVHVWujZysoQ4knfVNmhjjFJTV5SFeZBWLrj3w1",
  "key8": "3vTsE24kBZ5NsNCEfputoMg3gQ5eTsXDTiWxQifNpRBjFYs8JuGarnLX65e5wDqfDxUGpkkJvi2C2yFq9EdTfyeo",
  "key9": "2DuuBZLqaea3sL2i7J97ECrshRUcy7M1KUkcUTvNSNWBgijkNSdfzXjngT3NEvaFiZzAHjnKEUEHLtHWDJTEFK3K",
  "key10": "325uP1WUrxPpDfhCk31HgNGepNwXDPqwZrGbSF6SVBHLuq4KJ9LigdoUgvbHb7ofCksfdNfJVCy3hCNr9J7K8rCm",
  "key11": "a3eW4YXe4c85CN6D8vkmh22MvjaPwVNJdvgzQwfrXNAg6L4AzYmwet9MXdRVCAhEbKC8B3y637ZmFivBiWwQtCd",
  "key12": "2RY3v1T2iJ1QpxV9zRWqZSRAA4eLJeWDgqvABf1GB28hZnA9qkmTmsUkw431icnUeiVXGzLqxrYcVaGTgb9p6Lsm",
  "key13": "2Nxvmk84DtfGG8DAHTj3Qi7acEGoQJyGW2qQPPoDKAXtHQ65SFpShKTX7NcgjrGmuyu51coWneZdeUUKjtceeA7s",
  "key14": "5Er9mzq7CvYkf5E7Nez7jwRmQn1cdJ7YpWW8nTsAapbRi5wP2HDaHzQvWXJyCNagpaCcp9Nke8ZWhoApYhmYdCXG",
  "key15": "5gkQVoPfVCzccHuQc2vnCs8jYNAuvVXzTYk9UAaYKBRdaxPDcDYzYu5ewi7tNzzKWn17EfthnyePJo2rgt67vnZS",
  "key16": "3iuw7NSypVcF5iCvoSMZLgZtabxuR7MPyZ2MSbkMbo7SHzxfr33dTY1hDJM8zbWkNfe7eumBzQLNgSKPUDdPhK8R",
  "key17": "4TfN4or4mbHinZMzs79ES2Q5NYxsa3arBczssZ7eeW3Tx8efao3AjEhZaovygqcq83BrqQ9Eq7wuy2oyhyaJV1xi",
  "key18": "3MQQ2wuDdmgT1HD7CG6ikMa1mt2kRwu6LdzSMGAghXMdfsH2e6TS4E4xSsMy4yaxQhVtBnf1XTZGDUUJCH7uLP96",
  "key19": "38yrr5uEBkq3zVyHvWQTJyt8XqL7TkdoSkn21k1mWgqtHxKHYM1TG6kJi8dJMzdisruZuTy3NDt8Fp2Rh2Sptta7",
  "key20": "5gwd7eBL3eezDt2UEzzY6ju4ZJwDY9NN1rsGPoB7u3pFfmki5imkjcAWH2Q2uEkyepkq5rcgrBS1L8yyscp5yAC1",
  "key21": "3QpsR7HnUvL7pqQVcqM7HqaN7ETbESpn9HnRFcoSa1LcuxX3qV2PuoTtNTRksLkQFiX6FwiaQXZKi9mPhBS1GPSc",
  "key22": "5Ee84HKY7yY1TEKq3g44TiLPN6PoieZCu8UZKrdxbfqB3TToEFKZRrmx3GA4sfUJ2Fy8sPRCchhkYn5939arDtsd",
  "key23": "5GTqSmL5CYJo2cuF6jF9DpTK5bTuVWQSELUwxLAxiqK5P6Jox4KJ4UfJjZaXVMRezemeKyYqu5fjwYah7HeTs8hJ",
  "key24": "ffsfvjDzK9nZ134u6JGcHJ3YoDhEmQWEVVKTu5N93teRsnSB3SBZd6ukr75CJC3mkUMfcYptTczMX8xpPdRrAcE",
  "key25": "RzpcfrStREkvhXUCZTGBXpD6c3zmoq5diBm98MMcmBCHUotWgpod4wrFLSMmm4JQYVv6gViFuPCAAtinCM4z6uZ",
  "key26": "3pzwY6HWV7LV1V1grtiW3ccpX64yqx4cMiCXcjJZf6dp1eWCrnrSbM6zfmrYbBUoAJLuFZNu7Z3aogqyBmSDfrcx",
  "key27": "65ktH4d63CYSUGptNDNUYVp68my7pv3ASdZUawZiazpXrjZGbDcu9DBRRHAUoseaiKWyDFvewnVn1xA2xBVQGtKB",
  "key28": "qaKWKvy4gyJbNFNbrY2zwtByx3dKFRJmmiLnkumn29yzxwBfZFcm279NhtQkptLbU83aVVr7AJEDbcwNQGf1Jm8",
  "key29": "S3LHAnQv93pUA2Fvdajtkpb3mG9t92NxetU5NKnVHEBMsyivrmwLMmEgN3DvsKfjsY6JwTSDP2icBetmbkQKEhi",
  "key30": "2Z2exPo2hjf6Hzn9FUfDLDYwSxxTbe6RQKaABFvu6bBYopRx11xHcwquat3dr2r1gxvXzSsiiGLX9LMJxa1Lh43Z",
  "key31": "5qCiPBie84gKqDYcL5w8DfL972f9hX78FJ2xQ6NizBpeiekawxMJ1FYcu8XJCv6G35YSLjxwaM3j2k8dpMxJ3UpS",
  "key32": "5LSdjdBRCbJesN37sF7XX1tDJXeMeNTYGEdAq1wVJ9GBCAXD55sLm3if4S33So2FFGHcntJYsoan46snRUt81dHx",
  "key33": "3oS1SFzJ6J5v5yvVFMCC7164dUJJ9suxx15kNZAukJaCrkqPSW5Z31LRyGLnDGL2KP81txCMcfiVM3zgEMSjiEzY",
  "key34": "2Rwa3bpB1PtqZUj3LDaBEGd4oV3A9dqacWHKStswT6mCndAQ17tZexpRCijNF5FEg8nDZmC5cQGggVavuRD54Eq4",
  "key35": "4TwPy5RC7hpWDDFvdZq5bhcDXPKSWSuPALCpTSatdouscX4U1smgh3hWhbaxinPsxSFvnEz496azwBm7v1WSSpXk",
  "key36": "5aBew4Kb8hn1vKgrwEsu1mfxjtSVC2ejZL2VydXsdWERmpwVSXsLNmrea3h7UgfNiZtbg193Wm5ScZQKEjAhbYGm",
  "key37": "5WszfpLSgD8FDGhobyKWvHj9ayUCc9oAzh94GxXRKhVJQGpoayNnTvayXkX46bUe48yriDyVW5DwsE6fafhYLLKB",
  "key38": "5otnpjsa9NKXMGSdK8bNweTGKUdw26cMPvc6rVxwi3jFAHTgGbU3KhARyPbooJV7tCjdumUFy5kyzNP1EUtyVA6s",
  "key39": "2CnMYBHcgJpQvxwAccbSaY7zBePRJ6Sjd8uuabu1gp73dcJfrRQPdJyibA4RWcbq12XAnR5USvRwYJ3fNeMELJuw",
  "key40": "tsQxfnKbHJUGpScEhDzssz3KE54weHxrcoLBH11jSBgf2uitRwcSkBmiXzyCjToaT6WFSLeKAdu5gxiTNrCuf1c",
  "key41": "5AK3rBiNheVQaNoV5SSQYmxNVoq72ubS118D7zx62BKpX6wSyaUkVGoFhzmd73yRHGpCyEUNFoUBFtaAWrKZx8Y4",
  "key42": "3AEosWaka2YoGsywNjtU2bV75fLChad622xyLikA5UWzbKjR1HUz6FsTWnTmQurmQfpF9W1mYh9EYFXuRqh65pfa",
  "key43": "3we7Y37ipyoiMJbGqa2eE2WXfZebUZLtPAyau4VPkBsf1TKqhZwwMT1aQLjnTShydk5xjvejyU4bQ3NiLNjVqsBe",
  "key44": "5CqocU2w4YjF9apQpZmTfTx9Q9hnbedGzgEwiFywCD87G3RD7gE7BAXkkbYZ3SYpDRnb5pwz7XYGZJzv7Vz2qfai",
  "key45": "2yHse1mxp6r1VdmLMSiSqvJGVMGNnbLGt8KBHB7Gjwwzqhn3Y2QjV4ZvVvmmqKySog2oFmQaygP7gontCsCqopMo",
  "key46": "5LcKagdoRv1LatMF1J5dJVWNqrpPwzbXJqdAkjvxR1jxekh6CAhqWQFgbdA5EmNwk7mhmHkBsFBdGhsu6ZEv66wZ",
  "key47": "GnYcCHPcVw8xakwbeWJMCnpGrB2CXc4VMCrroQyngTBcoqGL3jdGxk9TYMBdiNVbpMAtmvUZEJ8zR3bzDcrktt4"
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
