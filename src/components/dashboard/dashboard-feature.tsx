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
    "3aezkYvzjdQAUhhFL6a3NDNne4KaF2nsVUi8VeV5VN2Fk5gPei1pQ4iWh5Xg66iiP1m34g4RjB145d1gupQn6tTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AfBQ1x6s2rXQ2vFcGGDmaY1mQXR1ULuxqjQYQxVCccUqrG3ddVntnK5UD4h6YqR2wB26D5qXoc1zSEFb7rjsWXf",
  "key1": "5fnnNeZUSkvQ2vXpGgfZxYMw8kng8vtAs4qBYs2p5mUH8R18tKUSNWXcLSCRDHFGnJYzdFrpdEjwo4iz9WrGwwJv",
  "key2": "3LBxD9ebUrPmLD2WvyQAuqicyJuEHsWFgNsYAMaUTBZsLkg3211wk3pdPYkzqtBXT8xqiKSBF1HouDwqKM5s7mQb",
  "key3": "7713T8442pRvtns7FV333CJnxj2uSe8fniuVya4fATmaY9N4m5McqJGVpNTbLV4kBp6pqXPup1553NcDGzeaWdz",
  "key4": "5A7bC1pujAXsBcKB6LwmhDGQXiF9uaaKpvEtRBeRtAPvpDZauL3PNqgthVDzkXmwqasUJeJVb7Rk8xvmDo4LKk68",
  "key5": "5JVTapHJ9hTj8VUKDydWNKWprRfQPwerDS8JK989GRwbP2T37q9yLbVvbf7f9h2BBA534MRidviyHaK3MUpcy2wC",
  "key6": "j3HmeJBY5vyB3Ne4ABpMsL735E4fRBqJY8gNE3ic3W81ZCC3j6AfwM9Vnw1ucYvR2CTnDZZKBLLVj4FXYQ7DT2R",
  "key7": "Q2hVcL9t2xbvmKWybSAQiizriLxbUsimxCFgnHies5Liwi5HBqkJ1U6wfTaj45xBA8nikBvn7qaWQgpFJACRkwR",
  "key8": "5R4YmdK9BsPgRBbU177wvwjtu4h6VWF5D9kZMDxsySq3NZRDH78RXC84KeVbHBRW6auVgvA78LProfnHX2XPPV85",
  "key9": "4ysLUaXGRvZsdgkg8exMPBn3fGor59ZT5zrjrx9EQovnBjb8ntPD2aqqLdgoBeX39E7tYvwQdRmZMSpQVbytQZ6U",
  "key10": "36F5UvEesiD9n5zuDmSZqzuKXEeUHf6k3AhTBZWcC5deRHiYH1Fqx1yBnWAHU2dkcRPxjYPDVAwHDWh2Xczimc52",
  "key11": "5bW4EjRcrHr1xN5vgeM26pWi7wRN5kUkjUfHjNSCFxa6sCGMwU3q7LvakNSrhopXPhVihaBzfsFg2nqFrG1Rvzj7",
  "key12": "5yZBbsFHV359Sw96ZBseeJ1M75eU44dzViTiSgfN1LyFvNmufGqkNwykpMuCiYPt3aJXfFpN7T93YyLrgdPayQbp",
  "key13": "5CD59Wt7Wrq6hH2o7jfbh7UFpJEV1Y3YWpLN77L4FLeAkEYy9xwwPL43sFQmj8jSxtDchd9naQkVtqDMFqwSszEA",
  "key14": "5nYpZBMjuLLyA5xk8qJzANbTpQDsaccpaf1UFPBWy7wiCJQk2tWrJ6uU8P4rUtfkbgXWajvUoNtSvv9fX25n6s69",
  "key15": "3q6uqekv5QbQnCZt76gwruNcfvi62sUFEeqJK9ZVMU41PNytYom6AaRszoyGTqtwsKGQoeg7tTanSSRL8Z4UNC4j",
  "key16": "QGrCibUUNvUA1ztoJvzsbFPH7PpzCpdfcVwDaibm4YaY2brb6sDyqM44e4hoNBxVM3Y1SYKQnJFSEwpPBvfapeM",
  "key17": "5KEjC6EYQaEGzzVGNayo7t2QZiKPqKcMu2EHRcHgKm4G3X7SLZesbbfaRrb13gRiK2UG5j5GNUG2dfR2Kqt9xs8u",
  "key18": "3pYcSCHhJx7nD7bZ1cPtLoqBSzQD5Hme2iYeg6tbDhD8AQgLEg2wChmxL62MkPSeNPSoUtxsSDTMw8JWLtCwZLgJ",
  "key19": "3WmMjMNacoaQrxRxzrMrdtwAnEXhPZ4uDKpb23CLeGc5WQDmpqbDYzZuFfuanp8GdUjjYq8wRsZZqQ5k7zAn6H1B",
  "key20": "5uyHFDEMSCCYU8gBAzWwrBYeXpWJjidiPu7dL2joRDM2ZxdTCCXyopTsqYGngMo37UvNL2HWQfSCNpqRWtrbs66r",
  "key21": "2ecsSxVbVTceZVNZ9VU1zT65S8RwoBv6xsxfBCKsimVvjmH3aCBpYipBBYWCPrG6x7y17vdwugdHSL2XK17eQrgt",
  "key22": "K5JVXpGpNb4yYwQ12p4f4Nv1rZbFGW6x7N2gQicrtSP4ikW2x64at5HGD6uLw5WFEBpxbgTQXrW527FByd9hGZ8",
  "key23": "UKgPqmM8xYemfijGcHAr38FMaHvnfTPWYkPfL6FLj65ymEQ389qjCenZuvN8Cb2SugGQWUb9iG2Yxou5bWQmMF9",
  "key24": "39G3ZderWb9t1pkmgjSBNvevKYnEYXD6X7Xh5QzgiNCU2erTQZkYBV2fdL36EEZKaaNxGm91VYYv1Pc4mSZHiXvo",
  "key25": "35zXzFdKvrv2n81AadDxARbGhWaSGjt9kDxhCyT5CaGf2RTwvsb9qwAj1tMV8Cr56sjkYkPNSbvHpWKjWAaiXykM",
  "key26": "KppjV8qrDsaMajUqn9fQUYFzAvCRendiY5syutS7H1pnh7vCf8EPUQ6aQD5CB9J5V6SAoauekBTuDpZPR2cjcov",
  "key27": "43mNyXQ6P6Lhcf3626oSXffbsc1HxxyAU3hDXSmygQXEebXisokQb2CYMPvR9eTMmewUDVSMwwUuUHkQWzYCH2YN",
  "key28": "2rNiuxAM86KdAD1VYrKHrYSnHZZkCjb8FQ7Bn3azxd81xNwjW9aEfC4pYv7zHUgRChDyYpjFEdAoKLTS5bRVw7Uz",
  "key29": "5RgdAM6j3xVfwGxL1o5j3iqiNGPsVUbjbXV2eikBV4zrkBvMgxAUNHzZZ8dHeqsYdwq6FyUJKLPkfB8LYGEY6Miv",
  "key30": "5xKjhciCpZX1qPqKKuF8KpFWDf1ms9eeMtDifATHuTTjkRdfky1RH9uAwATGd2aFstgm4wNvyZ3scLWWhLqB8oeZ",
  "key31": "3Vsv2QKkkmL8A6RvYTn62aVNow4EMTG1a9yvwVqE73uRnL5xw4qGUR56bNQWWHxM7BGrugtorqGt6NMU7h9dHpQt",
  "key32": "3cjkcKuPbcMfEXjGM42wfubpHXzF6fdWMYKomuxGiVZGUhpExj55gTMWPMAzzUeY3CpQ5rWtRspE8M7t1Cju7MRu",
  "key33": "MSk91cR5z4RrFJpWsEu4RgE3DtbhfB6aFQR7SNiGRFpuzHHofZgJSHnrw1HEeR9t1AwKNZUibxzp1BeKSLWTFUk",
  "key34": "bZRrGMU4wFSEbnio3JncHjuZsEdvyGnDoRU9uicszYtgTxhSGU6CusQ3XjbJqF8vK5FTVraupN647JuV3FEdL6i",
  "key35": "4JyNT3syL73nGqFKtSyjsZTs6NYNpeBK5UziLo3qo291QuogTJ65Kesp56ii4Rha4BXRcRcRnBTr6SN3qNbh8qe3",
  "key36": "fM4Dnv78j4BmxwFNrNaYCXdE1fStfsLFhmGm6XCkDzJr4v6MBPnKB2QiTqvWxoiSo1sBWLtDLb6xoVnjcC3HEGb",
  "key37": "4tzGbptezy7M4snMBs8n1RHkdkZaGX9dbZYVD7TiNcXyWZUU76KN6PAvZD9ht8qbNH6FPBetW6tYwmsHjMcXY8fT",
  "key38": "YEGjEcv5VzXHq71zTH5UcoExB9AxVxnVTVbn4dCHvgcicmQULLVfAF7dkPQu4ivnNPdUnCuHRCH2y4Lf69K7uBW",
  "key39": "53BFfAYmVtqH4PPrZ62nC772NRunB1xnKK14nYkvdX4QNRA8naeb19hohiBPp99K5uzUrcCfLmayYU7XseUaadY6",
  "key40": "2otMHYR8URsMCbavPEwrAznh3arftuTe9pWxaTcfCQruG9Rtohd3YnBZQHA7z1b13SZP39jfr4ivqWXsbL6mdPCE",
  "key41": "2eomDMYfG8qXW9Wvjm1tG6458NeTPm1SR9VbBxwTwrDVsjztvemxrEx1kEbZrEPF1au8DRbmvXUzES7rZC1cgZCt",
  "key42": "5ub1jWWXtB7GYZd7EDDkNPwoDZGhqcW7djuBSfrhTsF14BD2WtuhEd77AxDYnvsFdwe5kJXcYVNyKCeBZ1EJq6hL",
  "key43": "fBkciUEQtoE8pkxpG3s8FfEXMsMeAzn3qumkdQT79bdVGrHYNAaHbUpZC3AL3KfrQLRAEBBuRCaJijRcQXRpjce",
  "key44": "356GmGEdDoWrEqspEF3U8pDhjuZQAvwhXD9oGWrmSJCaixhWPX72Zwzxwr3FcdeiQ4D8tGPQURMVjVNe2wRZf2Ns",
  "key45": "3hvRxhdzdxa4Z19yR4M8Fbt7ZPD9BGnPzniSMwyWu12QKaZ5xursv4B367YpcjHf3XCEzfKtDCn48aisL6q6YiMM",
  "key46": "2yhbn7xZjBBsaZsTm8jmwVSinHGPWj3RKk8pZDjoHzRX3X3nDvwv2HqSwd6WdC4mYQy4z1vdnMDd9YBTmNeCq9eG",
  "key47": "3tKHmPuskEJMCZNaBV8oqzMfD6SRNPLmxqi5D63yoKxiHeSGoidoN2iYmbBMVrFQC2QTFC5c2faEXPW7w2gsnf6H"
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
