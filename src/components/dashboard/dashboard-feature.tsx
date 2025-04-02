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
    "3m2zvBMZrZdmj1pSZJLDnwDm7i4sfxaJi31tbVDuUx7m3RVvhybe27wcGJ4CgQHBj63vQEJoxW6vLHGtM17E6wuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFE5jSETZuWgPaPfWntGKo48gXabNRemWxdxXG2GGwirXxQNJrGXuK4kqdqJo1YiTW6w5BZPeeKtX9G1kevLaXK",
  "key1": "4dvTjfprqejmC8riCqooftVeHE1EZLLFGQ84mUnxSZnzgjeUCee5nyke1H8v5FWzySqBwcoCyKtuMYDuDf5SUDM7",
  "key2": "HfriDiBFqvMrZT6JNjY7GEnHtd71vC5omygLH4f9Z5NpwCNsLnyWiePq9YP4A5vyUJg6Pb77gpJchFjtybcczpD",
  "key3": "67hd7zVQ61rUBxuVVqizZwKReF1zVs3dcUUR4cFaZcWp1rZRA3YvibBQ26sBcjyZXpfbfogF8mgNaScHgWzUbfbU",
  "key4": "4RSHQXmt6uFYe4T2Y8n1f4dzqsdLsxz26wBZbrT1A8ZRJRkwHBnAHoCTJ57jAVFzVwqsnK1nEdLgpcrBdSYsz5he",
  "key5": "4t2A94KPvYCyk8gnR9RaB3N2ijNbsvmWZgud9t8pweR6iwCfAxuRrWKf1nQHngZvRjzo52yzCuoQnVVqk7yUpmhv",
  "key6": "64FNkVm5HqbfbzsnebUDgnHg7DNY7BfTaAveuuDyD5wroDzpAxxAyTnLzsq5TEXtfn7kkSg4cUKTr6ZTNfPCQBf8",
  "key7": "5UCvdnJ1oMYZgs469iWyWxv5yp1X3FWsQu3KBaHbXEmBok9J7Toa4gLbgDkLWf4MbzyKqzKtKQUgeBj4pMvt7BmP",
  "key8": "9V4qypX23CKHTb5mKtycDKs2vpcQCz132QXT6u8W9ckKXM4coVVNDxxucEycFeD7kxegMJvtYWi5RmpBqFHXujh",
  "key9": "57eKEHaZDV5skijVJVFmNFuycyYxs2Jfbd7rSK9r8x1Zb9uFuhhH9ncdWEFihjzTUxdaxQKArutxPTnZ2do3vgRi",
  "key10": "456ESLMEA4zQFC2ZiZcxgBKktViRkUvWryr16E8fNnFwrfDfoGhJ95kiLC3zRbQF1W5WUWSuQty2xgoDMyFYsHBm",
  "key11": "4h5VQJ5hDrmQCNsnMB7ein79euNhX368YxMEAhioyEXPvcvpFmw8xzzvTZPHLT8pDPe3RPW8pbYZH6vPykLxoxxs",
  "key12": "3zV7ZSkkasixwo1D2jAFBmyzqsTjgytB9uVXncUgeHrxBP6tPahLmvqQ5iTMWAcbFtjDPGs8ahzX65kRvJBhQgAW",
  "key13": "67Rm4YGf1bh4Q4qJgzDpkdJA57rQ2Eo6iMevoFbfAwGGC1vpp9wmgcw3ymK5b7c3JoMAcKRbx1qR4DxTE4eorQ58",
  "key14": "5UY1252wALFBWogRmYMtEtuPD5k7boJzYKzhvGLnXW82AXNXPH3Grq2tLuPbBUE52qwm91DS3r7LHsdxc9aMjZ4W",
  "key15": "32U4AQNRUy48LxdDJWgDgeg8PY71BYZfk3zyq8BMKY4KE199PQxjy3cGRuSq1QHXhRBu8DJ7YgWEVmB5sGZEvySe",
  "key16": "5WVPpzi7Tv7JQ2d3iZ6nP4X71MRkt177CM5H1J8RVsBMzZZ22dFMvu19KZxHnr4TWynfZ5dqTnJiVT6AfJ8E9Z9E",
  "key17": "5EJ7kMiJmoiXrp7pGdf1e9EZ8zJmxEkgvFz7Q5f1yNfpscAjiQsVPihbpZBVDaiioFYQihCvKhkF516WarkWcdWg",
  "key18": "3i5Dhp98DyEBUE1oGKvjsH2EVfqUT2R1RpfhKxBvUu62sJvXBHKAjjWpK3mBZ3oN92ugeFUQJ8uDvapryu81Yz8i",
  "key19": "Us5kW7gpRrVw9yk7w6Xf4LBt6GvAUWLByS446NhfkqX41wce2fVbpNM9TtcwkSBrDdNqbDXnkdGHuTUvxvEXZHm",
  "key20": "NgbHaZLJJHyG61oH1QsEPGqLuGg6VEwV4ShWXq2YW1FPttmLBWBhRi78TH6PdHLmgfWYyyFTUqbDymXXHbFnfNx",
  "key21": "5ChdYzBVU8wcSoTnoDBUYPqxjifwAyEd6fqAM9pdozEDEoPa6D4dEZJUvN1kNQCxF4kGK8TYCfAqG2sb45FVMjUq",
  "key22": "HZYBjhB57w33nbWehH1trVL1KCQUKqzfnfoX5mc36WYdQQEk2z9MEEBBVw7mvUzs6JBfGEhXhUY5PPtw9ePdJHu",
  "key23": "5n1oZZf8YvhsRheYVhD2UpUJhm8m3fo9bxRzLtudw3frjNcYeFKqhQtscbiojf4d8txRqYs3AGRdXqta9Lj5D3Vm",
  "key24": "4QsHsGyBd3WtMS2UZjdgCMAmMBQkepWxvd1gdbREyhSfJwW2p4ip55mMfeZx16zY8uzuZht56a69VagdsHRhxYj1",
  "key25": "ermCBih5vtRcBjYV529BJsnPDvEzrfVY9pKvSXHi3LYSf17BdVvvZHucTFBgEX3KoKRKbbP3uzq8FGWzWCenWpX",
  "key26": "5SA1ytEricPpT6zJosWSfJmti5wzLYxD3aukRxPhxeGiW2ySXMTBsj75ns6vRsmJupqAeXotuTL4U5yfgYf4EKkL",
  "key27": "3QZBdnKRFNEBwcQYHFJrHaqv1ccUxGYCkJ2d8hpeiReEWJNXtTvsL6r8o7Y2ud5AukXN6REcvUdFFGFT9SzFLRwJ",
  "key28": "5bSB6LbymMkpYrSSiiKRSd7asvwF3kdjvwqazWKXoyEDX7KjnMnnPbQZQtbH9PqkRkVEvad8zJFxg9DQUdGyKLdJ",
  "key29": "dYQ6J5CC99wwsJqg9VEEqivNqvt2z6iWKD6w14cBJTHPWJyveBPFGMy6AQWaKRpJ1oqRFuocSmzmecA1FgqSpaK",
  "key30": "4Z2YkzyCqSisb4obhjEbqAZKGkMoprnCo9XvMQihtgMHkJZFo9LdqtKDwQ2yzhLcdq531mLjY5vQFX3H9qN64p14",
  "key31": "XZ8rFSwHsGE2zoGyxQWiZJuZW2SW8NzuXNn23f55pHW3qhkZEyrmygafvhEbBh8hcXzhJZeofNoSFcswqXFz9gY",
  "key32": "3tKs4bjXdMfNygPqwy9uvwGcwGAepZ3wPcemNx3ApVW6Buo47L5EPnTFFf6cvaDuvXYGm55aPZy5n7TGAMWvmXCQ",
  "key33": "21Gny2LW5BzgP7ZQxhMQJysLPdTXRMoUWMYzj896jnjyAJoM562p5qyoeHpLPP4wfcMU79xmc1Zx9cafqvNCtNQV",
  "key34": "XwNSKHoM8U1Di1JhnJxKWZVJMX77SEfpuNTAebfQvgxVJ3d3FoMcqPPyGYbPYAuisGqfEmH49TQhWFEEgN7q4Qg",
  "key35": "2Fo5DuUG3XMDJsPSJnkM62X3GMvdSEERNM7tAdDzDwTnxMNSTtjKDEvga8TfUp3fPrCXkTKGpjZQUR6SmB2ug5MS"
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
