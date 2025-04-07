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
    "fLxMnzUweCRvsoPJZerbnS7e51ZuRs2KQc12aUFca8so6YB5yFYYFMdvx63JRfvrnJc92Qtb4kPw75NNr6Ymqdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iAy3YRRjJq6SiFH1ppaYafyAMNAURBMuLYhA67StQuE8xsp8YvWUEJHbHD5Y7XXP2Yyv8sNnE1h2GtjXugTJxVw",
  "key1": "2B4HtmbA3bfxpGBv1MRKN5DxCyw3cFE7bvQkcePRtbQFdzoLfkSkKx6nUb6NYhcFtByWSk6mN9SrvKbuHCvcgVZV",
  "key2": "y1WEMitMkGuvXohqWa3crwxh9syf5FAKTSaAFJ8WwKhWBbSWkdtRYnQ9A4FPPXhbm3UdGkRgWWQyTthgwMyKcPi",
  "key3": "2XD2YiMK2mTKSbiAt17SnNc2DfG4mP7mrUP5FrHxUVEepxJHVuSVGDUpzqJ36uAy4w3RUcSAgEdo6XVKVJ3QBVzd",
  "key4": "2W5bTyYDyDhXLggusYkcTEmvZCxPGCQjt4QPMhyZwKH5bUAqco13snPGggceF3Dv1Jjuo2DjH6CHbWvGfDUMTUCt",
  "key5": "wwo1Az7QTECCoU9CjcDyichnhESkPhWD2W9ks5dcRwv8AsS3ajiuwsDszGPNsbvEJUMDKfjwCQ5CCn5pguivmFk",
  "key6": "2MK9WVLceGQ5KZMnCg5nnXdrubvJUnBS7EMyvNaDyNYs7Vxjh9G8udXs9U1pSfCMcfXNzatP8PtYUSKsdwQJWgk6",
  "key7": "3mRyNEK2oNCtrGrGnrkp9DMNLhzKRwf6jVu4XUQ8c9jrtfRpaL6is4kbnyXvmuHsSJbQNUej5UR2NDd1WjPXsMMm",
  "key8": "35Y8WwkrDeaYyzE1xB7kLxEajcGkaa7kBP5GbB6Br152K6shYThA33iJCSkXebtjKNSciAV1bEgbxHX5gksokydT",
  "key9": "3gdPWVes82h34KnsMw71tk4GtXDmhg32EqDJy3bbPKftEoKWvrwUo1v3gwekfPDLfhkzWN6TfqiB653FtYN1E2M",
  "key10": "4rZGCXBANacB5xGQBjugEzDdSQhfkG4QvFipTe3kiUFkNjvRGRWegQUSbLDAS3vYmuyMkdv3kdufuYF98sofYAGU",
  "key11": "5RFX53hV8hQ4R8PGrg5RN64Jn5RKCQ9ShGfxhGRzyD3xSnryE6kuf337PhfCah3MZaGWALTzhQcGTtCFYp4Mg33K",
  "key12": "2kN6mkgeNe48MPXRJdsnUhZSRxmEoEag7SL4vQR4E8t2p37dqx9CP9wucSNpQpRcZB1QGr6GFpcvGtPE3B9MKz8G",
  "key13": "fgUm8ZWD7qD28VfRJSZnwL2776C3pvpRDXrKGbDXdChrhAebVzTNmsbBcwGy8enoNFKttSwwbSjw7PyXBnbTchf",
  "key14": "28TpoBHNbiP4goZ6iW23TJkuP9uyvdtgBuXpRCgMXgum8WWPZUroi7asWeufSDYkjP3TAqad7GH5LBm9HxsawsxM",
  "key15": "3RVowXwmVMdsvd78cFW6PQyofQhjni1K7bVbckh1xcQXqmpvoLCspfKMjcBduq9FAEUdKgTvJ4Fdg6Uagx3Sbnqw",
  "key16": "3ZmYxsd4kqA9ag3cuX6PCyViT8fFqoBCkvrFQ1FxnCyDYnw7KG9FGGFQ6CDJkptJAx5Rxd5xxVLZ64LKoWtJqLue",
  "key17": "3Kuen73Smo8aZfeC2cU21TFvz2wkeLgZV4Z9jdSZSGVVcAsPvbHTxZVQJEopwYoCWotdWUQ7CTwGfjwMpnxv45gt",
  "key18": "57tcAj8ANnkqArzS5wg9uyerE9miK9GPQHotXiKNMM34zfSwqgUTmhZH4XHFkvwG2VudYerTgRVgEpSJghFS3aps",
  "key19": "5kNPd8oZrUDEE7f3pKceHxrQEUYCe6bzBDaqH8Qw1EagUf77uL4PviDbNTjSvLtMUrEF56PpY7jZvwQNPPGSRmvP",
  "key20": "4RhaNugHuPPMFim17tXsVFiXkgrG2iZNk49gftY6RfSCsAKhN7HM9moWFhPkeoDttviBLDzUBAhQjwoSkBQpXqyR",
  "key21": "2oLM11pHKhiRiECDahwYy535BGjSXdybri7yskxruvHMKHLrUiK5UYFM17C8N5uGJ2xT7f8psUiHJMhwfhPucyQx",
  "key22": "3JWqZCZhEMRdB79WmwH5ATtTBPbjFW8MVjhgiMYCwec6Nwh7y7cxHwdTwuwpjqtPqZPS5x1zPsLrQDZxdcy4h5zU",
  "key23": "5F96MJx9ygC8trYDrLSNhzsos7yu7BVZUvtTCP2v6oUjNU9LwZZqhtZBmJtchfgS322P16CHvgPkXesQbAaRYVEQ",
  "key24": "5K17WcyEd9vcLMJTz1Xb22xbdHEtjg8k4S7PpdK1tis2hGrrAZeDdoqAkDcL7nR9wmwz4cSJu4Bw8N9GjDFGa3XD",
  "key25": "2WyLuQorgwf6TrrsKxkhiDMag8fKKt7xn93pFe9eHg1sz8D4yEpVMZE2T8rEL51uRPa17njsCuk7cx1q99CDUe4h",
  "key26": "2EvhAyCjsDELJbAokMai9DWD9Ztb1FXooCnHAQSk1h6Lo6hAgL5v7usL6Lr2z2pEb6sWmhhqXX3e1Rk55NZAu8yG",
  "key27": "mHeQjEWYVw48veTNnb59ahk4Eb3CpcGrxq57zfidCiDRVCSnH7DfjbTjMPbysBP2sFDr88HKfXjr6GTi1AXC2z6",
  "key28": "42miNmyMmQ8ryzJk86HurBGeq5qaiqQLGfxhRe21gX1noVwS7AEaWbvx3uAsZk7EbmvAUjcXPuMqupN4dqEdNJct",
  "key29": "7GSjsiu4CJRqtoq163Ts9uaJ4cAGDARRnxYKVjPY5a5KubHMjArzGriKLrGS5ddVvC2ibaE5iz4QjWftgMjf3qE",
  "key30": "2KsGafjDBjbVAYm9tkmo7kcvcmexnECt7pKswkbgBwAMT4G98AmxSNxS2nBpSGPwvThKNiWhFV81AyWBRqWYXDob",
  "key31": "3QWRabWMT5jUEyUcxp9Gu7bpWmEEg996CPeYym4jkeEDkFEx2JF8ZpVNbYTnAJBmE13RkivcP2zeMxALZyw2vvzr",
  "key32": "45tKDNyaYZxuKYvdzAvuWFGcQysreFvqQiX5Ur3Tu9YsaWPAB3wwgMQ9rVuV9JY2cV3SANPfXY1pHStGzbUwH8yy",
  "key33": "2LfomcqBc4KPiomxT5kYcQBd79N6MoVygT8fhLDwyC7EJWma8nzQkJyNWuRwiEhtrHgXgZhVa5X5nnFjgHzpgBcN",
  "key34": "5MfAUdbWUEKdeQxzoQXDCSLemsMSLzpWxNwYaJfWwXeHuH3HGShwUHQTMhw3AQas5bR6VzgDygYzvnWmgiKqpw5t",
  "key35": "4qhLVP94pyDkXehbGBZj1ArWXqycSTnPTuHbCiEEtPr7VkUxeg2Tv533NKiwmvN19P6xCQscTCUEBg1n8wGA9eMT",
  "key36": "REeiekah5aieBZmuqtkvdF9mBw1xowpkzZVkbvSVU7mRyLzTkRF9p1Hs747txvyUum4EirtWK9A2EAhn9oifNVV",
  "key37": "4TjfcRUNvEs7FD217XHyy5CoCVbXo5RJ9DQs2WBoL6Xp57j44Gg39M4wTMrt7WNn6QKFNHeJTDj4YRW2d3MUc2oP",
  "key38": "3aiPnqmvNawcKDh2ahC5CLUaWFxDnqsUQiHjtwXM95atmbyyme1kivX7BEythVHSFdmr4dYSoTVdSgG1wDhahvJ",
  "key39": "33mjLxMQarRGMrKQVZyGnKreiJz4Mb93qKTjM6eRi71tUq6mQJXjSKYmfXghZUpwk8EjCg3SmSYjKoWijD3UGjH3"
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
