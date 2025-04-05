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
    "2ur5eUaib1geADRb2zRpVp2dY8Ps9t9JXkekQnbRkR6TWm4i9Mn99LEC9nNh3mxY4ZRhednP1tZ8qLXjyfdHjJYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEerbpGNVGi1TAoBqD8uD2QaLiSY24mKReg1fuJ3rLDhyrMuXsY1czrDFHS5T9K9vNV4JB7jKWqLfZsTpjWVG8R",
  "key1": "4YonHfB3JuWkFeDUMpkRw4PPnkDG3KQcx8yNBH9WtXrK9w8k6yTB7nk9KZGWwqNiHqVmyys85qwFTWBG6KdFAyuz",
  "key2": "4XCJuhdDiK6VttxwQKysy3VNhZTE5LVA4Zdv9qBTeeydLXCytvPt4hni7rGSKMCg9H14V6AGtXNvbCf8dnXVVGT",
  "key3": "2ujuY7P54PYMAxArHnRLezWqnBMp6GDVNHBCabEUe1L8Q19BSvuuqJ6Scfes1LLi5F1ySH4pifKcMgGBU8Du2mMg",
  "key4": "2YZbfLTAYqwoyiXSnvwgnTRSFULQDAX1aSVPt6bici2qLSfQmUSfLtjqJGDEg58qnRqF5WbxMnN5WHn5BuozSMXg",
  "key5": "wnw3vzDJZf15aWrNAkepXuSG78yoD7NqwKsrBvYqiNZpkkPWP748LyxdkzAAnDNnS8pucVVrreBGFXseXy8XuKY",
  "key6": "47F9VejCorig5Zq8rH9Dfrmx5hA4cKZnfLcCE47P8As9NPcVo7VpHVDeS97Ec5yYDDxpdL2u9gyKpzCgsne4ddbA",
  "key7": "5g1SewSejyReJoPkzwy6W3sCyNVvaNAc8iFpNdBNGarGCmWhFAd2QNyTdeyG8qPyi3YAvSwHHThkwkM5SNRkUEmr",
  "key8": "3ehGvikoBoyozkC2SaVpViqR4tMmvMraZQ5wpS9id4EHFvttqcJaGN88ADxQ2KFqm51oYMNkY4W6cE9fLYmXSWE1",
  "key9": "5PtkqcmAbuZ8k8vStwsEG8cXPvJVVDgqjQXEFiLQpsmpyEs2UGMC6bYnPyWVkGMofhv7XH1WzyoLxZvSJnfnYvrg",
  "key10": "56FBScFmuUYeXKrWGiagFAp2kGzvirqnh6SCQtDMJbj7pGCQH63Qmv681tHKxnCKTetBboRzCy7FU8ai6hj6Gjif",
  "key11": "pQeoZmV7T5RcNvzKAPgrJSCrbiPx4gXfBFNhq9NDNup9omAEtGYoiPSPjQxdSa8czWEVtmiktDbbCsgbaw6FcPB",
  "key12": "2ePKwTFuFkWDSDsyYyWmS48ACuUcztzGEXvfZDauckrndVBbAAE5rxjChiu4gevFDWC3oNeQvRPGPBzFDJYwYpT2",
  "key13": "3SRt15D59QccBmCGyH7bScfpxN2KWydC6YLxps1RRkSz5qHLiey4LnrjDkhcpkoZuFt8CWN5N5436qvSTogsVNVg",
  "key14": "2xWhzuyTNqdzF2HmSKWwsviXMqHEaPtibrGJbx2CbrGUavqkFmHMUGtsyEx1XGu8CY718WDwwomqpw1nH9GivTLL",
  "key15": "64xUEBgFFYfyHYhh2JmMzVGga8XUy7WTKPbLtDxDEqdQPB2u1qdqEDyuBxnKyeCFRp5jqVnDeWMdxB7RDGHMqCZm",
  "key16": "PAiH6N7CWGE3R2yRBpuJJE4QBgEV19kaEpBY5gmkb4RYDQuSzjB6a4qbb13QKdJnXMecbk4V3saHbfj67Q8LoHt",
  "key17": "3A1jehDQjqYcbTMPTPiy5cWAHWkJPPsZAELkR1LGs1cRx5UDSMo53DMHJ6xTBQDpK2zF4njS6HoEwRp4ce4Vzfbr",
  "key18": "4wDQSphW8SD4veKSLWbgzrnN5EdY2MJTqFsU4gNc1UM84ktUgaNjDyZ3TPcsnDHUzqZQFbu5oashzc4djrVDfCr5",
  "key19": "2MEEUnaa3RYHsSv2QGpPCf4CeDtnMsA4S6T7pzN2UY7aX1GSgnhXFPDaqonQZV4dd9vcgnHSNruxXLvSYx4nK2Ej",
  "key20": "2YUanSH6dxrhV7HbEse3j3zTeDtaa9sNiWbnFHMzBffc9mPP1gpmCLJiEiFyoN5iUdJ8nABUh1ZTLw7KKpZZ8Ymq",
  "key21": "3Tt1ncLCAwQvYG74kutzfTviyYgrKPboMg88JjdfVYvVkFPAac9PmvNifRrZnAUW7tDkSbB9qbW7ytt6cdhVJexD",
  "key22": "38N2tR1yqjXEz7ypVcatWdy81KrHj6CZa25kNVNASFnNNkfDtfdkgRuzZJ84Wy4PnrwNdh1YNe7ePW5XX3DawRhX",
  "key23": "2RvJUfvRMp3C4V2LeeWHpUotRrp8PQk5pDYpSxvJVvStpypCpp9B4PW43mZDaaX31aoaY8vNWFN1kXYF8ggoZA6z",
  "key24": "dK9x812rnpSAjLCiDysfsuYaRz9AvKu1siL3GttGzHrJ7DKCAcJ3Zf5xoQoGG1feNB1yH9CZELquoBQWJZa12os",
  "key25": "5p9Wi4VVh2KdAaLdDCk2cZauv6LJWGByx8E4vn2j8VgQjitZna3sex6Y3RbyWGwyCeT4FyctCr4kDzb3qDodBHQq",
  "key26": "2Cq8tRREf6MX3EfE2HajoQPFLvGfHX2NN5sxHMzc16ftLEUHR6ge9icLE8yVsGqxJUsYRnwFv3ceMkH3iA1H9pxz",
  "key27": "j7P1mkw5XLaMUfQFk5FyhbqrV5k8uNouZkxJcEu6HaGre1ZdSavwYtXryz4MTFTScrHg5TUBBHQM9QStK2mtukp",
  "key28": "3hbGq35XHhiHdBQJ4fS34mA6GLzUTsnwKxSRMZCGfJRWvCHtL7cuv7PKZdsQB3JQZLGYvWZBowKSZoc69Gd7HMaa",
  "key29": "5L54twxKRbq5v1BXypkVkD1RHWP6R8G8VrykT3fZXguC5UbrAxxnuZGf1DVN4mXrXUEVYWgKnMtJ9Bd9pSDG4Xh",
  "key30": "2JZybrYeTTRRe8GsqfT717MbpjMuUHkYCz3mYzFRb6eTeYS2xTRHBHawDcVmTuRtPUQTEycw6e5m9T3qS5JHrjaR",
  "key31": "2GRTsMku9tmrwRa3fh8Dz9TLYtVeyUdGcBWaccDK74sJabCibn1Qf8eofyxm4Pb24imeSE3zFTLKYR3Dvwpaafai",
  "key32": "5tgj1r6vyvhkA48wSu97L8oFPAjasRFEN3bXNFpPsBD1kwKsrTuEwUUhv9PXcSy2FKPsryCpx425RunfdquvcER8",
  "key33": "2ba4cgWGsKiRj65Vyeuc3DikbtT74X4kufhfCy27HXeFDiz5rr22UuWD8ce1MLQZEaNjEzUoaLQZyYpc5T1crXMi",
  "key34": "22xLqXwguaM921FA5cfzeQHFmh5sJqyQbbCZC2dJYrjqEgeXwBuPdUXu6SuXyYLb9i6dnNCx9s6qrpdJMjLpGca8",
  "key35": "36DQvLsap1LAETYqzgVAxXMPNUgT3dWqvyrrpDTW9JHTNFpCZNqadJfyEZhJvhrsae983bp9AF7LY8LJ5EZdPXsb",
  "key36": "5NFHyYeLisu1hrzCazMq8vXL9o2FRbRJ8tcTjWoM3YmjyjQSDSzZoHSPtL73e479Q33RRFJmgWK27Zpece9Qub3T",
  "key37": "Wzg586CfTv63xYzjLW1FZPBCVuBEjWPYFUD4Qg6ZGA33rMZGaDSzz1oFC2uqPMchM9CfkVZkb41u7zcETvm5HcK",
  "key38": "33aGBXBrwG5yjtykqUMpRutwBg7CaHbr3YgUX4iHN7abitx7WjZAWwKZPQiugrcetmUozhNzEhjMuQyrMH7z31N2",
  "key39": "5ajcNScqgfxy5n35qZgZcPBPY8XWeDEuD7chPjQmmnjC63oXFLiH25gKe91LnY4248UJA4ScnS3iHHe9UTwihTcz",
  "key40": "3vLP6kWW4vqAY6xyA7vquZWWG71roBSLJR1FA2eMhYZ6dpQq16ki2QMp1WBdStGX4irGLNdP96S1xo7kwo3TSm4N",
  "key41": "34RwUJS8QhSf74Evmdz848zshgzK88b8TopnKckUFN8XEmpJQXeFCcGevJacoTdKihSitzbxpCRrUeqG7n12TxGg",
  "key42": "4mdeYDWDQTXDdC5BNfVxWeDVaguwxdtwAWPMMuFy5fBndFEb43cUX3DbeEt7TeRC5sYTJ2UrJUX5pqEMYLyZe1g9",
  "key43": "2udWpfeekpcdqztbTLUJfNNYaepquPBk6kMAbv69Fuum91oXHJmhRBRUWkKvVsW11X3V6KHtPVRkW9MysQ3RVMFz",
  "key44": "5oh4gd2zMBoSiYQogBm1NmDKkqCuGQWz3kw36DTz9ot8kPEE7b9akktdZZBiH1n6u8KSaySGrH64trTWS8wpWxU1",
  "key45": "5g5AWBoa8aqxcgJcu7mzCsAitRRDu7uM68q8F7MvojRVNwCeBLVUS5rC9uEttzdVnuuLmJDNjfKJZMiYrRH2Gv3P",
  "key46": "3gBo7cH3dcE5HogEmiW6XgwHd9R64y3m9PtRmzG7TSUBMYx17hRU1HM9EXygt4PwX2DqapGfXF2fSAGGxyWaSZhh",
  "key47": "5QaFSMy3AQhLbEsZrSFEBXygbqZ3jiibkZMgXMfZhdBzSdWUmqQgjyZwz1cDtHz7ct7crbE1v8fSTciLGXy1i6Vp",
  "key48": "32JRquZ6i9aj8nR4t2oQwD2KoL7YbrnzoS5JFD8MGTdH5qDVShDTb5v9ADgVfa4P3euUoFNM7NHinnUqs8r9ZWzq",
  "key49": "2zhsxD4T5URpc2AAeEjQhCN8yeD2f6ongfah6ssVL9rCMvaea86aVMDyVh7rw9Gg34fTzA7zcw5QroSsSjCnzoqs"
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
