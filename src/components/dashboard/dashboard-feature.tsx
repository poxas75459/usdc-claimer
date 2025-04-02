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
    "4v848MDpeEJjXyWCLShFYW4PUWVax4c2fxnskHCdpiZ9WKh2wgkMjVmzZd75wYERvnqTe4y2TZ5dv99aTGMxAanH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RT59KwXqBYZZq3m6BDof86nJcWjZxfS3zCMbEgXxBDto9WmtgGdnja6CK374AtPbb8UdJtVNBsP6mw9XweYGEuu",
  "key1": "4fCa6fnPSUMsGNUdBgMLj67ieTojMBCF7FTcE61sak9hqJeMQyQjUMtQepUV1VAKQb3gVCscquxw9XMgLVFMW9pL",
  "key2": "5SRTuSUF2Yz4pi42k3iPCobNJtmEcLcnbFekikHfXiXWY1sKhEr8aA2RNpadoLWgGrtmKtNWnUJDS6JHnUNXhgL3",
  "key3": "2DWT4scbXz8h4ev3cA8BCgcvNfJ1YcMQswRECPr7gUSfaxpEHEriEKDXBVkPffJzoUbXzHvr7wScWgfqvEg5i2Y3",
  "key4": "3mZ1dVRNu5EFVAA4JoyWWydWdKsQ3hRioj5gwrAbL5kchHqvi181NyHzhvLX88RqopH1j7dRxQrZ6v5y68jHy6rW",
  "key5": "2XxqAC4bgfCiVURRog87jcKfB7cPo8FDe7ZKHvPkkombgcJaoCk3Jbb7qn19t3yMHp1wtkozUvphK78ynQpMtvEX",
  "key6": "Lt2RdSdoLKfC8CouUfztUJevjpHsV8XjoT1dmVz4qFaNFHhXcRqUKPbBeXVSLqy8NAwik5qNSCsVCYiyZPKp2nY",
  "key7": "5rqSnB5yBtmJs6GYtpM3MSSY6voHfWxZSyfkzyvFnKZefwdJKi7zhdt1b3NRgTfyvsyucY1fd6FANzeYCNU95sMK",
  "key8": "5ryqPC7Mrdn6cCP8nsfC2PGqyyC8BgNeoiRSJSoMhMgs6rnSz91WsW2FycZK6htoKKpP4KXg2yeJ5Gp95LsmpCwb",
  "key9": "5EViRELKPcfR5LUYPWaFG48wbK1duEHC5qwr1oFWasHV5DGPg7F3DzuS6fUzTtBQaziiXgLUeqh4sb94CD2wJ8px",
  "key10": "2RqVh4kr36qjU9FEi9G9YiaEetRv4YJKgf4DtUvDh64BSgfEcYnpHvFqnvDLuh5Uum3S8DtJMnq5xHtxN4e1BGTg",
  "key11": "ixuSA1a1PZh6mtMdS8Tv62ki9YDkoRRM4LRsAfEgdYWXUHjhg1PQ2Fi8fgQHCMYq9S53Fr7R3rLp1B95nPZMzpn",
  "key12": "tVfag5KjSQq9r4BGuubPeejtGK4Fyi9jQAuKbU6qD2F4GeJ1jruLgTF4FNMZD4TxJjS4MfgS65iNY3GnGpbJhYN",
  "key13": "2WFpvRUHYryrabNiyQhAKhJiUye1Tukv1y1UJWSgPkdRrS6hTdg6xN8wKgpPjL4H1uU82xt6nxJghGdw68zqncnG",
  "key14": "2eiZAeT72rYmCtVm7kqF89fgDBdCVRrhXvhXK6qT6G3yA8MpdsYV9dVqWcSYrFHMoh1Yt81xkucQnErLqDH6kTLR",
  "key15": "DnLrUQk1WP1AzL87NPrE1U6YiTvqHtS7BNz3xpRfxnmijWLm9cnnq91VEmhwUzdv8W53dbKW95LmZqToEZsoosf",
  "key16": "4GHKWeBq1jnozY8gk2ACZzagkYbzJwaEqszRPuMyDnZimDNf7uktsaWX4dYWbzv9dD2FMMV4732gkDMRLQspYhJz",
  "key17": "4RrExAnttYubeQ1D1PsW5yw9D5Du4476KMtNdrR3yrjY2kKPufEDZJFLt7uWZxcwx96D2r11s2dwpvwWPP5kCrnY",
  "key18": "3KgUZWnPCXLMuEXE8CdFczGSrSSWvmvQE6SMDwkNqwBbZ9VjKQUvPxZzjnTBj4HjcK6RkBbueLQGRG7BPUcqXSAQ",
  "key19": "5SMNwzCGM3csSYNVUy9nuvmF4YopYdBVMaNoroHF6uiVMZnRmq5HasohHvSgkwcxT47KqSDwatCrmsEXgxmnq9bg",
  "key20": "39nJk5iezJb6NSjJ8gknwMgPTaCxNmWY4pA66VryScz3tFMc4GVcB1EeTjma9rpR4TdkjZZKTTJJ1ngRKrb1SXD",
  "key21": "4Db9EBm6U8Pg37PLuxzFra6dH32bT1udkxgTujpL3jMyUsSEXyQSq7qKgAWh27YCGNTuswoztreGVd6N7DDaEz7d",
  "key22": "51stWz42rkB5BS28kiNoyFARsVH8jq3J4mb5bznqrqoGhHLK3YoFBAQei8Nbdt6mv5rLwpntJdTkMMZZ2dJSL17J",
  "key23": "3g2RPYNMARBjqrnKUyo9NUr9GT3rA2GGeCQDCpfzisgo6KQuiYizge72dAtYVK78QVtYesDPSM1QLRw5udC9J2mn",
  "key24": "52XvkeJh4ZqcMxkVD3gTRBiQsdeXUA2PHaPevS6TKNtv3xxCpwTWcspM3E7LCNpJ3DzsDEwR8Y1AUr8uHsjGQmo",
  "key25": "5JfiibrKJEsouVSCqRaqYzMgJT2JmZTHFqQwBj4rJJv55A2vmwmWbjnirrS2inXs77dcnQHZuhR21D3mxqxker5R",
  "key26": "GioyYQrPVHXEP9KxgN2CdoFSWCzkewGuAbKNRdNbxg3S3d2z8x1NsWUmbkBdJYfAY8ohiF9tgswCpFMxQnTgdGk",
  "key27": "2GhAsk3xjqDYpJXWLja1a3ZDyUn6B2tgvQLrwgvz1Rjg8h5UqLp8bUbkK2UPYpoDykaadko4HojKVdLZpjVjJitf",
  "key28": "2DFiMPR2EVtVx7Ey9peot87RDU737HZYNGQGgyvyATCcyVgfSx5YBuNVwvCx2FMt4gCtR5fpVngnsv6k96QbqaBT",
  "key29": "3Sj3o2ek6moZfeY3GQgW4CWEFm474LgxSSwFGzSwehjZ1RR64KTyENBTAJd6VG9jDkwwc51B1dedr5xoeDxDGRBh",
  "key30": "C2k9YiQvnEvS9WtTxPEC5RD24FbYZHbKsDZQpxXakQtVZ5hGWDjko5RpnvSDdZ8rdZVwrbyhzX6XFHaASiuZemu",
  "key31": "28v3W1hDfUAqhk6KEYkw2b8Nzh1uzHVdCUzhAUEnfRL44VFLRQJGjJh9JUtQ4v5LMNaC1j5Fqvt98wDg9SRayft9",
  "key32": "yVzWkYnnZXqfcARMo5cPVuMbq1djfSP2WYDuxofjNZcgnLzW9k3ndyUuQ8KhUB93xiCrfnf3EqXLExD3L894aNj",
  "key33": "4krJ8hJbEVEiStPXZKtcGFFHsM93BUoRXuTATk6Xf1HPQCuV7oZ58eWzoUnRBeaExQNr11yxVpkrLMSLvj2DUHvV",
  "key34": "513BLZ8xdSNEHAvh22exSDY7BuTDg3ScKMzaLuC43tk6A947Xed9qVj1xjH6MhYdNQiVP45k1LF9j27VAVYEWBca"
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
