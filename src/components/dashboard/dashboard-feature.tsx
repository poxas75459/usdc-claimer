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
    "3J8hyRKHsx8Yk9AVa54AK7CTDRQ5YDTRisRv1z1a49bv54GvhySzAQ6TTPQWnYXjYFZbmgQGmdw3hH81yauu91cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YiDkAW9RdPvTApU7wJryuZyt4dfB3AqsrtmXarM1XXgByEzT4MYT94ygkwVYvxGWdBsa4gPteWa1JR4qndRKMaN",
  "key1": "4cUKpN2289s54TuFxyj4GNHMGWoWzDXRLTFrNLfpZmjxryvZWcxVBTkzRxRi4eyoDCZJxid1MGTMjeByjrDqUjmY",
  "key2": "59ztjXLypZ5tQA6gGZs7sQh7JxNNh2ZZjCLgZkHpmbd8Qwp4mG8DKXe4LKc9aUsTDb3sKYZZ8upuEUVpGGFjM7B7",
  "key3": "52GnoK9bER4nTX8Qv3JM3KFp74681TdVtT4garLtHUm3rfXfcKXfp4eZHLJNjPFCitzgtAtu4D83F3LHqvyPDcEb",
  "key4": "5wsq2fVZxqMhcyJDJjWNnV6icz8vQLUrSaPjATSFhA2sMNBaZjNnPvwTE4Rs1WVEQPBhzcMBJbJDu4i5tLbve3rr",
  "key5": "5dj4G8Q3koCvL6GSHT9EgFBQzhVLHp5jduBvjH4qvsDg7PTAjQ56XnLWSz3CfvAEqnLZc4H2mqXNanoZR1Tiq1Gt",
  "key6": "5byj3Rg29SvRH6Z8FMsaR6XrAzZNqBPNZoRz3f5koaWmvbbAbx8wWjv1tj5BKZUJw3TLsj63kenQzv6SZQmjEMPU",
  "key7": "22mXnS5p1efRnchrUiefDegTyutDAVkXji8BLrqjMeVfzXgVreB6gxafApS2XP3Vu48UUGpVkqh3XTuGrXopkKyb",
  "key8": "41RgdXTcQWctaqUPJcj3fxGqk8v51WCZesLXQSPmDzqTUZtWF5Wq1V2oQkJUf17pmixswzpnWEkkETph4mMgoaNj",
  "key9": "5g75upBhEsZz9WgRFP37i3wQ4awfeRvCVgvY2YbbsSQ8pGhAezYEKQm53vqz3bNnotfQDAeTixt7t8EgRC6YzYsk",
  "key10": "2sZFuxb9sj4GMYhCkkj6WjyKzfawZ4xDQfiKoVFdBZMxwvfMToQ9nQHr8S2qtVRoLFqwiwd7QoskZUUAH1UV61fy",
  "key11": "2gkBdEbZspLzPDPv5v8kMbxHYrSHzXFvoPwo5qXa41xcvmW2S531cngdZAVm16TJfHxy9aELimZKBXwKgxHxByoQ",
  "key12": "3QYLnnCnnc1BPmcdW88TUq8xuY8bfcjCgaQ4r98wRFkJ6ZSz5pWkRMGG7KU6mxTPzo7NLfds8qnXkT1CbhcbqDLw",
  "key13": "2AS8qDSCVxhQtJxR58VTjNhcHEheJWnasxmzMJZ5GjQovtXUuQycpYagXbznfWMex7fFhu166xB4xfYJYXGzRMh4",
  "key14": "VP7i4Pnr3uPZUmLUzrT3L4XePjvS9AakMTuhhpg85qsHDQpbo1aBqmhdEcNnMLmdBTNT2z2NkRL4RKjLwrYiSPJ",
  "key15": "3SK8g5K4xfJHPzyfxhkgVmzG22TF6QHCYNyYqXW2KgUKcdCa829CAF54Mp5row7xXgdxqwdPuEvmFZoKe9PoCUH3",
  "key16": "4F18yCZZKZwj2eY14U5CWxi98MCYNhEFqLmnJBx87dRZWJEa8BTNoznFQNLG5fvLn5X95QNWR64greAqcHZAc4p6",
  "key17": "3fJRmT6eMPwRV2B14NmGpXNfazgzwM7zgrjQkbeE9cwK7NzZn3KshvQx6d8NP3XNDRNSbaFKViVn6nbNbpVn3z3M",
  "key18": "SNM64byQwENJjgeK4foP78N5ciMZgz3FNvs2N5XEjrSx2CrmxSHYs2UXKcYnjw979N9LFrNhHt6tBtmEKEy23gn",
  "key19": "21FCFfDPN5BLsVqQq7jLLvjTtfnoVMNR77LDJsZvv6VkL5NDh9n32gCPPqWXQmdGYVXC65Ldg2eXtSNVhLCRGP4r",
  "key20": "3KxZ6uu7eq2Lbwrr3TzRM9UP9pguThYbgQuB4sSgUhAcTX55XEoV5cKLFw6NuNi32gpPJ1x4cogYwh6TioQNm7Ke",
  "key21": "ndy1FnaEWp4vmP1QnMygjV9KD6WX8FFmQ81EuNchW4MNy5e2bwewzSxJ5DyH9Wf2eBokaFq4HuH9sZd2hVLrW4d",
  "key22": "csGBAj21nA9h4ezmgiRN8rhaeuPPWHEoEad96udgpwUbz6SupyRN2HJTbtrtQU2C9iKBUsa95dTugtq7s3FS3AD",
  "key23": "4icFpYiMrYkFfgR8HA9S2HHL5ebykyzYtQ3gBkeh1mGpp6PkXWxjcoMKNs68NTXC46WbUuhM7VPXQQeBa2tYkjxP",
  "key24": "3o5KhGrBep2m1R1WuWAyWMX43DvubxP4xfTHrspwXw17SjGrGciJT6bdaRf5cb2Ys2mFCrJ8M6tAWJ62CQYnUPbk",
  "key25": "3rRZvEi4JeZX7Cn4cYD2EWT6S7dfJaPhmzGjZQ5aXn15M65V6weogBZR1hGSgL2rHcoV8vvch9w6KmudRNCLgGeR",
  "key26": "3mL1EL1iRvCSAPZK8FtVjvRHAT13FyoBsYeUhJUm746swXu19t2UtvUS14aMmTHRzeVZXPwW5mESmxGYuysoPUgF",
  "key27": "C84he3reRwjUpHesQsM1NQB5Pu9UDNZDd6LiM9k23fvkqJGcfvXRtqWZ7URSQULCDoWPz1Hv8DAfX6siZHKS28B",
  "key28": "x81JSSXhKv1aPes8y3N7Qvh9YBg8GjdqLjy8D9ZBRLv2acP1NwDo9JpdPFAn4ghbAJFNiR1BPDRjFoYST7TgsuZ",
  "key29": "37hdcdQYg61oAEmSwMYfqKZrG3rL2WVwvraGSaQrhdracqEPLct4rV6ZJpXubjpgpaaupZeiPDvMPyMECzA918FG",
  "key30": "63pUbB6gYX7j1fuVE56C1xBYoMpcZp9KRPDh3zTo8iLZPipRQbLvGWtYkLxMmGVQgg1UaFztAxspSRHny7bNaiCH",
  "key31": "3GRqtTF4bDz5M2cisamTELKG5crHxEjkd7t72Wiy1ENJd6msfMbtKJF1c6Uoa5Uocg9goJfuUCyTfHETXHPewG5U",
  "key32": "4pmVSEvfzVzEtqatMoAz3NsopJt7HDazyPp1PGpin6PvwFDY7p5xrXWbs9uyERVS7XpuDAdd961QrrEEEjiHpvaL",
  "key33": "4tL6tSNcSwPbrDwiGDZqcs3vTQ33ZFr4dTeTnveUR3pww94ni4M1ZUdLbDEW18cpiL2FktFiQH5RZch8hcKVDeGy"
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
