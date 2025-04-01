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
    "5j7nJtBUFyqjscg34Yw5vCTFUP9r8rk2QBph7TCAxpgPJdpVyx2XQ3sE68pFvHezGePgXYdmd3LZxJZthRLqzXtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3daCv2TXKADrutresokWXooP2ou3ysHvtfHk55FNX5Xjzi4WQnNY3XSB59RZQH1A3snHeeHhtb9knWKYgKCkU2PA",
  "key1": "3gTZndTzRVwBypneuSnvcCXdSKgyzgPS2nrefExMHQ4Zd2B6u9ZxsGNPeGPeUqMkew5dVG7xSFsHJV91UUKW2Qd1",
  "key2": "5agiR8AKfbpFPQ5QHA8MDtzfJaCNEqmaAiL4ZdZxyyUwgZsDmQz8sZCWWFbqEGUiVW7LBEyT9vX8FzhjkDYXgtfQ",
  "key3": "4pp3LT2MbxPXtxAsM1RQCYLhR7VKBAc53EqdFAEth9gqNWP2jHKzVJGTWsSPBLiFVmsQqo9ATAFpd7maR3diQiEj",
  "key4": "1rmewBNnRc9Ta44oqJsSnmGFDqtem4MtGetG5AKavmpdwuZ6TmU4u3KqDDRPGTFurVwcpHNAfeyGm9kCBoAZkXA",
  "key5": "49fANDeNc3WEHt29aoFkGw6NU1MpsuZVDYdRJ7bN5vBjGLvzCcH837DbJFqXzT7GZa7PxN71SZVySKWUek4eosyv",
  "key6": "354grEuftENkGX3WBMZkk1Sqe8DzYJnFSgu9KjHrbS6n1nWtCPZgYKD8YqvaRkxsPpLfPuU68or4djz6E3yqo9LC",
  "key7": "5whCbtrMt1dDxQe12QurUe7fxhLw1X9fUJtV9P31NHAWvAjxngdgWug1YDFocA8PYndXMMLejjaMopYHGJfDc8Do",
  "key8": "4utuAP8mqhFoNWsMAZ4RxnyrBDEuX67atwgEAFQqnXUScyZPseWCgcXvuxgo7wAvhnLRfRLc78AuHTdo6gEDFw5R",
  "key9": "59LPSmo4FA6jtCJCae494HD8WLZJPKnoWkcCvucEtAkw5nnMDmDXgfFZD9ZhYmkvnAwtZfjMntF5G3oi9NYEs75v",
  "key10": "2AXcpivmrW3PGExgiYzo3AqBKGuLt6Y7Az1Acit8EVyStFjvnZKXqhMHj24E4mTKCNu4LgququRUdjNcLWRYPwaH",
  "key11": "4WtGqhxaU7LYhNNtoyQB5qyWeCLrMfaHrWfmZghahnpGSZkQqxLK6H9jrSntCgidKN2giqLHWkqc12TQitKeGbkr",
  "key12": "5WQkCBorPXwNhjFMgQad9AH1Mut9Xnn7kkx5e4A5xJG4YUr37nQJDd2nrDKdbnrVcc4yPD7yDjjsck73LoPeoYAf",
  "key13": "9iG97hoBjX8QWP9aKvWL5ypQKKfQVykUZ21rSH4CsMaWUpzmret2kv2P3BGAmKaAcTVVj8uo8nss59QxUqm2tCj",
  "key14": "22EoY1jzkh51xa63puWqqMWzj2YjcHvSxy18MRfzNWgZec1mwzYMEE2FhTN5EV1BosHrnVmFfx69dc9LEhHk2UDE",
  "key15": "2nr3xb7mkP6xopENzhd1wdBZWasrSjeVKJuwbtkeUxowBut4NNR6qNCWTuVoHL9wswt18vgxtLTbD6aqyB89CrS7",
  "key16": "2SjJ6FeDbpG54HaULqRKwtjjb17xy9v9WwxJeSGGbDgeVv1HAa6r3FYCzi9MHqxnCSBgcPkiv2FTZGP3XrVZa2vX",
  "key17": "4HzUTChwkkHDEJNpYbbDNXD48ye6tTHRjMkJ6zzNMphYUVKTXmFgEXisd9uPBNW3r22r3W5k9Zb5ni7GD1QfdjkU",
  "key18": "3ppgBdxCoT2TAnBFCcssVusye8Uiwbc28hxQuqdwA1F1m1j9A9ev9i5S12BRcxqW9Ncp2n7zmEPMGRRLbSLe3stj",
  "key19": "4UtR39yyG5rEC5rcBj13t6RtGGZsbKDcQDozJTw2odXLQeaLn51FeMHGetyaSUq3RAE3ZUczHv9tyoATkJHhpf5z",
  "key20": "5zGuZkD1MZ3wBPncqa6kQm2qhLKUWHNi9gwokpk9jKigxbqT44P6Jj4vLtys1L7ZSYpEcyU5Mb6vh2jUpYF3pune",
  "key21": "3Pb4ZJKxUkDC3EXdBikfAawZFt9PaDGHVUPWUohXsxD3GffU7RGBNu143Zk3tetTSZnuEN7hUYhQZHGNHDXgB1PK",
  "key22": "P5FUJ1Qg34Mk8FTY7KUu8d9U7GbRT5zqSb6aAhUngYe5hHj5u8ihJvEzNcXayjTZpXa7QmWfLMTu8GJmoZPVe8n",
  "key23": "5BjYqjuiLLjmAcpTvwAZDksBP4p7B4tWw76btreaECMUAJ7cCqFxMmetmLBNamLTq1i6TPnJRgZaQKKyQV32bBaD",
  "key24": "5gY1x4jcsMsv5CZhwN9qrqZniqh4CFQEbALGmGePaiwiWjUbtr1hMVwskwy4EXHPirfwdkqyEvjMjJtEPktvtQqe",
  "key25": "1USHQycempNSiVDibJ6QNeT4Zkvq2uj4uA5B5KJxvMdEGff8BxRXwnRrYMByxbqLmytU5HiHWQeXzucLwqoV2LB",
  "key26": "5qmFRrdKX8pD88Tpry8moVvFj61MHVBMLbvFReXRECaW44vTEAmqc21JL8KBbWJfUa7XNdKKg2umW4KXuxbhcjC",
  "key27": "JRHkPwwxHs4Xg2xKGXbf896JtpP5MN6LjHPd5JpQe5BMWq5pPrvGHHonPn5JQEu5XPoBNCBXY1eeEtHoZ5kATck"
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
