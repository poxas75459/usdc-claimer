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
    "3PAoNRYVNTBrAgwgu2122TR3ikeESAKrLpYR5opMzwqmWVjGiA1E9AP17zGiPRBpabS2hcKuam3Cg9mea8U9odUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52iPvUNDy1gFeGTqf9bSnbChfYG8zRbfqyqnU6XwMnjiSaGLDxiL6ksepG2YhAE9tvw7DxikASgQVEsD83MMxGdi",
  "key1": "3eDJeRpDyFQL2Qz8BgnqW1c9WxHxrapKkZehKc3BcAzGbet6a88dhrYnkVbpA47Tha9HnERQryykc79wGABb1Tw6",
  "key2": "4T329iVutz5amHnZHiqsHM4PCfiyK6RSSo7rTnDbTBSTf4y6bvB6C6NVFbspPYWyhSBX4gEDb1VNDJBnqSuDHS5u",
  "key3": "3xFwLuZYswHZsu17Myg3wuSaAkFkdqqf1MyHcHrkEqmVcEwqJGaWwhZzFVKioTZa3Dj53XeRAiGNU8RZNG1XcuUZ",
  "key4": "4cwLyCGHhpxzufhdPKSL4PWZbECChrkne9GEadakRwvHiyjHpezyXgnWuNQcrTSECg5pDKPLFZdhiPd5688JgiK8",
  "key5": "3cBvxW9bAcgkc6NSFUwPYdRfApTThQHZPDVXzfdBE4fCwQApkrHKigZqbjGZeMkYTFw7SUkXf4UWvvW7exmtY9Yo",
  "key6": "3vUg9qfdj7aE43JQc5LfVTrGsRFGSThVVqqasfdi5qw588KkyGiQJjzn1YBVC74xcXXmEwRYWsDRGUUfwQZx7aqb",
  "key7": "2XB8ZGxPtdyYMGxCGK2a9efA661LHftTKtAHCovSTJyWEcWxuPUEkkuDLcVstVcEXXtKW9S8HfnpBJi5Bnx7v11J",
  "key8": "QaXnAxfSxZKzMf2yQFPr8nUAMWWyvqX5VSvU1E1NiW4Jp774MxATCZGc9bnmRk12ZW2CbxKGwNugegBdSKvWEik",
  "key9": "4i4QrirSrdmTzpdyon2N9LigEqrgaxLU8otbe44SEhm1AszhLhpLsM3fxw8Mp47vnTgKdzgiHrTAgdWypncrXGnc",
  "key10": "46fyRAj5gNmY5qygUMLJdQB8Hy9ZSmCMHRwcc35QbKbAvQnPRjUQ4vMnH5Kb5FhkF9fYr3UQC2A5ypow6qmbVuqv",
  "key11": "3g2zADRqoBgrRR48982qvukL9VsSQxh9eeVe8nXHrm1ANY3Vundf9rGjck8Wx8JtTinQX3BrLR9xejeAsjQ49oLu",
  "key12": "sgcQzgSNLJhvF7eZWcdnDoiCurdBLzzYVicFonzrQaYcr66Fyur9kdFwdcWp3pawvazRFggveQKUS3chGF397uR",
  "key13": "2jBc2P3A5ZWfubPTAASDNV2Ld8WVajwfZE4qaSH5QJqCSsoofnF8789UqMLrUB6V42wq2UxWuPLmUMQ242rqA2cu",
  "key14": "3U3d4XiQm582CrqQCRarA72zwJjrq6kWmTsm7hGxgjXKfeEvfppNdsmzvQqHmhVp8L1MKm62JBVsMZ3T841vJt7x",
  "key15": "3V23eRVNkJ5KnqtQ8ZcKBHcZm8XEzL4hzgJxADnv1kn6X2XdDeRiipryFqU9qpTznwd4Cmk3ox3bfmavJ8wBxLtS",
  "key16": "2oB1j9uHrs87D2Q3R67RqevZ8DnnX3bWumXDVhcFbhmwgMZBvLyLvicxNmTKAmre6YB2JncZDhyN5vYpsBMK18nS",
  "key17": "43qQUdC9UDtZ1kmHPzBxrfayRJKnNg1xTD3w5PuSXurzdU9oS7UT4w9WK2Pdsbs5GJt8eia8DUSz91R2qG8RZrb7",
  "key18": "2KXMkKVgyHsobgFRJ2vimvfZZbhtV6JQFJgQmcVPx3bLfm3zgn3GggyufwJ8KbKRzUZzJBKbZb2iNpWFwYpCVWp8",
  "key19": "5L34yvey7HKNvoyrfZvuFgSURW5T71RXYAt11Xyrqk9FvjZABjsLaGn8mmWvjuyrzG3fMJqBcm3gdeZGGYwmLDBJ",
  "key20": "5KxKoxG4FUcMpLd2fLTfMj4qaq23DsYzBowcE7CFbjaHc9cqvqhvmSpzVpzLeu9WjwRVB2tguVq25pgzkk72iWCF",
  "key21": "5mffdcBVZp5x2RJkXgnfYrrEGbnhuxcFd2xXkhvyXvNppvpahXeiEuZ78i3KgeBhbvv2RMSBRXXwnC7JNE798EdL",
  "key22": "3h1w6QYiert1yFkHR6UUo5LSKKJ599iV8DcpLQhDcLytYg1wrwCiZR8LjGLEnCoUk5Sjo82GjKxxSuy9QMZbHsTq",
  "key23": "5EMqJtbNx7TUqWorA68UCtwJFHU3PDAeWbmtJN7oM82FDcn8AFLzPWkEA9b8VFoR7sPCsz1g2X5QyWB2yoMYoJcG",
  "key24": "dManpx8NWtif8HqRKsGT8kkMY6b2en73qa7bUXpePJec28CiahtR5NxXKMK2jtvxNGVTKqxsEESfGgZbqphsKPH",
  "key25": "5VKTdwpJQgp9mg7puG19mUs93kbBEKA2FuUjfCeHLmUFG3i2hsaJd2Sx67S6PUmhkbuuVddJvtDoDQrNQBxapQdd",
  "key26": "59atrQnCf4ghP8wcRKtSbJKec7sLACDM1wNKbL3tu2u1fdFUoNeUvhMPxmcg2XGkEPMFggewSGKhFe5br4pQCN2b",
  "key27": "3jHs7xtGgNqZUzvD6PR9Ui283rDSWCJwSn2Fz4bzmMmu19q4wcMKZSN33G9Ch7a8Yocos5G1CCPFBdArge8X5dvx",
  "key28": "4M9PLos1VDNSRrJG6a8afSMirydgVe92GemwxAqAF3q7ZDwzquKpF4vhbg2kqHZUdCKKS42qRqNUjmcxtJVFm9Mc",
  "key29": "2UeVu4JttYiTG3hAbGiMSCWJgjfpUMdBppiDPbb4esY1YybMvhtSujfQ1Z3RsvSnfPXfwbbCVfgezZBiXEdgdS2F",
  "key30": "4psvrkn2Ga6NuwruJH6uYjtkcoXo5ciLvzGxVyjtAHVkczfTHiKtQmxGxCMy3YpbZnPtaVBVBmteKuDBjYAh9eTh",
  "key31": "73uWKoebRyn5acS7s3QkFApTkCRadSEa9MzE3LJdHKVoucz3oZSecdkmLspEWooiNvvJ76FJs2bPngphD4Y1EXW",
  "key32": "wa7Kqmgw73ajNYvCwescnGpmHesxzu1a2YHiRdnH6P2bSX58B5NwMHeJY785Jgaprs6UKiSf1wmcWnvkyKTgoin",
  "key33": "261TokpEjs8opWHg6nMSxtLL9Ftvuqz4NRnpr2GwiRUt1yfDERDL9AgqYuZUUnLnz21EfuAr8vXRUJtcW4qsoK7T",
  "key34": "5A14qrUMzt1aS7MYDC8aGauJmrFeiCHgCJAvZY9reA9CiTDNVNWKQWGTaKGataGayvyefph5N5Z3czDtRYzbdsEH",
  "key35": "3jiEhJs2ih44qsXA7DRyQNNZeJ6iAeLNV6ehfLeYowM8nBWkMAdGatEvYazFdBuPC15hUM4NdC1Q74GfG26chnZC",
  "key36": "2C2JovV6BJEifRDybsDnE9rSd8PL1vRkoo5VcVgRESb1Dt52YM7WNkxbNb3DBCCDa2T2JycD943rv23E3hcpyCb",
  "key37": "2JyGj9pmSKHRBq8zZ7mUwdJD6JWdq6PFdfJpePzUptwPa9JbojnxMXed6WdQSgUzKu3C5dQzZRrRnSNr2zbYheA3"
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
