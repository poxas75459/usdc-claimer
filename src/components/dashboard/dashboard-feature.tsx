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
    "sT7uXi4vP5bCBEyJWmaP8u25pZQLhmQxjBLRkRUXdDoRUczfpvMYFn4jyRTBs9FkSVHk6AdM4XwwKewx1ZcZTWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EaFrH3CHgwtx54FL1HfvbQbBzw7MTAbJCfDD3V4vkeojTYidooFsuDNK2JBsGtSL6pqrGmG35AALzB14tfNW7E1",
  "key1": "4TNPSiaRYEZJ9cvWamtfZcKrT2SPEt9ua2KsBCqxnFUn3KXxLXhf31LCSes6S44dYY8zrpwWXVjCGV53mcLv2ppJ",
  "key2": "2y7kEKYRgBv1Hediquga4EaGQfMzXiG7pqdDLKUghcX9hcADh5g6rtbvEMMxBfaoVU3Qiqczpsnp9DKpxw6oqc8R",
  "key3": "5MoUadjjSrbCTvVjeUeuuqg4W1eNbmZbnrHhxWNo5cHtQgEZKXsyqkp4x9Ga492EEyN8YCLYT9jKnpbKULTLSPrc",
  "key4": "3JRUf3HiqSeKdNJiN6tqTMvirb4hpXhdCJtUeibQQYDrJYrrycMpqgDmVk23zc3nB3y9aaCMcreDb3UnuiPStgD7",
  "key5": "4JsjWvVTmcrLHew49T1vCcELytACG8B5cRtHANw8WxuMxxf4vLxJDMR8AdQ8QDDshsbzqKazQcJyeBaAmEkJ9AE4",
  "key6": "4Zxrq3WJi3yjkE6x8VAv3hd2kumNXa6QKWij57KWuEyTC248UsM4oTFFRsgzmySemgSGDbfgpFmm9QyA3gcskh81",
  "key7": "2cip2Rog84mvNy6fygf6aN5x3qiPwgg1eKDBH9VL5bSmiQKkXYL1pdTdtFLazt6r9XHjNyTx5yFYuYGoYieqFYh5",
  "key8": "57gGycsd19EcP7aaQKZh74fseAJSwuaZi6BU1fQ7UPFrUW4hdgTGGaHNHL31jMHKo9uyqPRDgZCHZuUrj4vAMcdU",
  "key9": "2D5oLqyx9r6xQUFGCtWcmFpV73DFrRKvAU1rcWv83LHGnUV4UdCb46SCaUYbyJooYBrFFBHQzxZXSPz5ab4TnSUc",
  "key10": "5zuyRbh7DJFvTLP2oAzowCzyLXHqy84ykFxBz8EwnZGXx1tfbvXy8Kx6b7YdW8iQqApicJcDr7h3TcAR9b7rnm5y",
  "key11": "2CeGyH8NjCyHcXqVWAT2L4hyXrXE66hLRnMQ6b8SXKBt1uGsqDYqsfcswMEfXpnamZ5A6Vg416E4TeWuUEP2h34D",
  "key12": "2XUY3jRm3NUTuzTUEeMYMUdp7NgimvUPJzFWh52ZDnEuv7iofEirSzV6mExPyRRTLB9ZDK17DeoYCLA9d7Zoi9eH",
  "key13": "LnmauRaZaY5FmwgdDqT5LiwDjL9Ay4XWAgMMzpTH8sqCZK54HRHTeyu62bn5fmxy8vYaWE1BcRv5b3j3kyPCvsi",
  "key14": "ZV9aSSxnxixXU8dsJKLk5axkno3iRBjqhF5vRqFyTvUo6tUBJurVSeDeGpUedQhfdZV943jq8idZMX7aUSTbhwn",
  "key15": "3XPMbd7YTTFYLp6jDHYGxjHHuB5C6GLTV4AxnmEJzp33mdsPirm7BojDLypvGCZHyNEqcjghgjVd5Jx1btrSp7yT",
  "key16": "3tUSg9nmstrhzweqEH2Krv355WVBSWsypcnRCnJQzBpsVG9mmzaGQxhMg6mnBbrb4UWCQhSo94UVjYvQnQPEPrr3",
  "key17": "5SQwLKtKtUJEoWdvprkHDGFPBDAc3XhBZRPJfcAqcXJ5UcfCVyN6ybEb45rZm2nb6znTM953jpjHiRUjuLPcrLSU",
  "key18": "22sQQU5c2vx7rMcmqPdACmzAwWt2HRuAPykuRgTvnZVyVCMjWpXkeMze1N9411FCn5yojuPCvpmYVcbqcGCGrbdk",
  "key19": "irGGbf1z4rPwFExVQ3Dc6gJNDSZWgxs6Gm2RXyFcEpkSMhZTDajTT67hxgLrNf7reYNqipg2QJ3FLimo9kTPnGr",
  "key20": "5C2NnY5avQfjuwf4ktkdyfLqZ73soiDNjwyiYWYGCvvSUavuhoZ8d5FNcJu9nSPZmtJKoLPVeq5BLC3yB2edEf32",
  "key21": "4y7JHYR1yzYFG6DsRdJP6vhjgmzKW3nv9QDkb6nwziWzXwNeBUdcn2XTw1fbS1d3XsPLnKrvyg7tFEtMLWbAvcWn",
  "key22": "4EqxmXwfCp8TeeybCAqhYHg1fyaZaqNAm5zypo2B6htK8qmvsLtUbgQZ5GsaDToB8bKc11j5UPRMVgrhRgLsPD3X",
  "key23": "3JAKdG9trbHCrPoCnP1c5f5mbUcEcHCN1pS779EwaQsScSbBpaHRP6hEvAVShkSxTDy4rpuSo4p99kh8aVezxk7s",
  "key24": "m9Ka63axAxrwVS7LWGwWSanm5HxL5NmeEoBKVM8e6bnHVh2Yb8QMUUeYXP95j4J1o8LPdsrijr9qbgXMoRmu8XU",
  "key25": "5vEeZnBWXj9Wq5FUfFBGAcGV3omWeCatedweRNrw32tRRf6JBuJiR6yvmEJkbW8eYXF4DhVm8RqfRoAm2dUbEAk2",
  "key26": "cTM4D37SV1jZnq74MEkaojpCrcHepVbFo4Zhc3TrCb7bnAbq9Hbifu2ScA869GHcCdd48uMuNNbzcXVm7sGcbxz",
  "key27": "5r438zqedxMbWiGrvsN39XEyTExsHiB5zHnPbtf2ZrVtXwmA2AcrV58ZnBsAczEnDKmzBVEh11ZVEa98jWeAVFUS",
  "key28": "21ZnnWD7Xh1C8fbuNtRo1bwwvwMsXc3qZuFFDdEsvmyfBJ4FuyYzqgssb9dN2fhBwKvcyyvxs9BNmPfWfp8xagzZ",
  "key29": "WAjhrJetHtqZPek1C6rgmPfMjUWjG1X5FzaAXKe15ouekCse4R9LAjWX3XKix1WdAaadRqQdnpFG75Xw4F5c8oD",
  "key30": "5qKFEg9TciLK3L2S6SDNMzqcnhHMVYrnHNo5d6xPyXZNgn3GzacjNSj4VS8A7KDxWc4YE9KBLFEqD7Yx8wFMtqGV",
  "key31": "4PemBSX6nKUt7iLmqNcey7ZS1gNeyxBWQC6gru1394KpvSjuGMHHrMqYKGGAX57roSWn2aTCE21jbK9DmHRWNMVb"
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
