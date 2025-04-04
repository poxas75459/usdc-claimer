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
    "3u7vRmRSTMEzcXPH3QyBy3hKea5M2tHoS7tUVqero8yvMFV6XcCV3n1e3K32KFRK5GmwFYgJZY4EnZcFQFgob7s4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cd9YmmtDy9u8ZkXntquFC8Bp4QCk62Y7dEMHwBgpz14VvPithUwkGx7wvC3BGt3jFkTRuKx923G4sgRWsX75NVj",
  "key1": "bMFyf9rcSNLwbBw9U1WteusdozCmtMArDdnsHPsvrf4dDppLXuLkeAiidfKRZj7ipFXcrJgUcShFLQqPE6VAywr",
  "key2": "2pECPViFYtrcRoRDNWfDmDsh22kbPpTc3ffSLuzX1hJGf7toywowJbowgTppj9Pio2eatRL7eTFjodk1rwkccFvH",
  "key3": "2XQcUyruRcn8tVjqD3VUdkjQnvMWHVJLcymsjaD9rwkt2dMTMrKimVvBjZGY9Wv4dYyWJuVAMYyRW2yj84p3tZAQ",
  "key4": "3GfYiR9m5ZRcBDHC6gyvryEWoNoonmAi1k2MGLsCXicVjJXLoAPsiBGWPG2qTT9eCb9qLgmGGzYBo1769e1Cvs6s",
  "key5": "DLxNk8Bzgrbi6N7JcZ2Mic2n3LAyXwtTg1vsMqkFbtAEi46TLpQj6FiSqbeiJZr5FsZSWW5qsXutMbn7bJAU84N",
  "key6": "4pUtM7TLqTTwGGSxP7wKVoet6nYBUfdXBgmdFNDiCGU9WCxruSjTyimexg6v73kVQHjoXYaSRcrJAm1Pe6gZnA3D",
  "key7": "3NsiH6W2ULNLc5QaXCFgy9cMWtxmV2GvFL2QWP5od1z47yiTjfCnNrx8eQZ1SBFbGUxAUicgqXBuWiyqpjeJuk6x",
  "key8": "4gwecKGrA3sXpoNc1nnWMKiGv58mC7HcAWTTHpCtz8tevMS18TVxQPQWTEbf5bFWePNMNtzV1AfZdEPDi5BesXR5",
  "key9": "kWV5inoTstpYGaDwjc8qBN7d2tYHZwt2BCQJDWyDX6L84VHbRBzdrA2H8gCyugcceF4dpqLCFM3VuyKUWGms7XG",
  "key10": "15anLxSEjPb2bN4jP2UPdXZnvfLadK3TmSb6Ra642JfwS7xxGnEaPykozS46gHtqDEAb6C2wjuHh15kWW1BS5Wo",
  "key11": "3H4uUWtu3rYs1vDJv4gEPBpVpbHVwnLiUAHxjAe4w6phV1A6ZhR7vY6bMe3kS7ZhqN7wH96T2C1n7Ei5NNmjQyzW",
  "key12": "3B4ToFj2Rap2qF1PvEcbj7GD79BkaBUun5WCjorktFtZzhJAHyCJ2X4ffsFCXhiuav2GiY6ckdMAuRTgen9DyTNv",
  "key13": "SnNEs2bHyyh4XZyoZkk5w1CQofGiNsPUkApVeMjFcTLbioKg1W5NXEGCe2B4STLs9ywj1ALxc9wkCKFsfDvGzBk",
  "key14": "yngizEe79QFx46dPA8xvNTQEENF7iQVvZ4Rp7YLHBaeguLyesaTYhPkDWqUQsp4URLDskMaqa7YDEvGmYdGSaMZ",
  "key15": "5ZPhxostixVuEtcWNQNBbnJLY4mY2dDFJUDDxBcan1yo1ZUgGs9gJKr6DwJhk7EQbxVGV4r6r1u1D4ogR2hBMh6R",
  "key16": "5mzkw8tRmC56srDd6pkMhcyfoQYGpDnGePNQFiHaF1ZKD3QeZiJnohLQAfWqpg7ZAA6NCttaxoYzX2nhv1KEGHmF",
  "key17": "2vaJ3RJCvMLtrsWdXD9PnD4LadiCCTgjzxwZ8VJymcE9FtsDdMBgPreLF19zuS3upqQDQEgjxVHJi4VwT1YaZvhz",
  "key18": "5es5VZJsew8aX8QU9q3jHdzFgi5Wy6YujXE1RMxGmCuRwiA2PtRARnM5mBhQYdPS93k2LZ5UnLMD7W4zP8VD9fW6",
  "key19": "3e6P8HqSiCcekb4k2jLeu3rWKXUaSAHMPmcBChRY6QQWu1WqWoABgPPV3UUqKvS33DUurMKxRrWkCkHNXy5eLiQU",
  "key20": "4yzByfWkZauAMDbCDJVVhbuNbGLQULQ1bnNhJL9gDP36Y5m1MY4r1eoKhAZcLnsW5gYy1JnjTQrgDgYJHzTyDo8A",
  "key21": "wy33RqpoaQtifd3vP8ovrzfDdayDFwppcNHPfCPsPfrEXcqv7A1zBW7zXCzqT1WwZqCQ7HkfKazZX6my9PNKdPC",
  "key22": "5eXP2tMADs8JZyWVk7X77BTDcHhrRP47Q87GVvLd3Kgrs4F45oWTuy867hKRqZvji8XNMZNhNL4Dw6i2Kf8Encas",
  "key23": "4AMxAhPjriCet1VWqMCPGPQM2VXPzXGvEUBkbncEmnSHcYav4R51o8kucVnZZqzzQKxTyGdphx8KNib9YCEshWPM",
  "key24": "2WjjimkuDUWtVjq6QBYQPstGQ4TsRW6mwHNmmZNezZ7w9edbPyVFCGg3pbZNTp4hqCy1Cp8bA4FabxuG3DnTcao5",
  "key25": "3quifdckth2awEwnNWW1FXoRQ6EMKGUC6js4mYdPHy8W3bYNxpj8tTxaJB5eYeNkuta3X14YEUThePS6JZjd1EjR",
  "key26": "4Srqi9m9xo5MDwX3QvTgt8oZWqRBUHULqHih7gwUQZ49eZ1rSNbeiSLTWPkDuK4PoxZmfeG6WAGwmVneP8vsaMms",
  "key27": "55gkFz5CE9Ye6xhvL7KShcGFb4aJ3XX3PobaAebPsFGF9ZvMidcrVu2DhDYfKmnPQBbK8dBUdieKQSvLG2LEfcQd",
  "key28": "44phbtZrBPVKVE8PYN4jSQbk5c6S6trZ5nbtCfEz6c96BRtKnFNxzg12Y3AQJxmQY9Y2UDqx13HBhJcWQtz5zF3v",
  "key29": "2WDF4sswcbphDvWyQFCdwh9NJt9kgjC4yByqkKyjJN7TLKiv9bfJPFXQNp3Yo67Z51RqEPB5ZZptAy6oExFoJd8A",
  "key30": "2PrTcG9wEkFeERcSWhLt7o12GsKrBkpeDq6eEMNT5J8BeFkGcTiCgFk37chtd2CLpsParrRNt11WDmukUJvLTuXS",
  "key31": "2ZJsQzuBEGcEWsMfMQWGMLTPYYmJ1Jsp45wsHFFUUhesR2f6xQJnEHhaXGJJt6x5FqeKZYhVVH1BGoNdsMhFvzrU"
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
