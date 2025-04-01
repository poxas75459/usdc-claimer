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
    "5XbbKGVd1HhWa6VAygXAoSzW98UeQnYLsdogrnbcsiBtZV9TtuFmUR9aCAo8QztMb5i2QEbW9M1uDneYS4KVfVJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G4eESP6D2kLoChPgcSuw9HnqQSwPiBsKVnwo5nr7RCRZ2RHAssgStziC6HWmE13ykvN3uF6itYPNxqvLcmStdjX",
  "key1": "4fgBovSrCbsdGdVqvHzTkjcVUjywhhYEA9tm2KiQ3Fg5r5bhd7uNmaCNFzTUfiLbg8t1yxQJKQqRZp47VTB8ASAf",
  "key2": "127renrZmfqrKRrTdHePa1tA1sGHtvNPCiVv12ghwDFrJ9NNgh29W7Ea2YjHEEMayeEYuAfhjrFaxFS2T6zbqh5u",
  "key3": "2LuFR2iJGraMDCozCbebZsEz7xf9Liz9GwECCm6jv8oEaK99tZafZLgzLmMxPtpDMd9TvJH6Bqr47oFNTRbhtMZG",
  "key4": "5vJ1yoNz41Pp1AdpCNcUwPEsnMKHoFKZDQ4kKTPYDyVq6KYy8k2yAgW684UzENv5FGeG1qaeDTUQgf8KJfJcqecL",
  "key5": "2C12F2XGmJ6VHHe3xbwd7p1MFcATNvEG3o23qKFKkHginm4MFaiBAFheohx2DCGn6N2VVmNkhYnfNHL5Acp54myV",
  "key6": "3HpnGmEDWJhBo4FMwbT7CpFwvewEq9h2iYbXe3sbEBdQLeEE2mFskboNvw6mUDt1j7mWULQeQ39PzeBCo63JgoRN",
  "key7": "5YgXiW7M7HWomEKfMxR9aYgTrFRCVnTacTA8opqrBngDEk485crby93GNe1qjphR6SUjtGZCRN8yuaqjcKh7nM9A",
  "key8": "4Was6HPBQjQT8Cpyi5DWxjBJKoPNJWezFp6LqE3tYatdaiPACcB5jhePyaXz1wDDfC96q3K9Bg7FzeqQBa4Tago1",
  "key9": "3wrMrkscb633EsXYAitjwegNp6spp99iSd6Pd7RsFLJmP49hYosHPHVzbyNYKR66A7astzgiBqRFDJcHRGmSkRUZ",
  "key10": "2tRW6eVgih6j7gBPEh5CSeBce6UDtHeibVVExEHMANnBwefKzkQnSDVdrBhntP8rm2278q3UVBptRuzghA4Eup6",
  "key11": "3Vehh9pKkDh2YF6RnHGtobYWnRYvWfUowY4kNM5fps5F4j1bUoHxRW8RgBfnKza9mM5nU3V8VVYX2Vox1MF5g4UX",
  "key12": "3VVutvw9e3WLdVFG3sT3CGTNgMUDRV26BXGNQmSZNq5ZrPV5TUBaJrD5BZsFKYgGZ6tKHDBz6cHj7iJPEeDRVjso",
  "key13": "2pWNz5o9BR5vcr2ABEWiWnUv9NbyguuVn7fL5MFimRFEYLXgRAKJjwzSJDYSfpwYmExFYpLktgsmGkr7QBtc5YHp",
  "key14": "5u39cdhUPwkqgUxCbS21vByiZztwwHdewr8Ld4QLda1V9yFLFtHwoy2nfN3yuZZVRWAFBj7r2sLxED98AFwFBbZy",
  "key15": "kGeZe4KPWF6rUYG2Vvdq8QHSRRFC441jGha4Y6AbrMWTwkD1so7y6icz2GjShjNyao4eCysxykqowUEKDXKq6Xd",
  "key16": "2WLPygugt1RVRBRdfZ1ByTW4nyyBCMBXairUSqwCK2PRnnGbEBMUN4nKL4PSgLwbhiRzbFfpiGnBADVdomP5sEYS",
  "key17": "8PtjPShZP2RiqPWJ66cAVp8XnFfqkvUbEvajYGe35RhhywnJtg2HAYT1jkVFAbx5kPMvcyB48ypqVd6Pf2e2vaz",
  "key18": "44pEB5rszrJ4BYmgZY19x9HV52cMGvS1HWLhkdoo2vx4gnRgLZs9TcY25Keo19FgsDHSVfwfLR8ppBdUiDnqCgA8",
  "key19": "4uBEQUpk3GozMpVNQJ38dJ3okMttSxUmpkb5HuKGPb8jxLUjAevCLENZsDDnfnMyNrRWLVrbpvzFUdYUtHwmUW3p",
  "key20": "4b7aATW2yNMLSpLcrBMqZTBoM7LnxEaRxUhatjhNMKXzvFMMwk1CoD7vSJUJ3mEsoGDomZVf1A2Ckrbjnn8zRU6p",
  "key21": "61aJHK4NM7bGgFEWb4Ry9ffJ5FABtfUGeQQge7XbB43QjAGxAJ93CcvzTmZ3Ldz95FdRiiBwEWL39Rxkvs2ogsUB",
  "key22": "2whAMhfAN7Xtnx5qkLyQ39nfvhvwYC7eL8HBDF3bJkhFAwpF19XZb5vtK15fpcMwjMVCak9ZFdfRSFKs9xuyQbw3",
  "key23": "2vgXwHz2VysZ44ePKj7m3hWbowZozbPBHV5romQHUWdULJT6nGRbyGiMuv7go2J4vfxkF9hQagJPNV4EjGpakT8X",
  "key24": "2Kk3EyktZiNqYCrmvYdCJZ3e9RvZf7X2K5xxbHv4E27b7P5cVrZR9FvFzPr6AeY9spDi55SojZf8LvgE1Yo1WvLm",
  "key25": "2eNk5mfZQZmVwrrs8UZVd4toqLPV5eYPMDvoycqBDyx7W2hEENJoSBa3WQn9ff7piS8zmkf9Ldqjo3n5L3vEtNv1",
  "key26": "2TdPUe9CXwHXnM1dxnWZDaUweo5KtynaAQZVV3J8uRQpCjfVxB2vuD97Gz6xQXbaGfyzc7ygJSbYW71CsqZxLn15",
  "key27": "3USJdmXk51FjrCUcf7SDS7jCboUzSiGLrxjdRoTDXXM6pknHHBpth7xMuPHnXfmaud1FuH5DH7AiVyH52LeA5ubH",
  "key28": "2tNDkEA4bgd1u8JN6vq62y3LSw5GTf9WxDLY8X3161A6nYpX4zBdHj2cs5tM7jU7GUqAd3WmsjwskQS3xGAFXvAW",
  "key29": "2moH2TeqXv6dyeSRYQLkdCyDkJgCPyBsncgNVvbV9ExR7f9cGtQJHKYqtjMhAHfmgBnihi8dc87NM5prNiU39qbd",
  "key30": "2LdNvbMpKo9roLy2JBiZTYHBNSJDT7JYeqaJy1Ay15P2zQoDqBwQnxXTvek41c4aAvzoKCQMMbiyDfZR8cYc2LPB",
  "key31": "5bJ1GGZpEbyFCJLLCbAZ72nbcPp9jtLWNKJwBZ5YJAXAFKQx1189SUWKTzRwxhZZUWgd1wopkku84G9fQvpAhtYz",
  "key32": "2gpqvWYt8MEh58jsvmTjMUdNd5RTN2Ygyem5fjM61W23wzy1T1fQNdxJycT7TgfbHjxx5TH1u8tooN3o1dvgvXFk",
  "key33": "2UHn1iFDd8iBDL98Md2Vqz4bjDZ7uYZk9X1XhrZTprdcAkE4PcS2k8WDGLXCj1HNaEpgdVdpfZDTGrGhWsUBVopu",
  "key34": "3f8CNTS6DLGqNYV39faU1cN9UkbbDV8XZpgLQgUTjJSXuwUTh1Kk11DLiKuovpxxxQK9MvHRHeddMqenXscrVcvC",
  "key35": "24muR7TfBypnmrudHbc94EsbmPRNfhXFYhfR9K2CWS16fNQyQb96dQ8c9QrRPDfT8RxT8JzRAHuBoNUha4VFXNEK",
  "key36": "2p4nWRtTtALdNPYzBLqhV2rWDo1o2QvzfGb9U2ALbCqW7qgb7wQbPEpr4sbex1W5oxPkXhVytQDTusFZs9NAv5hY",
  "key37": "275jgAN6yk1EYif63jvHcwmTeBrQMsyCgu2JTmb9jjYNADwmmMtkeQc4hquoVNovoLpBdQmLesYLgaBEn7i9x3Zc",
  "key38": "f9onjSXffuqSBrAYqVUx3DgKpNFZLj9QjMuVsvjVErAWeULM7hHpKPe2uZv6EwVsZXwnS1E2ucsEonCCz2EVAq6",
  "key39": "3LPpec7gKoZLBGn68s29gwR6zCtydtmAsFU1776Mm8Ghq9iz5up9csw6Fz1zfveUX3jwb1cpbxsBb1fvTLtF2cmQ",
  "key40": "4TmdmjoaYTinfF9875KYSj8BZCi3etsXnmgxotnK5TnBpxVnohKq2UpuQ6ycGa84M7GR2ZK2CJz6HzCPiywSyYv9",
  "key41": "71mcMTmhK5oLdb1J4UP22JJSkBvjwx5VKbxw1epZmPXjFnFdFXYcZvMfiRk2hM7QTHGoEhv4JCbdo8EJHXyVFqu",
  "key42": "4AVTixPcWhYEK7mC9Vkp7saL3dJEju8KLrt4gYPLNyuraRjfycVj63bH57wMSSFpQxaWKzvjJAu4fnBgVtX4w55L",
  "key43": "VTg7Zckz945nudxrGJHwGqoZThSKVMxFqzTn4WyHwqJeF3XixaXisj7Fp1btxSHu7xoXy9aAeJV7zK637eUhRx2"
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
