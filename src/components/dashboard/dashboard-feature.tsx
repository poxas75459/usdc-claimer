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
    "39AUVsA7DFQciG7eRDXsroTAbAufmoUj5BQxXTDYGp5wYUa5wmQS6DHMQC7T6tPGDbmmzPQ389484XAhQb81hdXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JBvNYzWSKTJRL4VHFp8SSqWZRT5CcFJkT2dGdVGTcU1Nf6e4yppk1qWMeLCq4dAT2PhTBh55CzgCXeecADfHtNq",
  "key1": "5jUmWriLfWEwT74NWKwfBBAtFtZLr1S5mSvzg82wGHemw5J1smuM17vftEFnqsRuHSQuG6MpLCyTSC8AZNnM9KCu",
  "key2": "2dGWfEGs1dueVUrR9bqcbe5VyHQ9y4DYRmdbSwu3Gin8c3wrDqUb478NLDHfwZ7YaHpqpCsAYrgnRBSMo7sovepd",
  "key3": "3Dzz7N2cZdUxgEiZAqdmAhyM8Uajmi6kSvaUmW88ZKJeWUwJnJJAV69NoQcXL8Yu88mqCZQnfZTUysH1v8ZxLWjK",
  "key4": "2UjQeUjW9DK9ZH8XsyVsTJdMYq6aJC7AsXENzrhMKtCB5dNGDVymKSwkRwAPVhsHTGrfeHYvEqzXiUeHPH6wophr",
  "key5": "2XQMZX6kLvikvCjhRM5wZpgfsPEmSK1A7N3wqGyqaur96ez33uQ5tW7D6atnk8UfJkAtrk3KX8B1HCgKZQeyPy2f",
  "key6": "snCYuks5u9waFKWZUxFYqq9dDffDHXS52qW8gSAKEwdKWwqVM5a2rKfGjCFx2cqsbdrs5S9WtpS6hZ525E6iXqZ",
  "key7": "4eQA38dJRCtD4xPex5D3uSjheqDwcjTBYcWuBNAkX8tb9ZgEZb7xusEf9QnhxP5b2UdQwgafoaMjT8u4NNDT3GnE",
  "key8": "124FsdiK28MvDSSJY56qGE65qYAnK3nfQ1515tZJBV34yfDWFb5TQrPKgHAeaxxVW4gR7rxeiENgmKWVVi3r3HQr",
  "key9": "5Qo9AYk3pQzSuTyXpRAw9SFA6HwqANmJFM2bf3XMChsNaGwj1KTjcQWWbig2fXZyoEqK1vZTGra54oEYGk6gcLkb",
  "key10": "3N6BC3tkCYgiaXxb4jKztszMFMdeYqHTQguZ9T5qdUxVsqQq3Hg5SS3QhrxJGE2GXotqNsRxZ1cTuFCcdVrJKyTx",
  "key11": "3pU28nEyBhTddsteMKjg9yUCim4ccqw9BETuaqFXpbJmVqCzmaZNEY3nwM1mKSi1QWrw5XFfgXnT7juMcwN7uWVi",
  "key12": "47qNNXUjBNUrkJMdnBae9P8GP4SoTtQGxXHZdPk9D8s5aVwZo8YX7Ha4FFHfjvzNoJLCiTmc6kLnMYDt6hzWz7Um",
  "key13": "6KRn5UrsG1jbKVatsQu84djDi93mdP6vDgTSHw1DuD5piccLSzorJjKdHRgmK7EWWjY4T7dcunoqurpHXAFf1w9",
  "key14": "NcwDCyicmjk3KK24X1RoDCaaDH2BRYPJPLhD38SgpeUmPZG2hRs4vyXzLAP6NkTMXwDoxT8sREUE97mvkj72NQd",
  "key15": "4Enug3sS494Nn3a7G8PZtdiT1idGL8Jbsww999uokaxTn8JdGDRm4fRautai7k1zWwFWWpyeu8MouLhA9nWVdEwd",
  "key16": "2Bis51tV6pDB5P865a7sCPF5PkiMYsKC8BA4cfu8Sud8X91b5pK5hSrEoY4Mz3gTNTwC75kVs4nxkcBbNutrVC3L",
  "key17": "5MdPgSUb4ArdASAMcon3X5tq4toSXjtFfPHKojYZtZhmYeu3S9EM5U9HuErxUnP8rvBYGy454b7LoMoY1Zv5P4X8",
  "key18": "21FsZUUsytvd8WxAbMFrZhDyVK3Abh3zmcsLNntZLtNRcE56QhWUdwpqZjKSGx2Vvde2SQhAjf5pkDNHEhCEwMHS",
  "key19": "3Lc4QNe1D2vRGV3pEWPxVYDyjGeK2FKrSDCzsdtGfdhGaeqgUP9LhoWDWwwkt8Y5SMk7kmo6W64HXxPtJtk1WPpE",
  "key20": "8K3En4GzkPS2imZXyUVszvFTbg5v7JDqT4MKrMfrYmADULGZRRNKLD222LQDbnWt4HFQKf8Ss27aAGtyMYRYrj2",
  "key21": "3S36QhwfioJf5fgzPNtJaBvUJHEyibz65cihvwZmtbHLinW26TbHPzoZRYFJtKNtXAjeaEXLgtJuERpJn1QQw9Qe",
  "key22": "nWr5MDcah19Vo37dMjhiixKLS2UMEptxGw7xKtn1wE8hXNbtSWaHm7vocKgzdCR4ZQBY851eWjBGjiPNS6bgpd2",
  "key23": "4TZuCS5bDBc7tY2QkfXAMBsLFRwXWgWdQiv594KDCEU7ek4fm4ygenGQEWd3zssw1m9vLqmX7KDQ1AoUCzzUz8Zf",
  "key24": "5RHvJjqZ6zzvEAe6PFjnaCACFJh7ugTwDHe6pcduKafDznwJXEVd37P8WMNMLMXQKG5KwZ3195a7MikLTkYiLtYy"
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
