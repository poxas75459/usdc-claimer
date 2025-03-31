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
    "2FW2HoKCY3b9q74ormYDznzC1eBG5DrvsJWzQXRktmRfpYjtbPTHTLwKBW2XseKk9JDDbeCxT4NM35jtxk9AJUb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8D7ZNYsReLeK84qqiRhPMY61NZyGPq3GStZoQkgVRTfGxCkqnY4z1etpxhdVrsmytmFuTdgxjjcCbUMXCx6mFf",
  "key1": "5kTGUmTf1sowDAb3WoVTw5PsjTTNF4Ks9HtZDQqSpHMV1n47YqSBdZ6XCrHXjuFm1XScUYCRxXAur7DJ5yBqLVzB",
  "key2": "PG2xd6iMuzMESh2z2YeigLqJwTRKv9g3fZ8j97ifJyCmUgFLhQ6qL7uaLejrKY8MGpyx1pFVHbDr4tE5nAYuBJV",
  "key3": "5DZgGrBMA28e82vPk7LdnHVWDoQyyBtf369m758yvR7PGeCMRLu7pYLu6gpFPs8Jc5aADTGoWD458ZzXqU3xpXPg",
  "key4": "1CAr1JMHB18EQ8p84uSyfZToMKo1xUDHxG2NwTjtb5HbjcPDR86EK9L25bHhZALPZCYwgV2dqP4bnrBoxWvpRHp",
  "key5": "atdNYvHBkoLfPzKzGVoeLReZf8MKNCCsmEzZPDuVEikLxXt4LUDXsc88sCuwu8a8ddhANnRSmq8QYUEMD4eTtCc",
  "key6": "5PyNSQbs1wpPCum2LP3iNUPnG4phAALdnkBsJXJ7rNL8iLKnUwCbThPSvjYsFRYTkFSJwcAvAJj37rcdtuRJUQfG",
  "key7": "3zmXy4PsvNpi6NDyd4doYCukUccntZVLeKNwEK2YU2s9HfH65fxLJEHKXat1KLTZRNNdqhQLGeV6MS8pUased3Fz",
  "key8": "4z9WYh9Fyz8ezqYzzj7X4AF56VjQywpN8gZxf3o9wBmXNQmD1g1mExrxq2W2CHH1BNT4x6zQpAgriy1TvvRfoef6",
  "key9": "MWPQV5FsYoR2tpX3WQgJ4v75j8qa4t76BJAJA8F5bY47SvomeGbXgX8AmiQQohcr61gW1W8SHLxEWe4DFAe9g9J",
  "key10": "5c49HRo485NZ26xqZUyHBMCxchpXhrqAqXco1kQieJfU39UsDj89b42d2yath5nDgL1AGkmndyHMmKmRrQrGqnzu",
  "key11": "5BqvWaUjxMGpfSL4PjxajxmwSvaacAUktnT6jSPg1vpyv1bzhW7eGXctxa3HeK9a3VWrdwXaXapzJVvv9vBLJNuR",
  "key12": "2rXzq5VEpVcG9fChHzqWnkWocgHzHU79HG8ShdtJkcEYsGvQ1bjjhw3XFSMgoaEXDfFkAsHYqbHq1AgMAZxHnAGJ",
  "key13": "2Dk2mUy8VqWaBVc7X2TzZLsQiHyNpWi3BGZWr2eGk61T8mzaAfnMYzNaMYyBa63Eya25XbTp7f6bsYwSyXgcWgRU",
  "key14": "4wG8eAxCemBd5hurdbfMV3VsApCiJd998hY4Y7mHm45KDjdfoaNH5XLLKDbvSjPR4kSQubmR2A1PaFD6QQYqLwHs",
  "key15": "5ySPFTisdeB9w4qpyRgrE7FatPzTVTnEKAUVqLHbPK1WQNDhe8P2BAkVPqFdxubN7DfnYPaFidV2FvndkckpZrZu",
  "key16": "4NqUz8dhFGanoyTz54YevAirwFaomsQSVt5pnD7v5QtbjbvCaKkCRFxwBndvgDLu9ZSvaF3tkwNBBXLPo5vGrQTV",
  "key17": "xrWs4KM14WShyayUHnwdgAfnHTb3Fv5Pes7n9GMQBwSczhXSdiuM5gwfiXo3baieduZrGGhRRPsnaKfmBCAfcyU",
  "key18": "241wYSfZQzKUiQCZ6EaaHkoxcjRjUnWhhLS86P2PnocHHovPBeaQU25bvDQoGv6pFvLbxfjyYTrFWCaZ7D5Qo9gx",
  "key19": "3tJTtZQEEjQJxSHJvGe8ga81CfNvttGabZhFWjvChjt6AW6xMQoc2Kd512gTrqnTg3mcN7c17bkersqx27uk25R7",
  "key20": "54R8PAMohUgVh9464WZs8sZFiZXEqGKCd6rYTZutLC6N1gqmC6ePVsnw2ubJa5Zh2s7Y9Ya8ULfo9vyo6UDi7sXM",
  "key21": "34nxWxoQPWTH9nZzfMaZ6Aw3WqzoV6hQE2AH3m2QrmFFVuKvgMoHc71vrjCXoyy48DZmMbbBzKLCUaEJfrJZkJxh",
  "key22": "5rfsnJC6wi7aWNidQs3S9yXfHwK3HvUf9XNXntzUdr223c6wBXt8MRE6kQVS9oezhURbXNyeJfzJ14rZg3TSrvT1",
  "key23": "bcs2LNQ5oo9U3guPR5bRaLhf2uEssGVC3qHSyQza1z3NvoXXJFB7xzgmLVfCtCbiBk7jJGsUUtw5j3uEQ2HTZzz",
  "key24": "WTW6vHbaWZ52nHXr4rBM6enxMaAr6BFdHH8wmB3PSrg7rwDbeTYUeGoRAFwPU3ApqPxdLbhW88iR8cPLZKtmeM1",
  "key25": "3hvbFEny3MKS5zpsjccjEzwi6tqAwpZrbFE4oVZwPWvEnN9yv4fxXGiYu4RFJkkHHY7xFfGz5JGomgqW8mPPQ8Eo",
  "key26": "4jdb6vqVuLuy7F9Dk4ZtQFze5j9bYbeRgbrhYx9Yg3kzshSmaFE5UeFid7aVmd3xw6KSDmzTw8ZEYGLDCDVPpcBV",
  "key27": "38SVpjUpueiGBJW6WeHCWzShbfPMA15Lcyj6kDnEJWHQ8KLXZSDXb8oeK32v8m4pj5wQaTef1gvvvzmceeEts1gg",
  "key28": "53rWauqeUws45sSDUqemTGZV1Tz3opgc5jYcQERYHzb18wyczeB2Lq3RtyCjS4KpjUhgYvK6sVVeh7caJgu6k21U",
  "key29": "3yYnskjGJWbFEb5PCfh4q53CEuvMFVb7CCUysXATe4YbtUiTeC6RfsvyB1NgZ1Q1WowrJzubnHyGHbt4Yi7LcyM2",
  "key30": "yNfVZNWS54BnQHgrxyCsPcpytD1G8g86HBeMZF3ZdUyFJdtLhinuZMgCE3HwJwZjYEpFiwpj4mxt2ygfLVJdXyS",
  "key31": "5zcZpguHLR5qYmj9VP1qQBfARqUPvsjaH5tKbA5Czm3kSQHruNUSEQ1bv5jyKYVbTT7XZrmFsJrUv9fgnZwVdoHE"
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
