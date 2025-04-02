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
    "25QK73sPs1f3xxGwG4c5kHsutsEwL8HbRvnuRdW7JJQKPkQf5GqwVGcaTwgRyha7sacWBciEF8b2kvrqy3p4915s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjYoGiHBSVHgb7zZhr1ZxopRgTFR2P1bSpjX3sY6qSbRf4jgd5mf2ojZw1ascXRHsDxW6vAesg5RHu1KvhWYyTS",
  "key1": "2y9tU2RA1HDWJpYUV1p54h41BQzUid9Xmy9Z3REhEGnkv7NdqNeHtLpAvSpV35PQTjtNgbwrJZJGiRSkQZvJRkCi",
  "key2": "5yQEK6frzUxSvSt3Pxcg8jgHf6uisYQC2CDF4u1cCmnDitocbLDAQoSRQvHf86L2Fjh4ihS55TraukWFMF7wDpb1",
  "key3": "3SWSK7ZVZHNtRgEPUbv5sBCMuqYaa3UJk2hCWgjMzCXvzyPUAFZcjjYJF18jR8hBZAM933Jrk2zy6QnkUvSpRF4v",
  "key4": "5dNF7ADNgiTAuUdmAAT6r3j5fv8RQGzDTvTXSkF4w8jD4iUBBhbKsbZMUjdC1WLUehsG6mgRjX8L5U5BwjvvJ8Ps",
  "key5": "63Z4jszTV8SJJ1ELFpPh2LmtWFdUD3oeZqnVidDRUZZorR9s4oCnRWcR5uMAi95oJADrvaFGhj9T4c4RTZFZffMH",
  "key6": "ws5dzxitby8JtexDADKiykhSkrtzSSUu7LQb5GHsvck8TBMM3vxXPgfso3KusK3kihaM88W5xpUmeNZo9doEcZ4",
  "key7": "29f9saVdunzYc1HVTP5PAMv2rZQyjBcssFUWUS5MokK4g4jcxmLtmte8gdXhU3jVFweZ5b9tFXwvPPDFdb7DfyZk",
  "key8": "5BoymQ3rZUx5pvb4u7FUDTxanpEW6qTBZkc9CgXzhBL8GDsfGFwFnVDRpadJ9k1GdP5NwmiUevpUViHPK7Ro7DwW",
  "key9": "5UxM5xF8iQhRgh21E4GXxbmAUyCfi2FnDEJxzuo1nyhsBcQBGvxzCxEcwn4zkuC95yuetMb8Vt1Ggf6CMpeJakxj",
  "key10": "2edGcuwNMmy7J7NAiEqre9fpSSa9goPTayWFmAYACZNXnp3HeebjiwxexmRvULGNrMevieCgxF7k71atLw7YBHTf",
  "key11": "qgLSzwJWhGkMcRoMHZw2QgymTr5TBfS94ueWwpRme2WFs4C1sBarfahNW136auRX8yjzKDMSi1zLxh7NPAjkEgy",
  "key12": "vMrEpkt4dsE73EvmtPJexKB43QiqxdY9YLUZpwiiF9wHGLaV2yLXPiw3qbJtQF4gHi9BmxJU2hsxtyG8ndb9kjQ",
  "key13": "4bMgbe5TAgSTFtFsjMVaTN9CDNVaBxiSqcC4SyCxcgC7Ze86HkjcztPNx4gcMVKuFN1emaDC23HVa2XbYUAfPhvE",
  "key14": "3jPgGhDwC1Bc53sA9NpacGL3MnLSkk24qr3yy3hnq7KMkMY2ZijAA2SjmJxuabhhT4qDbs62NEfuNyAbnwhKC7Bf",
  "key15": "3V2VDFDeiUU9rKahJBggHDyCmgwkZgYHEPvCB8JHLpkryAZJVjhvnquCCQbK7cBSRFi3BRd6yBdfAak2fuAbPM7J",
  "key16": "4E7W7sS3ZyfZfEXNSdpvTXeWJVuX7CkQgySRvAvxjm6QvRCnN3rmkciu6x4ruxHrsmgQj9mkpW7mt4v1LM2E4fau",
  "key17": "2T8uQiHokRaSTxR9kEdZH3oyLh4cFhnCPyA78RGHd1dr6qixTbVjAgrEaeZdF3Y74ZZVUNVkdo82DhVt1YLjrQFk",
  "key18": "4woNjjEAv3XPjpQWGvDaJookVVWaMdbvwibHQ2NoyBARBemMzKXzKkbvuU1eDhA4T8moCnNgo3F1BnrqvJMHcd9g",
  "key19": "3RixyZ7emQc5PF51XJChvSjCPN3Rnd8WAQjfPv4oAwPBEXPLwznQ2psZVwb5pxfdcd2zZfmJyC1Lr23ic87spcna",
  "key20": "4WYyHs1PvoTYt2VqyszD2KiohmsyZozctw3ftTKqm1odeKipNgkrRufRJLxh2DdsXTn1gbnbDdNjikyJF6aG2NFy",
  "key21": "2r2rTSFKCdyM6vF8m5H4tQ3n1asnSmnk8fRMuRRTDbRsmJf8bco5sNUY2bZtsmqtzfEReJs3bbMZpW9WJztABYxL",
  "key22": "3zCGrDnmA1rNHQBbwiv7Lzj2o4xE1uqaCVEvrcPDohFB1fJWQAg3xEikLKMvJDAQ5d5SqhN7t5JH4y3T2oZijvgS",
  "key23": "3UBR5F3KCVRxMcE4ye4YYViAGLpxzpRxX7VVS9qUfxMLYcWX6KuD1GrussUu45pMmMsSLpev1vjriyG2tKneYofm",
  "key24": "66uMm19sPscrhEsBrMYJBFaZr2QXYaPoypS3rKv2mc2BC7raKvJY1L7HUF3fH21t51UZqjyNuXRCQGApx3czgzZ4",
  "key25": "g3GoaDMy7s9jNCaR61Mz81BNF8wkYc2jSoE4azv6fBspmY1YWBY3VbMmo3Q1RUCqDsZCyT2UYwLvawuMpXLzfaM",
  "key26": "2rWv4zuc7KwAhn6TWtw1stZMiMaSwRAVGkUS4AQPBrwpTGxGxmkzT7ALvFfHEKcY2a8PL4RNSsbEvrW4PwPP6bXC",
  "key27": "rGy3XiFx7nrbwJ3cLn4zA3rQ1MToVfYp96se2HPNvmWFWYKMx4DvGT6ukunAEeFJbzp6yCFLxceiekcjcYyqkdP",
  "key28": "36ECh2iQAZi2CmYeQvx8P1cC1qzUcfGnZbX913QPTx52PnqV1cS6obzZ88Nu8yveRDhWgCqN7xzD4B5vrZ5XtP9s",
  "key29": "5nweSKVdNmM5GCM42YQ2byJMkF2KS3Du4h1HQS4FNLEP4hjNdV2fKGZMwBQq8hzqZnR7BbN9T6tgSM5srisgT1TP",
  "key30": "3PBjw2FUytUhM1ngaAsw5Uub7MEcefqEDkQKWEzKG8KXJAeC9CCrF3xrvRoPqRA8BkBHALdmrGvAFFasVvENkhj8",
  "key31": "5fqGMq7CzDaJvQTKpi491pUEneCTLFf1rYNqbR2QeQswW82ht5UGaTUqEsQ2mM5kzLWwF8au8YJYjVMwEhK84a5M",
  "key32": "5A3VYbvnEpVagdSZk4TrfVb2b21MD6bJXHcfJbzdifjr24Ju1depriizgKaU8PAeqWD89f6JFeXbfeB7gRUz4RFi",
  "key33": "2kJKhaWfGcJPnS9FTWbskUHX7JeGPzfA75DdK5Ktums59t9YacBS3AXSAHnqtUx9eA4pq6uAAFfrMVRgfxGrtg8K",
  "key34": "56XfrmxmVshj7kkMaMsqV5PwGLYr3dCr6c6skt9mWrquzkGgkD9PapQyi2n5ojS3ggFNXVoGo6qTU6EEXgFRQCPG",
  "key35": "2yHitZfhkhWVMifcmU8KpaD1uJdE2o4R3XwARpVb6k3n88prWEYG32pYKN5MTRL29AS1dTThr623w9FoQmfrcPw1",
  "key36": "4UvnCYYMzwoBLA99ZheW5VMQYZH47QGdaafCikv1pRc6duGfcsWULVT3aikBq2YeKbLSxFfVLWD9cFeTcm3NwtUJ",
  "key37": "2sWWgfqfHpZVCHvBLxAnFsKQhuwsB2KbEMnUvXLJjcqMWL6KsE2rdNCSKd6dadNGWSTyFtD4n5AoaS2amcpoJkGP",
  "key38": "3peCcCxRC5fubQhQpdToM4RiHpooLXukD4iEuUZEG4d7fUP2bkxxYrYmtXZZrTdJpCYajEVx6QgWnc3cntbi4vcf",
  "key39": "3Sr3WNMeE5kSUU9L2B97cTwjvYgqU9WkuVHQUV6nPrfUoDfqMNkwqtQd4N4C5YnY1rrrmkC93NWS5x8cfAZA3u5p",
  "key40": "2Top98LEeLcxm5vVoVQv6bCX1xNqgQNHSvembAoDoTbPYb62YfqicvGVV556QhsvPQWReor9Gr1wFDFGvoVyAnAL",
  "key41": "2vC1awRtbJopX3BMCDCojGRBFo87XV9L6oAh1hZCej6Ma1VvutrrCYE6jn2gyeZwtHvoMFtihdS8jvfVkDhRKR2K",
  "key42": "3uC6sWFo5Hnzxe7fX6L9pg9PybPCqNkHhjouoqH3zj11JwngrRcmdLzMxKG8mvwrfphEjSwocbGaEzgdm7Asaosk",
  "key43": "Cf6YdDEJqDekrydm3ts9g2Sw9DY6fZkE2BnB4qjB7ohkqX7fTreS1b5mQWnYk2xvtNBZcRXLr7337Fnh5G2pPPd",
  "key44": "JH1kZHPJCy2kpKZLBvN9iWTTyoSkoDaa4UFcxw9Xdze89wFP884CQdHiajoR7mxY2eF5HfaKcFDzeNbwUNYPWGc",
  "key45": "3kvyFtmuUxTFEQS7Zw7wiWDeJrvHBNqXGQw8zc1A89PqmsD9sbwYA9L3Pw6pzXvfjHjiS6NT9Bk3kcfbe5E7CHNL"
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
