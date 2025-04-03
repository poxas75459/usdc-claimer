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
    "34nU3EoWDqQ4HhVwTRCzbZTQmVs3KJoS1MwuAmi68p6yaXQLaSjWzp66jZU4qfevAJfpkwfDRro5fDQdTMPf4Nmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MrMCSFxi8YvXku7TWuG5SRnMyHyZHqK9yUBk5bJJPcbaReQGywjGxu9Bhu2SJUsL7puu2VsQ8LPNFLPPHXk7igh",
  "key1": "Gh1Li6Z1Vx9jiD8MBe8hLLiiumutvbCmnmxgjCCKQKr7WXS423RFc6wFa6jbjhFgC7VMzAaW96CQsFN3K1KWv4o",
  "key2": "3Hk5dMAhS9EMKAhGUeA4eKLSPQeM5HUFvTVqNR7WPPSZfgvgc5EHtSDHCbbAHTdCtrB33PE2divrQoc3tqqrmged",
  "key3": "3mYhasLJ3AZB58skHqxvSiLiLt2WUWiuuUL8ih7Gk9d9KMwTUj7dwhunLBULVEb6v6gJTs9jcSPLHB2XfH8LJp9p",
  "key4": "578dHzLNzsggWjRgEPB4KE3bMDFLifAyyfXCLovNSvcSvQMQ5cmi1CWjVtSer8pPPQjDEWRRT8Np3NZQUt2iXK7y",
  "key5": "3s3rKt4faeXXvMKWkhwCnULAKwsq4cunB8kFmxmH5BoQVRY2uaNNxn5uggphqoKYXEXyM1qZ8pxNp99WreQoGJig",
  "key6": "4MG2tu6UsQ6C5yRGQ4FcKZGT5Wn3VDAdzQFXePDMaWMqjZ7adiJmebAYHPQuaNZUBRzXFumFNtpRo3huK4AXNCjk",
  "key7": "5jVirrpXtzCX8XzjYCJJXM9dNYfkRZu3ahcX86a72bDEzBkrQJpKHwAqrefjGhyK8SZbvaNb6hBy5Sj3y43NFUtj",
  "key8": "yPBStd1rt6EbbGaJ7C8SzadNsawhUu3FMia1WNJJW1neip3ipzDwCHV66wsRo2uWgxGaHzih3Df8DeFJsqGBpiQ",
  "key9": "4fDbR9dZ5pNAy4CcqGH1yCiCnXJ5vN7i1pFZhrU9JEVQYziYMJhRuCkrp3NwLCHN6PQncW7wSwPJZdTBjKrLXx8n",
  "key10": "CgsBU882Z1M8SEjNiSFtLGtGRoVWhMYoLWDWrJzo3vhkApGNAT35WT8TwSjKnwumpMVcMzxi7vpt1teg9hzanWv",
  "key11": "2ikkAHzQVcBtYF2MYweou2vUtC6zmEzVRBSscNqwuHAD1SSPpfHaLTa1VZrJKmhbLLr9VXyN41bUMs5U71PJt3dB",
  "key12": "4ZcvYwdQudY4hXVuyPpnkSg8o1jpJmpnKuFjBdmacs7wvARBkkicFHoRA3RzTYKA1M2rEcqCy1GyHh3bFwbzhpTN",
  "key13": "5bzwc7NXKtekBV5MB2uX5yNdbVjEHc865cQqzNmSVEuwEScEuWoreyC7VPH8u4GwikYgxr31a1BUw45q8zb2dYsu",
  "key14": "NZCsbgT4mYEAymiEYpBAiidAjvnmpsnN6ATRECg8RHEX3wvQ4WeHevEbCyfaDPf1g7d6oeoocQD3pahcHRh8dcY",
  "key15": "irEuWPdhZc5AKJxXHLxNoMiUCNdQZ2cPWjmmTdjA5B3UcroQzjovLU83jFEkCgPmAiZ9YfsRK2da6YHAj9MVGT5",
  "key16": "pFyjH7H8DoWyVCfErJweuqodKMHWqTXpx2DiJ917ZGccAFFiwAwmunNeLLZHEytG85f6q1GjjGFHn98Ant52Jvw",
  "key17": "3hybQwjCUAkAra1Jd84pPzJyqupgDhnj1DfKvVTHoRrNsink8GHoeoaQBMdj6fwkk1rN7BnkKDcmceRPu2x8Saxz",
  "key18": "62XFATYCe7j8YV7zh4vCsURNef2jsWUDY9dDMifBw2aspNCqbz5reGEmZMSqdqKjLBC8dJPe83n6LWwo6kaEUFaN",
  "key19": "2aTGh1d388E5nzuWdC4iwPwYwnyi1t1cDd9AK3EqZ8SQzWDej82rEfRcme56WFY3GG93SPUjVeDiaYy2DBSd57Qr",
  "key20": "3CnqhgJjBPnRLqrrpNMYR8NJSgcr1nJ14aFiD51zJ4cdxe4RoNGxP7RWgZmSWtNRQfrBX4BvPu4hzvp9sfrXMP19",
  "key21": "5PpooqNANkyWcZP7nqDNGHXKi3govLwA25UZX1gCk8afMCsHZ1ASWTQh4cj6uaqPnTjuwWJFuHDqmzY11qMTtER9",
  "key22": "3rEeJmDgXW1ANZ46wZ8WSP2p1WwVYYmS9caMbts5vYGubL331PGYu2usnuDnMH5mrFsHTZX16sT9kNC4U3FubhZY",
  "key23": "3u3mssGw7VNkkyvGxtqLBJ4F2KF1JxigsGnpQ4QzhdR491bBdzrjz28bBXQ3WCebkVKz8M2uKoLWB5YZaHfqToL",
  "key24": "4mqJAfRhwC6e86EiWQiDYTGoTbmxBh3ALBSP7f1odKdD5c69b7dWq39TYatGjKeZUvtR88awcRLhbj3UVg77xzQh",
  "key25": "5thiEex4NQs6ThdQ2Jm8N6NFf8pPadZ6kMBDf2PEV59SqYVq7pn7pgqXSDSfgi6RUpGGTyk5AywypZq2uCu4uwJv",
  "key26": "5VkWfw8oBc5S3GURNQYyZ3gkh7sisAjCkQ9ntZW2aGhnyBiq5uWQUccmm3KEo6HLjEgoF7p8HbpquXubMFQC9mcU",
  "key27": "mDE9f3fvnYJfNv1MuprmTRWbcnAE4jWiAHjDKDU5Lk9aKoqniaLDX3bKbspC1twMJgSX4e3VUEHcfnSYEn8mwue",
  "key28": "2x51Jxs7WtNRVGNuZqxHxwW5w3UE1C9vJaAr6uVGQKGa4NBhVJEeZEWWFRHR6m3CgTg76u1RZJgNkPPDq9JM1YWB",
  "key29": "2zhdfncmeiiyKjoV9RxNqotkErW8zrmQwYjFiG4MrTndA85UcAJVZAPvnXLhjXLvowKSmgnQbT9JacZV84MGzpYT",
  "key30": "5VGt1eW9szWyMVSaC7J6MNVdiVDqwpeU2QuYrWFWFgb9HaATpaELoagt9EHbNxt6ArvpSST6GFWzQNVhWNJHC9Du",
  "key31": "49UBthQQHE4Y1nvKDvqWPFb1EwK16r6uGb68MeYwhvAPtAJ7YCwjsaLZajt3Z5pFF4VbPbNU5hnQF1xLcJ2UCnhj",
  "key32": "2fQhG8bmFVb3RMmcPLrozuTistB32YYqFCcpyjruNTeYYDETaWNBv8iFfbmWPTKxaHb7iep6AhwW4mMxjrYiXHwG",
  "key33": "5Mo3TrgYbjjKFzzR2h3MpSxV1jDqJWuABVWaBcvJdqN2Awhv9Fws7hp4jQS6eRCo7TVQMedmuSupM7X8JeK1L99t"
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
