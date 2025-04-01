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
    "5iz7P51zjjUzkbc8SR2V24uYBs9JdAgHoHsKojuduvkQGeikps3EunpSo8SyCq5iuM2uJvtbYZcRS46oYFyrYiA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3por3z5rqbFUzHEqLqk7yMwL5cMcYAviHoAmsym8mUnfd3QuRwSSJbLXPAW6o6V7mwqXhu6w2VuHXqZ1hrDH6ksC",
  "key1": "5XJnG4fFANSWXmZST8icWk1fUNB9gBhcvNGSNnB716jhiS6oGJsUrtUCXpjHEtXHgjHZ5myEwAxb6mAarraQdm6Y",
  "key2": "2utQKb2x1xwgkr79U1pGwTcZLtnZFt5cbR3pS8myBU5FtdJnJhfLMvVjV8UW1etFoSmKRDAXQYrXAUSmktV9biZ1",
  "key3": "4CXTbGiY3tPUpFnf2ppk7UQR1jmBpudLC58NTGYCaEt7cHhBXU1qbsGiekUBdso47WD3FLgVBR8D8HfkL1CzTdrW",
  "key4": "3sr5xP8poZMxH4czmkZLAYawjBG2kqc9notjfED9TXfmncSH1QmPi85U75DDUjPRU9TB9SuKr4DgN5QHGEJMqdvW",
  "key5": "4b26YJpBykEobEJ6tQPgri4madzZqMGT8N66TPjcxNsevPQLEA4xMQRz7dNsFLqBgQLELDZfHC61EgxDUpbEf1ZA",
  "key6": "5UqcRvBEonzXo5EZwjwasjY3z9GP63VhXZKqGAE9LhYHhnQ5V1WsbgBDkMnDSqmz6W5He1tHSVvate7zX1s49VaF",
  "key7": "aHGfDg12XJ1xANZ2UBMzUyQzWTKQd3eSNZ8x5L6XCc1hUmdGAR4nQPxupw3RFHrJ9LfJ7Cr5XvkdDe1MLbFs5TQ",
  "key8": "rAYLswbgMs2HuQrGvRz1Rn2vJPZRT783xWb9ofs5tEvZ3C2isDwCGzpg7VZFjsoqoZW7RfX46rtTFD6dGVP8JNn",
  "key9": "5wihi7kSoBthJZJpYUhgx8fNCQuyscJ8K2nGNNd8tqgMbx8buwWTpVjV6FZdGxQ1cqrcU4QRStgciYA7rBE4XYHT",
  "key10": "5gA7SGM2fj4CDYiaVianiftrKuzVT8JTPHMcfWcBEG8pcpJYYZzfnmmxr7MdRjXsYTz5o6CGHiLHYuH4GoheP174",
  "key11": "3aR8m27ZQQpfuB998nJkg5bwmDwjcp4DZQNidc6hVLZabWB4H5NM5UcPmVZCHBUs1qrREuvGCvGyfsSvTQniJhC5",
  "key12": "4vcgWcDZoa4umCXp8x6W1YGnAKehqH6HwjsnSmsfGQ619Eiff47z44hzYBkMH1BbfmRACdqVahKQWgqUmwicUBWC",
  "key13": "321QwNP618ZSMR6XvaUmA8FtWdswBv4m4XTZwJmH4oRtcrTMgqzRq4wGDrjaHAg5D315EDfbge1bekXJw1VjJYHR",
  "key14": "vQG8GEzU599p9i4qpFrLZivxSc3BK5eSrKpsocSYbq6UqJMFp2JN7V7L2q5XW98gHgcfScSPYy7HrQzAbEniwQN",
  "key15": "4teVLcsGyhzpVQo4V5Jdpp4XHnokngBXkUwiAmsYFtAKwpfuEwCr3XyyEFrKKp26yXDwvWgUu2BGzYRChJeMcbj9",
  "key16": "sFhHMUYcook2skp3X3c7Vx2TyUV2EwpbXHGDFes7po5F2EXTKKZCKduviMY1QmqedzpvpYCBGDiCpBExAJZ4mgR",
  "key17": "3av8WFJ6RVVtbshdtRKaDx68w5DRMhzrG4ps8Lx8UgafaNQDZLUXGiyhsZFeTaebiVLPA5bt7eBGHLiVWTo7BuuN",
  "key18": "2iPLK81ayJmyoCLpBJJKrqRxM7WDpenu3NaJzykfZQP1iDvgg9UbEZGwqfSv6VZ9fqg8UMiGMwq9uLhs43PEE5iC",
  "key19": "4qmynfD8xQLwG7cVqxbcCTgoDrzeqRFdjeBra4xp9Gzb7rE9f9nHnkxtEQruAb9EGofV7Y6m91ZZmoueSDUMo8bX",
  "key20": "4J81Wd6m8arGzArLJ8HTRTqsPQKoot9pT314eQmyLZKDcVtvz6dV91GaDf7Hsb4wD1MntuZpJU7kLVKmhejuvDuY",
  "key21": "5mVyFNjTzognNkkNt35Zs6k8fmmhU2hUffwLvBhtLMFpvAzwsWM9XGvejM7graGTa4fS2HyoPiGdT5eyS5CQzo3S",
  "key22": "3WgJuQdnvzjUedeed1YERaWH1kTm5e6BovwTzcg7tqCf1ijyWcvcSeKSqy7d8A12bxWFvRbFGcPrU1JtTiSUVw4f",
  "key23": "2riKrxLb6chCpQR42DdoFphCUrzgjTJ3MDzJEVGYGZabWRNc33e3EJRgFHK3wf24FYhceZ66PvtUNPduTTkFSP6d",
  "key24": "3x8jnQB7UGFgUhpEzYP4NY4HyULTXBWx72ExtwiXa1NHRj4r6icYEG6rYyTUuHTkjwoDf2Jk1ZvF6JVf6Cv7UdN4",
  "key25": "5JpJuhv1MeuZaJiM2dFTXHxjVnuhNvzF7Zz9erpWbmaWeWEq844zCd54ExyvKis7e1NvPSZWTAtaEHTnXr1ULLAh",
  "key26": "2BswrTfXjQ26fxjBBZzQHmUUroJZHVqZKzFg99nMM95XK4X4H8bbJ837mJ3nkBpKjxGsCA7xWZtuEb7EtXy3ZZyx",
  "key27": "Fn9F4gQcQeXb4KnkK27EQzFKchGumPqmR7AN2Pst1uqiZS98z8m7jMP8PBRVidTBfEvDHRVXb2VjFXtZ1SuBpCr",
  "key28": "4fdtgVhDuDVAiZ2VFu5QjQxK7PUqwfdJGfkk8jhWEk7Nxq8c8umZS5pakboC6vpFT3YcvJBA5WbPyVfxFb5xjjLN",
  "key29": "37qoTK4oToBePMoH4AwizUQAS88vLZteG3jbkZLqDF5UETNyhoc429baEmoW5ewktoBG5KEiXJzohTypY9JwpZvz",
  "key30": "Pj5dkyftLoHHijjQpGBxzL4jCWQaU2QYH9JXFikheADsTuhNXt4evDnVk7qf8K24tkdnB5jnCH3Xby7hTaT4Spk",
  "key31": "53eo4dRc2fi8sbAc8RWYzm4qhAsmmojuK5xsV3tnyV4rmueXwQNPpCLL8PEtUAyXr9AFtbDrQRkJn11avF7pzSqq",
  "key32": "42Wvfbz1kzcQj1kXomnhqekgRYUBrby6P9Pn7GX8q2C4uqzZ8fDzxxA1aBnYp8ri95JSCFZEy7WEWx33bVFysGMW"
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
