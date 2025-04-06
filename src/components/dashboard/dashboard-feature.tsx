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
    "5A3x6LhzvgUetsQB3UQtk2wyEzj8nHEicRMwFPNBsZEaMZVjYfrxN4KjK4zsphk3PQdF95iqcpqcqKVtUF9F8z6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uyz2Eru7BtmEQgXB7YTRYKUixeQBkM5SPKZnU3izfSXz9NVXcUBasRcLVyEKdwXu1ZFaPNVnTXUm2bVuYne8aHb",
  "key1": "GLeVvPvUHSSFCcsXQFZvTusWpSUrRcpWRMSMYFn2nZvbjSzxuB8DS6kMYPWDPvGNqkvPPEozd8yAR3xuBxBz1iL",
  "key2": "2JWELzRn94fBaBDuvFFvyvhnDaBM51cpyNXN9dTqSK9YaAJhv8PNBZkvf2aqHz3oFeWw54D1q6k8fpThAncht2SP",
  "key3": "36ncx3nTArU5ynAtDjpXE2PHrePdqp86RazNn8u2wPTBFrApoehU2rXHMa73GhriLHAxwovvRq4b15f6Px7ta88o",
  "key4": "4TiJfoYPGSH5aK2tQzTRkZXNYAcmQwEQ5acM6VzBS4bPUsbfh7ZUeKuhsU5g1BUWK2riDzwCVgxjSbDGe5czcTzK",
  "key5": "5SxkbJe4hcCesH1ZnnYRZbACFHejsBNcRs1CLZ5k4iaZpdDU51CT8M5WQ7Uu8Cr2t2468UeWh1cZD1MtfS6rcQPL",
  "key6": "ULBngxNg1o4UzDbFRyNZVJURfPMdZES7w3XKDBZGXABzmfKqxPcTriuHwtuYdFDVDJ7fHjSTCCqVG6HfNabmd8m",
  "key7": "4EsN1RmcUmTXh3e73hAwYckciAsYQpfVjqQLiHzTUWHV1bZSxvjHtnXBmsh7KcpBi9Wav1v4T6jg9kvoc2qF6GRY",
  "key8": "3t6BrJpQV26m576rvP25LN1cY1fWbwVkL6tk7ag6dLPucyH9snrhb39GvVyzAt7jos59BoW49YD9W3bv7zUXRXaw",
  "key9": "KjNs9GWk6aBdrZYzJ186yH7u2S6uTbYPneSChv5KnVVT3xcWa73pQXQn2fopvgAtF1mmkbBqfba85HXBYEHsghf",
  "key10": "2zSU6Wghow1oGkwepENhMPPZyRERYhz5euc5snk7nkCEAv469X19ivGctZLN83x89LZpcSHnq8j35JtwRfkbpy4B",
  "key11": "3e8JypknSAemZTtMWJqDz9wahTxNDSQCFfS4W6EJu5ttMcSN8TV6wKPRYMhRRm8uxM6HHFELSLYB5ra6EUkQVAsf",
  "key12": "xjUF4x1NSzcU26RmS83ixu2bxEUnCAgSEkYxAbsm2PXHT26QPrhHx78aBrc33kkEuYPaCfS9EnEDyGRLHKWNGVZ",
  "key13": "5jUfsYzgUshCfgxEChfxKDnDSvJeqXZruxtpB8JC1SoCGFkSgGwxs3EhtdXtx7cZGeLZ5exfH1hG6pDGuXosGa9N",
  "key14": "49AAPAeJGKuQyWh5waFRnkXPJ7XhHrDnqSBRrVHy4iN5XEiiEQ71aZ86vu1evMdoEeudKttZaQ3YzC3q9uLVXgVK",
  "key15": "2sm6XNRFusMwyddjxzhziXAgf7By21yxnicKdMGu4UT9FX5fCT8zD4YQ1cMJndySbhjnHVLM354CRnm1RhDmPKyt",
  "key16": "5rSq4oshYpvEFcCqrNhf4RbMYfsxGuJwXtFN6aXrwJGkt2ToLyDhatMS9sKvJ9rVbNCa8q58NCXafaXANN5A4EUg",
  "key17": "67GjTXAC3P4NidzLcJ5ahPX2cMSVYpGonwSnsKHH6fM5zWHYaLuVSxeaLiVPE8UMmZJmk2HBYT4yRDq6BXUa9Jue",
  "key18": "3Kiso4RUChUxmXKn6tvwqS7SMtntzgefTSL8y1C6SZKFGJGk56bkmgKii1FgDyiamEyAEUP66SZVouJXsQQvrx39",
  "key19": "cGWoLMvp5GSLA9p1M6XXR6N1h8ER6aRcwatnGZV6sAMqGcU4YUCi45ZVsEF9bxzbgecWdkJxccKw4M7qGJMY8zp",
  "key20": "4zEtcVvYGwM5oENx8PShSM1w2CArcYwp2nf692gA7mGN1e2rUmLUvzdWGx4xityUmHDGQAA643YnVwWtHfdS7PGm",
  "key21": "5ENLYxJzRU2cZH5fsaL6HKbSgfzUu7BXGD3qrt3jpfcDDnNLUdbqh6s8eeY9KDvh4hGFwJwcbWck4Ko29vFwHkP8",
  "key22": "3C8ZzyLctumYAEZK7AHTsZRTLgLZECaQ2YFHwVc5P56mWe8YZ5wdf13CyF4p5i6Q6gShFCu4Pv8BtcPEdYwmTz1f",
  "key23": "24bK89uQ3BLkCbK4fksGP4Wwru8aLa9hNU69LL6ku9Z4KURfXAYyd1NEpT2Aa1bRkHmPKqDCVGzda8KS4SQewW1z",
  "key24": "4PWtqokv869sUkGirefcGuYbUyXYvqoy4Dke5sr1HVq8Z2wYUuGHBsZ7EaCg1gUHh6Sxfk5ZQqddejGQSgrAWaXg",
  "key25": "7icyNxswixmmkGTurbjPYN8DpzRyJop2UNAPsas75C1AXnTEcktSz71QCsTnFwq4KiZjeyoMtdcdWKXgzaxbQMQ",
  "key26": "PszWhhhsAoEUJHh3XB78dtRNkAKnR65sJ2sHhT6j76AgPLa6LVXS3Ak7UMncQXXYgMTfsMVDjhnkHpxjSkypoUN",
  "key27": "5Zf65PJRnt9T5icWbspSMsXx5dh7r9gBqK3NtYUEgeDLGo7SgAFhNHEjgmBNDHF62cUqxjohghtkQNNfJCdTck5x",
  "key28": "3SNn2PKPxeYJ2J3uBsJC7w5tE5gaYSbeNdDLQTTTFs9envd6125xKXzEVzJH7H8zPdWnvZZ8UW3GCFSwwPXs8ute",
  "key29": "3JT95bMDPt6vRCitQDsW4ukSyEazR4VmPtH6XLxMhVCNwLGboCDXXBc6rNEzt3Hn1y5fDyoqMYrkhmKzWHWZWb5J",
  "key30": "38zoVDt38mR3WBLADqD49XVPbaUGgbqKwXYF1DBLjJHKaq3UEzJM9CZSHQFMvTVtt1hMijhfKNeCJbDjEn32mha7",
  "key31": "EbNPgMazJ5wNFHsDPazyc4cgvxrhi4MjtGnr7GNQfNq5h7emEZjZ1LoG3UsCjrvDLUJZifTGgTevkXUSPm7pvyx",
  "key32": "5AmXwtTw9cSm74JZQTHnTPyJKDf7yQuhGxWNv2dzsnLixK1v6VHrYUWtt26YQcdrEsBm7tNAe7EPADvdAVbA94Q",
  "key33": "4k5WxSvNaRfdFhSP5vBLq9tqbnaB4ANahDnrsFctAWLSKs6cboroRsKYhjmGM55f8PGyDXiqnFYRxaLBYoff8wYh",
  "key34": "4TYAg2G1HvXGQssPsN9ZxKPJ21GbtQXRmrfRx1Dh58trESWHQawmuAWexRDHhxrV2eTLeJwozfcnvbAsHbNGRbfk",
  "key35": "3NBZoyjojE6sLDoZYoNyKj4My1Z114tivAsvrPWZr26kvkwVW9ATHrQcXumKmu6g6Y64zDTsCkDRxkusbbcUcz1g",
  "key36": "5zYLFzoSwVL4iaiy6YHt9ohcbFG5fRuaYB56P7vmyJEXzpCRTsEah1pZeq56ZfrH8pyY1Lei6qhCu7XV6gpo2ZBR",
  "key37": "3nN7be22GP4TzQrR8WJdrDGwW7e5q9mjxMfUNUGLcMuFAh67MG93rZabD4aMojJUr5LAM8gPGC7AbieQknJLq5q3",
  "key38": "4iLnJgBbxBtuu8r1TwAr2R2VpYsCPK9x68BjrRTHw5obumKqna91F4CM8X6sc9a2b7x8JE1PaNuKg4MxxB2KPnCi",
  "key39": "3umBdiKjtCgEu8PAgy1LeXbVDRMQmKm1FqeiPo7J35EKABHE8E6Vks6GxsmxxszUMFwCxRfLGJmikFZjgBcnCqes",
  "key40": "4eRdMk7cPWYEP2nuSVFS1pYyrSAAFth9Vf8Cm1nddvjoBywZT4dpFqfuDoRDB391Hs4ZqVPvhB6GbhcZSWAupb6B",
  "key41": "5dMCd4GTzSDEk6ewzJEPY3WK32CvTPtRTXFRvmrQuztYaz6imiqBUGCmndKsJDvVgBPTAYraNjV8YAt1huBuixjt",
  "key42": "3iKtGgRj7bmMu8USoHiMjdzrGs5oUqKW26Yy41zU7MBE9Qf4SXCDcZajcU2KaXKofBBfbksz2D5VV57kqWKxJJ3k"
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
