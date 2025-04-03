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
    "5wW5gvKxBmbwF6gDgHPRC8CqU46xQpno2WmsbP9SP9ywdh7VNB47EF48WshUgbZj7Nc3yTHt9UNhqLKJ6UCAf59c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24rPK9sLyb4vmNqTCLXh8zEY5Cnxu27PMfLaq8HqzoioXKCEWEHMGDb8kc2zqifrAp38qetM9MwtVeFxacujpQdp",
  "key1": "jZLGQBfQ2T6Awf4PspkEuFC4c81LQfgCKK6XirbDBnKjZgg8RwCG9jb1XHupSJ1JUgny5GrThzLvdY3tbBnDmLi",
  "key2": "4uaXeHexoBSvDkWJN3DyRVKU2DudA8KPhZEubqJnqeQWhMZ4ZVQrwnL4sW2G77YXfMZuqRrjz5N8jEpNAnok9Bra",
  "key3": "T8CyQECAqd7J7QScJ9BA6M7FJwmykXU1k6WbCakPxffMbttT8KtpvxuwPFs9TKE3WN8xQrNwVKxRA45e1jMdyvN",
  "key4": "PGzxhipd6B79GCgDJksd5icZCTr4JrDoPcAsrvHH5hyid7FNBAELZjry66b5pjV2MfdAaWQB9wb2GzW3MbvCi8X",
  "key5": "2r2uVTuY4TKfWSADCSLBbZpjszoygGtW74rbUouSp1LZtxCAD8ujm6cKHbuWTSPvLjtpHFYDQiCbPQzzhYRkPUbA",
  "key6": "i9sYN1i2xhtLrRe1TVWumEf8bTGU4BYuSDQNchbQEzN3yL1KH3yvN4CkE31jauB1V1ZUUxpsJfiMG2i9m3WyUM5",
  "key7": "8GXjkCbVdrrzhVxGNuXCe9nzkeGLTz1dKo81sHA6J8MWVESG2K4sF7ggPkbcqqBAhLRCqBgerauJHzReTMq2t6j",
  "key8": "2XGn45vKN36fPjukTsVwUWm2B7883hWXsgdLhA3BUo2LQcaxS34GddC2sdKHnLhCHQSiVq5Hm279aUwobjj1ZARv",
  "key9": "4h6bgYCGZZswFmR9iJoqHvJV4Uos7TA9ZD437ZUVV4JV6wbVH1iH2KM8rHwJSZVtLjSGdJyD1Rdhe2pDiDGghNb5",
  "key10": "3ENJKxZfUHBn9EdmmDxRzPV5WAY39mt8btiGRtwbz8DYwWDSoUT47hdFoWfkjNBaxLhrbueh1XbcdoGxUD8jHSw8",
  "key11": "5fEMw6odcp9vMztvnoXac4GpoNFSeeMbuUcJoehZYdNmDr1f5BFPi9BtNRv8bW9SMSbc9GPNLb6qZeVcWWUYjoAy",
  "key12": "4SKYh1KNBvrEouL9bWV4Qb5Bsg4Nc4yPx6qYftJaSVmT7xGGfKhNn3Ata8qK9g94293axtLKxDFdw6nE85cdghDE",
  "key13": "2BooeBKGPzaVTuaZVczAPgcfNvaB9ChLMDSHmxdHHcigxYfMWCtMyf58hanjhryutf7hqCfmdyE5WtTy2pBHrHe9",
  "key14": "3M8sG3V4C8WrpqUxD4WFWUEXB8S8sMfjBNMjSGEUDh3VNMDYxMxrGgzhAGSKwEsqvubKbJLF7bEo1Q6vHDJ5UV9r",
  "key15": "5zft5UFk8M6LE2eYXteHUyDuPa4x3tyFAR8UevqocRFj3qQyRj62U4hZf8JmBihfoNm9Zsvw5KWdEWJheHPDCqQK",
  "key16": "Fmm3UDuMFWF5KZPokR2aCrJFDKFDegQCWdjwaRZayyGsaKHAcE8FEX6fc99BNoQUKi369SrBBMmA79dqPE8u1if",
  "key17": "2WbhpwnTb6assn1xj5qwuCsBUi6tMGDXRPPSPsdDBDhcBqefMZXF4ec64RTVGJLgnXR3R3qGkQRcfuYZzLTiG7WJ",
  "key18": "3yHNuJLxWmAEveYrRqpLWkQ4GUiTWv9Hjo5Wf98zwKi98au6pNiBhSDFvdzpvqyGCFn8HLo15k11dumyj1SKCt8w",
  "key19": "52k1qF7XKtbu8r4jxV1f3mtB3BbejEGHYK5t9HpEqswn352UMy4EvieA9u86h2uewgeJiedKgSRxfEofykFumyhX",
  "key20": "cNEFg8V6wdcnLsAujBy5AcAHNiPt3N7TxF7USi6hmALMaxpCAJiUtRAppbh9ixbt57iD83FGzxeyf5B9MGso3tY",
  "key21": "2m58VY2x5igoL7EbGqpEoFPdAWmU35CwZU95BR4q8zxcQmsDm6ukJXQgUpFLy2HKt8vGrqg9QTDeUo3fLCffwmux",
  "key22": "25zHrcJVUmuGGMNeSxF9DNeBPk4TCM9ZWdNYhLxPCDrDFp3TrzSBBBce249wRatTTXY5UBFb67SWfNs3iJSu7FzF",
  "key23": "3oMnjbq8QGH1r2MevYrGhzLYu6JKzCVwUWahDcofx9eXUDTEE5ca6egwWUtCB4p8YzypHYsSWgo31ZFVXBaLMS47",
  "key24": "48n65eAg442rdUvXXJLYvHUn1u4LDMKirBo6fTeMX1beuZgcU2zctirnZwJ7QtnQe2hgqVMPLgoc1g4r6sZRzyKn",
  "key25": "2Fya2kgKJs6zRKg2rRPi1k3qTgRJbhphjdZVX4F7FSwp3Xk7ZAZHDaLzdyoXQn8BiJVx3uCay7PLvpuNqY9AVdaQ",
  "key26": "3QfN7kV61gtUEkAuBaAgGFntexYfeh1c4bzWPNRHA55nW33g7FYS4KPY6MHUbyrfwBuLRDtDp96nTRgC9jVs2GRH",
  "key27": "33uURebgW4qsR9aguZVCMMEfvC68AG1tpkeYjiL3AAYHJC6V3PJcaRHy8jQaum2yq3D6Qtzj7FDz3b55v4GFDoet",
  "key28": "XhKoVEHm1GQCHbgcJCMvCs4BpPcXffeykbgHB6mKAmyRp8u47dGkYaCFBhqbenFhYDSjQvSMeWbtsevAx2yYF9X",
  "key29": "3jiGWeRX7RoCsCY9kuz16kRNwig4JtTBUGRQje7xhuhVkfJV6Lwp9GUuMfE9uCbjC7p5RhWLPBXTqXTDfmrAg8hq",
  "key30": "4SsbGmcr7U7jewCmojHy5Hp4wYE9ueU2LVoXRouxaeNdQdc5xAyUX5GrP5iiYAT8iy3BxFf74Uxww4SY5ppvVyRU",
  "key31": "4Mvzy2NBFtf3mPu9gqvt3r7hNqjpqcVnYcvUu98P6fQwViTbVSZrsjZEmu62wkV49yfBtLUjr5KhYq4D8T4ybfci",
  "key32": "5zd6GaKCPXCKSYk9P7mJutCMSZVkFwRwRggFMjgQ5NRe3TMLrYAkpXFYBeK64bKqTsmPDQHX9pN3Fm3K8mjHoJ7s",
  "key33": "5TihMt7tnLRntNA3pqSnpNZVxDeJ2W2dpSvYP8n2AbNCGUHUb2Ny6BMMia1WzZxXeuX23ToCyvvMr7HA7sU5zhZA",
  "key34": "bjdV1cMSNtiWNNZgNQxTMNHRmW2WFnmv3Rq95UdrZviozKQYA1x4rWJGmacaSHKW7W4sYAgcQaVK5Aa9Xw3RPGP",
  "key35": "34s3W8962s5cPNowAM7UsmsjSmYMnTjeDLMheSYZE7asiemXEtDt31iwHZS6naVfDLZBmpEtPfLa8hPVZ2sdgUdU",
  "key36": "33Rvc4ewZ1Uenr2uFhCuXic3MwLiTct4NFKXeqQVcMudxjBM1WHiR8WWfZHCEWtjSxZn5X5d8sE4MVDx4nNKRkmp"
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
