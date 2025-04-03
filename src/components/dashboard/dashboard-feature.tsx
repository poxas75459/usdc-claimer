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
    "3xRnyNpMeuibQ6DMGE3rAmE4CaT2izxnBSUun7ezZiY161hxLGUPUvVRzyz8gF1tyhMhe1ebuLEfuoifNUP88zdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPed1iPAf5hLw42cAimcwwV6kDDAYWW9DptowKoDYehT1sJwxYWYGpLN9BjEtUpE6fK1dwW4H6KgGepU7kfXRsA",
  "key1": "3n58cst2XGynggMQRbGewioUkaFKMGj4d6puGLF7w1h3V86f7wXueAAhgZV6Tx2oysiKhmW8ywNxJ612euaetU4F",
  "key2": "tsP6cYHYW2WTTw3LgjpAxHhs2o6NQXyGC3gMtEgeen9FnGAxbhKUxysmy5qAUhuWxBg6hBTQNmxv1iHVGUgWob5",
  "key3": "2LgE2n2MDYH6a7zgfZ28WHrzkF3eZkc164HTKUGWB2Fo9xd1A3M4hkQTZmnnWnqmqVVC9Ke5L2v8iZsBaXvw8MTR",
  "key4": "3JMRG4c11cvDi4tg4xoTu9HH64W7WEW4v7fWRPme6pHp5zzystAeWprHnn5NhYzK6qLqm9n2b74Y3UZUjpVygHGi",
  "key5": "3pocxT1afHTxJ6Lf6H6MScuufk9HT6L5wFMJqWwZWprCY9HpViG8p5gQAdssg45Etq4kEzKxLmvXhvKhJiudis9P",
  "key6": "3awpoHi6xsMBvzYJi31TcuAuimRCqBygQpUBi7TWhdjg8tvDtj4BgXXDwWKWu5BmfpJtB8G8ZCysRpwJk8kMJXut",
  "key7": "HfHePd12oxwziMVY9fpKcbbeXc519u4z9HDGHvm8AUeVqppmEv53rrG6THczs2heGZ8Mx83LNPwFdHCbWN71yVe",
  "key8": "5r5dxhmFsocLtLXY1XgbVW7apu4gssdnDtkUJjTULuP8dWZ5YSAMov23gxmkhAoRhjcaEt65XYJKfhvD7BkX2YTW",
  "key9": "2Zv1kXSsnaEJ22XAmJTwsPa5gSCvpNttm6Pm8c48YRfcojsW6T5DjDCBUeccLDAs6Zkx1f8ayGoa6SzQz9tphX4o",
  "key10": "48NTbogbqBgSMYN1QgsJtKFszHwRgRBCeNFuKZfTXnTJtaXjLdvSScmViiLS4VBB1P27987S36Cspi1h33DPmxQP",
  "key11": "e5Cp81iogJP1oazxYjZkvcWrC19D2WK1NoygvSQC8VqEBr17xNFqWTZM4LrN1bKieSAkaa4FJVRpZHiUBYYEBJV",
  "key12": "53BLco44bq7F6XBi9BAzLjcwi6qJyhkCD4Whd3pHvaXpMrCweiPo1P6zLPj9KZ5Uba1c45BN3kW9s8SPGpqkiAbe",
  "key13": "5Gw5bX7Pty8kYTdpxpcs3m1Qri7EVSLMULe8KsSPzGH59b2KwNCHMLBPtz6oXw32jci4dSe92y8p9ekm4LYZntqS",
  "key14": "4rThH8kcdKw8Lq5vYPv9DwjBPuwr6orpVAazzMWmMSUKMXsf6MLuRZgrz7hjeQL2EyybH7YXtLoFAEiVuUL3wYAV",
  "key15": "3u9XY98RcPUKLuvesUdgFd9HKt5bV49qB2zKUtvcWwkSPY4oxKnLSEPccrxhDPpz2TmDTfeNfav2v1LV741Gghxc",
  "key16": "HSHEWH4MvKMED4TeXfbSMVYNqFWpR2Y5SMvrGH49Mqsn6NMq7TjQEZJC4K2iNFPwkcJB9L32r5wzCDrg1bqY7Ud",
  "key17": "3zGbGkVUJ3XraTVdjT3GZhqyBhts98YSApvuRxBFLSZnEHb9BMprZK92cUdfQPDgAFyCRHKEHSZhQjZa1NnQarmj",
  "key18": "49PrH4tiDhg5c1cLtTGP4PYGwYQVffqBCKoU34SLQVvJp6fAvjtTDvitXUoTeWESSiTQCUAsK5EqQ1nM3e8vBsnR",
  "key19": "2vVh2sPM2hejjwQcCEErahMXrEtaxPR9NsWqFEQ2LrKvZGoK5D2n4jxp7cJG6BweCf8oqQ2aTUhohWvrGYW9gSQv",
  "key20": "5kTjS5XvX598NxCYUFceJNp3JyL6Dno7z8bhsagbAKi4vw1UdvEyvCzxTSjpbosV385mjUdTbx2hRmQRkE5c9kzH",
  "key21": "42p1AZNCDPwwBhhtgMkUvWBKSbAubVYUiKnCjWxuDuVkDMBzE1iSTivsN8ZZS7digmybgcvCWk4dw3LwpQUGFKRN",
  "key22": "3xvb74PBsu2k2MQ1xj4rXWNV7mKpbPMrkpC8B5bWNezbTtsc7MwtTuCxwPJRpr3bcmtJ3A9o9QHhpxAAuUvPVMSx",
  "key23": "5BgSKmH8TXQ4KZWhHVZjpYXqUCFg21Zz6org9eJSUY6RiHMgsuavJgwWXzWN2v9R2EzKUAH7YbtA3eLdXpNVHN4y",
  "key24": "65DfL2o7tamJkMBUJx52cMiHc3i1Xw2QWZWe19Bb7DwnTgFyoNgnwc6Wds3R3g4AomHHbAdE5pMd9EVuBZZqVJD9",
  "key25": "vfu1zQBJFUNVE1jNy9fVj6xSGaQnAR4Xjxco3VCujpZ9P9wawhmRRu6mxvtimSeBnEh1L42WsTHxDkzE6qUHVE7",
  "key26": "4GLDp3rf6yBQ6BQzjnXtsUxpJ22TPTWFV2MX7V1RHdFcS8aouK95Wzv6eQ2674tvUuZCk4XRYPDhqJRStxdLe7z1",
  "key27": "5j6EmRmimd8K6EFGUafgHU1Vm775GCRHRmHRCeeKzSpgLjYttf8DAZw4p4WBNtPXSQ4H49WhCCMqa7rehiqJLSRU",
  "key28": "BugZNoiuqvKBCqEyQDb6Qc59oWcpNB75hmA8LjhgsH9iJcwoTYbzEo4EDc9FfxM4h1SqsSbzcDdZthCZCeeattR",
  "key29": "5NbcJKYra6fK41szjujRpK3raX2qTeVcUfYVZDEVDCp4xD1vcVMZLsv398xG6t7oNQMmXPXxgF8acJQdMyeybeNj",
  "key30": "396Kc6DVMLHjq4nuRr4GsstFzAXWec2eDTYgZfz6VwLu9hbyN4rhM14ubAxWVac6m7mKaVRnxX7aZL2qvPC7m7rc",
  "key31": "4cKeA8f37AqCkAVHuRtNQLfUEiYown8GK7iQUi73vJak3D9RoRUzVcLbmCP3cjLCwug1gsxug2W2jN2sVBfLVCkX",
  "key32": "4VgNzw6eeafsHa8FZxBeHZfHoGf9p9SXnoeBGueRT7KXGG1vAYXr9pCasgJo4SXbXX5Gh9QgmfUX9cdSA3MXHgw2",
  "key33": "4nu9VATppJbsRo5Xo6ifG6qYaorxRpXDZMP8uprd8t1wHnpZbCm4eHPFchVKT3tc2hX7EYgg386TMcQxC9XLPbir",
  "key34": "5ki9T9x76aonZ13HFvWT63ftHerTDvT7BWXc6Vh3DLo9B1d1KaWHYdVTw69vT6VEXFv2BvtHqkr4KPUYv6Bepwav",
  "key35": "4G5ueTCn8G1dZsf3FGK8M8fqXohCdh5KBe3C25d7Er7j3bFbYzE6xWdNAn6i5pPFBHGFyEyRR1WBUbU4kPYVuYUk",
  "key36": "4PrdkBDJP7gZ76ubd9cjSk8KoHMiCGpnRTApiHWKy4CdsWaZBYgrmJFT8dfnJwHj9qKWoJ3yzGtgXb492hcbf8za",
  "key37": "4W8LYsjkpayrA1k93DEznUW9nyCPubs4AF1VyrRZLkcewjbAMwmMznNJsQ6iWcS9iUnT6ddP1nRKBTovspo1g228",
  "key38": "2TVNw4HsgUYi858GGKmoPWSbEjiM3UBVjELXEXrgaSTYgXkXtD6wDrR5zvUf9yG2ngeYYm1bh1iEFpaCizutVEAZ",
  "key39": "2S9EBVUHw493pFcmeRtfrBHz51Z5b153YB1wf8Sauey8J8RfcfeGTTuVgH6tUijND8mDKXZf3jpjDvdEvTsEFisW",
  "key40": "4Exh4JEuZHKKwh9ocw5qktwkHZt8QP9k9SnyLXrGzXiUumbq3idJn2xSZSkFKotnc3N6UnuGAMEzCqWySzm3ZmKY",
  "key41": "5pZJDk42765sxWjs9WwNjwJqQwk1bypKLegeHaQzahdEJ7Zax8TT68MTa8L9foq2rgetxiicnfU7RnZ6bx2dvGEP",
  "key42": "2yGX4gRV1z76ZToZgezasVzviVp3aCjwTBT5t7bWNx4qREudyrJ6qRZaUsqKBoDQeh6UUH8KYP9FKLM7Z5APd6pi",
  "key43": "BnVG1SNRs1W91P7L96ioAP4Gaw3WvejQjnAKsyGWAUmmZX4wouEgKCioXQMLoq9Ba9NQEbJYAmZRoVBGGbeUajP",
  "key44": "uiPRHfq9SJgSh9HDc8RHBKhCE219M2Yr8XtudeWbSc6CFwDQTsn3bqpxpwnXXqYMD7QN6E3fUHYDVfth18aSQPQ",
  "key45": "DkPtRNJ41mRXGfDoMDtSsvxp6ErqfndgcWxccZw5VJPkbGFcxTRnjMYdVQhV2BUiLZJXCNmxarz7VQWtBkqs2sH",
  "key46": "2S17ohJxjA1ZydqEtqjQJAT45SKfvt8VPXTfKmyCXjfZoStggRf5s6pVAWhEN5899DQreozV2f7TfNqDkD7UDKXa",
  "key47": "4p5BGXao1CQyXwP1LMSFzEryqm6ckhkHqMiEkXCnNPTbdG2LkwmUSYqpucZ9WNYSRFQrvB1sTR8bXHC8mQH9ENEd"
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
