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
    "4DUS1X7Yr7nTgmLSVMXJfXaNknrHTGoBmdSFn8B6BVaJmLEmZQm5MG12ZY67ATY8oLdm9LvxNg8JYFfEoWNreWjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZVqgkty7qASb89vkQheirrYVCDq8XypBFRqFJYb8ZWaoV9TeUM71iAV9gZctfStbRPBj2mbB7venZ1e29uUWCJU",
  "key1": "3n1xh3PBC7ETgYoxzT2897U9aYc73kCzMW3QMxgjZNKzNnkKwViDDq1kHbeqybq1TFCfueiVW6wQzCfR8BPcwneB",
  "key2": "4c9M8nsDmMD7zGN56AjB2wtRJVAwywFBxRyL5DRjiJVpYpjdCc21YT1FiCYMrscpFxbNjAg8X6C5UHvU5W8kn5Gd",
  "key3": "2DB2d165wd7ogYK485oGJjUqcXMGkYttsHtGgoA2HyVkhJf9LhrFtnYtmsuQa9Q9S8evsu5XHKCwDZjyZVHYqCm",
  "key4": "2apjPwvitUCiwRXvhgzGNneTgS2vKus8YY58Hd8zGYB6kgWjMbqVQLYERzKGw3QKqbYmv2wb9jKi3fF4RCgGjVZ4",
  "key5": "32xPN4f1bziCiZXPeH2UCLp8xLQYMtQZF52pExpAF8bkfZYVTJcqoku4MyVSoAeFLmpMaWeb9Dp56mdueiDS9S7H",
  "key6": "2692NtVVcrTACXGRMB9k1ugDY7ZJ1Rvbe7kFgYd2VCMpBs1AAMWWaMyZtwmMSGGYmmeP6SaDRp6Aocp6aEwNtXwj",
  "key7": "bgKuKWXXE9MAGPJ4JUnFkPuDwRPknbJHu8tD93bXqNWpGC9jef2QtcAgnseAHeENk4q8rNT9mi4Lt9eZCKQrQup",
  "key8": "4imztom8AjJtUNdxtqvyqSzfN8icw63biiER68iSnSftfvWse5smBnzq7HH7eVzhukmA7oLmcw7rLGNcnBGhtcgQ",
  "key9": "49Jngqw5D7R4zB4i8T1qxphRCbqtxrChZnKVQZGRa3oDKJQDRUSdS9bBWtKJ8NAWYs4Uxjgwqemy3cPrsGEj2jRA",
  "key10": "2CK796PBSgDLYdZTy9Bx3U5b3c4RoTDUKqH1nb1AXYP9e1nYaXS1fzPju55JsETqgPB4kLkfWHUdL8Mo2A99p6kF",
  "key11": "52VrFrRTxazAL8bUc3PvooBxg7hQbdUkJYqL8kajLvT5uAcbEyNQpiZmQP7ao7mSUG97xBe53Tojrp7XqGAd57Tr",
  "key12": "5fmeCBrJBLuXu3Ai1UEFhMtxXwW3wUhFnn9dsAzMfbDZ5aSt6UYSBqyHiSwsLqxukfUDJ4tpFHZ1tr5YT6hJRWK4",
  "key13": "4Ui4j791GRU73WcfiGfrTHZhHdFqkMaBPmcE8w7SE7gRicKS8dADWYNDokE7aFz3wXGSos1EcMuiHETbK4aNsUfU",
  "key14": "3ZesnW1bzWXNVFpjWEpZfiJqUJq3m3xp3jNtJr6fMRCSDx8PB7WMLp3p5JZ8GSriScM3RbbMwKBWiiuVcfremSHD",
  "key15": "4YCwrH5WsaLu2gqJZCxEt417wK3dSFroReoryWfAMFVztgmY9xXyUJTeyUqv2SQh8R85HTmFLQGyixjCUu7HdN73",
  "key16": "61bD6t7mqxCMNLkVHVzGHGSWqa69g4XmmPdHy8aB2r5JCefSzMM95Wna5by3CaByRsf6cuwtp9tij9q3ZtcK199i",
  "key17": "2hdDmTbQGnm73XYxPfYjk1GkLtnheP9VVnQRf9ejPvjiMLCb7eKnezArJ9xUqkK3R1m5uQfiQFe41dRyynbQJzng",
  "key18": "5AHmcCSk9Em8zZFr2gBpyemR49qMATxPWgPJvApoEHjeurE37gXnrMeaRAS4rUfkcN8AsCNri9GGev9FfLndFSYN",
  "key19": "2uo7bur6tWzDL1v9BHgasyHBfGttWygELFkWxXc36znA4xZpQN3HEUEwv6SVeoFFMpWaLwqSS63LK91GDui9eF5J",
  "key20": "3Pvx23hS9W6JdhQJVYMC6NA4aHhF5gdPT3SHmn6KMyXGv9cazvHbDyiuB85d7zWiiDtBHxNWR1fv8YJV7W2fDiCs",
  "key21": "6354wtJ6824bphepUXg8DXZYJrr7UowSud3GLsswhYV55WGo1qhEXBTPAb72YmdiqrMBCoi4gKkpJJMk3m5d3JZ5",
  "key22": "7JDxxzAGdYJyAigtiMX3UxBJ63p83mafNCFkvm4BgDFSmbEaGyQpYpYedpeoS2rs8LdLDnnWnp6Z3dExEap5ovh",
  "key23": "3tQcWdJLHqiDYayMJB7XxWhQ77obD64q62e7q8BdfyhczCDkSbxXgZs1yeU8T3GMUgrhafaTwFRUnVhhFEy8Nq94",
  "key24": "2kbX1FQCYuEUyMKDhTW3hU233p4NLB1xKGZrkzSHhFp4titZnVTFi61HLz48D5Q5EXtd9MBZwWE1C2oBvzDvLr4k",
  "key25": "2xeiwxKYTHaroAWWdm94dDhJqjQCCnGre6wALJbsYCyJ95eyCV2RYGAEEgog7ETMrpuSbiSk7ex2JzWf11Vyj1Up",
  "key26": "4o6vg7VkuhMnw3iiefaubjFwmcir5Kd9kUkpE2eFcJdVEaaY9152hLv4dDhVRVvrQUPHron4ssxE6sF8PWMp42ZW",
  "key27": "3GSBs5Z3VBKTFEAaqqha4Rqoyd9tBq22nBDpVqeD9r8sCHcMv6dCVaZtnH1NUSHuA2PVhvC6L7CymhLu7zdvtBWB",
  "key28": "57MjA6hJ9VJ4piUfYTU6EKkDwyJQu7W5mZtmiaMBq6bgKS2GVVECpSWRAdkKT3sVQkMWiSuHpvRKR6KDEgvotdxV",
  "key29": "5fgfHhHuFfyegyGmLurmPRLEtspKhFwKTQD77ZSmpMfu6X7Xe38adC5HNNHmzanL56vR9HeLy7Mp6LA5fJ8puJbW",
  "key30": "Ki4YmBZbD5SVn6D7nk6iNhToT7cU7kqf5HVc5UPxegY3ZFKUQ2SaVhjLeKCzLUwM9tReCGkmJszCSDeTgUFpFNh",
  "key31": "2p8XmCk9JzUkb2fjG3TJugE2HnhFLNxDPUphfZDM78uk2oP2wWvkJtW3QqhjqDK3Mrc448aDn1hqFdQQaRTBPRmu",
  "key32": "4vFoBrFbiNcY3MmJN4w2xTrVGYP1uVk8F9SJrP9EZiHsFXCzW2UT7gHVp2XFJR3tVM7AXJnqhgAoFnqU3jakW8YJ",
  "key33": "2M4TeSSHXz1KzZa5vK65L8aFtMeZ8C1PnHqWQUSJSrCSYhPgqvML6SaDYQj8bUFG3EZg7d5FzynFtPGfhBf7Ciif",
  "key34": "4Sxq4ve6SGbLTr5tb81BwsJmmG1ZXELt3K6jrUgpVEVFckRD3SKjVVxwvgbVCn417JpoaGyjaemcTw1NqjqifSvS",
  "key35": "5eWVp5bkMvswcwhXLkvdSSuCnEmVXT5X6zdkA5qZH8hn3asRBp6kGyunBsqiHtE9uiMeBd5ucqqgNr7JUHms4M9G",
  "key36": "4K4kBLA2czU4K1ixgTA1LBt5r2W7uxYpMt9maJGbAjfFauyMcD4qkz3ESESjcMpTovFEKJKX7Z8hMtmB6r5g8kXF",
  "key37": "3sXb2bW54B68KXf9S1AmoborJxn6EEDQ7XzGCEV834ZuMsbFs2QsD8rkFyAetf9vSwFM2e8MHZD9HwD86NsNidBV",
  "key38": "3zcssEemHGYjQ8EDjBBUgEw1fp9tPfsRotikvTNrg4SD2T84PsgwsUaVowjSfFMPUsQbeRo4c2EzRtRri7ZFKSL6",
  "key39": "g7cxKHm9qGP4gmPTPXLc2w8nbcnnvnWRAYGkSYaT4Y6k95KX1bxr2mtHF9A7eMGuSVdXW4tSri7qTJwKTod9YXf"
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
