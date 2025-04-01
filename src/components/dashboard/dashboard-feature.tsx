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
    "4VGTsusWqnM4E5j8CboM8cKTLMbm5u7wKauqJu8dMCqiMz3TVeGPUHGLFxburmbPGt6B8cTump6mimqndthHy35u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJkSJZZycpmKCmstwPVVVmHh7M85UCkd2TLptVLgjtz9Vo6kHa7JqiwnKsWGGcsR7jdG7AFv6ajG2uRTPVoP7BR",
  "key1": "3Jvpap6PVLg3uNE87WyfEkdsVPjyW2o1UAJ9JuEPefkBkprG61FwYoAkK9fGU1SzFB1h1A8b4V2AXRtxGVue5hug",
  "key2": "5LkRUmyjmQedWQMw6jHhwnJwYMnifo91QgsdpGfvvaJa7KAcAgZGHafJvjpKbL1T1cspZHBNCC1Qx93nnWAXbFGS",
  "key3": "2kZ7EgQb2E1fda2BaYNdcT4F6htjdzhrwTsdJ7ruGLL9VovxL5j3Sfr9APTZhJd15AKRbPqe76Vid28zaB7Z7GeL",
  "key4": "5QJjHntYqRACHuHyGQGhFpT9yVRQ4bdqCKzhFiCL54QfMYWq4QJN3DUqT2FMUAnjkB8NVNwVAPuy8dqVZ3yw8aYo",
  "key5": "3Y7JPEbHJddeeWi77ePVF28C8JqGWckKjpPGQ77f7bsxFqxdgxordkxDZiP8LrFDzuhujQg8NxeYckeUduHP6Aza",
  "key6": "5iy6U2G7NVJ69MADqnKYV3wpMv5BCqKp6LCunhq5oLxr6aEUbHhUVmCoV3mQMqZs9BnyHwR98sc61GC9yFGCxxSn",
  "key7": "4areSwJGPbj1FpqwSy2j6DdMDMsA94uDY1LmT5J4VKygsKCdzMw1uPMMikq2km7NwgsdSCtDipfET1P2g5UhoD71",
  "key8": "UfSCD7Ce6vYJyVzJanmW9bmq54S4bfh91Qt2jZguFY7UiFXEj87iLhGhXuzcTD7FVoPWqA6UDfKvSZ62bQEQU9P",
  "key9": "rkSpcxF2ozzK7qji7WToEuBVMLpZ2mLgZExTCm89ayHuhogZcGZLeSGWxbHKxNTzvVV9ADraEwj5ZcedkijXk92",
  "key10": "2nzjhLxu1fmBRYtXKn7y7bdANcXECcYdYZe3i4Lp4sEcy1G1aeWfbVkcYrqaiQugVSSWJ7rA7PKS3BCa8fJqE9RF",
  "key11": "2kUkrehBgE8uZvR2wLP6GMM2abXBJH77UdoRcTrWgn4MsDejhV2GNTthGoLELGwzEEDdCQHmwVqXUuYaGLf4RxWt",
  "key12": "4m6Pv8wjmz6EJxiyovUcSHwxe5RnedJ4Q1mSnrdxRAwM1PdDyxPHN2XH9GEFf5gNzE8M1sNegVgvLhBcGH9eykEJ",
  "key13": "67VUZvjXBHRpvKqr3uTNKFy38L7a9DpvJk6gDdnHmsG6tVvRy7mqx1j75o5SbwuUvm5fc1cqGFKDnzZCTXhm8uLR",
  "key14": "45SDGd7X5Q8winHQXJBsr1evQsWotqMSixqPip5niRCCtHBtfiL7e4tEWJBNgY5orJTTd86vwqNH5ioQsk1iBjPi",
  "key15": "3BARLL8MtJv6dcJWALzY8XvJdfTmMPc35Dd3fFzsTcXHcaQ4r6Ca6Z92MteBJJhxTVhxe2oRCdJxrHmBePZ6JBvR",
  "key16": "2sjhe9h9pqAZBC3zbXNLNLbomBoUzEKfVbaes2Lo1a5FjSSYgxuGvASySMvmmW82paw4SrJHXgy4rwDC3ADDxNZp",
  "key17": "2uWpNzgf8nyZftbg6aQyk7dKZRAJZVhzncP1KqgQAKv6tb92irSXf5jtCko8kB2bK8jvSVSyJVTNvXxNPZTM7G4H",
  "key18": "3mVq9tPJ8tzyUXHBKjdhis9T38VkBTa5zMkMTmRP6HfLsKsVcXqdxskmoFhR78sTPRzApzyHtffd2DrxMxpnDM1s",
  "key19": "2qKdcpJLx1Q6dMjoEieCRLAQE6Dxcn5g3Ar7xbL5cYKbcPQcQA3RzwdkJYc1KykrPo6Mxy557kq1LopXbVhpcWyB",
  "key20": "4EZG6hzyc2wha3APoTyxZ5g24qhB7HvDMn9UsVDxGWZEWtx8hkj3KjphPhXNtpR8eCSjRKwokHrUsgBwcDNB7JGv",
  "key21": "2MEtqsrNnu6WDupXC4LFQLW2a7jXKjW2jG71DeJScTWN7eDEsPYFiPnaN72tFWzVdJk95TSmMnnnoT12XUdPyw5",
  "key22": "33HJmhpBhYbzuP3RV6mTqQ2jDAHpnZVEsX2a8rsx7scv6GiAG85YqtVSQn9zjNYRJavfBuZAk6RwesLU1SS6RAP4",
  "key23": "3jNv2RHR27HVagEfaSwZkqgr5gHK9gkZGCyzfu1A1UbAgJLfgsWhgt9nuReuuYc9Q1gKVczY6ni6mi2WSBYBCDgg",
  "key24": "3vX4jJY3eHJGPE5iVyhhdwuWcE5PnDdmy4BnD1o8mcCydmKexuRZ5CM7D6QhoBiPZJDgcYcf7zDc1f4d3jUSkZSH",
  "key25": "3DTXdKDSbJnFLSngipqWm4KyXmdKijxBbopJtdVmRwerYEE2FE95njE9WNdvD5err65WEtNWJ21cLZF2FFifVZxW"
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
