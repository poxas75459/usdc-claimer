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
    "63Vi6meptuE33oFas5xz6xdXtVLZ32MKjiqwyZf1JPjys4Dih4SKfPyYgEE9KSNHH6Q7tqCHrb5atgJiRY3QTyrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uymttNTg9xQBRnoXBMDPxwyQ3VshnDmSYS8qLm4X3wy3JBs2TRKrutSTPN7HzdnPf8u8oJpjeSRaMjPV66uw4uz",
  "key1": "4xQCQqNoQ8Hfa8xZRxzxCMNFVqXwPs3MNhzpHhMW12iop8Ct78KqyAg4WfnwfaSztCUkR8dhr4UE5cSyCGnrL8Zs",
  "key2": "3Mz8mLmBSyGzJ127wmu6V3AseinnU7qx2mX2Y2CyQB2rTsrMnwNS72iVeCjg8PQA9zrKaY8mFjWXPWrBm1yjNUQu",
  "key3": "5GNQ6Afo6eEm62JxbK2SBAQgxcEzswrxLL6VsYmzJuLVPTXdYWAaWSTLSubxAh9zajbmXARH6o8Z4vPmcmRgoKZ4",
  "key4": "3JtTD11QUonJGjN97Z8r18VeAuwkPXh9ksXSGN7z6CmoKW9MSzfYZFvZwLCjvdtZZ23R8xh671F9gXZbAjVz5n42",
  "key5": "2P65Mi9futDDczH9CjyFkpyKoeGUrfLNMNAFNC2pRBSTeubuZbZKtmrLaCjqnARmJTLbdySL5d5Uog1gCwuVqjTA",
  "key6": "4MHp66REEMa4UFy9DGGcELDcXEVviuc7SHtpkn8dMGRN3ZjGTgeEK9bUFNtA39dLnyAebooqjVQFJXKes31FSDjg",
  "key7": "5exMBxRiDsgc8vUYzSrHCbmbDjnzVvSJzNjFNdCsG5RxvEorMWvKbJnP75Zu5Eou5z1kWVZChLDeM2UbXubmB1va",
  "key8": "44mHSaLSasquqBReioZnzfw8DB5teqttFsy7Er6tuiShx13NorAP8d48sb4nPH3Rk7EPSH9eN9zqqk1tdigkEmnD",
  "key9": "55N2s66xZUK8NaqqVAFfoHYMmNWNAJpnKAyPuxvvSjkNQuWgiF3fkNPM3mPttzCzNBare7RkoaR2RadnRfx5NrCe",
  "key10": "2un2EtRM2TYaqYQwKb2U9dt3mi9XfQyPLc2owHsAQTLt5ccwJRMkHy759yW8pf8PFSgCCLKbAypYFmi7nsWQ6w4b",
  "key11": "3fqraM6Sgxq9kpUvd7V5hxY4gZvkv4pjg168pz9A6Ep33huViamJvxy9ypbJJLtS3CVpcQcqtm4mEKL7KLx4Zu5a",
  "key12": "q9s7x4XMTjJq3Y4RKt7GBPtf2D777xfU8sZ1ubgf6CDVX4oZ8Mkq86PpDYGfNrB62zHmobCBtN7JLH1Zjf6HKVu",
  "key13": "2ZAiWgK93c5sMFtrchcbA9TfS6Krd2v9ZdMPcxr1LSPNx3ab7GsWyuYGYGDQuBwdc1T5VRYzLAt1d6qDDfFmwZpX",
  "key14": "67b4r2LmZVutRetAQQVwAYvfat9kdopsYxLS1y3YCVFboNhWCXbqt8arYxy56EjMZrdc6gDXuRGg4EDqsjBd8eaw",
  "key15": "2q9zXJwyz9W2kTece1juZPBjGtTiz3iFHCHZebBcg5oWEabevWxyrix76a6UKU1jE1qK67g3NbVq1pnQfr3MqoW7",
  "key16": "5TzqMvs3gfS3FLDBvG8kPQNLM1i1EsMggADT6xKDfSeR1dk3oYHwgxxBk3Sc4SQHUwHesNp72c9cy8L9F3pAGLVz",
  "key17": "5bAVz6hUZkhDXu7d6AnhJjgrFM8xVyXS2iRW3MYxMsYCygrayihK4bTa4qQAuJ8RcDh3jeLVMR6cGhGCVnQ6kA3q",
  "key18": "2E2q3EmAwswQNCdJNiSSGf5pV1eBtkVatSD7N264gn1rqmLRyWPx2LKgUzSB7rijXyS4YPYG1RxU44AyQj7kmHk2",
  "key19": "3rrKRdNfSDNJ9T4r1o9kkTPTgbkqbsmTN9SoSnNy4BaMi1iT4TZQeFKban4PTw7gzoKfbQMfSvv4o8qFCsXGakTW",
  "key20": "2ngxzcgtbdqinJpqdpN17efeajjMVvHsnG2WQXniAfPHKD63rbxRabEDv6UnkEXNb1zmiS6AnLfjmndqA5zpCRUt",
  "key21": "5pjUxEfXZzX4h2bTYqdfriVhT32x1DNbU4YttLQsDCt6KRbbrSDhUP9GKE24BuHUfbL5du3Kh62L6TiEyyo4ZkW3",
  "key22": "5qjsL68JR4w2YKwtC8HuTL4jypHydM9QKWK9EXabSVNdZwHXqWRf3Q98mbQHPF1Aqvb4rwPouuJhxQGLc3UHD1b4",
  "key23": "5F5PCxCQMzhZHhcNDtbbKKkTvXUac8r7WLSMq4ZGGaRmzsk94uHSYwarv77Yc6Ua6SH3Z4QbDjn2GfNTBrboff2m",
  "key24": "3WcuN8UppaE8YHJJAkqxTmtyAtVCMX9wk63JLmvCF72UAqbqYGbo1i7iahsfsvxepgKFmb4RMLpEPm6sLfB1QC9R",
  "key25": "5XXw4dpEpC5wbt7ks5u5wrarBBLe2oceRB7ZWRnfug551xTqCvpeDRXajcCGWazY6Y3BQ6DBo24MzaQUTuRqpSHM",
  "key26": "2H1pBdLsRLuF74TxNJEi8GrkXc3KvRvUHrkt1ScwU6LsSHDotAbgfV5pFRcjwW3epynyw7nRDERv3KdupdQHeCqj",
  "key27": "52baSQvUpJLKbCsRuvhhuQyiRexu78BrPtKyd1XqRvm65vYFgFdQTeKwhv8guep1yMS3RT3FBjETP67A4m2iXgfd",
  "key28": "KQEgi6MMUMvC86dm6T6GdPbJWQeqLYvFqTGiuhUSYrsDJBi9dJ2P91Yf7jMLUJ7MQMW2vrd7hGV1tt4a93B87Hm",
  "key29": "XSKn7kgcwyqhjemDhXv7aCABcyTVUCYnEzUCiSFcdVzZPvJccx33om7VX6cK36RRs5qjU9Kzbds9s5UW2mPtMGe",
  "key30": "66gHYFn8m46F7rnEyyrWrcpQx2RDvY1YmcegwuutQ6YzjjAy7AM6DSpcoBwzWFMH1zgHPJU291yrxDfJEjizDUGD",
  "key31": "5A9mgNT4dt8Ra5CuRH2izR7HvcuSD3qC1w2y3gKp4rqQMcs1rRNpJWvb3iAzXqcMmsVPC7UdZW1oFoXCp5ANqVyn",
  "key32": "2nGoN5PETfUeRMhkKW57Me7ro4r6RkFtG3T4W9KUzmcFVuQNXdV2ucL9oqZCQcytidfZHZ6dLFGUaKSPFj7AjXbo",
  "key33": "psR2Zv1dVSb5kpMwf3yhHtLDQDeMeuP7vm72NPbCAwe6zsrJZz5hXpE1QEAfWqsUgocfmykCsJW66MNG9H8WzCf",
  "key34": "5eXW4mSgdhBmDLcu8fm2BmCJVNfNLKGu6gVXJ76Drv59bjwuJbAkWQM6Kcf7KHkArV3aqebsSms5x1ojrhN8QSrK",
  "key35": "3bj4Kk6my9GwV3UQhv7i8UQVJ7HZz7eU4Y2u3hoN1FceHdW8zz98Lfs4a2FdLxSrzPRqQTWJ8QRobX34NcoPRHUs",
  "key36": "2grPXuZRF5kX7tWTyJX9nYHvQyAkgYR7CRpPH6zg75rH4EzSSepkjzkohgsZ5zjRymGCSZDrfo13tQZ5N8nyBve4"
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
