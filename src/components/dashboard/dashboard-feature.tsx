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
    "37rHBfgLJW41Kx51ovgL5cnaUX1XKmdqceA2U66UwHKqgYpjHkZHg98HC8Pix1WtbJBxksQQFdL4Lz9v2QBhp2gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BEvhgAppaMRzp4wnWQa61unf31bsd7XuaPhuVn7ijFLV38vTxsTyXEMgRXCRateq4nn8eGy8ZnRr4c3wvjFkm1J",
  "key1": "37eJeb1bQRs2nEkMSh8Qrw4q3ZZS6aeKEe8Jr6jXc4awemZJ65bmzvdLz8bWqH1PwYJkbji1xtL5fpSD4mZDnayq",
  "key2": "57amtvgbi9qqGN3JZBX27SUd4cCaLa7qg1psqoQRiK5vpPSPRVza22a1xNNmeCap65wwFruT4vU1J42TszmQn2NR",
  "key3": "3MfwtVDnrukf46btqfq7cGxiwRwzGZYsU19E9rQAHw46VrD36rSHE426RpZr5TfKwiqquuLwKM45S3CKVv47vbkn",
  "key4": "2cru47mvRYN1UP6QdcgzZ469hCZXgjjKAeSefvVj3VZ747hPRhgJnnPjF5x5HAJd8TScCoKukCsgBt482JC9VPup",
  "key5": "5TXF7xQ6sr8P85z5WvorJBEtyx3XbLTx1PETjPkDQoSgSQqePL3ofACLMPE5DvKA1CjZCMrvZAd92JHeyqmZXLuH",
  "key6": "cP2tf1YcYGiN9P4S7kDerbiHRKZVzT6mxNSALo9VAsAqpQg621JCWePr8CP12gxewirUS3nDzdFWoBzPnnTSSVv",
  "key7": "58o6WCuvSy1mgAUbkreEn5doWVd2BTAVF42TBaYdtZGGvWr1QNhPStYdkYAQk4hYFZaiKA2pcQp3PCgywD8EeJpi",
  "key8": "5M5c7PbjuXhTXnnFASD6KXkB6B971sA3t8SuGprSTv7S3FD1QRcCcPgQo9gf2L3EJUhKJmi8nn7oBuB1YSMxMvDL",
  "key9": "cYag91LGb3NwULYZ88SFRyws7nU4CRqwZb3Cy4Cw891oDVMgCyT5aBHbenMpriakeEoargcFJ6vRFERAUpDcfb2",
  "key10": "51MzTZoHSS5qEKMwr44bkrdgdqJ5LQEYo7H9NyzvkHazxcNUxvLqM3XCrFfuFjyhgf4s11QuN5xagP7VBJKGygDJ",
  "key11": "jqeYGhvdRvirSTzkouebZqRherLtKJQWwzXCLAWmjJvKPXdq12QP1pMYByJ36D4M1X6sYMAWerEgKhCFhYkCikm",
  "key12": "3mqHhCpz9UjZ8KbhggjhrFceGVmsAHt3nap9arHhZSdmKoLQzkQtgF7hNN3XiP2h4WGqYLegZ8Bf3oozqHSG1fmN",
  "key13": "2ocjtWfEFFnwA6EzkZSn54dkPMa627KY6KE7jVwpAJ1UF18mf6UNkNt6pBGzT9UYcPdyqrLfjfWKS1a4ByojJWHm",
  "key14": "5N4JurDnETj1Ymjs7qMD4yGdXSHCKPqGTGfnb1ZNRZykXnrwA1vhSFKpb2k2ftnrUVh5quvFqiKBRuEP7fxhDpRt",
  "key15": "3pamBbpks2LU31csNhMdpxzauQynRbvFdy3ojG8Sj9srSXiKXxF6DJn2ww5kovzd3y7fCFn3D14Lj1uUaqwqTAMQ",
  "key16": "4sttQPLLx82u5ZRfAk4vNkWcm7vJ1M1V56rAeUKYVxE5KKY3vKPLsPeoBBSVycprHBbzZniv7pTDpMoKppov5mHy",
  "key17": "3ujKRkSNwXb8UrVSDnrRcctWvVBdFdBSozVuKsqdQoAUUxwBofWiTGD87mL9pQWqksJTENLTprYd8hAMn4JCZ8EM",
  "key18": "dUpj9va6XGNvbKgKYDU8act39vH9c1mpgW4uDkoSvyhVurWSBCKZ7MVRmEqiAZXTjJXPHgh9kqq4eKzdypUiSbM",
  "key19": "562TqbeK3F3Ja9uPrGS7eKbSDCZiWAFK3BBX2yLerBBNjYLrjC4Shhfn1cquMMLgFJiqkrut7dRhmh4YfNRRuSoy",
  "key20": "jPFyWjpKncPHeyJE75tkXKb3JJvVzmWbhbkjAkNowq9ZWRPGbtvEQqhKpmk4N99NELJtcpX988JRGQeF9Nw18cw",
  "key21": "4uQXCeW5KNZseGRDvfnyJTWXehkoBhNcmKJkdivKRv6unCRTQmEzGJ8nUrU3HkTM3uXyrrAtrwK1qtA1hcaD8vJs",
  "key22": "5nZ4LUifQHTKsSC4gE7hbTJo5j8miCd4K2yLvoL9Gk5ZLWSaxKSC1KCvFvmaDp1SjAVkZ9EAsDz4acsfZXX7oCtv",
  "key23": "462Nv75mbeJCupBGugBxMXJBWmaREghmm7fCB2CCFv1ybv72BgvfW1GQmu9TqhAm4fUjb7KVdBtDLqpYQzG5KtM4",
  "key24": "5U8bUhiiTp9z3JxMc3djkuGu1xf3dssnvL8rDwdmrR8tgWAoY1c1eoa7MxrV2KNSPF7rWbq4p5S9GJ2z3BJVvgpZ",
  "key25": "4h4P6Es1KdPXbBBcx69Mm7c1HopBkiUdVMeocAVJ29XLknVCJHi2xzj4CCweSSwKej81UUqBqEYLo9zCFaxAcQ5M",
  "key26": "4XedgFithxKvZdyuzVLCxkPvsVA9CK2XCsnTicmTzqfbsb1uvRdrXkKCerikWMW3VzHFTBLvG9McgECXakX8BYjj",
  "key27": "4Yziv1NJF1ZeTmSrH7Cwg9Fmjon77yR6SYiSmSdLTD5xKAjxuedToxuJf6mMUypUwSRd9j99USJuSJkGxGXYwspx",
  "key28": "4LPbLjMA6Ja19poKFjNKv82H1FA6NEiRv6GfJQ5H3si8R6xrzQXP6W35yAUuqKHxteAWXpuYUMzKaYkgLWK3uQ5y",
  "key29": "5aH62Bv83YayopnPRSS9TkFGYrGQZJKAtKVh3ohm3xMKcfw3UE3VhoQZkhMjUd5EkkthAGZhPs15FT5QwEAFiBoz",
  "key30": "2dQhX6NmQk4uRxVuQVdAwoDyLfgF2ArPPypc9ZnUPy2WgP8dsnz6euVpmoxvh1LxtfFxk25AyEKyoRZ531gZvGrT",
  "key31": "4xpbsbZ8LrfgGwvhqkqtmgRNkiVPUwfTRaUhmGT5BBGY13vNENgy4cEnTZw6Aubp2s5vaPNE3xNNJvLzhioagnh1",
  "key32": "4NM2BLfWGMHny1WohexrDnnQ4FLcPjgGSE1xhHxkjffTN4QJYCQBqUWkAssRj4LW1DSv8J7AqvwYQDzXLHXi49gG",
  "key33": "2qRcHV2WN7BnDz2S9nRB8qtGWAFo3gAH8T29Hf6jrUHqqfJomAgX3xb9Rzepsf4in9RBRQ2XnnVT2ztc7hD4M2xk"
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
