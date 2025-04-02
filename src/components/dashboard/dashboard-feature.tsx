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
    "64GxgEnksYtBcRaHxEdSJwjKhnHknfsX1EKBjwM6QRgDjLho8kDJoWcqxsAu5g5ojP2r8ozQGsnmEdKuwCfXkp3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gk8JmtRvfUUMfwpdPAip7dhz3r5RaNdfj4f5eqP46iTWD2oQv8tsdxLaHJaGdQdw96FySfQUyzGZUDoj3rKEuU5",
  "key1": "4TrsBgmVJMhVkWfdQDySksUXJy6xBqcWGiLjmbfRDzY2yiBYXy7Crfy9igdqxHxy6L6N2aZi7TCTDtTjppE4SMrf",
  "key2": "2KHvkhe5JiPuagbWAb4WY9PztP8EUgkpS7kV2NaCYwJPvz5GLU2zY9cKdCz6C1F3cthk5gEZvhFLoNshsES99sRw",
  "key3": "2pUBjLeH1gnH7TWRVWeqEjrkAuCybgia1vjWbGHBaCNsD818AvF8MtdjEt3UfRHwFQMyB5JDsqoM6viqJ34vWa5c",
  "key4": "4MKcTwmmigJVBM8ba88siPDa3cLEt61er8jvkjarUTy38Fuy4nASPavcViG1TRp4obDyqSWycgE4GCbbDpq9auYT",
  "key5": "4L5Z2Re5fuyjamcu8V642QD7TzcU3S4ZgtpfNLZptcvrMyRUJ7pufeUgc4dELTQtH7mPsyYXRoahPeXrkMztmSd3",
  "key6": "5kKBzGYJNHJrXvfyScobF4NA9eubPv1Lqoo5EKsKEcoGAGLsB4VNpHGmAMT44L7bAnWRH8KjZ7LTDRaKR91LEKD",
  "key7": "2PncZvCbc3oXW59r9ozGycNsEtyftcDSZVbenkn1fovJMwUT6pxHMU2eBjN4FbBeAmydDHJkDRiswEAGoKejntTk",
  "key8": "3S3vLhNCMnkNXYTuh5eqYoxo8Zenpd5M8913NmApcgN7aD7S8A1FsiA9HQjBV6sGeCoa9m99tzT656x2WfipiWww",
  "key9": "2qUUQZ6Nb3pr96hKzxM2HmxwwixXCx5omQZCtjhc1PBYWmqz5S3SftNE4JeBSMsiYUDa29yg7zZT5uDQRJLPxNxF",
  "key10": "2d5dEagZpTxmHuwRvbFzDj71BgY96VEX5yc4nGs2wpe4gJFo5kiv7LvCnE5oinrqEEGy49aD3RQ1rcJXZMuUUDHa",
  "key11": "45yhj8QWS2Dv8k97J27buwxecZ2NkUtg5VYwJ6yd425XkXRi8HmaoTRdPb1npYdoNvzSeFtvCdKVhbPvnunfhDQy",
  "key12": "4FbTej1j8nTqTUkDJum36WutLqCr1bjMk6cLvVdgQrqMbvpWngVkCCfr6R8GpZuWcrhUYSKngUw48kyyUzeqQayr",
  "key13": "5UymUaPBA1Y2gw9qjeSy7SrqYoo1HhzCgMAg4tpc1ZPeNb1zxfzfsVAvxJUyZEhxbqR3vTqAMyLHucrFuF5iVoxq",
  "key14": "4fFD6sRKAVpj5vooooUjGsVidxasvVU5ccYgY66HChLqbK7wePyKCsz1wYFYWgbZMkreECfhc6j8uefDdgtSiunh",
  "key15": "2zSNBgGKCY8bnP3ptsCZquNPEw7QWXn9ho85mkGwMBYU4fVZXroCAM64PfcdaM86EjLfjhJx8BFrB3TSyHySD5Yb",
  "key16": "3NDDW8DNVQpDq5bpKtF9mJRUnQuntwXod32FLcP9K6tJtnfxPoruJ3Rt9pDhETegtWXU1QWoX1YvUKJsNHDdEuwB",
  "key17": "J8dJxuy8ywKK56fo1Pgwc1JBxF77acYEZVV8W2YGVVHb1jeGZDBz8RnkxpNb3DM6Gz41d3Bu5Ma5L68UycesqtQ",
  "key18": "iZiVjXstnNLhmn5FUFYqor9zy8JKWrbsmkj8bxC6bDUanW5FcVekzjFtMfUc3YkLqTE4jkfrCJ219EseDMgB6Mr",
  "key19": "5dDrfFGRQLu6zK4uTSquaLuqCecmLg1rqsF3DfwjdF8iyqy44aZXhcPPdkJP8aR8TZemKYr38w1FxzNAxTzfEwn1",
  "key20": "vt8ZixnnF9vFWZQtrJa7D1o1jZbGrWEnooWMkYgdKKFJR13qpdQVnaSjRV8yEph6AQ9Cts9iJKSb3Tzo8zWqQhK",
  "key21": "2QUfjykDqoyvkEUUjwPixKRrfY3PGDRYxn5sQ7rEHbevFxPFMbQiEs513fjF56MK2KspKGgtetXqATiXQb95M7hu",
  "key22": "wbgh7HZcNRhZ21Dq7nRwyL6dSQfuP38CHTfPuLQP7XnRGn8yiQLHiPWt332w2CWvXeXij22qq3SAdb8i7SHaqc2",
  "key23": "33QJkkVAZaCU2YEwhSuveZv5FW3SNhqXLWGnebA4QatFQac7ZFFJNhEfXcPLkwbasjiW6t3ZXAHBWrodSAigMgFy",
  "key24": "3BZVgTKpwoRTEsgzoHVjTvt1yo4ABDW1dAvX6CnGyUZEUTjy4rvZo2md84bACyouycgDLmDt5taXBsbj3BVLRcgX",
  "key25": "5o8zPcHAs59h73NJm1V6eAAut7DL1mAakTUQabUNkT4EpJ9Vsf98mVfLE918Uha87djFVrMbLwyzSpFFJub9i8KZ",
  "key26": "64bK8xVCUXqcPAS2run451Y9fuZvxcJddrfL4kVCMedmvyeZH58yjZEJU6VjV4E9LryhyBy3hbxuMTb2GUs4tQ9b",
  "key27": "2TsQsAxsJqvc6yfkr33yrNVabbJy8iswAJaZvQpf3mebxFQbcGjtWBXrqdJnEv7kc8ENEp3U7QvcLUoEf1rdxPk1",
  "key28": "PEfpCs66zBrbSiyKTinfAbXwFuN3spZCgUJYuP5hLYDEJ6XuLFAdRzAe1BEXnPMGbZQTojisNiYXHy6kxKGjEYR",
  "key29": "2dLLxYwVPry4RvV4bTkpwSBjBAnG7YMRyY5fgMwPcAwkgaPGxZpEz3CNEJZNozwnzAuc8UYo72Wf8LAbQ2w3FUQK",
  "key30": "3vA2PyrupwSJycEJgb6UUSNqUdSW8LfadTkZ4E39QmnLmogsJ5tQ5Kt7wdmXFCTD3pJBpWMHL3tLvVQfmqbjF1xJ"
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
