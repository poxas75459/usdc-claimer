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
    "2APeKWhypDcTfv2XnPfgn53nVR4fzveaL1Qsz9gtshscwXz8vThorn33H3unGh6hXPr1FVDb6Kt2X17VjaJpSqE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fh5YyAqaR2tf9XgNviAEbU7gg3KX2gkQNE2tQ9rfBaWUN2zidSHHRE35nHRrynjiKTAsKHZTqLckRJss1LfEgnX",
  "key1": "2yG8hKVWG1R7ZMXkbDV7kaKQ3FjbzCrpwwdZcRxMYqQTehSNEo92VcmDtGNx6b3CBbUdPfW1nQZBkfjuP8MEuPk1",
  "key2": "5vusLRioztao7tEhH4qQeT71C69uLChiVrN5fNewhpvEJyKJAf5jNTBacLbxuTuiUqQcLEC1DkVehkjqQaUBNvvh",
  "key3": "4Y3f3vJmUPWfkDJ6gmGwLbk51rTHG2ckVrXwQArUUfkhbYnB2aFNLdzddwavGA9Mz5jUEzLLnA1MCp3N913Ua7Y4",
  "key4": "HPSw11qkYRoTpLb8ZSjcnAvQjeJCr1s3zYkZ53YfrZDZZ5S2T4N1FBrVw2HjDb6MV4RFiHQ1hd2AaNdABCg6R9Y",
  "key5": "q6d8R7RHwiJdHVQgP77DcSivAx2Xio8CDUo7FJiSPmJC5kjTpEbvpfGRFDrbLXtcAZLQP4e24AtTxijchcJNTf7",
  "key6": "52rqC3pdJdjMTohscDjExXyX7YDR7iogLqnHXPTdGCVANbeN6Uf2S37mHjSf45njgVB4ucaHgeEKrTkMCuy2pMGM",
  "key7": "4xqSt8VDK5RY5MofTzSgzpabkNYoUEwB1WNRjJVEP465ziVGJeSe752xtUb9FeAEi3mKXDnFt1WCRYKJa1DQoWo4",
  "key8": "2vayPvhdrc3DYEYHGfHzzAgm1RyuaejBvWKQk8ZSz6NfahhaeabU4ERurAJzPJc5Gs27HVPF9uhnSY8B9hmkD7ok",
  "key9": "5SmnHoLPdULXNVEELbEYaCtEaxsytipQtwe6wsYkthgnxGuPexaToEFJnPSSoaxBB1MnnqGKPGqK7PAHWFc24823",
  "key10": "3sbK1wAYrfaMpiK63xrorTWD5sv3gp8zjxs3mXJeksYQUr6t6aTdATtMbD1iFqRuGC3oBiN1njRoNrh1dVYs1ivj",
  "key11": "2ZxudNKbtLJCmiJThCsN8agCJ6au9w45682vpFVBsnhJ2ES15Ni8keaEMWQMNn9RaERVNUFApD7eXfGGB4rMQDh8",
  "key12": "2CiWCpLJZ9Hs8rMsGh6PCmnqVT5Bxfyd1zjjpAx1c7BV9CwGiA9gH3grMQJmF78RdtfrivM3UsL3LZQ5i83tZVPX",
  "key13": "2wMbMBJMVHfYePUUq1197tWeRwJk4sRTGyd53TrP81VxVqXJvsonx5y5UTEQRm3a3iL4G5b6zgTQgs2gs3m8jErn",
  "key14": "66Gpzzn1FZsubzZzs7dA7TVr4SyKXD1ger2f8yK9uWMiv8i3kiP2WonTrJdvChpERKDpzjHj8DmRBVnRE6sVoCVt",
  "key15": "2sBXGS8icqMfD6nPCQP1ctD4T9mNduxcBUiLsbkLBd9M8bV4ZuDXvzh449xgR2THZPQHzvnR5Er5NKoLXvi4MAHA",
  "key16": "2VNWUQxLFtKbZoQWejpZ35CCpC8qs1KpUdvfvfPfiA76YbjH8KfYZ1qQqgooBvr1u9Yxg1rqzRNW7LDVkNZzCriZ",
  "key17": "4M9X9WpihqTD97ngUzLXP5X8j4X6Pgi7XhveyoLvCvHYFhcnbuAqtYvi2798DiG6yEAf2tqN7PbSWzwpS36S5T99",
  "key18": "57NB21th23tD38fybLRCc8pp1yGBpmUZximdVJhXarXUJ7UX36xJ2jLXBESSFw1DzrtVEFEyj7CzZzY4DCng4cTm",
  "key19": "5rG34GkAA4cTEuDiGBGCiZLCQcEvKC8ShcmMZ6dUM4xXPCG5ytjsg5ZeYTzSqCDpyhN4RsUHcibazptyHKtyWEWN",
  "key20": "3YMqqtccoTgEwabbs1QJ4gTSZAzhZ4MVCVkVpdzvak6WKZJWmkX1Xd4DDm6toTtMxzDvBvpMAcR8bR2YSWsQj63Z",
  "key21": "4BhWnsFDo2Hj2rSU13uTFKd8SV8Tsj5ZbzPvUnAmM4LKjLQ1S1xTQUZ9r7wA3yBngwWbssjyXeUQpsx7jBZ2TgD2",
  "key22": "4bWdtff4qMfGcBUSqFBgLtTyV8P4R45LQqq7Bfxr8gCFh3Rt6MCZ1Rb4KGqArwXwkzheDge9rTpSJFr5FYGWS6q1",
  "key23": "55nfNDecUTvbdE5Q2CH3Zi2bPR4GQwUtPgHPaEwPgDxktnWVQzfAkA8s3otCJjWE99a5biTKGSoquZinwVvprtNb",
  "key24": "3qvJzPGETaZwFzcPA4T8eTdftzAd6kp6wxXGSFaV7t3GSoUA4oGoGHRG6A4LTYppfgqBTCibAWCveSR34gAyhtqQ",
  "key25": "2u57maK55xLGiCpRFKLVNd2LSSBjNZYqtMWSzrKP69EqfBDCo5AmDmzY4sTJhKps9MWkChvDGcwR1ZMAoSdLBBbE",
  "key26": "3tJja56JtxjNXhK3vGpQCZdh7ysen6oiFZYcJDoSXDDCs2uVHSjWYAMyJnkvJRbpfAo7UbJYGvLHu8PtQkTjBKSM",
  "key27": "2vgRP7qyNCrFUdyn4LsRN8ukCv9uvzYxsdQXbdP3258r7NhEZCpzb9HXgbYuHGbsFQrQ4y1n1Rt81sWNkgMWJbyJ",
  "key28": "41uPU7h8iKcAyMP81wvC4LxCS1FqMFt89d57BapxPVWQiR1MBddWLfXfzbxqgnvbbRCmX3DQcZhv7TqZYj9cio5x"
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
