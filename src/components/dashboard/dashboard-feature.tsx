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
    "5NavRzZ6JQm4JwVpXCecCzRHnGE5gMQPkvJ7UuGbq9EFiQqL3W8Ai9HXsFnJfx91uYqnxGMiACQU4qswxq7efEqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p6zfXQTM363yoo2ti3sZYURS3uubJ9hS9Ync7gKGc4cP6iKefjSUKkYAxsGJMZ5YyXJWiDzzryqFRbeYDreZ6FY",
  "key1": "4eSf6hvm5mmvJf6cCPP2yhVyA8Mvwg58pvuXnhJekLqLzyWrg9BbEM1nPNJup2NdPauzRRfg2Y7SjbH531Lvm6Cp",
  "key2": "5iEYNNmvSizm6QUjximLPigUVBVka6ZuCucv6vrHuEJDyWrFPtBqk1MDXvcC4EXgWofxrTmYHH9kAj68J3wRcFDa",
  "key3": "3jtGu5V5S2ZZKfb7XPiNrJEC8VHM6njkvJ2hbRpLPRR5z27GEZFBAx2pbW9PrfoQGJxrWtPwrQU9E7zfaq6MPPCw",
  "key4": "5DiuRSS1RgfKTozJNgQycEZgZ3EVmGUGXDDFtrbf2wByVhpHjBLqr54NtUCvccGXrcxMc9E32QuzZCnLvERZur48",
  "key5": "2mXSuLTBmWFhjAUmEg7ihUJTdEimMMt3ZrQ7gtbWXopHwBAohD3DjGV2CqnigABpohmCJd699Tc481AV3EvhyYqL",
  "key6": "3rjq36sJGuPu31LLWs2Cy8NgxVMYYB61oKvJck12ziDS1Eg9aXcnBDGQMKBJoL5RmJQEYjHRVwDbtQ1UU1XHaJgq",
  "key7": "4zqdQG24g1X9BikmhBAKf2oMJAoZMsh6tjWSDhjR63ZFbGCKRhBAPkuv5Nw6BpYd6uWGsesKXyVdp9ymCP8jX1Ec",
  "key8": "2JCpzhGpZuLbMuX1GxLbEZW24EDKyNxkojNWQxd8dSmur8Vq6Y7Nq9t4DKy6BLM2VTfPkswVmeRF5zTAMG2hjzof",
  "key9": "4Wx5Rw1DX3ih6edmndttcZQXhfV9bBGj5i6AAyosJH2oxViT7c45KY7CMnZ4ubYNgXH5dzQk1Kax3DZiEqcTdqAL",
  "key10": "F6icTMj5cbMdhRkivAXdtJuffkzAsThwsXTdBPcs8e31niTdiV29edRsHVgyQnE8KYnCbk16dizxD3muo7dqqED",
  "key11": "4ogAQ5y1oxvhhnwXKV5SZ9iWSnjoQTfXBfQKN5sRDWDmkXpYDoDr6F6rMYdvcRT4HKB2BgX1V7Zg1oyoE793GL72",
  "key12": "29ipxH65GxQHdojX6X4Gpk5ZTNfdiS3d2p2enL3LVmE4GcWYb3WSv3Uw7bqEH3KhG3vQRgL3pGJpq43eu1WHJFbm",
  "key13": "2wiMtT6RuQdTZ5dv5iRS1wf1R6iWXRf5YJc9DXCrKMXt5M6UenMnbQQpPxX7zMj1NLwnFrx2ywcw95qrb6L9Bu3y",
  "key14": "Kv9m5ajnh8Tmp7HAXRDptoHiunU7A1ytyHZ8cf31QJtmZbG2yxsh5R3i1UP2yFSQAprdKCddMrkLwzJ5DJ47QFp",
  "key15": "45xSr7oquT8qJdYGZJq9TQQcyHbRFiJCk8qpL89x9uDokJkW4A4uAGVL52D8dxJgxkxbhXgREDZ3TWSXB9VyCKDU",
  "key16": "4y6ZtX3sLdY1PT7BDNFUcgkB6wmAaRJ9opKJcrKjg4YagL83tP9CcPBqQoFWhFxKqD4VJkLSHk3hY4YgLAh6KPun",
  "key17": "ukmwDFuPpm5gebKaFszWEYhpQojqYoqcvf3cUrrMrPi49GvrKTbxe3QkvTx33c6YoCazDzgn4dxCbq8rQL4uMVg",
  "key18": "4DADTQiYMdo2NrVT6mx1r7c9SkVUK8DKvVx4N7UkwCeZV8h7WmXa51gywyz8fNkG9M9sLKsdR1PkLBcN88JLCdRr",
  "key19": "2MAu8G6DEnL5es8vEHTj9vB2FH4f8Aj2PqyWyjjnEGYzwBN4Q5ocQE1RPK5FCbzN8vZitt7jesiXRpSiyJQXHec5",
  "key20": "5sQn1sc4tB1USBwXmbKDcwhffZ14caLFkYKMCTrKG6H3zPxh8KWrdq3KipUT1v7p5BuS79iC1vPzT3Rcrh9N7eXQ",
  "key21": "Pu4ZehkcGnvB26WJDL76fhym5Ce9w6xkUL58H3vvGkMHAWn3JKdwPyqLrK85boThRBhb5vYdJhHu6z94GJfDDdr",
  "key22": "3brr3ihSEqLGGZX6NV2mjTi6H9AREbBNAYuLCwHjuxL8YDXWoPdbTdhAUp9pgt25vH9VfPLtNypXhLMYpHpqS5L2",
  "key23": "4sw98i1XghcsC7Pw7SxnxeARjQkhDyCqVYcWG9pHUwxXL7yTJZpQkdkrt6wsKqDeZWpu8BaX9tj5LUafV2HJa9AJ",
  "key24": "34mXpHmTav61k72ycB3Rvw3dmaKzEtuzmEgaQYb4wK2iK14EvZQSEaypwNfYp5xVHX33tfsiUhEQzZW9zuGKgHg",
  "key25": "61RUZCVNpmyNeqtoqe4LB7aZCXGsvbWPBuLJpCEvME4ueDeMNRqsTmzeNWz66DHh3Xo3BDm5kH3EsiFxJduB5fnn",
  "key26": "25bkWWzF8Uyqq9RmBzdTvJPZiqdDARaothmYQpTaWpvCD23iF8m2VmDrizcyCzSLHdUi87mxK8MJN4zuxVXtQ8zV",
  "key27": "5DigUJfMQdS2EiJYuqk1KiZgSeUEXMbskZpJCrTvJJY5zBFpJYAeFrKNsmEJTjtYyMTqNa5tCUCv9boYwuHegyR2",
  "key28": "5srczUyTnVWjiox238svonea3TqmNdZLkb7jTc9U1QqmaF39NUYJGjbDFtoH2NXyxPJc5n9uU7E2bYyWCSt5GjXc",
  "key29": "346wAfGxdL3cdnBEQKLa9UUG7MnRHtXHqEZ2ACsaP4iLqxfq2zrpt4Gv9uZHnE3fXKK8zTgDoU93uYV8bsGB2PMv",
  "key30": "4E4eCykd2ssyr1c95yb56gvUrTmAabhJpe4KnmDJ5UWkYYz8uZQpB8283bSTcnQENY63NPBnibELCX61GHsvevrx",
  "key31": "3oeRrNh4RJLPmv3brWfzRgqWwR2f2oLDaiHTNxp6CKQw8r9wqcqmqmc3hr9acszv7JtzkP5X6qtUWdKAHpGNNG8t",
  "key32": "3CDhZKd6CNNprF6p91kJsj7hVF9py2c9dX8EoCfd1naSTPwACayN6esm58XTWdF3ooBwzbGJusGGLQ9UDz2KCdu7"
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
