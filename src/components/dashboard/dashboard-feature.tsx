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
    "4qPMhFJdhGmS5sei3K8SgvcRMpK73KGNc2TpWzw6YoDrf2xd5NruRmUCbWpYLFXWLqtWFiGMCq1gTZxeFejbsX2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRA9H6W4pByzh56YgqS8M75TqmZKXEx6wwbMhdQX5tZ9dAGr4Au5NVpEMwhteMfsLQdyXiBxLQfjYKyqNEs6qiM",
  "key1": "3QzGEpFvkRgHcAdQvfjyz1VmHy4qBUi9zsA2NhFcpyU8t4HdfZZFvVjy3H8PDuu4tpgLXNJh5CKoNXZHprsGKCSP",
  "key2": "ofqagGHBV5pMYfoYoHpf8MvnCDQAk69gnD5DZVDMs8KUArLQ2Xe4VNwViFWeVTdfj8fQXD4QdxXNNhYEY7nSee5",
  "key3": "2MBLdSQgeTVMjfdgkfbq7DQZFKXWKgXkzLDyCT9VgZuikeBxpFwuYye3YETcCc5Ur3N8oB41C9g4JtuYYRscTqUi",
  "key4": "5hxmj9juFNEwrsff7YaHemrGH1HK2S9UFvXJeSsVkZKGQpUnDLzfTL2z7LUnwA2GSdsBRPZXmuxqvWUiuEXRtvPk",
  "key5": "2tKqRkTeRHoRHZZ7zkDY7JwZV5LiBWXPRSzSM9Lfa3pL3BWJfDmvoEz8UFwHZRHdPcw1ZMJyqy2r26yS91MAnm7r",
  "key6": "5FX5XN2T5vHoyfHy7mfjfj333ss5pmNCgH2vVUPjXJKcFkT8PodLkFaRychDW6c5cHSy9mTyrbFuKh9G7PD57xNF",
  "key7": "5A5t2mqKPjNCx1SRfZ5VgK1U6nkizkmThia1M4P7uFsCgeQ2MLPJ7X9w21u7WZLT6hw5RJ5gwNJAByHAjXCrbMC2",
  "key8": "4McFmuFKYeGz1nBYNEhYRZRFTgWeMc8CEEKZL8iEmCG8vjdAgKgX5xVyaa6mkr62vLn8uJTxMHsWdhWfL9iCMuAH",
  "key9": "5kSB1oiBE2ZidBwH5wgdPWBmhTWBMxaDhg5aMoW6meWZsRPDrQSVnbapzphn57N9bhCP5fwTxx3y6bEPpC6rCjp9",
  "key10": "2wd7h4VwbEUbTN6xxQDvmAWwHuuxAiKUCW4C6oCctDej3FxiWVAwo66BBHD7T9yMbJgo53ZvW4qXLjFZn6riQqPC",
  "key11": "2n5UnTAPDYK98LuMkdH8pPcLmKHrV9NWkKkBgMRDmitAkNSZkW7d4C2Ls4Ty9yfEbeMfjwyTSSz8eQ6JJbdLextJ",
  "key12": "4PogNktn4NJ2W82381qmaYVQko6kjXypLvTZ1xtwbrxu8pnxPgqVfKjVzP2ow4WWoDoZUFV2KxeV5XXFfRKPbM2y",
  "key13": "5UcmguGk6KxrCS5WHNzPeZC8WaxB1Ehs8KcZmttchLqSrdermygizcCwtgoGeMZLxsDmx14g744RtZhv5uvrKwBG",
  "key14": "45hWPs8xgVQaq1UQs5C8ekgVP4H5YFyh9agyxbYNpxNSxo6vtTYZeLq9QUGtfb3zWSZKu8vEfo8kjq14wTeF9CLV",
  "key15": "QT817Aq2WcG81kD5Bz9raCTHh1ReX8fRN6tdX9GSaCFBHqesLUvxxL9ZxVXdiHAU3VUcCaNihNg5KvNZ7TRvzNh",
  "key16": "3YqVmxVZta2mS6hbGzMKehi8sskHoUEBxiRhNXCZ3MT7fDe1kXkY5zyE5QTumnTd85kcCGpdE8ouEsXfmbvDiRvv",
  "key17": "4nzhtaUNVYb3N8oAHn6AXMEM9cgrS6w4JC4EBNMgBAn92PHdTrYBzp19ho2GqU6fpLdiS9F5oJ3iUDzzdgvbNLMo",
  "key18": "4MnvTWNHSWEmNjxSY5gychbD7B6M9grStEmVjNv54Ddvcn5ky8x1tnkFkmCYXvsgvu1gFR3XY9yLJryYXNTRtHKW",
  "key19": "5wyNu5gDfT3kry4fupKbgVeMNHVNAMAQcUKW27pUDEwBwpNCcjDdJJzoPzmHHyWG1vkXsqMndfSkw8EQxXWBusVp",
  "key20": "4CZwRCp4U8X6ATSxRP2qPKWgBBTPrhbbdN4PQVZ1NWJq8jdG3TS8HbCm4AAamBiUK3dFT3nGP9LQ1FLvb7ZUwGmp",
  "key21": "4NfkmxCABdGwKtWq8aVMZPC3VDNFUGGcBSWCdXkmvhEQMgKdVMA2KXiLgq7kU4KEu1VEuXY9gZ8v9hMZu1ViYv92",
  "key22": "uoYK2CFCoAJj2KL9eBi9ga5XxHkD3aCKQRF36Xck1QT9FBQRoSibAXCVywMc8Mwd2bzMm1TjWkTDDcC7LBU4Df3",
  "key23": "4NZPtiCV8iSLYxxcc3L2yygibq2nFkc33V7k1WD54EGyfD2dZjK1DydcQEqmRMHPBH9k3ESJagMRZVYPv3MWy3u8",
  "key24": "4y6X8tSVKXE1NtAa6VRk6qhfyh37iWKfA31tXmTLaeEgPieovZLzjPKiHEZZBAoXW7Gzjzt1KZcZtdu77Wwg2wYb",
  "key25": "5Zp7a7Z3XiG2txsZcUrPUi7oCyMkiRyBQ5BgaxDcBSXbpZ2UKAsrvYN2Y5GF2LPzishJAPVRSpzsRKr51UXhFMxm",
  "key26": "5p4zLLqCKA6TFUEcKJphsaV5BbWbvjTEu79y16JmPirvGG9wriPf2pt7z9ZpcjrywKKuiSczPTA9DAcPiJT8yLT8",
  "key27": "3URG5KzKutJGXRW68eT7DivizMouxJA5hQLN8Pv85LUbafgMebPw9k8Pn4i3TWWnSzucT8NqwRmz9cfEsb5s8QJp",
  "key28": "4fQPmngdPAmAfrDAB9yotzznxFEtGEhsbTYFogbJkmu6fRP8HF9uVRRW5XS24BT2XRejVvvhcBJHH7FnFPjNXJD1",
  "key29": "4JocMzEAgAsNbUfH7iHwyWi4y7ZbAxUK2cvcmzuVAZaXrgqwSzYpeW5w4EYSLVb71xfDxeWWjqFzbmYEcxptzdpk",
  "key30": "AN6h35oVqa49FikWATNfmwgNgoJ8J6JphmUMXwxFTFY7cW3qT6cDkJmWfmDtg2VvaRVEcrjokW1fCKjSDbT32Nz",
  "key31": "3WaCui9mJXSN1eKfLXfYxZua2fbgrznWeYkBkxudfRPEyeh8fXRduFj68HXknewYyHf3A52DbVbfRhQyifK3zkGP",
  "key32": "5SvhadopopnY9Fi8beUNqsm9LBAC8KoSQpVxSwVnBFPGyYyL1QNcGVqAALjakwV6V3Sa11DLA1cQbNwCJayTcDBv",
  "key33": "46tv6RijNHMeTeX9BGcYWZGNxjkQzvp5JbK5Tw8ZcQdmbjy29ggp5TVq6BeFND8gZcQYCnnyh3F929hTfkWWtCF3",
  "key34": "3XnPEsRLjP3Nf4wdtYaCxZnkceGY18qQozCeeJuwohAFQd4cgMLqM7ei8iqgfKmfUJ3pH477VTHfjJkR4si8xo6N",
  "key35": "2CptuMcqZqJewUEY8naJzniDdHaABExgGc1Z717sQKbQJid51ji17NBLeotFJnXvhDiSZqqHujBZhQ5aH9bfCvbF",
  "key36": "xp1YnpoFqH6pmFcSgwN2JtuHetuGcKKLx1B7mWWpmA9UFpn1qqT4MRB49GiRENChi6hYAquc5UBSeNvzVejx7M2",
  "key37": "3KC3BoYZGWEE3epa8P12bwsocDKmjNF3qSoYe8LiWD8jfgtNfgbY1Nwbrd53DdYrAzKC5hVEJKm78rfKqnQvSy74",
  "key38": "4Fja6vt89fYLZ5CsCLLChYoUe3i3GBP9oRwsMZonWQYFCSeFYJB3BRHFTzJeipy4cS7Sv8d6Dvmui3pvBpVfzqw9",
  "key39": "5vSsAna4mYaHxBWoVzcDAg58y8V782JR1KW1UAEG4C13KELAsWVMvF2cYjyQVePhiD8JYfa2tqvLYReaeFzFaXto",
  "key40": "5aa2T17nyTShCvFRzPYuWptqzbgiH3nzBvLWTnGhk9reNXg7RxgKdvg1sXyhcarsTos4gzScU7Zj6dczyEFKnKP8",
  "key41": "3yBHP86zXzR2gXBWJx7wNCS68ZUAXeYZffj4QkBee6PhSHoJ4ptE3oNmW5Lb51XH2fqkmXLwXKn4p3onvVhzaq3m",
  "key42": "covxiXHqqzfjABcz3SkYxt8c5JpayMGiEAdaZsy2fpiR7vHkkYqvVTdDp8qayZv67p1hozff3MZqtUbv24X9AFx",
  "key43": "Gk6vN8QNKqepg5m4pcrqck3NsGSyzXjcBhdFLLk7FbkduVtqGkeLzcNYZCFN7beafb2xG8PS7CzGaeWiFvMT5SQ",
  "key44": "5t7zsCBEeemc2dcg7MACSuRb4tnicjgLL4Cta8GeKj7Hn5a5vdEsRcCvx8vYTBtVgj7n57BrKRcENVo3cF35yvhQ",
  "key45": "41RVJzxHcFpE9EiMn1FMYGR8UKs3f1SGgUBSVZeEtv7JCVjhWQ61heqN2Mr4yy3iuiqm2Sh1wEogALQHrbpuGj8K",
  "key46": "4h82fVGeJTiQWYe1K3qfHpuygEZ2a6WE1DqXV9D3cUqLDYNmet1yX8R6NBpmCLMpKkRkaGzYr6pRjuZfQVRWAVby",
  "key47": "3yCvrqnyvTDtjsujrUykF4p577mVuSiiNLyKYVQsYHjS8FEsTDs3izrUDEU1DcK8zfiADStTsXRYLUNFEpACsGAR"
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
