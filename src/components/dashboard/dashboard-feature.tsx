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
    "3KP3JSCKeeruuHRv3behZgRKBfrcajrdaCDPRAovUPtWy8kX6qYhdF6UwgZcWroCjwDUTkLdeJhBb8AKmBoMnLq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QVEh1sNBpCx6gKpLdq5f4DaTvPBWpS1UE6RqXBmYWtVSwitGRPXCm7uvvm9naSq8idotyZUNFZy77kbAjYwGSyf",
  "key1": "5TXPpnFzFAtaC3VoKjfGRDpY9orompnDTiFeAbZRkvyinbXinAdqZcf7wQEY4sorxy7nfErAF22yXK664WoWVkm",
  "key2": "3XQDjLVTYTXpJaqx8JysAEoivYQQ2Baz5tY61sft36VqMaEdm8uaC4yyoZKBhbz7P8SisTnodDmy6ppAVr3Vet2C",
  "key3": "BzW9tvxezbtfyGCfaQHRQNw5cbEbFsVEz7J2QrmN4PrfA3Ci7MVdfXYVVaF1iMZKYP2VDa4GCxATqFXQefzHxAh",
  "key4": "3ggobitmX9MRrc31iKhpAtSrNvcFq8jJPVHgynq3ChirW4ioYEUCbFjU2hKUWPXSXskykhCjiFtve63FMnkLyrST",
  "key5": "xLPvQK1F8g75AdmcvZbJHQ6ZWQX8BmYbH9Dw1mDDdbFEuoFad4RA9Gpo4jwR8TsKe2TQajtTUEZpYyPxVPH7XAp",
  "key6": "37rxPvi2ZPBv7ZmREXpNH7vHAa5S1vZG6MtArrnSfgJvQU44pPnajxj3RVDPGZkTTQgnK55XbHdkr1quSeLS61iV",
  "key7": "5hNTS9DLvG9GFRicDWzNsnnSerStr6UhNuapYRyc7XGBEQTeVorbCGakSiwAAhjvNZwzsVbHyQkb9uVnWDA7B7Zd",
  "key8": "3WmGkonmDoY3W8RrUsCJkH8w6mMZx1KrNBYVAgcWLh3i5NZTiFTmPF9SP336k4GzG1qTJmBPFt956AfRUPAfMFr5",
  "key9": "5MBDAiP538idmoFfUWSG6C35mAMbmtavP7jbXf8wasNiQPEr7id7MmjqPt5SVQVDYbubmDGAusRzDobFAwCu83GB",
  "key10": "4rQ3Zab2EEhpoQHzw8YxhbiRjo6BwJJbqors8kWEQp8QARspAQRruUcHieQFqRU93Kw81CS6MvEqefZofSAxkLxW",
  "key11": "5NcZf1J2TyWjwEGB2cvHwvoSGhHgNwf4vkagg5Jynoe741foTnPgF4Jb9VmYkK1jhUdwonU2nFFc9uGzZ9iJFQs2",
  "key12": "428K9mKQ1xRzmmFjFiLhYqyUf5a3SedK5NydFtB6o2tVvw2jHhPyrQJVx8x5aC3mZQeQQ6uVsgHzfbgCfDzbnhDM",
  "key13": "2LFw4FyZe5GR6tJ5SSASctDiHdR2Yppx48W3nfLNyixvcYyVnEhtxbdgvUwxx3C8wr9SyVXPJRm5cydjMC28dfaw",
  "key14": "8xMmNnPaUQ49QHU9rHK8Cn7TdYTGRduH7yRek9zy5pS8FcHPiFDGia2n6ogBnjaY7VMrNvzg6ELfFhBSQDZQpEM",
  "key15": "63dq1gBTnC5syhGYL1Ms6c7vmKHEs53zbyKtAHRniR5xPAUYjYvwJCnK9Ae8gKEdejkNUeFcPxGrTN2g2pUokTnj",
  "key16": "4zXACAP84zfkLYt8qfZnsK2DbL65bLmpZeMeJ7T4mZk9JYKY4dF18WD8pKDS5AeeWtbxqK5cEPkgYQS4Qbzrwe9U",
  "key17": "5dfVkYXG3LaA3swSm1AeaR3eRtxSrezHxL8LGkPNrfinFCz58FPzRWGVxLz9vL8fKHcwc66UqEqM6ejFMhKXTadc",
  "key18": "kfaf9Fh4sLzSvjxvN5UVCZkLPE9PgnGZvnWjuEB7cAwqu4jqSDrfzAuHWX32nUhnmhV514LJyxBW5nZ9EApV68e",
  "key19": "5oqbWg51VajWq1JbDMdCCFsuybGCuR42efQMEsE4QD5upfJ2gW6JDcP6a42gqGbNuYWXdiwMeaWp6NuMw5VubNMD",
  "key20": "39P4pXMpBQ3gXyxXNPoWKBkCHAjECZGULEoXW2KvbZK39MTp8tiXoK6DFeq1sycUSh5b6gPM87Kx8UrYrVwpuXfi",
  "key21": "2bxpRcz1bpmXVR5PpFDfm2qLmX87GpnNTNeX6FWpqnJhGAnYei1gqYg7xFv64UZ5tjzZX5MKcQ4eKqkMPq2Z4Urc",
  "key22": "3vR29YpSXiPuYYNPBVLrjkdVr7oBsVQKDLgYqZTzkkToW5KBUqBG1QUDXpMUfYqe933yopK1zcaF9u29VHZzys4k",
  "key23": "2NH2AHcnDkzn76u7Rm9RMe2TXx6fWgvLLop1VdyyQ7s5DDNvrbhGSkudngF5J5BfTZK5NYfio2cgJUpGMAWizkdw",
  "key24": "2zoxYmXdr8bda3zg2rzsTp4JwhzSfv3WZT2ykzKc4hzVBJi2HdPj2VdygdSYJdSnRGxLJhUXvpmAaFzsZwb9VEL6",
  "key25": "2yqNgP51nucrezjrBij7TgbfqpzJBRWwDn8MXBqgtvFpgaFsze8LePdKQynzrp4CLYLY7sSvuGkPW3j7YktP95th",
  "key26": "2Tbmx5QB3AaV98QjgdgJuSHqkH9BniitHv2VZvnfgTusbkZgwAq5oNUQVME3eJU14JmxmKhn44JNQ7LEfCQvAoxT",
  "key27": "2SKQxsKuqGJrffp3HVjLBhuNQUeF27MbHQSFMZuTqEAvQJ1SjfCJkSXtDtfYSbgi8mdqL6HMKxZbTA5amqE62UxT",
  "key28": "4ipaaHaLYi3MtCrn212TsPYxLJs4oR9fqcTvwmYfazuGaCVKG59ZcF8JMKn2wHkYdXaExbC4DaKCXEx1DrUnNEGD",
  "key29": "4qfSnCAUNHBLqdP7zC87gY4PfJuBYkZFia3naVE2oVQqZdgXb7MGexFJJUZpSnrZyMvPUoyaumuj6vKLDAUTeWaY",
  "key30": "2wKS1SG7DFVcxMiVK5VKAUgFCfUPrCJsxgQW1hnuXX4YL4cfGLPUP2i9KeE8wetjQ8ZXBBHj5ANCruJKUa9hP6ZZ",
  "key31": "623rSdjdGFV7zziFY4K8owdUR82Cyaf1ETakL2EQw6jDUCGLdLUZMxT7jKtcz5NVPtEK9y1xGjTUnVDtCXe7aVto",
  "key32": "3KpXxfGGF5mVUhdPECw9ZqKyhVCa4jFgs1zB8TE8hXrpZmFwppPrfDB2cPMnr74R6YvbybD2biEyYSzmcYwvoG6p",
  "key33": "2CpV1jTwgwXL9oXgLXMrcYMWGGx4suqzTPZ3HVv9yzX9kyZwWFkpfiW5eYSKzXAVa6Lzfueh8hhAgZJmSDrJYwBU"
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
