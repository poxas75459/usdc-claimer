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
    "ZFFD5KFJmksiAuhkTk1FLxS2zEjpFpzbjgPoWiHovQvGCAJoafhfFoLqZkVKLpa3jgDemxwmVekn47TrRLDhmv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgGwsRftNPTGRRH2ZqgKExQNozD1RuAJrDRdiyHfi8czDMXonmVayGS5wijm6sBAzubH5xTMg2Ze2emvSyci3rA",
  "key1": "3ZYFbW9HAz7QW3tyrEuqC76W9LM4MZ1ezmQRe8HtZodSxHbp36rBUbBg9g4mhFjUMtKC1hgSZgkXSYVxpK7j6KLs",
  "key2": "22mFUyrkVKoNA4WnuCkaqNggm3qYxfKwyCdM1tTW2t1qmNAX5rcBohPtP42kCre2useyRVuh3mF43XRJE2HpzRtX",
  "key3": "JkTGnQ5BDASPX4cip3EQbdZ2hvPWQ2DqwrpNQev5bicQ1HHbjde9SakxaV4JF4VdJCzADcqrDQdmQVLFc6RxEjv",
  "key4": "4rsEV1xUTswjpyspFzUQHjGaeYEPRm54R5j2Bwav2iKW2khA547Znw8TfX856QFK1sjBUAt2ck7wggFT9ZPuCSRL",
  "key5": "3qgFgobosvCtLVS3CgY6kBqBWEgNwDTLghapg5HhmWXzg6NJPUUVt2uqRa6EU3LXXfRUSt3no5bH9KzLFHNiTRT2",
  "key6": "7VYRXjPa5gDHUo5BrtGi9vYR7F77ukyTMS56tJhzodgaAvT352LHvxqFgDTfjd37JK9gWxReTf8zc9Y2TBxqHof",
  "key7": "3AEXzVXzXVLp2nAFSUiq5GTaYDKVKGAJF7s6KDfNmJzZZZLxV6Nfoa2QdaGtP15hiLuMWWebCjPAt9D2EB5HT6YA",
  "key8": "3JQNusvmEX9wSyXurWjcW5zheN9dQTMfeDgP8ypiweBL6sqTo7dMbwU7sVNcVd8UHWVWq5wkTnmgLH2vAFngqDC9",
  "key9": "CNg1gbbRikHYiHSYdxQ5QSSEZ22Jq1L1wPgnmh9tLDvPv1oqBNNaZC8JDZURq9emDYzyQbnc7YD7AC6U5dQYqVb",
  "key10": "3GeEHvkRpaaGhhCwPFRZkw47tTEkvqG5vpsN2FN8wuGBg8Z9wJosRUN7oMcPZjRkSSLikXAa7qC3eDKx1dzPP86j",
  "key11": "4c9bHHyrrtyLwAiLVKKU2tJWq1VYR4T3BLJ7cKcmbnfrpbPDBNPeSnjFZuVmwDkSDRkdJmpQdubfE9mGCutGDsCe",
  "key12": "2oiiHV6PLMyeiTATZAcozErJWLtGNypeaRnC8ebLGqsjqoDa6RY8tJR9j9YDoMV7GVudaVvahHbdYxDpi8xPUqLz",
  "key13": "2RHEFSkiYLoCvj3UEu23MY9rkBjYbe5MNBDXYLQp1NDir334vsx4qFaigXRKufttsA6pbtjoKW6YG9ctmwGtYsUT",
  "key14": "5mw8rcr2hHMUzQtdj9RTeT73aQu5La6AnGh2ATUsxuUpYdBMZkitSYWaYfbDVFSKmKhFjBpk9jdJoP2A1pgeDUwY",
  "key15": "2YDoWvcCucnUKAN6JtrYsLQJLn6SSiuxnYkxRFj6occ3sYuiKX2DWUyp5j9ssD3jrm6DSJAWXYKtRYoAkKCE7QLe",
  "key16": "4nbRBUcbqzUU4UcAd1Q8APZ9ToyY6GAn9U75yFAmFfSLKGHzdctTTrcGN5HJWFRTaiXF2vRqMerjhsT4s8BonRS9",
  "key17": "2Zm67DSo5Uio95a92VDNy37yyVsg1PCrnnvwT9kFA74Saqu8hnSFWvdbYgWhPQb6uTUngRF1RA9yifWXQomY9v9n",
  "key18": "7PeLxVR7u5g81A3qEgzER1G5LXH3KtdyFBB2YHZJPLCK778xkg74Q5chZYjptTwVb8jqwbMekcFWJkjX55pShrJ",
  "key19": "5kKaKYJ6597bmZNJ8bX6zuJmotd9WAmUVrNk95duz3YKmdLRSQyvQFcE8bnSCsUi8E52krtKBW7fivsTdCmvSRH6",
  "key20": "2QjapdvEDFt88yMe77ek9Ns3kCR8pdFEs2jvtuYxyvXS6kGDC24w8eQSeYBb5zt7CQjzRcYwpwqRj1wkvPXPqPn4",
  "key21": "2qeBdoJ8EjjoKCRKs9CbhPTfQ6FCutbf1wybLfZjZvRM7JoqvwJw7iFtqp34n5teGD1eFzpTU98DyoHsw8WGyxLu",
  "key22": "2LWy6TthZQa7odopauKZaHrUvVhZeR6HkwZob789QVpZdTKtjEPaD1msGGEynGC6q7akJ5t6gMvffPsfSppMe7m9",
  "key23": "4M2PQwZgvYUZ6hkJR1ZwfR95jMZA82w54z3fxaiqA1tLTyfux6AgHnQ2EFBpdk8ebxeUEHrzYfdArT9VLYX43NrU",
  "key24": "TWmmiYyFPaEu2suuQyfcSiruMv3UsDLcPwVyEVaYJ7CM6SB2D7x4db2idataT2KAV9pDW5F99CuvBktn8KUymA7",
  "key25": "4SFcwj5Cg3ky5ncUmSRFoQCjAKpapy7hp2FhBGqPay59oXQhJWHv4d33RAUE8dvGN2rCJ8ZpLw98uopBv1gNHgjV",
  "key26": "2wPrSuMgay1EdV3ovx9sxnGzJSW6E4y5foTax6bvA4W8WVHtgR5wvvYFkmnXd97Tx494VPhEM55biHgyPDbwfCAr",
  "key27": "2W9HFg12zaE8sXu3x2vB2RUCCYf26it4gLiwUs762bgKzBzLVi8y6BDPwXxwzCr13szeBm3WqPPoKcgoMyTpj4VD",
  "key28": "yEzHzNBRfgACiQV1bC7jAfhyPzLcD8AjhPFfRtxicXjDWJDVM34Yf6oGnkHuV9omhyGkzvVSCVAwgdVTvG38xuC",
  "key29": "aass3NTFQiaz9Sx76bYcyErht5HLynvzfgRWzn5SpkTxojQXbA4Z4umbj6jy5eihmLCeBkqL1eVY8b27RKboRvc",
  "key30": "4G8bMhqmL4ZPPonGZaH5GjxMy7UxyAVdM18Vk3gyud7kP7VvesYam4ZFs5csse1eK88uWMVYGjzYqvUW1XaLQjPE",
  "key31": "5CLJQF5aVGiGtqjMEYa5HSYUwMCuvQWRLvLVj8A1aHcB26qKeAMAhZrKofyNUoxBKNgF66bpHoc8b1YDUB89DhhH"
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
