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
    "2LwsFxtHDkudWChheydB2xTBBKqBZENsgB5FamymRDNDdzjExpCQAW7h6kTeySUQrVmc4V3t4PjaZgo4gtpf2iBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DLWL4o62BrzuycVHMuNvj9WytvYghdpUNEGCSikAmniDA4rTQPBggJhu3GzRvwvdXiqPDUo5nLRziKqd8wxAbGf",
  "key1": "2ZEBbssPh3odS4s5FNsM95wQqA6ULyF1CZBMb1R3zHVknSv68jrSxv6tZJbgoxNW9jC5cFv3RmzfYFErXCVJuqdB",
  "key2": "24wsap7x3DXfCALVz2SKTcbCPmiZyxnhnJqZaR29RmcF57VhKKAdQzsy7ft69aPR9PbwLjWbQFxCuVjfJmzTv6L9",
  "key3": "4VnBUCYU5o1dog36YNsXX2FGdornKsjSKEyCSWXRaQsutGZadLdUR7nj92NVSxjQ4aiMZ7kcknM89uCi4YEqjYCL",
  "key4": "5GGTkAzPSraBaXHFYcS45dev8kP4Y8shzWX33hZp78dMGoJ7a9NSrvaoQaK1CgWvayh1maPC5dFu5qx696zPUdmq",
  "key5": "73AaVJbjfFzgAx2MhYjUgF2Qs2P5LLcSCuaw2mcqTZbfxTdYajCQ9ate6M9vnuGRyzPspMeDjFeS15727uUddyx",
  "key6": "3uB9RSFPWteRNpBeZp56LS1iYF719aVtpURHgnmkZ6XJDSUWQi2khjxCSXcEeUrFrcnjC2ynJorE6HEUDYfYkCKj",
  "key7": "3DeXfKhs29g1z6EkVfJoCpQUEtGSrHh6JF3pJYgVWiSVJhV5jdEfi4hb32ooXXqVXknk3oAfBoLZMKGs6FapAkf3",
  "key8": "bvFZxm57fpLU9zFQ5vNG9qFEsv6hS4JGNoKSR2tkuPDyGdBxqDb3JzMxXADmtBgSZr1XpzxK2kot8n7uXvZoTP7",
  "key9": "2xTHuw2nfAe1Q1sMpr2q2HxNdVXAUQhXAp7o8UnmvzMyUhXfLam7Nd2J3LoFEryhaRxi6cB7fFsLpao8YJDA6yYQ",
  "key10": "mr9CFg2LfAW4xEdfVuNipYghiavxiBHVgR5PCsRnwPATTAxYrgU7yqaLpkKSdHhs3znECUyQHdMudXiRFuSipNd",
  "key11": "4PutbMoBWkrosxg7kXVE2ni8txDXY7So9yszikuqzrSYPgFr4QfaqH2jdpFuncMXaPs5MtamDzCuABpVYi3AtZW6",
  "key12": "2kHnFR73MFssM4jAed2rcPrQrGJBTjqd6Ts1sLZa1hXMTFun2vMv4grUUxwnhWDN86CmvdCFgNTM5um5zZvR22Y8",
  "key13": "3geamRw6Wxz9WTkshckkeWmz4uGuMFmLyTr5up8rNsy8yx5yprwUHhHSfZi7FtASvGEZ7PmbcEL4WjgNszYEbvNi",
  "key14": "3DzFc688trbHhPsnvkxBJRybth7EBTFCuhcpFk5GjTi5VyxGKNv2pgzTNB4ahNRSkq7YHHEfhUcK5Rr9wqDcxiTW",
  "key15": "4cWV8z7RqDfLXf1Dy8job7BaXJuyEnrZWUmmLapUbL9c15zyNKdKsmXYsujiXKFnarEKW3QAPhb3ESjVwGHqMzK3",
  "key16": "2RtsTCYkdzJ8S4QicKghu5Rc7vcypA6gQyXHFrVjv1XshkGFWpLJpP6EP2aFXRQTP6eSNenEWBTGAEoaHz6FXPno",
  "key17": "67ZBKcNpr6UjSU4KmH1V19B9MYsfVPoX1ve2vBwcrwFwwJMsuACKEZtETq2RDsSTmuWuWUqQZuBm2r5vmXZKwNDB",
  "key18": "3mXjjMq2DeXoHPNmuGdUbjLB2eeLY7m5YFPQguNeeHiD7KV6A6gFsTQ3sd4aKGMbKSDWqLAE8D6EGbRdAeXvL9tH",
  "key19": "4PFHdLxHYN4TYfiZ9BKyx4bYFPGuzY5CreVuEPU72WdLrJb9vNsCegPBxh132TgYGdLEAvwdYpboEkGsofEN7zef",
  "key20": "3hEvt72LNAgNFF51Ut4kDKLboW6dH8opE9p6swb5xiNJZrvsjPjzbeCpJeJLgyBcUfBQ4KUSKHinM9YyREoU19S9",
  "key21": "37mgtRCAY88WYV4BebrNBcj58Z8nXzE3YjUSoct9kidWBgEVUVJGdCgnWUEHpYJYNTUZD8TmGAgNZY9d8jFzu1x9",
  "key22": "2M3rGzfu4EciRmiuiDKdFRjG4QEgYj3dLiQBAMMqkPmL6jTeeJw7Xrt6JrYMUbHWdVVVrDSbvcds7hEwSwMe2EoJ",
  "key23": "HKBjcM3z2EvEgsvAAwTazckSVkB24p6iyRKL8gfdipjWYoqXFUqVfKSa7UkFX77eVUSUS73FyVBvppQBTFxBR2N",
  "key24": "4MVtzez9wKUR8ED5vEPNPVrbvNHMDzH75wccqcGE615KnjWUFGnjWhA2W33EfvpVTUaScJN2RvxxBXLrr6PhFvfQ",
  "key25": "jdaWDPXUHXV97XvgYbS1asgCjFg9thnkLwJzx2R2kNU2pFXbemqewhUL38eZaQvWx5QWfgKE5umk5bYjgkLsbXd",
  "key26": "APjdXyZxMtLZ72tSr6jDf2wCT8ii1ZGtRw6ejKSR1T7y8RTCbxQXtmubqtrYgL2yDSx1KNwcqsVCLeEdpSu7B6S",
  "key27": "ZLpmG34t9oHA3aAbKDZgwPdA7p7npbcX3oAiy4dS6hQZaHPTBwFqrLFFTagX5jCzShBNeAsEMbtp43hWgC8uLzJ",
  "key28": "ctQjue9YvmwHUKoZsh6NLjmJi2ezKX7VjvajC3ByohGVKmaxdp6zmS5geZPQ9v9xa7qDAs9dhjoEYwNwafgNpKR",
  "key29": "3TQuW7fnFVhhSmvHy9GeLZan5cnkqJHrFBX4hh9E62516jG1qQFXMKJ7B6h9dFFetaqghfvs26u8NBAdx3cD5gqs",
  "key30": "3XTn2iZ4RBVGWeJXTTC231TdpFPPQ2VJsv13M5p2HFBT5hzAfwgnDyHvki4DrUmrHK6W857zQYPWxR59EQkctk72",
  "key31": "2FspyPQVBygeDTtw3PFKDLPsYpFJ3NSj4BpLSyyfiY8AHwJ25YgjzZkFbXn7MtoSfDWNM5T89WWhk2TH2MMK88QT",
  "key32": "2CvQth7xp75xAy63i5xJWgQswEgkmXwgpCxVeKZnxFYZx72e3A27JmSv2rCzgqegiDyEecn3mJqN4PLGZqre67Z5"
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
