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
    "feRAAPtw64assktGPW7iRuwC1RKLUGyTsQ4QNVjX8caG2YLEAZNXJFqCbbPKvrhagZ7MfA9Caau3fHvx6dLqBaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TLVvkycdEjF9MKEfJHBBeDnmZvZdcgYeRJXh8CwKH5E7xzPdr9Z5DAwKK8mTtqaudhPWeLvchTKKjpPn7b7aMhs",
  "key1": "5NNTu9La73TTFUuVc7nNzKtGUWSH1BLR7FPakjKEVRSdxMz3cWXvZAb5pHYQpDuainHbqvdW2APXpqmvKHLkjtWQ",
  "key2": "47UwXAiLx8Z8yiUMNdH7gZwnABFM2UXANCXQ9xBLhBrDodGV8Zm6qCKggnkWYXdhZqqadGkVgCKdbrKF8iZi8muo",
  "key3": "4H7EKDCjmmRrKwFdSAEpgPvVnZJvHqX2aGkeKF4TBzwaVnnsn2EK6hiMAWXzxG784K74uNPJ31dDYNYwRZ21a7pw",
  "key4": "2Vg3X3JYoskD23tcXxyQQqs6ckfCuW7igkNFaBDH4v2Z2FRWC2fPmXJx8Dy7BULyXjtkVnXugufD4s6BpeAhidrV",
  "key5": "47mEU6dgR3YB11tDNmCCePv5EvmNE67iKccRNDSAGzBV6tCyDN9G2VF237MBgQJ16fBFdnhjB7WKti8CSCDnud6q",
  "key6": "3i8o7Ct2LvoqKAGT6u2k6uurNjNtE4TxVKQyz7omXQZnUyvQyBaDmVrZ1kaNjZ8i1sDJBj55iErASkNs7AreuTSt",
  "key7": "vG3cqmsHmY5eUMUsFg2T9KJ3aczqbzQQU6puHGa3LcLysBtoWqfCcuuS9KXYUt24e2rQWuocUayFe1okX7qnErb",
  "key8": "2rEZ8MZouqA19XD1fmQx2P8RnyjQD62BM7bhMw4uWr1tZu639TzcF6YReTc4qUkeNvor8HoknYF16VnrxNZgCsLc",
  "key9": "5q3qMdwbRMBFLJBpr2UCG1RfMtxFaQb92MM3dBD7SfGaj5egSAe3wm78xhqBhK6QttJqBoWnA5reqf7C7A4r1F4V",
  "key10": "9CxSX2zeqa1us8tqNpwqYipG1iNGiLkvMe7SBgFDn6EGYkXoKFhqwkfdXBwvKje7tNjXt6qHBRHUFJeBLWdZqzZ",
  "key11": "67VMeiLrPLF9fk4L9w35j3DhWcJzcMo6d8jg4aHc8dmZnmBnvupCgcFJkyjoWe13Waso8H3ug1q2vJ4M8xacXGKh",
  "key12": "51JC6TZzDBcRyKY5eEyDcd4pEdvnCMKzDizDNs2ncJKMbiXFBxSSJm4h92y71eLrFphgyEqd7eYdDSTND34QreSC",
  "key13": "3bSrG1ALLnCKsipwBm1kcCeMnDKnSn62DMBxYqipX2PoDupzXiipt7AvwLM2wycUe9HkJE7Y5NWcTE9NEigagTx2",
  "key14": "5f7dYM2wthRc83LzqSkcvHRD3dkcXbYREVBWQhFwHz3cUzACuxem3vvEumuAifNzx2kEiHQhcvfvGbApkmf2Gwym",
  "key15": "3RYbrku8Ry2iMwF9zuybppH7GR3nkb1sWCpuNy477Q2pA7H3mbbH3ZKzdo9NWtqbEtwFkqqsEz7zDZFKGrpok23B",
  "key16": "2sqeBuZPURzp5vekCXWbG2MPTcyEEWxJLbrJxkr48a3UXioAHPpJypHYNE7P4cZb9kU4BRyi4z6wwhHUFNqRt9Tk",
  "key17": "4Qjc8xBefj1pmr44DE3SeXbdreLD6hz87BRUHftpaYepzvyPw6D8DsVKF1fnGCDg2psVr7MCP97PZpv6dVfGGVG6",
  "key18": "5rF83eNMxkLuvJHBup9AnyGFSP3Zm3Gd971GU7oBukgXNP17TNaL2WZyv6QkAZ9ds5Adys7Q6gyh9p3zsP4HSRps",
  "key19": "2eUfWhQLnpWYYm5W8hVknmK5ryi7QkfbRNobSLxuKNkwaXriwWyZfAJ46LtqyqsocKuVDufgg4BASXf9uBhS2nhs",
  "key20": "4bWFprezyUS7hdHdHwX3b96oTe7mNpn9zeAVATvMniKUrqMh5NHErVbHEQZAqq6B4sBjgeQPxY7s6zjTkoXgsev6",
  "key21": "2LupWEEnAP4zmyfewDubun8MNRPPzYLzSigVcjhdDbLMsY49rTJHrj3uSkP49a6dRFgsiJSpsGJxkepb18gVuJQz",
  "key22": "4XWmHeWiVF2DxdZy1bNTgF4U5FUToASpoCWFkiiRzwBBsV6thbKSmbgK4R4NtZzjvvrPqoTU7MW1J4TLi5eAiL6m",
  "key23": "4L3G2ZcPjvGj1t5Gkkfg8dR66aFXiRRVMihfcAoDc9EraaFYjiv4TNdw9jeACN7J3Fq9fmSBfewFUiJpQxw27VMv",
  "key24": "2cnyvmsmX8rRBUu9ag1YU17TsSiWQCnRwH8HC8zLsDRzPQqcgfharrd5caRX6yjuEcRxHoaC7qRWdgo7xKRunYkv",
  "key25": "3mkgTH44JZu6S6jM33XxLENwFkya8xT9RMAANgjoUbFYDv918g7HjC5wxvWgoBVCJtFK26UJVNo9UJVUvZcNAfWR",
  "key26": "3SHmAXAMKece3unExXgyCi4cbsftifY6N8rtMunwBgbDjjuz7hFoGVWxZF9BiCJaHHmYDs9TixUUwfnQ3FZx9TUn",
  "key27": "3pD4Yv4GuWehjsfvatttqcT2eH3BqvsS7MbGT5TXDV1e7Rxq2eGydmXHUrNjjgy6Tenp1jmpHqg9h2r3LN2TNQaZ",
  "key28": "5n6MBb5x8UDnYpdqUqhqV2HxQqBV7xrBmEW6FwjwyQjzNKTCjUJsfUczyBqkrJQGDqff2gAVKEubu45gNpsDMvYr",
  "key29": "5Aa6fitMWdxAE1fondyv1Qbr4tdyuDUZd1n7ztFjZ8CWKNgyQeLNBt3zEbQmZyAZDeTRMaPJvQ9yqyi96iKRKUZT",
  "key30": "5A9Q2NUGU4tA2ApxGBTxyuWX5a8UkGM7D54k5mG6DxWD9Xcd773DGfYcdEA6TeFm9jwicFwbxgVUx1gkaMP3BMAR",
  "key31": "4FSqN6yRQmqZQR1LA5dpxa4dWqybqScMFJdhpHb7wRLH1pfxCYDHQLZWNx4N39U8XnCqYmJPEJbVvmDzCo3XiUFG",
  "key32": "RJpkc17jNy1nYHfYFtjS4vjciK2nsLn73K8LknXr6vPSYQnTpaHsFWnGu2NkKWWdrvyyyNKFwtJQtYooitBmCjU",
  "key33": "3ZttaMeRLYAsYwWkb4qd9xgHFK1xQeKeXf3uCuSv4iefhdRf1FTg3ce3i4hccT9xPcdSqfKpy8Ub2qLKZdMEpM3M",
  "key34": "62M7tKBQqBYmRuugdPMwrKwRj2oqQcNc3JJPtDS9g62DJxmKHjVav2yFY4bg75PJ3mb3PrAkqwfXYhfDLEWLC4Ps",
  "key35": "2ydM3oDVbjkmNWTM1Dz3XWhkcmNN9VZhiaf7g5DxioGpnLu6EwVpBi2U3LsPWkZUbSYY3jPBRXCbYhEoWvEtzSpU",
  "key36": "3KacCC2H9kYSRz5VE1svePz8nNsQrykBhyraUQu5BGHC6d3Cm6sT93pU4hsH38bzz3xBf8dGz7GsiystL7qJn3BE",
  "key37": "qteiwsgRr2z1UDMJt78W2jmi4RuXovpB7Rt2Jt6PvTXedycQtWPC9sSikye8yWTwVR2Q7Ng2zBSws29qbhAi6R5",
  "key38": "4q9FTctmuggxC7DNG8b8w7X1yYdgj2wNpR7jBTAK6gcsBcJb8Yd5g5Cx73voRgEfgvmG7SJigzysMVCzuJAnDcBy",
  "key39": "KX1A3CwWFD27sP1i8WkqKmPRVa5Qj35PyEw7X1B8YwDqmVs3BvdfgtgRpj4txNQqQDNFCkcqRkvpFFYAAZNzHbo",
  "key40": "4r16e4aq397s94aDFFRWRa2ghKToq672bgHFVqenCz226doL9ZgKSwZQekuNd9BPJP9R2hdZNuFTXfMbUoQPNFW2"
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
