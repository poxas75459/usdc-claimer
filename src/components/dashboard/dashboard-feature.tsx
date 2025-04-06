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
    "2vhwwEjbzA6wXNd68qYkhEkB2pYKfPqfpdhJkXigNCxFGRVWWa9w6Y35eauDiGBaXyzbagMgXD6PnrCEY6QoRFRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MUDdZbJpWh41FMgu8MJRU3ya1UWhwZH943YbNifRxsYZ1pqfKX6TKEX5wvyXN1tPg4YV6r9xDLhQxn1T2kxZQwS",
  "key1": "SzjBLsZR2du2S3jBu9sQ9VgXNbb7YXtnMKCnLDtHja91syNqh6AS6JWDRvtR9phV5Ki99Cohg9SrWLodu5NV5No",
  "key2": "5iTvyLcxTCzHCHoAmDmy7AaBmdUYfskJrS7QLtaA2HtA6XpgLcdcatmboU84VRCRFZiQhEqpsmRyGpaR9QqcKape",
  "key3": "4CNNr8oSceFrzNcrrPFJ77K3qXkYDYvs3yPgddd8gvyCEZnPKp3VDfyEX7yoV8RuSWsNUkGi2jpPvb2uz3WDBwcb",
  "key4": "tBqXGuh9R2C6TLVvjExcM3bqhAf6VxHKaZ9gCtAFgv8R1QF3pbz5AtdsJW5ZLghj5Psx7hqZR7o1KMSUayJPiFj",
  "key5": "4KehULUay95vYjUcDzoFt6a5wprBPLdpbVrEvkE7xj3XhrjeZ5YNwrPxTy2gCUTkX7EC5vEmW18A8JcCkMkuAW4Z",
  "key6": "5fxzSAFqPETZriPqoDNjHThWyWd8eSd74BKavgmDYa7KH1ki64dqyRsXkVGgSoB8xxRsYZHHRzGUychXobgAFZ5f",
  "key7": "3VXTHJU3wN8LnFJ3MCdbtWmaHSxobnRt5t9gvQeBAzPf2He39JaDWFFKqXA4zA9TVanCTwjafhJEN86qQ8Zi7Vvq",
  "key8": "3SdkdmmL5mR6kJaFi5t7gsj5U5rR2ZAsw4Qs4beyr2QdL5k6gA4Q7WYNPVSqqTzyZFNJdCNARqr359vxwuZ3t1zg",
  "key9": "2UxFcVGtDaSUNtaXxNDSAxgPU1qK8os1h9fKDGMxWnDmsuDwdJSyJ3fFz1mcnc7ZyZqRXfnVvViMp9Bdzb1orSWx",
  "key10": "H3XpiXe14Fmd1iq3vZ5QbsVSLUJ6W7GWxHSnqLAoXjn3veqhY42gto6gP4TyA3Usj2P7J3VZA6W1MFXNhfGANUf",
  "key11": "2K7yVWx72My7pho2q84Krf21XgfLaPfgPoMhdrLtrJgZSFnWRDdbMDnGAaYQhdFZ8RLcvaRdNsKWywATjM1soJF3",
  "key12": "5THu7iSkEw9juXWTrA3Z7GezdxDP18vaTrvQ877PTKpk6noEtN6DgRzgud8banTUyjBhMaCyq4Xj2GgTrnscAxth",
  "key13": "3sNXgtJeR6hBmPkYmG4dmtZuyUwyh7aA7UXQyTBG775jKob23Qjo4KnYygzhknBo2BRffjut3ofRE9aRpjUw1ypu",
  "key14": "3EAKrzk5dhFP7D6dW4UchF6XNBEE5k8JQAGABzWr8H11qhZ2YuoodQvFDf2ytRpcro6s2vJGBiiwB1DmKQLZwr2f",
  "key15": "2wD5Ap3531DJx3R4UL4G8jDq5wLKnSPty2it8T38vhpF4P9iUNfMSwUq6FzjU1vpiKX8wASqZ6Nspx4bY8ACD8Uf",
  "key16": "59QH7q761wGgHpScSbZvvxkNhSspszY6nBEUkhY9DSCbdPojkiRFLeDrdQgUWtGonq35AKVdvCDo8fC22BVUdTY",
  "key17": "5x9vds2v5h2oMtPfWgsSeYLFc6beWfzWQ1U1ojauGGXbb4Gr7s3pGGWvvsj8SwoJp3uzsdFi1H2oUfw8Q2aZweXN",
  "key18": "nebQ4yknhWDmfgyUnZLxg98H9gutVSCXipXPNgeqY2hxdZvnX2taVRRYzxHxbBsGt8rQdYhTWwR2Pt51qoJJSY4",
  "key19": "5R23vdqYm8SbWTq1u2c8jcH4MBzyDWDFfqrWSjB84ZByWUi5WackAG1bMGJtfga7B4buys4BRWuPxPv16mWWKkHt",
  "key20": "5jWZbGvNbD88nVGpyUhMh9dNZXbyiixuTPbbDntRGwSdio1hjFfdqEJkeV6yG7G4sjGjR8Qc7GLkgEQrdF3ydsNV",
  "key21": "4fURCxKZZmj44ZRWLAkReHJw8SiWjNVH2hYrmx9k9y5a5xydu13uMZvbyUZJkeJMhGkq9ZU4LvDb8VdYfenFzAnd",
  "key22": "2dq5x4Qo9A5PDwuPLctjgry4EKorBWLFYxKKsrXLT54BGLduvwVP4WePTuHv58eTsFxGdaYMxtzv2NipkYbraUXa",
  "key23": "4trnuetMM4R4M7fB7Wt9H827iVUbveGG2jawpS5Q1o3QvvfASqLJVg39kErfJFPnvmevvh1r591XFqzS8CPjCEy7",
  "key24": "46okNV3eSvPfNVZBCq57vER6AW4d1wczjKinzYtWDjyyGD69EFTx9ozVSBr3qMMa9sZsaJGRYantT9xTzTahW3aK",
  "key25": "4bEDKSJJxkGFB6QRuTfZkdspUryaSSEN3JEusYQmNgS539CSQ3wxkGXmksgzAgFpSrLhUnkLYFmiHjawMYiLGAf",
  "key26": "616Vy3edLSkcmrYaRNnW7tUZAgHqycWpx5vh2N5zgHc8ma1uv1eDB7yc16iAkP8AR3mVGnSngj38pJfh9DpQWpmK",
  "key27": "3c1yvu7sFojwF8Kmr5EjfFitSLpYVzbjeceAUZkGCv3kv2WZVaRxi1fwtP2frPrAgeMzan1cjtWE81VXrRoKNnWQ",
  "key28": "37azgCqZFt9mt4QWzQrJfoo9SjXY1jm12jgrZbWgcjoauMX3eQXH9yxAq89Q66XBc7cp1qHB8ZsQfaf8ficAoNS6",
  "key29": "aAms49dhTd5YJMRoMTRkQp7J8rp7Vfogg63v3rFGooHew56gFvEKQUa5wuyosxZcnBWJkNgBBv2wH3MZZKD1YrQ",
  "key30": "rA2homc19Y6c9H6dLaf2ckwkdJvB52Goj7dbki6JZ7Zi3aJSE1yRzTrUUUTqzgE25NhBqiD7BKwVttnmhWLiXRt",
  "key31": "2LyKHi8MkE5aBsNwjbwASN9A2QDmedraugjecjoWGpHn9vuooKvFxZdwjBHEKPkxhdEKi75dBtFn5w1pLNW6pz7W",
  "key32": "5erD7sfVk4E3aHdq3qDhXoNu8GsRYeqGVTW5g2UzZUzn6sVtfaRPtKSZ7pq3duCT7C1REeLJFryfMoNBGb4Ecrcm",
  "key33": "c6VWitsTukJkiqVCCKfgt1UCn65hnt5oRi2RLnXSKk7CAH74pBcGvVCrDgkP1krQuf3uvWCwr6JcgxgeBtFPB8G",
  "key34": "SGqRmGiKGsQ6cxZ3vySbV4TDoSppBFM2ymC3mefRHEn8vUpe6aDgEar6DeHrRQr3K8SK1GU3ggqy1U1TV9WA8XV",
  "key35": "rLaCsGgoUhmTSL23EqNH6Pesdy8ujVX7yuKr8ggMrei4feLWcjKhXP3k19X5VgDabbgUiRvHhu8r4SKjijB699y",
  "key36": "djxBEFrAaod5drmTTVZdv3tzx7SuTEkPoCStiiMqLi2xMzNYqVgz6DXHkvCG7UitqDy8XKGmuEvgrRSavpunhDN",
  "key37": "5XKJj7EipyjAemCPD53wtyiHM4ZLw2zR9hGzonJcQ6hAYW8wBwCK8RBCSiKDpPXjMGgd1h8noURXE8rqTxRuqpPv",
  "key38": "4aTscMdycq7xbxt3nVNy7GjHJ968R2kfVjeR9CZmrimvc82C1JUoKEq95B8WKgfUYykoxGHsgYm1RA9phMXTHgyK",
  "key39": "5H7uaUbjxMx9DUZZE2dJzbAA4aQcMHR5cgnxiEnr4EW5281Xd7gvTbGRHfMDn1jphx9EXqqXgoNwXE18bMpN3LhT",
  "key40": "36DyRQGSc4KCr6C9RLQPyPvJCFBvmJhDCvZQivv8M5HsUumQjCZsia3ADknn2xqjNABGxmhiyt3Pfwt7t9yeqYa1",
  "key41": "4HnmnAtLkwgMXPcABgzgTPsUHwmRBdmxXz7sjpbRt93R6jsEoxjRPzcvEnenB9iKzovvUs8wKm1zpiFvAqTAbYMK",
  "key42": "tPABn1fzjqSJ6gENnhy46UNjSowax6dLRhthabFTH3nTEi9Af2YwEHxv8TWBuEiWeW14fPZiKoT3GJCSGpv97VW",
  "key43": "2snTYqu4rbV1yLaNftwAwvqKeehpw1HD2FCaQXvmNxMFtDWLoEQziTQqWBnr2xwWe4jJgY52kiJ11SkiDfW4HFiP",
  "key44": "mLfvCvxhCCHwdWLqp8cTH86bV3o4a85S8XaWNzWNwUgNgXeT4icF9jnK6dt58hYyUvkiGNNGfgZQBtRRhKJJvxz",
  "key45": "5XPcGxc2cxFzBRmyNgDNt1trYDcfaZNE8J2SE8p7VVpiqGnix8Lm2Bt4C9dLvez3Tngu1gsj9abPwchmbePQgF2h",
  "key46": "4ePANo7JgtHnELQaBHY3rXfyoaPB17Srrx8R9VVdH1CyayTvTj4P9RRT8ATfDG9tTvDmUniDeVVAHXazpCDYvj3w",
  "key47": "51kkaTr3ueePLzRCGEw174R1e4XdxosdAXDvfvDLYd3apaXiyBXapd6Nxaq3FnN4xi2EW9ettmZeeHESgq1HVemF"
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
