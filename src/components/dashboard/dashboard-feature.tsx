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
    "33LjgarqcFKUykqoGgzy5BZ9BvNWdqUF9nxNHQabJ4M7hc126dvq3Ekcs59mkEnWf3WGGxX9KnvkJnz8W16EJe9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tf7ZYdchVR8RmZYooSod5x7ZD75RPTdJfktC9iJGzk79BvUDKJUMTbkGEYrzubnX5NCYDsq67f4eEmTGNYyA9GQ",
  "key1": "3k4HFKzEaFV5bnNKcU1NcavNVKkJXUzX6DfHcQqkGvFxtRWYfgcpK4a2UAd9YkrHJqn7J4eeKRV3NEYWvQfQENrP",
  "key2": "3Bnw21ES2kTzED9r1WLs9E2vyezUEfwLmnajNRWE3bEjEnkgnUpPHnK2iSusEtJmei3vTTwLmDvRY2K2u8WFs9Zt",
  "key3": "2DVu8kTKifZr3a14ChFwYFinGosaV1uRTjHscJSRCD68eRSncatHsQmSJYWpjpYJKiVw9XkL9ATZRaUJqSZLeLh8",
  "key4": "21YtF4ARsmK2GuvQCpc56w9jxzrqgk7sm1bLk3EE2sBiraoMEYdbNQ3eY2MPzweeUhc1GecwdqE8FoSWRwDsF8DR",
  "key5": "2byie6SACBv1j611TrHeMn48zX8xovBCYr4LATbNr7Dj2HrNtqDopT3Xcr5CKqhCowxHSzjeU8zMNNqNSSHaJUGt",
  "key6": "3c1YN52LYAwKuEXYuY1wsnUP7TkBwD7iem2t1MDHL4VjAPtVRE8NhkeUEVK2jyvuraTLEBYcdyUgVZkFxKFFMvwq",
  "key7": "D1Xbfz7KEvjsZKN8Jfi5ekM5gsvjF6JUfjRrE8Vk3fRVDbMAgKSpksGksMfL1FEY1MhcQTQLEiuX8Uggg5iRDnV",
  "key8": "5VKw3EM4zeEZV2EtmiC5rCFY32wZRVZpnRGwbjsU7n3fY8u57yzBR5V3cLnT8EmB4Do9MpMBSaxPqngbgyT57E1S",
  "key9": "3jHRyVTyYiFZTBkzTMZkLsRVav1m3w5XWQiekpXnf8KXB7pAznWHun6QoiFkVoZDQmJUjUWTQstKNHtcivXEJsHn",
  "key10": "4iM3Ln9H5PXpgt1eLqEcvpJLFhfNexQVuYvjQfbfG8DqFGhNx93jkhh5GEaobhBJaYJsZCB4JYRsdZp79BGoe8nW",
  "key11": "23Zw65LwmG3JaXUocZ1TM1Hrw6TrFLuF9nryYiquX5erDpKmqNtYJ9h4nCWPaCB6So7bDuLHzBRXextedks4Uy1V",
  "key12": "3v2kPGdrr3y3xif6td3qxuGJ44FShjHt5eGJDyLc5VwQnX2RbUFhYThF2CPNDbYHdQYBFyLJzANy3ajiLGMzmxS9",
  "key13": "3t8sy8DsYPvZRDsRqVZ4Qz7rPTj2KSb3471dcCarafb4BJdqu4YPwVNs68snEFenvVPY3hW1pL3UDfx4r49Eragu",
  "key14": "4td2KEQD7dHKL2RcpZixtaRfGFmKDfuGk7FTQYQMxXqn78pmursBfAd1afEFiUryjiEtVSkCJXQX7wcxncK7cziy",
  "key15": "5p8UGxW3SdXmNxuFQMjCYm6yufskuD19r2BXFoP2Azs6Pas3gpoFZ4jyxuNVjfyTCCYLxCPsgz8juew5xkvwKTsy",
  "key16": "5UvVP7U7LmXynD2EbYYit2DgnBgsxodovfsAL4vebh5WfEzCkbp6kPnf6VKaaCM156ygCK2kVgyKnxSf9BMWCDpU",
  "key17": "4ZmoYxTh3X8mBnNZiEdayCMrnKXuoXzDCSyCvMHM6vzNjPtHJHqxdKTTMA3GLXELV297RDt8RdFGU55D9kxHgCPK",
  "key18": "5yd2oa3GTtAJRiGx3qhZqqaRzFscsj7k1TpnZYXDw7zBvgSH375NJRK5EZ5CwVFz5sRmazrnZsyQvYdmJVpnnWfw",
  "key19": "fyPnJZ8AWffkCkzHvQrGSdfKsZ1BJQSczdzDLioHHALpTeq3ZKYy6PAa3NkYX7A4XSTz76c5tv2PxFnbzzAnxpP",
  "key20": "QK4vy6UR33TCk5rebJoQpxzenZgwS1CgCcMgS4Ag9vUQB5t346tvJKdGumDw31XAxFRj9pBtFJr7TyQVZA6YysY",
  "key21": "5ELc3QxeUpGtbZ9obkLAEM65tiaUiBPy8Fmaj31DyhoR9T1M9it5QBc2UYAut7x9w9NjrqMnbjK4kcKS5HNbb4QF",
  "key22": "4rUKXSgpTHSgkeAqm1EnoV8tmDZHxu2VuiRKKGw4ANA8Dz1fNagNLAoAKWHFhSH84drGGG6FmAH8FUf1U3kEpNJo",
  "key23": "2hKYMzL3JAYYD98vAoXv2bNmLcERke5JRpHrqtUXb8LG7UWjwQ3aGv82JNAvcSAtSQ53376Ce1nNiSVnHyENrQsJ",
  "key24": "5Y7R2dDtk7o23ypAE8EMvAmP41qWBVbTsUCR9Raxz9DaokjkpVsvadVasFmN3TQh3A1fvF2TMUFjcWRLcN1daoKa",
  "key25": "5K824LAMeEebYyuZgX9KjnahnVGG2rBccgUeh7gfr36mzW3o31Kr4W3SBr82aQhzc1epoUcPmheLxKFv48HCy4xn",
  "key26": "2fGSqytc6Uw3nhNHCwc23XtsbR5JkcCd4myCSTe3a9cTKzHpQ7Ce2Pdz3M1EToCJSgVstcumt7d9TrckpEm5RXUA",
  "key27": "3nvQh4gUHkcMfJE1CREQgmDRWyQfswh4fT4ku5aMsYtDxaTexdeec1EjFPbxYDDfq1Vy5MKZGEU3hFeGw5EERnNV",
  "key28": "37wnEpdSiqpR57cjxAywf4hCqrn8Pa3dcUBfbXfBRgRhrkHQcNJNGWJJuJR7jrdQaGd83dcStDQkky8Sv2rYps3D",
  "key29": "DpLCbnvscEs1sXhP2weEWuieUMRJgpaGJA2rCkXNEm8koYNf5HDyDcbjPSCSPfE94a9fXgtcWXADAxAeaNW2avn",
  "key30": "5zhT3YWikgDyzAVkmbvDgmFmmZUCAcz523ERbnoLtosoyZq7rwUkZizPkEZAkqWvDWX78cKdYFWZyWNGMBWhWiAT",
  "key31": "dnNyrDd77ds4Joq8FBJLxjYEBmz3XhtUMABdsKDbnvhso6VFVRj2zERpBz7yerRbPBFvpUzABttced4dZVWLBze"
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
