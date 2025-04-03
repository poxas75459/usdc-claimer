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
    "iiZxptZHMiRHKivQRqn7BpJnt5a9uwmyKs7gdEQw4F2GEaVtzx7yvWuS7t7rrXAPmd84pSzWUv4WgVYm3KbCrjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aCRP3gj244XM9ZLy7mMNRLCAvyTA9CGYWKevcuz9YQz5VyiMxCXm57dtMMcYVXqyVtZAHqBqUDqAepvXeHdsSz",
  "key1": "4EWhXduVV4R4tgemzkmPk7vc4jiE4yCU2UCU4J2FesitxfRYU6JEFzjFLB4zabdRCNqcGqMTh424X4nk9sYYx6Jm",
  "key2": "5XXowLe9vvU3baC5QfymNbhXQxMdaUBVXRPmKF824H9ovtmU3utvsBrR27dWevTPe9f8JwHf5wZL3Y5kH17pHj7N",
  "key3": "KS8StTvrYTy5s6fiuFG6dhxxkuTJAWamdB5pxVrusrhXfr13dXy5WU729epGkZEWZbHhfDgsxFR8FonbaSBmYEy",
  "key4": "p2XA3ryDrEnLcB9hdC6H7Wuff6Y76SH3kH2qgvBhokbX7Mwyf3K9oNZjYiieuYUQBgrhhMPAFLDVRg53vLypb7Y",
  "key5": "5yKZevuHgHZzzh7HR8eNwSwZQiEHtxar9f1k7K4mSqorxSSPSdf5YBxbVMwpGogNyygXMSiKTuBS4AyHbAoQqq9V",
  "key6": "5a2ojcPd7nx9aosWTzP96QTKp2Ef4s2C7aL9YchrikqjC5ekZxy9WXQB1gXE5wp1pGCN3yL5CayrjLSGcqmNXEMd",
  "key7": "33nxQPD5hNFQQnUwfJwHdXWuMsKRZLTteJrVi3U1E4q1VhJxkauDa5hpsu5XJaTqhzrW5ncmpw2uubP7bqhoRtY",
  "key8": "5e83wBGkJZHAbfd86RTB5FbQz9RtgWMe4MKTDTzbYigzAJaAim3pnZ2eqpZwTGBfMXzha3VLBHvfq6GLLxqnFN9u",
  "key9": "638R3UtcQBGisbjXBNE2veEoraWobMEMgkMrFqH6PP5gYxuS3bTGgZGbNDGvmNzKUGhzQXyYaKDG2LjJenceqQDA",
  "key10": "NTF5an364QPPpHf7v2VUJFzKDiPZhGcFGJMbW7rHSEMHYewrQoLofURudvYm5VsqD61N2DVeMucfZe3r7uUr7ra",
  "key11": "2USiKv5dKUxP7s2nnhUsBqA3r9mCxb6yJBzni9U258tCCSH5fXRN8wfaRotYLpgDAoJBR8bVYNVUm4mrjh1QrRun",
  "key12": "4BPtHdbRPfeHHFzHEyW2TSJjtPtSYQ2gi6LjAwkJVJmj6mk1XKnL1tCSv8XgJyMtgUsGYGJHWLtWfKXiFaNBnyvL",
  "key13": "54kNP6bbM6GRn9EhfKbTW5vg6cCYMCtnEPta6dgtqeAPBBCFVaAug8tSxa1PC9QSdczNYbqzWxKTcKHe2ZV6FtnE",
  "key14": "4MYF2gQcqDvNQJwWCZ5Hab8rgFyfMbs8HxP2AtQq5rPg3f9ofBs2SBnpNUNkMxebi9DBnhB3yeE7KiAypUvTAoDk",
  "key15": "2omXgjRDep3Bi8YDBmEndq4bvMxkup9K7qVR6G6Xz2MztnQnsb7Z5KCarDB5SeBCfgBUMvs9Rn6tYEA4ryWPJ43i",
  "key16": "2wYVuQbLf1wGSXJubBdXiZAraThSu88Unf628JUEC16se2ZHVtjWE2q4vUuhNXWUqGFPzhEvSJmNtcn4Htiz7ALf",
  "key17": "2sLXGy4t54c1m8hzFC5nW8rnq3o7PUkW6PD1S9Eg5cjvqfCnozEfM8aLMbXRFtAtDsvJf4YnxtWCa9SWRXv5eMeH",
  "key18": "3e93nXKiDKVUndqhVRDBkgHs52RTeA5sf32WdFwe2VD3aRuk4PWnZJaLiY8rE67JFxe9HtAjrzKHpifXLkCU7Wjd",
  "key19": "5xFdxDzBroSFjKmPAXQXGczPZSH2npQjFyVTjRteT6ZWoh19MkHSSertzkrxHDxPzcD6rP7bSoPP6MtpJoWY75D1",
  "key20": "25UUWFSXxPSsrXTLxJWXSP6z9AHjz14h1pLbSrueJA1CK1Q2SZBUp34heLs3jJmvmSKrtKaiycBd1s3RWjtonrcW",
  "key21": "49YTp7T9FQzAoGAyZ8JqvQo4MAbgPqaNBTycoufffZHNaJS2gbsyBPss6xNdsixTyR1uT3wvKcYd2t2FNnZvtDsM",
  "key22": "2qZoQea9w86LnDdR86k7prdsfjDwecfYkcEDGDMzF8CmqNkFh3us1kdRd8a6JXzRmd3cdskunU1L4iSdKHynXiMp",
  "key23": "3Zm3Ld6wBrpv1iGxrnbxVqFyq3PCbke2KrS2qKHZZMMnLtJMcUZ8KSiEshyR9DJKBidYvRpkSTcrdy1XErPuoaQD",
  "key24": "5vFkfmxPsDNeJs5pJNFUTJsNXHfJDj3V74whiXd6wgTSEJWWgaxmcmfibaTjvGwNySyJd8GmnX1hYdaVvQ9Ax5Kc",
  "key25": "295AsZbag88k7MvqiD2VEULckWvRXAXZ4BjQaUBeVJ2JZHubjo1edKamivmwj4gwQR8JSiQ2p34BDtCzfv93T78D",
  "key26": "UwQcnLbHx2SuW3d8jjKgv8WicEqRsVq9KuwEp6uJnAPnTvAnSqiL9UX7AL4pu22zLA1Ht9QiseupEksAWzwj6pv",
  "key27": "3cK1DomBXZXhA1YWipEyASBJtRqfZAjzAqJf7vaaUVKE3UQZBsf1z4UrjoJ23WrXuzNMba9a7HBtM1DHAeUfNFiv",
  "key28": "3cLDruTvjybPjNGkXPn7G3Wj18gDBehiXeLbxza6g8aX8kov3gVm5qFNpjj1Lnb3yhc29UcnmK2FN883Qd75Fepm",
  "key29": "2Miv2pQCEjrXTVHVGgRCGmqyuMCavzCJBYoyamTLeYxDcW9LBLnPUUNdBrkdCe2MWHD8qLaQ5jagxDpCZKnwnYMu",
  "key30": "423hGgahK9fteF789NYAGggLa35LwJidK8udQauc5jKpepgjqZHNYRxnjjCmHH1in3YdffDdWC4h7xMwWHsYT9tq",
  "key31": "3VBwnHDVEECeoAgxKSBjgiUKSU31iMVzL851Cj1ehtvJuMywHctVpXFGt2c4voXPwqPqVGGUDysfo4J6bGkmyWjr",
  "key32": "63t47u39AhhMBNe81Yj8MvUSfjezzvZ1D3GmfbAz2MnZLboGTLuPKwJuShuHSjbLwiUcaY18kuhhoDkhSG7VpCsZ",
  "key33": "49DV76nZq7zBd9DGs4LD41M5YwibeNGGc3w9eZ8qnw4wFVgxbXmX1MaPru4TJAt7k97R2ug6wSSR96sVcCHrQ3cV",
  "key34": "5cpD6cF66QLM1rqfzisKyFTdH6qiFzfPy479g38YLh2Eejrcj4fPuCss3y9cNxVpZSTmcuEUVDinAiYUUtB2C8WT",
  "key35": "4Y7cmdBikBXpssDbspRopQ2biTfkENS6uYqj5o7Awhowquso1SAKyEnZxrJYhkcUhXtdN1hff1TniRm7tRkCYT1t",
  "key36": "62cvTqgd1mMSKMk34j4FgWtyFk97Mq7pYqxAcLPEuKPnppnVysB1qvCuojcDiagf2q6nZEbpexWY29bLQbPrapHe"
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
