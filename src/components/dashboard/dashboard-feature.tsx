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
    "3Grsy8dXPseHpHtqM9mmeuVEg3sGXVeitsQpJ2ASTdRNxBxXhXRPcUr3mGMMxD2gncXStwpmdoBexE11e7jJ6ihe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTrxPRyYXAN8z5rbCmmF4j48RdkMrkH73dRAyvodqtsqSkrZY4JMhTknWu1tUpxPKpkxv3rfhDpZRuH74VPChi9",
  "key1": "3Tg9PhW8uWANhg2UGFo6wbcGRnKsgyKNaqxvFjNqHonnVoY6z8J5n4zzcqtdqCNcqVeQt4R6hAXa1QPDbEcMYs8h",
  "key2": "4gPQXkjHuNozeXSyyUkaCjjou9PLntgbVreDZL6RvvuFUTHReUmf2y61YuNQ22ySufCTZrWqcb8SL6jBqj3zGNXw",
  "key3": "2H7WFJfLewjCCWCEnGQhjHEgjeU48BnPKcTjgh7bpfquChb53onToBqAv9b9wHSA9Di45EcuDf5MLwW3sdSk6uHi",
  "key4": "P6Zw1Cc7SsNsyQUcHpNyU6CT6131yEY52DWKbjKx6FYxQYuaaA44kDSXW3wS1BerJq6GdiJWJwbVp3eNtVUArwQ",
  "key5": "4t9CKSUpb86Gox3CpStq9HwvEeFc9Yun3H6CdMm7zqZ413cuhEeJue2MYycqhsNDahv5CTTqYf67fGLMQf3ftoKy",
  "key6": "4AouNpAB9BztA7qPbMFQBRqNhQNvaStaxAAxqHXYYQ8yb4hfMdpqLwDsoXx1LwZco9PqPuHqJu6FJxzfbaVH62EP",
  "key7": "5prsbmxuDBRHBTF9vC5Gng8hycgPJYvx42qPT1NWgcNPaCSZQhV8BF8naYu19mfEyWwrsk5ZTeVZzxxfzGRQc5n2",
  "key8": "5hieaFV3TLnU9JE3Vy8CW8W44ApgiYok7gGcc5wq4HNmZaiqv2UPFTqUH47oiorKUrvPAs1u9d12A9NH6wo4YoZS",
  "key9": "QZds8svvkd9Bf4dGdN4jHSzbG3menuiSipmLznhE7UgV3ayNHBdFgDE3vMmxVykaXU9dTeYBNSemEYWn7Q76RDr",
  "key10": "mxH4LD8nkqzZCLAQW8S6VRKkqocCEc37rsqHKJ7GZuvv7rhYrvo4ATyaY9JWdRHRnXBdJRViVRFJSx53wuzUqhA",
  "key11": "34PqEae5CWb7g1226T4NS7n7KYxxAc849nbkJEZcLdRh2HhtDNkzbdbFoyZJuMPgmZq6NYk5y9mF1mjjxEaQhqD8",
  "key12": "rDkJv7H73wKVdP4ZvQFu8rvP53S1pA7uFFr8p1gWk3ei6ftBpxpGpdZwjHEJEVocg4vjQ5hHSuw5q186xeiPccY",
  "key13": "3A5CXYdNQEZgwrhVPUE23kQYd3WcwcSdHL7UE4tRwfccFxQhsNaU26xkjhnRsqzNTqrwEEPxwfPhZhJ5o3EBpbqV",
  "key14": "4JCVZc4pyWaWo8PiMPktCuxfvnem9QsNrsVfy8X8PYma55QW6akeTTEBWjw5JMUQB5QNvuTLJDz6r28kHTATtfL9",
  "key15": "4zhZ8Fa5VTxrUTWL93m8WVSmMTZUFjNPDyCHtfw6zj6Nh8TcjcGssTWdvb9EPsAR5rRcMsS4LaiuqmjSH4MgUmnF",
  "key16": "3uMN9T171aN4VQ28JkkiFPWsg8yGU1eBuuw4Nh4XSJF5RkWS3AqmchG7SMHYByx5ZzPVk291bpozYCrp12NV5PDN",
  "key17": "37xd3XTe9Y6hWmxkvhjzTNpwZDZujv4BEtusLNPnaEdQBeE2dmgxpfsGZEeDg6DnukJW8WtQy1wS7wR2s6e9zset",
  "key18": "2Lw1umriCZwX87EDUqMwQd6o1JaEetcLrat3jaTrmvqMSbcfpewQdGZ15xPACVK8AbWeRrFkcgtHWhLSS6PNifey",
  "key19": "nJZZhSLuNKgbwc4SJTZVa6BL3JLfdYGivGrSjCUjiinfAzgtTkdmE8pduiv6z4UiTTJ8vnAiyh3eXBCTHunQ4DQ",
  "key20": "2LRmCf14TCe1WwQ8fFnc2quFZXfabT8vKurvyd1TuGPr5Zw4vBD1HVUaG76HT17hGd65iH3CYVbb1E6NjExNgd98",
  "key21": "UNAcicjJaeL4ZXN2jxcqwdX1KzMpPJk7Njz3u57T8TtbEbZAdv16goPoFqzc3ZAGQMxiBpVPF5wyH5kvD7M2fWs",
  "key22": "3T3nV32G7w9QjVN6fF65njGf2G1ir3dQzojRZSZsvXLB82Bg8FpVyEAR1sMQiwDjNUMfWxX2SR8oP3nhn9UUdN4m",
  "key23": "5HD4WLNMHC2fND6ZDoM5Y5LfH4i9MwpajS9Uxr1up9fQjD6YP23j68Las2Q47WnSacBNDq73PkJcoGGnnUTQ2EFg",
  "key24": "Z6brrrRgapgiWVd7UeU91f7EpBQ3TjxYvBW12A7jgwCq9GxEz4TaYnThwL5JEEYoGVcq7BnuzGTje4v7G9mTeej"
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
