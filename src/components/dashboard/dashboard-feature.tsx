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
    "5gvLCP3JGaLW8XbsBXuRJ33AHR4NNSn1zv5JauPdpYUim4NLLS829W7vS5AU7YYDJzhvUbQDK5QMdtGxG63GYG9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yX7e6nMx98vFei4GnSfjEunecByfp8Z672iBJG7GwpPrmuS69veP7SVUCASieGvg18CGpNsXwjsj7d4k3rBKXN3",
  "key1": "4rspCPkbxvTwtU9oSF64LByn3rHyjskonG85DUmivEAVe5bmqHG2nQmwtPuJsWmdUvseXNbdDjnNcpzZ2tg3z3dP",
  "key2": "2oB8gQDd6Heak1ZeGMQqnG7CUXhWgKnikSvzaUoSM6YjwY4aHLBZ4mJH1idUP3yhc4AMdkEnWTgx8JPibmabYTa2",
  "key3": "2VJDFjFkDy5b3M4EAs1pVixeXU57H7W6Q1iWhDN6RGAAnKiQdMEaEPvzUop9nTZZ9WGr7AuTRNTVspSW6PD21JQH",
  "key4": "32AVkVoxfBWaNbiGeECGETeZJsh8bxaG2T1brCEf7yz6bUYipKPtr4znumbZF1DhKPxwPBKoNQi8uNBdUqm9h2Yv",
  "key5": "3Bs6RwrrwfxdNqabqeQaoP1rnAUhVTCnmXnB4tZJStUg1LqM5fYjPc4CjSkSunWLEiQpvrE4XMEQDf8QTFvFzMxj",
  "key6": "5YZ9A6UT3XvZ7dSAaWeTusRDoWochWXMyaJhe5HUALZsy5fmkKaJnyNAR2NFsJUTk8Nf47ByLaq2b8kt4LGabXuw",
  "key7": "3XpX97oX8XZEwt3AEBRyEKnG8uofNubTakUVDJmMXQzPVnjkBtXn2qiMhz7JNrcHz81QDPZfqyMNVaHCG5kChWVh",
  "key8": "2DK5CBR9NMwnjJtvbbzcEDjQCAUszrwZsrqfs7tihzgbTgBwM6wjvmWNETG4QKpeQNv5a5rwcwZLUE2ag6Nd5kem",
  "key9": "gAb2WkqpQmAuApXy3a1r8vR5qf7KB6A18p2Vqyv92HpFzjc2hMwF8pDj2etm1kyNX9JWkWiEebSiYJDmhECgMny",
  "key10": "4Y4b998NxTcckzmkwbaBJW32T9niZMCC6sHZVeKK1baXTafqv4yuQNoLNbK5d64tVJ2usYu7s1sep9d4iLLMdkzJ",
  "key11": "5v5cCopfy1zHuUZvMX9JUUyXjzdqbWPTYZWNBHjaE9cysEKFB1mpLbBnZ2gFXzartsTwXctHVGGqr8YxExHf3YHp",
  "key12": "MVCNvjQzGHzTvxUXyci979paoEaUvAx4ibWLpckQidM7NWNdiZnx7kSAeqBSy9TSBs4M13qTUfxYzqUNNwHBLaY",
  "key13": "3be4QGH2zZQ8yJCbGEbxx47kw4ZxYtpeKysn7Bq3Sz2NbWT31ULbpLbhrp5L9kanucBLieHUsQd4hWzHZ4p8pzux",
  "key14": "o6R6EDX42YrdNQzLz6H89H43XUesEFGquK1qzkQ8s2HJujfsvMmQg1au91wHX88jGZNvWE7N398zECgwazju9hj",
  "key15": "3LvHuVYDvJUBrWVH1q5ZqvycLqZUw6jPjEgbH7HUdamDTamnBE7nBNZNL8cofCPQ8ekf6MDSipgTHZnXw5tyb1je",
  "key16": "5KdGmRLshw43ia2SndwVfTsqGSzbYmBp3cT47LYzUHmraaNEVopp2gpSLnhj4kKH4BxSMHTscUJVjVyJmKzfvWwB",
  "key17": "28Yjoc2qjR4nLWAXoGyLMsvsYrNxs5UqCVKoSzJgqA67TLj4cyfdy6HghHuaWspKGAJPsaPiZsYusr44WsVfQfng",
  "key18": "2ea2xXygpaznwnt5oSgT2QCCgPseNzgwZ8JGhWFmkusJGN97wdyNkL28NaG8232FoVErbRwkGaP2oxXkwAib3Jve",
  "key19": "3NVz6wbQFktjr1FcaoxiMp6J9uCKBpaD6we36Mb3Wuefh2J47QZjJyoagexd644NNT6puYRvGVJTC6o3Mvxz36VQ",
  "key20": "44C25sHtC1wTBj76Z9Pu6AfesReUFTPEPmH8pUJKhoqd9gZzPR9ypTJvvStheJVz58arwwPeYQSYz2bUvY6ztCiT",
  "key21": "2jAAso6o4JRhL1vcejR3HykrF4Py47XYYtSb6A5wLJmpbbWhVnuWdFN3RkAnUZyqeN4Za7nzAmzcF7dm5CRA66iW",
  "key22": "5Vwz1aDcqC4WTTHM4mRY7H9uvnqRkz8YXipf2S2q8YpYaP4nuHfEn6xYYnuh5rzeKYeBgEu7nWbDMuCmraCdKHeZ",
  "key23": "32aF3cMLFd49jthgQkgczFnZ9kVAFzupde4NhGhi8XYq57qZKYNLSUDYjqsbAXiry1hD2twsVhC25o2WVLHLy3Sw",
  "key24": "5Frk6ZuVMf9qBkSmR2wCoNKTZvK8yy7a8gHDYFkeARdVkdFoGmxWGBrQDLxcNhPe8wFW5w8mnhpcJQW82k7SPptX",
  "key25": "UfZdSxBZGhxJBdZbtxkksTfP14We9pU7CXiQjsMvPfpbgLjapBQijFUdswFDmKhtnJiV3YRMkokfctAoXLHgvSw",
  "key26": "5fAFRaUr7sX5voGnwTQW6nVQpCTDUNucgFtiuK7GjBooRrFs4kmppUR9NwXdDvinqTNtpJifDhcwfBzxJB4AfFFk",
  "key27": "2C5XW5AGK8jpAK3XhKLPpTUQK3LYLxCyB8iDfp5XbWYK8xjeYpzKKrrMFHGtJQMX3C2dNHb1mHg6cZx3QM5Re8Bq",
  "key28": "59hzSSq9Xy1A5pd3fuXGhZi6pYf5QMWiT7Zi81eu9r17YSBa3PUmeTM9AhytQY66yCyDhFHeZJueLgu1AQgVYJYh",
  "key29": "FBBYJmbXU7yLtrNJwTT23UYrj5FUBQCnQYZJDZQNAuFu6oDxjVJdsjU3CV1AiqPwaFLX6Kg5r9bza7vyQPhHuRw",
  "key30": "53APdkbEx5x8UgvYEMr3uJrttYXNX7WdEoBBLVE1He3WgtkeR2WF6aQv2QMrqU8bSmeaBfh6sVyaYgRV6AXphQFe",
  "key31": "2bYwRU2CRmESv4HXZnHaBJw7GYUdaLPPFizBULMxzzwNnPoYAqA9obmTzpNVbriThNN728v61SyVzkp224CNxanq",
  "key32": "CQt6u4ZpuLAhs4d8PqzdTQfVkmtx6E7fyys1Tk3HH5QpBd1btJP9a4jNRw9CDWtkbLxN2utDjdJ7QmumQ7ZfJ57",
  "key33": "2zfJuvSjLvbCvCQAubj5RVBLX2AVtqmK2N6ZfRdatyXmV6VP7DtXCorBb5HsrtL45y7cmG7vwXGPh852ter3qBay",
  "key34": "jZ1fvGnTx8cKWu86aGiP3jAV8MvAwmHdKmLqodyvukyYdS3n9mev28rKkJRTQvp7PEnZvd9xm43xk7hsEouXS3t",
  "key35": "9YeyTrVhErNjxxHcMSr6c1FcZ3P5JA6iDg5VmVtLCegsTQ4nMRKEHDrLLG8Q7fedEdwFzY3pmc9CLfg95ahow8G",
  "key36": "5NjUQQ22i27sHBCD2fkRTRXPUj23PhXx6wJeMcfx4dokL144V5Fx8a6YTnB5Zr2EWsTomEjsBE8DeCBWGXT3QkCd",
  "key37": "8HhqKVoT4za2S94McB3pDHij6fNT141rTxDkT6tXgicADaVfdRZAup3fExCiGXT8DMJix2KoaNs7FsDAeVZ1twy",
  "key38": "5yomQh79wJx897UEuyGku9viaB39W4i6a3cq1XZrPer7Pm1gVyBRvJdmeZAgF16jkeMzZi5YcjrEW8wRCcZdUTHB",
  "key39": "5AQE8hEhswqDmbPVms4iAU28yAr2H5nSXRZUTJcTkj8GPTnrmsw3YKanzheHr4jrNbdJ3k2Wutg16tSw3NPAgQkp"
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
