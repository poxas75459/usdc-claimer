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
    "4jPG7dnCTARRQjRmWB95gh9fio1WqVuuTq5RKinSN3KxWDBdtivHWkde3BFtH5uu4h1Tqdu4XP9KZqxPDp6GqAio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mPcHWmTjdWJW3YXxjbrSB9pFsbQr855MCEBcoGDJT8eT7DVkyGTWbwqGHfYEyudFxURocwjHeJzauPSeztJoNTV",
  "key1": "5SD6wyvAJewFWFwQg54GUMZ1osktk8pTVEcUDvTKAyUXggwa3kTiTpg2FXx4RDv2suXsD7DnfQQPYjEvidEpPWg4",
  "key2": "4rYtGi6FxrdqyCdef5kwo7BqXoRfJYfWAumwLsA2ekW8kwEJmxnKDprZYTKzynFkwuQWfuYY6XTVxy7URXSWg2ci",
  "key3": "4DP2KUcA6Rubs5qNnUNT3rDEQYu2fs22muteqTY3NtXAAK2z8xk1ja4WUJ1zyjzECuKd27a4c1QTwdQwy775TayJ",
  "key4": "2fy1AZvA2hghcMkjgu3AorsVE3KkuS65ywti7NzGvNLXUEcx4bNX481p2tQmwG8nYc18V6EY4neoT9rNg79QFQcd",
  "key5": "AHthmm5a51An9Pa4TkPo8eWe69x6fYyVvzBZZMwaC4kPPyFE2ikPPd6AcVuTSzWr16dEjsRRGYi34FaVrkqCjCM",
  "key6": "26QSp44BzWreL3A4Gzia1ZwtUzWb3q6bJGV5kebZK1f1YAZdV9dv7tWPXymviSUP8Ra519ESC2Mg7YfxGGLhdumS",
  "key7": "2jTsVsLz8NnGdmxF8RjUN9KGUmbeoBGSTG3GhkHf7iYmTDuHzuAM9Bsf6wsgnzBVjvYJbZnSF4UrQogGZ4iFcCRU",
  "key8": "3MzXQuNMFLGAUt38dgh6nBC6w3LhfHdesxpjEjX6DBRqqXWYnfxVLGL9n8cYLUtzAAsYNXv8u35LP5SXHxMPddy5",
  "key9": "ZcP2VSpBXDLSumYy3MEVTPKdFpRTNZFKMdfWYphShuVSbMVgipmWqY6iojYEfXgjqADvmxtHcxd6DJth7dmuoof",
  "key10": "4c1FqSzar8ySj88tBCQ9vxZU8Vbr39zxzc6vNQt9FtKmKLD5HTZFQ3waRz4k35p233K6gvQysH8r1YCeVbS99C8q",
  "key11": "2WSBZZoSQZzdMp2b6m4Zj3WBRLNMSueua7C1zJRw8AiQ1YgcvQQy9DNQVVn3x1s8hgiH2tgYzmP7VsTWogWPFFEA",
  "key12": "4kHfvPpaVc7i4LEERXpydXAb9w2eSpeZL41EN42poiwuJ5UtAtCDYpa2PjvVhq9nHK4afXMHTEGBvDVsW7Fd837a",
  "key13": "31AohsC7Aa8qWjjeX78U25Zb9haHbXviqF4qgE3b5b8DWJ1rxGAjJk5TaZFXBtTTp1xEy6Sj8Zb6gns42riPckST",
  "key14": "VGTap6vH74EbxtBrwqUq82daSwM1Ngqtr4mbjpnyLUDrMve86yJudJMRngr44Fg3E4toMuXjfQqdAPVCfaWRCjo",
  "key15": "2tpJrfD2MfvHysTKZDA6kZDb2WnbVZfJPYVBHH7BPD8Y15JP45EeAnhJfpjcDhkAXtPLZEAMPcfrb5sUN7yY9APS",
  "key16": "2KuwS3x83iyjo2PpQ8B2wBY8mufkYijXEsYYPojpXBVEPnSYDizxgeQLx6SKmtnZRKrkw6fcPsnDAEZb5gdL4Sts",
  "key17": "2vu8ABzm9NW1HEUdgQQ9Rn7DCGrvURM7hJKfovaDjmT6mbwDiFHz9wPzPUmEtQTsA78uHLPeD1TAFeFWLTPcHFjP",
  "key18": "4p2Cnnkuagp7mbVPXNn2vL5LkSubrwGqTq1Y85KAeSFykTJDp7E9BkAnCmxPmokvQsjPM7csqaZ3C6bUaZMKrW9w",
  "key19": "eQf3dcsFG7trLDWSow9DDCS1NL2Hges9Z4Hx21Q1QNAkZDuLmkYMh5H9kQTZ6YfNEf7GXLUJuSpdt61swVuirws",
  "key20": "3S2YzcmfCzVKS9urNYjhdRH1eFCG97kKJ6CSpqaTHLASJsMQbXZFkPx7qVNQLCAn87QvnQxYJioPFGa9T67J8XYf",
  "key21": "3wbqEPeoMHKMGtPwpPppZg9PxcfEkARWtuBixjmwm25oD7M39Aed7ZTN6opVprFHPrRSwQemyFzkU4SVrLCgVQzd",
  "key22": "2Cwr7fRTTbjm5jvYTvTD9M3QajzDEAvPEe3SuvU8Ag4RyAogDJstg8ePqfbYHxw9e6fweZyEsSsjUpsyeXdhuxTa",
  "key23": "4owiYB3KGYLkWQBMc9gygimAZu931FYPeqNzGcjSqhqrtucokLNW8aB4C7ohKhVNbtLbu8e7zQMpCXu79y5YgueP",
  "key24": "3rFpXmgsK8qcpyoQYzdCSN8wZetATaXqVTXvbQs7A2STHWcyvSPmfkbt8ffEqJZehGTWCcrdN2LWiW9EbUKMHLfV",
  "key25": "3BTNiFf1tTJPHL4DZyJxdwnfUvgbcXUPPUXeMgif15WgYn5S7rAKgvLtsoyyjKnLjE7ufHHje8UThjns7EHHAteV",
  "key26": "26WEDbPM6GaXNQX2zkx8ePxF4uQ4sFxG3ua2b7nJMybAHQzDprveQoKAu6Va39UPwZjPwQ9uqQqjjC6MChXLwVjh",
  "key27": "2ofcWdcdggF6JBxyWQMcKsNXF19EL5t1DfPEkknVL4xZDELWPU653pDWkRsXbxRwsfrnQzNL5GkYbbhiSHGPPwLL",
  "key28": "124xsPXaxwZUGFAkNs42wPK1FPyaKo2oCu7dDFtWVapHg4zxMacK9f7nk52Hu7nQeGyJL3Wv2xNdChwrFLkQAgps",
  "key29": "5KGQsFUv4JMN5XDC5DENumqu7jcNntyaFDBCUNmggBYWWzN5dzYTZEXawfRGpCQZXu3U9s87MrtukPtnD8En6anM",
  "key30": "46PMiwtVH4fbpoAdmtxcMfVwLKTTDjhVMWYV6R8f94d51KtgWZLBEi57cxpEDSfX5jLf76HEjTAYnE2KZPtt8gsQ",
  "key31": "4BZPJdJenmERKasZVQREvdMHmsg66RrGwghzDQVad4KGtxEwXzAjbKyQqG7vPs1LKBsf3qU1nCUH9yPNhc5X2TiV",
  "key32": "CNaVFX6vr1Q9TB9y9vL4JAhQQqGdzEABEGFtNRFFyv5PWNGb9zMQvx3oFGimqA39G54pmhdReJtBbNTqtZQYr5E",
  "key33": "5iz1uUhxGWbatYDFZixJwQpNzE19L3xCMwraAHzQfeu8dYrX9i97SMUXmHjVkkz2jrDC44Zxjvg3FhnjPc75RCFY",
  "key34": "2uYvAPpE2s1XJ65NYGTFjSskjMSS41yyHhKwptR7eUCDFXnWsXfDv7HW22fpRe5zrBsmXgjj89yKCJpuoEKpoy8",
  "key35": "5zDftN1bSCfo5LWv67tcb8mXYKbHJe2jEdbiPZifAq6YC8YHXq2HDxMuZh4HCLfbvj3FKtnPPeVcbGHcskt37EKe",
  "key36": "2ErmzgBqiqhT5WdxH5PnrgjBRNJAsN24Az8DsVbKe3x1zuqSzbQaRu3QhnRqn6NqtdhLtHKkC99UPmrAXgrc5a78",
  "key37": "5NqjMvVYCGiLEPs4HXtD5CGyAMTKcHoAnvvju64yG1c3pCxysdsCfXqwLLhf3W8533DXggkuGhcBhkcRtmphGngH",
  "key38": "2oQg6BG2iSa9p1STzLtpk7qdfx9w7ZqdzFTMDcg3GjTCMTtw98E4grb9wtd21w7jB5V7Du6d4ydDJ3qJ23FPrFER",
  "key39": "2teM7qCSa9ATrWwHHo5VwThgtg4Rx1q9o3uAFdykAd6zixRnc1bW4HevaCRRsNrqcDkab6z1BZbGsqH6CgE6CPut",
  "key40": "2zBBaSoui6p8r4hQ2nagrYrpzgAoYMBU351qX2FLQMqzkhb4UjiYsGvDUAAYCkHaxxr7cnsyDZ8KGtbw9NprpkiM",
  "key41": "5xCGbThuVMzzFJcbiRuSrbRoaiZySeqZKqyGWiwE2x6YrLGWhH4fffPbx4SaxAgDpHjKJKVTu39jDWeWaRbh3HxD",
  "key42": "3szsmXAoM5MV9E63z38RgAHByuW8jcw9FraenWQsy47dbaeTZU2JXbrt52FP1Tj3vaXwkMTuR9hnSqJAJyu8MCTa",
  "key43": "4gPnY9CHJaGxNsgFX5UttYBQwhrGQbN9je4pbfTPTiLovb394BZRFUz724EFVSGucAkB9XEnNSmwSKWe5EGLHsX4",
  "key44": "1k5ZtLs3MVVXA5DEuFdRefWCWUG5kp6wJRr1b1ACABprSehysvGt1g2WwcorPvcrVFfww7hnJ3uHMJTGceT5hq9",
  "key45": "3fp94LVqSQ7GHERCXsGbeV8M8HWEF92os5h7AyGdmtxY4g16uutwJYzhTepL9QhZaMDA2vEPMRAsPrymQEsu7aSo",
  "key46": "c24s4dXwEKHypP8s8FnpNLscqwz1e69qau3uyxSA98h7QpkPDbsRb5kxoM1JxtErqbGfSN9ybuCSiZdUQPXGncQ",
  "key47": "5863LMUarX8PSfCnM9f85ctYpPdyTVKMjZnY2LAhoMHaUQuKkW3NK4AP5vdfzwTRUvwYcepvTMrWfv6Lb1AiNzRx"
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
