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
    "4DNM6hsywRWW8if5ed2HUicjYHmAHBCZZEW62G55g1deRDdpNjZfyxX7MJQAqSd4nq8ygLjb4JpY4zSHwt9s9LZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfgaaAk8AaCX9nuZTTLRa1JSCh57o3FvB5kcSUakbpzTDn6KABw2NjWzBwmKpjECyk3M2oMw3koZVgk8eS6hcTZ",
  "key1": "NGyKya9zLEzrzSRpQUkSX6knAwkAQF4XAGUh2Ak4c6wJUBXKybgQypWLAZv4cHqzDZSdwwhjjxRxAax4WDqbwzD",
  "key2": "4bmBthU7kRSQBzU8PwgoArso9XhTsMBuJo5kvD8yojUdBCThtUduVCVCJi4GbFQRo91GzK9aXq8fVSSUXQz7iZVb",
  "key3": "4qoCGZcSXftYMo1SpqdKHxUV2DHYiXD4YBsYsZaUoVjL3anTrXHTvwD36w7qMU6RFKite5ojH8AVvVZEQcDpzTEs",
  "key4": "5wsTWraved3v5yp5muX7q4w6bQWr6ssrtFH4cozQi1Jvxow2JYBRADTZyuk6GCg8cL8YyP7Mg8bdGHkR2PW55Myq",
  "key5": "Zhney2MkqqrW5wJ3fUsBPbLFoyViaVU2VB8CuKuiN2LCrG9ue8ffjMik6r7yAQQqVCh6P5pyE6V6JkbD9J8ECmn",
  "key6": "44Q8okLeUfSGCWgU5wGiUtbZC1VtzCfdWLn2uCyQhuza8j5uFyKj4QNd262fXDG8fses8N7XKuUFQ3MQDmjkciai",
  "key7": "5zBXAs8K6oSYNtU6m2caGxdvG5GBuuRuM9DTfiZqunnGGbjhXcNBYEfRCgFd5WUM3XFm1gZtNNQYDtzdLRyEc6wH",
  "key8": "4ZaBzzu6c4x1b5xUc1wsyEmZ2ihd9QYHxAUiPAjMgDVsiW4wfrqHA4Ks1UWcG44fJ2CaZWWr1msZtQ34Aq2d1Qwa",
  "key9": "2wFKoQ1HTTD6g37evXkvpN2CG1mrBHoQY9jn7r7UwggrAX4tBYHeL1XjThibtdKyBsM1Lvfq9FcQQ2e7RL6NFZQ3",
  "key10": "dS2VHceP7nrbt9US5Kzb7GWxjeHCHae2gm1AWU4Umg66PhL8UW9qdfuf3byWn5HxwWGGjsFcpbD37vvwTqf66x1",
  "key11": "583R775w9tRi2zQErjhmKFTUpbGThv7JZ3ZaGYmp8HBMznk2zUuFvvhvkUwKioYnW2UHE3dMABMExpjvsX5f8Ubv",
  "key12": "2tsFEfuprDBNVDBwgoUiZ9LQssoJxLgFCWuuP3ueCBWFr624UH4xxoHZXaACWsMMN6jQoCuin4ad9rHDfySKAayP",
  "key13": "34wTe8Cgx2wZLiTHQiMDsk9roNbib3BntyAUfgkVNZAcB8T6DJJGibViPWSzQ67pz1d6ZBFo2mioJp6oCaYDihAd",
  "key14": "zDXXZuny81RaTJhgMiBQxCV8ZumssXx4qfu6FmuuvEjmSPPW5mLxGrFvx6vymLVJExMEjp8BcFnMPCJ2gYFsdiA",
  "key15": "5mCE47vUmxoMi3TpiB2Zwok8nBN78gX2H55rjy477XxAoSP45PSRoF14ovpKYrC77cecofGXooYw1Z8q9FKUDPdq",
  "key16": "4X9qBVnsCyHM646HvEj6dyHa7NkMugHPxfxdFXQ7X7ovJ96uMf82jLTTP5ib77HBPagf3eEF2gT3PALgmvYourTg",
  "key17": "4LascYtEHMqoz4DoLr2JLTito1ooARFAx3PxMiZ1iLMwdNY9sD62fEpnNsWHLNXQ9faKAzuB51rvmye1EpH6TAaG",
  "key18": "5oX2MzHbTkdpXZQwBYh2VGyy7DTdecD6qnQCjBiJFf4zrZUQYDoXXszGjVuU4jPjV5YJdtLrsvzy1NJ7bzWPWA9q",
  "key19": "4166fP25jzjZWrjcXr28Ddm3pChUYYUxR3QYhvj6U5vefa7SpXNHshJCKmpoqdJrj2hQa7DrWAM3tDPPwcLvh7Mm",
  "key20": "mkEkpksLvaHeJy5rg8JjSz3NWfgYUXQLmzUjcQd8nKjW5wSX5y3NxcL4fWn57gKXBYbL8CS3mKJGMWfqVo4RT5b",
  "key21": "2o1eeF3FpFe8bkPjqCRKQWnAC6oe4S9zbdgBYyZ3LtEzvYsdjoUHA9v3NULbtX757hQar7fCpa8rcnnKTCgfoiqZ",
  "key22": "5ToQkvX85xUJuF1pZjmQyi7LJCB6A1HhbVBdEiTjXbTvRcyPkU6rJyiZ3WEZdngJrHiXRRWCgFNxmGowBGmWeLBd",
  "key23": "r45T9nvT4nn9KL1r37mVtK6mnZYYbuDP67xtuR4NhMGhbx2hmEe2R2uHEGuNGpnNQJP5KXSg6XT9nFjpS9vSRLd",
  "key24": "3tygPvyshRQSG8N4czADY1AvqxwkEHe4AaesJJsFw1jFpQNMoaiZ8mCgcNZuVWnKdqVaRk7YnqeQjuigVRnuw4rH",
  "key25": "488EX4d8dCSxasmncQNdo5XzZvtt6jWC8y5Bx8zwGo1vnGBQxpNGGZeF1cSgSpPyDpmVN7G1hVPStJ5h9zur45mP",
  "key26": "2aX9wAySvUDpPLa6qoFuG6dfpQjSk1G9AgYQF9Fwkm6TN4Mm6V81Fim3BD7rckkhEioPCqpGxYS87xUhXLn2Bpgb",
  "key27": "2JdXVB8tAJnnufsnWoVBR81sjogbsUDcayBDyGBmCQ1rcfaRYLnYTu3b3CGpXNdq33FZxgBjieYbH1pQNxG4q2iw",
  "key28": "2ky68UHfRbAcWzYuxkYCPEcqucjvbCVb5sHxj2pcfZagvaybiTmyuSqURrSMvGm5GVVZyhW1XM3xxbvWoE12qPnP",
  "key29": "4zRCD5mpcB4QQyjuiWiFRTq1ULsKEUVNASnbuDMm1vaU48r43Sb4iC5zGLGrKQmV5e6rvpBxLwLyzqUeuKMvwGmW",
  "key30": "bZiY68UUs2GwijLK4BahcSC4P3d2QJUetmFLkV3PvNtVt2k879P79B2qj1mgtZZYiG5H6gDTxHCFzeZ9U6cehi4",
  "key31": "4LsrNcCu8sYj392gHFXtasYqzC225QV8dmACUmTssr8hZjMHHZDRtL56zZSa9oZgMSBtzxbJLxQ6p4RLRpLDujbZ",
  "key32": "5g4fiNpBWiEJk5EhYG8Tq8w7vsgKPhvwr96rDU9oegqRDajubCMW36gNixarogBQmYPxkp7asVhmrLZ2gNZMBa1g",
  "key33": "1xyVXZp7rU94he3hhhmAdrbWx3ck4tHaRE9FEzdjsUJ7ADJECGttNxjPxGTZ6QwcV632DEWmvjsfKzNc2aq9ZF6",
  "key34": "4zguxWNJjEX45vpPJ4G9LGjBkq3ak7oGBuhLD3DSd6BM9Jf98bwjSduRmPpakJtpyxW5xixAUfFEAXkiA5WNjo3r",
  "key35": "5H8njTH3dhUPBBhQS36oSKJUp2NXoqzqeC2ow7fmRbusYspbUdPS6zLTM9ibo3WEKbNiEsotm9FNh17pCoxN3Z31",
  "key36": "2X4GWXbm2aXCV9hjwfiWZJJEZ7L6ATSW22uRp7nkq3BvFXRf8gwePN4Cm89PWkncpu1WqdPTQS31ygtrarKqRdpm",
  "key37": "4T4sub9H68BVgvPQJ1NpaZuHe6zGYDHvuyMng8Hq9x85URVfvKybjSTRdJg6uMEkp45MFXi2RqEd5jP2AmdPd8GA",
  "key38": "QCfcdSz8DKeTzv3hPFKoChdjvqGHCPpsSnbvHBkB6rch7DrFXH4JJ5pVyrm1eAMUDj9HzXxbYzMBVje1HNpFWim",
  "key39": "2cojmbT9ZY9jSkj82LkpwGmhNRz1LHJb6brugs4sEdpKt5Mfu2apwFzYxxkzLeTJdkN9HZA54XtU3BawkhHXVMmw",
  "key40": "4zWJj8htobYnm7SoS3ApUM6y2PGabmFYvCzsRwTZVcadkpQ6LS9fHXUrpAkj7YLFLyY5sbzTfrJwJQGmMfmGk97G",
  "key41": "3yjeSvCedh4XFuDysbyxLNuMwAc2XdNDua8CFAEicw6VFN3Tdy77oaxst5jjT18VZNSxwjTuLDKoSb6zxY3Dg1Ec",
  "key42": "4KfSYdemD56ZQzGkNYSLFypL9HWjH8eyGpt1MydU8ZG2mm1mBjwTRVCvGqUwsRSYgWRHBzubzg6pBnXPy2BHP7EL",
  "key43": "y3d3U1RFK7v2vpfEHjMg84aABb3xoKKMMik1Ef3xZWkbbzHhwNUoo1zjXey7YuQtBy3ZQWqsgnouzF9ecLrvGRS"
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
