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
    "2vAd75dkek1CCoGfDvFWp5By8sS2T7y9tMBv2ajhWLnT2pv6Wfc24RaA2LjgdTb91a82McbZM5dZBsSuUsuFSv3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Tw7wwFQdwisYkEHXP6RsVNC5AwErBiyicbMv4keP5W7NTRb9MwQqbCQyqnsPMRqDSAmSCFVAnve2aazKQqRZ6",
  "key1": "596TwPnedutZXFGkvRgygGtJqrHJonkhxELxbtsoftXgmWm7qbujGXpSsjL1pftnzr64XuMRVdXc97AJVCR8zM1n",
  "key2": "5kmjfYYWoay5X5tmEvn73ytYswvT9LWM4bDKcnZWeWYwMGaMpfeUDLZDmHf5pNvks1dLeaXUEQSSihE3YcK1RvSU",
  "key3": "5KkUJ55XjTzL1XDWaLDiWdF92Fvm5PVA4cCnENoWpCJ3hBooXqPG1KWBGT5bpzWxzbmqCmBRvFbwLBqu9Yj6xzk6",
  "key4": "2bhbYVxf58aCq7GWAV7LeKcAahpj3SkjSCegCF72hjbUvSkfTqbMmKWwFFiHBKf4dV4YG37MhpP5VM5nA4updVic",
  "key5": "3Rd525mDYBSpKr9x8MrMRh6wRvLYx4NraLpcda2sQ56QfkggY5Yvq49vTATJmfSNHymRJQrsPqZ3AoqgU7c3FHta",
  "key6": "BSnSqY1PJSg2MwNhWqiUb7NMt6q4vbn2TsWnxdvbgi29JRxcLGWL4ojuUYQt71ak9P1v2atwTn7Gx2utaBCqMb2",
  "key7": "3Qqj5RsZjhs8BXMRYz7DYgs2jvM6EiWAw3Zs5wVMJmpvVHBZk8azH1nrE4iXvtbg9Q7MydW3Aoq91NC4mqXCoqfp",
  "key8": "3jWU8A4ut3nsiCsp7XURVbVZpE338br8zZhNAND75CRWoJEGLh8q5aZ4NU7Qb9b4yVSFBmHSCvzy4gEVd9w2dxz3",
  "key9": "jdbghiHFuNvGeFHsnyAgFBWYkANuKpALNLXYVb73NiuAxTjZbBS6eJpzaUpoaoFCGpxuv5knKixqVpfkFz5KBfW",
  "key10": "3AygRHAR3TLZiApg3wwuHXXtSBm1ctHfDpxQmFqr1PffmB8nuEeSTiGeVHu2RV9nKymnTKUsGTLreK3uNqSjgpUE",
  "key11": "4qAT1KkvVBv89PqduUNtXGDjkDajiydKo9V9zdbTfyUSCGxEgznxGuihpg8cnSUebN1NbdkhsdT8GjnWNT6U7J3D",
  "key12": "4Gt72in9M7EVmC19nMKQuzYoN5UArtrvcWbcM9E6LUCyyTojoSugVJjDKR6JU6nZLcfjDiEkLfkMjgoH5Kq61JNB",
  "key13": "2WsZnwdsHr8KpVJKzBxw7sAdE2tHfyZnf2t7epEpCqvzxtbRo9BMQqGQVxeUHbD1YyepBdBieM7xn3nnqUu4PZAC",
  "key14": "3J3pwmL7YVRB4Z34LtB2yWGJyY8RYe2orW6GxUcAijBbGt5bL2eKPY76L4ZYj7CqFtzGs8MK34V26BMrY9VNriib",
  "key15": "WWsxr9dUd1tXisaikf4q9oYKgxHBh8mz9fs2Lq8nJq1uP78NWBMv58x6KLPQm8NgXeWthdHyXyHvZHE1U5WnsTu",
  "key16": "2juCoahSGsd6hPWLA55dG1tbqiz44Mghv74PFdiQ8a8VewVDfHumFUWnbiN6GY96Y3wtwLdTvcUjabap49v5Vmza",
  "key17": "gXZkbbKewgi2nYvv8QrEZapmbhY5ztuyWBuVD6jVEoG1ZuNuGob92LFo5raXvkEuuGKa5Ghjx5HyKg3oVP7sRL2",
  "key18": "53Wy8ntWeJBDGYcVQYfMzUMQmqVGoTQ1f81sYqSxpBsWw6bqMPm48PQVwLvZk1cXzTvDXZj21zbEBiRdPHYpQ12k",
  "key19": "4a9KNUPnDdmFqjV4ASnJb7ZQ7Kx933E1btjZCPkqZ9BaMRWTTNBwSyEhuHKwkaxSppB2LGB3zvtR1JR6cKi21eKV",
  "key20": "5GGhTHBBmCM85nGUn6Dx3UTW7iJMu4fiPr6GpaXZhmyYMZFbMfMzcGtVL31Fm7ixX5UStaSzy13d3G8DhTbJFWts",
  "key21": "3xwGZoW6CzKaNhfqtQHP7ntLnRE5n1L2foqAJ9aZYfu5BTy1wQepkEgrNrnQcp7zie6zJgVJ6nz9DLgSPXPTro3t",
  "key22": "5gya1Nj14LU6GDuCiLTM3DVCp3SVRBLmRVjwLGQN73f3gmNYrRQwLEcBz1akMHdbZG3q5dhcvDSTXdYKktjLTJPt",
  "key23": "5EusS6reMN9RoPp2HYEzoZ4pp2DjL9khNC9wvfgrcdW7JXk9GY3mUfcULxg14zg4qAnE1BJFQa9jZRZyabXbErq2",
  "key24": "4YmCny19mf5uHScx6MQEi9zbWBVJnMcSgF9wPsnQHSjrFbRVLcd5ccK4STunoJFS7XnLMJMfQkJFG5VCjmkNaPkW",
  "key25": "2RNvxNvtZFF9PAop3uAAs3bSdkgSph5QZHam695Bd1xWkzzZgFyGMs56ZCCkitNCFjnGTQesGV9groF5bxbn3KhZ",
  "key26": "3LFrESjnWf5pUSJRPcVV64PDCN7xwt22AbgFAraF1P2vkjttfFLktaLaurhnBBNBT1ujSKNLoUvWy1hR8rS8TfmM",
  "key27": "45TZXcWTmohGKaNN3sQpmhc2YdSy2NsRo4ddSQAGroW3iczPdJ5m1n9wRV6SBDbYBCC95GBD8bBjVt4ocUK69TZA",
  "key28": "DEkKuWft9QwTnhmvedKqDnpQ7DjegB9BCu6m2HPVSdSmZMuzVA3fo3JmhieqSKFBUgxwFsCmawpu3ix5uY7Kd85",
  "key29": "4FvTAvGvPxvgzgcKgP5uHmaCZe7roazPrjCBezRNEtYQjiYbTLpPVYF4JgYBuQDnCBozwvVioBx4EoGkkCpD5MN9",
  "key30": "LzYUdSeL5s44zfxdXB9dmUafJKtnUWK9iBcMzVE3DRQMStyw3W2DVPLLiYzTiwJeA6xRC73Dr7zkL9qK4Z8i1qL",
  "key31": "2Gxm4mHLv3uz6gvkm8kE2KHkP8ipMJpiemSDD3RGvkBXz67n9t3ZPStg4zuDxZxY7jRSi6bL6gfBq6gYoLnAfZHd",
  "key32": "4RfpFWEHKzvNK5V1sy4SUS9FLgnzQm9sjuzpbGrqNKo3r5dNRAZvbu5rZ9tqKPLENeYSvNAtrvEoAoujRSaKy4kU",
  "key33": "5UqpAmRAr24hniyQdyKKn2rLLQ43iAc45SzczLwWuN1oMqZ7HhhyfSBrqj73mSFSPBorH6A79jyzduqruAc4PoQ3",
  "key34": "5wxtafKduCUpotCikkDqFj8iboL6Rvq9aR2Zs7aaMaFABfgGbyqDsDCeUJeoTkXiaDNjcihjj3CJg5xXWk89Eg6o",
  "key35": "5kNFPnaVkVk4etWgpJHkYybQpks9XY4F59BBQdh4aA13uM4DfEoobEy6Sos2uX4u6yxWmM5Pp9W4JjwqFC4TyRC4"
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
