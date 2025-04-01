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
    "4VgGc4C6BniNL8CdXwPEjsd7tSf1C6f6zvrCWtekia5jLSfofhfCoHTn2HNwmXKqyZsycxdZAhDxBHUozFXnRRp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haXiHuCy6nE3RozQ5VZ8tw71DayFdZkM58QcyGVsp6Ld8YQDNnL3ft59qHKUNPAXLDSEL6pxGxzSnukqfyWvPv4",
  "key1": "CudbH1yjy1gJT4XEAzj77Xr3mRgesTf8HyjXfm2MTUXUECHHShsvqhCqhShTtwNLaPTTiNZSpmWRJmv3KGVU177",
  "key2": "5MsNwZ6gu9T3vWb2m1CjsveBBAN3fhbK7hPUNStYu5RLSXoTpQB2BTiUvf5FHeJsNZ8eyfVQGw96qdJbHiV4cnAf",
  "key3": "4L29hgDR7sjiMwAgzvH2hq9PRDh13wxHkYfHsrSSfQzfVoGJi4ntXr9XEgBQTh11MZTPszRtX97NtueoMZB1SpAZ",
  "key4": "4X19nJLVzevwh5EEK3AdfweKUA29xYkxanSA56dSMmgcYV4urTWfHG48SKKtLVKKuRFYJtzozm7pZrPMS3Y2XUty",
  "key5": "5YhS1MjZghyFLYWNMjhPDNX9hRPHdQX6jzktfueLPPs5yAABPM7dsBoTVYxVce2WGZE7GEosFuev6sqrA1KK8bVx",
  "key6": "3oPSRM4C7hwwMiKNRhgfdsGv4x7yWnsyLmgQxL24LrjpNK73jEEPRyAUwJHVWnYFJKBeXhrk2fFpgLqEx4dK3DsK",
  "key7": "25AbfrpsBKdypXkCDY8Rp4mxcQRRFrLp7b8LN2UgpMFVJEU8g71pNDYTGWFSc5aJUFGinWa3K5qYzA6csc8PvrsN",
  "key8": "2Mz94dvXVfAmHKDiCpZi8XJ1xEqT2LwpsCYjjuzgx5GmLW7co4D6izddyjvgAbgXWzMhH1qKmh7hZZPWgmzJLNm8",
  "key9": "4ZGuAkG8t3trtKnK3QtPfKU8xLvu4CcfkYyGVBXaTqfXGxd5Xiz5mdrjT5WBaVrbR4MBKWwUFg1EUxdXxhHTb4s",
  "key10": "5VMPfNZVnQWVicucrm2ZL8RWMqi6hxQJGMQEnCRAYv3FVi6v17hAXyJBDY3VH1vaqoJXeRGcUC8PZg2aCg5hFfng",
  "key11": "4VWTmA5RVbqQQRmd8cD7WPNtZut8mbwxwrHfyZGxPsdiJ7p3XbNZSAgpNDwiZgAKBEqRWkJG92MyU1Hsqg1iLaj6",
  "key12": "62LwJFJQkXeZJd9V9ZAW7VXQEcD3UwDAQSt3fZdZkXUam4G64K3wvsxvoJBoNQErrMcT481k4CicyJSHh7oeg4Km",
  "key13": "2EMhRYfHTAA2iphZBS2RWcojGgAiwKPNQrhU3xQakGNMdcr2Sz5vw5KUqQGXPEBoNSijqxXeKpub9Y3icRkb2tUE",
  "key14": "2j5wMYvFK3Z6prfTSVgacsThgytVrdTXXAiDcD5Q3R6Pyu1ezj2BAPRZJ9J7Qi5VLTJPQu36hb74uobyqrAryfA5",
  "key15": "2d6yYQpaNA7BYqjFG9yLRXDXANzs2DCNQNWG6Hm3QvbJ4Ne6xhndd7nvyFm6zYkDKrMAniB5FQgqTNf6maEZHViB",
  "key16": "5AMuLHsR98vkU2Zsb31RLrFrm2q2urt9sNNoQo4ed6y3AAddVpkYrqxHYst343ukcK761uYnck4e4kihk6BcEWhQ",
  "key17": "28doynh7Y1EPcwdaWp6HwWmrZ6MbdDn2Y5FC8KrrnKas42azm5wRJy6q91vap29Q343ZfzU7pJ8f4se5PUa3vZGi",
  "key18": "3gFMDkagdJz6onTBKDKAeHAgWXiUcSNA77DVDaYMicvQhsLSMgjK6rgjZnBVBgGtmGRFFeWGP6zGosYcf9HTFEn3",
  "key19": "DXv6ZwzyU2ra8JhNopBBn3rCTuTt32HV2Cei87BGCd4C8hwUYCRECVzCxUkoPhnQtNTfvdMQNHJowRWvGJSyPp5",
  "key20": "4MS6iGxfdWokE3R388PmEGnexp9iEqzB76PC3me366PHUeTsMgRtPBuJhkA9tnuoegNq1jrFCT7WjXi3UptcR45q",
  "key21": "2Ya3jG2qHxvbh891Yx5i3vj5qNEqVZH4jqtdgZh2H5jxLtMoY6XieMzseZF6BEso21ehBRrrVsk9VzTKVJ3MmK6N",
  "key22": "5PfPDwzX2mpMQmzQqFLSiLV1tS2ViNxUd2rwVHuB43kZeLWRz6d7C2KbcsmP9gvRHcEgYSCck183kzGmTvw2M7Sj",
  "key23": "5qwY5fqyiqK5T5oToFq8gFf2yKLdbbordANhqzY5mSMPeTcdKKP2wGC4z2F6561ssan19V1VTUydVC4oBpdrXX2k",
  "key24": "3U7ro6dN1jVR6hQCTwAeSUGxHzkGLwdfggefxGAJo1VdE7M5c5XvEDZ6RMoJ5KVk3qz5UHJp3syKvFcBbCc6oGy6",
  "key25": "3Z3HR5trDQX9tvfQTc6vnjHCTjTAujbbxSuys9SVi4oWXVzkH2hmenC1GBppCuUSMthQDwnidEQs2xov7i6WP4Pz",
  "key26": "3Zeeg1aGY7u9669jLySFuijppqZZRa55Hzj3jgyhR7a2nu2DhbGWbgitdQraR3X9r42p3tJMUffiW71RZPbv56wW",
  "key27": "2L8k6UUCH4Zj2nSZEjZp5rFE7dFwReVR1V7U7BSdSJH171recB6cCLMA7QXGbzeWR2gGKvvmhh7K54xHfhua4Tqw",
  "key28": "3pzBaWojtCZJdZrtnAphi9FTVtZTWf6dfvJTZoCcn6jFTq9igL1q1kDeoP5yJ9ESofDGBrrZVk5Mst572KRcg8gn",
  "key29": "3USsLT2fBrWvuwnH9WU41M8YL7hrTKJyde6ra9JjNocCFXCSVKqCKPmFHErzEV8gcMCjN3JC8dxq4gVtY66EGCKJ",
  "key30": "2xyHtYkwwXqYVtm19PYZuQGnQkqsjFhWp5eWwYkNRV1HYMChkzf2gnqE12t1EzthS3n1C86UqkFtpJBTvr4anXeb",
  "key31": "2xABSEQxh8eDbUrQUr5buauaDbPBoQoFHqB2CHf2Ws8HRmqh9cqZteC9yJKJ8bsBihWp72k3a983SWY79HEDMeH9",
  "key32": "116Z12A8bfH27R2b3Qk88up84XpJTuUjn9NQkbL2m6eXAww8TWdkrqgQkfxgG5Qq3uG8XVjCjkErM5WbzbybogE"
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
