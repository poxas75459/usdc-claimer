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
    "4N4V4AJEhLWWmnEupBJYjnAcdXaF74j1SbqnkHow8V3oqeDmojcQEyeLSX8PnVF63tiEaxfvCcU8KK8de7SGdx7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2frn7atSWM89xkDT9oJeF68WQEQVxawRweCC6urHhyc6BMDkLjLKvxhmvrWJjoEsHXNtcFnwVj1eL8zcZXUHc5Ym",
  "key1": "2RKBtdtXDDkfJZUYruzJ3DJFXaeTutngzPzLUHdGdkpZnFcZsNEYD9YGJRVoCxjMQ1tHdfSXS8RZFRrT7LF4cYnY",
  "key2": "42VCX36cXuPv6XExFNNrU4JaLx2uN25bSK5gu85685GRYzYKcpFrsWt5dvft2W4EugJC5dYz8eweF8L669YZ7Enk",
  "key3": "5NC7hm8fnP9MkBhHr3aP2ZyzLzornyDgKD3vY876GeaEnmGd4uJkKr9NvdaK462vxv8nn5Tod4NCVK3G3pLB8un8",
  "key4": "RnrBRZQoRnoed5vs7xQY9FWRWUoXcTJ1H6tHbxgndVG1AJ3mSLfHibsf1iYMFV6EfrMWx59Eei9xqPCu14NSkXg",
  "key5": "2JGWq5e7JmBUTB9GSdBvoarwB9PJm81rFjtZRRkgUpCeJ9kFUCTqWaFjRDgoj2JrUpWpvcpfonbH7ZWXHY9UXBMg",
  "key6": "HdJT1fiYZunuv6LFPK7mdbBRraFYQt6vNJ4RSKddKeqrTgqqmKFCf8R5iLqg9gu5KvGcgUGTWTm2uCBoXNebphA",
  "key7": "4dWLu19HD2d8e2EuLnaGgzoCgaGn1icTQSsD1VWjZrr1uLhEWAqrFaa4zMGBgKzdTjUagmV7Jtve8MB86VsahG9d",
  "key8": "2U8hiaaPdVgfVoixKhMJF5vJYbBnqZqQuX7NWhnThoy6qEJpDrf1wRJxW2MXNgGPt91Qf3f9BQxpWVk2bRgEZgHP",
  "key9": "4iAv8RgT8sHvDp76JhFbT14VBBU1vV2BdwS9tDf4kLkrn9oVD7NAQUEUeiQcAmNtd5u3DYvoqTiTcNZMyxnH14U1",
  "key10": "GFiLSBKvApyhabhfzwaae5ihZc1CzgFgqAtiXqPNwnBJhvzDiRoQxfM4YNF4ABzR66FL6gtTax8HArX291reseA",
  "key11": "2iesCeYS95Am34ysvngfysVnvAN1yeQFShewoV9Afu7nCMRAMeHJWhhwLg9qMvCWBfpSy8T2g34nzTqvNToznsqk",
  "key12": "2eBP7v1pJXtiT6CpU7EMDuxAAQU4zCkdUScGYgSwsFTQn2tktipvyV6PoA3y8bxSaFLq4sFh1RykFUhcQkAd4zss",
  "key13": "3tY6dyPLHy86TQfuCfd8vy4s9pPQfgxxnhU9rYyRkD2YRdHufWKwVmwk1DcU8T7PsBgs8jz9XD4drMJTn4R34SaF",
  "key14": "32RMrtBBj8xDbHnVm53o8c7CCHFEUgRGKRkb6SBmejmzfuStUTgMtkkB4EXLbuPZpLuYFjwyW51vEroBnLGs5Dtr",
  "key15": "3KtZ8bg3qiY1Jcgt4BbZ6MG2VvAYuRtvroemuNuaPyKcjEympnXLFVd9aFFLoYCKTnQY2k7LfYCLGF1Uv8HG2eSu",
  "key16": "3n4BFr7RcFo9oBMBH1ZGDenH8kT2WbnFMzPDptoJGJGmJ3mHFs14zEExKjdcYVgjyTp8CGg8EivroknZ1kvGLReL",
  "key17": "5oAiErvpLtPoRDrGXuS4JVuRUd3nnLVMpP7MeURpssb1JQbC9xg5ksNqPMX1zYc53bRMHk9Nw8d9LG8oEceDBPjS",
  "key18": "2xKyVWLcHntUYdH7eNarY7izFDAsaiDy93m5uSrhx8aFJJWD8TfSNt1dujx5kpY5SMhSGENHtU5uDxNu37UMJaF7",
  "key19": "2ojzC9zQU4ixi19NdVxzEadNpfsqmbDEwjcx7oaVLQooN7Eu9mQdaCRLcHTp4FFyE48jRuaWef8NWYvfUoXgqHph",
  "key20": "4xjcFCNRRujPHLkuvz1giU52BdQCXpWZgVqk9u94mc3pUCM5U3UzMienomaqEj2LtZ2puWg4YskNRrT6y66fdrL8",
  "key21": "nMkU1Kk9onJRpeZXEmFVVJrWntbzd5fjtXSfFdNYM5UJuqTnHFEcx4hpY6TJXaaQdKrkxhUCkCVT2kT9uiqncmj",
  "key22": "5qxr2y72rzzkNhmRukcKbTbxULRCqtAPmjVhPXSqVrkwABgfyNgsxYBDkCJLBRSvrK1M4wpzcaNaKJz22hNPS9XL",
  "key23": "qVPBGNqs9fcwFGYCHaYSWDbaorpG6WXjrVCv5BPQub6Zpoa6yZTkQZ3BWKGf3Sy5Hi7TY5XPfjuS9ZWt1q6m1nx",
  "key24": "3ouR57evQFKwqW4NeKqiQUjmJmdFwvVDK1SuebgEc2xB5CzqCZ2Gqru73YSVCHo5RbgFn8fSMcf8RAv1umqx9FQy",
  "key25": "2Qga3DcpSbsCCJvDy6AoSWXvfFXgSNR2bZknGbcMyqxqpqBTAeWE1kebNfZ2tj9jh47Cq5aQvAJNCK3DFVKDKADo",
  "key26": "Q9CfLevAqa6wnWWdhcjDtd47W2hC8xUKKDRrZKQPKB7i99aMenN4gwomEeJktUr47Aig3YirYkcamQWJbwUHU7K",
  "key27": "2pYgLaZFPf8g7o3XU5kbYyziGDf6JybXBqWkDthXurr2K5CiEXkqQcHo8ugxuS5RRSXQ3SfWMegiUPnJQGZsBUpE",
  "key28": "4op1DACykowm7TYuDMiWn4iYMVr9mnJhTd26mkp2iEHrEeMkfsM1PS7rV1NrMgQaHdFUBAoDur7FH94bJ26cNeSB",
  "key29": "2GYW3vd6F8sB8qUvM7f1bfT8BZHNWyjPKoF8fKUURVKfJFW7odQn3k6wQaDVQRtanLRJLFdnyiSzAmC5vuyYF6LQ",
  "key30": "2FreQSA382LLBwYUwqdmWNbSpgxQGZw7VtYZxu8Dz1RwjN1sVDZBxiZFKNCTcPePQ19STfj5suuxuLkisQbSK8gG",
  "key31": "MPdDnYY3Sz2LhVZd1KyNCTMimgkbd7CuJ4dvcQovsmuSDpFEsYVU3cdMwMoVcUKEv1cCdmNnicBw8fgK5wZf3uU",
  "key32": "5k8nzao5HtMM3AMzcsmz1B8nxG9LXf2dqSi3PAo6vC7JQJW2VpY6i7vLNmQ8VPnssP5Dx1M2N6Jg8ipLMP6E1iMw",
  "key33": "5d9NShLDoeTwD7d95NgfAUrUiJoBPjhFFKTC4PBe42xGDjBET5BhKyME2GHLE4GEdwqBvnpPFRKz3jufqD8aQU1E",
  "key34": "37SRTsph92TpDVYf6Lsfb4H9hZmf8KieDsz52V9GkfsazcLUHs35mKoNUpdQLULLzSSm5KrFwhcsH2DAB2hN3jm4",
  "key35": "2ttJ8R1fvYVSR4CjHeCYRvu2jcuUWV3zVk3GW59MxPqKwpbp9KHUYkMXYxPED7YZVu91QWvxcQk5L1vuERCNpRSX",
  "key36": "5gjAfRUJTiAFWDjDSgFACibrt3qPCC4vg2GuLRFDP6kCHWwuo69L8ZJf8422HzxqZARGUoxaZCR47cQXTkTxH6FS",
  "key37": "5BWJ3Hkqn4N6E72EPMrUyzZd849VZ4D7jLbH6Z35nRpQuAumLR1XHjwtqmzSFwuSqYQJi1iERV9688Zm9woxDWTo",
  "key38": "56RG1dqvRGNKNij7e41BfucFygd5FqBMhYsRvQb2pZpLx35UEmmw7ggpMmARdMRDF28ycHYXX2myvQTNWUdnjyZd",
  "key39": "2MajHD9GE4n6uTtouE6tNbR53dngn2k5ENaB7NniJDPKDttd9MptmUHCEGqWcemwJVnnr3VboPPdbsohCzVKNDnc",
  "key40": "5SZA9K4x3C8JhAbSyF5EjBT9uvbB5N5V7Srb2VPUPshy4v1fP2fXfnd5PnyFsimNkwkJ14hYWMaHPEThWyPN33u7"
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
