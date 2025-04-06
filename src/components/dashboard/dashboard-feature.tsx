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
    "5Ys3gepSV1g5trmzkSY312mPqCogzQQ9jraMgrhQhftpVTTNs51mzoKGueWB4W8yGzGQQN3xtABXDBeECBQHUoPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Up4gWGZzkbgtQrMdsxf9qEXyvS8g6mh7yzBXJtUstGHssM2egPH6QDhifgkXEyGWVvqGrj5ywQTGre1DLok4gSG",
  "key1": "yqFHBgTEacbfb9tj3THzFWGZ6BBv3BQKpVePLibHyhPjcxYkmoYeADsgF9h2C6bhpkcPuwijk6PWX8DJwRCytgq",
  "key2": "U4anj8vHXYPMHsPBDQgCLgZKHZ43uma1F8v7xXeDGaiaJn6graYsWMWBFNjqksknGfYhEgSnrtvgpoYGyX52vay",
  "key3": "5F3F6yHeN3xRAkPSPBhnno9Z1mZX2QDyEAkRk6WMLqQzMTCDhMkgnnNEf6NcyDbvkKZvvW4fsGgHMxXGU1d3q35q",
  "key4": "3DqNZt5Yy33KY94NFxxNfA4iXgPcj5qQP5SyeSxHUMcfjCuLa4zzzYtp5UYq2QGSjQNuSKrSStD4CWCPo7p7scQ3",
  "key5": "3Tz12CrAXbhgePepvBbCWwUum9TRd5Cx5QEbqWhLvv5ULkAaCXnz2W5iHFW9cQKmXrBu3MmbLKaKdysFLc74AvmB",
  "key6": "3GvgMNvxedZa7S9y9vATmCSbxUnef3tQCL7KFcpENsuCbJeSC3xMzm1G7fYqpsxTTkmSWUeEbgkhfVFz9kFPGQNR",
  "key7": "hiimsh7WmjjFsRnEojZxeUQGoKFLfmhXH9188GrfT3Y2oinyWezjAkB9kpWKB5PyTwnPFARqvvFcdeZ8qJbFk2d",
  "key8": "38nwVZGzMwbCkrwL9xeXxs45tNmBrADmXMLXfcKjZNNg4FZwYZYPVtFzRzFWXc38FJSMozwcEJcG4jZ5xcVHGu3v",
  "key9": "59bg1fnGBvFbiUMbq1EpgdCuM7CLgXfEwSTUm9ZnfYcRKxHXUb1hmy5cX1rY9TyCQz1R6gL6aQoFKt2uHkBovZq",
  "key10": "5KpzhJYxJG4cuWbRDyaGBWUhKVhce8RU61a596xf6gmwBYWptPvoMAyb8pdDnLEAPHHhAdhwhArm3CYNAU6FNFKS",
  "key11": "3y8UvPYKkMLCFMWTvaEfrxyLFYHR7iunpmeEr5rbhvqwDUFKwp47ybPW1RHSNqKSdNLeqbE2xK9czQnZpViwcCvS",
  "key12": "igEsTdUziLDS5QfGP9QX2BsXSXCtSyQToeV1PjFoXUdNMJrq69LUdh1Dss4Wp6E7GByKxrPjC9gaSoikoyxKSpG",
  "key13": "i9xFyHd35HNTf9o6Rjyd2TmoXmHEw25t3J93avXbnQEcPnhYJacUBwVBYk4YD9Hh1iXjL88TF9vSpK356ewRwmL",
  "key14": "62hAixpTGGZNXxBvvSTMdwsvKPCrfv8M3PJcSFEhTpqy8mdQuVZD46XoXEW4QZfQGfVSCgjTpQywfECvZHMBipLE",
  "key15": "5d9BFHwnQWLC2JSPjJXQN7xS14BbrnnMN7Ujbr6US58QsnpxBWSAAB9HrvjPdZGwymaWMoZrjakqxs5sHQpubY2R",
  "key16": "8da7LafnowFzmtbQWAxSgjsAfJeVd2Uj7h1UMMs9GhHK9vaNWZCV5Bscvp7SMv6JEnhSfbEErtBi6YhsWHCjDWP",
  "key17": "4PBvsxAmiLiLzwp3pXCMrC7CP1fxS84bH2HLEKoyu6U1htC9HQ6G2dsjmbHHfxKG2K11JVyB6emksop5v9snFuVy",
  "key18": "2yKCwH8qLpsvnsDiVJAy8rQ6FpeFc8bbUCRseur9SimxEHQz9BhgARMkpHnWW1wh3rrMJyT9VA4JZU1BMn1AnGhg",
  "key19": "GorVTCHj83ttXN7d4YPRvQ2oMPJHDCwgwkogeTnX6AxMXYU38Gu9tvuZGFKTpjdURND7JWYVaRLXva2Xhjv9qpj",
  "key20": "4GSew34DrcfepFCWn8CL1LK1XjXvVnMpqYGBLQdEP9mwnDWSGPvHdsdgrF8GTHUQMYoyS5fR4bEAKqXAkRqiVuU1",
  "key21": "2eu43cg8Fbq5NQUuzLpwcNc62mrUVF1HSPfBKeZ5w4HfjzGUgn67rBCRty2MDFgd8LMasDENBS1DJJ3qq21XnGh1",
  "key22": "3kgjMxJrLSypQ7FVjn6PmURrudZuZkuYrCcm8CStLENsr7TdnEZdbCw6FpbtTkzaoXJPNsseLi2Bi83B6rQDzxeR",
  "key23": "3nt7C3UMwWrw99BRChp4nHatGAJo8oEXeyTwCKnq3CUTxkPsAvW3gzcrUhcHfRuzNs9sXvGCkhSUKLdX2d15KTWB",
  "key24": "5HrTxVY2vq8uvghw9hHkeRzhgcPnxv2XVNEFqTjX3pmydBQps4t8dphbnb8DP9x7UjkU5hP1KFTovWrveuviQK74",
  "key25": "3Zw8L545wn24gikCpNVavhfnFEvc7RpoCWMP2uUiUBSUGBLRBKPYYerKH7vAWjJwRJbbUThZyy3dg1xKFtWG4aC4",
  "key26": "ErjMkwrnvKxcXFuxKVgMGuoLwgQd5hfFPawPhS6rBa4m12nS6Vcy58fXdzJbjVACazKbCotRCHPnErrV8nPJTnq",
  "key27": "4pPsznCAntqKGniwF1H5MH2yiy2UsDqbg1ZCwvp6As75Xe9CL5pBoTS9i75Lrk3KiHD5AQvYPzMxpCzmf8fDdMx3",
  "key28": "2hSgxZa6pNFRYfxGwrDjWKomC2pcyhpds7H2mo7hJf5PEP7iLWz91bxZmxZzrU2yesRCmQ52uoJKte3gq6bCLArE",
  "key29": "53aUB6kRZPnSz3H3VYT2GUjUCyD2QKrPuHHxwVXH8K9TMBB5TxKmkQW1bSA81weEps4eCHVAt9t7XqFppSAL6VbK",
  "key30": "2wja5GJEBochCrFtbrMJ1HLfMhPnxeFLenoDmER8PSyCRVGpfXnnc2pqnipoyZj3CtD9oEY8d2xziyqe2zi2Vnav",
  "key31": "5uwyLcPM4Xec4bCm3LQYDSBvZq7YR58kpnmRDXEAdsHqAixcp114dtcHKR3Q8ntp3b7kiPh4LCfGbjihzPFtVRgJ",
  "key32": "eybwHCo2oKmTaBAvZiH9WjhcvGk9iUNBQP4GVo9sUwnZunDwsdRV6gVnSZQqortcCpR2VrwLsdmYSs7PSf3JSgg",
  "key33": "36wMg4ADwKhSnbj6U3HhZwFSDwWM7vKrduA3Mfe2New4qeti5otmBXJW7eKvLUbC69MvcyZ8WUzefvPjLo6oy6Lr"
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
