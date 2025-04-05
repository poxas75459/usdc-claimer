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
    "5WJa1ZUyiaZButqqiQKHW2YUpk9h8kZMJv4zMT8rhRZUWY7iaPbRMxEQb9JysbT2eLFXyc6qBZ9VQCa8oGiDic3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZgESQDvjXpMesCuNKsqzGUrWhjUufHZzCPETZjoDC1XSATp3ZJdLLHVg1kFYyjjfixwPRjgTZfBJuGCDuZgXZi9",
  "key1": "TVsEL5oyfTFA37Y562VG4W9Hmy8wC1r6PffJhFj8Einj7DJAEN6wnAueZjdMKrUH4cWAQxXmaeAaLMPaiyzyVUY",
  "key2": "m1MtNEiUCh1XeWaqXprSy9DJ7RxEs6raRpBWh8mM5PyrHzYb6aa4c7bkZpdZRpmTyUnWkq4Dpn4AnzkBfR9ym2X",
  "key3": "2jzJrZKk6EemheewFbvPSxvqx8tbk9yZJNSGawppzs1CSPPCJ4cNA5rdpGLMa6LKpxH7524MakM63qoyHLkBmrA1",
  "key4": "65fk5jDkjkx32kuwNaudJLdEXH2eXjCviGMBVWbrVsaWuGdaBWSXxxkJwBWnvu8xB9FMcuVvyF32StdaUVMcLyXw",
  "key5": "2zf1h5qp9R3XCP1h1th5m9QLdT3UKMj11zfX5VNAA5iJqgPb3STrURfAPoVtGB18wLRiboAR1H2ouwZ4xwwk18Mm",
  "key6": "5nJe37PaYwoHdiGgkG2DZvpGL1a54md7ZAoGhJEL5u2yA5k1dHFWvg8M2tjvu2qx9gzSo7qQYbd9YrzcZm14ciPB",
  "key7": "5my4ikJcrJMiYQG24b4x6orkDKZP1zUgXPrt35TuLMDofZ32v37au81GRDSEVKSM7fX7qbhfwyvHt39XVrBkLjy5",
  "key8": "QAt5UJzisTNQ2e4MJqQ5FvsJaSgZ1S1FFjixdXaPgff5QWUSBaC7qVpX25AEnD6e2gCUwmpeKvGLsVxjsvz8xpf",
  "key9": "ExL6geA7iM7v8fdGobm3UKEuHDhHxpxmfHA8iMb5YndAne4DHDQtDzRMBM9QsYYQA2wchWfUjWNBqZgTqyNdqRY",
  "key10": "5HP7hgNHk1v9DZRC8SiJnuCd5yvbPZyktMyH3PBjjGBrBSectGbP2UVeFjryov5bsu8ZQymEoQ27iFVh6M3n5PTj",
  "key11": "GHVXu7aqAXQDPcJYhFy3Rsp8G2RCTJ59xQ1bZNmexSMav3kxeYc5Hjv3dQbEdWEwkLWgykz1KiqsFdo6SC8U6pn",
  "key12": "5bL81Zvd1SrApYnymS1CVjkdimydfb6QLAArfmCGDB5g5uND2jSsQSM4rQPS3NLtVr1dK8KT79F9Zxp5oQe93mgb",
  "key13": "421PpoYCrxhS2yVsLP3LJbB9Vt4qnk1XSsMWJdpNEuRPSMqT7FHd6RixKtrZXRdUYX5PXxdztckZ7rWmAoeyE8xc",
  "key14": "2iPGu1ezLYtRj9UuMvtWbTxAV9H3EJx8WLL66w7fnp34z6XpN1NVh1icipQNj9w1vvgChgLq71uSefrrUEYMcY11",
  "key15": "5dck9V92XNH6e6oGpNWbKSLMxuNNPG7xVtkzrXQstwkn1XApG1LYTx6WmYBYbt4Va4vuB56tpo1dTfjb1t6yfxPX",
  "key16": "5Gw6zPmVjVekmN8aoQBY3PH9zjScD91JbQCa2z6QRih38W12bMELe26Fu3LcgPqMHzSwuHk6opKNQZvJa62kkrg4",
  "key17": "4ajDL22M2nsNVHJvZKHrj8vF95xGo4udnNT2nKkDj4wRGMe2ptC5AyLLmXj8XzGjahSvj85hF2c7ws5jetKrGEa6",
  "key18": "311EMEZjH5yjbC2DqnvzaEq19EX1nkgwFNGGeSaHM8d6wXN5DFdS1BRuVBiMYvkrVo2eGv79QPYiETgxZVojQntK",
  "key19": "jyWzFWuKB2vSdVrPKDfRcAe3VeYHLrV8PfaFMACLyCNDPQZc37S8C5Ld72Mika6hWEmh2Asu7tFLMUHbvqkN4Gc",
  "key20": "4PjNX4YgbEN4CrBmtR2VKSB82wpywSArwCVJShAApUfRzwZrTymTa1GxRdSenSnhNb3P3qtxPxk9PypuDntD6yMs",
  "key21": "3KKFVpAPPiZF6yfgKTEiZnWBp3CmQjVpWJW9SGGB6ezioYoj7SQ2geoLoTEifDmHC9QYt8hXKo6TC7Xzr1vAZxYb",
  "key22": "2vgqrnREg4n7E9NuSHPYpMftxQbdkA7RA8qAoAKDzfsB4RDe3RGrgv49tA9uqmyraMGgXgFJeQCwHTJNt25mtGyM",
  "key23": "2s28og74uH92ct27gakiZKEwvQFoocVtndBu71LbARcaCJA4T8EbAXEcykgXpkbDHhFFY27cYCLV8VReCsFyk4ep",
  "key24": "5zwdxBYW59uFFqf1vY4bnTR6nxjF46JPKPbVEf2eK8QkzkZVBooFCupZNVhcY81FYrcgJwNjkxdsdWXex5ssJxke",
  "key25": "YFxX5Z3FJ2J8EQL6PUMikTUwAfN8V1NYr8zFKPZkJiB7L6WUDBLtDQbCD5WJKHo6y5emLFeFGvfnzQ9QHFXCWPT",
  "key26": "4JBjRtbcM5nF21JaWU8sL5au44i57Pcu9sLCTK9VebHRhFE5Xjka1TNYbt47AeWmuBXBLzfyk2dNa77s1mJHoLKT",
  "key27": "3TKmfsZSwSVx5HskMAaJdcD1G75tYkw8LZNT1o7oKK6QSe3pYK8WRskap5azjS9vTcyF9xX18xv6L17THia1G4Zi",
  "key28": "5bG5ZHanNtaBaB5xXQFVZwBdbkkvf3ckxkdFqowe7h5TSyuHWjhDEhS8uxyRZaVmv1CxjJVDf75vVo6nKHoquZZd",
  "key29": "yWoeMKmXMuQWLeUBj28jFamxU6vnqK7nXuDTUT4yPySypG3jzKG3JtcoPbj1PT9B1vF5ZKz3xmoJCX1y4UbTNwn",
  "key30": "123DfkLHQvs1Atdk7ECEFGcWkRz7C2MK3aLdPAnDUS77VygKA4XD9MNqqYxLBwg8HK3ti7j7jLt2eZ3LuwDmXJvU"
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
