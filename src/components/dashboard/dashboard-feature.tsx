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
    "3RDvt1EwkQHGTmC5B4NXsxZW3QTDSddcLxEL29AMZ5iauZv5z8EyxYapcN8kru8G9tp5c1fGSAAUiG5FsvFWXmZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67bwRncS3FvGDNuuDDbxHmeHiHtfca3L8SZEtNfroVXKNJa86tNHiUkgafm4rfT4e6LWCtQ2muUYmz2JtuuKXchF",
  "key1": "3WhBdrCPkn3MNAHbGc5VtXfCzfqnmCjG6DVfTeYrDa4pjUCWybJaXXfkPARQ2rFyHMhxik1iKRcy4byp5fo7CWBn",
  "key2": "2iNXxT1SdVBiHRD8HeC9DjWyZFhDe541YXgQYXkCQKGekALEV6zE7vaZo9meS6VEJpczcSSz6pzSsiwiNsJXHQe2",
  "key3": "5THyXNHjrvvwqHUi5HCJnviR2e3Due8DC9vcH7tMJ4CpqBFQXYM3ToUGB4LRN6ZLfuorSkJUpANhFkMfqpJCnHED",
  "key4": "u1XLN2ESv5rYXL5eKKCAKePdvdT8VKngAd7ktXfUVZtzQQsQFPs6r3hZUXLrkdDB9ZA2D6JpMENSy31VmosFXMz",
  "key5": "5PR5KikE8XJwDgZvFP38hXgJv5TDrLU9yFFXqU5wnAC4exVjAXaLpJFzZfrtnSjzDV7218yXPd51SfoSDE8tkGUM",
  "key6": "3Z7pEzfDe5gtDEvDPFZhbSVhTPbDDEpCDifkxEwQhpSETctNXLuPu3zoo3XxCMxJANMHLQKmgfoy5Mcnpzxj1Aok",
  "key7": "5wwcsDWhcdbJ64mi6n8EBZxBrkMcukJ9zF2bC7qzpTkJBydUUvjvD3y9x6jNiUmUfT9ngzwbT84hDL9vFn33aNDC",
  "key8": "4yihQQreWWekabAukWt2GAmWERrSNyZXD3UGQdty7HBBxpFWZcY1kpj9VPcbd793u3trnx4eYPb5M5mMgYUyECfh",
  "key9": "79XR7ZQ7p4AfMxZ7gbgTxma58MrVLpHDPyT7ZrCr9KcnCaCjUCP8qwEDjXPV8oWVm5Li2WkiB3z6EpRBoJMjZWK",
  "key10": "36SMNZrdjYP78NWLjDP31xLMWrZtsnJrK9BJYazXtqfzHGbtPebxQfoHNwgfnJNDsfgGPWXumi6EKB5tGNZs8yLV",
  "key11": "377bPWfVnztngBT5eLXNYXDxy1SJMnCos6ZMFACAYEqTs7JSxcmie8fAub4sNmNr5YWnC2na6cEuaarkWKyKhYzV",
  "key12": "3CN3yzxZx3QmxwxyvvKp8rScbPbvdMv6KvToNwV8RdKtGF6As3nVbnyoUybYa7KYk4uYbGzCv7ZoYexFjzjouhrT",
  "key13": "3tiLj7e6u845zCXkoCxJ1fvQDACT4ndzo5yqkVU4qZumz8yrCTJZFpRrnzdTD37psTv56h8H3NRAYX2FKDLZquq9",
  "key14": "RzuQCAxAqFqWhBMdYxe2rtg7uvZnogCRenUETHm4mbjcpBhCLuVNhmmuRWy5ymGHyLdmjFp14cLWZqgff2mfmrL",
  "key15": "4b7Th6VN4WtR3GL35ja5cz1q8f8evmncsGBDtajE6zyCFHi5J4acJ5KX4SMSV3Yqfe54v2gSh6w5ukrzAJegkhYH",
  "key16": "34DoRauuDXF8HWMcEVpZC4EP6wHKiFUjCPp2g57ujQ2Uot3QvCDUcY2G4TnA1ZVbwWHqBJK5n2mtLgXzA698Z6tU",
  "key17": "3vphJsneru9rjBVmwuBV7R5W4CfYfVx7hh3AoGoLvjLLjt3ZfUZ6Y77N57W8ZPHkteG9oGSgHEAi8TKBykQ9g2Jy",
  "key18": "2W1VYuFVre7sT9yRsFGt8iQcd8KqsxZWHfW3qpLrWAesiQLR41Y48kU2oxuw3UZJZGUjDHyy9GXzWWSEd2gkWtw1",
  "key19": "4DKoxs2xhhPUsNkBk1Dqau3RNi8aRWHpD6CArx8ifFoZp1CQHUo7BR73WaukJUUcSzdVFuLv84isjENAwjxB7C4y",
  "key20": "3a47pAqCyocVP2grMHKbfAZnZWXUoCi1UWpxvAnYqRdqu3eGcXDRuPcJopNCJC728tJnBUoAwDDT1Fx9RJZkh7MM",
  "key21": "2rTZfpUK1f8nEsceVd1Cqj9Z85jhMzHB6VK9od1Zb5fgWM6g9BHYkEQUCcqKiPbW6FssodHfuwpr7JwRLLrsJLLz",
  "key22": "5eQM3Gr26k4okT4zc3g6ymFSvM5BjpvzKLrBUdJFXzLzQ19LZMhxXhkoo7kdmJPjE9PhUC83WK6jjmrW8QdtoQT3",
  "key23": "98NHVShryhvDEmJAq3xXEXa7gTQkQ4R3hVJPb7juNn5TjmEmt3UJf5C3DLGVRFiwZSgShgubLsNPCmrJ1FsA2fL",
  "key24": "3mwsC32omswX85AH4ntQPNRSpF17AFe7jPfyudBKq75LdMCSz6PWGk1dbJYENAzL4jqoxq8U7a3tK1V9MVVfknpJ",
  "key25": "4Rt7Giq7HczeSUczLRE1KCrWE9641nJiHvvviGo4p8xD5ynGfTMs7Vt46CvCZtM5stpGd6dyPmCYqVdW1Xfc47Fh",
  "key26": "2R4MdE6eX9YcnnujepUR2UhdULJoGc8VGErC4enCxx44u9KHkpKz4StjffyVZVgn7CSZFbVU9g67YwqE8oU4Fh5L",
  "key27": "4QC5Jt1j2pK9oimK5U9WvfwDSZMN1ZvchuTtMDT3JESoxDBQ7rKbriFKktS76o1nUFWeXxnudTUqJAupcpynBJJK",
  "key28": "4tUFf1YwA77K95RyQt7dYG6Nia6yMkqjmSzup5RKcnVmwZkkwvKzwYWYNTGML34JqcSZ187wcp2GE6q3kqQN9Bag",
  "key29": "5nYPvQNMk6RStYaXrnPN3bgRLsbhQZaAXjMCD2KEtXzapymwSqxLtPo98jEDXp6pVJNyigJ46NNMxgwqTd4XZ2hp"
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
