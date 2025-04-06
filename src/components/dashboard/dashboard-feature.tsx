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
    "4H6dEpnJQ6eQmJ9nK5y3GmkAgdmcGtQDpzMUZkcJj6r2HZwD3LYuvqaYGrFXgdouPZ7N4iNspRo45d7hwjEE1Yb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eL1XcF8Ytdr2ARt1hQspdoTqWeoF7Y4FT463qvoKefGKUKFEcnxJUqNzb1ZYB3rqzYwruQR4KyrSiTYvLYyj3uT",
  "key1": "5LP5XRSGhecQEm3R8du5E1iz1cCnsn3rFLV9FySt27TZZW74nZ6bJMczyBH1juNKkUX82zEnAVBFDSPvVmovTEhw",
  "key2": "3wQhr333FaEStEEkL8THLTeHXtWKLj87jcdP5h7GGk6TiBHXRYyUQbaGEhgqCyPDNYUnywNjUkDtwqwZjjS1YXZi",
  "key3": "4BqF1zaZdeW5zjhifwPC1zRBvmGnwLEngiTB29UiWGTeemBqP1r2pasmcsJioTVwAQtqmg6K6etWTPr3Y7L6hUvr",
  "key4": "fhdPFrY52kGqjoD6BY5zbF5bMftMvvV5rzPP8wy3MCJtwTsFm8BSyk7YHgwRTChHy2dznhTLCFsgsZSstW2eCvT",
  "key5": "4QAqyRM2jFZqM4wqWEb7m47KE9cHZRLn53pzLCgwwaLXF8ZveY4vZRY5Co9JPJXpdmMPWc2gWntbBjgq24B8HBZc",
  "key6": "4PjouEULUw3WnpVsHem3Y6jtPDQK1LGgMeCbesWUkQoVzG6zJPHMZnuvHe81Z886EAyVPnMFPSibnB15oM1Au2bT",
  "key7": "4bjJPHceMHbcwYFSqxVMdXBFGfH8ea2vbqFE7R94EAvnj63cNpR2hndy7Z5rZhjPE9PsGW3JWM2Krw8MaUoXqh2",
  "key8": "3YqBx3GN8UqF89Z6maR4iMyTDGAz5sfDtnkuFWQz3byM8q2kyXoj8JKkrEYZBkMvpSncu1o1HWENPoKDbhRb9Sm2",
  "key9": "2EuYLmNdUaapqPY8xJ3mZzMGfsT268kW4usLPf1znBgEbZThTfU2FnZD4hozskvSo3x8esxAaiLENKEejMW7Gh6q",
  "key10": "2aonKx3GcHh3gKYqqzdk5U13NUf6mWbNsboJ8YCVKSkFcAbGV5ySamm5o3SH9NSfLBPvwwWbLm6cScfq8rQzQMjd",
  "key11": "4ieHfAeeVSxMWRY5ewu1Xbc4cy7fCqsYTFUSqDqNT9zQhGcTQ5DDf26rnje7wGdgQRVsL4QEM1FZFRcirGuCVSEt",
  "key12": "2wTvV9wfAcNLduHGsiC7E1nkpDkUzrd6mZEpPyH9XnJq5w4aU5bN85nNQnKAVzVrT65xB5SQqkMPwEf2WMGczmmZ",
  "key13": "2kacKyFLdKxNmim2Shss6w4KmbSNcvVTMCBW9hiCeuNoh6X385bRBxLvhPZpjqm2Fv4D9HETG7jzS6vejUpy6xpr",
  "key14": "3nkWF8VXHHkVPLcY9xugMD7cBUHHowsj6qKCx1eUBN6k19WXA7MBNtgPLK23f5BcUfqBSavzNbuFJkjTmHiRg6CW",
  "key15": "5k6ZxMrgkGrTpPfYAGmHqJgz5jhKMUZaEnWibcdaoRSgW2HrtbVWFtaYpRYmLw25T37QmDWunaSnAim3fEt9xjsw",
  "key16": "2FYt9aRnRuVVBt4sskUVfzh2m3wKYNKkSodiFkZ4pz7v6M5KT49KP5Wzjs7255W5qePmZBeLpqSMZHHBTsSxHPLo",
  "key17": "4jELR59dTYWdwHNjruqo5ve2MfCh8Ak1ye136vqFkj7CUAaZcMopDcTsASDAw1hwzi7nzQPCHJ7Nsg1XH6FYoP8Q",
  "key18": "351h5pa7wHXfqVrSnTqJzvu4qFd7Tj5imS9B5whxrngUYASXe3FvbjnUTkrhigNb1AoE6QsPyyFpRGpN5euw9hrN",
  "key19": "2ZgSCu8LjusAnTrHr58gaExF8SAoDMY7Jw5swUxm1wHCgQRVKWk5ovXfNrbrgdXgJRDpxDe3YLnTKsyFB8v88jgZ",
  "key20": "38b9aSqMAQ3DUdBHJNsQuA5g2MP9xKGAizDPaaeD7ucykz2VnqUkdCvrJ8QAFLsVmEoWRw6ejcv6vY5dt6sMzbMS",
  "key21": "3M9M4ZUj9FD7sTvN1Rye8u2LL3FCoUQezaxbRcu9xURzUxnoENy6QVUwfd62toyootwW46f9xaNQ7gRLgd9XCfsZ",
  "key22": "5qbsCRk4VN4XAqZqNZ3psQwEXW33GV4n5YfkKhY51dEm46ENbauqPJkpZ7C2tzBQEBxcfKdwQnegoygfvUCV8DaV",
  "key23": "4k2dbJ3VS23EyTZstNWQKZnuRhde9kEU9PZFsK7cHvUS9voWqzXdnh7x9oPjjn43Jj55E7VXYsBFSDUP6UULmvMJ",
  "key24": "2sRBTDTKfDKMAowcrvfaT61aiq4CaP3RrtwmpKeDfBFNFzhP1gdzwUKVFCT7yFsJuwGK8q1V2d7hV7hJ6Ne92RxR",
  "key25": "2CaRwofTBxZ6eJmSeJtFsB4KzjRBwEDj2HjU1e58AK1s4GFfErwuN4EaZQgdcnWZdZZx88KAkXCQcza6z4Y4JEbQ",
  "key26": "i9xL9tXDbDU1KEBfNASdUeCyYxX9y7chNyAZSgRCUMND96Q1n5Yvyxkcpty2hP5vAHJyeWF6PETzJM8jjXcbkms",
  "key27": "2QVmowReg9HUCC2D93qFAQmgrYhMzWVUAHksj9kZSrqFf6AWUyQfkCQAcSmyAx14KEdqubPsk7CGp8RjZKj9CMny",
  "key28": "2kXeVyaMJoVunnHi2zNWfYVuzchz7syWv4Afzgmn6v1rEFmL1BVivANQ9SgbEP1R5EDBZiN4okLUVPdxryCtxaqn",
  "key29": "3G1GKoXoSJG6MBNTUaaKEPLemJL8iuQRfmpvh3bWek161TUjQw8MMy46hf2YrHyGCq8aiA1p7iQa1hbTBvA5crRi",
  "key30": "5Ly3o7fjkAWermtZBXNs5VQBWMJwM1CcVzLDyHYnaKJSjLru6XXqHBpwgqveDjNSoszEizStCynUEVsA2p7YYHjm",
  "key31": "5oK5eTHSUnpDg6s229VpEGQkEzJ4UpywKjur3ZM4wYAv8dAKfoshbmccakpmghrwnQXzM3GP59eaB4CjZwW3rzhK",
  "key32": "49hMyH8RzD9up5MAqfK8zcMpqeRXUJhGTNdde9X6Ry46M7fxDd3NMn4f4H72EGF3XSDKWVQfZ3q3nqR2uMGLmEk2"
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
