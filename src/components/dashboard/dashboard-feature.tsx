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
    "3dLUGyUiN3owzN7FN4F1iuCzDNTETPxQDF5tjXnTWwVpAbut7D7RgFmApWr7kXzp875QQy2tRkaGmTnvxEpjhRRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PVadHeWsUVKbKjQDuXG4VvdycMWTBpcGBCpCwA7a9YU75dsRTz3Up9HRVER1GPNiGNcigrCMoiMAHEHAcCbBafr",
  "key1": "q3mAaHMELXEEZeU8d4K8H76fSqAwfWFCfHLMKUmmG8NkkGcFQdmx6xzesoud8VaBHMt5xfncUywXKYAsZiuzzp3",
  "key2": "3LFFAxBvpH8cLYjHtNaDMd7oXX2SwwyfwbgW31vDZbgatACEG3EsRsJSpwV9v15rtftSm64rKGGybdMPe6z99rYL",
  "key3": "4tY6zwqMWQBfZyNrGV2ZUvJdLriSXSUbWJBSMshFqixtPF3wFo1S2ZASoept8kBKLQWrSrMCag7uUavQBzjWXVu",
  "key4": "41B8Nq5YD12YRK38S9Knowwgvd7QFBUWnUGooPvdaDNacACVG6KaeAP1RcY3shhhUqtkTjE4Km7ZetNDgtvm2Mk9",
  "key5": "3jw48D3PEXbN4JjZVrEYigVd4hTdTmv6N6ZMGnmAg3MvXzT2kT3rTfzddwd8qy3DKP7RJyZr4La2bibi64JRUs6U",
  "key6": "3WYgQBTZwtKv9Su9zfm7DP4rAr5wVqwMfL2VhsWmqP5w3cb3d75JWwgWmedinQBm1SBr8vMpRh3HvWhDTTfYbeWt",
  "key7": "5UkvVqkLFmcpoAYXVwWwXTK3EmsMYwx3u8Gwj7aNdLy5WynP579839C1bpJUncy3nij7LKSCn2WurQAZ9wJZnznq",
  "key8": "AvNxsMRqoUDHZfbo8HHyA6ANUjRaiPpsuuiVGacUTsmfDqkRqp9QQxXT1UUaSaM2RNT3eryaPSXt5bMBfjQ5F9c",
  "key9": "2Gmq5CNdEkBaFPkQH5jvrJJXKkWySezaavhCuYedF13H3Jan2z5RmtbVD3Kyv4HBYmvoz3nQwSZ9TzGjT4KJdF1o",
  "key10": "5SGMes5U3CxLV95U6c7mAjHn3Rvph5Esopme5RgYAEx22TULKNXwFcvv5kqouxmMKfxUnwrsKL2PXUk9PbMWbrzK",
  "key11": "54kuPLdEYxtSkqFEfZYKuA8MTW58M2LAtYWT9YQcX7Dce7aJA7wL8sPXcQtmXWDvtp5r3bA6exQtzk6vbhNfuAqr",
  "key12": "49cvW8biWC2bR8397pq44tj68mudamhFnFEbH6aQ62XPYvpRAg6mvT5SCyXi5LdM9KwEjGrLqTFNn27W7i8RgoW1",
  "key13": "4yA84jnWLkisd21CD8s9WQ5moVsPimpKwEQe6CDhshUDXKhTW1wXyJDP5ty9ABX7Deo3NxJyi1yb8oPqWVTWL5sc",
  "key14": "3bzAQstHF3Q1H2vgqfVbLXdygxzfMX7KCSFrA8opfTRyhaH3nkJeFPCdkQ68RpGRj44ho3q5yu3LuvyhNRK3sojP",
  "key15": "4NmzAN7GXoLMgT3zv2BKvfPZwB2JDtwkqwfwqtSDAWXLaiG4boqAcVeNPE3ZWoqSj1aLwmcWwZtE8YD8V8vk5ZCK",
  "key16": "7JWztWoEmDvC5c4sqtxKp8asRTXDLP4rqt9trd5qW3xipjhV2vVCDtYS4WGZHHchpEmQJd2RL2FURXmPqZdyeBN",
  "key17": "2pxppnHj3DRPcyWRo7jwXPyVspuwaUv9rbcgLriMFeKrofv6yjdD7xwERptrxLhNqasPE6LojhbYGv4H4sDceBny",
  "key18": "5xXWxZnAbN7CBxmsr2cgKQxD9RY1iVMPhzXofUNnzgn2y6eEacAUzasJexx6cGSyd3asLshJSdkPxYYKEEpuw3gT",
  "key19": "51co6McihkH5gcadQ2u37U2QJRC2tqqfYY8i5FvoMyXDC4Gea6tRbGoAxbBpBmewfZB9NhGgAMk5rrgYtrCk1z3D",
  "key20": "5FR1Nf5mxbsVuD3J7a679dMTVZPeMCKsNfPgzQz9P23UyDxM8jZCjoU5WittiVDcyCach1wAPvoPaocGaaDTJsG2",
  "key21": "41qfPZoFHYZ7UNzVZGwdiHAFSxbAqbHtttFZ3kuZCnajs94U6xNanXgx7FRKKbMs7ks65CsKm8XtniiTP2n7iohc",
  "key22": "w1748fcbffXxAtQbGomoq2mZ7Ad5vnqVaz4cDFDiVVDc3eXFYX3G1grYeSveFzgSHDKNsqvU1kvX1kjkq8rPU2A",
  "key23": "3VmNBhcNJfiqfMzFpaboq7V8zXEkrNeCiYukjjSF1vgKmYLKWXhzKCFwgXEapwSBAiYkpNi75YALn388bvsKqNfH",
  "key24": "5CFXk44NJiHLBrzp7jv9nCDPa2LDEZZEmEPUvfEvig877biD1SNub5YNe8uZmrJPofDxHjskFcNuSu2VUnP7HVY7",
  "key25": "55eTnWZjtS191CLCwmfjMoij7jLVeuiJwE85e1PRcgqDkH1AHLucef8sudbQdLawkQDYLhHMErecR172vaW6AZeh",
  "key26": "jASyHLGux9sKs7PyeFXrd7GEYWZRXLeYpPtX66gqvbsDh7NsaVZs5B4WxLRTp18qZHWQ6igCAfwyfW4LDuGmKTT",
  "key27": "2YWvav3e91ZqreVHvaXUVA79uVBM2aT84YD6igLLJDpa8f2K1Lyv1YbSpNc9ZTFYXsog5rV5PLzzX3syxafhNc8y",
  "key28": "2x19X9cYZtMUfn4hnktzkbKwfYByYWdM6dNatTH8y2B7WUvMwGEYQhDyXdtBKfkDaHGDy2x2XswNHrhoHNbJfS8m",
  "key29": "3Bz2Ax9CUqQjFcubV9syqtp7bHf9znSADoE5CWaHRGxahSywVMVZ8UiTuvWtZG7QtATTu44zmDNANdVbnzpv99Vj",
  "key30": "3VqEywWP4mw5rGKAatHTRbgzz8ZUnyFKt71FqeSFQ5WpJoFAL3nQbnPhsX21g3dkXWD2Btdk5LfXY2JzAWbc3Ltj",
  "key31": "5UVuxMsxGNmL11nMh8KgCSJe6HNWYDWVZ7YZRWyopRw9uFojC65NNuJRtinuSfyVA5zbkk9rHJAN6nXj4fqXKkfx",
  "key32": "bZsPM5y7MNWT9dK8NVqKmEzkMEErFNCML4rSdCUYCHi7KU2FnEt6F51jzSaPt6bdRLagcvnQnojkvehtQ89FMJK",
  "key33": "4XN1PxjF5AFUXYKoGS7GEBbdkjZNWqpnxBVwQVCYDLR2q673kLPFFodJqfc4EZdcgNtrTDXG1ua7M2sPgQMvodG7",
  "key34": "24Yw8Zeo6jdMM8YUhNkwPd5wcxAFqzMpr2nnKARmB16cE21DHZDsTewQPKqqiHxQfT9LtyoJeGKhVSGtsYbaRb7V",
  "key35": "4Zucf3ME5TiCNxMVU6ELsFhCZTSdkrg6htBnV57E3iQdkstu3hwX7uWAgnGQ9UwxU8u5svsrgAtj7n8rX46aJUuw"
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
