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
    "3ztJRMrfGsiuFgxbAopeqCrMTCwS3VHD7jxHjj5uwpRgbgQAvMcKT62a1Fb1iuQ8hGzmfWLkw459Uk8V5SDifAjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wsw7j6J35Y8WACSo3AtKDDDy7ehb3p7BSb3Sdwuy1c9GLm2pieQxLFEgN2Yu5Zc23uhynDUmo2vAu4DG2VsC8vK",
  "key1": "41VzmbEC7NC1Dz29KEHGsc99gxsk8C53HVHtkHeXa6bT73McZc435qY2qNqNuMBX6WzHm4PjRqGvjgcweUvik8Mz",
  "key2": "2ay96tVMobmakDgLdUYrKWMGM2kBeHg3u6av4Szfu6hcFWxj3ADBoDdBNQPvjmoRYPvCQcosjQgwuZ5QzE5rQXfm",
  "key3": "2vJR84Hh2Fte3BsT7MMrKh3dkr3MrJqXdEU1v5a1KF8oJTNrDzK6fGHpkoCFXxHu7MwysU3NoqWew4rudm4V4SRj",
  "key4": "21i1AjxjRVhTpGUP7wL7G8t4GHLn2xHAhHQW9ZDgc5q5akhmzqjafMZmwhdNXo45NL5fFWkxVtsmSd2QERgD3dLX",
  "key5": "437nAvD57tMSrb2jiXswWUngU1deMF3nHXY9fkYy29K5uSU2LVpg7YRzcZ1A1b1meWKtEKk8qoQcWR8j9YhGUwfG",
  "key6": "2viGsXnm83sm1j57tk3wBeQsZHCM7thCALizLdVEXdDdq8nH6m3Y3VpubhrN4RVkLBEbKrMdAwBWqqRjuPDwUCwg",
  "key7": "5oGfQMM9Yb7qWnsDnfHFyhENqN7ZgsKiZ47o9c6enZAB57JyLLRy42N21NqEZLRtqWkrmz3bNSjMegU7XaGP1sbB",
  "key8": "3Qkk8ph967pVCw63D1vzNBsF3DJupTUGNAdPSxhqqZYEB28dq48x3n7qBL3ximWwCwFcUGuhHdLCemEq1HYL2Y3J",
  "key9": "5fXrHkpiKZotGgzWhVBvpfTsUPSapNTo7sbYfuZE3sX5tHhovJMxgdsEAnMgVqPygrMWrs3cechy6wRS3sRVpSo",
  "key10": "3FSRCQWBHAqrod86E1g4NM6R5uhVAZkWKPRA7WATq9Zxj6xhtwaRCXpW761Kc8B5Gmv4Udni6LWGP9zVnhKGhinL",
  "key11": "5aP1CHbb4ZFM445JhRVQA36r96jPaWdnJ2wSR7ubSKj22N2yM1T7avFgGK7jVBgscTs2cgh7EtwkfYZphU93HxxL",
  "key12": "2jGxyFzGCxhWAZzRuP8oULwcuSgrTAWb6AWzYDEr6NE323ni3c5EJuXVVVHRVY57dLXZMQH81wqrnVjLNMyH1Qpy",
  "key13": "2hKY1SPREPFK3TKV42DRAiPd5cR82wzymptndXD1YKe2Kig2CpJfcqP3MuYkrPobJNFSDkhd2vYKpERgcLbFSx6F",
  "key14": "38yyqjzQd4g3QMVB58DWnvxj9PSztrVGsGXiTnQx9bWvjkynjhnp79am5iHVAwzgS9iYgpN5J2XyycKbZvbJ6mBC",
  "key15": "5pxzYtffvABPCn1GwKa62h8RgyRkKqqz4Hpdzk8NTA6J7tGv6sBQxbgvF75cQDqNSAMsfhHVv49MsFWXoBTYvd6c",
  "key16": "52zAYMRYPWBfkGtvccWasum1wieZtBhr1gSeuUXF2UhG33RLSAafeqtt4h1iC9TE4mWF7qrFwKBu4pfN65tPnZKw",
  "key17": "ePR1x66kRpqez5EzDc1mUTngvoiiHjXvCuNES7jf9ftCbhjMpfsvdugNR1wXJPLEiJ9T4cnqBiTERc8Pvx8sAvv",
  "key18": "64oEyo8yUaer9xx4D2ZByiNHnPtGGiVfNMNoiCQ2dAiy8GC7hUh3b8azyB3rAWGk5XB2KAxiLus8WCzigRABZe4z",
  "key19": "4YvPqqc7tT7L3FuqhGfh4cS5AbFCjY3LjYkNxUn5M9W9rP8suqEKva23dFcTZR33Jq8PNuhtctdxKtoD7y6W5FVu",
  "key20": "CsJhb2voa7A118h4w2Ak2VjKdv2VMTPBpE5PpGamKwc92FHbGHUJBZ6fTB5SexupdMKP9y7Kgon6puSX18L63ph",
  "key21": "3xiGPYcRdNC4sqE1FwbWsmkndGKCqidLSxGkyGTPSqVbFG5bpuEtbVB7p9amyjG9vqq4mqjqtDcVCFqsnYEuXc7B",
  "key22": "2LXaXFNkebi3FspvUsZ8STR6kX2H8msG6mo5pH2xiHAPtdHajai3m4iSMTy5B8nravZq67AhdRsqvMEF5Di7PNmx",
  "key23": "4TQGejfkNGYMSE1EKXZE4DS2LmVda4BNenJQsRAuKsd4Sd4obyBRXPUcnjzB5LPVH7Mug7Vozn4osj4RtkfNS62D",
  "key24": "5WidQQnHk9cK26vEm2t3eZPH3PoACfB9a8Jzcf17pHjkunHhX2XAUToc2XBXRQiLjVDPrgwviCpWj37zEGZw5AKu",
  "key25": "4VrvEcZbhU9kgk7L2979sHsBJK9HHQeWJZFw17gf8sfJF7eqhEs8D8G5MNYpVXjKnxNmkTdBb9iKXbszggFPmbHh",
  "key26": "YSS5o6hKovQur6Hr9YGmnaQ5uia7ib5v5U32Zm8sjLZtb6jRo5MT3vuv5ezjYmrBNYc593msTwEm2QS6V4BUuCH",
  "key27": "37udWr16Ko3uxXKovgz9sAJqfEL9v9DRAMCbYDChWq3jxRgC98mpLbrZsy98fok7TRWSgLqrewXLXzo9jBVXVQH9",
  "key28": "3XS19ek3iD7HZm48pzE8HbMrru3FATEsWSHusGDrBQgAkEBDgttjLAckCdsccXV9WJVUNecFtkzwBHJojrcYzrmK",
  "key29": "4LSNSmsj4cfm3KR4CtEpYnDQ62wjqNw1uurXctzGPTCJ9t6EPRsfJKCMpDBkQVixLLs5iKLM91nTp34mFeW6GySB",
  "key30": "2QDryTkEqLaryV7Nuuxui6mZFZAJzwsdhRM7UB5SFEQe79zrJVvyzVeiUWTj9cfEonVQdM9MvHYz4Nj2Qcfpmvga",
  "key31": "4Q3FfNdA13cWLar1MkcuW9TCbfAVfK8tTWrUqQGKZge5XsavpJpdofqBzyxcweBR9TYArb3MsymMqz2i2mG18doW",
  "key32": "nt2a4G2Ls6X9x3roQt9f5BUYrbqcGxXZicPDCB7fUj5Q8Zy2rtUwh8zbspsqAZUuHSxQkfwjApJBSRu1Mfaeme9",
  "key33": "45kF5NTk96sWgLD1nx1iThrD8cipEoHpjdVKSyVunvgdTyX3SDUiVQuda5jHd8sfUBYR9dJeQYLxFjUzsxXfcbz6",
  "key34": "4j7cstbdjoJAcJmnuZDSSRtQ6L9Kh77qZZWVt2HMTwkQiXXqyx12dBF2oMgxcT37q98dwud9tBn6Bb7W4zDdUhHG",
  "key35": "5w3g66veTMDYX5BVJGenoHL5iNix7wfJSnhvHQN63Z5k69cMQDBJbfEKMPXx1PPJcXVQBtKBWJqHVSZEWQtKDFL1",
  "key36": "4ECZEnnkn177MhxPWPN2HpWqHChSLJaq6cWWuAkb3twkSZ6seyXeWqSMozhXGwvmqwVW6aPLjbda1BwdYCgt1XJu"
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
