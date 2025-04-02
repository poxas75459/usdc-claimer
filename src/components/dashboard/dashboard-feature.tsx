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
    "27xoPqabVNGN9RSArmQafuGFvMpGtLLTY9EoX7iSQu13tQbdnELQuPSLsFAUkAvxxhgKiXgKhPfMoZVcxvkPbAWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rc7eS97EaXVJS9D1dojk6SKTk4juY45TetoDsPvPMJcGCkMBeJu9UwbKgGJrJMeCmxSeZbTP2grjyQ8eVzyL1AX",
  "key1": "58WwuhzZGKuvaBDfpDZkftnFETjWwhDW1Rv2RcrtRUyjndAj7Zcy5FFWH4VhC8guXSDZ9RtGsAj363Y9hJbyKqL2",
  "key2": "qRmVYAnYb9ncnAfe4wysGYMpcnnEPFbwSER5nVM7gGHQBvvjyMi3YPqGEj1EahDDadXiRBuWFJxkVPD5URWXzLy",
  "key3": "4LFrRoAEieRpo8NSZVDNMipcqJWGf2xsn6JgoFpS6QFJq7xx2EpkJGZ28aZxtggqkLRfFJy3EdSVbGcyEJHfhckT",
  "key4": "2Sy1gH3njDKUppGQrEWsSeBPBv8Tpc3hZhPYJgisv4QxvaKUKCfbTk8ZQ4X16GdkjzruQC8hdo3G69Y1PJLSW9cD",
  "key5": "4gUene6QktSt7q8U3v4iNqhJRZeVvWeFEfz65zh5oFy6EnbhD2GkVTXXU3vmy9CJazpsXh9uSXzFR36Twk1gcCJ9",
  "key6": "5q9VU6LQzJDBhHrmmkkBUt6cQSRWXdE4qfs5TmuzdbjPVctM8yvZiqXHjp2uFxfbA4Eh45RxDfBiiNLjGje5KMVi",
  "key7": "4h7QfCBDWRpcjoBpQZrW9y6mjNrDkoppoGgradsQDj8A4EwehGNJg34CcmSjnt95HDjmKjVNMvzBcHb2RwsamLZh",
  "key8": "5ATbhgqTdj5RvESSr2xoGuunAYjWHeyQk3tZSPY1V38pT2D6K37L7pyJsTTLvjCj5VxiTgasDMAVpUKK82EeWaaR",
  "key9": "4fjtoa5asn91VyThyDGPqRobSdPs7RPyT4AeX4eTkoJ3D5hYNUCsKhdCpeKEbSQE2xkKttaj8yQd8vuR9k6YztBu",
  "key10": "2MB5wd3B8FxCH2yL2mxnQmtSFQr52Xmejf6VbRxUE25kjwnr9HxYozqTXyDMcw4mK6xRNgmFt81dgQRQCmE1G7aY",
  "key11": "3Hz74sSA1fs2qz7HxXodfvvQ6VsAGt6LBVHSW9DHx8YqJ9cF4XSNJv4VuX9pQ9SGbeyFRrzPwJEyBWgq9kGBHiwk",
  "key12": "RzCdPhtw6RX9A7yczVt5UBicH4uAjaqGykqtDFnHqGWuDayrg1FMTkcRCKhcbHidKJPhDQ43mDoLXanCvtyprYF",
  "key13": "3mwvazmBZDz3BGngAPGFPXVPt37v9N41f1RJdoQoQH5NheBQeQgTcA1E4bByuZMXHTi1kayhFfoLdNyMnXK2Tm1q",
  "key14": "2ogNYmBvrLJ3siLqsWMzhGpdeKcU1h9vkPnMRQEZmFbGbvzxEvA32iSefHdFQkDKnaAjMxy7HyQcVkXGJjxnnuJt",
  "key15": "4N3gXWzTVSMh2S2qXvJ3FF6c5hVqEesPkufjCsACatdJ1xbxdVRyKgTzTy2McKyv2e3rbwCqHvAUQXumRoh6tCvx",
  "key16": "VvtunurwfhWRXKZwaw96BLCkmhkkFojm1LxyR3LaCszjCSTHQLeTJf29eNW5LZJ9TkQegAmX1f96d3R3BQ1TLBP",
  "key17": "4NnrtXRvwSrPqnb5Fh4VSG6YLwd3wg5WEDhrRjHWBsKLKyFAU11Sgv5XwbSiJTzNB7zFAmTSiVGc9f34PSn14qcQ",
  "key18": "3zkTTKw5KUMBKb1r97y4dRPqL1niNo2kMYGgeiDk9vrArUS96P39vFuzXeRj49ZhPc629iUi4xMaLcT1A4DZMAaL",
  "key19": "2urPX3vGE1dM8nH5TT1AoHSUGqPe4NWe6u5CAeGfwbQsVa79bXXJZFWRM9uGVkAFHcchbtVwTj2QH7iMmpesM7XP",
  "key20": "3iV3HRMoWizbR3TkPWohASTktgVJSxpky7U1whqAcWbeqhCqhAWk3bdaAGHkiCA8Xo4m2ReARCiFXasGPxoAK3QB",
  "key21": "2gWzKSq7KSeBZvmULdSa1EbijxTN2yJuVBWh7htckZjg3NjR3cqm7u5mpREPkSHdH1eEhvh7DoF8xPTcjBfdW3Wy",
  "key22": "647HEZyHDY2L3UrfJ92UacVbCJ5UDnirN6tvGgLy8yTmT9eBRRdXnZqvPaByEdJ6sGcw4cYULsNiCWnkGsKfhHRH",
  "key23": "4xcuVQsydupRXNqAd9zzzARAeegMWEQobnBm8R3mWBZzSG57euqW1RJAAfKnJtfqYPWcGDeJFCU6guqphwGaTma7",
  "key24": "2DNFfN11wAYVs7fCr662EQEZgdZraL5Y9xPKVHk9vGwUM5HoW2wyfz5srb643u56eQcNmBuK3tg837XAxH64VjoY",
  "key25": "4rdcSDKVrw51pDzE7TTCqMR2BBkDLefDUUms5vL5cuLJoHEZTAUiuHQAatSaoSKbDyordJNK52BgmjVEEpyMMh6g",
  "key26": "5BDcEsMz5ay9ic3k7vLjqrRZ5zy2ADTZtGJDhkgFJiG5p74MRSaqyENc1E2W3N1mJMxoD2xMVXS3kxSvkSBhRPir",
  "key27": "3Pf1XB8HsbbgQCyECByEJLef1yAsNocVzR75zxH44hSDiYYhRJ9PEmLyr9WNhzn1ywHqSihTzvxhvTKqMRYpvpT9",
  "key28": "3G6aiX4RYDzTJrZ6p1nzH9S5jBi3HdEB47qK2H2UGSRhYQMdFMDQwy8rnnVCy7zSs7KjEtfamm747G7gKxo1pVkh",
  "key29": "2tyQwFK31RZaG9P2L6UMm1dfNGZguMCKrwwMQXU3PAQNEXbzhNrPUcL8moup8fviFLJL18yMWLwcottWGpWKTqzp",
  "key30": "2eu7nWBpm66c3sa56D4ny7KrUPxLchBFanYyphmN4s35nwRuGnBqoCRvy7s8713iimrkvtcUcuir1HUoE4iYzGMT"
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
