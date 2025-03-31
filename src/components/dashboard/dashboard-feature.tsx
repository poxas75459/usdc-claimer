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
    "9tVFoqWatdUxeQosFxc2XvSyAWB7Z6NKs1V5FGAhFe3nUoLo2xstssZhgkkJNYZYSHaiUy5sS2KX5vQD6fqRo8n"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "28M7qeW6aibyQhzVDxvbpPy1BkXYcVHsxkY6yjn5V5dEZVicwtLJwQ6YhSSb1TrPbGroLiL13vcFEkYyGTjQvmoy",
  "decoyKey1": "3waZjCAd1cPx45MV45HozrmUyTp6UBHGvYSyr79Xhuek4oMJ1mt16qJzaXcqtwybXbzpAhk6dwoxDVW3LARjNxoY",
  "decoyKey2": "4PyzehKCEySe658hpTSUqLC91GdYi5Qr5mAwcZcD9qZSUEh4vnYXL5ijyouaH63Rnw8Lw91e8AF1rc4jYx6ewWT1",
  "decoyKey3": "3y6L9CUucdGGJKotpz39Gb8a6KMKebiYeerwee2tk58sY19R6Eh8yDdnD2BXaVjsVJEJwSrjxqiBGVDVo8gnjwDK",
  "decoyKey4": "xTh7JtYH75iFtjBpZ4J1LCawjuDuoLRTwQMgtSDqXA1qY2Xc9DFK1LN2aheq4DjCuVQPZcQPAgFX4CMb11c6vFX",
  "decoyKey5": "582ywUE3N7gQF3Ts8nZzwVsZN1kCxAPC7ki2jAN5FLinLY5acMFqfeyW6kxoTM4G94nPeivgDzwZnfyrguC5cHFe",
  "decoyKey6": "75nZbRUSBBrfkhKq4cChind2FRP9zFTSyhNyzz22MqLYhXJTZ3RyY23kvTi5Mo7xhJvmZCXk1Tvckxbtyy8uQt4",
  "decoyKey7": "4r5jXYPbJBkgDXyg6ax1gCwWfMsH9xm945jcoGQJXkQsx263t8dixCVJRse3KPw1LHXYxk83KjVg4mYTRHAWN5db",
  "decoyKey8": "pac6PBmmcsqcNmMCtUrEfZxFsqvwM15B7iyihdLaoB8mMrkCx9gnpzk6xun5c9HTt2sqZyaXxYwoiHYFv4daok8",
  "decoyKey9": "3RweRmyKgojMefXYWijkdPv2SAPX5qt4xRT431DZyQmiR3kxsp4qkeuisUPPhV8p1Uurbdz5fAX4QC8zNK26UDPD",
  "decoyKey10": "3xk5YaJSJzbMxAr3TRgNJQCJB6QS1FpcJWEwSytdw8JVhbDRXAbJqFBPaym7n2ZcQkPDFUrzS77efBVKQKEuuXt8",
  "decoyKey11": "2hjkATGifXeqcvcyf5vfr1QYr2ZW78CAGHGyha5WQ5esfcSjD72GzYgCdJgmXkHDBgogYWzdCh2zCTr4cri4vHE9",
  "decoyKey12": "5XqJEr9dWak5KTJfSn88QhLonvth1fHJVPsmPZ3iK9WKwTVheVtgZjzHuext8xFwp8hrGLoDkSW6xVd7c4dRVKCz",
  "decoyKey13": "2yVsaWUzmw8yWFJa8JsuDyATJ9thCZrMs73hMDVU5DFfTpveSQNSiB8sSEwP9yCsc4fCYzb5HwfngPcHg83Lsc5h",
  "decoyKey14": "5WVmno8BRDjjCv6BjbjGq8rAYWqiQrxhbsq3DTRs2VNHP6pPduwdfpofoWvWz39F3oo8EHQjadufnvn7jzejmCSS",
  "decoyKey15": "49h4R62kzpkD6mhPWKmKcW3iXM8u1Fj7egWfcPWd6iWRPECh5AFWnx84Koo1uAJ3Uw2vTBZWUCZLEzR2pqtpdufB",
  "decoyKey16": "5WULy4JvryAz9ndF38cbKzCma4R5k9UeTDooaaci23k6bxWQkZBm8PwHXrYdqDDAuRtYHqjMvFzyUuaiuJJe4pXv",
  "decoyKey17": "4WC2rQzMemUPiJjaTStVx9axT3NQ7iCibr8kL6cyoVE5oTMNHJBeYyKc24nd4tY2M43y1bgmKcL1bcScNpgVqhqF",
  "decoyKey18": "5dDE5xzkpZQ7Q1yLBKZd3uFZkGg5zuRA4FJXoBQpYyTKcDbTVaerZhGiFxsCXGBecwNCAoQk9A9tfb5AJExCSdir",
  "decoyKey19": "4s1sAgqgpp6SLQUnp7q4eJBougxeQAWxTzKdvztdSZ19vBGm6pUotvsZneM7CiyB2Eq9uZnSGrTtedPHSL3mTaTs",
  "decoyKey20": "35sV3FYRDm8g7KsjdP7U89JcB3GXxqTQFeH86oFuxjVvkj3NDkFFDQbifqykVy2RmFyAoYY5bLBys6oVSi3deb2T",
  "decoyKey21": "5Bojni7d5Ly2GzEs9Wf9PjDbLeTbzKVousV7rS23xGpUNJ47toZKZKcKPC7CwNsWtrgxNVu475XhonXKjC6JFhLP",
  "decoyKey22": "45zyKRTLjcW5KebC5qLLPQgSLYPJLHdr8aRzXQ7BwvxRnL4divY1osDBV5DLUCCkW8K4AsgLkifXcFcifsq7ia36",
  "decoyKey23": "2YCGHN6D61HN7uSyfMi6Yin1iHtfdBnkV3MsmDNwLWpdm9iXVcLEn2efjLxdivhzrzjQg6qoAGyfW7x6qNp7ydix",
  "decoyKey24": "hnRFXkVdvi6PxkzV5prkZigvaoP3bXxjzgFZWhykuUSYDeWcoC752kLZHdHdzEnG9V2rdR3roB7p4QxKviP4RaL",
  "decoyKey25": "mePYr8T3pHZMuc6zK78s9YnF9y8MWkTyDAtZGfDoEzSHw83sjQvFCRzoTdiVswHnMLtfGToi9m9RyiY5Vq3mAFw",
  "decoyKey26": "5jLWGZUfLm91HJpydnUxmuJVYh83Qv15Jh6s23uJzd1SzhrpsYbDVXkPnfYTfW32EWBYSNgF6tjMUok7uuSkCLAQ",
  "decoyKey27": "VoJc9osaD3LWysdFmHdQP166rMHQmu7rL2NEhR74rHkkTnVpAXS3YKM63zcP6ZgidxC8TpBbE6SBACX7WHnY2MV",
  "decoyKey28": "ov8LQ487CWwqqk1oYdfCto6skBXdYUgfc6xWxpPq3a3TMCWdgWYWDGd2kQu8eoSmsGi34E9h1x1N6nMUdQo162M",
  "decoyKey29": "fAzVVQfQewqYLgkvprVLv8pWoAUExBeZnTrVynzkHHoh5SYE6PHhFVLb1yT6MKpwY77xax4XSujBcGuKjqNQkwo",
  "decoyKey30": "NHTNUvAXFj2uciFhYL359AEZpBD5vU1hQP74waozSa7GcTdTF8kxPdvdGaLHVEnwW2wLCasDon6CJagvVdXTSxG",
  "decoyKey31": "4W24H2Lusa7PCS5fs4QqYTbMG5LuzBy9BtMMLNouiR4f6Sw1ZXJ5YQSyQRfH92kgYebyyrbyc17MTi2T2SYTYFbW",
  "decoyKey32": "4ksz7U2FFXjYepViQYCAeHQxxRDwgx6uzX2cos3DeEobuSiJETg8ZLpsZkRhSzfwsdoZj2D2DKN5TfR4dXFwfRGG",
  "decoyKey33": "2znk3vjKyif7FY2NKgizC6qPNYKhAYrdLV42YVPP2uBkd2HGBFJuDooEQcjApxUhUutFiyLYXM1ns4xEyvMH5viq",
  "decoyKey34": "om7rE7frrdNHt22ddaE33JMrKu1vfGNTAdF16G8hjHePLzkxGPyMqKrzBXmB6rFFwf8hXy5qTvissoeYsQoBhDY",
  "decoyKey35": "3rbB8zKR9sqyB6Tukx6R4L2HioaD8yH5ZsWua3XzgNbDtZ7cRETnUcWTweVremQUEMDg2oWVsSx3WieVUpgjoqUg",
  "decoyKey36": "5ZVdrVcTDyxyfRDC8GdvNTgfn83sDTBRUBBcyoAtkHAg789LPTrHaKcptvs979pfSA79HVi4L4h8dNe7j1kviRK5",
  "decoyKey37": "3CP55JQJnCokbFQrDfjHpzwDA2CN6aoCZDvj6AAcX8f2EZwJABuiRSvk9nc82VFWwWSw2NUnPQf1MVwBBCU6ZDPB",
  "decoyKey38": "3ci4axpdZCQyPXFJSv2nvKr98tYWh72vNQUWFAdMKEVzExXTv8ih88UEFbDk2buiSULHfEtoKVRRzJ8EAWA69vZM",
  "decoyKey39": "wXRXf2D6rAEZ63Fp38srvm8tV9zPwvHX2iXcdRZ62KxAFic42DUXUy7UWTkZNr4bFM4tNhHzKbUhJHW6CEmJhoU",
  "decoyKey40": "5F4tXGZ4RwfxPpLcAE2aXmadyudHiRZ1QkTLYvYeTJyyFMknTspLTtBo4ptJhp4ojKcWszmNRzT2xqBogjRb2ANY",
  "decoyKey41": "2teNTtA6ZcwXW1GTDj6TsHDRuY9nxb8bTnKNGwKDUonL6fPfzELAQva1GnB6QyZ5ZfySoD46RcY18KtPciwWw1Tt",
  "decoyKey42": "2HecwGV3CbmDCxd4WiKEqSFWCZjwbqz8ry5rni4XgzFg37ifcG28ZFhp4QeMijeT2QDLc6RZcxBqvNGnWug7ZArM",
  "decoyKey43": "58oQgkqudDaAMjJya22Pj2JQ8MCFbvLtAPJynTqB3G23WQp1xJQFEUgNYEnVN5MyHYs3JzNvUsHne2BndrcVjHXN",
  "decoyKey44": "3inXW5AiT2J4y43Hjt7U9FV6iohUHXjPHV9iFLi4kuQLwsM53JX8YvUQPTgqL4Uen86rfvdbbrotmKaXLhphZCiG",
  "decoyKey45": "5JaYYQETHbgHzeCMR5AXo1KDoAJ5hL4xTQvBLU1zD6ikus49uT4rYo3HTvRrYesMwVipDBZa5EjCdp4ZG27ZHMVL"
};
// DECOY_KEYS_END
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