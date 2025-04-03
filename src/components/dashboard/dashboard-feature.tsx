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
    "4U1xNzcNSz3EhpHk2f2oBk3QyzMwmqA3NomSmPuyisbMSECXz9eLD1sQF4tERs75wiFufHjCjyq77zzjNDvRwK4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "249LVKto9JrGLmvGVkLEKxMdykFbMgdaGFGbxWzap9uC4LjSy7U5aGJp21w7ahKukpieNhYc1ikpFny451EiRfMN",
  "key1": "3aAwYmt9rACNCskoAYCLtaTeUXNpGiBMwAWLBE4EQgyVupFEqmRkxbAvDHC8NVSXsneW1u866RjuwQVygeqwD3tW",
  "key2": "3EeceDamN8A4eozw9taRde5jv6eKNzoRDDQtVbePkFqKui715KkyfNAHCZ35W5naYr5QYfoMbiXXtZdrW2Auw3mv",
  "key3": "2CYmTDFBM4E87nSmGKbCgEqDcGbpRx7maDUjNw671xa27nKDM6BSLUJjY4iFN86MH3VKpnpCnnP7UjnVc88fosJh",
  "key4": "34Wzufk1uVWdatAMoazn6LLPrqUhyLqzg2Z56WYu1HdXzMAXBkFEajy3PMohZg73mGJMkx47obv6sFn9zroFhPn7",
  "key5": "3TvSFMdPSdxqhyLE431a79DqJN7atT4MrzBReGTNQrWwE7Z8Ztn8uoZfrtBM1rcSkzhUegjhtz1AqLP7Wj4WHbjX",
  "key6": "E45tV4cpUqCyHBTEZshrJ7UGat4mDvYJQUwnFSj1nVxbwKpfhA4PqKtR7UvZJvYRQDHixR5K67VgPatoA41zSjb",
  "key7": "G8U1Jm6CHEsoW2oqcrwagYhKTJ4oDzW4Ybj4jPWWb8HuTQZ8fLje1Yiwrycm4cUvaBpXZuBBRCauXuK7NJVBKGj",
  "key8": "L9AHQ4D16iotfK8F7ADxztSdpNoLcn6EL2rqYNRHZNDmbEbpdnGF8aYgSZBfrbtH2QXiz6QExRNn3MnpNeNHr4d",
  "key9": "AAcs5MwYdwCaBHgR5eHrXQ2gSr8hbnBMtcHWbV6s994f8qqHm6hWNn3ggW68qVtaaSWVR3xRt6cai9b5pGvQ7oE",
  "key10": "S3hRJC6DhMuP3yHHypf54vpSAC4gdTGgZBiMqaWfHRbkFiQ3Kqg5DngQQSPFKCK2B22muepw9VowjaaGJGQ6Kex",
  "key11": "5xFGUYBsNNwLo23CrVDMRt4vxLNBYUW5hchCSEjuPEa1xXusBxnQX8yWYMkVy4wpe4P27y5fRGaHG7im1j3nZMKy",
  "key12": "qFwhZCAtTTfW2ZCcv84625xskBa9prc22j3QNPT3YGdF9wtdFtaLsH5B6tBgjhan5CQK9ct8ZQpPgAfnksq3MXe",
  "key13": "2FSupjj7QFZTaGj37WpQ8cauvwZehgubcMxzh4RexEqq6QuxLfvkgahDb16qjyUyJ9CajqBSmb7qAi29zYREC64C",
  "key14": "57vLVFW991z1xhpU4eEnfwRgsR3oTAvQMnFDgS6jPo5PuEBdPjURUP8Ha6XCC2pn96gKzghFHqyrn1cHRefR5VSt",
  "key15": "5bibgyBv57LuQNsRQ79ss4edW7eKXZCw9QnQGEdWb2QNDShhvuoG8FXVGvtQntff4xQpjwa1h9f6UUpFn8ToRvbT",
  "key16": "c2gYcGt9WksJHfUHdeEhJCHDg5MG1FuzQTGg5V5tknb2paSCrgKf9LZbLR29cSJf5n6BmQxLaoEDXKZbuRDS74k",
  "key17": "YTCsvX2vV2G8wJYudWNjuF75uwYyqURwL8p6Yqkn6ydhKE1ghCn5kAC7eLt4ZyapHdwhEFzekDZexnYxmi9aLoy",
  "key18": "UMNgxtiYAQxpSYfdJdaykFJDVqiCZaYMP7WzcSd6jWD7m3uRtP8CTU8LSvnHDo7n9qWKSkoVaU2SGN9qDx4Ax9C",
  "key19": "5wBu7siV6xMfAxDjbXSrzr1nKtvcaTVpW1icdEHHkSNxFKREjNzq6s72esRBXXTr5xDaCFji5YU47XfLZhFt1RP8",
  "key20": "2Gb1Tbb9scYW47E7VuJunAMXSWTkc9NAbroKcQtySs7LxUNjGPLHAWSG6T88QBuxm2fWVKXJbYsrFVQuN1pZxo4q",
  "key21": "5MsDiPpYxJrzNe9huyP4egXihBXPFprUfxAzbFvCybRkRjAB4uW2JBMhrYFEZQCXQzzw8DFgyRLVjCJj9gZRrBoq",
  "key22": "3smjPgR8kpJD1NuaiKiNMEMY99hACAM4VFrwWWEv54fK6j5KFG7qZKitpkwrEsbpB3hwH6iCbLbF2rPZw1uW75fc",
  "key23": "4YmpULUDD7Xv9bnhJ8TPNjMhq5PAitrKCpF8GC4WFEBtpF4GrNRyYMAGfPWLmhK9RgEtpb3mdqecmumw1TenW7Gh",
  "key24": "5DnRwF3sJmngYftTcERLZf3LxCKJz4pQPvTQGimTJfPN3yfZzRmtgUG9yb5ZGHxQ9HeKebtZTtPyzVGQZCgBk64m",
  "key25": "3i7z42oMbmV7JsRp7t9sscRgUMSpZV9kDLTRTHBn6kVTwDABGnzLKHqvEZbq4sZFxvRZED8HiPGpe7N6eJLhw3e2",
  "key26": "2LDU9coStswsr8hYsGuHm1WQNbe1BvjuN1N9GZq9XP2EVnsTNppjDBQ9eye2z7h5qB99kQzABnAUenLKUo8B3Wna",
  "key27": "4sGszvJsHUWrRg1FB9xTVbsSQ1zDq6s1ovvy5DjfF3JukcmkVjnVm8FHt2DsEpeetrNMbUWVin2h365cKM1ZFWb2",
  "key28": "2AyrRCU2C3xBksLqpUNk9YeJspxACv6r5yP7DjdX3JXh3451RZuwubMtKesLrdUuaU81b93RCADL4wptQ3yYqWFD",
  "key29": "Xk9GGS2BJh3qFAqUJr4hMJiQNYkanSE9GmQwWp3oUpMRExhW9BEUrXKmyvHV8QEMo4ujEVH3T4RaeofHoWSkqEB",
  "key30": "5Y9P1fg7fXJiqHbSw8XfQUTfjh76KeP35Y7Ex4TvvSrqcJZyVVamvq8e1brA9Msr71sR3umrFpavWETB9sYzToJr",
  "key31": "fQbwrWpzazc1G6v2MdVgsChDjo3fCKY8ydfMzEZfrnNbe3KvaXt7exDXryhp7NBLgGHGchybdZN9HQHoeoiG1P5"
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
