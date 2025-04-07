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
    "Nx86ibzGmFyK4eR1qNv4Ucs3DJztHaPQC2WPH8fsvvifmkL24SVfYju9GrVDv8J9SM6fcFg6WQKx2i5Tr62A18a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dpVydas5ow9Nawrv1Kj7MP6MvkyLc8j4sFeE9fqo9qJRCxLLFUuLezBe3JW2HE1aUu7u3gdZJK33koffW5H3cDn",
  "key1": "42XbL2f9XwxWb3YZ6Y89QGuGDj5Ja8FUsSwjhj45psYpMDZGT7mBMm1GJjh8kiP4Hxbf2tHjpjNy9TWp2SFak5BB",
  "key2": "2g261YXsMTSQVxK9zAiBT2jDrT5kvXb6fvy4sx2PRJcTNddX6BAKAaLE6BSJYa2Rbtrkx5YXR6RfEdesWePXmZbc",
  "key3": "3oEcrigDY9wkjoYCkGUbVd7JH7GvC85ywaqW1n2NghFCCqkff1hbox1zTeohDDw62fvWRBuwx6zkNxuhTnPug5es",
  "key4": "3iTH5ooDf8Y8TeSwH9U5T55iKhaAKBRTzv63XhvtiEGrQSidJhQY86ud9aD6iQY3wJVLShZqnMPKY9FrcBK9NBTW",
  "key5": "2cuQ2ZL7f4Brm8gxoLAfnkSivbytkCTKH9jvGMcBrQYRpfckp8u2yaKCh9EN5hDjP8cs6oZAMWrKLvzgGtwEUeoJ",
  "key6": "3negRgLcvGbwWyNESgvGjoMidtwb96tofz9WQSG9yAyTtWH9BxrNZsD542ywHAyaj9hCqvvwkeeVipgrivgm8tEX",
  "key7": "2HrAYDmwqpRxt92wCiA55n88auS3v197tPQgUo2hZQnUskpQq7JW8hWWV4W597ia1QyUvWwFu4JUvyc495dAbAKN",
  "key8": "4GucmP368U7yLGMahYkTNRJjAfrDDLTkwMo29i4cSKJdN6Q4tTf1NgcJdNNTqn2U3itvGGsQ6V6GDFRZWLpmoTFq",
  "key9": "vGcV5QayiQoGRZ4qabo5j6MWeWHZoCjkhy8SUhKJwt28sjFD2kzRR4GwvTpKpkp9s2Ky1YeL9fX7VVPxk7XTimB",
  "key10": "3GfzS6RC9WTVWjx9czxRWCy8oqgKBDfiuA8vT1fpPTGWAhLpuk9rcZmP3n75baGww1PUygZybXp2Hte1BJLuB3wC",
  "key11": "22TvvLFfqDi7ZBjfV7FoJcAaKZMBfKkr2tE6n8ekwZv1X5tXTQ8NeAiojk7iHewXUyaUTUtbzAn8wPA4yk1BeDBc",
  "key12": "XKjSffaamJGDU3UF7B8EhTNJ2EP5TgKyAArVLnvDsC3RJWA1SbZxYpXXKR6vyjfWus41XV2e9T1yHjKKXE9NMnQ",
  "key13": "idX6ZRYQZyskZpQxsebeaJXxsXHrVTR21gCdmDZVa7SJZ9Bnd5w5RwGpMa9giybU6RDVpocQfTjN16RCnwNZvtV",
  "key14": "5zkzTBTAWD4k5uFXfpKMGeADtcC4tCT2mYcfbeLM7ANVf14aErH8sYdHL6mhnTJmG9x35mSZx7L9G16hL2yah7vN",
  "key15": "Y5WEqQ2mXBE1HQrMo8z9NzqQMSTRCoXjriECm3kUxL11P85ekFVC2iATxbK9HM5dWy72tB7ngX632c83eP9XgQN",
  "key16": "53xCVMxKZe637Mqt3ixZnw6peStfDDpVCVJm8uwhDx1h2LZWpQU8SDGXXZuQ8CwDTjHKaZ3UEnvMYwuPaZB58gKK",
  "key17": "2AvZRYhkhGmGadTgdYZH4YUyV973ruABNBH1oUqKJETtnWYAyLDZx13Xx6ycyRrib89bfom9u82rcufjjFWDZK34",
  "key18": "4UBJbKhUbJxTNBd1xnZf1C6vF159pRx5CZoEyck79cd2wPXRAcvneGhRcnXdVWJc9oUPav4ex9CJUUhKm7ihtQSJ",
  "key19": "5jdwBDKayBxMZxxDWAoyrJKCCU7h39XuYVQsaLbCxuu8ehWBDUAUepo2RZU4mUYsvsAzpGa55GxTaRb3vyJvgh1b",
  "key20": "2cGvnS5uCGwuNhb4XJFV34Kp6xo4f9qLE2ejDgYLGLpUGtfaNVUvwxrnc7NVSC6X7zBXEWGSo8opWzbe6zmdTphe",
  "key21": "22RxWUG7GdDhGpvun5ji2LhVFw2e5e6a5M78GZsQScG46NSDV3xHVaaHgQJLNjB6QS12oyfFNfdFHMQtYh48SArm",
  "key22": "3RAptrb2yDDoBx4GmvhFyBsV4hFAfvkwv2jRVbokXMP6dNkG2ro28zZK3d9GeLHxMUsquwXb8au3wmP1SYz2tp5q",
  "key23": "3sWXp42bjU9Dk8HcZcYsmonNccgha3jf46ubrrgU5WBHL9dyZ5Bbdz9CMVmAxgiKqgYZLKietxq6BuVVtnpLr1id",
  "key24": "31oPPhmXXUKxVnEiMBcVPp9NQHrQnznLb68caMcQYQpg7Cn4Bcy6SBQrsCXwjkvVLnMJS8Xt94Ey3eg8NfBpouT8",
  "key25": "YoH2matJBS3JfaDHRa1EwnAG9YvRnM178dGTrvJFNrx5VT6ycke6fzZqzJhqP7GCFkPZTUDNNKHfSdNENX6cWzn",
  "key26": "65u89mJY3cL1NtQQbz88a2J6UWB7KLbDbBpfU4R1wm6krHF3Ge8eTwhzry8fU9hyBZXPh5qxrPuT36AvNvvfjx8y",
  "key27": "3hdQ1q5jrA338G9abLS75CyQynTigtPRGiNtJywUNJVFF1GRomYBYBPR8yG2SVMkkE94b3vbZpPPkXRqAn7heFaJ",
  "key28": "2cmdipwfwpGrbuU7BEN611Vni8D5yK7TEa8LWHfKBXnyG2Rda1VPzqkGow3y2HycCJRpBebq47F5RGwjGFn3GD7o",
  "key29": "3PNBuvGWEoR79bKoUQ4aYigezjVPr7gqZ9cYWtkQiAiUxjhxxpjrt3wqpzu3gqZMPRb2i6nkf7feFRJvSPyNwQg7",
  "key30": "29bJvBYJ1nyHoppRRCLSvcFGbu66SQKERiACbRjSuMdrDhtvvxCiS1QunhgCz4yacH6JQiATimQU4uNjSpvzE1vE",
  "key31": "2ktRvB3r6HUX6SmmwEw2Tt4CgaqE6zc1ghJGXAofT4TfXsWUL1XBjQVwqrvAVjHanRxhruBDSdBCBSYHqd6L8cVu",
  "key32": "2nfHkQxrMpCuUvLiRjQCGyzrsjTGCtQMoZYUE2NfntmQ4QBxpAvT4JuBurHpNpFT7RbvZmHhgnPaTTHpUn2nXcc9",
  "key33": "2eUuPNNyoxE93pvHrwzPecAXkcng94BiQmL1deLhLeqpnpT2zvP4vprCkQ3nGwTuazvE6En2KiW34nGnUfoAhTzW",
  "key34": "3U2KFq4m9nK7PcvTNwoDD8T8q7knpqgn7fzNmXWc8RK68UawKv2dFvDrqfsFMdzUESRTbH4SaWnFnrg8iwotyFU2",
  "key35": "DGHfDkDYBZfCP4qhVAdfFAU2STHTP1tYWeaG3HXoZc1mKJJDFsbeE7o9nf8V8iDyoeeeeZw3EN4o2gCDT7TMLs4",
  "key36": "2rLhLFEMakiM8dA8o7VuAv9D4QecRFoVhUr4NECzG6A5KAPqyq2yu3pgDMNuekDaAyc5dmQZRBma2hnQCB6ZMRAH",
  "key37": "5gWTRnuiyjj1JWgr4BVkXwuGqSq9WxEFWJnvrDmaXtZmwCdp6Yi3Ef7xqXhtxj6tWPedVJiGSjxGAk6VKqs5G8XU",
  "key38": "4FYE2XhAMDP7WL5X5WjqTnnqU5wABz2WPQzLQHLYhKqGpUsS7nbbXAgEH5VE6mespdqqxY4Zz1EdorK9aT6qYrG8",
  "key39": "5TURRHtUVkDZgGiXo72G1e8reXdVNLDsJUFvisnv74hpJ5EuBdN76fQdaptWs5HabY3zW8ieuzimXbkZtT3F3vK2",
  "key40": "kShVrBFEjnENjazyxZGQ3vJbcYh16fCW7wLKnmH46PjPKuvnboKWDwckXRpmPXsVqDWncBkGcM5AMHbpCcNG6Gp",
  "key41": "3iCzEQJeUKtTfbq5U1R7u1CBQASjkpcMCqJJiiPt7TXoQgy1zjzSRMiin4yxQRJfbZ7EHPurgZPsfiCKaGyWmXFj",
  "key42": "43J4ZZRbW8XAwhomoL1WWCEqUGH3HgpWYM9q4AxS11AEYU8YdAweCY4ui7rYF6A5k9NzEjzcQqPKPCFWQGBTnmiK",
  "key43": "5Z9DqfUVnmaexei9o72VPh9L6sQrkFUEppWfhguBud2i6bcRnoTwSDJ6dY7qsU6SD9LC5fy8qpyoH1je1kbsWf2T",
  "key44": "Sxvz2bkuoP7pNzUFt8pwLLzqfQ57gTwHpgddzdqGf2ndrgFPk3dhvZEzbhGifWmdsh2vKpNowDB2sRCCbvv6tpG",
  "key45": "59uVaAqpWkbxQXuTFEZRBjEECc6ELJNSqpaKx5P9u8Q6xrKjLudhvVetAGxm1UNMS3dKE9bSZEiqnj8yyf4Fp4sD",
  "key46": "5YGCSXRtDwgXuo6oXn5tYrsnjpmJLTDbwqBFdfAYUH2k99F5wSJ4pyNUQSGZizpVdyhJpn7B5swn78tUamEjcPzb",
  "key47": "248fQBZsMDrc8ibRYkXNDVUnLQhf1mQMBBM8VkfucNiZoUtC4VScQ87eP5nmVq83zVeXPB8rDQpvEdq5M3ZPd8sp",
  "key48": "heTEkeL8qbnysRBtK7otPKpkFPRrUpi3rJWXGhd3cvZ99XWgVCijGjw33RSG14TyKUsoKNmeNBQ66wFGQF4bTAK"
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
