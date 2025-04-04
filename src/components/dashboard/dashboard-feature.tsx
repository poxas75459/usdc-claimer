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
    "2W4Cz1EEU5QhVpJaYY6RJe3WCFb3T5Pp6Ty61TEd3bgzKHamWveGjpvbiAqcqHLoJdiRiiW5dvyedayp8pXWZSXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqjEdPff9x5gwPBjeAhepRqgJUJjQ8Krs5PR2fPqPAQBy9fWS5nc7yGGo4YfVRo6USivNoLpyjA5cfPjpkfHEaE",
  "key1": "Jrd3rh22ji61PTKUuwPecpw3r6T4CfcquCSz65s39BVAkJ8UX8jB8CwNCj91AmjZZJt8nJGieeL7PdaKGXVgzD2",
  "key2": "2fCctgVRH5BkwLnvaMSTLeKkE53oRQuPa3nj9tqn2Qiwj19gnagGe1eMPjYk5Q9Ewxta5rQTW94PV4BstSKMt93s",
  "key3": "4gtPVbmPsBQnu6xg1jjkGRRp8fa7aKUDqXW85HR4EX2JrLe1tja9P6SDtskb9ETRAecjGuW7HfBgpbbn3RfmekDt",
  "key4": "5WinRHikd5dHmNrF41Ef8NvEWaJmjjgD6Sv7mcYn78HVB9Nb18J4H6GQ6RWuFmqeaqCQ54AZypyDN54vVYoUgQNt",
  "key5": "2MDnyRADGo9eAeRhzimZqskU8y7Leq8zhSphvQWCSxrQuTPKB7kuW1bh1W3EtKBZ6ewh6KpmWs3uQT57ud5wiFux",
  "key6": "5ToRSu8BLY7QDgReXK5LXu3s9m8P21EUXquwAMRJqKHdvsbdncQcNigznfn9dPb2RSt9qWxKp4H69nA7i1JG7WL9",
  "key7": "4z3Y2YcvQNFw7MngcMQA2LYnNBZRptHEvPJns6QRBUPXZZwvRozs6yBLqYj9jqoRTMxdwyhzVm9Qw6p45tBKZvGk",
  "key8": "4rvj1eDSnmvhwrRGNCG4Sg2LW5mxomiE48CPQD1K82QTWGTo3aXsJrBV96Hep4TqYARsfDtbF6iduRXsj4c1CRsf",
  "key9": "4KniYeXErXCSAegp859xauNqfg1qqC66rKGeVA6qybwMLoCvi9raK3o2D7mhdhhUJfiuKBCfFJ9rPX5D7mazYPuc",
  "key10": "iQSPmPB43PTaTmsYhdbSydyJMZsH8QMzSK4ECR2M7vvHw24xc5H3svfSi8z76pJvnDuc8JVtqWq8JqUQcMhEmx7",
  "key11": "zYBzu24rPZfb3WUHX76WQTNudEu4jtNkqPS8Mb9NcooutxXn4KrRzgYYyu7kVofazE2nFtG14oPYgbGfSFSqWgg",
  "key12": "4idq3cJo93DaDLvnMi8mTAKubsndgPhSij8gN24axVE2mXHwgXG5Q1pCfAomSWPD6S3J4Zm4JG1ZBchGdV4dEFZM",
  "key13": "3bEC7RuwhjAwnB83SpvmsNcCszshtKJqrqY3guhpV6RmD727AV1ew9TXbNYyYtEgiR86iquwDcDdGJFFzhwunCgA",
  "key14": "3h5wohBEfmpXQXmMzvmjB1Pnc5mkawmSsvNJsYJhXirByoR2TEVYcUTNCwwUR1f2RJRW6Ja9Xd4F7f2rxT99GL6A",
  "key15": "2LSA7Yi5ox4RJEfqJ6TRpdSebcbsPdygYBMdkQeHGogg1yiyB3MEXK4VePo54wVzDRBXsDYpmnNZGunJ5ipKogWs",
  "key16": "2krKzePKXGqKsZL1oNgXukWdbAj5VAy89TMjM1Ksk8RpCJmbZhoAx2DmmQfPUnbZcjW77CvrLFpPZwZaLXk2J6rF",
  "key17": "KLJ7zdtd9isySSpXRKKTEx9VyD8DTLzUbJRPirLMdbeTxUL4V6jbe7mpJpnYXqWRoAdkkUSDvepyLNe2QxertFa",
  "key18": "aqvbUAZQGgB6ZRPHDLNkfGCtWm4hzHuGw4PSrvauUNK9qDBGgorvx4y84Z58qQrT5dfPffDprMvZkx53mU6R9uS",
  "key19": "5EmiY4AQhnShohmC4rWiM2pCcKMETrsEakqL7wRt1AXdReqCM7T5hZXXkSvcnTTBVv8KDeHnuXScJxKp1oenbPL6",
  "key20": "33ZP6d85TXMqVSpNRe1wgZexucLxCgJ4KSJiVdri8BuHkB7YJLKXhD2ErsLVtdUb9WrWiZyEUcLBBeGij2fh4ftt",
  "key21": "3Sbh5MeZR98LcovJ39ksk7GeZiTHoWi5tSfwQu6UuMTiovFUEGDDifzuQo2AaNBBP7eNV2BHWDsCdWm6x6qzfB8x",
  "key22": "2gYjg6rHFt7Kqu6HPJrtUcbfeMJsHFHnFCjz12gWrE4wZLXPW7pFzjHbqbQzKMKczLSjuGftQN1eu8hr5Q2fT3DL",
  "key23": "4RYYKxpiKrvNiqdhQe22KHGHK7GWbusgnWVTFsTeJj6MYxtYtFAkrDmuMzE6faY7mKjig5EDnKjXb7WuViXZP4kQ",
  "key24": "46YGM5Qyv6pGbeHAMW4AfAStomTm7kSLBwk9oNrRbU36wBebrETPjXNooiC2VAG8YRuNNfbT1AZYVFBVPy61e4PA",
  "key25": "43iKg7FwP9bpuvkNXmMUsMubAmxtCmTmDeWYGiicTum19NG3Y2QKmeMuMm9r18nctzR39VKs1uewE7vuGdaqpNmy",
  "key26": "5aeAnFUppLQHHhkmTVaYMenZQzBEMHyUAv6SgpgqrWLcC9MzgJao95nvxYiGQHm1ZpLhKmTEZLz4LLRYsiQbiTUT",
  "key27": "5Qi38WmUFYWXTnS1ZUFUeVp4YNYhXaGZb6oHnRqjAUJxzeYkhpdSzgamWuFv9GRfeYMmEG4uYEjkhWGeNZPHPyXu",
  "key28": "EkpTEMyXzrLhLqi792KZrrHW5WvqMRwD9PHLVgKTv96uZQLxJSm24kJTyPNabTMDkqtPvUzcXKBZY61UTVctjcp",
  "key29": "53onevU2bX4MCWD28tVvBeHQUzbsSkaTauZtK4sGyD1gjkeuJvUQg7xFEeSu87Kvj9NACYutNBK4b8Ng8zzxEBmt",
  "key30": "4aNAPucQS873DfcBc4TW8upgR4DE7n2atZTf39cv15MEAVcMGm8f5sKetYDkG8PhEpv2ex5d9ntoRjRvYzmYtiDd",
  "key31": "4DaLa7DCX4A6n6XkZ1zERwcKgBEB3SKARrekKyJCcpbBv3a7pVYhD3ZoN7TTYGfaxB8wgJAv3A1SFwW7akxNXoR6",
  "key32": "47mSjhJnFboSomEQiPS9TdcvWeYSuFJ3S5sAsyvTHiWaQc2D7tr8YJveH5LJm8YFEH71quh8yc5uvqUpfUuZWncg",
  "key33": "3KdVnfp1HFQCAqiZrUA1PHvdB3vfqP6WzxAZg7bUKJBpwn2L63LWALEd99hJbQasJGGUepvjJfxN4vPTNcyPmjU8"
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
