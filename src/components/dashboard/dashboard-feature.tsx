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
    "3Pqd2T3N5NWpkwqpKfSjU6DjNNkpYnPwag4cjyauh8VG1yVR5fTvya4N7vs4iHYtFyQzRcFodsyxUh6oHs6ybx6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gCTYKbhstS14R69hxk8kWHUSpTrF2TK2dkhUMRi5VJdEyexC4aEbkYoNEcSTss2yrTcyFRGzaaaRi6CHMwoepH2",
  "key1": "3Ej2w6RwtsK2Vo2Ejnq4xu8jUg3bJakDw6j1Aw2Xn8PDoF3ZsVnuDuBAqBhNGAaHKnCxfUDCSJpVkGJKzCqfECSD",
  "key2": "3x8Lcj7hGBEMAFJX2XATtgH4CeNoYWeqrn3QueuHhxu1BJcxha1pzQheMSLiyh9bBAqF8g85kfuDbSXknZBeqQs6",
  "key3": "2yZMpRAQR9YJFA1tFe4eRgkRNSiSvVc9Jju68KkqAhuNArDCT18oSdpwjgwAVN3NQQv39rx2Qd9gooEaNDosGTbe",
  "key4": "jWhwpH4SBcFLQP4YZ6UkPRAwNLHa3M8hKo9jk26wMVzXvttt9KPHy9gopdhckYjod6p1FMoaUrF5QfamnyoU9hY",
  "key5": "5BDCc7w58v9FdLJohYatwd1kB7GLJhhfvtqkbuJwesj4ovm8WBvAVQNV4BEKZgfhVedfT7pbf9ThyvHwmvzSdpHs",
  "key6": "4Z7M4ym2GG5rHNyfFrK45mHajLsY3WMujMv5EraGvgJNb3skDQmJh6Bt8fckEFxEscrQPYbc2RiWibZPn2VWLgr6",
  "key7": "3LgQUZeUL74DD1mT64XfDW51EFshzPSiG7zD8BuFaRUMXfBHowP1zEb1GqQUdunKj7ihYBgZd8xGTigmUfagdfV2",
  "key8": "5C9w6ESw9fzkwX5E7NtRYUGhK13FdcgT1YSTa7eMDBHWBmtbCPfRvqaRkJDbuY8dY8k1VWq4b8YSktD5CpsCQLSM",
  "key9": "2cuKVTopQCB2AGcKitx8Fqc54qMperacfRiMDHTAozbBnon5fRPySgMYajhgBAg8ZWkJVtgW164eDqWARU84hXLS",
  "key10": "2Nzsq41QBtghP1SSaRpA52Z24s1B2qjzat3j9akTkmzXKqmpLs3pgBjrzEstRxCdsWKqbjwepokVNibtjBR7REpS",
  "key11": "2wHK15wGuRmNqABLXyVG7HEMWaSE6k8kqfP9tMNdaDF15KQn1Thib3rBDQmt5GzMECHhdx49suGfo5QCEcP3etnf",
  "key12": "5JDgZXCyeHzrB28h7qfEkAVAEpr5Ju1AmUkVnFncDqTfRiGkmnvHVmZBHjgY6TT4Q4tRwke1HNBmwbdX784NffWe",
  "key13": "2uirCdxC5KrE5v4hQ6rjuHfYSZworsEF4ZRcyP1VfGw7v8EPzHZeijmJNbWmjwh3fQnxvb6nHDbg7LTAsyPyQ9xq",
  "key14": "4XjAZva5PZAYeiAjewymuiLFuctjdWUeJASNr72TnUYGZGJwQ5MNbyPNJSHYSDWvBey5oYg72HQpQds1kEeySEe4",
  "key15": "4v1Lw56sBf4ZPKR8gfXELx3yyuJUDsNkHjJuBSdDiX1qmbZrYfHK2GQztkzXGNH6yyA8qXangnomoaEccveUbQ4Q",
  "key16": "3Vsz79HTgWv6yMaU77qYf2ruBqK4GJzbJwHSnSHqTNTNJLzUUP1hUHArXRfuvLWSahYRxGcGtk5q84oBexdpYBSs",
  "key17": "36Ph1yv2Yu3BcNe1uo3TQYxD6QxXYZ9r49jBxmMGygkEK65D9GwVeES8CHWLzjjS4CBJtPrwPAfLbu77RjHMeXx8",
  "key18": "4PYqsL3ZsibrFirRHx1WWtsTiSuQk6zjoL1k2QbYfpghonBurHXN3u23oBwy1Eav1AXB9EVKEdYbvhV7wpwSQxv1",
  "key19": "5sTrU6B3XMe18bQ1Y5zykSJ4DY8ApVeeZjiQbJ5ALKXecWYdaRGdzPipD4xNowkfCjbktCbnhcdaZT4RV8K4a5xn",
  "key20": "2vjbLxPu3SUQHRC6h3LgjobULReXK6Ji8E9txQVzr2txnX4Npb8hn2oCbXDsvdzJPo9kuDcMEjmTHL7HrfL1j7Rj",
  "key21": "2HLQaGkPPXumsiU95pkM6TSyqsyggPx62qsKsqTMHiv13yfxzsZ53T9capWYdkgD6fcfbwCMX7uMWD5PhBVi8mCJ",
  "key22": "5nhWCeSHsAbvEoNx6BT38nC3U2dBDRrPHXC6XB6aEGGV28u72PihjwkjbYAJejmGC2xxJ8UDdnBTCyhtQHR3inr8",
  "key23": "5cxgBKxQQjBCv76G5iFZovz5NXdvxkGkf5dcC8LfrNqTCanr4QYHEaHpFg6ta3iEtN3Ei7A6hp7AMiWAHaeBZFpP",
  "key24": "nShDcDHbtPnb7DbdpM5Xv4GJAZAr2ZGcW7y9J1mXAKaXunVUFcebfovhDF7UTwERb1wmFTZ7hNL9kWRRLFYpto2",
  "key25": "65dEWEDF2RirvaukgTsnNfqYaMXt3MfmBQXqm71gSQZe6RSNx9r4yRbwjuHVzSQBiWXfJjUFRu8f32Lo2zcVamAJ",
  "key26": "3hoZkugQUoeqLu8TUa8QzJtzP9Xb61dpHKPsf1EfJ8WiW8Za9f9i6zv72oSgCeb9cYpR6xFD3ZkGUy965xLdmWE1",
  "key27": "2vjQ29dDjUt4fnK46m1teCBo9bDpbpGEHNjELdR1Udb2LHJGPnSkcmX6AUuvsu6Bgqhdx6y13nXAecafmH3SLTBq",
  "key28": "3A1rpSGvcp7h7u6TDCmpYkNggEWY99439vBwgXFV3wMJfqRVy9Qfy7Brbco8PUh6e6eFS822vm2vqfZKRfY33pkW",
  "key29": "3wSXfpjuu6i1bxZC6RW9z3r2tfRy3Dsek4S1TL3p72C4cx9ZXdpZSScZnT2i7LwyYpfGZQHgQJQymdBFaodydaQV",
  "key30": "59URU6CK9HGexQV1Tvqff3vVH2oHULqPaEan7PaeLKMhnaUSZDDVaQUvkWcH2ExktgBsY6oksHtKHMBQzUYHBxc1",
  "key31": "2yF9F1qhnEqy2NjHQW9hVGN4GYvRL8HenJmh9ra36Xqky2vbQZPWagmm1XCz2VhBdLgTGcaASGuBCH9KneH2Yj6D",
  "key32": "2p6umENSuJm3pKkz5FVrQXUDNQWvucSgBDpZpcTZqwi8PY9rWBvXeXTefzhDJaCSjiDfYarnhFXHJrcXaJJC921Q",
  "key33": "2ab65tZQFHAMrCjPcYm4zPurwKGGJLYZtTKRsU3cG3j9Q2YMPFZ17DKc6dtDHNrgDPgzwYw7YCimuK2zM4X1T9fF",
  "key34": "2e1n9ctrZBvijYFgQzQnpzWMZe9uw5ZC3tKQhkZVodRy8LnSMnPnbWquxzVGSLa2AsR4XjoQnXebAWHooTPsz7JP",
  "key35": "2q4Xkc526U3sjNHY9d3CiQqirK32DtoN7XJzMDBtBa47SFjAmJxbzKNDGGAbiQGGafFKH7xaRacQx56WKpq6Khqr",
  "key36": "2VhLET86DRwYMgPmNqu9t8fpvKeBGzaJzRAbVaUtTQTZFSVvEmuFgwHNFviwsR7uVvR2YNXebSS6LnCgM1tftc14",
  "key37": "3tDCitnisTBRozJAMKAyyTEmBqqGYXPJ1z9YovzdghfhrguunuLuTkBkzEvdFxcJyGAPNQdyHBjp8Hie32UHVfNn",
  "key38": "5o1xvgBW2VS8gcZKyDcHd5o7fVwX8wPGxRTBaKHp7ki1TbKyootJtAyg2TYyHMVWVoGWRjdDznBfMLEkzJ3NWfmq"
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
