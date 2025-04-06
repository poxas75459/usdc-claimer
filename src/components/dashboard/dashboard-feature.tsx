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
    "2mLdyFGiKSNJGkE141A9a8dVKthVt92VLPcDacsKKUBuBLUkhSdbSNBGSaq5eZPCri1CxC9WfEt7NRaDJEwniXbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hr8zchMXWCK2AN7bAwWAJP3KKb2pSNiiTsUQJ32mGF32hpzaug7HKYEnUhcRM7p9xZWc2ppNVHaCtZn4hFDwwsG",
  "key1": "4qsW5NL4MGvzQCKeMXV1WCVu2wSYGhWQYSAC3EoPbP6BW7tVqSDkKnQHhu2GQtAHiXSAVy7u6ss6Th5Rahhnptts",
  "key2": "2wknK1cjyKaWHCmXryJbf5SefUm7BxfxPvoGebvhBtQ4VuPBjiEuzCNNKNmPH9JF5xLTc79ZRr4pwff9XhC76HSK",
  "key3": "4ofTfEjhgBhUn7Sf9ukKF6HThDK2oSsJwQ1m4bft6J3uuxyBbgMaBAgoMt5rMpajEuMmsrqmRUYPx7CBhcwVxkuU",
  "key4": "RMsDRk2jafZgjfaCUJbNa55tCTxsxrqvwASiGAVA8BKDoXBEZhjYZt2qggQkFZkNna4y1DtLmtdXVVWArrz76wz",
  "key5": "37UY1Vp3dYF72ZgAZjoQ8DJujnPnJkxWR3P9kEsA6Vzn2ZwPeuS2PVc6duVVVzG9znMw6iBoWK8cEgJ7auLeGEkr",
  "key6": "2qLmLpaq1MVFCy673d7ogjaaf4orxasbZcBhnibB8XybQXNxxeMtQaRDAqbHPgisB4Sx7khnEAg6HvR8B84Zdy3k",
  "key7": "kpb2YEXyaUxakts7sHxBExD1AxE33B7yVQMaupQi44vbeUVgWApke8VQsoHppgoDSkJrknDKBzDfT3aPnHdxcKk",
  "key8": "3J1jKKrDgmNoW248TTJjRsVbijv7Se1Z93K7LMbvtS1r8ZR656dTopDZoouFCNRox95B7LjTVsQoL4Exd3QBad1q",
  "key9": "gf1eav4SVEyms8b3bfGRTD7otBWy5whx184h7Maq1AFaETDGxzr8jBCG1h1rUMs9wURgiF4kNAkFrR6vN7SW23B",
  "key10": "3m41jyLGk2BqGyXTcf99XPZTN2hxPsHALgybZH856GejouK6urvhvz33FdULNcJ79pULrbKtacrYauTqM6H51aV1",
  "key11": "42VYJjVNE8cRuAKu9xLcKyv6iCfCisV4Pw3TrogNdTqEhKh7TthKyZsC6H2icU2f9dmj16dtLQRyb7MuudgVLMKC",
  "key12": "2Wrr13HYwULX19km9qxyiVTwApbL8RaKEQapX9NythVCUmP9r8uJtyuqHC2sr9yrWJPj1EEtZGYtoqK5xWRg1Mbh",
  "key13": "5V7eweqU33uayhK6X9EJvKWwFcxys3Xb1F5MtkwKwmY7aLZ1MvCKQ9U5YiyragrJQeAh8TxKFfCPY7CyWmbJ4SKq",
  "key14": "PZfxDqiDUqDTp9YxdordtcYrwvcN351Eud84LgnjZ8rVTQQWYmWuHZmXtDh7mNmHNPCpNNibPJ3ACMpyKGJHteX",
  "key15": "Huw4GGmtCCbK8zcnA8j6deHJQgt4uDwDQJ7aErPpZcvAzfpFo1S1w4SNrgCv31kWrPGcPM8raY537KQCQwxU25t",
  "key16": "3YeXzDQgg6ZhFMSToN3yw7sQbEt5eTWVoZ6Cz1urxapVUTZo7egbRrUbGDoSSLkZTLtkG9TQZvj2EAJ54VybtADt",
  "key17": "5qebFnKmP46bPQVvpS5NFWnsUexCgVYGeCT5e5HZcEk9ejkoUfgNcMLZvqZMHsGzPSfraGEn8Sq3S8Jb3yei9q3e",
  "key18": "5dTyyg6MKxbREFD4jxcR2mXGrssBX4KV8HGmrwmqxK2bf8Ub5rnwTMLwQo2CaAuHyTkUtRXmwWiMWe8Zn1fBmBiq",
  "key19": "4zYwQqY3nBD4EBykBdSMfS6y8mWENvDzQrMYkukAiC8WxV9ZQNZsjf8EVDn84qBEZ9QsPH7sdG8FLYZM2MkSdeon",
  "key20": "5iPbL4JWhRFpmXFHFmv1XX6tYHUXtvJmVE6mkjZsK8P7nyDgXBrgQGqqyfN9NzgSs3XGQtervWP6zHEYepp9d1Kr",
  "key21": "3MGRmP9oYxbhSj9rPqGsxmckCyeUiT7dXnXk2LCTx1FumNWZyUGrq6Zy9PVFofuoZD52uWduhJih78UQWKU7KM7o",
  "key22": "2xG6hVN2HFoirz47o49RG8ehHkqtUqBBmTSttWaJLm5P3vFJY9SVbijwYVshqztucgZTBZZc9jsZJg2mUT1sL8Y3",
  "key23": "sPhz5BLtRytXkD3goVHTnZHJpDvY51v8AqFCdynntQwuCNB8c8xSK9KHb5Pg1mNf5wNL6gaQoMNTmGcUpotWdAM",
  "key24": "26VmR3WXeKnwwEsPa9HVr7uARhv2vGMi3o43afzfNNf7YBTTdt156uoGPiUuzTXTE7YdPtGMFLvFVxAUeRPVpX2F",
  "key25": "4h6oYcuAoKboww1Xfx1i5bLdbE37E668WLv2wGG6ad1Fo2eY6rCt9EoVkT1CQrMQqMUrJoQQ8YSt3WRHQRhR4WLz",
  "key26": "57ZrJk5TezBwmb885XTLj8cuFTfBuV8c6WfhYyNzAExkqf8ZYuc86ascqhR881ydCMhDkE7UPdM1Go3JdV1ZYgAg",
  "key27": "5gLJRHQMcNVnA158V1NcgggdGqRZUCsmW48GFTyfrY2mEy8F1UjA9BaBPQb8NXP4qVzW2XbWabQCQicjyw9tLQhe",
  "key28": "2udHSzZJWLw6fBMR6BTvVtC4UhK8feG1KfJ2Dy7LTKPuH9eU2tpZE2N2qkxgH6KoZeiVfi7AbWUjoXcFdLwYhx64",
  "key29": "2f5t2YdsCSv1u7TcRe3DWNQMRzhpbnt3SxevWvaZHvbEypSmaKTqFXxFXNLGP6NZzxNm9YyAPYDjarG19cBDrnwf",
  "key30": "PStHzqHGC7E97o92Gxjth7obwAg5Lynmmto2uDA7u96MRcbn91WQMBgFFcxhK3erBJurJPuyfR3g88Xg5NGRSWJ",
  "key31": "4jbppPX2P4NCSFR8yFGhC1s7WhwoQGHsZRzqzk1oNZqJhbFiGpJqQnzyDokL3MtYKZGSZsR9qKwRFp7RRd7ZQLdG",
  "key32": "218TxYr9eNzbzmLQqykoqxU8hQYBSP1krMGP7N7TYVzuwJc7iQir9pUVDoFPHEX6x5d52ZPZYxz4yDUdfGN94mwt",
  "key33": "4GQY1uQ6fBam83ZxPs9KdpoizLKRswuj4RXavoVbPcYMvcdRWKRQUJ2zHSoGC645j7MwvuTUg1QCE2eXnWUqX4Bf",
  "key34": "3ppbC2XxFmQPPt3x5cfV1KLfWUpSjZGgJubaXN8e2GU9y24dgrHQsPj9j5VcVD6EEhYApoLj8LjJxXeSn49S7XSr",
  "key35": "634qTaNXLFFAdCehpGKtQk2ky2YQAs68WBmyngzTXbrVYP3QjVeJTwybYrbdQxYDSreQVKu5RF8GudjT8VsE5PBj",
  "key36": "rXfod5EnTxseUcupDuHoNDToWdVkkvJ8nHLjak4RDgyLmmNyR9cdZaCrrvHdMF66Uexp8BuBBgmrffLqxWo3G9N",
  "key37": "3tJhXUJvBqDpGU6oEHk3gVShamJjUgGhc9bBU2M3LXchHJZeJSiZU6GJ45AtYfa4zpV7BAmk6Yps21t8bWDEz1e9",
  "key38": "3vCTZ42atG3Rc7EocQ98fjyoy6L5usV2TgqgLjv1qyXeYMDGs18J1o6EdipeXwhdUou2etcr4yXZAH4xWh1tSQQd",
  "key39": "3QyvG5dcgmFUpd6hQXvYMEYhBnTtmb7fh45DsRwqUEJwMXMTgqEnN7vpzsvN2svwhj6Kfinpw14MByctZMisQr5",
  "key40": "3Dyeop6dywg6BaUsxudhHvAnkzaz2BsrcZ5yjC6rf5xcdBtrd1d8h5G1NrVWUpmim9PEpFoEW9nGmSuvmqfQUeBJ",
  "key41": "5kZp2YwW3MSV6sxNQEDarBBATRiQrcB1sz2hiDsKe3HjomyPBeV9arasd3RGRMqJs2M5FK5SQrnuVdYEmAHcvfSq",
  "key42": "3x6Wd2NqZmoeGPgz6TaXbaBChK64FgViSDjghUtDkLdANyPVjE1ApPPTeJTWRc66PPmf2bY7vpjtQtWcuKWpJ3ut",
  "key43": "4GAZMkCDMyzAjXBZPWRUjhK4SnS2Q2V2iuGCxXVzFG7Vy68myjo6WjxDgBShLvgmcjCb4vXGNivvDT4SC9uegfL2"
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
