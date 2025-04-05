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
    "57aFDgSwDcHoNNf355FhGr3ZcbaSnUSLq8cEk2GGZ9nkuYT737J1LJSAh4E19rqYVeBjq13fJgKCYheCVA6zD8p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25djbRZn6Y8qGq8TZoRurfEqaNxDMrQSxHQEmX6MhmvTF2gfEfcb1rSryzXLttuQuMNf89kxSRJtbkmJSKC7rpXq",
  "key1": "5ymU9S3QEuRFA2Xh4a2rZxURs6ePmNRP9RNKkzdXvEu3vtfPYjicU5ShFLXpfGqkCEXJHhj2xMTohyVrhjt1BNdP",
  "key2": "3mu4s7MprqC2y95Lz4BXKrPxmEyivCe7tuwuRWiKCVL9vocanrHf6THVsSzvmeNtgdk7qNTYUt5sAQvcdqcnmeKh",
  "key3": "5f4Dtc3QB1hcgnAAFYgChkJPFtBY3koBNT8eL4uN8f7MfiSMHSueudupGEHzpfKpk6Kt7oA26VziLgHHj44gEHiu",
  "key4": "5MvzpsWWZUWr4j4tK9FWa8aFgctKZiU2WRshr3dXXhZJYGFQdoGqfE5Cr831Gm7x1Ccy5TBSzX9BMN3Xd2smf25G",
  "key5": "WgjDX4VVX8R9onsNZhiHemgX7gMznZohwVHs8TXWnowrbBNW8BRTvfgKFgkRFiCTPTzcpERP9ieani3c2B7hsPj",
  "key6": "4SV5RsPGyqhgEynkfFup4rAFRNndnd6nhrweEZBW4Mq7aBVgQ35wRtaHuWbk3iuETR7ttN9QufE6BG8ebwLVbZqY",
  "key7": "3SxHhhvAMaAYkKyRry4yCdrtuXtfXUFGpNDpkqKR561epHkM2Wba6dFCC7ucp71qCR3fuDCwGMf76qM76qL6uzee",
  "key8": "3K824qx13uGxFzNyhdN6QVE6vmjw4kEBqXb4GiDDFUQg46UXdidJZWGZYukstVTR97RrArTYtaYax5GXs9of3ieQ",
  "key9": "4h5ymhv2SLY1LKd8MYiXBTE8Scx5CJKQwMdJe7ioXUyPBM8JR3S91mSyzwzcxWaUhVT18sS7hVuPr3L365GKAHMA",
  "key10": "biVjBkhgRp2WvV379ynuSD4xk39oeU2dvN297NrvMw5d81c8KKUuA6vMFJhkg4UEr54s6BhWTrwwoe9U5NBgJzk",
  "key11": "3XMvWcaKHt5VLiXBwrD1kMvTZrDGBKSiaZm9ezvySQfqpkCiNyMmA1Sg7Re7Pd2Hzgsqs3dHyripZhgKY2BXSYtf",
  "key12": "4t62XCMJj68LCEFpZqd2EB81RJtae6eTjsY3KN5iPTJJEo3i88h9Ph8F2fkU6LxfLqGQYkQBsHmddjzVQ5fvmRGx",
  "key13": "3tsswgQVEnK87kDHwD75QM8mo6xWCCo7bxKnEnsq3tgSoaNAGwdNoUfi4Q6xagpSF3eMxPRRCGJnvs1EB8NAo8yW",
  "key14": "GcU437BVecf3asn5MHr7vAitJWjaMGBR5E5Cu8vmY7BgHYADJgWTJbt234sqC5rNN4t3FXnLPaXUMGS6myuywJL",
  "key15": "4Y6ZmW17ayGy1tiMaZFuDjQ2cE89xJijfevmW3NieGLicnp6URgvYwjJgZyNLtSXACH8HsPszqDoDGM2Mj3hN5MN",
  "key16": "2ZPwJBbVv322kj2F8VEbCMgdJ7zGzx76Q1gBUaR3ACjvixXMCvqCh5zuj4yBWHSGxkMyGowYF7NyB5MMadSDsXqk",
  "key17": "uEkBGGo4RircrWBeJRXooBzUh6rPCFghH8PhDXU1sViq3NR29g1U8jQKjgLEzamby1r83Aaiavvfu2ACgC8xeSL",
  "key18": "4qaMcLrSfweD1tpyrVEbKtWuaYx2xqLwoGUGxqxnVskY47mDvQrnqxCucpSnLRnYfHSQPpGWR4dKxE2gpVZysvFE",
  "key19": "39nBmd8dFqfNPMaLtMSMEyaifWwURRWPDd1iDTpC1bj9Sn7nmmNVoEjA68mLXPPUAfDaG6jBkp8LHYDggSuK5UY6",
  "key20": "2K3CBcJgVfMqQvPFAn2teLRL2ZURgBwKaJCjmi8g5uABohiCdyL3dag8REa7EAxHJpsFrE1viiddeDb4akEffazM",
  "key21": "32QFwWwLovcCBsragycwbmkuS8LLFwQWuYgMwwchLrebX8Ks4sfjS6ThfubQcobpSoQkXfQMxYTopX8yr73V4ign",
  "key22": "3GHzbXxkXiW4ZH14N2cSAQs1oKRVthcC41DRDWeLWGwgDz5KkusqLSd5DTp7fRBdaLwJr93dxQz3qw4q2A5USLua",
  "key23": "3W9DPzgjZjhq18gdtLfJSvg5XrWZic9Gopy881Wk8rfu5L4MQuqNryux69DY99RDzzdzfNpp8E5WazBS1dp33y1E",
  "key24": "2odT7oYGSpjiiHeqGMXugsSUdj6gMBirHQZ7Cfn1XAzDrdf9jB3q3x56HP1CEsJqGZ3CH8aNdPLpvQVEm2KV82TD",
  "key25": "B4yAVmgBwWAXHUY5JZwQonny1vT5zNdLRAFZKtjnjfyzbewLifewBFxZwP4t917FgXeACQmT9A7r9oXsHagUMbg",
  "key26": "PrRwuhL6DhHcPkrkc4nUcvn8mR5JhHVBk3BKwCmAtdQj1URkYmjCEAKkggJwjmRgWLcie7zff1rAugUHSASH8Wv",
  "key27": "2tjHeCQb1WkiVYBiTWWrFEaebuKEyPXuAY3B4PRjy64H9XDFZFghWJ1nSDtqCMAu92DX2Z3bG2huCCuXd8BPbUZ5",
  "key28": "RYoyxWYZnsxfKPyUsxT13S5LZEyUwhPeenA6eqqQvzWRrVZ3HWY6shf5mJPmRC4fq9dJc6R716wgEsxaUZnJikQ",
  "key29": "5PAfJa93KRFRse4pesWFvRmsJJLmHgWof4kC4nrvGnHvrHd919YVYhwkMkShjkncwazXDFzjEQ6eQWNziXPsM1FH",
  "key30": "346EkpYusBPurDQdtUEb3AGx7CnTYB5JmF9Wr9D5Ngoryt2fn7k9LgSmGCnu5yM5wDkGyyaCKTnqfPkD2t5CWXfn",
  "key31": "53A8EwY9nPfQ4JvU2SGDyrd7G245iJyTeYj1iWB3rGr2fEEKxupXVCB42hBABMXzrJNjW473YR8HB4xX4SF7Vrd8",
  "key32": "5LYsprKDzi8AWHX45brcXLoqSYfmgNxFHvmYGx62qASpcVX3Zj6McQ8kBS114Vo5bLrprpUwYtw1QXER2DCv7Der",
  "key33": "5XuApSaue3kXJjSpPX7iaiU4iAq6LWuDQMepKVtpcuP6Urccg4571rMpeKug1LEfCD3xiWYXQvjgBkki59XU8RCd",
  "key34": "yPogyTkKTspTibBuEnGZPzusEGGu2VCMpfHADfW4g3tG98gErytA5pLB7NBAj4Hwk6F2Tyc3SbbMLA9NxnNNWCy",
  "key35": "2zHxgVcS3MWkyq9aySyv1jVqh5WTXB9KfsgG6yaw1QFeVzqBVAwYMMU244yhLhuLWR8RzzykcvsTpPZSeagE4sYW",
  "key36": "64Y53Jz5ELZarsV21BkYzT4gwrVMewhpGEERx5iPcj6u7d2fnJTWduEWBEWR4BqXNnoaPhaGVbSd9TqaPw1tPKdi",
  "key37": "64EDgtoAyhJzN4BmdQ959qwgvCKSTGa4tPhSEsMHhesvYy77NGpNbYaigVcX2gzJiaRBzvgVY3TpdCTXC2TH7cHA",
  "key38": "2MFWjHMxo6Ly13gVrXhoVVqRinJWwGL6LuRg3NSG9CMnFK5GrooGSx5tfRCGpuDWvnGW54rNKVpHWhV6d7meinSb",
  "key39": "SH7inycF9fQpRWZz28Z4rtiDr25LrRZB65q25FzPPEowUFMz8GgqnnuugzFer33MqTYj6AUYWcbB6oADTwKQytR",
  "key40": "3NeAMKwArikdrUKhsJ9UW2F1oQMZxMmAQq4BWvvMgfB5zaRLry7S4x9gVMneWgkvrzeA5iG3TCP8koxWQ4o7U37V",
  "key41": "KZ5XWNkUWpTLGEyH49SMnmvc5Fi1biZTmxyE64c1U6UJACjKx3ez68Cy8KYBeNRaiqckVUojrsd6fn55uMH7xNf",
  "key42": "5HfGX2kWFHePdU8xV3oiUGSmbbwhV9An6CjFkRtGBcisEqgRAq3LH5ZL7toumAyfhWz1XWvD1wokaR42XnvWZij5",
  "key43": "5jH4CUGqS7adUBERGWSLTXsj7H7xDLweLHShFrL6qeTWBEv24z8AY5BLTJgVMxQUw2Nm2UbtfnusoMQLiaXaGTHq",
  "key44": "NaHuivLQQcw3yFBgzCFzDB8MH4nRcX2bnr1YYRU9wdHTaPrxs1wAgjCjHuE5udTHbwf1K1unyFr78VGvTij39r8",
  "key45": "4PDvvwrAkfv7FQxWqQ5SPpxCY8h1LWhUpU8JM5u72UeRcQimZhocFhZ7Hj26eJRNmfuN3MzSgfRb6cReg7AzACpL",
  "key46": "23Vjw9cTqrdDqoEHULTHB5EMEb5zNqTW1KkGfuJeayAm5uKi66AtnJtH9Muo8nk7Re4ue923AP3QpSsfHs16xvKK",
  "key47": "4acfFaTJviN4cwv5J66DEz4bV7JU356W3MhtYn8eLb47ZHRC8JaXjVyfBcZCjoYkh4Lyg8K78Uk6gx9oELckXbMe",
  "key48": "chAqzqHWTmg81qJ8JC1JG5osyEUFtDNicEx8jpvManBboAZNmFcZ6tCSYJhdiZgxK88VG23CdbhH6Xh26nY7B98"
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
