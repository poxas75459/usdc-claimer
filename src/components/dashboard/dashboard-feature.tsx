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
    "2M2DQNYn8MjAWvxmQ3PLbyZ1xb2ZvYiBsvWEYBTaqZ19sGNTgxcwHVsY6T1fzABSBre63gStPVj3rbBRwTHPWMrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ADQXguxXm3HT7XbcLsXEPqwXpYoNmVEfBuY8uqXYorf7nwbSBqixmqtcXZWXbkaLggSFZgjGZGpycuovNFwsazD",
  "key1": "27Vakd5G5Pe1HcN2KNAo9jGj9NhK7YyqWpHYekrzZhxcjoyb4D37KMiJNKmks8mfhsUfbYdchC89A2DmGJ9ZkkPh",
  "key2": "49mYUsBZnnCaxqRVyxhNq56qNY9FQsPfEKRPrNsfDsaaqBqF6maofHhd76Xyu6DSKFhKx8VWWngjfnzi15rxxCQ7",
  "key3": "3fpqyb7M2xsbnxfKPbisgh1FQZCijX6rT4XA8BHZ3C6m16BgvALoovzvyV4mutDPWBrSjHD1QSEA5bU4u95QV1eK",
  "key4": "3tcfaLYwDZAyKeMBEe9fZCubZseNswHTTqpvSDjrKVpGCgueuwYSwh415Ds9NzYXq34kBY9Fi6g1W2tdYMZnRw4u",
  "key5": "3kG4n9EaaXf3LLWSRQVtZ4Rj7vYGV5qWDEoA51qazrbGyjYCbwr4PqBBbKEUEYJ8z39mLWtvZwZBu49zYreS5Eg2",
  "key6": "BZW4jBx68bRZ3KfeVoonQ6iN7NDsNm8nxxFbnD8HhibrJheo88JYUzVWqNrFhLksksz7yZ6gU7gDD4FTuoL3Kpx",
  "key7": "2Hgz19Bjqgq6rVoPv4wyP76DGR347LdTdLroKFbrgt8o8ACKbg7UomSsVVo1WPQEkFSVXbnRZBKv3gyB4981XUmb",
  "key8": "4j9PFH7tFB3Rm1ctH7eusu8RfohyxMWzJHTnvs1e3vGCRcBjm6YVbXobSDLfMowByYGzryRoHvJc1Txd9jfa68qV",
  "key9": "4onxSjPfWDCgNKtajAvqUVDuTPUJenihPURuzhDcYKJ43aJd5sbCYcqCa96iaG8kzpQNaBb6gFMaqkoS7T2BD2tH",
  "key10": "5c67j4yyPav77fSLCPJsW7qnABxMSeccmdqeyjbpbxAJk29mP9D2KPz4EAvN8BxbRpEQ2nJy68aWiXRj75YkbtTe",
  "key11": "64PJ45RaXH23gaUU4dUKHhZdkLwzTpNH6AheHk1op4hXiVmtjPSeAduiBxeTH6WKpSbvmvR5uD3GDsrpBMAeZwvA",
  "key12": "4Q7hS4nrxmsgdijUp3CVTAF3gpXLvVjBeMCZgNxt7nj65ENGTKxkjDNUhKmicmhrN2HSLYYSrY6wceqTmosdfvB3",
  "key13": "2qZS9BhAGWhAEEDkaXeKERvgMuhnH8kRrtgAWyHrbDb81WJhfVysM5oUoUWNAFzN6LdzzpyvuGMHBS4Tbrot9E4b",
  "key14": "XPonWEbnEVypdYBSSjYtDyhw5kV5YiaBeogEaNUWEoFQeLWXvSU6D5LUr8JLLJLGxv24MsCk1b9NzdSq4rBXJAT",
  "key15": "3wpYgiGQkpVbcw6Kvcik84EPH95YDeEQZmLp35tVDtwojgNwV2mVvNTEDRgLVp9PebPEsrFD5yvvjw2xp9LDvL6M",
  "key16": "64FE5dDkDmwv7qiPtVPUeP3D22kqXZeXAGAgNpXHBYbnKbZAwQohZS2ibjRF5DEEjWmX6NvoG8f3U2D3AgoMgimh",
  "key17": "5SttYWrKubtyUETG6vqg6Y6L8K6FrPbB8LHsjhZ1y26bXdqDi4xpBk6DcDyHcdqsMPGbNsuBwFsk81BRqGk6P4hd",
  "key18": "fSx3RjHXky2WpR1ydMLzdq9CmAWJCdw4H4axgiA35s3gwPhtHMt2Bg1mJqALxMw3Ydd3tPk4ffmzFKWav29EgRr",
  "key19": "2unvHanetKtiRw9ysoFouuD6ne9Bi6zsJsM7UbuhSSGZFjr2y5zi4nSxqHrhxFXY9Ty6gX5qQsdox33Pj2dnmM4Q",
  "key20": "5WwutDyfvJ8znqAX711hxAFSwDUeCmMwLCNNDWXRtMLggyw2QNwyNiUKorV7TKTakjmV5s9zWGDSf98C6Y5ayVsG",
  "key21": "2U1fH6aUKPH518G9fvCdgp9E9Hacje1n43xukMWYHXXRgvjobo5FnufTZj6BAfB82mHc1rES27kFseCxjwLoDmog",
  "key22": "4Kfte2SJoDfFX4wtwRq7d8r2nL7g6zNL6A2SEFC78vPcBpkMD4QKnVkkANX2AKxzwZegXEb3SGgMRdMCdYeZseuz",
  "key23": "5Wxk2xD7bDpGETUqzp5KBm9XJs5vwvXhNh3mGLbBus2UQxjUPhtcM9BMt3UNCLoUKbYAE1id4Q14mZDtPpr8gYuT",
  "key24": "2dAuTvjCTbZjt9ZBnL8HPtKTUyJpX8bJ9AWoKLfzFPgXw1TvYQKV73cj4GSqcK7jp56wMdtUd5aZdMcsH5Hf12h8",
  "key25": "3mmoZMuRFxx2QcFKzQ59SVYLH1DAfVmWDh1sED1KK6vYiZ43BGaXWYTpDw5AijGgoh12cizpVpLDfpwVydWxJUCL",
  "key26": "2VHzVK2Xcb6ZmmnRV8BCo111JgkdNubBC8BEKrtiUYTRADSSUjbgqtnMwnT3cKxc6HfQajHdKMsHyp8oA7QxyVo6",
  "key27": "5xWNziB1YBBePWXioQfUMTw6EoHS8SDtosga3BQLVWSCvfpvrGPgU2DxxhqfGDv9xivLyX2STEEiBZuiqarCfKqi",
  "key28": "4aZS99U6FJtY5otoxJg4NfTeYyjU59mVby4vZRvEdEbuLKcnCnEiaMfj3GHnNEAZkrHMyL12HTikY4gXEyheXgWn",
  "key29": "5rcNajafNxPxs9Lz4JDDom2wRcMNHvHf2AK26eRnL8saxgXFnU6UBZyXcoSfBAgbedaauHtfRAzwhMoQE35ZEfxz",
  "key30": "5BTfCfDTZnzXpwRKoTRX24yXMw1fQ8rtoSLvR45w4bcbd5FuM9h2zdixQiVtj3q3sbMvH4ZZo2QiaZb34LpeJtGP",
  "key31": "DN5Cop3W1W1UxoVig4moUMVk2uvwqo3Ftf2tLymxFLrNyQoJ6yAjwgXH68HJTGz6oc94AG1PVdDvAgeZpKnWfqW",
  "key32": "3BSQEyw6SHmGjUXCaPHbQzpYBUFxeh4QHXBX4WoeUQCZP2Rs6xsUJRnhsLADjAzqCGypPn8Xe3yD39eMPzjRp5Vq",
  "key33": "54RQF4gm3C7WrXH5rNfFyeJk5cT295tB3DbgdfhL9WGfFhR3PyLygj1F4SBykNn41qmXs4Gu2yXjoFvnyqvCghDr",
  "key34": "K1XxJkFfVjyijnyQN8FhN9t97pgWYDbTp6yZP3Q9E3VnjD8BKP4VsGCQ8vaajp9aPspfksXvQTBEba658vgXEDA",
  "key35": "2e45wMRwFJfN3uvjKZq6SmDuVqeiMrPWvPurhCMhhy1iCYhgufuf2YHLWj8KuzaJ8zARjAu7mBFvGosSFXzobaCH",
  "key36": "34EPgh3CkACHUCijGfZi3LEya3XjyPwFR8WiDXRy1Pw2zdXh3A3wEMgbAypyWBWw1DSemvq17Ha6BinjAdmeQBMQ",
  "key37": "c5kBA8Rc6D68q5i3vucz7rfHsnHdCFtydFUvoY4CZUCE1i66fDZ1pWs3NrXH6zAjMqkqv4CTkRyNB4rJ7wuyBTh",
  "key38": "2t5QsDFVQJU8PKEWyEVcBPp3w3ajgghGLTRUdpjTPH5rdi4y1V34A2nyAr8PzoETAFMyvXTaxWciTuiTfnDWVZrT",
  "key39": "2oaVLHHpVozXgDJU7tFFBWs6bT9eocEp2jxVsE2F9EqefmVsruMpDdE1rkBdpyXYyefFV5RRtM1JNGrzoQ17f2Zq",
  "key40": "3vbUbQc52TNtEbTSaRptbJpb3V7GAtpLvDpQncmEGYDKeEQWhQKbBuBrHcHsVsvu84UHDLi4Giz7uJnidL1wGGSA"
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
