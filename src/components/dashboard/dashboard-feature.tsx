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
    "3HwCrWKnwd6QPUJU2ebKPMZBzCKymGBcc1jY6vfAz6AU1fB37Fo7a9D4sXGKhteHKJpBqUKAAbxhsGmbwyHbvZow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYATUECSR9pSfqSnmcGpRTbJumHQYseUHKfsEB3SfViEyBnvuX8cbYqs6MwduWyRV5Gc8xGxwDx6qdbYGPkn4XS",
  "key1": "5oDpJhxARAdwg46U4mzxNHwwzohzTZuxkMFom7cwZSAXKri1zFXgwGsSRjc2QiMDGDK57iw8UfnKPX7SNkt1FjxY",
  "key2": "zQgAvyifiT33VEdWEo5bB2QrAUuDqfccqM9152sckcV8nAzWo1hJ3fv2iWohGzWnhE6fzzLw5NCiJmK7rkWjHBc",
  "key3": "5Nwst1LsaTvCn5ezARb6BGdxLSZ8apCnvewMBhsJRYnjkwi8yZgzsWPtberV7QqcZ5iypjUi8wy7MaBE6R2czmK7",
  "key4": "3xLGszXj9bzyXC9MEVmrX18wtcTWAX18w2BdhpnahGjm71xeKwPbkKEt5ptdvY1erK1nDPsALrLdWVzw2UEUFx9e",
  "key5": "388KfxFff1ZA6ZPf1ezAZ7mpKfTqn1anWMezFCbd6zsMwPiDkjTSpdEiYEFXTEwSz96t3YZn1Tq8WZ7jX6iZYirY",
  "key6": "2VgFY4NWq5E4dQqwiBT6VJNnVc3CK3PDkVdzUTDRS9xmVGe6Qfr7dNJeoULXPy6XGwL867ZqDBH17QUnzDBBoFbz",
  "key7": "1KiwEUkbikHF8atYBJGX7jtqpgiMGEbVhh8KcjPj1vdGAJ3L2uzDeDwCyBH5yZXijk6oo71SQu7vxU1x3p5NELt",
  "key8": "4zb6CwSpesxaPmfohZtGQntu3vUSx1zd5sKnuxtupYqW8S7Q3gQ56Jx5mT7fE5mX6BZGJbLEUg53aeNzMGLtLKpn",
  "key9": "5sdTKYRmSXFi8zJCyHdcve7BPBDZuYsjXMVcWYaP7tY14fxowfCEAdxTkXnDxeukSRunGyzQKzQftJ9fT5YjQLfh",
  "key10": "4YgRe3uQ51AcxibHFXUehEkhff29vYL3cabqxT6xBW9VptT4UouC62iRV3ouo3dQQDXN5MSFTw2Pkd1H2TacEQhL",
  "key11": "45xFXZp2mUPbiK7N1tNHUd892YyL6TWvbwcqMLfMi4dKW4R27rWXwjrCXLTDCrXg4DiFsKPb5QB4gYeYarugpzWt",
  "key12": "5sWPbMRrRZHXas7ZpGJYTMcC44HnYryAudPxMjPockSLY9darXoD6WjfnZhpf5kJPmk7oKoXhAY1oGzozZfq5moZ",
  "key13": "5o7EvGCFj2GrtQSjiLuChfsRrn9ZyFyvwDn9D8VVe1Tyr5AXYrXDVFzJmh2hg4atE8KkLa981q2dNQx3By5hTM98",
  "key14": "3KCmB6U6CFfVC7pdbyFYXxUBsVW6dpwQjph4d56WtK9AgvW8Kk1mEPtjGoeGJ9F2Yvy2ejFTCZArScConYBHBnJC",
  "key15": "33usu5CQfqZvDn5t1tMsanaSD213gwgFjaf3irNUmfqprwSHDUhqSt2j7vdujwdcnC3jh8cPaXDmjqQEocBCPf66",
  "key16": "5eYiq3DxxCV3YdvfRkSDS4MBFkodtroNb7ABRUa9GzPdGizQBxB2Hmn1bDto2cZymJGf9iFxiuNVGjSTGyF6iSoW",
  "key17": "5uyNmTeoLJ4ga69cqdbx2yQCbpspvAVkwieAa6qbPX2RuHHaDnnS1D86LpYZGS77bGss2Q7CdRsv1A24vu3TLGff",
  "key18": "RU8rLF1218XRVDETXgbLgUbec5zZc2rKvTwfCp2su1RcTZd9oKFAFobGvwJigtEhN7yxpuCcVoKQqMzGfNQjAn6",
  "key19": "xGAffEVD9B27g1NSonZzKtVG3wH5Z2dxUtMNzWBeNWTrqu3GZc9DZGJR9GN6pEH1Qkf4izEpPwmxhoUTfHcWxkQ",
  "key20": "2aKvV8uv2d3KH1iQMLUyDBnoLFAVyGjKoUKaCwwbTNXBTFviPt6qtu1Us3arXMEbTcboexqcJkdXgPuxGZBD828s",
  "key21": "3SnDFLvPdqopWGG7vBPW782Z9qWpukSYYwryfBWRXVqsqtfxWgrA9Yr6ox4mMx34Aw5JvqMcJcUY9RoUdGZgP1ct",
  "key22": "47o7CFNoX6QbUNCUvWWsF4BwRb5Xuu3q8NmY8VmErDQ4gdUH1J49SHaigu5SP4cDDJrS74PKkSPM8oa9cDveCNs2",
  "key23": "4is1GfNisTVUQNftqYVEF4BurkEvaFjLPZFApVPSzCE3PMaPLAYRK8ivs7atT5Eva7bT9UPfp5kAsqXybLF4iiZa",
  "key24": "7g3V174dWLBbQbauFvuA2tPyqAuBw56vnBcnkmZtRsLaT7jR4CudMo167GtfYPapSE55xVLNRbj4haW75H8R7T4",
  "key25": "3cVfZZyS68dqrT9iBVfQfwTLX4j8jSKsMnpDd9iXdYMNUQLwEkmhGEoouMsV9bZqf6bp168hdGBrW1AVjERXTqUP",
  "key26": "26tFfArd4YkX26gjc8XXNAu93t6nXBAAaB2pQAZRK7B75JC1dR7aZzZ7BzHJ65ZcKXrL3qUmDymnbksw1kMpHcAa",
  "key27": "4S6hZ7Dh5xrSscsjMb8M1e55izvAsy7HrszgYMXNy7X8MhNUbcq2PTBdbPDQoSnAJA2zc9AmBgKGHSukaCATH2JG",
  "key28": "uRGTN5UTFUweG4NeAnpiEgUeTXPpaMmnoCdPd4zRErZGqw3GrPwAVFZN4rqJKs1EzTxx72zivUdFD6rrDB6ZzR3",
  "key29": "4AKtHUCXe5d9FAWAKpqNRcvcQ7MjJ1T43KDUgdMASQbHEaK2tzVJmiHd7JX5oAWJkrHnoTeX9nosmqYFZz5eC6Lj",
  "key30": "5A4f21auCuDcmRTPNAADugAKy8urAVi3pkNhvf17kuyabQVtQ71Dvf5kXaRFUYK9Xxb3Q3mMr2G8yDcciPLdYKFx",
  "key31": "3d8H7Lf4MgAQ39YPpn1DDaKL1pgT3DvKuaoJcBuuAE5QpVbcRzHHQ2j6VJ9hgnShoueqKUsJtDvaWWWhc7yNGdVT",
  "key32": "4jiwUKcmziS3jBCKGsNqaSRXJrTkqdZRREfhWFLxn6R1VaCuXYzdmazNBfEjQb8jDCK5Cj85mnRnuWDNXHbhhTnv",
  "key33": "3xCkw2YYAvMG8Pft8EGBwatxE7bWrZHqDYYQkTqdS7P32iuRUYQ6m6Dpk8RXg1GY5vZhQRVySMn8JSvJJVuFacLZ",
  "key34": "2mHvJnpXN1yC4LxLAnHKfjn97Q23cE27wpsNd1KkDFMyu5XKNnMKQ6T1aD7GFpuRZNZvHyx53NCZ9FDL7D7kCfPj",
  "key35": "5bSfp7zVnAvKipxMPT9JUojNNSuBCjL8qhazJMzpidRP8bSARqo76fGpLwmRBCT7E4D2CCVSFA4qn13XEkMkry3",
  "key36": "27WbCPmH7zfKmtTKLPoYqngVaaT3qJY4pHBhxad7hdUrwLVCt938ZExbPpZsb9fVdSPjoupE4CDuPZjnvdY2FZYu",
  "key37": "2RRzhTREazmYtVwEQaK2XPAyv7S6aUbki6PkwaXPNQe7LYootdAYSNnB4D3M1P87Uk6YEWb76XnA9ywmkkYNkLhY",
  "key38": "4suuTyEr8rKCN5vttbc8DNyiedWpbVPdmRcvzRVGdeVxaTegQq4twzEUgnq1mf5x25YaNErRTfdiQTmHnZt2ZXVr",
  "key39": "3dtvxFCGoW82kKDWUMhJbh5TsJoPmtv3UZamXepnA7KKyPqHBXcamSBeHruuHAxiyky3QPwmPr1AZaXyNUw3nTkZ",
  "key40": "4cuZJX3Teyc6rkw4h8gukPuwvvLcL2A2fw6i5LyCctZsQwZFTUpNvrKuCBoyDri3mH1BwQ5cQCQVCiVfzpyYvWUT",
  "key41": "3TJFAPpHmJf3UNdKxrcnE7sNrBKmebX7jrMVmvbdD6pXd1BuTvWadMUSCyVThddDsfFhH1xvnsbkfc3MVRFrPxFx",
  "key42": "WdePK7WdcbjKogGj7obkNS8c6qkGU5FmqgHoMVwTq7woNHEYyCqUYU9wSKRomGwdVU5DU7Nyw46g1KYZsvL1rHM"
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
