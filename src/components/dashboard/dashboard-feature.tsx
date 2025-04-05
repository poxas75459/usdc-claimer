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
    "51PJAAAftdpJ2hCFYtw5GL6vmqsEPzdPNTTgbp8cWopyabLob47biwgVMHfxm6ovfzecd7pBCt74BU5hCByFB2Ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDC97HGzqUzCXCzm6KasUAjDa9migVpAU438oZRV7s7z775rFg18pNCgmT97uwQ95F4AeNdRF1kz1Ru7KQKn5Ri",
  "key1": "4Qa4UswXsxGyUJH5BMCmp2WgMHGUDqhhnsSFQ5DjY3wUBUWN1vC9uUJv6KJY9BBLdgcSMF7wUvxo8em35CnzSX1D",
  "key2": "j8cmNE28h2ZkB6rjiZsksHnVTUKWhfFsXMoyDuVaSq7NCQuy6JyKK2eySzB8hwBNZhLu1aM24RMv4AYXkTGwtEA",
  "key3": "BkomSPL9jS4NmRpLhf8dfCmGMcUjrk4VRSjv57ve9Utx7KZzpVuGYuVQzFsqbvYTE5krdgWPZy293sYX9kwmnRz",
  "key4": "3GfYDvVGF8hv8RdaYVPd9k4kSaBRsDoUrc3jTKsxDnduYbM7K8knSiCq4uyeD2zgufMqcR96tU3CxcCCeRKsDGfo",
  "key5": "4LErNJ2mFYchJqL2rQVx2irXVT5RX9nwHcpWvUhLt45CUo13LXyw9i5wbTYgkbv1LfuQPu5XrLmKqhsiPFqhYT8B",
  "key6": "64qM1D9icyK6xzbq8aFnW5X6qxfZgkjtC8uYEjn6Z7w8zFSgPxxL8uqvsr9LWXvBNNTdPCA1vzXx25GLiyuxQop9",
  "key7": "3bgTqE8Mg5DoGuDEK9AAKXLZGwKfXWUrsisgrofLpCrfgMZjT9s2iq9hDAC1N3dbnaRXnUcTrnpQJMRWPzDv8FGN",
  "key8": "5Ya6TgadeDQcN6WeJ9zE8A4anDR2t7VW1PUBp14LB1dogdWD11TGkGpspgA23tQ2QYdb4KHDy4oiYVsD8bs4XKmB",
  "key9": "2LTGTpdMXz8rrnrmSfCkY9g47aZbogcrLzNirjrAoa39jS3FsvfMkpbRdyAY9QH6XcZjWkDt3xGiqt1cL96aNjh6",
  "key10": "35gEMs2Ame6USVN2wYZwpKAPF3dHvtwrigWwM6gFjTqBCKPYHVFkgJRtgNC1eBN5zV2UWBqv3fcgqGwYYb144NPj",
  "key11": "4GUtp6LP2mr6iLURBEbkUseHh2fSd23s4TxmULqHRcyYvPHj6L2drePiKraZ7KcLogGYAUD6Mt2qQoLHBHADkA2i",
  "key12": "5jDCB66qU7JNi2yN97ce5nntwefEim1o114B5HHduxq3iRrbW1uoVsahhsTFR7FpAQzYGcndM18BLTCWMyd7QyJY",
  "key13": "qeDrp2eTLsfbtfZrtvB4bfLB3FMVJNgBHRUwh772HD2k4JxGqzr7sRbo9QG8H8RFUbaqv5kcFd9wUmh2Y9gFV1k",
  "key14": "64xTZqj2wVrPTA3SBwk6QnxUfU5AGRBmH5h6Vm2EcsH6Za2LQ2aZttHfxZQscg2JJQh2oGcgQ9CtsbE1zac24vFw",
  "key15": "4DeWrzUUwbViuMaKGL1XNQ8MeMjtwfWmmMPcKH7WNkfjMrRCJtKu1ov7yzFApf35271VExJsLv9ydJNUMZXvo5s",
  "key16": "4wLcGJmUn1UUPAmwmGb2pYJ98GNCyBkGeaRURSPMoXpshq6QGkcsVSHvWW64h5rA5k21w2dxQyCf31J3P2k9BM7T",
  "key17": "4BE8nDKXV2QpKhJykv4AZPP7LxTJ47Yj8uanwkDWKDSt4TeSv5Q1aa7gZ9tS8czqRwMXcpmB9sxi3ie9Y2tGsoFV",
  "key18": "5kUw3c6AxS2NqJKhvm2yw696ybGt5qTZM1WFizT8Tgbt4bFm3XUaT49VoBg2VQ8ZNnSr8n5nw8jLVX3wNRdeGYDb",
  "key19": "46HEYVuefJhiMugxRGCazPxTNqgVZdtStE5bsncon9K9cXjfSEecUF1c9Att6kCdprZ9A7iU6N7ihuGX54b3GhJa",
  "key20": "4vPpwMY2YSeapp7zK94kmm1PM9jepboNeenYZeLWpHmP9DehgYrBMWrfm7sqd8MTNvCXgHDSs6xeLNkDX5LZCkJK",
  "key21": "EHNBRuxosNj3zsV46iudyRwxtYdRqH3sVrWXdUvyoeDF7eGVF9ParMLT4eWCrCWypmozVEw2tKhqqfoBwvZA1sr",
  "key22": "2k7EoVVUufnzv3cHD4xFJmgaUje9QgWv9PKigHHyWuRrPot4Zza1gnRYyPzswSrxVN5j6PwNkyMa5Xt1EoEia85N",
  "key23": "3vtT5BVy3t7KaUrtLksSb7kcPMR1VKsDuyh9WbkwrJAFRLSr9vpnqq4qe2PKhRXgd53Qb1MESiT1mYJsHURCtMfb",
  "key24": "29rUyiU6EhKYCWwbCHzdTgMUTwHTbBoyQriiqzkV4jb5HW7iqDd169rcp3wRxyVxnndp9GLczK3jCo9K9cipdxnW",
  "key25": "4x2sTqpyFhtptkkezouwPkguh7xdPkFjLjTnrmzsp8ki2EFhGRoCLg66EgeydDxxnKKp7YrAfacSjH3bXMJv7mfn",
  "key26": "5obgvBMvqahS9wsuegV11L9PT63ct9qSJeYEJ2JS7mttgZuKi923wxPoHBXDKreXhPQVoaneGbJvMM5aEHSEaeCt",
  "key27": "5Hh4k5iXnkuuqA7MMb2Z8W11PNf6nWRZZ5gsnFiLpFv5Ttc3eGBEUNwzvD1V5np2TLCWjJDhg1tehyNporhSBPgJ",
  "key28": "9Atzv6AmPhGBuRTnijdg8hhs2tVDEisDBtzwa4c3aXU5L2FQj3P12KcoieAcG7QVyearkbXQUGaaxUH8QJJsvDZ",
  "key29": "1AV1sM4pL1D3p5KwssgKvizHXhCDrRW87Ky3dXfMaWDs1J6SXhKKA1ffvVpv9YiBCQ1kKsDP257So1zrqyksXaV",
  "key30": "61XKsn2Btv7jPEE9xYkLqEBWuyvtT8XjP7U2AF6bH2FZZh7NuUMpxRu1qHg28DrBfZyP6grSA4K6ioGY8ByKQBEA",
  "key31": "57WQG3L5aoMYVK7RYrH8mJ4e4q5pAdA2inq7KDRLzphPqWacRz2XQqfXXHfFE1fqgyeTZKDbQUfiZuHabv4zaBtG",
  "key32": "4zkUKFu1j13hzsnjgUq4UKUAVNRx4TgJWKuxBavidmPact7LRXCjAMbpeSJEznhEicnHAV8BipeNUD7Bsr92kbyH",
  "key33": "4hsHy1uCpTczYK9S72tTMccCYATQhzxzaWghyrhmorYp1Wy1wjrAexphyDCvT3H8PM1WzZQt4PYkydvuQxk5NYNS",
  "key34": "2Y5wR5HkHMDZ1mQW5oPFh5Ap4N1FaMX2c5iV5Yo9ysNYqhPaJUzoF5KHJE3uhpQzyrk8U5RiVRP85PG6iNAGp6V5",
  "key35": "46zWhwfe9vVHLeh7UG5KzmVH87m33psbJJYTPabpskT7HraPf9YJTH9J6Xf3zQnY8sG8xmhvpeqyFLd7QQgbUtBd",
  "key36": "2oZ2eZFNT3EkZUKnFKcxtK3KexJTjXMxLXSRGPM1RSfXHJxnssnspcaeoBq8vSTD8vmD7X9dU4bCPbJUgbycPwiH",
  "key37": "3zr8AepfdDLcm3aHFH9WM4wYPUwY8gshig8qNsmJATEQaHgFqgVJAaadsX6wxruHTqEwSPzEjh1euxQAZkzp94Ho",
  "key38": "UupGuFdkqcu2vzVa11jLWpMvYxAqHwd2MXkWsKmCvt16BEVeBNxPiJb6V8Kqj5XzAfEPRa3NUohF2CneBYHuf9u",
  "key39": "CYAwqzZqrN8JnR6eE7vkfFetFkeUKYwvMeVDCXD2AhfHkGuEe3zx7gxp3uoonWt4Fe92pn3Egp7645RZ57FUQpk",
  "key40": "3yAAvGi5CYp4dfi5v7dgu6xFs15SBvQ9pWUd1Qk9gMgFWtDmZQmdqqBhv4wmHJuRcXZ8TwirpYEbWdz2FmCMRGyM",
  "key41": "2B5SSSZwVrHySBpBwjVWCwCSRNHGvtB88bqdKuJEnk5kaUFiz9ftojAG7JkBTdjj2CC1rK6q4EPdQpcYVCfuV6tL",
  "key42": "4EFH9EsjqazHy8JSwemBiL6isQ1Qd5sz6fUZz6FGcTZC3cy3jWZ3i6jtEwZJMPvDfXbe9nozfRf1VTBjyR3VWGyq",
  "key43": "4f6HTjndmCwBg2kQKpgRryZB8RfGWAAr2EkkpjZnuUXEzChvmPfV7ddHMCa7Po4DGgTncjdna3E8v2yQg2WXWHNL",
  "key44": "35Z1bgCCCd5EYAjPdh9SaijR7uWMqTcX9uVCnm8fWgEoNKRLyWHxLaCuy1ikAXUCKachTo87avNK5KLpEPuFhKCU",
  "key45": "boAuiioBquchshFt238NvAC2F1u8pahaSx1JVy1UpQfrBvMA3rHn4ZrUeAeivUs2XPsepPFmPFqMYqwEfBtoDfe",
  "key46": "57WHCzmMGAP1pr6pW6p2SSEDTofocBiGcs43PFFqdRDFHRzH89cFJeTvmNWHA5Mcn3caoixLMPh43773s1HkHDY"
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
