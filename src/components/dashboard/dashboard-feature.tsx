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
    "49fKpBb2vFmEt5KcuaL9HmHvw2K74YPTUrdRjZXDpR6ijzYnB5Gxt1xk2mfPfjwMZJU7UUzZfQJqDAgDv3pkBuPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gry7V8DSy29Am8qUgkymeCL9cFjbCq5o6DDXeCPoPkznquFzesaa6B6DyKK34qk6vrFiFo3ZGnHNhz57VRCa87N",
  "key1": "5isSawRrcLkVHdArJ95V6h3r7Pyd3EFZarHQKwLM29Ta9uf3izXMy7NeNJftkwTfFDqQDcAyq5Fd968p9mR5B7Cb",
  "key2": "5HkPdp9ucL1pPzLBX8bqP5MAf4Z5v526mBJWfAxJcQ97BtyG7pz3ZCH8hsMZ1xbLkH3fVPsWmGyzfrXBa9ewcriX",
  "key3": "hr2DgA1osJVVfXMq8dgrKimDmLCoNGft8r1q78o6FHcswT259mUW9KGHfEtZMF7SwzncsUU6bRqYttwGbg8NHaG",
  "key4": "5RNF73L6kbQKmi9ZmQJPD4BuF5R2XGEN5mP4ARDKDhKbXGTfcjJibt356KUuxggoGA791Vhcmhr5GHiMg4DVDZNv",
  "key5": "ruq1aKcisT5BZMHENjTmHe7Y6jHPd6GWaVhHnG6ZMbgS38wuCBanecUKRXN4hxLj6KgipQ94fU7ftmMheQBAe4e",
  "key6": "5KZMqTFYMwj8eVK2Qra254tTVx3CGZ3BUjsEp4kWtg2e7RaRmM6JMCHDvzYmGnpH4TwFnGoodT7sZB2MuALrkrux",
  "key7": "5dnPFgSvZ2z49AixRu8mdJPqZoNaVJYJFrN658G7gL7p1QEEQDmYJdVHsdPBESRNQaKAVZ6hjQtEMU6dBUQiFfsn",
  "key8": "56bwecj3qHdJF11quHDk96zgmwHmw2iDZNDa7xcanpckoKdZ2jQXQrJf2B4srQKF4JoZXGtPBmng35abqgAGjm8u",
  "key9": "5eQAYx4ZaHYNGu2cKSQbY8e6taPnp4E1iARLVLgSpsaV1o7s84nK25foqDqUP1Rg8EAJTms88TvAawwMwEnQiDrf",
  "key10": "24gTSiWhWJfPypou5Ui1n3pX7V3i8R4VPFkhRwTW9UgavnxujHBzkjFQVPJKcg2xqLJzFzS6iniw55MQ2ZNMo73z",
  "key11": "2d4mNaLwBvCj31cQgyuWidk4NnTBxVTGGKQ7ggSemZxKZCh5kaKrMqoxfrG7HnjXnCfRueGJGdcZHH1XrsAULVn9",
  "key12": "5vAnk9dsBhLwyFw5tYJSKPbuM6AC216eZZP7o9YcF3psbBL51xZ212F19T7Awf5Jcp3gcjhepYpVEkRPuLoHLXgQ",
  "key13": "4NfLbc3YZpCUyEB2mpSdM2i32GbSwonuSmMGhbeqVHgdApaAKrF2ppGPuiTNV2iKFXYx3NVfQgfqxwTk3UurzJCE",
  "key14": "5RAUeLA55sdXQFYiuGjVtJGPhQDsXJ3xKS1RY1jMkmgsa12136UvS2v7xaRhE2rG7PdS2os25iVpyiTBcH9fj8TT",
  "key15": "4VY4prddr7ZxXc7yzT113Cmk5Fj9ZD9kftJGRgcheETZ7NRbmujyKCQhJvREXoXZ4Rym4HBKz9uDEvM2VXVYaLco",
  "key16": "4nuiJfTCfP5tGPPUE2tjGYzuAqD4EmtHkf9BeDRLwY29h9JEkEgNRx8sVSyVgzGQbpPnjtRfFnTRZwq1bpCHtaUe",
  "key17": "5NQsWit8YwDmKaTHruEhEMuxMmUd2XviycY3dx2YqMUfibh6EyAHjBhjNS2pqCJEVrFRZFEmuTETxadg8KWS6p4R",
  "key18": "233U43pAae2Gxgf52dhU7TWZyswPgZihDyZvzmFWkCgoGt7S5Ks9diK6fwwxdLhBjmuahdWzMvUivAdfJi7vdhYY",
  "key19": "VWcUSccx8Va4WvKHmbjKvtZYMGLcE5wTnfY3cgAbFCcfR4uvhYAdaKDCRiPx4nocJqq3HpTBgVFd9JvMGTM6DwG",
  "key20": "3aif7xgBvnWzaghQ8NPaEwe7cEqpCR6sgcXE7y33GMxWLVNRaRQZaPcGXEogHpFpDr11T4H6F4XmRscoqLnQYvsQ",
  "key21": "43AEESADg7q21z6w3xKQ44LCvkGQ6kJ8rTiSwKA6KH2R9FS7JUBAuH5Q6BRtY9WQyppTnnov9uNy6VNNJZ2pYKGL",
  "key22": "3CaVRNjnRYJigPBNKZv8xhWiRmtbNqkhGMP3GAsa8hQZgcn7vxJ9Hov2bgMhB895k6BboLUBT37iWEpc4zdUzRq3",
  "key23": "3o5CZrVzSa3SpZfWAepJmmVk3bBpuD4oAiytmC8av3sSPyjGR8EnakdY6nRwFY8FLyzKtrXUSSbokyYVx6i9QbPo",
  "key24": "4dHzzEFuyXduBDTfTJgZcEW849XKNKrJe5NLeAmfCiHwmn7XNQEH2hXsbUwDPYqGsVfNMZFhf4vPjGTT7nM8x1Kn",
  "key25": "4kxm9XmpoEACbh4AKTnJ64RvmihrveNbwn7Gd1VBo3sMaHuBzWRpokavupsSEWJL94osfqForB6TZvE1GWf8Zbj1",
  "key26": "5z65kLJJeH1qTW42c34eP2pszLQ7PG29FjwixH3SFTReSNBYscUNWQCTNNUhgHYP5SpvAeDwtnLXYmRqFSB7rBYB",
  "key27": "3hNebiE5PP34nnZRBt6kdr1nrBUft7DFzQ4L5TLk37A3m44H7pUDE7UJFWkduEq1f6gZ3gxJkecQ513vicgRw4LS",
  "key28": "Eaad3b8ormdDR28n1XBhhPcdfQR6eFyKC3YeWxHQAgGG9kihhuTJ8YSSRMnVCViWgW9qcLL5Jz79LvAcw2zpbAP",
  "key29": "3cZPac56NF29XaMDzNHKRyTLk69WHyjT1dxAxVyQQwWdVC9VAqXiz7pgnwSeQv3c4jDgcDxtxrb82YYFKjdvdQzW",
  "key30": "2iV6wjwFjNKNBiFaM9ewWqR7BGGAnuK6ogWMtSKRxKMXoMd7k55i9agY3SX76NKXUJbERemXYmptn9szHToUiA2E",
  "key31": "62b4wiMZgcuSCUt4EEgv5JwzxLH1uLEhLDNvvB3hvHZfA1ytRdRc6f7s3rkJbg6PZ6rjZ1RQJ2eBDfUjgxugZ5ZK",
  "key32": "3A658ThrgyHWTjS4FoddDRoTeYdSzZdc7ncsvWiPbzQGQ63VCs3c5a1xeJemZUE92NNMsFrBEeH9qK7axSELo4v7",
  "key33": "66kXUQdgzjPxnYN9YdP1y898GiPtJ59DgjAzBhNAvpnHr1Ei84MxGfKSveXSNsgFaKERaQk1HLnWSNJC9YL2NTf6",
  "key34": "5uELnJxpoA5xZj2qF8yhCdtd1GTgEGYN3otEGGisijRtKMAYqv9NW9JDpHwigYfjDdFiVEpsqgC13rmAp9iR9nwz",
  "key35": "2WbVy3mdH3jevobzUxWa3RZcwnNY1sh5mn4TJfRBK2htCHXmXuqqzaQjmgedtHnAU2ty9CMb5G8fRBwL8Qdc1SHh",
  "key36": "35M6fhifE2jAFQT7XTwysP82aNav1WjF2yqjc61yLJMNhrs9msY3KvXDCYGUsy1MDJ3zXKknr4sMxhjQGX38nXxy",
  "key37": "3mo99j6J8GCJDrfT8E6TDwNaYYMT6Swudcr1gjAecJRaXvuRgrAFbwqea9ij7TJBT9tVH5zCGAqPQEENfCNSU876"
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
