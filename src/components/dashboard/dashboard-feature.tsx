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
    "buxckQBDT5XJ13QaXLv7Qcd2Kh4LPTarxRWHVnvEuNkWu6ee24J1Dg1Porz3mGMm9nxRnuaSEahSz61FekU7pUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KV4zKPfshUyhV7L4EW2rh4pHrP7EfVUkawpMK1UZP7HxFP3vCH5wvhUdWXLmmf36MVkibCJR79Eu6B99HsNGzWU",
  "key1": "3ymeJDRV26uf6fsKB9ke6ZafTDMqk6kXweao7PUEWhdWn77jjvfdEu9GFyJbsmv7GeeMNvPMYML4ibeo9fFrTTEE",
  "key2": "5rbNVxyRhMyrxa163BApiMbVfWtf6fKX1Q9rbBjVoAjcG97mdy3s971DhxfHq25MW1NFXuf5oVxE2J5ZgU24nPUj",
  "key3": "2oqvemZXKJUedepzqoZYmgC4myhRxrULKHDMYLcSH8xFFT27Wxq1E255pqqGsQDn9vQSqKeWLnn96o183raKeA3q",
  "key4": "5BTnErjFh99ojBpgaLG6knA4ZtMjnUQgB1PYhhZWM9tH2PsaJYs4y7rvjHr6QqNuhQaaM7UWtLHiFvFmRADa3cPh",
  "key5": "5eBWBUCUo66jDpug9uDJQX5pbYJrAKtwXBnx7ASxKPRbVqhCaV1sDTUXS9T9VKKGkGrvW6xm5Gu86VDqDiLT2ko6",
  "key6": "5uvW8b2vNvbPkoVbi9ggvY9DLExW5nuH9hSSgiBUS7weH42FPGP5hND5mc48gC34RJjwdsgHrGquMau92qnRwiTE",
  "key7": "5eA4WG6YBbFZPRCeG2YyHpNKNSk8s3aXF895eRJCQyXnQazW3kH3xbBXrujsnKYDKPVDG9Rj8CApZXAzjUkUTq6Y",
  "key8": "38UspRzR1neGvEYPFgctE2Lgtd2o37sNaZYaACeuvnNThg3hpFWSrhsjBXvYNVvfKsC21YZRSj2o1EDSAv3iWJZr",
  "key9": "3UQ2nbqrLdRwnJCf1qSY75e3JUz65F5QhdQWmvK6WXz4Wbiz7uMCzqBAG4bujyWMnHzqZXyPQ7gmGiRKfEYEacoe",
  "key10": "65VeKeBDwRwmvTDbXuKGgbfsR4cxd7Kqb3VJzzVx1BL75WDjCd9DtA9KBb29t2Df11ym4TJdEq7ou2vyH8ZYsJyX",
  "key11": "5GQ1ZGMaW2chP3SMaYADhfQNBYZ8ZJkbHUjWwnQ4hoDWdHpBAiAfipXWYvevTrJtZh1TtZPUuhYZdkFmkSwg62Xb",
  "key12": "4iwZA473nC4QD4XxFdB3sRUCE7Fhg9Xp58YZgaWQHHuojw11yuVMt239VZ3oEDEQUPc2W56Sb18wzySscSPPRZdW",
  "key13": "4db5Qt5epPzDRn6drFJodAQsKTsHrUy1MLpGg9Hu7MgRukYbfdcg1Xab4mhAizzpEmLoMrWwq9fTX1MRCFxiS6ej",
  "key14": "4kyRZzTeJadbt6xD2Vn7MS7XEC4AzdjHmTwhxhTdqKqsAaPf8z85XuWjjw4HRjDDd5sqWT5AGEpvdxqtxwhFN8sh",
  "key15": "DdiqwuFigWzbe3zG5TZdXetNUpGs54vXKu4fQpkapUmr55pHbTqTQRQ7w9xWzv13GfZe8hiHUTgFu4PgLzhVk8D",
  "key16": "2oTGWv5ph8wW99n7uDsp8w9deTGY7ZY8X9Hb3tttaAGGexkYjqa2haUaeTRDJtoFSAyzAuAKoCQBLwFCfZmw9PEw",
  "key17": "2mxJLWrfrpbh9rmp25wnNPotfX9f9pFtnnMKNMFJ9W9ZcPCAe4QynPGnYuJUTP1ZkmF6jU6on8WzuJyuawrr16kd",
  "key18": "TGKyPjE47QLetfLm9zvJwo8z5Mmxsagxr5NXPHjF67f8zNS3FsE6hYPN1uT1u8mj1FYhkbnFv3mLU25KSSHSsBe",
  "key19": "4iqYXqbDw47Q869VHf3ciBLcJBVAZRNpVPYsGvigKUMGSUzvmDj6q2BRTPgc9cEuaYx6DvvteNXTcrQog6z5SHoD",
  "key20": "67RoorM9sSL5KftFkACwCs5E4LRmsY8NgVmnLHZnPi9fwuh8VMq4X48YFzNjUNxgUbRvWjZLVASfCLjp6QH5pRHf",
  "key21": "2ea8vbpWXvAesLYarAEgJpzqrwHuMkbZnkQLwtWvmFC1iw7Rd6XCqLrxc2E8BasX8zcZEj2wLHbT1ccoAyPSxpEB",
  "key22": "245P63E63M8Z2wfRVbe1eBe9SUTJaa6FC4dAgbZW7au2bTzTk3S8gT65HBtBpRBJcPw1gCAEkDVkJS7c8gr5serF",
  "key23": "4gWHRohCSjYXq81UXavDm1PbfDNmaPw9TYys1qK8ANCEyxsMiM5GPVTfh2rkUggW16qrWV2Rgo9DE3rc91V5qDTs",
  "key24": "5nwzQfeoJDUSHwukN1nRJBQn91rjWFGx2f7bv7iUq2u5URkrTjaALzqRvZwbTPxjn6h3LX2x5xqF4PGNob8DJeMB",
  "key25": "2qfkKN16SuXWJF8y7jo5kSSCnFHY98NtfDgNe6gBehRok2gkV5EraVnN49auu4oubQFw6FJ36qdEJCp54YUGxqj7",
  "key26": "S9EgGMb5eH9bcfRwfEgQL4EdKwgy6U1S3GJCYmakrLSQsdbYCnn4vhWDfy4VKY8bNdVWu3DKeXJgwHjtxZsQtku",
  "key27": "2p3PaGwsBnvYUVXyjRUy4SJLUDg45nztp9TqRrm5KwxtNfJwBaDYqrr4obGjNyg5jB4nDZTgccQXzDsWX3xXKMwv",
  "key28": "4qHxRx7visB9tGWaD12R6s8Z2NXyodRde3W5qRyQsLo5jTHVonMhzEKuQeQFEP4ytvtp7PnrTt2gU2nBRemJmZUQ",
  "key29": "42keYbaRUvKUxMKgwpvnvWiwCnzcb7t8ASPw4P1j5jVJAePVRUS9EKrx6NzNWBSybsp9uN5zp2jo5Z5nr6XHYH65"
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
