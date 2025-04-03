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
    "4tg9PHBT1H4ngLUWA8QLzuzLPQnXnpduQjB2HQqDh1yPTEMvCGvGKYqWogw5EMaJjc3Yje89hfGfjFRDkChKARTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JfEoziY6fvA6HtHF1TyfqEjf9jouhVFtArvntMZaiTAJaegtoUgwKDH715Q4Vs2Pt4vaYsfBTrF8BfrFCuqJUXg",
  "key1": "4SoviQhHN5vTFgZ1znXh8m1ghCMnsp6o1vyqsse7qWdARXncAFEmjwPvMBoCPpF1S8AoNJYArAJyCobTBriJsd7R",
  "key2": "Bb46NeS9WR6odcD2je4UBCL3jM7orEVYTA4ZjNun1UNKcm1jgv6ifZFMFYVT7feUdX8sHvcdaYFDXnwRYkALRBu",
  "key3": "3TgfvJBcTv2ZWU3usFVNSK9AjP56SSgYnCaxcksfVoxYzJYw7AC1wmCqisNfcdC8QvDiwf3EbUAAMdyJSzkSbPSX",
  "key4": "5bxZsY5KaQEzxC29zchkFsYE1YLzF5ohfhEXsZM4r62NgMUJdqFjdBuamtTZdxftszHD466RnwwemnvBUkNaecrD",
  "key5": "5ZFy4SH4W1GpucgEV7jK2jbe5XKykZJ1tktAmxSAybxhGDau5m5DN76sHsiSfqCCijHmvUJ8zR2nFXjufUtnkYSC",
  "key6": "3Kh1sbx8T54gHc4vz8spnMeyKahNSiaM2wzLsGVqmv2JeUWoRM9qenS8WpTP1epoHYuRMJqbt3tKHnca7gEEAdcN",
  "key7": "rRZuTtx2jT126baSdP5eUBT4VZuapy34PhYLnpQWWtzdwjrfJVtt5FsXZKAjWVvgHvYwksDGrbiCodmamLGnTKP",
  "key8": "5nedNxJPBM743aDk73qKW9yr7myHNLxF5AryeuzK4wyhAxhBLg4rcgWsiu2RfkK9PB4tmQZtD2HgBw2uAKpfw26i",
  "key9": "3DPJkbRsM58gXbWCPx6UVxSaU1aY5SjhdWExinr1sF2NyDNfuh8K6uXW79Hw9SQS18d29ChFu3EioNaVuqC3YRgf",
  "key10": "5xPibDrQPd7rXrVcjcWmFrr8AdBdCqfRvE7jvTnRpPxjDHp7PBXvybZ6YuPtvL7QoMe9Pp9SAwhsbmVVJpVpDk7p",
  "key11": "3ywHB2K2VkujQdTEc5GAN7qmYPg2xmLuJysRQMZoJeC3Vitb22YVZmw1Lb8itWemBEyEit37teQNx78uVhDNET8L",
  "key12": "5tgJ2hYEEdQwfkstU2yDhP7C1DgbFppg7h5Cb3Pqkp1UZBcFsxUnBmEmiRovQCxg9WqKaYgJp9yVmvJoLFSvJyaG",
  "key13": "p9iVVPphjSbdXcefNienFtwWGEA135earkxD3TFT8KScfT5h8kQE2bkd5WUTrk6SPCcc5gEy3gdsCCyWterGvJb",
  "key14": "4dn7iEFmayDYVm5jUsjw2jTqRdimN3SdyqKp8ZsXaBHcUr6TsNrLGzi3uSq7GyDFPKYTGAi3ZFTu4z1E6hoLvjhb",
  "key15": "2cE2DAJnW5ysjPWGVtFBcy31ugxy6QZJz6XdoZZC7o5yQi4feit1YN1s5yvbm9dnBhutyxSfu1zjLMnhD3Ua6eMC",
  "key16": "pA72Zs5Mh5Fazo3K2TA9Xr5EMqE7SgdaHaJwZvxg98VptgS1WdLNUGgQXTH529X2SyKroyNuX4U3EaZFxeH1WEM",
  "key17": "2P2yUmU1uLH4XEtVUc79PjpbeFgBfTBZq1ntC2EsE6uUrq9Sc8vzpnqw6fvKc2wXrmKH5WTH1BTHqJco7THEaL7p",
  "key18": "4UXy2vSrHZvGVDWcJwWjTCPNC3zgTbj9CP2amMDfXxtDrApw8Nf64whVTFvcJzJxTzYNziueT6g7he3rUqMcbPtN",
  "key19": "2LusvR1R6AWNDwbbrBNJPsnZxSK2noBHCwtNmubK7CdLA63UEXrb6Fbzxyh9yQBzojGdYcELrxSbHDzDoE2BuF8r",
  "key20": "5EuRMccfTPcTVPYraYhqctPaaJFeqNNd8v9e97esdQHcvJvM7gqedyb8DMYm2nQZsDpaEgKqqhWcs6nMmyHyNU2H",
  "key21": "5ejVTzWe3u8ynE7hTnuXUzYmGC1BSe8pGFcwideWKPojRssaPvhYmtJWa7XehWP5UhVxGSTCijz64DxDjjyHj1Xk",
  "key22": "2rb8cdcX3GiYpEMYRKqCZ2nx6oXwonFUcRqvaWdfXLvBRKTtwQbvRBmDZMUf65AjgvTZ1HR6Fiq6KoEBo9uU3Cwb",
  "key23": "3GfyCvd8QNorg3MXPFUGpLrRCrmNBM8KGPtP7kevQFp83doa3Vtvp9dBrL6su5SjMwT8ACvMnKyqJsSiqpfFUuib",
  "key24": "3Qa1tEDB6SUtQuhHhm159mskwp7TPW9rsYLE4BDLGPoZC2Kz1NSHu3ezFTWDyLtTZycJHBtU3BEmB4zJRgZ7evoX",
  "key25": "5ej1mphzYqhgiR9yifx5kW2G3h7ZrETYTAGt5crkpVHDdsv7s5YVMtdJ3zupGwggEgHhorrgN5q1yH1q1MKHnGxx",
  "key26": "5yF1bGwTZGHdMYgjTm6tiEpEnZMe1iUcw8fYMjj5NRHxNSPCjqfkWSQCCgdWcGnEHtJmLPHh2fHET3DZF8nNo1Hw",
  "key27": "4UCJMFnBkRvPKD9TjCfktCUD3W7G3qXFxSVgR8QcWQMuFQK2q7JfyLXDtGJbfFrk5M2RPuqpBzgo9e1yJXiUCW5n",
  "key28": "CmzyMbz6osmuRbyXL6zr5G9tje1GV47e29XjXg78vcC752C3yKAD5na71yUR5jJr5yvFUqcYxpi4EgvaJQFtLMb",
  "key29": "55cZTsUfZGSSa2FVKkyhF9qkE1Wc93n2f2p7W8RjXY9dP34p8gumc27kiYkU6scNBgNw2fmMKh2Nj98mSrbUkwtr",
  "key30": "2g2jRWRrDxteT4E2KQLJNBukGqUKACoBK2p4SYgZCBGsg3S3SH8C9uYxqtYZjkBHd3yvcBY8yNfXEDXq5jjEkoW1",
  "key31": "3EyXDJrpWTB4dd9xeiYGdYsoL9mLC8hJxfTeGfwX9r9ubTM52iTUGtA1X5r1ReCyauSUcnKJzSuWpvUHZiRtUWMi",
  "key32": "2hHmcmXJzMqcU9wUadViykTPPoiihr2VQkHK8ofA7imDpWnZ58Ab9ebTkxygvWaQiuztcXmoPXMqjiajqLaW1sNq",
  "key33": "vAkUdP1NUP6iUuQ5FsJheZYTj8E28ag4UHbDMMwRxRkpaD4aZYCWkqZgAtNctgj4s6P1kUj8T4eJdGgDo87SyXf",
  "key34": "2BBEHVgZsDByjksduKng6aKFPuNf6QuaiWTs8QMTEE3y6qTL8Eo4jynJs2zhvZdHqLuw18wkiWr4auo8gXtY3C8K",
  "key35": "3UEfHmCVbwhiQP1uGFjpq12VosJPVDXtEaX9Q6JDyJMPdqbjgU5xunkuJV3rCrGoqa3xabf1yqibFE1nuZeTwfQY",
  "key36": "5hGbytnfwLaHLLHH4ytgntTkfhz5in1671rvE2mktn7aHQeh2pdGNXRARQFT9DZ2PvcJmsFdBS2uih6Aohk32FUU",
  "key37": "21oFicJxzxq3AgNC3m9DVAW6ykJxw6SJ5QjBQp1jTMvWResKyiYYzR2ugFMEF3M8QsWMHgSzJjkq27LL2qH4PNCj",
  "key38": "5gmCJKbFid5KRxyEAkrHkK9r8nHXqJcX45afT1G4B1wAcEaeH9Tzgpuj8k9QSX8EjbZgnaMWx3AbFMCC6Lx1WVhF",
  "key39": "2dQXXLyArudwbN1aatcwPfp1X7hTvTGs763PJLasbW4krHSwWD3vKPFDJHPzMEf2qoG8qGydbQv34gomUJvCht3L",
  "key40": "LuGn6kyYyH3hfAi2irUH7qSB5zXb7ecoBnixdsTs5d3VUk68efRb1v4vKhZGXkt3coy1FoKCjtZcTny8KZjM5Nk",
  "key41": "3avbCkg3Jo78bQ7E8JzC6WZ62MU49TNen5LbkLZzcN6iS2snQUQeBG8UxiLUSKUKCepx1RP4jFcGpzwNwHePSb7",
  "key42": "481iTFw64xmMiDtj6A3kqjr5ksH3fTWYTN9VAsVxnTbKwDLsNfh5e5beEEfpLSQK62eBGRujSQgQpyBj3q4ezxet",
  "key43": "43eaGns3YJi4P4K6xjdmE83KsWVuTFpw9yZzW343VF2FssTDvss7iimeLs5wkd6C2NgXZKezkCh4ovQ7UJ9zNmLs",
  "key44": "2kUJ2KSrM4LoodjFuWYp1fyGCS4SbeU84fh1fBKmiso9fTrK4doVWKZPfVR2MtAgwbzsFkBWPF3VwawuNjS3mHhd",
  "key45": "4HvLTkxUWJcrJNtYzb8ZJTjEtEHZqurMGawqNdBvBwvD1idonmTJnNERXbq9J2qyNvJGV6tm1UnH4QSRGV1E4yN5",
  "key46": "35P3ikVjj9PtJosYaPAgShSSmmYc6yhVXf1weicBLohjKRDNeQC3aGvy225Htpn1ujZfmfKoEUhuQEBCvppBu9fo",
  "key47": "3SzVTowsd9mUSqnP3Hwi38F6eapp2kBZAaxr2jTV2nNnFxvEGsRhKwGnNaRKmQ1VctpQLd9YCvoed8bibWevFWF4",
  "key48": "xGu3EHEZGCLua8pEtXeDoXCvzYBWxs4ooH8hgE1ocCz4h6BEX9LxbYUHg3ruBRQoqphwEwToXvaQbhG2BdqkyRh",
  "key49": "2NJrijw8gFLZMeGpjMK5xqzeBcsrXAcpM56ZbJzUh9rZTDhFW7T9SoeDo8qJmtkjwsYuuddLhAUtNqD5qk9wfB9K"
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
