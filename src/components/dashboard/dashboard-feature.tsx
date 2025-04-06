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
    "5gHu5L97CTD6o4ZzezHfg2DtERtkhkhc7FFPMPh2grZvkbkwfVh5Rq1bRaYcYWfEvZHQkrDWqVSur4FrnsyJRLgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gDpRcum1o8MEPqFpKK2WXydmbtkrjLHoBPXGFfLC2VvqBDqMXAvHi8eYKb7CgJpUAJhRzJkNwgjjnNznN8JNzP3",
  "key1": "4keiu8q7PUeHtS6USsMFmoe6Diat4gi76ADe2JgdxUHRLzk34ja5xuBcK4LUfn8832DRD7dH5YTWiRhBaTRCJCp1",
  "key2": "z9RXC1YfzrkQTCZv7soC3va3mHUDRuCWgrXcq7G2jMXVSLztwRNPFC1NS8dzuCadja7WEeWyESAPSLQpEqAcdsG",
  "key3": "2bJEW7o5q4tGBXZk3QT7xKgYCva75LYgXHCw6QEcZrLZpnsGfZ8WFaLd84qa2PVCtX4h4yjNX3hFKXfjpJJKgPTu",
  "key4": "3P3AWc2kJsWCPP9SnX5FGEX5X24APXrf7D1seQ5EmtAa1qwPcrcT6XX2QdbiQX5WHKr5kchBvoxnwgP9aWjs1eQb",
  "key5": "ADkjzxwYsPwVzd9bVEqie3DFFUZEa7qKWsTS6NV5AQfDGFTT8v29vgxt9EJ3Y2341FsRpvSTQkJk2r1JHpmbTK6",
  "key6": "od7n3gYcVJhzqBdGiFY9rqn19oKZfybnqFjgL2XEWLRHZeYCxgDeDnpNnnB5jxpw8E7AQBShQDXPdadyizdJwN2",
  "key7": "5nzZeR4iTBLkkp6ScbLQE4mw4zHHcf1eD2YT2skWkR9m3yXuBUVUkvTJwfgP1A7EUdyw8kZqEE4HimdeJqP6An7b",
  "key8": "98GikQVZhsFf8RZFRNknkc3pm9PKdTkU5ERFuxxS6q8LC2i5V5fjPoPF4m6NQ6VuCGDdjcT63hXML97FCj8SLeH",
  "key9": "iCcmqaEL9MxT1z53u7octoxPFA1MeVFL8RpmL3EyD6Pck8mG781CZ42mUe6uR8CkuoVxy4vN1p9EVaNqZ66CPd2",
  "key10": "o1GCJZSjm8dHPNfob2vHKxPNM3pCxu9N4RhsKEfMvAPc5dHfHfxXo25iy4tU1zG4YG3wtG3NHyBtMwPG9M5NVMD",
  "key11": "3FgdHsAVsALMCp7fbFhR8eBMAaYSAwBVz4fj3uaLtdoR3LzKhVS378uGdwEVYTTE3QASioV3mwaRMNonhaeSnJKX",
  "key12": "u4YnhL7yzY3WPHJeEeDb4f6e2BS4b84hZCgWkEFAEwinhwPZRFU1t71mQAcKffCwQqWJzALpmDeC6h4cGqVg6Sm",
  "key13": "2ZzvyriVxwD1CVRj6CjStTqT2U5oXb2AEkgHoJDLuWjVGqDXGyc66zDrRJqhLmi7CkRTWdrs1Arxw6PUHojksTNh",
  "key14": "5q8XRupgbopMYRJDoXYg27ynUax2yPD6xjQ7os1yUSvKHKMyNm89xGKMzGzPN9ZhaUHMS6mWghQkzmQSqbAKZ1Nd",
  "key15": "5NgfTehxZ1DTChVzUq1QK6iGa27wvdbZ8TrZS8uvtRMiYBwoTYf4ycjNqyMdCJSUJynK8xgyB2jV5N3aMja55A82",
  "key16": "3Y8Wv1iHWona4Y9sFjfPkoWp9isYw661g42zuSbxsvyEhHKG8fHNopCJcmfKaRefReJ7pdeWFU6LmWKNYGzHTx72",
  "key17": "2p4M6hdjdrH2kESzdcGNn38u83uHTgrinHhJKzvXpdDRmD79aUDDPaar3pRUTwtLGEUh45bVmnYvVzpEaRmbR7Mr",
  "key18": "2HkbuRH6xLiXfvEdCUAfyHNPmZJgcKz1BGSPi8rvXq9CrmV6bdUXyBKwRFFSGRt3ZVK4CDgx9hqL8wgewp73zThU",
  "key19": "4yC9mKwRxHZkTku2VpvEVv4iX6e4rJH4VqpvXtWQSbp4FkCwhfjX8x1G74w4qJids3KGF515Uu9PZVom7d8dNVeP",
  "key20": "nZESgzkjdj9j5suRpruSfhApZ3L3yogeD38B5gbpYvxpE3VeeG4QsZitvbscMeAWE79gXbCMT6vkcGiqDpU8YLm",
  "key21": "3yfrEu8H9zrPi56WbWciKjvbE7i8S8V16R2v4jkfnsmZNh3ybLuqfK7QcwSXJNFRjd94k1ybqej5sSsWUfvNffJ1",
  "key22": "2KdkmVGWGwrareUZ4Ky8uEYTKqf95hoKZFLs477RiiTyFtGzcDazFQwJzRdarQGcVXzQMQrXVfGaUac9E4HeGFZa",
  "key23": "hVFmCBQnbfXrBR77cGVvVPPZ8FWcsgT41U6s1Wi3Tw6UxURn3YLBk4jceJAanbw75xBQ4doseCRmdK3PP63KKaC",
  "key24": "67GUDaRSrVSs6PEV6kwXVruVcrMh7tpnUyCMRJEv2Gnn1zByLwdie8M7pAHUF9VDPCQJFeeheMnig4XrNfqdMgTj",
  "key25": "3u8536ecLKnzkb9emgGVRA4gTojEUDs7Cr1d4mnEwwYcT4GGBij1uyf6gGqGca2jkNzhnWxjPfdRiasYLeETXDXw",
  "key26": "5wM5482vn79N6SoNZFq1UcV5vHGmGeYJe7pkVTwJrGeXZ5HsAHZbaLsKefjsaDgVyzUyQeaiUwRqzd5Tw5am8o9A",
  "key27": "3vqUqwm8xioTigT9hLpKxGdcA7RD6ebRe5y2UWUqSkYxYEZUXCCLNLLDzoeodUXUmxtQMqXAfp5FYbryh4CYZ5W1",
  "key28": "3Wv4cpAsPWPSNYK3RHA7VbSxCBW8b7oD2VmK1ySNBkNgMnWNR4sZrQj14hokcdqhM36Rztac3mhEeNUJygxkYG7K",
  "key29": "3L6XJwvdWT92n4M5AMuBGeaq543MdDVcTei4pZFZ8SDs3TUpQwUihHTYKmmwwzAoVcuh7u1X244Qf6eSGnjtyWJk",
  "key30": "3hMnQ2S2tfVtpeTr3F9MH3HKnEUAZTg8EtWagkvrDvRQKTaMvxwEhumTs4i3sgX5qYQeFdMqEehVbF1vncNjERog",
  "key31": "53aWyejPVsFimuyzRPuaU2Q8nmTsuWQqHryESzP9TMDogoiTapsXZ5wcU5LNhQMtDECmJdi3wFZ4DNZzDVqTDyXZ",
  "key32": "26YKiYagBNtzaicDwYSHa9ZUFnvHsUEkQZYeRGCvap2KXGFyvmc3uLdh8AvrYdcb3eg2YEqn1nLnbG1HAZoKVjaE",
  "key33": "3X7LENeRMG3bibzb8CKriFAXGQSH5R4N6dShe4VbWx5PvTEZvjsAMfTMf1MwGdh7JZavywYXEHx4MgVdkdbPH8SJ"
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
