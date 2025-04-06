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
    "5q25FU5vCTj33F3WB2C7idUrsbozShZKaKLcP31MEVQu4w43sJJ4AXKmNhjM63w4zWbU8kiJYePgr4tHV8TPY83j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3upP1AAVrR1opbSbbsAfsJmXUFhDStdgxHPoykPZTK2PnedvhPubHkaGGxpSNzD2vKsABmhrxodkLc8Uxpca4y6U",
  "key1": "4WtqkebCBoodEkpQk1TFMotQKsyicuyDDGYgwqa4btvW989YMDyFb9RYkWkeXmZMoykX1hCZTHx4AVstguTQDcDL",
  "key2": "gR1ZLkPzKXb7oVYmjF8SEVekC9rGL7KTwDQ28f18fLAfvTqURQxRfYPz9FfiWMEykT78sModNfHaXUpwQSTgUaK",
  "key3": "msEmsj46dU3iDr67qGFDX4kAxYF3ePJPyW5BnDpTVo8v7wiWwmGhsnugAx8jaqw3WyhS6KoYbUUUKf17m3a6APG",
  "key4": "3qZpXv446mijqxZMTaT2nQW3SjUqTc16TPMRicic2QtvMmcSbiV4cmUDpsbm5GfaZe5z2i36rhnMRYeDXVEetrwP",
  "key5": "55rTaP6nPjLnwPeh83o29XNmF7LjKSUt7NCGngQxPmeF1Hx66gEfgxbC7JGnv3b2HfJSbRv7YDBDqT2e8H8Ttjkh",
  "key6": "fwJ9qKGV5u4Cxf3jC8b6u1a2WhEBHVCVZnaMGZLjg6NvRY2yoNFKQArGtcVuraHszqmBz64HwMpC7HtASPrhzKa",
  "key7": "5E7weA34sDrtkHcNAFRkrjcHPBbLutSmAHkqKppxRTkmG9hvzw4LsvfDUvTbPXZyoqVHXysgqic4zBjMyZB4rYfe",
  "key8": "5tdKdZ3bbvnBMNzABVa72bhjt36PDYkmC9wUU4SuFm72B2ayR6YDDJnRS4GbuDndj3xPaEiXq2AuUgsfMv97WYkR",
  "key9": "4HvZWQccHuimcFC7CEy9ysxE41PEUyfXyq4Dxh39A9oagmKrpZRxCJNWufCYvxhAYnU1otDNAkWTRn6iZCwxyBBT",
  "key10": "5L8WG3xdupj4coLbnTVviz35K3K78oFjurysKr1pAu7hr8GfNCD4tCiFAmXM66tSqsopUcMBME6qkPjjYcZaBzjc",
  "key11": "2b2fhe6w8hNvkbomwCgsVnuKjHSRkaQUvXgT9HSxpxuDhGwyZCeZGH42QUqGeSfZyYxyBMXvd2F99LNNWWX2x79L",
  "key12": "3XuTsAE8rtzxWNKLRLz5STG2h7pgd8vKpqLWZkG5QB31W1Y3JanyeDMqrf1xaJoSKytWQfTJ4mtVefijjewygfBv",
  "key13": "3YHtTNqicLUiEHon519ChBPk1XfugkxJCo7djhGTrUFSESGkRNp9X2LAjEvoDnxAGoMjurA7vN9PHjvLUu1nnKSy",
  "key14": "5onzcD2bEqFAcuYvPSpMQbLUFj4AnA9e3stMsDw38MhqpgEdYK5pYQCRNKsdRy3hShd7NMj2NsSSYWWE944MX4rt",
  "key15": "2RtnBBXRc36Z8bJ53ZFtDmHYB3BmNWDzEKb42zf8EuM7nnHjXnDLf1YLK7TNEt3X1DCWPjzWn4kn1AkV9SrvX9sV",
  "key16": "5pKtjpsCjgpat1EKKG15Arsok3XjrBeELt3u5b1Lj8nCryy3TJLwjaZ3him8Doxc2YE8B5bThhrLad9pgrcVHZaC",
  "key17": "5fkr4rfvEsbJnhYDhHK8TrKEAX74yptJprxU8xHYNpsHDWdmdcghL9pc2XbkbXob27CENhzDiE79bXu8G93yiQAn",
  "key18": "kruXqPcD7jfT1zPUXNgKXX6xA83yLDSKJALbAhGbLhajst6UZxne6S8TEhbMBqNNcpfFkDYMaeQg7KhSEpYEsNL",
  "key19": "2tWWFMCJwFVUdQPFHV4dYzjqtsx1QoyFts9NWDgeGevj3orrsQxeNYFbEQJ5orFmwAxyrmWxrFJK8zw729q1hf4Y",
  "key20": "5qivxHNjWvPLdBnhtD8yXde9fQzE5MSVu98sEnWFSXusv4kv1eDWS5ctDeJQXtK5rrEJLgJqUshJC1arA5Wn9cmA",
  "key21": "4UxhHk1jpVpSsBFbtKXD3svCLkubkd483MqUF1snjtmHxSsz3sp292NaPPoWVFZBr192PGbpf7VLRuo5DJj7JAjM",
  "key22": "26MBsfN4GoTp3LVZWc37wSNufnBZxV2zCs2K3GN6998bGAgCwsrLKjUJkMnqjB1RfqQ9kDqQ8K3bC7YYjbh3pJwv",
  "key23": "7T91G5Q7kgQS34DoPPFYHMC3iEHn4WwAEKjf9MzgM7xXKKyd9cxvWpcisGzTcJNsoYeCJq2Nx1t4a7tBLxy6mcy",
  "key24": "4escgpLjkjsokwAG7nnUVT7fuC2bosZAfTybvcMGHwCZ6MiB4Pj4nZqrm39eC8JkZm3y5GdFrVBTvh68w2S2zocJ",
  "key25": "3c7eWtnuN7dtSnwGddcFsJwF1a2c8nkiuZ3zXqH9G9cZb8kMgrL6D9CpF5g3nTNuQpBNNeBCCJ9ZGWooeZzetsWk",
  "key26": "58scMp9xYLGNBZKwZH3QNCPTyjwFknsEG23m8xf42ph7vQR85AvRTpQgV5YVrAc6z5FMvkYV5USec8iCpPWyQray"
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
