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
    "2dQMwbQo7MDVtwzv2tvRSU1JbvoJQGoqaLbygE2skPCfKYpfcXA8MFoqrLKhiKXQ37ZUHJEJN6a6aiJez2gab3oj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iAg91THkg1WzjRXee5Y9Bm3H8un9mFMzZUqWSgcEigsUVs9cmaNq1xSt9p31dy2k6xsCyK6TibU2q2SnkKSQchF",
  "key1": "4fXfJSJRL3Fky5EFKW2w6FE9Y5JevdXw9wUG7YvnfEDTRxw1aNSFDhK6nrhjzspfvQmwxVUnCCmHukuQ8jGRb37w",
  "key2": "4DmhVVxdw1yovLiMB2VqdhEo1L3YjnN26k9CzHSfoqSqHwcCn5RNCiqbuYmcrMuurbNEaWsw9txDLUvtcnmdGi4f",
  "key3": "WGn9rCtFcmULkhPBuiptje8SsWb5y8mcZ91fpQa94uTTN9CWNuGYmAhcqgC6YLKEtX5G8VzbTxY8U5jHkqWe2Mt",
  "key4": "28fxMMQ829bBS6XvhPRNpEUowUBGNSATnx6zvoPUc46oiBtxTLx77kRT9EXBufZMLQLawX2HJpKkDoPWiigkkdKB",
  "key5": "2VXq6wrNFV41DrkbHBZdJEAx7WsZsCgiE6xb4s1o9RiMvqJUmpn29PZQbV3tcDuufciSCP2P3Tn7kMzCAvY3KzNM",
  "key6": "3jtC89QyEyk2Di2SdMXEFU5UmiHXVKVvVuHPRMVPMk1bReqedBcCJXBYLDYDQXCUFa3DdWD4P4ecSDqo8LiiuTTj",
  "key7": "5HdVm9tqkhR5iu3Gn7Zupy5fpHQ9q7J85irAmi8FmkkH7MUMNEvN45zpFfCWLAQZMWGSt8zYwj7SFSq1yGWfFsAQ",
  "key8": "GegSvP1ok4zSbEFn8aCSdPf3KDgoQn2tdbYYjLYq2uDEhw6hoDECiCDR2oXDvQVYxPGh8oJCs9x9oCPpYzVK5Rq",
  "key9": "4UH7kt6DEwC9uahWpkj7aNKonGEUUAovzQJvBXYdZGhYRLYPcaaJeCqNh1hbXrtyrGXWNEBRotgmbKNvGQRW6ehT",
  "key10": "3fxetiAnR2jR9iWfkFncunb1V551eQ42aaxZJEBp3AoNs5m8mKsSD2hoUPQy7qouK7BN6jCKNLM2admpeDiVaQtx",
  "key11": "5rPrPcfxn9m3mJwMUxQJxvfN3XnwnAheiwnhYEtG5iKQcGsN7pQ7a6mRCSbbTKiPK3wUXYP7mVHkm6Ae5y1KdWFN",
  "key12": "2YH9wq3YaQxcvBL6oLY7W4DfxRyHwvoohVZjH8Mcr2GmMSRgbW7wZ8EgYqThMDoBiVLXprtw2GrjL882bLJWMVNG",
  "key13": "4adS28Wf23CQVcAV4Q4TunVqRYjiBR2BzyAsHCBcvzst2QCDNMWVrkqvYPtLVeyCP8jBQkT8yS4MN9s9HXbrERHQ",
  "key14": "acQk12evv8kN3L761whnujpd6A9wh2dh5UFrAeFUxYYJz7ksLRrhEUz8tHDqNFTq7iKbWCdmDMRX8TB45qf2Bqk",
  "key15": "5SgmnkgWZhTwph57uQ7mfYMbe3LDsMDvWJGhiKrh6uWYKpBv7gM1QYWGQQm1nBLVrXTjj6cXDUAhbw1nhfTrf12L",
  "key16": "2kGdiN7Z2cUMGakMdUiE3CpNKGQmY1sEJGXVVqmdWd8hww2fmZMdAwSXZ4fbxNPoURjcZReD2NuE5WLu6px68Qeh",
  "key17": "36j3N2LkgMqfzSqdBP1Z7EyWqvHHKgJEWCPvZWWm9iFhtRSnT1N8rvZD8G4J5xTSFbGGdhqkWvkzULBPa8g9rSyn",
  "key18": "3xkFrGeJ6uBj1PKiuRPo4q7atXkkojDC9trjmdQWgeZ8MZ8F1uqbeNHrRoSzisTzzFThaGBtnmZvJqiupungmWum",
  "key19": "48UUQbJ3VPrTPygK4faZJGQ2qhPazfrXpE8J2eKUm3L64QjMVJzcKGKMWdRixFkXRra8BnP4ccLrKn2qS1imDfLs",
  "key20": "4TG6gS5EAYBeeH18ERVyfoW1c1Dmkw4WuD56rJZzDon9JguKMkzyzSJ6mZz9NB4Qw2d6fCHbE31mW5wcWzmPXiVj",
  "key21": "qbYErXp39a4cbq85rToK4r9muX1JGEeJXNnNqVqm1BKx8eNerk4t5ECgaYfAHaWTTHjqnZiaN9pDeSfKhWbZYQT",
  "key22": "4DSvVLKTBR677C5FCcxoQm2BFZrZb928BMS1RtRKmYt1ozb1eHhMXPjMNHc1Bo4tuxN8W8iBbCv2wiVoZJmUEHU7",
  "key23": "5af1PzB9DRZBHSCvKeDrqrxwGYNN1sTmDHemU751EWgTEtDoW37JJL5hDKXKq3PzE4DGRwprFHLCB3uMkreFBjad",
  "key24": "3J871ZE8fNbuRgNZya1cymTfTB2PBTYigxEYyHoNXRdvn9JYXfRYFYtKk2c4JXEdYthfJeMZTy6HpWY7UXdYVdf",
  "key25": "4JvqVy6sDk3iQq2QRGE3hvLTjR87K7WqehAfB4To4aQkxDfzfkWHfHZQNpQ9oCXP4hpRTH4TeBEwYp7dEBTnNeQC"
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
