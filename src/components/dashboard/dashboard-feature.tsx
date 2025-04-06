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
    "2N8J6WXSKCsuHZS32hn3n8Nvm16k6NPpM6hC5DyK4vDV5t96WgwwuMY4oxf9LK85wRx3oTDttNmWSKrCFT6CxDAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Z4RXb4XZS51ApYQBYajY9SVXTA6sEsBCNNMjKTaTjo2W6rJwMU3ytKXAM5PdoZr3ZgHYsk14Jx58Kr9wpUFT3E",
  "key1": "67KHjoLwa9QguFyzmd55xYZWfMgfs18MKiXBaG6i9yzoaDHUvfPUmkoZT8CUZVXvoZjzdQEKNEMf1hBmddo5m9mf",
  "key2": "64SmkA6UEsCnmUW8KhGed9jYyufSWXiHnXZF21ZwGpmpDsv1Q3QXwk1b3Zkz8By4vLN5ySdcxKEfxnJVurTykZBY",
  "key3": "5tooUUrpHH76tQRzh48E57Kwn7xexsA8MomcSw1iu76AHocorqLH74RNonu8XRpCM36q3myYNX4dYwe7iGnqzm8",
  "key4": "2rssEx9PVdFJXpFBNhwy6rWg4B3xLbZcuPoASeR6YRUwLo7XJwPydpSQRU6BtBogeB3crkjCf4iqK16HqGZvepKY",
  "key5": "piiFsKiE5A7PVM1Swd2YEHL8kvPg8Ca7MPJvjH2NgzUG1myKst6xbfAKwKH5aGtZRT5aB5AxAR9uitm1epzg5UY",
  "key6": "4hxYqqRsAShteYq6i34Ln5iicXWxxQnLqfTPQY4HtwxH9NsPtNnkLC3CBdxgd271bVoSf3xBtwbsc7eipCcNPa1z",
  "key7": "4jy4rVo1HaQfpbnGUJ41TVkMb9nAkysq7Eu8RjBv62FqM387rNUw2sZexgAoxRNF9xseHVDAkn1euGUj627fxvEB",
  "key8": "5pgbLTgeyLzx521KtYfULm1dDwGZC3GrcfpCJq4bDVNLvFVsbh4yCH76kpwpLqR6uQPbPDQWdwtoqAN7Rj9keJvG",
  "key9": "21pZVoFxLCN4bniCrBRYhqERKoq9edipKnv59jbgoDb1ms52qdYsDqcCdu533BQ9nmT5XFtxHmS4KXU2fabanY7N",
  "key10": "4QCjNtY4g5FgxTwydfQBPhSNQkXttftCr1T1pYjE6dzi8XyGHzfTQD4ZwesiPqWd7vod8vCe9tT1aj9GVn5UB5QV",
  "key11": "4go9MC7wWuRMY9Gy2P7FRS9T978r1RvFRjZeAYYz2UEaRPAqYCXkiXqd1mouFYfAQeV8B4w2PLFWu9HaGkf2JRen",
  "key12": "5P59DgStjfbC5ekL6LF5JNwtTJG1j9FWHutZLu48C1ipTAhqQ9oRjVKBK6TMgxK7qr4KHmU1BP6eCJBoubdNrmGP",
  "key13": "39TqM2LTHo2HEWwmmukMngzuEw3iLzogtetQVWuTiM7boAb3SLDNJRNF2bbPRiwqcNSJVweNRSgqNH4nAG43wdRW",
  "key14": "4H11zD4nFzUJsp9Tv2rATAVSHg8cemXovUhHvHnSGTszBKHkQ78EAHbnspUM39WiUYdcfRi19KJR7xGESJsfbm9o",
  "key15": "i5sDnipvYmNPzTibaK1DJXxuhqYbhRF4tiqZDC98jCCvwHXSSJYy7whxoMT9aZqqmE4gUJLhA3UtPg6Q5cgqpNd",
  "key16": "4YBdijjPH1uGHJtgGSSfkwKQ2yyoQRgxgR1RMvjQ3vvKF8bzmkLWLoE5AmXtNtAfrnsUH8s8YCmfX9c6PEW21urF",
  "key17": "4giyShKsUuktuwYW52ctkW1VKYNFRoJaxdCpezcBnJAMRTEqq8d2KQAwqAPgzf2A5ht2iZH7cjco13max1RWA2uX",
  "key18": "wazmMxKcntyu9hx4LEozHsyaXce9JFJc8ZPxSP5yZ2Uv6Y3n5em6nwNVyu8sB2XX65ets3oUSuvhKuNq2K2GJ6c",
  "key19": "4K8wjdVyjX9SbQyRHiX4VGrNA5J4qG9Pg5rmtp8ehB5LA5h5twM6szZhypXbD4XBdxBJ5Ntsu2Dh8h82AD3ra1Gi",
  "key20": "3NYrJsDr1r7W9boQoQPzuH8rDUrUwc1Hwfqt4tZB7bULjaXP3RdYAA192EZt1sg8jNnNVGaPEe4wwygXxPcNazCa",
  "key21": "4gjQf7uqFsGb5otnPQjwdgmQSykwCRbhYdmERYUkvC2qEjkXnfrJXbf5CQcpUxaLuGmpNQydXjCzrKMKcARtr8Lb",
  "key22": "4A6o5Hwy9Zf225fVLaZ9FGQemVj9EtNgDFfAZN7qajq6CHp8cdDVBwekLGyNhHKaQus1cg66tvswi3gwmPjmWnVY",
  "key23": "5Y8rNFqtevkoYk3bacWfK4WGhQyJKZHgEZqphY6oGK8TwSfpuJwiTqPevH8F43kggeAFyCUjBnFVEruE7zcPSukW",
  "key24": "TfaY8DiySf2GiXp6aiL5KQ9Z4oaR4Q7ESJqeYbod8cUV58C1bGeBHEZ1Fr6fLFvbGD3mjZH9BkbSfgBYX3xYTNP",
  "key25": "5KPqyxmxVbLmEinCAE6LrQZewipGiZdpR2V57FJRBX4Tfh1P6uvutsjkyv7aKNZFkKLZpBytGwUiVESP1ntRn7vS",
  "key26": "47dXkh4bA1G8f1JF51gfM5KuS2YXhaU5Gf2FJBUMfwFpsyQ6Cc19nTR7Sa16oQB1LnHMUS6aBqsbaaGg9qeEmwQ3",
  "key27": "2NgN7esjGBtRDyzHi7yCxBzSHJrn4SqVPNvDgSngWr7DjvUFFbkd5ZYaieVotYyQjr5JHsKvT8ssksQbq8JSCDaB",
  "key28": "7xd6ga7VysLEov6xSGcYWgch65Mb8eG4tz8yiNbU5FJja817Lu6t1dXXGKtpYZMHyiZCQvfrPo3XFAH4BZ8ghn9",
  "key29": "3NU4iwbsaCRMB61kEW2cUjdHcUDiNinCi6KBxVVhyEi43WXLLivE9dNnxyFRRcReNRC19o7d3FEC4UMXbS7PS9i4",
  "key30": "2PsZPaVgo2Mmt1LFHqVcm7v7EsB1yRFVw9UUm2WtdD7w63oTnqi5voY6RBmJXsTvzo16CEB58RDzq6s8PLrgJfxV",
  "key31": "4yxZ6dNACfJbMoeYuVUK55FprD5rErtBaaCD5aKbctcZB8q2Rubykq53D83UyWpHqt2LTRmXBayQVMyWXnisorjb",
  "key32": "4Xa6u2hLD5oGsX4fPzKduB1vYouDc6RJYpLkdFEuKH4DcEDb962U58L6AaCDDDh1eK597MvG93Qur3RTFwT6eoiu",
  "key33": "5G3VZJUqbvVqCrdBmNqaaTZvZfuVAixG16XC8T89mKwyEHfZbkrif9CE5UkWjecXVMW1oJtaBUqoksepZ1Cm8B8U",
  "key34": "4woLzpMratHE6SFTxy8A9DKWfX6UGEjXJeTuR7TbhsMkABYih1TReN4bntxqe6W4Qu6jQ4qnNmSwEgaJT95EYjAB",
  "key35": "2cqv6tYAvMS41BSPM4FZVRRLP48DB9KQLimi6aEj4asb36nm35h2KHtkWvk3oD5rdFfKyxarnxpfrn6xYxcdRDUn",
  "key36": "3zAcV1v4LJMp388U9fWwhch2eEW8LaDYs1KtWBk8Lhk3ry8ysrc4UZvtQG4chfVc27RabHZgHTbTy5SBbVbpxNFy",
  "key37": "5K2MpCVyhQ2EJGEihGuinxWjk66aLzMq64U73gR4WVvU3xRxKyFSTdcsikPfZYxhqfNGDfmo3cbSvnG5cf55QN8z",
  "key38": "7d6hMTAXSyachJ1XCm4wCdNNR6BExKcdWNCiHBdNpBHFGXHJQiPgjithSgX2xWwK3M8EvWBWeg7QgHQRbYLKLq5",
  "key39": "4aGARQWHDvn1fkHAZyLVMbvkwrsjHVo6MSwUeqW1ZW9HRCkL4fnpEELNfm7xfRmDuRvYqxzNwHXvMHD2tV5LDFLZ",
  "key40": "5mqSHN2mHpmZNup4D4DMT2Xd7riZbCZbr3RPF5D4TEmnxR3Af4DaXSaXJrmWkKj6PSyQbCiBDJumR2cJqwa3iA29",
  "key41": "3QMi24136GvoMjbC2xsQ6VXgj7oMrsJWsH4GW4sqQNygnkcqK4vTUapvyy3LHmknbpX3bjZnX8Pgf4UD7tK16nuL",
  "key42": "3dZQ8GAtHAkvnGXBRHouTA7cGSn7sKpGRp77R8ZAoWGtqb8TjZ1VJGF3Y3RPMqkvs2XyevZoRrEBCavbrQhH3HsJ",
  "key43": "483n8YGuGWpbwj4YHkoFfg7vPzSbweFqY2dS8aJsmHdNTZL7y1vuLt7MX62KNzCYSrhkY9KKfgjvTVGQkAVjvDWy",
  "key44": "5EVy914SZFkZPDJBezXYTd3E4Q3uaKTd3W2eR4CjkibzxrLSWXzhdxCrQwP3FgdWB1tMiUUsQYx5BeeSeHoz1wpV",
  "key45": "58MhA2Jk5CuVbMGquQsxVQ7PVF2Jzh3ajHVPLRSENadFceXoBMPQxoDZqzceTcTrLYrSPCCmaaHsJztMbD95KPrr",
  "key46": "4QSALXPQzqCpDxH4n1dRZKJMvA6vQ8yQQp3bewRu6VfxVy9YGhWKFrNTsex3jMJ9Syk4uvR6MYRXAX9qzSFj6fCF",
  "key47": "5Bdjfy3rhUeWADCXwipMuD9txwm5UAZm78dJLpPZGYLGTkhBL4MFHZfJwUero6rfAnSt2YTxZBjMZoa2omeAcJSj",
  "key48": "2UqZADbvKsx63ZGhgTNnkh8HQqZ2wSS2C2iyWTkwVXYHSLfjb56qpGoZqP62QGtj17ENc243zLh48kidtszotcQw",
  "key49": "34UevbwnkieLTFdmn2gZ86sZjvLMSVoo7dDPHBdif74DRDLz75zKWJuBuxr5RrCdMFiSogJDUhsoubUHsioscR6y"
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
