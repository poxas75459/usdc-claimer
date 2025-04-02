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
    "2BjeqvkrZCQzGjqBaswn2vMfmZb5KuD6DPe6zfZYLUX4EMA2VAYRHajSqVWhgLykHPs8mMwRej97Ed6J4uq4jk8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rxqc9P47zv2Zk8jJ73Zkw5bYdogSuzw3Nkt7wqYincgtSnKdjgLnnf6Aey6pddYCDwRbHXtPmAYVtarrf975R4J",
  "key1": "4TPRccfTd7XGQTehwjzzQqavA3biC62fzyLUrKbdgtzFEsCNrWKs2CWrrEdeQo8neDjqBssg1PEXCZ1ZWhxKAnf1",
  "key2": "4dYLQ8NuRTSZtS43UqGc8sokU6rPKpjVXrEUh6RACNKKufax4CMuiwa72ADUrYiFkv6zpqSabCLmudqBgraQ2WkJ",
  "key3": "4jkQg2hUsZGWQxJymAMg8pcdDbUgSAJBuctWo3x2DHtZcq7Uo5ayvyZpV2dW8Uji527RqaPCGaf1yZ9BP9xPoFNt",
  "key4": "4baiTXJ3fZ7zQV2cYjWV5zkezuvyTzWjefa2GiTMRLH225V21LggyvXJdCZUyUvahvbKTcbPj11f5vQryLW42ahW",
  "key5": "3CEZnsco1q7kjZssV3JBeh36L5Y3Dkcjvaci3jrZg2avMSC2cn1R2NnXWbhNc8tLbKedzqtH7RD8NtGRzTRZWhmz",
  "key6": "4FGVmeUSuLf7aWCsmXjtpn921qG1ZoByRuHQDZMF9Kxo2XYiYaAUtgqSGpkMni67sDnWFeT9NrXq5nb7JFvmkKeG",
  "key7": "3xTxkmgaH66TSmKpVc3wxG6Gp5ULHx65Ei8J2UqE1eCz9se2kYVwLUYmuQhkEdtkWVfbr4qnbH3BxMfYQJJfM2vA",
  "key8": "59ASzmrAjU8CEfoBSrvegxaHJ3gjmt3x1YX1q6A5RxCcGFK1vT1vy9qEUu4CA5vzrGL1h9efwf1var3bueCFVqBV",
  "key9": "3Z2EAPw5ZHWLg54PWGEq13rh1jXjSzP1tk6njBdfmDHh6VgcGGoLPzLoSNh2CTRGEYTaMWSF7zjMH1pCEzXc1K21",
  "key10": "5RpB7SBBxksSErKC7YWYoRoDDkzcg8raLbFXoEYJEhKhgwhXmjNNoUNVSkeAfF4YHfy4mFdBR8qQYeysEBZtP3kh",
  "key11": "5bmcQaEwjyRCSDpjEnwnX5bWfqC3qqiMmWFKbxzMmTms8Ttu23vFjdYCNsTdaZMoVdrdCcMASTAVn6sdmtHjJJyB",
  "key12": "2QdAfHnPa78CfzyawtRdjYSoSJqSXcC7jFT3VBNY8EN8UfBpikuCQSQesZrCS86ycfESVJXrbTQsRaopFjxv5hAx",
  "key13": "66JFpbVSsoBjg5TmNtgryqccAqMxDKgGxtSGvQaFQxzJNEG7qEWNn8mr5ZHeXBWBDM2FUDVHVqqLpDrFvZ4uPkuK",
  "key14": "5YmHawofHUnR8LwQEhAcNatrjDhkTtLnyNUwnMKWcFwAPcsnDkxithVvfccubGPemEq2a7FPVMFkya8WfmKhEgxn",
  "key15": "AadBsTX3Z5Zp9QJnKzub7EfzhZetb74D3GmsmWtqc1jc72hVBTVDBCuNJxZxrqndF8mBYnc1CfSEWogbPjHY3Tj",
  "key16": "4pvunesed6qjoCoNWCyWzXfaqAFFKgrLEYiAx1ZfzWMGkcdjVSgmLkakwxamjX76Xbo6qEPTxEW2YxR9mcVNNzUY",
  "key17": "4F1fk2wcAPmSj8NtXyZc76iXzGKMmZqxjgbCi62LZc1tjJynEo8ooD1C9WhQQQsALbSNF4jNBDrggHaq58bHTiHx",
  "key18": "2sAkrhX27etzxWBxHyhxurEsYfPFWi9Jf7aySCu426SPAVujJjcpPNmS3ab1i3bDjdtQcRdpD8QrmcAuuEFhBd9b",
  "key19": "2so1RHYoaVHgxbCdV2zSsfRU4LBtSRGbSA2WwmxhwSTSLSARtFmJUDGbVjmcBzmug4ZB4qQEEy6JiuoZ7Xv3iugQ",
  "key20": "2cGS5epNUtWxsj47CnwVKPayBNCWpuWnwckVd7UYxwadVeS8B8KRnvFM3G6Jxw5vqzT6mo397h4TYxzALYBHZZdR",
  "key21": "5LUkvPqH2bzcJ6LeHzQSKwrq5fCPcs9pi7yFp43wj9t1n6bLTrfhzgLqHXHSKbRuj3Y8TAZCVQVUDf8NfC9JQ3hf",
  "key22": "8SLA7MmghK7GjGRVLbkEPZzCW3LShCAzt8fZan7z2nPuVSdbCZuU5UpP6yYGLMFA2HguiHVMtEtTfEGhhjLS4XJ",
  "key23": "4kzVDCZBcTQT7k7CnbKc8FdA2AV6QfTBQwb8TxhiUPpzFRUowanybEiH9EUZcE3htnBeAMpzgSmpmaGyZZgC8UQj",
  "key24": "2XuXCCbi1VyWQ3fB2MWUu9sLy8wRGZEEAz8M8MiJbvzEeTJgzHSqP1eDFDNsxXb8dVXrkQnqJ5JBecmcyJjkom2e",
  "key25": "3iar64NYPJo4rAnxPtRShT8gThjz8izJB7rCAzZfC7HySkhS7NRjV8Z2fkmAftLYShRkGMdat1JuMqRBqSuVRTZU",
  "key26": "4WHsansEmYo9oKYrmCvo3LkBmss1bcqWj9AY2j4M5YWdTdfsFGopJRcYFrpRZdrVstz9pLxaMTKUCKa4ZjAyraGD",
  "key27": "2VnK4GqgdCJniG6nM1XiqfR3Etmr51svTs6o7Yxiyyf9HTsK4YYUcjeqbcsTiHyDetST3bQKYJqXJsUcBcX3brhU",
  "key28": "2euNrrq6yPpm7zgRLM9rfVFQyQfrfG2uHjLMLJiBrHA1w75R3DvnLcmSBGE3QkEVqvpB3NVY8H9eTevmwLMp9SkS",
  "key29": "4PCTBLcuzRYDxbPeiCneu4dVrZSLCjgR68rX6Gotqn5GiYSsn2QR3L5YBSHatQpStMuGTgCjHMoqGkgu4uccqyit"
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
