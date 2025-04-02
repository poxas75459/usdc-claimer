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
    "S2Di73MYpaGGDg41rrzJyVrKZRiTV76KWoSzNfDnyxTSBKu9ShwksktDcLXxJefqmD5NjFPWDDTZTEaBgDK14Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nydAXJBbM6e6jCoVp8GGm3cjUhktzaWzrewUKFrLT5XbGPXHYUQ2pgDAfz3wzSmbUHJAQqGGs1EoEfAme5HBxt6",
  "key1": "chkJcF8i63MPMgzH9GQqjjyx71Jk1Z4Lyn7ffzWSUgcXKjxXMiVq9NrkNUiKDEHTBXZFBZK3fBtWjqo6HMgZezU",
  "key2": "582bhj79XBGpeBiWS4ePkycGmxXyn4aJDmVWmdFiW52SpCGXLGBc2ARt6gXhVLtVhAWEy4nL4wfkQz3n8hgdQeZQ",
  "key3": "2NzG7Yg3FN7S8ja6UP8iwW7XCuvBHXcMBuUdLVhyj5ye1sGH8EgoEouZfD5Bm5P9yWNUaHG2Q2SKHSVMNZKac4d2",
  "key4": "42PvpLDN8G7YQp2MVduW52hdhkNd5i3HKtwMEhfGCjwKEdJ24SLaaaohXmCbRdD2wp8noW15DppxdUsCCdR7he61",
  "key5": "64p5RSANy4kJseeFMvGWEzhngMH7KgDjAFxS3KQvC6UJAZuL3SaofPAyRFHCnuyT8Co7gWJLpj8GQtg8xvyKUqT5",
  "key6": "2aWkyNnvtMUkG9KzGs7MuKLR1SyfgquPP7mgbhAKzMkGVjyb7vZW2bJ72m4ZPRL1T7uPug3PLLPS4M15vgZe2Ec3",
  "key7": "3fxDBX3b6burRZiVVHjirapG43EzbZGEwDi1JRpbg7teX511Jz5iRPrwPcVPSSPHdZtP4qRQM2jbuBmmurMZhnDZ",
  "key8": "3Tg1Xf1wxrELPFoovMfV8teySFXt8QeN1a6dTcSpp8qFewh6y7d2ZmJBa2jyssytSVRPG4wiEAcarpQ8bdaas1vs",
  "key9": "5kockGQLFqBD5CvF3cCutp1mzqF51v9ZvBMkSPrw431dQfUYYdob3ZceBEBLQEDRXmo6HwsuDipnyTngEhbKvm5e",
  "key10": "3BzxetfXnWcnwwV9qBmCe716frco6egm5C7PtYjguEf116xQMS8h8UT7vyLyCx6knyy4XnGf7gb5fdAsmym1iEoT",
  "key11": "WY2Yys2scZ5AhB2MHspAwczQr93stmu9MYsZtJLRUb8QjsXdhZ1As4bneR6MUfxLfaH4duuuxNSbtr5ThfKQKD8",
  "key12": "RnPDFY3Hs8yD6mNP5ahHR4F3nQxpKfcYXZZzaiKtvWgWhB3YRbn8b9AGe9XrYBXNDrGdUcHjn5ARrLJNwYrSmFF",
  "key13": "41v795fPfRyweqwTKaYm7CCzzJpdryc5bLsnJsQLmDwbiW6itKvos22SrthaYpeVUm4PCm6g9BLVCMEWCu6Qeu1G",
  "key14": "2ZVRcQJspJz1hN6KMGEpvayQxUgxtWvtj9ThzF94JeXGCsU1vYCHhFLSXZYD1FQ6PfzYjV4xtC6E5z4M4VkWLWin",
  "key15": "jYxD8uBio7ssVNkB2dcbDyZUXBZsHLbMedR1co9CqKWkU8XUnbVt3cBckEjy4ULEoni6dJXKVXmddXsbspwMgMD",
  "key16": "4x6wRhZvRhMAbqBETC3RkqUrWr79wMEPD1NPqXiJVekDhNZQKwCq89uu6mEbb4aoJoVZ8DpNfjnzh5bP7JXPpV8T",
  "key17": "2a7YJq4pBsvGR4uFTiZTPBC576hFySFuHqephUzNggHwjcu7cChMx7xrapZeSr7qQtEUK7KDKKf1qZYigoZMAn1o",
  "key18": "5EBwyMqS5b8rcxv6m4Gpdv2RpywUTMDDgfT9jShvUjgzDEtiGLLVWnEtS5vh1xbMbv4bnUfPYDQpdyptP2JnEqhB",
  "key19": "D1A8WodmdL4T1hCEkQoY2j3DAM1TNBsWmWYCbh14SjZaYHycZg5NrZwCk46wURNog8hue6RyBaSjpmqQPnhHFB7",
  "key20": "2cLetWgGddnRp7fKsDjshMmCDEUeipEc7w6dpBJnaPrrc5zRuSbuz2d1bNmcEMTUvwNvAAiVaHzMkVXSpNmSjCK",
  "key21": "5wfJa6H5F9oJE4wErAWBLRLzv9yp85JnhbcCeUGTGmnPkx2CKXpKiMfRuQzRMAg5nbc8imR1JyxyDjeyWuc4QYvh",
  "key22": "uBTAJBSRBUH9373V1suEA2CgpSgZs6WnYPMry88gPsH76YBhzX6EfAnx3GQg2HCpcR9TZTae46vNY4pvpxbbxjG",
  "key23": "4AuaBmRgYm2gnLfwmrZ2WVDsjBMAc9wayxhEGwNAD7wWoS8nnP3nUGjEdNdJccyCVQ8UKENVJxPtYfRkxukEjzoH",
  "key24": "2riy6Lt68xVZvfzFy9TAGBn4n9NQp1gjcu4X5RrdousaEpHdaZeDrcgAabwqKFDX4bLoxYc5z224G8YKMLL4QQwM",
  "key25": "4at435vzvbnv3CrqG4d5CDeCY8sj1qBATcW9z7jhTtD5iQE1LfpNEA7c6qe4LAW6n4heiuoX5J4GrBz6rxmNXBDd",
  "key26": "66giCZnLnn5GDqbmeruwX5Dn93y26WZUPTdwQbWCxWXRAEKuHb4YYMHdC21LVymSHvZwsaeCHiCe3Z1ehGYYF72A",
  "key27": "4iD16rwVb4HdrE9RCCD5z7duP1a58iwedtQg1A6eWPSRrGjGWkeDvkiD4hcg4iTHmUWWaDJcqi42vmCyY6puAmk6",
  "key28": "5c23KcgFu6dkWJ24XomHRrij2kPYsPT79nHarsh6CzHGe7mME34d3VJscbf4czUKEp8TFB7nboqM4GPV1VeCmzLC",
  "key29": "2bUDahAu1aeB1VbddSnehaTRR4KnPJzHdRYdZ3PYPgJyA1mAKLn192NvjLYJfvv1krgSguBMDAizYtKTuGomsQVD",
  "key30": "2RsrpoAivo9CVSbA5pic5MUvNVymqvSNJumdm5qinHHpmezvfsLRwRWjXer63KGRojVtBSD51Mbfoj4ytXW2n6LK",
  "key31": "5qYbusxThVjMzALpXZwVNLSB7FGgejU7n4agWxQxCW3EqSbxUaba9WLiTiF6LKUgJjLoHikDL44Z5fA1siwJJDRn",
  "key32": "5HqrFSdLThuvPEpHDwYkiDVY55qEMbzC6ZABtczuX5wQ5c2xkAcowMGYGWY5ycGh6f4jkJjjL8Xx9sJovLzN2MFX",
  "key33": "pbBkjmpb5YCTYP4h7AAG43Hmw3zKcoKzaMqoHzAnt17sU91TP2YCqyZDfokJGf6oz2Darsu9VMnp7wAAfUzZzqU",
  "key34": "4ND93PsmoBNeqEMpbVzHgiXVxcrs5XXtcB5eeVrQPH1PM9n24pSZbxZignn4meWSMVUNPLqBDqtThaYbbvSBvzHs",
  "key35": "2iRFB4XSGxboJwWZLwi42YnDCyJKCVMWdrWsixajwe5fhtKxNYrPhTdQwd8dWJwiApgoTuq5mCQMxWURjvpcHk2s",
  "key36": "5V5w12Z4p6eGkVzg1jMYjWFEyjq7NjMqvQVBK3PA5DTrzdnZKnh91UkuME6Gy64jFvJHwC81soVfUwTimooNLvE8",
  "key37": "4kc2DHVWtswPWGTWP8Da9JpAL3jSpRZSvfp61NXNoWfDxviJSZtU1jsyRMbVcV5SoK7REkLDa5NQzjouHKzGxmSu",
  "key38": "rg1tmoQf7hijVyPMZTebVxhhvFvGEqJ6oz1nKd4fybXdqgnSt3szVsMMBAEdEFaa3C7gD9b1Fh3hoGpBoqaTxyz"
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
