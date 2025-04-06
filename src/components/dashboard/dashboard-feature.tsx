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
    "5oTZCBZ8ps3Zfm8TjKCSGsdhZV4J8EgLT3NGqbRZmciEjrRbY1hc2paapYb3VutqLAKpkAuiMTCQJ4LZvrpz1EJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TNTMu7CmJZBtyfQmkHx6sTnZGpQYJuGvaJsxmTEnAqsdUecpmGDvxQ29b8Uddv6u1WtD3aEFHNdLwBj1mGBrJ7",
  "key1": "4nJCNpoPTTa5eDGi3BCpf2DKjn2HDYMFojkmjLFR9qo3Q7yUcWFMAj7WrP7m3JQYtasYAZDA45r7Z7PdcYVrqY3o",
  "key2": "2zQRzvLuxdkxEVjHJuKxrT1Je64cTqS9EexVpKLzKUAymGE3kADjJKzLa1HBdBG8x9a5uXmxxaN9Y6i7GrSFvLyu",
  "key3": "3cdZroj41agYXfy1KqwTqWP49MeJ5JQMQfdDP9o9afEvNiwWsfRGrXjNKt1Txsn817QXwy3GfESnkc5KTDPVK8ch",
  "key4": "4VioGCASnpFuehT5RoyjVbsYyDcYRTkFsMMDcoRdw2CMrizmapfBKapFjT3FVZWUcQL64pTF75ZMRbj5ByzeXcjM",
  "key5": "2tRpwLJLcW1esY2wbXGf3CGKZzvNZVu88QwZa74qYw5qm9ty3CJrrTxMDfTyEhtoLesrXVNcpXjPdxrEPMsG2K1B",
  "key6": "596Buz5HzkwB3HPb4gEfkaRJLokZa4MVZyGQ2bYJyVapZLCiT1yM5bRDhbfdzj6RhFFGZRZrM2aEy3utSNvct9tx",
  "key7": "4uQ1AYq4dBTEUkR7x57xNVyikQ97w25iyrNEsVV2LjQF3MPSaBzLBy4neq8vJPhWb6XpuTBxo1PguVGAr2k6NPqb",
  "key8": "5yuTZQKzq8MU6eYLZsXnBKKv6QNaysTesAujwhL14t39M2NH29GegyWDDzXovSJ53G2bwp9A3ZewQ8WvZMRBDKTt",
  "key9": "3psUUMMRMsa3q5gVMp4VvzKDSCnmCVpX8tXTwwsFhsEXZR8PUCFfFFR1Yu5ADQjCXtTdYPqoRAkJu9AZvfP4T4yz",
  "key10": "48QjVYABsRruee4R3fUtoevytpQUSPNiNWgcZ1G8sRAQaDUBnTiv1w4GkHj8TQdhNXr5XV7rXZvooeEFYK1BFjLD",
  "key11": "33z2tyGto18S91HHNEqsa4qhm58ZRuXwW3M5o4dDq9PGDM2hwPayVpZDbhqJsPHCEHTRnGoD2fMFH5VmrBLzzMw6",
  "key12": "ywThCBvHcaYLfEopajv33Uf1DZGmihGGhDcETuZP7jAD2Km2KoZgzrvcgFUHz7Bw6iRs83yFDzEvuENpR1eDvjE",
  "key13": "2PH87hMqfxg7deTzuErS5a4tNEEtpo1ehoDoVE7anPPsUczn6aBLhtZRSJgziPwwuskLueJ5hRT6jM3Uq7g8K4HC",
  "key14": "HKajz7zzUUgZ71HL6jftr4scUaDtu9dRkzPXWuGge7ifUMXBsMd4DcxAXQgJhBHWyAd86n14KfSEaZvKFcAPbM5",
  "key15": "2bws5x8Lf3xXWPg7BQzcyzJLPwDqENaSiSJPb3kDoXAc1ztazGPtsBf4pnxRvwPSASKLW6LaqJMUVWg8pKcBuq6H",
  "key16": "4AdgTnBHsxXGsSSsYH8tj5dmSDbojKXhm9XgTSLEJkc8tZeUma5966R6xenxHs6MgTo7QWrMHxtPFh5x8jRyiBWU",
  "key17": "2RoB7nsyU5W2H71VLYJmEKDBubNezm9NJ87UFoRibZZgLQnGQ4B9jsQMWfqKb2MEtMBwJFh99KAwodXAw3W9NWff",
  "key18": "cR6DkP3tAvaukMtJAP32VLnAn6RJSSfKw8wm11CjnViyCyrRA3cN6tZ9K6ehUA7Bg3eBaQrPXw6K7ZLzfNkknbF",
  "key19": "5JQ7bSkDZjmG8Cx5KAHAbzufoSoHrVkNe7tdZxETqBrqG9JBugNGBphzx51uMWwBr5VD3Ya7TcrBY7K9pEF46fTY",
  "key20": "3rvCC3r3KKJMsBetDTXrAjUbaQdJdRukfSKwpLgW2QwR6euqp9va33sqwu73zPdz4wxaPAS8TKzKAAeyaFAaoiWy",
  "key21": "z88KDf2YE3xgVEahzEBVUu36srrqipQbM3HJMLTTYxbKe44DV45cGCfxEQFobJEAK8pWNewc45JVZDziiutx5fN",
  "key22": "4ob9Bm8P8tJQcko5REtZmCxK25R96XJBFbJxKTGNQegrut2KmgXYQQpuvCW6KofGWyxuD362Px7TzRh9HvbB6jUB",
  "key23": "4gjuuqdh2mMiBKH3ynWWSPp9htXL2CJ2xJNuMjLokRvC6q438ip5uE5ipYregCCFobGBkNGNP6uDyVTxTPBDZ5Zi",
  "key24": "5Cywy9wJrHXmAtqZoM3LvxC9cQ3p2wfWvGy4diqpqN6PXBT7GvMvUqyaqrLa3DbQGWMThqMDriTW45qNoeMSisoJ",
  "key25": "5oF5DrT9XPKrjWvhUPCptB6iTgeqiqucFP6Zrc8rxZDmGwKcHWoWm3NomDqRsMX99dgKVddN11PhFyvNbLtzJ3Fv",
  "key26": "5XC3ytaZgs54XPDCFFszEBuce7iaSXJ77VWh6cyptACR9ir6dZjYGKvpRcCsMHGHZWCoedhgBUWB8ycsNqPYE19E",
  "key27": "4at7Zu1BihfJCzACoVtds5ZqTCYqhmT2cegGtVgNW5sVHDwMCNBK77PCRh8fxQxPnyDBsAbNW5xkktswWnxDiEqt",
  "key28": "5ghpNGBcoGNKkXcDRYNGWj2jmXZB3KjN2JXGcgCiBWduaj2kemch1sxA8kszBq3vZF5SDXfrAjGhM83QC8GA2Rac",
  "key29": "5VUx2LZ89xzRLq8RozVnc2cA7YvD3zF4yTsZCyrzUJP6YphfYFAwWqfVG6dD8e1nqi1jezvyNXu425Zd1pg8sG21"
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
