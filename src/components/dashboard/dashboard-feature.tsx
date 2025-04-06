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
    "4XJqbRY8q3m7hQ3FdiUJ22eEBWeZRNFeaGaaLTE1wSjaPzjfeUHsLM7Zaq958PFUEfBBThrw6qZKT1bVNvapsteN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NoiPicfukcoJwNFLBTMQASit6Vb3AwU147CHcKUujDej1peRK4NDzrjm9xPxDvJbhV7b2Z2gGtovBARoqznTCZ5",
  "key1": "3MpskUfs6f1ZZ1CFrD6PKPaRkqrmCav5zKufzbXSC2Hk5PXydAkoUr811phLuZC1S8y31C4zc6pibhESTtSK4KeE",
  "key2": "4CabFDHp7gF8jnJi6z59aQaEc6ndWLSHZ1wu8PjY9H5BKNd3fcchE1Sp2vYuYpTLEhFJS8n8UbzJWk8FjQJph6GN",
  "key3": "pF4KnuUH7o97BogHCS5VvNRAmT3pD2vEhzUaLDMrFvuvgttMyHk7KBFmEaoMp3pyseS6ihXUPi3qeQDVPqFn924",
  "key4": "YcYc7uWsXb5srydVeMBH6EWUx5k1ETgsxh6VnrZmX8Zz47HDEKpzYZ41iYYYWf3mjAV4aCb8GHfpawm3PjYunU2",
  "key5": "5H9kLDT1DHDzoQq5RM8yn8vCnfXpFRXnuPPUchheCe6K8twXoPKM8DWgsNU4zoxN1qAa79Nz7WTDgQuZ1A8sdTCi",
  "key6": "2E39kYGeKzJCdNHm3614LUUW5XKQn7BPjzTRJK7MdfiuVvuD3WBxzi8C546Yp9Zm3pYT5v7rPfrvXpLGMQz6rjwd",
  "key7": "4voVUiPi9gTXUZ7U5daRn895qQTqPZsqg51nbS64hHhqcNyZgvJsrf2hYgk239nVvZadSnUEqfAF9yZAWw5T3VRK",
  "key8": "3uEBk2ge2NQnhrvohsCgauZfcovp2nL7zzMigT1jPo7CrCaJZKGTXpVTGyS1FgegwUSipNC18eS1EVWFyYQeRGLv",
  "key9": "4JGgnhJo3XqKcwWRxAAzwuNW6hDbAZcsdYZp9i7tecSraLXKHk5SHxJBeaCSjgM8WRENSVMvkp9b9dpC58LBG3vK",
  "key10": "63FTjUyPqE5YFZswNXn47YEKUFpQ6smkshmPmgcfueLhJJ5GiusecYFcK2XfBrMhWyW44fj6eLgEy9Gc9eYLYJQV",
  "key11": "4he8xsJWRj3u5pCDkWo8gqezr8ykeLNjKXDZiyKf4jR5LY2gtXheEBm52nCqjquMXtKDFtYyfuVDftcqLEHa3dfd",
  "key12": "34aHTVPVYxhHCK3gPx9Qman8UoWyRqVBWGp7Dzsshh9ef7ZbonoVYhXgP5ivhmPAJrD74WwkEbAxiS2TmrsYGYrs",
  "key13": "pim9V3ngimFifdXhySMZSYBcQWbQ1ho1zS71bR3kLbSUEXk1T9h6mJhfeMc4dzyHVSfhnEyrKEmvR7dV6KfPPhw",
  "key14": "5BK9MMwCq6faFyLUaMBo5KiukjFkneNcofrakYGyuKPu63teBtzefbofjjf1GLtXvy84A1f5KGy74VzQutCwe91P",
  "key15": "3LfSm7ebTZxHm4L8fcoKGFNpqRPAVehK24EEQVgBagYey3SphQKvX7jfmNDfFe5S5Foe2kkhdpRFJsTnh1Pg4hix",
  "key16": "CWXoSkzmcH1GjMt9Y9rEhYKSwjxtBRZwv4Re8rbWqffC1jVoCXfzGZBBHxzVc2agTdGjGh8ngXiFqXvJmkBRnPk",
  "key17": "2mnqxGujb9HVqNq8pf6DnK6B2tHmFdsrkFQxzwujECSF8Lmd7PQui2th1k4CpRoCun9VPtjKtfoCiQsnqaRvXoLz",
  "key18": "2adPkfYV3fRHpAHPivTvzKULzWiMKXd7h299dXEWmZqs5T1SG7YuHH7YcJaXumDjT3crBcXbp82uBgSxDKpJZdY5",
  "key19": "5dnTWTQS4Gt5VhZ3RdX2Res6JtgXJjBquXoPi8TNVb7KrsQD9WNZqfruPHNwhUZ3NjrqGjxjowU7A6B6dXUxF12h",
  "key20": "gofoQ24zGRbwc9ftRkyo2Ci4B3qiu1WLwFbsPy3aRrkmYP68zY7W1sXNtbC1KPNWDGgW6AGK4MapWuhNEjao8ah",
  "key21": "32F3yKTrTjCVhmTNaa3rcJdEWvXdqGA2yN7dHgQUHhSJs4vR2wkFiKrZjxk35Xdsv2jH9txMFYo5n3gfK7XaJFf5",
  "key22": "64RU4iJLjF5M6CiqTe65Up34gAt6gTv4xcDnXQ3CbBYmtoKQGdxN5PiZhj7ZJsGa9SN4DBLQf6kXR9Rv5wWuoZ86",
  "key23": "5p6HMC8s9huxMKR1CXDFgPo8W4pFKAfdCDciozbHHhuBtmgxiFaJUsm94RhJ9UyGc2tfh9FEKbYAaJ6xMDsmaLNa",
  "key24": "3wL5w2jctKveYqHywBdDmEHsCQaPuhYacYtJZAaMkJwWxJxNq5xay6ZgFATEYvu543ExG655gLF8jgtDDeLE1Ki8",
  "key25": "3Z9pZQashc7yySdAiFZ3rKu2pQdiZo1kwPmE9NEuBHYB2wpkqz4scChQhj7nUZ3NEBpdBvtniXwgR1y3QGW8saA9",
  "key26": "2tT4N4YJLPC3aY3V1sPzPHzZpJF8Y4VuyEfG1UrZoCsHjmnVhdWozXpaJZYewxaA9chxconbKpvRXce5qX3L1sm",
  "key27": "2psifE7ayjaDvSGkoY2P6xYyEi5SauwJbPCEytzmZuW1MM1ygogKCXFB6DKWPrKvj8TmCGDr9jM6eMyKNGf9otZn"
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
