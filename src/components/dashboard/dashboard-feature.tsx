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
    "3J73pCG23didaWntYtPGG8TisCMVVzkouxuUqzhbiSSZzB1V7orDbTV2GcLQadeuj5xuSNj9pKkZKscwxhoh19PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCZUMkLnoEnxeCAZNi96juPDfrZ2sDBeJFtYiUJQmCij7c5UPPxpaaDat49d6hwHFvUDqNwaz3Bkk2yzacNY5F7",
  "key1": "3L31UxZqUJ13SaydyK71Mo5pUe1qg7Rk2xkvq6XAoLd8nYRgSE1YgunMLJkcVc657vxs1JKmB1SzgYjccmbPwn2U",
  "key2": "3UVefr6jQYLeB8yzF89aUvivXRyCJAFV5kcASG4DQz6hSpP4Tm2sLkhhR3edua1wmTfaiKx8ffjxBAjk234SaZgC",
  "key3": "2G2Y5JLtRmZJ8aHQ6eKab24PCiEqWknohdVSAPp2jbFnfnbb1tU3ZWRENgsCbhhcsdJzWkXNLuEVCzVsGqvuDGgE",
  "key4": "3KNMthzhbnYsEAw8LmWUYxL4KuhPDZjm4EpFdTJmWdfYC1fdnoGdyRuWktKkeVEWpEHvRenYk6T6WCUrSgfoMKMB",
  "key5": "3K9ffJPFuonjP6tX1K2Kh1chFeYc57Qg6mnM6XC9418e4KQRrwuUAHULqP7BQ8dLzkQxhcsbDbCQGqC9CgdQB48F",
  "key6": "5UbZcWdY8PNM4SUtvq18P7zjQhqW8K5QhrQooPiWbwPLurmEwwQKtCrmd7UxiiDz5eCgSeQPMcU4z5or4WxYybKe",
  "key7": "5C7uhEBSNiMnwVCkf9yPokiwmYMT1GqeUYopzJpLbNjVCWpVS9fJqTPqGKppPBPCRpZvf1CXfMDrY3HKhrunc3NZ",
  "key8": "5bVyBRKs845MWTKnvYA8QN6cTQU7Z93WgDLXcR4yBhCaUJmRTysiJKUi2KePeRyLAwEc3maBreH748WzcqaGmic5",
  "key9": "2Uhj3NxPNMhCetDsWRWocAC1PAEDWPp4fwVMkv956hw3WWim1wCyUextUhmuMFJa9rJ28a6x7N9srrSieGqo1JrD",
  "key10": "3MR6rekFdJ4bzsvQDxdVL96ASdeoNV9v2oz5D6QxvnJzHynMwHviEHsHAtLXdHsMS4vsDjzMfRkVtKqaCPFG4cRw",
  "key11": "2YLRxx2sezkuPTPt46Vrkv1KTJeGa6bSPth5ax4eq4hSwX4s5pyBiF1qNeeXkD21NVv5GAJnp1kGWvYR82CniiTF",
  "key12": "5vwSDhTqPJkVZPjVxfP7z9hsU8qLYewJ9nc8RHUgU72iM5aK4BhRoohRcN6rCwV2HhqaKU51gVkJqVWdmK3n5esv",
  "key13": "2TaBFR2DRXZVz6gpQv4MKLMRzeFj8JCMF6i5g8ugY97znhkLDuuB9CpwErLog7nXPjf5sUgqTNoXB7fGvXPVsypK",
  "key14": "3T33TDscEqJohnw3tVC1BbbgfJ8vpEQDjh5GJ6oiGspvcXRvcf7vmkoSWJtEeRPFv2fhxsKW4Z5hGw4hD7PjbdTV",
  "key15": "5dJnNASEbQHFDea3vLYLcPXebKJw5iXkToYa3jVDsTEDc6KwK2ktt7wzGcxxrGrhCr4qAxWmp2db31x4iJoJi4K3",
  "key16": "5n9itNSpvjWHQ2FdHuokMrkKQXB2ySQrg13gKPyuVMwvoZojCU2SEu8NLViTPivqBUUhBczWkZrnyqRmWaxAvKAi",
  "key17": "56HWA2cip8e1G15jasrQSJ9wjVVdDLiwGjtMGyx1NJ5GeoiQVCkcbPWqtGPjSovv79dfztiMhwneizzWL93Q3qQN",
  "key18": "4MhQ8uPjHqdqXh5JDNAAzQ888MfERckjuKAPgpjyxBvomXzRiqRpvqb1tyygYtgNvMqtBwoWqp8o7z3QqoTV3Z5m",
  "key19": "5YbbGmtGE4SmdYgSxwRXMWchfXA3GWkw44GZm9yEaefESFFKTW6dS8Y2QUTDcRw6N84bigLVB9UknbBZj6eWPBZJ",
  "key20": "3VFvztgm489GNa56HXVFeXEykach3XxSL6PcQZuNB6VVgfQzLNT2zeU2EfEKr5qFoPCdJykVtAjMAzb3deZUxwPm",
  "key21": "3fXJbE34whtNLNKwmCbVuJW2aRGfxzcCLDEPeSWgDCysxU2wrMWyhu4Zb6EJ66MxQxWQxr9AML2oiNETqQJ7M5U",
  "key22": "3vPg1mPTKPg6crFNjANFpNEps3N9ZSWXBSewoRKWPGasZuKhcTEcBQbFGt145rFehmcHSp7CaETiifdRBBBJYudg",
  "key23": "2hiMGthdk27RNuTuAUVY3Hby61DK4E7AtkqBRoVnDnhApWVBnZ7y53uUTPAVdWYq63tJuHenB9BKo3DPk8BmvRLA",
  "key24": "3qe3ttuFnVR9bqXs1zRfhLVTZgzSEo6HTwuWkcN4oYGGvXzGRvDn4babvLN7fWSn1gXo4vnB4mGd8Jbb8pGyaojx",
  "key25": "2Dot1C1Qbm9Nocwb4p3VMxYWPyaN7EPuhDEjLgwvfoWxyS8w1LUUquvNNchi5svXzkcnyTs6GprGuKGVT5vwfZjE",
  "key26": "2awJLhUn4BjJeFBgQFJ3eeD1eoiPCMWNfuq2889ncJeUaqvyNkrJqwkeHTQkafg7sGdB5NtNFxy3VprzyyZMSHTJ",
  "key27": "zFEAPvCBCaQKWaguTwaCoHbtUm2hDvfcZVRvMTki4CZ4qjDTHS3odvxeLwQiXEBvU2PtUKaQHKU835VcexJkfCD",
  "key28": "PwaFfmupk4u341EeZxWzH9gTNopJQS9gLs9HcBKTEtnbm5XXTLSrkmwbGF5xNFAUymXXmkU6Yvs5z9ZQ7Sa8q8e"
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
