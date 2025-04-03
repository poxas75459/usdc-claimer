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
    "Y1cyg2pXh4zhYokbDwrGg7ALYQwv9cwXFL6duhKMEeTUoFb9qHBiRWogSnX4KyvQzQFbCoJErQ1xoEzG7r8kY1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8PXb2kR4b3QUmaqqyX7QuvqzWPPHFrBpzaasVBgX8V9zeYC6rXjfcJAv4w9KircGKczxZC9TQ5DDchhQK4GHY1",
  "key1": "7ALPkJyzDCbBmxBcZH75b7qatTAfawMhtuP8GZBzzNP4KqhwB1hk3UJhyeMUhqvJeFK5y27ywfwi5YDsDeVeVtq",
  "key2": "9rWue2tWszouqg1iqxBonCovau9nAfjJrqcHvpnCU8UAjjhsvLMHJ3sSCVjmF1TAKnMzSfSHiFShn8DzCXdL1Kj",
  "key3": "44BXXWgkxTJK5nPkcGLwuTjkMSGvpZ5nEXqJfAEY3dRofkDitZ6MNumeAtiRDhCZn6SkjUEotP86GoCDrQd2Uscy",
  "key4": "4NPY1pkXTkk7H1CgBUk56tczDi4nWSmEGKSAYk3UrRv9NxsJkH9DWvGoRT84Wg1k9FMkCCPD9DwPdoSw7ze27ayH",
  "key5": "3kmu3YeQduKH86T2jhbGQcq4Yr8Bxd2kY382Hb7QZdagPNfK2ye121YumPezQwLqe8huBjiPDZMQwZ5D6SUFJE6k",
  "key6": "JRvaH96LNVopZiMhFbXz9GAZ6kECGmqfGXwXGtnzeFTmPB7FPMEmn9UXoSpnae3bu3zhBEuDmJEH67emZsRCthW",
  "key7": "czTYw6EEYaTfsurcJ1t5Bn4aiDapJXYWxY4icy1bvLQxgnf28vExDX5SyRHrX1F5siPNQtF7Yw9iXfr35pHFHDS",
  "key8": "55vtFZWsVpba3mj7WwiBUSnh55E5PFJeTFCB5BGCyhbABJDaoQn1LgYow4eddjCXbmPoH2HbHCRckYK1kF9BbQwx",
  "key9": "s8cbxVSVdwpnsGvtRJyz74BYYCbQ6jwcq6YD9kwz3k2CU6TRuHEhi65KsLpBdJsuKvR5EGD3q9ACXLjnvyaTmtS",
  "key10": "ZFSQ3y53cQkvqrSShsTsMsER53eBYRLtArtLmXQSHRyu8enTtuZp9DTcwfjkCTswMtUwuXBTT5XDuHmfSNH51Rb",
  "key11": "rj2obdQk4bE73X7bJgcp8Q3ffjebNYrAxu8V1H4kNabeg6ik3orGdbASjoCUAhybPvVnpJ1nVTT1wdWHGDqgZJt",
  "key12": "4ZrwYSweoG1VgGVCmjdywyFB9jjEAKwyQ3FDfMNfDjfWNBsXKVg4FdZEZB92G4cSQPHVCvMCn45dcfKj2BX2ciR6",
  "key13": "4puUUmDZRzPSVbgVttuVYtBu26tqHExZwwJeC6DWGqdbrczbABwnb5DJBGWs6SHckGGPAb49EpASSEuV9o1gvdwv",
  "key14": "5SFwhWYBgGKk4GTCiMQLDLgjf3gKTULk3ejqALA66y3LCt4xKku5A6cB4a9xMKrGybn9RBBiUcP1cohQPgw8ein9",
  "key15": "wsCskcMRubsK6cnDNm8UkpGS2ogsst3dSs9EskJRWwP68ndFocWw72HBtRX7t32A94Qtn6xmzqk5SpAUEbiuwj2",
  "key16": "4nt7QRKWDjacAvXJ4HKxjmj1RE5JV2UiqPdeYkxHqBfxpwGyP1BRgsZsp24EhMJVfCGZzXV3Yv5dDsshKnG1upj5",
  "key17": "57qFHb23xsJ9RciUY16nRwBfb3dT54DkLt8cBRBG8Y2cgZH6vR19b9qfEJ8j9kUobBx8dfnSBzyj7sqFvWTM5N7C",
  "key18": "5wEwxq9o67DTqW4krhp1ss25Hra9DoeN9hngdMRKL7aHi8ZLpbyHkCj3Xcnoy9gpqdndm4vJTTFyBVjTfnu5cfri",
  "key19": "4Gbw6Kps5z4RHMo2sBfnm92HWPTriSyvDuF1Gein8BorJBFRcHHHgZ3wBqEXU1g3ox56YpbpfLErLnENaf2328uf",
  "key20": "5yYKy8iLJtSeR9FYFuz95CaGvn34He7EBK2XKXxpmE6B6p3HyMdv72xubh52pV5hrmkQ7K3a75kQmYwav1WnEdkf",
  "key21": "DweW8jcMD2NFSBeQJcaCqB4UeBSWDiq4k7LJL3zxzcv2gokrxZxhAS2WueKfSbMNDrWY8YNGkAm5eVYKXPZSGLe",
  "key22": "5RTdeh8VjF2uY41Sng4FMjGDsEpxhXvPQiKifWFs2bDkCvsMcpvg7EBQZV4GHgvrK8M3TuXKgAesGJhLYPf5jQJ2",
  "key23": "2GQ7HgX2vDZJXEw2ZETg42vSVSN5cJ92hBMrJRSDrEDCk3X4wJQk5AXxMqVXEUotJMUJWa1eDnmcnqqY2qMxdFF2",
  "key24": "5NHqRypPGJtPBgQKqCZQsNCfS8Vc1sfmV3yGLXr98U5xT7Jj9ZwsVRwo4Cug7nt38R3Rz4UvpQnkHbZttQgb8Uyt",
  "key25": "3MxMQCSeLfpDi12SPo6TD6qZuBe1xG4Dc1XW4vLen8jPpozj5Pcggbfv2kLddVid4c5Y96pQe3rXnCqSJLSiZbsN",
  "key26": "2uk9zCJsccq4Sq4TRZ7xoNJChoPyQhFa5mHmm2XoHwxwcvEZ7s64jBHfZAqpc74UHXs7bhji3X8MxLmrKr5stThY",
  "key27": "2k7tZQDLTzEAc22dy7PvWrExKR7KAoBoNYCS1J8sLoRWDQw8g2VFmSzVCNgH5TPaWZb6dc7W7N1WCKYCtGDWQcZH",
  "key28": "sXMGrCRjaTS54sJYCeakXE9GyQFf8tS8vQ2CVPKwuriViGyE3hk69AC6CVDfZWMvVB8QsyBU9CdG1XBq6YFdbvT",
  "key29": "4G9FUpFPXaCrgpUhgTgEjLCZbuLYCEgffVFNDPYHy95zfDmMDhPcdqaQTa2mye9jT8FsroF6EzUgp11eJMKX14Pz",
  "key30": "5mV75vCFLrkBokvC8w4cnaFuBQhEW2XgLWvEvsFNDfgG74Yd7CnKTf7uxeiGGJVsHojcD6BRYCkpJSk8B32MBz4L",
  "key31": "2mW8189S4qhTYjz9AatCNBqgXaZ7woyYK9WBTdZgp3DTVvxGp7kkGHfE4tU1x2Yx3eydqco7WvTwtPkCzpe6pQbs",
  "key32": "3ea59YEnjdmFwKU6xn8dmckD5GtZ3hKrngAn7GjeVr5exqdbuYQx3DmhGmwcvxLAsU19ciPkujbs78imxULqLpix",
  "key33": "4YEp6GYjM6TNAPcDD62kw8AuLW1PD7Jm63FjvYXy95VYkgM6qJrk5YYiHhAgJxiG368rCcBwmTyc49oLtvhbHdmf",
  "key34": "2tKS9gE13UgEFF7TTj2eQTQYoLAcmrU4qSn7SEhhA6Szg2qvrmTpMbSa4ckGjtKPrsMDhrwkLQkfveAuvjXXBonf",
  "key35": "5rvf4oTHBqNcpb5WupXEDmG7JUMUmWLDpLQvpUqttakXnVmhdtUQm5Egu1wc2iBBAxUxfzCDYWgiRMvNvCjCjGAC",
  "key36": "5vc3jGrdoBrFWz8khPURxHG2J3KsTZhiZRVrmCaJWwhpSDSJcL1zJxXGqAt3wJazC16nY6GGiBhigvf6txZwt5Eu",
  "key37": "4qMqeRw9ofN2EhvdNMM6PjEXsMRD67CE8ZPmfVxi3KaYyVmW6QUfbEGCbEb6hsqKNrXLxbtvnDyVgDmQCFHtqyPv",
  "key38": "23VHy8hTUqu27P8Ucp6Pxb2BhBKAYy5Ex9UaeQoBfa79mTSeCbnygdb3hbMsNGKuNPU8nR7uaqjfF443DUo1r2BQ",
  "key39": "3rXQLdPspNg5yUNaNHqHhEXvwGqNHsMGtwTg1zWY6Ao3kefuPtZ4s7nFDvHJ3AB2YrsLnq98oGFdMDDK8wTSXysD",
  "key40": "2LxgAEvrsiZM1wrX9vQsR46PMZczhB8WuiSjUKNtt7UvvqngfLEGXjbLq7eHPu9B1kKavFQBezpwh9A92f9XpbHm",
  "key41": "5VuUQPe72NmeWZzhN5uopbxs9X8hoyGcg1aEHuv5J1RBSn6xCDRys6g2fPRUiqtjSQm2yVWHfRXGH58Aza86GDF5",
  "key42": "3FMgt1Erg1ntHSHmUDvPP995Xxon5QDgpw3WxdvMVAgeED2P18mgphjy3SXHVeLKRycqcwZXnyU9rFbDYZvUW6zj"
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
