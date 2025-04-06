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
    "4F1Df9YJhSagkP4ZHxoytcYpbE9UTZt3JpUvza8ZuQKgVzcBFnT6Nn6V6rk3TqBaVjrXMKC2AtMgWzVtGwULBcSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cB4mA6rvJGRczDNxnRLgrgVGtpTm6wBaagQKtnjW9w2StH3Qy8Z6ujyxQuG7TjdUstxzv9ZNCfve81bQqcTDoKk",
  "key1": "2Ezj3RikUr3acJut1k95Di3Wadi3p7gJQscarSqq9rWFbMsK36Jqq1NhdNqPmksG1BdC3ToqUk26f8NLbUXyiLHp",
  "key2": "5sa3n3SYdexeL2cLoAcTtJJ3sSmUBsx4kB9NyfUW7wcRAvY5UQpwMeNsTdSkgv13jZy1kFX5oW7pZGUP5fa1aLMo",
  "key3": "3EivDZMVMwQBuQLUd6SiWMZYveiMYJjZGb8X4tiPj8seABVHNNtKUB2Stjby7xdCttsN22vkywAEzBB56P5PfEcQ",
  "key4": "26XUUCcBiE3VBZVe7Xke3wsgi7AqLYT8rvnRmPHmaheJZC4eZ4s5W5q6LtkdUXuRhwCPrHmh93ZMPfZc1mqZcDzX",
  "key5": "4JaPiLoPvcSgMpuQLBW8iDRj7zFinuA7W6dAB7LNVYon8SQ63yLQbKQq9zzrxFk2JkLULBpeePdXHLWXw2tw4GPT",
  "key6": "2C2GxmztkyBX5S7jLuFLGmASJrxMe2V8Xpr6bGexfac3vaWDSNQCpZJi4oQywEf5Lczc5ZUR73auXDUSPYRMDC6X",
  "key7": "4HFtse35N3yvHMrzCMx6Up2Zf74EkCKjGchgyype6ySCG3d3EW53DGcD9HX14TSRyfB76u3kabELskZLHUyxfwtt",
  "key8": "2VBhRuPmpNMSqVC3BAMBG27YSv3s7cE1guqXEe8wqmg7xVkHwac2KvMvpdH32Kqat982nNQwxmRXQXJgjoJmDw2g",
  "key9": "5RxRVxWhPAPcSSHt9BVF8DpGxUbHmyScuR2trRZMbNzQWFdTij74UgYdi6tgU9kPsRQN1r7ERVjC97re4n43DWTM",
  "key10": "cnziLm52qVWsg6qoFnbUq5wyCf73ucoe4EhEXfqN2ctPPvgKz7jZUBexZkZoiLwMkWcNKg5rCxsM6HSnbhYaKg2",
  "key11": "5ebcLq4nyWyoK9YjfH82kgPWei9q7djMbbunu1n3ZRTcEU1FhKuj9hk6gmdYbhrnjvWcNevaXYbYmjbThL5nJX7a",
  "key12": "4zXfGis9PwQvKyLabyLGdKo1Ye64MJSx6uxeqxRazD8jq24Zkg3qjB4zxAHQZybfgGiNyfL1eR1AFdyJyYAJBdLg",
  "key13": "bqjZP81emP7fZPuJSBevT5EMny4hSBKhrVuYA2nghUnc3BmMqanDAb2pb4twyANgzCHYDzCmRLsxRsHsb4qNtSm",
  "key14": "mHEBUtDegHH8fXWxTZj5Qt7zLzvttrMAvXBmVsRGDFMXxzCmneDXZyGNqS7MYTTVADvGV45zwWxLbMjgZSZbR2d",
  "key15": "1YcLoU7uHvhAQuywoQRdtExjVfeJfyy3nhvWAQ4G35Tk9A4msXW8ALU4CBCmgW4Q8Keqx1wyUb41nnxzq7KMhQt",
  "key16": "5tg2SGi41oqxv5UThUfgxQNjaZSEfm7gdZxb5XBpdKqWdaGDJkoZkQzrkBYQPw4dbZqDM4uDZih6e5h6DTkgDe6i",
  "key17": "3s3MvrRo4kt8Za6V9SDNQ6S1qnvWBo8nFVpSftAn6E2XqHhug8q2gs3DXougLxWeDArHVmvYqvRY8pb62Ukh53Ke",
  "key18": "5sYMPnRpANHd4gehTN7baarfCPFAy868uF6WyJins7uFerohXBCqXCUxCzW2cUviRjPJegLMfd1u3XtJ1brZNbEr",
  "key19": "3zJ8qWt1V35EzWLG2VNB1e7c7cMMYixa7wRrjwUYn27kAycWG13sYJqTCa9uerGqHg9qfQyZrXVJK92oRP23Z4bv",
  "key20": "4UiaQuJjThQ3WT9jRpZDB2CWmLYvsKry548RoBEsSEEvzMqJ78m5QEwDeBbksqHFVBAnM84uCfqGPJAcQaPpHwdd",
  "key21": "3GnVEzhRZuPYJnCgKbcsLrC5ERa56TMtk62f6jSvJKAe4xx8oKsaKyb2G1xU9syRooEcyxbkGH8UYGmGUaqLDFjA",
  "key22": "4eKgziodToRUVx1bETkzjVuUUQ3Eidmpm6wHmFRKzhkZfcY5Nh8H7szZ2vvYxSNbj5iXqsywyfKraFYJ2DNFbmz7",
  "key23": "rhAMAWCnodFxbkYAZKfkpa79qk7oSvAvn4zvSohvsqXiZsTHbFx4TTxWarpy772CJqLdBKLX37u2bcaw1fNZLh4",
  "key24": "4YFxrKGeD1bBktEBixJ43z13da5sB4nL7UjKrLFrUSTBCXkkwmHBc9SYFunAgbWCC6EMBcfzv1nADHVcDVVypgV3",
  "key25": "4GzCeyLrNFFFf3nD2WFCGQPjY8J7Ei6fUUGRRuGuWzDwscjZydidyvzdPL8SWinRoN7cfL59vsn5rxrJDVT5auxE",
  "key26": "3bJGkdDdFFCxBuznEB5EkQY14vLvoodWo6CcR6JSmYdzix8pyKkeCCcjZ6y3Hq9r2gMUNjKPB756q67BAEiWTxSV",
  "key27": "ab4LmWRd9W1i4RFXJcgHpTnsA2kx7qQKmUeZLambn2QVNtNC7NihwYVaqbW28eBdu3NQMoYn39FiD8ky2Hiz7d7",
  "key28": "5sSAjjbhLyTdBqrCuBkaaD9yfNX8p4HrVgp2K4iWfuSYoppwocES9NZehRy6ThqrsEwy2B5i9hv52MyXEb92akek",
  "key29": "4PzJgy8zN4xRaVmXHBBk9XFWQb6xxGRwwgUZa4ohSrpk3sbubTDv7FGJahCMspAhAescU3UHUKYw88YzikkSmBWq",
  "key30": "H3sLJhhNXN866k9FccTQ9FEZ8qf1kqtUNKRXgM2Y3g9CREovw9NvWpTBevXBsHK74iwowfPQAbVgV6PG4Q3QPuy",
  "key31": "5hn3pDYWNvaVVtfP9iNbayucVsGHpnWZ6kaaYQeddGTGfoPsUqCeBsue1k3tPe3z1WpNWgpFhyZjMwLmAE4YRX2r",
  "key32": "62QfYu6oFfoAqNbDX8gkdvfaZwztQNHHgCPnuBVzKzD5CaKSzCS1RJeudiVXeE12Erqnhc6iX75mHd6dPZy8uevF",
  "key33": "2aZg465QmNjrAH8t547dW9k2jpX2VJYmrQ8UUZ7RsZx1MRTxKR6UyiXgyTV2guRAV6YCAoUnripXKHbwFeeaABnD",
  "key34": "2HcFfaeydk73NrDaqmDGP99LTnyU2nfdJY5Xav7icM8btdaMJnZYwCEt8U6cUFKXDiRTCxyTJg6BN5m5XbaSpU8T",
  "key35": "5ZAXbctmanas1WQcsBYCQkBtvJF2b6AUaP7muBvhv9xgQtus3jRtecEYBbN6J5hbq5dntJgHTgznzrwiwrLhyvow",
  "key36": "5a6pxYxAxjrJHyRwpnCFAcAogfoU5mzkrjnskn4bWcm6cDFMEwB8VQLTwXC4hVe6hSqz3sRv4gEEu59KBNQry346",
  "key37": "L9WWMet7T9Uz6zXj4N4iTwSJMXiNuhi2QkRMRAsoNL8agAYE7cbpy61PxH1auM2MSeMP6jE7bdkTUFQez8qoK9o",
  "key38": "2T9z7rqMsy3L83EmgiYJt8RB1nWA7vsSq1sWeWHvGj2MqBX9sWrJZAy8iT6jEC1KhhiVbuBs61RM3AuAf3SGJFaF",
  "key39": "5nS6EpuvyVAmn4Vksru74c8b5ZNGLrJHDZ7ppFwqrDbkjRpP4usjcs2rmFnEGE1QHbijN2VMPdM1r6Phs1gU7TjP",
  "key40": "gmHLvJySDcpVP1HnPdo6i9NA9wqQski5ysr7FongEwfckC1iMHoduzyoqDo5AoPdpfJkcbKjYoYzB2sxtTjXa1S",
  "key41": "e1nWDM3gwJ9214cTdJhSd1SuueWxMaAbH2pC6GFBZaidmUsFQBwJY5VzcYwe3ydRayrGcLp8raf6sUYBubwpGrc",
  "key42": "57JUqn2YXBAEnuBSouzY8LVEN7hjh5L66bVdFMrJcPqM3RZnrYLCkLxzMXdcisvYCT6bDBehFwKAzHCxcqbmBxda",
  "key43": "z768qbEZmzCZRoW7T2doLF8Tx7oxCBBQ72dXtUrtjgLJRAwgJQNdnKA56kKTS2FxeotxVhZnUuxeRT2sSfDtYjT",
  "key44": "2cr81x4sddCLLwiFpEHyHcn8TpjwUmqTqbV7sxX7vgjyGdidE8QSjZ46DsreHL6urQRt3NvZQowjbR4HxET5BM8V",
  "key45": "49eynXa8kFXvufYaHHsRfm4kQMF5Jg4nZaaYgxTmuS4Cj4m2PSNXfnTsdcpCh1EFmAqVTxxSQD27VKYEPgxwWNen",
  "key46": "3EjtKrhLC1VpPNpzkzJ1a8gtLRA4bG6z65Wrw5ia7hXzRLzWpgcWDqXBFN2USRttoPj8SCJrw8BiNhKoQ5jz6SBk"
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
