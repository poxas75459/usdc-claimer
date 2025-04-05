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
    "dTQwCxj42tLgyrbHHrUPi9FsxSkKGonnk5wZHhVf6Ee7DfMa1V66prvqTTuMXQzsiWNkmjUCDMahzJsxLRMTaco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SMZW6YB1Bu4AkA76QhJoraDxezwSk1WvWeL5ZaNmexnSFrRh2gTpiA3YPPk859qVk4ZbWkXJF1cBGaMvnfW7Ds7",
  "key1": "3vwBC4rHPEqmJypLVEL4vDuaSVgVwMp3tALD3FgSn25KbLpLTpQJoNdN2rSXHjB1mSHwxHTCaxVG78n4P1rfckWo",
  "key2": "2S3E9BHZmGAMZfx4ZjvW9jcYVBFstMtSx4kvrbH1roQNxH46VZyiQB88MsiDiUATETfYM4ChvQ3rFpcM1dMksbU1",
  "key3": "5kbom472ozW2AtiEMu8rkYyLMTEACT85cFWmSZskN8zp3mRSMueTBS6jmAyF3HoiiAagXNCb7vme8DTfjMa8HuaY",
  "key4": "4bNCBq6JNySMzLPMJZpi1PK7tD2byuPyoKFFFkeWJ7bemMYN8ck2dYZastU1tmDwumJENiybFTAdmAgqV7b2Ns8g",
  "key5": "quQDzxtPTVeJNnAUVPsPcmsvEkYTUFvgPwBhaWJMGEkHp2Mq1K4zkiT2gLHW5h1NoEZnGzNNbpE1BoqcD2GknAz",
  "key6": "2fAnMLbvxKAQ5wo5TWmdqSBdi6shfyPbQNH3xknDNP2ZMe48mfgAqj5VfcVK1CJbJa6uczStuMCZbMK6LMTccA82",
  "key7": "2yPyAth7iNn3sgeJPnSCntkp9Cemqxt4fYAKyoc76ppAi2oAFaX6J7VEe4vin9bPdp7y9sy3jc41bFC5bPRmuU8a",
  "key8": "3rdWZ8YVS65F8MjVN2y8kxyGmNz7PM4pvx6kN44Wesk6YjCgdUkN2P3usoc1ZBtWXerq42So9tMtSXZpfcmS2kv1",
  "key9": "2cc9P5uZPrwHqPkba2ZhNhid45Y1RH7ufgDUd1QzTThVJNCPqckfHAe6U1tW7YXe4D7FBXFTv8Dp27RLH7zg9JKs",
  "key10": "ET8Xw4esBLoLsGqo7Shv8EVuysaLjsTMNqhnWxXNPMZUdmi1WyM63DgyjG9SF6x5E22EKL7363fcLGjnvQ88s2C",
  "key11": "S9dbcfYzS3wq9heqx6jT7dSMmNfbtNNEh6XJkQte3668JTHRLiLXDjLJt6yL7E2wJXpSEyHxAHbygWjJDWoy7Nt",
  "key12": "2C4Bj62BAB6For8hmNWVSSLAqVsSM97HWaGHQoV9L3U1vm3Dmx1bUoDzUv9SXNG9ByNKbPqw8BAhjQEuQGKMGPZB",
  "key13": "2bTXNGBYCrpzYahbjAVpebpLWFadb3Pav7tqhMwcdXy6pxQaiEhbpcXP3p6kc1oHXoNho39E4ysdpz79hXeizz6P",
  "key14": "qkoNJooGJAvQPcJTUH231fkGYdrc12SHxYfAHfT6PLSJQLuRjhVVRsitccrYeaR6a4YzSA1Hi9GbcZC1x78YZ1U",
  "key15": "5FoM4bkwoAGbLSRbp4KoQJMUpfECDi7ft4Z4oFZenS6AhwBr4LXdndeFZ6Ww66v8cP591xukRsQAF2AEkY6akWR1",
  "key16": "5WYPTL3DCg5EA14zkRYT8NjcVz9qYTzDabk51cmffynJ6VM3xmtM9zptnU5jZJH6UvrKRYQHp1jJwvurGGimXoJ5",
  "key17": "5ciGRieoD2SMDkpvykJ6v9RAHLVwPpUEZGiuKa4ijkxuqLYuu9u7xLADVqgGEegHjo3kku47fqyaM3UZp3KWduQz",
  "key18": "5TwEiv7fAC1HTcK5vqVZBNkDWTqbL2Xe14WCWSaXDqjGsQw9piZBiXQG3uz44ync4HNK8akg36M1Uhz3K7Z9psdc",
  "key19": "2KzRkAZS1EDBtjcnr8x3mfyFjdZ2TjYJ1Ju9iAuKthZAgMnAJhS9YdA7R5UgkMCL26J8moWWxw3xbwxvPFC4kBbp",
  "key20": "pdPL7qrXR2fouJp4RpdpMivvrRcFvgXifXmaP5gSyzLQkdxrXtczSYEGirF5kKQ5KbF92Kp98CBMWR4tp1q2aVM",
  "key21": "9TN9aCoXV2Wtma5Y2hBNagXGfva1ar7Dx8zkEfQdZSAjqXR7kg6rzGHkuhdy5YQ3CKbPxGRrVZW57SZwMW7uVAq",
  "key22": "3aCV3WfjJ8VicR2tP2pMK8t8615itaaxsAp6VqL2bQtcivhS2etUWFiV6fC8H8udSXDDb3cCJttj1maEpZJpssW8",
  "key23": "2cSsYhSTdSvs2ZfVzmFFPMu4Rt5na4t8DQa19uz1E4kdZwpk58i3F1PvwnjtLqsTh3vMEgHgrf1pUua91K2y4cCV",
  "key24": "DkooaLcqeFYn1kP2jMJ21fYHc1N1sUDUAmTBWAGBUd1FQa9fTa5kiYsLwBNopLP3ccig6kCYQqAm722QCjYDDgS",
  "key25": "3WQ7Fh284eKZeLcNmhpMHhMpdX83HiDNG3aNERpdw5VWhCAW2dw8hAW4TTztE8reaNKRevmW4iQphSGDqkhzax5h",
  "key26": "2EPmiz1WKum8FH5JivcJCNKpBBqGK83esc78Wqyy2BHkZuM5P3hTnAodQwCRVbFP5fVYoubdaFEX5Bp1rJXxEcG8",
  "key27": "2ddTCSEiQzd4A1R6fmD9q62mbcCUQYTznJa87e9GLn4DXoCst7D664MTJ475XLaqL3xEfyF3TRuKfH5dzthKDB7w",
  "key28": "2Livo3SGzib48RE51Gf4vAZYoAEMkD29nwxHmsnQaePkEKumrZQXYunMgDvXSdHLvGGBF7Ur4goYEhEmpU23kove",
  "key29": "5nxcXAFZ5bLz66P9dhUKZLzSpAmZvxYjyNYLu4R7pVbzngAUqfYTnnzCVv42pFWxCnyaq3dVKTHhHcjk2UmGjiX1",
  "key30": "Cn2S25M3nwyLS9mLyF9kted6QTu2EpGPnpWzNtEE4TUFnPjALGFD8ERsAVnwocjeCbaM1Su5etiZzszE9atJbcA",
  "key31": "4ZCDSdHskXkVrm9YkkTQtcc1FxntP2cPazRzpRMZ2LRQHauH1zdKcke4V4Y8ZMjU9ibC6ycn6m4gS89pj8BKmkgd",
  "key32": "5TSpS9kwbdDFXQ8yZau9Chyxba3p82GbNJTzVeTYMgcBjMCn4XVSuji6HZTEgccAms3iaE2Uhzb8tAgdQzYzYqjb",
  "key33": "36oei2iPQmrAqWaBvp4b7A1qQeS8xH67W4e5dq9SAoWko9cMxnfaZ9eXUubTVa8f4UBGECeTpB4eGy5on5kSncCL"
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
