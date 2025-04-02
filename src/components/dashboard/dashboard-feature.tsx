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
    "3d2HFTdKgZAVeFPvef98N3RduudVesteXdnzebs7DVxBZmGC4tfcvjfgdoxxc7ADtVMQh6v6ywFdusSWpeYf7Qyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "437UQ8kYV3TJKkLRvACfnSEvt512ghJAHHuaiNNntZ4miT4YYJtQb21BXt4RjZWXx3eAbctEhFqUwG7SPdNiHfz1",
  "key1": "5XjHn5GWYZgL868iAZk9ZcEHifR3vwLEcHMH1N13tDhZpesV2NpWY5UBLiqJq5b2t3Vg2tvgYtfYK1ojnNwg1N2i",
  "key2": "3rbndxNZgmrQ4GpTk8WivdpSEJG5PrVukMEkV7qckGzunGod4ygZhjq7ZJDmzkjYoTPWsJK2g3VNxSEm9EbJnerE",
  "key3": "3guEUKtBHhYZAheSS3iUkvMhmvvBq1TR9FxkadgjdqdSbN44C8FcWWq1XrSbzLzTq1UpzA22bDCF7nu6taGVAJSi",
  "key4": "4PZQBDgteLewdMuE54vvH9BmTbk9meP4gbKCwmu85pGtNHZejQ1tSX4zzkUquFNZqkKnxhpwzafUJfrLGpoULh1H",
  "key5": "3QB85s8QbVdcu5FMV34Vta2WHQdMddJ8hkKSyxoA5q9m8gePJXxS47hfEPKC3QztduzU4zU8H7ahvysr7gKhTraG",
  "key6": "ABdSaWphSE16tvRwAoZCDD5xUBa7Pn4ZLXCFdNFAFZDbggNoJHN1HJjFq5sqnykH4JnhAZzNJ73eGWuRdusSzLS",
  "key7": "4z9xPK57Znxe8EzeAFqQhSiXS2iv8BxY6qaYYsaU5xujTGf2NASLfuv3sg5ceCkcrx72n2K1FSeJP2MpKeBVJdmF",
  "key8": "5RJmaUySTn38Qv6qSC2sub97PVi4Yszvr3TdwqT8gVx8CoaXhUFkzVsgG7t3Q3skmQ9wknbU97cdxw4VX8UcVGpM",
  "key9": "59Ln5uV9BBUifWwwr38rym76DXCMtFNfLkHeKn68o1kGJHK1tzcKRY1rapm1MAhqELejyHXWTVeMg4rpzXDzd4v2",
  "key10": "23yXca9gr72QzTykeet8apgpkEL2gAfzvTyxbgfQxRU7c4uNN7xHGrwtW94XyUh14vBu1XFpgTeoS1ufRR5jnYw1",
  "key11": "3jNY2Uq4mWXDJTNNBZ4zeH1mUpXgQdao8jo3Xs5pFRXMk1QAHq81RRYrv13RCvZXRjLUb2nMEeKo3epDYFcPB9LZ",
  "key12": "3gcX5paAhHRsKqvUmSRQbpLGtVkDp6QyCm8wyNyhTDuAhMCPJQUu4Ra62amvsmWiWvorHBZFV9ZtpXwButekh2y4",
  "key13": "3K3Nna2d4mPWGTBNc9cp3iWF9Cs9x3aFAm13ryKAwtt2BoakH7Nb8PeVYjdz6ygA3P8XfcNf34j7zck3fFBFous6",
  "key14": "RJ55HT69kiEPTCa3yMQVdv7hh9bje8GXfZyoQdDYhXyG2FyQ5aBBzEYAtZGjeNi8JY1H859gv6S6KPbAf2NDaS1",
  "key15": "4b7eyNJPqNGWhw8TfHqooX7jy7o8omrsaieBAPmo1GhK2H98xRxizkdtTZ9WYtjF3VqS669y3GJVUSfLNEmA2u4n",
  "key16": "3yygtCpURFCp8enaDi6MuGiDaMzGEExKQd5KuRjaXZzkWyhF97u4dP4RkZEWrq6aGWF2PbSbDzShsu9coMs1bVvJ",
  "key17": "4uSoMEsm5ifXXSuBMdyuEXx82jbVSPRqEM6kzSFyzCwgFsvh1A6YCHnqH3Uzwj2wfSuB5pSqj9H9JCZg7Jfqym62",
  "key18": "3gj1UrnVkFgD1xpkBoK9VMmdAqpNJeeonM5QwemgTKfTMGKomTc6v9d3KCSKem8eH4cgHA23MhWfYgrpXKYmRKxT",
  "key19": "44bESt4G8JpbCgGDFM4ma9B9sbg9ftEY6jEXw8QnhUTz3WMWf5cvy6E4EZFmnx2YQp8DLfRHvUkAUKQQMfMK5fje",
  "key20": "5ogtDwUAJLRJFiBHj6aSBLB12oY9EK5MEuRrpDoJphhej8CiRHvAH8dzzM2naZ5ANpCCxupmvhBrjADqgXVfpCc8",
  "key21": "3kK3amAtXHqxVgoLa6ongNkoZVdNQYCAGC5faTiiUKoRBR3c1zWTCB3rgPcSWTU7nhDNEpiXkckXisWHibbzASvz",
  "key22": "3RCY7G9AwCV4VXMC7RZPh1AyCBuoPcYppKbHJct7iNmtoYoU1wnCKGEaNUJdAvCGNnPKZr51rwHSUhmJPmJAGjYF",
  "key23": "sRdhZBBF1MgBYZ4i4GHWGyd2E4Uv7ZBjZHarrk7VuCLf29GZ2849ipAA6VyqwJKasw14YTsrdstBeiHXvto8jTj",
  "key24": "5vYMNfCkoNieA2E3y7SpdPfHrV92jCgUDwosdQfQmqayZ1MbVpnFoAJfwCd6XtLgDJbzEHe9LcxVpX216vPibD63",
  "key25": "125ggk2kKaKLiqx7oDZig8fcNQeLdrtQTSPfUTL849D1AKRWQEUqQYdCombPZf7AggKFgqYSjEtroZG1iHn7sYJW",
  "key26": "2tj55ydU8bTMHG4JdCXLXveQrUikv6fpiimLcZ82dbQSQyjtiMFWSjpwubCT4Bak4Xzs7zzq11C3pwFTkW5BtqsD",
  "key27": "4QmZ3iLCoqvVHebJoCzVGDwkfAgDDiUnnjtB9Q9qcX6m6nL5RW7RZQFo2paY6X46vb4vQEFHZgUT88Rb1kV9gR9X",
  "key28": "34cRXysh5UKXyzj9xFn9GHjmyRmUdeGdghywtjM22EPd7HBo1uwoD2AawXr9Q8SJr3MtgfKf1xvENmSzEZmf7zE9",
  "key29": "2sKbKna3GGeVhMyRtNrQeWwjyhvtj9jGTUtToybG7cSvxyYU2hqrKmG7Rjv7QpJdkRMcdJzfaPwiVTBs6EYEhQ2L",
  "key30": "5dP82Fx852bXMppWvmVjnakWn1rUd8gbeqxzcNvExSFLGFv7ayS1kErB65VdgmVmXRzAyxzZGxBzsvmp5LKsPo6B",
  "key31": "2u4fN6zRdx2hWgHzZpjH5STsdQJ2ngK6zcSgQT5JT1SFdVyX4fvJrGJDEo1yJK8WifFisa3V2zDg3bDgBiS8TVdR"
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
