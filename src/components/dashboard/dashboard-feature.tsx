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
    "2h79eyV8gUpKx6CQeHFeMJn8QWmr38qFwGRQLzkxXoQ95ZAzrtW4aHDdkHV2M3GyyuRSDjdRHFgJFe2eWaUPVAaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEKsf27mw6g8ftFrsdmqZZLfBahDtMGvtRPy5gdNs7tWH6sRVzHAuQd25RjRkM9L1uP9j1BHxQhidjuG512xgxq",
  "key1": "5zdPkfr6BPNAAkF3ig4hqyDAFYkcJa8VhCpJhmz5p3jgYHe3CAAZZCib6AroZoXL8DoFwKeiQ3JRQLqhjj3Q5Za9",
  "key2": "57MjChy9CY8i11Bmb9JWJUD9XwoGuVA6TgBVpGMAkJG38PZRnRSXhzs8DY4kofAHdvA9jo1x1jrtoKacoT4K54KU",
  "key3": "5qtpWR7z4trNvsNp6xDruXtWxBESwppyBV138yGz9Vm6JyrkE97HLjm9BMJM2uxe6T2V5sBphN1jCXHa8MnT5uLC",
  "key4": "E5S9uZzC9kSTkbcvA9C2DJfJKe7ZthbGv7uvV8C9BzEXFTrZypmUPiCh5NBQux65vkL5bKVXDuDpLRqUGLpgNdD",
  "key5": "4k7D8ZGv7YiD7YbKvN1DMbchjtoWuGvbes84oK53yheUeFbHZZh3dBoxmcfAKzDmzMNkiemYBL4p2PBq1ivM2fNL",
  "key6": "3ywaa9fMg4HSdG7WEnxb62wBRabxHwgZ19fGsEFDrJx2BuZWNgQH2D4LzLKMey5LQYfuzJtmbn38F1EYx6iHj6oK",
  "key7": "3RUSJ4G5wzwyJhZfsg1t7t2ZLrEm8q1ihqVLEorrdoPhJL4rnux7Z5MNdwje3kuFuu4vos6U15pL9fda1h11t4X1",
  "key8": "5GAD7eyBxMHStg3xKMJYVkHQfUqJohdGsq3pZGPpCRqfdwwpBiPP8sB4BBKtvfzxQ85QRixjG2n5k7Ejdx88fDz2",
  "key9": "63k1pvbHYnicggLkHB13wCCSMLQgvfE3SCVTBDKLyeg1BsXvFhakfDrgWQ8E4jtNMqy4mq4FmpQ517NaoDecmz6o",
  "key10": "3E1S3QybLdX5YBCVypZHJCKxys1dzevxB9oSVEeMfwJddVt13av3jv8nzBHKD7wjPtF6Moi8PSgE9j97qmpGjVSW",
  "key11": "2jhtf1ECLYsYLCmqFHBvvFEfCsEScgZ2mqaB5uPaEeUmo51YJt2oZDzxFBdLQe5Zb6Rx2pPyPph6WTeLn6BQa6cm",
  "key12": "49VRRXgAH7dHtgVQo95doLhD5Ja5EgnUy9EcauT8tjB5pLSHuMMEqhDm8PBXvh4osPUKjvUqHEvdUQWtdTSb7PVh",
  "key13": "3bpUozvbGwdKd1Vm9KQyyYhguhiXfX17CoQLKf4PyG2pfwcYy4Q6zVvnPg9dGLmm3Z4866wstJcry1shsyAEs6RT",
  "key14": "2rFagkTHHN2Gt2niMRVT8yYtx691wqUJeerUmeocHPBsdYA63EBXSQEUkq6XjPdPi5tAaZHgMRBhk8k2prBua4EQ",
  "key15": "4nvbxDvtMTBXoedEF2Ef5ySZNjE8ghBbxyBgdqvqtmoaxM1rftAZN2cqjYT7BLBhc2Gg8QNeGNxFpSvfEtU9chcZ",
  "key16": "5kHA9BGyoXojmZaA3iSXBmnYSpquKC9pNuNmYgh7BMqe4nsPqj6A26oBQGNTXN2h3H12Wa2FBt21h7jxaaCuLLAw",
  "key17": "56GVUe3t63B43pa2smY934QpGaLvtpUQzhEcb6CMSVfmjvw82p38DsHJnk6qyUTYfJe5LMWKRgyGahXFMhN9g6F",
  "key18": "21MVrrJ8RBavF8qrhbrEHtmzrCEyzVLxFR7HRZQeBwGVS26BFD3pYaHK64oz9JAoYPSA7MTVEgDJzcJLeVfTxArX",
  "key19": "5tex4vACGeNtyk1nnoCS2HrCr5TxPXeSJrVu7y4LpStU2tMH5KrJuD86fY3J1wxLSxWKx3s7dD4GgN91Z7U6CMrU",
  "key20": "5PZPLYXErLzNSexcgMrKCMbY4tghXM2yjQqfHnk6mxpDAQE6t5mWvGimB1kvyVJYqnM7Bm3HjPV97gMJTLxhQLoa",
  "key21": "334DKrfD1rcLW7Mb5xyuuupPDfMzFBQUy5b2gZuTKyRKwT6xf5Zbh1AmbR29jitfT4rso1nWBkuR17SfwVRxziu5",
  "key22": "4YSXtEsnVbYm5CsaYvwnWZtwdnR65ovtWXLgAKpYq1vtG66B13EwG7rpcfuPZz9ReFpm6ktt8mN3pSjx37mhJQzo",
  "key23": "63tbtZUMqu2nrZLKLaMj2ZJPYCGMBYWGd3c5KTaeJmZvdaSnSvU2yaDwKxYsB6aDgoLRCCPhWyaupYpJ2HWAmrqs",
  "key24": "4STcjvNAqpr1ru1h5UnkRfZ4gurWgNKC17wiHvRRNxfS8KMBKs9WUJ6eatAwBXS7AV7n6dEZfB2FjVyjRTQ5R7uG",
  "key25": "44N1kc6hewNfoFRfPRjs8JUemBVY38Hza9UefFGFfffHuprwVcrro9VcFgmBtSPqoHTz1bdyXUCYT5rEiAbnfpN5",
  "key26": "GzYXrYRphYjwKtWbVGrSY6PogyTCxMCFr1tbbzBonnhxFh83MEAHbLc6bQENfF3tcaJkKi9ZaFVwAqMTBd1VRSP",
  "key27": "3hMbChq2Sf7wHhmNDJiydvr2oYgNQPbLNj7Xv7armxTfMtx4vFzE2uK6RdivJWtg7TQAUw1FVDiRQHwmQqCgajcA",
  "key28": "4DZy4L3GLhmYuwn8q6Lb6npuQTgM1RmxmX1jqCCiUHoK9RxKxqtzHQhFuQndvP1vQTqFVSscryCmAUTekMkpjVnj",
  "key29": "mCX97QK3k2ZhRctoCQf8n41mMWTB1XN9wcRdg1SFD6H9NwPDkHUhrzj2sDySqBCanUuaAAcJGbQ6G8KGrEhLvpS",
  "key30": "VdDMT1f4aTTaiPERqHjwpixDZU982CcGX5Vt9KWsLSirogSpxFBjTyusWAA43qCYiEMZyni4uTFheN8aCn2Dr1n",
  "key31": "1hqvGVLpysUVGJsRQYAr6QquYFeZU56toWs7SHasNrzwEY56YSnUZ3cuAQ1p867z9v9ngTtzvBsgEvVNv2ihBbb",
  "key32": "xdFTKC1NhVv92Ea6UPMVJdnic38RBQaim1NQHG23Cds6HMniWR1dKrWYPBSvBSQ2XhDXXcduBQSBMJj3cT5UTj2",
  "key33": "2wfr2tdh4Z84R3XY88wM1gGdfeUkumXqL3WwM4VUhhp76tj9sYERnFNYhsW3G3bYTSQv5wXCY6GtniLhrBRUfDHk",
  "key34": "4Tsn1w2B72RHTjHPuxcMnttVcWdekWMdLu6pP7urRHcYMH8HHgBRXAPBnVjoxmWKMotZ9yFVkP4MKeUxX4Rtuxis",
  "key35": "58w3iBjPqKpbnfKf7HDBkPwNPiEThDhK9csq19sqeiHtDHtpENbYK2VCHQtT3Z5SgUvNtm8x7wP6bfhRghgUR7i",
  "key36": "4qRCZaV8Yt9SFaiYjuXHtUCvYBjAcLdkUEZmSqXnN9Rgx8WVqkCxuPE95V7RGNG12iUS3JuDEdHNMp6naiMSc3MW",
  "key37": "5eVdXjHhi2f1B8ckBPc7XE12ijAA7Zwzf3WwW9WjU9Dox1xqg9XCMpoGtmp2FJJUZgQYTnYV5onKEcnnKo6mNyd3",
  "key38": "4oQUApgPeAMCHbADqeb2fmSZncsR8FH6u85MajD27kftEgYGBEsm9eTQJ88SMaxpTi9nbU8szo5nCymef7cb3wfh"
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
