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
    "51CMqDj2AQNrhAs4fi688TfEiQwKrtT4byUjrAHYqPHkSD7qF9WgwcadLfrU7TTCuTzQ9vDHvvZirCpepJxYKUwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1tvKmc5kmUTuMT3dqy9HJ7e8SQRbXBfVFrRGFVR4rYFmaoNMAPuHWXrDBmiFHJs9kKS4qg1uNh4r3WhTgCZCnK",
  "key1": "5hg2e9QUT9RjmLadRwgavLVbC7z4HDpRKykcaiD31yFG7WyAkCpBLzcC5MAyhq6DdAYtUXDNWuTaY3n6KQaxmhwc",
  "key2": "QJh4vxgsKiBuZCySTH5gyq69pj48MUL2n1t9q4HgrRS36y9JXbnUgZRfC4A1QUP6Sefi4WXzuUyre4Ao397WcMt",
  "key3": "591qtiYLF6iU7HBJwXHowouHVFCQdrgrAgoLk8zTYXjnGNkkUZ8CzhWrV7juUNT45JFnWB38E5yFEmPGQKX4rtU5",
  "key4": "36M4cUTh1VbfnmaeUe4NmDBB18HPP294EviZQhbT1hYZMNMCCna8a9iCNUjQw2dy4APjCKoDWijbDaFocQTbZNbR",
  "key5": "3oJ62txHFxj8KwpnPMGrsiBVqyogmp6ooKNwHRzKwrsWX1hV4D8G14bnRGA1zVCbJ9M6xTBwjA287SHVhhXtQpVE",
  "key6": "37PqxuHcVoWmMncGWoTxPvbottc6iLy8VWjHR5uPCno4Lyi6d3Z8tG8rdk6TFFoxFFHdr5YxTRGpAVmAcxHwAEGV",
  "key7": "59Lmj18EpDDxgQZpUhpUjoiJiEKTb8Vb8u7Bjd4WbF8WAZJ9ZanrFVa1ab5S9sxrUx5yVRQCCfi16kyTPDrnwuB6",
  "key8": "ox54rHT4EyZ7gkV3JaWpbWBYwfe4MdTX2UoxBTRrjB1vuAAupGMdRsh5SmysAszA6HWNhjF4FabYQc7MoMzPs2y",
  "key9": "3ac5f6ApBGkuiVXZa9M5EAr4vKYewtNzJbBVqfmTbtmsFBQ9JhRZ54vFkKQE2V3rTVvLuhLqCaKSy1eNcFv52zoq",
  "key10": "ymFjtbt9k5JCU4ssv6vhZ5eH8Rn2UoCdLGhWMNYRoMMUP6E1Bgs8tA9hjXaTG4PRYigYCLTYKXSLdA1YiQDHjZx",
  "key11": "2Ssy1tqE2jAJduiq5yx3RpJtnR9FpeWThpPkQkNPrGrSUQLJ52pN7nDWMrtvCX9oYjbCNmSYuW6gz7Gf8ryTZ7V7",
  "key12": "2HU89FfUHqiWm6X8NPVyt7MTrZbqVmCVJCSS6C32iV7YiQkcnrcJb33EiScLhUdtkdsqkp8xeTBTMSaQ51nz558f",
  "key13": "2769UgcqEttQwzRgxGBkwTTsam6r4t5pcr5W48wwj3GQeL6DXW64uyeCu6yoeNTPZe5gEWrbyrocNMHEPtgx239s",
  "key14": "iGXra9eJQyGnmvAdAMezn3ZQz4QiPmJ1PhyrHPmizFizcSGf8R8t7sVt5rzukFH3EZxQT13bCDVqiTUN1vt3bBu",
  "key15": "3BEYJkKvUqdt3NG4TTiCjy8cwn9ckFp1QwEbQo2JwnyyubyoXD24GpgcM3wEMQxvwkRdKYLVdJoAZihWtZAfZ3y9",
  "key16": "qy3mTuuQV1ZMUTvZibBbF3RAmUwhcdajxzjGjP53H8gYuYhAwckw98uvjWQk93vGDNsV7pZ4C43Et7AJVqtGN5v",
  "key17": "5y9ujzPuUYBTpJ7sZ5HqzoiTiTCABdk8oDWtAKyQzPPsDmSpJres4kbzEqkmD2i9iRozPNQzjnZsWe6gykLDLjJk",
  "key18": "asuYbYvaPx7UAwD3ihbS2B99kZqDAbeqXRbrHTMBNAgBhLm2xAokPnPjmMFFj1qxxKZ2MsAtP4b4VjZnomzEgzx",
  "key19": "652ifuL24xihrffAf8FRcx9yzdLYvwJfUZbGc55dVp743fuwwC2BR8BLGq58Kz5HjFqNjisD8Lf2sbXcgkyYao9n",
  "key20": "2bGzGkgop7Xu6mQRDZ8waAq2hAQsCYN1BpevgC1FwbJABa63RkvwNn9bdsynpPbAUAwYB6Eim1VYrxv8oeMKcW2Z",
  "key21": "2UQCS95Z26UchEo4YDmPrD9XAuMx9L7vboTw66KYmVfpgXpc35rQmAZLfo6B1bnKAMewRYZ5dFXWVTaSQNdC7Eyf",
  "key22": "4xT36xHfWeNNwhXzbiXE9Xg8M7S4DV4QYHnLchGEfeKVTa11RFFbWC5Tp9P2cWw5Ck5gAGdy97GvWqb7n2obuKqS",
  "key23": "3bFSqg8gWXvtnqxVacwudr3MQLyGVFBjs6AHHG6bDDSiHnR4e66WHqPY7Ks6Ci2AUSoF61t8YaSzw1PTw3wuB51J",
  "key24": "3zSk9aaSSA757AYV3SQvotYeUai1XVBJqD7sUBPRxTSM41H3Lvyn9Ls13GmKRtpsnciY1thBgbSAEXkX5vuCDrAs",
  "key25": "23aSWmfWAYDDLXLWS7E6wHjd5oZgBfNGiF54QCFVxVPoaYRU2dBUh3g4wGiQzesoCTqUZjnN4WnHKNzACtSgHrxC",
  "key26": "g5jp1tTwzXQ8bmuNo2yxUmgTKDWA8Q6rSd5xRq7gQEhgykT23dkDKLhpBWFTiJYNYjR8y9NZvQYmis3CzbJZvPH",
  "key27": "FGeHczMcHZrGtv8ZNRyuJgStkkRnbi9qXBwd81w7YeWpe4numWCYqw6UyYVcNRGfRKgDfmx9zzHG3Nw5aGURMui",
  "key28": "5PhzhFy4JeebqEH6qmuuksy7Kz5K2z2C5uTEWFFsMfHNUte7NW7qW2k4Vcq2Cgd6rTxGnmckEtFnkG5EHnTWsAWA",
  "key29": "4Zwg9fmKd1P1Vguc2mihb6J4UdcUkR39NYMtRDq5FeWRQjAk8tcCJDE8J7p88dwPEQ32Myz7cQsScPrQ2St8J8Jv",
  "key30": "8rTNezXoE97t1XXAhPb1c1Roxsxp3WbSpKaShrYqnYbVrsuGjyVMGSgcTmBpsw6QyHV3HxtBZvMujivYgxBHQzK",
  "key31": "5Kjj4oEJUgPUEKeHnH7KyNFeCqj5y3Xy6BJrZtdkAQoBxoQo6dow8WRfCL4Fpeuttm8hGmUMWzjFripPHy7Ks4M9",
  "key32": "4PuAaroRr4NmHrRA7AcNqG7erZ1cHvoWvsPnNZoS94cxNXgk26ypdJ9q6NJmMKsLqfkRbySKtNGahxZxWUbUceMT",
  "key33": "yH338qYMabUaMKGvpRv9jAiUSCkZ8VBa78A9EmZkowYkBKn5mpwYmrFhZP3Gs38snYWt45Rnbn1vkU24DYdo2o4",
  "key34": "3HC84WkuVUtZu3twAEa2AKdcDDwmtbj4q3JJPx4g387EoSwWKwkR2TkSQNsiFaeYc1GiP1Hcw4DChn7hnPuovL9A",
  "key35": "2Z9pa5SCcR6P9i6C1QAr81HtmxnDg1EpWMGGw6xfdyyC82V5Ha7jvyfs8ESH4vZCJqGY9zS6fW3WPp1pzG5htUrb",
  "key36": "4GyR8YWFvU1yaQJjH5Ut45A9pmd4Fp8VNLd5T4etHAURB43YDgPDPLLU1GiuNaUrwAF4vXdWwhvbsyGwRND161eD",
  "key37": "4zwcGmfpW3UQFPccq5MzAuCfPcJzgjeXJ7hk69WqwF9wbFRvJj2BkBwscgxUr5196Ju4wtNwskDkTupmpBt2vPwo",
  "key38": "59kagaaFZs3EsQzkAXBtio676Ci52fMWP7iiKdu449cWYeHewx86u3fbwrHKy2ZTNcUsitWan5AhT1jBazAjWeDE",
  "key39": "3WkqvqvAEPP2eWpkqQtWngetp1rE8zheH5GVF1QXASc4AUt6aZdtM3DAtRC7izDazesEuA9rvJEhUYhbYFQNYyLX",
  "key40": "3GyjhXKpoQv3vGPzLiZd5WDSJ7DsSoGsuqQFMJndPBGmdoGou9j3V14svhF3mnvmAeHhsGrz8kd1vYGeyFhaqmbp",
  "key41": "4w87HhksUbaouVhyuAy8AusmkqdypFh6ZQNh58ywNf2Fzbx6zSManbk8Sf4P5AaBj9ydntbTFWsdvJWRAJ24MZXB",
  "key42": "4JKQ68Zw4HNYpew7VyJJRpWhsAjT62xiNDuSd6dDHwmUibAW6UT5ySuhJuRWvwwXSuSxsDksqQfSeVeA6z815333",
  "key43": "4aworUQRdGRmBrhKjJ87N4rd6zWkKseLnBkdiZ6RJByuCo75kWUgUexHLHJqTzvvCcHTQnzy3pz7dSPbcJ8y3i7P",
  "key44": "31zwk8w7Eoufc8gHtu7jydNxCk6gfZgJTqpA7EGds6itomtnuMnucAPTUFLYXibJHVGYaADr5x8vr2eFfUep4Bkm"
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
