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
    "5dtC66Ut1MDyL8F7UuDsHCCp8VGkieE2bXCzN5i7sB3G5yY3mR3Abq7Tdx1mfebrbFBAwY6tnZoTATea3sSNFptG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41v5gE9LCbU3Zqw5Pd3gkg2EPH24M2Gnzr9YVJctMB4d4fy8s8pdEXGscdsejobekhUfWBsxbKY4dujinRrwZebh",
  "key1": "5AjeaMNy8CXsnhiaUXoE4UmwXq15FsiA34DgYQGd35GMtYWFg9Kh7sEV8QkbyszpaNYfXtg2ranYv9RrrCqtohLk",
  "key2": "4PxWB2a7egu98WK6gvHCXdWxDto6zwroXGv8krmeC7iHcFxVV6b8YYEwu375i17DQTCbC4U9ByoJGsyjwjyT8wPk",
  "key3": "2BMapf4tpChWjWVC1cZX5FE6sumE2AMRChHw4Ahbb5Bv4Q4hMTUMwGRXnDuajuUsMsqRPgxXTBYceVZSN7EM2LQf",
  "key4": "3fSSL4ChfjmjEBmrQjxU5et5yLFrdNT6XtpsygSuWU9biiJZbT4tVbsgwcc4SVyHYohNoeyWQLsRiMtWrb8cviTG",
  "key5": "3WxXxBhPGxp8Wny8NtQ4mwjkQuzjqCSEUAPwq83jqBPC3HYw223kcncfRMifR85FezNWSh74Ngzk5aG7jVTSpx2d",
  "key6": "5VTnn5EUEmDpjEnrtndxQKA8ybbfcjZTc4s7WXKdaDJpQDb5BxT1YtoZhjuRqY2PGG4pGCpSmtuEa5bbucnokzbj",
  "key7": "57nRXYxhor9kLhCw2Z2DMYdAjSkeajNsrqruaPJFraFannMtu7Lp9ZfhBo5LoB5N2aWd6nwRkKrCZNkYigKkPdhj",
  "key8": "2H7TqTKDvBZ2inW9RePo867144Fpj7CGspaUsy1DkPQaB5t4yKteHByqjqDH6KEfcpbRKnRwBd6sxeoKJz76GaZR",
  "key9": "5o2EmrA2j8LECh3GXSz1jtoeLoHobL1Z5UQgaxaAg1iBj3MgFFyKWL28Sq1qPw3iJjyg76Qod18Yx5hmUGbawf5u",
  "key10": "ceEAA4e5sS88ovw28YY8V8jLm2y8Zzb1HRJnLb9hcB9byAwFJHvns8CAdPPZL3B8b2F8km6yAgzjgPvKVTREvFx",
  "key11": "5RUYqy8iuMs2KDS2e9exYuoozKPQ8UFsqpraiSfdVNxhMvEqpMqJ3SDPPSEAPUvGcEzpLDDwPR8UcXFZA6rPZW2m",
  "key12": "2kYaqsDJ9c43zaJeGcVb6sVnQcBg7AoF7Cfdf5FKxY5uxEW4MG3co49kzHGi5pfbgUzpoBXSe4o8DhLCk6cL26mp",
  "key13": "4BZ68eYfoTrkSxRutJxG6SkVyG1xjEbZfuwppMFUWWBjA3dNqj7eXbFwk5S9Dr3ohY7CXepMU5Zt8gFo9bgSRsAk",
  "key14": "5BgtK2puEUfDd6djk6gvg73YHTLMTLru9Ls7FXcVG7wuXBz4pWKaYBV3NaVonkQgxkEk385R6q3TqNDoqcH5qeVX",
  "key15": "21hpaCovWrd1mSECocK7de9uCzPr4uEH4AZPTVmdUfZHpxAeYgDxBS5YAKND4ZLiXnZUJRi9sDy2D7RL71TNnmxm",
  "key16": "2HnsVaaqXXbw6dSaUSADKWQ4hh7ZchG6rjxkNrjJf9HRMvo3KNoYNRnWnMbMJ8vX2wfnKKjMZyrA9PT3oCkZE9Hq",
  "key17": "22xv1p22TsaqkJ3i1WVek6q6XLEcn2ckjCBUiwauKS2P7Mr4sqnxziAvPKjjGSikPZpyQQbtyqdTzTJ7m5LbBQZd",
  "key18": "RX9gh43rR12auutH8fufomA7gTgQfNxKcfZhUH97UZx9jtijf7npfocMsYWQ3cJRk28g12mWZoMeN9Rz3pBHjVE",
  "key19": "2SezhvbhZaFGqhCydzXiZ9VwfCeeem6KXjce9MYc1DLkgu1Kzmd271WCQeaYKfgwN4LBXXZ1Jh1bqf8uw5EvKNFu",
  "key20": "2DPCKkBTFgPrYdt2gGhPgZkSz9Eg7nw3kGPCF9mWsE1goE8VD7Muc787RVLLkbFDDWSAxN3fQJT4Jwxp71GocE8Q",
  "key21": "2psW8pHV5EkbE7FcbNdAw8aQ2CPkbLU2MQ4FqMucgmac3wFc3JApVEPtpwq8yfBorFZ2bsR7av6aZC1iyGYatAK9",
  "key22": "35bciJyDRaYPBKwFYbFtd9i97aNR6g7hRdnCTSLYawB3MLCtbZtyLc5PuESPp8UNKTw1PoD6dsHTvJq1v6Fw77dJ",
  "key23": "2pvEgwB8if8HgXvw7hDWi9ix8P3hiCkvr3F5QJM7NhjDset1MzwHqrRrp2etMwBzhwndkV5q3n5pL63yVsZzkjR6",
  "key24": "5bXYzqAo6CtFDCaQ22Tz6rZmpx47k9L39hqoPcbcp4cvd1NesQabfM4B6vXtU1JRLXVAewU2tijMPS9DNZGhc2Bh",
  "key25": "2kqsbzgPAbafDks2DYNnNRaWhvWQCzWXcUFbP5nibDF59UqoyYBAejR1MtZ14fs4yxViERqZC17pT8QQ5UPTYk7B",
  "key26": "5eqi7Ks6PhzVj1F4renBsHy3T1rFMUUtc6bc9C3cG1ZRH2Dm6LaCi9Ab7dm8po8uu7Bw6TZvuUaQdraT722WiMyR",
  "key27": "4DhVi2wW31oywoY5G189bK8NHgiPSe8HyeJfZEVtWZy6gafFKqWon9vdyLRDgCp1eyZcBpkzGkAjiorrboYALSZK",
  "key28": "6v3bg7uMbhGKh663V18o1rUzFVm2kGy1wtFZETifnb9H5BsV6jxBvRtHgXie7SHaNHAZGmXAQ9L4AfqtPzsp2nz",
  "key29": "36ijLSavacmaaxCeAUeYddgbvostkGDszVX367XJWNksSBc2kuo2PJ2Zz7fRiN5Q1api1EaZXZJZPRf5kyv3Ym8d",
  "key30": "2QaqyaT8aj1ix1SvfVAvutyQFMKMTRFiGJwKJkPk2aYvzs8XrRFchzS6EWhoHkmVfE3YdSVGhfooLL5tHEP912V",
  "key31": "3sGFosFFF2hozgZs8ep7QivPSJYCZR8Q1kCUBYLXUU19upPiiZgmfKmancXqjnzwjV7uifsPswKRMCqd5peUpe3i",
  "key32": "zyvHwaLvps32D33Fy9PnQKvDg9i4xV5NZ7ESEfHBjVj6QAx4zfJ59EBpHwUz7y1TCtvLADAaVYUZi1UDHFPXLDP",
  "key33": "27SftSKzgda2jh42tDJNWiAjPmj3e51qfMiSw56NB7KY4LELS9xLxrxyQTgEwqSbokKzARxxzazByTL4hCgWS5Dc",
  "key34": "5eaysHP8YtyreL8dHJHasLHzLK5kRQpKq1Jo4zQVbgL1Ac8FPX1mZA1SvZmWHKxaSawtPBY5RoVbRWjTH1GLvnxw",
  "key35": "orHyTwGmpgzMqhokDigQ3CfFsMQgy3rsfzSTLmQr5ivWdhdQmxRYg57GDrwgiUseMUVXCGhFV8WCUV7wUW3mEV5",
  "key36": "5yKXiTjrJaCsLAe4pkJTnxrkNKtw7wXhzEv99p9HysGc74iZGvDfrbNcdcctgDWSCRxfG5c2YyzwF1P2qAcnRKuY",
  "key37": "NcsUadLwbukKL43K2Y7UEPRzGvn2TubWoQ1oRG6xLsWHCzxq1LZQzHbyv9wP9HpmTFgfks81UyNCFgzRUhM3urS",
  "key38": "2xRV19xjdvR7WYnMokVRqaA23HNHynnWM2ydV9wWHucRt8My54EKjDdj2qUJC3tYeBFfLDuzqQNTATkJx7qMxAKf",
  "key39": "ms58Lrqgs3z2MMnTzfKT5gJPRgHgC7TY2YPxEYGxCLuKwquu8hM4L4RQANig8UCfz1Nx2788noh5WeSjuDwZgtR",
  "key40": "bCqdHBAoJbdDGBiT9isYwRWZTUJsXA3d2FtVh5NyF247PrrcVRLTiJkJWv6qHnxsytwdzTwneBPyL9D5TccyPCy",
  "key41": "6364UxHKnxCDWuQuthJkKrGHb6bsYTHEH1HuQzq51zf8ycvRQ2jAKwzveMpB2maKndss4v7CEMuVHjRQyryFdTYQ",
  "key42": "4QU1J1WZQC6nMyF6tPvzdVHf3uteqDiopv4JhAmSpSU2j8KaNR4tvCnX96Jmaxd5rgg8pjkhvuS57J7yLzEYGSSw",
  "key43": "2xk5eo5cPir4yaxLjEoWrxUkDHHxKTxKNk2hT79eERxgd5uWfVkwj3pbQZcrYRKj5WwzSATH7iq48nzNScyFUqHC",
  "key44": "YJDY5YoJaG5BcZoPzR4Gntj193hAfJkw8iWzcS88NtkstEEWyE8nt25UeZ1bdtMTGUKEPRVGkgMrWw75yHd8hRA",
  "key45": "5GKtcaje5BoeFo5GuWkZLc1u66AMfi2AtPejuS5E9MZppBYSXBUwXhY9W6m5PLgXcTdYX6LyF8RKRSChcuVTob3R",
  "key46": "hTgpbGZuvgdP5suwJF9w1YFFhtDKPUUfuNBSWbPap8Gr4798FPSnNH9wSomaxgWLeG6dirnHwBxhE93VT3bA83N",
  "key47": "8Z8kLrjLt9mfmrBRrC4eFmkNVrsnRTGGmFu9Xr8nuxipGB3zffwRF1u5VXT2kJFaCA8kNG1n76oEwzZtzKTNyVN"
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
