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
    "4X3Cder15sBwaU12s57skvvxZT1ruRi6rKKeG6NzM8p6dAVp5UxASkNYg7gruaneckpDodA7ZgNKU1YmcmUbQRGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1C9zrouAMumaEQu2vU83YFxXvt2WBKxjPpDVHYNpRZdGLbmvBbHsxHZCegBUuJ8QhALoTpt5PQeiwEYbp6tE6PU",
  "key1": "Vtxd6h5VnpPwBN1sYMTZJeT4UByvJCF1YEES6P6WVvLTHmVD8zUBZ162U4Y7rFjqNkKQwP9bDFZpgU3g2H1mE77",
  "key2": "478d5xX5BZEEnM8xfxw9aZjdpquRFpypifRjKxCjBxecXCWGACX7rrqNaReWdDNKWSNzscQupuzGbC23Yq7MxU6V",
  "key3": "3iu8mguBY6oZFvuueePv5uN77JzEL7DERRRCGALidStJrsMq2SqAGDctm3BfVMVdUz1c3aoXhkNzPYZqNFBzGFV7",
  "key4": "2GVHam2ciRoTtVnnYPUxoX4iv1ox681wEGpENv9d4WAUnh1Z9icuJv9gw1ee7jsYsai3rdx6sTodisaZVMZa1oK9",
  "key5": "5cq2LVok5tFoLFpnPztseRwyTzdUHPV6aPDZC2bq4ZusL9eAk6xG5eyfSEDoPUH8M7VKBGjCva4hmomtKfrbvdnw",
  "key6": "48GRvcb32kMsqV2CpaUvBSwAWgU8AW9tZMHjrRdWZgFitHaRN297qtWH8bhherj3wsNhtez7KS8zuhzt3tkL3ftE",
  "key7": "5MV1dJKiuAGYCociee7zRiqV6YseRg2hv5GqZVtStoBEb5yvLKwdQvhdiFeyjy2CA4YhA4T2ee6VG5PCnaoAyrrr",
  "key8": "jzRhK3EGThPPrnsK81rwnHPF1GFtnPimXTiVbMr2sPx63269GZic2AKZ2scaNwtHGVjtzzUxAw4DkPNz7TDes9d",
  "key9": "LT5vtY7wTKa5pcB89AVQcsGRsubPhiqxVXtyRSyZ4tZmNtd3rx4cBFdg2Mo9VQsEnxXXvVKwkBd4dtfDTrkxvgn",
  "key10": "3tN33JcxVxRipnwKNo5VPQWqXvi6eLRCtUWT7NTmthyMC5GJDLRZVqTnAdG3JMWpDLJd8rzrqWFTDztaVkW4rgtW",
  "key11": "3Jd8c6YDnpsiAi74tDCCXegUQa8TPLTgQnRn9kc1dKdamk6zPcHDVFC1oNhsmHX4gcmYCferY7N76ED73KV3g9JN",
  "key12": "3JWF1jC9PzV9qHFPNi7SVUfewrLkGVVontSYrE6wu3d8yFBrdSVkP63ZLvn3Yu3ZQZ8KzxfP5HZKKLPJ9HC9dMMo",
  "key13": "5tMuN4TcCZWkMucuRmDMDPkP6P3dEyVoFAy43n4dagevWp46QtvwUfjKyZ5YDFr6GXH2LyjNRxWiWq8R6kgM9M15",
  "key14": "tHCbY8Hb8jTvxFe9DGHsnXy5Zwyc78SJ1TKz9bzoKvgiDzyNCtTsqUJcFrEvGPbjWwSdW4irrgdLzhG6ivobuiB",
  "key15": "2DyAgA3DUbbK8fHcECKmoSzxzJnHY2ynrpXYB7mH7G66xo6t5ApGrvdS364yPDLZusckFTM2DSGg28GVUSM7TY9F",
  "key16": "5Qbg2PpRYHuENTX5W7Ush6YxSScT1pe6LNPnych5vRCSUAwWtbZtNhx73FJRUxutpViFtqP1EnBFUWqw7We2Unch",
  "key17": "26oEL5HJXCVzctV4TqvJs2qBRDWgsh4c64Vzf1e2MCJuRWtp7Mj8esKn43rCcyyA4jvScyn6bdmmBiqHujZ355fn",
  "key18": "5tm36c9NFUTkEXCJuoWp24vKGsCyL61e4gvwUtkvNbwAZaEmb5Y42Lyd2vbGCntXk7U8HvBAjctNHYkLUzPY7Xb2",
  "key19": "4Bxu2Xijp2s9YdonCjNdNv9DcoRpetra7GPZ9BKKxR2r6Svh9X17SVCKcHVH81cUQ17p8UuuHJB5ukezHpPp9LXx",
  "key20": "5tJbj8PPRWzECd48UqoGvwHj6YFFLUYBGiac4WLDc3L4Y1mAhGJ5bxm3A9FVhesBrJEo8CGnXDodw6ZReXbMGCmE",
  "key21": "662h6M29yESqaEsSf2DB7Dx52BsAvnz9nS1aMahda2fCJk5jacw3PBbBzWT3S1Bqu2JVVY83dxuXfiBGcktndvnC",
  "key22": "39J6bvxxpQnEUg4c6of1MnJiK24f9dRDH1TJXiKRY8kNYfpTxrBDYNDjsvXH1MB7nWxwXQdyPeN62Aabum8XFbs2",
  "key23": "66HQaTsLjfahHQYD8Q7AvCTYk2kHRUiNLQwvsQEMiyroZ8HZ5HvcbeEM1Hactvro3HNgMG7faXV7vUmMADRbDBw1",
  "key24": "4QpFwNQML634Yedw91B1ryxsLzzprkvPrTv5FMDzcJcja1VUPYkciv35FMWBEcVnDRgRPRf1tQUpdKiSVvVZRq9K",
  "key25": "4mvF1hfkthKyxyg2mEzvBNnQXmyg75FqtLmuGZxWQTT2jnkED5QXqgBZTBcqP5az4cZUPvJdfLjrnvvn757cLtQV",
  "key26": "1Ba1L46KC6VenpkAGwn3avUhxeqeFx9GanCMqjQd9ziV4gK8SWa7gjzmAaqM4LshhW8N8E7QwWvW6scgRNafdmU",
  "key27": "4CkE1NkwhEctrDnRnHBeP6WjETBwm5zsbriKb6Tk4kHqq4Poq9b12T5mbw7tXUjUyCRtFZtoqwww3KxE3fNJY2K8",
  "key28": "2fCJr2z8iyBh1z6W27Fkb99WhimMFgzWVT8f9amc3H8VDPUXPASUGJjsfAU7JzpTz6L6VkCeiYJvhpWszHMdGkvw",
  "key29": "2VyRg7X7jdejQaKTwqtUEYAkxRjT1W5ap3pPQj6Jx6yET9jZ95xFw98bcZB4VDSGwsQf2zcCJ1TgGedEDe9Bo6XG",
  "key30": "38PfjhT2PTtymrnuboQdqUXRV1w2AXKqUVUxghPX13MnbsPK6Eq8yNVUJQrLgEY68eQ3UNkY6VYe1LFrLuDEYnok",
  "key31": "54BqniFpZAknWy3oKNKkqgtBesMnXiN5mysCTWTdtBS98cuvyndP6XQLwKpRbAxUm51pGGVfeFRcVfm1rfsaeCB4",
  "key32": "5WZ3ksaMm8bXzp7ZKH6f1hg1rraNAPkrEi1jYfsi1rAGBd9RFBE1Q82Le3aoxUYhvhGiBKFrdmYwFZSTdiKxP4d3",
  "key33": "5HTR2zCAZ2bSJYPr8mVP8RHPVvHCHWY3kGhwjUaZcYbPuynBvzVxNKGZFbcWikLJCsMQ96PACzVqYuiMhL6wkNKj",
  "key34": "3ScsW5u19m3gm6HeMJ4NRZKHMAVExsrDXJfARD2C6awgpggFhmRcjYXcWCbGYbeL1NcxBPe15wSpRNThmLYhPaZ7",
  "key35": "4rm9P7BaWX6ngSYMViobgBvdYP2nXPZy1cu6aEwQHRfanE34x71iRfGnoDBjKX6sajJWntUVaQSh2h9aq3hSm1X8",
  "key36": "3p2Aro681Vc565cHw8gCYnpEHu1wzcpaam9EtBVK3oTJ2RLpQn3Bj9BuudYkqs3xPxSUPAqugrxSmugrEaNQ2Wii",
  "key37": "gBtKceaCbokiGc8zjNuDC7GRgvmJjmcVFP641RMnF4zR9FntFtSeqmoWEPX77FvJeyrxpKSv8VsCzQqRaMr6QMv",
  "key38": "2asKwv5QH8B2e7AWLK9rceHv6fR1Cme9bqDvsDhzpGJDJSJBZgnAoDwDrZoWuuPBgAh3HgA6CBvuzebwp2rVABJv",
  "key39": "4kVQiCbcbb2xwWvNjEuFwa8PGB8ochYXMYJzi5pWsYqFqYSPX5PrEuLz79Ed7QeABzNPckc5xC5tDZkeCKsd8BCe",
  "key40": "557LAUS1D3vQWvedmvqf2utHhx5ickQHi5rnGuQkX4RCDhNWp1fnkF6nzrpKTYEL126fhHfhMiV8KU7HDGtsTQMd",
  "key41": "3aHjVHGopfyd1EdLo7ni1wqvc6N2wX3a2mxvVMJMB5VXNQX9ZXF2KZZY6Qb1gCtTMEBoXuzeaqPqV3UEcHA9BC3f",
  "key42": "5JSMoNXuqL1tztKBEuxZ3UkU9ckfLWJ6uL3AGW87A8anfFJmz8CtgHooL4fGFCHq5ruqjTnjDkwaSJe8ptezttGb",
  "key43": "X1E9HLYN2ZpDbEwL4wYvHcs83g5x88EP9KEfQiYuKAUPVfGHTVQ4ctGBBguCABy2nFdnRh6aYnazJrH7mMxugzE",
  "key44": "66EfZRx65NNGjePEp8AHRh4JJpaFujYyXdqUYBBGWuGVpMXWC7GHy5nLZDJQYTpRpbZMcA3MVGKiHSUwAfTrZ8Fw",
  "key45": "5eVEV1Fji9Kgmb2Ed8eToccHxpLFxr3Nuztcw7EWy7yqUFs2Ps3FBDzQ6Ux5mxuRu6HcqGY4avWD9FmXdSzwNrFL",
  "key46": "52tJnCyTkEAD1DobVZeTYVjySbwmbo1J2SHtzZmVaht6bZiwEeZg1NTQtXW8e6NGWHrvr125ca6FEHJUwr3Z5ULX"
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
