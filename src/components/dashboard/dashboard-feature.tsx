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
    "3MoicF2SQy17mEQmna1jkfC8ZvEYi5WerWQbC7dT5GfqJVLtFuoEqSAuAeMJebQmruo4b3JdPNLzbkjjgzGMc3kV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xdaBW2Xc8ZcKttSLEdo712TynZCbN4XBw12hwpy6USNBs17Fec8GdbvkUe9kgygRB716zDt2Yw9XV7tG25w29Fy",
  "key1": "5akLZBTQ7CAkyo9tfpRNDhSnemowcGia8iASfHfnYLJqxNivFEnPkRYAEP8FALDMESSTyPuF7odfDA8YhDtBE66g",
  "key2": "37XS1CrqNX6rmyH7Nari9T34YDyHE9qHzjGC2oUS7EAxHvAwdsKrycpfZkXfncyWPzzfWuRp4asPZpSie5aLxfV4",
  "key3": "4TpdCZ9guk1oyX6oSRNLV7tT9bvi88o8aYeMgCzgY4iGvobGwBy7Ltz3jEe5uoGz2jWBTcWgJ5T5kzhLMAypqTbe",
  "key4": "e4jgwiPrP2k3eR5Aqsovt1bm6M1e74yy49PLJkMjXnVzuA4VQQK6j96U4dm9STDY22x7vv84ja6QYygGVN1hHC8",
  "key5": "4hkGAD2kKxMcC6bgo8KoGiUAURU9vZsNBePJbW2h8b3KMjkvxRHMjypNR5rDPRF6SnuFJYnGGSS81AEJKzHWbG38",
  "key6": "2TDDQ4bBUju1UmQgyUHUvB7g7pgU4hF6r9Ae8XCuBGeTUZ8MPoMaGvHgDmkDKtv1CgNXZvd2W3fzw4V5wxAjTSEe",
  "key7": "34WwNSL4KTnSFj1fqbJWNs2mcjvopZH1Whtjpzcs4VExU8mzeNC98RE8v3yLdXa41G5YXt4PWX95NPM1DTWfgAZG",
  "key8": "3zttiN7f2SJjmk2y2M1YxP65c9xj2nUgcPSAJSW91dqHE5WT8eDjs8xcgrGs1SdBS18zgkZyGBRMctpeb9Ep5MaF",
  "key9": "5gpxWCWUWrcQmWvXvNKzcfBCBTgkZh9B6nGNEP2mKaF7cDZFct8EuDhe4ZbrSj4VuMk2s3R6S9n6D12DAwYWAwNE",
  "key10": "4ohVUJ52fVjBVP6N2ZvBwfsig26RZZryvJVTdE5L6MgFv4C1krb3nqU8N5PSi5CHPLRrAJEfjibFEHbTuPKUWApC",
  "key11": "5cn64B9i7HYQyX5yCJWkZgbbpea8WUgB3NJU6EBrxygPtq5e4BCskASfB4YHyDJF4sdiupWiwzFkH3RzztS52axN",
  "key12": "4mHPKVhWe3oc9oG8ZinGTEnAi4C155qxK48PofMVcgE8Py82vmBpGhkLAM8ta1EqtXUkfWBoPihyqyqLquKopQsT",
  "key13": "3SQTt3WkcfvNLdjXLKonJN2t3YUSfNKKaRkR8ZbhhfsxwporaTriECX9ftHG1PGbLAYovcuxX1Uf2SJgcSy9vRcq",
  "key14": "61Gz175C7AwmcX5zhS8PGXK1Cjhx5P1cXbKt2XWP3zYFB33MXSz7g263JDrquz1tUaBG4dv1nndznzTxXqGbxNqB",
  "key15": "2whSAdBBkK3Tht8fTZZusjQFEVREaGADT7St6eMLqEpDe2yqnTJD5QGbpdVCk157o1VjwwhoUDvuU25nXewVLVmT",
  "key16": "3TShgujvP1EkJxLvurqCvJntBnTkggbXj4WGpuFSMg9MDGfNMN2dDFr5MtEJSWAWovNRMefaCMpdmHjH94R4jSUT",
  "key17": "24pzJaZiJiX7KmMe1ZkZuRxgkQwHeCVVouJ1vq2UyRN6NctQnQpAjSpGagUa4xxvrng4tBoNkZUA4FYxsTcspDDW",
  "key18": "4h4WNDKvncxSdMYYLDt69SMvBdN9wWtnZLR2MbSbPQhxFEoMAc9nZniXRncSdxMBn99eveFKkirNLfBzPqYfB6j7",
  "key19": "Pnsffw3XTMLBoRqGLVL74RtPGikB8uLEefNmWpYSopeER8SsBmVpiEPoY2GoBuLKAz6Ch9cnt85zWGEoiUGV7mw",
  "key20": "2PGMUjf6hXXwwBzRHP5StoEr1zSuP33Kkcit3Jo5oZVCnvp8Z2G6uJsj3bhgNrRrq7XcyM2DjkCqqmbdrqxX4gVa",
  "key21": "xv55ynna9isY1MWrEryFdiZrWkBsrPkACPH2FYmW2jBY8Px8pRSMGnh65LvPqWXheBzkNUGAmm2csieyA2D3BbV",
  "key22": "DKNZf3Pq9yS458VBT4zSZdQNfizkFiPPn97P6RWR3qif4H3LZUa6juxfu9sQFztMxtGfQfjtKbDwfrsuBa4on49",
  "key23": "67dxhGZDTRG8YZbUgcjHZZNSTxoH8iMc3xFzWUDhSFfrNt71CVqrWx5VR79Xmfh1wH86dmWKjxFQHoN1AeBYpbEm",
  "key24": "5PqFUbW8fKq9zdk6PnwVxccuazveNqWBRDsPxYS8zPx2iy3K9eZHhGWpQeCnsf9xdkoUUyButLtGWb8QVCBaixBp",
  "key25": "46heaMKzkBDNzLFEjhCAy9GyV1ciaqUi2eF4uUuGXm3BY8pgwmcTCAuSCvp7Pr3Y125HD3PkDysCTwfGpf42bWPW",
  "key26": "4DTsrQBJQUpaKkD7XRWnMBaZ9yMYQfH51zvW8n9vQXg8f6TPTXtz6c1nkbQ7jocWmWSVSbPyoVXHV872p1r8xDxN",
  "key27": "65MYZyq1yRxkRFNp5oBDv3ijyMiuMPysdbSuewMkrspBj3KzTv1n2SR92Xy6cAmDGcbuLUUG7xLfxVTBPyovqVtF",
  "key28": "4ao3TLzTv3MxsvEGreeVh9u9ftiYDiqETt8XUCkDrZwTNXtGmk6hqaZcyJ2JccV2e2eg4AmnVhhASBbG3wqLfoFG",
  "key29": "3Zd7MS46YYyLydyAKB1v8LQY7PgU8z2HB34XQVwjAdJVskAofgWU38ndXeV7E8b9wQaHd9L1j2579qSrtFjjjygu",
  "key30": "5ZEJxS1HK5TqbSk9ZaCjg1sXE5cMbAmjPVoRnsVfNfZvmBK2fLuYN22rBFTG6appgUF921ntvtDjqDo8ryYCC1x",
  "key31": "5516NHUibbwwRbhTtgGX5cPBEdRAboFEXyyuHkJatGU3ioDZUvMdctvTyV5CQpdb7qxMYTJXaYb2mK8vSA8kRurk",
  "key32": "4QAGKjivdR7P9AM1RHhCYazhZAarQzMXTPGyWyFN9GvgiqPRny7TPRPuufwe94U8MrxQDgRsL8ZUTkwpdFEhMnGS",
  "key33": "2wY6CcuXUfYZuzxVfxXE8ER9wmw96SNqua5kr7iRatxp7gYX5CrUAa4tsNongdcbg867zsaxk7mjXkuQtX9GPtno",
  "key34": "3fpTr5xWkLPUPZjX6CGtEnfWTLLCd1KYbmVpisZqzMRaPvZs6HtbQe1jiezxX45ciBt2Hkhqn3zU1woW7ay3eRxt",
  "key35": "2qugCQ2ekLFBqzMQrcsrPnhqPbBM19w3yNk8ekbyuAqJwocddpDiRwHh14nqkg1yspCYZEzmj5ywaoi9UiAfwkZn"
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
