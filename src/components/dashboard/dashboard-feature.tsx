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
    "3qpKZovSPBcSjGgZTVt3JmFaWrHD9YtC7Mz7L1s5HogGNioS7EkXguWGXGXW1e4wGxzcGzctoE1LuzBx9AgQwc55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2y5AyweHNb9KUfoYLCb6XRaDRvWysP4vStz6ydRtNhM4cJWzEg7q1iu8xDK49g55kLLHyLrYcYVJnvhqFhDhWW",
  "key1": "3uQCKhbT6T1EAgghmcwLvSSWRVLhTrU23TdfdnET43GJzWTq1nbid41sw3oyC5UVdnqKciwLRvtQNZJF1Qb7rz6",
  "key2": "2YenpCB675rR7un6uEbULqQ6cSxpijT7pKRN84vP3kEy6wnaZ72Qakn5z2BNbCu64dULZ9sQ31VckJZjKhzARmF2",
  "key3": "5LWMcxaJw2Mj9Wpg81EG2VcmWr8TMuTEkBWUMYySpddtG3psvPrTDQafAs9jMBNdLkmTKTKFZzXx88W7Czupm7jN",
  "key4": "3xHt4yRLAHMhUkKYENPyCzX6CwqJrbMM4KSWkmAtdpQQnw35q4jb5Go3KhcSWzJzMsdWEqB6QkGEtaS58cVbHVDk",
  "key5": "4GJECYWQqMWeG5sbTWHP2vmzrGmVfEPF1xWsLTTduzrh75Ws7rVUaynUsHWmxFbYABxuqdgSWmjVz8QQgvzVt3nw",
  "key6": "5zH6VEu9FTkLaiGGR4Fs2xPf6CRh8HxD78sx5SZa6appuMipSTFQjRVMSF1Z8DktQqvFzDmxrePjuJr5aRzZcQLg",
  "key7": "2gjLhXzx89CvFyYKuzyctUhEykgKgAHkwzxDNxqYecGQQLDUU34a2KQzGfGgdz132Eo6FdYFFLiLDifdPZaQjJaN",
  "key8": "ctkU4TUyX4D2wUv1ghRyW96mdU9o8HTwayhbB6ga22DeS4pqGtfYVFvbdxMA5i8z6oGEsz1rZHFiomHYAUq4XcR",
  "key9": "611vpYBfHiuFAgtARsQ887cGzCY4qEisgwejZrpQgRpd5CoKe9ctco71hSz1qk631f4WDG4nWZm74uP7E2hKQdhk",
  "key10": "2JP96jojwbuozRQsQrckFxxNg8Hp3WTrSqoP5iMxw6hAWwi48G7WjJ9yUkfUufShc8689MWg8hBZwCe8LE3kbrdT",
  "key11": "oQ26MoGb3G9PrgjLTyvSRyw4LciSMus8CVrfEGHJ6P7WSbVtTFLuDyAm6ZtWLnTgPbhNRLT8CcpjHUk6YBFUTff",
  "key12": "23noCAef6nrXBQe3qW2jYd4q4AmohsTAb25HvpZLhrwEcfXMHSu3CLiM8b1dKdZnkwmdRkvzVanV2FPy6QyW6uRc",
  "key13": "3f5K1bjifbtLYM9DyRDAPohWvvYuu3MYbCmN5vPNpnSWnYa5T5whBHmg4N9yDAozbryuMsp3JERbFs4buQuDmkN6",
  "key14": "7LKDJRn4UFcmL8ewinG3sXQjY3NqdjqJZ2qc16n1a9i94temAtSo8LjPBJLkPuDgEBtZb7dLD4FsZZecoPVwBtJ",
  "key15": "4AEkqW6FajNerTnVSPR3U7FQb3kSGxwZEtvKzRgMUHYCht2T6zDAWdJZsQe6B1g33eAnwAxM7mGGJAWiPe1DZHxx",
  "key16": "31vgwAaY9aZDqmn5VY8xHM8B19n5YCMnCrChYEAzbAUaLCcPyF37MDDpvnA5Nkj9Z4kJjBisC6s4EoTTyGovgdof",
  "key17": "2sVBWiengiPEZ4mfNdXkuJCaJK5gyfft6LBLZFbwTeG4jkwJTVBL9k83zGZCy7PSuJNj19Lknz2PLLn7CckSBcoU",
  "key18": "5Bdb3YD6LGyUzy9ryi3iPLvMC26c7TjuZWkLbdpPRN8aLy4JwA1uLaTsj5KzqqEpQQsmnPwZXW5D53X6EUwNZ72R",
  "key19": "3utC1Cd6REs1uWjcY2genQoFan1Lb4GfN7qsGD5NVC87QZnYtzZLLRiajRP6UQyJYJZ1F8trwMbCJ4tXuAJnE9Yw",
  "key20": "2AiAKh7aZHLMqvXk8LV3vXPpDEoAY1uruZTuJwPhKuDUSYgpueGw4tn9RrHKBQ1eaqCmDwjKhJLfgiYb7qkqgCjX",
  "key21": "X63yDCBaAfervQNe1ykVq8vxVoqzie5WJ83bFveCDN8sohBeCNVFNSbUa1paWJKd4gJqWKnpo3yKaQf9uzgx5m1",
  "key22": "4J6ardbwMLTGaWv2UDix5SeMqcL4FxLsYA8XUaJ2PC3DV6686K7gn1aSpg2GPKEwtwhG2pnfuDwoUUP344mmGzYD",
  "key23": "42WUcxnWoDz2Mt5Nz1SN7VuT9pF2eBver8rr5DBQvGXtYW1hSs6MRF1VeXkQcEKuB3Lzg2BSc61j9TZBNa2dHeLq",
  "key24": "3HoFs9LZktxud9Ysmx4JhAMc8kyP6fkCRJFgSFzMebccy3bnXr4dBuz3ZW8hJYUyFQf8N9tW9Z3y4nJJQUmSwvFK",
  "key25": "41UQMDX53udb8sETG2MV4VzBfzMvamNyESNeAamopLf7HU3TzTw8vgwP2tnbhc9HXUjTvSL3VnycmvcMcLcKNdF2",
  "key26": "5jgYSNWwjPjtMMciqpbNfd1Z3Js52d6keLoTuuWMzTSiDd41WTmdAfZhyGHVjSxbL8zn8XTHCxP54iwrr6XbLguS",
  "key27": "3jQYa66SBWeW4ckZwdrKSySP2hnYeisFNzLMnZ2HuXZPddQ97pmAtk45VbpLUHfAKt96R9ugGYnQQ36udc4hFa4R"
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
