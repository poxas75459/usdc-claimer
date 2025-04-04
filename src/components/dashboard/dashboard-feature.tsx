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
    "5Wyx1dMFvjScNQtJPtxA61hgfPxCNttzmEsAyw23guSsTtBrgqZgykyY18iCGXwzqzJWdBF2Pgao4yGdqQnMPZHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tEahRyKNuMZF2fUuNCQhXr3EGNhWakSahpxhG84x8vKieA4dDaTNBiqez3FhAX4E3Wv3YHFQjX4de6niFsXEcLD",
  "key1": "54p8pFr5w6H2n3Vi16b4BqYvA7RD3mhF3CoeEQ8ad8CYzHbKxKVjSgY1js6sA4aU7kkabYaQNPvwRn6mPPiC14ZV",
  "key2": "UrixW2HEoT5NYbJZfDeTY9Pbu9t9ragkB5vFuEoyTEbvyoqNgZ4JeaRmh2JUrd6r5R4CNbFqPq9MY1aYqyr6yuU",
  "key3": "2xxzwiF9WEKLf8dpk47ComPxdTkG7Y1orxQnM8NyVx8gu27MopiYNZvMUFutioWCdcQDR9wuat8gKX7q1zXYLNxA",
  "key4": "51R75Y4mdi5xHZhHHWEndsQtmexat7q7NnymZcV5qiGGst1SHnfPdk5MHr9VTtiv2jV5ff4aSYiRnQSjdH3y7k7A",
  "key5": "4x53ZJj9ASBKuwoXUJk571gsV5fLpuSjo5hJzCo5R9bYNpgx18zAe89YHRRJNt7UTLHbceK6FL24WZ2XbWAYNuTn",
  "key6": "3Dw9uwyvYG6Du58stFG7MPL8HGmx3se1HvQ6DinL2t4tak5gtsDwzyYJKYh6MkihBRDu1A4wPejjixaveykVhTV4",
  "key7": "5yBEdmj2cM12HpBUJJwmYeDN9JCYwTpMx2vwqjw9hubzs8q4VGknfJ4ZKjb3cok7zzcAzm63choEEF47MypQoFQJ",
  "key8": "5uXUXAtPqzbWCQjf1m9idHErTA5Ap1sc3mzNabLHkEu2y8ePPY8nFJsuEYe32P3gtwbZs8yAFwDsbyEaBGX6aTAX",
  "key9": "2W17spjPKsUo6dnNjYxE43QwYQoHGNaBoJmvBQaGbgCR6264EWMUoi1vJN7F6pZZx55nEk5WobXvHMuVT4HfR2sQ",
  "key10": "pwD24RsGbe3rRq1r3VXTS7uLLr3B6zkyBCMnpq2ojdVqWMwwh3BHUZJNxNWo5sR9sxVSXWQEWyE5sXfuULxvg9d",
  "key11": "bAPapgaukqEcbWwV4q6aJLL5M4D6fSekSS2TiwzDpASQ7YY9ZoK8AHvB3mzQsHccSsjdM8yohKmyiGdLArB7sNN",
  "key12": "3kqREE1CaCSYUvWFpXrWRGrAv83DC59AtsqnG2yx6oiX76R12hizCwcw2QZWBBrxJh33Cs3qyQck9bnXVySkvDkb",
  "key13": "2BKgV8LNrRMQQu6NwpaHZxhvgGN83RH3XUfuV2VXShB9nS2HT3DTDh82erZaQExB9kGBt586frrTYzUKotsqbsJZ",
  "key14": "qUp7Ss2TmewLV1ggbx1eeL2DU8X3AbuLZdskuN6BGmTg9c4b4jK3EPuy6yhmBEAiP5RopZftgeeLvCvCrqLcTQ7",
  "key15": "4z6ozXuhvQ9hVRs4oG1yPDDt5Pb7o1rJ14ozjtuy4ZZ182jD9WM4bysi2AwsxUQEYV8iWLixwmeNEcFBDUUqthBE",
  "key16": "Eh3mHzb6HHiY1522dwemvp9pC18aAbwU7hyd8wRJHP8MWqhMqb67r9wNoApummBnP1L1Em4qoxqp4cvGCYVN8W9",
  "key17": "4twsiJeEN7dKh8kxeEhBnFqp42RPemR1GU9qxmnZbxyTZucuDkPvmEnkbpX3F3fRVGo3PZehVesUSLQT3eyJU4ps",
  "key18": "HTAsXDnDf1FWRgawfo2gSGKSmSeBmEMAMTDDePSxyV4G6hamR7gGcmsxqbzd4Rat1QbPzthQbV84fVC6NEaDaWf",
  "key19": "3fu4SmFMZrQT3qsRLyTtkVRqqxo44zi9NjZNnEK1FuNXfRknpMweBxoDET8r9FAfSghuNnVgV4gxJmbDyRLQejmN",
  "key20": "5QzqEkajaSgSWmgUKro3UN65qbn2pV1GgFMyhqv56eRAgcPrfCpaVR1NLgvf9pRABmmxSQ5S21LCGXLTGpKm2wBd",
  "key21": "4rQyKBHUPwVSq2UfREFWPDneczxPAmSctdj5eW5Y2KaFuUseKJA7NubLW66aW1cFMyBvv6mfMPizXpgVFcSEDqDG",
  "key22": "Nz2eKNRPPZBtwqWjm1wnUX11E5aYRYwEiz3aku4KxUwH1fCJ1tFUodcKVwaZhvgaTJ3BTCegaeWxrKEByqEtobk",
  "key23": "2ADFpxmEq6cEiDggg5Lf6uZaMYosXVjHadLHyz3D9h7ABvjb4378XEYMVhyjikxUt9GVVbf1TM1o9MTA5dmEfsjF",
  "key24": "8BqopAxaqYVbEB9YdmHDg2giVedUuF3ML3oPDomzrh3nCMSDkc5j2ju3Nj4YKTPMCPVkaLA5Rb4p3jQfQ3MJfKs",
  "key25": "3zJvuTA4YXGV3BaU5x4ULmyRbP9KeS95vUwmr3KtWXbQx5ogsKdUf7a4mfSygVaveYzXAZJYktMgkp1KKwCqQb9P",
  "key26": "3C2o9TS97f81QBFvpwDbe45MKAoMDxd9J1zVzdPmo6DCRrTDwYUtPQicdgb6D6Mz9BSS1MtwVvNP4WHp1EB7WoEh",
  "key27": "2Y8E7fN1PJAgAuHjSJDVjpdooCHaPtn8wcr3TVgRCxYQHZiXBMKa63HpQwFnyXPrG64ujHvXMPzjYxHQsebBwHfE",
  "key28": "4KENZEf8iPweUZatVHuMEhhxrUwxFZ6nPMVrAE75gs8qXLZwuRAXmNyMFqxdze6hG5itmyDS79sVuQuUdwFUUWJG",
  "key29": "55ymQ8MhHxE2YNNju7X21dUyN4TdF4LRZUs3nM83Ekr2JsixcBveEkwXZsquXsqVAdCXkbdoQsMmM4aubCT9JHBA",
  "key30": "48e6yMARHnxpdKdvmyTjztgmeXPCcuP8z8gqgtKWEptPXh2bbExTvezNuDEQwU5QwjvWhoTAkBXASY5FECLrf2WF",
  "key31": "1M7Q45J8eS6u3yGpcsun5YB1FioK8BegAEbT8otBWKGneFbFeL4ETkfXZzV4Mbcvwat2i95VinJhkyR5u8R3DJB",
  "key32": "25mTyouas6Nxn7QRx794EKfXkCA37MerZ4zNgs9D2w7qjfz21Rz1Ux2Ab6QahcLMyy2bQM1t5yj7529WMLzmkDrA",
  "key33": "2MU1kYXRxtyDatjENnhb4Khs2e9HXdNm7jWR6YdXEQFTxi1EnF5eow9TnDy6o5EiRZnyhc5wv8euDqWiFa5n2Qh3",
  "key34": "3SWUQcVYiwZX1PDvhW8NcX77SMkuDseKgzF5H3odxH5ZGhmuRGH3bQmUNBE1SrWn3vET3q8qJNnEZRswMxHHwBdT"
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
