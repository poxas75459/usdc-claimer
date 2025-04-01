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
    "4wEyCeud2qjmVEnbnb4ZiMdUaGWG7H6XhoC8hRqqyRWtYtQYzsvaoPcfKinGAbzB5Rn6RafyUVB66rFj5UStojR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yL9G72YRMaLMSzxdoh66sV3byCFXHVv4Dowj6uAyz819ggQM9AGW6BHxpKEZAyCHc7uT1cAkUoTcpJo8Ubz3TWc",
  "key1": "4V6BWDhLenHYr2i5DxcHfifJFzdBMhF2U3EEYbvQzK2wPbemhqLUWmPeVBP3XUPyG9PpwPr6Ts8BZDgHipVFU8nB",
  "key2": "iXvBv1AK1Q7b3SMEe8Mjn6h49vioer8nrkDv562H1bmLf7dgFEuXgcKc8qCysKXaM4osPoJXbrc9hGn8Nr3ce6u",
  "key3": "udShJZTsdzLbCUtUaLAEWD1BTA1ttBnCCNRr9g28cotjCTeVhw8rYamfyKYTqHUkyAKYLjWsxGfnaByHyJdFARo",
  "key4": "hgoXHgCSvBrwN1pusEUsUgdeejUvo6z1msH96KJNRaMs8icTDVDVSpkHTcaoZsWvZo1hMWShijToH1sD3WEiMQu",
  "key5": "3GSyP7UKgAyLwms1yWUA1bWkYgAo6aF3ZhUSdUYihFBdLvqdYtXbfaMBnjm29L7iNLFbsHkudNtbHKAx4zfQMCjU",
  "key6": "4SjdMGUMP1ZSCZxnk44HkvCoWZum6aepLy6oR3Hzk8eWbEJqdjDwyjX3HyJWK2GW6aWf1ZULuNL41oXeCuriMKCF",
  "key7": "2uXtToqgr334VNu1fgETTjvsD9PoEFL3GtMKjJYMSNDoLbsdKsRqqCDUjKhHHKTop7uyn4JncFycK18hX23eaEgP",
  "key8": "6uh1UGNUH8nqkLnw9Bx7TTvq94eAteCzBxdKCDuFNRYU76eU58zuwzPw3XQhx4s41RjXNV41kNxhhAoGQ6baga9",
  "key9": "5fxNSTTAnnaPc2qxxgaptSoxQupd8bc7Bnv66QzzbLandE3VSD6ysU1M98MGgtt6Sf4DhzeQNBWTK3RtY9A7XfPv",
  "key10": "2uNwk6FviBqrHSVhD44KqMtgcS2yDKBUrk1YnWmw1ePBwQyGMu3DH7VFRwE2GsSzgWnSR422nsrtwEWsCnnWGcE3",
  "key11": "5nipiLUbGhAVBaSFeRNC2egGKWiTUpzhwXzaN3Z4jKmhZUzgU62Yqaj64J3wLEq9WjWqN2R9wZ6a9QLmA3iUSnch",
  "key12": "2BBop6pEbau8EmiV1JyBUDfGDnWrN11EvRNMorFnuRGSy7VJjfgbKhApJEdVWnKRXNQd1FcfrERerC9R4qaitgVP",
  "key13": "xNu2LJgpamsTBPEuoFv2h8edBXnHFgxzWTKALYD6Fqg1KG3jdGb1SmwJz3spmp9QMuGMAc173cogfbhdAVQXDu6",
  "key14": "pqm6cbRWBYjqvrYZXyExRVJrUsiSeaMkG2oUEpVMepDASbfpEQZioi2ejzdS7QmWK3czqDTwb5cwFEYMdkD5Zio",
  "key15": "4Ve7r4Qg94KcoKYqTJuNdyndc1VFqZ4mijp9J1z4DCiZNggoAEvYdBZKkfvJrjFM8nfto1yJyB2YU9wLtMYAPAYA",
  "key16": "2Znx3RC2x57ioYdoS2sZVM29Nm8ze85nyf8jM91Smrurp2ess9jp4pRmozgr7zGbpXhWmWDWhPaiHtisnmXnXFA2",
  "key17": "3478QbyLQDp1hyMkUdidgpJuayHxkxft5jnv9B2aw6BKvHQohjxrcRca4CEnwGbXaybtv1hdpKShZPwwvPRZDB9x",
  "key18": "2RxHe7v6EhyAXupTQvh56P1JicwXS5NSKiWFjcdgVa4VVHRmh8wteytEZmz7Snk6aW3wm55SmUbyViraN4VHR63",
  "key19": "4HarEqb7XzaXPSeHnfsC5khHYqauM8qvq3uq91ov8HiBqKX7SuYBGG7j6jEsr71YvZ7q73VXRBT5jFxiNUU2eDiU",
  "key20": "2LFs45rEdK6RnEruXe9w5qJV9nk1oGJgJ9BJvPDCufeXASDUZ9AUxLcnsdA5zUQvknvszzVPxrXM4PMtRMUR3YDG",
  "key21": "3MdtdXeNx4pajn6kHBkwPVnB51QDgUYDfdYrkcsFh26CdL7MnXAQ6u2dY7wpBAZkbVvwnams6tvsQ95Z7mAkGPYv",
  "key22": "2TwwZ92zZm3vzZyvyWVyK8aPQGG8Jf4ssebmvdbF8NahZsZet6Taa5HTooWt9PFJr2d3osJ3dw2rue1upW69jVTn",
  "key23": "2r69oyQ6b1nx5zRtePDfHPrw7fK7ePu7kwPaWAkdyUZr9KVFaPqVb7LQt6Tkv3RSwwwCVBFBog68dtu7uSMsr9Vw",
  "key24": "4d7x3X41b7Dem6WQp1qHuiHLTMbouamzcPMx4CxmpWcp78KJ61VEKnKyKwZYLyQuDJcruo8jhbrbKLi5rVQgpMdF",
  "key25": "FRMmucQJHdnfT4vJYuNJ1UHaoDB8iiAc4g1S6iarAYxGN3tKzKCjaAJagBoKU2CNTYX2MoWSaWMpaehce33fXP8",
  "key26": "5z5HCmi2mqfjBPr6bqTdNHJSQPxTimLjwDLoP3V8cMNd5wwNRQLbLk9TKsgYbAuV2fxPVw2h2zL8DFZar9zwGpVr",
  "key27": "3oMewyLZiBUJqGDZB2UapBbpwsE5KygmhoBrwJVWaUB42CC1dTCbrtDp67JeR3fGbaYnpAZgnups89KiqkmqReDB",
  "key28": "2QqPqqkxpiYPKftaLafBd8XSkTcVod9apvHEKEXzJtprxg4iAQZ4CX3mu8y4dh61NHZXn6RWK7tRNP2AFzMbSnS5",
  "key29": "iif9pMssdgAnRGzPoMusWmsr8tMJQAtYJ7FVDhGYyzQhMuc823tKnNc5jmXWJqvjhJxz9kv1FaRCsG9oML3xBHE",
  "key30": "5uGzg7UEGd88RjVY2weQK9RqwPNefRfyzY2rNEnw6Ywtc3HYW673gnDxjoHdrWzHAmZD6QStHewiaLknkPVWoknM",
  "key31": "phBuPk6AxXUsVBRLPkN2xSwHR5F3kBzmfxg6vm9vjVUoNpQScz5vqZGUPVSp8heg94f7HJRkioTWgq4VcsVQcLg",
  "key32": "fZS3GHmyhh5QDWLjTgasvXaFJ59FsgXJK6ZK7HHcKmVbsTb7Hvb6vve5STN8bRdJMcx1vCA4LoU97BSRsAUwGpt",
  "key33": "3ZMLKFFReF3pKW32rXAzvxbGyzDucmAgo64WU8jkZ4Gj2Z9rekzi7BEF18836FU5RE5bM7JyqLEBWQWvHV15fnEQ"
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
