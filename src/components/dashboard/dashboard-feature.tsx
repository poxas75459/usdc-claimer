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
    "4H7czXYNh2ms2BfATNbdF5H1LArNErtSwP2fBf9tVhpyxa97AgBv7agzbqjrL4tVPLsNA7d4MVmZ48Xq6Lg51nb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ixe7huqVNXLywZBdbnKyadPQV3uR5Q3QQit2HA5Z6niQNtSqqsojCMCxALzBGbiQQ4XuQC9rWi5RkoS69a8VEwP",
  "key1": "34sFrRojkZ9zNkyGPnr1FrpctnyoRvwFDsnw1bYH51Spk6gK7KHJpKpzVrwkQzho9nKwTKyXu3RczjeXX2uAnmy9",
  "key2": "2kKbxFMQJP2T7AofZ5MkuYWQY1fv77ciGdiimLTAcuG7gq7SLdjP4kBsKRBZGXgWZqPjzQt2U2HGSTF4CLSyyeuS",
  "key3": "4irE2nroFEzcvY7y1gYe1hHeu1hiZH3dTrDGw8hyHyWVCefKdUbuhZcKC2WSdWr7mwUkgZBraZuy3Fcfmin7vYnM",
  "key4": "3zBXVsLcg8azkU1UMWgL1Pg54BPxK8XRmFjvwERHXzDLjVxPNHwUmF3chR4kg5kSDseLjuo9qjuU5XvMCibSiGFw",
  "key5": "25YJFrHnWZSThVz4Qa9Tn5oJaRdmwxX5LayHBSeSxmWqSYsdajh3HSnxxECivTWrkHNjCGQaq4aBYMySkbKEpYEP",
  "key6": "31QcYb7Uq7fSkc785RqEan2GqGKPAVsm57gAAZkZbLGMBH4M4uGDM2RD2DiHzAzi9iS42gUHiAAFZjov3r3KHsxK",
  "key7": "3aamP18BkKWM93omwrcGEELtwmqLfvFWwx3Yf4EuH2RdfBAQpp8S96j85AJW32qAG2izPGWqTKgbqdnwC8U2sZAS",
  "key8": "2RQoVLfueRJHsQnvVoS5xEgPrFr38e99ouCRBHKB6CgVViZJYZ8LJaDv4gU2sVfY576mXZJumheopPNWXFM35o2S",
  "key9": "5R1eRgssNPRhPyZqdHsfBF1ZMviyFUpRnW6A7naZyWGJJfbbaoUGUrdPPFv4KSfcYSUwkdxTATfo9YFqSAXdw8Uq",
  "key10": "5FezfRZ1HrSrFB29icnsb9fYd5Et4w3apeoXTPnotVeRGdZvg7P76HxZKPH4oNHTmrSsViwxWdDKgv7WEh3GSa75",
  "key11": "XoPcQTaQ5s8YJQyFawFfXo85cwejQmnxTgBRa8RjCSjuNJ8EaqBF7Fu9ubBt7jt95ariWToSGEYvYUSPafHpnzV",
  "key12": "5veyfvkq8WpBNyQqvnGM79LeWLqnkzf75qQtdPvFx69Qt6GfEUYsJarS3LsAPKYy3bKRZ8ysaYdvzme8cnwPdvxg",
  "key13": "2pY1r4iALFpyPnSm2gQtXij2jro2zvoypkcSzubCzQzBtVoSiFinCCRnDb7NWkBYJK7NkkdHVnavYhRGZcftt669",
  "key14": "VSfcVwF42UpctNd4rDK33rFgsUEssRAciSzXDj7dZv882YQekD2FtUq5YLWa2SRB7Se84djjBmtxydqZLzwe33V",
  "key15": "5FN3EE2TUGRK91BuPhgi7XJy4Sd7zXb62ir68nRJyB4ptgNihi1vvFKm9C2cgcfiE9YQpnGnpMCp4VbCqgB91aRN",
  "key16": "5prADJBsUhMHG61yEaRkUyJfEe4LHowD5krLeuXM7EGndVtN33WYZNNhPCTeGy5mFB2RTWUkos2e9GpxKDnsMr9v",
  "key17": "2JECafPzBcUt8FMJYHekgrWvGietGZKwpqbcan9isQEMLRJVexEF1im3SF52fEbn18pqLgQdeYjoe5cr42jPrdp",
  "key18": "4736d3du1WWpPZbCx7VTGc5pXYVT2zXMMMitSe5EWsBxvxx3kXbq3Y9yeTsoNTeGMfx1dP4NHGnmK9ReGVZnzhWu",
  "key19": "3PPkrsV9ehCT8nnidwNcCBDTZSFo5mMFScG6RqMhU4LhktJAP74uTkwAFesuG5ddDhttw63mfvsfbYQRGBmtX5y9",
  "key20": "3WYLhrPKR3U1VAqWfwHY6P675vyctkPKMtHjR618uxGDk7et57fnMxT8ZCUDWTfmAoH5ivxwZaWufL1nacdL6yqz",
  "key21": "2dzSBoCk8ggMQo36js1QYYffAYgVpNzXZ9mJoSwm1p6T5u98TgNAVHaaT4UkLQCCZ85HzSvz6AZrm6PxrAemjfCU",
  "key22": "37UnGHuT428Tqm6sq477UcjhQAVdXSbaXMHG31CPZSFp9SKtjW9rgBWeWkjz5ETGq1rpvcW61o8SVdezt7XEWWZK",
  "key23": "4WDhmiyKuBQCyLPoUVpkoM5trZLVGRALBZXqa6xB9qwusACjNdBuV5bsKhKhpfAciMLSyNr4wr4vcRCBWKnp7pVw",
  "key24": "5LkVReEA61CH2kjYP5by7gZcNReyzTY7QVh9FcXLbQJNN1W5ZXfQC9cVyz5xawqnL6Lhm382Y6tD1ZD1t9zVHRep",
  "key25": "2iwjFTS26od73G5r2AZibwbAUk5gZ61Z3XXG8F2jPmKUwDnKXaerhdibxqxxSQTCHBy93QkYQ6G8w2iVH8fK1qEG",
  "key26": "2EqdXvxej44Zgns1sTzEbrNwxWqXnciRUdGLZ2fE26KnNaLKjQx9352JELCJ9dyuHVB4aLdtzX5hJrkDvtzjYeox",
  "key27": "2u7MdxCNuxGtcD6NFm6YUaQsxp24DqjtFsrKgvDF6iDS3AxcB4vbLHwqSc7Ab61DMu8bWdnDy9Nb91HAV3Q3wu89",
  "key28": "2okSgyYpnc8XEtq5JnBG21QeNjRneYzEfa3eRtHfBQfWyzNoKeTR9iCjRCEcpviUYEywDusJPhmizTNBPoQd6UEK",
  "key29": "mbcAijXYZ49RdwkxYeqaCZf2Q3RHCHGzCw9sptQDpmebfNoNqToE1MQaD3XzALmrRRmuUpHBkBMkgiDr4L9U8P8",
  "key30": "5K6BvLwzxbJfNbo2M82FH9V8C5J167Zzu6Z86HMm9vLyGXdTrHqR77oAaU1Mk9QL7tKWnZvc33p326CSuy4kdK8Y",
  "key31": "5TNbwni3fKikCWXf22pYRyZPYmQhV8tZpMEP5e6mu9mr2kPPKxtWZWLh9KEmkSqmvbagTgGCddnTtpKb26J6Vx2X",
  "key32": "b7DJypuchTrym3XpK3NMtU2T21HQfbJ242CBN41rZFb5p64VAz4Mn6wzUUgubDxxNvQVagNoTDfearqPUEyrRso",
  "key33": "5bqBN36rff4tRPvJgGbW23Ar9Crx1vEVxr5su55HtfQaeLsymGXtnvfjfmm8MipfeceSxKjv5cP9CvoYF5qbyq3R",
  "key34": "46ZeXKBiu3zZdhp5jmNDoZ8GH4Q7j4dLiowzv8EpkzhWn3Rj7KyLk73pPjvxK5oYmDck82NT2N7WGyNaxRJJfP4h",
  "key35": "2RD9FULNaT46scYpDjDD6qsZkvgrC7b498497GaoLU6or1aovGrWDPC48PKwJqA6FC2z71eBVCuAMuQEWEsJj5vU",
  "key36": "5pY1L4mVwyZQeUQ24teSPYEUHw3ToUBfue2zvi9Uq1G7eLZZ271LT3RbnxqgxD2UT9Fvf98nNV9kf1xhvnsoGDHs",
  "key37": "31s254RqFtax1eMDPJhtAqzPvmv6Quo7LzfQZ4k6aTKGU3nrWy52haH8kxYRyfJgBknvEi9XtnfQosudcFAoq7XA",
  "key38": "5kDmC74rLY9cPCdeSEarndRdmFDxZtERUBTCLGXJpc1Cq1Gy4oV2dGNqBZ9z6uARnK2fS5VwVEfX41cDRkMsXtfA",
  "key39": "2UiqrLs5okgRMJLEoboET5ZMJU54Wvwjv1DhZwUTDacPPMu2wcjm8UZRRrxHacaoqP6BakUJ9ffX684HPp6jcG3Q",
  "key40": "D2Q6d5Q94rLuesJtkaTUhQ1AgKjR9hiJrqQv6rmfenXhvuYqc6atmeiVGSLYnqUrbst8FeYSq2mw48u5CCWUMmk"
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
