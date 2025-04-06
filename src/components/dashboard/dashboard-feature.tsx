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
    "5JsPT93wjhVXjFuEJayT4ekkESE6bBZRBm8w9wmSx56RWFWwpz8bzcjujkjfdoPijS8D7p8nxtZQwfezqjnZLEMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrwP3KMgnRjDfuhAGBTewdumaiA6ZwRtPHPPkZSu5CoKWjerKu3X362gVHPLMP6rCMPP9EFeexk1q7EjxEtmTDg",
  "key1": "nb2XVS4eby26QPZdj87knmgVXvUCeYdZfaQ9CURjnpshQf9Pe3qeef6AhAHmyEwba2c7fbmNWjHBgFAiAefNTbk",
  "key2": "4gqARC5BqhBUxFcZAjjcsKHk2WojPKUgEJBSLnEiRm8tqDn2dJWJNUFuRnP6puVDD64ig9nLXGKbFqWsBKs92LNa",
  "key3": "UYjkAYixVTerAGgwAfJwgboUDrAJWmTAYF9HShG2LLxpwj3GLFzWEv1U2Q6b4x3Lrd2C2GdLfWGi2gBmBaQYhaY",
  "key4": "3i2n4obBRqKh6f1HmbwLa1RY285eEtMT1y4MPvLQR6VWzuHk9FjnyyEupm9h7bcPDxZXWJ4tHTjXR8AaVemLDT78",
  "key5": "WCoUzrA2HrE1gbXEBFZbtfBcjsdLdfRXNcYkLANshERVkqJNuy7Q9j5nBfVA8P2ZbKGEmjkHmu7UUdT287ECL8H",
  "key6": "zy17wq6nvV6KkK7prxF2th5nXV4Cx3rozm5yxaZ8vazWXwFopYL8HReLd4Vjhzh1PDu9fbsoc5jLz3bniKGEviV",
  "key7": "54W38k886fsymJyUArVuv8BGipyTSmt4gp6xuGDXb3oDRmptfLNS1LBAAVnarnxvDZV1jm6fHHBeXEs9EKmGwzQu",
  "key8": "42yVHt73QoCGyrrUv3fpVB5whZvnc5fgvXA8hFNdNGNyMXGcefAycFvZHYVHGf6X3b6oi58Amy7kA1iBy6mp11Ec",
  "key9": "4oXuMqDPpNKXvM15YtbDpDywZKp6Ci6Y9pC355jy2Y1RdnQqrhmosHoce7dr3R2aqfv4Jan7Qd38ePs3az9LECEK",
  "key10": "3UHu4gEuUK3URJiw2ax4hbds7p4WEdU48fbV1mTQjioK72dApE12cVYz2gu9ikQMCCVS4FTFuxVy3aq4sTPrw5hb",
  "key11": "3ZKjnkEBzC2VgbJf1o7zY9TP59nBBBqkw5wcVMbMpxS5KdVvogM8qSQ6YoU6rhCqUSJ829QCd2u2ET2HUns6uDMc",
  "key12": "3VJKBJaX9njnY8XGtreqMGNnztc27pxjR2zW1UgpV9hmqHKBbZs1QBNFPppUV7JyW2WU5WnAz6544buKhsrjQFQ4",
  "key13": "3aakQKr9rGC875upGRzGZCxdoybwtXy1XGHb17GyA6sRBz1kEU6t9cBhmQgpTvvk4dCCos6H4RJcg6qtC3tcfnup",
  "key14": "2mSCyubr3drVAc5x11QXn3knccrHn8fxyS23ir4vioWud5fmBMBYDzagZiRt5VtxefzJkEapLwfMPsDQBb8RBPv4",
  "key15": "3WAgsKzWgC6h2YuPNgxj1eGHgrDYzp8UcGcCiPQbfGwo1jK8PA9rkti1NYNNoxHTnbdW54ybdHNYntS7qs9S7yws",
  "key16": "65yF9Zfm3aKifxfHe9ehwy6US1bQtozv9Xdo2u1j6XiqJ8qLct5QhL14DCBziwdEXGThyJtddy6X6u319YF35ihv",
  "key17": "2ydGcSm5CD9CF8XezMMm46YjpZXBvoaReNUkrdompKZsUvwNoSzagwsAAVsNoBiXNoA3mBPAKTjUaLDjd4Vsm7tT",
  "key18": "y82jL69Y4Lz6W385KCUaRdwJuGbztfNusAUkihbRnmaCzGy46RWk15jQdCXKS9sbFhoyek23F7ZcanYAB7SxKtP",
  "key19": "3QvkZ48D9ktXuDiM6dyxs8RhWKC2tAfPWAUm5fWBxtL5U3ELHeKBMMp5NtZzBoZMXz6ouQXfzCyKf2BJWNKHFaXc",
  "key20": "4AeD6VMW7asMiKnoSq5ZroGJnGwRybEpnmQMw5MB3jRkQnqgXVBqAHB1J8ptSuMSfegS556yb6gSEWABvixdv38X",
  "key21": "2hQ7ETPG5X1b5J3pEkDEguhP31PET16u3d1JHXLwiqdPx9Dgze9dChJetBAoYh6vAeKnAs77JWBvK3YFxCJBuU1o",
  "key22": "3sBGYQwdhm8i3jsLuLD7CABGuXQHmr4y3dfG8BFRhdEQ4sH43ijJgB9DSPg5j8TiHrbr3eFphA7g2oYGCpmZfUC7",
  "key23": "3tDyEZTs1dNuHMxfkRpWp3sa49KHVkkGVNgQovow9NiJuSF4uo6Pgou6zW6Vbs1TbLdavxW62hiDYZWKWsb2S9Pm",
  "key24": "5YdcCu7ADkYyLyQH9pDyX3DxnipcQRR4QdoNt4sra4SeQRUE5BCsft7eCwFGggeXgPqp9HgZVRRXUsmXnas13wrF",
  "key25": "2D22ZeZk7QaXWGoEKS3Svr2YwoH5xKVNz4LELUXUpN71BgUuqAXC7KBbghx7zkVi2PnyCbuuTkZ2u7pDdt847NnX",
  "key26": "LD2TWWem9q1fEYHVXh6hXopXnUStEL7kqS6UzB8ngESKriVPuHRhWWBCb3Rz7LwQjSaFZ3xQEeF6HE32QeqcZPt",
  "key27": "4jM17pztNbMssuKmpHwVHCjgwsRjJJBMzAx59NeWC2RwPaRK1ccjcuQeANTrFMpPN2JFAPExiXKGLYVSXtRoo4pX",
  "key28": "3AQVHtyfNKcTwpAa5VaKGZUKTUBep5FQ55jAbnkuvQFHYTy6TJKov6ka88eqMkgTrntvgbnZkRinjnacFMr7J4te",
  "key29": "2nqbmaDAmjWAjSAVW2BMnEWBkJx3Ez52p8kFrmrpXBsDYCeTYyighiw3p3KZaJM8jQ63vXV71nbpftvVM7Enqdh3",
  "key30": "2dg7MkQsXuuKVKpYfRAQgKou1rZMAvp2BX7m7LNKqYmQ77kgvQUU4PWSSMpLCziwD6mMLQGjETuLPV5N7KDy34fV",
  "key31": "pfnQjRBi4emreeDWMDYtsJjqvWhok2unTKGwgGmZMZqMdDhtqCvE2HzRPL5p7KKz2xXKs79RiVW2NyCvR7BJ87q",
  "key32": "4nXFd8NfoLmZy6pMg6jTj4KC3eAgmwnvpA4mfVKzAq5vaSNG88Q4z1FRD8SxZ63aKwM5WE2DczXaJX833FUB6fVk",
  "key33": "3wLerz6pXif8psRJFRfjMyRcuk4c8ZcvEFsunxVvmJvfPsM6ANdRFqnbW6FCRd25KJdQDA8fGARmbbzevx9PdGpH",
  "key34": "dYzr2Z4p4SnYRm3tiDsvmEDKGSNn7eQ2HxkfKfNPVAYbR9r2HfmQP9i4BJPo8C8mJisaMPx1Bhy597DifbFoTQp",
  "key35": "nzBWkbUphoF9MfSKUnhehkP5iCVtR4aT1Bucdfc2traQ1XkUs4yaQnSPTchG17qKADGwjfSRRmNjDjM9a2F7JuL",
  "key36": "5T7SGKc4upitkte5YpcFSkJs4DG319yKNKUvyZqcgT9VP6y53K6EFkiJnfUHu71i2uaZv717JKZWVv3VGHznVWTy",
  "key37": "3J7c4tivGqtr7gnzKu8S1sCgwPpm7nwZUbDZ1gziSkbUePu5q9n7YdpDpo8v7YSXA5UmWN5oc1cbna1HEZp1afEt",
  "key38": "49vgohcDqWSx8EqhGd26v13dreGV4MXW2fXoutkkHteXTucoEAng9BAoVKLLiJU9EizVFbYoT9x1fD52GKmC3D88",
  "key39": "4puVVJvn23cE4YrJhUmK1915W4BD5frm2oonVa71QdVHSgZxGPvUoDVDXStypfLdeaipKF9WKMbeF8mBm1FRKPfF",
  "key40": "5paoHb4PtMD1LY9Vc5FiophkCsKwaH4vaQYFqWDSDfniJV1CZ9Kzu6FMjFEqKXhp9KMgw9pDPQsGKaSHfEzHoxLz",
  "key41": "2U6cE6FsKSp2T5yJqjFDgE1z7EaU5rzYNE7fjLNkv2djbWFVUALkgL9HMLjMq3die59giYZDZkmJXijhF1yno9SY",
  "key42": "Ai8AqsERMRfwcdrQK4MLfBFMuvyYLcXeuHvt3V45iDE2BEeyVqMLEhGH8ZDEjbks897zivpnrodbohXqarx5UgQ",
  "key43": "5DvN7piSs8J5YikdQEnAd1zviVKs9QWhaaCavesAdey6seNouF9NXqw44sVQaZWMyRUeJM1Uyi23pA66uA1pKSV3",
  "key44": "3gLaL3iRJXSTPwnaiFYkJTbrcoNt43uwvAUHe8Vsuv42eYdkoRHYrej3h6kkSNNHf5GVtLrSoGDPuwnNJhuUxCaP",
  "key45": "2E3okpiV7EDTbmyUgGUVXP4mAASAZmyhowYrzKNFDZro2RL4iKehmFo8AuR2YER1ZPAkibe3LSciUWWrexueQGpV",
  "key46": "5EU38LsuDAAUZgDt89GYeFvTBTbucD4NBjxNyJ1ji6KtKeZVtx8SW999YNyKs5akD7FUn4C8eDaenAPDamNTMayb",
  "key47": "5B9BmopG8hZgQa96QdX5Jri9yPpMHHzNEfZVckgPF5fLiDEYMsP2LQY4FwmKnmBkJFUVzmHagWNzV1dRXqGrx5AL"
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
