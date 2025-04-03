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
    "59PCAw1SfR9XAygDPq6m9FcjFV5KqNohKZtTXQML1nERn1hWMVBTkqzSc8JSoLtx7sTuvsm3Vt1UtgsCLBKhpmVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R91BTqfksoob3AuX3Hw9chMnZ8jPgR8jP5wNQkUyCYLrYaTnzJzWUhsjmSK58QQfxT5378tAL298RghTS8mUfGi",
  "key1": "5msmC55Q4WEs7o7dPotfzv8HWFA3p6aKFQk1jk6x7HBtYCt6afPUzo7kXhoTHL9Dm2f2mBHdbqc2NmjXPDnYunba",
  "key2": "3zcy3CXrrFha2ADrRNmUxEtdHAM9EjanpxZMLHjGhAmbAqDtHxNCzWhZkp1ikxScQhSUmwbgK2iLBhmiJ68WXh7F",
  "key3": "5L6ds1tjhEx73YbdZnvjjqDrqtz4AHEjw8sy9GE6J1WXUYQigYGRD9EnHRuLUFxfmYbfwvDRcxAWTDWxuKXtYy7J",
  "key4": "52MW8BFFG7qF9XU3GqyhS3eSykorFGZJnJfYGP732rpDw7Up2emk7aQs3qTWvu2yQr3r4HYTJa9CvoWTvDDVX2qJ",
  "key5": "3z6xAn6Fu73EtTh2Y6hWGfC9YEQygv4NkdJiqQH5MeTVNkQTKboqx5YoX4Wb4T1fy2gy9y9BYnKFfwzT64rXtoQ7",
  "key6": "4VLyMkgYmeuBoXBgfMK1P3bmnFnszpsoxLtBXacKwTXKxoMCe1q8mqwiWrvuZQwBqSyMHssLmXTvYAAD84sfTopY",
  "key7": "3qJotTxgLwVJWnhVG3cQL4n6JfxHTKettvCs2dyC8gLrsa6f97ajX8QvyouZemdEZBeswQCNjQHeHHzpcQsBFiod",
  "key8": "2vthJmwogiCcm28aXwmf2V1heSADTnjhYH2RD38vvckjH3kKt9Av8cda62TpyyFnCe9q3ATSyaPu9WS3qmfYHRBz",
  "key9": "32PLejsngm1T1T3JpHAK2F5tSK7Nec7nktHWKAeDA2b4QWxMa9cxwcLADonxKeMkDz5yNwTPsQWKcNNALH173zEH",
  "key10": "4Lbbf7vDBce1QAEAcSRy7VeJknbRWL5fQaJ4urJpfknGrvs9K3eHSCEaCn919MTfhj7svpM4vfUGhH2V5dev3vdr",
  "key11": "22Z65VWtYvugtFyZYzMs3L1Dyz6jX5VosRXjFsh94yhq6cK5C55jT6CLpZNTSPj6LM1H9h3RxSKkgPfmLCnN54xF",
  "key12": "4oG58GZ76rdcj8ArNiSSYtJDcQRUB7EqDfHiVmBHs1K1AfEeoF2M9ywEbTUwcDnEoiEKs5zYmx1XUXeFv6bhhPrA",
  "key13": "3sBGF9A5XgXH1SvxiWGh2aKEXm32oC2FgNfD5RSrsBaCbMKMVgXfKRe5H8hnuTmV9hy77w2natqpD4Pn3DSdccgN",
  "key14": "4TqyPm2Uun5Xpm6L4fmWifrUS9pVXcYrPSXQfeJT8EdqipdiTCjvRC6fioNc1PC6YcR1vkJoHi7U872ATRjHPgQc",
  "key15": "5QAfJhxyQMdF2zLU3BSUf3uuy6aqPTV5ZDSVjnCkNGcbCcnJsunHzkeAAeyDZeiALJ8bh39vZn4oASprYPcDEr2g",
  "key16": "RJd3dbj3W3k4jKq53X4jQ9mt1cjbjT3eWa1JyH2p59qiUraQz1PYwzf37M4PJKymg2prt5t7NWGCqe2JFAMsf7e",
  "key17": "47QTyjQ4XCy1RCjdsC2BkDKUqR73BV1U1xbqzzdDpBCCRqDA4dcqChymwrmWq3pBXzWaQxLMUeMe71y2Fo2jzvkR",
  "key18": "2sx3oPXCfcixX73iG1Gn9MNyEdKRRf7WpqmLkqYTckUoE1eKfAza2dpQae2dfFUEj5xFMs1x7xuAQLvmyJqc51SL",
  "key19": "3F7tXiUk2RvkXKMAFQ2GtenxyuKEKXsFyGnYSnMjQyFoaEjiKY1osLpvMK63nycj4f4WGnY52RYwfkjJgKG2c9gC",
  "key20": "2VVfZwtm8KpBx79QiBFfBFjM8NAaUCWG5FuyxPGEdATDXEQZN8ovQLYXSYtiVz7SfqGpxLwMzXZp2ffEdDmWrdD5",
  "key21": "5XH1ghkvWx2VqJ1MWLeBch887b8p8oD4igP6U3qveZNHoL7N95jxQ1HaxshFLJrxZEMcPvDoM1uXTK8UjuBichvh",
  "key22": "4QSwTdanFDqKMPsp2vK4DeZ7fTbf1koZiyuw6oA3MZAJbswxPfN4hmUnbRoLeq9munAgtcrJppxtdqSTN9Uya7Kk",
  "key23": "cJk7BQjdkXarBdGkAjd71eeto9SwQrCeJDeSqFz2T19syBvmn1xFwy98CZnXjdy4vjajhB4EWtL5Pq2uaRd9edS",
  "key24": "5JwW64bKrNKr6K6MVaaFXpyKNfq9gXYteJuWcQVQ8R9P4q65R6CbsWWVKewv4E9U2zA1KciLgtPFdoGF5H9rTSuL",
  "key25": "3sCYWS7RhbvxwXPv29dNfM8xP5tX45Yv4yPRtw5r8A4KPKtjttqGcUb1d5TzgZUmfdUKHSSX1jcERbpFThGNg9xR",
  "key26": "21LVfDzeQYeptCEyjzxP9zJNVVnoZsRbtjQ8VKgd2NGauTs7v9SgYCXQrsVqGvS8iouNQSJr7QvAVr1VmmdouNDy",
  "key27": "3Ygk64apQ67xwYKVVne713c328DF7CbyTsYocvWdhU82Y2mvJRmpk1uW8Ay916PZfcYr1aXtxSa8HK8BrSdEpxhJ",
  "key28": "5bJ3Fbze7DHRmuHGuksTAX9PmBD3TZtUGjNtRXKSqhnqUfXnfbRt31KfeUrAQkMksckiEyT1bpDiguR5RwgcHSxu",
  "key29": "2XZWkcymB5ERc4mSYs1dHuWfQ3jFjAWVBbMLFfLUZEUv8akBjGyFdpQ588ZojiUfHQDVPW56Yiai6k91hY8pVZga",
  "key30": "4Majy8odXEmo8rz5TRNfaYDd3XbTKhzJvpAAEUgR9YHzg1XAd3yAbM6zdwF2BJHaRJAXnSBwHUF1Yxo3vFePm5F8",
  "key31": "4vtxHnr64VpSVGiQh6TNk5TP7vXGQ8zQwfaviT6DFjz1EwRC8QBqgZui1wqDVT6KjXUhqoQY2w9qSkCnhmK2LHGM",
  "key32": "34VTAaRFefzuR88r5Bn1KcpXBx74dArygSkieXZdwQMWgXpvQhC6LhxcaUQXvhYfuTGe1ruqigqnaTAmPTL5DZNx",
  "key33": "2vC61L3wWY62Md4Y8HSeFZZqeacRqJW1PP2MVDiqtEF9AvYYdWSCoBP94JH5fApbzj4HPiutPMEUHceV14RtsvNM",
  "key34": "gNFnanMXnUsRuXokPZpFdLJAf9yEarsL3Cqhp4Gs83n1whe8kGj9FKi7VmrZdDhHcZrub9UnFEtZXetpbneF412",
  "key35": "5BZsTTFFwuDKRD41vHCUfv5PUfHeLMjmhW6SVkhewdxRMVrUhZK1mdHn4uTbTPFc8kiqCfhuJBMSSyViD67Ku7Vy",
  "key36": "27RaGT1NMLzctsLbereHHMx9GLokV9jcHNeZs47S5d6miAXgzF18AkQrc1QB3nJxG1gKMt53481EYAqCLoqhZ7mu",
  "key37": "5ynakZ4j3rb2hRrrrYJkp8XY9ZYhiMWar4DxWGuv9viseD8pZRWxThriSc4rbMDM6w3A4iNohgw8FA4tNJuVWr2N",
  "key38": "5AdwhAWWnnTiwTdT4fM1YgEcYBm5m9U5zRn3h3y9ktge2LJ78g7EnS4PrD2Cm7pAxkadyka3jFgQk5RgvEbhj8N1",
  "key39": "3P8sABbWiGsxyysVZk2q94nGP9KFvJpbSMVmJ1sdFLXZRUMwakqcXbwkYq9xDPbnh32ZHt1BqmUeALVxZ6f2xwcR",
  "key40": "34dTpDybSRDnC5dtxjVWhDr6WVJ9jbucFW7SaK2stwfuK5dr3U2iRPVFVsW5mT6nm9AGxZwDFr76i4FLaR9c3a7v",
  "key41": "5LZcCwnHkoYugUUr3L6uVXAV5wtoHHuT7bqpmFRA4pxLvZMPpY8F6JvxsjzviUxpG84zi2jvDopMLD4E4QXWQWXK",
  "key42": "HVY9vcjJcQDWokZVPKN8wHVGkG2AvoCRWcz37UBLyX59wyEogGaPVPYHSY7wZwpX19DKdUoEfVuu4eg1UqX2AQm",
  "key43": "i1QD8wM5wbty1x3RBHKkTHkubLBC4WP2wBWmDk2bcjkkCYJPBS84986MvRVKLdMskYZFgVKAcm1mGDsxdWEm24k"
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
