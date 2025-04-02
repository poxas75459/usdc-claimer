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
    "4EPA2YCrmqSVAfk8t9LgNov2Wi6n2K6Uqi9XU5jxuJQpChEkCRXbGEMHWSzgvaGVLB2gmzuwzNLuTc46umk8c37Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65vf6NX5zBk9icnME7Kqn2ow5KSEhWx6BuAPTMiEfJzQBS4mc1hPjtnnxd91Jy5dy4TykqMtHKui7KWVxBJhMMvZ",
  "key1": "5FKbtY2ZkpRcr8pdLK6JRTxWyu7nYVeNd9BdrTdCqtHv15dHi324SKKkKgP8c4igWJAxvpC77MmxAXv6uz4dgMDr",
  "key2": "2U6zCBYUxPZY31MJ4i6URjS39pgoY8Jec1tR59s3S2Cq82J5XpHtMMphLP9nUuBULzbtztvjaKKYcDSqcEkKxi5o",
  "key3": "64nUfPRdHhscCMEsoqTGFcXtXadLuKgvWfU4QkcDj4JLvzxHDFgEh3eL56SKmPc6DKtuPSbqcqnbfw3jB7DKANmM",
  "key4": "3u1WtMpjkYaGxM1WTJd74wtNfxjFgYvH6hccAELbNw53JKtpJg65y7rjZXSfQyGNi7CqiRYFCJaD7dzbq9jNyHbC",
  "key5": "BHVehiA6WzndRgmVviwg8qagikrGeCyKkVmB4JCqEQyJZHNsXr9pDvR8dHwc9TN1CY8ha7uxnUanoHjrttSHCvR",
  "key6": "3NiB9ZU9dXkmwFGEQ3MBY2Vn6WUHeKPWfHEugKjTYLmemDk14rNYLGU4ZxVxtJrwZnSQJcpbt3BWaf9GymmhCWcC",
  "key7": "3rPwXmSzLZ5knowhD7UHuP2ms8sKEvcrEkyPoLzuGpqWHLt6xPqJ8xS8zVFyLK1RXEnWLpXqHW6xF7SY1mS2hmVE",
  "key8": "54nqUDhxLZQsSwcdGP5GhkEY1SmcGy6KEYCkk5ToZz85WatgbWxyqJRXwBnSyDGRQryGUMzB2X8t9RcZPXdiqPg1",
  "key9": "2HbhZ7eprp4iaqN1hhYM3GEGc82jsAfs6Z5Tpsp6GDw12Mjom4TFdVDWMUXKugBpcqbGB48icbM73zsLTLSZPXPc",
  "key10": "3HeNT13ZU7xuM8rAHQzmnH4yTpRZjAhwvSMvX5P3biWeYfFpweRQT6G8ss5ttQKkFvHMgXn6LvC4YLPPrzEub1g6",
  "key11": "2Tgycu7fhXScPMG76eiiU6dgrnc8iU5XU2Rjf39QC3xeXvd2piYzXCH6NeWd66zLL9SHf8C3xfZWxeVpTsF3ePYV",
  "key12": "55AcaoBRUD4wpbxjupRK4nEWXB6tqwqbWh9hSYm8kKJfCkdsKBSts7dRLCPoyuCULwyfbWGbG65dmjoQzXNNqLJ2",
  "key13": "4PzJPRtu2Nt5Zz3d2T5wJSsUrfmFM1dFQ3v5mGv5TWYrUgQxwKgSnNAxnf25DMJRKSBNAuv2F5frZ2WFBhEbYdgA",
  "key14": "3PnsxwAgX71m5tgHp6LFEVQnpwKxsy6CMVBbFxmSNwankV3zApN5eUkLauB5jRtmZPAjZRjXQBbDMXGfK6jiozqw",
  "key15": "46cXoFL3FaWCLwNfaw5cY6Vth3J2ebfTva3V6eSj8yX5AiDssRW7RrvNLEn448zbouxQpAEUrQ63eXgPhRAzvxEa",
  "key16": "5KgGbFvbNfHyifpXjyQSxB5xuxuKsvLTLwKzPJDT3MQbEM3zcaqi1L71jEr6Gprvq7hoJowtognR8mMJ3CCy8KC5",
  "key17": "2F4a6ie1f9UdJMSChzH7de4m2gm5tCuGrST3jeNELsGs82mFYVmz1rBNVW5rsTUa32Ep8dhU7JYcctKS6kk15EjB",
  "key18": "3EwfN89GG7fVt1941ajrfkZgKBueZYPGM8bozjsoua9R2BM2sR36caVyj5VvP2JmnRwVBawkbrxMCDpiCm3vB9jy",
  "key19": "qSpbc6yi8cdn6YxSAneNquMsfEmCxfMNq8WvAv8gwuXdonfdDDyh6m9QT2rKZjTMJadXeQ8LXFMU1soaUaQSWsQ",
  "key20": "ZT2FByuEBxoBbgYgW9GgpLchqNjoyZx1icY7LRmZ8jPGSMY1WvghDpc6P2UvdBKqUUn5C54qWMTqhvxSXMLGXgs",
  "key21": "5Es5wnc4MK3a1kecL17YAf7BYinzciS4z4fwmkjAGaFB7vV7doZMiG9Y4LimNbdtoi5qHP29SFvXhUazXSxudzv4",
  "key22": "4ttYgm5fLs4Vphv5uMYbr3vyYkrES5w3tXXsLrcEYJa7m11RRabpnhE2oGCFMBCRzbsNtba7D52rwWYREDt1r4hz",
  "key23": "4x5yNQ1WtTegk1JdEd2R8w2KzQeVLJn3tLYXgiVTwWCCdEhSyPKNd3kcEYDw78sTZ7GQuTB3xzfZFcJQ2WVTWw36",
  "key24": "4i47cUviZuQeLNtEA6fyXy1Y5mfg51EZv2BAMabeVLMyU9wmH6HyX4MNUCuY5ww1VDrq2jSAsDi32CweNJ3k7CqK",
  "key25": "42WMQ2ptF5Bc2C288RLFEYpFGTFrfKkVaST7Ajx3RDri5Z5pYDay1etazWJQtovz3fdv6RoZR5nJ6ByChRbWmdZm",
  "key26": "hNYpszCgoASGUqjRxL4BpuxXUM5SFtoyd5Qv5aVq9oo2vzTLQw9AvT2fVWY6oUkLJBW8ggfNktRuPG6GsPEtYJZ",
  "key27": "5yoZUNnCx3BcqR2uUE3JMRNM8SBWXkSE4thbVHS2auDKgCdmWfKWXMucZQcBxST8fCqCohrQur2xcmm8vJtJiqgo",
  "key28": "3pWbfHy9MHxtrnRSMw8hFzuP72x4ijgfCwTp8zQno5stW3CB3PBiQ5xaV6XJ7vjm174H4AXb5iDLnkJXRTn6svEe",
  "key29": "3w2tw5yZF5MYKuPtMeNRzD5BMFZNYNJeMu7tkKyWCNEywWkz5zem8uJLUJabNrUeiNxPECPpAr4n9c1Px9U5ukq3",
  "key30": "4QLzimhFdiA4VcxEV3X8NYQCaXdLptCyk93619DS7H2tAAe6jGgPkwDJPKaBCCZNp9b9bfExNYpDFyxpFGYZ2zvZ"
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
