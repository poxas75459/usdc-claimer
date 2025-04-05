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
    "3CBtovmZG5vSRvLfhgiXSxo4SiArcsX93ssbhcNCTsn7rG4c58P4TQH4PXCJySv3JaA5U6WbB8cGUMawivQ8Sn86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xv3jcgtmUXDCb8oAEjFsW9TA8pAS8G4b7XuVWPp9gq8BQgNUifrWeHNLxYbJgEJpBr2CJJMKy36iXTgeqf7rfwj",
  "key1": "3PwJc5pJJS3qns4oJ4BEFnwnxX1zWY7FtFBZSjQc44a2KrarD6EgBaiQLi2du74CEJRZL6PUqZXKdXNxnMVKrQJY",
  "key2": "2y8se4LMbDgaK1TTwV7QB3huSwJS4HLSdWh7rGeKT72GD5ULC7C9vPgNHdCYDYAry56wDQoMCAymZQ9HNEA2ftA3",
  "key3": "3EoPcG2wqqucbknRaG7GU1NwvfSZxuf5FwYUEqvk5gxcvv1crkRacVqzUQRV3Vv9oXvw6VV6tr4B39sSUqML7W1F",
  "key4": "3ejDnHh8g7qsrgt7dnKj1dDhrmBhTRwB7cU2mrYzE31nwyE9KwQdqmoQFNVpDTgXgcfEsyafNDnuJCbWYvStwYVW",
  "key5": "53TQVmqE8jb41gFvLzuv5fiSCFBh89hSAuKLdgYA3PCdPLRUWPTMc6BrtEuFFGr2QWF8YeGLdRFyvXhEkAJ5VLSt",
  "key6": "2vnP51gEm2WG4oaodFjX7WtNiKCrf38hm8aGMSU5tK9vosH7QcmofCo9EBGseshAopNyEC5taDr5XdFGoJDtmmwn",
  "key7": "2MfiQAEKo4F7ZbhfjXuHC8jTMt4P3UtCFFw42svXh65Ly64SY4vbfbDfQ9EUkDFouWwg6qA99Vx1PN4piCwTTzgp",
  "key8": "2KPnZMXR41WKhMi5XoATwq5XovgZ9jg749XT31QhbD7GM2oWPnpWz9P3Ch8gWgnwJexRyKKgYmsQy2yRk86NtGVT",
  "key9": "3KPnS2fhwFnTaLhbkgwCqsqebbzhXqC6eyV5dWRTFx4cSgb4S6cJRF94GSU2hGtqvaws5eRsFVR6vK2xw4sRF4Tx",
  "key10": "4n6iyGcJdZVG7jvYkQfmp8gydU9xaXaxt1QhJMHR2tcxFeryKuKZWUQ6tmYv2WniB9fkUxZto4HwG2YZibfpcQ5i",
  "key11": "39QX77UAQoANYmgn91RjX9UTfFMzbp78n8mLP5o2RvZN6GgrANyb5XCAcgNZ5XKJ4xm9tVrGU3r9qpAszNZqTeuf",
  "key12": "43RvjtiTS8BHCPaMY3k2g8YGHFVXgWyULco1cYzGgv5cPcB5XXoBFxjwKeWxfJZnTMzwPgJyj1mQhshCZ7mXxaqQ",
  "key13": "41gEopJPR7oNDDt3VBdwG1CPnNBfwzsd9WWbEdpYAVdzkVJy5hvXLkZedn4eiB8diZNKxjRJZA516m8LCvEFwV6a",
  "key14": "3Qm29fY5aV22nxTSzVVijsEpamwt66pRmoCiWccAaeYYwQwPC5zWAvrFjAXHNLxeQd7gffUxwTwaqcCNEQY3TCDT",
  "key15": "ZJ5GFkofEwhqcuRwTmcGpVtHrxqb2QULLHk3VGcXV5RrcR7ToXymqnYXZRHEVo7LtiScetGEFfqFQPhjpMSM3hN",
  "key16": "42aepqaerqZ2WGUG8eMEuiLvxMcBaTwqTrD4uCFf9KvphhFx4VEsHVPjcTTQnENySYB9b927H1sE9kFPmrwJknbK",
  "key17": "5bcqJKmMsYpVHMzvJVtbvd5SNmBryqemQfuJPqbWgAADg7W9hAhAN3DpobAgjUYuvERojKTMgXp1h94z3j3kNrp1",
  "key18": "KVNonDfYJmdoGCMJagfLp9Q5GMA3fQFmdScwFLpteZxacpr5zDiD37R2wQKSA3DQpsAfLb6hKKXvcj9DFqkYqSe",
  "key19": "36W1wAEiLnV7yHRsN3skkAYDP3EuJxkEotkoxMH5T24CZTwrVGmLAxXhcpJUCTgko9pYGTDvMp4EUd5GYtUtSL5r",
  "key20": "5YmwVKb2UNAN8nwGSBsAH7R4Eab3PzeRADibro9yALuZB2DyNLasRhdVtBdBXPihYcbgA5zpxtAyvLznXg5ft1aa",
  "key21": "3ro92a8fp523aJfsj76DoHeSaHyTFGrHqyRF5xbVjapyhNBtYyRv7cniZxYuvft5s78DVxvesMecE1zPNCjJuorq",
  "key22": "4ehN5UXiRA9avWY1cXJTcfDtEW3avARe8EyXS24TLCLJtpAUU4tuFmkHVCPL9jRf3NM8WQKRMaQisHPb3YXbYVMh",
  "key23": "5UsskQemLq8G89jstrvDtXZuMbecUV1adCMkFbvJPmtN3QK5aQW45tHjH6szWzQzUtAhhFtGRnY3BiLjqKmrNDDa",
  "key24": "22hxe8R2oR4D2yHSFQjG2uZb4ASDViBL3cByjijsKVtgvLcaywWjFBkoYLREeHfMrJySAnRzYxtMTkWNQXCjf3e5"
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
