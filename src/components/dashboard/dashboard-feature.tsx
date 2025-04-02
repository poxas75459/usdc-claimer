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
    "fk1yvuf26mLwRZXKvN9hwRsyhR4UtjvTckevDVcmYmjfBfAmD7qpP6RH239C92zLWiLhdtT8UHwN8XFtevxZAtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DQVsA8dERfHxrRGb5gg5RZ3heWnHHJaUWVdPnW1ipNDqX6rmGSwUwemeZYFSzNWXuyZmSmrRLfGW4TPwHgHDYQZ",
  "key1": "4Q2dzCToCyDKG5CogvD7sZCG8aGRdGW4jFkuXMbMqFwxwjcBML9SZJRjM14vDw7VquKuaPW13teGPP2ZBHZhYzFp",
  "key2": "2hCthS44QZK6Rs5RVu5bCr9x2332h5qqgTurQ671sZpTBhzQrz53NFBG5RfudLKWFPGWspFEdBFG2AHsVL6BLh7B",
  "key3": "2HioPpSCiG6x5Gdpx16BHujkRrp22W63VgUfPuetnfgWecBXJ4A766e8jiMhcStXAqz6uDzjcjqk2cWAWUTvTQRT",
  "key4": "z1B6ex9N2KpXSrBY8epnqFMEBdnwtR4vs4RBu8iQ8HKWhFNLREXUJvczQJdvD9sygTvrVvyr6jd1Cb3MK2T1ZSN",
  "key5": "33AFbRRjzGhRNFgjcXZbdTo6LdDvBwyHzrxWyAiEee5ECzdeFfz78KhVBVSNXTeSSdEdE4xPZfy1WKPxM5v2MaL7",
  "key6": "AZFPoLu3YMT3TqEhXXnWKas1NuZ2qN2zZasf2Q6knnEGZ92caQePr2HTtBcyNEZz4KueXWbgJ1eeRmhgmFBauen",
  "key7": "2k6fRBZYuF21QRi3FNgGPFpmxG1jTHyGcd6jFF1ZaJNFoKaGnyrwYHMFHoywbD1UbX14MSzcJCviP9rjeZHWMB85",
  "key8": "36qDY2gJKUfAyPwEMTN5ogoesrQbs8SEscx1G4VRvnwYaNh1GJ66PEionLMVZUzTypx8wvRtu7gwX2GGJ75SVkE9",
  "key9": "3umJFkJcygPrv2bcdPAAgzPPik5Gvq6Hysi34sAZftBk84XM9bKiMNvo8nV6FsTwtxKbC5eqwaGDjE3Pz9i6yCZw",
  "key10": "4mo9NDS7FyYE4beHUVTNN4zt9ia4LETFKFbjgESF9PDyeBp4gzNX3qhHjrD678GBDWx1CPT5iCBd7xnDCYGwF3nd",
  "key11": "4oLsayAQxUmBM1YFy4jroxgVhPB683CrAwb61HZKKuvwSCxnUhC1nPzSPYdv5FZRYKo8JarWraiNdR3S8gXyVF1A",
  "key12": "3oxJSS3ExMxBbjjBUKJTKo87KNKUxJSQ4VAU4GdSFLvoRDgpFd4puE9CRS4mXEQqUmsa2SRdj5dK7BgSBHQNE156",
  "key13": "4kJTJgjRfx1cYMzw1t6fryuo9sjkWV2MZMzqRBxKMdtHyoqNkf8xMq3EPBsBUBAErVxLJxATsNBRgt1o4xi3Ftj5",
  "key14": "Tusr5xw5QNFxeWYW8MWBUVRVThz9ghc3eA5n373uCquZgtNtYx5LCNvqNNWt6p6hv4B8PfZi5ocnPgHBhzDS6Mc",
  "key15": "29t59XLM1CUgK1qPaFyzVzGUuhP6SLuCtKERaJ5WBVLGFSQA4BYGPLMcQoYfyBVeevwvNwMty9BScMRy99niuvMF",
  "key16": "8orhxPd6m8vbV4enH1rQqU9Kfo6qPZJFgvzVHYHosfu5pv1mubMbzYsW7FNcbjmYFW7eJbPo2HXg6wxSprbPNG6",
  "key17": "5LctcqSGUZdaQJPXXm8r2oCJFfBavksPYF8T56de5SfdckTvn8tXWF1xtpXjNXpgvfsCLCbKxj36475v95YHbufM",
  "key18": "xQADrM5TVziLN8C7kyEBJf9K6MC1b7h8JGwNdBEUXp57JW1afyn7YgbkMR4V6oRRDe3LTCwV8dLjpeQnd5NR9qK",
  "key19": "oWd813XDtNjMDAroqCiaU9gxfDQM4NFaYnYJC3KauZo3Gnr85SU4JMzYpP19ydyvyjT4miGs8SYVu5yJer1HpKn",
  "key20": "4PusDmwJfPS8mUtMYbyQD69VVWA9TpM67XeJ57s41LzJdG6bUbVE2h1bEbFawRjZU5SoyjouuvLmkSe1s2iNKEXe",
  "key21": "2v3a3H6ts6YkAFjVeFswfiumvh4SdhqAapLNybEPK7eHNeqeFQ24ye6W2r6jf6MUYJET66sKLDo87mi2Ts54e7Fy",
  "key22": "5dtAgt47wuhaQ9RmQhphNg6VXAbLfSedvNQcKwDMAvmtmZs9VA9q1qDmqvHAsY11Bg9mySkEXGXpxADcWty9AHoq",
  "key23": "3bUMuxycMMGEXRR3x29fjLCmh1q5e9qUrYFx3T2VML2ctZE8b4N1vvcH6i3VmGLRufLXAx6LjRZDDoYbo1WLxSu7",
  "key24": "pj7ZxstasZ1FyP4GPbcSRSC8Gyc5Bt7RYuEtrgeyf7yhWHLz4jXFmGu3QGumRxymu8nQobM2GdNf68Mp1THmsL8",
  "key25": "2gavBSDNvUy1u6sZgZ3vGxyi384mpjq4wPRrc8GzWTkLHDULFsy6faxeFaFB2WP2hnHpfBKCsYScahPsgPYutqhX",
  "key26": "5hEH3ECkLcEUtkhrjhrHBZtJEHKTVGqq8VX5xptyiNsU1iX3J3qoxaFitqw9HgFWrwAegF554n8CVecKDJ7P8z4V",
  "key27": "4hvkbS9fY3gD8wnfePsN1RV2HDxkXGP1Spafg8heoJfzke6yCh6LyAB6k9iWEwsddJePetnLK69xcDJ3P3xJdu7V",
  "key28": "pCLretxPtuNxofe7Uk2afR7oC79u2nMdnRrtB8f3QGfmoAgZYrtYRjFqTkVJspG6yn4Mua1CvLsqTtTS5mpNTbU",
  "key29": "4RXrVw7jDRi1btwHiDVQwAiF8Q1efSJofaKAVyT3Z6pRgCyZUrdn9AwneCyZehE7TZB6insxdko3U17tubWjwGf3",
  "key30": "3b9jsB4BS5ZLnVWw1DfsJXtRQ3mHHdSHfH8U9AratozvSVpYab23BYTmRXYdoHVetG1reQztN8ijRXtdw7oYcnbL",
  "key31": "4o9j65DRHyW4ouvc8DDTYhJYfu3JLUoxbbRSS8jTnUk8Hz9nUvNsjV1wXaiTE8DhJjsMXqW83iyo8itMqV5DCjzz",
  "key32": "5pBVPH6wGMwmRAXgvHemuARFY2VRJqZAQnYCK6icNeS3CYs7DgT9BKt33nCbTBz2kFNnC5PFjCjr1rA3KaPe2pxW"
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
