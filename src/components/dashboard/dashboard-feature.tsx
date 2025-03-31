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
    "3fpCPUUEYR2sXkk8TmcoQgYNGrd1nvCUMwnA7yWwfvrwLeP2L1z9stJx8zp9sdoDPH11JZTTBVactnSXraMLrGiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nbfYeEZjszvNaxykppm8x3VCtiuguAZuoDstKaf9wtHN27R6waQK6EBJjxiccrrgzqq1vRNB5QEteWiaEKx7o9Q",
  "key1": "4meR9XKa8WvmcJP24YN6ZDmErPtwLziJTq2ZQAiAic2yAovP6hrqRWk1kCcmnf3bNYUQmR3yQa9hgH8WgjUYpWUK",
  "key2": "xqbBp8wiav82VHZPzVEZ6TPW8bXh4Rgz1zJqhrcteD5BqzzJLU2nu1v9LJ7zGFe2a7sxxeaMMkYRGnSo7oK8V9G",
  "key3": "trdSxR8KCb9vsypkLYJJyyfXT3tgpSukvrzaksc3Zerf1hm598Tokg8jjpdFceqVZcDSaoWYAtWxgyHbrpr5Btf",
  "key4": "2jvzk493t5DxVtNJkGH6PXxxDGwBTqCZ4H4jfu2LZj3U2pPTzA5v3BXy1zp86Cxhv5KGs26ujeXiW9JdJWesMbDQ",
  "key5": "PpWXSt77ppDMk2qXUx45z5VGNKj9nmkJ9Y9rXoK62zwjTS953AGEok28TMB12kfGK87Qw294yJyb2q6aT9dPKKz",
  "key6": "5h8Hps4fn1aakjC4bAiP5NCcEjfkbhu6c1cW2bYgo9vEptXxvpABAjpTbgAMh8HxwTYBUR1vPd8eGEspRXNEccFf",
  "key7": "a1nyw1FjRQxCeQGx6PN2y2mrfHEr477woK9dZqb5qPEbwWRjXBrJXLv7m7cmy2hC1MAuxbN4stGtPvzDDr5Egt5",
  "key8": "5rSMXX6Ccbat12fM8RnXVcQdSuojNF83mY1MPj9SByF5ib1EYj3pax6sRvCqbwtVcE1wkj7V67ffHzcpTWYiHPdk",
  "key9": "3iXuTZZ344KgL6i3Mk5NDzQjq64uNbutr6UoxLphb9qkGiP7yshUbzNNi9VriJNx5TTfpZZY63JGcHXKs5bpC2fp",
  "key10": "3j73oZr5S7YvfhR6TpSpoaLoyY8tDnU4GTanuqz5C8k9F4GDWuZya4oHyVScRsvmKa5L6d2teAkXTL6Xve573iwE",
  "key11": "3WaifV7qDQPzXwmgdBsCVuzY2NoD4UCoQJn9VTycmHRL6Msarm5ie4Ne9mn2PxVJv1PcVJ3Jk2ebumK14fmtfb5k",
  "key12": "3Z3Qsh9tg7AgXK1bHtvXkgFrS9H7P8BNinZEttEioKA2Cd9BBoHEymHJkgMez4DRaHynTHMFo1xxZTuZXMnr2DrG",
  "key13": "3Fviy76AVAgBEpuvoGEj79kBpQsaoaASgibX673SUxSqb5NpBTMoBJmVhhgBWpukVs5sb8DjykiQmZe9u9gGkG1E",
  "key14": "2Rtodoz91JNiajbRvv7gGRQfsZqkM99i41nwrZshthEMqCr7XbDGaFmh2xbQ76rknQDfU6X7WnYL2EY9K9j2Ne8c",
  "key15": "4yNbSHiEH3jWLV2Nw5ipruzjkwdGmgCNCKpyifFSbTjJm1gS2yDp1uXgFjt7G1LCjy6BoDbMn6G5haUbz8U8BAyR",
  "key16": "4tREc8GzPPsZE5KZYKATJEhr1nxTbf6bNv3RwyC7L42RgbuSQQECaEbYgKrFEnfwMsG4fQTU1AWstEQphej1cRVc",
  "key17": "umWjVAZgo9LgBkBosqzVLXsMQs2TvYxLvj7sNbacEFwTJQPRXg6aQSgSrVmmnz8Vhucv5kW714usyCZ21aCHkgv",
  "key18": "4aMPgZE3xt4yY6eMYySqAwqCai5pnoUh4qqn4Yhz7vrqtScnzz4k39QQhBKg8pyCNpiiE7mhYUY6WJZrNzpHfkw7",
  "key19": "4iPF8dPxk2NgBVAEN9tbqFGez9xV5FKJC6sHntGJAYAkCUsruFjugRdnRQyuTaTDqWfrAZdBeW8t3KTz5sRer5Ty",
  "key20": "2nyA2QsnpszXSZtDQZ3ro4THrPovSHjUNSUwc4mpyJb4azq5foq3tBPDXt9USLkvnjzVVw6igFSdgSThMd8VTsr1",
  "key21": "48W3kB98qAJJB6a4Ty5K2rBP4hCY28MS5nmAv9yzd9wuF58fSCGEzHtVdwMTCJjBaiFeqVwmkskySVUFGJintVvv",
  "key22": "5zyLvg6nwbdPii59fvPEvxnmXqFggqauRXJooaXyQjXz9bvusiKsdotFtesnwzvcwhE21K4owtbrowcSHEXwnxAD",
  "key23": "5DgSzaw3T2N68rezRVp8RJvBWLsNLSZR3QMsC9aMfchPYb7rLJbo3PDpycWcoNDqLuiS5Zoa3qvHR3J4UekeC83c",
  "key24": "5tmEvg86dkPqVPEmiPSoJsVxTRegBa64To2KTvGEiRogBc78fCF8QcZuHq99aH9mfahsVPie392Ht8NyRrMwKXD",
  "key25": "4CViiFpMbr6a3NuKwnS9rLQ6DYyUU1Ts4UQahNm6VWkMX6LBYcgJThqS53JmA9N6zNAGUDkJ6r54X52mSMQ36kCn",
  "key26": "5S7vq3gWCSuRbJf3jmjc526YJ2FghFeor94tT2kbivvstMX6EJeJ39Q37KdFK7esFg55aAXJf1Gys6TWPtcXTJYr",
  "key27": "5hEFBskVo9YWjLWwX2HJPqH19YjahymoACxHaHiY6kVeA4NgrYCvnyoLKtZ1eRWGiBcFCw7ki5hTkBxT9Eg7xkrw",
  "key28": "2UvWszEBiNnmCCDx6HCNQHA6drYjLcnJsodujqZS6FvNMJ2xAGTJh98XPKMLtba7kezakU7V89TaaAArNBAfkMJi",
  "key29": "4CH5n5ctLJP3kF3jAnYPcAv1o63WU69hzRdZNhJuVhzk88ycGXSBcm2CqUWTnmjGUoXRpfSvqB8dsQC9ezn8zc4J",
  "key30": "4Eg3LF1fGVqxAMTzf2P68yeoockmUFkAgg72pwoZjehiXVmfquHzaDzdnBQpkm3o8RnNQ3RitnZ7YNCWp24ZFmUP",
  "key31": "3q2Y3hnTXrWrh8eyd1rMqfZZEHty6TAvyAxpVNGCa2JFp2tHwvGuRGy1iiP5rmD9pCNmwqjJGqXUd8sDq6i17P9k",
  "key32": "5K6XSYNprBjoPpxUDGmnXRPeSyjh5GcL8JRgJV1NE5sFyHH7jWAhNoq96kL8NcwQccnNaYKhTRuMVuCsVi6z1DjN",
  "key33": "in91m9WXEuDtb5fNXZv4qWPgJt5SWzb5q2Fdv5bkbF5kL23gCA6Eb8s3aaWKkWRhq9RoEXjHsizPiUmDL76wx5J",
  "key34": "xXh5PWwLdUWjT3r9qHiQC8818Wti59k979UBLrtUu6CH4uXqKHzofXFPCJcpxTgvywFnyUsBebuTJisS5ycegca",
  "key35": "5NcVW822qfEtFhhoeMX39VmASENhn6Ls7fbMry1BK1bXpWXievnMmNtpWjVAYgy5cjrMMUkUED2Zy63AFzNdsuvS",
  "key36": "3Zg4kbpmqtY2TVU8hjb9oJbnxDv2tbpmGQoyJ1vzWmfvUg4Fcfam3B9wbgbpCrtjJAtGa4eEykH9XEemrMrATaNM",
  "key37": "5VHkLw2gQPNPmfoQjTkSZGwjxwUnLbRTVA3rNmzAvp2fyVjMKV4fFiZpZNPVy52274q43jQk4SchKEoeCGG8xyBw",
  "key38": "5Kr2mqzVt3TzAXLPnJheyyuND2aX6SrMzrPYuTXJXzz3DM64iSoJrxSjan3ZzC9HdcgyUtAVn6MDus9WEJ5S2G8H",
  "key39": "5JCvufRJa4o3SdR4ge6QvfsYZnJUUP8swu8pfNdX7q7vJvGnLzPDM8iHAMmgoU3GFwKC5SmgGt34X7VX9MZVhumD",
  "key40": "2oYrXo4ozRPeAe8pFnmaP2zTkVFiuajFnx8aJ2VXf8ke95N2Ej4qj3EiVWz4qFrNNDUiJGbfjUjvFHgPGAU3qsi2",
  "key41": "3zfm9rqhiuKwX9bGeotMsEGQWyeS6BYefxqrJ64L2kwp7qTGw3LFTFeNnmuTCPeVWggWq1mUNyBySdkFcUyADCuM",
  "key42": "3scvzZdNULR4Vd3Viav8txZNPM4HZAp5Q4MxAdwHVpByyMTMyP3PxSv4mEC4iQUFFgcSmzExZFouwomTvD2zSrmK",
  "key43": "5hVDDXpx1nDQxuZNHbPd9KJUCfpMeWBB581TraBaY25TBSTnXt4HYUUCvRy7ZKiYbcNePxDw3PEK6odFBPhbG65n",
  "key44": "4dQVk6duyiu1NyctZzBibevmmmWFbPhQuDhb14vUdx7PEWPsqhoY6Qo1LLSTQCrMxh66uk4gh9Ev1bceCDMk51Xr",
  "key45": "4LRCFcDHs4EaKx2i8ctMzwA1MiEytLysaZME87f64MYENvgvVGTZuPS4Uwnm9RmGdyucP1D8fdXVVcy7TUjUGrwa"
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
