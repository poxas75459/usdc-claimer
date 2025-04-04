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
    "3D2uooFu15oQUUXHnLRHLP7X6cgVXssxnT22ZqwMZezxW83PnQgG3gsgGGTM9BMqSCjntGvthnucMJ3kUMnTGNJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kkMTBiqfcH6oPotuoHRnf535Djx6KNJagzpAi74QyNoMUWebvDW8JpaaK3dsbnD65GYKmRtuWnHHjZDTVRpzZDG",
  "key1": "29RNs9gJJMLED5Sczmrhyvrp4QNd71KYdZEEsorMXavSRfBonYXgXRqBaSRAhAEcR8joaBW5sujm2N8nSRThQSSb",
  "key2": "2Tney19WXGZ2wGxZKu8J65gn2Xbn85oANiis42nz86f3dvLG27YzeUEdAQ8bPtKBSYx2Sg5ygBvdkcvhaHGQyU3a",
  "key3": "2CpUZNRYp6uAyggqRXM82RJRmig6qeycvrGkoDmPVb5jRbRh8CRXRREhhFfVBb5pZ2xR4yyJdPkAygL89HdKHUqk",
  "key4": "2uMhykPSKVEVYS55Qg14hMryfKactB28WVLfBEd9sfCx2mZm86ijStqUQJDWwur85q1M7cLEs4EAarXn89t9aCQU",
  "key5": "4SxsRqo1zWBcZeJSSsFeeWh6r8pMu6Hcxkq8jQp3b3LWgGumqzVS4kNaJThopcBFrc6EeTnB9Ptb9ZG7H8wQ6FJC",
  "key6": "5zCUhE8iWvzsFYXn7NZaKkFhuwt5sbX8bxUxVP1UXeu1FN8srhRiTjUzxSqYLKWaYzMRhF93rvu8dHootoWTofPY",
  "key7": "49DenrbUoPCR9eJqXVJZnvdrrSnPRQQNQvv9rDVrPb5BNamwVNFbAsgK5h4AsUYBexviTAc1LmD5qRK917RThjaL",
  "key8": "2oL8q8Z13pShaGeonQGP4oFE8U3cu19yc7bi22YbzPEYs8rzv29giPu6HGxrZaaSq6D1gxFrFZRhf2dqVBuizKE2",
  "key9": "5atZAGuyZ8raobrULp1pNTvidVB2o8sqespGDkpWPVj56TtZ9AAdWXv2zL5TRF43dtdAsLoRZy433FFNAnNqkJgm",
  "key10": "3nZrUfkr4KpRhD2XJy8LUe19aRY3RyZrhftzhJA3z5kzirHN8YUTxzwa1X3rtW3dDakNpp4hjZyFpq316SB7g19e",
  "key11": "5pUwdsKVVXMknU3axJt4MEe4p7XqjkrE5WqCEFbCdv1QzZuaBEjhBcynQ8pR3b89Ke6wPqzvwix8ce2nexdQb3be",
  "key12": "3axiiHMatmxSXEnb5o5nzR3Sk8GL5gxffs46uAym5YSQaDSBKptk8WMtv3t9eBEQcCtxrspFu2maER2XZ61jsMvB",
  "key13": "413WGrRSjAZWn6o4DvaBZKqEUZod5uQmrekQRBcw5MSdKFte7joRhq2nrmQbc8utfETaRAhW136Nkg4enwLpXJW4",
  "key14": "421oVnjuaZtMSzsT5L4jSsKuiiuuh7FV9yYDnHqeRCziCzFKbEenSimkFkt5uwwLUboDBcgiispgpksRifQwiZk8",
  "key15": "5VVQie6pirR9RhqjZgvMkhi8xonWvDa9GZexnDtYS433k7WRfHtESC9R6GbbzGXBj2tWpdBDfKaSxLRWrekJLPVy",
  "key16": "2vuAb5ZwQPergtPXWdiduMBhSGEBJNJ8Mp6VKZ3RC7NHHbyrKN8RHXrUZKaF4eyTXrVQadKTYezu8hNGZ6wsa11N",
  "key17": "44piuX5txshpoYX47zmd8eJgtovBvYZuUwhj1jeabbYZtj1Dybv9RYeyqqEJCtHUHqUK6LZsEXnQxS13iuLPRdaW",
  "key18": "2acLdop11jRkEw92Kebcgz7TAMYB8HnDfjmGX7R7mbpZQc6dNYw9kJwZ6DfiTdsp3hrVdgx3gib4seup6JKpvrzz",
  "key19": "3zEiPbZEHkTg4S3zqGCcMebxePoXRNxaicWkWWjn9h6behs8NBEuSgjNzrvrYttqUaVP8Aec3YLnwa1xdxdqzT7N",
  "key20": "4MNy2zDunCzu6KbrqKbyGGk7VQrACbephvonb99cueAtrG9aPpmXBge61ExaduhZYAzzqWjDiK2qCNbVUHtvmaLR",
  "key21": "42F5e4VqW9t9Vcpj5ram2FB5UqKLXmSVg17mSsqpnDUYdHmbhDzL91wTHYjT5DyF88cFAokb7CiwMBJoAn74deTM",
  "key22": "4UWrMLvHQYwbvg9xrPHYBFCwKxC3rTmY1JBmfZvtPpFvneo44SLH1drqGgjUzeUy9c2bsTTEWJAZVt6XV4W1DbVM",
  "key23": "2Kec8NdLkxeSsDHC2q5YJiYjxXPobDTwaBs9p4L5F4rP1dGiB5qUHNaSzRw2wLunwASubJfkfmbnCoeGrED1UKqz",
  "key24": "63yvFV3aCF2bia36J3mgo3d4qA9cifRQ7pmi3kvE9izXCPN2YP8Rh6wrv2jQxEcWqDdnknKavZ8KwXqphzJQwcVk",
  "key25": "3g4BpV3oerdq8q6grfcbFnWJ46NKwxNRmJNSF41bLWJr62ntma4qAhuSzu1DRt1rsndAbXnWA6mipRydVKv9EfeS",
  "key26": "44GDA35impA4x8V6VZWUEa6jAei1w3vMD9iBdEGzd71RAbhoYiVCccywzJcupsjgrtbseAsbZEP6ywWGbZL2oKrW",
  "key27": "675FkhYCKLGkUhxhrATf1iKoaSNysavgRDjnK2xoGtirmSGATJby6aGWfQMffHfzxLTaDjVt9kRc9HZEHXqRmgc",
  "key28": "2PZ9YkJg7RfbbEDcpfQ64Bowj9xwnb9mnLj2uqD1yptAYBaT3hXgJhejyshyaZ7imeWhkjp3TpFmcKXq4gvoRejm",
  "key29": "RtxhKo46XvrD4Ki4Wmxof1hMdf17BPQ4deMmTf5T7PCLYNcAzDe8JqrmvowwEUdibu3gEeW6D9VPRpUZrfwUuz3",
  "key30": "538cXosDX6tcHnAPoVRjuqgSo47pUuksDKkjGuMiGhjXUfucAXveEuco8BS8vtNV8eBE4ZMYks4cV5Zqz3fVpNiS",
  "key31": "3MrWEqYMdeLF6SpVvLCTGSscXvVCn7ndCjx3WW5zN5XkuEgzvazuvbEurMuc3uQUimVvVPxhAjDfcPEyfLSzaMtL"
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
