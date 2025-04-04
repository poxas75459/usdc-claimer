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
    "2jhciaGBUvNx3tw6J2PLseZxqSUMxjdGkfyUwvHTGy8dYQ1gGH94EoerhyozzxB4kB1Ln77NEDiPm2csko9hqicF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DvrcmF7VsZfg2AAP7yp6oA2spXs1dwFCvTwkz4GYt89CXMYq1YsrjFgUHiuTDKsPYG1EzWSJnCsBz8ciFUJqEfa",
  "key1": "48zwQF86ijazUF8RFKFjtsuPitp72Dza43Kvk89Tovsou1a7EanPpjTyHZfaE1sydUK6ZB41GoxC67Wp1X4Z7chp",
  "key2": "4HMWkxXF5n5jj6q2jrnfmGfcRUu6gq7nqFWAiRcLipmh5Fw4GFdzCG6zwsHDsmsY652Fed13fEbT8tio9F5TyzoQ",
  "key3": "48SYpDjAvofiqrwSTvPDxZaP8QJc8xSX2GsGaw6oRJUbdvJDczNvbfSWLTk6ydfiybeWbuTz2JAMsqzDDF2eTieB",
  "key4": "63mgs1Us5BCBC7h8oQcZeZrMz9kLDQqWE4oAz4YtLnENu9d1xgYk9oCHPjFKCwnRjnZvbXjxEEVfsmk15xEVY3Hn",
  "key5": "4N2fCrg1bP8V11sLQfZPUDZpSrZgdA32NgeP6PJET9d4MP62fQA9oEVHyJhVkXdWrAThkX9GX8mae36AnQp4jG6i",
  "key6": "47zgVdGTedeKtiQXYSeRGYCeBGjCuCt4KSXuvCCj9Myg2ieaFtpQXRSFdSeV7ucAJWM8Xm59e4kmR7AHjC5FFTuH",
  "key7": "2jSpW7VxjpVkJs4kmdqGK9E8gwF16PwYWYRZC2jZipwk1AF1gZeBh1B8SEnPLBLzxgCGKt4HGrCieCy2UZGQGRqz",
  "key8": "wof9nHvBArfLZ5pa7G57nwGzkobdv77wkLRXaQ6EcaCJpAUWeGC35mU8rVB4jQmTN5bokMY7AUXZRZthnDdFwvX",
  "key9": "46nK9K6TJyhP5xHBvpNSGgNK9nBtRusSun9SiG5THA35aSPWSTURXrZ8nvxndRHFr8hAvuzGqGFHA6NjUSJt5ix",
  "key10": "2zScScUTLojKYfCCECLmBsfobDu9wvwzwiN7SkytxsEfwxkKNejqcpqzCBxqom68NTPgtjrCQdV4HVBrUs6T9fez",
  "key11": "3mHzgyRa5DT2xcZ3fho747gW95PxgXBSU3guCPthopHQj9uq5yu7Pa3uPGfiSSca3T9o8Zm3jN9BW8b1WgcRXLU1",
  "key12": "5VggesjZT3qPc1qXz6mH3y8NMuuECy74TzK12JWCyny1aRXjcX8vNPw8T7EDVWJqFB9TASdBYRZP26onpEQNPPtW",
  "key13": "5o3ttJEDiBFaGuoVfMgm5dbeS1NMCjy5upPPhPvuwPnNXKrmrX4CmCGmfBCaTSykN6qLMSrXraogDkqZMQzUknp9",
  "key14": "4FG1ikwJEJD7APsRA4bWtRcMwgjzM4LVqqnLNJendS3mMSPGXw8BZDojnRxSidzVk34Lb6NvURwxJ7Lh8t8R9Xms",
  "key15": "2wrU8vcVcyVSMadNCysLC5D8fbvbnvRnJ8BAnJiheoNPcFUAqRWB7oyGccQFDFeELkLk64uh92kWJ1fMnB688s3T",
  "key16": "4BEA6mw54aXVykNmz9R99F92srjxgkQ1uDhZMTa2PrF7pC5Xt54MSbWt4eabhtqSJ14RJ2UjauGN5NjTwBRungxf",
  "key17": "5nw8hRkHCnqjxtKB9PcHaujHjhZTerSgGYuQxPP4PWHxciPX1d5bLYYinNRcnNKYdcH51Bg8EA5ybRwBbNTqNmeu",
  "key18": "rJMuxWETpezz5FM4McJZ4CxgLTnV4a9AnGCVxZeZFrn3PsC2X2mzu1zaFToEpd6GoA4hvUhzrcq3F9jKBygsK8Z",
  "key19": "4YPbAa4ndJFyVJmN7rZjdiwDmuqofjBSTzbhtgCaKabvvWVNggiPffcgZhRWidycgnYeV88nJmgbqAZXGAkkLz8Z",
  "key20": "5hC2UXmYRqh61wY98fbTWdQGLJ87wiBSzUMe8spH6ZYSydiKUrS8c8xHq4t3fJnLfbWxVFcSpfrVKFsdy5fdRKUz",
  "key21": "KE9eWDH3qgqohbbQAEUSTH8EcmKmUp1pjSjzyYRoHRkiUHsXiVLL9QeK9gtuNdQKCQuRjjvHHo46bXoxCv3jJhH",
  "key22": "67FFjLPHu94KukYNjRh6XnbscXu6TpCRy8HHVeLmFjNSXfkBMLYvjEytgY4488qxVS79FwynqSXmiXuVcozmwMri",
  "key23": "QvupT3w32j54njma1o32Uy1cLzJrDcUMTtnkt5s5H5jd6P36nqGjzWici8zJfKSSgNaLxkekcfNW5bwF779BLLp",
  "key24": "5h9h67goe1KRsXEea2iV4F6zsJrySdh4iJpq9kyqQFigFgQGB5nqA7vEBMpuCXsjQcjoRLpqoMTBaW5zYwAVTYLN",
  "key25": "5Uzmn3oVkZ6w6nMArGrHTddLr6UUAshhmRvyu1SdLg4d79uNDovzr9ZmQjmQeQw85UgpXzyDvHYrBhjwGTFupL7B",
  "key26": "HEYxmpBYBb2GYdMUBpHoRqStkCnZpcHTPAdwySKy9w7Fs1SSvBR38ov8izfwnNDvHHXZxjx51t67enryA6eHsL2",
  "key27": "3ipkYMp2y4ZL58cQ4YgmeLnF6bDXKbLDvYcNcxRjtfFugs2yJ3RyBndRcMmeDqmf6SjNeJM3s89U8Gv3bGSLLSpu",
  "key28": "4VSxPUkHUFGUC1J9qHK6fw5yPfn3zMzJvZsyxv9kGZtzwxCLJBRQmnicsTQniiSkpyCxPRNkxaFgknmBHMX4r3x5",
  "key29": "3AKC1RgYfTfvmHWw6iWaH4LqGAtMDDsd5YWN6J5v3NUhg4vkj8P9Fzn54uNuNDnksjwUbVvu5pvAUkUQVkq5WeDk",
  "key30": "rAVkzbEMmYsVwLVrCqXdBcUHWG58izotfkMYtWRPnq2k2gmZcsV2vQ2opotw5hVckCBz15zFpGB1NCMpo7Sc27L",
  "key31": "2xLGeAUd8JcH565SWE2Aep58LhSDHqdRP6jU4oHRjcwc2eLWke4jqo5DtmSTst8dY3DTLNnN21ixqRwX8b9pnxTT",
  "key32": "2jPmadtTvuPscSdxxB7sLArHsM6mftAJpuo5KGVMYxG6B3Z1rSLCVi1mVzQ5cWkxKACgCLNPaUi8zpafTUrhTZUB",
  "key33": "7MoB4Bhw6D3UDoNwh2Hrfdd4K8f2e6gMxhwsAN6WWecRAWv4M87fmjyjkABNJCWrGeYdi29unPdp4dKBTMityRd",
  "key34": "E1N2dTMt6uKC7MHmRSREKXaUtf7f2inks5zYDPgkZGm78twB3PruS65zZ8hnhmTVXm7Us863NAECVkpvVSbXit1",
  "key35": "Js1jY77MgMMRDCAF4wwtFNYa64VG5G2MLKmGagCmfGbmbqhrZZtxycaKkYujqm8Mc2g6qaaw9ckrARcRXdcMrsY"
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
