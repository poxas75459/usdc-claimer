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
    "3jd3riELb4dJQrzumUU8e7yV9Tkchrbm9B3oM9EKPiXZd8eAYFUfJtYdpBdHu4dWbc7GFBgzp7a6YLwbABrdFk61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RkUqpMQc51gfq9D3NvBu9Tnd7v3ExpHyTGQ6bQ2wkdq4hTM86tF1ieMco6nv6PmopHxgEj7rGr1C9pL6dGyYTXA",
  "key1": "3Fsp2bLipZBfu5A4D58c1xvEK6SxrGAAcZpdxozt1FVEo97CrNjCTViv6P46DH52m3sxgpwm8Nth3Z22oAUBXJFV",
  "key2": "5djQChPdKvxWfN9AmNcMLhdfpi7hSz2qCw2abSgFMpM61rQUuqTqoxhy14Yyg76WJkvoWxxgmFzNYRa5ULy3VyAv",
  "key3": "X8NF8tYo6TeKkJmuxsjQregRhhZNxofuCVk1FxPWrogmZyu4w4REHnjvQomz7phK7KNKAeDnDjLjPSxDMqUdCmC",
  "key4": "3HbMQKgaJKtDTnNUsZoUMuDwQPUBPSAoJuYGBkNgjEGsEe5oc84cpYzv1LwWit5tBoiTonUoLnQaszA32NhmsZCU",
  "key5": "5LxKbF3xG6x9nfx7sPAiBxbvgGtnAwbDkgfNRGCnFEfavQgLGMULbywkk453MhLsaRtbW8dzkbgzL1PHkMAaCKa2",
  "key6": "4unyYq5r5voH6bRNasNd1BdjuJuGTufGVnG16wUJ42RkSanNfUsJWB4VeEiHGZT7GBJim8pcJXtCkyczjY4dyN62",
  "key7": "2R642ec1h89d3LjvEcEp8SpoKa9oEWic9uay9vnEoEGrdsWjPndqS8seDnsm27vqD8BA8rHHTKeo2erswDgwcakp",
  "key8": "5bKGfbdSvcJDbaNRgVj6zj2mUTHtfujuVH92NhB3uTZNf3v5zggRUFXYbjfBiYnBsi7wGWLPdGHD5wsLaFGHTHWw",
  "key9": "4JwD7vtJozbquft5oSZimc1WxNyWrCeT2kJqbCgNeLCow74cgoVxLXCp8ofqRN4Wqam5ZXAkrpxAD421eZfBp4r6",
  "key10": "3NsmHhfiZ13oSSgC8efgAveLjWWeKjkuwXuuqbDBnYf87ah8QFo9RR6Zkn8dE6Uo5sqan8s3bkgJHozmynyH74cT",
  "key11": "3CNqHkupsykrrbFQgGaFshe5fmC4ZsKixDz36d1jtv5aJ9WS62ftCj97sjD5nAZT7saVFk7g64Q9u5KV5jpTzbGc",
  "key12": "5runLjX9MGUJWggQUyb36wAnSemAizVQop7vK5241vUHj6FXT4GuhUpj4NWHCNnNUXSaeqQZysm28X1GhTa6Z1VM",
  "key13": "316M7ivSH1ENdwtW14GAZfgFvput7DVR5RYrNtTJTMC1skW7XTSzTmRHXAoRQLEqF4BvM8VRmsxb75H7TaoVP5Pv",
  "key14": "2UtuLN4ZGcUnXz3jPvY3rQqSuNacqLt85UPdPiXTtskMBqx6P4Guy9Btb1nGV2gnFLkwH8KKqPjdcss5kGNrbR1q",
  "key15": "54RRhLiquzY97xiM5tW1kyfku5j4Hz6ZXX24Xfio613AfhTCGuhY1Lr61Wk211p7ewEHsq9mZuSXXK9rCHL6HMh9",
  "key16": "3DALU8kMC8z32UCGi8Ka1xtzgAMd4mBUHMRLZqqHZCW8sew5nxKYpEALibfQHz1Fja3zfJaHPGBtZsqmxZcXrjVt",
  "key17": "3Se4jB3mtESSogxCPy1JxBktH2zVeHX4EhMxXFH5LtCLeJtsLnf1R1CbsHDqJZNpZhmsC942GxferhG1QHKVH5Ug",
  "key18": "ViSCU1KSfaU8rkpxKUkSfKhAjzJ2y8ENaQ68e1x1ihcXB6FFkrCfDoB5tHySrPvKezvZEadWhRe2d2yUc7gHaRt",
  "key19": "2wYbinwzixh6QyujA1wir8MkX4uNYF7G14PNr4BNtzEBRtav2kwEHaAGGEoH3jTWtXGKTh8YzezydX8rUt2AvCzW",
  "key20": "CqjQanr1zU6QRy1C18pTsi9bRFudmzsd3WCDP1u195bNe8mVTRWVt7aKcXMF8GwCU5pjA4HWRNgQPay5jg3KL9S",
  "key21": "5eYg4wUM4hx4UUSqAteKjrJey4Ditu7eQMKRb3FDDhFmtRRDwMn4QVWFwQ1ANcuXBnZsg7c5BZGSwWfE1EfkG45F",
  "key22": "3wVope5Q1dSTpZG8kN58rkq8AtK6sxUvKS7Pfa3MQD9kA1f677encGBZ9LHsh7sFq6sAig6iWAaN69f41QYH6wA5",
  "key23": "JfCZXfPdmAKNAzFD6d1ahR2KRMji1ZGqv3kd9cXr9QQvD6oWxojVZcYVsnQnFmXeexWE9yewmhNqFLD547gpKjr",
  "key24": "4bWstWqym54yuqc3BtBt5k6W6oBKzRo5PjUWXv59HyECQR6G4H2pWVNSATK3oLmPUdbtpk6oeqaw5YNWCJ9fibPX",
  "key25": "45fSpyE6UapMmREDUwKArFrZAB2gWHF3fzL8UYaXdmfP6p1NvHoakmRrSBKzSPZAnNnSQV27cgxi1GKXQhzSPCev",
  "key26": "5o33ZqtnXSNub8iC4RWWip3Y8zbopvnb5tDKHw2P842WUEvqNeEFMMWtKiJuMGg4RRy28MvdtrtfWt7w9rkEnAr5",
  "key27": "5dWPsUJ4dAywGPsmEZ3zXnhGBp82mDyY7G7muwFvFfy9Ypv1nAKi99Uxfbj8oWyw5XEdJMww5tqJRp9r4k5dK7Ht",
  "key28": "5LA5pi3qcFQXMsv59zqseYkPbeMjKLC6XS2uEs8VormrYaKYoVo8eBt1k5AX9z6BWWT5ToUde5E1uH1NoUJaPda2",
  "key29": "DE5ycdNzBKdr3GSCUS5sSf6ix9bMDfB2y6SuUUpwVM4EyEHEbHBov8MaLtm4BdJGkkNqgVaeLZDqvMR7kghuA2p",
  "key30": "CB5wajFJpDrehFhJShiwjf1SLeNoYUJzfUwJsYHb6f6hW8RKUQg8xSNBYDsvMkvhJw9s5zi4ZxXi9No6daTdJ53",
  "key31": "2yhXZm72LESy3tQGpeuEpPKAchvZPc6u6jiZVa44qZggb6AnicYRtxz1vxrVJV8mQ1LtbV5YybycLsX9XLym76zK",
  "key32": "5F36jTBajU6qTqipX28Du7W2aP88Ek2jwysfogfTqkWTPdKfiNqECymMR9L4XdVAysqn5e4QByccCdX4Y4zXR75v",
  "key33": "4BXcz819rdEesm5X8Jsn5LGiVo3mjN2kPEqgK39FB7fx8DqqQ6o965GcW46Te6Kpknzojo87S5tEzCoUGxxVaKMo",
  "key34": "4GKVSBQ2EqQmQ1YWhyoWvDaiNCpeTb8FW5Q6Uxxh6g9cvGVanGEYjckNVxhHVybnJXg7iFqt9MNvPq4aB3JDZPkg",
  "key35": "2xTskmhF8RqBr5bR99jR77PkKfDCXZLMspX9M96tZCYTspu87btiH6r3agkrkEXbZZZgqX22uh8U9PrGHK5oPfKJ",
  "key36": "5UE253h9V9ysctxDbo5TPsKEY8ioX8XwFeh8JpFb21NevHLhXd2ruHVg4ncG6QHDkRU38xz3xJRfyPcoce9YkpK1",
  "key37": "5xjpv6rDmV48kzZdVUJ63gMSRKCzVcsBS1FmPKzCA4L3sR8HRb1eKCqwyLjgmLnSfGwMEEha9mFW1PvaysWdxviV",
  "key38": "55WAmycbPqcttk9JFtmShKL9B8irvD5FXXtBzYoV4hNkenAKqVWuhdZAwRSg5trGnLa4FpGsTo2pvXWCQSzLEvpH",
  "key39": "2JaC4BNoiUcKXbNUtdQEwvRz8XBKPieAGGbS9MbiEChj9wJVjLTDJBii18A8KsqiSPaPqcH2uxNiRyGtK1zwrUNe",
  "key40": "3JytKKiMxrZXkgDYhenmfAK8Bnn5xvjww1gWigPNRR7QZTEo3Mp5B5fYnDWL57MJr52LGkDstHawwGrxY6fqqd9t",
  "key41": "3P8zNvUBP4CXsyn9WTjzXq4Bb1qyU7iwdmo3g28RRy3J7ZD8puzxKPmFjGVGL4HWLN6iKvb9PSQiKT2kBCFDRRPy",
  "key42": "3t5habTtwMsJptGpu6utU2gxxmPGsh57kBBTfgBbgBGCUcZePubQtEyng9ZH1KPLiQYtLb7zWLa7gYEgtoKGVW6i"
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
