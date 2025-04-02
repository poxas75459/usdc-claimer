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
    "u3xxuqHuu4GhvsU1nW5MFPcbSWcXBPNaacxz1V9n86PEz6WkmpkqSTKS6R3M6VzG5ivCyTfrGAiwzZZRjmbxaoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4kXYWoCrEtcVwq1Lo7gA7qLSjomaMfAskdhYLdzEuNP12Q5rGKkGLw8ggLBFNDq1bdy914RJhg6fu6XfS3PWUd",
  "key1": "344cFcuR7voajebcUTek6oYLiwig6ht7yJcfZwi1oGr8erckiM1sLzLUpPLMXjRpBQoT1cVVxuH4CBk2Hi7wvmbu",
  "key2": "2sdc8Q9i9wQ97e9YMs7LeCfHqUCertfg8XjLzJm9U2EGvU6pUqETkHPAs93YFqJEsVjP1zMdbCNczmGNUnBixzMb",
  "key3": "ga3ZHEusi31gDiuoBg458iaGtvP2Smk7Pac97LtMXLgUo26qcLtsTHxiNXioVfd9TENSTXe2LV9NoF1pbKwUboa",
  "key4": "4sw59tPVHYCDGboKuT4WMBJ1DkKfTHmrMwvCewmNANLhjLUMrVWHtSJZeJViwC8EkTxpbmBq7HcGiPK6ucp3EtZF",
  "key5": "2igsk8D8vYySjWMEQsJKodW44d3QimXoSV2Xhq197nq8QmjThmbSBSkuW6qKGBtyogTH1nGmqCi5SJs5pqFC8dBQ",
  "key6": "2tPupBRqsuTNtr7rZMxkxX7x71ZBtKajCU2r1U6L2BzghwSVProiW8uXkkcJdiiHB7yJKmoXZtptM2zKw3k4vJgQ",
  "key7": "7i3C6wX3ze5Lmqkqvg54NdPr4Yu25xAhdMe1ZEKsXyncr3NBfBnXT4Xj23X12NWRFs4o1LT2LbjxWGrmcbrMrhT",
  "key8": "5NizXScmXXF1Akhk4p4RwxPQaacjWsTEKqEEiKv1TCCU2Jq2ZDFY7iSap2aZVM7CbobWrdfTkPAs2kyYjMv9NZXC",
  "key9": "64r9DrbZgtGmFwEtEWXL29yRnxdh5DRY3cr6jksTaFrKfmcbUUdaFB6XULMWrBUVh7kgqkRioVRWXf26oM2Rx7Bs",
  "key10": "2cSQ7o4Z8y3FrtCby3yYY6tgZonRfK8aeiJ9TSJX3WSe6wQNdkwskc5WkcsvPJwNJt97KbfPpDzvbMsKZfaTCSBa",
  "key11": "3xwt1d4NTiQ35JGBFd6GskpEoRaVC5nPyUDtFEQDPPVVz9YEmuXbDLHT9HXUsghNLTo52G2c9iMsw8m7BbQC2m2D",
  "key12": "51USXy9EGXEdMGMPYTkpQtEXK8Hc6zwywqznJq7pSt5tNckLSJ9vUrVhwojrFGCMvBVdu3u3xSTYJoC64Nn8fQM6",
  "key13": "3Am6uxgMN7ua6sa6qhAZdiMuE7mKGqknTgFo6rxnh5wt1DEsyHkza7hrhXMgoGm9Pog9PjXBRG4uvLL6k71ViRbQ",
  "key14": "xXxvVjCQL43noTxi16xc7BRzL6hGqoetU2ba6Li26tHYsdvZHK94a1tRoGvTnzbTZ96zT4MTwZbvXdE62yfxJme",
  "key15": "3xZK4xpEFcwPCBrQhBkhCDwzUx1SQgtcCKYn1PpeKeyHPaANgvZ7b491g2ceygKZw52fPH3vJ1MiN7NGPuXgeNE8",
  "key16": "2QqJzoHKJ4kNJH9jehXFCZiBDcc6jPSJHHWft2fKTC3wQpR3612A2RSCFTyQeTnVkdmxUuz9E9NVDR4qBAC11YRZ",
  "key17": "2hbHiLmzrzjUMijtogtucBoUUmwARpaSTpXEyN235rrBEk2WUAiSGoyzTrmuhtjfXomxBMane9ZLgXiLJUq8Wa8y",
  "key18": "2ww1Wb4mFRqV14Qdq9Jj4FDCCXLxXorm8yAwYtCtn5EkYV1aC7UFZq8q4b14VK11P3crM9khZbZcAKBng9nMeMeJ",
  "key19": "4M3K7LHHyHSNC1ZSL1wNRV1gWBbGvVh92ARhooPYwVnZRWDvhVVYQtSAK4B8As5SwwUmZbUYzNaLGqhkQAypEV86",
  "key20": "4jJbSiw5VLbzZY9bDbqyDF1peZtLupbB7WZ11i8pcVDxcZujVCQsxgphyZZYLXZpDTEkkBVVr218W3uq1coh7Qqt",
  "key21": "5apnNSbQThKQ5TQJoJi9qXadC5njFiw2dT8rzCeBDaBfxkEdvicPiHxFcbDTkrNfeX7RYv757pTGYipEKfYU8d3T",
  "key22": "4W62uanDjmDWfKDSA86WANMxFQLfQkTwrG21bwAJUN5hqkbMMWvuNbmZfJQBDiD41gR2JpVVBmANkR3qbjLrXQGe",
  "key23": "55Xz1Yq6G83J6tbbbyBB2ZaEbrYMRqQEso6C8CVTT9DwPoEec47RgAiH8SrioCx5wXx3wWvLn1w7gNPzdoQ4n8Qw",
  "key24": "3GkhnpXhz2tj66m2MSRw7zyCpeCiqN7ExsqYzwKpfmEQeghtz6yS5ehdc8s4mRfxnQSnjahn1Fhg2qNzj5DLQ4ES",
  "key25": "4mnbDpXxG9pN8DY9EGU4GhA6aci1y4y75SWEmCDng4c7VgFEFRed5HFdg7Ju8K8XGQcsn8yyU9ScJmAGHhdmQXg5",
  "key26": "41FqAtgU8grT3VcQWUVS9zuEdHE7VyskJoyL247afc34Y7iFoqYqpTSVVf8aEhgvxMqW7gKwzY84etzjuHRnHbKg",
  "key27": "4izYw8pwvyabardigge9TJ3DQkW9w4be1W8rrYZJZ8RdVMtrdikx7WR2u7fhn3iKk3fEbNAVwzHrvLkhREv39hr9",
  "key28": "4Pm8nSeNkytR3k5cBpM11b3NnLBvkrj8YD7Ktg9YTRuRUtNSE1Sg8QNaSMuuS5m2bLPBArJypcUz3tr59qg9C7z6",
  "key29": "rDgAEaBkHpjWzygtBsBHErzqnYnQCdFsP7MyoaiobuyqFCc7NQ5t7oYbggbqVu6mB3HQ5RGy5k1RcjWvVdPxqMK",
  "key30": "2vx2oGoNVVjMVhvu4p9kYGwP4sX1Tu6MYEAzxtdH7h9wicxVxoU55pkJZuLieRuobc4ZNoCKypShbhjcKnidAnwA",
  "key31": "2h6AiqhbDQGMBdHUJWAMiKJeWxDL5BhEMLwn4nZHpYFqxBrRGXnsFjA8ojjEeKBNuYWVac8oYAULPGDDGSJTByTP",
  "key32": "4EKuThFGeb1SBn5dT6htyntKLbyh5mLtWXAjDnxqo6n58zso2MDDA8TTv5uD6E3xngVKgVYgWoUryT3AqvSnApJ1",
  "key33": "5NyjreaE4j6mkoarF2ocDeRqKMbqwMZLQbaTK9EdzGmsTZoxpZBWNVqEaqUSfJq6ywrU2JX3PHrrqT1D7Tq9SBvv"
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
