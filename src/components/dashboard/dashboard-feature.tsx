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
    "5BTRJLi78nGnfAqGN5iUw597oU4tRgYsxga8qj8QUMLSB2HGGmQNp8BUaR6JqkfZWz453yFNANW3vDyvjnDozYXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397aEw9W3YB51R7U3Q45yVfFktu11mT2emYgT98dsrhh7RJZfybpCmgSFpxBgYYQTUmyuwykZsz5vfD2VoogwAyu",
  "key1": "3TmWtNBce46oUFvRovWLjXHoyrc6e5cUVVLCPaCv91SXyA52SkWGiz1AhNx8T3mLSnoNMfoUoyQqkv78fJxH3McM",
  "key2": "5gWcj1BKEkjgFooXyX7joxRU2fesPX2wcgi7yMopYf1pTTHEN5VNmV6CkKM98N745vkJfaijfAxx4cQwEYpCxayh",
  "key3": "nELjkSS9aaFNP99tPCNb2W6BaCDPP6Nc3S5a3LDArtWBmsLmgeLQGPt3L4kDnu296QdXQ33P1XeYwMFmU8keH7n",
  "key4": "55J6FiCpDckbY7qMvFoKpBcdvKT6KC3KUmgpDNwmQGkaxcernqe7Ef9EMM5CSHneaETj96NgMJjEC2A8WckfEm5M",
  "key5": "4cpkUE1J7GE3WcKD3ihEyboMj3AVauPDNZCJLSAqA9DeKbABg2R45Temt1j5NyzCw35wbDQGBTqXRQViHwBg6Rbv",
  "key6": "3A5uYGBpn9jxF9kjUzmiuwK5o7P7vejs5UEqrV3RPVcHqUJKebR1orx9k2QmhqTLPj3UXDS8FXF5LvzuLRQ7pXjr",
  "key7": "4LZKxdVSt23xoGfYDFyyAHnV88Cp2JLRWzAnxQGATg89FcxieKYTNguyXs8emkUDeixxziSNrNS5dgyLQVFmWs9V",
  "key8": "3mtLTMJhA1YgbytoBr9nsnwQijZNzq621y7gAkixb1RC2f3vsnP7KQjvX4dsKvwiZpaPxMhvj7tHFy77yK86FpBR",
  "key9": "2frQ5RMqQDAxmd3NqK7BFekiFyWX6y7he9NvfZq6mC3MYQzKJnraZF3yM6hdRUoqUvRF5sRgLYfqm1j576hx1Tq8",
  "key10": "3hAWbtF8rXsbqviNVaJS7tVwaaZ8h1gjnVuYWsD7gro5Z61qvSZhiWYoa7v2kCceve5LnMJKUS1PxsshX946B7x1",
  "key11": "5qu5VbCL8ZWQNmsKax7f7hAPsky7G9RrmbbJqHCXnRAWoRVsTXUx34jhhMiR9iKmX4UPcxPSuhq27U4L375TRKHg",
  "key12": "3ZEh7DvTdK3QzD4k2EocQA7huXtCpGKK4a8o1VPCJQgXSGoAvePYb39Xxti4zGaYbVprepgwy1iJvc9WhAvCi5F",
  "key13": "3ybFFgft3r9dYwRsw7xtyb4w7Eyaj9zrz8tKQKdkvBUeLTGy56AqSjQwdF4jTfDEKRV8HVhFA8GY6A7zVjLNNFjn",
  "key14": "4xSmDcEZFkJYx6PEv6We4YuinP8poy59pjC58aEQEBfhyVYf27MLdQmUbSuv9Wcv4ohEtusRC2drmtAS7Qif5BLw",
  "key15": "48DuMHDp1n7sogeiLUZq7KNxXVrKfqK8G8pBqUi1hzdS74CV5FhVK6ypcPaNwqMDC1UqAmZMurfEYzYVpj6rJzmj",
  "key16": "5XMFRg13HTNAJKPMLUMQdca8QAvU5q1th7RrgYNq8snAfUXVeyuzMrSWxXhLmjksCx3TsEM2ZSuG3Z2i5FgY7CrT",
  "key17": "43YwqosRvk6dgkx4eNQV3MfCBAtChBzi6E2Z9Ez4Y4iVqwTzaDGvbdvv5CZs9m6fx3t3KQ4b4nLskxybipekyAjn",
  "key18": "fVS2sGwsaoPM2uSEg33ChRwrL9PYeacJaqA7er3vismZAFn6i2azTuUujLW9t5unkwJa64K84MMzAjZtHZNK2tG",
  "key19": "3kKaD98tfGRhNBXivfvxKSADC4JnYMFsFia7UJoYqV3oJ57GSFe3TEcDZKngYu6Q4Cq3xMHQsUXTY1aeUsuKpb4i",
  "key20": "21pfzfzJbKPAc75PUsV9APBxe6j2MVbJZ6SQ37rnyMBmVTZmD39sQLFEUdkVnSXc9xyCSjkuaSZWYSQexRMLHZQP",
  "key21": "exnnWSryqXSjGR1KmU5TowMxUkdjx5BSHMSJ7LNSaCiZvE23ynGovpikSSEk3DRSovckbtXYiHjnFLmvocoQYxb",
  "key22": "3KVEf8N1k7YjTSbxtdbrVGu3UfMXVMNXdrz4Vjrgyzqa8M2uQsJUDkzTLKQHZoFG5Y6MUAYtqKFY5AeadQzCdXo9",
  "key23": "3WWqcZ9havq4obnww51X8ZUCEzTMmHJoNbT2w1kUMfEp9Z9qoBo3sCv6wRFbzU81hWZbYJhqck8UZH42r2TTsgng",
  "key24": "BdUPapZiDiRGEnZiioKz8N2YyQkcdLVXzx7dXM1HKh9jHkFxSMuMdBH2cuoRqbLpoPkFEP5dtALpyUhZRd8BYLr",
  "key25": "5WsNuKracPfntMg6TB3jZo8PYn7GdRjJQLY39mTZrXG2fYDEQLGxThzpSR4RSCSyvWuZHqxipGHUQwJEjduF7GeB",
  "key26": "5MSkSQUn7DMLRvtjvWY2ixreUAV2KiUHvFgXGrxTavngHtdX7PRSsLkAs3VE2rsNMLy1YXmGYcmfUwcY5tZ6CiKx",
  "key27": "2PDQrZEZ4MFrvVGq2dSyDV6AbzoiMtrB83US5f7tsq4XdxabiqBo2Besq64HzZbN9X1rxSpd5MPas4iahxxS2tPt",
  "key28": "449FbQnRVfJ5G5y3EfaYQ527NYsvixYgc4xmPq9bXGmZvNiHUNs6ZcdUAu5UD9WTtsqqSSeYqLpQye4WePE6EQZy",
  "key29": "5kEjD3aYF9F7aWj7CgYDcRTPwBZaWfNk38e9wrWdHARTcaYLuFJBMtPHqnL8b5GD1xMQSusobuczfck2wt3bLYtU",
  "key30": "25tzPVgBzGEh1gPhDZcHZxWqanEuSx4uQ5HhFHxZ9w11BCoZYUze7fibrMxbcwU3kLrb6RZks84FGuADNwedVXmo",
  "key31": "4BVLc1iL3WdJ3XW4Ghqhnmh7DYcEidiHTzkRBYSbgNNDft7iGvq8H9RBYiQSjW7q1MaECiBPj5g9wwHEdjHLBWDu",
  "key32": "56XrE6yCNBD6UhcmxHsBZoLfrvzgHJHEGkGA7W3nx573T9GNx3nZPWCp6mUT7mTLfVv56cAtz7n9jxFjHwZrTf2f",
  "key33": "3N8ABd9HJPvajvkC6eQipMNoZuMCJzcJEudsp2q1XcvMAXsyfFmmyEWZ3eqc3czBeUA99867DSH37pYJsgi2diTT",
  "key34": "2oEN14WJzcweT2WekXNW2YWo8dKtBUbRbpDoTavGcFdqMstqh112uoCyKbunNPsbcRAyHubdnsBXKtnfM7e82MWM",
  "key35": "5zz6D3GDXpAus2HeszRR4YoMTbkwncpwcVq6y9Fzje5AFGKLgK2AppXsMMgye1WN7DUi4MF85NW7LMiaDpkG5nSo"
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
