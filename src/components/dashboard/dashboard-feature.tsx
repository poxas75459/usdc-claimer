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
    "AfCzKsMgm2XDxihMcjmVKuD1tx1gurwe4aPWu3ZxmNiCx7kayokPt4XR1EiqAdURy5xPtqykdX9N1jQWnFNnmmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29LqXfak2S57LkD4Tnp5jZiFVxmygNycKMA2znuFxMqrNxMCFWtvzuNmKTqJ9vehL6BsSynkjiVCBdJdKa4WFodx",
  "key1": "3g5Le6GXWvMti6xYSGnnAwAHgQ7wmvUFx17LiDDr6dbzxro246hPkUffG663rJqMipi4yhndfKiKrhMb7dygL3fd",
  "key2": "2xn3X5BLoesVSSLtLJPqjWXY9kN3boMBRUCKWpHKAqwPVTqavudDzE1qa7ciNj7B6jXCYved5VkCVrPAqsh8iMWx",
  "key3": "3U2JUowENysnVw7h5fcCeLqnpQgHGkdtKexYWnmoGYuaaa34JTrhBnEweNbvXxysxjL1hW8WqYdrymVqJ5byWerp",
  "key4": "51Y1jtXhMVZaVdeSS3bRYrHq64HaWHQEDpTUcpCMDGNgmZhEdVTGA4vdu1i9YxYG7BVEdUQrEjyaNwRzGAffw3fB",
  "key5": "66no2ess3djFPeburL1MGCmgnf9vHtY5oEDrckYLSePnUoV4TJNxbuHhaNVM3H6BNNHYbxFz8zYqya8T2Fa7Qej6",
  "key6": "2vurJwpuK3YgXcxkh3QuBL3bBRtFLGtWsNy3UyUdoToEFnBuis1YVbYUQEyX4uvVyJzKZAWMGLG2pXbvM8fDCkCZ",
  "key7": "4ZLAZeV7nRdA17seTHLdJLFtzCe69gARMLaQq2onqnwq28PD5myx2mazQaAs9yNUygKYbSzuYgb6gGpU6eiwcwrT",
  "key8": "2cXVjsvW555ep5HftgW3EzJTbAWgYy4s4Bh89daFNz2qqCqs5Rf25Sr5jVxBN53zti7qpZqbQtdhgPTnas7NPUdU",
  "key9": "2Xxud6w77bfjVmrpwqiv3xTtjmo6reDLiSbfSbvUrF9mBsFJC48BUVqctdeQUaeMtRukoNPKMNbKKpvPRHxKVnAd",
  "key10": "5junstpDYp1WfaapVPdid1MWNkSZVYJpJiKBacnBiStvQLsYRZui2gjgnVM8eghn3V3vWE9n8WV3EUb96ZFTPx41",
  "key11": "5AKhToCnFx2HwaAT1tD2eMbfdknNY6SiAj927gbiHyA3cJ8k1pnfjSrr8iKUCVoGJhA4KNaaGJ1Rvrh7fm6Jntjg",
  "key12": "3hSTdugtLdbz4F95dz4yjcgFGiFLwHchEroBhkRPK3Vz65SQTgq6Yk2xKEY9HQaYzRqWwsAzNA63jxx2DXxtHfHb",
  "key13": "qefWQHHo8cxXNYZTBvnG89fe3EJKGDANqAX6MEiUCRosBgs4Ta4FNGBBPm3mc3gq4Wz2bv1XkBmpGoLCnsoibVT",
  "key14": "56c57MSkLggBAm9oEstptuUj9PujkYqA9ihunAyw1XYEsxeg8VeTzkBJRZvrbjTibnvxMRbucAghxNML35GJqGV7",
  "key15": "5zwvsLGyF9iowm8vQeidw7xvmGdzJBZ1SyEG4yShHPcccC2xZdxR4J6iZ8knWZK5R1hvABdkeTidpBZAwi9oAtdQ",
  "key16": "5E9xhn7GqvRPZ8zWph4NBtXUtJGW6jTtJPrNnFSdwoLEfrF9pwdRoKtf1gg4kGrEUFf1vBYPM38a6AFzZGWHjSdF",
  "key17": "2DDxo3pmcBBjt4Xdetr2hfoRghm32NSdzhhSv4JPCNCD7oi3UXo5bBk2TgXYkPVPQRUjBiiYmz9VGG7Wa8UYmt6j",
  "key18": "3xgsTVpmKqZqUFrT9EDJGqDd77GAgG5BQXwMztRAxqEWArBUuxY3Q6HrgZRqKfqeXdakutPC8nWLijq3p2BB1we3",
  "key19": "4uFFKJRYpQhHHgjKrEzn6L7C1wKxxeUEMXhkWFT72wnvSX4d8RiNunJBKcUYZaLPnv1My6JAwW5HEhjUCsgziM84",
  "key20": "3T36X6fKidoGWizXyStJfM9aoaPMUxo1zHdH886awo9tD8NJfhz6ir8peS532cpq2FL7HRDDrRT6LCe7qENnSdZ7",
  "key21": "3jCtzPZxpWHGBV6psfhin42uRFbJP5LWDjgCbdv1aHiGvtTuA8bhBC2sqdGwb2GoYkvZQwLibWsgaECYcxZBgpPE",
  "key22": "4Exd5BHPb3hsh9yuQdhAuKpQPMMZRyZCyQHzBrD8ViLMccgLcs2r8azq6rFWcvYA55adkit1xHYCmWWznPrHwzp7",
  "key23": "AFBZ47Po8Fy99WFoBkDXSZ8eMpw4j4iAhZjdtBQMrefjAs93M88hL4pgER7WH1JhNupwfws5aBfMMCdHCWiJXX3",
  "key24": "62u9XTo4cWPYA4d5EkbbMaTE4xvkfZHpbgvKkStmjF5aR3qwmEhFiFou2HzEXFWMoFamMTiXFu1sd6Ywc6JX2bAM",
  "key25": "5kkzzLBXv43xLYNxU76WNtBAjv92g1QDjrwdYsQ3rDgWKHNVyDaWd4HJv22iQs2Fo9pdNxu2p57P7ML7ty7zzzzZ",
  "key26": "3ikdiss8zqRemxCa2sHZxH4zoDyAGsj1gynVsUtNqikt5Bwfuf4rkLeKfdi6x12rPDr655f8e97wXNQXkWxT8Tf8",
  "key27": "4cL4XzuRuMfXP2mgMht1v3b4mmvsYqzC7xsNnvPgCu7xfpZQBR93iA9RvVtHvhAbLoT62CKiA7UwwjD8kXpcH96c",
  "key28": "AfhiQJkRq2dzQE2F2oZxBrXtXeFr4HZXzspFVNg4YMgh7iyvZJf6UUN2mH2fAFHgKzpWzGdRA5Gc5xEAvoo43Ct",
  "key29": "4pAzfCndY15v29rQQCTeiMzcHTRe3cmzKYi5U2qzmNs2uCcNYQcNg1rqLkjKbodnUWTKtDQrpbsFa4ezBRHgAUej",
  "key30": "3LgqiyyRrkBQ4ZvedCkBC2uhJ9Y3GZf8YwbQsyCv4dWqdwwppwe7DHR48kuTERkBz8g5chSs1d35WS39RH8V6sVt",
  "key31": "3exEfr34LLZmF7HXhVrsSDS39QnDJdUbPoswacEtsuRqVMdKQicKQqMtPZBjRiHK77DavrytzFKTVt97G5aUQHAm",
  "key32": "32xxa6qhWJorabhNMXFJQ4wPqvQeEvxVZwHJLssS89rDBatFk6WWx53EC8HZwKxm6NwZRcRZTxEzKoR8c3EZZvsZ",
  "key33": "5Sko4DcYDQHjdcF9xZsWveP2V4xvBVZ8eQdwVp1ck8BK5LbfiQz4mFPgfCB1UbMtdwwcKhZoWbbeqMGfewKC2FW1",
  "key34": "2U1s3epS5Fz6FbZVHeQhaKoSfrvG3AHtV5JFxpxnC9JzSeT3fQQBX44VBSA5aNq2rE1dwtXv5BozPKuQzmhq1pqt",
  "key35": "5VnTkAtMDKi4qot83LGZxS7YsQ4TXUu6ebjSWBAC12g98e7S7Dm7sGwQ748uWG1vR62AdWrUdgeLiEjware2HnF",
  "key36": "4n7T2r5MkHtofBGTkSsFkMdKrjdG84gqSRoGEd2eAxyhYnnWQRbEeVE5DhAU1sstLWyPUXLzujr1bYt4x4YEkyrF"
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
