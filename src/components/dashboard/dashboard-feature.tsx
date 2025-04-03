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
    "4BC41oAsoYHbuAQ4qU3A63QyKbKGXySGChSUY2Yeps62hapuKPV5yjdyp9oKtGR6U3WKrw27oUpfvjuM4kUx4zhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pZgp1E1HZBRfSX26oDGWwdh3suWTSDLJJvrTLsSgNkQohQDvwiaRXhfp4bAHkXw8go3XPGirHfzPdpqWc9ZxCkD",
  "key1": "4MjCtmANzUd1bUTmenApPjH36eJ7YBtv6Vnq3EZynw5F6nZ7PD6YhsvMb9BjDt45vnSBuNKJV88j3G3Fft6CxWui",
  "key2": "47gr5eQ42bJhHqvbDPm3gPoVPteKPyXzXjXu2M9KXJ4Et2sS2u5Rc5m37AS53ZAZFtZYxKpFZB8bXpZVt4G1ykuH",
  "key3": "2ZPA5Wn2c2JPag92SJ2oP2G21rpSEPAx6w8x5bt9beAaV6ke55Dyo3npwkMa2CJDstAxxAD7NAzM73C5GuWSqkXQ",
  "key4": "5VDJXRajxXuGfraXLGyv9CtBtpckoLrj29CfnKSkVUEcKsuwxtLHCrTYQXa6RUh8TiikEttaXaAqfEjbpCyukuME",
  "key5": "4SYPJiZ1J5s1BH3E8xqPiKcJYd83mxkXDWspXcuBJR6r1zYP1Ateniq93VksvqNWY4u1zjSUbNwkd5HoZu2U4Rmv",
  "key6": "5piibvFtLVqkJP8EMHWU4AAEjzWxfrhku3ZJx17XjuMRndJk4mutL2KSytJ7Nq73yY6zE2ydjrn91y7tWfBz4MPW",
  "key7": "3fdUdK4pxxYRRSrne6HmWEux4AvxcJnDZjXx5RMNMcoGY6paTwT6k4BsekKRrUJxc1Gg6btVZuj154ntF8vgFBed",
  "key8": "i2tDuwTcwvX2MJazpVQJmVPfoPPLFTaKW9ujQ8aEKUG2XfjjDHMJ1bStbEmjpv4sZMqu2GXBxginT1sbyUJBb9k",
  "key9": "43dbqCZMiLgWS6ER4YemVg6fEjZDvkdNEfHdsLPL7EvV8cZG7Hbpad6CFZ1PBqLJF75cKSQ5eKc6fZRCQgKRSFBB",
  "key10": "2wrUFQHsUk87vBqKhZ32m3uSb8ATLL2GsjC81PqbvYNytUCeZEebVnsaUJ6x454M1xxoDPtR5wsDxwxVdtLWstBd",
  "key11": "3wtg3QQuRxMZCRUA8mi2J1ozT51WstaLydvaG9ZUhtAfuXX7qc4Xwz88G2Ki1UpVdP2ciRF5a7C2xexa8bm2nwG1",
  "key12": "4xwXnEsErRQiGTDo25vVdkY4H28kzZMWRBd9jC3CwG2XZezbc3vC389a7mM9wYoRK1y4R8tNb7jzPG2rbK1R9u39",
  "key13": "3ba535drgcoxrLn5E4d6UK9HFkHoqmFsdHAkaYiy9ug3z1Er1m4mQw4Sntgmb9HLcMg9iUvAT41WhMVKqxrhsaDq",
  "key14": "3XJVimZbbHQYkgJNgNn9SvcmJeUC8L6PkSFN93daVvfuNtgnxkimpzfgHUG549on7ZDU7rFRNpKh4wrr9v5BAXVN",
  "key15": "stNnAmH7PmZBfzkizq3tqxGQAtU9rMWCQNgJPFLkvjHsuS7DSZAdMnqTuyE7buGYroivZ4oXkHhi7hTQjb3QsMT",
  "key16": "65zKiiZLPW3vtRMxMJiceEQRMz2MXaa389pMeiNfbqPq18rNSCPxnjvqaJJWzX1uFMFdhPLJVvih7sCEWb6Jgii9",
  "key17": "2QAnVhHcmub3H6Tf6AUqKvErnHZJC4YSuUhp1MSYoEn3ZLagmkBgKXJ6NGhAbtHoMv1aHiYP8M3zNQPbArjCoLph",
  "key18": "5ExBeJpDdnsWSJoGcSUmURT811irX5t3G9ebpN654SH4RanpSxpGjs6s9zRM8bkZ9jcnBJsvddGWeged9aQzCk3k",
  "key19": "2a7sRFsKFtqrt9arKa65aV7LkHva9UfjTPVzk44whbW7GmLwA3Y7kWVMw7re1oTXw8nrhbyi1mtcVpBdFAULCCqP",
  "key20": "2ttfHqh3QvmainnKhxiTk767mZkPWgrs7hNEmvduS3d1UKJbbgNx5A1S97ybB5Do9Vn5BxMwMgm782HnfrzfcTQc",
  "key21": "4EGrQP1bYMMuDcxotShNxq8gqQEKrje1LXNNWdnwqeuQ1jAPKCvoCz2vyKVxtZpuuvdnrefkjnRuBGcJShqLxMe8",
  "key22": "23RhykthAbRjo7hGcQV1eYm3acHXtWYRnSP4U4pfgzcxio8JYYCbNS2X4qPKbxKFmUJgziDi3gRtLTatkZHHb3Zv",
  "key23": "LuTLCN6vTtWAqVNYQzqNTasgatV4gYy2CvfpWhyE8Hn6MqLzZtzCJJ2UvqB93injgQxYUx49kAuHBE6tC9hdq9E",
  "key24": "3EFT8M5HevmjS5dyUrq9S3Q2E4BUbfoav3ztpRarHziwoLLdVWEkj3LiQ8P1dN4wLa1MhXqEmiRd9vDUsWQvYBiN",
  "key25": "3W6X78tFda3FDd6zvAMvcLZ3zZpKxUyamPiRdjRy7ywPEA98B1kXjVdxo2ijupfAFZS5oE6bANYbfs2gyTf5gdqh",
  "key26": "5kvTmG34j2K9DpQ2y59PyBtnXNJUi68XL1h3xz5jw6sGgUeNwNVs2QWUCpu6vFbDmvXFCvtDZUQcANGiuvMo6WSH",
  "key27": "5A2ybLkkhh5EHZrAHvwDCcgtpNsUuAnfsv9jGRUCzyT7wnSRp7bgW9dBNvKGLq7f1L9jvRD1WmRsbE4BD4TyHkW5",
  "key28": "5axszD2UikCVGzY1u9gvbnoH2QAanMoq1ko6ubdp4tApmEMR4Xv6AoBQkSQotzr5Z1cgBcm2vyKB45Ts1rtB6Gyw",
  "key29": "4hQvwuzwo2jRkjEpzQu354NKgCPLEtQg5j26XHjDpJUW6X58WTZ7oHBB57B5FwzBCPfFmiF3364AT65oyjsc8DZD",
  "key30": "WC9dKD5eHRtBVbFr2BbBunUV2PPJoGugNLGkdMgPX23kpzGF6geNj1ZvtitCBnK6EiaNt8g5D67db581YnnX8xv",
  "key31": "d89yF2sZgUr4zVwcFbX1Y7UGtNKRVgSmc89at48CMCAtDTuhnR3GxuAiJ2vNz4chz9ZMtTkAzfL7qSs8UypScq8",
  "key32": "58MHDUbcTy8ErAuvGYCbtayYc4bjaxPWMHLoQ6NEPZjRPr5bdVwwyRoacSnYD2dnt8gEfWfdLiaVxvwwqpy2FRkz",
  "key33": "4T7dEyu6E4baraAZxHZ9VDpx2EeM165p3wtazBGYbSyTGBvTupaqW6jAjjFP4Rccvc83hCA2xHm4wxQy6JCj5Zpj",
  "key34": "qzP2YLd7xRaoHBmRecqECeT4fhj2652pDGaeZmdzDigK4Fwo1GVQAR2Vw2kenyqPqdqX15No8yeoZEdaUqFadYk",
  "key35": "LUFKui174jt88gYQ1cnXNtZY6GUsY2hEMhntUZKyHKdqZqjDGgNYHkjiSpxpNA9o5mnD13Pf2h41vcGBSENYD4Q",
  "key36": "4AXTtSSes1vKiSEcyv51q98VeVoLYDp6aVRjwZteSXiwuMYSWdy3YKpMiA7U9HUefB7AdBd4aXW7FY2967pDsPee"
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
