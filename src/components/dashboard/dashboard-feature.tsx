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
    "4gJ2QrkLndA4LWRcmKFEDjeuXAohaQ6n3rU1c4XCDKM3uqXCZjxhgyqwWQEShdTFxBavjM57vMPdzUA93syfV6tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gYywn6EKuYig3TviGjZE595ZwA5zhwHNCbfbUEjshazCjf9BU1FTcmGSogaz7yYpqG25wRF5HQEnXnE51n6Aw9",
  "key1": "37i6mgQHeLwkwDxgfQUQZf9Gvku2bpo2rshUCBQVcYVweeW9p5fGYG3BJBEM6sQZ8Gz9FamnfaPiZNyL2e49sYzM",
  "key2": "33LJNwfiLwP7HQN8fASiLhDwkhSiVhcgEv4FU4wDGzkoGrrLr21VZyo1jyEx9FixYRH5NF7CU5NEho2QpZHDpCxp",
  "key3": "5VnVB7TTBVT7dxH35FH975A7kdYDiEwYjMmUcxrMB8aL4CEkbhZheeyVBfi6FdXjxZ98bwGprtC2zhqroKxacjRp",
  "key4": "4jfbBi8LV7RFGPYzDPcFZmgz6nptoPAaMJG4rKdXoBGxtS1ranGVkScAEapS4WCWy1VMGfW47yT3d48voLscWjNf",
  "key5": "3nMefosTctdQxu3PLFnGmStF2f87p8yQuEdSWCvjChPfszNLJNFeLv1BC7HYrxqEbnaZWGnxunsdSQ7QSL98X5GJ",
  "key6": "39rMaiAbaNjjx9VWyhvu82qioEkY1pNLUdH4eMqhZ2dMePzvRF8gwVCckJZG1aitcDicPR7U6w5CcooCdcCvfKHZ",
  "key7": "2whpMgZdsL8bfoFdCx5gPgUpGFwQLwjefLV9fxgyBhmjEkkyANyQugLAasffDLkezGw31gNRPeeUJKV2JX6ZcrBR",
  "key8": "4V3tT4gm5Kp99D84j1BtkbuDSdZQi7Dn4mQNTXiZm4pLjCfdSbqmTY7kqtzc1WK6MZfNLESFpBr7b6UCxSuV5M3Z",
  "key9": "5KEAkvAogE6KRiuD2DGZKf7K4o7YFxpZhchRrYNdAdnhkcsi2Qyge92tn4vWXCEMfo57pvJqhsX33vzxUcVSTPxB",
  "key10": "2ycJmS42Wp9vJg6abofA1dCQj8sJ8c29P4v5AvsEy8pNj6sTFs2htgxo1PDEX4rXbAHfBC4jyXTR5gqN6UX3cdw5",
  "key11": "3TxPqyyo89S2jAdm9YqRzJYYjaq6qsRDDc6Pe7PgSd6Bhe3jmuYd9x5jATW2WfWXFdiw9oHeoatnoGfWRx3JRmFr",
  "key12": "5NdP9MQX3vqTJXLWMn2m1GV6QBPNrH4Ui1o74wGsYSxnMusdmfo9iUpPT9g6LAYjBwbEE2xV3h7smo1M2bB5f4Ew",
  "key13": "56Rg5HsWe5uCunSWFG26nhyWnKtxxYHHvUf7QHDWYBNGrAKy28rDBkTX6g1uoqs9Ap8Qi1NEF441HhCQE9xcysJH",
  "key14": "3LzkjKTFY4vMccwVw3JvC5WH9qrYKHJ4cNUiRJFVv7hZtvw3CXWAivbqLiwdEHrtM46irvTT6HGSWwBEW8gmdXCC",
  "key15": "4f2azPJxJu61JNaPQXYfXQCHRBKo1X72bHNTshER6UuRUeeYpYkdK47XyZZEfMibzpfapAXc7CPXEUxo1znR9vMJ",
  "key16": "37tHJSKPW9P8Qy28BwVaoTrMWzhVjKN3Bjc7qsbMoJsXipTqsxnDPnLq9LqGQnNwZd2BgVqUEgv7YbEg62hLx21V",
  "key17": "1r7ErihtHdTqGyEyetKFjS4rat95KRxWUokQbiNB9cC9YYYVe1hajyANrEm2NAbqYMdse7k2MpBLuCjhoULvsQP",
  "key18": "3j99Hw62cgAK8UxcGpctwAEv9tBfhrS1brCyiceutMYegRxUyd41X1iP3GaLD4XxzNpjjRrLhTdZAetJExxL2vis",
  "key19": "4c7m2VGswYYo1ZCSPh6BJGdhWBBvgaDwmzaj7JxZxEZvqiFiWpSGp7nZCRByna7sdhzjijFd1vBT49LjTLuycJti",
  "key20": "61XYuaE8isED1BjoqYnYR7nzbdeYd2ptzxeGbw7jnES3JYz8sxt38JzUCPDgqcMsGothvNEhG5D6rpzJdw9Eg5CH",
  "key21": "2aZquZ6qvgSwFKdb4t8BwGg1EkPgLB6kJfuaPXAzQB3BfThP84dinm2ocyFTfmURYz9CeeA39UAV9rNRm6ptRXYS",
  "key22": "KcttLoPnn2zYKVoVGvZdQZ63hypgn3D3yumm8HuKemtzwYAy42DVAnbENr8SL9sLzfuQDuaADcpnSuV8dTMPEkT",
  "key23": "zh5yz9rQEuPxE6v5zdPJCiE7JzU6uvMZ3B97QdUrNoKS1oZDFHwv1QAaqfHBU4e3Q7Sen9PRPoihWFP7sFGV1Q9",
  "key24": "32KLnYTagQK3aJKDayG4QZd9M7aEkratidS5sYE2DKfioMvLRueL3iViJePgGxigrDePnpgQDLwQMj89GthM1aj4",
  "key25": "3C6M6fTbUdeii5BiNKyVmrHJHsmJuBdPX1jUh13B16VwTLdBhdP1QnV5RnGTfYKPe1jgzGjeYW5vQM47WtZmcwkq",
  "key26": "ps4h4Ldscq4Bf72CcvH31qb8deFbiLAsavTEf9cUnYV6PNmH626gVxjjuAefceXkGuu7qQ9X5kEEPjQPMxKiLVf",
  "key27": "34vR9tJrJcDgnykt7pNYzf3fG2csHZFU9eKzn93DuxpZ2xT4T5gE2RQ2byahcgfWRJefcDiMtv4ijFDdtYVmRSHo",
  "key28": "5bVbeUBQ3xAkhXq9x8j4HKtSwmFUkrUpAhvWHi5s3TaK9kZyM5XEhJg7jcrb1u1GMLBR9KHnbs8Pgc2a1UiSqjj6",
  "key29": "3wKjZawCpkFEdDF6KS6tKzTNg3HQDRjApT4C3rxnh3KCB1BbP1PqmH515e9K99sfMuY1PNZCCyHhbWgKxbKQyi3R",
  "key30": "gk5NxQVzwWn1U5UZRezTmhD2K15AUdAXv6JSYvvqe5jPoBKxVNkfvzpkhq6VJMMz1mk7vHMR6uoKUueVBWhbdXC",
  "key31": "Xd9JvXZRLoPu9Y5hiwSTE7GKBKShoGPTLSUsxS856a877gsvfoknv7gXjD8SP46AjqBqVdpgsHs1K7T5cNNzhUq",
  "key32": "Z91phWC4HndgFDVYTNajM3YurjpZyBaY7qRJjvj8k2ejMXfgUowm72T8euR1mqdbD5FNtpDKFWgxgBgThjLswgD",
  "key33": "TBuxf3pvSLPJWmgLXPW36DVqcyrdoiaM9kfiViJUt4iwx1w4GbfTn6pmzQKeVDp9wpyyoxLwq2N4huMY1oRrWtD",
  "key34": "dZMrrzhvwgg2abQ1MeFEtwipu9EFwpkNL1SvgosqkbUBcggTffK53jtAgRLNT8xAoViMGvvfvCiSd7NJxzT8sR3",
  "key35": "2GA3UbBBcWLFyKYoNQEinXxHFDad6bg1fq2FzCboDKjJTUkECKFUgXCeeJ7jGFG6Ye9p5rNooBrtxxUdUykuBRrD",
  "key36": "5cWu5WMUbSLoSH9XMWx2S7FGFwyCJSGAZfwQtuh5ERCkVfturFx23xTdJQYyq3JmLmfKRm6r8uSJGNrdkQZsoPyA",
  "key37": "2k48aXE3Re6Y9biS9euxB5BC76uCNG9xnAzbRjC6ZRMxuQ6pg9vebJ2EC38ZvcGoMFD2BSMw4WwvWC2HmvmoMTHy",
  "key38": "Kyn5VkHV3vgwRDcPUo3kVBEX82brqFbbGcc2BaacqeBPnvoJg84VAMwmpe93nLhXPfN7UTQDmyC6GiBpNiCrJaB",
  "key39": "5srDvKp4feKYsgJvy57X1Y6WC9ePY3kCFEkSJPi9ohTLinELBd2zWybamzC699ScrLrCvSue8sBQoH8TbN9436cw",
  "key40": "2HBFDBeMgtXCyaduJ4uczBcdxZcoo3RNst9c8JJ6ztdEDzrbq1Q8J4EdZ9oxTvh8XkVWRodyrq69tHb6KA2iFXZw",
  "key41": "3rDCb19R4mLNzVeTgD3UUi5Er23ixbdpvmV2ytbgntpmUSyDQehYLueQLM8XvJf5kmFpeNwxbFrzCgTSTcLcVa3u",
  "key42": "Ctmx2wDqzgwbmJLrEjCa94o7PRmYef2Fw2X3CLBhAH3j3BxgWAy99ENGMexziTWWH52Ei14HMR2wrrNYCJS9BNo",
  "key43": "5RYPuWiPisPBQ3mFABJTw35ciyN99Q412eLbUE3huh76U5bEF1DZ8Mqw4Xa3wuwW3BLR1mF6HPN16jFjgMpYBBsT"
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
