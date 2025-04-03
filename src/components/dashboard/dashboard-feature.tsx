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
    "39j9TjXYa5pFiGyyPGEZm21vXX6VBPkGC1yf4yWHw4HNghmAuq178vv8gihNc2noANdkxULo3YWdkQpcHPpbtPTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HGjBgDDFaopVC1mwi2ftRLtupFKVMfVVJTdP7d65ss5Jvif7fCKYoZYop7jMdpeivL3TcsRchu4BPztQ4ExXNgW",
  "key1": "4PnLJbDJc38asXMy9DcGsR3bPmVq3CdCppwTYrD3oyE6ciGng2roonBLM8BgcBozrDLNVYg68oQp4jMAuqbB34a2",
  "key2": "4SVqT1kWJqB1Wj9uqGTwxe46fsmCHnxbziJ5ahTadzK3S45K5kLW19LQKmB5ejUtSwVADC3br68M1RDeJeT3E9yT",
  "key3": "2P6Umv2AFJ82vwMyn3L63Hs3ge7bEeHBMyD3LfgbTy7dd1mH8TouFdqzh3yqmnGYAj37kbyUaV7gEnxgSnkFa8oj",
  "key4": "5HMAppKtNUJrNEsBWsaGXLbkbyXWki9AeKN7a2Zz8wFFYXx3Pd5TFJPS2nY929Tw8JSZCSqETB1YrKr6XZ3UKTkP",
  "key5": "2whKz4oaUJcE9X1BFS56YYqABAwahsG7GyaDFQmcqF6ApXSoeyarpZi1H8TdiE2ca9zuiS2TTqGZ9Mqoc8V4Hn7y",
  "key6": "5SXE21ign5u3GiBw1eXqAWS1pvEcKK173ta4SuMcdGGFZcrnZf4mnJfRJiejkbwGVygebaRLFWSq3P88VA8rfg6U",
  "key7": "2ePfKGsu5DeSZLhkaV3Jz5P9sz5PtMxqsWk53UvxAqcG1ERKE8j8F69uzWHkp8x5V4D18uSpBSUZTta9XRVTwJY9",
  "key8": "HXAwRAhXNwdaiWfqyYLuChPLpT9ckDMfWzqiXcqQ3REHHAqZRT7iiiR8gACzRogn7fiJeSTVxGqRF7gpEtTnF8k",
  "key9": "5oosmcjkYeL7hv9agVTSAyPychPJzf6qwQFmgvBUC1pdJuEmUibh1USihRvZDrDYefadkcjpJNJZf384XMCQADUS",
  "key10": "3JuVdNAvP1LKh1RYCqjUWa7fwt1SiM5ThuFApVVgkqRV5swAFJndcPnyhoRYsJcEyHnRnhFexxQypJDGVY726UZt",
  "key11": "3eikCKNCXYAqoMtuVW2ywA4okyAMoMXuXwneWh9U3tuGMAEQK972vC6acbUndwkVJWHuKU133H51qdFRa72ENXdW",
  "key12": "2rGnhKyE9wm3RTjviysGWcs8zF6mF14uzipgjRn98VJMWHqpzFLVLSMbAorE7jq1ELe12faKPBxoTUBWXxG7VRqt",
  "key13": "2s61KQkRB2f13Kc842soLCDvrA5ti9u16t33oVth69vVcCwYtE7TtSW7krcpNkgNuZpXtSugwuBdB8fdn9n8CSHe",
  "key14": "2B96ei24uMyJcYwQL9rE5149KghJxSAdNj66gmR5EpAgqM8za1wSyvmwUaPsgNdSA9eL5Rh6n54yfpyxx6gmcuws",
  "key15": "5NUt6Wnyn7WSSMDNk6TV9TwWFwG6vkQhb3qP8duQLRJU9Zizfh6KqPtxfks3n5HgqgpbDVYqTVTnALnUbNbj6kcH",
  "key16": "2RxY3gDt7PvMVRx8Axuq9t8h5zb64kS3Pjr9Q8VnTKn9pAsZvSENXdjCV8i7VjcacUi39FHBKz8xgFzCfcBPPQxp",
  "key17": "yL1JwVpNF1uj3NEi1d546kkCqVDZqN1QTErfKDSm4A8e5wqtHDwzLXE1FjxsfCuycL8X423tqmKKVsbipeijf9Q",
  "key18": "5SLexdJakSCUPpxCu34Bjzcrnoa7VtVVzuSyti3C4kMH9AqV8WCzdGnhqKRJfLyB18gLmc1xuMzmfVGrKpgf9T71",
  "key19": "JZP2j6seMTV7tCJTDsaqJfAoSyvz5em1KTH4YCRj3EefDCgNnWBJn4xuFD1cMrMcHDMRp5gGVjnzvDTd1U8nus5",
  "key20": "456oP3nGdZExFwxPdUR83MzmfZmSJwAu9BmZut2a6aSTVt2iiXy3Lrkkpo2b2tXzYFaFHz485z446KfMztmBhqSr",
  "key21": "aNpoWz7NFGfRyLGn2H2XqE38c3DycxGjLjAQZvk1Lx7sLENwTMfMGFHyu22V6UmLTtfE11BUB33oxHwnrTiFxSB",
  "key22": "9iAFVjabA8492yzGzL5Vek1aus9odi9SSbwVP62DvSERcPxC7MaqHEjuWaoJ8h2GQEvFRrEBMre3UnyxpBpR6bi",
  "key23": "HTi3S2c9hTZScLvEi7opBWdZE2S7hzAwhCdebxoxZL8jEp8KqVHu2dKFKL1zhnjnySNuJAAAMqan8n8Xp2Wosdd",
  "key24": "4cDYMrhudeepEi7zpjrDBiRyeAKmpgPuUw8BfJAVezVrz3newZssWPhTNHCmpAMdV6wJXmafdFvrSGDJ5jBz3MZj",
  "key25": "mL4TFdYL9mei7CdRrxHVuUHYpmsKW2ZTkaHkzWXzDFk3uW7SuSdD7JUf793amSXJmpZ1kqB5Xc7RDMF7pafEjLb",
  "key26": "zvg73cmM5vTnDkixiYGPmZcw9E98Y1Jfk9zeYsx2XLwWzcAUMPM2TfYZL4uNSoMLBnGewWSuzBjk8RSdKXLCBrY",
  "key27": "zKrkJvwWD8pUuKr2KwkqWUzAGDtbxAg4b2xttLHzRBePSkaMVp7nAmLmxgnd1iA3g8h9VpySNggsD4sV44BogvR",
  "key28": "55z9o3KeHzyrgpxWPyTMGbzjkHfxkGZVh8w1mBFqviNmnRo8Dk8Cyaxp2PsyMZPyBL6fH5kPX7kY74mxdDRYhy1s",
  "key29": "3SyCAz695XHzwiD1DE7JpXWyEHPF8xT7dqmynostB5RQAP9LYVwv9hvPwe8QM7rNW9nk7wwM2aM4HqUYchCeSeLS",
  "key30": "4DPgHBS7b1hW33XHsjDAb8ypLwqrCcAWq9VUodDfgTDsjYrbrQHEUGUWZZoQAugKbmv7KErUvc5PaUbEj8ENzBWQ",
  "key31": "4sJes56t5ub5XSo6z8whMerj5qRirNDBsfSfgNwgKLBv3tJeo7DZNjdNjSnHfm4cAs56Awy8USXz7F85ob2TsbSa",
  "key32": "23wHLUWmUCzyokyC4BRqvDG5a2kk3C9Z6LDYzj8FWMBH7o2xx2Yg4k8a4KpngzW8FogsGRHPMpz9Y8gHinMC1kJA",
  "key33": "64NeM2PsZLCrqt8U9EJNrfSoFJZzKhu5VKrW9yoZoehE2fpQXBQoGTry2GrRMV4d4haUgzAucwbsiekKnkhnS67F"
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
