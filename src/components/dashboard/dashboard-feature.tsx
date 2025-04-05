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
    "4XXjBxdPvv8AXGzHcEN4CGUjXWVMYeKa1H5kSKGBphnJ89dKf1syRv7RWTr54d6ZcWmD2JqLcMXpHNP8HuFYEkkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y72MHK4M6icNmsaxn5e6nttxKXcka4ZoW2JdECvFTUUdgwT5LJtVMXCsUq3avvb7cy5wdaQF2r291yHvCJDEkmB",
  "key1": "4pAvvcJ1Nq7LB5fPBuEkp4EtKi2yaN4vwV14VzezUCqqxEjV5HKYkBrvmy8BASxiRLuvKYqVWSdWmYz5vhGVBKoV",
  "key2": "2QhzLe8D9puqyEF3VkHApE5f5x3X7Ua81r72WpEzfS1cxNsm85fuNV4iYHz5i9jsY3XurUgjqWuoUQYAiuB6Xi42",
  "key3": "4fzucS2oFFyqLhHpSaFnx1ohRGg7PsN1rzGjTDx6ZRBYv46rLzVCiPXo117JFWejr6ek4jxGW7jwvTNJkP7VHQYb",
  "key4": "5b7divjZ3DdGJH918bX2bUiBjYQT3335vwntpKdBUy9p7z96tJpbiSMJWygbsMqYgC4bX1JcCQ8Fj45k8gctKnXR",
  "key5": "2btSE9MqqADMSvsneNjQWh3v7DBanz8YTYW8VdSFLPdhqjLddppnbGzeSfWDuonEtimhijYJuUtqtwF44YrSMrxC",
  "key6": "3nnSM5pB1gYkZi2SjD2oSexkbqKvZ4qk79sBjN2o3yE5G8LWhAe4kTBvXVRREZz2UTL1Pnh7naB8jgUiXJkPtpxR",
  "key7": "22D57Trpskq6rRwQEUzz2B4k3LbgoLZs9dcVrhz6JGGpqpWhycmYGv5esQkspDvCjXTuMWAedH2WyihKLtJjfzEv",
  "key8": "Ay9Ku4VVrvx8zEGhCMocxXrqPmstKAxH22nx4tymrCNhzifQTtiWKUztKKxzJZGv5k8PEn7tro1FrLax5RwDv9n",
  "key9": "2NfYim5jdF5KdEoAzQ154S1CRvDFYwWofZ6m9Ffp9e8hXfjoXiJRZiEx6oVWXRBTYNvPYbomYv5Pzaw7JABbPa8",
  "key10": "2iDUKscEDZgG7yEfTbDzZhWEjZgu11J6nibUweZHbxXrmsghouPoapkqgBbSXoh7q8SzfTxLaNHUuQiZ4A6fSRw",
  "key11": "MG6hmfmRyrtuW4EFm2nLmjKcWEaojTnjaEVkmqgFkejUUNJyzs6TVXBoTpv5DpxRLG9FJUUwgJUwTRGWm4WnhH8",
  "key12": "5udMJfjYm3NmWBjuzXbAdMoZiKS43i6DmZzsAYxVMm1f9EXqFWquLDCe5BwjorQ7AMk39EqLHw7JAZbGJayEfCDn",
  "key13": "2moV6k9HqTe5TLDoVcrAo3cfEXy7mpvFh6pSt2qS8pWXdFrTHWtrg7eD5JvVmaWZ5WUWTz5h9HXRVV5dqC12DDfH",
  "key14": "4WDJ2svNH6K7WGZrouKDzCNk1zM34bETLJL8Fwi43K4bWqmsrmdN82BJWhZPPsD6SPypR3pBvsPoosWqSYNQ7yLe",
  "key15": "FJgyZThxjSY57GNJvoTQSrxTME4icNdowhaJwiBnA3jiW78jmu1NRycXyuDmM4LGSepds35dRYH9aUAUK75pX8B",
  "key16": "3EJsyjhRKsZNXKPpamsEQiPFKjwQXhoN1NSdSsrD7TgVYkk7MVBAMojMrtdBrG8Jrv3CXsf3jh1ZZumCfg82eT26",
  "key17": "ssompeNMm2zuGsrtZEN3oufbs5M8Lhia42B7FuoXGg4Q3kXPVx7UGTG8otoX2VKLQhiV171UXQH977BH49y82hM",
  "key18": "2Hpyi6k7aXW34h773Ze9wKAvykmFysr99fGnqu8AZ3swP1RgGBBRhi2VLAAxDBowy9nUV5Shoxdm6bNoNgDYWmkP",
  "key19": "3hFTwobbPQotVNWqKEq4VfoSWYTWFn3B7btq4WvLzoYjaGFfNAbzERNJcSFnLT5c3HxySzypf2wtUrbSS1Qz4tAG",
  "key20": "4s8SRXy8k9tqSWSGbbMHSFjgLnRhh86j42HNTn91TFdwb6AaWL2hM1hnHG8cytVj7a3dF4YGByzZ9YD9itGDciDy",
  "key21": "3LkLoFZhNuDer1w6XzQS2Sx1FXGuAKTCy9UNggzVgMYzZABp463MUrd9fyXhVKqhRUJVaTHmME6pwUJMCaNRDdCd",
  "key22": "5W6y7c98uAZ72QmrmgX7eA76YygSBZCTm5GkWKVDcYwnEF24ij7vix3aRSU3q9vWFg2tqFJTbvAetzT5d39LTAQ5",
  "key23": "5PJJcfkdgJ2R8X83CQS7rF9ZGdTqyiAbQXpJLyUo7sKGXsJYxmVRBzdk5tdNUiF6jmzX3VAew1WX1QjpgCGSUqgo",
  "key24": "VHQJtHW6T1r9G4n9tsPx6AFQY2CTxGnvTEg9J7W568ej4YeTKHDVXAuNV8etun7UNhKX5YXQ38Un44GLckGveUf",
  "key25": "2nANyFiVZgBvNE7f1oqhYrVjVPako6KitJV8ouBnqMtyEJp6zWz7mZ2DTApkBJ5PyL8wCRwZMFbSXVKtgH9AQVKR",
  "key26": "33GeZJVWKqi1ZLnxYyXS4UzaRJvX1JeWo5Qqj3SdytaUfDu2WmjtbWzW2DET3haJLNM9kU8ZcAtWf1YAJJwqnf8y",
  "key27": "5QuXPV2itBQVVYX3Hbhd6Uz9rpoxnoMgWjzeq9GPZyJxRtmQCyYEVavcz1AEeDWAVMeVvFhBxseMWaLg4X2sbRPY",
  "key28": "5Ed1ApbaPSnyRLUgMpAmGUxHvhHtRzo5BXs4Bwu9RaqWmmUbED6sV4ZT4JXqfaZDfdBiqhPDsPY5K8rEE8qVgkjW",
  "key29": "2ch6RuUSkAivJFFG7dvxymRdDiwtPPSHjBwn2ZExyL6XhPdKnXLpSERmVAz1QMhyuCTxMVUefmB2eVS4i3pBf8se",
  "key30": "AhxrRNssza3pvSe7Cb98eFvKE6ptawVz7ms9VSC5xbsc5nGyvG6ChGiKcHTBby5BhznTU3faPed334bNMYbyW5p",
  "key31": "4mRKj44nRsW8ncNrPKS8mrRs45cMHfewcAmrbKHhF9HY7ihPX3ub2dpg2tePzioVxhcJqYzwwX967ggEGUM5su7c",
  "key32": "5hCuBB4ofTz7R45aG7JxmoSkLYokv1rswsU1rhE9NXc5r28564Un5hg4EDpWisgMokk7CxnqtipgFr3gcW4HHmCB",
  "key33": "4bL7Npytvz6vvKRmyTuDjKp7e1CicUNfHvWi6LcrT9fhmqXYuLEtz2aqXEB9xUmW2eLb5WMWdgCBWJvRzMRWPXry",
  "key34": "4e48fEuC2RgdqzKWQWTsGSexN8tFn78r4xkRAvHdUN5HgxW7GU5YH1QjyH68VYKChsYN9YJwhZZaqaTeFHxcqzw6",
  "key35": "yf23Mzoq8neNvMicopxb8Lifba6PCefSJcUhWJkUuGm8752s49Uw4LLTK6yHaRteoukayeTiQ75ZgwNJd9t83bc",
  "key36": "4NWBSxKMi2QBmuCZApXEjSejMrH5jHautu2Wx83xnJ2os1iVH9jKKbvJVzMKUAnpP54F4K7WzoeNQ3E3FCuQxR7M",
  "key37": "5FHKKQKRfhAdRmRNn4jS7RNTpFPzygC9VmuMB28NrtkFbXsfCy3ZTyeDWxs7CsCAZvqwcmmD656xVhzJLJAhMXuE",
  "key38": "5vSFyAmz1uEBzoPKwqvQy1T526dSdcuPoaJNYCKhPQ9CpkinxbDtiDKuiQ8QLVFDtuCCm4Z8n7XV1S2WkjZgcrCB"
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
