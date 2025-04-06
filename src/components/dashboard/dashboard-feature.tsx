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
    "2yVcrukwLSi1D9suYbkHdNVp7HqsSWGZTKRn6raUymqU4JV3WTErKH75UtBJvA71QoETr47kJN3df35gP78YcYQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdvnNCjGQAD5u8JBTXGbQ5EtzdbWrPxH7iFjQG9GbKQ4Ze6zSnMc2etoSfnMLZzDjnWDygFNeAt75NVv3iahpKE",
  "key1": "2DwFZxVTsxKYVJ8om1hdyy2QHHnM9tYGX9biAzcSU3NtSozdPnWNB75KZ7PY5Uz1PFdYKrTt3HX1fdmPEP9eAM7R",
  "key2": "sNYqyfJPciHYLDWEZUnmYKGJgnFRR4iVXZyLDspokJkGQHgsPQx4se3hUR9qtPrQkxnkfTkyAo9DaRr9m9Kkrws",
  "key3": "28VL24YnjTAqYTbZDswMxugyHjCgSdVcjFwa4z5RAnyMism9E5EvVnJwvvYSXdFJFomnh5HdtrvQ5J1htN73xbvT",
  "key4": "EujED6UhUZ7utHEHhi86fLwuuX14qLzRLSE14StxApgwYzHUUqyvN2bWoSdhESnAerkCrrgUsNvL7QDdCZwYaHe",
  "key5": "4kxn4c2BRM2Bj9UqmL38mmhrs7LKM62Uea4MnWa5SLodSgBVYMA7Bqm6wJCAfLLFgHzGwGUSSBYvrVSG9skfSsHh",
  "key6": "myQzs3FFhtPREoLzLLuGQ9v98McfEKVna8o2L4b9jGWJFFNx2kma1d57H8J5fNTU7ijtxYMnNLZXCaMf142M1Bk",
  "key7": "3f98yvgHFrXt5yKtqu98v1mPAa7AbZZgG5cTLYSu4MBeKtcoHutXyCfnMYhHkdxWS3CrFTzeaYRq3ymjJJ561nBM",
  "key8": "3DfQsEhQVwm7QB2T1KFEeEh9grB7x2W2NHiG9BCBtgKDCwFng9QsEb4FuF1TEZjHofDVA8nyvsgwygG9Sz8DmdpH",
  "key9": "51Fssshxw98MhjjHn3t2tn2kZ3F5zgiNo764i8GvMcDiJjUjmS5AxRRhCqMT8FzLWdvrwNU5H3J6RXggGFxDyhLi",
  "key10": "2nzaKEMwFDJC9tsKXjQie4tkSMYoXV9TgNR1jsFKfiNNQYD63KFmohj1qM6a4N3Guu9uvJQqH1r45JRRVX7EwUbD",
  "key11": "3Yp1kPuN5sDBrbDCKjVQpxVXdZsUQt8kHzQfwuQUxbKECApijVeWCiwz5Ei622FUtynHCTb4RQqe4rJWs4CXh3jW",
  "key12": "39jhLBkCWuBGgMXQNdre2uXE8cWrdf4gZWFfPECHvHeYQ3QfhBo3kRtVAQehhYxJeSDZCGv8Pnj2uNqzEpGbMqxW",
  "key13": "4wpF8j4B8QnUjfWrWLTutkhEFiocaC5YA58BxdSFM3agtUTgB1YSwL3UjymoHMcXRG5TiaULrFhwT81chqDL5Te7",
  "key14": "iCiDgJwXXFQ7Y2G3sXftcHZDwugrM5WXf8xsiWUXWydaJ88fmnafrcPBTndBKcUgbTvv2VycvuzEhui5qqW8UhB",
  "key15": "5D1roDnbECRXxQZsh86yWjpuMeMkDEJjSZo2HWeacAxGbWcdCsENB4KA6Pzs8Tz6FhfX9CsCVUAubUC55GofYV3e",
  "key16": "4BTSmdcXSXRfuz5v9pJWVFG3Gv7MsZqQLTvZDfYvKKz2SEWReNhV6pUWtpxGzmoyHcUwnvmtaeEAGsfRiMyd6UJw",
  "key17": "54hbSncQFSsEMhU7WTG2mvahTdxeiqvMisaL5sDYq3xGujneWewHTA6NTZpPkJ8thBdhc9xH7zN35o5oUYXTjTXF",
  "key18": "2tX1mCX2HhiVHzGsSZxDkAVmrgtvP9yJ7GM1u3ivKAW6KfrB2q9pw83fpZLRTrMNmwyYzWmKV4nV9vnUpfpanbV8",
  "key19": "WciTkBwsZRGgFxxCCoZ2fp4fJBgGaob49xjhdFpoiVErvGJkW7VJbrhcHJX3rqmiezkh4d8nMK9d7abHJ7b6jxm",
  "key20": "3v83BF2Cz8efPFzGJBvnSaguPeYazL7nxCTGT3ztUMcYec816VPWKTZfDsP7dhNGXmBnHPh9Ha5hg28pdficWEub",
  "key21": "7Ffv68q2H9Rt9Q4zaycy93GuKG2gLgJH46jbmz4XmuyTecdwMZuV7bD69SrTMBsmvmkUWzzds6tUPUQqnvh3ZWC",
  "key22": "2ozpx3xPaVmSBDqVhm5mAGEqprSLuA6soTPxS5AkPEQSSeu554RQ7H8SiREmEft9cKKjwMn4SSQDWeQkkg9pZ5fh",
  "key23": "2bBp8N1WuoDadS5LbvBT1Vto8GgHywWzAbEPoTWLCiiCDUq1kXrkCXbMZCBsT2MBr9BcPtzL4RnPnAxBUkLd5kGm",
  "key24": "49RtuHiUkixu3op4Y2d4aajWs1oHkiM1CGitmWkM768Nbkwpkn96QWw1P8RMbZsNuLR2yvkjDxztcxGEWdL8ML4c",
  "key25": "21wxk2md7CgnKke3JBPqjfnHN4PKXPYZ1WLcWPhRbNzucD5JVoyfFRk1ptbCs499mdheJe3Jat4DoYj3cD4ohjMp",
  "key26": "3REnA8TG9usjkPwkBmYEBXaLLudNXnLku1ztPB9UutGGgM7GjDLyQuCggEqxHK66SCTCVHLSVPsc4DvqCnbqf3rd",
  "key27": "3hj1py6NiF3Cd88MMziPVhAFzaf5izRfa5Gp89gCZ1LvJxV9tYBb2ug1j1GrkuCX6gPVxhWXHCDdMsNfdJTZz3i3",
  "key28": "5NivzcXTyM2tCCvvNdnrErmdbdZzYkuZDrtbW5Ne2jn4qjGf3oC46wCcZ6LfkJ4jyCipTEDCpEgBMmMXQCQzxqfE",
  "key29": "2SnHGK2gjCvoGxEHzBy6vaTMTND9BGrpu2YekNooRafUTxVzDiA8GtRgQx5UZY5NqUNNToQvht5JLD4onRku1qGs",
  "key30": "3CnF75qjvM4pwKiUnChyX2DBEacLiDw3sHFgDxH3Eemr6zcu7GEUbY8ZwzDyBHg6TcHmreQb74EWBTQk7J5DVK85",
  "key31": "cFJnjNmzk9wG7oWxtLwXLdxQ6RDvvDBQTmqYqM2oQyoeLNqCdKK4xmn1y8ieboaHunjz97atkBx3AKFFLtgPfM8",
  "key32": "4PuX3nnzTM4r1obbdSrBrJzRk62XRCRaJmdEUc5UxpgwgwQrk4f1rHom8HCNovFmo2uKeCDjd2fz5npF4GRgUqwB",
  "key33": "4UD44rpQEWfqazf2iTkjCMF6G6Yi6JeVF1sCe1nxW9QP45QqtRhf7RtEoZMq7iUcm98r2AdZV98FyBAJZupvycyo",
  "key34": "26wQMxokk4DJtyxNU9n8AknQXEVh5puQ4iS2oF7GMWDHGj9xa39zhRQnsTEhAmFSSN7yBZhhAPxzYvErd8rxjeW3",
  "key35": "5Ca2NVWCuKitM5jAbs4R75cdCPFyrZVnKQfrDZEKJRBDEz45rSBPx2EtAtRWQh9EAHhipGJAdzE98wtH4XDVqch5",
  "key36": "3tr3cg42RUpMpDvfEfAPS4RcyNWkJc5zVcYR3Mv1rCW6V9emawjN7wbdR4M4iHS9f2TxZL6VeWBBCk6r4wYkUcLt"
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
