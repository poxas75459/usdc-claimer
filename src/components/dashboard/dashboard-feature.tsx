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
    "29ysqS9xTB7UdDjsP1T4DGkjGut1nkFeNu1rH8bGE1qZ8Rc5P8HfqoibtcksQ8RCzwH7dyhpFSVQC3asNKnQ52UZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfJsS4ZNXNjWVTjgWiLbgqMx8SPPARs3cvHCkwjGa12KuThEFmLYh75TGYkrFfgez7anMxL1ZGkEWGU9UTpXM9L",
  "key1": "4qAR6ojQczr1hmUFyKTdZf3cwjbRaR3wmkgoFnH5GZBq3bxQrVmuzNPZWrCqwmAsZHnGTbiSu4xcS1MujHXrtCtg",
  "key2": "3NqNyY6EdXgPNsu7YEiA4YUbMnPseGk64aiR5PvcMPRHoNwyGeyuNE1oc5T6zyi7t3kAbWyQrbCi1BfAn1GeTeTq",
  "key3": "3iJTwAXxUsYQXU2wwVGUfmnS4Y1TxqTBSXZbDyS3y9sNPnYegWxtMmmsX5322ErXcJoZ2uf2Ymifaoq48mhXd8xT",
  "key4": "5ZctyrQif4MNVzGQ91AFWTRQxcH1Y3TsrVfzHGNG2PGxW7zwtLHRoWwFNP5YQjhrhWmmCJ4MRvxyj24vnr28xXEg",
  "key5": "N3UZxhmtEusaSshhUCmzn3nmAqqL11mwyz5hYgLUJvFXrk5CcwQGWx5hJLL2MEZP4Dk2fCKGD8x8q5ztdWTBd78",
  "key6": "5AmKDmEujSrJsGEGLmNZ3uKFuN5QVsKm5zjh3TrwsnKHuB9qVtz7cVJSXNvvT4LcgK8Hw38jniy5HJTMEtWeBKMW",
  "key7": "2McNty4AuAu5RQxLoh5gQToNxGVbPDJo5Ypd9QjevRsvgytvLP5K6xsekLSovyDFm3sYETFJAN6qPpRYLgQAJTHL",
  "key8": "3bvy93tMtPino2QgA8hZjMTjUKLRkXJvR6gz9SzN2ofoAnFUpNCHot9nx3UXbjcy8XBrv2Gg6P8FRtGcDBonKwij",
  "key9": "4TqBw1YuCSjis1xdR1Les24hRMvdeny7gb5G9iHd1UVqkCyVULLAfEfhPv3Pd2oDD7nK65tcZFSfEWnPkcaZ44MG",
  "key10": "5WmvkkLCxi9U6V5YBv4HfhPVovWQDG5H66wkoruxdLrFF4QAwt5EqmjmSB5RsP1STxGvXSdpfQ81L4X8XFN9Q4AM",
  "key11": "2L5FGEoSYakbzwTxLVDGR3EpUH3HRCoxCKpwSqaEnF6qdfKWfdqwTYCnBUcdTy8GGA8rWV1SZ8AGMp86izvL46KK",
  "key12": "5rHGhzyVDBmB5SP1eBCedxyJowpXwusDAStiszW6nynszKDL5Y8ZksCGrKBGUQERRqbkeTbadNNRhgQ3XcYGV5KD",
  "key13": "4rdmbqDxRZnbsAGDDBr4oojfDoeAeaHuAkZY3zJnZgyzcboYNreQBXrstPktxUfA5a75Tn3ECT1gkw1jsmiUxaYJ",
  "key14": "2XK5PWnEiRU1TFPHxvMGArAXGbMBhEshp753zj7vhKqig9orPc9QHNgvJNWWTs6VK7hGoHvrWAKzmC1LSRAiCsPi",
  "key15": "3hzb56S85WFrD7wU5QbXZzRUSBYyuT8uwsDBFAhbwnJxMCGBgNP71kzj1s1FyU5v7ferA5oHWFvo8VnHQadRi9vT",
  "key16": "3CSy6zgs15YhQXaYCz4x1gipiMxeQXtcjvDodh1JrM2CZ2csxrytzLAdHbkyvPbYFampqwDJrPcVHaeiB26HvUR8",
  "key17": "54RMGtYxGCo7E3XDEMTCjoT2WMBYSFaFMN4GP6CrefpSnj683EbFz7xgcEMk5FLi4X26oTna1vyMF5vsM5RVzWTG",
  "key18": "pbjR1RrkuQ8rLXBTR9uyNJWyZtBj84W771X8M1Yr5L6ns7HyRLrDscL9RxuRJo8An3UxCFpsvh1Y291fW3zf36A",
  "key19": "PjfqoqoZyx5gcdS5JfobZjj1pDgfw5SVs3BXuhnE2Tk6pMZAsvfm7huGZDFMWKHtmDJnG47cDKnvmb9Ac8chyfR",
  "key20": "5eTU7b8zJrVYNUgvuYkC3ZQ9jALKPavMTMPZuaHHA8m28juKd69U8Mj3ZyAnwgYVZ8DuDCQFQb4FNFA6Wjg8Diwm",
  "key21": "5wqZyTK1e4mdqFfdt5a9eJWMq9u7s1Pwceku12zx3MWWWAQjzJsV71LB8VQVvt3vb2ntc5H1ZBRbQa5kYHi7nF2d",
  "key22": "2ZfApDgWqcZZ8KRfdFqTAp8zhQ7n5Nv4j9dPUG4Cip92XKEPqgHsVAt3M7YuAekKwFQGr6RriAFGwzrrjoRHSFQA",
  "key23": "pYic9SDnTZ58wsknTfVSQ457mGR2g6WjsoKACjsAog4VL79x6r4JCxZuMJ3drSF5kHWYDDef16UinaJR8nbKuG6",
  "key24": "2fGehzvfqsvMafSJ86YRd8R7MfqMrxjXLF8ZsVStSrF2jxcVjFiwm3dnb942SeRxPtuTuU78yvFQrVSGJYPwnsQ",
  "key25": "44fndVz4yxNa16E5enXoV1v9BXhjL91jdEGnmgfhb95nhKe65gB5UK73eJYQLkbDtfjCfKDwhHB7fnwXi7KJoUPE",
  "key26": "3fwcAWkeHN2mEEqesUUz6jJYFmfvw3beRT15Zf5GP6BDQBdi83pwsyJJ1FVYAib5wteN1tw6mJHH1VGGUuq6q7MT",
  "key27": "3YeFM4nk9CrDsB2bPwXehTGUWa17GGrujAy34G5zNrhotHGQTuZZYJgn5UTR3v8XmsRyVb4npRt61xzqs9dAdDFy",
  "key28": "2jyaeAxbYyyMAPEpQEzzWQK1WiZiurML36RvpUyVkW21qPww1uMsQbNjwGHe2RcFYC7PQnruXTXVjzyURoMVjTMH",
  "key29": "274vHat9i1j7W1VFCcgumeMbL7Gu2swxq98ZGxDhe21hARkx3vAa51Pc8omnwBWRPT6y1KXuRy7mbUqd32uWaJDL",
  "key30": "3TUyxBQrqyqnU79GBP3yJtbRQ4jDDzcoYWAD1kiVbKKQak5VYeTYGR6GXokoyBHbFhB7BiHDtEwBX4Xrm7UhAdsh",
  "key31": "4wwLJEj9YRBaahdeEYGMVdyjLtiNSkCvuUFtcW14Tsn45jffqt7ocSKvLb6hpSFQe6mWn8q9qPb4Srpv8frzk7Zi",
  "key32": "4eKgA2wHm732vu5sFkAUrEEk5xAvTGaMpQmZeRwc5TZRGVRDsAVWsaor1sC1g5UXVnWvBJrnoipD33XeTN1sKHJK",
  "key33": "2WZwF4mjGFQkQBdVobZzrjae4sycCFHWGj7LQYUYjUg445jujYeoJS3XCSKiXt4qTnaE1KLENzTcR3JPPJdR12D9",
  "key34": "5YyvWS4C622qDQRB1o6MB6VupGXGb9WfegaBFgrLdzkCLkhVBfvGAxhPtKJWsVoWJ8VEAAyfgYajgUjGMKPnYCm1",
  "key35": "e7LY6obZUgJ6DzdCtvrZ8Ea2Y1ccVmAgDx4PWQDPckn92tJyEEaV2wgG3yhP163CMxus7J7gUELEM9VGfQ5ntzz",
  "key36": "3aAQBiqSDXKUPvGnpc9W7D3SG7ubPWXHEPcjbMbUcTu2KDRSHkRUUJqfeARxjaAp1rYLY5YHsZ9wDgw8SHcqn43r",
  "key37": "3VHBMniNJiz23dTCwFwf2Gx2VE1NrYF9PfRZ5tSVSWqXMUYWMoyGaMN4WLjrzCyAk4knFwGWxpfWxqMaa9t9prwU",
  "key38": "3F9dq9vopGxENPKFWtGsXT5SbhMWXAfdB2ZBjHXfnqAD4qS7yPj1opw1gj5EGKSRny8TLD2Xcaw1uws8HhyUQboh",
  "key39": "3Qq9zRbwBHoqgdsukZqXDLxBv3oabov8fe7XEAPqZQnXjKo2tzcJKvxWAVMsywWYrg4PjxFMbEDmaAnx2c8LdwVh",
  "key40": "gCnPPuBgXfHeknFG4qZrc7LNDNaMa4ZWbboNRYydz56Q3UCByejzCb4Ks8yoNmGZcs1yEGpfkMCdWS2vWAk6Mwi",
  "key41": "31JccYTP4QNhGCNbN2ZCbeRke8wqwmhL49SzMv1TuYssfywEn9hGNo82BzUCTbhJrj6TJJ4K89ghpzx5ZfzVQKGU",
  "key42": "23veNFRTHgJ4stoy2MGUdoW7XHEkEZkcur25WV4oM9U7nH7DgyJZ1dVY8orkVT7fYU4iJoFBKemvRiXDnscSuCEB",
  "key43": "3S7JxnNFKFY2RzfDAzJBLeyEmC38Sv6VMB7jfYDgQRWWQfPkDne2BDTYKF472z81RXm4HnXqZ1n1qiECKLhh9Rxc",
  "key44": "3875voEhuofKGtPEXy4AsmYJbPt7YGPbw5PPdDxfHq2BizpPM5rVGPhdeWTEDAAM2xZjTnPukBF72TZzhaRZqxhh",
  "key45": "5VjKxein4KDkbB7CQLf1zZhBuRNFfAMDa1ZJZ2CmZ9HpAEUjACDYeQ5ppaNjaDjn2kHyThxVKUbNyeeyvyUMwvbM",
  "key46": "31rCrspLnSTSxrBnS2zBz4zdN9TC8nXResQCDdPr2pJWqZnCQbrMAy9Joc1zVfQpp1NiTs1iuHjFa7LYYMMc7pP9",
  "key47": "3xi8wN4JQZNLyC3QYYD4Rc7QuM3K8ac7WthAvQjMSKSEoSqCHr4mxisZCRAubUWoZbTrLdTP43WA4uZaB5VPgXkG",
  "key48": "51RL5A5Zw3wVhpewmxYWac92RtERhBXLtDK3Do5sZTF4WqpbBtKAEmHymwCmF88EonGv9x6Hae45GAWWrzHDDhkQ",
  "key49": "2HGKkpJYPRNi9x2r2n9LynsnkMxSmMbc3AwTvzhpzV3GjF8y9e3LX9kwgvLWzCLxToZyChrz4yR3o5T4cp8YS3dW"
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
