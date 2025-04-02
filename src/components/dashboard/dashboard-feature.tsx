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
    "25sqtYmJuso9jRCGNirzSU2cTNmkFTiYAyvRMh3NphaJorT1WqeUi6Pqun4U3ftoCS29Ab2AAMbL2FNTa2oXErfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ieCSwVi7RWKHFXMv269K4PUg9E3E2y9z4ufYrN5KFYaSsHvZYpfE2oPzcdtNCxCKraBso1D44MoRxjoXwp9J7kV",
  "key1": "2KLazvcHuzcgBs8XxCcvh6FpDw8zRsPjqaJNmKsqBxjj4a8jKJQjR7BdmbyWGYwZJkKiTAxbiSr3SjWQi5wzT9Wy",
  "key2": "5iHfmZUkQTz1p5mENQF5jj5ybjiTfDXpTjDMFn9vrNGUT32ip96VxnxqxH22gGYqbQC76pPQxsELrfLr9ZEW3pc3",
  "key3": "36qCdQZSbXVopZ8kXpL42Wf5AssgtLpRUWeUnjqz7T9NY7gv8Fygit329xGFWYkZTpRiK8Q9PCgwWjiwv73hMjRE",
  "key4": "3choNoLr9CAZ3zKjUzCq6pGHLzJs6yAq7sWtSX6acZZYvbdYh5ttRNkdRHPJfLNp9gQaeMcsx2fG3Cn5kb8RJtXH",
  "key5": "2B1ZCYgPWLmeQYj6TvzwCRy7Wsj191opicAU7K6oqtLn28ZYUit8iV1VQHpJF5XSuLX11KbVVrpBRBKPEKebu4zY",
  "key6": "6nrYbvwQJS6oqRaGo39CDgKErxMV9GoYt5woqEyKRDDtjbJgrVcSvDJwcFobmAnfaWfpSwUcCtr8oWH9Zy2oDTr",
  "key7": "5p9tnT2VLMjizKXuuY1iy36urYF2guTDwdWDnNaxaekGShs4PshhrhztE387CtaC8xMXYfJzRwAzzj8Qvhy1dF4i",
  "key8": "3x78MT86q5H1VUZbdcgEsLnBrYueXoxrjTmADwcJPUqYzRRRiKsz9gakBHBHmPhUTp8W9EDoYNGRfctkWSHkkL9c",
  "key9": "5DUNeb4A7RCQHcAmtXs7ncgnSgXfZLcbB2dz9DoARqviKKLVaKX9vtauAbSmCw3wWvqBjHsYXQ8AsfA4RQAxNQ87",
  "key10": "4vyHAke1Ue3iMNDumtKRAxzxRYzLtVzSEnj8HJsTaGLFrGU46XAB5Dg2StbBxZLuFw11bFQcRQK6YpTdY5kGNTYM",
  "key11": "67nZDen7mvKETtMxcwKC5R7UBPAeVFEb452d5GASSqQFXup5Ph22Dd7ZTfYoffJ66fbfLgfzmxmjTtov1EF8wQJH",
  "key12": "2JBu8qnSzgipQidk1fDfGiPP8HWyi5s5SVHYxTAHi8eHag6SKe2vLA6dxDbg7s4csNmy3VFoaQACcb4A1iZHdSER",
  "key13": "5WtPjASp8QJwmFUdsQLKhuKWKRQ7NywiAeG2BgJ4efw8AX4du1JosK9M8Thfb59FQGrQUdzBtM16uyzcdTyacg8p",
  "key14": "4t5ULW8pJvDu3CHHuox6FGFNySzp3KGTWwNwL9MJUeJT1BE1KRWGuZd3Hirj9wFpdcyg8hbSJ656LwY4U993R4ov",
  "key15": "5e4fs3f22HY16s7Aek7vMBaE975VvWZQ19Rhm2bQi7Ho8utyPu2t1YchwChTnqNUmVoFVG4zEFZJ3Y6tQP4Gkzgk",
  "key16": "5LfMUrmZk9c8zZcNcVeZ4H3BYM2hDxBh7jxdxQSgi7MgDDPv5qdYPrcrBqh5fkWjtNKdtsu3C4qkrz92FGq3SLJD",
  "key17": "4DJoF4WVVYPKPLeh9mPqGQvSqh4ECtjFykRqqNWoYpgm2ZxiU6nu9dUDwNTnzpmrhBCTDae4VrNUs2MaRT1YW3CU",
  "key18": "5WY9PDDhDnSAsoBDBnzYkCDsngN2KjMiPga2NEWZam4t6MYUELh5k3PRJ1TjRxE576j75n9NGE75wNHoCqiUHT8f",
  "key19": "2NN6n1Tak3iPenJVCguHYowj5PB5AdLXa8iDGQUhvzvDCAYk3w2KN3KyVdUUr98zy4HZTeBhe2SQQsiSfaDYPHh",
  "key20": "3oJuuvr8XmynEiJg3P6kvUe2ByP8uFs6QgyhtazvhXWPezUfNPEKtLSjHhUkpuczNF4JRmLPApxTPp5VmXFKUcBr",
  "key21": "rPzFSoiDWF2TYhrixFTpV6tqG2ysFJ6gXnzhLkyfTKPEizqoBuzhRXpmwwD99j8tZnuiWSamwGnQNUDYdjZAhWu",
  "key22": "398pnHGv8pgCoEreHWbvAHmhdoR48NsHr4jYHC15HMytJnQs1Lcph2gKEKqmRemoZfKUx7LBD9Kgr7seRhS9z7Nr",
  "key23": "4hVL9Dhz2eYMPKBsJNhxHUKjRmEunTKnkFnH3UqUB1e4e5F6MbYqSQ6Ec1KohKpMv2p7R44VLwpJPLmeLpt7J1Jy",
  "key24": "5BMUmUattkR3Qsxzvue8UurJ4WfXaMsurymdfEXJcTf5KaQbYNjwKg6LS5qZD8DFdH5RCrsmaDKsBTE5vUz6KMrh",
  "key25": "2t9CN33R3tnYoD2seZL7RGAAu1znfWkgJBebfEZSBazEb15sSDeg1mi7ctUNNdGrky6MSb5a5Hjw6HTNNZQgDZYQ",
  "key26": "TB73tnVyZYm1H4sRZGPFAXP4Vg3kMvtUGkXn5XeMSkWZrxZx57iST9Q2RRdFTN9wfXS5k18AvftvPGXEbzpMffY",
  "key27": "mupAVuD4EHWDS9ssSPbSvZmoAMH7X1qGhMQPzrN7UVVapsRPw68jp1mbRV4bqP9FqiD39RzBZmXeMxbVMawLEbw",
  "key28": "5ZYGYdsarWtnnvL6t4xaiqeMv4VvNoEpC7MVEW68RdWULZKqcRrVPBQw6QdEhTatfYJsZvfp5V43HTWf9kvfGryX",
  "key29": "4iLbU6Ri9k6jUa6SPrJrNmLR4ygphzLSpyq1KNP6HWPGYBdJYcqS6pFFnMw9zpfcnCm4h9FHtvnWDJgcjcsHZ2nT",
  "key30": "5HZUcpptbXQvT2iQ9es3LM8CVBk97H9zpqQq9WBhNMe9MmvJU5QzqLRiGGY3AXhcJ2yujjzzD8pPiu99bJWUc9Bh",
  "key31": "4Djo6RfwwEAZbDQyjGP1qmoQncUbRp7FaduuXqLavpTB3UkeQpdkawoTC4M9GTToPiHmZKjxMwmDz1U5xonoKyNz",
  "key32": "5kXXjerXoUB4bCawjS76Ef8PFxdcdcfNMAc5RP3hptUY8fZoc4QhAgT2hw9Nupvfxo6rYANUYqjTg3v3s3Bhqe59",
  "key33": "2qdsfqBT8hxatJtEsproqpbA1Hc7hY17RYTohXpUHUyaATNCfuEPY7H4NxH7pGHaCpGwLHGKdvvPVn7gEbLvCLHM",
  "key34": "FiZtsoVhKvEcvLQSGEs3TFv2BsH6Rs9E2Hvie3C9wxo3VLvTc1tFCr3DodjR6JRD5zdWZdEk3qwapKCv6cM8maW",
  "key35": "5ykRpf99KXnWQfgR2nkz9FYZGCmtG8m2q4qRpYeLrQxHCu4ME1zG4B8EjE3j8QQ3R1B1twUWVMvU7kdkvM4PdPCt",
  "key36": "3VDxhgVRt3VQtddPgu6idanyDCNcsjDw5npPpvBoe9TFqk5DCHsW4d5YS56QEYg5hSsZ1kYu2xTYFmQgzWC6G2Yx",
  "key37": "4H8vn3m8JpHxrD2PEZpFqHQVV6zjgRthVpz9sxNvrH1jRCrNS2cUrjYSPzVeutPzUTtvitJdSa2UUPKRQntE7MaZ",
  "key38": "2ttAsJV4MZvbGnJcRPrv8RZqAnNuZffuuXyfWoH1wKNeJxuChLyrxXssm76ertWCr8WqWCk4mcDNy5XqZSDLkE2i",
  "key39": "ZqbctoyuUDSoEqVMpXhEzR2qbcNzPiaij4Fv2pawrHQWX3ty8joHJ5iKzW8SFmcEjEhjyNsavshcThAgrHNtdFT",
  "key40": "51HrZTCedL6RF9sVr6myDZJWdUbbDSYbD6JC659x3PzXgPLSdYpASDuaQxkUortCow7e5DafaEeMUypYwhCoiGH6"
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
