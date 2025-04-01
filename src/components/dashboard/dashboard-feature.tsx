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
    "3BWDMs5Ew4zXF5QJd4rdHEKua9YnE1erfWCd7rB7na9BunKLwxXHKHtGbRQuynM9X5VLChbEpjQMkpJMtqQch8mT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zPLNdMNUnxDjDiLPQGETdrpvG9uZ1jkXpAMhut7EG6fqfivAXCvSNzu3PAjBAB8A1ifsEwrANZyV4UPdZisa292",
  "key1": "mtLdMnsSepcp1bK59VTMu4mvjXTqC2naxKAvrKJrekxu5M55FMZKk6yQZs2rfaYPzgNupgkPoTMHW4njb1NcDxB",
  "key2": "3q3Dh2MRTKGphboXBSzU4murp9nz1uMe8AmsGR6oioW35HiArM1vRqE141jKNaAFqec9ihGivqRZ1yP7x5qs5N3c",
  "key3": "2uzS1ZNfMsicWKAzeea6dfnV6YRmMvpDUQ1MMqybtbxneqCsMRTpBhui74XqkkzxBbhtGcXrkm9qSUyp2kZWMYoq",
  "key4": "2XZaPh9k5JZQyXLGGgqk8MZYbWLPZ6nbr62hzhK67TMiV6XgPn6LrDHdzafPXR5ZkVqACj3e7258WMxaWv6h5ksv",
  "key5": "29KudYgyugeiYAs8d6cFMF3oieFotvT58z9X6wcffF1f6fZcbkiUESXffWSRST4NpRwZyBSKAPNxMF6UorTC21sq",
  "key6": "46qCmuJRhXXJoLpFxae527FjGaCqLca2uGQcbYbuLsont5HduNqefWyTNpQtuKQtAgj2Xy95ju4xzT975bRjgRtt",
  "key7": "4qMe36J6BhBC2wgyAZrQKgHgVcX2bt3HQiATu5nfMEXN4Ey7TVVbYWVFqvzCmVU34NdhFsNA3kGqyHxdQchkny6C",
  "key8": "4xpyJUZa7KczUam2Zr2wDmaApoNL8M8A2iN8AWtao6wg38GyFhjdBwP5Kkm7rD4pmHzTpZd2Nm8Z8tyKd9N669Pz",
  "key9": "42jBqCEfzgeayxbNo7tdavWTnSyypCBrNgjkFdEfySxvLZ56Z3F4VJERYkDda5mT4nxnFVGvUHTa5Xz2SEbf5E83",
  "key10": "2eZxuu1waFfbgsSANG82arFHLyK2JnTfMMivUZJSiLpFL5PKYpH9ENFf5dZzUPGnkn4oaSLvPfrK94MV7p3QFvyj",
  "key11": "5G74dT3jP8efNNfh726bKtxRbPouDuX7VARrYGtr41YatFdbFBBqqkhd7p3ApCQStY15p13Jtww8nb6GmL6x9o3u",
  "key12": "RJsV1gJc9JCt8uyY1RWbpYjBT86uRtnmqV3RpWRchzHkYJqmLrq9TbfC3mt5QJPdvoUtSfxHojLaGAS5EZNcPrf",
  "key13": "352C9HyvN6DYJcb1uwLZV8vsEtqXX3t1p3aYHxSpfMC9MJ3qUxGe5XRgxEa42gPdPWD13HnoWzcRMpCtjAt3Hwe2",
  "key14": "3SasR4UgGUy1XGka8TK5Bi6224ZdDfRQx9M9NNWiL9PPuzSVKC8gRuR4K2zhFPynYnGbRuMnSw8mfcUjLmr7U2Ys",
  "key15": "3fks9VLH3xDX5f4URF4ihgac4fK9guA2NzJ6eh2x8jNAkEgoVJpy9DvbNphQCe79NqL3XLDBLywFFdYWAEqFtUCk",
  "key16": "61FB2w8kjYurqLcjj33prUH1BsWsjTDXRuxeWx2UWidAD7oARds7atccfGVQNUxoie41udD6P7xoshQ49tV8HfNe",
  "key17": "2TUH4fCEBT25htsscu6ubADSdBv4eoe2mAiZLqpU11LehX91MaHiuL2cqdw6yxNAcKNYV2QqMdTeRewuebt8epNj",
  "key18": "5ybzUvr7g1JpyTAABCPfUXUDWB5sJNff4r4P4DS7XJ3wX1g3v5pDDPthDFDsEtnAuDXcWkDMeLy6zzW4v53UHLF6",
  "key19": "2xMQgXmFmsYt4MUX1wwsxbZRDBGQKw3oMRMNXppQvKM88gjyZprcbf8XYcywLLguFzotUQUk9tf2rB5TB3JpMTTs",
  "key20": "X2QXui73sF2Wdbv1Hv6Q2UgKtMT7nF4Yn6yYhD6QCfA6yrpqefAR7SQaDw5Qqv7gFjKGkrXAzeW1awia4QaDLnB",
  "key21": "2BfhbgfVbW3XSn9AgWkVimdAbcFcspPPamTvJxUZyYqky8UATwqb97DwbKfmdSrms8hURsGqP5wQsRijMKJWSCqp",
  "key22": "4VKK3tfnrnC91pn98PQGB9HEGYec1LwaYBCsxvdEd24BDkmWUkTJ3CKWPgBXTGKjnU1Tj1J3wsEvyT93NZ3sAhyb",
  "key23": "3zwQvP19VVREWbQdUrQvZG3fyM9CkXRZWrGYr2hzHMSDBxhpGNj3WN5Yz35M6ZZAhdUWur73yMxXn5QsX5ycTEGy",
  "key24": "x9LjCHrQbNmiSFhqcFPFUG647msPEJmPtjJZQALkrZk1bSmEgT4dqRoVWN8ghshJt9zSLoGZBQoxBRYs8FYzsfD",
  "key25": "N2TNEYV6M1cfqa2LFN1eBiWvbVBAjKjFa1kuwWfLWVNH4o4PdhgV3njvjxSdbUUiscM1ppY4CKQo3NVtz4HCqXB",
  "key26": "3bcsE1BVVaHSbWToiV689zrxJotKN37gr71qndj8msA34obnWjLhZZ9ccdCJEmc4NwG3BSetHfFCrBEPzvsqytjF",
  "key27": "5Gv5JSpFeN8xUUoXSGE6mKVLwy7aqJF749KAsiuzttvDQoipMypP4wT59CRNWmMy52hkq784wFRM7M8STkXsBD9v",
  "key28": "4utRB9voZS17Eg8xKSFdP18adUhStUHN8EwJGH5WLGTWnq678VTqkHiApVJUaAST2e3juBHaSaxcdJUMCNjTZRPx",
  "key29": "4UiU5zhBKReS7eHvw8r9E3XDUktJBkoKiXyqFAha3KQK2jsoBXSEmoCB9czZGBjr3TkanveUwswtBXW8YpzjTHFz",
  "key30": "2vYLcmdBJuDYez4qfo6an8GNbsDxw1y37teuWs5JVytzxRwLsXfiTjibbwotei5844m8FJpezrLDx4JesDjf63qq",
  "key31": "4KxNims3nmBx3LrgdvgHyfUWSSHnvycFvdBeK3fiypgEmUyZBaZdp8Xm7ZPYZXKQFvaSGVXBuMTxyt4adGSdZXy4",
  "key32": "2zKueLRDwkBWo36BQiWoxTPqkcNxRUs2gK3AXsgL1y8LrdcnatdhwdymMCzEfHEnZeXo9hoNDtwa2Ajwg7pUkc4k",
  "key33": "2vPSpp3pnG3sSwy35B19bd5WhEJHDNX31AjwQVivntFwGTSCvW1QDFrrqK6R6JRPHRdG28UWSWKDLq5xBz36ukaf",
  "key34": "21Kc4Y3nLsUEbCHtsZhFpAaMkaoFm9Cwh1Ui6VsQqPrCmpoMEC75mqq4gX66hP6Edr4Ba6iukR5rAGjLqSUwQghM",
  "key35": "2sHrKZsqFNUbNemebnTcKbyya6YPbHkaLYcWJGPQ3MGrZFWAhvRmEiKF4sW2sUg4oYcCE8vYUhtBgDC8AfSuzfPC",
  "key36": "5u9DQPhmRsGq3NcEPM8HPG15bFtnJgse4Ufhh7Yu7ri6AS426x3jRDvSf1bB4YGujYNS3UPAgALbsrqsetNK3woX",
  "key37": "31mzKgV4tVQTKXNMzKYLrW7zamzVS6Gtqa6UWwBgneBNSsJGfEpqfqAAxG5hCKEGa41GBXtRwSvAcwtGW2A4Ndf7",
  "key38": "5uKwva6tneD2GdJRiZAm5rJtdtQf3q1tybN5fhSVNdsj9pdE6U3NqqzJSvCvJxNrYmHV8482hiNWQTc1C27BPrim",
  "key39": "3S4rUtUrC7tgbwf65ysRpe6rrjnaBC7YhgwiMNFJjrqj1rzkuGRJtV1gKUWfik6eqyW48vtJWNmQUZVrX2Zx4EA2",
  "key40": "5wV1fHd1qnRx2n4XQtZmZPPuUDogg9gHY646vfGBVvj42DYyw4x1YWYRZorgyx5i29HigxsakCgs8vcgvzvZ8e1x",
  "key41": "3QCaUxmy8wH3U5qFot1j3RFxz9uJ6Sws6SEjgHk2Rm2eJEds1qjEB9MgU2src6HTtrjxTMfub1y3R4uCuL8s778a",
  "key42": "rFBgaaoHpaNZVae62eKLB7qCHwihndZA3rNK2qZ7N11H65oabeHetB68dZ7unLQjaqsLKTf8FYGPCsNGUnimeoS",
  "key43": "23BEpX4kNjC9A4WXN3qjLmECzdtAsVp7wrFyRk8WhEusxA75BpsnGsLGH5rBfFKcQb1BNrq1fX71U8Apk7e8yho7",
  "key44": "5KERSG9juuRcvXN2xJGAesMAo5m94vAqFbSgpUvWSU9py6xUgwR8SxaN1hHAR4aTEWKcePHUG9E3B6NxhDWHSMdd",
  "key45": "zh3h5gh8DCrSSb95XvwKRhwLXDKNWPEpKnHKuEDMWfitLTbtWo1xLehjsS69vWgTy8D1KXQpsBjYrWBPcsPzr7y",
  "key46": "2yBLQUng9iK9WbuMe689CNcMT779j2uUxG5RqYvc3By5Tjum85oP3mmAQXznxudMv194UhDWCs8FL6Rg7bVtB9jq",
  "key47": "53CMzNtaNZ7Y9HJktQdTKT3E8Xvd6pGgUKu71rKJwU6fVWzSKzRpZBysJQ4AB2kxxFabXCSNhwWUsBbwyjUU3c6q"
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
