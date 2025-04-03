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
    "5MKRGkouwnYHoBTxJesz4c3Kf7AcFSDQbMUAKarm25AcfR3iV7CF3FjH1Rpd5rnWaYX5tEYVHaxAsCA4cUdwLkBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tg5tbWB3xD85QPuFMcfP2qa5vkptFkMbj2zK2kV5VEhJcwibjWE2bpUaNao3hv735SJZzvcqemcEnebTaJDeiRi",
  "key1": "CLWrGXGmn47PnDv1UBU7WAQgxVkdS8EwL5L3H2G7k2amgmm7WEZnYGMotHEf3zGnbrWuhgZvTkLXCSHqvsYV3e5",
  "key2": "jHAEXW4f8Tdk8indXqLns46ecipQqqDXfJBjxoXTcddTUFj179HQBhLkunR2ZrEQHwKUfK3C9PdJtLnVosfVvf3",
  "key3": "2Ffkz72FVfpj79YDingAmTNnY5YEFYBYSFjSfcxvsjg33Amkaxf2SRbZyxFwCJpdKyEZWAyh8ddC4KB14E9hRWAu",
  "key4": "3Yt1WKpfumgGy4oZ2uTsL2jQr4MuWUkZBBzyqJdMcuNLFWG7y6DftvBjvSzYdKu1gzVGpQSFFFUegEEtd3w8HPGr",
  "key5": "56ERr3M4Cn4khmhPVTEvKbVZfKnyJZNbXfPerWUEF2A1EHamsbp18F1eDiH22reh9Xq2Xg1riK4AexBg65yZKmEM",
  "key6": "ySLbBuXaeAEtiK5AXvSw3C4zFQUUkyHcZFJF1jwksAqmbyxky7zStG3bcMzSPRUQ2sSwh581SCgpyNXmnKkeqyS",
  "key7": "4u5tZgir6M19CT2NYgZVZBPUiYXhGH4CrGGErF1Vscx6tZ8w3m6KNdgubUMoJz4fLcXNLB2aCHpnWiv6WE1H5eF9",
  "key8": "4Ki7bFJwfpwYki7jdsZYD4B5cNvXF8W3UKQcXBUA9dA2XpinWhAxLzJNaqXSkjXeDE3jn7s7KB7DQXi4b753efW2",
  "key9": "4T9cawvt6KgqsdExpDkUvw6EaG79yMxntRngq58sGUWZmEELm9ibexHiLN6diNQTpHi27gNoworBYMmQ3qdZYJKv",
  "key10": "22e7Ccukh8eJR5wVME9BLcJfNq5ZfFTpViKZgEtUoT9RncHVWDRpp4PMtZAHtTwwxp8SNRyuMpsJPUJZGEnvWXT4",
  "key11": "4cbjwXMuDzEChuPzGeMCnnsnp4uV6kiqNAK1DMNGUUN8XqVA5NdsNUXoBzgMnxzhoJAZTrFFkpPm7bneofjUDzS",
  "key12": "2vu8YJRrxntRiZ3TLftBdoZmGk53JUonXXRKg6CyqnLM23Tyxkr6bGCtCLKEeANbRiftcZaMwAATRdAZ7pwkZopt",
  "key13": "VZTA48akNVUmzChZ5Zqs1hwDNCbPXmKiThdTKeiXqMhL2WZGikkLS6UPXHCKkb6B69gyRj6mfcSW88Tw9Wd3BjM",
  "key14": "3GAtQQfrzqdBfcR1Wa44yESHGQF33RHA6kaDDCrT2YkFyAJP6h4haWokhVQBn33Qt6yoVDykTHwVc8enZ1MzcJmN",
  "key15": "5HzQbch2wv6ZzMKEJEp3c4jrJNPmF2diRnzRr55n8VQ4nRhZ19dKVcAtE6u2wRs874T2bvAgzinANnfzEWoFu3te",
  "key16": "3gLqn4NZzKv9QStXkBmwPKxFvr9q5hanMDY4tAatVxJCf8Mvo5J5PvHAJTVsT3DdPiL2xgWvTC7YLr4rCPBjPez8",
  "key17": "LQwnWXKWT8CyDthMxSjhUHX3VMdsmwqVHLVbmLNaxVHNLkYdwvEwGwMeD1h3gVFzXrZDg1Mv7n88UTU3avMp9yG",
  "key18": "gYEACSmqSHZmPyRXUWKRdEyxJpPYeMUPcFTgidQ1Pz1Yneu7zBwXtQyDGTfzBRJreGbcLCP9TBBkCzN47YTz9iU",
  "key19": "4JCSB4hgjQjkQsWjTndMmkU3Pn87yqoNeQcMvkzKGpA2bmqhBStZcrD5kMhePdBT8hURg9hRgVwrfqL21nMTDE7z",
  "key20": "3zQxLVnt4cgB91r3LijJg5kLTuZj8K36L42icmfnfq1UjRCTYw9H5bHM2JqUtRa7HW8XMdDRBuiwNU4hEtbvW6dG",
  "key21": "4T3KosCnAMXqbDAaC86A6SwVaTN9V3pwyx2JPPyWm5pbRpMsxbTzJqeEwjAzJ8PnjTAwix4RuveLYMzBrwjZk3sx",
  "key22": "3x3ZGinRsAMhiEdD3h7ueB8dGyogXg22csAfFDzrkVzhCErN2fnG6NyVeugmiiVyy5pao9PKA66kvtx6wUfDvxvt",
  "key23": "5XeVuuMSReeB9vXD3uMSsh6ojDUawBppaaSgbHCZ5NkM1HSZDQYGVE4t8nw5jwbwix7noDLXyMhCBUNky8xFLHqn",
  "key24": "4KqV8PYtamR9Eg8XiQqGaz72TPzvJupHgyPaJm6qejtQwtbYf9RBHC5ixi8DvLs9aZaNVCerMUa3zxQa3LQqNUC9",
  "key25": "2EUF83oMDUzpz2NmGEJmigqthdiaYCG82yd15wX4eQw63r5S1cCwgvNGwafMAiixLyL3Xsj1veUf17bYsvP8i1ym",
  "key26": "4JNNMaJPFaxiPJGqhaZHaMGewDGUWBZkSXkpjRub74BB6Qs4rEKLms9LYZShdHb2v4Tv4Rov4SGRbp9sVNmrknf1",
  "key27": "5YcoTf5LJuFVQYHhr6iYBRpburz1YLwKPAxWzhMzhLoJKHubH88uUnmWdzFrPq5LjcoQNGTtnrYmCaqePaLgAP46",
  "key28": "gPjgLgGWXJG4FqwPTrycRGxnYHpc7pW2yHGD7sBYfKRuWKFbL5QWLCHxvpLxwQEpD6LdVAHYsxViGgiJ7xKkkbi",
  "key29": "3rNi2bpZ9LEH7iVKUqWCHTWeRNejrvMKfwm5v1pMY2fHXuczbDBbex9mE1A8KVVy7NF1gnEsES9WFxEAJiiQESSk",
  "key30": "2q5FDbVtYK1xH6bvcYNFzSA97eHHcyBUuTzw6ET3qTrqLrgADCu3vsmXGkSScxk4AoewJgrqZ2AJgZ5TQ6oF9urG",
  "key31": "61uysvEsiPVeysoSg4hup8pwXa4gJbpRPZ8yRvz6fci82sqfAYgfh9wq63jPiJn7faaoZGyFHoT3ucFFZMSnBAbC",
  "key32": "3mwXfkYKDb5xL2PPjCMGG2q9s2GVUvcoZjPZdxADv2tiqxHEfd5LwHhkT9jDPFcJpTSViC84fyc6Wq3TRx4JrWrK"
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
