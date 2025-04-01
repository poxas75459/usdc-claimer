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
    "3aunG6TRF8JgDzfZubLo9ooqZAjBwaxeqfSQhDShygEe4qMchSn75wPJtJgLCKBPSVBtWdFE9mVVSWUDFusvJxhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4quD266mTyuT4jXvxqaxvKJCycSQYK2WuJoyrnrAso2D7R84EbtphiDzU59z5hiyvLRMLTnwjrkfpU4e1PHsrp7b",
  "key1": "YTkAAUJaZJU6hYygJCkAM2MdDdPEP27fQxcepXS5baNjEe1oAmxoN9de7ByrGp6Vmdudq6QSvndXJsrXacThJ3V",
  "key2": "5YHuBWYRUsZM3snHFocMTSCdavkA5ijsUX2VenmVgtqEwsp2Bp2i3f4e9ChaxrMuAcz8MK3WvyaaNNnbwUUaTSa",
  "key3": "55Cr2GHxXqmVBBdgtN1AGfKs95HdskCAcBhttK3Kw493exmuTDaPH1Ekbo8VNy2tmWys7vnZMsjc1TN99d7DFEQf",
  "key4": "5EYmZK9SaMK1eYtJBuj55yAkjBX2okkEokj3k64xTq9DiHdLG26F4yz9Xv499McK3n6DiE3TbQyioDBubQgfsikt",
  "key5": "29C2JMR76PaESS3Hqk3fk4EE9Ev12LAZxS6UxutG9RX7P9fDrSCQDxLSciSwWv7TRwjeoaJH2JUwKgsUrkZyuqo5",
  "key6": "2rxRwuwzJA5nChMVrCGJSqBVncADw8b4Brr7aDmXpL9eAn5drELoLf4Gx5AnuHnsmKkW6DW6E4om5i5QUp8q44qS",
  "key7": "HJQCCTyXbLM9NNgprcPxRdms7vmnECV1pvEEWbFLw4p5AFGZgNVoDX2q6SFof36Exkt5Es2CY9nuj5fAvbzaZRk",
  "key8": "2o1v6sHZTpwjMHDT51prdZh6VTPTyyS9QpEx3PNhu2T36VA3EVCEgqirkDcWBUebuk5ETXBVjdQMLRbEoNqLdxxA",
  "key9": "5Tp5hdEzB3TRSPHEDjktT8eXPaYzRCuQFkq9NkwWNcrFzx4DKDnVDRpBUBGmRDDA3e4ufVrpBdhRdtyHpnwrPvmf",
  "key10": "3qSsXKtN7DUv1TYqmTBBR8ArNUVcVwyQzi8mAkdaRC6yfYiSdqm6STMW8dJ9apa9GgYefHquU9dP1RpneyxYqFgm",
  "key11": "yHj2sXPxeSkmt67sBffQLaowARxY7TLDELW53ExNSZBdpVkCGn7hCYWJPpgVpxJRcKJYCgyZNCHXHu9CCnm5mA4",
  "key12": "27azddFkLZAMJ1y67WZ7z16z2zzyW6Pp9SH5nC7TfS1Wzu2VXZwDBrUxDcuGcmjfvadccDQmFKoEFxsh4BDJeAJs",
  "key13": "2QKssSXxXaRaPvZbXEWdvbVCNAG3SCZcxgXhwU3skCTHpai9H9FwvandwNHx9rNuN3q4nJyq6CtxbLhPG98jXnV2",
  "key14": "52x9iYWoQ7fijADbK3TExgWaw2dZojJ4GhaAgcSMCwRWhtBxVoCGNAynbGu6gEZmaRJh51hCZHjPd64U4D1fj5xC",
  "key15": "2hjYDJWhRN1aPh4d7WKwSKqSqCgvsmm83t3rJXTsrodQLYotXMbuvpCwHmHn9fGGwZzhU6vphKpy5w6Fx8KyR1Qb",
  "key16": "2v86eTE6YFDpubcvszdRyVx2Xi77Zg4dZis7C3qjiefu66PXsgrXfTPpaXeWQcwET95tq61hUxP862iQoQ9CHyoe",
  "key17": "3TK3kEMbjAxje7ap9FUzUcUdoxLqvES1KurtZa819djWfEKCWqwa571kyiqzG9nABXBkiZoUiV4C49ULtC5S3Gap",
  "key18": "5RMivpTTTfdxy2wuHFhczNT4sKZsmEvkpRgXcJgkA3dN42Jc53yH4J2LipK3eemBhUkdtCWEH6Hpi3cGZhZ5W7ko",
  "key19": "AbgN22TkeFopJHHyeHbE1vpZmg6HJXTR563Zhmb6WdszUZSHHmptQHd3pbgBoSPvUvvc4KLeL1TjpHhJdQXDXKm",
  "key20": "5hqPGPGaWk3WP3qGzwZZCPpK3kFDsbL1nQwQmUAjdqeKXFd64TR5p7XE8PiJpJDCarTqyJF78M2278WhSySxhNJR",
  "key21": "5u5P4N3qbB8qGNw8bQugPCpFGW2dcbYXA23GWq9sEPgSUBXyP584bPcncSn64KUwyE7G7PBxY5PcRivos8JGwrAZ",
  "key22": "38DbHfu47r7SHzbDNVt4JE1wV2TBQrSPhHjHf47pcmWHUiHppxn3X9GxwfmQiFzG4R4L4HGHViu76wukCVgmuRJQ",
  "key23": "ZQP6fKPzGRdP6GJdTBrKuxMpAJzcazi1sMTbLXTg69nhHCBu1orGJvdXXc9YzCookUL1tQDj8iESmY5RGHGk3Go",
  "key24": "5STdWpcrDuv8nT8GxpVtgnmEdQmNFsMdq6miPEz9A5g9iZbVdkmsiC3pciwXUhQQRLnsNiCbCFAxawVF1vm4ZDwh",
  "key25": "2KQm1rSAvwzbAoQZUJZhTJHKAh4ULxDmxgj6395rvB64KLMzQLmiNGNYQLzS2m1Ys33QLaXNbajeNzFYUjzyJMc9",
  "key26": "44NRD419sZUfVB8kZZSeGXFqDjdstGaurcTKrKvrcq2c3kPcKRv6gqSs8qykBNCdHXuN8bJnYygT7NewGf4oFYuK",
  "key27": "2RJduLJFxwDYYsz2T1xhXKmUuzzr6e9UBsxwqtaNRrmFWsTLCeJWbYR5sHDGJfKfmmDavEDGsWtDBPZ3NPhEaNq3",
  "key28": "3YTuHRYgokW2MChuTiMoXHk3L8s1oZ6v1D7bPHZD8QtmwUa9ESf7us7k9duJCVGmXSVAkV4KQMwCGeGDFxkPQfAF",
  "key29": "xJRwhujGKgDoLpPWeEn8osNWQ8mf8MSN3XqPXt94Rp7XpFdY9sVqFF7tkMfhuat1RStKvVg6UHTdC1LwMNaz6yY",
  "key30": "rMK2Fmw9BUBRMtNpJDvNSt3GtY7npch3JhEYe7mqgbxnJDgPuyHYGDZEcxudjb47PydYD8GTJQnLnj7D6ZHEaLo",
  "key31": "2W3WLzvfNAS6qMJHtb5MtdsanXyXhrUyJGU1ir2dcnc7PmS7miNK2dRWswj9a5E4TtTq5retoQMUEVhxd9jx5dVi",
  "key32": "42RZbqHMTE8FLSp8ZqyYKpxkMvDa6jmB3juq9xNQuppq5UXNBtma2mFErxgFPXGzP7SahzMGxeEX8mUU4585Bfct",
  "key33": "6429JDHwPrgo1UQrUQtdtEFgTG5gyhxRiyFTmWi95gRjeh2V9T5RvgbnP2p2dCfrhCDZdiLEEQhZCh42ZvygWhBw",
  "key34": "Z9RmANMEd9QSMj4UTPAxbzYggohnNxRCx3ufdyvpryv4RfBmXc6EC5uGMk5nJKaj1Rn9mQCmzvfxcAASszirRGk",
  "key35": "BL4Fw1DRTxGFGMY7S9DXUVE5vc8VzDiGw8sJcAgvhc4DXDSV6Mdwe6LuXyy3f6CkoA1UWMiPfiJfdp2egwJvb5k",
  "key36": "2Nrygb2HEPweuH5nGusi38NYm7Hc7DrzCRGCVUj2CC39sJH4zA9fj9AxpZvXAPu1z4DusqvoWsLxNiXTuR8KUSvS",
  "key37": "3uQzNNQQbVWWdbwmKvYP1oSoRU2BbyReDt56hat2AgcFjxUBxbhdU7d8CLMMZNG2JEUY1qH7XrhDMAKGmVAiJz2j",
  "key38": "ELaJ1uK8cfy64VettWHPUif8GHpe1CPygySNRgJVLxMES5ATxYqnCPMTb6QWJ8KeHM7G54Pgmic8YirSfagMZhD",
  "key39": "1cuYqbNRZ8v1uv2csLfQW2hnR8fiiydwc8P1ZzTpSyN1jBTVJ8sK8y4LN1VoNQpW348V1zVo2D7KwwU1UzEjNhe",
  "key40": "4TRZWEW2ioeHhausxyaEexvhkNL5M2yThW3T2PQMomHHSsaJwk4viKtmfevWE6JoCzUxH9x5Mkay67fVsAoD9nxM",
  "key41": "3fXzWkAAmVJzAecW5hrtGEQSgQDmU9woeLBkztADQtohSqWaPE2g9gqeuRyYtyasEPqHauKtj8hV9AWkNhGcMi3x",
  "key42": "4eTocdMfPybC1p6v9fL7riqfzGmQdQoY96zJVnDtMVAEQtVnhSbARauGxLsqvDng5AwArVy4ucCjYaM63S4d3j7x",
  "key43": "5sbTKhcJQ6rzTzPq8wUadYc2Zt9a9F82qpZjbkLT2PZ6tKupXAyQPtTkAjec5A5wjGsqTSkbWG2i6vxgp96ADHz9",
  "key44": "32eXDXox1HQ1hk6qse8ebor9VvaHSnsnqJcQmQHgstBTfjaWLdfvQRf6xYgAq2uexZqtcdcGf1MZqTZGFyBbadQ5",
  "key45": "2djh9pkWyWhmN6KYM52MryNwexDgGDbtcYKU7vXuH55Y1v4Wp55xfDZv3vwS8vPUVTun5hG9swCFQGtz6kEzWC5S",
  "key46": "2CLcX2XM5PFdyXzD2gxXZ1ypVYjd1kk9xJZP1Q2u5GVgv6c19X8iBD2UuuiVx3Gws1mXPpCMJn7Z8h9dumtg5enU",
  "key47": "svQx97ipfvPCQxchXzPKJLsfHnRqwW3uSjTsjTn4BzBGsNiNdiHQgG8jMaAVkt1w16NSWAEQWxVx5CBzT3eVNo1",
  "key48": "36dWiZz8nwEw8kYHkrs7zbYRrhKCmEV6fkaSXQEGFtJBbaAr5fiX8himTSJXLGTpze1hU5Ex3WGLCd2NCZdnnztg",
  "key49": "3NGkXWXSeY1pRFiR9KdYiTTJAksFurJrcM3u24cZ8iucEX5pEPhXLicTXZaEv7SuQka7ypWdpqVNj93uJ94goeuv"
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
