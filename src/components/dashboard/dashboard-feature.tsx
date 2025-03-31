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
    "4SUFPkQxFSPwriHMdK46Fg2mMd23mN4veHRdUF7PaCNr4oVXWwJv8wSCEfuNiHZ1qgNJGjUs7AZnLMiqnXKTCCDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TkUskmPG1yv2Nj3zUF2YCqeAn7DmATT1xKo4Rkz8wVMDXqJmVHc4yMPFz6GphYnwh7di8ZoJUkqCFoDXL3h1ze2",
  "key1": "3ACobtWDbbiTCoHizMzBEiTxuSNxa3WT2Kbzxqvw37yRhtXjKCa6cxXCg4oB9FqHkXGMQPF7T1Sd8iaCoUwHAdL5",
  "key2": "TYBnMNqTxC9JEjZu99P1NtWbu7HK2c7GLZ2v6UGVWDKGjTWbi7yGa5dY9BBh4nMLgx3BuJJGSQw3KLG26abPCAN",
  "key3": "D1ZyiFBkihbJziWeFbVdDq2yvXNitCAVktPPHBFmz6Ujf2Y5z9jqKWfxEYBYvzoFDdbXPTp1rZr4EJicZSHCY4w",
  "key4": "YsHN5LdkXU8rNYrRpaf7TF2M4aCfGaxcrr9A7LVj3c9KkG8LpEKggE2kxgtoWWJUhAgyVHW2PTo7r74Wuivo3Xu",
  "key5": "zPjvvd1s3cqFRMCg4Q6uqCoTT5oqYcgFpWMU4uHWYAnq3KsPEc2mL34SLQBGRTdrS43WWa1P6LsLJzrLyfGSjKK",
  "key6": "2dNTj3VXe2e23xom7xbVHcVpANuMozVqVX7DXr43S2ib3XEbjSK97pLNvvRmrx7qLSNMkZQcsWUpuvRb1eWAAmH8",
  "key7": "2NJMbm7Ue3Cvubvuxcoi8Jp6p89bXVxWQeVfm3K3ToDTUdfm3eeEAK2a364oCAABaXGpkqHidch9PFCFpixNrMMb",
  "key8": "2MW4zcZbggkvq5Yydtx8Gkhzx9o7sp1zX71oBxhDQbRR3ToQjKgSuTjDWwcNq4rFQN35sCYoioMaEnxDwfqHJrVe",
  "key9": "5NPAuHC2N62GfZb2L9JvgfiqevmyZb4DF93g1d22bzMygvAXbLoeTYWKYZ8dKux8SahvpxweVQH9hX3etLiqtZzF",
  "key10": "GntmX8u2qZAqB2BbT9YCCr6ci36YPatE2wtXCg6Q5kapNfdgc3a5KXeGQUDBLS8P7BKSAc6vwyY6wtUVoi2cmeu",
  "key11": "KLzU6wN53oRdrnwzimZiCZz8VbQf8FbgXu5jvkkFHdSeTkJsmjKpe6auhiE18818HBqZ8Hzkm8VRYGWLbMY4sea",
  "key12": "5Mt2JyX7faNRnVJFakPJ5GWrXDrVzbToVGTRoqSQV2itz1YDzH4PN89RVJy9nARCtX8ohiaGj8L4KNEHJufgxxiz",
  "key13": "66PKR6W9ipPuuU2Wdqv6ZuBkPtYuNGu5iaXRpFDxunmUXmJD4NPpeCUvxwSToDsyPJn6ZK1mWMY3eM3U2KX4wZsU",
  "key14": "bzeDS4uYhLYHhsPp4auSPYi2fd1efDzBcgodkR74SGthhMx5ZRaWqFHbNR4U8tsG9GuRhttPeQNnHNLGR7TRduA",
  "key15": "4kY8XqjPVBTz4qqJpzMXABX1ZM2YmNhv7BzcM5pxYqKPp4YeeVSRsoTsDRFqtomuJvNDseYEqk8M5r6fbMgDFNVA",
  "key16": "ByQV2tXfwBHhBFZ6rEWvjnJ4M5z4itkzPJ27zBvXZqheUjmzmVhrs6PeN86btavRgCAiyjj9G5aiVh4XWDAichF",
  "key17": "5rHpbTZ54c1LUwSdQnh28LELKDNZrkskxXbU11vZATXyXpL2BqBH58vF4EGdhcPF14ig7xEBKbK8ayyx9qpcQJaJ",
  "key18": "4UYgPeAXg9G7f2gBcPnqgwhEK8KTundBgRKZA93TTRsXEnwtDDtxYomUKyzJZan3V2zEiL41niCf5sjyD1923x2z",
  "key19": "fCYY8vYKiGmyqCM64NQv71zuoCNhvZRFNKA2g3KZa6FD8EdS98aMmxvFFSj9eR7AfCm8UxL7PE5qWSS2SzU9Tz8",
  "key20": "xieJtc5XN3VeSFK1AA7uNTGvprqPsd1cKEW5vqWQmN9j3gCXPcp3QzFJrhZeAoRLWa2fqePFEMidoxdiLnRZ5SX",
  "key21": "2JMWrCKKygny1wyMZML1V335MKJUgqhX2kECvftwvsTAnXqSiRoMpMaQvnC1VS6pxGXdfufZZgAZjeo4FCE8yn4M",
  "key22": "TugA8an2P9DFWJcvXZ8e6wktjsHsBrGGKhkNAMwFM7PN3odPbXd6WKHadToxBCFtWScWkzyFLdAodFnYogArr54",
  "key23": "ZnjQqNVXWyWruV9FBqPC6ix5XiZf28vGtEMoVCbHdVyaVZpjSucpQ81PUor9x82n8CFn7HhBFvHztPLC6DxxR8V",
  "key24": "UUKyV3WkCrdXGLfDZ1LkR3QXBp6bhoFxGmFLG2vjaDvxKCuvXTmbC1taaxdUguqQrvTCLaRbTKwbLedjrenYGw1",
  "key25": "SyuUC2yETMxZLczvk9bhpAMNNMMMadANPzsmCKMxvNJxkFGRsXpSZvHCP3tRoMsX5vQrq88v1mupzJqDWHFAK6Y",
  "key26": "tJFw2hKxgKaSLCsszGBUkuk7VFqhfySmFW1LW7TVdWX9ipX2PeUrozC8CU1HrUGbqwHpyet2aa354ntbpEzkBaS",
  "key27": "2Jbsyy7SdSk37ziYMfnRJXoqqsSFAo2uRditPryAvmaXxqCHjpBbWb17imHSTvuLLTRnYedygGJXaSMwsFetaenU",
  "key28": "27Qs8Qdr3HRLwvCXR3QyCBwWbUtLuyapAqD9K7Bcd5C7zpg66bdkRktL4hjEYMA3ekzdyNpGFBEJbXEesWhGZAn6",
  "key29": "2JzG6yXsYxexwHfGxSjckcs35oJZBH43SiBWg3r4yHMMiMngvACzcVcD15QazmtcxHYj3eiKcqFqJQ3w58mu5qkD",
  "key30": "5WNmA5F8BRpN7EAWwyTDc8Wk8mBCzHmQLaSJETUz8hJF1hWYxGtvDAsLSRJPUq7FjU6Py96WyPq1X6v42S9x4gEW"
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
