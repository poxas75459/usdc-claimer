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
    "58caou6EWm1Mdm61SPQV41ap9bY8NLmFB2zXmXWii9TG1sPm5jpuhirMcSR1JFmCzj81tsvUxcNFYgA1kjMeo2kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YEwddBreRAsf9uD2BDv9143NJkc2DD562JGgvhEAyvCbz8CHCDnBLQmXW221qpU3uSBkoThSMTEn4m5wa6bjgGg",
  "key1": "37BkvjWpiGt7fiJSzcrGxz6QA51B9SvxDvWoiYAHi23GZ351DoX84GYWqRYyGHQ7r25EgisFxGPWWw6NTQe6vDRf",
  "key2": "5BfhfsQEfKLbtARdTyC9B747RhTgapwvqf2J9buyzDaKLsfuD7D6zMpLkqrbZkhEW5iQtYKCBTYoXgDp4dwoPf6m",
  "key3": "44qnyDDffcSFVmcn2whCbfeLdAfnMY8qDgni7uVqzGNXHW3HchuBtdSziEK1829SH5xoQqtVZLWY2FbHcunc5WKn",
  "key4": "n3uAWjfMihMMq9QXTLZyjaVkTVpGwH9PbC3ZL9gSwfoarfNbdMA5wUned5R1fUfbogntRoHPTrwNjs3od5dr2mJ",
  "key5": "5fiadSTwgXbBXuSeo3nFrkGg2F7AamGzFNVjdiZ55D8R1fnqmRHEUGSMNxnsoTG9rzT33Cw1u7R1qniVEVD83Ws7",
  "key6": "6Uf1D1r77msbHWijnyTfSoPJtRPeroks2cXPk9ipYB7fHicWSpnqTmugZiX4iLpBTiLQVAjguZvdygW8aPAJ8nQ",
  "key7": "3oQgQoCgMoKN4mDyx227yATkcc6hPVEQLjV48dGVZfK26TdqEF8Pne9yEVJGRqSEXKsVZrm9JxDqRR7sVh8QnN3p",
  "key8": "2Bg2xnxLdqCSvYNnBS1shVv2HuwQpzT94tfaMPY7RY7FHDYXRQaKJS7qJX84d8zZWA8SiWNjEPNkLhfLNMFaPpfT",
  "key9": "Sq4wtiXu4pQaK7hoDFkP4TX8SVgFrdWxtC8zo8mTm5itKhqMMwJ1x9RQpvyGvosgRsFNRr7ctoowJF7qXh5QqFM",
  "key10": "4NF8xLXajY6wAHzUHxHxSFXZrkKQxB179dEWEkdkndi5zFJbtjmqrsLVbVhRtgj6qJAKbs3iUgj1gsaubFqHTYkk",
  "key11": "5dRMGrfjnbNZT4qRvGHFYPcok3TwteWsTfthmGjzwxsvRvkLAtLp8a8yY1kKDUbW7AMGHLSwneX3gG5q99qCt1PY",
  "key12": "2Fj5RuKRnxAzPRiGXuQ7ZD1gLhN2YqHmXVFkntoXxyRYPoherNskRfB1d3mqpdvgxw3FjkHMbBBihFkvxYSDKMwy",
  "key13": "4B1xa2DSNEmsxHWwWKZh6bYdQWzgBr7jRzBhJhYkV7PubZBGKFMgD6gQXrctGV1DFCoGLzXR8LuKC3tesZFUWo9C",
  "key14": "24haPEPuD2hjN2XdTyPtjMbVFnVNx5xmmQuYYo1UznwLSsf16swgjkQYz9bDs3ZegXvpfTY7qTT5gSp2sF2ciRwG",
  "key15": "38ntpf8uAxVayGshnmSuhJDZyZYfTdN4WkkL4MXZUyDG1HvixRKx5iA2jzK3zh6nCkzh3fnVw5ostgptNDEZmJNi",
  "key16": "3ob3MjMJ4ys518LTT8RGRrAL3C69sHrqDKa73XbRJipnBFrLJQHsL4MHFU4btm43fyEQ2cha1ETbN2Rg427sRAFo",
  "key17": "dLxseqNWnA2mJsg3As86QNDm5NnKt3uhYATYFU5wuDyKa4HzbvBpJSgBwxEhjKskThwM5Kg3PzyaAaRp9ez1thb",
  "key18": "5CiDENchHA6xvm4ZCiMzh36yDrjw6FUDWVSFrGBx2pvGpiVPw2tWD9xwqKtAQArc1WXY5agey41E9zQF6HdrfiX6",
  "key19": "4pcM98rDkSosQPooW38SbuTWBmrUfK29F3YWYm6J18cJV8ZgeYfaT6jocGYTTXu9FwihivpS2zZhcHHbCoccgNpw",
  "key20": "4UdgEKWvPQSBbAThGicnuN5QR9UVQLsEohjvinDPt1yL2SjWcBo6W7nfckiqh1RV1NE8GHjJaqApw55UYa355D5f",
  "key21": "2hsktMhP5sFtUEfp3vyWGs9oZJc6EwrFhgBMtBFo12gxrrM8zqeTajPwgr7yCsmojx8CjsLKgESLFFjdxVtrbZpM",
  "key22": "3VYUegLLQm326b1AQPN5Hn3wHSyh3i753id7E5maeijFvxXPytLFnSr5NprRPpaWCFPT8cwvn5XJS3aJLzoHjN8R",
  "key23": "3BX8j4SdueZUVU3QZ185TySMHRTmAZM1xXnjDSutCueHrJEL623xgFAwSMHUbKb68PFezbLqpmTwUjJjp6d8Pvxn",
  "key24": "5ouu6xEheT1inEKVgcfHn4LCdvTDqwhhjZinDNEEWz3Wqf27tzWrQqvuvYr4GHkeY8VFdGC6RkYdYZNygR8vYJLr",
  "key25": "3UXcjnTSASApsCVJrZ5X5Hh1hXjYePMFwfbv9PBbAiL3Kc6HuzaP5gRNDJDHkETEoV2ZCbqmixbQePmcqPC1yG8g",
  "key26": "5qEHKSSqXCrxeaP9vg597edDDrQTTbS9ngyB9wUDB9vQG7MSZ54ktbMM38273VZWRvmb3jpRYCmusy4A6DJ4FWBi",
  "key27": "3MBHJ3hB4K7CUSSSDQH6jnTLqXfY2LUDWzrRo9fUrsYmYP86h16x8XAKpHQuwCcWtVyirYaQSkgQeV7JAutaEGED",
  "key28": "4bcXQ7WRy2GbDMWTFqfCYZrzARE4LU7fRwy8mBwUfJasRij8SkmpUVfbnYQMTtFYxUU3usxtZ9oUAh9o5uGiHope",
  "key29": "265DgnJCak2U1H42tte588Frrtyq5CvqwzNLWudwLcd6Lbou26D7gumCz3UA86ki7cHEhajSo64mPH3yrdF5D8XT",
  "key30": "5fmJt3yhPAjvLE3e4A9nPvYEYH3gcRaMY6f4WJjiaxi1xN5Dkg3Dgqj33msyB9MccSAdBZtrk8nsw7WG7xc4LyL3",
  "key31": "47dbubSWVY1hCX3Jxh8zXMZBsebsJxFfWsbDmzarYZqimviYZ2pYFJfo9QJeJh52EEHhrLDaTqrAfb2tBFe5bA2y",
  "key32": "ggvDYgxsRihGf2icRxoRpJN8JebYRCndu9BN6eVhav7PyVCzhdR88zoTJGEVKw7GYmuWDGD4pKUfuRvTaEpSVAA",
  "key33": "3ndaQESr34hEh9fzSSJjW1PYNu1aVptVRGAu3ihJivTk8nqsFrwkfg9Et7heJVnQhgcM3xx5iJ388zY7pceMxAN4",
  "key34": "AiLDh7UDhDZvPjTZ5jRjNqTkrsyVkVZfRv29a4euLBinSgBEcBEVyeGwjii27QnzfDXevdmHvFETLwWnJyZTPfA",
  "key35": "32M8DdT4iWwv92YCsbaoZV1kkteiXstjAs7NRnCwjLcdHGiAQjGa7n7Esr92G2ZF7Rd3iinDfhNi4kYj9AbZ31FG",
  "key36": "49CySJ4DPnjGHuhtfxb7BwmjgYYcx3XA4e2axWehHgmF73GBo8GMtFSFegg1qno6gvu8hbeesnPA5SBqABCs3b3a",
  "key37": "34pz3ToKFwEL2RWNwwTNhfTfXqC2moAYvqu61y9tiPVzkqZ5hLvjin2YJdRZ65XGcwMh4mYxKt7rXCHDxzWHQDrg",
  "key38": "9zRFm3uiVgAWa5xZM6gBxJgSVuhQtxtPyPVuXirKJ9a2cnbV8canUM1uTZtcuyQw9NQFHxhpQk5LAutZKP8WLoQ",
  "key39": "5fpMv5YB6LdUyYRbVvVvEidotVuU2KujLgqHo4zv17wLCF1tXcW1TD9guBDHVDXdg9di3biYaiVEFJtQcnw1f8kx",
  "key40": "2annwhPSG1AYQ1wYYXCrUhgR78gREBSyJbc6RwzXCiwmLgoFF7v3kc4uGehRnvxMMpVMVtfAe6wxzXVCZKgV1eXf",
  "key41": "5r7UnSd4tx2fKbLdoUo96y45NioFRerdATp8CTWSKt8csi45h6zFRMQdw3rTfQd2ZdiWi89KZkxVwnPUPQckyTdm"
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
