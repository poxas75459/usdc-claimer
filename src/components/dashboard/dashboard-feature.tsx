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
    "5Em2EPgDcBMc5Ab8My2FDMmz4t9jD3trrMXmRVuFfGVSPKcahk6MvtuMp5QqDZDkcs14tkKPxg4BvPZuSJmGUxZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMo6QwSBkpcdVTxcxnGjaZJsGz8L2fvZNmfy52EMBRNWACmdZ9LdXvNsqDDXDGJVpaCZye51gRtEsppGJqmoBP7",
  "key1": "4iYW4LpZUz77C4mVY6955WjJF111PE6fhuuHBZRmBmYmZZ5CTMzDX6gFCsCavnYVnwozw2E3wsntJVdnLKSDGP1u",
  "key2": "3GDhhcVc8LSVfTgQuFrWDbvwm88omwggia9MdN1gSyJJvRjda84AvPrMmH2Hk4hzJGqM1khWNGcKgRniURyhL8Y9",
  "key3": "48kT7mGRC8sEa4rTrzVqBiQdapAbVZsMduCjr17aTHpc9JgLwJUooDx2TMmJy9XyNpPJYBtfw2jM74nCQDNVzxVV",
  "key4": "3DyopHR8HTSgHjNiBFbuM8eBPRXLEPbKZXHzrNTCNGkUsg3DfeEMUq5gBSpYFUrbEmPNkUqbn5zAAW8oqsW8BUU7",
  "key5": "5rD3eVhNanVNaBTh8hisbYh8JrRCpczWhJyjP3WvEJVQZGH9qw7SziF7gGBZL1FTenprNY7nHEQxsiKkAtXzyHps",
  "key6": "59LBcZHdfU1BfXVu5PAAnJmgRbtjyecKy2KNAm9Ec8jXfjTad8RLJFNecpeNhsayGamwtEiGaA2oZoR9eTUyogLJ",
  "key7": "2Uw8rtSdHHekLW8S6i8orme2nQRd1CUpFyEstr9sx2GW99hrUcLk2sHQc1jgkHsAgiCwweu9KGUHRxH77dh74HZ1",
  "key8": "5xkTdL1HBBrmxqKYUgahk4b5jrt4AxdHbbwTGa4rznMC15SB8ZqipC6bMd2uZ4T9RvykGPgKTaxHUfBBxh9YVsBy",
  "key9": "4NmV278mXxNcY9MRFQAavKyHJiAwTwRU6M2F6bnVECPJD7yfs2jpURjvFZUg9idfDSUXHWkuqkWXEFrGwvqSbKHr",
  "key10": "KJrArUf2G4UfpzbZMFA4ysSosgrgZRrU8CtsE8p4ikZGMuVbeTbGJCk4ADRmqHvqQPPnv76dgu5Hc5qGW9Mx8De",
  "key11": "4U46jQkDwYkuHezD3pqeV1rj8vpzPrFmYfZv5HdmVLTFJpATAqWm9zR7Sg3iLxjiYsas8G38Ep2EC6jYY62kjW6b",
  "key12": "sqBorwiV16GEmeZR2jBXWbFh26Hi1zKtAJYtKAR2U3NQePoGYdsvzpfsoX1WY9EBc9WK3Y4rqwR2JfdeCncNQz1",
  "key13": "djzHkbn9RC3hcdGH9GJnaeYx6tc2pTtzgdcWtac1o476NfftG5TSp4nkVG5nU9whXPvmqj5gDamwBrnMEFNmE4Y",
  "key14": "3ysRd9FQ4wErRvw7PPRAMR1c2fjS23QYno44M4noykVQTNruTg6par8iTe9ipW8BPJQhb5okY23ud6wMXptjRSoQ",
  "key15": "w1MgaWSNg9YTbzwKSs42H8p1H4Fq8Zdpe1oWL6tUuuEao2eUFdh1b7yxAoZjXZHoGuc2ae4QxS9VCqqDfFd45NY",
  "key16": "X83ExXVc4RCJcccWtNNrN15XytfGq4X9Sti3QRQDAztEcaytHLg7nnu3F6nfqLE7ZHYadqL5keHF24m3ge3PDxU",
  "key17": "3coxLuxg2v1ugVWPGDKnk7oxznVVEoKEZ2CFoBsa91WvNpFqqYX7fJpi87AhsBZJX5zvHgdQdGPLLqc9nbyR7LfV",
  "key18": "3Vf2NNT1rZ6Acnf8wwBr6oNZeVmusRkfQB9JPYRArmELpfn3QRfWFRfRkpNQE676tqUutEd5LVKy9rsv2JkG5U7q",
  "key19": "55fgd75kMxpzcMtwVuhzoWuHpVNnajdEQ6sLJVDPFeh3YVRpqYMn7QwkmuCuvdmqnzwTdVXLFqoL4H66TB3NAGzZ",
  "key20": "qzAzy2b1wQuwN56ugnGEoPEnABFRZqX6TxTovGWHW2e8wcWAyXyXxG5zh2Zm3ZirCNYpzMfYnEkqycGik3qVvgb",
  "key21": "4495P5exdL24VzPtaJ363CfiW8ufxQbH1Xa9rvmn6vfR4FVJVSCea81eA7HzozJ13sndmu4cB1G2YLPY7XHf3Vkj",
  "key22": "nAmSxEDxPZ4szyqNjPx8zepWkqBm7vxgPAnmahoJxEPadaX1aePRgiPxGRrVQd36p9BNdbsejdKn3UCsWzaGaJ9",
  "key23": "2Db2wb3gTReSx9mtySumyZchUrbkCxSd5eEHZEqkFTFjD5yA4wZmZ3UnL4a3twP4CtV4YCJZ9hsDpgUzUJqyD5sW",
  "key24": "Ri3wT4NEouwM9fJR1DQsDUBqq18GTDgsFeVGWUDfCxGQL35apvQQQBgGbRttVySiV1YkXQcLuzFvoqmMWRAdd3h",
  "key25": "2k4QQJ3W2Q33F8sk9vqHA5iLHDhLVAALXPB29cX8pWpmjGYXyQCs6EJC3PHnZrjkcpnhCP5X98r5ugjkz9EeYyLc",
  "key26": "36ocCTw9geX5GxP1T7N8tZv8jrKoNwy2NcksXH5nSjMqwS2LkaY2y9S9F1W6ZXFNdQvHJ4VXKpm5eaRuAr61W8Ny",
  "key27": "4deHtbAEHGnfsuTLfnVC3PnLaD6sWPoF1E9NQC5PNLo3JQnEkTkjjHV7tw7TMk97odcSjCDh14XyyQZaLVt7Fye3",
  "key28": "28fEJHGz6wK7eSLS9YZCwk6exou9U1TzNbNeJ89WxFkE6PxoZH7GadXrs4gSgAs2bA3rtmKjq3mZpSgRzaRn9nqG",
  "key29": "3BrzafMnYr5kGz9cYr8Ua4Tfpun2JGwzKu1emtCczDbNnsX9ZrnXQJ4BHL7Ra9FLdVTf6TYyHG9VnHNMr6LnPmhJ",
  "key30": "4CvkLvj1q1jGzsVAKHG6iqSRbTTftdxvyHqbffu7YDk4kkyUBY6KPXiEhukyhrUFBuvmoLqD5FT99519id9wAdvE",
  "key31": "LYGAPCofsLrG8KyveM7ALh1uWGW2KENBqm97GPMtm6EBX9ojbmtUTgi2oko4pcEySGFWFv5NAv4oG8U9xT6HjfD",
  "key32": "2hxx7U4aWFizMmcgXRuRJSQ7NxgfP6dwGqcSywNw4tf4JipdXGHppnrWroKx95HokaceW224VZJZKjbUWAMhD1vv",
  "key33": "3ppW3wgCJsezF9TaH3JTMv3sQFizkAynGjNTWVdExKJVQit2JoULUPk8E5Rfo2LEPWfk8eoGBEr8nrxewkXSgXw",
  "key34": "cFrjP67o156YBWehp46UH9EMqm85PzQM2NzzGj2Wdbh6EcHYXPeNf3KF5GTjzDNpBjSqtp7Lj1DJdZ8nbtfrm8o",
  "key35": "3r3ce1QyaCccpsYWA3VSLTNoJSiAbvASensH8MiFJrXKJZSesuV26E1KTiEbH4yckJrFeYLjbdbLVuJ7BSdbpgSa",
  "key36": "5v8XuiwBJdXdAygZuCbWkm5c4rCEGyRiBEhPPm5r42fdoWP9yeLLChBeN9vNXUXBXJd448mPMrF2P8r91eLCSmC7",
  "key37": "65fVVPSStSXqyMXKD8B19oPVNR3ivuNSbS3jGVLj8fEHJa7bBa5RBgEioL11D4XNWLPqrXHTBpL428gabNifdcmR"
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
