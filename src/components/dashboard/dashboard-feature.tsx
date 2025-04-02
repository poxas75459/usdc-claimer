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
    "67fzpvzpdaAh1XFtH1We7cYvBaXgoUE8jRLNgZwqcv4kMv2bcbrX5H2L8W9bdXr7ngeuJJHTjqHg9HRtRPeQME8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56MJqq58gvZfEUYEWJVys6K3Qg3o7bvJdNm49vVdp1cP4uSE8EMYkapRcvPqNU4zqW4K1ucjPh1Tm6QRTtWqihcp",
  "key1": "4qSzKTe3RRhEgtyJYGxW5RnLUNvcRY8rgh1fmCEpangJh2MShK9uYCeTbnrgqwZoSrh4oP8Lz9wyweGSps8MyuYj",
  "key2": "29pdp8ipC6ux1ZrT95Pd4D7jUbcp1ieEwQVQTZkJkqbLrYdqbPR2JCMPQNCUdw6qiwwAygVfy2CcbVGAGpsa4VJa",
  "key3": "2TVmDzbQxqzxqkVwMS1YzHFvjii3tyJeWXYTCGdbk2F6rsHZFnKEUys3vtSekbua3bu78Endme2o91Ne4w4DXYdp",
  "key4": "3aAsXGeG3sidLLzwjgKFy8xF53U4njgpXh434WfAxACkUUuknWUNXUAynaHh2f1YVHgsqEUga7U7YebZHxfKtY5C",
  "key5": "dAq2vF2e31ZtiaEqQK2otkZ18QKvswPYcgZkPHYZDbgg6LWbMMSU4K87bG8EN6p4qeq4SaF8mc1kzbY3XmGXApn",
  "key6": "ne2BzFMEns1ZkYxWTLerzh7YJoJAuPiiSLhxhRh5htUJK3qG3LqHpsSckzUUTPrFVawDwEzkPgeCAt2GLjByA8R",
  "key7": "4gNsW8cuHAvKeE7eQUzYBqVbr8psjqj8qptJymoTKMqA6mqM98o2dYwDYBsvXsCAr7xDEMZ78UWJytqqUCtDXz4N",
  "key8": "5EA6ec6g5VFjwUTuu1PHCCi8xJYUVegSv6QRnskpCug99bC2Xbn2F27rHwqHz8aZ7igDwQfvKsGRkAqM3YChpqX8",
  "key9": "2TyVMPmJkV3gVVcH7heNwdAcq7ZQMAXiyhd3P5X71hCQVcMZ6sPJ6BA319kex3yY6Y9wWtGHA8vRCHXSMFNaGNL4",
  "key10": "Po9CA9b2pi4mPn3JbghUi4f65Cis7DnFe8TPAiZ461wFqnaU8Vs3nHi8NuCXVJPduXkQoBNgMT5sXDSrDJDqC9r",
  "key11": "5tCKguiB4yabUiRjpj9EsgXEJ1WGM3CPBJNPb5MCEf4aFnc6qD5BqVLe6hYy5G4UoeYL3mUJMUKDDG156JR9ByrD",
  "key12": "3Wo9RTmBr2x5Ao6GQHQyTNo6ZH7wuRuiQ116RKFMJfhAZDu47LumJ8o63jJ2SS3VijfYrCmRoKzSvnY23uvkosxv",
  "key13": "5hb77DnzzwryLwYypBUfr2qPFuWaJdxLVocMVG8MbrCc4JegyVDvQ5RByyqXtiJV6tGQ7ov6Ggmz42MRFmA8Hr32",
  "key14": "5bjwNsDc2JeJWTG4mhTpULPJnosuPjoMKVpt5ucdznve4uK9ZtEpqZuJH2o2muD7h3AfAq2pFgZfSovJu6o8Xgb3",
  "key15": "3JucnviWmKtfZMqtVGeCoLq4dQaYGc1ykFPDX1ia177zyfWkg7CvRiMKs5y16tTDXwyqKof3oHB1kUkV9B7R3diV",
  "key16": "5DhprmfMCbT5Vizt93wDvAyF3Hj5sWm5ftNKbcfK98cJWN5qaoyzBtwh93qC4vwLVyhW8qGG56SQjW6bE9MDdzNz",
  "key17": "Xx2mDoksXW9hoHaQB8eG9pLJMDunTULfPwdsPeBNtHkghEhSPwULBCqSQNgm7wqV15TCFincgmibTMtYk7emT6j",
  "key18": "2pippDML6XUQCEUL5vLMMSqh4cB6mTR9U7FkNtbTsM62CCKR8J8AFFvy7oFBUdW4Lm7gxA3n5BpFqGmGhfLnEBoH",
  "key19": "4qtcu4Rn2TAREAy4yUHFwLjow6Wo7jFcjbX6ZHnmfrVgnBPczwjskA2WWNUYEuUUpu21weqTJhu6aVmEuYCgeCpa",
  "key20": "5yJ7b3ziR7jTd1mcdWUyuBF5Limsm2WFSTCubPgPatgfbr4iAWeVRyTmNPJ8V4v2F1RQyKsNhHTiro24GEWHLvJq",
  "key21": "5f922A1f39vysjyRqr8rTKtnKrsW9x7gCaGUsz2KLkBVkS1PhgbXwuoSdWt8s5DssRXUvU8ZU3Em2EYuPTsn44ZX",
  "key22": "3hyJYzR7ovbBx45nV9sKZDK1dn4AXf9W6FtfvzuUU9YqSDo3vevGn3kDtRndWbvaDYQbZz8iCYFJ2pEJe8jMRrHw",
  "key23": "3JGjeicTyhr71LFrffHs1sHzPT62sabACKEwWfXcBdXaf6d6tVaio75ZngqhKyZTBbagh8wdwQiYpWBuNeYLBEYB",
  "key24": "5nDiXCcTDWk6tRFmUtwWAGb9PHvCXsfJzuxw6WLvmsQ88QTsG3AQBP6QfqgeVwyP9sYzmJxnByoyxUZxxqUEmuBG",
  "key25": "5yWjTjDK3YbKD9xSC8b3Lo7BoFXVnkYSJc7rLRBgbe2Qfz6yHKypPQ2C1coV49E2yDHqXRP2ziHprM1r2DLQ72HM",
  "key26": "4cq54keBsfe79EPsxYvgarxq6sWybshvKkCARFdB6weeFmkJRdTSbjgwNvDAp7dxsrCAgp5ud4q97HjiJGgD65tC",
  "key27": "3usNAmUa9H6ZUvjjCFbjgWJTHaeCNpsz5LzH3HGSW55omrYSdmT77T8Fd6U89kLcCNfR8CPcQqkiXBZawp4qfSXH",
  "key28": "4AfuYm2VGqqVsiXVBgJ1nGiRTsz34sJaNX1abs8NkDpsfKvQ7h75A85rQPsnay1DtmP4WrJvSNdVKDMNodRNkRkQ",
  "key29": "3GoVdWjATJ481NPc5hp18ZXWUsLW8btUu9YMUNwshkKVKFEghT5J2EpsR6YSZrbSG3zpktcao6e4UkXRfWRbXDCD",
  "key30": "aRSXpFkjiCeZ7RAm7SPobrsZ2cjPgki3EgVq8TQ94rUFkLWq8SjFWG3PBThoz1tpXyBFY5No78QLrkvNEZPqUc7",
  "key31": "BGYGsm2doQg9VBr4iTqbXyDWUbw7DzfH7jt7wfNxq6odySewAB1etJ6sZLVzF1HBua4MeHM94KczGrajdY71QSK",
  "key32": "2ZQsBpAfYHvKKkqaY9wsGSr1avE7fP3EwTc6rJEgC2J3u1yuJ9GZXaEum13BGm4ByG4u1nEeQoCTLV3ByNafRvBs",
  "key33": "4mpGeeGLJSpvFWbLxUhHmmJVS1MKKVPeU8onGZFtLnuXPXGke1qbss9Q5qsZgG9RAGFwKLstPQeYmJcG81vX9gjt"
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
