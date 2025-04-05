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
    "4KdG5kx2s422gjVz2boAu2sGPLg4KV377oCVdPztsuK7CAmryuDa5xkJnaaPBeKE7VUtmKJKmcSrTu7qEdpyVE6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kq3FwyFp2fH2jzovPBhEsPVu4G5MLqAo2FffzJx7rvSdeRfymujiund6LRzk6WgpMrTsiZi95UizZuHCufGnyg5",
  "key1": "wGwaAu8NKHEBt79cqJ2naHrtrmExmRo2LM3K9wwYy5djAna8nSzBA7VPN7HQmwcDX2EzsQHNYKZ7wycPJmVkHvY",
  "key2": "5ZBaGu42jdjS98eGS5ezXaZr4KkXUoKEcgR39f9L44cvw1nnuPb1Pt7QJ8D1AQCcueN3hRG9arDnEP85cCXuZb2D",
  "key3": "2AHF4D2XxCopGdDBQNXauhtzGLP6ZFDz4hFydAmehDKKsoUGTDiHWnVSChsEbvkzjn2GyKj8zzM76Xgmh43ba4dW",
  "key4": "2caHmCqLFRGHSiJSSM9by9fHCT3Kt5uzcZMyo2CZQXkc4nTZAnSr9WkRo1t5Es8yhKhMU2TghQQHfm875bFaZVLs",
  "key5": "4Cfpo2C3Wz3ahcF22kLWs8RqCSSzEBWKj4MjhSpWKbADVai9bJGxXevTgfkmR6j11zQyNhQXRigb4PFuDvraXatb",
  "key6": "4hPbmHSjdf6M6GBcPHqJEWtT5afbERR92Canmwi34eNJ7BoqcJ143KFmbXXRS7F9KnBT9VHQn6zL3CaYDNwyrLFi",
  "key7": "4igHhnpe4K3k6oMfzuGnUoZ5KH2cjJB6HjLfLXzjMwzt1grr1QEvpZ5orQtN4wsafE47rdt7Fm8mKhNrEexFHesC",
  "key8": "qKWnMCWTb9QmAHTufBMNBpULmix9onSb6PCabovWRwJtdfKNHAeLB8jPS1DRBqDnNcLmoDaq5pGQVEyVW6rPvoz",
  "key9": "wvdaCg9fQbSqWixNGzzCLmmPh1Xgxw9vvSmX6xjSooLTCxWPqUKfr9pg9S8PVuyHDNfizVLvNA9GaQceYvpkTcg",
  "key10": "2DWXSjKZyRkX2oXaJiLPaGVkDG4GPDCvh9GdhXoCDBjnkRNGtHFMPnYmKv1Yw745pq3S14tXehV4Qbeevr2UsAGB",
  "key11": "5UqZmSAQ5pg4XJf1WULry68zNCUvJxgfQDW74icSep416k1fhZBFXhSY5bW1mZx29TeMKzJB2uHVmtQa6mK3FcGq",
  "key12": "UwCpRwJyumbD1TSsUnKp1sdTkqoAfYGDRLUsGHJwonRP6uURieSrwGgi6BtF3eNjMWNaExNwkFfm36CwPpMaExS",
  "key13": "DXg9Q2BMQFhaynvnukrPYok8egrujGr3QJLrM3SsdzWDK8MBW1vdVSFk3ok5FDR4bcfZ14u295rzzVsAxjjT3ss",
  "key14": "KfBnPAq6qjb1QWUf416F36E1pdQ4CnzgqM1AMYT2xbYYa6pqJZN3KCpNNPRbRuHWpBEdyGSCkJQCPC6aLoNiMRQ",
  "key15": "ox1tutrk325p2zHx8nMo9mqwm4esdE2tbQqvo6CuqMGDbgJ9wNasPNPLp7gnNxBV1VZF3VD7JWHDzFny9UctRCx",
  "key16": "61PUaB8cKfycAPKqody2pxBvsEE69rDfaZNehjPLggmXU6iqHMkFXDy9MsyaQWYrjKPJeBEUpPvuQ3eMKoxRsWGm",
  "key17": "4GHs9gj495UcQq88TzPY4nxbj77pd2Nam5MZi5sjNA4fws825MKTe6TgvSzzKFAfkk2A6XX2fETASKHzQosnz65g",
  "key18": "3hmUkq42yD6vdcmReStnysKoNiYzVzfaypie57RrLukG2VKfPv6AQDuWYZ3Wi4PC8XSGjpk662oSrFpeGHBZv1Nv",
  "key19": "25N8RaAu4Rnbc4dHdWmSSHmU4dTgnboFxCqppstcchZqUoZhFjJagghq9wVqoKTvWeyYufngxj6LGjVfHyUx6ChW",
  "key20": "38iwKJ4PauTxatxS8CwWtwzLdFpsEz34X2B9fdtjXbcBJz24TcPsz9ZS7GCaHHP5ryK4d8HQUDQ8Vcx2dAVjA9g8",
  "key21": "4A9NRgnBYRbhhec9tbCBERSg2JAyZ8Yniu8EqevkXq4oZZQcbpms1rwxoBmf6FhapQVBFM4vaUrobrDxeiBAXEVk",
  "key22": "3E1H6pFcyHx5kGqdnEfm9v6saLKrmkWZMaB96N2sbBGgCf4xvWRb2sssGHrXkmU33eVnhBsawF2aQUTWpxCkB3sz",
  "key23": "bFxKgtAfGotE1RAdTgJHKj3Kjm71LFqUGWHkb86RBokDZMraWFK7xw7kF9mc7zohuLgLz4r33MoBAwpNpAjSS9L",
  "key24": "VRCWtmpQwRNFUB6ST2x4WChgHfjhnpy8QEqE9enmgJA7N24TJfec2ELhxYtynsesEN4suzNB6JxPPPafoS55Mt1",
  "key25": "anye6XZ4WJ6qex6MimTQ5c9CqBuwsWPW1RZSsvGg6L6xsGFHjaN1YnWHmjjCqJeq8jmQySCLYgqGbubNhE4jD4N",
  "key26": "61LiK4BdPs4wLi6GQJrUWVYgtwSC38mbxPnUtGSxDTTq2gfJGzZ9eKoRC7bYy9WKfrmuE7iz2x43Ygtpqu5SZFbF",
  "key27": "jkVy1hgymaDZzBuCmvKfyDfw3vt3GC4K74HMUpoHTYcEpYGvcShwhj86iNKwHPYH2NFhQxizE3KhTWWUVtpRiJp",
  "key28": "47ynq5NxBK3Rs85YbqQUbE4H5PDbA6VsX8CspmGUUa9ciFkncL26x8RtM9AUNsPMnrSAhGt526u3w8z5VDesEWpk",
  "key29": "55hwNKq4G6kKyiQLGwtqcWeoKpQopgBMLwYMBkf7VjNmQwqKwhe3FDX8XDQBmda2np1firkQGfhpe4QQjUxmYrW5",
  "key30": "4KwnGcEJBMYegRMJ7yDDSsVAFZ5p27n7kmGeR1gKwT9DgRKmG9vsRQDuDvpmhzbXCkakWKqozVoWsPqVGY79zdWH",
  "key31": "o1WsVaK2f1nAu2yR522Z8JBEemR4zPPn3aRFprA816LtFBaEKqWMXXF5CFTs2jCY7Ke1NP7qwyyF5WNgLKChvzB",
  "key32": "4bHMsFqUFuSYCdaYwDdxEtNsmsKf1Cr7HgdnkdskarXs7fF3Ur4cLExYgCsWK7JmtQmhuVBn4rwJCeYJSRRWuNCS",
  "key33": "3jVZibv2qxbPHHHEa2sz3npUT42FVY3QF3Y2Tyj87mpwzNjLb8d4eSo1LyZBfH76462E6eH4Ekkk81dzwnXyBUKr",
  "key34": "3UkoqtYitpmWUP1Yq7dyLcjkC9RymD737h94dQ8t5p6Ps3d2xh5pc1jJxmpa1bFAdzp8gUy7zTYbBnxj5nFmpvfc",
  "key35": "658mSosHSg6dGT39FTEtfFCTzfLC1G3YLqZizcZ2gdcFeF9oYJJGBSJFJQ3WESPcGC33M4mBfjCLh5a6ZcTnf14w",
  "key36": "TPmjftfH2j8Bri33wnWVA2cPEWSKXi6C76pbfZTWTVfaUQF4LSxqsg633YRsawUvofbkTexmgmC81CUWJ5REV7C"
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
