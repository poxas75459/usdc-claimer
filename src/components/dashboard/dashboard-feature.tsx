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
    "8KZGF6srVLihH4D474PBXdLWGdwwN58dvnEptmHaoQrJ3iic5VoPSdbmFN1KE6HZVtN8sGJi45TuupLuvSnBt6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CNV35w9Rt2ANJWAdjCGJRDrypz4gCuDWzqcLpYwTLGio12TW3xQK63BywrvG74LFSaaByHN7XcEo1AeLH1eLPRU",
  "key1": "4BUEHB6LxPGqq5sLWkeKxypiLeRk7A1S9knRAggV51vjRMt91t3ufhsNDKaVrLd5DtfWLfXvxbQBFsZhQEwpedfZ",
  "key2": "5vL8KvCB9nAbQy517efJGb1MRnx7qdUL8GLmR5f58eKrrzPAMzBkSZ5LPUcXDZPdJVtLEjzysvLeG5zk3iBaasB7",
  "key3": "4Jmv6SZY1cuo6d6Ls94v4UyXu7j2Rttt4BQAkP6WTdNnPuEe3QZ41YgaRTgUaHY3pVn9pfim9Fyi1YxB88a5qzQY",
  "key4": "41VJLoBm2qYufX49aHJh5NrmucpBzzmFHj7ExKQBxq2MsQtUe3ng2TxHu8QuLSiiV3WNkGgkK85VPnjEXBPxfQfZ",
  "key5": "2f5oWdmdJUHAMeEFAf1hPQxuwxD3fRjoFA3qRUjDj9mkvqqj6CDgBk7R9RHe3C8UuEbCK2oBDG5g92WFawcR2Vev",
  "key6": "27pUxtt7iqCSASzxk4HFQJ7XwEqQvdwfakkpCkiRko8Ses3D3UCSu29vLiNtHqzNCC99hfNKPd8jekpZRiE8r6Qx",
  "key7": "3SJTvgre6RBJQUiHpjixEnqY9evBTof5YD5kyzdZPFcSxuQBgSR8MYaQTeAkNWRmD1BaqE1vNgjjWo8kVXFqT3nx",
  "key8": "21miEN42LNCBQzAAqca8iqkCQBkh6AmpiX1rUZjDvWdFwqWyF6gc18iVQmCvmYJAXwWqmVE5XXbMeBgxHhud91ri",
  "key9": "21LDBYyhL4E2ttMfr5PSpDw2HEJ9Gh47E92FyEaPRcmwQN158QueeheW9aZSKkP8UvMNNUr4xmEhRp1A7w6zsR8D",
  "key10": "2HJrHMnQ8zoATvPdJJWRFgbfHsFeLFypUah3tuje5wQYEz7eAiGHo4hNCUxBpXNqwExoMqr8d1W4mwCoKxXEp9wf",
  "key11": "2aWTuBcK6yPPFsMvzjd8HTyoHxne9CHAdFpcZ5twDaUvhvkTwpMSpDYSqCAeqMCT2nZf4ZBFyHeGm8UR8Cvd4LRa",
  "key12": "3nzEWLRXYQaFcEZVSZQJd2vx7wjeiMTDZb3vY5kRSAAfChY28uSEswP5a5h9PmdCPrNtggt8UmxQJvP1xWcFvx9w",
  "key13": "2wkKg8Sy2Zf3N3nhYdQwZhpN5syZUKDiEeapzqLkr6SfkD6XYoB9PnuHB29BtDjur6QPwhmKCZ7URH1VnJaFZJDQ",
  "key14": "2Qkvdvon3KbR3UShNdq4ejLc2ZDdo4T7jhv88UQUGrzPAgDyX7AQt6BeTHtfBtKERjBrRUR6tNJhXiWSjAtSMff3",
  "key15": "38D6JomaE6vZEMifdaTUXsit1AAChqCPMEfyJq2yiQLaTSNkqzS8zftUP8jQLF4EAwXJr7PojBSSiuhBDckugnC4",
  "key16": "qN6BDKpaYHKFsUtenauH6eDqekpkYBi7Yh1zFBJVHPPTVxWnbsJHqVLVaQ6rh1Ks6A4Y1wfo7gZtPPFfJkhqKLY",
  "key17": "4Li72G4kGaFCQEKhhzaAxeiTY2kcBZGXKQGXBVk6N68Ua72zjKwkydeCDPQBB9T8ccTbTNY4LFckhY2FGkZgxSEy",
  "key18": "Xb7A2bDf5a7hS9pTr1sg1AyLUszjR7T1hVrZkLc4s8sb3CRrdPBaP51zxtTkeVMpSTjiEJMBe8CQfqx7FJ86jLs",
  "key19": "4UX7GU5pnr3imra9zvjXxekYwvqy4hVJN8UJTyJzQVRT3aSY8S2yskQDdE2dgy1fAhTbfYaidkdj3soC58N9Gc8d",
  "key20": "3zVLgnxR1Meh7uajqsgy2v5KqPjUh24YbSoyagMnJvNEfvndaxss1Wp74JuwvY8NmptqAqCoFdm4DJdd52Rw8Aaq",
  "key21": "BKGwSYyCL7oiqcGc9d813pMs1bLbHgoTL3xWMEpqZkghoRpsc9VqauR2RgWWCB46PzKqyvTdi2n5dWnwudXwjBr",
  "key22": "3yDu5Sg4u5CdvWs9mURtGdH5bcz1NiY9HU4i1UhDwDYuipn7yLjyNxzPHe6i1RbpPHJuBkQHW3jR4m3FbTPGz9Yf",
  "key23": "5SFzaBxR2xTGQUFzmMSXdpPZhknWBM6tZDC5tfW5EsM1KbPrLmL8tSxcHxgR7DB9SLBnyGoGDVEeVKMEvPf1jSDk",
  "key24": "3r9ZMsYdtYNouDpPzp6q1pnnh4b3NdsUYsV2y5P2dH3jWN7Po2YA7zsKoRtG9tfC4ChkLtiPX1qxMXMWcurgLULj",
  "key25": "3VV2qaDdbz8XqMoUvc6y6hNaF56Wcz5dwdreTToZzPW77n9UjXFBBCD7di36HE6hggZ4bxy1Eb5tQDUDKMfFg3iJ",
  "key26": "45pRxnVP1U7hvMr11MJjRf7ctWgAjBxcZCGJb1CBTdVrhVQUxBcdouFpY7C6XragaLHbF2KcHLXMgmivkBbKNi9n",
  "key27": "5sypk9w9XW5gNE4dLLadwFkCfbuz3vUbv4oDL9ppmSPVubVVn7wBgWj3SSx7jKqVpHC49ZkNzB4LkyqKNkRJ7dBt",
  "key28": "24uSbPTZuejgkvpo7yVUEgkMGkkfEnKBHzcfaW6cmaUfJ4GHbQZZ8UhegPgSaRyEDDC7GchNj89vf5V9dA6FbtaV",
  "key29": "2QQinQnnYa85vBD1Yxxc54DJT539jDTFUrZAqPdHUfB35dgLmnejmB1y98aEQ83gj6axhkXfsgrtiCdpbqtHZzWg",
  "key30": "2YrKfpkZ7fZr6boXGpKy6ZjRvMEv6QuxyC7Uq9PyyJevUY3JfJf2YbjuU3kU6vWjyZ1X9wsWETZk4LMvZ3yVCjjy",
  "key31": "2u7w9bHry8ZnoVpz2nnMqhfmqq9DceSYqnXZNGuW37n61M9e3xqJS5R8E4Cx5ygWVtTmTGCwU9gjHm3bonk3XYfd",
  "key32": "DUxnCCM4kmLCGcWYgagCedDrTKAzkrwBy8tVDDEyBk8Rxih4L9P49TDNAXr83QUbtEpowBkgqAMzLG6aThYiAFd",
  "key33": "4FJRDoY7U3rpqigxsu95PsTeyvERSEREaoUnVdaCQEmyf2Tn6h3vWpcYrF6tac2fFmEpgdz9rtVasJbhGYUjUMR6",
  "key34": "4KCCR8p2NdBve4KvTvRqSUjxuykh9UDXJhgQctmxzjYftQqF8iq5kFqLDRpUs4bVQZpDpmNCfpNMhYBMUBrXFTBi",
  "key35": "4fYqxnLYeKqcvF6RGc9Lf9vwmY97hMSGPEn6VRjbf9yHexzm4jmSpH27ofZjY21btvGk67TgvY9eqryGGepquCWN"
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
