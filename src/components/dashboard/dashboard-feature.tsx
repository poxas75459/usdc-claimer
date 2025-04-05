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
    "3quP7w7SJVmhF7jMVF4gaomySDRJsCiY5JwQPHiXGnhM6eYGdqTs5o2ZaiX4sRXrfAo64CG2zGxt1US4AnjAFFzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MbqcwfuXDp7tkreKsgXajcYLPWEAWt8hmPorpdsTY2y9ytAzVqCbMZi5w3saSVMTLuJhnX2qWL5FGZFCTsshTiF",
  "key1": "2sJB1zKvkAU7YZEEzMM7PJDJAM2fz6cqVWPzcCRRvqqrWovoccr2C5wFGnxPHrwHQJ3jTAuwubLVEjqYyqfrTdtN",
  "key2": "J1rfB9wnFgEyubhxro4dMJHQroscsSGA89awwBJ61eqD2VvrCJrSztmjra3XQJN5nfLEZVQtfKKrKTSCTDRHF6P",
  "key3": "2ggA2BWA33MAETcG66wePwEJGUAuKxG1SYXdB2itVtTrqh6QjG9mrhfW4HKTmpswLLQJfaBiVW3vxUL5zS3vYUrJ",
  "key4": "5TcDotWdeozzkD74v3iL3RnvYRm26JbtrvVhkrBLU8YFVBnmNNPDTCg9Bjuu2TjeNPEPQTuLRjGUGxsCcTtnGYpr",
  "key5": "5xTQVfkwsbb7Lj4rTnwDuv1xcrUVUrC874BtodiKoTEWWxYaqYP2cg8NPhQeQKAAkqRQbBrwxyXKyt2k64mb1W3x",
  "key6": "4Ds8xNAcfgaNi8s8ubt9ag11rVjAJgSMBzTtUX7TCtaDuszwZhqADftuN8GYeEXhGJmVfKSix7fKvXAqAoTJDrUA",
  "key7": "4J3xizZeWKBbtW7zrWtJZ5swp3Wu9Maznns7xP8ntKEeK8SLjzMb2DD8HFiX3fUySAETuUgxiLSA25LWZxNd5AyF",
  "key8": "5D17qZY3FNMkmStHtMh1ubRB6EHq3ExDFyC5A6rXFTZh4Mrq5TtgaoriFybfWCxjvVTqwwrMxadULSYSoE59aKqP",
  "key9": "2dbWYt7zu5XytQAPLxyL1C3S3mHkojr6xgU2jjrp2rRArK8QmpMFBKqDfH95f3eNmdrupB7qPfgDqEvdidR94U3S",
  "key10": "6u6Qrhuik6vfNJ1yUJtDcTr4PH71KJHZHBiPxe3q3LqdYYjQZ8N6mgpxHHr45diLYhyMWK3xdck6vPF2hrBKWhR",
  "key11": "4xJphVXQkDZrFihzZFBmU7LrrMXKheAXwzjDnvcEtfD6N1QhB9G5guDwDjMS6ajt92hKEG9UKU9HAwXmF16DmsNx",
  "key12": "5LHG6hSgLnhaazH2A5D5t1TeCSg3AN4xMYecCLgGZ2AXqnLKiahDLUNpo3YqnktX5rM4kWqgKL7JdvbQMyXaVdFN",
  "key13": "imbE3HgEx3SqeB7S57vCS3htaQC9TjKpjZS2MQDjWsmmKzNSiv4kpdkXkrFYa88nNkffp2ayoSjHYVaXRFAhvF5",
  "key14": "5HDBL4RzwzdgE2FehZbGKtk6F1VwZVhpUkNbLKfkgdyNLtoz2KV1rFKSsQT1d6kvfU7PWSJvQFZwudb8znPDLXms",
  "key15": "4epwizuSPEk8PqUr6GS4WamLWn7rY3dcwjXNqJjRBEGJA8zyfBNzcZo8icksXj4rgfsVbdm7doGZXr3rFNZdpMwa",
  "key16": "4NpCD8CHjMCSabmHURmC6eYKJX9fWjcp8R8VjrA37Q1ht4MGZ8xpx66hbmsURH34ELDZrUFF3cpr9KCEtgk5x368",
  "key17": "3649cZoMnBSj1mDVjBpmN82MvsYfxQuHX7ARLrVhhJ4gmz3Ty97mCvugarRz4GeR7dE1wK2GM2sdpXn5q1eJ2Dmg",
  "key18": "5otpHnnr3feD1m3qkLPg2bTBcJvSzekbpMHZ2mVHPtW84hnZJs643BGg5vzUfgt7hRMHd2CWM2kR33rmKrq9RXqt",
  "key19": "mqcrE9Di1UEf1Gyf4v3PA8a1c9LSZyRxY7VBskTcMqMz4QsWRWiAAMobsAoJAS9q3oi3zo9qsDZ58Y96K6EHCta",
  "key20": "2mpTHZ6vad3XGCTwsf4E746uJ933W32i8jmfA1Ve3w4exa4Tp7Gsi7zFxWYD2oPMDAFLTCMvGUJEcJhfgfebUoSo",
  "key21": "58bXC1pmQuxMtSjTzee9pccELeQbi8v1u8HVKo1puwAkfjfN7LVYQhum4kUEjqFdbSqD2Y1W1DE1q7mcgozz2WSX",
  "key22": "41by5UgLgBHFyu53ZgBWgQEhZHY6TbCFEHYbeU2sR4xYh8mBSTmb3raSXGir84p86ndrUN58p9bLUuh4rex7sv7C",
  "key23": "zuVWADgvmu5XhLyAds3kn9GUgieZV2LYB94E5i1DdSXYA21Y5UWGsgegSiDHR18jrijUwxTWhHpDWqvMsUgugte",
  "key24": "4ByXwsSdypoDX663J5ZTH1c4DjRtHxWjgNLCwEvV5PbSAapXo4Gvp1ytdzUnmFzourt3r6Ees2V2gujdK23F2jWo",
  "key25": "5CLrQtpNJFg71SUjmMFCk9AxZ771zKThRvetKySZbFdtY7prGkWDD7sVbhhssMKrqDv53T9z1WReuDk5rpjzkzYs",
  "key26": "4sJ5DJfBPujKogj7qYAdywfjXF6bRgfVSZwnf9zyjrXH3bLkG6219jzeroFELxZGFUW2P82gpRCcUGwh1bMucwZ5",
  "key27": "vRoo6RdpJvoXTWkm8VPKrwLWtebqrTDiaKYL8jcmuSpwc8uoncFRj8ETAvsyWtSjLPtq86oAs55ke4TG5a6UKFG",
  "key28": "b6RDErUMnssuCvc3mRdi3xVY56nsTfWX2J6PjkcQ7JPUGREv2r6rUmnGcYYLfcZe6jL1CFHH7JzmrP3vHv9QFgP",
  "key29": "2M2tXw3nEKZkubG1VNvvWA4VfDpUD6aBKDX3v7WhsmgNMPNbnqsg7g63Vy4UXVG8P5A1hxCRK6WRRVnUzmeuJffx",
  "key30": "nSewtHDDM7xKvBLzxeTqKLNYhqaB3KSa8t6M6TKPUfjJrcY3M2XERrdMewYjFEayysViSgBQ5Fh2m44FqQyHoy1",
  "key31": "2WaFwKkYWZT9Uy3MzA9wrqswhepkFf6kTSGUq3SX7aJodQWZtS21N2wVn2TnivgFuezTmGXQpxgTV17RqwSzJ6wo",
  "key32": "5efdojCywQ1YQir6mnMeVebKdPcVSCZer5ydqMkKmK8x9a39Ei4vGTu3YruDFQKtb893MaqhjLRfhNjyM6KuLc7g",
  "key33": "5Qn6bALdpR1P1HUEKVNptS1rF8XSbfJHLGCrSHyn3VRaMDFxmdZE9AVgLJT4sm4XQae6PAKEEzdREoeZtceGnhJz",
  "key34": "3VjEcvF5DqC1FJsvXo68rNY5RvY7kQ8SxHcL4YMLLTDNeU6A4f6QSbCqvCBcxKXzw2cvnfeyhkMicEXQfAWL8JBc",
  "key35": "2KKVb3tB2MFxi3cUNopdRtWxL84Jt9rtE7esSGgKjYZi6ffcRCsamvUvvQLbMjTwsP3hT85FsxyP18WA3RpKzJeB",
  "key36": "JENXDdNrQuhf3hoJuoL2auQrnmip9h8utSxDrYWTXqCL8XDQPCiMMhQoyr1BvH7H5Ms7AcuTT3nM25QXNFKU7MR",
  "key37": "5HrDb4xTVTmjUiuMPjAYvbLnRZD8wCVcSpqfg5CmWuekS6AWyYp4XrTJADwp7mYAzZc5Du3ovi9bXkhbwBZxK7to",
  "key38": "3DtWMqCq5UYAe2gwq8hTGAxCv1hcz2b11uQfGyxwvpA87mi4CHyzhCrzwnehgCAZ4kp6gP7ci8bQgCAzRA31vdHQ",
  "key39": "2YSe6Mpsq5vMCrS9GtXR6woT2GjrNPARGfpekGQBW8a2hny1HZzPrVNVbAF89mTuCvqeytV5ui6xHVH9HBz7ZcQ",
  "key40": "2RQZCCgTQEbGQUj1PoRZ7bfg29ZwW3JeLdNeXTrcFzDcyPu12z88SpfFjwtsVajZgPQvM526agcEUcT1RHBAbwbR",
  "key41": "556e4D9FK4wuthUsZxTq94AAeXSkGJHLgHpnGAAYZyGCRPrFtFpioUFCdQpCjw1SdGSn1XmA5vkqrCthj86kTaCw",
  "key42": "3kexSxqRjNdp11f3apuheUyZbANipm5YLkC3d2gpPgJcxmSP58AAti6DARmbjNaAFRZdzfUWTNuWqTxuaWDXMB1N"
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
