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
    "3uUfYgVH23XLN6epPmwZR2bxSNrC1nfH7o62Mb5VBcrzUTFYZvC16zCyiUd8BmEdCaUVQSTGDMY24bJK3caBE83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LNM42yYuR3zXAtPVq8QZaWzCCm3Ki8d6LhzHfAAfKHNBfDcu3vMGqmD8R8yeUKZN9z1kCCqzoXFooR61hcFsvuF",
  "key1": "673WS3A97gH8zSkCsCtTQuCtvbqRVcfuJWUP9vBDVb3XA5QaqfKuHZxpFNNNXeXkWBxFRtY6Q39X77ReAmbWcnzr",
  "key2": "5ypAvsvhuWbbbfk6bXDcxbkq3bNQ5GfJEARDBx4nmm3qLyqYfrR6ychzGK3s5pv3Fsw2Aw7sYQ67oMeGQaBEeVs1",
  "key3": "3LeGbynvdaTkxqsikF52p8KS3mhHHTW2mmnSa76qXVFFSmkf4cMzjxQgihwHpvy7Dyyn9nshC8qkoHpvvjuubwJj",
  "key4": "2vknf2LaHyoNVw6L5KEREwSG2tYgLxdmrUSEPdpHbNWzpJLLdrCSnxmUMNzsja3Uk5VP1PYfA67HVbikJLt2UMgZ",
  "key5": "7FMgL7gEB4HY9hzBpGY2T6Uv2Goc8TCMjmNr97poFKzMnBPWm7hYX85jW8c6k7GXwNuG2wWibpkyv28Jii6hJ1t",
  "key6": "2qFfwqPu4PgWaoqodqv3XERSszD1atHD5VwrJMyic9GzvbJATc37PiePRMWcKMDckgd7aQK3vifQo2fFTLy59dmH",
  "key7": "2NWf9hNb3RjLuvGkuT8zSzwUPZbn1hKvqds71PpuWUwZuXSje4w5DfPDtwgHm3VBuDDYxpAD7nonPKp9D3XVBKQW",
  "key8": "TRd2rTMTvfEyjsP5Ln4GnEdUujs34vmftBtJhjn9dnc88zACjdfPCV3EXktwsKKmvpzZVrSXG4mbSvnSvBcCsAn",
  "key9": "3KqjRTLBbGZBEEUKAHjWhi8pF4fK9rPNdMcBs1f4A4w2y1sW2QPF9xAi9wRS4gGc4eozvSiATHjrVXZWDVrx9Tcw",
  "key10": "2j1DLbRXAT99pGETJE1sPFHd7brKezmEw9XGZMJaXuGCEHmdgcxn8mHMm8QWabiQ9yyY7WhbM97whwEKduD9MHrG",
  "key11": "5pbkc5PhkWzKCXSJGQuLDgdw2zuQzytq8ZsZMEUamypFvTDrW3A4cSjPtyATgvx5S99REm6qSY8ystYa4Qq6nfuw",
  "key12": "4nXJnCMcVzLiZ7tPZYhtcbhrhmDcUtZfx7iZh7iBxm2PC52femW2p59NB3MKCYJrtThAZSjXVNwPQD5SZxJhVYP5",
  "key13": "4nupxmQDWFt6RV36UBGbad6YTWmqM35zaEy4VmaxEeJY1zGFdfsU6V2o2Yz46LWfyY4QMTeXMwST1Sz9pAy3SGzx",
  "key14": "cXufVCDHw8b5ijo2Cd79NApowNnnZgBKjFAEKvcnAwKWH6vcPRK6i3DTBbArggsyfh1r228SDjqHU6ake2Qf5hN",
  "key15": "36QtTLUfEDoVe3DTHx344iGQRHNaJQTfXb4gonMUxeS3zWEihdQXYAnRMWECirX3pDu4WAKG8E78NQywrtgtCkB1",
  "key16": "3zKMrE7EZU4aBX9NJdda33EyipcDBGqA3EBP2QtFnPJ4pvHNiaJhVavvvjVzoht49yiWag1zWa5M3k9LErkLFSp8",
  "key17": "6Q34k3RGgjecLgdx35iafXAZUEgTTsPudZ7D5aUZ7P3u1yBsaV2JRX3JSTpWTb1Gzm5ggEohZBKVY1FsX3VdSFU",
  "key18": "3N3iQszVFuehv3EZC7HxtQxmDANWFktQFumFtJ46UMdukEzqq1PXPwfuYf2Ww6jCdhHdTSV6e2ZfVbLcv6y26EDq",
  "key19": "4jQVc6gNwLnHQXHJARDeS3xWs1rt9JJvuvWN5H9zXnnSQzBbNSSd3h5jsfd9SeYmko31311MFWLreekzDB98py5N",
  "key20": "5E39rUEpjp3WjwpoVKnUKLxMP4TVUxUqzXCw93a3pZW7L5dVzMsyKyqf3KBRxmARi6GFN5zW4zzVKqks4XxPGBnM",
  "key21": "y2ijfrETg6S13GbX2GJwAdFqU71Y8tAzDJj8hRKAVj321W32fSfmNTeCgryhRsPUkg2iz9NBPmHHVZCTS95x29k",
  "key22": "5EU2gNGW5pHbqRBsuN55EVm9xJ4QAxy4jSfDdXacvy5sjZnmBNE8wQxeYuMSDwwjtDaA7uhQuL1iLaGXFTCMuTQe",
  "key23": "4PhEru8HTZbr3pMtoUk5mmBPwB3Vj3gy7gFLWP6ZrNPax3CVxUcot8Dz5w3xgzKnXs25hfWWyQW5kEkMFavfZWo",
  "key24": "5MwdZKAVJrRAdhPpr8Nmc7qGaQa1Ho6rWDTd25TVsH3CVxgxUdh95cbKjQY9Ni172DbXv2nukPVKLmUgpW8Eh6qn",
  "key25": "4q7CVSWSBCbS2q8tGWZn7yCRZcDreD1Vu6AxfbjkhJqxhHdaNvkY2FmFJbRqyScw982kqXYgVSTN6KY2Lg3kjXAo",
  "key26": "4FngQETBFikuQAXe9Le6E55PWV7Gc7S4ALnWSEXuoWWovtSSGEWSMbH24UsWwwLvaWdzMDf6Mjsv6aWS7PV6kZRp",
  "key27": "s1F8U6ZE1QgbihK3yNg5QP7sXeBnt51yCmq6Hsh7812SVj3YzqiUMvjcjTyUyzaspkG62h4YbqzHouwqXtdeyWn",
  "key28": "5yVF1dGQe2KjYw6MXRB8jhwEedmfEHDv6wHSEg8EsvdKfFzZzcFwgUS8yBw7p3pJGX4fZSYBCdLj7aUyswNE6Xrb",
  "key29": "4Z5Cnk9XCPMaCKzLo4jWQUPcg6yXd8cBn9P4xez6nQvaBa9bp5FLPYdUYTYiWoEm87pF9HQ6ujGA1yFUiXBkkbrM",
  "key30": "2ymzvQAbLiCYmXWa4hUdAZaSM4BZ1QHLPj4tXB8RZ2ScWhwhajWdHXTiVMPXqLLZZkqd734Q6PD2KbDsrjuy4dCv",
  "key31": "3jFPpTWFSgEdeSauEE9gqjbXH56hRSmN72y3HJ1enzzimRXu991j3kUYDXZLodqkbYWTXPu5HoBSN9SmeUD3SCcd",
  "key32": "4NRwNjUpExStdLrhGB9D2v77LPvdVKRVRxbQ99yZ1xzUvaxwqrsi5n2yLwm9A5Q6Y5dMBNngXYFLA7X4nwAJvYHR",
  "key33": "2GYWbAAUqz3KU8QGjFHkgjRF3BKQUtB4UH629mwLZ2SquXHt1Y5CmJh4kb7S2ZvuewMBQm1wxVs3B4wjkcvJo2cu",
  "key34": "3oHm82RZdRMcyKQMnYEvpLWohW8Qj4VfBgDuxJ26E91egaDoBdfZUGmLj1owtCKPexjMxVqzyi2TEuii5X15rVxP",
  "key35": "4yArfq6CpKJvZoBYcK3DkJ1gsPxBNm2sLG2BytLHjjWEpq36H3sP3WERtDLRoHCFagavzSYCRM4zzVYh88eS4awq",
  "key36": "4uSp726qRCrUtskjqPaCh2DUuHHX2tQGNDDigBqoYFzm8P3GRgTK4z1xFSyWLnvGYXvKSymwBrf5Nso1vjuxKexq",
  "key37": "aJqvwUMpQUUkv3xb9NQpMbUKaRASU9hK2mP2LiFsK1FWmW2aRxQm3fbCbzxWGEZD9rnmwA3fuxd7eBGF9tHsNQC",
  "key38": "5oEmoTyQ587SMjDn6Ht56w169dhL8GbkSF5M8fnKDVLLB5HaCE9YmgR2bqoBwLHAgX514HiTzuMu7FPiGSqvDxi2",
  "key39": "w93agrfHYrVkETCivnXv6oRJQvpBgWkyph9ioVjzawo9BCQ56vz3navmsG5jEpgSy1aTKtwotcWvnJ99e3AM93U",
  "key40": "4QFxLzQbkKHCnqc7CquFjkranN2yQGW5GMEPKjKKQnWiD53svsfmy9bTLwM9t1RM8SSpd4QPyYW4mQZHNtPLiK3s",
  "key41": "3A62bW4M7HDqN2C9yEoQWnz64VPSiprnw32nZjb69p3wfFjyiANFdVdg2XoVKAKn9zPHC7soRiC1cSvmRutkBvXb",
  "key42": "4e5rek3w5oe76UyNsZoCWTcWGYFq2fdzsLaLcmZzebbHcdGAfsTzUr46gsFruSVpYDmE9SYZcaHGJdukW3KGA9gi",
  "key43": "sHZhr9adSh5tkroh8KDniEwXKcK1eeVzEQUqwABMDakVq5fDKz1iRSrwn5GJzaWsStPdDDR7R58w91gT4SGHeWR",
  "key44": "3JNWvLW9PvwkpbwQLogHPfJ9bRbqhmwHShqMaR8mZ7fC8Fop7KXVffiMrQobqsMDbsjQJbHAKMdy3yf1ajuWyzYt",
  "key45": "4VpoQtkBUVwe4Mu6Dj9x79e4r1YJSGkogUmxvzVUJYpfCERNmaWEh7LeqwcwYnEajKEmaQUKGw82ycMnoiEEHedx"
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
