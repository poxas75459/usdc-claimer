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
    "57W6UjZh1rZdmDUDie4GbPxcZWsRBAfWRmdoZqdHFd8C41n4PMoJXdHRhG2v6sdAPVM63Nt1xCqkF8Vij3w7SuqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DumiWTR1ra4PMDtB6E8m4XnbnhkaZyzgxWx7HWepYV4JVYFq7estTfG31xTYKUxiLB4mdh2NiDxkiyyKg4UEXwW",
  "key1": "ad2RtuQ7xpbFCwLnSYUABq73ztzPHHUcU72SPWiEH6ByZGBq5RAJXC9zqechWJXi9tZ2mSZ57HyNNSueyR6fjx7",
  "key2": "5evv7vyi4WPnHu1jpaUyRnVrdBzRweJSEmHa66jSNKpT3dGDC87Y6We8HecaBu48uvKZx92tCd36B18VhTxdDknX",
  "key3": "39XjjLPLcxGdwyepXadwfp4ui4Cgp6Tqp69xVsMJabA41QnmhNeT8ARuUPNqW3WfRwuHoKV2ca1VkNbAgnsR1X6x",
  "key4": "3ZCbJWhrDHejJNq524M2ctcPUXhkC83JGaaKE7zkxbUpw5SUQ5mGTu4DfFj3Uaw5vWhkwQ3XTB6VHVv4ApTTdP1W",
  "key5": "yrzWFVLJ8eY7MM4KpNtD1tx3GPrLckqZ8B32D5ast2XhQTDuagvpCvugyComFJt3zaCLra39eTany8n2jt2EgQL",
  "key6": "566AtRzPs8KxjLWbWy2D6NgvrpcPcmtePmA6Asx49cyFwuoNWoHwYUAUC5cBMfZcK1QL1u448UJTzzCDsayztML9",
  "key7": "5QsacNVzf2F766wTuZemS48VxqnfrQFkbFab2JikAJVbjPB9NUNzsCBTfkfmB5rgsWHeBUZ53q5jDgqCL8doP8ra",
  "key8": "2dLxdSedDazCBZphAEbZbmKm6w2W1TBdf5QTZzrMDJzbj5DM3ZMXNsahc5xwNwVmRy4VsmQhLWbYFQmfvCcPYZC5",
  "key9": "5Fnn9NwQ2WHiruhpctkPvfUoix4rSS9ajqvUMVyVzeFRGLMgDEQBZ8q7k1do6SvbsTGMv57uNAXLdSm69DTsex3y",
  "key10": "43mnE4Ck6Xy8gKGcmxCNTif1SXZgPs6ajnaZo9nByAoLqLcHo4mtZMDnCAKpexWAN9D5DhReJQjxK2Xz3f5oMEJy",
  "key11": "3qpr4hjfnbYBFQKZxSZZEhEsaDzEKuvM3w4VRgms2tAHXQhx6AjxrRfi853kdvQ2FW98fkaDoo77RdimKBqveysr",
  "key12": "2VU6KXjJJGicJf3Wv5z2RPHQKWedycF8w3JGq4y4jVhu7GWjqrTExMyejMKDrZuy7MDzVGK1sJsTBFoPvUxcDbWK",
  "key13": "2DQDDRBR3PAoL5w2oF35g1aLj3dyhqiQzymHhHvqocSpdMAkwns7e8dqyqKrsXXc686r8u5iJ2NQDgJHv37fsQZo",
  "key14": "4mSUq7ErbNz4U1nEabvQqL4P3Zmi5YmupN1EC2ArgL4qPrGzFTB9Sc7kWLdxUhmN2MqSmA94hkHKQUoSoTSJgGzm",
  "key15": "5YQHu7ftaK24Lnb7cPZhMdcjrEWd3C3tk3moGZtjU2vDBP85BcnoXzeWpqphsoa4AX9are16taQ6E83MJ7Ad3gma",
  "key16": "5Efru4Q4GizDp1ubbPiEJp4JYUuJBRetNLVjKF2L141gTf6zE2jhUasmzrZ44gtGLTLXF3BEw5KDQ8yW1meMxowe",
  "key17": "3VRDRzYpP27FFiFHyT5QZHMn5TcSzZTh646LdecudgnxFynGAVqfJ38GnokK9RbdZXQ7JxGhwmLbuokfugCZM5Zg",
  "key18": "5kx8WQbi1UEbdc8KFZ3my1XJJephLhksEx7f7BwfU7EKqe1SRVYNoG3iivTGFmroqnMbCvMpseuL5Ht8JpGAWjUq",
  "key19": "4EpkY8MN932YCNqR7s6p61LGsAewdi3UVB88RQTzPzrhk1D5FMxJn3eAphChPP9i3QSnYE87XMxxCpiFuu6gd1JL",
  "key20": "5PS9vfTrxhaKRBLUxs91NqfsXHiYhm5DdaAsCZrtinQ8QwHzMP27ZazKkrFju1FoqfCDjQsYdd3GagwiJxNCTKHd",
  "key21": "48FjDXgLR2oNqBDjWLjLwgWMmdsXTF3SWirhpx9tS6yUQ1PW4PCEgNCvi5wp8eRv13eHq5vUonBEVAU3Rr2J6YcH",
  "key22": "oJ8Pv5wjv4kJnAbRmSxDtPZrwYutmpUV3bHVE6L2vnK5xE52MD6dgBvsyzHKTeWowkn55u4NrcpdojtsU6SKtgm",
  "key23": "3yjLY7Ji7x6bPaExAmmUPTbn8GGcfc3SLHaEFJgkxpuWqSCFbbLrWNrfe7JNZDHUDeufNp8qgV314HCKYRFcn8y2",
  "key24": "2bH7K7kWWosHvtJ7imMGQvPFFaj4bVcUwquGmcgYu4vvVyZfJS6tkGTJzuYRbs2E1KjWYSrfGJGvatc4UhY2Lf6d",
  "key25": "9h79tE6rbVd6wxEC7YijzLtTNh7UuN9HT3rdkq8Cd1CVaUx453UaSUXX6fR2vWfagaT8W8bUvAnVsTMMtcQEayb",
  "key26": "1cuNKYuKCBgRHRoQVvRcBLnZDysr9LLVct1GT62WEFUjrHfaBAGCpajTEqxp1UvNNccxGDFKTvAQoThoTwu6dPr",
  "key27": "3wntH5s53LzBep21Erg18QVryD1nCutHp9WnfbdCzzvPGehjrANvNDdDnihxF4iaA7oLQqywop7trx2zKWtfMsYv",
  "key28": "ZvNNHNxK2JggWumUWq9HZarRJ9JJSJaY67QqHizZzqqwq8QBaJpyVEfbYcZ6oq16mYTiWSkREVDabBdU6JZyb6P",
  "key29": "RwwuDsc2SNmthYnq1YztBvMVt91GGqGehy4LJdXkJ6y96wkvMvQ82iVwTLfxic5Knve5Dweq4TkXVPhAQ4TKS1k",
  "key30": "3cUofSZd8L5u1iMZ2vUP5ZiwxSxxhhFRy5DAA4nEDnpJZdVrV5srZ4bsJg6itCEL78aAp3p391LThTXyBD7XRyAF",
  "key31": "4N2Kk8tEwnKLvH37RoKdm5QRR355wtENJwnzxxBVNQq5RabteWMndi3y34QbMsKTZtS7jYdrbwtrqRZd2qxqcepS",
  "key32": "4JaFNeqk7RGCCkncJToVsrkX3R6oWRNLEX5MLghZZSENQnXEQTYbuCjn69a8S7t7P7FwB2viRaoPtaRuYD73QSUN",
  "key33": "4hbrrMidqUesxzKBHyQ8LxZ1m6mH6f4FYdYPczFfdLmgnD8aNFxSeGvaL29Rh9RZveo1Vey4H2bKUYeZUy4vKbFP",
  "key34": "5WPz1hjaLXir3NyhKfAqbfKGyFD8s3mKpjeYQ9ftLUxZdk8FjYxYJ86mU4TPaP41gp7MHND9m6pYhJiuLUQdma8t",
  "key35": "FydnKvcXr2AAHb8Y7EYupqpk3UbteEYgyHSb5Bv4ss7vSoMcQdBgkcHbagRTgy9ZkyDBGyLkpRhBdixFyETnEDw",
  "key36": "5eaFwA5Er6jWAFfZVLgYmK6MFo665abegtYNsJk3PD4mK62rjP59irFFueAr9U1AJ3TxxWzymbiyMcsBdzLi2v9X",
  "key37": "5QaRSL2ibZsAhFxvL3wSGXfLWaQ8jMv28Aimr5MHHJZiw2MtzVkJ6YDhcZbm1pBbnSrT4z7u9RoJvArbK1Q2zZzB",
  "key38": "3XFAzdk4bypo4eTpr9KNEQpRobvAAc2uajeQwWVLMZiLJr4WejMkc9Sbxz8if139dUff8QnarYdsJafjE1ygw6EV",
  "key39": "Kbe67N3VqMHsJxJB4Ti1o3riDjK9nygCZMZ7MdpdApF2d4z7wYVKmh7pnSiFaunNb5eXs3nCu2MTL17fXjRMGZM",
  "key40": "5vWa5eeKrUFWmxmQhmbsZqwFhGKJzcqQDAeDLkQh8L22e7zDJLL29AXTHqXewDvEvsbg8xgsVZgeTGrf1MGEj2ZZ",
  "key41": "3hWXMRQBodixdej43oq7fzoCCTBXthz1QnoLzz1hDW3vmEQ49ej5yJXaRhEcKMidKDSfZPRLNALN2JKRqM9mR1an",
  "key42": "FqyFtq29iALX2prKsFR1LPYfKrsMURwM8CXiXUJcfwowt57VpvBmayKmTwqdFpiQjkF2p7tU4WKV6MN52nin5A2",
  "key43": "4sJEXwHY9uF7rQHePozBoCWjPhJU2X56ugFS9y7CavEPR67nvFt2v85G8fLJUJ4ug3XjmwRTKe29MteTrGYmn44x",
  "key44": "5SfU7A1bBbpTJPFhxqonjV7NwdwrTmBA6S4MCiT3XD2VLKpAZGGtziCKS2y13XmQM3DKia7PpmdneM67vybwAoJ1",
  "key45": "4N8UvCCqKXi15xhu8a23YWmgt1j2xvA4go8EFfwkd8N2MyS9DSzND4eJSbJiUYyZBNP3118CmBiXQazZEovm3HUG",
  "key46": "66LgPviLkjzKtQ3YHAfM1faVxJX4kFPq67JQ4q21ftPojobbFF9kQTN42Hxbno5gxGdQsqNsrXyoG2NVymszLFV7",
  "key47": "3FZPgbVHJmW8kNQHfsPbXXC6t7rrGdGKYoq22cigZeDwWBMxkJCftadifJXM51xGU6zXf2SnxZ5MuobhLRck1AU7",
  "key48": "25BoKaeGsctUn4XGZbfBxhZ7nPf4SyTBJmuqHA3913Johy2qGHcww1Ny45CnFhe28KzkjazL2oGPGrrXDXhnbP4t",
  "key49": "42CKkKASPmUCFWmThrFU43f6LmdUbYCmWFdkZypqndZBfUSiPjskjGUuLUPD9nkdqhZk4ZHzitPZdJbMuyFPTwLh"
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
