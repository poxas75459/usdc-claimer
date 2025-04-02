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
    "5FVpb7efrfVE4roUvdV4111T95nwuJrPLB3JFMHFLrNW7E9bHkd4aDZkQZnoHtbqMA2JNo2w6givLzGYqSaMrbyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMFeo1K1ifzRuMUpD7WLAzyfdP5FTdPHNB6ChDNPZqGLdzBF4JuGJjXsmd5VUTiUnzteYxgE5oySSCPgYHzepca",
  "key1": "5YTCuZLqr1NyLeviuwvjQ6mwysnS7rW1HMAskPWKQkE3ruUd861iiTQyDfyuwM3aRKTU3bBFXWbsvSUVf7nYW7zW",
  "key2": "3yoBZpmUGyAaydoTGv3kz4kEdbDbe2zyWDXWX3F6z7JmuuwiU1qAiiuaDsHW1NqEWphfeHtgos2J5iNbNs2zrpsa",
  "key3": "2RoLoEzVuQSkHDcx7BZvENPaFD19ernh2HwLsojKBnRGcQxysmgddwaQ8HbmZU6ujthCaQsU94SAyLVR2NLcNAd9",
  "key4": "26i6ZKNmyVWv4rgdF37fcf6JRFuZo3NZNborkJrjujUwx3DSKx9mq7SVkoTrUM1p8frK26XNtDrFFnWeLRzKuFmc",
  "key5": "5s5rG31kCEy8cBd5Xq8Lv9dNagbs2R82ua2aTVWbtZKQyLT4DNzvMyY4gLYXoKY1N9ZY16jFdYRTuDE7AvKzpy6x",
  "key6": "2grSjxJfcHuFmkerfPFd1EtazjriUr6zdDPnJJEZdD9hNvjhTt2FxQD8bigrgiEGpbuEgsHk6suxXiupCA4nwKUH",
  "key7": "5mzcNeKwg2423U1Ttp3TWGkPjAoDuXGbpL7HNELVNWrqkf6PunuKiTuHfQyDe7LF1RiD793gcBBBFgQK4ncXMuDY",
  "key8": "5rxXeF1ZfjvF2Eej7LaFxR7nJe19AqRPNa29s2DuZCSeEhqR5VodYbCSGbUQ8zNKzBFExkdCteVdB9b8RasMdGGz",
  "key9": "qBJcKB9hi39mm1r918bzLAM4SCUj3itMicPRNKgKs2ZeF3NRef8UHKi5CP5Uk74zHqKJTS8FtqeQyfNRFSqWGyZ",
  "key10": "2jqTjUoCyxWHTnAEV7isQV2cyc8VzTrZ7HZtyXtEicQ6oubudPpCUyb3RjAJHKs5Z7MR7omzzr8sQcnDcfesYPyh",
  "key11": "hig8e37jKPuJc3LqxNLG667S7Erh4Fk6C3ipCAidX6aLUXDiyX1fVPq8p1YMBQqqsBQwASTTMVrLmzzWuFwX5Qb",
  "key12": "33mjpH1bVFEH2CXeaw5AgExiyNVF9gEDuoGjxUzx5QmrUc875FZTqTYjvExdnBkuM45PTDPgGPkhqQKuv8TzceuV",
  "key13": "38BmEuHrYhbEYYVeRhrdqGBbVK5pHwdusiBfmQTfNKvydT2pRyeD6vqDybyuHvqn5yELdmm5godLCC9jVDJHa4MB",
  "key14": "47Kch9ew13dXvn77WFDif6XWMFYNcz4QGBTesj6gqVTbhrx5hKjH32jA1HfYU7TcvPQ2rx4GFWdHUBCEV1TQAVPU",
  "key15": "479J8FNj5KUMakntRgaP2YdU4hBfpGYm471dSd2Z6oxmaSDC1HxuGmWktj6YaU6kN86WrnZHH41PJqnAAjQdGmqs",
  "key16": "4njpVuAzpvqtTADT6WdEXyPfbEkNsbe1LHRZnKzZG83bxpQfzeFAWBfgNi2kb84o6DU6Y6oREfizYZaFvgtSoiGW",
  "key17": "65phBMi7kKJZvabBrrbyQTU7iAocStQgujGdjEtYNMGo8JgiEEpTTVGATG4WWmo34Td9bRod3eFeURB1nDxGrvo9",
  "key18": "5W13nXpSwcfBGiPyTsrAUFQunVF97G3n75PjhWJ3nDQvuPH48cpS5kKiiLHWhPVpVXjMfgDGnVRY9miw88W5HN38",
  "key19": "4PnLTHKWeR8GNYehpKEBsQpWgDrdEkBT34FcVkUX4ge3W2v7xVaZAUB6pY1hwfBRedWF6prwtpfwaSqVb8Ftm6jh",
  "key20": "5kakK7cMt6F4CJESnF89QwxToKSfx3NfvZtYCXqnwsRyNNwxQQR4cfsjVNjByRk8fYzYvWbNZnzMRePuDFSsVR7x",
  "key21": "MJQYXoaWJNS25CkkWVupaTZnSQTd1k2BbN4eV6fbb8kuauwaVQHg8nbWDCoLvMEsDhHa7XLMjPwYGdM1S5JNsbm",
  "key22": "q8NA5sTwnQNAQxuS7h1kUsBeJeMwAVszWeE12by8rhwtyjURTm1NiEatRYTdTkh6CXPgGtmGDAYNtGaA33EUjnR",
  "key23": "4tyUGx5A2X6rV7KsxH9dQbnCFNknHVvG9r3E297GRhBtKbFUjVAdJAzT4fKTLc5tDzkwC51vm6NsKo5RaSU2Pf7b",
  "key24": "hLE91LJPogZthQEFDw1x964W7goyQmHLq11PXa1mcXfQf82CsinSJ7Djn9tjkJi5dRSVn1rJ9cwSVJxQBms4ZRt",
  "key25": "yoovVdhichsWm81PTcxiajUEaQNeKuPU9ZgTc9iB2b7wNCSrsPWDi6Lm23WTpWRuVLpfqbZbp3vpJHC4rKjVUQJ",
  "key26": "465WzZHpVzodgyg9WowLQAe2wsR8sYtqHBK88P1zaVbqyVaMRYn5fcffi1ZLGCnyrUzioE4tn9h3Etoj3g8nzBM8",
  "key27": "5xkMesU32WWst3TsJ1R8BAejvdVEfJ48sv7M9mov1nDDDNYPfq74SnWWA6vscbWXx14WgZYCcCXSzbSXyfAtS3mm",
  "key28": "38ELe67aFfTZqvURbBBxM6ZJsYodyirYxFeetSs5f64q5VZGPByUzAH4XcyDL7CH3S7BC36afMJh6oaMn2qXXzn8",
  "key29": "3hh74wbyTQ1PDxdo2GpKdhNqpMxjKFxT72vRtrcijg6mZQ7KKwmoS7zk9o6xVLsCKSLBMEdnsjWqxoU4eM2aki1N",
  "key30": "2n6oTB2SbRpzqE4m7JWRJ5C2E2g3SmP3cQsRXDN44DcxowakG2o4ypNcjwqXBFwVFZSePo1JXHN5x54LKmtX9jMM",
  "key31": "sMmBoMv2Ly6J2XK7H5hPECFwpts5cJSFTeCGXCUzdMKQ5Gp2q67kc8rJwPnKGTJXeos2iW2qmmqXpXjN4ph79So"
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
