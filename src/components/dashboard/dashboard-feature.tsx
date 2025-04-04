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
    "673SwFQx17Yf3k3hQQJDuqeeXUccc6Hhtc5xVoi9v1g4b2HVppsbR6qSeyQ7FCzYvmEgvpmBgfCg7yCn91J6jTdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8qnowgBepQLgGptFiybb3S7dssKX4C4Pbifabj1PQDWz61WBPq392mej2D7Sc14nryn38kQXgCzoG5CNamPws5",
  "key1": "4gqv72XvsjWSNkAb51GqvBMPWmxxScPZmrtgZju94BfcvX9eTUhNSHz1g4Nq3K7kpNJxiFv45bJWmfEPakQL8rwK",
  "key2": "3VUVNjkipRU4bTKkViwoRYMCi9nn7rREgnHfhaPFqKFdTE1Hg7vvqx2kUtff1poWpdGgPMSo9euPFSKjD6GEGdF9",
  "key3": "3ax2Yk6K7kkRuQWMyo2m6U5Lf6nqvsw6AJwCbE6gix6e7j26MjcnZaD6bdX8YcC97L4MySWKvkAtw9AiqM7Pf1PJ",
  "key4": "54hy3PgzxRSknknBzyNRyAVWAjwHAxjauJKJwhwnMoYPFr8WuzmFpzppyRbF4QHJ13qfrgzJkPbzuvYrWdNGaso2",
  "key5": "5kTQBRNwj4qV3A4oqZbwBmHi3tSuyZE64PcvEHZbtEqS8a7XuYLBiCF5Sa4859LnmRN1spwSs7Bq1DNgyByZi2u4",
  "key6": "3PnfMePARJ6rmjiwkDdydfutW4XtMa6t2dvKHuURFsSQC8HSacNxWAjiJxFPDotL5nEK6KjgFvDCFEY5ddqyEQiC",
  "key7": "58LsxyJ5rkEm6qLrsXjRdgQnnt9D5hTKLmuovXcu53h3BoxaDwJfdTt4PffKacjpG1Sow7escoRxUQEK9hvdUHxG",
  "key8": "3BnKZ9fKgqbo3iFwJTE6fYrREkKA4d6SU1Brmg6zNA99YicDUhenXTsLsAmcT2i2e5EWCha8v9tXHxZQCfBYxX2L",
  "key9": "2mJd3HvJJGLfTkCGthUep7AiEK21t42bnE5zPtr51q6iPe7PH6aAkkzAnaCWkxAWTH27DG3MqeWENBKKX6ie3EpS",
  "key10": "H6S2unE3uHxNk6FyLBFGkZm9ZnBmCncDNtHg7DTxcVXrojrdcx8rGGatoeSAp5s76k8yTKasPjc9hu1wSd6qq4W",
  "key11": "5GhXWvfMRuEd8FVutMv3wEu87Y8MFpzhNdaGSc6L8nnnAYnw8wJ1e5MLw6wULGJppA5dv2Z8svkDbAGPeo5bxof2",
  "key12": "2JsHHJpKPVnyeod4qDPuSDsuqaAjUnp9cYV3MidFRnhpkYzAiz44FFQMvhZXwZWAAbVbsA8cg89j4ELpXtw434aX",
  "key13": "3TLXvSHAUv3Q7W3Jp6ixuheemrQHNjsRQx3bFivnEFm4f4ZFAmyTvY2ckmH9pZ9TxCcyEWdttGT5yrZH12uR9xfN",
  "key14": "4g3M7rF7a8p7fL9hYi9PqwJSoS8GZaGrDf8hH16yo4iu6vcsDb37fX6Qdvy3ftvGQjQxigt5r5iiW1EUSYbQ4iGn",
  "key15": "32yA8TiVYMWgfHUcHp6k8WMe241rQLLLxjgk3ENsXnDkGv6tNKdsWuMzY4xUV4fkWLotnqWCnyqx4TKFpF1KW2Lm",
  "key16": "5tp1CQX28Y3y88SH9hKbpJVu54vd1qYqqqFdFNeRDSRaaXBN94Yjt5F2eKFFjrAp5D5sGcR4bsaruvyR7MJCNLpx",
  "key17": "5cHjwqGkSbep3VHwCJbHs8VmoSSEKgcBo8zwdMrQXpJKsLFxptASHNcAybReykRKZizTt6JdLTusZJg6czaL1qXT",
  "key18": "2yqyBYsEpBQxD9GGP9qDq4WKjgriCHUWVNhuwsYowvgph4samCSHCoNeYPmV8qJGNR9qbmku3Qd9kKqv2aPvjLP9",
  "key19": "5qVCo4ioytPRZMkGvMNP51vAahCvmPNHUxuakStCVTs5V4pz89QrEUECiYCoC3PEX1YeQX7iCJ1CEhP6TeiRkoEr",
  "key20": "YrMEJgP4a8f1pQv5qMgQ6zvPgBPnXtjdzXHeEXvkrWqX24rnB7YRCvgyJtLXCfy8Yrhcqq4zwz9vCmYXxAZPKjn",
  "key21": "fjWvxAADNB5nSKdRYuhpdAkT8qwkC2T6bXUxdBwhfa7TDcvxGCYpaH7tZgc2cnYt3m5Mtouv4ASSAdCwVvsUgfn",
  "key22": "358Nzr53Pvz8xQiU2jn49fqiSiiHot3WWaBPYBeYNwnzWUwrNVYd4zR228x9XkyhFHEoNatzqfVNStyDmP7o6zx",
  "key23": "4EUnxPZTVNfxjUsfghLtW9TC4egCmJQoTahN8iBCrckwZWoEVVXANpw5uYKbsKwf2qrsQFhm5uFBDQ6CMt4vSP64",
  "key24": "35vRq9qzxJEkiwZD9Unwvr5AhuyHdPFVCUV6zWUWa1yWkGkJDqaqydFXxUM1MyZ8pgyKKYRJJNS9qFVHu1QJxiww",
  "key25": "51rzQkYtgWrhiK6JYopiwEuerYzbDfKMsBvp48LHTb6yEZfN3HSyFshxoabtpQBoTqMtwbXMuTNDD9VVnXWmmrGJ",
  "key26": "4QWuXiuF1MfV9zdz78gnN6jCQu48oN5TVokVDMgVuybx1afY1AHVUkBFVKo99kxgfKmJmGj6Ez11U9NDYndLi425",
  "key27": "3PcBo7kTWFQpuvJZTDiRbMD9Y873xUodAmZhYSujKD8yNKVsSiwjdcqVBP1FSFfJznB4yPrEHwX5etUvgXKVJQyJ",
  "key28": "4xV8fjJDyjF8MNMCfeMWDPhvoefXy6id8gGMhEZ11iA8sX4xWRBAwSUr1duze5C9jGdd2PTBe4ZMbNxVMXF5qQts",
  "key29": "4UXdCDZPqe1WFy2jaggKNNeCvZjtJm8w8GvRahfnTVGC8JtUi7PhRVsNvdK1Low8k8ahgfR3P8RAnxzS9oQKjnt7",
  "key30": "s4NLQFmnE34pWavhYn6XP2xWEqKgvB1wcT2vuRjUkavAiQSKvF51wEd4mRtT6dHALChmo2Fsj228yG2wZhXHpV5",
  "key31": "3gFm5VEPMpGMVwBwfZ5akMUuxDKP6HVcj6Xc24ogvqCqAhH7LTaZSe4W8heY2qVhwZ4eNZh3pL2aCwA6gofX8uC4",
  "key32": "ktfNBu6oyqQuUYVyfeNV8sHUa1xoAZjNG3CvDspCnFAahyuv9sut6RJ56vZpgapaZFqHkL1KFUzmHfgLfZyoB2n",
  "key33": "4TxPeUttzwafRq8jC8cVM4gVATetMzar8Yd2Tm8RYBYy6p1JZTAq57fRwMDX1LdrB1B1QjsHSMCv4ypp3y48ZeE1",
  "key34": "2HwBQcthd9aW5V1TwX18WrLnUdoBN2d5xvWz1eAybD3WmDJbqAsENQDbGRLvHQ9CZNnDP3N9tAP3XMthdLoVSonb"
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
