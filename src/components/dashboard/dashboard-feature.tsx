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
    "4WsktmLBSoK2JutzaBkQN3HMX3TnyRUve7p92dgE7jbeGJUhhbskPtxgD8cVJVjkMF2peFs2WkWagTVFdCCySQoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPJvwDRWaQCR4kdRtaJU8fCRKbGYboz5Ru1kj8QTcDNooPaizV7o5GzH4SiAE85pYRznRUb2aH7fuE9vvKWJLxY",
  "key1": "29j7afpgcwx5WML4dwXwYqe5MXkX6cDXiV8G5GrM2TmnLgipnpYJs33oajcrXKycfy5RhLuBkKg3cqS55aMZ39qZ",
  "key2": "3Cmrur7Lse4ajPN7fCzyP32jKytY1kRPHu1LdUPfysqBqNV7mJLTPcXZRopKBtwMYKTiJdrRm24kZmdZ8HWmy2Da",
  "key3": "2h1rjwEKk6qnygGQJh3mpX7tGGoFRdEdrmfMFMKNvWYsTRdLhwQ1yx69jmo7gqGo6mZkgCNekpm1uqR3PD8RYjy6",
  "key4": "2BvJEbtbCmpPoZgdgS2rkmwdYtR7LPzEyiAuX4iMDWPsEVgixaxvGU94Xmhr1moLbya6KtUTJExZxhonaZitgmxP",
  "key5": "5TXceFxCK1seWKu9DhNdpH968QSTigicDUzGJcJSxiq2DnmDmEzmnMabZNysQghMJiLPrVjYoCjrCpFkWJRYQez9",
  "key6": "5XHKggrGbcTGESHBpt97foBgSKJAccbXDrd32LMbRWHzubGt8EDBCza5W1Te5TtKw7BgBw9QqZRkrrvDmZszwM4Q",
  "key7": "6nCQ1FqqcqhHWiP3eF8UcDDU7B1JnJARAAA5z7L2SsY1CuRiihZFncqwAA7tkghYPq8VKuYvef8SWa6QmvrpwN2",
  "key8": "5iq7n2y7bxgTZtDCk7vd2bCSkiN3w4MZDyZszakx1U85M2jnrQJeHFqh87AoRyAHULqMfNja15Dnpo4z4pS8HAkj",
  "key9": "3mSmdUbswURqz2ZkbF6ayrJLE2N9rLWHh1xHiTEyBB7zwsQ7SgeMjWKCchd4Fu1Rjkp3NhK6zcJvLYjwZMP1Yx5j",
  "key10": "5jkgxicE7HB5dxTSYsp7V3on8xupyKGPdjZzyubUuxd57ZPAd4N8pAtnBvi52NAQyX9Xb4xPQhEJ6AFASL4tD5tC",
  "key11": "53a1nfXrbSs85zAA4odUdSYCuo2FizP6N14dEhzdyaBrsJeV3p4dHu7rimbyYpTFn9nHv12FgX3htkyqtBVettdj",
  "key12": "3vt6C3GgKqJG9Z4pkoNdZ3kgKYKZKghHUjBc8vhtmJFHGw9USZfCgKos271arTvFZQEkX3ftTY4Q2Jmz1kfZsyeB",
  "key13": "38rYbah84C5J7LZ2K1ciwhkoAbfKBDThkYA6UnxySg5T9zWR3hbDoYFqhWgy38VnQd6eK99SUyBgU1njSWC6C4Z7",
  "key14": "36ET1ZnWFFVbsp25a4c4wngFzTeT3ahEXGQN84Pbiqqs56mZCyvGjSENc6aYXEwq3RazZVj1gFVhUUmCFonnT8oc",
  "key15": "1MFFtAVghnUcDPcjWduNCsiQDr8CqTBsYvSw9y6zs7UffpVMb8ETVJ4VUdtshZjSoB97FS3rGHRLatr5saAYcvK",
  "key16": "3WmPFfjAEpVyc4jnRm6Sd84L91i3Pcj3eaWZqcrWw4Wx87PGsReRcjPYK1ejUxCNJXc6ofikH8WUVjfKz5gSMP42",
  "key17": "X8mRt4PuBWi2WuwuhewzDvvQdtrALwVBDGKnmXgauDjU1kRV2YUpGdy2cZA315gyK59aEL5TDXdgQS2mAdR7cYs",
  "key18": "mB9Hfyz569u1MLJk3RYZMDUYxZciUf2eNpUi7d6wwRgf9nkSReYWF6cfVt4LKUMy7huqGhwt3GGZtZrgcMY1CXV",
  "key19": "3T6Ks7aX1iPjCYrH6pA9exq865CS5VJsFpXYCZecmoHrJixqLgh2rbw8xyfNTLarJzwvJkztZL5DMUDwf6ycib2W",
  "key20": "5NcJg8RKNnjWCU2RAHbCoruDZiV1kXKN2fsLGvzeMi3Kd1qkaad2WadcqcKGDKVJwwXhUKe3nw1cHuqzvNobSpN7",
  "key21": "3hZta17vAnU6QMq2QvPYRTVe7oU2URpUhQkpad3bw4E3jY8bJBtS4g5ALhs1XQhLU8GobWVSFArQQi7TLW6dGYzX",
  "key22": "39cmQqw938vDqpjWWYfZ2nmu2NF6ttSPVVFbKuBKsyiUDU8AQVbvk5V9uHksxXMBy2kq4cDBp5roKpa9VNTbrwAD",
  "key23": "4JC5YAC4xravizbrDCb4n2UmcGmyrqJpoWHup724vhEba5kiBqGzNQFosvCye44G2ts7jYZy1mnfvo8DJCEtbVSd",
  "key24": "5rbZfFnGrPSdsNx52aBp18gpGfrLphCexWJs7oJdLbX84nGsHVgR5PuBU6GRmsrPyz8djpXm8SMmXn3dwZCAyAkF",
  "key25": "2T3zVG33QdsbvuLz64wMkuax23WEdgDYWSusni43oG2VQNkfgBvpNQ93Zq442TeKvfat4Uo7MW5LHBs2b99nWnN7",
  "key26": "b1g7aUddZwJvC977C8dwHo2KKWM6puzDkx9gq8SieL35CP1WmR5xxRUvH4BuRGZa2W5rxQAU8XbvCB1N66Z5wuv",
  "key27": "5RF2GDNnvPHnoYdsPTLoTMAoEvdyqCqT7bxNB1X7D5bb2A4jzaduCJUDCPzpzUiAwrkhQ5SfcQfetHwHNyxTwsWy",
  "key28": "4t3NEgA2fScqP6wgCneYLu9E4gMXwAdr5kjEbYjruhFZpssXSVBMyVSFMhuTz4ymvA7N5xwA9NyYPC46bZ7MLcEz",
  "key29": "544rXQFG77YJpotnEPBsWVQbytEJj59KxuRujrHmtnoAqPnQqAJddqCduQtXFvfGTBtf6qMxjFo7wroxGndFnGbo",
  "key30": "2MmcyAxsyGeB2ajcdfVdS3hXddZEAyG7W8oaFFt2LPEHPA8kw2DXNn3Vse5JF7bE3PgZXodC7ggh5JvUJ9Qu4PSp",
  "key31": "2EAmes66NFhxT31aGaVoWX7ETnpM1o3FHryY4vDcp3eqrhScBeYEvfhU1Tc5i98UV7vVPdHoioncnDtvK1uSaNco",
  "key32": "4PDkXaXnFEtSinuGPzar3mnRAtfN1sEHtxRqmv2ZpdswT5qPtgBtiQoGUkxqXTbpgPgLQkcPQbjmPfhkJgmDV7YY",
  "key33": "5BW5VWXWxFHLG61jKA8MQZg4SkJNqFP8NzbzZowpBB9er5mkvtPh9SgsMLPazGkcZsixNTMcbLHm9kQrz6xAa5Yv",
  "key34": "4EmDNoR68McXYBCCWAkw6HKECjCTahGvffRNT31XP8eJ392Jwov1JYNBkJ6BhWkCiJgkdA2pEQ19eVAaKt55LvEg",
  "key35": "2cSvVzTNtoNtfwBMvaUxmewJ1fFVHRvFigUBHLXSpTvtwomAU9WgeCvBUSXmkBYuc2ht4V1qTRAnrT1qFa6G4bWK",
  "key36": "hH58xTcPg8QQ6DngQNSKH6PmnkSyPLE838USF3sfCft8oSQbrsL1trTjkPfWwKwd6AQhFWPfJ1DizZaVVruv69e",
  "key37": "5NLcQxxw7zMMqGbrzr6hxVsW3VqEyogYcX3JMx1AKPw8j5B8wWj769LjSBAQv9JX7XJ1LaaQXfA163qzRRsVqiTU",
  "key38": "3krAJ15EBVWJVQ464PNT6S1vpjjkTsWQV6iNfE1bsZGMUe6ZTqgBf7kr7gU5oa9J3YyMV1qTpeJmUVH9VZsveP5t",
  "key39": "3xPE9zji6oUU8PWJPWkU9TqsAt4FvBEGYdZMo1SoFaWBbScYZvxbgJzitFc4KZS4N97SDc5MUZYiAMXJtkrtuhKj",
  "key40": "fkdcRDpuTrZq4an7PCtUgoTonYzzxkeH5o3Hwniw2mjGSHw4ahHTgWUGaECecaXbBRTHnKji1FenrMbeEbep8ai",
  "key41": "2ztSmdJSu83WuT1sVEkoE6vPE2sMhosiZNo4i7A3qkm4P2foNDfucM1M1B76koov5JojKhrGMK1sF4i2nEVQymMv",
  "key42": "5QAyjL4idFzWMJ3eS61FEq8h9UfFFmfjRkecB4Bm62azeG7KtjKySv5HwkByHhBcxYZcoG3NngpKSoytV5VbVvRZ",
  "key43": "3HvNnm5chgb4BmGHW5YsNnLErLmZrukskVVJLC5BoSx2aTSE6xUdHepKwDgdLqWVkCsF8k4mahq4dbQpvNU4S748"
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
