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
    "3bSTU79njVDF1ZtELNtCRFFCb3WaQnZvVH1m7U16XR1KRQLcyQ7jU3muyyopMVDoZuBQie1rbubsux1hz1d3jSHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rf5hB6PP4bNsyR5TDJvdjApvkVReK9kZjxFffwXTUpMQGNyXmwrSiWZ81AQboH4TKGXnFyQkWYtGn3PYHTR4Do6",
  "key1": "2jsakJbkphpmE2Kmhn16y1hCTUe9CzXefsUdrN4WPpP9z6zLCS34nXv9yddy2puXMpvf1db9w1L7LzZBm3D6eD6T",
  "key2": "5U8wCB2v3UGtCSAVaxM4XxhcTNZ8WrtcsF5UQbBQ7E7tvTPaRd357SeSJGqtiagVkzAuYumHWMy7xE2LeUmFYL8e",
  "key3": "bKMRZSuJz5vs7ocp4fcGXDo96VXVFHkBJnLQiUchZZiy8HA7uo5DuMRp9UjGgyX31xVZkHFrAi51udpXPrQbajE",
  "key4": "5oFoYjWRcjZsmswRKp78TzUo8gUorhrXXKM5LoYZUxGCnQxaak8h18njkSc8pyVguTJyyKvUxGiyr9QPNC12PPGT",
  "key5": "GY6kANVuZSmnfNuhuC3JR6MZxKaM9yUVwUbcEsQrC7Hy6bWWL9XBy3fJt8Uemm1CsC7JTTMBLnTBvFm3fk9poda",
  "key6": "3X3JzXpWbUvnZaPkmvq46WNoxjy52nwuFPB42nsSLzJyBgZK5jaw6FXPA3BWUNmyGLUhJzo4fBZsaXaosLccheHA",
  "key7": "2noFy2ojhP6dQT2LC1Keq2g25Pmc1NZies3c51pBQZadc8B4pKhTkXCtrgWiq5HtxreL2N3KmpgJXXVtRofd2hAA",
  "key8": "2sgypr2BoEKGYEnexzfxFndWjg43xzcujqtRzcW3EwmVj71NsWy2UM3fwLoZJRUAVfEsp4C2SvaXqnUoCKmcDXQb",
  "key9": "5STbek6hGbVvLcWNQBAuRGhmGv142B5bUKyqGmS2YZTprcL9bGeBXcPgnwF2FXgKnVYSemWpi6rTCapS3tEEC1JJ",
  "key10": "5YzLSirN45nML51Z75K1NvnYJUtT5CWmwhDCpM46LiJmzDSA3b3N7kzm786hSe6Mk2ZJa7qxAcUPEPasnGCh4MXm",
  "key11": "4ZAKmJbdgFYjaSdE4Vqq8m23ZwHa8rD6DWyXn2524FMXsZXvXLQQU6UBeYQPpLTrny5zSbpDpzb55PdcFscmtutT",
  "key12": "2hdUy9y4VC8HxiQN9VvU4TzUdHpANveckrHKZ1CZWqf29XtsdPFTruGbcFVdCfSj4pUafJ22gyyqxSGVgH5kVTqW",
  "key13": "5sa2AHwUqp15kYPc25v4fhy9o5b4x4Jx1JRnXbm1v69LvB7wStqHno9dtyYYy7tvKss3jx52akhKYParUuJrATwa",
  "key14": "DQSWBVfr1TnxgA8pjVUoE8tjgdzMZq1YDBifgQc349KAQNrVDCr5HMXs1Ng3TDbVbYVJYpPWKyYoMHoRMz1vgj9",
  "key15": "5UYGaDoF73VgCbkJ8zaHd9C7gU7EVHp2zJtLVzU5gejXbGEUmRp143tvTmi39oyRn3hjQPJ8Nwd36Y8x3WTVm9ar",
  "key16": "5L7VK7LYx5PYvWCUXLMLMLxPeF1yiFs9YCPjVXXAyKeBVfQUfYKp96j29GMKjcYLKgq5aemME35QuzP3DooYZifj",
  "key17": "4jdHRueXmaLpSUtezNTr5X2Q9CXiUr8FQB5cffZrGTYDCN9tcTfXbeczYMtJ3mLzbLut2xmEjgJcvwAaYfV78iFB",
  "key18": "2DQHaVwKzX66EPHAYj5pihuo3JT7VvBYRnxKugq3BWfZAh42t2HPYyLhaAmDoX5mkqT3MiRFBmpJ1BCriCbyUtbB",
  "key19": "3SVtEeCm118CdKD2WzccuPaEv2uWkLPbufENyBGoxZexjQ7Kihoo1si9L7LvWcVdEUEzoUVLtnzk4LK25jGFWS7v",
  "key20": "386urooTyRuqi3YZNLtndUmxzEDNbas58D37UrCtQwAoEMXvGipF1sYebDkFhVRR3CBadxViSq4WuUTkfYXkGWXq",
  "key21": "txePLraC7zZgV4mDxp1YQazY32XcNLM4DXQGmfVtgeZ4V4sPyc8UtkhZw1pcaK7D7XrR3QA8pzJmUZMdcBV5fxv",
  "key22": "4aWtSho1KTzkNJRPpxpoYSCg7WA5pH5pxJ2wxefCpgJJkz2VRSQ7BgH17yoWo4zTgD5gWx8UhePaPSM1aHkRL7Cq",
  "key23": "663ph6DFoof3ywbj4oW1yVgh8Mdektx7CeqwhBDHVvxEvQQxEPxZzmBghGaEg1Kbvo6z8qHaEp5j5qiVMgDFqkho",
  "key24": "LrTN9W1CmYySk5narKxJyDfBsmttBKzr2gNCjN56W8QUh5UjXbpuT9y38DJXF9aBdLDY19q5cWG5NRdxh2AxqKJ",
  "key25": "4YosxaFyxYsEzNqAmrNmTc9vcn5gHcnGqnkBrdJmTgpL4Qm3MsiavoyBE3q5b82swZvBTnMpn5PLRiyTBj2WRfMC",
  "key26": "4Ybro3CH6sy2EVQ287X2793UDmnWqjJzMMGWCRFcJMtXjATT2vQXiRmHTfzEZeTrBee5BTRoxrnwQRSBiuJVPM2t",
  "key27": "58bZiuLKsduaKen9bzkJboxm3SYNmufFLpMJaGdauGaXQ42uKxpPngmr31yjpHHEt9RoPuBZz5Hx7HaVZs1nFj4m",
  "key28": "4rRaMjTqvgLoHREwKmTuv3LD2QvgxbFgAoa4zYaK3EVfeDUTS1everWXJbcSSmh8VTCt3PTVfHVtgCaNDD24iQ1i",
  "key29": "akvktgm5nHdgDBvPLMs8GhwoT4ia6rmsVrBbyj1TZiPR5GthqzbdXTw7mGE1WiisuCygZ9CE9woepEVEcdWSx8m",
  "key30": "66LX1Ed67VwKsE1qEbvGJe1CpHPTeRBvNXLMCh15ZRiMdaMz2rmC9SKRtZYNzvMjh7D1RKWUhzHBy1gT9LVhFzAy",
  "key31": "5zXs8Kg1ZrC5mBQGLs7xU7ZvHkRciprwvYMDy678c6qkHBZqxcfHMZmb6y197Fdgj8Umc2t2jHahuiry8TQcpzTh",
  "key32": "5vQfKTxP8ABJ53emmmBxsmpif5nmyRWSK7CzW9xdp9ZJQJdB6XD9G8WC8bsqoRWnVUb2nBJGFFhAjxVMmLWpoM8n",
  "key33": "3TjQvckHAWtZvwvUkGTQgpErJ7LATovTDeo2QJc3bs7sVPdhrWvJRdkDsnoDFB8wmTR25YgUGDpaXewek8me7oQh",
  "key34": "ZEYKjkLQv6cBWiGATfTyKAUT56Gt4sR8nT8ywJ9cZ25AxBevEXU7ohq32pRRbrheBEr6kRXADReR1DaA5e2m8o6",
  "key35": "WBP98ZX2WWt5fjDZF1MHvetQgEqq9V4KsudtdiJ87em55rUkBrDs8utcKPP5efWVWeau1KfwELp33CLQfXrhF8E",
  "key36": "PepTULiaLni118crDVCQCa1pweKNgCNPSeHTvcimjk6dePGvC3NtyDXreUemELCvJK7J6FncnpQo6M7iJRUwF63",
  "key37": "38sAky2B9i2i4PNc589nyXKiC4EEr5pvreX9MP1Vgtghjw8jbXQP3adthbiUnYGkrM5nwdhGeHKwQYVb2nWk2qcL",
  "key38": "48b2h4pwMyYXTTRPvbiYEfPCTR85agjvj1bmUKVupppEhAwBscskdC5yLxorN3dBJyJNt37ySVr2jiPaLUeXYZJi",
  "key39": "RJvSTBinBUwPjBNYQinUm8JdFVtGFUMY7SMQVyCKxPGEAJCGfpP4pAGsreWXvtx2oBxLBLRzykC5u5bVc1Ng7Bk",
  "key40": "529MoR2YbGkBqnXEpppAorSx7NuqwyBJDJjkFau8QuqsBpSr4G5DvpJPvsUPZZwi3ioQJ8FHAGMfRDkw79mjDx1p",
  "key41": "2n8fd6PJunJzzhTamerSvNgF1pPJqZ8q3aMxAf2NEo9P4Uay9phFfgjmRqPJFwgrGtcrLTqtpN5oREQiBEaPM3uA",
  "key42": "3dLP1NfSVmenkwvQX4tjxtp2jS4J9XMsGjgmqHy4TgVT8m1td7FVQpTUhqhont1nR3fcHPpNuNeBJp41X8qtDntF",
  "key43": "iLBdnogmZihutmCpCNBQqLmQjEmp8BQZ6QfgG9vtmz2bVsXLWwaptLpdNp6gRwMHKhE5SWPPP2bsLJ6hbUsdcLz",
  "key44": "4sep4LEeQcttiW5mA25sExiodwCPrJ1idQCV1HvHXvx5TsS4rrGVL1zRCWXT5cT93UESxrRNuwbjicpc9UTendk",
  "key45": "4wEP7khbsenLpDvKfMBdCSXsZBGRwdWAR4ujRPfrJ59z5ogY98fA6q2T5g1wYSpqZpna8NjSR9Q6NpM9z3PdxiiX",
  "key46": "3w3R1KJ6h9SodniffCRu1X5qaVxYJLeJVZNBa9NgFkRSMu2tg6WXLwteiJAKthF1kA33YNV1L8o8D2XRKiKzEL3A",
  "key47": "4Wpda7V7SBU9E5S43p6xA5NZhi8WvbQEJ3DmnFoHsDAXYQWkW5pZi2r6GpvvxWa8wjZafcy5ox7TCxxDxXiiwdnz"
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
