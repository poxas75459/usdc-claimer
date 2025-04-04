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
    "2jcqPUFULtpffiar5pHc939ZS4CPceBHS5v8DJDSGH3d8jvCSzbqQEn1PpUumv8AnmrEpWkui7KpYvgKVYPn15Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DvwaZZrN9B3rckVWxCcc5RCAnY7PSoSx8eS9UdvqsUmCeEmx1EnAUNQPxCLnkXtKZU8TfJ8rNEmjBvVmeL6ggQc",
  "key1": "5ubn2ioQRozaGcKV9LqPwY5mULFT2DvqMVPcGNxvrCvU8EtbnVGgsq7HFArJ4S3FkV181HvDXJoHDypkG8KxqbSY",
  "key2": "2a6WW4EtxR4dY3roKbRecobmV3V7C2DQpfMga8rHoCzUvT42gFqeR6U3XtexB47Vsz4jZr8JvKPSXKS561iGcuDf",
  "key3": "2z7i9A2fvmq6Up7C5psAYwtnmej1pFao7dxq4PqbdK9ot1J8mcZhL4AfSUUxczsnGTXK3YTFXiw17abt8Ve3ki4i",
  "key4": "5955VsX81XhGfo535qWxwz6xKv8iUmW6yK4k1oS1vu8u3LwchyGgt5znpd5YdzYVQ49Nzi9ebknPuWsRNEkWNydA",
  "key5": "3Cv43VPZwXBVsyfsJHrixvbjPz1kREeX73eudQL7bS584aEt4Po64E6sMGHS2C5FjNuYjd7oFEVpjcHvRoEXGu5y",
  "key6": "5o42xoRHnqqLyvnWchSdvtHWo15j4UvrGy1ntWJMPYvAb4jraTFjMqxfy4XhLH5tc6MFkfKTeM2ckVA8j7fc5Jax",
  "key7": "4oYtjPkQUs3fGcZbb9Fx4heGFwyGj741cDadgSzrDpCLSMmGh5SSzmYyh6dtXzAPgKXh3DELFLui5jcVL2pSRdEk",
  "key8": "4S4ZdnXhF3A5VmhD2jtuLtAc6Emj3zH3bX4ggByK6wdAfPertUmP2DSAVc9BWfjwNatC4qo8yz5PAvAVqyQWDE8P",
  "key9": "397LZLjA6tLGdy4gX39dBVikKoAdmqPWuBHXXvbvd2abEwFxBWcBrhPPEciWRJRuGAdgQzmBGdWydNLn9AtwfMvh",
  "key10": "4vXdAF9YjBkVnfuTDuFc7WTikFysQDdhN3oyXfHhffskaqpnMc2DCNAjoL53UHB2kXstFf5zxMxnvnLbuas12zun",
  "key11": "2KhBqcATPMxGCj7eiqGBBRshuxZRhG2d391oC4AU6LxUmQbJVtRy3Qnou7dtistbuSHBsFWZXTfGDMahpyfDP4st",
  "key12": "4wbCsyMTnPsUdg9cbs4jkhw3Mazw6D2TzGPXt6ZEKL4Z8W8FBpKmM9vKAp65ySC8h4MzXLb1Kb1255Sus7RwsWRk",
  "key13": "9n5ALrhAGiCtm4EW6ZTW8uubUsksEUfqGN6rSVeLFUasdGa7WGo2n5uak8qj7PAS8ndrs4P19Hjvd1Mvgdkiq5f",
  "key14": "38HfUHNeNEGt8PFMrx7eKaEp3CZ7WJQqMFBP2XCsC4TFo27q5JU1YPe14cysShckfC41JPRNPZCR6R5B8i9LG9nS",
  "key15": "3yDsDpQF8HrCNAi9sPbxkF4Z5e2PJpTxvHLWdF3K3C33nt585HRkqzZVTLms8mPe1pZBQ5Kt1Y7BpcT8N2VRYRje",
  "key16": "tCu4uLD8CgQxeNJwCuzG6a4LDmCuz2Je8B2MAMuRMKM2M3wR3eSbNmk68ec22nq8bp7ydph5FHUxKVxX3w69QoD",
  "key17": "34J2mM5DodoMhsSroDUjrVLiCPLBKJynwzjo2X1ZG5RmYuGbhCogqsBqvXbxh4khAipSK3QYN29xhSv7r5HwTxeU",
  "key18": "5dxcxvWB1wtrESmpDHy8kqSBXN5TsHEJr9gJjkCG9FnfbM6mRmJQbzL5BLaEAtKkEBGQDn23NMaNhjW9PiPvWTX1",
  "key19": "3bFG6n2LUjvuiNnXXR8PmSmGMQ7VWjrTimpAo7u9j9vPbBPRKNHBQpSCgVLQtVbYjzR15cN8whtdq4tygpWuULHf",
  "key20": "3mLj2pWLv7kLt8sa3k3gbaoLmxj5aENeK45CQ9wkxstWLU5BjxKPXCDbNMijEjrMpWyMtrEdUTttVAi4gyLhJe9o",
  "key21": "5TYyUsHMHUszQnHhnYrdi5AYzoVsvzeXuzcdqJkm8Cb2vu4DEUG66LEJYiotVstBcgmfwb3ao73MgdQ7KXN7tAiY",
  "key22": "29psYF5H6vHMhw2xCNQb8T6ioepUzf14Vs9rVSvL6rHgoCuzyjyNQj7U9n2FbhWbWYKJQA6RaVfAovVU9w2pZzVA",
  "key23": "pwq4Y698eXJEvcW1Urk9uM4aAAMve3GpvV6ETNASJWPfcxcpc3tbiusBcvUihkkhuEsUkYXY1KMyc38sHDepMJo",
  "key24": "4UbqTGaxcfUgdoQ33HJpx6WEiSaa6cMFaBPChwwrwPPVjpwe5iF6wgcfkxwnJsBQ6A4pM7csiGrTGPoQzcQcrxw5",
  "key25": "5Evi23urhxpczDMtu7htdPVJfxMmSt6rtbgiUwKd1YQYgrnXFKzecTU7MYWNGdS2iKaPmBNR4DeXszwWvVofgD2A",
  "key26": "64RpqmVQJyvLQ23qP8Gw4gAGynCGbJcQzXsAJcWvhbBMYHsBChdwzDgDQZtr3dLs7WYueZzNauJ9zJA54f9RVHeP",
  "key27": "66FF9iqNDwU6yW1KDEKPCYL1MWwinfkw9KuRJ3RnhohC48cPzZBaBSEEE2UKT3h1E8yyy2ouaDbaHgECeu8nTPge",
  "key28": "24RMLQbc8ye5da8QHmWQAKC4u7L6k35vqmjTwiEUvyC5ma8xqMbFFL2RfjQHuuJQtLpSVeaUYhHLx4LdCQdLVhh1"
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
