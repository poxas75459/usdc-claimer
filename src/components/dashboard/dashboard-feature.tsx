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
    "ayfx3gfpYWLoSfDYA5HQsGyKcqAusAPYBdsgBDoAkxUowXanxopgtFXqeoVeL5qNPzZ4r2DZ1Ew5xHkudJ7LxB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rw3x26Q8z1amvsVfV4uvozXgSwxS8nqMDxmhQnYmKnpvznehRRFuQbjRUyfapwQUPzYEzeJF2v7bCGJxGXdehvD",
  "key1": "VS5cyo62ZEd96vKZgj5wQ93DuTMvqQRA5cYv3GZR3q2si7Ap7vuRDhuRwNE9E9Qs317TihP94f9iCQjoSoC38iq",
  "key2": "54te4EH5k3yieN2bCX4Mtnpo5CFWpqP3P3Ruj78qBaMLiug3oD4BxMFV28n6zJJdeZqzv72oGyd4uKgzujyteyHo",
  "key3": "4knRpkojXJxr2UyrqgfV7XWYgatn7aZrYQdAU37XzjeypLVXeYfBxjcdB6LRU3Tuxmzgiu56K5in6ebkX9Dp3Dmn",
  "key4": "3cnaod2qosmEdvcLXQ44k4QX7939jppgGK52Pb7yCJkDpHFasnUtMJ6n289E6SRXWmRWzHERZPCyLF5ABHxqSv1F",
  "key5": "3ML5qDwy9DpF15meUJYuUC8SMDJAeJUNWM3DcX8esSDJ6DFGBEfJmvhth8KzHtKUCSs2pAEQJ3qJDM7pyJHHjHoc",
  "key6": "4LpaP7zrjfMbZ4i4VrkRbHgrdoUpyYqW5ToREmjQpUmAVA4VceDhzYB5W7avxzNP592DuDTaRJsf3rX2R6rdNRcG",
  "key7": "5WGmcgDtg9hCAHtHPo6FoKUrrCXAUgcntC8uz9M3xe4DHZFjA8PYKQQr16mJnQPrC7Htf6RLhXH8aGKsUEep4PjG",
  "key8": "4kgrhi6e7nwivwGgxjBRvuunSZLejf6smy8nC3c4CoUbA1Aokf8gRCNNudErrecocwtDDgZ2jUo9wCzmX9FsEy9c",
  "key9": "62j78x3yhCVGtCCv7geZN9vYB9yPyWyizpRVhu2ADL171bmvGojsFanbfNNn7Ht6Mu8KMfRrhHmp3YQCKPrCUfoq",
  "key10": "5KHueee2nTvhisDnsHNe5YHYw2TGLafoMCse1NMbMxH5JihbjbrKHdpKWYdn5gFabutF7kashKPLri7VRz7AscJK",
  "key11": "5xhzEEn6goQMZRypY7Z9tbFUBni16HCm9ES3Ug5S6zGt5kVBjcNgv8CF27DHS5n594bGEwiesKXrQav3386uKrta",
  "key12": "55Pya8eM8syNngKjZYsBQ5kokPWFAYR7jWrGQpQS6QKZeaite2mUVy6pdDHsGjryrqC3YbMsw7NntzjY9HRvBdjW",
  "key13": "4gVvSoiVZT5kKxhY1tRNnYybindRhGtvENBjmLDpVkhRnhzS8vQQCxXxqATUT2r5F9MQT3mYJbHpAEEzDyPgfqQr",
  "key14": "2Tx7b3xTCkrPt7r5czEkTpfNgmMLnmCQCQTbJwbTvd5UfGPQ5tEa3ekuDvSFfhVHC3UW9Jx5VQgeeguRVr1pZxFQ",
  "key15": "3rcMNdyc5LwiZyNzwBWtKuSrc9wcbEquQ111D9Bo3xHpEADWw57B5cmDZuzLV9SsPpPMUzZ9cDYaQTFnnn4vnrz9",
  "key16": "2yRzbvqvrRgP4Jm8YbDUzo7fATL4sE6FQN26MnrC96YWteDYYWnBf5T6MvKsKFjxg3kGLoYUV6ZokQzgrLKrtrMZ",
  "key17": "27C2sZSiZRQPf2v2E4vWkAteujNNSveNKPe7wdNN2hvHYjrRErcWgMHgaawidfUCMHbUBovLba9WkRNfJBsDKNRx",
  "key18": "2V7HfiqZBz8ncPXq5ESu5hRosSSUMPQYqDMyhBav2BDJKdCuFneoPNKwtGnWRJga1JN3BpSdCk2AhzUW6iqWgQex",
  "key19": "54HsBx4JJC6oi8tjBpZY4n2Qw2hgkUpzPkY2NtpBxKb6xbxqe8afZYvaCq5xJ4j4jhhexsFsAZjLqqf9S5TEysy",
  "key20": "4dWYvBiwpcppxCGAXSt56wWf23rQPZWBcE6Pdn1PJYxjG2mmRm3pfVGqBYefvKRuse3EjoHtzxmXVpYr9fN64HXX",
  "key21": "65koYqBHdSqebnkVUNm5JX4HcWt1oBqmgeYEYJcUnNfzkthQ641kPgdbpVJE7EWhKxfAFXnp58WajnF49svPWrgu",
  "key22": "sHdXkwMauWWJBKMDuXP13iNbsPLPqLbdPTAqWYVxnW9t18wA98XyM2AfjpkLyWPWB2haDhc1Cxr9NmxiRGwGpEm",
  "key23": "aMozRSsFYUJwXrGrfo6gf31vXxnvZ1X3JBpxKmfvYoStdLbPoQRjx3shVKnmM3Hz6uJg3XekmAqscr5coQg7Aij",
  "key24": "NnA8DScNtKPX8GZHgJKzcVidWk3paB1SfPsqvk5yZEn75NAcKmGjT6Jne47LtcgwmW72qMkXeukucJEnwoDxd9S",
  "key25": "5R6JrBxcZ8mCm2YCiUpXdSCp9TEy6K6VC7AncKFpaokLYbG1wsiSJPZfy6nGLpCSuGZPS2GcBStgq9tYY6mfdcbh",
  "key26": "3M8aSZezfaY35gaLfhMhVTteSKALxmxAjbUkKPzTDPeaBJZEDToGpeVNYP3Y33fgqNTH9TvDUj1HZzVNRVDCrGR1",
  "key27": "33Ti3xVq5SNRf8TB9sGy2UZoZrHP7tnCv2EgYkR2vv22N74zUVTohVHPaSLb1DcR7wDr4EawJbMmjqNsjHzGzh68",
  "key28": "6v9ZKxy2QUMo7kjBAsfEDY9d6KkpiGPaT74yuot9BtZg4uCJHsvbSSrUCp4Er2w5xdMNEd1RAuuHcAwXprgYYin",
  "key29": "4spq2xUEuEcY6RysBmNHqMeKzQEQexgn7eBTvSh4RBEDMYFguYpeEsdHEFZ4Djy9AtdQHPekRH9hv1qZTockAN7c",
  "key30": "5fV5PzCkWptFtcDfvcphXQVoHEaoN8gSivCT1ra7Ki5STwPvVrdsHka3ghEKaD2YKBStJRoYwJohCa7h2wdzE9i7",
  "key31": "3BCuAt5b1wf4UaEZJR3ytFLTPtw25rBfDP8BJZ58sd65QoYXMSxPiEwPZMxNsEDyF1mGsfQd5qi8VjCwKB2zCEnn",
  "key32": "3MadQSr7HN2vQFGaZXTpiHZFmXsXmRUcCMSKaTBVE2iYYNrfZfWiYVqXkQ81W45kcmuReubohmj6jDdixxmJ7KQJ",
  "key33": "52TDn8yCjRZxLqjLt4yCd5RThgrN1RBNCZP8kvbYcGksnHknGGBZDvBzUUshxBwWdBDZHBN1RRxHdQqUW4s9H91C",
  "key34": "3LqNHHpu5iwFdTWA3rGdrS9XnfJQkE2BGPEVSdsaeYB5XVxaYf88vbnZgiktqn1dT3V226vaqzbJvnbEWs9e9R71",
  "key35": "4tg1ww5SwM5kV5QdD9F51wsZ3EMgQhggGKgGo9F9ZbjTzSDgBm1KPxF3EXjWZp5Tsd2rXaABCrgWH4FJPKmSKFLc",
  "key36": "3wgnWtVme1FpBkUumgJgEo3DNZAbf2xgjAeDx9YNaMuh9dyM2qgd4Kpy9EV7F1ze3HA91hdQWT3xEGFk4eLLRXiw",
  "key37": "2tmy1mfavWZpr72g88BzqehrDkBHzxW7HuLA72HrN7Y5nbGn84mqqRJW3sCBjQza8xEo2PLAQRtM14uDBJ9ANiXu"
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
