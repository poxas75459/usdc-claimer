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
    "224uKgUQe2Q9tcwBxuWRDtAn8NghM4TYc1k1WLFspumUN9VLUWV9mFJgJJk4AnktPbhNCpLgMbjdmJ6BhVSfxmb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UzSGSxHR2fdqncabn1Vj6xhaMyacW5JD2BX8CqWrT6eKEE4giYARPgivq7P9ErLkqpN8mBhBC4BvZTxFTPNn6zi",
  "key1": "53fihp6HztnLLKbeyKx7PUvQ5bwp9VW2aPqUy9wDjJQsBfGjU2MCggbR92HcCx1RDD652rz4xh3am2nZXmjS3bKi",
  "key2": "4RaXwXVXuQesFGfun3CeuHeQxCzFh7rbBN85RWoqaCjZYzbHDskdeWQFRf1N2RZcWxWfy98aFP7BokbqxHtonG6T",
  "key3": "uzLx3wGffrAH5a21AaBjufdvRzkNpsPzDcjnf3jdsLTb39a2iPNf383HGaXpgjRrRFmXdpVPnggFADDVC7fqLXe",
  "key4": "4xMkvD6sKibM6hLnwEPkcuHwU37KargooLPpa4pAJ4FLKrxzokraqMAv9mzAREmLEkZq87y7KxiaNzhWGJsP1eZp",
  "key5": "283atiTZfBS3CMp3nuG1juw14iwm46HKr5m4hrU5E45R5dxtAmbsWyHEonAbVBPtTf8RwEfkk3pWc6FNEsEKJ4T4",
  "key6": "3fjtKmU5aaN3Rp5CMY2PYx19FVv823zDHxevdYXQLFJWxfoJ4oqPqKwLRzuRm1eapHVpeaLqLA1sVKBr1oxh3Cj5",
  "key7": "4AbgyDS897eNjEWsD44T1GY313oqVfHRc1nMehb28Uk8Y5TzJQekGuYP9dFBbVH7S2qMdJ7T6sKLC8T6kiXtaCAk",
  "key8": "XWrEtUEy2wimRa5iRsnvWW5zzPndWFW9EviuNasHHcZxzhdPMMLncPa6QwRhjsUZYdrn469UPU1jaL1K4FXrQYL",
  "key9": "3yp2hg9Y8t3gURNyLH2HVf72UCGaFsDYyxZhriU3BppoJriTfNpk4a9mhzhZ7Kx3EDGtXYo6W3wKdcRzMRfZ7opG",
  "key10": "59fYqUuA1zCAkQnPwZKwTQtmPSVUJKiNLsvw2NcZraergxuFnyjnge1rTneC6eZQbKhz8X7XfLCDb8DrWhffwbmM",
  "key11": "38nwptMNBue1JfLseVRCMYhpVwz53WiqzvTRSfbUxmPFLAWCRWEXgHtRRu7MTLnj3w43T5TeqN3q34YvUAnREsMk",
  "key12": "457eybQEAauLFnYbnXrnnmP4MX99vw9RKhgBMgptiNmxVoABXNnajDDJ3w4nwEbRYVQoe33nuL41xLzNzEqhVtp2",
  "key13": "5CsLcp9a9WfPx4uNjUb1s92YGd4Z3DizryrTUAuDJee77PSLeRs65hw7bePdtVSvY8yP479M5Y6bsbjqYodBmAzT",
  "key14": "YRmQ4vjL153NwxDpe2mbQr1q7gdgEwmA1xvt1AWzTXi9n2MDv4NoGuvmRNFrBsYCkiw281CeqkcVTavuD8yRzvj",
  "key15": "59Hx4qMD6xr2aATrDgMA2gVWY6yka7McFhKrh4rR2Neoz796xopi6RQPJ8KbTGJ2Sh5yfSPtmMUzXQADLtBq1JSz",
  "key16": "3aDxhw6afpX1aR3ySHYDMvw7tcsWgmE3xkUkpisg1tav81wm7VZvDNrry8KKC94q3qqEdxSF2QdMANVHvJFQqGhc",
  "key17": "3PQWKVr3MeJEEmeC1tW8FSYu38z9FDK3Fabau9LshfujupGN9DL9p9ckgBw86G6RG2yjf7KoLkdAzr6eeS7urhgo",
  "key18": "nXXPYxvpKkPnWHu9gatyW54r3jaRNTDyHv5rHMAw4QnvwyDV3w94cANMvaAzCFFYU4oDQG6tDmjFrewukMkh3Jy",
  "key19": "5dGCVSeoTMMi3DoMkmrbwNHpScvtLqx6TaszN7dkKpoygo9D3KguSd3rBT47kQFZ65RXKRRtooZmNH6F2L7U55eB",
  "key20": "2dptEnzrWx6AyWSterVHz7bBwbLCNC8hR2DrHBTMUBGH2LLz9adrRkqmYzoCGhnb2RSK1zBVRXb8roc2rAkEwEpw",
  "key21": "5MFEoEseZb71FhRoZwJ1j6XzJH8iDKbiPXXaVegjwrJ6piFddLzPMkJM6va3G29PpuApZ28rGoWjtJhvqbwL7tEV",
  "key22": "42GNtVDv9FshwgkL8Bgyq8vGJbk14UC7y9J6vmWcBCCrr85JxPnAefQuP4XGTRJkEbx7jtPVKFYmoaKvdnGxHR3y",
  "key23": "7AawJH3QTincMHbF3VEQdgE8smwkG4z2qzKiFYLWscn5ZgwWKeezen1VGfdkdmjqZqPfR4gz5iQNrV1NGLAbhES",
  "key24": "31nNkEbCYDCLhxiqMHf68F87RwFH8F9NsDzKeRZhBumKrCqzEhVXdqo1mCExCxDihhDPNS64jvfCJRtiKyStZc6Y",
  "key25": "4EzHV3AMVv4XeeebNGaft5GNqyAg1wA87nKgAM7Ss6nJraUYMVrdEHKVEzVtD6LD2mwZQPRSsi6hE8bm5jB9WS9G",
  "key26": "26iisRBgBxQhofJ8kw77SdrGU58qnggrMfDg9wUiwiB5poQXwVGV1sJzcnP8K6pCsAXkRim93GaV7jcdBLH97SLe",
  "key27": "LufjM5JoZaDYYDtfxgMPrCLbJDbCKixrHfv2viBGjjNH1cqRdqoH86gZRYKZyfdbAobjLz4eZhdToUAdpQJTK5i",
  "key28": "5bvC9GpEhA3Y31MR3KJsXNdNx5oKCqLo5k38Ywgdt5D5jzbTpWU39VSSM8m9odKJg1RZqw7MyMZpnESJuiAMMVtu",
  "key29": "4mXGoGGTuh6CUWe4qdTTJD58w8XsBHLuz33TN5szcAomZo3QGeLcAgv3JWPGfq1HiEpdiayHJW5KWGngim4qDSCb",
  "key30": "4A6pgMh9iVnxBRsWyPJF5ZSgFmfipzD4ue3Vhn6Mvb5x9ggHHvWXtpBasZ8tzweF2PK97ZAeFUSYLEZgkjcU8SD7",
  "key31": "2mT7sp1c6UgEhxMSqVgzjA7AgPghWCVXvideNcZjmC48tPkEnQUPndfoXXqUekfVaD7AAZf9tZrc57KVA8o1LWrV",
  "key32": "4VaP5D4T5KfEbovBexH2pbhGStcnBjmewuKamaAhY9VAwE4VAtYeBKVQ5esScgndjfw47D2WP28cjNovDrTu5hXu",
  "key33": "QQT4pTXGnHdeq4ysq4Z7z3uwaF7PmrpSZpxgea3hFum56CN6a5afiwxRSZrKSkNZJcdmmEFfwMfJcH1c8k7nfg9",
  "key34": "5kUxCe4aNXcFV4G5Z5TZabYJe2Rt5TiHN2SdNBN7shQjFNausHMuYwiarn4PMLU234oqycQMZRsdePiPDc1p1PDy",
  "key35": "LKU4oZdUcQStRajNZnMyQejtn66u9r2R7mRZZg5QrW5PFto7JSMgKQ7WTc94sCBC4M4eEgPT5gZiaFPH26G3Ld8",
  "key36": "4CcLHDEUNQgt9vCxAC6xjwaGJSJNGPJKVdfKiNVJw38sAsdXpnQT9rF4oEkyQceEPaTb2aovWfDzjFdzko9cj9hx",
  "key37": "23oYcaoQVkNoq63uPWU9UNMPYayWEfCtYFxvMKL8P2hk9ASKXhPJ86LSctwHj4R1HbS3HYbQGSkzBAYNm5ZVU3pn"
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
