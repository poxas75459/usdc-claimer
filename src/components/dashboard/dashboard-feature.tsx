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
    "i8rBQW12WTUprxkumkFGA9kxW2j4auznibCGjYwrUyPRKf9aNwR7NbGgQiyxLP8V17Zb3qG6CcPPYBv8ppAwscm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kML28yjaNTRr7gGMkbY42whBhEtvo91KpEZg2LVzLmDtrUpLnAzTvs6vYWT2LtH4FbQkxs2MD4sahsWmq4RDy4X",
  "key1": "23ww2qTqb94w1hJ22ertNiiD7EMMTyvUmPgP2S6n1iYPKcEnKiinfnkyzAmHfxGDy2an3RvSEnHwy5JGRMAVDKjb",
  "key2": "5uhKsytvLm7po1ZNKFRJbVY7Xj11SPny9NhxzsCkibB5QKvSeVPEuCwcghD1Mqie893rUwqD6aBcyQs9ktLB6gun",
  "key3": "3BXtQCWTMP3fe76RAhmtLkFoavXxMqK1y7mTYKbdPgkKUPAZCSdJ2JHrwmjETSk49MoM88rHUjPy1jfMCbfvCTds",
  "key4": "3hu4Ubk1jpZsWmhjbSFURWyvJrENbBkeJNrdLjJEEwL25hrHFFfUNHV3BhVqHYE7ZeGpayFerjyeWHTqmTjPuMTY",
  "key5": "215CWw13rhfBQLUKnYKwJLR4CMfYpoCohAfWb7AHUkrXEjZLT9Zof5GoGjAkyeZ7dVN6FdAmF8PoKJkYVWtxWfaR",
  "key6": "37hMsj5EPpnDdCwwsVXyCyk3qyvMNbs87JCe3Yf6ed7aiAUrPBueE7LQiUdSfxMwMKPbJG8HFBXm5SzNm9TSM5oS",
  "key7": "ZWkqmc3g76CPht1CqDbNZpN16c4VpGiMEWzkfUc4uUSYiMfZMHJqYv3LfzVUPMjWn9sYQWfrCWmPBtfKhD4ut62",
  "key8": "4m1yEFo9cMP6BfCAERf6Jg2yd8ouFkQwPaaRHi37byTrvW1mb6QB2UQormPfo9NARmn7PekFPL52m6dZ81nvEtJb",
  "key9": "P7pzMUidaq7fcx2i1WGLzkkyEUxAr9eJh2PkZV8Rpyw7ReTzrJ3pAEWpwCFKgy1xsezVpyeuvv4phsZDTRdguU2",
  "key10": "4etg1numR6SURMRmUH5tNYVxgArh9dVQifDXpqzMaVNEDUwj7YypqCUdkJufwyeD19kGctoay5yqb3PGzUuBWQ1g",
  "key11": "2ahWpbhy18T14tmLdvXD2EcGhTECTWJz9pMUjipA8FmoL1Q8AH6easRKtwftJ7J1ZSzDUnne3TKt5YcgkcqyHUHX",
  "key12": "Wj3UcG186KLDsV9Agf56PezBGj2y32fPMA7RdGxhffJSAKVmxRZbPAh5C55NeTsrCzDXf4FSNEciXzyMcLpJh9M",
  "key13": "41bakWAsLhbsqB23qX4Yo5kT41k3NSiR2hxu2q8JSFjLYn2XEXEKpxuq5sYNgkKbDebm68EFjjzKyeStFEPpeXmp",
  "key14": "mqzinjJfrRZxvD6oZiseQstyxNKoZ1LU2qeoZuueM47wR9wuP88xL3eKvP4vMcAK1ecB3UdBYPjY6kpKPtWGyE3",
  "key15": "CKSMySdywbbnmFUgRv8NB1kdQ33k34YuBjokPwAQxDn34cKQkQj2ADCRuWX3CGhgsKGco6LteaGwNDPnBWVA2pD",
  "key16": "3AEKodu4w15nRaAjo2Gvm6BrL4beEv8yE2rKAfJKGGTgtxXY7KBXYQC2rzuv5pb9HAch8ZksknshwS54anTqe2fW",
  "key17": "29uLEQiRyvWA9kHRj3FoZ2QM7cFni4vFmCy9uw8AfzQMWiRD6sNDDZVfCXjpn1pzwN4cvk8M4L2sBy6Jh92c61pi",
  "key18": "54eeoXGg6J63UaArMiURhZaPteHE8zeoDSt9rfAgXC7cFPGitakNaxZLbfe5bFbaZTVkqr6NKye2uqbmKjmKRzqA",
  "key19": "5pMAxSzEzEoRnw2sKJcybKaVNFrwiWvcGgsFqG1VuUSdBThCAanHfedYXhNvykAWSfomX25VhSzsChMysw16z9ZE",
  "key20": "3q9zJSuSho1j3yfRDnDTrXUtpPuEmspswvhYNAEfhpoqkWkNw6YZ4GprkW4bXMCwXVSJhwk57auxBB5WfdfdmxF1",
  "key21": "3fQJxJse5HoYzs9PkL5PCdNxyQNq9a3seqBU9wQbDtsTqXR6oiFASJmoEbGohz6zev8XWnPnSakeHCFk7FVU42ZS",
  "key22": "55NJGkpWQu8s88hpN5zKdu5pTEAKSdef7vSE4un9shH3f2j8u3DB43KdbV2SH41TvD2ZhjdGFP3CCmK8QYS9RPg7",
  "key23": "q2gSz2rB6WhoWznuF471BmkScNQAWXsb89jm3PxL53EQhQoqa2BBWJntt9wgtWoYPJugrRRRTmCtzGCo1FxDWTL",
  "key24": "UzSizY87K9dtjhDT1kyXqXM6wMLAQpS4n1cNebeKm8cPAzRDkytXXA3stbawbY7W6D58UWozJqF1dLWp67WEBqa",
  "key25": "3X23AK1XAdRncBGdyat9RdxTKUL9gH4ktC3tbCLFFL9pHX9P9VMKgss5h1wR2KctxpAJAguHWSrvwj8ugVAFdsr",
  "key26": "62MK9Aq2KRtvD3o5y27a8reUr8ursFHCKWJJV45mmHDA74zPWBTnpA2eAib6AZHcPoxWEdbLoBgxYhuURz5sLz1y"
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
