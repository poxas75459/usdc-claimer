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
    "KP2px8oonCfXt8yoCofpw7oTq6gaKrpgnLdXJkQjdfMMGvSwWVa3F4VSvRT8VVsSopS9yavgCCq5zA9aDvgCL8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hoa12h5jpkLxCE2ymDP79jz9JJyjNrmFfgkLruSMnN9xrwAtpSVhTAptRBUehMioriCURWQhgCYipzjXAZXPDty",
  "key1": "4fxVT4j4u3d7UK1r6iU8HVoDxEv3ETGx9kqWApNn9cxNxZ7LNhpCGvTGeDcTDysyipnntGbMXAHskkBoFU61nhmC",
  "key2": "45r4R547LcXr2VWHHmvzM3r8sA5i8X8uqJVE5bkoiHEYNDYhg5pnNHUND6SNgo83Su6bGrGcVbGNfBk22HiyToMs",
  "key3": "Wufv9R5GHmnpwE8NB1q2S5QagS8oTqeaKT5fsv5zYMzGpfmexRNZcbepDmXWvGcJLVLaei2dPuu3hBvFbNouGpK",
  "key4": "3pSCdYtqca2pXkWAXvpURSEvn2sExcrdw8g8G8PV2gthszcqHqji5Cwv17JhvYwY3GE2ytEy21VSqJzXmjjRhTr5",
  "key5": "4jKSopBTqJJexpzVpFSwijhy7wDj3nqpmAVPo7guGmnDG5d4myyiGHF46Dcqw5JdfamP8dePeNe649oEskHntq1y",
  "key6": "2p6Ds53Dm9X4hGZivMLcDSoG5Bs3cDjCWGq6rKRgB3BSaX55fVFsCrVoWmNttL3RCbGVsLH7LDe7ha6fgjSwWdun",
  "key7": "5Ls9qAbJq54q9umKSeYNRioLS7kxYFiNMKbt2zR2ns5b7yZRWmF7ssG4kAQfGn8rQmv6mHz8wBY6dXWon2MUY2Jw",
  "key8": "4WiR9aRj4KmoGH1Fnng8NqRNJzvi4JCJRiZJ7iApnRZ94m8ZUegWnd6681Hb5PQBtXF7G2FudtyrBByEqP9Nwcw2",
  "key9": "3dCP8ob31Rx6kv3pAymNrpqY82NRcXhDkC4sgopL5wbon6hRd9937h5GWZ1U9yzge2yHU3qfifbWf79SLqDG2zop",
  "key10": "67DCvjrK1NajsEa3YuQ1QMgnp8QBvYqea5qHrSxruzsxdcAPkB2ZEqYVKxqNZA13qTBu9FLLBshCSrt6HzFZLvJa",
  "key11": "YT3SNrECRQ5Exp71k81HqgsvTy5EAThmK2WMwCypx1RzjUdXhkPa6iPWkaDtqFYthE29AhJxBbdnUFwSv5fMbiR",
  "key12": "5xvXgm344BAe2oqupHpUGEZGqVFRKDgkmTrR6WsKDqA3sSFJTDHayNGtPS2b5JqMC7mHtmbfYgXTNyxQEJjpwiir",
  "key13": "2ibvGVqXzG2h1LdzXMkj65L1t6mc13k5JiswsDS3vLzv15uix4HjSEvxj6xkFPK7P82ZC2gYnLAxK8XYvsyY5o8w",
  "key14": "4MXd7oVFF9AAZv2YfNTs951gSr8y9pb6ecG8ZyeB9AvjQJuAyqiKy96o1n7wHoJt8PKa3tQhkYGNjUGVXqpf8rri",
  "key15": "5SBLsZMFUL93ZWPV8XPkPSkiwYqW5dpeUEsc5JBZbsMskavBvXVzjgZU4iGyGESk5t4HgwRxnVEZyRDjTKM9YBFJ",
  "key16": "4DWDBUszNwrfzYAKRuKSYYdXx7XTX3CaYQwKwXryEwR2paYe5X4MeSeWD3abuUh6N3UpWPzwvnbfEyk8kEPkqyMD",
  "key17": "3mrJiDRNZCX9K3wvx7vs99zodG1rcygAB7Y2XucFvNBJwRiE9is5oQb1G42fnvKm42Gqvkucwobotsy4xtgLgaX",
  "key18": "65Wy1DfmDdfcVPqafTqpgyL7REtsooJNq9DCE9KY93ZF3VFJm48nF5LwavrsDw8gzgsxTjWMzhBiWsPzCmnKLHUe",
  "key19": "3byrdgtCN6gYpkB1aX4JZ599YfE73sB9dLHU55Yfyf1tXYgJKFgM2jHMYXRrqBQJy49in1oTRp56VZ9LVMRtRz8",
  "key20": "3rkTi6Dq3K2US6uTn1EGhZ859yXon5uQDppMGdXpgLHLNAB4G7YdUzh9LcpgDRKr1nmQ9iF6GQiZtVZz1oygAr5a",
  "key21": "3GaXuJSHEo6KHX8swUq3Q6Z8Ci6nrUoHhH8goh6noBp8ZTpEF7h974Je4HoCRjLHuoFNa2gAGqyUfpvL6G5CEto6",
  "key22": "2wY2aH3Dgjyvkx6WxpTzMBsYGYLuobqsV5HE5JCV928uPtEGiePwyybnPepXAgjxgtDJBWGTWTuYLdrPuAMKHWJ6",
  "key23": "3LdxWaS48Q8rtR9msCjT1DNc5iP7nHviWXwR5WYAaAhAzwQKqWkNeSVT2RvDVTaYbA1oPkQu3U8VXVpRx3cD5y67",
  "key24": "3hmsVDTAK4HS2zCRXohDp3rDAS1YUj2MxQd6JUz837HVQiT5FCKFbtTasumzGjRm1DnboJEaJe1oRzxf5bghjsFT",
  "key25": "3jQkHSzLqdX8c1Bu68bRYXpzUMwwhLgyzsb3qtyuaLF5pB1x4PA3pDgGKpZfnrQmoGSnxumrYXXjEZsiUikkbYRQ",
  "key26": "2Ea2wrHHb46bXf3CREa6GZotA7hd8cmqQw4YLsYETCDvf9LwoBHK4Qj47MC4CMaYJjeM928hqBJt6aMGeFGqPEYC",
  "key27": "QqbosQq1DdGxrwJC5mLxNK7mhPH7UA1HsawYeYkTeS6UBHyuJ9u9wzZe9deBkVwPh41EdTGfa5bXt5vUJEfmMsj",
  "key28": "MhkZs9rrLnV2YEx3ykBCpv41J4f9XwKQkY6rZH5z4AzwWevd32GPLEufHsDdwDmTp1UvGMmxJzoDVaE2r1FBCNV",
  "key29": "4EVPawjeAeWJWCtHqn1NgihUK1a4vrSewPiyUocvmxV7AF3bXhLBwCZFCkxfxk98MQHDhLwE1VPdUD1KAbzPkvcz",
  "key30": "2c9Kt9g7crErSxWoTvts6omKVHnDWSPYABCKRY55sxyFiLimabxfkhRvXGdJeeN2fxXyx3yxBQ94J662e1chobhN",
  "key31": "qU9KuZcNh3ZdxNiVMhNp2vE5qMo1pguoV3XmBn4AjYHBQFVRhkk5sGYEFuPRz5QFaLNBsEmhmkvvvrEQPH4fmj6",
  "key32": "2GpKDvPuaVEzN1FTiQ12MoTNqhV2RZ8M6UJTYSgFULhMr5oaRs9uWEAfeebEZuNrLho65exVxKv7UXRnDU9ELQAh",
  "key33": "4t4Uvi3akMZP5qFdL2AYySKBti7fczgHVWYfbZFpz1pUgaxgD2JnqDoeyXiY3W6HkWQiBHYUCFw1oJjxqKv51T6A",
  "key34": "hJZ3ig7sD18Juh1aESehvuCDtYfqkw2c1dzvPRDxwpZe5NebKLurRZ7sH7bKudXsM2RxpfL2XppVPx8gYVWibzr",
  "key35": "3wVNfSeUEtUJj3sBTZGLYdNHsJhJxmBoKPo3uxdy9MCSzGhdhPLbf1HrE3aKUqgKQXXhNnfwKL9XHikW49iQYjbK",
  "key36": "3WSnz6ycL7W48pok6UHP6oSs1ywQ3dGokkEJyvD9Xu2W62xePePqZ44YvjEscHN8DBZrtJLh1E5LxVWTgJSN77aT",
  "key37": "3YZXDbd3HP794uQ2VFK3fWPrgKhktTnX7rSiroixxv9DrZAEtsWMrZHUMgA8YjtAZNevexAkeCCZwHFWfLrgYxqf",
  "key38": "3NM5sBTLmc4SHqfV49YJ7g8kaeVoKeZ767QuaTadcLWmpatoEB9mgf16jGaSHzeA61BTLcFuDESrqU83bnT36khN"
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
