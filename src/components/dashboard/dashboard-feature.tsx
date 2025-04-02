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
    "3XuGx6yA1tZpT5WzRW8YYihMNTGFvhCfgKUdd1D2CYBgaMoahHe7T3oHwDW1eJD1W8ZFZnJvmi251jaYYX61wmNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7eLpNnwdcFpJsj3yksLUvihpmTeYsMavRof77AmP7YsSLHBy44T6bVhBuTrQa6FoYKNLkiZZmMZ7DYfPgx3rUE",
  "key1": "2zF8RMPY2P6rzkHQdHGpYqnpqrM5U6iosU9bB6S9wqzxMJNveAyywQ1NB1whSKwQdEHm3W4i1RzVsmZhCh6MkjHx",
  "key2": "33UJzPSP4qA7rurZSZENubTtSMStumzAvREk7YPqXUuHFDBt9F7HRiwfuYna1KxZHLTdeMBQxmpekQpdt8ftmtnL",
  "key3": "3u4ti2g94sezxHiPgHRoBQTyPeB8xHZtSdjrZtqoaj4ork7dBj6cvbDkrRUpEwMtt3XpYbnR6tB6zPX3qAzD267C",
  "key4": "3Zi7BNWSNjufA2hanYR2tKwJQKLyHQ52w8F9ZFmUuF71a87yQ5rRBhvqoVoAGqf8k2BVSqo1NocT5AXh7ZmUgbLe",
  "key5": "4baN25fnkkTrS3a5JL8buixLPQwQWLxg42ZYP2asdLqs6BrqxyiRPnXfKThtWneTnXeEnTyWRBos3YcfeGGrBucx",
  "key6": "3oSamUgQkn1qAksbztfHQ75By6cmTZK9Mjy2nuvMebv7HztmsvkS35Q2rkbh7CGcx7z7AM8nJG2SgjEN2ZJ56tcb",
  "key7": "UwU9JG9gFGZMNGBKwxceREb98K4ik5Naq2oSz9LawzT7y3NSgq5DcKEcVXu3tpJiwsTFSrHecpPSgFhBqeYuviz",
  "key8": "4yBrT5wz6DwMLNhu8bTwDhvALdWV7MuEbpiNW2u2TsfqRicLR8RnM49mD7oAbCtpyBbYuqsWorhKafCV95CaSPCW",
  "key9": "3jE5yyZCC3vajYyBVnUHBSSZUiDC119juZV4kp8dG28aEHgrDWPKACTf3BiQaYu4Zfh7U9Tyv9U96P9WrtuZm6E5",
  "key10": "4Xm1TaXpSrpRezbGjuavP946AfT9NddzHDLPWUeac8uhypyQqaAHGv6z45jNse32oC3oVvSei2r6mpR4XX2jdFDB",
  "key11": "46a9HAy2BiNaEmEPJBLAPkZeh68APiiWGk67zPM1DkaEoMn54WXctQxKd1E9UEHa5MANUTP9wK7XpUddDGVNXnZ4",
  "key12": "8ihVpwUPJ9Eft7w6uRzq5Q2iCVodX1HsR5ut2SMvr23MvHN5XJVm1G7Y8WoTFneoTnPFUbv2hFuH8JJ3tBRQWWj",
  "key13": "447frtnWwib6mfqEs2DJDhCZjZ3NqSgNuwyVo2bm8fVb7nko3BZ3xMd34CyHk6oD3LugzkLhDTsz4JSVeqUNiZMo",
  "key14": "4rzVNeTM9EqnUJYe17Y1K22a2LP7hnDxBceqcMLntacfSFDCQAZb6L1UQScE85mDxo1L42jzGKf7YVu2j3Pf89cZ",
  "key15": "247UD7tR34ZBV9SBTHVAL2bGwSGZW6kEVw7hAa2WWKxWyQF1QkZCjsDF1qvR1WZkD7EFyKbG67JVkJqUjdNDdpBT",
  "key16": "33bnrkbGFH81kbHfq32MAvfytMtRvQve4U7H311YDPVdWAYa9VDEMxkHJvoi6NNxVTuHWSyECLFqYQzg1q2ZSpFq",
  "key17": "3k3XrJapK7a5AdDUx3KrDKEKNaG48w2Zgajq72DdGyTLJpwLCwP6p879NJQJeJiVPstkmDqC9dQQhppmyQbqJLRq",
  "key18": "2GBaXpZoL8vMoMTsTWMHcy2ijz1kf7HMAr67NNthS1RWapYy6FoAvhdHXBmgFP9Pmw8XL51SkkmUE9mhesmAcJsN",
  "key19": "3eouxz9mKWM5gSQW2NESLwitVKoFQmBPMN9eoebodrDHYXCL1vCXThodbuBq23ybC8Lc6i3ntUkQegQykvhdhVNL",
  "key20": "mUgNcoqE2X15UGdcrEX9RkVsERf1zkAHezQLL1CpLJh4Etsg8fGM2ao8psx6X3syrcV1z7Z7tCtf6GpTru6Qw4p",
  "key21": "4uYDZzdUpCyzuFyWuZH8fHR52v3tHreDdzB5hW6jX38wK9WMvBZ3SdjBgcH3Fq8vbmHXtXiJcjSbYhCyL1kjxB2u",
  "key22": "MMw76AeWjzk3ADANkHRQ69DuT4DNFrTJeEi5Gqftj1FLcbYwn2KnxLw1TfuusHbtAzbu5zRpaQUJraM58rmXymD",
  "key23": "5rBKVBen3m2nLwvC7U7sLpPrCX58RfKGz6QxJGUC23p4v1MfuaBWusvdCzDkjsmNSYrvra3dNA1kAffUuoDRRuyY",
  "key24": "4jtesvUPAgba8fZJEJKbPj3Fh3TpEiutj1rpZYHeMuvEzCgWZew3eaoxe3tsGmV98Fiew9egSudNZfFWzF4w3Cn2",
  "key25": "32Yq27FTfvrWYe8TNKcmEvDR24Shg5zKvXX1u2cqqJEBjYjgGZn8tfnia4cRQNr7R14k2yg3x4d96XPTwsAysRM7",
  "key26": "4Xfcny15GeV9iKQX9yK4htKtyUjZ7QrFuh2QB4vwaTybnh3rEisJMfTViDroyR78AnANqkvNL7P6tmkQbLiewFFv",
  "key27": "3vxkvDFh3yLytdTK8itgHRHWsmg3XxpZRfnxWjyxn7Jhcd43BmhH4xAexTxmJujZWZh39VaUPeerHvzVqm5HMy5D",
  "key28": "2ppYksD59GnPoBX8bYSZRTAMuNYkCrXPXDb5xHDWPekPUvQVqDUAF8kXRKBCzhYouoXvCNWdZSovhiz37BfFgeFb",
  "key29": "3xD8xuJ6pEgHSJyndD41AM83U2UuUbiprJ7CjJ1ugjrDhMco6YmDevg833z1Pfxsm7ZzrrPd8bTD3D5Pfqr1UmP1",
  "key30": "41EMDL2KvGGVMieuuihepdegAweMDXWkkMYerSveDKSRaTqWgPpcZoRaGff7ArMNEHTWZMkaT8789hfYYztS7id",
  "key31": "5Wu3v3PK5dAbsqDZ1TNF1qQBzWYzy4hEvVfhXJamyPmTTxbEW9AP3jYZZSTJpGZWcthWH95AZs9k9ZfM94PiGFMu",
  "key32": "36AbbVoHWdrwP4xr1DWHAMgKD9VmFaG721b1bqwFigVBthmEUUbbrb4DVzhhP26gvCcz4fUSyzTPQq1BL3zZ4smV",
  "key33": "2hZYTuBVdZj5eyk33Jze8F4Egj4X1z8uGPd4hKJ4x6NPoRKsVCrzfkmMcMtGXsEX15ffq3ZPPwBdyfkqaUmFCy1k",
  "key34": "2PsFwExASgmzorJWsWj9PjziP9yThJopESDL1dULLsm7YJ2bZoBS9bsRTCdn42t1Rj9dfcCPvRUcPX99LvRYGNvK",
  "key35": "3KaxXtW4Ks9j9buwRAgMYk3MVQbpo7XkPWuAQ5QHprmg1KS443hVq7XLDv8hYrkfsyGDLzUUKrf7cASYjeaFgRjD",
  "key36": "5qMGP6Z3NKxdmaWpvazK1SGk2vxqtf2x1jaQwMQJxArSDUp55czw1A8nBnzq3HXqYtyFEvyf6H2dq5EbRkWgDNBr",
  "key37": "3sJJKE5xkBwyBVoj1mEfaecrGpX7aCkaVNcHXnTcafNCxMYs7Un35bBq6Wc6bvBcWoTqNsKpX687oySFigLsRKp7",
  "key38": "4TG9vZQLqvQQ2cFvtD9Xxi4wcbrK3YXvV5kQRiRZpufhSH6vYEgrqkQ3fuHY13pJ5PRqS9PAKn7y5gEQwPzjsrm6",
  "key39": "3FeoT4x1UprHP3ezi4ThDLrjdp4j6dRGy2Qrv3E1VPB1Bvt795qSVwt6WWhbVwGuMkbNijkTsooiX7JPx7rh3xRA",
  "key40": "FFdAoyRmV7QbAQy6HJz6KrKshA5xqJsphzSsrdSh8f9BK6HNLNYwZ2DUh8iYJi3dr21Wb1wGAdH49DdqsDd4R1Z",
  "key41": "2NVtusVREgfp6CYhKmhhA72S1Qb2Cwp7Ww8W2aVFy5X8jJ9LQgHrquQKA6eXbnevfjT2EKRg6K1zSUrat23jQsx2",
  "key42": "54ApatnypUxFQAGvv19s4euZjoXuQSuPdugRPtKRC2MS2YyXsb76YyPXHGSp66ycah6dJS2WWwUhGw9k9kQQ4cfy",
  "key43": "3VmN6MBrjPeN44x8pk3sQEF6KLj9LbeLFNgMfnrGP15UJo7ZZwP6Y58oXb2ko5yBz1ed5AvEWNHLvB13FHysKDw6",
  "key44": "3zH2E9CowyuUpdTjD39B47CoVV4V8T6QauUv8NA7ohWYZgepZGZhyQhf7F4ngv6YPHkx3MQiamE8cnfw5Y8dDzt2",
  "key45": "4WKbyhtTHDNnZrsMSVpPx2FLBBtWiWexy6JJyFV6eSVZuA8D1t8obyAWkevXnfxS2RuRGeUvwGf12aWruP9ZZVHg",
  "key46": "3eoXfu37y566XbUxyN7zLCb42w5h5sSsaBS3rffpaXFwm5JQdz79QuxYG3oNB13Hc78GcgbhQDpZzCNgLXGVvuBH",
  "key47": "ueyJYiNWGyYxpp3C6VayLZvdBrsxEhivrizmML3cZiVuZZazGuBgehxfpwy4ekqGVWXHHDvFub9b7p64FYBvHsQ"
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
