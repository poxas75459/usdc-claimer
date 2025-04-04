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
    "vMZQZJRnigSDCFR2qkaBr2S1xTV8GQYN1gXTWdCNPhe5gS6cHzeEUJkA1JLAfuFAVBAEJnARuDpE3miigMa2Sqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4dDdzZLWrhdWoZsBCvBBi1SK1T7CPnR47ewwUp1r8yh9DeT4H4sS9fLo9jCW3zNiiNtLR6tqBRDEV6YwV93dxS",
  "key1": "HXDEYxtf9He3V9CyRzCwKNjcHhjn5m4E5HccKxgX2jGK7Lj4ApDBfTsHeCwKMUgS9itxyTj8KfvpDcC3XUJ5H7t",
  "key2": "4u4pdpwyjoZCf2UWBS9aGyNNsAHziKYXR6Q5Bd4XDvvGo5sT2q3EfwEKx6Jj2MV4vg9Ua6SGb98A668oDwMmQuD2",
  "key3": "2qUjdNy62xjcEff2363cCtiZVMJFcWXSEjPjdR4eekz1y8wRZB66Cq5m4q2zNeCPpskRVQ1g6MbiKF9RENr4bMHi",
  "key4": "2dTyxpLwxt2TBvQNVQsnEa1X7nzPUFofxgyJVjZ2RrDRw9dGNVo2CDPVDKhKvpBPMzWpB116fk8ApLRBe1HVFVvM",
  "key5": "4xgrHuVsF4scxbEqk4snczbSdbb92iczy2MNo2BNBVzAWwDVgSK7LfVunakxi3thRg5oPB1msc9GU7fi64nNNRPu",
  "key6": "4CrQrj9mqs3yszfdxo5i4wSvLEBYnWkVu6s26CbRtJaYjL2xTEQvGsJan5Z9WYQWL3Z5CsYMihF3P51JjMneFXmV",
  "key7": "5kUEgVrB52LE5dRAPrHac4dyPKFHm6J1NeKqrUmqFfkzCdY63x7bfCAeHkkiGA2nCmXxWBEc8MbVqXZkazTvbcUz",
  "key8": "5xCu9deBCgkoRH98HGb236Wm4NwVTquJxzyAu4y4zCtro54Q6WukS4xcRymfzKYJgq4chbd9kD3wLVSFLhB4dwG8",
  "key9": "5mCVN9F88kVzBPRfruaQzqFmPsmemqekZcFmRdaQ2bC1VjfE3i7AAkka4pM28JwYHbRw39pjuyBu3gVzkecdYhrL",
  "key10": "64HD9kZLxkA2rptBDogtXv23dW8C9D4c2Xd3GamZdDYF1FCD1semhXRqFk9E6FUws32qhC55PM6Y9urt72gqv4fH",
  "key11": "38djWSYeRcCmpFq5B28MpYjMu2dqsK2znyGFabpXGYn1N4ZXQfbEoHzfprJetN9CxVnsy944GHmWvyHNHfMuFCFi",
  "key12": "AYexXnF9ZbLnfgnw5inQDBFMPqtLBeJw8i2vsrjVYqcsYqLXZxbAaDu6dsMg8sUkLAeV8KsXvNZZcEbdK63FSmF",
  "key13": "3PCc7zobAPKuYnYCL7tYtgjfQex1zaGkopds9Mbqu6zzvhtgGZUAUYkRWS9aYUVsQGSQzHzSnvoWgsS7ExrC7bqr",
  "key14": "2nfLUFoxj29Mx7UmpUyP25rSyCBbg9q1qCc1ZuyrWK3LNfg7FBN5gagxWGv1qpRTtFzAfjjCwfynY2Rkr8VQsLs1",
  "key15": "5cZmdSXXY9MKbxybpzrdA1ahRjWN172VP7fBuBwuHgzGMVHY7hwim4c7LuHRdzwGXY6moe6acE7TXd8hXR6tMUof",
  "key16": "5Nueu3jsEjNqpZXsfj8Cwg38pYKKxKDN9NseyEdRTsutnsanwU4uGYHHLtPFWZQNr3YbjTjKBffcZj9XCgSJt4F5",
  "key17": "F2CAbaoqvXxHnBJz2cpFF4wGdNBiuiDd4XdYL2oZSNUFAcJC2F6cXXBqZuvjRxeLvoB86HZsLQgfScnr6CKuJXy",
  "key18": "2JqLgoLnv1m38xnWGHFkjhj16PBHheUv19Rz67XigaUWEgPxbF59SBnGJxeHXWkgNa413gPEu4MtzAhdENzqyX9D",
  "key19": "2HsHKbeTEMcmucpCDoQaM9TVHNJy4BZNzLWLsPDYEH9Ng3jX3KS6X6peXugXjkngA6XJVgwNQLLtyDXBkDzbigYz",
  "key20": "44Ed3uvx3aQcMdD8ffnn6LZct4qvMKD9mCuiz8QMe2Q1FSL9Z9GaKUd5GRqR3hWyyVriywp2b9fWxMkjV26gKZay",
  "key21": "2Bt5cAxDUPRH1FkiqpF7exCVxcGDgDAF8XnNqtNmnBtQKFBwqUMae1drPoeusYPmoG9g277M6hFYvTuc2Fragr3j",
  "key22": "5AxnoZ3DXH7nfNoNeESUwXHLVZgtbcsKcyafXXrpas73JBcYfJq3DAAz8yRgbU6kU7qspgEQ8Yrgzq8bNKcJ3NMs",
  "key23": "4hTZ4F9vcKRSbE8GMQek17uxTiLEEEKi74uoVy3BS6Bst4r9SVVNVwuJhjfytMLPJ4uYXKDqx3XESPx3WWQdYCEA",
  "key24": "YY2JTYZoRHf95Hb6Gd6aaGCgr3E9wY6nohGY16qwxsDWCbJuwwGNNfNxaHCCqgGbZD27A2ibBBnMCZjRdnjcMa4",
  "key25": "39F8GbsrEHR4b6dmherPF7vXkpnoC5X3hM1zYsdHK6ar7ZtKRfxqr3KpQubSLCwjoU2D5XpiqMGB5RqMDwHU1Vk3",
  "key26": "2C1wwdha5tMiykRbxKdwcFX77nPJWApdLNib3UVj6ito9r1hUZ9atzswJguC1SdXabrkRA4g82GnVcGHzoKqoUbM",
  "key27": "2hQ7VcjjDfjn3FvoLSYxe2n2b81XSSjFtaPYjqTTv4M2TQGEY8Ad7xTFfCs2x95sopyBxPwexzzueHekqTuKuxFF",
  "key28": "26ystHc88vrBJXDpLbdREBJ2tRa7GLpZzcBjm5zTeaT5iRpzfMpWXPKaDEWcwQUn9Sg3K4zmbRFkCeU3XtRucW91",
  "key29": "3zpYJ8Bpx3HVZdq4snoDTeeNGTyx8wS4t6mPfFYESP7oB9P7u9R2nGXcLKdrrq39j9EQ5QBY2gnedW4oB8oAqo9P",
  "key30": "3zgefx5VzZxemaB1FMhfpus2tsXFA3r9hCmFQWgq8LQzm6stNavjKjydbiBdPJWzM53coeeDsTJC4vqZ6LZKwrHe",
  "key31": "2mw2aT5JCzC1kddERZNiwuqek4BDixBQMzeNKoXmbejPu3sM1pkBZ84TxrUxWSqM5kPEScTDApuyTV4nrcj6jay5",
  "key32": "gguuhnF18MUKCDnAUPH6vAHHLjxFETyfSNnLAuHKQfNZYQNM4rkB4H2rar2JJi5d8VKRWT4RegThkgxNN13RqCm",
  "key33": "3N7dsphz4HugKE3wTFDhJkTZxPY7hxgArPxNgtPwHLyxWAZg61qH4jweTNJ3fjGatDqaNY6uzyY4Ypq8g3mQvTM5",
  "key34": "54YhXNPahwwfAdSDSCZ5pB3c7LsyhR62QoyaDxX7ghU1GKU3wMmgTbPKhpGcF13aNpmFvPD6pERkf9oWR6ChXLE2",
  "key35": "3kEhhJ1jfvMrnoDWeewYR28xbz7c5EZZxZC1Enscn3cQC8msMpDvS1t5vbMzpjBDFf2aXJxD3bWD1HHkRGTsNrgR",
  "key36": "4HR7qeP5unKQwrpr4owJfQXH8j71Hy5qh6arsFMo4ZURcXUm52Jwfs2RWqH7aFYBjW6x9gWt6MJ35SxYJDBSseoD",
  "key37": "NWDaQ8pQyAx2jZ8NuaqwWJF9CpJFfvN84fHoVETFZVQW5eNLardryD58j7R9yCWVUfqNViEx55YHVsY8HqSCV61",
  "key38": "39VzqQx3PdX4JeDowneveKJKjitB1mUkEoYubwhoBtVWgNKYE1N86SqYn7N9is1eFxitYnthhsX7RaPbvU2fbfdY",
  "key39": "3585VzccLNcNuU55rsK6gTt4UUyn5EvtDtE6CzR3WuJWG4idn3Ng2Gh82JXWZokvxz4yuLXLKn7NqNTbNLTvJM2R",
  "key40": "5xQrvnppHjQyQq8uTEa2qGxKSt43BAuZFbGHdATAX25JiJM1FjvCBY1tHV8xnaPqDvtT1dzbTgmuJEC6BwbkPmbt",
  "key41": "36ZF9aabYKCcy6hVXRtL7BHXF4NnzUYr4de4zcEPLj46BFpXX8DvCShVXdunYxYN9iD8nDPLDfmg5F7k2fmf1fvq",
  "key42": "oUkLmkj2UAWrAAjfvXAoMZzfkmTvang8Vw25NNG7tZeQYbprkN5m1YCUqwHw3Xz1TbPDSpABVTDbkeTNYipsfte",
  "key43": "4MoYVCLvkDsxGYSdHhnHazegs716Qnm5EsMbHVzHAihgg8zHQJK6TRuAyXNnezZJenQZAkZddjwTtG7AH29rv4Tv",
  "key44": "5p1bgPYue7Ex5YHP4zFA5zdHUSxobtVxw1yCi3Yt9Yob4FjTHSnfZjn7Dgm3uYqLnSgwm4954zP1ta66944edmPr",
  "key45": "5KFSDBJDfANDrsMM7rqqHXo1ViNPHtYDwMGJvnUNKdrSUeThUTw5SKqTdxXeW9KLs3K9YASiu1JqcvNWWVY2EHC8",
  "key46": "2vyTUehfMQsPPZ4DW8dSL4srD28HwMDyxqzUrPSdB1C53BikjzV6unadmGwxnEjKVTzfzgLxs9L61EVBsjLWwyKG",
  "key47": "2csh7fddighUz6miMBSFHiW2rTTWuSY1wYPBdPVnzoH6Yd3WyMMisgoe7oZDPGeSefyz2649CEZJbbqGwrqCjafJ",
  "key48": "27istnHdckfW2MbpPFkSHasgvQNp5t9yJPG8XVYttKy94ZbJVN4mjbro5wguyLtJaMVZWyg11QsH8pZYQQJ7TWL2"
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
