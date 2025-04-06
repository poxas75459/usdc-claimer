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
    "3Gdn2Ju4XASm7EbR9eC6d1qovpjLomQcRDbtfssedoJ89LaEt3nnUJmGNgDVq91zhj93f1gvp16SHbNU6Aj4dLVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49kmdBtaRP8qCEwaZtZiHNnx1cSM9ZDBWujjkWfa9t7J2dvEnZ8cb5mBSpepwgv3iUjhg76FwSjYEnjFg4v619Kj",
  "key1": "3g7N38CwrydHiwCq6qz8KZBJJu9FMZLtGHNrU2TZYgBGtdRTPqJabESWS5vyPXi9dTo3TYkCh6LzvzQ8atbz8MJx",
  "key2": "2AugcknJX8FgsLL4RyYz8dygnZu3EJJsyST5Tb7gJ8zKUVZSAigcL5DjmcbUQ4jRNdR1Egkc16evgzRV6XTJ1Ae3",
  "key3": "2MngioaqVTgsXVsbBhmiW9rmTLWUDR9uPxcyphCmDAEQNqmdNLCGyya4ZgzhDzUmBBPWfPjgqJNn762rYzvT6J1P",
  "key4": "2b9CZDVF5BDpLj5NuvNiXstRGVL4KXh7rrE3KvKj78dmCoLjHEwEXWrfK1qzEQMVPj4QG49YLewD4GtoVyKhyUmL",
  "key5": "4EXqamKHVUse7V7r7Xpsyh5z5fc9Wr54vauizsRN7FecFPmuw15ckDL4RKN8KN3nYMcdRDaLJ3YLhTz7PuQLC4nj",
  "key6": "31PVoESysLSmpuBj88VAodkoXT5M5xNDKaFGd3fdWurwXAe1CR47ewETQLKocNwMh4YLMjoCdB8By4cbBdsR331g",
  "key7": "vrBuruPPfrZzoKJADU3MJU85pgBznqxxEp2FLPequGeRWdyWZNJc2xwqBXD9VLfQF3x7z9bqqKfVWbfNPQUbKFt",
  "key8": "3o46RUdRd9wgHwbrZLQSaZoxoLCthg9xuMNudYzuxtpnRadTiPsR8gguv834BMDaSJ6d2JNxunZ9sJYQ2L5aQmmS",
  "key9": "42yZCShvMgd4mLHyk6zo4upYz8K1Qiws8Q5z745PQ3hNZnxTb2giCwuAG6R5VQTQjUUuHgBGiQKexZBVNc4Cwj79",
  "key10": "4D2kYJqbKrioy43Z5pjCc8GcmMjquv1TMT1uyQNGC27X2cPRSaoWNHzedgh8NnMTKdiqfDiZceoYrDgUXrdSnWKj",
  "key11": "3buca5eQEc1GQ8rmaeyZaokrCHpwKFBUh9Bf7pL4m3AHsiAVvK5Rstbog2SBq1ZesZpDEziuHx6ZahM18NUU4UeF",
  "key12": "5xUcxWHb3oszm5sXx1EkjX2g1p28SACa9bNj64GGPN8zmBZsTfHaEzH33ZGTvdpY23TVkjD1bDXEmsGp4Y7xKMMw",
  "key13": "5Z3fCbtVwRL4KzppZAvYCwGG5yRDL7zUoRdodaKfTSakrSYzYceehUPP1XSTCbsDyCfmLSvk2S1NBmKJYvzikHny",
  "key14": "2RcC6CxFVcD2KCQAve4MeodkVCa4D5R4GbpGUSix4eKLWho9wKn5K3N9K4y957GpKXAuA1mCWHLzde12eqUNmkTe",
  "key15": "iWGAcB2z3yzzZr5vp1dotcpz33jFj81e2soDUhWpbTfRj9NDy4Zhm8iPnoQX8h6JP6vMBwES2Fvwv54ZPFsuCxg",
  "key16": "2SVRsieg8C4GbVJJeZtFuk7PbA7zBqDUFHvHdvwCCU4ngqKX9C3HZMMnjUHJy4g5U4Kw49sKqjwyCftKk4Y45bV5",
  "key17": "2VeCB9sfUJ6WW9BprD2bqkhARpfRzYn3Y8XCDVjuajgKBYz5vExS6HiWetMeZggBNcGNmLzcCNtppx8ZZpwnsjj",
  "key18": "5QZnbV6jb5CWnVJZeXCQNasxprFFcy9FxtJzwpEK9PkF6u6wwT7Mwxn9eMAXCDhSMdWX51TDVGmqXkj7aFZzoWhp",
  "key19": "2xpQw3RTTfhgVe5gJpMfSi6WKKxBxrBotmCGfiTsiH5X7jjYQzG4ZypJHdhPV5QNxDbhvHXfQnvLswvcW39Pzvdf",
  "key20": "2TWEpyU8ytWDv9CFqYMYoHRsqR7cjo1u6X55ArF8PRY8Dz3ApKUCg3UbTqmxVNb3Uk2CPCTwHmyp8FgSf9EisGoQ",
  "key21": "dAakkgTSgCggoYsRUfehQ8dW7HNAgbuAwtkqM1mFstxscB9TLgHdgPWaGuXHEVBPgSS3eF44A3KEro6WbTunHTF",
  "key22": "45jpk6J2YkdLR2dvRpcrrviJoZb7Yvgy1aMxDFPkSCaTey6swZXAhe6HyEk8fo7us8WjLF6qXJbqWnbNuSKvF7ZW",
  "key23": "34oHYwKoAQ5n6JfaNf4zU11tNwwyA2Zup2orJatWupAizFrvwwZ5GF9Rg3qQ1hoeQa5aArHkFL6JCn9i5smVgytW",
  "key24": "4kXvMdHb6MHLB3xx2rmkjZKK2Qxkxvj7etyZ91qpJGFGEJQ3uDZx1FnPxHfXWULrgE9muuo4zbaeY8dKpVzjS8ZJ",
  "key25": "5ZcH6uG9NwKBghrYtYsS9y2wuwyWt8TGJMhKPM4cLq34xbaaQqW4k1n53Za1HEXMsWHYoag3riKgUVvN4UfPZh3f",
  "key26": "3ctPf3fJayWy13r8kyVMwd1NYoeLRtZCZ82f2Frfn4tEFE4DDGfkmxApjg1h3vkwnCCK6w2xYf3bd3ZSsiBrH8FS",
  "key27": "4QoSqm17rgYbkYfKMx84u7WU4oV3Dizz4B3NKaYt2nkWwY3QXqBtoSjgJKqT66PVgZnrP1xfuF6AayZtTy7bkC4c",
  "key28": "5TAWaJuz8GwsEH9ZsT7N2Wm8Mji39K1ndQL5p6tPYNCmixPvq1ExXu5hKRGvVUqTT84CiCSECfenMDLwBPMFYrj5",
  "key29": "UqfbUyffaJbUrBVnk4cYE7rNdRMxo4haSUv1CG3fjZHxQ9b7HTNs5KbuAyn8k3KmqyqZ6HPK4Lt9T5iedPXBjML",
  "key30": "25edDPioHVyZHbBJa2YsKB9h5CZZCQ7vzrwVVGLi71sheWU4s65qrYoZYtXKANxnJXqj9ZbdgbjtwNeE5gs8uJdz",
  "key31": "63pkfdi2bKHUhvTpkgZ7sxPUEMpqGBerTsLbwSe6FsBs2HjcpTsghkHCF4xLsHJNvmnQEzsYspZsmxBGdAfW8tPx",
  "key32": "4FX4QJHbAoDeGNZJeVu9imtLf8RW7av7x5sixeTVvVeWNB6v4g3WGygkAMx4J1e3ZoYWW68tYeDVgj4yy2RPUGLo",
  "key33": "5rrH3YBPcZYTMzSLLUafxcLQ65Go7pR6w1DofJfhLMjGKYsx39brwiMoR2nsNwmqfxAoCmx6WMhBcM74n9XJkdoV",
  "key34": "3LHwayCSBhMyeivchaJw4fLpFfuSoCLPWFoip4SLFvoy4WbVts9EnMDnj1QcGom1hm8vrM2wFXMydw5KAM3Fq6s3",
  "key35": "3d8uFdbNpAqvpEnS2itLhCQSVijXu7BoJxsWwbX6TpdgWJ3EGwuvLdgQE6yaQ8kCvuBitvn4AqRg8x5DMm1gwfG7",
  "key36": "3vmtVoQfqNagVS8Kwoa828LGE4fXSaxhbcQ6TwubLaYg3xkgY4Xq2cY37G6Lr27L83o9o5n5KxtSZDA8F25cQPvR"
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
