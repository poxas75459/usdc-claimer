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
    "63a9tC7jmWGiDE7g9HXGpSdVpZWtKRADTqw3NmyKaqGw4eiwJjdQrJH3r3TbU6aLSgJX6suf1KrLBFFAhJfgYJLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qoyGKnQvGrzsAxW3EiBSCYqfUie9DHMTBakhBso42fbo8ucqjJWmtYTyAicjptxrj7gyipEHv24aycuGLCbgR5D",
  "key1": "3zSdKfofMvLz1PfVhMkpXjXe3pY6uvR9Bsr3UF5BMKa44nkGPmm5FsvRkhZdvYCMhKNBPdumjfgFTkJQe6vsEEnw",
  "key2": "XQYRvn21SnicZqz6qaQKkuLVa2WS2mMMCX92sBe1bodrRuzipSDQSukMx2foMBZAMYtqoLdu9wD8ujsFUFs5yD4",
  "key3": "3s6PepDnRDaCm8r7YmVSHfp1oqDA4EsorFo5veAU6ErkX2FsGZCVyzLy6jY1XYa5cVMkMVuG86fWJQw6QvfKbD9T",
  "key4": "3zbPydvQFs28ZJo7wHpAqbxW3SGDKXjXcBPiViFE6WF8mqnpJ7sPczie5tZgtESMXhAv141c7hfqnGf71NB5D22i",
  "key5": "2JAoRwWa7PMYnDtN6ab7QdpoPzbavHZv9KEyxbFM4E4hBsN7wtpRnHHreUYgzwem4aYcwkzvvuCxLkdQf7WoJyZ3",
  "key6": "4PSFtnF5NZtFmFySRHUEWmaffpwD13ewQBH2C4h156yQd9Ctrj82duaTGiZBpYx17Qcg7q8u8ij6t3SDj6SSAhX",
  "key7": "45uWzjqzggbromjHpLt2qHuWuwdLRDKVVq4NgvtRjA2Ds82wEUERgZCCYmpWex3iEabFuoudBKMNHsJeu6ppam8m",
  "key8": "sCkXeVRNGcMMjX8PiukwXsMP28YtK3eM9mLN9srRUveBgsMcbXm3AACFaDQ7sn7ZUG9RVsyxG6ru24sVmf1tLrW",
  "key9": "57pVdK4vHdcB8HmSYuVUqBut4ma9SFGuJCVEDdsBMtGVCWHaKZ2PpCtJijUqg4Gu7tvk65p2nr8CjG8hQrdK5W7F",
  "key10": "2DF9fEmWJStJtyG2o54AR2CeedHCnpe1cWppSZbEKjLY6LdaZgticxagMQxjrt2ZTyX7qctnLpFYJMnwkKwJwaKv",
  "key11": "4J91pka7GB8UTiyqmuuiY9reETibPzkabjccHE7sbiCGqGDy7bzgMzzfRhwxrWbRqnfSmRx8T4Rr9LUeyJwDDqCy",
  "key12": "3YPsyaVBL9hbjfBhnHTAq5Wya5j2LzuJgrckF9MeTWktV7reRi5UDvXMV1asd7LUihaDqLyAsaTPtSp32fs79zuT",
  "key13": "56Lfm84JwgaMpvimoyajC7q2RZHPfx474av3HSLRpb2bFT7BuqaQa9RNVX23kStsxRx5oM2UfaHfHamEL4ZCktEm",
  "key14": "5q2UneraiSxZVWRNYuxEcJgbqdRNCyiBn8sczpgFN1MhVEL6GdH2NuvumMNZvsUV5EkneKARDfADHkCfH875hk87",
  "key15": "5YgBGharVw8RK1csr37n7v1KzpEjRPc8DdWpqBcE7HYoCsgY6KzZvwkDoYsN63kWqwWkmQ9CpxyP6JPQJwZQorwQ",
  "key16": "5Bp5XQgC1jneRC27yQnMbSbQYd69nMWWEuUWoiuftm8ZZ2ypMZCujCDEtp2oTsygrpevxo3WjFkyUfDWpgbQiPdc",
  "key17": "3DjycUSRHZVF9akn2D1LN9qqLsNBXbuAxgT99adQmBtTy8f1gSnygkSnNjytux7BycmLmPGdquJmV7PY3nEzxn6A",
  "key18": "3XoeTzD95dTy8YCAwJZXyi5RQ34zFnGGMvJNhBL4ETxp2XRbyTG1e5vQXAG1UXRaZm2yC6TPRgAJ96QEKy1tvo5z",
  "key19": "4PjgnVH1wqARK3z1mxwrDx3WYcGLa2g3kbp7da594Mx7mrqyrAYBn6GfhEVwt9oZeis2fAb71oTnHVbXzB9z7fXh",
  "key20": "5y3SyesbjEcAifCKSg53BjorrfAzRSqRsVLP3n2L1XC3FSNJguG8hePdT4nmetqAR13tGc146dhvhJ4ky3LSKWba",
  "key21": "5gcTnzjYdjtmaXyvgfVwGcnhn1M7aPMg2PdvuciqEXNef57vvRaRGcXd8xQvLuNzVCFqCE1Zgh3EVvrVhxjzCcWh",
  "key22": "4MA3rduwF5zVeQfE3wW2mvCyj8x15yEKmg2deLLwg26mxToMc4Gw1PGrH6vfQjFgVBKL3dN4HjQVk7Y73vn7eo99",
  "key23": "5bSiHWvvXdVvNLCRRbPgoby482gBaB77PxDMaEhBcCrQVUTQaRLbt47vFjzJ3BAQGBZ13LJQEKMqVdZ7Uffn4zX8",
  "key24": "5AMsvXfdcTtg2HJWwEP48nSHxDjF6rGeLWANKdBD3TghBGALatstfkj9rKrSrBj66ptTKGsTB5Zi8TGqYYhZu2sX",
  "key25": "4Peep2GwZr3pSpfYyScfFQdqgt5jpVaVKUAHHLqaFYN3mxzf3nvyjqLDNhJvRCkJiiEuwiDpscp1pSt5npVk6g86",
  "key26": "2VEVSmGsJpoaPgB8ieWnJwbDcMdWyf2YktSuReFJPN93PJBrkvBJjU1Z4o2c7XsKmJ41Ge6BqNPr1L3Qm8LWxh6b",
  "key27": "3mAMmxoJxzaKiES1uY1ZZ38CiNo7H6uokRNfisJYLVs7irfBMSixLVBnXqqLF5V7HrHu4EPMnQrypQwxXk7obAsu"
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
