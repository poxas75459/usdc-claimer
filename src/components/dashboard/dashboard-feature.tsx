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
    "2TAYeVyncFbLQCHTJUtPrb1ffV7Sj3Sc2VkKFoKMHaorCmRcKbaNre7ybmwR919uUE2iNovtzUyMCYqWfFvzzPM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fgoLYqznfLSKhknNX1gsM33CtKruQXxaERLCQPTTu27ofsNn6KotRoVb2vTNMwmD9wMvVoGLUgbckyHhL5XjZtD",
  "key1": "B4GBUaBcp2v7hJsbZw6GTrs7DJii7UGVsdejjGWKRyLX8U5gbx8pw3Q6nYB1JEuWNFeW7a6xLGsTiwbnLvkkBG3",
  "key2": "5Xps9axEWF2w4kVxU92zxzgJmXNkcZatvDhmanKvCbFCUAnqFX84PG2S1Jnaz5nDqqDAwEAqPbAreBD4aGJgGPRc",
  "key3": "3SnsNPDAR3wq1G36PpRq9FGKYRPypw6uAfrSHoTUPo8kWTpYdoQ7hASkPp1gScsrvjZMkgY7V6xtcRSgHL7qUaSQ",
  "key4": "4Wp83paSBbSmXMhZa3baekcVbrRQ8eLVPHX7fjUnxv7SbpqRgAwicaVq5zDnxbM8wWfaL6rdetjwftqUKnDtKfJY",
  "key5": "3hVXEswWzhJfDgoXYV4JsUbsBVahhB5xkWbVN9F1KwytHZLkoeJJqHfqneYoFZxA4rJEbAJTog1FvpvUQ5drbUXN",
  "key6": "3PZ4rBQTDA4XnFmEtbXxZZsDbF7dWc4YuLXuzHnGRhrsnonVj7iDNxd7kjVt1WdP2fSswHehLkhqGSyh4CXvVNPS",
  "key7": "Tvg43PEZKwXV7SryrKML8txtVE5jL3qc5tZA3MJxEecxap3eiXJa8Wi2NEq8RKi16Ti6Akphk5wVUM3BZcNMXmX",
  "key8": "48cMPsgRWHsRq3cyUXbPbppQDPizrM25LuSoRkLzwmYoncRrtkNTdrxntoxJ3YZgxHifJUwFRdizSHvuTyoRsq4W",
  "key9": "52tw28VjDWXrzga9EAtJhKWDRgQRbYA6zoj82CKHmkn8WYpgFwNL2BprY8tKwuhnQnCkHQfe8C6VZvJBsmjGJF4z",
  "key10": "3YLdZusTo1h6Dcg7hB1dronp6BD7Za6XFNdoaYjqw6ef1CLk6iFiNknAc2JBVd6FhD6pKPuVbafabznp7EFf4Lmr",
  "key11": "5UYTnw4r9mWFAiNpMg1n51xwpuSRQts5wNJ736LgfwELstB3AtcP26BzaMK1aYj1oLnYXKjQBjRB3fXLtjJ7fSGE",
  "key12": "4ECFgqEwyQtzbmEtrT5CfnnW2a7x5hoxkbnhzPDtv6x3nP2x7TAPUuDR2wUNYQvCnBSaLdXJbKfnXMSPWB5XA8a",
  "key13": "38kTTV3bZRnUEuQ7WieUYFUjs5puGVDK9oN7sJ2MwNjBv72WvkY5LRHMFg5wA1t3pYrJzXswQ87hsA65HqD61hvo",
  "key14": "2nEJRiq1sPU6V4N3tEQydkH5W8C8FpWNM8rkVByC2m64xeggBYZAohnQSivH8z75qCUMpXBfda3xiXbZdnbsP5C1",
  "key15": "5oC55Jqpxze5VcMNMjKeZvFWVKeh634HqnPmFDwAecGBoKnUZx27oFbW3Ay1QtpLU3197E8iq6GTH7jDy4uwPXxY",
  "key16": "DUc9HAP2yZoey8Un3tDihEmEXvTiZyTztNuoUqMahCiTrkLma193r9nyCFW8pJJytHWTJ7dvHx3UdqdzmgnrWbS",
  "key17": "4tuVWTRZxwsqfTJ33AYpUxRa2SYQGB5MW5BL7pEesr4aM9pKQgB3bQrMA3xBJixuqSX9LPcRfq4Y1XArkKh4Xqkc",
  "key18": "5ciBFXPw79NTyuvgtCu2dzAG8sP5x1VLRQ76fQLezC4Y6ViC63AZApZZb59NaMhDoeRW6Abge9QGjwbVYxEvvBhE",
  "key19": "4sbbbRMEsjPMf5wjQBSrWFeP7HzSWgJunBFiLvewKvpPE9tMDmhZcGxbVm5j6D7e2boZPBAnUZK1DQPvxdXy5RrA",
  "key20": "igqqxD1hSDL4EYr9NVd3jwoMCsmeJ9hJeGfDRqXTemJWiytDv9Ymisd9vPDUwes1eWErZBM4w1Kit5J7Mtcniyy",
  "key21": "4UMcbW93c8Xvq3g7Zheaso39dQqiGzK99G24CG7aB2y2KDLjQR1exkiZRzKQZBPCZRjJFJp2jdj3kbVs86A8PrPk",
  "key22": "4MAJHrsMHEbVXxHrUsVrWeh8prof1hifPdR6YnfKcou85dDuRioGdwMXYywYmnTNCi1as6GiwJHfUK7w869asqNF",
  "key23": "55B1ZD2Dk4ca4LTXTm98RWQCad7zcD258YpVFUvXWHJ9fENKbtxn5EKgH8auuTAsB7ReyZxv6TL5Mhw1p8JmLD65",
  "key24": "2tdhjx9tNhwKr7QQn3KPRWy2X8E8n4bJuYHF1yW8jzhxBKqugdM6UfVEXRj8yQyp9eXewzeuRG6TQvbpqMfoeeer",
  "key25": "4zjuYWTUddXQPWqAHrKp7881mogQZhAzFpVMWpvWSav8rQ3ghER7E1hN4pscviHk5GUTxCV57S7S6BLxRxMeb7fv",
  "key26": "4RxCkReKo17HdS5ooFh5P4TVa7o8aNRBommWs6HQnb58kD89WHk1PGb8VntcBp1LMePMkc3qsNfhPcx6g3wfAuSu",
  "key27": "5UTMKJ4qxN9vhCyhcsmJ43vZM4DS65uKGojbXJ9tRJU91XYS4SSwEjcDU8voor92obn89sBzUnBPJyqy1NC9ey6U",
  "key28": "4sFhPR3X4Fj2bwFytnLeYCoGiHLXioFCeeMQ3K9Wwf51ihB9Z6WJuNwk646h7CyZdrjDaA2ef2wD2Dp6oNdrs3Kn",
  "key29": "2eUhd33xMamQQ2EjY3UDRquie867WF2BPqTtZeFjsvy3VG3ZfKkUM7VB9hw8jYsSwG7QN2m1EKBu5fkc1TtVtWGu",
  "key30": "3E9en6vNnuTYYUwPwUVS6XeRZC5aVtCEbEmoWabx2d3hm5muJnPHyXwhMmt8EYvFAco8mMdQVXqo97znYznAFkZZ"
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
