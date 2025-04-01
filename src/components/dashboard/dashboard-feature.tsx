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
    "2gSrQ8DBw3t8SDzhi9TogwVkJj4npap2byNW1dsrc8ucaY7fHhHii1SyiuHEi2uWJTeKvoHCrFeRkEjo9fhFQasZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2npVDYJmTZNaf7c1Hg38kaNDhr3broNmup1e9mBwWif8AYMocXGYSp9fpDhizVAkRzaphziebHWXv6sPT3hWu12W",
  "key1": "DK4PqphPamT1MNmoRLoEcucZB3Qz3jquEp9rgz6x3dcfBzSRn3bUXcxvekyP7yXRQzEgMDMpPkZNxT6tFAmNaKj",
  "key2": "2Ltj7pJFzVFFrGxdeTXYD9PtiVUFKvArEzAa27nvm9z6fnLCeZBW4LMVZaiM9uURjJxqQV2dot2wunRD8H9BqrWB",
  "key3": "55TxXsGYQCsiiqARSr4nmQZv8nmjToJzHYT49FRQGkbynEM3Ac5E7aGWhVACGSokYxnE8AZsYMdyvyo3C865ocNy",
  "key4": "5cQAFWv93dCKf4awUNsptQYw4CsUZfYGkaT4Gi57tUHZF7g9ZXKVUuCYYgV6Ce412CCBNSNSBJXYBdRKArbweCx5",
  "key5": "27AA1ZyMy5eH1oREsdQC8rVpm4AVPs7DcUMRR4iUatEtrgdWmMg2dJd1VV5hbpw7ER44JfTfpS4Ccke9eaSpoH8P",
  "key6": "3FP77heHBk72XVcWmNzysLVPtw8XYnL62HjFT7f9qBgCr3ks9391USQrAxk8FnnZyY6bNzLABcQFmJsrGsgv9jBu",
  "key7": "12ACD9uVrePNj7int1ft2HjF1urqs7uogDxuMoAUwKezmXhnMV3WjyvV1uhVJpYAK6j52QCc3upstYZuVR91v7Sj",
  "key8": "25i8djkP8AccCPcUcqHNbFmqiiJByRPA6s6FLTwgrAhCsy8uiAcqVWEyrCiPJ5rVj5HVVKVjXE5xhvZS2FHf3CaF",
  "key9": "4ryDoocgnUykDrygsmYY9vMfc6UaTKazkKc8XawFA52eUanmrtCN21EJGuQiA4caqxLboDJ24Jrf3qJQmKrdKkUY",
  "key10": "3UMGrR6uShZbhmy4PxiFDVqY3W5L1v5kUJzhWp8c4cJfo9tTmrnr8y8Vd9iPx71b6eHeewo6mLupRGcGYhbRS845",
  "key11": "4zZBBX8wcwywfHnCE2sBk3cY2vEsF3v4sAAZTfcgWMeLGpWZjBfCwpuGqZK8rTsGfR1W78nH7MwbykM5WfaMqbuD",
  "key12": "2b8mKPbusthkHgmtyLWFNMgVQfjkCpJg74FFx2F2MDtPyb23KqYqiBX16Saumg6rieBdsiaL5x4d2qF5MVqj989F",
  "key13": "62vuaKcSpxGgkJRuW3YJw2ms5LEWYcMyHBCjwcDyKoK5iE5m12pLQigipUCyXR1smNS36tfkBkKXn6187QZD1XuA",
  "key14": "58fXpa1AxgrwJjV3HFG9VY3s4FsLrmR3nj6qojS78MfJA2Vi3VyNJdeWmgWKPuyAttTndP3as6pjJpv5Pyu9fxHo",
  "key15": "4RiFkDJKzNBPERBNMByuFNoDW3456zBtxHVeHpNvGSZjnpU6PXPmAKc7Gn3kRs8jfvkeT4fdM41aymRPyKAwYP1X",
  "key16": "4adSqxiHaF9HqodnXwaRdCE9cWPJuWzH927Dr8rC1VAphqUWX4FWprL3wEs6BWFbMNctHUzQE8iJqQ6DRaUAXRRQ",
  "key17": "3KGsRy9byd1thtLBotztG7PFsehkhSuH7HiCZ9aCeG8rERFEQBjMDFKcbwQ5fqXuqGSru7W9qvYvk3VqWE4o2Lpu",
  "key18": "415Aj9abQn5kLZz4uavZBAE3ZKTMZNV3MLP4JGjiDmLN9fQVN9tzEKLekHGKCShK5JXGXDdVrwP9cTh5NtJR2Fio",
  "key19": "tzRMkCxbn48S14WybjWc2qZ9GbcG281Abk2xfWCWFE8xqfgofAGA8bR9Gh55HRf2G7vnGb8CbCdqRPsQpECrcrc",
  "key20": "3giUaRWytrz4dBj52Moz46yvXsuYzWu3pddQvqVSRmT3coM5wyYbQe5giHTCUasr6f3ncrV1j5QtEsH1mhMsKE9E",
  "key21": "4pkwX9W8VnRtJz3m3zGoYuqAFcWsba12Xa5wA5QDQksJpmEZ3nbL7GCyG3VmHPv9UhQNuV59qNg4o9NhpxX6eyFD",
  "key22": "5hsw9i4bNRN8Kp4MbAgrZFAMiMNxdvXuuqjqHPGKyLwmiBctTGXjkgKMKL4NLohnrqDtRaN5BtjsuXE74J7dbhRm",
  "key23": "58RvKULVARxbEBc1Rm3h1DmVg56oMzM4aH5FRaWtmX3zmvjrubAnYPVxzZEVxCKXqSguGhBKnjzxSEePVqZLHdRw",
  "key24": "2qNpJ1FzbmkudAvK8dhzKztVkLLdPPa7kKbjXz7J6j2J2haSUQZiJqnw5g714ZhhxMbmauaNYasyZ8cw9YfpjFXZ",
  "key25": "2EcUZrJzNkda9cfPQ4KoM6ELMUfnee388H986eKe9C9ty5dL2yL3VXYwPK2j4LqiLjSkD7p88BtpEGnuQzgm8Xq2",
  "key26": "5Gv4TgJC1nhf2Eu83CBsu4hHbqEBEky5JZmGmBARJACptfrjqrR7tLzCSwQ6Tuhgkk2HTct4GsRMg3Ahga6T8dZf",
  "key27": "4spZSuN67z3RGXpXhrBk2dmDtW96tks9eDSPe8mxfsWjy7CTS6K6uJdQjJNXbWs3PCLAPKb5DiNAy8AMV11xxabZ",
  "key28": "4myCqXedErutYqDdt1rGnHqn5veTjjktETzTKAzWURLEg2NmxJMCwTCvrdSwYxdPSoifxkVvWGic86Uxt1neYfwX",
  "key29": "5UzfnMvY2n2jirMt1oV14dLxYx8uuwSy9dxh8d1F8zNCmZHgVZdEbBtK8GKaXbMLf4p8mfnQ757869c3QeHn5h6h",
  "key30": "CMDBXB3q2t4LzjP4mGDUTg4AfZfmSA4rXUNQXaydcc2DJCJ9LyhS6VCqUPbJprFDPXTqKa35wqeD2rAGSHnFQXn",
  "key31": "YGBpRkNRrHF7i2rGyBPmkvm7r2aeUtMntxQooYEzmLTh6eYbK7cQmHCYNArT4zTie3S4fisrckS6ig1DkcuXZzJ",
  "key32": "3dsUvvwoYe6qyZKhB7J6bm4HwPERjcJiQi6UWkrHiumURvfBkj1vDmr3aZPdbXFniLhxNBs5ed9HdC5VS9S9zXxP",
  "key33": "3bpNSwEaaJYYmaZV4LtUkWc8Ex9GpCXqkRLvuHjxKmHkFRCTcua2931eC9XHUj9Z5nQzSNpUoX7hoWHnP5TcNKQ9"
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
