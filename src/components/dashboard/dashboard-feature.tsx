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
    "4Povkgg3SjC68LtHpTxPmoLaFhaCoakXXMEm5ZhLCTWcvrMY2twGcdzcgKM17cVmoKvZQ1tCfKDyNrLHydztXPrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LtcaHGpsCDjeGvU6jmjVb2M4HtTtEYFZ9K4fQcz8bws6Vi9Fe6TeQkT6mhK3bpEqrmj5BBHCAi7Do67PujBSsQM",
  "key1": "244XkzDT91S3m49u6d1fzvwWvkUd33hPuex9d4EJ2Cj7AABCDTX2FpnPsrDBEEDQb2iGiKg1oga7eBqtky2uzD6L",
  "key2": "3yDwY4qZLsJogTFWvB3smTibCeTBj2M8D18iNdCrXNj8MUSN3rfj6q9GLYeKpihTGJFMD1U2j4T5F8H4BH3t3GCd",
  "key3": "592A5YpBNDiQEnjh9EDhxDSwCW2aRJaVwLLTsUaDq8a4tbJErLttrEQR6eimVMb6RxYMCDMUK6tUG8WuT67hXHzB",
  "key4": "55ZWAi9Kb3fc2JA1rSdoKXefPNtJnWF48HRx81sQHiUnPMnKS9Ls27TZTaRk69t1oJaLtQWV1QktvM9LPc7hmXD1",
  "key5": "58J7vhrX9D7zpQCMgtQxheWHXxw4tTfLvLWzhKnBypFkPF2wr8wZXZi1Yir2gspVA8jroJuYfbyyWsFtosTuP3iT",
  "key6": "2nmLaxEbF7SzadjqShbJSmsrnPnhRwB7pRZTvjnLGFY1JEGi9e2f2GKCV7jnTGaPBboigri4ABwRLeLbaUDveKQD",
  "key7": "2mLq6qXeQZ1m9J2SQkYbWpkkHvPXYKsWibKjX9okGyaWYg6KmvP73tgpP8hCpW9xA5eyaZeRsUjCxBSfrRxvvkaM",
  "key8": "hNXorPRBsePcN4F6YXZSYK6x1PUoBvg5VuD3azornk48YuC3semSsiwCxmH2WuD9DDZuUZFZndPV8pwZZDEJGuy",
  "key9": "4UC9jwCajPHAvNqHhoUM2pEnH3rwWRZvcjE97ANmXizCWFeNBLD6GfJbTNh5zERweej3c9q8gwXuigpuuAsCJuQp",
  "key10": "3MZSwUVpCCpsMNNrTCKvWH2SrVJGBgEJNmbCG5RC6xXDGrHriXF995AociJjJo6iYtPDrHS5bV4zCtezXGyTkuER",
  "key11": "3VVfnYbV3sPQPm6xvtTgddC4FWpxWdR3eNeCu7cWo7aszQLq3mGj156yXg5sEVEXwh6C8Fw4a4xtrM4vbUNAgx7r",
  "key12": "xiZkoYWxQxnBVrmKcLCzx7TCf6ZdjV68MbchDnrMCaQvkQqfsqWNR1kEsfvszG3QsYABQ9wwVCvVifDCUNNxQyt",
  "key13": "9VfU3sYqr76VEEx9pCRYBAygYg4guchQDrWjR6dXLy2X4X7WgNtoGbnBv4DEcf9wjQ6Bm7SXAcngJVvUpqn9c1g",
  "key14": "Te3M3Wt1YnHbuWJXihZ72v7Ny4cg1uFkdwM6j6fLrQFYcxZeAwtBG57V4dfSCm42agUs6bYcSQCqztY1W66itTa",
  "key15": "4RQGLFQsMThbYXUmgDGuHzY5uM9gXzYGjJss6FihzU3gnFWCwoTXC2ZZZ8h9EQdmsbACGS8dg7f9dveaJGAtSpGr",
  "key16": "4eiBccCCis5JKQzfSD73ji8bkYTy4spDm59H8QBV2VDDRW7nNKyt2yV2qxDpbDfhcQFsqqpkGzANTt9xLbAiJVT5",
  "key17": "5tZCdT5QMrZx9GTf5Sn6Hsg3MVjBFBrYVKmP2usrD7JihS44Ba6LBNPEmfn3ECTKEGcJqGjKb4NBeqLtuMeM2rhK",
  "key18": "3igTjcvPYkKdewHtoYTSFxPSRc2CakoVjQNKNosZheKvmLCk6Dn2hNSkcuVpD7VN6CSHPFK5GDDEFE5398yaMS3t",
  "key19": "AmSXKVki7PeSbfKWko4QZJx7i9ptpXH8bQhacPH857Npo2GkXsFm3rFKj9NForDjj2zaCeD46DLPMPBPSjwMBkc",
  "key20": "3gXVGjurPkAzUuawBg77PaVi6Pv9NR5rkMX1AJnxGwU6g9vEEkGwEmRgd7wSrBtEVrQmYvRMd4FLXbUjiqaT8bAK",
  "key21": "Df3txkN4i8bNxLeFnqD9Hc8MXRfWKfwXj8itqWvuVkNZvW1cqvaXcpXfeB7cQcu5wBQaA72tgSsLJRXf6hPNaZY",
  "key22": "3nYTETayUVbWpKbyGxqqapdh3sfXtHCFUm3RJdGxLPH7paMcePUUex8EUSdjjoGmoExWxAD4gjiaWZPbCgDnh3B8",
  "key23": "2mjFK23W6aBcofoA1zuvFWzFvwNBNWUJxdfTner4zyeJLTngDKQoTsMTobvNFe3cke9QrSJbyZ6ijnbZ1C1iXanM",
  "key24": "66ivHfZDsSxESTUE2LQPagVV2bdB97z7FHFctc1VMamFtPMiZ5Y1MdgfrJCgk8KYrBVWW5QqMqKF1skyqDqYRhHz",
  "key25": "3XQFVB978k9rnDygVBTv5VoKmP9zFHFDXZySmUzJprzKpgEVYZ41euVpcZkVPEp5wTzZg4pUBrKSGgPbJ7BEGXD1",
  "key26": "42a5zBWaq9EfJh8hS73dFW2U57TafxvjX5mvPU3X91tQHkuCxu68DfTDeYAgboFonTGgbdaam5GAdMB3WQymzCfK",
  "key27": "48n5ro3sTVuHtxUpHTksNx9gMoBVbp8Mu1VvYvhx5HzMqfKZ7fJo6cpbgJK5KbwSUbQnNr5M5GSjYTAxPVwcXe8L",
  "key28": "3EfYxLaavFExgY51cDFNAaH8dUXsD7CZdFoTAG5vAC31Fcxn3RxJ78cMJKKkwTsH3HLgQeprT58U2E5RmN9khKnz",
  "key29": "3Gphv3TKe9VuPgQhKvpkndrYyHjr1gAe2AaABRKa4euHHhBQaXh6ULGhLNhqAuNFyFeRxUGE2Dhw7dQDg4XGtZs1",
  "key30": "3Zi5QBeaZVZgN3r73L2r5NAZN6VP3WdXPRj44Cq3X42guqqaX2QLb4RnvgjrA1B7hikTGWpJTkpXGLPstKuqXevm",
  "key31": "sSB9dnfw32oe6eMPLfepDmsPbnMwm5JxQ9cwAq2vqX7G1AWhx69ZSTupm4RsPpApVCtn7zV4jxLgC6DrR2hmcDn",
  "key32": "hJto41z2WCG7xKG18mhZHgaTp8618QwtRNUHfisV3zomKDq3zpoxF8tiTzBRAH5LCKWAZcDt61gLzaEd7LjZf9k",
  "key33": "3N3L1aoH3qE5siS3KmhX9nxyhb915Yu6cyGUGnEXZTFjsc5FL4UM2avdWPJWjbs16oK5PRZB1Q9fxhVj7gRQpHtg",
  "key34": "616iafkHEa8j1xKVFDACVjZGsGxnrxsR7XZH7yMH6HbxzVM4w37KbZV5Sg9VU2Y4G1ys2PDrna5xEyyWeBrgg8tC",
  "key35": "5t9bmioE1XeFXpaXEtamiUizj1rnmRWQccE55qJwY7vEUDSU1naaFmcUn5Bt8f62dk9sxRZLp2kHLHMDaX42ZEkL"
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
