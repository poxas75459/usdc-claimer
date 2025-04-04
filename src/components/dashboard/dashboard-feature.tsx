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
    "2xvAjH276ZUXpFwt4ZrynMaAzxUfJndBJovA6DtYv9FQVHFbBkeYDYBEk14MAknGzTUFaHtxWMNsay1vLGbJ5pA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B2hvJLtBmMMq8RnT39mv6bpKVSbkzaSSiZRaQis2uejLZzdkeWe3NnBL77qfjTjtMj1rYDaszx4DnKLNhYzQyyw",
  "key1": "3Cty4YjZD3kNtWkwJogNuE4NyZNunhDGJY5ZvNdRZxN5jhR5N2LhJJuGAxf4gg8bRs61o5z8xcYvLLgwJzCkK61S",
  "key2": "5dDou8A8JTyT3RA42SBPj456dwYJ3Wo8Hs6aJksZWDx5eXRC4ysQY4D44RpKuv8TV5jvXMx8F92xJqGWw8dTcruj",
  "key3": "3w2tGrhVZnfZKyb5YWq5ZeSruzkaQZCqsfyVqD4nxZAUTQyPNR6kqqQMgBEgKtpp2nxbNPoihFEnntq7gojaeefc",
  "key4": "sLGZrqjqWtpwrUGwsbjExXSthhdzGhBajXunvvNqqZLmX73tjHxP6RZNZVH7BcyuScy5kQSMaKA677VgLPS5MXg",
  "key5": "skhePLXfujSJhsRz42adWKekgmjmpz4yYAgP4FKFT1EghEQWhPbHEmoX2b9oeWTiGdiWXVbC4W6uwHdij5LkdUw",
  "key6": "4NeKMLr4rdjcrGyuwC6pu5esLv3kgjLYtoLjisJ5QsfYQiSpC4ATKb836MZchmNa7GqvEv5tQ3gYW5GLaRiStNvN",
  "key7": "QeexkUNirqhesQ2LMpND5GWivDSkMFzRTK8ZjdAAUwg4SvWCbSGQ9XeJAzPN3ec2oc5zL8DPhdL6mYZpvBUCdvk",
  "key8": "1qLsFPSBA6CvmMLqbM71WQrvKcVAdNiM2puEcb5eJFB5trEWL1dmtZLMfhCVzKmbkmJGNvUGSFRF6XNtuy4VbMG",
  "key9": "4NBnUgfrsLdvWbajv2iYPgrUch5ViQaDPDgBr3NAFxghJ2c44FTucGuV72KmzKrWdB6wudFZzndZNYC4YKyygruv",
  "key10": "2BHDkkAmrp43oFvd1jHBTSUjcivT8RyWudzgmC8Vt9sL3AYQEfhYmPW7FVxUms1ARGF4RxYvSLo2reR9GuTCZhVu",
  "key11": "2MUv6sSu41t1vsKkskEw8NNDXqW5M6Co9gRAHh6rLPqCZGgkbu2n4nNjCRDAnw52Ued8Bjea6hn76EZUvbFXepmo",
  "key12": "3cbngbbYZDAzs33TmqTobbeLfaD3JFuAC4gjj96v9V27hSiAdr2CaitaMTpNszpGAcs1omoFzfGUAg2BnWqzWcmD",
  "key13": "fi8dgQSShzHGq8N1WmJwbV6E6svCmr7L36tE9GsVRnn35SWZuoJzBrCAfR6AgfNmKJuhedNEA2ERBog7PNtC1ZF",
  "key14": "4XZS7jAVqNsjD7rCEcNcSuNs8YLFHNqja4CKME3cwHGGj1uCtyHAxZBYdcNziczQgPuU9caq3pcRmxdWZVvkPBi1",
  "key15": "5CQ3CFVKyNEN56YQybV1Ajf7VA7Myth1DhjMShK69UCQdBv6Mx5Ji83ELjH3x6bmrBg7scumfUh58ygFn7Fcdw9e",
  "key16": "3R4HPWef972KfQbxF4CzP5QhMDphBR3CL1gWhj6A3noKr3uFi3LNN4dQUtHNXUh2HHj4DxEixwQfuinHr44rdh9J",
  "key17": "v8J9ggv9tjo3bAVsEFjHWnJ6uWjH1axrYqmuhV4DvGyKUvj8hvZWcYwAbwKNpNCrpu2Lv3pPh6oCX9QS2wwD3Sc",
  "key18": "3oPKJkaRaqFX1eTZL3myBzkXbykkj2iJ86ramfoPfVVZznP911MohEvs9LRJqbGMQQKY5uBujSh5B34sjZUuwQKg",
  "key19": "AKVRQDBqCiVUhbArfpYSfZWCTffNuPtJhEcdEU6FHKcVJFXavx1QCN4RauoZw85DRSFJ3zgeuX1ANzTR8idFRUs",
  "key20": "5X8vCdkQBeAurtkASzgKzyq1GKZWiXrGy9q2ELueh4KTCx2CJs1ZqE2yaBRHkiQaFH7NXPnSygHBw4TdG4mFKxsd",
  "key21": "5U9hqPE8zZVNwFtgHrKxqeHJisHPBLtpbkNNpNgYHog9nn6ymXX6fc48bTYekxxk8ic8s4CR5qNnrARqrU6QDoyX",
  "key22": "3tVtN1yHtufhXhiJTJxFLZZ19PQrvM7zJUVjhJzfeRPszWbSgHZ4hfQTQJ3vav6SwBcrnUdVtqhiLyPGWTKtqvdb",
  "key23": "4xGBUXhVNPrz5qKQ2f12jeVmka6sQvoUStP3Qt9kHkstzc8mhtQq2T9cpNQv474PMuqCqpztZBGgXRmgxZGfHM8P",
  "key24": "3VLhVLEJcDBS1nUtXZRirb5V58cPo27rDg3jjKhd3v39Cy8GGKh2kzG3sK5DNy6mYwBEXsxCf5CBUww4ZJ2Y4KBD",
  "key25": "4Pnx6hpirosgPhrYd85kYv2WoU7ci2Hma4VpeW4JW9g64yNQeZAyZfALgiNBsdAFiw6KzEP2iw5uUoJmZgDcRYr6",
  "key26": "5woZhFPNi9BsWVBM6eZX69eUi5PAdKcFz6yAsRx2PHBFAyD2VWDquRUUPV5G8FCtnTPxuZ11Muv96AASRYZeURVf",
  "key27": "36tcrPRnuSUrp7hSbQrbeN8PFrcH3fvkunpU4TXhaKBNJ7SQFfxPziUT29rAyhfimX7C5srrYYeAKXXnZZnWREos",
  "key28": "43cqpR5hEhDFuCwf9eNixycYd6UzrQBWdocnLU8SFwi4X5U3DBRa2x8sfPBV7S36skRiEDmSQxq1iSRStk5vVYED",
  "key29": "3MqY96LHtqeYJPZonyjo8FopopBwFhKK4eLf4PgkvrQJvAoNoUg5eC7oectcx663bZwY3HTr1FY4sqF4Zq4fKdyK",
  "key30": "5Yiv5SVVpwnUTLckYf6QuTVRBXVobySPHPUtnXVTruxDgi8RRyn94jZgNFX5ve4RbZbWUo7coddzNLa8eeKotPYy",
  "key31": "28n6V6iyTeVbW5jgAJuA7dJBYjWR6hAbGHqBHvBSt7hLi81iQp1jjHQXT6zZRu8QgPH6zrjykg1pL1wgThotVoZe",
  "key32": "nujgcDhPjZLyRECW3xMtG3yMYhdX9DpYiUzMMCzAMuz6BasY5Hcvn5QFndw5DMPSoA7GUuHVBRPLrm4x69Gtjps",
  "key33": "gLaKEgjiLwLVTqX6T4BHenGS9avFWk5TaNMfVLfCnmyv3HQAHCYE1jYDNur6zscMxWjL3J5voMMhtDfCjRTgmdx"
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
