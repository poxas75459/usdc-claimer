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
    "CbBmCCQTvTP6fqrP5BNajyciLCNboattEoYUVSbQh7e5JqGes2dqeo9SFGtFahe1YFDeJtiEubnqyzuuguaA3RK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vw2tQKi2AVKsFcPniNg6Nsp37B4VbYumoXXwRiErDURLP7DdcPBujjP4WVF7qViSckPtqquotYT8tXhjoNRnKei",
  "key1": "3x25tM1czZfu6tkkWayreRf9ixKRiWra3HhVMLw12KHshRFYDcrxKaRjRMcfQjZYPj7Ti1Vg3u2yoifRa79Ko1XY",
  "key2": "41cmCTyfA7t6HTus8N8ciymzaUQvZSauVoQdwPZXXzJpp4iiFhb9cZjDcxFRwuHLmP2T91SXDa8EyrBXSjPLmVDc",
  "key3": "2YEuCkoZ9VA87oYKTfV3wStuCHzWFeMtLqP3jKV4JcNPPZ43SbmECZ7zExcjfCBsv4rDH1s4Pv6jp7hLF2rB8sB2",
  "key4": "y7RisCZeCEAfbP6USsRLo4Fz9hpj2p4wf3CGpxBLoqPddK1AJGhiZikmNfRhPGnxbFCiAq8Q2udTfCQKkfYLMta",
  "key5": "2sYLXqyn7fu9oHDtXKg2aZPJe4JZbsjHYF35HAzVG3FzKcuqVe5oHUr1CPdXWB6pVQqBn8pvg8mFuBSqhRzzvCmM",
  "key6": "29pQfAr3MwVB9L4toFpdy4hsb7fgB4Q12iJGFCaZ8vBgZZun7RyusnCevhLkNYCPA145CSdLm28FAYYtvEQwWien",
  "key7": "5VaQ55LAdvA5x55PNBSZW9KRSDtUpGLkTSCbjQMtRzBhUZbeHYjD3HREyd65syq6fLtvWtoB98eaBdsbM5uB6UMn",
  "key8": "5coSCngDJn7HehxfcZ5uRYu1y7PkhL3Pj7LLAjrTK9kFERgUzMqk5B7NiKRptkJzdWpxrzd8dRHji6aoRk1wTY1A",
  "key9": "2BT6fpfZhPxcghPrkjf6SnT9njy8aF4wGEzrPV3zCAMwfbtDeaiDNfv8UpAHQp9xBagwVm5ghCTxa9mSdyCZF5en",
  "key10": "2FdtZ9PUpQiqiBqRSbSBKm7q4MjW5C1P7vGht27ypbKf6sKw6UFxJ4EcS3exC4UZdEzNpQyeGcUoMr2v3araxiNe",
  "key11": "5uQzuzBFA3FXq6xkByCCfq8TQySyEbFRCgN7Et3deETBtSrL92RBxxHFqG8W6whGyh7jp8SqRVx8PDRHZYGUGjrg",
  "key12": "4mSS5MvnYMS8PGp7ib9h3M22vxHQHwBXRoz1TFfD45M9beDmbC18APTRCry2tXr4oHSGhPFsXdwSSrqpSJVHgx8C",
  "key13": "3NPBjAoJmZGGmCKkBSnpp8h6pVsxwJPfy1HCf1RcmPuBwa3jfcwa8GgFa2h8DR8zXhNiXJDqX8EaAK97Sgt1eEht",
  "key14": "4kBS583Lshc9R1o1gnnk6AzGP8bJQsq1XVfckswbTtnPGAvBQkoRcPVQgUTah2DnJtdW2nm8YuKBk7sgXiSRXv1y",
  "key15": "5ugzKttqNhmimBv1NZv1fciz8AAqzAvSucJ2p6nqBAwcbTWaFKT27aNey2TMNzJrZwEFpP5kAnSrzs5gpJfdMckH",
  "key16": "3u3ojg3tpFCXRpXkMhCXJX2UoxhRiCgFKdgsGear5j4EKp8pw12yJM7kHEzAHiyc4XYiBtwtZZWa6mwjc4u9qVwB",
  "key17": "4fWSWzGsa6mLikk2QzvT27RmbDZJUeQizVwEvrZmxcnAgU51xASHQ1gbpLYpEUeeNimF3mdNX2etA4TNVNSYttJp",
  "key18": "3nPbKtSLFSkt55hd1m5p3ELzmZCepaFLwToK4vQV2DtU4ur2HvxJwNRh215yHPmhF5N57z1ZjE4ETKzJ5G7eJUVQ",
  "key19": "3G4LWpRSCeDykpj81VtsC2rQdZfKBSngHrQGM2tnZKLpr7sDNQNZXFQzKT7G3WSDwXMsSQRzEHurSswVbRf5FKqT",
  "key20": "3E52RYw6KJk5dekz5zMzjXfRkQVLECdGW7HFyG676cTfEBixA9eSNGtKSbcDeCH5QnUeijM54ydoTqZdykwztyxb",
  "key21": "4MbUHs1QPwawtv5zJ1k1ddbrqfJcQWSJqsNozTKDWN3C15gJsQxCer4GPnsTw16ErGQnqbdrLYxiz9y4toEmFQKq",
  "key22": "3aF2UoUYuvFYs2cBbYn2eZda3637B8TmWHh4dpaK5Gk3RDKCqot4JW22XwZQBBuKfa2QFNdBdb4tfzMK5a6uddXW",
  "key23": "V8xngSmxSVXp4Ebzd4HPokXQRbPr26NuKr7x83P5LYTsd7p8JEJ4mpsHwiBX5DCZy1NnZQvW47iG27iP6rWVqmg",
  "key24": "3Ceue2gzXhYMBUPXvvzUyrkv35EtNFf1epizHf63HCNFWg58Ryx9y5ZD2U8Q6bshVmkkABSmXLvwXuKmRtuRR3fT",
  "key25": "4UHFrCg1tf3mKELfW7CoSLGwtmvVHxWLs29TVB8tg4hMhepo3RCAe1BQ65FSso3kTD1mbahU2dujKfiWRJUkr7Jx",
  "key26": "4JURHyqHz37H1RNhEMjzMjFUS1K3dteVi9cR99YjAApXKMP2nFnyPK76aXG3DAKmQcWJzU1PtaDzR7wJqzAetqSF",
  "key27": "31LbAsP2gTyCYrQivCguHCVkPkfu9sRiTjhbqgFguf5aucNqGkWHqMtkgQySVUjQNbfXx6JjTtKm4tVRc2FMr9c5",
  "key28": "48vi4yKTUqtU7B7yN8r89uA89gQd4zDk3b4YYJTtfXtUDEgcqnQxhWkt2QbZKjsDnCgmTUUNjaA5ZPde7z4QqrB7",
  "key29": "5QDCex3VZ9Sq7bgiZq4xrmjJ3nF13ZoELdKv81Re7fSfEbBbdn8VQ8Xun8LmWRQybrmpeQN9EihxZNXJTEY42bWW",
  "key30": "2QXhf4R9miEeykrc1vRY4cqVU9R8bEdgXUZf1PzvhoXBf9KnmaLvPE1dUWdDWFU6xuj4fM7r8Tw1zjNrQvMSytNh",
  "key31": "5DqyKDUhLuGAcsXZtVHdTC3L5kCt8ZZ5RQm78129bPq3cRAXjw8Jbcb6TqRSG4UGogfR6HXP6DN6UBqtFnTzaKdh",
  "key32": "3f9qQnSk8D2BQ2JBixTmhd5Hox3CjyzFmtJEhRqbj3pUL51972aCooi12dedwUbMsXaAZiveFsrwWWmUAt3oRHU6",
  "key33": "59CKC6AmnRYSB2HbehQcvZFuNNadDqdTkkH5TutC3NuAx4C59MoGoBNa2cyRx3aZbZ4SRhfbnEx1zc98Vnbpnp5Z",
  "key34": "ZKHFq3gUsecnUs452S4JtPJ7Pf9dMpZ9X1vgMrUGr1gtY9w4Pzkeo5c1TXhT76hHXTPGUoT4hx7peWejK56WHKB",
  "key35": "2CbbHNbUcYBYmvdXFuLLS63NykjMdmJdc8ceMwfLk6pkq26Ac2LzQ3Fcezmewv6xj4ZfDwcfZZKtXop5iv7c5YXB"
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
