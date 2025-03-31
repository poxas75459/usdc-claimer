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
    "5n9ukPjsvvgMCRSQybjRgk6Wideh5niqmcsUHzcoSj5UioSqLAPi8ZsroLXk3QnJ8w7bh4UvYr6ATu8RcHp6VbHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zr8PTmjztr8bwYM53RV96wKMc6ze71QRaDCen9SakKKbHcgYcTNNMD5sbPn6QZbzuM4uGDTebX8Tc5KNZzptakz",
  "key1": "343kKmmP1HCxUbdZKeSYAHTdKGozczFyURgTKyaHdca4cU3kJ1RL1Brx2d3y8DgA1YPrC5XWUjykhSQEDTzqiAKd",
  "key2": "8MHVwdJAVqGymNXxrFNNWnyztjKMQKNMmo62tNrv2NTwh6XtXrZneuJEQ7gTQyQezUR6kowMNLBnYfmBasuTePK",
  "key3": "32GxSgu2nLrTXgWcB4BZBEgahs7NiJKRp1zaeTeN4h5ofHRT42tYfid2Da4HrsFVW2kPFuApxnN1mHgcFD5G9oCG",
  "key4": "5KnHYPfXg7C8eLSifmDunVhUDutzTfbyQjVjjENfoYiUJPYnhUA3L3jsFTDorFfkUssQ1BzwMmLNp7sU2J1pRuxx",
  "key5": "4q7QRRbAaE6ZQc34xRAV8EcGC78AMKEKLKhL7pAo1EALFFwTqFogVzJp9wYp91jbUDizoYSxDTqhmqvh1JzsSdKK",
  "key6": "2mS7RDW1B9u77HnJUCrGyPhRNGrBuEhQFGbZLYaUbWydMQM2JFA1xQAr6tjaaXY5ni33tniYV9239vyvDRjLGqmM",
  "key7": "2ubzsURPDUnN1E43CTQdDApJfmNGE17yogu4QTVRkGcyS5z2Eg8zq4F6UCFRqr1cVeJFCSr82DLFAJty9sfTcnka",
  "key8": "5vMSDMm9HDNi26UeQh8RBSHKStkxWzDHEkpoARf8rTjQWpYSDcqX4QJ6UpKQ4YrmbAJxD5hkq5WuQerTfzdthN1E",
  "key9": "4K9tNNtpo3vyRzLhiu4utxnRvpVYKQ9ziEBBjU1o3ySCn2punBKffijoiDNVvN95iwFjTcyg4u5nCtVtSX4mWJri",
  "key10": "5D3wPjXjcTAjFmNYUxL6jdjYPBghnTUxjSjdTg71vZiE8Y9itsg7Z7r2pyNqqFWzTBwe9mZnd1UMhhvv7v1eFxi5",
  "key11": "4x1aXxVaBncoRA99dnyrX4yjRUzQn2hL5sLtXt5Ykp4m5HWhx8Ly5RQzM2J1pB48ouJy2EqeRRhg6MKoRMDfwVq6",
  "key12": "4x5BZAWcooyV3HXaFCPZonUTKPA8zv1zJqH49HFBbVfS5kiBRods1aDjEkD7XTJN2sG6T2tReoDdq6o58xCdWpzF",
  "key13": "66bsujsgFA9rh4u2HACxETMfXx53AWPvxnL22MEKMJEVmdfKQWa5EVWqzq6sdgzTNqyhqTRN3opYie4c5SZ1vv4g",
  "key14": "5LpfC2ntdEPHvhyF9816BHAskMBtP1VxdYEZnyb6gnd6wjKDNr88q1pSrmM5aXQiS2WuXyzMgq8Zv6ELGZJ7oqDZ",
  "key15": "afkfRjNbrV2rxkk6zED9WGDuAfyHiqVWbuhyL7tGzfWACbbFBXwqYp2gJXfGsUPrny445SLCkGvSUjNdK4bazRN",
  "key16": "4WJnFdryVAkbQnxDVWTaeHaChh2cPnQmTDCMgwsrUGFn5VWXE3ZxL3qJxN8mDHti5yg435pRcp9K99egA5npDF8t",
  "key17": "66mB31BTLgWwrN1DdeszNaJm2WLojhqpxmQk22M33yfEXMEpsLvJo7hXRi8KtsuRYCCRojWPs9TbWQZo25dCcuTZ",
  "key18": "3Y8m1szLz6SDAyfeZKEZH6Vp1R5eccH92QavgYdmPWeiit26JrLDr3tWFYwrZ2viFDmFcxDiYs4uhdCQ5k1RtwGK",
  "key19": "2i7ypxW1GfmQVXjshCYZgPTRQUsKEyQJTXggsP2H1Mau9HdxLcgck4asBGPpGcMiSzd7Ei3Np2dJ7bPEMd617RMX",
  "key20": "47ybb7MhLyJKTwjxrj8jfVLqSZ3kuovZJ6qg4uGkm3UN9Su3FtX1QvvtWcKNTRxwcUPepdCEyXwwFniF5SXuo4vh",
  "key21": "pLuyCvVQ3RTPqmoyptu15ZEEDFuRpRmNKW74HLpRB2KR1xiTDsAT5uE4bv5GRAriWYDYi4686HRtxqzi6VCJtuY",
  "key22": "5ocJS7m16i82kmw1SNkW52me5VGj5cCCg4CaLxNhs1rmvjE3YWzJ4c2fjEdYkWGubAHd5cZS4qhcGd7zq3vz7DsW",
  "key23": "ZeumLkk365FKX6Wu94btrt1GVbf98siHsSZXHvoSRJyj76Y9Gbo8mLwXTTbDSz3kuabosYhtNGhvxEoKXRZZ3pM",
  "key24": "5zJ1QM49ErVQBihVAeQQhwddF1mzkx2X38xBT3GZvaANH3nDRLSVeJKcyFz3gZpauVSiuEzFWUfEHryK8WmjxLR1",
  "key25": "5MM1k5nMiq5GJPXpwprdQnT2nEDU7GQ2Gv2a2eMnJhZWyJNJtER7pAiUhytJiUJe37dbBs9n6odwmsayy1chkYfR",
  "key26": "2GFkTXtYXCm7joqkMbKr2hozUydy8enauKYRgQy8mcqWX39kLkawgnRNJixufcr72wKgSyBui79WTwGrEcPbR4YE",
  "key27": "5dh329yCAk6WJPmpvffs5Hbx1aamTTv8a2v1PyifXaSMbzXs9Zm98j85tLLd6tnXXvpw1KCBLYfeuSAieNoZMdvB",
  "key28": "2xTg7KRe13cW9dC5buHTfKiV4tvRSktXoUmfupebQEpfVUN4hjZ1yaqUM5LWJWCsoL157VQRvGnodhgSFbbWeEvj",
  "key29": "5rnFeVgdDG636MS6kXDmEkFT7o2n1vFy9gJTHcsQXRS5jMeYTZiUXvQnCewgxE1NxCHxx2e77UoesDnuJ7u4qPXs",
  "key30": "28HWZXhWQznoynD3zUT5EbWVDiY6YP2Lf83DqYv5e5orim4pf4fJEPFBJXSYbBHNiJLCrGJBWR1mZeGu85xEAHxX",
  "key31": "2yMiNmoMirYkq6DBhxSzSD5SYfMq5mWrSPtxfJ58KDCHxXsfbMYaemBoLV9iNkb6qLjFJNj6NzNP3hFSELt2HxtL",
  "key32": "5aNYnLExSRyq5NbLy8gcE3Jv2zccqryRTAn8oxnkmkWf9kiCpsiq1MNsNwrzEEt9eKocxbmpfMxGh47sxywoCZ7Z",
  "key33": "3ErZqm9p8hz8RweebD43NJwVjkj4ABvRjjqhEGXjt5FvgAoZyCdUgeL1uVeAuAJArGSxmTCcMrcfiEVoiZ88X3jJ",
  "key34": "rFfJeJoGGpGPcJBMLasDKukfdKMxopgaSLZhnUQ1LtYqcw6sun26YoeTgt7GUP8N8UwVa35Bid7KVb868HYmp2H",
  "key35": "575tmQkCkytn3rwxLZSRpvFtAjxy7BhXdqjTvLXMRPCS91AYREEPaLn5YKLfpGLz5CQz17KYdGiYyNdUgQMDUrHo",
  "key36": "3hgz1f8GwiBk1c2n55ywY71x9TEG4RfMrbk6WitgwbSVF4KNLQ69z9k5QgVPrhP56vkvNW7t68WGyf88YjB3sv8w",
  "key37": "61gywibnFekLtZPQdqXxBYJ2v765wggiojNXgSpET7F7svVat1Ha5ZTUP5sKYS6ACVXiDQUz9sNLcqswyeMBYk2C",
  "key38": "KkKBcWY2trDE6vvt46RBsd4kafmy4iKEhPCniZ2AxZUWE9cd3cD18LF1BqcKAxmx2RudGE4MdKNYdP3nzzTL2Kb",
  "key39": "48BAZsB4Yey24BMkniNfJFfWaFJn5uYsccWmaYWiZ9WUhaQmKkQx28iyHAUrR9m7qjxMys18hjxEiwoDDqMbmk7S",
  "key40": "2RwWQCDFjBDBA3UHx3oL7JbneWkd2qqc1xFoKq3jUUWZg8amgv8e3uhR2hDQkkLKVDoCtyybF6tasHka3RL6aTvj",
  "key41": "46Rqr6ACVw9eCJygJC2jb8zXrGEHntgqENH8AnV1V73bzDpiQD4qyX3hfDnvuGYm9oq3i4UQrppwnzqHhPqJyWuc",
  "key42": "4JTUFaSWPCAYhmhCCXARxcZ189YF4eKThuupRucfnURjisMJUiNmFbUeugmEGmQeCvo2uyVWFAmJUwWu4qGMJuMU",
  "key43": "2RGmWkLQKR83KHkSVFW4KXQJJ2U6YQck3HEBuYstbymAoZsJUWk1SY6wSPqD98QfEY6FbKQy7utaEuP7694v61AC",
  "key44": "5zVhitrfmBdB8dwiNqhHm2ERD2M93omrLt62vUqSfG5i65MriVAqMcwSE3711xZtzz3AvNGn1ueg5GM78wm66e1u",
  "key45": "5EbCFHeb6RcCTiZp597rMHHHauKn5e91nybet6pQeYVSwF4f7odJypN1g2Ms4rrGNfL2nBVMf8hLkgiXSW6H66xg"
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
