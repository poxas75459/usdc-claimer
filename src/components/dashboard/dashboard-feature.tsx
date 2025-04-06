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
    "2XmQ9enKxeJmjhrjexxWLBuRJQNz4jYNxm7mjgCfR52yvR5trMDtBLAj5P8HgHp7RTG1Hq67s45Fh85f88pLJDVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hpkgguBLGaQtWCxNsdRoVXWxh1hjQxiAM2EoBiV8PRZK5MQXCbRNsDQDeqLtE42mudKX1Rc1ehgE5sQw34LmLrV",
  "key1": "2cGiw92YBJbNxnAp9mzoyFjqqDKDSZ9PkHqLZqv2k8r1yL8o6Lhir5ohefZjdzAENTjmztFimtLJcTJCrfXjV9hy",
  "key2": "aWsoPqK4HGrTB9iJCkwRBrJ3kxe36VQKUubAMrCkUQ8eyXWfwjqUYYiYJJmdmqiVBC5Mrx8aXxFMvxouqnpjXJ1",
  "key3": "5HzWZBoWc1Y2a97hquYoPDVtp3uKj39C1HvV7QHMSpPHSAciRAQJKxS6RWbtwgCDwTXsp4vbvJsiDuf4WL1utNcj",
  "key4": "5JWWXoPSijWPCy6FZCTJHeTejyDMJS9VaWwevcraCv6TzLNRwtdUidvKA1qxgr4ULLZpZax68Umttxk1GjkHZZHa",
  "key5": "iVMVexYipf3K3U9NqUgzhvAJUWF7ZQvxkSZT8Aj2awCyLZphkuLkz8kQNBDxsddR3cEH9KFTiwkaDCnh94tS8G1",
  "key6": "3pcSrsongEqukQYkhdNmoSVvSbKSZByUVtqU5rkrJCUpjB6Y94k9FjeLaYYkitix4CcEbu39xMGep69tTRpx48og",
  "key7": "5sgyvsLgn5AD7bnD5AKgEcGEnTUbFkBJjUREPyCBQ9z2GB1Nmvey1Q26c5YE9XmKCGmYXcZPGuLnnPCwsyTY4XKo",
  "key8": "5T8X7WeCokd8AGoNPujDoh1xXjgtPqQQRPKWGY6gPAkUzpdndKyWbJyWosbKXhuUcmazKyWvQX8wSnZGYx4gtY5b",
  "key9": "5Vxbb3YnPA1xSbvsj51BD8pjWqAibLC6JTMNahQow33fv1Qy1r2W3rKBwNR8aGz7LncfXeymkN4tYDEkREVjjFSK",
  "key10": "3XfBuuxR7wLYSFkHLnUWPe935VmDHwkktoQuhB7w69nuPR2DJDfddvdnMehkaBtAq2uGexP5NgpwgxpiQVmwh6T2",
  "key11": "2ACfD1Mzu3TceCUSRGVK23AGVEtx3EhSEwbBnvigzVRUeY5jTYpUxtPdHJ6kTYkweqVC3XHCAD6jUv4YwGJTX9HV",
  "key12": "5GVLz2LQHFiwq7w2nd33pHD7eQM12tgq91qkHMcFih2RMDMPYjk3pnqJC4TjLMbfmoAjhB5j8YQBg889BYvuoq9Y",
  "key13": "4oMUQARzL94jWGTjCQRctjEWyYMjBfWg6Xy9PAdottnWVtFL2RfYssyzSi6zXN3jznv29DbWzHkYx8ze1CVeCb63",
  "key14": "b2kcE1iURGVdmE7hk3pdqHWwW6cToyxuu3wYoMfWqLzFXxNJC5sdA8cfiQc7zeV49LZEt2H1ir96QjtGnQNbZAz",
  "key15": "4Jbq9U2x9EtwJcTCzrKiHtbNQQYhwomQRH88sFCp4ToozeoUCTbHSgPrehSV1tvGBfevLP8i93hfK41HPaovQ8LV",
  "key16": "NL9r35QDDCU2E6ffJzdUBtdZgwAP5Zinp9FQ2wAUJ14rJhTGcuYD7Moeq7aAz7AabPEade2RZngjxyyxxLKJzq8",
  "key17": "2dk7ps7ibsZhm8Egz7sTe7FLw4rU6ZUTRYqFTf9ctZDD41AU1oTQYK9MJKcMHyQT9aRwqjyWqfuQPeSszenwpGXp",
  "key18": "rauUjgy9m4LGzEx9trZBbb1nzUKrDRLfhEPYV1maaUf13md4E75k2s958o2wWCYcc6HDExyopBeKWHx72k3LWVp",
  "key19": "34iDtr1FPkAF3hgLWRWnsjvp5vMTCmMregaXug8Q6HSNUHjL1xGxaTLMSUew7HDxfVudeJrXNGkjzAsT6q12LCZb",
  "key20": "4YeV76aLDc77SsiRbr2bKZkMq7vsozivV56uWwJK75ds3whvKUYjZDPUfwzAToMPXMdg4xwCYeC9Fr6Qav5Fed8C",
  "key21": "3gaJCaJ1h2g2TBPa8YC83Yp5sPECoSCTbZFCLAGGA2kKMazVGsUd7ApiHHSBwWGGBw5jiSfmhTAxtyZ9ArFKzqhP",
  "key22": "TPPGwr5dw4G7wGnzrk6HHqfHmWqcrM8J91Y6y4r3okohN6s2vwjXVEEx8Z4RBz4Cb1XRZUrJ2GkNnTKGFQQDqVt",
  "key23": "LVNH2E64yr7zHdna6FrHhq8z883wiPk5bd7csTmyLSiv54nhg1qus6WanJMFiK3xZE5TMLUYscMPmmLuDovkPhJ",
  "key24": "2zmTyTqxfY4vpTSAX9aFbiu93oTc3yAYJpLvWqdG7dfkAvvAXgAFR2autWCCrrCqEyHTUP4yx1UsBvaqt6ArgENP",
  "key25": "5UsCVhyG4EtYbD1espktm8DQCN1uCkhKRq7CjNYhffkV8Qapzzmd14uo8wsw9sybp5cSVrUkqwWXKibY8aNPTg8M",
  "key26": "3mrbbqDCVvYSkLVRB4HcDokSXXKRRV7fEiWhoH2LvziB5K3bMi4MES3wbZQZoXC1y7cutSNWau6zdEXWV5FTkE3T",
  "key27": "5p8yuFrw6XGmhJgfwBB9uCAqfBqaRdSRWnfw7b6DsP9XpESreRGMwmhSWS8SvKvVZERqMUCqMMRSQJQPJcyRk5da",
  "key28": "5Zw7EkchsnWEuAY2gKCjxryvv6HrktsqUhrwdg4uPEWZUXREKrdVas5vEUMvwWRUgntwY44jvpQBd6Mi9998jD1f",
  "key29": "3Ti1cLLjp3rPwhCSeWhD5dRdH57CUT6EjC2rpnj7JnnkgBfRUvo9PgQAHruC59Hz9tAdUeM5Auw5Qs9pYaCfVPA7",
  "key30": "FdnzANeJqWUQGLRJWZRCU17RuiPQdjML8QkBQwPQz2oXuEFhRENdUPK4ygjPX5AThN7Ug3U3oGhqasAiiRxaNB2",
  "key31": "3JMmjdbNhfFKPYDc18NY9dQFSxuf2y2dKoDVNXJWtseNAFrCjn6wrcehFV8vviZyPVQRvo3t9K7ViKdQSr839yVR",
  "key32": "3E4zVQsDURZ3SCeep3DH5Nw46jQ8zfUsSsUhuBne4eKYVBt7anogTDQf5StoEp8u62jZQjdqEJRdaH7Jn6cCHYHM",
  "key33": "5DdN3dEr4YeeWjCcH7uEitjsX3WCVTYHQC7EdwnoCeckbM4Zksc7GPDipBmhS3yv2c6bysHKTEvZfuXqaiyWhvaJ",
  "key34": "3NFgeGWmSMBVY27Lk3FY9zpHp6kthT4mVx8fdVPFCEPibPiZHgv3F4zE324RfQVCfnw3RkBCcBhrHjYGQQnTHWX2",
  "key35": "3GnVhApGtYU5xp2f7FjqktNst8f7obakot17QGSko3JL2mYRwfpVEv3sVgAViZmDs65SzRewW9RZ8Q4dJEy7EqHR",
  "key36": "QDvXxaawBpu57o2shfu9ipmaZgdGWXWbS2FUncf89UfTiWrr3A3TyF2K6v1zK1SgAusq5HiwkXF7mfDEXyb6KTW"
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
