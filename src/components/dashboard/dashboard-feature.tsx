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
    "5vuUx7k5kxByqmmp1SYUEetTU9GXCjEdAdqEmdQ1GtQuRzTgMCp1j9WjNoL5eHRmAvZC7bRM7biMtvGqyAhmbzpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hVnCDSUWUDrkGKKZpJdw6apWGU4iuTGY7C3NtHCe9bwsay1UZ86MQCridGFy21f5JNkhQf2VYTXTfJ5QzKXU2n",
  "key1": "5UCKmggiKQoAaNFLEmEACCUBfo9oUX9oHNqrB3EkmP3HVHudDEqDLYkXJs8Y7FzCGsj3eVV6qTSpxzvFT6xxvFNk",
  "key2": "2s3VoPH3RAuSdmvVFFJumv1JXxgEioDdXTqQiEf5KcF5N5ufsWv3bEGVwVFQAhR91frT8HXcCD4YmSSUoTW9DW2h",
  "key3": "4ryNEvf41vs3KzitsxX6rGstQCawLZh56umBqcgyBrhMTUA66zvtXHfMbUtPbHbDNzHcXhVZFhvAa3jqzadKzHmK",
  "key4": "3iFY73m72uVgSsFaPqxn4FFT4xh2wQmyw3bpCCh5Reb6Vr1UD59k2oychCSPmv4WAUU4E7SngPcYgKrAHr6CPzHF",
  "key5": "2aqxb9w5BHr7TQakjSoDYeTNZoM7qpnbe6Ma9YgH8ReHYgPVvVW8BiBD7GbdPvCsQ8k4sHgwdQw22eGK6d1mhZyW",
  "key6": "5LbbqsRUVW1REZDTWNffoBpGgwd3HQMsSx7z8oTedrH6gDx864H2wCP9QhFBExgvej8TwVapW7zGcSp5RGq523P9",
  "key7": "4gdKQQ1spQhDibqxwaBbTW18kRWEJWWETV2U8ozjASpyXqgzmAN9LYpiBLYMTwcBzuNazLchrPDfz3uEgHwWt6Y3",
  "key8": "5SZNtzxQpcGQm3negr6trhu8DngN2qR5UJNg539TX8PEsbz2xPFcNMEgWHGnS65upNwN4U85AwP7e9YHnBuvh7XT",
  "key9": "5csXvYVswZs1xQ5feDahT4ks2dtodnobUe2ngX1BuyE1Nw8SxChRbrrGcD5AEAq2nD3dB4G9dxa3L17jCWJyxp78",
  "key10": "4oAZfpZ4GMee2Lf5fYxKNind2QUu9xvFArYqe1tNXv2T1STfWR1FVxcYx9wKsKNKtkA8h7PEUGc28uewpRG5pQ1h",
  "key11": "5Pe2mR7GxxY571ThHXRLsinvU88u6PhNRLqEDpRVXU6SniaKokBhnmYpRw6Vc9mak5nXHvi9JuTa4w74SnNjHrk2",
  "key12": "2QBu83CkEb6yjd1MzZgz8e753GredajyXNtzM2ofhhwHPRJWFk2J7cUS7XL65CfVUzHvWBpx152tq5oj69YnMDfq",
  "key13": "27JWPcUUYQT1SnZEvGikw5e19px7L2pZjEYQPTeY8g16qcS8shSwt8c3rKDvs2TdmRuGdABub8jyBKgjGby5WjUL",
  "key14": "3QNhVqpVF7LZWUeY5Eak4Xwk643pQak6r6whBuVcJ3ViJb2bemb5mxmb8jXi1TT7chyE8C3aRp77vBKWfupbyzf5",
  "key15": "2MMrXSns5KWgc8UPfq5xNBaCSZQ87pxkGsD5qpJGDuSCsyy4a9KNLXy6f3uyrHHSYEMgQ9BjcvFzGQAkxRoFhtpP",
  "key16": "JzvUaBSa7BgJcmRuGmhg7fAKN7jVkb5LHZ76YaFfpGdCo9Jgwf6fCvd4UuWdn9p4dAtK5Wzt7i9GSSUBvj4ZMZb",
  "key17": "42rggYm5cyLHU7uRBFmoG4LRp3MzFYzFxq2gUeVTWzJ7yU7XZLYkQugNPSUqBG9q8189R8ggbvKauLpaJX1jpyMr",
  "key18": "57DztTtxqyb79mhphEa7s1rSMe8zWKZt8kPhvGdeQw2wdV4F7Chs8WnLc9TjM6MoM974uKTjvX2mSDqjQTcQsmUd",
  "key19": "4JQnPmsc4rhg5Wr7k4xC2RSmJWb2GsStG9TUDwLQeZzuSUVBs288oXzTFc3erEzP6D2Ee464EvQPwUUQVgzDgUFC",
  "key20": "2fTvwJzcr8FZi8mtQWz6oNgXkTwDryxPrE6mYeuJe5s2LBk6aqBi4dgSr6vxwZCbW8Ju3VU9rfF6giJLYvsb6hRi",
  "key21": "5D2jRSnzfeheMz1V18kcLLiDqdt9FWSW4awTXGCSUJQLGn9CXxSNJJvmmTWHgyQjia7QXyDUTgqgD5Z72gqhuLPp",
  "key22": "3aZSZc2FQ9nqwcq5nWqVaCDdutUp7SsVgqZPAEkz6wpCHGDymyHhpGWD51ZnwxzRSQLp2icEVNkBdUsgFoGwK4GJ",
  "key23": "K5k89WNxJkXc2gNiAv65Zhp2K5uHJMiEsoMV5GD4tx6aHycXbyQHMfyXkNYZoryomjTeV2wdCuHuoSR9ePGR2y5",
  "key24": "2b3DTh4qBq6AWLHB9QRoxhuapgE5C5ytsxQZTgtnbGudY1vPxwAkh28QhRfsCvARpAEKAFUcS7BEZZbYqqW1YQAK",
  "key25": "477mvqt6C2KWvHBF8wbPiLLkdcJiqhy2a9msZgoviiAwdBzodviPLYFaF9nRifyD1BeYYXXVNU5mX8aRgBjeg1Vz",
  "key26": "4jQ4zg8PuwcFvx17pqnJ29QZKUW27hiXRPRgy6KsvbqSdPD4GWfRSGyiZRvn68DieWap7oJ1DQv3a7iph7JofMpW",
  "key27": "5zaPRsM2ahPHsvvfmhiByb17XkXqm2fhwDLbNH9wqYT9yVuDESkLAps33oPYRhiwfrhBgdxVaZMdQisTToDPVsVD",
  "key28": "itdnFpwp3VsWtCM8n21Jbj1ADCJsPDRX9Dc7aFj8TacGuJN4QsQjWmY4XqGTbDTbnoC4NeBXZhCzDyYDX8L3W11",
  "key29": "64kfkvZN42B1tdpaQqNEkDtzk1HKrugJqA69e6f7Urfw7tELF1EqX4VEMiravecHAo9c4UK1fPwpDapHTD3bGeSf",
  "key30": "FLh2Z3TCtQ4kiShtNuMXCE7byevzFkVz5weKp8SSxJzMooiMp1Mn3g4YTSyxkf5XJUSX7RSEeV3G7h6aMhJSY4s",
  "key31": "2ubfoPRGAtgNHrvKqfQBzNkqQwxNUNHRw1Gt3kjC1DUtBnMg3ofm8hmaGVfFcbfL7fiM762TPv1tdrU5R6TarNZc",
  "key32": "5eTK1hyW5MuiZTwmojGxsEY9zNpkDZDrDBhEhuqjwV4DxaMJhHDUBwhV7u3C73PHtiS7W9e2T5ma1hUE7dnHw79s",
  "key33": "2qCScqjoAd5WwmFydPbPb7yYaywMBqScSs3DiTuxNdK6ZBd6FQQLmAwEbFaMghitW9DfNFTfnG5osbVyLrPcV7HW",
  "key34": "3kDcNtkWa6NXvFFD4vFxs5MMoe6tNQDwBMioTXgEoe7ygcbSoxFe5GnkbKuq9Haw1LydZ9TfWT4vd1ZJAwFzcRmD",
  "key35": "42awS7e5pJNC7NcVq3LRvQgUQdMZB8rjuZUraEA9uj1CkaP7WTVozEQiKgvvRJDNBKKPqrgRDEZ1rmVK9nY6Pd7",
  "key36": "414xPkj5xQPEfusLXUBAmxKUyWvR3XGBsGZJLQnXbaERN5fNvG6QbvK3u2KWq4Sdjq7vZ1fgHj3bdjnisX1CB7t5",
  "key37": "5N9YvS7iUPf8yK2z5ttvXRVWkgrFCzj2PESh9YkbUzo34wL7DY2XRJPQ18oWQLEDLQzs3tvUdDTHFpY3nTrAjURG",
  "key38": "52Qvg7FEiNHcJg6To34c9GHsEX9Av5N9URSygkhrHN6hVnSeops7dgdhQKiUL1FKjiok6jxKAjTvLPnEsrBv8Gbv",
  "key39": "4Z2Ypi9hHaAk5ZTncf7uXbG49bM9wrMMeyK19CaJMiHVEexybjKYJwBYnrfCSzsWwT6mSVN6xvXH54AjRFEsbWeP",
  "key40": "47TtxgxKWCvHYEovHa4QVC48SJTQFNjSivbtkhuboEuQ2SbUeDbkXxf5cH4RBFwRYdQAcyyE2bL378L36sqPzbEy",
  "key41": "2RqwJikV9s6NSY41oUTk12q5cKfqCKjE3ubqZrpAxvsJrn9RH37NHuyPoWKjxFfRPzyJ1tnqzsoHpV3TqVMzewDw",
  "key42": "4Gh7HZqVanjxPQVn8fgq5aosR47cNvL2BWeycZauUjE8KTxRrfUd3Ngnu2Dx523ofmz6PdPC4NarsDAM7MkWzjmm",
  "key43": "4GGZJftRaqatZov2kqZ5i465a4FoZqiNn8CJKMCbQRC33wnKds4rjNC7CWPMEXardzoBDBsfxDyFPWmKZwy7b6jg",
  "key44": "3Gzy7xReS2RJNSzy9aQ5Hi5RMQnRN9YzcyvDF1qRcDh3ZqJjMcxDTmmgcZFjn7eG63u2j3CLhQiwxVmR98NRB3vj",
  "key45": "33JUDyz5LfYFDopoWpXFTye1vgys8XEKzz5g8wJh2qVG5aiFTVDAGSjmEZ1dxG5XzTnxV8495VCQe1ZF8VrabcHE",
  "key46": "21V3ErmMYUpJUaCKmKe4X4EftVoKDiqBbYEbu2tLvQv5fAeYAG4VCDRDUkqa8xZZJVC3e1V43iNXAAqud1tZc1PR",
  "key47": "3ScyAXwTyvY2npLfoNN5q6eTQuCaWzBD6PDg4n5EHgAbAmsgAda2t2waQtF9Eg9eSJne1rz3wJ7SqWYxejDkfsHh",
  "key48": "4ycpoGx1stAqVnJgJJnKVVzoA8FQJHkHBLETYkyJmjmadq64Yb9zAwcLDq2EYjQ2H7xstygyRtQLG1G8dvVDwz3d",
  "key49": "2ACLNkCLXYxgft8BpcDPKoLWS59Ra6ptcYfcUX8peooYUD7EbVmUFbqLqwJ7kWWAkuktcxfqjM8yCt7sQTt6hL3t"
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
