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
    "2nd2bHwZejoaLDAKmPU62Rn9opqHWFhPsoVN2uHbfNhrtZR5pvjMsMfxuefZasZr1q8YGY15oewcsf9JhYKkGJdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iBUnsdY6yufKeDUbSULrgJ4dMxjpYDM15W8B7hc5fQ582nza4bruEA9ZaKYMJ6Cu3uDVC4Uyfo4xPiJjHqJSNBP",
  "key1": "22cYLT7aHrfg6JnAhkaRN218Mg23CYriTvh9AWJpMActgdERtJVYZUi3Ao8BtRCqhJWGXpcfWPupxu6Lhc3n5aFv",
  "key2": "2UTwwAZk6DGYYHZZJRD4RxMhAm4cZj5CFzUQNyyk9t9gAt8CoA9vx7Sz6xmUp2aWxyCsZrkwnKYHdwwFP1LHe2sq",
  "key3": "2zbmr4R4QGa2FguQQVqTjdJKJaCnMbe5PwyVTWzHtAsJX6aDPW85mWkAYWM4Y6J2wJQHgRwWqesqHu6srB58qFdv",
  "key4": "2HgbqGAbNgLDP8KsmMJzyRtS97mH9g8emKndBfgUZBFcHPoF4TvwaVTGGtx6BBqSGuAW2D1xEVy7kFsguCumUTyF",
  "key5": "45S4KEtS8SiiSvC2zN1JDkZ1o6JWMVnhxEy5kWpt2QXsKm5kffcnDutXiQ39jJqStMgLvtb9kk8S9LmVy6nsm2tU",
  "key6": "2HKqe6Lkvyj3abvwL5MKFYgj4g3g9BvpoVX7JUoDVeaJT28ufvhgsARXSK99DxaFDFx5SeVarDhF1duBzBBWwquU",
  "key7": "294JnBRdQEWtTeqwMPeGRsCAXFU2Hhd1eFFqC42q7SoGpYmmerp5LvWQQ23xs3nK9Y2HqgmK6o5PVuCCUGTmitRX",
  "key8": "5BJGh9VUiPArwgWasYsQHV4dtE1atprrmt7tvFQyYYeLFG87bm2RdZbPQD5oTz6vNhSsRxJM2MGG4oWFSQPBy4FT",
  "key9": "2PnXrq4WeLPaC2rxzwSsJqQu52bPbRK82uW9Bg7ndJAwFBqXqVVSc1ERWtwCvC2nxfYkr3fKCTiouUcXmMhbomJb",
  "key10": "3BGmAyZuaVaKrb62sjDjFLeZt39YjRK339xsaMp6eNST9gp2Tbf4ttM8nr5CjPBTRX795bjE6zRVs6AZ1rA6eFPn",
  "key11": "2BkHc6WmgjtGcESjKpqTvKWt49Gvrga4zc2BhwG7vmqdyeH6qUHyaikRwCug8xJFyHk9wB4iiK9dWF1krNuigZkP",
  "key12": "4ELD8vWariQRYdUArPGtfvBQc4fNtYrrsxaNfmXMmcAkRwTukjKREPTmLpbCEcPadUgQcfhEeiuJqhXB5XGxgwJk",
  "key13": "4nSRHPQBcvCDsYSk9MNvKpHfcmoD9uBFBYGhz1FaAgGcpxtCSYwZZJQjB4SkmhjRkfKHxvL73ppBeiJStE2r5VAF",
  "key14": "2tLg5n7UEJTnaC8BXZeLiGkk5kwHQQDJCDZHK2rDTbauwJN9JCuuDYP3aSoPfxtJzHTQSs3u1PHCWP94hKRq7jEY",
  "key15": "4hnUBcJpbsF9H3VcjtMCSYqGPqveRqUjyXhFUs4iFq87tk9mwUhn8KyzFkd1MfzavvEJxs3GffyKkgC4rxsvydEU",
  "key16": "4JKFnDQ8oZabAVRbeoFZcXpGp8hFNv3bmQNEDUAEUdarcrF2jm7dm7nqVqQq4bHt9ij9oUc8k8ALaWJKw2NNkZ2v",
  "key17": "2sDabHWR8pW5iT1kbfEGwSonFVucM8Gio9ejMWQdx46rgp39V8w8wLmezHTXbGoyBTfZYpCFLLYJWoF4cwcKS1By",
  "key18": "3yT7M9LbB76arMfN8jTHWHd858Xy7ihQsRjacNfLBeKCp3PJTJPWsfJqKz1AthJJrFyXky61CxSJ87cKvRAHNLgQ",
  "key19": "28bEwSZkc5LqKLZJjRALUkguQZL9aU58qfJx93gDV9MtPSXKrsHWiwZ38VssE568VNkBujDCSxga4LBzbDRnqsxv",
  "key20": "4LgKJkhuLvmgXxLvhsx9octT9PL5SjAGtxxa5GCxwoe7NJdsefKZe5BJS6DL5n2RVWsHgdxyJoNu8WvBbK4KyeTr",
  "key21": "Ze9DKn5sFiyohtUpf6zDBzwr1MsZVWfx2RtbQoMAWVGz4sPt596fZ9YggDkV1kVhorRHzXTWiRbHF9H1qrB35U7",
  "key22": "2eEdZV8e7XQ4uoo51RZkV5oyap4KqCihS1QFKF8fgxgXNCHMGihwqMN2oJ8tPhLNMtZ2Q67CeocyUbvmpfp7zECm",
  "key23": "iv7xxXkVVoEyrNTxXSFEDKQWnjY5UX9wkNputyeAYE4Q3JnKiWskAji88piU5MzZrDzGEzmWiqDKZZGSR8yrpMS",
  "key24": "23iDBw4QjRAGwgRYxGi83kiTyK5yoMMwRB5wuzwmHMw8nd1Gc9FWNRuwki4bJcpHsTGm1kTtzZaXbifugU4M8UMM",
  "key25": "37MR7vofyUAjc4Tfwqza1WG1Vbr95yx3gJPAtfKknSJ4U9rzKYQzvTQzioCswFuPV7vSaveTuPEjSL8dGv6ATQAc",
  "key26": "5QJThF3WjBPpwbAAwZAvJCcLFmzKV82pyixjR6kd3yDrrvUfd5r31Y75tedZWQKgja93R3kpfKzQgEZxPT5aCjuJ",
  "key27": "QvdxcnkF3e8aq1BVMiSBtSQ6isb7U9LQXxRNRsmRnYXLQdBuemUx6jQd23zJDFpPEgVEVgzwsP4YAkWx58Gq3hu",
  "key28": "4SA6tQyB3xt2uWSg4iEEZetppE8tmLGbfqr4tMK4fgf11hXJ83mt3mN6ejf2sJvWTq1q1qKRuBFfx5aZdKJmMzAf",
  "key29": "5jwQjw15uSXtvWMEfasy9yjV7i7bHB7ctPvbLLeLY39nEdURzh9cE9148xWBgkm6tW1LkcDkJpQPfUMkj3fvZBgq",
  "key30": "3UzbWTyTcpVhX6cP3QsExZPgwjnjMUWQyghQLUiKpmqhb4hVkqqapCt9NMdoGGQ8kZxCdV1pGWo2awyDRCskUNR3",
  "key31": "5jDr1D3haJDH4xyZCwWyD2GVE3qFGN9HksTU8TSiM4fiQ1awC4eZzyrc7HrBaXjNybSSd7CN7RLYg8TVbMYZZ9N8",
  "key32": "21YpEsga22axDzptbKD2ZCTUnfvpL6sNV5hk2S6JqKCaavR71c5pavdGaaYYJCjFVjzqZVyphHBXsWMtHbX9hnVJ",
  "key33": "45RvWqaYf9keAZ5FSqXtGdnEZHPnDyG5Stdxt7V9jFx2phYvXPyNavJCxbZgS9swWdsv78FDj55TChSZJ9uSWBDH",
  "key34": "vebE8TFB6Eq4jVkPgqSnJPaSzKUMtv5ifvm6ZcX21iWSbw3sTghE9kb56HbY8uBv93RoYQ65s8AMWxs5FRUA1pG",
  "key35": "4NcRZ3MaG75xqZgXTHkQKK3Az1LWgTBmEufU18Rc62jeeDchGk3m6X2xTXie2rukCaN5oCEY2gFKpgYJm65EsHAm",
  "key36": "3G11cfBinWQVgJ25kVbLbPzAc5QVryng7Tpo6ozApsQkj7dZK4vvdRGWLUsqkV3nyB1yUW72Q7HbU9omruvUu8P",
  "key37": "5dRmRnA9TWo2wvoBWDQpeQef9g3iGnG8bUw16MWqa2mX3FpA7ftd5LEx2Mv3TER2JtTX6rW95s6fKVVEeU3AvAdJ",
  "key38": "5koFGYkPCpQrxsCTSc1TfTKpsXW8LqB5kahijBKHNFzNdZsj1vVY2PixkwqHBeNpF9LuQ13spkHxu4y3cGAWuojC",
  "key39": "4Qc7n9H629u7272SU5cJ5V8QgCq11mpFLTyx6S9KHuzSgcV8Y9Y4bWdXoLaTNjKqVt3xMNSmpXMxMXJ1WsvvGd4H",
  "key40": "pk67xVziVaSLL7zGm9yAMCC6XbVNGMvoUKFiPUPPkni3R3eS8pLPjEZcUeAdabzkLzyZB8E1oyjn2yyBZevCoMk",
  "key41": "55rXvBsczvrcufeAEDWzdvuo8XLQqHjoEyj2Goi7vJsrYwbKGu3gyuWpFDWyAneSyPfLt4iwyvydDxqwosmShhUv",
  "key42": "2VHA7JVfpeYi1MecHYrTKAGcM2LwdMaWgs87RYZ2A9yyUmVrspdsf3Pkeoky35PRRmqTaBWaTQKTc14uBSHzTdmh",
  "key43": "4ZWqv68fRASorb2TfaU9ESMade5k73WhdUsjJoeT9hDGbQ7ishYLffg1diW6uCdo191M76BX48RbGZA9x2xKnL7s",
  "key44": "4mPDjjuhh31cJTjBuB6T5waFqf6HQZcCU9FEfSKsoPkEtRuEgqTGJBxtMCGT6EiuvusbgrkAtYhP9MTa8A47QsSo",
  "key45": "4v6vj6dVWANHakrwnpM27jBNX89FPPpbgQfE3Qr6L779VrUAjAggVCM5EuBaYGDeuqqHMtj8J2SMcMJGmEmPpoXh"
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
