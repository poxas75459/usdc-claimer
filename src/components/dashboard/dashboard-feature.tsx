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
    "4v9h5nyz7EKG8Ht9Woz59LADS8egG1jsFy6TZMMWQdW1SM6Ez6o8xAWw9RhF8NnZrNuZsf7n9vMTDKKNUyicJ2fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PmGfj8277Qts75FvQW6HyeYj45ahFHxKvGoxhS9geErWgeS35t5mBxV7cAbsDFKpps1wpHk5bTt5DZJpwGaWsqZ",
  "key1": "vDVZrFeAZY8jqJr2BkC6RiemjKUYgbf3ik5mSy2mEVwXHt4RAax6FWHh7riKPvdvC8S8hzt6BSgsneKtZVju7YN",
  "key2": "3hazxSTrZZBfwT53xeVDfXydy72ibdiA9z4MJhn4p7adi6fNR5K63yyhwZP2KJp7B6XKwxuG4c1oBvpVK6NMBz7g",
  "key3": "9oLHK3N3yCfCzi6tGx8TjNPxa7osqiVmVhpasC39msx6WqyvCj7rr87wJjJCjEJqVb2PWLgYbV9E5cM21VAfZMW",
  "key4": "5d9jBv7DoXgaFJ6CU85yGBqdFWQJUd1qB3hm2JJQFv4Xpvg4jqSAeZ85uQDgB6wCK2gzUb4RB5JsjRdqds1SAAbE",
  "key5": "3d3JCBUnkzBFGAAZF4Q8NvyqgFpUuBeF41NyTh3Y5T5Ghd53S1R7RixmhNjAF6qJnuFZWTA4KUzZzHsTmkmYhT2Z",
  "key6": "2y23dSNgCP5ZN1nxt383s98ZpK9AjmP2D8tGVj9jEjitiDU24tPZzopNNAZ1Lj9sADuuaBtxQ94yiMweUD9A6qRu",
  "key7": "41i2eGjZ58ZiUEby9hR8rLQuL3kBwtGzNTEq1auWz3Zi5huRuPGJud2wiExEGcLnbS4Fy7QdPzxmKHeR8zvb9CN",
  "key8": "VKb4kwXd54hz8Cm6ZRCTsZknwXSBkSFGknCfW7rir7xHvyDnA2RWzMiFVmxnBYV2nRyHEmQiqKY82WNRG828U3V",
  "key9": "2PUsLB3hgojQ41Lb3EyYDWMCE8kKW42EETV4iQF2yAKLiHH9pDu6UQDjyTuFLFviTYCKCDsKq1kH9kPG2RwbBPQg",
  "key10": "3CTdjP6ozQdmV3RzhEGghNvbnwp7hLSHxVsPJPiEDfZWHpKqpu6qPWfVFV9fZ3yZLrZgPLqhrYY68w8z4Y3SJ4Bx",
  "key11": "KQqYvSu7dpfHWHmsv7pPCd8XCettp6zi9fnPZJfKNFY72kn8Ed9a6chTujd9y21WmB6Lm8bJAD4ebV95CasKcmN",
  "key12": "4PRYYVdWjSQGZ3EskPCxro7ceftMUptx7GAgqj4QGr3KNE7QAo6capZGqjgEABjVMV7UHV4jmZ11shovMWE5SZFx",
  "key13": "4PRQsxA7JvKDEP8kCASGvVWVgVGca3SYw7juhcUEuMjK9BfbgFTmd7Qo8gZU7SwjbQLnpVU81CKczPF9pYYh5hJc",
  "key14": "3CNeb5LcwTLFQoGrTDQaG5yY83aL6fqjcLq7Cc3XN8kRkqhxrZnoEiY7SM6c1Qq4ikhhm7JKB8hsS2WyQshjV4j8",
  "key15": "2Wte2WQFgdRqD1mgScPsCAEBDF6rvhMpJQexMsLtjXQjo5s2t2LbWy4MDaMKLPkFMdZoRBmYexv1GQFgBC1qar3R",
  "key16": "2bQnKnVYxNeBw9Md66csa78p7bQJ4dYniqgV3n6MZfSs7Tp9UjLxvrB6uVANvSkPxaw2eu7831fGPW86KMnPAFrj",
  "key17": "2yG8Du3eueHw4DAmiiYKLnW9dLWXkQgLNjTpe1PX4qYpM6ws2sGVFTNqoAzHqbFJbuTzQ2XAmyS8c6GHh5AHwFTX",
  "key18": "3u4rZQ5aEZezQ2jHpyqPFeWPNvpZQoQRATdopbQw6MyU4qaARUCrbiZ5JHACk7A9dzJL3QEh5LP7mB8LC2Afs2Dx",
  "key19": "7gjwmZF1x6sPo1BF2PPvUYGbd9xDTYemsPBfpoDXapkjJHSBMi9Cp3zxu8eB1iA9eDxq4J1VDLDTgM6ZYaRGUBo",
  "key20": "2t6sCz5RRWC2ULq1czuQjnHaY3Dk7Eb2GDsfLPTyWoiSKB7RE9dc9fxx3mYpwgFwyDKNRXxULacvEwWKo1LYgFDT",
  "key21": "aThjd9KwBMQhYDMXfaNvr4ro17TDEwCgX2BC3f65ZiWnKwq933xRU9TSTX4SnUFWCRESSKaLB8mYkNNRz5acUda",
  "key22": "5hPh7L86CqpDs3BsdcSBKt1bXQkNkF6n25ZyauwhWbKdtHX9SwbnqPjM6QsLYX315bQhMVFJy4SU2A4Qo1CFhp4W",
  "key23": "d4rHWibc7fX2vVMNDxN5YqkdLWZqU8SEceKFW7A4KphYrC98sjGLHFcrYYJii4DnG2DUeTVpDVH6MZganAzkdtd",
  "key24": "MHzRZ9fgwAXZXtXQQ2X29rQTFQ9g8uFHoGK3mu1Tjm8bZnnDEyQSegU1JahCZpb4FEcaroSjyznGL5y9ayjhwAH",
  "key25": "53j5ieETx91YSQjcYBPmEuxFVVtWkC9bbuWdBCBCHprTnQmDsur84xSGgXVgCDdPcdULPc9ygDPvvLYNTqDKK67y",
  "key26": "65PsnwfwSMjTGH4Moo5WWSU4HkSXM7uCcJ6GpX5HhpfvetmGkvsPED7BC5w6ZGyNAAAEWbeyHkxNSP9gkiJ8XT2E",
  "key27": "4Cazae14fLQu1eyxamJt3oNQth9Euc6wHTkEGW15hA8nTBiMRRXhMjMf1XEPnBBCEtRbcaHg8jZAbs7Dk2Bqu13q",
  "key28": "5QwvDaTpdHw2Qd2Ennzm6hvL3sHWzQNLPgptLCNHy9j8VsKUgf1jbk3z8AnNFcnEjBHnauvjJjtvPyKf1uB6Yagu",
  "key29": "3ZbfeGgqEy4QhLG1iZUF6Z5YwgX1jKXtAgG6rxWHzoE3eMN1G2QbqFGUrdV8bGhUEQsVKbmwCgmu7ouWbDiSZwWe",
  "key30": "8jauneHUKPQ5aDVEQyKSQoUiEHo9QJnvwwoLNg8S5yHpgo3toUYn3nCifJ6MZn4Sha7D3EuvHkpYkz9Sdz6RNct"
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
