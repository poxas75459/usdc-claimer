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
    "jDGWSv7XXt3xR4q457ERkJvXkdZgQD2vHuuBY2jdWgxayP87k5C54d6sQvcf6ZL4JjQ3iwhcZ1T5gCL15FYPvnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTAnDsNNDCxAsdLxKu9F7TeX5ZGfNtDAm2f2TaeH8xGh8shFY7p1JeFovtTXy6TooG6nSTHBTKc9nYuP39z67Ws",
  "key1": "rAGihFrPY5TKQtzVtWKKqtVeUPVUJUece76GNkHuLCgpU1eDDt3M6FWroSQgSXnXUENiZZdPw9sv6feZF5eFxYG",
  "key2": "45uSqHC4qmdjBtJNsBNQYVuktTGgnXJrc5nGsqQZkac1CW9fvMAUWMTXmLEAciwqvmZb471EYzEhRkFxRwvS6bz1",
  "key3": "5rcai9bRzFbJnjKrsAB8vKRemBmRxh46gs255o4V3G2tG6n3hHWcMCRv8ZMmPKFqzR6s7gpsyEuhdRFd6uY4LjUW",
  "key4": "2CaenSe14AzrWg6yCRusA6NYSXxDSsW1LxTJ4saDFBuimgAMqJRrMN6eKptdFXGrEVhfnPAZYCJY3aBt6C6BW6wo",
  "key5": "57d39LYga24Pqr6WDypXcapQX9mfrrFrbmXnBX5UM3X8XC1LBfoKJFox6t4CNmCR9gMGtQDQzQS8T5eBTvNaNTrD",
  "key6": "4XNDpx5ZJPF76YRU3vf5zx9WrDHiAp3TEpc8uVV8i5AYGdMgCjagqFk4zi3zUUEc8Xh11wFR8JqSqnoVaxmMpCwy",
  "key7": "3WDVXwWAjvTagxAQXyk31Hkbt3PApZqLmdtAfAk6GQenYNWhBnu1B6MWzLMgkeQvENTMKGEGpHKUQh4MhTbAUddg",
  "key8": "hsnocJb3vczAjDSrdqEdDQgqvrv2R6BbWCLx9bpdhgEFcYubQWojk47pS5qciPvZQxcUfnH3VZDKnAATVTYepUc",
  "key9": "4uPd5SLwDKQz9dQ7A7DSy8138EnCjvJe8kXYi6judBJsnoTR4MZJYDrKon1EVghs7oQHHdwHp3xfEu9ND5DuqXVV",
  "key10": "57bfpzurHutihE3D9qUQZVEDrMXtvNLFm42NK1RPiWnmWMc3mD2NEXrFVjxGQM3vmgARVdhZa47X6tkDjF9EZfRR",
  "key11": "49ENV4PzDe2tvH8STzgvi1AxZYdBBuqEvAavknWAt4FJuSQQoxwEhAA4D88PoBkkiHwnZ2yF9GqD9VkZdZtj4MQg",
  "key12": "o8LRw53gKXgpCk72ESZFhYZhRetKQPLKidctMU3pPSxAAtDMDexu2CA9VChpFE9M8hMBadDPSXkaxMWFwPNpnjx",
  "key13": "46vqQ11erBYqd5EynUBC2QyQbG2SugoC1sEoht3Wkv8BvgXenXiCSnTb7cCBTDmoLg9SRqtotA3PqGJWZofeqDU4",
  "key14": "2aHNs6kUkVXvYtGYS5qPUSJvRwhJ82mw6cqMUfjbcWKE3qQp8hLeWvvohzgc4yDKMX1VgAatdBD93CAb9CLgCyyC",
  "key15": "F5trTow9yTSv2BrhoS9TBAKWWDKeyEwQ3PAutdfAUE9ASdxcuqKnvx7BbjocEuj5XuUt4vUQmuWv3pbh57WNTKr",
  "key16": "5EadkLH7SQv4aT2LCYKutE6yZUvMKqi5uCwNoyGPgwvtJE5TbNpLJ7bQaGa78Rhzx6fcDP2ERX1Vs5rKJeoY7YQb",
  "key17": "2kEo7mNsxAKyzSQFrdMQhGEWjN54TjPmSLLZv76Vd4p8aBxb9JKjkag3xDaEjFUDgdvJ4jcdhtdVvYnZfVGA9i5w",
  "key18": "5JX95XH6DYS1Ggu2GYawieHZrsNCDURJvBvkoztFLRGuSuVMvVLD1QgvdAj49Zu3aNXwdpnRR7Y3fDXvtHPtpZuN",
  "key19": "4tpyBMmrbKKWAhTQg64g2pgwePvU9KZmSrNTN1fx2pgRRj7apR8YsfCxtJcfsjhTkyDcWJeGD2wLxuy1masnysG8",
  "key20": "4zg4yNH6QhtnfCEX8wCATxtHgVYZrgSZ1ANYdTz32sujuvziNxpiwwtXLqgnorpGJJuRR4CoTWQxrMKPisb4vcAD",
  "key21": "4o2Apx5Nuts4Rd2QdqjqUYGximN81aidnUU9YMKjZVo4fdhYNieGTzJKfa5BLrRQQruwNUoHZZQfjEk3x9SR6UNZ",
  "key22": "45upnYHw2mtnXnyyDuoBwwQoMtjU51YanRsR9Xvwk142x1rg14DtKV4PhJ2QpQeGpkc17mvSbnki6i7mwQGADRBi",
  "key23": "23XFk1JeCUJtXpyYkMpPoHMRcFrSse3Hu3nvf6Wr1shV6K5vGankBsf4wgxgAVCcBLH6U6gcZsttCTCfaqyt9FQD",
  "key24": "5RbP3AwVC626zqj37BMGuTKX5vm2gk3tqhyQgxeSS8YH6Y82VdswCaK4rkGaxVBwWmSLoBP5T1VoZvzYUMiYoxfB",
  "key25": "4gebvcdoSvAMhXHSJR3oYA1zNzFVVfiYrwz38oSrozD2x6J57EVdzxxY9HckvPqXu9A6tLxc8zKELNDe129vigsE"
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
