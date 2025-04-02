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
    "2NRgtLH1ggKVHfgHyNG4pHd8GmS4wxN6EiNB72wXwuhqVSHaD38aVjXKbiLmhWuRVEG6NCkEEuLUFCyVjSajrYcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFc1gVQ8vmjH3anh1vHpU1TmZoiaFNTymFwyQDVAWR2xco2RGxTvJJ8KE6MWCU1neGh8zcPCf95DFGP18ddfy1s",
  "key1": "2GXDU7zNntW2fj4s5pY1Qrj3dL3Au7NoG9tvWSdYEQk31bpC3ZEQLMMbMm2QA1HYCQmyo5BWBDmmG7DvNSaYS4Ep",
  "key2": "4Ruc9Wftot9t2KQ3WvrkArmHndirdLv31rs5EWZghQQsZASiytWfK5LWh16aLsgqLF1psxf5KWsXLh2RE8rnF3pf",
  "key3": "5SjEpB8YYeRPngbJ1SQXbSxzsXaGoMjFBbS3ZYGTuJwVwqZVgNwbKo9bdKWbNqko3nPDjX9yvCSBu6APmJbQ9pts",
  "key4": "4UPMnC5XwuoXTrjZKUprMB482e5FPQoVuDvZnKLz2cR3nuJnKN9eXpSQCckYfHTmamVFXtD3F5vKvgpceR6ASkCF",
  "key5": "2rJKUz8UFEfDeFDGsdpWpbhgE5KdNGsFDEvQRBdwAbLu6CSwMe55bhbEDRkCjEYXw5hjWMvtdDAmh5p4wFMtA2FZ",
  "key6": "58UkiX181CtWFZLD7zWcy3gCUD9LWheeey37meC4LZesQ5XRaev29pYGgDT5JgHUv37XKJVgrYYeMrfJ3SSjcwzo",
  "key7": "2gGHMRsr7r3mfUGubuF4VftdYRjjYr31ZpjBRpugC6a8dkt2QbqypkvRNBJQ9EAQwLUVbM54kHsUxafhb8hJpnLo",
  "key8": "3rsG59Ev2Fh6Yqr3pVDGeoVijtzJNKrbLu6zpXo3DMaDbNbP9eF7DocMJHTiwmcdzTTWeTA73fGtSQZxjxCsTXzp",
  "key9": "4CnHV3dKWTGUH85v9ffo39WiprayQWi3VuvciLVyT8cF13kMETLXM9uhNrXb3V4syNaoqGDSdamjRx39U6aRb2tc",
  "key10": "2krfGvuCRFD2piuD2BcKDgqKp4XWRW8MptSBe4GkTDZdnbkoTVcQLTCR7pYM8XtUwstR5QfaRHms3QJbwJLEnQFz",
  "key11": "5MZ5NrFnMQX2Cca5tV3p2ZD61kNaSA8WDWZDmzg8QBCoB4a1XntokEMXEFoyWRPq7Li5hnz47CP1yQv124tAghGh",
  "key12": "rFC23r7AyiRf3NWwuitQF1cAhA8n6H9UpmSEgEyJdUB9CHF1nEmasSt3gSnryiwhTh4hKS5yZJXvbwvpPq4HjGZ",
  "key13": "3e5ADpX2g1PLriAvraHTWRh8uKa848htUa2baaETqDYpf1wungJTMLG9ys9bEgFmgwCqCZU4S24qa8kz85iurrBF",
  "key14": "8vXRwpcmtssPosp4kbQksUAW6BmCG1BCH3LrCG5kfjdKWUYasQcM4EqGjtjVf8ggGnNk8RydVxpuGzsYSzsmx43",
  "key15": "bnZgmTTvpkTWxYouL76eTKSk3eBhvXkAdmmBuHSrAXEqTPkMFyATyyK8YtYmgN9AbhCJJQmHN68D1qcQwtD2V5R",
  "key16": "2diKFtk3t1NPQReiP7p8kZkzdhTQYA3rXhWBHQi4yiYdy6pmBnq93D5Y9oYMScEwnUhJrpuo9ZV7z9o8oMHUYuyn",
  "key17": "5jk83qpzxU45Vo9JdW4s2fDo8MCfg4c9QrR9Cncf8V3QzfQW5g9SyoVA71xnWG2mCaKhVp9dSocwfTt21JHBRRRf",
  "key18": "2gKDLtKovSch7kBxFPdvJZGZCH2P8mbnyd4SL2uuAipwdFbB5UGB6dok4f1A45ZJACLSWmmbU1xeWr72Vd3P9MnK",
  "key19": "5cZZx77Xt6iEeMpTwoY3iAEKQZo3dLX2uVFk2KbmJwjdf9UGqfZRuA5ixjTZzq8Uow2MsP2mke6neLTZ787QBgMd",
  "key20": "2dE8cDHZdGTgdWV8h5eu7hYugpGtWGyWhAiB488cBtRzoH3qVGR6599v7jfvvCC5cGxK4nWRc9wg4L3dJ7HfTQhS",
  "key21": "4vgeidti4BM4dsEJRTK2uZ4CKuf5mULjaydGu1nbefAyqqrLQVEGY9Wi6ZSk85cjP3qjttDnsQoTRWEvscygFM3R",
  "key22": "23C9Bbxhzm3kBCPW7nxVbPv71yJ5HTBJT3ZxUuSZC3qhTRgZ3feKvjAXSxAzLGy3vnLbk94k6KmmsKfqcywiKL1M",
  "key23": "4UBsQc1nBaGMEnx3MK8ELLyXoRKByvVnneTkU8197hREKx8hB9rUg65vEbjqgjr2CiuZR8MoFL7PMW8DLhCqA2Lv",
  "key24": "hrkzCMerwKAFW1wHGLJP1uMtWpKaFs8bMGXakBgMe872PB3WbcKbhQP2MRHnHbyz8YTfYpNhRdCp5KpoVmRYX4B",
  "key25": "3oMtGokHKe61zo7trUGehygMZv6D5THZeWomuSTxyTi8og15XPdfKF8Gi73XNWrdZPGCfGCFginvmmAH9EkmL4DU",
  "key26": "618hUGhNxLqKwSf5gRsrrZ7HPNnFT4Rg5hC718KzLY59dGa5VXF6CXbCejpSSwekNquCT4UhzgF8PdsfamPpbsZR",
  "key27": "67j26gkkgxoZSQaMahWRYHU7vvUutVAx3Y3GyrvP8EZPs8gKtZ5rhhNEmJLTUqj2kEmZAfikXiomeXN2oNW5gDa2",
  "key28": "2zvjpsgy9DY6F2Ekj6EDNqhhV1zh1rswnjWAqQHPCsZktEyqwTRkqHXJHrjEZgonbedZWs9H837XYoG6vBpgiFiu",
  "key29": "5yAuKmw82Ggi2AeXdjwq4hBZTZRTi9CU4rbdmi8TF7PHPSsDxUNBtCTPWnEK6F9pKtgP4g2oRBN9uGE49XHre44a",
  "key30": "3YAF6TFvU5XT5n9HHcb9yf37y82eD4JHj4sWAqC81dKAvFKYeGuZtFtpi13LNVTgMaLtBUjDnwHvkMfjqkF38cLb",
  "key31": "65rbGaK1K1BXEPPiCmp288EDZHgVqpBARNEUZmGijGvto3XAV2Tg7qM3xjGcvWAbyLjfPWs6TimDbq47HsxsybRg",
  "key32": "51Arx3wZWJhw5M2eptJ6hZ3idu1hEFpo94cXVLe7hZ1Pit2ct5bR59ivrDSG9NrCMwVy4VpG69kHPLFUoghb1TGL",
  "key33": "56XvnwMWMwd4wwapCmCnRT9KpqgLJ2C3h6x3YG6Ww5fAB4wRRPbWdJ96iXywggbMhJTLSGj5NZwaL2W9qgWu3gpj",
  "key34": "2DwCyQxT8CYutyGSHoUUAvDt3nGFiLkdV3FtF2p7TPMVpEj3X1TSB8Dk5KdZVhcPgGi7XExXAYYFW2n7t3pFuZrt",
  "key35": "iPuZnwHfD8bEHDE7CMUgcWGwotfVs8nZ7JiEkhFPKynDnSJPwof5a81y7U4awUT7wGfoCQXTdDewaLksBUY6NXB",
  "key36": "CCqyeiFVfyvFbEhcsiSXqaEerjpMvebAuL1H9BB5SPnS5kAKPQbV3fCqq93H73ZdxVmfks799f2v7ajFqXbzyBN",
  "key37": "4XjzJ74LpdKcyeYWutv6c44pDyVkzDy7w7seZaPXfrZ84hLTwwGT3fXSzSJtfkNTP1p6ti68QsW5toJurDpavryz",
  "key38": "2LqUoCjwmhrvUdLPzjDGVsmxmsq7sM3iHdYZoDGCn9iKyeE51zyuiY4hGhX71oV9KCAorkfRRQ18QxycWcRsip8F",
  "key39": "66d2jkpZpCogTydFV7SGDtrd8xzxLpYjpcXtMtjJC4fJodTFL3hnPd1xXzFQR88a4EkE3zni5UAFPbkwo8dzn5c6",
  "key40": "2z98gNqxgoFgB4SA5KoD83J1urrZL6t8GX3LqEvxZVFvRiVdmAgEuEEo97No1EuVQm8js5AAN7oYm76aMMq8r2aa",
  "key41": "9Ced4JzqNN5om5gywigbia2PTgRKchJozaWBTcNDo7UyJNGuQ5QzL2HmUi2khgq8sLux4dY6h4euG3S8krysYgo",
  "key42": "5M87xnHrdU3zkPpSBF9phNUk3AAWFDi11xracd2DcZEqChHxTxtsAZ6sERhn27ueRqqCbnhfm58qLZsVGKc6hWyt",
  "key43": "3JQi3tYqffAVM1F8VVyMBwDnd6StXkAA9sRV5WHqPh1yCSPkA2xUim3qJJgfGE4k8L6B23xDsCqbVGNGR74vC12U",
  "key44": "mS5qsE1LtzJgnR1r8Trxvp5oNYqMXHvB4WmFmAdz2XtgbT7obzJKE2Y1b9jw9r45auYRE3ud3FueP8uK1d6NF8Q"
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
