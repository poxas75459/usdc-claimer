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
    "2qjAGZxmytvPRgcrmFfQFopsAL1j8hUAUXjiZBTBym8J1npyX2SDMnn9dBucoG8VQPqDskua8PkqwjDQxazTvacn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Etjaeyh8WQXreB4j6Nq4eiS4qnTZASHArSw1A5NMSaZokq8v7x2EjE73VmB4gPvC6ofj5MCzj4v59ihvnLa6xBL",
  "key1": "3GYhPMdAaxqA1CecewyQwVYdmzNjusPaxhZJNtZH7nDbCx6bCPp8Sa98cgP1BGoZkqM4q63RTidGXc18yQyufMss",
  "key2": "3vPpy7TynGwsDJV2p3DKDkQgNcqvzhTyM6nazDJC8MPjQqwX4seyKj1MseaMFgctUgeMnHK6YsXPbZwJ665AvkKo",
  "key3": "5najxdedVBVLqm9K1M6PKQj4WhY1GG91Va77LegkN4Xk8TL7xBacwD5SKqGUtE9yksqCxR3pQHRTTQBoCP6qdZJR",
  "key4": "Jo9F8QeVnoDoARiExtJN13gaUoM8pnhoDpJ4HjjKNFiarNhhgsodyjE8iLwyN42f7ona5yW27MhJaY2Z25MT6a6",
  "key5": "3XESP5sW66eJ93Gq1rXVRKRByT2EBvax9g7cpM7caQXkScfpdmTddvrhdvU5GYxUceCenwa3mD91Gm5GrKJjivU7",
  "key6": "4BrsAkGiw6NJahkKrnmpaXKRsMJQKUVPXKtBr8xLvuhr1YnSYMbqzDprxEC2drLFLjF4hTPtD8ynJm2VPtWrn48X",
  "key7": "393EKQZvbBY1gmNsuGeroTCRrPdBoh1Kp8xcssrjNG6xJ3F3DnjRXYfsySP5oBtvkgTL9bEnVwpZNxMmAtMP444X",
  "key8": "3XNXyRH2hvLGQoksyKb4ZqzknqH2yPUskyeXdWPVWzjp2EyMoDrj317HMeYGMSvXjbT7i8GP76H1e8mWuJhUV3KV",
  "key9": "2Fm6FCiHxb6VCduZ4w9SsovFvfo3Lqu4doV3cMrjRZRETTmU4RfFPHLAYZkvDWPN5H2kvo8iUdbGNhMWwAq3G6EV",
  "key10": "4fnHzDRPQKtpTKBWmCULbuNeVDoBewDPwHwP2AcY9q6e9oyD5KSKXvwfAoUWJLkcfJZfGNC8pCn2Nk1NCDhixpX2",
  "key11": "2TNeEbUGjkjCXd5eGJp3NrdmkVJe9ZHhSDCp2ogfCgy2jZUMdMwGcSwcdJA7UM98SK1TckqGAB5wiwrW7pdeSByw",
  "key12": "4U3oioutbebpSGu2KU5L74YhZJqXw4t9AXTS6GDSeUUWXmVWdWdVKbzujUiVyAqsTo1XC84TDivw34QLq4KDxb6w",
  "key13": "gPM46JTm6VicEmmaLiA3TY4gtZDZjB1HtNdZMVVRPWeRVMMh485mw3xytioSEhCV4nvEP5py6toqYB3nw4BMt6a",
  "key14": "tmNvppyXJda6DrM6YEeqaxr2NHh7yoRbBUmS7FFHWXemZZ54sonQR4UPuaYnyG9n2wLZbSeeEi9qd9uNDvVKbi7",
  "key15": "33GRaZjNY6117W7wP5HzHjanqqQ2TNe9YCgE68TVPhQDHhZncT6cjtJJ9PA9zWPhNugKL6pzN4y2h1DDr9n1bgXa",
  "key16": "ZoUNRPX1x26MAZGvPBiWMbBazZLPV1vhqWj9GSbzojRVaDMcFtCHMi5t8zUoiS7D2cd1v1D4ESpq73Z4VZycL3G",
  "key17": "39rdbcMyfmMfwLnSMnvmCMKiTS7rcbDDKHyqVMzvP35Y7BhvTC4r2jYxShW6NdgQrYdujJk1J7xKiY677NkC5ehY",
  "key18": "3fne3hXApkbBNdvfVyGHNmcn1hi6Wxr5wUVXBsD64FjQMa1aNk7tqzmBXCAaLH78wv64XK9pKFgLM6gRo4owJXuV",
  "key19": "utPoDyHwignAnT2ZexfeJsEo85cWQrpLN7DaF8CgTfM5n8vCXgwW2HGoHvE5FBMcL4znsYB3RuSvPrpyiLvNQa8",
  "key20": "2JrVtNEyGR1ewjAq89UXoL8G7SJ4kXthCKBE32xpPMTKcCYLKhed3q4HmzvQt5kseJqnLi4AhPyqKZFoKf1akWcH",
  "key21": "L27cvDizqQFKc16N16XQYZedf28CDoasaS1JQX2Wie5UHpf9hdarPAyworsr9feNbqNdbmCZTfMcJVhdm3vPuSL",
  "key22": "31ymvJgdSAQpLo7S6uzCDu8LffKNnmqmcWBqCgL3XPNYYpXovv2FqJ6uCijpeX6yJ4UnevN42EyVpNhtofsg8EmH",
  "key23": "8FipCgKavrDjLDstLTemnZhHrQ8qEGcBY5iJXEXXBmcy6ZihXrAcQqVpFdnGQuKxTBUy3AczHwxpTwuqFuCFL99",
  "key24": "4uDMz2cNsssHiVz4h7EySGZvG3gn3zYMjkUkSJVA2anxqxJ4regZVFzg6rzV8Eoz4TZLWWk6GUepExeBacsK1edb",
  "key25": "4t5Bb63RicqPbuT57hJPqMwjtYgyjKE2nVXwvK4Rc8GkyjtEthXWLLNYiUJF7hoFnS1dxukBFgqT1AbpG5eViu6y",
  "key26": "xTVPLVZdEU3JuVLcjk3iKurXaUASYhct2x1U63kFiRWGDxD3zUYr8V8ycc8p5FZoApGkh9i5H3JsYAZSMacWJTe",
  "key27": "2EDdtLZYEZXAtkzNqzzcRhwmRoF29UASqcT8w8FcLXUZGc2dYa1t8gEro5xYxGAVbGnGzCXgYixNZL7u75bSsymS",
  "key28": "YgsKno4EXjHBEKMcP3n7r9Yr4fg9Sqmb8gPhfmCn3JzNRhQ3B2XcUjPZkYME2xHRuKkT7XqkMXb4CNydp7A9yDn",
  "key29": "4V7iGJGFsDUNz8KpCcs9BNjXwghJtqbr69f7v7tM8P4wFy34cXcHeGguhVrrBKhsQJN54hMyWCvfyv31ZMEg2ZiL",
  "key30": "2x545dhwDPC6Kt74xD5HtyVVDBwyg41KmBxC6wePLS4nuUSrRbAiutyXCRGCzeR42ftD6S5gswmrJncZBFf2vWta",
  "key31": "2EV4BzA6r3u4zVaZxnzUk7dZKyYBfSANLFQgyasgoCHwVNcT7cUqJZ7rwNPgoYJYqf3ABg1uMQyHn5UPLj5ZAze2",
  "key32": "55p3HMo9CnXVzYT2oSVLWsPZ5cQhTqvdWrLrQYqNKt92PwHMxHpZGe8dt8upmBrseJCMC9RvBB4WWUZNu1ATsbpC",
  "key33": "2wrkaqG2DtJjFg2o3sMD15GuKmX2LcNZ8Sf35hQA9DySxHfLG7PS9aq9AfqmMCKm7gSpjbs439bxDGFLmXL2FLAB",
  "key34": "4uXsBVDjp6s7G361A9AZDDTM2KwVp2E3VkymdsKL4iomqod3LZF2qvmjaZJYbwegcFJnHz1upnSTJEreJQZiMgTA",
  "key35": "U8iEQV3zzZ6qddzt8CYTzZkKwLgbQ5bY7j3stuTYL2F6g5Z3ucanGEaJn8SK6MyWAsEes1HAHWmcKahRyjsjECr"
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
