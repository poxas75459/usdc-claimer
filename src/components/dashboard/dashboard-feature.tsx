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
    "4kHDaUkiwT2M5vgJKGmp7a7YnUMJocapivfbmKuuh2USjr9gjL8XBXYnoGB3reas39ZbbJuGKeyrJKf8nozYwSo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v3q97S9iqAC52ikJRft8KAntHM5o5jfzkFzFVQbW5M9GaRN2Z4GrdFbWz22eZcV9CX4oesZPSVQ6ugSBtUMywkF",
  "key1": "3m7XwxCeA86t5KGE6pLPVK1uu5jzX8hH7pT7gVmiCxxfYhd6ztpT2banPRw8R7sjVKetySHJ81aAq96nSZ8nDyoX",
  "key2": "5cHJ7cYjVuPP8NAdPiavdipPjKRSmAwuB3zenzQqLT8upfpxtgTR7muH3ssSAXNUskXK9EP3RaxJchCaAaaRGbwc",
  "key3": "3Uz3kt9Lhf9tDkKfhNVNkopFRz2Y18QArYVeFPJFnNGMdmrfoeFtspkvSNm6YY38xeRkwxhRTjDYmoFjYFJDnTAn",
  "key4": "5aFkt7o6a89PEyH9dh3Wed7gYfimaTcoPU2RS3q7UnJ2GFqkUhspF9Bi5vQvx8sPvuuP6mN5wevM8nZvHxBiFyyC",
  "key5": "5g1ac46gnvceqYhPRMxmabLFSik7zYQmh9PjMYmp6dm3uAmDjykzf3AbLBpVS1C9GEdb1TU6cnVDhH19dAT7r2f9",
  "key6": "25YoWEPti2oDXpRVpoKKnGCrBNkwzPVgf6TtYowiRcGX6JwxWJYKB2ZgawessnK8g4hgDsBp5wQUVSNV2UB4TDS3",
  "key7": "5uuPMQR8uith7Fr1Bz2Q4A6TgNt43kFSVmYjzhpHLGsnq5K7Wuy3AVgHQsocuwt1RE6AAc4vcjXz5qeLtKfS8toF",
  "key8": "4bDWfFTbVLTfaKdkoggb1ZPMucEzks84dT42Ns2nrrDAJ6ALYReYRRsbQZ1L9LKPWJYkU5AD2F9VE5a2YeTfpm9X",
  "key9": "52PdDZ3bRobNpVtBunXXAABDaLfhTKtK8fVUavNX4KoK8ewSeWoFy3Uhgbn2nktoF4DWXtR4sAa5nqrktvCEv2LA",
  "key10": "4f4TjZrNNTPFm2ZU7KBGwAGzEJbFYyVp6DJmPtTrHBLvM7GhfTN3YacoWB4Wt2gYqd55WaQykxGH6Wpv2TsWuBoM",
  "key11": "591yB86Wr17UhSRqfe5Cs3EArMPGpaPFDFxJHYE2UDdgUnjHEZVLoQF1P6gyH42fkURNHuo55ug8MFcBQYjyfE7S",
  "key12": "3xFJ3gMm96sTdx6fE25xtyyCtUDT5eSurUpMjpRoVhNqknu12HVracDFixZd1M5iMgUYisq2MyHwNSW5gqHxWTrK",
  "key13": "31Aw4iqSQ8eDw8swFKCiJWUNjDxXNvjsWF9PPE8ya2weJxvVEMSvuuybtfeUex2gz2tKKytSSvupsyCs2c2CL9jy",
  "key14": "4J19sVFccCMdqnJVRqmhJ5BKBzB4b8idWUcAmH4NYjzKJzJsdgqmDH2Ngj37H4zoNnpqq1r7XEXDNZBSNDNEtdYJ",
  "key15": "5d5CKA8meutQV9ZWoUj3vhbxyQejoHEK8MnCGWWRqCCCDCWC5DifdDKeXD6yeTCqHbdxpzcSoVeUC79PB7dFsPNp",
  "key16": "3bTcbECvvLehedzCrXbiRGzDtWVMTNZjU2AdGPPG6hJnhQcWWcbteUkxYfB4165aRBsTxg57YSrwUq7JwPszxdUh",
  "key17": "4kn1XHRAVnwFC76yjd7VLrAkRgzJJcchr9uABk4s9XrS1uHPPSiX1Vtm4QtcXP6QET6JWhcgLLFMM4VXx9H9F7V5",
  "key18": "y8CZfZHDYcf9BfY6qYYUQPXKkanPkHUyr8eMDWFbvsFDxeSXHX8RBVrc3bi3n7DrA1EEyQqfNQ4rc6fPBv4phSp",
  "key19": "5d3h9xYYzrgr1XCYkPATQKYj5BfMwPQmBBtFSjX1WiwxD5Jw4C48GZUyQJEuSSv2SHKQLd8h5d5tXhrTfUoyVGVE",
  "key20": "3CgmktCMEweksDUPhNQk8HuGaa9nGdkZAijqxoyd3rkQBc9gNv6VwkgjHkpCYdY8Vx4u2wPzN5iANkuX89WZ4yxx",
  "key21": "4gWvLfwy6Q7cA1oAjztHcB4TwtBhKGPy1Fmm8Bog6Fs1r4ckJXDqRwiKxJYkDciunF1ABSJUnDZjRPt3rrPPFFzp",
  "key22": "2bGRYVNsVS8bzHQpgA1UyGY5927RSToFw9xxetTPpras6QbQyLja9CpjZxKGRsyknWvzquNLQeyaxrhsx2iGmAUA",
  "key23": "5NemRRZELVGqtki3snjdFCjSgdgFRJhuoAoaUfp4fMJFsKrCNWPZGzRLwkPoetEyhcQho7yj6ZfyqQ2TQddnQGV7",
  "key24": "4jv2tKr6qjVdEzw1RKCGLWtXUqtXTGKwBBVgDmzschoQuewSr1au91beTVBkpFF2N3J7uLRwRnQQT5DiqJ5xtacy",
  "key25": "3SBnNmvoCCXUDioeAjnXUPWZGwLVFAFX9QJFkcg3T9BC5RGh64GTHuYeqWk5PjoN54MCN5wTCogkZrHXPbANauL5",
  "key26": "2EkfQ9HdmQZtrByRCYewc5dfKhHLyhiV46UbqH82hDJp5VSKRAHsQFqvGS8iwHnz7YXACwNRsSLHNdvGFtENpTqE",
  "key27": "64vMhULPfnzCMgPGf6zjABJJpwSa46ehge9ta44vne5YRmuHVs9YLCQ2rCpDwKRYQ7CQx6z5TdAbrTnnWMfN2bkQ",
  "key28": "s5G1ViaWty1XHHeL6KmMzVoTfkkRwgzjabbh7ZNYPJKAAQGPxYBrV2DXf3CgRxfswZJQ17PoaPsUAMr5jHrffNg",
  "key29": "7xicCezokZFGW4UijNR8fLU6ih9G7CKPKj63vhrfPQp92UD5ENsH1YdSS2w5wheAQrsRMViuZ9FUiA3SSvvTwfV",
  "key30": "3euxKQhtUaRGZse5qer1s2C5YCVRmrSpV1nYzfoRYDyEf4uysc3MfkRFvQY62Wk1vqWRBAMvpEa7ZirU5v7WobDB",
  "key31": "3Kh9GJS6rTmwhTEqzrRGSKd5vccTKZxMq1AR4Sd1N8haosYpJjvs4qG54tmDCMUU1sNnBf8CbgdUrsTYoAjGeCT7",
  "key32": "5duZHjWMUsAYHsvNWXPFwpm14pujdJw2XHDHip3umpwCh5sqshJYH6nimtKdSV7sHtYGmdskR9iNWzafNxhsbHRD",
  "key33": "2s9BqtJB6EawDWFwZFt9fDPkxWGvbBoFLzSve7kuRyS4vncBnzQihgPDJPrkc9TV3dAVb1oZ1JUaVGvxgNH1dy3V",
  "key34": "3CksHMidSoX4HfAGw4i8c8v3TcHa2PLmEagRsQPsLtSRakfVzU3p5zQEtdWwcPag5pCmuaH9PfkUFUaQ6UVAJjNb",
  "key35": "2L9c6U81RNoDAKiLEdByZGAVJS5f7JiPa2NE22UQvF3aBCXatuLD3ns4m7e1biGLZDKWyq49ehYGj9FLJWg5XvVa",
  "key36": "4yAdpLjYT2FTc6dQ5rQys956DpQGQkHvQSE9K6UDX987Wf4oE2rP5sR76vvMxh3VfzzLMtmrGWVYT2hNwK3EY8Er",
  "key37": "4FA8dixGRHAY5Pwscehf7gH6w8wBpAXYfhJxKKVsEmnYtptoAoyW9fenPCXmNhEBaefyCReJ4goZge6gtqCE14Xy",
  "key38": "T2cYgSv82hMrmncUMX9oD9fUc3RXdaC8dKT7rEPLeXCkoZbRAFxtquHY6XuqKoQQDtjWmCZTBVCvpnGgrejnpKQ",
  "key39": "3hzfSdpR7Xm5tkjiqJUcucd6UzJM7MwxfRju7mNBKnpkaj4WD13tngTAH1ZDHaE8quNPk5k2g6rkWD9tWHro8jHn",
  "key40": "2ZkiBTTLmcWKMMuubV8xnDCv7knLYwYR3wAXw2VmwJcSQBJkYSVQddpRYLpaSZE7KfkMtLUVcj5hELU4MVPGRhDT",
  "key41": "3GMfodjJbCZZaHudYdjAfaiqGRGg8u2doejpQf9k9U4QtmT3MMXKYM6zZsHmZBC6q7cxJahoe4r9CFtFxtfZgkXR",
  "key42": "2khNeXhuU6iDrd3f9c8j7YQqoQAMFAXNCJ9ZhXwqHsdG9U5VTANUqtVDVU8ssX74cNv8JRu7FXL3rKeVP51KnSF5",
  "key43": "PRkfojrFD5phWCmvr3SYQQ7Kcxusx2psejg7UTdRaBAub8NpJH1jurRq1y1vmYLWeV89sLQMd866gMekK9Ydr9c",
  "key44": "5CpUJRshUFA8vZMRLYPgsUy3NCkRC65Z4eeLdxsVFej94zBKWDWBEv7z4iGobLktMJiwowTEuSaijzZUAzsY9NEK"
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
