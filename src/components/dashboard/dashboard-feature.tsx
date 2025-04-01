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
    "4k8Kvu5zdRM2WVuAJH25zG4Ev4AFPAbiC6KYJCgE572VVanyDMHxg3BqSWZKaJoCEVB2teF6kM4XVg1c7JofzysZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h2SYPMmiDWGTEBvkVREdqXk312MmQpoAy9ZtZP9bHBrhkdqWAoRaTt2KS7mpEswvCBjtb5xoR35SwVXGp7MCoUp",
  "key1": "3PK3tDDQ6gWgSk6dA5WzwmesSFttw3xTbuvmQzZfQRrv3AZ2iVdfyiCzAF8zdBAbziYKKwoUxzEUmCWd3pf3kDBb",
  "key2": "5t1fHGqJJo5vfPf62mE8SdEuq3sf8zhYnkTCwa2Vqe3pyMwNyQ9JqbJexM5RnJvxf7SXdPGYbMZkiWT2ANzhJLZc",
  "key3": "pZxvWqdqvreV1JJg8iWjRW7WyXtMPTzbmGuGRdbt9SidDKMXM922NLiHbbKpH3XfNf2gb83sLW9Epa9xWGKwzfb",
  "key4": "3KtAjf4AXTFrsJrPmWLiJWLNEGyXTWZ9GEtmTnaBUqcjMurSqCF4oGFHrGRCk5HCU3fsjToweLmj6yfVupLA5kjo",
  "key5": "4zyYrQso7CkTXCsEZc3Vd7Yu3a2JewwFt6LbDkcRgBzo7L9CqXzwbK4DDJqgcrLvrj1LD9fRJSAHRs4Y2KyUsSUS",
  "key6": "JuRbWHs4iYtG7JFdgt4Jy17jnQGz2Dk6QQArmgf4StcCWYDvmUyMVpATnYuAhxkRo6pgKSQjK6ghGT2nFs3ha3w",
  "key7": "4Deid4nhF12UswVEb1ipcPogQK8YMhscjhGThP6PgfMW8dgzNMjimXC7AZ5mJoveBC8wAkkyXwJnbdJTSoycnyia",
  "key8": "fH9dxpAKPhmbGcQvSWtad8MdzszNDQRSEXopWZ3N49NdnZaUp7gkh2KJffSUWX7HMJHdT8Y8iUCWb6L91YpW8La",
  "key9": "4rM6tEzBWfwhmowYUSKmgiPscrphekKtN88YxEQEtRXxYBLxtc2qSXRXB6eNbLsznKzHaciqxbpocUPuVTe7tsQY",
  "key10": "3cpA1GkGAqUYJdYW6VPJ9D1pEkJrrJNQsby16k7ZY1fJTW44E7VFptMPFhAHyJyTH3W6pXVGQHf1bubGsYF1WwFd",
  "key11": "3dZ4ENaxK5SztXfruxi2x6wf4my4kRShojTtSEHBM7rba3CatSuA7UUfokbzGjiUopTaH69ZoDUj5cW4CGwJPAfv",
  "key12": "3VTkZVyJAEHMqr6ymmTMG9usBXacoNg8obTtZKmKpc9nraEGtN9mR4sgGTXiZtQGEGY7duVKz9RFiR6cqTU2UdCs",
  "key13": "4SnurzyELPjwq9j5MrNoLKnjC2eqsk7fHpdiT6RHtRSYH1cjUgWsKjDACHBKxwKTWA4DqCLJVyEUmsU1fW1hZXMj",
  "key14": "54cCEdvCKPacQkh2mnvQ2HGuCVGH4UmrnyPVctTu5AqVaqAjxvw39qWPGniDup8b4dYyPBavse616G9MHW9btbuA",
  "key15": "xjk43bR33jE4RLwvQhzWJXSLmX2gjVuoa8szcgJX5CWNHwdYboTriu69a4N5C8kh7jczE5zX3pZ464P5Rx2zCcc",
  "key16": "48FVRPDDh5En9m4RLKjiRsGsJd4YQXL6Sh74RqCLDBBT7R67S2CHGpkTDrwVs7FozdCDsUdvXae6rpHhBiNa1mSe",
  "key17": "54m7zELncx96wyySR4XKqhqoPfFg3xG1PMpafSHusoNbKJXkpXEXrc8e6AtUMdfUf3GMeAs9NiQptsZPMMtXV8vx",
  "key18": "4nEW5LUQPEXkksLxFZPvwnsKgqwXEG8dQwYPKJ6y8L72xQRCDhhj1DSRZ1pTSLspstySG2dLeMFnR9X9MC6eF5CA",
  "key19": "3SkTeJuFsCafDRpuroMiE7YBmzLrekAqCp3dK1TimJ6rVUok5spC5ZYYL6Zd1WqZeRLcGAfBYJo3Pe466Y2LGneL",
  "key20": "5YdxqhLeeBu6bDmF99ZqqVez17mvLMU4JiRVf2pV9Go5Xb6NiKaU2gLxhBSJP4imK4mKMQhqxo6knwUiT1aEJHpp",
  "key21": "4HuV5zSFJFLb4dpBqBF3TuhpknbFUUTDz6A1Lz8zpupEgd1vXdN3FKsELWeRC77wGAWfV8kk71u3emVHqyqBX39B",
  "key22": "f3QhhHKeKTwPBpSc8aFyWVmEmbDsmRPFtStjhg5EqADsFt63bifgR9NsNcjW7jKorUFDsiju8CB2Hf5z6f9MGSM",
  "key23": "3Tx7PEpikKKzBRXLnbgVotHQFha551UhJUbxF4UbPnpgep4MLtKhzfV1Pi3tiS4VvEcgYjv76PXTraym4jxFjtYW",
  "key24": "4VbXXoQZyRwCBCEBVAbtBM2F7xmdiZ5FynoywZgfTFwjKy6cCKF2EdEjWbHt9eL6FXPGn6F84FXkCE51ZaajPtEV",
  "key25": "59h2Yx8hopr2W2Kpnhb3qBLd9dCEcjdJ6tGXZsE3i5mc4KayYuo25fLC1wXr1HfsZN7ZwYt2xSQKAKFm9zksqPUr",
  "key26": "3zs74tJwpXAbX2X3AjFAPhiB8E2udehCTyU1n8vrmCVr4AuhjQpjm8aXVetnVA3kVfbqWp3g6CjTLitPAkZm5wP6",
  "key27": "2mgq8W7shmJMQYwNJhmCgnyEwgVtipuafNWgdN43YhXnwD4FzAyy56rWi2NwaDqKs1yvpgB29VEsrcrLyjG27bLa",
  "key28": "5jL2yX3gYNGMkTmoGUfH8s1EMjUrkfiBiLpLmfs5RBf45ECFKaBJXJ89g4ko6LX7Ya9nnifEYtNo3nXn18j5KrRn",
  "key29": "3cotir3hV637mYdkuTujgpLdSZxQWt6f7PEZp62uKWrijXfnUSZs9vmGwRwnSmapaqtZ1aEze4SbWVMTvE1zN5p6",
  "key30": "5xYsi7XcSYDx4ubCEoiafrwddkugtvUhyTHpBTmV2a7PZFokdh2qsZ68cS1iHvjV97q8e8D2HdonYHTki4MmndP9",
  "key31": "67qwnCk66x9hLu8PrC864d46ppXBEnSsG6tKx4hhdmhgvvCQPZNPEj4XRJodGjU8QXmEbxwHAGMw1QB6GWtK2AHt",
  "key32": "31X9drpEhS9QkYgYQRpgBNw7xFkTF1771AenS9STd6Y6uL1h1HPsFGtBLnph8em8EuSMhrk1qihwe6Xc8b4JbQ9A",
  "key33": "UHybp1cyp8EPgtUirdD33CWah4gtJNwLLVoTHARpy3fUV3heQnBv77bzMTQivLW5xwHXRwQKbwWmttgJt9AfKuo",
  "key34": "4Qb36S7S6wTUBSddcxVzsTVBSRopnyDfhu51DCaufifsY7hoqPg1eXoqDJijuyvPYxZiz4tZq2zyfbgoCLGJCRoS",
  "key35": "3KYemXjkkdrci9EvU6uy3m4De6LAeHY2UT1V4trEmAYAnVp88o13GkVhzddAbevEJq6vQW89YUyqJsfbGThix4bp"
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
