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
    "CUSk84ubhp6LD1Nx9gLEiX7yJCCDyGxmi6EMBApD8FJKi3qTduN4Chq2YZkmgJ5NcpMGq9iNCyRF2V8krpugMYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KGaGpwNRtBLQCFfr7X42H2oJWtspbKMH5sVdWSfQLBxagBXSWbVeHVS7o9MDJGpgXoLopSqCLQMhx5bAby4RX2c",
  "key1": "4teTHYhpvGsjmGzB7QnowUvzLqAxtxEqGmg7r6eCGcfMTnNGLweqvBUboHHmKabBZRHKudA7HrS5bN88g2FzvEQx",
  "key2": "2Jnges4FnMR37gpxodWX21V1VRkFn4YtKCW7how33QUVWvJsb5viJgFya5SVMH4bRiL49EskUmUPEyh8BQJBD9Lj",
  "key3": "3SiUDd6CuY8kXk2TwHHaLP7tG9Wyp82E4P6pKzxuHvJCG4kmQZfLgcHQZVDZRT39FbNk367UooWmrDfk44xuvcAZ",
  "key4": "5HhebDUZhwzvXEQLcDUjoGQinQgr92uN5EQ2zXEn5uqWRXGhyRG8dHiuwTsdwoz4uMmr95gHksbErifECfo228gB",
  "key5": "4pUpgpzxkmuVwmSPg3REdvmjkuYLEzAzEqqkumv8puDnB62f8X6HCGjjjAwagzoXRxatDzzgJYaNrBzJXhEP2f2m",
  "key6": "5MWfYXREHreEvvSQHnB8SRoAUV4yfUSZKTVbjMLPXEV36VmVBxktybTeE9cw4Vs4XL664pZSwEJGEg2MjntkFzJe",
  "key7": "34xoGzhvuxMMfQCXbddECKgaX53ic8ohWcyQrcGzbs8AxLPZ2yMcuWvbDzM7Nj9vfSEzVtME3vtiwFUjqtMWbjG1",
  "key8": "3mdEZwU379F4g7tQ5XtLNnBTYMCVkUWBK4hkdJ5fRnbA4sTDBSTvFdRTcsuX9BmJay4tMvmESxuveL21KsAJ1Sgm",
  "key9": "CmqxiVvopb7kUeHn2Zw2Q6wKiN3QKjEE6vmyPtiQAUbqwN4QFcxq9Km8fh53SkSkS4erzd7zqubjbbQcQHd7DzP",
  "key10": "3y82mngwedbKM6BHzp6BdPg1aodb52tkggAPo4H8AXg1EyeA1X4uKGg6atkARH1ZujCUtEKGJR3mhTyfjiY7vLkq",
  "key11": "2akFhFbqV8Z7U8W2YwG7oBz7Bw46ACRjwmVHdtY1sqnnirLktw43ZiDGR1HNsrSKfCirxiGftrPyB4utwcdDMkui",
  "key12": "57Xz2vsmPR7qyj1axnogjhnDkbGEgzYuHnq64KwG5Y1g65KpA8nHKHHQhbSDUZ18phtVcyEgXfVsN1MHsWPTdaMi",
  "key13": "5A7ECz8XZ84dxtnwo5C97TJPuaPkRVSWc5Xcae2dAxt6pksPLqSfuikUaXvU287iwyRgXwLJKZhWz15fSy7T8Nwb",
  "key14": "4RugDCnf7FaB3wPVuUHMc9mjgNK8vBHL7x8rL63tWQ2DX1Uyv8bza41EBPmrj8YYE3DRnwZRFzgYxV1Md7zWSRaK",
  "key15": "5C7CPEzbp8NQEGdCs9Qq3cZ6eqjpTU5CPRWFRDvkXSXPiBvXiAKi7J6f3Kmkn1xYgN1AeVMUzncP2UTJ7HAFjfjA",
  "key16": "3S6TVmqdpp4AAZD7q6CGJ8uqmyEpkx2AXAVjZLxL8NBph4WBEAqGsnkupqJvDShyerttDMsFq7uJcgdehbJeBT2m",
  "key17": "5bUSWtC7RrNUR8zFuJfUtRsUBuGH3PHfpDsk6Ki485Jkeii5tsKHNJZeUo84amwVuorX3KjAGMPWFfu9AHdpMt61",
  "key18": "5k4XBDTeT8bfr1gD2rVxWQ7c2hWiBSBhDgA3uWJLFqoKFCptFDb5rUhq6yK8a4iVaNFQoshwC2J3buUMSMuAhLew",
  "key19": "61ydr4a3Yfr1gCJTBkrLgvvEAJHPdKSNprYecex27m8R2dTdRF72omY6v1Cbea7KeYVxJZuk2WUww3Kt7KpiPTmw",
  "key20": "3CkBZmNSwrTTmaK3xqLyeak36ZRutfSdWsFrcMDoypUm26macjwaupL48ihWFbzEsysV1kuy3GA1y4ej43TNKAZw",
  "key21": "M9ohDVv5Ho9ah7JTMGrZPTz6HNz3WzjqfmeKLcTSycdiw1S8epZNfybepfuhsekKhsPyLjz9eXjjucHGk2JgGLj",
  "key22": "4o7F1ikCqEgEycwd1RPEncBZfAwY7kjXu1pErKoBYb5WA5bn1Y33kCbGzH1eJa1QedgvYJ2zvmZJWHLZSbyqBMa9",
  "key23": "3H71VGADEsWKeFASJCBwxRL1YyWmDq3wBGBTsZmAFit1KUYrkMrMMdxa6FLkguwFvU62rj6MPFBXUDAn9QGPTKMu",
  "key24": "3NQuU27tL5J5SpqJE7VRJu1PSxUbdpmtEozY6K68tfnYTYEvPCY1yZ8UdYPK5eBgxj6iy4QF1Ud3sFwgubztbCFq",
  "key25": "4ttfUr4zRndDMHm1DBzKkzLkB7b2wWxqTbnQgbzZWDtj1V2KMdQyEL7g8EDKrYW8K2xzBNxKAQ19zeRm6fvkCSRT",
  "key26": "2rbKgTMcP7tJhc7K5kdsdUfNo5CHqK1LNF8KAF5MmA976MBe5iNS9RSFiNNqDnY5rkLCeJf7jbw4y5RMbdsSA2KA",
  "key27": "483Bv7GMchkDsvyNd1zt4eYHn3EPajXKG5TAzyM1jS3vMdHzgdgqiFRXPWm9gvssCwPrJGS5UqNo1qP2TTePC5LN",
  "key28": "2uADqKTQ3Ttwi1CkoV8xiy16dV7sF8TXFPdVdCTLhZUnPUcq8tNJjYr8PaLwRAWURkF7XwaYH7vym86meK23Y9dw",
  "key29": "4Np3nLFpSFM35zzT6Z4wRPXPQp68c8t1pYQYWkrT1u5GvvCAYMGe9bNtXyRNsZfk83WBaE7HKhD3VVHs81n6XDHJ",
  "key30": "EmY5iXQYJ9qDvBoAEGFcqBV1B1eW6zM2qGX28gmPf5bLZ1n67mcAVMi6cpYQQTi5c7TeS3FS6vMgb9qSqq82UGg",
  "key31": "29qRo1Xa8CfrwFoaWg1ZEyQ8XDPtQbjW1todP2DDNmaU7dck9CN6YK9DM2XeQDMAstaU4G56RDU5uSSd35wCaRYU",
  "key32": "4MH4yrpKYCMU3HgjrQkcg6tH21RV8mjKL8tFCdHBc3e5vxsvZ6brUm4ivHv5Eg5TMXgpKcWFDkurGPUUJB3aLaP8",
  "key33": "4rmPKT55LHorLRCshSzpQ4k2EALRpeLF2AjYLHpqPy2vPfWUiCatP47aG67uJCUoKrGkMhXFQaFbpSAPgu1VNdGC",
  "key34": "34aTrtYA4LwspUZVmCEaNnhYykP8m1zE7C551mmzrUW6B7Cbqsz8VieujdyQcXRc3VtL6QFC3tMBf4BUTEEoWbDn",
  "key35": "5ZWicxCdTzunVUVK5nf7sdqiB35FymNvR5QTPJuc68JbYiahSm1VHhKq8ChaypSuTnDRdwXYJ5UycbTtxyLJoCjT",
  "key36": "4hc1D9jiZEv85bXEmUyuExiaTHjar4SDVAq3n6UrHRXeQ6kxRuCNaz3nEQenPQM3er5hUxCioDsgMNZcKqVLZXVs",
  "key37": "57mPv4Bm7TqLKe4F4eSdonZobgEvT4vPDToEEroHHapNaHBWKVLgfJAyhMjtBDZDKZCfj6vFk1KLAmnL6EScnCoK",
  "key38": "4iK6eEbDqJ4SxHemqxgKWSFuAnDAZ6TKJ6xg1xT6g4CHsYK84mYfrfVdba2o3y2vDTWd8JPiNkhFu1DPhi48ZxNU",
  "key39": "5p4hWR2AbVbDnfBd7A9B1BUmcFX6cG8mjTcJKqeborvvsirAMnKFaWCb2UQsXTBhgNBsLCyYm1Jn9UWJhLBj9e8P",
  "key40": "49Z2S1Y224SShLMJ16TxEupjHCuUD9KqgxPBCktkyHGTZgGqK5jCpNaxPFxPdYJeDbaPUKd6nYkstSAUNG41yDcZ",
  "key41": "5B2wz366tpF3iKbbH7Ra7brFJAQVF59Wr4MPVdhUHdrVNQZf11UJ89tnjwq27XkJdXbSUDXumn1S5wfMCWxVGNSZ",
  "key42": "krkMTetesSPNAckdDwaKoJhbZLprurdbokTAekpTj6N3MEZihNFkaCdyxd1DB9rAPnKu9ddyB56B2xJmikHEYkt",
  "key43": "2qpvWypJbxT8SavF5fkkX2bGErwKNQS6oJzRbo5E5cKSiyLq46PtCYK5wLTmSdGtRK6ccNhEBCE3PQM9q3xMGQLZ",
  "key44": "4GPWvUfTyvtrhRLSLfvaMu4HDiugMSCZokBGqEvugs9eXCiNRbuzzt9RF7e3qZNL6ArrZamQpUsBH89qe5ynwiux",
  "key45": "2a9iS4GnxngYQQNzVcu7qpfxthTEvqSGx4eLP1YD4gB9kb7YDJbmS8aurJCibh1Uy6LujnGnJ5qmVJ1Gz55sEDgi"
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
