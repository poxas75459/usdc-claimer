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
    "cCPv8a32VE7edQUyyj3Hm6KpsHfyMtkbshLcm8BUAef7JTQ55vadHTvCP4XBEHX7QiP7CgBVKEeSdgJg1B6oXXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZJJWL7i4ZuHhFibiiSRKQN64xdTFDp7zyZQjvdeHPNmA96dtJqQGTE4U1iDTkxZ1CCNqF27m7CEWvTjtXWVH2G",
  "key1": "23PaFknix4ArwqcucLBM78bMEWUfuXtApFDPBw8XS4iFexacM9VRKfsbYtY3GJz6VYqcb4ob1yZnj5kAKRdEBTok",
  "key2": "V4KTRTjWZpkhbmSBFkZPUAk66NjwauvjARt7KL5Y2E1mLtfZMQ9N8V6P5r8p8UMKp5d229sEtymaGpHkZ5dS9k3",
  "key3": "4TPeaZNvWxZcojnnZXy9HZ7561Z3q61g9sUTChuEFyy6dNUi6a3KD1fpwbdXooPGcxpN7w12cDmUvRmwpjR94NJ3",
  "key4": "46zqL81BDHBANZt36Q16EoNBfwTjormBFGEhPC3fguGgSWayxriNGyS3XqG5t1Re35XFLzXEgC7W4nAJ1cS668H3",
  "key5": "8HtEJo3ZJ51bo7PKWFpcnjrSBSqyxPCAHJuUDi6ZzP2ruhgt21pNQ6zVGqFSuvdbnpvTFmSWADmLBQginu4dP7f",
  "key6": "2ZVBacz9q3fBvyaaWmgLRWiuvTWgEPQcQx1UjmoeAhLCajAykSdQhkSU48v23p4cHqmnZGLP3nNRCAA7M9RrVyJV",
  "key7": "3MLFCtcZaJVftQGFWqvrZU38d7XVrpDwHTBV5eXnaSWytS7GLUwxnGV2sQsHU7s7tgPNH22aHFPVHXoL9eQHT6b5",
  "key8": "39ZGYzQruxrajq78KCTrvJ28G1SUPTU5gKHyTPt6jkvznDHJhySzz7hz3HfTBQm6DukAWyuF2Kzp2jQhPpbw22Qg",
  "key9": "3WLCjuaFvyf7KqB3CXJ4cCZ5HRJ6q588DttYmbMKiwfhs3gZn9ggRVj9rUR1e582P8MHeoeREJTWedbEXbd4iP7o",
  "key10": "2jMnJXih7UWeMr4QB8Sp8GAFt3nxsxxTjiqRHLYxibT4B2MnJnE8i4bMoNdt7Xt8N6i5YALFLwqS7ce2ZSimhuQd",
  "key11": "5SLR5aowoSntfAn62d3656CYv8bx58p86DQRbsWoGvefcwx1kyNCNJ7qacyKpVgn5Q6VewPaCk8HW8kBUekGJHnn",
  "key12": "5hQs8eYgnTaovkwRgzWXTU8M7QYzLDHcQabfRbuaTQLJCf6HVCJt2Pa2Zu1SE7jc6DtwQhq4eJZDMEyZeTyCFPNN",
  "key13": "4zQcfyFSLbPc7v9Zj3x3VhcKzs2d1H4XzyydMXBBdM7MBdP4k6XWpoa7ZYC9D5SCXFj7S2pA1d5HLQEY7LczQNcm",
  "key14": "2Pq9jYaSCJnQpuNpQP1fkBCS6p6tDTsFYorWrZySszaDw7fgkedS5uViEjeHSH8DnfcbxAs8ZQyC67mKg94iEhgG",
  "key15": "4qCRkfndiCypswc1cKqWzZhKVZrVBnvKXKdsGz5zyUZ98wnvLVd1LxPYBqyHjPyFPsbKSsn6FwBc3sa1q3jZcNdV",
  "key16": "5MR4HjvLJVQZQCE8dA76pfiBjH7AxFGvABYJFs44L2ZkW1XmkALzn7zJJyapey91f3VZMatQkbzJeC7tMVnA33AL",
  "key17": "ep93GY4pjVow7ko6kqHkZgMUwNBAS6P1jkRbcSEdxkiYg6Do6cpQ1dxKdudj4szVMSWv9cEyW9s9MrQJLiDoJtm",
  "key18": "4ATnwCqzf1AqnYkmbbuDXfwyp2e2bzsZympr24mEhcnZmSEGB7ySzoqCu6SwdacUAb87KnfYZC3vY38CAqDuiQkb",
  "key19": "EAesXnyL79NiLNwUi2DdBmEmLxyjAAVSpXmGTXdF3sdXNHmwvwzZQDTeu8uETshGUByMoJXZb1SnGyXDwFmuYJq",
  "key20": "3VsqFJCLZ69tUfwdbwKXRasJpvC1s9TTg5PTwUYVX2Uwnbqto2o2eL1Uroj5Hjv27JHnntQaBkPGMS6wWzYTKc7p",
  "key21": "2jjEzpSnM2gKHYDaFFmW3ogAoncsG7jeAZi6Kwap6y3gzW2pw438nQtTTi4vX5984yFLHJWMQ2iZzC8jwtZBHz5L",
  "key22": "3Zeu1oAFtM61ZGUVKgwVntCkQU7mVahy8ogianphD6b6By8tNExW6YNQMEoFFoaVCYAm23pDTS5vdeEU3uaQuo8z",
  "key23": "mNqZeGZpKhKDRTtCkP2LktZY8Fq3pdNk8eNhFUZFwD1GKfjJkL36jV4hq3oCdo6SWa1x22nG9aCXnkWRtnHb38c",
  "key24": "316ZSk2wGUN81FbJtC7pt61pvruJMD8jYJt1atB3tUcPPY7L5R25yZSWzuySkTGwKH5LjB9DMVzU8dYf39dRSoAu",
  "key25": "3hKu3hTyX78rzsb6HsEStYQ9gYxAdV3QVATM3zzUWns37DNyztwHQpfN5aWGybNybr4ML2764g6S2zUPbzQcbYn2",
  "key26": "3XwYtDv5Xo2Gau8ogK5tKcsKiqDh129M3tV7xgppSVcRwDWN2XSjWB1wt657WEXmV5W7LwMXzYQnnvbi2dPX4ZD4",
  "key27": "wuzWZtLDTpe8p4TUzou7fDk2GPo9wg8vskCcG44kzESXKwDTwComnnhjUpwgCqvncwN5wMLgwLZXVnDTZgCtRDj",
  "key28": "4sx2Qeu7VKuEiL2SazVRQAUzqfCXNJdw2WvYhxqgdzMhU4AWYJ41qoiXdZP3KWUDRZJMG6Kz7QYModv5x1MjwSpe",
  "key29": "35fX8NqNZrJWyH1LVYauZiZjSxndKBjg9tytb3bgtXJyV1SfbRggpPyVgk5K3h6GAykQYhp6X2dGB9WUBoJXChQ4",
  "key30": "4ffMCnLgqsLb4nkST2qANLH8QKu4YPVYsbwd4an5kdyFdofM1SSYeLwjfv3KndRqaUFf8sSR5teR4Wi6UKKEv3qe",
  "key31": "4c7ZY6BxyhpPKQYkN4ZkbxPFs5xWkzbLr7uELJUGVpUoPozuh6KheZkjRgu6smAXfPByF6dGfAtuG3ESca9U33s9",
  "key32": "TJZYpwoPpRnHwLYW9a4kV2Qrt6ZYYLNw7sGLQYZyJF38oAbns2ypQLXopPfXbDm4PnCzpCknhxPAkpBMKYL4C5n",
  "key33": "5be9TZyZiAGYvQc4FUiWwkpNCEN8ijJaxdo9HzJGwMntPbSXRyPfUYseib3yktL3yuWWKPEZnGxjx4zXcV2h2ckH",
  "key34": "3TLDZw6saEW8QWyqBToyGGssVDaLocXkKsokwtSKhRJUfPWNmw32UzzssQ4BhUP1cZqGg9R8Tx2qERC16Dqs2xrG"
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
