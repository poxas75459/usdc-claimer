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
    "a3Joag9Yre6zTNvK7EgDLy1oS39SMtEze7mq4pbUwRzs9eJCqqM9hvJQdahhq84sZsxoCYMiHW7Cc24nQN8VckW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iaJm4PEVPpgDhnJg5f9ZqL38V8g1AwnfUnZt7BFYXmStBHx4TiCoLhketKh8EYQ7MdeD4iHgf72YQnygMGK4osp",
  "key1": "4dQ1PTDKzMKFA6g4jsj2ZybjbosY594EJ5iE159ZhE7RbonnLKqdLBY88KP7UZQ44J3tp9u9cSvip6isYPrAofvh",
  "key2": "5JnLCTXf9yDATJFYBKwjkwbEg3WTi7JYCcBiVqnYUys88wTtDG65VYwQGmaNbkSCzrpXd8DXLv1uTjE7setCkQKp",
  "key3": "21e58kVXjFiiKcWqU3piQmXKW4NPnWpsED4q3ybM4P2fPbyt5iP1UZa2usXjo4Vmv7oHTxF26B2bBFH9rzE5SR8d",
  "key4": "2eUFDK2Fk1nzUi3c7MLLZeLx8t448wQgv2c3FCTQzbpJyEamrrEEnYfGovboF951fW1Nuy95uAZwJLaKct3ybTmC",
  "key5": "NqLtbW47GYmU3S9caMFcnY5CQvaNkbt7neL3Yeb15FKLoCbnx3XjKNTjM19LSgouyKgbqLcrT2wwyk3u1cjQEDM",
  "key6": "4Njaj16hboXCAWDkGAuYBA5ANbC6QwHfM1CVwvuGyvdod9kYj3DCaQB1b4mGDRUWETWTD44AbYVwWc973qFLuE4o",
  "key7": "5rq8qYYXA28BeCnFqmFuTtCEc4jYeLnCADiisdSJKgPLjFMjyw26NLmm8SzfdowWZKTUuZDyK8ynN3zzksub3PYA",
  "key8": "3C8ZgoUNWRi5mzMSuwq4Cy34BLnqDatUf3W4EHhdGPwQCGARMgyEJEUCKuE2Qz3ES8JNXwqaG5A6fLH26mptmjj2",
  "key9": "3WQHPfeQcVxmBnkj98tXCDK5uq4tvwivkCixoybq66oPAHqZruNj6ugjk4LiFgqC8DosRGjUqCuEPDgg8uJnMud",
  "key10": "2Cuca9KvqoeiWxVkFPE5jHTKett7cSj7sfrp163PKPHePurpjSemiewGo3BUkUezm1fg3GXo9cY24rGaMDoXFmLd",
  "key11": "4SLWBse2G7jNcDSS39b3cXqrMAP2tS1kzxpNbGE6xQdEgS8Up8gmDfYNZkrq5KAecvAg5mx2xiQoboavg6MWiqvN",
  "key12": "4C2zWQ8ZsqqELCWnxazkrro1D6oo8SGh7rvzTNuAz2GJG7zWbgZEA2w6sh9D4sqx4UQrWkBZZwBXqijT1QHcNxCQ",
  "key13": "ASBK53jEoZwwYh3kXrAw64e9qnFKg92Be3e8dxSHJwwWi2Hd7nzF9cxwGtJo3Bx5sKBawqHCFduH8JwmaYedsRm",
  "key14": "4nqAXfzVRdJbqxA8L4Ac2sFETRfVQetig1hzzbg96uFdH4iduDr952iJQbzgsqQ7xRaYnSUUaUWbp2oVfZS2hswt",
  "key15": "5GoMjSv2RKUcwTzrzrcfVkZTf1DzLiW91JmRDs1NgT9iVZ4vDhQFFhjjEJhww9aTD8jWR6rV2Hb3eMYCgqGiScDL",
  "key16": "2ZYDYAkr3qdiiFuCVhxVqWoVed5VNBLJo6HEnEH9CbzaYQdLRd6P8yHKvZDnqrGn981fs1XepTKDSzfUhdAf4Ane",
  "key17": "5qdYGdXaemipWqYQQ9skk9x6cxEpXWu2DAjTaeaA4P5q63RxssYadbZJBcNKMYoc6UMncoedYXtKqyL2mFLtXf9t",
  "key18": "4pado5iS7x5mpHAjgfjtVX4nd8PjQ83Rcjz8sYLhQuTD7CL4AA4hVJXzDCVGsM6MhCiVh4Zn3D17oTM1rnGfm9ji",
  "key19": "41CtSqqwwyTar8HkHYMRH94Sw7ZwonXRg97ncTgExtaBowCYipKRsNE7ABcJaM4s8u76Dc6TcbKwQBApAXAWKqyA",
  "key20": "2oFVU6i7Za6X86KWyMhuhCVNXxKr71oX2TYVh5B2CmVwvn2sGsAnuGACqsAcAs9TRha9k179zC7WfGzR7UVm3fbZ",
  "key21": "5ozsQbhs7pzcFkumuUwhG7n2MDk6NdWTwRTefWD7y1RZ2oQgYUwrb1eM2ZStKGWqWwp9e1xtdQi4e8QzPU2LP2Ym",
  "key22": "4DL4NceBhVrs73bmzKySHPaXPCyMrzgv3xBzq5E1rDyf54UiiT75j92AzTupqRYxr3eAWMRTcDHpegVsZUbfMK4J",
  "key23": "4SBdT9NMq1iwNf7JQkkBo2MXX66zegTQKHjuK2rcQP2FNVUjLaDyg5Eo5GNxCERGgFw7HcqUQ246PWnw8cVfPjfG",
  "key24": "3mASoYeegZu8c2uj5ecDGnnR6T9FeF6phQBGSd2DDdC2uTAsNwvdLwzZ29hgeHwsLo1sev3vPybDEXktdJVb8BRD",
  "key25": "3gYdAJsj4m19T4FZfpGoK9hhxSY13B5G9NGd4hFAD7vYdqiGkAdmHWfxUNUBXqfr1oRcaQQJBvns48mA97JNrxcE",
  "key26": "2ob5Y68DnW44jukWKy58HdsbwKwegSjaVxJfFJn9Khef4KU1AX48QhRRYnR9JbGqonJAK8wzgX9QMserNuQFfh3Q",
  "key27": "5eDbTAiTWcPHBWXseSmigMH13cwgTzg7DXXgH5v6zPrk7cAXhUuZh1ARqsfjX2Xi1J6g3CgF6j1ns6ruePGYowiB",
  "key28": "3Z1MG1Mk6mzV4qwvRtxS2FSfTUj3hjXPUWP3Nj6PDmExKxW8PwA5yQ7RLf3vqozUo1ZuTr7es5AynRFqDn24RGHF",
  "key29": "b11r8hq7g5qwDNRKhqBGXrw2xBodTST3fUMzXembLT1Gmse5fAuuGKmvfN426j4nTQf7LV9hJ589LqEtvtbyHVk",
  "key30": "4HMGQxLaGZJcD2F99cYrpThxFmEdfcjx3LEVAwCQxQyT6XGV586NgdFBrJP9XHBnKuLvNL8DHs4hbRsZYiLXAonK",
  "key31": "2xuxQFxpJ9C6qvctynXg8EtjGGg9tEQxdFPJ3QcnaqDMN16S1Ftvr9UpUHnRXK5q2Dtv14oRj9pRJgBTekqY5QXr",
  "key32": "44WhoUK4kwxmfQQxcknYHBUJfbe8aiVJ3dZYQpjXjMm1yMSd3g8ss7HPXxUoramys7EDngvBraviJtru82X8YP13",
  "key33": "4Ut39vvxRFdFW5afZEpjgw85JEuCn9jzh8B3UZkr5ijdG8boGB1kh5eBUzKSyqVDZmDH8RKb28n5K3My8kNbZEhe",
  "key34": "3ZbVXRBeCisDCRhysN7Y9umPNvXD3RbLSnZRtpNDtotHnj4JZieBBprhPshAfWzWg5UCHTnt6V494uX64bMp52q4",
  "key35": "4Pz9PBGrdyfug9PPtVh2Zng8tLsPjkcdUouTDvyfkwqbucLXa5JCPZZz9eK96UByg6EaGFpdVwcqfs9cPU8WvoTN",
  "key36": "41K4TXwAhGUMWAwAPMWsa1BNcRjQr7vCht9LNVV7X55EcLxeZS7vHzBoUvC64tPEm7EFVdJCZFeZEfDwJg7rUdU1",
  "key37": "3uA6XjSA4x8u3Qatxz93t4NqguYkaa9J43uLVz1kCNhQh2MYcJ5wkK7R13YbzP68jzYQMWuGc4PWRNQHEFhCRD6E",
  "key38": "2zjjd8SyyC3AU7upjXZZkuYxtpgXAwYaWFtQQ6SQqreDuVubghD5xrh9mo3pibBkK6LfzC5uQr24ZAizjyDsUXZ1",
  "key39": "5WkJkw5u5CykRuSXx5iQ9s2HBdkjahUdRFDPC2rQQBHSJKPmvUXuyCHV1eAU1erxhUT7GHCqGTbrHxMcjryAKAGY"
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
