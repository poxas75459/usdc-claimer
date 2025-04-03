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
    "2134eXXqoAMGLQYPmx4qGyhgYF8gjVpgf2VMZx16DmavcRb7i7ED8hG4HqxnGesFG6ysh2zR1t3j8uqhsjYxQrer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sjTBhoqBqgAD22aHTgMRqUy7cArocDtTwuqjdbj3vzgmXVwKGPekgi4dyPn2vyeKyoeT8AUKqGKQ6tAZaqgPhML",
  "key1": "5dLukEKj2LbRon22aBcCvCAbFsvu4zVEh91VwcfS3eoLkePAeWWFxQbroeBRNsPh177rkSmwLQNzSRS3J3RECvUo",
  "key2": "5m5wnriysGFa19mmSRmRFXsbQsJjRT6N56N3ShS7UqbRZBqcgKJYUBTVyDjFV5pTSkw3SfPNHZLPcXoX2wRn8d5j",
  "key3": "SbV3sWT1RHnwf2mHujpjCtShBgp49MRaGqUWUs1Yv8t8WQpRpcdYCMWQUEkUTwi8Wm34rhqaEJNGMHvkM5yt92V",
  "key4": "4P4PEvtkj4VMed8oUkFGSksurSWtp2nX7rwNd3jR648JeADXVx2a8zzUR9aUva8FM7AJmZk6scKwc873Tb762jVh",
  "key5": "52Zae9i3Yp35GmTBpnRwEwp9PuRC7VLSHBrC4ruZMFLHDe8XC63qYcPPXgmM3j8AQvuSgdms5wHWF1cMnKvtaJBw",
  "key6": "3cUtbhMVUpjH7TBpJpS2xcEWJY1yARovLmTYn4GGy3JqDE6E9zMxP5ZBeENMkmd956yDC7uSoqC2n1mUXnCQ9BRh",
  "key7": "4x1zgewAP1GznVZaMfcbQ9qaKdUkwd41emdjeBmaELBhnBNd4K6zVYgQJ3fnh9u1UD3qCAreCFDih5YAEroqUCA4",
  "key8": "QkBWbARNz1hPmXK3epNXHt5xMphyBJZkbgAYTN3acm6KFpL1ue3ewg1YgsjTpD7uNJGZgfYAtD7svaNJQR2i5ra",
  "key9": "3YSpujsNUQrcxG5eqChCLUcCSTQiRkicHUAFnintieGMZbCyf8Ni1xwPFfPvZaWd5ZeSKvbd2cKbfdjneSUaZL3d",
  "key10": "5FeiafFgubZ5gwaAhzcojdNwU5F8j8eNddBaaMMSuyML8UUvVYKwASwp1k96x23NyF9KgQAj345BJeSxU4Wpp6tt",
  "key11": "2GKstWKvit5gw1nyidjjiDdgBzSnTYK5ZWJsoda7j1uZE2AydZ343fdQAMgYDuWA5qvtL6cqm9kKwVX7NNpY9XNB",
  "key12": "WkjgdhyTBccPTRzBC6Xati31juGQPCBGUq8nQNVGv1Pdq6RPd2xHq6ZAZ962JWMAnfYXpHWeBmRNoVCnmwuq8gX",
  "key13": "2gwthAJDUq5bv1X5mKbrFz7quNiZfp5k7faE1ynzx8d2gyWmQFzwdSGgYBjmTUg1MJGukJSLLmTGEVtafQC9ktoM",
  "key14": "4KWbDfEM23F3tkYGv3jgdiuSnwPsPAcokRWVpsJ9zaBP9Hp9m4MfGQmCyZcBTxMuv7TUF4FmeKaGf78GhYMiYHbv",
  "key15": "5c2CqK22hBwD5tXAgToXbwRzAkzb5EDhzuUUGPq64vMM1HkuCU9T7q5jxNjGxJ1WMnmZyWoC6C523BjYp1mHhhQm",
  "key16": "3qaZcBk3g5nody3UBySqxH8P9NX89Kem5ntUTZVASkHHQAddqocdMKgpeCuYSQD22emTmK8ZrNSASt254pNoGeYP",
  "key17": "ZfFYzRmu4KVqVFDFcPnnkqfbvQtokRLMPtpuDxTFZt4gLVZ87TPof5iSbVgt8igMBCXgZRBPg3MqP8doXb8aKsU",
  "key18": "3aFM3q8XhufCe1tM5hjEyeL3bNSq8TakjeFpqpnJnESw5wqKKZA2yJ5MiHW1Z37xzHWEcdW43wEvpbycX5ya5acj",
  "key19": "2NXxEG9P99yUog41giE6XUmJAHxnZiLS27Cy3ENRwpv9P452XtrgT564jdDuK13FBqDhj5MLXB9FMxLgtxGsHvvP",
  "key20": "3nErmbAfog6i7ysJyYhczSC3hwCdsH5x5qLRA7anrx3EfQkVZLw5H9ULNrDvR18Yx72CNJegysHsejh2xMeQ91Lp",
  "key21": "2naTFMY6NhoCzwYCCC6NmLxHoymNtcTnmXkpgqmP3A2TfSE44nVSt8L2kYG81nGGx6eEjkwvfc8HLTWrnRcuWb99",
  "key22": "5xGb9pcbKJnNC5GXNRbgNazCWiFVsf6UAQG9uKMYGZWWtdjQfvbJVotbGnmwdaJUYLL3C9LKYZYyVMnP91GAp3yj",
  "key23": "3mxRcuHoVb1VgWJEKyp7CHGR8oDjyHozm1NDmBDPB3yu2DT4dZhNasgvSNX8PVCGT5dQxKo83WsHZraoavGTCPTN",
  "key24": "4JsGjp3LEyV28CcjFXQu7n4AQp8c86MrWYRGQtGpowQSGDsjTnLQL3YzdXNLaQuCzVY71AAEoNQm19rHqoqTGWbH",
  "key25": "5w1qDBeTRtafs8vjwjXhA4iRkhkq92Xpfut7jv8pjNBmt1sEbmRyhb8hYkGSXrTuufDso54ZW3g3CoW1BqNPpB7q",
  "key26": "5Vf9rZrxhjEgTG4JQJ1co267AZQyn8pxZaok6MKdZac1cE3QgAiQ8KwGEbHEFQSFDQDoYKXCSZUSrVEixVnYBDeD",
  "key27": "5wrDyPcMkEBGbVLXuFCEbV1F2wcGvDsT3RdhoSNVQVFaKjuTarfq86wc8SZien4jJP7M6cDJmHzkhDrJuSxeL4Vi",
  "key28": "5JDaRgfyyWWpGDiEQaQENUfgdawppRHiLXPxkx2E931t8tKohPPq4CATnQ7so1y2He3G6xW7zmzKX3Fa5jmyqgoL",
  "key29": "AsxocXD8QbceFA3xmJGTz6GSZyuAnRQBtJJoTsic2xCWNiinkvztGgSQ8c8VCRr5CeLz6BuacDM6Hi8GpH9xddq",
  "key30": "5GNYzdjskUkKoNe8r67U1yejPv4SdeSZLsubCZmy5eSXdi6Pd941CrkKMvZ8Ca5WXZYXhX8wdvgY3SjtvVXQ7ZX4",
  "key31": "64VfR8F6pQuUYcdq1T6MCXGt2vAMaNEqUV2SwEh79xq6hVtcuyXvD42TBm6DMJUBYrShqGZXT2ktBSm41hF5i2AB",
  "key32": "5544ELWpHerYwJdiBhpTXjtZ6cWEpaJRZkeHsXiTzKZwAiRUnQMKAvNe72EDRZUwCExbiAQMXVYiJ9D2qQMUUqMf",
  "key33": "5WxANUBSgcJExtSpj9yDLkqrcpRh7JGZH2aU823r9mbvJyRRZ7EQUvx9Yv1tCeQ4nj9HJZptontAYufFEepkkAQG",
  "key34": "wedbRUs1figvd3e2Qx3gX2KgpCV4guJ3f22X1UNVcmUAmjxB4ZMbeyPDojpToPQxt37gUpKCbEXqGpjELJ2uL5g",
  "key35": "4vNjVL5jQCggWS62mwgsEpnNH16vYihYTspbXBMuMnL37GdrpfNXeJbXNiS9M3kjw4LRob2bS3iDV7PGDpnghtoN",
  "key36": "3bGf9zxaDJ4iWPW5x8ePg5b19b3U33qyDnV5tcP7MvoocLF6nphZx6dRH7NuwP6scRmFpeKnutVGYrdf81ut1na8",
  "key37": "4T3No3WkU6yo5xPvcUwcRKrcsBsw7kWmhsB9hcQ2WDT7HYg9q89hJKwpoRETaP6Tu8VmhKNjMsvARzHYrJvgwhF5",
  "key38": "X8pM5eYiR1MsjWesSiqm6XLgc74tQxdbmGN8E4Hz7Y2EmUf35gqQYu2T7QTSfZTThDnjM6xmj75PGacFPaHtrXg",
  "key39": "5MUrps43u6oLF3RUAqsR5xd6MuPuYjELkdkVE1YgYPTThPNdr3CP8roki6kbpT4UFJEpa4cJp7JEuHjxdfc2gbtR",
  "key40": "ZGAtviN1dwj2S5DKKZQieXapSQqBaGzvzhKhQpWKPQjAE5xnwxfHBjDsAc4NwerhdmVjGUwe7yhAq2borZgTm3E",
  "key41": "32G2KbFxyfoLjULRyh8nTWHPEcKNXp5sErr1LJ8AGFZKfieLg9NpS8CLwR4CGiGJbj4tENynUnHBsmUd6L1QPi68"
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
