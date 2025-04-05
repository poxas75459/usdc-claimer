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
    "eTFgguFQVmqnhBpAGVJ1sWU2di8V4WhwmA3gmPLKGvCk3D97tZ7XNX19cfmCTugtzjhPJnm83xvHNvWEVJhzrZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44cfFXXU3omeKEvnsZH3vAkDNFK4ezS337aMWJBP2rXQGacgwM8nwvdSn2kgq8aoZWW3bV1QGpoaEd2rxGcjh3Z",
  "key1": "4Ah8qCMfRtyqgnNMnYREiYkvPQk8vRXUtxKfMQN79hMEdMbe2xPD2FVpv5jwL72MmV45nYq56RsQhxoyq9Db7dGK",
  "key2": "2ugvWDgQmSRBq9nNjapScrZXPbUbew3C1qQXhj8WY1yjh1SMQvFxjALc4kdVvcTsfKgytF6LVBb1vYbVVNT42eoU",
  "key3": "2uG96BMo1GAcRv2CvhwMyJkw4CFScd9hPPLQCTQ9m7zCZEjp6gXbahsN39KxCxA6Qer3w6kh8XWxPZqYrZBRH4hv",
  "key4": "2emEqEjFewiuVopFGMZuXwonWGbSSqDZ42Gi3CMjecQSry8gBhwbCQ8H4rifpQP9GdSNPCPY6eyTs418xX9k4PNQ",
  "key5": "5jQ6S4Ezq6rwEGsQ6huHpzyt1eTJnNEBFh5sHjTw1Y3gT18NubJ2ajx57vbXUiEnb6KagAbCgNR1nqqZ44LAVgRw",
  "key6": "296eBmc4TMwUotVw67rS9KJn8HUqS5toi49HdTxJpmzC4T6nWiKHkE5Vz5a34z3T4yo7rYrp2UyWX9qxfavbmVf9",
  "key7": "3jYc7YDyritfjnfGYrF8AJLZVZByvYxzUe6VkqBZexFZUoybcdH8tLbEMytrhcuFDTmnvTC5buy7UbvGhxyw8zrJ",
  "key8": "e1JGNSsjzh22n7FxtdUHxFzCnNYZn4xAji28s3tjN6DMKCaNeLQL2G1eFSZAH3PcD3ZyZUsS2w6YdD7D4HuRu1n",
  "key9": "2ArDFp1wW28P1tbCzakMKzjhxr8uTcEjP59Pcruz9p6RrnxXomEYpczUoQXswmhWJ3tFsYh54UzgcQGfqfkJB84C",
  "key10": "XPSkTVJrFQvWtQUtEwuZXiLE7aWimeLkw5xGkLp1Eor5CDsq8RaYgHJorhvJMJMabvpkR4Sv4LLkyJuHU1g22Fu",
  "key11": "WqnW1n146QQZEgKe4a3fQ7oiVrpKTVpSMVfn3yb1RiWbJ5TLcuJ8fdyWQ7LfRPnrXLvFJmb7ZCVxPbRfPuByGQs",
  "key12": "2KadNyjFidtpZxMedGrdy3ydgGoHkpU29k4DTijWVahyCPtG6Q42Pk6AcvbgrEfJqn7UZMsFjpXytCTaudvd6e6Z",
  "key13": "3pYZQBAW9oGabcjbWAEvWA6NEaPK3qYMnvAFSDuz6HAzeMZkg3uqWrY8pigm4BVaGHjnYAaX435kARQ1MDSWRoFH",
  "key14": "578HAG8kYuFFMuWt7YXt5NuqbL6EYCWouyE5gLaXBFrY7KF1NuQoiY5C5WRc75UaK66rAcPMoiMq3Mq2KyfuoSbi",
  "key15": "4WuCgwUaJjmK23AsvQ3Z4ZwwEvkzUz7VAjMHjU7S1Z2Efyrqq4217EFYN1ihnxYQ9ja2xSPpQbCLRmacc8KGF42D",
  "key16": "5DyVtZxCyamLiJhKnyNHYJHrKeZHDy6vLr4aLKnNu2o7TszSH7AfTKeUjhLNeTE6nsFJ3dNDoiShNGobcUiJCSq9",
  "key17": "3H37NZ7E5JKRHEJLBXhwRHzeiMzg4QJWeoY1L7EkHiENUGjqSHoYhCqHaYuCdMv2ekABzj2YgMtswQ9EJS22GT3g",
  "key18": "o5iXimo61aaf4X4azLDvkQAW1k79SFZ2TDLfq8swPks9p4j1KHtDSzbPm4Dhs6P7d342cmmhYtUi3N6LQZvBvDi",
  "key19": "2CZDXhc8KG7wKAPr1gqUGcdzDVqJDNxyTjDMi7xWBks1Ksxgh72MwK3pWKDnFfhsfaaCCWZ7GJ5sQ6pdq9NcRAW2",
  "key20": "2s182FivxZAeU8EmvCQ8P94xVRchWKXpEvZGC5UeVXqzzEfzmaHW8fcnyQTLtB9aVo8c96BRPcDTwbZbKaHbQTZt",
  "key21": "3tzU3mXn7hoWutgbtGjdotVjvPjKB88ZUXD1bLepheDHVmeeJainbCsvAcUVky8kjH6ePj1KBq64vMFXra7ayWEH",
  "key22": "4GVgtE3fFci6rCazAVocY41MBvvPf3aAsLtkxZrzhZWr8gUvwtskUNN1c2m2QaMXmYu4UPFAtzYDR3Qh28n2NP41",
  "key23": "4ffKPiYUogz65Z5s681SCryESaD6mKrhVsiM8aRxU3ken8uFQPbrXZYDnsd6pUp1wqQWs3dLuBLy7v8iouFpmCD4",
  "key24": "2FeBxagA4z41LEagTveYTZM8o6uN8yEHXWuNHFvr2JTYSiwAPCjFx7d8xaH6xwqoo5indhHXgQnSCRy7cu9NoDUR",
  "key25": "2HzDM2XN1VCPtkL44kfPVNTBrDXkGDHGmqZJa73ngEGrW5bYL2nwL5XmTmM8EY4ahcZK6oNxwe7rJKQ6whYbKjdb",
  "key26": "2FwpX7KLTz6GmkFxKGVavT8xQhX45uxXLWtd3noxXvSitK5ejrdvnd44BBrpfcf9yvBM2EmTSj75KmUxcr44ySbi",
  "key27": "3LxRpceAe2SZEY15ifkb1vK1yQbggUw5Y3NHP7vdMG9tRMzNoLepaofxsmVAPYr4KSrdHtJpo5PjksMZLpop6uBJ"
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
