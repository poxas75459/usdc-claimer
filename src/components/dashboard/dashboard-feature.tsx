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
    "3dwkHwThCibcc5bLrCzGZ1QqiRdaXdCNLnaEpajecuT42jNJkZRmbvf1S342jDgZp7dTkcXFFG3kTxDyg8zxiEJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Eiy9hT56ooQq2NMtMxKSNo47286AAkeieu1sHe7RBh9CZGojmrun6rvRv8AkV2oRc4BZonc6bG6FnyAhhFitLo",
  "key1": "5Jewj4NS1vQxzCc5y8WF1EgvxPjDEopuX5n6S9JHczzfP8rAViTwSnKYuqHXA2yatmGcV7ajVjfSAkM6HxF7Ybbt",
  "key2": "2dntzvYaJAs2Ckr8i3GtukmoTsE4MMDzFc91k98k6bNx5jLb98xE9qg5UXdoSUqf3wCNpfMxbH3g7yvf5cLeUcTh",
  "key3": "2D9jAq9KsABGh4QzYP9L6Dfg84Nef8WgQnSwkFFmaVFBzvebPwJ5vKn2s4x55BEa8f6na1gLqVmDCrCTh5YK5n12",
  "key4": "45ksQvQW6ZXM4toA9d1QGKMiDZj8itQ51BQV2kHN4Ry9ttTB7BjqNTdwxAbcNLpEJxTpVvGZyEPhNQ2ZC2wBHBbW",
  "key5": "2SP4znea8z4i4b53zmZ6fSKnb4w6yuoDT335vCnKyfauNxCviGbsif4wzFQqLuZkXPuZSrC8BUpKsRBtZmaEm2Lq",
  "key6": "3FkedkpbBkg5jX241NZoeBPsX1jWFMcpiGfmhMW8ECfWRafsTN1MC5ZuuFZ6zjR1RR98Vaep2jEfSnE3ukNbnzED",
  "key7": "3y5ViRDGwQXcR2YQz41mBvhDLr4NUvfG3zKPKz3kkirPYKQQxhqkNGAEPku67EJTE1w5LkmCE6L1tbYdFWWGvcpX",
  "key8": "3d8xYCvvFWFe8KqC8GEfEwuSotezQLDVu8oWtM6xCHtWLt7NiYLKUocpveu6dhWDwp9LumihjfkXv1fRXC8bJUoE",
  "key9": "2K9R5g5Dgdrs5idF3MHe1TWQ6FT4xz8QthpEwVRfkQmpx9Xc4ecSzmbNaajzgjVqcJYH25jT9cJdPvo2fwrhugVE",
  "key10": "314NH88vHDRU8JByqntjtdJS8NRqLQoyaPUbDvkmu5FDWWcU79nY68CpgvJiWgU9rHX2VmFRRRJAJXNUuWomRET4",
  "key11": "oSxgW46vLXr9xknkmg1W9azcRHMS3UkauBB66dUk8tsgCkwvBL2HRD8vRUoHso2jcTYXxemvNSB25Ei8gcWEZkL",
  "key12": "5i5cSVfhs5idtCCweczA1sFpKLd4bU1hVwEFZ4c3cqHRFXj4Q7uAK4cMu2avTeAhxBLyeiykVL11S36cXgyy4fh4",
  "key13": "5MUEpHJSAXx7mbyscH3PvwrMae6chooHwCGYmTGd9otWtvV87nsrFCZ87NGLuT8DhuyQFXLV5SLQVU19NjXHqJ5E",
  "key14": "4KB7oBCi3FbBtVemTTgft318GpiNLZQAJrbCnDCwkbtDXqZiNaaUidSivwVaVhPz1xQzLcpZsUr4ZfEWXKrRaii8",
  "key15": "23tVypyFFigmEFNgYNvZs3kKhcewVyGGYtRZwnZdCRNgB1f179aDHEcMVy1cv8QXvLefYm1UT5XSuQ6mgrXMfQeT",
  "key16": "5gnEGbkB48X49Qhkah73xyNcKF1bfA6H9yWcB6AJcv8iiBNnBeiHepdptBq6ch4pF1JDAow5fSYBeZksRCLDuwJL",
  "key17": "38ETs2xmmR1y6wicY81EoZiTdo27YMWdAD9zvSTDZk4sEt1z2NaGDQqaCEEJWjE9vW59VuFPKr6rsMuupQYcrDpT",
  "key18": "23EdPZZzTPBBntK9Fg1Z9KYN9tEoPAFNp53pG6ibzRvb9zzs3w5rUbbgopU3vYNPwtJP1vmeSHch3BmgtyPrxJsw",
  "key19": "2Fi2LANTRVBsL32awwycevke6j9Td1uE3Ne1rEVa813v6R1kYBCoyXVFGSz3ci1XEYBtH3gHGDHDkxQQRyLFfEH2",
  "key20": "2gWdVLUUvtLEhVyZdLkkH4dwr12oxtVi94GPAoXP8P5mQ8PF1JZ7LtHtDVPoboZmgSUitV4eUhusDbfVXa1dJ4iw",
  "key21": "kRw7d1kA8B1NrtAKJavH2guVBnaFHSZKrVoKuoEFw6uLkFjG86RuUMLQzuoaEs4yw2ptnR9LAJpbz3KQG8VWxf5",
  "key22": "27c28gJt6sj3ZRLmFMtsDGxTG3E5wwPH4TYurZLYi3e1VKKHKu3BtqtqDoLWGfw5DwoA2EUdByYw9GxDXwPFCR7N",
  "key23": "4ySahozF6JTY4xPPehhMr1AX1DEpr7VHUUpUsRorgPh8XTnP4VUT4XS59caD85q4oAvGqMQxHSEpzAp1G9KnzijG",
  "key24": "2eWCtpEHvyuDFLwmrT7gvvaC3H8QptsgeVXpQaKuT2n2WEJ7dYGA5H9Kyx7UQNnV4BXhrxZfQn41ZxNHXDY8WreW",
  "key25": "5X2qGRepFHrTQ5Vz9kWHpbaZYYdnukq7HyZryXTFoveRCRik9YPsu5nX56LczXAVoErKM3GJBAVBg1JcYUkGFN5Q",
  "key26": "3zrntAr4f6oZW8ZKQEqydnsGvj95g5H8Lw9j1jK318DeLkMrnro5VuuJPbKC1hMxZv9vYUNb2WracZe8f2fuCeww",
  "key27": "4GsQJrz6Pno4rywQ5YFs4CYJrcW9Uf4MeDpA28zioPvUvUPdCmfT4yuVLPX8mzj53VH2zqZ1ci1bTsSm8G62iyZa",
  "key28": "56a5oRBcmoamV8ogougJaH7uwGNLG7t3C79EkSgsfPVVmdxZZP2Fr5UwPPcq5xxv5xA4gTtio9sCtKiHqffq7yvS",
  "key29": "5hnPRYC9GhD7U5wNXmwvPYHGW3qhriJQt2cQQLB1Z32LAp4WqBKVqJc68pZDLQeJSUNUZT2XiSJd1Sn4rq2qt8bs",
  "key30": "5gYTFuxSgnHmgwddaD46zmHQunsURtn1BGUGbNJ7KErrXvfmxjJJxPe4feLsfg9V1MY1Q3pc6CaT3ZWT8LkYs2Y5",
  "key31": "4BHHSnB3QwCP279NJWLsPuhMMtnwt784viJPbJuFePDc5zqpPCdQeYWkaUMSgkU86tRtf9fgokYdPa8xakuvzqD1",
  "key32": "31sAKZ8ooVYPWSZ1LFfugsKqZDPapbQFuRBRfchLCAJpmTr6yGCUkvB9vJyXULjDhSYqRWBAQ3jvNLUktRmagWxw",
  "key33": "5RYik1qtTumcyBspZeEtacCw9AENtLFxi63BEb8BxZgQCw7BjgRU4edABwLJBeW7FhVgtyf7pDQ5FJ7vopGe198o"
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
