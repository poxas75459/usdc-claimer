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
    "5uXvUmZvz8o3m9asBxX7agTsDM4WBaf9icD2VadVN7hbBrqeQAD2ApYYjdC1z7WJyNpoqR3k36V8FiVvKc3s5o1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fo8xxHYJ7XHRiJsPZqGV42syKBwcUoiRxVbJAkzp3yXuKUaQ6yPRWpgjiPtE9uG3BJmDybFescV7JVEV7kBvDLi",
  "key1": "3AaaMJXGsStur3dV1KYYCLm1MVghTq5ydhE8BerMc4SE2bbzM2jZ1eXNuMf16cyT781NBwvFnVRJyftXHuNFC6bv",
  "key2": "Ucvs7hLrhochD3DkPp3ucPx4N2wVZbCYbbUnZFE94Nz5sntAQ82hvqyF5AShAAkXJTFdoN9KgagYwBP2AVMbg4G",
  "key3": "4nsqyMpCRLrumcxT6vRAzBqJbzMt9b4LuJEJfESwB6VjpJewif7RSJoeLjoo5KogRxAMhwjhjXrjiSdepXnpLBBp",
  "key4": "36HR5xpf5RyRJL1LhCc51527awSXgcsmJFRdJAmvyQDV8WAx4kNmwrsKhcec7NSqm8yck4gzLyU2F9UWyTVeMrzY",
  "key5": "2GoFw2FF5c8MCCakLHTKPodz6Mt5f2axa6bEPXmcF7yUthD1JTf6qoK1AAR1ePKtVzztgpk92SksaEnse4FRTcsZ",
  "key6": "3vA2BGYaH7JpnwoH7zem5Dyj9iRJZBoeUJkfiURNRY9dRVEm23xabaJgEBMTDmZzxFoXS7qWwLw6BA1Z5jzqwpmj",
  "key7": "59wqnLL3FX589KUHhCZ2x4ajyRQXJUHecghZnSCPRxN4MCAE715HSrKLB9i4G8NxKTXN9MUzJyn2qjeHXBXA4k4G",
  "key8": "4BsbwcoAwotRx4fSbtdLzsJw5K3muk5NwvtiLGdg2n3bpuC8ZAMb27hEBKMjeZm5SuJC1dCGpT8bW2w9m9jCvZSj",
  "key9": "4qKbW4fLoPyfCdMFLyiYiLEx67tmt1KhrcuxLbchuiPbXzeQNeorxLWcULwukNmqmV1doZhbdAyDyqps4P3dgjYf",
  "key10": "5M1TB3mQTnBuWu4FhRyTfozQRRnFesoDjkHUZTbtimwyrxt3gcJVoncYRX7sbunX9pfmoY4opmnTBYD9No6otTyD",
  "key11": "2SUr5NWq6R4SRJ2bNXpt46pxvt9UAEF2hJ3YeZuBECvAu3bA2Tk1hFKAwTr8GfZhwhXiBTPvi7Y9ghWAKioaVgHn",
  "key12": "3CCr2bPDnim3RwzPVUZeCrvqNuSU5z4LffVt7hEWRSMaUbQnsQZfwwBzX6F5k1HuU25Yp6ycwkxGJjq31vq74cpx",
  "key13": "V2M25dc9AKKMYYy3BMQqQ2G2VJ19LAx9J7YH6LZUPiAiBzXgzL3N7BhQZt3YkhQJBrTtbCs1fE95x2aCT1J3wxq",
  "key14": "ZVuVR1TLLXZBXhpSfoXMFUFtRxocHtyUMBsmxRbxAwxp8kr4MSLWqhFKsmqPVAqYJ4wV6z91H5hvNFrvVtvRMYD",
  "key15": "2zPVE9qX5eBUPnSdK4sRxSpZe2nec2TFLaKi49fn6VeKAdLQprMA9Aga3oKknw2QPSRMbLDbb2Lo5JjPjbCWQHvB",
  "key16": "5kxAxe8xezbjZTVGP3YnGbJqUNRCcybL8w5fSg2Eh5SZWEuwZcf8XxDQ95SwWTgp1o975j6XQvCu6anvBRipRD5Q",
  "key17": "493UcMNzBvPkw1hG83xhDUfB95aP4753MAbzqfBPTqPuMb2A9rVGSrJXfCHggHo14giAEZD1QUrrHVuEuFHP6RUn",
  "key18": "JLQCQfAvuNEKxFsDKvDRq1rqZ4Tu6SHfVhQKvQE6DSfUpEZCb5rbf1dmiizGipBys1CbgAwKp5PavEDbvRmAuJp",
  "key19": "4SjB9dQXyjHS733iAWxg5gqpq23eNJhdBKMqD4CP57yXR8sQtCLZs5v27p63EHDfSgsHwD7UjXoqqJiVfJ73ABYS",
  "key20": "5DQBPtM6hsWJeqYwrk3hxGsTxTsNGDA4VqPgUtUzMJJF19m2gSxRTHQ1fyy6qMKPRNpW1iAAQQkm5PFJozf5swz9",
  "key21": "5dv52yvLhkTr4X7e1toLnhy2YceuHtonknKQNH17F8Fmcd8ebSGGSjayfj4NB9VSQ7Z3JGuZo9MtfVwqqap1fBAL",
  "key22": "27vT9hwvhJDyZ7fJqxreAXjyD91jYf5RsrbRYa3FiahmeMEaHGmk6hJvU5pSr89qQK3EaxfEc1c1UBKCwujid7kJ",
  "key23": "5E7VNM1sjZsMosL2cZ8cxkz1uPFVcMtDAk13dqd941ykXw8x4UWB8NmzbdC6dcS3NDaHyqQ6RX5V7gSrzNwNAsoB",
  "key24": "3H9we9jtQ9Z7VZtAQVr69M8jabAaEMs8xTnvz44aVe58AF1XLoTVRGjMhPx232B62XmH26498ZCNactpKZyFgbyW",
  "key25": "5cAscPLCiTHLEJUN1zu3J983ojEEp3KR7upXDVE7LNXQEhpuJaiajVFVnFqvh4ZnxqLBJwWq9sXTC4CeCMEQbaL8",
  "key26": "2h3GVm5F3JnyVCEtWUDa9rW6q2w37uSL6mgDHAyyyCHnNg6uBufyGAStQyomK5Lf9i4vQUiptsKNjwE1qcYkDutn",
  "key27": "4Ce8xEV8S7ZVqUTjyz2YUSgiL6Xg8WBts9uYYMGAkrtWAqMeo1ts5bntJCaXeidAd6cNVJ98fQWZjcSznfGyHR5R",
  "key28": "2WPa6wKukmK8qkRQAMYoM2yMjXGVj3hC1gGh43MetHNoaeubEgkLWG6SjTBAtsQbCBEFNhbCCK765Cp96Ss9PQM6",
  "key29": "CVvK6Nr4fuhJ3VNBSYVqPHVAVhKqLBtvoF8MMJxiQncghMc5yJgPrJoDnqLgRTPtvtYSW1oDvhBmNSK62rYpuzS",
  "key30": "5deY9EketTn8pQr3QjfP7ydp4rk67Kpfkm65LXNgd55BYsQKJ6azyepWVLTL9k8EhJ8FFQUNRiP1Bo7FA8hKzAyM",
  "key31": "2vhQ1UnCv5eFimZYKnZKuNN9xa1Bjzk3ZpwhBMytKumDSSqfydrRRGZvmtTLJp72kkzLCYaTkDKK9ZhqjBCihk3q",
  "key32": "2HnbKM1yDehCPz9QHgHGu4cdDEiVBucQgbBRvfvJG6ajwJTbgp4MunbH4YFKCNpv2zBZ53fdMpJK379CkHFkemFg",
  "key33": "4KWmy8wdT9gMScRaxXaT8mDvqxgxd6UG7FFx8W3YHoreeWFSjNwxjNrqpt7CzYsi72W468NqQvNfNtdhRMpudA47",
  "key34": "5siXMZLZh5HWzs9mP6Z4VZnZRhyYdXsh5EubdoTABcUiyqB1hRp4SU2G5AKZzYKAmVvicTmaiA7WZGM68kJmBjUY",
  "key35": "rwYNngNs3BncL4EqFgKsktzNEKsc1yTjC31xMFd7ePo5FKWrmUBB2hQYVzFwUd3sF8mwkzs8Zvj6xrzeczGaTn1"
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
