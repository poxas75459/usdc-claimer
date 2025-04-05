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
    "eCaV2ChRvfuVUgCVMTzD7D7n8wL8vzdN8USmT2MTL4qUD8acr2EsBBsiqFJ9YmdpdefV7VWjJnQnhu6VTuewxhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKVLjS2iPESx2vZx7wNP6jprtGvumyAZqYizd5wQf8xPf2jkvEqdcdaxzVbhFF2rR941R1AqGayAKRZiBYa3ATt",
  "key1": "5C9WHpGkCqTLk6UkxZcve2KHj6RymsCGNvzKSbwudSazYwjGXwYd4xtiHNNFsuQwMUfDeDx89MfqGjPjHy5cttSV",
  "key2": "3bnvu4BCKvHE5Ro85pyuBLV9EKzqc7iR7ZgRxMKpDSxBhLziZnBoVQqUtWA7Fh2axb8nVsP61A2oniQZtVWy3Ymq",
  "key3": "pg3DJKYj6QJepHwVA92y2e1sYT7yGdKNZTuZiBfTTK1RM46mw2zT7XJnYHpwE4vPA4B81fvAAuPeRffpdrasnu5",
  "key4": "kZsdCfBNatcMxiFf14M4EfG8fQoHcvce3zAwrwRkCwKVThYP9VQaGnhVqWs4mBMHqSx9p8V57gVT5ckpPmY9izh",
  "key5": "zQnmggKLacg4nzHNGxfmX8rVJACaMD3ugTXYbxxrk2kBtGqffjXkuFBZuuRgCpjY1k9xig129dUSMW1h5HgeYnq",
  "key6": "45pBTyN2MYnpLjdWnKi1JGBMV7PrgJX2XQRvw7iiSBKDN8TzyTJM6YpLyeA4aX8R5rDScncidt7PDayiKHBEtcdc",
  "key7": "5EdWCWpGHm1f5huNKuBiw5dZeUgP3L7xD9wDp4q78XonGyxugh8DUJiNTttTocN5zH2ninSsnBVQozoEsHRYMrTw",
  "key8": "2pBykRZc9u1tjwpQcFaV3cWF2SVBr1UTm32Yf2BRg6KCNFbxL8fSo2ySmGbEZREFVHJ9mVy3Bt8fE6UBXTVsEPQF",
  "key9": "2R8rnf8dS1FNkisyhTdbF3eEWexB85cKv1qo8DCXcVgiCZ723LeQnxwMP2CzfYJrELBGQL3FcNKdRhK2hGupLWdY",
  "key10": "4fGK6BoLX6x5gFxK3ShfDxooc2unARt21sEU2SxYmSFnoKQuWuG9xj5qctYSvaun432sAex5eHHfziCbHRGshX9k",
  "key11": "4XAyd7r3rnmz7HB22hkZWBPVDGEKMciLA5j9LJH8iZvfpXC9n55fwdZBZTycySwbbAY3hiUCyheNCc66M8QkDTh3",
  "key12": "29qjw1yDu38XqtfpfLxYgkH3o3HA2ouK4NYWrynXrmnzksjPYB5ZWKT7DA2R5Fi6fNjb2b9n8HaPx5Yie7xESGvp",
  "key13": "4RKobyQ7BTjiRjHhFYf3v4QnCYkEsLTouxXb2hybFPYxfE8DHjDUzvgQ5NApAi8k1P73xv2KvEf4T9basEP2Do1s",
  "key14": "4cEKok5vTTmEKdMtj6masnTCHLAQaTcjcydNHYAtgwyHwDEbUyMtcYX6K9ftcNsN9JBCR91BV2upoUYKXbjAPSup",
  "key15": "3TSbmcpnxPq4jof5dvdaX8ENWMfM1At6JvAQqrxAULbJnWNzuuG6XSQaT2efcbzSXJqCgbr7k55vqAdmT5WddZ8K",
  "key16": "3i58vp2QzuUdVC5gKJRG3zy52ztjD6z8j4jgx3tLNogawPBhZDYV8scLDVsr7Dy241sNWsUjr1tddv9ViaWBAXtk",
  "key17": "5yUyi3QyGF8pREaT7c3jc6AHzyAdievPGm73aa8yv2BHcnTAYMX9cndzhRp5N5nXQCB4WVK6UvpAkn2k81VGkFfp",
  "key18": "qcgmZwFZ2wrnncfEgwRma9C2oh6NtSYphtmPkVXNEoKChVMGXiDShr6XvT6HrpDyZPNbUntpQ9c94JFNEa9W4LK",
  "key19": "4Fxryq7EPLYps6dW8xwazdyVBSsJsRJaQoUxeFKuEtcbjLh4msRMz5QVe7avPmLi7RZChzKweG9HsodUpdEzDw67",
  "key20": "Tu51WJqyTBSAtxoQ2upkJLNG3M5AVa2mDgt8TvpXLuUogQKa7K8opG5RQ3r48kavvvvEVMkTTpvRSKvW9kAncGo",
  "key21": "42VqHDU3UzuSEPvygNhj3WWPgGrKLsUqdtXsUKdpC8mWNRd4d1dcjBfJisKN65mJPBTJPgFMJ6UynAM78epoCFBs",
  "key22": "3SUtSA4dnVY2mTsSPsX2XyqrGPTvSQoBHXw2poxE8fYUSb2Rrd5oKg5hkfof4D7RB7JjXbzTAApwYLc3GadRHh56",
  "key23": "2KZAsYdTrP7LxYcf1PKRUWe2M8swhDBNhaxWCdi79V8hQJSxvy71Btfz3zJEeitfSxPxSJpzke1Sj1JzipRukW1U",
  "key24": "5K9DpQHzXWB7fSvVBRtof8Bm9NTrh3gkMJYWSx6uyD1KeTqWePVHmBr7JBbJUZ1SviQXXRDK78oy44uvfK9jJUhh",
  "key25": "2S7hd3LqUQhrDSxtDzr9apyzP9YKHmvWZeBmGX1HJsBZsrAbHSeEXzdwTw8G4TABcEmwbLZPfzpBZwtyx8F8e8xU",
  "key26": "hZLnXuKjbxZnV9E8HZKikRqkLo181ESesmUCVKtxGu69Aft493X1zfvYnrRtcpWrp1mWg5v1SKWe5NJWWgMCtzv",
  "key27": "5uX1tgQucY9YQfFR1EKgjpom3YGtSUQGZxRnFMsYC8Cqsf3jBY2kENcG3PvX59MyqVsq2ipsRU8SvVMbPnG8VAJz",
  "key28": "3SfeaeUVTQxhPmotqANVhPKLC2Tf9qCewM9Z3hmKKY7C3dVh2j2TWcBQpF7DnBvxTQNVPDTBeHCvKy2XBPQtq1ib",
  "key29": "3HC1HwP7vZFaW4cuNPraREGctY2nzXFtaQSjnxmdTmoTvEQPNm5cpJ4v5R4LTVerBC5tdrHdm9mkAZkQaABTrojD",
  "key30": "5wmemUMiTpvwj3xZKy5o1z4P3LHKsg1oQkSbfPRqtUMe9UmKE4uWc97RtzjBQBNMr3JqKw1pTgRu19At71wvZTjo",
  "key31": "xiWrZ5B4y99ZwYomRMKy6S1nUBgaRXB1W9wNHjHxSNVYJiCFhfchH2asf2HzYs5giD2hw3zSNGGREcRke6AohC1",
  "key32": "2miPcRpZZi7wmWRiM5DFogQBrZwa6yetZXWdYATwdSTxpwAWSAojikV5hVqXEQG5qMJJCa8xXr4gy2iVQM4H3tJc",
  "key33": "2dFf9hvk81mmefMEWf9chk98mTRn4rmtazYrtWWwz3nqmwZvHWXK9jgcsa6wQoUhVYwx6mzCXrvWYFCfgAEqW8x3",
  "key34": "2TSEgpfLJQoYzJ7Mke4mWWPwxjkCouxKfJAvS7Qt4TxibpLpUPWcVyhafUKhL9pXcUK42jM55UMtmRbWPSWhSbye"
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
