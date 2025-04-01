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
    "5Jj16mAiGWHCsyir6ZNUNunaPz8ZkMH3PpsPgwYc5mHVM2Eo7TcfDFATKFRmzJa3qMBiMAHxyy5sN5DnSkZqFoDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sh8Ynf8UdkyEjWX6w5cdMo86bTiRzqQXhbm9yBrSmMEmWYtqB2zR79jGH1KUXCgeuwUHdKizQY8fo58nfQqn7RJ",
  "key1": "3HyReutY6TpaA5nYmyQRvq8AsYsD4cMLeu53hdHtbVrZqXUa8wfBHEyteuqQ8QwyEDyf9t4JAkSiqYqKjUqkguT8",
  "key2": "2aqdbvWKzFc3WZGHrLsPjAoLkmQCf6QAcvikQrGUVmXbfBY2dMhReEefYTix2rbtJsXTkxhSbnXZwncDE6jU3PvY",
  "key3": "5S5w5j8RFv5HnEvfQc7i82UD72fk65KTJTBqwkGymM86iMViVgBPXRqUguqcaxhsrYhyxPCQQmJSkmTziGDvMY82",
  "key4": "2k7hw8sqbhYVgxUcJ42gxW5iUeoiGFBdLhM7sYVEdfLq85WWRZK7y7ZibbET8ACxhR5RQy8LRhhZuJ1fVtNByvJH",
  "key5": "5EKWUiLXKKaqLXECzwRTKJu77gqyYpQ6dz7cAYDwmtYVhCkSicecKdiiqapFGZZuJS6ojXhVP27eKe2Gkb2mMYkV",
  "key6": "3bukks6WLbocdYc3PqPPyW75mqoSovV4VHLZ2THjgrqksXxNXNUi5ov1HCsyLtUt7MfM4QRkQQkZDbcsafJth8wP",
  "key7": "3AKwP6PHM5dUezJw9BLU9B5mvNhAYraTmTWAgN78isAsooszjpvU2foHU1Mf4AhXzbprL7ZjDarN97Yoe7FeNHqf",
  "key8": "CXmM9TKvritzGTh7pvJCr7vYd8KhXx4KRd25i5rr82Vg13ihF2k125U1x5r1kNkEaUg7h2pV1GwY7C2PJsRaJMh",
  "key9": "5SfRxHzRaCBuZDMY4NyWuD77rMtkocD3LFKxuKgPZjsnqJrbVMLBT2UEuvS5qJ5JCy75ADPTgihvPAjmNeiVy5fR",
  "key10": "4tQG3jMaKk7AdA8f1ApvJL87oyoAdeYVf4tHiD92qeW4xpQcAafhbmwG2y59oQ2i9XCF4XXZrG9cvNzFgFuMWNMt",
  "key11": "4u2JXFfRo2K5V7Jeub7uGiVHXYky9g67jLyiYqcRSzaDM4m6TtvsKZheFiRtviWNddgvNcuwJ9zqorVMWG9SwYXv",
  "key12": "PnhYhhBpdfF6o1MhQ6LG1yo4DEFgESDrNdVT7Vd8sJrU5gwDEL6nhpDbStVDS3jYmXchfy8Zn3tYnSnMqq9YHMJ",
  "key13": "2FnFd8xAu84Q7ZZ3FLApXuhvHxyQutA7Lp5z9XnZrpA8emwwFZStkeRJsVJwkXn182FuoGfQkNwGRJn5d1TLs9iA",
  "key14": "2NLfFWwQNZ6JyZ7hpPX5TFZJ45crcrzEQUMiYq2JYTbeS9brBv2nh81HgjXVupkefkFA6z6acFEcZR8p4uYYqoKN",
  "key15": "ZGuMnCVTmP3Ng9ihLRrKuxLoWRSn3LxFJJToGaaivdVYKQ7eqUPe6deRTPqpCgu9t7F4Cua2HR4GsWZsgcVVp8L",
  "key16": "3sq3JY8CrstBPS3hwwkmaxwMpJWn8h8T6wT3wy5S78zYUQFbAKVtai8vTrMs6mZcX8SZSZtPk3z6fguaNcB5kpd5",
  "key17": "2MFQ3NWCR9m6P7JQK2vr49mpZ2Ja5e5ufqxfWL3jaT4av66mMWZLaHKK4y1psNH9QD9LmTQgkYZUEczi9yBfgtek",
  "key18": "3Wy76yZvxxQY8PoTmqKMPpVFm999vB6HcZeZNCe8VP6CmYvhPJM7Nw1zbfeUopTQ3LA9bzxprYgos3NrfDycqJjP",
  "key19": "o4a27vRqgUz5e9oYnuyRXn6UN8QUA4YYqiDwfdDySf9yC5vWeT2E8D3Yva4HdgRtzewzrdVHQDmFhP6qDghPyeV",
  "key20": "3CgbX48gmR5nEjF15uURgdc69SuXAjSjn9ymQttCCpm5oVQvtmW48rPD1jL7w9uq47h752k69b6FrtAFtvDuLLpR",
  "key21": "SxsXxze9S8gE53zQWDMitM2fGdRmX537L4oGZzTVmGgvCQEGVuioZFuKb7v14uGyNj91NUaXwWw4Syy1dME8hfR",
  "key22": "2DwKKBLB2FAtU7JZd5SmeQkhB8EWMDUqX7Vnxhbb77hCUMgmdJU4QyTuwrhHAPLwtdG9NA6LJEj9nDYox9QcAEjg",
  "key23": "5cDpnJyVVbBUXKfSrE7ZCPtT1NRsxW297MH6hEw71WeM4B33rUoBXGd7z9LEsCWcSyRv3SqF8mFBQRiCDbn2Kpqy",
  "key24": "4PBKZbszxSFSbfBBWzJ9j1k2ceoYRMdVD9xy2WHd7NqyndcXyt2c8JkxxhJD5mrR1iRgTqAWW5btCRzJcqHGMzwm",
  "key25": "5sQqLeRGxEwkX2XwccR7iVmvyCjhR5jmW3QoGXB6oUaGDoH7SAmrS5QVu7qprz7XEbBYSykHz3LAzxHtHTtMApo3",
  "key26": "4NETmYzW7DmEaB3Eyxj1EjmC5jP4VaUUF9Rn6tRm2WqgKZ4JvthBRiMn4XvDxyjDCiKuwheBBz9iooecTL9CG8wk",
  "key27": "4rnzpREwD5CCpDCMwMvCLVPW42uxP5vWXz7BVdhZB9Bh9J8WT4iCmXr1kXesJ3LPs3pAQQ5k7AUj55uqnwdWxSHS",
  "key28": "4FRCB3fD8vyeT2wrDYAueFYd6LJMZuCgqTxig8SLBmPzYvKpZVQDbiTmQx3iuFC6YmRwAg3t3vQYrfgqSz8cxrmK",
  "key29": "3yMaJRM4f6iVFSnnkCLuf9op2UWnEerkMc5JeXyWERvE4T8btjGUotuJTTM1Mi26ewUkHU5VXihhsDNRPNiR2kPy",
  "key30": "rhR5Rpb82H1gJ51bsZ2CgtkPzR4KGFfNVFm1XniZVNimM8kfCHexBCjsnvVVkRfsjcmH5H45UBd4qdXSvKagzyT",
  "key31": "4cnXngFhL9EigB6tbnM9k7qdkAZ2xM4hrTrZNEyzjo4k35MrcUzc4DzPzt761MnxJ4KHyNLvE6xEVmzW7dxVhYQe",
  "key32": "5uo9n5jVAxZgE1iBWPgGS4RBeKt2qfcDTXGskxB53XUNAoGp6shsLbtdJfx4oJ6zyYgj41j7G2vXptrek5Se9bQx",
  "key33": "325nbPHSQeA1SuSQbTh9DbKJyoVmK8QUut8gamdX5n8NMqNwKemexnxhvnhbkCvFaPrVmzT7y2SRcpAUMDGEatWB",
  "key34": "2qoohLgTsXa34FCqc96RemPXHhGsLcBeMLqfS19s1HAjfKo2d16ipD4iUvLTRLhpnB1GZ46jqJExinQHZ1xxRu37",
  "key35": "4iEkYmJWUszEPpdT8o6RBDMzKmzhPyv2YyxkFVjZR5Qu1ZGqyHESELsrbxqdFdSasofjcz1waBkMGbhwqwiPJQpv",
  "key36": "MEd3kyAryK52wRzrmBrKuyDH3feyNo47otUtVodbztcccy2t5Pp6MEjjQKGhRqz5n3aSE8fRnJhq4WPHvGo94Ap",
  "key37": "ywnyv9ZMSW2hK4qjZihDEY2NTDnPnXCxLY5dEB9Y298YbMccUxgYfFVFihwi9MbHRewSDZeMLurnLEnYs2NXg9E",
  "key38": "2coj3S6kMq3gkFfRknJPW3uAowm2mbaEoLUmZ37c44kUVMbhfrGRTinVAdE6yEjMCu6gf7DNERPFMNqqVzRLsE9Y",
  "key39": "3z2znTz345nabnTzZNAekewvxMTuR6ZVd87TVCwkPFkFPP2zyTZvBvWbi7gghLZUGHt9Du7eNtvnqJ5KqFJ4Nwvz",
  "key40": "5etzzQnDKuzMFz5i7BBDFF1jH4bG7SRg4oyNNST7Fy7pgmsH9aWQP6XqmGyipq9jutqDdex7U183dxrBN14G8Q6Z",
  "key41": "3LVcVWXFs9z15gHw413i1BotkDXvQV7jjeaPYCRQDByvLn2f1As9UNzLHPCdaNYL1j8NNhMFrgJBjv8we2NwtTdy",
  "key42": "2hs6NxR5tnn24ts4Eew3Yx1GjSNSGag16yDbXK8siibBhNnTdpQYymS3DRt3rJ4N9x9N6R99CkV6PKk8qWF7KneQ"
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
