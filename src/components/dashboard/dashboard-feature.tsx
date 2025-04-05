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
    "mdN2xT5BaHzm53jUShWWn3eKnr7jB7VHBSg3jEGLfu9jYr2m6YB3LHw6VTvtJ28WMQNFhv8CSPhn6uBYN4JMqF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QVDq8NP3MFvQvB2q1tbxBtQeW1BPeon4wurF9sFVetMx1Sckpq2ir89uoWmHquytshHTaSU9cNMNvnnniwz5kT3",
  "key1": "4zw3Pte7xTaDxPKacH9eE6HCMH4NkXzAtYvK9FTbdgdv5FVZmyFo4JEvU2bbYXrcTuoCqpmZVBoT1RoES4cFwcbi",
  "key2": "5neLzSe5UP2wLycjK5Rr49WRqEYCWWLPig419Uj41X8tnkQ8kJvHbKXcNE5NXemkCNGrdptZc3NvGdfi6XFcYj5t",
  "key3": "5CkhwjzimiZRLMVnJ9ssG6q2GuWoGdLBvXLmYAVy7Qbmcc74Xm5DuzTLbaDs8KqfwN4ptMinFt4s2n5sn1YsaXoB",
  "key4": "cFq7YGb2NiYf4Q4VZfLGre5wskk5hY2cjehdispAfCfpY7EU3P63aSQLwNjDXRd1iRs5jXCNBzHABGMZXDN1Fba",
  "key5": "3u5QwiqynndaUhsUqVyYfyP7L6mgchMjGHnT6Dg5cSncvoqnKAaC1N4BhYJzHvxZtR2wyskiz1wyHcWCtDBRRr1f",
  "key6": "4BN2nizrQ78f68mY5LzfU9GQioWBVFoQTZ9QmZHE4WhbgKieecB7p3D9tyCgpskyFDeYYtTCqBtn6bReMCzZZpW1",
  "key7": "22KnZ8b3fSMXFqYm29a3QBLMSjar1VtQvEUxwfji81arxpjw3UxVoHTEHMGZT3TdH4gaWqFSdM3aQv4BURhdYgcY",
  "key8": "63CMNC7VgsMuVwZTvmt4dLuTcwchtyftU7m4SKt8ej7aLJeoShQBMG2AMp1fMCwdaLv93TnFdBKAwRjnQAcihwLT",
  "key9": "2jA4yQ9oVy9rpGp2xi8o1C1euo3CZPBkdhVgo2W4rTa2HQn8yfz2PqbdE2fMuDxuQ6tKbanK49jmuWasQJShhv6Y",
  "key10": "59JTMqZ5R3rpnSfRHQmgcooqbjSQhCs4mQvUBhH7BUyy3kTyP9ZAYjmJGv8EtM8fu4kdMqpK9UWYUxfdHg5rZnVh",
  "key11": "3Gj388u2RwBi7JkAcZsTZRifpaWh3GYx8KqDZHYoAkc9ErYao74rz42pWgno5sTf4bTVF7QAmjpoHvqe3iTMpMkQ",
  "key12": "3Pm6BVUoaTfvVmEaiLBMQPidaVppSsvqwLvYvx7kYuTuDpXzpgEbrz6DLfBkbfDqoPcN21XCHhZheTnwkNEnP6FY",
  "key13": "5qLWhaepwN1Abu256hTTnP8tcKrBxBTQaQmZdjhZr93VjTJVjYwusnfydANtGmPpPo5bcHRYRQJg3Mpg4gDH7tpo",
  "key14": "3YbmyvL5SUiwBXHDP2q9BztspgUczuw1noC8k6Jk7UwBdnpmNX1VUSzHxZWGzF2krcZha2YJd7Ves5QPyMXF3uz6",
  "key15": "5ywzMeBdp6cfR25tiVuiwBD65kWxkgDZJWFk3BrLK6faoocr7waRtEETNW3YTPqmQTHWdp2iWhkVRzHGLmWJguSK",
  "key16": "2iRhQUCoczjL1Jd3HEeAPJgkqWW26oWxfUfPx8F8X3cJh64QZi1RbxYvwuHZtYi64MN135orjxdg4ZC7Mj3cSe2m",
  "key17": "5PtzDqCfodZE9ZCkyCAZdpqDgp7SYLVqKJ765KZ93hxejVxLZkPhThWDbGXEoLYeYHZYYW2dPekAeZDh3WNafPVU",
  "key18": "2PcLdog72j4682juJXGHDPLgQ5BRRzkZQ31FVrmwTdzS5xTCe9P7Pke7FVE5CbaRBwPJsGjfvV9gFkqGNqVPc94T",
  "key19": "2nA45NAYAfuCUBmZzTC1VQfJUXdGXYS81RCYJfMZmF1aETtyTc7LEd835dnULFpbPhagYsGZHZ5Xm8yDzBrWVErS",
  "key20": "3rEbfZbn76wKJNZAPdfRJtqmkEmdG2EbfkU4pYugXvMBoTAQCo49LTWy1ag2s5ksPbK2JSA2XmQvk91Mg96ddUTv",
  "key21": "3aVmPN6xbi4Gckkx2k71wqazBmWBHt4vmTPtdG73361bkf8GQoVN58wgtWbpnfsRDH8nLLvtkeX6Xg8TvdN9TNME",
  "key22": "3URUmGYnGgtSRJbcTqAFaQz12Ro4di95ahCDSWGbjzY6LSYaUqDojXdsH6J7jQuVnmyg6goCDsMzKN8W2jsNZGVk",
  "key23": "5FrmpsCyZf7fTd2iJrjeJQe4nyywRr17CAmMQNKVRhuf5YSKVPABrJG3tEm9xv7t1kixNWcRHEo9kVvTprBxY4HV",
  "key24": "45M8RsFccuYbk5CA8fzs1WuBsuQdEJFp4MvvdcMe9WsxKamqTDPz19riJjpRSNmGVqnn6nhniP97P5DPNH7SmrtX",
  "key25": "4TGpm6LA1frf8GaZRoSQC6aqwS4cNz1qbAcWYkKjZSZTZ8oT7UAVfkvSDTS8PFUFvX3QvEPHspYtsLfCPv3daFeB",
  "key26": "2wRGkQeKXkUBDiJWLBUy5X9vPjxrTtY1nrqwH3DNzQz6CYkp5qpKy3DGmwfAuGtm6deuxf6KtWHMQacu95phcBju",
  "key27": "5DRADf47ehJmitm9JAo6BGMVb6beKvDeVDe9ZDQJ16pcyZqf8JrCVk9db4H5JZ2KCg3789aF36fGbJ89Ruf7TPKP",
  "key28": "Pnz9QexusFQJeDrREQcYGpcCzaGEccd281rEXsbCd9xS8w5xvRfTt9rihhqxrPwHroWvCpybUeyJFb4VUZieaxX",
  "key29": "4k2wyYGaiZmhMqatrdbLaVke9HCZcy3ox88vpRveXiANhU6B24T2iXZYisGUCcH6yo8PdZhUvLUGzyxe3JeK4dne",
  "key30": "2fVNRLjGL7QGi7HJ4UvhvafiSgti71Yn3aJHJKvS8TMsWmJfwnJR8stERV8bFuQtUSnSHRai62wukapmwkXe5mE2"
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
