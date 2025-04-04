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
    "4PoVALwTcQiyeZmk3nc6nasAdsbX5gdrnBciJLYT2GnzrWWhTWL6gZQgnk1JHabzxJTbQYiZtkWjrAeWfYm6Wzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cudjookxfppNbcoPeV9TFzmyJXQDD1zLKuP7mEDcHNP12MvDshXDmtCmHK1wWLSkgrws1GNAQcuqKCGskpzPh6z",
  "key1": "4MRhB99gE2NcEdkALKNjPrTCGPNs2rXEQujGpQc8fvsYu1eH6PwbSwN3qfoPYXWxzBFwjGaerv6i4co3ATz2fKTo",
  "key2": "5jkGD42Ai6mKKPg8CuxydPf42Kyzf8X9aov3jHuGujZMms7jjwBSMHR8sconsK5medKvZ8pM9nqayf6h7SXTtL2S",
  "key3": "2AfPHchZMtfyXFftVikG9WBWAVwHsBefWNnZVLfX8sUzKfm9aKTjeaHFsYNCHyvWtfZEUiyMDf9pAK11vuUXe3ep",
  "key4": "3dgtZ1q4LScxkgyAPDCHCa7tcam3BFLdyhVdSXa4zCmhsa2svHzNDjDP3kmgarsxsNKyv3UizAHd7CJcAXxP8eQ1",
  "key5": "z3FFz18XJVSPA69opU4pw5hwoVNT6YPNPVfcf5yB5SxT1GWhEk42N94gsn2gouZtvjnSz8CJMvNQutPxCCqwpCv",
  "key6": "4iqBovrDtnow9rq1iYNi5DLCgQ5HpqXh6GWxASP1gZtMnczh3foUjrCfnHZwtEy7qPMrg9BNzDQ7W7uf2eodAsaA",
  "key7": "4Ly7SQvv7eQrUCi5wDNbLFBckpDgnfBEcuEP4XDzKpJCDG8JDUrTg5C4F5yt2dRDoELRe5Krtjaf5gvphLXjoiyq",
  "key8": "2Wrj51cR7fjPAreTAruGrVEvA6yVa3eUrvvxAY6huEGRCh4osD8BgdJ4FNn983wbrsSDe7VAQesrY9n2uQQ8456j",
  "key9": "4TMs9wyDMv4ZucPDUtPoQaG4kArRyF6c1fAA6wDSvhUJPdMVB7iq4EZRBSMZa3TJ1tg2KfRXygzXZ1uvXhbuFyGj",
  "key10": "4pfq9domJkutF1DYEdv1zaTivhmpDDKwhaEvEsMvCmVpTXuZshfZk1GsUz4u7dvq77oDtY4gVqT4QDGuejJ6yWEp",
  "key11": "2xTXq2WjKQVk6VaEtu9DPHbFf7hufwR4TNfcy3XBZw8xGSq6Xz7FX7Yvj8DT9qb1dmVm2WBccq74nmdwUvxXDMqW",
  "key12": "3D8mnKAZqxe7VHdH7f8YtQCJvyEdzhccXHVvvHw2vEnH9s9Ff5ZJcpbaHkA5a2s3GkkBgFLwfw7EF2UiLTgtboXi",
  "key13": "3ipxY5puEFJtTj5tHvsBVDvsGFX8CD1jusaHkXiiZvWJGCZUTzXeuKfb5hTpg12W4DtPQnUAwgmzPZBKHda8eKAK",
  "key14": "hpNrwuYPEwShc5pu4gPtcTGBwzhuEQHV51TuWsGTabTNdP3gCjEuFB9rLcmbaYNF6FArUAnjnWTSPmcUXMhQWZR",
  "key15": "4sYnCUH4TDxzSU3QgvJZeEMZkZyjfgVM1zBHiFZXT9ZSde1pDTiUhZ8veoJeyJZGrnqE7Wksf3TBYnzdUorMoCMv",
  "key16": "3yX2BZ2oDmSP19hik749gn6LuaRao1XsMdjWJw3pKjdmJ5VXNvNcr1mgHZwYreNe6qvJ1woD32FpwrjNCkJJGb1t",
  "key17": "5guwKH7NJyTsSMw6kVf3kTc7b6MC9nqkQ2MKcSS1JKM97JdrQMqDXWRCEEETqMrrLARGAGgsa4yF17CpnrFmq3Z2",
  "key18": "63AJy2BWcuAodgsw6unX4CoZzT4rrYLUcL8aSxUbmyAk2csHjVCsNMXyXNDJiu8WGU5kkq52igYa4swpiDUHWBun",
  "key19": "LojLLRb2MLkWSxB12xccCA187deSCfTtzBYT3ejKR6VsYK1pd3UXcV53Avvj2nApEA2qPLGgmXb2xRiNAdskprk",
  "key20": "nh8vr9u5gNocGXLD4s3gFM5ZmxmHPTJnKwpbvbdtgNCVCM3umUH9JZa4EJUwUrRzSArWEkQdXRr8iyK6nQQK9ok",
  "key21": "38UYMPvWGS3GfgEzwSddDpYDwitjTXwNhRbqpWbFqK7t6WKMXuEiZD4PJ4PU47VLf1mHiKWDnqQrSQ8fw4qDTtxT",
  "key22": "3LPY1Z9KLvWTjUtQVnVcM1F95c8RcHzjpBvrG9kxWgeX9ddV5RYMyvVdkXRSZKrzZ3qWWzQaT9jmcaspPg6SZGwm",
  "key23": "465Je8Mae4kJP8DWdvEVPYpgXm2wDW5FY6AG9WWYXpTBrMWKVejB5HZu191SMqPmra3Yo97oSb7Tk1CveQusLCyW",
  "key24": "gpFqW5dDQftG9dnSD1gFrQVCFvcF9NZ8TLaYUEyxyc34BRNihThJj1AU1CdNv6T6WBHYtphfozVS56cK2W4xPF2",
  "key25": "FEnuYJFkjKzyPnHTWNkL5ECKJQiLamrTHyS3AvoCFiCnJcrHdfsRnVqXGWXAjmffJUfefrZceJ2SRWaunAdKZG8",
  "key26": "2MEKeSGsDy56RVqRf4WoyfeBwPBJE2cZ6DJK9z3hYpRw9xpHPHjKzvnrujx2FVwmGG2kqDM8D9mnjVNngaBJ9ebE",
  "key27": "5PktwXFonNFBfoW8hSN13fnDqK6yzdeBXBhdtwifN48LipHDns4iurPHWgkoufST7GjJvLaotKk29U8zTDcskSuu",
  "key28": "5tZg7rXdB1ENZdmorakTFDrgbQu9H1R3UcDNG2uJL4B2fdX9feu9cQfsSiQwZ88SBpnATeA9xZcKHZQvV8NcAGTH",
  "key29": "4UkveR3XznX7AMo9Bs9vL6CSqo3cxJML7xLYjYRGFErdfXe6cjcFJKznUovKAD5BMxFXiPjZo96BUoNZFniG8VVU",
  "key30": "6iQvip18829Hc3BgWw12pWTez6rPBquXCUdcYpvisWeWnkfYnExKnjdajTmFTGCvCHoDNcQtaD4VepXCHB6rjfz",
  "key31": "4diEhj3Vrn5o9EhXSTveMze3GGCeFtjb9oifjDYS3jeh5bBxKgydj8E3TYgJvNvXT5X8HCGWG5XBgj8n5tTQMkYc",
  "key32": "4tXeyNpxb2JtnJypex8DNuHMqb2ahaf4Y3RxfGh8WC3mrJUNf3ios1h8SfX3F3mkEpSPEcdJFn3f3d3jdrP3mxJp",
  "key33": "2NkojUn7k2zoAYM51tyUiZs6uLcX8nujD9xANhRwWBEaXNRBCGPqCAYYTSBEBi1QyP42f51sKMp6utQsUjrwTr11",
  "key34": "3GQ6ukEZxdSvpKwtQDTAem4Myn1rqx9n2Ed2wCkyKp6HrGEfBfpV3WW1fc6tYWEy4FKVyAjDzPfnEY8mbgKxeDaG",
  "key35": "4TENiYkzc4J6a1wFcFG3BDFhDpAYf6kWjjfnnwJjX8deRqCTa6ZdvD9Msq6BHQNmXzhQXM4qxwsRVqzJBm5fy2ae",
  "key36": "3yYW5FJXFap2J4n1BofRq7NrwXSpo5ceGDrKYx2MLWVYe46dEyD6dsQvyEWwGiVz4ccVG1e7UJy5pnjop5Rpp2V9",
  "key37": "jJJZbtU12jFRzdqP4zXKUygtxbdDcpiQqqd87nanyz3U8koKjVD5YQQaEzihBWkSdjfRHffMuCqgZQALH75StXm",
  "key38": "5Z6zcoLGFNNU19ZT4P1XAV5stiPsFxoz6ySCjEeCyAKLaQc7FpLsnADxraXSRt28sNyNT4wkNACJpLRfEfqw7KrD",
  "key39": "nEfrzQFM7GQAhRqxHU9NHjNKTckeBfSfTEQh8csJWMpNv7zFe78Mo8R6K6KWSzXGwtFYPjWScJaACvGdUJX4Xdg",
  "key40": "4RMNA2jEb95Ys6fzHA9oDBp3Crb4n4q74BEednRT4Bthf3HEUFevu1UvZTgj7xy2S6YNPCS4acqigJbyDZLbgVoH"
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
