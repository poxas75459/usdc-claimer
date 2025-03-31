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
    "5c8NBArsBkt3CBhQ81PQ63BXHK8s1dG55krnmsiDs4MkqXx3tEVRoeD2mJMcAKCntNGQEBRKnhDBFx3eELpfFcAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pHrE1WYg6o3Pyd9cz1SC8HBAbjtMUySbwhJqcZB13wBzoybFvKPoMbV3bYFjD4uHcRp5W5Cdzvg4EHErrbWxGUs",
  "key1": "4YhXzSNVzdH3LAPK7nUcWgmAK8Q91DZhxJSMz9MFdY4hJifp6H2u276U5KQB653GmGGWSysX6JiZcENfX9Pa4L4x",
  "key2": "88YS4HkX2su5YPhw5kjx23BR1hvD4dYxnDfwNPV2wXBsN2Tw1V6hYGYGTJWZqmFQna2SwtsPhGcJksjrWXV8oVp",
  "key3": "4PLFh92tzaRQ5RGzEFEdt312go7tz39jSKDtgtyZyRHEMEi4TKBsA6dZEzv7DJTeNuGHyUCkXyrRvbMMKmLBRENy",
  "key4": "5C9ajf2E2U9ESB7Rij3RBSi9C1ihv3HVkDsCUjSKiSAZcBUQm1tcndXxdy1KFw2awU9E5tLQHErm5Q93muZtqmMw",
  "key5": "65vKRjPaihjT6kBjLhRrDUpNZg9hye8kN5GFuKRZ4dB6R5aLCczEQj1rneZqwKkkC4h3b9TMfsUddcnZ2mPCppjJ",
  "key6": "42Yjz1UG6GxeBsANLGHR1rDPhxMK8ePTGLVuSnNknBcEAGVPcY12Jgq1vquExwsB5HFyJaFk7TRjE1PU7RdtDCci",
  "key7": "5BkY4uqA6h2KcGLsh1rG6EwK55n2S851ybZKiAq1fgaDDZx4xSG4PLVVprAAGmniCxVVXVe11WwMaaQEkvbgv5JW",
  "key8": "2vVnXKgdac6F3WJH9gfwttex47RG7wfeBqT3pTooGj7Gd2R1sNzpkuoDFKeCTjHmq1puioQT4Sg7yf7BSGymRaaZ",
  "key9": "4hpWREFBPZz3rt7wQnKGnGGnqSMKnbc4DWNn9dkb8daTLnDoGtCGFjyog3RjouEsT4j854GJByPfd6w1CeGv5W6t",
  "key10": "5vyA7eB5Lgy5VURcyaPQFzKq5K12HyDwiNZkQjpW61p1PQKnGwpy1HZSDuBa6SY8p4RHEmG22MGSwijvQjRaBxgf",
  "key11": "gi1GeGroVRHQY8adc8xcHn5GHF3mM9yN7StzXnyJ2vRMg6cVT4FFs8Fx3ZJFPnDfEbqypVBRAYDtpMhASUNBWw1",
  "key12": "3dSv3j3v1HpuR3xnhrEFE6B7unZoLrj97uhb5VGmivZgb7VLczjcVS8ngbkzdaEu1irqh4TPYuD5xrw1vy1Apt55",
  "key13": "9DKYXD1oFvGNcJ949hJuQ7o1e9kugvKd95MPVwcZDjchUTBeBZ5jHPe3xAFfZtUg2RLegQ8N95gZVbe8sfjRTGr",
  "key14": "57mQNcxt6ZxtFEWeaX6BR68RtpZVURKrvi7u5rqkJMgBjB2s8Z5EnB2ngkZyxcXtYdQWnB1TftiYM2SYME7enYfn",
  "key15": "2D8wii4cqQdEnzVvUAp4TaeNApGAfWQ333BBRAUMhGBPJLpZLVLRXeRr7MG8ae9WEZTpWTHxv2xjnZbVhCLt6BNJ",
  "key16": "XsWccd6Qq4ZMEMvypVqXPR3tCjBfsqdVq2vNL6Y9CFbTbjERX9sEW8DTGVckEJT7x7XdWNzWsRgxBmoau8tJDGx",
  "key17": "oP22ov2qHXdzpBhXzsejmy2vLc9xCyAMsqHvMFfPi5QYUZqZsoVFpZXrQ9BdbwzzrRrC8XLar7i5CFBzW1YsK2V",
  "key18": "2uFr4J6BGtSwohm99oLznsSZg88QrWBnWrCwi4CtqrwTJ4YnEj81RFx4GiKGycd21wpfaqGikkt4MQja8q5EkguK",
  "key19": "3k2kKN1cQz146w4fYheyv6D17JWEgd8NC6f69uoS36c7dUhjgrbna91iDEcx6qzXEiCxosVGKPwmc1Y92DpjMW22",
  "key20": "hgJEePuprdqLrf699PmheHwUXqMh61tnGs4TFw4Pb9N48ZAEqkTnFytDkmdEW9k61XQor8yfjEgjWyfXY7nbSn5",
  "key21": "88JCXuP9n6wokA9PEUYQgJovSVGACeqzhznaAAqG37VkMTjjESPG6iSzRXD5xK8LySPBYWAEw3pf8Dnf44JrSg1",
  "key22": "7Yc9Y6dut7sHmWMAZbXs2pwMwmpQof6vbVZRGmNfPd6L1Miax8uKFfRqb1F84DXrCTeKvpR1H8LcvTsNFRj5cPf",
  "key23": "4FSinesf1ubP3jufgvnq1vUjYJWM3fWDdobMddFyakiv6DMZJaWaXtdEKkA3A4K9Us1YDxU1Yo1B5mBWrkbUDH9V",
  "key24": "4HFpzwfPhFnBbf5M7k1Z7dHNX69ngvrCEhJ3hkvdWPttHFnmNGWemdxnZvKhebEQcu6r7xcpZykiu5bYtZDt7ngm",
  "key25": "3LH4k16LE84upy8NMKLidTL76DgYqQXx2sLUPtJXZwrwpDJ23FikN7fvbyxCiFumcSmddGZkhsvfPmvbuChZS65X",
  "key26": "2txus5LiYKSR2MygEthdArr5t5HZQFDxcc83Xw4JU16eXeUCjZi3TeHP5SQHxGLZRK6dwSBruLt81PuCJyCJ9GDg",
  "key27": "5Kufs1xEaLz9ZsiHyPKe4263Fh7BWVbTtTqruC4vrJ9WMLjsSpabhoj7SU4bSMS42vdn959UtEW4RzQeNZgqHjuJ",
  "key28": "3UsYxAazc1ED3YWGhtFndmcXs1f9bBBipm4hfKXUB9DifVomvT83BJx87jjF7K6YgUtYjfBWAcfe2Yo8uRYCSyUP",
  "key29": "2XYtjvUsiKLxPHHgetnci4pb4N4M5oBUWYECA6FFjfJrXhfgLFVdXGWvGLtaUR1P2g8hcuyyMN2qsctyR1KjrYPR",
  "key30": "4awBTzPs4AYM6wxybuS7bnEbWm1hZv9uLHydxCAssHsmgrJmRQWCACvuVXxRUjWr6E7jn1dAeiwkt6TWiZakdMzf",
  "key31": "5c4PwErsyJC2hWbKWTWUpmsNotc3PYCdKTReQUfBL3cHiMXfyu3GnqACPyRHZ477QAmdXHdMrJVTrJjeQoepu8ds",
  "key32": "4iwjb2pXM2dG4ENFNcEpgNbtmEAnebeMeLxmiRncDT6zesFHFAHgq9PAQJWNY3QMbpEgBHuivDhadQJKQAHTPKDZ",
  "key33": "59Zf9nJihSCsSDiiWBbARgbVjuz9LhE19RSHx3seCe4pgKmZ65ivuz2WEeWK9BGYY7Lg8pzKAG5yEpAmABbo5zXw"
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
