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
    "4cbjPcGyx8tRrmWZofarqpRRCKHhvRdDnqVtfcq2Zf3t4cNRma8Gn1rwffH1vgFBgg7rm4BNeoJG3Bv6bC3QDGQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47BevPVfYhsSoKbqRgfbvMrxS6r2AcaQ2Wn3cXnJFjtUoT3eJ5TVYynJBfy1ULREHkCiZ34kxu6f3CqzFqfH32cn",
  "key1": "2PpgWNeiEorj7XugUA1jXGYKfoKpQwc87naXi3PvH7zX3mBCbsa7T53SkYC7rAvAWUXj8EMV5ZWgogoMkSR28aNh",
  "key2": "RrzWhSUjsrfUL9AVZggRqKeW2mTuQNoFafZLwNJWtHMnJoxiFfp2oHGDMNAVToJibERiPZAP6onFWC9kadeUtvk",
  "key3": "2U2sSJA6HnaSPMwCzhXETerPsXaw7qwGT4JukURsLfJcoRWXrY4XPd2gXQYr1v4qfZUh6X9bjTx6jqiWkDokgEsG",
  "key4": "2R5bDxZpAyAb2pjn6ozujVhgSBmqjpmbQQprrNYDpeTHmX4GGZ7gWtc9xVriNMXdWqW346WcXGLhYLPqFHgJAqT8",
  "key5": "4XbEbYHpYY6p9dAkWQwjkYonPFutKwzgoXBYjVLtdSHTpdWWc4Uw9oc4KgUx7wWDtCikoeJqywKdXU1BBeb4r3iU",
  "key6": "foXMBGMcRwJzxzF1kUQMxCNH8pAekq4nBGtdZQSoSa5dKDiLARnoE7oWn15LY5VvbgVVc6cvf5BqQJTXgEHaDbC",
  "key7": "4RzuaGLQCCu934GTi7hVSTKKcogfH2thQgdCp2JdXKqm2xPziYuuT9fpGz87Y2foasKKSxeP3EJpe4Wtt5ghc1Q",
  "key8": "41YLzhVFpysagaZ72FGsSYfmnvnMTBX4GYPrKMWaMZjB5dk6wz3XJrDR7VXbGFrWccmhz63rTTTNnco8Lti9cd8q",
  "key9": "5e7QvwBQveH33Pp6ZpYUdvFP8MFAwVPzhvD8g92LyMAvF816bY836SRFPrGrQE13sS3m4LcqjqrwQXscXBH4ynjD",
  "key10": "SRsNdbGDhJ1ptg1FQAxZLteqSCBnzyPGMGfjv1Sb5QFZzjASDGyYJqkANciid4sQFZQUX5ivECPGaagTQo8AmvJ",
  "key11": "5vcCRNQGmuyhZsfypV1KLwAJmY8rCszHuKWCcYoguWSHVAJNGi6rEVv2aQTgQfgKunJ17sHHc3G3QztFRnzw8h6p",
  "key12": "6gvf1rkK774nUZW95Ya6hTuMMo25p5q8zJ8AJPpF4eMFeYickL28KwWnQwxbb87A6vzwH3Md8DysZ6B9Tyw5xC8",
  "key13": "51zvjdLYQjNxF3aftfXXs1nNcMEBMgKGyvkbCKPTTSRvVcxfnKvSpQvJRJ7JFAJpjiyez9EVy32ypVhxNjgUqRVC",
  "key14": "3MtUv4Horq6KBJYgdTspeyhQCuCyfNxmfLpz1RQCY1vuqauUrCHBmqnUoBBXF6e35PiAZzbm6evkd9yUA7sx1ZYU",
  "key15": "24hTeRwd3YJytaEGANL9nce9NWoAuLDaCeTrKRGRQ6vPtSub9eMxxHmxwJYucTtxTMQVWQs6HseoYKH4eyw6eJJu",
  "key16": "5V8aZ4G95fMEXDnpHPSjYSf5qbZgyjMLFhSoGSaD92ftKZj6TAqx4wicwJMZ7vExZfYiumJYHXEsSaMHoD4Ki91W",
  "key17": "46iVqNehi6TbVYgJhjH5VdzhhRzLMLGJJKtpo7GWnNJzUwAMuvVMvTxAeJAE5S1vMPUvjeYwxxuS9YKsDyRqGdoD",
  "key18": "2XvW1yfTyawj2GouwRBmMLRfCDawbXsMxRBCTkqtqvZ4ETZAVyTTW7ckx9gx84LTjYyyeBWWNjmKu43QPC5Ahnzy",
  "key19": "2Pc4WdyxXdsiUhP1Zvif7ELD3MYNa8NemJBwce8GtzNBKSogfQfUuXwTVcAJ96Pvaxtm8uUJkog9yekFxPrUdiy2",
  "key20": "2G5dedvsVH8pGMUgG5V4yHM5QFqyCXY23t412E6TCkXHS5hQbTRWXsoWnFGZyrTzDS4i2YcMbwQDumC5ctkrffXd",
  "key21": "2i2CLHMGbCHt9Xj9gB4QuWXguEo74YX3YNRCvGVVhgpviwpnQnEmze5Fkk1imZ9rfZyhhTdzWwoaCw6Ph8y92rBT",
  "key22": "2MZizm8U6z8F1UHB2zws5tzG7sJAhSztfox3N4VvrTR3QdGEDvCYS2K2DsxXrinT4zbj23JRDVfcFn3aR9uu98rK",
  "key23": "5Rxv8NchR9d2G9FaK1U69jXTmFcZzyY7jAhnvPFGySwhYgsRNunRdSAajxnQTg5WxPvv8jJz64HRsE7cLMx1zUWD",
  "key24": "37GDggLAENYJwN6Uk3Zer336bXXFRsJvqfLfVZeVZkfibEK6bFDdge9Z2XgG6XhJ9t2bD7q4eynpR3e5mwFkq1Nd",
  "key25": "3yhRf7EEeYWvcPAK1ZPrQ7HxZFTJEjDKw3KXoUALBWqGDBn287Ht5rvYB5d8DM3Pz4z3HKFkvADD5dbCM4TSWvXN",
  "key26": "43r7g7s8attMziPwceGcyw8ycaEjzCqJmqvFtyxyR3s4kPaMK4Zgu211g1knbb6rVbtpwRtxYXWwZg8XBBz67b6F",
  "key27": "4NpKnqFgriUZKCk8HwpTMfG15P7MSmpwkD25TjuiuxbKKD6MfN5XoJYnGk2fu6k5hHscqVJdjGXtjG2stzyDbeCF",
  "key28": "66EMoNuqbVckbbECuxGjkf9qZUbHTHXKYHwiEmCeVLadcpKv5sLxYVprB6CQGUiWCUDgVKZHqbshz2R8vGMp5Dub",
  "key29": "5Y5PBKw54rBofXtqHiAuJcKurX3LgoX3NvDfFaZoTa8rw7GUS71XdTU9Qrb51TRJpHTAwn8WL4cJNDsJKyNHbbp1",
  "key30": "2paW3dibwbvL88SAjLesaxcwrgxjG2zST5HagFMXdtFvEC5YGvKB59iX77r5GUajZ3afGkop8PABSAVZYCabrxdd",
  "key31": "4mynMwwGn7mXFF2kVPUNFbeeRXVHFWuZwhaabu99Y9BWVCFcu2RK9UruAknZxwSjW2BBrDFPvvaUv972LkuLQf6g",
  "key32": "4br6t6Wc11tSxz9QjKxR2YryZQEnVQ9jC2g69aucDbfXpGNZW6tK4krtmLDrUxNoz4EAQVSjD6wmTdfmMPqUrzMP",
  "key33": "KD6zWgeppCn9CwTXmcN3pQupjyvC6NjVJ7X3H1odb5PAbomzZGdMMQQPk7AhqYVVJcTQ9CHLKUvQRWuDc2qyUsz",
  "key34": "94KM46dAepiqK9Uc3Svzy56fFpTHXHWi2VqJ5DsCLyiQBB6Ww2ePCPEc4mqBvswpmRUqeN4hpxvGVpczjipukqG",
  "key35": "27BkRwqAgTXdJXJhiMaBxiZfKQpP2wGWJenru3f9VjH6RGGoKfakRvzHB8amsxBXBausDT2zqdacuWvCgizVU54B",
  "key36": "3vKfypqT25pCRaZAfG4QLMNHfdVWXW8Tya9NphcRRXMVB878xYGxVb7ezZK2retDw2ZdzE3s3BsC7RUC1Jq4MXG9"
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
