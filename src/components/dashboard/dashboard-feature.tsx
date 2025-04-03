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
    "3Pvi1y6NXccKN3qLb1KhZ9vgYGaQ6pdNbZMSmAxdaVsFvjHnWutxKspLhdrciVes4MB1JrZyJ76WjxXCXyQqZgJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5peKUXVnCWkH3MjJLi4EKf8jrgZcCGUVt3pWAxFk929MgXKmRiVCMRYpjvheGPVWeuPdpH3qTUj3XCLw7RrPBuCh",
  "key1": "5JHbTFSHPDERDdD5e6up2p5bFDYaMh6GsWAttvc3sXTkPEoLxwtcDvWZcx9ErgsAyMiA2Vtbqwuoqd1xRLFk936J",
  "key2": "2FfKNsYXEqD7t5WTCjGSpAih3bLyQdJKxr7iRtHhXbMYconurqLnEoBPaVJXNA9QUzMKVZiJgGG1hgFhWmzGZTg5",
  "key3": "3Himv8962tzBioMhVFJyxWJptuAVMZXrug19Snhyb1aqPiJyBPsZUmytdYsFJm5cdyeMm2cpeantoqym4ALVyCLT",
  "key4": "K5rM3f9ZR1gRjQUW7ztbwjyHx1w5hmJqhLdE3ebdqyrrHZPWE8Vr6QvDmoBZwCs8k1G3nxB9FywVALgUhjmUP6g",
  "key5": "no5KLCuYkTpVvybjyPScWADTEuMwd9XS1M6QzbkyrR84YtcS52gun697zEwUfEQ1q8YbSxAUnzVRuGoXdz63jyz",
  "key6": "2TC9KrKmjKnYvvJ7fH3qmdJxAXCrcBYc4oG42a6LHRdprfs5U3hTEjwYrAj9GEgrTA93BDZa3QCihYTS7c8dmhGi",
  "key7": "SChDWrQiErJvX325ixvsxVv5S4P54qFwjziizx9kUsNhM3cdYrWSrYhMPRwVe4GAXMDf5cP1E8SEKYB27NPKmXB",
  "key8": "5NESxJorFix93YiqeZbnZnxjnzNJfxPRvksY151D78aR6ELmn2tcB3qq1kp7d2kNvhFw4VWMF7oG2kDodCcwiaTU",
  "key9": "guwd6mzcQ8tA4Dr77BdXS4pxyH1zUy6pcc9Roq1ewXtFe6Jb8CeT4RiLdA8MpHteCbxo8Es7FLoMj7LggsvSVQv",
  "key10": "2mBZC1CNTR5j3C5tYumnaUoiQfQGHYSVHWoHaHoHcvUH7JMDfrHcEVj4KxLWdwgWWyuGFErwqjN17mLXUCYDmNBT",
  "key11": "2Q6eFcZjeDPs5Vj6eKtyGm7tkdv1XJyWR6f8PsbWUq42i7dqKfuGb4itokXtr1QzXibvjS5Jh3BJN29QoHYqhtzo",
  "key12": "4ertxxm4CToJHgXzwApE611mU8gDoHyA2skmebmyS5rLCNtMBxoEqk1WTdq7qQKaHtTQKtN6z3SfeTmncMrUZDpo",
  "key13": "5oi4ioZdXkwgNKXtXMPQ4mkfoAxPYWBGvf1n4wpsPcudQQiu6rwK4Dru2aJtJw6jH6kC2MzVCJtiiq4aEkxQCubg",
  "key14": "39WVg7tRB9ZbFV7nT4v5Mijue1PFeSh13PqreTWkEHqCQ76wESSyUt95VfyGKdLS9DMPgiihSGTsaK7WUTLuieJx",
  "key15": "4mvfjWfZ4YByZekHt7RXMGDrvTM4MeCa3cXUZpX4ySp7kUw5BDroTqyTUqJgo9RpFQ9mYh4cMvRiY8PKtiDkfiLm",
  "key16": "2eNypSAENcMncWoVVzzSMWcMqn5kFpBhmQxuEZbBDG3g1mSU5EZ9u2iSEzKmWyBUoePXJu3Ym3dEFYzC5jynULdz",
  "key17": "5BGDbpdogs4ywXqWW3CBDv3mVTsAKHR1K6XSTCzqkPB36itTJX8YnLd8zJPYjykxtgDtaaXYJ4ZbNzhN5nyPiWzV",
  "key18": "2C478ibFki8MoEQTWWXw8W4ofTNYT9xtMX9ne9bbfg44c3K7LLwKWPBzujhpUPJXMCswcgvCrJ6rTL7LCRsX7XX1",
  "key19": "f3WqzYTq7qVnuGmHDeG388L6NFcfKarQdGUGwKL1YVgM6sg3kJTesef2ARU2PQk2sVcjkxVoqDfR3fc1z1ozX1A",
  "key20": "5PNGRDxAYwcKmWm5rdo78or9atvHbtvNMgs3DteAdQKh5DUzCiBcXXtbBBxtBknT96kpNMrzpHjKHcqGWW4ERCRc",
  "key21": "3ga4YFmfkWvYEneuc89U8xN1kWdiE4MDbpoVfU7Rp7E6zv8hdfExW6vFhGhy81eMtQDVQkXWZPE9KzSHQErGpePE",
  "key22": "x2udpbyy19B49c8QC2utKhs64TePb5MFyUhfNZz6bU9vCrbXnED8gHQ657gPhVgpoPtf4dajG7XUjZm7yw9H5S5",
  "key23": "4Ji6aYyAL1J9kFJtcqwD5zWXvhRVXvQA2oS6AKu6CE8TDdko8BGmvrx6caGuxzpzztNBSCSPyh7n7AFFUTNxdG2Z",
  "key24": "ewzi6bexks2X7Up2BearRjh2MW1MhGWa7TnuzokSJWYDDArL5dMtuknYWErKxAnr9m3nJrFmPbaWXqnRHZBM18y",
  "key25": "3PVEcCsTzEXs9VL2Uke6UCnpzVasjZptx1P2VafuyakY1ZRWDdZEHo7Yxn8ryoUeaL5mKh8myPZ6MrvyXo9gbrc7",
  "key26": "4NAz5niEvNUS4RQew9gGYXubZExQAHYtEFqVw8s7DqfhfB3cky6283ws14DS3CSN4D3iYqvF6FPRppAz16D9PURd",
  "key27": "3BSs4yqdFm5Nyshk7VKNkSLSoBYQoXaV3e3x3Br1t5Ff2b98pBbPNLxuBNL7o2iT8JuTVYERX1aSp8vNZkeEVBd8",
  "key28": "57rUT9e2r5iy88wPCEfzc72b7RE83oUU2CieNxM9G6atfYLzU8Gb8EgK12hTuFEjYoYeBGMsUaBjMuDcpQvp4dY3",
  "key29": "58Brv5TKZ6nPKAiw6uWB6ivKs8Q5pxiF9fXByK5hvJhBoEnMsaqtJt7rCbLpWzg5TnmFuiyjffaGCXyevWkkK2gK",
  "key30": "4QZH3cgeeES29HoatawyGzuXh7TSey4xKKREN6y48UgXpXxC9UTBCgKTarKpeGZKEbjmjnAxJm3Paf5oFEjAhkKp",
  "key31": "5qu7xTqJjFHTx7bgcZhThjRcM3UdGqij9HfDp2iSK8pv4MJHuHLD2Y58DP3Pjb1X8b2xuAcs7KnfKtbpRvfPCDjG",
  "key32": "2yBiLhvbkbAdU1kahozpa7jz7ec3qud2ZEtpi8noh8yZRxCxJGznNf1dfmYKxLBwdCMYGfV5hQ3UJ8jeZ3NNeebG",
  "key33": "3gRJph5k3SfRDVf4JtqT5ajgnnkf3z8GniSpG6729iorBYcq9eHrcTzHChzCXrAyuh5GQU3Xd7e4qtbsw1QrhFcA",
  "key34": "5bFMYZmhECGxTFyFU7SC8kj8J8Lt6LyfRyUuMKPhR5umX1ipiuzvjaVbC3PvwV1LewGRkwWK2hJuVfPLqBKBESqw",
  "key35": "29odaqJBvKTgtbTszjpEGdzkJEhdjcgNg9dHyyY4xBmb34ALvNXuMyq3Q2CAhq4mJrue7b7SF3c7pT1GNidxVw4K",
  "key36": "2b3ns5UgGnmJk6BjZEK5QrudBiFTgkfxjMLamnxLzW5xu2ggTQX9DnFBsVurrEZx8h4mgpCpC7rHQgj3XhpTsLWU",
  "key37": "5p1KCWs4RyobnXoq3rJuhqrrhAsMSZdeCg2i6gR1AS3CyaSr4B8imuLUZgDQX4m6oXSMjPjEP7JpwKsnRmgNJZPe",
  "key38": "qvkPhxyN2iUAKc4CDStRUtSL6FhTsoAUtA6S1UoJDc6Ct92NH6yB2VQrGNzRLmJQDekWFSaeLLgfPyYi46878J3",
  "key39": "577dPexiW7cHXrZFG9cHQojfc28LDmi91zDCjrm3ruosvsRhzuCgrbtgnDHuNpv4iBK7ujLdwCA3xsBtLsX2GnFJ",
  "key40": "4iQu4yxMDXgyYnUeeT2Z9LGKDWn8Y7cxVutN5cKrCt7Y2g6LD4S3UVoekiVsNQPP12yxJ4r6KLhgbtdp9ziyMvAs"
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
