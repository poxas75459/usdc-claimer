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
    "4jxwELQHaRDrPyWyuDdAEgHN3ZiNAiHv1hbCE31YVDMj5RGuKh66wTD8i9UKUSG9vV2M752PQaqt8VWAjjK6AbLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s9tL23LXzh1djHzJbvCfvM95qYSVk9gmywNhCXDY4dJX4gJW8MB1ybyqY3uXTbMKaCRRdjcEiMektBCxMGb4YBa",
  "key1": "4tFYUR2Wmvuf9KLFegM4tchEzmSHg1aGR3oPqweT5LNQqnMNxmxWGpP55BaPbkSp7vEuaM2VpFiL8ApUwZ1zM53C",
  "key2": "3z61DG8dvJvCWKm42BmqDgFPCocHzztkN5b2UJwZEiyj6gNbRDJkjgJCUWGcJ16bsPF4KzvJfNQvEhLQu9DQVFrx",
  "key3": "YHgwVXD2NeqwdHeEoDFM4CX3qtnJjeGSZ9CPD3e4y5ZdsP8gxtkYrdok1Cxdic2219Zb57WctUUJNB5ZLWQij2r",
  "key4": "31ktXKjUsUn4j8c3QocEPDcLL4dvJ3rqCSHycnP2uAKq84g2QVzY89ve4DUF5byfFY6odPN47gUPHJmrgBhkvwro",
  "key5": "4BmLFPaLh71jnpGHbAbnAjtLAKrQcpHJFAwWQpdx8Qemj7oLD3spLZ18JUFXhP7jq5vmp58jwHzcNp2aTUUPQhej",
  "key6": "2CmJkvjpYvzYBMm8HPCUvinZuo9skQGu6FWcKM9uymKQWFbgydnPhev9wjnru9KAHXtvWViUPQS1GLmZF6vjZEv9",
  "key7": "5QqkgMTJ2E6ZY4wMkop25T6uJfVbE9fpLeAQdJBb2eggDTJS6JD8KAmhptexvChuAuERjP7dX2jmuLrKxd3NbnSd",
  "key8": "3VDSTZtva5d6QKoGGfi7dURHxe8azpohLENowoRyNyhk6pyM7fbChoUnpNXQLkMt7pzFwUF24Mx2DmXTS7QF4fgv",
  "key9": "59FR7b7RBv1oMJojN7QFTmYjNUNdagEW5ETjsRE1E33gfRPzS5DMyyCiaUjsp1TNND8nYGKfFMoMq85sTjJXLVYY",
  "key10": "3DcTmXFN9bnAK3ikoo8L7zd6pH1Rf39tHB97t4raDcw5m4XMR4LQn9JjaJ41CPHU1w8jmNCcJBossUcWxj8yxGt9",
  "key11": "5mErMxKYLW878juEDh5pmw2K55t3kCx4AN8vGY2VqXzK2dYjeQ67Dn7dNhaKkQEjdjNqyMzW1F43U9Q3EXAev5DZ",
  "key12": "4B1Loqh5PBjyz8WqT7z1Au2NaV3bVowLkb6eTTM1m3Mwy1M5qoq88oqjBEcwfLayMpB7UZ19UtfFH4bx4JeSP6Xb",
  "key13": "3zn6935mfwqTgczxPu43L1eRUWsCx9YEXteV5BVv2BTo8PZ4agwuDwegFoChA7k7VbWu4Vc1nxYdgn4Bs51fPWBV",
  "key14": "3zi9gwDBCMCYYjzD7HK797VPnWcMNeF2Jw16WrTZQwuRvQcdf7RwNJLRNByeTdHGQzRZk5cVttenhM6uXbntG3Wu",
  "key15": "2xWJBq3tCkM7y9qAM8MKJVzBQkgSj7CpbytwsBLMFrbSuoKhwuPsqyhRnEdZWuGVe873D4WiUnaDqciU5ejuHbXb",
  "key16": "3WPPY5ykEZLxTTE2C9RQnTtXKhG92yju7TtBquFqFzUcg9GEHsKWdzLG2ZkDAd8bXEzJFoVMPVR6AMUZQctJqPcu",
  "key17": "ooX4Dt44h16cGt5nWqbF7LTDw47xELLtXUGQgBYeZjwWVANrJccTCzE1htJXKbgNFN3v4LRRXiEXrJJhYoR8fPd",
  "key18": "2B8oXmxw6DpiziP4FPNyxsJNcJ2rGDN44n6WAA9iywYYU8YtZFb42BzG7qBX8Lnr49v6SsceGWdw4cT3gbjrRmva",
  "key19": "57itJicmRTWirkLeybYN49yvQe37NmKsJ6pwmg3ksV4pJXX1QcvapwtyLY3cRrTPNUpP5mUGV3ZshdVvg7vDTS2h",
  "key20": "5uRRWsk3kF5FesR9q5qUMBD98Htb9RJYbDFd4RHrdgr8AypyvfL1TJn7KvmxAguKB9NpGqYxeP33xgzY6woqWPip",
  "key21": "5NbADEBjmd3KmG6WhTopHBNWervKo81Bfhn8pHLdSC3YY7Ptw2q9ti4NECT1yRjyuvfMd2sBatPfeKyLwRNbMLEx",
  "key22": "EmpxMaaxq6GeQKXGorkWp1htFE8iHDY4JXwqR5DR2bm1YizxgKjaSzxx4FqgowtpHFaQ4q2sJZbog8SoqbvEK4C",
  "key23": "5qh4acaC2Jy6G5rmFXmMEenmJbvePnHtxR7bEAykCitZoN8WEAiDwGhZWGw1WeWino6Lr6fgoECbwpCREQ7xkoU",
  "key24": "F4W42ZSbLnHYEiAxGSDepCGUoFykRcvFsEZfDK7qZbd7wE5c4MKMLHHmPhGe3f6j881QJ2LQTkG3eLnY63KSfwv",
  "key25": "HsK42x7zuowrU86gBdm9KmStUzJVkvf7UQ1EL3gYyAHWuJkijS7sq1PtjmNKRg4bf7KkEGCvp9WYJfhTHjJferW",
  "key26": "3pvXy7p4swHRkf5FQrek1qmHPWe1i4wLXBf337ZTqFEVcpnhmgziuuRzjcqQFQDz7QBm5tHjbH1mQyTfTHBZX1B2",
  "key27": "PcJDze2NWGrHLjc8WzU9WPcSLRMBuGjGmDg2dAUuGNDiYot3kDVzMSsyRSMgRVypR3jwin4hzYHLPnWXBwEpmKa",
  "key28": "5fz3AViidc6rUhBH1PETszRWdZtD9XDGTdZQynamrfuQtwv958163dt5g6RkDTp3NRMKMZ8fVTNYE3YZNSdaH8RD",
  "key29": "2hYnr5myYHEUBUipY3ALG4ivdPvRiNTayVBbkQGyPUCzR2GowPvBTZjgfH6e4UnxDkoQ4pwfe6krEuR8Qzj5PAfR"
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
