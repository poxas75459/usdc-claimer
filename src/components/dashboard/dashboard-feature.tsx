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
    "Ak1AL2yfRHvCy4tzRFy2S7T9chhFYYrAuy53MwvQt8eX4f7GDPj9oxPxQ4j3NGHofkQGfyfXvrzokixMKVP8uio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AYYqTbzpxxxFeqa7oeTmqggGH14JddtiNSx6ETSh3A2TWwMasc4P3ksN5TvCMiZ9Qx2jdNvhTW8UdGXWLHQzrUC",
  "key1": "2uzXFyTRUoi5f4MHY3WxHtSxUH6jxoXCerVHeDn64EhuHMAKagL9vzmDKn6g2LP8ru7Z46VA4NbdQ333W4hGMVdp",
  "key2": "44sCHDv9ynhUSkhRVozoumuZ5A8k98jSDu4DZ8sVJCMPRVt16yeWPTzi8sq25p6dHRYx9XbUEfXqokUqdhXhfVUv",
  "key3": "k2zNQ61ukvhiY7REGiU1paNmYkZgM6fmcZGMpQdwNYYsemr1U4ofFfxYBWmmCFFoMFxWSZt29KzjMauozjJhd22",
  "key4": "2misegNCMv25REf3G7oRBQ3vXyZy75TW9ZmFDSDTVaestfprHhUgVmvAVSDcdeDWq5qthJfdsVLeNNB2qcyq4Y3r",
  "key5": "2d5EPctFxy8nnxrJxMvjG7qtRFhehcXxd1S4hCYZhtiQqSxAVuvm8qYkDqo63max6a5xQYeA6w99o9CmFJkonRRC",
  "key6": "4HcaTk82WmdMVxmjz7H6CuAuSAfWZrs53ysKV3JsTmb5w5H3APpAJpCtRj5oUDv1caFzMhVSFhL6oshNsR1s8sv1",
  "key7": "2Fp425zzpLeHN5oPCqTAWjHc6mB2omwaqoc1GbXLWh7sd4wDXXRQwYWQUPijmTB2dSEqXbdhmWqLiQ3q2DB6wjJN",
  "key8": "4ksMVe1kTiMcjX3cRGY6RjkdcazZ15wM6pjrrt9fdPt24qVtSbSvHenj7u87NTeEWya6kiVpVHA2DKyypjB9KN2z",
  "key9": "3DMt96t1KaoJChz9xJoYgSF8Aww8CBzhuN4ZfCxZkXLDq7P3LTTbGJDFCkfwVcStrQBJu1CbWq3yVFrj5E3Jd76r",
  "key10": "5ivZP4tNRTdi3jQVPUVJEFXB4bAh2yZnw2qptuWAPjXNyiv8fYAXiBax5qEdEzp1nPS8Bd6qQV91rkmVvhaZGpAh",
  "key11": "5mMsghNUar4Nas4vA6KkjDR2261x3FHidxfByU8LQSFBJCRee9AZVToNC766d3NEXjMfrfjT9nytQSuQUWp65Won",
  "key12": "tyWzz8FvNcw8w6mJLVWNgRWqVCKktHgRMwymZfHReG7ncvAohJzzggva3Dadpt2tgFfn7qishBywJr7q5GGH4XK",
  "key13": "3Hwvuk9hjAjbGzJckCpK1XmNHb53a48h3RmAoLu3mYi2LCxXuMwbp6QcLhxN6owyUa13JC3TZfjfjQByNrimckvP",
  "key14": "49toZK8hKYhdRJ3CSVFT74CfSR5rvNcXCnQGPrum1aEE6Vr8BoRQP9CSPSw8vr69QA74iPS5sNRHxqUQrfPpYs43",
  "key15": "4DfGwf1LWdt5eus4bg6Kc7fSfggspd1hykC6aq1JLQNqv46JtQbiyMCWmtJUMTvNvDBVm9AJYSeYJuwcrjuf9qLs",
  "key16": "Xs7QD86ft3FDhoqPZwAujm3doKuXtcYSN1ZLSs2hY5FjuwmgnM6xmpxrHVSUYDQ7TZ3ASBEWHcpVq3wGvrtKoWT",
  "key17": "2a95KaJ7YugF3r57DxCWDgGCkuuk5h4yzHhpHa1yyjDWeQYvb4fKAZU68y6tRNMo5NoGskyUABRaeVkQmkbFMiJc",
  "key18": "3DPTefpHCvdREEVkKXPhCkc9B6RDh7qEHMiAA2D1xwccmBDJJWEBpFReP9Km1KsYy3j8MYahTaMkLmjuK3o9D3YU",
  "key19": "caJPKKC6KxwAPe7JGWjCn9ETUwodAVUhHxr5fPxbYtXmtLWpdNHgMxb2JtHT7fdipQcQo6dCoKHPSw2dx3tSzaj",
  "key20": "67RfWcn2AsV8UvcV9hdUmVQRVWpNWzXb3WchZbk5Pv6vHZe3UpfPrsjefrb9ZkXhmzBGPAFRRN3Q7tBcvvdvpff9",
  "key21": "3WT4CFWxpxPM7jTrECxG7fQuthdrRQt3G2nwJEmw11vk65g6iQA9grTvrPwsgxemXujkvTjtZiJgCsVDtBvuzJmp",
  "key22": "SAEUQ7aXRTk78RsLUfXQ6siqLNZZbX15UDuPHEiMvQJT5CsjVQS4ZY8vHqmifSSuUVhZPMxGspqRv6w2WET6YBu",
  "key23": "5vaN6xtbm6WkXQ5kqhDc19Khc2fAozscX4W52dQ8cVWu39j4AJTeadkvPnC5qNN6xjjF6BisDGXjWKVP5TdrNdPt",
  "key24": "2hJ6mLwKKvunKU29L9ieXmTU96SxUFgPSCWY7enxuoR5j5Bdmf5N2bd3nx2bsrAjNnktRMAW1Hhsc4QfH6rV6xJJ",
  "key25": "2RFXHGPUZJzbtH9AhmqEHKEy5kPPD7EDUJTcoPnnSiGzgbcMR9uzqSknBi6HRzQbyxnLsh4HA4YncMmgErG3kR5a",
  "key26": "Lun93UGW5Q4AAdiT77ZBJVvKuiVD4covfMA9KRJ4zV5aoeqjJvFcTVdFS8ps8HKk7k2cUEBzWEGgbCYap1EKiH2",
  "key27": "3nj8n3bbR2U98xAbawcXdGL1DtmsVE2r3ejjwzAPfrQ2TNHYSKQNvJnXAaFU7wsVtER3VzmhH84u6Dj8iFug3B5N"
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
