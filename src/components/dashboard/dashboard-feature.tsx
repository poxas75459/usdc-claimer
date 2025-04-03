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
    "HdfsX2GSnmVVjUeVZgMrLPX7B52qREao8gDwZifTUzGoeaG9ZZuGGFevQHr9bm8B3RcuzKyiwNyECBscQ42agDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvJntDBsyJ9cMALVzv8wSsTPdPzQ1oRbB5LwMzKDYCo2MqvawnqafH37gkYYTXf1ibL4GxrmuAZQ7vMKHNsCK6j",
  "key1": "395JyuL6fpJ9YGXoDTXM2tZFkJCM6HJgs53qQj3pU5KEEgia7A2MK6F5LsTEMSoSsVjY8Wqwwt8CK7qb1qoLJknV",
  "key2": "4CKoNYKV4EMLq7v1wA9Qs7Pjkdk2m2fQvsWyF8phhtxEhRo1iAe34HXHcSEGY8ER966ndeftGvqgQobJT1nDDDtE",
  "key3": "2s6f6FiEHxgKojF9z5nMbWaarrVYPJK9cEAx5RqawLvexQ2AYmC3e74Zw1ktoocf2p97D5TKyw45vHdocD7vz4uC",
  "key4": "2HjzVJywHxsPDSUkBy7BTCtJGe7BSmPnvAPX9iccPCRegZKyZnb8fG5Bobu4dQkguFyrqeyLcDD4dJhEoKJaQT7z",
  "key5": "2snRtDsUS2bJ6zH7BDnVUWsNJuVXuTkuAwqhrKiSPbBrpTrvYzZiUfc6DJdAY29TE6VAWDgpagR3kdCtHo9JdNff",
  "key6": "2vnb4peGfX6x3tiLJ6LPFNG4f9tzkT6VUAJrj6hQXyNMuSGJZLEps55U9vp1zLSnooAnnbpLTCtUvHiSUn7fwhpW",
  "key7": "4YzuTaNcCw6eY66LkBeua7jDhwRoA7HUsCMBGmuKo4y973mSfKneeWLby939zi9LGc14ovSx1RXp1domuD1fD9Xj",
  "key8": "4HJfE4oDMjAsqb6W9yTTyeoiE5bcRgiHrM2vjtPn221bQ7RRVccsxQe4yjebbp42uETDYtTEQiH1KqN4ZmkDknk2",
  "key9": "BVq6WTdE7Ww8eVcBM1zttFRvS4gQZWXtC1d2bc14WC2gBu13S75ybMKpjSMxz5HUV7LBndz7iSEDejHotrUiwdp",
  "key10": "mE3PKagp6oPWVHXuhf7oZWDTk1TnvGYfbpuoeynY8BC5U3K4DLbVfUdE5Xa6AP3L8JmbEvLLNwd2gWV9m3UzLLb",
  "key11": "yuorYzxxHQBJ38fMNQYMeJPVzA2PVecQu7X5jNz6w9gpC944asjWX4keyuEwabDnu3xGCApzGsPGv82bZbGAY8Q",
  "key12": "2qWTVcpVHYAU1oJrEmteMbP3q2BexR2JhAwydHbyjuF1xDumF9fKjuKKaQCoWTJw1L8D4NbhvqdNEtydUnSyTtfz",
  "key13": "EgkF9KDoMyqmwKJzf9wbVZwPSa6VhgHhUsCgNJvNMVmUhP4jvgZ3mLkNhwtdk7Z6pTVf9gZ8LvhufXvatdUdG9C",
  "key14": "2WMgjuKuc5yXWxAXS54Zm8Jyuod71XxeLTQBiNifyzP32LgiJFnSAqiFjcrL19sU6Q5hjH6Ag3hACy6b3pnWX9Gb",
  "key15": "532xaAUd1m2ihwkuZHev1kJVPiQmtK7sm9d4UmmBgHrpmLrwUMYY6P2yLMAXhP2Q8egjd6E15gWWKup5CdhwMtRm",
  "key16": "5tX5qGpvjBnKbekvB5enj5H6KXUiE6FRBDmq9NBEk49CFseBSk1VdEyzo7ff4jCAErxfhLPUNC5nSLwSvqxVLhbv",
  "key17": "4q6PDoFhAAjmCCZruVZ46F9LArSdq6qadzLpMJwMTbwx8cQ67WubjWdmUkhEgKvSY24Bnh3P5mwgLZspAC6BiXMU",
  "key18": "s3xKpu3WRZhRaWZcwNEGTZbCShJjn48A2b6JsrqHhFMn3yTnBGifyPVk9wMDheQLqdLL4xrQWkd5Mi8EuH9aJTL",
  "key19": "3SyV2FCXRNtrGiKGQyNEfqvgBS25kcuPwKfBdrJYkp2hoAZGwzyQUWL1eiSkVXVabYdJuNXRq8BNnwnqWBPChE8U",
  "key20": "2hXR92mnjqkD1XyWG5d8XF2dpaxTLB1SwtPmQC27GWWtWze4QBcp8qk5CQPErrRLgg2dsAg17S7t88UxaSKRQnaD",
  "key21": "5HdYjNjyN15LU1W8rPdp6ACVCFYcnSDV3PkqhhJdkj7MHEQxfjacxsMFHCBXbQLzRa4KQFm1hBAyXWUDx4MPWA1F",
  "key22": "3u1MCtQA7bK141JTohzSVXwCJHsPuafECv4sKYFy37Gw3y3emi5NWKxQ6ofPt8D27sWrZHPifsi7GT4Ki1JktmiR",
  "key23": "5LhnkoEggVqXvUjcJ3mQ9Eq8E6Pc2RVSph9Ac4aWRS3LVYZyjmXt2htW9nuWEiaXWi78dLeSQCLuoubdaBqP51r9",
  "key24": "4ir8rMSGWu3vMcMYL8UCnyrmPPBSqDCHQMmwK3NccdsaXfw7anDKa8CPao2DugJ4jDKwwca7jjKNMnySSTPdhHd1",
  "key25": "5LRnmkSyox99mT7sDE7eXw2g3UYJ7E5cucrpRK4YfEwSYoNvPv9QdLoQfRBbke8SNwgBRdNXRHpAn2RJbXEs5MgS",
  "key26": "4BGqMXa9JgSiwn9Ys9emNvPokp2JYJdv5dxFWKpksNGefSa39mDHwNoa6bWW8AjNWPFWffcnfy5ncFzCNA4xRF7y",
  "key27": "2TggMLc2HzSvifLrqYCSW4MunrjpNiKfNMdxRh4XxsyVAWj6QFtqC3auQ3c9BGSuX3Cdz2D2fvRyh2DZtT75Va6b",
  "key28": "3J2d16R6241yKedSiqzTVddDH79c8H5MsPKC4Aiy7F5y7c2KyoGcisUHd65fwJwmrM4VZjyE9BTxJsFtztNNbLz",
  "key29": "2yGsRiuW2BAkxUX2UgRp7fV5RCN81kRShxrTXw39EBkAvvAUFRgU216aKtN7NAponSn79aFxWCTGFqzq9juYSFKi",
  "key30": "3wpVfLLeHFFh7fYUp7Ceyy3fX5LuhWpxCezGMwDmzUDf4RRChLDkT8nUitAxctQZxaStDC94CobAL1UBU7uWXgQv",
  "key31": "45rngx4HPZBsHH3YXnBewqht9nPzDH3TxtkUDkNWCegjmXsdG5rsNfW1BmQwS1frGfYHvyHfgqaKo7FvAJmPjDV8",
  "key32": "5EBLK1hxKciLecBNAAZXpFadGpoReH4bzEeCsTGc4n7DYJxRrEierD4ErcQrBJX3GHck5BMzhAueAWbhwN6etqj"
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
