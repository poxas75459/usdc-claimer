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
    "65EJjSwC9Jd4Doybaj52Xq1HFRhLStWerKVKQe38o3EpMewyh6TctDn45BSVpou3qoeDNhVn3YqitmSFEo5XkzMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nVqoS9A39kXtvtb16MSvvrGnNNf2QwYT8n91b4x1uraYtVAsigpTwDakez4V9mN77G3JyHFj9UxzRvAkt2ipyhv",
  "key1": "5JNDNAafNjEt59DQBuEkWd7VQXnF8TY5Ngd9oftdq9wkpHMBztDHyZ1AjFwv9gDwbY7f4ukr956oQPBjNWeowcRx",
  "key2": "4h6RxvMWzRjXyM1e5J1cRAv7nHYKmWF2FyUDwj4YnCerNv3dftQiN6Ek4UPpmefTaSz5fx1NsVSSxxrWgVTHD3Dg",
  "key3": "3Wc4XTpo471oGmEBSwC3qwviKbB3odHcMm578RJBNEavfQijiSquUKoa6822RjNraaJrN8gPReYqwwpXXQtrtjMR",
  "key4": "4F7M5LQ4epqbUb31vMgTCsygn6NZAY83MNCR4xYVHJLx6et6H96zQSy3MfMAd7NnFLa3gaqQxktHMrX5YKMki7f5",
  "key5": "299dTADuByesdquQTwmFtydetEQLkUrXLttzAu9tiQTtwVjH7kov3d188LEgkaZxdCmtmR7cS7Fbj6qnsP4vUGJU",
  "key6": "5K2U3fDVpzsK24mD21ntHpm92fsRgL53RhKVbxxJbPPofj5GQambnTdUfGwY9654n3VknQPX7dxsQgt3cpr5xoiU",
  "key7": "4B9Jedt94nCjPSiigEdjBgRcc1SQh3q7wUqTh7VCe37CFfd28inZtfzJxoGrb4gCoL8VLxR5VfqVAzx9aFBNFNaX",
  "key8": "51S6RrbEwxcNQH2JfDUhgC5qFwcKnVeF5BzfrUomcicQZwQAtUyFS1RyZrpyPeqzTDU9eFAC2DkX3UMKDo9ccd1A",
  "key9": "4zGWgwy85K9a6Hvorioi1iNqM18TWoLWGNqMvwn2EFRFjTX4ZTeH79hKhipJATKCLf4TTUGQhKoR7CRN8y67SYSp",
  "key10": "5fKc7dhQdTVedXgTtGF1iDHeXT2rtXFT556jPHRRqcVnwQ6QwSpRcqGZp89ajDdbudBAPw5JWAHEAhZiDdiKem4n",
  "key11": "3DjwDYuXTLQxXDvEKbtbzNjEUQRrNy3yyPqVmxZghYYcuoXWCt5rt4fDdq8XQ9F1BCVm25uSSzmh8crv8GAEZ4mN",
  "key12": "4Rb38y8biXav2knR8Mjjutzm5LSQTsRc1dq9UexN1VbjBKUqD6LfKkobakQDaonKcZBWuBDZYDQ4qojvRwBHBtUF",
  "key13": "4Ux5XbGpHKqwdpQjkDfZpbxtYNbM7ukKTUHgJNw4o6YeMLJLTXeoCmnAzF1LfrnkxEibyM6fXvAkQFUncfzeBgQs",
  "key14": "4p9gy2XffbG6iPyEAYYYTj5Kk75uPjqFMJCE9pEoQmzLSh5bYMkcZwSDJauiy84NeQWzftPbfqcG43aB6Ap747XB",
  "key15": "39kg2yHCMZP5bfutwBE2iDCMndLKnJp6B68QYeBYNeqfD4uWUitQru64D2v6wsWovrg4S8PnJo5aKhrCKxYYAA8t",
  "key16": "4hg877pSEcPxarumSB3dd864cuYHeg5JjfaFMGzYga2BcP4V1V5EXED13ohd28Z9VUvWst1JAjPZzQ5RAjU562L6",
  "key17": "3ai4tBR8hvkb9VkGtkaAMbHQKy5Wmrz3aRRQzQ9VHAqwY8vNizCyijLiUffQivCdTq5Fmdt7vfCMnMvwGHyqKCzz",
  "key18": "2mYgVcUCXJ2G27E7HTXRY4bYhNNVfTBYE7K2fN3b1uxJqLnbknWoDicndcN8aXDZMxNbatDsmX2UbftndjKWUESs",
  "key19": "3ahvGDyrg5u5JvojbW59GnQCp1W9G6chuMN9ZSas62eJW1kG8QV2tK3dQpCcnikCbJzZnm33mn2XguLh8Y1aT3xf",
  "key20": "124Lb4RPgeqoA1VUEJNcVv5hGfosoTXNiAbiyYDchVkRu5UAaCGHagLamFWsU6EFQcyjeNZ5BE6eWujE1pr4GwMe",
  "key21": "3bgy4hkZniwMk7NkjEbdzFLqiDtcFUNfN8bzQTuieaeVxs89rotf1fAN4hABScy6oCB8Ybv2LodFdUxPQ99Wq7c6",
  "key22": "2WF92e9dZDLMikP54UX1QgDB2CZjPXH8Vf12RXaW7DL9bwJv4hKssX8swySvuqgyXKrU661wascMzWBadj3JfX5Q",
  "key23": "2KhbuvF3th6XEt7m7LcF9VttukHU3di9cpRYyzUVCfLVBMWwmDiKrPwXBXkCWK8iU9gwEqg1nt4xGd9dM4HjBStL",
  "key24": "4uFk5KsCbVDqWrM8DVetnLjEydS6W8D7CRgHAMvKEoZuFwnpQfyeuGG6amWhmAdsQn97JeDt97Ny7p5joqRWgXub",
  "key25": "51XDBY6ZJTG1PwWdUh6UMW3BEx5DejA5LwnCUoGiPqtk6q2xBNghdSnTJFHCkyUpoBTHx5h2wy7f1LMJWBPUVGpt",
  "key26": "4E9Aw8nCmNgWWPBE9ysZEoukgM3Cbm25dKKqgbRQjD5uo5G8xDhrMGcuJcnVk2iHcpPGy58qXHMNSMctPbnwJKqF",
  "key27": "5SLozu6cdiS1HQNKvtLhwgTQSBmr61rp4LNbefXQpvGG5G2XcpkCMsY1yeb5vXnRsPvuQV8jc3sxBrifsNVmaNsa",
  "key28": "33fcfr4C2oYqEQqKY25kDj9AUAWtmDZNnpS3iCzhJ7oBn5Wn8GQ7N2CG4tZjUsEgA8GTgQTj1VC4ycuYma1iNhSk",
  "key29": "4im53AjCPGatU5nZCAr2rh3z8jtexADdf6QHAiJSbnaVXaWpnED5ozCRBL312NCZtcKVJB9W6dFjHdy2LAHCHwyL",
  "key30": "3HkJCP1twCAJ8bpoweokCPWnPNJUGjs4FHm6Uw987MGu7KVbgCfTeNDF96SYwMzMqAWbbttLR4KFqXJ1s7MmdSCK",
  "key31": "2T7XnsRHCLywhqsGwdN2gQG76uVPsYUxMk2YfdzduMC5Mx3andinGjn8zWfdMD5WFdsg4JscuKnnrNM3iQJmMcZg",
  "key32": "36XHjrQasQHgoMbEtNX5PQvYu7uXpGESHnJtr2UeTxs3UwHR1Y5GZbisJuDeWVf88Pza9KsfLbwx67hu6EJUgAZg",
  "key33": "2237kJs8193vkKJ6DPEkQ4S4TPD63Zwj5dsxr5hLRi8i88ZW1f4VR41ZtZA1J9Vz4Vy6vLyNihGZrM6VqcKUZR3W",
  "key34": "5ed4YgfJF6eAfj7g3rUmaR2aDXrdC7VYjK1KspfPB8gzm2Jh46dRRZzC9hQVpM7rywvhsUcynxcfBPdB2zh2D6iT",
  "key35": "5UQvP5kY7GbQvAouVKcsQwmuyU3thGUe6SuWRknaXV3KLR8tCwpuUQbCMgsDvLC4XssBCs9d74QVnwugrsJMbTbN",
  "key36": "2ojcwATzjLYaUD6iHeDM96WHzpDqaSFz7JiTDeCn7Wc6HqZg7zMqiVFaM5ebGujAF5dERghDsGXfo5BavWJipQLo",
  "key37": "66j3uSURncjBTF6akx52LYnQ6z7mQ4YAYsobCNkPND1idQtA6VWoPhDMWGZ7Wbdko9cKX31wxgjW5P6ra2cYc1u3",
  "key38": "6DcoiCNTeNvKeY8zDyEUCuUwHGmH27kJUcyfVPLtBvMf997VJsi2ssvSxEFMLujwVA7jEbRNW9k6fjPDWe4iTLp",
  "key39": "2wKnboW8AECTUyxeyhwNdnyRqEFCxRmoTu2WaHYCFaJKycji9wDD22PX8mibQgZYVJjhPeGASFuV5CGgSmAdpmAn",
  "key40": "3dDvfeKMCaCZbTTaGZvGkTDFzj4kaGBvYvev6ZMvG5AF3fLDiDtQ5GxUtLtRrtPT6mQ8aHHB9oTJyC66sj4uV1ja",
  "key41": "2jE372Fb77XVumPGCVHA1Aafmm8MKJyTpa4H2PkGvMFPNRrzLHEeLac13DhaQqAjG65Bdu5DSv3vMkbbZdLk99WV",
  "key42": "3DcXjfN6mwo2WvHvEimtCm1vAg8U4skat64vACaa6huSKTo1xFtsJWeCwKKUT7vFZvcGR5HueLZ9aqfcCo3wkqLR",
  "key43": "15Vwnnt9SYEerDSER6mV2JmAZH3tGB3MwuAZAy7RCNeL1CHK5g5n4iCnRZnQhFpGrnbFFxHBMqjWixh4JdY7Bzb",
  "key44": "2xQENQEtD1MzcS6uT2n9mUHPEk7xYuMcDG9x8rekCfB7jrKzpZ6F5MZLaK1VbWqTkL6Ezm3UGkq7HYeKZ8knwczZ",
  "key45": "5CDe6abWdNEKUd66HWrxComRPnqbEX9xRYYZqVGiTe1J5cwKYfPNH24tXYAQpNYgE1FZu9rpnvUHq36ccdRv7koF",
  "key46": "AWQrf8ppDQqmUeL3YEjwKirqGunWffb8d4is1dBFcMKZ1pfPLdxMiFZc53XcNGkWSZwNeGqFCJdrb7zfmKyAp1i",
  "key47": "5YqMCmqmmvm7J6iiVYqwhwueQ5gnUwJxmQNKw3JC6j9PWnfYxnAyZR2qAUiUFrmXJsnzAh7UTdK7t8zCrEFUsvVQ",
  "key48": "LniDbK3wm6XDXC2JaPbvdWnEjGDWXEzCPjN1JtNSaMbb4M9aL8yvPozNZawkxoeEHjWuzpHFbiXgUPgjYRurFk2"
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
