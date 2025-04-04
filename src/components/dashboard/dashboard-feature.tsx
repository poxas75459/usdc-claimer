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
    "2SD7HgMfR6SZxnw9zBhe1k9NybF7Z6mnuoiKbhGTWy5NciKqH5kzqHFc9jRMFqLz6ioNXwpiwMpHBGadSi5nHv29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z4wpX6USg4pwG2Fron1A7wcXmBjCvnVQdLMnAX71aVoQCk718VRX7f8yYVUZxnz5oG9iVbp8KW4uNNLLJpUKnXH",
  "key1": "3HA5Gn8CLy9tazc5PkRTaZGWcNCWGjWRbE6h2EgAxg6MGXGq8g9d39i2RgRSeAi2xAGwUXHnvVifVd1fiMBKANSC",
  "key2": "3jaYYo9YgsrH7JY8BHBr9ieUHWdtq6DC7q729oh8MgDutimnhJvPYMAzShydoLSv1eg1FWNjpGerq6Kj9yAJw5mK",
  "key3": "3xRiULq6277SnYZG63EoKQc5pbV7nco1nLFRvdT1UdWfxc3SyhuxjDFQrC7eDNYRzqp1mSJ9a1F32PnunD7rkrcK",
  "key4": "5xFGGrB8Zt6AsYax4oE7zyvVrXiUxF4dWaembqArWJYt7sp2w6ntoDbFkAYvGuzN4znD4yfAw7vtptfZeyLSDscW",
  "key5": "4hmYfhTMzCXmPJcDU6USA94GVFFBAF7PbvzZW2ADzGtHGeJrYYGxmmCzyD8aD8kWVHXuJ4iyLpLw1h5WBXkmKj7B",
  "key6": "5WAC4NWuzHVZJgPotZCni6Ywn6JCvnpem5d82TeVNpWqbfEJ1RDdZSBzWtP3RrVjfabUy3K1WuLmCAsHVRoRNkR3",
  "key7": "2eJUCSc1PGBE5BBSfWEbC9dz9XvYLmvrzJgUxDbevBv8oZg9spdE5TpLJWYhbfsy6XYVTp8vLU4RWjTcPEFajGAg",
  "key8": "TUm5oCVQLRMr54cWvGqK7RqSimpyfdrEMmeviaL4YrfZZQqv2MfG4ceQjAoJfz4eZSq9BNsEfRt4rxziC9bXWGb",
  "key9": "5gGni5YGWMTegL2hbnidp6Un9U2qi4SUP12s2feAxvshWnSYNrooA4r9QJY5SW6XXvNtBczaPCMQLBVDFWPTqQbh",
  "key10": "2JiAZBrb1ech3oxXWWRfAnS1SnHygFJ3HcPSCR8L6mqryahL5ErJGMCrbVy4EzmV9DXKDgg9PrvynMdgVC3HWFVT",
  "key11": "4B3jiUfbvnrvWtRHxfJThrEy3UPJtWeu9v8HwqUBaDF73UYZwNiLX9hjAUCmj6Ppe68JZ2gP5oDZaiVkMt7D92L2",
  "key12": "3dEZpbwoezuSsLXdbV3udi2f3Xt2ZxVrS6T35pRZgWg9d9x3uyiZTzjB8YtuC2ivZUDFCtF4Dz1D5KdXc6DwDmDo",
  "key13": "R89UXg8DCPttZjKA6nsxXRsjUvWR76DXqTRrtRoWrqzmo4G97jCoHvKtfizr5rAA31eqQgoAYscETu5BiSgK1cL",
  "key14": "5c5xZ3Hst3D3d2eUxcqL9wGEiy62Fevj3z9f7gBvkgoHRqW7LHKSRyKXa8yh7CV5AWU6ADU7za3S2UBm2e5o7PRV",
  "key15": "3cu8SYh6gZ9mcGHGpJRFfjKrmem5dEdZT1nxraKFZkqzCJWzht3PpyZWTd5N6sFG7u5n23Jsa8Z6CGrCuoP2YA9S",
  "key16": "4b1gHvdCM21JGbZ1DNPVPUXrNfwdhMVSaXdrS6Ce2icQEKUkLfAqv2KwMCockh4EYi5M6rgeNtPMLcPdEpxs4GvX",
  "key17": "3qdF31TcT1nvwBWXKjBnQhaanWvz7oMjFrVCxgoA8FYpsbY6MdAAXquPaQxxU1JuTcpdWBeNmEjPwZPSJc5EU6GH",
  "key18": "2DHTYn7zDpDtv7ksSBTXTmXLyQxuuXREE6TftzJixWqKC6XzNZzjHzL4NuJsMaP4QRd5pypr7aa3oyn8a9Kqdmvu",
  "key19": "tAAibRHXU8xjugHer8DqhBf3ckrgSpEA8gTW3fXi37ikVWXARnD651AukwBxUsCPztn8djkk47iGDsNNMqHnaNF",
  "key20": "5HedPjpzyq7TN7w5YfZDHvsHaMnXNAYkB5sQub4wfQQaHgeXDg7KWf4MZHrVFwXMc54e9am6r3KjjWTuZy9UvLhj",
  "key21": "2oCFQmp3VtWfgHHzcZ2LhhpUrNnRxLq1aiZHSgZrBRJgDggoW2CqnQHC1Ms9GqtUx5sAaJJTLhdUz4kn2RGMtP2S",
  "key22": "32bhxRFJx3mgdjd1qcCdJoKKBSHeazEnLug7oycr9LKZELBNUyScw9Q8nwdiYd49Z83JkvkQZNWExo4o4bV7iCBN",
  "key23": "u6WyUEL57gxmCegech3kvARhV7mzWZwCVy2BiBr31HyCVW4sbqeTjLY5LPSXB48pZuVCNH7juPh4N1DZbh8jcff",
  "key24": "3mH98oeoPerVLu3VfevqJ8czcBtwCEJL1d81pcjoj9DyUEKucjY9Dw4BtNaYQK2nKNrhVnC8tWhFeJqQJPevWR7Y",
  "key25": "6337Ku2bvJ28nditvdspXf8h2GFsw7AqEaDxPHSqVVd6hBZ7BeUa3nLy6QWbV2HqWZqvHJ1xHtSUvyFLvChc6hPC",
  "key26": "39LQVsYoRutKEH65msHUc8sUpHetJb5AtQ8wkpx6SuRJ2PW7apThwjhBtPs1LPf75Z5ptPRFoiJy1RAzF5jNRhX1",
  "key27": "ywbVt8JVy4zVwEKDd2dZsPHTikSvKeEuNELZR3fevdU8TXZfw9qgRkegqddQ3AZGE72wFxKJfH9xdKzX4zgWL7G",
  "key28": "4kk3wPGPs221R1fZQQkjZgcPDL49L9me9nzBJWYbZHZAsPBKMQVYMrrqWPN8YDEWnopXjU3CbkrRwTt5GovS4Tqk",
  "key29": "2pcrGM8kC7cAexQx2Xjb5WPmc66pDzrrVxB1JoteKYXrsNGvDtDBHobg2Limp2Y1kxQ4SjktopAUuYkJBq9N7Cf9",
  "key30": "4yi2Doe9hh5REoVE57ZNuXgmH26mnzLL6MpfgLxWPgF4gc88sSb2ajn5ACGxHqJngdgQxqs1hjvwbH6PcpAEyprG",
  "key31": "2i45QqMuj4cXn4XGf4korABZXNCnHiSog4TzmGoXBvYVGCLDpRk2B271ytQnWLpzHaK3g3mE9wwCreYxnjGLWAR9",
  "key32": "4GG1Zfftq295P7izBRS7v52VR8ASdzd2uVDCKoJzjMjgTkjt8r2qPcXkYGF8AhpZFic2FJ71ow5rAZeTaTTZ3Jdb",
  "key33": "41JvvJL1ntUt1K952XeV2NWxx9QepKD3nZMPv3WJydRk8CsdRMWPWiXCSKyLBg5YATWjv4RkHr3k3AKVFsSgYZkd",
  "key34": "2TAJsuZH5XipxcF5NpF6jotmU9PHd791gUBq6zHKXuDjxwBQR69jUphh4hSB3BS4XqYVwRQa9ju3erKM1oxXVtcE",
  "key35": "2uKuB4EbB7Pa6tWmph9312ZQesiPcPzH9JX37aK7mTSeFz6bnnUFUcVXFs7skrp7nU93LHAzBTVsQJiYTFbDmmE",
  "key36": "3YCvKSP2tv4z95S61vHKR56134DjZP9vS61MwGpNfPNHATXafAJXo4f7fvrsR6MXa1h8htQTrMjnduCN38eDC6HX",
  "key37": "3K4XXRhTLkC6LATt9Bkp8QC5x1QpwGWX6dGtjcL5kBKGNdHtq8BTkUoeKVd9DWrndLdSa3C38TSuykezwNzWgG72",
  "key38": "2zkNY699eX36Pk7kqUqZraAv21yp89dwLJGacDRvzPnaUrbQYNAcqvZJ89ZULNcbc5Fgo4hKTDf6hwH6ZPgLwFoc",
  "key39": "35YBwcKC6Zdr1d2Lwst8okMCuNpBxfL1wq7vhPPxassvE5SQcrz6NrCu3xV8FzQ3HacqJyeieLX6b9SRmKTeCdVr",
  "key40": "Dnc6iTh3BHo4tWMsD99NNKPsXBBkyGzAUFK9vPYbC62gr2RJ3FUs2k5TrY2Z8pBacv9HjtZRVXj7UL4pL12XNNK",
  "key41": "n3mappJED8aR1JYN51mmDjmLMHkHtUkCKjbTuKXih5yvLeodK3sKNGn56ii1e51WUR9mBdeD96vvf8FXpKhAD5U",
  "key42": "2TwXB3WVicDyQu1v481Y5STGjtYdbeLiU8MtnECaiazPrjYb2WE5zBSU7DarvYeAxKTBk3i3ktgk17ZnW9bTHKe3",
  "key43": "5G9etBJcCC83twPmmBdyJjJAExtsCb42cFBDnGNstPRAczWod7qYYphdF3vsTgVXGxcFMQNEANAzef67p8fvonKC",
  "key44": "5KgvCHu8mQmYUHUtyQjaQQzDreHbFYi33b6k4iorCSgHodscLnuHgQ6Hy6Nd3kK9zok6BTDFNbcw5UTDcjQTUqFP",
  "key45": "4uSvv9FTxhrtB7SNdZBoN3ek84GrgvW5WaSLMYWQetyWJCcFkwkMRJgcBSvCFPyNB9dREiFo3XWbgPpekWSK1kby",
  "key46": "5yvsLZgrGRYSXeXR2Ci7zXjcRyPPP93MPbkQPTzBPK4YeQTKMfyY58mcuKcufzFybY8jKz4i8mjaWwiPztj6WKn7"
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
