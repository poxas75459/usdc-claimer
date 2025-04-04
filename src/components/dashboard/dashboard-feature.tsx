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
    "3xnYQ9YxqnTAhXviB64znSMkx16hWYgqLCMDzgjRGk4ZgaMNmn6D1rhy91F9tdv22vjXsmRCrbh3pQKY1hjfWaKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MmXQphFV4pqsm2L1dH91jyDctJk3dUSuzQiPTWepTeLXx9Aoun1qNtz5LBmcUsULcatXeuCi1CA5qtLwsjpLBfg",
  "key1": "66t5EMatZckfkC1UyqhaoJZun13PcHPRGTDfpHtP2o3bdr3Qc997vKXUU1ga9mQricNs21Pq2GkkgAzjn7yJkZny",
  "key2": "4XzUH93cbJSS12sVDv5GvRkDS4xMW6KGnCFyBLnkmRwVECEVUgD7W8xiW2REWPemoJnQQtVM84Yy61NqXdYE1JS1",
  "key3": "3fWq2zStiNM5vQB1Ar5sSmvNbw3EFXFxMMsWJpdoR6DbHRRNKo3CcY4X4g7inxznKJv4AqCu8GprtWfjzNDZWMRh",
  "key4": "5kHXtFcrUcJzPkd39GV8CdcF2nJXweBPpaGP2ug7TbiZjTGNvKEkp8DSYNxF4Q2WorGnvAWCdXVpU6osbAAUiZCZ",
  "key5": "5PTDtryytDjxWJytJrZw3pHg9PUpNz54mJjtdLuohv4oXHuNAr4VXkShJhSSwcPcha8jcJcYpdpmmNXWC81UAuPo",
  "key6": "4gcZ25xePJsMMobMCpkq6FdHBH1r9uv5aH6H3Mouub1VmF6poRfJfEZvYByjyWAbfJSKRgKoz4QzEzq1bAdpGQzT",
  "key7": "26R1gWm7Cb1PkzDbH27idDUGxu189cUs95twifw2n4BPPJqx8FTcoKgFuPd1KMEKWU21rLYFuGgmkxZ2B1uHXncK",
  "key8": "5wg1L13EhTSNhEQKhasA9Zq4XeD28qHgVxN3BkHrYc6DNk5hQb5atCGhB7Hb5rS3F2vd92eKpKMj6afYXDs89no6",
  "key9": "3uj8aTJKdtwiQgNJf28stJZr9RbiLyJSVMbVdMSvpDHUBpBtyULRuguoADk1GXx6PQ1zgqEaQQXZLGR4jm96KJGD",
  "key10": "5LZGkNqCTrac1XqrofTo97566jFmUKbNWJr7G1adPkiGvCvxHzaqAFHKcTTg4bX2Gk4sPQEGMXVLPg3rVjc6Ers",
  "key11": "39Xp2HT2UdPeBy3Pq2HvLj9MywWLTphvvhrt74QF3Ysr9XCyhvSScBhWzboqyws5ooPcW431ZUJHS8eiwB1ezuFq",
  "key12": "5U3FsFz8FCjPukbk4jua3xPXEfmE5NxwAjMFTApaA4vwhDAjJHmA6YzmeND8M7tmuYoVjLWmC7jVqrKW9vDn6fPV",
  "key13": "4qUdvKVGBByLf16Ct9ViweUxMRPt3bYo65Dv8YiCV5Nes4wPvsgRpWtcWZgw5dcYcVDovmigEeGbJS9sjxW5Namr",
  "key14": "4ZzcSMVSNWS3bRsDTJau7jiz8Vk78Q6CeWeB7ivXG9XKZpzTeS5aLJEtxVgULpHDueFNnovgUrrFkmso4QGGMMe4",
  "key15": "5VM99SCXpsc1EnV6EkGTj6Xy3x2PR2eFEysoYoawtRERDQdN5yHTL6y3RXveB7bj9tg7Af3FYQdRjJehCbBRYB2z",
  "key16": "4GKCXGyXCmMobqvRkqzDiqCGMuaE7vCxWDqbJXbqfQEagvPrYmxwxiseoPMtzxMy4CPGic3H47J6bxqe2k3tXshY",
  "key17": "uoU1YbWmZz2nF8DQ1AcG2EWfjkiDswoehYpFibEWR4FTM9wGo5w26JJqnVwHs5FqMvEAmfFSQ9HwH2a9E8BmYzf",
  "key18": "43qrkYtzz1pyZoAdgWhis6qurmdDAcgeT1RMMgNFq7rdaLccRQQmkqFgydo3bXBZE2naG7g8tFFQDeBnrnLbmNQL",
  "key19": "ipFowZXJU4C4xi8v7Cbyu6eZJJmfYuWFKRFqFWbJwH6tLro5P5SmK4kiL4mrjQNuVmuznkyRy5sZQdzcvwhUdzL",
  "key20": "FnKtjUvDz8tfeqVZwohncqRG6H1WpqREr64Aqa9oVM9hv5idiNXfzWv5dRi97FFmmnQBWwCzyTGmBP8Ti8mKMJ1",
  "key21": "4bfXmFWDG7q9WKAGaqmfmnZ1STYed6bkxGEVpdPfCj98gGYTjrchfLGc87osqanoM2vgrEf143zgxG29kXn9DQkZ",
  "key22": "4wTTZegANDTbgAWqZmqaVVwr5afAEKkyLgLe7kr1QrTmUA7E6rNA8fWuJCjVSXyYtzzMK8KKuextbmAsqJA6QvVj",
  "key23": "sEBzQXK9PSQoNsWeDecg45aaSfjRLb9cwvFXbyWmi7YYQaT6kFYqcmPQ8pazMy6FN3N6QV1CeyaCN3mNvj9AVUY",
  "key24": "fyVxk9MtTbHMqVNdTZjyLrfGvnppX8zGnRDuQrBybv4ciP77Lu6sYz8B7krc2MGN3ZWKwHqdL5VmBBybeYZ4XAf",
  "key25": "4er6wrmPEPNHypcsFwsDfueP6FZ7fNJMJx3XbZd6rxDFmsZ2z1pVNgi7FrC4qWkFrT4uZ4kM68taitJ6xmXsgt7h",
  "key26": "334dA1eNRf8z4iA4aWKAiSTUDWPqteQZPx2dNftH3cAmxYFYcchvRDwoLfLw2qEA2373wu8DXK4LH1DdiDu2eYH2",
  "key27": "eSY3ErAb2215UzN3A5naEj1qDjitx9U4wvyG5McFC2TaE1Azt2oAS7FX83tWSyNuGiF5mnGFj2Kz7aJ29nQ3suc",
  "key28": "56wm5Qiq3hRkBAH7EFqk7a8uMoZcv9VJrXeE1CvPLYM4xxSo9DLSo7vNXGs5ZHawnqKxuECCG6CD5TNmq2Kyhg5",
  "key29": "4uY4kHr9DcJxjAw141Nsdhn8HsLq4gKsahdRni5oxmXeLmQueXCC1SMmcfD1ZfW6DJZJ88Rji8Y9gVrG89z2qgZu",
  "key30": "3CHB1caLAF17SbdtHQ1pXPCo1Z6tUeFNKLUJFCm4texRNLjNNjDdugPJFmw4mMd8jQCgRW1LkQyund62hGyFsxru",
  "key31": "56XokvkBTBiTpp6sNcH6VyNfZ6XeV1sX6p24VszjopUHRQgQCHeHV3cxuWNn2GVtYvEDmmppywA1mZoDya8G5HMz",
  "key32": "31Lywpqyn8SGzzAVMwd9Q2LBiK4JdABiGStsyWk4XbTZogDkQAgkgYnDuHcjmN3zjH5b2aFsvrjLkm5RFGoA8Psn",
  "key33": "3DhVP94VqbxMcSWzMxstq9TrAnPSdus9iudbwNJJtheSfUx1QEspnQAAc5RiENCG2FLJWwVhtCUR37JG19yubeyU"
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
