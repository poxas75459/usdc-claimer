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
    "31yVGbagGMMwFtik8o48ndHbD2rV53Tv2HtiAG7aZoamVG4nQRz1eYmX28LFCNLoz6L7bpBHFbgx8A8ShYXjk5tB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v3HrJtrThqoHjDwSvA9F1mdtiW7KUnG5RH9o9V2sR4wqTztLCmzRL5Ka8BfSXcZFpcfcEvRY9KQmuEt1YSkhzew",
  "key1": "4dESiMMHEzCBou9NtPvDDtTJ8kjNGDMW6pqTBLrEsErppKbemMqKf1hgNLJEJt5NxbsMmRtjdcvYx5sUysLUbkZk",
  "key2": "4v3T8AxnrkMqDyMbYz95VdiYWvZzvCFWds5ECUksyhY2gmSNmhshaLbornE2SKhBZkNAy5uzRMQAHAxzB5dPdz6c",
  "key3": "2VfrnpdeGUHpt6WbKRUJo7dpZ98sEKvZLQCLLFsAj1YadCA1WDURpbhuE7ByRuLbifJgK5Zz8msRP1FGscLFx1FP",
  "key4": "5FytNf3QBk9wCge6Yrizz19nKtbXHgGypC3PRtEXvkYFPwoYkSLNcshFPJoFmaUdpbPkB74P8jmdrDq9MZrBrAnS",
  "key5": "4Ckaz6FTgydzmuYnw3X9CatoyDcvDKoVC2914PiHVMkf8zMV5o5RXE3x6zymjnVDANmssBi6JrqYFF4J64c1wdtL",
  "key6": "5Mreu7Mu31RGLMm2QuGdBHGEgE83HSpRFP9Ckd57T3kbw5VtcdVPb3BGwnb56BjRtfPAvkyvb4GeuUiQpsjzQqea",
  "key7": "2Ag8tn2Mkb5TV7XiZuwzcX9x7cZMcpD6xSkgVNFmJHhRteSd1RNFwsztC34ndcsS2jA2zaSiDtcrHnrK14X9PaJz",
  "key8": "vgHDxWxRw5NTd9boEVsE5MeEg8oWSXvsTKNcApijHtuzAZV2a93c5riJm5LTUKM4n3SHtq7pas3RqHQEVjoVmov",
  "key9": "QVVqs431wZ7BNGzxW7Ym4XD86ap2YbhvGaQxuwDwXrZf58XHPUiRoySaLtrv7kDvpUJ7ZHwLMcVMdbXrd8kj7NY",
  "key10": "4Dwco3zNiYjqCJEx8QmJ2mjNWo8b5Bv19AkTKGRsbuNtnWMEPo2sgqn789bLLBtMgamS9mEcx5CjBeMnzGgyHyHL",
  "key11": "2ppVG69GYQdzcNrHMbuCWomP9cFEHHxhUtnwhtyGFkYtDBSPKjVaK1ubzLesDPq4f1XcVzF2PLsUbWHHsrkG8vd4",
  "key12": "4M6dQ5nYt3usa9PCju9M4Lm7drpZSxn2rywKfS4Kwoi3fYEBvpNAwDsfY2kM5zDi7WJaeiCVTNs9WASQkKYsUary",
  "key13": "4AvcSHHN6Y2dyy8su7n27iNK4L3jygDmYfbDrJwNTPKFLMCoHr2spsH5gX7mfV1AdhGkQGRWfqbFWS8aexi48zP2",
  "key14": "4WUjFmHhQTuMSg1R9DwTfB7yq43fCfwncoLptRUEAAZWx44sDMKUkPkYKUxKwxj2pR1szbgzrtwBP9RuChyibe9E",
  "key15": "BjYEXUJQn1xdhmPNRPG6dj9m6jUeRngDXT9YJfrYZf8VQNnDiv1MB6UUDAy7ZCvjrnbwncJ2R8yuhnLKueUnDxg",
  "key16": "31onfEsSPfiMJdGnEsXSEoKCYKLDxqN7xvEzTGXE7Rq6EhGn2jiWFjSzUZaGjrRc1hCpYcaut5WEaXUrxzYN8zsP",
  "key17": "5jB8UUkPFtZa6vx5GCkCCK7Pd77VnDZv7rtgS6HEL9KRRB2HBE4oSmiwu6MTvdxbAWSdTTLS45AajmXrWbTJ2xB5",
  "key18": "244xQL78NUtC8s6pnhEKgocHZJQEUGJcbTFrfYQTeZSDUXDUShAgPMgVz5VXvEnaqtg9s1WQm5cd5XCiUiMLTUBr",
  "key19": "sFXg7zRU6KyMcBKRbFG3BynwYreJtyrQ65mdeGZB9mg84QtaroNbCFkPEDYsQkiDgdZm3iYDNNcJ8MSxuB5p3wS",
  "key20": "4JV43NHTmUCuTJmHjiVxj4rigfK5D7vAt7b4pyyTdSTTEQiMyqJfmkPyLGTLjReY51aRCntdJQem9RDicKNgEGn4",
  "key21": "4FhyZHEPGAWbR76M41T3SnaLGJ6Y3WCZN72krK6yD76K3yiu9EAS1QfVhvFfiied3QETvHjhZcbyX398XMVv4PhY",
  "key22": "52QebuWv3piwBEJwnNvk8vRyUh45jgX4sqaWZ18YA5GDUTkWStSAbU1U5LqsiLWKZp9Y1VCzjWbE1SJDGELAHmFV",
  "key23": "5QPRgQ7tPbhq9RaJmA6GaYPuVt2S1dfNLYdrxgFERyXEuwsqn9RyFrSmSiMadkN3GYtatufPxTgCyzUyvtMYXyT3",
  "key24": "3pR2v7vn6BRY9woNWvAnhQ8x9mfKNoJUDTm9v9q2r31KjkpmHWJpjgy7Gnm2WSaFYTSpCc1nArEBvCfUzhmcN2BV",
  "key25": "628LxSRtAFxnHM5hhGRpy7baA5P8DAmJQ6xvSaAkQkGYT8NGrgKFxXZ6YSDYbYG1aEMXwWBaHywMsSVTdwTcYFfs",
  "key26": "3m55B2bbhQkyAQ1Nn2N2FbCjheUzYLNFcby3qQyzJrQiYznPJVtgzwtsgEqxDJ7ZqtyLhaXdKkuQduAknqnTM4hQ",
  "key27": "ZuMsxN6mU4dqkDdBfv493YQWxq5D3Lnq8TwkAjUDD23mXs1EPWttck5zdVSnG8LHeqfsUE8dVAgjFATQyWjzTvk",
  "key28": "31jtyE7YYsKnnsaLdFvWiwAsPmxSrz1urQo32ivxiUoWz4HYAHUYFtAwTXEyK7wviE9fdQfLE5yMhJPhtrZQFhRS",
  "key29": "4VJ7bUzumtjJWbnAZ1VWPmV56EdJ32kHp1rE6eh7Yq1iqLiPd8sVoUMq6RpSck8H7MyHS7Cew5pJNriS6JH4H4yS"
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
