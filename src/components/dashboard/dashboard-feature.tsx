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
    "67dpUejufQqhwnLMakwHtSpG7EDZBNk9r4DGxFC26Bd8Aojv5GxCQNXv6Q1eJobvoubff5Qd6AMV8GwoKi4MkAUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52L6V82kg9UjBL6KxmVSSQwRLTHr2DtCJWcj13bas7SBoa4cKUVDNtrqhMBCpDq4HvLVNqgxSQDtHZf5TMsiMAmQ",
  "key1": "3QmcDo4cJG4cUwjDF2ausQaoNgEfjjskFH3qUBVq2yCoYoh8fuahYbCSHJGGsshzazUJ1oNL9nCbuH891TPJGpwu",
  "key2": "2dEYBSGwMkgV3NGfnydxQWrT9Ng6XVgbCpbcnBo881foRssJmub9znYBjh6Ktk5CEJEPVu4A8k8413DppAgrDuez",
  "key3": "XbeA2iSkk9TBEWnw3uAGtbpS232q55qRrcR91T9zyXEtScudNSV4PioXYpuwmYFRNMMqLdVRh1VxtXK3yuCeiFA",
  "key4": "55UP9twpFGzuVmvBzUM1PFA56ZVBXRV7vefbcfeh7B9mkcebrjFTvpJsSumdp8cpdpSWfUkGHDtvahHiLACYnFkq",
  "key5": "5gq8oY5nMKxGV71MsMpfxHf9VZxkpmbSeoyS12CSNBv3nDosNmFGrmpJ766C61r8u7VMfpTNWbRMUZNWHJasgTtc",
  "key6": "C1HVGyq5jJJtBBsMBEb5JgF1epczR9LPgAzBHy2mBRbHHPQEkvX42AwzsibZtKsGDh7NzxDL3znz57FqRLECgVz",
  "key7": "4wQ45VDfr6rbSBR7oSQQz21HDDkB5AUxqU7EP28WGAuu8GjgbN6wvVkpA1AWLubYAKtZxyenfk9eWus2tBqJuunu",
  "key8": "2gKU3R5VuBDS6By4KjTSw6LiNQ8wHr3drS6xpTEHSMkSET1WpQSzevoHKacLpC3EntbvKzXT9WgasvDb7uBbS9mY",
  "key9": "2RrjEZFAt2yMkgjArgqsUik6tKhA3KHpR5r1hn4niCkWNhBb5rtZaq52wzGdB9sw3Qjvx7HWFQSGw3zDgH5Ejoin",
  "key10": "2Dd3e5UA1afysNxJwLhWdP9rkTL8f8bUPBsieeambiCKSYfC6sYW4eeFD1tjNyo2EixE8CBrLAVh2CZNVra24kmM",
  "key11": "5nstxZhpdVpUPtJqgZDTssVTKJRbk7j2Z9Kd62n5eQbeBiy5LgUJp2hReguoLEqTEHMfukThySUJfNvVL25xCHwb",
  "key12": "4rA2eqjo129WY27pBKcuMEj1LUqxG2RksYn6BdJaqJeqhsJBnkBuBt3RydBTSQonQ6CQ7PJDotFJzYQdPzV6Wp72",
  "key13": "5VpVbv6GwPJF9WwsRwwnP72mBEU9VBSqz4kRFfGxPVawhvina9ePSHEeqJcZ7vdDLMWyzQrNVGbmJvgt2AUe7K4u",
  "key14": "5abB2jbTgf8R2X5qJzCpd4jChoj6f1UgxUb4xAt5aJL5Zq1DnAYr3p4dsrSWcBdD3jM9JgyXCjH8f84hXiKHtAXm",
  "key15": "5UHs79ASXHCqoK65Kk6ZS5HcdLqyfCaVNbmYBCL3byNbFXyuJYfG1dCiVRkfk5WvM3tv1hq7wLb42SKVAqGTwJgg",
  "key16": "3HVmhGqGJLj6KVjHccNLW7p9Lxj8z4wqzoPQ5hsUjGpDfiYzRpqHSaKhPYSTaZApLiMF3oFbsc7f2NW92gkHpSN5",
  "key17": "2R9PCoDTQZKkWjNPV6DqHdrT3AhmGNdm5NNuAhRNVnHPfeRtNkHVRVNx6WUyeta1Vu9yN5jwyjFvFqBRungbtewb",
  "key18": "43nL3HzsroQEMqPbyZoUvDXWqoo3gzbvzjsGqFRyUAHeyD9KJk7ebuKvux4HLPsb6PgCbiEAwn8427LYyn92zg9N",
  "key19": "2pJmnCTp5GReeamv75efeBcdCw74M9zoe6erQJV7DFW6sthu4tvuhszZPimkFFgb4hTr9yhnJeABv1VvEyPw4Xof",
  "key20": "5dZpp3df193EyPjHYG9WVKRQcuFzBVDKViTF7UeuZCCfaYaFurdBXPg7rr7w8brvyBEdgE784db9Lx9sy3apM1nC",
  "key21": "4auJHfKR9vdr4tuP1NTsuLLR8JLLMqe88coa3j19AQ4ahpyp7YAq3EqXymyATCBnvyU9ctfScxdg1AEte6z3gkup",
  "key22": "5pBmykj1As6nNsUu6YXMEP8nKbVUzCzySp2GbwBf7Qqqm5MZo5s2VzhWEvPUqYSwyEBkvKHsjFPRteyG2o84qxwR",
  "key23": "4H9s1aGpYo6XMc2t1BLfXpDSQLZwy8URPTxE1hqPog2vroMa3QKVAGkzgVyT5Am3HnsnfDye2c5h3Hy8PxMnNS9u",
  "key24": "4CeVhDcaiuMKnyuqLKVaPT9KVQ3QQ386o9HBpMZ4P23z7L2FgchJT7rGX9Axw9kY5psz4Lzj2YAr2Tr71oi6WD9u",
  "key25": "3PZWE4UC3k9AUWsNGoVKNpNDat67cnZ65eKhutv5G5kG6pyZTkxiU9AqZk3YS65AUJsVkuettUJv7yphQs5p6Qob",
  "key26": "5uR4Lndwm9ph3VHtFZa4rkRyHsRTxWw9iabNq8S4yr7AMTW5LGbJNziJSKMPoW4anM2UCi3XgHNGLAh7aQqyzJC7",
  "key27": "67qNdYqeSHXPpTA7MBQWoJkWwupbWPQNG1bqZMpsyXtx1RFyPkQvznpr22qk7Fwcjzw1BaUi9mFvXiL9ceLRpoyL",
  "key28": "2mYtqisXegjaEgvJZCpXCL7cf3UJZ3unNUqfRYXXji4muomHpVpBacEPMd9Wiup2frPzwB1wSyfiAnBt3DutJXGp",
  "key29": "3n8mzq1Rsvqd7e3kN4dSfsitqz2srZt1JmAxrkyhYyDSVrZYehJhDAYw9f71AaDvSNjTh9PAS1xg1HWLPKWjBPvs",
  "key30": "47DgafDccQ5fjphw3BiQs5UMkXG1KXwDpquqxLvSqd2dQn4RLncAYccFzUx7MgHS5bEENACSjUk6Q2hBceFqYyNg",
  "key31": "67DnrqwtG4t9yR2iY8EaHnZns52bDiuroWfdyHJ4eEcUCwtjc5tM4sAQw7QcnD4a9iWxQCiziHiVsUqKCfnrJp4t",
  "key32": "3ihLRgt45xMtyuEVLhqJid5JBKLLEavztoARFgJibhDbPsyxSTdGgH3mdksswiceYsimm4hXH3QZsmnEvb3aXWSU",
  "key33": "58NDosirXeuWk3dKQAapEXzZsM1B5nL2WoKaXitNGabfajjZf1m6x61R8xTxHCYJqtPum9QCjwxJXmCRU89bC5Gs",
  "key34": "4RqyYNQ3PjENhnyUTHcqBopigav4iMsE5S8V48V4ZXRPbJXY82WqrkmUbUEhSkjJ7bfcppqqdKDLCQLhH64FUyZh",
  "key35": "27Nrm7du44VkmtTv1TKmHcdcvSWT1afEKgWfQLvDd56LBf9y97eWhp7o4WDscUFC5oBTGS2u85pRRYUHR62BJAEJ",
  "key36": "7yTzvD3zxnYCKdCrmDMrCtLGZ2gr5TwTA3wpXFHKGXPR5ssJinZYEvEuSEvmyDnkHpND8r11BaDwCzP1xzcdGbR"
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
