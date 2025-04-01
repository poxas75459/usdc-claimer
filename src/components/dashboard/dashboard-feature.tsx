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
    "3AFTX9KPnenFbKsXfjZAP9s4kCZbNqgxCSkTAnfz7jvDtyQ7JoUcrae3ruukbmDeiDxkdDF2V9QmcAF44gub5XSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ms1GNamKkZrNtLusJg1kW9nSTWXjxzC67vt3upyky8mE8jeUpEhwwyEQmTSVJ2WszSWzaKU24hRrqwwcUy8Ecc8",
  "key1": "nxn2MEXH4Hah6rJMav7D4BZbinNcgqL9D1gMPadeX9xFcKcmwiZ7cyANiGUUMJhGSjoUtpXHz2XuTyvYrEE3LMC",
  "key2": "m2GMdJT9BsJpikvjzr8JiGGp4NvuSzZoXGJU3EAyRYL7e4bMBbgZTa4qoiHubm22n8UGBoCfTWPT12KmX87ssGv",
  "key3": "4D6MiZuqzuV2nXwAJu3Zzfs1XVP2AnDFB59r1PfiX4FWXmDBnEkL6qoLNWAQTxq1THGam9Syzpz5upJ36arCrMM8",
  "key4": "GDBQ6WY8ThRssnoQ47RUoPReSNg7ad3H8mxPXR3Kj5AyLwo3CSEBaYrq3gxJZLRzqWnGkLTPVhay1ohha1Pq8eH",
  "key5": "JXx8UFCJHQQkbEgqZMP8rT2VN8ohVfTjnmsZJ8f7wG6psUTh7oXzk1ey7sNfwFZ4ZrBJkmekEQSH34jcAJfeWRb",
  "key6": "4ET9Gh68xTVZgf8y4Ynio2Qfkq1GpSNXdufYknwoQN9fs3kdXQ6D3DoDWbXwfvjBRA627gsQ9sBRqZuqniThzDZH",
  "key7": "39B3NRo8vVKpquwUPfSFxRBgMQFoubP49HJtpHSemRsi1Gz5vnnX5DHMPDQDsF4cV5c2cBAA95ynMdCBxNZHeHx5",
  "key8": "31ZHBMkNfXybbCFMG6aH5jK6jaCdET6UXsLQrnYifmE2CGJKF3rXphgEWGVkztdpkcxjcyXBkuqpgubR2zGzpbfE",
  "key9": "2doQr5jQeB633TvzcS59YnUDWmgFsSbPAEV3iYPEjMGdDfq9pHCERmzDbx4tiFwCPzrMP6RDHzrEV8rL2PiPedTr",
  "key10": "5m9Tu5LDpvSRHeLM8p2NHEELw77UwnfPKyoGoBwX4xNVVcFJPJSbhHENrHfeFETfMdXiPAM9nsE679opeukwk46x",
  "key11": "5c8hE7W54CDxZWrXSc4fm2MRFPbLC1pV3ymCPa5VHJ6a4NsREtPrzcTQAh17duyP4enxrZwuc5Zh6R5EP1KVnd5Y",
  "key12": "2AQbraEzqgbGHqsVr4u5YX92oA7wU31g9GacH4ceHX13iXkoctsqRFkzsHDZrYsFxkEmdzt233cyNydWEwyBuSAP",
  "key13": "5Ae7ds1xWWgX3XBjuqydtkW2kbBNiaozcP29VWcsPxZwD2GnZnotiXDVD4g7kLgxMyrgGPppe78qBoxFssAhs2RU",
  "key14": "2ChbyfSDP1ALBfoA5U4tk6GzHbv2WD3zpjYutrnSUCA8VozzrG1xvruX7hrU31tMYjqE8LctQfmatdmDeYsVTYNb",
  "key15": "YqJtBWWFKo98bi6L7UoqGTXjrGfu3M5sLgj68XUHSWJAae6KgbRGENDVWT2rVnKBtEXUUTSSPbus54sC6a9e3at",
  "key16": "WFB3HGtRrgqKtd5EeAdDfN62mAoPXYhjoAYdvy1E3wLG3HUPEjkGSQ3JAgEH8813id35oR3K2T6eqng1kt6XtjX",
  "key17": "Gq6y8n9CoJ5CQ4gAXUDNdxEwgY5o9extaYtzbJezUZzitQWBKA1R3skJ1QnXXicSrPDB1fZMqfaCZsmGbnzjRZR",
  "key18": "35indKCwtrN8vexypMicenM77Pg1ramSPSFecZwXqcT4rE1XNcDoHAGPQQdD44B8HNCeR56P2AGmMCy89bkBD6hG",
  "key19": "2zm5LH9Cjim28SPk4f5VfQx5ZE97QVA3DSrDGjCmHxu8zHRJCn5H77jwBqho6fBZLXR5tqn7ep2spCFCkaRq7EkF",
  "key20": "5jTxyQK5KXNU7FZcLbK1QrDLZMVV4eYP4cEK95K39MT8m5Fq5eoQGjjSzFqFpycQ9md6ALQZtARaeyTeN9LeTuHF",
  "key21": "3ZKzZ8QU85gfmKbzRrPDn6CfSjcYRVcEKuaN3yRY9E8EtWuVH9RWYUrpRYUxpWdwFy2oigR1onkKwwpUMhuN28Ln",
  "key22": "6FVUsuPhj9Gdsz1EHerFMzAGxA74AbCg3azbN5nuQgKowMAazhR79m6JbB44cVmJ8dxMsZ9XJYUPW5TfxH2EDJJ",
  "key23": "2mCiD7FU5Hari5wYF3um4pmHutBFa4E9EndQYMsXz3hqU8FDVSCw1o8nwDeFaPk95uwWfLnRtmqa2LXMZDXktFi3",
  "key24": "3VP2WETjnCBtM2Ksq1vJdcXbnfCa7LC6FrvkzWVSvmGFkf3xXJbRHasuVpqFMctxWfG96LNwGZQ4qmJJj4z4Tcqu",
  "key25": "4Yv5oXkY2NK6S9dpi5Yrd7RVkhk3xPWi4GvAVgEAoJXtiS82rYi3WXc6Cx6b1CCkFgy1x2fSg2sAd2XWkkccYE6p",
  "key26": "5D8Lu6stg3Sep6n8aSgrFPWWoTzpyo16J39sqSaMRhoTnHBpb64qne867N1cy1KRgRgLhq2TvUP9zrrQrPH7zfBD",
  "key27": "64pRszq1bm1QNSfxLHnWF1DAzJE7GoVh9nER38xr8Ra7MdSevYY62zD64mMkiZ6TZAZvv9GK5nakEjiKzMP1nWua",
  "key28": "54UxF6uUKarXndB3VKrtpZ7F2QxFFTpYZdofTRt92t6Hnn1FA4P6Ewhxedyxb4oq1T1QV6C7kDLH8rtLUExdtdXa",
  "key29": "79azgaMS522MqQqySgkh7pNGXNHfoxyW4KD4XSdMqrMmfnUsXYV2SPf8bRvtWHNHU9SSBCL44p9J5KJ2mTqCSA1",
  "key30": "2zGp7hefDCP4D4wrxY6EnPDHsWvGUEQ6ELyTDSF6JokKqMps3RoU8wBoyKdVtsEGURXnUs6rhigMsrQ9kEYZJccm",
  "key31": "5pHoqqMzUYHG25NpqemwNZ2qmoG4KvGvfZEx6QRkh6w2sFmJUFqNC14JY2JKbdVqihi14CwTfKdxuXARUwFE5A2Q",
  "key32": "ZCeybf6f4SozStHAcTPQ2xEeaaF4mieQyADTgmPJzahnfJ2sWDQ66Nn2hGY91pP1jwCWHHH3uooiJhrhB2uvUau",
  "key33": "3RnhFyYca217vBt7d5frzui6SFU8tRXrbqvuJi8vK6KSgviRRxVSs5vCHwU7LQHHhfgWLSYwXYCjNBjmdTgUQySJ",
  "key34": "2wemgftWmK4jACNG8tqXiwLkJ7vceyw5gq2tFAMGQk98JdtFzB4BY4irQ4n2LVhpUtALjdcdbRfjCTZ2WxrJNFd9",
  "key35": "vgZkqmTVVZPLNfJ2XyGCkaS3qpbUpNx1osKqaYxRMcLFVCLsXqsg1J21rFeZsmx4KwwPNHgpVCRd9tPs6HWVrNW",
  "key36": "4EUzd2qYzXrhmSvH4bbpSBC5kWNbynV2JkcCjkuU1RLn1RWjfUy9ppTqfvVhiNQXR3eHp7GmC6XGau7H4o5zsgac",
  "key37": "5UdmRhKvfLhzpw2ZXcnoE2mKfL1cFS6ec8xpPUDGh9tiCvCq6hSQhjbmxwaxLhuyWgcnZcZdpKvWqQT8bLEREryc",
  "key38": "3xjn87VtpZdaQcprQQM6LrAf7TfzivCHaFCQ5bbtxohHXgpu9hVa88V6HYf4mvH6TqgTSCVeoLGLTWHNmk43XcoJ",
  "key39": "3jHkZCysnJfXTmyH7a2XfLqnAHsJzegdhRCf9ZSm8cJB7FfBvx1jUpH3x7hphffaRA1LwnLVzX4xMvNKt69Tdamh",
  "key40": "j6YEFhRpKHhThoGR6tf8UAzwJ37WJuT5mmKSe2hgqKoAUHTiSAhMemus5gAeRucrFjD4wWWG1tpZ1aEoSKxTvEQ",
  "key41": "339vCkQrQE88tTvR3aENAS52mZriq5hU6Fu2bMxRwo6YDpYgt6JuVEN77qmKiKiBEZq8t8XTMEaJepgGqupZr5u8",
  "key42": "2dqjEYsMW3H3YjfALpqpfPHsaN3LLZQqNFAPBf4QQDSgionoCLrAmmFDtJd3dCBoHTT6eBrwqFuASS9sFvoFSiLi",
  "key43": "2gEGHHFnYcDapDHUKP63C9KKFEhkUrGBhfhDutpQDxo6Qe1as4SNF1o2cFJUnyyas3oMfHvktSWAinUdfYqnbDmg",
  "key44": "4y1rtfoAmY8KtpnA6Q3oBiKPZ7n8TLzjY27PNXDRUuZeWhCoFAcnp7qkShAsC3QpnN2PeGM8Ps96ViQBMdmASUCk",
  "key45": "2aAL5PDu7aeXaApge81tBfivedEKifM9xDYPw7zVk9ArxCNVbR9Ys8G1K8AV6hbzkh25enMN4QdAAR6doTtaqLSQ",
  "key46": "48qciaFPF2WJyJ4yDnMGdTBjjL2TspoUfny2B7b6oZtVoQgdXcv9UK7NPJWq6QsC7MoFh5wWNkADfiqFW1Nrqv1Q",
  "key47": "4YHs7VaryrNbicySkTEXS3oeQuQj4QwSmP398aQX5dTjEgYQ13Gy8RoqfPGQR8WpZyMxu5TmbGEUbsNczRC2ph1L"
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
