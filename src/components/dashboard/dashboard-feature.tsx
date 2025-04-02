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
    "3e4RzuDiGfUY3QsGWGjeRtAvErswoKH3q33FioPAmeSkEpVXSFipp9zRbrE2ur1tyq5427r48eKhNBj4yr9awD35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42tZC1MPbHuzHThkuWAKyW7Gdxb3c16HUjjyWrsd4oh7cerpydkBghN3Tn47QhifTizFuyXiF94xid74H6H4WYtF",
  "key1": "3kc6cfbsHgXPb5z2uegcrDJ2jyuUpwHjZVjkeSokPraGERhYS2TVxbfkzpcrg2mQTijC2rwd5oaw1MLYFzqDKiNf",
  "key2": "5jvoWLuzV3kTHXbcA4ynLaSHTkKYoMkMNUDYBScCxUN5fNU3rf6rqeteZu2mYHTJnr28eXzUm6azZNHrRA883LP",
  "key3": "jQLBcobj6dNG5Sm8YQheEyzXz4ak4HL6Wj83HLzwtDamthDGumZEHyhRnoL48GsMnYJNKL778AQD6dLhPy6WxX9",
  "key4": "3sTZN97mzMFHwPV1xhyjLfV3CVvffQFGBro3jttQuW1iknL3N2ZunfXiJngGDmvxXFQWZiP3S9g2QDfeNcEWYdo",
  "key5": "2ST7MMyGCUKEFtt88AAzL2CfgPPeZLDo7qPd1S2xq7Ahewbm564DVS9E4peWjmoMEAD56NmuM7Nvfg1tq8rPF3GH",
  "key6": "5pTfQozMLmzYkmJp8EdDVGwKxe8He4HG7xtsHPXa1TnmHC66DWNygKujoX54euQwyAnN5tJF8z9SyFUzpqkeuwF4",
  "key7": "3M9fZdpzBXiD4mT7T5TWv9NUzY5YELxapPwKZemn6rmYFX3LEUuH5HU3wENjR9F11KTSz15K5EmZrk1Hc3dFHM12",
  "key8": "BdXtHqncLisj9U6F1Ja27o5aNQFmSbKG6unuzLoYgSySQbhd9CdPB1WDJZVLXt5sYUBAcncxMBb2iyteftRZQzv",
  "key9": "2bFkYDQa9sg9NMdoWuiKuRaPVnjMhMKUE2C4mfY1krrMCqVXbRQDZhziB1gTuKv8Z8Yyc7iJnHTtTP4Uo5H12FKp",
  "key10": "434Q9rxpJDojH8EjayGE3649x5ZiAXp94osLDGMvHxTYbgsbLSEaQkDHMuBRrojnKWRhq7fD1Htkf6JuCeJnJRhD",
  "key11": "5ZERGetNJ3Vvs5i6igohUs8QSKdzbXd4G5EXF7phsPpesc3cbBZ9xBURd2AcS9YijduYiQFxjfL1XRrXpw6dY59o",
  "key12": "sHVLrfHbVYNbKB9NWPjqpUazLdpTfyu1KBPskWevUhc5CZJ1ksrX1ndzvSrqhtXzYsaFP5V9DoJLht4CTWtKb5p",
  "key13": "2VFzJ57jcoXDpU8atmr6pm2hhJBzdSqYXumwSVLMRvM8r5AYTqWvMUGs6nkE4coEAktkiSR9y2NB7wGwMTcJtUtn",
  "key14": "ReDgcjwXUP9MzW6PGzqLQ7xkadmuNSMjJuhyjZX7XiZiN2qEs4jbTmWuKEGoYbgePU46YjQ9ypPdKGQezoW8Jta",
  "key15": "3GnsR2aowx4zL81BHpPZEDjEur3wYXXu3mYvKXjhCmPPnHWuV5RSee7W7CYNsDAk7zHZic8P7rvgSD4XSgeSKCSW",
  "key16": "54ZHp5zorqdYznKxzeZr2yVWZyBuKDnT52P3Ni6pu1yEkQz1hDXhX14RLZMb4iy94M98JeYDrbWFp2UL5TMM3azR",
  "key17": "3UTNLeVemYH7cA3z8W1vQ6ywvTZ1okmqKem3oA1bqycPTbo3vmGkWrRfBFWzGzSPv4SUYbrqGbH3Yq9TcQ6VSmM",
  "key18": "4Q86pyWMh9HiYMZpgtKFnurn4jadD7YZFeFP1NT2k6vx7UHGYfkJRVVC79q7fsKxJZxSiMkH8iDFEvjKTRkxsDbY",
  "key19": "8UEhvZCbGiiJD3vZTaLJ8PxejoTjpkpBQ9wLfomPU7EFZgEub99LJC3y5J3Ticvuzs6th17TzFieuuyD8ndZibX",
  "key20": "4BpHoehbfsSYsUjLqFo9D8saeCdhLeg7AXJLef1tgPjvXZFFuzwkitCrnrH9jc3eDbE1kNQMRbdDDA41TiYGTfCw",
  "key21": "5vownyqJfaptAWPBFyDv5fQAsg4gYgP5WMZL5ReyeaBTGyZP9U5p1PJrTfn7uN3BDuUdDmVSUDMKVKg5Q3zu8KLZ",
  "key22": "3xYJnizPNrKgF82Jd5CnpxssHDtAWu4FqQKi2hSCDDs9HmsA9iBW7revZTGRp6LpqodkTPshafDjtpcghSrT5cWx",
  "key23": "dynutPjUWdgX64j3PHXgcKUKHRG23uTK4rT81PiHazRXLvoA5o2bKwFZTS6zATMx3tYkmjToknQFjBXEbvuMtTv",
  "key24": "3PHdy3mNnVeVrbhZtfNpRjcqvpBdxCCS7pVLUrkp2eYaYx2c7tGrRuU75mJYnf8FqHFeQwETudDLYmMBCLtwSdwJ",
  "key25": "5AXqbZ6GFER8wCnWVfrLMDwqUprys5pyX5fxr9yfV3JLUrkfEZVJUFxmXetGKZWz5e8aPhq7J4PiPgE2ujv8bgkt",
  "key26": "52dAqoBCHKtdkPWPvVptiKH1Z7ttC1EQSJsnGTiYgrJp7HryxnBHQnzwiJc4gayr7b91mYiwkaGk2yWmdswmJgFH",
  "key27": "Qut9fVJN12RPG8uhfDaKJFeS4g1PBHBG228sXpTHyf6qMEq8SSGN75ANjWEZeKKhc7RLREkpt8hLnBgqQzEuBri",
  "key28": "4uvYbHFuRCe9CR3jKhfTE9yFkaYk3VFWszijXrNPZh6i3x9U7ov73VqafC71CYdC1a5vMuK1pFPM7PLRWngECssp",
  "key29": "5ARZ2Quit4EkcfVSAHjTPj3ydNg9xYdvBzorUbDCcbkPhtUePU4aXa2x92PhUFXCQAUKCrL85VBLHwLiUzX8Jwzg",
  "key30": "3Q6ktwLor7D2aNFYZrEekgPfGREwX8wgxevvt6FMeo9jFV3CBJv2CNp9pVt9cbh89HCSg4eZ4ZsCKoZNns9nhbSe",
  "key31": "39bfa6Zk9TxyoKga5q8Ng3Q2fuUkCS1DMjdt35XYQz1yGED2DsMEjdTDJRf1AqLyLbf64CCa44cRa7Ny9vW3eXQj",
  "key32": "5wB3zfi653YqETqX7Xrh2sKvrS4kb8Q46prSNUwe3rQFGbDUa1AkwXubdUZtLtFEmKDoLdboQAsWKArvZ6MN33PY",
  "key33": "3NffLyd3K2FcLisAPxJiz57CYGBdtWiMXAY75GqbWaZegENVsUWfBP75YFB7ks8d1M1p1cjcpzFed58XegENgWv7",
  "key34": "5D1D1aVy39NSpTHwEJ8Xpu3E7d4rmFCo59375fqGaFUL6RtdAopRzM5CSJKpxQGdcRZRqdrWC4MAxpAS7iVpeXdz",
  "key35": "5qbcMVA3g9crV1U8nkpHNcSh4zhc96HjAPkKzu8pkdVgwyMr5HQJErvXR9EzFS4UX4TbDhhinyFVqd14qT1bcpfu",
  "key36": "3CuZGUNcSCBK5x7ReoSH1buhLpKk24wBi4f1Pc6h2tEM1JVRVZCXQergRvFfjnwxXGvKwXA7fdMCBpyHqVTWzKkN",
  "key37": "3thFn59FdruuYk7zjt56WHeYdQab4rA85zQ6KHh7gT5Ahu2ZXknrTwtuvxDrXWFdebSTAwGBAf6yMwKUeLnCc9hC",
  "key38": "3TtaHv3AJbzdkJjeVVbTELWEZcBguLRbQKjNpork56WRhzirY7tSX2Suha4EGKHtL7B12o7HQM1TG5gyKrvuz9X4",
  "key39": "5HqRAZvBe4w5NubSXQCBg83aT9LAjxnL8EkiGG3jDiaAmp4cLtB5rFyTaihzMAGCWrJhvNtp4n7xmbX9hUwBeKQq",
  "key40": "5wTchLe7zY7QZZMt51qF8fL6GmNhmbYCUs8hYPJhuubn3bEhQJDSMFNaAxqEz93fZGJU42v7oFnRg8Bp1VhZf5kz",
  "key41": "2eyW8sh7jDGu8EWfPJeHGruDq8E9SmvNxsDtmTwauhBRK7gPF1KjbBisyu5J51SVoyTyCbsnd8HEip1ug5g4fBq"
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
