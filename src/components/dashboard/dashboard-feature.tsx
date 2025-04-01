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
    "5v5MmnxxaopnQXVTHAoc8rrk5oQMFbE3m1e3LJmBeaDb8MnKkh4Q6kzeM8cMLhKHAoGAk61SbfbRyGBbqk34YdKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QF8sGGP4wYm19mY9ajMa6WFUPmmNRXw3P7uPLriqBYvyuD8Enb41uN2HZpQQGM5FDzjazCqNum6GYYYKu1rCkkv",
  "key1": "2Yt8BnBCwuithoqAgTa8d4pj4gDSxVvqtsToi2huNzkSZqiLDwj5sU4NfqpnGXvdvKd7W2uEz1PfXz4WanuEDjvz",
  "key2": "kUYCaX8NDd53e9fX7jTpV3Zdhn1TKpMXzx8B766og4covWaJRet6ivwVup4CUZ9C9pfK3mmkwb9tVssfQLYusin",
  "key3": "2LMPy2BkWSRWuMb7CZZ2q3HLhmmhDMqVonXSbxF8TJbf2RyE5BQvmSn8xoDu3rmJfmKsKKbFVPv7NqFZnbYqyQw",
  "key4": "4WsV5is67MnRHjPDdherYkpoogPbkNXsnVPpDjtYmz37tRa1zPTLS7Kmw8ThtZx9hSCBuvQWQTno7wxXQD24jcJT",
  "key5": "3h2vLzxEkRsZsjaTCX5ZH1GM4n1F13Tc9m7E6drG1kkmvFbEh3vEi79gu4fh5tN6x5muz4PRJe2YrsdHbJGxE46C",
  "key6": "4PA6xEXPKGALjJohd8SGwYKGKG47sNJkEhGDLrZeds46bYat29rDNT4rE3cm2wAUNXdwRs36QhSbbEWMfLdknhp4",
  "key7": "38U8oQPmiyQ1M7XXC157dYWxpG29tfsCFSaxCvL9oR53DJZQX2ChG3wHqHqR2H3b5m559YDYvE3u4aYVNQaARjvV",
  "key8": "2mJk37WbjWVBbhWq3mWQueuswz6SyAeGRRUjc7KnPBTBzAWYJ12BxGLcNxX5WVFX9xPuKh388cwyQjKvU7Kh2sgj",
  "key9": "4nkqmvgkcWqjHs6UsDGaEyPnmjLugyqBBUshqE39NZUthTGxuyUCPZN5ejhPccPjdmJzYVHckZTqnY3kZBrc5rCd",
  "key10": "4NLYgeQvwae2VH2EoRUR8BNtuPYKYS8pKznr4qD8uo8RnKm8GaT2uavszJMgu3z4HKXgT4PURkvAxje3XuGtWb97",
  "key11": "4RkVCgpZDVgdoMxqVNppewFehW1HY1fBrWSDciojPtY4PJMugdtw5PpcgZFN74oEMGi6CQWaDnRmmhVSJEy7oSFu",
  "key12": "3GvauryAhjTBnXQGHb64QYqtyfob5yoi1cmywRsXuNHhcxnBEGybnEBQKec4Fj5zU5LBrrP9yXvYusSqLLhyNyCj",
  "key13": "4XdWEfeaFENZPYkrayrEBJjZBBMWFxxZgM1vhbDXpUof1YrcjC47vaHFkS1QC193JzU9qwdzFRTDZxKN8KKcZ9eg",
  "key14": "55z5gA288EYyKFjXD1LMWexJ7H1NgNjBmSCMB96JMk3mpthzsty6agt7GANCQv8zcgLWpuoBuEWvYtiaB3SxC9By",
  "key15": "vseDc9oXQQVcg53vjyBMqKDm19Mxia373HwxUXpeKnRXV5WNSUvfbvrc3ifdcGgm7Mtnn1N3ZkQacjZCmQPgUJ4",
  "key16": "2KoE4PcmiAB62SoeSZDMmDcQiDz9RumTmWDWcBvRgjB8fRBynqp4Ge1yohPn3HN3zADhFD5z9CCGreSiHxnwudpP",
  "key17": "46CJmDk33jrEgtuMZHocHp1jCcTAcCoCJ6MgzEp8fj71U1kcxQ3EEW1dCq7ZX6YKsHB9oqwp1fjNYM8ZHuWAvv5",
  "key18": "2LpyLbv7EbLjYk5kd1TPL996ASRPJ3Vvckzrp7mFfEgdSmGmLmPe5uo3nypgyn4p65GAcasfJW2h9SxKAbUkC891",
  "key19": "eojVqBSEKamDn91Su1928GAQmH2WeqL6XAifATZcir3xALTWTPhms2UAeaq2UpdiRmQ6uTKJnq13rKNQumyiJCK",
  "key20": "S76dy316sSEsJFL9QiBjCXp5huVEVAQSrGqYd5TANa7YHJhwVknZqukC6hHG6mn4wHEtUgjQAw2JcDmFzQbxVMk",
  "key21": "4U52RvabhNm3bm5tZQSD4VFW6EyrsyYvKdKi1TWH723zTxzPvBwDByR6TKfE2sXvkRmgjEUxLfgRMJZY3LN2x2Vs",
  "key22": "2LZHjVQGGuKgTLGbJAvLKe7u46F9c5FEheLwmrfHjTgsDGa1UrvQHsbtv7TZURvyudbEyH4RJvagLn6psPvAeTnR",
  "key23": "3mgTFo96gJBtvW5ik17EnLSaqP9s7b75cembJ99KKMXCHasHD7t8UQGBSDAQyQ6Repg47iNfCPXgEvZ2WUW2zChv",
  "key24": "35o4EidReVM3DvLsHtgFPEfpgadP1eyQXEA8NNJz8gLVozFB2CnTe65aDZ5eBHr6MwA1ZhVJqC4c5QGFSxWfXdYE",
  "key25": "3DZwGG84JgTqyAhJ7aA2rZZDtSpKdJBm4HyEBVaoJ5YnjAP7zPdhgmfohv4dY3RZZDX7G18MTaHkD95563ynTdx3",
  "key26": "3SynG1SeUoYi1zXqHd1HLKb9CTvmEBCt2MBC4ymNneC2eCg67BzgssWD8bjj7fa3P13XKcvxNoFGVHkU8gGfEMw9",
  "key27": "RVk3JzkgdxstPewESgWCvyKVF5Uud59BKpicXdrQDwoc9hQ4aSgGUSBTmBvnUtZ9dc6AUBwK8F65onHPU5EtJ1q",
  "key28": "X3cLrnge6vGm3bwNrPW3QUvgPkpFb7NgsPnH8ue2G7eEaATpJFEnRWCAaorRQnX3b1QQcJpcSKUZLuJyckKzqMN",
  "key29": "5QffjQSbc7oQ77LmbmvhBgSR7YrhfjXN46btRDuC3jyaPvgRWd5L9UiD8tpp5K3ueLzwkUejsmcLTq3UqgAUn1hL"
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
