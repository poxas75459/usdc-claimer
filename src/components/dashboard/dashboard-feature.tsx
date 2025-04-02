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
    "5MWXw5uC3TQc8nL6Ly6CQtKrKzE94zbqbTkVSpDfAwitaM18QXeuUjQnyGkr37twbjPj86LSvd4CGjJKma6j37HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xncTDPKQyqQjyyU3mWZdeDazKSxykbTBirtnZzk2fpTzspqyXZSmcfJQP9Z7AahxwX1uPV2Wb1dBknQShtNhmZb",
  "key1": "3P2vz1Jr5asXhH2iz9TwepFqfuf9dmLW3UKdbrfaqhE1TQf6SgMhm5m1Qin875H7bcejC81Uni29o6sCWr3zXaD1",
  "key2": "gnMQVWgTdJV38XGeVnToar2x9r7ZETvKxg74ysoF1UsvK3HHatLm4xyTGjNFiy4msGTVcNRWseAMiyuxgs9Fsdv",
  "key3": "5GtyFEfpTX6BfKpdY8NLXJZZ3q5D6DJfQYHyhbHchPtJ7itW2NgeJ3Veb8j4BAH8Ljr4zHDyLeiBVH41ZvjrhkZi",
  "key4": "qgFWsDKAYsXTPokQQNj3yiEup9V8LoKFQUKgWp3KcJcywdVcf5pRG3zuASj1nbiF99VhWzqBWHrW7MPcNtqzckd",
  "key5": "4ti764fGqemVkRrBty7L4oyeUhJce2o9gyXLfb6dPC8XqpQKwCgfKZeRXidS77ZoZDqysZeKJ3Ki7p2aKRJRqJcx",
  "key6": "2A13Pq8ibQePVykJMQPdGyPUvRzUBSA4xnfp2inCBaXRGhBqYEedrERnwdLbEv4QAUrECqZLnXnZ4AseqBGiFz8N",
  "key7": "233usVxMqPatwpzbYaA2Dhfb9o3KwfjpynoriwbYdgAcYg9Cz6hoL4RK3GRoL9YYiiqiU2NXVzJLkaiZnZUZVVyY",
  "key8": "4SFuzi2PvcFEHkx4f3YLxHdvVQfhJTSCKqhxzjrawfTANf6YQuYaYSrcxKLKcc5nRNB1HQGZHA1s2U5VpM8EFphK",
  "key9": "4xKa1YjQP3R16vVpwnyKjagREqkBNgDeiDqWgW9XP2PAkp9iy7zsWRENBnxVcsjHvzMqJrqvXj5CEkv9FuWhQBDe",
  "key10": "5qJaquJo9KN6BDgPT9FQA67twuv6wkdsgDNnb3CM5ie4z2CHTxqJRxGhpxc1Rk89W2aSf1tYU9rswA5qLuz6iKKc",
  "key11": "5VbAHEFzxqz8aQTqvZqd3KHCa6YEGs9Srxd6tGQ72bXWSxub2d8zaDdWKMNMCUfEQt8vMRJJeDgxPZAGU8M7UZFB",
  "key12": "81Rv93h8azvrMnbg7ExfRaaV4SKHzwxvxzL5j5aoJ6EzFG7HrFiRfthnD8RW1JPHXZyCrFyWp2y7QyefddzJdqC",
  "key13": "2ZHh41uuRMCkPYbA4fvf5YvBho6dZtYRVKertgdzxBvsofh24gtc5XiSPjfeJUXkSfb3aNHdNMu9Ta29kykvxh5u",
  "key14": "2DAm6muWumasj7raoNwN3pN8AHejjdWpRbHhjPZZmaE4CCL1aKaj6CMphhu8uox2jsqRg8fzXXYt7MUERSguvwsx",
  "key15": "3WK9wFDRxHfkC6eBhnHrJP1hzomBJvgpo5K2X7CDpNRWk3DFKc4s43FeA9GckGRKNyueX1VDW77qiQWjnyLDnGXh",
  "key16": "3wTPjqoep1yFLP1r43MzzATzUiZY5eGHgHj7QLuyzN2o5baU6PUio1D6g7XufrK7SeRiQopo2r4pFH4GLgUmUnPb",
  "key17": "5KEW4MAyQMq37ZY58gPnk9MLRm4sn8akYJxxKhmp36skQHRfkG4bM5D4XpAxMu915RU9xhwd2RzBMQ71GvjoNxbN",
  "key18": "vQFHYRyCW6Hfkw9iijoBV1RQoZQm5xeWs6kVtx2vr61nng3rCHyJrpD5eKCZw25fba1f3L6vUJe56NmCGR6kVBg",
  "key19": "3EXX8ivvAZZ1jLFSsYBSydooonHw5fVJ4xRyJLcq2dWKNZidV2cBwsExuhc1gjSqyQiqJ1dHbACeyEdQXjmpa9xn",
  "key20": "4dsbpjXCJrud4cyDVG7SxQ6zdMy3iQXcBF32Zj2xeUQsS1PEH4ojaS7afqsoiWqsQMgnV2TbfN4PGyqdKFCqXhVk",
  "key21": "3ExF5dXSTjAJuPkAhTDNUFmwDwv4DjHhKwHXNiuLEfdDRXj8HFfhjpWCJD5wiAESfZjKbvr8TV9LfzcnPb3ZGEEX",
  "key22": "4dXiH73FPidVPWrHyNZ3RoinXZTycAKkRH379bxZV7nUKsmc6pTpRiQ6aEeS41MZtsEX86bj3sNafX9raTc5ahaV",
  "key23": "2kcmeTDiNLd4D2bnMTpRgMHXFnXMHKGGXuiA9uAaPGNQhuzr1VQhdPtdGmZ3XD2tKbP5BWqgRxoyVZtTrArYCsLp",
  "key24": "8cQ8HYL8dGWaix2y4vBYWjcLYiGnPzpowQSwKvXgzTVnrqysp6YB2LPvnzfvuLRxQkc6i6Jqcku6nZqfaybTFJC",
  "key25": "51VjNPLm718GjmRvYgjtQJCQZX5NQUsDqXtepkb6KKRacC137dRsi1nJSE93RVW4WgeX8taCc53ZsckFdtFbHP7A",
  "key26": "38ttfj8sJqJNfGMdD3Q8etQT7aCcxbmwZLpu3bkRkELxmZLQkaX6pkgsEXzy1sPpHn8dhq5haLjNHv89Z9F4dA9J",
  "key27": "5AyCBtbBY7teV9jS6LvmZKmQBNYzyxo9cEWDQh8GtMpz6kGyCP4re3n3JQkJ2sRRjbdXWoS2DcZthPheLXh7kXW4",
  "key28": "2Mt1YoxTPbZLjFkpZSKXU2aHQCJZeHy85nxJRYkdmkEeU1GquZASGuwVaMUMEuFGarZ256uMb4yRYFgQCVw5UDX3",
  "key29": "35B6yGbp5y5X6xGYA7tTzqpD56EBya6PbwEKfEjitgRTAhdkBqY6VVsQVXvQJD4q7UAEYzPAJdXQRnf9woRnARit",
  "key30": "3XUvHcrxVikYszWMbTXcRJAkarU5SZGVjPF39qLMmPFsMQUfZLvczYXfUFkfzEUijnUrfJptBqesVcYrjNH3PyiF",
  "key31": "4d21JoQdDxypT92U4a2uLSmo2bKEGspacy1j9cbVhLoKKM6krkqXFDnWYHHSDsfz8FinZd6SbuqoENZZ6aY82rAJ",
  "key32": "51Hj99o6TC24WWeE87JhiiHhNYpmi13FtHtK82zdKJVFXBtZ3uVR3v6z9ysEkTj9KLUUvAqZgaKX5eP4k1gftQZP",
  "key33": "2DAjYsQaM8GvUz3LBjSruSrtaopwGxAFg1hwFKZGefHiJHBmoLULVXnpbn7xF31Pyuap9BBetWdkYBqmLKxG5rWp",
  "key34": "4ZFtKu3SjXCN1BMmEVZiBDqA4MS946Uaog2MxRgh3vVXUQY6R9hffZhiK9Z3hoq7oFwwhmZqYwatZ76VYTKMLBcA",
  "key35": "5mvtwy9WX1ayBmMpgxApA5JTyu5sMHpHViSpUmbkZ4kBWo7PRVV9Gw4aqtex6evVSr7V662G2knfqNYHVtjnEXia",
  "key36": "mDGGaRKVRB5G9V4mmJg1ib7kcVuN1ssAEJWRDWxfpV5Z4igYrq9WR85KyJp8GAzkDQztrLA8DzcBXfy5b1YGcKi",
  "key37": "3JRx4vMSYGL33rQ35ktjasLtoBNtTq7uwrBrjdV75PpuJ4DCgdKsP9wxy87vVFB5dpz8REpeG76tr8URsZETcv11",
  "key38": "26Jpmjz4ZsZtbE8mJ43R763JwuwdxAaHk4w51sC2XKu3iSFHA4xW44jEPRdEvtwN425fhDYLapPTjEQ9Pee76pof",
  "key39": "4Mq88ZwGuagQNAPmqpKoG4QVWvBQeeZPosKBHGoFN8hgBbun8peL4fyu6mN9dSzgWZxsgDhD9U4TafZNgLxyKsqA",
  "key40": "4Eg3fJiZrohkwtSvwu5E6JWoszmABVjqZuLjGZuaJ47QPoiCTH1ze2xPaC9VTGMoLxttizSNEAd4JkBAoSsB5Mjm",
  "key41": "5oBuZdRJvJEtrhkHk3yFJw19rBD1UwsxVLhgJ2xcTvLKfRNqwNmqJtewdMfMtnTkLahibFU89TSDi83rh5AFApud",
  "key42": "4qP7bqKTn4VUqCc9HofhQjaTFHMUTbsi6AcGvBeC156szJ2CEvMu4ZFoKSzd7VN4jUjyXTTz1hEkcLw8kC8cy6zX",
  "key43": "5FLjcn2adCQfszJazuvmeH7T6nhwqENQkd47Qqbwa7SCFqmqt7Bbh9diBEg7knpapP1pT9qgSdzDPhoZXnWPQKn5",
  "key44": "ysXa1SCHtKeVFQZfeC9LZa7fXiM3REMc4ehfRrTSpmyg79ZWKdUnokbnGWVLriqPsf9etyGvW43bNoauuqVCH5V",
  "key45": "5u2qjUvwZ5NoMLERNmjxwLB91tbpjgPx5QeMCwxYZNaTh8aYBsDvVqQifjWKcCLZZiYhvVLF2zsqmnpqhnbgjfxu"
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
