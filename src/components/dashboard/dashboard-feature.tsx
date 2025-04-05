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
    "3nnnP1EcgCqJkF1w1SbwLvsk2FGUYym9bLb2pDL8fuCdZiJq3Tvz7ntDcGAHVR8HYNJFmBxeUHx4MoARRuhRz3mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jhrBfYoZDCumm5eo1RcYv53jD3TexYQuZRqUEFKvuCLgwMAtrUUyCpb7sXJ3usJzXQpJTW3JY57LJJc2eiBNrmu",
  "key1": "3EnMVNMXn2R5PnuDF7tYQjm7hhfxKTacQxgkN3JpxRrcTu3TgtpNWPFgfEDH3vESwodJHyv6ZktYSMBsFGkgpQug",
  "key2": "5FKEJiC9EvSeccQWJVBWjETzNnQigbm4Sz9TPZvfhcpqQU14e1GvxKLWjUVjNVVNSFbAmXV7UpLZ8cRCW1nxVQ6Y",
  "key3": "XJiYRt69WjMWo65zC6kdsW9uVi8LJL78d5SsxZ3e32SvEMFQyMYcGXoYaZYbP8Wxn1FYwaeEExFdDSxuRR9rMYz",
  "key4": "1pYYdNZFNJXipeh8uB3AArskH7Rg7D6Ne9gfSCH8kXNSpJwyMvEhxPExub1GQyqzjESYGaMTxS9SjnNCgtAVV3H",
  "key5": "4QA6332UDRNSPFHNWU4qsw4pDbhFwsjpoj9eGhfh3iDrtuB48Ac4no7fSjANfiRPyjCPtYQ1hqQUhn4tZqkj8xxb",
  "key6": "2jxsZzGhSLf76FMqasrs5DHS93ddFUf61Pi4CfXqTS7ZqnW7GnFPxbTwkuPsmVTyET2YgXTRA4QTH1jfBfd5C6Y9",
  "key7": "3AAoPgnp7bDnXUhia7iKwbiNVhB57fak37yuFx2YGu8xvwXUQH2B8kRmCzoutm4C833KzhkPVYjijBEt2KrdMMhZ",
  "key8": "5zS4ANDWxTL2seGBriTx6ZZSst5j1xnQkBxwh7GbFqSDcErxWxtkZxzkSaKopA3qpfFDKscW1yFoRidRGRMNMN1w",
  "key9": "4huXsh8UwuqRSx82zaCtpZhMRaWpqnmMMc3XqbYHHVF8BdL7iBNwoBFuhAUnfXFvYDSC7FeqCyoZSM1zYreKcuc5",
  "key10": "58Ya7sTVaipDVz13Z4ENewwkHddYJa7QCVaNyxFgS3WziP759JeMmuh4Rxe5B2Mk57f1i7r2LRz99gHzm1qcHNqs",
  "key11": "Tgy21SMzUCg1GVXvRJycxzXfeaNzebs7znGpSKbNrqYcHDqibP1NZp8choQJtGGPydF4BxUBxJTjntDYNRAMDiz",
  "key12": "3Ug9gc4rku9wdomaCH3M2G4aVCfp8uPRyDmX6HG176q7DaQZ1XtTnNn2aP52hCtd96ddBr4AmV2akdc2uTjNxdDX",
  "key13": "5cdJ5bK1zvtN4Su3CyyNMqdF8WEqju5QSudn2eknFHxSCb88vXw9HairxM9hAepK8zNd2qy473DNo9xb7ZQbHjcf",
  "key14": "3bCntAjeyw6EfpWS31JuLLaPLcxNEbUFNMi5x2sjpJFdMKtmTpN857MPtvSR1sooRhCCyCAEJaD44ZEKZmZkDUV8",
  "key15": "38d7zA4NUB7Xz39JrCMSeToS3Vkfb4z4U3F882TCHhnW5Qb6KQQ3Z9EdMaD22tbaSKqAYYvfRFdkGPaWmV23RoFQ",
  "key16": "8BS67qNJbgw73vpZWuRGvF9b5sV4t7jMwBwJ73BcpwFSehg8EVeF68EzA7CoucAtGVwaoSQaca7mfdtAqBkSp5N",
  "key17": "4F42MQ1mYK31zkhxEyxq7K93YpuTy4tBEEsyQRJpWbZfNtDdVZd9VVMr26utWRu81k26oxQSmoAh5XFo3qR5zriR",
  "key18": "49bfGnye2GQLNnzocuc9sdtXqnySZmt1fQ39cHupEffWz6TYopWFc5bEfpXdPFPZhhJVqs1XqBCjzaDeLgZoqLux",
  "key19": "4tstLx7AMnviHPvn1aKUdRc8715tPkXZNXGo7w9VNXYCVS6Mvw58AorWuqqyg4nQ9KRqqQjJHuyb3x9sVZ9Rqve8",
  "key20": "2tk1gxvRZ3Po9LXdhmfkkFthoGmDpZEvU8m2eL9LCbKnxUHStUrMaAoLpFycNTGVeJ5AJK7z9YLxRKpXYJjwFZ7F",
  "key21": "5JFNbjpwMtTL8FmFmpPD9BoYyon8dQRAaQVjBpMyLZa4ondoRx6UCKeXrjYhcW18C1s219TTbMcCRf1pPLph3muL",
  "key22": "3wX21Lte7nFhfWgS4pNHNwuoioKnFfztBj7dP2V9Rg9Zp35rGpbf3HPwC3rpQTio11jpDDgVGohj4mZRL18ob1R4",
  "key23": "tKg9BAUbcievcwcVsZAt2zHm2kfLu2eozNEzq2dBfwd3qrHM9NxLB8ifNJYHZHZfVY1yB3FzjhCNNPg8k2TiW4k",
  "key24": "yfb2f9taUtcnHCHLg5e9r5wGZ8RFYewt7xvRswPFPJiHJJAzSP37p2WT8z1tYpeDYRAanUCRmvQ9JmUZ9kK2vG9",
  "key25": "3WK8fiqgvXCD2nRgbZPxNPuTPHe495VG9byLKGyBhAoTvRik1Ygfpj2p8FGFv1xCnENNsni518fmdbGHNUZ4jPsT",
  "key26": "4rDbmzutV9Y8uCNeEV283RRZUWFTzXkybkTaVZtvC2do4u2wPyuQ7BiTm6UwvthseegFw9waRAVBakeYsgWYrrxf",
  "key27": "5UJ1f7GRHjLH3KTdc9w2K7xvAwD3ygTdFN6UzPdhukVtTjCG78Ny6nFDJFc4xpHGVY5gUncLQFYttGRBbgXARPFC",
  "key28": "5xKfrcSdc3QW8MHqZMj1tZFzjM63SvvUH4U2367w83HiSCdrPZf9usyVeTRGb36eBYtGiNeThRxgwXzbVZqPeVRG",
  "key29": "31AdKL1B4EoLfR2pDGWexAcam58vBXRSgr5bZHYnhfXuXMLY57WdsX96ik5shXee3dyANmETBLcnTe54Vbz9apcV",
  "key30": "K7j4WE1iTR2ftWDbrqj5in5agUANkVfVmX6CE2kdFLxdAJivtCraFC1PEZrk1y4MhKevHFBhNT51ybqJKwMkZTy",
  "key31": "4gKgzj4PMwqLnVaUYn4DLdakggrTDtK5M573wpzMmZ7AcBtRMzCgGg28GXKf57p8mdEGpbn9zDbSD57vT7sVrXG4",
  "key32": "2ovtJ19KsnthYqCP4Vtez9dDFd2zwLeraCzLWY4umPbw5La5x3HjhDZME1WKS5phwRrnMhbg5GkVMi3q3XHvTdod",
  "key33": "1q5wXHrQBKxWVSxySqBirsMLKsCe4q8fFJoAqSknd21eX59252iAuNYdds7uCEuLcPChTh2VZZMbsc19Yvxxnur"
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
