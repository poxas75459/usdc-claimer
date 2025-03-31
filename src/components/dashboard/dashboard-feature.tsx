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
    "44StFEfzNUKNTWC16XsEJB6SLzs5y6ujuZrHD1rGLES5U6tVhiNhqfW143UMG1meTs6D8zFvKjWtzj97mmiectGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SyLkMhwjKiQT4qF9gDpdRZfbC6cKq7GeVXwoLZX5qEVc1TPU2f3TtvKivTMGfLAyZt5AExDPBjGguunpugE953t",
  "key1": "5gNee46LbWhDrsUL7pfB4N29ijAzysuUShbifpUctoKdAHfTrVDytvbvywU1byFYnHc4Txz2samHWZdGXfsrrTtB",
  "key2": "3ibeWdPLqTnBcqfEfp3Rc7gNgjk7fzNwaAsG5KXmjmda33ZXkoA6Jk3VXkgDBVLJRR5bAgerwzmuoPMDvrDmeoKM",
  "key3": "57kyYBELqp6UmAPd5ahmXFkNprbqjssC5L6MsfUdSQiVxb2gzwd233iQnN83URMQSvbdB6Cu1b5JtYNU72YN9Gc1",
  "key4": "3ZspXKwKXcR9rArkAmn6p5NEWG466i4pyxntzuN1x6FJLLcSMVHVcRvjn3GswEw3TCbC6QQd15WGjAgX9gxu6GXa",
  "key5": "5d6euPaMo38dAp8gMZd3pBHdMueS89GUj1hjvDavdHd5sXTg2jSKQ1GnBpACjBdZ1Z9MbfnTgsJXV5gzTHSzDvB6",
  "key6": "3SUaPPhVL4NbV1U91FkzMVZKZeYHdjNjryoAMDtDJ7kC6gj6D3jJhdzysFvaUiSpFwH9L8xgRmnajv9dV59zTSnR",
  "key7": "2bsGJ6iXBqaf7PU4ExWmxzm9DVYQ6KLgHWG84U5wqb3kK4WFTNXpKsph5X6qxFmTtgHVYrV58y4r3z3hMN1gj9q",
  "key8": "3UdBT2dxEaRhmL5nj1KxDUn6Tb6E5DXQTDWUJGHJZqdZdynYHcXAYe9zArfgcEBpWQcexHQBkfF3V8sBEhZMxuXW",
  "key9": "4vwr1rfBsQNPgdmbKmJQqTHUFEp3XsrMZ4ds5rxk7rDMwW2uncTbn1Rc2x97fUPRHHXtmH5WUM9FVSJuQ3t79Kuq",
  "key10": "3iqTrCV45AuszwgfeYUYrzeTqDmjoui5Bpw2diEeaYgU4JpDMHgHHCdhVWje5yJ88Rxh4rEtomtJvv5bRznugCan",
  "key11": "4LLVuSshEgda8Fbis8sph7fhGKJgu2cyKDM7gjU9HugWkqFNWKABvCbsiiTT6X3pbuM2Sxkkb7BeTTMuiWK2Tm32",
  "key12": "j9H5ddEw62eMm4eojvrnpr7QyitnYaBov1Y8rj4g56Qg44Sd7vZ3kcNJcDNEKWBuyrtZepj8dX8YGm16893kjJP",
  "key13": "joEwAGu6LTkNhQ8CRcoXZcXQxPrJVtLyGb17AkTNZ9uMWzcL72qnq4Er2xoXLrcVGx1tyNubGD7QqWvMnjX7EK6",
  "key14": "5x5U7g4gWtcB5CxX9PQ1oviLjGM6wpvPw9tgLLkCSavJE1BHoAvmnBkuPjbXKNL9Xh2bWSZeALGyNzK3RHHGRi2C",
  "key15": "5bzN3sM83NgJs8ZRPdPCCDwBoRzdiYGjQ2Nk4wdfQyjF8yA9XqzspGW5YFPWfVLQd6XsN184crBswLXGb7Hhp7Rj",
  "key16": "4i8w9StpoPpNcxVjJLTgvKiHLTo19VinVNrDNCPkpcL68U5dTsT9EL18gHsLRFxAvahvExyg1xQSQkoThc1wKPRz",
  "key17": "5mgNEbhL6JRwgn8UMf4qwAEzNA5oQencZc3sVVtegBmY52GrFm5tUUPkUFQ7Un4bKuDVACdW2CnjLh4eEZ9AKCtE",
  "key18": "211pBvnDzJrAytpk8qK5p1aYCSfSwu8vDS3LPTGZxpMTmrocszXVyvFfWW5CcsiJp7jjEBuGWNqj6K26McxBMLwX",
  "key19": "4T2ZQTx7xdHaa8yqpcbpnBmjK8ijsVezCMH3XFy5kku8f28QTwQdT75L7P7QMPdFNn2wzmCi6qLL2t7gM3skuNYT",
  "key20": "5MqUpV8t6WqpmGsY5nwgrSMCUEBpeC78jfzoo5msTqeU9W6CZPtRAnhH3x2DFB74jJoFsAt25syhUsLnwkwtvzZy",
  "key21": "44vqypYogYLMd4AaYCeHTfDRzKP4Q5YEjniZEZDtamorUXbPgMqKo5wwjL8AYVGsDkZoTzmGfeRgnU7woQdzyp6u",
  "key22": "3DKKDK3GkLSwFttcJFckSybH63gG5GnvDP7CmvZwWdiqyAH8YgBAbwkuxcLnc8RpfPYodyuWPvjzMKRRKRkbxXc",
  "key23": "3uAQxRz5hCsuFnLLfevbZTZoMkXGTihHNCZ9M35juRcaFzWK5hqAdprKZBeweqewi8FuaDwhW94SByxffkLzXqLy",
  "key24": "5ZwJqnmv1PieTKTGTsod3aX2pE8x83d6vLmrU5Wn9coWmD3Ko1Y2Y66DcGfu1zMvubw5DbxXhpkMde2TfE8VmEwa",
  "key25": "4LdoP6iQsxTXAGimVHhHH8i1dEEUMupVYZJaWJkveKer23AV491etYxBCAt4YpGBFMKne8iEpHqSmha57SbSKRmF",
  "key26": "39CqALFv9FZQRuuLUxS1RBMU4cQ3sSn7jSqrcVAU9fenfFKnzS8TedWHshxSzf4h3posFSFTPe5AZtUCBSBuA2uj",
  "key27": "39bQ5F7YvBSNedo4NHiNNok22WskMNHPP4xNMjUPhEvNkPm7i9efgqCWwPuAEd561JyCpADCj8ngDvESRkwNuRME",
  "key28": "2jQoVWamQyzKZmDV6Dkvu7XuDMv8BfoSEF6HvbmyLVPHQzy6xaZTRmUgGgYtoUSTiTMQypPsasvS82uHs5PQcjnv",
  "key29": "A3syewAYeTFb9Jt9y5KXhztvpzD7snZCwWJZzi6PkSfmn11qaWNRzXbVfsXYHf7gifgw2Gzv9GDqKwaikHDhRKU",
  "key30": "4QccLDkQ48kxE8Ene3Bmw6UAs1wH3RqNQHujcWFYRXUsstLaKJ5QQtQ7JA5qDsfsZV8hzYNjMjqRitjdB5HPiPJW",
  "key31": "4RmtzY5DMLQmdqq3P1fRMjw5wP1ytMJxmLiVGZnRhTmxPAn4yc4VhHbDAgSbRQJdt6q5BmTRvHk2273texrjk4mb",
  "key32": "5PApPrRqvFKuGmXfrK2f2BtEm7Sjq1667TabMSanVFqzwCPDbirP5ASHcEZPD99smoW4pkNvrMmJWNjPP2C98Y1z",
  "key33": "3x7E49V7ASzi8xVkUxi3yS9xCh4X18C2w5StEHcZ9tjqHCUEtiefRoU7DA5TTYeL6ofrttVcXzwvAs7oBh3rMuP",
  "key34": "2z3kBSm9rakdYFrephpz3g43cZWAUeTyRumj5BLKyb5BRAUeyzpYNVzK1jTaD7yTXNvywF6LCijgjeDGGkLjAwNv",
  "key35": "5vaHU4HApWbPmfDMSLuZRK4nciuFJW1yJmSJHp85SnvfgQiWckJHRwhCWyKbXJtPUhVg1p7g2Q3oUMha9tmNEQNR",
  "key36": "4w9VEqsTTGPbfgyPGMoDtHjYzPLTLp8KQa6v9w8auyQJhGhdc3d4seqCQMAdTvhmiidVZQNRcPnusMVwSfU7mbZz",
  "key37": "4U44rZzyTDKs6cuswuxo155PbQCSic1obXYbcEfkqBQeNK21LT3WxhPhyLadTcWaGuUWproQSZNgUYF7cUnmwZcn",
  "key38": "2zj5JofHBWUDJV1ZutL37YTUg3QBjappdhdAvKjNgmyB5Vit3JdyPgDKLLB6ceYuRs4vZZDszTSRzZXXLYqtVW5B",
  "key39": "34bSXMJQeZWMiuwkNmJV2UkrtjmLFLf6FzYi3F68zAKbTSVeWN1S9zVkn1Y9f2jCaVqLPQJZ6LxRH2D1isSfmNNs",
  "key40": "4dimMANPENsDhmbdfMsDt6NnPsEb6z7NpZX8CnezTK1r8uzWcsxMQRTU4XmBzBGJCe74Q2b9E3QZjo9Nr5N7Pow1",
  "key41": "2hkM52mdNmMpAk1QdJTFcgRxaKJtkgJZVqjUpw2ePTgDHnRqXaQXJij8XE4vnUVj592LRYMFVeSNTbUfWUa7c2jr",
  "key42": "3v1dr3X3WpCYhNmCg6U9wfJx8sohfX2ua9TskKCSBMLUEUgDGa3KRWhGaspTDchEahWnzH51z9manAwNYiNW6CS9",
  "key43": "5iK9upduvdYsGG8NZrn7Yh94MazLmug2PophY7NkkXifdQYMCCbP85Hao84hnJQagLzrkDFb1pHRKnkyMMRkgoiT",
  "key44": "65dSL256nMNnAPhDT5dvUnUvrjcLsNApN6T5NqdEAb37cv6sPEbB6SiEaTnnzq9HM6t1AWJqcpdzCafvbGuXf4Qb",
  "key45": "5XG9ZD8xEcS9UKTbesq32JmnHxQ77vtBYhVadrNFMGagbVgG6V37uPSp1EUiGmrmgSLYFAB2SbLUyzqrBsGqbAEK",
  "key46": "pNJvMAQEKBpFYPXJLquyE7SnLuYz2CgRRPaZp8cN9YTBWxrq9U9aSr3NwDv7NR8ARoz9ijJyLm5LdPcAZkiTryJ",
  "key47": "2zssFPLKxGpQXNj1M8XAQQZiEg3BXvWqrjEpZ4gDfV7w56xirUkZ5PUHU3n4ThYFbtJg3mTRWeSrBSvqAE2jgw6b",
  "key48": "277apntD8BLEhBAn1eSK9xR3MhAmRC2UrPgYCyB34HwFqn9jqpjhHsaYCdww9DwKkygAWDq1nysSKTRP4rnFh7TM"
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
