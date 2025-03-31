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
    "3B85EYuCVrRyUxdmq86RrTBt3fbDwigsh4ZXTL6gFrqUK2FgGUB7xw3u2wu5bMzuGgCHjQNYeAQ9b6KeksCk9Y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Za4RQVSpVVkoxBTJZUUDYxDXtvgXWRoySWVgR4vKCgrsetNJomUFvZYj6G1YpVjLuGjoGKjJMdzWd9Hr7zLkwJf",
  "key1": "5JdAkjbDHPPXda7Y8QzXcgcMT5ue89zzwYRax4HCkmnLnsGtQaj1aCUMmiHrxo12awGKisn5H6WvGV2WggDUExz9",
  "key2": "55A3xgPgWX3vyNPqwtCdzggSmZrmWk49g4xfRaccQgA6fKbxqZayEGbjQyqoCaYUJhmQRZGBh3hTy354xtL4zTVu",
  "key3": "GBCG7BRSv2F9zr7RGrAKNWHqnaqFCEPdKmwSfJZAua1i9Rsvce6ANbdUQJk65RkRRxyGHZhGvKyHEGP9iPGsM8h",
  "key4": "4bAmF6ATeNzuaMChZEoVnv3Ay68SXMfGrRRoYrjE4EPy71TEu2QfUkaUSHzAPgquyr7hajpFMtcgdgtcTWFtESUQ",
  "key5": "3mw33k3N4V8y9mxxeSttziT23LXaqWxPvXmzuy2PQ8kBhEBqgerjPwWnABoHzG6nUeXpPJNNYwLmD7Mv9NhLT3Np",
  "key6": "4WcsCPv1xgSAG2J5XTSZ9zDsAmcEuS7FicEWGvRpVaZ5Kp52HD6BJHm5SmtY1NJbXwwMxido8qLzsDauMD29WQ46",
  "key7": "2GzQwb6JuVFNjH3SF1NYrMbDBARPhVBCuVGKgps8pD2yAWNdzw6whUUrDLXtbYU6G29sJtiuvGhHFqNyqcztCYEx",
  "key8": "2diBrxcTNxXKchMK3nEWXKqTps8wyCDKknH55HfScjeWGUEB17A8XmrLSX4kqh8gvDnc3BpsxnnaBz3tfpJTcggT",
  "key9": "2AQHiF5BoAPRPRpuCbfdxzyTHGJWMNDebsbFyvpqMsbAHSSnLdHxkxSxEHeBi873gnxD8kezoiujWeahPaq6qV5n",
  "key10": "33LWRxDQ3u73jjKbbjBFYHWjphx5rPaLGqqaDAxEaYrhsYGDBMiNoQ9LneJJr1gQRtxgZfjcN78MyMw4Q3cHn3fR",
  "key11": "4esoMVEFMMan9ZSS1MEpPh7e6guG1hXgC2aWSGWuxHMyMrcZ76iyusGwkNg11EkmzMDL32P9XcuQ4cAgiCFAXuLM",
  "key12": "31bs181pc6AmiKLdQQUoxipC4xQsa63uqPsxqLLJqUkPPiCAyzbAEberUWwrS4BuuPSDaorx7awajTueYdEWHZZH",
  "key13": "3h69iwnoehzyZvimxAAmVRn7mL6eyw6n7dLAev4DeH3XrcG9tr5TTwEQM9zu1vxLDFQ4QjvdX3rJha1Rc4siyreW",
  "key14": "D8KkB3cWpFavn5qMbAkqYQQGR6N1e7QrsVmra751mE7mDsLNdsjGq4Uw9ux7MQeMtLZ2N79siWNKSQv37HHF3gp",
  "key15": "5L1GTfcFaZEmqTAub2TSTtNeKbMdyArqTjGyeehjGyPWcpAmQNb3SZsXZB2zqyNDU9jnhF8NHejniYGHy8uQHxiG",
  "key16": "22MJeBo8LT2JbW9ETXjn2fVjxE9Wae9UeAdXZ2ieUSBNKdAb24T4Fre4fH6S5W4BMvmrvPMS7eecWVCihuhWE2mp",
  "key17": "MLTtVFbaLWQ9u2jnw8Vn8Kk6adAbwsvAB12ybqLvWME5S6Kz33FtPqVi18PbQ3uRuUgUDKPRzBh4L2nhJPJt6xB",
  "key18": "28ikXjxab1NundkyijF72bpsxNpsS767K8piuhy2dxXUtaJYkbntMZmw1QnXxFhTTxrFFiCjh3Wu86iHumaA5CrT",
  "key19": "4jY3UQpcQ9CPWwES3d7mQzVrxNNci7awdw4QiAZDhvzpp8666HTdhy4QP66rMSyUGHq6URqVNcqBZJH7J3NQBmXV",
  "key20": "3gBG8PmVF3q1ZfFHBkcYhEQzrkgEtKvtuL3uHvFAKP1Qyjt96NQJQA6wuLxfYRGjVajSorLgiq9uCs1SyQCCw6SZ",
  "key21": "5iBfXYXZy38wuenq6B1CnKhDNhxh48DFDD6a4FhjDn8YeziwhJhre25FvP34EU68KLEL3XsXmHMJRCgju16bF8JU",
  "key22": "5Pon1WEfoheYb6q9ePivB1wsdutJfcNrxmvVo1Lfv4WRpDHT4eweobt16RbxAY1xhpVoqE2FXWR6LbwpVj1L5ejR",
  "key23": "3dTjSHzrwxnfCpPxHSmp4GpUKwQ4mY4yBZj3czuctjYyyvf1B7Fur6c51Sw7ZBaYC3Jr58ae2QsF3XRZLPgy4xfU",
  "key24": "34KmxRkbaJoHMzK4LTUQX4vbefrzWR6fwTppVXBCH5pj8emn4SRPZK3GSckaMKt4yhxuZiJqV8vPdE1Tw84qfsnt",
  "key25": "8yLaDyLBNS5FWmAd5GNuZKy2HKkNdzgK7aEj2PoziMGc1dTbQ8GEeqgm5zRttcZMhMAvWah96SnGpCT515sh83e",
  "key26": "47RaG5fKzZCbRswZNW7CYhcw9GFbQjJvzZjvxrWbYDc7KwTUAnsjC3wM5pyMBgUP8DhjDTMrsphFBLCGWHd7htRH",
  "key27": "3CcAcXiPZfF9dUgo9SuHCatnDnSPdGSeycjSrBqNjSdJM6rp8ouJn9Z2C9xmNccnKLsp27rsVf8sGbPHN8ZmjU8g",
  "key28": "52AevVaeK3HW8n8uDrirUzdSjzVxG2bgc3XVnisNotRiNuf6qJFRuc9gGq4Ztb3oZUTqmhWEKwvg7f4xNLzA5GAU",
  "key29": "BRXkLMLRHB5XPtvcyT1mbHbk3k79yMMGPBYZXKmPfXXq28XGkZaPh4NMJVHLbqjQyG85FPggW4wDjdAjTqpCn3J",
  "key30": "3AyXEJSigwpwv6Hv8AemTMJt7kWtz3etaLGNdQLkh59jFvffpi8Nj9GeJ6rM71pvJGQYyKyvgXM1xpN74cD4r7kq",
  "key31": "55aoQwGNowBF6oXjMS77Zm7NaJp1XBb32YHZhyXAXiAn2nWcf6nG1ZhnjiRBTVXFytDsm1UNZ7PLKTXgDyRSTcvg",
  "key32": "63rDcuNHqg4oy57VNPXPwvgKLGxigsTuCaUfv2QV4Hiq9ZWt3sGxBQ7rTPdFGNPwmsZpAy5qisNVm9WHuMTzjdsQ",
  "key33": "jE3X1Mx7vUdhbBEFCeyjs64F45F4VZ81t6fgJFryggL34Zrs5TGfSCi2Qzkf47k3JyA7rt2L6XGExcVGHNuMoNX",
  "key34": "62yXao59pWvppjnRSygwjk9hrGjSuSQ2FkQcmyJxnH7UaCDA1K8gFAjPVNFuUT6MRDgeaxmBAfzNHsBfFnFnpcKt",
  "key35": "4wLHGmPqwAu7Qu5avC1KzcyBchtcYk7qvrhjvQE1FuJebdP8cqpWfH22Q86J92cF8zKWRkscZAYugsdW2dbtpxxM",
  "key36": "5UwuR4dGYf1VfDrSrdxe5xpokNcigg4srQGspB1uuayMosiVizWY83auirC1ajHyBpzvpoGbC1gWazcFaXvuttFF"
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
