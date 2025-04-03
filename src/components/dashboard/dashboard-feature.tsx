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
    "59QpEzQrAFcdnQ4W9d5LHNFN6G2bDJVop6B1qHByDWZi3StTfk3bXY6jbVGeGzBLxpCYPWtS2Xg4ocGaoBmpm24J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uwBovHUHFfUBYQ7xTEoHyLAdKHyJBDv4HX635kxkVrH2waCWM3sX5SBkTeGFN5QYme8i7SDHyyfmL1Jc5AECD6Q",
  "key1": "3o2ueuSqp93rajuCiLAfeve2LMvxNFwd8hbCPJYNdtStEwpChs2g6xDKazu3kNgMSpKiM1MXYXxDH232B23W8D4A",
  "key2": "mS5abpyqmHYfuJNbzccfnaeS4c2JeJxD43A9RtZ9osxXgC1u1gbFUmsCyve9wCVRGfwPRo2oWPzF4MeEPkV1E5y",
  "key3": "5DiTkYYRvQLuD5xQ9NiCgcysrKHj8AwQZBtzbwV1AmHagFepts2BwrLUZVTJYMMKxFcfTX9MZyaUcCjm69iE1eFA",
  "key4": "2VsSMawdgLfUUcFFGYqYhu92FwnwtVvYxVoTFPHmYRfwX4gmwnftWNRjQMUfFCT8gRCUTJY3myNgTKTBoTaW8aQy",
  "key5": "4bAViyuvVfQEJ1pdKzPfMWjERpcYZBLP87juCePRAH8hNhGCBp6yXWRvoD24SHidVAfCD5B36ZZSJWtNaZtcE2ye",
  "key6": "45ruusPDk5FgJWN9n7mkkqB698Xj3qE7KBzKJNTBoQKrmaC9XkE68vS7VyAABwTegxykVKtooXRDwxxVjQNRzW4x",
  "key7": "4WjYRJRijE2DNyQuCa3dxGnKRfEXJrcbNLzQsPCnkoJCcGh2PTQkWwnRAkgCBytzJGrfT3E31rU3R1gaEVXGXiNe",
  "key8": "VzByQGc9rhRLdA81AwbbhogHso53EKGpE3APSxaZhuCnJcbL5KVMrS1J8auW3mUvqViBUaEfyXmjV1HZFgA8F4P",
  "key9": "2nNfUL6L2A8r2N4NYLD9V5fNCW8xvddU9nQVmsvyrkigZj5iuoCi7ag9Px13GXQsgvE7WucNfzaBv4cBaKSbXiri",
  "key10": "5fn8NyZQMQG1sT219Rb921LtzAEyGdEsshv4scSMtwbo5T3KvHTGbyQyMUASk9JBnxXyX55VHMKTZdWTZ5Awvk6V",
  "key11": "37zpYU5pte4vcckg4CK33o48i3caGSEyyzca9pnbrUu34a4HXh8LYFTseJt8awXQygkWtKUiJ7MLSQ9wPXKMTLEg",
  "key12": "51uFFp5Fx7owTVi8AQ5A2DGGXdTnhd2TH1BkysnKabb7ALASiLQPzRbVxLyLZdu6nryyEMefkyqboQoLM3GDnAvQ",
  "key13": "UbRkV8G4WGrqgojG4zgCRs1GorDRKHUPBJy9Z81oGZufhGD44EaGh7ZYGRgZEhwTJydS1QoJgGq66FnDfF31wSY",
  "key14": "4EiZ3Se1cBamCRRMecYD6r3hyrqVCjZ75we7CUhP4ekBhaNcwc9W4rLWtdMD31yapSQM3bL1Pv52bqFNZSugKQRj",
  "key15": "4dyXMukRJAVDT2DThKjjtdERM5J8bJAPNiwpT6jhqxSHtevhmib1X9W2RMEQ5orcE2qC6ir81Uuo8sMX3PiGUvUy",
  "key16": "X4EYXavKf12j4nSrBcLdsxprg91xpCjZ5xRaj8FwW4pa3yvggbtQ4aeofASpYUxxnVYySaAAqjtYwDFJL4gEu95",
  "key17": "5zZV9oqTy9brRcTngZDX9Bbx5jrmDXQ8mCrhGp4K86cgbHQ5UMhqFn2ZKEVhLZfj3epk4RSS7vFM7TPK2j4m1dYP",
  "key18": "2VktuuSGSuRd6434Z9SPZEoDm9ACW94zpe2SLiN6bniWmCvGj5SoRCZSqZaQZmFwe6jz8DQ9Bq6XPG14j4jFv1ur",
  "key19": "43y5VrN1FuTVsivnfyA6A7gfugKf5Bmq9WE3w47UaGVkQETq3awfRoDZaXjdgsxVVeBF8R8DRHpQuybKrbPMiCaS",
  "key20": "3H6TQanVq478AW7qGKvFMpTmPPaUsvUWPxBGgSa65DiDALghh7RPRyCc9d3ziMyPVdWZbhcE9W8SHB3XWh83dTKd",
  "key21": "xwCDYMdJqx1wmp5juHxhLWTXUNBPFCFF9aUt1ryVJN4JZQRcmujwP4ktpUuSYXtQbrhRg9bXKJEKmkjutw9hn53",
  "key22": "3WRqhZD1uSkwvTjHiWu3HsbNPy7cD9Jd6s789JNehkzn3kzpSH7Ukamraz9G5LAPGqTZbgKhwHrqR6ES1Yz44P2r",
  "key23": "4D2ZAj6bP8jYVbb14pVP3v9V8BA8kmW17vSGFmXUBSayLSzJxGMiPoLxfMzYssbCH49GsQUedprAZFZ6wnd1vVcL",
  "key24": "2t2UWSFwfeUjxV34jb8AbFa8jXKmujZNZ3zmiJf4oVPZmQy9oP9m2Ay3vnUDYswnoa1Bk2HnT3JL3ZKwc2dfvDV8",
  "key25": "4avb9XN6c6Z84VdPefQaF1tdXuRfwqsh7RwoJ1dgQKamsteRFamZidzVAuf8drb79FdRM6xxbNoiGq2LXttSfbMF",
  "key26": "5DFaELEtm31586MgoYVP3rzGkfQXZsKtPAyuskUVPNDuUD1hd2cUB3qWjDYXpxbPimCYxcoi6hYXnPFaTx4FCPaS",
  "key27": "4TQib5rEEPZFxyFrfhHTXyFyZdr2qWeipPHgQGFCgQiYTdzJJrUbKCaBfL2mUE8qgYEdGSG3QkrH2gNVovGaMai3",
  "key28": "4L63Nh1WhHmoata7yMTic78tX4HJVbS4LBvFmEVo4LTLJc1NUNik3GDdxjSMqAkeXsjBCbcxrct2BUkAPUbFXCXJ",
  "key29": "w1W8Si1nH76EAt5c8XMEXn8F1ooKSBfkw1Znk62fMzipaGThkG2qb5dTXo7ZMbhbvEbQ3pxJ6rKiTsefCGi8h86",
  "key30": "5uge9XrEYCYL2mJfd8rNaBswTR6SeMJU9re3UVzSVyhcQ6VtPKCXsn3ZNyZdcmCMYQ4G7igeneGEwQt15nn7zUmF",
  "key31": "27cdrwwqtUJys597SXVPJH7s2nYMq3F4RumFbnLX1tHzZ8yK9T1bntwfMwaTrh3N76pRHJ65fddW6PxPqdN9wmHS",
  "key32": "d5ykSvk3KbTvWfLUnpSWJsVF9JkwtvsSbKpaoywMNgXf6uCbTyWD1BYjd64mM8yEVkyNdBE4EK3QG9zugaEVPbx",
  "key33": "3ZWRVf3QQDsSWBqxkFASzPrLjvZs9gzeiYfzqSjoWEwooxPr7DELgFuQfUtm9ZZhqEWJ7pL6XVRPGScxX8koknNi",
  "key34": "3J2HqGbDgHPkpdavG1JVMQdfjT3HN7wHzvWmVMHWPjqtoPoLyxZuKbonW358E3nZptrhqhNKScXXa8UD6S67y9An",
  "key35": "4JCDy51bvJBZggVsTcVCaQPTDgsoeNaEyB2CTyQQmnahWLoddZ8LEagPis5QqT87okWhA8iauiNJ2BnQfPpjFj1R",
  "key36": "5VmQi6qdqy2GhAk8C8EP4wFvbVyxvxdxxqW2FeNTUCiWSctrD9U3EAkraBQ9BMTyDa4RPTvQBG9YrbbSJqDp671J",
  "key37": "3r7QCBwGid8JuvfAoFLoUSVfe2TMTgbtvwM67K31gYqKDkxecwiq4PZPtFY7V44Si6wtb4XdsRGGDumF856iRhQ1",
  "key38": "Cdeq3DcVBB2DGjGtvF8KjNitJHVe1MdqNg6dUTYshdysTKFR33UctCvvw1Wwuz9ri7BhPYuJUaJszRGQwjsYd7j",
  "key39": "4DLEeFdbrnxXw71tteNs6R4mtTx55EM1cmLCv8o38rGGLUZ2MVjRoSBqnfdAQJGmV7SNBm9F9f2cMLENHwfoVAU1",
  "key40": "4bAVEBLuzB429jo1Sa1JfTXCZpCHPsygDnPeTeY8sYrC1kUwm5iA61iQkkkibaQhMWRCZyMTnnwCxiwHBKQrcCva",
  "key41": "3ycev2SaWRdU2YgVjwbisRddmFsFa6rEtFE3eF8h9hLbeF4tnX2Wur7iBjPFX3CfGEuSip5M7N12BYfr85YmE9ip",
  "key42": "2GDXoCXEKkRdVRNKz6cUbQjvBBgy39cH3bGQCzfFTYR6tDHZR72fMEiER8XaUAjUTqHqra6EmUYKkbZ9WAMvfx1D",
  "key43": "61w1hzCqLcfKBNYsaJ36iNqpHABSD8qTw8bLt38mxqke87W8DVqCzqjrpJGTZuvaPbTTHkFE3bfdq94xJnpWZPVM",
  "key44": "3NBeCaGNNDJrAnvR7ncUgUVgBxSaYDv9F9syDe9N6cZmUyMfz8p2228AbBwzi2qtL1cRZvN32DVKxsvjX2hHXG5y",
  "key45": "5cazWU8ta3HoTS1wSviH8aJomE3SdVU4YM7hnUF2j7Gu3cHzA499m4ctTfp1bY8PtmYwnek4QKztddcruCH758FF",
  "key46": "neF7rYbdx8m8PyhMt8HTrQhkcE91FKVudwjBtCqnZQZPPBe4y8ZUwqGE9qyJjprVCjaaS2deMTPd376nxEyAQZo"
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
