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
    "2kAYP4jkAbGruc3HnCdRfBQMTqHsJiKdXMK969z8HFvKisGjfzZvuAuuaQWywqxyghG6KcZPmJyWWb1P9wpK4cBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfgWpSyspmstYZc3a7CTkZFwXsHSzE8qyFMvrGjaemcXhVgahn26zK8ihrx1gMvVqxvSYm4hacrsjW9r13pcw5v",
  "key1": "2jt2DsVto5BPTadSQq7DuS9Jw7yTHjSAotv9YqL8gdk7TXzrZKoXk5xxLT43gvJPv7dLphN2QgndVdYqQk5CnRVh",
  "key2": "4zQnip4VgKhcx7Qzhbanswu11Jyai7Px3WmrxT4czKUySXDXWsBZM9x77CJhXCJKKwg96rq16ioZWSu48CPRUpZN",
  "key3": "5WjaB6333p6LLou3rBFXn7mqbaNKXTvcCt9LHpPLKefFxm7M3KHQGS6BshSHFCSbXJJZLHwBK4yEbS1x5JUNR5Qp",
  "key4": "53GZPYNMybB8wZwzYHSLuU3mHVNi76uUQMQ6e1MDhwQ6DywSv4BiQcUUoBWsgWpUq8uSMdEKYFGLK6tCPrfwdBTa",
  "key5": "5HKdkDBAsmkUDwsCZasnLVhSkU4o1Fv53DeNhNxKiLqLfyznyi7zqMpnbJrrHuSARR66umNTvY4Dx6shL6DfuttU",
  "key6": "3tPz2aUEpSJcEwJCN8HEdaFkVSZttvUvZFaa95fMCNmq14X3cSRVwLM1PYX5Mbfxsqa4zfgNYcUMFK4t5u6p4j7x",
  "key7": "NqZyyTL1sxS2BRNhfTEFkAiH8HDA2PhtCfRUKjxCB4fiCW63TkqJxMRBge5DyKnzKTiv3uMZNh1xxerG5wNd7AL",
  "key8": "22XBdrvsr4miaJkaNThziLSYemvfWmqc7ECGVrRTbDcbMLvsG7W3dbMVYVVXLw33AEZxLMqFZ7T1gg6Fpu2bzWm3",
  "key9": "5TMcPv5GJUXSNzRRQ2iYGWBrtxXKUs3CcwH6y9P8DSzX11L9oL9jFhQdVLbmegdm4gvSMMLVAh2j9NWJA26gh8dh",
  "key10": "5WWJhzf1u8vM79TWcgJP4JmyqThoLLjAM9CJ8in4Vb47fBzPqcqaShYDgAVEis9wHJMSJWWSuZyKAUPVp1LshVEJ",
  "key11": "3TgaYjAjNuKj5rvsLdN6336w61qBMLTyk6EiDqXRFe46wXqQZp7UokLAtctD6x38PnFgpNYMXd94Haiduk8znPYe",
  "key12": "2uakvJJ6vYRNWcnRYTN4Hn5Z68kDqCaWL3tpzcjjttggd1P3SfUc8ueHiifPK6LeFyh3rdC6xQTpkVv569JW7i7W",
  "key13": "rJ6rizDwWGRHJk1dQr1YPwz5BEfArNgMLrDifVWXa7d9tGKdGdreW93jttZTEPg2Ldt6DxjZCWK4TAxUTsAjbW6",
  "key14": "m881pA7srtLzB35ZaZTqEUReFSPPsmaTY1QbT3pFcimo4Zjy851Xk8RZAbgJ2aNP9VUQMVYTTDmcXtgSBh5zyhZ",
  "key15": "4VvMBL4apFcyUzJuipbUhvf7BN4aHeC7FkN2k5ZEwfDFsyexmQqDXhWq4bQ25JsUjQgvBLBWjooZMLD42ejCiKuM",
  "key16": "C8uSd3GpgzVZ8mtzH1iYCeQXyKVbrgNxn4RQEsKYnCC7nXEBrKUjae9WjSNT7QggCPgo4xf3ffiguKYyeQQSRcM",
  "key17": "DQQqEB55GYEFBwhbSbNtT33Ej8gP5C9DULoDRchHzyoC1hTesiJZF6sgrAFbVXykhouj9jDenYVaUhVZp5PFShW",
  "key18": "3qCguBrdYv9qP2gACRAmgfdeGdZEP7MPvYXe9vCxRPM8uTeq9AcmjoYPLSbvuqDcxQj7pytN46x6HBVDQhgUas8x",
  "key19": "4UxhhgrS2nC63oyZgaXCJVxyD5oMaCsUmK9cYXWYiq9JdxaYaaG9cxLyjumur3g1MgctY6iXDh3m2wFSswzctFMF",
  "key20": "2A4Y578eB3429Jpai1HpTu4cseuPyN15TtxtqF5iGFtM9MGtiT7p7Rky6Rm6wcEH9WFDSW7AGtoWigdfyNq2gmKT",
  "key21": "EKUJdeG33gSxK7ByMEJd5FgyykxRiMfLkRmF4GeGPeie2YVj7iPoipgzSL7YtvWsVUHgnxF51FXSKtvc4W3kd5Z",
  "key22": "nmUoYpWjsz9WBS8wq4fNp42H2mJSGjq3R1cFgTCgG7QxETjBE8ZwcacjdMMNg1Q7DJbXmXw4eCQNQCNLBZs77Rp",
  "key23": "4U3LN5Fkd1HNRN1sqzTrKoG8LoGYgdSX5T1SqtMiTFUnaKZsV8UTrDXDjgQkR1nwCsvCt1hyjqe6RmzaYJrbobjY",
  "key24": "43b3Nguxwm4E62J5Sgi5UpZNpwVXmNKQA4An8ojuCyLZtfkfCUMB2rZqhXK9Hmq6RFyXNWBYQ52NeG613wwDL8bv",
  "key25": "4joBywcVFYcjTWizk3JRviaThZMJeAVVVmLbAGsUTm67TULRTdAPGc8bc8LSAxqC3GmUe29LhNygcTwkKnRdwbkS",
  "key26": "5keJbH5mfnU5kn7psCWZARpQv7brBmmRGdWVG8Bx8YR7cY127FMskBqSb1bkRW5SagDM4bL2HWWAhsz1Qi3LPepM",
  "key27": "3BpfDbPs83HsFN3JFNeNusBqHsjjjkTmB5JacwCydhAN4if9CQjHTyCiNJb6fASm2SD6jGwcicEBbQGFEpdP7rU2",
  "key28": "3MbEyKnybjsDT2XyEK1kkEApNHWBNb74GVRBXf7j6NmnNvxUjo4i4UGZb9n1bAJNqksQ6nF7inRGvPycJESw8B2B",
  "key29": "3XbhP3fTwuBtPLGJWZtnSUKgSVkHvYkMjn2DJHwGXopK5q3ggAtXmvuqRQvcmjtzYrrTc354DcFzE1yoSRBv1bm2",
  "key30": "3rK1EnUxoTDvb7PzqoEUJCGJXzZTyXrGV4yAJiThWtcnbWVeKiRmoyonC9ZKcq2U1c1P5ubbY5BhnKXYWmMvkSoi",
  "key31": "4afDV1gWz1g5N9rpbyKELrkVP7T4oiBJBUN9BHYk7MQe6K5UykMZ9DUQMEPLtcd9pYFuoMTuBksbgGo1tr5PyHPc",
  "key32": "qXzYzp848mTJpqyYhJyjK8TYKA9Y8pM5iwEW2m6DueKN86LwYjn7EiWiAWvkhc4V8FgZnnzEh8vfM7CgGUf7LrN",
  "key33": "zGUrcowimnEcHCBMcS2nYChNAxnovqDZt3vbSEF9BP7MUuGCPWrk7nXYzjGszATpHm8htVJATbUq9bvKyWQoLX2",
  "key34": "zoSWqcGcVbkeDwYMY8bxF1RevdMJDscrRRVDbaT4p6B3NWqpSNp76LoBuT5iiAKh2XFtDgtyoibz4eTxmoig2Ec",
  "key35": "ttquURB5MpGSoLn9dhMbvmFd4iYscsjvwyaKbiuRjn2B14aegj9JQg6AhTAjp7eHc6vdmBVSJyrCDHkEroLJ7SD",
  "key36": "33VmqfrjyjQZ5QK61ffXQHnT3yYEwMUBFQJZN95usGL6nUifVaMBvitusBFHu4kb43QQtRfCmaWDCYfHmJzdKiV8",
  "key37": "64JRiSrEEKJRNP9RekKiUF9XJFKvXDLsHAJ4Dxu9dhdWgDTe2NvuwvgtBWCYGduK6d9sE2xf7rXaSGFQbm9zpsxS"
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
