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
    "46VeFXbEtSQEbqmPKmApZVkzPYNk1UNjC3LBUW3YYAX3uBUHE4pYJanZmFPcEaMW2kwM5UyJ8d6e8qqHHRytkAor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H9jFzfvgpLnZnqURWgZw1uRHF4D6Ee4c7d7x1R1hdM3ojUubWZJ5UHQaJ9fCSgGYpG7PedW6f4qw4DPKNXtUo6E",
  "key1": "3Mbd8nQxoq3vGcJbqkiVjGEfzzFC8yFSbnyW4z7oJPiLyRY2kMbkfpEbx7pxmnqRZGMDf2sL3h4r4gL3D1Fy2YRZ",
  "key2": "55mHCRRpTfsnLykvq3zpzUECz85zP6JH7P9MeK3kQrzhXnTmTwtfGWvBF9HKerJSHHNX62CiqvDGTZc7u1V31tti",
  "key3": "317xrx9veqv1sJkNc835Fetc9urrk5SbKGgTHPCkjs1mtLRANLydxWVFbUGxDNkii3fRBe1mMxMCv4HyMEnh4eAF",
  "key4": "3DU1TBuRuVKEtQAUD5dNTv9pj8weUnCP5JRsxEiPhgSnbmr2zTEra1aEVdttFtK1rtfHZfdkAKUBWaJXuYh5dnfN",
  "key5": "LdDiuPJ64uHqUBVj8Jdpdv6M6aCqyqpQSiLeNgWXzxJ64ejXjYt4nDjS2kbjEBXQ2cbr1K46H56gfyGw6voWkVX",
  "key6": "wFPGf5YZjUr7eVF4mYaa3DCiqaDXXsoGb8hikZkjijoU2HDAFCa3JyeQrZjjSmVB9PM4k6oJsU45wYjqNs8QK5J",
  "key7": "m4vjGHJGhL9C7jzhng4KnLfC9FCDCLba39iGGzo4SaiU8moStQzVHeqgnGvXhjxrK7sTfiQGP9XdtNhvKn5n1Bt",
  "key8": "3EJ9cHDBydvWideVuuh54TCsjkrxwYf2JqhR1epqxRsfkqAUDQJtJEQiDSqCXBmkrneB1ePjcgEuTA3uC4Za34XP",
  "key9": "3HLpSiQd7Ej7ivLZSU31jFHQBsGmWRhyfCNkWXF3Vo6WWeSFPDFWBgDGJMNMvWju2LqUGquyhNLThpi7aQWACTsC",
  "key10": "2T4nM91rFx1K2Uj9vo6TZDeQrV34dB66FaJs4gisirHCaJxPnke7FTx1ddo6vU3e5kzuqjMP9xwKb5nN8tzr6aGC",
  "key11": "2ZytaMfFKeNgGX6e6tL3nu6FAT8m1n3RkysnCnwcimuen1HMfUi45LJBHVQ4yXfeow2KMiGWrNtnRCJXKfYD3iXU",
  "key12": "5Jx47hXPW6ExaBoz7yxpxcm1GYipxRrP2gRGhRJwxsNDVat37iRfGTSyWjmLY2xJQGrAP2DSKGUStjBJAR9smmYj",
  "key13": "3xFRt7hhutJT8Zn8qCmCbxsmkn49JtNxicJZgWA6YuWanE8NbRpMo2yY8vAr4FNfdA6TAZnQuRtXWTf1fqYJUqTo",
  "key14": "41kpe2ZdKyq5ryBbqvdos4cioVukuE8E5QsGxznXSyKKWjr19gku1Y7mtHHvwxwgwk3N1KmkSm7oGUNjPRbHza9p",
  "key15": "PwEkh1FDzCo8vSH83Y3WzQQuzbx7KdcR9xE46udjuhoLTdK9Yvrr3EfVXP2hLFuAoxhuvb24piLpdQiXgrsh8iE",
  "key16": "65Y35ju5YVh7T3ckHWZo3T96WVhaJwVB1N6S7aFmQj3oyqWK9zN9bNXLxM4yYcpY8sNde5ubQvfxjgdyTeQc9Hiq",
  "key17": "51ssBfAJLCERP8ne4MGhGwvFi1yc4Esm6ZLHrzryBQT6mvLecW3TY5HDHDRkva5FCMZ9TrztzDdTjzsZhKoejXoX",
  "key18": "35NT1RGzAK5vuT4YdTzJVUnf3fMciFU6A1eayZPDWTwBqWtynZMpNQsb8F7w97zEX9yPy6d81LzXoKVEBMNYYoq6",
  "key19": "4VtqFRvpkA3xnuBNGE4pQW6ZRD36zXP7YG97xGiNtfmhp8Kiv7j6AWUi2eensNYvKge42JBcbxkAgjYs52trc8QX",
  "key20": "4BS91U5rnomy89FZcum2SJACo1WjjZxsDeZiQm7XQ8Ee5eghg4A6QXysbrg3VzVtX5WVL2EvGxUscSq9eJBVSH2H",
  "key21": "CumnZdLtJ1fL4ihjqEPJ7Qxdekbugfyi1VtvverPDshe4vQpkXNGqpUZ1A6C9fg3vDD6k7F4cukfD55J4BnFBcC",
  "key22": "4SRzMJT8S9iwzgbKWTLMqmJvLqcNPtXQjJNkW2bSbVZHQXPvWq7vpp8gybZruELRBX3JkJgwTFhZG4rjg5itmp5c",
  "key23": "5VspBXpsXhSUsgbj3zNLF1TuJueLvVuKUTvnpC4urcagdPZAhRYJMnPCPcQDzfhgNzPVMWPhesmmLN5eLmkxa6Ag",
  "key24": "9hjdaouryNBMDhZt6AdVBY9B4bQ3SxNzRDzvYQLdsSJ793RsTTXPjTD6nPbtKfRepYrnFZhVxyYAtBCPEhzfKVZ",
  "key25": "2opRuVewP7vssncAN8owMKciN8zT1mVpvjPTLji8wAzc5mYtPvdCebfSuUvMsckXMYEPxgh2hX3QpwWzaHM5TV4G",
  "key26": "2y5McSdQE4er3ALMvoLSXESPA6aXcpBL9fT6TEMAfAsahEhaAwXuNU3f9juWZeJ1GEeAbHcF5nodJqLPKxazL7o6",
  "key27": "3EiaoZ4hGGstudaspMncpqycxhA3sxTWYkwtJoiRvuQhRGBJoKJv7xPV7DqtD6iXV6sRkwfYia5fgZdErPK6fPZs",
  "key28": "2uYU3C2KaGV114rN4AdmJBNKddFfQNsddSAooFLsFRxxg5DNdSJFvwETJf8LXnfDpXbmQVZMyrAewa3AD5BmLV52"
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
