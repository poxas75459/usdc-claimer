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
    "2bwb5WvseCio9Z78TDmbjSXi15ARvuzmKNSG3iusvLik6s63ucBQLT83RntTRZHAodCSkRYkNbNigaw4AB6VaXJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4un8pBVT7mcQEPdDXJyHJoujwYbKf8mqSnMPwp86QTrgB5vH5UZPzT8o8jnd16PZxFBaUVZfdeiSZF4atJLSJVkZ",
  "key1": "3wCy1YY7rJ7zLYtcANLRFMNPsufdoSAE27Rg2RXHirnmdTfaJmfr9NuepzF7jgpGSoCcNzatetiG9Xa6XzdY3Evo",
  "key2": "4K9Dtc82Apy18xfmjmpoW1NT7PSccFU8GpwmpZGsGC7TGTBJZbVYTNo5zJTXbeQqanKNfxyd4VH3MdM3dKc2UUSC",
  "key3": "2hoV267L7hNCWqBpCZfJvpv49tah8ttLNoDQB1iG6qrbr482W6LQGfRoST1QGXivTj3BMM1JB5pTNPT7TcZJXdnQ",
  "key4": "3NvGtq7m5AUumRobKwhdfQ4kd3a6WtzxA5GVxBnEVbHoy5Kgw421qPkeZnJaiRK7pDxDH3GAYnfD3UnCDpBMmKkG",
  "key5": "4i47S41iQu93wU1s5TKyhFZPwVJA5D7EsTDnZ8M9XMoadV6MxEbzqLhhSzdEvwetfgKUxQBV6fyiowtTVBvNRbdW",
  "key6": "5WfbWMPoGVi19pXVFKTyhzzMkKPLLomZiR8nv7ZSDpgK1uiECwAcYgCeTV27eCxhMCsS7bk4oM1hfQdCzw2HKZcv",
  "key7": "5wbmMSvFJkE8crq36HfuJPYCGBEc7ZAQmqaKSVx79ttaMxRNdiJN5RxKXvZKzWEvFtdwzrUKej9GGt8hMYUDXQ1Y",
  "key8": "219CrCQMqANdLrLRXJpbtVHiPhjVBK3w3h1v5YuzPVUnEUBxHg5eLqQQxnckqPg84a1Xsyhc3jwrHLX1gJVQ2jUy",
  "key9": "5eUadbRcS5AdLy2UjvjAugqBE6sLbrT9AoQeVFxhA2toYbFLf7BbJ2LcKBRvNB4Rmab9nDGr1VSx8dMnXcoj2nLN",
  "key10": "2kDoZG4yS5VpgNoHwMoLqL4DdFrFvx1wjwyKZku1EACefAjafa5p62rYiVipkdmJ9i913RyFU72smGjKKsugDndE",
  "key11": "27czgoTgArgaTHwixBsXqwhKFeZ9WZ6FwYj66U4tRWMxFT9KSt1wgrtJT6PcGiqBq71fxSB9HsJgST1BtgcBebzA",
  "key12": "5dNkgm9mXFJ37FGLhZU2zfmy3XLH7VAPYLTCukMmz2sgSXuc9YBW1z58RNEZKJSBPzw7U6rNU2TCYVUtMzcSa8ig",
  "key13": "3fcWnSCZMACJTKsRZJMp7LhYna3tUAo5DYZiKhHLRacV4Xk17XjDozqNejEKGGatnM9zzor5qWUN5oyEVZmDjx5n",
  "key14": "55CuwwrMX58bqoosrYWjVrzL6oZnW2GZu7LqAjvn36KPYa9Qmi34hfEkHc1YiW8g9H9HWtsGFgTfp9mmuDEsZfSv",
  "key15": "LmMDzZ75AQJU9ukh3GkHa18rVEsVBtyJzqDnntWwCd5oaNxxTyvAx1eQHMLdTxZ3X3Qg48XqCup8TL91yHAbUMo",
  "key16": "s9nicpHYwMHzA1prG9QBbWgLVAFFHrQvLkyPCRm7ZZoFSsvgJAdumDUfv4ERMQLweKaLd6Kj5t6k532bdk43GWH",
  "key17": "5JTSvYTxgpjdpC7A9xZYSErFHK8uCLdWtEc3HSgmhQ6D5g4ccntppmG56cMiuLmD1fUCHWkuSjAf4um4VXEGWYuD",
  "key18": "4BuSgCMSeiwC2eTdEgxU69b9P5JD2S1dGiyAXZzz9h56hu15CisRGCSbKbxfh7ZbhFWTLg8ALEK6dSfZWpihbyDR",
  "key19": "5MhouJLrDcMuica694L7ojBx1UpYdvSwbPAdH5bcSuZWBUwktTcETJiCJePiaPewZ1nCXy5usMjisKbhWZpNXH94",
  "key20": "5GzxM2WasDJMcKyd7CexYL3qgcCn8dXqZDnZoiUQdeqBzfrRpKENqMSnCtxEjPmwjSAKec2WxM4iBzPeHt7oUjvV",
  "key21": "48ib12dEfA4iUuxcVQB4fLc1o8c9CNUzoEN8MMRFEvkhiYjtyT4UgUx9qMxC2mTqLrMz7ycc1Lieta3soePCuVEg",
  "key22": "S6UhwHREfAWQ4GTi6jWA8agDUita4pFPzgntobi53Eg1qFtyz3xnVt9Hkjw2Ct7wLZkUHmKa4ae62mrM72jb2cx",
  "key23": "whfqymGbbSCAgqLpUyQNGjpBK5biMD3HqAU1K8chwixPGr7FLQEpBNvS7xBypChtaaF4x4JUZBnZgKvVP6ee5up",
  "key24": "3nqsG3gZ6p6UCkUrVoqAuNMhaeTXFNbCasH6KnPS3Ai2gvjmGmDh1WBF5doAJnNBFNTvrooXnvR898PLQicTdbMR",
  "key25": "3QXEvtfKyrN7b3LDNDewxDbDA8NHrAqUTArfg7NDzi4BHFLBewLyTwRH2mhQYWh1kKLjHnNFG4FyCsCfy1aWA6gu",
  "key26": "KR9dVWkL1DhzX6GXG8uV3wUgZPRGP1hkocDX8be83wiEJ18tLnRVhQbe1QrkYCKcay59wQRkcmtZRjnES6XwctB",
  "key27": "3M91L6ndmH3uHDQMf5m5s8wDyoMyJ4cLT4EeoytEPnkyfcTnuBe23cGYKSqKoNpinpynncTfo2qDCvHfHZpYGqWN",
  "key28": "42ekjYao4RGK8uRtRV55Scud78J4GYHom6AUajTp1bzHwzZvT57new8y4kATyc1dQDSgmLJ1E4Ejtw4rSUjqWiUt",
  "key29": "4tGXJyRnBGQZ751yxeynhjiDqYoTMQjF9raxm7geSUDnZU2GqGFKUpLAQDXYyGpvuxT3mZMMnCaZ3QSSYtvabRdb"
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
