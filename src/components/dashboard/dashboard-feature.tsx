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
    "SeEc8MVqsrVdAfLUEro2njY6QwV1MCccjdnhpHJopo3dmUnoGn9ZtJ5phgatYWsMZCu7RPQoABohivdRhSYwa3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqm3WXcVb1JLJe9ALKK7aR2fw9DJpawQr59qtYywb1XpSq2kfutdmLhe4EVhXFeLguzuhBTYoo33Bzrm8rjBMWL",
  "key1": "JiNzPKAG6XyGP7PVBUAxYTaw26cioVgd5NYvXG4Ht7YpowZzAuFvvrNUc6JVZ1xo6YFH1ZWcuFDkp7LoQkge9pz",
  "key2": "2817AwmgPHGHET8pNN1Gh5Tw6Uov9cZQa6uAtRwfTf1zAu1C5wsh4D2kJESMDSXT2E8VfEobdjpRsQuDRh8n7SVd",
  "key3": "3VhD7BqCxRiCGhV81Ewgdh84TGoiz3qTtEsHZBfrDGoySgitGTbVCyPABerFocGbsVLwBruXkSX7exA6Ggnj2o5y",
  "key4": "5iS1XAXtY3f3TzQ56Jh8WpSdmqV1CcvyoQkYtfdvXmoNoPPm8kPvJ4DPkTMWLvEK9QGkEp2Tqx335hsJ4GdoLrYH",
  "key5": "2Njr4Eo47fRNZ58gLSEUasphwMVrsAjumY5Naibpbf8gNMp6rmDQ3aGw5KAr5sqdE4UQgmWVT1ThGFRJvjauuZAJ",
  "key6": "5odmX6wrMCwFghXpaPL4YGCxe2enxUv5F5PbYSMVmUVu5X5CnsuDBnrfM7AoZf72sfbXLuwmvEDcJdUxFRNRsNhj",
  "key7": "2H4A99TABTKeTdAHa2uE7asAoF8MRQmuUArwsoSsq7uqP383Ud3UjSsedWoKiK1WiJxqSsSYnaYUZ2f9CwJ9GGbu",
  "key8": "3gqsPVF6HXenqur9yRopKQKfZ4YKy4f9JuVmWFfeoSKvwFraEii5MjUWgXa4SKTWHsUdm8jiUX7sCSxzg9W5anUv",
  "key9": "5DmHnA5VRLFMBte15AdecGsn4Qo7Vfi7iyQWBgjHQ8xqycY6EJgGnb8PGQPMXinGGXEv1rkxr6XKo3tZWYEL1fCe",
  "key10": "7z49B6DiaaiMJngDt1s1iZiQBjTzKqH72tEodSa6imaZg5ywFEXGRtA8uiR5W8Lpw3qi7hoCuf6j1wBnojprjeQ",
  "key11": "3X4muJ6SffJH8UsbtQv9LnLK3zR3QDS4F5EgaSGXPsxaFkFXRjyFVn3H8epWBC9J7vVyZ8b5hfBDSD7N31Dw8S8r",
  "key12": "48Uw3TnnfkhsdwurZDKXyT4nPwPZsRHhUBA2drMTXKGcAYkU8fcm4QUW1NLCzZQvaJkgyyc53HT5urW2PkTAj8Fo",
  "key13": "FkecjzLk8Cotm8X72i7rXs1AokSWLgx6wKNLvbwNfjmuEoJ4g61asXNfR3Pq3AixYp4L4Zh7zwq9VWfVXxUAe4q",
  "key14": "3DpRgUGPm8Vo67PetjXvRG8p7b6wySQGeRDM15UtM3C9TZoNooGitUVLVpFbj8SioUmrBDHZC81xFk1ig7gWqCft",
  "key15": "4uqcgjFy4Ea6adzPeuAPd9K99w2itRH6SSUUTnVKdK6JsiZHMysfQVXm7ieSAEVCrDxiB8Q1e8AUrLSwDqkrtgTm",
  "key16": "LM946j6spcTp6TvxHSjKZ33Z95E6KmKfdzRbXpM3FHVzwcHsxpFYtF3LBQfR9DNt6qE2EToigsNErBDLSwJi2vD",
  "key17": "4baBrbjjru3X3nGnfCFx5JS9XVc3XfGCmNi4G9xMm3Z2NHGQ5Voem7p7RYb3zScaRh6eewEKCpzoGdjNTy4AjTn8",
  "key18": "3P5Na8RUGeFyg49ewEW2R9UZeAK7utwwWGuCcaXnyj9UwxRXhZGzB9wm86UaZoJiHZnrGrjjD4Z9bdJszUuoXxTx",
  "key19": "4ZgeZ5ihdZYWotcPDPFxvFPoVvaAHJgex2mhZwdZPx438Jo4B8Bbu5pXQxWa9YoLi7WEdeBJQDHkAenpvtDUUxT",
  "key20": "2mpLjprATxPCyoGWtS74gTXGwSGNJPBomcx2hpkQpqzX4EixogvaugmDmjkCSCpdDYqc1QKvgeTMGYYQPtWYdtzi",
  "key21": "ceQUbCWMqvoanGpWDs3y9ZhXc3VrT9QW6Z1SLsFkpvMHwRhWidrvuoiRqEd7WFEyzNe6UYW2jDRhYrbeDUzPJAi",
  "key22": "2Up6Gwp86PwM26PfC8Td1DJLy1vaAJxE8SLjD5a2rBgkMVrtJzkQLCrUFVCsBQkF93CGwMCrk5KddfbmMXm87ddT",
  "key23": "4R8ASSpEAEgYAm4Jxe1mJubeG9qkGRinqahzueJWMSgPmKwbgfzWmcEy79Jh6PZGrvzY3MPNxYgwCnvx8vZCSrA8",
  "key24": "4emVFH6x93sXjQXXb7zuaMcLho8LQr13XQwE6jZd2VQ5iUVrZLFegVVnakWNjoYKMEZ8ZPxxtLeVgK89uLwpoHXr",
  "key25": "2JZPdEYSubin3JfGUms1DiyxH81zD1mvRmkGCv6SRcZNnp48yvm6n47tKPDnHRLzcC6iS4pLdtSij2sMzQC8xJVr",
  "key26": "5mkEZBrAiiCeLJUhyAzXgdnQfjLzWcGYsGxiYvVqm3rHNA7aZWkBHYBpXn8LhHUF4T2ZrxyGNCc2XJPgSmoYe4rg",
  "key27": "3SoW8U45FJG4A2NPbaoeU5md2M9NsKidQYRvD3sSk7PDZ4Cu9fipv7fGzw9C93eETLHVLSnRSrBDV3at6gRNqSxk",
  "key28": "4Q5HuwPqfGNzzwxhKsrcxWQHE26M7BWSGDad7rxAZCtqFqgLW5DL3nFgnwqZ9fVXSVumGmAhVF2AsCdgt5VUmHfH",
  "key29": "5eCFZg93RM1jEWABEkFo1aN8VPdXya7iaCVWzU3uw2CHNwUmRtTzbhn5DiCCjk26d82XZTDCeT7UWN4FWSd1uva9",
  "key30": "3WXxVuQicyQ5YUkVG5TmZrxg7eWwytVmmDDUEDd17pZ5sh1HnwYDURfNdSNStYqKwuirCoBdqNc5wd9uTxycNRXS"
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
