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
    "HWXwow273zGrMn2dqNTYLWWGW7bZJSWMAhjuqavwnDK8GdEo7jtBpoxTUDzvT9L1c3XShRYRBfzSYfjYgdYodhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wVTPbrKiiSV4LhfcY3vsEcVNEikYqdQY8oBABfvPJTfiXsorL8u9PifUeUmeD42Hrk2UdpQK3VcVB6H9iWx1W28",
  "key1": "2WbJWzfcq9sNtn2n32Uu3m4QBJMAAvqGfoL8kxeex1N7u1EuE9pDeVitvUM9HJ3QQnxMjwsgu1Fo5KsTNcbEU3NQ",
  "key2": "2iFo5aVx2CgD6MVivg7NjFf3QRZNvzhubhqdBZfb184XDjBCA8J4o1XJz9qvfphXBqCbLgzqdSTs5U9WhbARuqJY",
  "key3": "EB5A19qqMMmsAACtc23xKpBQUpDCtMCzKcAfhCRQbMc9sjY5BH5jzDqdKXP2VbwhXC5Aud6Vy4gNJ5hCjxYVV13",
  "key4": "37PLCVpV6rsgWNSzgNbVAjvzqPXWWcTH9z9XB6eYowv8yiTXLS9cyLMoHmwh7D7timis3n29LR91Xbeq97Qtau5i",
  "key5": "3VDR5yKGjHfQHKhTUEKG9DLn4wykuhBhL3C1fj82n8CPUs5nJ5bs6KtBXvASxQ1EWFF9AXhkam3y3HqCYwrZEyTT",
  "key6": "4XL4k1f8EKiAiR4GRAbkyQcRm4LsvoG6C4KUDVNHW23Ez7GZ3nMDXJQ8D6p7Grz4ybsHtxEWC4WN5BcT1RrrQe2T",
  "key7": "2mb98iQDtQMhJAdmjfHXry82Wfh4TDzJEifLqLULJKeJHK8ALchiR4FjJm3kpq6GomtxCU7ccX62SLZqJYy6zwpK",
  "key8": "c9DTN5PVHNBt6E7uURcK5opoeYKqAZvdxDnmhCGKbT6SWJ8orFZLSrb9u5CW37prQdfVmVWfsrc5REiHTnrT5d8",
  "key9": "2bQAJYpCDwrmXpkZRmrFzo6FFC3BZFdYMwy2fdCo5rJQgEZnuwotiUXLhbqnXunb6afZGrxPUnt1TeBVvJ7M2CFQ",
  "key10": "31Lg9DmnbUAeMqYdEpGj5DMdQLPzUX5YB3JzPTexxNHtuVGqKPzYQpi2M74aMwBVSt6EjQM1TznZ9FDW7xbaRAbh",
  "key11": "5AYqRtGF2ZHkP5FF2hBejq2B8xGy2MyTZRzWohoJTRURiWRv7dbxC9kQBAxEe7zrTd7PtSw1qWRktyXfQoZWE3Bw",
  "key12": "2tQae2n4Vdp8Kf2Q63peAjnxUcZo6VXS15pz3UkZmfdZie3nUbiwPdz48Jo6moPXwp75vBbVXDjBHCi5A2MViFgH",
  "key13": "5P22xafc5NsosekA8zcs83tUJTGmXxXb8gSfhgZqJ48m9n9BDjEXV5iKkipwJQVRxJ6G3PsEoDVF5NQo16PSqV2Q",
  "key14": "5w52b67pzioAHd9sVEDrarEAieDiMx4SkzET9YWXhgtm4rVLLnLnSJMqb7pMZdxizZ37r2SMbs3WkGTP9vFff59v",
  "key15": "3KjoQCEfKduaAzbzK74HFwkXQCnF5QjHLjGYP4Njbkr2Z4vjTpi6Wa7WepY1HCL3QFKrNrLk3Wga1SgdKrmAfkMb",
  "key16": "5S1JGNWjkxRmjDwtGzi4bUUAE1ufWQtYY96mngFcNAosF64iyuK1o3vEgHrKBUFAkSzRcPcZXtJrUSYvEKx8FYyo",
  "key17": "3n1BJqBfMPK2EW4SFUfMrgdVKX3ky1qyjU96TYz4EGeGKN6mgjzzeKtW9E6Fk3TGtKL37PrYHhuEBX8CAzDDZHpv",
  "key18": "etzav7vKCLBvamQJZTSfZ7JT9ot46NKExk3SnbbHLwNLQid23QUS527398dTHyd2c3kpHbFZGGBkp7uvhPBgya1",
  "key19": "3AwgVbGS8dTsnzX5ydwv233BAHRTv8UEPkjdgE7WyYyNDQ1wT7YPDG9DwqXtjxr81tiC3Vr2npdF5wzn22jxUoBu",
  "key20": "is3H1S1FY3cAN2mrZBgg3oCqLwv41749Pkn7N1srgWmoZtKerU7rnYe4fPPAEscAirKhM59fmd5Bx3SF8PYmtSN",
  "key21": "3pS9759mkbxAeFBEj3YDLZuzrcpP1bbbyvQWsDTMhikexUVJzxi1G9SVqHD6EypomgwoVtgJbFMnFowcuEdGUcvK",
  "key22": "Tf5CCCHtj17vG4RBTYNyY6g1UyS6Vj3mQwc7Tz9bKDAnkMSFjV1JL7td3QoGYJsHW39nPa5wUBXtYSy53pDrakx",
  "key23": "rYYtAresQBDh3ck4kiwa3ayKzUGsJvfAJSTQH8zVxcB8u6qqZ2BDnVq1EfxTJz89yxykuP4CpgvdMM7tbS9GiSq",
  "key24": "3WcoccDTvUY4x1e5gSZvansvwQzRBpHWzSS6dN4XP4F6thC1iSriiMDboSyA3iZ5jRaxDB1arCYq8THd3pNjBiGB"
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
