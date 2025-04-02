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
    "1S4R9EVu2a7Sm6hBqWZCDDx1eLjN75gxvoeHPxH4CjW9iEspawSfwLrhW14uGz3cV5A59Pi9JnX2dnRkiTYANG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcKrbqc5WHJ8Q1i3V4rmVj5BinvmtCBGV8gdGNo7euEJZWxS63J1eRU65bEh7AWq7YXEWbTUNzKWovzTGCcHW5a",
  "key1": "2uTeb9g7ZneeNjkvByw73omvFNri9MqfkH7qje5VxciS5z5dAE8NLcaLgdeDxVVLSWbuHrsMczhxsF3CUjEvVU9W",
  "key2": "2KhNJTuFfTHZbof7XJYDtCSMimdkfWGhn6ESHQDf55ELC12u7vmGJb87bPmxxFgkzWJN7MQEVNqjTbGy4WP42DKn",
  "key3": "P3eFWHLimoeBKUSNX5MMRQ6X3gggnFws6G61tJksxb4E4wxJk4viF231rNFPH1QDxqEk6EzSFgGwCgNYSD2UkPw",
  "key4": "5xysbeE56Ah96Fv6r8mFudQzxZUsR4kacynJZbya4hXAxzZtMr5bSeYKdRwvCjNboiuwNFm66jG1S6TEuvEx66cY",
  "key5": "65B3aEzgvPNAw5ep91Bh3fbfkJbmdir2GPDGNfivFhwiYm2Qi8aatDZznkTVoUDBapfZhpTszjuMkeAhdoqx9NXo",
  "key6": "Xc7ML2Y3d6UbZQzo6gZhhaH9f7tb4XLKRCY3dSo4q57n2vN6MKf1izCykjtPuSVMinNkwwKKmgaKsfciF17tzGH",
  "key7": "5QRt9qxWT5rgYPhR2GzinWEuHVHDqcCx82Vr3LAGLtwo9r6tHeMptiwkVuxPVTaTLmqsPVSRJcbfxTWYBetTMyn1",
  "key8": "44SG1SZcZzUy6htAktPUZkNELTEQ1ckM53vq2ez3tgHpoZcRs1vLkL441PuDPYzqbRUkWPacsPokEEPu2JrkXAVe",
  "key9": "579SWJ3AXNLd2RT75dsyV42rvbYiyDZXgw1WqEp9oWRbRHg8fydyNH8GFtmzAoyeBUFjFS9jCNf55Jxb81gkSpBk",
  "key10": "3YrVSRMZyehYYNTVXWQ6csti9qVcFaZPnboJ2L1JzSNNqJ2gMBXxffwTCRNrfe7yKUhzyQo1nUeCPvYtF6btRJkt",
  "key11": "4CYLtKqzgdWoAjwMkuuMVzJBWV8txNBiT61xR9TUeZiykZTzg7uY6wp4f8xcchScsBppysJ7k2YnvJT5V669rMAi",
  "key12": "32ZrZ9R3KmUbmGxAHZTYBLz3VBhTfBje1T4XYR7Fb2x3Zuu7TSFVuBLHUAsgahx2ZQS92HAYi4KKwHd6rnAgUE4g",
  "key13": "63JragHZNxaSezacqbbVHHRA9cwBCYyAx1hcYGdgvh282JF5YNc3v8MwBpFb4y9oSeM6J1ug5mivNkDTzDpGf49m",
  "key14": "9d3kiXvA5NTe763pf7vQbvkaXdubDmKTKU5z1FCkSj4SVfNN9n5jnQWaPozsN6Q3cR3npQDRJNeKZpxSgrJvprD",
  "key15": "3W7Z4qnFmUS7brLRTtE4wCvqJzw5kLVFKvcNuTD1ys2KgUXWrMPibRRzgJbwCU76DSeERCaZNUwikbNAaWgNRAff",
  "key16": "46hsxQdT2R2fZq9jcfdVzdVXWXcic81sic5PfmJ5jBaweqyqesWKJE7sEPyRXgz7jx4PijQojS1MwMxevnt7osyC",
  "key17": "65B6V5rU5suWYdFAargt4uAdJQ6rWu5szadXCm9bcRwcvdBpuituqtVwuTctKDb3WzwuNRkPiQscJGQUmtoJCUWv",
  "key18": "FxoVz4Ev7BzDaxLgp9NgBT2MQNtaVazpiFnKo6gguWqzdpHP2GVtV1udZbZSxpf49fKGktMbrhFzJr3yufognCN",
  "key19": "KfSQyjpn7qkpjp8tVB475x2xkL58FR5pwf2A4v2XnL1DAVUUByydTYWRtAgc48sWxLtLNpHPv2NafcsRXLhtJdu",
  "key20": "3i9AGwbN6xn6kFxaAJPHbQmgATwSTC4vBJkLSqFGgdAywbAxnUxxVABDckpS3DnbNKN7wRPqLs4u5g5mRnGWE1Fy",
  "key21": "3Coa1CpCMpvJXchPJRhnTUC3AvUmG5qEibvGykGCf7PktGCrsPDTN5K4SFcm8pT8PYjo9DhqPqo4Dpbrg9G6ToyA",
  "key22": "31A4pUE3L9AkZ1gty9MkcNEu3hye5EGRQGEA45WwH8Kgzb2eZjZWwqpZzM396kv8z2rwSABWkSik4uPhD7GPZp4h",
  "key23": "83LRmeU8pC3xrhMLsQiJiuBMdn4TTFCWXFTahpx5EznUbRMaxSCqsaCiatoo4penDFzMrTLfxoAwEpNH6E9peMF",
  "key24": "4rz9Es7hvXNg7C9sNW9GLRkHEv4qkAUJEt3BasyqnGuGsx8iPWDHziNWm5mbmjhJuUStiQtBNSCoBZjJ8Z2agzEr",
  "key25": "Gwgc6DK6JDSzurm6hLBzSmcjmDagFLWDRm4vfSsVQaV7AphfwSmEsGvoMQCVXauVSMfhQ8JjHMbi7gn3DWFGb71",
  "key26": "673zmubm6bMmPzcBDLUTT7ZrFkBMyq7W1RXNgRKkBNRyg98g2kJHLPHWWrFJq5wehenxw5H5iK6RCZHfxWQq3rf5",
  "key27": "4vtYZYUEH126M7Rjmq5dB2GGDH7NhuVcAtFbSidqKnxLPyDsUeJSg3QkFJJYP56BgjdKRZvMPx5Ra8jMRRLhbcUK",
  "key28": "4op65NJZevkuxzuf9MkbnGphMFz6Goo2JpgpF7D5QXvuQ3BHGhgV51CkkgcQgPqRgzKGKDiuRdX8yLgx7DpPiiV5",
  "key29": "4uV2CTNRMiqikhUgSADYPhARNCKafZ8s32KEhCyLpJtZumUZuKtWYe53EuY1qTo4SwwUxwVPYjE98ST1tQm9Q4Yf",
  "key30": "5Vb2acdxKdf1sCX8teWj4AUkg1ig1nENWvdqmv91Ds9diWQ6kTLKfFcQJ1tnT2bJJGNASKWACkZoCZvRfoPM3vk4",
  "key31": "2BCK15Z2TFNiPr3LKikgbtGrL51a6XLTKQeGzgwqVBB8chhrjWgSGrTFZo6HzprbznDPhkYdoaky8HLACfbDRV4b"
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
