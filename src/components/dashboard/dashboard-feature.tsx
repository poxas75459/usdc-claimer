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
    "2DmzEp5HzJRe2jEhTUs5NZ29fNyzJWZSsx2jnWJR1KbRSmPBXNXc9ZM8WSqRbv1kn7ratMuN86aUUY1BgyVQQH6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NpxQq8iX8zhqdMdaRCqHAzqxnRmAvZVfbYee8F7rWrBFMMXtvY3JsHckBLAm5rjYySmz4hbHqvCjeyuEA5DUq3N",
  "key1": "4bVGmWj8eWoBSaCiJ1gsjJFhGY9uh7RYVXL9dLmX7UNs34pS5JUBqg2iMvF4C2dWwBvT97ghyPaqgJ4ynWo8osR1",
  "key2": "2oHJrMtpshRXXREWLKeX8SMDMMZojAvuM9PFtosQT6rf2wcsKnEe9viEyqX5C5NWewRLFufCZvWFFEtoAp3XSdks",
  "key3": "5jL5URbztNXRnLpLLi7V8jhB7Dwkch7MtYwmmxnFHbcHMFvqgktfPLgBjr5pt4hs7Qwb5R8tifCdc2j5P8fGXp3n",
  "key4": "416QDL9zW8ef5KNPExYL799EJ5mKdkzUMMmXUDqW3UANN6aptig5Ab4HDf9pkBhdr5aF4WBjPcx1ADGohFeW628q",
  "key5": "4fFy95aFZ4Jr2jhBzJVsjfmzy8vhDptAZ9TzBRqai2SPtZcATWVzMM8MnnmrwBcJE6e1wskHU2zBmPyNX9vjYEp9",
  "key6": "3nEL6nNHjTPtdcWzwmqkUD7nkwk3u8MDvZsBUpnPLqDeJHyiKsgcDCR99gJn2i7hM3ryntSuNXh2hsZ6SrYTT2yM",
  "key7": "pPx8dxjD34CY6kY8j48Q3ADgzXPnPXwAS2PxhTWAnWqJdJm9USBgcbhR5MJpLAZoSJvEGDT7vYD3kmRRkDZJGKg",
  "key8": "3fLv3LEMAhUanhts4b7GW6LS2dALVus8SvHb5FAYyH8Vmx8BQAEqa7caMd2NZJJwnFXiHejapYZHxyBM1BvRMPFt",
  "key9": "2m7HQsGccVS7j6Yrekcu7nUbWftfRWx1HZ4MwyGZzEFvBHcyCy7iEVu5TqwHuEUcHxdSfNsS2k9tEuyMVJbRTsku",
  "key10": "4fasfHEJHjcHTbWxfs8j1banXQBNPvaKx62a8BSPFKTcKnM5hFZBbvv9NjMh5bBMshf7kKmW9HSVk5V6YGCtP2hH",
  "key11": "4asC5WiUPSBtDLiuHP3WxN9gCu7fajcxzPyoc762PX26AfXVV6t2DLMBW4L6TgH7tkv46zqJQVLmVR5rSUpkTkec",
  "key12": "2KRF94a8sxQZ9Pgpw6NzePiiwBLNk7aQZBkNvkri34S31aLkvD76bpG8xot21pJasgPa2pm4Hoy71SiHWA2PttHD",
  "key13": "1dthYQUkMRFvED2ojcNWMVy2BUfSX5w6uzMEa5MXistTz47pUhZjdz7KZTVaUFoRMSoimZxGYdjP3VmapNafeFU",
  "key14": "5WoseALpBYUYneeUzJmDbPjAUrFkKYdmYUyiSxa9AzE5szV6TnnJ79s86ono1eJ181JrL7QErYKVRwcQEYNY3Fwd",
  "key15": "Mcvbyh9BYvmGMC75EuzR6KFn5mkUwgdxBdWa8a474dF6UibWqj5QoAVubVYaNcmM3opr3umSXgc9GQTyGjgnEaq",
  "key16": "4f5caSgMZwUzK6uXcmLtTRy3CPsPdQFB7LFVqcBDjcDtA6dwCuHgTJ4EhJwtxZH4qgBPJDxdvaT2p9t8DQJZ1VCQ",
  "key17": "3zEmrGheaJqP4CGq3WKbpqDxFdrX5pa51wi9wbYzKGgBEtbbt1Zz72ySLEc7HktimyAfQWAFeBmuMo6ByEJBm3K",
  "key18": "5kPCkC7NyXpUP8vtY6AiYFaJsZZDR8U7Swgvx1KU3xmcRX2ZTCwS6GCf8e6B5SBYspfQtaysEptBn8eW7SKtDeLf",
  "key19": "26aGpt3Pten5snhX5m14knXesPYhtKHtSTyf1jFGU7zJ488gLCa1uVHP7FhCV7U5HVQEjbWSMsNrE7e1KPhTTe69",
  "key20": "2euVgRV5B5KoCqub9TwYBRm6W4zFgpdXVpd3s6r2aP1mVwn7fVKvCd4q5Tydwmp66Mv5iZfw9qH8pL32SMvAETWd",
  "key21": "352pHBP8qX72rLKuehuKXG4wPfNqKjr35pWeZjKTZyQsPbV3qrrW83vAMYwQKf1PDEzVxGW5tmm2HnMjyTzHDcWB",
  "key22": "3CryT86qDtYyw3PbQEENfuyZPAvvLQXiSMxNMnYfCp2C2JksTj21XT7SQDSaVZNvGPyniySbhzkWyzFrUVbSY3fc",
  "key23": "3knn9nSF5LbQBQ2NG6ZXE7w4eA6bUV8D8wbAHAyz3EMKdiq5B5u7N5cppcCLar7NdNg5UppoaiR4F6BwrffrcfHD",
  "key24": "67JfCht5R11cqgRpuFmrB1KxP4Z9d68Az1iNrScfvRkrLHGk1uB2UjAbcJroBKrBSDD84kR37z6fEWUZEnpVmfH3",
  "key25": "4VmHxx4cP2Zs9BB1zuzebyWCteR4Fquq6RbiqWVRm1Qv5UHk7UuAxJxofCMXWBW2XiTpqo7yL6dN7SdvaDUtrXeq",
  "key26": "2aHAn45wqi8vcGA9YoqkbT3cextJmtMr3cLNrJxu41cvgis6BG7eyKmhwZpYEfwWay7Y68TE8CoxsVGXaM57HgCd",
  "key27": "5UjueSV3SzKWA17hrVRGqMcwpZf5ds933zsxRz8t2aGRqQa7eeXQDf7B8Y1bZ7wwd3RQXMSyuaVoXrXucYbKzAEZ",
  "key28": "4YAmQXrqQfgCNgmhetXMe78Sde8Mi4fTMssAFaxF7Ho8Zb37vKbLJGva9FeaV4LTDLXpuiZbYDCToB9MMpFrT42M",
  "key29": "2NcSekdMH8ie4wApaUwXNbD4PT2pN88FjvZASDg8jVoBnPUgQGD1rtsYcUwdvCj86BjzPMbJczKVYiHHeQ3iJktW",
  "key30": "d1JSq62CEJ5PSFj1dh4vMc82ykX5WkDBN6Rpm5JAku3caRhMNJZU5m4R1TjA12GZorbxNtnkJaxMoW1ZGV6wou8",
  "key31": "aepQpaiEKzC2r2WgfwTtXCf9cU88d6Zpu6W7WpWgASyiUk5zHLRNYXpkydCrQSCjfgYoEiyA46QNaAfoHyWmnyT",
  "key32": "9rSEZS4aJoycAnemNmZhXZkjkviJFWksrstshqmXz5qk3yjdgESf2ryVUhE6PcnVwYFV9JiAFw691DQXavEa5JN",
  "key33": "iZtkVWiNuQDzafscvAP6zBDJ3Q1jeSRTXWrciM6k1cG6o9nhJ6f7JHRwqy84WXdLrPFy2yGNXM1dr5eGN7YpTSh"
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
