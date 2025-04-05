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
    "3z5Tw7fwA9aBT8UgHEQwv34cjXfwUFuRyWfWbTafnEDKedsLAs5eRKkoRToQziaDkoPzYL8SMLWSfUYYMCG79vKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hA9dF7NdZWkFeDF6bf8YugVXcPtW8P7NsjwSR6ECh6PQPPJwnvZ2mZyaVYVhgPNuP2hUAf4SzHJW6HBU5eC9trj",
  "key1": "S471CtKdpfvM366AzjQR9zxCeCmDvH22ssZQi5vi4q19hTAUyjErDMkhQFHkQHcmjJaNyshJCdAmD3wFpRYQnq7",
  "key2": "5Y8TmsxyfXvsE5JSBKZa1j8nmRyxDv3g6uoHMcbzTmHmLHSEY5SkNptdBJBYBkepanLYpQZ8g65yinGZipFtYAix",
  "key3": "2gH1DJuSadEQbT95EHVaECJtrWHxrzbp715dcGcYERT4tUFdW6ob5aPpKHAEsk3pttmuFJy8PErBrYtgVKdfhYRc",
  "key4": "KjtZqjqiCzBRf7AzgiYJHMusZxnnKjie9rjRPZqFBy7TcrdLiqFHoczR8ZivpnxGNjTU1s9JRrKrnvvgLmQBcDx",
  "key5": "VY9mBBcEDjArbrfoEVAN5mrGHGfGt8Vohn2CiQJRgVwooom6CnLiYBsFjAMgEXzjbNw2Ef3C4Ns7T8S2Gkg2SvH",
  "key6": "GBdvD1Uz5efBg6KLZYAE3zWbTEWHkMkbhGNMLd3Gk3BXAL7LAiiH8dhfy8KThcFnU8Y5Q9fky3r2xLDJY7Ax3PA",
  "key7": "3NSf56S5rYMDQjn3j63zo3x5y5uFGeoPNnJFoaLXByGmbuXruPZmKcXzsZ5gYRWxbtZs2pgHRNz73WGsc1d7hmLD",
  "key8": "jx29rgQqZ9fps4dRwAaKqoXarhnJte4hLPE25fb5XhFYh3HBAc5kD1hgkJBBuzwQse14bmM7qdVpxvgvoCRtEtn",
  "key9": "4jChKiWzfTZW6rScbBDbRyA567sKkimKSV5qNHLPUcgL9VJ1yraKPqLMU1aQq8HEE6NhT3q8AaBS5ECYo4PPQ4ef",
  "key10": "4kLRQGreywvRPS9eTHpH4xKxo59qRXzK61NY15aopH9eGTUFNQ8EgomkK87JqFvidUEDVZyMyGVhFVNGHBY5q6Aj",
  "key11": "4EEFjXahy3yh21jLEnVQMmpX47Pau9deQTia1jK3e2DPPQt97FG64WkrLeuepAXVDfJkAvbpy85MVkJeJme4RZBw",
  "key12": "22SXKehcRFKyvqLWAPxq1XRHFeVLAGMvS6FNj4W3Ab7oq78D3Xue4uG5yKZnay7LYBivJydidhbkp1ivL6VJkE4s",
  "key13": "4YYhLsUUPpt4C9xa2xAv5ycVeGoiMmb7vFBSkwKVYf7iVH8Nm6ys3L1t64LYiqvJoY9UuPQMr3KGJFEoAZQEdaDE",
  "key14": "2qfbKgWoqkXj2dPadCtELeiXzM9XSZiPKGYzLqKVYZZ8V9ka49HsmBEpLhPNP4VXgZFMd7fGV3JPQTzEjFd42Fro",
  "key15": "5YuRopew2YVvLPbxZf9z7CpmhtvNuvodafKukmQoDyqe8n4jPpUTQJhrcJJHJYVck354P4BbAUDbJ3z27FPbhEej",
  "key16": "5TC6sF1oAXP9cWv9ZBnz5NR7e34oM4ULDcMnjJndkXVMQ3Fgi3B4Jee4Fvcbyz4AN8apBQZJstajmQA9SGkdqMaZ",
  "key17": "QC8jtPDbXQgA7jsqm359euW4sn7bL2HpFBDQz8XB9EMbcym4P3Sw72VwTsTXqNAnc2bPR6TNhTPXGoeT4yWY4Qr",
  "key18": "3ksdrLR8S2GSRfk4dBRrYRRAt8BuA9xpXEw32xLgnnfbm8UW3NmxnxWBCjjxJtVVmHLsDdU2BiWpU5nCKpwEa7Pa",
  "key19": "XsNhksq4LcYoRrxfR7MUxtnJJX3mrtu89Mx2RRjMqcFo4GpzqUUWm6bbfhigtwm1mMvRpCs5XSptjfvoERvr4WV",
  "key20": "2LumoX73JGCCGfrPA6RReD3q13oaNZKrGevoE6cGHNLgjKQQcWugy4j62G84KxTxSDqamy2bvMUC4Z5anLqrwCqG",
  "key21": "3U8P1EEn22gjMARPyyVQ97wmHP8dPXbat1gzUKfFJ2k3tzwG417T4dgk6v4MMNVo7S9jMVMNvUXBmvGx5z7Gmqw1",
  "key22": "4Sak8s4PPywM6Zhh2j8Rj33y39mGZzcSiwKy585qPo5XQ9wVyuv12taX43VgjUmEZN6JNdUYvgBnzWNoDExyyNST",
  "key23": "41nbKjqDo6FrTJm9mrS4EDfc93PHYuNeKYqqA6a38AQkfmTZ2kbiR542C7haSGDovq6X4agm3gG5EkeUj55FbjMG",
  "key24": "3rit9fak1fMeDQy1nXFwSAW7Hr5NRA1Ef5npQEKMFt8E7rKm9rvCGGBpVmDDMHEP3mwFM8TPqJUJZnuBzZKBymPG",
  "key25": "DsGfHHxskkB6CEouUiQk7356AvUjgp2HkViyEasU4QtGQcx3Vwk2U44GemmhqiupQi7mZJVMZ3u46QE9uFte5DU",
  "key26": "44Lutc4vecJza4uiLceCDSZThh83zMSW8vvvh7vkfueFfdE2RDGL7rRZuabxjJbSqaJR4e58xzBjgsNj6m83vXuA",
  "key27": "2iftusihRXZ3W91jNWrZWJisU7CjjYPFrrRwU2s351XaF1j6bSG4JKNa89TeGVLPevdAXeuA8P9J41Uq8u5EJbvk",
  "key28": "23zAsSjGpyt8PcCiZeY7Bw5LLco1EMtArFK2gBrZ3uem3YSizxe7XoLLePiMGib8QMB4LtgDLhNXbcB4kKuHWgJS",
  "key29": "2YR9h5fpNHNtwBgnkweuFFQgyCnuRZcuVD4djknHQtUvL5DpSgMcKSjxdmfEJHJvYw4f6ABXLKfBJotB29qZBhY5"
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
