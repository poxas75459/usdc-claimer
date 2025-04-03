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
    "HbWQp6TQiBwRatcKyBkw37XWzhVsRQrVZ32auYz9hxxxDTtv4mFJR9wC7MyHJwPAGKxJSv2yCUtbD63KM64SUZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s1d5PfusQoVRgeq2Hy7bqFdxNsgp3ZPC678jehF8PfrYQEdC9YsErY7hYjDm7xpq1YgN2VYPH4bWGaZNf7S5q5D",
  "key1": "5eaazzag31XpaypREcee4iatreL9wGWVuSUE6wj977nabP5PCEbyC18CKFxrf8owd9v8MQvHexBtRhRB8FfQhQfT",
  "key2": "4Tu8iYujtGgxcj7pMbmAtrVKUnAYGhCTkBDApajhhNUovS1JWK57DGmkeeuecAhfdT8Xe6n77aAuWJykC7hFfpjf",
  "key3": "5oyJugCd7BX6c8Xcu4PknVmArLWcm3wZT9ws9KrFJQUPUUqvmmdK5xMX6o8G3UEHDVqky3EVspQcgngfYE3mscUH",
  "key4": "3c4LiNMx6BBtxa9SGnteiKKd7A6j8wJcPWNBo5sn9WqZTU4Fkhacupb2iyi44JbSnycqSjQqtZnfokyFuPGznByU",
  "key5": "59XQEmgf3ntbUDX5PdKEhN7JgEG8zbKbwwBFrXsmVKrsePvFSoduQnzLdT1fm1nYAfWX9kg9CwNEkF1HCmKp8MbN",
  "key6": "4DwsXz4gTjAbxPefXtHJ53DW2FG7uwpv1FvCRq4gG2i1TAkbZ3tEMkanatuUWPzqQ9pEVifrknXKg3XBySxQdF52",
  "key7": "4rKYjSuefZvpuipeDr9M2x6Wkr4dhzeUBYnJf11tGiY3JbEeCUNTzixHHNphZYkjKiyUK7njff3d6JG9AuzFfVRk",
  "key8": "5s3NiwcGEtgxZuCaGovdL9nCfRd4QCH9j4t6SaF4iBmtEd4FhKJBpu2766LmEiiRbdQdmqXe1uD34HahEZrX23c",
  "key9": "4gFAnjKamcWKEcvmiJtmgJKFiomWoato98FZh67i5qrQ4H3zzxTUEjvAvaZ4RNzKtXYQJLEtDcPis8jViVvLG3j",
  "key10": "5whgXxY9TneQZ8bcW9UEpuFvBC35zdAkdCMMkS1otododSJU4LKHuseLQcsqyay4BeAmUVwqmkK7fQL5SHKmjM2B",
  "key11": "43ENPQEVvpCY8hxExxoGwjrAQ8BLKDNzXWquR5a6HwK6yZkQ8WUvbYxqo7qLC68gwKrtVBLMpURVa5du9x1woGzo",
  "key12": "VgDz97FyXPHZRMxAEoPzRkcnCBED9nPKx41mtKf8nTWTN1GwyBBBnkiTi5ezkyUYV7sGK3yzhmqK9g35vsqdDAH",
  "key13": "3sB5JGtXrR5HgDLdFdpGGCYwy9QAARXwbDP53ujbag53kT7frtnV34VWQqnj13tfrhv32UnojxzwCTzPbv4dWeQu",
  "key14": "5uRUgSZAbrQUMVWZexN9GLzVNB3joDE7iEHVopvSygBHD4c75GznFJg112DUA18cv3sjNyFsK9E7Cyn4H48oC6F3",
  "key15": "cwyMBVYPwPJ69NddRdfTsuaLVzbd9y4KJHCSinVbNmA14oR1YB7ma1cre7Sr6vtQ1qKRBxJREx6Au1RrN9nRJfW",
  "key16": "uDwoWAnp4tLUPoruDnfSgN89j2EwtJVUWgQZvEywFkFNwRwYJtK7UBfh9VgvY1nrMRTLoMt7ZCwbbysZcm1p8Gb",
  "key17": "eGBpZUhTTutNeRWRSL2xXXickmbzAF9cGnV8sf324gYpYk3U1BSNVVuLrGe7yHd5SfUQUwFvbLRfz9LHZBst4iz",
  "key18": "44h3oAoWoxFDzXH94cho7JpCYG4aAbUfMM9HDMZuzet38diaStZDz39NAb6EsctuDUcorYdbgMrkehqaEhnLSYV",
  "key19": "5A8NLm4RdoCjVEmJYdSBsG4gNE5bkRRCEdELPGVbSPTMKRkbHPGtTCaa9EsnyqdvVR76atrJsztm2y8Ked42m1Nc",
  "key20": "4PC8ETDYVWw2fB9Bd7YWUSY6KisCgU6nhH8Syk5TBkeVB2BusnyTqk15VbYP5Vb94Pa1hwRdf34jkWD9u9Xs32UB",
  "key21": "9PhrsjU4spSczca69vTq1tvnZUEZtTX7pax4LsidgALXNaLceiXxjqZJfSyEvEBP6Ai8PqMD3pLdWupnmUMRZFb",
  "key22": "4LsCCyeHBe83HYi33DJHL37Hds2TciY685U5w6PCZRh6MrJ8TKot6p2ruemmBBKTk1rzAFpn5JGXHxVQFSFhgvcZ",
  "key23": "2rdzbsEXgYgJD1ThZRrFpaYxsAcUiDPSxU5bNN3fNHFu2KaBcF4wdhGiKBYyTfcDUk8HzQzbCDfn2SSr8YJin5Pn",
  "key24": "4Cm9tMMGkyk34sQnQcsanx6DmjLs5SSdSbVheSBk4zGmCRym1yF8jJcsBqZNNaEuHs1FtyLFmedjZnUPLwrdYgFx",
  "key25": "2DL8peUQACZC1pN37PwzsqYFZZF2C1nqcWXUCdcQEDfYxvVuS8J8D38EGPpNoB7v72NpRgdCiKTheEbcgxr4rBDn",
  "key26": "3sKhWe39hGCger45pniiydaozkkLn5m7CKKeTYvfjMd5R51VrRjHrusn2VmFvT8AnPiFrUnCnfPq1w5eECgA7HTo",
  "key27": "64wFDgu1z9CRMerjJAqAa74PPJR3bNjKD9XZ3kaDdmXeDiSH1E4ATJ3uV64QKYHFMuAPxRUK1vsM5EPSy6b8cMeF",
  "key28": "5ui9K54KEwpEbSMuTGifadTvdDGzYBodb5tMY9znVXqhGzz82Akb9XH1Tv6DwSM5M75qatSfYqtpYezT7Tr9ufiW",
  "key29": "5fh37hj4ukiR6YbefDhdMNXLEYgRsoXznXMU8Koh1qjgJySYQ6H3HWksP8tvqZKv89kfncApqLA8MkEYPnxmDEdB",
  "key30": "EAvuAgHC8gLAGnQ4rCbtUzFfFHzBsT4vWSHpiQDiN7JyxTSM5jDddrQSaZuZv415Vi4PCfXAnL7X1nnDQkEqLPR",
  "key31": "4RyobZXQFu5tyh96fxfJpL7yYwSPWyY8HT3U3EMNpyv2e3GyjoNvEtLLUYPZLd8PTXgN9eQT7QAYc93B14DgYKUo",
  "key32": "Z8hfGfu37CeepuHxDmBZFBE5DykDW9Ta8an2YWu3u3is9KzFW8BuRUeHyeoR32FDRKHsW5SSnNJVTCUiLs5SvHA",
  "key33": "3QfYJpZGQqWoGNVSvQNbxTVHSkvyZDjH6JHFL1o3BqKqJGCvErzMucLpzYhtbgx78p9broXSSdtxECapzzbYNY88",
  "key34": "4aUcRpBYDD68ARsULy7xAMoKeX9CCE1A4aNwpSHrWKys4VdbiXqwAZaFUNX1LA8TS8cpfhRxFhbUF5U9RfhwxHRz",
  "key35": "2XCq3ceVexGLoe35XJT6AeRKEX5b7W4d5FTU534xFjTeW7SNZfuN7Ew1gPwBXq58Xp2KMgtYXFxqGkToYkGKKdxn",
  "key36": "3mZttqx51QVL6u86Swhi4gVp2z2AcDkZc1XWZh7nmjGaeJoU4xJ9KUvsuQLcyxTjeTVRtAzxNK7HRjrbyRjUmqoN",
  "key37": "4YfUevuZF8meVDKAVKJQhRvYYhPUDEKU1ivEEbdb9rfUEqU1SmFtN17acPpdzN7TGX8uGmFNQdUCxSuLoryKNFvp",
  "key38": "xGVAM8nwk4unFrARqRgcsVjjQo2WGx6YtBH1D21XCuKZCh1QQK1de3i6wD1TvtLKry1yyyxmsNhDWCPLm5pGgcP",
  "key39": "61wt8rBHEuXG1pQUWBwnYh645UobWonupK3AUPqveQC1saaZWX5spbBMFYX2WvkUsjBVa2PTqdiUDwYin5kRMkWk",
  "key40": "fjrVAjxoTNqm6LYmqcvmdM6JxvNGPaaUEfGaKXrFbTejzHBZ1iryGFKxxyHXPayfnLeYEiP3CqYk1T3FW7SvbYK",
  "key41": "cWSNEPptaxZN5rUcwdVY3jEkdu4Bodh4TYhiKaXhXHh99j5tf4pSY719SDc225YApvqbjYia5dHRyfMKyFPgQay",
  "key42": "4B9kpdqrNNG9napSDiD25oUKThCEmmgwiNXMAE2gEkzho3zdhFR2WGbjXFjPuDud1VvRFz4hZJ7yWKmiBtpnD46a",
  "key43": "dV6j19TxPdFajJ159BTzfRYNyxuZthnvzfokCWRkCDc28dhSsuQhCdvLQyJzEZAqHnACaKq2H6VtcxFszpUz3hU",
  "key44": "4xmpHr7HchPaejP9tpnSpjci3U5hmhicyvR1fghF9C6ighwjLb9z3sAk7VSYWu17ebaY96GB9Z1YkohJdg38BM2Y"
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
