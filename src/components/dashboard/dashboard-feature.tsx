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
    "5QDCByuXX6XAGFPBNgW1b6KxeDcBSGms92aSLKwfiCYEB6NC5rsVwrzqbjo7gppgMWcnK84bXjEvBZ8bwxyDiyGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VTUMi9RDFxazHjLMJTqDq4VMpq8fuz2X12oc5fC2ySGrnu7CdMuxNVpzdztjFv2hFhmPiyzpCHypN78Hd3atk9s",
  "key1": "5vMsRePyyr8ePs29xeWv3cPh891KmVm2gmZYnb9VQ3KrwC5342qLTCkZkuvv4ycoR2pJ6mSrijG4pDneWDebGuLb",
  "key2": "3oeuRZML7pTuScVJff5d33fPWsqjqszvgXKKpqhqD79A2uHbc54T4ikHKwjnwdkrmjcW7EdAeypt4MCu7KXWPnrA",
  "key3": "4dfZvGK8dJst98He1LMZsuUf5VQCYdrZP7mnqgFgGXVcbACDkxZe2YqJezMw38XYGmLBwShaU6Zr8ajzkpdKCBMJ",
  "key4": "2HGKpnUqzwwewWsTbuHdSVyByD2k2UqNATXkpwUREXF1bnUYtu7D4xwCKdqVcZ93Gdtg8zZBB238WPKJBzNRV45x",
  "key5": "4TD5eS3QPug6uc3k8ggjX5RCnYRyQvp9DDzuFpPAV4RJkhEbP9ccP1MJeVY9WqzN6socYavcuZGTBA9t8usK7BC8",
  "key6": "ehkGBwFvoZyh6MzGuZMYpoK6QRdHsvTR7zv8zu6f7cLcDb3XKw88FNHoixzSFMWJeLJ4hUFqD2pa4vZrJxDDW8F",
  "key7": "39iGWwVaegTuv5P2BY8C7rcDwbJ38UBhwt3BqdY1dCGy6b9Th3vUqpyQU6mopubecHKXQ1wcBCaXdnbFp2e15zWn",
  "key8": "4zURbBpkfjoQSSMX4wNQCfNA7ceB2sFQEJLqRWaCNPd4foZMaR8rB55tFoKDJt9NoZXoQ7TcLYZ44K2of2xUXfYQ",
  "key9": "5aU78ZtN75fH4fsXPb6PNst3bU8W9r2RNgAKrsQq4xfFTx5s1DmdEGntv6kHvExvBcHHkTARsbo2kisN69UsWYm1",
  "key10": "3ed6nUr7NcYirALWK93M87nskZG2D4osUeEoT1VUXZujY9RT1EREKs2rRq4tVDhYtAynPRyRW2Z6Ej56jheohQic",
  "key11": "3i25cY9VBCqcDMibR4wT3W88yWY4vy1VLnozE6AQmgiSzyW5gZgq5vAH54G5xLxDRboZ15PURJPZTBtVs4KnfNWv",
  "key12": "2SBgmHvvAjQ1zpeAGLdahRHH7WP5ZSLEBmF8qc12LJFLuseBV8yuxvxH4UZ8QusauLirhA27ryUUATa41iAHMBhn",
  "key13": "2WqoEWUqtf9risTanJz9C12LeSDVmmeSLXGShs2YSWvpaw2ifCvervJLGPiZxadujQ1JFMzBXRZs4xzsHVsyn7ab",
  "key14": "2C9ZeGYDTV7PFALrtvy9MUw4QEoHkXHSc6stYwSokTacxXUTCHBK9aKNLRS5sitya9sHtzEg7GpNBEH8EoqvEj7s",
  "key15": "3UoocTbAeXNPTZNB5b8MTJ1PoZRfN672WSa2Q8JcGbsz7QEMLhzza7CbaxWexkwhEwF9guPDHxaVaqd3ab4EP9nA",
  "key16": "2fkgrQcESpk2yR4v7wCB914hufuwjSC16jf7BdUGLNTimQLVp6YUuiBTtJGTdUNw5khgpqDnopir4n6kwKX61WMm",
  "key17": "ZmszszoXoLPwFkmsNiPV52W3iXLyUdepUHV7mJvtSVfi5UAFCq9KSR7DPAhi1JN2yRpuYeseNqLqccwkFt4WAHk",
  "key18": "3oS29Lq9upu28JrV1gnxwkxynoXhH6TchtYGm6G1rTyq4VdCjDtFywrtvZd8ii1b3tisL7VKw7ZtVQK4aMT5rpS9",
  "key19": "Sj3zmzhk9AizuwJRX4iyqyPxETGtWPFmQcsEBzwuU4XD7kdqVFRTew9VVMEJHg1hVTEy9m3C23nQwsxGKhgJeYc",
  "key20": "3sWBFPKv8kNVRSyWd5msoMd63frgAHrtLkJYyNuL1MdFqocZ655rH7NU8EgxF39hr4tKLvGCxxnwWwKN9ynkXUhG",
  "key21": "3xfpnR9n6cRsKv3M4tXuw5g1ansaV7zaNQUaVBtQmXpK3ztEDHHFpFRVVuJ9XcCDwgqSYtcMEMQnMF689Frhyuo5",
  "key22": "JRW9d5vckLghWfU1GYt4AdNo8vVHZHHGH6SpiEQEAFzmBqkB1EgBQqqBT2phajadcQDcj9QUXdzBzEsuGTCcokF",
  "key23": "65VqvSK2BB13ja6XKsAjH3nACWTxQSuhp9eErMvYsQDCwBRK3THMxKWPL1oYVwCSKCgtGkVqJyAfiLMpspBVAV6s",
  "key24": "2ba5BTiNaUkjSZNwznCsi3mg26HZn1sNjWocpivG6yeeTwzrX8yP157fsX91LEScZiSXndmST8YAAiTZp9DqLmL4",
  "key25": "65c42Cd4nqBAjVFC9qtBNYPNsaG1YXwWZrWpt41F7bTXMQbN5A3zZq5FrqTdGGLbvPYf5xZZVz1v2AmpdT7X2N3t",
  "key26": "5uQ2r1cPXrRFUiPYdp295Ggfv3GBG9h8DWD2bnazH2kwvgsEmnDJKKHkzd6KTmqwyNVV5it2yQFokPbQsWJWBGyr",
  "key27": "3JrL3GxQN5DQcsVqF4yiLtsKDDPoZkVYjr3hsQUfUgXBD4HjgSsREvw1x5hnGnLnsN9GKzfq7judtqVRH9shjNbf",
  "key28": "5Yxm21DBH85aDYe1NcbP9PmkM9R1fsyAGHHJ6w6LUjqPVsH3Z4fEcxYezfkTsnRXPkwfyzUPuPmeCZRNMXSgnKdC",
  "key29": "3XvM3tKLxpVUSHkAD96VPbDzzKVPLZjXz3oF7VBgrNxACYfM9NWCxjqqbzqMEa1KybJCmX4VUDhPg5UHd4Z8c3CL",
  "key30": "4CQ4rg71MNbtT47m9734C9Mw39tDCztaDGetXsfCQPBMmZUmgy1UphnQgoWKVPmvRV2FXomqrt4VtDYPgfKuvUng",
  "key31": "5bHueSSb83Z8RjuBNkjiBxd2fDUnq4u75gTMsvPPMcNZXSomsDrevhTXTFpAmVNbuUJWYBo9kQPo8NJrADDeeGwH",
  "key32": "M73ysUQ7tXbhM5fLeAeBotrpVPXB7uEX3X6s2yN8a6ofCmwAHHGqsWNnkdKkhwTdQ8PACxGpBFWKE1NyeTdwndN",
  "key33": "4q9tuL1FEMpqMjLAom1CXfYWqepsLv8CdXVqzW7KHfPpFQNmzLtmZcAa6XhyJotgLMf6mwqFjkPXs7J98f41rvfm",
  "key34": "516kNeJ7BUzmxJu9XA2E3qX4mZ3G6jf3dZh99xZsvW6Qb1SfLJtuwCCzk4T26nuv4CzTyvyuAzL2AFaqbqsGoGuK",
  "key35": "4zqdkX5nj6gzpVW1iggAkJAVXEBYJSmJgiJZVyNBWoB2AbPGeoNG1rwaWz4JwCkqosyqDAcKKNcSR7HyfszXhDM1",
  "key36": "2rhf9m9CjVjvP7EepgUVP3kM8jdHVmVz4vENkYbncmZ4mEsX1MFy86q8wieJ49EEWDaLW2cYVf2dqH6kgLwbya4Q",
  "key37": "554RTpCJamMzjP1YA5b6hQcT1vDWCM3g6tFLjfZ353MMeK7eoxYjhVHh4kfqm629vzc7wWnYa8sRTxBgXMfPPKN1",
  "key38": "2QJRTdjTbWEVfCiKpdFqmaBafmJ9Lvek9fnasDSF3DUiYAPUP92szQf97eKk25LDgCMPZAaJD2QK2AchHiccd28f",
  "key39": "2Hxddx5de1ceN6gDYHfD1ZxBP2C1wiMTs49QZ3JRKmroCMaCvbeDtEmcjFk4o6478yMXduvt9vhK9oYu1f8Feypz",
  "key40": "2aTVpzjwLVLyaqpXaCQJd3NodwnZ52ZHPGtDmLqXrppnimi1nFW1dqfLu7rrgPpT47Y9ZBNhLSwdbGRJhzj64Gaz"
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
