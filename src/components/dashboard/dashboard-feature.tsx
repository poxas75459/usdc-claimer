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
    "5Yf8krBmpQU9kgkUVc8uF8XWBCEA4RBffvuGGEpDESkEJBog1vV2VVVFrxJJtxCroxQHoH2Dr1sHE79V7qDuJvaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H48Krh12TFKnbxxQiKjfx5uPUdsJBW19hsxfPjpcTeuNw7WdHXq6ptn9xfpLCi85FtYRab6kjuM3qHh2QfzP7Ro",
  "key1": "Qg37CAmcA1iGxEs2Zy9rU3euXHLnbJYmyfrBsNTCAAoA8MNYdaum2z1NcjYnxiki4WuPiis3xvsz4tCdmtHEQ93",
  "key2": "3cAAGZsjym7vWE4XjSuZNW5qb4j1BNwK7TQLWA7VauJgKfcBD7eAezW9sPmTb4uoaEARDSjQWGM7cwbgBcDBn6JQ",
  "key3": "4hS3y1Ed49zGLmpiVg3jVRa5gxKhSNriU2Ep13vQrdurhopUkLawfNJgekrZNatsosbpFZxbVhXDt1px5g3SnsWY",
  "key4": "4SFBJSimg2tYvUxAvoJKJ3ufsk1GyXececkK35om9KfMKuMcqN5aSj5C1LwhyDBvUvL7Tp6ZjLcntiqdS8wjmRr3",
  "key5": "4JVoBVpHgbxbE4VTqy4thM52SkNb63QkJEDwhkrq7XAi8TS86JeCTBnp4KHq5amQmD6QzVcewztvQmbkPJESb6Gv",
  "key6": "2HigkPK3ghxU3ojp2P7GFPngdf6dCefNMuQRqgTAqf75sjSs5KetHkBGfdCxFTvayGhVbimSmHK6wGup1J8kq8fT",
  "key7": "vFweqUcdsXtjQi5h7UrCBjdHddFsfpa1LUsjroqFer9CiDM2H9GC1pkpNQgVTppGYf9vcU2K1eqfe1CMTN88fZN",
  "key8": "2WByt9FzuGDf9ns66EE2rAeBf9igf4JhKgV9owf4vKDFENqwLaUoUXikSY5n7EUEd1WB7nbpgVkfqSmZd4iQGK63",
  "key9": "4a7FJ35qNHjbwirJ7HafgGrk9LYh3CJpwzGbjrAFoB8ZgJ51Xi4KVRWzFAXpCTxGkHdcX6cNDYiyu8A1a71ygEXU",
  "key10": "3qSYMeUdV2edqN6BNGDeDggX5pCfacagSdti7bVcd92aJJNw8qkfs7azJugFnPq3PVFvVQ6safYQkyyMherYYGwX",
  "key11": "x3Pon1Ro8Pyq4bV8rpJsoAdUTAriZxvLUKf82g4KAHrYwxG9XcAjz3pcihB9CfcarT1CWZuYmThG2tUrUxtEren",
  "key12": "6MSpR9FTGyVEYBx1uHFHyBwimjfoNL6wmSnXgEopuGEQ63t2CW8a5fAVgZANJZWdDpuRDEx3Q63P3Fp3ksMiym1",
  "key13": "2LupcRmNNwBw9NrPbdkGUCQi5ax9mCAo3jqg3Tu5WwMatmrcv8UuB9DsSEgGB6c81LDanrZUkcfWuqYPUoXvTvDq",
  "key14": "5HHWaxAaWmD41qWLarJ2orz6vgYki8mSBDx2EawkisEa8hkVWzP3642ZRvFYX3yxGyyMNQf2V3qVcntgdxShXurr",
  "key15": "2kfF3emE23iHHZfofpznD1P66xdtq7YEUGHMJmdb3ZRuRiuNgisttB5Y3A3XNSG6TtXMh3Moc1QMZcDkZWYTy5u6",
  "key16": "3SmPm73v4eiDjH5H5zneLRm2swXxLpPRd5JXPKhj1nxXd8hRnqANB8KaWToQH8wCBwDPaqpAumRFX5ngk81b6uED",
  "key17": "5phY5y2MYjTcKW2mLM2Rhb3AcZjEHDfRMVdVYeGSK2KN8Q6msK9Xbdh55aufSZePvtnwhQENbWU7ucPrTzYfhQub",
  "key18": "3yGDhBvQbyBFWAXwScFtJ9tVaMd3cTcB8heBdEvoVFbQnTMfqygd8HRiZxZunCbmn2c5ozPRMVb1tipWE7VaaMw1",
  "key19": "2LBr3vdMMbCFiqtMGydS6qQUmtd9tGi4Md5yF4GpgSDogosVzD11cp5xNedkuB2MjZzhyWHWLAWcsbxtvtSvBGdJ",
  "key20": "4ADwBLwCT7EkaBd3HngJ19gVt1XJV92SwdeuPXVuYpVcAfMF8H9Kf4SRvCGR1cjKi5yheRmsxuPK9LfZ5fgUCSES",
  "key21": "mpn4KmW4AteJXv7pbSj9oj7YEfXor2fQdcHTG9mmwPqokH52uqSAuvEUiwozJsm2ZE3ehvM5xyPKSwsbVTdZDMd",
  "key22": "566jftUG1xTdSP55MmS9FMa9RW7Fj3jagquNQBajqSU5zEHYuocoY1vmHPqXG2VsbnfkgmU5FGXKNdTSud4htXi8",
  "key23": "4JxeqDThi93UjgmSLzMQiD2R1tKCDjKKovLMqzzj8VKuCrUGv93G7mesXpi4Qntt1mhF9dT8pBfNtGZPxs1hDxwA",
  "key24": "64YCwQHxZrnUxTResyoJbnauyRK6SBz4xSs8Uth8LDxfv5AF1M5nmKa8pQfcShA52GpFT2gCdx2Lik8Zd3aR7AhK",
  "key25": "hCA8hq8L4yYk7gHNXzwfvQz1yHYevbWxBTtH6JPDsWggRVNCyDTS7yq7BYGNP2Z8tYpRAMiVpBwCjRRhTFafK2R",
  "key26": "2LXSPuEYRyuT9XnHCq9q1KbawePrETNVsgCbCFzv5uVcKxBr5g4Ad6GaK4t5UkzGpc2fK3werUfPpkz9RctQpXGF",
  "key27": "4wpRJ49ZQXvFaRYtwfC7aXQBdhWLsWRMeaPMvvpbj9bowD3sctQbSQ1BttuYjopKyGgVq4fPjnjVXoA8X6UoNWWs",
  "key28": "DwnG7gSofaEtKKBuowsKKMVrPjmzqTfmpCcpGuwwouiSVRMsdLMFbVGg8EEq7Vy2NxEhc7kE3HF2cFMFUhrFi9K",
  "key29": "mptCCHsFB9VfYK97WRtAWMeJAHGuHkrJocovrB2UcM7up6imAUW1ctcyuBy2njFE8vhu3ShsTbwyymwAWGF9e9T",
  "key30": "51c893DHJzMK1zvMNz4cXGruYpiubHjJwQB9QrPH93FJGduXbkaxzRsZkiCdNSDEo3poDpPMJXE27ZdFuLEoPTiP",
  "key31": "49ajfAgNoG2B858EYZEv6thpzi286DjMXodeP1bdVAnvxZYhFUfXZXrG7C1u4LR69fq72pUbNxbYpTzCZsdrNfhd",
  "key32": "4623jAJqgt4y9dNq1wwCB9o9cVFRToz7Uzq1NZyjCG5KQnwtKqJkR9L5zpCf8KTi9omy4pePA2zzLNF9AkjM3fG1",
  "key33": "Q8EXStzjxsCAC5aKrQTP45rwpurf3hvCeNvRR7GKHFu1zepygqsbYWwm5PvsBvV5kYeSf6BDfYhnZ5EiueaA35L",
  "key34": "4YEBJg9uZgYqbq3PvGbAGhhDu2Vn7qPgWfaX6UMQ4Hs8xvFRAh5vLbovnwhSyoEpfUu4g87s8RvG4wJ8a6kyN87J",
  "key35": "BKBo22boxi4QTNDJ9YDSRwrgM9Va3mnLZW2F4M4gTmWpx8MR8EHb2AwovyNKxRe8ose4WJABDrNkXsrFayTYcPu",
  "key36": "XT7cVWTXiJGq31JniwZ2yTr4zusjeHQfZGvtHDQd5mqcR1bD3bBnmejHRL2Z341WAVNGzAqK9g7x2ANLnXgvzMJ",
  "key37": "4AUSffRrrYmrUJ71xE3xEQ54WVCpiL44b1rmhRcp9pxwSm4RrkzeVPPibu3D7bYgdX3BiU2BLLKEjivcNZtx2d5F",
  "key38": "5PDgyX17uyjrXgW1WngwPzESjoyMu9YKrdmdJJJZd7YuA8LQZKLCBViTAgs4qL3iQF9NvCk92cJEL5FxPp68isy4",
  "key39": "3iv3vJ4ppiJ9sa2oo6PLWJD2MMqyt6vWjFTUjQ3xgcL3RMe3VjGuKehNdF7E38dUMP4sfEzHirB8EDdQdsCd63Av",
  "key40": "5LKHzfMtTB9JXWr4dNVCQdPf7dHoGsVGmj557CdPaoHX3Ya8tP9HQ3AwPQL7vuDxqyFpaHTn3kzNBRszbWPjkTKe",
  "key41": "2FHEQsqQHWxW9aGFzHWmKrNx31nAhTh4b92nBgRhiHN344UvpTYymRVZ11t13vFZq7t4HdHds8A31gvVHDAXdkBq",
  "key42": "zvm83Nr63qZuuN9TSyvw55PUrqNkLhG18wo1v2naaCZuMAEg5vha3M85G2opGvdSc2MaKf2Nfodrv8zaN2T2wDL",
  "key43": "4uNcJDd59Pqs8pukNJgUKCLACDpA9Uxu5ESdpLqXk2yNsHfsUD3fq1eycnCJLzutcbWgLYFrHUk5ygcQm2PJQDDw",
  "key44": "ZfQ4FtMTAe3TCobFfr9VgrFYr8LoWeW1mWwyMB6kx57AnUiCDHcY5Z3SEneXbFS3be9mqCuGZKktQZqHcPeWv6V",
  "key45": "4xPNBa4TYqa8s2GLwdqRVETuEN2tNtkP27j38KrS3uMRkE4hXLoQXaBGwceeYSMLZxjCw1SRwCZ7FrtaxtnAhYHK",
  "key46": "2HGZsXdSqfH3hqPxSJboTMFax54xhsYoUm1sHGFk5N8ekLDpJeCqk4wcvmewj54SB8cjw5LB1jFDrsDigJKevYTw",
  "key47": "2pWZ25PvHc2KQ8tacSHW8SpDwLPRjbNqcZZtrUSAh2iwvGN2Y52JaVqRUdAmH8KTR8isV8mFwo28F1urCRjxQKjw",
  "key48": "23nir5HueGxfNa2Whf6eVWdi3DRDk4zPUhiUNiwsEAxoJqNBBiJL7uvz8xv599ongPMw6b5bmSqrcb2Rco2cjRi5"
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
