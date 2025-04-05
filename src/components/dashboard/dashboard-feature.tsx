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
    "58T4HszP8SCoTzp3QXQhQ3YgUTqEnR3LjBrT7SYiz2sfbLoV5j756A5fX6GNTvzw1aYgoTXfqBY6EizB9qFGURwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33KWZRkh9717JYkQB9uxAyk32ZbE3uEFnJ2Tr2mRzijtusA46FQa39FFKUqBDXqjVjmWGA1Zw6ACoCpL8h9DZGHD",
  "key1": "5oBXXuDkeY6iVUFWJZUuC3THNh3s3NtcvaGHvwMiY74HUpFhSfh2MQKG4wNFXWPGGGCmuNeUJtW3FDLXvGdufJ47",
  "key2": "5JZwxYnBLY8HciNqNk81xswsqrWwGyb6zz2gA3rRuwkD1HdeSoKP43FfCTJzEvisgumcoRQEFC4PAweE6S9yMWik",
  "key3": "4xzpcMYY7qZ8ciwYisdo6A6A6vYQMUDh8dJzSCSzKwuew5vzULfqkFbHsGr82bEpV5SEadDK82bgQjpUwgAN2qX6",
  "key4": "4Bai1sSNFqgp9LXNMQPjDZUK3LXs29VtqzSkVttAaDyPvCyPgAhuMrRh8cctDF85qtejXDfFBNQXuoZHY5dGGYVJ",
  "key5": "2taEmsJVuV2xrXUz3FfXb6VdcDJPp1Q3thLS2JLuvyn4oA8irBEBa1RSHNFUNYLbrUoYw2MnCB7Pxdnm6as27J3H",
  "key6": "4HFtCFJV6QKHmenzpuYWYFPNvQfAFod6VAvFTA7Kk6buCZ6qJJ4fHTzs8Yygu2mx8fHEMwqAkha52p7r93qoeH3g",
  "key7": "2NbXdJZ8XG6q6568NCzSEj59GgsW8uQvuG1stetU59jQguBU81JKexWNsrGykF8cEEgwaXXQkC319YzRGYHdnjhF",
  "key8": "3cPykC9C1FYyevEB26pxjTUPgF7hsvgGoJQD1HH6UEwVcEsM9RfTW585nsUTuneWaASyJD31fc2E7MRVmA4HdSLk",
  "key9": "3RZcsrPQXwVyYkFaM4hMRp6w2TGxPwjEAZs7WL2V3v14SjdeG8yNSxWdsMPpmn9YvkgUyRDTtCYHDJ5Nv4EsMrH4",
  "key10": "5SAQJEJn2UjLXJJ4Bcq18Rkxk9HcTaTAjcjC3BujfgL6UQ8FFUGcqAKsiP52VJ8xyw2RTF1CT4FwFHf5q9crtwcP",
  "key11": "2h3WtH5jmRASkoXNji3rvNdypBPVUet94N4r9mwkkxJuCJnFHV3i2XrLhvJVXPdCPDzruQkdWWQxJWXQsT9k8RLv",
  "key12": "3uUqAJLuyQuj2Xeg7GT3W9n4CH3wNYM4MefRskC5Jfwg7HPziVkbB2f5VjcDg6BSJJZL6A5VHdPyGnANNjRwS6u5",
  "key13": "3JqzFiRAHKdNhvQFgKGUPVyTx9tshdtz1ofsb31nmp6XS87Gd51vHHWQYNihuKUUowCJPdetVP8uSAYXKWWFmgC3",
  "key14": "3g9vVNT1ihYP4kfhZGsYKiv5zs3cqcPw5W6XnZqQEuLHFN9Fzm1JkorurriSEM3P6SdqJGFJL2JvK3qLqKhFHorb",
  "key15": "3XZSn2NeqCDdFbREYiUF4aueAUyjgDsYS2XYnhKpFMNUYDN4rzUdb8xabxP26TF96iFXUf2zrQKogNaru6ew9dD3",
  "key16": "4Vm8VMZoc1KonRbpmYy7ctsQA5Zp67ShLbj6UVSzwu931fgXpAogsp6QnwHcuofvPCMKS2CCf7kihhQwYRo7DMMF",
  "key17": "49rvMfKAsbpUdG512iXUGJTecVkAr6zRfAWX1t432rMBsCtPiVRQiU4KLtJ71YfzBvfHAJMuJy7Kw5VLMHK3jWYp",
  "key18": "5QgGe7xsZSh9E59qZx2cHWK11LWVxMYBNNtkYDsaks8yWLizLa15zZkrpmLpGcbrraXy5CB2evAmMFrbYstXiZZe",
  "key19": "3zpnVc99GBodr1yfBmBoZhLcDgJQx46DUFhSJZrfjFhPQCGodz8GHFZB86mKqnNumvWEa5doWYAfwRLqM1BTCvoV",
  "key20": "kNK7zZvsWFHBSRYFXVczry3g5CdX1WRKGvy56wnaVPuXMRT7USRENtGiUB8UuFZHAoBQpEroBRosKVAXs1anD6J",
  "key21": "5Ww2avBrXekDpVqVhWtFLzCoKLnTPKpDaBsZNXiBbTcn1hn1WASFgHZ8tT2R2hKZGMPuxGjQwLG9MVBVFCTAmugo",
  "key22": "3WhH3YwEKJDxjU6otShuNwWzmgALjFvR7q46pFHymJq3DQ1dvEfSx94VbTyum4Gu6aXBajsj2uQfrVB7ETqkmsf6",
  "key23": "4jMQpdGQKs7TZfsq42wX5C2AyYBbH7xgN7Zqa5m2eFyhQ6WKzB8rBf9LMbFGiohobU6MdvFEtNvevu3QcZfKY9e1",
  "key24": "MTT53UmxEwLmKfrTixQH6YFNid2pGQK9x2sC17RDWubuwiE4twbS8bHpwuwLKnWTgowsXi1VKS1kuaKopzjWnzL",
  "key25": "5MMAZcMNKJNmr6wAZKpH6MhRvE7u7EbP3Cqt8zwAjUgDiPoa37kCM1We5NVtX8pSP1VaWFvsMdXfJgXB2Ck4RUT4",
  "key26": "WSSoCezqmBhBNLhLS3hUUSgWCUstx72iBcbT8ueAP1QUX4J4uYbd1gBXKPXWuyj4oxGzreSouNbQnQz9gMQM5A3",
  "key27": "33rcSojArzhbhi6MwDgcQqVrAmHsRQ54sHZvrPUiNKwXP7mcN46tqYr4Q9aQeZUeoQPYkeUEHiZNYp2pJh4noc44",
  "key28": "yd79s8xAnzXiMf8UnGsw4JvKp6Z9Mz9SLs1ydzZ1cNBht6oMJfi3X8RSAkeLuzeJfPjMFaM37LR9CUFRbdp1hwV",
  "key29": "4MBM3o122bMAfU5qQpepeDEgKVY6SbWBzvAsve3g5WqEMnmiZUpiHyVGao9pVLxwpm8hqmxMNZom5AWh4CrG4xmB",
  "key30": "2WMoPpn9ZVLeNbGtPXutDmqNb8TMNAe5DPtwRjPHMu7zYvW6vjNrMF38VETvRZFKw7ocBi4j6FkgWu4T1r8MX7pf",
  "key31": "4xc3iArGsU5fvCUsbvvanzzyyt5TQB1hJaCo8MpzY6Vb9wjSGmWxt3BioAn5q6uBwEMBhDo9fe33RQEn63ZwCpCo",
  "key32": "2KtAb7L8K8YvS55qaddc1V1uDJoimsoyXF2FrFT1qFhz5TbTswgk2aRE5faLFeZik6UNJ7hbmu1GFB9WLynnVgFa",
  "key33": "4y2tFdydme2cUSGmWtkxu1X3xpbYUXVt7WX21cn9j33KtFwuD5KcWWubXXVS7h3J7ED8ubqj5VJ4JjcJJqtgTyse",
  "key34": "3gK2knoa8xdSsmT8PGTi4UE1EUM36K1G4HW65r6HZYEJEDJHd5gxdnyMrSvdHP6oq4syQYhzYMUi7o6xpg3WBRcg",
  "key35": "5m6SZRLJV694gy4Cpxzpr3yAmUVzU4sgyzpSm5CS1LaAc56c82agAdT3Jhwiuyo6rYWngDPCVuGNxhrbStaSSpnF",
  "key36": "xvcGASZHVr5MvYsDYnLxkEsQab7tUL5nc9eSxZseP4vmBc1f2qDNqAqxYhe1CFHt9jxVbXwEsPkerNBH1NvA7Vk",
  "key37": "2Q2dCwjjitxH1QFjg3T2sx7kLL6orZG82rCfgL1eLRrWbxLoJsqaVYHHpYkB1S9iHkqHcmAY7cDYFDKGmJzwGS1y",
  "key38": "W3r8eCJUwpjSvdX9H7mhZdkP4NYzH9Wf1nq7Cg6Uxyzw8nGvyc6MBYj7sAh3suMkdAfPVe9KzAhvkxV5UCmPjB5",
  "key39": "5oe4vto7jnzMHSpSLQrbguLVVKMj8PiTfWimfyyd56FjkeggTYnE3TfFSTewz78AqgvFjkmq4PUWs982fkqHKzcZ"
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
