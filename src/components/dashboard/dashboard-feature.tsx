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
    "5PdzhNDn3iXadtuSmfKenqSxWZDoTJwBn4seXp6v3xS8N37w6RHPSmt6tjBMB6P9Cn8V7tLc1SgE83yjsr9qeMig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGzU3KzTQYam3QUYovMepz2iEGhmph2ZzQDTdHvmA8ghcvRv4fjeR3hbhCJ7kg5RNTmp8sxYgG7EpihN3fmrMVp",
  "key1": "3LvDgAbyngL76gwWLrHQK3VhDjiEqThdvMJH6ciTzzDzpArXarE8HG5FE62e9Ghk8jkhmYES5YWrh6jmxPVid9xD",
  "key2": "2KQ7k4HNU91tHnMBCQAJmQejsphpU2j7RNc8RJtz1JPnFNoB5mYwJwsHUZFtAj6xreBU1YCvopTvoEcN9ZnGu8tB",
  "key3": "5WZuJco2jcEkVrTR1KoLzN3ogTW8pvZxPidKjShPsRQQMpWaTPsEWqwxSoyK2aiBpEc43AopjrGMEqgr6Z19GMac",
  "key4": "5phPqA6X9kwH9DTUqFKiwZGdLpGgA2GjGonL9rcK1TsuVwam1UC1egmmZk4oiSyrN3tiD49moSj6b9ByW1nt97wF",
  "key5": "3bsAJ8TRzprWs878U3RBte1Cr4q6yW3JksPzZ3orS9xjgUt8itsamm2u1TCCsqU8gBJKPb9crMsc8Fqr8LDAYSJA",
  "key6": "5QTE6T45CvcXB4xemJsN2THnmMBz5gnFatZJFdvAaRf1ahMHEFfFYYf38LJtg591jUKdLVgHjLwsMnvaVxPuecqz",
  "key7": "2PNfbkNURCzR3AwfqVF7GsCA4KxVLyE44qn6RrYVXHWcbNwiVbxjYyq6yBvYBfdeS25xw1Q39zDzzgo26AbCjp5H",
  "key8": "ER2PMBDGsUX2YZiXhP1fbpVd36WkWFauPtNordS8CRj1i1VUmzFZYBz6WWrBaaewkccaW3W2txAbE3bPwU9pYTE",
  "key9": "nMxT3SKnkFoLnuzGJ8oG4aEDUHHwUAccKAtdRFjvfrWmG39fEmYEmroBKRQCtUic5wHuBNFbLZX1D4Zpb3VLija",
  "key10": "xNjUx62MumwY3EGLKcoGovWDmGosuQ7RWCinpYHgd2Xq5c6eLtqPM4Y4q8VqMXgTD7M3T1hHAcFL44TeAGUB6nA",
  "key11": "5NAD9LqWjuzUZvvm1jxHBtwUi8pxLjjmZKHjCcci4b77idmnsfbjJe4CCpiKrQLUc9rpZQoFjj7wYrvQz5Fpuk2S",
  "key12": "5jZcCHwecmwAhDZ3Qvyek2spSAzyqjEVmn3XmKdtPhxZbhUdw6mW7y6dee4XV5wDRsAAKDosYJD8ZuRs2gNRjkZK",
  "key13": "4njU7YgXL18Xphsq5TXbNDV5DZo7PNHPfwxwF6vuAiVJbrHNXBqdbMoPQ61eqwQ5ZeXbFZaUVJENcL7oUWCy69h",
  "key14": "3xiygZgsUcsqqWhTGG8TQWn88dxJQd7j13eqpsjUw3iohUnSaYJc5NwaP1AFxcggvkW26Kjj9Mhc73h5pbLSekWA",
  "key15": "5qiZnrum8s3cmL95vhNWqXRdkso6cn62yzABsvfPDndkz5WdM2VwLF786YMh5DVr8t3VKhXGTeq9eoy8scTsLxxq",
  "key16": "31CsUbX3Qsv19pmjfoM1TdWkrmyJg1GMH3XTsCiyjLz3yJ3UXStM8huKm39VFnbiM3bkZ1bLvdWYgmEwhtTWuLE5",
  "key17": "obug7yT5K6oNESUFpmM3sXw7ZuBXzjv4ar5UwG34aDrjQxebg5Kacci2kSDrkAx14yUnpCjP1i9VyZwEWxkfrnY",
  "key18": "3MSCYmgdG9n8yzYmF9gMzE8q3DwvtrpneHWgAfbvn6pFhLRCsrAHx5hDQf1YmTzbhtNU1d3CN76R5ZAo3RiDTnfj",
  "key19": "4TW15hsbsy2mncKpSK9xddaiQBQg24ELTqr3D4zoPQuEYWjtXB1MQ9WeGiSDUczFfVGx8xyE1wwbgtCZzLDG4xse",
  "key20": "2uWLqDAz5gv5CVpc5vfQTDRkLYUN7R1c7LMXX9xb9axjBV6J4YuAkDnGWjdQetExgRnVLNUR5g7fBCy3YGPjM4dc",
  "key21": "4pUpbymnFkt53FT71dEwKKndNAEe5v7DaRYcmED8bRonzBFRvR23goJz99oM1h5RHxVSjUEHEWt6GBvu954JKCdN",
  "key22": "2wHUMVru4Yz6dZZxJNSy3d8tar3YYhTrPTZ8vB3Ht6VcxFjtjoGRmtY6H4DTghTk6kaPZx1FuusUqHxvVyNjKncf",
  "key23": "4CE8eCraDSy2ZANZzDdydmntNoSsjFbJvoqjWsxJTKqPKwHaFzTTUcSWa2ZzZnFnReTsHAEM2xN6RVrCDQW8KA7",
  "key24": "5SuKSRWcEBPN5Pbci1gykav9pYT5hpHmZsytomgridWDLPKm969NmFfmoTc5jLJsQpTLCEU9dMTZ41uJw1sFcn78",
  "key25": "3mUN4gzSiNcbaMLRzrKcxAC9U7cxrKKkUM94xcoZJXPkaJ7pV4EZ5iLyEtiHAV2ZtGu8THoeXM1EGhaDfiCreSFv",
  "key26": "3DbxZ4QpeybJxYnyjctPCb3W8XD9rTgbW6uCFaWkrXqQdKuZszBr8U9oV6FXB2S84taJhZ5H9nocE6ZUfYCigy57"
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
