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
    "C2zE42rF1HtqYAH6aei3LpXeyR3JG5QNwFtUUsJPRTVv9R4JfUzwPKmsK1aqPWb3XjzTswxeszRFGD4DPUogves"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nCmfHvvzQTNEboKC28SEXKDGyCffAfXViBZGz5NigAmtz6mMT48ZbQuFbLSgL3zzgpBm4hK7vYNo12WPffpKqGq",
  "key1": "wkEqmjYFgNdkBsQdoAf4rnzWdpaQgdWyF9F2vHaDkbQcUgN7ezoBLGeDt6mnqGj8bGV7Bgkh8QHtCXSzv7b62cU",
  "key2": "4dooBwpr711aVUVy7rULnVLq63m1ZgwurtrmSGuBxgfwt4PSjYt83F6ioErWYJnGyDnJBd7SAwrNgzhZ9SYPSA8Q",
  "key3": "VkNgqG8MuV9GhSrFThS1Rzsq4NUUWqHhJcwiNc9TDK91iPf3yLw63Crbf5LmGwu7PkSQaj7cCohVBxMVQqsV5Yc",
  "key4": "4JMS6Ttp3UFyGsHid3vJuhrh4zL6XVF6Z29LhKrNe96xRi5D66iLMEB5eM6tnqurf7Xgv24fyBBofKCFbACmEWyx",
  "key5": "2ckC12UW5MC7xmRqimG2HfZhaE6LSr5HF9Mm995xbyPgknZBSqrFnueqn9CdC8UYS9pxqWPK1NXn8wDuPDMYCdLo",
  "key6": "2DRNzZGbEqdEcBnvKrZ3TWRnjiY7gQnR58d6EdZMxy4BwEJLvcBoat3o4s4QjSWWrYSQHJkqEaxNmXxYdZc32bcv",
  "key7": "5rDbAddRCLaBqEWFnhy9EBCbcZSfBmPAcSEw8Rb5Si3k88WxXFqwzsHfFdguMur2ENvGevMGwQm8bTV7D6VA2hpK",
  "key8": "F4qpyFxMY5wNTLbX6Q3omHGqetpR83NKoBUpdtS63ywccjSfv8Dg7GqC7zv5hRQsxJhJQ6if4cCkjMim9orsP83",
  "key9": "2joyKP5BSQBmVYNFBARzTfaPv9WezLEjmaAy17tabGK2KzBmXkRDRZF5q688BM8DPdVycX3wkCN6zUegbWSoBHsD",
  "key10": "3sVFfdRJtsCxh2SoonrJnoD4r1eoRCXmtw7HFKE68u7aGtMptS2dTgyTZm74jRYwf2jA7zMLhhmwGs9vVSccEMoS",
  "key11": "5xjox49ARP7EHALkjHTGDcCJkfEFSr5K7iyUAFKAgNfnxk1aaaCJYiLBXY4cviiQ2TpLGARAhfNfTD7Zy9TNGVdU",
  "key12": "2nLDqWU1UtGK6RDZXU3YMiMnnzCEWSvKszrvNqDH9DF9GqUmU8Lsr5KoSdYWRUP6rt1YX69HNJTjtz2LyyotT7Z9",
  "key13": "4aZvZmYdYLyu8SUcoVtfACKNTmu7oBvsTYH6eFwFXvpJaRLxK2vpAaM79uWkCTJgmTVBgsfUvfnKgmbkjUugHhj9",
  "key14": "2YZUZo1Zxw4im5y1knwVrk5GdcpEZq5zUna6pYcDozq67XNEKgeFwxer637xZWgLby8rbkbLu76sHucjSrdgUZRE",
  "key15": "SPjpvmMWKGe85rPUnFDhzDZDaMTikjQSDKmECR3dodciSdXhdsKiYq65aRTVHsUDGWjyGmn4qjjfAyvTcMjJWrg",
  "key16": "4KW6t5uw6bNRTJ5pqYVA8XxxM3au7yTt3kw9nyw7a3hdgzsLxSxBh6jLp1wLKU8BDNSPKyhS3rpuGATo49C8RaFT",
  "key17": "67dN79VY8pe5DBfPp9fmATA3q6nz3uS7kny3aL4VMRZghyanax3nALrvmPtXMqMXiTiqes6GytccbBzbL5g8Ce2x",
  "key18": "3cm7yvT9eU854xLehqWr9c8TZGc2hkiJ1uEyWcoMUVPCEZg6h91g9CUmxjBFMKNUikz69yrpFonSvkHu9T1PRqMn",
  "key19": "5ayaJVfdDdAzejUKdPYNGeazgJYpVtS1Rsjs4YcBv4w1AQKWFeTPCWBah6gcdWjDXAbdgNN2ZQSTpRF7Km9r7MvH",
  "key20": "3crEdKn8PPyTQPxEjJALrzKNEFCTXvxzH1bzCNxqNUP2ZzFELEj4QXgqHfZF61CznxZv6tQY9zqh7b9TwxdfU52T",
  "key21": "5AYnh3yV2d3o9uwgyciSuVw4r3PuHM8U5UEg8q9uu4EozBujZKHfQRoV69fzMgEo2kVN6wF15Tm3PLAuKZWGdRyo",
  "key22": "4mwBjDe5CTePYF927EFELMV4NepETrsnw3JhyPwtFD1fYu58AGCWzsRwNXDWBoDhLwPnJwzzALruejqaTLgf6cTA",
  "key23": "5UgV9zuNrxfLDM5kebnDJ4BbgGRttHQeALHxpSYb2YPftM5n2fTYUhQNos1fgMuC2K4qjY2zkrwaeKpBm9Rcj8TR",
  "key24": "hxk2rjxwkr6tAWKQWKMH12PEHwwJEDj5bHUm1RHNDrBqNfepgVw72tRvgNZWGZQJVLRA1vSaxqutne9pGCJgvjX",
  "key25": "MV27vBjZJDexVuNRFuk6kg19rvrUkJTy71pWeeKwuVSgmqbHp5JJL6iJFVFoXjRDHCDFypSM6ydpCBHhJdEk4ps",
  "key26": "4vQqKgQhuB9xYddVu3pjH8x2Vpm2UjFsp2ZCkGoWJXB9Eaed5KsATjam4ZUka9NfbdVnZ5kb5AT6rqkVCGkPapvj",
  "key27": "k11J5PLCGpwK4iSxMwgSCyU5AGX1iQLg3NPDLkXibePNYTTNtweVetm1QHAP61xqP4G9PBdoA3wwYh3a98SSJ6p",
  "key28": "4xsUx7XQThGdhPwMB4LkMMHZdMa6DKm2Q3hia5nmVR6p8ohUpqE14bwU1HUWvCH7Cj1U8vj954kqa1xtuegavhkw",
  "key29": "3t7vzNaKz9LFdeVtq9T5mceZ6QFmk9GzjZocPCwShjNHNxRb4x6ZVXwFG6qmn9LRG3EYfKYYuUtKuXzhJ7zcMin2",
  "key30": "5BW7QAGqCodaHgtRF97GWiNFY7gDx6yskkbJxWqWDfBXXozEojK9FBb9u3nUszGWDcwxqYK1ZFiT9e3a9dVQbMjQ",
  "key31": "4ozCVssD6sysquj4t5SH8ECnV9BpCjuiUfCdNUFSCfbCZUSkZ5ZpfSyHYUFNRXbcBam77FH2mwTSwK4wSKUEyDwY",
  "key32": "65GmPWhCny6ExDRQTyJvmRYpEMZCz7hJH85iqGSjirM1UGJY3YTaAencV9eP42ex4Xcehcvh67akYJJuGpTwUnzE",
  "key33": "M1fh1jnfxi4tQytxc6CQ9d8nGQfDg5cgXpysLmkKki6jpKNU9kUKnat3eM5aP2p97vPppyhTsENzf4yr4QgZ8Kz",
  "key34": "mnAyF73S7Yb5CmWtTWGtJcEPff6qNLm11uDhZSxLbN5ZT9wfdotw1ZxLXnNDQhrj2pqaSor8wbsX2LcNGE54iYo",
  "key35": "2GDUkJPyyCZuh67vTWgVQWzMEPkshSUNuaRxcyVkhCa6153wUqx5TMv2fMcPo1ZkLgKnNwbqut8dy6panZrBrN1D",
  "key36": "4Q4Zad2FfBsgmSribKnmz31JZDgQ5qWSXifTJjSAb7Hk96G2VMmfoSPvQN3gwv3i3JzCPm5QYz4tYhpXzoudYUte",
  "key37": "45oriLGsmyGiDhHzuJMyuPAmFFS9mzhFyWSiLrMgJtYcDpGXoc5smkuM93u3VRvdGSsBMbPjUUou3ps7gDbfSRDV",
  "key38": "twSg4TgB9gjzitQdxNshtsykgt68Nr7tqz4brcDUS68oo9aXftGcJLWN7xcYwP89ShwW14XUFs78Q4Mufo1gmkW",
  "key39": "NJG6SaKCHgPAtyg86UvYSe4qjPAb7eeqmYtwze6FBxr61sDZ8GEr6sVzDmHkhVjbtTWyGCcwSn4rih5oCkbgGc1"
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
