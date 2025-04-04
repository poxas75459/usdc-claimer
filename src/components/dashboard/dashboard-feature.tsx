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
    "5am6iB8Xz6DR9PeUdtCo4a26rbCKJe1HDMzXEZXYcgUWLE1TL7LVT81f9AUW2PDxADzKp8ddkYreBUbPDaQ9THwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttAZ85Rvf1SxCtUCFxQQSmeAAjgVgmF6JYkQx5mYR6HuTmQzYJ3beFf4yTmCkcHb9VqhDtn7Yp1joVoVmUiy7BY",
  "key1": "5XRRRiJxQfTsfJ28cYs8sQPCDkdbZSeuBRwpPHhNTKjUiyLwPePfaYC3Mic5fWUkYPy4MAwwmtQoM8HeYcJoPyeK",
  "key2": "2hPV8wASqRPBCeUU3UJ6ivoihoLpbS91aXoocL6XkZGriPFd7kpJ353VvLx8Pfvjm8ujTGjq8su5jXfNb6yxd6sw",
  "key3": "kK9Yrycdihg1PCsHzGwR2SgM13SPXxkL7n8Kg2B8UoKJi6wXuwzAXZ2dnNp5cyrcPktGALV19PY8Bj8oZcz1mxw",
  "key4": "2PG5qJ886Aoq5CHgMcthUy9VcTLmQ5YrmEaToPoZEKhXEgi8rbH522ffYs7dNNWrqPNcEw3djXRYwNymDZfiYwqg",
  "key5": "9RiYYgjKNbUykgoNNiFsCa9J1zNtRGkZ5ackdWcTdFbszvrQmEQu3C4VFm6uFyRxPKzudH7wKuxH7WVYRjfifoY",
  "key6": "qJ1BEjDaMaZ128NzMZ1BNcSSWZ2kEgYLZSZcpMAVFTBWtAYmm2nVkSbT35PDDSNXGSpiDHi6VaG9NDQZ8DarUTu",
  "key7": "BFc5CajLiJusmdF8W5UJcKh9n5urtofKQpFdFJ9Rp1Xxse7WZXy22whDPoVc3a84NhxwcQQq4NwsAgpASBnRE2d",
  "key8": "52uTTgr13QXqqASuy9BP4zJ77mPrMfftdMS8jMmFY7VevXVxZNAJJGaWKJcajEa1wBFKat2Ct93yXxDNURLAHEyY",
  "key9": "4amrkzG6D6kqW9ZQRA9SyncZLYYmucbrbYEVHYUfFq3jbhSvrPwmkSVeimyEwvV7H49FQSsXGvVTAbaKjMtaTDK1",
  "key10": "42L1J5TZpfZJquG3EUhLnRtVAD7YAZnWGqgPCYFi9kMBp5exLe161Wwbu5T6Rowu6y7XTvugDMvbaDVmHF6U1Zep",
  "key11": "3jdfmdu7pujgFFZByXF4aqb9tyKjysCjNdPBFiE5H4R94hg1DQDfHFWRxvpjuTxcqnznhAAgj4P5uXjSQCwnx5bo",
  "key12": "4VCQ8f4Ro8VQqec5TqgzheF5mX71mmWqGdsQRxabmfmjYgb1aZ1jA1cCXFpZENMKMGiL4A9knrhpy27SpdrN9cKZ",
  "key13": "2AQrZDfZ8Z6k6PnN6DvPY5YULsu8eKcTqg6BJUDUtBDbUQ6hz1tnRrw6Hksk6xbFE3SibSNXaR3Ss1Bym3TVjbUF",
  "key14": "3M36eyBD68T4vtuDM3Xg3N65qtF1N91YqQdUp9FbeUG2mNnxoB1djN3oY3mnMz4J8pSEhsYnyPiTce2epXYLdXZt",
  "key15": "2tTHQpf3WgaRo3AGCncRQrPGu3W66wjaqeG7kcurQizvdStAHPFgJ1YABnjukFht9JTX7vBDXHHNAWZrdMFaeEdu",
  "key16": "2ShXuAig7Pp7gAkFMov8KF45nA6cvpfJEUQMkrdEkTo4pNQmyJ1TBPSAgsLGLKHjSr6CVz4DtSjmzktznmsVrXLc",
  "key17": "3iPWsuJ3Jqoh5CbZUXCmmo8XGyx3zArmiWkuptguUMBKq3mPjZsGhyzGmPGdTzv7XketVLGMQpuQAWPNjGeDUAie",
  "key18": "2e24cxYvpHmwN8YYxN1zpG3wfaeBTAgezksQqvuTY41nFxPfejPVSek3emeGQhjaNmojAx8AWi4pdPundr5L39fU",
  "key19": "3geo1iepjdugnNWaWjSsqUqdC8agezi2qC1yRugFZ6CQ5MRBwpm65A8mNCtmL5xjRSCjrc7CeC52NrnPf1Gg81f6",
  "key20": "tKKtBR1LP7TeD3zy9YfjkrWCHAFq6K3X7G2QmuJEUcTpXtVaaWijyFRGQGZVCrL2J1XQz2pEWngqfw9DQ1tJFhz",
  "key21": "2bWUSXF1eERrsKzUswWVJeccvbouiosE1CJpgtuVtVsJKxDCzU7LHui4r3vf8ix8k5wCULZirBEqonVjRXvT3YrT",
  "key22": "3NgjkVsnoKgcbPe6XrTfdAyjNb2MRnLwpuUDB7Sm9hRBY1gsDfQfDF8ELBt6h89vPwpothAsMceEAtNEHJi47hTt",
  "key23": "5K2defAzmgioE7DbpJyAuD4QzyQi6bXz8gyXiZoSCFJCiKeRi9VcQg8uVnVpdG61PFbLvxNgf8icng1HNMGB11rX",
  "key24": "4TdkQHHgRmyMxpY7HgTB5S9xQGJBPc7k1CBy5KQHzx6W8Z2z8NTQpNFjPzpnfXbmAieCykGybbT6wrTvKHWddXmn",
  "key25": "5Y4kFgEa1PZLyqS8tps4A3NaQSrjJXxQi7FypxcH6Ajt9cYSWXx3oKpiEkDwDyZZNnQ8LNqLqCCV7j2XhaWNgTfq",
  "key26": "5pD8oM2dxBAhtaQ2vPCH9NwXJayT7MFG1Uy87j22FQu1pjkL8AEymfv1aRefhyCSmghJTfzr9P6ubpNAgK2Mru7f"
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
