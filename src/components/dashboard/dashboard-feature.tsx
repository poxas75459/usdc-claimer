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
    "3ka7pBRXppMkjL2E2yvi9dYyXs4PjKD5r9gKpHi7rvk44GShhQuqbjQZC7o54X3WGigoKJbMxFXRDw7KvSvrPDod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iiGVcvN5y8zNBqUcqdGgxTpnLG1HnbMd6JVw6fbsSzeEDjTcNpvefcDzc6W5NXVwKrGSZGASzjpXCsUxgmHHf9T",
  "key1": "pAbS1NxBzGngYHmHziJt6YCae5xWBfEWjQ8XUX99koDke4Yj27zPpNW5biYcQUgwn8eLT6DenutCpAB7Nm2w1ru",
  "key2": "5ixXsvqtLzED3S5NvX2zNzqbMAyUjUDDQzEUbH34rMqpJtgGsyEGnm9ngLNMJnczaGZd7AQDpa7iKmG1R8hFVtpm",
  "key3": "5WChPCPjNViUsEaRs91Bnat76h4sMV3A16NMGntuEMoqxhwr6oQhyGFnJYnjD7DWBJ2BnPKGDvMpYozcftBariKb",
  "key4": "VBhhCBTdHB1aZcEQQR3DVeZ9VLY9Q2gZuYE9XqEzyeqkbHadDZsBq592pC2FP369ohh2uhjegY3xerAM4JYK5xg",
  "key5": "4B7nSvVhs5coQwgyEiTa2z7RRypbS638G2w7ZFqT9F1cRS5iRggMD22Bf7BHbcERpdU4hnRyvfmiKuX8vEvUKiLq",
  "key6": "gJhPXL8BzdKnLq5w9c31sdG7sxL5HxNuRbM81gTmjDCFHbXeQqEMRqDdfkGhAcWuAGEqG9nxTvsX3N9CPLEHWvz",
  "key7": "2YfqBVcdRSPeDBpYKzbLwMr3d8vWXckxuEdMfWfHZyv32Giweqfh4WbnKtWtvK8phDCgktWWE9NpLQZJyNKd4Vbw",
  "key8": "5mou51RS83L6itXx2oaqpXzG2zBtRM8oHotHSdm5izf2oxBoTEYxAPCBWbRhZFy9LXRotsdLuZryz2yUnu3FMyBv",
  "key9": "2Q8s9hveFmnya71ZE1RsN4Q5kwzaPwLbojNbRd4NXtChtPqDCo5rJanX8BfWqX8gedSwauKqaAmADax2Dcaei9wV",
  "key10": "WTf52dexmdnfwHH8ky2czjNMKs1rzLSrekV8Nuhetah5VCkXm6RHEUseuu7GWwPR9g7gKQbfFBLRnHmyF1LEnG7",
  "key11": "KCKNuBcpxo2P7BV1nUGuas6NgMoLBaLPCDty2xuDZCNcSgSoV4LDqu836nZVZDmH37xmjdYxPVM51LG5nvhheAf",
  "key12": "3moVVKjmFdcsJ3WPHhD1w5yrd5ECih5FZEEYb1KSBPJWVDVWY3GdBojSf4zMJ5SYke8AxbZqeWCCtScbB6Q3873i",
  "key13": "23JechzSa7YStgi7iW7zDh9SFnd7ayfhvwNQ8x59nDFnd6LDmoPoFpuyDEUtp7H7gLQQGF4XyiobQLUMRFobh1b5",
  "key14": "4DKAZHb2EoH4j8Gf8xd4S9bAvosvE1nePa3gRawYvYpwHcJBC6PXYzSmMYr5vtkwepDS8QGSaRV6vGyCZrVvLgju",
  "key15": "4UBwB7gb7WNe37usGWFTQDNnPbkMPbJwaCRjpRJ25AGTrNQNPDHd4BRhNbtANVoDRCuQFhKgBDUribGjau3Z8mRg",
  "key16": "3wiBJD2iRFpXyo2STaKhTkB7jN8DkiqGFwy96paVaW8gG552kshZoEtDN2ZANC8L5EbWBktgLaDd9VumzqeonzuR",
  "key17": "JYSDu9VuVrZq9EHQf21kjSxEYxLc1fY7p978sKT2cBAbWJZKgYJDhL7LZDsFnADCVgfyC5fMNNkQPFYpDQ8aSaT",
  "key18": "66V4LxNvQhoCATKgBEDaAsec5x9RYH1NPnSAnYFxorPZHoaK1F8GDBVTUrbtsLVPDDxGJmr1U1fTaQWYDm4oHjMp",
  "key19": "57hjFrhwqP4sJ8vCsKLQHs7uEnFidJETWLWfpix5YJUBVaFGaYi5SS7TwMp4R2tFWUAabiksJ3fWz8KT7Tgmq2Gn",
  "key20": "4gQ39tVZo1GMLckSKPuMNiSKQz6q8R2eq1b2kWxPMeG37ae8nRw2i2KVZ1gwCgikz61vsojj2kH9J5HFEfjL8qZV",
  "key21": "2ZTSGZQjgVQEtNsUMjy3GbPAsjrQM3mXPavavzcsmsXhJxuoMzdqSMFEGefFJ4Ee49xnx3ynyEcT8U4d7FNKorqe",
  "key22": "51itxtXcwEe8fjKDHQFug4AcECmWtmjXT8FTxvR5Wx981JxQS3yFRJorCytstEwvBFUGdNzjNDd8tFxTdDQhmMoB",
  "key23": "7BFQLsY9gM2X5HJ8aAVwTC9MmYCnqQ97wSzrCbT8HdiHAXbom9HJ8XTdiStfcVUFB4A5LthryDhaK6x8SdjRxKw",
  "key24": "5knYCZBCtcLL8SQTEzqXLRaYxtByDT1dyHLRZj5gA83qgqCy29dBdbhYcxB8FBFVF9ktnV7D927wqWGp38ue3UuD",
  "key25": "65trgErDcK4dgpceDkh9V2eHMCbQQXZgrNyUTaWj6tNdSPFa5xC8L6gPgrdfipZBE9k12VqokLkZabntQA3a99B2",
  "key26": "5uM2PCnzhrkp14upZGdjY1bruNa5myV99DxXqm9Kyphbi5MhNWm8UaYg6Ah276roBKY5tMBiSj8wn9o58UAZmiYb",
  "key27": "4wDX3txNsNoM59S5abpmqcPKziN4vPgJDG1f6MuDhgwMDs6AZvCbVhgebQGRssRMna3T4SDBHc9T7seEWZDE4LgL",
  "key28": "4v32J21We13cS3yaqQXXbVzu1DeSwi5mVcSbvuxYiW8AMC7idWLm8eadvNaYkE8ftS7cTcZPZutxFnxzxw4Z67da",
  "key29": "4Ve653EjZEscYKRVC6H8yhKn1DcdumHYonumTQPT2vib8d1F1vbvNctn9BvFUDYZzBDB8CR5ohzB7kSmgCZAxpEh",
  "key30": "547HoNkPBh1pW4KyisqnwVkCKMXbXr6147qX4Sq8za6KRNzJC5pVYZqraYYcAJ9BPaanhxDkkxb9DJEURdfkksJi",
  "key31": "3cPfN4k3YdVTMeDSTtVfMSHxnKtQxTr1gorDgmxzhob1ZQhV4mF2ESziTUmCVvj1svh22V4T8C8R93MuCMA1BXAL",
  "key32": "3xBCAbAecrKFqbfdxTVhsLx2gpwFTK4NxAXWr8E5R33bby2pxw9RGnMU2GYUKhgPCXvXnahXeP3SpvWdwizapSLG",
  "key33": "59nKGbS6dW4szChPuawCszhcsFPJk8JUDPTtQkaxGNgRhkTZT4wDSZG7h5vnFUKxizxwGhNsviSwcvhUWL1XPtEx",
  "key34": "56mnbZWN31PvLTX4esvv8fnVHAmN31BfZZ3uYPQDy522XRyHi3Dwu5jENEnKH1n8C3Y89kiEqF28NzuVa5VDHZH3",
  "key35": "2ejTPffBjZzHpvq2bZaePRK3rZtvXMFZFJYPscs5KAurfihH9xwMpdxTfarXmFcAKqDCB7Mu8wF3JADizQ38y4Ss",
  "key36": "2XBXrkog3i4KBy9ZfLsUiqZw4PsVaLm5Hwg7iCYYrHizK8sb2wADRQs46S3AMAzkognnnB6T8SNWx2qhj7dEFguW",
  "key37": "3V1qpvATvWa777znH8exkzokBqyikDJTFMPKbmiUJ2RsFVU8DohE4qKbtWpfykxky54631yZwcu7CAEEfEgVTsWq",
  "key38": "3ZPs9sZHH3jQjj53g1uUfQ9L8BAWwuLAYWxXaLtnqX2Y7zUELf1SgegkE8pqtyE5eGWtwcnHdtWJsj3t2L48hNew",
  "key39": "653qBSqGyAvmy6M1qR3kZxi3PkFME4fmHrZEmg2LvRU3Vj3QpcyBL6gqXpS3Rpx1NqziRW4YwcGR7VUxdZMDXSpj",
  "key40": "y6hZdLGX9pr2UVdyoY49xzfyVRQ5RWbpm9pb2rCMC5VdRhugctrTdusS4Jn7vBMD8PyftePn3tGJ3xHH7UyvABG",
  "key41": "5Wvy1HKkgtUWntoNjbMG3FVFpBREKSDpdsRG6KJiFgbiuX4Mh69p9FJkPSUDXNtAWuHCCQMjV7PHFa55zNWSsEfP"
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
