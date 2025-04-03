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
    "39WENhSvSuEedzXwgEevYzPzQJzMF4f5bDo4kvmMRQmcrqg675pB9d63nc95by9xBBnmpDxTfxFVqnusz98pvTqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uXhjVVq5LpJarGs6MaEs19MseqoNDfrYaRYajcuiQ47NB5z2mS8ro15BCdtMgStBGx4pc1U5VC1UkfNECVJg3uq",
  "key1": "2BVd4DX5pw9bUD2XPfdoKzRTatmywi2oAwaeaC8XcVG99ki6XK43Hn3U3byfFM21GwwoVw6bHNTHQDKphY2QUWb6",
  "key2": "242cgjA9r8kV3uX1Y3tYSzGm4Xo1vFeP8G8ZhA4j1UCFrMcuY6R9BtDdSc5VUUPEVdSJbevGvQeUT4Q6qjcr8r5n",
  "key3": "66ZtVba3kSQxJMdDgjxbvDYX5DTQv382ug8Eoceima4rhydebMVDk6uMFqDH6BtCL8dYfYKtKTTosPEfbfj4hpwg",
  "key4": "562JdbvMmvi37bhXU3nnU7U3kULWPhHETVsqJ3W4GhyE1ra7UMbbKKQv4qiLT2uSPc7hqNSGsWuT5FSenQwCR3by",
  "key5": "58XjMADH9fE8bDoKoFrtgogLRhidbyfsKYvKwQW65rk5PhvKMie26dexVd3bfNV99NfKNmUxmEWbKpuv6g4JCVRj",
  "key6": "3kMzkBN8cZHSmwDapaWKPecVW3UMbqJ2HkiajhRXwJ1hcE3VPYCYCDU1fJusx3XZLQ862ycJocKC2P92FuYDvNLo",
  "key7": "3BWWA83nxiRgn6wcEKFd2cQSSV6ixvqCyTBSkjMBjMsjMp1rGfPuifoH33oTvz2WQjhJE5Pc3MkCupnypNdquk2c",
  "key8": "3jMJgJ2GoydgdmGpWZhCBaXy2Qsy5qo4LPF1kxvV3nN7wTFzy6PMSNCSKmcW4pbcXsYx8qX7ZLisb6cwhJ3ehe5a",
  "key9": "5XSbLEQGNGRe8VqeVWaGtcUmYFcN1zkFLBwfhCxHxDR8gf6wLAZNamDLcn3QFfsB9am1ojEiyW56qoBQuoeGrTeQ",
  "key10": "QsQPLaFQeR4oSpJuK9nnkBA5SYUPhCgp3r5vSDn1s8YWgw1fmhwC2BJBQo9szxRdxVxM2VsNHdUkEV7orSuis1j",
  "key11": "4EYSWfmEsoLawLQGvnbNrtsxwBGLrvaT5pkYpeCqFowb7WSpXbviVka9pMa3Czf4Lt38Wc5kvufSongC6nHH7mjH",
  "key12": "5eQqLSdYT9uGDtMBt8ZqQuGGRBw6yGhjMGRhYMowhVDVSCgSJ2VigjNKKoWWLkKp4zC6JXE14xtAWhRkhQFbni8T",
  "key13": "4YE4xdVtpNiUFjjt317giG6VKbWkDp2w1oiNhh923bUnuMqyohwhT3RobUoMx2F5AQLVtMVTSaSSKdiU9creYq9X",
  "key14": "3nzrAXG282A3zs4HNQD3hgQ9LiPwj5EmWR4gvquh1pWV9AQLh6G3X7H7rEhGnh5WVPdFMmRUmxXJRb9bhuSBuKQt",
  "key15": "tYgCQ5njw52BaiZgALfUtpDYTnkB7PMQaFmLAWs6YB5LB8Fjf5cCDfCqfq55eLMGTeCLttWGu4ymKeivJfSv9Cq",
  "key16": "4u4c4XEJ4uWNCSTY7daiABRAL9smK5smKMoCtzxrYt1D4Ux1k6MdLfSWN1ghUogpfzoLC4APLzosdhStSsuwwVjV",
  "key17": "2npkDftw89kzfKQVURWsDonLtLxiD9qQu7G2WdBRJvkvv5XcMSaujZkPNWZZp31aKKPhECatck4AMjgDYPFgsYjY",
  "key18": "Bqz6SMdz3v4GZLsMpa8tjkZJsAv6XHmnRyWdEWaRy4JuPw7TVrx8hAv41b2b6E3AYm6WDwB93EZk3xvqje3qJso",
  "key19": "GGixpi9nAgPXbaYAe9y7pH6qW9d7cXJgtaSiu4jDzCPgfTnttdvN6n3KkTr9n5KLDpgUi1ueHwQku8HetVcs8ds",
  "key20": "8hR33mJUKP4qEa1417UhqRfqgiFpwVdXgGCHtbyuJgR1PLCitJvk6kNVGVf9ADE15i7Ay3LXNgoZabEQrV6zVSd",
  "key21": "3EJ8AZtH6SHeJm1C7Df8bcLp1EZZyD33zLitQHNCxtEYzuTxYgR7f6fHXr3kcGfTgqwfywYNxyQYV2oxthFPKUfS",
  "key22": "jxh4jLQ99RMGftAJAR7ss73Bj2NqEvdHBiAamEd4iQG5BPZTzwYh4hCB1EWvUwbPjUZQChByAGwuVyi34YBanMe",
  "key23": "3cWExinbkCtkcKaZQAUqpSEYSNNEDJU9vF6RBfKaj2VjEw7cCDz9xTQoCNe1SUuCu3KZzyD7DN8qbEEvqrijKwXY",
  "key24": "4jSXxb4vyWJPDXTtmv5NJ9SdYVd91JXxSS93nkqy84vqi6J1dUnHKZ9uBFKSnLso4s2DXxWhvruvYd3RhRFFmt4D",
  "key25": "3dVMei3rKAkjsiFabTcQ6GaVazFobw9xhUzaU64E11SRDjYDoDNcqJJPaaGEcaLSBKEhfqo3DQvtMLE11VwPXaKR",
  "key26": "2ZHjZs3CQ174P3o42FWo7VfVUf867FT4NAMvnWyALjook799qHfztuySfWXNy3k8wTLeja9pP5uhxzsy5BFTogpB",
  "key27": "2C5G797EHufxUjaj3ts6u5a9CxbiJ2KBYoiHWYExk73zJCqUFANivLbPr2DsDinA3LGTyAJrQwcz58cqqXo6bQBK",
  "key28": "3nzcB5fcApXmP7b8GoXTu4KR7zgWPkKgJKZQ9wKjtHcmN2T4Q9ALThvmZTfAZC88RZAn6e7LGTUg5qMoZcKuigFV",
  "key29": "oJwXJsh4tkZKR5uAN2WHbPsEH9LnP4P3jvXXyPEja1y3yqFa2HcPXVsP9NzPkDBqSP7MEFtrfjL1G1a939fPdF6",
  "key30": "2hHL7q3GqrcPNiM2skff2Ntyu2xyivoBjkLKzCGeCdMR21vBYWWZhP1vsHn1Tw3ratjtfXeCGzazTosXPgYaA6sD",
  "key31": "2jj6Q4dptN23Snq1XnCgGDSK99nDU63NAiv6JTu4zJRehHEWBK5LJWyajmpCeLcGAxp5Fg9fvocDDV2h5YZr7ZcK",
  "key32": "yL7Evkid8W4tSnihLXDRHpY5FtPmJzzDZumkpQdAfqYufmyBsBBdMRwrnPwumwLDKop8MJU68dA3Z9wVsboWpFi",
  "key33": "eaUfqHYSz6GL5A9snd2vW9cVPzAgjS3k12r4dy3vqUtGS4mLCsECkid8BbZpFeMYrHBp2RuTpb8kd2pMMsPrsCC",
  "key34": "5YiWXGmyCv6tqFynyuK5XwANxRdRdDCaQdkd1z4eQkqyWVTWmqVEBALBzjYhUfmciH8jkDVX1R2MzVAUGxhga9N5",
  "key35": "53VbGH9RhL2AqeAHRqzWzNbmu1V4pXnS31FxKgFqef6k7pEfhWwPqnqaisGJiA7bCcwxELABS5VRVw5pqBS8ofpP",
  "key36": "5S4jgUH9GLzRKognCCrL8AYd1TkQGcpanv3Dy2dEY235LGMcCWuo9MHvVM1e1rFC8nZ6iovpB4uGFasS48B4HYoh",
  "key37": "3zj3jCegABG3fAR19526yajZT5PHuEq2q3HMjxBQRK1ZFevou1Y9Mk5xvcKr4UC7NLxcthqULYTsrZE9q1Dy6gGV",
  "key38": "2Fa9Zi449qFSauBTUZuUvNLNwnCubT6RK5kKgVi7rznVEZBHurfrU3KQv7W3EgyPpoREMsjiAFhg8uu6GPqLrFVP",
  "key39": "rDiZXUbdPGEcxJuiJ1jXPcQZ7QNKYtAXyn5eLVHtZbErhX1a738xJHGtbZbCTGKmVVU443zN5pwLrRW8SnBoWVB",
  "key40": "2HxvKJhGqLgZdvYHoaUZMR2A17adcMHY5ftG5gai4L4WwrbpQdMZtRCTXHfFNJ5RXLnwrfXCYLfJWpCHrFC37fcv",
  "key41": "4tXmAEabedm4ktbgop6gX9dGRu5UnGQicKh76NDi9eVVLv1p5EG3J7XdLU3BTxBkcgHJNBbCJFkKR1gfKXN26VEj",
  "key42": "28kecGU5WGToM6gk13MtSfKkK8jjHjriWErE1raf7GmDvE99GsHJumztkAZsrrDepKvNCxHj9LyHUSigyMhQE66K",
  "key43": "4uMLVTFn25Q3BPYSvrckmX39h7YAyr2BMa15XHv5oTytaPhR8wmKxkne72uvL2PS7dHgfHCjJL8noahviXzLBN3Q",
  "key44": "E43eiaPTuS1rTDzK8VcXgNPf7EqpVi5r9hQEz2nX1Rbsi4QVL6WHjXhFwb2P5zBmwiXqZyBHEqzGK7bhXiXxYpj",
  "key45": "2gNReC25zer7NZaiw8k53VRUNnSQydgHfQthVyFZ4rz9cR4wnL3sh8EmzsZvMYhZXzsBE5JwY5sxmhaQoPhfzqHf",
  "key46": "G8wAXGKyBEjkZUESp7JgcoEyz3F1oFjBTtcPczsEA77P6XH2hh5JbWLWodFCWLbZSiEMMxB2QV2boog2XUsGfTM"
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
