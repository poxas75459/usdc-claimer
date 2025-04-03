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
    "59JM6zLFc7Kk9KRkcgTPVQqtDytovDFAPRE8c1WwTUNE17gzUUGEDpWcNyL6oncQzxky8MhLuDg3qSrhk3A8aqXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35zohaeN5p6HU5tMv3qQsWuy1spxEqtnCun3T91WJ3ZGByTDV1FFaSkWCKZgdGrhJsXVnPwp7FJBgqi2yFyY6W63",
  "key1": "4rjvzkKiceLmMkW9v4VfzLQnbrbj4oVLzGtALmSTKqCiD2Aoeykr2FYaxesmFhynpshb88V8HfGyhas8CTd63F6A",
  "key2": "HYSSDdasz5jLw8JZ3z8GGsZ1ETRLdgxLo33oSJwVCTu7xg1JjGcPznmbAmtqh83EvKhN27eLLEAeA98BQC1pQq5",
  "key3": "KEbak4mhfcUiBgaZQEDydqxiUD3SJHKjVQPY1TK1kptXX2SE8pL4E4xVh8VwopMmzynL5tjWCZ3oKsFsx1DK2JR",
  "key4": "59oQ32Ap8E92DXfbDMW3aS4h5cZasJuggpAKUqvUSKLtth49gkfPKia1G3trDTCvwKB4yThtzhwAPYQF9fGGFfTC",
  "key5": "61LSzT64UyLEkAj1A6xXBNFz2cTKrmU2PfYCTfDrsWhtL555KpfLv4fLMzjtwiT7HqPrqJhPn2xPLkQVorhj8i5q",
  "key6": "4sTczxQrJ4cxyGr2yhckWNfsk14kNkYeQnWnovngB3XUNpnLTnMgnWebrgmoVbDhiAP58gEVRj6wgVR9u4zxfkGm",
  "key7": "4tpEPAnZntAKRYPWUD6kABG1TCeaKn2m8Q4H5w1FnJZ1Dxwci1Ha48AHVfV8cQCQYxZDQeMaETLTjpkJVrN5D8vg",
  "key8": "3gfgZeeJc5BckW4USnpsgxjM9wveSC2GceV7AX4G4SUxqqPeZzhSA8dQcuEUZbiLZ73oSz6ogPBRbEZ3Af2rYbdM",
  "key9": "5ehQrHDLpbDfoMuD2vLX2fK5SaGLdearc5Hf2vbyfVq8Fx41bEwv2tmRkvKrLgYkNfKbYvH2ht6A8YDSsEJRbw61",
  "key10": "67EQJWJtGmCykeCPXS4Xi6c23a52q3usvebPb63NB89D4ARYXN5yAHryEeKBwc9eCSWkGMU7218rAbekVChmDrz5",
  "key11": "3W5uQiZvLtSkbcADJBV6ZVg6UeQXWdtJ42aBVXaXJGvPiw7rpDjUFHxQqDHLk8iDfqZXwdVkyik3yRd69TE4e8Cv",
  "key12": "2W8GiQDAoQPbrmq8jQ9bLqfsMRhqiku2Utq8e9uQfw5UTSJhB1GBMU9sZ1SUXtWErUzLAUjH2BzxQMDwABypPYvx",
  "key13": "32KtYKKTyQymv55iciEXj3mA7i1dzyKhrBERb1AKkbbjWqZrYk2PGUfYHRMv38jMJ3TK4NygsLqg72GFMa7QkLvA",
  "key14": "5Q7pemZtmYYJkcwpE8qeGq6sBRDSwsmst1ZgqT5Wkucx3gYcEUVtoFvWGWAVvk17xntSgVuz451NcSDzpUBCeqqs",
  "key15": "3SzMw4gKQdAGiFZT95vo5vNaTd5krVjLouRWKiSuSR3h4yjFBtuDWjaZLyrJbsPpQZGSk7iHuwrcqARN9gEmQwFw",
  "key16": "4654RsUDKuoUqtRooFZz6tAD5yHU56Q6fraSgehvKB9ZAbzd23F7uJrhkahBjMMAV2CWKfe86TmkegPj3bMBoRbC",
  "key17": "3DkNWV3ZPMChtnJiy134oFcZzQRZQXNPvGV4qHw2RZUKfyBBvWLGGu4jgP688FiGNaU1qph1KLeNTKxsx3i9GYds",
  "key18": "46cmpjmE3rS5R5C8QtL5zFhjPdhpz6gMdzPEseEvNjdoHfrH68yKZFDGn39McwjXhLySW7kQhkqLXHYUznX3PidY",
  "key19": "5dmsgiF833axP4btzsog5NKFQY6zqP2TeX1d4FVbw52sz1EXazig8mkouJPP8egc8RQ2c14WfQ3PrQ3kZPaqsd2i",
  "key20": "3eCj6KGze8rdkDLunQGrbfEwGDeCE3t49c4mTrXdF5f6iposHBqcaF7dP3ekEs4bnYJP9W8YCVcLK5Xb2tdvnSv3",
  "key21": "XxxkVdifVYyopacA4d567zK3apCzCmnkLnr1eQa6CdvVFvPxr5MHuamMkEHBvmTqhsKFjqG6zUcHjcjoTovsXSU",
  "key22": "ozXJ7sAr7wfBXgN4XVK7aet1FjEnFuyBHFqSVh92afJu2ypxmMLDJYQ9qivNB6i7AN85HBn3czoLpeVqrFbX63A",
  "key23": "2xkyKLtquQkQNBRto8KbAjzbePrGVKGouXCxUgidx9C5o9YXLgcoNCs5RzMVSyjENwoodhjthA3asfXhxLZePWD3",
  "key24": "4cJMGiGVqCsDg5rARct1dSXE2GymBEbMSWBK3x8gwmrKm3VgVvNEnwRU7XDMfHnWe2i5gR52mE9bGSt3ekxVemfy",
  "key25": "2fjUYcgYJAm6o63RnCcQij2ABd3uX43KGuMY7LFQCybdeqyP17wpo3ybg48TNBzD4VsyNF7LN7ktGfXQYChJb51W",
  "key26": "2BuzmihHGhZQjdmYqiTC87woLABj2HRwNUrqEiNqSEJuXUNKRhgy12wpjc1ePqngNX2imzkCnwhAatU2EiLxXVCY",
  "key27": "ZAj8kWWnQG1h1r5d2iZdHPdExSC2RwEtHHRGHzjTaykTivpw98PotmvoSJLQsuCqHTgsw7XxbnT6pPXt9tGNNWu",
  "key28": "3Bo4DqhLmGBZAk6u3i9bYyDgEMmN1CX27sUS8qMBfgDyn7ZbrbT9EiEwNMsrQiNqnqCMpWntLwhHbQJ3jueGN49Q",
  "key29": "xmmhuDft4bMWwfCpdh1YuSGmmSEUYVHw4Nnr5mESSpTgFAkxa9WfFtfMvAw5n3ikKiK399aSsrVnLLGRMDfUf8x",
  "key30": "57qWJnJmxwNsDSPv1jFosKgowwaL8pe9toFu9uM8nMuT1vj7UjPz3aqjjA1ZfyVBxfp6cHX8HHcXGUFwjryg8Af",
  "key31": "4uMbvhNUtDQiXVyXb5G9fLk8Vf8etNkiKmBxiaKmjS8VFTd14wXGrBmzYfdUMVKjuzLAatatBnZS9qt4s5kRgTy8",
  "key32": "3dFr3LUKck8osyGfYdkpQPHGdFxpxnvvoYYBBYRDM2sFLvE76esLCB53LAvjBsQXz4yFbuZqgib4NmodEJGbomPX",
  "key33": "27cGa4SHRayw1PwaFaez4HHT62niriR3eVrC7NeMNGkjw3pHvzTfECgTiHSHxo8q5ySH1uhbkpEawSP49CtLpiD8",
  "key34": "756EmyxyV91qhJrXCpvvrt8MoqX9jSzXhNMuGkX7QcnzHcbS4X2rQRzprDwz9ke6izYUAbjCvdkHDcgtb9V3N23",
  "key35": "3HUmsyNtyCZt9yjMLAmfdQizKXcWEWKNvK924vYuGZ5t5ha1f44zHLoAoFmzaqzct3AcWaykEYKS2MGkUyo38ErA",
  "key36": "48d5WTPd3RbEmVvKTkybkK66Xc1MjK4feUyZ7hSChWcaq2WwZrnRfcsJJka4w1gkcwdfVRCVpCpDBFzeZLp9qjvR",
  "key37": "3kDqPPYBcND92vDZHPNi8gg7NEbfS7aPkY9kmaXLX21j2pXUh5qMG1ymxoD3JHXtUqnwJHspUUPqqpjmhXZmm7Ht",
  "key38": "2tEBu9tgKumxu2J15KpsQujhjL9aFkUdsoku8ufSDnEk3HUKtD77U8i1WYvQdyx3PxfL26ez751aSQ8qeMxnddWz",
  "key39": "3bY5XRRYonnnq69C9YYuGqbPAB6jEmV69MUdTK51MvLvVUAxkmvteGvxqVtaHtwD9woxHMk2gTpWQESy69oAtMCW",
  "key40": "HBHcv3gYY7iy1wBRSjETK66wFgbAY4QyivNH71GGfr3Fr8bedKC9m1f3UEijCQq2aXRbg7hqWtLkQg9hpwZsiMo",
  "key41": "4wG3BTLG2qwuyt2dp9sS8UmZtKY2fPjMp6y6HP8fQh87jmuf5TV7aa8qUR4hHnGGoZzNdtTV1axg44P5MC4xtTij",
  "key42": "TcmPqJjWbaQS6gdbp3rDj7UWyrztBhbTgW7wpXjt92gtojDYTKjefS5DdHs5KmXGVcWYuomV1BpxDd9rsnpoZ8x",
  "key43": "55GLpn3Xq4AinssEFuNKwNJ4ARq8NzqBUWou3r5Fsj3H4AvHu2v537kYrA6UiaPfwNHkiqr21XkVWicNDxkTqA3j",
  "key44": "3GaLeJWHLTLmpEmWSoV3oapEQFyXJ3xrp1zjkdYnWfJ7FyMUtnLRo3X3h2WWWcR4Li9hAEFkCij3yrkwvqxLYGRu",
  "key45": "3u1vH2gDxUJGbPQXmRY9cYoXGSe6qH5zUWCDWKewFW17uHkzpHsYz83Ri958kkgbN7rkwzWajKVGorNq7rgjoijd",
  "key46": "378bLLfD8rs6ktBhCHLJdviPNrXV6FfJxTEFm6Vd3spLoZbodtDvmsQDZEn1aLx9NP2SsMDTVVMrypcT9XFBA1ks",
  "key47": "3SHipmrG4uNLSBTPyEJX6o7qtRTpk8u5MDc8Sy8sfZpne81mxGw3H2mDbtCrmE6N6sYHEyD8eDMgmGNhBgYu2Vr4",
  "key48": "WGBqrgocrLyczfr7Ud1PvTGdKeZDi6JVAx3M5RBuwnZWEj1qnrhokj576unLGAFMhBzLXEEVn8kqFhm9QbrN9yp",
  "key49": "4c1WzNihTUNmrpfx4u8rcvvfuc6h3f3pkwTu9hzVguWLeh9dPjcScTBMRLx89YAMVg3Cu5yfEDR91etH6LxVPXKq"
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
