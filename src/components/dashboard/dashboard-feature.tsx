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
    "3hbajpRufh962pWy36cwzLSJNaztNYWWPHaMDT3ndzzKP2qXFKDiwp3fLYMQwwu29HEjcdi7mgBiDnBT28KzU5rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4QCHwgAjsFBTzzQRi99YShDsjC9bDptDyQxmxdfxkz6TYfzu6FifZoeuWJLH5oLbd9FtiE5Z9vaHYFN7Eym8So",
  "key1": "24CDX8RvBMosdDsAJFyFGb43MXBCmuTcoj2wkKRr8XB5z1Z5qUg6958cN6tBVXKGWhm2mFjPrahb8kxF4Hv8ZB67",
  "key2": "3kL4SH29nWvP51WGxAX8StZvQXhiJq2y574GLtzPyMAfMKbYiBhkjAi2xRw1Sq1tW7vkVMHKyYYGsrn3oavPgBTS",
  "key3": "4LwrReXSkkshjK1tePaHaBtmTyKQsDppy9VMScESbiJeC6rPTG322WV4YsAuEwhhtG3zxkhm2BRjw15TAnAc6MBs",
  "key4": "4pwgPjn8qCHwMnbwr9YzyrKg68ssNyNPCUpAPhimo6CAjqiLYV51aooU2mcDWEhCqi3oCMxv5GtxV8CW8zK5RPjc",
  "key5": "5ULbU83ibadXFkfyjMRrTnPzRcg99UksqgZdpRNv1PS734ksae7332AsnwSbiCxSdGU6MzABzfeLwqS1iQhnBbUU",
  "key6": "vzVNeorDFN3aXzGWbKXKhWRVE5rhceyvCMq9Z2ThZSLj1sXPicUsK2owivZTmiu57o8gA9J3aj5kHyokgG41U6p",
  "key7": "4GxAMUP3ikqPEQtEVvGjLAnu4Jjxfj73u66XrZUSRto7Px4X5jKrXhtzbc7aH5rg6njdsZELaWnbK4SWKedEChZQ",
  "key8": "3hPzk9rMYrk9xHYFDkTZfL3u1Y5NYzdfdSDosXmqaTmePxibZJBTD1gyiSyJ57BkmcWuNr1f63UZPrwAZx5GzHuZ",
  "key9": "3B8uktK3jF65g9e1Hy1cYuGEKg4k2TLofFuWJLHUX3LpCUmdg75LUqJKYfCAYBMccWdaEFW6QeCw2YPEUquWYFhF",
  "key10": "4koCYi393tk61UBfiDKk3g4vW7av2wfLtUeyCZkVRsxdMCA1QR9kyxA2s75W5qmcqkzddt8ga2qjfMNxsR66bqfR",
  "key11": "4fpsS8bMMtquiDPgw6Rp6CDktpRncgEAqGPzEdCMJrHDCc67hDiG9yKmHFTPZCZ8t1k67RxYiBBmqwDS22F42cBo",
  "key12": "5g9oR7PEYuLVLX3yJg4vgP37ZMPfEvjtZXVM1mSkDVyWexeyUf3XKPCsApVNHc542maYMqq9envxHMch47EQCvc9",
  "key13": "3dNdworZyCYH2VkxBcZgosyB7dcaejtsxGeAUnCxuaddNiGpXoa5KSLRm8koejP7C7HpuHmTkjwgf5yBr5NkzT4f",
  "key14": "wfuqWeRqX4htipW9jgbSfYMFXiF9kLZ2PRkjaYm13iL3kBj3XqanWpjjuFhSdBrWqKjUPv9S1EAKFsmQpWFawBe",
  "key15": "2NzGGwZWmRk6BrCYe1dJy1RbNH7sVsusCQHBPsZFzS7sPYT3wLWDzuDRVPumZCkcUj73SthxQBr9s5ZUANk1K72b",
  "key16": "2CVt4Rrji6juihR1keRhPsTatgsvMwgs1U6XzeianxPng2KinudULjky8ihMUBKJf9WmvqfxASBmQJepadVwCdhx",
  "key17": "4B6oJL2Pho9AqA4ZGeYAKUMAqZzDry3MjDsc7fh6rMD8mM3L9Ya3FJS7Cem2wGPLM5iqd92uXdNVLFwax51Miy2b",
  "key18": "3EoE4jdd1pMTobzaqjKJq7DHTYg8JS9UDNASAVZSaNkTfD8Kp2YtNJr48j6EbHPhtTuaFVsRc6tBPDfjnwFUW8Pc",
  "key19": "EFyNn3JqadmfAUvMPvhofPx6Sw3V3yzFJvdivML97ZCzv6uQuWey1XodRxuoj3FSwa5ZU5fgveuziM8Fw7UAN7V",
  "key20": "2Xh9bD6wAvWMuUKoYc7yycuburnDebfJ9RjuqSQvf7TmoUw6PR8XYh7JcMYp5yCysJ7rzdsXxNfN7UpipmRjyAci",
  "key21": "CyFmrqMDL6zWYbKMsZQT6pWd4B1v7QQuLm2SpGDndfjEGUJ6JfjPLFJi4E4EvjWZCf4pHVT8UysvbxZmQEURLTC",
  "key22": "3uRTxdGLJCqYTeuov6jTKky2fnZhZZKNkJZUCT3Mim9nE1Q1NRr4WHT3uMTAu97d56ozqPgeMzeR9aTEV3aSanYG",
  "key23": "2iV1jTj7924Fc1pxkwmAFmamu1CSQoQgLaJj6aadKtxtnspkPZSrgzRpUpiivzcRQcbKstDWdXUsAAMiUGK3xoV5",
  "key24": "3F3K5UB1nJQNasPandmjoS5TPLYZzvoGKxNu9eXHSw3Xt5AmvDbMpDuYsfzfdtVRzWTN8oXJurRcXwDtmAh51nHh",
  "key25": "5u2hKrmwrR1GkNMfCsP7vmEbhb5TReWYsq3BtoZwZ6Z3yL9LimJguGJ6RhfUMJPVZ1u3C4R4oVhhWBCKDH2zQSwx",
  "key26": "5hdDsF3tcqRqA1zkQNCqMsWADQpn8FJdQ1a8zUzSu95sU3PbC1XPSYcd3rLwYTEKHCcqgtrpEbtZ7CnrVtKrCne",
  "key27": "5fab1pNfsRzLnbNCcJe5okijZsZwSJEPJxy15hCbiCyvQFgpmBBoWCuqAPzKzsAA4PuCy1UbBfajQ3rqKU8FNsrK",
  "key28": "5MVEnQEfvDGdLzRSzTcFmzVEdsqm6Hb6j2am7eqjdtAnjBqoUjXqGoYnobjbkVaMkax8chnR8EDQpFdZ6DeLtjSG",
  "key29": "5peLTg4SHepSL5r8A5MsbwSRKfZQD7ccv6pytpyMxfJMR6DHAWGfDnw8N5PefAGMS2PHPu1NzUd3Nmc1LDikpcW",
  "key30": "3AqdxSkaheTmDHRQuw1qwuiPeNrX7Bnh9y4FxHwDAPAgqVd8FAUtG2xMX7MUghPUyrWXoGUQm84f5PvDPW8GRBtt",
  "key31": "ZvECH1HNw9q5YFTQ68y1Fi7k3mqFFfo2UfBzDsGiTDonBzmtCJcNsR7xwFXSaSdGa91iSVDiKhZ64CwH1Ary9Lw",
  "key32": "2mhpseu6i7rcdiZKKW3BPt7zhZ2qBjSMrL4xj6kzX5BYVh3yXr253nxjS3PMbjM3oempZFRa4765bFwz5Mgw87hD",
  "key33": "5mSaBKxsAZJwTioAp587uoYjCYgGcu8tk3w955TsiLPi623HHjiKxWMiFj6JH2tn64bbPwzFFb73aix8VVW4vnsb",
  "key34": "5Xv86jtpCFXvcNVBRXhbYHLx2HP3GHGmSyqQtnQf5ufwj99B6TC2DDDUtPWmixpF9nASwxwfbeoehC3ZwPgzPTYX"
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
