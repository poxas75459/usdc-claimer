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
    "2km4MSt58125gy2j4xkNMTuq743RRvLxFY3skaJKpFsyVbisYXbUe61gMNsre1AJtU2X8uNcAPV5UDqtPBdB943r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JMnW7kvZ6m6iumwQcndwHWDVr77cnpRrFnTyMGCU4qDCQ2HJ9X1BzcdYgeyxfeANZXcWgQSUUJzPkUKSwRDjfaH",
  "key1": "2jQaTER6K6GRZo4izDZZgxAFE7n8pKswhrKZo3mLe1gcbEYryEQaU4dKmhfVyvpqPsP7VDGGLbornAhx77WpGSRi",
  "key2": "CtfjZKJjcW3Lnxn7x5GHgeJV1wWZ4U4mUF6yPCDZrXd5WjnopY2nysC6x3rp1uhu1DdknpdGbKbcRE3D5g62HAa",
  "key3": "2ojqUnf96jNPrdgSJkmSVgBcGSBAZb2jtaruEtRJHp3Zz3BfyQnqguTaFreh3CnvMf8kbDeVgzymTJZvVREpLnVQ",
  "key4": "Expa4WsJ6QPP3t9HGzKe8VKiPjVZKNedBpcpUjELwsqHALdhU9XBZLs3MufuHDEKf7USPWjA9JvF9KVoiQ8kaaA",
  "key5": "5Sns5TNBgqipPe7NkPUbDXPUvU3KgRqFxetDmCPyphxFBAi2xEeYmCNjEefRStiqqCAbJQgekNr7omrje3XfG2z7",
  "key6": "4yCUuRg94oGXL5bS6jWePugdVRe4WTZUXgFjV2Ytqa6usDHGR2DdViGSsypWA53usDxNc3gESZD51RikQVLKDFMY",
  "key7": "2MmfH16jQ9jca6HTmkZWvxHe3LEJEigVrxLwgNKMgKWF7nMoQqW31dJrR2wsfV3sgvUajzHGoypDbJgsPBkQwx5h",
  "key8": "2Smwsn5deY4yiHwB1A3obP8Y1fzgvK9Usz7L8NgLJcTKqjqCkqBzHjY6asuKEwPeWSLyxaL9WohzEuocQUt4KY8A",
  "key9": "3fThErrizYDnYymUhYr7r58RMXeTpLcfQtvdcawBfFnTNysWV2JCdof77QovRHWk2g8oaweTQT7eMPtre8sj9K3H",
  "key10": "33Xz4Fx3RVRsbdxcxfugkaAkobno78hQGBkFM2J59kP4W4mx9YPben8Sf6vyCMsFKJ9f4Z2iizYq2JvKajxkCpPr",
  "key11": "3bFvJ2awmYpgjjKdUhUDt9XzbZ4CYiFVLnBNzmhoPBuPqh7oo5Sks4g5kRYHZXLTPazYCqz7z2FbWMJ8kJL9Bs2E",
  "key12": "42FDqs4UBeVoSN1xSmaTn1GyQn6ULyoJptgELLXk7H7S4VbQxQL9CRekecEDLxHHVB59oj26Rhs1eHLqc4KPpoV4",
  "key13": "2CooMd6PEoTLg3z7mF22MeiGRjR5ZRVdmc73KLC2eVtB55JwtQdcV2atthvnkntGEqxEmac7FmxceEQeeS4psfkT",
  "key14": "2wAvaVZ4qJmvhMnwvcmn72hZcbBLEeRqZbVPQpA3TXiwHeLUouvyWEXtkm9JAuPmFWQKvjBczfbvwUMcm1GjJQQS",
  "key15": "5ueRmEeTg84BzLoHdeY61gGYNB4CGVrZztstLTKZFV9EHZEUePgVvqKJ4iwZTqCrmUbVktPSJz6bi5Ccgiow1M3q",
  "key16": "3xXqSXYFvwX7pkDv5M4m2j6dPrtaQkGFHDHeFdWjuuNig5xxgVvuQw8CVGacnxSKUgRQ19TDKDEgDN6N4hGKHhsj",
  "key17": "5boLPJfRCVnyBduMBh8riDbs2t4mFSKq8jVKQ6R6YQwsSYiiRkfwq6NxWN9NdhZEoT79JtJb3KfkCVggfnDFYTFV",
  "key18": "3rZLgYajB6ojqXSgUN6AMq9aQDVEskVB76Lh7Zjtu4AjiyG8tHDy3L9An2mDTgou4pYfXzGtDmU8vvgirgxG5ARj",
  "key19": "5BWmdR8nfvM2X4dRLhnZbDAkXvHH8JKuGXvsUtr2K1oSGQZinc8QzV6wkNpUC7haqUJHMD4H1TMyJSV7oj1fSvJx",
  "key20": "2a33AKbiqsWZcVKTNRdjkR9oQ8bEXfatwBFDYegh21qMUNv8uvgGp6eq2XyeDH1aHFiQXdJe8jXor5Wdfqn7j1XK",
  "key21": "2onXWPDbfthHo8woYiKw8DxwKbBNEFNXSu1eaNLtEgdKjN2KDvmKM62QgrtjHiLEDVCmLGYMuWYFx5X1afRwGunA",
  "key22": "MuubvKKAEu3ieJywEt2TNReFKPQFsixpQVr9VHFKeutpA6s6F6zacG3uQnQy9wBqq5stNg4aynR6ZiNiA7KRDxX",
  "key23": "jgwhuGEyai185T1JakdjDXCiBFRFhnL22i3dqudXjLrKHQYBXuUkoPRkWzdHFGzob8pdpehKyeejzeTdn4UZjXs",
  "key24": "EAe2Edn1Knsph3SVi6hABikBTU3XJUXRj1jHcshTsPDgimCEPoh8Jd2ZXn4YUJcLsocPT8zFoArwGiXxn4egSPB",
  "key25": "2wWdArwniv1yvuqTRU96Vf2sALE47n2BDJkNSTnAKjrofJDJ1PT3dGs5t56WE7GTzPZkQDquxVN2mGMyjWzFheyZ",
  "key26": "5urBCSzBbzjH5WMgiTVaQwNi36v26fWP9yQyFWiUNkXsZnrtYgo9uvwYWU6aF3pcCahSvtVkmKUXxTfGX5rrhLpq",
  "key27": "5iqXXpA3K5YQ57j78neaexqjehB31YAX9jn3eY8wbr8AKhcfxC3tvGg6ywkJCPFU9A2tJPdpYurfoSEqT8zaPdkY",
  "key28": "3nR55pmnq44hD6P31C8auVBrJHkeECt7zfzbMFnEy6njb9oTKP54PcMkfnXWvLbTMaqPNGq2JhfjDaEmFC8rkqJH",
  "key29": "4XTo3pqU7VWYZGLGeuoK15Yjfdix5iFHtk8BeFDoGMsvM5eTmwZ7m9Fs3uYzFd3oQ6zFxzrh2xQzsv3VGgcr8Sfs",
  "key30": "2uiaFTSqHxXfFmeLnBNiwEEpKa8QweSm8JHeoHPdDCvU7E4RF2Mpk9h7QDcn4Bq6GM6rb2h4ooVNPaeMWjz5ftJ6",
  "key31": "Mss4GhyYQBahyaUkbPj3Syb85dMzuqHoHkmPzedgToB7DNu4TWXCDTekWNDHMvattMjP87ep2gmERqKwaq3QAeq",
  "key32": "2E7vuYebXNED7R8U5Sa9uqL9zhxviVuafiBdjgj1v261vUwg8bA7pck9W67UZz5WSddqHHZTCDXHeYwdnM9DgT5o"
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
