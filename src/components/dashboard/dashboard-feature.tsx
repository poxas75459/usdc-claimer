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
    "5LbUtAP7UXkHrfKitQtHMz5je8FJjbV2hm5fd3tEimKi4Hh92EhB97thGHcE1heeFJ68P8FVGZCCrmtxUN618ipG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E9KYozECRYVtQ8vzJMFZ6tjY8krgUEaAiDpy6dFkcWMbXPQVKaRN7WA9MUNLXwrxKj5LnniUMtPoiV8pPcQox2S",
  "key1": "y4pKuwv86rsumVFGta71QSyUSAJHHU1qV2s1DbvWZ9Q7mkki4BijQtyM4FLviDfx8273VwsaiAA131LeMfE2z2R",
  "key2": "2Q2zrpH9uDvYitg8KjUwMx9TBvYCcrhuZvyrBWfBBNRenfnDzqKHZhVoaX1ayMe9sKmiXqknAyhTDoNJ9Qoyamfg",
  "key3": "3qqFnoJQYudiKHji7Q9pQdwD4U96q4NdnGhzxZ8ZyZnsmKequXFecHndgR3Nihu4uyZ51vQWgJ2qWn5R589YYArG",
  "key4": "4LvXwa47DUh7dpKCxp3xEp4m2KheCUroXHQzWFrcyUiS3XXd1DwPX6twbUHD4d3vbGVaU9g1hpcnZeSVqFPWpJ2d",
  "key5": "1VbwhFtPonY5Fd4pY1GgsVh6Mu8YLbT4NE1PoH3xR7sSiuTAKgJKkTgVTwkA6U1BT2dLitEvBFCkGk2wxqLUkcd",
  "key6": "28izCKu6dR3BJvt5j9Vub9gNf2oXtuFeZigKyaQraQaefr1em5pC9pYm5b4zTXWJ5ZjY5cBnMq4jKcg3PfjwBACs",
  "key7": "5PZRGnjaXJT9PDseN6XvwfJD9tdtJBfJjviYP42cUnTZoBpnDAZyiDSZv1ZMbEBzkcJHvdDw8ndUqzTtFWMHfQLz",
  "key8": "5gNLSTcg2qYHDWBbdFMR7fF8etD4dUXxjnTkE9SM2qLBNu2oukCn1fJ4e1ke1uVaUBpvwLKV87nm8UBvBWJDvys",
  "key9": "4JFnCMjrkQR344R22csoNtjVG6QnhLThUTaWJRJHYovvSn7k8yXrpusvzP1nJCE5iRpcvKncdPq2WzJujNVQym1q",
  "key10": "5nZacbY6FVdh3D6N6Pwit78tXa1A5vhseVhUfD7mDBXtFtxsZH4PWphJGTjVhkPzAhEvWd1g3CscvWi5veEwncNz",
  "key11": "3Fh3AbhfGdVKYEyzzJWrWGo49qvvej95BSLuYcuzZfvWHqMVjmwimoSJxP41o9SLDzJWLKHryibr2pYKoh9aGxA3",
  "key12": "57Coc8mwdMBENQ4sVpMWx4xqgsXwYZMf8EsSXQUYFVtPwKvwxDxWtvfzpBkmqFYZgEZiqpcvMd2sLA16NLyuA6Fe",
  "key13": "67GrEJBFvZzUbiFg6b8zTvJuVgWWM5yaoeFQNhmuWTT22L68u4k477YaFX1crPGb4wbG2ksqiBqRZQh1AjQqtDTq",
  "key14": "4Z5kepSCBkG5wa6BjbpEFwmYuqDCibfmPi6wJWCehhL3KYQ6rJ8tmKmoVMRGJ5uFbKSJ61p6pYyrB4TQrRC64sYE",
  "key15": "3Tvktu8nHRScKiqcCtDsQ4e86usLZnELSQwsqkJsavxKpkozz6TGq4zyHcbv9Qo15htAn73ksux4EMSxsD7TVVdr",
  "key16": "3j8ukJV9Vwsx3hVicEAzwJuS4zc5orSW6EdWNauGanw1eyQo7UYZt9oa1nac5TQ8AGU18Jz6e2CZDHm4hJTPaKs9",
  "key17": "5xFESNKtptDYZGvj3WU8GabSQ7a6fHqoLsKt8dk9gHM9DUZYGRFBh2u9RCBdmAMT7FqPZ4ARPKRBgKLCdtYUbkCi",
  "key18": "5DF9ThPUGURjx8MSSA2Y7u8qhaHK249C6WEsKPeCJeGFfNma4TFMEqbM8jY3BBRncgg5JxknrNKZnwj59vA7JAWq",
  "key19": "PdyZwC7gJogLb2dDWkZRsWbqtB5X8WaHXdQD9pzETZcDB6Hpvyy8avZvXBzBEVmgHd6EXZYxBg7nziZMsifHyDS",
  "key20": "58LjdiCZAHf9mkjBrYE6Hyge617mHgkdX7mgf2DdbQJXqAoUbgr9JECDoM1zZ5rDBhvp5SMDoJN8FXC32i1JDn7g",
  "key21": "3rWL3S6s3LsaNGNuY1MyNdsDvxqvxiUUCgr3dDKDazp9kDi13kg415z3kfZLNvAapm6izSgWD4PcXsLugUTVir3D",
  "key22": "4oVYVi9sxCyraxbemSGsMfe41DYphxBS7gi4y7zvYiEFus3xmZrriy48NbK56EhBas42wuDtuMoQRxTCKCu2SKUD",
  "key23": "5gP1h8T6PXdcJT744MRsySP3q7XUF92rxxANVXUG4N9AseoD1z775eHXwrKf6vPaHBhtaosNmGozgEJUzA7fLhWh",
  "key24": "3tkCJG44UnW2jEY3zYXKGD9KfYLvyap4GL88GADVxADgC4RxwnkNcbeuBJ3spNABszhS4ouhFqCaacbwoe37gcmT",
  "key25": "5qJwXDPHvmBHUChprU5xnL2oGTuFzxHkwbg71nknyHyu6XKFL1WVyWtebqsCANKvcdbKpPv2wc3H4sMuqpeShiTs",
  "key26": "3BVMwU7Snt24GuSoPuLiBsRDAb4gpChmj9CTuhyu3NQ57QTsnW82QPoi2zQnrpa1BnFNX77oMPAQutvppMELz53a",
  "key27": "nXmja4SN8EsG5R9gSi4fp8SJecn7wMmBcgX8PHvcRweoem5V7LGxrZJjrfApP7pVX2XzFJx6tF1KpCcrXHBLYD8",
  "key28": "XRP6J9F7fiJiryN8mLSUyrG99Cyg6ELevCBrYGGjdTh9pVBu52ka5G1taQqN3vEdx2Bzcq8hWDzYAZKiq1VJt6x",
  "key29": "2nE4YbTYVKhMta5p5ZJqWWoiYawwRUGV6eC1uLa7NZLr4WiHWDcVsRVUfr5M1rnFHr578qzBZFkKWU7KdK3xxeju",
  "key30": "2pkotJ1nR87th5XffB8tJ1ha7YfPSbhmLmHci879aEaoryAtQMxtvxEieCGKECJSA6i4kGDrhjhFk2nXQbsCQtXU",
  "key31": "qxDpoWhQCKzmQKoBvs39tr1EQd621o6GU7xUGrxAxyjkXYctGwnv8EL3Y9PifHcZ63mcwHa29xPP21D5d5bKEXt"
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
