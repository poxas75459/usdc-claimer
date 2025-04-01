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
    "3ReBwqSagcmqxseQW43UumT7wGi3ofLfYyqX2WkQsd1qpo3tY65cxB22y2L5GvoVmGTSwUNwDqLv7uzr4fdR3spw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LSxnWJ9GmxXNoMf1ADEh5jrq6vqiAqBASjkGR9tjs56kFfkX1nVnNcDL9AZMvLMCYq873shgiVvzyzZiUMK2vM",
  "key1": "2aEMAxmDaZXqRs1R84ctMXKdJxahUEJ8ptQga3eTt4VgK8eT8wuoe8TyrocanHQmWqDt2s2ok9WHo3iMZ8nrTCLB",
  "key2": "5KpUohbKV1mopdV4ckkihRTHyEHJqA4gZZ3QK89fPBGPZiXk63sxPZ3gfvfXtQwXspGbGrt6bCyVT3Hw6fJJa19E",
  "key3": "6gnWam1JNPZvyHhbdoowPbH3ZJK8sXtPyX6WVQZ7DPnLcn2LYECw3gxShNtsTa9W9j8955A5KELa9hFWKzqa4cS",
  "key4": "49mCEsdh2sUqUcE3Zd8hRkuGdYZmZdZj34h6J59YL4zSNwK7zY84GrWGUNLRzWq3WWmUANaoKMcgKXNBp83CshzQ",
  "key5": "2PZVe3aAJFbfSEk1piHVW7NK5tikZhi2t6aErSNbTCHsyNszDDbLinNybkEJkYrjnS6zYqUzWB53HhS3ePBB9DAo",
  "key6": "sNkqHabpLH47WktLgeSxmeVYvYKcrjvtS6HDriScfQyfnQJf2c7JsZk9sHD7eDkLb3EYYq7XMQn7vhFtuYNJLXp",
  "key7": "57wATSFrDs5oABQJSVxt6eRFZ3mFh9j7TjKDHhmNWNUB6y95XkL33UbtjTZbzCGESZqd2p62cFcPtTYyTH1Dk7ZM",
  "key8": "3fkQ87L8FFHdKGNQMa36gJPg32jk92NNn1syudvWYjZm9BwP8buS4MVShq8qb3DMfm5CGiA1aGpEipzXVuhuDchm",
  "key9": "5n9zmkb8cyHyFqyUvozpNUYZRkks2BK3uHEBvJN3498uTk1YcySxaANA4gCKuSTX2CEUaEMRZ65p3jZ2cqq9XGuw",
  "key10": "5JL4XVhvy9iS2M7CkzvUjDScB7P3UqRsxRP5KPRRtZ4CLvtsN1vJgjh1JsheS5KChEu2T5AdzbHkwmpTs5viSDYH",
  "key11": "3iwTU8Mqd9jc7mXwb7Hs1Qfxd6dGSSkbZciefBFytADYAcZVpoNwzkyxR6XDnuBy5FtwXG6ftKtcgGQPmFsuEHri",
  "key12": "5Apu14s4pJmpGjN3muvEnb2bJ1VWgDAfCV9j7xynd17479oZMfh4BUy5TYTGDPJf7vq1mNK88yEzEzFQ6WBcPVVh",
  "key13": "4kcxxtUF2TfoxUT6iwJ79pZA5D9RBcRXRFBmi44GNaj5UmLr8eu7JmCf8SoeSY1WKLeu4cfvTdeCqwpaSBiF4DEz",
  "key14": "2DHn8CaBPbD4ta6Jj6GKFKxhYGAeHRVfXiEp5LoGNZUYwef3e3s13xQxPUvUmV2GM92TU7xteVuw13gm6NajRN39",
  "key15": "32nyK355C5rRNMdRxtNwD39eiM9PmkKvrCXDSwgB3qoGCXNGRhAHPPtgR6J4qxWmtZP7PdfwyB3qhhp1xzdTSmRs",
  "key16": "4k7HjGE7KxKU2zqGwxTXHubxRcVYHgxKt2RNWCbjGCj5e6aM24yw4taguKtGwN5henM1REVo9jtjNLJ89J53TYPi",
  "key17": "51kMTDHnna5eqnhtevbW8VKpjtBcBMXgdMNR6rVbjCNxk4Yu8DcLezKYHYTdG4qPGudbkwuSM54T1pwtUPhwvNgN",
  "key18": "5AayPY7iiYEGGv8NrCqcuUdKEwqjuVNYku1Dbk3kzCvWKpbazrmkZZhQrP67LW6RDDZxkrdpTG3gqZQuKz5t3j3F",
  "key19": "zeXMSBsNSrM6kJPwU2ddNiVDF9TwrpPhYL9umSzBrXDz1ZazoRCCTmHhaxuSE9PJ7Ud89DQ8FRNGBkpNkJvd2HG",
  "key20": "33uYG2JKu34VjM2Y9J5HJBm4x1mGqfGxa29WXZP8GGsv3SpgpnG94kmQE7EZwJsTMtgLNR5qFAMB88vu9F5k6iUe",
  "key21": "3VaFooUhXqu3Migiin3shWCfe7i8uAG4y5x2TFgeFBbTBBMNfzCxzAYYtE1owK7eEM2zxdUPZx3Jj5TeBnSnJHvY",
  "key22": "2wjksEwBrHdotbdpnTQfhCfQ3qxcyEAkmtWakmYQLdtXoeReXakcGTGHVqv5818pa83Wnt1sqR1eAcgVgeqDkeW5",
  "key23": "2WDwzzkHHDgh1TBoTJPK2pejszhB3WxZ8P7Dym3YpK9QXxDneec3AjPargdCxnDH8dRoEx9aUJ7X8FnaS5e7gf8Q",
  "key24": "2w5Jr1yLVwfYpwnLQH5HQ9RNeoHjwbwT7dgCrx9EXcB9yYae1VaYvaBvt3JZY9JZGfyjN2oZz4kxdz7Xi4d1JGhg",
  "key25": "2XELADsvY7dYRninzLCfYgfkRaApNYk9psFNDQgYcvXnNWTtCDCGPQMhk9shLNqf2REM5V4uteNa5eETGYFR3tyT",
  "key26": "5hJfnTbtxakW6F8petvyRTD2dzTnYuCauErAEYmrP8sMwnwm121R57jCtTjBCKaDvurzLR5C3KngFX98AfY8P2MN",
  "key27": "4kpmJSrch15RPDBGEc37ob33hT3Sii5HBYVPAqJaKxzV1eBJRnLhfUGPE22v7xsHBXdtECoS7KLVoPxG4zrqvVQK",
  "key28": "62VxVpXGita4gdcPFjsHKDNFipFd2oddKDedRnxy5wJuRZV5Zhac8EeKYDH978CHEXcpVgYb6zxjLidaoq1juB5y",
  "key29": "4rqtt4ayZg6gkTgxQxCvxtZTFMfHodWmEXtoCKoJ1Z92Wzjk3zBEGn4BAK2CRghcjfs2gFLgPJ5HYkhchwE6w3RU",
  "key30": "5xvYF5StpCC43Vbbm9d2yuSDS6gUsAR6iae91KHb45efforaHQceVVN3iMDDtdNFUSoXUtZbEXrTZ1k68g8V2XTq",
  "key31": "4MnvMd42C8PG4YcwjmBLDL4uoHKjnGFvG5q2NSk4azKP8cLYesmyokpkF9xBF1h7X2ayqM3EEGx5U5rYg44Ewx7x",
  "key32": "2WwFkid5FLCcjH55bcuXKjfsNZ1Z1AHAd7iFTTdNuc99bsFziUXWisr6hAHDyyJxEDgWbpTX3eGovCw65XAaQ44q",
  "key33": "5JvgoiYoK8pqmB5KiCBSwBhfRLQFMjBV6Dj2zGPxDw8DRZy2kevGWUx8A46JS1A1dXZYpEBojwgny7xuCBZxactt",
  "key34": "5BJr4AzGfT6rNtgeRHiqxhHg4i9c5QLr4JoQsARmgY9uYedWCFiUBHbEv8o47qnuVEzX1cuGAN2dAd8yuF6UPjzQ",
  "key35": "3NjswTF5UeDyKu177YF5ad28grK9JGfsK2JH89UpFZf7ts3MnPPK6NCLbJzez9aG6GgftnfVgThPSUyv6yXWQMta",
  "key36": "2tQ8jXyAZc4aERQ2ZMw3VnFg8ZcrFU9NtuZBSFqoUgo2SPuYeV58vHF7MFfGxbxDY2xzx8XFR7JDuK4CY3KTgCU2",
  "key37": "omo4bkSUUhcDzUDL8Tbahgf2Cx1RDX5UzHRFVvkXviKz1e2XLWACkcokDU8pgm9hY3evMHKvmprwFosrceX4s7p",
  "key38": "2kcTvgUDxZqBTW7B4bARmQbAvBufyZLDvadswfC2FKpdV4WcKDMmyvXnHVxZY3XUeUWSr2p1SvWgx1QGmDpmX8jX",
  "key39": "3XWML9aYWHZi9CMC2U2DmZdY41KVDirKK2AvLpdK8FCqfLieMNyBCDCSTj7ryJAsTFbwVVa5Q638rVNAnDneivLA",
  "key40": "24SRAe6KvXqNSBu5rbFEiCGrw1HiSspcYULLRpaPpAtNiNbg2k9hDFEXnc4dvFjMGaS6c8PKHsxCmDHfDQMrPex7"
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
