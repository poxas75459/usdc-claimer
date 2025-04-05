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
    "5csiNeEdYniQGj9JqHfh8xJSGgzcmDu3grjdV66arYv2333BSW8vrcZBpWs7f6s8h3GzPsuwpvMFggwKvmvLjL9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42rnPiSP7Sn9dVKade1NkRnZJCSMqnS8zUeV4cyacjwHgw3bJJhZhKuB83DDKT2LzmZdpnpBYfW4JYK3piVe33Ah",
  "key1": "PkbC9j93NDcEPHvudXEmNfiojENq7SsR4KeSTGExYxjDZVZ6xDfMVRMyL49s2HiQ1jnvsgNjGpQdRejkG71XnPu",
  "key2": "2Ur7uYYJKBhUTTa6PkELKj4UJNhbyntThdwh6bDp623WpNh4toPSVE53Fsf9bzgietszXFLsCJB2Ne7CWfcaRck",
  "key3": "YVhMPqLVkm4Gz6e3P2S4ygsFp6iTc4BSce5TXiW5poFhsYaDc2jH7sg48LXeXv6641Dgb2BZb4js8ptM5tNYUWv",
  "key4": "3aNawDqPjrShCqvWdx6GtXA9f1VSqbD64xucQQLuGHDjDLtC8WBZX6Qwr9WuKASdfBprzZLp4ibBvbYJeoxuSA53",
  "key5": "5VTKzvkaqyr9hdssRKHeMXmuLWQ5TMAJfrpyHD1Mzyn2mdZf3aovEpdFETTJFuM2s2daCMYas3cRiMUAL8HMYq8c",
  "key6": "A5ZCbqpWUbauHjYf244jyBqtqWYFGiRcgDNnCT12hgJSb67UzMAe64zMwC9ep7QSqv48JAhQNFUQhD21nicv7X6",
  "key7": "3k9QhVspodhcMXAichRNb2WL9HaQk42ArGmatV7sQHT37nhms1LnYkLZj2HkpDeJZEsKUhPXyiznqinkHeAkV3sE",
  "key8": "de38pejH48y5kLbdksbF7S9koYVvygAfqjaGnUbwTCnN7dJFqVvncg79Vm6dHiHtD95nospbkPm5cMaxWtTb2iU",
  "key9": "ygehrdsjmq5rVh7z8wjnSakGtonvAWEUPt4PE6Nd1czqKDyNdX86SDi5A74b6YmvmreqMjwJDouSgZYDQ7Gk3AK",
  "key10": "61w7oaAA8Favmr4QeMC2MJsaQR2D7JZUBCs7XPi8jygmcihsAwmJ2tYxHpoM1B4ycaMKHL37Mw6dvxXTqT7Rb4sR",
  "key11": "66qgpnbWY4fVkJRS5VJDdJCaqh3F7KqdyXdTDnA8aTiw8bYnGDdGz1Ggw6p4MYRFHYTeKjhkcKkJqqkxU9rKNa7b",
  "key12": "VLKBqL6eL3wFrP3hny2qjGPP7b1moTWayCotkaG76GwdmsD4PiRFdX7pcDPuSXXCQgf5FEY6eXjzHdUUbYicMi4",
  "key13": "5pM9j9HkzAZKzNLfa57W8xqzmhth9qzYDFv5qhVggJZphrMtkJcuwjgpAbixma9hybhneM2vwoWppmuTYwLCLpLA",
  "key14": "HUk5oJF3JbpVF6h26aUfdScDNQTb6GjR1qsoxrCwJvHBRHU864i5Po11Q4wZ3LMveNZimwNogKhhHcha7i9CFmM",
  "key15": "3zSpZNW2nhX2KhkVLuyPqmuRfFz92WCPRQyCH8M9M4dxQyATcF35obUJr2NoH9L7T8YkXbEvGsAJdTnWFpxxG4MV",
  "key16": "2R5QKnGBDddwaFGqwjnYxGN42eCp7uaGD9LFUSWrETpK9hZoRLhAJf1vvbx2MCHbL5SJL24vEV6sBc3HfNBD7ZKb",
  "key17": "28FG1tm9daYU6wY2Js5RrLS5cc698s4GEFEmZG836gzonYcyeW3eHVgFgAzekwK9fN7hADZNriKywYchiJNVZtvK",
  "key18": "4up9zfMpM2PjNWWqZ5sbTuv7aqBJLEZHtEdZX8LrChjiV449S9pgTfeRnj7fdwf6uWdECicgnNAw2zJ9s7u8ZPma",
  "key19": "4Z4CAPznsdabEhVqzR1jftaDevcV1cwHbngHutQXu2EZaDmPu1oPcatFRhxrMU4TzYYPUjPEh2fHu9raq3Qodttz",
  "key20": "2c53WkNuzaFfdkkdseUcwirRPQxwpnGuQpHfK7jnfvopfh97S84ZxVA7KwHjEhT1EWqEpRxj3mBE4vaakkaRn2Lj",
  "key21": "3WGmuM1zXg1DMfk3HMckLpzszKHGH4bdkgURR52iw5Q8ELJE2D4D1qDjWz1ESP2pZwaJQU2bEsujLqtMHvdESAxH",
  "key22": "5o7xq7LxoUfPEUoKzqQmy32zG8cKyyrsm6GmvCpx3k9UZQV7CjDL8uiNfUSJ5sQTVcMeFuJnx1GQ4YLgZLNLzmcn",
  "key23": "4Xo9ZhQbuWqRLxMnrY6Fu5AW3MqJmfHWMf5CjVAyFj1TmVz2xC5UwT6gRnQetENJMWRz7b4JXTKzJh7MAaT4bbkg",
  "key24": "4327eW2PhxFw1mTLriQvZMzWPPCfoSMDfvKam6cvyBD1NeCQMZWcTNmQc5TUskWghkjiFUNd6PrwFSYezdmBZrWa",
  "key25": "3DoPUYdvRnGLcg3HG7rfrHBueYuqPdwbTaSP6h29L41GrtGMEFmx8niqy98Kso4Fog7oY4fiEoGKG1VF4pqKxPBz",
  "key26": "3VB55nUJzgQFqx1VB8hb7YnSe76YhtfR9JDE9WaGjaY7FMocbPMyFZTDD1GU199YmkzRhYYv8W5KFGevNw3bpZhr",
  "key27": "4kBjb6RZaRZJYftd1XGsCQeL1vRWbZr7XFexwr5DLhqZiLWkN9PXuK7khfSae8ifz7Mc763E36dFBMoF8YwAwQiZ",
  "key28": "QKbGLdSDxhhwheCvzvpKfTF7pREaVSGjQjTHp5arfXC8n7UUeGXC3XASju5no9YLb58vfrL88qYXcC8G2GcZKwH",
  "key29": "5AeR8n6rrvGkDRZzrX213g8X1NXej6gLXpcuFNrU3tF7uyku11nuD7PUuop5ExKy7tN6XkmDpLhWecejYtD2foS7",
  "key30": "3GBFajc1dcWqn8wSzztrJRyV97c4M1YMpbLA2Ryw5Y2oJLTEkmdjg4J3ont2YuV6kQALzT3gbM4LFX7i18dePDnx",
  "key31": "4Yfi4C4xCF3BUFCxWjEsRdNKhFoCgfXhPoKAMvgVMuENyY4ruWCWDSsEFQNMNNu3u3BDz5EaHSrwR9bht35MpeRZ",
  "key32": "4MCHLodB8tNS4N7c2ZokCjZzVRWNyUtMWpLNeXj7sUXjjtstJvAFCrryDyr9N1DbpNWBgyk6eH1mcrDd3F9qbUdJ",
  "key33": "4xsWasGwmtaGmCjAQkHPNoVdGAdRk2YyGX44BcZnnMTajyVhiuUdtWfeFJ25GfgavU5UpyWYECRdw5Puv1E5YS5g",
  "key34": "2L4Syv2Gnb1qB58jQQLWA8r4aZFnNEZGZqRABzqHiuriyWagrHSG3TiQJcxDdUXeKrNJ6Yot8EeoiWxjdisoWw9n"
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
