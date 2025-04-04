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
    "PCp3bYBzsVmui7bhs8ouPpGbZegRY6thDqBPKN5WiyGb3Rzrf4KFnfym9179jrUaHtvjDuqnPaUxiafwz6zweoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RYWmEcSniyetqqnGteRWjDp45JVKyKR5SZscACciFRsHaHXxft1ZZvadyiTPNUynjVJ5jXqJsCJLpTVMADWeFya",
  "key1": "5RkKrDA7XfJXtZDG17UcFecaieKaQnPyw4px6VEyyPk9odkkfoVvHSFGBQTs175PePxo1hXjHQq4J8HR8GBbXe8d",
  "key2": "58UyF1Ar1fFWF7JzMimsmXeoQ6XgZn2MoF818giu6f2UdKge8SFS25suwc64Q9VqhbyJ3zb4Uy71JJcng8zynYSP",
  "key3": "3uNfLbrVWSZ3njTuWDemsf83g56cjmkkiFCDmBoc7vyvAx4L3ggtTT55uDRTdZkHSQKavo518fJ8BWxB71FikrKn",
  "key4": "xbikTYWyguMW1sfgFnvPWdmBma7iCvc9jTR45oKVYKFUeSDHnUHseysx1DPP43cNFwthA8rnSa4eRukK9CdsFgg",
  "key5": "5uFndvv3Gghs8SxXJpctJ9PVLzi6pggK1ADhv2J2yXNg2ULPxBmK8UJgkXG9AWD3xFZLBjDZUfbidGKj6rSWWqu2",
  "key6": "4zdtCcz1hy4Amb9n5wUNkVi1cHTVvYSdH9hwoN9Uu6PziA8F3Xdf2fEQsdJfsNznHmwKdjMtyJ4knU4Xd9u4hjeA",
  "key7": "51UVR4hrrCqmZibW46PLZVHqXCj6fNimLmhGD6qnbFnokHSLQvihcPHyjqjgcZ4T2pB1HdcSMo5BnhUccUvFr7hp",
  "key8": "55uWmm2hs33iP3MuWfcuRprsMBLPjjkKg1cmPWbcxgCYHAsCstLNWKb9cgH4pPt58MCsHyMJNvmwLm9eZ7RZxPv1",
  "key9": "18qnkVKeti6uXcR2bgfNYCZ2zex4BD3GSjmjUamRa4RFVFASjbSVV7zXrtAWH3SmyGhAUAPaVu4CLd2bm8Qb42A",
  "key10": "5UUxsGs7c3xs5QUmqXpYB3VnSTrWSWndtVE3eRTjeDid7BpubJhb26cFXM3VPmAGauueVRtc1A4wNk4bWMXi3L8K",
  "key11": "P1waapAG6Ntr3VCeqRX6duejnHxUxTWkxgndxdn4bLWwXk7wvD92B5fQYWGHBFHydDR3L63zWxJd6ZgonTKP9jv",
  "key12": "3nJStzva6d7c9q4AVwkSsAo6YQpPjCqKmcgby5b9p3nHwAus4hLsFRDrTpcSg8gKVWwqqz9euxoUKVodagTmJxVd",
  "key13": "JowMdv73jxbTs1b7NoUomg9XFQRaAyjxRM8VBZpKDWHWvmd1Qg5LCyv93BcQoCGNEDSAQftugGsjrJq6aboq78C",
  "key14": "331nMi5f76u7D3ndNJpzvnY7JBW6s7tDpWjZb9Ms7nbazri2Xp8pNRfCNy3XTRV6VM3JzQfpDttY2F98trm29Wxq",
  "key15": "3ruXihv2bhFbmmyJwNmLWfj5MhCasYUEDxCduuqyh2rxD5K4HzD1nn1jcKbVixLektEjMEkQasFKoBW8znvtuGFG",
  "key16": "5Ngwap4quX66KGKMRUrMa5rRKzjsqjegdtoHhRjaS1zu8MnE3bj67Wa2X4ZSpauwkDhwcncTTJYQZZ2w3CoeKvz9",
  "key17": "3DEDhzsFZzm49RPqkgCqv7GgabfSVnD5mavH6SjqZm79YnjnnDdAhhUP9Vzw5PmiqRKydzZ4QzuyWFTeMSnPwZ12",
  "key18": "3BuiBRGCXFDVa97H82pvGgBUH5rjENubnjMyCK3siuDnBHaP4oWBz3FGEHfWrbvJN9t73919LV8cYEFsukzmvWkG",
  "key19": "2HPAdnyVQxXf4qLKTpADnC6mH44RZqFqxbi7SvyVnTUjCXGPq5xNRgdE8JtSQXFWDhLhWGRKUCbSD9ezaifJH1Lg",
  "key20": "2NSEfLnvbw8e6CnvjNMGdk1YJqjnXtoNHXM53Gv8nTnT4SUuRbQXHfRZHsR2ppbVY45S3iiNE5KRWEbp3ER27DSe",
  "key21": "46wXk9gSVTArGc9EGTEFC5iWkB33uwv88rF66Ga8UyMkhvMAJ7zTqJndg61wRxdULiHQrZgiy1mhyRigq2ddpkuS",
  "key22": "34kU3Lii8ZxPzqPFK9kLNxD7ef9jqGa93usx3PqBooBSpkZwJFB8jyqHyU7A7CXjTUWcGrz7KHz5Hg2gCDg96d8C",
  "key23": "ZRXpvYTUfUiipA25YNitadpycbsHKUyudNjrwBYokQdSfZo6pSCMRsd5Sq4QVmqTZgB77VLKKHgLUFuTRmnUE8Y",
  "key24": "5X3xeNzrNQNK8qXaw25Fkt4G1pWmTWg9RQjonaVwtFGnHFfVMqkQvRjS7RRnFThJXyL3RMh8Wn2r2ssjC9S9YRGD",
  "key25": "2h7E9gRVW1rUUX4ARjDH81nZdx9hZNc5QEQ6TXsgDEmojKiMdomF9GNoeMSSxcjCTuAoCyGpV74WgMyMiK9G7t3E",
  "key26": "3ji9Tcv8EL9ZC7tiQgy8wmXocCy2RWSJtrNCwFpkSngk41gZYbmGEJCQNrBnraLXZYiwqvJAnvoEPMRKPNqzX7bx",
  "key27": "5PbKZvr2CEq7Cj1aeEJ94DPPfCjX18dGTMwoWavq7jqffvRrZHbWGwUEhXxuHW2e9fFuttFDMJjqN21h97RxS9wv",
  "key28": "eVViSpV97JY1NNM7prHjwGerxgoauqrEvD3bwAbv2Bp6musHCwJqNop3fAsfopUDUfCfwHKxmqbZ9NcQviMCiL5",
  "key29": "36etbikba6V2nW67eX1DTg4gqHVzEH8aD5JDnkjdcNp7Gx4HzrRatxZYohFeMUAgU63TcfNmb92DeAMTXCekzQdC",
  "key30": "2FSNmH3KXHuTveJTQu9ZqHNykGcvvgioCDG9sf7uVnqKSrw2JYBfuUzWwTqBqBZhBN3ueQ9cgpkTfMdmzizRv1Se",
  "key31": "4N7nUHcSHm6gKUgxHKo6P1JsE7afSbdK1CPmopfTYN6FM7RjDcdpNdJffASMCagxtRn4aa2HNqiwALteffyPG4mM",
  "key32": "3Mp2TDfyK7PxsAVp5CH85FxEAdNC1kxj9ThMSer1Y48QFjMdrnmyZyvnQto6X1bKK9E5LCEvXguaSCCexTCUG9rz",
  "key33": "4GSyo6ChiTN45cLHNFc8Wcp3ibpK8bXPYWyb3HUXGe9t5uGBceySiALbNi5Cu6rxb7V6v72wJi1aN2x3UN7mUASn",
  "key34": "2dhgGvNbRV5KdayLZRLz9sRtJj7FK7SxZPqi9bZoabPzPVWdyf66zKMSpN4UUngLmc8SgCB5sDDAYBmLALPwFbZ5",
  "key35": "5sWcaaBnKMTCeoN87mAnYAggRGL8EveMbB27GjhdrVoJs8Rq3SDcnTESxKuGEc9CudHrqJVS11RMHnjv61Zirr1U",
  "key36": "57br6kWBR6YcD2eaePtWAHe9EjmGwGeaCpT6tKzx2ykahfm1r9VHZn1BwqeoaUWw9Z9hNvn25jiPy9HZcYFtxNkC",
  "key37": "5CgtycNR2gxUsV4d2a2mghC1wQrdoNNq8u5w5zwGrcKSLc3hmTD9vfxYzhLCNrkmsfXtsoA7JgDzkRjkk86GsRUP",
  "key38": "XNaR5EtfjUPYt2emQabHJn3N4zn8BBvhmEJZp4XDGRYHFQiu4mnaUZu8WSwF3UFn5ksfw3tVe9iMU2aDBgfkTeS",
  "key39": "bkqLVZvmJ4d3LSejRhRznWakyWHg6V9kUn5Y27ppZu15hZDuif7Tn7WJbw58jczzXaJD1x1fV2iRhKokg3P3YN6"
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
