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
    "hqgUKqVLj9qmxZHNekKmYonq7fwAUG62WjBwBjU5VWR2fyTHbz6yr3wneuEJa6NjzTT1jJKQHTk7RePA5Xgtoz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tjUwTfSko9KwtF2G48hHVYC8v3DLep9DnA655b7UbCUAkVxU9YujEULUfGd2f1FfAcoZibHzo16Vv7fT1C38e6p",
  "key1": "3RMySzPFwy64KMD62Si8Kz26LsG1jYrQnhDUySRPGiSkqk4Gb8mkU5Rb4e68bN5bD4YWm7aQopyoNJvb7YBVrhWR",
  "key2": "2WhDywtoQkrPY7acjcCu7pXnz1jEVDUKG1tEoRYAoRUQSJLWuimaqU3hDfXhhHVi1pZ2CfjbY7spDNKRGe8v9xzE",
  "key3": "hwpXQ9rZjrsQPV459jBRFguQioFBxUgW32vgCB4AJrvhrof2qNKpACquUUmeY3MY4H7oEG3dTN2brhHoSdtNoFc",
  "key4": "3FwECvJkKR6RPnP9BTRNxVQxyvjxuqGwLbtiKMKWtutJsPyuUALbJs1sgjTy2ZSuXaeDEh2CxHHXvBRbBZGGbR9h",
  "key5": "4vU583vui6Yz3q9vXLFnamRQDXQvTfNLd2FtrC96uTPwHArB1qnY89H4ZmLHTVrs5JSMvkaQFzKTKyzH9T6L77Zx",
  "key6": "vkjfJYSJovyWujoabi3gFrkQRx9m8fyLW31jisdiFKZ1QwedCsF666o3k3Dbnu5YJgccoK6NpESbxmd7i53LoT3",
  "key7": "2Hv7JDHCXDGPYzAL5tGiZZ9UQCZF5J27v84o3xv4TE1uxEgtqueWgLE6KGeBV2cJoqYisu12yKhKeNp6PYzuc3Vf",
  "key8": "2KqemLnnof9JmFgnngd8m5xppUTe5LaUP8GmhhQhNwFQbnF3gTnvnrQeiEiS8r4JFzZDJy7mNTiCaeYFNCi4Hp77",
  "key9": "2bze8aoYkMryNBm349sCNjwBF3wqvF9FPPLuxQmyxNQpNoTNUW75TxAMwSHY8AjX6XVBbnEji4hVzWfd8zdC6tAS",
  "key10": "3qXLfa9yhqNMDRUvFaVrcDhvA4FGcQydGXUqVChXPVR4cjcTmoXApapzNzRR5g4YSy416rZkjKa4xkDsakKQMGCo",
  "key11": "2fdgxfkD62qXQjZxrpTrRD1bNYNkCedvXV5LuohS4rkXEPos8dTgtVvXsxKUipddqhbu2nt5wnNSzieawjy5AwRT",
  "key12": "4MUkPHQFjXovnNqHrSg3YjgCKkhrHrx3kj2a84ZtrH3jHng8HPzPxBytAN7RDHLVNH21w5sRugvWL6LcvAdfByUR",
  "key13": "41JitFfLsQAAyjqPv4jAL93NkjwMkZRYfVJshyWCd3iGV8FikNdBCXTEbYVSNZvW2Wax8L5y5XTpy2wjqWXmYLhF",
  "key14": "29FKac8rwWa9fSc7JadEPw1nWshwJ8QosHrU5aTJqien4SUVpUM9mBEYr1vCBcNFg4xYtwWrAQhvNYFiheaZrFpB",
  "key15": "4AHGM8UZ4ZpZKRgcPoQFzxTSCxjj23ZEcgdh5fmAu3HHN9r7WD8aFgkRTWFa8tghK6NiY7Qmz5cj5Mq6ouF88Pow",
  "key16": "3my3s2scfYdJEwjQpsrrsZzn5TetwDxk8QeU57wt1wYA1zdcurNttSi2WcFv5TVpWaNLWcRWgCCLCKT6xMsdqath",
  "key17": "5Ww2Ebvyc2RDtYDEh2euCcBKeWX2PNYosbkzeyxDiWh6qMJEVJFt9dokdJw56hkMnmQEQSgxmZdAvDM32P7Rmbkv",
  "key18": "5NfrJuUEyBVkWL6RfSeorZYqxSHCn2B2jLnkpxLXTozBrn5ENojtjTSH6RJpKxn2hxcyWJVJRvz4HF7bDTQb3bHp",
  "key19": "5W5WdyqYcw1xXA4aCoL1hQu2api4hjhnvGSNQwKcN61aiS3jPvmXVqCCjbaCG9G78mBiv1zsESteeBphXYPddRF7",
  "key20": "yxQm2jPGfmGtabTnS9ShJzR1V55Bex1U6uQLHpH2pMdTHwdjNShGhkhBe6oftwCiWdwaZL7CWHojpet5YJgKS21",
  "key21": "SPSWtP8Bpc7x7twVM1HgNS4GXLo8MUH4v1me6mbcep4mMy5EmFnsZxSXiK4eBuZwVGqkLFSAcbk2mZfzruZEcVL",
  "key22": "2mEPqxmigAN6phU5nUVRHkhLaC63frU1ujLxk9M1wHjLo78Yw6Q3gKpVK2zXqSag3mXTUTZgQGJCBVJLUFX939dH",
  "key23": "fKmcSHzYDJEmybCcDrY6gEF4TAA8fbXP57Gdcjugc5G2Fnssqv1eFKUjzLiKLkWHmwvgg3GnR1NVx7Gyxr47QN5",
  "key24": "2c9Su2rNuVkpDPLNNfJo1c1vRW5xiTFoHo8KAKNM8XPpXMPvCZ1me2zkYWGpT4U36GixzbGGddGte5CrwkL7CYsz",
  "key25": "3mXFaht1R8bCxMAbXiqZRGnj2E4iCWa8eCmUf2dWV3oqz29UkkT7ts85KrX4VUkQESHsDtzRw6QooPG43pUHJwYm",
  "key26": "4pgME6e9xbAa5dLpxZhXM79y7ETYepTadQGTf7Xmvij87xZL2NaX1DmHzsN1mw7eJWGzbnHQEu8s7nApHzW9quh1",
  "key27": "23JMb1KTxhtHJrTFVqr4WX2Vb1CeguQH29dkyq5ZnK3M8owab6LuWqtoucyw2ZuYRVW7Kd8EmpvBSoGK64FveWYi",
  "key28": "33iQyFsKN45MAwVYEVYtqsRjas4V3itHLz28WyWSUvAQNJ7ee8uRG1eJrK7DPvVdrFSgHzGxguZThjrQTTQytGfW",
  "key29": "zKAwGofbMGxkYAvTMX5tEFnXdYifUVpEisbusXAzsuwJh7GZvANboBdGDHCVNeDRzbdRQPRbVLppCok3Sda8rW9",
  "key30": "2J7aYWarPaeS9vXhR42uu45FTPEbeLF9L4NGr5ZyGSxuG7swPMtbmtiYD7xMxH5U2FPp29atBiCs7dZfMboQotNg",
  "key31": "3L8rWcLsyYS3ErgthXA3g6wvcqW7fHwQYkuSZ69BuBSbi2L8s7PRCGdmSj133QjvayfCXt3JKnN8vtB77CbV7rfZ",
  "key32": "E6ese2CiZfseM9MUJ4W57EpsGnzeRFBeFJaRJhJZAV1kuwirGMvypaG67vMy7UUoH2zh74Q3iHkc2FwxDfj2YQw",
  "key33": "4DGMa7tbNdHYqE6Y4E2vnEZdx4BtDcjhhry7HVjWKKh5EFWr1MZymyGu9i1BQShkHmXe64JPdAC534vf6jDG7VjP",
  "key34": "5kF8fWpFzybXx2ggQ1XYqY2ayMbKZKUo3wYWF3kR4vuDTmP7QwuhGXqd3mgGkMrq9zD1jaChCVAC3pCbUQBJBgzZ",
  "key35": "2rSmdN4GEKxooiCHYUt8B2ip59fCshGg1G36uUtMMwDmVLPmS8Q8FZAUTdqQUbLPximJyuENgjzTmZ2TnmYpogQb",
  "key36": "o3H8x5foX7kpMZcWj2s7dUHe6cRuG6w5yZttY6fB2yiTK9FP3TnXQuxPYBCoMUhcPPC97v1a5qoDzRmBXTi1ywc",
  "key37": "toWbNTNGLdtx4aogBic4cWavH5PfAhBCuEE3D22ietENgTjm32FYqZsWctrAmki9pu6jVDQWh3jbNcHk5MHbcRn",
  "key38": "3jvVPDbURvsdnAmbwLXeUAaARh64VaW1nNozp9rjCETA42BFsFqHNanufNqzUTpMFWgSBfATDm71yTb9uBrcBPSy"
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
