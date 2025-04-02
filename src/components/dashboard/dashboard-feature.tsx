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
    "4V2JQyuRKDujmAX81urYceUg3RuM2YbqTmqZdDMJt1JKxESCzhpThXEJW7LWowLtmGbMBc6H9pMecm5KPBhM4fBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5As3p8M5Cap88fi8kv1pdorf3VF4Bnn3ZBoidHS6YXY5MqvC7Ni1Vvc1PAj7nKoFhvZqiMXVycmLj4osff7UDP5U",
  "key1": "4iqF3xk637194Y7SgBV4kd8rurwwF6eTuMDgedFv9vhTtqM1apWeesKDB7mLLbAtnmoKwzJ9uJdScvoduiqKAsqu",
  "key2": "2bMeQxA78PmAtLJ6sqcNyB33WTqjmCZEDPKBT411kF6ZNi3qVVYWKnZZDb7K5NrcG1YCpNsmxuvhwqGNXeckNR4A",
  "key3": "2CAFRJn1ixJ7nHq1iX4r5PantZQZvCKEReeF8m5UXSPiAAtLXRhikxdc7513QoNY73Df2tptX7qviR5oprmYGLUB",
  "key4": "482zUmtEuZuG6sMi46TqqwNLBusuGrx6YfvaU3RhvGhgerErD8hyebZfYfADvKco4xM8c7cNXg4ARF2ZFBzFXXfj",
  "key5": "3xnDfGowAo4mHGkAsfChaiHzCy7z1S2jqND5BBifiGaDmpxqwefpFQWdLyvjqrmV1rPJzmnJsTy1zyKyVBCNTKbs",
  "key6": "224vP4wVkx3JrY9ZGtyHCgLTX3rJo1itCM9y4v2P9MRadts3xJinNDWXiKb9XuzVgMKSnWzrU1SZVC26PuJK4mUV",
  "key7": "3GaQUCTiVQuNhDE3Mqf1kb7uCNKmr74XHupTtcuLoByDbEAfPEnvTaei68yGhHAPUmvtdYGNFwMJCsJcQ4zynNMb",
  "key8": "YiyBtZ2WNLKbCXff7BtAfArmjUHQYKTbVTRCpSLGKziqvjUTe9562FDwC4mq5EyGtuE1T5nLUsJAA86aVWAxdjg",
  "key9": "3CCG5AP9GwMktkXp3UZAggXEV8gnj59tj777BzkSDmfLp7T8ZcHAy4DBChPix5gCZhqnuYaRW3xdAcANNMJq33A2",
  "key10": "8fxzZjbJ7LbSELvxFBsGN3wAMUR3Bd37vFVvao88EDECiEWeRNq4PNJSY8dRsZJha4uZm4VfCQi6RNQ9g51m5ey",
  "key11": "4QXk85n5rZBah6iq85sfVm3QaJoYjW6ZyMUwxQ3ZJ2u5LhdGtyG33astCWXEtZB8gLZQ5z8o3HfXWkkpAJ6UrBMH",
  "key12": "5h3N1KLiGaTW2BN9n2Z254pjqZaZ6UFbC12wrCZ47do9ngMsYjbY9XRLFvL1Z48F7QFseEUMmUh9ucRgmv1c75Ri",
  "key13": "5QpbMcfM7yyeMPWq1FNJg4wfkzee465dkvdnNn2wp2ZYpsVCahQvQ4T437ojJoLki7Vtpbn7Us1nGhmmEyz9hHin",
  "key14": "4yYFrWGEWS3QR4FT85Ex2v6DuDVETbUPZBWbp1rddUxUMM6kwRkoXmfLV8ShQcWHZ8hpANU3QhCkBsgi6TEvu7BV",
  "key15": "4HCL58XfkgFfX56XqeCnVQDMs1V7qWFzDCAiQiG1bPHR1RQNDmG3RbwEM4o3RUM9WyFuuq8TLU45Q4WVUT1fdY9C",
  "key16": "26RsDfWfhQqC2972R6oq2skbp65yJt4NpBLe1i4mHphnjYgCQjVL4TTSFV1JZCXENxLTxVtu8VjdhuxWsHU3oSPp",
  "key17": "3tHimUfN3k8SJqit2GwNrfuFyYcJ7bbrXud3fw9fmuZr1PehQwJGwjANvS3EGoZyShx9jK87L6P5xQzpbB7P12zf",
  "key18": "3BtxGdfx6WvRhvxZYcrXqUGPMyUBLXyssHMcsmZomaxvzok7AEcUhpZDFPafVC48ZgYghTbhoiLd2ELEbkhHnyJo",
  "key19": "PBhFUYThHaHgk4xAMeVW9dzmLEiBKSGfm64seQp8pDCyKBSujmY9j7zSt8xXx1UPX41ZgedWZNgDt5LyqxienKm",
  "key20": "3e9AqBdAEY35HrcvcyRtzzSzG9EPC7LRNdayPNxgV17PyMdwq6v6aws7wKHqr3gm57Nk6JhDKVd6Yp1aZ7A5NBGR",
  "key21": "5J3BpqEoGuW77qEScTE7ZmoUSQiAZ9hb3FL4cibFPAxKFGizjoQesNyn9RCZuAARcti8RgQEQHatZY3W4aMJDbrQ",
  "key22": "u8qxxqGogUs5hphySn5o8sMmAppfLf8oUa6XpdctPA8WDMkt2K8VMpbBxStuBnifNTAAXZGWB8ekyZgk3EHZKYJ",
  "key23": "4ed8aALNiVhozcXVasfKUS1L8wJqgsLamCk9vJ95HzdukyVTCmw2wkGZDh9CTid7QbzpXvwEbJ6KtDmwrNQGmAWf",
  "key24": "5ovrQziWeR8gPkaVxwGzMuAwymzGtnSvPbuEosZLZkUs2f6QKNk9W5sjsbhwwnfTKZMGZRsp6ZEBq8T7QBtzkCet",
  "key25": "7FkbFD3cC6ifBpj3r3izhUc6etguovJa7DSFxCQ4MqYBxTeQAFNcEP1W795bKxYJ8XoyRid2nEhfZN2YWpdnX8e",
  "key26": "3Du8hkcSyJNxkQBe8SWQZHu12d4H3fnNa4rsMEmspTrrvhPeNiZ1dnyN5KMqavT2M13QGFsVzrw3Xk23Rag8sfL4",
  "key27": "4SCrZNakv3KdcaKXJtrQMz1maFs9PTugjnurfb3BcHDZg4NbMUiaDaRH8exFzapUgNesRwfD6HuKZDyVoBf4GWrS",
  "key28": "2HfwiYs8iNVqGKHvdraJC15hZhVz864MLS96mYtMynYBDGRo8UZm2fFVRugo8vAfmdq9yBiN37XU2gfdkgc3Hf5P",
  "key29": "3EGEUjvUrUpL363M1LiAmXPspC3eCmSDrcqJXVdatAY99HS5W8UKY8Et9HpKWBKWseBuzBprjtRpgzo9FjonnE78",
  "key30": "3DfNmfDEW8vXsYc9a98zbkuwT9DV9Qe9VaU4hoWvc3PYuMmNczwwkrkE97aTy9bj1dG8E74fDK2kzxWgsrPRsRyF",
  "key31": "3rVNXffpBC3cy8pcZFS735c5sz1S527BL5kPLj1cMhk7fg3MVbALocvj3Ud2fodvfn4f61aje7cCcBdzHBLp1SWW"
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
