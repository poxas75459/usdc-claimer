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
    "58toG3GFa4SzhYXWFmkeZbVe8x2FKiBWGswcgz21C7cqUfmCzxifC21aS4361Lvv13q3DxjWRT1Y23YEh3TMgAEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Z5jGqf44DnVTGgcvSKMFfAXSvtQb3gPRqCFu4BAoEk4pbFQz9d6s2zgTy7TPHkC2mPGkqCH54VzLDJg4gbwtqJ",
  "key1": "4uhLhp24SwD84Fr87MD9kJPLHBaRV8r18B1cQzRjLAyK9oZfcuhGHy4ro8rBbrGirEtevL3H1qyvqZpwZFxGeEVb",
  "key2": "2a8xQcbX9FYupVkV2AdktuQm1X4QA5A6bgk9FrMsnbRWwSwnWMcoTun43fXkafKT4hdvDSj86h4xNFom8MxNq4vY",
  "key3": "3fmf2fwb6TkRYTaRApryrEjTe1oL3Z7nkfdqW2SDhSjxvcWbwiodb6ZnDT1dgYLkPySBRbb3ApzS2TYQ1g7yzERD",
  "key4": "VDEczdbsfRuRkE22UXWpxe8nryBdfnyGQvyGGNMUojBcgt5WejR4nxwQDd8EE8rsRLTkkbb3rMGtTYps2yJg8Yd",
  "key5": "cQ7Ba3JTfcbpvmUNne3Xxq4gAQzxdj1nGymsmuexLStLGcNcvHGacFTyTNJPjW6uxNVyYYm2iauCz324zSvp2Dr",
  "key6": "2Ndh2kAV4nV1cUGXMHfL9jeeXWfVhmtygVUJh9j6Wnhcf7ipEuR39yqwwVUiCDTpaHcAzed3bLx7tKPMLi1v9boV",
  "key7": "fjZoKpViztT3aY2wuY5SZdMysqembK3A4fnyu8ZJWRgSRBLVfM5L9NtivBjZyxKJfnASiZQisKohHFiYVGuMQTS",
  "key8": "ucN1Gv5G7Mv4QuBaZvtiy4uuQc5vtLpV6VHBfQbUKB52poxr1xFJJhAvVzkUtanZ85timkSK1uQr7YdbQCcqKZm",
  "key9": "3txdgTCvRAaDuVpHwkV8CFo2tfnxpRMWmuf34VLBM9dxgc6NJTxwBFmuSbg2UeT7VSpBVhRvJ6EZBACUciTGFNjA",
  "key10": "2uiMJcAL18PYQn2otyBHV7bfSsU7k56g6wrwsHeZEzgo3o8Jwi7pRmkDBxHr6n5BzXvJWHKcNWcNN4JHdkFYhjyM",
  "key11": "5NLfXRQBwPrJyJ4yq5rNeTjb6RDJJrf7gyQ41rxqTp49ZMH7pDRpTYEEGQoBGTPgUyzzK4saJHyFbQMfnTVJMz7m",
  "key12": "ghfeeYQfjVTh49ZoUV65FK3nAgWcWvQK677LGhpPjru36pjLcHu6V2Cwx4qm2HVTQ8VA4BjAbbHD4o966R4wx93",
  "key13": "5X9fmFwDs6aHNF3Le1QPZBNHtxSQ5i4ph42Pj5Lt45587UeTzgT5B3CdNjs2JyyWq7aiAB42qGXhzMfqvLFhsqqt",
  "key14": "3pYL2eNjgSsKjm6rCbQpBYFTGS9qT2xeZ5QbiSAJPvcqK9xFMTZ66EbCYcjAQvt48GMVkDcbaHXbLXmbiBYtWhF3",
  "key15": "3U19nDoQjHzF723JrXk6NZpvdZDmDuuGke1zKP1fy1VtQG8r1VrPKRAREPCtUED9BxHSn2uWQ7c3cWgsakdPLLWc",
  "key16": "3n6ERPQp7iCmLASkEGDJfzSqyomeXcbbPGKLkwYEqrTKnGBUTK4TqgQRs4MJsQFRZE4kFbtoh7mQnfVde5Qy5iBY",
  "key17": "4XTqgG5A4tgq4Pks7jk5f1vDHzYxm8XCLGQaKaYsNdjJseT6sjSuHsGSNdCaQazh4BAZZsKGWZ5m4ikYwvwMSz7g",
  "key18": "2krixMyaYEmjuXSCCKojX7WmQWhtk3LFpXqHZ5c1ppoYAkyEde4ZV2gvKczdDiMZe6qdcbbtLzxjmvaAYXM2R8Fe",
  "key19": "2w4gEKNj6YCGtHZhfo4KPeNtoo1H4Wzf33pXvPvgWRhvnaEEYUsjf5jx5WWKw3H5VnUmXFFkWM65JcutRvk9pj8X",
  "key20": "3fZQsW994gSSorj7KAJ6envJPXaAUNy4isJwcA5iuvW2t1xCh1aP9b2MLVYgNxG5kqNbt1DagMd5mzNqoKximKjP",
  "key21": "5VkwYTqA4bYD8eqD5NgavZUsBFpzxvtgmoBk6sfJno2nSvqQECS2usXcTfn7YBuQNhqfxGsx285mkkAd2ATbLd4w",
  "key22": "KHVpjYsS8UtfMoc2xk9M21eb7oHph7EW5uY4JwZG2RoD8QmBok8zN3nV5JvGRoXtoJ4AmsN183zfZ29B7np3pan",
  "key23": "rMJNcA2MPsyFYZ3DNeLyrbVCue7Dx77gC6uf7qbLv66cr9cJ6KPV1vPS6n3Y1ggPSELSq2799Y8FZbmuc18fCqE",
  "key24": "2wtEe8ANuE72XcLL9U4ZVbjBmG2CrmorQxqu71Gp1hnzsyn1o9iUSRYqRPAvSxJqzdahb8sRUDpY7DMcXgL13oSA",
  "key25": "uLms4cmgo3X1bBufjT9rzEmCcZP7rPbxudEUUyKqzzkDYADTgdWBSFEnfC6pqqya252fJhRkgtJ8hacxwCiKJ5T",
  "key26": "5WjCRsU4uVgkpp5m9i5hkqdVwsTxm8cXkQ8QS8mgHgMznRmFim7XpXRVmDD4aFNd7CDjgqfDPyuU2LNEhzuLGaT1",
  "key27": "fz8xsgacddbF9JNKXecVE3WM5ThECth7thAxPvNnLNpKsM23REZN15kRbyqk8zyapT423z5huTQSxNC2mEq6U5H",
  "key28": "4aaAfuCcYa8toSRWrjJR14xmugbaAWZmWc1aKh8cQ9i6aVz4cQz7Z7f9THxt2gopZ8VQgGtspErXeW7ixff2co8n",
  "key29": "655chNKs2QoqB49nui1LePUX66fr2oPdYWEVoPCn4DVmLFdwdB2JctqTGrU2N2ajUndpfLsqp7F6LNPShjRFHmLQ",
  "key30": "554QfKqo1sYy9o1dpVzJ6nc5RGimWbpTsAYKFT65feTh1bMW9NwKsBZYFNv3Sr3hyRXFRv75bnS58UhbJM7fStiK",
  "key31": "4WvqrCQPBcFvTGjGqt1gMWGudMq1o33TQRgKsCdZvNyZs49hwiHvfgTnkRqFdMGmBQ3WnsJvvhg3uR1dMG5RbA4i",
  "key32": "4U76oTymhVe4t8t2tXCDytbHRSdxGZvh5Vtdhx9PcX8g1YSF2BPk59Te4Pk7Cz7rJY1Gu5x8m88trsismferN7W3",
  "key33": "3K1pewRYv3yp34RSmm6tFwo1RixHosCNgwVBanAqUv7PB4cMWwaR76bqD9V6Nw1fdmuN4Kvi4FKmW6ntFYtdHieq",
  "key34": "kDbdeKsSA1Yb7RjH6FTXsmoShbMgMfoUa6MS1u18umNm9YKfu9BMWEEHrNnaXfdkV7zAUN4qPeqKE5zsWeCEpwP",
  "key35": "53z5wjd81DXaGzaZfn8Pi8w1XEyBeXJca4A8cNBbisDBvcdSgVnjCaWWHm7nNz9iM9adtNsefyzZm7XctD7eqnFM",
  "key36": "2D8W1uCXT18mrzJdyKrCMHUUx8NkTdNpK9ZxKiUaHFTGdELnpqFgpB43KHFN6kNoxGq96VYnBqkQu3snf6AHBNfY",
  "key37": "67fxjk8g1iAVm9JzR1QtTkso8ygpAaSrDJHjo9Q7ReYAABXQSTG42CtkfNUu3ue6bjMEvFBbxknPxp34s1bgxQRg",
  "key38": "3U5vFGXQhdnQBLLQijXTgTU3ZvdEcyu78cvwQf9drbpiW5hSpZwDvYh31t8vqFSsFUZBGTYnfEBWo1gZ5tHiuLoR",
  "key39": "4xTcLk9hnGtaPytiDHrujmTQAMwghB5AW8wY9CHvyXB1nAWhLcyaAdzUgJRYti7Ve5wSZDTUd1qGVyFhj1FVee9w",
  "key40": "XQ94oNbdtvu6S5eRuJ558iW7b4gH7vD3xrrgGbz8Z71NievF7h1ekYdUWCCzAKfQCiRfnYs8knAQCnEXG2fm6J6",
  "key41": "2zW6R6p67zocTyuXu2QvnWKhbwgATu3dhXtycHmSZp7RDtCmLmL2vr4YgXhLPZfSJbGL9cpArjou7Qqk7FByM1Bj",
  "key42": "4TPMqSihecYgTKPYMGFL83UhmQWFRKYzioJb2wMxqTQ5AUvmBqGrdifS98zNn8oxLX3ymRy1Ztgsjupc8DUAkrfy"
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
