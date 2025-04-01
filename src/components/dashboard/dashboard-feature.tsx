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
    "5hFiKkpMTERg1JFtkUu8ibdWbWecaoB3H5G4ZF9nfbxUkwYCQrEgrTdZT6Jnt1gpUsuXhhdd4KM592598PUHLSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZaU3zyFekAoF4sSWxqs5Gm3A7RGWqEbyX6WtprBkCCpwCB9ttuYBzDq62L57U6SHC2VG2tEzjgKEEs5hZ8Kwrr",
  "key1": "5bK5snnHXU4S2bRSnK8xaKUpohYExpttyGTLmvEjqX9vrSqX9YasP9yNxEZViPuCcukCQUBC7f522TdoSG3XW9f9",
  "key2": "iE9U5CiBS7ezMtB1VxuhZMhpAo9zMg75yGPtp5377iVUuPQ8ydS2E9Pc38H1gZHziuvUttgJYVzFzHLxjZzDBUe",
  "key3": "3HMCuUXqxy3GpWQGMYB3DxaRdrF63X39j895bWWcTcaGNU9Nwyuw39jxQSqKDRwSzTzcmXis98kwRPnyP6ss95ZK",
  "key4": "2o5Ek6cYLX2uabDEgSLWcvAF283mMSgwxmXMjVUQCpexEkyHyGuYarvomtQvg2a7WPJESZfySJ4Tbsbhq97vfjm4",
  "key5": "44zRhwMbVGbc1nUEqUZUttBUrrsxZuwvtoYpyo2DV7Buuk2vn7NzRoH2AexBzpU1gVdNCJz2cPjoeVAA19JG2LuZ",
  "key6": "3JkS83ZUTdUcWvRJxzqm4wJJ1wuuo8rQQ3xFYqNU3TetzUzN6dZ7CAQ1rswBcKomqU7ogSRxZBfG6CUUqX8tFShN",
  "key7": "2HDKGzum3schVchBHAT4ZG2G9EAeZ5R5Pu1qCS5CAd1aBdd3iCoFXMYrzVYYac4zR17BE7WHQKqNrDaGKRoded7T",
  "key8": "33PnaCEMSFnuDavRWiGjwry5vkPzWj4xqtmT8dY9x6QNzXCVjNupbdnDGuTJuTFmTQKgVdTTkopboEMaErw2N1K7",
  "key9": "3Q8E5zaqZN4RcFEckG13jueaV9LQt7gG2uNHPjtrPcvMJZ2NwubjFL4Ua8w1VUkZmekqWCbY8rNZzeDzuBym6Pd2",
  "key10": "51Pn7R26ntqi9ggiJza9ATYuCXfC4hTa6MhDEAx5rcT6Ew5Xu8yUKiZxMzCuSsypJ1C9aZrXMrtEQGmhbFsppee3",
  "key11": "3oU5wxQyVHJSU8RfCZfhTaB4bviZcvMYBZxL5W2QerBF8BXCx77ABAdRqYvTRcUfvpsQ1ofrAGXtkQm8KWuizofz",
  "key12": "4yhKMzGAcjd57tWBpMQXzUME7EkeKLQiFmLmrBmoTcCED9Nz8nf9fCmTmnggZNaxyHpHy8ZTkKz9bV1J3aS7rE34",
  "key13": "4WPp4LnQ8kQyZReqBGJrajJyNHHwa2XBpsShCjUDXuzBYAyHFBnAjaWG5Pxfs6hBbp9XHKJpofoZsSDUnVMUoTQd",
  "key14": "5hJPZH1wsfoK9f7PLubyXCG1ikpmqXpKMLagymto5WnF3os8gvUsimk9LeyS17c4Sg4ZNZetW3n1yejNYM8k3gVW",
  "key15": "4WVJwwaoLoKApzvb54hg6usB9XU4sT7Wwdi9fBw9DNWEPsDivEXcHqBSuiDEDBeCBCe5mtVCo2T96RdQCTSEuM2s",
  "key16": "4J4xJxEdm2aNQ1ws2nTNuqjVbtLxK5gMCF12YYyukZLKi6kqLLXovjU2s2C9Ax6Roz38CvB1S59z7cAATKe6eX2y",
  "key17": "48s8jeVeD66E4Z31x2rdcn6KqhsJxX7ZKnCH61pohsaKY38cKwHEw7KyigNaFefdgvPGG4y4a3nYKF1bCCs2isat",
  "key18": "4DJN1TLHyu5qVtcRftpZc7YLDg2Zs1XLmouW93n9TaEge9FuFr4qVV9ELHfyAXWMEKFSvj1D8ft5qKEj8UjV262w",
  "key19": "3xWWinyPd5UoTmuVdoq4Sgv4QkrVGvCdtLnxHg9RjKHbdYaKMFJvSA2XByHqS9SS2qHhZsh1gi8d9fqFKM1bw7Tp",
  "key20": "5PUj9kHQCjJiZuquepbL9JUgczc3xaYJpYK7cCFFemgi6XE5D8oHUuxyXB5PxhbP5FSmB3GJGFx16haks1re8t1h",
  "key21": "3ANefhZHtm1Fs94k6hDY4pRpQCBnwKDCeCzEyHygXb1UP4npLbwT7D9aPgXhk82xCHehrrioKgsA3BBhoRWBTPPL",
  "key22": "2DSMhMxNKpMEUWNRTSYw7otMzayiN6jf1g5pTthY73zfwM3YQcoPbPpr5TZJ1h8gcGrBbeYt46v6cHiX1eAPkJww",
  "key23": "FEWJ3Za9YnDwmECSY1j6DDUweZ4D2wSJ1fPS1eeiWEsCDAvCBk1ThPFQMYE4f7yprP5ED9HHXGqHm8fsevERC7H",
  "key24": "2u2kCk8cFSSqgdbLKq9VSXccQzMLeLXeWcoHBPEzBJbpcUfrzwtgiq2murqPjWtmW32AVBdW5LNabLw1YTKcmdpC",
  "key25": "4gWddvGPFzR9KmT5JtMsKAmfp5J8vMewEgnW5Zdh7w5GZ9AKpJbw8jdW3CUNFR4iGpkkreNdTxeAVhWHTsmLrHaB",
  "key26": "3qVe6oCdyaK7aFdeQie5VfdgWs3Tkc7EayPBZW8bVfA4Yw8CnmtSvKQm3uifhxhtzgJAe5GfiL17d9kaj7LnT2m9",
  "key27": "5Va2mSBWTse2nxe4CMySgmGmpEUW8GhVigR5SrTbaiGEck8i4tFvcZ1pGRas2T3HCVrnSFDksVZM4vo9BWh2fQwU",
  "key28": "24Q7hpds5oUKQSXbMyQtT6VgkMgZkZUaHkaNE5biBrAZ8zpLufCrYq7G4Wo27aRtB4tkduLZqC8BTn8ww2866sFG",
  "key29": "5fM6xiw7ja7SpGPuqLYxagcvszd5P9usySaTQgMDtir1Qt762uxtApSyGpxVFCUAJRQiY3qDXwSVYAvk7FCphCND",
  "key30": "5jvYufgjGw35jTC71jd72ttmwjVXy3SgqgJgFmmcF6ikyphhymJUzf1Tk2srnYjBbzZ2ATep3sz7v2BK8y74x6xo",
  "key31": "4Vr1iGoEFZP7xLYdGB3Vu8EL2Gx3JphFvJGBW5sTaB4qYt7i9V26uJyeNnjXtq5azbDSqXvyXjiYnRC1Vcx4KbVZ",
  "key32": "4dJdYTC39A2TM8K576yNCWkiZw5W5aZr7KJ3GPSdxRGPXjuVyu2r46iQnzbfGP864w8J2MCXWtYfSbn9inBN71TL",
  "key33": "5LFWnDaq9KJnt31jeq97hf3QZWbhDJ5hGcYdKpCPqAqiS8xfNayzJn3BDgs7rEb396QrqeYcrGixwenVS112bGqe",
  "key34": "gGwTU2k9Z7Q4sxB16Vq9V9BCH2cYWgVvaLUgZP7NagKZb3agkpNrdqjYzFerKh4CYLnZR8NwXbvnDfQwucyewzp",
  "key35": "5tf5sx5CGtDQJi1y6DzzrR1FsxdBiMik8DVvYq6La3gfwaUWAU4p9gpnJ62ZhuLgsSWS3bqdXDrqeHeEBGLqudeV",
  "key36": "UCytGQSUiqimAQWzx1a1Nj4WguesxiVbN1BLbd1beQk6FUUBWBR89sTeUdAncwJeWgErx55rcE1cfQG1fUe7sge",
  "key37": "4Hbq7HKGQmPQqVEZu6cscCH2T6654Fxjb91d4mW1BK5wX9SeJvSmXDhJRpcFNrp638G2uvSnoYXGTk2x5yFTHtVS",
  "key38": "4QmiaDr3uwLdBwuvVct9rJ7JyypZFJH1Jqb4PZFJtXmNkUgTN6rEGzbhVVxMe8g2FHGXJ9HGDQ3XTuNUNW4EYSzE",
  "key39": "1SgcYyUqbiAG8jSTS1qpHRfPLivShqUrDnnAhNd7i2hVkvFGVDsBqCRFzmPryQhPYDzFJr9h9wATMdHJDFZ1ABX",
  "key40": "4Ufz5mqWM4Mzw2t42gYUJ7yw99FpddPdq3bCvAG7DB1GP6nEiK9U7psyA2Fz67Mp14EDMeCsQS4y9GqrSCBhB2Fx",
  "key41": "3N9P7XkcSXeXMc5NfYMNTro2Ec4TbmWN2x1nTsSEhn9ecKLtjLdMoh5kTCLxsuKVX5RJwpfasamXA1bCpczWAWyC",
  "key42": "22Nmk9aXb2DnTMKhXBF9f2XDAUXs1dY8Qo5i9S28Ej6EBwJX8kr2jFcifUrxfXJje642iKdKTrij7GSuGonFyHXH",
  "key43": "5cMA36EqS5g7Ym7JebLLV2EPFwaSYK2ZekbTVx7M9sF5ciGanQUQpqyYaVPJ1gqxtbfwFJ1MWQRMuESSpTkxcKEc",
  "key44": "P7qt3RuSRnszZus8bCBpgoYPiry5y5g2t3kRTbogJYXPRiUtTsNXBJ385PDGdZAAmfLBfuPGHKUJSPmsN8b3y8X",
  "key45": "5P6hpB1783drHC6T13AktyrgMpTDnieNcUDvg4q3FXJshdN7aHjj3XNXr65Twc13xaZTE3axWqwPCjUys4ppTUV2",
  "key46": "bzRT5HjUZraURAKmS91nx181idD2bn6NhfupePA3BVaNtpMfBPb5uxCtqnn8xVGNy7A1Gyd6Y1hfAPmBWFiVqi3",
  "key47": "5mvWgE93Mn5LtDRvd12QuG2j3ttf3cUinAk483dHBj6EztK6oQExJysW3We5E8rGwCRJ4pZX5F2VgSgofg3A9N14",
  "key48": "2Ezc9BLNy3hLw6i5GSRrGpxo77FtuJRNFF4SH9AteNthNyemWivd6fUFK8cDGYzR7sPB8BypQyAnoKPh61df4RJf",
  "key49": "38wMxR4KkcqQ6fMX6RCCj2G4MksKyz549UVSdPiuo2svPDcYqz4q5sDdMq1B9nvRuQWAmDhrcUhztVu737SS2wsf"
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
