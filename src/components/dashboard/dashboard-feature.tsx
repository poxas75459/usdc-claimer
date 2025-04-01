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
    "1K4xQqXvUNnpK5gVLELPDFPRsbmNCVwSg6KhoVbbYCyJXMZ8dD6xLekvEoFvauQzMEpFShH8HsPYrEVeUmhwk2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R4myprGpdEwhad9HLa71TWxDxJgQJWj5FRKgDxEbbt2M8q9LCeaejH7NLJsJH3ugiZjQaPYcXAYvqPthWXzxDeD",
  "key1": "46KSUwZ9wf9CGMcsc5goDm7EQ5hemvYrXFLhFL6aGR89CUpHftoGchF7kbVkGkayHVCDbhqmcNUub59Ktq8RpGY5",
  "key2": "5QBoAo9Pwk8hFBrrFMqGR5EYMoR8dcNTB51w21S7n4GRmLsTPZsSXgLGbB6xaiChZjjbGGNL9NRpUcsbHaFRpvvW",
  "key3": "5v4L8RJpEh1eFDusYCxDtSunjaJP6SGHPcA96p5E7xXCj9gt6UeWBeKtfK9iNBPKtqSP9HGLMXXVG6EotYZrPaV5",
  "key4": "3zqgJFeGWoCTqGUVoyjF9k4ayRXRmaXPrWNLNFNR8noy9NKo7Um6DHvsT8oiYySD9WyS21R5ck4W2UDgNqq6H8Ar",
  "key5": "493e7KaDgWc4XS9HMGAbXVTdi3pSm47psTigDcEE2Ls31QqPLj5uJBwY8qCNtwVobPymMDyFpQZq4qPasdacSid8",
  "key6": "24D89skitfkhGSHCVrtTueN6uMXGNwZRsX8bKWtx5QrgyfW6qTmQXY7CD4SpDL51wLVjzoNsPM8wjeyCyuka3Ru5",
  "key7": "4QK3ScxVYP5RELJbtp9CfpFv9vqKN8B28BRCuakV2gkAJHq5FeoTFyTuuAtcV25c9bBrL57aDHUSneFcAi3m94zZ",
  "key8": "54hhdwx68vT4Wqkg3dGgWk3Ns2VWkq88zEjBNn4RJUKz3pRkJvaM8rHDpPMHm98eoqTpviuW5iNdjoJWSFKo3HLv",
  "key9": "39jqhTFZVNaUqt5Gn76Svy517pNJoYvndKhvndzrQK3eRGoziSxa87LvMUabRfs8KGDwAQP9bkNvymg1UahzgfEg",
  "key10": "4mEmCWjhsqHYFTEzRjHDQZcwG4DX1MLBckvZHjBxL26tcRmbX7KeEJW8WYMQqXiwKrMi4HPHUR4MDbtrPCKU2q27",
  "key11": "2XYMeGmhSg2V9mW3fJaAfwJsTgcszrDm217qDa4KkLipiQSx5gUSzA4ioNAecXjZCGruy2kvc4m3hPmScZkd38QS",
  "key12": "J3y9oaMKC89XycoUy7Hijm2D6sU9DGZ2PJ5u7tXUt9PRWgM7YmBCPcmdHW5g2q4oKjv5HFXtJnNwBHvf37yYi8x",
  "key13": "5nX35BjGLf9Uj3W5zJQUwLPmEQCfWGgndK4MLjDahDsGM12xovF3sCXcCPGFjEgbrvtbpdKVbLYSyTjgvkcgacQn",
  "key14": "5Z5iZ8hr8bdLKh4NqcwEjVKyNpawsK1VwgX46zBHYEiX4ftFU9KaVuSwPqeUjLeAQk8saNoUhWiBBvRXYo4GMe5p",
  "key15": "2N73oykSYEJ7wjssJg8tS26GMnkLRfvzdH7XVus1kiLVzNFegyvXVDCQ2yzbekpeavnzS6S4LupFHh5asLfJk9eZ",
  "key16": "5kJbNpVRyFwzkaDSXFcf7TyPf4sPthdb89oNReroCcNMo2sMoKAkQ28M2ZmicTp7nxSSNaMzWRj8VZy7HYo9mD2J",
  "key17": "wvJbZYYrW4vjFzvS9tUWTByFd3bZBnRbza3cmQ3z9EVJqd42RYZniV3c5xuRWcDsTVBaKUxZmNZY5MYQCEmHfcc",
  "key18": "m7RaqJnBK8nUTtxxBtjRz6NPKEZmkkRrDaD4wbqxKSH1CvmpKMCsYvxPvYMKf8rUut2Wuz8SJcFUMt42Y6sUVBN",
  "key19": "g3EL1BVE2YTFRvxNWMTZuRiWfgKEbQVBPG1LJwbBNe8BdGNG6xEuHLuquuGvsTR6ac7yUpqJbzJFqyPjPJT2YPP",
  "key20": "2A2AdEjNoj1zhscUnDYg5cofbgDMPUEViNrAfX3RMwfNU3EQgMVa7zg55u9fYy3N3RFTSG6XSfT3te7FXu93B1Jp",
  "key21": "5TQnoVqUSDgAqjB59PdyvMTYEUfDhWkx4dfSJgaao1PWVmqyrqNPeHcHLYBeRw3EPmeSqTbpQ6VR7jFRP6tmbJ4q",
  "key22": "3NFnwMndrMRUQCWCmUPquQrrHHeVQoaiFT4xLCupnN91m9WucKZk11vTFqyMS9gX5wax1xTuJ3KpsrfUB26AWTFe",
  "key23": "42qpSjc6ddHAxoxrSb6knsx65vYfefKoohqSVQMeEtF5pHxqRNvCcGyfsRG6TbS93AQpfPi25NSr35i3ZX8mot6M",
  "key24": "4YvQsLWNkjb5WsrA1Y9ioe6FJFXpo2tfmRV7Yr5Qai3fuJNBzoztJy7kKirVTXnY1FCx6ka2jjyyH3zrBHujpMiR",
  "key25": "26NCdmspYCw8u8g2TVN5TGhZnhT7C8TeGhopq9uEvaHnxQk7PWtHiHZjz1CRT7dNteM7ZiJF8axBe8GfLvpLfPa8",
  "key26": "4qshizGCoj11tiPSA8hki5zgkXrZGLZYMj2MEw62LMnnBK9oaYke9iiCSWh15gu1fz594X9MDDVsjwdHNg2tRAUS",
  "key27": "XghbKgysESQ5szhEi51X4UZuTnLMqyNBaMWKGU1FqSgqv4Nh69TPccpuUoaiPmyMkXMWrdsuR9FoEGxfxfWbDFz",
  "key28": "2XX45423DUBdfxLWNc8fy8gXi5cFB6jGQy7H4H4MAmecVNanzi6MVxHX37kcZeNosuZBDC2FjW1AmNbmR1rK6xQ",
  "key29": "2AEoBYrmtGpjNsAKxkLNiHhcf197jZWTsknCnt8WWHpik98gpi9DVaJ2m7X1ES7i9dX3D6N4azQgtqNKdjf3J2Ys",
  "key30": "jZGmFZ5U1ZN49bsCYDjnuMUtuj4SJDXqv2qJUHUBZbHxYD4jKJrxmPrmaDN4eLaaztGJM63cmR7D15YHFVtP56n",
  "key31": "3EB7nxqd1nUCt8E983peARJUGNvvm9yoJwtgLwtz2RvAiu6ektkWCXCfAtpcSyQ4Rrhd9magrPMJkoDArjYXVRQU",
  "key32": "2K1YZFtTmg2XZT8c6bgfNWZRm1KjBpfaov4LWKCJji9jB7sSs6rwLj2phbb1oWWgFBzowxEYCDhV8vuvEVbTMn9F",
  "key33": "3SxVrZr88q4gjmHBJCe6bHaZefGW2tY4jLxoLD1hzQcqGYKHUerUFqHjq9j3j8DahzDoDqhanhSyxqTCWwMUMp5o",
  "key34": "4QZ5mtJ8kQXmZs4Jdg3PL5jcvkeKC229esLSHVgdQwgwqmsMR9qAKbCuLfs15pMntHs3jVvRvbTPwmSWxanxLatY",
  "key35": "5JtV12g7R7LVMhU1BeDYVnrxDkckqPrANydXKQiAdyXfY9sUfUi4pMebGqSyVcuAHjHNPo4U3vvqo4mbRPw7gMzA"
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
