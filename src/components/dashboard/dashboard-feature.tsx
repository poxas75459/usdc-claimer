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
    "2Tx4ZHqJFHCMGAjKaArKeVj15yrM8W8JZFvGaYqTFKZvcE6zW42ff4sSqG4bpwGzpyjEmTXsVK9B2J9ZcFoopaDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VKm1319CUR2H98ov8SadRzBy7bH3tg7ZdoNMfCNFXSn1n1DtdsNAUtopuWNHpGJxRCBKSb96LTjjnZCDMxCg2bb",
  "key1": "23VdSPYWthknjBe6UedKJg8iZ1d47DF1wBbuLk4xxvqGAj19nn4P8C2uEuc9c4JkZWoXaqHDbSDGZdcEBTKjUHf2",
  "key2": "4NZpp2dteR4qrNYwWn8nJ4CLagoZm4bGMwi8GeZdiSggPTgVpsfmfQtQjqWizxgG6Y2tqopkguBPupN8nsANVHjk",
  "key3": "38zY32uFGHvfjdhWs58y1JkBCgAqZXn5wD2k6xiozbYkPiqSH4dZb3hDshzM6EqqXHGogBfjiNH6wUPsYUPRbVZS",
  "key4": "2RhN2YApRc5v6eZfKQYX94X98xV5eb7HnLPP8R9wMw8Tno5GPt8BFZtNd6CD8kWJjBwwY8ztPNP9Z6d6QbGeEFHX",
  "key5": "3PFvmfqie81YMmj1gjdy5V7duJdYNyPkqZZWbx1gV61gVfzLce2mvp6cVYRzgcF7gciBua5aJg3quAg3Q6UwX34N",
  "key6": "RY3qsaiAxL7dwG3g6uCfYXtoTFSpraPPPT692p6U6kPXZR5uw5roDqpbpQJvSg2BadEsgH8PALwEdmVa9nBk4gZ",
  "key7": "5cq6udm9cswd2WUWt1zGXz6QexAuCgehUYcU2Lq2GX9ZPbjMdTrMj61sqvGv8LsocgEvANNxcvuM4u2Hcpw2ogYF",
  "key8": "f9xzjcFDUmKzgpp9q2EkZ8sQPQoe3xBu42m9VPtqPRd6zCMvwuBkA79t9PXGg6o5WjFCHtej9mhXGCjT1ABZfLR",
  "key9": "3vWNGuSARGWW6ZHKP8zzFKf4W4RBbYbMtN1G28ENrJyeYfTBcsDfhriLwjEcYXz2r99FfrCMDrJYA8ZYihCCMPDU",
  "key10": "2PKo5Ak1aSyeaGtYsH4THpnfjWecrFvhViKD7iVe9CrfodAdXCko5AZ916NFxpqiXLy7rJ1hgBUZoCcjWaFjdkd6",
  "key11": "3fM9RAXgcvmpgSqmiZNcwsCKE6QHjmyTvQYHPJZ5fqt8rFvxLaskMnLuAMJpaycS7BKDBzLUYEVTXiRCpR6Z2oFK",
  "key12": "46GHEiMmPx3tYkQkmV1TPk8NP29cF3NWiWWDLacn2A3Cf4uCmSpSN4n9Vp7oKfCptQeHeCJi4MdUkeSuYMryarUf",
  "key13": "2F97Sh39Fk2D77yNwimPRqYUBJV7D9Dymm51aJAgJ2NYzd3rspVJz1m2L6mgcnQzpmj4VkMf2DPKnZgV7E7iovWB",
  "key14": "3V3q6XnZ3x5NxXTNDZzbsZsUG8pM37DybBTmvhuPpQmjrMZfyYJj9KZxoByMsN6yNjXVaWG1rhwC1NiBF82NuGLG",
  "key15": "ikzFrXjmMa5McXVn9K42BbQTAMDeqU7SbzXkGViG3TrkXbWp7RoAF9eztPKGmptgL4fBqAyCUzmHNXYcGeEFvQ7",
  "key16": "2EfuxgWvEaQu4yGjw1uCLF41mdK6ShfDrUB8XbbM99q1Ro2rEHuKQH3HzZw8HmRqV3f7H7mhpyevoR4STfZZ4rSf",
  "key17": "2JuRiegbzipLotkVvoWsTi5azX88J66GiNrbJwx5m6tS4VTrCVrB8nc8y3c6UUwG8zRKW1eYNgfS372btjPfsCND",
  "key18": "bCL53t25FQFbeAbdYK256uzLqEk1zAV1hKEu417dNXQE974L3ZDgS9VYGFcuG6AQQgzLNDSMo9E9mjTDL2z3qiP",
  "key19": "33qMrsMAjc7E7ZKs96wkqxqxcxvabQ1na8TGNbH9L5rnzFpUPT8zjdVywvS9jjEmppQyMgDqu42Qw55s6HX1VbfZ",
  "key20": "4ymFFJZqKqvBgSqNrr3eQnJqvED8SJG4qEpQVbgfF7S7PQBaiBYrsFPV7s46ExUm2rRXUydCU5HGYJPnzBz1L1Vg",
  "key21": "3WhLhhAZy7PAq8fmCQ7tneepcGWqLwLiKJvjGtGSZPG8jrfUe9LctfDSmtq55AxcaWX5x5CQpwJssp7MKCos5BUa",
  "key22": "2ofhG3BzKbAGJx2eaburoj8UayHjmdaux4VrTztUhq9Ar3YkwgUDQQ9esFXov22P7ox2h37G9i7AiccUBiEygzJn",
  "key23": "5WkFmZ1Ea6g7P3dD6Pk8SHjk5LNSqiwBEF7ZGDng13PvZ6C2HXKtXuefmUG2eGHpFG6zPC4tkNQni1GVDRNbYxS5",
  "key24": "5E11pidmgKcDVSxPRCriRY4cZwuPyEqz8rrMsZKp82Q4Y1JALyhHJ4xfziLDJ7jorfxEtbsS1jYk9xCDn17PEQXA",
  "key25": "UwwXhXgnKEksj1LY2PfChjFp8mJVNzo64pd9mGKYBHePSF4DNwhYE9CxrqnsnQqNMgCMkM8LthzvFbdMRn815gA",
  "key26": "vKaa1wLc1oQ3H591noJbETGWU11xZNc5bppt7sgU8Z9paKMDrvucf4eujq6bjUqntJjQzdGwXqctgezrfwPStSd",
  "key27": "xm4yvcgeGshmv7VwuJQR3ZfrCTM9FVSFcMnE2jT1Lz5p3ojiYC1xHshq4qzxy4rAqdbJNKTUcPb6m3TEHJVJqks",
  "key28": "3BiKSLqXLdSmKoXDGLZVDTzCAjseTkXu7gwfLDidXaApXYuF8F5BGBKr6xZ9DqcwBsD6zsEkxBawiJdErgmKjKFF",
  "key29": "5xhRHSdwvP2mMwsBtA21x2hurLSmbsMJnJWuhBwgWAWNczCRqUtQJV9eaybimRN4xc9cZqVbWJUHf1AWAyXEzPDj",
  "key30": "3VhFkiaxoUatRwE4otd6dgLDxxAUtakmnfFQiNV5z4qgNdtswHdX2ygoT8MmEQkeLG579wFgynMHdE4TDk6oKPMm",
  "key31": "2ZLGS4SXa5bnnM8atpq2xH3opqFJtgZKaZQrkmQwCXKjBpPhnyF49aotLuKzipq1EAiZdBLs2YKjfbqcfcVgNSm9",
  "key32": "9iTztKrUzLM1GdVLaH3WHkLZdF6xu87a5dQ4uvWugXj9V58pxUK2ZDVF4YV1qS99Zj65kot5L2BfyAKCs9nnaha",
  "key33": "3XkL4JT7atk5jkEMeQ6sagPVDJfLxWZoLd2kRFTSHDoxBFqB57YJT9CUTg2d9nHB67AGRLSA1VpQ8fQXiUDd9rH9",
  "key34": "4E6CKrhLLxghu8c5SRJ9VHGgPpmJysQ3MrsLLmefF1ihJGuEcVcST75neMkyj4xh1UnuJNJ6qN2g2nhmj2Q4iiSQ",
  "key35": "5bGqBkykvgkhjZSbF291Nth1ooooUQdDqCL9Tnz1tmSiXA8fa7ve8tcPCC2THzxY73QdCeYUWjwGArkyepyarL4e",
  "key36": "59JW7qCkeiAXbAo7a9He7ehAaoZCCVfnmgdWdADxjT4ekUZrBUrnHCN4PUGf1zZfegQhg8GUPUcsF53a8TzU7NWU",
  "key37": "3mPtegmJo9pkfpF9ijnohnpnh7eX7GAL2Mgt3Uo1YjMr8v7dKu1roUBKshYcjhfV1duizUPc9kfb7CLSAwzGnaWy",
  "key38": "2UFuWs7VUfnmkJ8N2435hzuKHHKDM3UArHSrCSqGU2RwkS94G3rNmKFsUM8MeC8puf2YPtCnT2xFo4DNCCgg34Gc",
  "key39": "5bTab7KjvqtgHRJiFJa5bbFYEvC9pUbQ96iWjzYJ49qFT7qRBjTYygMxHGfe1jMB7miA15G1yvs3ZurRd3VC79KT",
  "key40": "3z4bZtfwfXTFt6X5ThjzqBPc8Ze5MWZZGbfjix3jZhEKccEx85jK66e86DqfoBCtRRVp3YZz6EQst92dLPYFCrrg"
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
