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
    "5jT4TMobgN2VHyhxcvc2zKDFcwXbtTwoUfGCtZy9BmHdjdkNeyxf6ShzqePfVq6EC9rD92ub78SLW7ycbJqZ589X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KZSWAGfCeBHNk4yQ3M4cUjPBCvNFR5fU6AHm8pwHCnyL5CKxvhKetT6FTFUPDuoYVSDZGENfAjiLezBMRgZrZiF",
  "key1": "4HzAvtneKKGN2V4tSUCFBh3Wnnw6URb2sPkBeMUCTgFV93gr6mSH4LsF1ktFUGYNA85KVrdMj1cvZjBvVoqwk1sD",
  "key2": "5UszLwZsAPuLadLb97xtS5i19isHE4fTDj47eeHkty5EJm6dHeXtRs5WaA8of8WdZ2PjmkUfc9CLR7t2QpZwCk3H",
  "key3": "5uX7agqSZXaEd72huSbyYMFqUe3kUjhWrtobp8eA2VVUScmdFTyiPkr1UTjD6qUqVK8HoNy19hehTuaR3Sd9ssCN",
  "key4": "44ejMDyoykHhsi6hBCrmHdGdgD9f4qTLLoan15LFvV9KpgZcijRnBeSYep3uC5dCc5Zb1FknNVGax6EY1LPnW7WS",
  "key5": "iTTRcRLCMmmKA2MQfweMdgwxmZVtKJ93VG9xEjiHQUgYgbekZK8uAGYhFcRnJi1N2LHLMbqyPaJzFtLVwA7RfMA",
  "key6": "41BReeEAsavuYd4ehNKQrUr6aZMtf6F9KgAYPQcU6UmNX4nprZtAa8rfSKzHaZboYzsRFQTTeLWTFM2LtoxS9RE1",
  "key7": "4ju2uU11oLstpNUPMLKLJXwPWvFnG9WYj7mw4AUZLN4gMsrzDfmHLDrUFCCNRMYMgvwfDamJtEXtiV5okKYiTmWj",
  "key8": "3YKhdoehm4T18ff44QPreLhu4V3E9BzZhFujLNGfwQyAvFxLfq5LU7J3TpYSos5hPsoiWq9X1Xn5pMTYZVi3AiNu",
  "key9": "5kwTe61mDM4XombFpYmq2iM5MhC36DcXG3gc61QYB5j5tF5JdWfAyLC7JHmndvZ1u2oSWbk1fw9nbhewbJN2p7d8",
  "key10": "63BSwfL9jsU6wZKWWZGNgiKZmQmiHYAozXSgbjs6hoePbArrfSyAocbNB4KAki3vqBP4uU3e8haZwKSUcivSxCPi",
  "key11": "3NDM8aeWx7cf7AZ1mRiXq5HNZePdr6MEtcqCfHTi61MSjrtWfnnLVPZoGkT35U7oYEDrgqaztmR5pCZF7jf9Qrod",
  "key12": "8caSgTV5yC3KNi9agKBFJHucV945327mqiBCX2Cd23QhNxzSNwZ5A6BiSqGvXQ84whAFj4pZ5HdXmgZVx23uCVq",
  "key13": "4g6t1wjFhhPGhU1FBsEvGF7kHfF48xhmU11nVoFAdMXC6d69M8bKVAuufHt98NoBxjweH9jkWZzRNGHf7iJdn4Fu",
  "key14": "3TFZVT8Tj8bBBPAM8LCYW3Lqio1c2VS6ZyFF1nveCfUand5VQSJW67tfcT6zPjmGM4jQSGZLeUKGWCWpHfPpdzqB",
  "key15": "3zL6EDhvdQiCdHXWihKNnUymXyfV4gyVqwE6t848pW55WGcFxiDgkTpEFSHZpGX5qc24dEBFu48LEdadTcwiZQ6k",
  "key16": "31vKWnefYJxDUruJjDJDXDrzooTaJTYyqGvK86e2LsNY2iU7tPuZ87VWh9fftriESrhewJbPNZYX9C3jvuTeBrh5",
  "key17": "3D41ire169apS4s3dwsBsKmNUj6pczxXLgmYHFKuTnsPsUovCiembR2FdguTsKWm5VDo12xnfMBcKGNuGHcYA2n2",
  "key18": "2RuiUTFhWwCUAzCtBYT484CkSgMzE5rmgB8w49QwgGX1BU8Q7zd1VfxQ9SaMceeMVJt3F2GzUc22kfycRWa9fPu5",
  "key19": "2M99yNGsY8Jrs2Paq4EKfBdxXFrtPkXJV6dEV3YyHFym4h8pXRNRvYTM2Z66WqEciVipwE6hpNx3nbEDsb7tHGHH",
  "key20": "xpHwPnbCP5cptNm2hhfa95HEivx5W6gygUmbNYWLjtWwagTyXZDD8sawYS5QukkSHvyju8SXBQ8Y1pFcbvVPFCq",
  "key21": "J3KnWALP85VZ1YYFvaKi6Qq1usmHSNxMEqwFjRXXBfVwcRbb3r8pe2xCB4ogkeSxkyr31v7ckxm1pvTcaZmec99",
  "key22": "2cTd796am9vmZWDJSBkqPst3r9fAhL67pa4MnndbEB5A8DVX9iycEfg9cP9CpTeHR5QqzRmyfzaF8FNkr3bPmJFY",
  "key23": "4FhmXAtN12zbAoDmKhpBR7WhJm4gbrh7qbjsJ61TZwLT2eixTSqmDW9fqY7rpph8r7DgEkXqBKMbn9sCuYJTzyqP",
  "key24": "5kPpHpHxWUPaTjZDWc3D5nYDJuWsEiXNmbgGkCsEhNqmMJsbReXiEYy521pu8PVzngWL6c1VTELhNz3hKKkSfew9",
  "key25": "2k2MqxhmK9K3KdimsVsQ84Behgs1SAUxzXftvpYXSnBpYabHjFK9jbSXB6DVe6gxJ8nb2qDtHijMn9nJvinjscot",
  "key26": "8VnJtMsJDEBq4Ph1fidYvdZTwXDbvrQM9H6HPr7DeZk2Ebz8F64j5BY4FtGNFSreQFXkhj6E2LCXBYGmGYyWq8Z",
  "key27": "254emjg6zNnMLMqTqKTWpGrjg2ynmbpT1yKmHqRoR1AVaxZVyHNsCkQeNVtAVNNYeVEV6ZZH5isU6SuLJpvVAjNH",
  "key28": "2q7BS1fb8CjoG1UbzhN4dKjW2QChCN2WZ2vgzMANCBbKYkAt8Q3d7hCrViYjKt7qCvCYnfaGmBZc6C1HqRtA9J76",
  "key29": "4FTY4BbhA93bTZ6UhL1EjScM7WGtafec4QJPFsWZvvfKyEhEmxRxiJ6MV711qqa6qz9z5KzrFG1fmwp1KTFaz2vj"
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
