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
    "3y5RYeVr4oN98pqbzSzKEwtpYa541Vib7k8rRkMJftmJtm1hktYpgWnZwUptZzY5d454KNUTd9ux6hjycUUxFvyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUzAwVHMPoXYCfyKpPNieVfForMd2P4Fag2WS6MUsCrkkxSPNQezBob9fXvKni2wiaAeSTy1QFf7YMH6ozPQUpp",
  "key1": "5Yaq5xPWVrU4PdtsuuLntiJ85wqpbVnDG1jwVaZfKxezJaWcz2qWGnd5Rd6U54yHTuC26vojtyCiLA63JvEHzypN",
  "key2": "4tsyNZwJETLLwmcFuMtP8WvsXHWNmTw6sBQt2THwx1CL5v28yGHNLftrvGUCnRViuZDwiEDQcMyRadSqUC3Rty5G",
  "key3": "4R4QTXq1f9pph1JEgrWeTvFUwnort146k2gTvdB6z6szfggLdAvfuJBNDrtgneibpU4Dtc2UkNfkr9LtZR3oYxDw",
  "key4": "2zjjtYkVWwUwcCgJzv3YTzdF2oTqLoUmMyxR3LffADNMQKfD6hAogjpHqSFRJ7mUGY6KwrUmEgat56NbSGzkZ4aE",
  "key5": "291V6J8o1ALmxrbHjaWeH1RoyztzDgscZskgYXp7tAK3oUR2xxcd2QPe3LFb8A8LyApE9yigPWGnTYNeD4o8Ym94",
  "key6": "TimuH5AZvqssSxYJeUogfn38iqnbdMivZmgWV7MW5BcbK8wFCM2XTZe74Duk1A4SBTtLm2DQ4fGeGVZWSBoNmFU",
  "key7": "5j94NaB5qk4vzmCrwZ6qZL8V3KTLydFrKbZCgurViqJndNr8itFfQtcHoQLhhVVnEYpEWbbyNYrFjgwX8FGvV1dE",
  "key8": "2DsdDPd3VWSUXd2i7NiruSbA2NHs4V3j1iU94AXG6QrsaUbdJ6UiaRpRwhv1J45fmBwU8q714ESc68zJpiND5R1G",
  "key9": "63HPHdVc56HqpjVFiXbzRwvCiHnna6qT4gTdeBQWF1LWFWWhGd1J7rsL3DfsXKnzWYt1LdjLs3XHiemRcWkZWJ7W",
  "key10": "5icBxS4n8d8cBMWckpAPdiWWpTyKitJ1yMFvTo88wyaMDowZcf3pNAfsM3HvHWLrHygUw6RNAnCAGvoET4SX19Dx",
  "key11": "253kkBrPxMEhbJ6LMpx6QqF3h4HAxAXVHQcPGGPnTKuXUA7iTjE7uG6jbPQQ27d1LpkQa79rowoYBsr3NeaDFXKs",
  "key12": "xLAR42ba6eBNdF8y96ZArvaPZYQ5aS98eG6UKcnFwSrDUXaD9gkaz6YRSGRDy4yaJVq3wxSCLfqxWp22ZHxfcPW",
  "key13": "2rzXxGo98s6oKMbFkJ2pYofTpugR9xbffyk5yaBPD4FbhpTj7xD92KAKxXQXGM3Lck8jJAWTm5skFVZx56XJLAGJ",
  "key14": "3CzotFNBwFzCY372AcbRiLYPqBY1DQrhi6Y3LTaGwd6SYNvdv4AamHJ5rrJ8Ve8MDkJBAhytvHFnEqpM6zRNLjZ",
  "key15": "2fHiM1aGHndUL2vjypYtxLCptx6yhpKYqE2doxtxf6vXWCM3Y3s2g7CmttsT8mtHWzqy64UfRdYciiLEMdCGXZyZ",
  "key16": "o6bL2MwRJYKwichwgSnYihJJfvcj467uRqLGTQFWc7Egw6r1H1anf6D6MdzeKZVLFHxs17q1KBrmso1zLh2bpP3",
  "key17": "62YfoBCFensC1he3rCBMtCdaLjPKaZBLkMd9Y15iW2MGAZ3svDGnh9533LK6bm7ADeKnJjgHfTpsQ3UvEVHiCwgb",
  "key18": "4tfcTNFPHFcvYNHLnw4fieXDbvDjLRUk6TAXX6m84ZERmu2PbkKCwEETUMjVypyYNwy4ERXMrhQk6kotgGNMkoa7",
  "key19": "5zaxTQxqo4akr6MwUZCJJq5KmtfuAywuDPsQsZqaPrx7aG1n3pt74hj4oK6ZSSHhVYNvm8bQUcreMbn4YqrZdSCY",
  "key20": "4hhFU1wXynTxq1bboVSKX5FYWJszAfBcPj8UNKJKcUrJaCTDYCdMagw4rCHCp5JQvNrZwG494EdfspdNZDbah8pA",
  "key21": "2rhgU5VSz9nXL351rUXv1CYNZCdB78s3q9RAPfrUh45578htCrockqsSQ73pfFtR47PuyJDmdjqY5wA4ebFGfSpD",
  "key22": "3RpFZmLmUgYjqhenqxNZsWzdEYvzeBJgTB31StFmydUFhJ8Bgv3nfWjKzby8RxFiFEMCyzumVWRwniHXs2Fj2v8m",
  "key23": "5gNnTiaUA7AgMWeTdbRvx9AB9dm6dtj6aZkxWgv2cqv5XNqmqtBh7BfWkBsaiNSMaEfeYpoNFngQ6om2D4PTSAHK",
  "key24": "24b5AQJNx23cBnqeG42VQNftN5eVLmNpafNiLFpK9817wqhhYjoEcqdA4bDoxdNo2b5xGDBuDgMKmjNE8XSStvas",
  "key25": "28EjQRgscnRCZf4FCY9N5tHm69dLb6JMfsBzeTvyJToJeGDrcU6vnT198S7r8xXFoavCSE5upttF3bAuXEdvshVi",
  "key26": "xPNapXB9ybBvfCLwwMb9fsYeq5fDMwEA3JCMV85a56Qai1VxzzNp3jtpQ8fPrTxiGtM1epBvNJtrtwLr9gpXEF6",
  "key27": "9gdU1FX3RMM1Lr8DKXXx7PWaCw3HD5XgTSUFL3pEPqhM5o3M1DYifGNNaFq5a9WTxwmKeVCTfFi11wbMP9PvFDc",
  "key28": "3YnKSrZPd5VGH1GTCEPukRdWBWwzYxQw5P2fLySEQ17aN7W3WuESn6K4WyMJhCa5kjD6DwnT21DmmwqeKPjXJfyM",
  "key29": "h2a8ghLdwfJHmYrUmW2HDz5Ge1JV9yAew25CxcKCmUhJEyRLvtRTYYVtr9oBKib2xVgnRXmMPJgVcZtcrJgHMZS",
  "key30": "5swxsd9hjj8gEwWs37BCvUWLTxU7eyobh6zajwUMfHGD43daVCgKPwuGWUF6wAGQ57t85Hy3dKbZX9MF5KvJtGJk",
  "key31": "26siNSwRbJsnfspJN79Bgz8zbwhfggXyY3aX9jihYrmTjnUmGgnfMKPY395tbHtkbUaX6ZGzQAmqsLnkQx5rSJCY",
  "key32": "5jKT4bUtHiCaRJTiRrhCDa5uMnSr8VwAbS27EE53T8dREmFXfnC1Ce9X9PVqwpQ2kcVwfQ99222JFh1kpsRdaEEL",
  "key33": "2eh6sgokSz8Z7QB61rqB5FiuAkcYjZuFzPjMsXtzFZ6TjM2thqjg9jkpXy48eGsjriaoMYdqUHtk8cnEXGVbg2pZ",
  "key34": "5pscmSVZZgbHCC5knzKmnYLpqFiaPpxQHyDRgv6wZ7YNYQbm6VVgJaX6iCQkR15EvNtdKTZLs3nC1BfvdDGEcy64",
  "key35": "42EZe9dfSUTDTjVCPrtsTYGSuX1nMtMkNfXU7ShzptJJbeYyzpDkRxQvWufSCAJkAyyPUMeRhnFccb4WeqAWRRg1",
  "key36": "HtaMEmajmS3tsedN72bbZG1Ef2b7MhH3N9RMGsj1QWhT2ZYuZVn2HxxnDse7AmQr51rLc1hUYeyEkQZnNpHaA9c",
  "key37": "2GGC6fV4hcgc5vpeKcHWcZeyVp6wH5SL8TCMDQ2qyPvwTaUiNZpfbYt82UnKZbqoNr4UaK88We3LjyKn6zqNXBVH",
  "key38": "2yoYoXugNuJcb9KS7Me7VPyiy1ZkpSiJc6xwynauLeNKEw23GyJyCt1uj3gjXGcfoTBEUzmjU1QdKG9eGqW2bsCR",
  "key39": "kyroRFbAwPqdZ93A2GzFgbUR2ug3ZqChxxS7sKuLnUzZpXeB2d3eCBMzwx9NxtmjLZtDLrKwxHFTPUL4mKY6VzQ",
  "key40": "4m7JpevEaHBEszK33kE12tWkms9KqXKzqDZigNX7qV8atdaX6twovHhKC8WquQX7dgMZ5KvWGbQPaJpB3vMHHKrh",
  "key41": "2nBC98rqf71k1c56YbfU9ZRneRhiGcf8iQ63DeXQeVbDEcsLybY75MkGhYb8uHo3YEzcNNKevMUQmmErurX95Rcq",
  "key42": "2pBLQSSADFxGzEf9W7CWKEq2NzcS4Y6qzxdygyQtPiyEJKTerFf12P1PDyab3GLJUXGEG3ePvw2PE5cLcvfFXmM5"
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
