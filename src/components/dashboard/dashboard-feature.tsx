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
    "3Prw1jRuX6zcgC4nwpTkmRNftZzK61DPxRkzjyJj17GUdcyUKSoQ2urvW6xTjzdKkPmLhB1ue4erwRM5aE6N8Baw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yUJ3qyaLDj7KH5ZYWrFiHzoXiVLJoTeEjoNDuG9RAfMoEwHEz7VVneR72PZW6VLMdgSLPgfoWodNKivoRsFjqSp",
  "key1": "44tT4qbfWovqUbu7u9uodsG1RAYbDGF9rMNEdK38GApsx7wMkg7K5EyTnUnCnuHZ1FjqayronM1XGktByWoUwAKE",
  "key2": "3tz7tVpAW78viNabf8Ee8CxfmHDeeExp44wte2BfJAJYYC14MHEiSG8pZwoKgSUoWPKiCHwEa59dx14nzWXqwuxT",
  "key3": "4FCw5s3jkqyo8QxPQyTsXryNVEfkw6hsLQhEWLCB4p1Gr3GY8DaqBKHAeuamfCqzpz8Nj5rGzWFBNd9KEtmBAp7s",
  "key4": "5oSRpi5ezofvTuMnCGFkD6bWT5ouoczcNiVWozbxFLUmdnVH3NqTTgfSmod1ZwscymTpkuSygCuWnqFbos2SfvTe",
  "key5": "41W38fbJJow7AA3tBcTasGrKNpiPvwPDA1kNtBnSD8vboaqP2eV99h21gv6XHJ4nhAZtgAFgUtyHhQmH499gHgWN",
  "key6": "2ra7i6twbB6DEzym84j5iFWfJZNmp4jpFCwkZprWWxWavgeeFUDpMVhcFppQUtZxy5womzeEm3rpPBaKc2PPftWD",
  "key7": "5L8VDcWWeCkupAP87CtANjGQT7FF3HremSXWwbyNX71XcMYTu9HRimg4SW9PgWpdwgatvNeAnKpDEEYAGvkqosjX",
  "key8": "4XpvKX2MdvzLAbrtScAhSfu1yXh4gxsHBqFQ9rwbwHLQub59sT2EhwSmVBiCM1vf3we31gHoM38Y6DGTugSaBURT",
  "key9": "24MGF4CMj8MjHdsW3drsCF7q7LjVGWzYiaTcsctPvytY4rLTSELbaaQHCiamiWWqknNbnjNAaatdRvXFtjakmNYe",
  "key10": "4Y87btbiyXiFsaFYJEeRZPJ7WdUEkN4rhGuVaZRnVNBz59eusKPLLkc8kr19gK7LV7A9coHXfi4wi5Jf5saWYBnN",
  "key11": "4KtDk2MxN1z7os7cpsmRFS52azTVMLDFdTvCTzB5VuwYhymENGvFCBMzGSpf946SWfYKN24TnwXYeckio66P5Ch3",
  "key12": "4KQyU4bmjFhozdve9WxjGxGw9fNdbfcLtRBgwNvY9jR3ojyfutqJFKHChHxArmkEp3eqQexeFiF6EugWcjxpRJ75",
  "key13": "L7CXkiD21TBn8zo8rHdc3boJqgTUG7ADcKLWtJoNeRUxXsh9y435PJW5LL4WkHJdPrq4sTFsaVERi97tc81g54k",
  "key14": "3giBpVHmH8DVXLQCc6uZLTGLcgHw4mhimELSVybvpQEAhDkq5SferqgPi3kXo7ScLe2J8ViYw7LEdqGHsauTnd8v",
  "key15": "MCRKDe6tcjAfY8kXLg9cihiayrfZK59wjg6PqnXZbE85vegznd966ParuiwSdMypuei6V2gau4JEzx5DHmY5MGs",
  "key16": "3pN8gxkwRLzoDyrhwUU4Xvnye5Ra9hCC56KS3zvavdFM3FZ47fFneauS8Ax3PFzYVxeuwuqjGA51u8D3ff4Tyw2N",
  "key17": "2GV4K1mcxwQxtTcYDdjELvKmraYqVzrKMcuJawWEn1RwDjKpJ2X6Bbv2XsYe76ydrBqseyPoCXyWfQZ5RTQ5CAAr",
  "key18": "B4noAi4ynEaRoRPiga2hwr1qzawHMbhNdVuvrzs1sTP9DPahyomyiiVCYAFKkR82fk2JrQZny5Re2sGmynxXRYR",
  "key19": "3FvTsnG27BpLAPSXFDfZ4kip4M3pr5jfyTRp9Nx2mvrfEDM55AxWX9YBwVib4rsQehXBjaWeovzVwzyguV1fybxS",
  "key20": "4syQAHRoYKZ7MQsifPX9Jp3pSc49qKJyiXcf8x6Pp2ojCpohTg9kUCxCY3RRbhrdX3wqZL5mxxTZdy7Li4VsjF6K",
  "key21": "Lxc9m61APgi3HeWsVCP1tGmMVpEe2cP8njUFh5cuLceTX2kyR1G1sRPzVgsKFMoy6Bo3ov6uh2epaLaaF6gVmHu",
  "key22": "5uFFajzEWqbjdm9dPUbfZQvXcunwGwZTa6rzFaA2g7MSKZrZr4jTJ62GEscg22h7J5rrJ5YzmvG2ihHVWPfAwhNA",
  "key23": "4Ebxd9bkoeNXB8dKJWxdKy2uiPTrpzZ5nN3mnVbo9tGZDhf82HawRbaLpHontkLGJ2hoibXKdE9sxKMKKjEM2gLi",
  "key24": "4P3kjBofe9FEx7RPRZPYyDejXdny58qYb8bPEn596A3DbQTTAJm4MgV4jytbDRETo4xrYXrqG4tQnxGTx87bncoS",
  "key25": "q5XkNH1horVDT5Z7t3nRjGSDr7VFyfhLjUNrY1h2VW8fnyV3jbVXt61YmZfMPz9hcYRPXN9YrUyABDUSy7Hnoki",
  "key26": "4EpyfSoZEg6wbfLWmpoEQ63wZkR4stFum6dCvgevF9mABJ8iQQzNoX2U4xBBocrGkBaBGJTfb3MQkd3oJgZT4LRU",
  "key27": "3U18yDK4cUsNwc9Ce1VXYYZTXA6vWsFsQ4hD8D7nkj9YG8PNtc9BRWSKZNBruaFtDdegsDEUX8PJbFtshozQesv1",
  "key28": "3kTZgLcs1aBwtiQuqNjbJHR5TBPfWHg1wXRgStR69BSrB2en8u4pRQdcC6FVLTLiTwNAL99QUXP87RFuAYiwJ39m",
  "key29": "yzgYqsk5yqR3fmvzGoNk23WXZQagwwqYj5MuXKrfHrHzqD5amrAfy5XuZmVn8vJidnYsRNwsfGKMVzTVpWAxhkZ",
  "key30": "4Ezw84JaZHU2r6Gg5KNwb1Z2EB1TUER4diHiFNdkfBDzUfLJJ3mu4rEfggwiZ4RXNGGCHCWdATBHu7aBvHY8pWCV",
  "key31": "3BtCiqDxkHCq2MoffzTdH6MJHaR9aiYRJhBhYxFEmFqJFyx1Wwv54MtmMfi77CbiKqTJi9YCEdoHd5ezhLpasz1z",
  "key32": "YoNL7CV6TnUj5seYpd73xLNGeKRqr1oMeEHTDjyhdg65kKzZoXhtaAvJaacjZ1jtmL8utBfd2ccaH65exPYS4fo",
  "key33": "4LZqCs3unJBPqnwLrBq2k9A4mZa13XiNKn3CFjXpKCy1oSNxVbtLBVBUzfheDPSLeLs9wssRisgVu6JQNZnwzUGg",
  "key34": "55yxyYh6WNcsvDAuwr6pWuHmEQVEXVNDJsrdJBBoBTH7rVMLMije1mL55gtgknfRyLpTVGQkHmXouZeZZtzzDZmn",
  "key35": "2h3rUmDNheGhceE9gPKL68CaVmzheDfDhMBZqxUjQVSJLNeHPPv7NW9og1di3me7R6yYttgxNegvWZtvfdtK82kr",
  "key36": "uxSM4PAbnACRiU1PpKakEvtXZnNxuf61JzxGASMKpSU3cFTtDmueofgUYAYMXe58nmugw2SRR3z57UHTinoZW8X",
  "key37": "2WS1FwyzK1AQt14wTvcKb2BxCE8uS89driCo8Ai6YYDKhVqrvGE5bZQNczobc6dtxY8hqvHHrEa3LGhUd4TQfmLH",
  "key38": "h1MZAsUoeBD6TGGH9DqrZcQvzf3JAbgUR7pJLyWLwrd2GQ5ku9jErDLhRJS9oWKWGKYhETo2jgL7F9TDCyuRCCW",
  "key39": "3rKMY44V391WT5WnQNqqRQWpYzA8b6HbL1xEdYzgDL8LzLzpFUSY8oUJHF3hJDsVKfS7pLEi5fdi1wMuy7jxWPbM",
  "key40": "67q3nY4Sxyk6Pe7xNWymsaqiLZzf6o4G9uWphxw2NK5M5VDuBfydAfU6XqAQ2WzfGLcDYhmoeDZfzVrfQbBNqBMN",
  "key41": "2Ny9EYygTvQjJMPrszR94FXgAuyj2FWXjomkoft8CDZSwWVeGn2ctmapSRvoBxXHdXKPujE8bWFPhU14V7fxn1BQ"
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
