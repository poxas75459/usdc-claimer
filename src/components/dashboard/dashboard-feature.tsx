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
    "vEb9Rzmi7MZCgQtWbVdg6AjQWfmfeHuL5xvZYrjg15FJe6dNmxBGhZCAtwY9CkMzbNv18cRh1Ew4vaCYhRBhsfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tST8kGFJmPXRBHjqViTj3mQBeQAcQVVjQK5isw79kDic8PQtBjYueUx2DUNhWXu6wMSViao71NgEMTtcfJDiqKZ",
  "key1": "2UYzJVr8ZPHLVuwDvHAg86B9EZbzVmgHdC2eKW5qWThzyBjMGewXa3mazbKCAuyM4bxxYm3LbtznqCSVrD9fcfxq",
  "key2": "2UcqkzUTQMzd8rTaojXgt57fWxZvfSS3qNW6zPPBXWC5cs2kBrM47TYdndzxhFwjDtu2HSzWh1HGLxEb69cBTbaD",
  "key3": "5apEbVsBMgy1rMyYfMxaqt48PtEVSbi8m4iHVLvorVdegSqnzzg7aGr2siJwZxDueHffMgLbk5hR17fbxLGa2YTo",
  "key4": "5j9F1PSmzGBjnYk55hakJJj6CRyb1cd2ZDcFsXfjPh6UATGcZSWc6H7ViEPUzktnotVZzRjHjtAcYTuZJJVbAqmZ",
  "key5": "bdwWMRwFBtdYxqwrHSvUyBv7JznNfBBpjd8S9Xq6Tk1qsMkwnbLN3jwtT8Ep5CPSvyY1K4JDkLRjxAAiW9Qce4J",
  "key6": "2ctR1j7UyQQiBMLFvbDpFomaosAz7H67jKnYfWBB6xpxgFiXQWggCP7SUhMU2uwWhSzVs6NwSRdvzNx6dx2jBkY6",
  "key7": "5FHYr7V5FyhPJ6unrcuxiJULHjRwrrMaxAwKbRELfHoqUWxjBZMzU1oPdyYgXfk1WfHHh9oNr2h3WUax4iWPivQE",
  "key8": "33Y7Nad2ro8PbXkfHereoBwMTMomjxedEnUHysY52zCVHDvCimK7EUijSXHDeMLjxwpD2HWzDj6aPYuSZgBc2m41",
  "key9": "2zWBpYGYWqJAqYnqJhqFm4P8Mgd2CTUhhBoqpFJtbN8aqR887yoAftadMqaKVX3bP78sWhdBwwkzuBvM8K5FhtfM",
  "key10": "4m1Dw6n8PE8MbDkiMzvKd3ZTQnMYbAAtEffYEpwtMuXpanYQ6pDSaatwSAipYjgTj9uhG5nceC9vqpEC1YNgR3pf",
  "key11": "R789QE6N7Gw7sLvzHLHFZ5E8oDxSbEKFjXqBco19te9rDdh9L2FsyFh5d738cFCBMg9Z4bEm6DdaxVH5hXvetee",
  "key12": "2p7YnR7J62BuECrhC1KTUsKtzFn2S3vrKrJYvzZbJcQLuYmDdhGBGvEPvCPq635ZYxXpPbMy5D9HFpnFoZbMQr83",
  "key13": "5hppapBNA3BpQWJ8g8iVG5JRVBb2MCGZ1rDMm8travP2BZKUmmLWjn7sx3Jd1cxscf1imQ5j4qEmWXUvY49Hnadt",
  "key14": "3zR6q5fuGNM9rHtcrBaa1gYNGrNuZ8gAkUCjGRcMhUDVApcwdL2TuACce8dyHmMCrZaKSbvMFdpLW72EUWCKXqDv",
  "key15": "2SeijF2n4Jr6TpB17731U8zoNoCRsXyKPXrGt31jWuWtocHe4TwgGqWMVaKXHugtgA8Qct99Shf53g5jUsKrV1HA",
  "key16": "4K4U5juucC5w3a6kWHTYfoovm87PNgotYmhVawzLnGSPunhv1pYqWCwRT8KnHbLidU3JqMYtHDZTUhgzFzHMwuaS",
  "key17": "4E4kvDbg92LSjijVEW6zr7ChpVAfsfQTwUPL7V6i7tJ4d4f4grCkQ8QEoZMZdL8mrJjxVTgKoVcd5WSq91S6uHBD",
  "key18": "2ykqBMqvKVods55ABGs2447e3xJLeYgTYJgvSP1deoW6RmP93qndHwZa14PP1r7S8ZMi9xSS4uWwuByhUpYs4Bb1",
  "key19": "4rB2STVRwU57ykYKLCxiTCvXdKRD5NiGxB8dEG2NF3A1BH52s2XVLfUJReBP7QsJ2cL1pJmKG9w6E4im54pV5WzK",
  "key20": "2mRL8nLrLbkfzA92ubpLC5wkxwvEL2NCPEHokhQ3rd5LDcVYSz557vr8i2RN6LU2CuhqDfYXe5YCmuxLrYCGnf8q",
  "key21": "2k76DNg9PKTM1dr787EPU4AaHQyYhTmEKs6C8ShLp9375duzGRu8YBbG2NxLqApYHA9ufoEsqVZjNUC9Vs7APRJZ",
  "key22": "31RSio738FYAkEfdgssvBDyQ2DqbzEi1eRxixSo3LN4cq8JWLfTFLeD9zGQWpTnYSyKgBRXHkHWbuDzovXLJnmmg",
  "key23": "5xpWYT9HoP5X8GfPkbYzxRCr7S4th4Pm3JzRZdKr2LhtdUniGKMk68ixQf3dkExJQUrdPK7RV3MXyPkHqhGPF2MR",
  "key24": "4A9pkKua6Nfk4MMVpM3opSrSX21pcY8nodegoQKm57bAKWhwXomKnisTTgrnPyFmbSuK4doMZDy4q3JyL44Ditbv",
  "key25": "3jb7G2SKJpJ3PpD5tx25V9kVA7iLTKnxxrLMRAaD93w1yLpiytzyVDprNQq3o9taygQjP6KRRAAETMhZsxc3n6H1",
  "key26": "55u829GAkeK2zeR9weBA6FkNpZw4G9Cd4ozKWs5EyqdZe8mEauYq9MbTM91W6YCHyQ8ciqSGUgNPVnepLfcQMFDG",
  "key27": "3w7poyDdQmVBqseCqtec6SxNnXQKjkgRcqqRcAc1bMeAWXZ6adQRU1dsqyrSdVWe5CYVE98G2dc7LTwgc2TniEoZ",
  "key28": "UGsnJPzvciwbSZtkf9xhFypTjdU3aK2vjfYZq37VzErAC1XK1t83AQAxZs8mgJzPdvGxbMATjvarfXzMm95GWLD",
  "key29": "3Z9vWGM1csrLYKj1zLRKNJ3a1gjkLceqDFwKVpiyZqYHQUz1KuTAW4bM9KcRyhgJJR5uB8Kehd7iJ4cBtdvWBpW",
  "key30": "5WJ2rP4Z5sMJMpq3jDhe2VtS71EKJTTYH7aSSq6fSuTMQtLGkuF1rxYx2dMe4gQswJaaJRmHBhZJwDrGrtqV6xrT",
  "key31": "2gbsrFZi8Mdn5MyHoUMnnyaiY6NFyZEdbJecDrHpPXfLvCbYPaqVMr3C91x31qiezTYcZwRHzTQvimNyyny4yrb4",
  "key32": "5hwvwr8gQAzzZ7tw8d4cwySNuJLhHefUL2LK3uppjratyMVrbMt8i2HVQLkRE7ZuUqnrtRYujtV1wSB2WaW48qCq",
  "key33": "3HHDhZq6kSt63xod2zyvfmJzPTvMMFWx8JYPy8TzGeiXkNPJ4T52Jir3h7hqiGGEy9KgAX1jquVeB55gP2dfZqDn",
  "key34": "4cqwPNDHUiB1BTXQX3P1ozwxudLcgSxxeBsjSZpFuBvREadUnoRsuRFQKUaP2frbDB9Yg6NUMPtR5NanPQ42s1S4",
  "key35": "5bzGFLLuLXGtDW3URfRDbjCyBiP3S7UghKfVUAPqiU6qSS6rtDeurvz6cU2AkxxcPYvxVdtA6tcKY8rLqMBecFvC",
  "key36": "3KNPC84ramF8qiz8Z5yB1NZrd3rS8nA25WZ9w3D92Tn1nSHLY3tHNoTPhGbFnSnsShpG3Cu2YzpnLbzhwz4kCRzh",
  "key37": "5JzPg5tdVsYq8xCKp6xJeeLCEKvFENnu7qcHGPP3DffhjyYc4baGv2kxfUFAtm1MdgXpJ9veFbjaEBneWAiYc2Dt",
  "key38": "5AB6NiSUTEmxZCKQ9u1378HWGLMX9ij5CwWtwQQ8Nqb26BFCQdknzeUapXovnkhxLvrPy6xCxvNLcAt7y7ibp4jL",
  "key39": "9osuMhjGJmKQUfSSSzijtahnAUqESKujCEpzrSxg6y1kAJqjpB3dGMPCRqCAeKFC1CHEgbdJECTGgCkLdsSDSpE",
  "key40": "2Vim6VwNXD1n9jNcL5oofWCsZHyRikGG3fxBKrrpKCpSstWnFyhbP1BkbtUW7GnwV62gDGRnDSga6vchPW5UxnWm",
  "key41": "5WUr8xRNgtQdjCANdQ6d514p2ug9LKpDRX9HArDgieQa5gp5g6ohEa4MgTupkXartwWz1M7x2MGVc6iCvVdXExYj",
  "key42": "3KzHGQT7uqpogzgXMV8DkgFX6KF8R9B1txXUAH1kaWiAFhJQdXVvDPT3e6kHLPPPSRQdxyc9LoEpGxZr8rbi71en",
  "key43": "GJbLFGGryoiJYtVfg5JeHqbktxzz6bnBYcocQi9H37VRGT4592rXBgvUUjAdU8PfXyfxzPhTiNa8F4MDTh6vkyM"
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
