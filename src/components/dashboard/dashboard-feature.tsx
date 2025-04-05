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
    "5LsvGM6J5bfphfizkzRv4JubuD4DRoHonEjRe4E5nsXVrVATbBX6kAX4q3XfL8fkyM5RbxZjqc1BGdXESym6eJ7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkNFtKCpf4H7vr1knDTx9oBxCMCii7vbNExZjvUtCrwercztBrY1DrVTdjPBsphL53mSbE61bL2d2DNVVTAjCfA",
  "key1": "f9NSosMw4wvmpaTdKk5tRRpghH2QnXAUmSkXG6kfyGgRF2pbEEYJbnDnTGRdTcQiMsxZ9SKt6BhFmjLLhLraCLx",
  "key2": "5LkZTWSVn2Eo9Xip5sqvGVusHakKbE9M4e2KJcTendteWRboVLxKVRKFVSe9Wvi1F6uUQRVdpt6eGQuBHASixWjS",
  "key3": "4A6pbX24juvashzepNixUYi9Z8sqEtzYkmgMB3bPZYnssuahbGqtcXqxWrN4BcfAaKoyYqAu3jj1kZasvQK2YpDD",
  "key4": "5ZTRE5CggV1A6cpfdm9qLWRHa6ZN1rkguDpBfzs1tBrqtzRbMHUQb8iBXMByZ6iQLgWeviTynrniSyD2hsZ4UVQf",
  "key5": "5FwaVQT47Wk1KjGyvpRELv2ckGjyfRMHQGHoW6Z2jiWj8HZX3xaNpAecxGFDK6sdsLXfQPZyodK9E6FwYG6ZjJdM",
  "key6": "2QLPQPhCbewjDLeuVUYQ8xYnp8SPLirnnS4RKzhd4yGS4uXG5o9tToq6APjDuPnrBMKHUWVeqhSd8pfFo96GyiHz",
  "key7": "3z3qtMkGaXxiQLwuxLhi2BQ2syAhD8k1rnZ3UwCcoR7hgBPiyzyiHeM3GcaQQXGkagucyjjLcn7zEXqypzzyThA4",
  "key8": "5SrdW24ApzyaPCwjZAupoHUjVCXndTkqZnF3kXmPEHxPrn5yGGdAWudkXoTPKd8uhRA89fKiQdJ1HAfyCEvdUP9i",
  "key9": "285jVdKX5YsabnoKh77aWYFiYAuCjQiww8TqE5GXDj4EXgjo9LrWtDD9H3mC7T6FUFcMRWtnSrLWBvvWfab21BPF",
  "key10": "2YiSY2vMV7MhcsxEoy2FXbQEdkWjQUq3t1jfppniSV3PnTj7jKnZrxcKrEQRdi3TD8Zvg6migMV7yGDL5snMGm8M",
  "key11": "3hnuj3ZvRLzJPerXvarbFEC6VGJrnUgLEu3DcHYgV7oBQuSP99pbwSbACeAS6DqDdWpKhn2acs8FZM22hqRK4fyL",
  "key12": "5BZKhRxKs9yhBeYCBNiQmBdL4wZYdoA2JHCpNj4bjJsEsJLsJfB5DgLJnDBFVh91tzXcpmGEVTetxe7XuvEdB2xF",
  "key13": "4DYu152vk7duXa1H36KcAhuvmkCjTyNXw5nbEpoqbG2ddW3cy9yHBFTf4Lufzyk3141m6nQc7a6ccCvoivFhbHdi",
  "key14": "49JJBKKByryCQHc3uQ6riF3xMZsqxfwozHks5diJDDLPbPghP9HNwNPN8RPfGFbDLi5QPzDULjTe5vXmBZuvG333",
  "key15": "2NAWmgWy6GDPHFhBVSWgQRxhinaLs663CVL8U4B34aiWv8f6LACXhHXggLXZpACMofTXoZpSyuBUTs6feisEtzYW",
  "key16": "3SAG3uGDVR64ewwDy35j9xu3gFT5saFF38ysb9kTxsaUpuevtWDyrBa5NSFdXY8xhuKNGLuw3aFw75L2kJr1uGDR",
  "key17": "5QUhgc9u4cGu8kgHUCg4eAsQ2Mwhg3muTizL3LtCjCRiD76ptXE25YAwdcp2rA34HTp1nuedQhoe5JjJiQo9rsTo",
  "key18": "ZwDFzmvHvwmit3NHyd3N9tu8nmaNpsz2VrP9ijziN5iCCqkgcgwdm2YNtQUUuAYPz46euyZpV6BuAtnbSuSBRc9",
  "key19": "5AYPjBZ3dxrqtpUPUmW4jFcLF5Gnmb9NCZ4wECxn8ryXcXJb7W8uAH5d867X2UD7n1xBoFDtsNxXfsLuhmMDATqf",
  "key20": "5wY3Myw2aRUU8PuHgveAtYukVSyaXSAD6bcr8T5LPe8c5Q8smkPHkkiTLGWNyvnt9ZpC3z2fbF6fneSijyWVK4zS",
  "key21": "2rRemKWhA48ja5m7HVtEqvH2CCXKqp41HgrPkfQzTQJsGdmmFpYH6DJNBfhBZWLeixT4Xu14viDpg5JJ4JQL4UdQ",
  "key22": "3jXMkbh7kpK9bY5gXug5eNBPfgQmcuVkQZN22jYvSTVdPJETdYiBJFiHwkogVR3KHyUV6cRM721DWV6YuVXHawPz",
  "key23": "2YGr3RYKFDtiwy8QtWUEJq8oaLnNQsjeA6xyHRughrerr1wsvFGdTCXR7NUt66bxMuLSsSx4UW1CHeiyWUL8vXL3",
  "key24": "8dfgb3UXitHkdfkr9RQWwUYH6PPDfZJpDeqSgFZLoVzfyuNxL57FNTDUdrVwLF4cMSPJaN4LCoH4iNsYXpT8ANk",
  "key25": "5V61mXFuExDaG3UxDQVMYGZvU3HiW7fJZme3J6KUZ52QcCEDCY6BwDokQmJL3XYHvREd6t6Uf24d85FaohwWqnQ2",
  "key26": "PMeVkvaDZ2Kbi8peYRvvo5UCAEWJdG3MNdA3XJZYWgFiEX4essSKRAQc9z7e7oBZtKpo8SRQqees624c5tK2P4h",
  "key27": "iWU5Vw1ddWDREiWnCRiqavca6r3RooVSn1XsrL9JCLXAdj7Z1UwA4oeCHuXm3ALBsbB68g5Ze17q4aAgd3uNnWr",
  "key28": "36gHbhJoNnKbuqjE2zYNBLxHzk7AYg8hiLPRpZuAk8PJueWEQbMiG7jVd2271AjX4t5gy4Z1D4MzrV1ucb1AfgD2",
  "key29": "5xWkyU4DeCp6j75NF1UppCHFv7fM3HTTuyeUeJmo3joSeS7xy6qvJW2RHvuumxP45we3E4Ww872rqgWZok5X8nGU",
  "key30": "4gB17JoY6v8nhNsBBjULqUwNFX75CFn3naja3PAYD6NfU8bL3o6ap9Zh7XXN9Kw9hwiHGXy9Evvq1gG7mkferuBw",
  "key31": "36rGeQiAzmw1QcpC8dE8vLV6xTQzBN3usvTT5dr78fR4mxoCfXJQHDiBQiQyC51ADZvmiTprxgLY2AHp5ukJcdFH",
  "key32": "mrPR7QsYQ8WapF3DGkN9UtQLo3Ts9ZAs6B5vT1XpQfzEjHr2ArcV5yvdkNMy6Qg5DNhiSQeCNW6cCxmuCDrujqh",
  "key33": "2fAX8tDdgLcS1BqPFombFa98snTcMo57CFNcWu1jTyGJUzEHuXbkauBv8oeiKqDsSt3F79xvLPp1YPQgPif1orAa",
  "key34": "2kWGPh5TLjsLCEgCfgRA9HAHcJ5YkojFua69QCyew6gtEFYatRB3S32fGLZg43GoTgFtQR1x7jhbfyCwCr1MxzF7",
  "key35": "32GJgFJzAroPRpJrxHoBu3t1TcfPfpQvX5pEPyzSZRmDwVmbqG7qzwMyqvQEGFL5KkC7q17AzENRKxRmmEZcYWhZ",
  "key36": "aHokR2oS6d3YJJomqx8vWHsQ2UwSnZcY2sCs92BHjswbKArG53Keo4rkE1aneon7jYv7aBqF5NDyE26Dcn6YkZE",
  "key37": "5gKjMyujhDEDTTcj5AN129RGRa19g4TSVTLzYn7doMEUbxwD7iav4pa3HbJVkSg8VL6zLf4tUYc5yxoQAKdXdSqK",
  "key38": "3ogbxrQHd1NpvmgQfnu1gC33ZLikLBavqiUupxUJ3YKyGuENokYDxLpoFEsodFtEY3TFcQhLf9kYbNzk7CauqdbQ",
  "key39": "p16fRSPoByStu2e1Lit6bKk8fiUHqGHWKmh1yn56q5WjQ6Swu9zMeBhi9rHLr2kp4Y4413ATh31bvzHtZQQzGZg",
  "key40": "2qpFrnkY9w1muNWMMe484oQJ91af4dfUeLz7Hxb1W5jcFRpGhdrtoU26em9aS4t7Epop9NwyJQEY2Xba8w31qXgx",
  "key41": "Pva4p6Nz9uchHRTaQM9xx9un6hnByGHNbingpk3SbnfSGWKaWQtZHnk5HskUzRVhZDn1zB7XmHB1ux4E4RvqQfo",
  "key42": "3juBHyHyyamRMT8pyjRtipZWGd98HfFSaHzkxRBxmj41StwVAJWz2SLBEZLqrBRCCNTz2AYa1FL7fJGmHRtiGbRZ",
  "key43": "2nx7RyyQkoqrm4ys9w1oVXiUT3tm1xSq3NaoompzmumsHVbNtzWbf63CnqmNKEzuUnWrrh1RpnwA65zsNtszxEWA",
  "key44": "2ggTm8RtxarrFrkqx1Ttg3EGWgJrRKwdzuKtZRt7vQKWxLnx5xhsSXeURqeMPwnBx9ABBG44MKetu5yoFVfQtux"
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
