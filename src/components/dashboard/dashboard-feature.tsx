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
    "2wDNFMRAxEcYSUwdDVZRGLDRx3MrUnXSbLa6LK32PCX4YRxfYMWBswKj6CTD2Hs8WyPnM9EnuDhpFu6ocToqq7NG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bE3DCcdDcL5TGLDnvAvBHv4q6VFkTLFuC1d3sYjZrdqJ6r9qCfJEyo39MEaWr6NvRVfRaSmaR4dutMm3QmkhB5",
  "key1": "dDZ26T32yc7DD16zhtNywUxA9hXBuvGe69yqiTt1gSVNeK45JxFapinRJdcpFLHvX8qPkPgpfNTcVYSqGWHVRpY",
  "key2": "5JQAJoeQnKfc84igdRQUsdUsJmq2A1UV8afszC68WY15gtbfmkcVKtY4tMKMLbJpN76i1BgUed1sf1wFV15Up1YP",
  "key3": "3TMUUovjRjhvZCkzRoN73Cb3pG5vnxVuCDCqhWpL1xVVFwBityYqVRRPvr1BS95yjV7PiHu3NwhCW1PxvPjackmA",
  "key4": "5U92jtZisXHPh3QbZoS2qZi2yGv8RUwMN65GvteZjpL3wjqyxxKhpBtBGGQ8RuPj27fcUuxuWps4YoL94JrW64i6",
  "key5": "vz72sSSMpaqusiv6G7wHDQSQfZBSvih4N6RNbg4sgmzGyjvTkxcgDBWBpQpK96zCv53v3U1vyfZXu79vW6uD5bZ",
  "key6": "5g5FofEHEpUWdC6TJWJW243oLNKvu8wkdtFj49QsDxtRUkoB36mC7tANnna22EcsLEPq5qoBmdJiXa4pH7FdeHmV",
  "key7": "3H7pKZbFXugaS9KxLokrxLjuLvGxWNjn16jSrUJJjEHQYM51zvq3vEngLQrfWApRpXBxec5VxFthdTksYUdZ8HtF",
  "key8": "NwjKhCvZhWswSz88kEmJvLCEDDYAF5CeeUgVDjfgagwNFHF2FuUrgMM9PEJ2cXFmtbMdbaN957foCnqthPmtuME",
  "key9": "3gMFvaBhXvLf61wDx2SW5phgkhFuBcL4GGgdd4aEupHw7NoB4NwedDcdPcGrT8fugfdKS5qkaZ2GSY1SeTJVFECS",
  "key10": "vkRkdCDkfr3gSTGEtjQyzAofrQoZaSxaL5BzCt6abvaeq9RGAMvc926wh1v8ZTMnukdqyiuECJ1rkYg4ZnykUz9",
  "key11": "dQJW6H52mJyG6GrfFY8tTCWEGzTVvAHQbxBhqeSK16HKf3QuKXH9x1jjiK2c1vpPKq9EjNUqD4YTDFrN2rHfmiH",
  "key12": "bqeRk2GWxdQNhGiPmoRbjQZS5wy3YgqS32UZ5QB6h4jJD3aeUmKV7b6JZaN8XxoDwaLRymHWMQgyQgGFNfdXnq6",
  "key13": "4kdYejk5aBRdkor3G2J45TK38cPyYwLyAxMdA7PKBshjxBHU962uW77hTm5j5xHGnvJm4JoV6ci8Ce9mXQuSnVbm",
  "key14": "3SoVK2ewNMCp6m1ehYVY3JNRFqf1t5RtE8tKC442NSTUZcdTqNTUWiHSBD4BFuyKErawVxdzrJPzyjEwoHBjsutv",
  "key15": "2udYxneM31rqTmyXdomwquBg7s3fjMu5kB78bcLULLwHCeiGcPD1FgxefMn3xo5tMnYWUQvuJ7sZnDj361idXtWX",
  "key16": "5GuSJo4gvfmergHmZEgd3oNHV9S7jFr6Ztm7ANJXKpXkGusMVRTzjMHZhisLs9aFsY1bnuxbPi9EcrY92VcJx4Sj",
  "key17": "4j6WW6HH3HxhxWWbkTBG1GwwD8BjzErggrLCpcRjpQxH2QXHLXEpZNsHqgaz71G9tZ7wNYTvPRTBNG9e5G2jhqAG",
  "key18": "4B9dBVB92vxzJjxDkwy3kvCvfxb9xQXdZtDv98KsPKZxUtzUsSC8j9AMxX6nh5BrAjGoTLKGhRqYTvnadvM2jzuw",
  "key19": "3Hmdj9txfY5q7zf74GPjmqtn3rErJC1LfNEje11ixXmBzDow4MxKk1QH5YFBqXjYDxtvUQZjpLbowGZwEv35aGhK",
  "key20": "2jD5RmeXvcvbU1PCh9jQYdT66UGUV7Lk9pEiyN4pTARhQD3G9TNZieyS1pkpSirvSxvYBgZTv3rkDsrrYL1CpYSP",
  "key21": "3Yc27rHJWpbKGeYFqEnCZUsUJh2awD1iQpGdUfpCupc79tTfmdoJdPvKmxU6x39WfUWkpvWnzXJLzWD6HdLrFWaV",
  "key22": "2z6KabTvZfWKCeGkpQxMYAtxvqXWix1Py7LotweKHjbVPkqwNt728bWxyS1b4GpbDzZ5UCW7nZcVD88gzA551qky",
  "key23": "2VqTX3dVER1yfPk5jM1Z7hasdWwtqLWaAhdXHW3ChscK1Vwcbgy2GWH6oaWNCVSYFrfpaDZp8HYsRF9xbXVgawyP",
  "key24": "5EDkDWUmLbHEfyE74cv855pchkY8HjVrkp92Sh9JZDTgD4DXieVAhwtkxf5j9PiGru2h8VF2myXgLGpNKjTrJ6RF",
  "key25": "47zcTD9NydqfQT5SoH3Dp91fwN9rDgcLAhieZGmCPihjdjEWte2rFbz9z4zgq4AwSvp3dMrGLQRo7HbSd6mLTcuf",
  "key26": "46UMioX9AMD6oJNtSac9kXfJbTY8cNNUTBhufpCLyTPFGdJw41zpjrEbeBcwuTsw3ieSYXmiNvUtWoLdvQe3wzH6",
  "key27": "4ToTwW7w6pQB7ePocU4CgarQDvUKcsVipmDxECM6Aea2KzDt6gWMvHCUyPzBJPNMpYp5MdQYZHdhtepXqPbkn4qE",
  "key28": "5gdPXtsPrv8Xt7SgA5Ry39X64ro9uBANCCgXx3vQjrpJ4cRNVpPK2Ab6NpKEJAYzhcwkwjgNjh2juZJVsFim5khp",
  "key29": "3veZmpxrUW1LhapDACDZqtiWhXH7eXKT8Nykzq7yqgmtEvzU42476DoZwgwY6VVggvNU5j8pRyCaw65ELCUyAPof",
  "key30": "2wXEKDMmsdqksTo7Vs5SeEjfQhDz4iJeikX7MssXn9euncc27NNnvtByYJZFnfXMsx9XfvFbgxQsP2yNZBgN6Sgs",
  "key31": "2WTa6eSGF238Bd7MMQa8AZAbscBoqfG7adwDdv8TupSY9o3AjxdWcePyU3MY6QjRFmZpZc8x6F7eixeVxAYBcV7P",
  "key32": "fG1AdW3Zcpic4WNchckFHedUFnWz8HKvQvzDPMkEuRE4msBWbfQs8fLMMn7XJPXoDjM3DRnHMoHtiJjR8N7H8eW",
  "key33": "4uzgAFhBDqfW6BVVJequ1f6q2qbqAPyDTh671SpLEHc1zDtRhuZ21FqRkjDL7VDPUBWWhJEKVx1JjjRfVoXCQ2Ew",
  "key34": "2KCJryHxXQUk187Tnr53nVZxgKK1iXAiNWCnVAYT8jN8mnWK5SNccJQQSnDbjejAhaTbk6xibwpi51Cw6r9obcUw",
  "key35": "2zEnVVaDh2GRsZKVFBSZbNjP4prN7WYHkwGD8oNi16Kxg42rFRWfUYWtWjS8zpy6KcprFu8x6oGtPjge4TbYTT3t",
  "key36": "4N8M2Zud12w1dGvg7US75feaJTa9sBAqcJ7o2JZ6damb9KDVpd6PrJMrk87JZKHLNQUuxbPrNRpbJmHw8RhVL5wF",
  "key37": "497syU1Nd3QcK5Yq6cwL5oXn8AzSrav4WuyGXxtaNiSJPX8xgie1Hgp2pfmPsdYPbgM4Ysn94HC1dNTV43EpaMec",
  "key38": "5C4LEJkdoaKMVja7y52SS9V66GKHJGec4poJU6fApVbYWd8cEfU8GTZRGRsoSqrmvkfcpxaEnnrdH3QH2mys3tDN",
  "key39": "395WrHNTPDHkstLVUw9pHF3DjeqAkGGJkS1exwHXua2bYPAnbn6cowDRwzF36RwdDcG52KNgFdPoZbzDLraKSqJw",
  "key40": "4BWM5vj7NsDgE1su8WE5TUKYmHXwfBKEE7tMM6mwLxVY9BRn837VzsC6UYrgsNBBTVUZkEMU7fwbm4yQbzCizvHk",
  "key41": "zHABPFLgoobNkPvXnS89rSqNavaUm56NpCEFWxFH3VY4wDkV8vE4UDbqR3vEGwsntUfs7458XRCQTTjYiXaPF7j",
  "key42": "4x5H8ENwdNNjxQov41abHWwSff3jLHAHh8sv6cUxnFqrkQm81uvreB4iCvL23p3ZNFRAqzfYFkRFeBBELVgFo6ze",
  "key43": "2TjXu76kzRbJnjcFECvLAfLSQb34njpJJcErwGfF6epWn6LuaMgmBtmNBgwFTGz8mKd9LZb5pEnLRZYCBkizkUPF",
  "key44": "nZFTGvahJJdHjjEhbAYJu2w3sk3KhBD9jBJcAZiFANvA1cDN7WpfMVjAVQSmqmd6QGSs7nF4CwakcqQn3oLS33m",
  "key45": "5ZbYcbpVvqAW1fksNez5NLmtwLZ6otnF8U21dgb2a6uzzLHz7c6remF7jsva3Qqa2bVDUG6WrtfAUToUqdCPdBbv"
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
