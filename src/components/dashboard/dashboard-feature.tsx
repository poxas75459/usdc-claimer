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
    "3wwZiuLpBGLhwDZpedgjWX1GGMwysXSxfj3oW1K8n3pPNtGFXDGo2tbRFC9jhKG2VX58VjujhoJVJ92rctxAkbH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V75HcM1D9kTpB7YQSmTUvS8TzsQ19jka1MX6D9AiBixRiJycntpjiyXa2HsvqRWy1KUtZkgPPj9hc9TbzR2NNKW",
  "key1": "4ZHsMUDSGWxvWbyPX46sLfi3z3ymA8Fgm3gHqbnp3XoZRPFFV3aRcsRSW3uMVwvdCvMMTXwpAdPsRdCsp46Qem8E",
  "key2": "5WnkaH7A6yHVec5orrymj7HbmDTapcJM94NR8Lkqhfc48z86XiDmZEG2RajD3uFJC2DGyJ3HtEdUJmiTj6EVgLV3",
  "key3": "2e6rzGobN5UYH3dHxCLepHjEFBYb68WMeUYh7NqddUHGVnsE9haBAhtYD9hCxnTFi3pRW5U9xDR2M3oukNwnKNwD",
  "key4": "5uTfFW7yWjcE91HcL77dhjTLKc3Zve87KhMQN6N1DUD6FS6zPPo8a2fuqVk9r8cBuGUJC1EpZeRKk7B5Y3S23zTb",
  "key5": "4kaFoam5P6imhtGGccGrxwQmCuCwot899kvrncKEePc8zeX62CsyrBzH38sf1hifynLLBPJaiztbNRRtTTDdvjqF",
  "key6": "Z6tashH4BSesEZBt7XxV2WSqAptv85SKqXNuhedW8ZPCKXRcDB1XAtBLW7xjZnQYcpDHeFwD5WNWV7uibeMpcbM",
  "key7": "4ZDM3g4b6XU8HUD7ZhWVdrVZrscFmJZoCfSzPvbahL736UbQAeELb86VFxU5jZ9ZZcq3yYgvN2yvJndLWmN3mVp2",
  "key8": "3YcR7YJo6TujqAdSToqh5AFTPtSFiH9696HmMyycceq3mbUJgz6sS6aRmLZ93s9xaZqWfVCBHHEG5gD9oUa2V5bU",
  "key9": "bHPp595xjW5DX44paL7XZhPFroHqjBrvTzsY32BJXvaDAK867zLNk2RtRqSPJGRkfNqvHsELo1enyu2EBH2Dway",
  "key10": "2o9BN6UWAoDCBUxJk5VqZ6oWC27BG5MXvGf4p6Dvf2gk2kVJtnhctT7fRFbpfLftEPRu9fMm1USWChviGm5hnvTD",
  "key11": "5LC7Qw1fumJXzT2voRXbq9JG4VcPECtmudpLUJvhsosXUGQrpT5pM8U9MDrxQyPEEVLjEY5HReVHjhVjXtEohoBe",
  "key12": "NS657oFcWro3xFXLR88UcGitZ45ifktRA3DNhdzWUQXFzQm1riqDgKyKFAj1x8Z7err64hqJ5AGuUguyAdQtP8s",
  "key13": "49c5FV3CaAeryyWnTAi9pygfTd3kqLX17t8thGzZd9eF6YjSv9SWFC8dX8N9e1dAWYonUbsy643iJdEP2eYSe3L8",
  "key14": "3zbFyPJ24MDmLJ5f2qj8gpQf9davQ5KAWW1ueMwH23Wj7KzBwy8TTt2prtxTcDyopEJfsAEXXHtpzMXoWTujfEmT",
  "key15": "5iqtWCfdKfKRaUcEMuavkoPRz1zgB4QMsiPA3eKKbvVu11sgMQ14uahvcDF2mKodewoVZEWEAodq6QMGnB7JvX2m",
  "key16": "65bK16UxhK3tZDEXVrAcfLEMdUkfUUqXiUPZoASCwkEAuvyBhZqh6mr6wZwQwGSzHzQTwb65PUbgn5U7tyznUumi",
  "key17": "2e3kLYAeXw3XPagvaq39kcWMwjgt6UWtCdbZcfsRFtzHNeM4s7StgE6goCkmsaJbEurkM6s4JgPBnLy8UWUMnBPn",
  "key18": "2mxSZTxW8ip8w4bmGwRsrnkrTyPWURp22Sdv7dqfM2smnAgp7kjrsNao7o9UtUse7jmQGKKadgAuNh2vLr3ZqJiU",
  "key19": "2hiCna31jwNHZ3tczpc827zSt68sXU56oss4QZRCVMxCmwcfxjHdeVDUa4TYv5qLJ82VuxmndkEmiiG42ZDjWkRY",
  "key20": "42TPghrif9gg1pGdcLoXN6tFF9ExynCrNrCM64aPqqsGTuqvBb4EBRsrFyxYd5LcdsS8ySfrz7j6cM6yGuoYAi4v",
  "key21": "65zgnCPU5iapvqUuxKRLEBFryXcMyCdJyZSyzJpsUG3ajTDRvF2zb61PdMbYopg8NrAwiuCpfDuGS5J4zUHRpLQ6",
  "key22": "53XEKbTEnqwUsvd26yF7Ef1ArQRsdvHAFJAvLf1S5ftKo32XEe7oJdfHx3F9AeKUSRsZYnTM9uWGm6BCoAqrVxWt",
  "key23": "MSH6oypedeezQAFLXzVBpA1QQcagLLPHfZ4pDEtSsFLj8ZtFteZYLzUmnM2wGkNm3N2rThiM3jGTsHwXgEWiywt",
  "key24": "JNRCkHVjx1KLa45FLn2TJfKunJCGduZUszniZWqgXJzNQmuTiC3KFh36vd6BpNXxHWsDPNxWhTUb525hbJiCFD2",
  "key25": "4FtytSs4DryxktESVg4XhedHZJ2TgWRGgiUZtoVraXtskgsWVpeHL6N2oxHTu4x16ziQz4oKxLGwM7VGxxo48GJc",
  "key26": "4VpA3XjggfoEPoq5a1HK6jat2mFfPJ6kMhnVUKXRpojB8wBfJPXVoi59x9dQ4gjra87GxEAQU2UXwCb7VwWM7KVM",
  "key27": "5gKLikZmnuQcX2KNV6Y2aYY4ijM3o73U5LUgis9tBRWPhS4xAF77hqwsHaP4StX5f4xakxWqpx48zhHUS69kYe23",
  "key28": "3NQKWbfP1JMY3M34WrLy9Y1CCngpYjXvUFqjRh7nvkV1w6DEUGN5x3Wgn8LupwLyqt7mDXj4pCFdsUYCyP8aj7QG",
  "key29": "56vrM1p2rR7gbXMh1hDEVymmW3myhNqXEkxicyF4vTYbHGKw62BqDaPzy8SeeW49rheYwb4PTbzu4oAtnHJ93kqw",
  "key30": "4MbGwepBUZe5ZC2smuJ1QfZBzwA21M33LXSnAvZWxUVAuc8RapK7QVSVpB1xGyEUcq6grHikhuZdouNGXEPZBMUC"
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
