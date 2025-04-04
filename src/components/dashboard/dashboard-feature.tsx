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
    "3kiTTrQ7BcXNEdwZDYj9qfYrGnfJuCekRAcNNBHuhioiWsiDKnVwdWRzwrP342zrWJ4gHAEWwpWEsAxD1tKttHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61jXrQrNfxW7CRSgFoWC9nPKHU3n6VnP2nmugFT5qu7vL89z9oR97rQByacc564Fk1VXxaMHodQy5GeGBLw8qaKU",
  "key1": "2Q712DzLVhTZLecWRW4jmKFUDUwXQTuuvKBtHDjU2hJX61rugeyiFesXfa8rLsgb4eeQhinYbjvyfw2w9Bp9E5mT",
  "key2": "58Dn5pwHNQNxwGLoqnb6RjwkeTScRWVvCWDFhcVMeqBK6KuSH89U9q9FkfNc11LQVpNUoHbKpGrGmunGgB8PP7UG",
  "key3": "5nATLfYeGgvS9zH23bawhLA5UsbuJmU7F37SgG9ujB5BNx64S3ormy9Qs9SYA39hoyUKYQZdxZsLskGnmSkLNvgg",
  "key4": "66TPtLvSQXKRvheGnDaWpmBHkZ4txzFGn4hn2tdpkJE1tzKGWRMBEoDhgosKU7t9qMboW6Kr5adN1aEtq4CQcEjJ",
  "key5": "Ym8E7uz9botCCzqbxNV9AHeC22FhkD6rL6ZCXrSwsrTmrWNLiuvJcHqzQkFqiFp4Beu4bHMwvVw1M5b3TsyBiYH",
  "key6": "4yRPmtSsSFxB6hyfXksVJRxEGT3TVm47sQAVf1HvDMe21ck3rsAmBBvpWWMRnMCPgyBZrz5JLVBRQQbEhDbAU6EB",
  "key7": "3K3vk4rgrdscjLYyo9Gf3ZJ8VUKR5cUgx9iigNM6RYgE3tWUFKFn7dBCsY6R3eDUQCDXdGiwh75RzoFLH741Mv2i",
  "key8": "3RJg1xCxfVnTCEtpwdeNDLyzMFkp73U6PHTiSPdPGMNP5GuAMJQSa664JHLerSM8GCzQfKbK1pdao9KsCvtRwH68",
  "key9": "AK5aWYHeZ2ESLJeeyC9ryBcY9sAyhwHxjZ36vHwtW435wzfEpfR9pH6d7UzgSjHrixqkYTvhyMcEkyUY8p7aYiq",
  "key10": "DLdQx8UZvakpj18TZxrzuBefkqAMxxqQKFbcjLjp6J1FSjtCwMU5rPMfmdjbZpiUppjGqvNzbgudGqBDFzx5Yma",
  "key11": "4hBGB6M5Cdg7bm48S3Es3XeSPV9yZm2GQTCcRxpco5JPo7hQkrvfif9TyU4L3hHFKn3YpTMM98FMfABJCZPc4NqN",
  "key12": "3A6uxVZ4dZQFNgHxz2kTKPGUGyhLYm3ryXFXxN2vtukZfS9PivATa9o84GP3uw4V5n4b4CPPMFH6Bpf2vsqBvKMb",
  "key13": "3zJKgguPBSXDhZus829nfxP35XzMecMiF8s5P4qRGyZJmBESQGUA7HF4Nqj9MgjqX4Je3ts53A2m4cS75pVzQC6d",
  "key14": "3NNBY9svm5hKZ8QtDzFH1xAEcqoEwGs11KVndjVYaws1HfV8aFdXP4AUaDTx3UvBauQjJ8qeuT7Yun35HC11gUES",
  "key15": "4Axhif45LaZDFxSN8kWyx3TXqMpYLDxKHYdTQPoRRV6mT5mJvtUh8BCMA5y6ZRSCjMGYZ8kZd7HCfiTDVhmdtcVA",
  "key16": "4uf5AZtr83SudYgG8169vcJxGtp1eNEyvo3xeS1nPBF5ipwFCS38o8RgadaczTyC24wgs1RLRCpo5temo4c9MhY5",
  "key17": "4SYzuMaGYr5c51Lpfeze1Ud5gVXbF9rXENMkFhfviQoyZeCQjm8BQoBHjn9TwxrsugVsbmR9aJDMfECCaWjEHF9h",
  "key18": "5M7SHoz6coVFbhEHh7HDrD1z51oPShNdzx1ugbPhkWv7qJrvsAVwDjrr1WCoSozDUXhzjVHhLeEzFiJLqTVoLvBc",
  "key19": "2sqY3RUSBazBQwAq3CWESXiMKn2zBXJqxtJMNEjLuZcVqnL3tS5iwwzqyoCQvfPU1rPTUMFZRJEiYmsaXDxMhQ8",
  "key20": "4tE3FDh1jgPCdPP5RuNp6XBs4RnTPUSLBWHzejD88zuuDn13mCXS7fTtbUdTaSVEoCrTZyYGYTWSKSx5hbnuhyWt",
  "key21": "53CnuuJC8mFoBG2iqZ9Mp2g8XRcxVE5urJdTXaAatPt1wrdNHTzhDcLMKF6X4bBgYBy5DctcNfE17Zoxk9u4HvCw",
  "key22": "39EDMm22R5sjBfXktnyTztHbLe4v1ABdubW4TZdxFkR4cbHZopSVsajsSzRzX74Mmivdf5mdq2ChLTdWgRNq3MUC",
  "key23": "27RZdaZnopsrhKV1V16JLM5X2fUeZuau2gSgLw7XxmSXq536JdjwMy7jqRzAKyfmqMpJj7qJthuojBGrUfwWKpBL",
  "key24": "JW9NGneA35TRG9hMGKQ8hDfSMotZv5f3iM7ZemBEWoDXxndRQYeLxJpXdr44T7uZtSDakpabAzBPUpCBP3psqe6",
  "key25": "5uMYv2jNCB9WYcgs3hH5vFtqFAsaR75UrRgLWuYztHZaMqjRL4uJytfoD7QJy4c521zWZkcHsEw9q4j1aw4d28nu",
  "key26": "3dRKngiDtrwTcQFC5Lp13w4XigsQCw3WK4DZF9QG7bUUZrSsrZF5ihVQdBRehtSf2oWTxS3GwF4HX4HYyXH6BfkQ",
  "key27": "5KpqbbqnHAsmd56hiDnz4caK8pd3YnBM1tQTkfRbhJ2y3tsBuo9XjQLvzTrvsWxAPpfuxu3vM6bvHrBeGndoQ7KL",
  "key28": "oVXEGdj2cBCfR2sTyh1VjRMyrvzkJcE3mytphoUZqchSozf638q3wJDnXsoAnuMQ2HMGHGeYDhNyHocZpPW8yjV",
  "key29": "2ZmjVnvqEg4gxGTxk3ntJXn4bpo7MATMN3icwWBDY6XgoY81DnkNTtvXukKKNtMFUQqJ6D1XVvdC5F2syQmFKpdS",
  "key30": "3LzKCKg7rMM5qQzd2LLx8sG5gkeUKh6h85uUTiZx8DPdAxUZ6jwSB9jyuCD2RSc9XE9JHBvBiHMrJbtjG4AnbFYU",
  "key31": "25jiKWL128Nnddoxyn3eByLpvpcrMB8LsigFA5DPybYcBeDVnm4q2k2FwwYw4FkVBEEJ29NqSH6i4LX8vJ1PbatB",
  "key32": "YqRdekNUpuEf98aN9KDceHMehHktYFoiPySBmjfpM2uXifhn2ggxiVxtu12KnEPxGacfmXWdXLS9sfmUJfYstqk",
  "key33": "8S8K6AzbzNoj1BaUttePRc82frVSsc2Mm4urGyCbPSwEFmpWhGp2oC1ND7PZgsZ4x8bGyKKceKNf6iLASyveFjw",
  "key34": "3qbYrJPBbiH3BL6GgJ8RBWVBkY7wNsy4UFB766JahCff7cytC3qbMaQeJPza3YFJXKgQur5eQeQ8WzxbYY1po7he",
  "key35": "H4HBVjRzZmUGLvQyhCCt1MZaWVHBftQR149U1kSSMfphC4wAqREUek2z5Dsr5hpXTLwVTxbAioD7GwXxEXx4Grr",
  "key36": "3NBb8EJHNZcvPDMaWcxAKFGv13CtMAGGFnYyK3eem6jiP3HRKjFezNbX5ndq29nqWfgapZGztc3RzWvyyXeAseKb"
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
