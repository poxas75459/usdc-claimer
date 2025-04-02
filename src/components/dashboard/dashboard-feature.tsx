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
    "5PwhWhq8XMdFiQJfJtQN9sUsdodchtMjsLffG1XWFeBZ2jpEFXyD5RYDuTx7VF2mnpSu2LfzjUiAaukQL1SEDhy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S4EY1cGSGAxBhx7ZJ19KZG5EKTcqruQ1Q2FTUPSysSaP6PBuhfBRHCnEcv3FzrFouVGg7Db2vYkJHf7NuGzD8vB",
  "key1": "2uz6CnSMzjo7cgvdNQepEwXwYTGbA5GpYLPT3ZTqHWkCU7ENPQkgmhh53sB4TbNFaneKNtADMU5uFYurbo27MTj8",
  "key2": "51u3hawb8Ny8aHFzvhA2mwDYtVhQT2LReqFXZUxGKh8u7Gp1nFyn7nQG3hVQacQBRVceQEpX7n9uUnh6hhkBFPtM",
  "key3": "4p2zNGgTyegjvKoDmE6vcsYyEeyxbBEDAgAWt2AZyEcUx8MRPmCSC2zzYHssL4ejLNhVVcR3cgECfa9cx3Jr56BU",
  "key4": "5rHKao2NLXJdv9hPLQfjmYcs458yZfWN5JW7ZyRUoSuDdZWRR5S5wAedZUaDz3ZR6rmDmvdNtyXhU6aAE75iTQAq",
  "key5": "5mzTeVDQ5wGUysZbu9KJBhA9ifoBYXRtw78dnvVESg1p6YVqn3PNgE5dBcLcUP66Wqo4aoWCaxWn9fRbTBJ8VgPC",
  "key6": "53VMx5cu7rVwR1tUG5AkAb5QUkkyshi5qc5bsHvH64APYHeyXn64QQ9G9ahm8FHVy9Kadt9bwFMuqKzk5VWoYoHt",
  "key7": "4S7mmhsFE5EZqvkM4mpayx9TFLvqGbUSUWWHvbEe9Lq7jyRK2zSaGBxzYKDn6cTY6aAaWbe243U8kDoa4cWXD4UH",
  "key8": "3F84MvhLaErDboigXzKzH5x71sHoWSano7BJUN7KG9uYZ1ekwEpdzYGPg3TUrso8utaXZaiuqZYxp71EMPGdM3Ue",
  "key9": "2tyEKedHvqBMex3p1YyGufWDA9FfgEeou6zxMpco6zpp5UCN7swr4RdDXh1djWg8McQ1jhoZzjwPuqW4XCvEok5n",
  "key10": "58N8cQ6mz9j5E9AdejGWdXqHjBdhsgEdFmoBmY7qgurbjEou99PHEaus6ahPVxYxiRLxSAiU6ry4GS2eydvU8Tiv",
  "key11": "bfSK6rGbuJB6waHb7EHifaG2vXBJcRKZbYexFuF2QdCxxpAoq4Xq981QrNrWE3qHnh2PNwTd21nhXrTGT7emNN9",
  "key12": "3zCnb1N5vxvxYUDTZ5hY6whJtCh1VwRapJ8ZzVGGfiXqggReXH6tHruQmVtbXSkdVz6AEPHjXPNw4ZSdVYZK92JE",
  "key13": "2YkwZXUDLxZdonJmByktP4C4RoUpTnN41PfFVSaDaJ3oac8sWjVeDAsgxuFzprHHvSXPgxRzoHcTSQqLP1nBizy3",
  "key14": "2NA3rhWsf5gr8QsQzQhe81TkqXDkDkjbSrEA3yXhiPtzUL3g1xHD84kc3i5M5pkpvBv9pWzivqPhMWeQzW3EZPdY",
  "key15": "Tg4DjPVupYwskohR77hyHNmcq2AAcHuSmC7msM4peqAXrCKGfc1qCtpge8Cs3xbE4Hn7gEq3tMJt3niXQz1AofY",
  "key16": "3oCV2KgANbErvtMuHXr7bTmE5BpgbjsT1pVrMgZ6g1ob1TLEXT4thG7g4XYE7AaCaQ6jDPFXvCADiimYEd8ABuPt",
  "key17": "4Y1hsXYgCoW2S4VvxMMDHKQtw1fhQTyTsfmiJGTLaRMmaQ93JeXZNAT6Puw3Xe8UeSgYySA84L97pavzzLzbdSUi",
  "key18": "2awsdf87jt9Kf22dAz4V3J95d8JvoCN557gZo3CPShuiyQSKhjH4XZCPZqM6F5gk1Dp95Kt6DBNzvb88fUdSmzem",
  "key19": "2Eg8qVHRASGnPSWjWceis5LgZBCRUtWSNfA8LLvWtXxr3R4YCEfJyJ2zUMm47fpWVFZHdd4nwRmABiJn3518C5cn",
  "key20": "4Crn2Pdy8UPd3tRHMjQg5wk5QuHAkDZd6VCWSBQVM6ySf1mDKSvPwnyqVXSnKRAcM6Q14kXWMhSHYTB1Jyu5Gn57",
  "key21": "48yPpPqReDhraE9DMqcYkWHp6SiuzJzP1NV2LkXAS4DJVsXhVTfZ7kpvFc4XeW7m9LcjwBv1WS4LYRxMvViYmiZU",
  "key22": "2afwuqf1kv5h3bGwizRJmACLqLsN2c5gvvdMvn3i6M1777kq4BPH6tMkQLm6tAgR367Hq42USxhPfM3c14raHfPc",
  "key23": "bMjFKZ9hgLkqrCjwS2barzHPgWt9jKZtghCB3wWynBtEdCyYWnx17aRWpZ1rjDZcAkWYXUeskUcWAqdumY8xT37",
  "key24": "iL2npJzP3d4iXfWmGa2bLkWkrNvTH4TW4KVTNwqLsHyFA4i4X4XLjcAHCEUmo4VqWUFgKUY6e2zEd2uhtu6uFcu",
  "key25": "4PiVVHLZ9a6WQpTA3wDVsJ2nnJXsh4pGYAwKAMWdHfx3LiKsze488fpKubL2WckcxUQu25ic1EopDNvZjVUdvcaB",
  "key26": "AEW9hyHmT2Jcx8FJhiWCU7dopdo53987edFUfDiuVJABdmEhHYvCLQvdtuNBp6VVupPCNRe7Q4temGwPk1gvJae",
  "key27": "WSwu7wHSNLKzr3fiqovVKaio2XEF5S4up9itpmnVBfWVRD6noGkukzPbVja36kZp54RjRevL3RrpwfD16dwWnds",
  "key28": "5W1jKSCSsjcdkpbSwThUifoKaCzHXB1QsXxxf4ytNqqBtoxQocEnQG2DFSzcLXbJZgsJTDNpeRE1XhSW3mp5Rhu2",
  "key29": "5t421BV61yinqnx9Dwxviz5XQLPGZPTGmtdTp87JYbidfV4L12WTczWB6SCWkbri7Sr2DrzmfXmjsfZ2GY45Ugot",
  "key30": "3jRZ7SM4SgAneEWTmYGgbVib7LUWNqG5NizdxhHpBzKQTWfvhJeA2W9EpuYjQTwXNkwKtaG35bjgDDShi2yF6Xfh",
  "key31": "2yKFZVqCWyJsKqWPEMSUAEHHM3crVQvKo4C9A3iBAK9KuHFdrFpwt163vMg84JmqWmYbPkHTveccxPTvmhBrm65y",
  "key32": "2xWAq9HD4KWG2o6NFbpRFB3hzxDZRv3w6uLyGqHMFTskRwHa1A4pL7YeoCMMJ4SUJ4GfDyUpRfYoosoLMGfaTMTx",
  "key33": "2wmq91pcYvGaNVStpHdC5WHMjwZsrWYVCjZjn9V8zyMCTmSsy2msjda6nqcLEaoW7AvjbusJkMbRYSeQxZoLj75b",
  "key34": "V25FCjeNge8P9Wg67ifdEXtZLHEscNB8w8J7YEhqEs2fsBeLrUcs2J1Gj7WAMhfJRxGQbb5CwuMLd6jgySvotHm",
  "key35": "3ytcda3oGbTLTpJotEK7pFkiqJm3ocsubLqxqw9cezY8M6ainW7jCaGtmuBt88PUg5hsKtkBEBvAZWQHJh4acuqT",
  "key36": "3JVXxcEWjBDWK6NHw9MJpe8wfXYQYXwLYSQKxwqq9LFaEvSgkfxXVCkjyAD7rNPUVYiVmNpVafhGrVffrx3A2Xmz",
  "key37": "S5BkYudMeyx5mZB6T6tYbiCE4xhB5rAjeuXKtxDt5Yw44ybsjWLfLFUVqEChqPyJpxCFbDR52Hh9zYonHKPyn3K",
  "key38": "4QeSLMuQERwpHEsSP1E9x2ya1g9JvTrncVpcH3iQGFYMmifr2gD5SscNfZsyVMorfHHtXqbqRbrbBWaRxBp1wo84",
  "key39": "T5XBkbxGHyWrWrtYVVbWaEY9bs2xkeg9xV1yhAtFsVCm6iqSwawM7Ennb9DWgDMTbCQatTwijhfZMHfaWMuN5Gb",
  "key40": "vhm1epA36D9v6HvqmdD1bGvWF5W25xHuBKfNzGj767zGV8WVhBPVUhzAW53KcvWN9xdm6DhuCgstdCh4D5QDY8d",
  "key41": "5UkAQQyo5ogoVeMgoCf5xct2fJxzFtfjWnhUVAJbVzDFa27wJDWJ41FrZQYQn5oJZNm3ny3ZedTAyPkgesqzfna7",
  "key42": "3m91coCxSLyUJkYevB6hW6H9FyE9qBMu5Cd9CNsBoUEqCaVbA9LKa3kjnyCrjz85x55HR59uU91wzQ224cVJjvP6",
  "key43": "2fhB4sat1nEHN3ny4nNQqr4etihRAJPrqNLQGTgwV2rFaUWPKRJMTtz9vJgyP2AQDsXpW3AC4a3vxaFSAVsyhk3H",
  "key44": "4zJumhDiEQP2ia8eFAgPsDKNYNL2f2G6yKidepKVfK83Qsd19QWUgHYmWBTZfcHnfzpB7bupHGZVcVzXJ6Pk5y6A",
  "key45": "2QVL3ssxYdYhBAaQU6HrQ9NDFnJeQhhKPmxv4UHViG2zQKPk5gfz1aQ8bHPFU2JUVQHf3Vtwh9nyucvmpqBmfo2k",
  "key46": "4Tm5ukRXhbUjTWSsu5bRFTruJrkL4qTQNC5rfnrMC6kFBG47zdgQEVG9p1ZPX9jv57qM1BMkW7xzYNkwsDjbQ86X",
  "key47": "3sKKFbeLMn7GmyvM77shjRJ85iRinR3GomztcTxuppz7S5oC7fdcfi4UaPFAtmfsU7tLUruWEYpNjYrBic1AJhiC"
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
