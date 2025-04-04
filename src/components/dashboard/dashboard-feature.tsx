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
    "42NpN42z9obmXT3XxNdzAyDTCpZXGHzJd3tEQNory1UWjhK1pc1JqUMZPwRLepdJ9Y9vjsVDnhABwg7UqUPPE2V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gkLiFF3ixVN32Q7sswJMKv8ULsGb28h4TYtnvC9M6oGa5zFDjGAtZ4kQ6NkVbZ64U1gnNnoegvAW1FKw7rGUpbn",
  "key1": "3WV2enhDz5bZkCtLxq3cBe5v7AXs2HF3giLScKhtRsrJasX59JPvqnNFc5X4X39SoFuce1LNBtetMamGhLAen6Mh",
  "key2": "EEkTFdu8PbvAc9Hcw51iSm2ifYb3B9VUWf3VWaoDxwEH6ddbGaxd4peCACP8VN6D4djhi6VnUQGen3mX4cvmitA",
  "key3": "Ds6kbzizzdwyeQGMzNSfm8FaDvpqENDPueGf5K2SX4dNpkS8CHGu5KN4JMA4iZEhGoRDZtzPFJsv9DTjoFpRJxS",
  "key4": "5mho1reCu27KG9L7AisswxfCy7LuBAacw9hZ2DzygEL8net8WqM6Q1h6TyvjzeGKWCzkjLzeq19pWUcq48ydn3Hx",
  "key5": "5Qhd4FLDLCP89LCYBqcVKXsU8xxRN6MTzJDuo7RJh8SgbvoVVPTtFaTLwsX8J81hhZVQaB2LoRD9GLFgtkCnWGPW",
  "key6": "2imjNiwvPizoV3v7ZeXEkJoRfQVRwE8yhNzseGWwTMa24GaAeoKnPohfQoQ8DzRDoo4sm5LfKWCFyMwowknyY1s4",
  "key7": "649zWvfnQTBNY69UsVWypnzyicYoth64dwxdQZqmHKtJKpNs7vR8rz82cqmWcL6nn5n6wNqPnmBVqX5DHp8zYNDS",
  "key8": "4eTepeMcXdY6XcR5awrge6ocqhoy31iz9TBwE9DvRz7RdW2VdWFiPBNCDS8GPD6eqWsTmeVyod7PupwawGPJVLF1",
  "key9": "4NhPJmv8Jf3645o9HbDrmjzK6Q2uqpoZY81wEU9wutQR5JT5GcWYdD83BmLssAqoRfmnZcPBmMcuE7PDbYpPDk5t",
  "key10": "jG4ffKEGt2Um5NyZeoRFLxpcKVcn9wBy4tp5jssYxf7bun3oiCDQonWAQgxDMR6GbAXFjwsFsEDm7TqdFx38XEo",
  "key11": "3EUuR1a2bDNtE9k6K4zfwPu4U6v9wbzDzPtmF5cz5aNVWkbCn6smfphAFQxN7hzBJ2KkgZBGyzVoaC4pvZfYaTgV",
  "key12": "9PJZtt2NEk6JXa73BsiEYm8i3iRE8j4qZvNvw42NpjS2XBzRdT6MP4gAkmjEi5ccgFNY9oZBz5gY2XHWZvVAWPS",
  "key13": "2euB5zfjZba5XmVRDRHRSss8gXoX5y8A6dNcyJGoW96xrCem596qicC6ZNwL52xUM3XGgPEFWJyLi5D3JSJwt6Hg",
  "key14": "3jyUeUJNoRpvAEeVDedEfKu2kF2YyA8wfAdeQxARsntrcFQEomU5PMxeUqXPKUhzJrHBuj25gGHmW2wZgFXLRci3",
  "key15": "H7bwig6jXmRQAV1KPs8odRzKBAEfX11dkrwyDEkfNkmb3bWq8HtLaU2yJsnpmFmU84tRAH5Q4SfQQiKQyFbQ43B",
  "key16": "4JDDXrYHnuEMtLN2EcwyGPkLwnmnPcyb3gYkyZQejSUpdqSQv1K4CGtnHwbWke1nrnVYfUP3avc2BCf75vzkokkW",
  "key17": "67p4o8RiRSrXyqssDQccFGgU8yiaixDtiHTxLybSnj9qzeiXPUHaTfdrjivxY5eZgfiDZeiTddcL6dbTf2zABLfP",
  "key18": "vVFA65mCZNrYKg6rpzTBRruM8ucsakWGJ5X7yjoeBgWoCAmQsyiq9damNticEJEGEQmBkvDxiBQvxwbge8HGqbw",
  "key19": "Lg8Q81SbndwCkkuiVWRMqaNfjyNdLoayvY1DqC3XGPrNwrZRVK23TrCcE2f45MTgEUJ7yiaWUGPyAfgLfP9GLtE",
  "key20": "4F6uMoEEzJaoinPWNVoYaXN3vJ9VzRgPLt8dwTRGdeX7cdpN7aT87VCCvpEawZShw9PLTQBony3Sr5Y2ZfcHDmFL",
  "key21": "jWG3LLNsNKG9GYF9bZmtJ23ir9UZfr93J8aB2znJ9vrHSy61bSFqW8F9cra2ga3ei4Ciw66R2pgbw3XYpa6SKjC",
  "key22": "pn5xkXWruDqC9T1JpPLM9S9oVmHz1p6NkouWMYbws4RtaErQw54HWL2VPQd1FE2gDCmqGhJw5X2JLb2w1FQa4jU",
  "key23": "5h76pQAB2MuF16sDPZLStsao56FZftADecovRc6RmSVL3wcDimdXPTQBYMhfNthbLf3aNacsD9Gw6sge6kcRQUyN",
  "key24": "49DTEqeqSwQvTVH5YiFyT1Q5D71qhREx3wNjeG2KNHwe37KX4r9x1beMUYzuLxE5zNZvW24aL9DHK4BAEiqFU6Ri",
  "key25": "2otYtfFU1T4BAtGuEJc147XT8cXHF2iJhp5SCNWMcToZfHCNrmHFsoxz1UAab7wKMULCb6oFbtR5wXJWTQyMyAgi",
  "key26": "39pZpEe2zDc443p5geon9nrCkU74Ms1xwesN3Q5p7vSE4qo3hQkcwRzsJfdxAkdfyMpLXMedaWo5BxJ9FFDD6iRT",
  "key27": "5k77kPQQmhMCzJUS3TpD4CqLBnJfbKD8Xnkawp4MyC2vU1FrNJWCh7taEvXBMvFafBTHaVw212H69bw84Zya7jn6",
  "key28": "5x7nET7GzPUQq32wEeRkMvAeW32M4sTkhkjMJ8UqfiRyoYDaettZYFvBRJn52UVyb8ciqLLrYbeo3TCEdmKuzWWP",
  "key29": "3wHX5XRS2KyXTyh8MAm9dzWiLoTD2xSdioJRBNemJJcY8C31aMtx35nygv3rmszDHSwNZSswkBKoPSncr4WuHUHA",
  "key30": "37Bs8rTpqpeo1zgkpUk9vaeuZSQA2Bt3wTyxGQ6W1ipyeTFQnqqryWNdmP6utLXwAuXa4gmJG5Yj2hJNnMY1EzYc",
  "key31": "3T1EJvWWmskGHJif3psceKgBAvEp85GAoUUi9QeNcwtoG9xCnJj6EkjALWWcvZHAWbJeNfex8EYctzyXfHFq4XSY",
  "key32": "cnTtsqX87ForkyozFAcDwD6cGJW7q7dn53cBYmfgXtixcNALQ1HzELybVyGsiLn4CPDeHrLHemSgWoMoCiUWXLy",
  "key33": "27JPzNxQ6F3dpTkFQL1V3hiCRYz6YohpufXqhQRMYo1uUoQFKMBqb449odZDQ4ENk42saTLU6FbQgthHWQfDefWo",
  "key34": "5aAJs8nZuw1dDGEGdG5RwCcfY4WFhAFJwJbpJW6p2by3QvannsyNUU9GHYHMHikgS7ZqCkfYLZ3sq8yFvB8kBiMi",
  "key35": "2Jdcos6E7vMGhN7n2G5LnyHVg7RPP2uDhNFkKoPdy6wSEMMVULDob1CjxcwfvbKu1dQEBrSxUSB9FEZRGkPgXXTW",
  "key36": "58YmBwbaagUZQaSHhk5UhcDAqNvbnuEPv84BrhHN1FQi46F3dDfSkzQTBEpQAxLdvHRs6PNRKGr4k9QcMzHphMsv",
  "key37": "2NjHqyT8hsVpoU5bPCzwXTqW8QUDya6JPXNX12undL78NsshUQm3Qt6ZB6jujF1nnWzdJ9N7DiMHNfqMfpDpw6fa",
  "key38": "3DUDBevdfhLSdVRugT2oyFf82Ubpk5wKJg5PPJH8fQXWLy9Uoj5Y9XNKquhqdL9NVZudHzcujCuijcQWrA8n4z9K",
  "key39": "3b4qBgibfMET5uXabDZ56Jte3ATzSdXoAhAmUYVznnxGzAd5f2GTHs7jSQG9JHbfWU4S4UaqGNf9ayB5Y6TvoGqn",
  "key40": "QnwJLafiqrxbQy1sWUdRAfJiYHr5nXFWH4NhEzQqZzW5KWF42hihU6C3HYtZmDfj9MG5yZfjb8jp6Dy2NS4WdLF",
  "key41": "3YYt51TGVmvLFSXRLZbD55ZgkswVTwCy8DoegVHFRhyZDzYX9LbCp6hAA992Zy25QcDdWQPzbT3ueh65ugYt3Cjj"
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
