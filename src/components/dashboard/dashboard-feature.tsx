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
    "2M4RUt6LZ1cBCx2jQZ8MjyeQwLb9Zus5Me2a2p3PVfHeBx8psCfZDz1B7mstnyVpNTTo17oLFb6fzo3yFFwvE3ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aY4erhEX4sMxSERbvyJUK6pBzqDTX51P1QNmCTcmdCBP2h6BhiCfhEroCu96SxipxEkv86hid34rmKPWL8zTCKd",
  "key1": "3wt1GAU3qBjfbWS23f7jGso3D5gxfQKEjpFM1PHCWAPuCQWwSoSsD5XePHuzGaWhduwTtQ8VDm699EiqwT2qeqHm",
  "key2": "3VNi5yasDk3MMWQShcUigvepszdamF59Y6au2ABtdXqBzigyqnrW7n4um2QD5hf3myYu2GiYRBvQ8pRJYg86Yx7Y",
  "key3": "2LzPxamLbNRHN8m8hdLv5jByzuRRuPsRYj5unUPrhs53GNDuXc8NzjMk1jyJWrWxfH6dC4TeNam4L8VmwzncLVes",
  "key4": "49prg9MGwmqvbNCm6GD8LXRnLWWYSDxJAmYJM6P9ywzBGsgnWxc1ixE7LrubwMBrJYxeivJ9EnVLuhd6nhArFGit",
  "key5": "5d6YHX3BknoEwmNJb38RxtqrvYkPbBxFKXZHiaxbxCZynREjrap3A2a45nYRAgqa93AeymSp1cfpXDgGDMEm53ad",
  "key6": "mp1uvYTHF2uE7GN2k3EXxH12Lro11tfhs9WYfxykZc6p2CZvzmC5hzqmMDd4ob9CN1ijx23LcqbDaJRLU6ndShf",
  "key7": "368f5TShVRvddMHKiNdwJ34tDoYfxrvUhttJqpiiNTcgzVtcsLFgXG8SMpQPkPr8jQ3VsFaQx3zxmdFn74tCqAXP",
  "key8": "2jrsg17a88HEnHES2hDr5MvYMC2JPPU4Hj8nZ4ixPYQizakGFeQusYf89PqLareUVBR3wDF6YswMaGeAoUDSPTD3",
  "key9": "64RN76c84Sd8UyCCfgw8eczkyE8VthRjaqeyhEwjZJdLJDXj67AxHFnA6aZoJiJaiyF3HgWpC8f5E5msKx8ToZMd",
  "key10": "2x3SWgkaEWApqSKKoXdjYtH3EPfkY4Pa3LmuhTyWZCdJzGtrAiSDF686xKkFF5QH26DczexAYFrFKtAokxEecgrL",
  "key11": "29kcJYwNtCK3ZF5FP4uEPdYZ6Jc5pX7C5tp4VyTyA4c9C3HqXJZ46ih4CkPZY52uCQLoCswwwXyTFvkRN1iiHhWE",
  "key12": "2Bw5g6ETE5ZCi2dqGCAUgr1E4w9uikTTcFA3MYYVMVdboY3DVU7xEatTRtgaVmiaTm3JivJ1bztEFyq39NcuXMsi",
  "key13": "g5SbXFuzVrhcnzpCLt5RTkFUrTCzvEAVjrhR78k1YvRxUyeDeHHQVkGFUpWfKvoyp3ZcYAMDwSpqR6eKWXqwu3W",
  "key14": "5E15XFswz68yDKZyAT787DtooUrfLaJy6yZipU8mFDaQj3npbFfdTG2ubCU5PrhfukiKAzd1JUGZmJjkqniQZAHo",
  "key15": "3t2UF29znSHFfnDiWps3wroQAm2E7wZE2EpdM3piTNxcsgb9VTNSEpejrSwtAe74UgBs5fThRjZvys8TWEsudM8M",
  "key16": "4mEqktpkRMCZwo7Z3GU1evH1fv2tY6J9ZcECjzFa9p37od1tiKx1yEL9bUtsa91JDjVEXZ8zCsSxUhiopW5rgdqP",
  "key17": "5vJoUAQisRT2Hp1p27EAShNtCYsTm2MFpAY8BDWpNZPUwHhmYzw7nBgvgsBkWSXginW4QZukkKXFch7uWfduHrdh",
  "key18": "4rqar3hE9pkGrt75HDEiUkUpTieZE3gUEXo7Y7TYXTqNy4VLsiK1WZ8AgrQBUJA1Yv4EcoNvui88N4w6uYA72yiV",
  "key19": "52qmGh3dyKWnF9U1NMX6nqaaBmFFjRhgsSg1bvGp1VpsyKeFjXwfSH97D6MKNCvDmgWkGygrP61vDuWb7Us5CpNw",
  "key20": "2RFqRbTtGhr3nu82RpLXfNGFqAwoSDPTQCechrLzSq1i1xLyQBrsTtCFWXMi1ykkXv7zdZZxqqMchDEaLUU1u7gt",
  "key21": "aTWRNFuryLPSc1DbW1V2882XGTKokC6emaxfHKxKraEByyzpVvqwTwHvEs8ZgcqewWMpnMU8BALouAjGAFYiEmK",
  "key22": "3KtosZaBAq7f2aTsx1ULQLCSfvCg7Sq2Rucdvvst2ZDXyLaxpdNs6sb14Xbvu8yZLAWks5fvb4cDUDcKb3bk1EmG",
  "key23": "3KLhMy4zWHAdXvrQjA7aL6ZLrdjxLmtaVKsvW15b9SkT1MjaSQPJPfbNwCLAF9xpRJiK44hBRkYYNhvqZkyh2HSP",
  "key24": "2YT4ohuEGGh1eHH8nUCt5a95GhJ7PXdvrgs2AtAhBTriBA8MWhoNfWmvwxerCiZvWYADxmGCQ5unhTGAUKEBjccd",
  "key25": "4f3MPVhXKuDocniZ66hX1yC1KkJfoX8EQKtPzW7NE1Ppemf5WfNThHkNZFyPJXwNEfx3YBakFiKNyZhWPoVvzp1B",
  "key26": "2euP1UccGqagqo6yqpRXXdb9itduYUMaeeUhEDU3JPZPk3xyUEUSyzNUTJA7wWr8ePD5mvX45k39PpzRj8APpajW",
  "key27": "qABJpRHzU9CFbu2cb9yz9WMcutqq2rokDDc3JkfvqyCHphgwUSHBdRY6B2dpQdxxrKSjtPs4h1spTPLA8XkDV3Q"
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
