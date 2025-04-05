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
    "debTpuAtuaQnx53igAw6dsrBCfKNMoh82ZzJCub7TefEUzaJCMsUBvTdgu5cxARuDMmfMgaZV2h2U7vLVaoqqNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syMwyQoo9wdDuiYrkYbwETeD5DWVTSctf6sHrU9ScrSCuyFgS2Pxam5AwfJ3jsebkcnDjaRJeshVs7tbqV4NJBx",
  "key1": "4z6Vy8VV7dYjoD39TH9gM6FM37vpnMc84pXZiwMSgFQ7tSQYcov55Do62Hx5vXxbGopXGGjf8yn8fq7tXy2dCj25",
  "key2": "2HW3ebUUEwURWMcNiZKviQpcY4bw9XitYNekxXtBbPSyXQ5oy5MCecdFX6CG8ShwpNZEtMAHgXxumawSREN2i3zG",
  "key3": "DC5pggPG2vuWhgVieVNt1UgcV2gvpSdxUbwi9WTsUtiRzj2MQmyXH47azBTuLMW2ndFNrQ4fRKexqQj4QQ9d75b",
  "key4": "3T4t6UKXmCw1s9sJs1nbYpLeFbyM1pYHoDR6z4nvTUNwoa6dMvcPLgJGEMKrYY8ArRVLv6a1rCnVcwKeCKJxzaCp",
  "key5": "2TV8G8fQi8Dobun17D7fWRUwZGHe25ya9Cxeca39GLA2hZ7iVEf6avyCUvvvg9zGPNCwF6Zz24sT3qTEtbfs59XG",
  "key6": "2J6ed8p9nk2Ucz7CBoeEMTtWwU6RygJTRhRGnWY7LFyd7j7tiowJdjdG1S4uw2VJC4BSrjm6cxUaXRfGR2yYQt1t",
  "key7": "5pv4j23fcZZYRU3rfKcQewcp5vJ6mivuVUbw5ass9J43zY5wYCTtw2KLtgLzobuhL8NS4EbVRxEXB7GuaPY35Ax6",
  "key8": "34LKYpuk8zTNKsGiGG253XytjrYLA1Q5BAt3vxqYNWwpcrChqharPEGgGTvRa9AWzfBXajJay6SxubV7pKbsmLGk",
  "key9": "38omzWz5WfLastqjuzwV4wy5MB9bXcZYXnr76zbQNbnudUaRLYXtezKwExgyoT3N764CXX114TiEYJ674GdBqrt6",
  "key10": "3zPaCd4EStBn6PZJayVMjeLNiZnPCB4MoD8RGGY6hb4PVPQzzebsd16XFR6V2SmrLa3vRWgD9JM7PU3oD1e5BLpQ",
  "key11": "3iU8Wa9s7DBesELJeiQR1XQSahL5YKkM52V2kgnQXvBBFq1FiiEgVLXxA71r76oouiB2Tq3zgNcY2XPQdHhp5pQi",
  "key12": "4sxPhPh7rN8bTWUmqSULHXZ19i79Nu9QtA5XZqNRCiRkMrDjZxnWwA82ztDSUDYxwPJzzw8u2eAZ8TEDgpe4SDxo",
  "key13": "3ZwYmGvSYhPgCPbo3aQY41tgYLnJvgt4JdmkeJy4xpmNSXXViwA38fuYvtrEYtg5ccgbtdRrS64ng6cQm5kDYKCH",
  "key14": "kJnrym7Tgvkp4yDDz2FaAvwAKhfB9bHr9qGik3TARWJyewSnpmduZsfUqEQsca3sWJZZVdG7CWPwD66iHT3JXdT",
  "key15": "UiFgjsYUZVpTD7X1nKY9B9dZ4snH8owWsaLSBCPgaQPBCqTGS66cfqKfUCFWFVrwXjbSJRgrC3AvdQf5m5464fY",
  "key16": "39fR5Pster1LvhK28BmncuDgeMmD3j29Zp9i2q6Fn9BnrtRjyJ7joeM1TrPQwY7pF4CjqzqXhGAMU8gvctCvtwgQ",
  "key17": "39A25hngufPKksb4CBwxurYukNioAQA1FwhdKWdGXJE94m3rupjYRxoZSawa2eQjN6HE7dnWfHkDRTFevqLeW6fW",
  "key18": "2NbwBqxAMnDpq4Sw83HQoiergJuLJTm9zy7su7wmYC3EQnBbbTFkyPugqed1GsdPPYQE4t9e5q2RYYsCRErmiF2D",
  "key19": "deBx2HDMc3qqCF55KL8eFywYEEvC3zgxDaPyVeHUHJfZb5UxeAs4onJKRhaRkEH6pKuszgFh3Ju7yJhHdLkZ9tL",
  "key20": "5tkMcfHj1EkBdXqbpAYJiDeXA7NDrsttL5edQDxGovQs6yZdhA1SVV239XEWiyfhanA3XcK8QGdSesGtWKr42z6m",
  "key21": "2wUd3x15EHeCk9FuUHs5q4wQUsAHTqLaRLcyusfXMtRQh9tGjwzhhamYVizZbeUWKSk62FkR2btg1UTjoHYnZSGT",
  "key22": "676BHo81cNEXzcKr67QZ6LU5jDFu6dw7TDbPeNHZknfGpZzc2NP5e8DFGy2U2YZdvtypVECKpE5hneviS2fns64f",
  "key23": "28yb9Q8QTMwZVAxv9nkCKGQAimXyRrrYnjWx4QoJc3QPyH3sLYiFTrTXa83ZMpUDVt7avz7StemHUk6fPRUUcxbw",
  "key24": "33yh8Kz22cAaZYRmSNeiSnxZrZw3Vz8V99Dv6YmhrKJMdeXspGPNEaMqELQ34qoVgAVrJKwWMsHZfW9ommWqcwT7",
  "key25": "2wqvCXTkYfqMkx7K8oZEQtWE1fDM992FEdadSvgSbeEYxmKSYG7pEQm8WtWsSv8G8dtjrktU3QAgHhiCufNYCjMu",
  "key26": "4ZJQV1mvznjMGyX4LjRxjpkrsTLUGJA3vkXhmpzNy6tEAg4qjHotdgweZUvTnbjaBEdZpMLfD4x5Q6BVDRrGFAB3",
  "key27": "64iR3NfFEUBqzbfyBTUzULg1TEp4pQSc5QqqZStJkqrcpXpfwRQbU3JNFcLBWtPmfNQKgzLTXYsQkQvn6ZLRCyxu",
  "key28": "3s8BwEMAzqR5X3r5o7cemHQREBCFPecwAecxqcte2uU3LMoeWoA361iHH4cFuENkoQzxsJXhToPbh2BCwmB5zVB1",
  "key29": "5d2FUAeBsqVLhB4EohZe176x6SVvvSYFCCiFDSYGkG8z1ZXbctKiriFzutQjQYm8bKdbDTpddAMnY3UJAWHgU9GD",
  "key30": "2yyVjMpJVrmKtsZ1yf8M6XGXRMAcjrEykWiqzZtvZ6jwUCZ8hfyaNgXZTcTKz85vgVh6uxGVdup5kh8KLk8xHke4",
  "key31": "5u4YoCAVVbmtXodfiw3VDDopSVCc3DoeRt4kjBBUKajom7aEV7KQqzqujbGbYZFntdoquQKB9CyiKrmK5xcwfHvC"
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
