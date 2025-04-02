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
    "4Z82wNLpS2isPfGfDA29K6aFUbTkKLUr2agGyk7QukcCcoAkUhC2Mm5rBkKXzAPGc4YKQGZfvu8q9fzikt7J6JU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67mXHYJ9v89WEqbPLgg8UYjBmkUEXt3gnWjwdPb52a9TdnRrMMjxBiFGg4iMpCNv9qc2FsASsbNTJiNRR7rQJD87",
  "key1": "4sCozue1Go8pC1iW5V34bwR8N5ANm8uRBQVgyYmeuvvuX6c7CHKH3BXY3DieyC5Z5yY9A1XpDaLcm8HqiQTA9vo3",
  "key2": "3REcdJwojkqwTLhxpjBcZnLSp7UyK8FEKwtRi9SwZSqahyrEQW9vJeHjWmKDnG49T2Qugrq4wqpAQ4ZuoWn6z35p",
  "key3": "pZsvScxBjRNfwM41NFrypm9D5yTJ3L77ZUw8RGjgJ5RpyKN5qfeqNHVT7tuTupLNW3C5DpnCwCBno1EXqLLWz7Z",
  "key4": "2KYLDGEQzz26uKr21Ea1EquQh6E3D1BmVb26eQcUZtcWqMNHD8Mu4cZrUoK4atQ8VMwDF8TxUtMHD3EP91XRys5",
  "key5": "3JeZPEhcRKf7L4yMf8uPFsLb4XdEcpKDifnguW4MTWNz3wEGHKS8Vddkxun6722LAq6bVmvqsA6cDGs5JbNcD87F",
  "key6": "UBVBjxw7CDHEc87u253zaEC9Ree65ZGzArZ3rHFB3iKccNyDWCvEfvw7zDeq1UrWEiiFESBFAYE8WESH5GZZmt7",
  "key7": "dZSaWY4f6gZ5sGrfqb1LVzJHnr5oGkUgcHZwfDRDig6pz6VAkPwXEvenDZMRBz8JZcZwuh1GQjar66Zfd3237eB",
  "key8": "4uUzDBXS8nz1cHpFGn4ocV4RimFG8oqVLFHNTARcxKh3xHT5d4vdaPju1RMUQnzkNxFQKsp1b6t7skxX9pSBoaSR",
  "key9": "5Ch1cCJcmUe3eJojRr2UtHTcS6sM9xjADn76bmMnuG1ENtY5JeUCUxEkHz7S7onAHTTengnRQTHnNfyqhfa8G212",
  "key10": "3suFQNs2r7zA4pPcHn77T3EA6sMuCUPg6tJ5Jwsv7kb3kA4dehU2L7CSKq7zXWBc81w1H8xEF1NPKA7z16EzMZmG",
  "key11": "2sj3VZPWiU66r8LQG9cBKyg5ZqgV4ridgw68fC5UhbGaspQ6pbFJM954mkviePggpMy3U9kswas2GdoNaR5Hm9po",
  "key12": "5c9yDMjmjZMsfBsTqDtEobzb9kHH9mnQkQeteXYrWh7wSd2L8FMmC6oHDkdXgbgAidNopN8xP7xPwXX4tXZ4YY3t",
  "key13": "Rjkoamv9219mM1zZPztFccuKA8EDc1VQDB7S3x9CEBaptUJ8V68jGCYxeAroRXMmcuCyJkdu64h4nhqjzKBft3s",
  "key14": "2E3DjzPaPphwjp6M6rgvtA9WXZ3g2RwZGhvD6MhrHhD6wWoikUdqcenxDBCXSRoqw9dtpfXJdUSBiUjojkqrwpKc",
  "key15": "41uiwoh4s1jMR5fGaZw7r8tJPGh2quJk6g72TzY3fNSq8rpfddmsSLwqihBf1GtBVPPciCZVWAjMSxp2gZ8Fny4f",
  "key16": "2Z1ddok6NKqvRXYMGywRTuspJnfwt38VeRFrLuXGNRoU7yETWH5Jg1Krz5ARye4VWPQuCFJcvKcp4sNh5dmm5Mnn",
  "key17": "126BJTMiK8Ds5eAAg9SwXY8Psf3i8gNvfMRz7uJc3cnhpL9Sgr93sQVBo97iPXPZx9WmVb6rq86jbjxvpuS8Stbx",
  "key18": "5tD6W4HNfaZFiEvVwoL3P8xNaRZFRP2VXfbhu9T9CVFuboUDbK4q2TsXLgfsSJaRgWjoYjEpzQdozNLhDirqGGnw",
  "key19": "2j6eqDyHrR6ea8YkgAtJRUKzcshxNJipb5wE22KUCKsPXC3Lesm7Uk2qqkpm4byuCk3ThKSXc2fcwLGf4WaWx2Bp",
  "key20": "3qVoq1WmaZmXTtytg55vEDtWWuCKhaGN8tVKwHk58htm1hZZLnuEErpjKPQTMjr8Lid8zE638zq5Kb3wc88X3Ynr",
  "key21": "MFkvbuLqSUUDmTyiNMWTTsv2KoS1eJLWviVaNWUXSig2ouhhYHGqNqMWVgEJNDLBhDTR9MjnH8XWqEMW9G1FWAW",
  "key22": "2hsnPDK6mvtZ7h82h61F6DAAcmZsiW6kWQJjPHJK66V1UvZn9vii34TZpAUdVeVNnEmzoLb4vWSiqMLhmwNq31yC",
  "key23": "2h3fvetujAJWcePDYgCmw48663L1ejdWzZxFfQqySX6bMHwxCVtoGH6pxdmEVBFaKMANsweypDyTVNtR8qD93g6u",
  "key24": "24xhYmW67QKrXqqXd2uVchs2Sjha5BVDRJiDgh9cnswgVbhPennuG9H2pPoiQfD96RqGvotsBEY1AgJ9D3zHWt9h",
  "key25": "5uaEEBFrpUr4L4A3rH85JMp7AqPe88cibAXK9VPKxmtqcdjB6qz4MzPdbBKHwTS7vQABQ2G97kD7BiESQz7q5gYe",
  "key26": "24pp4imDk8rYYzYPHyrZDstJfmi3HpZvvUsUiwvuSF9u26zrxWbPVkRQvpg5Skc7iFTJeMe3ZNuoaNFsSZE4ZZfk",
  "key27": "4iHGm9VwGkb82s8fo8AnjR54nkzs3rEFDJwAEoWEz3wYRpd2ix2zYKvbvSA9izAyFi1VTySycCbvWDCMqwMTiasw",
  "key28": "4rU42XGES1v6oScFM3Fpm7Hrt27WfHBtePc7B8a3VU171He24KXjQpcq2vQ8AC5Sem6DRQyJpFAwKMRHv6vAJ2va",
  "key29": "4u7DSx4CHCR3q4xYcdpzrwSSobDDBATTw5ec5qNV4UpN5BkYpDCBZmD4A6EmEmyQvBmVMkNB3cabNfMcjDZugns7",
  "key30": "AUDqAQQKsEBiBzfpTidd5NXeVA5XLApKWMYqmgtAWZfApkSz1yxyBPEJFjdFAAsjrNAPJtJpzxan5xcijsQp3So",
  "key31": "56VZ536wGhy4uCuSc76ftmL9hJJfA5TbHEfNXCoaCpLvArWrjgDpnjMLVsbxHvbSXDJpZk3cZhx2XVNL7EhkyrAi",
  "key32": "2kMSmeBH31qgS8prN5CUEPTq92ewrtP8Yvgye7GX1BAViKbLkj8hQAfjo5JLuDRUU1SCbTc7h7ApQcHCRqKixEUv"
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
