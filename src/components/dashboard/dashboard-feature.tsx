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
    "3zrKDTHxvRz34PbRt3CXbzhjiPPeet8HXytzY4qPvoiXbEV8SS1pKNS4GaobRS32oMTZuJ7bjYAD53i9LPNaCh1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxjEMSw91nBsp2b8FdCyYYtR9hF4wLRE3VGtJEsSV1fJnXjNCsMCRfsFtKPwcyJpHEAgmDe4j3aUa82H5nQ4gzR",
  "key1": "4av4j5VrxYGb4C5uhQMFpLgpTYs9rbFUAWZVTa4SeYVvC5sHKHDiVMs4nv7865Y9ooYf7oY6wigC8TGXsTiMNFi7",
  "key2": "36tq2zyKKwwUd8uTYAN4piZXevfoJexViPy9KpriQrnf9Q8oNW1C2T14pF9v9WcvyxcySiywRaTCFdu5mSMHPfin",
  "key3": "21XqaoP3SyYFuFpModvdBJS61gmYX4D7DtACtaiSTF8rjv71y9eD2Y8R6j3Ef4VAQQ1tnDisPAiHQMNGEMRvtmUj",
  "key4": "3RePUjtMiqC8Z1jKwpqr7yMd6qexRaUg3ot3T5AKGY1LNr9aiP8tqB1bmVWRG2UxaNLjhww45scBxgTh5nvFUuch",
  "key5": "NfByE2X5wjFjA2tqYL23V6quoeubTa4TZLqiNnfqcBfvm2T4zNBSXVacymDCoGyXHzbB4PQkJNBdBuo5fqUVbMb",
  "key6": "vmAZRNw9CoQ5qUVDX3KY2ZyyYaZynovJYxkXTzCNsPxKCCR5LMGudwRbfm6G5ehEffyix3rnWJSkQcUDT4Jhu7f",
  "key7": "4CPVNZdjCQyGPqed69fgMdzxQKhqhsCADbYYm4CnzdSbNasj5zQVfZW667mJHACLs2B6gxZczbckNoLM76kE9Xhh",
  "key8": "5TtnVPwDzcf2rQpquM2yiMaNEMNuDyHr6zxiVcfXaYjW9ir2QGtQGcXqMZraEKSEYkauhjuQhSjs6yT2jEteduF4",
  "key9": "3hypJgEw8PgQWWRdQSAbBhQfPTxkWtahwykS6g9Sdaupva19nGwFusAioMMDYRA4C46q4HLZZvT43gnhb2gonFx4",
  "key10": "4B7JZhehGpwqy4TEBf9Ypj1r7GbQDFwHw7yggxDwbaNZGpt11kc6W6W8Wr4FsX6sS3WvRfhwBTQS8DRoicnPb5wL",
  "key11": "5Mf7C7gNb4KNQZfouJRB6xRg9kg9crKPARTgwkdNXep4B2jk2VbcXXgLySh8mi6ToRqSxfSY5wAX3u7VtDgP5GhS",
  "key12": "2pUFq4nJvhAMqchTA97wdfptiaAEvrSpMJSpi1BguvJzFkJZEQgRashtXAGFz3AGiAL9Hh4GP3c7pUnwp9PKu6Fg",
  "key13": "61chAT7QqvYLt8ykLdWi9S44VufYhHYQQH5KYh5gncZMuXRMwAwJfU4ZxNDVwpzjp3ti42AggJiqqTk7DCnk2UyT",
  "key14": "3zZwBj7aNRoMN3KUVrJ8RH3tjx536tgnX7EbMq2K9ZceCNfmQHXmmh4UCzesL1rTeazkvBotW5Gkk3Ekayo5y8mV",
  "key15": "myxJk3eBCHMThUr7NCJoAhVmbP35arvXxe5vsseX5p23zaz6HuCepzHqphk77bZb2H3V2Aqnpfh3EBafw7dCzef",
  "key16": "3jneKPpYPzPuAaMj3TmnnM8KjuJQRNFZ7XyfdyifYeBTr5U5Jtp7V17QUwqvRRdATi6ToRwpZdeg8iymNKnzwVF4",
  "key17": "5pbtwtcjL3eGxqdtM1MQBvAaCCgkEe9cd6QEcPrfHdhTSG2s2kWJikTPYt16CYACRqkSwVRAgc7oiYwPnT4wALVm",
  "key18": "3zyAZFN6A8r3e75uLpF6y6LTvNeNMju4idPStAwZTdtWFgM2WNPsFCCeZ3u1SToBZhJGqmMADhR5rwcd62WmATob",
  "key19": "2N3oJ2DqC1XEDxnZJhvn8uFPa5dW4KcZtFAAwL3dxfGdbyXwQQkvhigVekhmMWEv5mWjLs6jEomHRsAwJchjxTeD",
  "key20": "2BWj5rBk1X3J8bWGKx6m33oibnzE9UDL2J6QH2wJtVnqGKPWjNHv9azZkhMF5J7zRnd6azMJrGkQrzX19sjyKgDj",
  "key21": "3uvUoCDNC4sWC3Ukq1hegYchG6uiCiNXisDTq8kHWJ3Rr1teKmBfqSzzMP8dBMNmrk921APvLdSb9ZBKiUJzPWXu",
  "key22": "4hWoSHsV2DrHiHJp93siSmVHQj24UVnhvuA4wSBgRRTLRu82aUQ8Fokep8tWmQP3b5M4jofgSVP6j8uoVtSpHSU9",
  "key23": "42KLGHdPNqasdPYhjDyAXP6CshCNvxeYwqkowGynNc1LYuyNRr2ZBgDAaYzJDFDtvhW4n2AE34g3rgEgmcVYkhvp",
  "key24": "3oFJXwh3XUkPozjSMDGfSjJV1zrAYmghtFjdTYUXFreJWyZ21e8w9zDqkrwFeyhVj23aT8NBnD8YA7CiXXDyAt4Y",
  "key25": "3XDzmgYzj4NH9LFuewtUbwPxDJZkQWFVY3JencbkBknjgqdzKtnqTXWrRSYLHFhvrRGAW4kZB3Jc7x49cBPCwDE3",
  "key26": "2rE5Vhi6vVbQpWtQLqAMSAbKTdnC46rUCttuvcWDLwZwW8BzVV8UiBJJnzewvxSbqkHdL1YzsGSNDhzgdJjKAiUq",
  "key27": "3MEi8PvoauZ36nuRcDFLzTmLqFVeWs6yudsRsN9iQf8uCWrZ6NmLu6Kzraf6mig3DvuHE4TpV2ikHDULmmcUQx48",
  "key28": "4skoVuSzXjEEP7vC1vhv8XAFnesjdyF7QHLANEqw6qAURKihEYs4AoDo8jXWHEXaHq88BCeuihwrbUC5ghxms8gx",
  "key29": "5UQB2jq8TyVJHPzYD95EBsw19zg37NXCCMf9EuWe8MusLPMqW7U4uZU77vjRLsNgjgzDVAwNUt7kXHkwgKDwwrie",
  "key30": "Z5Qe4dXXuqE1V5xF7NihC4UgcyRTp8tp4sWf94RB5pQRsiESX9nv1wtas9XxDHCNPP1FACutThtpTZzNoqkQe7L",
  "key31": "P4swJLfw2DL5AeAMgPxB59ESueCFYnMMFA3UvVarrBHH7cjMsgNZ99e794PstB84Ez6Xkqg4NNfLGbUWQ28FHnd",
  "key32": "3tSJzJzc5eZJDM2F7eoQnoCQqPH5ThW1u72Gj2p6CMkhcDpgw63bBqh9ej28e9jTcEphTYY3LtYyDEqUaWgry9Yp",
  "key33": "GQGffYwZw9opmUm7ynJHnDnGgTA413e1d1byXL6di3in1635pAG4HMDKVtKuCHgGDTMSYJnmnWzHFtG5XoW997y"
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
