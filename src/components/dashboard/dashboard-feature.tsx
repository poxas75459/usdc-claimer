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
    "3dhRbpa3CuoPAPbCiWX3gm2Dn1eHaNBhnyFxnEfbuwtDeeFHcAvRMsL5qTmoVrqBGenrFNQTT4SoeWpWJHiLwaCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvR3or1TSfumYusBFACSL2o1TStz5DCgUwzGAzMJx4pbWum2iFJNXXYVtM5KYAHyogw8UKT8MqBmhQ4BMJgLRQA",
  "key1": "2ed43LCkVQqPhEVdesutzLS2JXQZ2djgmvzh9yPXMGmsH28Gso5vhhF85CbfH994Nvkgj8XmrgkE2B3MYUciVZ4F",
  "key2": "5VHi2kqF4ZEXXAcSXW6XZ2n8ZsDrRtpUHxf9bGD9UYEinxN8oWfVwiqrrhf5NuovfMQUzJbaabS96EFpc6g26kec",
  "key3": "QTL5gNTT4p1Vvd1HuHasborK4PfYVx8CEhx1DUpwcsi6KUXmyaxHJonQ8QkRXydqNCNfA8zFWXqhwrGf23nnqzD",
  "key4": "y9YAhoNCwwejygjZEdQML8wQW3pCnqmzvgZV3M14tymXEmz8PM7j5eP1mcNXnHWuSa63MeHE7CuSdgUgNAM2i9L",
  "key5": "nxdcipaU2qGeKXafac3G1qVNAUNFbGRdmSTz5QYzkiAgaePCbsQpENsj9KjyDTqPpKxWT7BHBC4dKqqmEmvMnDz",
  "key6": "5DnE2LqcDut8vAXwXEe7oN1ZRieVKenKBQU2arEbojmvRNzHy6KqkPQPxJzcFJgopBR531Qyiyuo8AwXYhUtVSeE",
  "key7": "2zpRXr5RjLFQ6i1NJAYAPU4TJAJiYhkomZCT9FAxvEq9DB5td9rKbdkfGAcrE5XVhHSYzCGzyDF1yitbVbzm5bXw",
  "key8": "64w2zb1EcDKPXNmYGa5fE6PHPMznY2GEXhjmsnimJg4qwEyhjtP7pstn7vM53UhjAmEwFNwmmCVoFxwbQ35ZTacM",
  "key9": "5ADQSNSjFYKmLSeTi2DKPGZ7doqLFA7eMZHaC6emdopyCzHBPyxn14t9v4W6yjjvjNttBoGRJFD4ZeUBq7SfVHxB",
  "key10": "t1eGeMUZAKvkevva1g1TeNMWSDu3aARffFHsTk2FSWwe5E2ABry17NJtYjiM2LyHXBgzVRfcPpNxFd486eBNERC",
  "key11": "4UvZxJuUqMVNCCZ8Wei41RcJgLzLeL9Jx8xnFFeJSdKgauAdMEZDCPtueDHfbEnpHMjqqHj3SELxLe6KBDpp6KDd",
  "key12": "3fcD1WbHSPsPAaw77WsNecqvMG3Lbtdzt8sEsQiMmnpW4CHFr8sjXAz95FnNUjcCnHFCT26q2CxaPsrU7XVVCLYs",
  "key13": "64B2XUiyvHfxDh8uoK3Fi6ryb5yR1emCf4EFiet2NM1oKLjSFh6ub4WPkuEzYcE2N1kVjr9GWLwychNRxKetS4Xn",
  "key14": "pj2thF9sPLibSNgPFSRyL14Jdj4RjFU1yRxRJLLHYibakFyEfzK4s1i9L4LiC9Upr1b9KuhMrJm8gsT6PZDc61Y",
  "key15": "4b5SghUnj2YGkz1GXXZ9VQTnA9DV7s7tMhE5vM6wFkEgqubPc3GYoACBh7NVjxsNxSmbmKHv3oFpjZa4G3iRVN66",
  "key16": "4jRXPXwgQjN68QWdQaUcM9iDi7aLNPDA7dQtJAMZFtd7WN9FmdcvUKLhjRpXeY5DD6pqbm3jfWdUFqTAEYUQsXH8",
  "key17": "38xBL6hNimaSWbTC5GTQiW2bN9s2kS7MiwxGo6HT3qDVYxw9D32TycXmiNGGbzqPFjdo9kdWH8tSyCYkbmW4oHRB",
  "key18": "4dHweG97aCkqu9wS2gmyLErcg6nogDJzynwXTgUSDXiJ1LHB4KRYqvAVYmuUNuAiRnrcTgcjpqJTAXDGvUYgxum1",
  "key19": "41ippubGsPQZrt5eeLEb5qHfCQzzFW4JCAT29e34bmULWX1uZXjdzXANxQjbyvUaFjab5Cqg55ETahmfCFeEjFAA",
  "key20": "21scgDaWb4y3zp5ZpV5RaMMYBe8ZxPjfvx22S2hEgiJNaPTQH9NsiMLnAqgFyYEeVtaDwoykhcydtNyS2Qzrhfkq",
  "key21": "3yLocfKgU71or5bpqwmiqmJjVZshgAueK4DMnoUCgRjM1Vui7NrZvcNwxMWVutvuzfyDzU9HhNGv4rPrnxRmaQv1",
  "key22": "2h8F7XTzNNLPVU8TkFRYLeuN4CnzpvKmNLKxJAwLAjWwrSSigj27oBnaqTPRE4Xr2gvRhouc1GzxvhZjZ3yuyijp",
  "key23": "32KAfEAm2nFqHF2QYfJgyRLFhZiGAw5S2PmhwF5qQGCHfNEzkeQvox3MNejyFD5AxxCRVgz65GaUHBj1sPwpuBh7",
  "key24": "2GGFqhgLfck4k1HBBG8JSMUF178HFbTMpniVadNMbScKYyjLcHiH48SC59jwXe48HfvzBue4YU7FgcRzx3FSScax",
  "key25": "sZKLbQdp2scZkx7Wua1CayatUVjM83cF2zu5eZi6AwHxyp6hvsB6ugh3xc7BcmDfydgEZaoX45V489vsLD1ECok",
  "key26": "4WXAH4TJgJivKhfYNBUXr3WF4UBZnQZihqDPAjqM5BdXb3oFZt8iiNLfXYx4HFQbM7ch6Kj4xPwsKCeo2ixVgjUd",
  "key27": "1rwMWU524qFGtBeFtjQpf3HUCu8wDEjPw4p7GfHHnxVUh62d7H4bcveFJVhWuefNnKNAQmB8pa5bskUcN1L4wiM",
  "key28": "5yuJ4xxkNBLgMvDSDTEB9mAyrJA9QTkjFaCRFMLeeWACXkaHJe1s4zPx4Jw86TqeseB8qWjGuHANEEjTh8kXT76s",
  "key29": "4uDmtdGFVUiwAcrieiiv6tmUB5xSeS1ws3UKs9yP2hQhuWFr5w8jjCRcUCzCULX9zmgpDCtFpaRBSZpFVHUCM5tE",
  "key30": "ZAVn8v5kCupW9f4mwsUJxJ2gpWFXPojVohCSrtaGziXBooh3MxK3yW32ALbjNMYFfjzKT7DWKg9uQAJRnkDsqZh",
  "key31": "3sYwT3tHXGqRxXGcYy3P734RZuvTyV9r4ZfH3NUjn4NbL8JpEuio8jieFnPcXaCi7z5Yx2jp8P5VF8wmdR5APhBH",
  "key32": "aZfRiD9Le6NcXPWZdfc3MRKs8GeZL8U7FbXsJieDJLWcyW1Y4rRmRDcCDrkvfYPc1W6enX33UZJzu8CLGtdPSJb",
  "key33": "5grZEWQNpVTUSQibAecSG2rMhHJZuRwMiu7h39KCTo81N2PmWKBn8n2sSrT6reGLzDeWzYpskZxocLQ4U6pVa56t",
  "key34": "5LcrySZi5tCAGEjKyUxWYGbPihNJjQ2k4joPdbHCkdVh7Bbn6gGgthVitR3qRWgAeHmC4kExqA2Tib7JEL3w5bvf",
  "key35": "kc1kLaUBUT5JcAuGWW255JxnVBVe9ZaUQxxAt9xWqRDxmwkQHbVcpHWMfnE4dYYAcNuWXsTcQQ8LsU7b3kB1gEj",
  "key36": "4nKeQQyJWEGNhmrQzGbuqsKpkvUEuDopDcV28ovaeKcrhFMpMykwc8XCm4TkPFunEu2EpGefBNw5aq2KaXoAmaZL",
  "key37": "5CcVc9tB58kByttFcnuyGsBZqLFV7vob1LbKG1TzeK9QtY6tq7GhPeGsbJu11eZiQrLYYUkpa6GRGRqDEuJw9umC"
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
