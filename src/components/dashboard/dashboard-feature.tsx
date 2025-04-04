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
    "4tSLa191QbU5i5TFFs1dVtp8FttnVGmXdPDhku95pthMnxxzikk5SWzCje9DmtnJ6DmmKd1gGbE3Dpqx5DHz6PGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sD9e289pbcrYsDfba5r8GDnMjdZUgsVjvUAbMnqyAtYmPEaW973cb5WYVWnnzn2kuRSrr2NKe7u7dcYndBdpt7h",
  "key1": "46oEvKxFGhWVvWX63TRfGSjmKytCi8mD7SWUgqbsXKdPYJiw2k2TR835jVv3fSfoW3WQbB58qjGTRsUgKyYQqrwU",
  "key2": "2n3diGzMDvtKJ1UKXG2aC4kDx9iuVXtpT86i3PRJkQCYd8SPNDfyBNgNE9qurQ3SX7WASRnkPFMX9HKLqL2qMD9h",
  "key3": "3Vrqz8ja6V4Lz4RWs4RwBhsz6Rk1dc3BhUoQ2zuDE9fpuS2ruGf7dj31dS6mvRyJzLkg98JpM6BZMo4GCEwYdSfR",
  "key4": "3gjmrSaU7AEAWzp1tQrR8s7eXrMueNkC55VzfT5SLRB3aqYJexvBer5KtJHVArCmRaXgkdUZXdYonw9uUkgT4RM5",
  "key5": "3sDFbh5Yami6jiDvTXcfWnYXjJCE4GA9Tuddev4C3aARq76fWsgtfYj4eUmtCEnoRCYrTduBnJ1fqL7zsBxnixwF",
  "key6": "47F5KFJmXKocV1VXt1oP9EFnQU3TmuvcV76aXxN54miTQ4au3RqGZ9fNK73rAFPTkfakwGk72Vjzcq4XDVB6Dxfq",
  "key7": "42rYVFvpqTDEqaxMvBhqaVabo9Uicbq3qsKwPWgpAJkd8zsqwBS9Znt2jcUDYU5t6wUXEqbDcH35YPYTdBnB39eh",
  "key8": "XvYzFDgQkGm1P5E6NUiRVRDzc1DQgJeuHXLvmJpWdZK9aYLXxpvacii9nDDE4pjgj5VFiifXpmfMNe3Yo7uCTFK",
  "key9": "3vzpnEexgwwCrdX95nhdW16s9TWYQcUVGqQcSaQfZQDAi1N4BGn9oFfT8Gd7UmJsPh8RE9zPMkRdqfb8voyChmHo",
  "key10": "5X47jA8hho5eXM54VGQueouCj8dKVyBFA8HeNfeSGfmgHKDgv3RddBhkyuK8463JmMrEheP83FaMm1DfHYBCUzvV",
  "key11": "2dv3b2f6h2xpB2AbMpptri9uQYLxbyj7vDVJaBf4Qfq4wNB6ZSNZuj1aZcZYjVciXUd2NUdwEf61b4UsmS32S2kU",
  "key12": "5Uq8eXAQxJLzRUPzuqZX1eAk5DL8fhv8M6VzPMbs2yyrAiPycGv22W1zSASeP4QeFfZznxKf6TWUM2rgPp1qbAPe",
  "key13": "2icECTHCowxW7jW2HBULAZAa4B2Fh49TsLFa673CWVKzK99HnCNfLnQiZFY5cNGBd5HkRteQmC7ZLsTway7JT8bH",
  "key14": "44tQy2txCV9Pt7SquWS1SWuRPSpT6AzNFQBJU7gnnuaXYc22dJtW5wJ62UM1EzXg8QzBMYgXvi94iW3jz2ewtTy4",
  "key15": "3B7Vr87ij618GDAJzHw4zGEeAk4FgsyrtMeRAzDRJJ5ufUu8bF23sFMkzZ1ZPRA4AQV5qy2dMKoE2AX7gtTq574m",
  "key16": "3Yaj9rPGexrHpF77aXUeQw5KZnRCwnAM3xNoPo1aj7Bp7mJx2jQPHr1AB1pXYYLD3EJumbAMxaPdanQuGr1xUFJh",
  "key17": "5wiVADGzU4uKvJgZXdY3Av72w6sB6zUp6zDF5RAi1yfJNtfu7h4XFSA1sVCNqsEP25EiP5fnbmXEGAiYZXDCT2yx",
  "key18": "3Ud6L5eKSL61pVbHcCfjTm461WrQRCUQqbEK5CJFcAP4kHHRu49K9XkBpCCFq7UxQvqiBh4YSssXAbj87q9SefQY",
  "key19": "3sGQoPN8YNU32hvLvBW8kCj1n6XeAygxeLseCKiFMywqteJNtNhGgRh2moPgJhTNPG9n6tAqfzKBC52UMPvGzhPC",
  "key20": "39Kz8GerPJWsVLwt8kLC8MLeDTL9vHvgZBrJ9AsL61m96RiYDdwxF3VSbUTi1nc39ecCwtrKVZveyWf8iNr5QVzA",
  "key21": "5LNqT3rZbZ1uFpaqoF67vyzWTfLye1tBHkCjWWYzvTvXzDuWto4wwby9auwq6oooG1a5LmUvEuWJ4EVhRjthWG8x",
  "key22": "4soDtVD4qHRTxNrKJqU84WHNVSjvm946fw3HPF6paQ4VPcgbg3tgBB8A1WHhPxN9rhuWEJ5XSe2kgaiajT5vubbP",
  "key23": "JajFKkK9AcBHw916xp2q9spawpYP75HTRxEUrSM1EuiyNMP4E9KqCEyUkjiModMzir8hjtGRugsq8BJqp7oQbfA",
  "key24": "5rzHjmgTjPaRS88rswz4uk4xRyyg9zoqw5oUCG1Vfps6smhA1cwHxTyEAAhsdjbvA5kkkKTDYvWVwVgeEeStpmqM",
  "key25": "vjsrotEfaQDrFP9D1zLmbYvAUNNCsngGikLcc8QLnWq4TRCLzHWLWBzT2rNe7cdKjbEsfWAVLr1B4Wr5G5sJbVw",
  "key26": "Si4SPsnaPf42tEX1Nne8u2tFJyW3z9LFp2WtZpGYmMfrqaDS7fbuQ8Kht6uyqFFYpefwFJyVrtm4DW6BxWeaVm4",
  "key27": "26m3RXf5zUmjK5765KpnNoXe8VbjGvBBh2wswp8wFMSPD1qC1T7jgMgkMH6HYF9UxGHFyCZSUqtNoFc7mhvUrjrJ",
  "key28": "xoMEviZ6k942ABm38179D5TjcTjPVFLquaNB6yFpF5tETNJ6MmHKqJRMMDdvc8ZXKFMJ1c6aESz4nwc1pRGVr4z",
  "key29": "4iGHNLrzk2fvRXNYCaRUKKRJ71DiMGty9q6vxCgASUhfrFM7ir6mf9mrr3DGC9iu1CKCzezSC9a5id4ELfbFP4Ca",
  "key30": "2AHKnPSetxAPJsRwtKruuXbYbB5BCEb77ziUfye5rA8yeZZw4xF7qyd7g4xZyYQav927oj7oqjrR9YyefADjCsZb",
  "key31": "x186ZvBCZcSUJ6p3VfywfzcLJM9UFT3at3QMMBFtVeqTr1dTAeWHjip7hc3weY7xd4hDjKYw2dHoHXVHZ5RF2co",
  "key32": "5ydfDisZXeWn3tXARg74KF4sbmqtpdvQ22yrfct76kBmA4CMtthShkgYSq8MjzjdUscNzfxTT1uph61FabaXSx4L",
  "key33": "3zVPZaTxqxkDUXuoua9WQX3w66nCrpa4z8bR4RrhTmPBLyDS5SM9JnKMWthr1WMHfKU3qB6BiA1yFRfb9RNbrUET",
  "key34": "2mhKJe6gabPwEvjMfJ6RdiZCe3Gi2E1kRBcV6a1k2Z98AYmEebBBf3WoyUdxtSNv2KKuxwkPFHCzUTa67wVtL94M",
  "key35": "4ZoaijWbQ6owebzJXMj3fn2N49t44aPNjV5UMr6Qa6Hfee3xf3aRaCdnaKnwASPcUKNCWTT1zfvewW8AaLvDnk8Z",
  "key36": "4JDNzaf8sdWm2H6rPYq86xXWdiNCyACqRmS5HVrDrH85HxQpV9xcyGYxxGvweqExHm3WSv5DayZwSfZbc6Geqy25",
  "key37": "4QixjNUfSP3ZcutNeD5JDBJTspsknXfFB5xgv8yK1Eb4N98mtdeT4hkfeJiYHnPj9Jifm7rpdyeZmSh9pcPW7tJW",
  "key38": "Ut3iTbAwzohSb1XdzeEiQB6JYuQCrbZtKvjJPa3DeLHdkdmTNzqPd5kSWKsPrkgPkQvGhxGDmu8CsMYvfucz2z2",
  "key39": "4mfL24G1z5GGuTkypenh5QvUu6MUgaXcroZPMYkGtZXorRutYf5mz8Cq7EDXUZQ1zqR5fnMZwsbtxUGEhTbMcjZp",
  "key40": "4tqg9Hfja7RCkW6nEeQZufrcZhn2Lk9uANECqgo9jTFYQa7HGxn6vabjU23cFahxcD5EkQs87mvVXo1zJdC7na3M",
  "key41": "2z7LUeiwyRh4jNvUiTS49s7HSSJvRD8SedfeB2Ux56taVATLVVco4J4Xqs3ajQaiMHpw7ePFxzQxY6jzmZ3XxgQU",
  "key42": "2nFvfVcT122KWQNywgypvDpDvNpkQa7xsPfcKBoXoX1VQ9usszzjJduxDagW6KiEaEdYZZPx2VkLtrYhAVsdJzck",
  "key43": "5r4B37MLjJp1kzmR7rCbyWdBTJvGATzTrBcA2v4HDCTiMYmtkaqcEnGrupuQKiKoS6mD3vNsbUZSE7nTfDd9keqX",
  "key44": "ru7BT6KPDag3Pd8AWN5EoZt12u4iYobDqNCWY9edYxZnMY9bAv4HScVUsEQzbrFbXoVaScyR63hLDwEQDEBUkUQ",
  "key45": "4aFW3JT2qUeBDW5SGru2duG4LLwZiNmoBPTSmNfMVdWMVFLknvLMV1ZgL19Cqd9NUjZyeSxy24Hvp5AfQu7kpiYv",
  "key46": "2Pd1bGRNYv3KLiaT9sPfnPZVWDqpFkmD9UykZAzDpRMkPkDcteRCMjE7sb6CudEQDYWvzysTej1S2qYT9zegvRYN",
  "key47": "5GPv1Gi47RMzzqtp8f8qs5xRUs5FStTpZAmzmNLeKddPTTjdVPuiksnJam9dHZ2vPe8NR1mSp96Udeedgbfh6pGq",
  "key48": "23GyckkjnwoK61HSvoWgpzVcY7Z5VDLkXnBmZEfPnhorFCND169VULuBdpVj9shTwfxh9UuUotNFFXJsVja9RdcM"
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
