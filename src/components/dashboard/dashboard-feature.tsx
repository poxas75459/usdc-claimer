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
    "2N2C55xUA5ERCgGSgtkjXZ3CC1XAvTEpTLcdFwMahzeZyv6s3ZPRVcitWvNqEi2QvsdbpuyNQaofgXWh4Tpp3mU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bDtNWfknbCd2TtwZ5ExnEFPk1UnmaHCXSffzGWJ1sjtJrN4wcLCt18iFJyhYZkuxjrAiyjYpGZ4jZ3jXHRNLe7b",
  "key1": "ab9CVq97CCowcc5MfNiG6bubQN6WfyYf43z2XGJLug6mW8LtjQ3B6kxnVg1soafaaJuyc4WtknhiVpP8JP9UJm1",
  "key2": "2Vgu6NiSHWeugWE12MbSfVkUKRXBhw4BGF8hgJcnokd54qBGrACNKmbQQBYvTWnduyJb4ohvpGtFQYM2YBxhnZJo",
  "key3": "P2idtNJwjTpQWRWQUwXVvahS1hEFZJqLSRh3FVNTzBRjbtYpVCP3cfhZcGUSHfXGoougtMJZgSQHf55vWqMFAeJ",
  "key4": "PPzgQo34cfndXK4f5hWhDLqkRyQGXwEq5qGQHTE2YoD9K53UCFtKStUCXLvHro7HTfTY1VhmhkEtYzzeqGPnjGS",
  "key5": "2CVvWSeeHbBqdyHW6UAWo1bRxiMbbzHazhEPzgmHXNFuUX7JM7s5c6DERpG3GBEuxXFMJXw26DJxfwEkkeXxFEEn",
  "key6": "5z21cWgz761UuLd1eqqcYddWzjhp1aVDYGfahEbZrJbTqSpf9Zi625TcXLSuC51bTwsVsEkENrS32Wh4EdqChadU",
  "key7": "5Rog3yBUKzq5MYz6akDX8jsAeZrmeAmb7qnGndSYGXb2fdHCQ4dumfFRpDhMBxj3t881dYg5MaejT488inP6RT67",
  "key8": "4sz5zULJME8f986WUpBjo4N8nt1oubVrdGPjniF95DamEdqRk7DCoX4SBWfgyWcL54H1gspfKNJ3J9pRkakbPtRw",
  "key9": "3d8uuPYuBrFdFGhYcq5DvgCGPKAZCYEt5CqFAmqVKQFuBbkrq2r7NzWPSaGB4vPkmmaGjYmT76gfN9tXRDJDtJwo",
  "key10": "2tLeYC3fMV1JBwkCocGyNGZWgWp76bDyFCMe9XxuFhCBV8iK9p1FhiNUA4WsCQZpqxhopFCnJErevnHGty4HFYr5",
  "key11": "33JJZdbigRgnNSm5fMrCxhdi2xwQxoZHye3e9ZHTF6FpuFeJ4PJvbFoGhoR6EsQfHnHwyiMPyAzGYKUTMk8tbCjA",
  "key12": "5TWr2EozMoFJDdXYU2zPpnDHtTzdjnPg73apUa48LjWkygbuKEvMyH1aW8nbrYfKMqrYGBCUQnKnYPCCGSqvkmPC",
  "key13": "DgMACxTwYhJh5f7zscsrgFCtM2dmFQLW9FpHVZgr7hnhvptW61xLyqWHfQThGhEnLAsxPRgNxaojpKX9EL4bQyi",
  "key14": "3i66WrMXpy7uyoc6RGa8oz1J8mKCjN7PB4KU74j7nEMMPUifGg5bvhn74douotJ9Bnn9CM1sLu18PUiXJJyFkX3K",
  "key15": "2orKv2kb9egQJvj272FzuxxXPrgZSzeErbTkkrQUMZ8f4Ara7rz5ni4LgAdjSGqgv1LwhUZYPnES1wD1nRiZFk3T",
  "key16": "3EJPu1HuH7ESUNYM7pScA8Pp7detwiUXfJQyzfF2vtaBwCLyRk5jiMJGZP4rtfaidKS6nD9JyUVYqB32ZTLzXuy9",
  "key17": "4waQkHeMMQHLCtoggVPnnsHfawHpMFLDXRpQCTJh8HqA8LANDumPUCXtgJEwYuf5DVwYCQK1USKuBQA4kTkkjTdc",
  "key18": "4V1XKXHzqp2qsr6gDyAZScJS24nRAZJfhiCcGyLQwmuBeCReXwxjBvDnfQiQnzXNpWBBMJuWZN9B19YNqFeV7iR3",
  "key19": "56sTq5U2SC5TWVEwirwem2etGo5wG9ZM1aE9Z3b2FvHXwgpN6x4CRtkcFT8eD2yBNpVgKcU3FBpQPUH96qJhSjZo",
  "key20": "3XjjVW4rUJy9Eq4uew7vLv9xYZMnwKPp9QC9M2Zf8BRCSoA5NFqXSCpyUeNW7SM7cDvqSM4nMY3nzzFByT12USgm",
  "key21": "3J8G9ksELd75KJPvpFtJc9KNJrMF2zwmYXcaoAM9UqHFJrpKachQx67zaFUEvkUMeFycvrXzSxpP6ZxUho7AAZq9",
  "key22": "2faXPWo2Ztog8Qb8QLhdiTuHk5voh9nFjaWK1XeuZfvVcbEmeMj4Hw68ZYjxpcsqQM4Xk9tG9a4qUAvAMsbo6LbG",
  "key23": "5Q4CmtUBFoa22ELjqPVca4moUKUCMoP5eM5jsVrpJCGiYfaAQofvBtayU5ozqdEZob6HefYhRckVMizy3sYVwqxT",
  "key24": "5vhDJBoFr76ZJJf4uCu5A6QLyceUN2Mu46qoxT24FAH5FzJhEFGC3dUBwPkcib5nuyTdZi24bHPmzpgvToUM9LNU",
  "key25": "3fNjSn5kUciWnoSMYprsZB1gHSbzHGbZFBAVW8T5jmzTrgyML2Ebuy6baKds6ZV3jTUtieLTqzSX6tHjGy4URoFS",
  "key26": "nPmL7wmVn3vbF5po5QzMPPHqdh6JFQ4qveCzPZa1cPaNJqWHC9vU1xRdvXbgdNUWUhTeTpphZZRq8kXgdAZwvxy"
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
