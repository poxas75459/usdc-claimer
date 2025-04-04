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
    "5jkkH6fDQFysKKd92MKvJGcwt9BreStxRTXpfoH2zjLTfK57TKAGETg1nxrAmdrX7RHrK9mSLmARJWFXigpdb44b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AtmEiX9B8d8nXnQ1aM87vQeVKjzsCYrVAB9nMVUkgHVHmPwgGH8Qv9QY8eCBBXrdQVot7tS3FbGEPRXgdbMbkqP",
  "key1": "2aixnAVc3rkLv9Ji3C5gbe2F6QFNpvFdP9tmH9JZDTzRCpbreiBCsWNT3sYDb67siFjzrE22T8Zjb8mYZcq2awf4",
  "key2": "yV7t1iRzBETc2wHL5tApJNSTF7MdRgNkJmcS3bj5AxXAXhh11zAyeCuEZnTDfq8HoZ1hxWCQLnYj3BtRwj67y9g",
  "key3": "59wDbHcauWpPAH1FrZWoz1B5CmCBRQ4Sx6kibSkZuETGKx9fVYc88DNBRQZCeksLbAcprktNcBALD9xmJerDdpFP",
  "key4": "347nqZ7B1x9buhydmjCNtx5qx9yhJPfBhySyn48bSSgudMyxcNrWVU9hdR5MXCDWAVMdtZ2R7PSccFAEhEHBhgrk",
  "key5": "23srP9FnUs79uk81fUgXTR9xHHo498zMRDDR8kXUZL7BLNn7M29r7W481CcAnhH8q4kMgjbNV89FVXvaN4yJcajm",
  "key6": "3HbJfXnVGi8ZXz8mFYs1AZ76F47ZKkuwrWWE7VKqKfak6rWfRxaA6gtqKyVWn6nrgCrAZFD6f87ysBH29KynfS1F",
  "key7": "65Vov4HT1H8NjaSFHBdVXP1ST8qJge2kRrkJpgBQ3htdpgN5wBxew6e1YQ6zBVq2cGShEH5Ko4J58uGEdDE4e13H",
  "key8": "2sr4TKyfPbjBhyFoVYqF4Ccu6J7ScgtkoeSimyntzFhofKTiGccMHSRTB38ajRYFPy2JYKZyM6N8Xk3GbBhLzWud",
  "key9": "51xCfB1LRDG51Kszu4k8mYqyjbYUzoD1rWTGBtk2qy1Nebm9yEX5JLySQdVaMPhA34XCpfDoKrqofP8ojBJLywaz",
  "key10": "61Lg4woZuaxsQZS3YPzZVeRJYu4U3Dm6QppGonVUh8Bro1ZAFS2AyxtGSz4RE8Uu8JHp4xv3wFcmwBhPZpg8ykYF",
  "key11": "DDHJGXdXyftbjU8eyELsYGRLZdUwZpT8pEG5cqL75QKYMdQ2ncpacXxJszM8tpuMXt5VwsoHtMvM7BgrZNWLkR1",
  "key12": "4LuaykZPun8EpAgD9Dh1dTPwDu36NbNsdoHKjVxMv3GYZ1kpRb11AQYCwZSuGdZZbeSF6SM8DGE2K441qXv2WMPH",
  "key13": "2k3ANRLjcf9idXMbKmhNyGTpaeuXehe2Fw3W9YoDCW7ZALi1ZYUNNcR8tiAusA5CGgNfxPvK4TDhkbMJaYjhdyP1",
  "key14": "2BoXgFQgvbpXZt3ac4Qd9MsgduhwoipetQBjmHeSShoRqS2X7SHsfv2Anu9kwBGVWsmUUddsqGJhqG6p35pWZ1ga",
  "key15": "3xBFqr5mqy9aZxrPFMenBBaHNMpVjKiRaEp738rpVweyQ6wUAin4HR7juT3UV1Z7jfjwzpo3TbKMJH5vs3ekLb8h",
  "key16": "T6H5aMzYqNy5q88bHXBnrvMYnH231R3wsZBHJxrZGaFYTJUEzRRbHes6KiBeXaaZhcqfUHoptB5uUgchwA4Uiac",
  "key17": "26NmjEtv3PSQ53PrXajeNJgpzXLU2aJGiVxwFvacaEgNEMRcp8Ez6jfrx7FVup9w4uNjNWSJ7b3iRmY1mx4m7BNv",
  "key18": "2uRkgMN6Hcjsk9rDFPV9zFjSd3TxYS9RpqsLPBaKomcV1TuyGrCmb3H9Qp8kK3xeXR9CLGVjTn8MSFyBs2JWnbES",
  "key19": "2xf4BNArqFSZoxzogkjkzihhBCndunNjCH7BGsFjqBCXUQij4T6eNyp3k3M81jbwpMKFjbb2zjCCSGfNoGLHpo54",
  "key20": "2XqpAx3JW55cpapBL4ybWYiR8US5bK4wnYcLLi177bcY51R9jLDcMn2LArcFVjvERtoJ77mztTjbYEJDLb5fonct",
  "key21": "pefGWZNVTSywXD7snAk5Hu257WLecP9aiDcBYhWGNdBmC2MFTJnJ5dJXYkm5t3ohrumLNiS8RhTtioKyzJ5H4kE",
  "key22": "3XWgbLNsswtLN9bFQkSekPorxaTsM7R4ECQQZ9PkwZ7Gps2xb8eVvY7zeN5raa4A9tXqWPbX2XZMJYcK7MjeWXuZ",
  "key23": "66PHBkEaeJmUYEFTfHhau16kevYxty4Qe3A1fMpn1wBJZunk2rNoQys3Dy5zQHN6xXvXfnNXmJXo7EFym3CVqS3f",
  "key24": "3gJTHSEHGBRruSy44orYCnZ59SCumd8UEUCiP3PWqkVBhGBrmjGNWNMvxXyYreinck7rmmUfK7gsy5dEGYsj2UFA",
  "key25": "4bXEShNP2bMqYzCjWhdHfBqhLtgg2ED92TEmY1bVngQM9qumzBAhVqn9TVXE78VW4nhLAothoARw2tfog8RDffFC",
  "key26": "2JMoQRKhAeJHeuW7amgfM9Acdr7pgK6ciNHWE8Pt4URDhQrT3DTjqsx9okRSiUvBt1ajarYQdMPwDp3VDoBq1Qzn",
  "key27": "32gTnbNhhKs2Xr1ckw7HuCcUYM5bXLRXMPzcJENzuV38Yonc5co4Xte2Tc3pRRRJonseBFyWpDnVMVbMSqnKMsZm",
  "key28": "15vZjCRrfeSxVCsG5aq4jt9NCjkJ9fpEUthV7ypYvcv1VAinjwm8jxhvKaFuDZiXtnUavxu79vzaTzYLtZfs6Ty",
  "key29": "2Dz25uQTegikkAMzoZwU3e7jbYWjgwwWwPHM9LmurghL1xnN3uzkKzFh6efrKaa2M3bzyMexc2ock2bHj6Ct7DpE",
  "key30": "3DVkq8cHZzyWqpPYP4VqduHHsuU63dseFPHkGX9zzt78P5o6zP2yBeyhiD2bQ1jf7Pz9srK2HGyiJmjeqKkkEigg"
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
