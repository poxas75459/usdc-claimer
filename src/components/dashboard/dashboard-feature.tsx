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
    "54Apt1yor2oib1rnGoSwH6g88t9os5KK9HVzNEdNBfpAfeu6unFRKAd7J8UWD2X8jz6HQDTfyKRNfnDLpnzc1Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UuDQV6JtGm18gsyfuzZ4JjAJkGqiDQCuUDzTPbnr6zQCouUhBa56gBMyfJvet37ZjkWM43riQyP51dzv2wwevqp",
  "key1": "2BYaseX766d8X3jDfcCL4bUcotuRbq953jW9h5JWspcsNUxUvVvXgdeYz99YeqLkrznC9pZPFBMnMazsSUz4Ke5a",
  "key2": "35AK8ps3craRWGXKgZGWRYgcVUQTwZcKPEg158QGA4QuX2f8T9HW9KdZ72ETKR7L8RepD4FDA9BL5sicYVoiSjTM",
  "key3": "EeBWe4VvpThHVAG7AhTEX8N8NDb6AYtzLUJekM5TTQR8t5mMWFBypNoYQ2ek93asxfuupSPNbWHZfZ41WCZrc96",
  "key4": "5GDWPRHAvEH5JJV6uWLFMyhtpN9YUv8ypDjdJguaaxFebGTr4Y4gtM2h5sT4wwPVFJ6r2Nax7BA78QV64C1USFDo",
  "key5": "4f4BEkSkWNkRNsvxjtW1M6SV7PwCH57j2WthhfPUbb5iEdyxR8SuU7J9xLza9aGxLphFF6o2UgzwcZuNeuZCuspL",
  "key6": "5qVypATYFx9woE3k7rfL5bJxTBfortSwCXj19KoyEb8LLWVerdKEspYN8cq8nURCvmUwKEECSMCS23bDiLkwXLBm",
  "key7": "52PUgVKnu5LF6Ea8ZFgJdSfP2dTiyQRYtzjR7ZzV4s2Ht67LJ1KW4fPTCZdHhJV84ENJbVFkQj6HzuW79aHjiZg8",
  "key8": "2w7yJcNwpV4Xp1B4gLqpewAcWcSFKZiYaHbb6kVAkb8HZ64W8MAKNNfcR4MChrELQ53m9hiFZ3116QLKA1HwCxGZ",
  "key9": "5xyotWDVoWkzm77XCnyit1U1PmhuVHBcaCmaoNQifGVynX9KWsgg7wC9NyJNgeUPV3ocSxNXGeu3su9hRbG4jNMA",
  "key10": "4jcupJPvMPMCGXZQcJdrqmskWvrVCA3hqefMgYCrZqASVF4nUPy5eTEnprAfwq7Lz7DaXXGXz4jtAD9pZbUCFTeN",
  "key11": "J4KWrMer6ZNuwoE4pxEVmz1CQ8CGHBrSmCpjb2E67BNtveLBrLWw55hAQQBzkiLzU6WCUNUWQfVPNJupvyKFkbs",
  "key12": "5mCotuFbiZEHGmiozqFDu5eEHtL3WUQCidJwmRQJsqArUuFiDdXHxA2Q6rBypMmiF7iSD8FcfAT6bV8WXvWTbjvM",
  "key13": "2qr7q9TsDsFStJrXtJBoTU7x434cnWuJ85yosvsfJPH1TE2VTc8XUpKHYHyDbQXZRV3ikpbrH8KoiyCzsgLXB3pZ",
  "key14": "4VbGHnKr8v6zr5DArceLXYhm9jx1djzrWX9uwmRtPJ1kcMjfZvaaH3XMLFy63oVCTV2NdzbCHQtm427G3wJy5QY3",
  "key15": "2M2TZtk9XHRRkaQXBqA7MtK59iyfuT46b8n3TJ4FDoj11USMuWWQWTELiwfsTEVrjBrZbRgJGcMYNyP53tntgijj",
  "key16": "42ZZ75qshWbxeCpXwc5DaQTQQC3bGKZymn1c4xqd3SVFU18PBqJzLiG4YHzkubg5uezWHSfaCNBp5U3TSfAqokVL",
  "key17": "3WCP5GaFRivAZAhCxKN5d53872UqwwfJJfzEgM2TwzosqSNHePWEkg13j354jVF5koTM4kHpTmiL3xFwcYRcgkK1",
  "key18": "2YRPgkGBQwM9tHGK3htbAnrksZrcYW8LZxFtyX3jqu5J6hqWRWoHZ6apZoPmzD669zspge5aaENKRhYmuVnwQuCk",
  "key19": "4f5222DBiuSEod9kvAzpenJk1mjUJxGY99HK26HD8VQtcBxz3mLyTbLYx686XC4DLn2DZEQ5QixsdcuKAKaXQERZ",
  "key20": "4Hcmj1zwtgcd82uo2exWxpdcXSY2YiS5ukJF1pvF3uaAcZij3a4uGMT2mMyQcGUdSAfUziD3tr4pTfvkTmTjijsK",
  "key21": "3dhbqLpf7bG6y8fyyBJ7EA9AdHhderMyRV7oS4h4R9DPEBr8umorYRNANxV1eau7qrtQsSL15eTnSmWq1hYvsRd2",
  "key22": "QHGyAi5dHD8SjNoTraaamk5eWBbRH6AAs1cgHJZ8paGaqaRqTA7WXGYjmT3t9bFCggcMse9HXpkGHDi7SBfXLQv",
  "key23": "5VMEdFEPho83KjxdrLfcZ3gFEJfTiwx15PCxp5GwZJLs9ujLWfgcJsD3NX2HgaGorZHbU1PoKQjV4GincQ828MWB",
  "key24": "5yPZ578ZWbYm1ufcpqeL1LwFmNxV1yEBewkgvyG7n8zajmw8TTdTxJFxJn4FrL4Yy5MGu1WTiKXPACbBPJ9wt2ZS",
  "key25": "5nH8gV8XbSBcC6SL9ujUYSMfQLgT7VycqVAVCAd8zp74AXfF58JrqFTK8pujybKzdiW6uMPaoHSNUHHpCs5B7CYB",
  "key26": "4ixatQJ8JvvLNW74FrK8YGtsczWCfCQG4GVsCPxpxvHtDPdUVdXrberBCFBtJHZ1mwZmqBHBAWx4hi4NYnsh2SBq",
  "key27": "211T91TVKddasAFqAPK7S6BJyscXzgFWPgEDrjqrWCL5yS6nEY14fUYidTHhbQVRgvy66uRxhKgCjZT81PddcDJN",
  "key28": "SQ1f3ipkhDo1VRdUwpevSGq6uPqEE74yuhc9azbm81ZjQ6BhDzphWFz518aWiVqJSSPa6oEWEY5X2M8M7ByZQSR",
  "key29": "4fAZxDMRRjT2THmDhRXaNxoPQuAD63u41yNCAsTACShATe88STxMq4QfAewjaF6iag8JaC5Zf7JjoJRG33gbWnje",
  "key30": "5QDnXJcc4H4mzAbnfzgJoJfk6jxS9XY8bzWgTkS22JVMKKD9DsHVYEzS3n5oRa7b38jyjVGR1jAuAxNHkUjvfM2u",
  "key31": "2N8VZopZjos9eicHnshBm2UK9eY8znFo7tWLeMa8CqQMz86v41A1F22ST638tfTbhsN3bSF5QDoeyNgPTdi9d3EZ",
  "key32": "4FF1Rtug1MtsTp4TrZXArHc4BHu93YtDsZGF4HqnRAetfoB8zzyzdDH4SzCS9E7wf7RLWNuFTvgd8ogNnx9t8EgM",
  "key33": "2KCx4T2NhByWHSnrix7fdZro7ZgnLaNXpNfERdjoQWTPYY8q5Qzp79arQM2nFhQk9LkssWBbxftUJefPUCc1wqB3",
  "key34": "56BcMfnGWzpSgz2DkgeijPY9tvGZEFhbnekcTDkZwwrdpXTGoiiWX99bgXdqLUSJFG55KEhPF4QtTVapWahNme5g",
  "key35": "492UpwnsYCM5TGCb66JWotT31Kt4VYBNdpxTgcmhoVWvMp3T5xBWeYrzjXy3r86QvckrVY3cUPD3niBpGSNKfMyg"
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
