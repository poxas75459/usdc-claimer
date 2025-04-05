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
    "8cf7Apo46T9XYp4bSiyDp8CrUS34eH5YEMPDNQBQh4F7HfMD1SZLRo2Q2FHrxu6FgYshySah1sSz67puDN4n9Xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PMmS5DXSJdexFoipx3By43ZsrZFrQmSdRcuMWpDVkKt2SqKCkNN2STe3sJM7CBT1jkVa2xroPXwsj2mCdmez1kD",
  "key1": "3SXhvEhNWq3ERUAjNDBqUFTyhAYVL74CfEKqSy4a8aMQ8UAatv15ZvzvFMBEBK3uQVPZwquNsvGEWKbmHDyQeF3u",
  "key2": "4ZyZRirXLD32w1fEySyQ6BiPv3XHmD38z7EqVKsAiS97JYLjJqMgxyDoU8rxnJBMoN46dz9hEQRZgt8t1GSo5jfb",
  "key3": "36CLQv8HRR8i7nTLPaK5hrqD2Fwmz1C6unLmGWEDcKfUVpntXFF2v5MhcjbhUxm5ofCk1w2jZ5mnioY66DsY9dKn",
  "key4": "5xm2tAfkexMhmhmVCe3aa5MqjMLHwtVi3wXczrQw2CymVgbMhohkvrga3fzkY9LBi8kXgYyKP9eMnW7ZtwVgYeh7",
  "key5": "2HcXSxP2MS2xsjmMidWd6qPAJEXFGGzam7ZfEVaMKwcaZpiksUj5uikSMQtgF2TYDP3XPmsAepVBRjVf3UGqj98A",
  "key6": "5vf1xg3UeMxN8m3AeV1ENA9sUDxFUovNRSp2tXEj6m4vqhdbWbVmXpwKWpWBCCb3fkQ8DCcNpXo4gAkaSBJJLyZi",
  "key7": "59fySdkGaYDzHkJeQr1yXTFRRUroAq8QMFxxMTwjLZ1YFYJdoFYgsTtpa4f4Paq3VLHQWabg8Z9wVRw9Lzn1J9mn",
  "key8": "487tXWjVA14wzwF8ucr9WiZe1TUAHnV1RyZuLjrWLfPc9k1MCTUopkC7wLSDBSdKLALa3rLHC5ofNMSY2rkPquHP",
  "key9": "4wJywfncncF6P4jYxNZpgfBwrERJGCquR5gd8aryy1Mf4Msa2W6AmdiCwbL3xRkSCzQUQgomum3JaJTZfFx8Rg4a",
  "key10": "3FBXDRCrbbjdT9ho6233AFGw7t3tW7ecBK6xjbLigutwDdWLx7LgciySZdjJ6eaZwcgWRSCWSD47GWjg3QoEX3qm",
  "key11": "eTew7rhy3mx8gT4ofCnfd2pUNGkn3zkypAiPaqbFs6yVXSkrW21vPvfXmfaHUmZZYKVm6U4xsvFYwPUw79rbTtd",
  "key12": "5D2bt43ZfZW2irdGxBtrip5JwWEFVvrdMTnd1iT63VNR3pfWHKwbJx2juKu5L1ey4craygysNWgAf6Afa5aY4Aca",
  "key13": "EdsuiBBsMnGu1JJWvBWACkhCLrADEqfZacmu1ndhJWXYMpRM2DLa99MTgEM1qiRmNns9D8YY8wgMrpmTMdp1TU8",
  "key14": "rh3hBqLTssuUPyKokm9qJ9DWrJHWbeyMWCNWqMF1gLSThiHRc5AGJS2DfiDb9KZLAeXDHpndz3CxzVcjvSkwaRX",
  "key15": "mM9yx1Ji7RVBoHmzb8jkQyPHp89F9uHEwaS65eo7PqY8LTgu7nUDwhoFhsCxSdoFNvxMRhKdxuBr1HCaWqfdfot",
  "key16": "4fs8RreCwDE8Mxs1vpaXPwAyaGKCHhA7QRj39FFrqtULb2t85BPmBTCnTLhu2CEK9FmiaSESQNUnjR2xKq39Xgv3",
  "key17": "22qPwREURGeHQDWvFyUpJ5nziVvzmFYVthxbKRPLREd6LcVFc8zqtp6RHrpfJStVWiomkv7vZk7Xp14L3RuBEW8S",
  "key18": "4FDsZoFEN8FCNYDjprNfUvqT7NByXgijKvB1iFhSrwNV5Qy1KqyuPeDyHqmHvFmv9kEUKe6jHVJ52zCtkHahh7gn",
  "key19": "5oCihCFMdjWbZwpyrdtur7Utfg9ZvT13HMS6RhdoqN4UzQ4dMY2GrvDyyhbDrqAhZCRkx3RNt2EKBRtW54rdyeoo",
  "key20": "5yNeY7EjECHDAjN879iyuVatKouGvidCmp3tcqeXgiyv1kj6Ad1dSF19DwDb65iLinGiikdv1zkGsLqmDZHrsfMf",
  "key21": "2yf3kDJ2drpLgExE1DD2DtpXggdFVkBPaLZT85FSsNJL2vR91g6UjG5b1githTu1kJuN1Ze2S4JtNytYsaNVqrhG",
  "key22": "4mhiwgw94n2RzKmgpiVW7fiU9kTKe6WjjXzWwAPXVTdtDGK7u6hHGvUiN4CvHMLEyYcHs2Efrc6U2CXLdYkf2DLC",
  "key23": "8oq1rPA34kZadxeY6xZ54qazXGjBiMT52C65YgaK9JEkBHn3bB8sj9PYJXScY4HQgrbMwtERDebcbr22wwsmDNi",
  "key24": "2DMmj4azLTBf8iKFdcz7xML3S3xj6FMfrSB4NDoBo2RaQRRTRy5qEqoveEbTn3eaRYa9DbqQcueKZSfvMhkHyB5P",
  "key25": "3TZWVJbbC9XaXZTyRe9qVvPb9pPTYkvSruX8aQN8QWspciRJvyfQRGR5znrsfojLqVwegwJAxh7Uy2J1RCmvKfm9",
  "key26": "27PPnkX3AL8yMoCy3CLr1BPz3KurFQ45NyeScBET9Kh68zWdq9EMMu232TTb7sqc2Q4nBv36ZoFnNqZafW19nYYb",
  "key27": "5kxSrwHjFs7ZDkajnERxPnb4hncpZbeTwYJhdX8F3T7sJbrfqXZ12R4o31P6as5deYKcKa8yjxHn4jNt7jAqcF6R",
  "key28": "5vxN1V6BYwkzVtqT7wPyWqhP1FRX5VEeKdTEK19HZeuivHa73HB932VDQMHtFb86tBPq7pHRMBzj9GnNiLCBS9ek",
  "key29": "2jBEGDQ36Cc7g4xXxtfsVwFA9SSEwD8PoLT95gMTjEYjZSCyPwH8RmaJX5wUXu7bL8VpYxoS9Vkyi2SspBY12Ahf",
  "key30": "5GdnFjLDFZrcnpN9pEYfnLhJUcSmxM74qAYJAL9NZycxN8B5UtzffYickUB2L4ayLwMah1SLfeSdnhfojdbhUore",
  "key31": "5a5E6iSvoffuLmzfPWgwncafsPdsmYgFo1fBZ5Tbo7NcJ838HbfkzPRDVEGYnUe3xZdMpBjw5sTjhkucM7AWiw6K",
  "key32": "31HkAHnPDzNG3njLncmqxhwt79goPzgjwncQrNNQ1ynruKa8akAcHsDcCgLsNUbWr3wK6Rt6FUtwNxe5qU683jTw",
  "key33": "depMXxF7fmpCgU3F9UwCte666z616rVctAemXcQmJVuG3X4HiLys9VonsZ9JQZEcefeHrwBYbzGF6qrpYuesaMu"
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
