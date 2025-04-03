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
    "2DJe6oz5hfqq4vGYmqnY5wtX4f89u41pnGaZTLeXhTk82VJYzcbp4e6XXuuRh4JhmRMUsgipVSV3LRL2DkhdDac5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YL9zFJg1NM5DSMdzkhwXdXFjMxk3szoiF5rqkSqr19TwvpQzQevjUCH1Rkvtfogf8kbCW9JMx1QCqq11vTdsSMH",
  "key1": "2ia62fqNV9RMLwJdtYawFjGykAyMdmXFNkHK5fSzxZEQs6Bzryg1ejtxFdhbXXHKadRndf9xjwwKqW6HQjCoHqQL",
  "key2": "5kfs2J3vGa7B4TqryboJgLEH4ytB6gYhNFvSsEPpibxtBUBpUV1tNaKigKviMtbFuDwcu6gRvansrjdZGbpRtfRd",
  "key3": "mcwXF9jtQ5yJTczRGJ79vJb6a5PMc543J3izVj7XBKnAexu6xCbPp8mTy2X9tZcuJVboT9LweGMDiyH2NwjhQVe",
  "key4": "4FQinJxgbAeqZrfSvu1eWapS8BuG2cc7XPEmLb32CBh5eJ4rj5augfpdHxHotw87Ehx9CNusDtmux6sVgb6ZiCua",
  "key5": "nav47s9GEX33jkvYj6kx9g75w7vYLfcQsQs3JxoMKoTeQWJLSx5b3n3vBtHy4QHuATqhwBX3aWeu8DYUwTRC2WU",
  "key6": "2QAMSuVDT2ecZg7uASodf3vCa858CNi3LegiyHjtguEGdvZXhduVWSmkp4DoNuYESnCKaz179MZyNtRFg6XoN73a",
  "key7": "5AQzrXC7gunPv1gn5264kNgRsttw8MRrTCHDZ1jDpVwPHKNS6uJ2sYZRieNnvWA37FZCBb5oTmAeezdygS4Ws4eE",
  "key8": "4MSfgUb1oQb6kDZDyQpf1XScnwuEZcrd3rM32atqgEynbAyTPa3ggGH9VEsTqBWbcbeNjnW166kMRudwFcKWdv3t",
  "key9": "2XpRZw19CU48QwTDJXJ3So97T1G2oUzGZRmNRNjtKkkpBxDU6EHrmaD6FKrJm88MW9i2gTVF8VPXtioKaNKD4NN5",
  "key10": "vQ2qwvTbiWTfvzq96pSpsWuMVpQaHkepY8D5HsH99MVfeFpWrSKazAHezCVkoFtYX1wCow7tZ4e6bwJvCrraBDs",
  "key11": "G4JV8F3qiANK7Jk4S3pEzCGF1GLaejUbnLUJ8p6AiWU1nRnGv9bULUoErixJ3TypzN1xHQxPA8uUXGPunxTBsGA",
  "key12": "jeWjGyFEdaBXxCA7EU261wg1z9zKZJe1tmCPVvVdHNRU4pv6FJeS6WLn1Z4GRZk4XZbrvaaELnEA4V4gagtWi7x",
  "key13": "5zWbNiXpzKGhrfPXdwTPBoYXmuipLSkLS7xa1zYNusuixSRGh7xJxEgdsnJeuVracQktufcyXsyuMBMoievY3pbz",
  "key14": "2vWtnK7QTPp9DQ3Wc89XjiKetV7z93dMHmaVKEAZSN5TAX9YLvmXxgS3Yw5YGnR62dmEAYT8tNCWp6ZP4mo464R8",
  "key15": "5ikoGtpEzS62pDEMS5uac67EJS8uGKe8sW2yH3pxLXSrgWB83DgSkdaxvZ5ipgKYdHKfyPMYfL4AKoumTMWbUgbj",
  "key16": "5sjLdPwBgXPqrk6Uy9oH3RW5qZY4U2he5kcvUfUNcE2bdBjZXuNpYRRsowQ9NfejcvcFuMM6zh4UgANzCQC8p1dJ",
  "key17": "2RWBfw9qw6QzdBo2gGCXUrMHVThzEvn7bxkX32RWSK9LWwtAvaH1cneqPocAVwPkYeLtMG68r8qyLetsctFSpeCE",
  "key18": "3ag7GXxFFE1EWK1vp5KruZgzGLXcfyqKmX8CR15KzfQQoJnMBQVN3qge3RP5L4kNteRZztPqaFosWBk2VwNTkgMX",
  "key19": "5nVJcba56MUfWLDysHxQZ4rNkqqH8y86eGvUJvpBpuU6TSFsdEWNyTH7qPT89HZPsg7JAuqRHrXxCjC5ouJyKrNk",
  "key20": "5Kh7rZK59x9H1AFyzqQbXXMn53wwg9mpgFT6JJTHxkefJr7Ugnj8KJLgx1oQiow2joiRDEZEKjepTvMGqESu3rsS",
  "key21": "dmfZSoMiT6wGFXWSJ7dKDvLtrs3Tdar3f5RcDFeYBeeiCguhNFAWBHBSFA52KeAcLkCfLB4w2G7x2y7d4vikaUZ",
  "key22": "64dBWBapy7LJFqR7PbcirUgXuPfaSX4jLgt2QacuTaARzPMgK9kpt67bMCnJjz4VhqFEDgK1qyaeAFJe1nCo1DaS",
  "key23": "5YzVV4R3EjSVaCQjwcvxHDdRUkv6LFxDYfuzVu9JpuyoMEVm1Nycg5HRAig2coZUfYfZFbBHtyKtHzrcTgiD3mpJ",
  "key24": "64piF3Vx6EvkUhqqPbE6Y4KAv8V2oQDpuLj39D28dWGeXsves2fg89eEUZZrdx291TjcLtrPZmJCEfwhJBnXY6vT",
  "key25": "3NvXgDRzAQ8gJHQGgxVyBSgKSpFuUujy4Upq2NFWojR622wZeowuTMCC5thVcrpTKaM64UShdwh6zkRLSgXuqrKc",
  "key26": "RJxjYxCL7e3mhq2pXgEb8HjgqcNZ82GudeuDwoYQYFnWiZgu3WKAuSiMS5oQoJXfLCwzXtFst8mjjG2EgRvzxx7",
  "key27": "5ukfU474Suvg513cmYaeAZg6kWSdBPq1Ht4s5FPs2sBqFgbGmxJTES6AhWHBHweiM76GkGKNe8vLhkTDNqQyf5zV",
  "key28": "oZhQ6JLEt8hLGx23whWsqnGEb5Jevn9uc3jNCucEDGjsCC9LTmNqzowYKuFtXDBsKpBtwq3BBWixm6NEju49nmN",
  "key29": "4J4CDgoa6kBDQQ62t7dn2FXxGhNccjhzRSsnR43km1kxZkm3KG34pPaEaJmcmJQQkMdLn2PXXopjqZVU6ye1swYp",
  "key30": "4JikNgHfuiYHiuR24tXvdusDA7VPJ9E4Ro1C4n5grLFJuKeRHCYi44cBszqsH9PBUT97yAVGqBDJbQQp127f4mGK",
  "key31": "55jxAVrhMyGGe5FYrr6voEAf54qZoFipGjhu8cA7cNGi5R2nSkkSb9ZdS5DUP9j1NSVjuFRFBixtUk9zSujviCGD",
  "key32": "4FTkGcW9jzWCL4Ht3MHobzxsyAMY4GDg7eheq7xA6DfsWTz9seoo9xbeeSJBcFZcwzH5rkBemVn3WGSmkxrWK6iE",
  "key33": "6WL6HgAVGvfPsP6TbW7dCcECjHrgTqgfKEndYsFnMtdkmCRKa7gxfJvy6G1aifjRa3nu9yxyf9kBNdhNi6kAF4s",
  "key34": "5roUHZnS7CBS2SNcfoUk5HdeeeY3BC3nmsfHAxxbJig5TQo18oiwKtdxYXuCsMmYPiT1D3rTTSH7iojj8Y32jvML",
  "key35": "4oXBoYhdjwpDo241tUQWAJkBbZLXsB7WbKsC3F2Kp1dMmN2A6YdEUPpyZGDreKmrfpBx7PLXGWwSLfFtF7uuYMkB",
  "key36": "4i5MrtVaXJfZYSuX4x8qsCKCJBmG8y5PkJmPHoZ6MUrd4HCeQCJScmsiMgzb5Q1YGbm1G9LfCk8vTVH95G46Qt94",
  "key37": "2uR6nrzs4TsHoJLAcESsvThTpX4WdmARekZPrUU7W8HjazmUqEHyqG9S3btjojuYFJXPHE4Yth5u3KNYgfNyCp1e",
  "key38": "2jrYDe69LTet357guFDyjh6WqZkB4ZBdEMJnm1o6jNeVuptrXLe7LfwNXmJkHJXxAGyiNjBPns1RA2gCHgUzopy9",
  "key39": "3LLYtFN5jpM1zKXJxZ8QircRXfUmdLf9DkXvny8AMYVwdTsfxq5AVap7ebYjgGdy4K1pDL9Qb2oGYgWAEehbYgad",
  "key40": "5RH3niejCYMCaVMVgmXpgQWiwkjtEz7wyV5uJTccjC6c6iKThpg3K6bU9U1bBDK1gxXNbrbviFTEMSXAZAiEgoDs"
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
