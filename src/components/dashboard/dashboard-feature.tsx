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
    "4jKQ45aatHzJ5uWDG9ZR9ucmCaZ5rLhYKoHfFxnUtdRrq6XQnzJKibWMmSj143YK5UZWG2qqe3MiyNvoNzmoRgpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Km1C1YLfd3Zq77VeKTpUJFoY4MswWVwoXsmSwEDxyD4gLnhm473CjCFKoqFNP7dfAGHRppGJQgYhfQMvvbxR88i",
  "key1": "3ZdhmLcV9RMwvBkGXWKXXfL24uFsAXVYheqwVF9iHwnkxopRB8B6kg4RQiC5TDKc7MEg9NdzjfM5Df7FPGTYx4EQ",
  "key2": "2Bo9cxA6xrt9jMP7qerzCBu7S15M69ewcJtZFqjeXjK3wniJW1oHWWRJdWGoCLpGaA9sndu66Mk5nyqrqNa5upu3",
  "key3": "RviFZ17bSvyupn99Dp6MMLkCEMeCjqRFNZuspo9VYjeQoecSuTfyDbGJa4Lu4pFbkmgVBTKh3ZnvSXEtQgeXzyY",
  "key4": "5K15XS6WNcxDDXAZgskQZH27ooN9RFhSMc37kFBRwNyXp1mPwsrT94GoA4snK2jwgVyemVA8KsSYfrfEsnfmiFHr",
  "key5": "2tpRJwb3L9SKNo8BHWm51vHShanZFTZGxjJcX8b5Vmntu18UftbQAxNVTRNrL3AGE84CmXs9xyVP8rpM3svNwCi",
  "key6": "3xcP5YzK6KcUEoH8PSCrACEGNEQs6EDLn4HLbCkL6ewCzQXAAFdyvurMofs9E2rrqQCEnbknQu8NtUdbVJFJbRSr",
  "key7": "KFSecZUCBuZhD266iKZ6FSmv48L8T15EqGcDf3vq5cz4CohH2x1nCDF9xBtquhdT7zYEJZNdzMxudypx3iQJKXM",
  "key8": "4jvcBtKbJt4kFxXPCgEYgveMEWBvup55NoU9pmqLEdXKPivgGBKdDZrkrAwoPinfkD2fJkzLtQzCZEdoMUEN9jpH",
  "key9": "5D1dFLoehKAu5QPGcfDQUbU4RvnHciJssbLkutnbemG31xrSjzfMCKN6kfWUYqBeEKX6rpgRzGoZPk3dxs6d2wZn",
  "key10": "9YoJyh86jryjEzZJs1RJj3stERbs8feqUpYPkhHqKmNMJygyjY5byFApywxAk3zXTfmNcSV3RyPU4jmZrEdjmfb",
  "key11": "5Wsd2J7DLR1Qjmq995vCLsiMibpVLw4hSHFzN5tLVUK9anhucNML6gs57zX1FCgi2hHPA9txKvrrFjTGyBY7ADB4",
  "key12": "tQwAFXVubCjui87AJWTZVKST6EBstGZemjqoijMCpJa7ojGCJF6WThGCKHZuEMZ1kQjk47K648wP8tL5tEpndPC",
  "key13": "sS57SrAqxLjayC6fRsCpzPPwTGwuvi4Ecqn4SjycS3UAA9bqrrtEiKevFcRZnQdy8RFBoMT6aMzr5sTHjLQgGuR",
  "key14": "2Tx7jPVmgHeRUeiVF2AuiZrQUcYiWGdiFz2mXVqrgrEuexBHeJRTKPJbMdUeugKUhFaHXNFVGN9Z7LrvtaqYALbU",
  "key15": "oN7WDsXSD3T3wQ8kj87SbzDRgdoWy1XJxyY7bnZ5iq24sEf6mxqwRdEEdWiPyZdUySAVMVoULERQWWHHkSURbeN",
  "key16": "iRPiJr3pdNKZn9ohbMsFf2F9YzwXsqRnX5GBnNFNf1yh4CRjjZMv7T45MATksrRsRcYt65Xuy2SBfoGpeEGEH3W",
  "key17": "5rmZM3wDNQNLSGpQNMmhjsvaGAFKXGuFgwcsTc727z2mXCrRk5NcnxrwcM75cy7Ed1kDrjMR6NpL7D8zVqa3DqwX",
  "key18": "3oC5tuTFD1JmfCff3aVj7VGHyteqsLstkNNNYHBy9NDK2ZYj5ZbmZVFzDc5MzbPxJvhybAFqiquwNEE9XBaePUqN",
  "key19": "4b3GRzmk2Jjyc8ogGxg5iDoKyXTN7S9vpcf7DhSzA71zjZJYAvSMi9Duuh9xfwKEBtdJoUQEGPqi6hKSBwajpY68",
  "key20": "2MQsCwazCjW5pMSPrVSBtMYrjVgX52xgirw44T6NgWypWVabTwHQGW8qqAfMkUMcMxqAkMk7PJ76JHGXGERe5Wdy",
  "key21": "2EmJjYieR2JS2mk6pqBp4Ajc6P9C6egmQDG5NhHLFzgGAn2Qypw531TWPsfrGskvT9WvRu8vxiDaSsKAyhUsHkaj",
  "key22": "YQU89vwhDrcSVgEWpbaVA69mzECoM4n7BxBEe83K1ckWNKbGNUazv71XxXFHrejbhVBioPbfx1M4igRiC4zS8o1",
  "key23": "9aF3yzsHzpDtZK1FeDrDCabZ5ZLFdyEKWhNnVkVCYy4nA3pTRCMkzkkEJ6JsFM1xDgWuZJx4N7VJEeijjA9Z9ac",
  "key24": "2KAMSRdqEZSxvoVhGE81zor5VuHy5vzsLre1snSbaAhYMnHef6S6LJZ6jiWKMCak7W7pJa66od2eiUQRv6HyNvzH",
  "key25": "5ewYY6LmTRhxGFUknPdpyKrerNeHoG7AYhcH7wSWe7JZe8sfZHyqVmcXSUpPf5PGm7FEsMRQaKUvcWidRdberCBS",
  "key26": "5qcwmv4Xc1UbBardNCEkzcdwSNzUBCzFMXeRHayEwYHobsfheE4fA5FLN5QHnGnF6MyMdp4sBYr2xzJdtoTnxv6A",
  "key27": "5tLCoRkHKqCpt2Jx69mmGRzgjkSbUE5emsvRqEp5QKeFLnuLwQ7Dw746k3ADR492NatX3MTp9hy1dL1QyGG4TGR9",
  "key28": "2dyC3G6BnJgNz3VqfqsJgmWTctrM8KfsXF2NnfZVinEfK3xwrSr7AEXsitrbwnAa8vjmbngiEH8UJpvguW6SUxiK",
  "key29": "3Dy59rq7aBgaHJ3AV6fvWmud69LLqpBfLAmJeqbT6g8zs3BxCckj9T4n5tG4U9WdbfVvzSFZjJeVfWLvagVQQBXY",
  "key30": "vZ9EyFm5uYLL5EZrhnzj1AmC45YimQ6iCU2sV8frse81FBtb4AjeGd2p17vwSdbz4GNsdnnMUCYZHzAmK9zFRBj",
  "key31": "2nSb3Aw4fMPGG6Cvb4QPJLy3darYcwWHfrDpjS2L4aKiout2gJR8qVtmJ8PgRHA4zgXfviYCVkbKaYj5i3XoFc2K"
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
