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
    "5AgdY79NgKTFsN9F27oMAVYTeKxKQPpM7KJps5MkfUoXaKodfUbuLjNJin215o3moZWYjWyXEVUwa5hBpcW3dd1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgQnpfeNGBoTAV9LKZPbmcdEWaub4s16tiZm1cryVbEMoEWagfQnpSLfDKY9gDjwjY8pCH8UkxewAbHVvGpGkF9",
  "key1": "5QKomVSc8xksFMVi5zTa7H2jwZK6QM4fNtaKbeDbK7iEmiuNDWkMNT4yqYU6FjW5hUkY1muyRRSQogktrzuGLJ8H",
  "key2": "3W5ArBtoFQUD4asppAgpPzE3U9c3hPm32qVE4FGi6GEfjvnrx28rMvdkXBgSJC4cmG6LLGN41iei2L9p1nuCdJ1t",
  "key3": "2MRRNvBSgAoSqpBtaFtFW7TwzYcLRceyagFfaNecsy9jtvh2hJ7uN3BuTNBxBnJq1rHbTxERbZprAeoQv9i2eoC5",
  "key4": "25GuU2kPciFHdYVHHZjYUZ63GWYufvDPrtsBTo4vyAKdqu7FU5ahVjxmGP5sZpUrnG58bZwMdMErd29x6fsXMU71",
  "key5": "26Bt129NSVKm7N2pjsbc7hFLezJiUvfnLsRcmWRhRDb2kSKiv9uvyxBysFPTeB3Lq2EbwApDNCdQrwCaKQjNQ3aL",
  "key6": "56xGmHpA3ydwRwqgLExFBDU9WuFhzr3MdXmrhmQzCCAEmJdWwyCuEH7f4RPb7ttgS77UdbqQsTyM8dQkoBwCicnY",
  "key7": "3k5eSsAzEYQ8vLMs81SNHJpvNACN3NMgTYfoKoyWJHSZSbS3Z8PuxLxML1i8B5NvPHk6CvyCKbzXVerVK36yDc5Q",
  "key8": "4UZfNPzeoBEvhaCcMBt74J5o8mp9hCeTgntdzTvpUFpQ8dc5fWH7XHjc1qyJKF7BYaLWoSnGta3NpkVVwN7yVULY",
  "key9": "4BL4hXfCdVQGa5QjzVjDjDby2AnhkQvURVrJp7Po7oJV2edapJRYLDRit7AWVUgc87P5wKLdBjdU6segFTZs1Uq1",
  "key10": "5sMqxqyUCuqXDCFb2GaLpVbWG6XKtGxa7bjpnbPMB9xdnCkZpKzWwzR28gj9Af7mvvAptK6k32n5n7geTJyFKLnp",
  "key11": "3ZrW3NVmLysLpopc4gyDgEurhom57tAjAkerdkXiUbNmEq8YLV79ZNSEt3LhyiivNNu9rXKmmfSn8c4qBAbbh1Pd",
  "key12": "352kjUQQhbhpFUVmdVP6N4FC2HyMcjEvYyfQXK8fosvgBYpLf4ndjDE76HQThynw8WqaKQRA5BoHgrfD46g2e7Gp",
  "key13": "2dDvRwwkBXLHJiFeRjFssY54PhyWvTYUHYRzSCf9x9msVmuRyxYSWFKuRrpJ2HYbrZFXdW83FzuswPZtQSSDGR4N",
  "key14": "4TmyJmjBXTrXQXbBdDqPpFciyVVpySVtBmraSXYEr4RxawxJqpzdWNj2eUUKmzWagv8guYc61xSyzTmcDr7VcuM1",
  "key15": "3npucTFja92airckqDQuctiM5e3xhJ7TVVLo3n8oaQGhUiMNfoP5gtGQWt5eizaLrzWMTq2iGMzkCvc9ZCQE7XwS",
  "key16": "3f3ZLkGeAVZj7BHX24npEzEvmxoUKcfyVgzJ2YD9cDP1ZaAwTacbpxpvmsLRJybbAUNq6mBHECN3AdhZ4HHmrjNr",
  "key17": "3Ky22DJRo1k9FNPVyfL3uQgvFwE7U2ywvgx3aQqoCxzEjaKvoV8M8RTvxLt1ys98Die5dcH1vKvYgTmKEtgQMiKY",
  "key18": "5g4wL3Ch9qo7BSLUQwVDo4oc8BVgbvviSPB4iAUZNpuY8xHcj1wMnNVDdiUa1cLcT63obUqVpJFq5MsDiJGJBCCT",
  "key19": "3vLAdnTdtWN1EUFvwWUEGik4KCbBumVSCrEQm2YtiqW8xsVYS12MwcKYJUhNShz1wQwVeNxZUs44W8ikYdymJbXK",
  "key20": "GDHsAtAmM23pNzgwsgAiJqfoSoRkgeJNRyWShLwoLM6hAn3ZFyjQB2fwmwjydHxAwRoFt6phZ4xpkuf5EHzEU8q",
  "key21": "2dagmAvsLHjzjhvAArsdTarhr4ypFw4TNfthFsrFUChP17tL9Bq4Qs2d6TMvac6mEjxAz76RTuVuerYCPdapNexc",
  "key22": "rmFeSDWdrdQYMBHg5ssDyGfXVJ7EAyFrSjZNvBQnA8B9HsLfAPbzbJKE5pHnGC2XJZUq8w8rQ4U8b8hccx1VakW",
  "key23": "4YBpRnEU5vsLmriV71rY2ePfedE5pwvBVHGFMwGUJ7h4x2qVKQYqcz4sRfKhmHgzP5ppnNz1TSaT9gpaCVEjesLF",
  "key24": "5VtsxW3wY2Lkfx4gbiVrWVDDrhCL6hjjnaKRhC3DM4jWDBno6FWEBQQKBKSdbo8LQKDuzV6wzJgQteRyJAZDnJPL",
  "key25": "2Hvs3jWf8tWaBHKovC5uscWPiY6CtSLY4A2afp1wutThrF2jDwynLQFUpRDu4AqPyJGJ4oUUM2tDfjXbgc4nJvmj",
  "key26": "2hhMyohjqSHWdVwXEmip56NCgqjaMtFvBt4cRk23z2CzTaZC39aVJ68CQsPSZYZbDRoBXtQvo1QBtEJ7sXApHeLP",
  "key27": "5Sxm96QjdEd3rF6TY3R6z6q3rADna2utB1Yfh1bx3qoWerm3Wz1mvrjp5MPtdZh4GY6VhjB1crn4yBWZRMYQcQE8",
  "key28": "39ZWhHB7WZosjU6UYTQdtJi3H5HqTMSyNNvkqCRsqYQQL5aHNwrLPwpEPerns76o9vnLdj3y5UZAbf3LXhBhpChQ",
  "key29": "5HQwgz5UFznykXZFaFnsG6o7pmUVstF2geF2TRU51qY8k39z6d8XjWqqMU5BEQKnm7dDhoB37aj7aFRnWMBe1iZP",
  "key30": "1UPX2yPraZ6br6bv5SNywdtjGvZExBmtMbHfPFAurpZn4rmTRk58y8U2H4unFqh3dZgbkJGmicRYMxrFfR8Xt9V",
  "key31": "41neCPBzowHerQjRbNjUyUFfEccBWopQsrUdeFR33zfyBXqmgQGzzH8P6kJqaQirpzSPgh3GHFtpVZv9t3n9hmeb",
  "key32": "4QE4HEyYE647ayYS53AVsPJn1h6KcbV6A1QCvQ2HyrWcijxM61cnvN7vLgBtf5V7x7hzDPJqZPUouRUR6B2vr8Eq",
  "key33": "36MVbnaqHevtTtJeZVLVXj5CFMCcCBWtSuV1mX6vTFaoV23reJCyhxDwmnfsC1Ys9Dd6m3kVXsn8VXCejzypEvid",
  "key34": "5yMTQQ2iuj2tDXyQstFx6LchPMToCWVJFKJaDLMfmMF6kLMFPcdpw6VnEufnXVj5dEDwd8BSLYyXFHr1f61LCg9o",
  "key35": "3ubSvrFE1ojBE1Q9yqiAMjxqcQwcCV6CCmaG9nKKGNDzdGMQXUherDN4S2k3evNiyw8Y69KRRRfAWWH1EnN7D8Uf",
  "key36": "5gpseiP9QbgTfrbaQZPk2U2Zmbu2Q6M1gbHZZLB5NGyTyMx22VS5h5Vd8yswZo2DxQhM1fq5VXcX2u9hxz1q6Zgf",
  "key37": "5JWR8s2QdygJpZDECup7TvU5LpFmQ7cqHNmKBBDwB87795hZzJQVJNLxexoh5FKG1iCtSJfonPAuHRuoRZ9aQ4oe",
  "key38": "43impmjpkwQtXBsMMSyz45Vo9PwqKyygAaA5XK9YDnkwMvJuHNywpp45ArkvTPrqMzSW8pnDVJWc2BwZMC6sCrNJ",
  "key39": "21UU3Ew7k25L9m4o5iKFuDzBLN5X1dgFhtDf6UmUqqKL7vbNXUhWwNCdzGDko8dDZYsRdjuGRWnbwwBpzKudCACQ",
  "key40": "5EwUKRdyNtdTQ8zp1avxKT22BSvm86uwqs9V7G29NsJHgtWYVmH32QhmCECiYMzQjR8hmhYyjKS66zG2Y2ujout8"
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
