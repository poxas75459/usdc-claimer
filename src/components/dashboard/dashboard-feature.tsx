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
    "5Snd6dXjtF73v3eRMLEfSDDhowyh25gKhKn5tCnA636uc6Emjyg7MiBFiqnkqPH4hrm5TQtLwUCrzZxguHGH4bpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4487hLyBgyqW4EdmnqYNTeTRLr1ULAtTrJJPGfGyKHY4NPqtn9QndGqV6qe5FSXjSiYveSU1ZUa9CZNH3xjewj",
  "key1": "4NzZNj289oz4yPm329LPBF6ihBFbgRpPMLixfmq4ohuoYf57ihpNJa94rR6Vfrfun3SzT457gmCDYcg5bs3nJExT",
  "key2": "3PeFL1GowmH9wu9xdXYqbCPukvDdbyRvW2FyomF2kPt52MkMoeJmysJEK2pvL3aFaCVumRsqaFRFpRADEaqNAuMC",
  "key3": "4ukixSs1eHAM9PT7zgucEuLHoGFhVTQyKt3Uacs6iTdxrFRzk42hcFj6HRtw5LaPPU1Je12ccaEN6nmzKizjuW6W",
  "key4": "21q9HcgznHAPVUc3J2nmBDJFQ11rF2D2MHQ2EiafAryBxKKAqvp7Ua26GuTcxuX3SigJ62dAXWNua4r6m2smS952",
  "key5": "4UuADv5PNRKTvgjMMvHJiXCHaFEu8pMXQm7sQt2Msxom62PmQwG4nmjSkMwFfyabuJyFVfUhYxhPRHQ3haUMfefj",
  "key6": "2Yh3kqqqzmopQtBezbTVLNn1qcroKCW2SVYsfY1NouSSG1Fx9xaY8U3az54b72QNDncfHNG9HcQKkLfQtyzx1vpT",
  "key7": "4sApwMDk6dzRPKGVaC4S3bPiRsGo8nvPH31bAMyto8gTs6aVU7kjrwCbf96A57V934uJevXsNYyewyQpfSCQ8dNv",
  "key8": "2nUtK3KjPBdXFFJPXzGJ6xZWvXhJD8dVX6jrgiaNmpp2eNDAtu7EPjzkP4e3HtSuSxFPCQEqLfe4eDVfQSHa6dzT",
  "key9": "DE24Yo44ogzYedDmbCiNbLZQyEkM3uEooviP4jkMG3vJwqLwt3QkXrGNH3XovQ8dFC6yPWxXmeNN6wz9HucjJ3V",
  "key10": "Py78RKsPMXCLq7oTiY3PuXSKJvWrP3H52GX9HgcNc2xpfUnw6kU3Shi4w5tCSpVePHEwohgebMYBKS1K9ut7iwT",
  "key11": "3ws6GfwKxVTTL7Bd36fYBte4qAp8wuueR7BL58JZRGxELRfwn5CLUCKjavqFXbagcqLTpfQWdoxSLUJC5cs98U33",
  "key12": "5tFS61B5kFYz5QsZfWzcq1d3iUTyrwNXf8Y5mHrq6N1td13D3bfASQ5cpoJ9YH7H1EA8pFGF9j99tV7cNnaEK7do",
  "key13": "X9wzncVMn9X5digciT6KrJQYh77WZB9zieVwf2zk9D43SZSfzdZYPXG1aPkV16eWnRz1oayqYpoFXF4CQJb2Bee",
  "key14": "i5H1vvHiVx1bzdELoEyhnxfFKA1GqtzDz54hTWMZWKjKkhxGDxF52QDjny9qPK2BaXEDd7R2bz8PcSL5ooGacN2",
  "key15": "5NSjhEdTRk9Biw7oSjfLbGTeTKmebZVtPy4abwnFLg5NZ6eBaC6Lffp1gNu98tYQ5Ay7pzhsDFtgeFXFiD8UHnDg",
  "key16": "3DRwEFi74teehScu3fkMfPmwxUBdyB46N1EDaX4BP69zhXWimW7mF221TQ2LMEEuAB6k5mcTzkCuDx8qL7FkRV8B",
  "key17": "4SSTdrwSaLfUbYtDCR2nag2WVA3t6bmDjBpavxbgcFqkN4R6nStMMTh5aZ9Kxmm4VuWxj368yzzLYoA6AnNDP2Lz",
  "key18": "65QkWeEKArQaPBBVk62eZVAsB27Jp2TdfHnKJB4Bi1PWEvwNUmEGBAYCaSSKtHjJKEGdsfCbngJkWQopiYfDuTN3",
  "key19": "3KRy35wGoPamqsvSeJRZNCKx8pQpkUgqXhkvwjYbKFcnQd56wZtLC3sgt8e7zpnjGwxR4d3oq8jpg8wMEGNJGCto",
  "key20": "5bJQdYDSGday6mWnMVSwd3GePN99rUoTRBbhAaAmZnBYr2aKt7GkzToX79S74dHYsYZ1Gpt6f8G2kZb9yqiN4qBJ",
  "key21": "64Aho6D37g2sboe5Xkb4nRTW1B6ezAh65XE9SnEmzMKuUfmm6JJ1EK2UpCtdSAnM1UqcnSbbNj7qrQy2Dhp7mYwd",
  "key22": "2k4nLjSBHZ98vvoNVK99fh7eRcoa2xKJjqiuqf78LBsfUcQoxXLKdicpjWjH9gaxVuaBJd844oX93j7oN9ybEtcZ",
  "key23": "SekRPWnwQszDBD1pFPBAFbLvbcCcjEkdoSiVrqsFvmMqF2sc9Z45wo3eR6ZAcTMBm3HPHYqdxgk9EHm5ZVqbtFo",
  "key24": "411msf66DXSgXQUsdtwSam6X3HG1DffKa9JspZepPdvJDXWgDfk1tEVFGig8iqNRZjeTSoHKorirGitoe4ciokJy",
  "key25": "3U9UZn8pspKBYkkwpV6DWVHJnt2CMiGnWdgGwm1eyupr7b22aGrxtVbG2prGLKMzoaWAndyBVjPQzQdE4shpKj34",
  "key26": "2bJ1ayQ6pdCEio8dHAz15bQ6TFQoHg31sjxPUGyYDscnDTsEJF9DewmH7QfvUVgwXSco61rayhCxcsKUfhRFohMR",
  "key27": "3SBEtvENsGqWRJshnPkcHk8ebgEvx63E49mYBCVwpeovQUPYWhFCT4oATRiwdrnuqvr1gv51CttX6jdmRagfDRin",
  "key28": "43eJgri8ShCQhUhuAXDb8o5dKoA5iJR7dwLo8haXSBi3gN9yEnbdmsJTBfMcCTp4YPf8UeExKEUh3xz8SPfDXEiq",
  "key29": "5Qzboxb4XEdVDwB6RNNJGE5LDdgayDc6c8A9KY5FmHFtM78A4po9dqAhNq64JZ4fbaVLnzUGRcv8rghCaskhfBAj",
  "key30": "5AdACBowCgm5sUzd6gL3SfSQcA1tjheeXNUai7vshs6fjDeZtLodAAoUosxrDd7C74drq4ciP9o8dnqqJCZ6i35s",
  "key31": "5udEwcW6GrEfDiV9Q4KdXG4RCLU1CpPcjZ33bgtCxnmD1tvWhsFrmanWUGbEPJcKEiVt8DhYJYXZSKkbB9ouepca",
  "key32": "58auq7DxqeNryKCacq8wn1ccCVmN4WHQgCdfytNeaE8FbU3HYMF5z9DMkiTA4xfVppn69oeRdA4vKxbnwBYaNK1r",
  "key33": "642AjiHEv9QAfRinNnfQP5iCTistp1cMkpE8W3GSApeLytUGX9ZxF9QYke5D9o39pMxFkT8KYTjzaL3V7BWzjDyG",
  "key34": "nZ46LtGmVYLJXR48DAwPjQJxotKfJUENxbyRWwQkV9SHjezmkgm2pV9StbBGPWpoJqmp8k7oqcBD35WS6DoKd4j",
  "key35": "hb2rvgzZW7R4Z1p1a4uSD9ueAgBZjFcasqJofEgii1zJzr3cFBA9cnYnhYYcsjYKRJKr7n5dqzTxM23pBsE8Xhv",
  "key36": "5zKHbZdjrtUZhuncjq5vwYxSrDnEoDWHGNNF42QLBp7wmXiPk1ziNq4JBVn18iEhcpXGLzjuHVkGYBdZbqUHNqGL",
  "key37": "3di98TesZtCBieFmkdBSBTjTxwmZXmHEZyuKU8HreXnAT4wvjUXxtY7EWEKsZAiWJtknsBsPz6uRHgBoWuHTEMHw",
  "key38": "2PrMx3U4V42mcQsbMHtUAFe4Ys7ry9TPEaYwinfhbZM6GHd49j7VpzTWsEdk9vLn2VgQ3gtvAffrTykJgrTX7Aae",
  "key39": "5NwggKJvca8BvE1Q8GfL6jYPCZt7s42q4ARv6trdwj1AKyM6WpsZFTSfxYyVkaZwXcWwLaFQZJRqZbArFp9auQnw",
  "key40": "3Z5wCmBfQQoc5an3JEEiSs9Dk5kCYdJ7dFKsk7xkZWAi7w66bv12kYQBYEJDnNDZ7XyRYEc7CReu7G8MY7WEub3f",
  "key41": "4cRSkmCjzR7aCv8QJX6J9LYAKiVUvHYaDrwRxv8D8fnCEnr9Hs2vBhYvLmU5u1QGQ1JswoirZcyf2cNeXFzthYvo",
  "key42": "281akmyPezg5GdBoPWEx7rScYtuRTCvPzgzXx6S3KEGWKtfRg6F1uDoc5hEwzvfm6GH1j1PsMyDPfv3cFkWsJzTk",
  "key43": "gJE6AEfkJfKKntGWoWoGVJbTSutntNF7eNTiHALTb6o9AMPmAseD7u6NwvSh6nBdTmuC8gQ7hJqwedfyjaKxhGb",
  "key44": "3Mae433Ga5AwJukhwGL56ke35GFfN4nvRW9r9NMjpx8hugMoFXhEXHK5p5Fh3K4U9zJnTiu176sQaTHCrSxahwgg",
  "key45": "5zCar34St9BNyFnZC6y3jcLQeBNPnQ2532TsQLwyHYusfTiVnnC2C3oUsUpCHzwSwtw2PRPYAEULNMcKtuZXUiRD",
  "key46": "3HkFUzJbrMdWghQQftZ6hfdvkK5jntbaMf7TuhPLipVszBSu9wC5YZWJMzokNMCxdJwgvoL8EaxiM2Vp5DCe3eDi"
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
