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
    "3vWVXY9UGcPPMaUJiq2Ny6czmZmVfn7MV5iB72itakK7F9FHAg3wdfdvBSBFDq1WUG2jnAusYM1YkZex1KB4kUdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ACjHyKeapQLmu6Ls8jZ4odHBJ15pfXUrQDtRzP5XW7kTJWANGtTGAk7egqUbTzm9tpoc5fAeCzFnNvQKzaaVQxA",
  "key1": "VAnEgZToTKFbMJZRYAUoFtHqTteG2m9GP266V3KTvhj49FRUzNzfvkKB9Fp936pcJqfH2quLWRhNkBFzNWv3z9X",
  "key2": "vraxb2sAna4APaaaCVcJHpwwtMq8GxSpiXyJaJ2JJTYM7cBNufr59neNM56iG3BfQUjEzXXYAN2a9YzzKcfY3MU",
  "key3": "35iZe5AHXRw3fQWmAJaZqg1VZyQF1FTLLJHkbFoUtocvoDHQ1zrRsuffw71bFZttN3Ea1e3yZBKNZ4nvMvTNmSNj",
  "key4": "4pUEAxQoinm6C5qU112SyicDYNKi3xsaSAso2rSy8GiCijjpFgU1mWHVn1aHUFyL9MhjmAzWjmNKdyECMDJ3kRzp",
  "key5": "2u46rWWXVLyvXKXMkx5wV3ZBiMNDkPLxeSy4CXMG8N223gJw1t9xdgDo2UVXiFQWFgWiCJTh6PLGJF3PDT3LQ8RA",
  "key6": "eVuEWxgtxcCFhexJ3cHQ3vMTj4W17kwyefYZm6pALY24RUHbUyGzFyE87iKWsptXQB6pqr4B5XudxYL8zhjLJA8",
  "key7": "5Frkx1Yiu8pDQeBn1JD7xS8ZSFsSJAd4gxAcXzUU8g87HhwiqEWLFg89BFbeNXnmETDA1ipcfNUwtvMddN9RMSz6",
  "key8": "qsTYxBMXZ2iWi8f4GmHsXhMW5z5pjs3ojPbx71FU1gEF8SRg1VGQg5uwXitEd87yNTseqs9m3KTcBHnwRfnRhVn",
  "key9": "jQnBFReSKnH2R8oudM4V1d63sFvv4WVYYb8xCkfUsurXSTNTuwZXDSjmfMmon4rETKUKnUZrLxY8fHLrRn4mZLH",
  "key10": "2t3zUzb1WmXDXu1Xiu3wEvfwDsat3xYQoeoxGDn7Jj9LtGdodtpqhAc4awah5utJ1aqPZAfHY5C51DX8M65baG2H",
  "key11": "5nEX5mkqCXezbQARSeqqkEFMENogXKjyhKtBf8UMyoq6QTLq1LUneSbSrYt5vHNFZrc6k9kSKm7XaFQEvdjwst42",
  "key12": "2VrS1VL7Fpy5ro4qhzhwHMypGnisGnyYcbWbPqL99vR9Boof7Kj8YFxFWYLNb9cAjQoZoxy8LvcrCrH1gp8XQGfx",
  "key13": "3sAuh34po4xVCFU2hsY3urzGgmJCPQEKpkrfhLG5v83VLYXpnAwBxMZJvknbXRdFcNeU8dRahrLmrXhgLmeJCksZ",
  "key14": "3q3EZkULTnXFG6VBfBgVHrd1taf7v1BVrf8Je3LvkrS9TJsmzJ4C4qV5XhiRPeDh24eyuqaqLsaw6aqGdnppPfcf",
  "key15": "2SvHtYzQDwEYypWDgGGE7kjdfFWRrb8RZwwfSfnyetJw1Wh1qQUgtsr2UVbbKDqzXowSRpGS4ZBK7ueCzsTohabz",
  "key16": "5VdkcFWmQrXeSiBC9NbB2ezQMn1yEvZaUrTZhnZSkJ1sqNoxu59iSnQ96ShPZfR4A1Gf2bpr6HLyvwNsKWB9F5oG",
  "key17": "5fSc9d9SdzvmKxXAAW3oXTPWgibUCbk329xwLC6ohwj7VDXJvYEsJUtonnVcvnpfK5knLqnZxTHEjeLynbDTeKUQ",
  "key18": "3jZP9fkKEXH7XfWfkd4EsApH4YJeZYpoMoSJDhCvbZouHcW8Uh5BPVF6MWM1RJ4YRWqcfhr6M2VACjbhxRZ3eNtT",
  "key19": "4eUFskA4wQxMpTqCpkcSXki1FSStwb4AkF17tdgVs4FVofbsoR2yZMMxF3sUTiW8EQwfrRdXc4e27rxa1Dey7jG5",
  "key20": "4SV5vg4bqYFprrn1E6qpimt9EAM2Gu3mNkNgC2621PFXANhKEafjNaTJqJy3v1riFZ26jJtyHQBRaSq5zKRs51mQ",
  "key21": "59vNP7SH1UMvrvq2C955DtoKQgQpYcMaoW5dQ39738nswMuEeo7T6E1MSpLVqMGMWRZ24idjJUQbxonoet46EtF2",
  "key22": "mAiyw7HWyqAhis77GdVvp7noV341ajpXB9zUy7jfsE2ToxSCpduM2jgLXkkmbUTikjFmDxnhBMUAzK31yXbhf7i",
  "key23": "5xPmqT4TdtoN1ZRM4F1hfK7QxttHP4h37YMoFLYnEcAE3UpBef2UkoPfGno1UFrX4wX2Wyc7n91hepV3ZYTaL2uL",
  "key24": "5TjRPjZUoWQYnnggE5PiNoUJ8QXhrQXWh2h1ckDYCsDYu3XZpyGkznNfurFsQ8B5XsYYQiHPU6hUBrvzJYDBEs7e",
  "key25": "aRDVT3VCni9dAVFV3gCFAukyZKKf3mwy9nnAvBAY8a5g3TD47dw2jK8JuxEkp9whS4Hdvp6T1GpEHH5gVS3tgQ5",
  "key26": "Z5KZXSwuM4R8hw8zZvmCSrfGcef39nc64CEjhGUE8sqRSL8qMPCpFABb5vn4pirihCwGwv9frjpVmKx6WeiruXb",
  "key27": "38WzgSVAomX2Spjc8SK3uWzVuNmuyb6KeLoGeg1PYV4WA24TBg8Qst1bvLQrMEoN6T9ngMSHuCEJvYsHkR82VHf7",
  "key28": "2YWw5VZ8v31bPX8Q1tt8UVCq7SAj1AciMAqyToP39XC1mKHZYAPhpLpZxQWTExve4uuRX7APrMqN7B96K3zZv2rh",
  "key29": "7zBU6kwN8FafQFQxQ8Zsrrzfecfu6mJt2NTqKkxVezcr7tgex4MLugWibmdbCQyC6Duz9suyJeW2RvvpGnFEmSy"
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
