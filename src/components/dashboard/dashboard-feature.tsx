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
    "kkCZwZ2cUVucje9Ro9LMxXYybzp8UjUYPvU2uRLB4HoLgno45a64hAaKM9rMDCeNj1kUrnh68VR5dBbPGjWX6wH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6tHcmkQ2qyFQrMHx7zyd3XZ1WwVKjR6mgoBt2VVYfKvKpQRMJykm9HBhh2x9ZZoBDFeh7G1fBZiVhRMTTvAA9h",
  "key1": "2cWQnuJxhLAHJ1X9SiAmfhMrjxLdKxfP6BoPRbNBRfrnVAMpBiTJbda4maLDySdkFGCGSFQ1oeoVET49ERTWstv1",
  "key2": "44vQEXQ2G1gS39tGHma2EZRr7aZyDpHrSaLiHH1yzVMi6kmGmtozknarg5VotcekX9eR4GrjKitFQ4josSw5YmSb",
  "key3": "5sGknizm4gcH5XciwHC1MRfhdSfM3yQR1VcDo17a6936nE2ZpnCcSnmfdYFMHnRTS55c77M89Yh656mp1dnh81jB",
  "key4": "3D7KpxkNDw17veMxTCseUp2GZLJoHd8mZhETe7FWAV5Py23DQ4hSvHjyRfDxyNYz9ctzEDtho864ZnuQzPLGDUh1",
  "key5": "55ve4rGsuKqdyYK1MVypCEXhhMQ3msWdJWM6JxeQXXSeSk2hPZs2EqBnzwUqxusrhegEtg5SpMx7Z2UwgVwBHcYJ",
  "key6": "KtRPaH3AkC7EjM2j85Yzavath997NAKg6tYfnbHLDz83YPN9DZexC8NfTfJfY1mfo4qfXCFsJ8DXDZw95VtChB7",
  "key7": "4xvC6GC9qH3diagqCWiKrYwW1cYBQujMGdEBALf1u1QSAgxkUoG6fw1JmJGvcymrLeKV7bHcWsU58wo4sUHY6m4p",
  "key8": "26zbcRQc5Ny9ifmB2hATpPCAiRXpGBCGDuPCfwyNCkaRGkcom38fRyDUMc2N8BTfp1q7CfMp9PANadmkLAtppe9b",
  "key9": "4eBE3QvmadH6X2ceaTWrrxNPn5q7ab982fPvJvfCnwhWBewC3vnnSuKoyKNTVf3dbWnFM1wQfua6DNnXz8VqoBFk",
  "key10": "LaPzTkT5p95cFEjjxpquW3FhMjZSrRuQ6nP7HMgChM8RuUUemTVibnkT4F9YVQjdTSC7VmmKg2oEucbUoQURTud",
  "key11": "3LzNT2CrXdBqSznEnmUjLZzrm4gX37JpLKxkzpZR8Ud65ZdguGGeuASRKhCcaU8juKmBfeiJtotCisfs698KtW8h",
  "key12": "61TRpcn6RkusTsH7qPZRg1TqUbLcw8vE8mbsSW9LoMSzGH1j8YNK3KuAvNYGiJ6Pb78TnaHrikTvnHKXKUqWSvE1",
  "key13": "5X3LdPpS4qdAbaEKzyuMDTzcPs2Sf25SknNXCf1QZ6u2JtyKsap4zVxk2SNsGewhHM7pLwZhDgs3AyGni545swvP",
  "key14": "28mvpzaf6XWvvvbX2zjZGjfQFFJWRYTkNxLXDJbDsoChnTAwddNW4quA8H2BYapfWj9tFG51B3s1ssCwFyYm7J4c",
  "key15": "2xebCcavhw2P6fCWGpycT6dp7LZJ4b1fuvc35A5N19nNh7D5iYVPgyKe9Ugd9zMyA1vt3XgRu6i9w5u1EhHvTMaM",
  "key16": "37Jazc5KEL5RrEa8Zz7raK31fwcRPe2KdC8E7GEuMjNsZATc5Jmf91e8h5GaTqda6kginmsBSubhUazmRVErX8aa",
  "key17": "4R1LnYwmFa4HebszyNgD9D6aAYJ5gZpKErGdYHce13QnDJjJNAAApmkh8FhadxGC8ywgkGEqjuqU5T5NHo6k8svC",
  "key18": "1q2KxD6WpuDxWR8QxpKLCSQYDVEaNcdQV5pHba2LFXqhQF2kqChmg8o9vWUgZWxuMDezyuhSpQTDpuhCwho74Mi",
  "key19": "4Vr8swAKh8cBf1TY4FMABUPG8RxQ14CTWTL5gfYqqMgDFrMMUnv6KxMiuS3yyD8PTmtJUL2LeiANmMKD1Snq9R4f",
  "key20": "2c6rZr5fh8xAPnFGCJCxqXbdfSCo6Hx3g4uKC1X27YEHekQVTWG3ns5H5cqpDwTxT6ifYoFtN1fkYWa6jLCfNN4D",
  "key21": "YonzUTGyHqEFxRbagMSRD8wQSdpeaYJWcDNyQWyUbukmi8XwBHb3HBEjtDCiLaYjHbUghHReF89yZ8bRG46rucW",
  "key22": "3kY3ivbYhJJA4B6FnWZcsMVSbeixcNVChDxcufVp6h5ZrCkDipGp6APP9orrSg4fmKGYnAz8GeZeohLeWvKSYdde",
  "key23": "pF42izpKsgdPxpn9T4aPAqrebz8soryGVo4BvL2ZLeZQF56S97tQmjU15iTjR6wPfFLgryUYMzFd7pybFguJM6h",
  "key24": "54AaASFaNAkMJYFGHT71jwcMsAwe6aCmu598W2JzbyPcZoNmVd4orrHyNpEin33eHUWXZKqb5L1WAhKq1UZ5f9ie",
  "key25": "AMGuDjTQutyKmVLRThM7WUJh47EfTqdLuSNgAMLULJ7sWHBYm7uzv19yh1ZTaehBKqm6QPySeaJL9RUe1U7ZF8H",
  "key26": "5kbrE652YFmq1BpcaX6Two4qY5EJwnHt6wqFhmmJeEkqW1Z9FJYgGmq6wnJeTHLdXy5eV1CU2dazQMk5RgJaynMf",
  "key27": "38YEtyxecHquCTMcZ8JfPXE7jmhXpg8qFkjSKNWMT9uCbPyBd1PZKVfmNy6zLnExbDBe72j6npxbrR27u71s2Js",
  "key28": "3nMtwneNT9Y59vBPHYgYwY5Xm2iWBNmpayC8uMo9Tbk26bhz2HekWygDpb2psChNikJDrfbW4kGzPe8WQmStt11N",
  "key29": "2E6keKpPGKfsaRv7v85PTUiWeRyS53RWtJr6qb3CbFYokDe3r9usFQtumbgQcm26sqAmHboaHJXpE2Amv5nPhGLj",
  "key30": "2nZwVGMunPuTw6P8F5H9MrLQGrBYVYWgZz1Xqj4bBUfza1QqRpM4szvPNvASmNVARq6XfFCaNQHyoBcX4QJ3dEfo",
  "key31": "3hNiuS7HtxWVg1urSDnsvFCUp5haEov65T3Xo2STrSjf3VfavgYyCCFUZaLbgv24eRnFftq73mbsLQ6U3UxSiexL",
  "key32": "36crydFLB2RNYMVuWTpzegQ3vbWGVorSe9VowNZjacV3zBo67zbYAxrtWZFYWuYb92Q37MC8BEbmHHsn2smc2L3s",
  "key33": "ucxAFaNzeM676QKUMSgtPj6BVXCjxUEmH7qchao2qYAdqRknqvne8gfkN4pJrQbaMTWxdyNuJbupjN2h848vdjT",
  "key34": "5xE8xBpveGnvrsYcz5rA8h7g39jRyGRxs8uasYx1UPzuWk4RQEYS1zGvqsa6XzizJs6uywhN9DAok8f5b3QT7MEs",
  "key35": "3KVTktJGqsB9U9MR3sSXGmpWtAg6y8bQC9YJLN4XN83N2vWpdvN7e9ppynNwh9LNkxZee1Fp8NHxAqx4Qq3Jatuf",
  "key36": "2Wcw2yMCciiHtc698ZkzwxWWhAjms9BE2w1HoTWKNEMLDgXYKGwdv6BFP2NA2qVz17Yquspyrr1KvK7kE9LNf9uZ",
  "key37": "5Lu4UBbEPJaN5eTKz1MzzwFw3Tnj72Vb4kCpfG8XQbTwRR73U7MtFzvL7N1daeHrE2KxzPHpvcjYLpuLsZSK998b",
  "key38": "5mMJ3CxvYA2K8moSA847r61JeKuVQF8jzLiT9PPEKhyev25ddC3C7bxosEAabuYuedkmH5thTi6M7frmfHGEWSMi",
  "key39": "3dtL71x4XX6c34QFCDA2QRHjUa8eQfZgAiHeHaq4ghv8dT7CVzebKw7rkgnkyKUjiwyVKVZqVB5QQNGhHxvvxv5q",
  "key40": "2kF4aajZwymTton1QftWMKQnyFHpxd3y6w9888vt3Mv7ZNTPJx2rjxyEkEN9zJu3KJ5vZHFtbBtrHJre2zoixV2D",
  "key41": "sHkoycJJYb3iHT8X1xp2M6ERbsBeyU9c17kGgdAzRa8NCJcX7TwY8bomFA7jfeUoXvSnzBT61x9YVB3SyLYLvZg",
  "key42": "4hv2oH3CPXotpmWUcgKUdQSq1rK35mHBf4uvJxPr86y139HBC6rGJHUpEd98uMRuMwVd8ByGB41YgtFWF89iosUr",
  "key43": "4RLHmcY49R98suPFsfuo8PdnpFm7h4fWujgM2i3AvD7awiw1rVGJmEwmVKQ2W6MrucvzJLVwTAcKs54Q9sjbgupc",
  "key44": "3xeHmYaAS9uPWTY79veR4Q9Tvo7XgPqMa7im919jrkqeBnUXEeE3bqTqsrQgQ7HcBn2SxJsF5s8qyichDd51j9WJ"
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
