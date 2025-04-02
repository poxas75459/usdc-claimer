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
    "8zBzJhzvJCL2j8bDbA2MwZZAo8vHECibzqmeZ2fmhrBXKnsYqCS3QZNnAeNtQvB4f3dw7aLPrWsMLUUqbzDq4bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MKdQ1WuAXo3cG5WtmJ93sD2az4TNHeqWoKeN1fFR7ZnCx7PL2oyd6iscqyLyWkS6jnRDpwD6pEstMyXuSPj4Ub7",
  "key1": "MgNDEerTjd6UySooKKNEBuyiXdHD823pDGawKDaTkbnyMvE3Ew9i7oNEcf2B1zwE8pTNDqD11P52FzeeXipfzsA",
  "key2": "499RrhyGnawBtTPAcw8PmNyUVGqauu6AMuWZzhwyVRS83yLpPyUVZ5HfwBiwvs8tkC6wANNefrJHbtwAZTJMwSFs",
  "key3": "32iZtA64pfzKeYWp9RpRvrFXRGtUvNFMm2mKj4c3JQyPYai63L9mJHZEQVxnXUuNzzZkcGpQNzNbDLN5YZpkYqQG",
  "key4": "2qKGAK3tDcfn9mJWnxj6bn4p552GbLfV34bVEDf1imSZFRW98a3Hv68CWJYCWoukHmktWeKGR8zcoPJdwjYoobXD",
  "key5": "2ai2onhDc2kH3H8VrpM1TiJHUUQXpdqae6AkrDchvVgSkgMEHZ6iLSfiPR2QXrDbWEGGeYkvjjXoLpXDCXvbSjP6",
  "key6": "2pCtfDzQaHq5CGMoYJRq1Qv78K5td8FPc15fSRv7m7PgigFuR3mr5fdyBtEjSepnhNzm7Zpc7Hvow25fcBL9JVGA",
  "key7": "5CJ7kC7QnexmxWqoAt3gJdrwvLSKMeMGXa74wmANQy9rjDhvt2NQ5Vg6ZcP1gjhPodgHK3YFoC6p1g1Zf4gD7jne",
  "key8": "4g6SY1Lz2fecRWvicwC5hu3iP581rTAAAZJrXVbaCNUBJtzEQny81ot4TGzsn2zPE5CKaXKewbdQAYT5S5ffSMs6",
  "key9": "2oCNnRiPKePihZbUEud6SwM1pwEa1vDRxUHAvYu3tEMhS2oVMfN7WpNN8jx1vJV466a815311Q9BxY2gJ6wbTW6C",
  "key10": "3LFEVLV9fexqudWcAadSJv1VZ23XQL2Az64k5xDXaz82ejyQraW6AdnyYhWJxRMvyj1qdfb6JRsS8RX2AyAg6qQD",
  "key11": "2ZFErAfrQt4BYBW1nbaxvE3drTmPoEWQCTeZRXnrqUs5yKpWZcKRv5JxFp8Myd76RG6mUkroXikp9BDpYhxaVYTr",
  "key12": "8fMF3bYbXvW5CRPZVWj9c6c12QT5JqfBsANnAXJt32SpvQCsbU7VaCQQLKunx2ivt66AsEsBQApCnD3WroSXFuW",
  "key13": "BAHpzEJ8QujEptqepR8rc9JmtwEhMfTrVvwWdHKSRur7suXSZAwiBpjb3H7CYaD1ZYs78Jip7G6ourDRyxpE2mn",
  "key14": "5nM15xoHuw64F9dsrTaptswk82wkGq5pjnuKygUwTi3QwPmZuQsfVt82uWxzTywjWbYUDuhiFiefJseBuatXsksz",
  "key15": "S61ooZtHSHmt4yQzdEEj3ibSMMJjT6di9MoNUNyo8SdFUGP7bWSPdaGkXkCiR8xQQmTYeELDJ9WrkPsjVtEpLGf",
  "key16": "W6L9zDZKhUexWBjDSr7XXcNFGUM9uDUXCub7tTWvD2U7B6o7MBb26sYCxpWnmqDEHyLYPKuL7yJRKEDmwH4afS2",
  "key17": "2yaJoxr8ziYwnwP9JpBzHkYc5eD783WR4TMcyj3MwS4eqdcacUtF9XAZD92aUDEWY3zQHAoomJvzKvC7M1qzTP9F",
  "key18": "m98bukrMe2VjNDSVJYmu6bMqitPbMND8J3ByCr59gYPuA28CKDPeWeY8YofThjimEsT42RZv9MX9qAmBuSEBwe4",
  "key19": "2RxVb6j6iATVcgNnBsHMDDdb5zB7AWWevPE5hirWRvQZB72K7LiEbCouyACuAdXXdPXq82Hv1UqK7XM7wP8jdTCo",
  "key20": "2dbJPsgaatPvTWFtiW9oofzcdNWRMopFT3eUZVHxGSebqcBBftZPpBigyaGFVZqrXEqY3yZkMP4ejctpUJQtqJ82",
  "key21": "4u75AQLYXNFSsEskQZVu5heoAC1RK25PrECK5q1RaWQBJQjsfeaGkPtVBAyyCyHTrTRNBgHG9uZh5bQfi2WLGc9w",
  "key22": "3AHLweY2NzxnhrMyDDAYWjGVb9qFerrQ9JvwWk9LoFxAG7zdZFjnPiPbT9nk5BkqqQHCeGemytPVYXPaeLgBCXa5",
  "key23": "5k5D1iqucBuSruYGJ42fvk31eaPMpo5ByjwbtftLUaAKktFVaURAmdS3nwG5opU4mW2wQdZo6RpYU2g9UDT2qvtj",
  "key24": "2sPhtZPVKpBrngXc23yxWxh4ykptxK6kAjmed9e1JnSuRuZhjRKJTPGFJACnLCbTbMjm25LtxEkHsCbQkBUve9vw",
  "key25": "3So8KthXfB2FhoKi6gxKnXZ4QpPXUEPM5t85x5qi58ExJAAhaGCXwKX1eaGPMTfVhr4jTy4j4WQtrGBCa7Vesrs1",
  "key26": "2ojmLaK8oRPZDwA2CUmkCMk9QRspdDoijRYrCEsVbECezes2161tcaUtfXSumwojjWNMrP3AVMwpKiMfCB2Hu2Db",
  "key27": "3R3jW6qBGwoABzSFc7NxEE8xjVqfvj8YQeciHWVXHcWaStv7BAHxBawAi4qhg8PGcZLtbiggv1TomvgCn7vyVmu2",
  "key28": "4zU5dgDkfR8goRPAQE5WbHdsDsJa6o4pYjCu4bkGumNexsxyRE1W1fhGSsgJrUaDbpMZqeMhEvB1psnNnQMfQdM7",
  "key29": "34Afhy6vVdT4qitusSmcdxxYW9YZro47XT31eE2E1C7hAD3oFSFsCvhmaa929A1ECGezEHU5PaoWtF488MthxcFh",
  "key30": "4kNPDfmSaspwbSG5N5b3vuHPWXbJbHpsaGNhKvsyKdaXuaPrZEyBqBi3gDW23Vm75ucwBNZKPrqB4xdr223mWbZz",
  "key31": "WYbw4YrpQBuJibhKzRL9Q6ekFg747ep3Xt5wjhsEaQoM2KaSodLhFPohPu5o92orJNRHtfPQyes8UubKrB7ajwu",
  "key32": "4SFAkQGWCCNKe9t2pXXqJ6WBdkt7NYrNgruBiqBA5BtCVJzfAz9GjhvQ6n8g2G8hhNBeXdy7o3CzgExXfkedTX6t",
  "key33": "66UYLmt8aMsgXg6kCDcq83tTUbPNJuYNAXeMAE12uLMopZSxm2m4uGfwpUR2uZFbpedxtvtDwd9HToK9G7vhQwug",
  "key34": "4EDryj8yNLQujr3C8UyzGVinXGbmwxPsKhBhErzSPQLwtjfwg2GtVFYdBhXARdUtJRXQKVC5RF64ALK1kdwmyYFm",
  "key35": "598gUmHyxfCwPC74Wpdm4MUEMBf1UPVEbUhH9Y5HMT7TPRvxA1Abmw3k1uuwKwYqW9XQSp3QzxH8gh8PcptPHRxp",
  "key36": "66fvqQHaaPBPV8knqRVhL92dEJV4vz51NpcHnvrLcpNVvukLvz3a9RnmQ4f27kkBG1CsrPMUcFqoWMnPLa57g55r",
  "key37": "3a551pynYZM7vR5QqkTj1A4RiKhfox8a3rSYj7uGxeM8hLq6YLKKVNNFPsjNVDtzuHPfgsiTWRKJP1fQtxCekCi5"
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
