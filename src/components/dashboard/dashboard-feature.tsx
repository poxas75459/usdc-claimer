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
    "245aKYDb1koRJfeY3gujbiagjGofEK4n6RV8i7WEAQqSFu1z7kXVyeGe4juTntBACQQZokZxUFHRgfo8n5FtcC6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g3Cov1WDM1vnFgWBz3rYJL6Rwdit4S1imprKNUozUGhsFHYxUK8v6r2WJpUhw12QXdbwBBhzWHtiYC8PMFDaWRK",
  "key1": "F8hsxmzVsQPDCd9g78uCQNgHBkmgSreBcNSETTQUyfntrYmNXtpFaRy7vyy7qmpGWLW9WEqtDYjWjwP5dqH7P8o",
  "key2": "2ymQ1eP6L3Pz4Ss3prF8okiWJ5jhTTWQkdaMYXEsk6jiu74vg4oWeyfUj6dsvTH1JMWTpW8b2TbyYAcrBv7bTz8p",
  "key3": "3W55gEAMxrKyebE8SHniqzNTkwzRiVLxaCFSrf4awf6j87s7vW8HQxKYEMFKdZC6h13nhnScRB45zuMZSjsNgrpZ",
  "key4": "3yTfWJdYAXvdXL7MJLwXuVR2GcnJgrkcMFWZT5ANpM5HJWdiibTtDgc1bA2kk8Y1rPYYSDxs8JVAwpRBf4VcA5Cf",
  "key5": "2LcX3GRN7KgDEQcXkgWCdyF3yZjqoiUo7QfACSq74JwSv9Fgvb4sr4r3AmD1L1e26CjCz615kp9Rfd9S9Z1XUqXV",
  "key6": "2Je3uYdeQM9pmaAuWriJwLqREGwcaeaYA9hMNzsPRsHDTzM7zkqyTBxifgAF6cUx3ke7fpHEkET3PXfceNZzEYSs",
  "key7": "4iqqY3cYn3dYG7utT1h9LHfgemmYKW2KMFkDyQ5ZvrU4BG7t2cxgJqE4nN2RKMNcJF7EMniyXYNPG7LbXhxy5Gg3",
  "key8": "5jm8tw5H8TPhSV4H2VEzVrndZchUoTvvUT4jELe3HQZbcVYy6h84U744pHXbPNheeTiSRBjTpaYP6JcmwQLDdjN8",
  "key9": "4aktQi73L579nZVY7dt4wg6tEsYSbUuYWwAS1eFHyFzDZPPwSDKRTNNmajfYf5CDuyWFbBippGwBoGeARmQgedYC",
  "key10": "5Rti7dQUiCK6x6yV68xkf17jEbt5vQp2gvkYiY3tGx9TiDqx4JS5q9BY9ySsRt5XAsy5jW4xzPQwkaJdAG2jH17H",
  "key11": "4gSWffjcjLWvePhpcv216WsXzwwseZbeexRMB6VSjwubMKh4UXiPRhpX41y2VcQ6D1Dk2XKmieMJzKbB2PiBF1Ys",
  "key12": "5723dwSjG8yw1CknA88Mm8YQr1zqRpe31jdwRqWePGfzpByEY7PAxuHyQt357JBrNZ3P1VwqA8eDb7NuRJU7eqqm",
  "key13": "2XwN8a4BQksJmonxZAMAf6sZLKcb5q8hiAmPEzysteLs48UJJmvZNSUaVjgV1D8yrsjWA4ZWxFQmvAKAcdpAyq1A",
  "key14": "3rgFXaTLaNXNrpsPDvsTKB9St8KH4ihuzqbRFVni3fmqpAcY2gsyaPX39jqityDLcYETAud6kc8V1tafy7aZzfwJ",
  "key15": "5RTUgAhSd6V6d3vGXzihPGehzWBMDQyVocKnXwaiuZkzXLkmm8sGhnZ2Qj6QVp5KYpSd1jvC1N2C6NF5Xd9hPmyb",
  "key16": "8XwbkHrDPrjB1RX4VgpSiZMHdmjxduKhbzb3HabAH9q2NPN6jm4Cycuoxd7FiUuFktyTwtaA5oMARJbjDEq76fq",
  "key17": "3fn2SeFpkCbR9wHzMPdVsJtDXeFLDSDWr2ZyGiA4pi72QvbBy7aVWZ7vFXzm1aziVSJHoVh9vsaWSSvrUMSHLVip",
  "key18": "4iyFaJDyYZ1ufYEtW9XyWDYiptKBa2k1eb8rsJPzb6rzmuSnb6bymkrouf1CoNf7pMHDRRNx47cVbwSu4CGAtgHe",
  "key19": "23T4b9Rc5YRS8s6szXCgjtTuL1ooKe2EiKzVFnNh6i6gQE9EV97gazP6YSxT3uQ3At2tzpCLL6hX2Qg5648dRLZr",
  "key20": "64iesr81a8GXXTTMUWDRBuBSEBWJiY11Txn3v4gf89E7mBLuxSbPUGuWeDyDTLALX574r7Luh7qaZkzE3LzZiQSc",
  "key21": "5scDo7uxHy6ERPMRhnzMoDHMMxDdKscpzP6PGWxfyXT3yYhrGR6rLgjhkPP6azf7YEZ4Jc9j8T8DZpPkNn8SDbET",
  "key22": "3GwQDpwNoGb14mmeYQ4xz9zEntyZBVPMNw9AYt3VPxg5Wc5LFnteUVQ9SMystgnXqFDRoiezFwpA5Xje24EJt7o2",
  "key23": "3CNkMqzX2pCBBym9BjXFM7eU7NR2kJjuH8vg4JQjewUUzJDFX2gVgc5wEnTr42DEhqG6LXcvCZQzCktTiNVhEZf6",
  "key24": "3EJtKLCXEU9Xo9YGBDREG2iuzoCb7wiXqjaqawMXoNWdc2UCZ3weKbGv2UDhb8hfyj3e12HWVYNcMFKQgVez2Hti",
  "key25": "4D6NNCsys5AxBMUxJ9k4wjYfXG5wkxJasgquBWRztWVXbNFdk8DHQM65Nh3Zzh175e13RpeBCZSzHnUViiTXQ2g1",
  "key26": "64ySdzaa8U8dAxx8NeMzBUzePsctZZS4fBbnvTpX386jqQ8TtzoqUb6UXMMhHmutRRvDeUZwXAkHRhbNDAuFdkQw",
  "key27": "2tipWk6o7aksqUi7pwc1voUQwaiPBi33FqSbKHGiFepGxr7ibkfv8iFWfRk8kYPU41SBawBZifXPiUEE7c8vbd67",
  "key28": "2oTYEdQYttDSSVCqwx5kqpL7aGMtMR7s4Dsb5qwYAtQBg8KgCBtvYfx35NAAo7fyoEH2zHRr1kBiMcVqToZCWg8v",
  "key29": "RRUjgPy6wkUEGr8rr85vaDeCrKEh3J94RnoLq9D6rWSawWGYDmcbnTCvL1hzJ7Mr49DAPZoyTzBjatv6gN1zmVs",
  "key30": "3iHATsjQj5mXf4Hf6qGKUE8D1NainGKfm3d7K8E3RS2tgmmX1Xtz15BCWSpHrtj6B923wUjQ9b9rM5y47AwGsjsf",
  "key31": "2YuzgrtvuzCRDn5ySwkjFciYi6WHJCQU6KK35RC1f2dkXzHTSvP6qpoSVr1WygVa5EUN7RZoQDYrVe1T7Dn5Yfm9",
  "key32": "Rz4PVBzdycHba5oAd5sc1KMcmkfQyM16FUWBJSD4AnbDgpHfixy67sEgLiXnirr1tMJqmBVBdsAGyg8wvm1LAp1",
  "key33": "2JkMsJWGawGL1LuZEkYoYV3SPr6ctXmDSZjUxZB9xEkY5Fkz8nSqLQ7vQf5oDznQeoWqEBHBkY11QHcfuaK6QKq4",
  "key34": "opZm6mmJHcWBmfJEqbhgSLGUH1ZLYR7StbKNVWifjUMyekWoiGBjKXs5Pry2UAWjnCttKBT3kEKec6A55fNorts",
  "key35": "5sLjM4mm4RdF2sEhtRYt3VCadvfHKmR5rM7Fda8r73j561gP3eY1pwui3rCZ2cSMQiouSGTy3W3k1FvkQRu24xdd",
  "key36": "3NwRdhUaExCGpY9cry6jtcjHjhRyKq1UfdWXULZHXE3rZFVzNnt6dCBFZi7wq82fxGf4HPVJf1U5dE57vuDTRpuk",
  "key37": "3xYqcZB3fxdeeiHjvwcwWPFuHTQSSJLZdSSKyFTptPHSp4L5ofPmzG24R58DrbVGUuHvvMGYfWcc1QpgfjFC5xwa",
  "key38": "3JD6iBPqomJiup46zhYexingr2Ek658T2BCH8iVBzXF9rPTtwh2XYER1TSte4v6GZ6H2QKhAmsEjpremUVsDzNyx",
  "key39": "5RYehQT7w1JHJ5jNNLMVwJ93f1hn8o4ugv3veFhtQVdEXafGhi9YzsVZoMdwATojJ3vsTn9K1oEesz2UCXWMNBB7",
  "key40": "2G39CWnLP8ChnKfMNMxMf9MgJsYm3PgbaumisZdJdudArd9rAGV2pHeTVWv6N47keKZqAuMGRHUAX89RBSFyQ3te",
  "key41": "2ANij8SBh988dGzRL4MjZgWtRLPyqbW75tHqjXFUgXmeFZZi2izki4uiqHHSycPmoVVPWbN6TmcUDfQT4aarPb3F",
  "key42": "4fBEBdwfWir2oXVNWR8CN3jksSyy4WcLr6xn88LhUecbp8AXrSwzPuGVXzHQRcQSghvR4Trb6hMX9GC5kLmFhU2S",
  "key43": "65YjYBdqu3qBNtLXe6SrCio2YnPm3RCRaDmciRKnKXHzfsfqg8h3JSfVmMGutcDZhroDpd8UrsBJ5SE3Lih7yW49",
  "key44": "59HudzaAEQnnCcahkGscFCwXBmw6n8qnCa9t5zMNLWmeLAFR6VExnG68aX6DsyUcoHi3ZaoK2bmVUNtg7Lk41LY6"
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
