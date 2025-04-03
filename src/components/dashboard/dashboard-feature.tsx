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
    "5KbVNwy2E7RDaEoGKrUz94EoBAaFb8aNLw9WHH62VZQdX73d4NWmvxpp86e2T2mNDNUWV2KA5e9nokG39wdNxtb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7eLpoQk6ugf4oVM7M8sQ3emeKKyyXfKwSPp4ybXDTWmBSHqu5QjdJYHUK85iDRXaHuJ75g1zLbXL98q2AvP6xj",
  "key1": "oTkmxuToHtLU7Gbui8aMWvbBXdYLyZz74xE6BFXHz8ZmKVSyDhddhnif3b458kcKq9G5WcYHaY149VyWDk12LjP",
  "key2": "3nvEewCodKWmLJZeDmAFuXAKotNLfpp8BwujqUUsDsC5bm6d7HjEiGn5yh4ESkbTPPQJhCKfP6BGd7ZbgaURruga",
  "key3": "MoRXHgaWsdqjjz2VaQSsBkb6PNdMA698EQQqfsjC5DuBwvPAVoeNqXh6PggGeiiH7msDpL6Gg6uNu9B8T6CiARe",
  "key4": "4k2jWzUxd9FP2ceE3JoJpBoFPJTgokTGpwYkveQMni9NhjAgUwTy3Bza984i5oVFKpjuXofGXPAgYkLLsoxhQdQU",
  "key5": "2zf8qCSNwFijFvdckAvPnBLudbmShiyY7ckfX5LdUXiJe6ftqVMKvy8qX2WrnQWE3722DUSYatsno2AtKgwXWvJB",
  "key6": "4g3gTcaRrTGWJKDuRveDquJjLAG8aiq5QG26b3JMDo25ghCxKBtH5T6wiThHaQoDmYyEDpJXvyc9aaTF2EUpGuPH",
  "key7": "4C3xfiuMcHZUyTSiWmzoe3fDMevYeJQPzoFyZFXf8h6S8yD5Wk1tuQhgxWsC1j1cNkK1wNwGb8LMwFowZQ9zR1gZ",
  "key8": "4DWTbJwU7YxZsVhZLUL58z3ggk5WiRiWXMcMxcuYqeZUvWAXvPbnHHM2zuivN8t7NvbsSV4z7k5dNCVwqGQxxmVF",
  "key9": "5RSZipHn8vyUxgx9qCy55CGrp8BicV3fQsJWiVR2nnV1fpw6q1TTrWtosVsY3ARrmxWD9ZY7o4Y7EUpx2jaLSVHN",
  "key10": "5ygLE9rYufAawqya5uZjVE6YNYVzwzFBBz6J1RYPuinaTudzZLcXu9AbjRF2Jm2VHZwEfJBp6VoHcf6Xmq8GWJep",
  "key11": "2ntdNQT6k8u5psnkRMLd37KXZjr2L6hPBvT9YYFqj1AcDWBYpuoZumECx1JBMK8wc85QLVmGUxxpz25Fsr16PHt5",
  "key12": "UAHJxrHcXUgHA4dojqn9TSX7oKX5z6oKYWpGK72Wxqup2tiB5RbrFd2FewNyXKEZEKPpd9Z9PkUGqCLWJnQHsJq",
  "key13": "34YyRa8LPKiBXUKZJEPhtYm8tsi6YQy6ESMjjkak3XZTcn496Q1ro8BFGP99o8sDih1Gj7VeQafnjpd6WiHG7JHB",
  "key14": "3EBkv8XVDtq2NmYkJWmhdakGpBc6unkjdxHpWcLwbkveTTDX6fuQXQBHaRGwtg8AUXVceXtQEi85uCVybZc926vm",
  "key15": "2ZS8ZNcYEndgqGrW2oE4CW5GX6C3WynJGQJom65HNRHemNuDxyntRtAKGn9KtpY6cQQkuLxHwmUpUYCxoCYE1WC4",
  "key16": "3YtxsKLKN625JcKSiaLngoiymLYLSNnCxyDhfFe9hKZLNS3HNhqkmPAf16WeUemnQwU2NSLmvXFHRebyAwJx5VQH",
  "key17": "4eGsyeNYCA6scjcmbFqjmqdzLdNKGTLf9aQtNhCs8qNWYoiNN25MuhUF7jm3JLVjrRjJgni4uwTqtBuqnQBnrawV",
  "key18": "5LMA3bD6PBDjp6VmUpeuXKtwkCEuLtHQv8PRRorZLnjNAvKmGwK81GeCmfdDnxNYkYxexCWse4PZ3co84WYH7Hsd",
  "key19": "2LqtEHaFQ7KEarSZUbX6oghG3iWqpyCcj2oq9ovsoeU1qSGMaKwm4utzNw9cJDxQ3vVzizuMqk4vesqs8YSxojTw",
  "key20": "6Jh8JXRMNvCDoZBHQSB2mftQhFkP4PrhkByEwkZMs6uF3RDD68iPW1AF5HzjgRL3rCVsV2fqjMc3tRmjNGDSrdv",
  "key21": "4wu4pUsDHA7vJqTEP3DqJ5brnstJGr5CpS7TiD3V6Kw2sRNaqtVkmdE2Cs6K9gHDcV8Nne1fauX7sPGJaUSfDZPC",
  "key22": "a3aJtyJSEg6u78N2aMj9Vh36aJ9HonKKKvPx78fWLdSV3MosuEVjeKX7Ev6LeUrtb3wLGXPLjV5GuDPoPGyBYQi",
  "key23": "3vbr9GWwemZ8xGMrKx9F96taWrtDNc4Huh1soLYoucRszC2e5uT6Y7KEAQNW5qGZB65V5jJ5giDtZTxAAvQZhcFL",
  "key24": "dkuFe7uWjsry4ErMzp2BsVJbaip7JopB2JtNX1KCaCTBGySrwKiBJDEp6hHH9AaEWFCnsExtzyDUDm4YifgnXhw",
  "key25": "31fjbYEsK1QBnyLwTzjBMkhT4t1FyJ2d1bwxhrDsm4MbgkSiBa9hKktHtHFuBARs1Y21k1TQCWdf2vQcrunq1HLG",
  "key26": "3j2csmvSFAbeRh1pspaRDZRn5LRgiZNKLyx4bEFrAgfJxGvLofekN3fhRyiteEVyGnNV4cUBNsQtekq6rJKi8hvA",
  "key27": "59231yT6StXkD4ftGd7ytQmRVTpd6pkUMbkZeoacmLFxZ41WtdaxmsJchz5cbDGStA4xWAu4yz6xq6irxHbtqKLp",
  "key28": "5ZD2f6NXYYC9iDFvBvaYb77A35eg3zSetPLvFwhN13ZbhexaEpHqhTwPkxDWAuqazTdQt4UuvThE35F3PfAQnZD4",
  "key29": "5N317E64RRyUTdms8v6ZE4w4JHPDNdKRXDfrfSHP8kEL2cnpeCSggTLM2pbEbf2hpg4vs9mZSMgFHbWnW9n1NTns",
  "key30": "5uikA5WUARvZyoxDP7RuuN9kqY1oukhkprbCo8fd9sAfeperrQPNrNjzYQDxDFqo5h9uMexvsoJFU45GNePjDX1T",
  "key31": "5rGF23EnwwKnxZ2Z3RJo5WeNUrbMcVD63uMqqkRNk8nFoDkKN1FSQmzsFyeo57Ky7jz2MB55HDoWQ8TjPyuAv7bo",
  "key32": "5Apab3GmvAaDQacAV85f2oScgbpz1SUCEk1mQNBkdPj3xwNZwn2KCCg9nnA2wfJrTyu7jAJty1MWEXzeR4VFYTRq"
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
