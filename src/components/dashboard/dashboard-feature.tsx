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
    "AGbPMJHmFL69y1nQacae5ZSF8Bhkdr2je4xYtN8F17TLJGth1BFEq4mP3Etb2vkWvDF8CeBqcduWYcJSaZDPfbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qrMmJ5eND3X38Luz3PPNXCcbnM648hXuCV7aYDaf29Z6j2BTnoGkqm1S46LTWeXjjS3FgPqxbrnvvJWmiHCJgEf",
  "key1": "4cx7vChnoK8cSBqyuSNTXhTSSxCq7M8r8wi1KTY3ZGUEHgX59Aj44eUxL9geuVXrHpGb5zTcNB3kFJzcaktJBvDp",
  "key2": "4y5RBpDGbWV2PQpGSxMGQN3Na5Pn96DScBHZVaWJUpTyYQet527B244w4v1jZHGxjTDQVDVyL1WWqP2C8hrC2q1A",
  "key3": "2byqGVMthhmL5oNQqtsFQDADEeDtjGeKgyg6gvfn3bLhUf71b2hF7pFri6QwdwXV55jRag2QZHWbB3JMy1cA5Lax",
  "key4": "yNZ7xSrnsgV2HhYtpQV7MD3oQtySa2i5uGkwJYMxPZ3APvZLuMpKQN7XACHnFXG53gceYGPzzjLrYS15b43KXm4",
  "key5": "5Gv7q1aj4FEdZZGsHR8ZGxYwZ1ri3w8PpaKp5eKpuzUthUDmrE1SAL4nD7uTjDmoPrHD7XoLzvMvJMh8tJSsTuzC",
  "key6": "2vUj4SWJkpXLnr6H6c6Ni5LJSgxCKXx974hBVYaEAibpTszSJtiyE5aQWp3HA5xpKDXDxnVRbzxL8mM5Vmjt9LVN",
  "key7": "61wdA1ZJxwtmFyqDTKvuLLnTUfsAf1xDNQtiE3VYHKE4WqkFh96qkmAJrH9UtDLo2fDJcomEgA6C1H4NtU6DB36i",
  "key8": "5KMeyizrDWJdro3DKhyjmZCNE3xeaoVd8gREWUatsKf8XBk58c6te5BGZwMm4vQfnipTm32vaR8iqL8BxZ6xjrYY",
  "key9": "27RCLVVTXi264vVoRk3zLBPygSf4T16kmxyNm4QwxXXh2uPsytjwejE82cgocCJLvXnxRTGDLRJznzPGBbMSwgwJ",
  "key10": "3qpLDHX338DcSJJoY4Bkxpfa6Vdy5bB9S3boKi11xKA5C9t99EXizheZvAXUDgsV9n1oRM16bpjaCtBmfeLUhxaD",
  "key11": "2mBHQnJZm6udcHFnDQYBxDgLH2xu3cVbiX3ustbBJiU3LQcbGdvCV3WFxsaA5EAqyHntPxxuQEm13ZkRDjhmFwjM",
  "key12": "2QpRGvm8TH3jUMZr6LsARE5QxWfx5wYJGyiNkk2DCxirfLJ46ShehNwZXQRnZLte7X6xeimuAEsJMhkRWQkDgyzu",
  "key13": "3KuxeqMyBdGMhGX259V9egUrgJ6SW3mvypJzsDd7747C7sEuMW81r7aAaQrPQKcJjLg92tZqRWHizEbiyv13Z6ic",
  "key14": "3VjmHRTkiJ84vjmrrXKsV38cDgZofxwmRdM4UwAEYUGKTHqssr8yt76PN6eHACw6u8TJjjAnHzd81DkZ7yJEcTir",
  "key15": "5nssHNtJCNqmfJLrLXSUQa8CJ5jeTHQFYqwkryUVxbSsyYx9zaeSt2UtQXHfo11AzyLcKD2ivsYkPWkCQARGCz1C",
  "key16": "VcoCoYMQ1pdVdE2JJPWRjCqoF3nDQAcFXmk3KxyfBh3ufVzLh6Y29LwGe1oPnznh91rMz9HJQMhe8t5hjUNT3kn",
  "key17": "4Wom2dBysqHSWPDn8o6DM9ctvWJA4ddnincGxBBGhD4tHvNTX7ZS1vPje2hUnaJQqH9PK8FCxnasyTg3KxkcpHKB",
  "key18": "65RTNThtdDmFFZ4s9z4RbZJ8EPop4PMmDNNK7w5aT7jh4MNZgcPSEoJhXYwj5iFeGVTA72AvTkiHa4g4yLB5mgvY",
  "key19": "2xCwdwijBogGkmw3KWfKx6N9KZamz5NyH91iKpGjn9bHd3gTz3P3YVf5gNgAdi94D6oeEBqovXBBX7jypQKmHDtB",
  "key20": "2VkxQBpW1DbojyCPX6MTBELwtmV6vyWpXK1xh4PZzoJK8eY2TozVDoJS51zQvtwsBNbpFdvmMixqnZ8RCGmtdTDR",
  "key21": "5u9tQg7UypMLn7DrKd73UjicYn5aRSj4odqcZvtmWDsAJRtgzbvpV36bq5hSuW9aRbzR6dgcKWSpLhRrA9uJQFA1",
  "key22": "5MAGqWzNtadJsnWWnr4aEiNi53c3zMKzZxVT8dzXZPGDXYPMnhi1nNTEzW8jpDeHjoGM92hmvWmW7FETS5xXwj7B",
  "key23": "5AZkkcmFyH5we569n4qogZ8rZWsMRqv8VHnMDuKSctatfKYzB9vgJzXZHzHBSQicqAJvCQmHGnkyPLVPC1M3BX9w",
  "key24": "3EH9ZhyJGkjmNq9UiF4XAbVYnUfvcPqZZQF37K8DTBkF15CEsjj9EgrTEnWkk2QwTcGMPS6U1RLxJmRLERwDXYZ9",
  "key25": "5A3HEzEzBwVCywkEetwuKZ4pBQkk2y21M1mfafMmSxu6HeavHgKWyNh3Nr5LjpMUEdjhH2i3A6kFNSZnkipdjsZ2",
  "key26": "JF8A8yiW9dFAeodDKe6AB7biwXiVDFV3zz45g31zbe5RVkps5yzCyxKvF1jCFVDCgtwUMgGUZvMVF51RAJbhLt9",
  "key27": "4iCcnjRoKGBY473J9fdaTYjrawYnJa1mtNBLbob7FYgF5XyMettEWGDQTqatYCmHL6hNVkaw2BwEu5ncC46MRyL5",
  "key28": "4zLXPMZaVmnkURuZVVbekfDyNsm6SYKHmJxBwTPjCFWUiPX3Yx5k5hH4XeHiMeWRMsH1ScV6vsdByzdqdtQpujng",
  "key29": "jPbJqyibD9BBFYSHDgfn4aLTDfWVktRogcRwJqXjYXPmB4Ubz5Lmbky9kwh8U6gpokibHT82Zwn5o2ezBKeQfch"
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
