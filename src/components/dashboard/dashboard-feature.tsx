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
    "35veKsd96CG6fKWiB4a2dWwmf83UdzhCDdX4APNFymvYmD8c3vYomd6rFZq8XNp1R1muTFDj8Vi6STAKt4ikP6VF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxPmBR7wHR2hgVXdpuXkFUKveJeQRpNSQAqmqz73QThPfhhzBdnv1yXroZbLuKzVC2MaxmJpSR595z6myW5G6dR",
  "key1": "3CERE8hUnTyDMPk6HNoZKrW1r1Lb5GpRpMA66J8Kom1Yt6hQSURKMgg2PPUbBmREkjSE82i2n6vBQP2fug6yoiSP",
  "key2": "5kMaMXpeWzso7XtPBsLzWS9VUa7EvvkMhHvyY2N2XgMbkMq4UyEvesGap1ZW1dmYzhJiExuRpuUSXuLGTwnu345m",
  "key3": "4tniN86KnC4WFeiBj2Mup6uAa4BPRkkz7qqYVkbDfyfnqbGX3jbzt8MHB7wFNTaJVWCzuQTEQoCLtY7bhWDqjwA7",
  "key4": "t1VtP6D5qmvq5aDeogptefDLiCCfvAYPYUEfmTD5p1HuQam6HiGneVcNYiQVb5LLgNJzeWMDZTkMAFctXrGdArZ",
  "key5": "55itDbhkxn4rPyqpbdaxDyngmefHn8B8Nj7k7AnhddBsSrkPNUhnVWeYo81SrKgmXUeTMgBm6SKPcEoMmZmc3Sg1",
  "key6": "pF7U4TyqCwrVmWXT4RTqNcH7bpYmw25ZQy14F82sAw5NFPU4uMmJFdnLFAuHJaPFosTkUYnZEcrm9WGG2JextTq",
  "key7": "42bjUHT7mXHoM84wQeMYWH75tVFmprqrB6NuUgc4xtp9Vh8kTuyiS1ZLUjhM7y5j6W4orHQx9jjb6WZH8hWqSVvJ",
  "key8": "4RaLXTxVhaksY5bp7YAhDWDMuWwCMVn51XkKPC23c2ANBw4msdd1yZRSKt6zhp6MThuYfxQG6LucEiHf48am624s",
  "key9": "wgYmU1szMJ2j3KAHUtroxCddbHeUbX4KrrZC8Xhf5AxDt8B7pSiUNsTkJFvg2RuWKo6vUoDCBV6Q2xz4VBCYVVF",
  "key10": "4qFUJoLcBCAoH4yavHF7Pzv58MAsqPHUFyuUtntCuEfXU7G9k5bLEDNo9cKJk4Jbd6iESYRqL2RwzkSWXkwUevsg",
  "key11": "4Hj4HTojoKMMXZVioPuQVKAYBHuni16S1JpNPPu9o8z489SSMdeTBwXRU5WW8rfFueqeq2wbVQpV4hxTdgBcHK7A",
  "key12": "3DKWPzuqkJi6obiQkkWd3JzsJxwFuVpB1B9WWAhwvTFiojNjCsGYJCyHtzeZm2tsMXEUWPcafTi4L9ofo6vmWFB8",
  "key13": "5srK9MHgNsWR99NcrtwsU7ZJUckLmFEmxbnwVgBGLEC4AEiFFpis8rYWHBK4MZcpicCbkxXUQkswTFJ1UexJ3y4x",
  "key14": "McH2v3iRDusmW8HAsozm2uXyBpsp296CBinrVsnTcE8zLpebThMwzkmAgmpuubgP6C5vh8fBNVJb3YmKgyfPP9f",
  "key15": "5JCUswtzLd38rCfA7tVBUguqCrgSgxZNkCwDAKCd3kkwAJeZaGUzkW1yQtwV1QKZ4KDuN5trKH9k3M87apnPBpBF",
  "key16": "u1ErAADhC5U6inEAHZXwwo1vLboVysnu1axr5krX4qTiq3pJfxSamRExUfjHgDTGLSuJTxwrgEbjR9qP1XgCJWt",
  "key17": "3P4rqHKp7ZzJ5pUzg4esAoQ53jyMLMxhqCtEyFdGLTLBMvyEBT7TQoYjJHCGR2ebhHuJdGhgrACTZu5fZJDBaCi5",
  "key18": "WkuMSLaFfJPHuiVRXsKRikcyNafqYsdgDUpqLAzo5fxk6E7NJNh1WdorL33LvpW3HoLD5zQYyuWzPTDcRSLDN3H",
  "key19": "3LnMHiVFfxUFpUkcigw5MrSXdMLxx5a9k32m99MYhyhiz3pac3rQAVMn3BZ2f9idvpWc4KewTFbcW9kBeJcaXgWM",
  "key20": "3hEaq1B5cnhXeQgpJ9eQJk4FoTqUGKCC3ku3UE4CL3X6L1SWviZA5DNv5eu2w84wfVGTB6TLcQS9XoGtALrvMkaX",
  "key21": "4JeBDbhDn9X46RMsZnckcV935sHFtYsXcTux3AMHY8yKb4G8soYU7yqLzkQpKSuK2U8TDwm7SRKKUxFz46fTdbjq",
  "key22": "37Zzou8WTnHkMGE2wKYzRGPou84v2f3LHb5KNNxYoHzCEh8bGm8273TYAiardwzQHYzgFMqG8ZR2L4jCQPiH1yNE",
  "key23": "2CbswwBWkcJi4LrU4vDURoWJ3sbnbgR2tjYVcH7yiwpNbF8N65cmpsZkcdhM44JXbFMv2AzR29ztqoPfqUdWXNS4",
  "key24": "2t6aiYiGxuuHKxEaNERjoJFw2j5BqGML6HvYDNJvf4sYGNz2SMn59K5e5zcHsdB9CrgT9SAVvj9KPFQyfiEWQTno",
  "key25": "4MMcb6Rcjx7tak9q3zp4WLPRUEr6FBx3VHhHFsiiHihcoMyMGcNHMpLN5X2VvQFsRDZ6z1Z1CjAP5jJmiCSNDXsc",
  "key26": "575FKFXDduYNuPyHrZPAJUZFeFtU8Qtzjef6txMZ7xUogbcNBQ1MbzRcRfX2YUvFJZBm7bAMNkdsCS58rmMxqsrj",
  "key27": "2hdsZhki89HrU8PajoeLwYY6xfX5NBELf2b48g3q1NTMQx64hQse6xv14jwZBYnLnb4yYNu6ZygXFieZ7JafT6C6",
  "key28": "4jZbvndsf6KGJpL81Cq1vs4ocgoN8ob5oZLQBnkzyJyN33fMUH3jjhZ1Sx8w3kEuLtra5pgk6eUnx2eHuc9y3kAU",
  "key29": "3gjqY2J86fb9W8gU97ouxYEKpQFmw3sPfrZ23xNQJRsY5BRBr8YJVHUTpxsAV4h7P6juS3fZUfV8KscWwPYJauVQ",
  "key30": "4cYRir79B3bDibaYXpAEqgVTbXgMUK1enZisdmgNvhKfd23HESDpyfZ14REGpzt2qtttHq7g8GQCqZDmqKqSRkFf",
  "key31": "2bZqqVZCz59vTEnDcupEqVqtaR9EyS9vTQ4YUoCERwEymNnPY9LaTgmjPPJEmY1aCL9piYr3vBRxZLn41BppDhZa",
  "key32": "4YiiG35wuBSesFBKXDrvY1LBjioffx11aGMJFwVf91uTAhd8sYm1McFW5usHaq4BpveZL13B5GwLZ4H6DKwJGCo3",
  "key33": "5PBZTDqoMAmMsawCjALTa56hYx6R4rx9uin8y9sAQP8FusN2pxUdnPpKyzFA8hdFovcguEhN3eomYgph5HuAQG65",
  "key34": "pLYo9t6T2ti49Cc4eiPKsCrWTdhMs9g98BiiRi9tXVD25ipsSErTf6dxZEJ5786vZL44HzWJVKuTd5i5sD3vcfz",
  "key35": "2L9TFnufLcCEiExeyJh5V76ycbtzE6Vj4SjqabSVEngU4PpTGRr9xDasdNjsb9eXtcWc24m63bGmjA45wHnWQBsq"
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
