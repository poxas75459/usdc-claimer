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
    "3WViRdYrv7vMq4hg51crTP4R8t9st7wSS5cc1hiCtgmXGjPVi14ijHdu3iTErV3RAmHunn82deZoM5z14RYfoP68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1xgfVKxy2GFdzHYrmo1A1gA9bSuu9U8757XpWG7mRwU4om2dXQAMdoPiwpYFfCxGeT45i2dLEFiFi6ZiykAvbqd",
  "key1": "YukUxAnTZ4ueatxwJc7u312Y7y15WwDwcjiZrp4VX6uFbVH4RMZjSQ5dEN3nHP4rgjA5ZZSgoGfZFYVWDAzWEat",
  "key2": "ypb4VH97sZMY1LFXp6nrzuXowSCQLKmYwsmRvSysqmY67svXzDuYWXsiCSC9pztE7z5nDzY1fkxoesuS3xHr6fJ",
  "key3": "BTzhTnEyZKoeWh5X8JY7qhaqoGhwFUaakyDbNXdXXvk7jwh7cKzNssb6zT3xNp4oAaQpuLmLPnMhQTqiKZkAW5E",
  "key4": "3LA9jaRj9qbmBzun7DVQhq7ywFbqxgq4zsH64rJyfBFHn3X6nNkMu4A48ahGtxxwUUxyVZWEBuRcAP5X3nmshN62",
  "key5": "4GNk449RzJqsNdhg1Jm1EmbwkTrLxPeu9dEMMGKU9EurkMXjpkw8YHXieVgVevDJbFg8m5JdXw1ckXoukfgZKHJf",
  "key6": "5Kb2fH1ZtnKuqjABtswMw3j5TXDuAKHC7goKx98E9EFdTGSHoAiv1f7mhP6V7jNxtVs2JgQ8abroeedNsS5uaFi7",
  "key7": "4JiTMAafwJPf9gWXLtEow17SyHnjPDVjufmVUydMDLFHHeeFgzcJMp2Y8a93KMYMn5JGxQBMrhMHfjyArznjsuEw",
  "key8": "MpZMj8wZkRDimkcB724Thc5ki8dDuowYAP9akukkfxykHHLyfPEsLTLFHhiEK6wMRBwxR8muZ4s2UP4wk75vwPi",
  "key9": "337TFQNpxZpYsv2aepVJTmYNqRFWE7gUmLtdAbXzcM63LcuhskcyfeM7UGMbCASseSqVGSZPWprDarkDprtEVq4a",
  "key10": "4YvncGGdnmvGFkdL1bQAooMQ5thUr2HePrKicSGvSGEjjYcPm3RsbKy2qL4dVdMCj4qbsEfu45oWa2XVwqZp1Y3P",
  "key11": "4Hi8mJgFB33P6L9b7HzDCSY1nFomvmAaCGRpWfGkKc1dHm1o66Wesk6uj38AuTLyZ7weJayCa1jbECnScRE6vptf",
  "key12": "35K56KzPj1fxpATP1BbTvhaCSiDdw7WHu62oFdiLFpiXZ8Ck88yefumErXGFqQcvqZDDiMR8uZ1D7pEKfRCfbJ5t",
  "key13": "25ky3hjgynJNBE8ar8QtzEhP1apj9QTRaQN9a9z7T8QPDHCkXLFnkaVDs7JWK88XMYJAfrz2NBioWHbx66NpNTEa",
  "key14": "56tEFtVj46c1WZrS6nRs7xo7Ca3As1RT3XP6xqUCs2YKbLVSvX3HSQdtjsCbuTJgSdLM25xySH1CoZndVK1JsDke",
  "key15": "37YvpxySGm65wMrXQ7soZBPMHCJJ8jQasj9jGyoLRVC98oHNPTMTvb11AjdKNzgAPWZvhywWBWnnxQMJpabbzzjF",
  "key16": "2WX4xF2qmAvCeuPk4XMcqTJujEmAUsXBWRFVdVy9onS1a3rTDpm4uXXcfe361tizKtxdx4knTfFG7GhWFcTdsYVs",
  "key17": "3Te4KNKgZcS3dADTdmREHHLYe2RyiKqucGTcZi7JA8hPsmxo2pzfapMimR8h5tLBMMJY788cMVLYdSdekXoE7Tth",
  "key18": "2tp817HTaq3wy9cBjBmpaaFbD4Pzwee7ZS5F2JgpPr9fpR29xKJ9b5en1vEaBfoVTW3kQPEngHdE2yrnEUPMSLdu",
  "key19": "2cUkBHAysBB8X6t2Bg7N3s1M7UmBDFRj5KpWPzANnJyXtgWNR6bn5VB53gaySoHpv3Xds2BXTPCQ8Jr8STW3CvM9",
  "key20": "4RJgHi5NouuddEcSCQVopw3VY3LVUemAdhnpNRqAtiyTMYJ17pLgRmwFbkzivWE3JT5ks13Hf8DMeLxpxiQfDUQ8",
  "key21": "48LZf1mnTke1zuLkXnMBbTZnydpgzFuK17NuKH6KEyz3moiqaEfkJeEA6tW6cd9yoMwxEsvt3Drwfp8UXP62tW32",
  "key22": "2FmxiWqRGVUgoCDAsxyxTyzE7nHXKir9fKVwzTNwngMKNr9vcKEhXFGSgeResMgHPoo3kpaQR3XtAXABQfx8rp76",
  "key23": "58ebKUX6T8X2RarbxsYnykzWyWmyAQhcoqtDmzuUDSc2yU6GHH3d5Ghb4BJPhQmkFUtVMKzcGxrfqwxN39iGzUfm",
  "key24": "2sfyrTuWatsThzdFb5FEH9qpRFMZim69qeXdHsQi9VZ9rwsarbfX1kFQdKpXPJGcJJBcLwhwNE6srBgWDahWPs4F",
  "key25": "xYNckPgo4YCm1uv8K4Gt45761ZBqXQXEfMsRKuwJM5DAB54fSYjynfSAkBqstSxmANm7EQRNC4t5Rur6P7WYpSn",
  "key26": "4MHzj37y1XF47dQgUm6VGMcxpgcj2axnwnSuNP8QKPaS8J1XKSbJ8dw5QzwLDtP78FxiH2iH7ct6GHJuVrtVFZRz",
  "key27": "7zXv85HY6yrCofZeou7yKKHYrsdvoAvcLfYfdei4D8ceWKcncs5Er9d1rgz3jasAmp9k1PHSo7Dia3RFwhxAj6f",
  "key28": "KY57EPpLQ9EWJqMeG71JbfnnJuSffp8mcsf9Ef7Sqx2PP9aQ6sekFsFNKL28jUV5dqck2ZRXMnAdYs2jikmaBHc",
  "key29": "2m32SsJyicTquDihnYPwH9ePXqSsj57CmeAUBnGDpWAaF8FWPoUKVPqha3zrehkej3rsaFvYKWhYNx6YSpuMq1gK",
  "key30": "4TzLw4tKgZJaGut5F9MXhueB4SoqagR5V2ns2kekRTNDx3SDnxRkkhgmX2tuGNdM5Bo8JRonCDkQWCBuJLx8s9pP",
  "key31": "5RVnVBdbr6KFzHpQ1SJewTCHRtyrvjFivC8HQzURzFbE9Az2Z7uPmfDafZQeGeawtmGThUMNYFTmsTCUzWC7Y1qC",
  "key32": "4rSjFCRgNXUfRkJB5MpLc8bVgu9Y5DZWqTBPT6hr6KaWonfAPvVT5K1nshYNXJmniaVzX9qRmv257HEjHqNNnmvn",
  "key33": "27X6jWu4HLVFoaADc2wNqPSrSCEZziChKpuqPxWXeBXitqM7bsFZoWPJysjtceSS1BnCdeNbUoVCEs9DmYmCQvST",
  "key34": "2p2az8boLwu7VwecX26NCL3LfMpX9BdHuGwwcnVPpKYq7P65o7rM8sc4h1Z5ZuXKct1So5rnfjYyBnhUHGac1sVo",
  "key35": "5SRViBpKDAdBE1oc1vg4krPbRWBkUfKbXGqi7uGDNpFetpdxFm41YbQ6FTsFa17oWUFxLJgfa9KS5oJBjZjpxde8",
  "key36": "5PtBTEbCqCYPzKXqynu81VBHFvf9mRMoMZjpNpnFyqumY4qCNLyM3FqpS44BUyK6ot7qJZShaL62ZuQPifXKmMHs",
  "key37": "2hd1bBVSvgRKEQh2NGKxcnCt3YuXUByAYxs57bb7DbDujqertQnoAhfK5m7m5kQAHWp9mRcMDZQa6YNPAJ1wyLXC",
  "key38": "5Wm7qGAerRFjWzjoQwnxhLqYWjRys7RuKJgk1GgnxP4garpubuEcv5Audnd7Mza3F7wd7Za5ocME5TX1tgXMFNvB",
  "key39": "rYVvsNZTJfroKQpn7oB6VPu2LmVt1arYiabN9YZuNw7WrbVDfNFKmSPrDBEFeYVAPSSsCPX476KLxhpkVgQ9usn",
  "key40": "4o9u22NmpU3rSLZR5x5g63ffFxTDxfN8GTHWfxX3R1qnD8Y98ZKxNL58zzyh2FZuYABALLbsZXAYPs9yGZ5YHPkq",
  "key41": "3NtpZrirxxYS3fmm8oTDUGNtgVAQhxAkHFkDUTX3u2pjCQtbXhFimUUZtrdfihssqUBmdFh1TTEwXEgyaSQ23GY5"
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
