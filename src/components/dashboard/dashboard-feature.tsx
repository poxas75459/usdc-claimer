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
    "3SicSEivPX5NfBQ235xExKBLp2sVgrR34cT9pT68LKKwhztx8TVm11mbP59Jw3GVTPPcV1fBgS8hYuqSfMWex9Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Qiush98AehfWbRU8bBcVhZras5Do41RfnXEpGBnjycUirrLWFiUn9iwhAB2yBXD8YTAw55zQLNZidWUPSbHyrn",
  "key1": "oV3q6nAsk3y8ZzyaQrk3FP6BHapH1wryFNos5vGGLBbiqVQhXpnK8i9GSweM7vb1f2sWUKENiNMLRmkiCA8FWM6",
  "key2": "2qhN8MVrX1tZdULWUsXzjxzhaaYfQ8VgeQphHqCzJfCz9hHteJDZ6Q1BA5tkKxnhgHuaiKEWw66tjWk8J1CBeaqE",
  "key3": "659F2cMCbmpY8nnHzEjoevBkgKfwTP3AxHE3HK5iGfLkzhPggw39UnniiWziW8ot1v59E2PFMyDorb9y9maAASu8",
  "key4": "381b6TtMjx9YQua751qfnTQ3DBFDsTiJ2iwjfYgX3UqZRpe2XguYzQyNomeKaEg9A8Ls4KWDn7Pj8AktHRs8G4K2",
  "key5": "2MvG4L84EnLg7Df8uHuac1D9hmqFxS47iy1zv1AibcdhgFCpmspSFFr8zfEXwg1sgmmTaNwXgGLGaZXb5dsAMqvK",
  "key6": "2pws7YLNPTsmSMA4e65df9Ja9CaVyciutxSgYSLqthjYi4hkoJXcxA9c9Ru3gjwb5sfz3iuRgS6G8KHzRXrJXPso",
  "key7": "51raH8wNqmHBtC59yrdGpcd1fJUjLr4dQu4MpEZcJ43HaZn51RdTxNbw24uExMUWr8VKyvMHrVfnRAyjZm74EkHV",
  "key8": "46KzyVs118PiZ65SfedkU2wmFBm8npevPDUEENmgBxQbopove3xoQqyxJhpqbAXdiGXNiLguLAeGgt5KXauWBWQs",
  "key9": "4f4b2rLcBJTfNS4w6obxa11Ys3Bv9muQRzapfyM3tMaMpqUeozXs19HhygehqceMSKLZxMksp4o5U4qFhv9TCErf",
  "key10": "3UsLSiSr6av3WVyCQ89PHLcYuVULvxwKSrfSZ38AUYwN3iJBkWPkcj3fao4YiHFhw9nqWtefoeMjkWHS7f9ha4gd",
  "key11": "iV5b9XF8jXALsbXr3ixPuPsKueFNVQfyPXnfJX5A51ZF2e6ZwUJFss2tar4BNcmY3ajRwZrPNxQMXGW2mwrsBuw",
  "key12": "8d6aWFkHksxcBi4cVVefzoUvknUdnQHuKv3qpPNFseah8yHW2kL6TbyZ1YvZYC78qBoaHZxxSZfCtcvf3kCTAJm",
  "key13": "4YU8d6H9S8fZT3WMt9u83LgtxYuHxV9vgqTAKxnuknfXbjQCvNu6E3RSehyjnGuZb2L3ZGbN2hg9PQXDQUpeb3Xd",
  "key14": "3GjJxZLwvrHbx2zEtGvJasmy4ezrNv8d8jaXuoekrMjvXVQGCCLnNmizQp1P3J2GuqXW7Yv14XfuqWtkfLPJHbFf",
  "key15": "3ts8gX4gBnF2RiFVLdacrywaHar6vP1PxpYzpfhfxhMfiroGDXPLu1VCDYovB4WFwLo89i4bAXoMQ8xGwfig7amc",
  "key16": "2zQeuCRJ21diaxmeGnukNawMYT3tH9Y9n8RTXENh2oZyS4ZYzBswanQvHj6mgRYRmwKBTR1LbgMppjHfy1PNgH41",
  "key17": "xpVCySTbKnMHyP86BdVsGZrj71qc32sZ7b2SRyaSBVrppMxXQ4q6CJr3DozfkeQqtofvezFwJNC34E6yiZytRbN",
  "key18": "5NdAvs7WR4pwZJ9PBgPs9eZHjZqzn4qYbqdg6ofBsQ49rDLgQp6DHf4CsS7QUah2nCHLb534TrX8FKg7X8LvWFtB",
  "key19": "24tjwwtaRVZjdsszDEnssA7NYnj2EwkH2u2hKGVhzVoHNfz9nVqoNrmQnvcCr8BcPF2xvZhnqgQY4fnAGLUhytfm",
  "key20": "3UHQjejbcgK8Cp8cW4rzm2Vfa6ESVeQa6WWquX5vhSuC8kpuNz76BEERZdmpJWJgPW6QczB7waNuMRk2vkCsQ2uc",
  "key21": "3znrrhw4iAWgLLfGx9BTXPiHgbnjxsz85TYhCjD8ZRNC1ChweuyN3mFY2rz6NnY7gopgEQRm51kpmu5d4t22YuLu",
  "key22": "4szmQzuXx2F3hxcjkEu3x8qgPw5acm36zd2vQxnjJm5HmX727tY2bbEBqDvgij4Q9RSiVQcfFmdb7npbKbikzT8H",
  "key23": "38E7diN8eUanTD94M4nyQtXd2SaF6KEodCv9jB7H5diZvBkbWQjtq3Qf3Cr3AGLPi8iuJEiSx5hdpzRVDd9WdTPz",
  "key24": "3AFjuEkXBWL7QFUcs1qKyw5D36Cb9oWd6NAUx4XTooo1xtPAQ1jhgM4142D4wdeW4xeA6xm1jji3Y5cEfTKZdq4b",
  "key25": "5EeJgmpfrEj8DwuPXCmcSr7ZsW8EppZKeUz4Xwm6Sx2RhZNxckmQUuK9zVbbJK3k6Xtguwu2NK9yk3Fu8fofcefC",
  "key26": "qLRhKRGKvUBZ87tqoFzcZ2rzJDHm4qpbD5e4W3PgDY8eJ9ZoYbrfSL2GZZ61N8usj9DuResr2Sn4rsRcXynAdu3",
  "key27": "56cbF2EJ4oDjry1v8CuapaysZsxA1sr4bsVEvB8MiDwmbsSpMW6VZZzJrLJ1ePaTfjZkWcMEvWeSRyu44Yb4UE27",
  "key28": "PmWC3GBhbzGGLjCrBdHxHqrziTbMSZf4p4gMrCAXQwDktAYJ4CUsWEcogsyMcdc94Z811X6GzqLi8vpLFZuVTg1",
  "key29": "5wJtqLspvYrB7i1JM23Wx8BCtv2YGpp635hPNM8h6ezNY6bSjBwnuq1agFvfbGbosiFm9TrNPi4qbi2ZYHPLhKeS",
  "key30": "2rTUAUFWKuC9KrkADDuo7UTWERb5jGuCP8FkhvqgUduTmpSbQkrswUpiVEHhZv8VYTJk6HeThuM1mMNdX5M7F9dQ",
  "key31": "3dKa8gkikNNZnn3kQFtvNCAdqTXfW1qy88jGUDbV7ch7NoyBQ4LBhEZFarPBKXoz6j8ts9991vsYBVcxVKqZUyUe",
  "key32": "2fwJQbTvWZe5njbY4L8enjiXquq8LPCmfQo3G57RGdJka3E6eAneRoRSqu8eyrLTnyjwxQ3v9QA5B6jvbErsGKQZ",
  "key33": "2EAFUkrCi3iwPxkjBdkwBZELTHxsAkj6tm4xnAiJTbogLCrwECLWiJuK22FPW8w5E64qa8KfEDrTTqkCz12vTUJx",
  "key34": "KpDT7rD3kREF6q962xHCzv76iF8f9cSe4Jya5Jm4VgN74ZxWeQg2mX3NNuGFKwW8NmBS1e43LS3zJ3V3D5AUde8",
  "key35": "51GTd3uWKxtEHoLhThTgU7z1RPPYxndBbRkVG3XE4DLTkE3WsJRC2AjUvXm9S3SSu3h92FygRQvxmrYfAs5s2t5b",
  "key36": "2PKMpSNNeLrZAVCUmHZxdP1z5f8Qwk9Qf6CYBaJykw4nBiTWAYRDDQxMTMiVX1E32FPHuLvFtfDeTnAnT71tGKw4",
  "key37": "L24Hz4ukx64knqhAWR6sHMGpDwXLhp3McHYhSQm3MbJbNeSWcStaZPBbPFGM4zBoFQU3oRAADBPnvE6KzaLGrRU",
  "key38": "5cdzLrJfhZZVQWAHoF3tVhFgi43CB8AvJxCvTY5ARSC1VPDK7EP9jxohjf9JhTprf84tjtMLqmQf9DqZgo8CeE7n",
  "key39": "4bjGfwb1vD4hKRU6TNCoK5ytgCz2rpMgE92HsVJda7QhLE8kvNcDmeno7Ky9xe7hwfFnBdoKGAEpATyjv8acN3Sm",
  "key40": "Ap2H2VRTF8iRAs4UCtL53c6ddd6Vi4NhQTi9NVqZuLNbjozNMUE7PU2SPzFgsqqWDm2to1MRTnXBfXWMEJLGSxz",
  "key41": "awD8qH3z6Vi9PR2Wu7e4sW9zTSZFxbvammdc185pNRgpZMaAJQpmNzabBAXhyGPQBeiusAuMHV62D9s2x56u1Qh",
  "key42": "4eCQenZMsDp8ymNJoNF6ZdVW5bTBQq2CE1zLUBkMkWwgm855X1udt7M16JCrRALsyqGJYNdufzCjYuJzyPtSojAY",
  "key43": "3zpoJj4nQVW8V26qFkqfoswy7Qz2h23LZbAVnf4m3GKFKPBtHF1H15qpRPRCWcR5QQksy5aEQAsi8PQddanHqWpk",
  "key44": "3hWZhyFHxXEg8D9DCn9WDrhDgpFdCAQgEcfuZJBeuxUqw8bDxYY57L4wh1mffrjzAUPjeckSK1WVNCYZ9qCk4byd",
  "key45": "3g4UmkGP9FrDfqDrgm5Ad3TCHTbUia43g5EPfHLuGJc4ZURftW7G62bUvHBjzDkSWqPCXKnPJswpwpQH6KsEK7WC",
  "key46": "2v3kzcbLBwHJMbaJwv5xSRoh3E4Z9rNHd7Tkvozne7fYLVz7k2qtXG9vxMyKkUPbVjKmRzNF42tUwNjb8sJHgeoB"
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
