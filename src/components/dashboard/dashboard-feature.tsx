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
    "4KUfnQsFbGcyLpujHey9mGs2viQmAJUrN1L9QqQ7LcTitiGR7FSSoys27JVA3h9uf4Linax1X27k3fAy8FHv4BZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLqwxh2YgkuFBFEXr61Gby82LAfiFCPiPVdeAEzKZWz2RgTA7zF72JH1DqnvQvxkSbWAGnk7cv6UveFFhWZsvzF",
  "key1": "4qU67cix4cxfCUsZK9W3G3Mvq7JksW3q7Bvf7yW2jWfinSev8fG2MwNC8SPNS5GhmCUpZV4MaQL9FF2vkRY5YAmP",
  "key2": "tdGvcfUwTGFoQqkvhPuhKnp5vGQ46ahKDBU9ywhunKvRVA4UGEtGbNu46ZqKBgChGyhtFf4K18j4sB81Xq5YjXW",
  "key3": "5pnt7gxE7tXwUWHJU1fbUSHKUDy8rPQw3MmuPNJjH56N3FBLiFU3PhQsugTT8QtGXR1VSGrquo471Wf91u5WdUQk",
  "key4": "amTqCGUWrL6WNeRCaUoHr7mTLok9ir2kW1AzNetX8uFZ6j21q7ThnFBDHi3pKkbesecVT7HVYLSvqgB5EBkYnTk",
  "key5": "4qJoQVptnLEuZEuZqHnP5q6gYYt6m97uBcVu8rYqSs8bJpJhV4t3sK7UqTSSkQQ7KLZN5yrvV9BFXHWe8tJwE8uX",
  "key6": "24ZfbjCH19no4VsUBTnfLD2hY9HaqLhTXrTS9sLQpW1NFKzdbH9QmXcy5N4Sz9mvUDp4F3uDPGr23iHwxZCdcb2f",
  "key7": "3yfyQr2wDSEJhwdot5Fzso73QrR5as7NhHn7MThtPa4j8UXXFeaC3X7PXMV9d2fgB6bang7aptbRLKuaE3vF5raT",
  "key8": "5q1XvaohMa1jnoa8vMG7ojjNRFywAHtJMspU2WEpRx7MsBQJt3c7qN6qxDhUnx6WRKKeXjE2CgAqTHGzDUmg6nZP",
  "key9": "3s6XZ5VXJeVF5SUXMmK1ompcmUnXDhPifVHCAh6u6JkmdKVR18vWHDcP2EdXepLAKaEfuu3842XCySWeUbf5DwvY",
  "key10": "2558zjkLpAhWURn1waK23vtJCrUt4AXN1CtfTea2bYDdZNhNzXSjLrftuEL3KDGgcTPeDejrQxXxnCnQeUwGSXAx",
  "key11": "5kcBMWbiLRtkkdACp8uZ6kYdFm5x9TBD3E8vtChTtAzHmnFuhcm1YHKN3M9CARAVvh87WAox6hxjMtrhBf9VJLAB",
  "key12": "pHV9C8vvocwdpVVatsD9qRRuaSpbmpxjDwXn2wdh33buBsHedntseP1zCPC3AxmxSvBWkyVWmc9V3Gdhnwv58JH",
  "key13": "41ixCYNxy1kpN2myFrKWeYrcbvXVgWeryjtKx7WRZGg5THyrUx8sa8gShGyKoTpbvgT5qm71oj7kNoCVXyuuDXfy",
  "key14": "2dcULL461hSpG6nErnwKKNhuCg8zB5YaUve2mnEdQzEM4i9w9JhAe1y83uiYGragBFN2xDipuXjR1KTPt4rgbrah",
  "key15": "kREz6AmFkUgPdMxjja9LPXD5FHWcCB9BZib4hqgeNfubt3nGjhwxTi84G4j75XCzYcJxLtHmJpDVVpfGyPnGayr",
  "key16": "WNiTqiZkGDAKyMmGLhiLnXFkr8MKcyrzTCsdPcSUNQtTQZ1VfoTU4ez1osT4SF1ZBLUbgjwAz1rWLtpyoTiuukd",
  "key17": "2DEvPGB3M5smucWpxnj4nTqYPp5bYmSecN2CzkHdXTpBKjVbB88Jdac9Jyus5H5xtAn9eEeUCKsDKi4pFEKUBNvF",
  "key18": "3n288CVpnEhUBZgPnphxgt3cqNbyW7bBV9TWq6bt85k49woXTFPEku2KR5U982LXqexqpBxetRLMwDCRkqWLsQcZ",
  "key19": "4oDEPc8SnVddjgKvrK96HfsaG5pCqjsE36aKmPUd3NyMKxYUzQWLL63WpkozeDr5Tx4w5amgzhTKY2GxFyMPXNH1",
  "key20": "3XjWYqUdLD7NqzyUohQwjy4NPHgaUdtYdtPveuVZg1ideozKrEHh2facCqCabM6Ydx1dYqgjjLonAUhhq43jkZf3",
  "key21": "3HdTobCMRmdH5o83nqqzgTAqA8um7XH6yosXSpYBg8XmhBuByPUDnpHGm2NmNCmE4oAW7EkZXv2GUC27QS8ipPe9",
  "key22": "523xL71XT15roS8p3YdbwXvEtgJHobMifW2NKWL9KeZHBDk1jsYvippztr8dqnUxgf4KSP8VccYnLHJZdQHZpkXM",
  "key23": "2NERaYEy7bH9BcdMLJRbSzoe99SRtJm7A5427RcWoBHWciwPjpp49W5ePchcUDjVLxf8FM2getZGk2e1C6SqtFuN",
  "key24": "3hSbSZfRKL42p2LB834naZmTahGE1xYTo53ceKnBDX4i79UEFzxayW3wYRsWThcsTbz8c8bmGyd8BNdPU9rvsiCw",
  "key25": "5a1oHazPScj26ZMtYxfmcNPMU8i3QRacLYgAsQCjfm9mFd3HmbK1kjddeiRxTEShJ3LbbjiS5CemDd8eK99AYufS",
  "key26": "4MCPmc1j3rQ5HyWkgjFsvgAFFPcCoLkRJAu9JEhyDk2ZUdvRQQiSwig4gLqpVgJQ21W1w6YE19hKuaPWoE244FwV",
  "key27": "5KeNArBFjXDAwc4HkkBe5wFvhqLMYdhfhCrEgr2kBDHJekTJSZBV8rSzTaEzc3YQUTTYgUHemR3ThFzzd3s153uA",
  "key28": "4jCTR1UZgbhq4WQSdj2VYJGWg4abSYFWnaZi6K7EjuoEo6m38Ed3LxADSZb7QTFzw2yyQbYqmHTs9NhWdg5CKsPU",
  "key29": "5upZ4d6ABqMoHTUkVdr3eKU4FiHKt5phWoDqT14QdXLrm7GsR4kWPC9tVD6H6iQwzHMQVgDXmLZYdshkfBcdSgia",
  "key30": "jZmb3P26GP9sb7YfZpBXpJgpmZUeDEqBTSDbLHzRFJiA5UkuMfBFPiUW3b2TwgeTJ4J8gCYzaM6Me79FvAUVYcf",
  "key31": "67rcuRTHcjzEqoHLaGmr6UajyV9puagi6G3kYGBi7wvRLu1CaUSDWXiMnJGt2MFv1Z7YjvweadXwjp7ep5WrYaUb",
  "key32": "gBbS6w4LVuJNmQPdhxqcvh68t9bwyoSkdxBczTnzVKm6wUeJGYHkqE9JYCiE6ezgF9ap9oLBsKprXvHj59hv2yQ",
  "key33": "4QA3MiqoXzqbhSyaQd2i43SP35o3Ncyx2SSA5yVXKdE4qn9igf3hCwUQTjvyhXci73WCA1rv22Bga8be864nTqzz",
  "key34": "5wGPRwjHPuTM2yH7sj6K7dajQtVZf1rpPSXyHr5wB2S8mpH8VzWRhKzxxhmkrjmDAy7yA8dKJg934nc9ikeP9dkU",
  "key35": "4isWUg477CML1wCh9UmCXz15HQAuJEEKZSAjphFjUDMbrNZthzxwUZhQbiJ2B4DwjuG5ESPF38kbcfBfc4E17uG1",
  "key36": "GRLfm93At4xtuTeDKGq4tY1iCmUu33SCpJJAvFM62ip8WivPyv62x7oTmkTBSrUAU9kXgrwPVjmeNboCd8XTKct",
  "key37": "5F5bRnhee6Vy1oLZVzcAfVth3RKfewpsFJu6DnwEdK5q4Fkm481JmBS9BAqk5ARCJAoc23uBVrTciWCY8TfJvTHq"
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
