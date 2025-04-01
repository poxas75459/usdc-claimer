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
    "62jDhBrBii5vxj4jbpYfsqYYy6kJcbRnJR1WEw5jv9qmNjotGHxDLkgeo8cCLfTaAbonQWpEKHe5fdcCev8wu6hG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oU1Fc5xbrPo3r2pe8yxs8dKz1T2vGRLGzXoyZ8M7XrdxSN3AJVgeR1khYPo628PMB9Wfq391DyLxMVCqx7VdaKQ",
  "key1": "4JN47NrRXDpcz8eKwi9yvJuocHVXG8hDzm9NkxF1egJYAzisLvnEfuZEzTz9DtRCwzYrF62hVBApY6cCAnNoteVn",
  "key2": "2URRWCiubsHwPPbMJ6drVEw4h57BKvyqbC9zCtxVk7ht9pwELLg4vp9mWsioKGFhWEXMWFemf31mnhHNKJYBX8H8",
  "key3": "3SQTUaxxtDfyHxVMh9DLeXQY3JikcKKiCkDzQSK18wiCjKqfLuzaQqcJtXGuHaCq7EHtEnQFwpgagUH6KJWSuVt6",
  "key4": "2yz3JBH4csrfL3r4s3N2HpLpwg4pW5jqACFpZ6WrVxyKB6MHGw2pVqAdMCySSqUnRubszDrhveedhASAG7mYdjuQ",
  "key5": "5L3yBPSenPALiQ2m2ocKoyGaVHf1n1dRXbsVqtVD2JaTAMRMXLxxg7kVfiRiTE85oB63kYMxaPrD4RjAKN33p8fz",
  "key6": "4tSmsxMNZ59BRP3hGS5h9XcMjLvz73Qv8ovhwjRM4bsL9LADJ1UWM2mfyeBASLppX4P9wXVG8o3wdXGegdzN4Ziz",
  "key7": "zVe1pkX4S3NQDKCueTkS5VYWYUM9wLUbmZvA9SdW8APCJZ3uidfi6tMvQfynC3yayeNnWeReGGtowTAff8i39qt",
  "key8": "3uocHgu6uiShNnJv75WJWRjxcPc295bZYSheg8HEGeM67rqnBTHu6xK9PTv3ERCqqujkuomBnAmbE7tH5LKc3sfr",
  "key9": "5Yb45Li7p9HFgPZrfMbUnWFvvHVjKK78LcEu9p44cAqh932RSmzzUZBnzmmZPHBu8ZQWkrjsehoy6F689YP3hS5V",
  "key10": "qQw9XaydzjHFTgx5GyiNPmQr5ghFE4PKF4T8UfaHEyyDMLPwJFMVHZjV7ck3hZMUngmTbLcAkm1mBhUJQCmZes2",
  "key11": "2fAADyuytkxSzrqQoauyWRVCtbwgUBhM5fux8XMC65za2zuUAJeQY9FtpDinNXVM8Dk3FhhFJLmN7A3kNH4JXLgc",
  "key12": "4u13wEMxUmZ2FRuV5G2i2mZVvBhquQDVgo9ZZqVG4HJqRG1sJJEyBJzKQxmHH7xvhkukA6rhQazi9EqrTfDXr4pX",
  "key13": "2DkHAf1A61jMcj19H3tx4bo9KdCamM5UNZ5kVQKN3VNkTunhhLBhJKRRR53FAqzriGuVdKrF9cNmieVFLh4f8upC",
  "key14": "4bFV27NRQygYTrjUb852GHDnubA5boA6xeFA1qWgcv8FsmDjje57gXmXneuFyXoVAeKemx9uCnGP4FvUnFoqtMTr",
  "key15": "iUUQGwNmsRi9PStiXdmjNkBnpJarsHhPq6nviJr8BZ1mxZcwMXqEjqLynEvnDq6GzHSuQ1fgefq5Uh3chupsCWx",
  "key16": "fWuRJ24JnyJonkNmfo9tnoKaaEXUD4EgFciZYVVLFvA8vY4shJsnDHxfb79jkBqzchytKEWsDApv7ry1kqnxz56",
  "key17": "2nVPoSvQEcq96eLE2zD6wQfD6pWE2TC7q7G24aCJTWRwmkqtYDfsTahc3QyQezXQsQTUzRpRkMiwKpHusnTUXfj5",
  "key18": "2prHF1AP12zV9GSbPPXMS9vXnJ3mVjRZVYZBi1DSBnsRd2dcBoP1JLLM8cW2qAeD1NUPZwFzFNn9dKPiMSApdRX8",
  "key19": "3kCQrrcCgHohetMALR3tfEXjzAzfNNQ9PNaaXEHEZeTMN9HxsNMmBBmMcRHYA2Q9ZzDb9FuHX27JD88uFHhTkvdE",
  "key20": "3h5nUtfWrfDFhNDmzaBAC1ghNRKestxtemxbN9fDZDEsWnjccQbTr8LUa8NnpJeuQBsRNh3WgBiJnEyNvJKMq83f",
  "key21": "4My92yFsvaTgC1wfRGywLM6NPmMWYvCkPLz7LXFrFh4qASFp1nkGbmQvuXmrFYUYopYYvQba9nK77sXBFgAqEZV9",
  "key22": "4vWkuNFTZppK32oXSzfJpvL25iNnVCRoPP3Fi6nduEodUV3uYvBX9RtYJ6NFdpHXyy94kPk1UugZ3SuNJpQrdnjy",
  "key23": "xqwU4P649iNLGYZhCmaMWbhuRLHG6mZ6oNPSJkcYuXZTFJnmWmYE5hQ5fzZWbcMN8idp7xSAw6dtNpUKjBF4TVW",
  "key24": "3bZ2STDEQWDFjV67fRuLMRM3LhZWFP6NwyonX7UZsrSphQhsNa7re8re195KTJNa7Hznc6kNwY9Vj7odM9D3Tp6U",
  "key25": "4yn3NYRKHPZ9ZMfg7PTfTnAEfvjqDuG9UjAYEMLSsXyxCz1mosCk4dPryq5QL3NiDgFWwtY7huswYDkWEYNXUTnH",
  "key26": "26uCWif6fMDTUZW4o61eNysC9qmtgcLfmzvo4Lpmf1v68ruHL9iGa5zEgpKH4B6AhUmykUnNKXeUpbeL7mxEbTEo",
  "key27": "4WZ8EuGg8vHuhu25DdW8juvM6Z82RSAvhaU8iiA4syto9RhJKzPy8oL7ay62TaYXBhjeBwp1zC8BYJgMff7hUeti",
  "key28": "2vKiC2E9eWAh7P6xg1ofbThpgXLtEiQxGNVhfsQ4GxNrJGijwGAMSD3uhJuN1nxk8uWa2NHmPdMXVDokAA7rGMoy",
  "key29": "41isuU9i3C1umjYFxqz1QTJNJDmHm3C9WJqSgKu9gBnKAJu9ctzgriFEznGUYmFEv3fDyCqpKWvuDLsn1UKkj7KS",
  "key30": "3DjyoPNeM15TGfDTgqqMV3UMwsLc3iu6aakWt6QQXfhz9h7vqFxL8zbuii71haZRRTH6oFUeytdVyMNsAo4JGogm",
  "key31": "VDd7yAecUwJrQAUQJRmdbTeeAHrrCKgZpSuyCpbA9XkESPbBfDxVpfn6BdBkE8HwpuB4CHzonSvDLpdZuBeUbn9",
  "key32": "jxtTayrvY8DJKDqFVWKtxozx2Zm1J6HZE3uECpu3twHx5A5oVF6ZXNkpLQFXgSQyHHXmdgMP6bpGQCi4dsqnNbG",
  "key33": "3ESC3LqHJPsXCj2MSFzCeRwj3URmGbP8LGSf4AfJsxaRsddBaPHdZKfZcqxjsnopp8Fmjhqe7fZwtMJCDybDem2t",
  "key34": "55aJLK3p4zHqQG88WPFtMfFUKcFAtJ2EeGWWY2r6yBiEGfo48gM5y36wDBJdkrDM9nYAypfyG3LbrTre3UCDAKxF",
  "key35": "3AeDyKFFBmMzUMGPzM67D7mmyzs2psLCxYWowbsScBSFXr9PyP4GbJZ6NtVphjCneGuzuS4ZeunNzaepm5Naid8B",
  "key36": "39FTR6kvxv3egMoLJmYUjj5TxD14ACbn5VNe2iCWer5o4AZdGA9r3jZAKJ9VKL3eXjumnEQe8p4Jbir5zFzbLGtq",
  "key37": "4dPb6xGxNNPwwaYMrVJibFwJ2ikEzctxvC9U4ZRMDLq7nn3wDGubS8P7HXgjwx5yU42H1fpnT57KLkkHBuV5oXWT",
  "key38": "3xzm9NhPrPNQE9pNLUiMoeQSqeerp9Ycv48m1F26WqXHonAaZJwKVFb61u53EdCukdKwKmVUL6MxVkSUDXqSnY4",
  "key39": "4EW16uLKnZq8DbLsJ96JHGVyjC7wSn1QeL8zdq2zGQ6FEmP7j39ZDvjL1sKrv2UsqDyypx5quweSLyGvPF31aKYG"
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
