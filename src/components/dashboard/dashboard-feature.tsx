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
    "2Tp6g17zTwKXGiiai3MsRRSD4sL1Q4V6YbrTeAYa9iLjDTwZUodRmjdBwgyMTQes9dd184q5pZVaJYQJutrnY9cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KoqeGCTomVxM61QYNEBzwCRjRtKnvqjkkwYRyEsvs7kmPzNKW721j8uR5NMqUKA4mmU8KEhCvG7cPc5xNpL3xRh",
  "key1": "3YstEQXkKpeuvv2whCRb8jhoqWEoVcbQJvTxSUZPmiTwsgHdSyERgaLuHxsZnxMQDFacFyLAcGd5pV98bMLjv3WT",
  "key2": "5aeyv7brAWgXxqBFeb4gJT1q5Dry4hjZ4PFGsVBDrnZscMj7dDCCy5jnLJxiTDHDtQvUJdyh82xQr5ZRzfSF6HPc",
  "key3": "2wbgu9JEC3KNzcDwEY8oTE1z8fdsSn6NBRMczwZD4QPBdxiSmqToUVCMaPa8RTRN56jdcjvK8Rocp8EuzwuUbJQq",
  "key4": "34HfnHHGCRYCaBmme8WQfwTY9FUgrDptbTEPdTkH82y2oxpRGvxZp6AQUVv4MFNjgvQxUTu4RoJmAxpt1SgHXHiX",
  "key5": "2v39jeGyFRTrUmh5Qy8fFnkqMFEPDpJbPUWQ9dxJACAWt7XHLRBQgUkCcvweoMDrekTSRgwmv3XUUy9eEncgg6Zp",
  "key6": "3TH4L4JifpGeeLRyXwJqfT5GNEV8mvzzkVZThP336AeuPQxHnCncnscZsNDwKUTtN4QSRb72twHpmD9kLTMNWNg8",
  "key7": "h3Ks7482k6vRZJiEWZA63NCnpRiRyh5q5aY8zSyo9ZahBLy6ds59nFMhthjmWdYaDtAGCrNTzXLSb5ALSykZCUh",
  "key8": "5SSSjfgz6dse9KX4G6a5S1bCtBsNWZkPRfACoaYpngUe1X1SHGx6sUkQALaAHWBtJRMe1UG7A988pWMuyNqiCALD",
  "key9": "49sqdhAcH6gWYuW541sE2o4nf35KkhrPhb8S2yaoo5o1aKQ7cfPnNoJFfqH3vTf3T4mb7AbfRRB6362WzoFPs4CF",
  "key10": "5oWpJ2WBL7T9QdCKM6b84pQp2hfJK6fWPo7NDT4cy6q2nAAvNw3NEtneFtgAtkUbXh2BVEUVE1LihVrRDURxADZ",
  "key11": "28VntLk1wrFecbMZxy2ZSRiRvMPubqT4Fe6GrUtX7sCxMAaiV5KboqYbHn5FZNHPmoYeSwAotCDdGTR54AmMncDg",
  "key12": "3pB2RR3aSwjdedgLTg1Mj57Ko7nhCA2H8gMkwupKymaLt7e72MJfLvGTqnezBSB9tP9X2y8SAXo899d9nM2BPihR",
  "key13": "2kRVY7jbFExuJxWVaxHjEkYnuVocQdXabX2xMA99yfUQ4bfJbg8vDee9pNjAfBxnk33RY4bkuj2BoGgJ9myqQpQm",
  "key14": "5kiMSHN32jAY7sjpvJFWT39kjo2AdjAnPFfzyMWv7pwQ5jHvhGjCrZb9Mms5Jqt8eiWnVpGPnt7J8G8p62UKQ5sa",
  "key15": "3bLJPmsrev1eJwMZ7YMzGCoHsfs7DXbvrFeJxzbgKJeYYXsTgdzhnsUK7ehULBBbRq3rGZsbodsV8YHUhD6hZR4n",
  "key16": "3Nwy3TW3ctcRYLE8R42DxPse5S7wqRGsdFkdnarw5tZN216rgLGp78neBqj5zc5iDh8GRzLqvsTG6sU1MahK7C7R",
  "key17": "2dBMb87XHLCbHjVMx9pjkvtSbdu8kyG2WrtF2xK6zPTtCgjh6M1qPNiwT9VDndobg1fJwRoqEpjvdnGD5XUQ8B97",
  "key18": "2aTHMpfPuiZ6M1HTbkhxJEdEEi6qAGcveY2E1i5kqyh674GuZ6MGCgF1xVXciBa4sSJDBeRhTwSua52djLUeSCnt",
  "key19": "3sCCPuAU7sjV6mHUAyLj6fmZVJ3kCe87Q6w2hvTHjUuPnXyqLYiu1RUWYit9auGLTvcLFwLuei39TnSgZiGqp3ZT",
  "key20": "3juUpGrMjninTXb2EvfKFuqMh4FSLiAn7Q86Ck8ewk5MTyEqtVpw8mxxvz9w2hP2Z3MZ9ZJg8rEPxxAixVcphn9E",
  "key21": "3p6g2df7WdrhhDDSS2eFz2FUfnqtLqponoy1gREQuNzqpMUALPMR2YmviDpzNvjSg7AU42bwUkZyg5t2c3tzZ1xi",
  "key22": "2TLrqknCgjsiRSP3MY184Kzmzd2LJ6MQ8AoUT1MMpeDqRSocbB1eD6kA1kBwGvfai1md6C9XMJFukuYHEbezMtF4",
  "key23": "3gnskxJtfEARBpsLN6ePED92bJzETRi1RUFSU4oT8ahynesVk4SzEtgBhzaywjSpPTvwxJHyZL5VCYoaacqw2Yg6",
  "key24": "jfNkQnMwJ1LxdQfyxEpEMzEykoeDM2qp9yBA48bs6QSLHiFqViyZpnwAk3fBQsFHcWTW1JzkFRox83UMcCx1uA2",
  "key25": "2qiy8eB3wkZGGM5awuG7pcL8T8NhuS6wbSmgYMAa37VHq6Tjd3yVAuo3PyjoQTMNYRz1QsB82sqpfHiUkvLPapVY",
  "key26": "qgV44aTPwBvrsHaTvmQ6pyEqBsmETSCnwKGoHw6hpWfL4YYx78fZ75UzS3EpMVs3D7FRmQKXm1v4FfJ1Rdgjug9",
  "key27": "2WzEwpMgDkU55d9VwakmVRoSq6m9V663aoQZ9eMeEHv8GSDMRkDZYx6mk7E9UTxCrbpD1GdBbsAiQGtcwh6o4G9t",
  "key28": "58fme3oYdJ69NBTpNPH5HqHBimVFqTD7U2hfWFwfu7yt1n49ctAxthbxnQo14VhFrVT7v2vjbZuo5de8N6myHska",
  "key29": "2SeKSPsPfcW9T7zT3daevTJ2GqQ3eL6VwmUN2xwRJuPK25ioKdsLhkuG7YgneB53TZZ1o5HDLR2TAmSnte7P8iNt",
  "key30": "3pi4Ke9sm6CQXXAHWy2mN4xfLf6ofBv9tzNySUreCQjVPycBD6np9nchhET9MPGidafiQwuvokcJKPLug1PVaXpE",
  "key31": "5u8mNMDKuQdsE2UE6q7qbdZLgycqG8NzoKAdgKBwrSxtZz5BAUMog4gR3WB6bQxrSUGDs1Cw9E61akQz4gFnbEp7",
  "key32": "g68ykzg5HXbb2KvSKkZEwWGhpWjVRnZTX6PVVSQxHKArbFpxNZhfxA3b5e9DDpYWsWE94KASyxq5kqtzRVftHAk",
  "key33": "484mDDmUkRAoehgWHyyyxgDrJMssiWb8bAc5tbYJqMs8zACrik4srrncM9n1cQfV5o5JnLagTpJjZMYxEeccSuA2",
  "key34": "kBVXdnjqCcxap8EFZodUBrFZTztyt3zUDuJFSV1j6kzdo3y5Uw9JFiK3fvXxMwmAzWi9m9QbfpQ81hcrqa9aLLV",
  "key35": "5AYEpcCwnD1EZyYzknF4JNUSpESRP3638ArzDL5KZu9ePicELXpRzUpfYNZYME2rJhUDY8ihk2pry3dHHbXF6Vem",
  "key36": "3CJtPZ44UuHKaA1rcNfB7ZsMeTv6sxxC5oSroroCTBdfraqRtfAsarPeEUnQfNYx3UuUWZ6eipeR9yR8mazsEtti",
  "key37": "4KCndci7JQbcq7ist9CDbpfsMqVy2mVhJqmjnr47CGPFSp2wygLz3nMagHgBnZaHhLKMCXCHpFFYyd3217My1LzU",
  "key38": "4a8cGKw5oyhnzMvZyA6gdMRiF6XvBmYCPaUJaZAomnbv7CeRj2hDMM5NWdyhU7ZKT4Wvzs7buqPu7PR8avM79wBg",
  "key39": "2AXqoZA813QEqRaBrzaENtuMd64zNFY1tY8TcYgyeAxEQesMc7qKgXzCpWiLcAJpvCnBVPWXCoC7hjLth4BXqAMN",
  "key40": "W9AiED7SWkUSD1iXzg4zzZdUQDBdf6QrhAa8M4PatjMoAD7qa6Wyyq7mXnCnfhLPZhD81B28yJajsqornxQvdMG",
  "key41": "n7M9S3Fq4uHZwvX6N5tQoM8rhqQriYJEFBfnuYAwJB33aeaqRiGYKxcdyd5vYkQCn6df9Wx4pGToNDejycrs4pd",
  "key42": "58oPg65F82tGQ4U14q9QhQ4zmUcioiifzMAgW3yDNp4S2T3ZHHHG5yvxkky4QiAWRvpdSWAKCstqVGk5Kf9Zc827",
  "key43": "SkXYED45C8ADzmK3dQzzMmYiJcHExMshHZo2Q7ZGBeyJQQogihky3qXcu25SUuTbub8oHfJaiVnioe5eQ9zy8kN"
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
