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
    "41vypEcDqgrLrzsTdByjuX8JP9WegJLX3UKZcGmH2AE2Xpy44vNGbx4D3RXH2r8ZZY4JNYnkdaNSvdD6emKamaW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KycmfM2mfJQft5vaMimvq2Ymb5rNEAxUrMDpQLh6eKLKxEcoeth6qa8j3M92Z76r7tY1KDLKpnWTxqFMrmADTBB",
  "key1": "2AR5BoBA28cnCqsDUioKQX6cwRh5mmVGCsavrayxnwetujDN4CVgL6NRn47KNyEkfrHBqJdL3Uz1aYGcYGCSuyR3",
  "key2": "2SuxAQBuP4VbAAT41VKyx5ZTK6ef1bJKkXcH2UEn6wbVh2UiNBhaGd565UiMmmyLkkRRGFkREi1DnHEydRa7AfMc",
  "key3": "3nY7pbU8vqwCGLedRJGSvu34C7bMiG88oWwei2LvmHoSAcgxKVnypF2GSmxJQCsz2GUCHaCnsd5boVs6aEorNWVm",
  "key4": "2p7hhG15JiHVg4jjx4DCkK4ZkkgPGyyDgThZjCKJ9AEKyYq7cnpzUD9FZG7nFvMhouveo5fns26LCWTkneLXyDtp",
  "key5": "vSfmaomm7A5iA64StSTdFVR9QRGH33nQn9bJP8oVwUZACVUj38htsQvJrBB6k9w73rDxUCuWfF4HeRPmtfNR7az",
  "key6": "2y8tGLyK77QeAMGdaMob8K5n5AQeUN58omrtzai3uSqGZvdxFsNaRyuVqMgmmHjCLKKv2jMdKG2dFF3dX7GkeNKf",
  "key7": "3FMoeru8LVcHR55cKTkz1XKogmSHNV2LdeupQDenoerJs9X6WKcgJrrN7qQpALvLFrtvMxg2tVfW7cu5m392AtxL",
  "key8": "5nDsYaWMqSR4hx1XYTzfhSTAJE62ESwYx8emBVF9Ebgs246f1MVdJevBEeRA4vvcmZoyxJ1SNiwkSLQdTxfJJGPz",
  "key9": "3xbvD9oLUZAVA19dWx6WcL5fFLXkYV8qJeHLbS24VE5fnQxPb6ypJxqvCwUXrD72acV92rq4BXLXQbVsyTKrFz3y",
  "key10": "2Mojp5yUaN4vLP3dKwsk31doE8VurWWHBTS4TjXM4oXT29pzWKVGCG2kZuakhUCx7L31J2RCy3i447H43yARot5b",
  "key11": "2XVUZNzXhLfQ3qSgTQsTmhYqMBC3FXqXoSFuvV4tKmQ2HqFuzAQp888oCfAaUqGwvTmDjKp9ygFE3PjZXvMpsD53",
  "key12": "5tbMaj6LUe4wGJabKtXwDfUTNMjCQWsKsPSySEqs35gjVb7trpBnJiiwux6T4Xu8kLTMTwu5xvSe8h8xy6YYBnSK",
  "key13": "2dJNUAxmFRm8rTj9MbvrkpreCf2tVMHMkzT66Amts7YJdB27NEJL8URPbF4aqXMRWTBb4tzyjGjVW3adfAnWp16L",
  "key14": "2MQGF94Q5mUECbEuXE9vB75yvxXtA2EsvMQXQBS1ADvGzU7Kt1mQfB6vyYsEyKkVWeDXVUAZRRcfW6rpo3JtWZfY",
  "key15": "FHoxYaQQ8Y97idGuTMEN5CnYjcpXe2pFLBxfszSEbeEdqJeD4TRx1j4JWBreg9PB9kmXB2WKonz2KgevoXeCYjy",
  "key16": "63o2yQVSCXXbd3E5HshikYTb9xj4zgC3W6ybeNjwwJKmoLamdcSXPFAFvC8JdVop3NHTH25SZWs5e9YGv2cnDinC",
  "key17": "4iyUFWXG4caMqseMTR2tF3JEzjQKFT9wBzi7YUhQViHrHTd7UqqUrvW6sQf6WpJMgCXo3H5Ri1GKHqLkH5NmP4eG",
  "key18": "5xfXX2bJTWteeypMpbdxZHShjmaagj3e4Ja5keMkeN5wu9E1CTneL44GdqfcEVMtSqqW6GfNEWqF6stJojPQaaJn",
  "key19": "HCoz6wYX3GZtJSmQE1uKnkR3C2fCYeUpuePG4YcP5yoSMFt4oynyYQwuM87dMr2LoThZXDJRWqVL9fW7PkL7GsU",
  "key20": "3Ptw8brfoLusckiJh7Ts6ExkmBXtKQutw4LcPYHCP1GgpDDa7zPjdmuwMN1YgghtpMF5XDUopU785SMmLwuKCAr2",
  "key21": "H7PjGoYvDWXVi9S3d8WDMt7mrgZHsXWHcYy3MgqMN7LzgFd7TRZLUAfTkT3wALJ4SH97oCiZZJotsKaq66b4AB5",
  "key22": "2HszeU7otD9GV1muqYpKGGZTiJk5AZFHijpbPgiQycS63j1cHe7JwkxKPYSg63txA8buciJv1dc8cEHMJ98Z9XXN",
  "key23": "5TrTsk3jZKJMAjrT78LVPpLtzPEGURPgXiZM2oahRrbNvmnxFi1y1ecxULSBPhkZoUsy198xY2Le4Y2tjiNHFDav",
  "key24": "5yNFLQiC7xc9nVtqKDdhESx5TUwtB2JmEDq94U5cR9wVDiEHPYUEQiCTQunmETFTPxC3JF6uvoazKz4hesYvGyCY",
  "key25": "3FTwyZeSFq8LCHkh8tnCTYvKRHtq1JmScUfkrFinEfiBnRUwQGPzeWjvvgQHRFYhxM5RDLYTemn5rNntWsnpVT28",
  "key26": "3JMdB35QU7Zo3nuM2PrHM3PUgYdrhDtuo7GcsGF51PwzdERJD6a3ZZAjibv7C66ZrymUFQcXXpsaweibNKiw4akk",
  "key27": "5pe1o6KDQMeuY1dRwMXGFgR5SyFDcdX8AbKihbAbseLq7AGPk6PGKF9gUr6MtBxQs74zAyHnNmqg6Jt9SoB2z9kz",
  "key28": "K9JkntMBshEuZA3FuFtEdXyZcvJS7ZAwaLeJC2Dccc6dvk91wdb3YwaPMprjpdX6aYV6PipL5SJDb9unZ6m7wX6",
  "key29": "aQxUDSfhyidrpZTrNvogznummgELzVnpzn8AmB9fjpaf96wvZDC7fSJSqvqKw1AeRtaRJiguQcJZA4qZKKCuLeN",
  "key30": "3ryQSJqrPqv2qst49jDWVYpgCSX83t3JnBf7bgStnuxP61HMtyDyyJg7ii1FauHenZWqqTDXYxm6HUUXtnuV1Mbp",
  "key31": "4v3aLc11vVMALrWc4HNDsECfnjwTRrQhVnfmZzBdCeriwDNQ4jAiq1P4SzMNejy28Df2fqD8jsQU1Uua5TBUoqBN",
  "key32": "3DLr9ZfPVB9PEJuvLt7MpEpFMq4miXo7bBdYckaUu71pfNF58kEH8aam5cv2FAz11qhMpKVyLBEYrS1KLvXwcfMo",
  "key33": "5fJo8xz5EQ18cpPKs7JkfxQD1Ffoh5wNyPthE3MUJXU5bwJWimQ6wXknQunY41gAggbt1a9sUkkpTFaqUnuBpXFY",
  "key34": "2sKx5M7j2bPsLYm7FaTHcXPDtPsiZ4oDD4aPLU6w7AZXDixusSZJC3vHVYwEWWw4DaTzzGUnRkRn75RqNhiaxESQ",
  "key35": "3JkVp515qa8tgFEStSqP9UGyCyPCpPfLSKzJuxY31AnsMxWyYFbiWMCCakdH2yAKNtCWv3EPnPcfEPNvs62CKQbj",
  "key36": "5AVk6M4gPE86tt6sJxB3Mh4Fcg71PLqUiHYEhYRpAf9BcxBV78GmbaEZJJYcTEJ89oLS8UVNw8qwVEnJ8LpN2QTt",
  "key37": "4jF1BTjuFVHzsmizcWmzEm2sKmdbkXLFhD8ot8ad4dYyzX8bsTY9JZSpu8VMK1PMLtY2fZ1FVaCBeHPwT6ScUXQH",
  "key38": "57WwZkWvAfALcbBKv4gU2DM1A6zuCSZYE658iwbXo9FpME95qGB4vBVhvnKEh8aWozeiEXFhudgVxepPLoatQCCG",
  "key39": "43K5punnpAQWWHwsrFY61Cxn3zfg8FY2gkzzoJLiUVeqtMweM5y2RqrpEQCv3Ap49uE4Lfh99JSYTPhqYdkdYNeU",
  "key40": "3Hm3bmsH22qMuFrFj3HzhegdDe6NNPJyvx6tNBBV7sK8GMU7ao4ngFFpfiyhTtrMvwt84u3AHpcK1hrnqrKTD9TJ",
  "key41": "2w1LsZCJu7aciXB9Eh3LG5ZU6gGYk6tvkiesHr7ck3b9cAiSCKc8zGhdWH15DoqSZbTanVwNfvZQSWGMyPEinbED",
  "key42": "34p38AC32JKhdZKJPCF6BagEpN2Ryp7UYtTXCsCAXYx9SJppdheUtdCCqKvujykwQGcr5shoWTQnJ9tFMoHPjMMs",
  "key43": "2in5MActMHSUW7wZcbRN163CAZJk8Ci1eiQSu6XXtTzEXqduFph8HR8XMJeCzkMUqn14PqwuLnc3XdY7RuGgco2",
  "key44": "3gi1YyiP8cojSg91KSuD4nKXTTjdJr9SwKhtadMy8eNBYe6kfakfTEHdcQShCGHKMdBBdw9BV8iWKH3u2Y1cd3qg",
  "key45": "3EsS8DQnZz4acwWSV94x3wB7cZ69kW6UnwicFLLct4z5ohLQ5jFBba6roTcwU3CN7mjKQAsVufiLqzsQy4erdKVG",
  "key46": "5bgtiBBDo4JNpKTFKfk7EkrZVpEqcmmGws4dkdLDFHdcGAwWgmUzTdSs5YFi36TepJVMQXS7EcbzncVV5My25f75",
  "key47": "5FrYuniyHzX2xVbH9M5WeobsbgQ8RLthYsSRVn5gizqDCCiDgCsp6GovqtRqqPFAgCcydmRN7zmM42PakwxhiBDy"
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
