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
    "3Sf7Es9xHV57FtHw3iHWMF16LEJU1zJ2mASwV54uK8UGaJvoffLHoVF1hBcu8TeEKw39WcKNchDG6DiZbwWugUyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvdwwgXQFxNpwsCV1E1kwGM797Cc84FUCPcUjbEfrCuvxWr21gmkSuSaJDRdPHUWnaqrNSdPyqkHqMgAmu8LVTF",
  "key1": "49Ha5aA365dskqqhjYhqWUzUuDFGGNNfuz8Mmq5NVGVq88HVjg9u3GXZ3gShZbMTu2oWdpgv683k63LidhhKfw47",
  "key2": "28m1FpfyLG2vfKRqjpnLUcAMuYpUsv5BK7nmqiArxbi94j2icjRYKi2pVnpzhCFdMMV1SXT67zLaXwR12oy8S5CM",
  "key3": "JjDVwk6cNhWm1gUgA1g8mFcAyjB6Enee27DZtaBaf56ZQmPbYv8WPu33gVugoFfngpALkaT5Pb2wpcwgBc6eeNz",
  "key4": "cRS8p9JDS57uWbjz5uhLtrg2iVsiLqrgTk8x9SRzAU9D21Dh4Ys7QtxnJxYNauLB7UC2gTo3A5NshLh7TkpbMEs",
  "key5": "4Dp19KQ49U86FtxPqoRS8rhvwQKr59YHCApo6hL8QP6NFfjEbyaLwLtguVGR2bYi2VVWoXDpaTnBk9bKPihD8zb3",
  "key6": "jm7imCQBetqqTtgwtEfrhvfdNVu9dV5Qnk8qffDfcFxYc4epMmrEmnvRMLsZDyQFLKKSPUaUPY1qq2KerZuRjFm",
  "key7": "4u9jkbLoB2jEXgZe8GE1FCC6i78dCZar4UD8brJCYC7WKGRE74WvTFr31aJfrqdKw7aVaPcGddZPmRk1Ht1S78QV",
  "key8": "5bDKnyUm5C2KPkbtZJRU5xdRxGkiUvMENX1QRLJRUmZ7E9uJzJhLk2V5qi357DrCb5B52Vyz74ThQScqAVX4sKvw",
  "key9": "5vTduCZKhXqutzVpuH5ytQY8apYUvhMy2vUQkRqUJ7irW3aeU4vDqRhw6tco83i8BvPXPrTXxHmeSkRKPbFwhbSM",
  "key10": "9cv1bYPncHsf3hvmJdYtQYn3Tj8sHAJxjLQ86CyEqJb7DwMyh673LCAmKNb8PoeCqNDxKJQXr9gf2AdU4hKFcLw",
  "key11": "2ymjgJF3pJJSMjPjqw4SzpNg7yMSLmZzs5CCYUESCdPiw4esFoGfTiPZCyHD4W4z8SjSoCGFNv7ae1BSDUZDW1gs",
  "key12": "4iPmgcSBQkMuksTnok1YT129iDvCUJkepAt818iELzgQGu9YckAh1dMGmAnV6pyYtwKTXLM6JmCSvztpZCiACEyn",
  "key13": "4i3DW5ZjothkT7mokNE7kezecFUN74RxKmf1s6tUapAgtMeSn8NWHUH6uwvqYyo8Jzkxtg3TJvwVEbNhomCpBK4M",
  "key14": "2Ccgu4vPZ13PMcf5sXyPS4BZMWYQeq6nhZ4iaXm7tUqZPk3N8xEEnqQWUAAdmEg5RCeD785zWANinwJeY2oy3LfU",
  "key15": "2n9frsVwzmtxmt2XKSC6oUiniAaeTTkxmurJLA5vZCRticfeEe1HCt1zLGoT1utzpNYyRRbSAWFJCsPNVLNQXhQT",
  "key16": "kBrUEKA7wscrXFSebiuFefm7BxYCHzQYV74C1A2tc6xBR2aExQYavDTjaSC1X6mQPNXRawS8s7aVL4PH9Adu9Ub",
  "key17": "5pzzpHkc9odjbXoUxPktcPhxAnkLxuDQUGvs5A2jgzx8zq5voqR4njez2CCJGM5pqMBxvf9eoMQnLSsH7Ct7ebDk",
  "key18": "22CN5CDpUYFnwRq1q94DanDaEN4bBM8RsUrWEnZw4Ntz6zcpHZvwwrHshTTkK2fs6rHEgS3pZzWAo7FtbyF1AyCn",
  "key19": "22VUyp2hJNLFhtjRdD2WhuT56qK94DUajCAm46kyb7BeMt6pVSXKCsF8TnUqeGTBWEkkg9fvwDmo4EgtCTPYiLyY",
  "key20": "66yXpvmoQMXJbwMpobJBLXqjv2RbCLJQk2NYoDEspvCbf1zuQYB3c9MReifM3NF7T6WQfQFk18nJACQze3EFSVWX",
  "key21": "66vi4aaPyxcrRP1nuXWvU7QHXEu8mumEUyXsCYW4aJdTgRz5z1s1rzHhow9NeKhZ226Gw8vTm7sTCnkzk3Txuofn",
  "key22": "5od2wWaBWF7N5BNGaZh48wSfjBVoV7WMNU37PUpitYUsNTkArY8cQCmZ2rm4s1BN9aQnq5hRX699u48GsyzMKTZT",
  "key23": "62YHrPTBwRKE9JZkfprA5eqPXd3nRfW59iFzbV7zVRAuWDdkV2UJH1sXxXsU8Y7ZByG4QCEM4kYB35RstSau1i4v",
  "key24": "2cARP4z9uraFYde5SUQbnQYUE6JR4Ku3ioBsJ6969Vhv6FNfVTx2jNRMfnJguiVTZtBxP8mpXxQBTjLf6vzBKdmS",
  "key25": "5uCgEwo5AFAuxtLNYzd8xdUmQzJ6xzd74sJRiqhd79gNJuh5Jeo1gNgtPxtGhZetkajAxn7aBruugMHquJGzppai",
  "key26": "2GrcKQanuXxbTUUAqR4KAB99jFG88N8LyU8H9nwsWRhabpGkgdWzHDu5MmQJ2mnce7zq8Ns1AD2wwSNng7hJTs2c",
  "key27": "4PAN9EYJQnm6uAkVgvLHemppCnASF9dKDPUpHPd3F5dKhJTQzKtBpqpuzNe4dABrYZ2brGTez7jfbHVcLRZYRQv7",
  "key28": "3YEesa9bkdHZrkXgV9PphHrDCQTNGYf3y4RKYeUauXFK28B9sx6wAdE5VRSmJXRt4TK3CuoLctTD9E4LiswKFhwX",
  "key29": "VA718nLDRa1UPEtC7ykSJvyLYLVEDEo4FMxcxRFpfNSTro58cP8dmSyXAB1gogGaoPvaEHzSXQ51CUQPimVYun5",
  "key30": "hAxpuXpHEvAjMjZaZ7kWNZM67xxarF21uTyYvozVRxtv86ZbxKy8GoVDCHuoRTJ7SQrnsAr3iCHbBctcMfLk7kd",
  "key31": "bgweVXXBnhmhKbitKxnSGTunUFbKiihLAQj7jouS9P4fqgwQkBgfMgWwyf6CvDa7fP6uapzwEKSRrVzQDyb6FtA",
  "key32": "3hZTnfg4XKuRHZzKPsiKak5G2T2zsjK2oP36YeyNBL2ZLD3BTrMzCoWYAy4DSwdBeao6sn95cJYo88purttzpJoV",
  "key33": "3axrLGfvgTPbjgWdMc5Z3NWDpVQ2jhHgHPXcsRM43bB5Qc3yAJBVnq8dRSdaKCVRLPYBSsabi2BJ2eJAvPDQjLxq",
  "key34": "5Uw5Gfvg7EZhWEYxRjHM83sZ3MJe5Tr9ottqCv4HmxcH53CNmivsiTG4ALDJYidC2MMc4fDTZSbdazjLe5VAq9Jd"
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
