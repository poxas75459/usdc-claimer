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
    "4QvGsmeuo5Bq3szt7asaT1WeHYq5VgjPYkvdWfVuuLHS12EDB6LDuTxw9v2kZ1wJgFimo9JchBsU8hXMVYXPsD4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2terp1LCbYgV6FiFN1K61ryNrAu977UsuQc7VSek7EmE56GgXNcyMnmJr5yXGbtB2WgB5nPza1fNcQCaLKGLeazB",
  "key1": "nmDXVoWx5Zo8C5x1XJgqSUNHCD5TBKKhB4tLfc8UYg3eeC66YEDQ6u3hW7Kc9Y7Rkz9wso43w2fGguYjNCfrNjb",
  "key2": "NKsLNpZJZbd664H2MoneQYrMdrWPJPoKq9DzyUXXYbCourzt9KskS322bDXXuhr541EmqZQocr3b97FBFoGAZSH",
  "key3": "2szSWvQ6ApHF7Yn2J1bbigDBjt5BC2KYvuXTFH4Lcp5Y5AP7EhMJdSowqSEyCnH3rw6p1C7iZa1NLNcMQ4xYn1K3",
  "key4": "391qNJtx91noNqxdw63suNcWaYAz3ZpB8DGKrKkNUyGnDBXkCGmfPtmA3Xn8bj25EQdzjnVSsZK4L9iDBUFQVCdR",
  "key5": "3rbPwBk3VvH8AuQV1dv26h9rqJHxDRx8KwvnjwMzBAv7HMnobf3HgKei7xpB3W7KMUhjQbqc5c68f2HJTqhTnG46",
  "key6": "2MyqB18vot4purKyk3ttPxDHSByrRmPouNvzwS9oii4a1zwL2gVS3HqzjxoqMrMJC6N6qodC52JhHHeJZuDzop7o",
  "key7": "4Nx9FZQhz5mAuuP5fmdb6HZX79DWtLZCBsPv78gHY21Ff69HXzERdHhgMaoRH5c3sZ9AnWahLuMTAbkkpdkkTTwZ",
  "key8": "4U85mW34qEYFEwACFHhuQcTqooSxi5qPUAWAoXXAhQvYSCETta7hWdRzo1NQjXrzawrfS5osPd6EqGUb4pygbfDs",
  "key9": "4xXU7DnzcWAhhZWAVYsdKrFjaLN42GxCnc8G44Wfk1ACzLwedfQJbTuvwgNQPnu6sGfd8LXsm4EYXChd4vLSWCv4",
  "key10": "4WEqgYjbWS14467jS5LWv5jr3rWBccuXkxVaDuBLJsubaAtFyw4RtXAfrvwRRHjjKmnWJmnBcbWYqLtPMNGT8bQJ",
  "key11": "4QY9TomdLMGw5ZzRQM3AvWVSkSSnsdt6BWCB8CWAmyEVj7EUmVZMNNtfb5aEKE2nxhskoMguVRo7X9P2dsBqTwyk",
  "key12": "3UWMz1Pv7XPs8ta8bDhFtv9cjwRHGX9XAF3M44TX1pvosUJ8HkPhpktSzC4LzVz44chzXcN44Vt1kkTUcjvz8sjs",
  "key13": "WZTwDDZzxATTA3dJxfBeGd8pLk5ntsdPFrnvhgDr7T7Na2v1iKNbizu7LokGrawKdhtMUS1dAcBcTcXkVKrr8iW",
  "key14": "3MXex8YY5PaWiKav6D7zo9pKSzqLokY4LGge6sMd2mQd9iqKk1iXG1u3Zs86z3aHXaWBiCeVFLccVs4edRVrop5n",
  "key15": "2Xr3wYCLhmjfT2kZzYnLcinMPerUhzwuBaNve3zKyJdW4MkVrQLoMdAyCjyydFYa62n7GwEJ16Zac6rPgbGmdLxY",
  "key16": "44jwEh7TqbcCEptotZM5khYSy3CbfzrjFQpfDGxmSUZg7VtciM69fxRrXJ2722LwE8yXsbYSRQT7Mc7SBQB4JCMB",
  "key17": "55JNaeyz3WB91k36ziv6NbBBMHp7Gwyaq6udBy8s9PQbq7fAdZU3GpXUSzPFdSyxJd2KoxV1LJigvE4oVy6ri6Gx",
  "key18": "3SqXMT7Gs7AC43m7j31ubqtLrYiKDavCZ8SZ5RhNFBq9eBAPwb3cJg64H9xMg5sxuAFpvcMZTBiNV88KzyMGu7zM",
  "key19": "4ja1JHT6Nd8VcgEQDEoA8NEBAtg4P9U3pTCTQAVBuYthX5HAoN2GHducs3ZDfmBnuha6vTtTwUsZ4bSeE3erxeoc",
  "key20": "2B6YGWFHsQyDBAh4CH4DXro3hEJN8LmussFLCu6TbUYdCn24XMKA22eUioPFxKitx3LfcV3FJ1UTcf4GC2gtzpVz",
  "key21": "3b5tcV6Y8SbiVpco732fMhadmoWwEJJqFE5AzcUweE6L4gXAQ764dA8UYT5zzje2u2xzxXZZ86Cfu8kEK9W9Q5ch",
  "key22": "4dFJYQMToBDtpxEo6rrGDf7c7Fjb7ZqnBsBazrmkJ1YPQmP3iBzHZPkYfANWLci8tnLn4frm6k6H1cjitNNkykPR",
  "key23": "5w8HLDYEEgZ7bFxAgeiL8mpMDVGVmnvvJ69nRvEtBUxrx5n4tYgLeuM4KBCrqwFu4k1gkTofmFZnp5X6jn5wUMH5",
  "key24": "hiBCob7PCvp79YqcC5s9QKDJS2DoH9bHnagV6o8Nt4toaidSUawp3YTmGLVyhVyXzCmnGQdpAKPtkurddKzqQQd",
  "key25": "49kPqNA42Lf1rQiQsZZh4KfGqLEhFz5fHQpqKvKdiKBZmUU17CtUHaRGVjckkqSj57Bf377n3goYr1XDLBPNRxP6",
  "key26": "5mZcshy6gyys6Z1Ki5AVVcrszn4EvfeGdBpfBR3oSxArCnVAs15bCP6fqcwmKvXD7EzVCgto1JfMSN6yRY3tNM6x",
  "key27": "3x8jTLfr7tYoyUXZHdyR7wc5y7FoWZwPCG7MUAXWoj8bZH4mPzE3qMaboe3BRMyYYobDeDh9fT6kqboR3etvwCys",
  "key28": "2owNGprZ9FcNYSCaTLd2ENvJZbASqBPC3YxY2N7uFRUVSCvuZvhuCVeEN2ayYDLmYSLWnhsTG7YVFXBdmnJkJh1b",
  "key29": "4bhZHhahpc9ih96s2LA1dzbHqwvGDj28nx8UTQeKHHDKovNMtEZu7hmEnzbZK76cZAgT8VYBsSGHY2yLoHUgJBvQ",
  "key30": "4Yn8dtMcM3zZyH5Wr9wTBHEyRfHfPiYAmzRbHfFw9dLahUD8zestgVTBxSkJMqcsV8xxwJwZsUGLkN9GzAZzkeP9",
  "key31": "5khqJtcbtEW2ocva54EvEBiiTu5mnaM7aVsJpgbE66Y96TGUZBT5cnrLQVt1wgKoqu2PC4CJC4WvCR5UtKDqZ8MY",
  "key32": "3r8KUfvrzZqr88XK4sagQJecb5KMJBELuBbSm3TuS2XuRuF1cfy3tPNgDubJYHpaYqmmux87JU7QzJawMZrZhDVw",
  "key33": "3Jy8i9egjhfJkb9XHXQNGHoikduuso75hmxzHG4GN2TtWXCiGHNWf5MhpSsh3Wmjid9Bp8EUwQxGCzFk8yFAxYsg",
  "key34": "5eRRQ2wPdyhxQrGzEq9vempHHQfVS5pdsZ7vxHAyeMXRoYV7fa33Gs2ktPrYRET7J5CX3RiPsMpyEbNMQJ64oeFY",
  "key35": "3RR654itvYDZjf2YP6J2PrkGQqnjAXf9nKhq36iSYLhQKyUbXZcrgxBuosim2zMagNubNMucoVNLSAKPgA1gJDrc"
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
