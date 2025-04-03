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
    "21J931zcerH1CjARhN82zSjL6on2YCopFMVb6quco73LkvEEbddUUMWMsvBq5t5CkaJ1t3mjNCEVAHUj9bAPQia6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TuitRwZwfUsGtQeJFC8aDPLtsMeCZjGf5UYkD2GaDqURXDK8KE5pRqfrPGLbqzwV2wvbsTcnAPxyC6psaHuyJwa",
  "key1": "5dTNtXmrS8ZJyLSGmNWoEw4oCHYdL9WfAvk9jrFqxoz317EYgmLaoX7SyDAzhATeVat7kuJc6djXxw88PL1Eujfn",
  "key2": "td1VQidyx1VQYG8jm7iDiUh8txqipFkh9FohXJuzzEi872hmb7uzwDKVrAn6SSAFJYVB8VWsn7F4kRF8HBR2KCp",
  "key3": "ugqXvA8azwdgZHZo8SUpqPtQgn6hPgtDoKPZ2E9tKdUdSwrRNYHKCJQ7dMXyAjCiTwgaufcpkQqDc5xzXBWwYUf",
  "key4": "3HyCdo3sWuJS3ZZuuNnVcVjRxFs6ESy93eYnsU7QtANsTZQe5pZ6q8T1oBipGkz4ZjX3dRTQELNPeQY3Ks7xrrDf",
  "key5": "bobJCyY1XYjWxDoMinadedEqFK8Uuf4b5d9H9WrJYusiD2AWLaMxwphGCkpRdRZ2QLLHq7iuHRbGXPoAw8xHE1J",
  "key6": "4RhvDb6QpKWKjYA1BVfTzUjU5kFGHPB2HvhDsuGh35GZX6Bs8UxbWfoYuZHMMXDkMiFzs4XyQSVn3ryAzBkArBne",
  "key7": "64B7WypKxwked71sGtTvmi1wWEaZXejMnQL2gQ4CmGtEagtteUYeNC4sAMwnZYjWqRavmSvA3zQJUZ9idtuQMN4E",
  "key8": "23zbRyYHYpd5Qjgo6QqyuhiGVjKTxGzoEk5kKSk6DsxS1TA6wAtLLx1dp1mHqapFTRBXQoRyWMavBs7gkfRhwRu9",
  "key9": "4Y2AsKDDfKySK3pFJHSzUHE6Bzz56G9t69bVEGA1NhLQZJjQm1wyu6ePSEqevuSrPfBWgARXfGx5EMSpT1ugghj4",
  "key10": "47BTAsk9by8mqTkimUw93W7ra6G8ptVGSWdEtnzHXcNjK7EavzNjHsw1PMmEeKBeJJPdAfTruMgAYECWqtjNBta7",
  "key11": "nJZwzsMrQyo8ttKA3F2PqdUGNTg4oHzGF7oBEvTTVKSFUNXpHVi1NDKvSyggQpH18uav1wu8bs6taf2MeqPQ3o3",
  "key12": "2fcWKaC3RBE2nwvJjhJ1MkapGn2uNYvzS95rbR4F1iVHrRoeA7k6c2NseFSVNWXQLjnsDVw6ozwmxWMyWiBoWPiZ",
  "key13": "3DjhLby8rAUmSpuimA8QfQ7TENRk7UKM8Y79PR7nFWYBbE1FKdNszFCHpa4iyUcZKYBHhTShjFQB8LD1VAP1GbGv",
  "key14": "pnTZtshBB9SQRxE7uAYh472ESKb7t3KYg33cuNFYqVLa8hp6GiTVQNH4kyQ4GXbsZmhmSmick9KSchcmUiu1oTr",
  "key15": "2ptQrn7UJrs9Nj8ETz9Aeou41NrQXeshg6tzeeP4h97uY696emSqemk21qZ5n9keDejEDhjAeHeBBR2Svpj19mLM",
  "key16": "3th8551jYshBSGg7uBbwzBtB8BYJgXRi6iFqunWy6THJCiffzZi5dNtxCFgxs4mXXiFasWeKYNWvSk3sGTmpBV98",
  "key17": "5TePWVL3xxGhpeB6TAU3E6dhy7NfJ1UjcHhaA2ez5DFkTAZRdyrrgTfwQav1ZKxyuLcvaJKkKMkPMocsdqn9wMBa",
  "key18": "4VYqwTAknMFRT31H4yRmJxfhXd5hCyCJKVxNQUY5zwSP1PtvJuXURXKHMbBaxTqoMW382V6rM9ZY1cCQzGirA1f3",
  "key19": "YpXhCkagw8LMNu3trMv7TZksocQDXdRiF6UmArgFZgz9dLFndAbgjcNY86UGjkrrYbvWTK1xDCBHuqgLYDmYnT9",
  "key20": "WPqcm3pqRDKws3VHxRsmLcmM6XfBHvYfuziiKLUTKjSjY6m84k3E9PKbkn4vDiJXXsk7gh2P1n2pNM6Hhjrp8e7",
  "key21": "3N37ARpMwPvGqtUDEZpG4H8rC5vauzRujzQHFCFHoP34CyC6Po2zZKAorAMikYxAoTmewubguv2v8TKciBsMfKSw",
  "key22": "5x7NuxQBxNt4A8YmGhrmJNjMTV9FoHrFYF4UPsiXQoXbLbEo9FuKb7EPMseHehQS65PvQ5SFh6JLwKgTToS5SJxk",
  "key23": "5vMftbvAQ7V6cybHu18fiQc2TLLfuEeZF4HhZLoCSDLffebqbfn1nbZoMufycLryoWzNTBQCz1Xxxs5P4n5VxmLp",
  "key24": "3wsmmUhBqwcU9UPXLVh1BmFNGg5kqgMQySimRgERsVEiWxjEx7mWDk4Uw3nz9X2fE4btnbJb6naoC6nBGJ6BPVca"
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
