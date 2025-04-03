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
    "36TWGcDM9ARgDYgJ2ZqUNjTDmDVxGBucPcaiBaJ7zUZ3nQSSQrVrEPXShFNCvw6QfqHqNJWJ52Af1Hu9ftA42cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VpCkBkv1PFxz8LcQXKoCH7RH7CstP1qAqAhkf57Z93Uur7TAcLn1BA59oMTuMFkCivhjqzPbVFCJ65egSvT46Ny",
  "key1": "x7bUjMhfHQ9LBzbhCRCmQF2Y1zbyX8yAgaCFiVaFpyw3BLGqSMpfEWunDXK4hVHbH2qymdYsBTJEzbb4KmRPz9x",
  "key2": "3VFXLKYAXCVoXPypCi61NwbYN5asdfxFNyj1yaxHj4SSZMTUKV5fqzFExuGjaSAHDF7cPy9FmHtxQ4nit4j5AVUu",
  "key3": "3asqJvGZorgabP28iJGqD9xnhaGVjpA81e1bHWGhy4STqp6Lu5hPgorTMj3Cr2xunSLCDaR1XErzdp72mAG7k5aM",
  "key4": "52U2Ln4yitUp4XY6cHYpBMvo3a1ad61ho8ojAEZhYQUcdx84Dzad4XJoaKBDftnA8dNi4AF2P4jAReCgVS3QCcfs",
  "key5": "3ukxFfH29TND5h3BPFLUWmCyDaHeU7TGyX7LxQDie7fuiF28BScL8MezXzwZMyHDnZif8eMLe7RdrsJanVhq6FbC",
  "key6": "2YfT5BChz2wRFdyKHx9euZdKQVEzqAnkkGr6bdPrSGh94yEGyfwGwcf1Wjrw1RdrWcbZWEMnmnPkJiTCzy8WzfZo",
  "key7": "2Mmum9zWbULNiz6rdYqUShL2h8cMi6KtuqrHk3x67wt9tpBTMC5gjyw6kSWXbGoreBkUH5DaUJdEx87LYPFVKVqp",
  "key8": "2AUjpH8BVxh62KoeUSCcAbme2Nduucu937eyXaAZZKQzwQM9pkRCRsbeZ7ALAFPYEYm3exfuSCWi4Dm9B655a1Lo",
  "key9": "3LFmjDsQVpBMmQgF3EyXEP4AfUjWWj3aNVs6KQoNJMHBU9pVWnebB3EvV3CJiNhABm9AEND4uu9sXQJGLedKqjvG",
  "key10": "47VqYXq7TQrufZe43ji7RtnX2DBVHXo1iPhPbJUYuMW2roMXboAx79Aved8S8bQofBC634s7TPmriTcQcbLkpjxG",
  "key11": "5a4AFyqDXmj87SUKihhv7XbRYxGVXXMdXLsUCnwezCDGhwGhABR8RP3dnZdgAgnmnotYBSMsqwVoZaQxrDy9yVpS",
  "key12": "5MU2Waf12Sh96JdMzUgjjUDG74r1vgsGHA1jDRTwdEgXvPy7N6NocSaVYedDoQpJAarskGDW2QeU5JH9z6PAVZ5Q",
  "key13": "3ZGqcZ2eJa6CbJ7ijpCNVLri9m34BNSprW3o5b5BWWW94dAzRpSY8x3Gx55s3WCfWMrUhZpnA2kDoU2BXNSLDV5k",
  "key14": "i77EHL1g8bNxu2bjqhMMyyvvUVjFFC4XBETzyoD2yGHJHvMmeRk1mc7TwQue5NkPVST7YgSc5aoo3qCqrhjRmyn",
  "key15": "44tjZ7bFDPWYyvNjRhy4kPFPjD4TX5Ek1UZqVEbgKjUbUvJHimCZvarWrcs4Z9H1egqsYREvBfG4HwXXSmpmzvB4",
  "key16": "2WaPyrwWib9tJCFhMrXBjKvaUNhjNmwfMnSirRx1Q4hP8NRzJspwsHfcHeV2aYu7wvpX5WbPUrJXtyFB4HbinXXu",
  "key17": "3yTrQBgc46rNxw43LWQX7T9aqswo1BvqnK2J6gbrbqEtpiZ5HjPUbdcPuBuBS7yBoZE2zxz2UcH4xndXL44YWagt",
  "key18": "2sJ1qFXvTU4ngYng3id9rnrjE5ywgbicBTxAQV2ijT8Cw5KYQYXDjBbT9MW1LMRzr3TtecdDggunDRdCpzZ4RbEg",
  "key19": "2RGSJJPSZ3rnwbYSmUT48vMk25eeJD5Cx4KuG67aPAxU5ZiXgKXdvxxhJYV5mc6bSMXrzJHbPfGXRoaTDkbe5mSa",
  "key20": "myZjnFJMAdePkrAMSSGrfKTsQMwwYPnCUKwQ3xyyAu3ruxmXSCPHnroQN1cxMmVtE5o3W7st1WsJ15x59di4qWS",
  "key21": "2B6zkBaS5Midq2ncAY1SPpcJNXLF49FAQuBKkG4xH7MAp6a6NRjVNqEGccWfvTKsBAayMbQcnZW2A6F93gUB2FWt",
  "key22": "4rNeucfpdWzgK3Xfkb83RzapQBzRGNZwEdyknJiB8ZWrVY7uuKL3SvLbfwofkwg64NWBggTA7Bkcgp5LotsGa76q",
  "key23": "1np7Snst7pdjoJ1n8RQKKP9KrSUTrascJDTGn7UeM4pP9yjP1WSL4buzPFxYacxAmUQp2NfSHEu7whRHtLKGMLv",
  "key24": "5EK16YjkKoW1AvLaZGFJGcNn73nJm8FYo75b9XtLebdbGYwMt3WjxVhbguq3BowfRzWVDDCeRV6vumafuAnv1sbq",
  "key25": "4KGdWPKQkitrgnqPTv5DyCQNzQiveeEgLptabcr9DXFLAUbCAe377y2wNwWh24KfcPE88YPK3GN6BXumVMcbGiBY",
  "key26": "46bdVQRHfH2Z3nZXndANDQVHfboq5wxrL7cNHd6uqgtb1GrSRQVsXcUYohoHhgWGvaD4o3ALYxEKmZiZZDziPt1h",
  "key27": "5c9mXf5QLBdtmdmbRH78eDRLSQP4dfTBwj1bpqzQW4hNGuRCnnJnYvdrmqG7ca1uQP6DAPVKypRERKyvsRvxwHHd",
  "key28": "61gkXCiadmd3MMyep1Uv5xvTroaes9SmHaakfCep4WpuooNDGWcykDqLfKXQkDFK2K6FZtiz1aJAT6pxum7Rag9r",
  "key29": "DDoTh5nDzWW3jowE6EtscVWxJpH1NfNESQGaJMKjHtvGxKKt99AdhL5WmGGMD6AtfnkCic4B8ciAKq8Ky6GKCCH",
  "key30": "3sgxi6AjHt234qmvKGYFmuNLqi7ymiwwymQn3rPb5vCvtv1gEAF6RDqD39JLEykTyAT5g6MSd4MrsPnq9R6FZKNa",
  "key31": "3ccLACVKTKJDYZGDyy2Arx7FtKaUF3fkom2APoM7JCc91mpNWZi7Ufd8UXuDeZocC9aUTTvsv2fJi1UNuWHMYD73",
  "key32": "4dE6rhJNjpHyQ8ENFA2VTX6bs119hirZt6jaFz37zbLaXZHn681kueAtf7DyP8KtXftoPUY7PAobTS7RUdxT5ypC",
  "key33": "2wpZTLeAVDM6vMjPjNCUaBHe4LK2DuS3emsjovQbA6DWM94B4p3Vtox3J5DcnqN1gL4vTdcbg6czBoEm86WMQZ91",
  "key34": "38ZBT9BWEhZZui9HrSpkkfZbhWXeVQvJAkHzM7ipX2p28dVwJwLx7SRifB1H5QoSQfZKrq5UtPrkRMe8YgWis2dm"
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
