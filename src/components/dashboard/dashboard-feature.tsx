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
    "28DxZP9u58qfRuQTWd6WungiqWcQMcw5CPy6Bk1zS3pKgtp1B1KzRJqNKBjbhtKsRe72GVE8AhpUPhEb1J2nL6En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WauUnWw2AWhe9arZnbnhHwpX7PxArXUtr92opGV1MHtMcpEV9yiY5yPb8MJB9a3Fcg3g5xmojWZjsLNsijZB4u",
  "key1": "4fe9ZnxpTupSH5PFzARFWsyFjWC3oJkmveX8sm38HJ9ysbgN6q1Lfmkr2xc7nCEoioyZbtfYFvF3qghLJeGP1g7G",
  "key2": "57xohGgHktFnTkhAFLgbFRqc5KXtREU5k9JmgS7GXNxFFfSAsmVYQJEKgVtU2k7y1oM31kj8jtnT92bwGcyBBSjY",
  "key3": "4tEYxT4cXcb3u4uFGph76zjvneGoXQPVezeCoL7Bs75mmjmGUyJph5awVGQBYNDVUdpAa4rrctnpcYNdPR6d8fsD",
  "key4": "2P7Rg1cm7JWEDGU1ASrbGXTrnBqLMkPRCFUb8FjKhRCM1LrVFSYu4THrYEkroJLTKL9XU2k9t3AMugW1ZNo7fUNA",
  "key5": "R7iNaW2CiHbQbKiMZK5ScaMEbwbERSQDE6Uv3NhBR1LVhG6ZqtsQtFrwAoGyPJBth9PG8iXs84fBLtWvgBrcG8z",
  "key6": "3f3kf5xxZ8PTEESqCP7mz8bH6TUCHP9SnJ74c6z9bSjFAEjoDCngn133a6aqGePbwmyMv7jmx9S97XhzsTr67XQ1",
  "key7": "5yUP6YbZhZQMUJBxjqEjRBHithnEWCvx5mHNrjDAGBumstnVzYWs2wZ79Jy4W6Td7WWSoZWkUw575nbDcasQHEEk",
  "key8": "4Ddxs5F4pyuQac3RWY41xpHqXa3Mk39nwrrHkYSuM1cu227AAyQUL1biAnUfxVu2Fhrguk81tqajyoqyrWngiZg9",
  "key9": "VFGNS5oyccpYodsgL6Xi1pCQMvs1XXYKtpLQDKPnyFSm4a8gjM3csdwV7wzmdX4SyAiHtdoY1Nogwc6tJusBz9Q",
  "key10": "PJxZTuRL5xJjxTdyB6UkfJ8auMVy3P6PAbUiBppGhYDhTQABeRUhAxadC726XEGdim3zPEa9FLkkM34R9WfALXx",
  "key11": "42RYckpwGPshXYuxiam1b9SLGhjJgPHtT7kRYPKiMnujKXedB6bMk69DMmoQETBPmT5W6gKviXndNdUEFibV2GQq",
  "key12": "rBwi2SW6DLuzgx1ivFQQuAa3xhVjYMyJ9gGbV9Np4HrEGbZroU1pQWM6j2AWUayw15H5ea33EzFY2hSoA7Pf1AC",
  "key13": "4uEhfNXUTizd6fzgVh7j3hvmGBz9dURfeEGzdfnMSVUSaxBE7HRfdkMqtdqKyps8dCxgtJEengbZ8hEYQRtEFRAE",
  "key14": "31B2F2kn9ELXGazmN13kYCkwkTMYfgCLjdG6u5S9mrx5StXQ39LqPrD9FSFac7aDLrEKdiAzLgPgCYCni5FLK4Pu",
  "key15": "Z4ho58PRx3SpKDR8WujofqPZgaDo5Hns928UE9bpYWCFnetKKCGkcvN9VauT3umrpPJFuWbxiHDbrKrCn7Zrn81",
  "key16": "4dQteiVnTLSVr969QnxnieYAfVhzqzJNw6qSfi1UM7Sav9hhfSsJVA1pyE7JrYafyb8pdP5m1ZtkLUSBQwVv2TRh",
  "key17": "2FVBUu7S5oJHFc1Y9QjnkCej4ZGyRyyj3cRjuBiAHxZLg1oNahLcMVyc4qF9q5LKARm8oQfWxs8ZyLZcoxrMd336",
  "key18": "5jpCKLMh4mB4jxD4XQDYDtSuSUSrJvzU9QRdzAWW8KSkBX5fMb7ffi5rNhxgUAu17ocdbDGPSmtDiwBifzBUoEd2",
  "key19": "5gEbiN5pwDtHwz2u4aZZASyqCnZ452BAreguaSu19LuMXT6Suyv5sdqoNtkc55VLMYt77zhAjWEmyHetjrPvauJd",
  "key20": "67WPUFbZhGgL2Ti438vgTeL5rrDE2xaXzURhmBPor5gYBTrT5SqZbJ2kpP52fFG2GLJChU9vkBVYZjaZHrwREMRk",
  "key21": "3KCeT6UknrTd4DAaWEKmvUgqpVtgsyAQmyx41ooNnRcnkhrrdk85RhnJGcYkpiLwanXxBp4V65es7kJV5r44Qp4E",
  "key22": "5s96EqZgfSKzEhK3yKFkDbfEHo9PnyPUYtC8U3HNwihxuJWDA4QVFqt6mMt3TuJdWJf6fUmKtENDnigyXc4BiMdm",
  "key23": "2HJQKYjBSvPTAyBTLe846ChuqTTEQ291NUj33gQPUoK5WhjjNoX2uDZLgX95YMeevNtJTZ8y4K3XGLdzP3j2ikxa",
  "key24": "585rbziT2do2YuU6YqyGQ7sWoi5J5LmdyXFr251sMHNEDBnMW1C3FHQMQKeVmmgd5MgM9ApyPdR1zMrBB1r2x61k",
  "key25": "3T8T1pJEfh6Zv3BaBEVaTBngFUBv4hJB262gLJuhc6dsUW54S3znm1bN5xgVBfi7ANhQz9gDjCUqPKYEFsH1XbEY",
  "key26": "n3hKG24nMV2NC7mNaxPsbv2R81vLmy8FrW8cJty5BCPWLXoDFrgMT5p2poC3TeJjXatyU1EYhZRr8VgJrXgddA3",
  "key27": "353hwstmuz8gC4HLXzShKytEF4UiHjrGRdYqxdrQDVQwnGK5pc3rZ6PUeikjXPDnj1Y1rp1GZHt9DxDV4qE4p3qp",
  "key28": "5iw75cRcjNGBRsceJYUWUsKjGgmWSbw2j44iRhYatCiAR1VybHMhXsDMtJdF6du9dxukUHzm28V9AFXf2teUEjzg",
  "key29": "2keHtgaet96WAB8zDAUgMh5oHMwhPUAWye5p1bM5vBdCwvN86KWtsDEgXqvxDKM67BKgxP85v8aThRvFddQYFodf",
  "key30": "btpdgjCQ1iQHsCMhNWL7G7wmsjBBZQkiPkA3RD2PwuAJSn3puJJfV8Uj88r6E2CfUgVrG8JbyJMcunvUz3Sa8QL",
  "key31": "5ySg3a5ivLRxNiE9BXwEDkQaH3pc5tijGqqboCbcohwNr7zdywdjrAUsJdpgkZU5dnTAy1SF9ymSVPC13g7ig7cA",
  "key32": "vXaVws88APZnxVvQfVnqjo2jdxXskWLBQwQULNiJQT6wJXSamZzqH56HqdPcDmMsNh4NtN56s22w8CUyyS94vra",
  "key33": "41nDaH2haTc8ZqQCqLLQYC6s54oMPNmgcu4qynq7idsXce2Y1yMtsGUkteDjSEYqwAkV1TER4DGfM8Xkter9yeJc"
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
