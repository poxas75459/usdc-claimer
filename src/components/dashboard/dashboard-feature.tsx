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
    "4Re3WyAG5HNGt4nDZhc3NhwGJFNG1MNrgSn1HZmFBPPNUwbaA2HwJorHRD25w52EVKapYE758CFo1MQuruFrrNMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhT8jrcwU5JnbLfiZ4DjoNmFzLMC4w2QTz2PC4ftXsNGpoHZJj3WaLfXSYWhaTMQpqL3LzmJ7yqpqoYEzhZEf1w",
  "key1": "4ydZwR2mNSFGDPWPjj6Rpr3GrTsgu4eMChJ4VvABh2jZzWfm2K1Qaqy1nE2do3mEZsbbHAqo73iez3vh8k89mVaz",
  "key2": "2GSWmywUHQCBSfgPpKnwVtX9QaUzwHa2fJEBHv2ZD8qZs992LAh9SK1NkSSguGNR4q7EHddv3YrMLrc5obotRgWy",
  "key3": "364nerXfxZKLgPzqt9fearZy8RY4o3uRuhTwdxNUVKLo8S5nAtPc65hrdkwmp4mdVmK6Tr8cZUaZNGy3oQwiqKyA",
  "key4": "5B4sgdpARZa1cqrohuVKCV5JG458isF1c21rTdCGAvoMJ8P6jsx7SKvyfTw9ADC1LLvHgETas2xFFj6yRXpKS5iL",
  "key5": "8G4CVhxz5DJNsGo5z3URWyDmiM1W62fRqUkr2WLmrBvBLjs8zeTKN3i8ZHp2t1JUW9S3SxgMFcGqqso7uMFSBYn",
  "key6": "4SsKYBawCqx4Jb1sbZfmwTdC25HWiEKcgaQkzcpPEiiaCxgeNCEpMb1yLTPbZzjGAj8pLv1tzbyf32qavUBnp1jt",
  "key7": "LDPmRNdyvUGFLgbRafK4eoZXaSirFdeoBqKXffneTDg1zTuNmoxPoCWTrsEj1Byuw1sk6gy62UHHwzGc2s8cW2y",
  "key8": "5o3yUaRdcdySbtBzMmySdBCLTdGt9oD6HE16MuVnZQtmbbVNKvbVCgtyAPLVZAXfwbbyNuBfMpcMFHFHZcXjARMN",
  "key9": "63tWbfYRkfBSXz7pjyKR6ecRWVoGo483KfxMuJCKjeqJe55y1NrU9vWW6X36rdgqSoo8ELSDVFaxkWybR9t93oUy",
  "key10": "5CG2hBxWntSZTEjNAthaUXvcii8cy4ZEy418SnNSwsnUFMgyXfwqvm6R5DA8zVqz8Pum1fdZx1ofxBzPRnSm8qh3",
  "key11": "5CTSAMBW12DVcWcPTsgZpcvQCTYuL74NDUC2Dc56DCKjncCZ9aam1tZ2xGEGcDPYb9xeTiWWGdxrYbGEJmghmfss",
  "key12": "3mfYHNRYNqyyRtp1fvtZKqbhDd8Y7erghxbHWcBidBe52oapbWd5vLddCfXW1P2YoZGAibqfXTpWjBDc5HxYmUMh",
  "key13": "5nnNmduuvaUydyjDfr8JUwjMdLRwjsa54ZybsVyhkTZ4i8G1tUtPvgX2dXgnEVvPWEFBb56GjBjReeQ9LqqCmNA5",
  "key14": "5B5VsHJZHP6RYTbRfv8SNvWbddYvpBfq7aW3HgcPeH8FChqtFWomYEdkzBmpdmZDzZ49187N9gjV9DZYs9cVzHmh",
  "key15": "5xNVRiYdFPZgnwcAQ6LF5EWuzffcusQ9nCEfq3se8DX7tHBq549NQ7tPr1zvvzv5j7C5mtJBDxDVsNdpcJQDdtMm",
  "key16": "2SnJVcpEGJt9LMJPJ5Dmam8rWprWb62pfBa8HPirVw9GzpW4srewccaCS2UKTiaAjEhu4912FoLAxn35GR6kunKo",
  "key17": "48kKUkk4viqTBJbMjTYjgLxQ1wD1x2En3dY1beE7RVbwrb5KrGbeck9e4een4Dj9AbVkschK8mkMtx68L9YwG7mA",
  "key18": "Dft7wdfxmUrX34NKegjMhuHH1dBY8eh7Aou4urbkyah7iXE9VULyY8UaZvqcFX3C6k6R7vgJGD67pW2KqxAuWJY",
  "key19": "2q46StFQyuGcfqMo9hnyDszeugJGLSyJtYnjb8FAUecNtMxBfD4gL5M4MNeJUVf3qWuyCmqWwtiie6KwmJumyPLo",
  "key20": "3UaC5aC2aaN85Eozqs7X3UEuNXw8oGQ3KiEeacswrCK1aVhWcEs8XL1aMWEDGaNMkm5ELDYcUckEdGzVcMcgSS1F",
  "key21": "5CLPYbj7wCW5RY3MB1QtVEvbJ6shu2NBgbGgDM9yWLcuqdxTnzr34Pbz9kwhhBQUoq85ZYN2ggde1KZtQ4ghV9EB",
  "key22": "3iH1m8cFKh4HnUejF1buuXrAXVJRgf8UcsPViwHrtnBzRNy1gznHfvQkQW51aLqXeGyaaeD9vcEaHQhiwtCnbJAE",
  "key23": "jZjZerRrSoR2XD7fahL61gnAS5gF1L5r1yhsPXdX1nyUFiNfpp4b8zwwuv2iGAMYqi3YecEg7RTiFXHFGCnBP5X",
  "key24": "Ssrf5LY9oUjo9hDaotEFjrLddMQH1kr5vcV5AA2Fkf2rEMmi1oWHbaJDMMx4PVxpXCRTFbbYQNM1pfs8GuCP3Jb",
  "key25": "2f3XGbkrY3s4stnZMPpowY2MnnAYM8Nh4eypgzLEd8wGMPqYMRpPtVbxrhjf4Uj8NzYGmgMmqbzW5vWvLDB9Wyvz",
  "key26": "5dG53GWwEDDJvMajgJKTxeEkVj1Brwh2o9F9Szu9bHJjuJ6ZHiS9r5rEh9VEAbHMXxX3iSKyKjjAjvW5Fwqezf4G"
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
