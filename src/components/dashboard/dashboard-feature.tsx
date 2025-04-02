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
    "5kAAc8zAS4CowF6de1UfQdooeVwqbofmSNbVvACRWP98s7KRR5idx2rgAx77mCUYVUXVw1ZHAyxJJ2kwiRwGAS16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FxyCJQ9U9h1PXHE3w3hSKevrT7qVEe6EE8aL9ACvJo62KgWjXL1JebZgdfHPgd9DLtuBnFBd4FCQJu33CFe3ESo",
  "key1": "Z8Toa7rxzevdqgP8rZE6ao77BrJ4is8AAG8tKJ83Zwhy3tvvxeSASDVMsGG8rxJ6RfNPdmELKxNXMgZKzXrrW3r",
  "key2": "5gBxkaWgBjZkFExmzJoTctJTDtuFZCyz7JEbhymGGHBJB8sgXkQHMQFAoohgec1G4ZujBtyHQ2aDwraaT93rZnNR",
  "key3": "2QjpyxWYm7vmYC6C6MwhWN5znNgxWtrGbYpmM7AskXxy8xAu4SFp7AoXQP87aiqDbzZKJg6Vcj9iW1gCB13TTLUQ",
  "key4": "4gnJiqdyxcjViYPzMpeKexs8kcpgBwzeuJJGy3uQjCPzyRjwEzznt6pTufUBoP4nc41z9bMVSscRBDrd1MQvQ2qV",
  "key5": "4ufRHzm6ztZN4Cz17pgm8jfhrXfmcgHt6MHwZqehXYenCc4WQFSacaPYZkerLrkLB1yqbaMRuBZDHbbpXSv3VSjY",
  "key6": "2ZPyRxDqV9Yx71EXqJbfu6tq8vhRpfvJkQjDt7jm3RpvCWtTz9FZ2c7mPXRuwjK47Xd1xSGKJ2Z4R9zZmXh6VvUW",
  "key7": "676dkJWNBXQvPNeEcBbjwYS6GniLM5NsoNAwCgtUGqe1DdmyH758xqJmjdBvW8Uxuf1qkZic1woWR5hg3deckxKC",
  "key8": "3oQjP2QaCy794RDREPcRpDwcChiERSYXtqLMi27J8peAB5bkpgRm8zZoCSbgQeyMg33E87GqdBSxGcwzDMCj2vg9",
  "key9": "4hQRVms6k97UTc2XeT8DcwfVsV45CnciKfwHv7opBn8KmEdMzGN9xwx6RdeG6pkEHPGMZD8VCa7eivLDHrQBH5Mu",
  "key10": "4c8iFoanAQXoDhZJF38ykGaoxyKqXj6o1GJR7pAcdPFH8sA65PjXXNoyKqEErU7iemgA68Tj6y6XiomYeDZPpHCc",
  "key11": "4LxUpYdoFP9wqzMLXw77FyGgRUD63hYcWSmZcKhZYvu54L6xVqoJPQ6xB4kGxdKK9CSm1tgTYVYYSXGbSQFy6nUz",
  "key12": "2dHHYvFoMHfWkqKZWifhawLgQYEiZMYyWVVubdnk2JHBTx1u5FadSsm4Qe61XQHyuxUih13sUnEXhCSnxL86mn3a",
  "key13": "5D6vYNjSTjNZwxLPH1zQ4XxLHv6Gn2H6293DvhvHzmMKGhp5D3xrVqpACEFoDcVk8JGjEWFHj5Eb8FyM9N9vH1Z",
  "key14": "44u5UwS11ijpwgnk4hGYenHK4P1dkkRBoZZZQu8ayFLdZHvS3V55QBDv2NAps6bnuTtw5aMw8badz4ziVJfs9FYh",
  "key15": "33wrEbbsro88c5AxiBp2CMHBMyDzfaGoZenizbvz64SdW437nSw7WhBoAkxg2NRS2paBVteAwct8RYwcTExexgiH",
  "key16": "4EbuY3kikvKHCxdTLjmY9MiaQPzewo7tsxbosxMaDRFCC3feh3ktDTNnfWDiEFPJtr755BueexwTNj2RjT81E5ki",
  "key17": "5MnWDk4SxpaDvNwxWQbFpBgjT9GGDhTfqoyLkQtzu1xLJnEWVoD37WknH5gp9k6ePNgXEm2pRGdnYuMjmfbVHr1P",
  "key18": "4pBydeuMLmeCZVJJz7ewcwo5XWpjf2dQwfJfy3bF18DxX4kMdcC3nk8VjiyHEUeDb3oRByfRw7enK429JvWUTNGC",
  "key19": "56RDkp8QRGezV5MWK8XsDcP4bfKhYb5ifXYTQb7vZzxgFkvttuMsSyJVJh6e451FTTM9nWys2J8TZhJySHu9QvpG",
  "key20": "2UUfvTAUxUXyv83igXqrvoTTvyUYWo7p2vbYEnJyY3SyficwRKGLv3rUmQYYUn5TU4W19RLtYfrWsCTPP9rJBpci",
  "key21": "32EtU66c6FP4SfywyyenEarjThpKrbKN84bv22MQeHq4hUDMnGW9M7r8bXBn3zAFh11MvRbhty3nLAnCW36CBJTE",
  "key22": "5W8Uis2xd35fQgRZqztioUM4oVkpHseyfX5s9h8vDvYkcYWGtqsS7PUXRnXDExX8wjrMsQLSzhxVQaD4NrRg6EuL",
  "key23": "2jrCWCJ4TtFLGoMo6x7Fdi5mFxBjwqokYBSg3C8STf7BEAekqgsMdpfXwwdSdNKCCDiPQmXQNT8wjMDj2WAvz5fc",
  "key24": "5avaXBS2EiSL6DCrS4KyHuySoAEPTMdSjkW4TpFiXDdZQhGp64KXwRDnXMWLe8u3RMrZwYy8m9F3B2anxk2qq89M",
  "key25": "27EGDFE5pVgdTyU2ZtY5uu6dX6tWZXeeS8qqvGcmMfBFR39ejKz94NYQaVYcvb6AAGwuoVuasJuKkMmh6kHXahnd",
  "key26": "5b1LTvzvbNG6FDbp8wekuZjZNgL8vZZT3otvEXpYiP1d494NVKaHeGHz4K6WfBoeoK9xtQSpgJoWx5JBzX15SWd8",
  "key27": "3GMHh1nXHuDauPTzNRwp7Xfvtc1kZKxvt1tf3iwE7U7NYH1ayPwczK3GQLxXMXUJ4JyAZFGZxRxjEjcxzph6UgVU",
  "key28": "2QWnzjYWTJPuR3rSCTeE7Lb6hk2rwy1YeFsQSocBHfmNXVf7EmWYRUKJfoVqqpvKzL7jwZ9gzgiFKi5uQDvb9usb",
  "key29": "5LPmVpLuN1w8aQFRgFC1UrCwYkLoJvTMHLrRqrVrxKpAwLDEirHjuGmfq1VkRoBV4Gfv9n8nwK2hUy9LN8D5wpRF"
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
