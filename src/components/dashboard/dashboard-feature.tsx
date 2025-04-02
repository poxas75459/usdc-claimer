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
    "4b7Dz46CKf9Lax87kLQtHcRFBB6GzHBed1MBRGonBfTcHHi8V3FJrDM4dwDDqvmY6RkdeMYoqmPbvaLMAizPk3TV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49FScNXd4z1bwzVpH6g1nMhb7xApmVazFmV9wJopoZVYyRi4UESbzh9wNgvNJbjcjK1VnYWo1LUuyNdBULNPjKNx",
  "key1": "5XstNi37ceWasB1i8AoTkp44TdkGritnzYRtBhqM22Q8sdraR15szaELCEg3FqsyVk5Yy8BftZefcwRyPxaAMgdY",
  "key2": "3RCUX2hwfM3CuHG3QZ8ehR53LDRUiVDRT6uUcG3dPNcN99uFeBU4zpqXCajE7bb7CBYxGaCoFEmrN4Aha56ahMXu",
  "key3": "3Ezk9x93m4t1g1ohjXtUjH1JWAXSPKd6PALEbU9qejaojTNV1hoRWrkYiTno5ViUa1yXxKi3yUn8rEnjnY9Ykxqt",
  "key4": "5gfRmskuuY13VpZqziUdNwoVjePHu9q6WxhahSoX6TKFjW4vYcDC8bpaUHbh54kYCqzuRWwTYvwWJZ7yV9XKXEVZ",
  "key5": "346hMTrSoN4w5U4BqodEMb6xnsKm2i3c2VyeS5N6qL9BToPBFm3DvTWXnpDSnYF4JVJEpGPYebh2MGeRGptkQzZ5",
  "key6": "5GvTjHVWLHsUyYp9yY7Df1o4NDQVeKYSS1cie6jpFQK524AySBZJpu3rxpBC4hFYGpb9wYVEGGgZU37DPgMLePtH",
  "key7": "3qhnBdrHb2p3tF1EBdBqHrm4wrhfDZHZ4PuiS6UBMXWZsLHsKLFnhG2ViJRhNbxWU3RvQN5YC3L2gvTsbXuqgJeA",
  "key8": "3Si2HnYkhCK5YQVxtgGEDGX1CRZKTw2SWPrqwpgaoyvbLCDkZNgLmeJraM64tjLMdxLFfxP9yP4Mbk3qTTGAPv5y",
  "key9": "2cae7QaX8UgPC8ur7TtD7UduYJrATzxhw9QBZe3Y5v7Z551xnejVGuRvmwrCkW9mTUvsg1fuj5w5ghsPoKgvqcNc",
  "key10": "25EAFJA3YYAcMo2GkXfu2YjapQqCSLs1vkZyLgcMx6rvWb4DycZoe2rWZyFtMotd8ziF14b7wBk7GyHr4Zo7biZB",
  "key11": "66ebh2Fu2GwWHiR7JwT5T8Y9d1RNh5DypK95ukV7jpNA44FzNJVbRXtAxd4435Vda9aGNenwx29EQnFqY1DECiTx",
  "key12": "2ydmM75pEgSgF7CitzudZ2p9Y8nNg5ppcDH91qqUNVGqpMzwyDQx25ybqdpkkiNgAq4fvCkhxQhitEhES1sipAg5",
  "key13": "kLoNsSnrZ8V9vGK7eanxoAa7DtS2fBByHCVT6HnVmQ8NnK6VXA6Yfiu6mp5snuz1ekeE9Sg74F4qje6jAcmpsKd",
  "key14": "4EsSej15w1vjW77eVzCHWWwuqtsWjn2CNCQHSbyppaNyGmgbCdnhRjUfy5Sux5Ad9A9gNpPnTM66dZVThudAnBKn",
  "key15": "3MdV5RThhgYudbLwUJwmefw6khFDF5gJqaFkDVh5ihwmMUMPsK6KiJ4GnzoFRBcrFc5zZCMfY8VayJ6dq8TDAH4T",
  "key16": "4V1VdJ8y7ReNtejos9eUuGCzJPmvdJngzxz3rR77y6kHrYquroxNCfK6q4hmxDm9gLLut3Ny3ktCSJYiiCuZ6LfZ",
  "key17": "61MisUHDJoymDb3xbHZL7qYFoMsSKtHAn9W13VXqAvfBYPTyo7xMNpGHZvyBL7WzpuW5Y4yk36apME1D9DFMQM4Q",
  "key18": "2Pjm3uF6QLP8fZXMpjS6ERoyB3RqC5jy44inMAXxZ6cJXE1sh5AyXHsTaLWfLKn8uerdiGkdneVeJbnq3tRQG3X",
  "key19": "5riPzN4EEaVZJgjY4gNR6gNUD7dzPBoMsDmesHkc3RE33f6PJzBMi7XiZMxa5F1EBLE5eom5DwBvhZSvdFMjLiTe",
  "key20": "2JqQfj6FAYy15r3pb1DWXzSMcturWDVjJL2kEZdVgyZ1NPGNs9pESQtMi45g5EKJJYNne38U8eSRspgTaonuWCsK",
  "key21": "5uFHM1r9vW2c28eDHiSgW8csLDuD6G9PzxVJ8K8grtCorfN1eJezzGLLPoqp5h5HvfDNppBoigP12qqEDuRz9K4E",
  "key22": "5pKzR5fGRsRQwRVzes3JyKeuhBuN4LaUSGo4CfBdZEUWE93Qgq9wmHXz3Rjic1rxcwHbuGn7tXwBMmrs3MREtetb",
  "key23": "5aYBQggG4R2At4wk1RBwrBX9kYcN137nbVx5MjztfysgVigVdFZd1V8AZm5HeYqiyJcR85VXFXAMZvanKbhCSrvz",
  "key24": "3xc7oP9tfyToNuajPDWVWXZLp8gzcxauZDk8Xda5u7rhLHk7txwgD3tWzQp13v7u7eYxZhbM4UwCogg7579KhT66",
  "key25": "83eWTUzFYduL2GaWPHtheN8h7dPSPZtXaeLCkTBHwunqETZMCqZg9JQZSFQwnbbSBoLG8oQcSnw7A5wiJScJuVw",
  "key26": "5SoDhfZ1V2kfszn192JXay5e2Yc8RH3cUo4u429nn5xSA1F1vYXVffvmhbKKLVoihucY39da6WSAaQfqiR1W6S6X",
  "key27": "2v2xuS7rfNCmybq3SWaKDFidppWrzFkpZLqiJhAc6jzL5RjY6CirDhztW7qx7Voop1fW8SDYiMNUKYKEyGfXyBtX",
  "key28": "tu8Br9wUozPSZ3i8nCKoBJSiaNz1nxfQLM1iH3qLGAtWfveUELDHpnZPiV3G1TztnPrVR7mneQTDDoecqdAxZqd",
  "key29": "3a9Wmw1iyN6dqRJpVpTzUcJYQN43vuW8XwKDCsLB5iFDiiZMtqh55KAvyakrur59bRv2j3cbEtiNR4DV2mWVQ1tf",
  "key30": "2tPeLtZK6WXp4Yp3waHQFbmySxYbgzWi8WZnrgPhENQRRqAgRXrWGj9r6kVvtJTyegpMeRsYXWJd83uTWHqPxt9Q",
  "key31": "5yFw7Q8T6HrUhiopjRUSzVKig5GzpWjLw7wcAg7DhRiKEfghvMtJCU1ydzERwSqra7QQGfk5uZsg8VkR8cXPMUEc",
  "key32": "2EYqG14JqVGYjVoHcCF6RRcnENziM3yfjaMCGWhNLe53nZ8McUmSUzCT24E3v94drw9RfCoK1LFKUh9mzmbrrQac",
  "key33": "657wavtrMS8p7QtHbNPN26veFFdpRznKysJPqzF1whDi6gkajJJ2sFrigBBgKWKLZcQE6aMnLFb6NGVxRomWmcdQ",
  "key34": "zS1y7Limrhz9t3h8r6GfSrKzTAkNZjmX1arzKjumz9CGgXs9HWWwZAVFL6wLd6yCcskYf7c1fWMfDKGcUNtiZof",
  "key35": "qGAAgrcY16RmQ9tsNV4u1cxWd4awLV5Fsr8EMSHDbLtkNoAm9j11gPynWUZTgRgsTufTaUghTedsxcAN1Me3TxR",
  "key36": "4Ktpk1ju2RQVwszVQJAqf4uu4scRDbquSPnFXbux4gnyJ9swqqXspL13aG7Ytd38yh5VnqrV11PGzHtbLTAAjQnY",
  "key37": "4fKMyH4MaYDpwX9iG37VYqKcU82jaZKsZSrJQ2Ty88DdRxmyYzc8ErsWJyLbheMqoCq4Wry7Y8skeWoxWXWDnAjX",
  "key38": "3i2okHigtihXE5gH628mZG1m8YsAReY6wGQQ5Y87A2687gmMKt5LETuXsYFuAWM2Ky2kLHnTdcH2k2eLNpAYAK3X",
  "key39": "482Gkr79HcqACPSfJw4LSARCmm9JBjypFudjS5tMnJ7mjJAfs5qZNDyovkVVpafuZuvKsHiGbGrxNc1P1t7thmP8",
  "key40": "3cdpw84qikFRPjyQHRFc4mnhB57pZs3jaN1M944LGoD5oDQsGiRho1ejcPmYu9CFcxPMPQ61fH58QByxjHgLaJiu",
  "key41": "4LufLKRLvt17bL8K8Jnmt9isWDQGack9TSGKhwJUmMrtqsVCWLnwZd9dqpLguADv94ooKWKg243AGYqW5YtyRpXy",
  "key42": "3gH7uavpo1yMcwrMDW7XPGBf3naKRZzB3CgGLbNrBGDwJawz1XquutsERnAktPJiVxTtcx7dxUSfQQeSn431Ac23",
  "key43": "42s1fTvj33o8EPd48ezjEF5rWPyxVcAcuqyE9tYyHmNQdPVcyBMAGrJT4Whq15WAKaeCCpVS5ugup2mX725iKzj",
  "key44": "2s1WQmQBubvaEFVzW5iErEwQiswx53ZmkMbjpifTqxjKwsGZcbob7r8KrqZ38hRgsyuXmtNUD3n2tYJe4njXTH32",
  "key45": "sLEKKpYYMvjvcJ3LTo8EHXJ3T3mZbs6gdtzumdMK6JVdH4AC6WzKVRdeGgKJabXbBtR6GkhY3KwGpnNRhU6EMP6",
  "key46": "N21FvLUwmLsKMMbQ2KUtHHrKZtphbfVzJrhVgguvCSvwTej1wncHhwBLDqRRfPP2te5218ocwfUurNUb8CSEav1",
  "key47": "5HZz9e14wWJNqnduERcMhg8Y7ecqEdJTaWbs8iXbAD5bcWh1Kd74HtHeSgiz18u2kcfW1pjR8gu4FgeQx8U1b467",
  "key48": "yxJzVmxQvcSEhqyPmt4iwN5U1jpmmAV8poAEbycT6tL9GAAoQ2w1jwVbdWatsr3GQWayxeNR3o2avMceuZShn3A"
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
