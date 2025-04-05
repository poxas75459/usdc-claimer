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
    "3bD55gJZY2zozATnCqRZ9RBzU4D5DoxEVDqWqWQTifKU8zViihvPPaKjM8hYFmJWaKyPime3Mn322rwBzXSktczR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhoXsCvm6r3Xtt79Bw1ADrihmt7yqgV7XLmoZYEMKqS923mF4Hwkb3cJATYfY2LLnugJ9kZwFGULfencgssNF9o",
  "key1": "4bvzvHoVYtyqXyK77i5FsGo8Ykajnh5Qd7kc9e4MWzMoNPEWxEjwpFvUJKWisE1ESxTN7PJLTAYqUBdNb6GVsqZh",
  "key2": "4Hqg5kC9QTWXyEanKr4x9MJkEYfVgyvoxUHUJKYFSz9yYq6tJ4crfQQcFmchSnbxdYtqmNeTvpJFy1BwWGsVqKrJ",
  "key3": "3EFWYQJALXWsq8nz51f4P3wNkvKP2cyuQP2u9XQvbTpU5Fw9pSYfqYWGozozWzRmeHJZw8nXKA2sbDme4zHqu3dD",
  "key4": "d2KMrqZSUTbJ38fmUaMBdAccJXsurWnjyZoqLwPRrp818jDYLwLfoTEjh2U7BsXxU9tsiJL8gFSfj6iU9uddpjS",
  "key5": "3TM9i6MPfyJsVW1wTGPFQfcmpsEbi9cWdbNKLLrU178PmTpjHEiTmkdzQLfasuRbFm5t1i6oqQRAEVyLf5KPtg9X",
  "key6": "2AitqpWujJU59hup5WgSvhBHhdjx3bDjr13sXZxTRWeQWPtevg9v2gkiVTJv2W9gXhtYSkTYAuZ5yzXhaTQN6XAZ",
  "key7": "67J3pdSqhe9CWEfhykvjtTZEFr1vVgdTb4WTgfe1NLuEySNdtF5vAM4uaLwRq2bjEWVQGCK3RhH6bsD446zFwqMK",
  "key8": "5HFEtUrESyaHWarChHaKjddT29Ju5P7rdDUXitSL89qwrYVxw8FEguG8BnX9dGeX3q7sFfKafMVJNfdYBMGrwoqa",
  "key9": "4njJrupS8QaBGyRsbBAr18DyYnxYRd9VqcLWf56nDqBmeFCS1hweJ9rmudfLGja4gefD3HGPm4E97bW1tRZZN3R3",
  "key10": "5VGYhySzKLA87CtvbaDHNEkmZso7oq7HDZiSxa4NPG45kVQSvQSgT8DmppdtV8rjgpvTWtVXFFCiyrXRMvoh8a9j",
  "key11": "5dqup8HoaHKX7vN3zyws7h2TwPUD7pEg4ku9n9h4cgCPqWVTJkfqTMey7bNNwiEnoADifvdT4qv2oWhLxpmZRVVJ",
  "key12": "3MU8inCMEzu3okvpCtWR1oGt5HFPiiF7SkCwt169a4UXVHa6udDTzDWKbNJQooRcBrAD51FwtgH4nBonCGEJaufQ",
  "key13": "3xjRLKrtXdmben1D9zpLpydtHwboMmsr7wbJZs8f5c6BEeRFsgG2bpshhHyxk1zdqKrygv4PVcVuQ8pnEPdoF4oA",
  "key14": "32zos1wtsqjiHuGnQaRZ3bfcDhirW5AtZmafgaVHH4ggRvCcxwjnkM2sytcdZa7oNEgYS6FPPUWWitsW2veF6ary",
  "key15": "4UYrYaoSW39Si8HFBb9CxzVTicZXQV6qeXSgvuJGDCBpQSnvDJoUM73ijnBtHWDjkVGHyo4oA3mtUB3ncTjgaGgs",
  "key16": "4ueMHNUUg5uBUZ5P2yEpc1swHDpgNGHkg3WYmkkmftDB5kEorkwKu2CTcZiKi3CHGsEQAukhMC69PWNHr2Hc5TSm",
  "key17": "4znt4v13idz5up4WZATjZXYGN1WNDHU7J9AoPRheii3eSsZcxBMDoCYBK6UZgCQ1Wj4PEQQFuAbhJ6aBb3MVpuCb",
  "key18": "32k6sRw6dFnk6zcaK95R3gUd9gftuNbeCyLnLshW15t9ZTMWKdxpgyun7f4XJgPsK4qrNwKxM3hgQxHtgc3R856k",
  "key19": "2yWUYqSnLor4vfaRYd22NQJBHd793FsSsxNYaYAUCPRqehEAs62FdKu4HaTgvdvt6HqmMwKXmwg9HcN7u6MAdRjY",
  "key20": "sJ4k2MT5XBSrrmcWkVbRhnRD18EdCtQn6JuLG1JkpQmhpNiTD4Z1pA9xwtN8Ywq9eGNj82Qv8i28Zoqz16xtowV",
  "key21": "3RPADPRrLXborm2rvhpCzSgjQ4Yd15DVNSy3pUw1yVFzXHGFGsPCHSueMYENxkvPqr9jTVyuw26kYMWGRbiyXiHy",
  "key22": "3FdmJywfN8UBhn4XTeRw7Wq3M3HRzfi6maNKDqndDPHqQDuf1jTjLNLaqF3t4FvmwkwYEn99qUrFUu6UfnLVEsFG",
  "key23": "61Ku1dw9wxsoSmfSiCfutdhdyk86QX8DuLsKmKwDuTBrDy6yaxWKz9Yd8kcDvU3uWAAfg2Zm7wvmSssipRRbCqc3",
  "key24": "4aJgzcstkxhfFjPYQpF8AUPutGLHQsKHubsuiDJR7Ja3rsRXk6MyoC8nmqq6pxfVoULae8f711vGJi1V4nu1hHyQ",
  "key25": "3911Xf5ekp22TReLspz1kvKirdgeVFQbZe38w4RSHKjSLnCgpANVBmaXFZtrZ8D8SU64DqkMWfxrTvydUEotSV81",
  "key26": "4LGj8bUJ2snK9LG6LAZzgR5fRSmr7q647MkHGZh3BmoXQh6H4noY491AYuBtsYq55v1AhrwxQKLGnAXeKJnRJ9Ys",
  "key27": "51cv9Dx6L5DBkXdZemgiutTXUtLVmuuVD2s4fgux1xgo1x3JmAFtVkFF6yAKFMQQXfNQinFT7uzzp3DKPNEcwwvm",
  "key28": "2Hp5TQEK3tbW2ZZat5E3RPuqQ3teUE28SDNCFAyPcfaQNDKuhYWhVH5cVot3ojZuPacswu9oAk2xun7A4bQAFetc",
  "key29": "ot6g9Znu9npDoPQZDVy96bdziy8yHFfuBg7xWkeWNd5iqA1Ry33nYsgFESG4ismMQ2inVD9M6BPT9F7hJQekEfu",
  "key30": "4P1FZv8waSWYTxt9GAQJxjRVbymrygXNdsmbe6P41pSNnAzmi9KZLSaLPwfuidEWbMk5bGL5af8VdEegv6DhwPtm",
  "key31": "54KQ2K6cxsNsrZnpnfiMGbQc27pUC2vAGNr1BVypfpMiTshSqarD8P9K2gJVCgfqHnPFCsV5ku1gte3jVzDUCxVR",
  "key32": "2FWTE5ZomvK98kebM9j96gqHdfeonYXdjs84DY5C4Ck8uxnm6eKpfke3Wp2wyx4HZJ4VDjXWxswFKay2TJTnz9ZJ"
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
