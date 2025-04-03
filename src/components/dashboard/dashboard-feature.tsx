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
    "54AjcqLbgaEGoPSTouahAXTfo9VeiRLdE6fE3PYKy5QdRhaPT2ncFAEzXmTr1QeH2fB1gcMZewdmG716gCTHtrP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47fAfpgUUqXMCsX769Q8cK49QBKEi9TNgdj9bAGZ58hqFho6GRfW92AWWkNE3YjsfBLc68AgYjuaVmKuBFfZuuFB",
  "key1": "3avp9A2nueAGfzv2M8eCh1ihx7QsvZAJhtuYbtp7vKjbScQ6xzo5MoVZeKXQqUz8VwQ73ftL4eLkKeSHvuLfgjZp",
  "key2": "4rUaWFff6pHXEUhBCTvrdgYkPpiAhhooMuzUuCGb1SVTD3kYfkacYzNUSEjQWAVRJZTU8wEbWBgMVyEiJoMae9Kp",
  "key3": "2oB7pP4mHNQ7QEUTCiXBLi9hiZpFnt6edC7EdtiskbEHnij6PPauhNsBuuYcbi2VL1GCnfjimY4x2c9NrinjvFGa",
  "key4": "TEfYqApPoGE74Fsw5Pk16ovhUkrJnVycvbg9Snps3f79t77Ex1uWDRcreSP5yTaPUqbKPpS984a2jN88ixC83eK",
  "key5": "5QxJnAa4gR1dmx7a5yRmogYJQCSCGZWyZKLNvWxV5Ys9u5qqY9MnwZ2po2zAvf9SUt6z7aePZuJKh31Em9SPnTk5",
  "key6": "3TWDUVvug5npmQTTcKaifojhWfVUTJVbHkg5wiURn7sdXuBzeKMyjg4WWZfdQaj6hbSMPYxoo7VYThShynGJARv8",
  "key7": "2ExydgaTTDnW5kVTM3JgSzM5Q6T2b3tFqEaaPzD1eoSTWBVYMHwqy2YaLtRrD8DQfKKRxsDYwRK2Xj6Wwz1HXprr",
  "key8": "2wRSxzQx8ro1oeTezRzyHPPWUNuVB1DfhKshVUzV8zGfU1sYbCs6yLdRU1dmELhCYjq8M92g7bB2ZrBMk1piCEEH",
  "key9": "3QfCw3vTvAWWNou1Zjk4vXAhJyzXiPCTepj9YBwTfwtxKyqbgYJzxah1mk7bj6HssypmuE7KbR4Lzrb2qUprFeWw",
  "key10": "61dFhe4K7zt5NcCViFQjJgmYuh5eBtCb8p64VJHLwghT3DFtYbEerJB29pFto9KNDaGajceorXJQyMW2uHDrWV99",
  "key11": "57RNq6x7pgFd4Xb8sKVcKdH7BHD5S7a11nDt2fxMNX7i2ediaTowhbvbDpywzYY4E4suS5yRQRYLZjx2jV12DpuB",
  "key12": "4FzdmUt4QoVcPBYAik9LAp1zZKg5k9MZDhobFXN9gZocP4RFjyG5WtpvpjBf9rPnLkkdHr1FxAmTLQkZAdfE89Sz",
  "key13": "3auKHdDrRJVZ3tH1zKXunHEJEYKYcrMbbmUZdjyYYArtbRaXpD5qhmEVbgRwKikb97g7UnFiQuQeeKXGmrDZoEqw",
  "key14": "3rLwrXcmYh6q67yrKnkUmb1LFMAETU3hoVHtkndacadxHTdKeiRyVA46YmbB2QoPPtsV7L6AcyV28p95QAGK4Lup",
  "key15": "8NwaeMqZt2VvYxZdMWVvSk51R8jLraRCdz7SL8FjPkncYgFbkSqz8oxn9r56ZAmkaC1FC5k253TitNyFjKqV5L5",
  "key16": "2rzVsBNtbv1kZpb19pdYo6frhSwGMyG6n5BCWzGLa6HdC3pBHBaE9audDGJ6tQTXwna6C2qf8t7mPUFEGCfMSwAx",
  "key17": "5MDfjMHVUxhxBF9DCwe9Y6CYX4QKvmdnXxyMBYF14TXuypuegmAaq5MBPyaj3RnrgrMknsTrGdph79vbdkXcqxzN",
  "key18": "4WiMSXbDvz4tsowipUMm12gRJoWunsvemv6GcnmrhAracy2S2hDfzmyGmzFSJxinz6AFahSM5SzaTYhJjo3asKs2",
  "key19": "3whvhULvqdzMNUWjp1FL6273tyF47iCFwep63L2sgg4iEJGyYJ8AeNjmqfunX5we48j22x2HHm8DcmPSzWi9Vvn9",
  "key20": "3MNepb5tEMTrYG56qVL86UNoWt21DR7uwJtAjHdoTGemM3fPGKnRZxpnF1TFD8sErhgZZxCwJEeSzYUAUXxN2Mxt",
  "key21": "zCR29HYs6u3K4TnoMEE58e5PVKHFshYC5g6f8u4EHStdFhDVYVQRDF6e5aDnkax6QD2iJXVqJ7UNm7hPQUbDeKQ",
  "key22": "43eZ3LA7gF9VdmvbFgA5Tm7a9SHd8mwPtmX8Cdw2HLpoSBg7mXdv1dUMPpeMv4xjikVUwgTWHfsFk4GS1Kdw85y4",
  "key23": "4RJkvKi3qhr4wcewgvH7RBnYJT8EgWQAppHvj79J6NQPzMGBqtgaJVEHyndNvb3zZut9UYgkE3BjA8K8FneAkx11",
  "key24": "4pyQH8yfpLAE4JZEVr6mw7BCVpuA5Xhoxc8q4Ve2pXzvTXnFuZHWk4fVUwEGahaV4X7Byw5EYBbxc9KW88Unpe6K",
  "key25": "2dA3Gtxx3t83fvXfCUYo4MrHkaYJijXqEbkAsNp2cYxsKUjAxAFryWzuZ5jh92Ur5NFDCZHy7AgGFgQYthzyHtGB",
  "key26": "44aX76QGCU38KYhx5R5RTgDhnTU8QEZ7t88J4PyYDdv9JdW3WKnarBJMbFExCcJsK7nEGRJmCZcqFzNheLpmX3ZU",
  "key27": "39mwHBuDrAQSEg9JciF48QZoE58FeZhH3pDMyRne3f7EYYWAVb1zbgGPfd6xCKuQhG76LUGG2cU6VFTDVC7VNzUi",
  "key28": "4QZU1JGo813VNBbtAdT1B6APwdHrzA9YxaBrDdemxCEvCgdAaFkckt3zXwbkW7Kv6ZF2i7Rk1rjVPX1eM23XqsVF",
  "key29": "HZTR7qj72vPrNm3xj7NewPh8K8CWpqTsbmMSbKtVVCLyCQWFiBeNBnYDz3qaeiw1K8bAuCW4ZabnmeVN2goimYn",
  "key30": "3oucp6uDiE1anmuZcEKzdt4eQELjX58WijF7H8HSUK1mzjASnfqMd3B7SBUM3jTpMSgZoMvMt55UFD1BsgMzW4r1",
  "key31": "59Joxt3rhysPaYP8DADuZPPgRAFmJDDSkdkGkHP9QXgSLMrK84Jk16YqgVEZJaKkF6QL55iSiZqJb3pzwPsRkp6a"
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
