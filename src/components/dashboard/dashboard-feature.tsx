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
    "24suxRa9x713S1rPosAd1SCVHrgYkfYAv1MSNUbheEPUF5NRK6cWACHkBxQW8HS98cj4ahfyTXtfqehxc1T26dah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26fo5FMgYjLo12bRutFocHznpG1FWTvFGLLKX4qNM2hqt2eh2Pw2qSACYqpxkXhwkHa6Hxta8xC8YUPxaWVZqNve",
  "key1": "5RArU9LkVMCyvzfCT6JJapgTicN2E8wcF1eDJgCm8KErNvqM6JbL9YBG9PRgJ73eySYmMV5JKbFVvDM1Hn4Vpixx",
  "key2": "37pEHtam9mUVGwU65oJtENo4pyztUnDjzU3qSUVP5JMtsRwS9adiHxvxjNyt32EdfnxWDt4X5yzUnWoDTpTD37aV",
  "key3": "G1PzLakzbc4ga8TVPP6GTNhmRe9w6BqffQYA1iahpQDMfMgiNcadDPA3Ar1dPL1sepRKoRbchmGe1tdVmFbDZfD",
  "key4": "7pzN99kwhpMc5K4jZpY1oaHjVqsZTR4XL9Mdag7SAsX8Rw1ATnHJhmbCfrtBwbBvhtrJHgVrhD1MS21A4SmEQET",
  "key5": "3ShQGzMYQvDdccNFyWpm6doajcR5qTMmEQEEh6V4hnKxmN7zZw5BWpFn7D4kmCxHhNbv13GrDdvyYjW1Hd2NDyAt",
  "key6": "3oStAK7utcNXgZTZB8Xcc2uyqBEbM3jQmRNX343A9uCPXAZNvHSskZUMZZSb2E78wRjVC1MUaVnV5Uc2jg4ahpGt",
  "key7": "5JnP8sDaGpm7VYSnNrWeejTbY7GoVLsn9JASf2bMJD28h16x5WLGA4m1jVgJZ4jGAT8JPBsFNMWDuDhnUC5bS37p",
  "key8": "huejK69roKquvdfpTyzrASPBSfgApizqzqbUiKBnMW77XbfL8zjq88mWBZqzPdMpHLNg8hj2EhockDVk95nrjQq",
  "key9": "5M5UEUTzphXoJGgXUaGdX8WeyjnMrM9NtG9WDWkYYGkLhswgVUHJfR7tJCns2NjYXxiqiFp8RjjBSfvWGj52a98N",
  "key10": "4qmYyCqqgQXfuGq3N3oWX61u2T4kNKL8gEJtMcLs82sjDg3PYGWYataM4paGA5vgWNBq9VQZijvK8vHkJbwwUsna",
  "key11": "4cZsUWnfNG47G5si4BfYTFcmnhDjrmyNkDaJtjEuUXji74mBpkPK8a5FGWPAyCdcn1Eu45EEGLqoseUcSrVAm68o",
  "key12": "64CuEtV6joaSxL9sergEoeENoDNxZ33JVymSJ36cJQbw1xrRaXV2DUXZqkcMKoJooL7J4V2k3mDKkx2bZBsSuB7L",
  "key13": "2ZrZNF7usw75ywcj6Wg2CnNNsupjCH7EAipKqdn3R29mBL2rpxJGB6RYbZbomHE11TuZmM52D3HjsBDWkFNTe8GV",
  "key14": "4QVn5k1RVZF1ny9VyVVx9pMcyX5bKnDZiP4thN96urYMMHE8s1tsUMfwDHxdoqipqbgYz1T7RyL89q2TBYTU5fSB",
  "key15": "2WyoWGDnNQBqnPiJhvZVfupMXjiHDFzWeVfjQEgAdP7fHE7cDMDCaKoeNbBLWEYbCbJMBvFamSK5qdkjjKwXKsim",
  "key16": "3Bpb1wwHV8Gif2yFBG5NnPCr1mUrUGsgPjKoFX62WoWTtygEEtNY4xRKZmjNZR2hFhqbsFXFNa1ydKuY5pGbLCz5",
  "key17": "2rRFrXyLjrcEuz1yUVUuTqngsdKF5xDJEkn5RTuv7HADbEAEWJN94Zegjrj4hvbyBHwKuBZMpuAwk1JZnspRXbhf",
  "key18": "24K8b84AQoxaudQpDrCTgy9wHB3XZJGSKZ1jyb2q85iidZXCTGEUbn46rQtJQ3JWX84HEyNngKowypdGpPhS6VEm",
  "key19": "9rF5oiR8TigmyhFeVVnEMRrnzyMoRXQfZADhcgwmdtp3qc9JT1ZroBN5HPcQKXFJ3kBMvvi4EzikHXh8jDF8dgg",
  "key20": "3e6zqYp7ME1F7upqWQvBB6ojsw3otW3mvWsH9HsmBqXy8V2w7VrMPhWedyhRfjTCcPai8omM8c9FomS5ayrx4s4N",
  "key21": "2zbEKVYDuiRwTrkr4e282bkh7iBzCovv4DmhX8tYRHnisHUzne55BJRnQmLg4w3MaGUPEKVhbLEbQmHoxv3jTruh",
  "key22": "5DVbRYmCJDF9okwSwW3RKLvsiAxY2vRyXum27j3s9magFbiY2PyxKZtRZDquKo4KjvUgVudzjo6KY1pkDyC5z7qH",
  "key23": "34bikAG96fZcjsMT98jVePxEUPDroJhhTCxAJdo9sp6tLgaQ7NjCxE7iyXFbCYZNXGgCVVsvApA2xHD3JtBR5ohH",
  "key24": "4cR2dCdFpeAgirfjYuVLw5Vg1NYXuSYn1JRuzN9bfaVvrDg4fzUhKT6LGHfRYp9FEmx5qS7zk6Af3dzJQu9y3fei",
  "key25": "5c4KE696E2Qke3sAHcqquu7RFpekEPwtL9dLxTNXQWmCcB96yNCEDK49p2wBrZbcS7xfJiY1yx6EEPshj4e2mEPx",
  "key26": "3jznWwaovKHx7Ga4zDsDUBjUVcAy6mf1NxKtMBSymKavvRWLgW2dF2GNwKTcVJiJC6gZ28ZaXF9DAGKbd2ZXneV9",
  "key27": "357aiUQHRDtg4E9RAt7JWmRDTCpU6WECreRLyUyf9H7LP4xyVsZGEoZ3iFH9L1at1YpsSKnrAv5CLBNxtQKSdqgo",
  "key28": "54q4xsMq8C2C6swLqnKycvwcT8UyTFGxBwKTULkYuKDKjEXUPJJ1XT17RRDZRLnwBD6absojpWAv1nzuvayxLgev",
  "key29": "2Qsp62Nq2AvAPh3BKXJVJ8VWYKdbfVR7auNm1Z9HsBjPAQ98rd9Bc3xD6ExJuhQ3MfNdP4Q6kfwjzTCDsAURGmqu",
  "key30": "ni1iRwh92GNB7ZoWGEsC72A5gdHzCx3ad18Qa3qVv2PMH2DMUPf9J152Cgzb1LnzQvZbTphMt8RHNvjmzmWEUtK",
  "key31": "3bGAWW1RLXzdbLyJchgJDVuanEu3CSZVnJuqso19HXiFL6VRCjrPzVTRnJoijbFMUdVHDxHzzrUagXPXmjMtJZPe",
  "key32": "5hZwiy9xd6EKYEw5PxKFhxpEzFrG9nvk2GWAjdwnjS9DHD1Vr3KvWpwAns8VHjBxJf4FxYKwa3mcD5MsEgZ8wCsR",
  "key33": "4CrrMg164vPqZ9198VXciKVjKaPdGjWNoP8XkgLYjtuGgsKTTXSHpLaW9XyooCxPLjutfeYygStKTw8hTCw6PZUa",
  "key34": "4XNj6LAKj8SPLeAXpSUozH45hdTzseLXEWC1dRDPhBBMakYSxtzMfXcdbTSgbXcBCX8QuSNPYSVyHmb1FnN1SsZG",
  "key35": "5nDyuBKYE926qHu53ScqsvptSoaF7jdYgZADtnokvSjs3i4mUnZp56napXicdGPnqTZ1wDL1UnurodUkmryzJkE4"
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
