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
    "26osAcVmXboCU93CpW1rVyeq19sUmUtMe9PJtmWeztpQzvaCp3pUQyvYetjecuWcVa7z4YTmuGNrotJ1hUw1rbgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b2Gy3HHYmwYCC3thT3nARoGVDRiBdeycAnZwQTYjFdCbhQx99QEwaVQCbeoXiHEUUXKsEwargpwcbu9nGmjQJb6",
  "key1": "4gHG5ij3BDEmM9LTP1zFJ46T24uP2yrSHLN7oDPeMZYNNPdrfSTyb2KDMi9VxdZCY3T4LD2CrbmKhBpYuP5PCjJd",
  "key2": "33dpdWiSLwqpVpeK2kXQLp7rB4iJjfsCbejK7ugens9ebucZcCQmus62DLZoCimUS1Wq2nqMCy8ph2zFsgnbAxfh",
  "key3": "3igHu62oFn6mYZE6uZKG7KttuY181d74VnNH1eMZt78cPiJd2EvLS4Js8BpVHkMHU2sXaUduwAF9jpMMc43nLTDr",
  "key4": "RPn98ELBiMMasQEtHo1kZJtJrT6dx3r5ExgoM14AgnCqSuukwNbYsKWQfkKq5JaS2CVxXWoAKaRAUVkPWEJmohN",
  "key5": "3gD5yg2BSzxdzWebzcHrHzLqMR8gjMJU9wWK2jsRcdJXmvEzPDkKKSSubWjwiK9mK1NSsCqHa9HYJCDZpZBPHcue",
  "key6": "3wK5p7aDnxCyRnD7CdzKvQoVcSbb6dkfnd8aFfC5L6FghXzEQSzZHAaK7cy3BnGrtu8Z2j1S2K4XxEH5nYHttWu1",
  "key7": "3jgAnVr6E3QzrPhbPX7KCX4qpLQLw7M6fR8hicksGjWDVhLNEa4YA1wKzPybzShFr2jm1U9y62MhcL5538pwHduj",
  "key8": "34i6mRMb5SVum1srJVqrRL8WjhKkZrTVfjVrWGmu8GdrpoUT3J9vFxB4o4XaksGE5pjMCuupKpm7E8rbLfQiicD3",
  "key9": "qMgk8ayKyMpU2NiBWMKy5JXJkaao9mpjFZHr84veCnpdCQPLttpCsJNHR88ZVnzjSZkrkXCbtVQjCcNd9YKrh5b",
  "key10": "2zxSwqgu4q5XYxiQDwvMSBbWEshrU45z3qGkdPkcen9GRqvcaY7jPuEfAUZoFYs4efuxTEYp4WBPHBAYZ7ZV5X9",
  "key11": "2v5jUnKgnHZU17BEy1PTHMv13nGx32PWFsccurRvpSsnuRC1KnZwPnVkHHzGuSFqHYrL6YXQGEoZm5BJixFs8S8U",
  "key12": "M4oWAWDp2YM6C1xWWxPqPXFQ45Ak46p2w4t87rmmERVbZmaiS6iiwPJoHBTrstMyCbwZjRE57Ek4HLDTS2e4X9n",
  "key13": "4RyYrmrXGgUEFLZrSVEY2Hoy6X8mUCgQQT4d1K8PDGyCSK24EvaDBtDJYibAeB7CKnnQPT4YkVvgqG1DMvFCQ7Ap",
  "key14": "3uLFoJG3iHgr11GDoPFo7Z53XYr4ZTJXhDES9Uwwpk4VaFrP6udB7Dr9XWzYDT92P9WH2Z6xL9LzXFWnnE2rezhb",
  "key15": "zsC5DATnejb3JJ6LYNRxaNsvESXsK1xVmAjGztqSP28sEtQTtcSodbPJV6rdFwLRqSuG3uwS36ACLrEnveSxY6X",
  "key16": "4DzqpxSLv7yT7vbxzqmn3ZuFjuWjcaGo3fx8f7ikoU7q3dts8tfKuB7ruT7fWh7vrb3mm1xTn8mmzpZSgJLwfE9y",
  "key17": "TFDLk1aA8YQW2KPoW3pzrta8vNWnDFdcHtfZJgBrVh8HztLgHNpJqNgqBffXVxXY6UzmTx6vL2o4kQdvWBMSKwR",
  "key18": "ZasebP3Jv4rXnQaxBGXDQTpuKnvXRqjSbfoknZjeViuZKJ8DEqWm6vx9tjAxXbN2vzksWXFds1CbzaNBdGTSbLC",
  "key19": "2MjnGDtfSJhpN7Mvfpbmm44jHYus5VtXaqNxEJnLcdTeRiF7sGUMMJXnqtpyH2k8qxamUwdHT7EMMvgH9MzM6oX9",
  "key20": "VXybki3syzcNT6duvZSASEsK6NmfkjUcLf5w4ZLyk55MH7hqmoB9kzPzuRUk3etpXnLw9YqDtommM13K7P9KvTY",
  "key21": "3drE9SCUqzHgL9TsxyiJdPhQJfdh6nuf8eG4XJghWgJdQ4MgoiXJCTFJ7dncz4cxAnQe6Q7RnsZgUyJDoXpcePUe",
  "key22": "42JPgvSoSAEDpNvWZjQEaiADXuzHTbim6uhc95oY6rcHYeDGn1FGqqvuY81TL2PMqjEhNS8T3NUoTyf9Zpsbgppq",
  "key23": "44oLcHvaebsC7vBXmsgMGZBxcktpVFLcBxNiyt6QmoPoFDswZLkTWVnTVHhdxoog5m4ApvWY268HuvSR3YV5XU4g",
  "key24": "58ZEtmYQy3Bvs2Z69hxr35oCRJK7pDTHhpzkwXCno2NtjyyU9TK1VYLofGThh9nA9P6zAsS6GgrJQvQKqvbPEP6f",
  "key25": "5Ce3ZnFfZNhJygyKS6YtcvsM1XPrFnuwuJpf5VtrfKEJixuHJKfvKWWty1G8J3cEQy5S34prXML6HortSimu8nS",
  "key26": "4iRBBf1qC4orRnZWKWziRGz6gA73rz1phCdx4phHUnUYFVU7Usnqc1czbaQduowDBzbur4hLPpPE8BtzugzFdwTt",
  "key27": "5okLsWDL535pn1TtKRytVZiVWxw1nYUGx1zXovegyziwTAwoNqZ3PQvz2WYawbZtTbRgAetVdc7dWTcfzmipZHKx"
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
