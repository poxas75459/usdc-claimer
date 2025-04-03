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
    "5CYhcyUevq6K5JktqWELu4A6friNrfZ5m1nXy2f4Y99pS8eJDb6djTmkSbB5uFaJ9xPb6SqtvjV74z4jzPL67Yue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWTJotNty7paJ5F7rBKQ7YXoXQum9YzshJ1DBqbTy9sbRGRJyj9VA182uNuJ835d3DdEVFEszfVGKeqrCb1jNiK",
  "key1": "5wopGRyjYArHPFQ5h2CYzKiGkwrmunyDAAaotK4C2aCFXdE7wPAd41nioAPXZqgiX4yhYCNSg2V8pHk7hmR1BDAw",
  "key2": "xpt74EMRJevoufM3yeWAv2q1SFiVzXXb9HP9YTC49BHxte2HaaH3aanGyv86t3cfhMF6w9Qb42RzhZTbeNkwLms",
  "key3": "3UzA9BAssk7YusNwVfikfouVWEKwHAqQipfyk2cy8i2nS6bobQNiHxfAJ6Dxo7nQsRi8Za7PLsTTmegLsmYRWwx2",
  "key4": "2Z7kL2fHUwt4EH2Y9yuJKhcNd8qKLW4Y4eUbuxwPBs3fT2KJZqCjMjLU4MkNr5XXwATEgtxYKJgmi7zu4EWbhzfb",
  "key5": "F78dxys9zWbTZrdCpPFQ1iY8SJytSWnx4XMs2BUm8ChTHFaEqW8DWoWikvWWJEDMRiAsFJWSKMxST7d1zc5H3fz",
  "key6": "3M3nfvXuEWfyHPJTTcuGvbCEmYRuRSMHsF9By1AUYSV1h8bSRqeZgQF7AHDX5uLUE2ks7oTv6E7JJkvvken9dfWE",
  "key7": "gVV2NMvKV2XNk7dBA92Wzs8N7x9FTSiSy6ksoeM3Ba9u77YYxsqWYZbyw7QJeazkcFoQsuQHgxMtpHKGeTskE79",
  "key8": "2zYk8XK1vCv3nX2St6aXDRHEQ7dCCb6AYXR5GPsCjA12rRgqqVnEDsRHsKnQW3u4Ah58MQUrVVn9ZFo1WB3CyNU8",
  "key9": "2QuqZeftKKraS94mounkhV5jpMMkxkAmRNSZbX7mmJfmsMxLnYqYdEY1gZqQNrb4Y8GNQxYHoSNEWWb7zdK1ca4B",
  "key10": "27Pa3EX5qGcmKp6GYj5ai72ngVY3tRqUFrZ4hjgZp4QEq2irBEWSMfnxenfKjdxtZBhK4TG4w7u9qc2RNW62CFCA",
  "key11": "5B91nRsocZuvHAKFhMeyft5rmnJEo4SPJw5S1N3ZwGJ9emU4JiwdXPTdXcf5ea6brEjEq49hbZkJYTqvvQSQncbB",
  "key12": "27azLXr92QR4iyKwS5CqsCQjdrKBFLGzJUG37QTungieJkrsiTsQwn2T5xRUDkEhmiPckP5aMapXgp4eSw2tK53i",
  "key13": "RhRGXxhzCi5HsKwbDipNv4gpcvyBaRhuqEiJYYXSUmg873rYLvjr71hSSaSTPCManVEKAZ7vTepAceyHKwwoYay",
  "key14": "57JMJMUotcEGXwRHrLJKHXo3agkXMYMKzqzB7d37H3DebzR4XDDGyuf4AMeYZYgdVekMro6VGU5zmP42iWT1XQrQ",
  "key15": "3njpfFasLZUUnAuHg1u6A6xjLfN1CHzb1B2NjDruQijw8gBLcVpKoj3XZ5YDcEgWgqvRp6cJt6UnNyP2NMjWkL5N",
  "key16": "4kWk4ESRgWyBxhXVDTr23RmP9TWUuPL2ucm7JVUuFuwb3h9D6o7AhksV7dYabQbyb5ufcHmVKL89DPo9yyq8wprm",
  "key17": "3jDCHDwWZoRoEPExg3k9y1ekM5VM9ersm8DL73HABBHjFqqJFaeVeDqMNPBt5DeqQFYmwnike685m2W8LU9CFNek",
  "key18": "3eSDpPM4TvS1HpgsDtJ6hfq4XwuuHioyTn9d3PU8Ah9XJZpTrMxUTdtDUSgf32cV2FWpx92qhyAQp6F44RxvQfps",
  "key19": "4fWiyuJCPyLpQaazWsxzvoXz8JqE83R6dssEJpbCvBHNRhh2w1MzZ4B1eFSYxNpapeG4PwWMwn86x2ypTzcgL5K6",
  "key20": "4LooUNo5JzRto2y9T88aFzx43CCJmLe55stXSQD6Gsdsp7wX8yzWXc9CDtSTni5XjbGGFnTtUMTR9N6nJSCgY8Lr",
  "key21": "3mymm9JKychHJMyTmDpyDj64ptHL2L6CczBB6JXfCpcGbBHhsibmrVdsdfzts1E7M6sh6wP1UvkQ9dS2AWE21o7H",
  "key22": "ctXqfJc81b2LBMtwAPK6pYxER9mg5pRH3upbooqeXoLQhvpmNoeMR1LLzPeZb8zmdM6kYnbuVzdwmYdcTFU6ZbS",
  "key23": "2Fc6MhjeWioG5P2WSfQNaXUgy3NfeTiCmi2EXEzGbrU4wEewSaTXTSBAL4rhpeeWF3PUGXRKdZXKksGneWcJ3hrM",
  "key24": "4w362QpynbiBsxysNo3EZszz78yovnjXt2czb8GaFbCqSeM1Tvoo4ybbqrv1eRdPHFCn9CXpnNfvA96H2zuJk7G8",
  "key25": "5d1RwjKWAymTJpzP7YgQb49S1AGw7xKLQjmirYjnx5e1Ui5XDqUZZGdaekp1MbCZd2sFCUSixFv1JzguKJS5jfcx",
  "key26": "mk2sNHHvS5Lq4knrosFhwo8qXWdkhBZ134aUSyNq4nGZPxiCNPPrg17W1CEnnNb4nsZkTbzGF6w87NSVQseTSMr"
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
