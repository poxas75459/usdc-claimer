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
    "2P2TVn5fqfMT2R4TPXM5Dnm16iaUJoRxncAfcbUkZyjC2gKtePvXjzXydppuWA7sQc6SnSiLefAxEAukar84HXvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28pZsbdNLamhkbEKSHrvVBfa4QFfk7M6NS829gKyrciGC4bAcwyf4Y7FderyrNXpEeZ6JP3v9BR8B7xdxzDW957a",
  "key1": "2jGtq5MXZ4tRKWLmNmtaZSyxxiicePYK8TkRmzUhozFC9G2LwqKcCvAC7drRMd2cdL46EUj8AFRzJFdCyoS4tXkW",
  "key2": "2ZfBgYz59NjqB3PjCKPki8apRJYNBt3kVWrJehnSsHnRWcXtpcgM4jqhztCY17GYxeiGdSBwtLb3QEAJW6nDo5Pj",
  "key3": "48N8vP4y42mKqNhvz81nsK5Ao5xNCHKkCxVGybeVKpNGQ6gvL8oA4914hLn6nooc5Z3hB9bmPkqyCNC9xoVc3dWR",
  "key4": "4oNPZxU3syaDtf4KnvpAHrpf5keSWhJapuDNGev3hhuCb4NS72URrR3vAvX8Nqu3iZ9VXFnaHPFK7MuNsGeG99b1",
  "key5": "18LdGV2V7isB3WZRYyiy4A8cGbmsouZPQeQCNB4BcPE3hTXZW3XK4LH7xC1BkJpxsfVfYibRCETXQwqNAtcw95F",
  "key6": "J8DiZaJh8CkgoJ9wwm4maVMJYrMN3hqZcLChgnJJMJsa75PqMczHfLNHtmfYKCcCJFqYUkmyJEBp2gGtyupiDHG",
  "key7": "32X1s5Xei5jv9Xw8pdDTgZeDFvTSMCSrY5JmTu33FE9G5HjmYi2ALsv3bqH6bVpZXmMM1Vdpzr9a6nfUjPhAT8PY",
  "key8": "62f9TmkyVG8Q57p4bZ4M3NXaD4rsMgc384Et265yHuEf7aVmMFJQEnat6RdJEbgHvLpR6JojqqxQAh8tQ8puLK8V",
  "key9": "2idMThjAjUHDzknjtVwcXosGViciPAP3GF3EEjYmo7mx9KzK3qUbLrQAWvZ56ZWjoqTGQuhp5Lhj9xPwzaex9ECA",
  "key10": "SuuoimgCBknCZrc1n7gSMCg9FviNdWkdBJQGZnEfhZS1fZ1qzS9vGGzwpzQYsYSrwxuUj7WSfkXbnJL5M59hj28",
  "key11": "3Vg9WcbG3yDBez1afbdtkZnznQRGGyMK7gB3yiea7mAnSb2yPn7fDS29W5Z3xpNgb8zyHVM7iBZpVhbW5FrD8eZm",
  "key12": "5sYZer7rRCAMZE3EPQRnk8XQCcrLXiM6VJMmE7bvEZ7fXauQMWHsgee4vU7SrCvkDiyc9xjnHcpV8Az1UvFRUhUr",
  "key13": "2mmd9rGtVUQvax7ftL2keodfPNMC9qRihyd1LnzjLn1NycsMrJpkFRfa75tKzPJgZm7uVidarxhCmjHkQPz7rPuR",
  "key14": "51eYuUVVnjcDhJFU1g2MY83Vmh5N6aweaLgmEKdLhUNrxR8bhibieGxz8jGPWiv2aFLW5Ryt9DoxNnrPPPWT5qaE",
  "key15": "4icLn7eBvBDYwsNCoaBJWZNj4EhR8nhAVcghqeuGg4ZpF8s6SwhUgE9amcapVisfs1B7zGm4Fes8ywMkbp3UwJaS",
  "key16": "3yywYUFVCHTHtaZUc2QctjKcmgm9b95XUXE5N3kbgc9qLJYVasmECUDW4CfwErqZBzXjMsvwoZKTti2WYGjSCcDf",
  "key17": "3QDZdMcfPsab9kyWuSkd9ARGtqNyNZ6FgEXet8JaHXmvVrctQcvR2pVf4nNsdebkbPPiqyscdff5HFrkn6QSbMX7",
  "key18": "5d85Bhp5XXSAsKuAsSwXHmECvHrPjk1GsLuRVBtmcxs89XBcPAq2p9ZSXXAJv6rCBVrSSQ8RG5EfEdiSx9azzJjn",
  "key19": "58EbCFqN8SE29tV8pbWc2XuAiEQhgjzH9cXyvmG6kNaUVTUtviT9Goyzpkp1232vWgXsbnM9ZLQETaiBVe6Yyd8j",
  "key20": "2XDRoXVW4mQ5qczAXcuKHonFQ252eFmCpGWYWGp8QvfXwgUCi7qrwVb3bWJGN1JkJdFHoUE6FQaBWyG1jZNbKTQS",
  "key21": "3iy54HcAB9Mfu2hZTQdjAg4kKTYmLeGwiVVvHgHwGV2ymFQ4KUqMvyiRRhx6UPycLrmj7apr8JqQL1igoNuCqGfh",
  "key22": "38YKfMjuaaWYAWw7to3bsUmrwoLFju81XJpqxUmecA9agcUdMYXRdtPT9K2ixxomSv4GBCtXQ2dUaPQ3iBCzayZy",
  "key23": "27iwkkeuaCyxBcy3uFt2GMBydVvjfVeAxhB6YSpovniZ8e5EuaVBjNgGWJ7iNzNT6eqV3DTsw3J8hnF1tq8xaHZy",
  "key24": "zXNCDUSDvTstzLPqX6FTEfE4fNsVxreqE9VH6242KcudcpVw87v3nX6hB849yMSTDrMfxVwn7KLbHtztDFjPRdz",
  "key25": "5EgVxahv1mP7b5TTgM7xs5UwemXmE9XvFf8iN4Kt1BJ3Fce96851fkM5xU4Eq3SqBWXzEybG5oKmxB4wsPyCQ9EF",
  "key26": "67eEzs94APbfbEshAXp78bDETx2Pc3a9JJfd56q9Ve2fgvhSZtLtgcXEoYHgt5GJez54YMAw8n2b2htUsgDzWYWu",
  "key27": "xGhT2WgitvcLq31vinDkCjmc6c6UYyLTkuwj76psqJVgnPmhXw1gub3Rj6qbwem2r1hvQuEq2uPE3QM7wao4c2d"
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
