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
    "5r5nSfoFVizZ6nvGhPSJebHG8hQHGBZ8EiqYKgjcvo86K996UUvzbtvKQ9ZfP3ST5SL8nXYyBQky7dKCY716gszd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GnZWqhzSw9TUEeKChA9RiQj9DD91aHPdTQWoU9igcgyFx4XCdG7vHDbZ6RxPSXuf1U7yUNBE2qr2pb87Z6uzsnK",
  "key1": "3n9jR6KsQnQzJpMaSgcNq67UWemXeq5sQKqNbxj3ZYFvYWCLbver4rPCo2PaTGdFhhu1RgdsHHnh7XHZDZTH2KkW",
  "key2": "4uPFFj7reFjoHJPDMJ649dGiydghVypW4ssCsXCYxiCGugePVBSmQutpWAw25Qnao7pG1HHbUTaNqCcu1ze4Yyh2",
  "key3": "2f9onbNXz3uSH9kQRHeHrxCVMoYwPBtC7BX3XLv1xtmRb4R69izACPpWRioUra54t9CPTYfDjfiPKuGLegunT6dA",
  "key4": "3cdXVVz2pmuDoA7KUy11GVS8HVG6a4Ly2YjhV9zTAjPdskjSsj2RpsbGToUV4XpxPYSenKDxkkuYP1UVXmTHSo1F",
  "key5": "3sP73X1RytYR11NsbdEBo67vy6CSSNNoGcHEL9vnqQZTteEys5nsjsoNpM2gQyUCUNPTPKENJce63Bn5bPMouTj3",
  "key6": "5dphZ3fjmSbj3WecVeoASk93gkxnT8N6qqXqEYmq5kZCbnT33DiotDkN7R4ayfkY9vzAWe48YuUgiHanrkw9PHrW",
  "key7": "2exYcRrepop2CevHdBPMAoVjg7c8eiEk2zZemZyJMmnBYf2PhTmYriM5zhi73geuVAMePSmDnfyar893BDvrz69U",
  "key8": "63CKs3AHEcT1fTvwW1hvBAw3rNoo1kHbSAnJE41j4yyT49QMR4KzQxds8ZtmcuT3eiA3YPNnSn3zykGcMtdkd9Ew",
  "key9": "49U7U2GanSr1EWL85WzEftyNz7ZjNzxigC2LB9fgaBUAUy1bLQQGMmwdZrKNp2W5Vff12Yz1uaKdd11SC18maKgJ",
  "key10": "5iYZHu5zpg2AAsoW4eSpfBfGJZgTAKSMpswwwQXAvFQBcuDQNnast6fSsW7VtgQ6ghFxsrDXzGTQ5ebaeXbiCwZ",
  "key11": "YbQL9MHuoy2iT74RqzU9yzgnEk4NP5WDwgVM5G2rpV3nC3RNqbiQxKtajXdsf53cmWGiD7rQMgvZnvTpnMcLhYB",
  "key12": "3NXGxoF3429t3sdYr1e2YCYk88LRKNKkBNezTSfschAkY1umbgeE2wAHQHAZ6AmJcytNCMX3eVLdEVYryPhba3QM",
  "key13": "wm1qBKxgaoE4exK6W761SFhHqXXopQHgVKfKATY93xz3bqgedUDemMzjvrRJvfWoiNQsougHcMYgCVfoUZTLRSK",
  "key14": "2RmLXhB3bDjPSabcwaNk1jy83N2eXA1Z352ceo2KMwpz9TLLccKgxPGdhfSirWGhgY22jGmpaDmtUEeCTqG9yraS",
  "key15": "5VdwHamhwhdxTxpsd6U2t5LNQ7mQFmEC4tQveqyzf8yFjmofCMFmbiUC7tg9uFgNuYAVSGiV7RV4xqVdZLJ3f3xY",
  "key16": "etujupBibErMjKnkp2W6eGnhCpSe9EQCkRKHycnW6hYM4wPiAo2k7LDw8BsDLo33uaYPaJRZuXCLwwNmMJVi7a2",
  "key17": "5Wyzvp5k8NAuacQRt2fbpzTipuh8VaSca71bGgaKkGXR5h5rqGVqaAiPtTpJbHodN8AhXNv2JQ2DbSA9Bv11Gheb",
  "key18": "26MAcwAQRKyuiehAzcYqn7n8xoXBA8bVt5cMfMbgvCebLzW7QKd2T2rKTgAAyb51vyXrGFQJwJjE5L8QrThVgmVp",
  "key19": "273ztXabL8rGeQrfkVHoECtaezDjeURPY5Cx6xsVNNz9HnmossCJLDUNRfELaAP6BwjTuQS1oTnQmvVvuHnHHcvC",
  "key20": "3esEGE1AG42QFFt2aCwRUVfx5ZeXGM7VBmi7xXLjGSE5LzUhUSvw1k8RXdkbRhJcu93oKGjT58s9UoJ3EZN8k9fv",
  "key21": "2fWHxASbStxc3FA7WaDiKeGugLV1Yqb5ZETVkzFmZQ34cXmSPBaCg9XH3Pgdi2ozWNPS8uxefr9duTYF9biksGxK",
  "key22": "rnPo1EMor1mTFLfKnFfZg4z4daovLe1gfUU37wnHhA3svv89k7HkMSNSXGHpWdVMYsKrCvMBXo6cHqpCsEv1u1a",
  "key23": "5wn4tnkbSJcjzXysXng2DhyTghLUsVhqmK7h3G3taCK7JWydUU4ExJvwanHKbssiPZH8pGMR4qupVxqjnK94XbrX",
  "key24": "Mo6GRUCTrJCn9eUhcLFFC1uDhJkXz2xJYskhwmzgXmfrZxeUVTNfynhVjVK1qUQ6UpzAF89kkUe5KajStcrrxJr",
  "key25": "31zbXqFU9WE1yU9xPgRok8kVFB26uMfczJ6NNkMmYYfvdk2DY9eLnwkY2RXtLDXhL9yRgd7oiwKBqofXvsJ3RcYf",
  "key26": "4yVwRZjPqAQCHVLUExTM2hH2NoigR9yFSiUyLHJ7EDnTrFqRAV1SpT7kbBHEq1n1Tz2sWyvSX4ccFwZmtUeRthkn",
  "key27": "AE1Pkz4CwJpDn53zQdU2pwGWVqrMnvKhrkp7PdnVHCTpYhcsvVv5jEmUBBD6R3eyV92FwX1RvmD5iSQdKzk6uJs",
  "key28": "56FGLmhv6zdbaSSKyKvNieVe1YkHMjJ5j5epfKnnfRpjUbhG9AevAzE6CNhnE4m1FZKbuqqbzL6LajoQFkamvX8u",
  "key29": "3VkKs9AK9m4ukbU2GHiQ9iS61EoDCeMJ6XGa27bwnRa5AYS69uXuQJ5fKSmUKyzKNXgKipXFMGySj2zmZ5z9Rys4",
  "key30": "4Mo6BLo3n54io7h13tPfqzv1vmKJjWSG5qMwkAPW53AKXhwFrdR9FpfBZaref3XtUd9Fco9VPeTYBrRGA8e5s8ik",
  "key31": "2tDwmHAwQcWEFWRoJN9kiqP5KRLzRFajUAMM4i1VpSEcDW2znwU9oesLdrD134P9KzLBipxrL9mgG1DsgCVdRNMj",
  "key32": "46x24EvmXbd1E1SFyvyKWBCJkw4FS9b3Cps9gGwvi95cPkp8YQWDYGzLfkgLYTi8fJfBQpvRQfraGjiMdXZmQGGH",
  "key33": "54PQDzHC6c61AQahsxEqBcQzZpQFipPQydjewiSkmVDAJ5Z5dncp4969vQyp8LU2viiBwUYAL93sRbXXCdgDrsBE",
  "key34": "5Jo6oynAsNVAjBe5VPv2mcfWweYuuGpPkBDQTrroJRLM7y8tMekqx7TUkNiaDbnNZkfU8nkFHkkCW8qnwzG8Rfkp",
  "key35": "2gBX64w6sJUTj6CCmMaEAphYL7mUypXn1LYojeYTgrGQv87pmtUoEqBqKR5dywYzvEa4ev6NVqykapzv8mbFGyJ8",
  "key36": "46hB6Pbn5xJx74DhvTuzqUv4tssV9jK2eP9PAPmEgAzT8PiwKiqZj5J3j941XzgLz5YqwscAJ1NWrAjV3hKe5N1N",
  "key37": "2mtSKc6oja8RhzQiAD3fYTdCzv4mZcZU5THyAPVJud7SAQ1CpzqsrQuo5MpNWBMGfG1mhgWUwr9YEVDgA7XT4gWX",
  "key38": "4XzaSYjz3fGEYz6LFBq9awTYyrg39pNJacfhDWuEFz29s7BG2H67fdhtjyRhMzsfGxAAmhMeR8AiiLEMPzK4HuFL",
  "key39": "4o3KW8rxV89iQotnzV7TQM1dJiArPKBtrc8cBq9KKxkpsCWabRaJieLJoEz7uGsvcAZzeuHeBNF84PvMRqEhhGgy",
  "key40": "2FqsH8bQp6QSDwRZLqxv18yQShD5YD9tmLbnHuFHyo5V2pShrCdxbyJ9chWMZzPWTwrdMT2bLrtBSZsKMMEMHdBz",
  "key41": "3zgYcbZJzHXx7f9BkEvg9sudk3WWAd6J3FajPKbECd3szaTcWkRMoc44CAfxKwZXtTUrmzhDHbjaLbVqrqvtCFCD"
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
