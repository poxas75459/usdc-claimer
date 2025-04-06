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
    "WQnuFghFnN8EbgMsHcQf5gSYw6nuzv4hKZyqZchxBYQkme9TuXVTMMYit1t7q4To1dDxSmd6mkQf4btcSTJtD95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Usn76dBan3dQoMzmfqPRbXEpR9PZuPWNdwFUboEHGCwSnLpqjaC1eaKv1rqVGz5F8W3ZWxiPJ5LW7g1WhquPCF",
  "key1": "5yVJUZTkWVTXjLdMxaZWQcGT5GebcPaDkoCXg7TH3i4JwZLCQ5tVHKiMjLb9vP1NX7Ga9QesAXZ7CgJ1rZJMKC7j",
  "key2": "3eCcCCZUy1xiBCGshNR4XgYTGy64KVtiG7Eq1vXBLatwo3tMek22JtSHzoyatXZcHPA9XmVcwGGjx4WLVqCiD2dt",
  "key3": "3TbhvhRSG3MHuUoif7Zzk55XvYm8yd7twED4E89tMC9qmFofprU9q96ic2HEiH159b7o2HzZGeSmoJkRPkKXfe7B",
  "key4": "4HmJrWbSFbTxsUZbRSjX9ydS59x3AW5svP4EpC1YfeSaS75RCUau1QLZWUyuKYEunbd1MTe3g9AgH3KqZU7QjjXP",
  "key5": "5E2EwSu5SKdyDUNxTjKBE1B7RfqJM5TNL78Ph48SpS3GhDZViX9YogHG61xCeaAgisXHNoJf2DH2RZzM6GpGxzMD",
  "key6": "47Hs33tdscya7BtCocChXAQ2Ga76VFgBXouJhxN979rD1mEznqyUREZnsbKG7YpP9SGGxJMfUE4o4dFHJjkMaXgZ",
  "key7": "3rqVAQ8vzfJuCZxcKkq95JLtbPYCUZFgtQLC9WoqbQ1WWmvf9JEGqcxxysK3mMvudBgdjyqdJEPcMSRLozcq4jzL",
  "key8": "uA5R7NutpHwXuS8GPirtXaSdhPAfMydmz8eu7fQ16B7UW4eKbBpXyMveNV2KPpRd8uycyGuyKxACx6b9twv4K1e",
  "key9": "bUVNp2ZdXeUfTLY7jafwEtDBTnouxD5ju3NmTUY3zaRNcEpxUbj9HbM7rreNLthTP1piXnttSmqKpGyUWHw516u",
  "key10": "33Qqz3LDaahW4jwHkcs9Q7wNYX5mNeeTTyoL8mJaC9zLbdz2yAvB1cQvrz9N3sM3XY2ztxcgpE3EijZZ9w2MWdQj",
  "key11": "4yj7XEa9QAG9FMg1ygLuhvEcxQC8f3i9hphW3M14PjACYDkF2NudBWoJWtip2jqZAVksvhvfY5TDKBd4iqmg9cRm",
  "key12": "2qZBLiVUcjDdF1cSLkZW4LQ1qGBQizq6PPVBohfEusmpC68v3WkVRoPsvVZHYSe5ex1mLUUGSoboYZNw3G1jN1wi",
  "key13": "3j5d52HSeqjvTVGyPTp4MkBu4XxWiVNf2hxBaJjz2HaL73PqwTHGyS8BHddpz35ppEw8XB8cefn1ArqE3K37ZJHx",
  "key14": "3yg2kZVURw9rX5vbbabTk7Nc47fmyX8teuJMjGzdWYQPgKEKQxayiXCXWJ4VUmVNiW4SzzwN6nnsTzAwU2Sfk2yQ",
  "key15": "4aq1zixPXBiTrWut8MbCeiPAbZDLnNsEpK4knAC8DPin3wxfTfE6CqqSFzyZBC4tgRLbNwxtRMNoTfPnMh1kRd9s",
  "key16": "5XaFqDEyobg3p7AHkKXvh4zYVUh2HAAz3aPN6e8m8Kp9HWYYP8731iUTqwiktTKp3BxfcSys8SrzRLFTRcdB6UqQ",
  "key17": "51Krt7UkQJSPAQvArdLtWR58DwBB5crkQmnhGKD54FTwea44Kjc9W45o2KVjHByLGxRRPKWMistT3jP9dPnHWw4a",
  "key18": "dDcnyKn7NMt9u6x7zZWgCgLp5diNUWos3QeqaKjSYBEHTVMdsb4E5nCFZyQT12FkHUYgce9gKMZ26E5Sm4Sjpk9",
  "key19": "5r8dTAQd8M94FqrFGcV9DmkpbiakB8Prswr3kxrPcgEm2Haq59Av2iBw1HoZAsntQ7Wujvavi7kBdrqLXG7XgbBp",
  "key20": "66pYg53ktXQcCrwtf4FebPPeeCruwTyGjmKh2iWfwMs7xLfn4dpThqMdXfSpr8dbg45rXfasBwHHxpQNK6DTPbqc",
  "key21": "3LtRRGjcHeXjzkND8vQBmmsMXXK6YSdGKcUqWbzvBipCYFGAQLDSGSXHdQL1N1dgB2ZLfbDWJtEqSZPYH2TXJRY3",
  "key22": "56KVmGd7amfRUohMx2rZmkarA4FGPQxLizwTCXPxrDWEa5mKq24jrBSirQCdFRyiBGWz8zKFwbBtu8iF5dUYz8wV",
  "key23": "3HUxZZ61wbTVYqBi1fYhN71oXRf6vXSnHS1gnHiAtsRNHNpcAqqmyPTbuxZnahtSr5R8MT5VNbNRmyzNwK1HutX5",
  "key24": "2QHmbU2cJ3xeVeaNUxe3wZts3fFfW2NwgjigU3jLPJ2aJZaUL1NF2ABAWceTSPPWjvjv5D76sdY7SkzRt7defrsb",
  "key25": "4FE7wJKPrrSj1nBsqdp6b24ADZ56mnqJSo5iZ7akPAEKAhT9Q39cMQx9y4xbAnRg7KfNRtDKttuN7WsG2MEfbvJ2",
  "key26": "2kDvS1ZpPLwmjRY3mBiDRXNdBbLyNjp6mwwLzkTGi4vYVHBShjA7drwF5kBbpAKfdc8p817PCdt3LFtBNo9PAD99"
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
