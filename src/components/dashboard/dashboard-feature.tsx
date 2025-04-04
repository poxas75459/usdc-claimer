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
    "4uGQ4zFQsYrwqmoLDpTxJQ5HtCQ36jaiktNgaLKDCkFqnJ7i1dZapk63M7P85Tzz9hBuHZPNoGv3F2oQXog3Si5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FdAd57sDqiHwhqvvSZQbp9vjTQDsvZkVqzcfgDKWorBMQNX2ka57wBnnpAZ4SgGk59M4gmajGioMTGYARzRUM5H",
  "key1": "4D1JWxceRoarrjkvYFnxDew5ZFKmWhnNa5ejTtvmYyLQDwKEndrwW728bSTcbon5ewxwFpcnRzTxv1C84p3oR6AH",
  "key2": "2h4X1Tyx1tmkodZDLp121aMhz9aooe34CTCtKHbZMTFgfTxjAtBENBFweSHajw2EqUq5px4d1FJDn4LAQ4kNxAoX",
  "key3": "43ekpXRekdqnNsFgLWR5Pxtfg6Riy9ZLUj7i6NNxbNdAkjtMZ6Vo3y5Frp3eJFvKAEUTW81PRSQQc6PerFxUkDak",
  "key4": "5zV4XjywPNPR4vYcyEoXBESkwnUW7CxHpJ2wb1pmdKT9sVQQFdDf71nirVYUsXDJooH2UAmxP1izW4hy1TLkKavV",
  "key5": "336YmaQP4pBy5YqoXvD1cbiU4FaorM1LNd7pquoTqXJnC3XupaFyVpcYCPbD1RGoszNytsdPNFHu4gTKDuwqz4Qu",
  "key6": "3Dv5vxzrSThRJyUw1md1F9GshP6r74PBJJHSb7yAyyF3qwiv97PwzetxDtTXtgXGsW4YVLrTCRoJuuyAYsmTQcsd",
  "key7": "3qwXAHhPX8RZcGsby2zXiWfbDRnqzXW6tXU3r44Ze5WWR6EQCmLBHYS8zki4wwwXJ7eAusM67ievvtHvh8gr31Ed",
  "key8": "xanpZzkjf14grqGTD4Ffs4dzekNEYDxk236wJxdHK47NfEhzsrjgZgzxkPMTZXNHGR5hnBGRC4d2esUoXAtridE",
  "key9": "4Lg1KAeezswNKaWxniLs6S1D4TjDozg79ZyG57e1j7T8ShNFRvYN1SByTrQisLZZW7xJNbWAoKzSqk95HWtGcPQC",
  "key10": "5DQQWn1ZbcMvgYArVKD1xhYeUsUqjXhPHupjrY4KRdTbVnbUef8TpLcmDvQChWghPLLzqATnoLVuZadtbkFkQwe7",
  "key11": "5rVEeiopNNYCzjfNafXN8KGQQkPTGvkCg3kor1AysAnupu9n3DBdo13AhoCpR9rqBf3G4c3UxNXAPguztoQUC2UA",
  "key12": "22CHkQgXZAGbpCUcXXzbFBm4NbHSahtEXRuPfdu9MtkFEsMGinHfTPMjZzHvx8e1D8xSJ7S9kRVcsnP7HhK1sEG4",
  "key13": "3Nwihxhs2G2Wq4YdEz2jHgJjEzvEq7VbsDvKnSFi3ts4JR8cuboBYkTBtUPJrikxoMYYWh47qFwueSx2hurENyjD",
  "key14": "3zwgNcH6QJ9Rj3VPaTPz6M24CtahcbntHDJyhPGLaHrufzk6aXf6hdsjdhV3yp89aNKJkcjFBfj6XSsGUEP12FGT",
  "key15": "5VGPDCFU2P2mCHsJ19cr2QaQb2kWJVYpPupdNDhWtmCotrtTPcbM4QW4W2hjtq669JN4P14o1iM4hFtjjVoU1LfV",
  "key16": "5SPjarBcaVJ2KXsKnsaAYFKNoVfMjmq4LDyPk8uBuBmrKV5JYzL86gCWiEB54gHKwaM3zQgn6Y7fiNzU87Y9gyZr",
  "key17": "2fWSMM1tFhBf1catK96s1DWPdLRthWFRNirjcprEQg1ZquScam6AxJbabaTirG1WZXvFpsKCWMvCrb63FZjkveN8",
  "key18": "3fxDW3upHamQ9T4BjcFXS3PVGqsH4FusGXud9BTS1KCzPawGFZp4a373PzmQdU47M41bQ4hWUar4ixjBRVm6DLLd",
  "key19": "fFYCWv2KCbJw65BfEwr6fd389EDasPrhsRe7TEVH3SzEEPnbvg1JZSUicjvcz3DMMBsEsNdyuuF8ozUCmq3bCqb",
  "key20": "3RKNkCdjPEsTgkcvBueLwmcjsSSgKZ5xXb1LLPHzFsdPf37CaW3b3MaEDEZcRuvxHzy8oYr4dtuAC7eKstFcegX3",
  "key21": "exX5v1Rv6V5ASpBVJygHZyghMFRZkMNhzGqeJM9WP9kED1Mfh82LTGZrDJGqDcmJns33KdjcX7wGiYGtPgxX677",
  "key22": "2Xt3ZvgA1US6uj4dZWSYbBCwy3hnPoD6wFwTYmVLPSYMRAYpcvKV5yce6D99X9ZiyKJVTeUPxN3js4gmfZbnPDXW",
  "key23": "2FQVJERR7uma9D24Rn25K86JAJGT8PcEDBdSPsQGYxnuohPYrSnwhCDVU1PqNYwTWRstSRdVEafQCrc5RUcdix2y",
  "key24": "4CQH4zH38dyjFDb2hxo5wBzbBukYkQJLc25PTMyANhDgzBSVoHgnEi3vr1ETnhJTHX76ZHPtvqGHkkSdrkL2RQo9",
  "key25": "3BiwxWGxHQiXtBUWMjrPE3nVcv3YFZ5UpsHzpJhoM9g81ZETUcQvfJHRQrTuAd14JWqMbXmXFReQWSabddSE1HYF",
  "key26": "63GwiaxBwz6q3FfXn1LXTwfW8TG1igLB7BdFKBpdkXSPTfDQKxBsa7ip9RtHuxpGR5sjNp2umJhXWNKsKyJ4kWKX",
  "key27": "HWvo1mpVDBjRjv7hz2FWpXVcVomGKDsL1tzFDT599xzs6yKYrrp8D8PYLUU7fTdFU35brnhwuwYwUDkTBBAuDKq",
  "key28": "egxknZmaYQbUYM9m28tXf38JXd8XqejRa2S8uYHsHVq4R1ueuKYXx89utjmZarzAKXmqj2opXND7HEt1TK9gc2t",
  "key29": "2zw8V9DjoxFxjNGftgiZsuaTFFJuwPAerRRLXKeXzFqGv2LPV9tSg24Xaor1gw5EcDZwCQa8E8pgZVSkuKAjP1JS",
  "key30": "2E73foBFCYEeWFUz6zEY4MLHaHss6M24JkaKcvkghraCyKrJzeNkScmABWtALJ9UiVPsGx41eDQ9W5hXtL9e79KT",
  "key31": "3fNhhCYANUAg9Mra9zan8N9p1A7mWPWLov4gbmhHPa1wN2xjoXJvYZZZB2LhDLJEuV17hf3ZScKiSnt9tVkadTLW",
  "key32": "4T51zisbPxPJEFxyhtuSt78sJMAZbYNWVroqevMH8VdZsnRhRVjJwSxobBAz9LqGfyMeHcZFbYkzRLE9sWkpxMuw",
  "key33": "65e5WaazzGmoErgAPj5rENy8JGWMoHYLhrLmwVkM1y13tSdWuLog9MHCoezgqk4LGMzKXrspCEbZXSsDdH1vGCNi",
  "key34": "2zXbYwmdTNoLvaF1NgXwUjuKUfDvsuJG53EW3zRLuXisMCSP9tGqMVaTmKTZS75DNwD1yWB1Ery5u28uDiQFgmQR",
  "key35": "5fHYkaopR1kc8xBhAYUfR3SoMrpedYYwyEXrm6jfPjEHsavrPjKx3dQArwR67qZ6K1ZYjThdZApx7jnUfeV2zE8B",
  "key36": "27B8LYtQEZGsmNDUv46RGka3urkKqWZ92pWfUb29mLocADg1vSZCaxfw7h18knkRFgnmNPKCk7Vw1LCMLGS6yUEc",
  "key37": "2caJvmpD2djsFoLaKPvZgsvcNT4tmCT8SNQRzspkbMvRRbGXYCEgsvZao9GBiij1k1E7pX7PhEErx88hNAP279rk"
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
