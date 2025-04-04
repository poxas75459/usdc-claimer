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
    "3B4hnBVo3cGVxTBzQkgzrN92ruXxyqNUaLNcDJ2UZBg3yHEaz4mtpxvDgty2nGP3c9u9VdD9sWTRmaLfDsiAf13q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sRkTDyFBEYPJan23ugpmKx78qbyyPqBowcdSkJ9mSEWzqGsi5PTptC4o8ESFRy7Ako4J2XVWjM4Tj1FdXW5dwWc",
  "key1": "65CqRQCMsgcJXSni1r4HAoqeXLmuegbMiegmLjA4TPFZKUhVsRuMuuzUZFj6D9FjhvzGe27R5DdXgqPMGcyATbUE",
  "key2": "3qECT8QgtfV48n9WpK19VJ3B36WNFLz2u2WzzwJormQmJKz8EeofAWgCvgcB2DMnT6Fku7fwmAaPsQJuDXMLJspV",
  "key3": "2sNiy5KH4ZAB5rXFsgj3bEpiestCK2roNL9ngZKDy8GGN8z7o1GAMJwq67q7wwqHHCj14fYECyNNLYiTLsXUfRU7",
  "key4": "5i9Rr5jQLdJcGidtL4xELYG3nsJZ2s7KmiDBegGi7whQbjinaPBUsBqKGLXaX6WjYCc2KGmkrpDLtuDp9ZA3AT2K",
  "key5": "7mdruQTnAfUSL8s1apRDFiGxuY21Kb8hwdTNhWQNFseup4ouWmWNHLWFrKghnJeZmK8TWjPua6hBZc8nqYSpHsr",
  "key6": "2visSKTRDvmYf9f6uweMt8ukix9vWe4GRUaAr9aTsPoqiUmz2mfsq6k3KRi2LUF9o29M5hzjs1WKxNpc13dYBJgu",
  "key7": "4HJmxyjYR1VZKrewsjiskVRhoqikJXf9THqVBmw2Z2TeUdmB4c9YBD3gL4LC8KVoadQ9zogJutf3d9iP9uefwCGg",
  "key8": "4EhB6LpgYXhMgTTqoLLyDHA1DFjaCZXJzqCiAdWjV74Wja4vXsNu19E53P3JqL38pE8btxHCpn32v4SCvsvzowXQ",
  "key9": "DJW4jm9ZtiaLSHn7zof6nBtpSrBWq752nKFkwf5xM3w33VhnzyAGrv4d6QQRnoTYHRidHf93kgJybosTKYs7m1h",
  "key10": "4jd4rta7qLsgzTwZzDwcdkMbQ1W3nogseVSGyTj4Jr9UDtfc1V3UJ8H5hVJrAiySfokUf25aQLKxk4GEsPqRM2jv",
  "key11": "4yyrLakoatqoYKU8XYP5Sto64yV7uQzDpkDwFsRBq5rnzyGGerh3Hv7xVb5wS37c7Uy1AQs7Ti4qsKLajyCia1SW",
  "key12": "47uYPW28L6Sx3MVTxbeQ9XZ6wLuYHomiUp21KFk7v5gg6h2c9gD7noUqJSZcuJGidq8jmvTJRnwiFhe6ZjiYTvon",
  "key13": "39C8RmfPCR3e9jFgH47DqoGhbnesyeKfx4rSs9UwBRsXW6YHSJnZZU8ZqEk4F3JpjSkxGfn7u8fiT6B22uU9k3Pb",
  "key14": "5gqtiuNhSws8vDzpM2TBypCQ8j2tagJujFadBR3HoWZyzG2as217KtfSw2wd74UvvYnAtd89ZF7fgwz5sPCUcn7H",
  "key15": "te2tVTMWeJ8YWUuuNHXJnw83f8BdTQ2BZrMi7inwG44ScSmSehVvrGfxTATtF47zjRMfVu3xUCEQwnojA275tK1",
  "key16": "3StABmhLvmVLg5TbNqdVx9WPXgaxk9uDRDSf99Vx7nGv1GMYYU82kAaPGVHhQ8j8eGtH4jzWGzCoSRomKRSRCDSK",
  "key17": "48ak5Au5iegMH75PCoLKeTrLvGAhuXSVJcHSN5XUC3Jt3S32WruUbeHkwJKKNfRoz6jShTuNXmesfCwJXDsuANTX",
  "key18": "2cLk7ykdKP8EmpVXfoKix5SHqYUsmgeWW2kmnQo9w1T1CoRMuDVEQr42PNLg97R1c3QTt9pErhLywCQfe5TtyuXB",
  "key19": "56oxctHc5xGqsXobXyzd7X3CYHqS1A6ptE9KvbC7G3LxLoKcJQEq1sAzoUM2f35Q1cFKpMf6WrQddpaKqgL3rDw5",
  "key20": "2sAj69U6xuHE5utPbVncdksGneMNbLhvrjvqH7w3CwC9WSqUGstnbXJZyZxtYDxQMDkxPdMyWMQFNAWSHAMFaS1z",
  "key21": "3cqRz8yFcDednTykXm653HHqWAFmXpHNGg7fvbL2LcooxV8ok2qnSvKS5QgSwqe9o7uKdynRjj1aVUTujPALvAjq",
  "key22": "2T4cMtVSMWpUC4F2F3AWkyyjjBoAp2YygDPwy7ha6GruBTX5GEtpWsT6zLGd8imT3qDzr734UEvVCzf1pX1uNUqh",
  "key23": "5BFCK2e9obL5mojmSpgHZsoj481Pj5wgVbM9GKUMpatRoRSDaFWmF3u6gNN6Cy1aJiJnrJ6gDhFeE1hjFABPbsew",
  "key24": "3dFrSqX87v1FDSR64ZebMiSoGH191qDriYZbkv7uyKoHnpEwffxYXu9QeqVYBsygxRS5cKrrsvqby4T5P1vvP88o",
  "key25": "2qhqsFFNohHRBD6TR6GfZqQdcx9JXFpJVAXsdd4gNRGHJCupJ81Pcft9TCvB6DcA3igSf51UN2xLWfLDWwbwiowo",
  "key26": "3ZyojmgFUoio1kr7ZXm4WGA6CP1RiPnRyH7LFxzGEQrUojphCmi4JNAC9xi3TtvDWSZKyBQTVmPmkRXZat3VV1a6",
  "key27": "CrAavPoqJs2imgcWW8CDNs79Ptp9Lt5GDptiG5n3skujZtSKnqSQP65xn7vHMnS3SGb5Gg28rNvkn6k5k9qapTh",
  "key28": "2siNe21tpdymogdk6VpNtV9LbUxKUcG8ZCisU7VWSejnFrsMyuctWWj2SytjDNj5RNHmyQi5QQ1HGk2wvrbcJoqy",
  "key29": "3FoZm35G9n9iR1TBHbhyxZrFswcEHJ1pvtDvbk3ibv7g8EBiTwXyLVmgUjC1AtRMN7Y2AfB4kyJNP99aVvXoncnQ",
  "key30": "5R8WQzMaCWEFg3fZHbcgdp9N6dbaTdx4pb9yjdusbmp3BB5X5P8FkXW2uMbUV3KzVRLYSQzCP7rw3mozsVSFuLgJ",
  "key31": "3uyRFAJNqZk1YxTr9LhEpCMPNLDdhgPN5NstqU6iGmbQUhSRmGp4fW4Qo3gAexQWe1H1gs4DXRQv7dc94vQK9iJT",
  "key32": "1kB5yui4XXFFjo84QRae82bRWB4fz7tNaC4YUwsf9FfbBbP84cCUpfqPWStZ7qqE9VVU47gQ2sve7RP7LMd6zUm",
  "key33": "2jyqBTksr84A5f82CLwUXnLcDaWnUbdV6apKbF7rUpw4D1mJ8JfT6c5SCSKWkFBC7bWmQD3JLAmfjb192sZd47Hh",
  "key34": "257txm8oKWYxbKtaCG9pTkSPQ2NaxMQhz5ynpriP5hHK9t1tQELHz9NUxK26wEGsCSa23yD8QacfxbAucRpTYDkk",
  "key35": "2u2KpdFuc679PTN1aPnoNLSg9NJqaCL2seruvmcAztjCmn1cDQ9Gxev1u1JYcdY4mWZhkzeDJ8ogPyLNZCXyyUE9",
  "key36": "2XEtwcSAhbrPvw82EbPYCiobHBzDxWdxdj7xz3MSHf5hffCZmf7L9cHdGhohACqPNEnAeNqWmowDJ4qzMjo55CLE",
  "key37": "4Wa2mS5yKWaB628WoapCq2ncHZgEzpTrraNabJHKZSRuLupkvdVwpFVoUvVtqoQy92XJRGuvKsKEyRCSgQL59mcG",
  "key38": "2hU2D7hAxb7yUfTVEBZZSV3TvbB6zqbwVHmSGcfCWeMqdbA9Xrst1NxaoYyeFpDaJ2F84xc9jsU2fLi4Fwajx6j7",
  "key39": "4kwKaseS3jpGSZsa8GPUEAJ1VFxGdAnKGprSPPiGpmzLBdbKJTe1g3woTYz8e4ba4HegA4iFM5qMTcEvYXZqcVCR",
  "key40": "3QhLpEqD9ABouP6vMQENZiYTp7MdKdEAmVKMPLbJQUQQjVDB68XvLcKRGtntVhnYPPk1n2JYMpRvbVaLedrzjecx",
  "key41": "2GHRCwvv3xHrKhkseaHPCFGYtvxcJZFhG6fDg9QiPSPTe8PtvD1pU5G3qFK2RbKXEaQi89CHLMCr1VD6vVYrcXaX",
  "key42": "2MRTsLPHYN4VhhZobhFgYyEw2mH28tW2NXP8PjoLFVwnCu66sPN5Gnhs55JteVj5owmZMP2Tzxe7zgmaVRWxNQ5V",
  "key43": "2FCQzNod5EEXfzrv9U9MGw9tHmGYdnXmTgHgacjMBUBjxfAss3KurCnTtiqdgEmeDP9vTU2Rdbx8rp4C5f8mqgeL",
  "key44": "5ATVtp6tXx6H871267k8RXmuFbPS1ArM4jecPbcsjiZsyvgP3NZwcbiKcRfWUyZ3ajVeNcnZffMa62iVt7NV5kWq",
  "key45": "3BwSdkucfyPutNWUThJi9GVMbPyABCSicN8QP8R55HzYhpox1yzLXTRdHCN6tuQCzuFJVNxNPsC4sDuJ8TP6s5pj",
  "key46": "52BME2wzNdochy1aLtVhWkSBKXMN7AEoLUh3aaY7bNBzDp5mfi5ae5e1zadzSAQyUCUwBSPt6EoCjawbBvxsUtcv"
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
