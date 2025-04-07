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
    "MXzg4cjYLF7mxzxyD6CB15pYHk3hF2H3aGKvqzTi4ugEfFjL8bCbCAMKsqKr678WCzWqfKiGEBzCvKB1DwQJvJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YPXARfvkSudSsr3KujA7MF8Gg7exgp3Giekuy2cXuW658qL7etHhXzZftaqdQUfPNDX3hXdrCy8wYDSSnb1TZYd",
  "key1": "3UZTdEGv34YXHdCEoqWjB34BafeDxvQfo6q3JBpfN3KzWxzcf3GdbVs3mFnPHoqRemZYVzZymgKyUUnG41pKtHzB",
  "key2": "2iPCScPnUGgbwJh9fZ1MVt4uHWy79XZ1sn6K6x7DGumkF2LHELqPvWjMkYUFgz7PAKLsaKLsfeUhzaZUy52vS1YH",
  "key3": "5J5kfF6DqRHfzCy8jSXbXUxeL9uw7XXQoo2bQ473HVg5rZSt9qYYV57Sunmarmm46voM6GSAPv8s65FsYaJZxXfy",
  "key4": "5sX5kLMaoTtBev2QsPRSgwFFrH2yDiKfY7eyD4PSiUhWxBcpNiW3K8y5QKtEg4vZL2pDpJjHx3URzADPgoBZseSq",
  "key5": "5uMzPfALrR3jof8EriVF5oFcALCdM8tyzr5RRFMruSmmPU1rZgkqfF3vzA8GBJWAk99oW7ATP9RUhCek4XvD4neC",
  "key6": "2tsDoKS8cCFnoDEqHGA3CnYfCepAy4dL8qyEGKufChxRdaY8iFpHZUGeMdUy8CDB3bAjRaVKLgm5YFf2z2JFa2pG",
  "key7": "232wjgNJG1iLjVhcicJADHoERJdHzFVzoZyUCFULoNv3gJa39Y3UJNkxYRYqHjGuH6Ghud1YRmYUGLd3Gr9T7ptk",
  "key8": "3qjE3C5fJesf7vYSfhfuv3r1Xn4vGehfpW432LGiLKAP8uRG3fDReE6tHmBniRAy5pAuq6s3VfKyBUd6tirDsUfN",
  "key9": "Gw3a8xgGucHP7NzzhABe8HsMLHWPiqxhgy1ewUuCEm8mco6ykzGFEeqn6La8MoPMeK36dxTL9XSDPYQ2qonwdh8",
  "key10": "3FoErTeHrjbfrPfdgSKwJzcyget3WV1wK3ZHq2XgyDqr4xdJJKTgojx3VC7DoYKJ9KJ6Whi7SqZqCfPusQRLErE1",
  "key11": "3jWU4jVJnubXWxiNy8JqHHY6nSVimdJubaGomqvtTLY4PNmyBBSDR3tnMTA3oGLSTdbaWMoYQkcYdxm5Dr3qAhPn",
  "key12": "4zx57LEzeQPSYoBrWV2biUfha1831zEtqehHJT3hEw2tLJ7bDJCH37zNxd3ztFSBFHA1S1t7sUTUbgSPpK32ygxx",
  "key13": "3AurrgXNMe79jtB7ZNu9cUCipbLSGZ64wUS8wuPL8wXijXiG9zndVz8i1Ctdf8WYsGL5Bn7GVyERyLgWtyfVfHVj",
  "key14": "2vzc3f2PLgApxLJH3kVxpc8gThTfkvzEBKaro2squyPu33sfKkPWoqo7DKymsC4EFnQ3KNFsvnmrfr2fvKxzKNiD",
  "key15": "34fBc5MkWBF69k9NJ9wrQjMYHH5YZbKffwLpfjTWC3M2aaDGkLLtoPwn9kPiyP39ispawzpds9sfWUDYtcJyZpBg",
  "key16": "Sb7debMh5ivafRjYTkBTJQrwqm4r1s1yXWSrWZArVTGYJE6BYShErh6RQu9vLTZdpKjzKH7xrdfY5SiQPvrk2Ti",
  "key17": "2Ty8YPuUXDQqAY5KrdYAMB3RhtVMgTS5CQWWW9fdXn1Pg16aqCRRhXpiSuCHdT1QmVv3Zhojgi9UrZfbWNcCacqk",
  "key18": "4bJMUCyyEod6C9f5oPj2bZ6DJtADBe8QrRoHQFD1UW96xkkKWFVSpCipvRur135bZucafjZreY5mbR21dPdMAxLz",
  "key19": "2WUqnk4xAD6b78CotiaNJ2XJ1h6fEgVLFatoG2j7xRRH1SfXAiYvMZGF1D1hYxao9iyCAh34rJqU6hxzs8aMHrJG",
  "key20": "4qiRTPfKBkq6FVCz1LcKhA6g6KLwKpLgw8vkH5DfuVhrwVvX4QyPFYbLM42QQfkcnPT96qxfXU2hEGEjy8krbqpH",
  "key21": "5uaZ1YyYFmuPZEsBsJD4MrW1G3rhjhGCZ9v1akCjARzKzYaPchFiPBXscGD2bz46hRABT9yedzHw7Dea7bZ9xk8U",
  "key22": "5YDV9corFtCjcLpyNHNwrqs5cJ4osWo75Vnn1fazEf1MQWyeopRaiJJtbLp8UCbTBJuBwGkbtmFPnMv1QoHXGmjw",
  "key23": "4NjWL6B3qKEuSQFLCQY8qLYTCnNavxxLGFyPDcdTwm4bTCPG8vXJJ9F7u5aK7DmHiTY4zohbcXhWbuTCnuBvFPBF",
  "key24": "5Za6uGmjpbKndZbmPaoc6qgueZCzrtsbAr1UVtzKvK31vh94ZtxSoZpXBbaS8FNiyDt3zdxGYRQtBSEXMHh3g6eY",
  "key25": "31y6czKV4LvB9Wm6AfkX18UkgX6LtZXgjiP8nDD5fxL5SmMUaVx3SMsMrCtH9rGJQ8brXDdnuMd9xYk4iFkMyNFj",
  "key26": "3CNktPwXT8Abij8uTQjctNDJKbXoQGTknU6YVx3QxyES9uhGLWXfx8b1myCUTYUo86V9vSwH75BKFWAj2aYHpqY1"
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
