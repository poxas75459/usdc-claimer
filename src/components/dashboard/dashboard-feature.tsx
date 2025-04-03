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
    "3jhiNd3MToZrhHPR8AR5GBtaeiouHdvaudmdoM4QeRTeFj89EWy9AaxwHCKLP5bkjouyFNyuwfmHXTkG3uy2WtSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T61PZcaHGiLMMf8HKGfMEG2vrDSrBKad35UzU9RAkxC1XJZuRG3Pps7MPRCM8FiErbJd44BdegfGXAiowwUHoxX",
  "key1": "4P5rgBnj2HMNK17rEkbJzy27g92LziHwUrWShE3GuzXm3m5EX8RZd1Sq4YFKJ2yvEADucckuHbjE6AYv2YJGFYF7",
  "key2": "61HpBBCn5yD4k3AmJxwoaBjiWQ6cAF4Q4PPCYkh6iqzEM88ssNoYsz8j3xy8TiEUhVsJ8QVhiBoELnY2KedabrPu",
  "key3": "2knKuNc3MvqV2Y6f2hmfvnqTc8sBeXR8gbGguvAbiWV5bHmEkMwKbQjxBumiwsrDcdeDQX1A8sT5arD2eiv5meNt",
  "key4": "3HXVHhW1rvc4PKHpDYn9dnbz9ztNv9rTDQJ7oGtqWdB9gBSFQNvMiHR8Me2imqUSqZgCYPBMmRfdgdCcMgvY1e1D",
  "key5": "2JEKhnR7zNmk3Ps1vwYmhgQkTrv4seYiAQz1pqKhGDa2oaFQgsSToDjzAirYDmvJXC585vWPsmFCc26dS8Rb6N4q",
  "key6": "2V1HaLe3jbnJ4sFc1doGxmepprLeqTuFo4xCBECtBPz61v7dFsr6tE1ptqvUTCagFwjF3jzpU5YksdP1RqHWDKft",
  "key7": "5SRuXZXeLAwFnNFTMC8mdMw3XUA1WJp1zSmmgoLwMnBxFM2MZwWyUyLjrFbCqNq1VfSySzvP38xKPLH3mZeKpp5D",
  "key8": "3DJXRxdf8TQtcBfnCYKU4PjMLM3wBx97nUn1GBTab6Au8Yj3L1p7mTkmAqtf1WRbTpmG2zX9yZwfJLJewbK5pPwn",
  "key9": "jN4xQq3TfvmMB7swdGSbXr6BX45KVd2du3zVYw3RLxDRG4pz2ccfuHrpqSFwrhu5pm4V66c8oX21UXUvPwiffBc",
  "key10": "2wrbCrHYcuD6aBzmBdav3UN6YbCbA3krBBENpc8Kjdi7HP2XrQ3idbtJTaPPiFaWtay1Mwp3miA3txnqU2e9Es6k",
  "key11": "3CPysmyaSqrExPWwLHz18rsPgdveWVyn5HG9HYv1cZbBfn5ncrZnt3mxedu97uPK9AVEBB1ZYcsGWzbFe9vKkAKu",
  "key12": "3CmMzgZrfcug3AUtEkyTVDuYkVvCugZdzZDmhGRo7b8q9j6JZbrWTRd2UKZWBZCQWMLzCGtc86tjNKM5PRoff3VF",
  "key13": "4kNXXAeGngBmytnFxQjrYwLbzzdocDZu7WaScjE4hjTQFd2pYX4tiUGP7WXk3km2aX6QVwuwiDMdoK1M412z6VtM",
  "key14": "3A4KiCMKNtPhLaUj4utX2DKmy15Mes6jrgQwDcf99CUav38EGEZhaUsNUUhR9vQV7MzW35Mpew9hY6xHZAaNkLoq",
  "key15": "5HmiXRPmWDn2UNGxXyQ5s2UYUH5MXLQrJ1CpT6qeMZYf1JPkFR778oZdWaeg39ZwTYUJZTzEiMUAhdJp1QdmiScL",
  "key16": "5BPwgiy1eGUpn9e945kaRCj5EHRgGjTi2eCYQaGtZt4idTP4BhMUof3EqL7gyrUUcxtpsHWFDuUxfREzY21GV24P",
  "key17": "2THDLsHgbzChAiAi6NLVgs5pg2HbStssqgXTUfcGVHwg97UwHg4UnDJ9FnuoeRrCxv7pdFztFLriqM9c6XeU9d1j",
  "key18": "48XTThjxY4Ww6NB8f8V2EuAFD4596tzpWjJWigJAJRrRUMxDkPhNFou8ZejbyMZR3oCLuLapRtdEyJDJ88SNSzXb",
  "key19": "3k84Qa94doQiT6TzjM1x2gmiwp7yUvJv4c5Cio3xiMHDgAxkYgc3MyVbvzJXUpAeis6DGqdL4PJCja9krVvuZMN2",
  "key20": "62Cc5A11fJHjUEQiPV9pPY37jNAo2CZmzbGQfLXXi8nAykzW4tJw7RHigwUSiA7hgMTJVsk1HHcoet1vjw6ZFsZh",
  "key21": "56jG2b77e93ShrLs5XVwagK4ChP9ztPDxPNu8mAMFVceWrzdSDmQqVC562ASFCGChNDGSCvnpfjZPu2NmiWJdLo1",
  "key22": "5CjquTDdeFrTaGorTNntUAKLmqAr431WZWmDohdzMgkTVLjbUQXQSqEmKDaBULjB3kdoeavU6JdqrkBRBqMeqxPp",
  "key23": "4YHqb68MGVFRAKXSUxdQ5fiwg36MAFpe6xxStQd5wKmFUTj3QQiM8gwGRRNRKKfKh1hQfRRrw8qiK1rQ1K2C5yjv",
  "key24": "5juAsFkuK2gawhg29L6AUQyPTD7Kttxnick88MNVbAAJUB2SWPsiP96qmGFegwxe41pruPBs1au184EPXNdYu1UV",
  "key25": "ZvzwsAXDxRmJ3hsTSQHi4yAkfsHH98fypAHnftZZjDHxLnexGQt2yvK2i3w4tKQC6zRV7THaLUM9WRJNMdnwrML",
  "key26": "315uSBSJZT1kLEUFGCW3jCC9fVQnmD1H9vxmk2gvfeQjA4R3E6KqTBhzooWz3jbg8eN1hRxVmAyqn819dbS4LmgS",
  "key27": "Bd8fwDDd33nTFhLMjjmx8oe9Vq5reRYAgfPuNo9SmDgPwzmm6Xh457yW6R1Gq4gh4NmujErgcwimoYG4Mkvxoav",
  "key28": "51p3yk8jB7ec5HH4XuBaidRrAoHanNvt7fxL7sGy5PRrwNdMjDHmzqGjA3Vk8gXLaW9rLZnyrUYjvCR5dZbiV1eg",
  "key29": "21o3R6FHxy2yxj5LiK8XX8t1Q8oRonax2ffL5AKCfHUXfrtdzza1fJu1FnWDHBrSc7AQ4388DriiXNNcjzvqgKfd",
  "key30": "4xVjGLZm8Kcii9bF1mzTyjx9SsqM5kDjpokfXucp3mvikfJby74WEPHjGUgL6zjuxxKnRi9GSxHsoLGuhsFJGiEj",
  "key31": "4nRa4QYayCe6tSgfj7SSok27C3qHetevn66AxUjd3G2ZptHaWVqJo8So2m97QYzKpMXcJaLTiSLuhKiZ1kNodSwm",
  "key32": "5dFqPqoT4J8uGey9YHTFQtZb8Xp4r1nqhvzovWxWULTwEuGAmpArX9mscFxwb1RckDwTHwj8HrWF4Xo2x674J9Bv",
  "key33": "3YWRMReGvpiz3t8ZNrBNbpMC2Tanjz2XMHeQKDHkHcwZhr7sEYmT89oJ6jWS7K91FPj4eB1GRnufzRZFq2huW1cC",
  "key34": "4R2K756SQkpyo3LJpgu9euGzWjDqzTHH5uZ8FwPBiZaKnZrfDmx5xoHfEmRsQbRxhrwC7qqav8nqgmYvRYVNjnV8",
  "key35": "46VDoYi2HBXsmsFL8hyqZzTTr7EzWKjpeFgYkFxbMAQGGrMVMaAELjF86f5hysMU6brM5DfPu8wrqDfN4TKray4z"
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
