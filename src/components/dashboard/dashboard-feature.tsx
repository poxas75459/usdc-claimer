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
    "4CyZ796HxTDw6u9kM9SWYmY6FGJKK9k1rSEJ1JFWoYQjkfu6HdVxu3MzSgzfvqDZ6ws1YCwBtq2AHg61ukvxGiVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jP2fGm4HF1WRSG1YJi8W9tdQirEjNuTgXjBELu9AbYK6ZQQZ3op7yYLnnoqQ6sMWEDGvCFzyZiZphfv2bBPWiNn",
  "key1": "BjzEpk2EXfCFPsa2EHEk19gC6tuPth64qvUYNgqS9BkB6eg42CwwEneDjbLDv88uPDzUsr8sTQUeYoEVFponRhf",
  "key2": "47po3rqwfcHZTjJFkwCuzENgo3oN4tSKcmzMz6akXpJEruQaLLihAaVoX8dVhqBp2avTkdaLaVLrre5Uo5NyiY46",
  "key3": "RUEzLjb172xjaGQUHX6ei5yCbDQJYrWQAKz6JhJ7yPK5MRWyscubjkM2Sw1tYzDjenSaFeuus7ALezS7bRmNbdS",
  "key4": "4GZ7uey2E1r3tH2C3eQyKLUQyPYwttvAL5L4W4is9gUPmGcrh9JMwicyUJkoqPTnZdAmVTzXoN4oygeM4RivSeeo",
  "key5": "4h5Cca6A8yZB2xkeUB2kNuP4ZNvqiYQWe5kbAqeF59JLp9yW6Rrs7A7eCmGEYxx4iLzsTYaMwZXjcHvL1byf41bj",
  "key6": "2HMtNNCTYEkNpzMrMS3VoZ6Tg3d1Vm6VScnbfd7hGqVbFiHuHwSaQWHxc7ZC246v2D5AoTEgEp2JZ6RgeW4JYdgo",
  "key7": "4a6uMvuaeLWQiZkxTVGb1Ty31aXjN3T2uw29xaqoLUbvSxN6SFWj9N1HGxtYDHJKxyfr3q8mde9ga9mnoqneEoBN",
  "key8": "45yK4ktEvdr5V6CGmoGMWPeh8MAmYWDBMefgDYAxfJZH77ThvR8Lewr7CqVU769BqcEnksV4ZnYKQNM9x8TVbXTS",
  "key9": "2b1G89cT47EGrZEtJicGWjPKQGSjbEDdet5uCvAGaEuuNzWd3aDacrN8QvDNJLFvHqgbNuFyHvF3ZYXpVUbC8YR3",
  "key10": "3W8ESRGFW7XE6E3Mew8ifmbf6Pk6L72TfgJcDnSipfzNiGKg2Gzozv2kmCP45L7coNu3Cnrdwrsp7Vpbyk74dvJd",
  "key11": "4BeP5VnjHrHvcKJaipqF7mK5rcvU13bfJK3RqGMxiGm7jffDe4y7Z67bEgSmz9NaimvGbuUy9vyzPz9CT1GLVSoV",
  "key12": "66GB5eHJJrEuPkFU55e7RoWmvrjK92o5Td2v82CEjMH5CKrUdzbkXbvSh9rQvcUwvugCFHW6hg3pNiSmXFrvpHsJ",
  "key13": "2n7JG9naHnaWYaM7KbKHCevZJzdTyQ3QmfFJUBE32pW1ogK6Pyzo4GKvJm4WyxTX2gdmz1CzZuc6AnBaXk6M5H63",
  "key14": "2SF98H4c24zVbwa4n4jDi9rfSRDBHQirLccNZHh3X5NafQxdWDjJQgWV8GYc2nRfF8griWwMmL5zAocnuTujZwWN",
  "key15": "3Jwsqi9XLRtKUdQAmTKBJjz7i3tygY3V24vtHHFSZE3DGYVhvT5BDbYZReDKRJcDAnnBKyraQrPnpMqN8g4ecSwi",
  "key16": "2bfukRPW1pnsxwdjnU1sypHdYb6NGLFAqFwWX51uTXJiaiQRpDhpqJpJk461vURJMRJ7JYxQiBw22taQXCn7A8vW",
  "key17": "4gZkBMhzbHgJoHs416BcWUuE3xkQKsZFUNZQeHsUJ9Lz5zXeTMvd8iEUm7cfmiPhTuvpSZKccJoumegMQGHEL8Kd",
  "key18": "578K1WedJ7c9z9fvnDKNBURhkyj9zvQhPc9Unbd13kMwHp7sVQBX4h7Ahpu2aDL9gp5i5wey6R1oBurjNrJJaHrS",
  "key19": "57cmkEvZv4Atu4mA4d6bMxawdqFbxSKSguFwVEk1kS9bfjLYAgmRpxyhRVTU9G6sDYZ9kxaqTudD1ApDa4tBuSPs",
  "key20": "59qPBPfaECaHE8P9wNvczb3bnsrtoAneNTskngtZ45z6QyTrJWMJukNXVmSiD71P8LAwxgMsjkdvCMUJVYcJtGFi",
  "key21": "gsx5nfVDZtQLK5QThrScjg3ZG57ZC7BbPMb9FcWiGiLxeif5BEK2j4QSbcHsdeM9fC6TtLRa1zqyBxWTEqfYwuR",
  "key22": "4NZe9aVS4rjtJ5BVPPxNP9JUCrJbkq39BZV5b7EEEBpoBDnHxJdUnfS8aZ21tVxTyufzy1LNxPnDR1K2tsRqzgT2",
  "key23": "7ZWD3iZydtax1zbPk1pFKgL7gBCVYgA2EjRdb2m6fbkdCUCzjYBK8GEZuP28MiYfBc38hatyv6zCDeHXHjffYrM",
  "key24": "8TyhRamMLjauSTzXwT5QKaHTw1pyBPhS15JSdaiemFsdkCpEpaoWoaQmHdN8EWQmuQhymVxQVHJmR18JFeZxThS",
  "key25": "Uf3qGxRUWhNNq1MS2tT4gofMSpU4SKGFZNHMykjwf6VspECKnunasBzmDn6pHB9FF4cAaWoWBKN873oRiVm2PG5",
  "key26": "3P3aQc6QFF9m9C6Kk5LAcNk2dpwQdvvCAJri9gA3C91Ksh5irhfx5TC7we4HFkeN7XGzHH8DfmxyTdJQ2wKttPJe",
  "key27": "nctBU9VBPMipNJVp3kQN6nNwrGZ7bsMR2KLvbJeX7Qh8fuL2yHZN2cgH4gXHQy7T6mETwAtK5JFgy8uFqhN5aMX",
  "key28": "5dk5TGqtwjzTiEdwvmkUg8qxfVtZsn2XUpAaBSo4V1KregZvo3bHytbBi9Ef6VpyHhjiXTaNS2p3PprrZtk2q13f",
  "key29": "ZRvtnLxF2bpcFjUW6iiY7x8zqi4yC5gkwdYwMT6qgnUyG5PqiWbEFZmoWwkjpmaZBS8oWXemA77R7nSwG6mm11W",
  "key30": "5D2avSERcxRSuNKMeA1dQQKCvkD6vnd6PiGaz2NU3sTiVNiYzXVvUNT6ZPATPx2Jr12SLCyxzCt4vuPLKiAswuC3",
  "key31": "5pvfPBd42cmsgM57Z4SaMHgsfdaAspnL1YA8Ptwg948vZRWB7oMqhaA6cuHaaokSFR7kkiUMwhjxw5poPRg4z1rR",
  "key32": "2Byvai8dnpvcgJvrXCpURHcoS9WyWDn9J2yQJ8vDkyHQVTFKSMGeCMofzoRxM8VhNgq2yks3VUdARgsyKb54i9Ef",
  "key33": "3YbTqQHnx22VwbgY7UY9VktAsKvW3K1ExmTiSuqEhULPB8gQXZCSyiVDGfoJwn89vLmFWHGzXz5irGnPajJL3A45",
  "key34": "iKYQ5YRdb82vY3oK5LmPa3upFRnAndm2r2hi49JQ1hjMmY1Dcc54N1ktJoLXCmUSr5ZFqdBDH3bBnQxUkTxqiB9"
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
