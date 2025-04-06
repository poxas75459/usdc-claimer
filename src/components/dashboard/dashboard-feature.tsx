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
    "3SeGc6BwE63Hzs6uAtpYLKxzV96QK7yux4mqeWJ3GrjZhCqvRY3QPffRfLBe74zYZNGyG7FLnApWnNdtso4seAdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DPLdwmMwiqsUoP3Qz81iH9JSvqXWXvN27KHYd2t2arad7pTvU3iVyXeVhu7R2xwzw92QsD2uYU74xPdsGqKjTmE",
  "key1": "348jdkGYnKUzqEewNyAhjJy8Pkmx4bwWDNErkCujKoVYNNGN2igGxNeNnqPcD1d6igQ26xV8Tb82pSKZMud5AKqq",
  "key2": "jPdvoAqj98zHBRK3Hr6akG34WZwTGyfYmT64rYhS32AgnSicy6QWyrW1WUV1BVve8FQntN1jmiMMjvyB5H9xmX6",
  "key3": "5fiybZobixH7rhGsAuCJt4MiSUvcMaRCGUTV1in9wxWZqbMzNurckLyR7QdeeEZkYKNLg2tAee6htczDNm7JYXKj",
  "key4": "5Ff1uNzjUP5PQjNw89d6HbZUFcvgyEyE6Y2aHPg6Yw5QoN3gCRmeWLCgoz6vXSMok2Z6DnMfKmKdJvPm33JDbiER",
  "key5": "57BUVAazhHdp55A47haHj1xg3WuNn4NS2Yarf4TrTeP6tCvDsfrA5BhAqxz471pha1cDMoWTfU3mZ4k2MuN5smMA",
  "key6": "2vthzjQ24dFbekFFyRoWuBSS9W9ZwFgtNxzPxigMhVWbzzkVKXWggQmAsobjMMBXmKq2qe8FQ4mszCTsC3XDX2ww",
  "key7": "4JoEubWd1w34g1aogpEFRHiZmrhF44YMoKsnn1Twd3Lg5sQMbKc5Zkmz1iNRTxFpZdrxMg1gZaPMb2b57TrrFTMT",
  "key8": "GPDbRm4Sn7EuKDSVuBEx9kdfaPtSN6JfXKKVpC4eLPdhCdjRkwZtMnaZVuGxkeyF1gsSryKW693h7kTwf1tGYX2",
  "key9": "5pNYticoMRYs4ApHTio132tBJQyezJCXQATC7HqGXg3pyE71TM7dn8vMtWAHFn1MboiDe5M1nkVZmDbkLUPBdsqf",
  "key10": "2hTk1Q2df6N9aWMxZmTge8EsGuuVpt7iqzkvfNCDGXExYpqM5C5cWARWNMkAX2DPXbDeYv6dGFM7syEFc5XYKeZx",
  "key11": "4sJyTbuW4iPrqrHvCjy1n8TzXXHbVs28trpgjhC1k8aaE6sqfVQyPHmMSzvDeu4v8FwKXZHXR7SvR9TvMhaB49Wx",
  "key12": "HcdiPyV3RGBGzj9Vg2cWL6s9D5MFv6QNsoYMKYbC2RojmcFTUsYVy1YtgFwdtfwNwiyeGwWNaaKvrrPtdSeqpP4",
  "key13": "bBasFNwHtuzKCk9dQDU8nYDNA31tF79aY1bp8ur6PFuBjhbkpEqWb2RvVyzjER1satzuXXpFuN23k3CRbERdXi8",
  "key14": "2sjAhwCVBFzoMLaw4LMVegadsqXFVK19e5jRuzdepJtViNZCQ4cLDXSXNYxNWm52f7fix2V7Mk8No4gUQChn9iR3",
  "key15": "5NKVxzeC8FiY1ufXCb6ytJ6QwXZEKeG4kU91FNg1guyfLwpvXi2cN2dGNXuBuzhQ4WmXioLR6q1Zn9YU114R6Ra8",
  "key16": "4ZLv6N4xQ818VctdzLUMkwUEdULKhgT6N5zXFhEtMTbTcf3owWP3hDhnAUGhZwt38TUxSLAWchRWXVxYBN2WTznr",
  "key17": "2TwVtHsyWbABzNhu58Kws9itwANxVfGK1Bpzw427umKvsUVoFBZrzvTSe65AgMquUtyqWrbRo1AQ9EgHzdkjd3yQ",
  "key18": "5c5JLSQqxVxhQH4PUZNj72CebhJAM6N5xGitLLQnV54puAZa7aHzPDbXFjPFhm8nXjurKpdGqvi7228ztv9qYLS6",
  "key19": "2ZF9g3k2waZ7aZcESFgjzZ98DpAuWXDj9zCPYW3Pv2gJZK13f2cN7ogC3GMDq52G39i6n53X8ffToc2vatJoFyyN",
  "key20": "2W86KYU5Y9XDszZVtJywHSBQhurXunU2U4aFr8mAv615U4RfcXvh1Kd7BLrXjNwXV71yi99tZzeL1R1Q7EZ2saig",
  "key21": "2jK46zpEBTWfYKLDKANF8fYnXwimL52qje6L7ACv7FmyFEiERYq4Ev4gRnbdJMMARRWZEf5s5UmZhzwmLHJwYWie",
  "key22": "3UyfUnf2XhNBmxgyurrp7w2fBFKwBrvFTLaJRSfrNN22k1fsUD88b6JUwTVQbYGgXzyHeCrDkrzR7HR2r5FK6QnQ",
  "key23": "grwMWxKqgmTcsyQLbjVMpZ8hC7PNtJ9G5wxJ3qNfkxRerrTCfWNFRWRWQNGyvevQieMP2tt7d8DBa4no7HpCBoX",
  "key24": "2oS66XHM89L4DeaR9Gx4s2BedD5phQ3vkkaAjki6e1Kq63635tA9XCd6bQ9AzVW6KZbbgLVGHVULt7JSf6xq9KzL",
  "key25": "3XcDwGgr3X5fpHnYedyh2C8wUG93qxVKFBnrEsf92nTVJUDveqDKhFJ7FdycYaSgKPiCW15pw1z1BFTB93mwnVo7",
  "key26": "16EyTjBfJBr9ktwSq9ca3JvjkaHg3QmiVEmCvCTBpJUzrS3mzjJNmyx6dVV1WbrNPFej92FrfGybER9opWx3Esu",
  "key27": "4TJJRf6R32eJuvSJoPAGtr3oRVQPVA1nfTusKW6DXQAjnqkhAz9m4EUzXt66G4BcMNyDNqZHyrkn3Q91zbgnfckW",
  "key28": "4DmaCuXfKdau2TfyzoQYdoANxnBn3Enk2h33oB3DWd6c3RMEy8PXMXUBfhXfp51wyan3xs2aB21M1c7hsQPoDej5",
  "key29": "42jWLAaazxVGkmfv35QFgMn1mJ898tPyQ2cmhd8h1h8kzLMwxgr8g68SjuFpZNwHpRryuWNPHnLsJzMF1y4PRYXJ",
  "key30": "EXqn5FNqJSbWTD81qsZEDcyK9F6Ae7Zd7wTrRHo47xGNnyJn5dzCaKkVwR3qKC43ZhYWiiRkhBBf2nwd8FJ64Rx",
  "key31": "vPZySSoGTJWVbU5nCEEC8QjDrnb5tE5Y8qsXyteDGbyMoF5EX4qJsVMNkJcz5gs5yN7GzC42aSkWpCWt7Ec3VRV",
  "key32": "4msYcEAP5Xw8mzJm3QmDrrMjmW97ssUBdftRaBTVSchzeKRXYHEpkoHPKLdGLH8Q7sk9PJ6jnm6PncJjkcAyPENx",
  "key33": "4LS5CVkoWdrG97EWaf5y7DCZ64j3nE3vE9q1ZPgN2WLLmnaBWDvdaXyGyXMDqRfbhYKe2CVWwf5A2ZUUBHuvCnun",
  "key34": "66mwsvzw3WvBAz5tgzLGVPeopokhV2Xg41Pa9tztupm84UEXuAG2NFqCD6hc6LCZSTXZ7FerdLKAPpjV57xXVpgW"
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
