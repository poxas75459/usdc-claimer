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
    "3UUV6xQybQHjKzUbyd3SMEzdwKFnUisaeguVQ643qTGnra9kUCkUG2tw7pGHfQuZ5TffRN2jFUn7RigAPCBRfs5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u82o3vJHfb667J9GZuEgTHf8My1mTXV3hYbk38BAsV6uadX6CB7A6snhYkP4TtFpPvvggyYVmeiZy9P4Vv4Xbnv",
  "key1": "4P2eej6TxBS1aNW6dBk3zZx1vnknGNpfyniwxEVwSuioy3hhJuGr51GJ7286cL4PYkNHpfxbWMhegaYjEKcsQz6V",
  "key2": "2euTMEDV9LyocCWU3Fveu7oiciYipMjgYkjCbrxLx3fRcMY1ZULMsqNizPoHkMetGYp8p1DQvsMtdxvvdSxwnNpD",
  "key3": "2umFNPYUPjvJfX9vMMRRSp6McCCFAWHsA3nrvrdybovHQ7fRvpdUFt16sAx4pstdnkLNaejhVQJWSvabwHQDdo1C",
  "key4": "3CqeksqNGyeTTrSZAnqZrRGizNaGHfWz6bVSAgqFHryQw91GdpmEBJVgbbwNY3imJSHr6Yek5X6cyjba185Y3ykL",
  "key5": "28yqiK5Cyd7xxFBqp86S6HgMeYGQYMtjHe28weDkX9DHqk8Kpaii9FRD8pb3dJ53h3qSuhFTF5ai8sKwg8Fn8bSW",
  "key6": "5HKtbHePw8dSvmdhAvuZiCMR1rkcmpTj7D68QV96LSQrsyZ6wRxBaQ7jrNfP2GmRD8VvY467CE6eqwBYigwmjJ4K",
  "key7": "o9SHEYajYiauX24bagEcpyfqHimWXbZfAs9u6jxK8ng3XZZyQwUM8JsXzgkVVi4dP43hj2FGWft9r2fXBrB6Nkg",
  "key8": "vVhv2m81nKPzseNLhe3cDtPQUuZSY1jkJfVRSAtxpEqmUC94AtAeBcFjMnFtqF96n3BEufqRumnBWzK1WcChp6N",
  "key9": "4bAtiQncH3owBBjRCAU15TrxyyV3XZ9p6zMm8NbKaZ6ebbPzVvEJJ1f35ZKtor1qhzPfQ1Z8sM4Cc1hgZYPUuGkH",
  "key10": "2smG8a2yF66siuEGw4oNAKphuQNdgCFxZsMzxeE9Gj6Wzh2H5iQD3GuHXZtX1ezCJFHofB9E1PEfzt2jJoaUK66g",
  "key11": "4v5ubYFeWi6Jx79qJQkAmV8ciodXnsKpxTb6WLeqkAHErEcAGrzcDEGD7zW6qdF9XvPZG3K5NFfBP1EvEy5xqsep",
  "key12": "526QdcFhLLYg2i98CzjyrK69sjtV1uZw4TsnipPCpYLZ9F57JZndDtnF3F5i4Pr4ytaLdfoBojTvv4XHogw8yo9y",
  "key13": "oTGaYuT55MvPhrZ8xCn1BJxKHFxRPWcap68Y9bpNsgwwb7J6JQKbcpETGsEcizSnTY9sqmFsRzg8sYiSn7sqBE8",
  "key14": "4L98emmiCqdMjG2QvUxXfjcYfFsgBbN4FoGhKRkgAA1FnY24vLKW7Af9XpvRdrSqaAZnxfHq2eDujgxw1675nhPy",
  "key15": "eJ6G1sBAFpgfP3kUtY8jjiFAGrELq6apnhJwteTXY9GwJgwTHf9bGndPq26Rb9KP5KJTw48Y4nQEsgoEfPAVVHA",
  "key16": "AV1BnvJ9552UqjtjPb5mziuaAavwEu5KxHr6SEdxn3Ut71vfHLcGFNnWLHag4wiiA1GoXpMZ2zY1BkuXhf8RR8o",
  "key17": "2PdoXRZDsrVfaozCUpJtzJcBRUamZAhmtj4Cig93gVw1FbuepKiudvPBwqqHuABcT3dYF5AEZQQPFLiriuPhiJ6i",
  "key18": "z9axjwDvLkrWEdj5zR6kEgmu5paENwnh8UVgWKSEfx79Hn7zegYbFdCNttFFRLAMiFuzwpVFCACWKkcV7udG6Jc",
  "key19": "2rDax31m1pRKXcFThPUdFhABXuqQzzKGzXyYMd3YUKHVM1TELi89YQzxckpizTM9EGA7PbfWmYbP2Z6iz9VCW22M",
  "key20": "2chafbyACh5xanbyNzP3HtSQUwqm3zsJ3UwKK4VqP2wmSyszqFystzrV7Drhz2PBiGPk9TpnPWXy8PHSLXShtWuK",
  "key21": "2kUmvVVVJTx9RJFRKdhK9G9NfPLTN97EemdnBPshWgtU6K3d7YMcazp6JynxZUzkuNU69sBgVgoq5pi1HRk5onYf",
  "key22": "corJEis4YmsfPeejatRtWXQH825pRLpFKyeg9VcCsnkxtV59BhQtoJ6Kq4qW6cpZRAANVuGYQaDh8on7uFvFMPE",
  "key23": "3SZw4SNMdtBxT1iSBRFGamJGxf8UCpb5KfDAEbv68ZsLoudroSZtZgT7w5zQnqiqt9wUF1zTpaMjndoXKqMTs84h",
  "key24": "3mtugVp7PRczwCkWXrqKEjjNBR5UjLRs4smRazN3N2XXLGU686zu3yXmayKCr6Zh2RafRMZ3skFzcYeN9t5KyWdD",
  "key25": "ubNwj3CMVATefjYB3UxzfdAHKHSoEdyDVpuGPHUf7UYfezsNCwrBi6oGbs1Gp3Xu1gwyDiQzqk6uEL9wnYk3u26",
  "key26": "XD5a2B8UjfQbQQN2MVTC2D39hegoU8uSEDB5E3vT1D8B1q4ewWvvhtyv54r33o2NHWjKkG9BqCSrFeeM1bbL5cv",
  "key27": "3te4itNDaz9jeTBAYud5SPz5tDwoUjRaumyy7uSevjWJijZwQh1xaoY1Vp7T7zfxypxaxxNRdjAQgVXBrCuUyT3",
  "key28": "2pUoivGeAwumcSr81qJpcLx9yuoSwy8hjiNGDjoYSJ1KrV8AhdttTSxzsYPrZmG4cUZvScSD4DH349ygK6DxRK1C",
  "key29": "66tuCUWyMkN8ecwDKzrCdyrFgyeTMuRqi7yRtgijtmmeioWS6wauewWKGxzvc74faRMsv3akqGdx4xFJCHEiXA5z",
  "key30": "2Aa8GDGQNtfAnNFakttxQDAxdHgMTE2Dbot8TDvyjuacW3LdqtoteWhvnM6DFkcGH5UJJearjmwSc8Z6foXSQYtC",
  "key31": "4hYeSs9Tn2bdSV9BBWGEJEjigfh3uYXrYiC9sy97snaE9CSohrsizSWSkQWtRiFEZt9U98rCAdXkBtcDdQLefGyj",
  "key32": "38DFiMwkjCirJGDz9oieEFDcew6uYcT1PCCjziRn9uF3hCJfeTwBSFi9ApkjnkWfSmRR6Pb2eRjLNWGqMPmv19Gg",
  "key33": "2N5Ug7PVKVvp3NNCFwRhZ5TUoyZSRUmTXtHgXAHnb3avp6rf76bgVdAtM4Ydxt6pGjYnE5HfKG5EZ1huUvzrPr6J",
  "key34": "8dSv76UiCzjtSB4bHNpgsKoq44anh4eZ3oHcTuop6GbmoJxzaNzfqvUH8tZYAUC78qGrWq4ZZ2UJ3o4EhBEfELn",
  "key35": "3dnc9hYXSiGvDJeEoDFA8ypu9gJ1DaQhQiKAVzFANxX6AB1QdxzyH7i7ZoEMBeDqtgWDd66pD5mXYpkGHpsPKDkE",
  "key36": "3bSdYV7qEWJKDkPUak1Rvw8qXkmZM3dv8VipsnuymCUTvFmhYDHxDRjyzoaPn28VCym8qHJcwXyKQFzcJ3mxUKei",
  "key37": "4A26b5EqTV68oBXLKAZSmdce4g6ETf1awRBrKz5EFmZM5dTa6xrJbUYDxrewRYXGFp8nhuvfGBCMRT9fSNJ9885b",
  "key38": "2i2eta2GmPNeoSLddNHUJiz6LKfBnDkd3vscJyTPubhFiqd2vPBQiCAV9N77Bd1nrWyPwZk3zJMxq2MT9fYro1Tw",
  "key39": "57WscWrmq6wbzEzegKNkejqt9TiEctBC8DLRJQJ2BjcdUb51eTZCLT2KMt2ZX2huzrJzDTgfs6rXjNxGYCgENRb5",
  "key40": "2uWPJyfvcnaBWz5QCoYtY7tJBv8N3twStBVMYZfNhZcFG9suVjExwkCqZR4pGpA2hG6EPzNnPyipajm5cepwBePu"
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
