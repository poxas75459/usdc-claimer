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
    "3GQt9wPL44jcFRowTuvCZcbwcoWBsL3VhudCfiJr6NPtZXTLQcXdcKQNxy3cHuWMPdvFwyiUBqFn1xqf6GPipVbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oRTfjGGYHoxa8No4H1PKGog1Zjaa2z75iVVfasyfdkdyRzy3ynixn5GqiruowG6gvNYTFwbM6PGqqFapKuCjJeu",
  "key1": "4EgaPwYN9p7ZE5ogngkPy8cFF7ot2xuQXL1nLNutVw8nRLKXrmwuUz2GHpZ27E3Fpgv3gvUV6HkeRRcdfvbeMnf5",
  "key2": "FF421c5LwyfWwZma1GkzzqwuPL7nDRvcGXtoC6utrcViuGjtUkXLbj6fuChysUgtmVgLcEudyirE23nsw8jnzcF",
  "key3": "4yaMqB8N47b3bi5KLy3jHKhAbz28KfSDPLiuieNcSgJ5zhZS14B9xYRu7Df58KMefeuNbjw4cPYv5TD1Fn2f1rX1",
  "key4": "pnBzbdLoG3Ja8jZT5JVm6X68ADmPTh6Gq9J5kcaBD159xgWpH6Svm59hw1TRzJw7KiaYyJD5Q7Nc8vfojJ9Zjom",
  "key5": "5jjrGPzVTtxEQNR7NR2tTL24F56wZyydHeXBTj4tWh44mYR4nebDDiNNT9tK5SxEpewSdChK9Hu3vPkmtZNRU7tU",
  "key6": "4HASCt3XCMnFdSeXRB1BE2VwNRdbgeJ26dDbqNoEuRuAoA5BhpMsDmQjUZFJDbQ6K7nJiH6cuVJaoktXpSxv7nCc",
  "key7": "2YUfBmuuYjNddZz71FzqLtfgeGerfF5wue56USB368AbuBbr2bEkjCkyBoVc5xYLJYut34kKwjbB16wnkMcHdEgc",
  "key8": "mKiZ7Uock6B1V25nZR45oL4hcq2yWToDPoN4fiLncvKrZo32S4AHLtCTXvyTYPjiAeycJQfwfjCRxgcbBPktjhZ",
  "key9": "39V5BVLhKnFueL8voYjafWf5AYSqASRqfCBjZefK5uVMoEF6f845PnYSj13syovLwQDRnjZgG82aebwrVPPrUzko",
  "key10": "2emvEFL6HDrBhuxc9HFQXPdR8QTkpt9ZBdtxaiXsuFfzYYzPFY4dvjuPbG5ujocTaSENKwyheig2Dx5Lvg4ysWhc",
  "key11": "3WhWRP8WZDDZVpjZHAgNpi5dxEozxVb9VFrkNcL8AuodvFXC91SXdDscM4dvmvfXZyBfSsXCpg4nnYTtckNzJPSb",
  "key12": "639HDu1D3EmgTQGw6mzQewsthXy9agFRhBQk6uJWvgaCyc9WVp9L3Pp262nrsYKsRWD2nqLTHbTYDwjRXPANU3KA",
  "key13": "61WbaH8SxQYCq44HYrV9qvhM5nM7BJqaQnV7yXtqy4n5axjaJ41XmQKLytKKSkjiNBHmXCpip8q6DCMTHMY5JjJV",
  "key14": "3Dod62Wp8U2ekuuqfW5QGdkriHNZ2tdETEwjDRBUYooc2q2ZTQKoi9yGtiVEd7z1zprWeQgXw3eCTyBUAgyT7VTB",
  "key15": "4DniSzSBTHwG6mDfLy3eigBT1n2LSiGRK5Q5XoSkjvRdvY3YhGapw181WGde34GJ6SUzWsZdk6euYzARSSttzUjB",
  "key16": "5fNfp9vK3sqQcv9RF7STwDacNX4ygP7S3QdcaUK11CbAKs8wStNJYEiNtaT4jm9NgFMAu73MwwNeDzLTffZxgW12",
  "key17": "4babgcKcbYDTAEAbJjsis41GpTUYPXBaWmHVPZj623RZUy8c31yv6EXModasZ5kxnQxtJ1PDjBCbTCDfYmtrngM9",
  "key18": "2wusbDgrSNNm9xYPL5tSpfKQYAXeLpbjb51oUXWZa2GpbRaphYXc1QkE36NaqgeMkWeKsxFxA1EHWozqS95ZzM7A",
  "key19": "34mTgtJKCznSGaf22sEB4JAq18eovkWm2XiVqux6fGu8Wbkyn6Ri931kf8fU1FEvMZmkqwEP3YwDt8bEJ34xTqdv",
  "key20": "Fm2iFRubYCANk4Q88gxEPuZawcAdbPXzFFoMkh5JtaZGaFFSPpABPXqqe9Qx3dbU25KN47CVaWfdBvSi1KCSTbA",
  "key21": "iszJm9c1tYMb4tiqkAL2JSCwM4uNDor2UVEuqAXgrNBbRyCCBGU2JW1YY7G5QFRZEExpjQSmgffhwsYEUU346B2",
  "key22": "3okNxY331JoC7DMGSHYsuNxAPuWyPFqCFVmLGmnSvp6HEFthJg9kRee9TqrdHHAB2WaZjuDn7QrmH96pnYfjEKgh",
  "key23": "2RrGyzWkz8n6KPS4bPmkYrCojrojPECURMakEm2RdQ43UL4SyAWt8Zj5LWeijAHDWYrpbEhjV9ZR3ztqyfs39Le",
  "key24": "3fCtXmCNwG9ZAKoAXJeFnV2yjphktcW5Yf3cB1KTjV8a6bmqpPKmReDvR5hoGyFGmBu2NTTQu7ZuWfu73DTuqWFL",
  "key25": "B1bxSgryVpykyuWLeeKb2dhKc7NfPUKax6nvdQ3jmjWYLx6NdP43Tu5C6DsWr3xquptC7Kskev742PZpBVQeVUP",
  "key26": "3gquvKpYVoKtRDrcHoBrraeNKqRSczXbEbGcpNQB8X4oznMKgAdqvwUZ5gFDtErWrqQz87FF8xf5zm8dEQHUzs18",
  "key27": "RkAxxbiXNjKofHJxoRZAmKRApuM3h6dN9B4aQYMGxpdXxktDVi2YwjaTn6Y19nBcAgQCr3MwsX5kbWTbjFw9NfA",
  "key28": "4sMPjiByRyk39ZBKfQSN8z9rUSNsDU4fWFSgj6yavtpawHNkZm93QA2WPQE3cgdWM3osmuH3U245VhHhXcNgwTHw",
  "key29": "2AtDHff534vtwfLxCAWuLG41S3yRqfdxGp1uTQALcdpDkjoMQ7DvNdx15t8TbtDWErT6HWByGqKPJ7XFUD9fgKLp",
  "key30": "2yZXaNURpLxSGSHvvnLNhFVX6vQ5B47nM7LSaNpnC2LgSJsdnCv5KtUkW7MQQeX63rWLVrF3DHeTK2cYnogvgdaz",
  "key31": "3AYMDUnBZrobPimCp1xgdMcW58DQykMPyq5KBcuRfdr7heV3ogjc5ZwhxmS2miMu8DpTvxNpqMN5zcJbSAMYtLxd",
  "key32": "2MUppJaq2ipBPqHejufS5oLZMt4bw3JDAyAFyxyGydJLFAzSyA6eFNusL5wtGSVUguAHxcoSr2Ln9WYcVkzCmXPY",
  "key33": "2BAaaCL3yWNS8Wgc5APfPEdsmxm1GHNW73tBJMa9kNMGEP8jbNGVNyGz8X5SUKugDdf8MwxwuGLoKLjdkYqbJLQv",
  "key34": "3Y6oyXXj5UJaP3FsvQiy98VBKZAQKbvEQfudcbKmNYeQuHizc6PHWUpxEF8yuSBpdUFEvWBbKoXWPVBCoVSWbRG6",
  "key35": "4jeyLxXDtEgjeopNZuL1yAuEfqAoQQBZWbZxTNTyh6SbjaKcLshzfnfpJzys9ZqQnQzvFN1Sx9kFQci79Twv28jZ"
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
