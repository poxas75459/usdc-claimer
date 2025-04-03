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
    "3rfNFC6Ub8LDyz3PKiaYxURuLXqRXKckC1fifeT8LijGv3BM7UR9aJPuFjN5wZ9yhHpY1UUaMcC69R4AV4kJtBfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zpMHU4PzYtQpM7kpySWp3VEyqts4SbvbzeCi8nnNtrEGy1oMkTTEocMQwmN8BBiAcyGKk1n7i3wbiFLc2qQtRwQ",
  "key1": "544DMEPoSgAwP9nFZmrk5JXBuzgzPTi1H3Ga31f9ihQYMhKsec8EZduwq38aJjjyrJTFc5wfWFk5nZgvo358K6ZJ",
  "key2": "3GYY5QksszwbrRWYZRBAQshL6TppeoyKsjrBZUv11i3qBfezB47DndSuFxUKF2iQiyV7j2ZPWsEMetrZz2JmiaHn",
  "key3": "3fZTuYCWRr54Dd1McumxsA69Eef9FSocih2f6tPn2ExJyk6Wrgba3ftfoPTvHHRmePaKsmsbrHJhrEFLeAQcf1o1",
  "key4": "DsWZE9tJUoPLzeajiwMUPZ2QXFfnetRpbiCsm72oaHYZRVqP1V9gktKAG2VhEXYDzrZ1M64K9yBBKTHH66aJjoD",
  "key5": "5hRiwqpsKxncckFXWBqGWAvKwAifYBtHNHuxJuALiYjmqhozvxtHWZewCUpLATwnsuTGRPv3CDVtqWYkhz6rDssh",
  "key6": "2rVcehLJ26DFqxsrKSWMLv7KqvhBjMqnf5YkLCKNvRzet5wPwCETHumjsh4Lc9BULPU1zvheMGJYVg1S6kuKUnGs",
  "key7": "5rQ8U7iZMe2Dfs4c8rpvKDd6Bxky4wbfsniFzR9WgepGw4pf1HLYnAdvWe9dp5vVD3p6Gqc3ZDMRHXRwTMe6uD25",
  "key8": "5ngmeKknK3hKQNA9qFkkou9HAQTV14iabEwmSNYJEdzJMCLJR8GaxMd2Kpqw5KQCxLY12yAL144NrkTjL2EWAiSC",
  "key9": "4bF98uUh6nPb8eVUNwxMKnKyDjHwmWo7pFtF4T8qh2Ln9MWC5BW4EFrCZqVTsCAnwDtkV2pHftFgfP88A68V45xv",
  "key10": "4UuNgAq2wshKh5FmxocBCZiEF4qRaiCjF2Vw9bc12yDz9FTsRLSuAMsJaRRPiJd9ixKKzvUtZmVe6vhTtWX9dUf6",
  "key11": "3voJSb4h9eiiqzTGy6KpCmzbrPfxKye5Nwy2tvhxuXCJT4tyXiE1soWhU3RuZoWHkzmbv8LQemEnBhaYnKKSG4jW",
  "key12": "2yi4pKeHiqtsQgogn31PvsmDB38DW84xc9KGTehR5yw7fanwcfy9NAqSENu7uZcvyRKwBtJjdmzuXSEW9bCkzWNP",
  "key13": "3MiRJtHzh9AqFcgsvu1o1aAzZmB5w4q7RB8bEkhZoBEnwBXaC3nmeFNwhKm6jKqcmp9Wr7BFhq98BPciU7N7NH16",
  "key14": "5ibMd2LyJA92pVJypq3CnumHwhxmZ7BurfLJqCttDFvmVGHCUPrUK5EEkxPbHws63XBunPxqyDGnHsGy8UNbQVQF",
  "key15": "2rzJufyRBJJd5t4HofgJqXY2Mp4bXaro9ZBSvt6BYvY1LQMKYumchP6qWFyD9aTitFnK92CT4pusUWFSroLDpPik",
  "key16": "gqZDERgJwgHWTuwGhS6r9SMvwtK99ywCDnjbwBMRK425nUjSSE1bRXsyKCqDrmhdYH4mr9R4BeWcTBXsWnnfWi4",
  "key17": "4Fnhqb8V57pWBuK7Q4JgDQTctfha4SZVFEug1MombEiqHkQBunzQy5JVya3cCakdtiSy6y3ixgTZoK8xoKJdSzXg",
  "key18": "3Ej5jbkB9AXTYqBZoQNVBhKvFEPRX9FtWNG6hdKe1ae1n4gah5czsfDLMVCv23eAQrAtysnBcX3TRfiue3ddtZo3",
  "key19": "5fvd5LuemVqGmTUAoNw36vpa5VkzfN2Vvm3yQCpRnRMwZVYGb8gK8VVu2hC8d811r5ayovaze8Xo7adg5dvPd1k2",
  "key20": "4d2kaitEgzh6BEDd7c8aRSFEtayvCAJMRrrAT1tNbUasFaXsxz9enE1HyMV8wFwkvqcsB19ZGBnMHNCGYCrwq7QW",
  "key21": "4gTQ8LtE9h6fb9LcqhJ23u7AfXkvFiemdGJ1HFVvT6v8Am3CPHpVYs8E5VAf9M8T1uZQkaKZ9DGqLuGzzF3Y7EwH",
  "key22": "3q68Dz3F7MYsRvjkbEKMWYz8xXqn27yEbPjAKH62UfxRBEqdJLxBbym6ntX3qCP4pFfMbza7WrcpSU5NHWgu5tTi",
  "key23": "3w2zxF4GWyy2hzMsLfGiovJiwJFfz2atKACdCFpk7WtiA1P1MSpqAN6TA92ZMyPmai9JAKCVLTRLhTT9fF1q4ppj",
  "key24": "5XtecigdK3jC5kxeyiiXkgK5qqJPu52H8bFHMhWvmByyhXWwh1yuzjAWR8QXQ2oqpjLcAMJt1e2aDazFC5aRANeV",
  "key25": "4fdnzQToXzWtdxc1jek2kMHaChqAJxdxF9ncgVnbE5EktUYLjV2CKT1GVjwRcksTemHvPX79BAi5L21Dxi9cGJ9a",
  "key26": "32X4dnBN9piF1kHB2KcesAYnFjNEZMQ5yFc41BDenRovfMQi5JzcsYJQZciQXYE4t8roxpWumVqSAiCjS35DutTb",
  "key27": "2DuitKaryDdQvuu3EKRAJvnTwJwtc51fjBb9SwQtH2Bh9tLVZXjeqkny3HNn4CqyH9s1LRhgjm4kPV62zm48gLH2",
  "key28": "6GmbG7UiTQXX4h63B2rn3Gff6ZPdT7fmeNXpkjNpUY35iPAckSs6cqtXYW2Eru6S6aMAnAACnFzEub6E5Sy5x91",
  "key29": "AJvigab6tRa3JcF1QPE2xdSQWMgQ7GmRfNCusr7FuqNzmHgiTtsQvMRix3HscY3gB5kQt5btnaxgjgV4bwVxMQ4",
  "key30": "4wjWciQFHJznEuqBkbabPToHKJarEhdTvfTtBmkP25kiRBQuSfKYXftCTbK67nxe7HVLqGQVDYXJv2btHyLGMTKD",
  "key31": "3wHtfGVxoCpFDPNvhx9e7H2fg5P6pCkouDGrYg4VrgihTKx1G4QbriUxbinhztSP1JbtzZ5yhqviNAc4BfLGX5DR",
  "key32": "F75ABGPSRhtEpKdv6fYy87QVoyRCt4DaNPb9BKK3TANUkNNmnKZ6UTvVd692enrodjjokge1Hr3uE8n4N6hStej",
  "key33": "3aeKYh7PnqEfzNCNvUYyndXBzJYPHV67ecc5QzM41Nbk6rnEWiS7h1MuV3Vn4n2oKUu2gw2UhiTEfu4uY4NjbFgf",
  "key34": "3VqHV1RWjTuzq7yX3HcxWFfXV2vngBZmWC96MkvFKdEnprdkWF2HNZDVYcDJ4BsXND1Nfb3XF2bpcMFssZEvP55o",
  "key35": "zixEjjbC3kMdZ6iSf8oxEqu3TMrT2c5gEzrdSnRFShoU5n6LAsx5fLrJx4r58kPVQSQ3GzNNjind7ChqJe7YRDA",
  "key36": "586SLp73LHzwDKgK7t4LqXubnevCDdDS9M479hVLuYF8AVfpmZeJYHQ6fcK9wa39Zc8nPkuREKCWZMAinrQVb3fx",
  "key37": "2sEtqS4TCBUP27mvwxp6wVRPkkH2GHYRYLz6uhBYbuW3ZgFmTGKEQSiiZD1B7YCNuvZY4bah1ER4PF3xafjt27xx",
  "key38": "QqdiRdZHHGPJ1dLbtVJzaKvCxYqkBiWTidwdbYVzY59ov8sFxdU62uBsZo7oU6bjWgPztZLdSzvivuxZ3yDstfA",
  "key39": "5pJeaovQHmA2LukYUNmEpgubUXXPTViB3tENcdw8wPThpZLNb6ZBnDerMFhLFV53eKzCtSRMwPDhedj48ZZaRcdC",
  "key40": "4Tbx3iPXcEJd3iBaKk8jKvLmv5hhXShAHaDVQxWi5faT19Zw6oKtmfUa81nfiW9TgicPmG6pcQabgGqtwejH2aYP",
  "key41": "3brSJ46Cz7F3zAJFUSV26JmQMHUAd3j9WLuF7f9GCMT4iXGHaPZipcW254y6bGet1JsFoQYT4t1m3x99KphhUu2P",
  "key42": "5DxMYewktcYoeDnK1TwGfcRZGjMFQcStyvE1VNh78oufHhc2NcCTDw3HDLaHR7xfd4duFy8weJbPuZuYcFpZuHpU",
  "key43": "3A3WxY2bCPcRnZDrHYCQrwyxKmiLyC7LwsfMmAiNtJvhV4ZUXmsMERBec5NK459NqcUm4menvz2cmAShBom42kSM"
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
