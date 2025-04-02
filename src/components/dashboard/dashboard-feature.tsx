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
    "43oEMQf1Zczxqi9vHKuTMkaq21cHU3hnvZ1CrDSL9qt7K6YFQFU2PmU2cuviu2m6DsRDJYfdziKy53Wy8F4gS4Ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8ekc1ya2f1vjGShRxsghmAtGxQT7rqtwxnc9gMHSWYxU97qVL3pdjBZTJAn7fg8JnX4aCc8NiiXVpvKyuX4Tou",
  "key1": "4fESe3CC3uw6Gddeu4JqNFLw3ND7SyJDc8rVPYhgSLHee5assG6FGdxPiBq9buc6vWXNfc9mKF5YLC4zNYfe8EX7",
  "key2": "4Zxxeqh6mEAFGZXTscBbn1TUh8bHL9BCZaERYvRWL6gg6UhbMWmEyLy3zPrysPZ18jougVNkw3E14GXWMEXU2Mkp",
  "key3": "4XJufron8UDNC9bzngcHbL37AWZuBpHWf1dJVMVaFUzi8rgkyJVnSs1HMF992hoSHu4RYTuipx9HNLgqbLZvfpN",
  "key4": "3dVHruCygNMUisADJQbUaDBKnVjU4QBycFfSYxX7TgatQ21sLMV39EBPbS6AE7H474MveKYh681M4gvmoRuCtoX6",
  "key5": "5CvU73vJh4ixw6BjZ5ER8sZ7PVV28mUzKeRhuvfr79A3ERhN6ApBMwtDXdfRmPJHroSsFBJyp9NuT4LjTUgPrHWd",
  "key6": "38mjYeFgpkdqaxis7K5a1N79ukzAUxBZgpMtU2VkrbZUR4UZck1otZRnR135aQewbKjSvBcpAnGWkVuXGHktDmG6",
  "key7": "2BBh1vN2xbfYgiQqPCKqNkXD6XE8c3GTHjvnEpGsvn1QaL2nM77DyhT6ektnAzzwNAVV9Frgq5Pqf8hfiV56mnzA",
  "key8": "4ASFMRdRPd66YgimwP1QTLM5hjx35ToZHn5sJiAKWXT2E75HGrj7LNqWkq3WpntoV6Fr1fHmGtetbaaPX3sxnzQh",
  "key9": "DXSZhs6mkanY9VsHLaDdWhxmwRrvAZMtNiQ5pv234aLcgwe9JpAspU3H8aHjo43BNNSZmxeAhbiAxUKQDyKoQL2",
  "key10": "4kR5bFqVdqQi8vVfsvVHi7hkVGUFtHVvwE2Kq4woBsYaUArMCinnn1obe56pHYvgyBVBuy3KMQZHvvJ8Vn45sHCe",
  "key11": "5r2F832SJbDwCuMarRjynYiP4jZ3PmjwzntrXwiYmL5PC35TkeD9eFmh8mfy1NA94h9sp1gaoJTHLuNoki6FDZK1",
  "key12": "49kHkgJBJbwkKK6QdHWoLq3NPb8iSE1RS9Spj7PRoycG9wzXG75fJrCKWdPd1XXNDiHb7Mcv6woYmMccatxEC4AR",
  "key13": "2ooVKnLd4utNURxw1ag4obwnFpa1zyqjUQrBLoAToNsZ8M7eCkgzT9mDBcXMeHyLpphtcpcDSfZ6r3GVErgvKUQi",
  "key14": "2nSotu8C2fP1h1wAB4boo817an7qGQJZuWGMwhi5suiYXmjDEi3FmBwfezjWQik7FfqSd2bykLgKKpbNDC66XGNU",
  "key15": "Tot22ZtuJTUmocin5kukwhVaZ8v5f9A3aKvjZ8G4UBs12vLMVfA3HHApvFoccxxjyRh7Uvid3kJi5ECAKJ8DzY4",
  "key16": "2uSRqvsPcjXGN3KV7XiSawjDTfH8wnywo9ykayDcGK4nFs3utDuzUDXCKWQZGpAcXmGcAVtAcZgRsPvc6CrAK7h5",
  "key17": "3eK7gQiczE4utEPxT4QcbABhuu1MEivtpLvRp4yTNdiMvgdjQyg7egFYyaQfPQ2pB3xK63qYXbLMXvazg2y8wTKf",
  "key18": "JjgD7GwM8BNVZRP4XYqo4M7YRbtnazrvrvfhmes4iHF4LZfvpbPF1cRRegkvRuy92TmWBaWuDipPtZjKgArS2g1",
  "key19": "4jZe35K9AcBDenKfpiGq2t2LKsSBcVE6RuBvsCh318vdCQzRQvQ2pdgPqHyMkLxntUioHsuiSF6SDzdmTnUxLqXW",
  "key20": "33iiu7g3bCaB2YsygBHvVXvUJAp5aAirJSxtjJgkbxAZAsXHA9T5a86SP4xCvuvpG9FoqT9gjZhQwFjabikEmb3u",
  "key21": "52iqepmb5iAiN9oJ6TMNmh3cVdHPsZZfFHkNy75tGrwyh1hTaXxLp8HqkM4z17Ksy25ZuoG1rspydsZdg8AnN1Dy",
  "key22": "2d1vrzivuFKB62ApbbiruufCrK6Tkr38Ek8EDC8qjRcvB4tiUt9gfiLsMMZ3qZx5vNPCuTmmPbduxduzV4X4kimv",
  "key23": "3EN1f8NNc6D8sTvpaPmHb1pyN1UHaW5L18NUUyGd71vdfxW2QYh2t54L7Q3MgKikg4YHjEiXAiH1uhY1JPUo5Nae",
  "key24": "51YDhxMu36uCKjCKyg9BmcKBo1QGnn2DzZkdNe74wjKKq5PZq7Qdhp1sCP8zidv3mmZDJn6X36mXjWFjtozwr8hd",
  "key25": "2tqxkThc839ymuG7aZPB9mYHeWwXvxNSpRmSjUmd1mj1nn8jZyBeCvmbr1RdPrE14MophkrbEawsXdm9pwe8LqVr",
  "key26": "guGjT7GpWzQGF63bjzjgsNCm5PkeTAC6kywD87ie9Q3ZE1peLTwfZP8CF4kS41smPwq1vSVwe8kb7q8H9BqpXJg",
  "key27": "3zQmNaaRfSocs4Gn2sYXLWdiipm3GqJJgqtfWqs9C4AJAVqAqKKR1sq6fV4pAT1eCdXmyHLtXjkaHY21ZP9qgABY",
  "key28": "8p78U5y95ZT5xkG16kLfcadTzXU31RYF877AnP2787FgE9VhXRarfAJNVHQKM3e6qqr5rq1PynQvUuY8MhWCWpi",
  "key29": "4XdiGXr2zNR7rAeHQcvTetARnqP1x25NqfVSLx5y6qgPVCigQ6bDJdThMNCqawApZLkWbSk7rBerNFcu3xsQg4Cr",
  "key30": "tY9BRnzf2evZbadf7D3LKVhzvCcFvsmJ9AtwZ2oAneN6LdK7SzCDnamwKeNaX5WuMsJn5wrwS5e9JRgiNMEcDbH",
  "key31": "2Fv66v3FwArxg1aPXRhYFvXPJJrkCamr3iF3regriqBJLBxu1yjoSxwc6DJJPwuHdRLu7Kd2fs5ud1VXhikpwo9J",
  "key32": "5onGNoGpaR1TX9viFfQjDNZSV58A7262EbzEoLAHfHNGDefsFL8YjbYLVckLDET4UWJPHgzJQVRVEMytN6GR4qZ1",
  "key33": "5VX6m8K78KKaYbsARU9dGA4MmFekCj8JMmTkQknJgQUntRBdAoFTUczBQJLWHf4MKMhH7H3MuEGugHhmY2qakKof",
  "key34": "EkEV97tFDXPwfBoKAoudppmm2stewpM5XnnJysCvfGuoStNMm1AQEjC2nKcLFSnXBAnCo1xFiVqdn6ofd4fMJhN",
  "key35": "5FXbrp5LE5DTsQ6vdKZvc7HBF5sWrsHUEmci2dLtG9m7Qao1yXqYLZ2dJn1WbBULn95wb5J8Z6PVco5DKMUrPnPp",
  "key36": "UzZkGyD8HSN1dW6eLXfiNq8anU5SdTm3ca2vBHH6BXFPexi8MtNPbZii4JhBB6LghiMG5Ryicfx5iEgf1tyFX7d",
  "key37": "2sxTJGPkagJK49pHuG7kfmTWa5UzSo4HiNMv7GjG2PLFhocxoSqWsfw9F3T6WTywxQiUtWRjTGXnLcAwJbGQbrP1",
  "key38": "5Pbzed6A3svNLYB2KHpviENgLKaf48BHrKBnWShNMXuG6QP6GNT9snNEtk1Zt4S1yNQkv4azpc3SsXV9oFpToB5T",
  "key39": "5RihQrkQuzHvX6QEAD2MGBzf6hJcczGFNfGSkDkFstbST2kXzNYHoejyaXsTVyR8qX8Xykmq6bBPZ4AF49eyACkq",
  "key40": "4PeMQBLC1g57j7vtzvFvpxmbn5UvVArqA11YcFoiMGTZpCvPpQopeF9LKam73gRUXrk6spHaERZjqc69F1zhk7zJ",
  "key41": "2d3Up3tmHsXenryLGjyviKPs6WtSvPd8xn5vvmzvcGwtNDK8Ku9wFibw6qRpxpt5BEHUWQTs8hhUE3fAaHBVP8Ma",
  "key42": "59fmXqqx5BS7BTd12X6kDc3FgKGP6xz9JFrfWTcA7JzNbB3qsUqa7jyoAi1D4YrFyoBsCajx4EZvcA4QkZYkY6e5"
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
