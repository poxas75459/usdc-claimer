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
    "52Xpj6agwzNE5Y5fzod4WBgMZo1u1SJTpM3ctjDdXT3KaZxFUELvbZZzjVECq9qg9P8UuPRjowPf921FRXPo5gxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WYYQD8zJm4Mpcouyota6kpbGNr22S6ejAVHJya2CfeXAPRVnYZwiAaUtiVP9XLqSkqSJB5jiRg1TLynzUyJTz9L",
  "key1": "53RPv6MgxtELD946pmkR1ENw5y5bwPm8fhKCjoWJqk1ZMhg22Nzw431hAzdwdfRgnjQVEKwbxWEKyaPpSfGbtR2v",
  "key2": "2kd1GTDH5g2Pw6nmpN4RXwiCVi5X7bdit6GLRw9TZur4f9J4kd2Rk9yppb5Pu6xgZue5j8Jh5dp7skYtZdC4vnrW",
  "key3": "46NWnACQf4xVm3UsxfFT63Sq5jf6cASgueYA9ZxRNHT5RCZiDAqdK33fuHzJPRHwm8ZHznd8H3iDvN4YAETzDjV6",
  "key4": "4ohd5ppFDTygD75G1S2r2tKMdc21iPnPD6ZzMtLwdQw8ejvnCtuCxUqfbAeniJnZvKXGQeTdtFQuEEiwVxPRRiGG",
  "key5": "3EDP7iemsAK7PouwzZQjSSasoFxUSF2EotrLuMQ5tRaYvS6bK99YddWTuCYnVaW4Q58CfsDTPYLD69Gh752keCmP",
  "key6": "4iFmPFGtNi11BUcaLgcbyBTTyvy8Y1yU8cH1tnSxwyNZuZPCHoqv5HgygNzE4RYdz9DYGPz6XB6rRoM6DfD9TzZp",
  "key7": "buHRFT3ihdhdVvMcxMe8xNAuLuvGEMAXKMDhLFT1w4AwARAKs1nXJeUWrSTxU2iFwAQssXjGuNje2vPzKwcBFi3",
  "key8": "3vaBM2ok5N6CPDYnTBX5gmzNydjK8bgLZDq2JgGs7cxcqEmn6h5qCxxe679ExzNQfWSMNPPUZBcSDQgykEMqfV3K",
  "key9": "4WLuKaQy6amRNwasqUF94kLK1F5u6Wq4j7ne7y4PHqzMJEJ4k9raujsisH3mNzhzfMnzygW8R57oUkscGnS8GEcL",
  "key10": "4sHKW2RM2yUiLnF7JW9PyWtA7e311UEyiZaCQxUW34SJm2aYZz8xfHrHRyLLMCZdUscxQKBsZxadoQJ5uwrfVLh8",
  "key11": "3NF76am1tLmtCq9zXuD4WfMjrASWfZcjxAUAuzDq6Y2kydppN1hDH297TEb6nfN8GNpYd2LRpe2g5UWG8oBj8Wod",
  "key12": "21i4eBJQLFWprutEVQ4NeqZSEjkmhV6bRpaLQeUecJdtFZK2vKGuPy58LztdYVEf5MgsN3Ac1XKsnqzNc6pieMZf",
  "key13": "2CiTo9kBnSKYSyq6SK5zMBvafZWAry3oa29b1ZcN2XHzviuw9kqeJ2oxddCffTASWvovAx9VYxSem1hpWm9XhAxq",
  "key14": "2p3ikkiJtViTJg7LD5D3Pq4BVCCe7fMYvs7MRseXLUM7zghZftRFCKCFHHafY4zq3R5K6Z3CGh4qjrNbLgYiexTT",
  "key15": "4AYyJNLGoY5M5J2pHBenfKaVqQdhZvVMPv1SGGhQyhUs4xMHyd7gq6wUP2m4wNCdCHKYeLRxsd292oPZ1552Ng1c",
  "key16": "4DZXDBv1Myo3ThGMXMNSD75Nh38Tpq2taAd6tTCq6JGbZYR5HfTMG7hdQaXeeXVbXXx6GquSLYZQH7jpbJ8MBZEP",
  "key17": "4ZWw4Ez2vusmPGyJ9pSn5JRfz9maY3sbb5gvNNadej7ho6WPzpJhTDDnfzeXt4pDKPwt8QQaZCkiyQmpHhGifTZy",
  "key18": "2z9V1vFtU89tSSFepmXcdGTmfYccZePq7Cv4LytG3bv9adLMmjSkJVuz2w2Q8mLp1TYyTQWbq7PmBYL1pqV4tuqz",
  "key19": "5AQQrQBVGVPayEMKikDsSMthwvFvih2Z9zpK8jsiqmetzTSmCoL4XeZh8fcxLpb13fo9E7xyk6TrXWHBt5y6uSiw",
  "key20": "22ZwHqdyzbV75R7unm7nWhochpwXhehJGwXpp1ezjkG3DVgyz1XHnZsGsxhNcoXK653gCJsXeidguK7sF3iUPjVd",
  "key21": "5eXuSsqrAZGmZVuWFX3o4bt9aY1pDRD4tREYCBN9oJKueFxGPNCrNppatoWFJbrQw5gkb8zPjySfh3PmfqaDRvgW",
  "key22": "XWYL1QHbhAWekZDPyDghfp3bej2bFJEPsFvELDVTp8qeXSzghzgUw4TYkwLBiPRzVg9czhZ9LA1KNBJurnbRe9o",
  "key23": "3aqMTwcs4TiCWxiZGLVJuYwBKxraRMbgzcNwYU9NoWCUJVAphQEtCA4yre87C72NHfMcrz3yGLGtRhEhKgMpjLjP",
  "key24": "5NCfD2yDDeYWM6YWUX8th5mN3NQJaQNrY7z7FkbyaJPczK7JQHUssVx6jQL4xaymjknoSqXYLmpxKpVNHSYVHzAS",
  "key25": "hSHqi34nt9GnVM8aZhT24tLocgfzrruTF4tnD14Wr2cTZJfby7BLG1KKw9CvhmGH7qCpRS3NKrQ7NHPmvNw1VqP",
  "key26": "5cQHh4W852HtajcZCCvPtSo4wvoFdV3nJoi8Gmb5UZwQVEpqFmK3NujoLqQceAvN3DTPnfjvrfHtCccDLAWDYB6y",
  "key27": "C4t1ibYiWqnb5ChvWMdGG3zP8KUZzb6Z5wRKzJP8ymkvcGrpKh4ZqXQjUFYJCkxz37XfmXqSKXef1xtNiZfR516",
  "key28": "56uTwi5wuTMdcSn15mc71xQam2DLv4GbvmNekUi5R6nS63aiVepKQYv1P4gFLX2vgVTFqRC5X625n3B6VMxfXrQx",
  "key29": "5FNts55naznhQfWNwm9GnZgDEaoxFcSptze5abMsxWh1qMdLbpz1Ehz1v22xBvpxfT5edJSuyANEZHfgCWzRvTBK",
  "key30": "sp8JVDJHgNPH466EaoWt9KGPdimdL7NHwQjnxBb2ZEhHP9uuqwpNwswUT3GbZcfq9hEvDQkejcsLFEJ93GcKw8d",
  "key31": "5r6WDpV8mmJ4HNu9ZtWfFAA95viRbH6r7JVyN5Du5zZYyPiQ1GKFB4Chdtr2aA2rhSPDTBN8T6srqZUS1rQSde5k",
  "key32": "4t5HHBREsZNWHxhWhRQZeuGZUEhxx6xsyX7YsEZWdXnaC1dk2tnMF86zHTvDHR7Mh2YKoE6c1qAsmutGgGKbAgX8",
  "key33": "o224msVR9askroyyFzB8ZW5W7YUTYbSmWumBzgrBuhMWfDV7q8xRzWkgJVMSi6LtrRg9z9kX7FMvShqWo9VsWiM",
  "key34": "2jh2tuVBxMNqoaNXojhL1w1fiWH73cfZbmALTyVjAH7o28f5ViEKqowFhmabX3M1bM3T3y7j11RiBEseRqD4cbap"
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
