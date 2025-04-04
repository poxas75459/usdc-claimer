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
    "5gGsrxsxQ7ZM8rpbQ3T3mXLw1v25GAyTxP4X5YMXm4iM8mKAADKKeryhdYMRaFi8Fyb7rDySP8MwpSsut7iEFDAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRqHczBWHamgPqacrx42KXQQhNQCuF5V6FXucTdCyeiXv7UsoLYF5mA5ew4CMaxgT8SFSsQP7rPQQkjAM9YkX8M",
  "key1": "4GSsxvj5drXTu6P8yjBU69d2j6QUFi2oebTsXZrDr4i4vj5QQpv4A6zpVwKP1YZspktjouBUjoyZUUjFyRaw2BqY",
  "key2": "58GuQrEkRsUzdopnPuZp2PeVBCRanPdCSt2gTYR3NkjrqvHMujZDNeuT9csPHRuL6P1rRqBKsg2yj1K66AqzfdDX",
  "key3": "2qFDaiss4umHJFP9awxqYAhZTruj5cEWC19PLoAdbSGCwY76T7STRh5GqLTDiZVPb3HhRMTXyKd1Ret7rXW5YGTY",
  "key4": "59VWCaGMba5QXyjP8CcWs2c4LbHP3Kdgp9mCs8uLP9wRNCHJZbxCkNpfTzrJ3sysdbGEZmngs8E4YJftXavY7Tv4",
  "key5": "5k6cECTCBexbriKVdwS6NaxrYtNF55Evgv2V6GetGAMaLYqC1RFXZyKWntZfHnUMwjnP9Mb9KEWKJKuauVULYjAV",
  "key6": "2M9Y7pGDfpf59F2gLmXqH9uHemboocEjxfbLbTPjs3nB1MeZVNFnJsdB9aRUy9MLiPEVJFEBenrQP7KTQAjEh4zV",
  "key7": "34FX3Ro7Q72zAHvvcuEq2xTXgBPoJSziGGdojdWxsrDRdEMh53PnYG4W2Rn9Bgw1t3za9N4YLPufHmSZQcWGRrP9",
  "key8": "2xHU9zsDN8g61eVPj8knxVnCi2UYiMQo1bcDFX4vu4mAtDAhKkobbW3AxTiy5dB9i3BtfMVregEvzkVLdVNymMDV",
  "key9": "4vocMfEijHuFt8Xu4ycY4k8L5v1M3JcSDqN18QULj1rSt57U7fDzqN75VPFvpGk98s6qPoTJ51mhkU1RCSVWMYQs",
  "key10": "2H9N2zdhJzsvaFH1BpV7ZFyHNvPB4sCX1yeiXAvsKWqkT1NXo6MVkVUWixdHtJGbbUfBG3jEU9ypRFGLMb3KMbZJ",
  "key11": "3dAwe4ymmnorTDr8cTdRc5oLdrjmFc4SstaJEYEZrrmbfVH8gkH2iWTvLQffh7Em4YKs7PGUPrzgs8i9zG7pFXvj",
  "key12": "5A42JwiY3YEDVHb5xdvg5uUcd52rsmnZqAYNeFMFbukZy7AKaEpcMMQNVZhNpPxS1iefGqhtHX5Stu3CgQ8cXSbb",
  "key13": "5KYgh1aZg74eNsFnTwTQ4E74p7NbWGAo1xo7aPCwPN9rHYC7ahU2sDmwp2mHRLQK2UyxMYiPrZvTPFhyK7pert4B",
  "key14": "3cJoUTERgZ7FWr2RXy9VSeCcRVkxj2Qd6b8dJMQzNNGcaLFfBTTeVqcUYPma8WPaz28mKMhQW7UbJs8QCBzc253F",
  "key15": "4vR4u4v1ntQWL6h4bi4bwguF9kwTSp8Dw6QGzMAgbQE47qoUVZibjPU4aZ7WSAniKdHxGmdU5MrHHiEp5Ftuqerp",
  "key16": "A3A2PvwFHnJLav5WH1io132z5Pxmec2UTcEtNJUQuC5QhgRjAwoDmYdKXY4WqCmvqdtREkikbV3xwXBfEr5S4oM",
  "key17": "58GQ1JSiYt9sZEFqsWkUqj9Y8GdSNUNFuH4kXyoJpmKeczssZAFoqkP16KGtjwsJJphwZg9atjfiyyDuX272cdv1",
  "key18": "3xz4kBuAgbQHbDTLS1QmkCzNLQ8p1gcQ7C8n7ojX1M3PqaL4ZuJU7KtuJKH1zitddV8zcB6gd39DqC9ajd8GFoUW",
  "key19": "5jYpKLfSdKwt3kbKYZtiVM6p79wArFMGbayMEwawCMke3cvT4v6XbaSTRtfur1YrXqcX5mY72AnjcMMRSkvk3WUd",
  "key20": "d4MJvYxkGB3UF1PEdAF3NFriJTUg4QCHgiJEvBNgitXNm2MgevSp2LwrdDxeyQZU6PayhUHQyXG1FEBovkcr3QA",
  "key21": "3orPccxbpe1abbhRcBKzaMGxUjXZWBkQQxtNNrCee77ZZh5bYP2CRJh3yT8E65HacjCzPDTFmsBz6pFbTAqYKukt",
  "key22": "58ZUXpG1wKjoq3tpkNbZANPMtu2tMZhvL7Lvi7p7E5NPrd6ZqK6KHPtPCeaHENrVYcQa21mnjQe84oBSiNYUuzV2",
  "key23": "3FUGeRtynvkyPF1qczkshuaYqtHKxCpamMz1DPCgRSM39doAfJL9mNU6kan7SkeV25G8ZHcvocaNrJcDBKAcrqKj",
  "key24": "3xrEqwThsZuTeW5gDz2GmwUNnGSs77bZaCabTdku8sAQ9o1JXXLgdDLXGCqYstXeUwn6RpbYZJhpa2Yiio8Qshy5",
  "key25": "5Gja3PttVT6i8Z9tYtiaxGHPFnhMcmVAJ33hhUF8bSJ2WNwY3mgGr3Z7c5mFikippwDAfaEzhB2X6z7QkxxTFE45",
  "key26": "4tn8bimQgGJ1rcWSPyaP3LRPvsm175MyoMU39e93L7sd3c7EpZMF5zLC3gRQTYGMxpPprBoJQkkFPVhtNPpDGWtA"
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
