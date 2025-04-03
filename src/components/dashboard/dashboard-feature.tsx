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
    "43y3VjLroQY9MWKwQZMzznHyfxE8gaVGdoqexJgx14V9HMW1Tvz89TsduJXPDjL9TKdyHB7Chd2cUAJdvMX7w9TJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TABqkFEj7btxRdmAoJcpoqvKvCadqSKs6cFgZWorqAZ4C9a8AMbwaZEC6ux4LeMuTYFNsB4WaxFtirPrTt1yHRy",
  "key1": "W7fixkDMoSxHDthzwKHSgh6gjAHLCCPDUczmt52Mp7sGkgcdr3Dkx8n9CA8GFSr8Vgsw2cBSR7hNyQk4duNxS4w",
  "key2": "qK1sY99yby7ZmE8KjnTbQum8BUbAbUP7GumPqYpW9y58Mm32Cv27fV59XaQxJw3Y6Fc8FZLhc79BFSpcDCKUhca",
  "key3": "2SpKM1W72vu7gFV8oDA8APcdrBu9Gu7zJpCuB4ip4uy76KWFd1JYAZiU7a5MwA3QCBRcKP7M7rgNioPnDrPR7vDF",
  "key4": "3sbueqDFGH8ogyjiHZbvPLmFmEYUWruYvZhSreiZe9Sz1JmQEC9WEihYEKhoomzDvRM4YCpU5srGv5VciEgC9jNv",
  "key5": "21GX6migyFvFDppqdyXA1cNSZNepgKSsPAv4caewiEJ4TTi76QuLMSZDcqoiMK4hV2F4kb3YuGorho4SedAdjQMf",
  "key6": "3fCf3SnwythKDPC5itETQGPcPAotKSAgizvy8DLL6MGQJBgCPY76gChjkfUyEVMDP5dACdtkvemNbRqXmgk91G99",
  "key7": "2UedYMT5aWF71w2Twp6QgrVJDkB87mCUxWWVxNd38SYxAdU9jXWMt77jUbaKTM6XMB47VMeFgLYdr5qNbMxr3Gz2",
  "key8": "4z2ik2qLRySPUaYK7MgdyyntzcnadaAVRkWLz9apQJcs8RsWBFjJWApLBNYEwUhvYsk29WnL4oEiX9HkQixbJ9Pg",
  "key9": "5zRnfJWW8TEjoYQkCuHS4ZmnuFTkJjyQi7rtUjgx9Bj66CRrFZUJ4DxS64z4giTBtdVjQNu3w9YPZE4o6hZ57BoV",
  "key10": "ScEjT1HxhkZ1JwSLhoL6eueXvGe5EnCQ62gaPo4nsX6zjoSASVfMXscW2ydgj34T3yVPoVLangw2ES76pYKnF81",
  "key11": "4LzoCaq5a4ThCU55eNX78mQXfMBN91jDLkYSuYEqSaqNWKHvC5ZV8VUxGeFP3opF8VSysXDNrGFr5YrU6y7BuVoy",
  "key12": "3ednC2iWGTPEHVmxKRQTnuRwYC3ziuvqbQQiMKSgDD8d8qy67AoBo8Ktc2WzCqiCZyiDoEVK27rR48bV2ntABfPa",
  "key13": "3fJNSU4zaEf6sQohAwJr3uBjHdyKnuoy21KXQFTuRfmHQprKQRNbDzMBQRhCunVCXAHhK9svXHpLAzb3YDkXBYMB",
  "key14": "3wT1ivWyp84smFH9ATpzjJu9YEPPwdfJrcfYCSvoemjSmo7aawsBWaPbuHgx4gKLVADS6fJ6nwVhRzQpkUSQouWm",
  "key15": "562zJ7iFbbFTeMvc8fiwVatVHKuEnV38cQUcjDu5KqZuEWAMDX6HNBnhweDD2Fm1cGmofgqXsq23L3dPiB3jjSvR",
  "key16": "242cQB9dcijExfLkiQKcXKjeNYvq6BMSUZQEu4uJ2HbE4roJgR8dhEHgj31D9cJd1cVhCFsnDdQzMPU6o2RJ1jSe",
  "key17": "5rZ7CLYpL6HbenuzA5KZ51eEVTktDyohfasQKujH2fJsoX3ZjSVcKCUz7zmDZUYUngeGacv9ghRTN1HbYyir2n55",
  "key18": "5wfVK6Acr64WjC27zkvq7iwux6LoXSD6aWkC5STSGg2wXRXLEpE4yco9g6zLuWziQDRUFzPcvgjRsPADckh4uN4e",
  "key19": "5qLnz8bTxRnPpxCPC7NswkMMJEmSmsXEffYyV4mF1bc4PqDrLpV1GRkv2k6Qtkt8Wb3FMdX9TepXRgwcJ3QSwXDZ",
  "key20": "3UuiekAa4xoDMbVrmP3HNWj79KkUdPJiWXLtaWYjejyasG7pHU8mtCgRfynNmPcDgofuL9xsW4piDwgJcnPiMRVj",
  "key21": "4JJGe1MR5ma7EdycnTYnUHeWaqRvM4bHMwweDdPys3XRsT85W3ERgyBF5Z8chM31QGRKivny3LYEVwej6FdfKSTG",
  "key22": "DAEyvxkNMqKAAshDTj34rDV4qr45KtRGrSvSFXtEo8W8BBt379Z6cR3LcmK2NjYxP8e7SiJBmzGcPUBFv6ue6Af",
  "key23": "48TFf1FWY41bfSFHHnskuKRWkSJogTitESEwZyHnPbMVeKVfLJKdCxnyve42go7Nfu4c8SCBxfAcdrcNY17KxEZo",
  "key24": "463eSHSqPcHw3zrnJ1voPN9cBYb1cUAazKfNU2kQdms4K1iHu75BLhmwwBJSRLTnz4etWzMVS4Jdu1QGEKEnkZtx"
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
