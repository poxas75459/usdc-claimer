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
    "5wH5kKQs1YEmqg2jAaRs3niVhRWJ7uESgpXDbSxYeaw5vzjL5R9nxDbkWC6665ybdyfeJw9TznZKtpHJZPasof96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPNwPtqQSPncTzT69MtS35NjVKPsHYKyQaqoa4aqWC8GbgxK55568GznXq47zjq42RgknELRqG3MzSKyf6LCTXV",
  "key1": "4go8Kib6KqXv1GCZA3XmYtXFCk3kJzwNsf5m1eVrGo6ms61dxoGhGH17TshRevS7GxzRyAhYWZja6bVj4qXw3nGi",
  "key2": "V93LwkamwoC2aHse56FdAcfayRh8HV8VCStF9wUhgiU4bZrJDkvDAraDb28LgX1UJJXBjiyLsJNryXpUB5DgAHp",
  "key3": "u4JfN1EQgaLJhw7xvogSZiu5L5sABgtgtaNbg3LS6ooYxGH54SANbxHQgsqjQSLrJnddq2F4JtGjcPkFs7hbGKR",
  "key4": "3wik7GVEtcWNJoJrnKXN4yqGqFGCARe1xRGn1Rhmu2oaZQbenaRLJvWL5rAREuUr5n36vs2wK3qsNhCvektAS2FU",
  "key5": "UEpvW3oaiHjdPa6rW2CypD6YTZ9CVjREhrtqP9ohAaNYSMhMPfXjjZPNZEujgtbUYq3eSAbukF9Z7kihznanYfP",
  "key6": "YfvRnJtbR9FS9vr1ffAyja6jWBkaxswMNmtgAW7rLrogmr4zw844qR77u3Vbqg885VTxi6hrzX8tWQ67o8Gooq6",
  "key7": "5avaUPk9hKSKZpQGGnAtxnNwL1XXeuja5g5fX5QKDQyqMWHmXMBVVpCVNfwWBqbeRvMXn3TWZWk877xZ6nX2W4u2",
  "key8": "5g1RNkErQQ8Wuq4ZKiqUntJfyfmtnkqF7a199B65JJdodG2v4fMSsQ4rtJXnPVnd5JBaH3eCKqzScgUKX8pbWCHn",
  "key9": "2wHRjtUYrwmLHEwPQEZRGFRqNqvJ56rc2sukBGMHiZKQLnLBKNwUTMQGutJE3qUSkMtMZEwiothKrmgnVWbXCxus",
  "key10": "31V5pof41PwBxmqPdGTfvB3p23565U31auraiQPrqASjESPXCkjT4hhbwB3zLBZh32imhycJNqQJHozBcftUWp9n",
  "key11": "5GtTRcHnJNXTckFbpPJFW4dNxrxsXmuYpTYvbCTYqTukZYYpZLx3SDnAnPdQvk2QKNyQuSmyL1AJRU8qoXNMLBMZ",
  "key12": "5JKvMkgSvTfEfGxtUNqFPttVd9w9NuyctUVnwJfFyoojhrNRotG6JKrTFqVfuB4MBXNGzzFpt12tQpE2rRxHeUFK",
  "key13": "5eZK3jhcBNrSKdN2Bhfy8cexBRBSE2axa49hLzfgEtACF9FqbdWBBc6RGJTa2GxVJuQ5d7kHMA2zGJBNX3Jque4",
  "key14": "45jADgCvECuyRbosunhNiW5cGS25LgsJHGo7279Mo9M5yxAizjG26Vx4Fnkqo5eTbamxEVt8wiayqhJu2CMah5Lr",
  "key15": "4LEb2pA7Gdc1XMB5vuBZGKcJQeNDxyP3tKNSME6AETKbY5hvrZGNhFRKNeYpMGiFFrt4UPA77WCsbSYYZAjWZWUH",
  "key16": "X4KZvTEkiK1gyAKR3p9kqcZqcSnVQ6mPeDDojFLtFC3qmk1fWCMCPmQsz3611DFG2zPoMhBX1AdeD4FiKcriLva",
  "key17": "5fUQ6mozBvYFGHWEw6FcCDvn7UoC4ydfzyzVaP8fPHm6U7s3CAHftx6hxTnTtk1r6iyDoRvPcVcLAkd3LA2ydUZJ",
  "key18": "ztq33iuQT6H5h8GVy1s8eanyzvRK21whE8J3AuiwvF4FAxHNGqb42LLGApMbUaG5TkFqXBLyFA4KZH5esguDV8r",
  "key19": "3pYx7C5bmSZggozCkhyXC2reB1y1NkomuvawZjh1yRqLFTB8nDWGk7tKvuompPbwgq9fREAyx9B8BdCSee3JKhdD",
  "key20": "4veCTEtnTahKAvHXGuJtVcZ5Yx4Ypgr6wR1sd7bFpxyBkrozodSbcKqxpELvsAwVqzZxtHdGmnZqvqRwkK1VaTtY",
  "key21": "3deNKkTxRjGcJ7Dm3usbMkiNAAkyCUQjca64cihvnW2p9ZuaQmZ7d3ZbcUev6r4YfPjePSKLJUDrQWzuUQf5pcgG",
  "key22": "5jCUgEVGnx7PoxpderW7YFpuxhhYbjVFeaqxfcHHmVucvAgNbY58rGt7c84Uwx7GLugj14AjJo5qpvfQC423bjCE",
  "key23": "4GQvQ5hritr9WDXmf8DyB3v1wF967tGnLn7AzrvxzFfjCDLwpt724D5bh3WhywBmW8YQrQtpFUkudtbAERbZDYoB",
  "key24": "4eXSBJPnTH7BfydEsekuFv7heconszQ7AQJNy4GHhZ1XBM5JMv9YjL4qLE1HzWCvvAK1ZFg55EpaNdwwjQRkKGvZ",
  "key25": "5DPomhLNx6VFePCV1aHRL5hBvBJkFH6LuzAcCjVjNBMDYYVu1ykLUDt1MSwo9AmLodC7UDJBtBeHbcHuxht6n6NU",
  "key26": "2HvQDEykXm6absGjGnF4iVRpdx7vTXsy4F7engWkvuasDYpqRzfEmPsfph5V2qKpFXcbhrxofK2nfiSsfJk684Nr",
  "key27": "3RvWbtLjAYGo6BUZiP413vHEv6aXLfRZqBqgxhaxuR3sTkt4e4Mzt7EiaXc84xtszYafRp7C1BBK3qUZLfspHFTK",
  "key28": "31i6RZCvxWhn9PBbP9jDDAPgMYACKu3wN6eyB4RFwUizLq9P4zaFJsJeLnWT4H6eqh6NAJPddnjCjcn5xkbTN24N",
  "key29": "29U9F1krsRA75ifZnHYBEtsBt8Dwfm1wMSqvbjSxCSe4dCWZiMs7hyAih3WpRHo4BkEzrahXmWAVqSXJKHEkm7Fp",
  "key30": "5RsnNmVmDGyHhcn7srmpfY8kHiQNFdss43QbtUx4GK48Ms568Zf6mBtwYFBHHJdgJ7pMuqGcsy1oag8X9SEgvpQ4",
  "key31": "3dpRSg2hR3LJG3fJqiDATQY11F7gRBy559KLuYzxPa1rdM5gpP642pRqiZyeAHMUmQH6EFrsspNYp8LUy8TDoRtD",
  "key32": "5fPuCZXtVHPTiAN3Vai2wcb7WsuNBAfHb7YZmsm8jT3jFs5gNK1brnJjozkkodbVkianPmvxZks5HztAo9e9rCRE",
  "key33": "pUz9bmWj4TD5fj5uDUazfMGyAi8pWj25rKF6AZruDyYjSkdmE8GdyV5cEMfjGfLiMwYdct15y1tPTzFt3mnmi6W",
  "key34": "5cALayL7KopKamp62ExLL67PMu2SC6uud1Knh5HYaYmzFcX9MFM5Uafas3D7PehfzuoU5dCo7o2mX1DvPjWJD5Qu",
  "key35": "3H9HhrrcdtVTb68mFB5vk4TjyjTwsSNZZpotc5d2oNQQFq2qAHtMLfPGFWEvHTbhV8fABDMSMw9X9PkVBSdk8P1c",
  "key36": "9xcifcdqa8xwiRzLRwA4NiWJGqjCdkki1FWXJVvRYaH6FdjiZGYCgpRZA9MBVDb4Pjqq4RP9XRpQKouCZHcjff3",
  "key37": "2VyaSPW6LXz5Zuh9SLAVBAfjMjMVT9kHsVBwyEzyMFPMRAdty3LRVRvVx7C1Kegv1PQrjEjGH8dc6jz8mdV8SfJw",
  "key38": "2TZehKFnEJM6U1aiFm53RwfGNkAJiQjUBSnVw5jfD3WSzJbvH5X1mozbWNbeWCKNs5vsWcauE2HmkBUaHqPqjMF3",
  "key39": "2Z3qKkhFgy6vtcYaongmrRW2y8um2tXMujNvbqZJxXUdUv4C9U1uhqmGnfkwo3KvFgcChMwAkDBa6oC8YjuHSmy4",
  "key40": "5Vyyhv3EfMqAuFGdzbacEgDJQK62vRghqEvMdyq7A4YcjFr8P88WUC7KN1tSmj4FhV2ZWiff2kSA3KD1bM3aqkyv",
  "key41": "5oZFyxbBR6UzdP69MhKSYyWnnD5mEPgXvMmcLCbt3L253bEAw4Ufd9SLHQnHgDFeXJ8e2XA1ThtpRjGRXNMoiQBf",
  "key42": "5B4wCA7Ey7Ui8xN4hxtF2Ntegk9Pa4SqJ4jHwwomtRuvAkL2UvHpxBfDPveruMFY8PxBLkTBd8M2JKVKshGJpRNr",
  "key43": "2VCt7SApkz92DYuWo6qu82x1xmXSeVUZocXsu47mUJk6WDqu7Cg1AVte5iZKtkeDfpYeubbPN2tRgm47yNXrSgqj",
  "key44": "udhLEWm4nNWCbbyyBvjPjB1QHdgALtQZy9Z6VCVydWMfMZ73KrNKrxmpa5pQoASPFAdfPnWJv6TRFqqEBBN9YLT",
  "key45": "2LaKbAHPUhnE6DJgKkAzkNh3gVBB8jrmvJKJwEqMBE3wGBhYNwJXgpraAXhpMhb7dEiAyvmCx1BHf1ovz2aifiJS",
  "key46": "5K8oyaM1mb6t8KhzZoWJsuCuz7tyVD1uKDVyG637ZAPpLH6epNYrZnuaXdmv5weJ2GhGNpNZRBDadW8PusmB3o4Z",
  "key47": "3bNHqGuixcbAKqN38zPbVuHfrJaa6gy1B2XeoQZaWP3toPc5E6wPYo4nZZRrNa9DnuxXfzjvGw7rNgty9HU6PNL9",
  "key48": "2XuAYZCjuTVxx2djkFt5S91Rtw2BVDVn9JbBXdv96Wp1kscLTC2y2Y9A8asUsSggftjGFtwELQm8ehXr1eyAEQsw"
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
