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
    "3QVzmCXooCoo9AugKzv4A8cEQiwL5Xn9JEBX7bBp3KTjgEn4fk3ecEgnask2UCMzra6XyxKgAbHAmtWwT8D7suy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3WVMCQE2P9xh1QVdLpfHasXtm8J2TyeMSpGS3BKAekpW2ydUYzzsAmkbMeTqjykEL7zE3EDyeezcmqx84gQXSi",
  "key1": "AhV4KZhuXK9PcjXUP62h1N2vjSEZePPJF3iSostXwLzvtr7DsovYWvQA1dBJSGjNXqAhNYGjZUhCmvX8VbkaGbv",
  "key2": "4FEWHRGNfRdaC8E2BTq1ZYrKDBDtpLuYUgpCczsNF7qsfvpeTwvnbAhmPAdP5pbTtvFRgY7vC6nxrwqRFhMMp9nr",
  "key3": "25a92QX64JTfcUhbfGS3rJC1PMCW7P32Lbs8XddY3YdSjeMLutiKh4CMdg6teumW8TQeK1UPxVUJc6DHWdNwZNMo",
  "key4": "4Y7VLDej3Y8tsq6XkPAPiNnLYwJNDtn5YwuKZqt6KwoPZ3bjmGFzUcKoaN7q62T7Pu4LGwJKwyTPDGwJFyt1878m",
  "key5": "4k8o3eiQuStnGJMxQyu5NaTLcHZw66hCziXPx9kEkkgT2hhqnhm317M5LwzqdFS2GTcdU9RAFHYncwLUbf4VnZGJ",
  "key6": "67EBWUcDeRVrdJHCEvv7y9LWUov9zTjZEeveRswD6YuBo48E41H1dAUVpJChkmwtKTLdzNrZq4DNHieRauuePnwV",
  "key7": "4wwC6yhR39LFba4F44iiQYuUi7XxjWRkGGtRCb1EwsBA9APqKsqBTVDE1b1nLWFCpovj3R51zu7EQ5hfptBTGkfH",
  "key8": "HmQ2xS9Q79cnvAfRNAG1fp5zzzWxs2AMvCXmsyrC1pCdwmwd3uoNr848N8gKVpGXrFASDZ7U3MV9vKXR6CMrKXT",
  "key9": "5hL3XCMr1rxEt6AWFhDgYxZh3s9xxuqP93DBrL2ivZyBYyBiBpps15YPropwkahTb7VCmUfFCMewWDjCMz1HdTMn",
  "key10": "34wXF3kDVENNZES7SuFfJwGNUHCsZ2jLd2gX36pBKRNNWJBiXBQ811L954Gq3unxgC4mb3i4XwHA9xGemgTBf8Vw",
  "key11": "2WpSWXBCRJmi27XubAMtyx1xTdEMxXs8MMN3NebN698pxohWwegLRqjYETBLXwJ5EddrW7ZCLfVQxsrNHWCjB6zD",
  "key12": "5LPHNdYgKC7kKDTrWUFqN37VhW4kXAoeRYXTQhFY8acdU4mjk7bcgcB3rHCMB2dZdgYLa3cDY6iUgXumEFKzJjxu",
  "key13": "565bm8n1hzuHrJSic22dPPjLDbrxCQbh6UqnoBsnfj9ddgPZAsqpVFFbvaDvh1i9L6u6jR96Fki7CiyMdJ45foSi",
  "key14": "WLmHuuVR6REy41iViqMxybmoKQSE8ohhB7TZzNVeMfBmSHRRCFUF4j19gaqEt8yTs876cYLeiLF65p1XcQdRySH",
  "key15": "63AXF4BfxFbcGZ1RCdbMu2Dj5ndbuHMCLUzqKRWG9ayAUZ2pLubpoMhGoWzXnPT1C2n5DMLeqpaozWJPVCnSrnJV",
  "key16": "44DM8gAKwyafyxRzkfJbaKZEsTvhmaKMd4M8beMknUzpHdYFXXSXrpF4AeJF2YxSjPNUYEpwD1mMphPXnzCUrqcz",
  "key17": "2KN9pUjqq5EVAtHGnRii9VQd63yYaVtbCaYYhb1CmXyznzujm9rJ1z2NFrnsgRcyZeMG1bWyDExuL5Zo9v4FbJwe",
  "key18": "3SVLgUdfARrg7SVSbsomNn2zqW3qMjDyTRUHJk1KUWwAWLNSzLW7Bcd6QJuYqZAxTjNj6a7Qen6i4zGwbX7ctr1L",
  "key19": "3xtcSt4oBQqKGPrsCFxu1x4kFwvCmKmhEYyEKHibzy57mGam6rGvZyVohf9f26T3k1iW7t7szYPtQeJPGsiYPs4V",
  "key20": "3vp2gRvsW1PnKhrth7RPynVosg9eGEmQ4xeCmWZounCVz7QVaKL9djWNNBCWNaAnuUqkeDq4wtdfhEQqVKNgMgbV",
  "key21": "3UctRt49Fi6HirU1EmEkGaWx3RgoD7zJSSGGwoF1LMtZnzAgpKphPXLtLt2dH3xj9HjUv8mQo46JJQbHP4hBbUGu",
  "key22": "3AVKAD3umSKBqYj5KdvK7YrAiBoa9qEckJVyTFDbDW4Ev5578J7nbkibrkPamzd1KEN8pW96oovjr3k4JeiH5H93",
  "key23": "r5JcfSJuGfsFCaFNuDQXB89vN45hkDP5WBmN2c9tULg2FtdeFkYhMmDjgX8zvMow2u9HQj8NgpXKyhXZquH1PLW",
  "key24": "275zXDaXvfdb8acSCT9VwoP6aX9HtLXbWmqTJkmgTSeVvr275r6hVquDiiCjhUCj4cBopzRKhvqKcAkVmKe346fM",
  "key25": "JpCicqYuFjNEhd7BK1k9BchA4kcgCu2mPkAyeheycU2gS86UYco7HKyFm5E3BF8nzJ75THwDS6z8jTURt5FxRpz",
  "key26": "3WKFswSaMaWVgz1P7XMAjuL33mCMMBUMxJsyUAio15TZjRiRYPsfoTY5LABa3PNH55LQDZbet4ZpSW7rhYNn4JaE",
  "key27": "5mucDA5ezHUpFukC2Scj7SYzr2HwxmVhiYxBFoGtZUQdqjn3QhyGSM7d8mDuZ7saEB42bSJoKD9BguRVifcU7Lcs",
  "key28": "2mPW67n8uT8KVWHcWw4hHjFUs8ywtCT4mfLGNpPkmq6RAvwz8A6axbrVRAcgq8w68i5XruxpGyrC8zFYmKZXXm1m",
  "key29": "5vYieaSPgbRPF2MFkyggevjFQKBgRDamzYGY1D3zaJNHZk23QqWArbNLbyG1YVKdfJnmiTRVFB3oAuxGBPStb58e",
  "key30": "5DmWPqsTHrXCPDTUPrxxZLXJQJeyGeJKxKk8ABXiJbo4cGfUHc3PJkdia7z2E9mRFR8pxY3AToxCxkUSjZs3U6xL",
  "key31": "5mwjEMZwqakG5ATpk9X9ATytAADLN7TFvHWnvNRsW6F4L134VSktMcB6oRm39u5zaQpU91GBz2kGFFS1HTN5LbTN",
  "key32": "4yMo26NAzyksWdmN6chmaJaL7oYUmfHbENch1vA9d3dn6YEUenMQhD32SJpVZFyyDD1XtTnxoGnPRti4LqYSTtu8",
  "key33": "4fjHU2FJRKb4vPseNL9RvBJh2Eq5MNVBJuhvaSiPhVBod6f3SUu3sgcCFtMHwNRjnUkJ6y3LEPib3Hnnph8cCCaH",
  "key34": "3t1iG78VRorbz6pBWk58HHAvP4UEV8FUrNtdJjfmCfLWh7DxgEUdqWfQSRjfPAbA29ZtXcZAF9rcufgDbN6mvALm",
  "key35": "5HAVyj3GsnkTCqEFy4xD35bHe1iHoYaKqyPb687yuS78zHTH1cE5DHH8wU6xPvYVTDja8ASEhKBGAruqxrevqnGn",
  "key36": "2Dbaqwwns2xBNNmyWUSWRWtNy1XDbW55y7bE7mkJggL2dwuyi9yDyw2xZ1KWiDBZqQGAt5GtNWozVHibS5TMuohJ",
  "key37": "G86K641Pm9BAwqtZ98fhX18Yi7RubDadfUV1jZh3kqwqVSs4AgqAw5iEXQFJQhUM8S8e49RRvqfPtnjVTVH2amy",
  "key38": "srsQp5e9VHxcmg3cwrF6BJZiyAasbiSp9sqUXf2MuyLaDQrhLFNaXzf4aAxq9jWpBXemFXeE7WcPRCMf56m5Vyw",
  "key39": "3reZumCcTDgKqWaRzz2nDJiD1dwQm9iF4dL6rcJ727DzEbDZLDiiz5oUCQv9bhFk1mE3XYs4YoSe8byFbLcZUVQe",
  "key40": "4vY8yxK8MMqjPRU31aLCEdmGwgE8ckn8QaNaXGSRhQrmPZEvjqxyVYcGQC5EHGi7BXX1rjVNBUbNkBwzFxENCPUJ",
  "key41": "2nTQcwbuti19NzgbmiFwAjtgu9wyhPBDkSaTVBhNyB4xdyQ7mmptHKYZCrEUE11TT43cKcVUvJrsEx7Y43GhVWLL",
  "key42": "2p8kQWLH51S83aN2cYVMpesLXg4sfUXurJRX4Cdf6gJYCqK6f92fB9EL6TqbajQCKWoibfcsQhFARTQU7DxBZAhR",
  "key43": "5vd1UXpm7Eowm7M87j4gZqasoFmrVxogzHyr245qXvtaE5zCTtV6Yt7npkfW2dTFoVVUoCXJdqfzNS5okfYBhMy",
  "key44": "4bwtC5hhQS15nfMeUrbVdnmzvZpWQyBqpNhT1ic7bQbgnXSV2bKFog5AiynPFPSZu2FGqQZGXJFPapvL3iW6Ey9f",
  "key45": "4GL5osG6oNLnGv34qAcMLHqVLeUgCbZ2up7rr47brgohmNSyDMu3iRzS248P31st3Pkettwfh6tvvyAWA3T56nYi",
  "key46": "5YVpXxu6BzKUAUQd8CX3VzJLNnWsDf2tRtttPddUHnGs8mSixmne7UkkGDNNLMWFk34RgCXgYJs9JAVj1deuQaGn",
  "key47": "5HCuZodnpiRba4MUQyFTsuf7q1TGz5nnpSfyr4Y4FtP1Xw8dzwxTU6hH1zsmdx1xMLvCTeATPFy8Ghgs1aapNKJ4",
  "key48": "5NXFcQu8gdpuqLkMrdjEMrB69vfhA2P6XosXudLQXTkvyttD95B7TF5AdRQykamB75aY3bEPEqtBkT8XkohsEfZg"
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
