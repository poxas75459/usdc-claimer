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
    "S4CaErRtpSYYn64CHkB2hPSSo9EP9DqcHBo3iQdiHcSn2dBn7qvK9r68HoCpxCv5UpXRmUwjwLcYyRiu6XgNvdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41D9RaUZ1S1Pw4DVbE9pExdBbst6QhgECzwdgThoXv11ZnFeKLA53K3TqP1ebdxhYntbBXsn18FgbqWBeRfqZAhv",
  "key1": "5Bv2d2Y9sodTKfp3yCUnbtAZosinyALWNouKd2XyuZUw7mgdP7WkJf4Zyxt4BRVrF3dToskRNSwW1CmKzzGzQRWB",
  "key2": "4fZD9ewZxd5hzyHu9KvJUVt8KE5kvZ4q8w1JoYgqGuWdsnkMU5nu8FDEQhhfSAEaNUscpr37vra1veTbj3ZG74ab",
  "key3": "4BufXyJzEX7XKUzj85W6C2e8qXa2gv6aamxEahSLX4ArDfnxUv4HG24ckAnRzNNCspc6yXJxLCV8NgMFs63e4Aki",
  "key4": "3jbwxvVjNS5x532EHXCtb8wE395FpNFonBXaaA85Zvs3HZwK74sbxBhKkTzfvCG3Tbgt7U7hRFqXMxPS9872hkou",
  "key5": "5UpykLVtV7DiEasfrP6segJWH9GTrDQsp6NDZrhm83h6Xe1PrRSADiDvfqTJJZTUtWgLSYKrsWZ6hMHU9SBGLNAW",
  "key6": "5n72S34mfcAHtYZgYs6WmirZtzKwMaVU37LKHS4y694wYkXmEAD3ibqjwHLVYM6GSVkmJJh2toKdsusWR2bV4Mcm",
  "key7": "4YJ3H7USCfTmFTxDYwMdrGpcAsGrA9AVmsB3sYQKVbr4naRe4mi2k1ZAasG1MRkNCCHz9VKRmrNfVxcYpojKbKMv",
  "key8": "54PAeSt6jRzvwtpHDpQLRTRugeumL8tBNH3X5pDhUXMn9deE6ktwrk8zVuvS8kEa5DYjYCsgLYQvgW5hksnwBSw8",
  "key9": "4qAv1TCmvwTUtnVk32ACqm6CJjhCmLsQSz6jPzqt3dERGx9NTqRFEWoyEV3uFqehBSUND4JC9vMedQURKyZ8sBWB",
  "key10": "34Mvz9e3ihVw5Wne6YA2NJ9bnku9sqracmA42JbFu9CDBFhi9ziiKpoEQibpu1MZY4owtgfsoqjbQYwF9be6JUiV",
  "key11": "3FEHWbUkX9CvByvH3kwxio7hBr2YV9qP9q6Wp2C8oc15NxVtWJSeiH5gXKWM9F1RSwrq8puZecSE2uB6a3wUy2i1",
  "key12": "27zbRU7havSgq49mtokzXFHt6jaianAFuRLi3QFRxevxXvjUY61hbCxpCrqP129wrzMwiw4ywVqVYXFLqw3VTSmN",
  "key13": "3KHBVcZAPe2F4zjCjURFgApr5ZVCBkidFu8dvgsPepijAssM7tmJiEujPiSXcXBfxiBJs5WMcbKKhrCZ9WcDpUr7",
  "key14": "48SfFd3JbtEPAbbyVaU3QcBxzhV237VZvFYC9419WaiqgBrvRQQu12EqBgYNti48rvC29orz3rJzTnM5yqT4rEcV",
  "key15": "3mcNe9WHDGAksBfT9rsfqFd8WSWLja6eFGwjnw3158fdZyAtwsfG7pD4cCiXggB6amsnyrsJfkNse2YJ2p1vCNZk",
  "key16": "5e1yfaqTsp3T6mcY8L6yiZCxXVzVW7qssJsPkaKcyvWy9Msu3ZJciopYV2LbrxTXJEY43fS14MAxVN7aWqbNKiVb",
  "key17": "2pak3XghNYSgvauubdKZ7fdxdJju6XHXBb3FsUVHNpuhCZiHYmT72pq7VsHS4UxaMRURNqPgVdHVJUPJUxGJk6uK",
  "key18": "64AWZnaotS2jkUF2BQS5Ai6PBWeLcdbvzc1LoRiNQoDcTRTDDVvW38gWiF3JwqtMiZ1f4MNvCZ44BJErVmPc45JW",
  "key19": "5nQKKyUPEwFKxSn7zw5iMtZok9cGPttgBhKP7fXN2uX7Bz1bf91ATWLqUejvzU1fbfgqkQTFLkcSaoqvBULmuURb",
  "key20": "fqELkf5UJxMhJjLpSozztPp44iziVetRnHXj3JsUyjHtBVkWFR42m2g91V6oLQSmPiuKwCPpoQWcgFnhDBrqipZ",
  "key21": "2JxRed23vTeRPQqn2F7gbb6aYezwpjt3JgVtvoRGs4YsA4GcT2vhqXWWiJksPSNHcG9Hwq2GxB98UdxafnZMAwas",
  "key22": "idmvvMLaX542bXfsmhjoKJDWkZpPvhUiWM65FDaSsp4cKBnTi1wmiviEjuGUiYizJimVp5vAfygCNSbPfnqrYTM",
  "key23": "2NpDf16isFJ4XjSukbRkt1GzxeubXjHFKQw1j7SWKivq3W8GJjKtwYp2D4MoBr9q3AoqZ9yPWWUySGdiUM6w3p5G",
  "key24": "3r45uAE7ViiSiKVyxh1R5A1xhRtnAKbKhijx3ubffCc6KZ8xQaDMcVwDiQZCybacvD8vXbMNM1fUXNAzWrvsPou",
  "key25": "jThX3TKxSBvzskb6ffmCLkRy1FT2x3G9LniKicDKBrj656gWeieKsWzH9tZHqZHCmHDxLehA5Zxaj35KY7H47CY",
  "key26": "2vkdDUYqdyZYCuAMbLpGbCbRpHGAcTxXfJmFq1k2uL7cH9niYCcAfieJNxJN8Y44dVpsnNPyG8RzmvASCy5C7oQM",
  "key27": "DQ3HjvW7nKDBRjKq3ZFzV6Du4RfA7aZE8yuCGWSJ6jdFpHreDhyudF9feSBcBiuMvrX6esqoCjp4Pre36QfG3kf",
  "key28": "2azYQjp2YcriNmt4rR13zi9kHPo9FNAG6e2xwrtjtnpizF7H2VHdT5JEeHHproN7g2ssP8euf9MTm5Z6Y5jSHwf3",
  "key29": "2yELTFnGj1oP3BfQQF358SQwMw5rWdb4XKJCDCvYmLQsUvs3GRDqyYjQ9TbGM9rTT6PpH2qRc6dNTycpssENcMnf",
  "key30": "aWF5nKqwtLaY9GqXbWN7CUdWyy1U93uB6d2fiz2BD72qZxGw8Dh8wcoyLJz5Gyghm2SxNJmJgWcx4mk4hmqm7ka",
  "key31": "5cRfbmNwcyavUUBMxbNe4ZLyzYBnbdN5Uo2AZUxYVZ6uSfdFLWJMZ1jG1PCWikbckXscpkD1k2UAvVh8ZG4Wp7KW",
  "key32": "3aKP4eGvWTvbEbKDmFxYuYS87mbm4CvDNGxB9aj1dnM9TUomARpFFews73eNZLDVy4od1brePAHjtBTftkSNuUwv",
  "key33": "4NLf1pXsjRQqv7eG25uxffYj8fcpmgArkzgyCYTmypeCeRYnB2BWpkEnuWoQNxywet3zWuiZsHw3PwDPgovC8hDz",
  "key34": "3ggnDZv79AbpzNRSdQ4VRtyAZkWrsHZ3D5AFzwF3o9AZ1LaoMo8iBVmUbVfXMmqt9a5RfWZqmapDd7Rmc99XQq3Z",
  "key35": "4MCkG9YNLSHY5kXzj6JMsE2LXnMFWR4Qu1HLn3PB7QyR2DmcDTNE4YfKpbekhUFHgZCS7x4gVFrsxgXKk2NJ8kLG",
  "key36": "585fye4CTchsYPLk9YPWUaejFRiVWJ8KoVYTUDjowWJiPxc6QjMuUoJvn6X5UZ8bAGvAdM63fRvRUaCczzAMAcoS",
  "key37": "3N7n9s5NW7UT69BTLyXD56ZguhUhXCfXY5hCjLB1dhUy9rKiTAaoQZAqfXQNBdG8JTL3CaVoCaKFxYbrCTTXBaE2",
  "key38": "4WjpUdSbuymBXW9iZiPVRHyg3fDXkvACzWyPTxsPUyuuf9jijQWSmdy64mPVEcds9QYdNvXbwXBfqkDxsjNx8xcV",
  "key39": "4dV6XVjNUfFrJcQVMzzUFY2tN9BUHYa1eL39uharvbYpmfXbTrQFjXsiicZVirNdnRbC6ZJDdXtsTqeLZCorWra6",
  "key40": "gtstzrbUL38q3BvtSX7GeTPToYEJUWDZQ1SG1BBmeLkCZen6CEPQFiCe2f8YJbzQmpp1FQLpoMhKBFhiskDvYmT",
  "key41": "3xAiMfcWXBQZvDf4d3ZoyMU3Ap1irMRcaJrgbJsdDmrWNUfh8vrhhZWsgLTqUkey2YJ3f5a9HuGd4oBgnsHcQjsN",
  "key42": "4f26yvMhWEj6LrFgGY75BwxfkP1qqPy2EZCmPH3xj3iM4c3zXPkuaKKvUSMT8B7cK3S3665xQXpMeCJpB2nBAFQ1",
  "key43": "5RBSLfrE7aihB9FM8uDLs2DpW16EJKY8czvhiGULKYEeUekBg9W6byLsZqKL7BEpk5jb74PYhocHpddy5ddHGpBa",
  "key44": "5eL1bpyCFfAEWqMKfzGEt3D2oUK3MGr3aAh4vfMvGbJgtd1F9K8r1zEZ9DyJSeuBxdN9FS8GFHpHZhuNk2Jsdh56",
  "key45": "Nn6fef61V9hhqCGwNjCNYb8G8DkVsKdh5R8Lp5KtwpmYB4JFyAwjHBjz6L545SN58sxb2FyLurH5QYtJ1AuzXGC",
  "key46": "2ANPiRYQHg9yB6eHzsSDTFxP7pbGrnAud2ZWaJGyCjeNXT94EahToHhrKtpdcf7gp8qcmri4t7KZh8GPFmULQFeb",
  "key47": "44iQ1HoWsnSsmNDF3Gnqnqt5WtQ3ewH34U7hK6orJb7Epy88SsX4VZ7ZCxndTrJjh3gM2F1pNmxP8RcyRJn7uxXP",
  "key48": "4YevRUuwrSvQvLsUSWGCU9PqUKnqGeFfSwk42u7V1WVWGD4xweKcXis947TefZp1SaVHrZPJzEiNRBwhCFXZke3M"
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
