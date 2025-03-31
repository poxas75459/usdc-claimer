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
    "RF7ga5Ghw46p9761F3JM7vmJ1cuuax6TfTk9tiuH552yVaJYtBbbh5i733m1PCDzpLSEk92wrM8nxbgCoGFu6NC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DxC4VAMpU2GqBhafrWLndGbwxkRarrxdesNxPYA2DPRiQzSH8H8upd4YyacUS5cz9A4U1h1t1FWmy7qptL1t4Vj",
  "key1": "YHFce8dyVhk87MZpTd6xevbwpNUhkwam1WgySBd2A2csLo8bDuwVDByqwVzXWXZ2RKud4d1P41y6Sk2FaqxWzBp",
  "key2": "3dFawtF9gxFyTd2n1SADQxmg7YG8p2cjWAXc5HjZSqrT73tMdTzmN7nZuXxvZ3YHeBrmpLFYTLJbokM2YbDbL9nL",
  "key3": "4XiPUAbTRYQp4XetT5Fr1yhKiXg7fXw5VEPcVKGkHFo67hkKPExNpFCqjHsH8tcQ42J1WtrgXgMgXwLSDMLYTQCE",
  "key4": "4hAbYb4rdyNxghPkKrbbHva6pSx5gmQPhEySfkfVmD3PSVDsvDucMApLKmeCL4N2eAUng2xNHsakSYWX9Nu6xPm1",
  "key5": "3XG2yQpGLrsuuC6x7h4uZ5wY5VXCXb5oTDrsXBys26YDZNpp7CQw6kPxNnHCbNAwecwBtJfgFgN5VqjRaaw8c2L8",
  "key6": "AsnUYuqh8pfump7vaX4JfPdDzceBZQtM79cX4uwTnhjKPrbU7733Q3cficeV5necAFuTDLCG4PqfnRtbQ1BHFSL",
  "key7": "4Q4rakorUBTpzgN6TwRYPCu5tJvcWFNbcAuiyuwiJ85i1HkErs7nfrMDmTpBCzov5BhWuGH3rLyGNMBMR7YbZhQ4",
  "key8": "62ccRxWQGm9deiupEPrQdozC1pi7ES1Z9yQcvrYgHnYJeJza5cFwS3n4Y3s9DxUy28Wq2Qu7XAETmweHtXRvukpt",
  "key9": "C8diXsSLeXF6rJaMwp1aHQySvGF6Ug4f6jrauZ6Swarmhg8Yo91YGNGQFdjsUwrxTcPCV96uyYw3YxV97Q6BnNc",
  "key10": "3f7envnCLRyeV6nLo1gBmpiWtp3ACp5MSspxjxv64vAHkgR9NxJE7tdB4RGTP5vbadbeizy8Z12KiYcvnSyrpynK",
  "key11": "4S3opnu9WFuxGbQJYAA6uFRhSbXW2atbC29W11ShR3jtK8YoULTzjRyreTNwCprT3EjU3UAJpZnnYbfr8eHJ4RFo",
  "key12": "34CWGAQizZXb6K1gskayEDo2y5FM9k7fGgfZxRCerAkYvarJsxRj9mBAkKdtiNMqZJr288UT1MZHwddzHTozHQr",
  "key13": "64ePPmHZB8WgLz68gEKBYuBV14ND25yf7HcPKfWSawzStEDi7zL4YaAkbJwFpjSYxvUPbgoc5WTHb5XFc9REowCJ",
  "key14": "dzqcQpmE5zF1dKJFrgRr2c9JwanowftS1fv3VdnWXgNsXW2CwQfL6bAefgiD4xgyPUBaH6sA92TV7ifDTGU9cWn",
  "key15": "4rhLkKLpqwooJEf7KkKVFsXB99KGc4pGSF2qDysraKPgNQmfXNFoZFuv5QG6uZ2SV2uGqYuJGoHgJRCoFZEjabB6",
  "key16": "2tPTVTf4pdcuKU1rcp2zVLYoXCamED1uM1ZgQpzyUBHcjUWf6EXvhzmcwKfo2Aqmzsxi4i5LduwjRS88KGk3nYzP",
  "key17": "66DzCG3u9PrCDLP6RTYNUohdTGfCzGNWtA1cdvmdKZBxtgp5sKbSWCt7yrHzowQvGLFeuEJ5dwV1zTy3hpVpXb2j",
  "key18": "LPXSeecX1FwPCJKgvMfDu5d4wXrJ9wPAvP6WfQfUSvA2qrniW6WMrhfPRkV7oLiDzF24Zs6ev5aEeMx4xFWZcTS",
  "key19": "3d9iuXC62ULn5sHaG7EgHvLdg1asBD328nczcEYsdUdwPrCvNDK5thUgXi726a4frv2Bf7TDN3vCfo61Mf83vqHi",
  "key20": "41tG1biBhaj9deDEMqgr9XAGwVuKLaRS45s3purEAPhbwej5coceW2cdULAK4C7x7boxGLV3Hs4ZrVusqqVksg7x",
  "key21": "33VWawhAADJ5BXQcRc6khfQwp9esBEpoGm7MFHt1nUM7iJWf2XePYT3KKkFWGhmxWbj2mALMSiMCzdaZSw7xtHq2",
  "key22": "3U4dvsqdsewa4hydXLwearwrTfXDNSXXtBrZsRibvY39ijFVbiB8qc4ndeHunthjcM3HADrUWAqNm7UGAbohw9U9",
  "key23": "3LqjXmDHspY4D9ENcKerMP2fZ1ZwVCDQCe3MTt6eLfgcd2TLynqvCGmfLtfxo8BPgEckQRMtqUDYKcnzbLkwHahQ",
  "key24": "61gDyJR5NqAWocvMP15seVmSmPGzBZLCHizjUCeg4DUCgohFKb75HkjL9FH2MJQFZgVoRFnrdc6KnbvuFsv9h5tG",
  "key25": "63vmAgipJ967yKvFA8hiZ8BPU2FqPssGDBQCnF1HZTiFHVR8z7qrqtP6PsEHm483WmfntLSoZx7AnP5FqaD1aJ4Z",
  "key26": "46CvPLoqZP4AAevWcdWF8RwVQYNUoUXwksZ9JQhiujaYmJWa83QHn9PxGqd5bWDm52eGV4yGjyDvrVeRMQNvx1oG",
  "key27": "2iN8frcojzFX4y7gipsbmTh8bgwS1dkAvbeeuBBZjvf6gdCj3wRCaVDRKTRvyt1WEsYFyGpCp1JjG9AcLEyM6hpK",
  "key28": "UMyFxK23kHnFMjgHBaEaTiHNyL5mvMi2LJ9u2RGJeBDfDkfFY1bXMD9mRHJbc4Hf49moGxD3nnLKXjJqXGyvBZ4",
  "key29": "3JKhPZ4EjJpPbkzLQ1h3A6Q5aXdA438Jmhm88fXLiGwm3cQ8NBkbay22F3EKMNvuKvx1gzEu5PBwxVXWopPRmz7t",
  "key30": "2Sc8PsATscoFEa23J354EMD8JfJDkq75MHgkzzuCPhsy1d3YD2C69AjjD7Hfbmt5rnzvzRmSeCQVBVpn3pyMywyw",
  "key31": "3knCtgWyfAYuM87ZCCSxCyEKN6xzp3sAymfjLykTLQuCW5damLSX5JESh7TyKmQVDhKT5LduF1vrN51HBtXDcWzS",
  "key32": "3gKrX9ouwDKvvaxphapt7TPFcv1YF9SuHUFFjj9si9dwL7RpkE4Y5hwnprANh41oUptvHbFYEVsRoDa8zRgqQEwH",
  "key33": "48ETxfecRxfmTWd7FEXCifb8KV3HfkxzK6ZE7YxsJhFNRsJP3uRQk4zQtqJrLnwgdFwHwPpKemLwjR6UpnH2HA4m",
  "key34": "2NDWJgM6s8VVGaN6drXH9xjEUWU3LJTG6c65E7RZ5fYUm9gkdGucYYtuQNZ2wtb1N7Q36uXMBryZpjdsnwKrqMiJ",
  "key35": "pPc2sX1XtaXakgDK7LaVXGB3YPj9S69Kp3gjyaLbxxfrFSM3CCUrqgD7DHMu98rgC9DeD2GF3ScHrj5yvyUTrrM",
  "key36": "5ffAEWBVScRRquXiyfx7zMe6xFrwGgj5CqTW3kVCL62Fq6nFKU96XifpavCAYFqqcyhMoNbukuuixN5UjiEvcHyQ",
  "key37": "5BzAXz2VoPEkPUX3Yy3HaSsfGfvZTU5uzXpMJhuSM2AYMCBhygAzdkicLuXR7YnjbB2aDMW2e8UA9K4xTyXAAWbp",
  "key38": "23i68JN1W3tnynGC5hPEmg7efAN8DsRTPQeHTXS4t1aFB4DtpwHqfrSr4xFCFNyTVyknkbSQebeco1YPcnxtPjij",
  "key39": "41y3mAk7wmyWRUmu4cz315oaUpaXjikUyS5Mv8YyRTtHDJBTas6auDuEGrxCnjTjZqMexcfdFYkqYLFM2fysbFE1",
  "key40": "2oKJ4VqRxKwUnfqSFaLzfjrYaWKczSnsQpgqVkWhfSXU4UkmXETnJFzc6QXjWYeVBuVq4rpHRkQBsPa6b6fFbJW4",
  "key41": "4iZ4YTdFrQmdvzZmF1UHn3TtadtnxkD52xzrmzvk1x4cgB2KRnbXijBTpyqEZbXZYKEu3xrR1pSWqcMrZwK2qsGq",
  "key42": "4EUCVt2FHwnzRBMnNu2nssCXB48DgyKafX7jQ8R7HTeeDTiCwFac37AbaZibNgSkaDoDZAwgJahmfZXwQK7TC7CH",
  "key43": "5oLdnLABkL2aiBSmjXRC9DBM24a2sARQdpnssFo14VFJu7iFk3gzuNchQxaWecGLi4s22zxdL9sc2vQqMoxdyiky",
  "key44": "2NDzNKBDdZZFcvDcXtqfi8C2RD2J7R4775FcUkQREGPWDa6zTbykRPCxCVbr5Bh72mBQvnf9ugwfu4WMnJuNzxFk",
  "key45": "53pwSFnPs3W5R71csNNwx6xLwWBS2btuSTvM7Ti2JupJW7ksiSk7rcuZKTenZdcift2NLcdRFwdBfoX2zkbxkPD5",
  "key46": "2oqWN7W9mBwvqmo1KY9h37mfiWPeLF9ssqGnaBoHSMn9JLFRJ9z1FjEseSNFJJMp89Vx7ezxqsLC4tWuQwJ1J2Z3",
  "key47": "3YS4SkvjRdPjs4gm6EV8JCiy4MVPYvnzYeT8Fx5XK931HJD4dQPQdVPUWivc2kjriJfiFiPCWC8NWNpBF5vSqcX6",
  "key48": "4yz9FFutDziKMog5TihSsJ4BNZHWygfaYztoKVBRjbg9E2URChSbBcfHw1drgiWLKwyczjVXBgFP9JnAMc8Yu35L"
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
