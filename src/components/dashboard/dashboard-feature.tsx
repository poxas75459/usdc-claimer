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
    "2UkdK1dTfnCmK1ZzwAt2DWyQm9JQed8AVsznEqxrDcapUARKraCXEe7uAQtwkpSUuENMZvhzHaTgaseameLvPPp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jbLwjZR9ZmuGd6NerVgBL3qnT8pmhBP8wzEZYMnBYUFhA74WmhGB7cKShSjWavWRT8sQnDSnFHcAWbPbEiYA6Yw",
  "key1": "4oF348CPWSdVJhuYoC57GHfZb4hDaSCR9MzZ3T3pARuarW8rNHjcE7KN8FoZTvfibLGLYySfuopGFqoBKvJZEuBC",
  "key2": "5A9LuCSRaWrZKJmogP4GpB9mMtwjRGsDgKJLMCs2YPdGE6bS5NUeri9e5wFJU9eJeRdrbpeCmdH7ZzjSgiN9VNGY",
  "key3": "4KQfxrmxaBVwc5K9AqMeB8BaiwLQgSe7q95YcrrNxPxhtRuyjAGrnbgfMKwiJr7GFLb4HSfh5h83zzGD7U6tqiAR",
  "key4": "4gYwqRAorFpDbLEyzBWpxf4Gz44ijEF9eMUvNDaoPKocBsUD2iqreFmrCaG9mS2iCuyAnWJL24GxUZxy1baPQxfM",
  "key5": "44N8QTqXJKLzAUJaUk4k1mzDUJ6jP8Fn5U4CoKsc73Hk1hq3w5CW7Em11mAPnsPZ7Ev81SrZ5qWkjWSTxBLAWYye",
  "key6": "3pyvkNh8FY329QUo1GECT4zjFdZTacYvJLxxadSDCCNxa4EcjAGTsbM6zcx5dttRVgFhYB8NSXhVswtXH63x8fFZ",
  "key7": "3Mcixa3dHNVck3LibhZgajMjqr1b2Cg2Yk2VmoWxynjHDgTWq8d23HwiQTKUmNG7dvn66AfYQyRytC4sa1w7rko7",
  "key8": "4DeY5pZ5D37HbBDcqHHP5xJUAebkXZvWjYgUXNNV7icEuh6eiZNJv3sZTLWeWtiwZo8rsvjiBTNekA6vxmgvgSdD",
  "key9": "4ds9M1pL8sw3JKhLgZ82GPX2G5FyU4n7RfZa9A5pqxf7RPwQWc7kTq1hmoJCD1MozTAaTHsZWVHvX9kbtuv5FEKE",
  "key10": "V7BTUXd4oFgrX8EkjMMKfYGVjyLhBwzejnQZz8ghzM9w9jhLwxk6QCN2A9CuQeqEeWEEeZ6AuqhAe7MLcoU8Ejf",
  "key11": "5xvucpj8F6SMDi6Po3Pe3T3GxwQ3pQcEasnb1wqF3sPGQbYAndT9tX49LtHppPeoxgaam6MsnbiPhBsdUcbh7TFp",
  "key12": "3rxhR6MTXGnHHP1NkrADSjHuhE4TePhjd83hoEFdsC7Wf7ybW9fyQEErsdhuq67GzMJffVQYiwhXwZdyvJTEhitc",
  "key13": "2EQJefq5afaz88WrVXsUnTezLMCGXNZUFiRuZuUT1psjdXF4yhdDkmpGkPgdwPuionUBkU59STANACouDqXhtns6",
  "key14": "DiiXpHuUSWjBRst9rAukquHbmmFKehRXQMDCxbJgN15sSfnyQD2weZGzqyFnddjePHUQkuRL2As6zrVE3zXxJJf",
  "key15": "Hy6zHfAH5y16rh6WJYWFrWFjY5XQ2SGePMhWFdMgstS8P8aZjGQbVQYVSk9FByLQP37q9bZ7dt1tKgoTrGTVNM8",
  "key16": "39HHAdCMGsxPGTsf2pXE54MzrhEmQ468QKeBmUecy12wuKhCTeqcVwjsQ2L2iLheJu2jezRgxbbmHHNjCMvBPimT",
  "key17": "2NPCp6ee1LdCsA6ZmBThXBgWvZujEmBhg6iZJiFwpaWBwSZ4dfXEo46pHyRjroyESxNp3pnbZFDw1MECnAMy7PY4",
  "key18": "4ECSh8DBsFvfF4ZnYZ22KgsECHgarreHib9cJxnBK7Fc4YqFPGGNEP6XJ18QTZinjN9562PVDP18NUm4ZEZchaCs",
  "key19": "2skntWDizcHpTBAAQjztYhYcNZnqvYqcDMX6Rvu73hghh8whGwp2mm62NjmuDktAE2QXxSe6FKr5MEwToqgTdVcP",
  "key20": "5YyTz3Bfy2t8eybUqivEKy72ri551sv1gL6SC8N8z1cRPT3fryhsKm3YwtiMtv5boji5YAegD6sdDouxPwpLct1N",
  "key21": "3jtNUyXGBkSUDBtcshK3FFnEzKNdRfWpWgRSozms9RS9WaxpPTcLiiKw4c1s66UGj63LaqNnqYbSXzXJsEj9ij7F",
  "key22": "5hgYBLgYj8VgdWtqzWYFu4Qh9UQYQSggYWkREhYsheHc2e27uoQSmWdJGJ4hbfdoLzbpjyM2r7H2YjyE8yxc58vC",
  "key23": "2C4hUv8DzWHgdTCykusUjSkrfGXK87Xbt5qN2zF1TQZhgzVd6Wh1QKq6AfNUZyGZKj4FmummKFzF6PRM5VmTGqw3",
  "key24": "3Dc7db6jXFoGoA114Z6AaL1chEpoU41L3zQERNzEdsKL4GrHs43L8v9NPayE9yncVerpzhgHLYy1ydHgRCPB3ap1",
  "key25": "fiusQHr51xBBkQF7QABYXaMT9DRWnVvL55Ph7efUWUhgkE4oKN5dSK5QkbUVW6mboHvjEVgcmVPw12CPX9puRfz",
  "key26": "39eSbve5GqNyPwHvt7LL6mxys2tGvSMwohd4XmoEFf9rMr6FoWsWP2QpE2m1jbUpiVrcopdQMDQivZVKeoZScNLQ",
  "key27": "43KQM8mZTnuTTAA2RV3rA3wHduJVmd5ptv6iFNwfRXsb8YZQq4ZGe3ZcHpLBuunkY4MbFhQ5vN896aNKx6afzegv",
  "key28": "2z1efmLdPct2AwU6GXvZEuba2A4kh3TcgEW8iVHxV43uJeCeVKte2g45HAWCh3XzuHZdQ5muuSEhoBzCSYiekbks",
  "key29": "xZBgPni5n9jEkTKstxL77NNEQsJ43b2BsCgfcTmJiF88AGQpDkmuJb6LHv1ie21nFqhvmEpBa3GiD7J7mn4c9dX",
  "key30": "Ks1wibe9oWF5o1Cqj49oQSVk6BfEahYDosaFCSkwahzxYww3LQFYdQjt5BVTi8H6Vk4Ehpk9fuk8F3b65P2SpK8",
  "key31": "4nDfLPxLF7NXWVwfGKGomLqou92t9qoYMc4VvbH9TXN9MBeHqth9hcahhQcTL87pHQWxuCVT5NYVcmHDP4j9W3fd"
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
