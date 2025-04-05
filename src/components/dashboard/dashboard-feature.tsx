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
    "4jkcqXSmDJrc5BFDkLGu5NTKQ8ZRhZdtS8GENh9Y71ic39kQ4XDAYoUaEzrkizmJhA6i2tqAGBghEN9fVjH4EabY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PFbKNNZXRgpXU35GQxjZFpHTBNT6FmMXUKAoVkapZR4oLp75ApZx8qoQ8zZbASmKHsXdnpA4UkeiiG35AiZT3HQ",
  "key1": "4kLW469x6tde51tqYRebMCGrAU6ABK5sxvw2mQQJXP9EuBSsngPjLGtDojkmucCDcShpucxkBNNNn1RhLmgU3RvH",
  "key2": "5NKJLCsz7FrxT5sBFzQTqAR5cyvmnwApCq9axRGdUCeHdoCCtZJXtR9uFCiCM7AZiMFzurcHwgfFwuZbUwUH58pQ",
  "key3": "3ovJkheEpTeuuTtvKZFsdXW6oTzGZWt2NuNP2TYtDubeCk45YWVZgs8eejgb96MkcCi65rekj9aeSydrcBauDDJh",
  "key4": "3tuThttgFVTGyQAKzWNPX9dYsf9guwb1j4Z3b6rhTiocdzvhabFQ92sftTrWTBAEFcXSekGVCJzgeEVhCBMZdW8Y",
  "key5": "4vQbxwu8HRaXyT2JigwkLecgpvzb89muaYfnv4K17GA1na1dLZnVXNwCndpkxi3pnxr7eXKBcyX3t2oMAQViA25A",
  "key6": "2UzA5PErfXwUxPmk3r7iFGQYGaazwSkA2qqv4jamWnAwEyXZkxQeJES5N8bbhdejhjxpf4fAMQpC8xya5MK4zu8a",
  "key7": "z64hh5wsCsi9WDufLufhbFNdcL5Z3N7ESeB41U2a5ECo6v9wfnufnE6kWcmdZiQjioJvJAFob5C4jrzQwUitHBm",
  "key8": "259qj4K6o4QrUBsAoRRxJ3o6K9uztTHkJzS8VNgfS5AhYC3yrQ6WF3jFFK7uFPaw6i73iUsdqqMm9muzNd4jjg7L",
  "key9": "3NaU9ytQV8Yz4DB8CZPBatA3GTjZQRGemUYLYjgHpCccFMAECW3X4MVntMLduqTnBxUJQc82HV5d5tgsChtnGStL",
  "key10": "3c6sCNkMHHdyHKxXAYp5vixKL45CuqGquBZBFsJc8ZBgYmXiCdBWsm1EypQGaGfAvFD8iW7ovTe1DP6gZ8YdXmw5",
  "key11": "5CJyVVxdX2gkgJ5H2qGp72Kz3W6KNMXk7AnA4PuzUndkUKgfcb5CTtrRLMF46dTHLrNUd2mjFmB7htFPjtVqMtCR",
  "key12": "48hqsEg1cMZxF5yQeQEfCz1PXqD2Hepp6EWn9Vd7TNdKgfVmy6wiTgJ2CkbBhMG9Bt1omQEbjcn9H46bHBoqeKLz",
  "key13": "4MDG1FDuqefC3H9NLcr8JVmUpuYGeDHm4gSr8brhzJJTUMhCz8kbHtksBTmgthppVTyCPMqcHsWgFEcZyGBqgwPu",
  "key14": "4SyWRujrQ2YsFEPu5AjrY7wjtQYWCxtYPiwJrFGk11Pzn8AGeo21CLd1C1UnxDFgMQKQWyxpmewkckcfCkGwb6CA",
  "key15": "5PoRBBjFFqVXTfbTJaaNSJPhPayLMNUX9vEfy85GL9zQAKvDdKEcK3ChfghndAzTPxbMuPNiiiEHnBaLpiVvLzMJ",
  "key16": "65xv2Y1VZv9jCtUYKWzxhZev8Lanqc7CKmrbYRhGEo8N7zo8nxPhnpcdsy71Xr15CThCRvhV8Tvr2HRfpjT2ViNv",
  "key17": "3xzYD4HrYYeeA6vaMc2553PAerXYd7i6oRzJ1Uhd6UJtgCNcqNYyrzN31YLizZ4M3iw1S8k2GT2aQsL26vfKZbBD",
  "key18": "RfwEpSAhZWst7nvuduvZVxDWM2187z5dMsPLWWjko1dggA3hDr1EFckvHJJaPy7MoSRn4ZK3MUpZWRExjmkjHQQ",
  "key19": "2Z5vgJ69AffVBPoZ2MDAjX1QQCswyswG5oSZf4rQJim1yj1QB7WNTeLLb2SEG2e3HLnPQHZ7sfyhVUBgmvC91q7t",
  "key20": "2tzUTjHmmVkA4xz7oLyqhDF94LzW1b2xsxRXwYSax1zDuE12oV7sHYjnMn4ffNgkz7RBNxPmN9PJfaNAkbJhaVju",
  "key21": "5GHc4vtB6Ef55gt1eyCHQcfoJHrmViBa4LvDFTRLY5LoWELPKUvbo1ioJDNqQGce9A18hBQGyekJ6jkMJRE7zczc",
  "key22": "4UaGcxhtS2Fnwf46h67ofa1x13VQmWawSQYihyc1eu4ZwCXU9x3nJr6wMm2GVXyGjtHy56ot2yM9HH5i1tXsHN3G",
  "key23": "52UwGcqP5CiMLwHHHawUkQwAYQxSMbJY9npzmjs3uCUPZ21MXuLpsJKfcMHxt7ps7Utrw6ZxVCo3V1bpo4PdSWLm",
  "key24": "4pqmBesx3bq7xzYKvZDkdir5W89bRuEwMkgGCnAPNgzcsPzcNjK7dY2BGCmFFiPtocDRkh7qS8iGzNtsohaasNRU",
  "key25": "FGDT68GJmS4WBhvk9L28bdRxfKmm5AWuSw8F3NFvaGnW3LPWwroz9kMwTE5jjmgV5LURkCki2XzPqa8JsNB9CXi",
  "key26": "2fqNgEeJBzK9Jk4QcMHLUheCFQydjGeDZ6XWL67Ady2EEQ36y8Vx4oDTHYj5gvLitY5TMLamXuPt4Lj4DTPLhx2p",
  "key27": "4dUzZbqNkS6DZNqxPFeMQbMRjQtRWRt8Q1pojBs6xiJa1LZDYEdH2wwQuxztG67ysUwVnbCH8Pz1UVouK8HKhSdN",
  "key28": "5nuc3uZxG3gbPQ4byTMRhA7fzVywx3cqtoRnYdh4bhiXrCccgr3aSY1BE4vTiLnuSSCKFjNcespXn13udbSXXH2b",
  "key29": "66JMZtgxj3W678aBnmgVVc3gEwTV3A9ZHPA4BE61CF6RQhuinGifjUrbEDCwfCdvpy83EMwKZkkGdked4kJapJ38",
  "key30": "3eJnxmAbz8hSf2qSxWL2RqeWxnq4FCbpJH8MpznJDFwickdgzAdUphuzN1G5eoLnzEPBLCtJe1G53sXpsy5wSFk7",
  "key31": "2stz58NotovX99gLUj2cQUeVxEhf8Aafg5j46ky5ZCKZnWjfePnjMn9PhTswChHRvrmmepA5rgMiQLHtM79N3B9j"
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
