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
    "53jQk2uJq4F3ySqHFfJPxDx9nzt9wxSLANzF2S25tEveBMZUwK4qe6pwnTsSKMbiBJbzmTtv7hXxqbo7KSu9z2mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9qAb2q9gM3UCBWkvBZ7857vwkss2dB6CzooazKfah5aMvuBXgKNqRu8GnDAdcMZ9GUecAco6ALSnciQbmDRsYy",
  "key1": "5KXi8hVDXexN348GV7DFq36ehwfzTq7Pk9pdbX4ympyMieUi7HVB7xsUSpYrLVPNiYZH7Sq9EMjoULCbYMfSzVWy",
  "key2": "3moWfvdWj34xX13b8wg7yY6PV259aNeV1DqQWe97jJw5CeqT7NEedgG5YJbDXeg39nk1Vkm3G5sJGrPrmenzPS5p",
  "key3": "31FU6cm9hQsx31aVuGhGm12tm8D38b8qGvdgYkQuwiTwdFDY9iB9Dv3f2ZA8RFroxNzRqdtDJG9TbijnFUa3BZbz",
  "key4": "3BxL1Ljro3FcbhtjpUxAkPAMacy6wXuDqCZU5MdFQGgtDokTdBykzduFWBPiWGFFqvBbUMFsvBxXDHoo6c5KccTC",
  "key5": "ZeaErKzxnuixMar5rzsCXwkgTDkRJQi8TVuBkcpAcMXuCQQ6GDJ3UyyHfsab4ajpX2b62gwYqKt2ZYSWrBJD2z1",
  "key6": "4rTNqb9gXn3wcRQoT11WnGBs3LpcFGTWnLbQBwTRvQDsayxwv5Yj6vu8jVASJrqeA6xidDkLzG46zowHQowWBEmN",
  "key7": "31k7on6KnZ91pteFQySpHgvvxZMf1hin15b6dm7NCiSY9nR9sRQ3SugBifMiYago1VpMbm5JCYvSuM9bd9MsiXS2",
  "key8": "2v4uoRz9WXyJPUwygAbnJZqzyuGkEZv2gLg4nfP7qdiiqqcJvjeAqkudzxchvAcFwSf3nthm21wZrqd7EesbP829",
  "key9": "4PHxv5akSzxRYTbk24bAUML7VRWpZQJcii4afaXABEm1V2Mb8x6ruSnyed4GQSznviLpN8AYFwsLF9UpMtuyxvk2",
  "key10": "57wxjtShU1Fxd3CwtRwncn9RoipVrH4EVt4PSPAV4XfL4DPaJoJ5VyyH9M14MQnVXgdnNmicRUuyfKVCQkzNTUzt",
  "key11": "3iNd7GDdd3AxsMf7jmtWiraQ6h9amYfCQGhiL6gdHT3KcnsJrpSckECMt9iZCpdpKJLKS8rX56DSECRtgnT8tmHn",
  "key12": "3gf6E8GCUvAgb7EnYXKZVMzqrXV4SFRxRnN52dAWPaqSxbMXXRCPd5JBkrd96Dy3L1mw7JquN1Wj6mpQdNV4pZ6f",
  "key13": "5N8ugU5kaHbQzcWPcP3vqV2TLwgRgnJemn9VjZucQs5o8epE6rnPgKcJPuxBKz5RESbMKyvTp8nWmJkNAYMvcSug",
  "key14": "2XUcsriqrJDPWVMthqxWShJL1Yok2bjZuhwSB1AmpXz9h6m3YDi56yH9KoWVhLgQYbrkQ3HbHYXSPwtZ2mMRXN1q",
  "key15": "5eJkVGDyUqY3LswrESyx923t4HMLetJQgNTrLA8fziQfhQDP8CEsSScLxhW9M3iXtTFQ73ocdnDFbq3ochGsgSjx",
  "key16": "3i9GQVPajRfTZhhXQZncPSSerjdocmpxsP7PTsxnh4bPbnYnCYh7TVULxEmMApasAzPi3Ax3QExG5asEsnmcKKxa",
  "key17": "4JxexShte44eAtVi2FSb3uA73919aHVw3xuewf9JQwqB4KE1jqL5n252DpPotC2QPbRiNRNXbyPXzJsSUsnKFQ7p",
  "key18": "4yPnoVsKwhfF5np9fxwvxLmCCwwP3nyky4y4nHyXm7ChGmw2v91EPqmpdktD8RmqoXbCEaXgR8KRR5aatvbzBxyR",
  "key19": "MwdTfyBxZe3dEVPYSkNvVf8R8rPikTy5DNKBfBDNWhRhqw9s9HueMbzqerWkXFdP1G6D6K9V3cbDrYqnvCgwzMG",
  "key20": "5zo2j4o8XRXNr27f7GUcQLh4hCS9iFY8sdc6pL7LhhW5Q8hZgAXu3ene4yWbkdKuoDsErDHvUgNgRVMBFVBdP9aR",
  "key21": "4ZHjypERxowvATMQBbHovx8jUwsPKYsN1NP5mhFwSgDM43b2HtLfKit5tFo2joikgqFS1rLSk97tDMVzeuBefYby",
  "key22": "SrR3B6UK6tFV6oiFq4aD4qh5xzN5nx1M51CHbEZyowpF7gjKUjQ2JwARQvRKGXjx4uFb6Zf3CHmcHFCSdPqeHAW",
  "key23": "3nkNn8xY3icazPwQpPmDU3SLBkSARShrBvWQ8wYbxe6MPSG6a4jyjEsUZLsbB7xiDVppv3kEmVP3prP8LcvVSfTA",
  "key24": "YR8DBMH9AoQ6oYBse4Y15oCdMvXs6DJQYF6AQ617sA7Qg5auavEzimRPFNL56Yer34oUteXhaeKjtfYiw171QDa",
  "key25": "5gZ2PXe9WoYkqbXoYBsyZZarNe7SyeNcBFYoVhvWArUkfjWb1NrxBk5fNjDMnnTG8ZzfPLyYq2etgiuSX3TcbJgL",
  "key26": "4NAuvhYrVbEPguqm2auLEbYXFjAC1oFy8N6ed9NCoDCiq6QozKDy7PGqN8TYDDDjZ11cZYD7DxAiXevVuhhVuQgm",
  "key27": "2zrXFKryu6EDH3DwiR2AgoHJFL8XroWjG4H5M4xXUzGbawjK5fyrLp4xrEukXDb6KbNiNPvpxNzdJJYr43uFvyLs",
  "key28": "2bVnqE4RnwkR2VmPbbzhdSZDR21XRungMAf2vBEQb26HC6kyTx6rHN2e5Y9qNt2nhmMsguSwM4EkA8HdsEWK85g8",
  "key29": "n5xJhVC3c5UFdTZ4zZr3VKFPpyoeLs6Kb6Q27LA2Ht1FfRWVHtm5Qwit9iz66TY9HGy5Q4htdcFycrWqzXe8PC8",
  "key30": "4Gjy8LHPSHNA6H46jMB2ABRCtATuX68fELyV1eL6J5p4SQ6JecXefvBxvLQcpNyHHVjqN64cCZUo2LTDiW58krzy",
  "key31": "z8iEhptPxvKu7GXEk8wWNMUb2718RTndkouwLZJwkrMNzJWbXGuQTgR2F1LNF8uqnEgYriuF8gRXLpnoBT22yxb"
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
