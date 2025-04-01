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
    "4MYxS8kJinwVprWPN8asK1zRzNG668Rje3rr5msU5PDRpL6MFtNowF9cNSoQvAEgNkQYVeJffJRNRNPtuAo3u9Zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KGZ7hS6iqML2Ym7KBxcKszJ5kimuU5kJHL452zdGSPp7X1mjmBjFCbXfj5mWPc3PPo7aRgi26x28nA74Y44b5Wg",
  "key1": "4iakFHKyKFBCTqX1osKCMDxcPRykZcjSW3cikYxPWLTN3uxkBevy3stQQpjxbKf3DTChGV1gnwazrX9CbeRrLQC5",
  "key2": "3vaQyKZdtCXubBuUBsBDvNZgjCqXJmEYq6LaCH8HisSuJXaB6reoqmd5s5Vv8amzaKZ3ahsye9auYh6dL2JLtmta",
  "key3": "azTQkok5ebGT7PQ4N8VepuEuanrTravpnLq9gGGZpa6pX5SipcSdQuKVx7TdS6A6nGUPfbAQssKergJuu1xbDhs",
  "key4": "YFx1wJg4czx3uyW2rnJ6HKYhkC1iCWTQ6exRjaz1cbSH1iMwvLGZuc6JUzfLAoCGYB6PPu8ruifGLrh7YMN6uzy",
  "key5": "5YQVmUka7AfH1e5hYKzzK6v4mJWqefYsBnfriRaR3hdkdtKUwRC3YKJTMMcVWj84cgBEpYsN8YmCi1BWbD2MksZf",
  "key6": "5Aun3KvAEGCk4sJhqGp4RBp2o9nGTDrrpqoAwE9ZyeH3kTHHj38S9Et4TSTB37kFvrfh2SjAGVDxtBhD5Y96MU6K",
  "key7": "buhkP3w2DC5aLGeZPrsBJ6nqMpqzb4wwaWDPdMbnxj54hkKjnWXaoPngufpSYduYokvxVN7afsLoGV7XKPdsJuQ",
  "key8": "2R4RYj4LxURn1EGBCU7tDnEzshRnWuks4CJiPWWPzihszMtVqgxWW5aA4bseepeSw9kaTBrvWGY5CZeKASDZH7DW",
  "key9": "5rF4G9EDnSccdD2Whkoo9A4dyXiiD9m9TdJH4qEUqPfv38oyduhfHHi1tPdHWQx15TM4bZ5GdRGwrvwVXDu6mi3a",
  "key10": "J1AgD1fD5jM4KHN9BaVnGXHHNzfi3rGMsbPZVNtWPmthsq8mRRjthU8zUN9nygKVwGHgpC83vQrR85rLzAVYvig",
  "key11": "5gP1LShAAkbccC3AcHQo9uQdjiabsvXrXkngikZ2ghuW5ZM8rXfzNfiFJ6JcmhaFyzhM7SpcNEqKjraa2zzrqgE7",
  "key12": "9yHzERMEvZdiRB68uP6FgEnwucnh4yDAkrAU2LuSLtoUN9hX7dtBRJztXxycofKZReuyLYRz8JVfkhw5fZ5xTxn",
  "key13": "5SKqFxnr2kzMfd8pFxjcLC2oKswnB5NKsXBy1yGYnUcunL8jSnxV2zg59TDKP3kgFpLg58PAu8W1Hu2hotPjdTsF",
  "key14": "2tkHKN6vjetMcQ8NEq6tr59dPL3JQ4uQiWyethJWbn6oTjCLEaiBs7NjBVBa7hy5cUaGk8HAfHcDjtNykeomiJy4",
  "key15": "usy4cbUWJ7E1kNFiuD1Jj4CqW7eGugyPP45KSKVL4hiWDEVaMQmbHLyj2sFuFdyk4PA9CBoLEAL3EYyaKUCTZ6f",
  "key16": "5kYZBMBC1TBPzc6CRh9UNXpsSHMrARyGsFFvCWhMSJTkyCTuXg3mJ9Pt94zkUQw9QMierS4MZMfUbDWcaHhk7UD7",
  "key17": "3ZFR3xijG5vQconyFuCM9WwDeq4svRTWQTSmvbMY2bKzrvF3dTccw2kw1JrCjZ9V52UCrZMgVCh1HkTLRSbjYK4b",
  "key18": "3Y4fggrC8q9XCXs2QY7XzBzK7vgRqzC5BUAhkRB34uvooiAqkVc3MAYbMp2nSLzzvKmrxC7gJzs7eao6Cx3sPkc4",
  "key19": "3DPGvdLEEEVhbzmPPsJNn9R23uHy6HZkanbLMfZht96ETKVz3siBjtkwuFWBrDaZ9ZCKDcomLUbh4JcVQay5NYP7",
  "key20": "2pY3yLTaPnrCLV6s98uuAmSA7nWFrSRKDf12iAkXm8jWKpuREbtTBwhdiksnNiXFVxwANgWK4vZo1gdxhmLJMrPk",
  "key21": "5SYPmC1krp3BrEq69XWo2VKLxf6Y6C7H1ebbZSZj8zZ4ctKf1zKFajeqzf9CdXanpB9Z5HXJnhYurGud9eVNE1su",
  "key22": "5q4pRaMKyiHhKX1rJXXhY1Y2Jpawbcx68167r6BJJiZXXpgntmEfUD9bwFdonBQtnTa3SRrVczE1CctnFC1qyncd",
  "key23": "3jGdzPASyWmS2jkx9BT3Z2JGpvaptpEnRjfG9emBd3Aw6XPrj95s6syVfodSEE8UNj8WeHf3LhWQtQnyr457L1Kt",
  "key24": "3auDBrZ9T543qDPqGxizU8tU3gikAd4v87yX38wznx5CFJqpcD1f8VCkxuSUggTjV6syFJw6fnW673MoLqW9ZC7B",
  "key25": "3bsuiY4LPtVnj8SFMVQPkfDGb493bvsPWSjAumRG2VAF7RH2YPCmY4k8jsSBfyuRftJATLKx8jzhihUTa5Wjx6LT",
  "key26": "3KgJrkmQpv564QkF1KnANNNxovFVf8XsKSDkShKkuT5MTfoPyQW8gLtDZMgFx32GZ8Hn63wKaJDdw1hLnFTXhhrg",
  "key27": "5fYQTf22vgP7uX2FsMkr7SKMiDLUfy2LnScBYRAvNdGviF1PXuZ1zwnpdXqsZpNPrQaE4SHJGMeZFjxw7qKnrqK7",
  "key28": "5jFYX4ZFH5p6pqZPgNv5edvpNpo12PpFb6T5bpNvjgUCboBEungbjSgRzMwp4AhPACLCxDzraoVscBrKvrG9T6US",
  "key29": "E66hDauGRooFmV1WK4gfDVDWdDPxZaGydE2d7SYJVwnFr6ioGRU6Hfhwd1WmPJozsES7jNuZEc3qy6LbepHwG52",
  "key30": "akHmbv4e4Vpp7763D4n9qU18kjdCqQGKYoaUcfXg73YvhTiEJ3f2qTyaxVs8WqHGLXwrt2dhuY6NBebezWFznZU",
  "key31": "3fLJVexDiDTqRmYPwVxMnjAuybzPSiHkUg9QvRkLTExTmNE5caabttSf6vJMo5SCM3zYSKa38xXD8u9E4iezJHdz",
  "key32": "9t8CGY7VqfwtJbYKfBPir8eFDP6rrGYSbnq4cvTkKntb9m9Rix3Qpa2t9P2C3xC2M7kZ3rNFGFMBEtAetZXMxbe",
  "key33": "67g2hZ1ninvRvCY5aMba2D9qTE8TJGugJvNJQHW6BuT2bE3d4G6hM7LeHT1hvovxrTyzrq8RvdEcXtV398afBzaQ",
  "key34": "55jUvuKiz1rzTcfKTim8fq6yQ4gx6GHVtSGufvGRn5PLao3YZLmx8ZZfQfHPdG5EWSYLso4x2DZVzt9cLi2h4G8f",
  "key35": "2LE7awrU2HGb4PEnDLEyzviYhkGo95wjCLuQRu7n789jnkQbG4joJwkuYLMctNxqXsAzzXTjKisVXJnZfHdXibof",
  "key36": "4CTmnxLkzmZRENgzeB16hwMvpeuBPGV3XYxohg2LzkSVzXYwgUXsEzDD6fiGG2xQP4utdkrmhuvHm6jN9NPjuvrf",
  "key37": "qXhyMAozofkWHrGikGtYWLSKoy22bZonxVUfNSTEUf75eehFp7rTZfpvnrDPMjDQGM9i66VWbeBsQvQQKLiWJQD",
  "key38": "3tmvjo8WzxWZxbmsgxfR8GUZefY98VL6KL25fPBiyDRXtX9LXLaHgb52qQQZ7hFrU6sZv7kYmT7wSciPupv5Sr78",
  "key39": "4ptKGm7are8SKsDGrKbJ3yNgtYnJ7ZmufMum6JCw6VNQZ39kQ2kPYtAYD7r3Pnuqo1mZHkBw9xHbKXXYE6ajQmYc",
  "key40": "2QyoZfyhtfyjM1tRK2Q4CPemuEYyLBZAzS53yxzSRNpbdqcKHh6jpEKm2gbP53LZEeKWBdtFSdWD4HaxZRhfN5VE",
  "key41": "62uaD2AQJKFAwGy7LGMo9K2d9KsPhmskkm5sJNdS1oQvSCoANerTAgjFtYhQRHqa1M9Tvo7hHwuQz6yQRVCm9ncv",
  "key42": "5aMmunJGurmniNzJ8HF7NTJtooMvzheCrwXsUsbSw83JgrMUUyEVXjsS4Hrzcud65mEfdaG2nWNdvzDKaWYrXhCq",
  "key43": "2s9yjBxQr1cqv1bmHTvuQZcwWVVf19HYcyE9yrxgMVmaiSNtKq1fBy9LHo8QagWV3MoSC8oReYCrwvKWYhx9pgeA"
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
