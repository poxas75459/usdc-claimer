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
    "2PxrzzhvuDkxiHAjQkMEkF3X1zS4uJ6HgVUv5sN8Y5JgRPF4qvx6U46G2zXJ6mpZjEKpBP8d6VUcN7Uq7kodyWr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EMK3wqNPBtKz6LQebLrWCB8RytYLzVPAyzvQ83GFwnFuHvUow3wADTcwHvvWiYjekopjsk792PZNDSmv5FwPNWa",
  "key1": "4ZRTpb1wyemMmbibHS6LtFtVqfBRYMyekjLdqq6dTYL1fcu1PrkbHw8Z3cGWy3ARtkFib1pQbokknrL6uhJ23jvS",
  "key2": "2L8FyHQy1WZUU9gUdeHSCSEZGqR1ZQ3W6jCyEmhE2EQ9qWVEpTGnUwo2SP78FZsdDh3FRDKGoRMbEcyGhjajNUfA",
  "key3": "3kn5sVgymEhdd5V4uQJ6XJnn62DVnRAJqTYttUFsp9op5QB7MZhsWEikmrCKnPqz3DD1fScAaPCNchKjSpbkqwpr",
  "key4": "4Evac4XE1peDGJZgyffDq129H4mY93jTD46uabU7gtneSN3AuoWDBLGkwbem9vsRXDzWLy74MVnZEiby9jH2WEtD",
  "key5": "53oUMXR7UmTmaBVTFCfndahvfS8uAeuDCCSq8xENjsMj7W3TUNxqX9tgNwYTEVfyeNPfxAwqaBSGhYXPvuD4ekZa",
  "key6": "5o3qCBC1mEfgz9ezUYVwv3v2Fj1bqR45KTbcgpQHmUga6f6HkRNSimHS3HTKkTczEtqQvH85pS1wrWRsgxFzv3Tt",
  "key7": "mvNSmsP3Md6hfSjvTd5ke7uGMCseSgxzmrJ6qqZYRsERmokWxvVqAFbB7fvHkNbaqhu7kaDZen2BjRgKJwHEkwm",
  "key8": "T5Y8gRmxyDcVYmu1d7ohQY8LBg81qF7SYqE5GdP8UoRVqR1rW99jjNV4An6gvP7nKCjHJc3L5YoVW1EZ3d2m3fX",
  "key9": "61Yd1NkMZpkVHfaBBsiiXnWM2sw8qhecAY8wY4A5dAcMY19SptLyAfUFyemui6rQGgXyN7B1mMhphQ3EfjHgiTHc",
  "key10": "WchsnPZWrpH924i4vdoXw5QhCKL3PtXV2Kq6WUELUxErwZGdspkoJUq8D7AFdyejZsgMqqYVzxakZiLvdwqMQ9T",
  "key11": "2WWnFZDgSyWFVDBdhTeWsa3ih9H168X8ytsZdbP3Yrs6534pwn7r6HhjMHcaN5SAvVoYJHGgQrMcKMFND5piyQ7f",
  "key12": "21GBhhzAVMhQuJc6W5iiJct299A5fcF31EMx9iLFX6nLohJjetmk7a6UJ4phjF2TSFvjLpDHjBQP4tUTGTtZRWAV",
  "key13": "3GYiVCbBUWXMzYqzRZFK2hjP85UYwmvXKaqEuEFC7sAs3xGsq8UAX5AX6RQSWKdqpsxp9ZTJsGsnuSymgh8WqTGD",
  "key14": "4hRvMhG46cPdK6iTUjTxDq7hFp9d3NnceFnUynNL2uW9fhiCL9GwFBf7GiGjJUYJQc6E3nCgnbrbjr6CMtSMX4Gx",
  "key15": "4UNNXE7iZ7jZ4Qf8WieKJpQsNJ9De8NiLY6CF3WrvSg1K76FNSGUZACUu5eJHUcaeqzQRM7C81Hxx3yHg5brGGz2",
  "key16": "33PSEa8aLXbh11UAtwL26Mz6UKn9kTCtnZth4zPraFqYgjstDkpJPC8KoqbuU3CMNAifELZiwb6qeLf9VXkgEZnU",
  "key17": "4CeuFW5RUtwg7hYFF1PW1H8G5Geu2sxhGVV4eo8VWjeZe3zPSHb6C1uZx8MQLCdwTVsBxCKBeqn6ozkeqXauAYF3",
  "key18": "8s6xXFd5FrG9pW7eisjMx8WtPqMkdZ48U7fyfrCfDyzGnGZnisK7UFrCNusSu8d5PeHPngsGw4q5joRsU4d7oWA",
  "key19": "YSC7xmLGRb2a3QztSACkCr5NX9RSp2B47DhZvjNo3DZL1LinvZH3cxJ2S8aXGiBXXrabnzY6KDmpRyXeLjpXcLo",
  "key20": "5bLE5ikodky6YndBuUG2Faso6jXL7VQu3oLHitX6DEV4LYgvfvEaw5FgnCRyucU4rJ8WxeHL8azsjKktd6aTPvGu",
  "key21": "3nwDuzkErK6J95PVsRSqbCETr4ixwdTKL157Z6SnymMfb88mYwWjXcFE5W7jMe6xHznmedLuw5LbKdKRE1dhPuN3",
  "key22": "3nxEfFcp9eBeroqCAv8pPaJQWXsST21HqnYeUsuXGFXbt3JgJEdamYD478tbMMviE1WefEv5fX4XJn1dGzB5XzaB",
  "key23": "24n8atjoxx7jLQJR7yFw2EF2eiG6bPvX48qESS9yBKqokGK9N9A83CFiD2RdzxHUre3ihvFFvRyfPPibL93Dfjw1",
  "key24": "aJcFfQ79SXsMGBhJmCYicjDKkXhoguq4QMh8Lapz1eDezFoWEPoZigTu2WDxgtVWdjGwncYske8HXy8iLpXjaqi",
  "key25": "51Dc3vZfuSAARGJeozuU3XVeAd3yX4Vavfeh8Q9FZ9eUHFNNhD2i7Bk19D6pTzMosTB2X5AEM9uHYzg5gUdABuVj",
  "key26": "364afXH5SUDMZcLBtor5h1zqXMXy2rvUoBKXTYa14sLNuoFGbnigGNmprjp6Pc1JEKggyhHfzYupcMDzUQo1iB1q",
  "key27": "2Zf6FjZiFanRsMDKCrYJFsmPSotXdBWWR6iGht6pXErhMXXZ4cTKUcFdyUDYhPewnTMYVdhxeg56P8aDWAPFQYpY",
  "key28": "62HLWqGF7dRaB5XKuCjpTKEsMxaWFmysafuXP3Khob7xNWCSy4VqMtecu8EK7pYs9yguhGXAdZ1s3otjTAbZRmc7",
  "key29": "33J9kRhcfxRs5dHiEEo9KwfA6Xy9zfucuKiHCEsAyK36qzrYBJiUqMppGrkvBqNmGhr7P4dd8F8HiciS3k2EhsmH",
  "key30": "38wgsX1f69AaQh4uNKEvyW4A8wAEyn5U2kjr1uqqws6VWhGzkicHreNhvAWUvLQdFobQGE5CHfwzxDEeXMxQ3sfW",
  "key31": "5GmmUenqpSDttJ4ffgySXgfRFck9joS1F4t83VUxp4iHqtpMgU9qxMkBCLKyf63fMD6NMD7ctJf3ZbfVJ78t3UG6",
  "key32": "J2cjq45CzPqU5HmKwmx3aDDk6nk3AwR89pfovBPmKedWBAxTTtuXc4Kn41nTvarX57ixECWoibUDoVT3T5kUMbs",
  "key33": "3m4ZgF26gfewN1hFQiawdgH15Nk2s85zJU6M876cTPyD4tYUGa8BVNaNTN9TxrADPV9KVv7DHVQhJFLaBEgEKYeo",
  "key34": "DgJvCxzt9jXtnC8hRAPono3SgNSPSWs7jSFMtXJuxNChDZFVbqqmfdcvE59PAE6w4eaXA43iHeDtKoZiVJzuLXd",
  "key35": "3u1rESDKtjMrWHafoNzacwmeKdCaTzBV5y2npszo7DuPrpEHq2ksXJg55D8Wy48wF4xU5UC2fyBNcBGTy6EYBBsM",
  "key36": "2piYaZHmPRM2L3wr7CQme4TdkRLxAfozRjQ6uDNoaqa7RtRcN6xyw9Dw34gHmxtDqv5epBexkfK3JDdswgpefmXQ",
  "key37": "DRr8VBfP7JDGtp3RGR11ATy6PY863RVbbiRCXmhDkxTDU3G7KLL8uTVufjsHeoGFDXzQCNNF5z1wbrRzMTLduQ6",
  "key38": "4H7X6bk14zmxke5eTGa1VcqB6QpAwJS6kmkyA6T3HfTVCdu731uu3P6KgNPrYRp4NGYMqbGxtGoPNHhoqNdw8arT",
  "key39": "3seTjQALus9iQr4gfuu2ZoqsEKc11SgjwT3P7JKACkWK7vJVsvcHwaRH3tRGoHb5BFxnHtcejPhtBW22kBk1BbZb",
  "key40": "3VmtBE32RqbXm8Fj8bvWpQZaiu56N1VEibp7uJaQhu5RZvPy6eLL3AYtrr6r4hs5B1YW81FsCuPuH55k2qEP9WBE",
  "key41": "3qKdGJzyAJmZoRzozNgNWhMRaztizswxW4znC63gaokzCZXemkYVy5qk1bTYpsjjVYaKeMoBsWtpxudKndataMjs",
  "key42": "5aSDtTwfCP9vF6riHehevypSpbWVt2Sz2fEQmj7XmwHbBPkicru5ujSvz2vU2f43YdrNB3WRDBFwmYewXhUpZzRa",
  "key43": "3vCYMskpsFqUZfLbXNP7mwrfV2D3RK2s6a97QvoR5B3c2LDx6zEHeDv8jgkWd4FdDUz2zczT9sRCCySuBEN44p6c",
  "key44": "5ve69Nf6s57vmmcSjsEfmHY8jEDe8SHCYMCu7d8Pey4sF45rFeAGJFrbwp69Wj1NRWya3KK6Sf6h7AKgLPMjkr1g",
  "key45": "jJxn1R54epY39FNFgF869phwC8kFGPpMmvKcqgzfDSxytahkqAFohWDkkbkGbk7ckxYirHoK9ncBy2YvEMTLAwt",
  "key46": "5MWrWmNFypdGVZ2EXZaPhJsYF8U637HpjnNX1uvuZZgnaLmAobBEruQ59VMxTKPGztJSaC9wUpenkngrmj3y3kTY",
  "key47": "5nFFP3RagEXsbqndoPfo82qtqZQMa9dmY7UvMJh5QhFwg3bJYbUootd8xZmkJHeK8reGQUTDvTzYCUK1bwZacP9x"
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
