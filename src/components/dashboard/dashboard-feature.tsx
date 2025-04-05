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
    "3GqKMxDFNGpCrquVKJM5PML89Wn2zCFgC97ZA1QwiSzixYPgqtSbvYULkP85ATfypMCZpnx4t6XA6pqBrrNJs5um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5McGS1Rtsyv5FivboWpQKujcwS3uGPmu3WkHvfgx3tWzsrfJ3VWPwf88wfNBAn9xTSpd7Bf3ik9WUqJYJLogtya2",
  "key1": "5CyeNsLrLoBD8xqXgZ1CwnKeTdRML2Dk3GwF9TiFfyyADgV8ydvgJ242bvVwSfzwNB67AfySe8Z1f4Sz6MKi9UPz",
  "key2": "5Hi9NdnaVWgcAWMr4DQAneCrQLb3L6epwWWFY4YA3WTwM6d6Y2jd6igW84KjRTUJLU3VcvRrMnZfdz46AqrvdZCD",
  "key3": "2EbpFyxYaFyP1R6NeM7UVrbxjfxtd2t4KFA7jVBnUWwKbCq87f46myLau6d37JPwA3v3Q63BBvCc9GvikW2Q8AHe",
  "key4": "4jUGsT8r25ZH7MLwv6MPfj34q1iQt1e1Whf1Mr61yKtQfZGumwCGPfdDE2EFerNVnrVuPrhk49fJFa7k9mCf4kSc",
  "key5": "2XSYfP6DwSPHmsXDZkSv1Y2ciisKaeigDvozGEdaFc7XXBUNHw17XRmuVW3xHSTZcYwSDxdvmxmZGWcWrNAptaSf",
  "key6": "3FHF4saQzVtPESmuTgxegXH8ohbNvJTS4hcjBqy6VebhH6YxxzBCgYjtV8SpDS13eCqb6H1DqLVGqkwZ9Fif6J3d",
  "key7": "3foNTwZcc1kXfx9oZTNWWNzWRuZt6ThpvSVnfwKu6N39YZ4eyuUBk6aNxF6fbXvS6HXsdVGC8fdeeLLanraLA4XU",
  "key8": "2TAYiRbRdruu4Di1SFvRKiBCYrKnV9uoDSpNCChNCHPQm715ABpGmatj9czCSypWz3z4or6roerprq7JVGUdEnEv",
  "key9": "2rmWu2tSyW5hC3H3ceczEhW9NBn1qMSJUyDy1WDRgMYNHkuNzCn4dB7WquuLvxMWEZy84ZPQ4Zk9KpQnZcKy94Yn",
  "key10": "5ZT6797JGTftFS48Sk6rB1xF7vYZsCKj3VKBuRMsDSto3wRoUArrRSpXC3dmkQAFhZ1pQnYRG4gVLywUHsE3eMgx",
  "key11": "4QVaXDsX8JCrzmX9uwnfrM8ea9VcAx7EQXWUgjMFVFLrHFMcJtg4z7wfkyc7VAwD4r5z6472ihAgtaWbNFaEnkbL",
  "key12": "45WW9KCTrfQAFVFgFwXSgszu7tqmxFpwBiKnyFBnVQ7QwzNZZtQL3u6DPzK3r1pYKbkJYpYdZoSQZUfvcW8jteqy",
  "key13": "457MnBZ7iUN4626BzMX9wuGkFYWgshYk7WGoR2pxKTSQjY6mK4XtZUgzAFYzxjWAmzkUazotu3d8SZo7hu6K2rmN",
  "key14": "4MZV5iRpMirYafgHbRKy23U4NX36hN6Wx8FEpYb6m3mMRRrqWwxuQ9Y5ar5mVaQC9QxE65iuR9xfa5n843KXSHaV",
  "key15": "4QvppjErMjGNMW6ffghRMyP88TpB3rGA1E11Km42q3RTAHR9VwbEMpUtnaqZzpXka6aXjHEzyVeDBxRM9aRuLAPN",
  "key16": "63UUDK3uADnZqEQyQeU6T1SHywFuBkGvnvK2DrF3c9okRZUrBvCWf1unPjshaU1y6v6MvNe1w3LUPZxBogUBxkyB",
  "key17": "2DVPFK6sV9xU4Mda78EPrgjhCs7gq7wck4x7temALnqEYyGuVw3X1UNC2oDYhy6xdS8cfGc96bdSbJFKh9zihMVt",
  "key18": "V4efqWXm9fL18nqtRupYBcjgL7LJ1vjmMpeYdHBoTxsyfs2oRuNTigRCqfC7kivrpNHQD169dv3kT9hJqJiLxtK",
  "key19": "R6j4FEJddRe8t86HvaZUuwDM2QkDUmeqViQkQjMhXPWb34xT3RgAbRpPNMKRAWNFKsnCvp88fRPCynoi9cPokz3",
  "key20": "26d4EfDkJPogBoCxcH9b6HewdcdSw1JVQ3BvpqbzuquBqgxEwvw7v2ysRd7i2Q42gExbGGChdLC1E2bm5vEr9y2G",
  "key21": "2HwxVCfAEJEcxGhiPbSyrTwpPfmdxMCzY4vZv3LBSb7yX5b9RZhoig3qxo5C6beRsWcEx9oodYopx2n9Qtmbr57H",
  "key22": "3NJNEZo5Vjmt1NmRa5gWXseWjhedo5rafLp2WbPUTHbp3YTPBDYgp7sQTWeMnoQ9ML6DM4NwfHY4GVeFWd3FE7GY",
  "key23": "5HFQbrpEdRuGfn21YNkv8gBFfieC9r6VPzWT541qmZcSyqDW4ivajpkEnFkmDSLKiuBUHa1Wtf454sPgK8Tut4c2",
  "key24": "46FAUfy5xfyYvGT2v3eWHUYaT7uW83SoFhgywZ8T7XW8PQ5gL3WgrdUgXRLU7cCSu9LZ9zh6N2mtRCzMwANXG5iZ",
  "key25": "3vBHs4RztqQJHMhmqp9wf2hPrWptfQ8Dax4ibdChjrzGrZiq1tN6N1zLNtG3zYaymp3wpmJYryZeiRhJ8ex4n6e1",
  "key26": "4xDvpFDGCffNwndNYBot52RmEx7FBryYHAzWo5tydnKPoxvRfZSXRcL2cSYPc43LxyxoF7gyNDxKPm2pT4JvJssE",
  "key27": "2oJr1uECJSZ2RgubBBNkDFA7y6vsvKAcbJd7WWjfbR67w5Mbv63Cw5BixGE5SrfLs3urK3EfCL4cJWRHijJiDXtv",
  "key28": "9ugNRSXXEZSnhA3tCtPYS94qCUzPN2CtkqdzT3TLSaetUQr4V4dvZUSrxkMjJJzJLyQfqhT57T9ZZK26VrcdQxm",
  "key29": "qvmSxNorC9U9cCVLpSjpBMTNsRpV5pHbxiRgLxCTtuzYQgNEsYjN85fqgrFRTJihV7KurRSmA6vwpujCRNa2Kvk"
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
