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
    "3A5r2GK16WWfiysFBYDJjBNMUGzMFv8guhJybP1ekLFbUqj7tohxoe8q8i7kUf4yXK4xifSX1XLepFaogCswe3HX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ddBJjoB5cw8iwvH5WkgjZ1S1EH5XnZPcuGHgYCo8pYXVKnGb2Lgvn2H6iz66Sfr5KJVkjbvidg1NH37GJESUSS",
  "key1": "4NT1kiN3S5x4aoXBnx7yj1zdzdfdPwW8Kn4ih2i9DTZvi3NLETxUCF3vqPDKWXZsjfDuSeJmcSKtEcYdqc8R5T3v",
  "key2": "pHPABgbLxTNjb1Aet663t6mCy1WWPZwscLMesjLVVhefvYiyBZ2JKZEyExc8NySZkPFJCQEchVFoL5FJWc6vg4P",
  "key3": "2YXqKWDLpVnMuMv3feDr3o3vgYEijXtiMAkFYDe9xx82cNinf8pVL7KuL28sVTvMBQnw34w45cSKXonvs2VhoaMH",
  "key4": "2ogiAwtHSePt5WkNRMEeWHU9LUaNJtYMWowX3GdiogmYzZ2zeimvx4uwcSTCkZFk8UnMQFqanZpVt5ws1T97hXSR",
  "key5": "2XfRJyVYZR1de2CJij985R2avwtTovpQRFoU3yFLAWb6k2r9kBwwSQY7fNFvG8iJVVC9uYDbfTVTFybq4UNzq9Vd",
  "key6": "2TwgHGfKz2Hghs4aduJGotiVEsVPSdRSym6wWzPQYvxb7s7AW11VPk5o3rYfnCWZrxZvEw4yKvxnoumDcfCK5Yk9",
  "key7": "63oheZRh1nvHTUb4hAMSbHNhd8paoTvGKq7UkKv5noU4Uxusth2jvP583oBsW6pATFRQA2bkbQR1tdDRV9GCb2vu",
  "key8": "zh8A8iNBqdoz77KPcb4d1g2kxwVuxiXq774gUdWRimx7g7RYrYwjMhJSXaBgBdK9Sxvs2Lap81D8kJc8UJLpd8E",
  "key9": "67R3Wmbp1SHVXWUii2KXN2fmZeTPoQZf5AERBma6atT9vvjAetshAxgkXVvaXsHW19qEU3GjbX1ckNjjuzxkChDC",
  "key10": "2Vkkxg2Do7c5yA1dtnkyWJRooKvVxZENNSnW4HFHfH5QoeiPnaTEtaoUJ86E7yUpPCN5jb2gcCrLStXiCe7ZJBXn",
  "key11": "5YVUeK1qzU7aA8xMZ42Cbguu7dHf3QaowZiWZi29xdJkEUpcprsnY519zAsxUHQWZjK4ctQmDStwrYa5UUpwW14g",
  "key12": "499gbBVtJjF63X9QP3vSxMnjspo6jLUjoxS7q9end2Ye59vCJ2k5petBqXjynea3acWR35CwBvHXm2A2TKV5ynWc",
  "key13": "5ErbBj4VE8XtgytCEqLCX7PSSHwC9nJbWoqoqHanUMm9z9TMAXXJTkqhrXeke5dsC4wWE2UARWzdXRPUFoBzaNjW",
  "key14": "4WpPzBJGnWqiotB3SCbjUzMgWnu12noHXG643sLMPNwpKcHqNsfYqfVv2dgmoGr1LcPiFJCJwVHr1aYBmWHpyiNV",
  "key15": "pbZxaQDhaWJEMWBdDcSkzMZCd7jKnkFBR7ujpFB1P1LkTBzXDf5Sm3zJ52E6x24nwJRwd2zrhsdnTKn4LFs6HFW",
  "key16": "4pFQ84M5rJHif9aujfrMRkyhvz4WNvw7DfGu1mu9zTRfPZLDvUBMp5G4vZ17A2o3YNrTBuum4Hk1U6MW4ChRuFGe",
  "key17": "PaRCMXboESUiKdRYBydHwstUxBgvwvMbhyRgmf1n63KCJf8zvd5Fwq4JfFNbHQ92Dn6KMXKAxTUpghQZDRBFuq3",
  "key18": "2YndFVe6BJb8ezPBRrhndPPXWF4teSFRqj3eDhQSxpn9dRWhAvHXVVRGjK2Q5cYDwT5KdbwemWTduMSYLu4Am54E",
  "key19": "3q1MPot2ccf79xX43d48zJ4QC8dtJvVANPcfsccvaCYD5bNaRFtK6KuRTjqUk2Na58VhykKX4s7C72rnSqmanhXt",
  "key20": "21zVDcnE71hVEmutqj5rigy9rQWaxGCpbgQt5DxwaVUKymD9WfxTat8zRTZxNPgq4zDGxa5e6cJd3tiRhkUmQYDC",
  "key21": "4sS4MUqukg6qQzTcHjYeB4NkCDK7JZbj292PAYKa6mqYyp1BwNawko4eUqAEMw2FVXT6YRBBCCcjSpETw3Bcxadd",
  "key22": "3RN7wQtw42vrqNiXHkmWki6KccKHAFV3f7gjDrpKheKh2KjTfmvtDEFHRyo6VSMMQf5EY5rdkw1Td914rBtGJegA",
  "key23": "23Eqk2TyzrJrRsMbdGMX8tGM9YJ2NSaNBZERz5dRhAnc95cQbVsPaP4W85K26EjzrgW9d66vMawLmgiCjbssakR7",
  "key24": "5Yw3Yn7egDfNfiuzFiiHy8E5PrADtLpXYDWvZ37ar9EL1itDgUqjaEnQZY2yhxvLrDEYPVPfnxQiWSzdzHHrkemT",
  "key25": "CHzBxxgD3zRpVNDBggK3VuY537jYX8DqgfxN47BzDeSA8m77n2X1RNCYMWAi8TWFC85uRpe6zydBVyxAvN8fnQ2",
  "key26": "3rALYBu8teHCtHvSY3FVDdWX53DvVaGYewnfx5xniXbo3q9SKToKkVMCGpabkQqaE7BEHdAAwKpuUp8fy6yNYEYQ",
  "key27": "wMm7TJBuZkLko7yVwgSKZ7AqEskDebb5FYh1AMZ3py9rXXBG6aGBJEDKSA57F8a7BAWWGqjV72tt6YxbuHojb5q",
  "key28": "vW2t5MMNtVNqC6V8kbCmbGxMB369226EPFzdncijieJaniLDxg44ewhCFyEBaernoz7VbbrsW6rzDvZFJuSQUyf",
  "key29": "3nyt9ZhrDAbZb4AyCmMzHFQ1Yeu7Kyc6dXjNAMA7ZLTeLuFKaZ3D13a39Zts6Ne7k9afeEZ3nqv1hTVqeVCWodtk",
  "key30": "3vt6h93eU8DJ81Mvc4sNj4ef6eXcurombMGEEkqrzZSF5k8xYisWp6qHpBgQu7px9vZ3QcbHFaXUgL3gGGasXF4a",
  "key31": "4poMEL8Vw1QaxipG7Qxs9nYVxEhSRxaVQzBWibFUDKv2e2tjVfBr1eRXgkGwXPP6BNJL3Y5cJRsiwYRoQqNWwK2s",
  "key32": "2ueMCdkCgRLsbBT1qVnAcr4AFWta8vh2HfG5HoAFxq4qhkTQEMDqmds1wh1U28zcZ8iH6pLss3Nap5MmubHnkTwQ",
  "key33": "2o8rBjeBbi5hiBp2k6P6DLu7MzxUDLeXnSb6Vy1VDLuB8g1sqtCjYaeNfqqrj7zqJxEKvWEv9HyLGHifhWuTvT3B",
  "key34": "4VFGu9XBMMCHcb3sF4WrQBNZ3Fs2ckVTWjUDe6UemuAK6A37c9g9JkorweAhz3BwShJpmvuv3ffR6hsxR9Q2yDqq",
  "key35": "33g9AD9P4tL8mKahQpgFWprXafXAaj2yHbbAKh5ZhGf2yKvGATfGpKbp1yACAowYj3pReeC3wHtUigCRuydU7sQR",
  "key36": "VFm1MZxATqxqN6QgGurAkextsF4w1hzBRWofHsYkj4G8zDq15HwTbv8Sn12GKf9t7FQx2XHzJfE36YpjbCChzHt",
  "key37": "3eei2SWrE9kRiFkWpUSZkxTmvyMxLMsNrWaqKjjTTs6r83wWkyvDxfBoek5cUo8i1i1JaSWjRZy2Ah2UNttisPe1",
  "key38": "2dHeVz4ZSYSNdpxZU8zSfXf1iEm5eySpzC57EMvWZzgHC8HdcW3dNZBDTV63tGk4SjxB2QosuSP63nSFYyQ1JECy",
  "key39": "5e8Cz7ABMtyk2yFaPikdrZyqFJhWTvjgbK7WxPKwfqBBRyAsHAPM15fsKFwnPxys5YSPkgwT98SJwWrHqm45EyQj",
  "key40": "3dX9x2ccKc8X6eMvwR5oPNdVtipdSd3bRa3qQ6PMrxwzKf6daZSvwDsGsvsiu7keT3jozHjrd77oYXLdcR84dipH",
  "key41": "3Zni4LTSJMaepXEvERSYR3nnFThrMRuwniqXpQXQdBUba1T9Vbr83tGf9YoyysdXYL1A3rqPPUKdKCnGGiSL1zEm",
  "key42": "2ALZ6QMGeQCPBfAED2YyBQUdBxmAN1GSW4FYVe5zy7unwRuDQC2CHo9QnCLybuqGLvESnVdEpNmeQ9YKxA4EVo3T",
  "key43": "3Kiu63tYTY4E9fom4v1TWScoyZAfNWzYfppNHovNduqFENTSRHhgZqK5XtqFZyBkX2zCuZ2v7so6XBXgnrdFyKke",
  "key44": "2TL1Xa52MQpM8Pijneze5ChsZkY8TvkshZP8CWmSY2ThW853pX4MZWHpaE2Y4aYBEH47xhVzp9BD4H75oB4qHQU3",
  "key45": "2Z6Rs2ahFL8vxEGT353LhaP8B7Z2n76zph2TyoSQUykhGq6rnQxiTRJms7feDzMZBiKAgwYjSs6KGD9fQ6WQ8tXT"
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
