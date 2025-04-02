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
    "5SufwiyRXwDwnYFVURz5T79YQT45CZp7YNWWsAfZUqqMujbHT9pnrG52NAbpRngBpLB22eDMn3Y5oQzyJuV3Bv87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bwNaymNxY5ZSCHqr5FqxLQiXkWwDHuGR7G47x6xXgAfNsXtz5Q47q9dBFiGVKnF2Lp83tzksvNuP7nRhgePof9L",
  "key1": "3gcux7bT18BCeC5qjDLEwWksu6hpeBAFxrL6jKj5pMVKS94swXKXFVeu2LycaKEUJacKMUWS1Wwwnx1fmPMhg8oX",
  "key2": "4goZ2gaT7JhDpV38cYHnfdNrPtX6KjXDkwTgtgDAaN3kXbb8o72NS5KcHpgPWewEC2eytkfEVdZ74E1bLKQwr63v",
  "key3": "2b5Xgr46AMJcc7cr8GjctjayM8LUtXSCZjVGo4vESwg4qp6AP5rXKjZh2UNrfiBnYY4wztDZ8nMMxkT93Ze2dLMp",
  "key4": "5X4Hd7584rdcxjPqYwnbLFzxLLgy7xDaPSWTsHEowwvAmLppLXpUz4FNdyV43ea1j9PRCR6Z7QALdqSyPdWD9tzw",
  "key5": "31AeHtAcGJ826KxGyjJhed5Ej1rpinVvguT7MccmfnmfoTGQzvzUGU2RJJLsfj2kj1qUky4fgRGubyZQdAu1VmUz",
  "key6": "3Qq1Xj5D1mAAAU57XDaMzWT9JAknye7kE2Mom2z3ojhtAiSVM2CjbHuZjEpnxUDocHE3TyEpP4TqDu8N7ubCQUGD",
  "key7": "4pEU9zGtngEAgU2VZw3AyaDDtDeTqB9jdb6JptadkELptqS1Mth5gL6q6F1FhUhmnQk7Kz6wb8sX7kCrX3M1Noyy",
  "key8": "gSwkv6aRfA5Z7cYp6pwQkepgoiAzAcHJv1tbqudhWTKnYjNB7gDPStZdrBkL98Twogam8UXp4LzmDcjgDoSxBER",
  "key9": "38BS1jAQvdbs7qK71f7GrgwGVDxbxkLCVSm93ak4EVsjX5HYYTLLVbP4xCSWdFtRsMBzwhshYWqcUkLvPJ3iFQhk",
  "key10": "wYJopmraEA7rV93yGBG9Aw3tsyDK45xvqDg5VzEpJwVWDdHjN4XUPejNP1FeK1R4FFCgr7VKRXdzKtMThnAw3NQ",
  "key11": "3vuPaUMUweMduLbHxvofa6yuD9MjUzzZ3K3oiBBWhZmdeAPMroQkzSk6H5T1fXKzqt8n6vbpdKwVcH7HRDtaryc7",
  "key12": "3aUXVK48niM6xyecFK9nRw9uEQybHYANDpxDr9BDYk4JfxrpeHBR3Th4ZeSus7X1VJYNk3x8FZ6hqUnXSergXLUS",
  "key13": "3nK3pP9MFLgfJQVD8ACr2GGGHA5Bg16LXACyaJWVSotYfB4hgmhvdDe24Mx9qbiQD9VnqA3rtcfDNtV4bbHXee3p",
  "key14": "5KXdoqWWgURSwcEFF5cFMDCmN5DhnvjFxGvkootbP2fLyrjaofjPrWk7P6h2ZWf4mwUvX8CZ47nC2f2EehCVE8Pg",
  "key15": "4twUPnymbnDv3wGr5rYtnBGezaZ7cu19amt7crZoMs2U2JkU6uiMi9ZZbCyv5a5Px4VsVywSk5aDH41kKQXTHGqf",
  "key16": "42W7exZzrcuVm6VvSqdWcrLCm3vHYKmzEMTHTcR83tnxG5yna8qCEctKxaDbRXM3fzVnwVp9D47NBsji5ra1jPeU",
  "key17": "hUbcVxvaD41jM6u6QHHdvFpYLENgZWfJykUh7jkM2BoYYUKnnqmPuHTkhJGL32dYvgiB49ZVUCvigV9MkvJ2Aia",
  "key18": "3rsanqTRZQVxLKTPZBhowLq1GyyZ9juHBsnsJvxYJoQPqc5RaQDYSR1QS26wZsUrBdXxLgfhBBUb3NMU5uuM89nt",
  "key19": "3XokLK29cwaggYseaNm3tGtf3HrDsKBpBFKpY4jLn3iYrfBiPFxtABwsHq6Rq4dSbRBTmyS3U1Q6ZtDtyap8XPR5",
  "key20": "2xH6bvXDniZ98ocm3LxqXsPebJR9gLEvNHCDkjsJnYZ4MvGbXct1AEpXRb1qN3ncTB73445tBzZ8q87DZddHuxQ5",
  "key21": "5NXy7koq7BwpJg8mkwYYhwcge8m7oC7qnu8B53JvyBdkpJkzqTL6pKkU3HSk1YbpXLkKtWNaQ9Ghtx8rAmewPmxz",
  "key22": "2JAa7YDCzNLxCtq3NkdZKS9DiKLzLCHLj332yWJYLP9DbsQxFFkjn3bo5ToM5Us31tR2Ahw9q3qqCkXpfSKNLpni",
  "key23": "3emt4WxtfFjJDFY8hfrApQJ4yrhHbhwU41tbP695E3Cjt4VNwM8MMEwPN5c1PjbxR2sdyPS6kuoEvbMXNcPcQVR4",
  "key24": "4mcpM27Fq6g7k9d2VtFxzCNacaDAV5ZUb5fZSHsXWHRh6BQAdpxVAfQgJgrEFWkHfBTTZAHKQbQJHVTL4HrkBN6u",
  "key25": "4wHJqrxRvi6zVUZbUBBHFo3DECzWCqzNtNh6WxKHE6pbJNkpwm6FCb2kULbB6cALDgGNdXqA1YV844DV7aZVSLEe",
  "key26": "5V6VhDQC9CU7Jmg4sXBveRR3G7nEY11uhPoBehtH9F2YxPbDVjFCYQkzR4hW7QeJthtts7esdwL9crdNj27NyofR",
  "key27": "L3bVWeDubc9vZ6h46wi38sUWdd4H59o7agXD596t9ma1UDGNWt67QsKv8RAZWcjd87j3agNCZUWhAzcRpbqyiqP",
  "key28": "2rkVh2SvJrJFueyXmp2gxSSVgFnkvpnRtP1n9xFmQy8fz6UTY7e45zDNX19rXMPLvZ1DXC7xMrVxFhvwrf3wERbG"
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
