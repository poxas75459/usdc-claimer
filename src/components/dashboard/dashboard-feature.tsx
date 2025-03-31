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
    "2C96X1cMFzj6Zs57MQ2ZgJAQMqUaxCUoMhGxVpBcLbjocpnJCgr7thhyzH1RBCUUoDeRhWTc2ND1jqA85HVGjXxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDWJqEe8BzcKfAfXoRLogo7bYPhK8gizxBr1iSio9s2GVRw5yuf8aP5tHNa7kuJsZjCEECoigAcwX8cUggW2iLk",
  "key1": "eVyr3mmcxjawiYAjMYPhGVevWzeVALbnVe8VqmZQW4bCtv1hVjX6wgp9Ny8gBquuKARjNAhMQTAACmT672m2NU1",
  "key2": "5vFeJwJKcYheVhyHvrNXkYyNzTeKh2cp6iLUVqkBo7hfEDJqbKQioswobBEPSYkNMShY1ei2T8aQD9ZGLwopf61V",
  "key3": "3zrfvkYb54D7iAL2qfFjwJTnc5gwC4orZ45WiNAAEYqoiTbqNSn5mPQ4nSHTCmXDCeFbvn7hDftSHeZ5KTfZfSd6",
  "key4": "4usyp3zGrHnNNmPv2Qzm7ek1dzz1hYFvT9XSh88gWmqNijAonZeszCRTdWFqMGNiDzfb7E8UMseE6FviXRHid7XD",
  "key5": "WnjXCAxG45rVvDhzvPGV5ajRciBGuMhQMK1FSHGeigvu4YDU3dXfvd9sbVzfwG1EgAJrsnBuGYVgm74w2GhcTd5",
  "key6": "53dQViLpeAkZyqMzZ6YRnM8bxywcR5MJBtJtL5hkEoxiDViyg116cszyUUNn1fAtcs9C2Kpt5qKzijBQBgBR5tgt",
  "key7": "wMFDj3xtohcNy7uXYuEg6B9DSQ66p1ZZ3PizKkbhn2UWd1u17x85gd5hLyXdyVp52yGrD7hH3M879VES6GXZzyu",
  "key8": "2cZQMfYXc1qtgg9r22Fn5Kx7UXi5uxHG7z5F6k3MzHVjnCKhdwn9mMnNjZug46DC4XYHjrvfu2XWQTrZHwrD8VEJ",
  "key9": "2bgFYF9JjM37kEBkGzyD4B9aEXysvo6bggXyEpRcmkQYKmxsfdXLGoeBXuHW9FGadyiUporvRmH2THteLKR2z184",
  "key10": "28EisqBBakV6d271wekB7AuSszqug97ChxgfzQCWijD3vWXS6qYnTeXXg7rXvmiCUQYn3ZWgU9Rg4dEREfp5sox1",
  "key11": "QeM9CfS6WaxP4MK35b2gCB7HFjQ1TBPuJpLhD8bvyjXq9Un3rWN9g8ko7pJuVtZA9G1mV9dkCMPLJmJWGizyAQ2",
  "key12": "29A8GiYQR7AZSHbtWV4BZAxFNSe3MjjJy4CdLb7DpH4eNd5iQbpxeeJpcniY6B4NwEszEiVegWE9hz3ifHa2qbwE",
  "key13": "2mRsvxuEcFpQrEJQsCXc6xDH3RT8zrGCxvNueHsZUJSmGDNrcWnTcbS4GnWJB5J5rWqJuvLwsL9N6KY9XhYMX2JH",
  "key14": "417zsHuifXriTMK1ggqtAv1t2qYMKR2qGxLVdmn18zjtibNzvMzL7hZnAnbfQpojcUHDwYKvr7VkwxA47AAn9sh2",
  "key15": "5L4WqWWMJoiHPRsMQdj1kkXX7ssKfAkMBvY6stLcyWWMhFc1DAFfUSpntDBhKdb6iYiQPg4SAKn1t5TSmvS5WxkT",
  "key16": "5xpdK2xNw99KHdHeVihPLrsfEzULTBK5q5KZXP19HkNG25QyaSi97NeFKPAfbDN5rnMDN4A1vCojP5wjCufbxag4",
  "key17": "n1toXcMPgcxZmX491fZZhoTfhmq8ochoMtJW8wwpjEagrPq6EqQx6FmoVEFovFwZ4AgwWQXG7XpYqRewn639RmV",
  "key18": "34GeXpUubbTTuX524ien62x5m7HkQ3dSZC9EY4pguwTGFgis34TbbiyTP54DNf6NApJjGT8fdBme7xNNrg8vtQ9D",
  "key19": "49eVtooFBRQbTv9dzWjG8kfxPdTdPZSoCgZ1r5LVw6cEVaDMAdAoyN5NJGF2uL8hTZbY5K6m6KrXogps3hE8evv7",
  "key20": "uL2GwGpmJgMUBie2cwK5nRcHj5Gui2Y1XGYYxiYEBFfyDDbrda2fPuRyy4a1TdSDXrcvcNt9ssmGtLWtqFtXDwh",
  "key21": "4eXDnRHxmfJLVuPsJuyTheB1VSkU5J6wxk5RTvPkoEwSXmtA53QgX3HpCJCbjkQGuuBch6tShfabU9eVfjdhezuS",
  "key22": "4M5fa6X6ZP6nqU3DrY6LxxTZWsasVQ9321BXHyv4uDYTJ8p75f8mCCE4bxXog8xGZvF6joKMBA5ky4ywL2N6Hpb1",
  "key23": "4TvXY7ex9egQVsfxXGPteWyJJpNfQ2RmjR4ryeAgStv5qGxtkswfxZ21EXPMTV2AGU7VUV1EQkMJPo8WG8bdxxJ2",
  "key24": "i2Y55gueSvKxsF1U3wFMKogozLFmMzd8CHMzJQ3F4iahDAExDZMotZdgUZqdTKdsi8GXacVUQSZsV1NjTZZLSXn",
  "key25": "4kwNTEYa9joMEXw7YNjXR4eKRc1uZgsKZPR9TGUrxubmxppitWPhYjjmNZzLvm1BPr1WdM41vvM7vkgHxWYA2QBv",
  "key26": "3RYfAjpmwkqQ12ufUv2VzbGyzUPfcwiZvWQpQmi9BPUXecjVGbHsjXT9qqjpY13i7iGmYsE5tMgukwuYc2bjUzda",
  "key27": "5sTDXzB7CT2yErbTH3KRKKAt35QyN6QpmHVxUBTvL7QDgiwBv85qbRbrWKzZCpDFiPCr1xcCe8eTMUYmu7u3F9LN"
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
