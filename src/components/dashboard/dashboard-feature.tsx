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
    "j5LgX6FNNmVMnQ9uaAfAg6M8FxfjdLLka2ZxSgURn3hSbcN9CkKrS1ErrJQ1691QM4FD5ByW8gqs1Bbcb1YWnAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oT2n8gbhd9AHVepy5sfRpTaFAHuox7bSgBoiq8vaDHYwuqvMeHEa8GyPvKQx47H73rDRTzqwhiWbjsWpWeSnSGf",
  "key1": "4WUud6Xqw1ub6c5EhMkEMgtDs5oER5aaNXqPheioRS5GFNEwSNmJcqtdzzgAmVK7uidkjzYZjRHx1aDRDc6sBsRJ",
  "key2": "4ToDs8dBeqR4W2QYmKtU2TnjyxQ3Cyt14ZScQ1RxpGNjP4hgThQVKG18zKLWBodEAjfmWeSjm62w2raT9tqv7DbZ",
  "key3": "2bunp35L4kxVCQv3E984AdoouiqNzbduiNXkVCBi5ncBmMhFR6r6j5fX1ka4EY4scgGDpXNEbb94N2MFzVPd8nzY",
  "key4": "3MEaHhomLbfeuWzXshuRrJiJuwyaWQFeoaeHjuS4xhv9SgY51jiahqmfq3SEFzJ2DhVJtHCfExTFPXbVM3m2yuM7",
  "key5": "2mLtkZCeovzP8dEwYk8vucU5cu8bzYfwQw9eC8ECfXMS2nPtWtBd96YR1xETz12tYkCDhqf3mmdmsXtaRhYia1ug",
  "key6": "1xmXXNEtH5X8itojvcsEKgC2WbeFbsRNhL57xXcuBN8C3oo3RRemYgPM6qFkDL39mSt6KQ1EqzePTmVQ3TZNNDn",
  "key7": "3h1Gr2Y73shSs47PcCpFYmqx1LGGaNuKqEXUFnFSGhi9quwZhDGicwVQ4ntBngyLDbpVkdK3oFQapsUZRNEU4fro",
  "key8": "4kDQeYhEGJASBuMxvGB5fxmTrc8eBbihJafb87XQLDW5ExH7ePQxcnEkz7ZUDczzSfyCMZaz9SWsZkkyFe76R2dP",
  "key9": "5t1viovQ3PS3X1gt9Q3T942Y49mgpAkKwHXMLguUbE72ttn1vYXXGY8EUoAPPwN4X5dQGhMaoS82fn8D7LhzPiKG",
  "key10": "5KfeSp9YpJmZkRvxD9CyHqNJi71aaBMQ32sJvYzwcqxY8rkixgWr3jVjdH3RCSb6bQyzrMsBZkpRMxt13yHJ3Upv",
  "key11": "2niryYSYNPZRn9LSzNT6YQ7kLzegLo6coLQh1wYFJ4KN6L8iMkJmLfQr2EpUihqAH7ed3G5AQqEmg6B6oESAHtrb",
  "key12": "5sBWCvZWiyocoXNBi7hQUBfgtYNipExRbRZqFUysHmfeZ3Tk4TrPvNieW718nZLs2qsz1KNrCJaVNipXE89MBCFh",
  "key13": "2EexmA3CZWogQymw7Am2wL3aVdHbiDrdh5h8ao4WicmVpDZ3Eu3r3D6GoMqccn4p5qEjYYHqyyAVd9AqF5ucedPK",
  "key14": "2CFAYYMv6fxAJr4nKQ9DoQ4RA8PBFVXLPsbdqazivNndHc8JoU15NwkBcTTX5mmCXAypPBrRKn8YfeP7gn6SXows",
  "key15": "3e451m9xiakaYxXtHGGkfexaSrSbySsirBTvszhxiyQ7WWNss1o91byjq1rG9mv8uXqLa7CkuyQe7DmNxUESh5m6",
  "key16": "apyEhvw7W3uHhLp7uTZP996TuWeCCexKwj4rdRjugGyM5GrCwrWEgivfs6bDZyZnrxW7EZuZqXE7qpxB8VNh3G2",
  "key17": "iu8QLSaTVhxJrHHdK1knKbNGthXFHH55327SwiRTjzH5YxzcV6fvr1FwpGoduh18V91Hgma7e1pDG8HXi2uz58q",
  "key18": "ByHu6kGuMW8tyW7dGUBdWV7NckfZAjHj9qDDvhYbvtX65BE3Upq89kFzJ92rmQbme3jx7bp1FS6gyAoPF8kx8xy",
  "key19": "3XjryKUaFeH5o1fRPxUWze2pKuKY7igmJTQP33soQdiB2bE5dfYVfrAVWnVB2KtF2cic8PCcCPBCVwnAxzmEWLix",
  "key20": "4AaGNZB3T2eZB5YwyN1ynLzKHUKH15cgZjQgA4Dbz7LXaG5M8h3LTTvHYERmResb6tqfsgLz7cSeudKZFv9GVpfF",
  "key21": "3WhXRFs6PCC3ifhhDnM4uRkqQ4fgGegPLGhfsj9zw5h2wZAueEgFyRXGhphffesEBQcWLN22VgCPdSZ1xrFyrqt",
  "key22": "4hUdip58Qth7Zspcoue3Fyb9bsSLXXajcZDoKVvAPtMwMpops7D2FWAc1rVytyHZV8YCvweR7qGbJRKaZoeBKZrd",
  "key23": "3bHvoDVFm2jo8Zi2Qxy5KV57V92LbtUgmmVV9u54a45RGF51kigsrvgRpVnfRZkpaJZ65fMqpk4QWdbqUHrQpGMk",
  "key24": "5fQWbyyA3Mr3gru9z1fg1TjeEHXAixnMh8JJh13KVRJi1zaPk7SsXqFeweM7UGndAcUtz8BjV6DMia45F1oBoYf",
  "key25": "2u5nPwb1sASkdv8SxPVcx1pbvQK11KaTtvUJKkeaao7KZkfzQx7KeqBkt9HG6SCveDZDTwcdKFw1LrGo1paZmikv",
  "key26": "4sAECEj9KGgGg5QDJnig17dkNWmSBvFZJeYjym65fomB235ETd5LxQsJQSHTCEoEAUvSJXaKicZKLRby4RTp1WGt",
  "key27": "viqUq8133cCX4GUmnKmHViA9spCTebFqrBLYerEnLbmyRKnYBdGURDf1i2rV2VZ8fc3E76DxzC4B4tJ3NiDjU5M",
  "key28": "5wMNsoWiocrv7SEQNCUnXioon5cCgts2K5Hb51jKQ4hKMh7ikcj3bYgkDKYAnA9zC7y21T7ks7Qd5p3X1si25zSc",
  "key29": "mDfGD5L31WGDRJUVj5BRGaPXP49b1byQfj7yrxXy3TgPUNWJM18TrNaQSCc8VyHEeCqx2cveZMxCCLSuH5oUKVE",
  "key30": "2LXk6ouYcJG2r5xmE5iNbEkpcZaPHhPQyEpmf4jGEsXSdYoNhtHjVCxyFgFGmv58sMHSkjQDzufFxXJDYj5c7Ahg",
  "key31": "38KUjANyYygraNzwJY4z44aawPZuTvHNjEosYA1ttJJ8kbqj99AkBGjCYrWfgMygjMZUpKrBBStZ8y3Yq6Yfg8Tr",
  "key32": "kycHBaEP6CwKo6RWnuNXhyvyHBZnQQGzfwjyrUN2jnrqjoZs4Uv8KmHRQFwybgEfJhdTH7mkKUKRubmufAHX544",
  "key33": "2efZPSBCAG2FNEcPnJLcN8r6YQ47QS4h8ex78KNfg32w2Vqz5P87TNMkynRVnN4LsTutbQLjNA5sVRzbBTUxCFGR",
  "key34": "UB3rhroiBK7wLQpTmsDrCVEkG23yFouDQ3uJftvqbeWPxUHvyDBpjAZfMubdSMxVth8zyRE4xztLcWRm7Y5EoLh",
  "key35": "3stKSniehMttZUoKiCC7ePVj9vnjxEn9KS9MjAugvFdofa2epxmkXAWRZH5SuxDgmbQejpaxEpHuWst1Re4EyR2D",
  "key36": "5ztpwZB9h4Eu4med9aZAnAuBNPm733mbqbNFgg66diR7t9R3GYD2KeSjuenJttUYzKYDsadaoe5WsQi54matS3gr"
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
