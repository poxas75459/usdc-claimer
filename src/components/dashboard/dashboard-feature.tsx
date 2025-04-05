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
    "4K5Q8Rr9owztisqbnmqeC4z7jNgRfiF1AvUMMNFak7Twvbs5dwrK6Ut6ErH8ErBUqB8Qi25c9xmVn3RNp7uCrxD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3diYsGasD9d1gGvcf7gJcUqjESqFsM3pbsG8yRMkbhPLHJbQ7gfNaEvMEEfvDe1XjXjmDgGCLQde29WPtW3C6SAz",
  "key1": "4hBDoSgtTjnojt9LkVhdzfsgZh6saXd3mB11Tx66XN94qP11JQ6KMhfYKaC1UkqiQgkxMdVvmGmC7YLP1vZ4MHqF",
  "key2": "2wUNXS1UGvx1BPBEYrdoia3cH1reAgybPq45aDdCq6Z3wb6UNhQ6AaLtkhbVvMm5VGmrvtjE3djuvv1QmogZThdG",
  "key3": "2bLsENUUWqwMnDdkC8pR1164j2F2EJSvdubL34Q3LZCLQhBGDy6FaXkKWKiawa6RzDCZNEem9xFHD45spRjQkBMa",
  "key4": "4HjRWiQaKh9YWR8L9Vcwu6Fdr1MQEWiu2kqU6cgqjnvMkiWEzgtZeQds7Y3C3yMonuVAekzBP216QiK83hAtgX4z",
  "key5": "2urCpH9yeRDTgUEANAwLb9s2SZENxaCv1z2Tgea46UU5bSSeMETAjxoYZmWvjFUNUZsCbiueiVw6oAo9bq72Bmyc",
  "key6": "2inWTEeftNazER33nrkPYoDJzr1tY1NuorNU8sikfQTkWv5K1p9xZtbc5qofYho95xLJLSAbPbmGUbSDoVpxmxoa",
  "key7": "JZHntxdfyq1A3Jtuy7zb5srxWapuA6u86YPvPsiETdBc4SMYGLkUwevreikGiGALuCgA4w9qoT6FR5k2fpVEHre",
  "key8": "vhzAL5HUUUt938tthjZtWuQCTxvz3YVxHQBmab84bKXn4qyQb9A3ozhgZRvQMgB5cy1zj3pf5tJ3c7uPPFC3frU",
  "key9": "DxCKKcp3yWhaBP7dKBMMDVDbAXxdwFizHdxmoy1kv9CW4Yp5EHGbRYxZpDjuc8GtqGnfFmDJvWGxW5MZMwbiiZi",
  "key10": "3aCDmw1YXC3dB5F42T5izyGQvG1Rdpf9toi4zrQYRywKeVv5sr5wDpM26G4GmkEMJkJXPKzzPLbC8ne3E15oeJmA",
  "key11": "54od28tSqdcyBZrFVjvcYkzBSNXsq5VvhDYDW4hPyt3Z7kLX7mFPyE4k1DzcjrvTXmhHifb5iwZoq8yr8F3voHrQ",
  "key12": "3WPhrsYRTekqv5KYmbePXUaqH6QS9SAqHqSdCsHD29DJmWY6m6TizCjXyQGtBtbruk4r2xPmYE1sFnsZNJook7AL",
  "key13": "2cgJnHHrnvjAFWcoKaWem3iaos4zeV94xj97K3VNJNoKpBkPDPkuhetg7pM1ZEuQEV8fE2yy2Kynq3sy818h9YDj",
  "key14": "3fPjuHumAk5kqHtZi4MiJFvrHSz7QLE6KWghZNuHASaTSJ9JVy26opaNGxqEwU6TXEBhDnUM29ohRb36C89SpGxk",
  "key15": "GSAYyDsZa89PrWU4BjsE3t6xMbNZ8ZTG5uWKZPFnhuPM4eUrUry3UhoF6vQgXAw27zvDnugUdnPsxUtBHTakVzz",
  "key16": "3RzBQoDHAgeARL12uw1srrd7zuYczcLzXQAWndX6CZz2s6WheYuejhGX9PEJFvAY5kYtUz8Lw9jDyh4qeCuUiDuZ",
  "key17": "dp1dK8bR1EzhGTSfc1K8sut26bSDMybz7wsGtHBDsu9auEiSTtGmKm6z8GyN4k6hySqEAhj8RFkGsHRDGY5wp6x",
  "key18": "54hMQZ3pGaPLoT1P593gcauuBJdrzVqA5WwqMc6CZappQJBRpacxaPoyJCjUmMoiPBntwJqhLNDCqDNgFbZzfWr2",
  "key19": "4qREqQzoMJJtzF7yUFfK5hyKfwdxpHWHaGEEC6wRjcyZoDCvQxf1J3LKMmQtRNmhw6bZ3xkinxBmQ4R4xwDrqUJx",
  "key20": "3kRqiWdX5iwFzd1KDY8Piaasow1Qg6giUeKmshcnPiU1rEzMhJwMcdKxoeBQf8hDfwzPYjW5rzTa6DiedJm5UWCV",
  "key21": "yS6bJPHKTeiVMCzMD6j25GwkSynMmU2JmNQhWTxzD8dUwHcy6Up6n7kjZTLNMt6maVhLG4Z3r1i6pdnHTKvgAHn",
  "key22": "5BRj3fbhKrC95Cu32Mwb1TtcaTzTzbJQf8VbXjGdGgjH1ijfsLuRDbVjb6MAuVEtjsbNs6SVTD7jWdCHBpaEzUyG",
  "key23": "2YwYsv1tGanjFSDtjEJ8mwLHafGXT2BV54Rju2WxsuPgD9u54UZbRUphsCTXHiLQRcfJxGpKrw8X35p2SeZJV3ws",
  "key24": "3xkFZ3WWFMFvUiSKKhULfd1FRYTtVpcTc9CWUZXdtyNCETmcMXSVVQiwwsq9WPP1FcQiU9UZwgVvoWtgHe4AGicf",
  "key25": "54czQnTVGukCzaB2pNJy3LmYfb1ACBm6wxqDnTTCnBXyzgpVqmhMZJVyQCbcmzJMMjyRDaP456qRX37v9DokoUHY",
  "key26": "5jRDTE2PndEBAfGkxNUqohE4KcknFJWJjDVee5hyNcd7WHvVdfxCwX6MqNHvb8pVzKaGR5CbobNHwoqVAqRJHs8n",
  "key27": "CvxPxEFgyWfp4zMa5uucwARjGunuonFetM6TDL1WYrPeGbpehc1sgM73YyELRnTzLdKAEiC7PSnWVZ4ZA1d929q",
  "key28": "vwKVPym8MKhre1cESRJP8SwHGQMsmfmWrBNHUoiDVPpEwGYL6gSVCtR3E4CKjUUyFZKzzDqXyHs7GoDS3puvEoC",
  "key29": "4QLTvs69EWqDkDTeahPJmUJgtWStxmehGHcS8tkNgzH4Qpxvn8ZD96HYNzZgx28qQbYZ8doEcgpScM8VMefVaDHA",
  "key30": "3ScqhSELK6FFekJZJvhjjuLFTLoaQtH7fCmcj4JhhKPPx3VLZuCFv9xPCgaAxusRpMrZ1CRYNCqRaXzM8z9LLkfh",
  "key31": "BJk6iwzbyqmmkSrwbCWgAXzPbY5gdc69J2qHJjvTxFTtHyvrymiF2du19SCEdNAdHRX3kraBTQoJu6QeGuempHe",
  "key32": "2oooguRYgCS5pJpRuxv4ixNLax3Qx5CMFwRHod2yaLiqxRsReqFGbdEgV2sha76pEsGrY3tuwr6miTDUezMNVHgK",
  "key33": "2Q6jkkkAZdHWqB6kswpGAjThwx6XTRj2CcvksRWWVPMPGe1ETU4spvKM26gr88iv4HXwcztUYNF3M5E2VnGfSZCo",
  "key34": "5wARLaPoAuxr3YQEUz3xav9eZdcTjeB8DQs7EYq8Vpq9woo4CBQ8EV2ohVcJoksWjAzHSQibjWcTXdrhchrTifpX",
  "key35": "8vwKAb5Gj9v4Z7sr5PmssLKUr8Lq9d8ZQVKimvDxkexoaVitXRdtg1Xmx3BXZqBX72QsvZy38YQFdLAxqnuroqZ",
  "key36": "4eC43hjcx4Q591V6vMQXHwusHNmPzTRu7yn1JRajPtZoABd3Ywz5xc9QYjgCpNDGFKQH1krztRLSP7SaU4yu9R5M",
  "key37": "A6q8EiAzbuHvYEp9peiiqyCYjwpxLhqwC6LMFEFbC3dJJei3FSgV6ZvwHsVRgnvYTzq2bDNCSKkcbygRzBLCbJy",
  "key38": "jizE3vag3kmGLNbLaCwid2J34jRDSoz7drb4vSWoHTKinfZczkKTkXU6Gbwp9hCaMyN9n3BUyLuNCioVHAuY8kb",
  "key39": "4NvnG7mjTsJ5PTnbbSe25xPjePTiwqJUnNoUeBgjLmbmAxD5V3MgNvGU75NiHwnbqiaYyE9ncnWb4Z9PVd31tovT",
  "key40": "5zh7yCM61HxzcCUWHuhDehQYGqxdgtsjr3MfvBP4efybvQUJppWxHCjm3c7u5ovddv5tKsgY5YCPiWirmfwDTdHV",
  "key41": "4R5uif6kuSAWpEDZHNCqskfcapuWWaTbDpM7typ2YwviVCp2TWUGAF3pE7wckMNQCbgQfnsS8UsKBrK1u4LL2DpV",
  "key42": "5B386qRfGiKr7FxFjcGFEbALrk2GKq4wPXPLoSWVB2oYxVqf3EzfN1QjtCAVWt73YrXr85qXeqeQRyFEQFE7LVJT",
  "key43": "4PeYuUXdfJthuT4e5hP1Sssbd4bWzHvAwxPydWgaabEYpLup5rVd1fGWdK3pNGANadLtvUTh3fq8N8ucGCeZVjWg",
  "key44": "5oyjsZZKEdCLtYy2rvRg2WaqdGB1bECpXpX1dJZq9CCkPw4jJ5HeLKTx1hx3urWt6P9hcxVV31nH2yrbXtnDUzc9",
  "key45": "5zttn5t5djb32UxZdTMRshySwSXBiBMzt2hXttmf9LJSD3vPiSdCKoR2hMvRy66L7RMzSPK66jKBxFLaZjwuPMqN",
  "key46": "4Gks6ahQF6EqVMqg7Di51hqooE4Y9MjtQHjyDcYUzYWMnFLXDNqWjRKCzxMS5jnCCa45QCT9Duk7CZicPAHsRw9d",
  "key47": "5J9mokBrBTEFos4yYcdNDcvYLMp58HE4kZx5aFgYez9rRXcj4FmPU1NQC6u9WL4KgMuFMFZNebFchWhDHskwyf1L"
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
