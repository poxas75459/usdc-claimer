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
    "5ZYLcdtvwTKTM2uqAV6DcEyQrNBkeCsmvn8dH2b7q3qDY1QCGAHxGDMVFBHKADYj5GPaF6fxitr3ZbpsKoaCsG5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J5mexg3P3henGZqesu9RzyKbzXnXbapf6Wk6jFvuuhGyKRYv81zXBVDokw8CMeRU7k8pxLgiiFBxZNn8HYGDNKy",
  "key1": "2rkJvjRYHbQBsXLx6EQEa46pRjc65Rn9FMqaxivgmrboNqsjCdyFoFQgMod5PtredPe4pzuzjm3XRRQMYffrAD8k",
  "key2": "3PHxExTEq1DCwzewAzRaf7MAsgRqGDDhi1DU3sjU6rjpSTFPacxWmW1oNkE2QeMujX8u9B1TVFDhWUUUFw2NhFis",
  "key3": "59icMwyZNLMjz7DAus5PR3mAYr5diPkHZqhMAtF44XM3C7hUyUzkBGaKCkASLpyXJF5eX6ngrgeeHpnks77VEpor",
  "key4": "4mLgqH8i1Eo3tc9CfNjArR8bW2mbpNgLCwyXnY2vzE2FEEf6sfVSZHofsRUNicG3PSZBw6yGG7DDxvmnRHZ4WoHb",
  "key5": "2wBbkGLypzLNYwFjuF7wyCmbCPuMUW1kTrjb9cDwPpua9musVA4HR7rhpYPjEd7qrSJ1mfovBFU1tapJBsfNEDP4",
  "key6": "3n2oCjwknS9ew6aW2N56wgZaKk2kxKnTFQFg3ZjjXMZqkQXBrj1WEBfq2ycMjWP3QU3yto2MiQbhNQ47W6o5Z2Ga",
  "key7": "5oyVhtK1jYncuMwFNE5V48N5DjEpMcpGoZW7ePo1FUfSuFKHkFECiyzrGArnz4fCjUqNoGaUBkxCd2AdercLiUdC",
  "key8": "51wXKLWsiKnVhmPqXfTuNJCFHqnzjsBjGFgG4V1phwUpqDsVfkjS3q9Lc6VG53bFRbvpSyycC7wQf8oAmsjEasWu",
  "key9": "4bcM5ks1LexSagGzzLVKcHzBqA3atjxm586GvobLhE7bw67B4RGNb4SVQfQYhXhE1tdYDm7S9usTHRjFS4X6sjvQ",
  "key10": "32NCjSGofZnp3p4sHiwxMjZAPF3YTbxGFQzkfHohbNtc3FQdoUkpTCU3BdjW8hY4CDnBbVpEAUhWQttdU5YQB5J5",
  "key11": "2vGe5xAEUpXpoq5yezHnjt5baeZXupqbReBq1LMRAACudrBDMreqsY2hxmeABy9VbMj1bNWenB7wNPW9mrr1urc3",
  "key12": "63q9nVUdfLauAVkxKmDxJFX15XJuFtQ274su26tsqDe6yDpFHuAgqATJ326552K6qLTxZueA3Tg12Uy27Xi5h8St",
  "key13": "2X9nzUSpMvnTPUABEGz4bvheE5xzKNdzj81FhtWUDG1F4KVch4EAjdVNeGJPAMeJAXQ1YUEPo42SzREYvxkCLa5i",
  "key14": "2dtnGonTt3fZcmxSKJ4PzsNFrPBJoiVXjwD4EgdJb1D8HjER2JqYUArZNRz8ScjTQPMB1JUB2pPYFYoSo73wyenw",
  "key15": "5ZhqFwD93uMHgGPLyw4EM3x15YrrYmE6uGpC5YGVn8jdzvYT2f6qSxxeEzUhgPRJx2wMSrJ9mLs7Nino2cBCsvDe",
  "key16": "maueaPdPFupFTuzczoFY21iGbWSzSqWUR7EGdh6NrwUhhUBs6iNq78PpLyozmxwZ4cWJ7yeinQTaBUuLM2XJ3W5",
  "key17": "pEEi9oNypXWK2R6z3XRmH4RMX34pQE7e8GD5Qw9s94nqnwhKRTdo5AZRZnc3wh7nc76fJYADKbPpReNXzLiYzer",
  "key18": "dQmZSBQQ7mavFCkmJgxk3JDTnWyKEA3M4RE5CjQWQ7vwBMAa74uKfTZZg9j87L7vPb4zpRs8R71HMT9AZ6JJigV",
  "key19": "4e1DWEoiaZsrR7xZmpaGCKinsq41e6ujwJxar9aqGUc6SL9SECbyCDAknwT9eB99MU9X6nvvpTkX5Wbpe4CaLRhT",
  "key20": "66EBvoQKq81o98H2ZwxpjxbrGM8gotuVm6af7HRTzz94aFsngXV3RJqdoz1uGgYmbEsi7M5CUzsAGMCbBNHK1cvd",
  "key21": "5DgmXdBYbK8bcw8T9jgE2qy25qtdk4nUjKBL4VdozoKcw57y7ezzXC2joq3ThWukfpExvLkF3zxaMSHWiV4mwcm",
  "key22": "vrz6MSiZfyLLRNgvJyJLU3rCgKVgrXLpJAFDsfng8U4LBQLzio8dS5rbDo69WQspgqUc77DBzGQ7e7LfJp24VAK",
  "key23": "4iWNn2y7fUPcLSBEf4nuM1uW9K8KjMoKvziyczUrjV6rmhiepmmkYq5FaSekdr7dujaAWF8CttFpcwV3LpiuJ6dy",
  "key24": "5zgbfNUYXLHJq1Ptu9hXEKFn2aTntkoayqZ5sPanwHoaMeLCcwhP6qYJwwB8QYRT4eHiF6VjEehPC78tX3g1j6P2",
  "key25": "3r3rBHFG4SYxMKzJbNxWenViJa3mmbEEPqYNZCMuLtKcJTnj9GR24EKUCc2wozpoF4sprJHhMbRa4LsC2Th8iSQe",
  "key26": "3hUNjivzYv2vUPq8eMCU6fqBtDyCx8fWEvfUVNf3EMMuEsMMXoWxKRHZirwC583sawnHLhEipx3QTqE31vYPKnmM",
  "key27": "2Vcpw3CH8FWeogX1GSJYKwx7WHbgoHnfHFWjkBdEhVwvLJwn62G7h1pQiQm6Q1PW5QR8Mn5ExLT3gQwJfKXVyesF",
  "key28": "4Nohq3xufHFCPfdS8HgNn3CBAPAFbwt5Pg6Ekbz5T5z77ovmgc1qX8Uz6mneCyfqTiUqzWUiF7nkzAvMwSzHYMUE",
  "key29": "4SQdPm5N1b23qAXEwuVRFUvHgHcx2iDMtNZCgTBV2eFPCQ3Zd3e5cEvLvT6FoSYbomP1xDwQ7i4nu6quJcDvE5h3",
  "key30": "5DxNC3baLB3wheoZ4SXKMEyTydo6KDPCN4g1XDYmqHXDomMZder8nMQLZdX5wD27z5cUkNNc5DkWayAm5DG7UGiG",
  "key31": "3vpHvf57f3WAcWJq2yn7hLzm7CqBngBRfbVvQVTUXo25RpvQXtevTxSSvuPKuxHAuc4uXWKdDkQVwENv8ZhqfGpa",
  "key32": "74mhJbtftbLbsyyVcRVwFHcGUG5XTDudpHubo1JHimafPPLWBGR7885fkh5yKoWbpgWmbpj32hc37qzpW3xWy7h",
  "key33": "4Hykmf4TU1PzZDY3nTiZ3TKQfww8igFoauaZU3Tg1oVmuM3cvpCN2jfRfcVMQBeZrPBFKwWY3gXKMLxv7redCLdK",
  "key34": "5phmUtSHvs2LFqjf4JGdtxye7xvwreP8GgnLE6owDbe6EtQWJjXbesDNGVd6W2Lvtqoj3UxJj4QfWFBs6xHco7E1",
  "key35": "5LQif7yxuZZQk6uroshViWrteqrE5Wv92AW8W7HYBnvt5SXAkHsv8FFQ58RUJN76QQ2i4HXKBuT9tNduqNXW9y1Z"
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
