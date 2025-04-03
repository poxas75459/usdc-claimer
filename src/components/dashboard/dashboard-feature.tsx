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
    "4aHKya9BBRcLMZbAHDYge7sKuy7S78F95T7JdnWHVu3gLGtosbfTpWrcFA2Ht8qyjUd1gSASwJncukkG2FeYHSsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ej8vydobpas6Rq3HenCzZhuvhWPfoAi1FXt4BqSggPWxQ82zE8iqDJugpQqZWdTZEhieyNcqWaTJqafnjbF9Vuq",
  "key1": "2s2irr7Y71fJvRXRr4asWkqXACuXbyJ6wPTpRECehdsU9Br61C3m3snj3sz6WwQE3tqy1oV4WidCYysXfu4XrS9R",
  "key2": "2iYc2TMtYXMYFScAtsrsVvaWR9LUWZVDN2dpvx7eYYHNowhj2CKYhkHVVGmmEGP9hZFqWroswEXR8S3Bx9jYHJS3",
  "key3": "2ynnnipb4WpmPcrjQeaWRuGaYBm1AXYXkjdyJc6ceyhbzrJWe5vZuoeAd7naRYBDPsCfTbvhaTu3dG88JX3rrBqb",
  "key4": "drh36v6XMNXT21na2qNgwCXnz9dNGHzxRYbMMnbEDP4fvhhfdW8WojMz7D7pPsxo4tnidTmPygGmMSUw3YeaXTZ",
  "key5": "2fZmRxQa4DSz5Eo7hJ2sZq36ULLrf4PwVxYCdhb5cFaXHu5YnKjLvws1E5huL2KNKcphfxQNHExi9w3Za26QaK18",
  "key6": "5zKRWyPcpV4ZarVgy51YXjpKBrssKK6kFgDUx9DYaJ1QD4TovxuWeZRDMUj6snJw4sDhWa6YEoSmAzKUQ35XBHB3",
  "key7": "4sS8W3evUTL596w2hWpeKoNXqDpc2y7ASncqXAjZBa5Pq1WooUd6HXUHZh2dAcJVjVyjceG28EomsFtMh7zR11dG",
  "key8": "bMDkqiWmV8Du9Y823ngcCLqhJo8EF6rVPtnAqznxDW8Y2r2YkFdKx9TRNAmf32VtD35Gd2WTdHHQJii3QACKsXF",
  "key9": "5mqrHkPrNAxTtsGNFy41U4eKc69aSG2kRv3Zk8K86fUViYqUBMe3wJL6Xu8bgnmNLqDpWTvMg7UkJJ5r8dJLC1Dd",
  "key10": "k6sisyWtUPaW3jaa6EB3o1DQ9rC3gsgGrJpGwpLs85BWnoPR8rnMYCZu8k1guZhZPxSpiizgNMQ7bsiq8P5hyEU",
  "key11": "4aBGS64Py2LZsF1NVbXykyXnmx16hzeyDvWNyx2hom3fY5Er2tqepnGPS3yN1ZniwCS9G71RrS1K6ahKhmBzHfGs",
  "key12": "4YEiGQCFuCuSh7xVqQTe2eJxfgoCnUoCE9Lc28hQfA3H3WNK1qFgyPBi9NsDe9iFGFJ9zo7iYMn3V2ERe5k5Wemj",
  "key13": "Q8EpLjPMWJoisN6y2ES9SZFQTiEA3V3tRcZd15vuQu3tGUfJCW2EYGnyHgPZDxpDP2SoArrpvbTbhbZM9gLRiid",
  "key14": "3v9B3ThUUvV3Y9sLBccSX8QUYFE9DBV4WSmysX9aZhdq2zgQVL71JaN6rxFsZ67m91qihYp3KCZBsiZ36jkms2Vp",
  "key15": "2wVwKXgmDw2rUaCZuq9msszFRKbEzsuB1mhTqPoCRgWnfs7QsAK1e6fkfhCicQdmSuBzi9kwJSZxqLp1xNW8NbHF",
  "key16": "4spzfx2xjMmXKbh53W6wBJiHXrfbJ3diWVXWmpkd5MUQa32bukZtZvCXvucAC14dxnH3CfzTzHF1vKWZhYQ6fHJy",
  "key17": "5JoBH3bFubapfgsW8KvS47UHDBFG3b1jWUJDqtM3QBmg2gQf1LmdYZp4vfixfCzYftv8YuCPTZ71eC7rC9EaS5HA",
  "key18": "3q72pNLMzfoybCAX357q35C122e5v41Xsj1FYj8gQEG2MS6BpNxwr238akv7JtLczq8EoQ95k9VM9UDP44NFjYZc",
  "key19": "ahMMzC3JnoG7r1SNLpew5Vf2fMEcZrY923WJg2x2YqbEvzZgfd1v3VgP32qeSNso9H8zEsxsDAMoxwRb2vpqvjy",
  "key20": "2Ls1FTUdzSyehnXQSrLd8sc8DiZXRBgLMmsfhmZ2FTCJNkKSphXKLuPZh5wXv2tTPwEQAzH5Z1v3qPva3s72zdxx",
  "key21": "2vGf38pwZsdtBPbfs7fWFV3rdZrZuEaXibpL4fq1E5bPpcttX2Ar6VvBz1A58AtyKnZhR6QyCEci9RWuqyxBt4gA",
  "key22": "j739Jx5mBqWM2VAErXdbFDTRFnMw4awq1oqNHKDRfegD6i3RaFDbinKV7DoWyuA4efxyRDWLDEMBYcFydKaH4Xs",
  "key23": "43JGSxCBcLGDivzvetHUDT8e2yfoArRGDfSoMaS91HkZg5XsHKTghW5YzVUXWtRtXs8bKXembkfjaV5rcZzdicpu",
  "key24": "5irhrgyNspYmoWUz5KX1AwDhBEtiQXCARMru1mCdF6vKUMYfcuo4b2ej9rpPsERSuaByniGaxxK29q9RfXxiEYXi",
  "key25": "3HD15GTSfU9TL1RbJGZNWK2WhGCyP7XqEhMBRDHXkY4JmoZ5fNaFkxhvemwxHe3BjmCWZFeJdL3P5n1taUixy24A",
  "key26": "t2NCimFQxcVNZBtmQ6Yi3x8ee9nRxeLDKAYrMLh5NEcLPJsNDsLXUno3kM8G7ufWYaJvcMx6ACpx3NkJKPwwEXd",
  "key27": "QM9JPcQxkSDC19dDczvez5K611c12Rp3XfMFj5LyGbHbyC5Pw2BCB5Cg6dUMRoHyD1QAk4H8d4MbHodGVpC5F5u",
  "key28": "54VcqXL5FLwiwGEf6YKyvGvEsSWQsYm3SVQ6JvAcBCEG6y7jrCRyGTC7WZFc7CZgrHpvCg1Fsi9MckrDCxFHVdjP",
  "key29": "2xxR3YoBG2PKXnZEwnwwbYK2BuDitaEythB6G5epcDNrUuGnPFY7mEzX2dAEiFxT7JeuGiNt5aUUehQr562wueTm",
  "key30": "5PMWya1kA72VLKkoyJ3ZU5LCRCdNjsWiAb6aZFYuLe4uzYDKa8E2a1FdCYyBDkscrsrJT8yzZxjjpqmVGHJdPoKu",
  "key31": "4shYfveAKG81NFriMymZvA7ywfSKLoSufA5g49sxEFtWGC25o4NRDydkcJuf46LNTkhwDpAFVJ4U2n8twGKHgDg9",
  "key32": "65XTuF8r2hF1wBVjnZXRsBFN2zeRup2jn76CEXdMzFiHib4hua6YTpQkz7zwFexyCEi5z2RV6URZNZptk4y1YBAJ",
  "key33": "45obJHmCTa93AVuypQu33EL49n3vTMyFCntYHaJXeSuQjNHoy1hszkrwvPRTNUKbkSvTcmkMn1qeCVyQ42h1KTUR",
  "key34": "2ZKd1itt9SKG6akX9Xr3R5wNxz5udWHkMQbe4FeDvCiW6hCkDy9jAxqX4JH9FmaDah6yiDaDrm6SvWws2cNnE1wD",
  "key35": "5i2byrjNUK5Wd7jG1FSoLqfwmXXUAewsw1mpKAjZuuRvA64rZLUR5jSws4xgws6bNSAohsYfJeL2wBwDyg6XifEu",
  "key36": "3YekpzbKixedeqS88jewUWMiFEUqAdGoKUtD4QfJQhqeebUvsti4ToFs9S4v5ifR9CqgHWKhi19vQJg8Ru8ntcXt"
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
