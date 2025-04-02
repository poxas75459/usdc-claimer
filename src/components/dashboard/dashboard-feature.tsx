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
    "4mL55zMac2MTrJXVYyLrUWz2aSeme1gVg9sq4XrfqcdAienWrG9NHZAyjzYewzT47gQfuHkHNXuEYwgwok2pYm8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UiZ6aMgaV3YTBGdiQfRxhcZsHK6wo9sJ3a3UndjmSJ4B9B7iV1X7bNCwfWFtt2SybJdhQW1RSbcXNpM8cYtUGqc",
  "key1": "3CJ7rCmrpnkHB64HVWZebuR7CpjmtRiy1frQHe3JMFiexYJDXDV4EJEMKcjpvxAenW27un5tXV1JoY1vxi4NRNGy",
  "key2": "op9Nyu7u1f1Tu5t2mjhYGKFuMS5GFKy6irxw2oGyG2AbscxvYgt82T75CxjFL69BicNPuxtoXbQG6zPsHPftwjg",
  "key3": "4hEfAS2d7vs8d7jfFcNiLrtaJJigTimEAJuvVAvZ8CdVWHZ51n3SRkhUZp4jxM9Tu5B41tMCWB8BKTPo9xENc1Sy",
  "key4": "5CBxUnM3UgrpoT59wUjSFLxFmHSnfm32kmTRvQ881gVh5H63Mz2WfGWJV97k4sMddzDRdQ74CbRrjZs7LrhtvBBs",
  "key5": "3gKrZXAgpm9AcaRBmQQRhBbKVXi7ZCgzrXTXmY6a1hmNvzhpWDQ99L2QMUuERDkmP1Dmv6NJhftA8St7CSqi7TaJ",
  "key6": "39aB8UD6yQDk3xq1ss9dxpBdfpPbQ7PNermKr5zHaNekCe4xGHyHoX6DiZDnsh35X3ku4rXgwELwtSngi2jbZPiL",
  "key7": "2y9K4ZMreTC1PnaqLxPaCd7rcFbKmC36qMpcTC9m5HZ2SY2yyy5uk6xjKbX4CqvNJp21ERBGRS11p924xnjeiDPE",
  "key8": "4HBTh4wghbGppgFFxzxsb2g4n3YkNJYC6CfhS2UUToZSsjPni99Eeq2x5ofrYpufY1PA9ScHALmGezizEFZHVMwg",
  "key9": "21vY13YmP39KwPPmaU15Vnoq6hVv4iG5e8ZmZMPVUSSDZzMSDFcrq4QDZqwDepCALh6VNpymeyLWoqbTk1Jeb62r",
  "key10": "8SmzMyvNkqxEYpUHzqUUJbB6JMhHCfwmHZ7kAFyzdC5tHLkqTpDPtaxZ9Qab4BwQTvgKAdwVAzyR9hRffeFLYMF",
  "key11": "3wph52n1iC7xoVB46PME95gGfyf4bHPb6MCqasEsyDRTHzK6MNRezzXyX6RBDafaBvK4QFhNwY1WHovD6BYGZT7t",
  "key12": "2eprQbnDMpDkuj3FzSfkwYd2x14jnmJLNQF2FVt2AmE9fVPXUuPDtK2iZ1NXtB2xm6zEiyPUAuHfhtpPMQiANNvp",
  "key13": "3NNZkz37QTYccggqFjhb3G624G2H4m1nD2Yrq12tb5rAnvqabQ8PJSA8V4BDoL1U56SgmbdVnUdPgPn26BYKn5yh",
  "key14": "2ETqwAN9nmjDCWxPSBr5Djc4kkkW4w4eCXoA8t3EnLZz71E94WbuHcDtZCBFzUTs4SA52yyVMj4BLKPtorWKGzbo",
  "key15": "5KFZ57SdR9evwshWLoVLT1GxuwSX5guXpbMKRTdCuuvEfyAL8c7WJEufT1zAEu3UZEJybYLmHMy3onY1Fcbc55c2",
  "key16": "2MWfim4Gkc8wDgWEsfeTYbofQURCeEFWNAo9fVxMyKNrW6jJTvUeV1gktpBbhbzcrG37t5oE3uscCupk9DczsCFx",
  "key17": "2sKrJHxxh6gcyvXRFBwAtnp1WRdGPfVkQAE3t5k5LG16ofPS2SGsTU1oR2EF9WsmAfTYHtEJxALi4phkz3BkgE8R",
  "key18": "4DfngaseZp5cSY5QP3p1opAwC7zYCcKy91eXzdaGB9n9Hb1F3UjmJivmawSS61xds2Y8Xyto2uAvJU5xmQDALR7S",
  "key19": "3xDwuF2i2WhDWMZeuE8kapwSWWJKQjHvS3CtoUuRgNKsiA5n6VmEKkpXFQXm3jQyZ1nBWPhtwnTyYi4n2QnDpBso",
  "key20": "3maBHCDVkvvx9j8z9yhbAWj3Rt2JAvDkw9cVrbESPGQqyfJC1DQMAn62tmwj29n78bMcgCuoy47w7p8AAaG4wBsk",
  "key21": "5u6GzeZhK4Qzjrhd87tZ4yJASq9SeizYi36iWP1bMtgnLwiDS1MWghcf2SPukAnix3kMtaiVyqXM9SHRrUutkVHM",
  "key22": "21p9oksbhmBeSM8G8aKrs7acqPBiKpiRPULBBiLsqPTqobXSnNUrEh2hSt8t71cerZRVgQnu1MzDzpMUj4U5TeKK",
  "key23": "2BGG2Uwm7cQwLCbyAdHsb7NtJq6ptyCRXPAEzHqiwkZTmprj3w8AirEE27cDCK9iiwcwhFLELQVDcZnKUccHvV5z",
  "key24": "tqMmdx8kVkVQ1HgL7v5gQroLUtV9Y2UwrhcZzsh6GPntuPiv2T18HwwgExut5k6vkkkunmZYYZV9BZtGXfPUMYz",
  "key25": "KfTT6C63ThMPc9peV9nqBpV9S582MbmDrJ4HpBpEbGqHkLfpHYJavqsA1EBHTaFSPxAmVyQuAWb2zXp8Yg2qDpJ",
  "key26": "478URQ9AQR8N1BnjNeXf7iLhhi7j75gDVNVE9zHnWBkseqeBQb9CyCZdg5McsHL22J2FHtJXzQ7hoyagAaRasrAv",
  "key27": "4KKyMPqKc1acWhim5kYSb2dCgxWrtTKkx66HWFj8ruPtwuhGj2FuM9yjfK6CM6fGYWG5j8pk7ub8mXCwsRqgRKam",
  "key28": "3DbFfhxurKNZSicEDnhR9ASd1WZ7HWkZQBrZwTRL3yr8PWkujfPxD5GVC18VqJEt5tM6VaiQXs6VXoM6w8P3jaMW",
  "key29": "26gxFCsgugRwuAc1zF3Nja93sEmc1BoJKjRxirbUvH8rEysE9EkfDxLegGDVsbuiAwvE7h5N4uvmJq3qohJCYKnC",
  "key30": "43H7UqoB1ZUWJANimxAncRbp8F43LuR6apjowW7mkLhT4XogBjHUBKGerXbvbKi3sEYjyF1J7AM1zmEzkGZRALyP",
  "key31": "2M44ji9wEChsadSjRSVTdoXGJoHX9zqW7axs5s1SfiJbwbY3QLUPEbMVuHxK6UgTAH8YjTVoujjhmJg9HZYMQgoB",
  "key32": "e8eUKX4eszHYSXxVyyzHCypThKXGZ1NErikU4aFq5VqE4YbP7gbFWYnQ6N3LeoopWmwAkrg7kPPngqJgqsNFhTF",
  "key33": "dQBGvX37jxjCEeCJmZ6B86DfJ3xdRP84JrUiAs42TvSfuV5uAwfKHRSFWhGAWg54CQctU49CSHoEjEjH6picfTL",
  "key34": "2DvtRK8zSfqGjh2cDaBwbty2hUtUFwRS2P9L7zntVWUrV48Ar6M3idyeptws8sA4Hq29qq9a6mjhvkNCPbnwV7HP",
  "key35": "3urcxy9NPpdahmmUsSYtzMYrpNxmHz6w6gsHHf3AiY8hj3N5ikqFZMXkdpgr5yUroxFohBPhKv8TgEJF224NA6r5",
  "key36": "2tLF4xVs4UqCvs4P4uyAPMiGBLWFQjeRh7vWxQbiHwTM8tytTbS6V4z6VtK5rFGbEAd2SmDSr93ynuruZsb2Gxvh",
  "key37": "4we5ceNqKHJGmA2pbSwyDjfvmrr4zAdnCVmtXEnL1dBi8uGzpJ9KJuutUv8yGB6RJ5unY2hqL381PoQ3dtrZ25cF",
  "key38": "5Dc7W2Esz77cf6rx88jvaYVmQ5G5g4fbqdF4BSPZzt4puFFp7jfFCsrwSjSLVXfAPjRrgqquRWPVCvqV9XKxVAX7",
  "key39": "4sN5cjXDoPCZQZmtcLG2pfb3fvDdzud957DYJSgoC5Sy7UTNBNXWJVckz3F3qV2nVSLtfRoH4wYzPtP9tbn5tD6a"
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
