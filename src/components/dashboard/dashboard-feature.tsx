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
    "32E3bdh2KeMkbNFiBDTfViKJjSGJCgxSXT3StPZmuX8A8gZKSFoXWCAyjXuGeqBGFpFeT4eLGrHQquwNPEA5HLfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tbay5gzjRkXrmNPvnC2BneuWuWVdRkCNwzm2GuBsr7yt13G9BtdEKpzrTYv4f5LHENSxqBRomJHcKcEKGj2aqQj",
  "key1": "2yBgUuyhawqb1vtUD9AiPN5VZ1geFzdr5K3A7Tk7f6bBrJHMo1R8LvaMbYtJ5isp4E3TCYSvfwzjVrQXvntaQjKR",
  "key2": "3KcfgCLL3Tv4CWR8PvUJLkLq6YDLAHEQmjFisnYn47rifwGmG7AC1CU5YoL4ijqB4tGDJKvJ51JSyUW1F1x7zXUK",
  "key3": "5rocdG18H5kjceDNWo7zbtrxWdzSsz9AwaeQqXAttXHNoaxD51fTi5X3atyMQ2Whcu3inEA1rXJZHryShCvqUxwE",
  "key4": "5YQ3TemLseg4PbKxm7whpcZ4GhLvMtWAFfqDHiK9hoNzjwgDRKzc3A3LdzgNgwwV42F5FRhnqsqtNhwqWwaB5mC5",
  "key5": "44rVnLWtLwYXG3dQioEmVH6ivVZE63Lzp5mu3hpFVHaMaueKDcGCZfyPwpcL4W92asQy1cDpJFTdkkTsWYZCqW2g",
  "key6": "HrBFRVt987vh6qCMkP3kSSWTRdgzBNoGaETRATrqLXCAf6QtP83LJggMGMiDspLcHoRLeN4YrpJNj5SY7ZP4xm4",
  "key7": "5kBzU7xJatYD8zMvkjppQPjWatYXx3JX6jsjPVDJgJCA1J8ps5EsJV1EZQgMCyneSkJLzW8gTN1xMw1fAeBQrL4f",
  "key8": "29sediq8H9JzJB4cNvLrJmkdmLAX9PfqvJcGTMkFMaK9JgYgV9t1G3XP7cRp8mm8twJg6T6EEXCfLDKfAqhG3jBb",
  "key9": "1Cx1BAnVBCuF2yzJggAhq4mq6H5Eu9TLtQR47iQJryoHeGvfTpnfTkozWHhJGTnqyR1BYSHfJ913s5Yt6RkNWS1",
  "key10": "5aYHMvkNRKkR8z4GoW72JjMHJd9cRqGqbxb837THMG1w2SABS7BZG7mewa39aFqTLwcjVRFHtaUwGDwKEEJpTQje",
  "key11": "3TUSh9Yx6XYMi1NgXAGRYVGkS3uhy7QCAhS5p4wUnLUdMkhaBLz3A9kkb7Er4FgBCRjAjud8sNBzpES18F915E87",
  "key12": "4CjDhDLfPe146aF8xUYv7dV9jG9DSdgnE2BXtG53g3Yd1yrR1TaFL8vmoNvWTFDxxUV3b2c11zgtN3cCXB2KC5Cc",
  "key13": "5HHY3D1fJQwwcm19T7uAXoi8WHBaqmuDV9xpLdCDNUcVMUEw19q7ZnuSqa6fddhCWTR8mQa91cZdSEdjXKnTwj4M",
  "key14": "67X6QkjK92hTBrF6TBawK9iuNLKs9Z8UwLbRfaiijSf59w55Jr112QksCeVdJvkZwXnndkBVmysnEe87g9KcyigY",
  "key15": "5ACmXBa3C8UBgEY8d2X4aotg4fSNksYHTcC3DuSo9Cf2yowY6p7KzrztcgQsaihMaay5f6EBtkBdCN6gqQPa6vbv",
  "key16": "5rq15346jTyWcMZtr6kVvZjYBxW7yqGYHat3PN2tDPMEj8N5zLrHSHBphaJLDVfjPGHrWpgLZrzpty4KNkjqaWvL",
  "key17": "29Sh7SVBjUtXpsVJSWsHUMuHhUCVy58HJZ8ssycFaTtkJTrVWyym5Mh1dsWPyAmKbZ9ix8hegCWAYaauPm3b3pNs",
  "key18": "55Vk579E8eA7SZySWnCxtCCyAveiPj8eaKFbJ6X4qBvnQFSmNoaW9GFiMHQ5dRksLAoLnBrfx5HhGoA7taxzwwmH",
  "key19": "5ez86BK21Tg7Hjtq8JsMjDzfQCJbwULzgEQWc5e72Ymsb6o6crziRwP4n6BYSKJBqMHfRx6NUv4P8zubub95dTdg",
  "key20": "5nMbcLEVr3ZX2ejeeAZaBq9UxooYBoj5FCdHumeqj3eEpbNGZgiLu1Fb3abrUtuGpXxR2KKz29bVKdnPSgWHiJeQ",
  "key21": "rqYm3vteLA9h9r4w7yz2ihgV8wBoYspUQ2hMvXksD9q78XMku9WxVCzmRNgQ8Jy2mcX7pB9poimzPVuAHZKrApH",
  "key22": "4CN74NpXMUsUrBSTxqHXuE2CYGqxT2Aa2qRcAZZRroJk4ZWPyySe3Q9ibkEwfnU952ta7qCYzGWQcTAGd2UsCTub",
  "key23": "4dM66LXMBpt6oyFgaVaMHsCAkEQXcWDp9zub25yxsCu3H2wfwu8EALyWkXbD8gpbtuPseYxtzSYgD1m7D97YnRQz",
  "key24": "3KhTs4nnkMNU3W1JucEh1UFAdJG9TbYbK1db7YbiPTTNt2EfWGd7qEJo3mbBy8VsXH5GSDYJWSiAnTkavQzsnfeP",
  "key25": "517T5wboGSLhxP5TCCXWmJsBkPAjXBMA2x8SmEs6tUBweSQVNaYi2z2M7tK5asMeCjYFec6eBikdmAvVKVZjUDYx",
  "key26": "5oxJNowQ8LeSkxkf87hWospG1r3ypPLeFQngtphpBPRHJiSz6WNRk7G8N9FH3YMgevUE2v28Ja2jAK8avcHBqBd2",
  "key27": "5MAtBTyMVZyoqKSJm5y3R4gtr8YR3Y74mFGL92hQn5UE15UoTC1LFq8vCzYiw4acHKd4362RxbeaHysE6tqXUapG",
  "key28": "24sob5aVoWXTAVJoQuAvX5GgtyMTq7sRAAmy5qJUpAFdH5gMoVb9Xe9uVqqJ5Zaxkn5oJCA8HZhmVjqWkuWzn1Dn",
  "key29": "2HsL4hkhwh3GRqBubPYdij6CUgUNo6Cmn6sCPGcV8J79X9oXtbym9mkKrZqun8kxiBVfxY2is1UGW5rVrEcdSFFf",
  "key30": "2gzuxoadM5Muq8Hu9bVS73eYh5raYQ5zC7pdUxkeU3GoZdG6PMZNc3eGuikMWLHarMVfhS9nSX4UPekHSZQnPyGy",
  "key31": "4QBbqbU7FMg6kPEfZaS4BKvVCAEtBH9fMr8nJn557nbdbYLgq46X9PiHsQtbR9ib2xrScPi2tGR3Tz3jYjHP5icD",
  "key32": "FbfUbSDJZzc2dM1uo7MmquRtjap54SKxT31thyegfhpC2Cf9rqn6HbVvJoz7NK8kXCBmXHB8ZkTCFJhi1tHVm8x",
  "key33": "56ipo8p33c5pHpXu1y1yDvPo6pudh3LPcjy7HE3pVauzhGQMGJBaDxyuHf1zV6LAV3qeCJvrQBUcFW7iDXc2NMtx"
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
