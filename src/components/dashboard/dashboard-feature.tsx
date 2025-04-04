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
    "2hMeUp1Rvi6P5eKm5wyBbewV7fsP1q3wJF3j6RYDTQPB8Rt2hpJzigYsPsMrYyH2sPML6Lj35FpSShUmH5T9UdMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eR92jx4j7WWcPor3oFJBgTognraxBycfxCtS2Uo7ZqRWCQ5StCWuHi8baDZE2vxKUx56AMNgRS41uhaJBKJetRK",
  "key1": "5sqvM2SskXzg7DYLu5zDRW33Wtjd2mAEL8YFLHuEQNds9iLr8Xj2fmUVztYy7gBGJu6Lmg8UeP9qxEgSxkDmkeSk",
  "key2": "5rQRsNcxhpUPHgqirWj26A6HaGBARq9c46ddXjZR6ukooRciCtBnRCFMw2QvtieTYqj1gdd8JzbSZTE9Hfgc6foY",
  "key3": "4Ex1Qk2m93swGJr2G8wGdw73fghdPVpc4ghbm3Pt7ky8JxeW95ahEwEdjLf4LLnfmsUiZbNcNLTNJbyC2tLworXM",
  "key4": "McaaP3u4DDDwChftzGMZRFZxV73SvDL6y9uW9cr7JB92Qz6n5KyJoGVQvZAuns2NALR2BcA914guB12bLErMASo",
  "key5": "5r4vU8gTNK5jRout95EmHApntoJLdZGUU1N1kXR6osziLCWsbWYKe21fGBP7EMUAY761HDFaPM3s4DUvHRbxqBM",
  "key6": "43viAkN4LSmxybZ9WxktEpCZGZ3bR1yStc6agDW8iiKT7Tze2zRv4RSpdUXd9xNa7dKyEBYY143pRVGWY7yyqZzQ",
  "key7": "35jgnh6HiNS2g25dQeGBEXotsqwHcFBiSVwNe67Ci3pxWTvamPE239XvLckskURNjQ841Uk2qgFaL3s3sDgYtZmo",
  "key8": "3Xt5yQ92A6XcnUQfyUBKfXXWzomHFFMFWkq5DzkHDqr9t82uVjBMXj7AKsyegabpb6gMJ7um84dboro8NnC1oKL9",
  "key9": "5BV4vHjAHJZBuZDRu5Lc12E2bRwhuJbTYfCsmfPo5mphzFaXk8K4TrCwJXHfEcxRPLVHXaKj2E3fc5gzg5oGi3ey",
  "key10": "FB3vYJeUuvCLe99GX17fLBM8NYMakX6s6g3aWJ26bUL2tUzjNKsTVdatjgWJWiYt3PZM8FPiFtmnHsBUXm71rkG",
  "key11": "3aSfqurMxXbEgdicgrbBp7h1MPQeKTDM8Cvznuk6GvpDD9D1W5MVT4VYFuYjefgRfW8oiSs8FCrkoLLEDeUgY4Gf",
  "key12": "393Xdbagz2aZVeEvsqov7AnYEksVMwNBaE9u19XS6XeMMRGVhyEzXuDeX45kYowVPckSVm4PBNjMqobkRKVvvsmG",
  "key13": "gRvK7r4bqBUQVzWyYocovSXo4NRdYPFRD2LqbaWwNshpwiHTLh2nQ8nFEaU8gVBqLaziNX5euJeTEy1bcVxteXC",
  "key14": "WhRWH6NARCcjkRrSVpbU2edQD3zsBYcqLaPoc2WTi2o67zsLdXnWYzBY5Uu8Qn9azeG7H4hDKRP6QPT4YKLiHUX",
  "key15": "2sDgbkdGuMsVN4H2cZPkfbKbUwKKCKhkV4DWtfodUfpqwXxaUnrv5Kr9xug4ux8hHYnjd2ioQrdpch27gZWFm1C2",
  "key16": "zYHSzVtKzm5CUA9BL94M84bKqgtMseZxnTAWmU3EYTPNZ1o4AL7WxtmLZhT1fj1wSFooU4vcGopapFuUaQonFpy",
  "key17": "5etwaFYL2gkjqHS2ocUR7AjR5Av5vSUV1LpSrjU4BZ8dbJgtPfT3ZbYB281Dwv9oCNejASE6xvruQu9rGT1MvsQS",
  "key18": "43wznqaEjNGKYQm2bXXzcVqXnXvLeASso4nKjvUTy67Sww6PjWvAYTrFzx1qbr45suCFhfxQsnZxsQSjCuGwkRBn",
  "key19": "AcjErxZFUAr3GViBjXHt8Aq8fLdtdrUpp8mWrtuv3GeyKdXwyE5XcjpRWf7atUSKrKhqphG5ZGM2jeQKMgjCsGY",
  "key20": "4QrRB9QFx7qhmsTMYfuzciuvwY3xn6ooSDHD8shAJueh7NDymox8nzUawBp3jCJbj43MWDYZEJ6Wb3qxAzSektdg",
  "key21": "3W62Pmxu18SxyKhQer7phvo7B2ADRgQx4f8NfU6UxrqY414tGnhZhQPMXsM7h5R7dLeUtUBUESFmZ74YjTV8nwc4",
  "key22": "Wfb2Bub6gazbDb8EaQMrYYPayjceziYfR1cFuS4vFfBFtCU4qatzuNcvTrSxP57qnibqzNVWfeRvMUQNfgHCLuQ",
  "key23": "5FYn7bHy65MXGXVFAM7UUbC9ZTNRCeRJiwjtMFnojBWCkJ25t116yekA1CBF34tJJP7zSJNcruRdNLRa77JSwPiT",
  "key24": "41HgRBcPLzTCrAUHdx3XMMxLyv2roNCbaXua69V7HDGjpNZHEeaTQjvRUrFg8pZFyt7UJgtW1K6Gv131mkPfYi2h",
  "key25": "HVJbYCrEYUtHRiFYWKSJg2wzhjTKW5yD2L8Phuj5XJgRSK3ThsitUdNLh2PJWVSEXtaTuWueEo1JT9ECR6nPTyg",
  "key26": "5VNscme9qf2QYbREZryUsAcSzJHcRNYQVyLUAWZ4RG2futHwjcwm3ttjHtCdXtJSVbszicNsM7vZmh2G4VcnyRtk",
  "key27": "fxzWZBJkTJRM1PKfyUGiQrYdrQc99CFySpS39AyBsFabgqUFje9r1Ngz6twiaUKrdHEg9jrfTuqPadjdFTJx7VL",
  "key28": "5subBsA9xemfPf59PiHx7JbZ6BPBA5KSzJ3N2vQBAbKNPRSkyuauNg8wgKwXT2NMWDvV2bNjEWuNmM9SAVtJQvqZ",
  "key29": "3MGXtHPLw2TKmauwhSNN1GVxDGj6ZNitJfTVGFmAdfNJYxRgoYFxwT2ePQEcvyDLbxFbX55KuqM8kMZ4tGSVcG5D",
  "key30": "3CpHXnM7PgcPe61v8xLrW5NzuDTSin9AVABogyVJHBJJU3M5VRp383RtWKJLdkg245MUt3BB6pVKei6hKArKEcM3",
  "key31": "5AjvXGDwuYvVvsRRQVnRHzjvoqibVYSU4NsHzCdKVCu4J4KqtfcwvK4Th1qQ4YxXpoXagRoK3Fvw2iTTYx6wKwFb",
  "key32": "t5NqyqUMJ554SGARTREJb4DFFmh7JMqTo3gqqLr7gVg8KJo5bDD3DqyAH86ZZG3xN47Hb17vHKRbwu5uqSXire4",
  "key33": "5Xj6ZBWKrmNeqjKbiYx4UadZ7qVEntAb2WXAjL2xZnUxUj92kMXzFbnvL9wkoAP9j3hYVL1gLfjgHMrYUyt5osaX",
  "key34": "2t4ba1H5H9xHsb7YUerLuTmPkfs9jQAJMECNZgqMFcRWpP2PdHjzgKRvwKPn2bHXHeWr1FpmDc9higTqeBXH8kB2",
  "key35": "53oTx6Z7W9jN7QaE7n11aa2geF8Hc6SqZqpnkyX5T5Xc7nNbNsJ5ZQveVkSne1oa4pKbt94FDf4fwKSmPhnjE5nH",
  "key36": "JH149JG6kC851ZWPEyd4sx5wiDcu1Loiqqzd7QionSLsb4J6wBZ4WX7RBCyU7LzXZNttSPfMybf4Ye8NDMgwBhp",
  "key37": "3oeZrqtbAxxBkGrqwrhd5QAYDuKUrHQthip2y4q463wBgQdpTpHBDUtLMpgmGcU8EJJhYV6xovi8p6UtgL6SFXnJ",
  "key38": "2WheGMbKP8k6vttpWB3CKeT2Ywu9aWUDKaUX6Gz5qu9bcmSN7CAmgHRAemcdDe7TzSTnrbUqBryaS7XjBn3qJ1Qs",
  "key39": "59uANPhDoJU66sn21iLm1PzFuBPpSGiRtySyNNKCbiT4oXbT67fc3X5wAYS2pgvqawQf4q6kQtsikaH9H5xStb4q",
  "key40": "4LvCFMfKuSw1kttHA3zo4o3SBBLRG1PSMHWEw6zU8YkvyiGjKWBz5GGscEhM2anBo1DUYVcmkUK1SqsDC9MTvtMN",
  "key41": "5dNdb8TNitYipnpsCb9ViaxMYHJjfn4dQq21MCaYvvtSheFDGrbSLvMxyHvafTLwq8vckoCb7VA5gUYnSw7hS3aZ",
  "key42": "X34aXVnGLDrybxfQzY9bA51X9h97tyxUszCq68MJgC2ecLQ54ECCZSsqTUKU8JAQB7UV8wpeekJX9CwZ9TMmBNk",
  "key43": "5tgokjjknFp1yrmwesZfLU554E4NqHdzoxoKx5dRfwHBBpkLiU6HX4AEfBoqMC1pQ7mnxbTsdNj1Dq8FyZSukJzE",
  "key44": "58nTBjumJzvogaetaceVXALWCV9ynxmfAbrBM6D8RzHLfVizf9cmuP9ntqUBTbx1D3qB1VWeBjjexc24XQWmPWFE",
  "key45": "5fzQufnKhoBa8qfDPidkGojwydLw5r7hjHActYXZ5zCqNY1qtDVvsyQtq6bgWuWA8qZw66J3Jk3YCzBLqYNZPk7h",
  "key46": "3MGz5BHkvfyTnNo2xci6ysnKpBvocZwp8APYwnWg6XXa2niJjCSe8fEefbqg7jJJzt35ztCQ95AwQVx7WrbSkS3E",
  "key47": "5CmuorHzyjkRkxHvchY9E25hBpo4racG2uRWg32G6G3n6sR8xLuwB5ZceRqKUDXPFaWYAWGYiB5BFpyeV3h8HFLH",
  "key48": "3gWRUcfkWoEA3RgJv4HgPhpxCSG8DJmtAfySrReUSzvTMegB4KQ71ob6wHBe1W2NW7AKSBqgtW15Z7GkCSq61q7u",
  "key49": "2ALJ5rusgWvGwQMAFddCK9FeiiPbbom2e5S339mtJsZmcsXVF2cYX2wS7n4Ar7Ghrvm66m6ixBEZky5nzVY3rnqc"
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
