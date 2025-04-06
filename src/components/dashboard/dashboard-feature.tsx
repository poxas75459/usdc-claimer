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
    "KknrcEwsM1rm2bJVaq9ipchC53n5ZuM1cWGCadzyEh4C7urm2WvXdmqdAVveRk3ksJAgTcSs22rqUADdD7AxSRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3ZjJstixyAcEsivcwBKXQXtzD7ZSTdYmn5bRimXadNR1Gb3zm8FAun2h3cfyXU7mQZ4qMjbuPJVT3gT8LipjoS",
  "key1": "42YRaguoZG9VP7wfBQff1CRwn5DsvzP6E6HfGZiDZG6noDPdboSWbEZfqsJtoRvcG3kABoboDo5xsdXCrc1VeE2j",
  "key2": "8XPNwjmKQ3KzZJb7y8FBUVarwgTB6gyyb6xyVg7sQExyPtrqLevAU816Nvx78ucuHSwvrppsjzjCMZquNu2h7oE",
  "key3": "PnQFSFHw85wPLVzgRbrF8Crpen94s3dJ56eoxZSDSiv6QxuK4FCdQa2i9ZQwEbx9RC4VH6XJ152hgaPVi8THJNt",
  "key4": "2b7yV6dwhjPJF8gub49QSd2LkxvmcCkUqmDaR3BeUzEaBAXLCa94yvVeRYZhayEhnvUDjY2ShK9SpxoHaSg5MQyw",
  "key5": "21nQntGBJyjRvxYRwN4dLrCGdDfLJRqhGmvq5muAnF8aYSpf2FD37yZgTYKGyo7igukbnmoLZgPpuB3BiAVbcYMx",
  "key6": "X8xA7mLEeqp1ZAxH1nTUPXqaLZ1saWZKZ9T7Qt92m2HvumLXAv2gmhcnC2h2DCd8JvMwLQ3rExafVw2c1H3NmA5",
  "key7": "5PnhoKtaYqtK1ytDLcHBr13zzYGuP4tBz6HkqDhhuYft5VwxyNBTMwH3hVfEbDfL9uZq83UzLirxyEYzt1aE4jrP",
  "key8": "4PXhXfL97veexhwxotYEdNtuGnG6jtRWYdTg3kZyQe6GuiyAZCgEBmji5oM41Sty92wgDEW8Ybk6WEhTRKgHEGHn",
  "key9": "LSyRQVnB5FikrKSc2HTDtiZSK5MpiZbWUKCZ9im9xEiGnoSrDoWmTpPgAmjSyEGNx5YivLn9o9JQkCdZ3ui65Pe",
  "key10": "3NbCeYFTN46u2wkLHQSyu9UvkUxkGV1QRMmpA9yi6LooTu4xUy5bRFjj7RwpzWAj9PGxvWuqKGy5cw8PZDHM1ME6",
  "key11": "63yiUNh5rB8156BnvJM636z1mJ9vj5acQLhoGWBMTDJKKJYKhRPGhoxrvcbrywp9VxcieEgLNsijCt6VcngTSCGD",
  "key12": "2ABFettBqpvJZf88KviwTcfs7Hn9zyoNqCyFQZKrcWBDbqAi4speCVDdf5jEh6ecfq7hMXwbYY8msUDcSwEKgkBe",
  "key13": "Eu9PYfwqhURbui7kkkYDADcCgQZoTsMQnA4uezu19j8iLkT7rHRoNVyjWHGK7ERZe36SoT99VzpZXruZV79UWGW",
  "key14": "2d5aXnr4Ca3NHQcXpjFBEceRTg4cU6b358xsvZWYHsa9xSPCZfeKdY8YWwR2xynaDDy8f4qZxmEh4jXMSLb3oJwp",
  "key15": "2d1x8D3nvZkYZD5fuv7mK6pqMjRKFmXE3gwCybeYcAkhtZM5HN6UshzRFjvW1v1uNaVuz2X1bW9S3x1mad61Mp8v",
  "key16": "nQBTzFhmwZVQSD3hCx9C2RwJQkY35vT7szgecHidH4w9CE5s52rRBcJ6qeANYfMuxAjQHs4hoNw1mXJSU9UTAJ1",
  "key17": "2cKBjLJcF8JrocTqnBPeK48ZTLrQeU7WVXr9rAyggiG7FQMjTCykmGo3wqzccbFr6wiBj2H5zZpgdP75Tfcjvtih",
  "key18": "2PrkCx9dKFCimL2ipRQU22D5KBSh8PjrB8tK8oBGb945tj8auxXgFAGVuHZc9bVq17YJkjvQSjmrBCqeuZk6wCSZ",
  "key19": "3sZzsyFcbNd7sxSkY69QXqX3CUaJPNirqYSPmdvbwXNujCzMgewc4D4Ve9iRY13UoTRP9u2mSGrgQCvBjJqTL4eV",
  "key20": "46fxUjqiW175X1qkkQfX722NCSFGjbDb6V9u5eayTvGNjsYmWquPrq5dUzhwUVHRJKSB8NbaSoMHRNKCrYaaYtEB",
  "key21": "3oHvNZUG3FhhsfEnVkx8Nsix8EoGxUNxzcBon4s2XbCvwRQuw8dHRFDdw7Shi1CDCUhAfQCvvtzM7L8fq8HVxwDM",
  "key22": "o94a66wfz9crBZ2VDx4AxUEd1yAkHchsbTZCbDkVr9Pwz1rkoWBDsRA5wkmPRVy4X2vcYyQVGcazA5JndW4EhMA",
  "key23": "4kqoSHbKxEhrzvU4G2hf1dxUK8iz3mRdzToRQFp44qVqZEa3K2KRQR8xFeFH89BAmuzxdUsEbuzf5SGL1Fmg41xL",
  "key24": "4UbTSbsPtG7y1Tyk583jaKfjh8aqmyycLCYsuBM1MMUCL7EYW1KFKArtUNaCqdrrEwe4QA7jqdAbrhi3mPFH8NJa",
  "key25": "B7ocHASixUfQBEAK4m4k9mcogF5uax3X7tmnwWCf5oV6xCkLddLayZdbyifWeRsZYjxJnByWmURTr5j2ZPFEQTK",
  "key26": "3KaGAEV8FY2tfEN3nzXcnwWQkM7BatY63bDsudUZbM5ou1eD6GfcjQNKHHjauS24tgP5o5kh1VqSwUFpygvn2Z4V",
  "key27": "4mpjj5stUodu3ySQSEQCJuc5YMztq3zdnXCvMjL6vrCRpkC3Rp6Fcr1P853Gsb5gViuNvdTX1mrLmDqJYatb7EBj",
  "key28": "2fDBynjytTKsgfTygNEcUx1c9T3DpuN6c7SviPBWShao6b13pU5imY8mKf4HqC1xit5VEFXjvggKf7s11u2NdmRy",
  "key29": "uMiwQrJYTtrKUUQDJJ8Qx4xRHo85YfbJVm1JQk6QQQt8MgJuK1uZWqt3iY1MujnxTmtGUpPsFVE1sVtx2BZTZmR",
  "key30": "61XEDNezjuQAiJYHfanAykNqgt34giynTrNiQXeSn5TGwqM7tBdoLb2rbhY47dmHC5Ayxr18QabLgi8U8MhUno5Y",
  "key31": "3byoLyMQbuFg2FkMYMHxH1jtpmoWvTAh5rBPMBrhwftJt8Csj1NzoyUiXse2ucKjqwRwwRqvBqevPk6XCTpHFBBC",
  "key32": "2ANoRPdx3Qhuvdn7J7dCxYxxR12cYZFx2dVscbtV3M85TNe7UA9zYh5FV4T5GjwykLbtcUiwpyjiW8GQjQF93ndC",
  "key33": "2ZmDQx3yBibdMLM4HYr2v75WWKLwsej6tKBxUzccUMHRdu5oMYaNqVLAhp4pptasup1Tek76tcr6ca2uZBXu75qB"
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
