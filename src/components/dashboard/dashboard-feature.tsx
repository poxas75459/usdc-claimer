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
    "2rmLfcxfWo2vVYBgS1Trgg1gGpHM6GJERBuscfJJEZ71QLjPiQi88gdyMVZcqpzQX3Hnz3bmGZyzk8VFHm4HMVh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34mqgVuapMv36CkMHeK6NUrQDcGtRqHSrZBDY1bcDb5vRNZw2CE3kjJxenFjWgiJn9KUgnhx9Jp6FdL8auBgYAwG",
  "key1": "2f6NCggm4nisFWf9q7UdCGeTvK5zWvGsNBtgHggfqK4GsjUZXUqMevVpC39AtEsesLVCEDb9F2ta2b5tJafL3eMK",
  "key2": "4CRC2fgVAs6kVwvpL9VnHcureaa3Gy5AJXhb7Rzc6F4sQeThXbjga75wEVbsgJVweLDfFxjvDAwSX89XhmrJaxnz",
  "key3": "3KdGfMxb9agRhCntw6gJuWi9xK7aGbx1nkNiG723GoHCPVJ36odrrtKzHWLiwCiTct9CB6UrumCXFuT6exjkXQbj",
  "key4": "7iJchj9ogrteHwmEKEXBedi9jXcRfeXC9npju73iXyRV3bHpedW5ddsQ7YEk3gi5xbAFkmCWidEmt8GR95Y3tQC",
  "key5": "P6jQbqyUHKnH7y3VTX4SG8ZiQXYcXgH1jL2by17cyJAKfiicu5Y5gnHSUCu8ehHibpoWaRHp3ShX5v5vg8ALgrx",
  "key6": "27pN7ASuZmdFEEyQimg6X6zxrX3AK7RW1aK8BpTPByku6CxDs16PB1rwvhp3aRM9KuZccYjMhvYeDgN7kQgniFgr",
  "key7": "5cPuZBWEHwny58yHgWzQLc3G5bSTwS8dy6sYQid3LCztTfb7wzcAP2SNGqmXvN5LR9y1n4RvyysotqqKNB4QMsV6",
  "key8": "5aWafggt5NDKXvC9gVfPeHezhW7EKJiTmfPzbetew4xEZzSfaMAaNCipGnhdxZMC6dydrAtPRYcGb1xPZ15RG76V",
  "key9": "3vCurU7o27UYRag4XxmKJZZEmyrHaAQPenwuiE6JSX7j15gdMt3JtkYxxh1fbC4HxBamTz71y6pC4MxWU23HqNQ5",
  "key10": "oRrnNWnTpx1PWFBV2gC6biZgcAZoc4xHCzmMcvd4FBJ2svtdwqPeY3jSfj3CxpsuTKExPXbY7X7TTkeX7fvJ1wb",
  "key11": "67oufS23R7jDsbmnYWPf4c9fHYjp686xVqn4pr3XC7L9nB6dUqmKYX1J7oLsSJUNjSHPW6uc432zK9TZQNpqESf7",
  "key12": "32wtS1Ufb7zMWRhYvZDgKnp3WzXZ1ToitEXv8zFvh56KLkDjEjSabQr9WHws8BifhjLzyRxWWJxZeL2EZ6R2iTwJ",
  "key13": "4647zNW1JyiRUHiush7CRGjcRiKVo5V1QHgt9KCK7xvyPSACMfv8BLMWLJWsanWCSaYNmLtUPwSmfJrqR4BSE9bE",
  "key14": "4V7gA4H2wsm8UYKZqYnEpzm15TZGELuygsNZLqkwkW4G7Kr77U9HaRWkr4nb4BEkJXmy1DVgaRrJfZwo79u5DjZU",
  "key15": "4mNQmoDBhHNTFEHfn4SUpEAiX1cKVBBD8VaWN4E3TzgYJzV6wH7GLoZxjpRpEuagUjrYdtGQ8tx4GwycQ5DhGRt7",
  "key16": "Y5HXfTFtHbKcuV6cw8pCurKz4TS1PBwx9q6uS1fd99L5gshnyfUQRTKpVKC7w28GjvuY68DFqKjn4b34LtwqjQq",
  "key17": "22SLpQmRHabMge4RqEkLFfzrJR85HCtgShLmWerz4aMCg7ckjexiQd6ZTQLWjebdrywPoS1Cf3f2QKM2nsK2Fwrc",
  "key18": "NUrE6TC9eWZD78YqmXQqNeGmLHSpeW3wGWzHDhgSktCHpzR1kBQxGxq8bEpCMrGdjuriUyt9diTgjdhmv6zXX94",
  "key19": "2xuH3DD2tPJcnziVSaRbE4mnA9Ss2Q6v8rGgpC1EHTZQ7Hx9S2CdhjwoheNQ3RNoLh5QcHP7DkdQSRVLSBpjxFbf",
  "key20": "3xe5i3iDNrXyixYhxZHg5V73Em7q98FmAfEDWSMmNHJJrBAAwm1q7HnyqUXBLE1mPKo5cTBCzzQg3J7Xr4jvL8oD",
  "key21": "5Y3gDoEeKmZforqWChkcF7Ff74abLma9TbGyio96529sQxdehEHzv43sVu3miYKqe3Lv66itsQh3YBBJjnL4i1jM",
  "key22": "XTRPJwiZZQHg5qMNkfP7cZGKxUJhpFDTNLDh3X2reBE3Poexh45jS8kvN3bGnrTGe5x4J5a9gMyhujD24LfQxQF",
  "key23": "pmCsSP3FxwTZ7Gm7udfqneaJCMvGrAJY1upcDEvgLkdoSmUfVZkfnvc637yyY7CkkveTY6brS3uKQm46aQXt2ep",
  "key24": "5KVRk5mAJQXUJsweevWRxTjGYFHJsj5tdHCvXh6eNoqBbTFzxWcyG9gGPWXJEHsePoRdscPWASg8Bpf8xsBsonge",
  "key25": "4uWkyLaxv2xkA5BnFyaMAiHmgxoRugUq5EAzKLp9wLiorDbmPvfJPSRWG9hnRzNwvW7wXBa1gfpG1QKLEAe3teh5",
  "key26": "4bHqPHx4kDMk3Bi9qo177LfrMdKMfxpDsaQabnDYTCSFnaXbUaU4VbiuKeCEG5QfTXwwrW6NcLVj2Pg1zcu9WEdE",
  "key27": "2FFmsXdFSY4tofKtPwaPEpwZUYWFSgVBQBDzs8Phby7SPPufB4REmGtoCujkz48D4fiZLhEe5bjh7aEdEJcJSf9K",
  "key28": "4RuJfM6L9jAFHBJqgLuYFZC4gY81yvm9uFiEa2FFJiJSD9pobqhhyS18PWxi8gbWGL38cxm99jbk73vrTPcDoVkA",
  "key29": "MDJSgnGoqdS8Kfruzmj89y6Bsz5tExicLapuTZxyhi1KCjiXRq6Qaq4WzFiRADn93QfRCkykz5Gq4eDK42xjp5q",
  "key30": "5TX4UVHL5RSH9UtBvAzxS9J6WDpoz3ajpWxV3x7pzPpct8qizmZezfnB7EMAgozUkpMkfXwpyv8caWwy9k8fHZG2",
  "key31": "42hweKHGsJK5fKeP2djxax8YrZ23871K3VwAQ3VSiwapPWivE27GtYrLhDJCjCWLJyECt4wCwXcg8u3VKYS6wwNU",
  "key32": "4kSts5noKTs5rQyU7vArHdcGNWQGvxKPtb5rJVBieNzb51UfSeMk7Va1sYT9YMG4SR5yrhaJEuieF84YDn1ct5qQ",
  "key33": "4ZmqJSPBJAd9uhS1BiTbHhsR43stEPpBMCJTeDT1o54oExakWTcXqW96yFnEoPCQJg7mF2wXT8NwZr3nNu3XGZAD",
  "key34": "wtFjL8tc44atLaW3QnGVkFTTxxUCuudU5S4YdtkJ2zgWhURUq5w9xPbUKtCXY2PYCznT8BqSt8kbkfg7UWWNpAZ",
  "key35": "2LQLmhN9Ny5BwEnkDsJBhqex89q2SaUyizXpQcSVgRJwPmbZjCvEDKSjoHvTfmtP48Ng4Lp4yaCUUEkqvCKRCSVk",
  "key36": "Pqh4kAVcwf5WYpekCywE41QSxVWFr5ymhABfGk3nEovdUtxtvA7kvyKqHzpGkGwKusJWskUUQXvVHoh22jFFGaG",
  "key37": "595LhEVTXoic4i8W5veDKtdquMGghNrTyShAwTbtwyWQVcDU5Dp9WH17f1RJbUNmyMHe1k1a18yAZavvXFFBwokJ"
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
