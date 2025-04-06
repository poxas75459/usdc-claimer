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
    "3inyJN7Uo39WF7d3ns3zUwzTpKK6XvM7DtguJ4ACWa1s6jJDHjQWrb9sPcdNDE5GjPiGfUDXr8YxUAujyQioSWfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DgtimQaRxg2pcu19fNYaqoXgGYw7147M77gRffP65ni2s4MQeMQrkFtZa8QDxMM4ZrPRKe5i4HuSDgUGewf2KFp",
  "key1": "2zoKLzYswJH79HnLLx92QuWXjEeKwMywGECBnN3BCV7vE1Yuucayj6DWsFz93ZDkNgdfoDjJ6RYRKJ1VTV5b57aE",
  "key2": "56u2WRwXe1jXh939RE8raa7pr3twrYDpNEpDkRMeqnGNZFxkSxRYY3yzhtiUt2ZQY1dd8NronwBB6yyyE4Cittjv",
  "key3": "5LKyK3uRED6h7upJcwLgyUi8vz7g4EP5mBXtC7QdPaLCA1tRJA7Hawg9Jd5R23Fp5RxaGE3DidrG72nmNmzSgFGs",
  "key4": "2QHW8hGGN6hRKhr7NNR62Kn8yqf2VsJVsBek26qerdYn7r2PE6ffgTkVa9YoXKSRwQeJAKKKvoSpfiWnZLvF8hsD",
  "key5": "4L7Txz5vcTxy8Jm2sGSF89UT5J2XWKBDKDE74aURsq37UrK6RmuCyYN3UpewwjabuymgzkNDEfVcuKQbpcYtHZrp",
  "key6": "4z8vzSCnrpNsJM92SYeAwqfPNjNWcNp7cHzYUz3FuGBS4itWfHQ5mLCveNGLTaw3GPTrqZy5dFaaYuCWUmSdgYav",
  "key7": "4gJSk88rKRPnquuTWKKMAgt4so8uL9i8SpwtXJgF7HHyyrLgf7w4A9VD1af4Wr8VNvPj4v1uxkdBSt6JDGZsUCtm",
  "key8": "4qQW74qAdxyTH1yvkKDuZLwJNdPGFjPKZYubLqhdZKDWDjcSVVVrAQvDPrkxEuEKSpCtus874vAmUtBtdNUQQSo",
  "key9": "3FvswMENLgVgDu5RxHfDhk9GJ6Zjjs44aHtxf3t9Kn5PNWMr6mZLAH42P7SZu8STxMHzN4Jg5oD2kWB8n9tXBWDN",
  "key10": "566cKZKzPFNuC2L7FJkpmwGdfFkru5bBsidJdBYaWmBZ4HnnjsfkPnxTc7EgJjYL4egKyPdTiBVfxGARp8rWSNbQ",
  "key11": "4dLfx3mrHFK5V3Jwk79b7w3jAD5vUGnDPXBrR9uGZNzyxX4BNFqZfka5MeFH24BsTnkskQ6XabZH4Vx5APJjuyYP",
  "key12": "3HnXE8JjmjmPEthMoKreuSwYch2ow3pRyf4vDijSdGf8ZyM7MJS1FASet7R6Fx6nE9c6vDDmEgS1XDqzni8PKgZE",
  "key13": "5P2Bi6Y5R7Gtef3tvm29rHQPQkoWHkw3o9oFaoSJj6CuzJTpAhUheoZqFQBAhWJF1ezro9zrNCXRheo4bwgRtGyS",
  "key14": "26MJwY2pv8kKmJp7wo7pnxYbpAW2n3jYguhAcjYdDA7PGqyvfN58inmq4yA38BfF61NXkY9XyAoSuTNzafBzXkEU",
  "key15": "2JZKk1ZzSnr5DigLng1jGGPCtdZ3u4pEzm1ozTCQWMjsgmZsMs8WEDNMDgdRaTUcPUPHTuUNSQFurASKnqzuc45f",
  "key16": "25tD8QaPWbeJhAc5shnxeiHP56Ci1FAbsPHnUDAAYtW8EB5frU5Q7UP3PRddLP8dUZYuXfi56Uah1F2hUHsXMq8M",
  "key17": "5NhqDBSzLXxqQBJYhG86KkRXMpts2hMYRjpheRYbRMJzZs7tQDQAByo56AkaLFk68fVG3y253o9CQyNE8a4F6B9w",
  "key18": "57ybUPBmM7d7kWhQmbqBws85VbabgCdmzXnLKzhbUsiyR5R45SW7S3zhh16mh9wZjkHUufz8EU2sLGX6ySuqj5a8",
  "key19": "5jhpLsvr6HhCRoyanE9YyuakT43ycNtCvMJufWQReYfMqjUDzVWMiMgbdRju7xrn5hqkuBtLvXGJTxnu9qU4PLyd",
  "key20": "33o9TNhhNkMk6C1GLnYZrHrkbdmPzeDHBCk1RDV41EAPFSKhVUm5dbL4562UkiPjmV3DiVevcbFHqNRYYUt1ZKMn",
  "key21": "3yVfF5UFosYm4Gx8pij3PVeBo2tX81dA3i3T4bkya2LzgNwPZ7C3K8bVqL7gpVwnygSsUB92E2exL8ZRyMxUH97r",
  "key22": "42o6vAxfE3cuwuZCBgZPgaC7otAKoQxof4cA9fVwPJuGXvbuccwbw1ULHfubuJpGRbndC9Rf3U3jvepB9SFSTPRo",
  "key23": "5xVGp6Lti48HmugzHqjMzFXVnAc4wTZ5M3s6U3pV55pUxVVHSdj6isAN3wbDWAZqa38SSQ8XwsjypLvSjyRN8ix8",
  "key24": "gbxGsQoYVodwdgEykRGff7KnsfbiC5vEE9pLuiWQsZapbSmQng8ZiUyw5j79kRExw9usyBEkTBcA1TVZsRucXDZ",
  "key25": "4iQAiYsLde3tb6Y9jP4kj9eMA9d1Mkx8ouNoGBV7LuZrxMzFbKLNKf6fmNrN1UcaM2xX7GjQ1jBFrMC9nSifPUn1",
  "key26": "4RbNhHtaKCAcsvo5FpNfpx9KP2ctdsgv4G7noNrzzpwrQ8jjTjT6jZ64KSFchdoofGvT1AejEpRiwmVsDmgoNcXw",
  "key27": "4m3CSKm47Syft4cWoNHJPf2YeYFVuAGiZZzDovwsiarX8DPVGRrtNzE1o4g2FqhNSFoEePuBg6HpvEJuj4BhcJhk",
  "key28": "3sz5VXKNSBU3CpTYJd2KP3L3s3rZ3NuYR23csBQBbr1fcdGY6oy2ycHPQW2TwyeGvZZYMAZfNhGq6d7fNzp8buFD",
  "key29": "4TLA9tFBkWUr5m32UDtVUmEhHqLaJcGNeCt6UDsRLWnNm8o4zb2s6EvGuUAg9WqgZmBvknxBKRg9RdpJ4UV4ZwAs",
  "key30": "3yZZMkRNNfsiuUm2EcaBtr5PeN32XhNWFVXQQTboTBk17T9htELsabDTYkmB7ZNnk7aSTSoF4qM8N1z3cy6935hg",
  "key31": "2dcHzWRTksEFYneR7YPmGnSvz53nHg54Wbz4ut383W79LtwLhwd9LSwh14r7mBpHmLqKyh384aVVtKMjY3sJPoRB",
  "key32": "4kMDYprhAMAjUup88sZpSa1UofiZcg6gJiGyXg7SkeVsqLztrCFn73uwRZKxZfiniVfupSUbUomLdqhBANtc85e4",
  "key33": "2uJEW65EvH25VchBmzdMNmhSfzjJgxRqhPHFWGV7KDaEBtH1TW7xRwiDAFBcKugDCJAHzUpPVg7MJUetNetaTvsQ"
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
