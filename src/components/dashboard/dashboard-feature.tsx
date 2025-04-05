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
    "4dJwAoyxioCcpbXc7SRVGNmsVSEfYZvsLawpxJaeiYueeBQzoqS96PMgPj1LhbMXujJR385z5s1ceTfUPPPvkCkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PngZ9x4LzYr4nTVJ61toJdDqLUDYcafCBSAM26diybfhzvrPKhnv1nNDzwfhxpkDTD9vB2iTc4rFVtQ3TPrNuqe",
  "key1": "4kEfzZEEknR2Psoy1dDBA74f26VvzEw1k3RT9hh9g4m4khZo6QBrjM9DVkPwLC3QafpFByXZ7eJ9DVtGCTuQJQun",
  "key2": "4JXBDLbjD15FEaQCpb26aZNnYkqxVdfsG6J5bNYg1eT5ypg57bAGHcG8oymSrmAgyvwFMXnYnDfoxvbYm5Hu2a3U",
  "key3": "3uKcy4Dm7dHr5ZdKo9ZDLmhzDQfPg1GyHmG5LzKgR5kc1TGRo1x9ok4BqEQCqNiCpNhEoNHLoZXBbURCCErQgdq1",
  "key4": "MQTHrLcSjek9mGaxogQHvqg8AktTUDknVU82BkSDCC6gp4FHwwWrcUgtJJuocua5PZpLCmx1UJYRvGR4Z2dqFfq",
  "key5": "31vGihkpJSRori2u1LsnnCSrPJAfQ2CTA1dzLCTaAUcyWYnpLKv31cqqT3eympkbtqeh8Ar1aEM2yTyE9JLMYB9s",
  "key6": "5LWu65L6vhCyGnKtxYmPWJUT597YAGuGEBuFDnTc2GjUhoYUaDZeqQYkJSmG6oT9yqeyNitMCnjmqM1ZDASioBiZ",
  "key7": "soQfBLuTMpRgFWVqjnYQjTwGbxvJUBAiJvMn4wQzWp2Q9FyywSxNMwc6VUr3Nr7Uss4PwsHcmgDVJpVZ97W1Syj",
  "key8": "csn9EFfS4ctF9JsM2r6gipSDSDCnPozjEmXjbDM2d7UJBjm9cMG65rJZADKS4apohyezw5xV2Bd42mxyMyi7aH7",
  "key9": "5nnnEKH4D1zcw55qHWKacP6jrvXphH3aHko8vmHNuAZKzWxtCWEuzwcFLm8jXUyS8KofvmXhrjY6cJqQHLzmBwUU",
  "key10": "M8Qv4hYJHP1JxpNHPr9Q4YbdPBq7xrd6obcUaXKdgNqUaC15inktZ18Eqw37tYNoHotiupUcHuzb6vz4CTkYtGn",
  "key11": "2XbJJnw4FyyW5Bb7ayTubuR4rhwWJZJja9nXzZVwbW9KzT1AhGdHDjdW2CWDTPR5v7Pu6zPPmJG7yaUuga74MPN7",
  "key12": "5Qb9wBfhPeFFEysBEjXjSeme4GJoqBhP8DXfEoJx4VAheJciJrEV4CpNwuDW2KmFx5Lr3y8c8CZwLH9JCTeRrGwg",
  "key13": "5UXstkGVmWM7Rjrb3LzcFGRUjJ2XKmtmvQr8Dq7urh946PSx9VrZjymLGdMF4ZnSBqg7V1Ajv2xqiMRhrCZ3kgPH",
  "key14": "4EbcpsM3gKCepQagRTNLYtSy4GhijuEVEFqDD7xxgd48CvGc2WiCxJZj5zhmrXnnFTEwTUXw4ceUeCq3uSJHsyve",
  "key15": "62BaLfyrSVo6ZVwszve2haZMtTHqn2gaGdJbcvS7Pio37voqhPCv5jPirKDojF9Efmw8uNCYTG7Rg1Q8d4xVbQVK",
  "key16": "4p8HZxDKjpTmNmCKaYZJtfd5VWSvKo3u7wcV5aLVh92aUwMbNsg1uQcYZp3YDfT4fPap8Rk7YLncmxqj6vV9jsBs",
  "key17": "2gMXuk7RHEZiHwrb5HHUH6Rk6mwfZqrhgGrESECaP1HSSfhjvZegK1wbPVarf7n1YoG7h1nHbuL9CyjnkhMCaQDe",
  "key18": "2oqpckCe79pJX65kHzEFMJTTnVvzn7RDczY4fW3MhktT57nWwPcN5MtqmFEPSGVPSjJsQ95mv4NCFf6KZUBo4yny",
  "key19": "3istXDvv51nu9gPVfDr6E6TXo1DBbBGxZQEf1s9wnTcS3thY3uSCqjeMKmovpcVjnTDy31L6nH1TPgUnGs43wnAL",
  "key20": "3XJpUfR1uysshaY9NkCZHobhJakvSouM2r5C7ddAhFiKkFgYgs3Ao253f2JT9oozJCoLTQySSxfdgr9ZJzuXAHCQ",
  "key21": "2rie5xVTVzKaBiHAf5cinczacDuSpg67hHMisSVP3GWF2kCi5wV4HFyYw5MaFHAhFZE6goKCpqh1GRqjv9cjmPPQ",
  "key22": "35SiGEf5s3ADUkhW2XTNNACTUcutwu98avn2t24VnQTueZx3EtLPn1ryfDwVMje6NasrNhBcUUnG4KYFpSHMKeL9",
  "key23": "4E8yTU1ymgq1Cu4f96TfVaEV8AmKAD927Wr29uVHcjjhf25tCGXFc9EEsn9fnJiZ6ku7VsxZKpM2auxkb5HGrF9w",
  "key24": "3zupKFPo81dGeG4XbmMTZ9kwU64n3rcA9tf5hdHj3drQVaLWP1CSxM6wwWpgeNGnVRzb9xauQfXqxLHxYkQTYL12",
  "key25": "ygsjFTspXdJQzfZ3FL3GU2gJcYwYSkp9dTSeFgFHMUsnjLyboBHbGRLHS9oZao8tEK93jRqMW4VgnAsfSFDGp3N",
  "key26": "5LvQDoXXCJ8qMvmB1NzYZL2MXGYa324bJQi7pYMNyCSRDCQ1BuTckn2Yv7m7375hB4Nv2RvEn4TjNbdK2C6ZNRqj",
  "key27": "5TTkWMZg4gPRGSfywQ3SrpX731vedwvS89e1yYNZeVYBG9kCz5eMLFw35BHLaRGkRoCi9z5WgVQKUsw9k3nW8a6E",
  "key28": "3V7jh3r128nc4R3RYt44tvJXpEE1u2FeaQhHxsCLP3sAgivfiBVumrt3DZjR5uuySfQH7iRi5BFJjSmhbaRLKwUS",
  "key29": "UwNRHaXHZMbvPGKJPm2ULsp7ezXjoBZHuM9qPHUvX9XNTF2psWAZWbvydRxg8rzdK6NNEsfKZbzW3HspMD2ipnD",
  "key30": "5oTTij5DtN17QT62jaBgXfAQn6TgCFbSoXcurevAnuxQqgMcY7AZx5BraEHGabq5yq3wesrjiVoRDM75vaWNjEBb"
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
