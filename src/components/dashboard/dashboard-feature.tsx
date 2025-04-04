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
    "2RKLAPyoYScoLbzsbM3ofZYiWejrHJokyq2c9nmCsQVmUoG6cdLbEW1a59gdMXgzThKYEmCFdrBmFE4YULBvL2LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ak5uQus1xx7pTp7E5KugWgtoJwefjTkXRtBQhhUe4bWBWQCwryokcywjenwLASmzexq6dFtcuhmxNFPEwLLLyh8",
  "key1": "EDLHsE15rdrRsBq5tbsJF82jsnPQTrZKHAdQ3uona261ys1eGGNu9XjzFSzAuXS9qVLevG5VnTewArrXsWQPuK3",
  "key2": "4BA8TJWYrxeEGNhaSp9QaA4WxQdW3aJFXhtVhSTuujSobTvjwy9D9ARSTywFW9oy1JMtppG1bkUyn52MhZxUYoUs",
  "key3": "3hvJ148Cv2fdD6Jr4swjPsXRW7FN9bAG2R48idzDEELTkU9NiMy9k3XpPKS69HtVR7ndChLi52R4CKnpTeCiCrCV",
  "key4": "sC13nw4fL72dKDQF2nQNnis9T3JFxWy8hN8eRk5AUeDiaY23odyxnDVtkkhX388Z9WusC93i6FQbBcnHJaFxvH6",
  "key5": "3JCsYkNEjyZBwer8nWY3d9KJB4wCyRXt3Z7J6s8nLCPthkLH4gCTui8k7ZKsL2F86ogLvnqSeaQQeHGrfSc89vyL",
  "key6": "5ZTuE7yCoDvM1M1CPkPznyc5f9grqLbC4knKs5Uao7xhH2uHYC8xL1coxBsqtQZUet7wUdk9dXzzNm5K4CEFx1Dr",
  "key7": "46ftw27WS1hFQwMZ8aWNAW3mgeGzpU1ma5hnY7uNP8BEASdVKF6RLtdxJ6jZeQFv9X5X9RBTUfWo31SDzp4gjBpf",
  "key8": "66crq4c1GVi4g6Xoi6tfDVfR7SB9mUUKpqV6y97J52VGYkKeS4p3U8rC8YQ2XVN11M7N56ng7qTFR5Wm2iir3zS8",
  "key9": "4kJCrkQKC2kvqdUxUh911nejaEdP8Un3RxRTG6paYn8ukSHJVLiWcx3f6k2Sp2eZZxSTUaom591FDdrViL73pRu6",
  "key10": "2LenDEzgRd5rmq2MAZPRDqBeg2XijNJGTgJcJNDKbxMe3DxNVa1kxyaXR32YTHdmwgstNtcX3Q2CqsfbtKAr7Nwq",
  "key11": "45r29KvnKs7rc9vgGi2cG8rsqcbivCs7GH4T2SApowYng8DAbFs974tNc64oVbJYnBUMxoc9DdRaawzukX2B3Bn4",
  "key12": "2qEZQfCwAU8ChY1MyYtpSPmLqoHnJJHfNSBzqHAnZswvBY3aT1fstYgKsQgrzY7ajaHrcgjTGrcBHUUsLevXH4JJ",
  "key13": "456TXoQ6gb7rY72RvF4q3ptffuLgCjK9dZvbCZ1Kzj6aFtR5qr4YvG3CzbDdqZ1yDV5t8i9QHobtPvzCCZkvYAqB",
  "key14": "5vTb4nz8h2339Qqf4WMHJHBBjMcsAKaZJtW1cHeowyahQthtCHVRv6mFJwwrmkve9j3r9Xdcd5VC8yJRMAhqo9qb",
  "key15": "LcXCSLz2uMHDSU2u1saG5q15NWAzUrxEwEn8nTvQbuh1xmDxYXvsw6m6BK8LH81Yp2JGSofsjUT9cVRwxT1w4yK",
  "key16": "3P7acmTGiGoTTbk1kYVEy9rXvR9dekHJCzHjDLhiAKmKHbsjcA26FScCz4vPyxkfzjMXKRSiUUtrcEuJsaVjjs5v",
  "key17": "25mJQeENycfLuhhhuyL6njgYAAnkevRGWS2krNF2UUuwNfQSW5HTMs26x7MMEhD3nbbqYexgUwMX8RCtW8ydqBti",
  "key18": "5sSmB5jeSg1pLjooCUxV6ZZoVvGvRbkf2tL1aYX99ndkkgN9dCUNFBrqMngiVx4RJ31WxucffkdmiMYV4k53qt1J",
  "key19": "4d2EjmRFsUb6B5rK6T1dVouDhwwDRL8maHFN9prwaR3amCazm1uDcAHAER9PVB67n1LKHmpURnhyhp4ob3Sqv5wU",
  "key20": "44yCmWYMku9tFegqJiznaprsWoQAfLypkU4hzuDMse9eNpq9yhVyvNShnAfaqCC8ZLS32zVB3CMMvJrRJTknb58L",
  "key21": "2giUWraFMBQJppGHicbrprcp7UmreYGKq38y4yaEXKzEwJwdUVTwBe7vZU1sGtCqCu7CX8ZUfMa7gs8uguTQAyoY",
  "key22": "2Ew9RyWpbF1Xv9mfZ5GEj8ZtaDxa2LeLtHvRAYBsorrHLofSKFwrJPxLC8sVcXVffofcnjTspzYbMVPWe44ECjw",
  "key23": "5G4ckyqTPYKfctfvBDHKybguErns6oavZaDUHHe5nscGd2BTTZgvQJkA1wASqxT7xeKKTdyyqi6USHGk28BxSzPm",
  "key24": "3cbeZ2w7dG35JeUkv1td2DQG26FPNV2rGfENqgnxGCqJ7r4zbazTDCjeoFSvWzVj86Yd8r6MXcGp4CoQg58KX6oy",
  "key25": "59MrT3JxV2zXcd77vke1ieaFHjes6JsC8Ef8k6vVU6HBVupMy97rRjjod7YcxhPz3LTVpnaJGGroWwbjDqeB4c1p",
  "key26": "qd5DFoegSWoPmuHUwLhDATzqTk7voEzRMe1qh8wRcCLH1rLijAbPEZVBUJ7ZEToToK1mARNwsg6XpEz6KZVtNWV",
  "key27": "5NCSF6nrEEdPWoQqhJHVJTbWNM3q9ZUoTNpjna9YD5d97b3n9iSLZQFiVJ3HjhhzKXEY8kd7qNuoTNiw5SyApBqD",
  "key28": "5LGA5n5wRTcuAmT7hDAeVuvJLUqCsTjasYJ7Tnh4mHz4Cr6DejtrXfCwCQLYWhrqNEXCaSwgKgVgnxCs9c6pAYNs",
  "key29": "34dpVpSn2wuMLqkTbC2iDzNgLfqhJwByTmjnBUfMMVdGHGSNxmi9E4Us1u2BkrVVGs5TvxnVBz6j9PPTwbwevA6U"
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
