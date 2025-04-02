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
    "4NGP2Haiyt4hZp26j2E75UK93TJdzmmSjM7pJnSDNSwnUi9TygUmiZpZxFetk5wv4tJvUkPpt1R4pigp95TfXiqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mCbATb2RiAzZPxaZuWzuYRcZqLp3QGB6b1cjxS9vZwFT6uNAG9iuYoZDsFfqeDjqkiUJD7udYsXC4y5ZbeMxdGa",
  "key1": "2eFtbSSg48bECcw1QQJJzdMyj6xaRBapKfAy2yKAmceUB2eeKh4rCP2oQaqZmCN6t8hxNVRdXhPVb4cDee2msnpL",
  "key2": "4stA7Y6YGo2WSGa8KhoWN8QDZgmvPCnmbv6vXaPmgPHCm8kjRGgsJuMZUkbnSZ5cmC7SkeYnZom8uwPHanXS6aHS",
  "key3": "2AhC5R3gfDsxCyG9biqSi2BPEApuGJys4beGxXQdD8JfC6MY8WePTWiQicqWQeKVHMKYFYcsPYzvWriVxNyPfMc9",
  "key4": "4HWQo9jPzeSEF1PcwjW7BjkKYsxF4CcGct5feRNnd62nxdoAy8QA6o5BUdokpTwm1PyvoKZWGZ5x6iuyTd5zYWVe",
  "key5": "3nUWexTFeq94c3uhEnQmbG3Ut6YeVu5ojsJ9KpemppQnyESXbv4A61KHJDJfzCNDC1V2CaxTn6fWUDVKGKh2jXY6",
  "key6": "4iGYotdaf37mNBUqWYnMWyK4JB1wig1JfEJcAHkEomwwqLaSCCC6CetcYDZ8TVG9GeYht2AH1t1BFynKUvbtWAFW",
  "key7": "2Az8GMJtFHC3zxBvzgtsNDxmpi9X41TV3tVT9p97yNnekLbBHCPCGKDuAzGCBG8szkaCGvppVHVRjFMbho56DL5a",
  "key8": "3KynaFKM2sdYhCAHLdeGagjLsMt4Q8zBVmta73Apgk8ftFkHXL4fPfocCrNFDteNnEbVcL1nekNuMyxHqW1gMHF7",
  "key9": "3wR4bhUJg5XWaiUVyeyykK8hZL1uZfCsTyQJLFpVjwR4xMpPcjkgNvM8htTLqiiv5ut94z15WAWBDU7y3iHFuqxc",
  "key10": "5rxzY6xhpJLioHxZ5vWmp4heVrh8Ht1MuPoWtNeCSigNgPtENEhH6XNggiJJvbM6smAo7iNmrBhucMQUkBywuGYk",
  "key11": "Fhhqy4oAJDtmZcumGGinNrztAyZpkgWJTpsmw7uZQFwanZUvwcmxg5wp7qWAs6WurXyHmWNuak6VK3Ao2NNjPNm",
  "key12": "54U5RmNPqppiyiMaRYvGFmMmEcYoi4cDRERVjsEGU49T61rMQMpFHUeGRRoCRpZNYaQad6QJ7SmKUGeV2jhKp2P",
  "key13": "2YwmVyH5mVhUM1wMXT4duPCzQ5Ey9jCwhyPSzneG9SNuaNKpq73q5nM8oXYzJtecVrePE2NTURT7VNM8mcFP1DR6",
  "key14": "kpE1vxDQkrNvZRvkd1xRrPwM51Vg9qDfs5dxyVDJfDxjcXXvFgd9sEGi9gRBp9nvJWPkHgFE8x9e7y5GBdX8JNQ",
  "key15": "52uAcU1U99p2UCkSDaUUKpRP49zKqi6Xc8M3gFbuEFRy7u9a9zyWK83Scyzw3gDKmW5MWNouhG37CYTbGkqyts2H",
  "key16": "4xuz6HQV421segFBBTK17xMf1kBAMeGAXZkJqDeFrMPdGJa47iJk94ABS7csfroHkSvDMdp21i456Xf36i2PJSfi",
  "key17": "NCEnDSy4SqWVndtq8ocad9kVFw5AwuEPKvH4KAo4WP8mSWpuSZ2qEZ5nPMfnofqcYHg28JHqAMxDaqscYgAudmD",
  "key18": "2YDbnBdbZgLPNt7eFvtAjoSq9Eoo3jqFb2xya68YcSSUEZrsSWCkYqF9CLLzemvEAZ4nZZBPbE1VsQZetH6aHqC3",
  "key19": "6yPT7vUL4oYUCquzMBva2DVrtnY6D1Hk7gsb9B487bjfELvAppe6Gsw2862Mm2BrtVeriLWFh35pwBHqCdESuvz",
  "key20": "4suHghcaBTeKttnSQesNaG8TH7UPZCfb7LcFNEj9mmAw6HuJMQfKR4L8wgKHgYFPUT8YGV1VVjb1Vvq56h6M6ekZ",
  "key21": "4iCRGCQ7i77LqrLKVGGxzA7dVSMUiettbQrAyDeqNpGeGT2Mo9PiTWorM38GeQLZoXD8HLnM5yRSfSUcywAPwpKA",
  "key22": "4Dnt7MHCmPrTJPGdcu6UqdSwQDdwGbUbXbtczgjZ5ejXXXRs86JmxNxtWjTrqQKGk6S73tqQ5S9TM83tMW3HJcoj",
  "key23": "5Ec8HNw4FYWip2LqF2quca1VKHoYn4vJvnfpEiBD494jWfBP6XsCeCx9UchH6h2Cjf2DT5i7ShJCasYHAmEBs6gb",
  "key24": "4qpMpqEg9uzu9jz4dt3B98hQc6fnC8m1Cb6Xpzuhstf6defztZPJfGvHdy4TjhKhKZWYcNBtWtsNYXfbFqE6AED5",
  "key25": "3JoY1STsrqS6orwRL4s1R4YrdteZikaBY1MS9bJ8bV6LRCiffkgLTeUhfHwyAnCBTagiW5dkDS27PxZ2xzAmdgnb",
  "key26": "23nWVg5JLj4Zj5t5Nt3shByjwePNS5Syews3tZCb3PeZ6D7WRxd6JG1SLVdZ44dPSbXPLNPzcvcFVgSZusxE3YPk",
  "key27": "4aSkBYSVdcvGU6RssBhWtitvzYQx9XePUjnU5b6BrMpMGFvgCfrM5uybTNN6Fukh9SaWDv1S9kJ4T3sY2WjgpaGV",
  "key28": "56VmvuX5dPXkezBStcqzbNFgJNSWpz2fkey1nK6NpMeo9P6sfAGFqAeGcPvCe2nzrLXq8MouhSwP1CzYEQSzcNkf",
  "key29": "39av8Cdpka4DMxKMboXUKVmwg3cJXAXZtzwRJyS1R6m3Cea5ogJWW6sjB2jmaxditMavuppAZYaXFnMfkH9Xacro",
  "key30": "3ssKpnJMXubntrMHeGY6865jfMr1mvDhCzoJJmgALdqmDqXgqzj84V5Pqtk4LfuzhaQLVJNvA8yatNQcn1X9tkgC",
  "key31": "FdALp93AtgbR4Qz5z67CYcgDob1btLTWNFpQG3HK7VTYZ4K1KjpnUyj8Kpn2mfUTM7NPV27koowstainFiZ1oHw",
  "key32": "2d9FnXPEXKM47msMPFGhUvLRSJySh2BueacAzLaB1cYo1gz2oo2tPkYrTKU3t4jwchpzjhormZM3wk2MbT1ZVTRU",
  "key33": "57ysMx3ESw5CnstZg4aQP56AuabvbYwGyQLMH2mzHZnRUWw5ooUpJbL6CQGUMtY5RVH1eVrdteobJYQkFQkMJC8o",
  "key34": "459JMLoDSjccJ7SnLn5PUpmUt4pjiJar4kYDGfe4zJahQRNDxVDKVxAT2rbPj733e8ves6qaj9aUPJCEB7TSRaiv",
  "key35": "4DF8kCpEMKtX8quYirWxnwNDpPf76rMfeVFqKuEVKGR53juwqj55HanR1hrt6cbFjpa5jj8LA7YjM2T3w5jX6idk",
  "key36": "5VZxVWCrH7yhwtqMTbPPwUBWYu7x4F9pdzfWoaEiYPnf1srjRcybaPU7Nu7btPzM1QDj485QMR1Ce6M6ZvDHRdMb",
  "key37": "r2CdajpNserwSQc6kk9bTMqdUWsMJLMygBRJht5mSxo8wV2poe2vTt9wQmDTzwsP6T72GdSsg86NsqunHL73nKe",
  "key38": "2vM3BGnGuT6oosf9g542dTvEnxD5CmpvhmtosmdsnViHa7NHNvBcW6RKMcSFFKwBqek4gsNyMyiuX1s7yx6mmKMt",
  "key39": "4CUKh4puKN5VQA47H3ERpaFu5gNmFZFw8wjcun96YQQXvjxpcMaD2KxPZEQug7ScggbExhAkuufrZTUoWeAutm1Z",
  "key40": "3o9EzWCbKzcDpVzdEfoWcRT3xzAVUgkgzn653dNwZxP8EN8DX657gV31QC4fcociNTpEnWy9US56g4qUKcu11UkS",
  "key41": "2zyaP7XX1bKwR2diLfwSsEQs8yTmniCZ9zvY3EEN32CkgQvSJsqMgHsKYtdwiuC2hyCgpvZr7zvFbgDvZW31cmTB",
  "key42": "3TVoVvmi2XUgCoXRySTMjCJ9gh5F7vMLk7WLh2Tt6EBNETNACKGUURiXmgopsQUFzLhsXwbc5wdQcVFdmyhSQ54K",
  "key43": "5BjEnRsmxKnYKWUPnxJ55sdHYc3hK5DQqHEwjf5ueh4RTCjKzT8XGfLBRJGqfDoNFRWo1NFyGGD4Vn7X9unX66wW",
  "key44": "mZYEjb4yryEJszTCUALXGK9gtWfyCJFqH67n9fL3XQ2GH9e5Bq35GLcQiDJuC7u7ebnzGuaz2anUuQwPMpjoM2Z",
  "key45": "3o8jBQvds1f1u72oZf2AhL4g4HwwLCpp6g13YvfTSuyWSQK8F9Ue4fFk66z1XndvcnPs31SNywEM5UYYGsgGX9zT",
  "key46": "Tbohf2tLs8pYrE7FDddC1U4bgTdJQ8ghnfskmNwNUGKm8bBGndEuWazmaqfroFMDj8rTuyRbsNSfRz8bYxi2Sxn",
  "key47": "2rNg2fkNERyKzgVfukYhTcN3PEQhQ4nHGfAKcHTnsviatyS4PsRcVBwA7AzCtMjrqD58ge6jXy8CxUJdEnYdkvK8",
  "key48": "3TjMdrQ54TuwBNuw4P1mst9GchNPEvcM5Z4nJLwKMRSkgBGkUSRfBkGybQhSpNkCfAoL8fb3Px3fBsL7jiuWj8fW",
  "key49": "5AfwLv6Arif7b8mTJ2C3fq5bTofJ7FxCSVxTPjowcyH64S3cepMpCz9mRcFkWZSQGnA7XfyZHD7F3VTGFwadLJwX"
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
