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
    "33WBAQoStMfWpbaoTd1oWVorSgg2egkBcpATXDW4fNTNXWpWuLp9rQ6PXcVGSA3kUQ7VAyjDbbY6Am4eBxrgAmGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6qDEo3JeTPt6jB6PXrGSXxKykFo7vkXQpTz5dMva2hxvNyQMNgenjhcURBkFn4rGh95Bqhh2xBHiLtNgFtStUXM",
  "key1": "4gQpg5EfWVWgG3tr2nCJ5fpwcShJQbfa1vHaQBo5abiBCwBrJ517wCStt9BNjnbsjn9yGBprDP2pwrZC35TBsk6C",
  "key2": "evVBD4pUJ2aiFYbp9kxHvX65EDdBBkeH7DxEzgFQbqR7U1DX59ERT5GJ7Z24SG7si2myY3ndGAwSLySMWbhjb4c",
  "key3": "3Hikd6YKug2eaEzSnBWK7waPJagxT4P9ZkUZtMPdGpQb7UsRjKhX5ufRny5d5DV3QucCUp9H6eQLxcA111zH7Mpx",
  "key4": "Y356UaYPkAPvhj6Qb9AUTSVdHmN83N9VMbYBcajMF6wDGSjGvu1U1uLgeT5wjwwMgTjU4RWQoi1LRKe3ZDrM5ki",
  "key5": "4KX2aKFM9jJnQppAhTBrXd8NjP8ECmi8nD7z2GQRzgFP2eARrKtnnmizhVSA9VTX3i1Lq7wkWqFut1FcaUJfecg8",
  "key6": "UmaiFLBcSebhSdbPxhLgzZXsYRi515f7WtBLvdLPrVV3YnGXHTeNs788vNmhfi2cDC8UGU997vAaazBDBD1ZUea",
  "key7": "kMsDgZcYt4ECMSB8eGnNjT58NLNEaqSNUpHw3C2axX1y1pzAGgdKnCrQ1JoH4ke55DnqAFGLn4AJuixEMjcqRWR",
  "key8": "2sBL4xhwm7zwSzfCu4tVHVSz7fSE1CH4ZnqhzGx2zUDeAe6H9d7dCfYBnmiKmBYnyp3NRkvDuStA9PtuW6zunizj",
  "key9": "63x3cMoMG1SG6EejW79yx9VdqFX3Hou6SsXX2ivsuFGYn3CD2w56VyG9GiBn3k1AkJHdyS8x6nEZtpQzfcVKtamR",
  "key10": "3goD62Akju72PkmBMycYwyD3v1WS6NoyAFk7K2bwJfg6C1FxRYcdbAhdi8Qc2sWMzh5aUtupRCzKsCMWYNN6ZXcZ",
  "key11": "57TiJTH3KZZqagF6YRPx2bRxMR9vFbsxHtahjYbtuMadnC8eE8UsWi6ZG1rkG6jpCdsk3Yee9SzVW6PMUduNL4zW",
  "key12": "YB9zJwLgGdoa6R6ZUK2rhbn15Lfj92Wqz6HcddtpDQxkDuAqwz6FGLfifkyZMnfRVjzmYyvf4TarbNmonketL4C",
  "key13": "3UunAWERNc7gTvV8YfB51ZoGTaBdC6kkwEgML6TaxLZnDf6ggLMTmuarrxYJKPqoR13JP3Dmn8VMsMZyXEYyee2Q",
  "key14": "35b24hRgZiFVTLFhAZwycpkwuzhGoqrJ83DRPeuwx7hbSeM9wKRpX89Ey4Mk3NetBYJUEGx2o4PeCuP9QJdwNujg",
  "key15": "2JchPbUTrmehR45eEuuuBq4sQCZKueVK5WivAT4C4hT4jJrEh9jJCCaewva9LbYvx7UXvS7ASFRc9HSS1QQ1i7xg",
  "key16": "4PQZ8jrA3q85fUkoSCh6AzJ9AmHsSi3AhoNR3mBmA5n1pyaGdGxXsk5UHNmWVCh3b6Tcgdx25Mnj9QBUVi2X2vvi",
  "key17": "2uuMjm1vzr4xRhbwXMpykGS1XxY6tq6wLQQHWFvGUex8i6EMYp7JUHHjqRfrhW6FeTp8ygkwNSSWTd5u7zB8UYES",
  "key18": "2CN7R2jnPV3BWPgjzR3jC7GFDGae3F2AWVocQqr9867j5w9WPcQasYTpaFZtioqCQo5Vt2TbRr6yfnjczbAnYWuf",
  "key19": "P35qzE87GLSiPucgadT6VyVPWR4Y8BQbG5gTmoxCWRBMw1Tym2EoMvEhdFTCX1QJ87R3MABiw2psf5wW9kEyCQq",
  "key20": "3GkqvLcmTbterEzBwAvuHy2AZZ8WzS7e34LY4oyHvEw1hCewjALxMNojnhkshNeSqMLt2KX4XMKmi4PbLMdxEtoE",
  "key21": "5ogJ5yaLn9oWonJVzKS9jfn7qCjBfiYiQenTAvYM6vCBsbgw6jik4uytpy1wwmjgUsznU8p2fVBJiVXkkseDXjQH",
  "key22": "5thqJ9uXQfWWDKd8jrRRg3VNvBSmUReZVW2aE6MHfrUwqMPBPYRK1xiLhGGMzYQ68YYBE1PvDEmxdBuN27ZBC3Px",
  "key23": "3gu7nv8ofZHd1q4nC6WSfy1dRkpNLMV35GJQTP6B9oyb9DbrsQabZh2ATwZC1b5CHxcWSK7b4BqorResoRAunqBd",
  "key24": "2XXHLgbx9EKwCGGTFX857dbWuGXeGnRPzRqzCWb2Zi1roaX6Vd6Pc4KgGFEuLbrqtUFD7i8QuajtJUcKsmNZQPSu",
  "key25": "4Kpcu7w3pL433AkXy56Faegg9QYBFttxzTzEPutWmpw3SjnLZ4Wemc4RASMvnLqa9yk6ToL8AQtsuxxPeYcZdTA7",
  "key26": "9pXDx2yQN3JZhTAwXB2S5AYghFk57PHT8zeBBnuDP3xmYyLMjnRndDSaarWKmJ32F6ZmqHPFtp78eSKJ32JN7nR",
  "key27": "3mjC1Pu3r23gkS8YuxbxzUzGtc8pooCBoVVFsks2E1fv6yFMJSxh5BeJ8BW9iUJhFHPJfvzapz9bhzEJMtnqLGXz",
  "key28": "25QzMkwvGWYcdpn4VR9dXsr96LLb516BJCnAYX9QTPDSphETSTHhyHVE2d8tJPLsaWubWs5A37dxsAi4AdVX248Y",
  "key29": "3syFHRLuwyBepTcFVgZHjJfNHXXCv6NxF8QLDWTWkuqrF7MQXBGkkDRX2qKnLAwvMdQ3sQGrsieFhH3P5hvf7pUt",
  "key30": "2f1R97ALt4jE2JFMmExae4UzrySAakgkYPR2EESjsQoAEb77eEjXwu2PJ7Tmt7pvyy6VApSci7TT6cQaFmXdBeC8",
  "key31": "24Y8NwMQssG3mPg4uqBGKgsHRy6BwhtsNBY2oaFregmnWKD33fixeMKiAYWMkcfZvtT4WZMuPmmtor3LnKgfJxW8",
  "key32": "5yw95JHwsQt9UdA86PC1674XbNQVkAQpsV1qXuCuV5Kfg6fjpTXHD9XShM2VY6VUQ83N4JoMDm4qpYBmeNyGcCam"
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
