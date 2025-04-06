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
    "w6ppPohnRY8RsSAEQKYp6wmzTwiBiuaHo3nm58cb2HtmzBUzHSJmFff3R9StSQHttPYJBKZvMWg6ZnVDa9mmyGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mV57ZDLnBCxkKxsc8b8KUeKQzPa8oF7heouPC7Vfh1N1zFa2Nns1sWrcX1gZc11EWXAP1xWHmPKaDQBjzncyHJL",
  "key1": "5aivK2sebkHpe8uevP7QC7s5XmaJ71Yww9Dw8EqWo1iFKA1Vxo3VcjFsqUJUTSe8f1dWAeSpjYHsQSP9hTrMR3Av",
  "key2": "5ov1bmw9md4LrEMXFqENUKXBCXHqK1eD1gns7TCovdoS7Ngj9pHfqzbyqf7htiG5uVJQ7d1RspwWzp1c3px2L9CL",
  "key3": "2JBbLUFVWStP5wKNi7BBqNokvKrzD29YP2nDDejME7R2pbiRpmWPGEMFF5aXjq3pUq8QbVXFcACqTsa8QHAWwYSR",
  "key4": "WrfsZp7qbDHMArma8bzVGqNwmBDCoJ6MDFzGWB9yjVhv96maFdPGJKeYYgUHoLCYNUrbr8hhf5UH9VxFGQVxgkU",
  "key5": "hbn31zG7h4CDQ8XVTFKQkAwPkYAXx9kfpXdGTbCA1nQDYgibTCpf6cTg53ukuUna8dY4ijc9wo7QCQgquGfRobB",
  "key6": "FwAV3aEAK7NWpRMdPNTGvQcKkeMRSXrPDC1zdLjA2PkgR9DNedSbKxyENwmjLxa9yQvznVTQU1tZupuRrsFPRba",
  "key7": "4ZPY4vKKENZ8QX7eFmZyWPJLVMx6v3BToLybFa7funmbHz1WHru42uzzuaCFiZwbzYu7LozkJsdxdrNrWzv7sQBv",
  "key8": "2rJgFGrzsdZxfYatB1TXZE7JkWcVCKhRXuxFQH8AH4xcwMo2G8kg8mdcpvD7UBwRHnmi9pukaN84FPSef1sBEWU5",
  "key9": "2FXC4wNdN9atvRsMX5tRnKAz7fpafzfqrY5xdvdkZmhJL9QLWUiYpLCeg6MsUYd9Vp8yfJmCCzT2A9owUyHmZoWS",
  "key10": "5sKQNe5LDLVm5yTfKQCwyoZSXzmybpj7vWwHABnjJrPW5hoBuccCTb8mXot4QrQKPRxxCbJDSy4RUH5cydR5xcyx",
  "key11": "3abVxKNKv51YnStQdQqVdsaPMhmhPAw9DHezXAq7RAHcVuQ9y34VVxgb2h9NTVogd9XR4mh1Dsz1R7xfwQKJ4Dio",
  "key12": "2ktm9gVkPeRwK6KBjTJw8HWhYxKra1wT5MxXRDz6fmqxiZcdmgPib7XU4vUAjzTWuZ469ejzjgfjoPBFBd1JBeKN",
  "key13": "jQf5wHfNHC7YQSoKGiZ26VxqD2K91sKb6jewLVCBsi3mYP1Co1P1SCoK465EFeBfQShRbqg7TxxSMygtjmotKCx",
  "key14": "3UvpZePraZd45XdkZ8pc5LdDUttd8JxXfCEC8sRVJ8434Xnxca7oaRqMznJzZUjd2eADRhjFbXHBragrc2oPyvrY",
  "key15": "5wyAtSbBvfZT1r6af2zHAdfQy1ci69XXSqMJZ7TtfaopCUHBWqLqdPGN6UA6DDjxT7gTdTfBojiVKSxTkQFQRCFv",
  "key16": "3j9TajX4tEPMrmW36S8PhCbbNyfdhTz6wRUTXPkCMNFaknwqZJFDEM2oLo35T2q6nnAni7vy6DFGdk2rs8rwARtJ",
  "key17": "4UNTfdQgVL3sWy4iwG2qcT8zZTzbd5fJe2ASBuTTwuWu34xuK7MUZBsLX9RmMAAgsALLkxRY9fMBsNKsLwgF78hh",
  "key18": "3yem4RR19jnTbKEL5JrhkUNJfk6d8twyMzhAFsLo6PGiRCBDDkd2pN4NufRE1zdphUYiFgLup7MogLtzaVz5Z5h8",
  "key19": "2nGNvgj6dbfdB8kYoUqggCxxN3ssxVZYkMjoWKzW1TRvkEy13EwZdz69LKyeZJ2t4EYDySGkDbYnUtMvP6fVnRg",
  "key20": "3p6T1sfvSVsHuAmAJePvQvzpqGmiGpAfPUCjcUTPYndc5AJvV9DiGfoqtTjgjFDUv73d9LoT38PSFWjdtKGSvMry",
  "key21": "5T9bixbyEqwSpVbWQf8dDYG39xpgCdyDkW7j9maZWXkYM1YNjwibrgunzG4tTrPbcYWcskDvffjFEgUYUEYcSUWK",
  "key22": "5V67NYN2z7euqnWSMfVtpxSVmvgiSpYoUaAmdCkRJECE2wBGMpcgxMzuBNC1atBcPBsjfU37ZcxWUjNaknxYoqHj",
  "key23": "4HPCRcrUunrnSSq8N7RPM3PMi6GcgVvBs1gwbMpovh16vGXtDdf7vzP6wamQkRpKdj7ocQUA58xLC2xybyTYT2K2",
  "key24": "5Zn8m4MKngf9aHroSrPue7SL5HVQ1bEW9vFv5R2hPPFcbF8VfiwQiugJEMbUk2XnoRxv8sPovqSQshCY5mTUkZcF",
  "key25": "4voQhHzmsG3W5i8D2PXzkvrdXVh54X9QghhVZ8CoUVRp7SxrduCnue1Us4UeZ314ABJgcLRdH9NzYNuF2vYdLLhQ",
  "key26": "28H7eL5bysx9WRusRqqDHzYbBvhNBacYFHCoxqBdwniwxUbFCuM6wKk5WA49Sh4Q2SfBoJkL92Gk458xBfWXZ6Xz",
  "key27": "5LvRcub68QyP8mKwKNSQfaVi1Proav2CwJcnXJfnkSnerHs5uRbnEMa356o8Snd96uPYDGNKov7ry53Jt4VgGw5U",
  "key28": "5yJcqjBzo14fsEdxQsWHEzfJGh21RSoMg1TpC8CY3MvDqJhWhCqXpAgz5E3tsAfXPtg69mRLCuZBjVzfHGRF37Y2",
  "key29": "4CKJsJSmBCpNnQ2eWPXpwgiBzykj5rWUUzanTpsf1EAeyzgRxBB6WHQatGM4ZZftRHZhsFavntGkdPSJVpnMzvMN",
  "key30": "YUZt2T8yeiPUFkmGPbPqNysY1haAwkK4Cv7dHGt9uR6AEQEYX7JEMR2Bdg23PwPNPqSM9vHCR4qPGZTxtEQNQds",
  "key31": "5USYfPxu8xCiosx9zznCT5T6dsgVDg6nm6Qq4LMnVZH4k83ak3QosFgkzDgusfBa1BccLFrarGvuhnbTnEbJ8Ds7",
  "key32": "4obbikwawEiAsJn6DuKU8mgLyGzk7VUpn2A2bYmFVbDXUwq22dwXZHu6bcXSJ3Lxuy4YyeNcEvfSBFg5qSY4cG7p",
  "key33": "5jQRpX1CLYMSQMLB6FSgTextLrjyiZZuRNAyNi5WnZoZ2LwuLJkCfkCcpL6NKw4KezzYTNvoDDAkXpW4fPsczYJG",
  "key34": "BD8zyWKt7a7kis9FWCwwrxVBWArEaxRwetwvijueNMXJG4zWta7a9X1UuKZEN8wEZiAr3wNVhsfpJogEGubpuVK",
  "key35": "8G5wYPSumagyq5EJBoCp5JYTxZSdwg4h8Jdu1yLcH3QPgsapi3TibhyeeW1xfuMuiWjUVHeGA3BSyZKZxkFrjDT",
  "key36": "45v4uHzzhLwj7RRA9BsbaAqKyW5uoxvpD499nPEZrnxsDQ9eT91ioKJp3KJTN4DmgmzQv6eHQ4ZNpP6TEdhq59AR"
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
