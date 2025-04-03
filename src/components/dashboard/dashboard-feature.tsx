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
    "4EyM4zzkjYBk3a9vUSU62Mj3QPmJsQwxNR5kS2CHZBxbCEgNBRuQF46ZF7qvbqQwT1FVQFKRUeE7d1WwQ8nE8roo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N2TbVXBNTJPVwvbrRXufoy3xigzo9u7ATuRPwPRZowy96GSzRcpRPfcUzP67zdc53k1msqe2B2ynrubfZKet1JG",
  "key1": "5WH48uQ7q7PUckVPe4G4Tr7b97AnBWD6yrE1okpDRSRepWoLf6qjgNucsDsBJzFr6d1sdsckZ2LX1YTeZijkisj8",
  "key2": "4SQs4itmPyVADFGBdUHKbqm1osAkcUfniuvup5Yth7FDBg4nVoGDWGPD2vN3P2e5Kqz7S1JdKUE6nKi3HhUggms1",
  "key3": "5x7aPZzptp7yLxYVx49vS9JVfa5v6PK8BSUKANJ7ryiArFoSwM2BJRKV9b5eP753My999tbBsFwmWvwFV37YwiHT",
  "key4": "5GjP6Cc4FZxJbjoHbRqcYHD9yQar73hrcQBohXkmzRqwHh27KZxLP4K9aF1U8pe9FKGYGX6kwYPvFJDP71zSViY",
  "key5": "NNP1RAcvhLtCeAT7d5fyWS4kbKmJs95srkstepeBe42FcF1Xc1MUvXznNNXGK85AVsQvAjwxVw5WmSt3LNxToYV",
  "key6": "4Uk8PWgCCqYDuD26cqcKGrhrFmykayYetKejubAfeXkFA4mr3zZHaaBfZfHdcXn382p29nAa516NibCKdupXMayw",
  "key7": "49yrENecyxgqnFrZzWTfHKoNYWv3qyP9qJqTs1Wtzh5EcGerTtPBH6N3MT9dXK15wPKzX423MEsuXkmji3oXXMac",
  "key8": "433EGVn3tdL7nrH2cjUwjYuCJGQG9fP9yy9eWDqcUYzZRA787YxdSFHbLCJ4AxKLRrpsqXX3J5vxXp44kuBevhZF",
  "key9": "42v8gzPVHVnzb87n3zhLnLsHQzJTuec49z2fwmY2nmovykmYSjy8WSKNraysN9bjizTG9US1smzP3B8j2v27Qsw3",
  "key10": "4ZR1aEZYxcLzouPR2A64zLaEmbhyts7CyC4YoB9MaNQwT5wR35rsyDd3ezunQLF23474zBMA41cnwLAeWHSzmYJh",
  "key11": "3uzXSZB9j7CoCCqHomkAojbTmPN3zfmsnTTYFMMjgS1Yo3ahnG64CBAq3f8ydzb5v8HJzpMNy3WxNwfTzgKFoyVM",
  "key12": "4jivKqV1Ho8Am8cmhcU6feU4kSke44mrXvzgCrmNNhncYjZB4sBg73bWstXtbZiS1fKBW6iHh6RNMRHAChYbJjfa",
  "key13": "5KtanDqieNxCoKGUgbj1SbsxJEqM6c8aUzYt97smhXUzG3hrTEY8UpxPsTNUw9YHXsReUo5D1vsj8VgXf4xofbFy",
  "key14": "46hK3oyRvRcgbUmvXJrARnGqNWBDHukjbchYt3Z4rhm2NPuwdHFDqQVEcwnN3Y1fEG6o97qL13cnLfmqhVSxDU81",
  "key15": "4KRbUHa1jXLqSGzghnvai1X9G7TbFRk1SjhQm7QdqCHogqHGygRFjGXsq8j8DHNe4M8CM53UwbvYksLdGPJtwsZS",
  "key16": "3fhBgmfWcFfib8hbzgKxMu5jvoWEydbHarj3sUyGTWC8r7u3rkwwcNJiRdeYVoM98tBk1RWd3hdrnagPQhzz6HzD",
  "key17": "5BKeqMboSdKLZq5gHPKJVQJoKzFGYTZyCZdsJSF93ioki6kXmdFGhpuy9cXScFx3HHQjv1deGpGRQgvMVyuHhhbz",
  "key18": "2NHcEz1vP8PV88WfNPLNtT3PQhmWH9fuPRGay1Tu7UwLzH2HJ2qEembEDtxfk5dx5bTgSYRUbv5STXjTGxNxTBxY",
  "key19": "n58EKU4XYrNaNfejb6tLgsPfSyU9R9cix8ujB6NSkLMvPwDaVyXF2zXwyK2PjhfDzrhoHL6uzneadFQ9RKgVUhU",
  "key20": "5e5m51ZMXXvPkCvSX6tu3HXWkCf2AdWJrgT7HG6q6wzdSW6EGJghNdAMqTezAsgxX8F6di48gvNVxcCrt7BDQWMC",
  "key21": "3sMQXBdqa5oWT936YMW14uHaV54s1SxXLLt3GFVWWhQv95vo2JwxySV5fRqDeqB55HJ5dLjEgFDYwddUGmSgVJgG",
  "key22": "3oc1W6ZPfAKdcJfMg5FEzy3urGwbrTFnsgEam8i7MTURNWjJ3i3ojvckK5RWZE5Wh9xoAsU198HzAxVmgpVq2QEd",
  "key23": "4x3J7mp866EwVn6vPV4Q4v8dwFLggCfme65sFuXh5NJcJiopBDbLPmZuWK3fJvDPGeZsZzjmT36CAn4zyGCvyKcY",
  "key24": "3Dh26ULEyYuyXaeRZihMMUqYtpM4bDQi7vhgKdRgV8zKRXj2rUok4EPjYVHyYBhzAn3bdWefyAg69qJ7dDdEvyM8",
  "key25": "XkVNqNKjzHHWVcLCKevLaE6bZGitgNzLmkJp3jpa6sVirhMeBuFASZGAFTjgFJB6cdkf1ptCzFHGoe6qMSrsBLR",
  "key26": "5nZkSFoYMY2iWmh2EnxV6xySBLiFQ9aXgULztNDZaYMLfkYbDCeKQ3b3TWgaWKQXPfpYTfgQz1A5M5sAjrQRCogL",
  "key27": "2X5b8utzWGeZfqeykMgsr6DRabFdRrKhat8tJz6tWDqWDcJp6dEJ2ejgkyoXEYceiGubwSm7gsiuChvgRsf72TKP",
  "key28": "4vm9wqHjFDsfJ2dtMDEUNs1R1YKqWdocs4frt3EEH1TUBQ3UNEUjDBBLhQihFdbCsQX2DPPG6WLSbZjK7wEZqZfm",
  "key29": "38jB9QrzBMVKLhccfKMDkycoFHwQNXoRy53wbx2S26yysXfxoyaj5XQYzsixs41kSUDCJmdnHP7wHqUPKHNTeki3",
  "key30": "63D73B5rDKFa3x5t95u8x9sz3c7mNZzrZUYL6jmeLcoWCMc37oE9sRUykH8HBE1hG26NKXaNWPV6Wi4N6U4xpbqR",
  "key31": "5uM1L2uXDF1xYH3HHAYJdZjEj2RarPktSPXguJXeVeWJR1csN2mx1AhJUUeZpmYExpdwCFpjrVwzZwsSKe6qdFpK"
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
