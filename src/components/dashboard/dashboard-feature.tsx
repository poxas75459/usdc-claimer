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
    "4SkFfpskGxJhVaQabwin8caJsbLJ1H6g5UXyWQ6oPhmFkPnd1tqFPSzdXDNwZ9vyX7bzj55AZELASdPHviqaWynJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MP6pESSeL6MezRM1SyT7fP66gDUaGpcDCufVjaM45WghahLTAdHyMdJWeoaxfjrbFnRoqhQzRfjT9X82xbrePv1",
  "key1": "62AX9LywqoAwvxbtAfZMRFXZTNfXsyMQBmkzYiQJPSkV6onK3DneTm3rcnLjhcPfSHqjfW1yG8KukHqkscNjeNQ1",
  "key2": "5suj3Ckhj9kEsdyq51Z4cmbbeQ1s5qiJYRWw72tALc1PYsSBYbdBk4RL6izWfRA1V1Ud9p4P116tBNfQS4DUQRT2",
  "key3": "4kLeuix3jJrJyTty6PNJZMszR5cSQn2VzvMhEf9uBUXkXoirqXGiAb6SnyBDcEjSawe8QNaXgkvDriLGgMF8x5ab",
  "key4": "2YXV6vpNm8iY9Nhr83ESWjvD9VcrCLJRcVZu1o4CjT6uWU1N72Z9Hjf7bqAm1FrGFbqLkXhJFGZEPWxEw1Duhw2m",
  "key5": "t6gTP6CGpK9TpV1gepWtbuwNJddpqREghz2CKXYwDzFFmZVq7rLZdj9kC22uVBHLCSzhY9Vq3CD8aeo7DZYfNcR",
  "key6": "2WAWPmjfUSmhuP11f6pFvguub8k152yDRByhfjB67cF324YfSuNRNbPc4YNWTPisL7KP15RE7wddKrkhZwrjdqtL",
  "key7": "5JXaaMcXxRpHNpDke8BVcW8AVuNTKqntvXUdGXc41LwcwW6hZa6h7bbkr3EUvyA2HuAzn2NjB2CtmqLb6hS1aLEX",
  "key8": "HXKfw1BhC9HzjNuxjr5o3Lt3CtBH3pdmen1pbNSM5m29mXDPginEDHrpqyRyDW78Z118LyWzz9yZwRd56HR2VLQ",
  "key9": "3C1syczJyV8wEScBM4Q5qAsGrHNmf8PfdCuvppbaLVxS6tgYDwG6QeKiLL1anUhAn2nRzo64WZZziqZNGcgGp7iN",
  "key10": "65pgZbzLfzKZxjsnsrvpp8M2YhxvdSHa42LwTtGHb2VnysW97mNYr1mVksYb2CL3mtEcikS4Q3cyqr9DXMH5QRPq",
  "key11": "3ivqbUKeMqDrFhFvjLJkb4LvGkYoAvY8fCkQyMV91Q5mfzXBX5dzUFSJjqym44vXuWggVHjZrnhKyUesFe8WUw3q",
  "key12": "Mrx6yT4idUsdJfSFsZeA7iAi1S5XPE127an9pht2rPipaHyjAz7rdQ4Y5TZ9hSuJPEUtcc4P17SkJN4cKwELNYP",
  "key13": "5RfYH66bXicR83DxxGzDeb3FYX2YVTWpGT2ftWx7bCxaMkuWMvWWcUi8DSHqtnBzGcxQTBbJeEuGuPXH17FFPyXi",
  "key14": "24tsFQpC9FD5ALTfxZ8663D61i3kPaZEbFqcrYRZzuFeGvmtdq5essEErpnLr5AknWK8bpxDi8NVPFrPLH1kzy8a",
  "key15": "3UkQuZXpLd1jyjeHfuw5viRNVmQh7ExUz1CFWZGpk2pZpKHuTkpaNHNSjK4N8ExwrYxBTw8Uhh7AyMJwfzRpBtFS",
  "key16": "5arn4Mky4bpctg3fbyEpNPcg7JX3ujr2eSYBiC6TQHj1pbcsDgQyg46SjqK8ztX6rjm29E8XSktwwUweRdgCDF2J",
  "key17": "2kh5WpX4MEjzjXdksj4fmhekCuXQ8XbJLaiNNKPkZvxmBNxHxk19vE8JciwmW2Ta6XAEJfgTq7U7iPrFo3fSeGN1",
  "key18": "4EWnNGrwrLi3JUhnYHtv4NAhSY22YPNyAa7nRK4K5VCrDZttAEjDgcYgZsUP6u3Uy2crCqQcH2dAtRwC3zJqbEu7",
  "key19": "4UpxfEGhbGKmTA483eRmNm35BMECnrhBVi4EFfWjNT5FQMu3bkQ3ndDkd6rkdsSjLMLCMvfvbTMCFh1P1YCrdxWX",
  "key20": "4UqZy2LE4gKXGTWz4rsjgoHozGhtDaAqjFL2AMfaATUaLGMavdoTGjZsxECsZgBHCW33ukLHnu6mZnanvPsWenUT",
  "key21": "5ZPDT9JUcyG8rnfzGowKSPo5PPiHar6WGZW1ocjhAszx52WYGHxcWycaXfgLgoxEmDTV7q2odTjwN799ABBPGWrH",
  "key22": "3Wxn64H7AfMLmhDBRzWekNDTRx6iney7J43TUouE25anYWnY7gQ8hqsFQaNx6ojiyxtkLqUj1bknwgnXvTPLoMrE",
  "key23": "4R3zSnudxwvu7is8i6nRtfjjUWbc9PramGdCtXkKoN7vMhCZrW5LbKDjT9JKhaqS3WJRgY8Br7fej5xDaUH2adqt",
  "key24": "5E8Frr6LqF4zA96gPyLqQ2G83eW1PqurUFp3SothaPQsNbnbjEpQhfRCvw6GNt2ozd95qQP48dkvNMaDitkfii9f",
  "key25": "2dLjfb8TR7wX5Gm2myS11HJrsWqYJHeaAFH4niGGbPStLVLDeD84QuyomsZe9ERruy6SZz5f19C5J4g375SqGNN1",
  "key26": "5hzCE62gLXTVFgrKf4KCnai9rNXEptJERs1uhhL1gB7T2K2CGdi71D33onbytLq6Lo6XxmfpixYE87X7Ac35EwXE",
  "key27": "3NKqJTafrFtwaK7MdzR1eBV9WyuvjTRY1T9v9GC27KJnRTebF26q1Ns5cLHBvmZfr9SSPvPrryXcSExgA4EdXDwG",
  "key28": "4ZR7GY6MS75fuaymJ49rZoVTMNCVV5KGZfMuY7ASJRsphEXC5AA2JSHF4b4iHpjNU78e6ki3QQpupDvjviEu579n",
  "key29": "24e4WHxMGFpkeMFbr4u9JRT4qLEqLKxV3GLMn5BUK28jVhvuzJ6pigtbwAYeEHXkV5uu21NC2r7CGh6AyKeUuFpH",
  "key30": "5NeAoEtXe5aMxRo6rqxzUW1F8VDChHMdACmvVm1eA2grpkYNRUcpYgWPH2RsgApztWto84BprP1RyPTriwnx2UDm",
  "key31": "2TFEzpGoVwKsYjXL3BgMPwyXAaddi3UrVMG1v2jnkoinreesVMjTTfL5EGzEwkC1rdmVJgJ1vG78LozegdHZET96",
  "key32": "mhxH1w3xXERtiJX7U453XgdqKDPZoK96poe79QNR3GqS5Pu5WzipSM7yiAhdSDntdhNsJbdmtJAGDTphSgEPmGQ",
  "key33": "5XxVsFWe19GaTTJoYtUQLT1CFmhknh4GM6jRmeBpwvpkNfsPP76m6gZSKwZvrx8Y82D9CZBpfRxPLk79pieP4Dgw",
  "key34": "5yQfFKXuEcmt3PoZZWfQAcbSzFcSwc7c727dpXdvKChQMYjCsFxFkjYSpTPeSxAjCfVESKhmf2nDu6Q5sCsPwCcK",
  "key35": "4CaHfBxD1cBNqcEGSSVZDNbvGuoxpb7Mx4zeLYXyiUH21iY5xWKuCSc2LjMNYeYqVNgoyYpPGtfqekkA6SDeE7JG",
  "key36": "3U8geJP5E53JWdcBaiTR6dFLxqRg52j9jjaJEA6UhGyT4wUuNrXcjh47VT7RVPw1V6AQX4zNsARFYeznt5GHYCE2",
  "key37": "3c6at6y39Ju8ifino4r3NTceygAgqRvssC4PC97baxZfPBtnrbagrJRCmCUVa3EEPsF2ZToV1UjfS2LGPBJcnqpU",
  "key38": "2rXT62Uq9f7puq2AKiqnapWKxnjcBn4yi45aZEGRtxcZvdqnjpb2AY9pBo3Eg1PTFBL1eJUjfeKWNNe29Syvj5Sm",
  "key39": "4hPDPwcyKA9SZWbdwJSqD4ZwS67KLviQvidfrUKBgxKDYt3qWzs2kfx6jxuHkYKnaHaYDNRQfbvGNNrq4Uaf1Fxe",
  "key40": "5xuCoT1FkWUxqyFKXHXkiYdCbxC9acx3usBPCV8jHkj38TbpFYGBu8Po6PnkeuhFmzTm2bTu2nLixbtzrGq1HTiE",
  "key41": "4M7NXErwf9oJvX1BQ1VYRDydKuC9ncFNkiwi8q2DVkCp977YNpbZcBJ2Hh8xCDo9V23kMoeHfUcmtk9JckGqE9ku",
  "key42": "49qTwZhJ8S6DnVCm4MmR88isaMrgVsvRRszqFw9XfHo6F6PzQEWin1sRygvYAcd8edbjdXW5S3jJfamaZmh1wFY1",
  "key43": "22Q7XqsHVRQDknfjmow4SfFSJZ6PCgcTrZvnJmxfvbDzvWjCKYfRhXnkWtUFoXERPbzPq6ZBsFmbUG6DriVAuFYW",
  "key44": "g8LAboXdfgYYfVWr47W3Ema1Y5T9ScSrCZwBj88gWiWbbGSuhV4LrZMDordc7eGQUgptaLod2fst2ndGNWVx5tD",
  "key45": "f2qu3HAvUTiMkHf6CQwdVuzfSUyTdSQesW4zrRRydGV6mRuzZG19dPhZY8aYkoDKhnoyQB3XQJpiwCYXu6iRKo7",
  "key46": "4vdidpcHTwo18Vanq6hcuAPFnAwx24LSCVPMEbmRDM1KPbSZLJskKyJhRa1w83LMWWEygmL884pnoDMDDsdFaWGt",
  "key47": "UKYyJsYoXRTCC6wSBNqoeGniwPeCVqLxx76KsCfcx3fNEryjik4Rb2BQrVi12dWGRCWR4XaterqjiCpn5A8nChP",
  "key48": "4Bdxzt5wKfnjXCS2ZTaLorKgXFxbXVzJShB43L6toTGDSZpUhpuGvWE7JRirSEMcLFLQu18bKeTwZZfkxyPt7s4w",
  "key49": "3Jkkbtd8tWyA2ZmwY3ZMW8U13PfUqhvf8Nfx8RsGdXc8JenJo2uRKwocKkZXJK8HPTG5PWAFZztDaqfmWcHScVLW"
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
