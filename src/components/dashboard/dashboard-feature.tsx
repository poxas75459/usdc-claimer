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
    "vUG1JkJ53ESFReSnvsYEMLmeCWgV5zaPadYgDnud6g8jq1AKdRFZwvTombohUbRrfuAtWD2GXxg5rD6bHoKodPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T89RV1Qd1mbCfuHy2BgyNJFzXPGeNsnUvpUE6q8wZhYjSH4BJpzUbEhjUnv7nMeo2w5GfAV8xb98UPi552qtVpu",
  "key1": "evfTfzci93tpVFJ3DGAT8g61bSJ1xHaQXTbqrS58XAeNkaVcEGNhwwJjzUWzGPm1c7B5YCiQH12ukV1bnFLzuV1",
  "key2": "3usjhiASfTKRhV8jV9f9KRuVwHdGcR46urtHxL4daft6nYXTL9BaBbWte8g6fz7W32z1Jf3dwZpfjF8ye9pW9YN5",
  "key3": "pMqFiiRpzXnZq8E7pkzkPpAngS6Vrg7C7rjfTv9uubnMVUs83zVDv5MvhY1HigV3m1VUzVRuhHFTPfWDERSQwBi",
  "key4": "4Dyyc1Mo66kNQAtearQc9GuSWQd5HzucUEFhRGYpWK2529gSFfoigiM2CJYYNKHnX1tx2jABRhrPyRERWqYrZPwR",
  "key5": "2kEskGWB8NozJg1ZNp8A9K8JHTurdwqQhcoU3jbaPRR27a5kRvynMx1QCNCFqbT2u12KUGZDeywBQJb65diarqZi",
  "key6": "2Coe8KyazAumW4w45geFtPSDmUPWn8kqmVsLfF8yETDxT9vWHMrncC933EgR64B83WouuK5XpQWKEGqErz6Gx4r3",
  "key7": "2UNFPepR8uqLgoVam4XLxUiyKchqnajb17pDEh4EgkBfBFcR2E9vhHiXfk4q2V1t3sNurtJ54szszNidN8gj9cKk",
  "key8": "4P65xKNu2dD1Uc5pTg3ggm4BkoCyCZxA6kDZgavpMtCTF9GmjEuiAD7AjdxNWA4fGwz9ntA5mXAka4B8uAmvTZtv",
  "key9": "3PGXNcAuTZpaWt8tnudTkE1TSbvMUk64aaHGsjt8ajSvdWwVUNPvTF1YP5xc9oLgYNkDkD11EhZUZuLwCVwbf4wb",
  "key10": "5m7EFXLnZy7rQkmgMQPSUeCJEfNC4EPyR26mWSRyanYG4zouF8DSgxbdALWvGWXn6KRvXSo1Zeo7NpeHocT1BVbU",
  "key11": "2h7D45RRW3dC4MgiQxYsoK2oQW1jR17yZ8Jg3ErXrmY5bXA485sqPh1ReQZZpx4v2iyp3AHWseXwR44nw9Su1TwB",
  "key12": "3zauzuNdrQPgpDkcg7Mvv3aXz24eqLvn549izjdhnW3GVHg7ihWcLbpEJbzFRr3YeJ4Gve6FKShWxPZaZ4NC8UVM",
  "key13": "26z4TqZTNUaTn16yaEfUgPhX2u7ztksYAaMN8L2Yd9pTefTGVeQcbsAjJXDZPrjKTDa3GvJGN3yd1yfM6qmaAFPZ",
  "key14": "2utaG27fHZbhRELSMyZz3nfb8nWiRS7Wnv8NQ8eVgE3VpTuyH2NRrL2buRbgzhMqcuRECCf7u2sZNGE2fVot2gEm",
  "key15": "RCBGtmk4Lw4AWGcZZfDQ7HYmUkJ3KzDWTS17yFNjZXNJphtRgm3mLNkji3kvaqsVfUL9F4E5SAegXHo5UU5uQoh",
  "key16": "5xepmhSCVBmQEZRk1cSXWPmSKb6y7vLmpE2cq3FEuzphA3xciQLZ1EW8nCnrE41xUYHohFXv6XcDZAXx3rJcJDNp",
  "key17": "2NdzRetQrRcMwwfKXLdnaku9Mz5CXX55R63pXXsBq9ASsHmwYB1wqwn3hZiimWckSs8o6bjqp87ZN63BNZKdFCjk",
  "key18": "3ifz1qsxMQ2vQbypiFVDSCCojrtuXjM51yrJkjePhqTeq1gpgtkdFhGpDGDvsNhpZHPr19AWaKaT96fvx5NKR5gc",
  "key19": "5og4YH4nPC5DTPCdx5xdLB6bX2NxnKjYfqSYu9JeZYXxRg2LgQTuPrZuQUEoR3QqszpToeRfQbNGzPAAHYYbQyRj",
  "key20": "2aaSvdLhndQ4qnbyxMTthYDgSAKhHYDdqzRcLRFRSJwyMnkRfP8qaWEE3jnKrm7JFUp4YAmB5u8TJTEMtkkCDyaz",
  "key21": "W8zVXsYmvsRa8tHAvTrfFtcSon9j6qcDCJMpjQuRiAdLUTQkqqaJ14PWF46NNcikeMqyjMDT3hU9GpnzHvA6ihp",
  "key22": "3k32pNRxEEGsNcQinuDJZ1vk5ziaqgDmNRGgZc1van7ZbSWpkADdRmAo6V8YpCTMYvXtKRc3S6V5jhfFJKULNgMy",
  "key23": "Hz5rHgcVPvE6cAMZTp6kgMfRW3xe8CiJ6nFwvspsesSynHdUWHVhAjPkA6EtNMSUEE7k1PiahR4nJzq3tDVy7Ti",
  "key24": "3R6EJB2P2TzpKjeP2tj5PUrcB89Vv5rsWEm71DV1tR11745fNcM2WfeZH6G457ggdiHt8QHTADpcqP7jBGpS6sJP",
  "key25": "3DTg6DVkNSWmcLSz4xoz8H3Zf7VCUVMBhYzUPTvbC9R1e1sxzqvguZuoTP9saxg8KPDr5RN9GBT1QvdkAenNbUcJ",
  "key26": "3DKc3fw4NvazMVh2qWFA3SurTfExmkJ8SqNHscmUR6Yy3pDGNviMF3TxJEthPABSUB1ntYqWQunXSaWy5B8ZaQcF",
  "key27": "4wdmimswhR7beNXLbNxQwn43Z9V3BYsyh73snzFByPwNSTgMj6kP97dSAHAFsjvrWpWTMZVyz91ZpgpoaS1Kr67k",
  "key28": "2EwPQqzHAH3P2KFfSWiWDDH8fn9XJ7jij5Pm5JTdzU8jMGtH4955qnEiaMRLeN7tWX7MyZvCQv3b6tMRjh8NYb1g",
  "key29": "4MgBzFfvTropt3zawrtQZaHX57ynqhJDpbuhDtit96CGsaiaFVmYNJGrQHDGRLkJ3tAPLGsDea6ZpALrqB4WUADR",
  "key30": "MKsUHtbV6N2U1QdtKYGRoHUcUCe48FhmbZ5HAQvRWAXrPcTej2hLCdAwyEWyre5Dujbu45R7iQASxkKx5vAZpvw",
  "key31": "3JVGkqVvq9sLSkFMJE1JFY1nUpJUxQy9bkZi7KRTWVwQcKLaLpCMB12VXxBmij7bWMvsmJyAcEVRuTADHk3hvxnX",
  "key32": "2hSyUgqiGdXkj8mzcR2E4tJWWi3dSior69eGbftX6Nomy9TKFPnx9DB5Hn2wvvCuCyxZaqBZeLCRjyjAJJWGgPir",
  "key33": "2KRGPgmUuFsJ6jEff9mBXv2oXh4bMLpBtYPRujpV5u6ZZhhR9gthuP7ZnhavcV5dTJBbtZNhXU9D5m1w6vuT9FZ2",
  "key34": "2g72oaqgpcWic4zEXkNf8ssm1RFMDuriovXnR8vzfnAkNArUWNH8BNY3zDNGh2mNXcdgvQmjtNk9gwL8jhg3F6BE",
  "key35": "2ZrzX32jpuKTQZFXX8awxYCXxoqXYh8eGDAPR7WwLbbuRfGxnqtjHuxUgSe8myBa13AQEefYuKmz8c6KCseS9shC",
  "key36": "51P6128gvV7kFd9kxLzk5XHFw4GGWyHci5LxrwSJqhJa8TxGtsFMm5Yk1vSZtknvYb2CemTt92qevwb9Vjv3RxFW",
  "key37": "4SHMNv4E9ARkkmK52KE4f1d4aLjCEo6cZjmAvVb8SzFsAFzGPPkWd7iPJi8TVb6bZV5YmD9QjiWPmeY6gi7hWYeB"
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
