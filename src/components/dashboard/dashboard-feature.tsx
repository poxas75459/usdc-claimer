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
    "5MFoMVPC9g7oPMrU4estAjad632m5meXx7ZnS5rWygWvnrGeNFC1nyq6mzBSKefr4MTQD9uHAYFwYDb8z1Fd1QaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "125PCJ8Gho31iPe1dY3KxeevQJcSsHfmwvAB1xpn5AHdyJa91tkpmfhAAMhArUXdg6iRe6Ug77i7KSQEafgRAMWA",
  "key1": "2hcyopNBfctWdG6EBapExsK7Y2Wcyk5Gqtw456D8LHyvyPJmigNGZLtJzqua3NECv4zRR6NXgFq3Mg22NzPgjM1",
  "key2": "sYH6shzGJgBXjH2ARGijPXxXGEhsCprGDhXmojtr26NmccHbJB3XapiEt86uaJM85cRxUnFhqbDoWzykesNL71R",
  "key3": "3ywQ9pYuAaqSQnEGcDZJwjVvJrbPnY4Ft1q8eh5BDE6ZRr4FZXxvbAAoB7YjyJgASCrpR75Cg7j8euZnrkCZux7Q",
  "key4": "WRDmP9QL1AXvwo8sZszZzGLSrKtmYcxbjST5rgWvbn2BH1QyZh4DD9HQkyFDdKGcNtSrAJhcCzZ6a93szh67ZXL",
  "key5": "H8WBgVJWvv9nCnUAvMW7BP7LjXL7Neh6f7dcCQZrogzrcUGbQZMpjA3H3vZ84Trk5CuwVSRbrHeXXwLAHADL9xn",
  "key6": "WV1cAjwNmuK3k2MmgxqDhrtpZRArqPb2HbB8v5nf1tg9cbh4iWCpzfk3GPzaDfUJyLkWtCyzZ78YVKbW9qik3X2",
  "key7": "231dNCiUE99WGesZtTZBeDWpzvyYscBgMfGpZtxtgAVweBfq7XayWYF7mGrQqa63aehLkvtydy6k5jUf1QrLf7Hk",
  "key8": "676rwRob8Tny4VLXA4aW46gWBwqMirHKZ9v3wMCtbc2negGTHYQ8xkoVCWetJrJfrFNSvNsA1WmFwKRz8rHJvuPH",
  "key9": "71ARhpb55nYL7FBtehF8gqFLeDLm2tKtRoPkzVrM2FFPKcxJ3xcfKFRFd2oTsfdHjWmimdQ65voRePri5HgSsHV",
  "key10": "vZi67KsvoprxFqhK9oekRza5T28VKF64Ngt4HUnhcQiK3wu1QbE4VLR1z2c2Cws7Kq9M9KJRQ8fmHsnyWquyBcj",
  "key11": "4NUbjh7NKSKurdE1Cw6W1V853vAQ2aXqiFqLjDL2EKNxiWzhCLKYKAgbXUbioMeHrisfPtqGVEv7VbCpKLxG29UJ",
  "key12": "42XvdhiH24cHetj4kvXRebQBi17Gqc4hCQLyBcHc2F4eeETdnaNFU5YVz8hUxmjg9TBCZovxj1dpUrZ2VnTfiFqc",
  "key13": "5tmEBR5DzGUEXjeSbFsDEtxuHjNkjrs2G7QtpYPEXjhsQPNMWdL5VW7j73ayeSEfw3yfXSTmokGmFTwERa4N1JDB",
  "key14": "3oEW4pexiJ2aAiJqWQLyhScBZfnSUGWMuGPhWywsSWQyavFWU7hLBbXA9zsmg5DevtM6csDpnn7fjs7gfKEKhqP9",
  "key15": "3vd1rsQFGEB5E7V1pPCZzR2RgXVsnaBZBxrxd3G7g23e1UdScMgRB6jSWzDnjPjzkrxuZx6GVopeo7p3BMjmH76Y",
  "key16": "3wJ7TqPEFRU9z2kD366B7n7ayPVzYkCGQUiDc2Fzco8fxSrE7LpPRVqFm8X8eS2depnZAFhKPDG2Z4ftHVmzDtSu",
  "key17": "22GeCT282f5qywYsVW28rswETzXQsoABBJBmJnGsRM5YEQ3bxZ12W6fdgQYXYRTdURcGXijET1R2gn2PJEk8TKd7",
  "key18": "3gLHxUPATqNUmmBnvxfNfTBeaH4xFEbfpT2RKsGVfS6tJEKmpjCdYpvXeh36JM7MUZMqkvpwbC6vCwhPUun8NXhd",
  "key19": "rLiZQ1A7MqAy8uvx2AHMJyUx35WmqX2abFBLanv8yWMwnN4aKLWRULknnb7dCMZ5AenqH1dikeKew8A3wwa7DYY",
  "key20": "3E3NCc9ARAbjVak8bX6aumXw92BD22XvVTjMRHaqBQ5FYVpgZTWE76GY93p6NBvP2JAE5Veh9W7fds9rQqA21u11",
  "key21": "5ecHXD7Csw8K2Ax4PUqoHRWFFwjmobZJNQJ5ua2VaENa2aEkb8kJqVX82YDjwMgcFmucvM4R5iAm78wNjJ4H2KyJ",
  "key22": "5vTEnG1mvyTLC3KvhySFS9E6gEVR1WXjwSDVEBkhQgcQhJSNzJowGLF5GjprHHFsSZzbvxUJFTwsCjDD5uuJ3PfN",
  "key23": "2RcvZMa69Z7zw2oyDQnq6cnxZLNKAHvx1AiSc98oUEZyvUAdPC48gXQdUC7633hSzWVMzgH8C2fuwSUA84X9K4st",
  "key24": "JVEp345DX2j3puD9MNHi6uxCvD3zGbh3V6EHbyimwNELTGimmNf68ibSKckdgRxay2q8AP5CGUeGB33AMeGaRhH",
  "key25": "4iYnzWSepYSNtjirCGRBeKqGHjBu1dBS4uC218gozcjHjYDz3W7g7bRY2EiTPTBxbb3Yp1sN4Nw5gTH4qth8o6Nd",
  "key26": "9yMU14RRU1psqzkLsFo8VmpeUHqsaQm2k1Z6763HMYypeP1VkxfEdu7Fna5bNLJJY1LjAebCQt5qy5hjmTHvg4v"
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
