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
    "3B6T4tMS7u2k87qTVz996S29oCdZdh3QELJQJGySdPjGo44tZLnyoDaBQa93tZd4kDA2GpdwKkDBKVLSYta7L9nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vicc2G7jb1vWrag4dUPZcKjmMPAntoQpLZYqigMv6QYyDQhYnAr1zrjsDpVZ5F6Q21ADThL7tFY32ggXw3aF7aZ",
  "key1": "32iCE6GKoiidLkQB4TFfezhFS5ANjBdsDo2MTLR2uUSHWqwjCGbFsCbbR39C3rq3ywkAkkyKRQHaCJ6X9y3ZeysN",
  "key2": "epEG5XcvJrH5F639HFNfWezamkhqC4KH3A7RKHuVBL9CfcMGipbFNCPMLrgHJEbtLd9pYPnpLKexDBuxw2bivLf",
  "key3": "L8bHTFxMtfwYxMCshNhQsPtqsnnp1dwVkQcHn1VVt7wkv5JXDXE7BRsMvEc2WfgNR4srecX6RPdNjUV838SkYtk",
  "key4": "37yzn97pdSp7XFamVtN97WMpUhZqTxZSk8KxkSytNUN4ovexZGNkbFjMkKsFBFvQkjmKEAcd7cijWtGqvjZVqWi5",
  "key5": "5SSez3mjwfDxZpTHB2aZpuf9LtFtWw4zatpr38kess3es8BXKYuWnNmATiAjCVVGhTv2Fun2v2BBftuSwZXWfueW",
  "key6": "5tgtWNVRKyCxLCRJZBMWAyaNcKunLe8VQRrP6RA7HJK9oKyfQJUtEJwEEY3frCiRrzcnKG24hWBbVgKoRmysxh6s",
  "key7": "5GNtkRQMir2E1uaimcNShiBoMDAc9yGLa6pEXMbbavTZGvPiL5sucxphKoHAnisYqvG2Qm8cKKvw2poD88MMBXeb",
  "key8": "T9THJxfbfLBc67TQRZGmRNH2sEs4duX1JwFitvStTBV352uDTMJkqYay5FZmnXjQYhRRGtpsW492E1NY5jbUg6C",
  "key9": "XBwmQwNLjBFy6iAh9E6RGZ1yv3gkDiQ2utgWokZDBZFy9nm4JExoKhmQ27HL2HiB3E2mV3jsoVoxVrou6iLpvm9",
  "key10": "2rv5bXArVV2d5UCbSk1izRHCD8yd5wEtZRWphDRsSiJZym8X7mL4XdAV3G7G4kzMwmK7SNf2gksprMzir4x3aaC2",
  "key11": "wWNTA4TN2X2Y9Y2yYxFBLfbWiBYk4ZtxTaPrXeWFJd8sJof81Tg3T7CR9n1hTR8XEdwwPR2XubwaobqJp9r5Mh8",
  "key12": "4LcdXbLPLATZ762gCRMnNAv9HiKPcBj1M5twjLUrqdMH2Dav1imeMPS85kQ3iy4G1trbKFXxWTetYJNhqq5cdTZN",
  "key13": "2PV5BcFS5uxvNJ4Sn8ESuYkxU8ksVPTPAGqM49RQX9aJPnAg9G39bSpQGUc5g8kWi8GnQYPJV5DRHt3rW4SEfAuG",
  "key14": "22CngcMwbCP8iVW6xuhnPx1MKhAE9pPsHKAxgYXCgpGavjUbwpGRBBx1wWWnxxGpbvLRMBSNd52QJGZqWWKgaT8n",
  "key15": "3w2U8ue7btpHQvq83doUY9dMsX3y5kvxZymNNBU1L5rjRXDe3graN9PqwwhNagwCeKAM97fNHgwi6B6ToHH2KK18",
  "key16": "4DGFj4SMxuSodfHPBXSgBaZwisgsPjgx32kEBAc31LPoquY9LsRZ1on2qLgoq4X2gTmxgaaJwKD2moxCzgsfa2ae",
  "key17": "2DWpnryHY11ESwa4avNcpaxJimDLKV1mRKHQaJddtySfnL2mrmFpXxZV5iPSVowtEGWYf9Katg3jTEGqgDTEbFQ6",
  "key18": "4AvKtmSS968tucvmDiCrKSiKqoKfsXZi5ySdtpX7nmnrWAVER8gc1jeYa5z4bnkm6MKs8NNghZ7z8RDUCV1zq9WV",
  "key19": "PgzXksE7UVd4XeWEFKtyS7JtpuUM1fPNZksqKsEJhyjM6hKsPPBZesJQP3RymmXnZeLtjStzsicvEZ8JJvEY63G",
  "key20": "2Fv6uw2HsvqWMbhGseKgS7Fy9U1yEaaxZSybcmQ1Mcnw7hQPx13frAdHfG61MJpMrFtrCvRZm8PC4zmPgNUB2Tke",
  "key21": "32EGksEHdpJUeaxsLmwyrvwAsNuqyZxQ9Ek2ysXMHpTNHNbe6a6mbP3ArEWCaetQtZvt49r4AkzaUkLZbR6Zhtmv",
  "key22": "2DERhSMJW1Btrtp5BAQByCEAXtqnhrD2ThsL9ZbAegFXMnMEwHuUStaiid1sMahH1KD1g1jM2CZpvxGVSqfowLUT",
  "key23": "3pwA3wwxgFVemR5ZvdycBFVAzr7KmrdJbUo4fdSSUwKgeqKQW9KtcLQHssL5yr5ceGYSJD85sd6FSv9RE7PCJFeX",
  "key24": "5Wd8JD4WxsTZA3uEdEXwokN2Mq8suTEVhRanu5EZxV4iQi3TrHthBSXUckH7qCcJhc7TqQDWgZ3cGC3MoM74ka7S",
  "key25": "41X8G6RDrVMiSo6a7QGTvfFUziH3nbCPiA7BrP1uv4iVbA8zVQoyqAZuYLtDBi2NvLmhLp5HhmYKtnyv3e2AENsy",
  "key26": "3cEuqzFgXn1X1Me5szfM5Zc7Pbz5E4wBMmzL3G6dRVdGzaH5BDWJMAGEv9FvPxAH1sis82x5pGb9P93kks64Z4zz",
  "key27": "vH9mwFg4SmP7FxATJFtWzbdpZVqpv2hXhvoBZE161RMQmbD3RzZsj6UWEdmmrWYWSfcWngcH2ua2yQj9AQfEaFQ",
  "key28": "jUnCzW1pmGn5SS2jhoBuVRoBpiYvZjUcPAT9SzvYLotwgguRxqnAgzqfkwqgANdq7qZL2suxFB45jH1XM4c468w",
  "key29": "41YUt1Z9JsLrnDM9AUJ248hoQZkwXgxa5J1vz7BxvKZ7nQAkzhbPdVutET7shbTasaF4gwvLJKDhBPb6hRv3uMgZ"
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
