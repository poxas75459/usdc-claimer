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
    "2sLSLdQQnLQ3REH4NTiYA1s3KgSAz61Cvtrf4jMD85ULNpkKXiNshM1rUvjiZ9uLPAShVEbKTVyDQdSfKQSvRx3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HjZ4L3XpF95wt2rTu1tMkuy4T2pp3m5BmJfUwKuNggp45oyqtDvWUv87jZE7JtzbKpgZmSSVMK1i1JDL516P9me",
  "key1": "2wykNV4A6NKeJx9M1yu5JhpE9C2HrjRa9nEev5Mx9Fxqzb1FhBaFAUi726jnU4sKpE74M3xo6WCzNWACwWfuPioN",
  "key2": "2j7fkvaZD5hdF4NiQcJDh4taCmyRRtBhXF2mD818ttGYfLn5ZGQxBHTFx9Ks7nWmCZo5rxV7kVpajcfXyy9869nC",
  "key3": "5RYciAzz9BqMXKHo4uHBdmUNC1t25ykqZJxGckLd1LHmWcQ9osUm9T8Bj3fBF3z9hPdyenMHEXxHScrBXsRpeYHx",
  "key4": "49uiYduZ7BGAnGRFXrZ4LgrPZ5GFk8gY7WNjiQHLXY4QBxxKKkj1qjdAoZZ4cWLe1yszE94Wf2AeaLfBcuYhgUBd",
  "key5": "5wfgjdmdVFvLEDNtmMyt71Xnqhgpsc3TGhkx5TfJb4FVtFe41f54P9oqhumjyrXET2N47DwMTFBZYGVWQAxbUVFY",
  "key6": "2oDEh35WpgXapVSTg7Za9RRVvwkhzP3G6YGYQ51M5ELzaVMWqu8rgg8phVsXFyd4tbKrVbxCsX3xg9zJkgAy5vsT",
  "key7": "3vLjcxYr85wigUsWCdmaG3E7G9wdWiW5yAeLh9VRs3vjPht4kbkNTPBZhhtSpJJuixUmSco6DCE8YLDgUATEZD6T",
  "key8": "2TkzDaRSPJhuFo1udWrRQWxnsPipMBC2yadHp1CkE1hcypYoFxaDdqpGeYJWXkKwiXALF2JDc5saSzgDrJfE9Svn",
  "key9": "3Mx74nca6uhLnZGXqfUko2U7u3gJVWQxC1J9NniZqzgP8g7nnREdkYq11p2C7wnKidBfbrYQUjB5K9Q7mbhrBwEh",
  "key10": "5vxx7LF3z4Rt1RgmcRCfcvQyn75MmitCkfuFcFidS3b6HwZXDBDexR9B9x1DcjcAPhEeLjEpcVaNCCVYGbpLNCn8",
  "key11": "LWCBEsDbVMsiqNrpU1MhDNrxYGz7XyohVDA2Br55m5J7k3yLiS1wZwnjTSLxZXuVJNLZszZQV7VdXMgZ3f3NBg6",
  "key12": "1cjY5XpYbSQiMDx7d9SA9QZrjgLvTouHnDTqp4YV27513gN4aVot12AmAiUEfiqMrRBme7cK9YvXPFTZnhQUzkG",
  "key13": "5oBQSvTWFV93uSnPf1UUQXrabWhfVf5VEH3nNAm6z1K9A6uFwfV3mNJ8fsNJ2CsiXSzUwHT7KJQ5pHTa1SUEPFR3",
  "key14": "Cc9c3d8DwUzSTYaaQQKE584pXEGoo4J2cp5jP8agyG4JJezamhNdsJDgdKLdvCtXGBpqBxLNvi5Xg8ZavGZ9JPp",
  "key15": "593C6LRjunXtpCkrCf1FqvCndXMuKKxgVRoRGnXqgmGMqQFZ8Ah7eYdZj7pVFKyyfg1M3VWGRDb5QN6fxtSFLSLo",
  "key16": "2EiUW5vu4Ke1ZqYBzn76JwmypuSCpJrq85TsFdu8U1SjMdLS9coQLXWpZ2wHSiQmAFwimwiPZSmV4s54WC2bnz7V",
  "key17": "3X73Y35djMsB7rD4SovKQetgewXPh7bmYxYE2ufwZSyXCto5HUEpWzXu4nMzjWepGHsbdiJRaHzo8xhmK8bboXuk",
  "key18": "3vifmrZvrZBT3LB4XzQ56wohDqZSkex8sBGs93L3VZ1sxbQyW2LuRMADNRadLr43tLAm8UsDQAPbqoPFrhZ7WffS",
  "key19": "4MyK5PNhgZ5DeZX7jQj2G8hx57uz1Q7h8Ne9Wh9xykL1kEEBaqWSECBuGi3sWmJo9VW9F7FPZZXx1NLVpMWT2WVt",
  "key20": "5VMwVbavLbjruUtjwwi49rNtq7j5V3XybpKMbNqNat8nMNEeppz4ut4AorG8D5vabc8SSHd43fjJrwBRDhyXD3Fp",
  "key21": "4m6H4mrNsBBFsD5AscCteuNtbKUNfrNM4coMiDeBMWEV6qaF9BVvnHCB7sLUMvPYdGAAvyenz5khPq2BKkLdy7Tj",
  "key22": "3WwU1AnGQZoPT1xV5mwRE47T31M7bCRhdaJ2U7Jk8BLZSA8VLDosHeLdqHukcYiZHHZ51DHuweyFyzyA2wHY5e9U",
  "key23": "4jv7WvknW31PdadCxhHX9P2jDuNcJM5W1oy2nHzK3dNxmfJbE1TWphZH9ugV1DYm2LbPaRwVkd8TNzSmzmq8JYo7",
  "key24": "5mffTd66N3xD3J2sUYGQUvMu8SPzxFT77scm8GADSzQCh3GHqyDkuPXJSYuLcHW7pcfBRfZFx5mRGns4QkCu3oYp",
  "key25": "2hvVnnxzdwnPkqkesKCHYTEHdTTv61JdAkU5qNB8gNjMJi16yshc7yMTGEbavXFY8UwNAZSa16557Qmbr2am7Djg",
  "key26": "KiVtSndfeej2tb2V78L4eywYWuC83EeFccr5cRdAeuYWN8tLt4QQmPD9THfocZQ36PrmqCNtP8fPBPSfrjJZtgk",
  "key27": "2FRHSDpGNyLYzNbuLo7oP5DJE4V7Epx47uo4ZSLxDbkbU5ufnLxBPrub8F13WW1BkZ3NsJSAqwwx8NQiVqjV4SMt",
  "key28": "2AcDEEeViBqMDFq1uHrVqwGr9ChdpgF32RTgYFnMRMjE2cm8ZpbbBZaZuS1BQzZfD6Po8fkuVuxC1R1D4CpvBobA",
  "key29": "5JU1gqZc4neuPvyfgMR7KhAH9YQAYGYeqaUFCzTSJcSRYnmnoQK8VdraT6wsp1mA6VcoyVgRFgo2TEuLS9VYBeuA",
  "key30": "4FCE1gd1SsPEEcybKYpnMG7YpkKQPySxNG5k5zP7f9mNU7Xvw6gvutda4jycWLEXFRU4kRELq7hbJnUZ4vkDBoJW",
  "key31": "2GshukBxAb2QMiNkzAdAoEN396WQQ6nQJgQDeMpdQNrn7Nyob5XQgMqjCrrUiFFvJ8EznCDz8xGHZr5YSU5BQUWe",
  "key32": "3hiP1SygSgET9WUHPff5H92bqipp8afF7JgPozfNaNBjGkKUHpHk1oPuKrqXSSx2rTkL7qYnxMeWB65PxfWCUCrA",
  "key33": "5ADrSnygoyCHSjr7YpEhPcw16eFAmtvYsWMxWseeWGDsKyTAzaw2jvrzqg59efc4BDTJoPSfLm3781uHc7rEXRkR",
  "key34": "2KUEsYDE4wFDWUhJJ7xR96LqeNRNgiHwfPoRRB3Bg8pSLmBCdpipaRKFrGXLffwQek72QGCTV7UfKfo5kgEafXw3",
  "key35": "MwhMJyPg23R3uJEHhjmu2J1ayfu1aWHmNr4LWvEDi8Y5ezm3aCBZ7ngNkaVwrjp78XC5aqM1KFckvEegnSDmRum",
  "key36": "57yXYopEbouyTcE2mxwenELWWfZuL75krhexnQXvJnQhDGd6FfJ44pPtezSzHn2edLCYSZoY67pjbDspD1qrrn5b",
  "key37": "Rh1t5BTojw7G7sLyur6gn1y8K2tAhi3draJvfTdvWJG4tEmvx3CHpZxQbdaQ1Qdbs4rzUN1Ze2itpLL7Keks74X",
  "key38": "5ieZVNf13jELFmkpqHUDNUSj9MiWzGidMZc4DWY6GrYdMB2ZrMfvDFxR3eA5cCYfdAcFzjrSanGukfYxmAHdseaM",
  "key39": "2ZvADfK5KkxpjDvnGHeeYNywaiXkgc3brMSyotpZheALeQFt8KL3MdbsuoDwZVHU4AJnpYhL9b6WJzMesiRESYFp"
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
