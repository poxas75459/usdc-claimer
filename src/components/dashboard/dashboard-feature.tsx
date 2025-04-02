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
    "13uxdg2dGw83UP68BNvGkxwrZ6Cgyx95KFcLGGNA45VfJx8NJKyUAybWqBXroZfugELUTDjWog8iPeisjACzVxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHRgoBDFFtFy8FEj9gmQ6k6ZVbFv4UwhHmJ69QanEHyMBE5dr924yxJNwKCiXymra785XCLBgF8AryN9cwzUmLJ",
  "key1": "4TLG2TLdARfLGYCEt7nzwWAnYFsRUkPoj9thGuwJY9msAmapQH39wqbFR7YNnf5jU8Sut314gxNYoqA6UdxkZzQo",
  "key2": "3MGTZ7zJV1tmVheh3aHegnEGUeJj7F7Le9XLvLSwzBJGELpuY15jpo9LDY1P9h5mjhEC179g7x8hLsokkRNjT4a7",
  "key3": "2H7syKU8c7QXaY7p25hSZp9CW5hYsetFp4dBC7eUto5ubhhvcvBEBAhw3pmLR3PPQckHFoZhmxnsajurvxuJrXxZ",
  "key4": "4CgTXWSkfWSpHSghkhyQptwcjQcTqodAzsTsCwYuSQBKDTbdwvZLoURWT4AUyo78rZcMijW4U7Aie7zzqXZW6XvC",
  "key5": "3dgRP2vKiQy3yRYnxX38Up6nqaMzBSKmjgn1pUdgHZ3imTFuWxDVKgf8Tn6Gg1sHiEJGBoEBsaJyjhnDYYibnRQa",
  "key6": "5Q4prppBj5YDTmvBkdFYLUrSEvHBXwi7EntssWWd5dYt1LYwZZXTMFJpyATcaFx2kvk4fkwqKwzS6BCuydNbdqSA",
  "key7": "5RHVbbwZMjM1cwPvYXJfkpCpPHz9RTtRXfpbThdnvQZSfkusxAXwh7hwXbpAuJN9EJfckHdfWgtgsYv2RJsbyusk",
  "key8": "47d4bEiq3M5nhS47oni9gz4EQQZ8s3SYfAPdhyUzf8JiXZV8DJMdFSxZEePmaSZK8w5WNuq5oQupo2CGiaLgbozf",
  "key9": "5uAhmAK7ycet3PxFqaPRpxbQFzDGLKWEJE18QXwQNSYCKRsTexbYqEdgxEFKz19NFkWrBUM3EMA1ghH6ejfUs2Uj",
  "key10": "5WPS8NkdNHKeoX3qZeKiSHeYhKMB9REtmmNJzeeAZt1uEESfVfnAuDd4GFagQD7nyCFyoSXTRJhKTbxPMtZmG322",
  "key11": "4NpXVBUSPp43UZtqjWBcUJiJrT1ww1wLmPUsS2qv9Wt1YpfgYMQSKsKgvUtvSNqn7Wncs1miG5sZG73Cf6G2KrNB",
  "key12": "4qnUhQ2UjdX96q6zKq8VHMzpwQcL4VWjcrUbs5w2ERSxNpF62Nf3ypEjFgffayUu97qqBnCN1yGeMkyMMFRtRYzW",
  "key13": "5uUzmrwYEovqWu7PHvazxzCYmkHnSD6Uk1PemVTxPhLZm8YNP5TLbPiBwJMrWZxQRt37xKPe2TCTaSjRSJinaGEh",
  "key14": "29gGLLXVhNpDJVMpUwXYTMNQWN8hj4PiNRZ4c34ZTws9RCBG7ZA3PHyMjVhrjx3MeBMmJMwiWK5FM2ruLQhvYcYh",
  "key15": "65QekpcUzBNwhLVkd5c5ea2ffeSBeXhswaF3Q4cwtWAeiTKAspQ7F56EznvbzpZ8D4SAHZyQ1FRNWRshnXQPdUE7",
  "key16": "3BjReVd1tuUdZhBSCU3sbGCxinvDM5i2yL8UA8pud2ECq5Q3oPyKJQe3aE5smjG589gAxUC225qn87t2v3cLyHfJ",
  "key17": "26egtEjUZyby7v1BcCz53vGw3xWAqj6dvy22E4SrwBhdLVq4fhN7gb4BEDuSwLnqEvzAMbvjt49u2bhKtPwHRoFE",
  "key18": "4jUXmkeSsz7RPmsSgCGesvYP7SfV13V9nLZpCHM9E6fxkb13m3EHqcDqFpCcjxXvhy45MuEQHoM9gj2Z4fGjcKLi",
  "key19": "2Qrx5GC14cgGLpBYrwBC5k4uxM3rYpyh4zPznpn5yrHyX5qaiE94XtdALuaXD5YNYoc3um5es79B7VDc9nad3xRq",
  "key20": "361UuBWdok3ZUnMFR8kiy7v8D2BjBg8wQTm2az5PmvnuNR4N2iAnAj5rkMUMhVBv7T3GYvczDk1j1oGqzYLvURcK",
  "key21": "zCmd6XfdPUrKKD4zFJM7pGVmPgVyXEnCyfECGrEKnZCZp547oz7NpV9HpcoVtXFir9wjHD7JhFPCi1rPhunRdth",
  "key22": "4UpMRoraUyeJR9vSyHQd8excWH6JmdipXec8gMdokUpVEEqdVe4ppu6qZgvkJns33pRLS7rNGL5pYZc4dRVSySab",
  "key23": "434DribGPh1tWj2amD2RoUzpxVJUc59e8KwwQ2PUVBbHUQfqMt5yLDy1j1UisNvsZN5PASG5hbkrYGMxmaFwrSv2",
  "key24": "4xJj9xc9Szo7FR1a8oPg75P7jPWDFGb2vB2kg47FBTtW4wzttxM7Ssfz8PzrFBDhj3NPerte1SdZFV3RBXAQzF6w",
  "key25": "6fvXu3wJqcov6sq3MfhMNF6rF9yDWJiVJ3HPyZivd9M7iHxgCfmHZ1zH6NAzc8vZ7cRYyeTUQCrV3Z9stEk4G52",
  "key26": "3KNsstXghY4aQ2WvWVk2jbWh3e9dt7WxDVvdC3kv26Rv8w2VPeUv6QzvHzvAz5hpCJxNcqtag2a3GTu818hWXKsF",
  "key27": "2QKxgwpDrdJGaMmBYUHNQzsrchnaxBU19aNyWmUM8wo7rESjrvCZ6Xzg2dxVveq5VK3jM8ZipJgBYEFhrHXdfxGm",
  "key28": "aBN7VqG5E1b2ykjbcXGAe4u3PYS5LjZGpjnzN7rj16a9uPYJ9Dd6ZvnHLGurn3VebymPc8S3ig54ihGS8a8p3VY",
  "key29": "2vYcoLWS2xDQzUR8yQrDaVxH7hxVfbGMuhEwEGJXoHFoTuKT3ErDEcnToFHbQxbodkxKMRXUgy82RkJqTvvr83Kp",
  "key30": "3fxL9iJ34KwrVoZno1eAVy8gfb4BxHqU2CrxwiRgi5aMetU3rbmrkZUVVh5qkpSCkm2eCuY5DmCPv9ipsw6NReSX",
  "key31": "4w9Kgze69FzBnFJbwiJkN4MzM52ekw2xmif4MRZ3dQQ2PsEi1iGvmyqiSMGj6iLLynuiU6wVav4JKPmP6MdemZjg",
  "key32": "44my9zQ4L9FzHyxG7d4rMfcAtv4btswsHFjpbK7Gvv7PupgwYwqkoUB6QPWbjt84NL4AX1tUFJErr9Ghc4GQeP7p",
  "key33": "4AAWQ5vo7S38x5ndDdyYADtJaHgqHUgk3BLFahDBo9CXcStzfWwep2KHYv7b6CE87tnmnwqaxfcBDDz2rFRekVdf",
  "key34": "2K1JAo9BSbW3ZuMbe2nXpx3X5KiAJ3w6cMp8vPrvsNAgJiCAymuZ3GA8JgqL6bD24EAbunRcwGtmchkZQfYDnuBs",
  "key35": "RZc6XTcfRKRp7tbFirxFnhCV7G1DWsyiJBpENQ7VDZZZaZHohKsicoUdDrpKmkrPeGLSwztm2NegMHbpUxC4P4s",
  "key36": "232rTtY9HDQRm4UfRWT39kVhVqe9QXDieyhhN17YX8nbuAb7xMTApeoeFwz78CTfHyKpDpHLpCJ3x4WnLStCmKP3",
  "key37": "haUoRPs4hEgrttjFobpU7EmnveouzK4BHZHpSe79XoGGNGLbZq5kYExY5ERT2dExFjNxzvHfPnhTUD7rHDZBJDn",
  "key38": "4pU68qA4Q2kPDYJbhG45SbWEBSjw2ANu8cgJfj5Jy4SvH796iA2ok8quoueYvZPAogofAV9PdueNFDWTyrVVuP9n",
  "key39": "RdBqFshSP2bYNg4QP1Y8PprEdB6RQ9DV4SMgA4vEtGDMjQc8XuxesuDYY2f6tnDuC8j9NVniR1NbWgHSeFUJuyk",
  "key40": "37tRkzEtcKDZX8gMmMGGH83iCvGALA85rJ3tV7oUDSNnEKJv72FtctTZLRGgHfZhmHS6oo9iLbWSb26p2Q7Vr8L1",
  "key41": "31Hvy4FAorL35xWyv8yeJK3TThp7Fk7erMLCqzup3bU6tME2DsDT89VHxxaF6XZNuVQELq7eeB7yk6tmfLwTqqJA",
  "key42": "34qcSwVLX3hgkuPkATKwLVGFJtabogimhsFGUuMS69T1jiAbqw8V3GP47XMQtPafsGzJLa7PuR43wKr2NTWiPqQe",
  "key43": "51SupDEK8GTQU3eMy7WGnCjm7hWJZviy5GXRJZGhoA5sdNHCQ9crD91tNzKvaxbwporgvoQVVB46oT2rNfS3hsaG",
  "key44": "3uDP32oxLtpKdkvKAz7ffCQXFAdeYEXHumnmiEZErdHyLyL4pT2veWuerWBkRDNUCUJ5sJkhwLQQ2qV8EN9Hvw94",
  "key45": "3vnkh6Nx9pzLd34aMsUA4di1Zqpr4zUDTREs9ipqFvtq3vAuNg97Un9sLXZBMhaEDcWSAapFcmCFq5omd88DqT1T",
  "key46": "2NV3MWEdnU4MTFv9za2HRJZ2RFLyfy3a6rwdigmc1vdKuXP7nvFeXoncP6yB46KnVPeLVUjGW6NMEXo45EfY7xFf"
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
