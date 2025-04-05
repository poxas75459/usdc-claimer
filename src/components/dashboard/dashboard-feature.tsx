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
    "2QoQ6KoB3HELqjiF38td4TERdFDLpKELCWA2gC7p1ZkU4NcY67f64wDjPaQvEDjJRjHaZKgDDSYNWYkqdcqa8njb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i9L89iXftoQMuzZvA8QBSmXp2PGyDagSiuY6JMPecs5YXEzgbDXnkSEM8PUZFcj7V6nrkci2EewpJqikGbTMLR7",
  "key1": "5rwhPSxApeTVdjKMy19WWJvqwSJ6RXcgZviH9sZWTDWfLpbRCkNp2R5oMshyDCtTwtDB36QzkFQReAjGDiFwp2ck",
  "key2": "5B4J3EXEVJDRVxasmxfE5Z5jWAyE2mWf3Khjac2KxJigt2F9ufuLXuotiBsvzvYzEtgG5d5hU8RDRdAXYuok4PSM",
  "key3": "2yJDzoaY8mpCjfyVSm885PKocaJm2Cp2TnCHZFnu2Jijume7rDeUfpwbqjB3SKMiRJDZmT44ag5wYSrbsbo5tZDW",
  "key4": "4aQyKgEoVbcGJTHKHXokAnd9hsXnEJEGJp5dJKH6vPa7LrdB2KedCU7zensJcRsx7XXVNqizWh3R2n1n8zAF5Gwm",
  "key5": "2FmuDBVCUfCMPRGymPZy5rVbvQCNS757iNK59Y7L9JsRKgi4gdpis4mu9dz169CLTBSYDgUSZnmdXJg5i169R7tb",
  "key6": "3Ys4q2E2czYdJoM847KRzPgUy4AizJiu8BQDxe6FfLCmtg5TpMqvTtxT4TJeFsM5HGEuAZomUHMUCif19vVMPcXP",
  "key7": "3jLKPm6k5FY5rvhHhkQ9JxHnY5CTRmXqWewACgEv9AKbNUyi82QuhnWJ82hMoMHnPCWQRwHfYkqjQaYy8JdFygu8",
  "key8": "2so1dW5sH16wxCcDLCFTBh1TCWSP1q9vDAkjEizgP6VLTV3NF3wR3HRMNpDkBAdiHVUwB8JrAFH7yWpNbTyPjRE7",
  "key9": "5vkshVvB65CBeiFZzaEckVxffRMNwmsAMBs3hqrZ6c7dFER7HKjbjrMLN5y8N2raV7PeSRC2xLU8KwaXWvc2jYtr",
  "key10": "L5LoM1hiMKCF5RSjHZKdF4g7FRq4X1wJ8LzvceKDvQ5tARacnAx8fRdjf64oAGDUXBzU3PayDRb6muVvcxBKxrp",
  "key11": "5bKXWYZ9dW91ZZacodaczyJos3vAkQhpVYHPhgjiWSXm6J7QmFoigUX1jFRiBDZW5m6NET8xrWqo7ZX5Px5JwhFG",
  "key12": "3B4jhUWsfCGxgezdwpKBGdVwp3cGxunZv576zsYBWzqde5HGFTawMb51Gnb1aTebMvY1BfhCzqX8BN934sqq3hfM",
  "key13": "2J2nqb9oeaAm7gPQgtKBJ6xF4ZdwReEq7kXwuAvopniKNSntwqfn1XMDAJFP9FUnH7MuyRQTuproNNDRWAQFKfFa",
  "key14": "3oeyJQUbetVDDPmFhbGbyaq1a1acj5eRZHXBYqaLAQ2dThVd8P9uqobjW5wGioKXjjrHjAaBEtCY4MJDYwdT3557",
  "key15": "3HUq5vYFoYaf6jKQQXdSP2RpSRau9KJ8Zxr1BE7V2rBGbv6vgeTi4MBEKxbS4f2YfgM73c4rBofkuGD9uxL3KEBL",
  "key16": "38SxWXpGsTKgFicbFDjyMsxzUoDnDgDEt8Sr7NWBsLTTBxtYASStSh5gfLksZju7FG7HBR9hxqxjxbf1pZdGB6sC",
  "key17": "i6ztTY4kBAVT5bupjatb7FoiA8xrpuqHPed6R5G88uHRzC6WG6pT6o4MkFEivx3iEPVqnoKapArwmRyVXEdA2xA",
  "key18": "3RfPpfuWAbhkAFtZsPYG14gJYSjnuyUMDe7fE67EKat5HM4buwduTLXawVzbcjHjUu6WZfgLhJedSSbLLtfwXJUX",
  "key19": "4aspPbms6L3LzuTarddHgUr8LXqt7LUgBTgBG5Uq1wtrfQFmRLFcEzGmjHjVmfPfAwBKZmXPZTYXjCyHzZ2RMbuZ",
  "key20": "2LgsP9PTNhm8SSoAtNmfsoMGq59zod5s3iuqQ5WYSXQ3xhrhcyz7YWWXaN8w1jjHWBaFjHn2MbZ25ntunbzqGk2J",
  "key21": "4DBKoNuESoQ5RGEBMKPNBsybpfhv7hAh1GtxesdznNjHxxjFDxVZWxiwijrgKLrEnCJXQcLSmFenN3Vwou4S536L",
  "key22": "5tYfLxS77RnsEeVJLS4ugefXe6A4PBya2iL6iJ5vravsdQ6Z5TALAbdMZVM7cGANk6KbyQazXaUKCa9hntcaiLSC",
  "key23": "3yjDnzuvqoXJE7N1ASutiMAQB346vpL7q4ffWzTSLcWwAA2JApayre6QxVDWW4exvxLaW7SPUhbm4MBFLBeUNoKa",
  "key24": "5iY2i8eukLnymQeQSCEmfCfZqfzNJPzxm7cguiJ4Mck7nw3DEMhcRGbancu6VuPJp4cLLisAVoMmocpzaagBc8UT",
  "key25": "CLeLSBqQAtcZu6s3sL9Rig4tC3fRLEK8TpfyjPtQ668TwDgVdyGj2jFChtSQee6BxxfR8r5CggHXrnVeEEqBPi8",
  "key26": "3inaE6xEHiGBt6vUL1gqz9UcwXr2UQXeNw7XMofKu4Maj72KUhdSWBmxRM4EVPaiU7SbRkHFv62s7jrCYKK5mNQz",
  "key27": "4qGJwcCi8thzXa5uQD3XScZAsvcU7y77ejKDdS5ZA1FLNkZ5SqFSoPq7wDhyQiNpcGzvHx4j8dcSt4NhXNi3ZTZ",
  "key28": "g6wYVjSNrWPZapFrM8dENkCU2UNM6kqdHU1Ubas7GxXYpb5fQnXj2DxwBsmBatcUry3G51LuiFiYg4VvkfU5qs3",
  "key29": "4kU4VbthVBdJMUooidCcVENYPwpEm88dD81hQxXCxCH7owL3e9GUYze6UXhEMBT38iqHKuSnZCKGRL3oyVoUDp2B",
  "key30": "525C9qU7mH7r6MSkozmoKjYkJHTHWW8PZyh5J9BSv1EKGqewUZLtrPrEAUL9tx42Phavt6WV2gj4cxn7gXZaknp9",
  "key31": "5yDq5cbBXJczZSModqSyLyNEY3L6LragU5tki4E5yPKZFR6qhvyndvTDrUnSrAyiEdYnwmwJobH6fJb6nwiJLGFD",
  "key32": "2AHNevAzaHeoHvm8NjQqGETF3uRyZRjjZft5yG7weowsSYjBSvarXdTiJPeUZEW64QMzNHz5xRVRkmXUq9NaWeug"
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
