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
    "5RT6AExFU1P2mYpLa432rbLLLttRMc2Y84yMm7FWda2Cy5K385E9ZonsC6xxvtHbSKsTtYpmSzBvxPJ1kV2QRYeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P5a9soE2bZsFoyyZpuda9XFz31CmbK2K4RuDsrsNeP4bLBkcdiNnqU3tJU82pk3WAZ2YhHCMrfAeYJd2gbysbqx",
  "key1": "5LxsgWuNySTP2fQLZb9vVmgoYr2YsmybZhZKhdacg8F2cXSDuC3qLShYLMHmrroJ8RBTpipKtsSZQA53Ls9ULc8v",
  "key2": "fG5CgfSbFZy23JTvmsRjQqbJmQ4k2NTG62m51ohY9tMQxxWG99Pf5tyq4ytCiKPFVvJHNRbJ8AynDqXkoRuW5qc",
  "key3": "3JNk1LMhvkPZyT4P5yDaG84ch9e7H1am4vTXsYGkxor2Q949goiBQTKA3ZK4fxY4YMRScKrZcNzKbDgZ56LE3n7P",
  "key4": "2KUtxpy3pxeKUAyB7ZLego8meTgueEGH7seUqgESLzhmuz42impQqRRYt3NUm5pTC7VPGV12ohL7zBGPfLsXnWMa",
  "key5": "24orVSGfZ9ZWodVSDemnJrbkDRsbhY6UFWC5knpk3YyR7ri3ah9GRRYD3Ru7m3poqF3NCfNXm4HwQKPSsab5NTc5",
  "key6": "5hS4iPhpYeY99vqrJ5rWBTaCu9RxZMJVa9UPia42SRcLm1dA87KuwCFNqjPQKu1fdRJiLezFp9PJJuR78gTNaTMb",
  "key7": "33bnzpcTVCZZT1HohjcD4ko3Sh6LSghKwaWzTDQU516zWxCTZSQq9uV5TtHNhYMhSQYB35iC6dTdpAc5Keghcz5r",
  "key8": "31vJe9fWbj95s7mBV46M6J8zaHNj8sUez3Vhrgsrg4JwoKrWw84iWp4NXzyQ2eajyCepECd1f944mYZtBNbFLvhd",
  "key9": "36VCApALn3anSJGY9g9zibmhswArdj6TLDaSUbLPPGfmZXhXkWwvaiwwCpSPoB8Qngp6TH7fjTz9evcJCfrBE58a",
  "key10": "msK5KRLCFrbHrMWoRQG4UMPvYGrUgoYaybesygawPjo4DCixK2fXcVzVd4XSaVagqaGmMbRT49ZJ7YJdaP28dKN",
  "key11": "4tdsKNLnKHvWPaaHHDuusDZqyYDeLM7jH8vxSxKZwKDNM3mWFNreuKUuVKivKd5HwrmscXugWo95ui2GPSxGywst",
  "key12": "3RREDw34yLHWtd8EGFGSy2h1dx46vW4JTLY3dHFnN1Lw9FYVEAM9M7QW4pH5UhtapxKRBFNQwztkJ1pjefb9iPu4",
  "key13": "5bTQjqW3n476ehXv7ZvvU3qQuXFKnyAjWziZnwY1QNDZgb5e3GEhWZsYy3Mi1yZYu5hxXCERjKWuDofwCYZPvGUk",
  "key14": "2dguUx41MpLV3xcZiwSetcqc3fjLZVHUasidXZPpeKjAUsyfusg9tHZo2aHFCeca9CEohWfMjphzoNUqmsbEqPWG",
  "key15": "27B2tF8Q9WpwGtXhBMqZLvkgqR2Wf5Hwu3riUrgPL3jUEtQQHLehjQEkvJBWJA1Kd6ZUNM1Zbo58Z5cETNBYPg2e",
  "key16": "HDntSJwrR6j3pmuBkxGuDLXypLg3QvKMXQKo2BqEtreN4Ka7zQn1Qi7Su61uqn6guVhmmkKRgZ86si3GtNtaZ7i",
  "key17": "2bJNbLHQTWuiJsW85qEdfMAfPr4xiCjGVaDhuFembcGp5L1bHYaX4wo1azojKns6G7ERsPEEYyxteJutRVrtdJmD",
  "key18": "QZiX9ymet7HUuU8CnXtnZJPo8GK99QWnfxoGfhrAA7LJXZBWRJ5FdA84Te4eAP8CaEnMKTTVT8b5bATt4ozGGqL",
  "key19": "4JbkQxZk1L2tyke8WoJRUi4mysit3VJy3GTNdtMEWraCnW7zzFsMRidbD4wbE8VVyrAbaR4yNkuCZE1bpcBCbWqR",
  "key20": "2Vk3WhCecfewi7DxJgFvC8VL2P1YbhcrG9mycuL4oBWpZGz8HxVn5FGf6kLomMkVgkw8DiL3grr1Gpd9CiDXBo5X",
  "key21": "4SU1eey822QTuFsQ6CA9nALf1fxqigHDp9nqYVcq9g4pVLtCFF3249tTX1b69Uyr8k5LPnUsJy1jkjLCWzv5jVcU",
  "key22": "4Sqh9FFg586g4Dz2zxCY5GwWyc4Hcm3CdWuY3ZntDCfcqqRVk2ZYbX9SW5xWZtkcj1Z1HDa1szdEqbUtSdPiW1FY",
  "key23": "5WBcsJWETjVF1dBcHkuiuEsPbA7BraJPkyYcPqupboVM6hNe9EqQZYqiG1fY6XB19nqyfgwokbCy6CnC7wcqH64p",
  "key24": "4gZCTAhrQrsddrLJQEfcrip5KcVCqqUT9EafBHwR35ahohBS38SykRyeVX2pS8khbqDXbesc7PimVRufZADkgyUG",
  "key25": "4HmZpTCtZRn1AJSqGGDkPCCu2xnj6AoYeaJVfQLy8gimzk5hMVegY5d5rwsBHNxGwzNqBQ8H2TZ4xjbk9Rb5W86S",
  "key26": "ShcjTYW7TE828GLmU8pJWCoQnmmgkwEUHKZem4saBdkA24VKTNQP6n4uhYTPQekMXFnd8rdTFK7E1ycbFuZ99eZ",
  "key27": "5vYUb4uQPuU3Td7KMZxso46UQKQHkxCAfEvMn8DaNvwjaYoDrmGfn7SQQhvPPwjvqRB6e98qS4UbD7b5denrZZPS",
  "key28": "2hyjJubPVhokmZ8KxyGmw26SC34UW6kdSUE2Lq6K3613s6t4F1EjVxrMTFcSmDrWwCA9fAcSRs6vLVapuvWd6kBw",
  "key29": "4ZuqaNqQyqkKw9332ftfstSpxiiuXvXrVQJGBabSuatK8e8NdrfFQYmHd91fx4v1Jo7LF3QYdWEr5NpS6CFwFsFf",
  "key30": "3vy7LLMPzcPayCyfir1gu3MypZTf2zPz71XK3HywU2eufg2vXcHWEWX5g6wSTVuYXRbtfzMt8WhdD636ngbUiy13",
  "key31": "2DTbfSb521tkhsmLw4eVfNCm3VXEpmu5C74mVBUY8TPQGnM9HZrWRnNiQL6AjigZZCx8z2PUQwF1eejcVC1DH9eX"
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
