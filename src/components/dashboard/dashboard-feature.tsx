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
    "4Wv2GebLqQixPo8sPLv4UQArBS4N66RhR2Tamd1YRqa5nkggL8z4J2LrFVF8mot4QWCtHdG3CorZxkSXS13xBQNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psB4aMNYbz7xmqMwm8v8rJo7LxeoeyDsFdU4Yc8agNDYLuzzyLQfptSrcvaFmvaStomX669nHWaWYzWHyr9K5Je",
  "key1": "4eoV3NK1R4mazb1iFc7YriNQLCYJLR51YtzZtS2c59zEEfHGjobbTWjdrmXUB5uUt31j7h5qDX5FL66GQFuZJhVP",
  "key2": "37ApSnN7acn9t2au9XajoM7EuLHgttkiNvT5eXn1m1dGLNH85rnNh8HpaNs9NTFhBVxiQyEWF7yBUhCFJ1LpVB6U",
  "key3": "3twBFfr2yFLFthcHUMLBKd93FCpEFMQ6nJQocKsDMQz7CboWpuabRrWN693784hQEgE89xTdkNqWzNKyDsefP99h",
  "key4": "3421t5CmZjxhXLYcP2PtqkAUqJncDkyZFhZu31dz8yP4zoK5FbycHdELCtQUCRB87pvfJPQud3fTRNS6eTzbatp6",
  "key5": "5upHhMtb5c5Ljisdnj6scKhZFp82NKZLYto3sMwGXfDh5BS1Na5m9u8jt8c81oTm7YEcSeTcNTyH8kSbV3yUM28C",
  "key6": "bReBXgapZG9mXpnrAzTgyoxzF93hBLtEDA3jCjyEhmpm1cqsHnCrsjYfUtbZTa4AUES3WaGgWpHfHJVzdPtnuPc",
  "key7": "4UurEKGP5HmJJovYfMx143jT2dLB25QPN6q1KXrdJPPdALT7PWxgN8Gx3DGEpB4z6B4NGy3t83xsbZfCpa4e8Umx",
  "key8": "4o2bvEYQbFQSVttWeiraHPdn9ZRuTmZ8mWMhzR9gxQyoLDn2sEjbnX4Tya647UBjosCsVgKQ7uzH7NMHur2JX9pT",
  "key9": "2oHMKtt7jZEZ8htbc6tMCbuBBjmheUxph6mcaBxB4eE8BUJbifSqEJjyPy32EbDRTGqfvGxjokzy7An8yYoZ48Pi",
  "key10": "5RhQMQQBoyD5c5ky2BKBmUnaAa5mvjq2mHRgz34igHdfcaHqXA1uLQbNuvnpMRWDtHDjYKNs7JFXb85PSVU8bivJ",
  "key11": "4x3cG6GAJ3co7UCtGpMmKxSwNGSdLMwvfrX5dRa2tgcHfCGK999Rz1xRX91D3hhivmpNKAWEUjo5DTKNZWjLkqAk",
  "key12": "41wQwpvUH5fs9cQyu7RW9m6DbLGPaVGexksSxVMdQezsEw2mBPDxByPgGksSMaA4rmseR9fpobzCDNKyKB6pmLtA",
  "key13": "4M5FrnUtc8fbQe6kov8b7tqBghYeb2eTC4oxzJNP2uWMfJFjgFvgSKwajq2hHnJf9J38vcRhTErx4RpBKqooVDzD",
  "key14": "5zDdNbNP3R8JdGMvAd7F8Azw7fDAmUmroine8YgrKre4nhW66ZuH4SVBHR5RQUFhLzi3Xaz4JUazXbKt3EaJP8Bw",
  "key15": "3uaBYTGZpzY2uuo1MPjhnk4a4qgrh25azycwtCkDEGBhwdZSo2fA8DYGbyUc1sXqV5xKyXHnvBsvjvh4GBAYsJS8",
  "key16": "3XXyuDgEXEZEZF4y58Ghq6yrcVAcckXM7gkLbhRGTQpRFoqAjiLXuwfB3sYbGo8T9mWtWrsPPtAGqXJZBdjDLR16",
  "key17": "3WbzhRT1mhNHVxU7vLYStKCyuH9UhBrmwh7s9SXm19dpVTksHb2juYowtSsjSNWHg2BY6CpLfLkyHsjofP6CfTwH",
  "key18": "3o3VdTMAqB8cMQSQ129s5XGr19whcJ7eUykySUq2jeq45kFHssNxvtTuW2Lim4C1CWDvp9c2yWAgtMijxjSWEQwq",
  "key19": "5RbJHkNbrX6FrmRZj9StLvu8fjTUbgiiMqD74vt38DvQLRsJ2wsnVVQy1RF2QR1oMhA6onhLpFWqLyYLu32z5Qxr",
  "key20": "2YyowHMvviAFGmZKukFLgtcURf8uWjVpDAMdBbHiigsPmkjsZkQkDrr7GZHYiooaretLmUZNmBqM8AgfrJtAboef",
  "key21": "FnNbxe3XisxzRYApwznhH3rPsioor4GgAZMeoMsHCmjkcxKc9gB5mWuBDyPyLzqYmMrZxqYDizXbPbWj9zHqsye",
  "key22": "rUj6hFWtWadb5g8N8G3HgZyJsicD6cfv4abaK6cxE5abDTjHwwHRqEUyNMyKzdg2MVec9conDfFhdFAvCtErDc3",
  "key23": "4FqTXH5axVBS565FFReWH5XiFpvoXfGktN4iVoGpz7cCNmPSCR9Ts8c1xDuDBZrLeud6WzZkxHBrRF7t9XGokjhs",
  "key24": "2y7eXtetLDj4UBxH4ds66PiuGAMHwTLYUitD4xXCadFZgKLJ7ACpR4z27D3YuCGTL1WQA4TRQan6MLkpno9Apu12",
  "key25": "29yqDEXHF9tqhnhtPMh2SMpu28yVDDXAU3hRpcPeEGtusFUhGYmrnqNcc7AmdyNbAs1Jqwp2tZqBh5wAp478TPVA",
  "key26": "2a3YCsradt1k6ZsPPBtLoYHB5kGr7c3aYsmp9frUeuELv2N6ZSvksspVzbMWQZTVJbukesBt9wH5G3eKhFHkokeB",
  "key27": "4wrKadVpz5zfuzpfjpsYrM4wGAn7L9ZAkxzucL7GQihH39PYc7QQ7vYwbwUrRh1hT9TX8r5AJ6LrFdaWrawN3FYi",
  "key28": "59svtpQKwNz72AeghNRqG5gQ116cbUQuLBN8SsdGKNW4Qve4Y8PDw6VfnQhYU5sg1kzKwMSHwKgR1FsWgLGrS3Ut",
  "key29": "4nwG5PGTWeaD6392eTUTSfuvAUMd4xxGcwRFWud6H6Wpgept4SHWVyc3imRRANVt1LTVwC7GopUQDto1DM4fNWct",
  "key30": "2HLoUspzxcZvcf47CZEhwAT2zXa1hCHKKMCG7ECTFfWUQNEkk2MHGkBwhZFGXaoDa8VPaBvPbW3Cwspa96pGi9vc",
  "key31": "2ZMwmEBpyaCEFFpWaThhcWDYK5vzn4r729FLbAoJ65B6xan8aQjipt2ZdH2ExACyHEUFVmDHiA9pSkJzCS6Yq4TP",
  "key32": "784XnEJ4bsNvBUAqn6L9xJ2h6AqxqtK2LhxX75KVwcDoZZwUvtaMxjddTrffHRy7dU2Gt8JdfePcYL5YKeLNtoA",
  "key33": "6jFfaGSE27BnMPMRTmXbvUvjJ9Xm5rQzcey2AB86YdUTz1ecWQJG8AyvEwCvfAtHEyDyarYzKyErK7AbNsBZpWd",
  "key34": "3MTdQTM3oz7R55qRdpXYx5goZ5wUwPDah7BSLJoqjnTE1N2LsVEb1aF97VeicLoCfnzhVjKU1hkiSVRd9NrJ9tDH"
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
