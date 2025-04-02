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
    "5dhPaNEqBhxXv2fGxqGadk39qpUNqyaX9u3NrgCL1af9wZkj2ENkkfE6BFU81WizEZUquUsq4MWL12pw5WgtwmeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmLKFr7kk8SMcZxxdmBoB32fZZ3YfJRBYxqKkZ3ShQ7zJgiqQBW193kgDrtxGRUh9mH8jVUCvGD86SEbVd23p63",
  "key1": "3jncUrtUUnqLJw95gHuMGfwKy8v6yGchjwiy8HGZSsunG7HT2wZ8SwHp66S4sWqiqG6VYUPbT98TLPSQ6XKDWQ4F",
  "key2": "3BcQKTTu14JdpdrFdyiZReQHzJnu7yj922a7MPPHc8hFM1iBQW6KZdTj8xkVDcJnwRWafdw99MzJgkMCtMntqwyo",
  "key3": "51J1oJxWwP5PEUbBXNYWfPWVg58xSrafWuFeeLKBhc4S4TYr6FcstJp2T6cCa6ydJZXcoiYJ4UzaGuNXhkLDN9PX",
  "key4": "4qUYeqz8aTmwX2jt6ZiqqsFdqXRXhFiLr94pcf5sjoCtv1wNGEsSoi5Dqn3AMRrW67juFXP4vXj5YWU3ewJrQtQc",
  "key5": "5P893ngDhhfLTa9ZLoXcTwZiyYmKqa1WfKwkFkhu9qV5Crrfzu3UqVeAUvNUMgguwNGdBG4aXRDzQNnKSvwAVTEq",
  "key6": "2QCahNUodDoYuzjZi5xzGYxhyyvxYdnJm5eDgmtz3NMeYpGR38CqhX6oMofrBMNGiUA9AqzBDssBzziEhdNhvgTf",
  "key7": "DGxuK4JCPqeVQEUcQXZ6AmpTSXvGkkWSBhWQGcbedj5mjW7Q1kS5B6QxxJruvJ4r31QAkQ6ehY9T9mKiaQYeBuq",
  "key8": "51NhJqaCfAkJxNEr9nZyFD3sddLgZXvihB99QgfzUm119gdgsGpipmsPVvvjz949unHvxPRuf8EsztuMeHC86L8V",
  "key9": "4JSZbduekiKqaP5m8ZKNgjKgjhchiw4fpPJT4MbhZytxaKsT9bX5ov8RxL6JuNcYjjPQrvKrP2ybm5Hpa3S3q6YL",
  "key10": "5B4t17CuoktuAZ2Gv192n84TWDZpY7zvTeWNVzBe7h6MayCYFEnyBk51Nb7qo82HwuhuFjdwsB3ticwSpwe6q2ZF",
  "key11": "5dKnWnFiSWdXDX9SHWXPFq2KD9fNd2ntwXWt7YSTPNZC8oGKkNgmxhi6PivGMs5A1NP391vyZTvZkswMADLZ1o2",
  "key12": "4N9aK2jykq6iRVH3RpeQj7LGxUpbz9wXvWiw4w777pkyjH7FPnEbhHYy2atxjQPZbcGpkTJciaS6f2Y7GqnMu9Fo",
  "key13": "5pLzi5G6oRh5Gbfw6gY75aHH5sW8S4X62Vp5yuf8wVKyQJmmq6Cq8Y8s2H44gDTtBJDGjXxnpBtADMsabUmpMa1r",
  "key14": "3qzW2Gs28f4XuFD17VZxNAjQ7fezRCy14aDcYrTv26hdja3Gf64w7iRCgckEYCkj46uhktH4i67tGEs7MQdnz34i",
  "key15": "48yHMXuk65BmSpKQe9Su2U6FdQoAoMnxNQqgKkNm8egVt3cKEJryTJwMqSdmmwkwFJbpcYw7c1JgAiHzNAEh6CYN",
  "key16": "5myrfQRNxP1MwiTtGJoiD6Cq8tkdYPxLfgGsEsx8TRpfjKYa4UjGALTc1hEikFtc8KkQhjvwVJEAUJ2Ct95YZxuM",
  "key17": "3NQS2eP921ZqjFmu5a9E3wwpKtcF4J2T4n9eVhgz6R7Y3CEqEUtiggCVdTTzgwdveBVEWCmrwa2VNwGs3obacjLm",
  "key18": "5ampiN9aq1FM76YzAwXPytejJDL2adRPeGNfMcZK5qHXRbj2bJr4M5MEswGX9N6z5VdwYbWezUSqdjC6qbZhpuUQ",
  "key19": "253GaoFE5Ma5vTXhuVWPwFmk8d2eaZQc23upPRahxefJ1uLQJVa7S5CGaKkgKCr1HWxErs1tt7Z3u3HbprawnY9v",
  "key20": "4DtqRQSBRRv7xKnftwbM4pp3nfPLtHwvmVotEHiUfFR3HPQvxDdXQkdwQ1GJwKL43Xc3NEjqeR61MY7pwCWauJxd",
  "key21": "3msnH16Ych4BZAb6Qu7nqCSP6HwnvJB7oSaygPVfVFAJGCDXZpYqFBjPAgwSj9CP62S2ybBsHVzmgfTfMpriJ9C2",
  "key22": "4gjXB4HWsacg5hA2LNaY7zJLRPWVYSFBMeUT4ZqmNc6dnCwqmBx6dohGXXVVouT4bQcfiYsMgnKRG1xsvRxA48Gv",
  "key23": "2cCxtuXbe5E6Nv2QmJYJ5kprSnmXeJPMRQZZC8QGaaFsMM3vn4MC5yvw7x72zpxRBGERULmUVjio36UWvecn628b",
  "key24": "QfG64jvTCGJji8StqWCVjD5dJAKjzbuqKeZRfoFNfV92zdKbT5jZtL2LDoLGJHEEyTR6uikV6zyMjypnad4S6UN",
  "key25": "41Hc772Cb5F5wWtbN5YjUe5j2isJKvtmXomuJATPD18p1JbtuSjoWizX8vnhSwVM5E9KHTsqAnRfNgehXySmvpMF",
  "key26": "21nBQoEj9cspVERRZZTA4bjZvt6DyQ7YTCiG2DEmKdXdSGbUzMYLsw1eMRm7it8CQSNKfWFTDBDYRTtcXHcvtnEA",
  "key27": "2wkVdr5YdfF4HmPJcNMfU1X7Ajw1CLwuFcXppbu8eHCz2gbZv7VTdyuaLYa9251swPZUMES6zXV8PcA15E4UfXNf",
  "key28": "2DpgtrCAhmjFBstTsRrowCiA2rU3sE8X55Bh4VCDQYYjN6fGpa9AcNALwFHuHVCMfJ1zsh4RhHzapAw9wbzVgGDd",
  "key29": "WJ2jW68vdgtQbo1vvQrcM4Fpk9XxEP9Bmw1xhvSGYpJDFAwoe1s8MJeHXu2QGp2cKYdXmk6q9ndPVRMpFQ7xG57",
  "key30": "2xuhvrTgigmZNY7AS6Kih733jCUxsJThWvXVPLeHi8dTPi4r9mrMZquxwXus8YzKy4SqVDeYWKnxgtKE7YdiaxWz",
  "key31": "37GkPCMKXBwn2EQkp9Ld6x7uAwetEZrHZmbokBoQSygLvCXGqRCysLdxjwGK2AdPyKJ59YqMjLeWTTG2dgwJ9SUQ",
  "key32": "5BJkJdHDVCEFikTyy8K6oCENj7mhMQqRuxmiTHd858Soj9CPzrtVZLqvCiJFCVRCFC6Ck1Ho4eSEzhUPMQoCThRq",
  "key33": "TGLWL6685C9AfaVbSgYF4wK3BUKshok2BFRNGhYV34UHZgDcuxx4yQ942TwH9HpxWdfzy9VDte9N8wycSuesu32",
  "key34": "2nCgwX7WV6wJzTboHBEFYaCeHuCSUwZ2oT6KCif8ErSuYgFSoHVjeha7KYdQWN6r61MmwietYnjUXhQmmEnCLYJc",
  "key35": "4cPVnKL3Nh3KZ1WZJb1LvdwaUQpMg7ALgJ5CDwDVLS6V4HJoKEkM5aShhq2x53Ht2Hjy9YSvmVcPwV32nuz56giK",
  "key36": "4m6P2B27Kw2yksNRJS7F7FeeGtbzGTdKR144TeoFsZA7T3AstPUmwB7P1QQy5tgVHx72RQkj47qVC9NLBU7H137V",
  "key37": "2G2Xwrgb68eP2mGZpCr6DyNAubzPeRGxnjWPkVhPHo7JweLnVdRT9DFMnRceUS7ksKMpJhpATpiAZJH1nUR63wBs"
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
