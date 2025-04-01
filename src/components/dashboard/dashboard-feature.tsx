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
    "gie89A8Y37p4G9CRvcZbPXrrKgzzux8rMZSEmCY1FsMHJYuuvymXQcv2KvXfvDHzW5ipy1V5pWSCmWHtLUQmnTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wc1LuMjz1ySwCqoqQmhWnrd9tUExj8dupTgtMjvJy1qnkV36ZPXrhftsdwGga9AShfWRpsWY6pMhynSpFXg4u1H",
  "key1": "2efqqkxCexF4BwXhiKoL5FnH5QUX18qCUWfiqyRgT2eZygT6ug5oLgYXCjZKKigSQ7DE67jsHWGXe2RTAjhPNdAa",
  "key2": "2tGBc6tqBJnHvQ6humZCx6Tg4bd3ZucEjPtJAnecrmb1iCn6tBD1ffGj9HbwP9jGZohqfyXt65JWnEwuB32UiJW4",
  "key3": "RUHYbBFqqmSjKy6pAaw3PZeWrad4NQxAwMqxh8vNYw6RejJ5wSXxfZTDSmc63JxviKUr57A7kLBQetvCSTrS2ig",
  "key4": "3oiY9ZPMWQr3oStCV3Vaw3k5UmG1TLCmBBZkhiyMn9ADE1rKibiMw2Anr5246F1nhS427xroaisCccr6dj6NS7g8",
  "key5": "128Jhktc1jXGngRcJQgshdvDAhkjGYpk16S5MAGEcGRjdDjDzQRXgMkCJsuzQrZCsm1rggPrQH4VG1YgxS5MzgnS",
  "key6": "4JHB2Hs8RPzcPF7PWiST9THT7QCUsbM3HGFapXv3GfxwmG1BYcn9wWFDfnzAVM1hRrJamVzf6xuRCVvbP7Bvjw2U",
  "key7": "5wNj64T3fxQ13a4anH7oWLPZ4PppSpFf123dKGHtvnkgmkrLUQSuiW75wvibVEDXxi81Hxjidu1uoNjC37NvJWPk",
  "key8": "4o6Fm2Jct8cHUDHFsSX3oMHNXBANAtAnC1PFSj6kkECffKXXeU8ViGt2hikKFHJ87N9w7Wfbxu44TLmKjRik6cVf",
  "key9": "3qMVW6AbW9cSoCHJPxZVy6gFFVrY2tDvj53osxuKrV8nPD8yDRZ19qVWtL64XyEbhUjGLftoJwT6u3zxYTQmG4D",
  "key10": "Bf8JUP9EUryW6Vea7NaW5iTi6JQdjoCFi46xv1BJiMaaLb3BoqfvxTaY3vsBVQVGEs4kKJS3rzxvArKjsj9WKLd",
  "key11": "2wnS2rRAMuyy9Dt3BRNG6iDBzPZzAuVVo2WCRNk4oDvYZSLx8TzdQKJz2x3s17HNaQiaC6dM73TDxYpbaYWCGVjj",
  "key12": "3Es2VAo785XnFESEvintck9jyeVTgtZB7v5t7a4EdmfnNMZHrbgthoD8ykWiahvS9SUPhEtdtRhYF7PvtMXaJVwo",
  "key13": "36ZPxWGBKLG7CsF5LCVFyDsjBXgWYYE962ru4BpGMV1zpZPYqBhb9SXx6Cv5yLV4MpHuNm5o34G8MikkhMmMb2hA",
  "key14": "5SnXmZrkqNcBtNHw8Chha4Z2MfSioUZ8MQktjCu4ysyCbactsG5KY12JMEtJJEVYX86Si3zWPaAQuXJd6xMKDSGN",
  "key15": "TKe5QfaZ6CCWAp7awowzVtSWKN7esjhVUqZPQzmUBDPSJdXFQ3fnhr8CQZgGJHNrrR9u3Xecn4ofNmb8P616pxi",
  "key16": "2ib2b3uHcvRar3FHyA9BsxqhmGxvaKriDLKktzcWAb5Q831XFvKqFcHNdwXME8rN1Ja9skvFiBvKuYYmwmRp42VV",
  "key17": "2rBbGBjBnPcCVHTd5gzbkgCdhccmZ262oBh6TNBWwQGf7CLZpy9WDNem58W4JcSTFW6Q2Pt1UbmQcGDk7kxvfx4Z",
  "key18": "29F9bbkrzWcSwThRgXmZnSR8KC5c6QgfczGQCKFcxZSHNV7grxkb8bV9djiAxpECfBpkscc1M9D5Lun8dZAKphro",
  "key19": "CGV42DFo1cryPnES9vV8nDNmPMg3iFWqcNauwye4tgBA3a7TzySp56kM26mKy9RufWZ1PxAjeGztaYwvaYMMUux",
  "key20": "2BTcpY5LqhLQRtKDAiGSQKDwgmkBz8eGZX68ZgEXXXvdb5idQ9YcewEsaxPEZVd8pJPoqCbhHBZin8mfbp7ZPtp4",
  "key21": "57LN5XfpUhPXwDhpiqKZtx8Y32PDNedCDPNbg71jD1zPo3sMMMaGyDaUCMuJqj6xm1pQeMAdA2rFz9Pjcg5jSoj3",
  "key22": "4CfzJ8QEZ1kWTnwDMa5iFMCh8buGt6SdwMFPQv3Gm1Pd4BUc6DpyzNab6ezrFViYTcADAEy7BTv5AE1xyU9wXnxE",
  "key23": "2dcYHx8s16GHk6XJzRnx7Qebc4QbvCfo2fP96s68bJm8413f63gqDXhkQeSWXQJz3Sm6i4P8JryLCzinLa5QRYeh",
  "key24": "2op6hpqTxAnJPNeKgs6BEtV5QLsw9GDaeZCzXbKUxc8bbpJiUD6RY5TyKb9mcqY4ewLFm8Vko41QqTmJi1cysUUY",
  "key25": "4fL86B3qJuVf4gCVqksCDGmo5gWmQP6hVVidiChu68jbJ3FkERpL62JwieNBeKWMM8LhYapzSPRiRe3TDP4HmH3G",
  "key26": "2DYMJCDXZHe1bt6de5uv8enin18Y9JAunUcVbJvB8xK4eVjWS5RGP3Jo5qZGfq2UwkZNNf8i9gMymDBNPVwug7qJ",
  "key27": "2GY1x99xYWv1LJGiuAED7ssoYjSeAeUnk2Lvmuz6F8T7cWsvqAPqiDWi3T7fFRUk9nfUjVAaXfHWHz2YbZzK2u8K",
  "key28": "25AQAnWKbCexmurUMc5iAZmqiq5vCedsdYz1eKMAzQ5YuCryq7gvtbKh164F2msQYz2Bti8MgmchQxmJR9q22R76",
  "key29": "45vgE7P3JG7hp38BTrXRDeoWo3mTxCMEsCcoQbjJrosBwb31V7ws9mfTQnaQ9c3h6ArGF9pxgFNyZDbiYHmTy5H",
  "key30": "3ijrpRQteSVRptxBfM5rvhsoripQxL2PoNefzw99vhRytbd1LT2W3ANmVoMR9sgJWAYFpoxz3cfHxoRTG3ofNBd4",
  "key31": "4ebr75UAVdw1DFo3NKi2G8qXSkPqbNiYTCwpfbw9GMf9y4cCUFGUnDnEyNLkvyEtaMARJB4zaQZhm919NNZsdzp6",
  "key32": "3uAFJaCztw2WhjLj3QQMc71bja3HuDrEhxuUxaysoVp79NdN2k4KxTdXSMnN6LB64fcdHD5QRJ4hY65rXVUj5hyq",
  "key33": "5MSuPCEJxLgvXQ9JmUG241nqf9JjSjLiDzis21Px1ubpHqkrdRsEcftRYJNM9uon5PoYLy6BrhBeYhajWWxRV6Uv",
  "key34": "5dJYzhXtfmwebfp79H3n9taBMJUdTz4vpkvCvXVis59yqv8kDn6Wz3ysjycveDdDpmfME6GL2rrHttQpL6b7oyu3",
  "key35": "5n39EEfGHR8FGPRardqsqK6LWBZULnc5HJYYbvvnRzdEAw7V6jBBue3W3STqAinRsZmfmbwmjuig1wgN95RUMGuq",
  "key36": "4n3fUgewHkkh5j6iGsYJotkudvmvsDi9vTQNLD61zGYheZKJFQCCHjUcxhpLY8tvbBebP3tRHZmWb5Nf2JVxEwnN",
  "key37": "2SUPdrPpj2HzAMedr5o2VnYPZtptYfDuTpjpZNtrSTz8Ljaqnrhz8R51TKV32saW1jeQm2X9Kbpd1p6DnNf1McaX",
  "key38": "67rcWNVYnHYAAwPYpkoz9ihiHMyQqkkscPe48TUkKUFbXdapM9LG5UvpcyRaYb5CHxJCyjKivGM6cXeVrEF7CdCH",
  "key39": "4B8qd1qipvhDu8CV7XK6yoKY9HRs7Vy3DeLo9VQv5kcUabSXXntFS16nUNizFqGDKuChHrwSQXuojHNoNnLJ3m71",
  "key40": "5GyuGdyD1KkBUtWxVjfNMxV4k3KsUPPWmsxtM9sXu1QkjX7NpTJgWbdG6X8qggtHpqoEHTYRGZCDrtdWcF8aUuGQ",
  "key41": "5pqYMzDNfWVVRsxidgFzfoWBsCTj8VJ1z73ZtHmarZVHncc9JzRFCPe1rJvRmWRVchdkvWzfdaQQeXsTpPE8PJVW",
  "key42": "CTM6piaMunLToecaysoG9UT1ZPWa5KMEKRPdWYfM31z6u8Wfg6w6WNQbSN19UbNHZ6JRZhR51AwdBMEW8mzkA8k",
  "key43": "5rAeehB7ZMFQQyQGoiJwY35NxbZoLF8ZwE3vw3KGF9KtEj9YL9VGNLj5pWe8LfMdRSaijV5NVdY3oCnd8LmWPZzb",
  "key44": "5JS1b8RitQJHkbPHQMQViMjASkSjCznRiN8KdSmw476qM8TnUcSnWXbwkCpdgKWRBXwyywZkTScAoncLjHXNE51A",
  "key45": "3sxgmNMbUS2AetUxdopWuwUKuDD4upP1g9kZ89RqoxtfPx6UGT78gAdwmMp4FpoTkqYzeWaqptSZPaf9WN2ier7h",
  "key46": "45V9o31Cv5nM4RqWgyTfxFf5NEqF1a5gMoujVbot9RQTqVXGRLgvKmoeJKwKCHGfvmpXKMbD8Hm5SFKWCQEkXmdV"
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
