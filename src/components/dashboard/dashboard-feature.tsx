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
    "2JwD2C7BYjARn4QTBTRy83m8qVkRU54urG8gh7Ryjpdjz1XWhgZHJoFThzkL9tjnjCrwPZACG5QgJaHWVjn79haD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJY9zw6RMTz2gMneomJRazJAFxHRQj6qp4vgziqDuh3njZYwspFnn7WnS3VNrgueFKe3ug6a1aNBhseJNWDLFL8",
  "key1": "5qDYhirw2XjiqxCbCtHtW968CFhWzHVQnSyt5GM5nfyABNEf9PhBz3zpUy5ahCrzmB9hzqSz4iPSdq3S2Ww2KGxr",
  "key2": "4bQY7jDe9SzYV5N4tnEkfBiCh18scDXgaedfH5e5VSyKSd8qEYxWvZH3AniKgtHkHyGNMxB44Pjji8WJsC1xFMGY",
  "key3": "HDQvz5C3aQRmw633rJhYZ1P7TRACk4Ym2VpHjFkeoVXsp1MQ56gX7cmy9hBf6BAYaaVG8S3Xg1Cfo44vgXZ79od",
  "key4": "3fwZtLgb4GwFfJrG4pcQbxAT2uMP7VDhYJhmDqLztGwh3nFMTxpPRDa3rC9KWFPNJZrJz7FjcaouGBUUuqEY4eZ1",
  "key5": "5XDCjycjGQgKpnAwsok2LKw5ezqGxLfqommyCLWmhAzygxjaXLrEYe56ttm2sKnkueZDPZ73fmavJFDVn9JC2CvX",
  "key6": "4MWehSw872MsJEohi7FuVyxTw2x3rNMnSmzMuVUWKXVUT2Dds1c1EM6mrQJadAo1vE8VnyypcBfKBFQEDyTVYf2m",
  "key7": "55Q5Maer7jCBAFt9JbhD91YHmkpV1LZSagtBJssLA3afJT69cRM1h9gvQzJBvKXrndeqehkgNPeLDpj3EuDpFkoh",
  "key8": "4q6WFGFwk2Qp5kgLiFy2aWzRcbQyZgwUTQ5yMaAmUEUnZzqvGoGtnVKEbzbef8CZjuipGq6hp9oiTxY38mxKKY8s",
  "key9": "4uktAmEvYwC4ZTwVV2JTVspBX6UiLWcn9xScvKqSLESC4n79XpP6Fa3fGvWXiLdkLU8Nrts8wJ13oAQLBafTh3ti",
  "key10": "4DqgnjshG1h6tNRFghp5X1wZrzuedqoT4y8guynkhS8S457uVM3YDfYEUSfru49LQdDz6VEW1XS7nXr1rJ49SKsQ",
  "key11": "66XnqwJbjYaz8RQtBAmwzuRUSu4nr3XmJ4e6z2S31cKBmXKrQhX6XjZNzEesyXPfZz5hfzdUzuMfY36eYXNPnsb3",
  "key12": "KQ6RjQPgygv6MCjz4XRwCmVeA5TLm5vc2ajHeCWxJqiTMhHjb9c3oc1yfhqE6G1agjxSTAmBRuVRmR7UHnXEYxv",
  "key13": "2wSGxATrUrfh4xJBS63buBNCz7vMEKQCYAX3JtaHU4saV5AiFLcpd3Tfe9vn1n5cj4S8GZMEPAN4cHn2TUTj4C85",
  "key14": "5fYCKoxSXNWEBGR14CDMrNHGgoKUp76qhxEYakQDnxy1aNuFJMe4EF7oeZ1RDeLhNGKDro8bcf7rdCMoGGnKXaPN",
  "key15": "otxWwkiDH9xk8AnVTPHMt9uVcxCvmAZpbFPxoZufiGJrnmuBzFDuUiwAouhUdE68VwbkMmijt8KBkECrxN1yDhh",
  "key16": "b83dAv9MWP4xRomkUdDL1B35FPYwakkvgagLk3kWivZfuGqFWo9kRPpByy2d4d3tMLXpthBingF9dv6tNt4PbaM",
  "key17": "5a2inpER2Fxib1MTPcQZdsonT1Gi7wC55KJ6nr1rU3zYw5G994a22a92rZojfS4DBCYyPwFvjmdaosu6UPSKbzEq",
  "key18": "38QXaEpkaahE4CqGn9qJ2agQ8YUhHSN8wrAQ2K6m6F4BkDUYBGW9WtknVwq7CBK6GsTZFT2FbZSDELpVE1whK39v",
  "key19": "5HoLnfKPfaL7P21sbvgeBxSZfoVM2dhUFPKdehYZ9ykVgCGfhbAai5P7oNFnp9w5cC4RhKLWhpRtKyjrDqdgzcDK",
  "key20": "2hsPWnxVCX8NESTRcC87XxvUdpSpABNRMLNrtmpR8qHoRqowuGQK7beWRBp2i1DogT4TTKsN8RhRGPynVVWQyjnQ",
  "key21": "qH8mb9yrLAAZcrRDbeuFGUNDEAy4BREUz7xiAzV5C2GMaLe6bgoDVmZszcDTXWDtxXhwKng7cchiH4BKbn9Uhhb",
  "key22": "4tvd1BuBeShjMqssiBbrB2eDmXGsd7FSC6fdJnNcFhWQ5ir9AfKqVxZk5wYmbz7BVNzJeaqKMSYRebVFrNzxBD4w",
  "key23": "5L35PhQQDdA93yZHFgoAq6MTyAWuiXbXRwFXUgxMFfwFj4UYbH3RF9MvgRBL8g8butvDkC8QvX4WEj54wbx2xUfy",
  "key24": "2vv332k1nSZTtzL34j2UGFnvkk4x5fFahb2Wf7wPgP6gQ5W3nj32PaU7hiYjnyW4eMso2f4SfUvUT6oVURpudJ1T",
  "key25": "4NT3nhSGYqn4xq7fNWAsNf13k5zmNiJoFrfobit7CMWxNvVEFGbURz57rQzkeLhYSYTazNydCTH2RJaK2yv7N9RC",
  "key26": "2ZCk2nvAri2zwvziLB2AF4T63rmdrXLtvpKa5dzE9gAN1HZhPhSt6G3QcPFo78NC8cdZLbD53HVPEPcymKot1P3K",
  "key27": "ncqG5f6ToZA5kLsSC8UyQJqxDUmFARTNjzvjLuwHaBHknzFSba2wMXgHACBReSvGti2pSCAXLPTArcvvGQfLzVn",
  "key28": "4GXXqJbdoJdxZmxTdGJ6t961P7zkHW6hNnWEpd2EJ4Ume3C9TamCXhtsL8nc3o3rMjaoRxaDA9P9mXVTLkzNVFb",
  "key29": "Ba6pWaYKDxgmXrYGaiShD34aGyyNDsdiBDhBXpMPrsyfuh5FzLf6HbrHNS82HizLm4qbQWw4ctcQ7kLPvmbnRpu",
  "key30": "2yyJ2BXTUyrkY15iS2L128t5puoR8fm4yT3UuxJm5nVcBMP8RoDpq2oz7TaHVU3WSpFFfwSenfs1YJbKsKnedVeX",
  "key31": "5eGrCvG4a8DkP25piBmESxZ4WicsirDMFv3DiQCQE8Vu4pBdzhSMdomJwgfMWniHgp2FQ666yVcmrJCMZMN8wmYt",
  "key32": "59q7vApqAjvKJY8d3fvLDAxHejWDNiddLnJqakjbu6UVGZS6kXvmpZNg2Lo4GgDmCQaDH3yUYamxNG6aUEoNfkb1",
  "key33": "7e31LCu7LsfB2soF3CZRDfnpBjdR6Yu2uMg5Nd1YYbntZ2G3bfxmj5LVbHA98Bxr2cvgXKgYWvpmcri3Jh7ABg9"
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
