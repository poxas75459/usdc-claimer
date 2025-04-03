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
    "3nRV6fvh5DDNai2VLHMUWWvJPgusL8TTbKuTzJ6cE8hCGtXEk6veBCN6mtoWuMnYsXf1JggQn6HQjJNVqiDPN6Zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqCFvpkK2C6CJyhogyAYra6UQbumFBb3E2KyXjRgkPFbbcQe9tbCSubJivN3k66rw4BiGnA9hWmAaBzSRcaNJNa",
  "key1": "c6hkjo44VMKHAbRz6cGUBoPPGagPV9TkYEyKruzCWAaoc69BnzXH1FFjiKaJFG4QBazWCWF1EYbt5Uocx1xdkb6",
  "key2": "64jEasmhdZ59ZbFCErx6tzK9F6FnKGyGffzfygg5NmuZjsW1zshGmqm7saQVodiFwA3cJG2R16sFshY4DBqLSMxR",
  "key3": "R2UxaATExFwXnqyu2cXnHLgNzDhrZDrU77EmMJuRC1rpEF4jbbtpEjg5NKY9ckwUu88UsWkkHbR3GwYM9dJCEnG",
  "key4": "hqKEJg6Hhgf52PXEHxdLWRP5QdiCjrpNtqVzv8FsRr5Y4hoS4n7WA2avH6ESBDtSWm3di93aXT3bQppwzRHr3u7",
  "key5": "3DxyzTm2VHK3N2TJM8JdEtEX2mqet599QyPTrjXNL6jG1QTptz8DMmU4cFjpd9vsKDjUWKH7vKrk5Fe1JA21NZJJ",
  "key6": "2a1iNQjzuZ2ZZVasKw7c8k9SgrJSvS3uNFcFBQAupmUbJqDxCEzy78djqwBjfeC6TckeY4vyUarRb8VoDnvuCuaq",
  "key7": "kjaicPTjbd489gJ9c9mHd6wc8ZX5LNzJVJuT4UUwHRuPSBT2dHNQbbsVL2Yg1dDjpSrLrDhX2mreiNW8fANK5SD",
  "key8": "2ZK35xeL1MaQrF6EKDMKwLh2iSdty2XCqhj9jK7x65Hc2EPF81avjoGSmwkyaSydTByvue13a3Qfp5zibpwmkc2B",
  "key9": "UuprooiTPTLvKu7eWnaAnsESDJNY8Whow7945repRSTK87CSve8E66oEW9dC8FsucSPonvJ822qWVQhupjNzkwy",
  "key10": "jUuSmpSmdrTQYVv5QsiH1hR1P8FNKYRNmx8zbMBaWoVP5dBTutaW3mb7BTsJiRt9GkLancTUpNAFcadZuQ8MmQC",
  "key11": "4sZipPzuiSqeHepLRQRh6EBJdQtEXwwiBZfRtE3Q3eHTUgFEjxEbdZcQw8dGEfupJYq3FSNY21Equ9GXd5axDLpF",
  "key12": "2HPMLUk6N3vZUNEx3M4BMFG9nEgMNzCZ8y73c7yqQuUtVGhaSFKnj8acvhMX2McU5RVjWpCMXuk6pAYvwwEPiYKG",
  "key13": "4UjBd19QVZs3EeQiwSMUbat6MSLypE9gCjuDSenBpS9jzJVxDHmmLjqTeus6pfWSZD4jRWmEv5pbyMJxruRktMCU",
  "key14": "5h23znoRnhq6FnZwwHPfR5Yrf2d9VQdBPoAzqW7yYAXAH1oMqQrBc8K4PumFFLXn1tt7WgavSetKTPVUnbUhAhyX",
  "key15": "55LCyLtUEba3GiZVa8ppoqkBnbmqo1hSujruRDknP1infs7gzMf48MNaKGsuLV1q2ymxkScpGRz6gBnbJM8LB32T",
  "key16": "nkAAFxfWYpBVRLUEB5TtMerS16hDLFrgPPs6tLgatXvkgymtwNnveMQ8acH8zU6jQNcZGYMtNvdaeP98gLdcnqi",
  "key17": "3KsW5Ubua5FqL85S5HaDo3Lwb1QJEukat2ecgXu9r9dziENDj5F72Y2KwNwWU89dgo5JfuNkmQ51hxian1i5kXtW",
  "key18": "KcmYf6v7cU8csu1WcwKdzic7BFrtmpP9X6Q54QCpgnVWSYgXZSEFjE1ymsDiSZKFJEXwM9F8thR7wRD9ZfPgT4g",
  "key19": "2br81KC795Mo2pUaegfZhoefLj3b59CdXgQntN1i2VWyAo4CKxi2cMZpJKmB9GKiDHGc7c233axTifU54kKCSQKV",
  "key20": "3VqkyQFYmGDNqjUDHyKCy8jvdBCqEw5uDcuKJU3vYFUSx7UBQQ5DB8nKW4yEWMjrRFJcpzDtLcokqHh3FBW3yCjZ",
  "key21": "LSDmTc9BL3ewvsjD5ZLcqp6rCnxtVvnqwbKwK8HwNfMimm8Pr5nK4xuKMwwgGiVvkxeyvAv5D9B9K64JmBB5w49",
  "key22": "5miceL3nPZ9XStGikqPcLfKNNnwU9ExUou59tMJCET48XdgGpiFPtaHNuSXRcJKrN9J5yGvWDCjUbEb7k3ZrVJzx",
  "key23": "Gox7hZzEcVFxnszDBYA3EHBxxPVrftS3rzxRJdgDcwScCxpgbffnAN3jtVTrp4w4vR4ngwvDBamGApf9Wa2qEfL",
  "key24": "2asqBqTGj3caN8jc1k7ZoTq6txBm4cXgKkCZaRxRnUE5iNgwgzvFZhee5qcaCV9zpPmnrKGqUhtnuzXDaigsBfkm",
  "key25": "2SKZuyV6tZ2sN6pjsiWtRnedY5XQCWjAYE7FZ4TfSMgiU7bKwNpz16FAqQnvXJ2ijDE6LbgLEFcaN6omiMkr9BbU",
  "key26": "2YMNCcDVb8BCx8bk3nrFw6fEedDSMokNQuUTqp8FXiTPWSQUzN1fhX61CNAcnuvfEcL9wUXEr5AoWt2tL5Hws4n",
  "key27": "22uqabC6565uAiNSobM6HfDdPLCF876rWHDnfYZriUYBw1s979dmUY2AHyELCQZPN1RtUwD8gzuaqZXiLMjDUCTn",
  "key28": "TAtjH6p84zgz9BWTEcQCBg6EhiKBeBH2djE5giAkKDTE6VJV51bbjQzHfFoPaZtQBjvHGYztsUwRH5G6d97dJNv",
  "key29": "3B4DaB5CxT1t7iDwaB4Dm13NKNcnhdG3zYEMj9caKjpcwMuYTXmofTYMkj3m1WW8TosTEcumHVmBwyT7jsV3rLVL",
  "key30": "54DLD1D9zhFL46fDZFGV7Y9Cxf9As2UsvoRxiZRd6FzypQDdw2rBFRSNA8NnKFRNxuRk1kVKMSEaw9Xz3BkJWgvY",
  "key31": "3KkxhoaR9bTGa5XvN6hJcCyw9DDBDWHWw7w1m6fCDUuyQStLvu6Ak5EfBwkZVCG9y46Mbe1zUWZKUSEfyFqCupRc",
  "key32": "35hu4RwTSvhXZDMHCXzLmEefWrRckTHXBmZRQ8jQsW8tqkmMpDUHecmppM4ZjFGgtEfA5L8aVnPApM9d395Lx7mE",
  "key33": "NzrmnJFocXiY7te4KKgKGvxXBAXPSH4sQLy655PYpqNQZ3j8dYGUmHJHejWGEHRsYwDpxEbf5kQXDZSK6Sd9iH5"
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
