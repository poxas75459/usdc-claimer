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
    "3cJoUxSrPP5mDMZTKm7pAB6DA2FJ62gQYbd2Xbo5u1isVsL9BaFi5okKxm1EpTVLUM8NnYK6crjThuAWWLvGsxAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gPSDnLBhy1vLK3mKPrPPBLTtdHzsiKtjBfePycN2VLg5zSg8vBDuxKwFZCNRbcg3bAg1wN4ipyGyzqnW2vvArsd",
  "key1": "K5e9UiJ1xV3nm9n6UkHPxHEtVNPe9u8SUvKouWf1cVVGGy66CzQqv4yWG5J9r2WngFUSdPZU1iU8BijK28n9GiL",
  "key2": "5pQcXmboJnq7CBuEiJaTMuzV5EkMaoraeVzzsF9k9aTbUbHfoyH2GAygWLckZ435jECf2GhWNoTrVY8waC3rbvs4",
  "key3": "5GpX3Y5cX858po1hqiGMAgDrMUhLQ6PmGa1WUwW3vrfbbUHbU6K1kKkiRyYsSLASgAn8cMSXmd5mftuGh92FGuxP",
  "key4": "2FeGKT16x4oFfQEEUBJwMZJJWhLdNHmBeJQNvJ2GmEZdxvYL56aVmmbunKtNiLiacrqiDM9WVspvSqXPUNXxn7H5",
  "key5": "2NeU6cgk9ZtHq6AufyNwADrDSFES8b5ggB1LQ8woCvUQhWEapTupPJurFmJA2fKVxCh4ogYg6gGNMRbQjELnkLaC",
  "key6": "3e4fdUe4vgAfaQQUh3UPAaSZ9gZNH4mqhyNyUhZM9CCv9hcGekHr8RPoXxVmeYXqqLht1eqDCBg6WzkEj42N6w46",
  "key7": "fREpisBotV5q2L2jHxNrmkWs8qxm8ZYDpKMPwA8prQX8H6yH1oiwWXPJkTsFP2yDGcjLwjszdiyVUMWEUw8FAK2",
  "key8": "5WWEGgPjPk8tznroeniyWQCpRQmvSKDW29xVQvXwRqM491Q4X2CQH5jAGchCr4GmLqCbmXsVoPgLhPoN6xVBYo1m",
  "key9": "EEhDMV48dHe1UwYXYHo8hfgcSn65sCjc7E6uSMfu46GqW6StA1C5YC87WNXHkxC2tcxFECuk81VyxDaTzkecEmb",
  "key10": "VXWXtV1CU52oLWqRaMTCjMCQDMGCh7vLdkH2zPmN3BPM2dT21MQvNRdVA1deJT1fEJoMv7MyFoyZHGnJqmFE3qi",
  "key11": "2seSRmczmYrTq64iaSewKKiXvTD9ahnvkDNxB96CMwyWUYWJHPXpe6U7YAgSUXsbFuDhhVRUCEMdzy25eU89TYU8",
  "key12": "594eKiokJ9qYjZaEhCyu6XUGUNUm6v6XdcH575krHFRQeTaJ5nMc4nche8bkaa8nv9nLKjLT5jgwHmTuNod7fAsp",
  "key13": "mJZhBrQLH8PHcSjUkgvysYTXAFX99DtAmjPNN7LM6EAfvJtL7SF1Man56vZaUnvGtKykF9LqyCpcuTdnbX1E6zD",
  "key14": "4PznDnmJQcRCTsCgwrcJN8X66WHmu8j2aJMpBgDPrKyeiauB7zCiGUAJb8EdG5CSSLVRf35NyTgykds1bLKVCXVu",
  "key15": "SBG3pRtNCG8tqdCNXR6QnGdZaVcFiLBz8ciTCyzSADnMP3crsQpSNquwr3p4ZCdfhhVBv7CQV5dCdydVcqCBt1S",
  "key16": "66MJYx86XgghDG4zigMgqK7Mt4LbnqhWrw5KatVWHPt6NYy6ukZmoMxA37ZGw32huPkNeZGwgGvtcmzbsx13icR4",
  "key17": "36nG9Mag8Y3u4EWtq6AwfzuUknFeUWVVUM3YNk75cvh19NqyCy9yipCKmDHy31gMxds8Z2w7CnpiXpDoA8qaMUKy",
  "key18": "5MpAr36adHQuNqL5gJSZwtkFccUUun52NZWwAigvoWppKfGsTr6ExX4cAdGe7sHd3QnkydvGozLGddzoAF4VsxDX",
  "key19": "3QG8veubw8oiT8JtuovhN5dGkcgxUz6h9RUiBupf8nMPay4UX3CvndFToMprpDce4hpftUBKb5JcZaRm3Ew9Ba9K",
  "key20": "XTDhv9W6qgiyLfZ23US6RfwBc8LkykKwoYU2Euk9UEo9SX4cpbD75DmwULQqP21ouVLTStChW1CyRqEfVKhtHBp",
  "key21": "ikuakXRxAfaPoAes6aazYdVuEsyotFwwcfs8mZA7gqX8yfQexka9BLXpNFQ9Yb2fT1GUajrKYriFN2EY3dN6BiF",
  "key22": "3htKBV2iR1GBxcA9HvJeCBxYcuNnZA364FJP3mqTV5R35i2eGz368dDmiznLxmTsBotiesjuNirb88awAR2R1QPj",
  "key23": "54ywFBMVaPT7SK9HfNYrzkxSK3aiKhPUn8peHTeDYsvKTPKsYdaDQYDpro4tWJsbQXJ2Ne6cSs9q5gmJ3N6Up9fn",
  "key24": "mfzx5VubdpjEMxMJ1zGH8p3j8P917i4iqawyN4dMxwLXZP83czhX2MLeAyXDwHCiY7yMxymoR4Hf6U9oW24Vbeh",
  "key25": "3U3fEw8t8aXy8Jg8VdCZBS3GRq9rrpeFxTztLUK21AuLcPFsS51tiCetUF2idnwtoY3FDuzt9CZoC7cPCFpuVA4Z",
  "key26": "o2qoztf2sWTDNzYfXi9vvv12vRqUVrU58h4rgv2D3XCqNQycNduTvKd5VBxACquHiFffsaQeyznPYRkFj9aYPRd",
  "key27": "5eVYUMyE1u9tZFnZCij8LYfAtFnHsF3NqSd8qVjeDyCem1SbcM8ShXaNubS1ERgLxfzQYW48PxQdMD1Ab5rGxJJ7",
  "key28": "m32ZRggRX6FWCgFJCkYgUE53XZ755vJyDVtq8u45AKuCSMQBmjE1bQVdxv1yLAcWLkK6FQQiSfd7dCeYo2dBL5J",
  "key29": "4ssyFQWb1xEGyDTJnU4f5V3vy1sX7jjgJAS5FTcZzeb8Br8cYfy3G3RjnLzgvpGtoWYXgC6ReZW7ChiqKadRuoJF",
  "key30": "5A8Pma7xxo3isAtHhe4ytR5weJjYGXRrguLFEPDwYcoykthzkStj4RYkTtzWsq5icmTuzTwhncozwBwaW5sfmX1w",
  "key31": "5myaDTNbppYdeNej5JTpeCpk7N2V7EmwV8sPX1SZpbmXYrNQnjeYn5tcq6ycKPNA48J21tKDcgSTRydg9mLt8xVi",
  "key32": "U6ncJRqnwYyhnpEp7wGNJ3otNUKTjEtvuaEyG4Nb1c43w9MCeeiq9mGmtEBmLifrLu1Pct7zDrnKn16ejXo5MQ9",
  "key33": "5uz54o6Q542U8d9xbYt5YiA1sVQuhQhUoB9jN6v5Svt479wqqh7pLGV326qaDX8GYLKbwyecowVE9TF2w1FcGiky",
  "key34": "45uMtkvokhjA5EFQ8pHj5WMmDknh4bM1xrmm6b6RnnqskCbbkpHAFBcJfWLyy4GgXXZXftTMYcCyspSqwdV5dCyC",
  "key35": "QHKoojB43ima8S6JqT2VkjivqduMLhpYRPtpg4ZS1VPBmZvX7XMYoL1L8CCUHkcV7iNcqFoXxQPqqZ3DLxx8NUo",
  "key36": "5VLBF6csjUgjfsRHUD3bRixKUxLYHeSKdKsoj4bZdyTnFmE1suWwfsge8F7P3Dn47xwVQw4dJsUSuVVLV2t7RUWX",
  "key37": "4hZS5CYHQiNvvvwuSqLnzrJJzs5weuPGnxFY9X3N3xAtbXW11bKKyEm91AREt391xpDETKnCq6KNdPBgYDSscLzL",
  "key38": "2BUJnsdUev8Xikc2GSoX2AzQfC2PPSZeqJVVQGixx4k574ogJwKPC3WEBL4JqQGYw5QaAisB8f9MTxEfD7UvbUgg",
  "key39": "3wgAk8QyajKtUF8dA3q4oKi24J4aACPtibJyiU17yjRvMjingjcuiUY6qXkSiCc2ttMatamato1WiERqb62XwU53",
  "key40": "bfFJVVUsEu9sYGe3QkRP4dGbzcNQRJvnxGstNMRSHiTu5GGhjj4gPqD2CE6CWBRBs9B7g5Vdg4ii8sVZPb9grLk",
  "key41": "29EtQtuAVzY3dMQwHwjBQm4HVBQoYsEAEpV72VNtQbstf6GqJhnTcfizx9rpd2a7FRBynMe2dh6eupjS1eP5ECwF",
  "key42": "2xcR6Aq64ugffmpWuDpedmsxw7TtrmWmhgGzi5c5NdfPap48DAuPcAkk5fBf7qbZDpbRcShBT5Ap9qZ9kBB95o8U",
  "key43": "fujHu2uWGpFJDm84W7dPsjxViZ9agzFGmJKuiFUkdHEaSkC58L78GvLDJQmWRfosNkCMY3o18NKWaPzooMSj5Si",
  "key44": "4UUQVzjYpLV2vJLSNKnGuwc5cdHuHS66sxFwSUmUWuU4zp4yMWh15KARMnYDJNjFQChr7UhhZFmkUSWEJjbgm1kY",
  "key45": "Cm8UHBLeFSRj1TRssFqAWuxePsVtwpWbQGzSBAeTPJBkqa4S7oqMUtCcqSunfGcs4S1QGrvbiBXcAk9bKvBAtSo"
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
