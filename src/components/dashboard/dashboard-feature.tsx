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
    "473KgZ5xVbF7vsurMx6y4JBNbcYWBMKsi7gPf7V1qYHtiNzpgNab5C6sNgDUg2g91chQwMJMtJusXg5ksJr3vqsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49P89iaxu4u8faqyKdPxd2qJVctQWyTJqTaZtUsM62qqpTSJFHnY2uxw5HfEKP2kDae21yAPRF46R2aqC2d4e1sr",
  "key1": "2a47DGyKZZ5NtN8vNqnCAod91QSV2G42FL9icpyL2z77zmgWeSSSaDudV761zkcCqhgiwyQ7kNjusZPmpZxEjvSu",
  "key2": "3YNVeRKn3nPCHcsZtgNj5oAK7eZqQvFE5xGfQ7EaTjnWhtq9EA5Q57TTyTDjZLVQkXUe9uu887RzMp1YAhQTXXFx",
  "key3": "5s9ogtuPVxQ1tPvDCzufDC63UG1itogjSamELDu76MGRNZo4sFPE5CBQdTbaHwYZTdxEHR7ZyWmaND31pMNh8nuG",
  "key4": "BLnRsjyZhXFoffwxBvzqPbiEjjhb2Mt9SkRC7nNenkNAtixt8fKMVuCXgfrBi3214WrQXfLFnYETFrdZKVgDUan",
  "key5": "2rsv8csQUvXBboPS92vbgrDteKJdFtBYF4RVrMsYjMaZpWRqKHHb4savbcEqVGZQFXiJYkDetDEXqTGZrxTXfzcW",
  "key6": "27fz3BEr75WBJbqxjPGdmNwZztqtKwknhCUu3okXy3TihEhwTyMNZdM4x8SN2x2ZfXkrx8voFYzEbxeCVQo786mL",
  "key7": "4WzsJvPsMV4ZqCzbKrQC6R16uhZ1AEwfLuUgvoaTaHLos9KFRQFEFqngMTuxGU8f4bppF5hMx38pYHHQZQDhbqM7",
  "key8": "3RXQwLxjGXroHkd2EFKXPfj2KpXx8SVXXCzxN4G6T4oKXYL59tGhFgu1VpDmZFqtpzGq92cnkZ8MFcLPjw2RxSj2",
  "key9": "48MJBXncdFWVFMUskbpVH9174CvRPAuuY8vEPkeswn4ZWqouTYoUtGeiNR6xyFKhx7VLGyuDkoXbAXpsVSdqjUkf",
  "key10": "w8SggLy9dg5a9y1cknSpnbduzCwpoNG3tBeRTjfH73HXBhrtQYunzD4gSuJSDnjTPNqcYshMUoyrNekUdMGNdaa",
  "key11": "36CNcqL8Pa9hqG1TSP5QUhaxxrwRF5tjUKJQAHTgHfR2p9NzsCiqfYsHoimKAmLLgcLb74oABSmwCaKMAMf7KFNQ",
  "key12": "3wvcX6agmtgUc3dbkwST44bsuJYSaXmUTCxeWjCdxDHC363d8gnZeeHJHP5N1bc4Tpesd8DcPuCfHGvU7ZEmDyrc",
  "key13": "4g2LBuN6eTvdNJjzMZcv5easkNsMqhMPnivsVgnHCrkUYgJKFMv8tmyisgFwb3RaFWy29thgNbn3ht9LTyVqFXVy",
  "key14": "2X4mdKD3KQXAuKwHTBL3wFU7gbo6hiZ6cW6fSGFAWnCbAVBqkw5nXsa7MuMtMJvYX9SowKCN4wRmq38TKuxFsuou",
  "key15": "5EaKEw394KDdMPguNoEwkQtk2Vk64Etpd7FnPcY9nrCpiRieWAmUd6z9DEU8fS9WinfJrkv8kngfwmPBjyRKmLpX",
  "key16": "4NQR7twDiKRkPTZpEB1T7jdBhdAn1WWTgs1GwNFq9mj8KBfZhSUqvJT1FgbMMmMmUCR8hkSxC11NrD2CnDenZJrc",
  "key17": "4M9UErru1VaoVFuQdgxL3c2ckMFDrck9NLywEZwgq41YH5J41ubXqVyhULpZ47wHdvjkHzLc3vh3HVdnSz2fHsEr",
  "key18": "4LF9hwZpwkSSvQuFkCHFuHK45eSJvEt14CoYMALG6sV7Cgb46JH4MZBbx5MeQBxC15AtJkQYtjRccpKfVz7tetkC",
  "key19": "56k8WuCVyrE5VahUJRbzv6wDQ7pmfYFuH8ReDvgUjf7J7MB4RQF8aPmbJBhE5wnxCYm1adHDzugUHu8oWzyfa4RN",
  "key20": "3iFsaHfXVVzAzuqchtDDJkiaJbw2XMFjC1DWd9LdvMspqzUZTinXBdYjg8KZ2VsLJgUhBBVW9DLCeu8EWrEuEVUd",
  "key21": "2kEyBCmQygust56HmqKf12XXQJR6mssVfh7FardUJLSMpZUtFxJ3jkG3zHRr4RZgFwkijASTEvUc4DWmJvaKdByE",
  "key22": "3bV3k9B4MtFg5MUvnY2DbFavsuMrqzGxppGHKZUAc1LLVj5yLev92sv8i9FGGMvCScUxQjzRUYm6bAHvGvjk59wy",
  "key23": "2T5DPPCF6zUZV8bC7A6c5wCjwhHaxeKYKf4mhTUxmvdpTivHFTV7ePKGbh2SGcAjBE4eaHS7fdFQgaQq1KHvqrtv",
  "key24": "34jSBuW1G6FvdwyxQmQDwwHTGt1aNi5LKU2yutDirkfpFHbMvYfSkFJ2Krv8bZkovdeQkat9jkiK1Z8qoHuqCm2k",
  "key25": "5fywLRGVdqEa5J6kQAx7uVKpo9XM5SZiGz37AZdy6FgtQVFAq2bGwGjXFPz9sreAR3H3KNSNJFUKihxuyD51n8Ze",
  "key26": "4NU9Y739SqLDR4VBMm5dtnv9n5nt9b1YZwdHE6CiW57CGvFiGg3Qs4kZdEUgSV9bu84Jy1o1mvVRomFTjMDTv3y6",
  "key27": "24NTca1gy2zc5hZdaEzHNwP8Rbt4NvHiHiLhkg45cLnc4LbGrzwYESMmDSSZ9qt39x3uaand2cZ8NoW6GeMGg6bv",
  "key28": "5S6cfAxbmte9c1QfZQRHJGLzZ3LBNtr3n8VsoG7JhAeedSKaYrKz99gKuV7pt61WFyvM1V6ziWpsPoLt3a1kp7c1",
  "key29": "4J7VBL9uieh45PVKWDHc8yYjJXUZvcTZpSN6gsD63YHS37Ezx7jPeFrh6hAQJ19HgKV3Er7WnJ9Fctg7GoLAdXrN",
  "key30": "3L6FmUctjbSo6iYwqdaQ7U4kWmF5sHCb2BMm3fhE4GGBXDbGjwUhoPYmpHRnjuFNbBY8uoFvVAELcyqzEn8BGzW6",
  "key31": "5aaZtHWTPTo8WyzVHD4iqcCG2WjBcZmxZ2H2F6AWHvhndDkPncaB7SMVsJ4DKFQSRymwSGtgTWh3M4g5adnGdkNY",
  "key32": "3CYFEeALJNmcET2Z2axYTgxmitnXdo3L4z8brofmLqHGnirRkxhHwU9E26myQLdDYDCwg85uCQsg1bsaE1hMSgZu",
  "key33": "4Es5KBxc8zWBnPeq85eUkKfdhuYzz7GE13btpndN7bdkia32keRhEfN4jvTTz3GpSfcF1gzgfX7YV9vC8MdJDmEB",
  "key34": "qrhSEfSBxLQA13u4jhXK5yP6fZNFsf2F5CRStmbWHtkJ2QejBo3EEmnbgVZaLVVjZwV3tiXqV1xS79ETwmkqUrf",
  "key35": "5rea2FtDKKaadg8DwrYEsKX4iWTovrNTRNywesGCm4vSDaoX7kWPgbdAKbBvx6891iGucrzHQpQ1m8G4LCd5SKKq",
  "key36": "2WfUnxkMdiCAZguHkDCNTirBNYe5YZG1rL2w4e6x6tbW47YMhHozFuFT17NRkjARtxtMDxpbiCAGe6BE3Uefvu44",
  "key37": "5Ny69eojADtwPkoar3udrwP1mysqkVyXSSx1XSqBGRbYwmDjUoNuvSgCfA8EjBsGzgpycLzsB8YkjtniuKvXqvi1",
  "key38": "b7y7UckHC3nPa7xP5JRfyfcqtho3D9SDJHys57huZmChty5HfqFPVeUUzc7V3Jfp8UaW5VBgmjzS5LBXhiZhbUc",
  "key39": "2NJKWKSjcYFfNHRpeWLrudrfSfXHaQRpXzW5vEPo7e8nL2dQr1UZY1W5xHuKVyfkBJcYtFF7RfH5N5G2iWUoJWDL",
  "key40": "3K1XbgtoNaoFS8RWpbYs1MkBV8LwQUHiYjeaG8PZfyZmFq949frFowiBc14pDZCjDyYpCw9Ee33gNds3RwbF321r",
  "key41": "3EEpAbYJBnmYmQ2DxNyV7MKPYAN9yk4YbMRsRzgCc3pM1fdUX65RbPtmpbR1zxeySq55qWY17cNBw2W6nQisvnrN",
  "key42": "4E5HcGQHnxLG4Ut7SzKXVUar3NZn7jDYfpWPM6wHYuNFoL953sNZEkh8N4yHaebKgGAbMDhQF9eugmRvEbfWgKSt",
  "key43": "BqeV3reWhPDoAXHfYm886xspCzJLwyH5oXXtx4oCkFUbd4b8pwysg7zsBVhf7b3n9XMYqwRMoZ97PtZcQVbNC4D",
  "key44": "2TRANWsNTjcG49gYrNJ6eXdDVCK5vQMSUhSUzQ9EzNGHxBBnhyVgLEdBZzYDuiNmDGPpnhTP6h5bZ5aVVQTCEncJ",
  "key45": "3QvsjF3KawD31eqLdicEnCZBNsJvwxbQiNo1LPc6fByEtTEdSh6LZSgjyJTLkh3JYuKEe9KTp7gRftZh26nCE5Ba",
  "key46": "26nHZosXcjYmK3iA4Fes3wBTS14AjPait5yeJaYYGCwHix3G8RWyAu2qVkPz4hCrnKvB4DCUrgX6THkpdUHFRdpy",
  "key47": "qbVfxEcPCVmCa1z173VWCMGNGo5jCTWFVZG5acRzkRuP7gGc3deVNdVtFpxhBLWv23XG3PdRcr5TnaxNG2jCMXt",
  "key48": "WmwckwNx9A11xyw1WgQnE2mGC5ALD5oUGfTqefU23iscp82gvrQ4LtkyNeuNU6pPrrJMrA5FLBAy5YNwMC9Hcmf"
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
