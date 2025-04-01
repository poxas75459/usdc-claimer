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
    "FqkvLBJQJA5pGMD5HWbDR2bpHVGvKHkktwjGUrAYZurLFDfwskErPgdhipocHtdPKgFzEV9f1ssSHRTFvEBTpTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WNbVbkS4qFuA2XUfmamMeGJgZLWwx3WadDYAPKyBTczaE5yhfZkydfuFLXtrNoUM8yfZDwpazmmYxNzGKPutEu9",
  "key1": "Xzv7ra4sr2RjQVbHDwJ4bnNMqeBfNGZiVSa6QQFqHnFtFRdPXFaC9pkS2ohkcLUo39v71dMqzeZeyfCm9JDuXBL",
  "key2": "47yjNyNgmdNRinAECdysQNcDdfhHhz8Bxcu9hXAmkp9bwxKvdBJUnaFQkCahrUhFrSvorXiDBX4xEWuJq47tF2FK",
  "key3": "33iYsbmHvDxGgwPnGkYfV8BgGommAyWouNCVEzpszp762rhPHKeeRqKsnMJTaKSokZT6MNQW5GDJUNU37gycMGsS",
  "key4": "46UVUFfnBwfSYAER17CLwExqoxWLrsfA6LbfJENS9tZaDZM4f2A4qMy8jQ8Av5eF9GTvkrGeuDYnbHsQdMUsiQve",
  "key5": "2GhSjktz2JKyo9c1nqaF4LbFzCiZM3wDmzkueyVzJEB5A8ipR41GvRcUPJEnus7pypKMsC4r8EGLvNP5CMctrSs8",
  "key6": "3BP46Ht43uDcdjqmRA8CDBU1U2euKCJppkAimcvcdBQssxrhVzk9GmWAX2abY7gcZPVvXoLxSVarPwK5BfoSPjyx",
  "key7": "3wiWUNTP7q6YEroyTzUQyN5ZgZzF6pSLemzfLERx98SUCGdQoaGp9C5mgoc21XpSxZKEZsFgeXCdjcLBzEm3q4Ds",
  "key8": "25sjwkVistj9bYjQ9qUDi9Kq1dqcwkf7zU31KHncpRJFjVkqdpuhZdn7vcKFmELj2HXpHZ7geS1GqWtozkjmXTa4",
  "key9": "39jSoipyGv2tFH4kv2HUoZNAzxTkAeqcyPdkodXaMQGut2mvZvZV9yv6vEWPLCa9MqFVL9kx1pYw5kNSSPQFZFZ6",
  "key10": "3vp1JCsU7XtQ29tmi3Sy6zfCReoy1L8iYAe94mqRWZhEuMSX2GwHs17tXiTjczF2LvTrvmdc1SMs6xCEwA44Mupi",
  "key11": "3cBMP9yb3ys3mLFq1CfsLry8SYeD7LfnYoPS7sCdpobmcuDXSuUHUDvkeeK6YdxktmywCBx2brLwTfgjUqzkYdzL",
  "key12": "Si7PqkSUxxK1DWAi4Up2VLWEeMBfVkfGMcGDh12cmVc49N7HTNjJKxPVJ3QURa1Rs89LsYGgXzw5Ar3GXYbuhyN",
  "key13": "5aXHU32FwzjvoxA1c71LMRXtG7eLUPqVvHw1kFvuhSpwqWzmu7Fh7ewLeAJWPNYaUQe6tHThFEttNEy32HyFVyV9",
  "key14": "5a4xeX39hKckSbkHdPhgqv2DqaCooyuhjFmCi4o4cVkvPgPG3ZvAfFUa4L3KMTJx2vq1ZFLyTL9b7ZY1c4qfDHVM",
  "key15": "2KvwnS9EAp8pwXpG5uHQdpDFJK7pwredzPyd64hgU5fYcuuz6THFiz8NDHyrvMZY4Yv1xKYdNbPpm23CkFPrs53A",
  "key16": "5o8cUWFQdAgsvEdzQDER6atbHivKxJ7mbzj5WBtn6Sr6dh8UeAkP5DCp3BxC8Gb9MAZNyU7y81kccSaDWKywY2Gq",
  "key17": "2YPnvRXL345x6ctaCiumRFBDXgqf55wxXT3362Ai4BKpdaxNeT6UG2G43Q7m9RZ2ZgbgRJno5hUkfehe5HQi1FyZ",
  "key18": "2QHjF3mUZ9Ummk3cu1qh46m1emzfk4dkMs5nZSpLnbKeKZFs4HbKdarB2bnzDd1u686robPVQPCoKGp8kijGe94H",
  "key19": "5gzvca95pMGfa9LEoWTntpVVDrLDpAZroZftnAP7XGsuVXUmGf4NbwFypGkafZBU1L1BJBgVcpAgyEN1kUsAwDPn",
  "key20": "4KpNME3sW4D2wiYa6fMnkWmwx6dVq3Vs45QM9JSnEETS4xA3JDcuA45ZJ2692A9jX43hr7enq7dFKAjzEEULHiSw",
  "key21": "2J4Ka5CUYDbqDNJExVpuNGZNqTq5AdLLLHVuqv5Ch2pLDYd3a4UHAiwZGfWYgiRSiuGeadYX6Q4LbjNBsjYjJUMS",
  "key22": "3g4C6dTZy3yhun2A8EYK3vyRjZ1dLBw65VWfDJBaQ6gXATkgkweHjwdt5zLzPjPXr8KhTBSuYsfMTk3Psz1SYc63",
  "key23": "44PTMApqxXggE6hhbbjoh1218ZbXfM3wvcsK3byp4DahdYMywRrxWq6CkDXjVja2YdJrRGMzKnkT8BpUyrwAQSYs",
  "key24": "tSt14AnUEufrrodDbC38fgok63mx2Gt1Qejoujid8coJLyhuzXbSrhZZLbrQ3swZBWcYvbJwXJkYXQFji9GqYtz",
  "key25": "33fVKeg63DCWju2MH7RprsyfTXK5h87ffrYCuyHxDwB8yQHLRiNZP9qSHYDefBSiabpHHUUMFCuWTHjMvCiDK9Fn",
  "key26": "4gmvNc6t1J3bmmvG1xnnLZFWfYTqUDTjiPf4mdmQpsa8vgbKt4rWBFFAZm79VEimgwCXMCBKLni2NJZ1XutmbdSC",
  "key27": "3RvyGa9kNEx8tT9fgq7f2wmhUfDQewSwtxq9KXvFEPh7PQyL7kXPx8ciLVFyRFVBHaYqzVxFhudJxxBNHyrikS34",
  "key28": "2GMCQvdeEu9hyZZXrGuZ1BsUmBT8BRnLj1e9b2GE69xvknHUC796vkq6eFTnrc7e32PsbZweribSizgpCUBLsyZM",
  "key29": "6HUki7P4qnbzrDHzQhoak2uJrHovSDQLV8Nk5pvcAivN6ncHnZGxbytoAwtgSvXLdxNvj8sfn7xSSnkqhQCLbmY",
  "key30": "3U9jwzhdVsFXXZKvYtfN3EVoh1FmPKoksA4dcxet4xMyDyVKzBvFwzS91W6UaR117ioAA5FgMyK5b1Y9RpemqgYd"
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
