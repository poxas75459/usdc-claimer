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
    "22CAr3DcvkU49KMhYBhFKpjpcBEjh3KWV3txP5BRFqbEs25fHrXtW49hxgVuRC7MESZhUFZ5FgBbUE7o8uwV6xDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38w46HnVtwFCpAXj3K6ZLq6HkNyn3npbdYRrR8PzYr2KHJpLbYs6Bg9vvVD4STpqJhyd3Nt1FouHfU3j6TBq9dNH",
  "key1": "9Ehxr9NvMZVBUQWSs45D2drkb4P4CahWrQULo6qBmY7HatQH8hXjx45Uo9yy3uotFnPyYFktkkfWyTitb92DhHt",
  "key2": "iPc8YorqfUsWvrVUGeMFPavbSiJW65Kg1cyzgHgTZFsk5ua8JrkB1dUL7sL8KETnRE5dWaiSKzYnRk5qpRzb7Lv",
  "key3": "2Gbs1AdcyZS3RAHP89cv33DQKoE2yRxo7wtVkNtjJnWtzoDSmpjDaGonDyH3BKckuTRRqWbE2jpGGxftgXRz7a2S",
  "key4": "4Be9a4kDzJqQr2iFcPGJPfQBzVB7R5Nbq557jwJUDYi9fcKoLofXbK79Ndk93RZwbh99hhxamQhnKskMdp8sqLQf",
  "key5": "3dNuCMvn97Nv1Yupawet6tqUK9RACxc8m5DSPbH4nXztd7QRMoLkNqG4g3XYw6syHhMBZAW4vkSaGxMtoiysEXLD",
  "key6": "4QURtTKTqpSCRUyBupsidU6c84Xk3DpNXEzE65KDk95u9LFBKiqpsmJF2KEM1g1TnJk4A7dU1bCHFcHRf1TGfRps",
  "key7": "Xc37ZSWrYhSwVLcwKd8Y9nuyJMMnX7MMhywdWupizdNMZ3SDknrtU8q3fRYq4ASz4RDMq2dotGjo6Y856Syvejq",
  "key8": "7WE2AULeAMjXSZPnCHcHNep6SuHqf3n6MH5BeViji1b8dzs65SvFpX2gsjD3CeYeSMAV4YsY3PyvCpc7Sx5na6H",
  "key9": "42mnfpg2ctJwWEa8JhLHskBQVunHCNosu73T8zKBBuBfGDQDL5PkKipR6ywWQXMtGtNGVsFXeswVjYDynEgY8i3i",
  "key10": "ybuSTrCwyKrW3iAMmsthrke9qxkYBLNF7swa1mjfwAfRW6dKeFB1xFkZ7UskVhrxgTJVkUP6cJDxouKYapRacaH",
  "key11": "3ot8P9YnzMNPsTmXVic7bd1tSGzPGRFQ2gnfqMQwRSV3P9mfytGByRp6sumNQYR789Gbxthn3JtWZTemoFmhRvCc",
  "key12": "oDZ4cSiRXbrtKtpdkpnXc6ASNDa3tHMwsFXR8kmgykjWikd6RjkTwZSGvW5zZDEAe9zKS1TfX6Ke8Yq7e7ZDWjT",
  "key13": "3UJmrVnySNgKCsLdbgqujBCtPA3bLrWBpuN1EPFupRfE654y4yL1XraRg2szvvUZTZDnrgKriaRFFvHkivpJrz89",
  "key14": "5EGobhSvSxA1xz7wf1xwUWNGnu5k6mtkjbYG6VNug9BVoaEdEZhQVSiwyhiuiFpwk7MdGjD2Hw7bU3wffLBiuq9C",
  "key15": "P9HuVrTGjTgeKzL8WMa53Pdo4jwVJkUSpPgpttHUg9JDByqhZfKA6CANBbvi1BAXPdRDvyzsp7s6MZC6KHRzGFi",
  "key16": "4iDoxoVNJSgrufd8M7GiKZXosgUvjqZJLpptcMoAac6qzgZg74TPQMuMGn7QeQNMLvoFF1E4DMYNKP633vDKEzJD",
  "key17": "2zYGensiSa6n7Pt4JVQpymg3qMJPqfGN471gxEkwdJ2ZMiEKZcDzbUSnKB34BpuU7QNjKiXrYZg4uGJFjNCTCrpz",
  "key18": "vJF8cNuis8fMsHUZSpfTmMfQDkJWzRNbRDKnUda6KvPCCWXPRzoJU8XEo8tARDyaUd655jxtSwUZyHFw3Lg9MaM",
  "key19": "2zDQ8u3brS3TPTZx1EjZQPnDf3vTfZZKPuh5outTBPLHrE2cnmZ5ZiCk7rMcYJ8rBkFv3TCYk1b8rRaS9bkwrzWC",
  "key20": "61msiiKYkmvcKg93NouZYaZyU6h3DQouzihKH4JXZ62PCGXdKz9zTH2KLVnbU1mDtn4ypEEeN8EDqTuCYXEQNMdU",
  "key21": "65xMryLkWwvtVfBS9LATR482DPBuPP6VcCu3upuMuWX5wnmi4jNDpmCYU1aKLcxUNckGcPPGeum7EpeYUeSbGtXy",
  "key22": "5Li9HwmxHVSSQpXVN4iXPB3mzbuHqKABX7YVyuzTfuMkd792d62AudEwjzj7dbaDmPTNGgxWt757eAFpqw2GbieV",
  "key23": "gkLTWLB6DFgLwnV4ESjTfJzdHCVFQdqixRdkdsPJLvdGGP92QtaJDe67pWkq1qPhE2vdYq4V3CvYgUCs2AM8Zg3",
  "key24": "3PdTTK8ie1y8xqHux5aCYHEqU8HWhy9fRVn1QJuT4ipemhHC4dGRLfJSbqBJuGEkiybFPmyGuvf3uLShW7r6qP5",
  "key25": "39CHhtW6gKFedRwsZUxbWNYALSwiip94YrnQLtTEh4v7DdRsqjFZmRFR3PQqqAsNDQAnff96WoBz6dABoihZW26c",
  "key26": "5kpeTZHiBb1ontnSW6TSzSm5NS3j6k2ph2vzcoK3Eu7KV5SjHmoUNWK2XPuwvL6E5WyPLrgULEhsmMkyZCdBxLnC"
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
