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
    "4RB7SzRv34d3QSkhCUFCHdhHJ3uZsBQk7PkuyAgrC1rTTRHnfMRxUFGRKFa9GmEERBg31pWRcgmL92CTmBQxoXJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYHYvZuVFTBhK7R4G8cHZi4Qx82kVPySbZCuryQL7cWscZfeAqt3xaSgvLfwzZBSNpvpq1npScMo1eZJGuXvUYm",
  "key1": "2P4fgcqH3FN9wmU2QFvo1QSPGGvv8Sc5mbz89dGVZnEfXMa6hFba4jc7B4g5SyeJqAYfRR4QF8tUaGNsetphApCY",
  "key2": "2gk5vdf2tiohetS1Ly6nfvCkkbCPXNeAxnd9j3918YF6o7qLfByDdjj8iz957qxNjrhjNoFS61zuTu9nPMDQrgxH",
  "key3": "43xHzpQFvkTeb8Ypfikv97C5PLv3FgLK5Wy6C2SGFHdVaPCDvptr4X3onEaycmiDN7LNVEi2ptQrzs17rN2xQqLx",
  "key4": "2kexn2mLpxf5HZnH6AmCenAZhwkdDxe1znsmXMA8Go2yom2AYCpqShecfjdeXGgKbae8uED98P4RDoNA1c8AvdyJ",
  "key5": "5FMZxoJKFEeQzT2mHybvx2e1M61KQt5zeGLTiay5rt3xivxV38qma5UTsqkDoMohrYJ3aAjtsxpV667Jah8cM7rC",
  "key6": "4EvQWVNDpv689RdzaTRnMWUUncqtFkMkBH5a81fKnwQWChJNWt5SRY1AnsJUBUSYbhKxMvambbzKuVgr5SpRyTso",
  "key7": "2DLQSqrpjv2Z32oAgnkqt5ZpvAwVcGmtXQyRNr2fjzTxMEMyzbxPU7bnj7e7KMakMFaaxBJuL3JqDXiQKCR8Ton",
  "key8": "4eoadnB6YsaE1LX77ktuwLf9vnzqsSTbdirrGf376gPtPvmqZLPLxEqjo1xLkBz3rAGgk6YFm9VwN7JDRyipeDBn",
  "key9": "3TaP3fXSuGtovbPqg8mzpUoApgE8Qi1U5THUwtAwTNpjr9vrw15PFB43WCC46HWPk31R1ZDXbRcbmo37oW7idY3P",
  "key10": "3Lgw1ee4RWeY5FMzR5YZpt7JYFN7RwccZoPU5C3Z9C5SY1Mdw1mt6uSdqigu78JKMYRLWxCjQJC4AU8pWc23SEug",
  "key11": "4nEMSbhCtqXahbaKSTYoBz1MYkfpBHTt2Ht1ihyppowAWuU1qaaLHiNjyteyg3pKnhReySe7j42cpTGfQSHUBAmA",
  "key12": "FMrDTKG3KAvTLf6N9eCjvfxmcYMAqjDFAdYfCLTcBX64f2yDwmKkrUYfWeZ3UBftYN6PC2izqcHDgrbk2n8sHAc",
  "key13": "5zDqhFPts1b8dmQmnJfkT12SxBTxSVEoWGXfn1wHu14nB7EDAMrbjJiJYECbafAqwcFrSFGmAZxfUXDbZBUjYkus",
  "key14": "2hPxtKXdfJnbgZ2oJQ8dkGb68bQ5eWNPzuAgv3VCNjMLDbLNz6nEPKKtqny7nmAm4RP3FVHQZGZPTgy3ydUkPQCn",
  "key15": "4ET7Ynhq6M4D9TLXpVxbm55fS7eVWSdnUpyajVnkxhvK16J4xFXm6xL1SVsjQh7NqPZh9xPc1wPq5hbpQ69YcDCd",
  "key16": "iEzdqAQbgVQRbg7TQoS8J8W4k9ekAjGPpikAgJbZfM9hnXzvn7JQXPqokVoCkwgqhc7Y1HGsqRNFbCTV3pigUZv",
  "key17": "3upwdXYvo7HRtE3NwyRc2xyKJwC2JKJe2JyyNEiL9oUY2RvPf5V4FbNQLugad2fTXJvjhsTf6uPTJV38vjJdKfn7",
  "key18": "3Whi4XdhAKXZtgitzSo15kCzvL2Lm3TFdfwo396z1Q42EFHZNiucr76L36DeUCcWBLrFGqBeNdHumL44dVvZCxhF",
  "key19": "5b29mg6tvte8M4FKpEPkdACA7mvqTtXeBgaeozT1TxZM5iApZiGaCSNBJShtWkG2379LoiTfQNySv3rEeFc6gJ4g",
  "key20": "5bBVppsxztg9zJUXTaXJiGqen9Me4d6eNVBFhVCLRpCxopiEkLr2HndBooAh5Xzr2Z9bCTFWMF9XocaS7RjnDf3F",
  "key21": "4jShFshXkKvcREbQt2u233ugJgorh8rf37ngg73RS2cpnN4ykQG2gye9sdce3QSm4mbHZUiScMQ2ygc2ivFLG449",
  "key22": "4zr7TnrvjzJGy9UE8xStLzj4Ww3Dg6YMacwcGwfiUqKHxPnrNaNpqmaQnsTQZozaRX3xkzft7WtRfRafQc627vTh",
  "key23": "4epoKzqM8HzJDQ7rbz4anbVsDxVnJR56PU6y2VywqhvAAg7cDUvPKK7aP3MpLne9A5rdFZ5eZiLdCwAA1gCpjehM",
  "key24": "4z7S8HDYoaDW7oMxux8bNuAHtcAxisH4tghQSBSe3HuNHthZ6gid6rcdVPXd2u4RUbbPrDN9u6pZSqQhPqHhvLGm",
  "key25": "3rNiWfcnDQEVm2nGVU6asGbqcaifJohP6uNpzratg3GxybsXHbfuErVLeHzyoiaHrVf4ZHUm1RScj9efHGr2ijBs",
  "key26": "jaa6UGq9W81NW4TeAwRZLKBomfdVw9ZrXFWm3yUuZHqtrkNFi6JwU9kZKNTDQp5rahaGoiBFwQspimu18CxJpxC",
  "key27": "2eqSwXCVcFYg163iFFNsqLwEcf8mm7dtebEVr9MJbNf3aGVpoSWfBHH5kK6QAqapLoLT5pxdWmQaiFVNHDmQ3d3D",
  "key28": "63ZdDkamhgVZLZbz9n5t2WS1R9w4ZXBv13DimjXZ2jXc4YDj9LVha7th4TMmvkCN4DFU89iKjJai5FwCyZGXFKx4",
  "key29": "KMeT4ANaxdx1z8qKkeSkQv4UfmvT2T8zowJaUjNwZ2SL585AZ3CERYZduxH8DupeRRgnWDtiLJrF9xrHsUm1j7W",
  "key30": "5DNEieXusVt4xNH1JByKi71nDVS3RXydYUcWre1tDF7Ww4QvKca2YjNkGvFByd9dyTAkDdDL4Q9JCYYzwzjMYdS9",
  "key31": "4F1SiUjM7P9nMyaimY8jW1rMF7EdfPotmPkVr7YFzcBt1rJppb2HQ8FancmKCxpUdaUJPFvjB8ks8ABAWDoE2VvK",
  "key32": "jMwag68yK8rqzkLdZUKpFetq3WuAvQCitBFz9aeoNzf8dxvUXPdTniNjH9rsxcPgRNGsYbpBBKZmTDJTdY8MSE2",
  "key33": "4LES85jEqp7hMiQg6ZRMDnvukAyFXRYaw2AN7ADhoD7b9niymV5caencmArLfQLF2R5VHC8N4xWTadDBfcEwVjid",
  "key34": "5Sk9CBpVsGEopoKDaGX84kaRVHL1DWS5sHejzJ9WWBGCASnsFfdtxw6EBJAKEyFcVW2gPdL4zojenQ9M98svWeux",
  "key35": "2u9sAkn1BtBQL9qxdsDDvnUvpxSQnJd8qF1ZFBg7eCFonFkXGpFrqaBKBYWmXK4oZW168B1Y7xAP8TpMP2wQNvjx",
  "key36": "16PyqLnci5HVqQjsxeZ9PBexXyLspu22QdzksbCNNt1yVeVSC6gedPxmZjCTUG1xTwojsWBDF8GtENbAFVR8JTd",
  "key37": "4bTYCWdACp3wNH4FxF6rrNGadKno7YQyUk9j6iATL26Gs4ibYBJdWAU2wuHxigpNwMZKhFSzsNCL8Pqr2vqko9Y6",
  "key38": "2a1JM7BX196c9TU1Mqg5UpRKWocnEGEh6L6HQDjpaqk5CBTH7xNpK7qQcyG5rFDUBVfoaRB9Ca3BD52nPqh48ojc",
  "key39": "3S6K5wjoDrhZoE48jKUKewyarkjTqzsFWwPgcwcVnW8B2ANGYs93Bk8GrSAtDpUcwvgaYufUPn6Sv29ebLR9cWdc",
  "key40": "4HuoXG3biugPe6YENemKK1hCkUWsviWeAtQGUNe7tEKkXvdb8nHdq5Mm9ehd2tx5DvYaMoEKfddxgEzNAtFWtYFw",
  "key41": "4N5NH3XSGfvR1A6mnwMreXB8n3iHXWu2f2LLKyJfTS28Tf4NdgYuw7h9jYvKAMGicPboGkGAWEwpU6WbqbqwsT28",
  "key42": "ZviQg8oeEFDVJgKPjLguchff5QkxoC9xAFcdREQrPyeK6wKeGmdttUr9AhQ72FGHAr8k1Akqg3DapMtbHFvk7e4",
  "key43": "3CkUpbE7fVbf2Vd9ZD6F59VqaUwHNT4utWyFwGR4Sj9HG3kmCY3PmQxnTvXGh3oCEYUrprtpqqoSHJY37kA4wyjx",
  "key44": "2NxZrgidG7zHmbEc3FdpBQGuAj1MUxhdCHn4x7cG6m86RBojZGAB5yM4qjX9XBc7kg5FK3Un3KY4m7cnAGgxS66Q",
  "key45": "4omqHE319WfqgnyggDnynXxM3rA88qVueZdD1odVg8WZFbQgTSZ8RTPdg8xKzuVvkaniTQE6KVu87oQcZYMxgJqN",
  "key46": "3Bk2uUHXr3BvGjEJt3WtxMY8Gfoi6mT8pF9hrnKhRWL63KwhmE7YPN9t7PJ6jkdiJuPpZZNLTVwrsmdmvcS7psX4"
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
