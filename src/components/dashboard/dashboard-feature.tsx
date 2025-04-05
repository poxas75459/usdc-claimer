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
    "3PGkHnXqjEQ4NgoLBCJy2H63pXgWHs9C1S6nSqoTkBqPxoM9LniyeSdeY7QVUFFkG5hBDpjn8oivy9g9K9jafwLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uTLxE2QDga7ifCqeWfAxnqBwvg891Ly2uGx5aAxdRq5wQtkdDx8tNneS6WNhD4KLajiEjFD9pEWtX7YNAaJVRaY",
  "key1": "ERfYhuX59b6esCkwxU3VWAB2Foh1gMjXZ8HFFT9fKtdtWA7XBVqpsXVFd9crhceu16kmaELyeX4MpiyPzgPzRXA",
  "key2": "678NtGvU9LaaUwYJ9JXq7fmTwXiSWEAgFqRDmg7Zhh31x5cNZjRDrVp4icRRBXHCkNKNZP21oFS4CVknMFfGUQNy",
  "key3": "4TYmMgGbsuv61PBTa2nUjUQtErMaC6rNjGZdr1P9BY9Ao3d5jUZgaFUGDDSeyMGoF1U7xEPmZpZMCSvhnR6zBE2w",
  "key4": "52CdN3D81ffj9cJ8XJdnwEUuAmJ2hCrpcKrR2jHYYhr4qrBDjkFZmuj67wiQ2wiXafeJ47vLCgZLxTHuynG6w9pn",
  "key5": "ZWnV7uGe5FYorpeLmvydZAtMb32DWxr8Px1sbkpmW1wcJgdEkP1LzpF6cQepQfxJ59pEDh7mtftzoZsqw7LFrFg",
  "key6": "HBHM4SQ5thnjTkJqDx5ox2csR2E1iaeikfZFZEUe7B6q9A8bn2bVde2vRUvXmoz2NEejR5RZT9w44iNEE1MxEMu",
  "key7": "o2UayMEeHHFA3bNdnS5na7ig9pRsSzrRTyJRvwezmDgAbpDGwPr6yX8JmrRHgzbxjbZ67eScCfimVH5cEQJjbwo",
  "key8": "4vJPAeYjoePxXzfYwqk6dRLJQYwYb4YyAVEc4TWqn4kvbEtuPBzsKvfiQdJzfAe4LGh3Eo1HQ41gJ3KKaLTa5KDE",
  "key9": "5jYBhvxRXqmMnNDNnJgb2ndgpqtWb4ehucgyg47hdVapEZXh9bZJWtWY4wRPnWzi45KeEQwY2pRRJMrGy99jMstL",
  "key10": "5abjLG5U2jGAn7sqhqLNKfwbSkSbcRF6ozqQcD7cvyCzQJfAJJmcGuzAsBUEF2SpnhAKthEXZtRtNKYNrARrkdTH",
  "key11": "5wF3bsnZaE4TrVoBa1P3ZBnyu71GSH2oJk5sBKq8JnmdcpdDwwXjjQ1reMimRF2jer5HEL9M98Krp4y1Tgvmi6QA",
  "key12": "5ouD5PU513G8Y36j14Sm6EMfwLxtLpQpSfEMZzTG2o6jLR2hd5xMNftnpVsFCSGQRFosoxEotU1MsoERo7sYfRWg",
  "key13": "39y93TnUxeyWxwqf2Zs65qwWzUSH4C8T7BckYVEgUhGBu5DjjJoVTFmYC16PDVV31YfW9EgtXXArKeBaobd9AP6w",
  "key14": "2g6MJqsqrJtzB2Yy299k6U7qyzy5ruCdmDM8ErBZdo5cby2nomWT6kiyq7wVdecauMQ9LB1nPrP2oGwYAXmDD17j",
  "key15": "2PTPArumx4KubsnXwWBN43VQVAPmB4LDcKbjv893o9diRD9n1H9PHC9SS1B7DXS7BnHMr698Q4h6nv5fScF6hmkc",
  "key16": "3ZdQybmzgKtjsACSMt9PY7sGAgcQvnjjKqiwcborsSLCKSRG7MoCp2banMmqGSfWFLX5VM27VufY4rTjMBDaQu7r",
  "key17": "3d8ohHYDTpSPcsiUWwnEHcB4Y3nFFLtE5iLGmPkBJA4ZPbDfJScoBVbmgsPheEx88rSrtajc5rkTfPXnPLaX2ZsU",
  "key18": "gnD4btKHUbLpsdrStxmpCFZo3rFenmDUbKW5AGMFjtNdg7BmMEqn7ebbgzPHDc3s6MH6P9EU2dGf19zyRxEpqRf",
  "key19": "4qeTs6z7sN3ndVrmsKK234LG5w3HstCZfBNfJ2J4Qt1yboMb5U26UV8sXVqBsWBjmf5BnqDsANCc3j6Jf6i18HWd",
  "key20": "5rgeerPRXzZtCiwRki2Ft9rAaPWTGGQSr6tksCBsHo7eyZgsivkBry7EQ4urD9Z1UQQikK6y4Lo8RhJy4p6tbRCc",
  "key21": "2eZX814eWznTGp1eFGYe7J9NgwMhUrQbq62TV71gPwvSyfUr5TsfEb5v7khWHw5NQaJkLwS1ukaCakz3Bf6wbRzJ",
  "key22": "4DzgyPwqgwimyuAkKVqSsskxbkVrDVKsCkzKh7XcpRFv22p3xQT3ggdAVwChwxnzNPbeByLTPKXrdf6c5cM3AeiU",
  "key23": "Lif9EokAbHPwZKi9kSSFDZhCqqRgpt1jZuobDZDg8oZ4uP8ouLFvjp3WmTQtgyEcVXphSBEVKP2Yjwc2ybg3mr3",
  "key24": "37LoVwuZ1LxaWQVxng2FLfDC1bahKatd2q1N5LoGD4X7fQp7MZ9nJpcvwWcMjjeyYPbYJrcq9fHDJVaVJ5AhdAPb",
  "key25": "5FJwATqWdF9bWh4Ww2LyE3mE4GPN7irTowjppp2RYXL1TqK5BewhonRQsq2uEEbK556JjP1yA7LRWfNxLQHbg67x",
  "key26": "4iFd7sJqfeCK5oz1WZHeHv3BtJyDNK5gp6gvfChWtTKpaKCNxS2kvps8DHxFSkep5rDJ8T6JV9FPCuMiaF7NtJkb",
  "key27": "4pN1jyAb8VPJmMc3xgTjcnu7TMD2aYKdGwk7JapMrtywxU7WaLPtegg8KcAxDi4irK2YqojGY2B1Q3LcDNPZtnsG",
  "key28": "3xwUNqDswxrU8waDhaZosNo8P1qL6zNa5ovyjEddNMgoGCmjdp6WoH5gF42jnq9RLQ1dZrrin6VoPYD5zHhH9o3c",
  "key29": "29VnQQn2f4iyJAUJnbP5QYZt2yiYRxfxJbnSdsaipdT3UpEJqik3NWddhphko5dtnLS7PHkN4rPmWKJLutij2sL6",
  "key30": "5DaJPcSBvVj5HBWT8TS2D3t3wMubEKUPrMfASo7CtUsixX77yYyPVgfVLajpAsG7egY8Fbaj6wDmFTYnKQ6g1G6D",
  "key31": "QFWSKjTKANbWMk8zmv4w26jCPyu3v34U3gE8V1rJvjb7CLNAqDQ3E5DF8hZHXDZVfWEiVxcMqAB1wqFRr5pg8hb",
  "key32": "4n9WqhNkRViCFqzYAysAooERdKKNiR74wn9CpKfVs18xMRfpqQ549xVU1mPnCE8wcmtsG1NeqjiHwCRYqfQuhBug",
  "key33": "yGqLeQug8kYfXPmboaqJ1eRmBKdfFCZDM5mRVvEK5TcZjxkJPZewzJYWifGrsUgzuZZHHYFobd5WscX78ZqF9sQ",
  "key34": "K7fSSEToRsSHo43wMj3tLsgeAmt7TgpDG5dDdR8RZTboiHwMsTVN4hTh6vXSEzPFkfT3SjCqFZyFmG7Yyxgfgjt",
  "key35": "i8knr1zfxvvC9PF5UhnGVNwGkrkCEhLgGYVnZ7nznS7quJQt695dBwbaE58ofPsAh8Bsm6ayCAttNpQRpqju95q",
  "key36": "YyRbo3SZe1EC5XxH1tSyjkkMiGYdEsBDKZMtFBYaCx5PBtetdU2WjxLgok5N8kZLRsT5a2D6xtaJfhohv8oNrD2",
  "key37": "4SijeY2XTY2cJtdyk2TAzqy9s57ppjbGdYroyFRNbE6g3wapfwejmZWMhw3AsK4EksycQi9rph5vTiQBT8nJnQTi",
  "key38": "2F2WjuQ1dLFF8q1uqevENthXzquN78Re9La8BLqRtyJ9DJarrdzhmeLr1pkdumMkyPfaLNQTWDtjNfaVo77LvppN",
  "key39": "5wne2fWo8i6FzHhKKNiezmH68dwyySAxMbXMW9yE8wV4XfuzzpM67wKcNrfqkNywgXWqYJAidHpGj98L9Fhh7fFp",
  "key40": "5cAooXBZf5J5B6UUiwiq9DZ3jzupoz6axdnaSgstr11VtASSPQMaoAJmAewtYYJZHkSgnj6VSRnjLXZhZq6e8hNU",
  "key41": "2qQ3CmXLJKKXeSVy84VtfxRkeJM3tWZvTWQ5X7TUBBdgF7kygB4ztNRg9ZXLwqNXbv4dUviSv6ZMpj5w9XZDvC5y",
  "key42": "4XnBrwLzAVYtdWoVVHQ9b9Rry8TfanFu4y34mfsTEHC4ukwHZvpqovXF5dNNaJJmDMucm37QDXBmka4LhwkS9jPo",
  "key43": "2AAc79m4jegPPKWgXuAY5iQ5QUd1MCovyoe9jzcz7hSo1RTo6tcR9CnNtWcmGvbKYpb8ufSgKWeopTNSr4chN9Yu",
  "key44": "2AnBzpKAoP8HvBrfTsAkGxTmRAqf5DmY755kfp2cjP5Q9uiFQu6nATcyWGFCRXTMnbvUiaXRimbMEBkBgH3jNA6o",
  "key45": "5XVtBLQz9fF4F7dDkjxd61GNf479PJj2jV9wGBidhA7JhqUeF5QSNxGX6TreoEzjExntyD2VNRjaYmhdJ7LkL529",
  "key46": "3WG9AVmCPJ2Hrj4E3wri2KB7aGVctg4byHnCPECuf7Q7GPJQ9xcCzEJm5Gp3eBLHMgpMKh1LG1a2RbrKp3ryqZ9M",
  "key47": "38vzXfX1QsrqWHnEXo8okZbV8Hc4DhSwEnxpQqj92xmhitNFbcexoztsdZwofz228PMSdR2Fk3Gr8HeX8sSsb7wu"
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
