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
    "4uKsvp6FiQFmxmrBw9iSxmq2CS1xhb3AmMakinv6yEA1H4yZZL57nm947RPq52rcG27HsJNVmYK6HxmhzoQSc7kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Df5LwpNV2DX7rRHhY7TNw6ULYUu8J34CDjToDjokVvYFny4z6chic3TNvo3wrQrYH1tAzAZz6An9zzNTnaioWxB",
  "key1": "4F7GQqHPoecvgBp2BzjAKPa4tiS6HEV9j3r5NW6hqFHCAyMVjuA3fmAZvUrX7g8uC8Lt2wY6DJopiai95RGiazKh",
  "key2": "5DqeMsjaB1uKqPBfd6w9tpX8Ho58gno4K8eSyri4iGUWg6Kk7Ahe37tw2dvwxPWGy8V5Nr12bEwAp4oTEx4awPAX",
  "key3": "PxJL788MMTz6CrWsjkvMQgneNgYjFTfRA1my5kwKHEwPWyUhFgz73LqXfURATEMLxK8okbbK8W9AZdLW6JF1Qcj",
  "key4": "MLM3CmkRUVnYTXQnC4qdxWih8HSUWbcxEB87yCZoSufBq3ZNGY2611K6ATcmWAVzHLFXQVmgrhgCFnfD2pMgmqt",
  "key5": "xrtxVcmX7HgcJvBLumLUwbnDbRGUmQKsVWFksRLXVVNFxJbjSa3j8GQ1PT3gskCpSTnuD9wnPgNm9LLVvLLrcWr",
  "key6": "4Fh7AN3nDd6ABSMenqEDNS7uTPRwmScq9RLqYdJBUYabYVmtxj1imJT1veLESYRjJJ1t1TUnnSFmbv22Bp3NppkJ",
  "key7": "4DiukLFHS4UJ9H9Jm64k4bL7gW1foVhvS9GVbkyk5yWXajGs8QkS12qUGU1TmtSAN9DeAchxR3KMiaPQ16Ucqrmn",
  "key8": "5g1NBPDcARyiFyCsZ9L9c31V7uWtR9WjZuZNroBhk41W4SaX76y9B1FRfaFoEYVHfQqRkjRJTacsaxH2Er2GyD9p",
  "key9": "2dmt3ZXcFhCyCyyc9skj6ZhXd4YT7McnWSvThnEuipR2SPc9cPWs2CpiR3eerNZ5bZmVjPUjoovYKgRW7GNgAp7R",
  "key10": "65Cp24JqMUi4pYTYrZ7pFwuuYR7mZEw9YaEh775oiZuNn5Dj5zBJtdvLymn1QqkNQSstr9j1daB3ZoEaCeoUnqb5",
  "key11": "5vMjqHoRAPcUYKtJJ9pL6e5HgPM6CxZZn3AeyDhLidFNKUgE3Sg7JTov9vgGo1NKFp8h4pG6qxCuT9Wtyf7z2cNV",
  "key12": "2ziEbXoBCKEqu3vLaaH6PnV1B1C1i1qQEegk5LMgTZU8tMt2BCVXF2t7CBZzJ9xdeFFC21YF4g62kkaQYdyWkjsZ",
  "key13": "5KQwHa17b5aP2AN4D6Cucy4s5rzoArz5UmUdEGdVnJVBtmHiZ4ZUDwvngLzGBmY8hvNM9GCpqPydCPsziPkhpCNz",
  "key14": "un8vaJHmnJ4tpsYyj4KP5g4QYtQtj9zQeu66p773mCp46Hdbho1EygTookrKd5cSro7hCFRVR6V77FpK8tTqPsv",
  "key15": "5KXZh1ooYcQBP8K5dSiJ6fPbuTz6erHVVAJHtK4YjmD7wB3fphBevMgK8mgcG6xFWBbuTesMDfyc3FUq6qRjcWCV",
  "key16": "3MB6SPTRffEmMGg3bU6GppjbNGjNkAF5kfYGVcSLTf5JWBcGjEaNhPtX51Y7SpdvDWiBn9LkP9haRHtKmJsZS6RU",
  "key17": "4oEk2HXE2RNLeLPgPg7bp4qveGLyWK1tQA2hw3DsfgvQeAysbqykFcvags51biAAV3GF7tnKHLkLLEcdB5CiwwDf",
  "key18": "WTn91gcFvka8QE6mFAoQdELFsKXJQxXZ6hSGceddiZ4mvEPTvkL91PqG7H35k1XxVuTWd5XmK8o3U3X19MJFmgn",
  "key19": "2irqsrXbdL6a7aqEgmAm2murKuwC5LEi3x8G5N24NiRA5q976vQqiE4UjcKWzEEiuHfbQu8PdPR9of9bKhFhAX8G",
  "key20": "4Y842ELdP52DygzvzdyBNNHS8paZraf99USLj9mmCybs2zJuz1SYyYeaLUigAjxRScsnejRPoenXagvhdHouPcSK",
  "key21": "xRNSATuzRqNYoi5fQg4eLUewaQogu4BwobCHAE9Jr3vKXxM3c98hmzVRnsnzninUy8KLsr7QZU8Ryx5GyBasrW8",
  "key22": "5SkDoYy2F3LVWTdiNTcvc6TcA5EFAhWUVXYvGgeiHvrwAM7BxWgEsxJLsULzzgcqREGdgrDKnHNVDxi1ddZXJBEV",
  "key23": "4e9dWkVpcQF4vJfvViUYPaxX2gF95xUxbXNKHn42yqyTMCZeTDSeUAhHmtH9ACZqYHEj2MsxAS5QR8JWEXpJpE8V",
  "key24": "5smqNKb1jbTLA8aGv5FeyrcYmjaiDKjoCSfNqSS8c3vwd2Q4csSWY4qkcvE9PDTVj8HkT6UWzQyv9CWixkGPoTKb",
  "key25": "5pZVmhnYCpt97NozZQLz2Z1synVXsEsfkhkQvbbyrNfcYZNuJeBAD14BHx1EfXbSedSTdZFBoa9BKewWC5StkajT",
  "key26": "4qUQMBvqCmy6wkHx4UkJ3ddNZYiUY6tmKnJx5smyT9cPsVmg7DB44RTU1Y69CTmQFVrFhnYrNjx5WmCJHyraaGwT",
  "key27": "4bEauZsRXcfTLJZEqWx2vke8fkNo2gNf3VeiWMSAp7Cqe2U8WdAULJgVjoDUrUsCAWAx2pMB7N3wQaGoyNhXRdCS",
  "key28": "3WYbxJDNp3cX7wHcbYKLtHeRowRsqhSgfMLuUvnbTuJZ4xaSaGzhrQs9jyK6MHAGz7VUNK9s9cx4E9PHYM4LPqrF",
  "key29": "yXBQ6Fw2c9RFzDCyATfxQTnhLBoofkJBV4MRW7QR2yXEeMj8eVnarXXo5dBcCJWT7ocwanud9afvPtkQar6ahy8",
  "key30": "2qSxzH6UcjSFR8GUMw6qJM5WPTNYSKyekKHX9Ps6P5ECpye1nQztQwd414MCwtyR6D9dDKyyKRJEXH1XdydZvo5p",
  "key31": "4gYnvqPeFUcepLu3n1KmetK7scR7HkSh7RBtnS7N3hSRdZc1wmKQdrKBtQxjhmHYqAw1hA1riQGofPtXruh73pph",
  "key32": "26F9tSPwEtbqDqnYeDEN6fWefZYN7uh5zGPczD9mHjSRSLBUP7gxDbBUZZBDZg7P1brCp7Dqow1LgbsXBBVTtKJB",
  "key33": "5FCSZ4q9NXSpX6p4rcdiLNKcsd4XQyR5dAbotrj57nhbZzX5TzxdmrgL6oDcG52hP86Hyttg1wYYKNn7oPxGhsVZ",
  "key34": "HeXuFMB1VonRUStUAJuVLzwBZC3bLanwVVF4S3AK8j37JifsGwrpYPav8sULrvmXvAncvHjMB7LyS78UyKa6rSF",
  "key35": "5jNdmdWQqR7udoDsAPVn6KXLNQ2ZVg6v4b7jtWPt9HG9K97MhTTjRPgMzeHSctfKxtMHKnXt7tyadKmAUQ3AGsaj",
  "key36": "3cbXJqtk5yJ5ZpSv9EKPEXBKE462JqTPu1W3iN8rV1EgFPzeTNtTWhJSHEdKJ6hBWRaTmiVJR2DfLwVrZHoxkqAk",
  "key37": "63FkmPGBQvTq8BYx8AWQacN3yLzvKzNnCLLZHBPBUzaEEiM96qudRmieqafCrJy2uFfhnNM8RuXerWz2tNckSRY1",
  "key38": "2QeTvqCQDAHpsjQUqGiBmod6fmSsDr9Tqb6PLgTQsU7uYkssYFpJigSn8u1Gwwk9gLJtZQEBPkbZkfKpLTYeBR4C",
  "key39": "5QEus3TdTA6g7cbhhsQcrT3q9S1dcfDSEfwG1YXaNeV1Cy7Asu5bztdu4yhy2EneGFvVu5M7wMrEw9mo4zCQnbvV"
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
