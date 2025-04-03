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
    "3D5eXcjocQQt2M6dXqmAswPgF9ZrcrauB5QiB8nfYoSSxhbZXWcxmLEN6K6sxwwb2StDaz4siniDJhrXBMnThUjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DoZMpi4tYUCmWqYMduBMUxQXx1AkrmepbH6iCnDfhFjAZEmLFnSCmKBwontxju4ogB1m9ZvEURJSHsWFXuP2WAv",
  "key1": "1MCLU3hNEAGoLaCwH8xBfGxyDVKPM8pXQTy1ufdMhF3Wp7MGMF7fNcnpAzY6zao62Y4MeueLWhtTxMrm5qTyd9m",
  "key2": "5MR91VggNkiKAc52PPfoQG2zCD7pPYf8v3EdSu7uRTg8tEU4QJLrGRWQt2GxwHR2PiNuPn2fHGFNonWTjab56p8M",
  "key3": "5WDuAgedkgo8DXVLRweX7Dxp4eWXcVQ5UTinmJq3zkkU5ho23cQLq7tJB2diaSmiXUgXswBXxnZN2XF6A5aK9kiG",
  "key4": "3Lvip3ndppv7orNU2mfYYTDfdnJkG89MHaZpF6Rrk7eShnmuyZYmRwcZMdCppuqsfox4yRFznCBo2M7EMUCvJGWM",
  "key5": "5xnqaFVxZBJnBcoUFrWGnb9Y49TfWUA6w28LupHwqEc9A9cX2PjWjnvRMdjVdAHbsiga9R7gc1ycYst5qxB4vt4W",
  "key6": "21xRFP3xGyVf7eFKNgknM3f7XRLjqpNX1cWQ5ydxSd4zBspMJtDs3GLMDQM6su3k4yjhJaz9HuzGUVidJJGBZuKY",
  "key7": "4BpehtF3oXZDaKJYXzyJGRiS2XkiAQQ6oe78oC1KtkyiEyTahwgpfaG37EnfGR9oi6rZwLi4RQapAwVB2BJB9R1x",
  "key8": "4NJYBARwJ9xPAHo7qn9JgPuyFbqnmtNmnDKrcDiaMF1tr959DdZF2H6wPPSZzjBwrxXibAWcqS17RGuog3bzWyos",
  "key9": "2P42jkZRJad98sj6cFAKHwmK3RJrq2epFnvvtvn4U4Ft5ZF988nyAyDjbu58F61WMjbJM3gXvnQComtG2ba5UGFo",
  "key10": "3qHotMVFPoYbqfQVxV3yrsMFMByV6xaUEa9sxoKbMk81jzKaBQ5STbnr6AUtKchivxbKMZ9qmmwRAXAmJtwCDBPS",
  "key11": "5rfpNmSz6xshjFrK8ygDMGSNGzG2qG1rnJErFyLz4BWkFxYcL6a6u4S5Y8j41yzHWmXpzqZsqzrNsKThdF5XdsUG",
  "key12": "ZFhchKXxvJDdL1CHe6SxbpkG6ZEetoNvfcPLt4tu1wLy1UiVqfFF5KsD17ib6XSo5ouaoHfSjVfzAGpr9guVeTE",
  "key13": "beQJurByxKMRU7P3ZCoME243TkNCySZvUMZawtQ8G5i4S7TsPwnNPFLY7kaZL1SJjL66gR8VYutBHz8hAffpdPL",
  "key14": "3URPitFanDfJCSgC4DfDEAAMe64wvuy5uZzGZgz12GTHnBxp97exYk1efUAtoz32SwWRGVy4FiR8ViKnnsY8NC9d",
  "key15": "nEAmEsrNnitHg7No772aAshrgUXnhjc6FncSb4SGjbGtiPHwCtVnekML7SUBQKVwkScemaT2cEKMX3dkriRppAL",
  "key16": "5K2Eas72EGYCASZnwpYp9Ntri4duFeoZbY154EmUhc3Z27hVbLzEGNHV6yWcaedr9K4zhmUATcqRH95PwPm3GgFc",
  "key17": "57FLM3vQ4mGixT3jvnDz2HKJGy1D3wPnZpyoHssJP2shUQgMREkBH1YWGQCTVnvhec2KenaQoDMnBzrtxcF7drKp",
  "key18": "CAhWFkpy3npp1TVgqRK1fo1cU3p1L5cWrtRuuNCnT2QqhsVb9aX2MDBo61NnTAavfpRubk4fHQokWmGDLzEcvqt",
  "key19": "3sz7BTkvFoFBU8epvqx7K39KQtAGnfHnFgJAY9XXM4E2NXSUk9TtNTktSzLS2ES8rnnYVAbuUopEp8U1NB7yTLhU",
  "key20": "5aMUb2N1EKJ77ep26L4XLM4M7ECxsrFs3Y9pzksC6DBVhR34dSnngujjBnFFtJi2ZBmP3nfYKAzeZwJHtZ6ZCqFF",
  "key21": "4CVwRTmV23gxNC2m4jVnkKBLtUgmGxx3UA7W3x7Wcnbi9sQ9s5Nu9eXtQpX3c18sh6LqmNg2yYnUhCxvWLagFp9V",
  "key22": "4py84w9q66dnd7SrYsGUHYHFbtuPqrkZRrtwZkn55zdgnBoLesN6rz8vMbP3Dd9pzA9AaH1E1HhR26jf3oP8wX5p",
  "key23": "4D5azTNru7Le2R2a9CmwMYXHzn94SjRZ69AxTD8eZntkm6RxSSpBdC27nTShyMmMjoX5xxy5jW8mdZcbR72sPfcv",
  "key24": "41LCBKL71gzTJKkqB1d4enivyBEdsH5RaXse5kSNmTDfTX3c6npmT1xBaoSAkh7Dr64PhqYKxjSDJk8ZyscnEmUc",
  "key25": "2hLHUB7HSfVeY3q4Mh7EzuRhDgX3kCkJeNXkXFyB6fk46sFa32kXDCKkgpwjaNyJfcgt7VQYCZWXWMyvTRxKuhKc",
  "key26": "4Z57SFqZAJZmvi4oY1tPYRjarAPxWZJT43qoadqHmd7KucmSmrbVRDwx5asuSgHtMo9VMzZUaGzBCroDKdD3L8zC",
  "key27": "3nEht2WKupHZjB3UD2ouQxbSZiHrj69gPRYTCKMaZGcVzWYkEwZKS1eFoLEG6j5LGLia13RNRHzUq7KwsZmoMdqs",
  "key28": "3ZWYyLxJyYsfAZwwWGtyoZVYRVKeQzvH9f5dTKGWoiJYDShGGCfuMM5wpYHiGFcASTVebmtEwMyEw2UrpUeAzrPX",
  "key29": "3jxiVzsYkaSFMqYPe1146WEesGecRUquaqZM8juerDrWZRBamMfYD86tWvSWLmr2ncdp42UeYAz3XyMWnLdrpzED",
  "key30": "zMfMtWtktbiVCGdkgPCBYwxnjLr9YSSDTxPgaPsRYBa5uVM49UpHQDTAqHk9we3ZmwoctBGhwd8MQiJpLzoET1B",
  "key31": "3eb1i3wibbRwm4H3FJDYfN7YVq2t12MPS75yXYKt1LMecerAb1Sw1x6PtJPaLUxKyDunWxkFf1EWFqMkPVNCDiNB",
  "key32": "54b2ATGESGDGqLk9D22A45jux2msDBmcccKZAH2Jj5LRb3bVUoEKhXV9Pkr5dVezpTd1eeMJBwRuWSxCiPD9tNSD",
  "key33": "3EYXf9S3FQ78cwWfm1iLM4izkw2EDVQ5sDHoRRWFEPkGySrt8BVfnehpV3f8tDh9GFJ79ZZCMXw4cwywLWxakasZ",
  "key34": "9EU4Lfta3QRYxjG4Ja73nLFwtzSLoP5CuqoX1ck3vjz2ZceTtDQtAJnPinDiD3XLctfkP44X3m75peNPxozms6P",
  "key35": "582P2Xuu3sPMYzepdSMmvysZbtHFgZSt3ZTg4gT96B3bVWV3Sr2G1KKmDqr3x1aPhxXDoSepYvmB1c2i7VQYhe7y",
  "key36": "3vMNs8vChvXnizR4BuAjdV4CKtSfqyWdT7ciGmMrX3jJzngsdP6FqojL9VMeWW26jqcaeCvxzgkeAkNjRcMzgP9t",
  "key37": "2cw3VnBVjDsNBAFsxFEN27jH6FqKkTeCwZ2LaojwMvzL6aGTbNLedac7dTtquZFkqtYeeSzJU4LXsLsoaMBSpCew",
  "key38": "FFejFxU7L9NLo6ykRhqWhVsFymVW25kwoUMA1VDQJpC6fKo2H5Gr39tWAV7A8ELm9C8Fvr3QFbGbUY4HKDXMigk",
  "key39": "5y9HQcTbZLujsLGL8r8cyAdX1KHwfViPfkVCBM2NGbGaAZnDK37H2Y9yv6z1uEN79vGtxaY4x9Ux6VME2wNaLm26",
  "key40": "4VGQgqszBYCJtPGQYxvzux6fxawvsKCW8RxXDdTPJc2SSmnnpjZGH1UUQfu2jYGo12eksiVqC3GAysWH5Mvm2NHt",
  "key41": "2CoVGptujhEgA8UEzQtvinygj3oGDLDwf9tTq2HbMDYgZCkR4h2enSwr1J9tnGkdXa5PnJAdNYUscjYNVZK6o56A",
  "key42": "2aDc9aqF5fPit7PAQzunr2uxy2bxHEx3GPULrrePhqBZjgxgj5raJ3vVSLXrFmGzNgwxU3yRRkvuT6HYiAeKS2qR",
  "key43": "Ex7M4Nt12z2AhogL4N1TRJrt34teAQWYoQk5sobp3yKTttXBCQoJwZ53dB23BPxfzjifdzLjCkKYzJ3wwLwAjMh",
  "key44": "2Gs3TBpzFDAwSSN2YfMmCMhZB3WQP1iqeMbaKECnWNBejcWMFdGJKuN9f1SJx9MWoHLriSLeRqkvV8q3gfLvxTx3",
  "key45": "4N6KVt3sXcy1X8hd6oDeVAQ3qteepzsUrUTmYBzL8HcPqbwbaqKrfj6h3szKUREckLkJARdJDxs5xe2VMvDGvxuk",
  "key46": "55AGykX9sZEGbVG2nHrvFDa9E33ku6VckBA4B3QFCvChjx5b3mDfZMo4tCEJfXStT4UJkgA7tqFpGhXYYvf8whms",
  "key47": "5hDh14BPMn9aZJMQMw7k3PtusyNvrnHD22ZpYuawsvzoRATAjtF9FyNDKEBHKM3KNDcdQ9tB87eyRhiuiFuWjBU5",
  "key48": "3S9uR1foGXynCzjQqomSq4sufhKCYNibwnYa3diqoWdFwLaq4xUzVPcPFm9LasQKERTn7QL2N8aMsKKc3zZy6Tt9",
  "key49": "672bNzWMSDnjxTz3awkmgc8CdDCgTxXMTtJQFLfNTNkoYLGgeAna12SxyDXvNpk41xiKgKoQNAfQw5UQdu1P9W2W"
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
