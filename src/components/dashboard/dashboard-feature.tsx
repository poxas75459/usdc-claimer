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
    "4TjpqHZ8jKkuKgt5ronEMQKTceJ6d3FmH2ny9kFmYMqQt1iaQwKpywwHF5gZoZP8L7iwGZjgN3Lg9XQrrrKqeoY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5156V4KmiLxHYaJue39f54Aq9ByUdinLypyUY94qtZcHfquYeKXLpq2BYJjurp2iN9MievkwvcKk48NWJvRqVYoH",
  "key1": "4S2biM95SAjHzGFQ5XYcWa8iC1RogXvoKEBjazcCJSUSDkguRQmCjV3DsfJJyTNim6SxHGLrT5AEPFpvdiHWc5ag",
  "key2": "TwR6iLEq2f2YyFQUyZ3rgjP7SB6TRpMnBfKhDe5wvxRq1ipUnZSh1urC1GRB46i4nNacqmawnRRxgnqxjhZHqKP",
  "key3": "2hT4wVRpukpqscmPiEWsrN62Lz1BhT227vqHwJN2c1Sf4h7stbMdFpfrTS1BWUvQBmnGaCsMrHW7jfEga7Gfu8es",
  "key4": "1eX8AdmBHWeuqLZ5FGghjRY93QCgyJJrKtShurw3pV2bzoVmmAzoi6q6yZyjfP2nyGdRUQjR8euHP8My5Kpk3aD",
  "key5": "F4VLrKdB7S7wXVwFGM4389qiXHJrbEShenxuNJ1CZU6Kyg89r88uibpmwx6YeNBh1hPzjkei7w7uz8mQsdik53E",
  "key6": "3VsGzPs3FCCoSrS7WxeJCUtsFdw2AYHKMdpt22igABKpWNDARumzxRB6UPZcae3FrBaD53cRqthFNLguZScAUZ7Y",
  "key7": "5aSEDUM3xjMYspX36p3Wd2qsgitnEDhSTAftSYQBxuFSXBbpA9zDtBYQ6Cqs6sfCaVocTgVu318uF7EUyNCeFFtr",
  "key8": "4oLC8oMppW1ZsVuFfF7yXVuX1DZ7Wdb7cz3LzoryuZK6tuFRirL9Bw1RqC9TiSBxQVskZ3H1kKyRFJvktx1K14Gn",
  "key9": "5H7KMVtJ1UCpwkS8rkzsCXEcnAy4GL6WTsvuZMegx6ehWmbnygxYjbRxAM1CGVUkxs1kPGUw3PDbqM7cbJU4iVpF",
  "key10": "5ZTcL7BHanr7Wq7pfRoJZuzxEs4zYCU4Nb1EuHgTwi2f7h7VczpYZttnRNfGU45bU52r18wjVQpzdMdDzGje8YG5",
  "key11": "4nsVvxwZpdpPp7fFtkMBJNDWZNyxju4EbzDXZ36jqUxzA2HqJzmZWR6BgZWpGpMQaiAWs1q9L8WJyUydV2yLBF2o",
  "key12": "Nu5SA23uBvVGMYsfeQQw366zK187q6WdXbFj2aCrPmdrf7nNJTacKkX6sVvMqfNosCoZKKueo1UUf1cpDumXp4Z",
  "key13": "EnGtpH9YAGQ6yWYmD6yGxJJgJmmeFymsd77YVLpwnr69Df45MZ6kGAewJBwAquhb1cMjCjGmTcPhWPk482pVZQe",
  "key14": "5mYiDuEnHUMWSA5vUwXyB4cnaLV31neJ6RRb1wgRvrzPjpXEt18xXSmhxAicrFdzvSztnCNtxr1jgs1diUUBYUJr",
  "key15": "4NrFdmtNzDsPSxmEAtvnZQPnGMEo7HzjPwAcWmtLNkJ6r4PQTgUBwswbZA6tP1vEeS8K4wkXTGpUAit45RqaEXfS",
  "key16": "3396mk8xur2EHsD79sbEv941pKxDUEZhWsMGsks6x7ycikQ6cGqEn5bTs9zgZ7Ld29z2uwBNQz9pFiRBj3wXrujo",
  "key17": "2Wi8szDSoYZz8YYzXNfxFiC648pJpMTS5vHf3Rj8rZAm7EmAuHquLAze9eNdbJaeyGZ1FAVJv9VqcxzSmNK1RJQf",
  "key18": "3zhzDykr8UZe119gWUBRzsqYLp2jFu2ynvU51hFJVwKJu8JqmcTsCwgbB7MJZFtn7ekJFQNg8XjrTYuFicKW8BP7",
  "key19": "3kepNqhiqRjemHBb96hYX2ue7CG3EhrD7KnNLtMtCY4ZaT2dXcb1Fc5PReMTgyJxnTg9JkGd3Ew7xW99GxU4F9Hv",
  "key20": "26UqGxoMWZm6z4piqzb6RuKUmfWuDEQnYuLwLs6LrGTzJTbF7U4L4LRrWLhyBAxFxs5SmwpLRNvXMcmHRVTr7QaQ",
  "key21": "HBPhXNWqD4WnXZJu2sVTH4sZCGMV2HwUvtsm8q1qxfWYtmzQ6fiT6NznH4ahetDcZBdxAE4NF4dpqteRHF6WDf9",
  "key22": "2faAXmQSh62ykHAHCcMDyzapGwDiCFRmgAuEQHG8WrW6PPq98ejF7ym3s3cpcxhUbNNPzBn4quXgSYHi8HeoBHEq",
  "key23": "353PAsFJJoLuVm3peso26Cbn1hNFXikLHR1LNq535TPKJsyAk3Q2d3Z7NbqmkHWfZKZMU9XpN1ajaurWiHrafaMe",
  "key24": "5wmYniThyYtXbzAmpwNpqTaqWgS8w26UYxv4iQrp9Tz7gQLKgb7hhKkbSjggTW67uZoAzBjskP8QVyPbfx4DjCa6",
  "key25": "3j7fQw3Cck8GR61HkiUt2BBACuSi34CdzhpFmRUmTVEFNjoiEqCijR3VBvAx71pZjC94ow7cFg3RRwBRWK4NoyD7",
  "key26": "5PLYvbV7fCMoZw4pffDGPZWdEY1BiDMMkFa9zb5GYasKJpRpUTKEuNANkioTtDoj8Z8RhA1pBb6y4zd2rJ5N1UcF",
  "key27": "2GdJ8PicTvx3jurPoz5oGwrVHJrQ1aWxTczP8iSRT7sRRdjnYn4YZRw6Rps92xcEvjNN5xB73PDthLzdfi2g4xtg",
  "key28": "4gASWZFwoWzJe9MLdi7VSb1TzFWycZyLykSVMHWUZ4qXJseiXedCTi9uaTyXSLrEZZ2aRDy664nj6T7iKvbsNW7z",
  "key29": "4F4suVjyJbddsphqyV1mHAHGNqTkBRatoZ9UU4y6NNAv1SLhnPKYBPp83GeXC53Nd42JdDYLi6RvNc2Zdp6jpv7f",
  "key30": "2ihLkcRaouoLeJSt2xgsZXZu8uHkCjveekckBWqYtTVnVcpVQiT44nTsS2496XLWFdWsocpm6E2xDTRqrz4jJcJs",
  "key31": "5EyDzs4cCC2Cr67qTtXqgjAYsxrr3XxTjqiJSj1gPYLyC6oeX6FiV3w6qRhB57xjTMggC5Jm1ACCvUBfpkpZ5G9K",
  "key32": "2Vzy5hSjseSrnd1PbjMHSy9UZuqFdrS8PpmEpUzuRjNDsgnYTRBZKcQh8c9CAxeWaky4YED3SRrtcLcEHqzXpBEu",
  "key33": "58tS3hMbHnMHFgV1FznT626WZmnmn9ka3NGAQkbLTwiqkDN73XtGpwKYDeXf46Rq3yBE12MP3G3xk2jpbmatqD5h",
  "key34": "45tjLy6ByjetQQLF2eXJEyxEaQAYuG8n1SnkTUGYffLsQ7iefWVpBf6dmuCboz9ob8FsbcP9gFdCPYPXEdBZCptw",
  "key35": "5rHUvMVmjwKhhtGG9DxZxr6rSLyiQFBe1QA7c2Bsp2joQU8g5pbGXHwbFbRg2ThsWuCd1YcoixLyPQcVACufvhrz",
  "key36": "5qJLfsKASqumhhwETCQ8t4ULk899fVEs17EHK3z5Nez1KDJAHFGzkatcwvVgTdj4dbBs2A1S54ruCPWNh9EaBcLZ",
  "key37": "4shpWGBtdiRV9CEJYTABLqcqJZ8zgfMFqoxsRCzgLEJFRCEiQ4YFTCndQ7RS3ziafuboB17uGSWCXNePVMS2HZik",
  "key38": "3yo4tMBZtZDMnNsLu9zWMS2b5FA1Tmvw7nHtoQnipYpsvMZ8PkiXrj4Z279aoFj17FbbQLGRCdXe7r1zDSCzUGST",
  "key39": "3W85GPSGMgUBJXYqU2weXvTr1nSpDxVj61yUwnyx7LY6PVm9fEfMmXamCwt7ogrjt1nnynmvZXTodhDdwLrJfBJQ",
  "key40": "2tpSHanaoPfy7GuewgaxUddSjqaRCxKAXP3qHzduFpSyG9sHcxgSD2NxVZeYB7f2u74kCR6TcgrLeVanmJ3StEpK",
  "key41": "4RxaP4cJtaGs79iF1FN2JaFrpDqSmzqfVazDpGMqLkw2hR2o6iDcavD6RnoS6nivEUeAdPZnpCKxyZaSav2D9GgX",
  "key42": "5KwQRgK2HaZ8fPcpsXcS82sTs38oZWVbBCYYamUq9NbcHBxTjRKNQHJDPeKmaQbRbd6DASMxLpVEMAs521NRuEy",
  "key43": "2e4HZjxyhSDmduAgXajbgNKQdirMJdoMMkQb73bPgHwCZeVS186b2xteYJFLx7BYkAJSkbbM46e6oCv6AttS4JG6",
  "key44": "4xmQcvMcmxB1GhJGYfHmR118QWmLuAGPZkzbjN9RocpvaUCj8jPdqdKGormS537BtrqTJkUjLAZE67xkpEocDAxS",
  "key45": "2f3yzJcyAmZLuA2tJt7MC4L8RC8BMbdWGYt2YjZKdKogLUefAXcrjJoHjNpfEpTTPRNkKDR8cNrBHuEx2JX9KtD8",
  "key46": "5iU4XFU9bgNsE4EC6XDE9q4RvCKtsJyhC5auuDFrhUDutxj8eWvAosnXmukS1xCRwPrmzZ8NmSF1nHM8tVJBCspC",
  "key47": "5o1rdz22QZeSevN68xyv4Q4veNG2QHZhZQSdH36umdNoG4GCnRzVYWuRkVrQazZz6P59LrckMfPcdhWH2LkbdXDV",
  "key48": "2ZqgnBJkfA8RpWTivnFfnnapKENBn1hzEbGQVMMXjdNBcoBGyx19Y8xSZGHtNRtK6ok7SN1cUTaczGRXpVJZhFzc"
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
