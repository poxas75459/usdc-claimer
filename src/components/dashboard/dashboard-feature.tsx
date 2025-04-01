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
    "5hqAUAB9k7t218gzxpuqPBD8Z67AELxdu4v67YnHZE2fdAcXX1hMGPqNiYgECv7J7A9LA4by6Nits4Kfcj5GMGgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUoTD6RYGCCcqqnMq4e9vYSdRkDjMavCMdvJ3Py71bGyEzR4jDwTuswTzH1bVeUcgRCMb3ReXxbbggcUVyrj85i",
  "key1": "3Yd3Ki9auB1QLUieBCMotCQ98DQoUEh86uZNWeGpR77sjXpWFb423EpHnLpd9N3uy1UWKThcC1aRgeDcK7edE9nn",
  "key2": "2KErqm4ffxx9pPyMqXyKRbVph6DD4jqNXeaCcKeZTAoHAFFrHCjWL38rtWLTnBKjzeVyRFgNTjWt999pnd69js4H",
  "key3": "48KPFAc47ZfPYZFmX1iWKyjoNMZSHCfHXej7D96ajj2BvhXqeW64AextC7fqD8ktURzzDncTZViF9zc5R3TbzMK1",
  "key4": "3RsGYit28xG7kbwqy8PwA6gadvxMJTttYCnWg2T6k2rPGRCMAkFbDFkSX9fCrJb4vLxiJRtidZq9UaDddg7g3oZt",
  "key5": "2VU7UoZJpKqe4hCPgcxE3dQpNLx6J4BNtsPGqY7d1NaaPiw26zpT7sha1YKM7NgReWoA6YcmYQRw8zGsZUQv539F",
  "key6": "44dTfRXudJw8KCHdAGTkVqP9vxr1kv7nFb4nUhSQEE5y2tFtkfVjiCsdfcBoVmC3PwbW7guHLoseJ3HEGEFUbvfj",
  "key7": "5VYxE9267fyqZmvgwqP4dvBA6iEoro1XP7GGJMRhezGAHCiWZYnRMzaScCaL7YVK5M7zvub4qEDDkRmK6V5PJKwg",
  "key8": "2EmjBBsBC1uNoV1GmpW3kvfeLCXNv5SFQ99anarCMiZSDBv3da2MVaBPYef1mssJj16TbJPpaXQSBH4dx3x2gJZ",
  "key9": "5LtXERUzJawjgkUKrMpKpye7tXFGYRuweuxZmEfAqYPbVHMtnQP4rhpfbsM2c2BMuQ6LbPcLYco72eYH34VKkR5m",
  "key10": "2gGLVqUUDDypync6jN9EQayFjhiJ7KW5nurGuNxmKGS24L6WNSweyh7cKp9YiMVnoDyhq1sEz6g7JUsjUf1QLGq3",
  "key11": "48cBFHTeQo6H42bYWbbTpVyPEdGje9q25ueqe3FAjUEsF5bWLLT2f3SovUydNKomnPiDCykv2kzAMa5Ur2LHZfEh",
  "key12": "f6cQiLamUzYho5cvCT1CRQCkd7GsJMbgm5wk46vWjChdnZomaeLnTiTu5QyEuGBaeHBGfsXXTbqvgH9WicF7kvd",
  "key13": "5ueUHDZCLGK3rX9h6WCqAGvkMd1k6yTqJZQuDe7yFHPGJ2NJy5ULaRFwkoNSDCZ6etNq3PrFeGRCgPdhz3N1cR44",
  "key14": "2BwxZDsepFs5oF4my3zus2g9MbaWXBzFrEqJUoPdKFWqLLbwg5KmAfRYLAyXvTv2KpXJMu6PdfhvQoMS7HXdoMJq",
  "key15": "WgCjDfyqFdbkJuWXZgPdjuJYZXuPuX9ZsBgxCoDwHc4QJnaNdYvKaZNaggV2C4BRBpkgp7kAkmRsZLCvrNhQS2T",
  "key16": "4af47HeAKqGpyStjGPXcwvvVwrmFxGxeKSEWxN2w33cRzVhpJVExJJkfe3xH1Pb7FupgAu2Lg7TQuDn8uLCbF1ZH",
  "key17": "9bmgPjVNECx9L1BEpUQ6VcBN57NMhurDPDB7E1MunTWebHwA8a1BYh3mt98Aoxg43f9WPB7i3k1KHmFwpo4gRYY",
  "key18": "2CXqcn7MTpxjEWezQ85SGgZs5QayHYGoLErNN1Mc6fomUwjSsBhtZXtxw9vuL7j5boqbzwCaCDBi3e29WcTLR5jZ",
  "key19": "5P82DGoAnufCTamXkCt6mxKbKaDbMJC3B2Ld94tNvS4j897EgtwUsAzbrEvrq9KGAXhuk8caoUvsCyGjtMBfCUc4",
  "key20": "2gavmZvpTMZ5kLhezVjjpEs2JX93KgWGHD7yDPhzos9iFh9atg2JiubQxYnWGAAJUrLqDoUTXmsDsQjJjc1qfA2y",
  "key21": "4d9BBV3GagamFbsbfjjL5LrA6TFUcACK38t43ENk835XsR23Gs14gMHkUVRYEGmUbieEQ3pFnZKH6prSaN3BtDQd",
  "key22": "3tWYmvbTYzy714MceRFuQ4uDCFwEVbeY9qh2PfeNFgbpfjbAE319g7z5h4ufCpTnQA5E6nxyiZqTog7SAMjWNW9R",
  "key23": "3inGmbQnTPnUkQJ1h1eFrjUbxWbgzFmTkkkdGpX42x1NoFKvYp9xmGKWJ9xLFUiVDXHdBvcmADbcxTZfhiWQRMDc",
  "key24": "22RuW51JrphPtDyffSWbMi5KpQJuwBy9czmvr695xRz3GyU6m6HsKNchp4oP6hKQJmx1KqHdTMZFoZPDBarRFCKs",
  "key25": "253Q6yYbP3xokdnL4sAgqgLgrK6vmUzMYqMYHhAVhS8eiaHjtUBUqYcJWFjPFmZc9V3Dv8DmatfoMQ2wA5CNLdVx",
  "key26": "PY1ba2oJWLHEp6V2knE5gpDCrVPtu6TtLxehFD6rX4G7Ti3dWRvhmMGgmG6u6aHdPH8aUKQr4fmYiVSYpAG7yJw",
  "key27": "4yNB5jG2xWCJwzkFWNWqW7viRRxq4z1VPeKSAPZXz7meSAoH2n2D7tXjQ8KCFNkZVLyNGx1CDkcYKguxnECWbJTK",
  "key28": "5gBcHKmcrUzRd38F3GnKm2r2dk4YembPWu56fj5p8b6pbWoc6kxNYzGirZjKG793jnNxH7qWqo48qBDvGHeij3a9",
  "key29": "4ea52EtbsSLd8kjd5x8MnuyBkYDEs3Z4irxeHZd4yLs3yYfMoT41Ywd1YbnAzNBMMxG1i6k8Ss3azLd3uF6bzaKq",
  "key30": "4QXe6rPmMwn718PfwheF9VHRFFEKnnhLQv7LRmoggAfryCbmG5fYtR2Udc6Unu8QCmxcBjuk7CTZNxfSQGxRXS1J",
  "key31": "5qeYS6GGoDCE24hhdyTiHu6VyPwGGkDCCC51v951qNyhCaTLWX7X21uUAknhW3pp3KouBLMwtszZsx6nZGgCo2fZ",
  "key32": "KLCMaswXEStniLCWLVkew1nuUfFgTahrcfgYCVxyGKAcojJtCFkK8FxjcDqSMYZjsWKLkxiCttDLvQWkYhzJzeJ",
  "key33": "3aJT2kypBdmcVZMCVEoMYgzayRzDXrcHvagXZRfDQQsQt8rWJYS7rBnq4wv5LjjmxiGser9wY2eWUqJW8nL9RqJQ"
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
