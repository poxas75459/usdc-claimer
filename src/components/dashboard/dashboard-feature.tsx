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
    "2xLM8Re9mZ9SokuBfXSnufh9hW1sUqicy4nLxJkr8XP8NAnm1zomWDEUg1RMjWQjABtgRHLkZQvHZxv6S3zSoTQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c3KZvZ6n1CrezeubAdJ38PWSugNUeqrjdwZ3UVLj5Cd52y8XXCWB2irjisGBaZyFPfQHehDCbzHY9uXEkcoBN9N",
  "key1": "3zYTc7WYgwKQZNk44FAUqy4YaZrQBddjN6VYU9DhDhRaQZaBQ1gWo9yySre4nDwKgbMSEYNLuvg62THEMXMkW9Gb",
  "key2": "5rHFNQqVoL64ubAzDTbkhx5a1hagZc6Vf6VmQ2NKhMruXjHD8GujquYkxgCcWFSEmBFJtxs5oR9DAyUx19b9xCRz",
  "key3": "WXERkrnma3fbfFUjcFApr9yTcqrSC2F4Xnyd6F7LHcT3ACfAz28nRuNJ2H1zgm1L7PVBi3vKGgrwf3FCRmSomoA",
  "key4": "3Mubn94jhDdDGQqnpumsMSs3Zay8coPfput56orsFtuhgYZ6V2CMz1TGe4Y9rEccLDveKN8GrtHkD7KHWZ1E4YA4",
  "key5": "4xjrjVt5pNGmYqBaHMWpumPktZ9EkgnuK72cX3QL51HcsH8Fz3KkaKzMXcCivXerq8s5UFuZ6h5FtaSJoQiV1G2V",
  "key6": "65NNwh5MWSS636D5BzuwkNaknfZTm65NSeKo9oFeZFLgSfDt8Yf9bs9RmsNiDnSsNQrTDsiEShxptaU1hNFqEcLF",
  "key7": "65QyWC62GMWJ8fMmwFKh3ybc2g9UW9nmA5ecJeurpJS3JHtrrFgMgvw2nTFbL1TiRjiMMcsa3Q3c6wvymS3jnUM7",
  "key8": "2MnefpdbPc7ki36QE1LNHzL3wmLqG8hWvHDW216j469x5CwvLDJBu5du2ZBKQWyHxb3fPyisWgKGzWMAgT2RHTjv",
  "key9": "2A8ySxtMYoCdr1pJZe5bQiPuhwbhL1uZMVTuDNGiCQQR3Ee35XM5UkiXhDRorf6p6ts8AbxKUj3Hh4PwUstrT8d9",
  "key10": "3YqketUrRCCHaiHDQL3sgpPWcnpsmuunfDib7HK98qBEYT7pAE58aLiFm3Mgmhtq8DDNS7QtbEBmcY4ZNdZCU4pD",
  "key11": "3W2MFdjzDqtt92FRNx1iagMh9NAGQV4uypiwW8Zmbs9Qe2rDtUqLjNWgi6GrgtTSEsRqhRAmrKgoTwfTURR3z68x",
  "key12": "2VpJSYSDhjH9Hv2csHTaDexvMPTQhFz99aPaV7FuinY6tPDvsLzTkcE5zPy3F3q4HH1bJojZpfLfJcADvvDP1nmD",
  "key13": "5Vogp23sVRuA3fgCv5RRYERtz5VCTqhP35HD8gxnTkTzFKb1Ci1t9tA64hdvLXC2LmTfmX1de3WhZHt4u7ANjpy4",
  "key14": "23tdbnuSx6UbGoGBhmnbgDDZhwNa7zwKGBsJamj3DyJYRZ9NLRdxgpvpX7DoEyQJuax5io5WJAJ3gCEdaJR5E5AS",
  "key15": "4ijNXbzXb7goQxayGmyKB878dyHa5CXg7uySKD6vVbddXARy9aRZLyXH6F1chVPHW3CVRhk7DnZ7H2YfSeFK7aq6",
  "key16": "rcxmK9tXqGBTz5erSXyNhD1vD5tktaxUQH6whALDbKJ2kyotbpyuZtfpqtTUZBqTzv3RxjBxPZcxjBMCmPzpY5V",
  "key17": "4Z61jjXTZtiAJRZTn2P98S59o68gYddh8KzE65H1oQLXTTtKqZGoX5aMAVpetRvm1wtBkjHH6iTBrui8fo3GPtYi",
  "key18": "NjtBtUCw5qrKdYd1A6Kt1Zny2sg85qw8JGJfi1mGYGVuQcFVXZgWUzXqDS9zdvByV2uh1tdCP3S9pn2kcXeZnEc",
  "key19": "5m4xCtnTVTvEXWC3s1KLXxYxLkAVEsUVXHuBEavbGvoWSc12MGTtp57dRXR4T7eZB7KqCSgHYribj5wdqJRnaNy4",
  "key20": "2Vs2zoytPCFFsdhGmkXvpKzm8PfpSZwBCs4tc28U4iYxrHY2Y8mgzxWFMnPndsLCo5n8fBBWokgy1zeisbYutoDb",
  "key21": "4HN3rSosQkk28pNW1Za6a6mny8pxJo8QppuEmxmRk1KaL5F9Zb9LqbziftDBC5iyViMNxUPDFgAw5efwE6MjVApq",
  "key22": "2jNLWVWtFqd4BHMYQ1AWSGrAhxoxiA9nWdtNh1rzSFVSmisquvxz8qJ5GzuUZhoZVPmwd4MArHF5UMfQeThr12e",
  "key23": "3hH5x5Jm9kxPwWFGggmKfRVHEiQHrnJexySpu7kpbht76x5sFYzuD8h3F2nTwiVMaW5whFhaFE7iarNnqGmGervT",
  "key24": "3bFTYNobRFH88jCcw8vS9uY6DggwpYJRg1mtbQfw3WJG72CftQkgK3YWrMVfC3TGYUFdhPpar6LWrnpGWRN6iumG",
  "key25": "JXidYxtPDGAyYyjgD5N5FwgbzuVSabtTRxaHt7PJAnKMA5EaFTPK3qQna8jraBqZmFsfdXSfvY7xywToex3baGU",
  "key26": "2ziReeJCvbJucHh9Ew4U4BxZpkAgzqTYciVkq9e5K5dGeLDx2B8zCjXnyYSb5FBkKBUWVNDL45gaNrMSLbP3PYtS",
  "key27": "2iVfpwxsGqY8zC2LoKmv8Kk93jX8gQnB9iVjYMRtKe1NXXMpohM4buVr3AKZGTQ2qQJQEB1ZAnKgzvkJuDbsPcno",
  "key28": "3fKq6gWWRzzoAeRV8864Hbq8Ew32AZP7cYeSC2aphAyzBW5J9cJW1sjuxWxzJWhcWiwrZ3aVsaHH8B794VDosND2",
  "key29": "b8vPWcqoCThB2RXq8jMb3Lw2wNtSeUduA6dnkTrJx944QB2jQ5EXuZXQqQoRrvHxpSFUN7c8t1ytpZ2S8LndEKr",
  "key30": "XnCA9qNsY6uUNgbQEaKRvRT2UvC2pe1gH5XjdRMeq73wpCshEQmdbTZeKK7y9G5UvrY3sfvfSCTCR3fABkVB4Hb",
  "key31": "2yFfFq5dkzkD4i5ziBWGcRi17xMTunFQkexahSqXBDtAzDsE9kyg75qyP1Mck71oaE11JtQU8EyhEhFP7U8cj9dX",
  "key32": "gY2azSfQce5t7FxwYZJ353NyzyMByat7pgiu1kyjwDaZpJju5ScA2BsH1zuPuMcfS2zcBK5MLRJAG8B1A5d5Sqh",
  "key33": "3p2T7cpzEYGS3G3pgKEx6C3KLC46D8SoFQ4gCQLNrsRKy7Meg9pJWmRGgc6nAdeiEtZgh8QUFY2qnu4JzyYjA2fV",
  "key34": "3dRFWW3epAqrBNHtTiBKvgW1cDKCmSfCGk7W6p8YALzzCFej1GTFgh3Aqdj3RL7dKXji4arADU3uACPEYdRJXDcV",
  "key35": "3VKbpUengQ7jJQnKW8vcbKkCoocavbYKNSgSbop3osWrvFGhhmGAq6GbxtStZzKc72fRNRv4evfQPPzaeHMou4rt",
  "key36": "4N6h8SMAdwGxPTHp66LAkuww9jE5guEtjSfzEbZQ2oMGWB5PrABJF7RSM57UcAopa6LcYhSfbiU67XQzrRihLpz7"
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
