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
    "4ydXLrr6pMMuu2eyUuHzPTiSAqDv9PGEmcfs2C5QyzL4j5sz6Nsb3ztmXpVkcT9bznbTC93jrAVBSVGjnZKWRbQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4Ft9we39rhgQhpBNBFmnzdwK1AXpC4wePYRAwpfz8Vi8Nqjp8RECSqVk8Uv4gWaTPtjbRfefNJveDFmtb6338c",
  "key1": "3rdzhdvKg2zEHiuzo8kq8FCDewtcicAtusC7qsnayauWdSadgbB74kptt1uGV8Jo5vQyDkgF19PMEsVDayZXEBzQ",
  "key2": "uaJyCTwsp5eTS8EmEy2H5QeKdgE5pE7hZSfMn51cqrmLrQgSYavFYKs4trCFAPsdnF9jM91CK1ZaDBycuqjvdW6",
  "key3": "2SEvn4hQ9dQHUQh7Yi97QJassjd3cXEsjD9Q8oj663BNuS1QuP86NcrX58Uho74VMPiNyv7McMhszSocuzea3G7C",
  "key4": "T3WsaiuNNWgV1roUshWsjhHQPqmmpzKqg656LVXtonPiDY1WX8bYvkY28LRr4uEEFZfKfj9jd73Z9EuT487LD6c",
  "key5": "4MJm1oiQsFZY6nnCLDSVnaK3kJVjiHGtnKTyMiFHvycpf4UYTqfGsDi2MaMCLrLz3Ef5fX9nN43kz7nb38dv5axt",
  "key6": "4PTu4keFLxGX69oP1bJ2E12P278bZDEXbwV5VpCis2re4BwYENHiZTUPvPzui6G8cTVa3znqAVPaxXtLbaGmH5zH",
  "key7": "DPyRntnhDoEVDqh4FPnoXoGZcCGhtfdvh3pymWdKWUi2eZqa7LUKEUWAUNawBgHJ75X7VYYJtKVw7LuTVxqKhkt",
  "key8": "4F3mmt29HbzwCqea19gQb9Cmf2dbLS2Nk3x1K2Urebgqi8UReH4sR5QVG5fLsvNWgnFB9QbN3vqiAsk2h89RmGrN",
  "key9": "66Y88FptW8NeFLpwxBTAZjYgbj1eZo9JbaBtKUvRrCZMfAjMfskR1AgVuqRUgiYcEnG6eizUJNDpETWCDdMNSsEZ",
  "key10": "4QzEFp3BgnqqwRUP8DgjgHSM3jfLZ4soVNAPRZnNEFmmhPFLHvYX8GRb1omw8J7ADzfuYoeYRbGDVooLabW9AkH",
  "key11": "2WHMSpT6J5YYkK8FqMiaVfnAjGPtxdDQey2E1FetPpuy4WjXeZ6PjSPrgLtSJWs3oKs7XU1Jb7ABA6mwhGuyYPmc",
  "key12": "5noZa7dsRWo9TdyDzXsruGk8z9RBfa5xDufqT2GCf7T2szVFXg7XHzYo9Ua6C9QDnbVTQZrpLqbiA5FBZLj1uJY2",
  "key13": "4GD52xeSehgrqRGRBAsxqxHjgAjM4Tf9u3xmpstaSRXerrc4y5DkMBd5CuPdEZDf8xzHodG6be8dqu3SB38Mbx9A",
  "key14": "4G1KpGFRjARAfQJjdj5xxTpN9akqrjUYVM13ErAYdMvBNSqw9gerCAhi9DSpaPsyXD9AZ2iTgmdXWXExhqSrDSuC",
  "key15": "4GGJKdJPTd5QxVpee36Ee6TkCyH9hz2RreAc9wMPAD3dxpBWt6AtFez5YzAxuV2d4YUEs3XrwkFrjAnJWkhWYreR",
  "key16": "4iHWidQDyDp4UgrfArTHp3gJwVoRhWCFHFtN54kq81hWQeKEPRHdzkwZcLeXno3cdkr5XDMZcyb4KwAqwRMDyzDb",
  "key17": "237NzWbuZCfnvxo7NFzLRjYsvuCY6GRfsw84uU84SEuQzBxfyQbm52LB4cbji1sMkE2jSgrjX2e6eVjPKj4c6FRH",
  "key18": "pnDhvqi6NemxhjpNmGmpZRBeSgba1zSr9CJXgvU7mPY6gbW31Uz8QCPxkhqrPrXPm5VwcHDHQZ4K9SsBP4oNuSD",
  "key19": "2GZq1E3kUfQ4ibuRac8uq3suDvQGXMp4qF586RwcQ8tjaXAP7ryBCBfqRYjEKfeqY3PrR7xhhFsbXCCdjLffnbMf",
  "key20": "5SfjXppr1iDu8WDLRrV32FkbxLPi35PNk7dP2DeSugeVP632cVfqxgzSiWhMLV243gyxKtEghu7SETDKviV531hs",
  "key21": "5yhZgaBCQ8p847yTY4XbdyhT58CLNkdSqD39EdWgca2hGHN7J2Jmh5FhBmrSk5vcDcrVoVNQkk12yHYpQnU6Mq3o",
  "key22": "24MsaPr2LG9JFuLBjqMx1GzvhJejnrBAZtU67zYpp1Ns9N9j8NBA9L3P4JoKFZx6BhwNJffDKwMS6CmjKt7kEPDw",
  "key23": "youQJPiS6tDWnc2shFa8AgXUTvYshc9dJoPjngYfQnpmTtEV3jcMrc7DJgUCUswXDHDcY1fTcC1KaYq1kHbngQe",
  "key24": "3rH1vZE6NWS7Mpfsor7QhjJbf9TAZCZC8ZWcFLHUPP1FzR3qTZFNJ8teUYA1kAHGB3qjTDWDaXwX6X2nuSde57ER",
  "key25": "5kST1jBPHSdFRjEk3Zu87Tnwb5E3WNDNNQfkrkeRXRhhm6Ers7XgpeGdfsZx6eY9rADKK1VHHEcuf1cDZ3fufD33",
  "key26": "4q2amTgKX54hsqvaxWAzGkirioAhQ1MJYodik91oWYRJLDuMftrLeJLzqk5zNVh8LpJQPU6cGV19bjUeJ6NN4z1v",
  "key27": "5aucPYqa13HyPprmCseG1uqE5wF4rjrASyfUYsMEEcSjRHne4JrmjMHuPoeVmnVkPVDALF2pWpZLL7XaE9ztqHjE",
  "key28": "1295TMZraHbJcKdybTcbB99U2VvjUn8STqovJyXizcZ6n52EgGKZPx7ELZj32w1A3AF1TioN4P6TwgrdXtnrnvqW",
  "key29": "56vqNEPDJ22DKmNdm7Q4XnGPcgN83cNWa5Zu1Ly28tHdP3utWYG1LQWGLVDHya55NSt5hLdQiLjTowyXJpVbjthV",
  "key30": "4Xo9c6nVmNMnpW3Sn39bxbfM3oMQj146NM8yoUcGqtWAFHML8Dt3c7QoALLt4Mn9EbhxMeqAw7GBGrC2EswYuvQW",
  "key31": "65EbKxZEQL7XJRUFydTdXVbtqyvqRxANeXUVxby5ioN7WLjtzwo19Fm4Ph6R6vkHPenHyptytCdPcyDLcjxbaes7"
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
