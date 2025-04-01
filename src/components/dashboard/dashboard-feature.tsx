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
    "4HCkYhcBiFSPe8z2tDSBpobjA22Nz7xhuJXZQVVKbe5tK82xvPKu1GdF6iAAgAyUi3jYfwRgZ3DJB9LzPnqjHU3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uvjYNRCVxGSZn63CWyeqKKrB3EGqoMMKuAkGTGop32gVT6Vo67SFbwna24vW7a8j696obfynz6Pa5oMjYPpzAyX",
  "key1": "3ek19t2aGne22368NnNqVHESeHVTPeboaFoVqnXHX2uBMKRN6KLkx2zmcXwMAGX7wZE7i9Txq8DxMxgPgTgoGMei",
  "key2": "ccAcg9oUC7PtJQH8mwp7b1CemD2Q1vZSHyxXyL7GGX7RfabqC5uRagrLy4XCJwiKnWvoRVpMQy1ypDcZ5ZmVpWy",
  "key3": "2DuJvu16SgBUeqdJ59doLwNtjA2Un73SszkomGMv5uY51mguvxWp6Uw4CMQSvWVdLrb5AH1fAiWahvwp5M7j677",
  "key4": "zuXHSuiK312bXRRzHzMBWd11TWRSekywkCeyy6nhF3RyGXprGNBYCDWZsUYqgemTJJk7uLn5MR8cuwxsmmE2C4L",
  "key5": "3FqwXi6tXVbjQpaF2zoJmExMhdmK9CD4Ppu71sHrx1McwpnXb2Gq6NHh3EouyjFY6in1xGzc3wJKsRyJrcGimnmp",
  "key6": "TDXE8zk2PGYbWQT2ZLS84SVQX5xDxNC8wnHRBhoVAoKdNhnbJjuPpD1Vdwg5tg6PWXcXwL9H5irAavKgzBEp5iX",
  "key7": "4L6MHEovxituVPJ2y2bRjiQG3RwGP7z4wZZ3EuRxd1BRW9Sy8zhCz3FgAXsGrtRcEYXPPRVgeimqWK9FPXrfXzix",
  "key8": "HhSBxEPQ578vQ8eFWwEn2o43SnGXWy3ghgHtLGYquNtBufDge1TPybvv6wp1H1NCuN6BYp6mvNtQwGmQgEFUv4B",
  "key9": "4G3kR11YaoCN83tUvJTBMerrF1nFu4LCNqxEzE7rdNSVVU9Fokjo9Sx816v1tuzUCw5U1r3yYLM73vbfcFiJZQV9",
  "key10": "UhZbtQjeR6rApgbw2NJ9ibmnZUwLLTD7QFREQ26WpU4JTpyzxkxzuozLwH2c2HVNSS4pRqR1Kbvdr4QZGRFfZtN",
  "key11": "4rZX6KyNyJtHV1ysVNYabrsTZ8PnCRRsWBuxFwXBzDMdHGGo6JzaBRjMXt1B48emZUd7Cz6Z8daHGdYcVFrg3YZf",
  "key12": "3HQihnAyhKLKuvay9BsSKKpivq2uC1e5UryiJq9i6nKKFiWn9EfKMgdmBexaX1BeANyM34Gbif4VPR15k7R8eLCM",
  "key13": "2CV7xn34LFVW75h3jSHu24XFDGNFgTWVJXjkqTeh9QgvmiLJ7w2wfCGfJvDnZaDZE55grpkVYNsG8BoA7k3GpGEd",
  "key14": "64eRxaD2aLQsmC1gcFQsngegBukkmedg9KXWoX3NrngQJBuckw8V5P16TEparjNJK3T7oYsuPxid8Sp2CV5341FT",
  "key15": "34HDQLAcbgqvFydrY54HJ1aDkH4GcMR6iMiAaYXjiEWaKcPFEKtjwFz3nQz7p89oLuooQ1Rj8fLEVe7X1KqMzVqe",
  "key16": "5fKL3w4Rrvm6wV1px9arFPfvgoBdhhKJ2PNPiei2H5Wf5NHJbFCpLXKUUvdWih42bcjq6bNCWW6cjf8VqS48TD2m",
  "key17": "21Gp6Nq2eJra2FwKfAgjhddGRxeQGpFESjwcZMgRewN1E5rUWSb3WzpK6wqooPRwn2tYKzcs6qKohJWifNMzWJqq",
  "key18": "5g3td7HF4jT5cKA8s4MMvAmwMX9DTGTHmBA5642BkC9z2A2wfLjMzMpCaJsvdFzp9uuVNdo2PCPhRHDmA6tak8uH",
  "key19": "4cwYHAEc2NduYW2gsYtWsDWsJYyNAuL9Z6haJyNhs5XeHH2Mtyno39uDQzGfLn1VQP1rokCUPtGYEgV8Agg1yufn",
  "key20": "4tAT6x5jFRDAQ4z79EiMV5Xg22RqpAb2KWNyo16ipyDU9hgu1wRcpPUEhzbNDUcfKfLZ7keTx4dKjxpQPjQfVLmM",
  "key21": "TL1BKQKnArnhc2K1ike9Ld3AZyuRspkJHfz6QGVEDBbWhKfmwJiAx2xpSGbj5jfNe9LTyHsaUpA93hhCPQhhrFb",
  "key22": "2dpquDkvzJWcRSEHfzddHLiGJ8pfNQrydPxp4vp3nyXz3WjM1Q1BANRrhKjED6pLgedEQGoczmETvcgB3FMbySvm",
  "key23": "44uHj4bSqpYsUm4XDn7Jx7rBpjdQiMgqYVi1gxN9ZCYdRkjgsZvDAhvsjUZhGaJUufC4iE2uToT4PshC9sr9yoXv",
  "key24": "4iaiyUiSaWukvpbXhmr2CojmXkvCuP5g9LmffhqToXsGurg8vHRC19UhVPSgqhfejkqcVZ47GdVcctfPcBcEDSDe",
  "key25": "qz1vZ5MtPX7bZQA4WuC53oNt7LzPncq5h9qVay3AnicrC3x8GTcFKkKc3MoZaL3iezfpsJBvohuM4FxWYotiYrb",
  "key26": "3YDXnVPqps1G6Ebvm8PTfGkKkq4g3fpkrFVCp8mFZ7GfkvtnhaNNTR5GyijcN45YTG4n2juZVxETdZiCBMxFutKd",
  "key27": "2jwRbELfmAPxAggaMCvJfdXCscJ9P5am4U8dGiXsMmCbbz1VotA4hoz6d9n9Js48YLrwd9MaYZVahvLSafvb75xz",
  "key28": "2Jfqw2BX4r57EmVTcL2mP43gvBtPHqFLmL5cjeJZP3JqXy1idPmhtvB3FMg9zhemSra9kkZM8Ke8VuiXvnWsK7Ps",
  "key29": "XTvwP8vCBSSBfpSr2grKyQ3EQBCCETg6QcP9P3F8ZKXHjztyPzHahnijYVmWGEmbu37aKwZ7CpygSjHDeviwnPj",
  "key30": "4bt5advsbVsqDJ6dP7cJm9Xm73vSCoyQujhA22JzQeYXwcLwwWFUEfbj6iGAH5ZWW7dciDYWWjrqf9quZ9shNuMo",
  "key31": "2o4STFr4qGa1zcm6wjSAhFbRqMFjCc3oCQW191io7u5NKC6FR2JPUb8EsDNuq7voqbDVBDzdZiqEtXZT4CdUEUSX",
  "key32": "3oaRan6Bn19K4hjY7BW5gKrJUjXbnKoDQeXMG6zFAiTB6vGJGxGe7a3dJvzHAdWq5SY69j5HBsuuoFGkjFJhc6Rh",
  "key33": "4mJqFENpLAdeZBeLYdSEjeFsaz3pUUt4Nwo9EYPKNnRLYkD8BHJxKFTRtKgyx3iqKQjieRZiHsHqWpegjYxyXXvY",
  "key34": "o4xACe7rNv1G1d75UdxqenjidYcvdnbsGARGUcPqJ6baA2i91NZyfaUBdb3uouzAQJnoXbsFzjKiF4V6wN3rRWy",
  "key35": "YzfrcbRpZC3HadtNKHipeTx37scNGivxfa1MSBdDfSEPvhKCoCcasRUztwvyPvcxr7LtPvLwkER8qPcmcqbsUyj",
  "key36": "jMq5TqyLZHdmCQQyosxpwYzBzjf39kwLuYtJ5wPwPJRcAsn2aHKD7tTVSPSjnfTUbjnDQMAPdygv1RcxPKQujvN",
  "key37": "2P8wpJSeyxmV2GvR8RJtrcfnjren17J4ckt9PfE3SPHbLNKCWiWCfFjQG5BtBe8Ya8sfax22bVEmX2WmGMEz83oh",
  "key38": "2EW7ysREa9iW7qc78abvNNS3FbDS1uroSa6WXAzRCtw3BbM9mymL3JsiRTD8zMdU1u3fPJdADSzw6CxtTJt7Lagi",
  "key39": "5BdsaVry6f2Fs55hyDvSc8MjD2iuxRfAATLe9p5epXdnVNEcF1my451SARrJCHyPkpBdaEgVoRSVEkxemihGqsVt",
  "key40": "4r7QDU5PLhjtaGf7HnMw1RKDne3XC1cAA7Ety19Av9tJraepoLrB2FCi7gNmf9UxNYsKvFWLmdjckF1JEU3uE8oU",
  "key41": "5RuEz3kMt8q54P2nQMrvbMK292PAtvboMgtdMzSzezRBe11pBmDLqqfmBcxuUtXzJRa2HP2THXaU5oQMN6V6Xvwy",
  "key42": "5ShEGBioeYhPaTcQyCjdrgSd46vX8fSz1opPr2ResTYswfEp7QCiU7PS3h3anSMdBXxZSxv99g3wHqywH3jBXkgN",
  "key43": "5LxKzDCXz8qf9PriNrNNgDZMCwfscH6EyHxPSat2u2XkunyVHgQxwPD2ZbR5jxfYwfCTBqGsKqE4EGDzetgy6Qe",
  "key44": "WfwGPWXG92CTHZqrGdLJdncg499TkgUAgT6b9XvNDHcr9RdR2JbY6XeivyLbA58ecLf8PEBAVkNdrSgTUHt6f82",
  "key45": "4XnEUFF26jB7SimBEydwfX9bvdVVRi9yNXmjZ6briyLr7wiaS7p4C1GSUb16635ZSxzeBnnf1az3qStobykibF9h",
  "key46": "48qLP8dXharqcxpjgt1veQAr8dAfonGpnPNB5NL4CDV1y5vsaNt3pvpwhZwjcjvNdtAV3qLss6DsXKnV5g5JsMHk"
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
