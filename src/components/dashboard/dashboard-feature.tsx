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
    "3M1j2z7NZpwTTDN67dsDxmi4XGCvJVqXMtGRXocevLytvov2LNFSTyhUMcj4DGx3AttKHsRMBWSACBY3mbBfuU9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W5VMAVSSuwAhYGQfnb4jrthqg8hMwTBxUHinULkBwgJEKanjpcbyB731CRks9wEK6egZ4Y5tFVxQRGHaRZKEEaB",
  "key1": "4HDMSnpG2bMhAByU36WBzuS9cb7hVNwP147f6X63cwUYz9Qo4h58zJeJSY1ctGXLgdoagKZHJDRSmEXcPBxbaRc",
  "key2": "2uoYudKLTf2hUju8VemFYNQypHPiXhyNmwsB1TrTQHc44QjaifqE8hs4SvGe8sNJ3ssCVqQecTBSca7MNzUjRywb",
  "key3": "2jDaBKi6G61oWwArR3Fpueoafnm44oMrpZcKYXLeYjpxrus5noUKWNSCRrRVQs44bq5aXAVjceGEXQ6vEyNMtp7z",
  "key4": "48Lrdvj1ceuuZ5Adt3oWHdhQ8nroCRh8McRy3AqgRgPSxnGbGHewL9pEUW2UcH8qvQren4xfQefMoVDeH9U2YyRK",
  "key5": "3wCUC3EE9ypbaSnKEa8GAAFLgf8jrpqQucaHMUghtjxsVBogEqAQvVmiqGjb2hnPS1LwyiKGLPjqo8gDpkQP9VLS",
  "key6": "4c9EkjV2rWtgu6tiKDPkdc3GgotACYiQtb2MAkskCBjaFT9TWuiYNRGhfkUEE9tUcQ7SGbF9CCiQPJwM8rhNYLb1",
  "key7": "3AzyyUdn51R8EJKPgtcyUwpetTBzg5vz5tLbyLYBkjHocvxKVenoAsdFVWz9zbAKHsJNLpxC3gN2rzi1DCzAF3vU",
  "key8": "264uBVs24AvgiiUobmizjSwo5LMvBgicHDrvZouuGeZuEXUuUuNyH7N1hpGLNhQ95DW7kLyAqaBjAYxsf1u6F5zq",
  "key9": "4aPm3zXcJaWuMGy7HSz2qUJqBzZtRMuonCsnkWKikP3TNhGCPiexJsNMLX9LXwELSN8ZDq7JtngzKRSiPRPvHxz",
  "key10": "3YoNWhkaWCuVYc9WkzaBirM9kevziScdP17nopvzxrqgZq8PWUE1bX7ALPtx6D8jNFjU2CYcxkZDr3s74tsJn4JV",
  "key11": "4VTJHXHoFb9gZ8m3p8ic1zWC4BgwMvSzRXyb7QcZJoRLvpp44nroFmngi2BtvecPaeeEJYB2S7TBygRgR9Vjt1oR",
  "key12": "2LUTst127tfjf47yFJWtvxeBuZGZYWtb3jkSnNdEohhF4z2ZAjqg79fksNNy3zJm3nHw4o8byiBXKWvpvcMcyZto",
  "key13": "63dC53ioWBzWBs7GrjSE69gjDCu8RwhiU1p38wTLGhpfqFKvHxDCjFQEUhuEMRWy1WzoR7j6hpu4dLsHQgg6qLSY",
  "key14": "33aRNC3UEJBaZQRHgdoxU9SkxD6LNJGuPwiQfN5p5FxxdLp5qNHmtRXGrSiYU6enhyzEqDuyQ1Gqo8VHJSKj7KcV",
  "key15": "c5VSRFLr99tCSjFtEf2D7EEc1ypu67LKE8kj3KekKJeDGL2EXFCpnSiZ491HgtxSGpG9MqPVcFxpKBwMD8KMPLc",
  "key16": "67NjrjtZG5nWCGQjKwgvvUs6ExU4mCorr6TSYAdaRmCoy5A9jB7FzxN7Ame4Ft7Xs4ndutqjzmQtTcQVf7mLETmk",
  "key17": "2Ty8tBhw2J7iBNwWTx3wJ53RDGXjVS9Wt1mxZN45uSLivTYsZisoCuAXmkTreFGnPDXdmSrBbYgst1UbajHJZMvJ",
  "key18": "2GSx4jV978ZWUdVgMYT4oqttakJRThzAVed3588fkeMcth2JZJNrvfJhmf4Zg8ZBuLj43zXZ9StEVkNT6Y1QYKdp",
  "key19": "3i4uwVXMVCD7RKNdcj7jwVh1FmAh2xjpJge9ZK3T6SZiPV62uXTc3JV9qXqLr6kG1fSp2LZsxYsvWWLFKjQbjdej",
  "key20": "56AHqhAJmdqVBid9NftHk71qyftod3DJSrgMSY9VZRpUdqCULrqSeANp2sV1veMa4gARjTeqaMPKU2cJ6YKxXbvo",
  "key21": "2z8T3t3f8dynm6WpFMdedXXqudsQJzHKziyGs9GSbSukqK5n4xEyQAoKMAnxEmswxK3usxwfKtu9xeAqEBxpHmrW",
  "key22": "4VheamiqLesAh4n9ejbnWR4gkFeLFntvaJp7xHvp8hW1w6NryAvyh8eT5cFJwdD8NEF82mr313MMDWcKpJ6XRqrp",
  "key23": "5VmuF8rcBRNoc7YknoCSjKrqZeq58bcQF3q2BMStzYZFcYNNMLiXBQbAT57FWnxQbjg6uW9UDbUu72PNgfsygVz7",
  "key24": "48CnSgzohj4wSZrxXFFCRS98B3sydzr2Hd9x6MWU948EKgFooo6wwNh7J5uwFgHQneLeRAbZbZUXMYBFyKctTk9S",
  "key25": "36z4cWujEUqAnbHgSTM4ku7K9aD8Nr2rBcDcWLqY436AsiH47fbbZqiKFeAzgvmPyAK6KUdDgQqfwBWQ1gM8qpZj",
  "key26": "5iNwNo21TdAgiSJavSd93dxE5VEcZ1SGEMVP8zAKoyqnTPfAYAFZ4rX9assLjMDdiWReuVouaJhsH3eGjMWBpeJV",
  "key27": "5NY1ESbaTasnAN4h6VwjoVg6UXGBTf349Bvq2xEAhUn3enrswPnwdnjezXxYiDWYLQcdhTtXhtEX3RQTSpxUPLrY",
  "key28": "5X1o2DYqXVE6TdtCFgxqkEJ7MgNAvf6mAYmNXc9QeypPTFXSuAEPM5NF29EPDzjghisUNdBU9HMyUMbn16f1YeGp",
  "key29": "dkZRC9TjDC63c85yz2c2CbGhZQf279AtQigLCWoN4RuqLisLkfkCQMExfoPBPPn8i29TR1kUCTnPWg3L6gPWC2P",
  "key30": "48QKUrGkgz9Wi29R3s9F8LhFjXi7TXTyEjxDgitxz2PVTZdVmWjWWn2ehVraQ11FtSanP8woENime8TBTU6Dtxq",
  "key31": "yhYVGQXi7F2x9z7VBFgNVXj5jGwnTPwh9MnczDHBj13ziJJhGDcFR3fAe2wcQPcNxdodQAPWbnUAeSiHtV4qxeL",
  "key32": "5Ypf7udFt6Bhz4DxaSNudE33yztgkVm8Yr7tPw3foiiehhF1tQAcuZJLPs7KK5xT3tDTaKk5VZyLT3CHENhErafK",
  "key33": "2Qe9dbYSZZGYofmzoSx5YHunXNcza3zk9oKtuCemFdhmchWfgWL7f5n497mMHa2a4fNKF9F93ybcNzhBCs5ZLdGv",
  "key34": "4VnaosQc88QJTqB9KNgi66p5gURKqWnMPNmakmdyHcD9TGg8r6FKhBdkNLKocN32kWTpHVZZeakYP6Fp8fQyCELA",
  "key35": "q9eq2wsrgAG1YFpHn7C44JJa3P5cPDomVTyMwCNqua6ZoKeEV3tArEWi6F3kqQxzZouR2guUqUYwyfm4yFynnUa",
  "key36": "3GqVQhVyvNHageF6hDiX3Au2R5oeMErYkuDQJ5EFZ6fyUF6D822qxzi422EVUYK9hHnjWKrijf2wPZdNcwXDeMdN",
  "key37": "2TjhReCFH8MdjApVAGEYzg6yDuwHrhp9WVHntZv9gHQQ4nZDDSNyoBB1iBXtetTh4joLXEyxw49v7drTkf8m4vCb",
  "key38": "4Pm8W2XPCLcrH6GHdFWmPW6mVyKbcE9t5kS8F97oNBJUGFzp7EgzEbFrSjeBYFghj5NCvEgJnY1Lp55h8VQFaYZj",
  "key39": "55yKf2vGSAGKYqAtVYdJASB6mxzLHjE6cQZiRepQQP8HT5hheeBWqjRh6rSFgumTZqbz7vXeWMZacvm8ZtB3iVXF",
  "key40": "4x8cM98bqdeSRBVdnBmS9dub9uCLrUZjS3XKTMJF96WSBc9iz9YtQynDZRfNMvYUartdWBmBsTDNaVtJVUvziKiD",
  "key41": "36KnKJ48xis7PZbuvnq8fFDGjErP4NrSJbz2caMpgcPUquMoJTC41HCJRR1DGoXfWdJ6aNJd5ZPhkSD2rzNfTBru",
  "key42": "5dHKvcS3tYq3tR9pUPtbyWyXy3Efgao3RQUaqY6Hus6ptm6cbEHJbGYAP9ZPF6DWrKstQqE7pE49VizLtniZ2j1h",
  "key43": "2Qb45KLq8TtwRbAwjXFYgee9APJVg6fFBfd93HqQu5cLB8bz3TN4bM46SDao3z2pqn2fkiMG7ejy7dkhWN1SMg8m",
  "key44": "3fHnmVQ1bEmptoCjkMbWCnKvM8zZWjwDHWsyhzJcgo2yMxYjmrAZQ2R811f6AvfgWrJAnM3PuY1AL3M7h3LBYxx3",
  "key45": "5EeHgkW8WRhhsHyRiZtBtUMfujgMi927p9cqkza3Z3dVViiM9HjA6uN5odBeDbdTYb5XU6FZckKkRtTBt8frFvwa",
  "key46": "5GcBHsgNaSUNnHWrSChKpgJJ3KodwoPdTUHdmZQHiAQqFitN9tQ7Jh74cWuCUY1bxJPygY9kA3aLUvbd8oVLcSYx"
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
