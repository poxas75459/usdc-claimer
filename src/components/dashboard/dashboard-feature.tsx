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
    "LZYP26fd47F5oCAMb7D3ARzWgBFEWdXVXbYiv8mSQ8o7mearGcEtTwBoUCsr2hXM1v9xHhKeawXw8ZyeQDHdEdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2swFugET4JKWubnK3bi4Hf2uUwHex1hVafyuz9vsq5Fvo6do7YKQYH7XB6ceXL8Sax1tDdxMKGoc5T5MZ9DJUXtW",
  "key1": "3JuShQ8RXWEPhkSHbqGjPVVtr6LofVv5y3ZGfLGA9NHyRAVTwRkZXqWTspWwzQ5JiLHQX4ECT5xttKrGDyxRmuLs",
  "key2": "6pwPsDgGQ2j2ngpMZMB6ZL1vnra19xvT2wy1R5Td7UzNRRCWfFUnZkhwS7SvhKc8avjtLkqtH77DxZkGmXoB1fd",
  "key3": "r3pgZh2UCsC9NmVd4XZuQWFLmudCaVeJ6Qkt9oec4J8kEtTszeSR1rnWfC2VoBh8sj9XS86EFQjcU3N6R4iycxH",
  "key4": "3RE8ozt5DzdQw9ARXu5rTTzaNyHHdQGf19qhhbNUjBL7pkGyGRx6NCm8M5ZyXq27rXdfHgcM2TcENZKu5DcSuU1G",
  "key5": "h16c67PkQnbHHqZq6KhA48r6DKQdsd7Tj2HbrXmyLFQDcsehHyDmEutsxi2iNthqhQKNbYFXzpdugTP6irTqWfM",
  "key6": "5GsUfvhyRV6MFZb19BiirwyiRdJUyfsg6SxjAPmJLbGLZQgRbe4RhCNvDZ1NfsZg2Rs1sX65Bd7zFBN1rSSdPcg8",
  "key7": "3F3XMdvfJ4g7eLBQJ6yzZ6mQmsmz959kTGHfCkcnf4Fdyh7RxW6SGThjD9ABxftrKPRXzD32Jcoxm8a7Uf9c6eBm",
  "key8": "3oQmFMq3pngBuccZkQjPqk1EgeqmAqcdeKv1MXQTHVvjWnpdqQcQzZFBPesJDBRJRqeAqPACvV1PPSDTmK1Ecrdi",
  "key9": "4S1FL2yXVugZUqXTFAxCYRGHkvQ6TNsKdyLfVQjGanmKnTnzJKnaQMGsT5L2bXhsGrCK9MU19N25BYCmETeBT6Cr",
  "key10": "5aeKh77pDDtDC81Wo5c4tNUvbgdak9qaLeLRE2PK419Q6w9fGwaetej4aHwKFCUFhiSrkSv86BmWwSiTiPyNWzra",
  "key11": "2fJ5tsuyVuVhCbUjF9tZc75S6HgvwQTk3BswprURmBk4hbUehXmmtLb6jwFxk1MCZ8zZU9jfqAheEo5QXssHjVwa",
  "key12": "58jjBfkkBnYDWAq6KGFvR62y4yPfkLtTQqcQPDtaC3mDnmJ5gtHDx2ZLnJmDHae6ft3ehUMaD53xpV7cHQVuYwZx",
  "key13": "5mNjTJtiXUag5DywQnMjgoJK8d5VBsB8bToRZuho8kCK6tcMqgmwx6Zqdm3zs1m5d3wGF4NiGyuYSNm63HmznPVA",
  "key14": "643P1SHvjDGKLxaifTv8Py3hure2kKa2SCLS37akmsFuiacGJ9t5VamBXvgTWQ5HAU9nDyLfovWBSZVF3NDXgcJd",
  "key15": "2f9JNanq4RHYV4wuiPhBLxX1zcgttFbfnAMpBdPgkRuX3qMwbgRzTrRp5wmMsubvsNwb5RbiFZ9H6YBhr8gxRXQc",
  "key16": "TRxRACMyw5YB3WkcUQLxNvoLE2iMuJvaHzqWXXhhQS8E36ndYiK9jgkd4V5eDj5v9DLvrQP984k3etUHJabR7kJ",
  "key17": "4ESJ3PD9BxjqXFuT3v96k7937CpBKXneQi9CNmjBrdKUT98r79M9V8f8jFRHkKcJkZYSuR2kwhZhLd9CpAzVyozr",
  "key18": "27A4tqWKroncmMu4f7nc8dJw12uZwyU17K1CS8oHJrxK2dayuZgHZGqjhxXP1XYSrHHqfiUgr8q6Acjz1617tbYX",
  "key19": "6113JGSXCnZmwtdzPrjdoo7gcR3AisLPBFXUKhdnzaRA8tbd9b7favLqNs4tjAeqbYfNVj6xgZnBqGCQ4bMQ4F1z",
  "key20": "3nznAx3RH18mgEVSdBNLoxfeKA72wKTNNEYqJELuRRMGn85R1oQEafVKgH6jdLKpXHau8N3Ts1Q6sw6BpGPpzJ91",
  "key21": "Cu9gvgBkUGniVEXHkcePChCbadLyGFyRyrznWWfFhSkKFvFu9Di5vRq9GZLG8K2gam6y9HmY9F7CZvaabpZag2j",
  "key22": "4a4aQje1dSADvokf2kRwMFyjCz1bRBmn8pnvsmXoxLgnw7p5KTXCEMr7evv6Mcpma5bkL2R7swFqvDJPKSETmoGg",
  "key23": "4o9jGAePZgG3EvmgG7x4eS7psUeygURVUxjyP7By6AWABLrvEM6yKBwhoHHq3GBv4XbUX4MBvuBRbq5cbLreokM3",
  "key24": "4PPLGVCx923h3Qq2qCsGmYiGzWZdkTHnXZqciWcYGSPYr6fvzi1xrM8gVzwLLbTDLN5TUJDam9zfgNNvtEtZrQic",
  "key25": "58YchMUsq2ze76aNxt9kEqGXXgZijc8LR4N7uN5DtNp8G7rLAxE7fN9s46BsAtRYXihD38bRAs2isw19e2vgGJCR"
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
