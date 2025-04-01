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
    "7tGQC23zFhXzQkzME84Jsq96pHhEy5RKry5zTVAg3TFMBzu6yj4pcs6rwEry3Pk2xwL8gY2VthEBgt7fG2aDbL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jiRnc65Mqxu3eLnXwBjVUxYHCKD4bKSKdFaxZX8z4nhX7qNFYFJ8gz7LD6YkXufzupKj1aKtCYDVvjB8yodMiEx",
  "key1": "2WtqPdKKCJv2BGTSdVLJjLQhbkTfYwQnuBZR9fumSaLvD2SEQyUcsZpn6KER37KzgoxiMtuVni8hwey3L9wGFu73",
  "key2": "3fNvAxJ8mdFXJeBDoyKqwDkBFLkgM1hvtfF2J9n8i8FisDcHedjjZ6Zo5sipJdmnDoACG2kfTSa6Md2yCQs4y8iV",
  "key3": "3Rxx6CmS4EX3C64PJznRL75L2bwKL9j1ixKhuKtXfBwcsySvbZusbBFeMcWuxBaH4xvZgZoLA5zTaAyj8SmcSbzZ",
  "key4": "2PsVfmkMNHV9YkhCgcMzBTBq2R543ioEUyhMhP4SrrSAT5wxopeCQRU7UuXPDk9NLdd9vVAyhZBk3Qxft54SPX4m",
  "key5": "2i7ZgFt8uYw7yfj9pjQx4a75EGE5F14a4UkeTqn11og5w2jdpq5h2xKfTBgnvmhhAXHN9qMdTTRXZY72GgYuTnx2",
  "key6": "5QV4ehUaq7vgGyEju5PZR2DtNypp8dfV1ysmcz72UF1CqkdBTgKhCshLPhgBS7D81Zddx9JsS2DMe9hss3mQrqU9",
  "key7": "2wSKN1XrDKxeSuQNyqDE6gvAnTuxJzexJjBYtpodsUdtTZy4txa4gxpJyJc75xtAybTFBTLuT14iV5k25Hngjukq",
  "key8": "59W5TroQ8vAARPs8adhTxXeG1RGJ2hKjFBsQr8vS45zzZzymn77fN52RoMrmrTXdecAnimegotCNPw5pPrPzVpQ9",
  "key9": "3EorVosuDrrUcANqG5aQEPrUKzdjfQXcwEt1AhguQe9DLZBxXAfZmTtMUEKaHEYYzEG9e9VWTdLbpy35XJ6JfnaX",
  "key10": "3nfzrBLUEhq9u7whPKYJDJtoTBDs9nirZsQK5wZgMaUpEQPGMPbPKXQ7BNNA7wTXggk5zcYe1cjzRHEMK5dHcBS8",
  "key11": "49GhxVsWMDr7esD83uKH6aBHV3zM5hNXfjtZrxAEM8qXFetYscZ8u9o65kkMEjekc9EgneZijcAr64Yz38kY4nVf",
  "key12": "2a8K4GG8t3t61drRc24BVxhkrKf9K6fK9Fp3DhVXzgZrgjB6UoJQDeXeQzhodTziAvJg7UPXrgvZ4vaW19APVnFK",
  "key13": "3Nb8JAijhztB8EZCDRssGyJE1vCnaG8HL9HfKtuHC7NFHzGRwxt26mx8k2MiR3vC4y1uUnAczJs6E2qL2DFksns",
  "key14": "62ED75pZMJPQpJyBcaygPfG5MkrbSSk6Qt1s3GaDFEombzXXhVW7sWCCDKZR8QoiQhqCF8ovtpeyf58XAP1TE92u",
  "key15": "S1XAhGASLUxWzpBATbmxcdrw5ofN5pNRajbWwyPDr67QDiWMrLdfHQUkP8YCFPgdpxTH3W6ELnaCAtzWWdS2VFy",
  "key16": "2iG67riH1gpVQAbZ8Qnni76DmaNYjbDmVUi7Sp58tsaKLz3SjndQYjBgEMHZYguUZCXf6pVZCD5fP6ytJEzdWnXn",
  "key17": "617NeKQ2exotSjijgenxc7REcdYjVUeSSR54C1MQKStnrFeAqtTxMGGyf2x2RwGsTW7YxTr92sK8jr2j5yhE6utq",
  "key18": "3qDvNEVHCwfeaW5oKomMT2Qxu3nJ8GMJ2M8QTZvqjgiyFRYfoEVByZtXbqxMTLG2r2eyvcuH34ZmrCr3BvuPZDJ8",
  "key19": "4sf4MX4kNxwfrCUk77B6Sb2egwzSZmvCnWHSTPvRtVda24rtP5hK4AHRzP3CPLfdndE1TwLAEhqSfueRckTgtmCN",
  "key20": "4ciHegyAHzQrj85SrmjYXxnpuqsfGWdXAiCD3WrZQp2cWCQew4uMnPzJnz4TaKkhsP9VrGhfgTmi8fkgNh8hWmx2",
  "key21": "Mxrs4m9fL2uaN2S6tP7oMmGiCc2DKjgeLfCYePjoh2amwC2pnCCFMyb16uEWV77CqhKqvqxJvPaTv1P5prfuCMQ",
  "key22": "8gvgh353qFbTpEQu6fGPhydgGSHrVkHFejp3Q7PVQdzJ2pySeTJHR6zJZq85AUYBMsPNGPKXLN57ssjcn9Wre9U",
  "key23": "UqPzcYdZxzwKNVG5V6onWrDNFMmLwb8TE6xY4Srx9SBZgRMKwqCXadiLVXWZ95mR5We7pEXXwKG31ru2m3CPFji",
  "key24": "5y3cNNgbwR5VBkikhd1v1hZTVrCieRuBL2ZEh3jMpawgy9XkggBht8XF7Nc8t9EgYhExEyV7XnsjpUtDRcheFxiP",
  "key25": "4Saaju5XMWjd81srEE6FcWo5RJ4J5ecPtrzGphdZ4hQ2jRoiHSDtT6Ah6ijs2djYaYm6rdjmLFkwkW6vfDaQcM51",
  "key26": "3uFVfsymwQeaGBSQ4mx9hCixsZJwZHu9hA9jzveFxQ3WKtC8GxbHmNFkiuxe6zzuEwhv2EpogZZebwqpxQyDsSoh",
  "key27": "5NWKoYt2XN1sbXNHRurF6vymB5VqA9nwS6H3jTo8DVH4DY9vPkVyovZFoDsMvj2ueMEsxx5oAu3BhkfiLgRY2oYV",
  "key28": "ZVbe2eRqbCV58fQuvTJmkwt2nyX97ANsApRHNczrPshkbfoYgWtGSdVoj6J5Rw5vV11F5xLX3Loh7vFG7XnkCfg",
  "key29": "3Lmy1QTaFhcQghGEzuDL9det7QdHytqi8FxBPevXFwkL6qqMydu9X5t9pZLJR9YtvVowXHdAruktz6v2ETss74mE",
  "key30": "NsBkNtK4qheUgC6sAcod5w9xz1wyQXQ9nTwtytGniJEgLX7WcZQgySDtBseSjUxv8CNVqjspMFuxRWqAxg3Ycyo",
  "key31": "2nJPkBLAMuwEfokhdSa7JdX8pDBhVkr9qGotkgr41YEkkcRRV21MtVAr5qtr6B3iNDAzZK1PakzdtReuGpMnHde6",
  "key32": "5FUasRrCWGuxZCbV8CQgEULSoufaMMAS3Hv9xh74ZCfKgdNguUfGvH5if2cn4gTwoxbUNhxLcweW8NWk4tpqGWcT",
  "key33": "Dz9XQvK38FTFuYpgyY6XVgmxqnZjKHxBsMRdJKiZvvdhvgbCByUQEcChziZUUzRnAUVJZjVCmR9deP8qdTxa6SX",
  "key34": "5Z1LbRmnmihx5sSjHUmpzV4AJg9jNxsaiaZZfH9tF78H3xPTdnuM6VBd5rfDxfvirKBK5Zj3QPFvY1yGHahfUBdF",
  "key35": "5TpqERwQtUnf3m3ieub9jMyRSR2Q9ZhK7zSMqwbv8Bpf5qW3FTDk6KPX6CNGHMmMJfLcxWkTjxRBWpGhSwJWdVQo",
  "key36": "3Gj31k1iMHEZDFPBqkH1FLBrFdNftHoCjYUkmQ8RhcGNr7bn9zNWir3kG3tv8qzwD2LufBfbB1FFgaXKHfbzbott",
  "key37": "ZZZdPHHiwoAA1L4VmEXEyimXBh6VThWTMbhgqFCFMfba9cytC5jcWyPCHLs8qQ1xCFA4R8Y2mRxB2YdX4uG8oAB",
  "key38": "2S8ZQEjd57nhbAzH2oVcH1VvDqdiH4LyCdxLmHQWFjtRe1NbaJfwYV9FAAnEQ4sZh4eNKmY8JXZ3BwsDM1GJrztj",
  "key39": "4KzsjFDTS8tFCe5MrUjNGeeJ742LXk3hXszBHZnLQxpUCeiqTAUTbkMU3SaTSQdCFhjLCAPc4mLpkseDscV9tcEd",
  "key40": "cz5EEaQmZKjFfc2o21BaMwqbrrt3ZzoAuAz6qBMBsgLsLJXpcAdEeKGJg959dYSxmWhCPzRx9dMr2PbnsGEGHNQ",
  "key41": "5tTPmP79SFrz7fbRESfSJcdJhdXNqiirpXg2XT6FoS2kiAtTabWAa8Crnq7awG1WcAZ82mAR1jnon89T6XFpz8W2",
  "key42": "4CZ6FH4494gxRAvePiThhTBGLhMKd6pqm2QM9NBLte7njfYZv8VHQ5anQ6fKBFk9xgWyEQfEzzN8oYVNUpRouB1D",
  "key43": "4NKvG4TVZFGAhEnB7T8FWLMrjkP7MMzdpPcd4v5NVPyCNEVRSZEKHBEgrFz9mXEydVQ2wYwB9jF3gVkrV4aTwSY4",
  "key44": "42d9w5GTmNs4Sxrhu9WTFq9YwFh5rEoDPWKDoSifybNGqojc8g7GkoPLYbTTBPzL16CDCexGzksrfsaXVt9pL17U",
  "key45": "4gk1mw3EiDyMCpYQ6JGR4hJWpMYGRaeGF2TKz16Kw2v2MhfenVz9oVHaJ4xc8wT32fkz9bTZUiZnBRCCNbM2MZ4A"
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
