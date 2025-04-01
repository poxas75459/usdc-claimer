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
    "4U4vMGNx2GtTPieA26ZyoXmPZtkpbYaSS4FNdeBp3GjZKN3ewkwrhuwViEAnvm4SGFCxSXG1dBpc6DWxxAEWk5hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGPpsQS5HTw3bhzjLSecAFU8eaLXfxxCnyvKTBrGM8tgykAHg52poNu1p56uGaf6R6kDuczhVTnBSYPC6iuFdL4",
  "key1": "4Nxj7yYdS5AY1YJRZSQHs5aaWg9U5FCQQ3p2AamFWAq1qkYQ6teShoveuHQADgggxA5rQVn4cYn4qmrz3cpuKd5t",
  "key2": "237APUTZi4xo693Sj833Z2qXrRoTRUuNKTgiUMvAWDyVBG89hs1bPnmDiZAehpcf8XA9m7mAPZguTCqk2iqE6tAS",
  "key3": "25vjhfsCuGPy3oRdd8yPtKwVQuQjoh2VjGRCa2JGxkujQNroAECvX6wKkcM4wEYQ3r91JN3GPxifwcuTmzhvJgaW",
  "key4": "2BHAm1ysCNo5UiyM5WaPNK59VFaUTZZk9kunQwST9aTtNBgBkP53e2zc6WLm3cLHm6bW5QZvJgRx4KurvQXhU47G",
  "key5": "JR5ap6Fz1fg5s8aqhiCwegzoWAFDVcMTGz6ZNTQvpk7Cj6LeJjacH9gkYbqsMAnvu9JfKiHduHXnV7AeSa6ZXmc",
  "key6": "5ZmkX9KPrrJLVCBj7fQXG3NZLnKEnpe6CWg9LPvcCqCPsNQX9CVDS5TAJKPDYCTvNNiBagtXpTceNJLfzWgvAkBF",
  "key7": "3qicWfmu2jJ35wk4fVM7RfVBTpkrg1VPv8fX1AqyK6namusu4F7qyYsHDpedcAsopdinJW7hnmn6VwKyY4pqFMRL",
  "key8": "3dzkaaSLJRZLkMVBWwAarQPAWg5n4kN1muR8soKpyf81ia24YbHaAjxbXrThdiswQryeTeUtGqzyXrNjofqXRT7D",
  "key9": "57hovFggHqH5D32wx2fnTdFcif94dJnekVz8CrMRawhkPjWRNm5Gn14UkQyfQwrRVf95uRyTaUsePyYFXJw9Zukb",
  "key10": "3SrnHR3vW3emvWgcw7sDqg41xBL6UwQbUaKQEwmHyA9QxtDxZd9C9ojhvPPDcUgdpmG3LzgZnhb8Kqzs6rYgjSv6",
  "key11": "5jKjuoL9Co5n1QbKWGFw3j5xX1BxG3kaMuK5cVRVNDzpTDTD7Gzx5FYq4fqoe2TbxywPAJ4C7XUnMLyEBmRXHKPg",
  "key12": "52J3tdjkMefkrfqP5NU4WEy5ySHy5Dss6EViRHprQuCJbFDDXFT2iMbzrgYXJMsZJVWFqwmTrePAfbztoesB8Mwf",
  "key13": "3QQtNVy2J1wSTSphrKEmFsEooyK3YskGswZqFkuNW5RQ5XrXxdXBQLBEgL1qrogUQZa1QNwpTKVtavb58um8WZGC",
  "key14": "5F1HPtwWzf8abwR6NSMeS6tgYCHNhUzu17LUyhTshYxtjmhPvyTgHb4ZPMV7JcYSJefLmLo4Agzt7z1xoPq7LaNk",
  "key15": "49BWxVxMjbeWeKNPT9noysAzB5Ca1H8rwbNR9nojs7M1f9ccJDVQ9ee4Rcxuyw2dKHWwJ5USJhQh8EpjZUJPjp6f",
  "key16": "3SmcUZ1GHmsfzuP6NvZCw34zxK3gHUFP5f9zJYikxLFCLrLpw7r2gvPKCKPKgUe76tmDyXr5aGbdmFPz46zVzpCt",
  "key17": "5x5vcHCkz6rQGxYszex4amw4iMUtPedNLhEPnxpyz5KgZws2UDWoe24VLRdH9FjypFBwazR6pVMk39rqkNhmnu4W",
  "key18": "KgVenHisEUzPjMJ9gMT5WQbvPG6RNSrodkh8QrFfvMKM9tUFeYSspKhGzSzjc7o5LfBdWpnvyJMHA3VusqXzfWE",
  "key19": "XuLzKMg5uYCQ2YGYTGBQmqg2qFyM3XaYH11APd1R4JJxnVWYBmcwfGenguaJLydSDbxzHTEfieLeMJuZLQm5HBN",
  "key20": "4bAZAjo48VQ97z8igoYYBBpjugLMmubSrXSCgsWdgisWmM7RoJDTez8pk3ymJMzrP4wh2BoKS9ppNRKeJP5V7rSN",
  "key21": "4SQbQsQwmtDrvHLiupgRo1ndci4MUcwKsF7ATLQQGAJGNBMk1AC9znDouaQn57Xi9ZE3zbgKmkez756ve5poxg63",
  "key22": "GJFvqbZg6B5coUBC2GY6U4WuxKmFptRCv7ad66sPf8DCsS68wJ6KQSmuR9Xt6v2oZuVXBn5C3UVhurmFpmmXYhk",
  "key23": "5TM7P5R2F8igDh4fbWfCAy47okFkNJQRQGm4iyNzU2cgDiJ7JSK8T3ucH2LSMn3tF2rEgQMfB58Xupoze6e5Erph",
  "key24": "aCJ5ANyEkDG2JqfTWHVmT96irUH5uUnrMffD7Z48fsoLeoLR4ejqaZnEkzFwentFL1ptbXU1P5F6Eiwd9b1EJ6E",
  "key25": "uGnNG5vuN6KP7sfd753hewmbWhG7bPxVCJ2M6eyEfyopKKwX8tJEVKnAxbv46m4L3qydv3gcN6AsYRHWvXuFkA7",
  "key26": "5vVdCo3pjGBbcKuMB78tGRwUGa981bay33SEQnQVXbCtTiaxj48MZSKak578pWMtHTqsDtFYW8W6TvBmRJpnRLvq"
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
