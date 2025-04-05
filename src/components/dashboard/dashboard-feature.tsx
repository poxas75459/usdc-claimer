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
    "5WmBbsaqqDdMqgUah1NWdTsRYDcKweeBBEMSv99vvKDFDKpDoZveapbYRA5cCgoiB1R345USBmochtFdEfehst6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "maKR3mB5yfsDZwo36GJGJkWzCjPV9E5itTwkmrCmztq1vfiU5TTZSJ4Bxt9ezZ51iiLnQMJNiwy67Dmig7rDh4T",
  "key1": "51pR87kqn8Ari4BmJECCKMvwDZbT8zK7yRuv2bniYCoLXDAxVbd5gbLmzkTYGM65DGaN9PTh6MQhKeWeGRWNfC22",
  "key2": "3dmSekzD8aFxUxcwDh3Yn27ytXFv4SS6E5MdGufcMY67RzecWmn4ZEa47MSb6rja7QBWYqLJrziucEB7NGxAESW7",
  "key3": "29hFqVaVEHsdXcVy9Wha4unPTgmf6jDoL2FnPknQ7bXxUdpvZSmBw462Vx71NHWCZafvvP6JVy8XNTJSp3gdo3ps",
  "key4": "4F2Mhh8xZumZ5aZU3gNKis7yYiiqZazM1ftvSr78mBzLLgMgjoDAxZKsdVYfqfU5egKXuEbfe1bBiQs6B72r6b67",
  "key5": "3XpxmichKGmGt6GeU2ivXqEXADFo7JwEzuLLB2AHMcyzmcGFXep89R9SeziSvDREhHnBEG25MiDUqi7e2NvaotdL",
  "key6": "3YNoLeM84jcEezAY8tHk8m5wCPho4xGFATvXXhWyCYnjWEncyBnX7sJasNgfG8QhgWYBTTEgyG8vPAGF6FfWsVgn",
  "key7": "4Fsv2WH1AsYBftwXmMB2LHCRfwjXrn5aTdnp7aQomCioJ2wCHadDsaH5efKXNHsqoKA2VaVikXmfLPDkw1YrZ9fz",
  "key8": "2f91kxLkMkneb2QBKt3mwxeUWViNQ5FDF43ArhVf8wtpjjT2UgeqUZYDpfokwWCechYyCjLEdVbMjhiWYccyJAq2",
  "key9": "5wLvEyu6CV2ym8TxVZXFd6pa8vfgBFvcZsSvRBfL8KwyP3qSWg8t2eEyfgLxgDyLtZMHZUvLKGD5xqkUejBoUXz1",
  "key10": "2Jm9HKT2J8Gg45yWtCPUmjLFgaz1aby1oPCXbqiy6B1BrF6yoBS3CdWYX6FYGxAwmAsuq2LADAZEe8cZGspA12MA",
  "key11": "3LxNyY4ubKzJQ1YGQY7Tm51NBWB9cbkpsi6mDiqUq5daUAraRvvdANZHhbSpenr6yW98geJmiFKoyjUARmMzemFR",
  "key12": "4eC6gSRXXoAxnkHphNb44uU6tvjnV8DEETbDt7HMZXtBV7Xyij2Uun6wXjGPdA78GbSTnX8Z15dBJqnJDpkMfX8U",
  "key13": "47cCgBayxqoBL2RbtHG2qWN3HYMtZFcjHXWkk7kojQiFRaHS7vGMfn2iWaYk917pr9NKtSgi29etQxQFnSC5151h",
  "key14": "2SPpTkJK74jZc6hkCKhZPDkwUJLCH4bKKmxdS4qhVdAR4dxMnXH2fAeNoAKuvsKHUJXsCoHLbX5N7wuCmoDSb9Nz",
  "key15": "452hRmHeu41bgiMHsQbPAaBZf57Q3DhJpQTuKiBAH2WxMQr8fn5MPNjAWys313ThHEY7DNZrKxRRw24s4q2i9RPf",
  "key16": "3Z1wVHsKDXkLTcYPXouCWvSGXUoP21XubRzUP28KP8WMFUzQY4DVAG67fQitZJhukMet1yzMjygHe7o18WjBaPGm",
  "key17": "3Xiao7K39Uh7k3uEsqAqncHoCbzJtTeXoNn27xcAsCs3CUhWvRwxJR9iUZbe1X3bDcw5ziBk8APy5cWK73HU8eqH",
  "key18": "3TPWtmbXbbvRFTBmSNE9bEhtCaqJ91TJA6x3L7F8rWUk9Fi97WXiwA8xjCzw184ESjSbnDXdVR5X9gfQuAV4cgsL",
  "key19": "5iHWgiG7FhEhRgQCRxXNJc8ELzRU4tFLPsPS3ZZbD76QR2EiM1HomNx7m1sdJtPybJviMb6zJfzGag68wWynckoj",
  "key20": "4xPSysvvFeMQnoxNP5K44F3EsAub7u4JBvZ6jCjwURSMWHJpnzBHv8WUZ2FRXGJiRB1HPgjkbNEx3PDPczZDBDDj",
  "key21": "28JG2vwZnwSxdeWWPADJVEDxsiTLRdaPFCSnSVe7Po41NjsCxHisHNQgAyo91uvHn2hLKtZvwp32hWtYskdUg94H",
  "key22": "5PeQYDuLLLFtRa3rAn1NaMHjojTYP44h1RwRYSASMzVQUbQu6iypv4kUoX2syE9XH81AXMyS6U9AxJzDVby6wwQL",
  "key23": "5vLQSXfsjU9jYpUbigeHXJwnkubzyVMThmFoEdfTJSTjX4jwDuzJDUYqrJN2yVbaSBQVayBPExW1XwEmrbBWzTJi",
  "key24": "5qjqipfrjFmr1LCzEJJfPEctaJXVo7CrYDpB5mdM6Tdsm4Z6ZZUbVpD7PhpDVJJjhNHdYwtNTHZ3sKWW8431Tfte",
  "key25": "2hK2HwvN2GUvGTHHdzP5UxDN3fazSQd9nN5WE8C9NZHZbwJ2DAJY3ESYpyYsUHpzpUAevpRiFiQPqn3G8zFFTPq8",
  "key26": "2mFiJDQmX75gDZRNfVqs7XkuMGejLjdFFEyYnmEHNWnDxmqsSWErLydZLUbZssbfdBqL1sY6WaQ4stLeF1HpSh5e",
  "key27": "XV3CqcrQqtjrwKu9YcUjjGt69CmL4RNTZN1ErHeWM9uditrHVzcmK9cnYfxVDTpHB7p4eMjm1qpSWfTQijvURvg",
  "key28": "2ZR3MVSkr6sj9kcwwQz2VNBEn4irbryi3sZrjxZipZALUf2m7k6SpJYywq1tgtMJbqDafEdoa1kDSMxthchkL44X",
  "key29": "4dZ7qjvDThXgk1VekDyrbwJJSbMJ7HdE3tvC92z9Tw5RCg8xf1Sae81ssXNSLGdx8nhtmDXarAGJ89NMddNWhphj",
  "key30": "4M6r8zwHxaQGorf4oiYv6jaWixBNoDXQQVjTewYK4dXWBYmSefXfLMomzdCVa2agEqFfjyKzqgKq1YQFQGYQJ9c6",
  "key31": "5NknrQAg63mu2tJudAE7JZx6XHxVPu7V2VGLDLUpcKNVDAYc8WJLXQyLPH4hzfU6TZsq49vRg62dSX6c126idpPq",
  "key32": "2SXLxjo1qvCBwD9MfbjULs5521PuuDE4u9WQ9wRAZRjRaFo4V61bfvrZrjYYCuvamwD6mAkyNVsUZnUVShyrjYg9",
  "key33": "646TU3VnJMjVN1VTLzyX4W7SCpbU5ng9Dwu69odBreRFX2mpBVzw1UB6yyjPQ8KJpkuJfXeesxMLiv6VN8NjkfaC",
  "key34": "33AzPmbnUuvHQHog1eR8FmzwTctT92rT1zkym7AeVEozapD2HvWkoCV1B2DqKMome89Nv44CwebfWHVzJQJRvf2J",
  "key35": "mNdcqj6WMtxvtxEM8LerJFLd35fw5FoknXoXNCLGihdZAwmqn5dFTTbQYSB8HaCeGTctZYaW9BSxpKEFpdbzsRj"
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
