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
    "2LrsuKgA2JuZFDt19HCfUvAxDJcEoydPc4RDjBBNk5BjdhgnUGmVKaWRx2y26LhKuKEyhFSjBKFCRLsUsSw78mqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zq7BtUnmr6bZMEXp4VDED2PNNF7dGj7KHJeZysHXk7GuV36kJmPFJKsheHGMMyJUbrWRtz6Bo3bgtA8fYRVPbpX",
  "key1": "tdg52w8R8UQEXQNjf2F4YA1Wtm8hbpa9P3X6SXbkrFv2N3sdTXGsGfbZjHrvHJxaxVTAiTMnCdXBqRzTz5W9UPj",
  "key2": "4mJm318Uh25dGFsn7f4izwEeevDqRQLtsEc7fnUmh3VuEaadZUi2AKYYZAuFZa3K5Vo4ReRXpGTACxCwN4vta2S",
  "key3": "5ii4qbeMv8gXAAmU3doue7AGYL5L5kZ8KG5keLgEX999oKsSeK2eEdT7a74SEpNdMn7Bb7M9HadL9pPuASia21iN",
  "key4": "3gvwVssX9ViB2hUPuLhyhsaCPnJiMsK5nWEPzMz1LucrVn9Hvoc94xpLdNQFFXBL99LqLefboyPVJp5LxKf9behF",
  "key5": "3AL18pkwHeSC2wXkwvhMnj7HJwF2s59NEmk95SfbKrJkNn4ZrKnCssB66afEucRqcbDvoP2yB2cbii4Cy8mUDJV8",
  "key6": "2HvKdrSeDvWaYHCgFv68RGeM4xY81U2QvcxmcMgSTbwgsyvCRHCPqcRHw7AdtKJ3GtBZHJx7fhosxW5fMSA7gFca",
  "key7": "4uRQpnUGbpKCgUzDtGj7ivhnetL15t7ZMjdx9DuWX536XTP3AfEJxyz99apSVUoegqqbBHXGGvQJym6ye3zdPSRK",
  "key8": "QQUBsTgoMwmrStCPiWLyag5TV35rDiWVAFZjNwbSmodT3sGoeneedCAUGT9P2TaaHSxNeD7hpL7JyhX2p5pmtp5",
  "key9": "5D8AfXPTuph3pbrjGJiwWkEJVJQfkARWQfnKh3iXWi55SG5czdC5e5zyzDpVuUYv8MU5Aw2c6yDTsaBCS56L2F1i",
  "key10": "33yAtxs9hGTemPiFSMJ51cPt7mPD8MSyNN4MHihB3CEe9LnUL7AKWEQjvQV7MkUCUemawFTcWjDStryS1ESnmidU",
  "key11": "4kqUPnenyvNnJBY9dExzsuUB7u3G5eKFiaF6HfnHTnGeFjxRLfsfFGs2x5XKxu9T85E28AyMdAosjQ6fZN5ntLMY",
  "key12": "5mhFWt9Km3mbH66kKUutT5Jsg7JayuUGMMRcNp1DXwKxrBmhqBAxzapgaUXvtJUJ4NotdyNRbBAJC3Ckq38cuamR",
  "key13": "4v7FgACiNkzotSMdcErNAvVKCLeDCNBoHwu7ACB7p5MbhrEiZovp5yGgWCceFwHy8DM8Hdy5jHoehwYiHoeQXVeW",
  "key14": "TuBW1cAgpLu31q67pWorAM5q3fMMF19XdrBfx6gEJFvZtyPBabSaU1K3vfuExpeX9xKeqFzNGbEhfxArbhvJbdQ",
  "key15": "3kUpu4oeQMemv8YeUrMzYBXpme1mTynLNk5sgKUN7BgeA9aYEkPPjJeJwLdj5yvNVYXTqsoDE88pi6np8pKo1ymp",
  "key16": "4PLK99MdmkRwMhhTAuag4fGyguvyiBj1w8pbefNexoLxMh7hA2wbNhnZ55uxHDJ8dmbkLWBcEJ4qaPmGrvGP6VJM",
  "key17": "26CtLDQ677qahigjhViGupERzpXo6MjweL5hEf7cWjTBnQB4UompturwXfyqcubYVBfRUXGFaYWxHkLKwBFdg1Xz",
  "key18": "5nnYBuS3a6XXC9A6YAp8uS9ykuFPMvTJn2mC44rgigtvawPywo1TUfDcvrHP5jRn9fQwzLFk1kWm283e4s6KWZs",
  "key19": "sTZVsfCG2bGMRcyJCm6ThEE7cjVfPs2cFmTkSv9d6QcEzLJc2PQ3hLwcuL1Y5ZFz8EM6JJgnFwGsf89UfhvzQBq",
  "key20": "4xZSiSGMkrkC47YErEtaWsdSN5W2Ri6kUEwSsTcfgAgJe3BTWZ83VhEprJrpQujn933pmtUAawpoNUNzwWmneNsH",
  "key21": "2tZjcTgX77yeQoLY968dCFFoEQYb23SAc2a9ViUvcFgf2g5U7UjKGzMwPZr2zzEYUJmYVsQU8YFcvmbAUe7Bb7Ed",
  "key22": "2Q1MBdL6aJDQSrmhEtFxGuSzMv28LuFzqitkQESoKc7QoWiHBkrqn5cjwEiChvWobsHqT54Hf7QNYgicjD2BMx7f",
  "key23": "hQy16rASk1w1wh1TRuDQunBJz2hGchJuY57RuJBmYLCTmjCYeXU9ecQGekFrJnjwQXKFrYYfskBFDHH5XM3ZZPZ",
  "key24": "5AVkH99yVjTrwU1QykQugdXCUhLSEhHrAduf8aLVmSmSUsfY6q6ke59BfUY8qLXsfCxcKYyWs8Hz1JNopy3X7pwT",
  "key25": "46rhvwbQqQsxP3h8ieWMkEMFr9NN8UPUWJrvZRTS6KTn2MrZeXBjy4ZmJXUBsZeGaX4sP3BHsrGeEUPnDDEANypp",
  "key26": "2ZNMsG3hUMercNyAape3tWBAvfyv38mDK5Ni6QfBDWWLpHfnVRT6FEmT3MyRufRDCYwSLdwiCzoyvpwcZKnx2wrm",
  "key27": "4M3rJ6ap3tgYT16gWNpYHr19c7TDzgrD4RMqdaNWKKB3LS1vcvUGiZvYdDhbBeU5wrJYkAeHRAeeFsDg6heJFZeD",
  "key28": "3xMMqDCLhZ3UaE9pchw6pm3XpNxSyR9dpwDzZ6Jrm95fmzAqvyoC6DR3tJoWTdix1jD2EgUNr4Wm1qHTLXfgLCNy",
  "key29": "3TXUC3dA1Pwmk5q6wA9S1J5SBoskhGXYzDdXqj5w8uHRLSznBqgqA4a2EEUsdAC4VwirsftwFh7rgouZKL5bdB4T"
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
