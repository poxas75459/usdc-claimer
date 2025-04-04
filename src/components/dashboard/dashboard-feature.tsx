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
    "3kd2613aSGsB6hQjVtCcHrKi3HWmWjPLnBupSvU81Mro2zdgTdyBens8m2a25C43s3gPWMY3EqixeoRm8z9mY2a6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3djrdVwpeHzFHCHiYquL2ccXRiBvovj4QepEHMBETbeeStUKRpP3n9YSFKQvxBSSZ8cRYzQ294Ls7qT8HpYFcZGz",
  "key1": "4GHUDmpokwt8y8kczp1yMyUNv2AWEuJCH4KxNTBRJEToZxHEgbVF6U1S127gkyNYwyGGVaTpRa6L2GHyHCpnJsAK",
  "key2": "2LTWA9EXbTUCmFUftqtgBzE8EWgKUFLbmjGJcm6SjJCsnevbVJ6twrDBfyEoz6gnUxN6WEjipSDfD7pQfG3tqWwd",
  "key3": "2exAPF5UX63nQkochwkWqtLdMR79Hj1itgbQ1fZqYVUdpeUniS1WnCWXqRoTu1RD8adAyfkoYKspkxL8uAkEVKq8",
  "key4": "uUzwYL2A3UdgtYiLTmCyunDmJjcZUNCZRcxRwj1SWZYPA5g8tJ18ipW3Bij2KTF3SxxyqHNTJwECwHUYoSqi6Un",
  "key5": "AgytL2bLPFJGkQ4J7vBciyKpyRfzNdhPNDyPGc5xGJrR2aP94FQ9gDArRLLxfbYY33zFKfshoKFhGbDdMjMGfrN",
  "key6": "2RBGQad54tTdKutdx9KyDCoqHaJCZGxmgju8MKsXWhiG8RUsrTVjGRvKpMmg5avTzE3As95AF7ef8afaYJqmD81D",
  "key7": "27PFBEvntvv8PViPptRbeCWpddPaqK9FCmUCDZ83TFGV2YgtteXZGMXyXui3qsXD8mgYtmNgQkAFXZMrbBmShSYn",
  "key8": "2VdofVPGRdeS9gtnyPFYFjkayCUmSmNDpqrZJTAVDLtrjc2FVBN6HkT1R8xXNpkHV5uiaYp9zLHCVTXZjXPN2wq",
  "key9": "5aCRYbTtRmn66UaKs94ekTdfsnuKjTvRa2ov4cB8qKg4v2nUpHXpGBkiPX6odiTYPvr1bVVQeXUHA49cXBjBd2Mu",
  "key10": "27s5ss4akmDFDpqzPA4rwy9oHgUwjZYcu3cYG3sxKurLy4kYewe8oKAupKLSgfuSznCSUAJWM9hibvYxet1CmQL4",
  "key11": "UMgDGjTUgauN1iEhVEc7Y1Ece1yvcfrFPMDe3EibHXxT36UESrwVDknu1b7ASNq2wvNpWiegVfCXVgRSVuG1oDw",
  "key12": "2vU3zYpjMnHAbD9fPR5UYsJ69adYXqxfvpGBuM9f6h3MhmDfcw5FrPbbtjRQmHc3JRpk67nfxt91ttr9bun3c2sp",
  "key13": "31dHqBBzzqy3fxexoSz9kLdqELvjyMKHJKCfWCDMKgNprGnL5bVZ6PPiGAWzfSkhbr75eGEo1P7jstWgwF58JkFk",
  "key14": "3kk9SgrHL5C6dnVGreAkWFUDZTno2hkEc2uhGmcmFcD9ExzVNZM7owUnae5QUMeXFegxdRwPjFgSxXSuZjmNsVvA",
  "key15": "4DaRJ83ucaiieSFX44nnPkUavqUuvggL8aV1uC3HCGkFxyrz9BtNDJkFtpb4tt9NbZhopjXPszjzaFeTGgNcWC7r",
  "key16": "rNNDWSy8m9uWDeCzik33jJQECi33RoFZe4qPorxKvbtiNh4c89iaPKrWDBfW1bqK8XbUrhFtLNx26RXM55H1zqe",
  "key17": "RuFprvyCSBZmLYvDdU4oGchFc82UxJ29f9Z6c5Ddpo89VFgeoBpvDC222C5NUp2pxvmSqpQYdNpX7QKseLsxgU9",
  "key18": "o2vaR9LdDA7NxsXjAxoCXig8w25HPQekDXqqRpAQc22MkKkJ64pgCDLxkuWXw5Dj5Td8vd5yixpamyLVXs7nkVz",
  "key19": "EyTGEwdc6bKXA8aexXhdcoy1A6PCTL8s7WKLjtMQ8nkbberW1JKgXUEFfhT8rV9ZvrXrkhbL3M7DkzZgskYCmfs",
  "key20": "9Cub8fECyNhmCAqDGP7LRBD8PMHbE3B15DXs5hGh5e3KQfkNEAtb5xE9HtwSNDjF3z1TotdqizvX1N1TCZNXS3n",
  "key21": "355s4tz9dPwPVke3GNVRB1MTW5p9qSYcoH6LqmnuWEoD9U241GVpoWnbEvVZ9D4SBDe1D7XLKK1Zz2RbswvAEBZv",
  "key22": "4o1m97KgsfrBTLa48McSHes6r4U3iUKNGzPSAaXA8g2KVrwq6J19p882hKh71UXWHyfKwhmQocBuyphs86S3zGWv",
  "key23": "3gdCvyh42DZN1vxNPBMP6yFVSdmdEmAa32j8A88iwQYJUC12yS2PhSiY5SA8nHmC1qpAGQ21J2McipCkrmkssi4Z",
  "key24": "4B234WHzcvntypXCxe1rH8cij95Do9vxT3h4WxAVbR2AnhCmbgCHiytHinmCsSRqdXKAJL2cMUBvZn3m8NaqvSgG",
  "key25": "5B34iH8RaKvXo7kg8kLHorJgwrNttvpTxfReEcCQNWKuEGWazECSsdRQjjm7pZziSVNEF5PfYNX9uHVHFCWB8sno",
  "key26": "3ng2naoQ3PF2esaH5PQb82aVrsGjEq4zeDVaZuB3WAJsuhY3LGsmuG7kS3WFSxcdkFbfuarq2Xt3fPGKKppzTf5K",
  "key27": "5P6GpLfNvKjGcEsXk9C5Wk6jpxuPVAayVPmeBL5yid5ncjDBMZFTCbeUoYGR6hBCBaTdHorWHYQYiQTmJZbtobJ7",
  "key28": "W2HuXk1WFZn6RexjrLTtUoyt14f7Qskbj7vLgzdqXCQGcf3bYLzHKNCwU8o7QUvxvWsCP3mqMqsEiEgZ8qM3hbj",
  "key29": "34pvrTkgK3GFvpbC4oV946ZszVvsxKzp6qzTZ3HFyiHTRkKaUsAGPz53PbgatPqaeLDWP7WUJfuA6n5aRPX8kgwG",
  "key30": "5FFv23pJFurLHtD2HyD3cfmLtRGAjM4AAtLKqpohWnEbHwvd8zeWLwaDY6ayWkRLzKHmanyW6sRgtdeZK19TdVyY",
  "key31": "yu8QsYedtuoiQkDHzkBVCXjq3H7UqcVQrUskpyXV5FUKMK6k4VoKzZ3ZotiqgVmZYnZ8uLmGq5KepeBC2ktNjDN",
  "key32": "mLusDCBm6DYTjrcuEzaEpnUUJaZ59wHqk7TGerrqQXZvXEB1pmmiPBzi3FLs7tRgcjsNAzzpjFt94VTA56uC3p9",
  "key33": "29Vua529J81XueERvji8P4qGuLSiD3ZEe3ES9sy3nageZweuoksu2PfEXk8NHgsk765AMnVcmJ4jHscWuPh1wG66",
  "key34": "3j8KYZVpXzTWwrnTRMH9RcQu9FATtzAZbB48yhsqYiDK3HQ8ihMyiTuSKkhqpQtaV4e4jCn67fwUnGiBa94xJBF4",
  "key35": "4T6PYL4uEhadhWKQM1g1y6aguSezKY4ACDouzAKCPJYyrWkqEPMDDjteHgXFmGBmmJZwo9PAo74LSrFuGvUayDPR",
  "key36": "3g1Ej5ztooDkc4rXguuBtRn1xVdFeFCNt5JarbFy64iJRpVZvG8YZefB46fBuggNNECFyg6StWvGAZdFDhrJ9UP1",
  "key37": "2KvxczfCkQXiJQigUVsTFu1z52U688YEGCKp5wFoaQa2vNY2ANuB3Fv38M6E9Df1mwJ41mjg7DH2p7dDXwUqrhV6"
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
