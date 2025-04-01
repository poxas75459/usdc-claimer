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
    "38kGPECLwLd5u1MmWjcijDF4tnJ39PSBEocDXrPqVpqxZny8nd53PvF3cojZMkFUKsYDK6cttLZSSV5mnTuvysk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JC734ExcAhzM9kBbsp4NqFM48y6ncAdoGpJXrF6ZrxWiMYRRZYGJiUjNdb9tbXnrE41zPBwuxzcfTSdjzh8Y9Ls",
  "key1": "2xRjzgUEgg65QRgHDYtG2GxCH4hLLTPugJHV1sz4KXAoUQusKVQiSUPj9rKgnFpEAmywHGca2nLEudCwyh7chDNh",
  "key2": "CWjfW3ZfGWBxoUxErivczWPkft1zzekqAKLavp4xM6uNZWGeggChrYJCh6rmm1dEwiFnKGM4DpaaD6s78mBme9V",
  "key3": "4G9G55cbbziEDkCmvwc9v8Za83t1tMzu1KvWT4HbcwtBQm1ftwgxb9aEUGxGyC2oZpiCFBCHzeVrihu9mJjbNCX",
  "key4": "2uEqaZyat55CDqgVTt3gnNtEA7g1phFXCqGsiBjdQwUVTY31Z2FyHaJ89XcDWgJbkcFGUe2HYkrguyB9v1gKDxRs",
  "key5": "33aGmMfUWVuzc6bxUf7QBznzSzXB8hHqi6wSpuwBEweT96Kb99UngHfDASennamyjBEqBuAPBVYpcbMoTpiPJyG9",
  "key6": "4jMbJ3B6eStdnZZ6gWLcSuFRWiuu9FxA1jmHEHeaEcyCiDNjeBrupvWDYG81NiLnKbcdgsUXFZXeSjxypGRfL6C1",
  "key7": "3RgwaGfGkog5gdvwYZkj5mDUmNAhsNscdyr14A4axSLyiFTjPoRub2VVdZGxbi9y111kELDeBxWGcvxMUg9SBV7w",
  "key8": "2DfjhLGkvyBC1CDaHndU5YXtzbch8dzRBCxQpY8o8dtC3TNAM2gEFSmjUZEYQRvbmuhMURGKrHHGsaC6iD2YuMPZ",
  "key9": "3euECnb5LYesM1DQ2EUiJHtsbVpGorU3pp4mHnk8qtkBDcrDZKn5azGiEVncdwFqZaXzii8VrSZfELwMLxU853df",
  "key10": "JkoMMEfyen4BSMthkreMzUpQDE59FGJDaw5YsrxMSRHnCCZfxnVXzY9gZhpFXGWHQzW3J5vyiLd7eJAW6pH2A5D",
  "key11": "64w5pL7JdiiRB8M5vsFpoFqJQ1jDLkeZMb6N68HUDhnGfZPQzDiUNmZ3bjk3zokcAKXDg3tYF9vC3bafkcXsCNpR",
  "key12": "4jR3JirTHN6rFd3YnuTr4KtAj2mFPdo4hfdJRm4J3UwTPXjaEKLxiPB93hHP1tyFdt8mBWwzzNTaLnHCxHMbnRw9",
  "key13": "21UDv1d1UawJgpFNhP44ibECCLf3d3qoPWqq3xBGVKpTb5XKJXbayuz7Zp6MeyfNmdaD4yzePdeVFpatQewAKudk",
  "key14": "62PCgbk8SEpjQE1NTRrLZJcZFm7HiiF7sEQsGkXs7X5P3Tjg1g2jcNHymyHh3HvFZPsCSMzRFAXpBvyczgMTWNgv",
  "key15": "4qFqJkTN2Navigw1hZmfNe1GXsfqXJ7PeZLqmP7rEQFgzahseQEt3MPo7xPCdfGKxqcQZC3Qu5JkBZMTNdGXfcm8",
  "key16": "C2syqomBzzxezoPfenQVKjpSQtwRFhggicMvaEybGB7nu21QR9F6H59uJzE39tNQpKNrwXcRMBz31EH2QxDPSpe",
  "key17": "2d3qm7yTfzmaPq3snTYmKXtdnfh38QYGE4iJKdzuXJGPpWcfFUVpwaMmQjSJKoGo82zV8zDp4UBqUBi3Egrgq7Nn",
  "key18": "2SnLvq1pbhMMuzuMMYZHSv1CgUMq24Ci5dTXbJdLvMPLpczCkxCnkzMX1VR8ecZmvvqm8hB7KwitVGxx2g9d6Hoe",
  "key19": "DZk6bZkhEAdc1XyF5wP6BDWrBRp8LVSA9G2MQygWQ1fDDpnQo1ZUBGu7yCFMMsn42esF8DXgSbGZqPTPduW3Zm9",
  "key20": "4TJiAXKKPeaKCBRx2ARK3N71N8ba9MWtPUNz299AC1bqY45tjZwAcHTFx1XLqKgYmSLv4KLY9XQhuBX7J8bJBs4z",
  "key21": "3P6Y2NMunQ3Xpd2KsVip6ZAPbvSezuhWhZhi3s8quTFBm1rHFzQH11MyKvNMoMC1UhNsp2uvvBmPvGpApCJhozYF",
  "key22": "5vdZGpLAi2u1W1QLD7HtHddNP3dnztz6yF8ubX3phJMoXWRdEvKW9r5hntwGaaavK3xoXqyCo4D9mmUPXZc37At7",
  "key23": "2R2uEEi9wYHHSkM8xceXaT5nyuStbDU5gGgfKhD9jvtQyDY8nVsY2d7gPnPSbzrop19EBjWXxTipwW3PiUi79dz",
  "key24": "ZgDeTFqX9NbFzUdVAqQGWNnDU3Rt24B1mGKKNdLyK66UFJv8MuxsZs8seAAEsnSdW4XazmeEf7SPmSwvYV3dFoD",
  "key25": "3D6KEHvsZQd8PLC9tyqCbu2FofkfgHeJgM5FqwomNrzmnf2GGCuRvPMU98LBYGmXM3w93Uj7ttHzDEjGYk36ZHnM",
  "key26": "5H8K8Qaa75fhsfKgvaPk4Cd67xHUdisvSkjKFBXZgs6dDo8hRSQk3pqBCCQu3i6eSF3DGt2KkLKvs7bwmoGKz5Yq",
  "key27": "5MiuiwgZtVCqLyngyUGRJ5Kz9c6XYfQZKJSKSHHogBKwBCoJtpHCkL8zDKnhfiE7f7R4Sf3oyFWn6ZEF7L2iD7bC",
  "key28": "5tv5ntCfspq8wWFmaSnm5td2wjQfRCE4EuGEfqwywz5zY9nL4rv656VCHqkGB2KQQx7WjzsgsPZBiwLXkfZ3gpeZ",
  "key29": "32zLKNcFnPr9SHymDa8nbpaD4uTK8Gd3WoxkFK5FwPEMvKikrhL5VvH4247k7SFXgmMjurfi4KxhcGyWgn7ASzjj",
  "key30": "5FLfN4gvuhmpCBELmr8hKDGZi93XiQoLZvv8kKyH1Cs95ayLAm4zC5ZR89nC7F6gJyFAKgw9KKna2gGaqzHeA6XD",
  "key31": "3SyfTbAxHopY3HLSSL3VE9hQwGkTBR3jvqyvqkC82d4pr6KoGwzQbX18LpVyuea6u5YZqbTTbLt9RzW36TYwt2sp",
  "key32": "YfwQcF3ZHf6vLdE1apemCkBzDnVEJm1ZiBh5B1kQnFb9zMw1HjUJtcJreGBA3VQXzsRtJrJTnFf28UeoCmfJgmS",
  "key33": "2mja53EAybsAj7pAiVr2uvU6Pk8Zo4deP53EGsbdsXBXJ5eRd3FhZwfF1P5zZ3UMsYFJ8WfPb6MVvxx9YAkLx8VA",
  "key34": "5XnkxxL9FMbX8244dFcaoPCbZw3QF4VgmuexYGkykFsbopSGLZCDBXVrQrEzrNmk3ZuLbdajYJXSiGDgkoSYdKCj",
  "key35": "5FVdUgnLcW3QTwBbXquuYHH4g6isYbtLEWNdYjwLL9Fedm5eqi8CpoS7ovH9twtW9qHcewj1U1rym4REtRTSgayP",
  "key36": "5rY2FU7xcbkeU8GZNxATTDqCRV9oyhocTG2KMoiqMyCRW9DEdQzH6q4XhYAVJ5oxMTVMXUpnxi3ZwKWBrSJzpoy",
  "key37": "Xn9dgtFsJM1XMSUwYkADvRtaHEjY21SsgK1Fb9krhgSScM1PETrKoshB2gZmkA4fgUrbfrpBDHUvx2JKvAq2frZ",
  "key38": "fFDnR9mEouf9qxdsdrDsYu4c6N1CGocoDCcfJdP2eeuUesK75AGtqFKHHdhVJHAd7xeejh4TEL1Uy89vaVL5pVw",
  "key39": "4aePvimUpH9pANVM9hnoUYiwfF686qEBoBYkPC4ndDLBsEiGnhwxc7W49FnDgDWyYuNfM265esgfQX6ni6hV62GA",
  "key40": "3njPqzauyniSjknDazPTKE5VW342n3XJBTuznpw6as4nde3MtQvVKCz4Zr1g1mEQgNVUbsPStqa74ovCGMJFApCq",
  "key41": "2D5wWHwxs6P5kQ3TRKgo1YjZp9H8gBSSRYDXEYfoD6k5N8oqG6bCxw7wPiyuc2ZYHe9rAQbHJvqUYDzxb3S7Uh7z"
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
