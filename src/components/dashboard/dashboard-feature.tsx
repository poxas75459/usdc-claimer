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
    "4DEy7MjUA9PLR4cDkpLnooxRbiVqFaBwHJaDSDTBQLZ3hqwF7PHhpRM2zXQQvjj5pNGgstzJQeyrjSssE7LjUp6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59pZ4Xq21eVPXF579qS29f46HwmjFWahAyRXaE1F5Lj1xq57aS7U2PZRpiLnpVHi1d7Mo1fat9LYsCT3RMLBqzBz",
  "key1": "5zJNx7RGeEgRk3jz3kP84ThojMGEMcn34mHugs2EsmD6LEqujHxekh39QbJiegxVrf1WXvAXTrTibLZXDWMr2Doq",
  "key2": "4ddFJrKyT9au3zdYpkApYBXrUb5iTR23PkQ7WEin3tkfoEgBQA8Hf5qT6BetH3YiSZtRFfgmkT5yXJpv6pz6m29C",
  "key3": "3DBb8EHXnFTJczMSSBWNmMmwHqCuzTcgAictTqmmiYXhVPvTuCjKofoK8dfTxLe6q4CaamjaCMoDeVT1ZsDD7moj",
  "key4": "2gjDMy7y2z1fThtrYDVJUfXaF9zoK7tWZ9H7JKLZzZV5cxdmfM415bkVzpHi4chiVnS4tGsQ3WhU7Udw7AoVp32S",
  "key5": "znCZfurBpiduyjVvmcwNudq3ERumG4qg7VJJW59suQBMwyYoGtzUbReMuCfKuRTaLgs8HgcJJNUS8BmevjqJ8qC",
  "key6": "5ir1Pc2sYXr8dSMMcUaFsiLswxQmp8VdWHWvLJRLx1i8ufqYE5Pieox5k3g4EbUULCkVg8ZHUs8bcVnsrTy17QVi",
  "key7": "3eT9LcJR4MDCkPeW5j4M6MDuSMX6dfDwd4oNccFWjZm9LHXWdJwipnf9STieY3w6y68kbw9aTbe214vqUmsKck2N",
  "key8": "4Lrbo6B8q9SMdMDjDgZEKXa3kPNwhJCQLmLonAmvofZTACH1F79Zxvd1WJsearuRyyncLWXRwWz3GgNa6t4fLxhd",
  "key9": "4WtfKvox7j6tEkLNc8XxkzMyJGP3wx9Sg5UU4ftrJT1qCqRapiof8V2crqtBDRUjHQ4PY7xR4xSbHrBSmtbag3UX",
  "key10": "2suKqLRQZmoBmvmySS2jMHw1vL28ye8sq8r16YsKHECsJaM89EKzH3PmjGd45a223z7K2F8HFM56eVbd9oBXGv3a",
  "key11": "5HQuxX4tzSDMnz6VebkzuMj7MaSFbGnNLAv9gHzqNfEiJBt8327f6qwBG7KsbTdLZUgp29ria9dg8rgdrLAkqgcH",
  "key12": "1djvMNot8pPR98YH4SBGn2SVaDLvDv5aZZmo6c8nhtbZq8hi8yyFncsGJ1u54sCeDMxsyJj1T4c3UwDvFyqwgaW",
  "key13": "3CkY7EZtrmCdZVbME5dELUKyYSou67XHmf3j7f52aRMqATHx4PjASqXgCRodPcF3ZhVDXDvJZusW6irshN2QCXx",
  "key14": "55hA3nzpTFh4TqrJJhgzZGnr9MVLqQH5cCzQhisSGNAH4uRHGR3mh8QwBeM2a6U57UBxgq55wQBAX8WgdSns45LF",
  "key15": "5KXmCLmbzXS2bfWPmqyKYQyQu3oiHUDiKGPTGaLHpp9k5dv5gXxScGVYjCi5D9myEj4wkCJNiQ3RGftz8rAXJtke",
  "key16": "38WezGcuc86zwy67eF51nuniKttRUCyLuyupzwtwMYCdotDQyXNkfiwwRH2pHjNSWESUgiSvVoCWLc5ikrmXFtdz",
  "key17": "FBdym2MPRKbpgQ9tne6t37dvMibz1RUDUrzBkb6s8YsaynagE1F3UEwwvLmjwUtb4q8n5jDSpQpFSk3gWkxQGeR",
  "key18": "4vd62xeZxevNjtkM3yvLzLSVVp4fEnt5TYxYpUGrHD3o5mcnUJ6BHeY1zqJy3aj7fpHVcp1kQxeHktu9aTpK2mVW",
  "key19": "2WJ6z6RR3vbc1M39VF8eWYK5SH6GRub4eMzy3qTadDkVpK1VdQZX5sL8DxZc4nbaB1USqUvcShNMZEHzHL9N8hv5",
  "key20": "2n9fxdfx4f1YCJ52d133Z1vzPfsyLVPto6ZHG9REPF99dkQppYhVZL1J6KJL8boh3RrNV2Xu53DE5QAQHjDozU8U",
  "key21": "2ra8vjSjkbttrrYhVV8YGr3k3Vyq6iMXYDge5VVp7T46huHyTdfjsdsfNEyepKapPFmpSfvKq1t6DYqyTTtp5Gdo",
  "key22": "4KJJqpsTMcvNWMbQj5ioNGWdu5So1qyQkaUtjSg98Aa34rKEkM2tLDaTAyKqRuLEoEWWGX3yuWkMi93TD2Qry9GK",
  "key23": "5KooJHeCjfzbzbEnAmDG8QS5YZpcfMurVyGah4qbNuZXbpUbm7WPQcgRsVFiamhr9KKFw1oYTqyKEzLouLbQsm71",
  "key24": "64WzEDoKyZJrYsfW2TuwcTPai5ucPbcNV953hr8eCRzYot3NFVhAm2Eihx6goaME7gwTbZH2jDkRSpwToPwYtTKY",
  "key25": "5a6r1WmvNbWY6R9WhGxn9eeuFyzzLjiuywCFMpWwcVoKERWyZrv63wR4yJuKhaJ54BC4ZNtkDV7HJxNABnxmVJKS",
  "key26": "33LggV1WUarxN7wQahfnB3CLX28rRitmJhYeP7SvfdAMHVxvvTmFdG4zG6QespSzVtPR6ak9sn8bR1QGtaHuZFio",
  "key27": "5yQVHPksQGJ9mPrAvakPQxdHQwigyDSHb7RdGP1ztkjDELoRz4FhANc2yFztJ3JbJbAdj2a1P32Ujqgvh1dRNvS6",
  "key28": "8oX3kUdK4oDazPG3kB9e6ki5BiSWjHUhjN2x4NqqLhpnsJ2gJBaUd8XxMWWd8oXnQkFgXpcKZUSkbcdzWWnFN4R",
  "key29": "b5JtA52DeaXxhkuP4t9x9ied2RxKegL2Yq5T2t4Jj5UfFYuS75MaT2RMQDRY5ZvFwAEbrAg6hW128grWraEA6c2",
  "key30": "3jCxRm4ktjGVaVrmpn18mSkHzodeoRyW6q4CqwgF1Wo8n1MMmBqJfNGGCsFtYk5XtogVDPazcyBFgAgR22mfkssV",
  "key31": "LG331HjAjUVDYKqKjCFcwktGwLDaDbn6LYPsGhzR9AkHC7TyBq1XsQaqcBH9MVv4f6tE1KnHRSnjpGuHhLoviP3",
  "key32": "2KFfGsEPoZpvzTkyqwbPWyFLmpTU6nq5TrEzCmDLnvyyirQBhHMaCmgjQGZBnGjLNz6esTKjRvMrZKNyqkgSi2VY",
  "key33": "2iyXp1Pnp5Ao3GHWAUfFhA1b5DVDZtuFRfaFhb37HqgrRbFWwP1kWh4CLVNJYJtiZWtMfMFeini9p8nKsSGBowWz",
  "key34": "2NuWY3unjZadPDYsMMpqRJN5tFuXbtdywE8cJXdswudUmYeKf3NYE9jiYTQNDchLSUoFVCrFWButMUQygVVZyvWU",
  "key35": "1vzmsbPMbYcdqbw1YB3PjEzv5NcTwzEJ46AACXE2sNZchAcagYHLseUvDifsK8qnNKi2DbZAz42Bcz64WXnW1Tx",
  "key36": "TVVySVsjuGGJxDmHoHpYPxkawxvcAZMDnLH3zqELSNB1UXgXbiJf7VgZ8AgqTGJvE57mF8HTQQ57iX7264tiFta",
  "key37": "YEsxAAoL3FYbGoHxYpLzkJ4qD4DVg8oUwSEeZdaZ9W7QgvSJxCnaiExyyM8rA97SVftcRSKDfG5dD6QEmzHhwuD",
  "key38": "3Ap1Z92FtXszN638YBochUBPTS3HcNjb5gyz8r9oqXxT9YrPBGjQcot2C5ubqdP4WzYfQRQUhRkkcwiGPFWvAvnj",
  "key39": "2BG8kVYTiG7eBYChX3PsSgBBuv8nkpsFFJzxKchPRn4kTRbzqHhcFsXnBHRxr87rJiEnBAYu51BSoYpGBFiWm3yY",
  "key40": "oN5ziyU2zgLLZSuH3MoLZg1NBLsj9nJDucKAtfhEzfB2EvrJmJJUV6r4ExBGCf36xSfSJJCqrKDAFvmyFRNYbng",
  "key41": "BwmocPdLTc3jc8NGY7GKHfWPSRVejqh4DSj9CMFFExs6R8mt5hqdmG8cHwwk3csBGftLtS9Z1RYzGB12cSwp8m9",
  "key42": "4ARdCQymXgdTVagowUzz2m77iKpHnBkUURxXpcQydoC31nzLyuGVreaZZgqnTmXw9QHu7HwexxtxfGcHzSCow9U6",
  "key43": "CDvSx48UvXrecL5dnxRsUdecrYEzdFXaTLNyM2TX7y2iqV8XsTMMkSEXm7F4APJmq5z5x5ZPLqduxpJBuRX6U95",
  "key44": "5b7pBMJb7cyjtfoBM2gvPmpWKjFyjW6ksDHCEoTBQ4JH7qBDNtzR4SRSfD8DuyFWqGKr1bzKnPNTS9ncZEb7vsH4",
  "key45": "3P2U1Ddh8sg2EaAbNBacAgr9uqvHX54pYfdabxT7d5nQnV2XHBkoqjrGzUEDS3kWHHqjTy6zbZmWgHWXstTHtpkk"
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
