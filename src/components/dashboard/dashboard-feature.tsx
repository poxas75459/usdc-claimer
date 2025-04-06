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
    "5eemxiSymaAt4hhu7jZYaa638r6Sx7cGWTUHaWay1zVxSBqVkS9e18Ny6boii1dPJbXM6m2HkYTARHt9acRDaWtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PuaLv8pCBGzVqP41HpUUTZ1UxMpFVZ4ArCJ3FVUKUhXAsMceqWhKkxQ6JeG6sWoMVPvRHqQUqY2XzAQeZ1Zf8xk",
  "key1": "3GdcJw342knbRoyZTnYVUSVbXfgbnBtq1NjLXn1Dd39xHCDMuz6z8MvjU4sX2QTrjCVdbBpXWiWGqAdbB9nAc35j",
  "key2": "4PRt2cBuzxFyLDKkAjMX8Aiezuo6wjzBJD2VdvzZB2UaFGUW7RTZsES94VhZEi3X1H84AvDXbv2EsKydjVBxPG7C",
  "key3": "3FViGoivLcQLvhJBS7BNM323ZTL3xk5gDUgxkAhgoo9EMCPqz5uftWcZhgkvMrn4b7mzugTUpZK2B2ck6edv9CuM",
  "key4": "5Zf387t15rGnPXS1WNyaiP6PPxhWLhQJejEue8M9J917t4ZixDTw3sbphQcoTbCZa8waM26HWcN1Xqwkxpi2DGVg",
  "key5": "5qCfLsFxrH2a3qah6Qpfdt8Z9K1oKzLaKLbCY6yeb2m71rAWWAErNPEh8FhvWEw1o5HMUBH1aQZRXzSvqPNcwkAe",
  "key6": "4oXm7xzsKaXGqzaJXjCDqZ5yvbdzfEGc8TbSnnKsrXtpThGSjykc2gsjkr7U12vMTjvyUnTUQKiESw6eqVXa4kFZ",
  "key7": "3bq1hWCyxAKoq3ircNBnmYCMRCJgVbbLi56C5JbQbZDLiaLpt4Jn35dALcmR9uvYorwDUKV4CQt5WtX1TYvjXWfa",
  "key8": "2dZDYDh8XEZ7qBcVDp6L58ni9dmSevxK44y7z8vUPqYDJocSi1okcvX9g9fmgn2iFVENt1BuHH2WsxRVDGomp1t2",
  "key9": "2ceiF9ktw8ijzGNkE7bKqTuvsxkY3A3M2vfcUM78KN1adJLVUmMDPjwgnWacpdAJAQsQePDv4KMobrpzyUDkkftZ",
  "key10": "45m9mMNwpjXLix1Mdt1mpY7MTkeeY3LPhn7cNp6cEDg4LvKj563ja9YMEe6c5dibxCaQYbwkbDwtVEpGBeyuefDG",
  "key11": "hpWen4ufxUfWUATViXYZcPDonS6WaZEoBpgMUEqRXF3e1Nh5tRhtHtv3hij8jtadN6RJvfYYMiEwxFRV4bm312A",
  "key12": "ePgeYj3UGXKoLREVCYHHuTDuxQx4oaZN1zxTrZjZRodU5tQkbZD9T8Fht86aZmxuc2yNrvJMMJBgPPavznmYExe",
  "key13": "MNdiK6Hivw5GJu2wu4D3MhdwXQm3BKPJD2KQ46kDreNPmZD1h9juNysohxf4cY7imQppVYifUomSvLbSgCubF7t",
  "key14": "c5AoHykb9SFwcnc2nxTcRsA9Uu8cJqjRUSgi5D5wf5H3HBV48YaygRp9EmspX9PXhBm1xp2HEHLhRo4PivnUs1T",
  "key15": "3nSnpbzMUqv4czr4udwuVWAfyWLmAWyifekXSZ7k4xeFBtwvEVn8YLGpXZt1bvQs74G8fpcoYn3GdobndDMGJJTY",
  "key16": "5uenprnJL9buZ6JimuHAja2e2rMNTLVd7FVJq6n69KS8xYbTDoKU2WD9MpsQgP8hwQzqCHxxnhCbr67MqNZs6Tz",
  "key17": "2ALARCPbz6jNBEhrEuuV3nufrZVBEETKNWxvBkZTsaDzLH6nnRLCs5BvMHQoxqCoBXsdxyV5f3DKLDbR1zy1reYC",
  "key18": "5Dr9zKxkUGwTqGJbidBavi8i3Uqd9TPjUKvC2LPTd47t5WJdbuCxfgcY1bwufUKmiGNuUWYQ3oPQ5bS2Q2v4dpAY",
  "key19": "5iCuvSpmkgoyXJuGcoYey69crNwwMNMTQFqr1HpHkRpesVbvcibvGuPDvXSRzC83Ukzb1eLTZJ1mTJKjx42WeJDd",
  "key20": "5g2zNSnyhkDS14CjoWZRLub2KKKZNXbcKh2XdNnh6hQiR5PsiyA4DU3ps8MqwGRXKxfnh4LX8tzqno24Mpz9rPLX",
  "key21": "4bkouafJeysEweNqX9x258LprJF9PdX4Cx6G2CkY4Sd335zMTPsNgGLGGkAssNwDpNf1x9qfyNdQqi5D7FftJv7T",
  "key22": "oeY2v38hMDpgrjdkMHqxVimTYcBq7KdFESNTimnTjZCHQsBh974NR46AT9FrEBHEwjN2ujXCwtFtre1S4RySdoP",
  "key23": "2LPi5XQZViLjPvhQ61KiR5eZeD4BZi23hNhkP2JEd1QG2z2xg1Lps3sE3LiL5GsyvCWihuBcrSrR1mr47AVhxAjv",
  "key24": "uTzFLCLmzfFJYU29zryPDiXVgRQTumeVuN1uqUA4PTQBa2EAcDuWPRDPq8BuUxpSxP7pbWop4q34XFHGDuFj7au",
  "key25": "44Q8GTErwBv8bQ9hXQ9udzdwf5pBCRTAzPHVhpCAE2FNQek5bxpypEao6H2vuRhTQvGYkUwNcTNcTn54fYQMBjLf",
  "key26": "2WE9nWwM4jK1io9S6aZSzuHFwnmTvRy56ttpbN7dL8zXYAFNAsfDMSbyvnDJjJ4cNXZxxWtf5MUgjGiYfHzq36MY",
  "key27": "3MwXFV4S3DVgemEnQmELato6h9xXuN2FeQmiAno9wVuTr4c6G5MZH4hjLNTXiKfD7PaiA7g5ZLxqsReWiJgtJsjn",
  "key28": "5gMXkHRs8p8gCxZ99Yi7RmkyKj33T2pRR2yvY52KwZL6VC8xGArPzLXzDCf5p5qTYpVH55DbCFEAvrYiuQt1jyz8",
  "key29": "3BssSNRER2bJZzga1dNGTRevcMhb1K9MobtfVR1wmcKqH6D5fuNh8t2zF32k1LuYC4TGPn8DvC6bAVJr464rTsS1",
  "key30": "5w5JvTGqECt4L2srjQjdmSQEAtANFHuzDhudEUuRBcyh2kJXfEBguQeKt8r6JrFKQeyDaURhAFCejXYcQHCHJ6PN",
  "key31": "221y8nwkBjd3KgtvoXc1jdNRnSVMCRinwcuJoLnJUNDYWMYZTFBXNHKbhGSnUvwZTbj8cGBA4eGVnVKqHPkfFC7V",
  "key32": "2xSAZ6kwXRTC4TqvaMARw9t1Ge4tEMnzYhABrPUa6JHoaikLFwH5SdamCQ1UB6tC7uw5exPduB3gQCWn9wbhkWLW",
  "key33": "56xZZQ8uAFc79QG1LhTjycDvhAa4KVEqsts1cqJmeKjxr7nWZp1PhNUfj3A1boUL4X72cM1PaLuKnbNdFWkmgb8r",
  "key34": "3gYUPAC6ecCN86XCtk88LhRDbt5KzSf41YyhpS3f3tENevCb1KLNqtpA1yR8caRhfdML8hEiAFL9LiU51SKV2d8D",
  "key35": "4cZsFwz2gjT5ECHAkm6q3B8QRduJ1bbKRoMuKih1F8J73Xj662oDRU1itDegnAYcovSh9iV626dggSkJ6Kq4tPMi",
  "key36": "2cMH2tB9BPLD7sNRythU68wUDN8GUmABHcGc8JP7kLx6A3xdLizGq98Q17uvBoG2xuVVAuiTVuWp7piiczbE17zn",
  "key37": "5pqgdcmNBuk9JE3hcAdDyXg1Rpvo6Yj2WBa8bytDGVy1prQ39qdhgWQnuzS87DetQkDhQ6czeehQcZCrRgcPfu1y",
  "key38": "3Dyiaf2kynnn3yiMuYm1jQv8WkT7fdPqofj1ps2JPpSGccciugqdqd6xUfySC5sWcy2SyJroWXjUq3MB4K9xnxgP",
  "key39": "2iSw1QhhvxoKNT4Z6X9xrWyJwpNK6Q3MgcZHHHBfqTw7DYb7M98VwqTdo77HZQZLSKA8WK64wS8SqJRwYoG5jEjL",
  "key40": "4qbQrGjYQHdDtGHer6DAhBKUczYwWCojaRPMS5udvBrTBPNnRp7MtK3v5CNwMbPUy3RSzrwVPos6Honyw4YuDc5z",
  "key41": "BAtCiWLiS8qufmSYjgrqbMHCiQSHXi9M5EnFujExKv2GBn8dSMscUZ243hqPrN9gfNnLC4bVjiKhTp46XwG6vhi",
  "key42": "3W7rdhMJGB5gs27uZyjdi31vCiFtbv1t7EWTPu7AYZV53EWbVzJufC6gPZzkQLH6BDaaKbDKJhHWfCmEdJfwbrSt",
  "key43": "areFcrpFhvzZNiHtH3kMAPHWYsLzvo7nfKqX8VdQ1rQhw4Uwn4fHb55SfV8NFyayMkqLWBhVBa55iRAjRrWXgKD"
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
