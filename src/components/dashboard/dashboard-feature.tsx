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
    "oN5GVN7rc2cCsGcbkaHic88GQXCEtGcgS5jNmSMmgFtvTwTTpat467L5fVEa93YPK6qb3i4uLW1Q7aySRarNRVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N83iYxwHgbDnz8jhHViUjc6c2HUYjNyZREeMWZdeLfbew1Q7ZBdj58RwZjnutCTCowFBXChURYVqU7qjrfv78wP",
  "key1": "578zuawQuRCadUtQBW6ikhNhJyTvPnhwhXXfeFTcV59CeSo2ZxgTpadFxkryfaK6ijBEosFaBSqfUEBTkjWRkyn5",
  "key2": "3wLMiaa5TGcmxk7SGf1Ug6MxfnxVKhJmx6jb5g12QTZNDFLfYVaurUQFciPGaAkAmyRUWAuZyPhYEEhBXDhg6yjs",
  "key3": "3nnpcFkyup6R9SaB2KmK1E4qf2J29QNBvQbGH5Um36MY96pBWFssSHTwztg6Ltvh9PB6KV13KkBxNq1HpqRR1n25",
  "key4": "5ysPySK6hsAzSA373LoY4ZPVnh6oC1xiC1vh57vWyDUx6dcxiw5ozZgbmDHdKrXyqMfaRT5X8AS5djWMyDV425Br",
  "key5": "236yi9L7yxHYP1MD22kKmZzrRxjJtCciqpWhnrxgcHaCYP5gAfkhWLc3y5bMJzADSy4eP62Y5uyMrAQNd3Ms8F1f",
  "key6": "2i4CoYrjzP2o8uFXxt314MUTokkVgEBiXZgSU7qNCT1Hhm3afyesDScUrF63kjRgLKEPL4YSr44TbMLCxmJM77R3",
  "key7": "5yLVDcai4DkKDESHbTF3xYzrWrBMRJzN9VuBc8YpdDaFxDPxpmbu5hMYpUx9dKbendfmUdVr7n7qbPZF5ep4Mbwh",
  "key8": "5RxwTjumSvuHyR5TBZtxaSweBdHgLCCqnrzJNz5k9YK5mVBMXTb5qv29b16Pq8ACXywv516R4eqmFbRAUKYSnvfY",
  "key9": "72ja59UkJXM7rVPdFs366VeSo4B2TqAMHDAafDkJL7Ex79naPC5CuewDEGWmZNjgZxNr8m7XvFYciS7RnboK3hC",
  "key10": "4349soo7Sd2VkwahEu3SszDZ4Ujytpujsk2SHwTU6K4ZJ8UnK8FopCR8tgzvtiCWjnnKzH5StZtUyLU3T8gJhzKH",
  "key11": "b8YwUTBcW1w9W2qanZ1cFSw6nbvCCYf8w8aSgpxefru56m5VESKJstS6ytdhWVQ9fY4Z4GZWcZiKteD46bFpu4J",
  "key12": "4CwWTnFR6eNV7ojNFHhAy7Q7aog4B7NAjbDKypg9TNXKJaY1nGZQY7uV5mVvCiYjPxdxLmdr6yaM3JGUnSF3RcPf",
  "key13": "5MHxqR8Pgqsq9BeovigbKfyawKU6pFgr2idKXo8w3MGMW28UejPSsMKAaJTLGeiETedmt9wAUePkCXDMv8tb6Ebx",
  "key14": "4fVPzerrKzBTjehwEpLJ9T7gyxF6JwRoHExY9vZiDtE7emrethrdMBBLu6sE3esqFP4rWQnqk989KSj2yefmoFqA",
  "key15": "2UmEW1wMvruEztEcBKRE2Gq1Yh3Uc1saSUpfxbSXqTgFL15rC8dz3K6cjmDwaf5gKApMzqwUfDAZRWzdRzWRfk5j",
  "key16": "3VDbMjzMmjei4JfAKfj1jdh8yRjzHBWbHYQom2vSATVvJYmad2Ez7r1azRCNd2GzpWpU63tLqYDm7vULigoYVPjC",
  "key17": "3eA88oRpppN3K7NdvJpXSzLRy14oXsBcMFbFgmkodpCJHaaw1Ty5eWXJidxb5bZjKnJBQq7nE2CZGqrHmjCtsPuj",
  "key18": "4gFQ7HHXHnSvw6YatSbJxavQCVwBz6uj5GSrbFUPhyGwqv6kJdm4N8uvETJKEXyLZmy9nU4UMeYKeRF36fnFQT17",
  "key19": "5BeAwAsEyKLHuuKizYsW1tyekCCFAosnzu3Nij5GAg4S2Yck92AoUBM9GwKJDhBxNeJNjfTnh7wWQzYEWCDaB9hU",
  "key20": "25jk97sGJcsDP9TksBmJ12qTSV9so4nsAspd2iRjYY4G3swx9ktnaTCtz3tZSmyZq1vX1VdZbNgZqTNpQRqEyEUj",
  "key21": "3HrtfF7h7F2SnDVvvGXDHtaWsmEmrECMcDY9GyRvHmk8hTDbVPJbsvrxvsUvNp74tTtbnartQwxLpVzDyr75v6go",
  "key22": "xr2inzFp9n1kN3gAfVgyZS3YxYtFvnELXLvY7hbCrbSAYKze1gjA3i14fUmG9EkZq9iHj992YQFMsMGFP29fxwV",
  "key23": "57Vi5zJPfStgCLWTZBhi5CuGRwo8Z3QFHsJMktEx4XRLMZwnMdqN88cXzs33mF6vmp1PPMMwD8Q78uquFDGbTGnR",
  "key24": "5svFuvpt8zpUsLZX77hX5a1b9GUYe1RSkP5hniwA7rK1oH2ASRVK6n75HzPLds8mDYQAM9cmMahES4KKXbRENBK5",
  "key25": "5nauFXTuJnCP2RVhxycqwbUKHEt18LKKzRyk3KeDUpqxaAJQcBWBWQGeP6v8Yy1KvqjTDt4TA19GptomgjfLVSJK",
  "key26": "4ZcB17diAcyBG2pzHsXifhhBJwiCp1xLFgxo6S9SEDuZytf5ENkoW1u4dFD5nXfY6RM45JZ9Pjyi4Q1Mh8LgPjM5",
  "key27": "4P2ufU5Z3SzojFegsbUxnP5qeydJ7UiA1bKXYhhaKZg7hjGAwPUrpHuPvjVxZfHUgACjish32QmYcCqjbh9QDAnn",
  "key28": "Ax8LNmAYJHs7zRgPo2R4bUHB52LMrLXYfRoS49KW4GhKUgcr1x94WYxYswUGTqE79wmDHwB1BeMhDNNLBcdQ8tj",
  "key29": "3iwLbUAwc6k5GseshdU3WFACPSQjL6JiB3LTtzEPjMwEoGNXdX9zhBu4ZpDbU53c757ZDgBBWntmJ4b69utcf12E",
  "key30": "4FxZkKTJ4bbJCJ33byhTNqzawC2VyBez1SojnaGMHgXWDB64XzUifktmXjHUz3qAnXNQ21M3V6wj5f9Z8uSjE7VY",
  "key31": "TQFk3dP8ebLnytN6KFbsturb8fiiweAtgAkwDPiqcuF8A8Gy8GHNVMnLJKqWSECtvMZpYkXSctfkT54qxDWrUUT",
  "key32": "535561HrcQEqBsupwKPwNs7iRv84VcT1iuCwfxvfS5RctbjmSruPhrrWV88VmBKpUzejKYS5X1iNrKnzvLK3Lsxq",
  "key33": "66TiJgoUNkWz5V5DD1FgsGaK8jWqVb4WQEpSsoPFsYtDn1eFYVvrh6s67W5Tx1T5CWrj85SHQwkKUTwGd3WjBd7K",
  "key34": "2DkXUL3ftQYDxN2Tx6gN8VasVopMz4GxsVkf5nPAqaw2S6aPuGTsesvuT4uX3vqjjjyUbTrYC4g2NDtzs8vM1Cvy",
  "key35": "5nwfTYxTfqPNoiJbzCw44zPwgcgwcs23qVAvDycPe4xaDyN5fSRKgeE3doHMGqHcFPX3wreuyX1tzvAeg7eTE5dF",
  "key36": "54rgRr5zVCVAYT5tjZ3nYjKeZDJCwGTax5NmHVu3TbLKGMkGXyggTfPgcXG4cDsi5i1Sud2pFNdF3qu39AMbXGbC",
  "key37": "pr666rvwFLxkfmbQ2yQ4UZ3Ey6LAY886xGoH4ZgqkcisrA7SGpctktZLJwYMu5knCXrBPaxFwKoXnwSERhrT89P",
  "key38": "fmhVaeCAsxZ8iSsJZC5pDh6UCTauXvUVbhUhCLgbB2aZ3KGrd57P6FgbNz5smakst3YWtW9UetEAY7gt8gxaxw5",
  "key39": "3w151t98xMARZi3irqpH7v8G1ZrbicsGkp9x9hbzAJigcR1vaKvqeK9y8nmoUYoTbp8LJiwPYiNNDbCAhZWHEya2",
  "key40": "2AdHmUfENsMnmh2at2xAhZeA2yAsAnoBNyBoHYGkjFTUEUcDfpSj8ue5vkhDndRg41rRddQa6SGC1sMVe2w7ULcL",
  "key41": "5CPnAJKQh5WSLdMcqzun8PSZkJTUY6wrVNrA9WAmCWeyhh4y1iG3pNKjjXUauEMx6WJtEd4N2egLo8HZgzsLnYDT",
  "key42": "5NLWcHja1N293wkZj5f8Mhi4gbVWhBQj1k7e35m6M4qJEvia34EoJMjxwBzteGBN4wxAfRjrnkncXjkbVSwK6EiH",
  "key43": "3dzsVEtfQX9QG12zGqLubRf34MWoPPYwdwsp6uzMC4SRsaW8Bg1pUrdir7h7qdBEa5BYEGChHCk2JcVnLRVjsbSe",
  "key44": "4gTz2QVeNMjpgTiPYKeG9xX4QJcjo2hj8ZK2hUef8R285MQVKtfLwpRkawGrFPNM6Fro8S4tdHAJGja7EhMowXFo",
  "key45": "3v1dzT4F8Zq5h38VjX5uD11ugTUaCHf5iBDbRZhjAE55GzEJvqMwnUVSzPwTMq1h4yWdCw5cb7B6mVdup986J56j"
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
