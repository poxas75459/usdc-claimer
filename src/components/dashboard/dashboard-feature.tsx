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
    "5nfEzxNhmd4NxrPDVNcxdLZoPDWHgJZudisigKN5P9fuLaD6Wj3F14N4t4kgPoiM7bB7kmyAc4viNDpgkUeZp8dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v4GxJaC9WJvrPc1hGkVnBeBANigo1eqGGU6ZxjKbfaQwgUiayVvzobVefrFf2hAtDNpA6nFLe7oEoZVnY9cAprV",
  "key1": "ErdN6WAFwtB5NVmmgDGx2ZjWazQocRHo9bov6cyuHKbuKuywBnmhyyYupudbq9fKpoJDTXHimTk35w83xcmb3Ph",
  "key2": "2prS1auvKsj2FERWYYPMTrJtkAfWkScFkwUT6pjeNasf4iNh981ujWrQxQXCktqpfRirWKTv29qRcitkz6o47mkU",
  "key3": "2GeKGUCgdGWy5ruXTseR78hADmijYJtS9Ga1cGwhYmg9eJ7itEEF6j7YLidvJrCkL5RqKYhEtvYGWgr7Bcdf6qCr",
  "key4": "5tc3uj87BunBk5cvcaUH6NjHdpoHAKH6VGzs3ceT6MBD9M926n94JhtjJB1TrceoN2nT8vri3d2CjXGFacxTEFHB",
  "key5": "8CiEeuFJZnnprZhU5E2gBQd4FkfFdtgs1uPwJfeKymKNEr2HC2ZgVn2Yvs4TWiSKyAHCBfJJFuC54jR98KnkgS3",
  "key6": "4AUTBNfw41VJ3EGr9zs51KFaVdNkpd7AUBwwKyYNS5KQ1hvTF6MVWJs8piVLqiGcgvE5Emt7pWJE4cxeKAKfa3Cd",
  "key7": "4CBu1d2t8Qxh3GsLZadJEmzR9byWevcm1YKx7Y6zme6c6Z1PVBJTAWdmccLDtHf7R1mQSKhrceCZtGcdkRGUd4FY",
  "key8": "TaZjjf2UpHKZUca6N46o4FtwC4NoD2pr5NA9bZ3SmkPB5HGeGooth7un2C8TCuf567gxehuSRq4sKhexnFMUZeZ",
  "key9": "3UiVpm8kML7VCNoj854xueNMrrDoYRxJnH35U3cuBpUwTSi2ywBDu8LtW5khXjM5PYtPviHDUkjfA3LrUCqjeusp",
  "key10": "2ZJgCpWn3uRAUGVV1kRL1CHUwr8QGeX73hqtEC4NsLkesYjKKRrLt8eQwWa7rjdxvQKkJkv4wo9z7Guv5VF6ULKB",
  "key11": "3JAfvDB2HZ12BZiueqDBdXpKQpQnHTgxTxm4cwMRPCv8Jwi6LdzE32pgMLDFREjM2RnK2HZpAGbCM22XK9hRBeTp",
  "key12": "4kaCn7EB8Kfz77gZERuo5Q7u9g4SJo3Kb3HxNJvtazr5wdD274Aa1qThdx3TfRTi2Qp8syZ6jsrfzwYpJ3ako7SK",
  "key13": "2NpRQKJYg9iB3aUGwNfpHExDiQ4RfwUKJRkptsTwAzztBZoVC1camCevVGe9cS6gD1Z2oLvtCkB1bojWwy3ePVm",
  "key14": "3uKBSp7mrkCox5w1ney6iX16hmr2xqPtvpfXFFrPLtiVJnVAUX62KT77ug45q54ZkZrMhw2sat5c7Wm1ytdSSe77",
  "key15": "59evmEHDcFUjwpayHaCby4BLAAdXuAEdUmFz4HEpLi3BK3NWUgn2zk9Q5d3RPfrSL41M3EQcrgCRgpYocNtuZmxQ",
  "key16": "3a57pARcD1ThnQDuXeds4P5fZnsnSP1vrWiYyhesymU2npuYTZAwFJmcvLDJXsqCwfKJ5P7pnjRsQctf77445V5K",
  "key17": "5TKEej2hvSLAnZa6CET2Dve3BVfxL8LknaGLx7cGrvjKhK3SkhKMZ8DrQY2e4hxMNxzF67TqR2ppJ3fHaQFzZNUc",
  "key18": "3VdrcJmuLMVey7C4SLGa6NFS2vScGDhQe2jKEZ8qTejJC47ond4ZogfSyxMjjgDVEBd8TkiQo534y4q9UuwvsM3u",
  "key19": "3mW5XmLXRey4vjFt9z3S3GC8H7Q5vr24fgyg19gx1Ztn23xJuqGDHUM5BG7ESt7rahUSWeGjPuQXpszYtoko9srf",
  "key20": "4FfL9rrhqxixGBZhPPisvf5bjs26uSuDhGMax639aLxdpdL1sYjnjAmcjQQAiGcMbkjiSYs3KCvGvfXeqVihrCiq",
  "key21": "61zWjE5d4kH1HzQqib4xsg4pn6cBKko9CBdJrEKmnJxwmhHLHYsF8JsNg8j4ju5fbg3sxLyqdGDKrbWSSPNvMLxr",
  "key22": "2dS2d7McBAvnMp6JULLdfKp3XGPMXnC89WJmi9vwnJ4TF4vc25RXUbRt3eEzZE8hXxFqDXYAmUgtqLYQ1PuBHHio",
  "key23": "Gfbp35wont7ingZ2M7GLDAwk2hsttSaeMFDw9cLnQ2xqK2bPZoEaKUVoUC1GjDFE6RdRe3mvfgVCMDAMQEXKixN",
  "key24": "4VPDVsYFik3etR3yzpWWkU8sZg8aEN86H24DFUPVpUcyLnHSP5ZwBtfoPjVzUenFzYV2GWAKgpZoLEWMtwEwLgUC",
  "key25": "ncsDAyDKYazvyUoDUric6DAA7MvnhMcQfPzk9TAP7GSBq87CxyZJAtW6dJc7KFFekFe8hRqvF5xVySJ3CdPs73y",
  "key26": "4U2JSY7iBzDVELqAUuhxWsGLUfFqdyCrGj2UQjzEtm4Crp7PHVHcR49up7SvvP4BDxt6VjPa7XR3FYvz6qmVd2TP",
  "key27": "5yYLYpGvGXeG1zjgyhVQVA2XN5XyLGcdh2BoUgRa5bQPzmAZyizasRtGhm5MzYHoN8jbrXqgcGWn8AHEwUXrEq5e",
  "key28": "4HABbZai59ZDomhtQAFk24wNiJMVFBAtNA7EhWQDqLyZEU2dDSVJY4cEkMHDQ8TuGKXkKxdPAgKC31pvEX67cZTF",
  "key29": "3ZJWemjhWG3z6zvnoqX14U7FtmRrLcQYZvz3faqRfeoxEwBnugYZwmoyGPbAneHHkBDGHX7PehsVFEZBXsZGD1as",
  "key30": "27Mn9aEtpssYRFwFipjtKcYJfWDvmyNEAdWLw1LiuikuUM2fAuhEUNTdMp634RMf4ckaSKXo2x7kgCoMW46Lvdoe",
  "key31": "3Vv94kmQdTucdxRDKo43J2HTToQ8YuGkAyX74b1fUQQtUF9HwgqCKSj6QSCSJhNo2L4VTGAKFcDX2FRGHEA9dsxW",
  "key32": "4PgakcjbvXaQ9EUiQNotYqZieQaiUSGwoVDHXjxXF6w5F9ve65drChA1pw9wWJb8T73jhLnNEF4ZSm9dgUVxiyS2",
  "key33": "5p655SxG3Zn7hLpDNCM7U2g5WUrrY9v3jMPgT7SG3QncjbNRpnA4pPdZV1ksARECM75uhD8F14WsLTCE8HEaz23U",
  "key34": "3oR3sW7MxEjvi2QdQ6YmSdT44BCWGzHs5qWYVY1FRYmTQpDZb16FwB4jRVGyhHUhZk3JmRNAtuA9K1uvZUoXdjtx",
  "key35": "4TGXskwfuAnP4PWNC9qy7EhpEE9tsvYw3cbKhkEb7mxaMEC4gzkNuWddNW6mWTSWGtW8Kz2RyM1JasKUspSF32MH",
  "key36": "2xgvLw5upBszYD26aQ4xM6SpyYYqhFEdjGadgcWBiveuUtGaLG3rZcM2Dy3U8qQ6T8RMpRTVAsfqgGLZvu4Ny8b9",
  "key37": "4rYKEdKtxuKWD6qdTfGTUfwGMJHTZ7FwM1eQpRpDrz2zEkBrvZzCpESJyhU9dJnpG6qHivdmLAT6QeT559equCNA",
  "key38": "51M77Ex9kicjwZHwFgcQejdYhGkJo8Rd5hWyFYQkAHdr2fk75ZqKPsoRTByRwQEBs63pgzjydDn5rGg3nXKPppiU",
  "key39": "Hkwo4GmacmuS2JSgEQP8i7zDV84gQeyPMAv39yp9YJBfcmquf4oBfyCXfqFGwZ8X8mH2x4U4sqsegd1crrcTxTQ",
  "key40": "5cjkkRiySm4e5d1D1mNpzWpyr6BJVUd7iha7BVYNWv1GPc74aDEMGKwAytqA5HLccKz8cCJMVXPDPvrayK3Hx5sZ",
  "key41": "5zA91UD2vgo87CKxFFmF6eJi6hMZCD3WVwBHte7eYMVRKLyTGuMxeYTY24KxduWvohxHN5mWYpy62iz9sHKTf4vi",
  "key42": "5ovMJxm7xXxRcHvM9v9mLgjpmibU7itMHrXPuXQFriUQHLrffu78erc8enZCw4QB95Vp57cL1wPEaqrExi3ZGpMe",
  "key43": "3CoXgwwijxBSkQRfg27khrbkPZRCyhTdmNoVF4ANXFDewEgiUyWQjhF9vXR61LzzaUW2WSyvzjXxtHGESYeoYJAz",
  "key44": "4dzTmsm8jbCx5qWCYDgrD8Gv9amdYi2Qq4ENxMGq6AXwyGXs7HdJ2rK9GBckG66SYV6UihKsrktxUqioNeVHd9TU",
  "key45": "3MZT97AqBYACrDCezP6bmsd2AgDhCm2CpV4XAQNBFFzhpHvSEUMRrNUyBAhWVWvwV7A6zDgkGxPXmW8uPMvZTgsn",
  "key46": "2zuQMr7W6Dd39TGHwaN5TJr3HbQeRkiDgrncFetTD2x4Hwtjyvkcd7u2HGDFHrutGgSaxvjbpxWXoP9BqXr9VqT7"
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
