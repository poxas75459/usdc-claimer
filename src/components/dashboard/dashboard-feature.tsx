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
    "3qiSzcJeYLqrN5NwPGkVN9pG5rpds4qC53Ry4pd3UZhQNhrb2a7S6VKr3QzX9yMKFPNsXVz5ExmUxwk1A1tVuhjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f92w6uDcm5rMJCfidFvGuCw8cKoBjsrWXALGEsQ9g1DZNfDziuyzzGCTVrmih5HUwvXgopVcXBDRcPscNNBFcLb",
  "key1": "4DKaEWt3kv3Bgg8PAgLn1wvhR1fXuc8jYSfhVHuZJVDXrLzNix3sVAytFTxXP3Mkyf5tXbJktLes54eBcRYYDbrv",
  "key2": "4sYsxUuUgRZ4aBHJeHqQgcKPQ4B6AvJidM3dHwSYWGJU8CU7yNMnTA89ZyA1qdviA86H7ygTn3RuopGrmCiQs45B",
  "key3": "36RLVYMTskM89uGec87FHDxhPXmAdYSCEmuvif86HUfL4ZNsvaanyaookx5YhtV1ra1ERcR96DFMLTWt9oE4rVb8",
  "key4": "o1sMrYPLPkjYyiUurftquFJ5XZQbTzCSocuNxctsRGqqPHyQxpHFJUDMpNZDnsGCcURcJDwn12TYuxXPbFowMYa",
  "key5": "5zUCXFbGrPP2fDJgaecFE265EgeUv3azSHyRS6g2uLMvzsTcN2g2dJy7A3uUuUGuaYENrwYaENSxsgUugGo8sskn",
  "key6": "5mhzZPwcWcS1tifMD9XuzX53Fh1SBCe9f6XjLohCeV95jjkfsQ4hjBKW95Z1XmXTryo8P6KfJLyBnsCtbx9FxmLm",
  "key7": "2b5NuJwk1RAHpTXZHMNLjq72rYTR8P7mcDA1Jw74iCRRKmHk9wee3jju2x9Yb69qMtghiGSbmrJYTtaub4riGQ9Y",
  "key8": "58DzwMcrbmqtBB6UfjT8h9Q5gTddCykEGMyZUaMhhrYLirRwFjiDC98gH5hx9sqMSj1KYocKZKcxRk5iUiEHVeh7",
  "key9": "4UrDvCN1v9fYzrdnb4yqJa9hi5n7H145ash2FyAWUTRQGSvVCYuHGNt3m1NfxT9BJUTwnTcAhs7yGJ3CsK6Q9QoF",
  "key10": "61XQrxR5jauphjJLj12Bhu8yjWcWUdxuE43EMJPHQyXNufYTaUXAnyvyZUdNXr6hst25bKiXvYFUTdhyJZo3id23",
  "key11": "5KEx3RvnsnevGsPYwUeAqHn9qeG28vPa5fGAy9NVuoTpFa8zg3m4gFMxqjEzfbjDtxsgszAPdTswYfdnbtUhXBQw",
  "key12": "s3iy9dWccBrcR4LzePYavaqvjqYPLNWAvVj2EVPetvrSXmWjow3Nh9hSLmtAwHMq2cuJWdUnYvepjBAgwCHie47",
  "key13": "3SEoKii2JG9qkMgkd9XtN6NwPA8kQhqom1uqzEWhhe269QNJVbq7qv5moB5qPs95pmmdNbYJ9PJmdHVRshXkQ6Vg",
  "key14": "3SHckaHigfKtzbtejmW3y3soprDowbqxTRBgWtTcrfvSYjekaxoLDtWzt6hrKhVCcqa4zwKoxxSd8YUUsws2dd6t",
  "key15": "4r2QtTf6AYKaUCzxGVJ5DmGhbPF79AkEVtc4uLkKtS74pdXBF6R4unvdsvNuorhZ65KEb6oiA3inoCbAZaPHidTG",
  "key16": "4RLAJ3STY6MYSaM94MReQJPsykwfC9B5TD5XkFjS9q3ZmJyv6cGDpJqg1v2LYr1HDamQQASfRoEahC7WTpr3mPMV",
  "key17": "2Cdh2yAJ2hYWjorDep5qpLrdP53HWauZseftX5ELBJg4WdALWoCp1kE47r1sZJ4cn74dVUpFKr8zuL5X8iD53ymz",
  "key18": "2upvZxqHCRfhRQ9FCdviqbxugwcjo9rcN6cTcfbFw7su2DrPd2mZy1ajgcr3f7fdsr2Peix8Rc6BXyvUkGRNegmL",
  "key19": "5Z4CaN41kzYnUDtwrTgWF3zETXraKHaHiJofgWwA7hCKPaFWE6bHk9SweSrVr5v6tnfUjTHrFwShz47cw3dKNqC6",
  "key20": "3u2kQ9PEw4p7TFSqJfA5iD11KwqaosMzgKsArz3g87hKHx3fxM2XU1qGup8hnSN3An7dKNrGzhz7KsyFy5qTRMmA",
  "key21": "3nZ4h9x5JUpHg2Tqy6DoHJoHkACMZ85EQyvzKshnye494Q6m6k6oNgBoKaV9AF6hGaps9oUMBAmY2AtNpY412x5T",
  "key22": "3tt79nqxBM3UTs3yVtVovSvTnarc4oZbBeR79vC3Q1C22KQZyNhxHSj9atrxpN5NL1FzKTAKWQPHrTUYAt2xJwqp",
  "key23": "2wcz2LVQTkQpHURKvW9rdFQDcZgHGyGjA8ogfukqu34NhA4YWQ7AJj5eSHgRSe915jSZnPiLsDzfAyGcZDCik3Zm",
  "key24": "4XT5kQREF1w3xcvns7CiyVeVqfaS8WAPtQeHn9fd59rjXVejXGAxqkp8zum6eUwnKg5Ffqp8jYskAPHPxjc6UT3x",
  "key25": "64KTZidXH6qMFspRxyZGHYom1egxQPA6GJx4rMq8kHjqtq4pUpT6Az1jQquxHCWWMkq2oLSiw9bhjyKNsjndimg2",
  "key26": "5VqxotcDXroDhzUKwrXPT8vehZxkRUTyyK4uWUux6Ddi3adMMY9USTycvyCAeiKDQpQGqxNdp2hYJmFkQ7ApDJus",
  "key27": "43TY7AHpDC8m3x2ZCgaLszuPK8eDgy21Vc28REsvrKi2r8FnkSu6DsrQN4ngRF8mpKSjeiDom6mawmCMrZxEcyJ7",
  "key28": "2mWUH52eBdwiVULXm7KbFmi8EVbWWvkzKnu8Wwuc5xhx5AwTMMwAFRQWSBeFGyJE6FjhSsjHbeQVM7EeR6FATKcN",
  "key29": "2hY5dqLSY1sxczHYv8y1NwG5PnqrGkYsdhkssLZZrqFrb7tR8x7rL5UQArRC7raFu1y6vao6qNxzVi1SjmaLy5JS",
  "key30": "3yggAREod39X1VDkzSGYWdaWokRLCcmo1ZxfCXGhPtYUPfCHv2Vvpk4EpX9S9Sm82A9N1m4QaSTouKhdrhUfvBBn",
  "key31": "4FAaZc7un1sn1j7fvTgH8rrE3SFJZPG5i1kRWkkzFgGSEuSZD7gceuitvSGv2vVceCDpMm773cKhePf7DuVnceyR",
  "key32": "28LhBZ4MHXMsti2fWr3gpZCAmyJqqN6oNkxkgNSa6gj6r8c9hoyFZRenEiiAzong7DBzJmvgdrxTk45EFKMKUrxA",
  "key33": "4UyFgHkhtHK1w4Zjq76mCoeF9dPzrtQprNXPBpSRZqUaoNXtRpv5D5XRfEWdzXrxotwuKoVs66uyivQPpceyNKkB",
  "key34": "eBsjsWiJoMTzyDVkYbVhuogiKougFganFUm6o1UsAYzBkTqmtSBYFt5mFXgUBngibtW11ZgnGngtWaK3njnaZZ1",
  "key35": "MmEihjneYTZwyLac4QXscUrJcQrYurRVEW7EGbAfTsQn8HwFadxSa3uKCWuK2anhk6cgZymRwUeZQfQycR89X76",
  "key36": "23Mm3dXP7s3SWnYPkFSm4zG2myCXWn1UgBaX5KyfqMk3ZQygvQCsabjhM2tbfh9MBWbxcoN91K6VSGe7fJfGFq2w",
  "key37": "2NtGd83PRU9nkUeuJDRfR7wLnJ5PUqfu8ZgRuhDLp349i9maaXEpHJdMTNoQbo9ZXtsrtCo1C2V3mhZNCngXZc7m",
  "key38": "z8gicwyDE9CEz8xxGzZMnRQLYSsayQLhDfdcFj8D6q5BEqxCbFADcYaTS3EfS9Au4D66KrSQF34s9xC9EMoBvmj",
  "key39": "4pEQEqhfeutEdzYCDn69iaVk8DpNnxWbHKSxS1BDkGvJpD53gd9TDQrYSqK1Z23bC67jgCaqrLXNfZDW9qTsPJF",
  "key40": "4toz3LF6LRci53wEQkge1mVMuDd741exyc4jNzdJ2Y4mEXDKi9XzEgvfKUJGtxXp9JMqU8XtUrx63cqnv9ju3Qu1",
  "key41": "3HpZo6vojEGyCJScFU4PuaW7cMi6kF8nyj1zseubzBmCtCrytgbqDvp1fVoVP8zsAJAADfVqjFUQs3ag3Q9pvzFV",
  "key42": "2Uwjt9R1eFsPLFi9u7eEzphWijVmHpiS1X1571BGRKHcsm3QvMvG8KRsQRsBEKADqGZSRmXjradVstmvbupgDJZJ",
  "key43": "wWMq3LqHgFUGzAKeQYqFbNTYEbA19oC28LqMJB93h58sEQEmtxHoJXaP2ify7isrBYPm3RKVUuaKsVRomwhLy7E",
  "key44": "5wtgGBQNq8VDHyR81vzG92Gny1UZRhFFLfNzUWD1EGDDHWz32JP7doL4Q9pZWt7SzMcyQtCL6jZjNR1i1GtzEdDK",
  "key45": "3MYgifMX3pXZTJenF7LURxwmJjLG5jtt49RGdDZ1Jpvh6nxiMJpgFw2bK2qGPtgcNaZNeUAAaSn2X7xXxWKd2sTJ",
  "key46": "4HCey7ALYWCiLvbCzU5JrFnB7NX3yGym317d3np5hkFZLpWFLNyGtpfw2y4H6ZusyJAXUG3HRsy1w8e6aWNCRu5Q",
  "key47": "5BVQJE7dnmEkUBPzFCWg8QH3JxDqBzPj1gfnPXmKLbfab621Vvcp7BTi3QxMcXXhndkDND3Sko5AiefYJhJuGvsY",
  "key48": "2LCFvDE24cp92Zavey273TJuiHsQwqAEe6YvAFuP8jE7uTpzCg9zRYGfHtPZecGff59jkMkD3XL8cTLB9j9xepaD",
  "key49": "RruiMVaf2CxgTcGMh7WqVhtdyJJubowNaamveDfRBEQ1RU8qupX3Ne8SBK26MrVQGpj8wJ84uxuxzZ2JaWWrwYf"
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
