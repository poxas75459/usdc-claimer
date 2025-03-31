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
    "3fm4e1kKqPpj2apMxWy4WW2vCXcdSW2qEWZxCCCS7NFCKF74RVU6sSpj8FexBoD7qiJnkb1uRwvaFucBQMTWxD9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWhwf1jzR3dpk8YUumcT1TbUgongQR74J8RGaHcrdikHNmrGtKH7CVHViRbXe2mtNfj2zHfj9xFaFahNEw1tkJb",
  "key1": "5KebWb31kqYMxuFZCD2LHu1mz8EQSBN8kaZa483Rx9Z6TQvkRHyHuVaxD4LcmyhTT9vAED8d7WmZWwhxpscznXEH",
  "key2": "2fNLDFhXx8r9APnxLKedueQsJgMfpm74XW4o5t97nhHysTtVB5sXN3VrktJGbKZDv1ZYLsfUcc39A8AMcxRXFhod",
  "key3": "1HhG6QHgAyKvwg9GqaNjdh3gmR5561H4wXoLS2fRbe2kYS2wavHoTeU2b98j9WKBJMKxV2EhfJNsUZTpnnfzEzQ",
  "key4": "GH5526JALAdFj7wsc1czD9twvs15tNPwN8c1XEi5vyBHxByaBAumemKd2Ji8urRNo4KKo48qy8Y5uqh4Tffx2b4",
  "key5": "9eAAoUk7hYY9fREjtWFJVHVmgzrEXNpcixPgSZgB6EbaR2ETHF8ANKY1KKsAgdBbedbh26KdLr369gzKSKtb1EQ",
  "key6": "5yHzSuHsyq5X9jbVTkkUvx5h5XGKpPTkjDV7vvnKbacinCuxtFtMyjBAphdJ1Xvqi9WHnjpAkFCtitnVCNR2xDZu",
  "key7": "rgoTQdKCV6Z8HzKWQPZvEnCW5Uj5KuFTeVpm5nrLxLUAFE4b4rSzfCY39sKahe7fe6nYmihXJndWoMEUAY7zwDD",
  "key8": "ocq444KVwDcSpTbPsEE3rgC3jL3F9WjKoRCqepHv9ZkGpzMBKXugUSk4QFiHrLxEbTfXEvkjQ7UnmPrp3Bf7jNH",
  "key9": "5VLSzeepuhhoZ7gKvGmbnUyvC7ZbfJ7L5ffcr4j5Zv9kRgv66NbAd3Kw8birCFLCTVT5Jh8ALMNdvK4fFpTphWpB",
  "key10": "Jx8Pv6oL85rxia9jDN22ZncRyCnjQ2uevM6CrEdPULJFejv4JB6BQeavyKaQ5RGx39iXJGsnViTXyyM46dRhXuP",
  "key11": "5xNthEGgpPe3UvRokTXQoQSqnwhU3w3LjgnCY5kMpsYV8yFJYjqxzhkaSG89ksVifxJea5c3GJK8ZQUWK1yZeRCn",
  "key12": "5ETyPhHH8zsC6y73aFmzd6Js2vbAfrKGrjLaNeVzN3M8R7fSob7SjtLNMd78SwregTpLh2QAB46Kat8zUYxkQpiV",
  "key13": "21fQBAn2ce9jBeC9D38cNstxfYWDzrABgmKrMR25zs8N3m8Gurk1hS2cs5uXx5zKtoUMJ24EqmGameqBgMEEhrPY",
  "key14": "M5Rnz2wQ4KFFwq1rvBWg5q39hk32K9bwcZn3SnVQiRTxwZeQ5katyr7GrHd5dUQmq7LNMN78BW9zZJtzXdWuTXC",
  "key15": "2ngKhxwsHMbsctaQy7qwjF9YMqVJTAwaU3HWemBS9w2B5UyHXd5XgGzx8CwebmabXehTxhpjjwtT8Ry8qJtat5fP",
  "key16": "664ensY3WaFYsQASTGNjUn3h6oMi29RWZw9KAN9sDApCVHM68iwMPJu76t3RvUrkuC5q4N6e1dZRtJ7e1Kr6eMR4",
  "key17": "2ckw9L7xm6VVk51STEAVQSwKrHtJww1JJo8DoZHfoe44PHRHPKh5wM1H7XgZEgCSX2Sgb5ENFrkZ5U25U7FxNRZM",
  "key18": "23vhXVBPfk1MuAZp5jtRSa5V8VubxQg2rDVv3zVvN1c1Yivizf8N2mRukoycsVxBsmftd3u2p3q81gJw918M5b2y",
  "key19": "2RrrfW4Vx7FZEunKg8Rabh1dKH2eNXygdEEfU22dBeiBfu7THpwRDXbLtCLHMgBo9MAtMguChXxaFhtGet88N1da",
  "key20": "4J63FGZekUAK5DDnRfgy5GVLascUxBkiNTUwnx3CsWNjrHk1nCF6oNHucdhUf4YiB4725ouehBH5vgdF59sLm9s4",
  "key21": "2Q4cvZzw79gNDeL8VAw8ezdRQuvzSPwpFujv4b4FPFJj9iW8ZnidXwHpofBbo2PGzds5M1mvTLfuY7bHdcjViXB2",
  "key22": "2KZ3wuo1GREXN1DsZtQ8cGYqvpZG3CKeB2C482rMf5wu1N1AFCpZcYWtE1pL4khae7gXg9vDYLvG78XtB8vNJsVV",
  "key23": "3VdQTrk9qNp37eQn9Vh7UpGcHtTgeoGo6LFM4Ytc8XRvdsFe5WoeNjbaHGz1uwPkQNEGF5fgFVBaajqNZXQSniMB",
  "key24": "2zW4RqvJtCBzo4PuMxkzAF1QcxeQSgThzV1He4gCyUqjm2egdzvpzcD2yo4mNQ96Cv7odGKaLHrSkNvHR7zpyjWN",
  "key25": "w5mg1B7v2c2pXch1pLNGCXmzcZvnb6A8pTxSFJfDMRfyeuWjxAaWETgGhvhUn9AGs3zZFfjVwMoc96MVEiA9PUV",
  "key26": "RfHKgZ9mpdfzTkRqkZkEtUSZnkUnARZPWW23JoWLSZcLzXW6Vn3BLNVW41Z3Q7wSx9qKT89zHdKcNFSoxC1okb6",
  "key27": "9196vbvqdyaUXeENsvcHGupAGTRch7UcjcRqkD4seZPqkPfGbuMNqUDVShoXyTXVNyiPGhgCnS8KRWkcuVTMaKj",
  "key28": "ZZujirKiquPwBgz5s2fTDc9UxaYVFeUcMRrFqQNCRdB1s3wkhHfLTqWS68gD8QrPBKc8p1RvVXW9sgkxWWNid9H",
  "key29": "6UbapBqM1bLVur23ZKdWgBis4B1hvM1wqeiNMxL5gsNqHKB7YGbpbPpBrBapsFov5SAoBVErEbu3Cb4XwppDKuF",
  "key30": "1SYbZ9F8k8vSYAjy6mK9nSdRwWuE4v5h58dvhPYxX2th9NHFVmoDC2J1Hx9c5yVWm4UCRuvvhLtDFDYz95mFhMw",
  "key31": "EMnNZvrLBWjC6TpyZaqaYRBoDyiJU3wy922Rq9QFzZXLWCTTPbC3VjMX6cxGH3pBVzCc15QPf1JfSvppMpKurfr",
  "key32": "cYWqThYSbq267YqbVnj3GFr9sPEgM8Z4GgxBy2wxZJDFoqNE8TiKaVtBvFj9nXRpGJcJVRfn9KUnrDSAWyN3RH4",
  "key33": "4bEXugc4brBUvKL43farNyHdY6AXSMM8Ju8awxs6KE3ZzfPpmA7sLkn4hK2UzZAHMwtAVMAP6tketZubZJVgH5cA",
  "key34": "pEyup5ftwqpJkNn8mL1Vyd4PBC4Dsah2LQc9WTLnPejhw4i9N9PFdKfbwuSNtX5CXof7bNhH6ikt2eubksJA45B",
  "key35": "2vYT2W6uTKYTh1YqfP76HFBHr8JegMKtuMQcaDsCH32mGzCC7DLdk2zdJX4zfmbKGRD6u8o6dHRbBwJk1M3i5BMH",
  "key36": "KhwJvELcvuwvcfCqtqw4EbhU8Caz34WEzdczCjYgz7FxtEpirgMsmB8x25g4MbBuXXkJAYnASKeFFnpW8DkHqfP",
  "key37": "2aJb7B2saKEcbuydoNuzKpG8Q4p46GwtLZSdziYgBDfrPuEtT1TPUZZ7Q7C8zd8PkjKXM97pGeRhnswAcZ7chxHh",
  "key38": "4h1mFzLCR4iuJwxD3oTppJxvu42MhF9ZVrZTe6mEVygeMZorUm2jkCHLDRFESxWDrXoS1BCxk7kjzTnb3Ap21TrC",
  "key39": "491bjH9N6zrc8SGgzsNUQby9JcrGp8UTLrKvXX3e4uM7Jctp9TDk8nV36RAnE7mmWYMhUbDcsuuRsuQh7ppfUUyR",
  "key40": "cEuqAC8cktyt2zB25rV32qM8i9zsBMD6mtUFctFpHDsTB3SFv9qcJRvxVtqwHobULxHqtgrkM1stMebYHh2mx1a",
  "key41": "4ZVn7L1UCdehTBXHxLvkGHEX7M9SjhvFTJPdLWFiMKLNQUTtyGkWTnZ2qaG9MDKq4Pr8CXsbpVEFyh2xJeCN4iZp"
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
