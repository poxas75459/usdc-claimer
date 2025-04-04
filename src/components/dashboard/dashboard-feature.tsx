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
    "5BnH6YCN54A9vdnk1LBLw884oVhczhoKmm6RwsMuSqMKeDiWg2VowLNwWkWx7w8HfvEHQwYhSkzojVAzSEfPGD7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xTHFw69eaXYCVd5gKEnKqxCzWsXFnZsgR4qofSFFhpdir3UJuMvTQAuVZ82gRir5Ns4eugdfzrhd2dU2rg2yEgx",
  "key1": "3tB1Gg18PxvfxpE9aWXTH46JwuUagGcv8sJGpAiCY45gxKmFRArVbaMTaUAkAqQVNooWbj3KaHzwXgHjuoFKjiYd",
  "key2": "NzpackiH35o4uPdywtVLk7RvvCY72afdSfXRsa2pXkgVrmR1QfBHcn1uirXyz5h6rCdpLH32JgQRrUJhbRD32LS",
  "key3": "43gUvBg5uqVaWTSy93CAnFezQ2EAdzX9Nv9C4nHeqVUXpkNUt9wyxU1d9eCBKEnd3dSBWtME4f5rmNwfvVeTw56t",
  "key4": "5Cn7cnsQ9FXJDR7S9CMFUeT7ZcbSNKNX3Tb4ceHWfThxfYwcGmFdp4pkU7wjUwnvz5tF8yD8MZF2ZGdiSvHFFa9n",
  "key5": "5VBHrFZNeJcmAJcwiQAyCo18ynwDXmUAJWkho23uQcrUHSe1KLvkS3Ed5TX2ohworbgPgctuBYx1axvdXMtsuGr",
  "key6": "4RfxcXXwFVrrrMGTLJ3q6EnwJiZpc1UwsiW3TMTdaRUPZpMYcVQtQ11rVv2bNcD8PqeTjF35TLg79ijL2kwgXTnP",
  "key7": "44LwLb5AsBRjGH116qLyfea7Vh4xLVaaGrUKTNbBxm3mJ8zLTcR589rJZsDc1cmWk4uRhvcMDSzHYrPsJ31yUK3U",
  "key8": "4pV4KyXHXAjuHo2ipwSxaTUNN3ggM36ckh52jBdBSqwsZ6KsxkwmKqkgWpcgdBemamCCo5VHPeDuCNazdL8rEQ1u",
  "key9": "2iVGbMKeGCQRFiNQsfQNXboSeF2NFYB47pt2oBUBdDHag76eLJ1GedPziSnjtkEbKvWXEVmAXjbD6R9FnKyawytH",
  "key10": "uPeDJ3ndvHMfxWLeeWewcCDof92G54gAF7V18Xr7RZaBmkC6c5UGbkiQUwe7zrvgx3J69kLFvK4vWndg5BUthEm",
  "key11": "2xbfnnHBFN5EpvGuxy8M9zqoVjY7sCnBFyXoxcJXLzvhZXDA59QGQBfBLmyjTTKgAKoNE3JumGbW1kuL5PtaL8jm",
  "key12": "3Du5SQSBsCTrP8CUkdLUMjX6wHCLtj41QKpURcFUMjNn3A7CrbZdFGhzotq7v35qSnjDbZU4Q2Y6ecFX7ovkPMSP",
  "key13": "2UVXTxru6FkdbSjfy9jfZC9NWviL7uzDy4pP5ewwX3jzN1LgYuMFVgggZUA9xaatc56QxnAxJpuaLWFsTkM85zFJ",
  "key14": "5PGkVNwfDFbXZo9Nk6SQjT3maEd25gs9fXCZWVj2XmaGi8Qne8PKrFkGP18XDrjQNL6WAYhhoPjUjzcDxJgyLdgW",
  "key15": "31WUWXgea4GRBTYxyaqQ5T56i15FTuH7cNRLy1au6JPmqfxRwPcHKig5ZB62SxdRzh53iMZ2Ga2FdvakqMpge4fy",
  "key16": "4zVF45J5d7TbRekdb1iXZiVi3tPHjhaJybpbnvVC57afCT83ZBQcwHtQWH5ZiSqHgzZsfw1XHUB3ukhYZGpWaADE",
  "key17": "3daouQez2hfkiNb9XCVJfe9amTpFHLZ4r5Jyqa5hXQ6yJxGfu68MiccRV2stAmBsqsnmX4GXZwEnigeNQGNRjdDV",
  "key18": "5QSkGacoenezW5cgvhVjH2z3Dj4RvJcnDN3UzHRm7Stn1mdUTWiFxWMMZSDZG22rRoQZWz3MYSn9XowBfDNTzPTH",
  "key19": "53epaZwu7LL1xgc9GEFrS29RaVuK6TbYUJTaJtHSAstn9HvQW9Ams73tuqsdRMkTGaYPBLwi4LNAmrYvHBs21apE",
  "key20": "3FMMf721LwKSmrcF4a3X6ZtHao68f2r3B3ZegvCKDBohREx1oYS8mJmBgBA58yaxqWmPtW4qgdVHunYcyEk7su8c",
  "key21": "5EG6a7hkPCfzD5h8oezGTUo6o1uAvQf26fL9x3NLbDj19suiigz6weAhB3xP9EZgKWVbdJmRLwC9r2y19nTeyodY",
  "key22": "3a76txDoJpC3eUN8He9e3oGonp2TkJUUUrA5G8Zfia4ePGoJZcix1SBy7tGH5hjniGBMZfxxqddcjijNNkPXKQkb",
  "key23": "4zFbV3rML5ZCaXVA8FTEoapo2Nb66KEarVrTEHiZLSuFbranN9hN3Qd3gMxyWUAUxTycnUfY8k8TBkCSUhNbnSbT",
  "key24": "R2JrNzvNJHmXJq853nKLWkFfB7YVkiu7VrEp998gnCsZcYVHuVfQBRNSWB71yc842DhFaN7cSt1w6jPiEoFPtk9",
  "key25": "bMZWmw4EAF4Ug4yhnnUo2XG1GVpcPbgYaSmbZp9d8LjmdZvePPBr94Q5kmCfJmFCGcuMUSBfxwpc9wco6bGYHAa",
  "key26": "uLrfLtXnZBzLzi89hB4WNJMzbWPtQYrCdXGoLajTiF2ZMV5DyjmhLTZS8UaW9acnQGSJn5aR4cwK3KwPLTne4rP",
  "key27": "4zoUuaeuGRQmG82nvVF3e63ahxMSfJkxT7g1DMiNwyUsvjdhrR8wrHpttNDvepeNCKnKVyG6nXCnRXb5hHwoCNSF",
  "key28": "2rrgQs8coP2Exr9kahvYRMes5nNXz1FLcroxVY8V3bBjQeF5CLPhiWyxEP1jtDMqYK9URgL3wTjyPMdQcQBeNEAn",
  "key29": "vwtSiFMUeVEheG3yYajhDx9VqUr1GnSayD7pwRRvUJ57wnFXNrTwfJ4VoqBRU48oQwJoXeMg5tHeDd2yVfkd4xY",
  "key30": "5QeuzCWksJN51BYkEsNfp6SUAQ9FmotbE7TKQ8P5g611jJaBaZZmATh4A7wp5tsZqKBeh4CFB4eUDp2Y2GD1RqRc",
  "key31": "5S5i32E6LTwGKxn52VrmiTMEUsqo6iiC13bFMxwHNg5S8WGW7iBWXRbzWyQB8Buy3nZqpkfRBaV4yzQq4YdmhW7V",
  "key32": "pYvd45cxLHrYsTwKxukquqcy4Gt45oQVCrd2ZA8ytkAePfCra7pfH5VffPfTyw9QLaXsn5cMWLpi8Ja4QaoRKRE",
  "key33": "2vJmG3XkPBjqDFxQNQiWHgeKn7gjTtmMzpwecPWyJHeE9dJCze6n2rPsHkcWgdJJ2UaYNzLV8tXeSDK2muzz4dEx",
  "key34": "5yVV6xyhLocq4YHwX1AdcdgPKHnTqkxmbFfAYVjonCckzwRKvyGGkQk1ExvM9bq7eUSaHJwvsgcw9a7dZE25AMAX",
  "key35": "5yAdJAr8jAq78ZX8xgFpm8AqMdVgmCDYNZaFomYjtrdaz4wMdpP8egp65kuo3VNJVZHi47kuySx3FuXvc86cZuVg"
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
