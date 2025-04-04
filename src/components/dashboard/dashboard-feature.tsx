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
    "668HFbZVzZWVX3ksP7YCVkA7XqAzmWq5s1GM1G4dSzoahih37yjbBHftdaT4qumHaokEqYXudtywfeE9hPFr4Byy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRQ477FU2FpsQ7pAtkugfK8cWnQ2Fj9qYf18Gd78Bbg5REEdhdFdSuzTZvzAdoNpAUr3YHJKVZMDVLU7K47zkgA",
  "key1": "4AAoFqAahjUddp9xjKWUtjo4sdknUhix4tkpppgwxzx4P6p1nKjnoVEKUERCBy5L3C3NVWuPiF36URmiKqoEmWV7",
  "key2": "3qSe9kq6yaFMETF8gtPKNP6s6eAj7FQrf43bLpQgrBEzSVi1th2dgbqByWjKtKpkpjrULPiUtZS8EbSxkWha6j2o",
  "key3": "2xj4jtH9qeJH95tMVtd8DRyyd1MP2tqSdfcdgW3mKVE9agTpY6vZzhPNCfJhKCPFHH8fXZyTpi87bAXnF7nL9KLg",
  "key4": "3dNLk8oQGBMcukfjsgSGBG8VugvvyJQFKpFmXfbdsMgAihDtXTPBgSJ4u6CXW49iQwbBvfqpsYcGpyqnYkbcsTeU",
  "key5": "5zHGEBHKYgdXbpH1i4XpsYiZDVsk2hrVFEnxyXvxnJvzTDK7VJUQpoUPNfwNCbDhFcxumqs7YX7ypwASR9hZsZ83",
  "key6": "4G32oxNqZzCAp7ns9jwLxw6DdWeSUPx8QhrbdNWvNt67Mq3d1TYTUCwuwAgKfvrZA3omf93VecykEBaauXN8s6Gn",
  "key7": "3KxS8NR8UB1w5vHHsDaGdSv7vUneadGVq2S66j3LbkNsbrRTWNaJN3ppxKDGAKR4Qky7RaTRs3kHVBbu7NBUo65j",
  "key8": "5KdkW9trg8eoxL9x12dah5qi7Mw2f7RigYyjEute6ukyy3sxTgEPqyndThHrMsch6mVbg9s65DTercKY3UZNjtef",
  "key9": "3NyKSWHaWsKRSqtND36jQfUpp7ji17v99iWfiVzRo97ETmcWNqJGRt4t6ao2G9Lw2mTyzcDKAf8oUE7UujtaE1Dr",
  "key10": "gLdafYCihsRYHmp8NbrjREgi3dYk4t1uajdeZESKLmxfmkZmB1A4UpDqTMcVvBqmMhbXXrPqaQXMMKGwguXq3h5",
  "key11": "4TiB7usQUMQdzXCUKHuNqAHs32HLh5CDzWAXL384xV5NFfPXEJ3KdYH8Fk4JYtQtzciRhcF2FXRKtL9rUTitm35P",
  "key12": "5dotf3HGfy7KL8uGxrKWZNqjiHTtreqVWFEDyw3UCco9qP3s5t8bhzweaVA3r2V5PRtuB3KciNJJ8Vyj8AjtzzUj",
  "key13": "4dLP4DMnqavbqz5dyksFpm88syiiR7fNJEUwdaSUkwZQBaLvxZ4NQfr3kWica4Rrryu8FAN1q9zbYHiDYBstvggu",
  "key14": "5LfKkg76cemnnCNhf1yDLEGMxQCSXz94L4tFLBhTPxD2C8Ev48DBxLJzWUigd9XmHYr9zy551FUyrbDHRXZwLQzo",
  "key15": "53PBWyobLA7y1iNjphCS2kYnejGGBbJftYo3SxCTidMEJ8zv8yLcQz8sW8jubfDdtZwFWM3xjFf1q7ENF1sPWWBK",
  "key16": "2eXrBmkW6FxD4MKpQnmCTHagGvLGmHDqhqmjoJLb5br7w1LjuyVaNTFh5NPE431CQKpxr2VRUR8JNASK9sa74k6m",
  "key17": "3933JBMj7dEZdAvffoCoMvHX3N9JCFaKCbwUfQfaVrWa1Zghq2RksDMwhWLjazGM7VxG2ML4PXtZ5UF6Dq8Jgfbi",
  "key18": "3yhHm4y8AFXH9tn4BBz3vxQjAJNft4Q6ywKtvW7rxLbFG74TKvoXecsAggedPwPs3hEDvShdisf1bZR4YNuCbbNm",
  "key19": "4jxKLnBHwbMS3dr86qqRyqTuUfo1JWym7XiXzGLtg2uRJ1tYpJnSbkaejd7m84GUVtXDjFYvqRk1Y8eS4EUtdvHs",
  "key20": "3iksjj1b1EDfnufL2x3yohBUpmEGZWP5FTF99zBF94a5UZWsTfmdBB5DaEb6wE4wqNJUT9bb6kA2UAor54KhVRRa",
  "key21": "4zqUEabSxabwvxdjve4xJG3oZBzVPKKvmuq1TBqNSD9W9ggm7x243Pg8ePKpqnfaUBA2JMQfqQCU7MXtgFLYDiJx",
  "key22": "foaaTMR8ngta9ijk7ZMgFmX2X7r3wWZnhxVXPMH9AiL3EezhVg1HPE3taZHBYZe4goiYeXgSpCvPXLrbLZa3XGB",
  "key23": "2M4Yw69tWax4GvFdFgV9YTdrvevv7vThVR3USD9tguhnGuYscoT782sCokDJBoLDw1sQLA5MfLXEqednSF28HQqx",
  "key24": "2DizE9LGtUEAQHzTmU3EJKEZ4TWz1SvHbks4QEwcxFNWPUhtica8JxnPt7B3ZiW74AHpMd2ALKuAMANc3j33uzJB",
  "key25": "3o9bviTKmLHjVamXgByujMxwzyu59wv3AMJugiGbv1wC81zBzdEBBmcdEwEyqFG3kkpqajeS9PtPke7QQsU1gLiW",
  "key26": "HDyzWk24Q1nCiDHy2XwJ8HqFmENn3z9uH7VA9LRCPTtjRGWcWL9zm4Go3VnXCdKB4gYZFMwMM4CvpnRzhjtN2mM",
  "key27": "2k31gDCAv8CvTYVfhiheJhcteZLSVzEZ3TcVd8K7D3az5U3zZP5kwKWg44VYQykWcDCYcuW4E3cRUtNWpyT2kPF",
  "key28": "4wkK5jhX5MxymLLxryhWLmfe4pZYFyDpeaqao9RHeqWCaJBciRqCBFZhboknudmw48hy7E6VRqtaPJaQEZD9Uqq2"
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
