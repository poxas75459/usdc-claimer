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
    "5BkSCoFh4U5JjPcABzzXZwBb5sGmJtKDSe2Wn3TZkeoAxYxWb7KFGJs5o1qd8zcSupovcLN4deD1URvUjSZxEaS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FSPXjQN14DJU6vgVPHPFw78W3tpE2F5MVpDv7ABPmh3KWDCtLWzjgLfB2b6fS2sYzweTXRqV4ZptDAyfrvvs76Z",
  "key1": "2KNPz8vqmR5e8TeopSSbLtbt9LaZ4ExkS4tWQQToHMwJQbPfLjDftdB1sbZESMXuLaf74nfA5AzqFbZfKozdW9Ny",
  "key2": "4rqyTd1E2Wok4QrZKZJmgdtH4gyRFzs3ebhne4V99poSqxGFxArASWDb2GBynbM5P1pxw1rLMHE4iR6iqPsXoLN3",
  "key3": "3uFcHgZu6YGC42yPpzLMYwM1JgwL7v1UJaxbvtBpH3vvbLP22Adg5K4rVu4W7hkzsVy8FuLweu7mLCUdsZrwUbSQ",
  "key4": "4QGD9i1xSwKHKCoTFiHyVsEx6NSYoo6TzgJe4fLFnuhAT6FduSWpxUtXnrLPHJmQePkjoz7Sa1SWF17M1uigmG1f",
  "key5": "HuGvNj47xVWfqABzYV5CQDRpiEU5KwgkM5B191X4kQPdq9JWUSDNHkEd4oGnm4edNTN6fed1uiY1Drdzj5EBhgN",
  "key6": "fp8xxBCq2nNargCNQNbT3JyqMNf1G1mm6ZBt6aJ4SCo9RTnqqVRhUwkFp7anfgKadThSTWLnizmfzUSdgYYjdKe",
  "key7": "5cY4dvFWFFXA8KQuzXKCjNLuNXpZh8Pd4Qtvh6ePy6LjcnVQFcdVFM26ceRhYLWDC46caK79MfGVo7GJhYwN72CV",
  "key8": "xEhXRMCMm7PmeiDYKzkjB3o1AEJpRn9ydYJm48Pc9KHCSjAfCneduG3o42Bjd8w8remMkxFtQZ5JaupNYYaTugJ",
  "key9": "FiNcRMzcUkQ8GXQrTxG5mv6oXCEZtgNbr3vuY7MgGJw3iDnCt9k8JqH8s83hhJyD5xnSgJ1BwWZkxoyd3MFJYPR",
  "key10": "hnc4QBBXeMBCyaQQMkeGBhNugbKDZbF8u9BgpDADSnkvKYWFtxrq9qWRyeKWgHo2vftVBDcvTjLBwHznsxX2ZWJ",
  "key11": "38VyJWyn96sTELjREWC3e118DTQyapXbY3AtPWjwseeAKDh7BadwLHMTjuKedqK9WePDXKXUrbFtmnLnmn6GnNWA",
  "key12": "2FXy4zpaEjDftfiuLW7m41jnLqsu4Vu9L9ngDRNn68FhC2mu5GSWPZdTu5m8UN6SkhD6DKQUFBKwJERiRTbgkap",
  "key13": "2WJC2nUxsxvVB7b9e1DpGQrErNBH1LSCzagDPYHeVu5GUQqSXPsqXrr53wFurHp7u2i3giDZLq3SRooPEnPyNsF4",
  "key14": "5br4peT6cVN29i8JnoJUcbbakyV16BGAp87c57SgG1Aa3Kmf11QZGCf36bSAKaFjiQ56Bp6JoCXZU3tk2os1CUJv",
  "key15": "2wNBjPjZtD4Qwwimihhvxh17ErmvnwGoRnA55W6Veys3dAmG7uEQjcSwvS2KtjSZFZ5C8LumamU81oqJxxkm4gvE",
  "key16": "59kpy6hjUjvtUaFTCTegM3YKaPMHMn9GDvJgjJNNrv2JLjteRH4HP9gcRiB92BPUWPbbes3XSeLvFb2RQZAqKRQM",
  "key17": "496cZskk1sLXyQ9J1SAmAaTwTPc2mamQnKBe8ywBmm3k4eieBcpwUmtBtjSJEFE8GfeQiLYDsx4pZkHadFoYnHAC",
  "key18": "352p6Sgr4zh4QFhuv61zQ8HA6LerwzbEMPN7218WNohU4QSfvuN1Bj3gdnxmfjS5cKzetCZ8UbR5FVr8A4LdNrZs",
  "key19": "2bc7NkBeRutGzkukuQvYah41io5TnAh3Tvuu2VjhnrnsLfYqhYoL4kPDd7uPyV9yu5V2esLxCcFXhbLaBiUtUdu1",
  "key20": "3y1EES7PWYawGbMA8Fousmr4tTgzSFXXCbept9X5xrTWuAU39RqswXY7CKg4SWCcUtDnBmresUBgCLYrmZsXQerN",
  "key21": "2UQBbcn4bnCHatGpfLjwufFrq2A2vvw4de6ZuLzXHntT6Fvz5JnDs3s5eczQ7iw7uEYtSVL7APWGKHNo26wxRjS2",
  "key22": "yvMRFEvaTvXGLR72P8agvYPe2fEgeUWxYtjDL4G6n1wgmzwXAvjE9p5SuJxvd5SvKENut3ba2zX1yjrwqFP64pg",
  "key23": "2FohYAWq5tvRsarnK9wLm5Kx2pJoDsACHGT6opXPqtCn69dcVbN8bsgnuUvc3S5M4uM8LEgQj9qwbfKgy4WP6idm",
  "key24": "67WVxeXgFyg2iQjTvFhcZQpFXhrBT8R1i1CVpvsAdQzZB9gF2SwVa71moYkvmd8ahpekKszX7a3vnBdadoDpdPZZ",
  "key25": "JE6qF8LDXzzWQJsFYpAK6iHiZ6Pnji56FJ7TPXQ3shYH5UExfEYQKs9DcctppBngeNYM3X5MXucbTatNndkU4LD",
  "key26": "43HECRAdnKTiyGjY6GbMXJp2yoY9UUeLV6ihMn8cSUzXXbYPjk6vtPDWHqRprx5NtLvpU9PeELzPMX6a35Pb7jLm",
  "key27": "241RJJSsZ58956S8cor3keqNyGuqkSx98xdY1owQmq2umC92jbgyHdvfGYynQRgix6HA7yVQxN6yugoZi4vtaX6v",
  "key28": "5XzS5SBMnUA6pP1irXpmCs6MQADTjv1Z7hVGG3DFndVZkbBGu61sfFPWmtzdkwsw9w4TbgNhGH8jGbnDYo4ELBj2",
  "key29": "45qbgS6ySwNMcXZt6WEUtiXdDk9VkGMnfa7eX2RCXooETttLjFXHj4rfwsX7SfWBB5rvXgYZhx3Mi1kFEp52pUck",
  "key30": "5FmLxGx37tDh2yGDvpXkhRjzBeHa8BxsRE1ddaecZ6pX3eog17bxLwhoz9igwnhfvb76GnBdDgTsQXe1FvaRtuK4",
  "key31": "5JbQxJ9LcDFaAnDDRnHEGGwfqqWkpPzstzjtUVwhTN1AANdubShgt77cgL4yEEyznGCivdeu7MDrZbrGfooT8YZK",
  "key32": "3xKYcEHuz8v6ntXUgR67SAVWkwvzgESojH7Bwr3YjQhMBzZpSQKY63wXg8xuzD3WCcGTBG6bc3jWT5pwXy64eMKs"
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
