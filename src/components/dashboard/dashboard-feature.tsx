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
    "3NijqyayqEk5ZMJMSRLYf49mw8dLfALjsxMHfAM7qRceskppPZVDRvMryL1wMiQPynzJHmkHyHjEBSP66X9QsBcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51EESY6akhmpB2uk99ij64p1NTiEm111GseCLop4biaWfrpZT6NrUTqPYcs98iohAWnaCXbC6xsYJoxiwPmWkJoG",
  "key1": "5uXXhrWFKtKM3KjmGVvBAKYTgtaTqmV3BDu9TMVNrJTn76Uh9kt5E9MGfLTAg8XsFDwJkbLT2pPXSe3F1pEWZ1xL",
  "key2": "2ijeykPq51s47zG6YMhct7MUorzsGgFBVagoYtq4zkxJDUjVdFWXFk5AGf8YCpVUCG65757g1kpLbwRqgEy9f1dG",
  "key3": "4Hk5eckjXzzohR5y1T6JcYV9H4tBcm9CAgKNgr3sYTn9HMSNvT3RhNCrD2LdVvTe468bA8dV3Roq2SYRP8XKNgkE",
  "key4": "56CiGA6HKR6TDr28q4yfqoP7JP53wtVf1jhbPb8K7RyEgygrgSTnScvj1gkYw6KXPbCyK7xFvGPNcMJycKLiPGGD",
  "key5": "2pkgbJCcqYVPaYMqqCyocTCfZXQBPWcbpmGgkNgKg7Vsi1whPmHPA97jxUvC4ddt9CDwC2ZiKKyiP6KeMLu9f6CU",
  "key6": "3XeXp1cdwD8Mq6vTMMn8NoTVyZChb2b3fhg6RyWi7Zx6psRWq5aB1Rxh7RFPwQAHCPA9J8mLQdREjiGG4VbCUcQM",
  "key7": "4EYKhooaj9xCExWKXQMKuL4CmdaofjHwWQX2BWT5dt8JnKeVZSMRHX4b7wWbs83CSxLi5kEKQR79G6fKhFd881Q7",
  "key8": "3sYJnzz55AbGPcEXF3fpgPn9r7ES7eDYUyxw3gXHeo8xKQVHgXaSvP7CCgU2GDBRc6qQFXEQ9dw9DpyxYxKbCauJ",
  "key9": "vvy5XMB8PZe3JAxcksjCvLaPefT7Wfs2qFLDrdHS22x7zeXWUa8ChBi7Cw6eE4PnoUwKtogjv1KqNc9b4M127sn",
  "key10": "3s23E3dy4Tt7BNPv3aSDt7xJZyh2VhbRbFuMwpK8E2qUoBcRrardmCb2t93qMnjUhUadWgLuTE5uthQkXg6SAWLe",
  "key11": "5iz3LWDKb9r2b9VTR3cjWmUoBjJ36wmqWQB9smmRwbLwBGcR7x9iSshUE8xu4s9TvqcbHfDzjjYjRG8W5EbZk9J8",
  "key12": "57vRJ59t9ANxhERnZrq4gnKYej96rSAZZ5CkiAJ9AXG8ifHgf4993P59Xo6r7JRYS6QpnVdm6YrAENiVqG1ooEyo",
  "key13": "5dB5TaDzjDwxUfqAmKyL1ajvUXN3FJnN3hb2MMwUUrEfSjpSp48SRvVq7Sm5odb2fzpvcqZ2cokEMN2iFWSjbwet",
  "key14": "3s815YYWcVvk2GV8pHSU8Ra4MfGyaXCRVqPfowR3sPhK2vfCRw475TzU41pBwJCUFza2MrFWbESkQt7Pw7SfDNbH",
  "key15": "sNhit1zALDiATzX6LjhouXqvvDFvanK2Gt8TBPwuoKFt8rdKiWmaYUT6EKoiHQoxybFQxKyP788mFVeaxMMTw9i",
  "key16": "3mUL2MvB53FBer9uv3Xmq3F9VTXv72Ju7txSGzVxYH5EzqvGSe5GWqo5siWtov2uHZAaEFPoVj3So6sLG9Z48TfD",
  "key17": "61ox74YVSasM22jCUJKgHNQfYnXGcGsprRnrJQCoHh2Yg8PUexhsEEQYC23ax9TXagPmCF1NcAPzqLKGqUyXN7xD",
  "key18": "5eRpoLrNgF5whwnZF6bFPx9zNErPaa8uTkBGtsnLefqsnNio4CmFXj97t34BBHsDbW9Md6UktkQqvFZj5Egcuti2",
  "key19": "5cbGQFJsQR3z52DQjz55LBGxwfvj6vRipUzpSY5s83yKeurPaXubusMMPQeZKuZHRCwPjDn37nerBmXqsfHF2vZJ",
  "key20": "2rtFnys5Et4VpNDZs1WEznmu7x81v5nwcqNH3vQWi82pEiCY38ZyQdya6yoJJZnwHUfjNUxqLttdi5yL3QxpTwEV",
  "key21": "3qVq5MpzdJUbJmNkEhtQ6Kp8zpi199zEKCy2WKjXfWa1HN8oxkf9vP53ue7RvaTg67Jf4Fg2mpVFai53cs3i83RT",
  "key22": "2JYwan2sAcr5La6N5xMKsQHtCoq5ZFgJF5FR7y9twUU1hkddMqw7Wi9cdaTnejSdXmnREwbfpy1uGF2dvEzgHtio",
  "key23": "5J94KnvXHU79pRaZgWvV2tByqA7YyAi3txrm4YarHcZ4EjdZ1p4uN2adH2f7e9KVxSKnHXBba8cx42zGecbHrB8d",
  "key24": "5WYz33N3S3g4i2v6r6CS3jGWas4ZaK4s1qXdsByyUwLpr5qfYCzTHD4215AG1mYjbCS5eChDf3zqpBChM4TnfE6x",
  "key25": "3E2d8ZAGADCoaAj1n13Cghp36Lab1hh9wkk8seEYVjBbXeepYVEi32ffeN7ubGEwJmkyXd85PZb3rdsRp9VLPuCi",
  "key26": "3yQpNLBATDTJznqLGQZQHYT4PRUuU3q8j6YCfSrQdxUprF27eRrBBZyvkE9Rb37gJu4P7yF58TdK9X32kxSw6pKL",
  "key27": "L8AGjvm26WeG3pV4mysFVUWqu2hEVivVgW92A4iXbcBioCiriT52YyZrMbC21iH7MRs41ZJbhbUK4T5FLTHB1YQ",
  "key28": "64tRpBHiScJWMs22Nw9JfQKc7fiYAdeCgyFRtNEHerxqFAgwFbPNLcbDvRNdUqMLV6bS3itRcTdkdKwsAW6EDKxH",
  "key29": "48hWyiWngn2m3cRRJ1hd2QWx4shM2du3sNhr3YoUKtGyHhVTP55mnT9xCspg9LGiVa2H5CdtGMucBRAomm6N6crf",
  "key30": "3sgaamLWaXboEKy9kQ6kfRjnKtCsQfVkBuoHQwCWh7xyukLvaYe4NqBMuJhfLk4jsyNKS2pn24qVkx7Z9xthwsxy",
  "key31": "4hSL6cwE815Ckp174KV9u9viFjhz5U7uXryqpX7QtdNhutAzwrGRshFDGtxxTSNuoDreXfSp2Anx5H6c6swmNASZ",
  "key32": "3qkEx5DbZDCXywCUrkngo9XBHwqmBTavk5Tj2iABhnAqBmLrQ5MWWTtzdAgEdNMBEaPJN8cS3Gwc4a7AEDvTcTpT",
  "key33": "3B2AA3yttx2V5yhJ6QoDEp6fYtzQBSwoGaoVUxU7CLCpkdZgBC5Zo96NPoEURv6EUADPmJhV34k9yBWYcPgQYzBD",
  "key34": "XUDUtCVE8tUYQvbVw9iTrHfgLozn7tMMeVLV2kzUMLkUF7Q9RjAKbaxJyYnnKbPJhA7EjtRa7CEvFb8obdBo9AX",
  "key35": "PZzuYPj6gtrHAmRQXkUNc22YjMsRyuM2VeYfxvudLTcsSdJch4psFt4CHefi2aTTXfrWUrZeZP3Vnho82VtVZzR",
  "key36": "2t2Q8MUsc1hTM37nHnDWfEM3G3y27m34qrFN8EkQ3h5FAHvJaKuDPj5nLx9S2wJT9w2axJXcKqsvbS5B7KkMPw5R",
  "key37": "3FAaV6ZN6CnHkzT8h6Jq9py5Tr99cwkQYN6X7y27qMmsjoQuvwf6AhTu1gR9TYv8kGJkkBeZytjiQQrZWuSmp84t",
  "key38": "38nZMwTA6NiFULbHKsB3MbN1W9A8FJLiszApPhARubuAb2UaiudayTnVUoFBFXj9w9mXzRRascu5nNV6yhjcu2tG",
  "key39": "5ZLwhJZQZMjnDcPS3xECef2ibrw3EoGvYN62UsDXfdEmygempHwkCEmqiqfJrQEJCr4J4DgGXgSSA2zqbRCfchTU",
  "key40": "CWKmDdqDb7DSsgAYCWupNJHmev1shJgSXaxYy8EccEHoB9x8Qhj8PqadgKHa51W59ei8xqi6AHtKwxp4xWRiBh4",
  "key41": "5qqLksmUTp7HDVMHdqjnPcwUZGgcehfmfmaLhD2KLai4L2nQfUcPPCAwPk4Lg2415woFqBG8zB6dMihTNfSh71DH"
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
