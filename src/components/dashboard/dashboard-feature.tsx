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
    "4wx1g8dx6QZaD35YHKacHYiKEYQTHLLXNBPCUwgdU7dxjuWZYYbQcHJsweNfQUqRNq2QrnwnM8gqmaeaEcHdutXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFzcsTVdgJ37mKSST1thZZWZYAfUh36tnidgL6rw5komWAQeAc5ec3kaVGEesyGSNAE41MeNSGGuTqarYdsbR25",
  "key1": "3QHuz7ZDMrxSHbeLne5VpMd1HZncm3KWVF149sPAbsiWRSv8R4MeaYBMtjoYDyjJn4psx66tRiws8NpdM8tAMcWt",
  "key2": "WVGe9vKMcmTi4ZmXr4PC77JpFaYn2YGGws79etAXfystf1n2rSvmFeHvUvp4HyQ7cgzcG8zH4qxTYkt6XDgqe3D",
  "key3": "2s1M2HQYxkNMWq4EThdVGTXtUgYtg5eJ6ZFuP8aVvGywV9Tfp9aQcRKcsPyLq3Qdur4jTxNjEh8LmR6Ze2gpn1if",
  "key4": "345MEFnVf5PbnD7ZQoDTtV6gdeZDAaiMXLBc1YnXfLswSsPvbqQ2a8Aa7xbBWkDRWXLxUDY9snRfmhhrN42njuc",
  "key5": "4cFTYZXKmmBnjjBNNiKqERzkcwUj1x6m2LCQFgzR5RBjUwzrGyEuHVnCp9yZBiSkxvM3RUu7hBRnSuAC15nBGpKe",
  "key6": "3er45GDfb9LdcZvJiwkrkHfkpaWg3KyhxZcG2JePwTv7aqSYikJLzRKeRBbLEv9sJE1ZgkdnxfEmKGM9bc8hwQCm",
  "key7": "5VCZiRu5382JhrGaYdiR3MzijqBZNGPSiJBScvkLDb7avYqpxEGbY3T8U8QJQ5LqzpDoE9ixMKBRnGecc865wThY",
  "key8": "3KKtT1YsEtfcZwh421gnR29EEoDQ9r4uzburAAJ2qLLgUm3B697b2KhiDqmEM9NmZQ9ngHt8iiMPVjpvYK9925Jm",
  "key9": "4PS9kab6JvfUvbgnNBxjULLNDLpx3cWUcrgtqundNQLSpF2osb3oXKdty2uosf6iGfqmZKzXN3oMnZjPc6FBDtbU",
  "key10": "42SPLxNaDUFZJLWZgdrA1ctoQMuxtMvW6gE6ugT2Tb4Ta88DKxaPH4WGcrMG2YEnnSKnhLegQHJt9XFX7iff9DKy",
  "key11": "xQV8Nz9erFszVRcm1KzPyFhoMBT5nmdbyYA7eZm51ufxWqiy1NPA4xYPsk9zQM8juMYtAquLjjKgjUrfeh9pbLK",
  "key12": "3n9Ep3orLSKtHYeCMr9Twsjpa1qf9L7y7rnDEd1cNDXURHc16fe9At55wpQj2vC6ZgwFaSaDFDb9fiZxPv55GPZf",
  "key13": "3XrWCo7xr54tYYt3pxQEE1XtqUZ6pj4SGU2uSDmib7d5ypBhyr6bPgh7DsViUEhm18tZ1Eu57pFiLesUoLgxbEUZ",
  "key14": "4gqxHbKdyLZqcVKddZpQPuywL8eiAZk63rPh7kW7dMFUNNesonN2MA9AXhkTYSuqnp1UbX9oPwRUM2biD87FgArk",
  "key15": "5pDePPinSC47KPK1TvKcLax86R4szGi92n2pKGRCk9ovG7fC2p7rNgSvFukCqMC3J5DbxBKwQzMYx8CegCzoBA6K",
  "key16": "4ZwpYtEhD6oNAt1Lowi9JoSc99giSwYJKd6eadprzTDKboDxFBVb55JYDAmZsDmmzrNneQ8XiVcjB69FdBTSDpBp",
  "key17": "3TxfvfMEEq2RpzdhdAx3LPMiV1ekkwMnGeaP7Gfn8rANEvXnHQM3zghZoothhsPLQ4xPW2PXk7oKi8oh5zrRMHyh",
  "key18": "49EeTE25uBpkma4K36U2qpFZpnru1YZQnML49Wf6qrhs17ByUZAXGrcV1eMB5JqDgFv9Lgr5Vx61AYLczwFHeTKG",
  "key19": "3xXr9zi7moE2DTdxgr9ojSTSU5hg2MYEDzvnaLUKGcH8PpzGcJoA4UbmXaq7y4rZw5VkD39nGAf9vp3YFVEyo6oj",
  "key20": "23xLbKQBrTXU4DSca41JvcpPgoFaLgw6CRW4eYwhRSqV9SRo6dfD2hZQkyZKL4NNHc5CYdont8cCnrVpPxEWXMbH",
  "key21": "56RCqWrTeex5a7CpLqa59m91MmKuUihcmPCKfR2rWYXuVArRQdffRuZ5H9X69FyoN1qqjRYtML6eJKG1APAy4vF2",
  "key22": "629ge9RPJHMtNUSpmpz8M6qr9PneQkXz7B2E44Mffr9M3ggmek6WFDmny6zbAEEbmfUC3WwbBqz1PZEi1PmdKZQd",
  "key23": "65aGVX5cCg7YeKZ1hx7PSkfraKrx2eCxRGhr39pmvzXRdTCezWoE9YAEGwWvvKbBzSDtWQpHEMFKX59SVvbGFZxG",
  "key24": "42gV5zswUqkHk5fS7YKeaudcN72BhukZzp8hbjArrPCwk8jrG3AjZgcJTFNe1T1aDj9Xyn2wsZ8JB1W4opHxgnJS",
  "key25": "N6tpedde9c2Ff4nd1F4FprTiuuAXJ82kkP9pWW4WhqaoZ2eK6W1fMPDJwXHRGq5a6ifjf1EqrHmxeiPhiSfGBeP",
  "key26": "5x6V5KzZrfJKNiYzhCkFJhUvzQ2SbzHXLx8UkFD1N8dxJoVwG3c7DVKEcYYVy7GkuhRFDkXuwhtoX5TaPBjzPLDA",
  "key27": "2JrNMYKDgAV1ft2uyAa4vYrDgxtWP6Ly6U1t8vWkREC2kbtnNGGXZLYnR3gvvvVnQDFnhL2oyg1HsEoezc7ppZgL",
  "key28": "2D1p55T8htFgGSrYD3Xv8cmKRSQe8FLf9mwLtaRgVadiTNF1HC1TvY5Tc9U95jD1FXjvuirKotxYsiXZpCy8v4my",
  "key29": "5GdeuD51sfoV146h8XUUfgc8THWYfhyUdf7XJBbESMN55sdd12GtateewfPhgoRYFEF3JKk1oSv7XWyQVvMUb56e",
  "key30": "31hgEWomNaXM26tVjSWnJ37sFtScdhXf1ExqmTC3gws4FaddbsHZv1cZmhFtZSVF7iDZkqiQgMHeVxejN6Afqixp",
  "key31": "J1ZXv2iU7cGSTR9bdUgYcQc9vwUDbkpe5kzCQrPcyNpYh1zx6kbwLkWU5oiF3VpNaCYmJmQcfxyKjJNxfUMqDq6",
  "key32": "4kZ1eFcCRo3CXY3xrrjAJjadNSFeWwJGdciiZQD1DaUgowe2RV7qVHaaKAocQi5QyfMbfxWarYwmj2ZA99bG273k",
  "key33": "51bpFxDNvmunpRnj6y5skDMxpYbD3YhBCwL9guSLetsxBnpCjcMD24VsVdWJ8rf5T2S6s37aLouWtDncue9D5Tp3",
  "key34": "5zJMkF7hUZSCDnMnhYg8GLMUbCv4f6EBALZTiLiUsi6CB5icojkwPayzEu5TLwGPHWga8BBfmWQtRT3PQjbhXBqp",
  "key35": "57Vc82auWXXtGKgPPKFZiR5ooXfrwikhSVQLp2GxCtiP4V1cTAQyjSP2C3rKKV5nh3dba1JvWHyt6RaghKngRu4R",
  "key36": "61fkta3M9sLmEY5akezf3iXzRY3FA9eZijpJ6eyEcNEiRWo32WMb3cTaiw54zjXSA7bEXCJ6ibaACiVgQHzo8mZF",
  "key37": "3ooRt6ZHuNBqLJf8cowvsNWQPRYD2KSjB8P6eBj5MEU1jTN7DzMnvN6RU8cmo455uNHsKBFU6hn4nzUTMcjBstea",
  "key38": "saZgDyUf39VBRmwuuchgrsSV4ThswUWwcTyaHRvPmaKfHfV8jY3VsbQXsAuFGKhH3GV4w74YnDnJog1sx7zwcUx",
  "key39": "RQDnGb4fRr6z2updNmRX8ZETrXmzSLqxWwtPQqXbXn3zwk2MD49TegYcmnY2F16KkWRt9G8xN8tfSdwTvdEQNE2",
  "key40": "5Fv6x82DW2YqFRs7NZD8twpUCPmHVivN5CU5A5CSLGnsM86Dqn1hHsbYknayNzxnngqzqF4Wcuo9QUC9oSiJBqaa",
  "key41": "3aB32g6fafVEB4mNqcef8y9Qudihg6jfLTiWF2d3CQjwyo8ToS6TKDRd16QgxS8S9k1PvvMovmx9Zt7H1e2mxbN3",
  "key42": "5NkMVFPTFZ7CutbA7KCh8aNgN2a5xCVFsMi56QAm4xiyVT7ehQg8EvEtmsmvzvHDKxDYhCavqErbkdY56fZ6bARY",
  "key43": "2TcuTduSYHW8DVK88D42jcy4W6NxpLgz3Qg5v8H32WboeuoUBqpSHYVLXxdUxFHCEMuKuwkvSpsuDg21S8HYqA3E",
  "key44": "nXp2HqrvqGpan44xUNXeu3TM2Dw7TJPSqJn3zriHouVUMPCxYPLhUajdxmGTYLhSE9u9JvHAddaaC2RtfAbdvDc",
  "key45": "5Y1f29fEuPDWZdMjR9uBMYNaMWWrrQq8em56ptkZhjWhEjukd2ajgKuvJ3d9woTfRonp9Y9fc58hAGKJWjLK4wo2"
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
