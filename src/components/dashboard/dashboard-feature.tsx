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
    "5sZmBJw4hRJTD8fYbMHcscNm6L24T1Pc7iGNGw1dS6P2pBhLm4ieEH1WnAbiLXiBX7Uq1qLnvCfjfpn2xLZfUYDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616A6gFXpRnDhbFzR25UW7F8Rp9KreTeMRtfvQyuPX6tF5nLzJbQ1WgAbDeDv8wzjgfFWToipxcye8NuQHqxZqPM",
  "key1": "4QzhPzD5F1PgZvkNEzAEK1oLkQo2jhAS2C8s7PpC8QbByUzhacYdhvVfTt8MfKapNzftkUZBb7JdxKqyKdD7Ronh",
  "key2": "22wGMRHtqRtTpy7jbMWPrGqutrVj8Hm41czT7YRRFxEyHv5tNHJQGVvkuY9w5HGrd4H8gMAHsZ1W8LhtHaiomFtG",
  "key3": "4byxUJqjYVczy3nj1zYxuvZgMH62NhZTwEBBTUgD7ovCdVnpcPbr7CxJsPb5a3ftfkLJ2L9GJW9btGi4ibsrEXob",
  "key4": "4JaXqfWKWNrcfhquX4CNF4H2n7ABQGwsCKxkybR9A5aAvLY8DiBNuD38iLM2eX4z6ntEvZ31TpTDTgcLyFN9e7GS",
  "key5": "4RHRP7X8GrtVyn6ptV53PWbyzm2TX1q2v8VhPTYopAdJYJzKjjEp95rLTWPFZbdbtjFshRKTfoyXnjQUjBht21Q7",
  "key6": "5PCtDKH2bBhB3w9yYXuRoCS1DBNmZjFzhhsKQjYsNZWq76mA6ttKNZoFXibdiEMcBgmqAjhg3Ry49Yd1PW2Q5zrR",
  "key7": "49uTxAYyDqLpoW1SriJ92N8cy5Ski4Mus5sR9x3VHfCd32HEFUn7Sm9AQYFzMELQie2h1Tqya5K4SrYyKbwyQcNV",
  "key8": "4urGX1mmjastDeQgL1CzWQbWFJj1cwEBwKawJLPQKY6Knt5Dmx6Q81npj5WTit3YUsfQXxoWmvXQp9d21AiP7DHu",
  "key9": "4LosWffQByv3thahBL2Ud3XKWF5CPtMq4dVXxCaygjXJMup4KnSzUky8huENPm4Uxw9N8YRXyiMPpdsVi48xsRj3",
  "key10": "33bVWrVSbfRG8W7Ufq1h973xyqDHExXpA8KDBxjrKGJGrbP4fUo81zrVvgMCY2Q1M3m7eLEgy7KeovSgdxPspVEF",
  "key11": "2GCgQcKV1d1aKxAJUswtP3PyMfJ1gqBwfPzaTHJsGZ8giH2SHxSkqToBnpB686J3e8T3QZDs4PrS37nFBsRmnZM5",
  "key12": "8gB5iJDoX77yRQcNbmHeEfZrd8Z8S42dCVtkmYYRyxwAGFuvh7iWRhJjEevMz7PWue9ubXmA5Y1gR9u36aArqNb",
  "key13": "28xip6SBRkx7ECtAAK46RP1HWPwqdanzjh6SywgbkKTk9thK6rdMb8SUEhwRebGnsaVn8UrConSRqnzawBZmC2uT",
  "key14": "4HCaD6FpHPmcLV8SpSLkb6xR7E1nDTndcEBdiVoMbPY66zURgkZURUo1A7BrxsWk9kJNcmUDrk5tns5VaWw3aRf6",
  "key15": "44bWYDguN64zYhWyQGQEw5BmvfxbgsPjb4ZAwWDwW2icwX4g5kbZQ2RF5QEQ8RdqwVXUmz9nLRZ4Fx6tVYTeh5ze",
  "key16": "2XtbpEvDTAUEgEEnC4SDEyVe4BKvM9XEpaM9pV8MKwsoEwYRPsv7R8c1TwzUX4m74xdAcFuHkwFxUppRoLsvXVCF",
  "key17": "LUZCb18ptr7zsBqCTgnshq2TG7VJDVKndiRFE4K93Etravgisw2jCamXcLfRvhuZoAS2qAaTY2kaKi4KXMPUqrM",
  "key18": "2zCBFW4NFYGhBnfxKaM6p7pEeLyBByVJqPfDziCxVsdmJyMrf9oEiyWQHcKo5LWrmB1WVVKxTYM5DZ2jDLShvthQ",
  "key19": "To4DHoepj2r51J7qtiTfBm9RszLBDAbQCYFxAzChabggDibG7kh2iJEbRMgytF9X5GD6dwWHSch9m8MxwWPt276",
  "key20": "5sfy9Ui7By5zrMmEpCSxa7V4R1q6B8WgaeaUpaKvSic4ocFbTP1JYb8gGXomPJWvhgBL547TpnxaPSkXCLStsfB",
  "key21": "mkCBHmqU68rW8TUw2kEE5E5SeAR5CWMr2pM4T8hs5TBp51dAMjdQdM4HAX6DHU9LaLmD3Vcoy6fnFSPq8TrE5KS",
  "key22": "52PZejgo9oFTBknfU8FBDWGnWFvbAvTTMuCMzah4LZyFsM7qJhvu5kotpEVGD6je97NB1xBQsRv9TVCJ18PbCKH4",
  "key23": "3qwfoHtMz5pgNjawaB2yoP9j4jdKmuHQYVit931BUnDoDVUuBWzSRRpY6oTvLwXdVKZKrt2yqkaChJS7ybsMDnuo",
  "key24": "4udjXkUtyfANeAuPuaS8HNw24hejMFySte6xDG3uawCgMnjtJAJnHtU69BSpBtgVXyuSg2WjddFigpMc6CPBjuwR",
  "key25": "2rcczNKNLU56iCxMicUFSodLoTPHLZnPiKD1HykFufDRykyjTBwYU6uxWuuKwDBFXg2kboPQEv4onzumttGBaVPk",
  "key26": "4tT9aQVUx5Z1a89jk5o399vHzhEAfJNwWL1bLRzPjB2FnYX6ZQbbM4uiw2fitH7eaUWdwijb8w3HKx5qPgxhDFxc",
  "key27": "5pBRq3XU7vowEKineAzTm1AjDXEsE3Tq1WH9bcrxNWJSw5Lh4ny5LTJvVtuJ2SB22dSHPALnv2nzg9j6f86jyQQX",
  "key28": "5PxbC4tAi4QXtqU4Mkph7ocY3BZZPAoXgveq3Qd2isp8hsuZZEpo9cwN33baRNWVHx3yupaQX4jdckMkrQpQe2HK",
  "key29": "5FG9gYNFXaC2DoKRcXx6GRPZ1Du7rGPjywki1FvocspARZTZAu7Pa6Ho9qpJW2b79stb1NRXoRNmVhyHviYpeNGW",
  "key30": "3KDTwdEdhXY1MJKkKRugaFW9EUjMY9JqMhnHVjSefZpbrQdbzawAsNPSShquzqARRn5cRmuzg6cJpTC6fdHXc9UF",
  "key31": "JboZiXfpN8q73d6ZEtbTkeBmEMjyZhD3FisUgZoAWdszh7VRZj6DwssWhPAd9DQVcdLFR1zYzZM8ufFqASCoS8T",
  "key32": "r47Y8j6y1AawbvgG8qgqTNcpa4EZzoEZZvLTFDbL2RMgsbkSZ4LtZG13V177bv6dkkCQ4CLLzHirdiMEx2CMNsx",
  "key33": "589ozTWWoXAM6p8HZRTisgqXnCYSMkshaKKanwfuXoEerDGLYv1h9A3AKUAWSbnxZb698Tut6bXMELktbUNkXsd5",
  "key34": "3YkGAjNtEEPByqKsgA8Tcn2CZDUY7GTYvu6SLyRF2oPUoQNNgJJMJBzmcvruaXzWXRPNWdaWemX1VamQs5AU6abt",
  "key35": "65ESwPXaucGLmsDa2abAKgTKP7txm1vfezsdfxXxsEayqexs8mPpAZ2HXapetzfFcKtCoQxvcujtnT6NV1f88m9Y",
  "key36": "2UzA2Bd3xtn3fYSWQU54MVACaQ46tqxd7Lte4hXPcZrUjes48d5gFybL4Utm7869pd3LZTtEYVzCb7SjaSoxBVUv",
  "key37": "4ozfsc8BwPc6TR4jwD3UKnjqxHh8prVRvSe3CNgANsYLxu2hVM9r2t7PYic6o1evPGUnC8a9s6fBGUt6VYmnxAHa",
  "key38": "4mVq31cqpphwFAPz7pLXEVdro3V3CGujfSVWobyrnfGTCtD8ax9nfqfzp9wpNMvgSG6TtPfidJUTfS2b67iHHJ13",
  "key39": "2bSPBjYUueixkG6UTm3Jch9BEi4UoBXbN6jH7ndd3NDnVesLJFNEAvQ3HnXp4q1CTmqC6Ne1Q6V6pQjwvyNRa3zb",
  "key40": "2y4ksYWcsoPtd3nENjxoEn5ATi5zgKVxDteHL3MP3Amg2e4hCXkBgScGefdTTS66D8PCRfmBSTUNDyqhjH1bzJrN",
  "key41": "66BivHegEyB9nAqJvcda8FtrUsrRaBSRmiTwdpEStm8imHwQdNpLE64QUtDHdJSC3WjbzLG71yXYXq2r9FZXbb1J",
  "key42": "2UsxaNjLJySNUph1LVkHJ1gByrKYbFtQCU1MioGsouD77eFTMX4Jfb8rgAimSWqVLbb1BoWPKfap5HoiA55P2vre",
  "key43": "4bJjL12izKiHRpVCj1ukeSKdhUrj4XS9Xx6rv4Rw46z4dFhRDnzCbJAC4JQY1ekJstydMwbXLrtXjjtij7HuJ8aF"
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
