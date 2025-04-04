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
    "LkcbWJHRtUSLen7fTsdt56sGNySeZM6xyZ8nGxuXQFeejTDpGq9vcgTGPS5XoLtpnSUc9scA7kKxHVWAYcDsVUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SS3P2REFJbz2D6HqnjUhqWhdS2EYkd5z1ioDNioqFqYP3rD844BXUigium3HfCJzpcDEzGatZnxcV1WFzNrdqT5",
  "key1": "4baGhB3HmbRz7uspBVLjzemVxfphgpJbng4Y12WXD4z1LbUAMqmdJekwgdE1iNdqCbYhvusoBHh1nmKgRd8qJmyG",
  "key2": "5WuYdzWd6dLV4ect27iXPDfGwxHFNL3YJB6F6iTrFMY1HubYLACAvHwfGiAcj34vPf1pxc8UNSAZrFLDxvHktAzj",
  "key3": "43bWTiwZpnybHJieXxdJ9HyDtMf1hC9oQehCP9joQPKKaZWguZduk479YEnjcFuQ3ZiBXhVTyTRjh2TaLZwfyxYv",
  "key4": "4VqX5uqfd6d9Dw27B3deXtckcNcWuWkbmVSLRJFu6PG8TFEGePeT213aWPtTM5driUpgTrPHEwp7hVCsVtXtdQeb",
  "key5": "3vVpFftLDFxjqb8macfdTZnPKjn8EypNveMQGCJbZAumm4JWQjszgxQp6mfW1HTdZ8KvuuUWTi2G3DoDrtxDyY7N",
  "key6": "KVwa28cXKSmJtZSL3rLa5bhDrEYjyVApLzn4LJUzFZERkFukT9ukCBZvEYhVMzwkfJufEV3m2NX2s4KRjLUuJBv",
  "key7": "3dHi6WBEKMMUYanjL1LR5nkS7GpDVo6ZwpxhH679cTvPfmBK6Xkx15TgHnx4Z7Ff2hfxCucXPoScKtYYCzzu71ei",
  "key8": "4Fft9t7daBtEWivk3ZViDpKHMHT7e5dz7ua8gWGoDdbUfwZ5GN5NMHJd2xr5wYApCTT9VxrnwbUzS6MsbZvoUKN3",
  "key9": "46HknXrxcAaxcCaEReV1baR3Fxeas5zycFroY3MbG4WfboNSDCVUCVjkhuwchPiTxDaw17351sR8Bi3YVbbLEug2",
  "key10": "2aVio45ixyg8JsnRFpJvQufyvu8MkACPC5MFSU1BW3pk6bSJ2jVDquKiRUgPzFHrAR7txNJB8gcRnfbn8UcguKp9",
  "key11": "4hy6HqzM7iv9asfWGVuB7YNGJJMxJ4EAvX8KiLefHWN9wYx2UiLrTCeyr7CAoiLHb8DhHFo6aYkNbnysR4Tg3MBa",
  "key12": "5pH4pt71vPBNiBZ39xMmoYVMd5nP8RrhSm2RE4VkyMsYVr29iWRd8miNGN74FTiP9T7DVB7oPN34u6sVPeKeEjJr",
  "key13": "51nh3aezVt4gmKPvYRtRZmMGxmQrXVYaYHacyu1QUoJjoRvMFmkC8SxkZvjGgWi3c8fwDe84VHGNTSMXYhWSC3aD",
  "key14": "5c1ABZBp1Lfc2tR9NhSbyxePdfRBrCmqQKsSbUpNQLB4uqxda649qMPMZQpmHoNRS6RHY1agvD94v6fPag4PcTpF",
  "key15": "3FBN6QWBDSaqq2Est5SMFjafec6z21R6uKtj5rogZPkD38osNiRTw9semFcUmTbVbo3j1hAGWuwq4jG7curP52EF",
  "key16": "2FZPSGV7rH8KCA4NgArwu7517WfEFb9ZahdWAMvkLXqBeAXHq8wwe4XDyrbsCG7ES49XYGJ5NfWwsKq9HyaSd7An",
  "key17": "5gtss5PEbP8ucEvLAoup44GYuiZiAv7iV88qyeVes1ya352pLTM8Kd7cXfqST3KXZBazSU2zCApLk5b4UXWfriaZ",
  "key18": "NGt7gGtbAgxBTnFKjc4Wvr9GcKKHBnqW1FvbBQRurkMR58Eu7dm5RAPMdWwiynMP5hjZ2EXqDYMJbGG7LBG1VY8",
  "key19": "cxrQUNfQGW6MTVcSE1EBopcGVfJMoDEwZj9TyBktjFWxA7hGmu8jKuLxh4srMy4ZGacjdPRe1fqH4oBFGGUWM9r",
  "key20": "3CqLNntkh2QgP5qU8gt26wwQ1MaaF6v4M1s8vZQR9jqXBdpJEEqabCQyU49BcCQShAYDnvrgEGSB12qdzJvgSVFp",
  "key21": "3ZpBCbZh4uspdbMDc4Jo61sRd8PmSrGZAumpsuj5pQ2fm4sPFqvdGWMkrKboTxYqtVGXzfCkuSaYNPy2vQDbkj3k",
  "key22": "5j9LbZqWCXqH1Qdnq94gnZfe1uNYMvxUHDJxsBCyjwHuPLAdQxJdL1JuU3JGM6PGYsNppuJndTprfqnPshuzUEtX",
  "key23": "5ADonz5M1fGj1NQoSzXnzr5BZNMVMGi8wDQhvNWNyiQCSVpFrmYDayXL6RKfoCMG5GzeVjb39G4ZHf1BCqG6fN96",
  "key24": "42XdoydKwCPosykryEPRi7zeB1kxSiqYZrq1V88Vp1vjGcRheBkQogqZ5BWvQTddXdNidZtFb7oiVH2nJfXDfbsk",
  "key25": "41ECWh32q8sxX4ZLjCCaiFbUwQCrENy2vQECrm22QMWrsY1NNX2eyuDFEPQCb4cYzgVjLGrQsqqKfPFPH5JNWsgN",
  "key26": "4NQeV1kkRr5cbi3jYdQJVDDtiEUQxhgYSTEEDCr1DUpcXmiUroab37ZRJbihieUwo5srf8UNdzo5iY8XDsJXWcQL",
  "key27": "4QhZVeRQNZzeG97tp7UAnzTnKfLbPG5cKcncCGSoYisbjNvQGDFvo454NAYxokVHtUZWyvmerw1WaHMXP3mY2pCC",
  "key28": "4uN26Fzpxb6V5nH5713CTDkRqLSWhGQb8zE6RbiE1emRf2amaCS3JaAomQ4vcb3V9Fa11JXZxUigwRM98AEs4MNQ",
  "key29": "3EtrMatbsd8Mj9J2vGp58QAmL3UdTtmZS85Z964mKVGp6c9sKGSHdSFjGxbpg24Zov813qK3RU47FRSn1d2FQkAV",
  "key30": "5Tz3HW2CovFSQrvNVX3Xc57nWZtPMm6Y9nEKXCUGRqXNyW1RATSxQir5Snt3p83WCc1EKgtJQvDRBtv1Ztj2jP7R",
  "key31": "44YYyfCBdkkMRvciZPs1P5Kc4ni3f3E5FGzUyHJt9LKfXbuik5qmAodYJUTYa2kfGFSRC3dgE2i42NRH8tB8bcmx",
  "key32": "MupQVGUZp4SpDTwmuFxQUsXzZhNmppE4TYMp4eVKiepYPi2ueFLdk331537RMwuKYfRztmGTKPqidQZyeShYyBi",
  "key33": "5GAAdyxH2sSKnQ3nudQVeh92f9bouT1JMEccuM4hrNh1enusPaejoehz4b2WzJLPJY4h92XG9mMPdvBz5Diehqf",
  "key34": "4nkLYL85QGaMteCRxF6hsWvvHG8s8pNtnyCSKCr36Z5yQTtkgM1B8Q4BGQvZxNPH1C6QizbDcKuATVTnE2sj6cyU",
  "key35": "2EqCYuVGRhsQGKBpAbwFnymNqKcfQcBJC8Lc4VUitSXpErwQxjqKz6P1kBQpDKmCwKUSQtZszupUvFvnk5eacoWy",
  "key36": "3iJ6YgQAt9iTFJ4pGHEqCLRm1UMXZSZdYvhYpVaCpe24Bd4ngntJ1wXY5mpKiS9JvQjqZosCfQTZA2WgFBtRUZLg"
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
