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
    "3xdS6Tg3VVrcHhRQqb6j1psLNiS84FV59FhfghFZMDzqwaqqerhJGNoCvshFWeWK8knNuE1xbTwWPfozkPpGKwY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s8CoMe5No4Fj6x8zb46zD2SAes5ZvcdhUBtFvRRSReekLfN27zDsNiWMP9ttyW7YNXkNk8CW8Upk48qgXeeiErm",
  "key1": "3ERMiam35WYw7iWJ7NF8Ywzx9FsgRxt4WEwgXTy9tCpgX43XhEXDSdCZ9shaKSWZUTiQZSS3bgBFvaLzdzxBJrKb",
  "key2": "3z2NmigSsU66zQYpmrNUjpxdZgaZ5N8TKWHm3BXfXrEXVe6ydburZzjWkRUxRicYAdjEPZNFNod4QR73DgF3arAG",
  "key3": "k7hWKeV1jj91TqY18LRz3K4dpsmVmgg2svXKHiXtQhVuFrpmVf3kRsJRdcKmr3hwYdjofP51hPFkhZcZA6hVoAM",
  "key4": "4Z75rBW2PiyhU8ap4tQrPL5yND8Nc2mTdxLnRH3hEapCMWHEpYFXE4UTGANiF52wRdHnwPd8SYzAud5RuDAN6v74",
  "key5": "3fGZaeinp9wFr5s45i3Pq9WyKe4aC9G8EcKiUtS8DduYb8FoLnxSZi72TgcyHbpPdYMDQwtwvAR2MUv7cM8zTat9",
  "key6": "3RqRvhTff2DWJByGsRBV4zb7UVG6uqLvxeVh5gZBNbi8Gn98RggMLLfd8m19pJVsHDP6Ck5h6TE9jRsfkQuUBbx4",
  "key7": "2k7idJaXdDtEp7P3n7u61AqgBBk8pmyUNNNuMe2f8wyNDXVzH1mvZeT2L5LMfn1UJADhQRjAtsARsZkDxKsjUCPc",
  "key8": "2Bed56Sp9r6hnNoLc4sqYXQMHisUwtmdYNAekdGVube2EwRSYJJNGp5wr8qmnjx7ZdQLCnaNRzskXxCSeGpHubb2",
  "key9": "4v5di7hgsHCDof538dvUA567UwF3LBtvi228xiTBENMKpYKaPve2oHXdkhKxuLXYYWKCTLKGXqqfEnNPdAMuCkJm",
  "key10": "4yLpBmAi1zxvtmmrP6NxZgJJsjSoD7dJPb1tQhuS3xUr36t14aQhjAcWojXDB4nmLGsN6hVj5CJYbZvnk21epaTy",
  "key11": "416LqQ6BZkMcMawtguDxV61dYaDNuSWzoEC6E6UBgk5ye65g2RwmbFpMV35LtXYt4DcGf6C8PYmLJU6pSvkZq5oP",
  "key12": "2mojbWGWjm62uD6p4eNzK4hB7o5zDbVu5ppmAHv81a4ejNNWTTXDS4FtmXmJxwmHHw7hMFB3pms6ybRNiHAKvPFr",
  "key13": "z6Ne6LuipRQFXrTyX1n3j5nERzhKCRtJmBUoJR54Yr5167PfYGE9qaTZ3XUjjKddSd9TDNxFCaKJWRzLTLSkyXC",
  "key14": "22sHkmpmtxzkesrZSaKkPqYUDhduDjukyT73RNMjJhdwjVtfPauXoTCrFbRM2WkUAFc2W8hYPW7aDHmmFx4F75KG",
  "key15": "2te5KCNCsv4GHu2HzpU5YaisRYMuWSo7V2UeK8HfXkdfFmohC2CrnX9DC4icPZdkkh8dETZt4h7KT53mU27Uenjx",
  "key16": "5zf3RGp5nM5zvTYPa3VR6fghAAGiHfeH4EwJqRhK9BS2bsoHvtw12sARL51TKKE69nLFNm2hZq6ccfi2wvqSbAsR",
  "key17": "5A3RKtWwtiqiBco1KaqJ6942zNscdoHSCQ5C1Vsr1Hym3bsX6sdZDzWVZhy1ZTuT5WAit9uEnwoVdTRJAWNmSoQx",
  "key18": "4D8dR6Nko84HTynFfgbMDozpXLPntMp1amifZ5iBh5dFpNDNgkKsJBxaCkTAReXSqJeSKx5gFMpQZ5yisjytcV9B",
  "key19": "2GZsNfwGuuJaroFef7CGiBVLHRFH4uFqM1aNo6dK6qgkgFkvAkW7hPx4WZfrhLJHNdGQXB1Go3WoLfQp4XsMBUkb",
  "key20": "5atqUqNaVJnVngZ2GAf8q9ABdMeNHL71Qfuku1oiCT7fjZWADeWoniwKkoGMtWq4eXZQoWwPV5fTz6frG5bSdUiC",
  "key21": "L48WXb1MnDfLSZFks68P2Xoo24qAzetztguXiQr1ckZCGeDaXFQPo4Go984c655sG6rVMSnnYZLZMpyDR2km5mw",
  "key22": "5oS3M6yfYmS6CjbnuqcC9qYNaUc27k3bjvx62zXfKyhmxUcpcNUDZUfaPNaANmr7t8fDSVFUzwbqC9pP8ZnNaF7k",
  "key23": "2Vgj7t3xDFHwyUiuzLTGBytekKRuPRDf62s4RZPzGMTc7j4vKhWMJ13b72DjEwGLejB8hFe9aQMfvwegkUnYtMZ2",
  "key24": "3zDDsGW4zEKdahre8kYgM6XspzDKdbzm6K1Yt8rVvHNAHhYmyfBRuKJvnpfAtEhNypmKb5AtThxXZs3MJRnE36sF",
  "key25": "3Td8nLGGQKL2HWbBivve8MwpnjUktBmL1MewRfEGZBX1GXj9SbHJYBA4oNqQZYWn8mJjYVLdqK9fRycV5RHfzTNi",
  "key26": "29cwhr2Sm9Hd3wrywN86LV49qP4EG6NxMwrXQN8qi4296guZswGFzNH4DPwVDjvsdxt9uaddVv11kUGD16bnLB6q",
  "key27": "2D1nDW4jLjpeZAUFNoiscTQV5pyDdnoJcxLHKVEcY55HrEYbQqvdPieR8XcyZ5TM8fDX6GfVvzVa2HpokTihsQSN",
  "key28": "2beoPRd5cvx1abMTV3iCu5i8MQoPBoWvK4Y6X68wP5hFFT6Td7JMgXm6pDxX3UF9ynJ9Gu8EHodNSCmFDsNV9NtW",
  "key29": "3YzoWAWmhZHFtYgDQ7nj1yxfCQBhWYehqN6QZ7WS6o9gEryTajjQQYoCGPuqiZyro7fPqUrJEMzy6yrZj17N3Wy3",
  "key30": "3evNysiyiZLcGJwqKx8ZjoLxmyUqjcvoDmv76kkmBEPBmg9W55HW89swtbybGbBZeoph98tKtCaACM2XbQFymn9T",
  "key31": "8SmDmKZzcJmvprJgwQbUshUNHrYew1yUzQTDkYRUMJ8SPMPAJ5oTAZarqKy1FstWxzhiqxko8T17nwUDsRXD8cq",
  "key32": "mgkFC8uddWwHYVo5uSqzDGHMJaKaAa9Et75vUV63RXHqYuwt926m5QVzgg15bJG9oopGfNM6q9sRKT2XQffQNmC",
  "key33": "3G4PPw1begpENpSSGyrjqur3g4r3jMge4Woq2DY2sXDCkKn52aT3aiupFgPEfsyYZT2WKSFosCNSEovfwwgShFNu",
  "key34": "2TYbwmZ5nkxX3F7rRVUS6jburcZHoMq7Q8Y5CSwASZHWsNskHCye3SKnEumXgEm4ZTCoShBCMpqRTRaj9MsXEnRe",
  "key35": "5yTgbN84XrJh3zkGHjD4nUvNT7ZMbZxvtRFG9fpVTnVZm2jVzeh6XoygacTeXrQg7wpjXsCXNUpZmKBmjFEqUcWi",
  "key36": "Azj97SN9fAAXb664WTFpsNYz4xo8arZpkKhq6oJhtwomMEswzanAGLwS2ycCwTpLffoTgU52U8UjdTgNx6exkpu",
  "key37": "37zZwaWBwPePKgQ2z4rn4rjYCRsLweomq2FWSWEDpkhFzWSZSfLV6oEG3uQieU7fLSZJ7qRrcfLSkFy2QeLiTMcr",
  "key38": "2MQhTd9KHoLW6HPfHHtBWMueNjo6jcKi7vEKYBDSCjnN3RoS4qmuzYFT1taUodhJv55ir8a9pqxRzEPdNhJyvoYP",
  "key39": "3mZ49KUyKTtcQJD5wsbQTCeW2YLmYK4TJq3TYkgCKQRwT47CKHiKX5r1ZPAdgnDyxDsSHiZ5h2nkxVJePF4px2xD"
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
