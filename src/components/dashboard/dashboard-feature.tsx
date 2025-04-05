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
    "tktHnBLe916jZ1cd2GzE8tTnLoHGUsxqmWUfCpH4SfnNe9eVubW1GMv2GMqvp3cn8GyPxFgecsvJb8hrqr4BShc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wMXaVc5h9ZpvT4ErNupx2rrEKjVCWEvYxbZir92rH4SysDKaUv9uoxSL5uCAwtri9BD49vaie1TRPkqWYaCD6q2",
  "key1": "4FJGHeq3x2CnaJS887B24UZhigd1EvFXty7MLa5tvCdEfeZ7R8BExRwj4WUecm6Fy9WAiVAgEiMDbPyzYZmU9gNQ",
  "key2": "5QjBQ98b1BW7JpQ6289abQtXCqD7DdnP2KstoFSwpdugD89WzL3GFvpf15MqBLH75sKXVbEVGtBvRNp9YiQgrWXP",
  "key3": "396ZhDEHeLHoTq5h7ePHQ78YyaddBEZwtreQTUvHCFkfM1GYWN7cHjHcTxCxLGCdgveS6uQkRLquyFAbzAHEjgcw",
  "key4": "5HENzpeyec5gXnEeckbtyfHnYvnM3aN1UhcbGmNTy4RASseBgQ3qCLvm4TgzJqiYT3BxPD89A9pEvQDe2AHfgbZW",
  "key5": "2XptxwRxHp2YCofXWGeW7WDbWzXHKKtLzuQuXGYPtrge3aCs6k7dUSZZ9FhzQXGX2LHreG4meebEdRwc64sQPLX7",
  "key6": "3iQxxNUW2P8ag1inBcAWY2oUsU7FRXJkNacDG9sZ3zfGjA3usGptZsQz9YRNqz24ju7USyb69v5RSMn4TSSBkz1k",
  "key7": "2k5V9WKxZ3zz1198mKYgoRhsKJyqV6yonJR59h1ka57L6zLWNjef6UFafNuVXaWJYhwbK64BZc8H74UyhmT9CAJq",
  "key8": "2PogPdG9Xf5BdvhyatMYrUqzEmB4RoXWhYYhdXd5HBjfeTiwFpLEASMFAcaHsWYGE78o8Z6H51KkryosHNXWjW4e",
  "key9": "Qcy2hXP3iLj2Pz23o12Ltc5V592sKGGdAvBsekPz6LYo18NKHav58qHAtfs56gCRzeC4Kzd6fsp1bHe6S6uHdcj",
  "key10": "5tGfaTTsYc3RA9GgXbqTHo2F1PaKe5irGVMVo1y7VBoqTC5oB89f6cUEqXEWxLC8TbrWWERvjHzhagKHis5tGARB",
  "key11": "3EMTqCjjUXthBcdZrRwT8T13Li8XzqYS3rKBTexuidzjSjTpKDwbr6bNVKvMGFcooiHy9ceN1t9AhRzXCMMe6cvM",
  "key12": "5wf7CGvTEC6aaDftWEPFB96XLsbEpLpCPMkCfbuhh2UBZ4rSVomyqi8h7JcDfbEZHDwMxmVzrAfobdK1YNHjhigj",
  "key13": "4mUxAQTYKEALWNSrWXeRmvrn2K7CAaufhi31cCWSa4QYsJ2uvJWxfYYfwwuRdNjYHLokVCerRFaKXDJ7SRVWG15p",
  "key14": "4hqJycnj3iLbygZw2RRknr2evZJz7vwyrCG6WFdjeoZYQjy8PNPrivkYfUzMwsY764uYzfccAkZCm5zgXRGDmdBy",
  "key15": "3AbahQrSL9hkcCSyFJckxFQdZXarpi7gbhF1LM3b8XxgJaBVxWnwixXKpMuYE3Eg3mGwKh7oh5QaxHPK87yP16wC",
  "key16": "HHNs8QVNLkmE263kfhoSrYL8rR7fcY4DQNK3ja6pUPAnfXrgCZW2LX1Vqym9EsX5rg1ERHKUx8sppk6EixCmbS8",
  "key17": "jP5ugRdFdMuY1uhsWD2JPWrAn99YoTUJWDZkz9rp8r8kDuXPnCgF1bD5g2LpTXnN4t3EDzukjhxDSmw62KPADMM",
  "key18": "385GCaWVbXZUK9M7rwmBDMBKa3UtXpC8XM7WWnuPWPr36VBPDWxJCSkpvFmShh1Udn71YQCiqSuHLEA4iJDfBKQU",
  "key19": "2WG1KUKVdE6n4fbdFWW5AXquHPAUL3cCkLVLzdxjSXgHLzRFo2ZH2435UoJLCQNi3fhEPMd6yZKnMhDJZergsnf8",
  "key20": "GPzhLLFhriy239cjf77VQ4dQmmo6orHyP6UQjeCDDCzkxRzDxTmhsLCzpsNLwPQADNps7Pop4a6covwPpqrN9cR",
  "key21": "2kLYieaiSZt8vtVYkWcU9AyLjQWqfkgtAbJc5Ewf2mGyKFy46Hs3R9uLxP1qheBGJKjbWQyCTqxSN4Upe2ginY5H",
  "key22": "2kFVyGGNd55FgxwzsdzhWMFLmY3CYZbhCocmNBrxKT7384X9sJDc5bKHiPn5YQpkPQPw5VtVW4LHURCjSmiFtVyc",
  "key23": "3BSJ6JP2ujJ7vHBWxVCod6Hssn2Zo3rVRo1hdmi8QWBnezgmr3B2K2WLNQWAboxMLBFfBi79x41UTeVBxA8inyiM",
  "key24": "SSgce5FEAwp9kyjXcMPe1U8v9qpsVa4sNLmLzUBDHmtMC3V44c8V4HxfjvYTCr1SNtPmcpTt9viaHn34ZBAVa3X",
  "key25": "WLvwmSxRM6hAa5byzo9g8irQ7FsnFTY4sv6P9RWxBivLzsELrtTWikCr9rfoakX7eGvARn3h4vxYMeyTENwStDe",
  "key26": "9Jo572z11vWKaUhD4teamYzDVYSVDrJAZiF79itEmbx9KWfimempfbjWxWjBE4paScsEaqD8rxDViwTdU36JY7c",
  "key27": "3v9TeEDufTfXvS7x7XgwJSMSuvAADM3TKdLzyEpdKspam45zw7EC1Q1GpDSTHWB2BWpLzhPR636UHQJgbdjP6yyn",
  "key28": "4bMWsiB5WgDEfKPwK3xmTQTmDnmCKHQZWFtoBR6imQ7hcrMncW6DkaM81JEpDAvQuUFbPUavxGeuVNFK3WFgvA3w",
  "key29": "3J2PoHQTXGhN1KemViSaNfYqemmwF3HAX93hqS4cch8Jkhek4f2G52hA8KtB4rthvHbKcPLGS1MuoRkZAo59RMW5"
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
