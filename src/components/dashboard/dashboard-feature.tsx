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
    "2bKa22fjf9pFLtoGfpychqX1psDz6F3VTYevyqQ1SEfABPy59GwS23MEYkUpRimwXFmMRjVMfurfwWTYZ7MpWvtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hRLQYqHjSsTSCtzPtQqZFFbfzmS8C7Z2n1LNEVqGGiwCekCFJT3yz5QZRPHBYhPaiWZYZV3QP4st2FPKVTgPpBh",
  "key1": "2FBVwyRwMpMePwxw4J48bSvtnLnZ5ZjZshNf4WkH7Hy5HX6LSMQhPC1S3LCZYaXiFX7YPu9FuzJUFdRojWtCR5Tx",
  "key2": "5WDc3huyYHPVykXtfNrFdkNp3CLBND2ei5Qcf54nK6gdVwV5YBNXfJQyLmHVUTvcvbxvXeYczaJiAV3TBT6wgXCD",
  "key3": "2K3iWayuEHwQfjK1A6Q1sUcGKgUPdtN9NqQPcTPSPzjd1WS6RXwr2XvtcVPh2NkMbdgMdGvKmeMynSd7QMhpaVwN",
  "key4": "3bNFzgyJkisUooPrb23A6zEZPpASAU87a45xFF9JmT5hFE9Uhkr4nKq994PHXndV91vXYRRUDqYGrcdSiahx5uS9",
  "key5": "4RMyhbg2NubYm5FXoRRaedM8iuMbvSf2bps2944yLGLeQY87q98tSmMcHbY3h2y33QDk1hQWq2z7U9cQf7cxegBU",
  "key6": "4bHDBdL6T362vrCcQvbhThRegBKP4r1VvaXruKrfRZnC297UJSX2j1WRp15pRfaYnf4eBMd7GBJBiHUUpnBsr5zu",
  "key7": "2gCABY1Zr7H9Ty73yhRtdj1cASjoCxdBZaFAgj3QqEppAaBvJPBei1m8LTbDPoisgrL2bEwD2Y1mEi6mA89Tnx9H",
  "key8": "3hEGaGbjuppBR1PfWU5GAShwSJuCcyfvETC1XAZcXLENfwoYEnAd133mBp1FD71jA2yfZcikQbakGDXChgaGvQ1m",
  "key9": "2WTWcGE1Vi2hVAcyy8ySvYanVaHhU3Y5fk1dTE4pnZ2rLtiWXiLzfGSohoNq3gJQwikPMwY7awCW7BspqnqtocL7",
  "key10": "5NenGPTCpTxrxqWuWDXg68LMZvwoapMoHKrUFb9jxaDa4gaMdb9cRYBkwhFGYJE52Hi3YVFgaD7scufpCkrUCmEW",
  "key11": "mFhUvbHQ7EVz86Y5tUPW1KazrDM9bq5PphNq2DyFXfcY3v8EC2hKPfmkS5G4RdFZX9ES1L6TM5dywR49Q6vFHZs",
  "key12": "23tnswsLEsBCtaSZXjJgF8MUAaieoLWeqdUZtx2Xx2uB4NfQQBn1jtoHkmziZr3SWZTY5VxcqevhyVXztxiVscLE",
  "key13": "4APmLJ858s22AR8wEbTd6YDn7rid4qjFo8XdNHpomT7VgKXgo2aux7S9WMdS7N5B7U7RSw54QebjgKRFZxbuRkJv",
  "key14": "55nAzjrnNwFYbYYUH1e3hDEwwaT9DG3A6SfUoez8bF6GhfD4tvwFR7qLh2FqRxTbMBE3n859mGZwexTDuoArVbVv",
  "key15": "3eiCTQ1tQMwQ4qWPrWEJt1x4D6nFtt8t9GhModByBdJhyJ1n8SqSiFxpGgvzzei95Hudy85Wdx7HivG4uLt6yoR9",
  "key16": "2Bj7DgXhEfDwbhDmiK134RqB6ExQWzzvmiBNp3PWaHtDQ1cJ9HR2ndHASGcbaPmFYDM7rhSmRdhevUwCqwNc7Fi4",
  "key17": "4aL4y2SeTs62P96PRmteccYXWzovu4DMGHvMNGhYj7mAKxqQFUHWL73r4MM3VK27h81tCXQ4YQiMA9fFGtq3QsTN",
  "key18": "5Donyxj7hd7nXU52Ue73xS5UcXsXR7cAYLKM852zXejgPUbfzqhipKXBvWeZ81cECNunoAgZbGEMTrDDj49rYQu9",
  "key19": "3WnmqCBJV7fCNrNGa2QYQD8DxyDqU96xqFpVccgWSYQUbN7YL2YkkFazz5yW47Cc5epJzgU5S9XhE8sCKLpachkJ",
  "key20": "47AjQFQqrc6h5VDJhPKEs5fLsHSmzPbejiLDr6HEFNfMwE795MfE5HeRsHoRaVZEySsuTT39gy1Weri8XAfFyuoq",
  "key21": "4j74kjzSdM8A4uGQs7rn8VngPkzv1eCjDTJMaZXcuGSXSgcNLNuEPWWw8oqwq7nGysWgdQPiCuCNkuooag6bfHgr",
  "key22": "2EVsVAzgYyo9YrBp5ZSHjM2qm6jqcKpX3qGiHeFVjKr5UZmFdALag8hVZQ1BWrcxVqxvvYgBm8QDq2AvjkVmzGDg",
  "key23": "41bqUvqwX7Bu2YMsP28UYcTR5gfeggp7KooYD5qqvTsr9R8KDxNJ29rWEoV4WABYj4gw4xLqbx4era54VFiyR6zr",
  "key24": "5brJc1MWxfKnqD5gTUBgA2sxRgvKuoZWZeHvy9RTZkzSCmDGors1NAdB8Mqwh3vaQii4JcGpkChoffBvYHkerMCx",
  "key25": "5d57in7QEw5NtuLuAAEEHP4d6d4UwaU2yZ6YYb2FxTE5eoq38fXKy7wsEtXe1xkSRWnDDzgh6AJ2Ss9DQU4cseMw",
  "key26": "4vuPK9su3cLYbWVjb6CfTinrG8WHzeXn2X3pBYbo2Y4kMbpkQDP6QwCzzjgqnp7cZ9Dpvua8UyECdyQkLM4AX2W2",
  "key27": "5bBJs7H272SQGcnkh2MzBVV6cvgMm49JV4oYT1tbzkL4mBwhRdKvXUJ1CwydZnKFzbzKqcJaffyRqVdAYfR7xEkj",
  "key28": "4diw4NfSdvxJpQcxiTCRK4A7ykZMwEjNih7pT3wU9Cw3wV5atTTqKGcH2v424R1sv9DeNkEpM2wkx7h5qs7E3pMM",
  "key29": "3mUi6GTkHQQCDwnFHKjb3syUHm4KFfqskiovedaJ4Btpp5hdpFE2QVPGvyxdBjqTXED36veapAxBtrW3C2DVRD9d",
  "key30": "PBSBrfP7nFjxFDjZTCtZXmooEp33XnfzZB9tFcGCV97GUixZQC6Hf2WPBQVAvmgVwgeqgz9jsFJXz5fAQaCLZLQ",
  "key31": "4cZpY2PAEda8NqSu6Vvnt6pbvj7XXkzyp4pf3JeKc2sJqm2jGfAQ5KaDb4a1F1DaJob5HyKJZKgFWdH4isssA44S",
  "key32": "4gu5fXLcpjr98nCEs9qESCD3PpD3e4nV8YHJvnCEEggmfMGgPDPbjQMHUdvywGwry8bBV7MiHUCDp6tAcNryaZcd",
  "key33": "4jTdRRR59Lc3aHKAEFFxh3XXamJBVKysf99Mqq385FYvXZprp9AmmpwFmru3XcVB6rWtG813bFX9WHzB9dwzUK62",
  "key34": "22yqKm3YKMxFUn47c6Kxy5o5sQ51G9wAhEqQgrBX232FWdFuL9yxzRAXNmfEDH6BRa23JwXErkBRYsF5Jkew8zFh",
  "key35": "3HAMjJxWGkZY9kgBUbzFW44tT3MjFUC5zmL1cULsHowhyiCdoB1515xaQjVuxmeEYzReYcZNsvpPv466Dfq1xr2K",
  "key36": "5fK5hdtvV8ZwB1odM91kCiXY14fXxqK3fYX4roPzRthsvPLSVQnQrcEtpzXRW2VQNMouWfWDi9uj4Bm1wkqv7kau",
  "key37": "3Lm8o2sPYbmbxmTWng7KyJ2FWCuKYTtw49kU6TXoCzPvvsmSqJ3dtsvn5NE54zsZEPDtK4KcNx1C8EGvhp9Mc9uB",
  "key38": "4TNfgEPTvsSKAj1DN24VgDjpzfn5biwnUptoSVUd18JShkzu5YtjcYu2ZhHfh1cJeoCAsseTVg6u3Dnt1bJpTpNu",
  "key39": "5PtoKCSks9XvMUmZD6kqGGE5LcwNguzteL5jKMhJaDQtWZSqmsuAduurU518TvQzbuUqyS5mhUbnpXm2BgFXWbGU",
  "key40": "36ULfiK2eCQj9Q8odX4c6G1yTBqd5z357iVzUZ8HnL681sQnnHs54qDtJYcuNUY1t21onBaBUDhgNWenveerR2qd",
  "key41": "49dmhSpGgVX5sHY4HWaFezc2z4ZfmZZnvJBi2tV1kKvdHWV3iZNGWr8VKTVXranwqpi7YyY498x6sns3MgS9yGYF",
  "key42": "DKgQVe8idoLzaTGtGkx3cunG24B9yKJEdz9tmaxjy9ut4pSpUmH9ji9B51ENttySf1jZoqWvis5pZojibuVTbHr",
  "key43": "bW3WTytv3LU16XeA1DmMgwfybDnw27WHLPUNsTiFgYbiKwFj35amBCpocokuwqdoHZqqwEo5y2Ya1T69moHjmme",
  "key44": "hh7vpc3geidqD7EQ9FzQe869PoTPEFew5x1qMu1znBTBRxWPLCjsSRTC1bSvzCuSC6u4MM2XbbU1vxbdxSaJpBX"
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
