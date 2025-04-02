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
    "2mqAteCPY1NwYmqDiB4wesZejXnoGRKVUnTNf5MovtjBTfe3z8wtVRrHiww3Qizt1AxZo43NtgpMYnuqGPMuyXPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W6Ep8owS4h78YLSyJxuxTnsDcpVA5L6Fi5Qhfrn9NFx6t8VSehNyja3mMvpvUYRpDi7rgvz9Jut3V9oNkwRD3pp",
  "key1": "5Jbco3DRN8U6pceZoEodPCYwGu4d326Jpz7yTrdt6A4R1n9iC3ahbm7qWg5rox7FPZHT2tngy5jrnLxh6AxENjCr",
  "key2": "44HPk2wdmYdazc6KvsYZ1ssdKq4uiVYDbnvSDtm5rrQ4uKA2VkekDjxbJuVxtSiZ2sMSkF3Yr4RZWqwbLZY2fE1k",
  "key3": "5zz8VQ4hMAqUSw9ivTfffqHvYhsC9Ben97GqoQwanvjR8XeSkQ8WCzMGBxKhh1swXP9SZVmyAUGVA8g6nrZEDvbG",
  "key4": "4cHZ2ucmBdktsqtYrVYRPbkjzDvAxhirNsezN9Yny32QLkVNSqEWitzyPYsbSNWfydj8F1mhGxJVJzRwUwMUikc",
  "key5": "rFPjAvKYAxjw4h3HuWWtbnWyuw18dyBL4pfGBy23SwbyK4GZnQyK1jyqaiHhn8zz737Sr8CGM45JHwhYvgMwu13",
  "key6": "4yD2wUtdhGF6rB3JBswf9qjBSToHNT9q5hBVZX23DVAwCCFFJ321ZYRmL1BeDr4zg3jMrCB9Qx9wSnUkUfifQ6Ff",
  "key7": "4SRcy7BC79jJviJHwDEiZCXdLxvb128cC28w6FAnBXHtybEaHsxoYAypGoryDRugcMrrGFyUSRrAqSAxE3q2uv8o",
  "key8": "4RoFCWyXdRfvtXrtkfCU5FmwW2e3ZmqjiFMK4FYoHnTGZaYVQ4o3W7hBineWQ2iiyxY1g1xPwMWd7fCtYfwsAGU2",
  "key9": "5TTCbfG9bR8UbRrVjy4Qs52bBjK7yjtz5UNMMLrrrdHUPs7iMRVtBy67HwPGw9p7xbBRHCVrJE51Q6cJ6gpjrsHm",
  "key10": "zCiNTQWqarxfGP9BpcnBU4KMYJrZ5eMvUrbad5KR137FrfesLBMSSPr3gkXZK8QmpcagBYUP1VkGY4c8VnVM5eB",
  "key11": "UfSi773KXtWMN6Px5yF9xE3hxNEeaZP7ehVre4qwj38SvmLGkmSKmQzzx6RMCeghAPpG6oUbE72HYS6WvXTtvxa",
  "key12": "3TrW1mnPGBVkd35DzbWcMuubQMJJMG2GEc9QD2urk7ewDMkRmfvFCb6j4BEpbrenAzZqHjnsQLoF7BGhw4kHCqw9",
  "key13": "v9npktjpVpy9QzG6mmu7pbqrRWX5Gf5ALJ4q7BtsH7AiGn2o675evfJ2hMiBgH4hdHyEiJCiQXYK5tJteeEMdPN",
  "key14": "Jp8fXri4Qq3Q2s9DHQPxguQyh92t9ACEQYKW2YYjtaPKyxiRMZQELZerc79iPuZKbwxDyMnEuuG9rrhA8GscjBU",
  "key15": "4Y4j6HMUMDsXpzhKi1kJDTEQeic9TXmz1oEye6GPJ5TyUP8mQoAHJHtKNiyaESMZG46b6z4p9xDx8LoJEQ64xRrQ",
  "key16": "3jYs3jSZ2nwTG8yraBunwo4CAgQPnpqs5pxK4XrY8QzCJUAa6z6kG8ewwRivrcgjiLJYR3BKE2AbdfSUYTEvpJe7",
  "key17": "2j2qi4ygxQ8nmskom6mztsPUHohbpC4S22WVd91GTkVk3uHTKaWz1Bjfx53ZLoeyuPYjSTi1rg6Z1vr9LwSXZLaA",
  "key18": "31wMn9vFTVaMExxMkbg8hrMSAtAr32zCwGx6kD4NYfyuSmAKFqXpH2jWKsaihdGsCYQTNru6qSrR52AWijD6gs3d",
  "key19": "3NwZRtdFSoCkvzHgAjbcnH42XkiK3cuk8DnuF4T2vMpYLydMFfRdggj7Y7vtuczfKt7ubBT8xR73Cd7Gy6moVwj3",
  "key20": "54nyHgbUB8BmBh4rMEHa4JsS8gRXj8AaQAdWxGwvAiaUa2kQFTEUteqqupdtj325bnDgjkaaeF3Uzd3gBPGnk5jz",
  "key21": "2YwjpCJ5F6xNYVf9kFe729UdCkcHn5XSspmcmSgW7RkRzQ8hsssSL7e2ocX51cLWp66pAvA6SxnBXH8gLRqxeAkh",
  "key22": "4DMNkN8SP14JyXyWWB6oDz6wxZnWSUyB1nRBmbNzm2K7RVG4E5vJuf6ezfdjWUtfbqh1vQJcg5s6NJ4jYtjGb7g2",
  "key23": "2WDxyeTWEgePD3fwgb3mzvKgxjbz7fQwHAiGU7gWjsKRmFgA3qZSVBtHDDsk6443rRQjVYPWnAc3Q7qQy3JCQara",
  "key24": "66eD2ViBKzBDjVD8KuRPirT64LHBQcBEq45M4AeGCiAEA7CVevLGHyzPSsXp158S8KwR2UdAvoMgRirmgM44hqZU",
  "key25": "2VRaW53gdHrqDT1gffyri4j6UwvyFqgNqhyZS9EFeWWDwhUD9YP2YRCCjGU2ixk2iBW4QQ5VNPCPGrttkyR6C3SX",
  "key26": "2bXSRPnwTHgBNsezio6P6bz5vVUb8C8xSECAMrGNgBp89vzZsRCe6BZbLfgoaoMMtyMs53sTUnRHG3UagtwbV2hu",
  "key27": "cALVhBRxRBp5AHBYfNbhrQFucQmZs5P3ReheiYQJu1mi1oWvCPkD3RnJVDsQo31CQUQgyssEjBTSuqqMZPnXjQq"
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
