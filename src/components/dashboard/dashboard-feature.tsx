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
    "4ZqBev4NwiwUkXNeBPAhmW3bwhRcAzTN5hxUu8uEquvLxFgk1shamjt3jN1Dw2vEfT9oAH6bumAqNA2Dy6XXAKvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59cCterBJ8LtFqt6Fbxif4rJpUjtszEYvUo3eN6Bi3p7iaiukXRR2v1pwtkCfaLRK1niubDJeL5sVTPSQzWP4xsE",
  "key1": "4GquHHLpreszqBcKCkpcwtmibcZhZRsj8bY1yPJ9kmuprEPTrNZFxYQRsdop5G2dHtEkSM4TYoGNQ8iwC37gBDZK",
  "key2": "2H8QLLzipKQ8Ntd1TdYALu83UCgbo61QZgzV14vnD6JNSTAZgWqxsGmM4rf3t7WZgeVtS1x5nVM6Jh6hQBDtuyoa",
  "key3": "oDJX65QC5Q2nv1FXtmPnJGejH2SfDNu18WQAySBCNARV4oFEY7su41iuEcG6169CM1EauV42PMbKDhmJneuhJxH",
  "key4": "4aVrgmr2Zndbg65QynUi9nu9Mx81rg8uD2cp5NsY9whjYq2nT776xQeqkw6LN8VkhRVMpt1yTiYRoybXS9fYsZ9u",
  "key5": "66oyjh5S6pAyQPgackYsL6gmyQx26GV3LjcDiFckkA7CtNEwkfbMkuibbqT7awtbZM8ApYTj2thygCQVY1iXP8SE",
  "key6": "3LTFFMWyoMaFe3qRisSRTPkAVuobxmLQpRmnp4xU9jh8izW8foTsUeW2qBNki8gxtP4N3Hx7hr3pzeKKPbv5ZNGq",
  "key7": "2mjmVr2WLVAdqLYxX7ioqy9z2j3xS6JY3pGZyaiD2By5PHULudCu4qtA7tT9EsszdXXuf6ZsvkExfTLFcFrXbo8Q",
  "key8": "LFgCUQzJGCHkEgX8vhRfor4Wdb6ssdwK6JgCccKm3jDHy39f8zCc7f6Yys4tdLnR4UYKr529Mn4o13qekWLiiyY",
  "key9": "5upEJouGnwTGBc5eY3LMrRiXTokFwXNQoR7iKhESBf5uChRMbJCDGG7X2J7DiHz3kKacU2VMHMhGt4vRf6W9JU5K",
  "key10": "gF2bryJaFSzFPaf4SLWFcwQUdgY6imCpMnvKiNWiZFAwe488SP47MerKe9ztPNA2aeFdNoZMjbuN3EZFz5PSyU2",
  "key11": "21NJarX3Z3a5apAAMeXendePfwR7W72mMpcEeCEswkPvHKBPLiQJXtSv69L6pEzkG2n18czdV489HZMByrCKS1Kx",
  "key12": "LPwXJkm3NpS22TsbZQVbhZ6JgoU4UVJTpV55uUMNmfbgMB69wsimMcBaVdZYSKZBn2Qm4RuMZuYLPRXoy6GXy8i",
  "key13": "5br87fEoB24vP1c6PqgdwDHnu9jeoKrHxJKXx8Dw4ZjPQdxMkAvdUvSjTgHvVTtpYNrY77H1mbdC6q53NJF77WHY",
  "key14": "4RXqumV6uaKwDL8igTenFodSxJYyGGnNw8Kq6hBqmKVyyUZimnsRqzvniKp8PVLj9zMs3Mb1Wz5r6RUPdUKGySfQ",
  "key15": "5ZWZpi4ePhB4s3hRgaAayYXZSuSAf5ZiwejPi4cp5vJb1wwDb3kc5SsiYi7NoTNXg8Bx5zBAyDwPHtUusk5rR3xw",
  "key16": "5eGNrGtCturz3WXrvgLF3dMvET7Fr269g75YNRwxFZGNxcP4aakiD9zwuyUAogzaZNCSonWkCxvM9pCaq1o4k2qj",
  "key17": "4ScsTxAnL4kY8AAFmTmNhPLtgobvzNZiHcagkV6hz8VAJJKci6iq1XcLPoxBLWBomMhHAmf6XTaPyXCHFnnuNpmV",
  "key18": "4UMt9HopBiC6nfj8CtYEEnCoqkTL2kScTERYBmL264JUHzKoyZSeg52fnLKW9Ur6fc2uwXZ6x3z4X5CwgRj2YgmH",
  "key19": "5T2rDobSdjQUvJSQKRRmh7uSzus5BXwFVrk5T2Yeq8SBfAZi1Rnoc96J52ttPM2c88TPeZypZDwcY9BSjeKQDjQW",
  "key20": "4wCpetnfC8oTGT69S9RozPKGdUGa1Z72ca6K5YuJs7LUV7TjMqYKnxtwpRvoo6rdUj7fRGP5zkCpPtPrvWSpvP5u",
  "key21": "2mCmL2SozxfCmW7iBLU69JLB8JTmLQdjJaMdYig6cCbaBkRpQggPp1YrQ8sRST3dEWbzvQ9RLGDbQqJ3FJ6Rm9KH",
  "key22": "5vqQPUF1NdiT1vTXtA6ZaTUtwyWu7L5PnfaJA9VorPzCecQ4TeLN4juov9AsP24wgV2ygvpZCk7B6Ma1C6QhMg37",
  "key23": "5jdzFWcwz7YNphUgz8LfQSBgeGDREk7Y8bxb5NGVznvzVZT42htUPmouS96iUbY6DspYthy8LTPXtAh9cz59QZ5g",
  "key24": "4u1DXMHRz2Pgi2mvS8EED9hfEThEWQDPkkgC5fvJ728je7ixVx73xdk1r4LMehXuv75aU4bRuYrydE9LscdfQ4JG",
  "key25": "3etS9mx47meqtWwHGm31zE53bJCwyYq9gCAPgCGxSD6wo46pBgLMUXXfGhrjn179HtdVNFgo3GPPdUGzLDfpSSAX",
  "key26": "59pg89TcJjwiQaS9JoR5C2VRQGmPYRVyyCLSitkWtBJwaFpDLERjwoutSTHQxu8o6QaZd7Y1fko9ZZrn3rvispnw",
  "key27": "4FQT4zqq6XHchfxeFQBh3y6nPpjQqReLFEVNHCJZkB7ppmYqKb2kUiVRa3Y3c1twAyYrDFcKDdffJEfhBhiBAG42",
  "key28": "63mFbgrmtfereUfba1E8VnqeKVHDj9ue656bXF4iRTRvafTG6AU89PwoukHRY2qF8HYXR5hHZX7FSWfgEQbo6ukf",
  "key29": "4dx89DgCmbqgAKk4DcGVCR3y3vZtEjjHTDTTxHfqv4SL1NUL9dn7Qc8UKgxkYqF94ZMNZg6SAQiTXwPhGZPwWwHK",
  "key30": "46cAoxAC8WAWLy5duVL2n1uSDiCMiZrjBuupe6C759kjj78Pe5fmyy8BbeQM5jgEAUqBEzCYxLgLURWpQjQ5stnA",
  "key31": "q9EaqaaE2sV4jk4aXdk3v12TidirxgErafWssZrebkq3nvyEZsW27GMzPxhWenXsr1Su1Wk3xtY4a67c1LUveZA",
  "key32": "2wftfzct3eZ4S7adYBivkvKS9FfxKDBeSVuSUinsLfspGprNU6NCA2yUg17sta7K2U9VwsDHhjywXVyBG6Bv1Yxt",
  "key33": "3G8cvm1P1U3pPnhhTX2dqzNES4CcErBrg37nACGqp8vuRUSJFciZGgD993W2cNEYSQj4mDD2rYXJN8xLnwQA8oBw",
  "key34": "TffoKgQKw8XRxwsR7He8jBK34WjBYpwC3Fe8SdUibhTUFCWDFaiuhdBbUSGqPYT41RGc4N6bGqCL5uxzhwCfXx1",
  "key35": "5Exi5LUGqGcCG62gWkR9gdjV3Ev9UaBhhJmsUaXi1kSLVmrwkLNZ3Z2WxWoNn8xTgvs9GmX4diLRSxiBHsCHzr1A",
  "key36": "QPh7QMyMmDZj91G2PQy1gP4JzB72255t8CFFf2D8r1FxpMA4JeZU34aNUxPwYL2hDWwyj62gsnHZiksow8CXPPo",
  "key37": "4DaSU1NWHeWLnEv6uBXm6w8nyBZuTvGVvAyQnWH3qHcBJDg2QWNqMwvSZ8hYLUrLSVcWBkMHNaQyTZS28b8LqaSK",
  "key38": "2eEmsoBfuV2fk1vQ6w4WisKdQeHdqu6gW65hjPVzuVPABLuzKddDj5HZSy8jH7ThBzxbyNpcZ5jqcw4kGaKtno5X",
  "key39": "28NkSB2hAjdhsf79vysw6oR6Dy7FTa4PgvyFe5yqyYwhs8U48n5RBKkbYBU3KequrqfE3K41Gb1kB4snek7dfZud",
  "key40": "3kH1t8V3R9mUwLQ3kBFpdhESg3icbSh9RoaEWZtSCDG7RvodRXGYQQnxVo3Vciv3KHwPxWHjhh9Xu9RZ1cxygEgY",
  "key41": "3pwvsYPem6NJaqtYB3ELtBBLFQobHtHc1xraNX7DtDSvy9AYKEJvq5oY11CyxTyGaw7o6F5Vi5oxVjFedyQXkkZF",
  "key42": "1vXG3RmGpwCdDLacbfZqQ3duFJ1sh1c86s98PA1zyk6vEgPC8GyHy6fCsiPgY8sohaKbq1FsBFJXvcF4MveSJgK",
  "key43": "2rZ7RnheMPinyG38ApZZF8zEDMn3yqXxZHMMEDBZD2skez4K9iCrNW1QvGddAHFZtzP6x1ZjFvyzfGApua5hZU2a",
  "key44": "47pxYzvGhyQQVRJzAuU9B6fnTXxNWPWVEWLB9YZAoh2Vk4e9Coc9cptWhcEUHzJBfjKK3uYRP5gXLgN5WyDcZn9E",
  "key45": "2YcZzTmPG8DUoFST4paT6r5vhjc8ftydv25tow8CzwKwsxQ1wX6RuYr3dYrzezK7PBDDvqsL9iFuBeExq24YK6ms",
  "key46": "5mjEDdMCNakGRnUsKeWA945Q9QBnjmTTK6zDbX9sbQNj7rd21KTRT4HLaARfuVQ7dfAiHGPdFXcW446dWYJy6cTX",
  "key47": "5g5P3nW7iyfe5oojuPQ4LemY5nuQtwXHQiWczcbzowCw2d585Wpb2xspM96jn6gGBxuQCy4FYgovoZsbJ5Mcjdd",
  "key48": "5kpqm2tmap1Vxfu1RreEduef9MJGgbpcYoihAdA9G7HpacPz78xgR6P8s6CF1V8upqBdgi7BFJJ1keN2BiZocgdK",
  "key49": "4edRgiSkpnNeGZoD8gkwXCYhFdGQsDEdNj48rGTMFa8ni5N7DaYXrzHw1ikBHsi5vGHNCw8x4DVaAwZoXiB53gAG"
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
