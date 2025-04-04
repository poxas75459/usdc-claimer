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
    "2jNgajVhyyhh7eYwXLy7dEiqKj37bVW81G83jjgzDUHq21pYpPf9xxx6w1tNZgm6pFhsPgxuUSSvEHPaaaj3Te8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ah4UdrkuUhGD6nniEKDBYX3VjQM5GwY7DM9TWZjkRioLf3b56DgV8V8qgc6paa1do2YPLsGuF88QeXGuYiGcPbs",
  "key1": "2sz5vgmxxNeXdecacgVJfyiK8cF8HxWFaFHjfirRPUM6RgAgNT4A2Tjd4qN9GxRMbpb6kvqEFBmPpWRR8SEhZ3ng",
  "key2": "2ESmnJ6JMCNcYWf6m9vFM65EcKDKT1NWZeD2yndpnq1pbp9y4xuQsFs3MeKhp8wDRxXGLLvJtFbYS8E7hkxp4TP5",
  "key3": "8ayXpFtWDjHYQefZRx1f7sWUkRd1Pn2Z61CCenxN8ruK3ZWiW3w8bicJYWMuB6psXhqtL5zMXDHFxwzQ6NiJ3Kz",
  "key4": "ZFQxXGiLd3bsdV5xDZa3uNUtJ3NFuWEuCePLdtbagViyRdgD9ZWwDXNpWRtiacvp8CsfaLqAuRrMqt4dYqnHe22",
  "key5": "3i1aA6DnpJ1QWtfrxr8iT9DgRsR1zVmZ2VGSFECKEPu1XKqcfWQKQMiBidbBhv1pUNiebrMdw8VH1VjApGU6Jgzc",
  "key6": "61TDHtx1gAg8uHBUcx7yxuMznsbwYwy5hz7DV7ZbSLKtP2sjLZqEADaSB1ULQ9SdiftQt3G8Hiz2yKCkqkrJtfLF",
  "key7": "3DZvzSC75tNBLe61AThDgFLSuCSwQ9GYaGjW1cbZeQKL8NVg3RYShup2SwNE4WejfARTE2fqLBTnEv8fbDrjCkDU",
  "key8": "2DzSqZT5Ck7yetCGCZWFdRrdUNnTB5ytrJBmD2Pki2y84C9yNBkckaF64d7AZDVdFwyjwdtrJzYNPfoi8ffnb692",
  "key9": "8xB7MtJx8tJGrwMBbYdg1iAa7icmwFZ7XcFWcFeMMYmdNCQb5X2QnqawNCWAANRia4MGgUJwjrQzkA8yS3CF1gL",
  "key10": "PFZfQEGBshxERQPFSckxXoZQWBz251TH1ankG27FakvBs22UJk2WwpZNqJeHKQJCZJVuVpJM6KRyYjXJHSWnJu6",
  "key11": "2DcgMJLnUCfjkGDviMSZAXCm1LAkqfMwshJHfaZ3mhCh2vknK5hZC5XCN59Y89s49Nsj8oi1z7JqR3Uo9UtX3feG",
  "key12": "4fWp95GBacDdCE4yU6iQQsAFEk3Lu8qSVao5LKYEMbrA4BbPhvH63SZ1V4RMXR3xvwVQQhJW9QThAnWJqY58GNup",
  "key13": "2SF8cvQoyMutWMLskHMoqrsUuTpLtrU4qCkmasUjkQLrPpibTY5spfyxU8T7MMFef2yieKTuifuFa1u1BWCasQxG",
  "key14": "2jWVd96AzVWEozp8m6xEd9a9Zbi6Ce5DKb2qwpBxGrHLaJk1RsLCJyvRMbfH1SULLPL7MbtmyL4H1dhPGM9FALLD",
  "key15": "UTxCHTcHogRkgrRmbSs8KTdesNWH9TSHKFzo84U69VVy28TTDhRM9Pv3eYSFiyZmFQ4qvpK533gm7uYxM4xEZkD",
  "key16": "2ShQN26KSXNvVLgU1EhcdrMVD6jDE5N4WRYP9sfHVuDFqkQhTb9YvxeFeRPy8ky2urnzqtQQdVtTiZg2EAHxjqmP",
  "key17": "4gbK1krhQSK385GamYNU4yVLft6NCKegdG6RdSzvuk1GmHU86zjHjGf66JMsFkS8rLZC5FmDTYyBHwCZnuLxPjPB",
  "key18": "27XsCwArcbeux1vEFwomaFfdV7uUf57dKppJiJjjk5gmkrDD4htfev3jJ3VgzYC66HRmkde724GyFyEhm4xC9mkm",
  "key19": "3MiQvwCdKyFeWsyH1Lnae6DhLjou8qEnbw18H1hENAFUGRSx1pkgXhm1fFZ2SZqfeGRbkVQcSFfwvqm9gCa2PZ8E",
  "key20": "4XXk9rn6SZVnnWtE9GLjC7YcKCa29F56KA21ZkZYRDUTMssTRpEd1jcCQCFL8V2wZPu9ewT2kMrX61od9Uadafcj",
  "key21": "2ZwGWcACLkKiZNcqUuYJVXpLPenMBGuPu4eiV8q4Z5wZLgJYzsTd6nZWeWrvnFSqGMCT4SNgXScZ2htAP3shgZBG",
  "key22": "5kyWeNFDtE1oVAw2EYK4yjsevrEYJAvZw2FDY2LPbbqQGw2kjmvkjgay2rKHdqQZzJGYwcnGjwecnNWkU1jnut97",
  "key23": "5kmt13Nf2WZLPXx3KmCQgC88ckV1jnw9XEfwsxdMkRHUTg7QGv6ZpRFpv4yjHV9ropoHuSao6pX7xs2EfyTZAaQ9",
  "key24": "2GiSFKmRe51wxH8vjrkDktKPpCeUaH9EJb1NS8ycxuLjrLCquYR6fu6XDESgNnW5sQqaxCKz2NpVw5UJwVyQ3hCL",
  "key25": "2pYJvjHtrM629y6fhZkMAu6KmJeDp2wVAEFXdx4dx8MVFvNfHLerhaiqdXr4PxsueotWBuBz9ey5xynoMhMd3JQD",
  "key26": "4VKhSMWJCRgmqVo1LRfNwrLEM3F6JLSCPiZbQMKJHAbiWdnbgjY6KzMeaqhhF6D6zNXXoPTEQo6FXFEkxWEUKoAX",
  "key27": "63zzycrdUbNgruNPoPoPjt5ndX9v3gWkH3pNJgEJoQLNMgGtUwT7nuEaqPuVdu49KW6UgmhdPt8768LsPze5Dqns",
  "key28": "3Xo7EU4UsT9FGoRYFoNxRv2CRT5eP1MXPmcJYawAUyHsA1SDEWmd4sMzqqvcxjtejnVinUMvjGw5U7GrgwUFxG1v",
  "key29": "wbeYfZHspA5xLexHUuaU46QxKzeh3MZgsBJGZfwG2jrkbteRtTeYCmp2RKknBEnp91t6G1eCAkSyLc1cMu5oj7K",
  "key30": "4nu9q5fKiNQDXgfsL9R67EoVoxVDWDthadNQqiM2x5AGGzdeZRMMBAsUuh3dFgRR843Ue7mhkrV3z5HDJwiiMe2V",
  "key31": "4ukvAYbe6CN6qEf8RiKke34R69vDDvSkWb2bPVNGfK9PAVpL7ZF7YeWgAUauPqDzVUtVPnpMpT4M4UnDRKT54a8k",
  "key32": "KfNNtaEjwkr69jNjQQdaRzgjiruqabnC8z6jPTzY8Hf4S4gExeAjgQSWc76dzS5WwFZuk5HgmrrMUfPfkLwJB3E",
  "key33": "gp36zrJG3zdxTAdFRtvU3HaL2hTu2rKMGaVjGVcufbbnVFZVt5MhAUcGq4Zy8qWY7ovVgQAsaPwirMnhuAE192b",
  "key34": "21X2D7in51SN5iTQUDDg6JCmQ8TgJjZewQb19xcP6F369nrQSJpuTq9ouqkqTXx5P5d6iek9TQnGbgDF2sCXmgbE",
  "key35": "DbmNNUCu84BAMG6fuHSi1vDAhF7euSWGJGKsBk6YNXMWHJGiAMqmrRBwodVrEBwF2a1BNcM4gAU1pwkV7UrEAtV",
  "key36": "3rrJrxQ4SBNfty1BihLjV6594a7MhK2VpLGvgFHyEYthJu1pDsnUL88sFeSvoWHNcREu1Q8vYWBShkU7o9gfQRMd",
  "key37": "2fm6WG4Ya62j8nNsAkJc2TjWkAuA8GoyjLDuXYuME2QZGUMS8yLnMcfiaqB1Md7B36VTRvAXhvcfvtPt8DT57XLx",
  "key38": "3SZeUDPd2d1oXCV1eg9HpzVnZ7HRWmRfknJhg8b7kz8LaPXNVQEgDpzmrHdSu65ownxZhmNxpP98Zbuxn8bB4ANB"
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
