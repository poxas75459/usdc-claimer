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
    "4qdzPYQY9X7X83XakCxdFkfz9hXbnU6XbdCwswhLbCyEL2Rd3CFZpzSEcim1SrEkJ3DmFCGUoARMrEfGnHVeW4cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rtM4RAQprA9UHw9vWjrkK8ot2gNUoB1554TvQSBZbnXgbtChBUjLX9mDoDbkPgw7oZEL9qB7FhCdJoZdrWGtLgo",
  "key1": "22H25HhHznKsatA5q83QPx9CbqRpenrPbJVFCLw7vWPPMzJYs5nVx4ASYWJ16CPh7kmziQh5kukdtzdA4oSJXCHv",
  "key2": "3CG4vsTN1wJRTd9SC49bNoqmnvcDqEGk5hbiSvafJYBXVSGcynbJPCJG6YZ6U27SMv67VKh7Vzhfv11L9M4iGPU4",
  "key3": "2Eb2AVfAik4MGQKu18iLscahRSVYnMD5oRzsYRSsqwtdC8Ytif8WQUe4hoUFiiEChz9HNgUnnzCEw5GeVadPY9HA",
  "key4": "3rVqwskNkDbAEzVaCzD8qHeo3TEPhrd3sEHMCWok5wGRy2ggiZdMf1dfNyvF8gkQRMMWTJfpUhKkmMubFmQev31G",
  "key5": "XTNUkR7zXDcKdXvL8GJQJSC9kGm6MFJBNiUaEwb463WAhuo29DXuguDeAjhokZDybBjauqvxXQdVsrWLv84wQWr",
  "key6": "3aeUFjapuoH5PjwFCmHpNt6hFVHjh4hV82MnfEzSvuy8LoajwkHJEMA9wNmP9rFieVpUWk8pHBrTyDfB8mv56oYd",
  "key7": "3S2s5rDzhJU7cPotz1sffpNqEbyrmZCrxwCP3qdvC7tfDgHcuHCUcN5tVJzs3PdradKsqr3YG7cSxydHAV2vjWfx",
  "key8": "4FbKcRSTyHp16MqvCrabWay2bKDuJRsXYKJpcY4F6AT4TjLzDGvCCwEu9Q2CkJRgDdByZErN6Cd3f7EqTnRDueRp",
  "key9": "hsQrYPGpryCSUwLJRiRWQQyRW3fzP77yv2AmoJQu7TSW1FacwH6weCca3FJQLZ9dFQZVxkWhzzeFez12Jwioc1J",
  "key10": "2tcLYapgtARsWdrMhc1mEr7QcgdBFrWLUqKW4YhtFqkaxVbAr17YiYaPr8fzo2hktvZ1TMuKw1pxgz8r3KkwXipv",
  "key11": "3J1JxT6bzjMpBJh85hzNZv4k2Nn7wMuAMWz58VS58qkHNANBeaw9TBfPHXBeqtVtb4tedCRStEVFTmMrjNLnoMaD",
  "key12": "5C71Q7gRzqEPYziCBFeYufbvq2LkRHagjWMaaGrJGpNyfQcUKtWtQhRVjkwxsKU4sM2dxWjRBM6CtCgEYMNkgYtQ",
  "key13": "zdTuJZ5cW3bfyig9e5WrspxTbBE3XNR7whAWFbpfjN4ur9TRbuAuAMT1dLxPrCQXhrsVhKH1MtUhHBYkbVvk7Vh",
  "key14": "3m9AjZFcNRJtcmXXSS4T8cbBn98TMLop5BnevG4nMQKQ8GJcDbNFe6NdB4v3SDePQsw48ujspSYgkixDaedo4r5E",
  "key15": "32B95cQAuQm4XeBFAgTMYN3rw1vc36wkYCT2Rmr393p2gTUaSnujp6ALcx3GEmF7nkewUxCCndodERZTipWutTn2",
  "key16": "4QfAPjug4SK1FytCF2ew6N2VCpT9NarThRvXHLzfy2fwPvwMs162DzU5BsCNeiqkBxKGuf9QdPEVWbCrioQvB4mJ",
  "key17": "55eJvnM8fFufdrsWA2E2GuTg7bY1HGoS4BSrGcvcwL7xJG3ukWN9SbCyxJUWKXqjJL1VgLXzTDtChpAHdJD3mLXQ",
  "key18": "4L89LinGo8BqHWeryhzBWe2QA3ywpDYw6pM99h4Q5StMFnhoFXa9nUqkYhsWWsFSPQwuKP7QwaL8jTp2iac2w729",
  "key19": "2TL87TpmBf56bT4TPyw458knthFVpHfJvuyACg2eV2KAv8LJsaGrzrqrWBBHkUPZHKobeY9BrdodKFTVn3ZHJqEG",
  "key20": "2hCJtUD2CRgSDuvwMJYjvUf8N7XB973BgGJeZ1AuhBhYTTta1mCPgQuynxDtctZBN1bpuRpgopb39qWAYVPzEWdC",
  "key21": "4htKtCixp1snJxad6EXHP9jXpJivhQkiswv8tFYU8RogmpSXwByG5mbL5TTPvsZjHjYajBzitjUoQgZ1mpYfjLRv",
  "key22": "315ekFVspBX3QMo97n2Ly1FzpXdq5ektMJ99aMgAEF94bfNyHUHFMWn71HaX5cHxWqfU5gbAYRGqkp4oiXrdABAt",
  "key23": "2BDPHFk28yNmjj27C73nYRbd88EZDERTqG33crr1mZdUP6jo6jDpRj3EWF4b5Rt1mizCLLfGJdGn2S4nUhwi1rZ9",
  "key24": "4frm3yCBudzW398vPsmmT1fmMUa87HbByq2sV9CNqqLa4brMhovLwxhucGU4wFqcBLNA4F5zjgD6KZ7mBxxqr9tN",
  "key25": "4HXizw9Fv5da1d2MFszcbTTN4guYmVvbfggiYzzswJDRrXDrohCdkLUi4mmT6Ve4pSkaEmgZEzVdM3H2fDiQFz8Y",
  "key26": "3uEppfW2TS8AgdgXjz2rWXsAgtAKUB6CUZvGUti6b5ZJQ9LzhjBjwXWCvToUE67TALPPRwMm67wKg8qEL4F6GuHn",
  "key27": "51RGaWByxejijofHB75NkAkR1i22K9GLDUcEHLvstfP8Ae3tMyJivN8sJ6NwRo6F9qdLzGzqRYzAipvVzjK7s1gx",
  "key28": "iRZKkTQuhY1bJD3NbD5KPjS7P1tPrcBuTgtsUwAkFAAzNKoSrXCPJWh3xRmCbkLAxNU7HXsaCQ7j1HzpRWJdPeR",
  "key29": "5AnKf8n5xRjKxG1N62K9xMoLdodJ5zH19hvmCxwmRTc6cX1jsLCHEmeVmTbdUkvYUrLfoYhSkUvCXJdHcRMyp84v",
  "key30": "2UU78p7f9sBPLCLvoPQLbW6FhiWR3qonarXAKkfwB5NYcVbyQHXHBwpuHSDrX6ZhGVKDhHP3uGHdoPd6wBZuTpuz",
  "key31": "XVzcorSKAi1ewAVbgu8PhqPk8F4Pa3yJSM2sp2Gt9FApM3v4T8VKb8FMBkNCbJdAt7F65ry9pJcDk56CHmHzfW1",
  "key32": "4CsqoXxz7fvYJhW8DBYPLwW5gDZtJvbzhqdfMuv5z4NWK36TAjKyhcn6XpGX32xUojrBubnm9q9w3F2eFbfbNUsW",
  "key33": "49397z6UbpiXy6pTpT3Swzzzh3tNB8rt9K6jhafnbxdimQM7ppE1YVfz6Q7FaJHTvoMJAEYdsZgEPCM5dG3Jm6Zy",
  "key34": "63BnQm6ywZ1jKy3dMopat1FM8eA5R1Zbfq2FpZ3XmN6hT9vWkEun2uj582DErdRfm7ZiTRNbY1BSEP62B2SRRTkq",
  "key35": "21azYeEKhhfjqphemQVUoPfgMtUWdbFdpPwoKk19HvWyXRkTynah4zmbT5jhYxAjV199mk6JoWZqBMFcDxJXq5Ms",
  "key36": "2dWsZc2Hwdi8fA8Z4yPxBxTZou39SiR4RAVBSGtydVyZxVh2w7MKEFmY3ZSxMxdh8crLs3RB4XdLSPxfdWutorpB",
  "key37": "5GfHKX2WBoRc9Bc412qVCDuEgm4LzsnkrTP9TVmf3AJj2y7hs6848EtNwJwPqzjvX5n3p4akebqQAU7J2AnmQyD5",
  "key38": "4xssc2heUSNBvPjpgcu6wrenNJfFEZSRSiYVsDdwGBReFe17B8quoZ2vHoUFiW3HKKgeWNbn7sbatkxsuDkwF6HB",
  "key39": "2F8Y3Su39LkrfT2r1WJ87hVy8kSggNXuxse34jWzSP7nA8KccL5K5Zo7iqJFhUuTSD5pUWntJ6haw7yXdzKyJQEx"
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
