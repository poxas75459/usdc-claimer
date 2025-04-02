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
    "34HMuTfduUMu8H8fNExk8x7ezasKrWab3vHscZGTrws2FHH1sMaGhCATSbHH5q4poMrYW375FxmzFajhZjwwsCCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPqzC1k9rLJiDsFxVH5jDNyMwwtTM2zXN6DeWwDqUQHGTw1E2FXc1GFj4Q1BtzGoRAzGjgzaL9khrpHZw7JPj36",
  "key1": "2prJBncC97pkxHrhnCBWKt4wkKonePMQwVmCRhWi9nJMFCbiEzABNRdU52DTr21fq9ZAVWLuPBajodXELv9Xk3Su",
  "key2": "2tSSbMVkokgdiEKH1P3kDq1MobTkpmYjdq46ib3G4QJn3owpAunqPgVoLA4BGdpvgNU88xjdF6NiDDzQKkGwcWmv",
  "key3": "peRannNKDZ9UHgLCbpXqwohvKzcC2o9Ziq9o9sBNvfSPFPPfLFPF1gxVyxSA4Lax7YTsmDPMTn7kr6XS3mKJn4B",
  "key4": "KZ4Z8yAbXZ9Y63vyJc5oLey434yfcXFjjL5XjZsmmHCgdYMuK3zphos4fPUz9oV8vi2fDm83g8NBuzgDfum1YBc",
  "key5": "2MeFeTSDfnzC8KwSw5o8JuDTJbJ1ACsTzyGuFXAahBu2xG4gSeiehajf8h2Ve5Hdsj56DTKptBUWzdWZv4JYF1qE",
  "key6": "44ydDTeFJbRyWqs4H1FrmSGM98nxqvKDLTuVvqy3DvT5tD4oMewkrNZ61aJVWsZwZCKQY8xUXuHNuCcoBeSt1asq",
  "key7": "2oEA5AHQtsWii7TGQhXDFQzLMh63UsmvFboiVsyz2T23i8MRTUrQr3sffaQZwnrMwfrbtWTNThWsiLQsiSawgQFx",
  "key8": "5CwW85Y8Esy91GECgYVJ2Sq3gmxaUSWYE1h3cRAwuwowBjvhfd6TNnEYWKBYnGUdHAwBGZKsSwUpxroDKcH9u5b8",
  "key9": "2WbyKkuP39DCo123x8brcXo9Xn3kgVe8izjFW8BVqgT645WnwF8xtNQZgAQBaBorWQULfLcMEN2zS7KPV6N4Fcvc",
  "key10": "2cNtQTDdaQcjwiFmwysnwCLyngskaKZaiF2iHucdhoZQgXyJcxGfCWGPMeysg6XTVSLrXRjXTjsha5PZtSPs1cQb",
  "key11": "46xyFHPwg9wPQWoaWyRfZnnDHSxFYsvhY7TVQCeMsL3T22WEHM7gkmYf4yVyKs35gXBJshjqFLSosVkDnc96Bwt9",
  "key12": "4QmirRJmqXX7r1y3wwXjYL4dvuPH3oQEdhDbYJ3uAyfwCGmiyhkEKvkRdYXoqTkddnC3AUzDbzm9QkDYD6HCKghM",
  "key13": "1PtZpHWEUzs4CY4nS4BJDyrvcWNuVc5feSpHQGhSX5so7x6YuWK5Gje6yqnYDSPgXNGWDZPcnrWwvvdzN9MaS6X",
  "key14": "2x9NuEcV5T5YhmmhuV89vNBwxd1t7GjcNwJAYkL5RQBakr6aJmiwH7hxr1jTtSnW2QPHXAf5xfjEp8MfySZvtVtr",
  "key15": "2YV9hieuWaQSYCy76wnuGThJNhhkrR2Xriho3AiFxcaYReVdYWQw18E95YXveQQZNQJ8jcVhvCdpL7yhfy5AxAXQ",
  "key16": "ZBdnYhnzzFVBgWFZaK7pcHCFn4Eiv6UudRUsgrjjd3XxFL65VHqkCRcp3huM8MisHGeNgFKQm1BxRfwQBcGQFek",
  "key17": "5DcgFix1miE58Dvw5F4oKyAqLtKxYRdmby2GG3mRHD4RcV5r2nwAH6BswjrtDnNuAC4rutbY2f5cKbkk26CdCeXx",
  "key18": "3q1XEqty5MrmYTrEtwQuFA3LEFyjqaHgTSNWkw1zzd1kRHuhg4d9dgGNDz2FcBeVce8WaBDZ8NtfYRzR8xprQYuc",
  "key19": "4MVKLQZEPdqerk58CSasLvbL2q6YpCU99x67tCzB3vamtfmHE7EaQen3jA71Xhmf8gV8iNZCQp1nTqLCi9CUxHL8",
  "key20": "vgUHg4oEqPtTzkDvTrJsLtE8SBKwJThdVGKL8rM35UrrvNfhoQGaJfWt3Wtu9D8yPDwbtZTz3AVPmXzTfCFU9eH",
  "key21": "31BeVz2FSyWUMNCg4aZYKniWJt7g1isPCr8iKdpM2QT3TvNs4CYQaCkGqbcR1tYH9w5kstDfqhSLyjGDqCeJ3NLy",
  "key22": "2wTCpn7Zwge7ZKs9sUypdrbEMhnCBQqZVugw7FFpyMniKSPyrPEGvyHibZ25hUNP4j4sAg1qq2uwBeTajZadsMtV",
  "key23": "3qjz5MTZZurZevzeHvpypuXXaorRqhxpdFyiL6puMiLYM1uozzN5xmwdZxHV5y1HCUfA3XWztDGgQMZL2FmLPrae",
  "key24": "5ZDLzGMrBDbtX6dJYh2VStQiLLeQASkGdsmKy7Pw2UQQ5XWwHSwwDR3S7kRuE9Q5QHEzGjKCtxYfwT7HkZbKU2H2",
  "key25": "4CRNjS9jvtu4BksacEhqZZydb9Y7woiC5mmvj3H9AAdpaURUtLf9mtk7o9Vd89RVNfNBL8wrQEyYwA4og56imVvf",
  "key26": "5aPiZHqZpdbh7oDVsHjMux2RLBdFCKzH2KdrNuynNUnkC5YaL9rL49GmdhAWoWjHR2YFHFogf2Acg3MwSfnaTtyu",
  "key27": "5vue2FAPerAJLcXTXa4k2KSo8VX5Eb1tS5MnhPkZ33Wmmm2GuW5rTze9GQ4HAVBdaBHY4szEZfmGEzV746SwVLvJ",
  "key28": "5cex2BR9XSUxGELmXpyKiqY4JscE6L2BaxjgqDrbByrcSHnvEPY47w6gLGe3WhbS86uYGaLLZpjouM9cgzYBqTzw",
  "key29": "2pBuhxLF5dLs9i485ecAa71JfMDSrS7AzBnKKE6XjiQqtfpwAYWrfTLacqJcSSz4ZR4ukx167czfngxACzHhmgXh",
  "key30": "B4VV1FsH3viXw2dvhRAfKdDkVkDwnHL7Lxhcp5zQkKeatdBQHjX3EY5CEeDFdvfkcamesq916QFfBtDVfuijDkJ",
  "key31": "2ahgJ8X1fUBSxpGvN6ffZFRSh5MfKbWfy74DyjTDrv7QdaK5moePqKb9NLeUAVga9zAme2uN3fTws9kJnCjP7NEB",
  "key32": "39LQzdixAMusa4u9G2QuNaMTgaQiFbL6aiguBB2pcxSa7yRvGPP1Y3ZPMmjMT1ZUMZMLPNDtFasjP49BcNAdRjDw",
  "key33": "41FhxzyLvhWXBXpNSJBmmg1xf5gbGzrK5HnJys5i8vhN38cKPN2L748dgEALNRBYUEricxwLH7taYX1s8Bro78Wb",
  "key34": "45gyh16NNUxkDoyAUDeNZ9QEwzQyv7ipq5hJAn1fndJGrVDFJ9cbDDc8US1RAVWbUDS1fA78GnfPpj3mKB7gfiGa",
  "key35": "3gSoNJBxW8vEXfHv5LFinPpfPNWvwrgCjTUhnW3FN15va6yxw3WArqcCL5FRPbNj2nder2KdeuNpwiwBqaMvX3e6",
  "key36": "4P5D1eqy9YAnr8o6db21nHadoDMn6qJZdUw8V6SvJ7BBYchExbUoiyrEK3WSCC9vuey7NymzTr2dVC6PiMkXbACE",
  "key37": "61bbqXqSBtVkAhyYnMy76wPm4cQqDuWFVLuN7YCAgb7VLJBChjM4fyF9Fm83iNMYpCkQzD1iBXqfL5vsDa22FRKr",
  "key38": "5KVRNEpTxpPPqP6MCesHHqrUNqeiezWchxfkUYSZkXDco24mD6HcsmkYaeLYHhX45dSLenisZJABGbW8XFgQHCku",
  "key39": "5XcFAGeEHG3kRHUJy1nk2TxkNLXmSzQeNuRZeQQ6bMbFMxtWKCq4WRyWmzQbpnRiuS8QaZGLnexGtLEyPeboBEjg",
  "key40": "vRJcgDrj5RKiWz3k7RMuQ3oCHvD1kNG4zDftyFHNeH44mhGGo11kwvhbCPtoWzT7R1zVJbmX9JsrzJrdWFBqHKD",
  "key41": "2Cb7KyBbYEZ1bbnibNfMjzcLuhAeA3sFuMVurudMrZZ4W1riMctQr5YM6yyf1iMqSknjQbWW41EJwdU7ggfmUQa9",
  "key42": "22jNrzk5xSJjdDyXX2VBi24HDgPU9wFA41GT5CyAKjeXMLB6MPA2pnreNkD3va9ft3BqPzwJBK44P11Fc45UbuqE",
  "key43": "35xQGwMvmXxFvTER1mQLetuSUTef3YXZfWYKHW3wCQjTEUs6QbvvDtg3iTp7W7qMLZqPTjXzxKKF4Y7d1rFYyNTU",
  "key44": "5SibgV6NGdrfRHuZnbZUN4FmNCeUn7zYpQPkTsmNLkbov6dPYReYTFXTcRdR4CwBbpSU7kMu9MHn3zbfrLuRgzjz",
  "key45": "322oarXuXZibLhArZaSPt7Ni5Z3D5PvV48k1LZMypshqurF6BzgVRHbWGKoxmDwkWsPtEV8RsqkvFjd6axR3asFn"
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
