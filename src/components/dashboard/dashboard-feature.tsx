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
    "3ocWVLdCLw6S9CcpVbSJVaUyrK1E6jiFzHGRo71ddwzLBnkAUcAK8SqXdx5vzoMY1EamuFtfL9deJQzH4pmyV6Kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YCFpKvy8sP7iPPRnLz5VNfZKp4QunZqqx7qCC4YMXeu6yBgBeJLabbcGGna67hJwrVip3MdpSDPyf3s3xkByuS6",
  "key1": "2EPym1eVsmF8Fnzd8geNZ35iZreAh4ATir1aE8mSYKUdubKdQgaCmCLYg1sZDTwnfvgUUX4zqzYHeQ856itw5RgW",
  "key2": "5pGk475rHcQgMRwMwntcjsEeba2VvyHofc2ELaeBe3FVCFyB6JuDNoKoPcum5LecM2oDeUEjpZHN5kz68ow4CPDX",
  "key3": "4K7D6x86rahXsRZKWLdmQ7qLzCUi1F6evrMi44TorgjJQDFphbE6wZRZ1c7PSDmtsZpVuU3U7VfJCDaD6qWstVn",
  "key4": "2bvXwFJBHsLUMbaUaLhvBwkn9UtrLw9Tx5aJDjPSNYWX6BQWSsuNHoi47rdnJj4DQHqfvZbmFXQ7L1PUcdKBQF2b",
  "key5": "64jQbGGQX2Qw975kwnW3J9jdDRTcayt2shgjkXZkRd8VQG1FZH6piYPJRqnUm4q7oL6gzT3sFsZLxVDqDK6axpkU",
  "key6": "3mCEkjLRgdKJH3PsNSZTQy8kzyeNiW9tKMorgBLyA9y1Aw5ttbpMwdGx55TJYqf6MA6EtvKsm5gMdxPqjbmtp5R2",
  "key7": "JfpdWyY6BS8mmQcmYDBVMQF7KKRaeBoPu3wSNRsBnrtn78WTdZmzjw2qZMzvxR3mfpL9Vo1sEEGWNh5tgp4rmmn",
  "key8": "d7vWQL9RXxG6uvtWnyTocieh1uHzhbCHLwvnV8RUPHMBoyTemT4Q4MiXiwSM1pvx4N7Pczh5QfwSRv77Gm2WGYH",
  "key9": "AvLGm7w1huUJviS2NKcMFFy5GLsidaX4Nx7W85pkLdUeWCDeWD11CT7UCg9GqGhZcoMoFAkHdHSFgH6yACeimdS",
  "key10": "4JXU1SGD8LL3yJ8BqY9MGX2nyjzTgZuJaDxhGN8gErzJvYxGHrHtzHPYXQJWgfJ3SZj3cwKx6tPTArcDi7AnPiE9",
  "key11": "2Lh6N5cqknEJFGWNnPK1ByLm8nZAfe63oU6fGBd86pdfn5H6sEmJcuXZ7BZaKWMC6FhPEi8VAMDEcPMBt3yKh2dw",
  "key12": "45FFKkJmxEyGGP4B9kXBT5CnsBAgcy7K8PM7RxjvnUWSWkr8UiPFPvnosyeijCbsGoTd2jVoMPjSa4a6Z9gR36GM",
  "key13": "3fkDGB7y595FokoYRhqZW1Ab6vy8LDNyM8Q7Q3jc5t2L7xQzwfW5xtcRSmrK5ypGjfE3APhfSQMLSewuBDX8tMVY",
  "key14": "52KJ9VkTiqcHodjrsd8EK92DwdhbnTmDLV11US772D5Gu3uNQVXyDHxW9XXat1RjgiJgR7bQ7n6x3z7PNVjvfqeW",
  "key15": "3Ze6R4c2FhdmFnN1sGw2Wg4Jo4frCuw17RtdUnLN1HGBPrPtbHUwVp4GdoLnNvqkZPHe7PHY32vSDQdyB5Ybtm2q",
  "key16": "5zbErxaZUt8hHyvqxqVqx5JCdAnCHysmoS4FHtLa9iFGH8EBUqGSdsKkNQiJpFjXBJMWANkLDtu7F7DAGU1xxMpY",
  "key17": "xSLMZZVupsNRKyf5cdbzX2L1xxkAgyA9yWFVYP9aiDNmzSPGDcKXFJZxo6t2zQFRRFWsC7yLXCGzvBeZNxnGkiY",
  "key18": "XP9QYhWfXaccxwn5S2LfQbMeRxr37ewBzyoa7XJKUrK4v9u4prnf7QFqLKU664mVndeh754wqXQ62RtBag4yF1c",
  "key19": "5Yg9uPCqSUi6aBtwnjPpQA3ouibHSrgkdn8MpZnWnuKHmBMb2GZCWjk3ttsfjWFYEcexHhGmCUuCq9ZX4mG2Nv3o",
  "key20": "23vJeys9y6JogXPtaRkbeRAbitYa5kUi7zis9iJFkVgZLH9YNDEb7y2BR5LeKRGrGdqEtqjug5dTvpQgSXXDWG9y",
  "key21": "SYA9vgyGSk56fTf9mYnzeZ9qTJ75JpoSx4cFBWEVi8uVDKxFFYETgXMNbgbxoEYckRM5Du3e9fwGw9LwVT8Qew6",
  "key22": "2ato5dTvWZ4UpmT1r9VTgrmrEcbcGce7rJQ91kDSx5GdcRT9h9D3AvsRcPGevaJjeM2Ptn31eW8jAXnh6tTt27d4",
  "key23": "ak45uYcX6j8T5iERxcwopv4KaKZvaLawcm9VEmR1z6Thr4ie65pfFPfMaU8jVmLS9w3kwyM2PLzkfN28csQA2Gv",
  "key24": "2cbV3YjUQXiqzPb9ncBBSFwQVAsNK6zCSgBzrsYuVbmX7o49gXoUkkpY9MTnH4kNXX5msMHgy6ebcLUx6WwtYYr6"
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
