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
    "5gidM1KKfrq3RuVmB2HP9cqNGUi18pAXRRj7P1kKuPQwBebecoqqhimYRksffTPZf5egejKyW6Z9z9W8nWVhV7Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bTtUhbMYrv6b1C4awV5vPFYxJP5RfthhMD1aDUUg7nyzcALa1jHk59gU5oam9gihi7KfVqSeSr2qmSKm3axjAUJ",
  "key1": "4g17zGNEKrQXzhRvSwB8XcqPYqDaL3yRD3XgvbQzYFcbbeBZXMuWfLggCG1QJbrx9sKDUmAqzNeRMpuu2pkboRHo",
  "key2": "vbn5Q1544oEnv3LPxLwhrHAAWHCMWZiKUNNSREy5vtN2zU9Wf3KNsTj2kJEfsBBm6NMkikSGuFoB3JA81WCakrb",
  "key3": "3cqdBoD35zMZRFKn5fL17px42jq6rz6e4ZUFupjuvfa3dXeQQtzq6pXmi6bKVXGTr2Mtvj3boHCvd1U81tDGesMz",
  "key4": "3VJbwHiccRnDHyM4WkhSuAxfk8B2QE66it7zWNRw9oFSxpj3yU9tAgsY9Xa38KG1pF7vU89xiDCAcoT25CJKDbtp",
  "key5": "31SAbJktq44ALjNPfekUkaRQsii1TJCbnUb36boQYbWMb7JybTrmghLxeRcoE1v5KaaSmPAsUZ873dGFQ1pNSHEv",
  "key6": "66eevSD9dVBsA4a8y9Y2vdkHDXg78Mhyy3suPK2dj4MoHjdndUd9EpmEpq7YfqwMxWMnqC9jhtHc9HA8cKdAdqTy",
  "key7": "25r6xsLsNSATYAiVMAGGCuFtocmEKc9k8ewBY9QPTruNka3dno6LZt5BLQv1Bi2i3CGYxBEZXe9B87KAcLfg5NVE",
  "key8": "4G6v3omjQg6hYefPvo1roVz8kh48NwwJY1kgMDG7Ek8s4bLHmZ5jgRwEuoPVdN2PDGJD6AsTtZtoqDgodsJjz64b",
  "key9": "4pbtU4Q5bxHStpTcY6tA3HB4hNPPU89pUpm6UPtzv4eqhNXfEAhP1e1HJxFN23DaSBnT6nxtL2rX6jm2zJsEsS4V",
  "key10": "4XpnnzyZYUku286quLnC75HTcrisxPqPaTXKDGRPbtifxi9JJ71uPr1jKnUVQAqYvaM37Vj5b5eqPyBYyrDM9pV9",
  "key11": "49Kodrahw43Lm3pWkhxuJ3sW4ia54rHFQeyxF6jfpv1zjiuhiTJPXonMH8dc1FUDmgE8Kvd3KTG929jPp1toD8xp",
  "key12": "2tSJKaKg6XpmkVzoWPCpWBSfN387wjK2x2q3fASYdnsbtrt5YLw2ERT1CaymTnb5TK9WPrDo9esMVhtWaA7FSQA7",
  "key13": "4yBf2BarC3QYjiX4pVji3rWGfqakHhBigJfq83cK7ZGHro5BPzRFHsehS6wRyjFzoahyovShvon636sXa9kQFfQ5",
  "key14": "35cBwrQXkr8cqDsMF6YA5cBioayN6Xe1QnN2U2tsqngHsED1g5pQLit65C85ReUYWPPwXjA2LK52jdcn9Fb4HSu2",
  "key15": "3crwXft4AMwz7UYvsca1fw3knUwZ3MGRh34CeESDgirLQWHHXUuV9ii3UoirRS5Hw1i89UizGhJStKGHA6oBYFCZ",
  "key16": "4WWTeFyyw1UgzybMM894WSKRYQLGNNNgXkwZQereKn4MxmCUBV88yJXGUxuSTJEjvG3G7AapJ5fzATLeCrh2WtqH",
  "key17": "23BLPziPo9ogKqie9XvUMAmRcsfJXcqTKhmqx2G7paDCTriH99enTyfqtWrERo8kph4LCVyAdAgQ5kr4zjo24k6o",
  "key18": "5F6wUFBFAPx1XgrNreTRKJ5cG3KSWFY9usUp2A9XGrTnZXuTDdCcWBUsidQCBFWBjmWgPspvG1xG9JeVJ8UwrTxd",
  "key19": "64n7A5y2mwULPvCzw7uuCUDSWGL932ARXxEGCjMdMJT8HoVEZ8UkaBrWCXoxCgZssSbQQ2msP9RcS9ExgFLyuU7B",
  "key20": "3GMeBcobTy1Tb4Nk8mWqmKdqicDhkKQ9UDNTZ8sMf3ZGDNK1bNLu6mdccaTVt1GHoAggsuG5L135hgyB2F8vNwYF",
  "key21": "5jW4ax6wUBN6avmW1WaoFf1qQaBuRteCbLMNtG6PiMeYPtFNm3ffY1Cv7zjvNepX2NYsmp2anDkw9qh6hzMxxvEx",
  "key22": "4nWV36MgonBuGceo6XLa4hrKF4Jhh2QGVvSiLezUKsoFQi9BWmbLZdYP4HocaAc8q8ACnLzyJ6HCo3EyioXbVFza",
  "key23": "27AGxhaJygiKtbjLh1w3opwKciZRWUHt4C92Sgr9P4W6354Vegp4YNZAGpuqnFJwTsQh2YCdYzBR9shAz7tCcKGu",
  "key24": "5qmD1SGGo4JjW7kGLe7sZ5B1gXUQYTgqG1fwTbrGsCFMXHwxGYQXMZRJLdCVv537RNd2zWDziXY1JfjeMAAQXRkU",
  "key25": "2dQJMyCLWbsk8k1JHRuMSnEF5ezo9i6f1GmC6b7RVSddCbArpzyzVBUKvb5GGEGsJhQEJoJLzMhXgw6qEMBjXrXu",
  "key26": "JSUhTZV8L7hDZUy5b5HAtSdMhw8tEyXwZfK3kJWsDqmdB1hR2FbA1Vp4qiVB41u8BEXrx72zNhMoiMZzgYFe49b",
  "key27": "rFfPwh1M4TG5KoVFySLK5iQ3nmFPDtpknD7oiY1tgx7NZTMzCoMuo83t5fg8CHJLfCfVAPEvknFKXo37s1zsykC",
  "key28": "4RKEQh2jEBtWL7RpHP9Q4byjMe2gZdeiyQCLjCykB5fZ9Kn3dSYDYJtf6t1pNmKvffWvBB4oXh5BzCwFyT8fAY2L",
  "key29": "5ZVUMnv3JXoBmNxn3RdjRsxxGWgP2rPrQmTSrh1LHdYAieLQZFQbReQGqb2wSFXB8eAd7Xt1dvWYNXKCoDHHUQUA",
  "key30": "2rqnKreY3CNmRymUBcS6DRmWbuWvKhRN73p7NoHBw3uSz2Gcp5pTEC32UWwwRZNirLfpNNvVjKNRScHASFnvUzNZ",
  "key31": "2UPtHjvyYsTywVSr53vkcZ6d8QXrgk6nJqSMRSd3bUxFXY6mbodk4EE5CBo3T5UHNXUjCP3JAqe4sNqEjUwUa1PS",
  "key32": "aAPG4x2ehZdpSQ8kwNX3sZ7J4UrE5HJG1HtACyz9mEVfnDj8BqcQHUkqSz8yGcWibCeXU6ifkMEweTcNmNqtdjL",
  "key33": "5NQRowV5ZwKTYYuyvHXKEfRDtai7YPk2b3ZE19YYuCp9qkf7Gzb8EyT76fLMtjZsYx7QRQvrZoGuL1c2miZQzNHj"
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
