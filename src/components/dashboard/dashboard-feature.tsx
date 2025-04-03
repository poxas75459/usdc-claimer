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
    "jcKmsEyhowyajmeBZDNAwsewfCBGif9VWi3DVe49KuRzXU9CDTY4ZXHQ4Gjpi5a7wuP87JpAHLpep24fBYpmp9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pa1NjJTBh7pTPxtxP3y35dYt5xzLeSfDJv4BMPUZEPhjJDFdcXZ5ZWwwfbutZwkqdDWuPMDqWrkneFymNMoPXfo",
  "key1": "4kRU2sK7jdFS4F2Z4KbGAqaxEY2cSySJDvfqnHntrckeCYTwVyGgruesCDGXZFGHqXQCFCWsoWkAaifEJ1bs9TTp",
  "key2": "2EAwSMDEbqevA73y27dbC8Qmwk6EQbi6AwFsDoshZFG2GtM2fJ196zwaxhz4JZZ7ewbN6omTRYadV2VxG4uLpSd1",
  "key3": "yaTvKqdgtNPUdBdQnzdKqKuVfYV78spAjbaLGE7yysPTY3zgPpHjYUi3pRG1ZWErDcbuuNbjHi9uvs6Hr4LzAKJ",
  "key4": "5mDBNNosTFNxfVwTsyk3YtnLqjqkkMPgAs1yMWjx1EnW8iushgJodHieKk9c2KRZwXPvq5qd3bKnRu9uh3fM6HKL",
  "key5": "3XtV9irHfxayBhUg7jH7zWfWj1U1eRHhECaX2gMN8jofC3pfy3hakKXHwWW324y7ywh8hA7k4M9WUT7AUZjeu4wG",
  "key6": "12oHVrUpNGvXq9EpByT4Fksi5wEPVCDcKhHJz8vx85Mc592RkDUy5Uo7ewA7JARrT7EMTJm1yEdhFwT47z8nXfi",
  "key7": "3YYsw4WB56pKXjvQioLHaLMsANP16aacvo9iAHzjSvZo19C7mcRqaKdYLUpG49djqEBdGyCB7m8pbWTKAzajKJLs",
  "key8": "4ipiNeMHufiY71p6T86GSpmErUZeXPrecgT66x8Pu8VU4ZRfWQhPts2WoaUi4jZkMJj9NfDeemkXejW6zgEKU1wG",
  "key9": "5PtCdKrkNf8o3iqGQHWja5aWC1M1bkfFLyskRp4mw8vsSNz16gFTfw3R4FmStxqzuisFmbdh55ZAgCfzD3MQkfLk",
  "key10": "5zR3ThEgMxWaiw6hKAWFGzqrz4VUnYCrViSGxjbzPPLFKXvV8YyDCQFJEyaiHaCdptkCdWzjNBEsBKpnfNcfAC6D",
  "key11": "2tnCovfZNNwb4jvnU3v6AkeyeAGMnozSe8gF4ibKPMAFrGqB9ntX76M1S5vwLZ6c8oFS3MLYpuyAn2AVeoEfpLF3",
  "key12": "atK7cD1BKXLmqHN2uZvHfcByyfn94enQMi8pRaX1mU7GRoxjVqZyBmufKuVsNtdz8rvtGrLw2YqWtG6Zx7ZU9ST",
  "key13": "494iyTiRA5cNR3GPBDVhDwrVK6NLBMDdKFA74wsHsZa5BuAAVr1pEnPVwPShTqWBs5MqTAjaYRaxis8WotqFxS43",
  "key14": "3Bb7DPy1QWaTUtwYtL6q64Tnd2mQVABaz8SHWE4N5dt8Vq4r99nN3Y1WxbQxwrmjZKZuVBzZvDaXq3SoSt9mq1cw",
  "key15": "3TDgumJKFaHuEuzpbfjCbiAr6rSEAX8uUiEZGnYoYsEcMhSm48atqLqJ2GM8juK5T5cd7PNPAprTpsxiSFVxKxVE",
  "key16": "44Da18wvK25fg8Deeyiwo4pti7BDcFT91yHLnrC3yCrKxgmjrRW1RdDuddW6VTFU5cQL4tMuJHioSaE8D5yLsScW",
  "key17": "3ZcpmZWCQ8yYiwnuHQAHBShQpba6FeopKe6C8RUWEMixhY41aBx9YVeX67NSHEJYVdKujSjwndFmgSzJBYpnRJv8",
  "key18": "66D4Zp2ej6jMxHRPaC8NDXqda1Weay5nRvKWx5sSqBeTWMAMFksqTUbi83QANC9BABxwgmE9GAPs8kmXsyXUxt7S",
  "key19": "5BAz4trzZUrNviv4dXDsWYmKr2N3Ur9Y2DLvWsMypBPUKdBY8FX3V6jufb2MMUeQxqZqvetAqcJ69iuGcD815oKi",
  "key20": "4NTAZjZefCaNKD3vA7xztTqeK2yWGL1A9SmwkG2Ta5qV7oNpDYyBDngi58agAgXu1xJYuwh8UGjoQYBeSvmFjUrE",
  "key21": "5zfwXqWUjhoYZYZMZNSQGhBiJwPCVaeHYctUxgAwwenwFqTj48TxMacksqBb52xx4zCuY2QAJr4R6Va8EZ78yZTF",
  "key22": "3XTTSMFKUmKhCNt8Kh6KNwhDuwNFWYN7ViiCMvijP4j5xHQf3QDw67pKqz2gc4jBi59KoWBquxSMMAf29VuLfuvZ",
  "key23": "459ChpLdTy5tK5F9FxXDeKCSFqJfq3A1CTHNU1tjN1ecmXG6witZcL52AmpYG8VHwFFy6GqbBhGSvptMq2TYCp57",
  "key24": "49eqZNFiTduSsKaVQKrKgwC5inueWVcNK5gKDnPCb2ipps2JkdQSUW1fCnGik7A3dGigA8c9sVKvrMNR1QvJkvzz",
  "key25": "5swkooxsDerNxkopDC1suqJi3qAhQJLc4mCrxbqZVrhCoKBLRfFf1oyAdwcuZXKHTsyGTjqUTkyCShm1DygBViVk",
  "key26": "chf131GYC7AkjupgJA5h4Cd9frnFAJdGJoVJdwnBbrMffsXY5oEExxsuq84vZiG5gf6N9sApVAomYjvV6cCMVVz",
  "key27": "2QfMgtKL8B9MAbA3a21xo2sHdKBqnbzRLHezx87B1ubDcRt7EgC8zvXQheMxm3gwPmx1dbJd1VnzSPhsaXVdeWhx",
  "key28": "28JhmS3VmxFTo6xEpCmmt5cU8kYp7YqtyrHkTBqXGeeUCRRReuLK1yY4LGg12zHFxsfaG6qceVE9jsJAUnV55wsr",
  "key29": "3nJ1syFryzUea6xHbAfeBdcMrKfYZs7mQ3bgoSRCWsZWc9W6ZJDg63wT8SYUxvTyRan71dgAVVCNweiWFJQuBnrv",
  "key30": "538k9cBbmirNwgZFzWD1ch3NyaQvf6zzf7moJXJf3WQ1z12yZiJzJbpQpvBu3U6qYSCB8cpDQDoxXsYVBbR5Xcvj",
  "key31": "5riNdTPsdYrfdPTii2zBmWywFkcpQXdGmFCCcsuaLTuhXTpTvSDwAepWiM9mA2B4s6Swq1aBqd8etffxHobc38QV",
  "key32": "vvSThFaXmrpBU4vvrhiucmmsjAbBK8LuuyAYLE6XjeypKGmaZNpo1PD4ys4vUDebh46HsPyBK2K1jLnV8JNWmA7",
  "key33": "5Gq3rTECNaWG5YpnKQBmEJNqGFoQ1GnLyYHpRuPkENBrh8KWQXFDfZ99XcnxoEPURSyMaumojwfZ431nEJ51Fugd",
  "key34": "3yhTiukBihAmWNSuB7pBpZN6B5uakQHsAj1j9oi9b1ebPrR4JBRptyPbzY5u1VMvDZuo4w4DVCD5Qx6YzjGbhHwT",
  "key35": "5tii6KUhnzmQorbfTqQ9xhFTMsHhC2zutAsGuXczgo1A8i8kj4HbgA65gCfxEtFtGbz564dyGfBs8MRUBxASG99L",
  "key36": "3CugJag4dzz3rdX21f1dq87oW4Avnej1q47xZ46nQ6udALCyECsCS3Q1UVzYuWGBM5XFEQaTECMuXAzo8TRYTiom",
  "key37": "fUMxgCbCHHqC3KYvbF5FfSo46xR5GM3McQvDd7nfRqWbJ3ECmikt2LzpHnNYfSUyr7r2nTRnaZHF5ioNEASF9Hc",
  "key38": "3nqEjAhBZKg7mY7qgSjFVCY9fYAgzoTAn4DR1vLBZUGtYWvtvkCZaTNY3ofYfSvrgSn5ygZxCo4egV6Ti2dpxt2i",
  "key39": "4CMH1aetRy7sB7YpdJPK2d4pRhytBMNDaaZFMvPiq8zHCCdao1dzh52KkFrhDNyKo8QtDA3RFGzBhnLcnKinreKJ",
  "key40": "3T4yK4j9dei1txVkqnQhgUwuCRfdCeHAPvyvq7keqWUexC65wVTYXCEKz8uDeqsiynkmd3cAevm9nGD43vyuWo5c",
  "key41": "2t4eSRg6a6giS3YqJsiFMXfFiqwnSkovjyTdBzQyvhR6RyivxNip9VWKhp55MeVVE6pi6WX2DX3yXRoZqPskRxT9",
  "key42": "2PP7QBrszaX3pXQHfojeshWoaxv6mTJiTzwkfb9AqLz6rFbuTsVLhKYf518aVVpC2BSfyVAH6AXzxeABJccnpioM",
  "key43": "SGDt2qmyH7rwaKzuWmrG8J2MmrLGpfSpCYLJGL8oGDGZ9auwnXxiEmPMVn8Hyb6dSrXtm9LnknSSZGFnSz9EuBf"
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
