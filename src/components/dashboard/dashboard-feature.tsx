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
    "3PA15SCtQRK8QszfcMgCsyzNb1dxreqtpNWkbCUFdQb9KZss2swsoattFPinLGwhqSJ5wc59JGAhxBNgZtx6fLkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLgixfkM8XQ2XDS9WmnhzzNrgi1GkKyBibHUtN1FLGEECZjVN6P8Ht5KrdpN5ij5K7awnAGyPE5BWq21xnZ5gho",
  "key1": "3Hobi3LDUFtBDWemG6E4xsQzqWaFAQoqCHzHs92NXRuszEiYKEMAVQUn487UARQgWtHRLKervuxWrB4bw34RW3fB",
  "key2": "3Vu7fzXj8hDm82Pmxm865oSjbTxBRN2mB1Cdo5yAqr93xYsbv2UeGZQhtzPhMghCvNBjQpDj5Nvvowv9q9uS5C68",
  "key3": "4F3ft35PzKFSBWpAmkHMRhXLWZKnw1qPsWebgzZziYLPJ4C9FoEMk6MjNRr6nkbudzbe7phkh4HFn8AJCcKFMBoV",
  "key4": "EVv2z5J9R1Ky8EjyfvmoZ4TgVKovTyGdJPu26wbyY7mRhv5tdRtgyjypeDhxHj2i7DMTrrvKQuX4Uo1vTNQuUDn",
  "key5": "5xDcpkJLsbEB81USehqxqs8HWU3UziKXLsfYXjnbnb78bmeAY5yVo2zVijh3x5oYyuhrzLHs6c2nqpj1nVf7uUkG",
  "key6": "63gwarhfsS7gr25TDhrEYt7Cb2SGzbu372Go2fQXUn41upVM2r6qKFTsvhbTXMGuom14s8m4d2iALofoCik97Bbq",
  "key7": "op9HVqJhLKdyV7AMbS6PtEYDTMHYArdyJbHRx4MgmB4vCRUG5gXATcymWcjYjZ85FGNWHiMxJSZUthL963Qi8rX",
  "key8": "4LDUk5BffkJM5WGgRPzah3ydJSAkc4ZHmVNRr7HnzGz2ZJwg9H9Jn3FDsmHNwYtmDob7yJ6FAFpgUHJbkC8m33E5",
  "key9": "2zgaftb9tcmXwG1wbpCZbs39bPDzifjtoDn7B9G5XdFaw9SpPQfb5NeDqfzuZWUy2dCyKtc6ij73jvaHNLqiFtA2",
  "key10": "3MWukNrnoJCWc9ZhQiD9iHBiDyCnD4b8X9zqfmwCn26eWFKmxExw3UfUEyo4h1U8gCUkXUrk4SGzqgo16bBRbm56",
  "key11": "4hDE4JMFEFm6A38qFqQkj3BcCoSbrQZBqv1REuP7ZtBt7jtRh5etcih2aDYcK9EANAXusyeCJGBEA6xjrtqaLTxt",
  "key12": "59hY7ZAxYsGsbESRzxKpnoNYqZZrnf1G865kBDu7D7UVkt8BKZDzD3VeLYJ3NbaY5cs6Yr1Nid2sNorrujzygX7T",
  "key13": "2vh9Bd3BtTtRMaNMB3QqjwPxjwjqkLfzjQmM49WwfPtdeoqSx55D7h1MJnJoHCA8qEjxER9J7QRPAHkzqsCSfJVh",
  "key14": "3h4qiqR9pbc9MQgttBWyxJ5CgaR4AKdhY1ynSs7SUTHxuERGDLzqm9Jpyj82Uc1QXXHC8LMBkamV563pBAaUhq3L",
  "key15": "3bNwQ4aAEDDgjEvjwn6C1KsSMffzjD8SrRp4m5m22A8AFa2uKvpwoPWVioRW8hS5CVHvomsSs3UYUcGGb54swTB3",
  "key16": "54S3r5PhMYmQghq5qqPLqyPNvj2PrvbdGTw4hKF7BkD4bb8nYTng1GfKfQ5RHv7fxWoJknQgC3hpPbgZXth5agbF",
  "key17": "rSgVoB2aTMFLo5MzxFwkp76AJJ6nKYtDJNWbif2LourLWQFZFbFaMh6gND243G1soWDy3jvFb4GR43GVe4u6jwR",
  "key18": "3TMNWDXrLxZSjajURnZ5VAnCmUdYTgdBxmXddLxmt9t6kqtD8WXFTQY8tKB2ozu4yMBjByAwWuwdhVzZtYmgeTjE",
  "key19": "3uj4jsMaA7owuVCBMfUivF468xg1jQfmZUw4bcbFo1FM8sR5FEJxoFjC5o4kEhaReRtcosVNNYmTCewYwsh5eas2",
  "key20": "46dGGkSdQt3PN8XYebWhJCY5rdji5U4Xoh4r19YPVWMbXByEYNFNpKqdxh8Ew58yeMFjQxc6upRxfhRQ4U2LXBRK",
  "key21": "4j485PfDvKmtSrAoYfR4dFXycK3Cz1zvcvcB8Jqz59K9sPizz19C4usUMP116T4GEyGMaJuLxdfzcVL84fWJGeFm",
  "key22": "BWe3dUtLMFJG5jqmuYbUG6fWG6BEbAbU6vZRKHGToDbxiDFqFsP7mbLXGcvTKgtrAtAhwyovncStqcrmDRptjNj",
  "key23": "5TRc6kt5swzNjmtXgeHSpY94GjbYWrxijXGaBhMtJ8GaXCzDfEc6JiWW1YatDaaoaoe8YD4josg52hybNQovGGjd",
  "key24": "33nNPXL5Xh4Von2zYVn69pudAYBmdXAc3Mf2vAmqvrUenPyvjTCX4NyBhEAhaay8RGNTaPMPUUwnsbH2RSP18P7f",
  "key25": "4AmSyoeYXLbdyfp3qyGFtxj4sxJwqg7rghAhffyPKX5hLFBW7EaKNyvnicHbBfp4jkCYhDNPwBAHbQutQmgeJi5s"
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
