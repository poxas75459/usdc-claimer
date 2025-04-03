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
    "3SX2TMKjtDBEp3qx1669J1d16YcyXxNozLmNJZCGurmQSS2N5xtxo3b5DbNJgENCStf79nFsBNjJzPXKhL72Q1uY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Z34TSUjr2yXkbXCeZpECGDZBRzteeDHzgajDSAcDRcHSf79WKU92y4hNJhfepHYcqowtzPYpMycedhKCWP7mBY",
  "key1": "51W7Kdhuk5HrL4u66QmQtVLv9fEwnTcyzYfKAhp9p54LYkod7NqD1wUnsKkYqNPoy7VwwxTMMrC9x1WBqjwzTdp6",
  "key2": "8bG9KLpwLvoCp91mWNFvT47LakGScgQpRzsFUgj2xhVoq4ocDFXsgr74zVEG54P9mRdNrRHN3YwfaMcUZ23iUMt",
  "key3": "1M87J29kg2yKnNZX8eWoWrHFpodjNQnRQ3xw3GYfvfYAGgYE3JJyDdDPqFovJdRT4NakQgRCsmJV1UZL8y17o4C",
  "key4": "5arUN2NNzazXuDTHCqEHETkn4NwKmzx3ECf9yPZGoDe5ei3Jqp5SDJz4twNRUd8Za2RbbSgmmNjgJuaSzQ7vE2pW",
  "key5": "3kCAhm4pS9C3DqsYmW93YG9EWa9Rg8nbTLtkiEFyKUPDLUUrSNvAfLDb6wHgGo8jP5cDBADWRR4n2GodHbLRqgmi",
  "key6": "5uMujao3zpBaozDu2ppoJcrtQGHyzj1kvQ5vQagMTVfAs8sCgeitMNyEa7s9wt3Qb4WZm2KnZzDSvj8zMzdeaygn",
  "key7": "E53NMxQUbbYH44mokfyhMggdRWPQJLbwJeJUQDfRcfVH47WBKMoKNxPJVcBpxj8n6QjwVz8KhfUg13N2QW4FWwA",
  "key8": "5wSphG63VPMNZGW3eqmXCEzcA7XrSbEebuMCajD76QZ7PYcbDpCK2Yqx7HEX2xnmkgJEmdVcTyAVyGNmQz85RJLw",
  "key9": "2G1YQYDpUYk1TquxxeHv4Eizj1MNrKTRWApMS6w1hj7GYwYsJJ51trasGNUyNerGybriPa6XX7HL7mskJbkcW1jh",
  "key10": "W3vw8AV79GNgB4VMkk4FYjK2rRwePBHoTbULksPXNtA5X5cKWbJPKbZjgxwenUyyvLwYuqDS4EzYnRt6RfY1qyT",
  "key11": "4JYUNjBkWU3NCsuKH1fntU3SnkzoBk2myT1jC8wtLnY3MCR5NG9G2G6Tzxx2cBgH5kpLeNdjFYDSQVCxr47GSAnK",
  "key12": "3vBKG8jZj9kHDjYvoF4KnN7aY4PPVi1iw1DFkCLqZQS4Abd5mLqNs4bcgWxGouum6byrHSF9Hef2F8y1SgMci4EX",
  "key13": "63cTykuJQS8tzhEm3cdoNtuMMBnU2HPj5RAuwJAwqtmwJ3XrHnNnuaryZbTfo4kFn1DtyKSt4LfRxZ5Suu1BxtLF",
  "key14": "2ZtLa8uLUXShAXHD3DvXpp3j5zj4qUYedFTbj8pUBggQS4jwGPbYpDHL37ne5iaZwdvX1gpM5bQP3ub9Lq13a47",
  "key15": "5dvMLzvaq4CBUaWgArUbdfPap5PUwHbkKx9sjsTQi9L9YFrbNYWQME7bHuHTDyKdfER6A1qxEPbjPAfLUYjqQuz6",
  "key16": "2zhrZhf7TMpSfQkECnzMY8wtEhfT81FMUapjJKfn1nCRnpLqaRNcDKW5UomQhtxSYXNeb4ErxoZ4gH4vp1CYXBtg",
  "key17": "5vuM6Z55hcNFagGguxJsoTzQapULZZGYifU472R3hXfwcp6u1X3L1FzvJ6czjCwwaNGz5jYRskQvWzyERowcYRT7",
  "key18": "2YL4kQA7pWjp497EqrXchsuCQj5NiZnKfERAneaCW658a5tSX2oZsRghD6TAtVMwfKde6HaBKsPj9R5sJzcL3geq",
  "key19": "ksZMHFSu6QmrnDeS9tgaJHGUbN79eymyV7J8sDbwScNGa6TJSpnuBWU97jtPch77VaAZyBXzsDTs6HedsFnug2X",
  "key20": "3RkZCjyQU7D4NZZiRtTDhEgUhCHNvBaxMb6uM8FcuKamt3rb767LyDyVK2DztwYMaF6iXG7nx38kVWx5sjZaWbTo",
  "key21": "5gmdmNJAFoRAwQ7mbgPKyxfN67XrT8Heox5PNxLE8F3z59QmLwabdvELUQcMwgYfKz9zUjshumpTsssFkUK4v5rg",
  "key22": "e9o2cqqEszTUFhGDvSDE3c29VgwvNCVeaTRLiLRAW4n6u1kbRf39aoYXez7ffes7yd9WXomd8Sv9maRPEuMg1FB",
  "key23": "4Sc3LYKU2Upp73KFfAxiAcr3mCsYGeqh4VsmdayhwtB33aTxVAAe2J2bsQhuy8kX87aDgy2PdHtxoXFMXFUwvFWQ",
  "key24": "52ACqHzUpt2KF4z6nTUXu61EHzbrGtaC4cEuXG2RyhsZ4xUSjzHiZS92kqXySxTbTm41pfLkhizBd5dvtxgNvKbN",
  "key25": "5PSEtjtkzcoHbvKizddPRyJ3NUThzNeEJpRqDyFcDfxyQbmqxSXARFjNUtgRWzEaYLTtGkPb3KDcH3YpZVa9Pp2M",
  "key26": "yRoVqYcYMLCNZ4qcvpqmMzwWYefbWzJhqEwgz6hU6p9m8VrURXpWjrw5PnWLeWcJa4q1vzmGGX8jjLKJcmE6eW9",
  "key27": "51wQpwVhYWbzrYUacFRd9SEP6fZENGWChnnSbodxKA7tkcW9PsZDxbTpExxmUnJKCjKsk2Em1v6HrUSuMMhaMNiK",
  "key28": "3oGiAJNWLEr4Gc4DcizU78nCB4S1ZwvxoySq3r3Q4edntxN7W7dCiW1svyTRgxnJqsJxrzKWBf6eU3t2YWgbd2ux",
  "key29": "4MT9KWBQaY54Q3Nomc3hYAtBa9GAX7UETnGBfiYF5JjU3oyTQeqpD3PpqrtwTMxkgKYzoAeTBVU1jF2cr5MuG6xb",
  "key30": "5H4XN12ZGPZ4oFzwpTJCTz3ddoLtZGnGk2Z5SbsK3vkMYzKMZkCnWGQBS4UmyS5xfkRescrFsejnKVcQ6P7DBhVB"
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
