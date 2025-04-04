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
    "5h5qDpXA3tuEgqiGZEGV3BMxBiN6dxxhmsCPzAwBrH2Hc24SobSMBAfKLrNR5pyewmxWKzPpD6hoNfv7B4NaNpb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSXJ2WjVk83VBNDte3Sm8pWdJoiQvzEF8qpfruH5WV8oaAWecAPKgTsu2HnEA3poCz2QKwnBKRgApvzk1ZQLFPg",
  "key1": "5osz4ZvkiffJXovTGw322BFaea3TLGAaTxGsEyb8dBQWhxPE9U4MxD69LUe6mCwyHY6HYNMXeBgBRujRMkq5H98K",
  "key2": "4B6K5HKV2AwpHErXTvJEADF9zQbmKy3iFM2hzKQyR9E5Q8Ghww49a6CJjFqzUvJGX291ReGE8g8aWT9RadLVFWA1",
  "key3": "3Ni8skqv1LxdwVvEGHqRt33wBWwtKCCaDwaLRGxE9LHGwxjLSuCCQLRb2Md5VvGiBPDTDUoU1Gcvq6NesY4iGjUD",
  "key4": "5ZMFjr4wmte3xQB6G75XWFKseta9j6KcnhmsM6BSu4STkPQNrTF3wPtJx8jHf3coft6vfKFBy4ikexCTByoFPDAT",
  "key5": "4uASxdqBHnxwsx7Ce9h1gu8R8xRazCTqzETDJ7SgiK5vpBzKeYyGAZXTXSDSvSsm9JiuDYpUzc4UZTyJC34itXQU",
  "key6": "3oiy6934JJF4FEEJP7AJ5JPMLXpWC2dvgudNo6j3Tuq8tHQauk2qxMqcawCmZGCqwkAsyC8d1YYTCdkyPQGyWu61",
  "key7": "33k1Qe3WewAV5S6xS7MJFinTBpZZ3ragZFEDsvpfSCmpyU129f5jW4nwvcedSnRfCFRCyaYoWgLJdYXJrD4XyJQC",
  "key8": "2hhD4QB2EwYsGfR4QLgwUouYL79nK71HfZg99cWLjcRjEqpvWdVaiQe1rboNvfyWdZ9h6rDvYKSESTVsVSJcjBFM",
  "key9": "5eFbnnoieZw51LHbLmvmCuoRCQAPzgZ1rtNxdoBEyAhEz1mfdshNdmbdChyJxXv2dQ7KyCCDPrKZFJRRwQKjMX1P",
  "key10": "4U7zVDq4mPge9MciaAtECYwK8C2HWfA7JyCb9U9gy9b37i16tYzd7u4yD8WGo2wCv9HXt5cnYdk4zbPZcffpipr",
  "key11": "s2kWvZs9vXFR4ms3TgywykffW55d549sQyoy8V2rxXdy5r7J2zGenCcBkGgLSirsbNak6dN81ycHfeam7ZrHN7q",
  "key12": "Cus7CxkMuBuXGCAtrYNruAAtZwB6jeXbkpYHfhdWMZ43UVgx3dcgKsuDzy3VD3ECdDkT7fCvMuD4R4Fz4nGWMAb",
  "key13": "4695yozB2oa3jpPLMzWgif12jCHvKmHdDoYu6pDLrXdTekiqmLR3QaQ195uRPjnZuXeoR3KXNxSEY8GWkAUNLAH3",
  "key14": "5T2744Hseg1aQbAmKeD2Tcokc8Hw5axs9G1GFw2vA8wDdDzDwGDaSb1TPjD5YxQArpcUaAuvs7cxagR9vzSJshdH",
  "key15": "3zUThWkbsGj1VKqjU3LSwENb2PVssdfSzutvEh758PsoPsrmGxm6vDj9emKt2tPkABEPMcXfAbBi2pSrTsPApXkt",
  "key16": "3uRGPutgZFBSLe2mqgW8WzCs1X2ejCwNaGrudqTfvTrJBUb5WVxfezACAYdFsBgQzBoB1DEieMjkrq283GjWcijw",
  "key17": "3w6kerQb23ssDhEcrXdsNmnmhyM9A3N9dkQrvGu9fTSo1wsHAEFiuXwigACBu49KKj3nN58Tn9Ynsv4xUvF6rKQm",
  "key18": "2ffrWie7EwmTnHvJnELw5B8VKD6VadWLt8Pi8Fj5LhHYB8eHnvtP9vGhQfxX3EqDu7rM8G1ETjVtHb6NGLiQQniV",
  "key19": "29HgmahsJf8KfiwDSTVnpzXHkDioczQXcE4FCnsgH7KTjzVtWp752f5QvwjyF7MmQJpvGquiB1JdmSoHeFNtMebg",
  "key20": "aZgkpXZyvdP5bQXHE3DH2R7zJGquBjXh5P4B8NFz7EQXCFA31RkFoPxQd4hdKab1CL5G4NJQeBGkoUheKXFipgW",
  "key21": "nhA7cc8G48SUCGeZiaDVJZTkfEDf5G3F5KTGNFfcJxpwRK3L4qVdH4ZD7WiFQxS9ioZmjBLTqo32MGNjfx2YMmn",
  "key22": "c8ypqCtDVuy9aUSEL9z7FzsJ2FAGdGjnzeeKXu2dkm7SvzyhdvkxcgLL4qtdiQgeXpMhTGKU2SiPfQeeNbvokfU",
  "key23": "4mWgMzudMmNPjwoYykPvgkuZSuGooQz3u9wtkvE8xKYhLmEkDHLf3apeqfY46v1dcT1kL1zfem2CSEzHL25XHkGY",
  "key24": "rQoLqEVgDYJuoiEgD6Vz4MnQP2FDeqwhPUYuz6mAjMfwXBLQJkfXA1M6d48ByAcrKeCLSbeexGpsEDKtEUhvM6K",
  "key25": "4cD9bxbhp8VFi7H5PEC92Z22tZkeR5EJ52sS9FyY18uZ8Ljp5a4aqCzvjcYPJ7iwkGgLKzSdaTKtszcdDhzm6DmL",
  "key26": "xL9N4iryp69hP2Jpcr5NqhksX8mfyC1m1WsntaCG57ugH3D492joVppRqncM4ZJ97HP9ANLt399tacxU5DeZkdD",
  "key27": "3sXTevZskiiQa8gprobs8ciLmejZgHmTYmfRW3sVaUsj7KFQKRHMhuaGHJQ7geDpkGjzXXFgqCRj8mZdycAeHPPk",
  "key28": "5rZWn6cusWxtPozs25JtoJ5zjQe1gMZDppySKH5sqnjSVkzdQ719UfEf7FdohtbfLSNPXnLKRGqbr3WzZqmYKyug",
  "key29": "5uaMom8J62Rh7uWeUa4rVsSjS6ncK8LEJi75D1c4FEcP6E4pLrSMrVQR75HzRAgoThtXFwXJACZkTWHPCNKN5pks"
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
