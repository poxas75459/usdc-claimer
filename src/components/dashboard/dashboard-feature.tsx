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
    "45xQtuC4rk77aDiXevYWsvVbU5EhuUvGYiU6KanCh4PmKyfrMnWazyAoksS4U1SmvdRrs4AYdp7jRm19bie2kJYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHh7PDSYtzoHmeyLURE9i2AKv6gZWLFVSvTjMVZoyP7GyYAMBSCHU3ryBmZM2f9aWcFGsaXDuhQKDg3eag89naS",
  "key1": "4ZJGfT4khwaJjPSLzjWJ8Xp69EXvKNApN5hmPkFna9rV4FZjTVKSXenjDGMKQmVW4ejhoructTzjZt2G5xi5BRFQ",
  "key2": "rt9z3ZiHKB6eoxgq4Z3SwqaAA1C2hV4UXSWJYzpVVM6h2gXyZFKVypDfFy1SsJDnGKW6S8ZSTTTghGeZTD1V9Ua",
  "key3": "2R8TzQo82goN7DrKTTapbysfwdUBz5RrKa9fYtAHqmaWmtYLgjPPawGZcqgFqesz9ajHAybqy2ifBL5pLu3Xi78o",
  "key4": "4mQThYkGuvh45XP2N8xd7g5SxWkVPNLPM3X2eMMQ3xgBAzWio3ii1P37BDTQv5qku6TN5eajtajMsFe2D3HRD7MU",
  "key5": "a92JzD7jXp1AxRyYxPRb7Xtn8o1SKi9aAYoYGdtG8AoLdvniMtmjAMu44XkyJ9SWLorQM8Fu4nqk3iPaNeRYiaT",
  "key6": "2c4hQffY14NX79Dim8pnkf3rdFGJYEdeQZsKMcVyTPB8rMRHTzffWhYFSqFP7YKZsrGkg6XFhWGXgMpcyag1iBBm",
  "key7": "4VvpwaWqkZSoz3PQhb7L7Nk21y6s5WqHFfKRDPFMYiTPH35R3JudfDJjscKPfZLKFZE25TqXVqToSyn8Ttc1WZ3K",
  "key8": "46xbzBypPd65dfZRn4eTQ4XmEHs4ToaVrnExDJJLhC1gKNLwqkHa69Zoo9n73Uic4znYpQi4zX1ZehbaRY52ecpt",
  "key9": "5zNVbZz4Vf9tyk8XBaJTnTsiJDb4qPy31cFbrqDpzLoYb5KwmemUdVMwvG85UsW2rVmyBHDjKdJmsXo4o8r2Gji2",
  "key10": "PgAPJkGpahfaHquFpTrGLbzKBDogjQGMnfwvKJmHnDBh9L2mxjA9XZuJLqWHV8cz98wjCgGs9NiV5jsDNe83uBy",
  "key11": "5DTgSkbfE5pESzhNDoz6iaatFJTfRR4bzo6UHRio8o9U2UnHn7RYpfjtPGzjJvVV2ZtfTwvfMFe9Hp96gEQYs5oL",
  "key12": "2xtKagZ4LKGxw8csZJF3Ex1zekC8LNe2Rqe8ZECNVebXmb86MnhfEBtchnPdpkJmtb5PyqNjFkyXUsrqfmT2KKsB",
  "key13": "cAc9y2bJDthPc3Auo7k531PzkhEirUGzf4LndXhpGbEotRYMANd67rghut2uhyRtf8QXMCjp42GRjH4kdDpUpSY",
  "key14": "33CNTPPgaRdeAud1LqKJsytbDrFDfXjihYCqKWmz9cRP2zSnaYfKqmH12hQJam1UphudWnsr5qjMfrbvRdSVfFHm",
  "key15": "5kXwDFiLjxzscZBHj58pZXZYSJooFAF9hHnPQ72CJibNe54Kks4LHAuqcKjyrUvatJ6jev48dHJFzbGx1kpkXCNg",
  "key16": "2rLhJ5uAXNRoKNRR5z3PPAEy1WGvbWqtQD6fNYEfkLAbncavBUSj31yFbnusuh3C1qFKUrD9mSc7xjjm2yZ5TazH",
  "key17": "3TKKpQytLyCnJFVJHasSkZhkfHcEeJdJgv3MoGzUzCKUQhTFNZQJyFfFRjNRhrC9cxX9QjbZeQeihXuwAxrSiTst",
  "key18": "4qSrfo2apF6XYBzs4NDgosDJNNa9rmi5jqNNyUHZrgFGfXgbipUpgegE8ocqQf4NbALRmfAXjxrCfS1MMxw3tTyV",
  "key19": "w1b7UZDSQdhrjuFbfB4XujnFEk9it6Ggvbkc7crBtGmNEf6w6uhjqn42f5p5bEkxE74eBWGbjR3LAPniG39xhPN",
  "key20": "3hBxr8y9Yo2tzFmPSzZmzr9QJBs1zBttKyTbLhHoTfoVWEjFgRg5NrE1HGEfbTkApQTk1bgAYUkGTT75bHu56JGF",
  "key21": "4FQxzczBJtGEBoXQ16ASv6De8Qw6Qf6F18vPMCT3qmVgQAP3yTnLe9YFm1c12Ws4cRtxsfGKmEaxL4ogZSg4nkH7",
  "key22": "5PEBnL3MxFCYGByGryzxA4QVzM5u56TMFYVM17agNT2kxYkTEpnRWKGHvxk71taNd7miXL8oKzSPR6iotjuUjnTZ",
  "key23": "jNxGAKKuzc7ARqBC6AF9dgqdxrpG4hc67kMkpeujVdScRx1DRw8aAyRHjqnSSAob1r7mcykb7n8PArwGeBUTzLC",
  "key24": "3h7VZvhakFgGXrLML2THc6hXayhGeDoD3DBRGxTt4UJZRqWNJgdLcww35Xz7bg1P9t2awgXHZ6jyFkSqzMJfWkH6",
  "key25": "3MwqkDTo4q2A8VJ4YuVgHPSFavRQHiyzuBh43Su6uwSRCtr7hhk66xu4DxggRQKTCHniDMqw4qg5P3DGq3rZjtLG",
  "key26": "5aMPceHKvrQHcpFF7uQR5GfHr9E3wdoYPQXpQtE3dtXtwUzxc2hnvg4yA1nUFAfaeSaV7ef69t7f4r65EHnHHcQG",
  "key27": "3a3gQC83PpszHRaZpix9wpMSexxRqoesqpeGMKMBFKaGEJJ3hTbBEKQZeM9JN5Vzd2jCrBDav68RRnrRpff2fkZ9",
  "key28": "2FyWZyW5WBvdj28auNczJ8gCMNagRZhaKza4FisYxQVTNPFRnSFepFBihHpg6eXFSYoaijFwnpyYGbEq1P5PLHMc",
  "key29": "2CEWYJeDen6P9SZbJdT1tSkCcn8pX6R5HnhKNAsZkqwhhWrR9cn4ZMpAzFQazcF4igmT277DGy3TzH8gNKNTfGGX",
  "key30": "2tJUrHDt6KP5TDip3XhtYkV4iGXCAZkzSwr4UiNiD9dGi1zeG21WfkwtmZFWZ2F3T3yVk6DDMNTzgBUjDX5JvZqm",
  "key31": "2VAzx4T4rdAZJggGKzKRawQPb1WhGTqi4UB5vdkwPkRHDZmU9VvFuo6PpvEqdTX5TfiP7FC3R9vYazbz5zPkafMC",
  "key32": "zKP4oYT97mHX7EMeaS9Qu3UsTteFWvVXdQjxJbPE7LujEMRKHZXhR13r2p7LiYiiFTBvPfqE2rz2ywkRR5heVup",
  "key33": "4W6ZNPgDWUzKF1vExzCBFfVvScJrXsfaZCmoHZpSKeVhmUQvXBLzF16FKCSGxMdhKgS9WuVtv367Nv88q3YfRGTi",
  "key34": "2A8DDNhDhhNi2weRTVon934ba53QPfALWLy3syKTUsJ4JcoEJyAy9NJMpscbSj6M5qSQLJexrN7khBvMJ4V3z2g7",
  "key35": "25hqkBzky4AmRJDNgcKoqEZaB29vMNZTQ3TJCXNs7YH3jMsNH7GvUFZ7nUFrnNUy7NHDizWvTkvFasd3smuTBaSA",
  "key36": "4hsCd2nNWGhrwdAiUEJ87rvZX1Y337rfvs1uSmTGqKdrS9dApxcH3cumGWAhntVFAz2PLJmWPQMAkSp6mtrHJyMR",
  "key37": "4qQZ4trrdThMfMBAdyGxjcMFaJh53aBCnSrgW1buAM51YNEyZ3d7Ev1MimK97wdCxXxucrvjmS71uKi65BHYrrRL",
  "key38": "22ggWpEn3yK8ny5u3jNVRh3BEQD9wKDdUWFa7okhQLffC9X5bDmQ88sLeHt8tJq76J7udLCZ2qgvGFXBp2qBRaaN",
  "key39": "31dmG4XkP5s9CbN7RtYw8Avm2syJS6DoUh5sVyvRYzi3UP7NGBji4MS9YqbGbctftuHsBgNWyY3acXxWNYkYQ6cC",
  "key40": "3jCmBUsbmtShYds3LPpq1XcHVRQp2vhuVtKYoRrKjyhxfbdEyMCmhFWRLF11zSU8Ktbgrvo6ZfPgasCpGgkjnqzs"
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
