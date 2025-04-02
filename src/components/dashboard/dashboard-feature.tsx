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
    "5NUUDoKJo9ySZDcAKE9qDc2Bi2hSMm5iCsqBEPDP72z6FtbAruu6w3FtgSSCVhDC9MmD3VUYqdFM4PDa5KmTL3x3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L3iXZnVniV5h3EJiEjQQ3PtWsPVofkx3DW3WBm8RGKSNi3SSHuGDGTxz9LoPVWJVMuyag1Skgvyo399vBUJCxRQ",
  "key1": "42E9MWzqRpWGtdYYGEDTn8RQ9RQoXyNrAy2exxf9zE2C6BXk28NQuZn5pUKgGQCfeWXZVDKGTe3NAdzChzoPB1Qz",
  "key2": "4kQFP2mG7Azvwuzunsemgqs4j6qySA5JkPE1jXfUCZQiJ2F2wVQqbGifY72GFSejbPdpciyQAjYNGDT9h16PCR97",
  "key3": "59DpPfsL56fLhTViUgn56dYdRqHsrDyTprMN81xEvzEzqo1vdEpnwaiHCm35jLN1EJm6pqxH4BUGz4EzQe1WwynL",
  "key4": "2hpRxveQocbMpyLYYdfWs4aGYWVFiCw2f9KE8cQrW5doG2PpHzSiBWAPQoswRy6Bhm8uKvRXN4wpYhDbDyHRnmmD",
  "key5": "3ouQXX6E9Gi1GQ51n9u1TTJrnU9RzyWpxv7HrT8T1yczgN4KDgqWspNPLrjbFCvQQTMMzUV8eMfgNPg8yvUGWc9V",
  "key6": "2VyPt2fwcQVudiUE2QrqLDCSdnib2wwZJxojsMQrqkzrpXam7ross8Z2xtnaFhRje3TzB4cz9xaoR5vTEUVvqSDS",
  "key7": "5inpAeDgCzo5KnRAmCjUfSrpCwfddmQNaQXb3oFfvKdFfHrJUFq8hWgt8AkUoKQX6T2E3zWhWnSo6zyPG1KB8XDU",
  "key8": "4t9bNr7mWyHhgv6Faoi1nxiEsuKqPkaoEwpUKtxNC8dS53JZUxTnmNdkfhs9zaHXteKnTi7PyNaF6Tn2mZN8ET5s",
  "key9": "ESMNQgHBEMCdHkRtfe9t3R4GK4QYTy71RpHcGHP94h88GzYqY3xipsyA3pAWbyMaiNTxzBkshCjqQg6yt5XA8Dy",
  "key10": "2Mid8wNKHC2aW8u6dHcL54qdTCeo8jEmLMCLV92Czv38xw66X3hJUefBP7NXUN2BbEcgbVqB5F1FuS34KtyFsa87",
  "key11": "3HGbtGwdDoMVfJZ2v1akkrtvfPxG1LpTb5iSeHLp3Fxr2QjJeJt3ETXnir3QPFVKrYjYKyc6raKMWHYhLzA3Cygy",
  "key12": "5fhqFk5gpwfqH5y3k3cACeakvTag378gCQLwFsrfA56A4bbjnebByXAaCZDQdcgb6TWmXWaZJH3pbjMoEetzCZUZ",
  "key13": "5RRVA6YtmQf1N9ZqFLVYpCe7SZH2sjDJVgrWNRbkckmaXLLZPjaQ57P7Bw9NTgNhjrknx8KWpLmCBKKdjKeNRbE4",
  "key14": "DzJtcFuQjNVP9iK75vBBKCXF7jCQiSJ6bKtHWJXmN8UGMLPTRViuzWrVkqk7GSJpcf5fA6ZdF1TX2jqNuQ9awaA",
  "key15": "qR14UAFsYKMW1g8tKqSJYrf5WW5k6EwCsL5yw9VixwBbAqUQ4daDSm7Vnfiny9m8qEfLFt8NE4p9MtnRD1aPG6n",
  "key16": "4MLcFBonYUbVpwdpgUnXn2v6fuzs2RUZRkigDKJXZacgkBigGsB9i6tjF9Gc9RiTDXVk6QiCQ7hB2c9dz4C9kvkd",
  "key17": "3HyLfQxG76hyXgCGKHJaAyYV7KTAHfZpYhV2qABGZdRH4rVSRQ2nwHtMzYEPLKKPsNXW9w63bZtMTux4qa5FgYUJ",
  "key18": "3jbk8ZxgSexkCTVRmScC9s3NwPQ9Q8QzeStnhDuVK633mCuLRjNBAYyCRoJ2ecCmZDgKgR9prNCkaTJDdU5Uckbq",
  "key19": "2amWwa39oHNLSYskfnTwqRkEFK4jxhQfHY6svMH9zXRBqi7DGa4VSJxRmy2KxumV5nt3HWVf7mk7SaxaEb3BKxCy",
  "key20": "4Tqyo8Wrr4KPjQjeTHM4gkdacbPt8q2kCcCpqyLB67WGZubybFvZd8tEm3fVQw2aWr7dSbuT88AqsqrKuKHZTSSZ",
  "key21": "422uUgHMoibioKJKMDB2GxnuFTcjcmHdoPnWq4oHRQX9yFb6Y11xXtVo6UYvndytJt7boWxSBSazzGNMjqjJ3Cay",
  "key22": "YkjY3QuvB9VcBReMz4oxxP228N7y3zkeG6fsPKEQEEH36LwuZ1dCy6hyni27ecBcfke1z8dSLJwJgW3hPfr3Dip",
  "key23": "3v937CXvKN3ndUQftkyDSJ87oFf692i5EMdR6Kg14VqGkffFdYUjAghPgVKTuunagwqFJfTA3DRsqnr9i6k6crwg",
  "key24": "4AH795jbPgMVPpLWybVCF9y3gr3659h8CBWMP52yDaju8d9rzS5CXfFG4MUdJMVFjbCwgRMhLeg5rGMHhTZ1UtcJ",
  "key25": "42zbAp8QD629QagkPKJwSohVohYEA4puvcNgia6dtedv9WFfmruKvgsmmJo9XmZfzhQD4U5q3oyGowK1apbU6k2K",
  "key26": "5C7EsSb8BTYsU9PwLLSxsUqJX2TnNHnpPdx69XU8KG3BXnUGHj2ygaJgKYzPGrHbErzQshDYH2uXtetCd5Fqvryx",
  "key27": "2P7ndw3M5R7LDR7TpHyNSbJXqZD73qnVE6dBhTiGxxr22eAwf3pgzphdjJ57oRerq53oHiTRm8Es6fWtWAW335WK",
  "key28": "68JmuurDnmYo9rHUceAbGHQfDoockfpmaRujhu52oxXW9iNxPE75N2MytUh3JD5fMWkgu3Bq4xcsM4Su6LiuWt6",
  "key29": "1oUgF7DQUChi6wYPhioncKpPAtca2BfmDhGCUWZts3BuqhQ2zFSoEhScDY29ZY7DytnuhfUGK2sLtoRcUrqC1vk",
  "key30": "xTJ4fh5zS9BWRyq7pBcsFqAvwhMQVfFXYN5EETFMeqR1fgdKXMyPfoHcSRmHEH135q3m6j2miGkNsKBEuLymd35",
  "key31": "5SXB5ZZgMjzRjJWpXVA6bvnvPEFgBDQnXcADdFhojWiX2mTUHCVFBT3LAj96FXLwY8oJefCNJA8i8nCYwiRhA4qd",
  "key32": "2S9i39tsh9Y2ucbtGjnVd9UA9KPQKLsrT1p29g7ctMSP2kSfcNidpF9ChVunWKhYU3wycxvcpoaBv3hPFU8VeJzf",
  "key33": "2462M9sUgwuZJMjv19ezJnD56UW4qJbTPvoLajjjHEDo3mB4X5zayrUrKFfYFesHN6cbmxK7VD57u3b6xJTVgamb",
  "key34": "5MspkuLAa839BsuuCs6T4oYx8q3BUNSBeRwPDNWvY1P97HWg9tCkjdEvv5iGSprmAWu6u736Db8p6hdr48qUtLhz",
  "key35": "4aEeMvRzhTz3HdsNZ7nztPonFLs2mzUbd5kvV4UZjow2RbpNG2MDER43u1uxQNGNy7tiwTstoamxJYGgegTSBh8q",
  "key36": "4AzcWZ2puhR3xP1qWTAck9HQFjEeyg2gYc2pRDDMya8shRyVQnEV5dRvToeNPAf2e1MQkXV9YwCdTHeKUfJDDWx9",
  "key37": "2CghTnefvxLmUyg4h2NbnLwZ1aZdLCLHWGhyaZyZXuH214DcrjU3UbqZqWfJ4DrE5X3SUWefSWJk6AzCtCK7UMnR",
  "key38": "5taevL8gqyeE6HZEgzVkHpBhXH2KH2We5DeveDSAj9HoeABfQeLcozJYi2ZPemCSmbWAas5oEhEUZjKnfmh4AMhk",
  "key39": "5QqvxuUPQKbp2o4Vsrg3AqUEuSuQAhr9ivTeZVbhBqXM1RpcbTG3M9ArY2uqfQcV9p5ZkhqGuF4iGKcjbRYPrc1S",
  "key40": "4RQvxrxbPR31c3qpbwpANfskvyohgeS1Q6xUs1Fg2nj62YfJqZ5eibcZhP5s4ZRXfa5CfHaAhpKLsgUiWJX4FSXw",
  "key41": "32kvHTzhcE6gsKzUXHvYDCzH61SrrDh2PpiMkw1pHRPiZa2ToFN4S1dFL99A34zeai2Jy5p9h86g4Sf6TCxEmmkq",
  "key42": "5MmgqxjiCMi1evFRxWuEkxajkVW3ySzQ5EHECb8bgYX9x5QwQUuKASjizH1riU4qx5xLY1JGNLpm6ExfvpDh1CZS"
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
