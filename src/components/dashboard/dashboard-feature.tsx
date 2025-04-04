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
    "64T67R2wGdEsBdd83TfCnEEc3tQH8JzhG9vkwgUwecun3eJS9QAeDsb8kzm28P6cHBqYVrU7FXawwFaSfteEBQDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fvU8jzDKj8g6JqUxAocaq7AmiHx6WrT3M39wuUEJkFt8BG3aiQvnFAKJuMUKbtFmtiRAQbTHR6NTJ3dzRMoDNUp",
  "key1": "54D2u6yADD5ZwF7FsxwYzj6jqZxjXmNth1bWZ3aX41u7MnUp5B8mxR5sUxeDBRU1wcX536NUectn8Jxaswb45Egq",
  "key2": "3UJfeFbLx8HXtx81N8PEa7L41uEUcq7u3WWSQ65KdSpJNCCvsjGDcYqNnowFLTPHiTDPvCc5zh7T8NeCxec4UKEU",
  "key3": "52LPtpis4p9pBPfxJAdhz6o6xNVsKAn7iHQyijjxCSJ2Bb5yBHd6rJmpdsFRniFHyJWX7Kbmmx6i2d8FQqLg3z1d",
  "key4": "2cRLMy5sSKAevKd8mWqUh2kMd4UtAvW1KjiyWhxc9syMipo3ng1c6oScbfXJJZXrTSTTGYYmSFV52i7MJ3Anm2EU",
  "key5": "M9dY3NffVQcSx9UZgrrsUhoRT5gD194xdC44dqvuK9pybSs1a6Ay7YJZaR8yYaNc1sUtHuEaCJ9V66i13zsXMrt",
  "key6": "3McXzZeWFgitNDeGBp8J7oFM59kQ3NyQKNZY7zS5af2Xzruvoi28uqG1YgrA58SPDwRp8yidRkJb9N1CeCVNi3dd",
  "key7": "46sVJzvsZZUEfbNGWdcDF2W3o37mbHWgDwxPqNMHrPXtZFVe63c4RnKdmzJT54Ztz5EFVeHEeB1BvckBJQnQ1jHz",
  "key8": "R8dVmuFy1MAG4kuWkEER8bdCbbkFSPN9SfLNX42fXLVBGFp5xWx5GpycUuyLjTvZ5boZYR2gFqo6c8XwNqnzyyA",
  "key9": "4wPrg82aCXYfPjR9oEXirCxdGebkH1EYbCYc2u9ZxPb62woEgTmy15WzkxH2Frhfxy5UQd1mB4dfsRzbNCKvUy25",
  "key10": "4f51YzUYiYhP3piafLozwhXfJXMVQPq7sacACKodqtRhtfnf3vo29XNFuKxZiVUMRHE22XPm4d8pCYjCFgA3kUaY",
  "key11": "4MAAMgeMQEPzf8QnoYk6mhYSGeJYFWqgLW6G57waNcqu5ywvZyoLTZ8GLLNK48rdJxtNYDsdLeC9uVc4VtdfoRs6",
  "key12": "2PeHmjb2w9xjXJDiWntD4npkpTf7JHKajDj9DxVx7X5W2j8jL5YwkRukTywJRYzdhNTK4nqe7oV8UXaZ6dqNofCy",
  "key13": "2rpGQysw47xBYXJxUkq7LAnkcPKzU2S344N4C42FHGE3Ro7FBsRoSZYpYm8f6CXN7AyGLUXrYL3hvXw4aHRsp3fa",
  "key14": "2bWgT8MYVBF5NA2MYw1kTd4ZuCkzgBJoivzLGjcv1efAxrXPyKk9JL9mdAseSfakDHbJkCJACzJKCErCQtGCF1Fe",
  "key15": "2irkWVfkmHuSZTV6BebrxUMMjTRr3kQ5ZNrcc4A7gNugkt7s5XkV3KgeMBVT314yRtAXPzwuQxZpbdB1gkTninfG",
  "key16": "5o7e7GeNRAByrkXKEnFbTisNbBcF9e8Czxgr6DBENNw8ZWNxFF7MDFooMDk8biZe8mYDBoVeWrhpoZkh5JF3rKEk",
  "key17": "5MdLRJVwpFWvH1PH9Bs4KqPxjacxDN3fXR1KBwq7Mrrp3QV3jiAvKfRR82RckNm6eTz8r3tVayvD4fnbSTk2NYNL",
  "key18": "2LxKDFfJioRaVmWYiWNNsVpwqee8Sz3KarFo2Wvh1zjZWz3Uw8jrHKNJYsjXhNBs8xa183ESZaUM2aSScqTui466",
  "key19": "4WKF9RXCZKca7E54HrHdkjaHMFCDyhMm2MM2eDkvyGTFbd1tNH2xxZLz2jfxkymEivkXtZKrM5JZnNdXoZPCUcmi",
  "key20": "35M7ikKvSdwA9zAhKCRvf8s8n5XovmjaJryDMPPHv7r3eWJ476dLvA3h4gpx2BJppU13EAeiKBYsqhUYarWZo8uC",
  "key21": "4G6on4CcUDx7XnAepZ53iSSeQUf4KmvUpaArKwuwiWVUdJ5wU6SdwurGxRYXqhhXcdjQywg9NZ26FqcfEXiQ44T",
  "key22": "5NAL8r6tiUm4LBZ1NgjHDhD8UrdmFo7UCAA8zysAhzftkknrXJxeUkZf75tmKnwMFemfRvjwFfA3Nzr3nbdDxDLb",
  "key23": "5S3bL2ThG8NxaFNConQpdZmk4aF6arv8P5KQ3VR175KSeqJ4BvHtrvV96NdV5G36nTedUVyGWoeJYiNMqzfyVRth",
  "key24": "5p539XjoeqsuwzxaU3LLmNcK46RWwEBD9QdWMjths3WsRzoL7Y1CPxRGY9tzM3NGw8UDqsYQB1CSZFSviq2mJXTw",
  "key25": "UurK9gERQcw6w8XzxDjuJJvTdNtcmmVWF9RJmTHRJLXHWDaqgA4yUYiTo4X549KoBvAAoRTAPbVRGSUjNCe8KB1",
  "key26": "38e6wYywH8FnuinFcdZKALbAGj86gycVuGwX8C4gY9BkV5ccyE8LoBytLWb3krmpJAiud6HkL9Y1GBYidKAphdyy",
  "key27": "4djstEA7uCcWrZwd1y4uJ815vCL3XpY6JvLgMXtUJ4djHu5hc84tPLBS3ED9AtDxAxHpKUdGxM2q4nT2ommsbiY2",
  "key28": "3dU5YPdu6mAutY33j2x5HgzGrX8StATqRRUMXhqP7tQmUQo3yiUdeo6jsTCWrsyLgPXzQChBygCsDEs6xWZfBeqr",
  "key29": "5rbWPW9jAeZHF6GEGB2CCSMHDbmLSCHvb7F6hzMHUuLPd9nRW4i7Nqf3XTuei5hx3ckZtZFUEJdQK7ZGEY9LQsHA",
  "key30": "3KFwd2W7UVMFaHRPV824Dk2qKe1xHa6ita37b3D1A7kY9exS7k3HUPGM35RJxhhF5J7WgS2VQxjSS3cmjMqqPRDw",
  "key31": "3e4q5mZRne6xJ21RMnaMf4ezgcnwMPJcJF9LsX7WDNMxEyzSTH8djca892w4bDFf6WjurxyNGdWcB9dYKrpmZgVK",
  "key32": "3rSBAiCMJe5BH7woM1vEZLiK1HmM3JN2nrJMBnxnkN4UohoaJJWCdS2DH2DfGJztxUkmWSizLbU8wLzRfjpY21Uy",
  "key33": "3f2n1KwC5FM9bk3iCkX78hQcwRVyonimktaQ1AKddmV48wPv3sx5zbJZcd9wHtcTwbiz785GokgM8Y8aV4qV6BeX",
  "key34": "37UVDPsuxJfsrQhnY4UkijmHWeKfUufJ86EAMbDf1CNKi3UZjhT19dpbTgqgcEKR2u4fqPXVTkMBejkBNYq1b9EZ",
  "key35": "4RpCNSY1H5XSr583VBYM5XqwKBDcamzsTngENEMupgwpJLJRq4tsEkA3vtPK8AEyhkjLmSs1B319Sm3FRGmbgmcq",
  "key36": "h43vLftC37kBtX2vzXMAZEw89QZM4a8B4LGCU4yKnyqfYoHdYiDWWBTtRcr9ipCGHVayYtjrxEzZxwykGbdVVbK",
  "key37": "475FU1uGvnY3N8p3Bsnh2vgrs6YC39XgzSZ28NZVEAEVe266edFbzcoQpxRsAEGr9kt3TXShAmiYfbG4vpZDzToU"
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
