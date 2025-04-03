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
    "iAwhoRomjtzHcG6SSk3oscJ3dQC7ZS2RHmaeLDyb2eYRuZda7AFDtT7HZaRKFFNxoxHJkrSVhxrz1eB3K13FrVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "624Db1pPGoYkQpke5fo8VjuNFyf8ZxbKyVX5iJUzWxFjk68cybYcmHGTj1oTJLiJLC5NmNfLXPcZ7VVMeQJXuDn8",
  "key1": "4qnnzfKKLbFkUT2EftZHaf2gdcMtSCSeWrwUCo5NGp3hB1rpxeACHLDLBQAPJMKwzaqEBVZMrRcopKimk3FoW1Gz",
  "key2": "5haVFzWHtJsbniNjMTH1PE19ZWugDQbtUiNxjRBskZrf3XVbpbDLPsr8snKPoVhnwhmEKiqSZm4P25d7UpBu7z1y",
  "key3": "31opNe6siCcVGh8fmQpzRABMCzUkT9vvY67saCPsWTCGKkKaEhnzCBReM8PyrN41Ni5qUWfJLyRAZpjwgemp2PAZ",
  "key4": "an3eHxzSio9bBaELkYzdqUBTGWFHWwj8HBx43MKcEtz7RRfLkAu8FbTVbW7NudfdtETHo1ms34uCUc7nycHSJoE",
  "key5": "33s88Gi3tozCFuC2hoq7MSvr8rcBqB6zchpnqabQFso4LKhTfrz7h6ZKK13p34orzEJy4inatb63kMmBzPvTv8uA",
  "key6": "4pqWJDStf7MJsPq9H4QrgqZWjqqHA5mcLsFwbX1EBJdywo94ABpn5QLJUEuY7rwFBdxDJNNHxVJNsC9zot4byouT",
  "key7": "4RCLWjpuice3Zb2oPWQ66VdJguMwXtP17f1kFuQ5QScVbXpLLB8NYRe9xV2NEXE2hQDsNzkRc9ZHqVYnpRUtA5Z",
  "key8": "2wVS27gtXCdtGboFBJjpRTFDCiyhjJZRHfTEMC63KRmUTJdiM8593wSRhqVsVAeK39GFw5QcnpUTCHmxxnB3LLtW",
  "key9": "5WGYmohrYjFaYhUnJaNBGRKFbpvTRhZjaxjFHVsCGoV3Wm4JoViQ6wfqb7VRsVoUyegMdNmSiUH8hH2mY31kpBwT",
  "key10": "21XUfjs5Mt8xWX4S5F84xakJAN1wMN13KcAXmy7xzPBRQkVLoMEyRXjq5u6C54XX6bH27aLEhGv91p2abqjkTvKT",
  "key11": "5x8CiPagrSoQNioxTLXnFaDcQzweBveY1xR6TwSgsuPVWq3CaiQGGED4H5zXDdqG1qNzGfZ5YVe2XgToMxKijhWs",
  "key12": "542j7jmSAskV8KdZNcbejJKMvXTyBGGy4U8VVTjiqDEDvm46VmygLrmVpudJnGoBX4QW99yaTryEW1RMhLFJDftS",
  "key13": "nta2E5mh5rbudcvJFgP33fKHrXUvbm5davRr3EEYJaBCDtXyXegUDbXe67tkbbYZuBmefesJcEKp4r6EeQzCBFz",
  "key14": "2rr8AGY1LxLMJ14vDyTyYrcdn6BT9Q8DbyojHmK3mRgVGjrYwjxgMQmp2cjeLvqW4mLxFmqfZry5hmBB2hbiucry",
  "key15": "4k97pFz3htzFMMoB4dY6Q11z3H6F4V84TLiXv5JxpaPbsL9LZ1e4yMscAo1NEYs6gyk51U9ZU9s1shfPTcYZcnJT",
  "key16": "5e7G29iDZG1C62pappN6G8e1s7ubmHpwDG2QyoR9e3BYce2N5ZmGkFHspkSooki3WVeBiAndm7Vc8TGLY2af7mQj",
  "key17": "2EtwALp7pj3o81BSsy4YXw6rqDvChycKaUsjKLdnX2H66L5UscJutHXc41B7jcuzuktTC5Lz5zSQhZkUseAz7Rh5",
  "key18": "5oSsM2BSr33aZcezPBwsM6LZ8L15hf5NoDwiUhA7RiTPDq6RUH8pQ3wQnKxgbeEV5o8GSCmg89gEkz3ChQ5mu5Es",
  "key19": "2o4nWDT5s5KuthQoHZBu6zDaqDYZQWCVcgeZF2c7qZXXCxVTKVr4ZDnZpmGFbaHKY53cBzQcCdRxbgrJRFc5LoDU",
  "key20": "ViC94UBXhWYQhfQhnd8sNRzxTu3j6oXFE9yRiRCbEWXN5ZZsJygXEWE4oQfmNYa61zvw7wgLdQGbwUkNTYZTTvJ",
  "key21": "3gNqNww2STcreKgQzyYVL2ajJ1K9MAaHqvkytmBXR3E2T2jbddXyU9mmHY8nqPtEZxeTMVtW4m3C3rtMk8Nu2sFP",
  "key22": "5UQWe11kPhAAc1nyuSQwHZFUnmsajXjxJV5hXTCYMGArzLwPUB3egqXoUvGP7sutSubr66tpoFbAG5R5EmZDygdj",
  "key23": "khW7nqVi8cDnuxvruLH5J4aPUrUm6yyf3AyA7pTNhDszK1mZ6Gdrpdi37WiLDtpU8B7z6Q2P2b6S8kC5LyDE8Ki",
  "key24": "5rcDEgNCa5dZ8Sdwj4cFmTYP9F2kThU4hunLyqJJ7NidsNWLhB87YheYyzobfRpx4ZDUbPC4KW5yzZkFbTzaFUBV",
  "key25": "5ZFs9dj4kKFbczPH4RBYH49K8fUhmD391AkfZXqBC5dBKMSFQ19KhKb2RFBX7dJtXiZG3Hu2vzqJviCnKR6M4cN5",
  "key26": "45ohT6wo17k9PzQSx8mJRksYSNMwimrTNG5cLCNuZEAjEeiqU1u57oMhsDdyUMNucdVN5BMGNgTY1mBmb5MCT1fM",
  "key27": "4Hs5KCMuWuBuKvb51yZ1ENe6D9LYhA5kc9SjZYb6Zto22XfebUaqbQHFQ4wXvnvc6GsxgzGiv5FCDwsT9weddtB5",
  "key28": "3f4qDA8YJMPBsyCg8iT2n2BhSVnDRt5Y7kxLVHEGeyxFAvXJ3KXWnLmes7fkyaAbKc71zCtVwNU96psUDhTnaaBE",
  "key29": "Y8PKMSZUUvbHpgjc7vLzV7PfYpWu349gaqoV2WBWCEodkXme6JW7rST4vkoS9WWFAffQDQAYE33mV7GqMkwqDH3",
  "key30": "65ioXGBoSWrZCD26WkBPyHs3bmmuu6MgwN31L4A5eCoFH6QCCHwTxUE8U9nVjpEFwCCn3tzr7qRxWkGvcuBR8hRv",
  "key31": "64nP8kAEPz8ur1YiURzgrEZ4dHqJDRuqRaARCYsv3fu1bNc1rRgnAhwawjywFxEz52w6Luxov78FVCsWCWAW7hWZ",
  "key32": "3RDuyeLvXZ36vi89VQmjMwTPh3J8e6FVXFuzJQHuN7Sxf3HRk3WSUis9dUkr1tyJ4zt43CXWq2Eu4mAPVKSfDKpZ",
  "key33": "2ZEPPa8ivAT21ZWr8hSGgouJaGQuSDhYbr6jbuoPebCPYArhDEm1uSk42tzzhNNkYVMhgLue7XsV1YBYwwEhyWdZ",
  "key34": "3oeQpVb1SGGKnHHzzDAj3MzcepFJqchZrQnUjujZVjpTj6kvC7vfGS9uVYrizhdcdihotUgfPvxT6QykMfroFJkv",
  "key35": "3UMQAtNkCWTPbwKcTjjgkSXzd62oeRdNtmxC6m66qafw1zSb5Vus8DwPKCQptXqoqd75z3DaryFYU9aXHg36Cu6T",
  "key36": "5qtmPHZgkfz7xGtXnLcwVo5TUyYtemLpQ5PEDCvB5K5TotsiPMsEQnmLSXwLukG4mWvbdmtfhNsy6z1FxfW9Xp3D",
  "key37": "3T5gAFiH3DZaAkiijeYJVqkyVDDPAWLpZXxTFT31Ly75fcYZQzyAA7badWFzuo9dMpN2RB7e7iNURj1hiMfwoWvr",
  "key38": "3AHs7vgv8zLAVinpo97U7tskxxmPBCYKCD6x8tVSsL89bc3xLv7gyuzgkeyLEH5EL3DeGcUvunPiHNbfHs3Ms6GQ",
  "key39": "3iLsDUpeqsXTkgvfmtoR3Pv8BLt36wLErKwcd5gVc2RLs8FPahwRXfH6sqeXyqrsXtMbWSquWabsgatL8TVBu33S",
  "key40": "5qyW4GxnXC3iYJ4kq5DDyBQgY2QHPP8D5Xr9jXDL6GBeayeopcj9ggVyzNN4C4gjuHZCKXQHgEEJgjyWSH6vhrbV"
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
