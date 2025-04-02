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
    "2Xo1ksZ9iZASTVjwXYmtynvh5eTBXsfkeWd1Rv4ZHrXiTYYxuMP3XjDxdiPrz9Mn2KHLqSAp6k8MambADbeZ2k3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HXCdvohWUjprF28pPbs86yGneR3NA7q5QoJXso4dFUb379dq78bJ9r4yAeTbuTm3DfQxetredtyrWtDAhxV6QKH",
  "key1": "4i7aavmowVXUMMokFcDTN9M4SVcp3ggs4qA6czLte2E2iMHWqCEgygJscAqhzuQkLSBASGZmU8MBXmbD8xs1qagw",
  "key2": "5LWnCV8Wz8Vapo386MXWSV49XVk2aSrukEzkbCG3iP59S8e5WTgVFrM8DHg9kCYsegpntCXESYZkuqfZCE61fDZk",
  "key3": "4RhYQbmv9GY6uwsEm4LxtEBzW7rjwqVdEmYiMqsorFujFFB115PU2PHnDrZsqKe9Nd7day7nrJsgfqWcQBWgMf6P",
  "key4": "3H9cQYhFJY3tvTGmdxAejYLYRSeBtjgZxhKgNc1EdTdqnTRiGAoD7RS2qWFD173RkZ9wHJqZmHZEksR7EkRzQQUF",
  "key5": "24xKctJeH2WBygrKHR3oTx9hnZMkQq6QLZhC5xZHpVtFRzjkqAXFJC3qdWf6D9E6xZUdaJTUrQuzPWQ5AHDmXTF6",
  "key6": "SJP8wXCz715b7KoVSSzd7yXGjmArQiNuDgRfE1B7SwPdiQMnwzLuUYosxcs3yoRkjPAJktPFfHKaPkPCmKAUPda",
  "key7": "Vk2FZAAnEert9qrgNwXTMQiAHHm8bfmSn6gEmwqPgcWEXD2UtYrNmr15TTNtUvQw9SAZ2pV7CnMUwCkSbjwzm32",
  "key8": "QbRmanKh1A1mZwydwfhzmN8GALKezrCas9WWFZ5QKhGAZsqb255KrDRBUJ6uFJHXo57be5B67oDP85FRDHt31GU",
  "key9": "4wcsxfkMNzdoFC3zpMHwC3y615Kx31SMHo78odexmxh57WpS5bCv6f2Sfw1RRE3T33tnMEbLTTVDkZkArquGzCj7",
  "key10": "35yrEDPS9HpQtbQHeAS4vGFWAyNUBMbe7vAzG1q5UAk52hCVZY4puS8ZvdGTajPrCEv9DeQMRpeH1gVqrfPs9HaC",
  "key11": "5wdUyiBtdYfawT9hWCm7sRaaZWa1DdbjmKMNWS69MngsVJfLJFVJsKGUP5JAfT5DBepZB4QGYiomZqRNcpskf8RQ",
  "key12": "g1kQ3kwQAv59PLPjZ83zk1YNPCi4G8dGH59CeNZnLFBXJo4Eh3packaR5KBK5qup9BAquqvu9xnZpeLhXvB8Nac",
  "key13": "2QsnVM4aDvzKyMQwZEU24sUprXDcXH4f5QRN3xwZLpYpa5ZRKtCdbZSuacCQgcGzneqWukTZsLrkgbCsHNQ3kLpX",
  "key14": "3xjqwxRHkUqs88pPhAav73tQwn3x5QLFkbnnqkJjfmq5EA3WGv8RywsckJUB6tnDY5E7MnrS9Wxyk4rXVB3WMcRw",
  "key15": "5VQouaWcdGkshQA2yjPESGJJx3mAv8Cwu89YDFa4ZuKG2LGm94yFeGKEBUmrRuAEiCcMRYop1kfX9qX3SytxTdma",
  "key16": "3dAfuq9vinDq5mkqNZ8b2H6ZPzL5EGuNumHvLKu9s5txDmJLapkghSzTUHt9jjUefjW5aMLAdVr2epD8VQ82U5Hj",
  "key17": "5DdSXfkdVUs47KoJXYEs22CbHSUgWpAw42ZQAbGBWPH1f8t24Eva7m5wXo4qvH3KZguU8QaVeLErc9PWhFxuWg8T",
  "key18": "wTbi9mDw6RF7GtntCLvu53wqni4oprERYgKW8EB8sTU7Lw7CYamNh9qdtYbYruuo8jPGYSe4sUWJ8sGPsfdbnbu",
  "key19": "4GizoVbzrFULxnHgNk8grwqfNkJ7XKe2q63UqPhu3Epays5UECYRoXgd2oPMJ36U4L5X2h14wGN8E4ibGLTbWKn2",
  "key20": "2PwVB7HJSa8SXtQFTDWysgUCeZFKCULjyPHjL2K5PM7c1XWeBYhSyHgvhxC8WY1FAuDXnzErkMKid9WQBsi88p8Q",
  "key21": "5bUvCMbKTEfQgJeR2N4MqfR8QFxE2nYqgXUhyVzKqSpvbKhNffZGUbyNwgJrA4KUTt1dxUEkd4ZqQW1AiM8PEqSk",
  "key22": "56ixWeYyuWkRWJecxrJ1PJRYrqfiFhL2YtLjG6h3H9Nx6gdj7E91QDsmCwR4mGuBGSCpw8E5oqg4A4uQCz3wWKPo",
  "key23": "4yogFQrAUUYCEEwXkiRnKY4D29yB3WbnhJ4S28hvhBRzYQ8t3Z2oQMZEDQdXwqo11t66dunF44qxMos1wj3F1yVu",
  "key24": "3xoEFdPRNXjygpLCTVK6hFLp8oDqswmGTsorH63jFTiGYSwSwwzMn41ftGewT2rQ2THaKGFFY3HPo2cJbWVjxzfJ",
  "key25": "pjGJaBz1wQsZubkw6hAcHsrkQ122N2zyiuMgMRfMdcbdx8zFdWkvVmtMcKhzzEBRm55Gzymv22hG34K4YmHcUhQ",
  "key26": "5aMuvFzw8fXXdBtRBshUDHKTyPgo2pKnz9cfESwaDY5gyRm9Z5Nq3i3QSvdgnPdSjRFD1KsyXtcS91QMryQ2J5n5",
  "key27": "2uANaG3hU7vrUY7mMHi1EZDrQxqxE5QXpSQfCJ1zTnXtCGEq31jq5APfgH5P6enR6J7W39STNREtptwU4okmMKDj",
  "key28": "4aiZGAgVxnRXXiEj5WP2yXFdwBMaeZdToTC1KzvrrqZtgsUQpJfn9f395cNKqiyCJdschwLG75VXdhpFpM6eoDbB"
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
