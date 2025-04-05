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
    "1sZVzwD9XgExe4zhDQJxwhrQ7BaXWRxXNVtuTHKbjNvy2AUX7w9YNmcsdJnNpGDbNCv9j9j4omN6puvd46Jkah4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSQMomAmDAq1JBQ8xNZfWFGxU9xswjmZqpgxhLK5Py7V4fhP3uXK1bJtg9Tc5ns9TnvMr8uHvRgW4ZUHPyCPpJJ",
  "key1": "AF9K12uKZgYN1Gn4RFkLaeyELt4rGX6H2bKp8ek8yQ51H2SrxBsAzxY5CtANRyXBaBVbri18pymhMv2DXW3pdH2",
  "key2": "iCaECj9pV1qHQTdzK8tVFCkJ38UGuvJkWpQTWzkDU7LggTQsbgNzFe9RCA5WsiyHzV7ZXmvLdBRFfBFUvfXnbx1",
  "key3": "4BTviebY8A3a5gzeWio6dsu1F5LFodqC72CQw1QQu4rDnNY83hpYJkavr26LWcdQXtFeaapSSLeoGv4QscwYQqid",
  "key4": "4sRaQeQZYyZxeZy5JGm1d6yhqBeGihYVk3CHcAo8mUhnNpJqDQwdAuNsBNkygNvCY72MxpeSgE6QXdGyvy5su7qm",
  "key5": "5cZ6ourc7B7cPHxbmYFkHeqQmrXGkgqn1SvnpfH216Mhfo94X2AiZQnfh6vr5tjPosqaQULrbWLrsZowjUercn3T",
  "key6": "3aFRuPmt7w3ZHhhWDVjAuwB2ZWYdjyQ4G13QjL9sWtPJRuvYaPmcTh8HWWTc25niTnHg8oruV1i4vhsFgLWBqAHh",
  "key7": "oGxcAmYvRKhGEkzw4thXH8YGDHcNf8aqzP7dK8i8hBgox5g67CScWArHwUuxzCtT5miZnXMqxvWnh8T2ZhsDd2y",
  "key8": "3qHPV4eRj3WCSsDEwvdqy8Ah4rbNpwfoLKzuXzognzRD8gKZdxE4i1fBzVF6uQPmRXevSUADRaV6Z8QMNwsdFDkk",
  "key9": "5CyG4YU9domwqGWphKMBo5gTjDHD7QNwhZeBmUPwfNNEaohjp7coZgDy1Pptot1sNqare8M7eUWDvVkDLGBwJjN7",
  "key10": "5MWgAXny56nVUSyZeG6R8BjjgjkZsZ1hPK1SPy3LTdV74euW5L3V867pcCUKimhnDa5RZQriNPciByVxVvZpnugz",
  "key11": "5gMvjhjUNNAhQFaLGjxi9ZgUbizG6QpF9hD9e8jK86MBgoefWy7bZnwcREjAr9uDMEq1KxQYWerVLKub6q4ae8SZ",
  "key12": "4Sn6wLAqZpv2Nso9FgBbGNo91QZ4tomSpYKh5dCLCzuW2yR4JeqoWTG3X9BLXrYKrGR3RxgCxMHBEyFq5AKpC5T8",
  "key13": "36x85JHd1R4bXSy665zdsT6Bd7kig2mbAqkUPzADSKdg4hx79o3yEGZaEjbxfpfJes8s4mFFHuaCEWdKKP4skvPS",
  "key14": "3PXXHTdexv73yDABs9wwrhpVWJ9ZqVHXinw56uVzpCaHujfEwW2K4Xwj337fCe4Z8KWaJiZYsTuAxatgqxTsN4ik",
  "key15": "nuDtE5sbGqykZWbMrXRoipDLEoeCXRV1pWX8ouhZ8FxP7VF8sGKApagSweTqgse8KuZfbZyBvs7sdUpAhKcokTy",
  "key16": "2om42ceEqeKqUPyAhBAKQzErrA1ggmX8nqLdVCySfhmMX2ahkSy4KChQQ24xeoq1hWqq1F6WGPxS9W1av6AoHCDL",
  "key17": "3sJ8BZWbKv4W1f6ybo6awYdvTjzfp56Z94TkyWShf6yuY4EepgrPJbckk7kKVHcerFYZzzv8vrBr2aFYxCXRGrHJ",
  "key18": "3pxXo8qf5222b8SJYk1MS9Tiz1HXYe7P72tcWsmCv1bL9apBxUyiEbW7LRJdxv5PwiuGDvfV5yy6RBgMdBhJMYz1",
  "key19": "B79do2UgBeTgKoodohvCzQryZBrKrTgkezyd5ci7DikgYR8Z2q87ERyWMzyEiZusMk3VG4Xo7gX26cTemxqbA1M",
  "key20": "28QTeQaf61NdiEv7Fby6hgKqYpwWfgcm4d8KjPj4jqpgmhK3HUXQz9erJUgdDVxK8SJmve2DW9erGd3FzissfR3Z",
  "key21": "2JAYYLPr1Yr8SY1zRYDg633TEzwnqhwjjPvGKX6YgGsDT4HCvGAJaexWsqEZJJ5qJjtJAiWGCqKp1irqt2SqqzCF",
  "key22": "4TWbDafNB81SpRDKoWbX1dPZx6vcLM2Qdn6qiXwqcHWEhM7oVRXy3KfuzorSG2VkB5Jmkh8KyCW2dnJyV7C4bY1s",
  "key23": "2xu9vFz6hLrnQcU2NRW6wq9T6PanhUREwmn2Mg3bqtquHew8oKztvADhW9K31NxpMmrutk7Arbpr65N7ES8YdeZ",
  "key24": "2igP4B5mzEvLuwdGXzoRUJrGWRXovygw2ntA2t6PQnBMtq2CYS9JuajPeG516vm9i5rB3PnkAuQULs4EVjhMawTn",
  "key25": "cKFmyPJRKwiJemJutw7G7r8wTi43JNLWKrbpEJsr714fLiSPm6npNEVGXL98cGNYgABswUf4Aqzwd5YhMySMDSi",
  "key26": "tPFj5xryHbYRFqcYQfF8LT3nKYArtNsb1AD9epjGY9qcoaDLdRNpdt8xgTypWvnHk1bVokjjPmo5bhqZJLnu78i",
  "key27": "5kv5792VvZLqGN212PgnkqtwvCLFCgf1fU24EuLiQLhC53QRXynXHC6wADWjnv7oVkvaKsi81vF6A2gtYZ7XJhj8",
  "key28": "29w2vyjyvdBjPwFFBmzvYgXBDRpJAZV9nTAUwE9N5Yav14veBKPa9GCxqkyuiuD32obkTazBEEAzxhU2ivdDDbv8",
  "key29": "5JWqopkgvCgy9CT6uS1AbJTKrUtJGTuLxjcjihAbjJkPzPFai8GqGoPFmdz6cLPV6Vz7MevhuWuTzk1aZpGqT4cd",
  "key30": "WENKzHrfUgrkpQjSL8Zv9cLS5qu3BagPppW3KDseeCvf6AbH6MejLynGyMPSX1ryDZtcqURxqc36nrxmBGpN53i",
  "key31": "3HuQcRbopBRkMAaoh6a2fMMiYt8bRn4GBMwSWnUyCCZ2ZtuAx5eUAvvkoH4WoMfHQMMf5UMBEgvX6Zh2Vei8abmq",
  "key32": "5Mu3gGjqNL4ZMGMYAopS6DsWwLwjjhdeE9haMPbEcQ3fZNtH71ZHVdN9EdR8zAaio2s5T1TeuPKbEyMHYvX32Epp",
  "key33": "3zJ8mwm3Evpbb54ekQgC2LbVwBoeoEQraUjbcEkAQgSAq6KZQ31mhEwP3eLGp3XrLUFoNMybK9xhgo6w2ZDSi1KV",
  "key34": "3xhqXKTU8sebeyGAxCR9SDtE5mUzT5AcQVaSMHupdsEWyU8s2gBjEWR98eEiTMak1qEexx5EowKpPsaQNfwKMBfo",
  "key35": "3JMSze93tKgBWEJ2ySuFv9eDcvvAdZJWY8waNdDAfXf4sVPj6mdyeF2PZtLyxWKTjzSzxj6PFZsbEepaZeDRcd1V",
  "key36": "5RFJxuvqrzeGLTCFdmSbhNMBi5bWaeP66ofnaE7zmyxVN77kyRSA4JviGju4DzrhHi6kHW1WAGxaCRNjGPn9ekqE",
  "key37": "L1YNJ9GFXP4DHfakMVbe47keTVsG7iheRgRjYBaYw9yd6Ty9hX75WkMqUTAx2X7QHx5o1XQmXcjYpurXG16f8j7",
  "key38": "1714MdqLcLvkYDuavPgsJ76kwCCz17Ko6wpDMGEGcT7qacfrdsLCC7rzwYBB57yoqstRL1eD2cihweRxh4x4oU2",
  "key39": "5cmRB36bJTrJTq7g1y5hBdLn93HAwaCV2DZKhesAtQ5b82ftKuQy1QRxutMEYBuzENRghicXzG9kJxyR4kYrRrqh",
  "key40": "3rd1zCRJM14EWUg1mzTttBQAK7RzHThyufz2z7vQYUE6DFm4xrzm2EQ4UMx9rDdRrKYyXZ8jCUsqw7sBXL4Y86HJ",
  "key41": "5uh5nwUtFVA9rMDevzpweoaLkPmchV3PF1qKrgbrq8T7mbHZPbSVN1XYMsjAeRo7raQjD48gKUDxFjEemMnij16b"
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
