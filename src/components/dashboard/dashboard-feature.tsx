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
    "35R1mUmxpmyLyfmPEtWnJu6wRVbvkLdE5UFK7rv2FPVQJ1nPJExycynD6P8dYPifh4HRj5iWptWuapB1W9AfD2Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XUceLcFosotMV1Uyyri8BYN7RyP12YAmA9Arpw56g74wzwLedc3ioohqmsE6qLiXZ3f3vcaHUaFuTkPvPHodFFf",
  "key1": "3QG291PHH8FCG53eQ2cnH56xuPgGUUs4KnRhHA2sxa9mdUsRKBJDkfULEkJnAMqSc5rW7Lm6rSgcYWuGZreSVxsT",
  "key2": "5V34hv44kFboVPtdsxfioVqZgHGs2ugELMkUxaEXc7uycsS6njXpBi4HLazFrZvr13gxrt84vxwoUiY4XE6Dn3Y2",
  "key3": "5jh4sBi7Tr1WgNVtTKwLHBQh5PXjhnAYukGsD1RB7GXseWBKkrri2d1KEeiHdAW1kR4EyaPhDLhCAcWFTfX9Yor2",
  "key4": "ergkdK85PZBSR2GZArWdvDnX1wQB4JVrF1d8HFF8sn4Gjw57aHuBP1PAWzjtuAPRrCaZL8mB6HrbMiDa7j6Nd8r",
  "key5": "2YEcrJHLPWzRR4CLqQe3i6vuaQvs7R9FfGgzG6RWaND3kDN3dEssRp4nMJs44HytjvuKoUHmFFSf8AtjS9w2Bn14",
  "key6": "yKjQgkypUR9fTZzNR3taSefGnZvy35h4TwfMTKQfZADuvHuznkWjLreBuDsGLPkBZ93nknF6rWbxP9UihkeyiQA",
  "key7": "31XJHueYAvhY8CjjRjBWDmJPwy3zx2Ch5KuUUYDYzJ9rBa5qAS1cT1yaea7UdMaTtxRLYunKzyRVvAhwWYceY61h",
  "key8": "JL7xbBk2syzTGMNmboeQh34HJnYgRMJMxkvxNy54NyR1Z8eTs1MLPhzzK9iQTycpCsWnACJb93jaXLg5LykHAZp",
  "key9": "3kYZYPxFeewQEnE6W43uCXmxZ7cqR3Dz2Y1Sdsff6mQ5HqXyvV6oEycx8FydZS9bRNupd9rnD7xeb6PwP182nkWr",
  "key10": "4akQdb5dPbkoaQSoPs2RKwsmCygnyFMjX9uSERhf9DNqrFXFBQnzdR1Cg5Wujqo8uesjZDceQHq8yWQqpnMBaPrw",
  "key11": "5oBVEEueWPsAoz95np3Md1iveCJ3YLHRitNMmv5d9CZh7G961KURSD1Dc5xBoiNB9tpn62wDYCbK3MFr3R6jke7i",
  "key12": "5AH79rgpyTEgtRSuXBs1zyRhXQjkg4Ti62HTUPoeknKjmSWf9GASsbUU7uvwGVjYfwYSdJGycTZkXoj2qT36EDiT",
  "key13": "3efWr9Y5DxaFVAKyYJx3RfPn2SkRhiv4hT88e9AJ3mbCn6MgvcsitbWi1GHu3KSoS9yCwbKgdFGRVrBDoc541y2b",
  "key14": "4H2FYV6CkfPHvPsa2WiBKWHbPZgap9afsA7r85htKKS4czWJmKD6gxAqDWU49ySDknt6Psaykxb6wNkxDZFd7SgT",
  "key15": "3xp2F39M8UbnTttxrEL2eWAKcaNJ9YN88pier2REgU24MpEV9m4Qo7Ghk3oBsSQob4jYQHMumHMf17wBcDP1r7hC",
  "key16": "3S2zpy43L8inXaM4QPoonGL4Sx8WgPpuQrpToVa1D9mAN6bUf7UiU9VwiNxDSVjunuoM8bjfg3VgPPEsVBDqRoen",
  "key17": "5Q8SPGoK5gL8kHje7JJKJVkuqu8XXaZP3AQHZSTa8UdsnJa2jitZKxiYTaH5GBQSY58njEDj8RG1njZWPb8zJgFj",
  "key18": "mLuVosSGZTD5kUbNE64nnyxy7vjYU2rECGpqAiakqgmQdRkL7KPRzj4ApzQYHff9Y6UVeZDC2QJtotEqATgsXmF",
  "key19": "2G452xPuXXGLDknTQxqEewYpk2QXkva82i5hcf9NYSQ9rwF981tKXrVPcfJhmba5i64h9CtmfWCoJQQ5fzMxqJZi",
  "key20": "2iy3QimWracjGN2eo4mubkMorPBD4NmzMou1mHwDbsGAmeqEv6RQepMPTANwsSoGbLVmtqckPWp4nkZKwd5r5YFq",
  "key21": "3Gj8awoNZZh2tQy4P8GShUxwUFKVayipGJnf7HRWzNr5WshbL9bgAU5ZKUJmYyWx59PX2JZQEA8SzVrJxUpfBSeZ",
  "key22": "2fMzaqRnkneVZqBhMrc1tJp7Yzr5E3HsD2ULFDyUuFnLtw79zxuRkm7u4o6nMNv3Xi93vP47dLTUpBRW4H6o5JqK",
  "key23": "5oJ3mmHXW9sgbWcT5MNSpmzzjYQyDBNEUod9ejS3R7s3YifV24XXq9RfvVzrmufApjmsZUqYwrpHQFbv9Mwkotqp",
  "key24": "3WbJcEHoAT93vXNUrKwXXXrHnzpCBNnEGQyzcpjcR6X3NYbFCXSUHFHUm7GeaXofopesgas6cD93TRfCobyMFLHV",
  "key25": "4PXYUPpQoKoszJcg3m4gzDZstTvaRiX169YpTdSFStxn1TYvpbcrQuJ6bW5L7cFjuZXPWD6ukK2ujtUMM6GCRc3h",
  "key26": "3GtGgnzyMQn3Yxa5buNpCA6JTkZZwbjghYHj9qcj5aLWyMKEdDuCD7Z7Wxrs6BAY3mbzvThAgnhpKjsY2ojg2LeC",
  "key27": "2BbpYCjTT2razp3wDZRbCkXkdayR3R5zYwYh6YJupmViqcAq635KNj1xfVyP1mpeG4QYGDvtyVDopAMtFc35YWmt",
  "key28": "3LJn6U2f3Voa87p8bd34rz5CajfuRHc9PeUzQmVbgFM9kUAJVRV6GFcf2Ajp3memwiyy2E6n4STYUHVbMJbszaXH",
  "key29": "5fv5mVzXsGr9YGzLzxbd4cYuGM9raqx3KK8YtJi2yJLzURtd9uNJDs5ciRV2hnvJCDSHHHJUuDmxLPaQP4ra4vuA",
  "key30": "3nqUp9erjfawwymybecp68j4DS5Vhv55dHYzwcEaLzbu3K6RwthKRMmHLub1P6zggko9hZkojXbMJGcaVteamdKC",
  "key31": "2EG3a63PquVsvuhbygdpm71uKNWLXMA5GFQNDQovTHnzS54w8ddWhtmzUxsqstap4PELbk95SxSzdnTrKumZQfGa",
  "key32": "58hUQow2cuJhsJH9XsNWSqS5RDnyvkQP6ngCrfPzTejbcJ5672tQkjYXcSAtH96GBRQ7tqL5613F5kb6iWKXY1Td",
  "key33": "QNEBGepERVPprFENXLXjaXBnxx7vwpcwSnk6ZgjP7dHwCaF6v88C6xv8UgiMNzDnCdVWt699A7noGWkxsBmEyF1",
  "key34": "5JBydvwcfFvTzApZiN5Ut7jxQ9BnmfepPPgkVDedhmfH4xWzu18G1ayT7HDUxa6P8hW6pRXtYpQ3ZWoD53ZxdQtf"
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
