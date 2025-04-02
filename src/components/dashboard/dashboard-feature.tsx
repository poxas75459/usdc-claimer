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
    "26mvvJGcfuzqgpSMrCNE6MP8WEEz8npzwFpin1nYzPN5oByCJtmUNt3farLYXmkvDQcLSpNvkdhchBJaCvGtb4UJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GHZZ8oE5tvZV5KCqQqY1ZoFH7ujQRtfMw8ZYTU6ykYQRdpzbb8ENWUHDFBmuV6yUBVfnmXvypxqrDCurE4phrHY",
  "key1": "5JjUrmMKTrdoHBDAbpRqGDvHfgzr9QzBEZX4tU3txV9WGRxuiPfgEwiVG6NBuiTj9szBQNwjbNfncPA7QGNnFZwo",
  "key2": "57Eiy6vUyHVr513BrYDP33AK9xa8HGVt5uanrx9j8gUhewY3p3QFE93FA1pW69fzkks1LX5CkScZZHW72ga4cBuf",
  "key3": "B5uHbp4J5kqbV5a8QwiWKZiwX4xnVmm78gw5ahf1jtxe6xtGKucmEHMtLuFmNvFGaPox3wgqLbtGokx81eX4xsr",
  "key4": "5v8qs1rUiF9sguXu1unc4Ji38kkcEoAurdyMyNeGzLGv2C6RhKEEivEXf2yhV4cNTMj1rQVQGo1rgda5ZAvDCY5D",
  "key5": "3tWYhv1xyLeByNpDJ4iJfDtbBeDZM8q5pvuNMz8Wd3nAZ3LU4tuD8FHkVBJmEwmdHuG5ndPDYJx7WXjVngKtUzwp",
  "key6": "aTh5H98mzLGuzsJdVVhyvEyTjk5HnAtKFQsSMwHfSnmfV8uZZfmFDK5WXXbLaKmLq4atjDdhPo4prPzc9N4x5zb",
  "key7": "2MW4D5onr7CpJEcjFWYpfc54wPKnvaYsbVJCDBbaHQNzHrKRAoxHaD5QJh4hAJHvJgzfFJeyLEAahS9T1sLNuoVL",
  "key8": "5BJtVY8BPMS8aGDx8fPzvgZjBhvUT61uJdaU5EmTGeBzvG5JXvH6KE6NP7yF2mgiaop8eMZWgrMdQBRQvzFRPArT",
  "key9": "hCafMp4LkZkjN4je6vbDQiGRE5WmiTBQSqAqM58toiCwBBkb2HhBmJRx7YiA95RBo1RdHpLpZExBkedWVcXrfcC",
  "key10": "yygHsgYDrAV5e8xEyhej2E8ecGLcwHQTehcrd8vS62ibzk1BpEZz1a4WGKCUv23dRiSyfoq2LY726qVzC8r3yXb",
  "key11": "3sSawz7RTDwXsqzTguX8jComYEopwipLUJ31sDcqkZwokMEJ8dZHGyKna1DY89FD7jSJAtACJdgwoHfi6eZdkJEg",
  "key12": "4Eez32keRyf7KRCRD5bAbJAkAqShMdk9bbJdDHaNNHBepXYtMcbL8AmPHz8QDv6CNraiTJ2boHf2gdcB5s4o98At",
  "key13": "3tR1WQVzxCEAzVDN5NkNSn9grCcvzWzFontxug9PagntX73XkMP2KY7huXGUm8z9zXhRhCmSk2qPRuPYjV9uuUpm",
  "key14": "5XHbeL4R2A3pDo4LWLB6ZoxVBTqJb4wgaKD7tgCqnaRfkTRk6hbhNrfq2UdkWEYSVBgeZzyQ3LrA713PdERWY3ZM",
  "key15": "HT1wahLNhn9GEFgCdnomt6C7z1XKXSNdg86WqfqdCnL2iNScw7QkVEJsVRkBcysyrfp9isC6AkWi8eVUp7vhYNK",
  "key16": "E3v8ZQF5U3Y42mY2CUVDvHPqWETEMftwVbEXP5da2thdv6wapJ8bAkw4ZR3peBBwH7wK6g7Vg7vznLvUxCyHEog",
  "key17": "5M5FAk6QtPFzRwGDj3t3xuNKgQfhD8E6VxLdFKdLfmienb7b2giZ3fjfMffqwVQphrmC2tQWnKAQgcZwVFSZE4wF",
  "key18": "5hSzdYiSUQ6hRXSpBkc6i759YbbDusoPfiJSsLAzqGVbYJ8Q36SNxySjoo2RVGTTv7anDZPLEKWyzbfEtuqEtpqv",
  "key19": "sqn8dRznB16oDH1B4U77aKtSgPT7xCi4P3LbQogxVfNEmJYrMrr7VroxZtayKUoMNrKejGNSiHqWkABnTEYzXkE",
  "key20": "3smraAc4bUoJ7neQFSYazAv7tcaogv88h3Nux2hfG9FTZdsMFHqAkuBpC1WyxPJ1yEfRd8yqz8c21nkwH2M7D5Fu",
  "key21": "2S5ca3puR8ysaM4RQAa9QQWgB2qAoR5xmRf6sM7iaGAT8LYC6F1Duj58q3UayDdJczHrCRo5yiFFX6D2Xrnhaa1o",
  "key22": "2gSqU1wCRRbS72z28B2bfDgWu7riWiEiP1ZbbaUS4NwvwQScznqEGMwsJEASYsXdFo73QFaCmehcCcA5hpZjuo8z",
  "key23": "5GTazf2JLbA9J6yM2sSRQ5kXhAgBko53ggFBkbXd9BaGPmynvPPRjavq8ntCiRdMBAUCgvq12SRWU8TTJnDXMGDc",
  "key24": "3W6mcULM3eVK7HTYUByUpJf2RQyyn8X5JzFtvGzFm9ncvfmXy3sUDFGYFCNFtuZjSjXgAskQHHmx8S6MSFX6A2AV",
  "key25": "4DjVueFiuMBKMZonjKxQjTHVscxVxAbUKZdfV5mndAmzj9XVTXnUeLaAKBXTP6cEAFNUEyxFfSHRXHZ8Ub7zjBki",
  "key26": "mJeDmn3j5Mbrx8Mv5s5gPj5Ld4PqhfCEw4F4AAPccrB8VAZFLT7ptARqv2Qc6L95Xwcy9yDXYu5AkVwLoWsjC51",
  "key27": "3gDvv2bAJdG4dnSWFTLVt32ht8NnwgchKigCjxdhNhMWK2fEUKMkiZrMgmodpLWp7anY5ZN2ziHjTpFwDiQVYoEc",
  "key28": "B8PyVHETTAgXHvf81CGdPWKiREBA2UepPZMkQ7EtwQkdcQ95x3fchcTisiwip8peDUbNKm9CimZED7GBseDao4J",
  "key29": "4bwVoDNacsfRc2kkqAkBGmaGn4ZqwGu4Po8J1aAYGvabFGzPYKxqWp7aTgE8EeBhCWYDV7jSWegPKa57CGGZrG8T",
  "key30": "84G5X6Knr8DWuZgCebxh6wqmTzZWJDRXYTZjv5cASyhcqNRkDXDC3oAnLAatiZwWfrSuixKz2xqqx4xG8ydn9f8",
  "key31": "2DFeHuYaYW2yPjrFGGFSHkRayavXghN1n5BiGQosV46KGHvKKziTzpMV3EP1vNEEJVPQ96v7WybCoCqfirDyGTee",
  "key32": "555F6MHdJZATRx1vn6xHGFEs44m2s2WAEHpbQrwYhrZ6wiVi9acdN4Py137mBeYpCZFcwrCY5c8waHiECYKAWoSB",
  "key33": "2e5pD94FZfkhsfgyRFmLEMDo7Q9vSgT8rPjg3kWiUsyYTqtPUN4xJeZwa1YwRiC41yr9YWatC3rqd71HXoLPSaHN",
  "key34": "4evGaV4kKd8aWfjCU8mj4DX99498ySL7M2F7L5JBX7KZDvGHfPj9zXFNCK4oJjXjGwrEL7nWDK1cM15AjfErUR8C"
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
