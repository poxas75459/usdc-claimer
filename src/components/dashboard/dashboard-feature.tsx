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
    "4qo53zqQvftNUP2CkvjCW1DUcTEc41iZVyHAMFjaDbxZhyfYXR3UzFNUCMfvYKXvTrUxjZKNc1qFv8i9ZambwAG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AdPNhaMDpydjWVwoSu9pHHCQrghx57XufdsjPRsfHHR1dhZgojf9BTd7GXuVRZ8qMmC5kQFeCDsq8D4FTUsLLn8",
  "key1": "2Rd1g4zZQqzS9xzDTwwiE1ki87aF6j98QtuSzYbW2EcxXgr6zFKDiznVhy4KE83sESto7rXF4ntumdEyt4qMuxCh",
  "key2": "4LThHpASH9jBko9fTGV2dwsbCkU8krEgkQiyjCasCWoKSrRAixnk7cVR65sdFtHw3YnRC1YgGf1YAzkfCjZoGgGH",
  "key3": "5yfZizDDbtRbQrmxn5MESwA5mGTiQGMPd7XnLqjLsUidTuzTKJYNNK4x8fpH8mJpd5ZJ9VefbN4sAZAUoDh9mWXA",
  "key4": "5GMtwtcWd5qhyNJ9cP57LPmojN68XXhh8JyuWXP5KwCX3nxXpsZ7yZPXX4dLonXJFyH1fbTnqQaJNtb47cDU8KWG",
  "key5": "5EUr7eQhmJbr94ybBND4j7xbxA6XT3azgJDTL3PiWvK9kSkhDuD6p4D5vuL5mEyt2F8FvEs4dq8bFL3TF7vSXHRF",
  "key6": "5Hhh2UD31TiThd2ZCmBipgnAogSMVFe3VjCFzoNUAXn8EGNARyoYngQSkxtMvq3Moxv32ZYD9cszPQMLyXQwyzZR",
  "key7": "BiyupVpDX1msEk2MMmzJWvvQgaPDm9HLppN8MNZPTzKburs6Ne7DfN39TZSbWrPM2zW8QiUU4eXrG3BCX5PiCuG",
  "key8": "2kDNFYcxCwgyCEdMVATGwEiTdy3GRPiocZ5HkWRDhZn2nxJntB7jwHBTbn7gA2GfRs3AEoVrR1iT3Ymn6zGVYUa5",
  "key9": "4S5TiQgjLhiqK4HfFevMbz5QfenMAAoNS7HR5X9byj3XtNcfZfYXKaAXsCttHB9wDxNo9qMnzWvD6H12x8yw1fpS",
  "key10": "frjHKvoku55ehPjftbFuweeTJ6JHiuPn9wiTnGjyTiDkz8WPr2aGut2iBDFxKkeD9sShcxeANdaTFN3YW49rMkF",
  "key11": "3AoyfL681wi1rwZJ2ecaS6pu6UZuzuMaZfUUifD33jGPUoH4qckA6bQYigcbp85UDPimTpkjyqzxmJKgnoEQUp5R",
  "key12": "2BbkvyBUWLcYrbGLX6crbKLa9C6K2rwcNm71ewbXmpUUn9VUMXMb71Wm9VN7ao2M4rGsYoZ3YW64zG4CCeFcR2gQ",
  "key13": "2nm6uAvbJW1kAiHu6av4e8CZYUfcmxSp3RFsAiFoUwrGKusWNDA86czhTXQpecgpkEGBh3jPzSESdrTJRAN7TaJE",
  "key14": "2T3GcYP7qjuZRRpsSJa86JXXcWEDDS24YhEUguq43jtykmNSXfK57iu1hN1nZR7qh1sZz3Bqr88kWGaWksmac8uD",
  "key15": "2DmwaeawpwVGE47PNA2W2Ts8VfuK4wfanCYPpZqaSthCrFR8DmNgeVjrumCCHMe8BheXfxD5VXrSgi6EDgN7sXCK",
  "key16": "4qfwzu5aGEdF2fGHKf7TYUby6boACh94UgtWwKHGPB4ygB164HwyYwQiFNTjLATdTgMkQaNpQrUFXLwCQNvSsqFU",
  "key17": "3ssktU89oDj3KsdmdxEJsd5eJ2TCbczCTpD4m9bPFq8JtTf3txxEzDQC1i7gwWeyhhiGqwPTjiV3M5UruvwAfDj5",
  "key18": "3hyhs58K2zyAEdMVdyi29v6XRenQcSUsFZxo5hdrBgrPboxMKAu3zaEu4Jv9tGsc46V33T6eNA6XJVijSEPTQmYX",
  "key19": "VWRyMqRTghQK3GGEnwXMoBtALmfHdKBBfA7PZ4y3rxY7wm5RLRGEvZjxk7AKzppvKZXd7x5WGQRg4xnCoQ9QACN",
  "key20": "5GMjNCWJArCWX7pBmhjtA6ffgts89WBx5pPbwswpaJkt1nW2c955menrTahAAL7ihXjsWkdr1ZAqw62vwPFamJHc",
  "key21": "3D3edKruU457BnhgiePvFbUJHpxdFV5ZPwQq4eGt9mVWhuujAMaHMNPdnSUNJFQNvaYiT51gfsR7WYqxXgwEdd59",
  "key22": "4MpUZr1DBmJCmk9secNaZrtZEEc6wQK3auR2NoZJsPqe34JYXbQ78RJtEMGtw1XP6gfa7TryACHsjxSn86SAQnP",
  "key23": "AVKH3tddTrsFZDrbmV8ec5TTuufMrWtAGdrp2bZMDWFdaftSzgkmv6Em4i7omLF9cL5zP3z4x1fCHzF7RLULTLn",
  "key24": "vZKU8ySTnHX2Gcohu4286tVhRuyah2oazy88eFNmgFAYxgLgyDzgAD7NaboQ7sxUcpZx4x5bDtLDsFQDrEbULyc",
  "key25": "2HHq4f3beM9AeereiRcAFN4JjxFkRTLqToffNB4zdjk2oYULWHpry1jBZcAZd5qWg9RnJFe7CbuUKtmBe6Zk3yft",
  "key26": "5mQor7rT8dwiSQXw8kgNu1vRFv6wW4FUvBhS2Ks3U5F7DNcji71ghxTeuLetprkivEqMC4mFrpRQvQ5eWBA6Li4n",
  "key27": "5fe77RSHwK2Rt9oaiTPr5ZpfnmE8SfRZKp6HHXMD6qnPGf2QWcUfskKD2FRXQtYprkkvnT8VzmUB7gx62Xhm6AM3",
  "key28": "3dKKvsmdYJ1tdyUoJPhGxZpVzNsfXCjaewjw14gP36ZkT5kU7FVXaNjcszc6jsTifGWeKaf4XnH74wPo1iXcuSWC",
  "key29": "4ai9VLTMqEy3bYqAKX9zZ9EkfwvrReDMNsFaD5bJXtLRY5J6VfHsLMqXsV6HSBWbG2xoXwWvrYg2hJQszHbx5tLP",
  "key30": "37B8eZgPVYtKeYv1M2z1xJ8rv4AUBVvL9Xrrgg5x5ouYSUfePawCVCgPxkU2xfTzA438x6d5azGDYntJWgdJWauU",
  "key31": "4T3AfCtqSXWHUGHCw26xHsrVaYeQgNhSJjdWhH39WsRpyjyNRgM4rGGSeNS4sVH3FvpdLVePJJJ28bti3E4jUfNd",
  "key32": "5FErmXvqAzdD9mTnvGhw5ijPn8aQPwt3wyPeg968u3NejRT3jGtcFKEdHud9m5qKP6Uonttjfrax14P5u9bRQ2he",
  "key33": "3DuBNZqWfeagTu3TQN23tjzhWx7mb3nqTiDPsg9kqUvrxx3m3sVtVjX2MvCs2nYXjLrmcZLaizvUFtnrg6z1T5kN",
  "key34": "3LSakybvKp4fx53dp3JqMyJYQF3ZjoENGJNt9aRZN5z7qjkNKDQRAPYafaU7rnkcK5uttKwHer6bSSwnMfDc4r9X",
  "key35": "2zLUgsua3A1XHs66jkaV8z9e8PdqJJkofH39Xjb2MixhEbWPWrgzGwgyUVVheTR9WVsxWDvatGcx8AYMozUXoD9Q"
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
