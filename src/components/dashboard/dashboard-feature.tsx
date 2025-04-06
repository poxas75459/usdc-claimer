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
    "3aqn9EfuiogcnRZ9VSd4aVeqmNDani4RGKVtCynUdGShBGRWz39W7jvfTx7BgXH57jxhS6mJ9H84Pjcj6ZuR7YBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z2M2vNyBeGaHacWtDsh4CjysouVnC34jcaePuAf3vNdN5vjtBoyTS2GRs4hoKuT7qCrpXGAW7L37cf4V4mq25sg",
  "key1": "2KZ4rgEsNQG4SvqFs99G7y7wNmpNEHe6ih8TjrZaQ8diqoAqr9PQsXV791D8DNKESdgmnJuQWC9sZRER2txpCDrU",
  "key2": "4sw9wbAgFGJ99PgEQaPfM25x2uX8Mu76PUYh91e1K2RgLbC72v6KwkrLkiniKL7KKh1Ac9mGnetPJWyvKqhqfofd",
  "key3": "3MqhtKR5fMvyANfM8W7F3RkqP7NNZ4TNnCd3bR1qpD23hQjyKNYKsBTmcsGumqhCMMwKHQQnLZLG4KK3nWiEuSAt",
  "key4": "4zLxqbEmCo7oVXNXFQ7iYAsQoUvSGCPGxWotGxGSNjPiwv8gv9oizxELS72kbYvkhSPHsd8EGwQMhyoW9v36QHtb",
  "key5": "hNSFCSxFg3hJBk5JJim3j2Lzh8ZF2zFKvKxWb4igkGJ1zHuRcHKaQQxpRe837kgLTeRr6pNGZfMKZZA7xJmoZ34",
  "key6": "4z92T7MVpedaDQ2hJochJ5dT9BjzVwmKgkdcr718hzViYWvAyQsEAR9Jf5TjvqTdVXtL9jmhmAkvdMQLRomrADBK",
  "key7": "4cwzzj8KzHUTcmMewj72jhWrwk6gYpfJhn6h8iupfj8ZxWrJwa9RhYAGjLSzFiJafqqcj7Hc5qjX7UQN8aW9zaCi",
  "key8": "59dMG9JHnXwVVsSRp4sWHLcNA4mDyrCqMrVaHkFWsz4Au3nWACYzN4MRLSxuBDnoaoVv8htDynajF9QeipkhRM34",
  "key9": "2hGaMHhSd4r473PuxDtKbMcAQRGHxsnWYtUZZcj63oMQabtqYiTofrU7oAhYVCaNRn4YPsUxyS9SCLR2i5KJM8e5",
  "key10": "3XuXZep7LNpiyQxTF2pTQ5Z6vfKh1WbXEBGb22cugAsLDtz8gttNoiRFqwuje6JsnjwAvc8gXcprizB6U2fiszCw",
  "key11": "ujW38pXdwGhD4QCx7n1wWXn5YiBJbcmyAsmBCndQPGGkmDvBPadRiMxopRHtvHSfN422KKXAUcVTM3h3sbTNrAh",
  "key12": "RCGV2Do6W8e45fm5gjmGU4YDNPVmapBFZRSSSBrjJn8TZTwFKzadMFitA1PUrRnR57XK2GiWQPQkrEdCEew7Zn8",
  "key13": "3F4GZ1KBgc5AGzALG8jxRYBnvoV4vDQHKQUmyZroXrhqogevP42mcNKEGDs7wgndVNXAjqNNukiSC4HkuWquDRk9",
  "key14": "XJuMaZWLkDs1Z1vtxarX3BTYQ8ZmLqB4tpSww95FyKYDCEND25dZCVW7TmQdwRUA3H1YmK9kmodwokT1271y3Ne",
  "key15": "62hMEEJK79GPd8DwLff6EbYHRjaNHyFYcgdprenTbgbyLpm3GeRS9Bu9rwAv2bL4oNQCNcjcPc4E6o5aNt5mXprb",
  "key16": "3DHvH8HZXCq9FmhdsuxWrCc5WyoWyYPgQ1MG1CefwHUSNNQNoMnPv28g1shRMQer8hx2NCrVXPcUTS3U8ebTobVF",
  "key17": "45nrNepQxYJtMcpaF7qyWYoLjbcnrrQtgpk9HCmcoaiq6sB6WkEzRJnT2qNUShwT6GzYmw8QzquR4GnxpTstQ3iP",
  "key18": "2qaXpfSxh81hACRbuzKqQmEsBGUMy1H59JuA9N32AqDqPeMxQL9PD1FtcHdxJrbnHr9jc1upKiwPwwMEj18zsD9D",
  "key19": "4Fv7ka91gUxjq8pRqqQRinWJu7AsPMXZJKziLwqCGU8M7n3ydsEzAy8aCPWffZFmatLPU5XAPvP3WUvTzEJK34zh",
  "key20": "4z162C193nUMqsKm8ETNjtPcmAoeQxNrLPfjhg6e5mUeqsctBct6ozVYa4f381drKus38bGZ3LyER7LgMm86Zfpt",
  "key21": "5CVztF87DsbyPGLNxmGEhq3vey4PmMKX99Rp5ureeK9Qcj8aB3AvBUZvxhDaJMneZWAd2ezgB6EDH3ApLi1eabXR",
  "key22": "2xR68Ftq1UsuVT8DDBv8occ6x5GSKjeF6g4VRXoXSWdkRoiqffGGr12CcT6rrPfRPXFb6cR4BLJUnzDpNRb7V7w",
  "key23": "2RHFr5KiqsV747KBmsMkyYMUTdc6tHueQBpDzWi8xXXCRgubdQwjSrncRTwwtVU6g57muXwNViXU2ic71XXUAtT7",
  "key24": "2fiVwK1hJSuWQGky1Zx82ZkZLpWELFdZCoo5ES9LUJGLSfiAUdVn2c3X3hyzviVf9U94w6cr2EvYKCQFJMjqFu5Z",
  "key25": "4PggBo8JjQ3AY32mju2ojDmfUe2p8EYQrUbZhNFMA5Fsy9qTg3RJFWFtcs8opG9vZmYJTBRVgy5zPx3zx5oNhYfA",
  "key26": "56eMWQj8mxDPufnqH9Mbm1kjTZeHZxDhxgfq3H6hq9VwtAMk7XqQN3fm2MGCu2SB1dwzHpS4Tu9kwdHX13oQRb6R",
  "key27": "4k94cvKexqk5DdddTmsfRm7U3S1epNVkkGZPiLsggCLpiQVkhm8YoNk67yyTFn6PMCYGMpfchHb1y3S48M78efg3",
  "key28": "65nmjmizx3rwiG1SJ4dukFUhk7aNxeeVLZRKBBdNUexyXY7P73mNaYvyG5x3mgMGMoMmTWFwyurMN8j1QzLmJ6cG",
  "key29": "5ZVha3Kh8kFFMGXEbCniEV2oHXjxaf8nMGdycxd4hkuLZXQvTjbBj3VmnhTeQkkmGUrsc84vNLttkejmDX5j1nap",
  "key30": "3xy8JSTHT3UXXbGHUMXtfFS1nzZWqh5GfwPfqCXm7PVdoxVLdw8Y7rZRJpXrsyxU9xdncdPq1kdHnAysgiVH7f4t",
  "key31": "2kdx4veyQLap1bLkoRuvTqboyhs3V42r7S1b6wLQV3TPbzsY3ES3dB3nxRdJa4TGs6HvHPk83LfkCo23Zzhz8uwo",
  "key32": "uevXRr2aomkpgPc4pXBatNNSqieetcZjAXjkvvLDDQpDWujebYS4tBttPLAW5yDzmRw8SbZagY5GKweV7M9yd5g",
  "key33": "4z31rGEobdEgeefE1wi85oQQZA7zYFDqagC6QznVogi9ArRHaMAF66h3bzvkNxV5u1Wgzy16Z8ebYBpuH5jM4Yav",
  "key34": "4tabvWKLKNrMr3swHwZmKFJ5qutq8dUdgaW1ohXzVXtTcaW4hey8T2vzeFsqraAmP3SRBp5iPJaUtBk1NLebdHCt",
  "key35": "2XGaHStjceftiZRarWy8AknpWH7MF2hinhAk2BzsB8DfCB1CrQg7sjgSupcaaCpyEaR6mLo9B8MLsAHCSaBgUwep",
  "key36": "45RtibMw6xHV7Mwm6N8jniAkQ2v54kRmCc2ziiyFXK3b7FmF1FKbk8a71troDHsD157F1xQ5iqCMX7MhBNxdJL3U",
  "key37": "2teaZhiPXyZDHk4wwnzi95F31BKNYG26bE7v4ajLLPoHo4J2iagbRMpX9bdqNgMd3hsGqFe68QYkDYHCht1nrDng",
  "key38": "3pTBzNRqJsfctKPKoVUxWyH4kYsVzJAMCyUY28wzsKDxejk1RhkyBYwbierobE2pW3CmKx4nRArVr36JbAVXPhQN",
  "key39": "5P9Mv9H6xgSEqX7BxC6G5Xq8bn7sj8uXttcdLeAEJYPmb9Je2Gfsgran7vS74VxxYfR3nbgECuFPddfmnikXEnwR",
  "key40": "5RnQpbBaEKudYUcqrYBSrJpFofehHvCBK5CQ942cETwuFqqn45hXkHztgSt6Mqxdn9pUxnHWfZ2o1Lv1XQUXMuBN",
  "key41": "5ef6stPGTfqrm3wi32gW63NU9SxnUpqdxdtBHEtK3Gamhb1EQXpWV9JiC2GtZtiMGndQiwkhHn3pjc1oVHKKRyRU",
  "key42": "4ccJbFu4oxXULPp49mng15y7kAtcUxT3SfdSJ3DSuj6fuq8dUmqYEeq7i1p3ywrcVY15KbMsYpeZPj6nQ5vsDvUS",
  "key43": "4xmvCuY9Ys6KAo7yZ8LNgUVQsLBfT6W6XxPwWW6dCaFY6ZdQZEksDCayMf1iyiHBJLURUP82fF4M43ju8QHgfoZZ",
  "key44": "3nnufq22V1WzSSAzTps3LsnHzrUaZjX2TZcUWLC8LhY5jgCJRN6VKFovLjGRmAPMbJDhBw1reUYD8mfRonJLWzwk",
  "key45": "253PiLD9AjzWprscvjriRoGttukVvNz6v4RwatAuR81cmHMPoCP7vUWxiMprSRU4GQf1doxXeEFwzmzEVj2mSXQw",
  "key46": "4dA1ahvpKqJ4Y7RQF8xNcHwgYktEqUA1pSAHpBB9jbfNfguh93VcinZKpuAXMZo9Q55tFRvYmftoiBSZA5M52mVm",
  "key47": "wdCeBEVsLnfDdzskJR19idzrVF3xjVDLrzeMh5jagprmiyk1wnxpVcX2w7xVcVz8a877xRyEyyvxf7TSB9NvWGP"
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
