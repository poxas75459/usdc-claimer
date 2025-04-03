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
    "2zGX6qK1ZwsLDAFPht9WY7ZwYBXG8FeSwWP49HEYTZ1GDeGpEV4K1xwuEKYW4SUWCo4JRGJ7swgH4d9C1QfT7tyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yjBzwyvgumJ1nU7tdnFdFNxGQiVtevbK8PEn7V1u88PbosRt88ExMQjkYWfgJU7zfq44gFQicbGsfhLUSv9XmEm",
  "key1": "3GkfXa7evoYUcmoEojEd13hTy9uk67iHcJKtQ3QLXDWadR8QfNj5LBoQ39yWb19irQdUhobbEx7QbrQUZxmBgCo1",
  "key2": "452hCRWTX2wfwUUkDrA5PvWXF9ekQJD4cZ75P9TqgZmuAWnDRBttpHWXDsnKGzuAez2UGaj8r76KndnShnmTQnuf",
  "key3": "fmseUa4ADjGGURyZet8xtezJg83bzNpp9NkeiaqgvtCdeN78SqUDfD8xLtQKGyDLLyhKp6hc9LpHRGrKef2Rzjw",
  "key4": "KuAR76w1BAtrmSNgb5mCk1DpoiPXDH8jmTvExanwjSN4g6D3H1GynKpWPScja3o42yEgVKKBYe2UdUtj5pxkCcX",
  "key5": "4CHmu6eNfctgYsZwXKxQ72Bp8KuJSTstZhpDN2qGsihhrZra5qdpohjcqrCeebLZ9vv55TpSvHbTPEd8Wndk24yV",
  "key6": "3TNGbKLwo7FuaVMrnq5UfbtMNtVMLTgEBxKW7akhi2g7dVX3GmnbRyg7xR2nrkXPVUqbgmBe1dmhBdGEM1YyYvvR",
  "key7": "29AjHaM6oxv67AokovCRqarz5BHGD7vQrNd5iyBizitxsRyUYadYoy22Mihy3ByC9QXTxmcXdHYKiARCu4DmEEat",
  "key8": "4rUGmXoBRKMckZ5YtoFwn2jJQwZCjNDrMzwjyPH24sPCoShBztV8RUPkT62urGGLENUqkJxH3TX4GJxs6W5n17wT",
  "key9": "35rYJCoiXFE9mKhNWri6smHJjP5FBwy3LLgffGPNeCHyRXnD27VC9rDPjuoeUAGySckd6R9sFKRGhHWLg67hY8WY",
  "key10": "eTmvZtTHwdecTCgrwYaJbQz1orLXEdjS2in1nqAHcbGwi84PwvLjDYeX16WHhqzxbAGT3K2a7mYFisY2nLJwa4S",
  "key11": "3vMMDqhmfM3DhomC9Wf3pxktgEPjBDMn5AF3A4cH6Ec9GviSeiz5GRUHghCRwRbr1kpR1vkwzBfRVrbU6rDdKvYb",
  "key12": "tLYyUeBqwNgDUpWmw8djQ3hwCyuwBcfC8Hh2ak8oH7hcvvCEvukLArZjNy6WmZQfftqVR8gpKMW7GKgZpq9uNaG",
  "key13": "5RfxuCNrdbHCDKpwcqHP6tfiGTX3TAgKooU4G5oKdqCcxA4diL1sqmoh7ogjJ12nkvUXnDuYkv98Go25EC5RuzCt",
  "key14": "4iDVi3nf6YJ5aSMm4diaixqYqdrTKBiM4zRg1JqmQ2DS3gk1YvFhChdPYWP2zvsoUoYiPfuiYxGkGhbZPXw3mZsg",
  "key15": "215wC3MhYA2mqaoxV2CNujPW2XMzH8yu51w86GjVujAW3ytqsqERUboeArjLem8N3gh7Vqh9hUYFpkQjmKCfmnYZ",
  "key16": "4kDLdizorcvKtNnZcWNZfpkj9iBLQdLJiCoaJkgFuhpbb7zj7S7VEKSZHKgfc1iRuT49eLYNAbUKBF8Q2k2fscEb",
  "key17": "54zG4aLhFb4ArNaDow2smv77GbcNFkZwgFrTxHKkJy8acCA848NcZ7w7THDcfc77EHSEi8akCBJoyxNx7uKSPorQ",
  "key18": "3wzmTRc3g73nHuc9JCY9tCivGpU7usDp2nJW5wxbu6RfFSzduKeeiMTu5wLaE4FggTXr4dddbTy8QeNQLctpzQZp",
  "key19": "2WSRAq6u2BJEA8XGEcdeHL7S7YkpRKG97HxV5AnWnkpZCUrhvCFYZZud5kvXGNr1N14GTXQDYtgnhJNUNxiX9Ji9",
  "key20": "2yi6LPJas9rasM6hZUfcSp5Mun9gDYoSZm3rPoeXzT7QNs9zuU8EDAem9ogeRMjPnCRpWhVRDCnYSM94GrRLshz6",
  "key21": "3mt3ei85gv5DvX9yNV1V6kiF6eXwgwvCfmU5dQWmrS8MUSRzMYobD5ijkWshR3z4qcWgUFY59qZCfXXu5BpN1BPG",
  "key22": "5nmNDpD8KnLNWu68NmaWz4hm18L7TDgqDGqvJwKPXMdZbbR38hNfeYtJZe8C5bMXRyAgFJocfpT9FFyAzqnu8J65",
  "key23": "3JArWoD6UuuwPZEFJ2xCryioK9uXWmX1RstL1Q8zxbk512FWp1qtimtCuHY8csmDXEXJsmFL1E8gy1rEZtiqEMfi",
  "key24": "5ajKngrkCT8i2BqbwHEMzHEwPKMDHssj1ptHFSm73Di9RdYv6DkNAXiknghKyYgTAYsPnmxzBXNnC2BwsLQ2ofDM",
  "key25": "4WUPJmMHJQbgvhPmK5WCe4vwyMFBoqQVJ9zwjKH2gn59oxYifDKK1pCPn7cCvVx2sVZK5yvM4LBkE3vurvJCupCo",
  "key26": "2ngpy8M8R5xF5qKazLdaTKu1qyXivf63ctvd2cYuy4GYZuGcsDLDmDibQCQWyGjgGuz7APmGm1HCBkKjivQwoJH4"
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
