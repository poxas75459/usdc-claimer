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
    "5FM6jzmcKYWzG3Lfm3trLxRCzBhJUwFNVABGyofFAkXZMJUV5KjRT9g3xi35ArcBAaosuzXRc9qY9Wo5xqwakz3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRCkBxJ3NsUe6h6piPv71MffdTCTVX1Kax6XmbrchetYtddK8SqgRbV6CQyifgWuJvzN5v3GwJDvs2AjRQMejXq",
  "key1": "2sKyc2TyYUvqALAgCMBC8WB848aPmM6EdmMyQE7WhXTgfV2AnLUFzFWC4ea7gJ7Lg6SuYGLedyAwo6zwCnhnjBpe",
  "key2": "6m7vq8RDhdrHgb39Gk5VpYCVdvbL7FN5uzWpbG3txwpwJAnhr19szAbjPb2Qht1pB8g4mpGya1cMwUfbU1T6RRw",
  "key3": "591kPHf4iBpoMjdG68ac9bWNcw8sNHnbkPAkiFP6CCeEpddRHDWsSptg7SpkL84CX1bpji4XafCtbYNu46nFive5",
  "key4": "4iWZyKx86evAWho9zSLgYWHoyEcYrG9ErXWmmvoeo9QdnrtuubSMrxkPsKR767i9bwbJqHkPn2fVwtc86b1mebKv",
  "key5": "59gSgE5A83PGsdYWKhToMQNLieP1iuJacRT2fVyW3qze82FofZimUwmGeLS56ixhuiKMznw8wriawwbsUXSgpueQ",
  "key6": "JCtUtf6CdLU63wVw3Y9N18yzafkzD9HK5KYqniV6JyJENVbdzfxsqux6RXHjvZH8PyuW9m7KmuvZjMfMEWsg8Yv",
  "key7": "33gifZNFVP2FTYirzJczjtAF5Ctz6LBg9118x5GJLSkhEkZyrd5kCq5m9qVs1Y7LVJ894rERsFAwGv2mJ35a9UT8",
  "key8": "2kXUBaDn1NQUgPeeA8QX2VmNeFzu7GufUYs2fj5EvkLJ1uS7mbZRvET5FFVCaBNYMpy27rv3kd9TCnCJguTKVa2V",
  "key9": "3uJpuR4bYfA53TAiruj7QJL9JhKFLgHjngaM943dfRaZ5gdPfdv8wCKvJJcqgZeQb1tUD81tepdJcxDBxFfhYqrr",
  "key10": "64vA43Unbs5ZNDfPHcL5pH1JwD12ok4zF3EFFt6KFnyQA9dxZCfwcaeMTae27tLD6DEzFwmXP3hLX9CjAtJ1LCi1",
  "key11": "3Yw6SpQUYYJknZoHJLbTGQzxwZ8ZwZ8cLtfW8doboiZWotX7msx8ZGZkDfUpj29m6jru9nByhFwbaFvNEPD7k3sw",
  "key12": "5ZiehdzLwEVcunp3eDwETNyLn9Fwnsi6SJSYkvYJKAPsS1sWQqSoeJExJMqP7ViTPR95jRLyyCBHgQX1qGb9cMah",
  "key13": "5DaYxRX8MuBXpyAkoacLXkid8xtKNcEFD1dURFZPqaNurawcAiSL329Yy6Gjz1DL9HY2gCEV7nNmGLwiuc3AgbyJ",
  "key14": "4dTW8CA8zEWYz4iHG5esAZkX8UiTXuyzcLwTyNBDfSVKziNFfpLZn2v3jyC2svRxCSPxVdawGzFN7KjdEmqEzoMF",
  "key15": "2uSah6BqpjAnLRVf2uwgMTyVQPCZMP54dksYWeLZtAS4zru2MBGyZmgE8J8XqEDSHqtpQ5PHQcKUt79gR2v2qjt5",
  "key16": "baDUMNHWfnFDodJkE6jaUGc4GCitW7Sht4KvVfDEm19yy6pR1N4D5doETU9QeXF9vM6bQApJx9V383NLrC4hZY8",
  "key17": "2ufhSCqkh2bK6gnCfi86mge69dyCx37zANJdo2ok7YxGnY5jCPJvqvp445vq4CzHrRkpkRZ2ErEomZCS5aviPz8k",
  "key18": "2pCuBkDHNYSBoi7FDaZmKw6byAMYw5aNLmRxGf4UJyx9x3mhzYwShTa7yZsFUeR4BaEhGbBWkeox31GvcAAMpJsa",
  "key19": "3UeB8gUpoAQpB5yw86uhfNPF8C5tMHTFyRSEbiXm4jgKTkbNGYrX3c1URByuPAcuwZfDY1gNZjtQtB8HHcPh9DUp",
  "key20": "3D8ZQxi9RVamatSzsmxcQ1vRcWg44BCXqBsNDmCU8KLGasum7Z6HoJPBmynNDJs1fzHh7YCqHLFxb6W8BUfnMkm3",
  "key21": "4gsLxBLLMyXqRq4wgPDnzzp2gHN8sdDs5dTGadV6sciSJ8gKnSSsM6sfVBLjsqpHmxa2i3jZuhTnkNiYEagDn2mh",
  "key22": "NjH6hDKtuUKpeiCjyWsGjZXBcAK3eQuALMPsxvxjNq1DhP1BxHxWoQxgHV6kWWws9LXZHjXDuPBsGeQFjxAbSHA",
  "key23": "5e4mt2SsD2MFTE1B3u6JMtGuSymiK1xAK537MyAdzPC3kGMGAhmjrBGbwuidzudvF6m7nKdaZi9jJJSSFGRCJwLM",
  "key24": "4xdD5uao2a5XZPJn3ktufkFZKJCfbCcYUiDurvx2o7oVvkaQpSeJWthdreMCtmABC85rX65TvC2YQboJyA79q9i3",
  "key25": "tXonBwnY37R9J9mH7bcT9qykWh53ea6bk65VRhcmT4WeT1F7RyiWhYKBM28JdcVqXSBnh1Nfjg32S4pcjCTkQrF",
  "key26": "4fhV9o9xndsg5tCTp6vUgsqdvkbX7a53kJSo4brgUuh2a7FaX1Sukq9dUxCSpqCoiZjtxEmHGqxkfyD5DxWvKg3L",
  "key27": "2Gksq1CXBuZd8wzGGtwLxDZ7WtuYzXMau7TCSZeybkFta9JpA3vnnmwnomRYniKWZUB2kkGS67FyaG1BqrzetPKp",
  "key28": "4JKnvN3oK6eie3ovuyeXGtDQEAKDhEoXtHdhPDPJJUK6w4V8jfTZFTucJnk3mFH9inChuGg4UzzLdwMD19iknKSB",
  "key29": "59KHHJsJZRHTmJ6yBXsrBC6BW9JKTGES6Qkyj3mWN4BAf3JtjESAomm5juVyupWSYLmLG92BZmQNYE7a3aSMz9z",
  "key30": "62Gn5afuFY763ivUZ66azaA4RTQUewvYD1aWv2zxmTuYE4D6d45dVnhQcrScXSEiDVAjuiXnoqGNuFtQ7RtZmoY6",
  "key31": "43dsNQMyqXcNQEEn9b3k9VEQ93NjybbW7Uzcxm2T7Wwu6s4d7uJATYfb6uiet9TPi2UCBD9vYVGGrJNsy3neXkr6",
  "key32": "5BFgzAQzv98WzPpUvK6LTvysU6BZ3xzkTytqqAPsH8xDyLX1gJtMRGkimbHjRyXQvi4jM3Vjpknpozb7pqKrhAJq",
  "key33": "2PZgUi8WF1e3ddndLSQMbWdUnaGtP7rKe6kr7fDDWWNAy3p9TVLY2qtnaw7YmVjLEm8NAh6jcACPHevjaRpvapvV",
  "key34": "248QNmJEvdbBB7RvQeHP1rF2PcFsR7xCXkd6Ur1vUDmEw7J2wcAD5BaTsnB1KxJ4ZggF2no5DxZj61fqsKr4cvPK",
  "key35": "3spgsnHZb7YfszT28b9xvn2AvLRdZ16bEZrjykpNCoCZvSgSEQ2icdCtG3RX5EbnqbmuKmAiZShse5kiUFw7ptnb",
  "key36": "4ymFzFBKXHGnjydQSmfAHFZRu1Rzqqs5dWirLareavfAP8FKMzyM2JnZMumRjN1ndF8gTdboMJFqTP361Phb6PWe",
  "key37": "3JdygwJTJfMEQ5W3Df5AxMG3QwUftogg75zecVPCGW3E6TV3dHonsZdP9u6cWZTuW979eycRvhHPumsrbogGegR5"
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
