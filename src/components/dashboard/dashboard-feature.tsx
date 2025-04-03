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
    "2CtbGqGTEhmTyVgx3ZH7NvbTV4WREYThvXBTg8hXPfZvtMjt5feR6w3W8NC1GvjmWVbQx2kDTSKAagU2oURWZ8cR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKwzqNkQSi6R6bLEaYmUpedMTfnfue6yafSFuUv91ZzRjk4M8kMjmi6wGPsmBHMqA1NWVvDUgpAp7wfpXzSXGHR",
  "key1": "5YF6PzGXhKqUCSM2sVgDc7DFzZVV8TADcn98DJ5Bg4nnM6jJykcvxGz9BWm5Q6PxFyAzccCLhSSv2qFjwZxZ4LMe",
  "key2": "5y3wqsxvVzsr7vcEph5bQS4ZywW9ndruQJUbiW2gBTZaCe15SrPeGo5qvq8qfQzidSZSk2hMcLHRqnXirasVwnqG",
  "key3": "3sG88ax7nCJLZHK4Vu2LF2aKFS78qs9iMMiAdXgKbhsaNGaJAGzdEUpWTXCaG9CStwBnsVb1XsN8bhoKqTKGBFfE",
  "key4": "53hZSYRX8xWDHukeJVfMCLdyCtzw9hWVcvmbNtfj4P9tdKvWTEycecsXkSjSKLcMMrdG8VsYQbxgUSc2Cpnf5dn4",
  "key5": "3BvAPpEwzjYE98qJEmJARnMotUNxpAvHvfdAoCG7CkUq5ZW8YSxpt5QtLkvaJTZaJqFynfwjGwQCmFKCgP5fsMwQ",
  "key6": "3iSQ3NzUqGua2HJu57USh36Pktkeqab1oa3JvQdiB5oFeU6SSrgwVmdT65Vbxjvd82wPuKg6B2BjMpSDW2La3o69",
  "key7": "3sv6Ntyzgu2uueg7jbwSgefcarjwsffZjk7JtFLH6kRTt9xJZfwrfCmGzgiEpARswVyaRQHFeqEauyTrKwAqJi5S",
  "key8": "NtqJTfxW6Sb9fDq5SXj1x2rmKdPNvez86vV2FDorbHVXRdHu6K4UgofK94GML51gPdPv53p6V1L3QopzNkQvnV7",
  "key9": "2pLEr8cEmkhVbN7V6JdwKe1vrHd6tuq4s9KfvfMWx4c9PZVx4ZtaSPT86Bbg3dnTCBqX2tzshJfXXminaqmcUtf1",
  "key10": "5kAu1jak5rVVsGLv3vkoQuTCtpXFdmTyVvgbK9DAkPyeCNiPYeizs9mbxWq5asgLYFJXAEZovZgwBZwrPSuQWzJz",
  "key11": "45KyhPU4ks8SynTENxPK3nDWEym8F8V4fnfp5yzWUoGeU7q85MhcMbqe7mCBJBBcgMXpEFNs3wqbKtP6iJFKUKno",
  "key12": "3idEAY1wExfVyefCK3aewcwAti1w4veDKw6T1sCGi5YwucEFmbD6HRDkX9vyaXKAJnvxpPSKDrdVCqCwgyBUbxTB",
  "key13": "D1vdWDbKhwhADNnxs2JLQuR8D5bj7ohSMZa3g99TteUjirbJaNEP8vhgsbL9X6ZZuUDHnwkSyNxRNxFESt8uVuA",
  "key14": "3iG9gm6NbL4WkNUbVDvUdVgAbeFdDsj4FkaNEnSQXjKKRyKBBtPbPmDSBVimq6p9UmG3PCJTns4F8eyDm8vXfMQa",
  "key15": "3oYVvSSRryY7W9TE1xNsPRmswYyUp8sZrGZDfZ2WL2HhhLbgsqboSnSZhnLCzdA8nSKJDPVWnTm7a1DEYDm88oS1",
  "key16": "5JdyBjDpafuNrTonN7S8KrHBLfFTgYJNrDrwdaxbpQoaKHviiHac9pCtbyh9Lr6fMeVaf2HkxsuUDCszsnCgMMKP",
  "key17": "3sxQboVNJEHb4QKz5vRWqwEPJMVkWB1USkRkiPZ4jow1vWzGGboS7R7YBkqZ9apLpp8Qhw6nsn3Hi1jNaq3Y7ddD",
  "key18": "CgkPignJR3rr8GixTfQyUDBFmE42c2VcXDivk23ef3Rh5oFLy5BvSjqWtMYQHU36tDonozEhaGo7GfGQhQ14N8d",
  "key19": "bUwY9WPkXJmxF8jGEmnebtLLK1xJrNvnqgBySe9x8WXQEutfXeq2VD1rTBnDSVcXp4tE8VrQnXbYwLa85X48hob",
  "key20": "2HR3BWcZrnnXLiemYxGC99DJnb3tc8s7XSAdEYFqhndQpTPRSi5YFhdZPx8KbLxsUwnPjdr3mPbWxKaWBjikXxJa",
  "key21": "5JQze6KsGoUztMPtcEWFmAskk4wzebdHR9hB81NgGksgvTUaFa95sMWhgHRX58B4QqUakUV5WrM4gSiD2Z92NhLG",
  "key22": "3wDk4eNUFbMTd5tb8qn1VkEvSwrxYYxjzeK1yjE5yiYhcAJ7w28VKtvsSTMGfzKZQ4AojCAhZ7AG51SHvxssNPvf",
  "key23": "HFYVVWt5QPU4JUjBfRYPvRmDbJHqAVrwzHsQxhERWJijjyCWW6BhSe5RKxVeHUr8swjqQbzYATAiF8i9NcVjZmP",
  "key24": "5rEtv3NFyX8StuoLeePNsgiCfDbam8VX2N5G4CmQt3vTCbBSvNTGWnBLFbmSHZTyzzqfQr57mj6ehL2i6ZEJDR4c",
  "key25": "49bHDmPL6ctStr6Pf6JBLCULQ1nboyMD19RxrxkCxDYM5YW7baR5D1vXwLuDaJhjHCafUV44Rptvohy9xCJ6u4At"
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
