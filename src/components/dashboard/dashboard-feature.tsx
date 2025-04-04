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
    "Ju3EQTenEc3aGG9NENUZKDCTifDDq5tqBiN4sFQFdzocn6wjdTbpAsWzjnkjq4B9Cq6KBQGeTz5t8p8xq8kCS5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Gf6CknLrxt9hy45Ya7LFkro7V2ykzuzof8FJRFahwid48trZuawrkjqK7pcqZ5MkD39D1waWXDkHNbh1YXAnz5",
  "key1": "3wNUi2FQr8z5EUhmG2GoR7kVxAS3pZwn6hMSdWv1ecRwUfr5kKc7aovupkgmt7uqxEiyDkDiCxeBEo32Z9U4Nnnf",
  "key2": "45iH2MzdZBL6rWvrCW87JbwsjvDTKiLaBxKmGaEXS7CbCaKRqMUPRnMrqNdkLP5r3sghAqy7YXXLyvZHDhPCimAK",
  "key3": "5Tttug4jy2Qv2CPy7YAz9brVHrMyBeYzcaZTi8Wfqb25pGMeWJRwdpTGtck2tjV1zVncanUVYW4urz6ZoV1SKiYQ",
  "key4": "5VaJswLkB5RCv5MHv2CWzRkDTSyxjBusCW7EfP3L85VY2zLNUAGAcBJ2UfqYmqdp5KkHSQbD8gyPv62PtZxZWygt",
  "key5": "2p6hNQmzY3B77TyAF1mfvsAj5vtZZTmaPCVGFHVDLUnv3Ydoj9Y4KZFVSKYVUXvuHnQ2Qd6B98zJFZ7rMpoj1hEN",
  "key6": "2SsY183Us1Mk5geJPUPGkReGBBGg9Qms3QDq18pfbbwVEvoWxigXhxCdAZrmNUxDENzrZ6nmdwAGHdMumC5rFkF9",
  "key7": "5swXUU8Jk7LKSYGbNg3mN7MCYpzLD8HYHsc1vTME9nQZ6U6XLi2C48vsozjoNcjo7TQcHJgoeC8DRX8KjKBAE8Li",
  "key8": "36JqBcBZ7fy4F28RwpM79Ef87nDQZDgLq42XzHXfQ5PKxdae2md86WrjK7boN2ZiD32SiKcSMiVcQFkhTuqbERqs",
  "key9": "5TbiCeP4YQnZBdMQZCwjSG2HiH6R5FWqF8gM3wSEragwv5RUW1yTEefWo1TMA2J3Fo4sq6sBUWZrUgQTbUeZftFk",
  "key10": "9z1fFpj9dkEhrc9nmtvYp9vYWjkWaiHB91SvhvjRtGik7tXc6r4rEDAWqf7ScpAG5fQkutupk6mCsDGhWwBq2Rh",
  "key11": "tBNAGWL8mdMtQqmqJ78bKrdsqPbt5xrAWr8bhP8Ln2mQQ1FQccCZ8Rx62QCEmiQM33N6VQp41rreVZUkeSsKuSs",
  "key12": "5oXyvmP1vWnge6VbyPQbmUVcY7PV3GxeNGDPn1yzxGReW2igxWSa8v3zi31nHRp1wbxYkdJfGGj8KRSmZ588VtUg",
  "key13": "3A6kgE3ToutSZDqo9hy2ZTM7DzchnLfa1RYuTFycw9yjFSb7Q2P4z1vrnLSJKrBnTXN5GZ6w6Gn1psAp7PwGbwQe",
  "key14": "2ZmPC5eBK5eWGXGaGJYyMm6cBjUk283Zh7hhwLyiyrAPyTZi8NhtREXqdRQ7PuW2eUShjG9XykkmKAMu5tsnxjvh",
  "key15": "NvxbJqrgLTGgpY7jz3koh9jzyASAjEXMx22zNXDCfcFojbYbvBF8PPM2h8MN7Egwj5e3yQxeKVSprKoSPrtyzZe",
  "key16": "4e28CGsQJgNk1unSQxagxKzJ2LHpvpiA3fjJyxvJkRHL9WksrGY2sPxC7Ui3sd54CdgvygJTNjyy3P5uHFzi1cTo",
  "key17": "2nrKWrg3ej1M1FwBBdLxTZ4W2g97T4NTRCAgzPmVghewggv9KD2AVYiDdV5vLBE382zr9UgM1ZRD7tQCJwnheRoF",
  "key18": "4vcGH2oz8Q77Veu3NsFdVjJEV1iPZrD45r74AWZoEZtLmcTAGeQmiAXPo6XRoudkJYdkHyrxWKJTvMV3HM9AwKoF",
  "key19": "3CUdACe8AUjXSEv3Rve6UnScYiVr1eLoXszPKu6bK4ExnXT5Rhm5puzzrcr9LeGzjNeWPtE4U4AXQNb3DRLEuCyM",
  "key20": "eyT64zzwxfJCtvpbW3E2uN8E8tmWkwf48yztTdf2aouHfwzQjDhEbR6yCjcJDCdfa5w5sgFqeWD68kJodWJmNzy",
  "key21": "2Fcyb1wRf2Fs6uSMbkPMrXwHGGgHJPAa7hfZn4Nk9u2P3Y2DE3JjMEbJCBQsnVv8pD6uYe65YyAouZChoMiZb1tK",
  "key22": "8tswvEsuTYydaLURA9eWro2SuQe2vQibSGKV2mtNR4duHXMpreX7JY7WryGRimedaX8yT68ZXd9MiA2xKrstqB3",
  "key23": "2PcnPvg8wddtFrcsWRKz9m1zjsimY4PuC1vgZbw9Spdw8Lx1iC7ZP518g4qdAynSnAPNbZVa3YRZcTPXM4YkDjrr",
  "key24": "39HVWWPHAKhAw3rS9vShmzDK3ZAFVxN7nNfYgRXFd1g6FFC2nHYtQfwRcge84coRWVWgwhtdv2o4kNL5UBvXGtRh",
  "key25": "SqxbEUKhFH8dRD5fBFxRinDvxc74iHZ4arGBqYn1tUb3yprjdPzWWjtWSJzruQrhP1ABhW22Dw2MLRd5NFo9KZx",
  "key26": "4txByp3mPe7efNcuEGYePH1RMXrX9vZZPrjLTtmykDCFkUbfhsnNTZeTq3uqoN52Grh5gSeELKDGG9PDrbtEfUpf",
  "key27": "qZR4EgfEMVqmDsM7paov4VYAQUAfeWMGX9GP9iaJq8nYyurgA2FGBqCSmq1VpnUkExbu8GUZhNQwn5az2D8ZmfH",
  "key28": "229XXwytgfD2NsNBkeTo5eLANW4fVy4jmm83fKWzS6BW5TCVh8JqnFPT1hjrS2XXjpHwN5Ki5BEA61189DbVvBZk",
  "key29": "4sWhQVoQU3p7xFKahRVPYCkqjEL9cCFsq2yaaZNDKWy8Cu2HBPNZLM9mdoKyfgsNNsXWRPhRFt364M3pUKZpQoi1",
  "key30": "3ioVzjMm3ZSsfC38qua8iqwhb3yA65vBfip4rKy8y73eWNTpzSGJqNGGxPoDDex2QKYCxXm8KArSPwv3LpMUywqY",
  "key31": "3TzDimxP2kB2ngvQRK19vBhaRsMnExSS8yagcogjfCruf9SWYUyrfRqVUct3KcMiTT4sZPQtM56D4HN8YYC7S3cv",
  "key32": "39TAhCohy9Uyy1fYemLohZXd1BFxYJfShx4yRSsXgEWPSw8j3ytGoQeiEekPxcZk2QPoULWfbw2FhqfdTn8iRuxk",
  "key33": "4e9eRTjPMJ9uUSB5ve772HsUmzWee3N5XPnSMoMX7j5LCfjxoXN5uEQrfn3qwUqKtWHhTuNEEzt7uCw15cJdWim",
  "key34": "4N3Rfhi5UbzwyDNzF6xtfZEc6fcZnteya8KW4KnU947wTKjTuLH4ctJoFq1eyCoWXDbzA4CfFzE6SE67J6LAbzfB",
  "key35": "3rRJqzaHVTzdWmqoWFyRAQHQZ6qMH1JfsC1FfYHBenMTb3tV9LMbuxHtJViiEaQqEhXZRQFYe1DdgFHkfNuwGrS5",
  "key36": "3LvQsEbgia8cGfxeGGLH2wgC66hsSQZWBp8Fpt3yJ1BMN4nQ2ZfZB6bGE5LxGRwA68AJQ2ePLbnnWnrL7gu8Ri3T",
  "key37": "4S6ZQiu5xG2Ecjx4ihdHBvr6mPJRgTKEpU2Dmt2wZwBrK2yoTF1uh5QQheZFjfcwwxsC6tnD2b7XVEaFtZd2TjTC",
  "key38": "56QL2z1wXrpMnWfeESY455x5rGgihMafpfcyDtVAQo8tpYwsN61f9uguyXyf63GnsqE1Pjxisq1vXoCWmbuMefNU",
  "key39": "3SiSCcYJYTtiHmDnCU777LFnyc4PVYjtvoRVPQwZjTgbGsntVV28QCcx2fXmguZk53UhQH5XtKmc7utUQExAuex1",
  "key40": "272j3meJ47Yi6NSkrP2MufHoLpz9i8E1x7cMET4rZNhevbLvVo9eYeXWGxed9B3tWwiuUKeaR1LLCcowkbx3hYam",
  "key41": "32zEwPqK1gXxQrES9FnipcFKpD7gXQ18cLaYg8zRYkye3QvdrEz2pPiR6tSvz3WdURqq4j8sxqbCWhFiKP2Ji1H8",
  "key42": "5miKKNpYhytvMLonRH99vtznfvMFuJ2FyZXTKdw7hVTvgyxhhhAgDX1b99ZWy9SyDnCdbJwGjzyBrA93YS4DJMxp"
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
