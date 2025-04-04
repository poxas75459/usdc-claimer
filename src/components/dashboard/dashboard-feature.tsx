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
    "3BtW2YDWzhYSPvyWAeHLHsdca6ZP2UmKDgVeePeer6pKX1cm3V1U1ubSmyuFBBuaeG7jdf2dr7cmK6pZ82RmZ2bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QBE4aaX2Wefvy6u5f1bEzgnyekcS4MJvaATQp1JRGCSeRxr6arXYNGa7grQ7fnmPC8cMiELTsGhHac3Li1w8Asw",
  "key1": "3LPj73EwjAcFQFjnswwNykXZjVDMGSEWTY691WFvmhRHyzTN51jaZE2mhZNTXZHfqfKWTRq6g9vs5HBvq7iYrZNX",
  "key2": "5BhoUcNgGYak7uAJNXNrisbxWgJqiWNaEZZFP11WAhT6oW46Hz1p7PCKnDUHmrgEeXFnboGgGsfLp3A9yngyH59v",
  "key3": "tBTukGpwmMZ7VVafNGQAsWf4egCTqSJDGgjnbC2vcdrUa4c81LMkk8WgjXZdyjK1xdSQmPKxkaURq7YKKcD5qsn",
  "key4": "5u8rK8J7SQnfVuoEjnSirvmbntAAWhYTMCfddPjywaashwBmdV5GFypNUiSkb1Ky196wmMMZgtA7UdrhRFDmQv91",
  "key5": "45cXGyNnLyjMxeD4vGin6bCUCkThqnnkHCmx3pc9ZUb3MptfWN2fqUufxPd7V6nPtfBpnfziv6KGeMxeJmhzkVn4",
  "key6": "fWqYMj4SCLquZRBqXVjtWSVVT3uqYJsqCooMTv44hJ5D3PQQ8xqxShUwynNWxn8Px51DMUQCnsrbYQvhG4NycbE",
  "key7": "2o5n8Pfy6wbbUxdni422DCbgUH9T1n3ftEAaSMNeaBvMY1MRDgbS1gf32ZMjoVuPcn6wvrCnhELrbCgsrUQhbuZY",
  "key8": "4PNMSL28sJmdQzvqT45eaEe1kPoMyuRb87r24kiCBHQDz7Zpb5kebb4dERLLcLZkG5M1bfLrBZzYfMAZ546iYJ3T",
  "key9": "65u7kicHfDQsjqxErGMi1y7FBiTWaRfbZo6fGFubUhZw4UKRM17jySE7cn1LfcDnfC5dVqBfX77wdmQqaPZcAZDa",
  "key10": "2jFKYUhPteWVN3FTtN9Q4WBvu53Ls9Bg5scjtkcZG7H7gYXbNG1XahopmWQu8MoS4buiP15KTTDJF2WFF717A4yZ",
  "key11": "2hhNNNbXqmY81bDPwkEY9HMzPQ3u3wcZfjSgUD94XYdWcj373SVKos8goF2gKD4Exh9jYw1HACzMhfNZq6EL3gaC",
  "key12": "nFPq54zAEGTvGoRTCY6kh4as3uXGMq5awZt4fFWZhDM4kCQmBtTjf6iopGTB6u2mwiiaY7WeY3gyLrCmnh1c7Yd",
  "key13": "SDpcJtfnts7qVJxyWwqTHVMGHJnpNsknjPPGtMtTcRCbeXdjx3rgYhAiNPsZgaKNKEsT2m2pZ7eQFvXzXkpajto",
  "key14": "62RS6xsr22aDBmnRK4Q8YdhGjDnKfSJ97cxBZuvgtwYxyoBUZGKNMpfqYSdfQcLDXirJBjHhJa6zXnCXeZzBAEPA",
  "key15": "5QBJDaEaUupPBZqBwidmBqiE54LZbdCCPg7BnTVXAiGQv79hgzgJCs6PgnsToZNFJ68q3SDmZQZ8Cc9j4sNFgF9G",
  "key16": "4svCaNsE2gtp1HqV1tYYd5PyJRD8M9V2K6K1r7zvV9HztWLdz8F9yXkvQD7UFQqBaHFhmrZwZvyze3Xynoy6LSJB",
  "key17": "YQfVkNtaQPMuABoqn35Ex6YA65LQTskSxmKVgAabmFTxGmL6utL1TzyuM4wqc6a2SBnDBgD1LA8LnpsTAthffWo",
  "key18": "YMWw3Xri8sK5LRQWr4spbjjnVrrJUhfsAgCj29wG9KRrtcxUrC2kJMus5MTUKHHFcNfkqL6RuxuhQTrun63994z",
  "key19": "2QZR5b73DVagXmtH1Rkbw6Qv8J6mnT1XaEe33RdBeuUd1aWPsF6xDsGc2TVPujqYPqTw4A2CVRirh8pHA298jGjn",
  "key20": "3wGS3XuRgs7AZyHiTyBpDn91vc5DRR8PvWjpq8f993Mg4NPdLxzhoyvfPSLTJdHP2Pc6dSmt4NsCC7TE6KdXebu3",
  "key21": "63kmMRhPFj6wn6iVzsEmNNjgMnEPbWGEtaPtrAGhAjyZEfEk4At9dSNFbdeBk5PhoUXTgZPt1wwKaovbXmL64cGv",
  "key22": "nBK2ZYAcvbJfqGRknRPx9GiBBaX5Fjn4xfyMTYS9a4xNABjfNSQx9BVJT4ABuCKRbjR8rWRZNyYBWDCrCJPYCDC",
  "key23": "59vETDW7tW74oFWzEADiGuPfNpK9etKh1ERzhQkGyYxrZG5x79TZ6u5rQo7MpHozeLFJi9oDEKkuvNkp96WjaFiP",
  "key24": "2kwaRBAtmZ9hAeT2R1A8mwdEJ9Epw3kZxmo1TpGjk1ATmQ41p6d2cEet2BJJJFZ181S1KA8YaB8L5ettaMmoyWiF",
  "key25": "4R4sFivwProMuX1dsmgFMfkoxZTRzqo4m3PkwQFVEiuV8NyswMFMaaH5RGhHmoxnxk4sfHaDfC3r52FWnvuj6JsC",
  "key26": "HuGWq2e545dQqcTyG37PU5kZ4W2G1ASNdx848VWLHXFrHkohTFRipgahvDTsmeeLAgnZrXhKoptw9rKtBhLsHqs",
  "key27": "4jqRPhoF3BmJnGk3s7t5hPtsTUaQ4XPJup3cPubKMQ4u8vyGqASyhggHoTk8pJZsTChj1VJXHXvN2WQSQucY2WgF",
  "key28": "4wKkNUhM7FEs5Lwu7mQLeHvG4PKc6aWRDes1v6kkZ1Ut2rmRVGHnTHsCsYNosYyCeh64qZqkAiZzfRwbJspFZhh",
  "key29": "5EdrPhfQj8bPJDxT3XUppAEK9SyDUa3BDQ6Wbjf7jkvVubEh7mCrtPeRS9iVdKBDCCVc4EXjYv78uLpZP96K8WDj",
  "key30": "2dgTJSrGfAAeedBqd89PnTB6NTaUqHDLSjAMKKzPP2KqWjAqX1RWTid8a8pufEPX6QTKZvyW77K8bLnoqVCULMcw",
  "key31": "4trPWsDTFgafxBz1UwW6g7TxhHKvicx2ucmCSLk2yRWJbw7RxpGXEtuzaqqKJMTQv5b2okaQePAdjSUDM6KXcZvJ",
  "key32": "2cHLmfvcw4FGK4nUgfgK6QLvdDwXAudyzLSLsiazY75NWjmCT8dAGQsxbgRWtCTzHg7LrgMAqvqe9VkY9Vdh5yvi",
  "key33": "4JXcrVSmanvciwKmFhpHDT7rQAaDiQpusPjCYVxXGqf2x3qauMpXDJHUnE4tEAvHmW529iveRJt4vi6SKcik4m5m",
  "key34": "2ETwyFpSrAdjZRk2xZMKRTYRXXckBtK4iGv1wvpKGr8jZN3RHydUYmW8pVpNP4DjZpzMk9y4YEJwVyw4eJfMJseE",
  "key35": "5PXHrYFTz6kQU72uw7zduY2kqevq4vsR7T6R5xp8NxSfcFMVCHcmY92mHmeCkBv7oTc9Xu4afTozSPpTBuYmkP5b",
  "key36": "2LhEGfumCeX2FUwRvN5H7aB9YSgeQB7dPj2wqVzQCK2MdTNfxgxD5Kx3rnLNFuu281GWHBeTNneiP4RddnepAUvF",
  "key37": "3N75QUp62G8UcaC98ihjfKfp84HXPsWTTh3sghQRG89bUamzaUPABHJ5LGRNFEro45YwsVWn5DMgwz7TX1EWfwNo",
  "key38": "3ozntArgyekS6K94dXeNdXvXLw2r9iw5WEkeXJWBngJCa34WEk3gPA8iiRNPV9C4oTZK418Ly6RceZjJ3PR9h8WU",
  "key39": "YqRGFNXdLaSRHYDj15DQ83h6hx8xmDdeEYMVjTskJkbK4f8ByDGKCh3UugcUNHUtMtZL8o7P6cX5H78WvTNDsbg",
  "key40": "k1CAZF4CjYrt9x5LS25iiV9mDYdvNbzXg3TVRVtyLkMNcLJ5GXiwEDsPSfqomYDntzbTZnVb2CXyoDe5oVTFzMG",
  "key41": "2NDByp6YmRSU7Pfzwd5jvgem71umDnk8DpXXXk6Cye3jSMynMJ8J9UmwyD2RB2faeFi2njnp5vDxMY7uSeefECjs",
  "key42": "4GBq1uNMG4hKXN1Nx8PYRViHydZUP8QigL7WFkn8GhiZeKi1CByJDZGAtKLburyRewgQeeFAgHcV8p8iGbE5Rjjv"
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
