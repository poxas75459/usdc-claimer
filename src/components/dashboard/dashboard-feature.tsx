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
    "MFbp99G8ySnPvEJA6S26Etw5ueLuCtEqiV8fHT2RHrVmNUDHJQLUgoBXwVyui3m4DTzfJRDCqm22VUoqLhdMWGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dBzefCjdzErhmxbRawJbPV62ca4Ztd1LPx4CgfrAPvqxzYA5EBStcSBdv2QECbXiRQW15QX34oJxQAhcHbe4mse",
  "key1": "67oPm2URxFocgrzHrhC6cLm8ipseJYA2WXkjYNmqcVzNRywX2y8uHHADQ1MNQ8MFhp3CvdXqWtNemGADDxhjqeD8",
  "key2": "3UDzpXE6EnR69WETMChEyKhCPon8fJda6thW6626jbBQGatGCT77X4d2D5zCzZDm55Gd93kjxjykwQwAX4kLSAeN",
  "key3": "2od7UKonvT7rckssr64UbVED53MaFiGioedhpvdLrEWtWHJ8XTfrCQTfp5LG47ws6dkAqMSmMvXFbMz5NdtmusC7",
  "key4": "4Yatk5udEej5sWVowYp2ihsbtPBAXPX1nA2B1YwsVx9Meduq6ku3sX7V1iMtDCPLbGDicnBZC3yZ73r3jy1mjfru",
  "key5": "5CkbZQar6Nz3uKSmNeuX8oJ3B3TCnyKCKTb7zNXnfrKdr6DWi62duyHo6idLhTiqbexx8cCTBtVFnK7FbP1SQEWA",
  "key6": "61bn53Wxf3mRdKWmLyjeFb89GVT8sNybsH4vSp4tkzfi8HQ4toAqLmv71VAAnAvz3D2sCNwJ9XcQ9jDYTRrpQmLy",
  "key7": "462wPKo5grj95uUwb9Qj44aj1CgQX7yDmvtE6v9DNApvHh29ziDNcBdttHnhLXkzt7NaM3KL1bbBWt4WJwLutuWF",
  "key8": "64PBnQ9Mm8PRMNjr85r1P72HQfpi2jzV8HCn2NAKznpkEy7yyCM1FCVNQXr5FviLrABYQLET48YctrfA5bi7EYu",
  "key9": "2rRGDPm8yUH5BiVT9Hmw8RBpNnJsCuzKkwEx392AXmeo9R5zNgup8iumL4cBV7sAtHbayXxGssKAqbxwUeo7BtZV",
  "key10": "2PRHGy6R7JfuQwZX2c2HeYWwJpNcvWhtX2WFniiU6XWzPrMciurtkq2y3Tn1HPmRQn8NiuZ4o2NfRicAzT32enud",
  "key11": "gYyoAuvK4WPaWMATtFFmJFmg3DhFeJPCRRirnARk5mZBadz56Fxsaq844w1e4f5hru2ejmA25WGbewVUCFBm1Lm",
  "key12": "5mhEBj6o7N6zxZcch1x87LVmihhWn9R6YnJ85qq7o84bGnGidsjuFPKZRyUz9tbrLdJkh8ADBvmUP82LD3cRoEah",
  "key13": "22nCdcwfUr7LuBhMkdsQouAijZ8eRViPa1JB7T1z6HChXRxxCsFR2iPRKpM4KyiqD5R8qk92uMFAJG2QzPR5Nktb",
  "key14": "4RCc7yYsW9DxzwQ1dFq2ARspgBsFgkYRo3TtiPoEzsHQAgjZxqX3HSyCgLYGccVxjMCrChqYsAYQQorgHHuqbGH8",
  "key15": "W7sfhHXra8imDfYB1JZwWVrUYYWfj68YvUa1pH3A41cNfXKNKDnddV8hydxsXk4VNisXcfRJpkdwQhj9GV8HffG",
  "key16": "4JGyEU1ew7ckvyTbCsJobQ6YMXKKM4NgWY8gtnMC6fkcwdB132xb5TBjnHbBYfcyh3NroN99s97c9Jv93pngL9bg",
  "key17": "2wXsRF5ABgFcfZPMXrtDEj28mBcrfi5z4U5aPHwPUUg2iUy1kK45Fzf4JwE1FVvB2KezXAYEVbfby1ucsJWzgdnX",
  "key18": "2tV48ds6GvXQsQEMUFDEAewKAGZcTm3PkmqfiwuYF3jCQFiKf8TTQgJCmAsdL7sqALXUjBBSMDD4yQmWeziVXnKB",
  "key19": "4aP8Sq2YcXRvWsiW1jNJav3p6pHECQt6uuwx6p5K15zg223bdqDYLx9UPCbY1NshqRGEnbZ8Fo36nRKSEBSVy3RP",
  "key20": "5eA62xX5XF6HPg5MwpEtsfqgzAVuS8SarFaUGeaBZ86JMRtTMexQdctj9w2tJy7YZfncmZwXqajXWTFFxec3Yexg",
  "key21": "2DcEzKD2bbYb9uh4CQVCTtYxRWaNuE3ao2L3F8xiZ47q3bkweH3nCgHUtqYKF5cD6ekQdZCZUz1QKqmxbYxT11Vp",
  "key22": "4ArXNrneFjEHNvanEHpR15DoWAbQXtZwYudPJggV9mke6ziqBo54BdmsaasGY7iwntq3qaUnhCzCzZaMsrmLhcnm",
  "key23": "Q1W5xkhvuV9NhENmdCssBDR5wFd1h5ekX5g48DrWTRoJFaEmz85i4XrBurCrNgUbbijAVSSv8NSMwyEmY7jyUnE",
  "key24": "XLEux1JZnu5LYWMZoXP5pTcCdUb64UwwTo5eiNGZrpD1L4F56QTfN5jsjMvbDXYNP5seqrBc19FXnZEkfM1uNWx",
  "key25": "5n93NA5ViJzGv4m3Q5rTekXMAHK66K61nT45wwbNuvv67moKn5d6ArGxywmLaegMQAUVrWbftzvvQij3aL4ZuNFY",
  "key26": "2EaaGviCTYTg398pFUUA2EqNuqxJHfBTb9mQWpeavrzGykh9m2ewGUqRzpU6thmu9Zf1XqFZhhe9cE4NX77gV4vQ",
  "key27": "4Rqj3cQhmNFmoLJwtN2CvruJc86ihCSjLuPouEpicfsxrhCtyXHk3LPHAnCqcnTmSamwedG8AK9HkqZXhHEoKNt7",
  "key28": "vUgd91Bkk7eiPAzDQMK7sCCfRiaDP8AZXkpZNfXQy3QoLG3WWhNGh3GfjMot7uESWLXY5gMntj91mSuivgh8QgL",
  "key29": "4FXCewFVuAGdCCrshKjd5E2aWJc3sykESKsrLGqG8d64Le7ez7Gu65BAm1rYzeuUFeb7WHZ2shKL7fPeiiP55RD5",
  "key30": "2c6jmfFCTo3h2LKdyxcpkx3DrKH6omFFT1dyNdtTPwa1N9t3drsg4S7fGmZapizAH8LYm37jpEDWpkJ5BgwZWVX4",
  "key31": "5WWUEAYuAxPrBpQ1ej2gqva4ZojB2znuQ8BRucJ6DVzNJDFXgDhGAB4NzFCHfn3P9Km85mBnWhuCZBB1GPnuabn8",
  "key32": "AGGmB7FZKe7zouVBS2GsTytS7JzYRKuhp3gwPh8p6VmR5JYyFZmc7tbCqEymgkDWELNctCj13GyhoRCZ1XgTUuK",
  "key33": "3FvN9fruYhsSM6XT6EGPYQxGyuavzBE1PHMoVeLaQTKj3wd4UtVS1PcV8SiFKWmoQt5iBoqK5xdn6VFQx2Ws3ia8",
  "key34": "2Uq7uENpQeDtKKZn8kboqQAknsgnw7hVzVgPR8izAHcPkgyvpXxqWY6NnrtmtbowWEXrZ8hpuzA5NpXpdGB9vuwa",
  "key35": "4HW2shk843bZ6qr6DedVHLk82CNExu8Zq4URBKr2WehiftCJvY3yKZMg98pRaUJ7qC6muQHHtdvsFqnMVBYSifgS",
  "key36": "4mEu2duRFqyLvmLoqaK2SWk8LGB5Rv8mYT5e6tew9qCKjypj32HeJ6LGMUzRyamQRzfixm9mGBMSx5ecW3hMcwRJ",
  "key37": "EoUUtjjULYGquWgY4gCULBAN2WZMPGVTRWhn6m8PdGqsfDrugzfLnsbPGUeEu4VkqtYfyTAY79qS6jtBAsEsxGR",
  "key38": "2CtoVidMnPbxBqSgtY6zZhK1a9H3YCmgUyQRknvuMLySZG1Ns3H3yXfUiccYcDcvPVPWRJyiZGyE6kSR4RiBBeVT",
  "key39": "5J7psZEcyZZpmzQwm2A7bJGKW9imnFr4Q23omXiQUt33JGEmeiPWauE6CNGqFJHGLS4eRaZKPp787iUTMUQ4rpwa",
  "key40": "2YrgT89E9JigZmbd1qARFX8frDAwCRBKfVpXKq7dHn6jCvY7BV56seE7Ag1rJXCwDYdgr2XaaULN8VjznGQTiUN9",
  "key41": "35W3vPiPjqDcXpFnwwDFQTXzoosfQhaEc6j1m8eCjJUnQ4Fdpz9qhbN9wL4CTg4HXnDnYhBaUF3LgbSdgwcuJsjj",
  "key42": "2coJTPcpmLyUyWsFFyuF9P9VXf7dCA6bUx9C4NAJUdU4hu4CS91uTsvffkWZCsEfc9urHSsQa8kapCfgjSxH3hDj",
  "key43": "3AmgFwz3u2W3Sz4vGsHJrXrEpgafg56MBZnEhQmxtSN6hwQ4D26zq1qz8pV1LMyjUtpUDbbkTDjvp9eEnTD7nBWc",
  "key44": "2aa4R6XtYgiFPykLUULSLkBvxEysZQfVAt3c7CxFqDFLTCNjg5PHCZpjVU6NdoznU1iSD4LzpLUPHh6bWUcFmi32"
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
