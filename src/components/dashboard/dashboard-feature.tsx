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
    "2o88Lf39Vjk53W3z5fR1CwH7i87KHfFDwinagT4JfhBiMGmcrB2MNcxKBoUsx8y6vLR8EN7HBvX5nrMj1qE1y74D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qAj8Z8HNt8qxchd28LX4ieZgULcjRtv7zzUKVVSbPsfLcXs9rbgpJYcngWdDZv5pQz5aPzCAQcNwrrrmxjnc3aJ",
  "key1": "oyFJFJG5viECGB7ZzHUjWcFKU9vDpxAdUSnnMyfdY62JGJyEa4Se8nPfnzx1hmtc19F8r7gddUn1mre6TzHgqhD",
  "key2": "3Qo1FkeMLx9Gkz7NX7c7dNwPfjwaWSHQ67eCYkjiTX4VzwEbVKi6uQnW75weMqAc5EFEtGhw5mW1mymoE9S6taGn",
  "key3": "58xrf8FSasvax2EqgD36ffXeht4HJS7KGn8UcdCTKbYdHc1HjctKvmExHHzvouWdLpyV6AtG4kJ1D4SdoBvW7ZWp",
  "key4": "4DE59eNNVQnisM3vZ9QdT8fD3mo9gW6ZvHee4ENRe1T7H93B5BajPiq4rBxLq8KHv2ATMZpMUvTZFg7CqdB8669U",
  "key5": "35pBApJ2VWfzsEya1SNthL2PDYHm2YxSFmpfZrf7Yz8h9RB4draoyei3kJdaSXZo1zR6V9oX2hL3HJY7x4t8ud8g",
  "key6": "3SXspABotxQFC3UrStRiBec5taBrdY9bvKePbd7aopsTV8m2t4KcJZgR2csaHYge9tQiicCyUvARUub33qZK9r7v",
  "key7": "54s6RbnbQ6Qkj4TTaVJfQYHPTEU6Pb6Da55mA6N6mq9sGzP3fkTTSBt4Yr5HHLx6LsdMfyn55aMFwJ2tGUag2Z4y",
  "key8": "hm3tAEUes4ySurzJP7K4fSikgfnZoGPDNXnbW9gtrPZ1wrDA1EyJxw7JB5DeRFEn3GpSEaSkYdMJHEND8JX8ezi",
  "key9": "22QTg4RnqYrzcqb17f4feCptbdp9gWUo44Dx6n6GnMHg6E7nQYViqtUYJgdYSXAY12A2kqLbzwNpStH6huoqAi2Z",
  "key10": "442mw8jeUPyUzMtgRBWPD9DGnKVKWqhCojsVtHxxxpbZVW6r2Twyq5ZAUcR5rFBfF8yeHDjtRELW3jMJghQcBbNp",
  "key11": "55hP7GtS4h7bvCgGVqEeFqbZGUfHCJRYn8AYWg8KtfBx5JsXouNydpQsGPC5pCJfZmpgxZLLifJGTsPSQ9DhVade",
  "key12": "N4dRpmvksY7G64MHRqhdVaHJHkULadtKhBjL6ZapZYBE5vMAkRYsafXmhbwHbWeGjn3iYserfAYmFVAm1bWeVaf",
  "key13": "3uyegHEwVcBiRDLyR5dv3ZJarFhWzpAL65d8YBvN5sHn1gKw168EAMEqzjDc4bifF9JZyzUmresdGmSoYTAaCohm",
  "key14": "5vgjKSsoXrELp6L57ZXKHHzYmKqME29U8ik1DDYCWtuoUNoooLbK9yfoBMFjSbcVF2MwXAwxeZW5VBeeSffW4AqP",
  "key15": "fnNmhZCXbtPW3pf6UF4skzu9PhGJxftdCyCFHRNPoedKAaP8rXsLwa2kG7xqQMtZa1qJUivJrnvREuTdEjq4WEy",
  "key16": "619waHi2vdW42eTWDL5n7bCVWrakPxiC4ckD7355M93F8HHc23rF9c4wPcsfQ9edkRa1dTNVeGjejmrhZqSk9biU",
  "key17": "3QHUhV8jKEDhXFqKrvoEgDJy4PTpTme5E9eMKQo2SzUyr6Jf2CsaECRNFzDHz1exgx2pU4TLXt2kEo3nEuTNUaKv",
  "key18": "63uHQ35dLjtn2aT95Xmgs5sMVCEuVBXne35BTPnutzB2Zw73g8qNCMcUffnJrWPVDB5b2VeKtqdZWA5SYdMYTvbi",
  "key19": "3eMR73YfNeD9SviFdfvHqEVuYfq8DALcoS6pj9NAQyNyEf8ja7LECxA5quh2W45FpJoE4KcCegrW1kSsxos7QSQh",
  "key20": "219Vz6GqLsCXB88EaUtoi7AF3x4q22NsQCzAn6eCEdJRtV3xHGsKHjgu1kKwnEhQqtCBYhs4ZY46ZXx3keCqBeti",
  "key21": "4BVFPNG1SN5KLJnaqfqtWRcLWCjjLLKDmbGBtTjxVK9kgSr3ZPF8ud1ePLurRsg1knAfgjXaxFnvMMnDa9RzYWyJ",
  "key22": "5yndRyLhMeUzm1a9EzT7SxF8uLNJf3TvQVQQiw1zzq4XKoUnpjn64iDvF57A3xaP5ZzLmynfYwRA3sBm6AkYSiJM",
  "key23": "2Jyo1zUhr1YywUejwSBLbMR1WUjfpSZ5Cbv4CK6CNwtJ78MVcjDqJ8xiDFwMgStrfa7LKni6wECnCxdKpVAeXGLS",
  "key24": "2tXsapQmEwKix3DCu5eRSYcin3gEEBtpD3jJNNrPxBs9TVRsLeMJUzqCRsaEddzrCZyxBmH1LdkrBqq2qFQxWwGq",
  "key25": "29wTDuBmzTrb4GfuF2QBJnS4t6RriGztkgAPnpELkjSUEK15N14Lf1fhfaErvRV6J4ysgTeNpL5SJ3jHABKodKLv",
  "key26": "2ZH4g77J4hm76U1KbvdF5dBaU7QK1aPncTeGyCiyhBCwjm8D8SmSntrXDYTjnNCXhZ2WHBTvPdcPSSFBNAQ8QtK9",
  "key27": "5ahBQiCo7D8A4Gpy9GKhiGmuHaCEsw84TfvqBPGvvgWfwGzYpSnuCnz5W6Dy2u5kgfAst3Jo2iA5J6jKFHpeU5SG",
  "key28": "CEFnh7wrddcdMNWjX28wGU5pzEMuv4UGkucAg3t1hpGgfnzo6HvpGFEdn7YDnnAX64ADjpWwSJCBZWiNWjL78eD",
  "key29": "ai6DsFr4sTSF9gWmkaCBZy13UvCp1W5orUfsXSAM6vBBa81ZKTnirfoDvaEZnXuiCTk2NTHR8gAz4JFaD31ce87",
  "key30": "2bFYDmUucecNaJuU2YkEj4jrHwSrgMdUPNNSbrGzM7dVKJwu7ouFNEJ1W3RvJMazNawTBtnpZdssVS8PgXVdzCED",
  "key31": "5vWs45UUk8bZPejZqZcZHvzpG7Bn71H1QCA48mr1JxwTRoc1ggLmJ7yT9cpGTKUoWaqQCMztM5x4jEQugZRcxxdD",
  "key32": "51vcyDRYTG6HrGLgNnXVNSFfQUN5TgkmwVucw1icEifboYErjSMUPeYXyv2wiu6LDAuM4ykf26jRriB5HH8E7nZB",
  "key33": "4esG7mJUWXjeMN54TFqAst3hVYaFcCs2YSAWM5xvMKM4G8uW3AcvX4GWfcTxR6qDi27f8W4EsWW99XTiGrRSeTJx",
  "key34": "Cs3swznZWByjNWhAyU81R7sxdxNjauebD1Do68qVrrqany5V75mDmPTLHnfXqCw5ocVDVSQEqFi6Ta3Xbkou4js",
  "key35": "2EVDxvPSTGotR9P2283PJL5iUBSAiLP2pXwdKv2uTggUSG2MGJAW59QrQaQbswJiAR9mxd9vjqWymg4pDr1oZgVK",
  "key36": "4ET799MijxoF45cEUWwBcQFW7Qc5d2T4Xdox5cfsUQUP2HuVtTKWzHSBC5TE4YUx6bYnX9dj9xhs9c7Uxgqt19L9",
  "key37": "NkdTXdpqc9ddAZiVDgHYctLL2ada1zFhktrfFLsAEToD9xf9xj2xE6cZPzWhJ2Wm6GPMAUh4povq71Ei7Z533q8",
  "key38": "xZhSf7Pxk5HqhKDvHKUMjx2T6s3WVaY9BQJsQD8A61SHJZfgfcU7VD1jwbFi42j8h6QsgJY7GYQG586mtaAuDVm",
  "key39": "5AFpwHd5mFaBbaoHUNvEimvAyUJGhP3naa1XM5tLVNnQ7SaMTRNHFk35sk5A334X4s7B8SNermKmgMNQDEtTGNW2",
  "key40": "5rxdy1DHfVbJm6zQHR37FpG6iPwUQQsmqVzNWBTtQDtYjPoFao6QBLmWHG3bDmiXTXxnXWWnaB2N1tkkUe28XnUn",
  "key41": "2BwtG6U5zjeghwd1816b5qfVhaRPRahxzwJFAJ2Wku1CB3xRCFGbY7aCfaHPpfvV6iK8n2FB21ntQQMhfHWoeiXc",
  "key42": "5jWYUwNGLc6fkpoQizprjB3Q5p4VPDnEN485ZkA42AgVBEwDmUyQYfr7MQ4gKrTqRwatXRebhgycNgKzZUqBFp6m",
  "key43": "m5Skj3FdFzUqC8inRFDY5BX8SFhfPcFA5f1creyT1Y7nF1DkUuVLZ7m8UYP178qNeBcQxGctuQaLsWGwi5NGqcF",
  "key44": "5XddhWBCw29TU9T8qQC8qqP7dqCwoA4g9hRD9XNJm3AetdgNrLWqSK3DubuWEYQ2ArT8EUmHFMJ1P7iEr2y873xX",
  "key45": "4E2w7foAEpTHysuD3BHYhTXTG3ch2wN9TAAvWzFMVjmbnTDcEQNg2KWLRogoe2XBwr21cdhfKD2U5WnxrrEMpxwV"
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
