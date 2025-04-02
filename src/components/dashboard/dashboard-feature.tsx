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
    "Mx34fqVk3Xc7nuC8uZhx7bgSjK9QXysRzfSw96UKN7vXNSJVyKKmW9AtHfLbVnxkmAyuVtiDERarwHhfqZFvay5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AsXVydq8nuXhVzzAYFePxZEsa2d3cpV4YQozfctPKHhmcQX4Pnm4nyhzm9mUkSqVxaFuumE73a3JEEUveDi3Zoz",
  "key1": "MRe32tXUMx9F2HyWwyyXJdV8UKidsF7ENhdq4Fu66WjhPLCSF7gT7XRxYZzURG1RwoXcCrEnb3GrhMLUVv4bcX6",
  "key2": "4HR2GFbsYjQnTsmuzZH7Hpq6sYmbtZ568y4TzwiDtfsq816b5hLsEmmgCbBAWGjgKfq3kat3rSMLZhY3C2MfR4Q2",
  "key3": "2iZbXky3p3vvZpR1oWSbk7G394oqJCbydGTiWS4feREWDyKh7pzTSvdyEvivBMuzm5hiBruV8ut2bNEWoz6CEgW4",
  "key4": "34vP6Lc6Nna9wTRpAQABenjEQqqPDizFHZWbnkn12nTYpYCdoqwQy4URFwuA79Zg3FCthzrpXbkM1n1WhXRX37xW",
  "key5": "4JgCkbErcDhX4A72vK182AJX62XAeNK7vLM2hnDSBAD9DijMZLx1bMkf4Wf6qC6MzHN1DLgbrCMGq9j9ENgHEmQK",
  "key6": "2R67nMxvpF6ikWqm28AZUH6oKSxJKgBFWJy7ePyHmf4v7xwzm2iDngvHKXmDSCjRkCphh7hAmN8RWFbZBMfL9B96",
  "key7": "wrHDFemksSkkNBHNi61QiX32Wm5KxapmfzVfoVVNGLn7ggfanuxuFZgY7SjoU8BZ3yWBQP6bmVjsT29ReLK5tKo",
  "key8": "364hpH7FiWQBmphaSmXZoPRMyEt8gWpgcdTRtHp7Wm1GghMeRWaNArGW4nbz82Wm3hHg3pPKq17ACpUmgrxY3ioi",
  "key9": "4heK2p2mQnEt4GV77uKyA6xARKpTHXnzRo2nnYZwPnXHTjqFnfH4FzPdCmQDwX658u5A6bX5HoizFMdezXruEV3K",
  "key10": "FPPQ5d6CBoLRsTd1erjdadS8K2GrTXBY2PmkuwR3zCwS6faNgLPFAZ8XoxxYY4cRVk7bMdKa3m8snbgwhkLbCQb",
  "key11": "7osL5XwaXvUZRMDP8cjJvMfdFRyUGhtq6r3qySWwhXcSoxMfP1pBbXu633694yWpUhJfxcsPCrVt5uCDAm6xmUQ",
  "key12": "4UTeHQ4VWoj9yGtxd3prg5P9T5JzYNGB1mUW6hQgMwkGvoHQCWY1CWSZKoJg3uUDT7iisczCFddws955EJZ5mwcb",
  "key13": "27f7Pxam87iwFL5iFkvsRyXhvK4SRB2RnhEWXDmSXaSYzsdfVBLhqcHxKJKz8AMZ4m2xX98j1m6HjcbnAP3CAo7h",
  "key14": "uXZdfKnR8bnricSBdduQzqCGr4gvoNE2pNccuCAdz3oiywegToyBBbmDX2RFiQUuuKoD2961c5b65eqkpwNCDVp",
  "key15": "633cJktpUGoDqyjcrqPZ7SFdpUBNkdnqbzH1tB3K44SJ9uJxvbxVcuMLAXo22c3C1WvfDkyi7nfMSJJ5yWSpVDtb",
  "key16": "5QSrMoYsCCEFrxqeVGR2WyJZr8JKaypKZf7ypPiJNUHz5EoZpsXBbxASjmzK3wUpK9HVj6maHTqRPJ4Fsx2UuJZ8",
  "key17": "4KnHdQP44sdbQCJBJ3SGV573vobJf916tPzZ5dE4sCEqo61XXo9UxYYBG85dw4PqMRu8BctmFKoCv4rKfKSnwANY",
  "key18": "YRURmgkwxWajqxv5sK3yVzpsJBXi52q4evTfuRgA3BWBvZJkGzZt537qGMaR28nQXickYbYNnkFdWEib8XK6X4s",
  "key19": "rmwJBqbq3NF4itZWgqCLqG2P8s6w5wf6pcd4nLwXTbiVqEe7ettfzZVo59yx8y5MUKVzjSTgTbHAggSHLgE4SXj",
  "key20": "4HJ3AJ8ZpKyZsEu8v4uVETebPzxfkGaiwxTrwQjCiDkXxCNATSMw5xSVYkMpiukbFMQqs6WvJm5fyid1GtQ8YBtJ",
  "key21": "3rfh7CqjuBoT7FzRy8cz6AGyjKgjNzJZwxk4WWAxfznCmBJyRLxxNcRPYKthdeZuQZx4eyvKYEv1i8nYJgErSzPc",
  "key22": "2Gkse5tC7uu8FpjpuNzMKDhNh4a61ja5N2ykjCWukFiLgjiRntLqzavSSxdxJBSUW5drVgXnJVU6ZRnqD3EK8mMZ",
  "key23": "2Qxj1mJVep6ZuXFpJFR2UfvnqG5h9BodUJmJUdqZbgFppDGJGKY7uLiJQXHehb6GwXVGDvfgTvmCghiWB7kDETnd",
  "key24": "47zSjEMSqqqnZZxAY7Xi8JSLGrD9gXgktNf6nZzFzwgWFWhs9WCfLWiSNLvGXuxgYJxufK1eBW9qoUX8yQrwcXgg",
  "key25": "3NS6fbB9TS4EBugUb3Fi2uqWeR9Pi126RCY7CMEtFtUG84xNeT76Rfi7PWpjTTpdQpgZeD2jPHLDULtg2VfepLqD",
  "key26": "478LfrxT9BaMjXKpvrFzbFFJTiwVLCktuE58JuSnUyhrXHhaeKbDtvuCzFfg6UqL5yWfuUS7J9VPgx6HhMi8TTdi",
  "key27": "5pX3EETGiDzctfHhAnMzUpyfi2gi7rXxgWpQSsw2r2ozKn4Z6Aji4yRYBDE9h5CTeeYhYgFRraVXss5XqmmWQacP",
  "key28": "3ViqpZeK2hbxkYPw9dcma273ftq2cqSHCkYdyeeZhhXbDNb7E8CsyjpPuQDMcrqgf62AZs7eiQ8SpDKcWepkEtVB",
  "key29": "4nY7vSqPKxEKHzQCLc7mX59Fzc9VW5ZjpTiyGQj2Z2bXS8UjcuHVgYC7Tx518hFNqXGAKqDH3HmubL5xUNS1k38d",
  "key30": "24raeShCwdMnKJv9d9GnV1U2Mck7Q79j4HRM818p1aJEAgrFf527FuJuBGR8f8o9njL5NoGvqVmoy3xMTT2t3qfE",
  "key31": "36jdcH8ztzUq6yc5CR2TL4Cn1GVCRCJQ4QMMERMnWJPp6tgH5hX8qotQA3AgMr7zc2JPDdbxV6F5FaMjNoHkp97v"
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
