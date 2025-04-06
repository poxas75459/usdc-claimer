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
    "adJ8Mamp9HwLEPfgFnsRuuMkivhFxQAz8sEen2hsT2is4DXswALmpznjVyeJWPFCw4tfjEPnzrhWvB2yqwREQbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kzLpUzaXoP4x7AV4Wvp9wtw3NNrf6cU4MB9FNt8zzEvntBxMmPupeANQtKE9WpGsQ8tksToqdoVq4BKEfCDfSJv",
  "key1": "2kZapobXCZbFKceZCRtWrCv2zGeNtXe8b8ABC8eG2WexWFcjCZtoekLowK7WZ5jQXfQ9QS8WffHnRipXaV141mvH",
  "key2": "k8NfkdScEaMD3h349gJANye7knn28UmJHnJSEt44Zne8gPecRL9cd3T5NpALq4Q9p8G7iybX1Sqiyh2XpexQ2e7",
  "key3": "5biwZfuMFLoPWxCfTXH6ZeitficL2UDQa6d8BVqVTE4a7j1GHHmCvMncX4ZyiCBjkJdkTA3ZMCNNtGEyBMydqGap",
  "key4": "5txtvJh51yyurNCD2eTYD7uhdHxQ4fPwcW15WLhpbJFxcCzR2mADcaWrifbH5FuW8dW3FQEaKhSkF7qpraNaQcAd",
  "key5": "5tjXCzTFMPkvUNP4mEu8Z5NVgNXJrX8wTmdZU7nJiqUn3NQG5diXaKLGdVTH5jXc1ge3ARTgqbkDts5hdFLkYew",
  "key6": "4trba6rnpFH6kpfHSxSLbt2pWExJoFzBEsC5joBxzB8eYMULuDfRDUHEECkxYoWZwpy62SykJ1VhkJvcLmKhZMNZ",
  "key7": "2ibL9JX66xCfkq3KZ5cBTe1rkWKnpNYd4iubXry8TKdV4ZsUhdWNx7PF1VYf8ZGszKTomYcnd6PB5y4DxVpdiGkU",
  "key8": "3vzai43TiRqfGGjoD3AqD67Y89E4U1QSTaYQZHGeU8be4Mmm34xayD7obJ5RQStq5aspAqcqwELY6Ru6Rt3SotgG",
  "key9": "2wZMU7rP1ZfzGyaAd7RFH1hxPGgCgqEXvDhVJYFCRoajmGJWYY4LywithbrSphu2t9NqnGLqC9z4Afjnm35jnwQU",
  "key10": "5HABeohLSBcPeexenhHQv7qNovYJnB6WcrreGdy4qXbwFcUfHCTjMuMvhFWeVPLgy5VmFq6WMACY2vvN7QkmCgAM",
  "key11": "5jPDuG4v7CzZohESz6HXYeGrSBtF2c7stuUDJddi9FsrXrBstmtVr1ioLaKswPE4ncwJaRq71xE1bf8VAoRoNrVV",
  "key12": "44j5bFag829DCesXFPvqr81JHGfuh8xMhLhBPNG8xQRSD8MEHLu4PgSND5z8pGW3dxmydRe6GEKbSGC9mT85CZyo",
  "key13": "kuqmNkbi9qmkJ3bQ2Wd38MqoKmUxDe5zvLHbs44mKYmypQ9wZESfHcufVrSeYHpG7n4oDtCeH1ovpKSHMvBLwXR",
  "key14": "2AMCKNxhYvJDmKTQNkxVUFQZGuBr4KuQjyhZ9s3JCP2vca9P2ZC6EBmtSYWu24jgbXiE3b8Th4P2NEtVq6TJAhf8",
  "key15": "Af154FTvPf3huvKyWb1LhijYCbHRAgz7pZgGQkczbsXfKsikjcLEpEHv2tkkejYrbXvimv8NyNvguh9G4gjYAvs",
  "key16": "gq45ikCaphbNkjk2kvH1D6jAMFgtV55xaXwsmSKnDJaD1ZDusw93GHA7aKSwRNXBL3oNec6Wc2QAoEUNmnw7QYw",
  "key17": "5cBZ6Qb5e9PkvuAVvsdKRqStFsnok9g1x2afSP7JfomhiWLqVCxPDULrWUYcVayJEhTAqXxWDdVPE4tzfFfj6vxF",
  "key18": "2H5GdJM7hyXouuFdWQQptwCYk3aiiBShVguhKResxA4PjC23BrBvwwr9SEGyVQ9emKtcCxPKjjTdHW8oPdufYdnM",
  "key19": "3kUsuJMx95mSq5qaARpMhbYZFz5Me1FGPKH7Mgzcbog4pGQ5ijLLxQ7nEqSPZX1wjMnBqYbDSPUoKYB9pJeXRDc5",
  "key20": "4oQDMe2XLyWq1sgr6oNnGLuMJxMoVEYnogMT8uZ9KKyqYigDxRCeb8u7jaGrFe8BEocnrY6p8REjHVavHn9zc9Yi",
  "key21": "5tq4eYQQ49xFVSZQCJXG6HYoazdHZ2DMYUXUY7peThNNRXKTbEUep1fNdMYC9QmjkdjSsN9vKve6jz9ZjWDAjtwp",
  "key22": "3CuXmXWdf8tfVedFuDr4k9FgiowwxjzHCpswkJAnS1oFQPBDgJKgBpehTtopi864JrJWF9JW8MvoikV3LiURYhBR",
  "key23": "WLKjvSdB67ZDuQmYqHyEsuUKQP8nzPLLY6sgVomnnY8K1mGC7FJawidgLauFWVdV3raugdJUxWqp6yM78iBgBUv",
  "key24": "tThiXFNBNEAje1EceQww7jvvmQrcvZLdpsQsCCeqUxGWj2F55CkPYQrYsT6ARuGNtSsjuPxBWToTZdkgaa7yQm8",
  "key25": "5zsDepu2TF3FxMJiz4M9JSaf3dYMqgXhfgFU9LjYMPeRc5gheTzJVk3pNkksXMVnwxTfiUPjDEiQ1wLBBWZ1LewX",
  "key26": "4Ws8NSGusmRPpsqf2f95V8nawTK3CCReS7Xu8wM5fMYwqgTSEJvUVoX7jpeitNwNGUVTXsrmx1GsX2AkRwmvCfxo",
  "key27": "4k31r6YBmPjjz65swCwTSLi9NhAPtQGkFwCfnNutFGJ2ySgxkErff4KtfUke4R5pPQdruuu7L71MehpY12cs3eS8",
  "key28": "5xxCs615yJm3DFcBEfGiFroYtwbJLDEnRoARuWphmd4FG511brgVMy1TbX7PqLLv6XtvG6FMb3SDkzw8hNrwwXEg",
  "key29": "33xhsSBNLooieJoyeSyCycXmBNPLPYGFRWArHazHC1xDUEYT133cmuCqBBCKEZcmYvbguemxwGTVcQVYJpPv79LE",
  "key30": "THnQxDqjFhcqpE35HchdNjftAN2YQZ8fV9WgLNQp2dmaPiWk5QuH3auyTLhEcsQFg21PMFMritXsRmmRqJgSnE8"
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
