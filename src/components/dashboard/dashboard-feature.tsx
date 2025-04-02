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
    "3i959PAeBYGmqvMdopgmTTaXGAP7DWqFADhn7Mu7oJogcxQGUFHMxcMM7gVNRdi6tk7KHeJ55Bb1vb7YqTSEh2Jq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nKyscKXLwfioQzQNc4wZ7DV7g6fmu1oHLLLxEZmLCCh9rgCvTxrmpEcmqv9wgxb5JTqAobnpdiQG4zTk6aVLZji",
  "key1": "41HLeHLuzfdCn5gRaEiXBdnpMwHjYJrsu9mYfs55xGUMNDLRb1rjkDb29eQ7JKZDaNKngfgxZ6V5n1emFJBDywJN",
  "key2": "31EXZVAAKz1G1wvnHpEdwQZJ19bSA6FugFsBLeHogpZpVxV4gUgGVkrhdZGzARLHfrZSXN2x2cnqNYHaV97p46oh",
  "key3": "3G3XSqnhwq3rTedmcv54fLLqREkNZtCTx7DxeJn1oWQZcAUWY9sqyBkveE5hziyBEUaoeJkhm4Ftu4YPYjDkUa5d",
  "key4": "2JYw3m8GvB3zVb2vAycrePLt41sN3317bcUQnVVti5b34dTXnkNSyisfh4DkocBhRziQnVrELrDJV8oyTctFaG3P",
  "key5": "3iCt9Jrwf4hWrEepHBx6wWF5WfmwKdHL3Ly94G1pCEDcy3paZ9J4dqv4VnnuTcDwnqrM3kfpwNRQKwiCPCJ5D2gb",
  "key6": "3CaTuRtqBSfuTjoMg2Zwo2iUx3jGXbYobaHj4ppSvHDZvJFfDYyQqjMCbaAAD6E3wFzBKM7B4vqxNTYASCNnT8ca",
  "key7": "6iWm6J7QGka9j5ZgfgUqQKbsFRUGDACaMujQq9FaVnKxrsy4zfiiypg3JzX2qwFcL4Z5JLaP8Xef3wfkhwm2sgE",
  "key8": "xJbzPbZAbNJhzhBkqrVj6Sh6SPhxsCkPFFpPy7XXhby1y5cqFiDNP3MMSeyGtugg5r1xb5dqnA4oyLKxgUy44GL",
  "key9": "33fdKVqDxasQc8wKPAHHbgtjYraxYeJQTbppdp6YB4nc3UPZ55FNSEgb3bFaRdQrCHnzkqtfyfLsCrAw8EjmF4no",
  "key10": "5tVDZ7YiaNXAz7xfGDdWLC3hoRS8YMSkCmhBHCJGWvXgsBnDnFSt4Vzo5Udu8dq1SuvMGsTgkc7N1oRfz2drnHKu",
  "key11": "67RrJVLQQa2QCr7ddQqWG1n9eY8xb3UsTMzXDe8jsSU5htz8uuRndcessriwZo3wTzEpnBYNdvA6WigKCsWrVjXa",
  "key12": "4HzqS4iWSfDx5Cr7hB12bPzxdWdvrhu6UXsMRYwEaysxYKSzeekHBrAfJmMvLKRyE8SnoHkczAsGLPpxrE8PouHF",
  "key13": "3NWd49ccL6gkVpBSSYA8eckixD5J9tmzr7pxpmpsxMchiMQLy6PALXDNbHWtXJ17hQkCARgb4yxNcQduAWFChZU2",
  "key14": "dUpHCJGUSiBM7JknZZnuduKuWR4Ln9e7QWmrQw46GzMkjQKEGSGHf8sHEDsbcxxKvx3mQ2u972HG6c5mdwfEMa2",
  "key15": "3QTAUabkEomRrzgvyhFcLmD7u872iUhyRTRjkjDyFgh4Fx5Z72dJpSKHz1xZCdeuLbeTtgov1J9TXJj4Q4RFTKbq",
  "key16": "CQ2ML6TTW1hnmJYNvdXgQvoDcAEeAxKv7jqSjj7koow1w997RBkZFtoiLyQUdpxrGw6HEQMhAtCPg7PJErSYHP1",
  "key17": "sBTR6g8VRoduxNK2Lia3J1C3wQMqVXdsaNFtpiQZcR2d45WEAVFnN5k3WsXMphkdjWBeuU8FiU34zPWkhHwiMNS",
  "key18": "2hYWcD1zZPcguqN8zcdAfWBcnCXw3GkyVhiqkN856zinMY5BSVz2KJ6hTthm8MmBfxdNSpeGqBA2g7hxJCGyCbpF",
  "key19": "5ffmbB9Tt7LPhLc7sAPaHZVcd1E8T6cPWsRVV57XfkMvDYqoyo3q92c33n8E5hKsfhSKpgHYUCkuvZNfMeqHUowu",
  "key20": "3kavCSva7qMtpyYirkaX4RfEx7TSaiayTWfW1tGsw4RN2qqoGqdHkxwHM1DxrhavXK24p4r3xX4JCLoYbufvh4Ei",
  "key21": "53XCSc2Jrm9K5EKD1VcNvwjkp5jp6docbXGNJLCzeVEpgmgRRBRHgtyXnmkViGjbseVmw5owMStey3oamMG755Ac",
  "key22": "37MTwRFmn6WakCchDPgsamtXKmvY7bmB4Fnuj8RnRY3BfaSHqCBkXTdaUZY6MYWgtEFZnFJCNhNZd7aNQ5uaXCqN",
  "key23": "5w2cE4JENjLP1vhpbjtxuak3ZKf4tffSc6FM5VSdpFeuT3LpvfWEGqRV5A7HWaGpKT9PHqtBZUNjL71qg6pXjUEX",
  "key24": "HE1iBRyZ6KQqJevXxXvhvZ2XNxyej67QfPkkdLzJdaz57gLquR9vcEwCdWN9LtrFCSTsy4Vf8WyVJ4aCpCLfexm",
  "key25": "33A11w9n1C7XWRvndGzY4anKyC1Vp5Qs48TbCbJEdVPbQheKX6MYU9z6cWd5SZ6XEMdFdigsYubT33daXftjy36Q",
  "key26": "37WHaJQFAYetQduMe2Bm8P2dUcJwgLUN1q1J3UDKcSJSEHAAffHS4gLuQeE9QJYbcFQt54sqvJngYvq1RJnBjxRa",
  "key27": "46YquGH1c7UHSmVmmAsMFB7Ahof88Ka2CewJAXhDbRGrVz6rAezJz2zxfhUCt3nxz2CSTkxTExJvn1VM7hgsxoDb",
  "key28": "4upiwLiuMJ9oXG4cANpXUdhxEuh2w6SAxF32oEh2kUYcbMgoTZCV8xSUPhDSYwcszhZbQHffwL7WwKDcYGYj5guz",
  "key29": "YKCPXznu7QoxfBTLjX3eeJhsLxTEAvGnCbH9uG681oJp1wuD6QiHeDHw37oM9tjMbDfiGavx3m5Xp2FBakzXUHk",
  "key30": "4rDuVi6A1v84NztbvuUVTzzsj5tH9i3d3dWjWSmgfCzFaXB3jegCAzRfJVUPExukLX1JFweF8HrxZU3QzcCaU12w",
  "key31": "3tJQgAWkeKpWWm7RddFsnm2TM3kUmcYYgZ5eWkwKwkRUHirttCBe6foVh26pdM1VjuWnmzcR81FXqps1vLJkGRii",
  "key32": "5m8vSECvQZPmisUGwoA8tpnaP6WSpQ41ki8JXwcm42JFbvwUjfqpnmCvHjrThmx3AVxSmbjQpAt5q25oVSsqMR8C",
  "key33": "5MHVdqm5WTgyzK9KQERhLDDRfaKavd6XY6E51PyfnUSShoPaTqcUBriuJSv4mE3beKjCK5Ag4V6Go2Ff4Nd5nQ2m",
  "key34": "AeocnfHyoJB9Uxhpa4dpZq2FgtvNNLiAhFX1JfkAQk1es8ZQnz7zjZtjAHjf7WkUwvvomUh7vyLWu7VDgm6tkRT",
  "key35": "WKpU5rbswmDyMZq8Y38kdG4WWm1pG4UbBi58dsCXmgyCUp8uipSkzfdB5CbVLbznVjHkZzGqi6KvcQRFGjDxG8i",
  "key36": "4G1VcwJKFWwDLVJ4ojvRWjXRtWYdmECfAJvqsj5oTTCSFHhaT72nx5VpYd5WKBoRw1ZPicyAMEr8ygWkZkgP5sFY"
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
