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
    "3dTBSYGemWeP1PZRicFs5kuyJjkTcPBECLSvex2gdkqKgfg4H7ni91GSXR469rga8rWQopggAzsCcdt94L4xjHsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htUu6vLqQPcnPF52s725DG9WSwcQ8UFFefKLKpdTdJEf3Y1vRE7TtnnUdao6rZ6wdNrjhdraD76yKsqy289rZNa",
  "key1": "5Qp96Hq4WJ4Pf5HNQJCHhnqaLXcnj7MEahaTyDhDyA9pvbRTGQbAKMc81YL6QT5k1n1yZMKM9fcoDhu9q86QTk6F",
  "key2": "NqcfAEf6sZ6FY66ZPh83QyrXL1211dMyxHzU1QwtUMYLtQ8Y1aaio8znWnqSSvzkkj1z7maryCi5Cs6odLKEXrJ",
  "key3": "4dm394dhGcQzA17gcj6Ks94mAKtwEKqhnhb3qjwumGmjUAcCSe3ZtZpUJTxukquzYGcbnmZF9uLR6uUzatPUpeAB",
  "key4": "3by4wamarqL1aVv655mrCGDu2XUXJnggNeQ7rJNd6bz7U8wT6AxAk3iZdZKavK9qn7WRUPzdJNjFqqEjqo1Th6JQ",
  "key5": "4HTbqV6eZAQ8TW9rSi8eZgLcquaEztDhr2vc9kNcFLJ7ZbnkbChysNfmGgBjGQnQncCGufWaDYhBVEXPr266cJH7",
  "key6": "4dzfjEd1AEAUpMnzcVCYQPd9Hk7uQEiEt8MHrSSVDw6zfqbMww81wBerr5vZs7tLMQEZ8bPSbV3QmDCoiCaryTuZ",
  "key7": "3yo6KYHVP4WAnUSLdKUHWBXXY52AxZTuAa3z9XfrXWAQK6JMUPTMQv9Mb7Xj8czP2atjU6JW2D1cDbqY7WvZ7XWq",
  "key8": "3wMs9xVwc25uK7R1sKFPLPfCfXuknX7WXvrH7JJUiLoKgG9W7NNAXhjS2ipvZ5UuDZBvL3XTqKbgQSr1poWroqwt",
  "key9": "34aY34eP3UUKP2qwL1xgttqhVNNcjeXMPDd4nUaoJx5TSZkvTySTpJEMuXvgDGDLYWU1x9EAQ4hiZSsqscqyBYWG",
  "key10": "2x8wBGAbQSxi9ugtJRrbf8CMPTCSx6JWBt33Uignf7RCsvhHUnWerf1avRQ9TcHYV7YDoE5gP5YPFX54rxZVArUG",
  "key11": "BEC9Gem2j3UEoTQBqHGJdbHZZeQrsJbqs1haFocmTvWZX7jVAUcq9bkYy5RCpB7ijDXuboyfWXdfzfDM4n54xH8",
  "key12": "2AyycPu2pTbVUdbrXdizfH182u9C8LtzzNF3Jzcgo3rcT3dgQt4CmsLWZSnoTdpndreRBEmCASETvnq5Ae433VBG",
  "key13": "3GV8oZEECr8TbnyDjiZBDP5EtNhKJwUgbpYbSWE1Jbmk84YoQa9zy1MRq9JLXNrZDmHFXosyeRBvd9ax4NhcPhZG",
  "key14": "wvd8EZDRi5CXnHQK9vRs5UMqARSfuwzMRLL7gxer8FPj8AXrv27iQngSTMgHu7D6SUthVRJHnDo9knprJ5AtJJu",
  "key15": "4jzdZhAPRkLCyTR5kUE2hLaUa6Hnoh5K1ZRa5BPXacfx9Bruw9L6D7TFNyG4rowNiHRk1LMknqxFCq3PxHbJEaKF",
  "key16": "3dVUfAYtqxUFCfc1h1Ubmf2r3GfndsSrP9862iXhhaBRHsew9XY6gdSCDHYMPwr8SZ1xVhqtgjHSBpHysB3JawFG",
  "key17": "4GavUAydKan2AP5hnwLPcHkzvFf6cViu1bHDqXqrZRCgekRgZUHmvx7YvZNDh2cjBNN8FUyLr9wrkgWAPFNgxuax",
  "key18": "2trfUkCLkw8Q55ZKntWxPodg6DWNphjJinF3PvR1e1MNxKFAMChujDASx3xVQY1cEMakD7fME5AJwaPMfDo7Y4u3",
  "key19": "4h3LjgCUyZ4oUACGtSAJw1BdQjqwnQCJWcQvj9v6QN5pUWv3uodfkwidhadfv6j7WXqQ4cc9XAYKhsi1BAvg1XAo",
  "key20": "62LsK7SjUGrxKzvwJ9kZe88h169oa9vZhrhssqjWcDsCfcAMqJeAL9TorqXMzGwiTsBkEfqfwf5DDTCZE6TU8Wbu",
  "key21": "45V7HFp356oaYtkTmwi9LqtuuLqPGA1xospnoKUMHAC2uyESf9opgtksUxuMeTxfueWVJkkdJZnPAHevimXvcehc",
  "key22": "bqoEXS3PzWM1ubaPiVcSRT89N7adwXFXjP4UPQBjjK7V7oEc5QSQKkwbX2DSW51NVCvCpceZmDBmV6PbpB1PsGL",
  "key23": "61HfuRBooUxuYhP8ttiRqwHsMURxmMwY68ZTPKK6QdzGRa2zx1mrEThW1bBikLMT1aUYKVehH2MN6ng5SSQEqEjo",
  "key24": "4AAxCM5GUQuCeLciwTb2Nw4z4wcxSdwTqrTv22jy2AyoUuVfA1g2bn6a26eWqb64pJuf33t1YxauRo174XMYGh9j",
  "key25": "tFBG163oWJZH4ZPnftHxXw1eLVKve8f6CbP2rsFFRcwvL29T7iwtZrQdoRSU4Pm8EXWSFWzR4AXTu6W88U2R4VY",
  "key26": "343XdcDfyeAR3YFdghCPdGtoX9LrnmkXfdHva72FovXTkHP881YhKjCjQfuJqVQR5CXogWwDEtCEMKTupFmjtZ4M",
  "key27": "2QMQuc6p4PE1eayQBb93zkxYHnY76nqxRcLtJvcrN6Nq18yWczcbQysef6W8ymfWq6XUjwPcjLuPxes1da7gUSpy",
  "key28": "UoMaQYeZkLS8Q8vmLoWWhhnP3j7Yjqg5v8kA2WMYxmwmARF4Q2w473D4jiQj2UyXHipCJ91Cuian4ZNaCnGeUqE",
  "key29": "m82a5448emZ1vDK5aZBYGd8odi8g74opGjJiorG87BNv6ov36V5N67gZAFZDQdk2pcE3mEjzDQU8cB8FnGfYE5c",
  "key30": "2NMfezhSGEknPxG65bSwFjzVJ3ViAkJdxyVYrMUtiG2y6EKtATPXMjCvXMVpgYeXvL7MUP7iFPa3vswi2K8qc1vC",
  "key31": "2PmA6SmpMDndmc5K4Vw9G9BG8UTG6EwTHpc3DhhzF2wzjRDb9wxwE2oYPiVsq4rtzKEUGJEevhsCAXsRXuqCebd6",
  "key32": "31h5WinkGZWBqpMpFjPSmmuhtuDQq8bHeiuFaJh3ivQTAAdK3E7rYUraZBshKHxyr9pwPjXvPQEQXVhXthiMAHy3",
  "key33": "RBMSGKwnr18oV6DNJgAAPL36HeLAFvGT9F5xci8fwvAyYTAqscaQf8LVDbJe2yyCd1iPQtebRBp1TDjU7mChynP",
  "key34": "45WBBEe34FFCK3SqrUnzxrFe4uicoUvStdpv2Tivvhd6zZujdWqyXr91tDAqDXoWT9dpjSzamSaFsrV9epSAjryG",
  "key35": "39M47JTdTP5nCRmQQ79R5hxtGo7iHSxRVZJZw7thA6ZwcQjqiLbLi744AgxeaiMU1j9kSDHJrTQmCvKLDVZpUpPG"
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
