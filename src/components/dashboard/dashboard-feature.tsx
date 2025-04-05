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
    "7jpCeemnVw3WVuiFoumtGsauRZbTh8Lo5pZvhRLPYV1NkV1XXaxtVau12Gk9yT1hvRywLcqbieJ1vu5gSnbYfMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tUNCqxZeMFWA8ozGnFKeoGUWGxqzuD8rQzcZykXRpUfqiPb6Bogc86RdTHjFcxtGFM91Uq14hB38PpBD3okup7L",
  "key1": "4MRLZPXJ9QxtbuNPRxij83ByWi8Pb7woDuNLZA4S9fj8ipoPxgX2SmiuSReCvQ9A4KT7peJTrQWPZ14qhv9hVTXT",
  "key2": "46mXbFGv64ZEStqNXs4jut7jVXdrSYu9uW8F1MhmZxUVpcBBDHs2JuRTTiTCieARzwP9oVAvTweWU5ttzHEPuK3E",
  "key3": "5oyUA7HWWWbrWhquPbfeMkvaUXkd3iBSTudEPEH9TTNmz9j7MTndpPUKpEXtyKVVDxHfeXHyNuXuf2HdgYXrkq4u",
  "key4": "4jr2ZH6AqArP1wRgD7cEWVxZ74tptQ1KhtQPqk9H8MHncS6EazX2mi9SUjDMPGrXzEiehWAoZKTWqMUVY2Nuu6g",
  "key5": "5uPyay3C4XzikjGd8Mx5fWQmUYue6ttumdPsG3FakQmcBRByJFJqTbFm3JUsxMmRyPLFbPnTz8wsbKK5AZ6qcNLb",
  "key6": "3Bae5N7XNvczHGwwH6UHjD8xXnpeHCVQpfbi11s2c73xfhFDWfqRv2ncpVQGWfpG6WHshTJz2hFjhp18GCLREexE",
  "key7": "61wc7RLeE6VqVExdRizTNoNuzYxnpUfMFrFFz6mhbUTLf5B49jqujbmiaosCbgxPWXdr4V9gVZxcR6QoBDMFXgoa",
  "key8": "4nQjL5t7rB1iLfJy2YyprPh81mTshY34YMWApBfcAeY4gpmBKLtNGj7Raq2dfdPMgaFHpWpNYxzWRNmCpeU4Agik",
  "key9": "3GXTJAhmHdzMJuSNGy6Gegn7FSdaHVDZdkYn3fFMaZrni3yzT2sZRttb5LPsRheMq7ZucswUjTKucYyQEWVmKLyP",
  "key10": "3fJTTxtvr6o4hAnEmuoLxFHJ8zmwzouuJcJoA9L4YytVoxTCpU2QoKe4rGBopPHn1Jb6nXkrKcE8SfFiLYuCMzZe",
  "key11": "4RfjJUtdHRicu1hmrpTH136b5ZUhEiuArV5PNnXPASZbs1uqQZgpHVm8jFR5ya9FZk8qnnzXR4CBQ93Li22ntnbQ",
  "key12": "5iBMgbQszFrQZhuwihLvvidjxRiP9HszUe6dh4enXQ9qXTDRwLhpLQ32gs4s9HXW7uGUEvYhXuAkuBiqwpE2fo1M",
  "key13": "5Dy6enkhc2bzLUqUsmw1TVzerdkN9QdQRaWb1g1WknZBAk6rgEetg3tZ9dPtKC8SS5kKEVCB16z2UrBqr4HeiudE",
  "key14": "2LTLjDYfSPojnzmhBweBcQkss8sEP4vPsVbi8gxcpdAk9xfXuz3DBAH9urjKLjWecMvzMYWkgS1p36RNvcLNfEEs",
  "key15": "5mtFq8XjQwSavBGe95CBkcXeAmqSNcWpS9YuMHSgJk2QAST1TfeSe8Cj7FLUFMsYvpBPmXPrt2gSAbh6qbuzvsXh",
  "key16": "3f1MXyDebMTMmMmHTpijXEiJT1xLGa92YaCbh3Hbt65bXV3X2HANhwss7iDJnJ65drV6L5hfc8QTg7NNxAEWeDJn",
  "key17": "3usz71CijLhtDEnQZF4Lbg14zoKHdGusKfE7tmEdRDigReQaxD5UZbGm7hwLZDJpt1CSU3gZcMDqpRrbKiRmcWv3",
  "key18": "2rXWNiAj95w5hUA1K7NrtHB2zJGEiko2us2aSxvPSB79mRndfmax1kbfpy58g7NFsgkUFDbLYjUb6dZ19y1zUbHQ",
  "key19": "5uTwJHCGZB7GaJCBL2vfqBshzJuQp5BtffdwiN7LxsksorbUd4h7HxAhMbHxnZrnFfwtN3xgijREEv7QjcztZ6tM",
  "key20": "3DMWLPSNndeVkLLxVrRLG8mC4jFDTUwn77g72XWvj7HJGbBo7Q2x2zMLvssXGxksApMQNipdrW6A7sfLWdVbLAiM",
  "key21": "24Mf9fCiYMuVzzJSyExkbYBTBGTFWFhQWQgP1FKWoycHjZVhJrUskq1ptrmQxo7x8ZHj2GJHnwhcusWVGTDNAULx",
  "key22": "5CU1FxYc1PptaPH51buyM3SvuEDWWdTHWkP1ijmu6R7J1afXPvEgX3RCAn4ksJ3hQKT4aARZAQLhuWbZ2ipbZ4cS",
  "key23": "5vn1aJQJ5XygPreJWgSqF3Hh5wjdfkNtqMcxrmkXhSoQVatg9XejSQpoZPkwusAwcXccdJ18nRB2PDXS2oTj1pAq",
  "key24": "3Kyc3qg96bBuaPPYgFVbvZaU7K16Yt4DbMxCh68ghzNUnH7DTZPykoefiq6LmHVf5CqyJ5EhN5nP3jMecaiuW3Fz",
  "key25": "FApcyqtX7VQAN5KWLtaan7puSJsXFe4aLkdAb6drvyMCXButvkY3pGV4tL838tdJ6MPAcpC2ZwKu1URLyXkKgg4",
  "key26": "4QBu4ATWDNpUfQwfDQva6GHpjft2tFpVvSHLEKmQg7BHU3LWjfF2KHddhocmGGaD2gSk4R6zUmZQEMvUvymaKr2t",
  "key27": "bfFoczczTm8VhfuAofZAvFMPfjvo3toSQPmLCA5usx4pqb5nVGSfBYNaArEmqupN8Rzq4n8VFR114DEjAwoytR5",
  "key28": "6754ZxVGZYUsymSc3KCU5dhqtGBREVNNL1uMza3fSiqahANVZ8jqtGkY8AttdJ5SGPrPDGrD4QaXeCwgR2XzH8Qb",
  "key29": "5pewEAf8ib79LzEy1pgiG9hGDQUWX1zmdRqA37MAbGvWohdLuChrNV47N4bK35R1aY5j2WSvKqNc4VsQhAW2VCsY",
  "key30": "46PWi9L7JZc7EZu3kMYjgTgCE3PkV6dqPUtA1mTSEnbWA3MgM2a3DMnrx8hoQtNwFnrxLSvK8EjZggJUtUNX46de",
  "key31": "43nAxCiSAnRfHb7xzaSUjzSKsfH8973CaxBny71sGUyTXj3gX1gb8iQdYu7VNDtcok8f4YU55ycwfsHVRTCoycRF",
  "key32": "4GVo4GskKQbgtjW1oziA9Kp8WYmVk3LMh8aCizaGSRCPMnk4EwVNb1SdPZQHH7yfcAU4sMEbKtQbjEgztw4LtJKb",
  "key33": "38guNrgHn1pbAxAiJ5h69LfnCtGH9NWJKMTmcJeREVSPMaxW8ARrxkv6FST9U235UpW34AA1JWdE1GcFdDh3ezQ7",
  "key34": "2vMMXkHiW1caNAMy28qn2NzCkUv5Ys4pV2wnpGcdeDLWHt6KLCzgvLteN1epNtuMQ1jtQK16BrWoQZkUhFEfgNiD",
  "key35": "nVPgywmYBqnVobaYNFxQoNaRe3UMRevDkecnsNfJjVPYc2YoaTLen6ZMC3DezKxcNZaHZxJiDfDEwza6yYJv3En",
  "key36": "3CyVnC2NVN9Cg7wG9J1JnXFPiPjfcdQcXbWP5GHdTPxHDX4Xpgh8dFW9EvGBER2SeUNbqWQW28mxzsDeCYRDwxpD",
  "key37": "3PZWzqdgaUZfkvaCe2efreSCy9BW9z6R4WaYsHVF6KhGZ5dWKcKS2FXr47SdYrF6JRn1LD8KkaJvYXCKp4VAeMC8",
  "key38": "67dxczUp5KARY7qyPi7b69891aKLdSF7xAkZwAw4rSHYHmiYmuzmXfirmUNYJZ6y4bDgXRPwn7AHkVtvpPRLm7r7",
  "key39": "2GMU4i2BdqhN2BtQfNJswfz1FHpM7jqFNU3LSFQqDPu94zH468GJBKjm4qyFR47fajdKgyChjwiHf8tvLHMemWmL",
  "key40": "4Mk2TsL6PaDE56zJWZcvnmmFpMV5u2THLyZBEAHJxbuzUMpE3fTC34jS3iFuLndzTQZXrWxQE7NnXUGpWyY7XXgT",
  "key41": "323C8XGpHw2iwioiRKvDrrLyorjQHjZmFNBrvXxTGjy8NPZTpNK4BBEiLXsfZoj5YCEooxH6GYYWbscvT9Ndsjtt",
  "key42": "4r4kvvP7yLLvJGsJpV57axHNnbXWyVkFzq5ciShfpeDRsB1yGVjmuxdab9TC1YxZqigudJAz519UDLfq78CqkqHq",
  "key43": "2so41RMWfNtB4WWkGFsQ2BXT2aRSCd5jMCMnYY6uz5vuYcZswNwaMQeNX9b5BURC91zqdBn6NVY34UU579ovE77r",
  "key44": "2EEj2WENFNpppdg63DxNp1jACHFoqwH8FB61pzWGAtf9Z8XifKnsDHDd5Vyq6WAfa8qUcHj5Ckg9eqanBiUNsv8Q",
  "key45": "23X9tjAZhgVDw738mUyc4EdZjdgGCuc2XnRDVYkC3ENDn7kVNCNc3U8D85e7Q4qus3cp7e5UGciHjNNDy7AhoHQJ",
  "key46": "4YYrEfWbcGdCpyV4zHaG4DsrvWmddfjnFiiXBjArMYhfkvkXcMARAkG9QFt8ergy4NDn9HrGor5CNg4HRAmVhEs3",
  "key47": "3UN3yWiu4bBVZY1AiuffYy1Hyi9mXm9efVpczi8eDKxHV3eXrmYJtTxra6g4HXWS25sNP2um6wbK2aebbyv12kYg",
  "key48": "gRSi1h74qZXG746LcFSLVfW8TNCEQGff5CnviS9ANsdFa9QBoLNo1JQXUaZT2nmMdkquY87gmjKqahAYAXkYbXZ",
  "key49": "3xokXaCwyvS5BaT4cYdjtabmdw3pKXoq6mMRB1AqURjZCiYZ1BHzNPYjKzyJaoFZ1RbLrDC2YBoT2xJBuUi7HN4C"
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
