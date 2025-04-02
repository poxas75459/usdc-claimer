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
    "2ownKi8r222Y6baCccAq5ziQ8oWagdpVxEjLviusNh4nsBvtxuCo1kHFqvmBKzdjtWz8UEonfbLJbUEZuAhXYZVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYrB2a7kdj9G2FcvWQ1jaA1V2DNTzm8th4PZnxh5v6ovyv9UbmEpqiHE8LMxnRRGcE646Wn5GjvkKWAmKkQCynm",
  "key1": "jQTs3UBUWwhCx4N9289S2N2JrAuHrUXJa2x13b97qRmM7TUdDmTCtFWdnFwnUeSXHGmoCCNVvQCo7umoWFLCnUL",
  "key2": "2FgprjJa7AQ4kAt3pDbtUtvUFmMs1Th3MXXBWQbkKNV9rem34KnRXFXoBxX95h6cLamXBGM6WLdybCxEsqoQdBrL",
  "key3": "3jTsGYP1KUSabcJ63KaT15i2bTBHEar94vgDgVKzQ2yQPn54TxBCTYiUBCGVxzfRVQ6puBzBPHmoZK9ASzvMfAc8",
  "key4": "5vLiGd9QGdo25JDLwGC6MSMhYP9P2FBs9EcZzVxTLxqvHPNR2VmifFJ9NqkeyHxPMdgb9uidDdhcGJFhNVayuZtF",
  "key5": "5gSYu4aErj4imW8tR4E95n67nVb7YandycYXYbABCJ8bPkbNqFJZZxpgQkLrfxt4R3Po2HnhyPgs6LuR9adRrfgj",
  "key6": "2bT7JM9Re5gQQeZeceSuGScTgexjFBQ6VnwnwmWQ3SuoeeNgz7EWGT6qvQtCs6eqnt6Ns3pVWwJXMQBCPXWHonib",
  "key7": "Thm2YjMMnzNghRYycodDMfZSxTfdzDEfRGwcYbsq2SL95rCP9JxsQtP5kAdZLNRDP451gnXQUekyMgzjkmHHzVe",
  "key8": "2NHi6dSCAT3Nk6aLQNs5DEXs9bCfBVfhxruYgzfCe4DNTpDhwNsvNYb91Y3r6GhoDQpFKg8SQiXQ7Efqv28Uc74S",
  "key9": "4P24S3YyjhvcYMnfDq4BFnKRK4xbngJLUtSJevGCLdEa7gvSNJXbGchwU8QrRJgBLLprRvBLi9mAae8Yx1wdzsUi",
  "key10": "4CBjY5SEBcTyGKDyiqp38GVxop4p8fPLpnDYimHijNcRz2jKvnpisGe5bMrWVJ7Qt3URMUB3sWFQGXpEyvQgsLU4",
  "key11": "3aWePkpauqwHXBwLdRk3zP2HZK5oKFE1y81NhtPDePpTuYmfWkcZQpAiFncaAA2jbMmGr39u4bkd7KcNVuxHcqBw",
  "key12": "HiuziU6eTWziJd6XMe85uZsqVHUVsWuw5BwbJm3a8C6ooQz9cbhq7kGMk3H9nAvjg9eH6WPB6Tf9ELxQxGgrx73",
  "key13": "2Vkc9P8XuhB9UaJSJTe3N3sZ5W2AeiMUteJjjbCKf9esZrytnKSMp3GvsstBNSkt3onJbnZzfBiDStPZesEWbsHz",
  "key14": "63HVZCXf5GdWCYAJZSiMY1cgTRM6Vqjn3mksBA5Kkh1V3bk8mJhUiPNc8NpCyih2LTDFpgvxCq6NBRJY8k61GJPT",
  "key15": "4pmTxe83pwoQhEFvyVScDwD59jJa8PArs7DXWp9sekSrD6o7yLmxzBpftMvAyTuCbwm3vMoL9oDRpKLTQf69zajP",
  "key16": "5Yzyb6HCoiW8Hjx9yVcGckpXn3rKzi48DwDv3McaH9v6XJ96F1Q2uboG3BZY3NfEaMe5mVeo9uiVuYcnoSQTAMq6",
  "key17": "CjQgTr9KvumeUcUtqyCjo7SUt5GasVrnNi3J6pVHBCFkZ3WmckfvUq9n8Z4MxvEBte2GMvq9EZSsSAxv8iQkZmc",
  "key18": "4QpPrshYqAc8Q98iUbDExUevPZ2RxCZuucQskUSGoy5cQwTCJ13bhmxW4gC68SPh554AqeZqdzDi2HkibrbL3bJ6",
  "key19": "2Xc3nvhyjqiLasNqiNeueNufmybjAjtQcMKRA8Ceuwwp2T97gb3Rd2x5mpFyqSF1cVbrgQTRe37nBKRcstT5bE5r",
  "key20": "YRdNSZsB2oNpM9K8BjLx34mpCmf3QcjMjU7dRefRENTnKWnguEZuVqDqdTLCJLCwjeUNS7Cr8bgq8dcUbooHJLe",
  "key21": "29fLXr4EH2KCoAmkE24mW64gz825whjV9CbdMTmXBEd7FdkkR2Z5dDUCPutTEHBT3kFfV1y2BscPMinA8J6mULwn",
  "key22": "EGevzzuoYGwaZcLewcZV98tHws8pm3CVUK5TFhNd29DW1MkGnRTuRWd2FqrVHo7ek18EuHMHp81JVMPAy3b8r1b",
  "key23": "2UY6nu19xcdsmxdRwkyxaUiiKCmHvnPnupRiemAqFBN4LSGiNM7RzJx4rS6wrJjkToepA8TS6DrXzTej3bLcpESM",
  "key24": "T68Jg6Lafix9NcHxPpvQeFLi3bY6BWuquNqzTTb5VvMR9KgHJNtp8MZsyZ4PBd2K9atVpaR6dSH8YqZa4EXkDdK",
  "key25": "VFCWeCx8Xmh3F3Yy2JkMHFVrk2wBgzV2dVpGUUb7iTk4Fjj5zvdZQetagysXYu68A83N2CkAqDvPP4z2vq46tBa",
  "key26": "jEgmoFuobyYqWWCTqLiD1jAnQ9symyHRRfcp9kQq6qDnihceAHX6FFc2MXKG3V76vWMHoRQ7zUHqpTTG9h94ePW",
  "key27": "jvnhngav8SwLZkEHrH12nzJ1r1htq5StxswH2yXpexAbqyndFC3CpLn9yH8YZmgNvAzqJwtn875o6RQQc9ZKYbY",
  "key28": "mKbYc5aE1fvZ3BaEyKFRcf8sj31P9WdUBLahLkRGdBwtoGf38FP4CCJPY19BQzaF1VK3GrPZzHju7mEor649X9s",
  "key29": "3UkRWTbCxCHe2AcEveLy5Ww6AvA7Xbi5HFK7nGnEaQmdtzWTJzetKv9BJHXa7n1XfQF6UQ5tgRckPkWKfvRDb5Xf",
  "key30": "5GWH2WvShzQ8Tmda9vBmVL1J8h5LpkKZf5myxtA8GxpZYiRu8QQksbjUjvU7gVTPgZkWzXvFyLVVBhWfPBmMQAH",
  "key31": "Y2BW4Ys6R3VZE3WTmXjkwpk9eCKJoSU6qZz9wS94V2CEArzdWaj2EHgF6bq48ckMV7xmyM8Njw2D8BvkSdvxqfU",
  "key32": "Dm9vrkDCmnki5VhgPQQt3md4XzEGUzkmeM1M9J5cx6mbFq63AtnU863Pd1q4r3vXQPerwYpTftoaBRBFZH5cZMj",
  "key33": "3T7zVYkLcfjf1AH9Qw1vfzERHPhbPwpvfpFWGoNAHuVqK3idX8xUUzGzqy7QB7jLtV93Y1YP42h2WvGYkQJwh4E8",
  "key34": "MqF1BJZCZP6uwKaXAc5razZLz9zuD2Xe2r8TjFtDKdnkM9NfYQKvLBS8SmnvMUvRNC7vQP1NuAhMCxH14hy95TH",
  "key35": "471KHx9ncvLE7ajUZzeYRWkoJK1qjrzfYov7E6vjkd9DFyJucVofLer7vBMGh9TfqnbyweTtjnGHDERBDC5EbwSn",
  "key36": "5o96YtpPU89DUcqwnZdepLVxEKXgPWE9RP1bFpDX2xRjL8QnuGNpJCfetqN3ReD2ztbJDi7oCEn3iuC9PHN5fCTa",
  "key37": "5P4H3iCmxZ4NR9B42LCmwR9nBcL5JaUZUPG8kUHfWhNJL3HutMBpUPQ2sJPLGy8V4RFiUBarepjGqqLiaSgqdKhy",
  "key38": "5pGa9KosnaXX2XKyUzbqmJY9LmfYJLaYMrTBvaJu57pkpbkK2GCGxagCPXg18FaW4ba8ypqhYfdvaZQwkqTKdzfK",
  "key39": "4CE15vhPqJCs4x3WUB7TKZv4e4bq6j2StnoJbzT6gigZYieDENqBd2wyLkUmsQGxJhhES8s6kfvZPwq14WckasjP",
  "key40": "4avuR6bEBApUqYyQ9L752uNxRHqBdkvrAFkBx6ZWHDY7CysK77B7EzCLga2qtziwFGvbvEZquE5nFAKASwpWJxTv",
  "key41": "1TvauAneRtdQAKYA3Fk5G2tEFC9kmTgkLzUDQdD3edRJY7cvDfyh64ZeMyGC463PgEd7ZMUuy3ko1cWEMX9SKzk",
  "key42": "67PKmog6tQzar3LE9LtkY6dzfkeVeFEiBWmUmVWVxz4H1cijzbF4GYD3qaz7x61NcpxzDXpd7P4No55iCQ895qkM",
  "key43": "HUnF16vwmGwt1BBWMYAXtyBygh74Q3pQUreLLMHpAg8moZJjXZRNC8kVAfaF9gFUpCKxkiCD2pHc9y37EXYKHCd"
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
