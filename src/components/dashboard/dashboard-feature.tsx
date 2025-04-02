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
    "4qS3NGj4NoupWuQSbrpYbFv6HXjzkH8ktwz7CSW8LLwcTsgVZtuyEPVGMQNq8rGrJTXmtbTVAC5VTy4x4HmNRj3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lue9JH4XLLrGTvhtq7ByfZDEbQrUNAtYS5rB2EiaE9vQHWDYXvitvZBY1iZrAdayBRBvFNzwVnGMn4xDv4NruLj",
  "key1": "2ycPvWJvCv8JZDgE63RLcvhkKyBKrXwzTNfi5a9BDmJ4ZeY4sUiik6AgEQmPfFou7C6oFj67AHCmbV5zxHegqYLG",
  "key2": "QLmfBiiJ8MEm4toHmTrTyXkkUUfQLQ1EEp13PSsBdmczELuVFZR33NZSuTMkcEiRFMr7bU6yDcyhQ41sfarm1bc",
  "key3": "gkawgLrp41HWrEnHeJFgVvxFw9NUGcGokDfLHFvJpV1PcxV2HykfiHxn1TZraKqRA274jETgYmcUAJy893FLpPE",
  "key4": "4HrPC2Xp95Nf8x1s1Qyd8J2YDe31KmabU4SPa69VYigsUCJJXP8PAsqUWsnCur9bhSbRzTrEfLmnninmB6AT4cso",
  "key5": "4MmQGfFxJArNEVvjTuyXLsPytwtyzdrGEcTfawc1RNf8mQ7JhbfZkXd4GtTMQbpFbkS3qBSRirQdoCCnvjVU6cn",
  "key6": "2ruRbLkUamhajg2tSdRcddzgVbsNj39KrCybKtb3aw9jqQsxGGQY1UvN1do9NiNpYrT67mBqrsb3wjcnt9gXKQeb",
  "key7": "MryU3eSs4YXrB3TvrGHTUQoPTBLjFiddUbDDCVaaEQ2EPNMNyS6R2aWmkhfSj2UKchms6nMfbp3XkHNMJjhxbRc",
  "key8": "5y1u97ooKrYL5hNJjEPR46GGwWmDG4LZtUEXhzzRbedhkcT16dHwgxZJBcXwkVWLNVdYxrr8TLZ8iMMhMJaWYAMs",
  "key9": "qnehvGaRn1DrojLzTNbesW17d5N8Vrb7DMxzFbvskcjvW4Q4ds8Z1AxzMLx5xQCs6oqy9B2AJLF7zmMHgBJSJJ2",
  "key10": "ppW7tC57sxjEjyMPWvP14nR2YuJork81FuzDD2FjHnG4tvFdxAAm1wKJc1mXqSbgtRmyFqf6sFYGoW1ZANt8dKW",
  "key11": "2YZB9iEVhAkyKuNFSKcHuhoraNFYBy15i9agX9qMdQmH77ibfeLoTHVsiE6zm2PYvwqp74Msn5QBQWYenydgKQqG",
  "key12": "3rDAqkd7QhEGn36dzSSVEFykYVookVnHysQeADAm4EY5bNvu3S2qwohxCa7gqqkW11AizuqFZoyRw6eZdBjDhpVk",
  "key13": "Com2KrZfCZm2omiBx8Zm6KMjzZYebWwt7PLyiyXnv14zCuJoB1C3KXTd54nAqYbyqXYQ6Z4MwkpcxA3g6QiFksc",
  "key14": "59LGkkigSHWPxFAnrfu8e4FYb7jrJbNFPeHqJw6GGCmjf3kAyLHAjMWMApuDpZdVCtzmL6w35Xvh31g7nbPNasM2",
  "key15": "4uZugeotrpnF5dHW7nV4kUyJuA3GUTpWdaim4ABNdhmjrSN79wZLPK3wgEcr5DPrq5n5z5mGLXx6jMizuhocC5Qi",
  "key16": "2j48j7T3HbfdeRBs18pNa3C5Lmhedtg9F4vg3xQB5bZJ5d5KAjYwwECh7jGTeGH9BgRaJL5WHfwb8s9qKcsgnaMW",
  "key17": "2YvVFhPVt9c2MHEpvKUXCBFQiLs5L3nqYwcz89nrUDPhbmzHF2MFdi3z7uzgyhar6gZH8eohRNGSnLrM1WEps6bw",
  "key18": "32vTiCVu7QRF6Kq8bDMA2tzkVENuj2ZAg3q5MVVGK7hUiPrg1rPjG7PR8HSLQLMUpvrq1M2ET57ABeeUtZMxvBHj",
  "key19": "2eJoNjRHrP1TaKD4LjH8TV6ekisqm2CNVSK7WHSyj6tatcY2Cj1nUGDnPZK6pBmfMT2pfTBgGYBm2Rs97wLBPfZq",
  "key20": "2aCpddeKh2G3NczjpVqAsLdWcicrZn4Va3FZN2sGD5CYZXiz86bTfWdpXr87cgvHbstqifZ8LGGmoZ1PaNaZK4nK",
  "key21": "2dPVByvr1so3k5gfAzrBL8KEsS3bxYU646skcmTNyreqcnBMRBgzKaigrwdzZX6qnGT7hJBLryGgVUDRnw9e1ni4",
  "key22": "2CvWx8sbJ3D2q2VQLHzg196FLDEPRQ9NAVWsZ6c9EsmW8Vn3UZqwM5mtR4Atw69CNaH95QLQHXatcRZvMjTmoxCS",
  "key23": "3K8Mbu3AMuEnxjeszUWuocmV7pxAtz2KJHTFMvC3ksVcJMEKRVtJomXL3GpB1QYxSzGwuwRmzo1TMC3twdiyWzRD",
  "key24": "459jLVixTZMLKkT42uJ8z5svtVvKEx6AUFJ2csUQiZjd32hcXYBt56J7DYbXNeSeVKhpSwScYtxuu9jk36PUwqz3",
  "key25": "626va9JUtbDB2DzWFSNFwMV1gS7dM882mNunZnzvQSdPVTkWCsiGKuwnYcghdY4P6gs4qsHpCEDcaDBS5kuUJQUJ",
  "key26": "3aLJhpjwUjvSqnb69zrxK7HFQj2EMTyUBAfG4TWRSDHkiPDHFDrU5ybeapwv29Fkvb6mMaDHbvvpn1c4WxAFnBt2",
  "key27": "5PfNKTZkahUsDw2DW2UNQYUUz6cddLZ8kMevekZUBDjEaAE9CcTruU97zimMqYirSi1CSpHXjaXBq7fBxXR84vD2",
  "key28": "5xxTmbuGd3o5MCZ3Nvay4GA6szqHuyJjCMbzgAJYaBVbt78cMoaKdC3XWGF6NZe8bZWp3SASmmHWt9agpGPPDPeR",
  "key29": "5bJDjr9E9bPDUkNL3vL4XDX951FntQ5Ph5JMeeSdE54yvTYbTyumwsfAf2BisnpFGknqHGwoGh7AjJAXDdRRacmx",
  "key30": "4igwxgESuziAGDJahoMuaW2WgFH8wRxxovCBNCfwsc5nyJ1ShUKk3MmB5K6kBCDe6tUoaCb58VdvaRyAnuaopH7c",
  "key31": "2DjN6igjC67UVn7konZ5n3CDVeHJ1A2hNpFh8e72v3CgnJXHr2RK9CUbTQXrMsrq5u2jBWBrEuH1mygyJSfbaUUd",
  "key32": "4tVjDsrohXKsRekVkWhax2b9JjTNqrXXGqc2jNqtCPRouCqczHrkeedqp5yw5Fvb2nz6zhpfqSoxcFvNjebMhsaa",
  "key33": "44F5dwajfsMSRfAxYpmUEr7QUQscLhGSSQGVHuHGT9Qnj224cwXqbUeSDNixiPrdcdoDZkaRhEvyhJLMBaD3jEWm",
  "key34": "5piSCbHhxS9pm4rUmW2fwim79csk9z4UA78XGCXAFxwuMV5m1UuF2LKvN1FgJTcrQXhehUae2Cyrv3iWq2Hf7n78",
  "key35": "6emesVzcWVNAGGSNV1KuEa2zPMizR2TfDASRAGFStGgm32VvQzib4s3o4TQ9a6UPGQeCn9nZRP1S7RxFVUdp18M",
  "key36": "4EAuTFn57m2eLPZJ7zD5tdaZUyNQ53eLQFBv2gYmAmSCdDKWToWgw8gN3AN5cxmTedXGoynrnAnPNh6wK7E1MN7N",
  "key37": "2tAm5gXHTszwCT24iKwsnbDP6qsxF6LSk4LZMtyYJgzw8ffgoxcxYXgobk1EwtmWo5j5Peak7B54b3uDtcKR4hvx",
  "key38": "3YZqYLDoZFE3mV6EpX8t2wNFa2Z7fjDNseVCgFYysE46hcSwUnku6uadUMyWePztqXhCYQQqtndp9Rme2n42dPmE",
  "key39": "RzK1kQVKCJxp1MVjr4DkM3yEtFSSrF3yE1uAM8UQv7q4W1hx52P2wrzMr8Zp4Go4WPjtVEWaoQ5AmDsMJohxxKz",
  "key40": "4KeS14xPiHbbVAivUdrcdR2VwBEWvqmdk5u2Gnn64rzGpax5L9UczvHYCy7z4j9y58t6eyodaNgLG6z2uQpXxPVr",
  "key41": "5zFKNBtP8Dt3k1xPXBbvoN7xcfqBV4PggBGF12bwd6VMY8hHpWKcEjYPPb4c63XJVkqJVUKh5ZdkDT9QWEVt94RK",
  "key42": "5ez6oBFpMeCYUiQEKgwcSMVphxKdfXWSRiem1QP4gd7849n34WKrzfMCeE3voWkBTtQGdpK4fuvLevChvd3QdgJ9",
  "key43": "43zTXcGcKrJ2Fx65CfLSAATYoMc2WZceN4a18VPYDvZrkkhLfHfZFxiN5srV6ENi8Tea7Q8zQRb6sM9tYkJmGDcB",
  "key44": "23pC3ViRkXTV61eDDE4aqYZrtFdbDMi9LyCm7jPEUfbmJejSg3i4eQh4tsgHmvsnYYTxXrtpwvNZNT9FDjL17tP5"
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
