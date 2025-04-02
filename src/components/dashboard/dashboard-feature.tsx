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
    "4gLa1vpT3mGFGK91XveMUcTvs8jZwncNekVipYhqP7yBgd1g3xZhMPwPfyD16pzE8x5mx51GZhBuraivgeuYewFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "417fqAT9TvFyyGzvcAXUJFNtHfcEd8xRLvNQBo6AsiHamzfPBzZpsAATpnkjQ3a8krzbKZ2utzrfSFZEwSv9iy93",
  "key1": "4XLYWm6F1xFsxQYzeCPc5zbkxgKcsSGe2JiTq2zcEDqUKEypkbJ7PSYTUjA78NcqqFQYxwJeYnsNKTrCSMALm4PJ",
  "key2": "45S5nJ7qQ2FYi7rjkDKqMTi78uzhhgN8tCrCiEtSXuNkZzviNgWVNadr4yXEjbSKXkH5N2CsHeLP3R6TLVjJ2wpA",
  "key3": "2XbveztgevZ2TApogkxS7ZzdJUHoY9FT7XskukpJRLSpZZqUtD9xiUKW7TnKGLGhXz6qeWTe96iHyGGzrkeZrnWZ",
  "key4": "49nVAKqYUnQYekQ1mL44j8yxFojjQ8tTUczNwHkzpZ5fWSLt7F32jaNafY9B8m52kNBFzRXbrv334VrmifEqMqWm",
  "key5": "2xkzt1LCu2ANoVqHS7ioFhcXWhEx7Uw28bCsyBMeQZYBRsuaQirM2xmuDWssHPus86qNxiExxEQGn8ntGeoeUUvN",
  "key6": "3HD4X6245omgo4Qqa13pt4f85ZFcQcdj9LAd5KFFfwNFcqXnge6MgNmQ8xC4hB1ooFkSmwTt6EoorawQaqBVEGPF",
  "key7": "4hY2g4yJJXCPUj8q7dMXZnadPTq7DihTk6btafRUc1vpri8Dq47gZqPPVF125tksekodhT5aBKd6q2kJKoj6raxJ",
  "key8": "67RWHSMt2uvnkKEn6WaZQAZdAzQv8F2fZG9AjczvMaz67Wd9k1Ee6s1wwkdM9PHzwG8SSscvi2CAi2GbBHY9HXGQ",
  "key9": "5svXCSFERaZQrjJNrS6292B2f1Ls1zeo5iofonqowSi45UdBecamuVmvGT3hodq8v8wVm34fPeBDNNgscbNUa4K3",
  "key10": "4jPSrTWYCMMWzJuVosuYKeSaFEDDf1N8NN77tV7cxZsBHVVXuwqziZpvac3ibNfP7z1R3uKoxAG8ehmRUa1ze57b",
  "key11": "2X3xkSwHPucUA4gfoioL7QkrWM4qGQrnGNSJGFVKNhwyJKEqVu2GEvjwx9x668jv5zQpvUMMjUgyQ6c3btCQmSiL",
  "key12": "22VE8pdeJCfj58A4Gngp9ayuAcZsmHG1BcZj6BQuVhWqfngVzMcssuhke9hBYsxTdxPYWRPGpJjwDe7e3zoFJCk5",
  "key13": "5sgWfeqnnaxt2RhAuhWDp2uf66T4JT9F3btVeoSrSAmYVgfUWP7ct8BwKWmZy2vvdeApELutV2tPk8RjGi7JbMTN",
  "key14": "24zwML2rNnVXuu9w4JEQRUVTYEuVQTHito1RwxuqLN67J45G7b23S5zMJHgvN7eca64nk75MqQEccCEFvpc9BtLN",
  "key15": "kLDHEphhm8KSiYiWeYmnGTba7YCqaoJdaNAupTS9UGN66v4GqsuZ3HJ8iiwRt92Pg7qfYz51tXt1A6b94FE41mo",
  "key16": "5Z7p9CsXmDaKn3qgFtgF4Pv51vSRQz23HPQyn74qvLs8c88pgDSZXCMKfSFTBpYxBrKpCSPQi9SQnsuf5FNm4ecZ",
  "key17": "Vh9M2JVeLpLHnGitCfxoCrr89rrJ1ExufKHfqFi52pzcqaRnb3Y7ot7LY9ybnw51rz84XMUKdajhm4hUuD7jRZx",
  "key18": "3C6JgMWiouMe3h34pVgMsWmwSHUTdgyAowQkppNb74rYzJ32wuVSGNZfA4qQfSKn2u1jRqTUNingKAQRPt3au8yi",
  "key19": "66GaBKnKuexNGnVXyexUg83tEjbDCAAWtr35bJqbPxmv8aWLXbZDQVGVdXoANtjFvu6GgHVbJsMj3NN8dw7nW3N2",
  "key20": "4vVRczrzkdUi2EX9Vf4ympTFsDezbZnHXFxxNyzzmbz8JDRmhEAjR65gxzS3DEuCcrRk8jfCvEsY2GbXGvWr3ieG",
  "key21": "2U3zpBkfHU9FLD3Z5gBhbunWs2n8BWNEguB5PgXRG8k8xdHGNwZr1o2YFguUAVzsRjNL3Exnj1Qc1erH4ed1m8gG",
  "key22": "5Fe1wyH3rvDu6yBmiQvYxyAtHA8o87vmDa6DVtJxL8hfg8mY3HLaGGRBHd6F9xyaPgeFPMygZ3VvWKvwzKmw6z2B",
  "key23": "43UriNYPcDR7tVhx1MG6fq28CsP8hGupChzhmcP4pUvLumTfHjvWkgoRsomzFaLwo5Q17B3f5wik4sFKGSA4yr9B",
  "key24": "6795uhCUk1D9sDZDiYds8kr5hNe7mNKun9DAvWFDa2DYQ7GaUnx7HDJ6HqmQyVUm6r4Acx3j7TVyrrxRpwJtAwzM",
  "key25": "29nVv2u8e1s4E36o1UTEkp6fdoPHD9GMqjvt1826mUDEzyQSVggrHHShHzDsAKdYhTEUvmoJNC7tovFNKtL3uSB6",
  "key26": "2CgZazEYH2D5jnU3mrrkaZt5UTcAhrKgwa8K9DnV4GepntewXraTXXZUtvfwZADs6GNtfN1GkzwbZt3qKcvAqWZM",
  "key27": "4u49Q47um3tsaymREu6sHpavz99LWVqgtDrZZxd6qXquRdAsyapz7tokMcox18QPC3RBniAHxTpLVCTDiVWzothB",
  "key28": "5q5d71DXfQtTwzzrG4DKnQUR5kpWF4LpcyNYkukqqzGcATJBDc2WXSf9fWsrH4B5cs4pawL2ASq8vk5MgNqDAK3v",
  "key29": "2CSw6idpqtYDHLxr6pZgXGUWUs4tqmHVEP457JUyRguyBGpi3sfpKibdaDA615tPKqvBUiZctuTfczgFG5EUgfRf",
  "key30": "5HT7rKRUPPz9USnXh1QLR7hL6BNQhNVtt3sMHK5Ayr9EJhT5gNWFT1U6UdtJzypTPYXB9ddMhUUnVt9Nfv4iJVV4",
  "key31": "kVhxD5hBG9HipfqUKBjukMxiD1V41BQwUbPWUhYyvkWgscVSRuYfZidLoCy4qg6LxWNEe84RruEkNjjXRdH2dHs",
  "key32": "4XgJ5WraiXkPn6aUbWnVG7pDmtjwbwVwsZrUNjGSaXRxh62QfXre39YWquSUyJrB4oAh6C3mcSq998JW9E3u2R4Y",
  "key33": "35wXXm3nq9w7SJApxM1BcKzJ8FKi816yE92Vx8andRHAHufawRNFa7Xx7fVGWrdkBbAoPtRAnsLHb6cVigTQanth",
  "key34": "qvQsvGAALP9DmwQfyNSy416Da46KKP1pxjreBrKPe6n3SYCF75QGphnJXHs7rFG64VxedGqb5TY543jXoVv6QEX",
  "key35": "4DUrjDExu9ggNmUf1uPstWwRpUzsTZMWXf43jTPVxGFDH6G6vTaAnLE7995oijojCmJDEoJtwKxJ6dNMGRYxkGTB",
  "key36": "2XPo4EjSnDXhBh8Sw7q8eW2dEXnsZ2pH9fdTjT1npJGW4JBFhqPANhMWYSzMZqYvnw2epcqs6dpgMixyzNoEN2ma",
  "key37": "2PzyW9ssuqyTubdjViYcZeWx11EhFd7xWWbr7qV4Kh2td4s7jEYYhqoja2ezQVxAeLuC6vE1DUr2fSpnK26JRcUN",
  "key38": "FM66cacQg7tURqb31YZv1cgVoq3CihjtYcbx1w8JyUi8k6KEsKdWoyEbXe9Mg8y3haLcfC3mqLwPeL4RQ2ka6nd",
  "key39": "2NRYAqMgtsZPwHtu44D3jPoYjxzmYTgF8GYcDQpss6GGzEFBURdhQVtSkV2Hgyu5TMjm5AYSZ7vkGAaAMNDtDCZ8",
  "key40": "634BAD9t5UVVZrro3BZUcTtf14a2q3jomzEj9AQNB8xTNifTPquTA3wuYSvZSoVtakDPrW6b4kiAW3RPcn3QBB3S",
  "key41": "38t1vj1fLsyRu7S33AJvN2xn5CziC7ZDF5xuUJHgQoJ36MKd8jXk6TBYU9jXBwyVV2KzZh93Zatf7Zoze7Km6Jee",
  "key42": "2jGcBGkUhCdipTVDsSEacf9T8DLPvR3yEhAwXSuuJjUn3FFNG6hzNT7goib2ZsBHddwVpPXDBbGYSSYe6as4uE9E",
  "key43": "3skmNjPGNnqJ5PS8Euwb9z3sU1a5YCh2UxwqDNmzoQ9FaQXnBMnWU78PKTyz9xrQW1sWF6YEAQe9sEnVbsWs7Ahd",
  "key44": "jMHtMXmAQXScy9nPUc2ggJ8wZzHHjc1CYWTGBdwDsAvt9FjJGK5nF4Nea4YdgJjSrH91mKYFXPHHRH3XWHjKBst"
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
