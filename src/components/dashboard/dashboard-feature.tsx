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
    "ZQJ4rL2nCuxf8ztSyVdaTG9cf4wVr7HZHkj2RcEtyR8VQQpTtkr8SvCumBTdnNZUM5VJXubK4DsJa7uXisrY52v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m5NEUtDFwqTPX7Q3UKo8diqMWj9YVcEryA77XHsuCFes9J2wDNgHt3PZ37GiC5wvQhXm2VMyzsPMc4ctJRuXeGr",
  "key1": "SE6S1BLvAhTWn1aTk8XgFWX47E77X7vAtK2ze4CSZ13nhHABejq5p1YRVvfdQ8HMuMRCBgDywbDLsUAGvGyDFKy",
  "key2": "2sF3bbgBLQP3Tb1g4JTTxyTW1p9Cw4fGeW1rvFPvxJPdZytHgf21Y95uRtqLPpMHTrX5duJ9gDbDKfw2Pc68QoV4",
  "key3": "5RdY5g3Uk14mqAcTUKnwjz7CXDsSE7BGwatNY2KoRLDXjwc1NUhAQG3Ugm3Z5prTG4PkpBY8q5CpweDaioQMFXXj",
  "key4": "3gkFeHn9dDbk7xGLPVgqEXRSgL1nsMLEhVtunoC7Qu2ejhW9gB9SwSjqjEAo99MRBJvreHia3t7XJU3aAp9jLXUJ",
  "key5": "3sEuniXFWsGfPLfATsNnWtHc1ofFjgTfG2ap24ccp3nWHfoSjD66ZNgBD7ZH1rMt2fo3mSbTVA8YRio7LQHDsFH",
  "key6": "iHrSrp6cVrzfCzDVZxnAC98sepDbKWL3PAzBPNJjaGH2FoiM54GRsDfN51P95knHrLHywghnYtSQXEFYqhFczAX",
  "key7": "DNxuRwfzkTANA3kECwYvycB7gwx3TCf3nbVpBEeZnpvJgu73fwrEFtkFNMR1kx3hozoGskvMJfKbKALUCEor6jb",
  "key8": "k2FifuJJXdtCvMreMHefK3DAHwxxu8fdsfgFGrEa1xTZpPZVTHjWK2EFoqQuwsLDMQ6KCAMmGsjNmUt4goeqrzh",
  "key9": "3rEK9zaWzzMnFjkK9qgT7hnxSc7bDBTQurHqtyfaPkxi5g4S4goGmtHkNeisogtNhMdGNriYDNV6fefhTRbqWXsw",
  "key10": "5EVuM6Q9QizSTwu7r1Cy9edC6nzAV3GRxQFyzVNrfK8cJ7LdchWzkrjeumkvJNfQSEhe4nAiN42PfSRoaaYUtMiA",
  "key11": "5E6344V8jHgx3kMqeKR9c84DimPMv5AkQVobXsgXbKqkshp1WVGEzpXnJUM5DZxqxBNHgbZmH9iqkzcFzAnEtj9W",
  "key12": "2DT3vz5uVEc9qc6FiUkKxtgxenRysV3BbYKySgorJdYKt2jT6xrwVQApphyzeh3ZciYSqgFMA7BiasqnMzajQ5XY",
  "key13": "2tBZceDtVZqwj2GMrag5uoVcJRYmDdKiieXJH18KueD9Za46eUNtJZfFdZ9VyERwntTSDcvY5RxigkKX2cX8rykv",
  "key14": "5poNhTnepS8srD7zwwNusTqeBnEra5w4rxcDxVXaZfFPQYbRCzFK4GwLYmX4e1carBqF5AFB6vnvs1N5EpRGoR9L",
  "key15": "4viPtHMdAWbT9BEP1d1YRVXuGhykE8FV5496HyhL9H8K8NT3Lgzo8nLDLH9J6H57e1BcXqdmPFerGaWoqyeJpmtD",
  "key16": "3arvmfcUpMnKyLrA3QPLj84J9UtrEkdnP3sya3cZCmzJWqUwiV54Lwmbb4ttYJe43g6dxR6xxorz496YtuaCMJcS",
  "key17": "3GAq7kPCC9798KZfJHyN9VsCpVLeZoCxuf9v3NxMyPwEHrCMURErYRHab9gqbvajSEcL11gpwLY2GHSaR7fWfz92",
  "key18": "4Cf2v1LtoCLMN7qduAd3CKJbMq2UrNJtzupcNFDDSzFw8ZiJM5uark62uck8JT1jx5q7vtMehWZsgpFvQNS2c2Uz",
  "key19": "uEEvMAAssXkTi1uw1YGW2GpcsdUQ9fyXuedyKALvsBwk4KyJ5gHtwHraEdG23MRonL4EU8vN1vpAxuavR7tybRq",
  "key20": "2AxWBm77oAJvEn6NqA79vFwTZMBYzLqxx3jqY9qGszyPX4mj1mctZoJ5GqfLn5G6RY9Pme3VvKt6nZbRbwAU3Z1B",
  "key21": "rAGoDYmb2tTL72tcJz8ofvFuxLARRBEMupeEPMGQvgsdGpU9ckEh1e7QZCj8WvTguYd8WNWHETRD5qoiLATbKWP",
  "key22": "56fNtpFXEhZuMdEqw6bz9WbAsSjnrgHwPgUDvVjCmoo1t7o2w6s5HckGURUwfRGsehsmP9zSQZMvA6B1aWUhJQC6",
  "key23": "4Sb7KPDXsVsA461DBYHscQ4M1C687oQCaLhsXooaUGa2RYTeWfo3y5HHEC3KmfmUtsDd6iePqto2ua6t1krSC2Ux",
  "key24": "zuEGpbEM3QneKq4kfmFnuphirMwyJX14tDzFHSVCqeiWoGyryyk2WKvrJb7F56cEg6itiVzjj2RexQg5ZVuDkQ1",
  "key25": "5yBGrGATdm35Yah75VtkUCuuKW576hqH5xvrKYoTSoeFpLQqTf2Ycr1SPq19m4JSNck48eo8G7QLXPDrCpz7Ef8Y",
  "key26": "3VVdnsqR9vvxssbL7XpC6rAAdj8Fco6YRohoXU9JdS4rykTGoEuHRjLMyP4TBUui89rSfNnkoE2e4zNU1tD2EyoG",
  "key27": "4R7oT1KPsebCaVhc5ZhRwk5SZrKTpamxmnMaWyzTJjSZyJJzVTyCQMr3sborYhs2McbAdJVqTeRoNJG8ZQtDpfd",
  "key28": "3PfVdyo4Gtm2Q37JmoF8UHYRxFjaPfbjWoiJqgsGLXPpygRmgnwhzf38E1eDScPW4PzWkhxj3RiDLUAmUgotBmjW",
  "key29": "2KJ4HbAR2fswcCAQ8gNvGynUVVetjiuo7mfdQoXa86aK2Ry1fMjhw8Go2QgUrQYeVmYoVmrw1AmEeWAg4evRyKTW",
  "key30": "2KBqAiHgGqGAQ82H5fK7Xz4AEmZVZGcjyBxA6TEepHy7NJaY35fzH9YYiMwfpTXidM4LfYAowtDEXsCs8tUGM5fj",
  "key31": "5o9sfdwPRaqRNbWMfu3DUCBpxLTVVQSqZYxnxBd4rCHCtovuyb5hS9KtB1MahcTPsPaEaaDpSD5fSEH5pivethJm",
  "key32": "671RFZe7WkXsrZeHt7RNuD9n9wzQRUdFJhrVZz2ZjRLFfAGYz5GDWFUrcWSZpGuvKGYF1iLzW5Pq6etoorXAsHkb",
  "key33": "37WLjgMQtzoDaHKtYKF5NMT7AKEjKX8BubxV7RBgKoagg5G8kixAndXHM5tQpevctqQxDsfEikgg1wd5hXDDyDmV",
  "key34": "RBTHw1ZFuqXT4JEiD2QeVJo6jcvaYsHuKtmz8gLqpxQeHAVyYayk3Ghx336jadV4zSrELyPb9gbrUpxVh2Aoi5n",
  "key35": "3SmxHjUzb4rugcKykYmGrvxq7ZQ1gmSMt73cWFzpCoMxFKBsMHBjPLgtUswU4zE1PpgESxNomByTyvoZeMZxT4hF"
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
