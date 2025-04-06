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
    "3VRjydD1zyC1R7Jmmqr8N3hSwWppYM5dQo55tNUueNkAw6Smu75iqrdFoUi1b6PtC43dWtgMrPvCJ7rGnK2Dy1gG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b2z13nEwT8MYEvrbrAXBGruf5uRMQTfR9HgCxmhyiPAy4ewgXj67xrEw6cVEQN7WwrSDbMa6PSKMEnjD6K3yXHj",
  "key1": "4BuNPrE6oazoWKJEZF1oxMaYfMomidAQbANJcBsNfZBE3Tbhf72cnGGGhFWDrgMw8HXBEvx9z4QxvE1fqbZrW8aR",
  "key2": "23Py63voZrHhtNcL2HzHskaeuq9dvVSc5H6QT3MGMdCc31RTTEsUDGPeq5Kdgq49xAAPqujyGhJLEpfJc4fh2zNA",
  "key3": "2wBK3hvLvaEivpEn6d1rkGho26MoRp9nSWywLQWaNCKq15dcvuFbjaGZLPZPg1mAwGo6VSKtcEUe9wyLU8GTuPyN",
  "key4": "9Ntpa7G1rWu3GNMhaKG2SF7UG7CS4qa3apo8aB511aDb815dyMoneouWanDDJzJt4CHBAnQJToh3TmNNpRuBzjt",
  "key5": "KMVvfJyjwykx6B6sa7uR9etsUWxgRK1pQo1UJ8pR9DCP9kYSZ5sJeTqhmUDSVkNw2n65xTFMCwJ6XYnf1n2RA73",
  "key6": "4PKzYgG7SyAZ6Z8kSqR7xTNTEeEhtFeq7an1qaAWJUCHK6DkDEQzX6mWaYek89VWKZAoAQiGVM5CEWS5J3WH5kee",
  "key7": "RdZBRzuh2eyaXURui5Vqmcs9q6uadGPihJ7RbobB54n99xvTQu4W49J7U4jCHjrNfeq4p1p2pCGGFXwL9D31Cpz",
  "key8": "36qUCNKhaoCQh8wFzyePUq6FXWny293xPNZ8bekQuE1wHr8qjTtaCmF5F7MdoSgrBbdzt1rhbc6LxsvHTomoyZK5",
  "key9": "5bdcCqUENKuyN5MUPBsviFEEyrLc9yFbxxuBttwKaSfcU3fJ8fuiimErum2ZN93ADxp3T3zrRcX4yHocXHbHJvZ",
  "key10": "2GrSWAjYx5ig2kHULyfr2Mu73az7gR16sw51xXMckkfciqCMEFMrVHPZCJWyLJ7jiAcgT9eTVQWiaM5A3gmBdh42",
  "key11": "4VMohczGEozuKXTFb2Newi51GwvovnERh4uWXs75EhtaGjcaQVqdfhx1unrupZRPz4njprhDzm5vj5HqML2WDrdU",
  "key12": "KW2FVniUaBqmcA6p2iooAo6nZiynYb6kxzSsGQr45hryXBsAnPn2WgnxdRj1eB2hQYXoeHfd3xp9d47BQHS4jeD",
  "key13": "2DM1X85DfbL39mrPmgcFgjS441oZqUYJYC4QohV5YwP2StpLpS34KJqooLu2FyXaP15bf53LuGu6cTBt5zGTGzYr",
  "key14": "4ux6FGWkqH85fH62ySnJBQnrzEC3tHVFyAZygzQ21owE99Ns2xj7iRmS4Nt4jTwAiXbFu9a3qcTy2ifRz7g9wcjQ",
  "key15": "56F3bcZ9xeiXZeS5sZvTounDDTCZKdPWEg6dfc67u7qzabvsE7korjZbAUnr4s8vd6FehzzYUChPZH29Jb5PeBzR",
  "key16": "3tousPWPJcw9DwiT3pFSAQHHer6fQuyG8euv4h3vqpGc5m5mgsszYZRYmLyZPjKJzedqaXrsv7eJfwsv2RiqqZLX",
  "key17": "3WP2vrHFuqmmLMz5HDpXseuDk5G6LTCAu7XZXEkQyVWguNvumCCxKzEdVj6odE37HTYBgnHSbPnXS3ruC9xQ2rke",
  "key18": "2psq5j8iRQoug7SojPmRd7kFgX4JJbTZadXgFyG6sW6DoVuinLp5rwbbjKKhg84vsy2bx5bbNGvHMFSxFLTmQWnK",
  "key19": "34tp412j92qFeepcydDs2ZhPoBKMY2brC8uzh81sB23QwJVsoai7GbxEGhouWD4UkSCjdFB5dJ5vHtqixCysPRvH",
  "key20": "4CCWqnz5R2ipdbxZxZy78ZyyTbm8mfq6oeT5xdKgWFfHsjQ8Ngd9Yyxwz4U8qEGsxF37kfcV4qmYK2DeMksXprSW",
  "key21": "3Z2m5LBb5hxeuwEEwA5YBLoryk7ZVsbnWFHbpJBaoS5es1XrDg9AwcAuAVaHXPbEAFBTqwNqka9UMp5ztngmrDQ",
  "key22": "4h7GKsKa6wjuQUZ6yJdMP61LiwrQ3JeVtWCiZ1t5fM895UG2abiJbNauaDsFZxXZP2Lgdip4AhayK1LFHmJuWWZN",
  "key23": "3GJdFYrj7DDFWS9TK3wFD7dNcnTNPhtcoZhfiD78owV4p4aZNDqk8GWdpFQi7CQrRDH1idgKWZDE7mweiU7UdSQa",
  "key24": "5TkT6AUbeGAvFRVoVsevYDhAjZHdjnJKqvBPYihqTF1DWAs8UF8pe3GJbrU5sLukDs8oELLkzngWM19BbgZCTxgi",
  "key25": "5h5RDF5E5W9QCAgeJbnP9gccYbcrptGhGuLgubvtbzw6GSN8PLWGnSn7Yb1xWgVrVAoCxoox6VPi4TBuD2kpC6yc",
  "key26": "5NxXwpCo4RYtW6QWMcHFPuKSoqiPRHxGppYpnF7V2CSRYkUNGAbmG6pFNGwbUHKvrQBCMyapPgMZxixEKGPznB9x",
  "key27": "fWwWphmpdLyPY52ZiGctrTRShuedRW7M5E9YfgAUT5W6evi5dmDiRoDmpV9eYfWBmZJz5P38GMDfR9RHpbvDA17"
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
