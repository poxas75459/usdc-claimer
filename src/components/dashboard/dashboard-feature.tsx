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
    "21PbfB63qA5QJLcT82PdxcBB1tprVKMb2N7a84T8mCjFWcAxfX3JRQWZUNeqrstVcMJnZ7J6egUrkNShvpk4xyUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XiG6ATffNbY3UDtFxtiwpfXW3LjoR3ypQNAoQ7vcqWnNi7LiQ6Z5DntbFkCyaDvHyUcnsLJ6HYVPan7nrnacEsX",
  "key1": "5ZeQTTo8KRz6VbttzWPcyPTsvZGDPQja4ZSNvcXW97cQtkeSkdxpMcC53pN9v63JTKeJn84sxS7mi2Zg9jTMX6Rk",
  "key2": "2HHknTjxpyggAXzUiMG1QnsZiPV8E4vRSVZ4dKv8niwbQiTwVMgWEE9bxhiGdg87Pq5Bm1irUsu6ggYLfE8vmYmh",
  "key3": "4w9X28C6v9Sx7FT2jekCAHC966Bxf2qDBoj1PD27yyZgqpoBnBUVpwKbJJGvgTUGoL3h1R1cq4bCCMfSFiwrc3pR",
  "key4": "2CWp1UJeJ165BxY2UB7UwAx5MLodvzK5eDW9bfrZnYCAjG5iXjyiQUKnzqrDhQcmLwzxiEsotYeWRoHzfHGqnDEQ",
  "key5": "5ASXxMzgS7A64mQ27BDYQF67RFPM1TaKTDbZTmqcKThPkJ3J7ASLsYihDvXFAsm6bS1akxqJQbLNQ4XD5MAyQWvR",
  "key6": "4jahToJMik5NLZgt9c9bYbSfeGAMfQggZPwURpHHXtibrZou8q4uPm33DEZeWe2c8bXxiNbG4to6AUNbCn6dBreP",
  "key7": "3Gq72QVLaQTcpCwEGgKvNDpYzB36oYaoRQKiSFx6y6Ch3y6hjgchQxchmbysTvZiZgzxLihxXD9Hy9VMQz3CUMxh",
  "key8": "3PCpxQzDXkph69rPj7zo4ZcaG7aivLC2QZB8oLEX8xzu2P1UUWp7QA5wGAbbpzcEcosNx5tUszxaYq3ALiDQgXA7",
  "key9": "3fyEmUerkGwqHr4QoqSxppMr3Tgog7WPsDxtMSoUZVjbv5ydw38QwqSUg7mihzum6vcAaQqQByd246Gj3muG8W1f",
  "key10": "5s4J4GaXqs3SeeggeU6whnMz1WMcwv1Fcdb5YUJAxck3pAcq8purMsY2WVBPYMxKtjvsAfa1FkUBcKBteK2jpHQk",
  "key11": "5CDgk1y1FRvNqXMCFpsYLdDiNhRWTpc3hgUDV9vydctPFA8zgx2DvndkJTNcSiV8oVTLZaT5jwJp8oo9GrB9fYLc",
  "key12": "5dQHa5FZMz2nw4PAG4hDKjVGnN9vh38r3y2DZP5QcvR72MLq6PowPyDAUVTESNbDxQbxQCvb39xcsuAtjKTgaT3k",
  "key13": "mBVRHKxAqrjyu9xJ33J1eeps7iucSBUALAB45WBJ9sAqi4emT9Q7eSCkzYVQwYCQvBT9eDSxhTQxFAVd6b7AvD7",
  "key14": "EB46Cw9z72d95cA9giyK7cXTYmXAEHzmjweWBDrBJKsrddJccUzyicJbgttkwNegA8Mjccb3kbXBeKYmzwsHCuY",
  "key15": "3YMUWyfssK7APNjeyu24rZAqHJu4w4EiAuiBSAHBp1amhUXErE6ZkPAdmzNrNDmm5CTTsjeocTugfFKDMDS8ijwg",
  "key16": "2sKamwD8F8vjD6wpSJ3XPe5xAG5MmBNRSEsGgdiTDXM58rnZhFTBnada1yReVSh2r4ZgnSKK82xR6G4j1jE3T1a",
  "key17": "54GUgWjFeCfbVcquK19dHerxQmyV3u1fMi6SjU4yLKeHvyKYk69QTopKC5JvxW4CWELdpEywFDi36zbBirmkrphj",
  "key18": "2QFNsQ26n6rB3nByKWZRABUsadTxsDHf2akduoTHuDPhSG7pcRuz17o3uqZptG7UpLiUhKZK115VHBtSAvGhFsdy",
  "key19": "Lm1mJQat1BnzS2SfCnLTw9tUV5ZjVhzkb5QE4qZurWgCmkF8kYv4uXfqGGQmvMmCeFxBc76AkycVqQpcgjQCWUM",
  "key20": "41MesQNPQryZkYbtdQmEkHvSKQK4FPf1LWc2J5emDAuHJ9EuHieqdAMZL59SpViM2d3nLmXQJR4Xk3VBC6jEk4YJ",
  "key21": "JpgLx7JVFNTwswJA3Yza6My4FQW8hxfXZMfF7c5E1B3CmS9T6UoF7TkGdVSommJWXqV8gVYmjLaWbGXHMhJjLdK",
  "key22": "29XZbKmP93Nf3WMZ5oWQEUqjLrcTKyj9LJo2Q8U6qK9D3aqFdcmCyTMvqavWprPr1vFGDLLjsxEcHFBSMVw1hXBo",
  "key23": "2USVTyM7okn68JbLCV3jSuo9E1k3JqbtGSuKnZZcAC5dfSKS7VL8y7i4eurGSATkyj1mqBhWP5ZFxARHZQA8Esxu",
  "key24": "5kaGYfxP6ePFtQY9vDAm6abbk9j7swNFMHGzT2zqNWpxtDPxBGuNgcKZm18FEDCiZcmYxRJ5R9vps6rA2VF5mZ3r",
  "key25": "38XCawvHzWt8zFm55g6PinZdnTWVAevmRuRejbCGGp5K2jq4y7qTBVYE5VzqASQxC5VjHgUzr5Xqe3BH6R6azx5b",
  "key26": "4XdwDss4A2LCwCsgKgSgYSozxJv5zf4ygypuoSXPkUn6cUrWwAo4NayMPJJXaVzxeHQ5uthdiFG6KRSxNvTsWXde",
  "key27": "3rvv6rpE5grPZ8smJV1RrkTN1zYjyuuV8b5j2Ssm197aevoFSESniWXY9CjZ5UXoegrJnsBx4867r6n2PLvLeCSm",
  "key28": "4oGvgD6yE5qqdtM7kJiqaTT2tUunmXKcqrQ6tbhguEag4UChfGSV3VA5dxie8HRegsF2hibzM2mVDnhxohZcdTkd",
  "key29": "3bMyUMndw3kiAtUovWsWmh7Ea4ExkNR6Qc9UfDZ7rmJ94KyQun1dd17LhBYCccgcYNcSAsnum6uEt7oDdDwa74Qk",
  "key30": "5ctiQ9g5GxtgjmvAojXVRPdnkNHDK5b5bbWzxmHTDoF4UMKcZhTLkSycY2yoN3ZAnzjvQkPg9YhNno9b95QvGmxx",
  "key31": "zMn1v9eJtaM2d1PbYZ5zmzGRapSDTNPFxTK66wNTB2kLyTVqSwcnm2QssXDDk2WhUE6QW9fL1921x74jqjn43N5",
  "key32": "4X3XE8bYcdPt4snVHLc8MH9CWWuLxUW3Hj64jKva77uY1TR7K9mKX2tHui8KDce5vcCr6FrsAZ8CjKVdjLddn5gh",
  "key33": "3u9u896tmk1MTF5dsM64yBj5yAyCJUjwr8EdkNL4Mh3a8pBhfCux3m3vVzg8KVUt3rsdRcquv6vR2BSza4tZ26pw",
  "key34": "4Vw8V2ED8vu3vFjeEYJEzooWZpLmYBxsykVzrg6LjvvDo7YJyiQX7vg7jU7dh5FNYwcCN6ixWSHF77o3hgn3cAap",
  "key35": "kzGXdJDuv9uQqpVfg58XVw6o9Z3rbjvQ1eoquYqEstNrbdGr6GjDXW4mxjf9iFwQc77fVcXEzNeMDdxRDfYqoHi"
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
