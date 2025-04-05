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
    "53noy9st2zvjjFbEvGKqGVRYpPp2RyDZLqhAZwZertW5bCo5tQDd8EcpTE1TdpuFpA9KaesbRXikGVhGtcvNeW1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jxTEsz77LF3ot3xpUjC6CsEAQjrDstDjvkSMDCmo3pSfvgSZRJQi9AYC29D5eK2JZa8LiBVBNmBY1F8W3ysLB9Z",
  "key1": "5WRUM9q4ihw8EneayhdJqF6tCsvwDJs8kT7HNUmd3ANiq6oFFp1a9htnJHRgunicB7kTr6QWiTXS5VyqixMfH2Po",
  "key2": "JkdsT7k97Xs5dnxjL7VJGJ2Jo4afJn4J6tsbxRpyK7rh4BzW87EGbFyGE8XUadXG5hjZ7i8oP7PQSPexfNbyJkW",
  "key3": "39TAkhfojsZovNs6xHwujL9kZwM1jpu2dKiFWSEZau1cZx6qYmDE3nBxEJSmAjfkhe1rxuQssCApEFDkTAFmezCH",
  "key4": "mK12dRWgYx9vaxzwC7Pay6JEXXf6RU3krGfKek97F3jVHJCpuXM7Rg2EC1TMpgMrApZceL8iem98F1TbSuqv9qd",
  "key5": "5o1tc5WhNMiPiSpiZ5EynydMe8xaMnv6yT1uuLNY7Y32jQ92mfhUjSv47yhvMqNJQoCJ4wgtTzZuzNmK83RinutJ",
  "key6": "WrQ7zd27qoQQGuLadmK7mTUvKyp35zfMvbm2nwrvFUGp9hZ8JJAEEvipzBXJrt6giF8En8VX7YQQqiAz5T9T8AH",
  "key7": "5NSVij9dVwR4WKfkhHKHAZ6mYp2HttPQvRx2mkWXndqpCYAFdqbueWUepByroc2rRQcVw238X3d3VbajrP4TJbfY",
  "key8": "3Tf4xwZFXcQmGwFB15CxjKXsj5sqcnvHE2bgydniEwSoavb7q7mAhGJy6UPBQT4tEF8nTBr7MCqa5gjsqKgEHqkk",
  "key9": "5ntpahEnHymPouqd1ARMyHGMQpkPqyYKPdbUTrnuosYAi8AKcU85HKMvQJdqSfZeh1dtA31Rm9xV7qWx7wsAGaRq",
  "key10": "2tCV7LeupgLZp9Uijr1E5hWko78UMgfRGxxsmjPe87CZR81CZR4rrzbMNZBYTfFutg4RFSNLjpGQbo6kKzqv21SG",
  "key11": "48eDpjJyeBwHqA8XDgxA2DWi3TQRS4uyrCUpDXGo4Bjo2aqtvsKyicSua2iuPhH1UjzaDWf2sp88JYLFrMePrFBc",
  "key12": "5PNogDaZVCnZbgW2paTifd52X9Fye46RPvRp6F5ofMHfzFpnnaS2XTS6AjvYooMBDNZwzsCv5j7gqhYosv3U7ccD",
  "key13": "5BnR9UdY5NhxLzcQ9dFRefc5SjRpCP98ip2u28QDJ44igURoedv36bUEBUfGRkk26HjrjCLSp5zfhmGm4eBjoMiK",
  "key14": "3AbAnm4vRw94eLUg6hzUkRLKCTvgVntovaowji1C6qdrrwcZi15swDZadsMpLiEhuVYoR9AaHFaNXJYtU4Qy3ERZ",
  "key15": "4U7i5WCEiX9DmJQiVUDuMoQWUWu3VFkAvSnx8zdQ5MuVW68GXMoKdzcn5MguK6vS1cnaXaaWNaRGPA3w2M7LpJn7",
  "key16": "3Q3xyhfBWyCgR2bPkNxY8VnKkXDAE9cVKQFBGirYgDFJPwkw8WJxJxe5N9wwtQ3ekbkwBtFgqiXJeFi7nS61ukC5",
  "key17": "yJDsEddpXd1dtdbSpTT9qZD8rhXZcmsLXH4mdXpXArtqhcsf869aVfi9ZWLDpyo4Vb8sZGZ9FRhp6H3EYmiyWax",
  "key18": "32ZPrSUQpiCK8kWQvu817VQypYFPqbwmKThFcRqnmk1b8yZqUrjRARCtd2UB5hetG4LdpTu2Y88hfhXu3YFaHfDc",
  "key19": "6GJ9JxP8rRDM6kjuHBQRvvSnMy48J5SBcuuUbUeRijQ7WM72QrSpDtXqzmk6fyR5R4DdA5iPoUBxBKXSNq9HkGX",
  "key20": "3jcESHKNg3S4vCtwyotnhki74zJVy2Ti6osVjGeP7TNGeLmPSNq23czVSjVrL9kqsPhiTFrx6A2itPXfgMwEtVrV",
  "key21": "4WPnE5Rm6wYUxkrZLs3GQdSyCjWeQvn9odxKgwwdUzir217GRhZ1ivY2HL5AfDybLLuK37NRQHXofS3Y9rNzvHUb",
  "key22": "2ZFXDK51oAiRu8ekK12feo985o2T8WCSBGVbZYDLnvLvN1RLyTGiVXmvqN3u5VNkZj8A3Tez2uXVEdGLZ3KaSgcg",
  "key23": "3D5zNk4CBo52LKRuttN9MoXbDGxbv7U2acgShtHYRTaPH2qGnc71B8QHQxnhYFbnd9THYmPdB5wzTw4HtqF5czfg",
  "key24": "5E2iKvL9mBfW4ty3dVVp4w2nEztiegZCpknFgkdQi1Ktj3n2DJpTyEJJHgSnTh6EZpxvyjp3aWhT46qYq7Wj2pvY",
  "key25": "2yvdYgZPKVrGFDkrB8x9KRmPyYHnY7aCusHJsBpSfvG5KCBwo4Rc4MYpyZSGxuf1EGGpPcmtZm796kr4tKcexdfm"
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
