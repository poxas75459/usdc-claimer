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
    "2XDUrDVWEiE3BC6sNDsjs3txbKX7ZnPimRVm6VhB6WMDAhFz8BTHvMg2mbAbpspnVXToqgh5KvY6aQ4WiuC148SS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXeQ4N22mhrUgmxAQbV9ck1AJ65aox2HuYMUV5qDFUe76av1CWskrKHUi4vNnNfqYm9q2TeJmpTcsoPW9iXmUHq",
  "key1": "5f1qmj1onpui5beqSH28qEH7pRuiq5THrUjfxxP6mNMKmv5cMPFG9Bh6otx787j8o9hxd259nrWxVkUS5L3JHWMf",
  "key2": "2LnmySdZHBhYHHqL3kXuNPaF1fVHLgWzk2eH3nCjtfwPrPPZDLa3FyXaVteEo4iCfAC6tu7E9QgLcwCqPJtezdi1",
  "key3": "2cGvd2FJK9V235kJc93ih86PvdDoSed4hzUiYduyHpVPapfsUHMso1E4DmPbKsemcPQboJdiX18z5WUHUJEsxoqa",
  "key4": "4SvHdhtTtvxPX5ZCQfARFZ32GEVzkvZK1pZiRRfLPNpTceppwQZhajSXETMvPJfb4PDbfM3FtRHJqt5hkpGHY15i",
  "key5": "23puntWSzcLLPrF3pvHpp21NvMKYyL7TxsuLW9BoSWxwwpEuH8K946m3ioWhEAYRQxDng211zSk8BCNMCPB3o4ot",
  "key6": "oB9LdCrK6AMf1yTLRegae7SP17y7WLHKwgDPnT7SLQNzbjngT7ZC43DJu89F8Dqr9wnXxXjqg1jwXRz15nsU37d",
  "key7": "3KvLpdw97eSmApPi8mTNxpWMjkCNVBUTUouK1e9BxWD6GVh6NrnFhsE88MCzN7KD4no4F43sgcB64DHmLU9JhXVs",
  "key8": "b34dHjKRQ1e2K3p6EqP6p3YjVkYiYP4HJ4KLTzf3GAaXmeMAGhjitYSva5dUwGdTTLsKtcFBuPxqugkpRd4z75K",
  "key9": "5HRcZmaKhDGBAP3TgHbifR35M1RSpXYQtyPmTh8s7oAiqrygXJaRg9KxRpFHgATMAi99M1udt62eUVJyc87T1TUQ",
  "key10": "5ft82To7QnGw8AvZrCJtic6FzYtarxPXM6xB4zWBXsWZEgrsMuLP14fwse4jbUfa29u35mYZBtRfkqU4nnjALArN",
  "key11": "3YZUzmjVdih6RoLkRL3CqQaEHzHs38XywdN3yVB7eLeLpPB4nm41a8wLLp7JspCz4AdJ6DSNFCc1PADayJKfcmrR",
  "key12": "425QB9Cdp5rSLj98YE9wv6ZGhb5FTCnm684rQ4sEfc4AKLf9g9Zr8uTCrBCV5vu4W36sJ7Vi1GnsbV1GQB7f8xWw",
  "key13": "2ThAD5wLedmMCpw9ujiJBes8AxgFRJMHpghTiFmA4znVBugiwAtp3JAVYoLVYcCmkfCcRnPw2AKuKJByKMfGXutL",
  "key14": "3yBGrnTHmgHoYQdswLE7oD3XXvb12UFUqzyw4UJbV1S3JnuYf7kTm1DEpnyjBHYTVVZdsDPEqfh8hTSbSgepw2bw",
  "key15": "3THHe1K81JDBGNwUdLF42LEthKzxRFHFm1Y1N2wAjSGpqDLvjrmFjRkXfgXpcKkYRuyp6q3KniZ5ncgVMAYJejU2",
  "key16": "KLcPjaqa8FzZfhq7E1zcd4XLB6G5oFQYKQw1PnCTHPdkCf156B7hR3TLqdjnfT4Kct5mH9DgeFWgr19bXfF4up7",
  "key17": "3gqw2NvTktDV2eZUqjBTC9sq1Mi5VR7ue4T3GwbcFjkwYKzMLwpgt2AP482sCxnN2C1xagpoyJ7LUwW9LtKYh34N",
  "key18": "4kEN5cqHCFikYvk9zc6g76sWcAG2qdR8YpmDCF2MAhjSyHKe3WE8n4P21eX7HwgpzbLVwHN74P6YvW72itdCYpVo",
  "key19": "4tup6hDnjnSijWvSb3CPMjCvSdABbYHgWCqRTchoY1UQjjT9fNmKhMa3isRuvqor5vQPP1J3zq51EMAMWThPvR8C",
  "key20": "6DuKhajJ9JKkNxy5hb8YmAMWMc2JCgeXXabW4m3VoqQP9G4YmzuiabqmL8HxGXDRXenQ9kYSakHrW8RkJpSavQ4",
  "key21": "5FLR4cm1UhPYU1QbJauLXhDYh5XEMR6a4RSxfDGaX8nk74Uh2JDmFEAF4NeN81HwZmsDiQMHvGqpwo2uTtGC4wJ",
  "key22": "4FzqWX7sNgpdcdFJmmuvNT4sFiDUQBWhBbtJHCwmShz3E15kxP36p5ttMKhMGvHa3hu91RCTA3u6tBgvMiXSmWM5",
  "key23": "65TMRMAEge1XxCkjJ7ET1FKvNr595DoS8Mc7rfcaYSSiEuacXHiUkMfweMcipAsJFPJNKuoULTjqy2hUdLBUjbpm",
  "key24": "4q7RHh1PTDH3wVAXxoYMfscCGynCmZb96JUb3BW1uawh2pjcqm1ZhKTWpVWZrRrosfvrVYASn6MMv1TWhrnVSQiv",
  "key25": "24dkbxHWS5iJjWZ86yDguv7co9F86u6p8ifqZsu8vWG9G9H5n5EPpwJkd6FFdnzLxzBs24c6FnsDrJiqgV7nikgb",
  "key26": "3Hd5uX9jzjeZSYqZRZ3txvpJpkyN16DqsmJTfcFcvmHYWJKeQP3R6ByYdVi984JXxvkH7KLe9NVVyfLiTXzaH1CT",
  "key27": "yn3WbQvx9nTYrB9xaPgt9dMp9x5kKotkYY57AVLHsCpXMjFXzYbiFgSyCxDPU8JKjEykqkJFs67zKBRt6QcSwJU",
  "key28": "XSm7z2AJVF4gcHbmRXbPeydpc3UBSRMDuSLRKnjx4XDfgYf7XVTy8qdmmqirRwWMdToSEc1GUeyCtjdA8CDBqwK",
  "key29": "2E7qzzCxMZJPhhraz5utzpmj5nj2Phh67oUDQJqPUbdAGxaRTmHq5KK34b1hdMbx8TtzfkDsb3eMxN3gYBCAnwsF",
  "key30": "4GBLRvbUsp937ByUyedT86aiRnsr7PHGdsLt31Dk7auWUy3DtViuT7kDxpKoybMgD3inbFH4oraKGSjctnufvkZX",
  "key31": "3Nfott5S1VG5yFKvDbCuVy14oQ4XrRatZohHxt1UkUDn9fKoCpvnQWkeBbrQHSyTf2u1CPsBgiowZWxB2UaN5n6p",
  "key32": "4fjpvXore1YhGFXTwERaWc5wrnwBGH4dqFCVeg9pgHtwSuyveZiBxeZCcY159Xvvd7mfbs74b4pPwRY9mhFoaFBF",
  "key33": "4iF5mjiXH6ZPURsV7UvvNDpSD1MKTbwRhjdyY9gCiWXcnTseGLHFimip4H9fJP7CcG3qRU4ARVosCrFBR4SmKqSj",
  "key34": "32qMi8XqBCvHPFv1Lfo77EfPTcp8QRzRUhvgG7JgcMfkf4GLw9hU9oKKhXK3wZj1McYe5S2c9BMDa6824D2BMFfY",
  "key35": "5n17jVbRtDMPkbEJbyiyYrtTLvBgyXcUk1dtCknXn7hcXutiKkE44aLehf7gWJjau1aVhQbH69s4Poq3JT68anXi",
  "key36": "5cX4koq8DPszgzegy7u6hj5iTh9P3a8cSyfecbyzi9tFdqAfWT4ihXEcAhst3qMVMBEshy8SPyykKK2mTWSGppqK",
  "key37": "2jp2ed1j5hbk7H4q1dJyRj3CjyXQV1NnpwE989m29mLXc4NSxDiVD9Y4aZ8yuhwrHz95mXVvAWPrrKaP54qwKp7X",
  "key38": "2Qr9G4bdkdLAT5nQ3Afk9T8hhnPWzbSi8hECb428b7zizoKH1UhsidL6TpQYonPkgbua9ArnrejqScFs4QoQJf1z",
  "key39": "5p26jQFDvyvCSG5XGCg9LK7w7aPADrWpnoRrkZRHG4TXdUuYNCbCRKyaFWHQq4XKp2jLDj451pW7dL7GHrSHhMx8",
  "key40": "45ABXt4CWMMuDjpiYZLPEfckDjA5pEqFi7CuKJP1voYGFBnjqgN3BCxR3RHisoYV8wMUrXN8F8A8SZXAGNPiiysJ"
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
