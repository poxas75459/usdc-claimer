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
    "5saE27MmkhoVKRxUgFpzcGCbtsu4bj7dSBHu1RBoa7fxAshaJVWLDPLJ6ex4gUsyAc81evvhXU3mjNu6QKSgfDKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HzhYCWneBD9ccx72bAKfWSwPradWANBesxZuMxFUieUVcWmz7nGCfkW9Nz5Z4QJqtTZjBG1eK394d9xhQ8JWbBv",
  "key1": "5DjDkyTpz2dDhL7AXBbuF1AGYQjUmN18dEybRUQ6EjqHXKMpDEBMMF6R3haJ4NRsDfMzRmcLMLfEq4hdh5qtBedh",
  "key2": "dncbMQNgQa8N3GN83hwabRSytun6Dh6ygqwGfsA4vJkh1bAmNyfniidrQWhtusiUZMFZK71u914C2tsdGc2dUM3",
  "key3": "4qMFLcb4cFY9dGvhsJhbdQqWitbVXfrRPTExKrL9Qg44jdtARxQyKucbS1ys2tZD5g3qzVRPfnuYP7XnQ2bw88qx",
  "key4": "5YKRdQqZkDyFsfVBjVrQUjKF1R1rV9ycbpW4fQ7CWR1yQAZXHuXBNLgfhaNHSF14QnX34Da12EwRZQhofap4dtrN",
  "key5": "23HzZWPP4gqBQYWb3DNHPdaKrj3HZgPfS1GQg8MnQyAXc37KHKzMAN7vbMDQwYraUKvPRJPNFAUj3BHzGw8syeiW",
  "key6": "3gDmwxEayUdBTvduXvU5GFT37xNnpPCKEXK1NnAw2Gs68pDoUZqizRdBMkSYToQEPLqCxrYJzMqg7q5dK8ysiH7j",
  "key7": "3uLVyMxAx6P6ZZEwhUm9YinJ9rzHsV6WF68mYvDUnuN49NAXivoNb551XJXFvnmvx5ohDFFBUpZWws9qQYsLrovq",
  "key8": "4LFdWh2oLSyHwUZRk55zGFoMsnYFdhgFaDSEQtXH7GmfJitvyFkP5wbyXLJKMg7ACkSiusE3Q8j3E8cMGrfSuqbo",
  "key9": "4qsTJijw2nwb3EsknVdFRMgkS87M4AarbLo2yaoUVL1yMYAbwMtH6kGJW8GGcCV5aBSLo4DPcwrbgG3K667WWmE8",
  "key10": "5NwxJkt7mXfRHuDZJD1gaQCaPp7Gi1VZgZiCowPYdGmAhCVSQfBtiVEWkfBpkudST4JcFy9UsJ7Kn4AADsBLjU3v",
  "key11": "3WxrZZiaYcJMvdcKQfN4uu2jY7TzsDzD6RRChsaCFM51zAp4UhcefUK2HyrMiyDUpTrWDtAyS5Ydtd7RFUpAtjiD",
  "key12": "3v2dU1MAo9AKYYaSaxYk3yvTViNXuGK9hxKPzR2sN8Co2ChrShEKuW3yue61bC1oW9aZRA3TSRe58xxjhAL8g8C9",
  "key13": "f39tKTboZF75PT4CazQa7ZywdjF5Nky4V1g1ryLmEDgcvkQPuQwmjJzWk9CH3JUjnAPzcfHYx3E9jN14dzrZ21x",
  "key14": "5pTwnXWxjtyQsXek1qzQuUbbpPdJ8rXtZV9ywr8FoewuktPCQdzzZnWFLuAcBZzrucRZxYtnVjZoZoMmTqvRd7iC",
  "key15": "4K1T2eAjgb4x9db5HEPi7L7rX3YSkYZ6S73X9ygBybaH8Fso7RoN81DKRuF5bFLwMAQXAHfKNSXg8XuL4hnivPTE",
  "key16": "2VPdWh52V9TGwZxp1rAqrF3JiAhSxoZHGCguV4stn9poPzv6WWUKb7Xwfux1odzbgbFSPyKiXJE6wJQ61BGBbWZt",
  "key17": "LkDCpohrvHBLCta5EkCHaLKETWoZ9gmyA3et3n41QJczFfFVZ79bKQSu4Rq2ypQcExj68SixGfeYKm9k9mjMxHZ",
  "key18": "4mfJpYbAhv4xmmMjJKivprTCuL29jppgFz8aWQDKBYSjtCR6ZW17dKFjFkPUx4PwLVbgiGcDEv5ywQpnjmBWgd81",
  "key19": "3HoZ2w9CcmSDxSyzKcNMC1sSmDR3eZrybczmnrHQAFrEuDKnMsikWn1izSAwM3rVAHpTE3wE7S2BPwXLyNqFf1r6",
  "key20": "33SWpYzm7rioE2MaUzyBdBfMnJw4EvzfnVAhKNXwKketbKn9soGf4VHe6BsiSj1mjPXjpbnfL63fCWE38h3cpPSJ",
  "key21": "3FbitQ4HdamMEWJZvPkkLSm79UWLEFCvdiMjFTS7WdC8iMaRPiNpRg8Trmh2Fx9LvRxemCkgEYy66DZgy5JSwaSk",
  "key22": "QjGmQJ5RiJLZhVhF6oVKvZc3uNPJeo4zAZj6XQxLhAzZMfZ1zrKbPG4GxCWXr4aVpFf4XtmVSdCGrSfvThUzfut",
  "key23": "5o6gBcNFum8VBLPbAT1Unu3Hq1xMAGUYMTDx8QmiN2G4NEd1LWcoLSKWcU8KcGAhmAZi9zmoWtD8DqsHy4DbKpx2",
  "key24": "4ufdvzzZojjQzRg6k9GvagksmJTeYpyFneqUu6e8jMBEGZSsjpQ8ywb9j3TDAibu5PCxRVsjCE6osH4tBJkXhuSk",
  "key25": "44CBgN1mSXnZYyXSfi2NWk2hMCpprSwdJmb2uzjiVcBujk79g38n6Goce6HSVnZseRzfeYbFCtDBPtX2LDR3Po7o",
  "key26": "3TqMN1n6GHmkhrjyhQEBCnS7y5CKAinVr8xFRLKfe8NSo6THrGucZgcDYG365RB46Pw5aUUCWBpfW9dgdTDH3gho",
  "key27": "2N2DezC61SPSMnPnYoFAs6oAWCUPPooF2sUS755Qn2R1hkgmCYnLvFVj1XdYuLk6DBrF8qq8U1MbYuyfmsbguytg"
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
