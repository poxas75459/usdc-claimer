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
    "4qpayt62V4yFdGerrrDGfmgSk7gR5c2LxGcZc5VRyW3QUMsyqwWqJPLiq1GftKNqjrYJWSmRvxMw7QLHwsgNWoS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YeRs61LngjnXm1BxW9NYpLKCnJWHTwWU8KTotX9Pdam9gK75dWRHrk3LnHXbX6MtefhZJSQK2QT7dgDJjWiPTua",
  "key1": "5veCXWXUeWhtoDN3mndADc5kjYeLAFm9mwgaZ5h81ABktR5FQucmSzRqiez3jGGgGmG85uNwyhtGBHQvPJf7Za4c",
  "key2": "4pEdK5SU81XJUGvVXdrbwFP1V8iMkp6XtieY7A1SDH6WnqU5aBpaAbKodYf3wmZ9qx8A2uCvJktj8PMTxpF5KkY3",
  "key3": "QuZ38qqDLV28iW3E9jC4t1SxChtBrh6q5GGHnQAUd6MH9KunsMLp993ncs7RWGdYHUX2QR8m4GCZmsR3AGpx8fv",
  "key4": "5HeJMuQuWifQC7TsUyerSuNPZqhHgjStJhBV1GfTus9sWzAb2dF6KtskLrLmVMmcDLens45Z4PrEmXH6JEYU1BNe",
  "key5": "3cMfA7m6QQg6Gm6TzAuUdSLN84bTM6CV17Fd89gtrhfKhFSXxqeSmKSfx58KTXjL1WutLdMcsCDoRosbTyK6A9hN",
  "key6": "4sZ1fbns3QeUw9fQJoPFfh5A2KSzhQLTYkVigjJ1CzcfBxReQhtWkpEJLuouFuzPtLt92zEd3cJQQ38PHZCMdVuE",
  "key7": "5Nicm3LXsqB8n7DKMSZn8eXda1nwnkv8nNwakWLZ6JXwgMcUATamFWboppoAXzPwzgzSVg9gNDHFPu3c7a14Khcb",
  "key8": "5Mf5h6AgWNKg12zbRE7E5NddZwLeKC6Sqm7UbfR8dKSuVQXMMCujBh6Xk5e9DEgCdEyiCWcnTEwKDcgSJLvwqDot",
  "key9": "5dA2mVrKKB2YWo3Uk7ji7Yhx2Qv38WcLM9kKVM6Ef9FdoJ8Tmz22SDWSFtuEyLWnqqKe98hvpxgi4itT5rqjb5GC",
  "key10": "55mi9xveaHaSjhhCQkSEh2B2ZvnXf2kjmGEEUFsXPpCQ2ejwc9EMLXCMPGCLKPEexxQtX1F12p5kw1VsuArHz5Zi",
  "key11": "3c5A8SJQnLCUVnrALFBHWP7VEuqzoyuq3fMSHs5YDLbPjwrxuWyhEupFNZsBLbMfMTt5ricm3UzjPsEW5i48xtRf",
  "key12": "4K3FN3VR9nxSgzCcCJNRzQSnMEDGkEC4WqH48SXbd4wZeUBi9Zp1ZsTWAM9uZRFL6LV6TcuGxx2c6mXY6EerLeNP",
  "key13": "2zuEvodEGFB5zJQjMrB4GKn9C513vgbsPdKSM4Tvaaug5MYSgKUP27h6ZP9R5Yqmh4HN3r96VtgGi6p1YRLk1ccY",
  "key14": "3REPXxM3YRBoY3W3Aka2TMQuP3j4dJr9KRi4XnnQcBoczcEp8UcNE9vReugctB9h3rfjXqVVPtFUUgp4Fy8y16tr",
  "key15": "349SpL1ybu7ZjHuqdAB6BzNukejnUnfg4Mbq6mPsWTAXLzLTwHSoTLvKqQaLmCCFMTAVb6SjAimx1FMUtfxwVTkX",
  "key16": "2j5Moo4sDxjYtjUeKcmz8oxBqX6VdGuNAZ8Fk3NhMb7xaKaVErCu1NLsQk6DLpn8fZhU2Sf6kWKtXFFYWV5hYHff",
  "key17": "3jcA8Kzj3cf23CwvPrhXdx8Gsbs12JjPC63TwB9XRP4nLGhk8YLxVRv2rc6kpM46zivnXyMsKPNW6B2kBfNX7Jva",
  "key18": "5Gdmwgvj1KJqykae7ncvcbP9XVGYpbFYmkvaFTFMX7AvSfrkpaR2WQXQ4936SSjoAaWgN29MdrC7kcRrc2rXbUGT",
  "key19": "523pQBRrQYpYo8KfPSAuZc8bFoxHiMCHH2iRLckXUyp4SNEwbnRoMSjGjUWNsmJCTagX1B9j9LiD9RsyuDMJVPhg",
  "key20": "641WnsLxGAv4CaxjQmNd8iXpWQXPnLj4fbUMHrbdjsWrtzYorRJo6qMGLtpRgkTKhdMKgBhvC4rMuEpFL2aHEEnF",
  "key21": "5dm92KY6ibatVhzevJqMzJZZVKnk4PWjCxrzC9Fn2auDcFf3s7dzHzFN8gVEuZkeeMEMd6htsqD1N7o84v4ePuJD",
  "key22": "2HFNC4CHkjwsNar2atuD2tgP9DPYD9iCTVVrWvTNV7h1jeV87VgqS738ktJ3NncBtCoipsexfAuzi64euU3tcBMw",
  "key23": "55Kho978uK8wQiZZXhipqVhiBGHrS96RQzehB3euyqujPCwKkHwrtcoDt4sfM6wkEbfeEm7VRJgtQuaNFjz3nW1u",
  "key24": "62PutabHZiroZ7Z7BjZsiWqonL4Mqs1P6i21AiJm1wTkNFQmttoZaP7fi2iSGDYwY3UVGAwU5M8aP5Ks5vmzVCs9",
  "key25": "4TeiRrdA5rQ73sc1pwBNpPyD9eNBCY2g7nP6XxydpMevHubCV3cenGavronV4XzwB2E1XNVGxFpGgXHwQqrjPnzU",
  "key26": "2Hvcips3VD5dgTitevGK5jEKpZqCrz7zpjH6wzx52dsZQUf26sprNgWYu2iVEyDrCGBK3TkPagJXVYqQokQD3RvX",
  "key27": "b2EqjZEisupYGWg9pfT6FCjm2zVF2TgV1MTyCoFr297hZPxyTBkF1Z26k81SMVRLd8VHEgToV1LMg8mUmZkFF2M",
  "key28": "5en4kPZo5DTRE6d6tqVSctWGCV6MgM79Rz3BXe3beMrbXibYmJFNZpiumpK3yVxexcTEtUCFa9EGjBJxUA6nQZ2",
  "key29": "52dnaAQYkpfdSDL7fpmHDvt4dsCSye48mpKzeKUsyvgw82giTv2jk4zPu7wUSQxChhvtqhXRNbAfYiSmp4akY9Fz",
  "key30": "4fPNSSu1p2DdpgSZx8kPQZFuzwE7Mj5nmqdnMbQN9EvdtDDNmQced2zmL9M5B8wj986KhZr3VTQsdG2xeHYNyicY",
  "key31": "3T2pM3HFr9AZp89rd9Y3LUEXEoXjgeNbJE5YQZRz1AtUpMNHk3WoeMTf7pbM6HVMAyM2X32vWp1cTLXwi3grE1jv",
  "key32": "2zBncjYR1SKuRYAAk38NJYN8ZXfbWyFaxyPzoFuq132aAPzxyzLMgErxF6DDPJBUKWdFtovA7USmq9awptCCkWRN",
  "key33": "4U2qCvbyVK1GP7xGkeXXT6UGZrrchwr9kehXNBE4asMGXFpE5DQSqeXjYvqUJcEQqMCWk4a3V9PHsaJgU8W8gpi4",
  "key34": "5CPR34hxpHwCjEBeifZrcAJydHiEFuKgVmjpsacLvMBWJt3nuDxpxeRfP4UJ8YV82QtCFA91wxeGJ11LuapqZtfn",
  "key35": "632ra6L8p6fvNvK4sHmRXiXD9yW5m8ti8VX9usvgWGiXduvCeSVafDZyRdjJGzpd2Un9qLi45pUrSUbezygVA81M",
  "key36": "3qBjCbfDH2ZyqH3PZ7pxN26zeDn16JnkR9adRJVNKDB6WAjJyqCNeEu4mmXwukBB1aQbyuwfEse3MP6bQU9nFtM8",
  "key37": "2TAjDvpvZtq9RDVftJQLaTRbDj4KGwJRrTreqdmYgsRL8qMVn1ysXuQCCwrjemhkJcn3oDKQ7MxV9uVbYGeiUZ13",
  "key38": "5X4ZH75AJo76ZLpJqyC1iaV2kJGFqp5SeFXHqNcoaCXiCj97UPWMYANM6VJbRcx6bq5yLGYB4f3eV7P5H1qadL7F",
  "key39": "5aCMFXZ6WASiXJ7X3Q9BbjUVDXFnpJNeJjdZKGdkWAcJkjrvevCX4qDqZgDoHB5P9dRDRpe7JhMA8nb7ETrUzc6a",
  "key40": "jAZ8bVy4WUN9BzrVot5SNPuPtg1kw9diaaBjoxLxcUhPKuZCVTd4Kbe7jd8ALtrtLr11iborAMo9eXRcgkNv3Je",
  "key41": "MeTjsaot2C2xu32DHW6nfBPEeTCS7oG48z5jpa81bd9aajVkzkVdLTpbvCf2atnhusVdPqkaG7VkJjDioDJcQAq",
  "key42": "5qgiYnWdqEPFVwVkxvizvtacXa4gxk2RM5raTSmDW8qk41iu1MV67YiQ6Rfe7AbHtbjWxHX3sy6TrS25pFBWPHDE",
  "key43": "niN8UYDH1LMcbTwdevSSo3VufTFk6dfMBdeuEE1642UGAUviPjpbCw9hbv3u9cQNPaxFfGyME6gxMMxWh8j5efY",
  "key44": "21WUxxwkcvoz16HXuwa69NtuAEp3nK8j6tDeXXam5ukVqhhHPGfdTNHV5CttvWiZXjnLYUHKt24DGsVqggk7TMHb"
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
