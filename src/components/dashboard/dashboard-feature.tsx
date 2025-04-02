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
    "3mY75uH9vsDFvww16PX6gDTYWaMEJiS127gmiv2fj2LYKU1sBpA55umJ1aaFYXMA6RHJDYmifz84PY2rWbTDwZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t83Ty9XjVMYgnEsWG2cYhsZtKaqLoptQhvaJwoaRm6Q64L9XvNkCQr6DpZSiTkfNdiKeYxQhNx8jeF7i6U6UizE",
  "key1": "5m6n7MDFbiCgf1LQ68TKtSfxFVAZceAkbmsDrgXCVYRA85GAohRfgCHAgS1qYxgdbQJdVnGZUmiKZ6aPGFmyQqhd",
  "key2": "QMfoRRbkySs8sJGvtv9PMk6N7umLqiTmRev65CqPiSJ3cbpBoEC6rehUmtcb6dc6sich6DrAbuF3J3HfBW1jBFq",
  "key3": "4wMgEbGSuiogBR6AA8hJc8fnrpcZc9kxxqX3KM9L3cmeApjjgz2dsUMRznozqrbfK1T9KQAfHFXwEhoJWrv1GFt8",
  "key4": "5och6YDs14ne58rAHYirvWoAQdMGFk7A7TTL4BQEffv6jUjcU1ZneySFki6cgoigRU9eLpdENny2JGKXySdqggM5",
  "key5": "5QqxzWpnTvDs23MqpiorVCxU73WArv7zbf8v8fL6SGduGgWrndFgwkRxFeukeQsb1TTsUH7H4mP1dZuQXEsxRVop",
  "key6": "5cxqniGLgUZRm9P9JgkWaz5ihXFJSbdZAMwm2SDZnJvawxNg2kvd8FjUMQqgwKy46qRMxFCucrAESSR91XjGq9iv",
  "key7": "5ctATLdBJNpa6Sf7Av9xbJJsXKakmbFxbbYuahhLYY3sZkwH1kAMJQyui1MBKxQVetHxC42NG9quhuKuWa9QXVig",
  "key8": "1mPmKUjE835jq6xzqYuNYCwHf8fDPGtckRfjCebbSfYq6hBJ3GoN9azChE6A5NuynH5aMo7HjAaUHF7Qv71aeDS",
  "key9": "285cmW4cyqUG7P7VXJfymtV92cPctXyMdafALwRgFLeKxZZHXPzpmvitWCtuUGM1PcPmaK3X6UnytZpmZ9LVjXoX",
  "key10": "5YdRWtD2RYYuS1iyFV9hButNFjsAXmThUTBPej3PTSBg55CNqDxv3Qa6zYm4UfqMRkpQmyj6zzUuJ2sgQdcojjD4",
  "key11": "4p62Sbfm2N5ufLvj3R5BW8zE92cQi1BwPGwSHkf95aq8LYZWthHKuLv156RYaYo7XQmD6nYBWuXUB5xc7FreAp8b",
  "key12": "47MgU53m3VD36S4CVYjY5bKVQZuoZEN9JoSPDwSdH2CcoYptLkVsxYP8BZqu2uNnjtXeE5YzfRvcokHUP5UR5mhf",
  "key13": "zn4AxyLLMQsDENVm4ncvKtpyBgvyAstMviSbUqEuSJXJMhtqEHMQkxSzw5dd858SSzbty7aYqzRYzhEyXT4U8Jh",
  "key14": "5BPNpjSCZ72oeFMmM891EDHojW7eHKNo6mmtNVhwg7V378sWdtppVCkoZwc6mSc9JFzkYWgAv2bwYcsGfq7WNvLE",
  "key15": "4y7AGAcdps7hxEL38X5LhdkKYRAS6qaLVSaetDWxZaDJ2cHo7Js1oHMWYtCXbaFmhBsWLK2WPgcmWDywevWP6yoY",
  "key16": "4mnRzNbE9Q9vqvVYwWmPZ5LZSqi9vQQEPeYR9NfDTFLBuuwCnHLG65P197eXksQpZs4ZrxDQadqSzUPn6qjAiMtC",
  "key17": "5JuMAuJZaG6JTjtp4n7i4g96MuXkUHiKFzsnRUbuvZ6mAQZvR1wHeWKy4VnaVy3NPBPZdFCBiL7o35ALnqhjw9dg",
  "key18": "2D5aFWt5HPEt4S821eArL8Rh4iVnsxCsMcKwcKiPcuxirYH8fV9vMgutjZuvo8k4To2URe55PJbK1puJeUSFA8i9",
  "key19": "5E8HRgZg4yvTKgFfvempEvh7NoXZfmWS5xSctoP1URGbn7SuUyaxheMRLrPQmLgBMsLg3KfrXunG9WTpgGK2SgyJ",
  "key20": "GFmBcRtnmQNYWQxj4wieY4atT2mH3w4wxjtKdxNhyte2UZj2vB1wYc4r6o6Uk33hXPfsaSiMQskyu9XEdvakBbK",
  "key21": "2xnmtkoboELNNdxJ3DqW8Ai8gurWFsHWv6mrX8qigeMteZEMNJjU7VS1JxFBPF1LaEgBDmFzxnKLj1WPcVXLp41v",
  "key22": "2DSDUVaZCtJ4rCWqELqfyhoaxcs32QCvssBbbAFr1UaNgERmaJ9f5Cfx6HPcUzKEt4eYTjuoUMW6CcdUQcRtLcoT",
  "key23": "2i9cSwV3TNKL6A6uMDAvW9fp5ZAcNfhiYR2fwHhMSJxjSZWabjag7BBW33EwsbnCeJF1svMLa3cBn7MjbtAjBgX5",
  "key24": "5N7iTwLXFWrrUFcKnD6aKsPMCADKcJkTnfB83oyorwYZpo3aJ1korPdj84pm7huChvCwsZumkL6wGfwjo6usuLnj",
  "key25": "uPYaMQciViMSTugB8YrXkj55vbDcmaVriUYz9aHjf2m2R4hU26jpEz5eLcftQybzyj4JrL6JHaNnrZbngNCffed",
  "key26": "2vFnzQE2jZ574qmM6hcmyW8MUy2CKBXtDu5LXrSAnL7nasTLsBd8wtWXQGanp6dKb76rwjKwXzUPFqj3jF6y3suA",
  "key27": "BDjkd9AkqHkv3kz4Ay7HnhaQi6Vx4Up3QLDaK99dDVR2TsQULdk9FE2grrbT2Lh553spYBUjH9ZQTsaHU74GNZ6",
  "key28": "2JHQiwB5CciQZeouCxP9LKz5djm7a8TXCgr7whqL5tUVXdUpwctmzUUe7c6VVLaAXSTgYuc6xdFeqesxKhkEPLg5",
  "key29": "vfc9y1jBawZPTXPxKVsmU8Bo65aiBHG6sNHFErk3sgQuuK99BoHvHiLidX8EtHVFn82Pmobvbn6RF8LGJcMFPf8",
  "key30": "3sRU4c1ShYKZzMjjyTY8LtGNCiBV5jciChgL2DTZw6Tu8zzaunAS9mUN8CK6tR1axYot1qcf6zTBZcQSE6dkCRoJ",
  "key31": "ds955wwe8KdawmD7PZmWamCMNcS9fBYpq3NVCEyb6gBYFfKkZPvHc6oszTxB6XfCuzrqnr5wJ9DMb2qAxdJXWvT",
  "key32": "k5c4G3RtGgzarYCzPLRJVu2KbLwRsw3PZaqU4DLpae6fKSRgF7mzq9cRAtGvVqzRJ8mC6NumBGoujy9h5KUBrGn",
  "key33": "4WPCfJqbBsDfy4eqGzuXWzKjhrwNHB6poEd3auPw7GLyZBytTHSVHJc9UQQAmS7iyqGk5ZAc2rv49zow47x1aqQj",
  "key34": "oJBor3FeB13pgcYnbF9Tx8AVdJiDZkqZ8gGjjKTBa3QFeh3G1256g84TzHa4xiqGK1UFvG1Qd2oQznogMd6KeAN",
  "key35": "3GyCs7cUjfmHNXFo6e7dF5Heri3VCfoNAcRASTEnYrA8FZS16kEA75baXzUhDU3Fcxp1uYoM2oFu2tcJAEJGQfsE"
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
