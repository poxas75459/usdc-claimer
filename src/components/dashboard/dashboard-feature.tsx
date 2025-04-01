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
    "5ctY55xaPzCamrVBH6woSLteafcV6XSH8WqDfXSZwxi9UsDsCQCBmShXpeQ7BU1DUWYQk2syACjasqfZP7D9qTEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLRyRCpcoFgKsvmKjQBkghi7w4fbtrKa2SErq1jsaEF8eTyh2MfUua82uZy9NcgVTZfw63wpg94VrxMc19Lj4nu",
  "key1": "3TeEvQA8NGUS3XfTEadPgqPkCwJCstsuA6NDTWqiRrh8cFEUajMBT6bjbb1SsQ1PXBwNfQJwQ9hLtr3sXTKeVteb",
  "key2": "3VY5fbDk8PFddAP5ZWfJZQiBzrnvcqKJrBpu1hqYz7Uoa3PaNEGSroz3b8hufCo1YeV4UvHi2iX4ijfCVU4PAdWi",
  "key3": "4pp128gnhbbPeRkf8z3NMmxqaBtSr3cpS4ZQprtvLrh8Fh1WCpvvFPDtrBsKSu8Mb1fd2hYqyRm3doHr3E6sw9yw",
  "key4": "5hN12TPvv9YEmN3UEhvVEwSD5zzoKPoGXi5Qi1uMwkfwXKn9Y5zLfMBs2xKyz6tHYWdkjP5xNeyZV8aKU3Hbicnk",
  "key5": "qZA4EcpgdC4gP5vToiCcLwvwesEYFY18ZVACs8gZkbQEz6JcwMGhmmezAFCaoytAcQ4DJKxGWddKBbUqDvnD6yo",
  "key6": "3qZoMSCm3Jd9XH2zaz9ShBwiywfv9deYRVbYyP9dzvRYk6bd1dRoe7QcgkUqWGbDofEmPpZttRLoYiDJ4RA9zTpo",
  "key7": "YwdfYbe3SWf9Lzz1tU6Zt6jBjaZRMvaLy9RtvbXEN3DqpbAW5n6XyJFMmzLH7W2ShhSMVRat8EtgLkHJaaqiLtM",
  "key8": "5CtpzdGh8TeoQYJyR3WQZwFA187ZoJEZvT8ycJBxHRRqFr4xM44BmQ1o9vN8eZfuufRADwPQfAFHSAFEMpGz4UmJ",
  "key9": "5gz6kx4xGWrsTndrqc93TeBcbRBkU53FU5A6divWHVBEAujzwkDKefBkWV3yTK9KLydTZq6BH86bz83P1KTaqne8",
  "key10": "nJ29hAhNVufdNwX2LoGkwKb1GeSN5DZaqKDtTtqJ4PrJkSBqtn19jE2d2WAerGVV18JU5YRNmfcxd28xr7srZc7",
  "key11": "42EeDoqAuKAz7Tufhhugu2E8cvxxJ8atbgN8Km6JQ4FtGDwZeg5NdwTwBcdtZtrh6uiUe1dzkDUe6utccC4WgxMM",
  "key12": "5yCxHh4jWuUt4qegpNAhnf4D8ETVuUsYfGQSa4inPt1HE14MLaQTfqPBwBvgqGZQTbn7fAFL2aVbc2mRU2YfoNAz",
  "key13": "3wV3EwPBR17kVmCdng7jrmxPWSoGbrv39Ho7eCMgusxWc3dB3syLB8p48wnU3fcqebH179aGM8MPrizsnGFZM8av",
  "key14": "53fsmYx885ZbjgTqiSx37zK1Cqpdg9YUjVcBT6188nXeAownUT31t5FcAiWwAsCENM4vf1NgUq8nRJkPWto2cYAY",
  "key15": "2PdL7EWxrJwxTABY71yNK2fcCy1Z8kpTyeTW6bPs2ZoYfKtkeEEJXL5AptxiCSGxC7YxEyqXfxBt9pL3NWfQ1KgR",
  "key16": "4Ko8zd7oBiSVLcQcCNRgphqYSrrs1cSsV8FCcYXrgvYiQscLXdjDDxWwaWGUSQg8m5ycniSkiCffKFUB7QayMUht",
  "key17": "5yra6zZxe8KzgFE2j5ndiGGgrXfyWb5S3JJv41v25fZANJENprSpVnYr7Jo5xiPRaGRqkcLnx2Jm1mikJK54RSmz",
  "key18": "2rmVq5xyUQVDVfAocL6BRW6hau6tB9j6gZ149fUB4yZUx5133EPhZfHzw18tDfKV4JnmfRDz9ryXrGckXtFwYDxK",
  "key19": "3ssVyAN22vvAB1xLkGsMn6D2Y9TzyaffhXomGX5d2HN9BAbQYy4CFQgwjNP1DQKgFgwWBAVqmAcRUdc7M9FZoicC",
  "key20": "5PPa84HmeNEeSwqt4wGqhmZm2JUiLc6em6EpqPY7wTWAAgdMWwp1H8mFScgWeGth6ngSZpCUiQrRaPiZbFVBeue9",
  "key21": "2PNiav9YFgWE4QpetKaZ7giFQT5ivrdaS7ymPdMeQk9MUmzqVBmPq6skg4i8vSwMSzyizjhAzzQqaibiDAdo4sqR",
  "key22": "5L9GcG5YD2AHq7HJLQs67QpwquMPGMDtHPRv6wYmEpR9VzrbFEh3GbfGg3hqYXK3deNZ8y7W6dDQQD9NBoZoaUEi",
  "key23": "3YF1jKSVXVdjKyJNBLVVBfbox5Z89X33E8s8aRa2aLs7Abwi5J6o1RgS7VpXP6653koasrFa41zBxsCSUK5jmEL",
  "key24": "3Zz8AzAUrHDVwgGXBMeh9dhnYAxNjzJgd2VG7ZiafCWBXeULkAvho3JKq6hCr7WnJsipEjjuiV5ttnpVWzXyP78V",
  "key25": "5ofnYiJhUXp6bjDmyX6yx1S81WsF41XbcR9c61CEM9Yp4NFMX29WB3HTZGKpU2nt2DMg2WAbptsWYQdEcmeScqw",
  "key26": "2qwuYBtinMLpeL36ABXMxuMi5RfVpmoyM1RiSd5oxF9cYMbEfnMbHWdFMg59KSNc2AaFeaAZ6XdMAFQJvoNmgabG"
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
