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
    "yDBFM78EvwihQgnCL6PhPj3xfX8fcjRtX4Ehvb7goRHwFCFyTNVxMNDvrtQYUzkm7UgquuCK7MwHDBVRc7eZcd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gufcw8kMHDe37P95hZJK1cf2PJrVxikCHMekpqXd8VRkAbK5uheywE9WjtQJVGTrY9bD7LyP7XHE78Dfth8HPPs",
  "key1": "yayLkb1Wo49kB3hhc82h9vbDSLEb7otNucuHDs6tY6C4oXVJga7tKEZGEi9DYkysPtB1FhYmVoVcBPrB34iJ2cK",
  "key2": "2LgcBQziJaKfyx1NTJew6esy1zczpqLNn2kNXjQdMS5mMzJvmrho7tFnF5cmsv57epPo3RCjtb2TEZc73nPbx5yw",
  "key3": "3FFRvZYU3w7CxJ6YMuKqhYbMcxCrRRvbKjtEEFwYcJ5aroawWV6crDAYAzz5r2gqriyUbBtY6GfBTUyjYUdsWJd6",
  "key4": "2ijUprA9xzmQ76BcD5dyxHPctL3BfSMndVfK7UEY6c5xjS3kfxdKr7bxaeAKbK7x4yetvMz3SnNSNcLLyaE89JJv",
  "key5": "8aAZEbjwjvgUYoKvxdCN1YhVW1tKER7TbmHUAkKyDH92g3uTCJPhpnenUk3w4ciq9wA7hbUeEBg5cPkEVnkzde6",
  "key6": "4Lmavg4yroNEAFqXzL6qgMK8mdwxxdMwVzdWqp42bqsj5eRBf7YeM67EFtRrfy1ynSS5XDepRqKk7ijk4eQS398i",
  "key7": "8SjL4Lc596KvXPLWe7bCmBBp8kWKQ1QzRs5hTZshWJPGwD1mqb7jtNb2ry5erb7HZVv95z7Gu3Fp83huSgs5WWt",
  "key8": "3uZCZktMwUkfAwycBERLQStBFWXDC5epZcMQFWHSLxosENaP6vt1Qypu7xSFCvULJMeJ2sLMrunLFwmMrzS5jszU",
  "key9": "4rsK6a1pWVGq7DeWN8Yn4HFNz9sb45SZ2AxpyaWjCUgY8zpLqSjMYdytDvcTNMwFxhgX3SEhs4SQD2BnWtaSLFuW",
  "key10": "3eSpxh5BS7DartHiEvkfkr2TwA2mmEVv9By5M6o9r5hfrGPcisrgMpczcwqVJRQGD3EN8Di8ye9RSejR72LFRXXz",
  "key11": "arCfE9J2gR8Rk8YpzEVBrgdadBASFLbirBXWhSfsZENLEhxGxg5snvzqjM6yXrdXGuDUepn5Dba4t1nGZrrsHi2",
  "key12": "3oX877gZM4hhMAHk1KVrhCrVgB11DX5EByfEDnVBh98GtAjzneUhiLx1ak4PzRSPqBrGD8NuYrSQUrErpDTTem8g",
  "key13": "4pDSCvmvCoc9utTePzgyjxfqgaRaE8SMfHoF7TVeixsGhjyMzR59qBMNeJfk21722EhQBuHPKXnVfaRoEFi49VRf",
  "key14": "wSrG12zCdtNYyU7MwbEydX4EmScWdbBMH73LBe7AQgZH6Y9JxhcW2PhGdL8CAvZhUzFAobzVBPFftPshrPckxGo",
  "key15": "25idqNQfDWkWamx6vs8GdiwkvhvQBrg1jwxWWawGfm21bPX265Pf5GGNkE3Kt6yZYRAvyHTw9zdaX6XDAK1aASxx",
  "key16": "58ftWeo4GfQY582SRyKz8657DgYVQujiVSPpHjzzCq4VcznharEKoNyaGi8fMbYadn2m8j5WvzQLHqpREnVYXhMp",
  "key17": "3xQ8YMWj4yjE2X1w71RuARNVx6zqmQvrjVx1s3z9PKCvgsts4Q8Z197fSr3CP9ASRX8qbxNXeqP3gM52z8a1KL8D",
  "key18": "61T8BmPdtor17HhQDUHWwjHy1H8CPDRRP6mzcKeNMHn1SSQRJi2sHqTJTbqmsZEzKXqfjewSs9Q1JEFXskmUvfdU",
  "key19": "281VyA5JWyn31Kpp3G5ySg3gGXwniE9ideqTHt1F8yX3cD8VRg42zot5UvJGxdjMLJsfFeYoFcDjWgW4mm4ZcsAb",
  "key20": "m6Kr5esLXjViq8dxrpnpnk3dddHwKFg43X7z6yYu8FVG9FyLXcggcrUEGZjjF9KQXJVK2KpA8EY4F9T7szzagDw",
  "key21": "2pzYXdFuVuRqQ5erW9bb1rREWS2uziZtwFp5LLXs26td4BSpVv7wZoQ4h2nMiD628mv9XFREx4nDwdHE1XytCjoh",
  "key22": "5dBEjLqnxRAPSXd8e4w2dcJVR3GRQwh4yicQXZ1vBhLGs9556WFo5pokWFZk98wh63Ja99gr2MDQqX4q2CzU4i9X",
  "key23": "2Au2tafdb8bUQn7vHqoSgsSoTj3ZHFG96DezCxAjGiZysrEdwRCyGCLEKR1YmLUyg1pGYAV9cGBkVCTHzS9geRA9",
  "key24": "3dXr3myPMqFfz2GeQQ1qgnfvQZqhCALwErMTjUtNSdYFEKqmxUWnzkTTS8Gtvjq6cLvoqH4gYDu2XPxbafJY6YU7",
  "key25": "2SyUBvdu3hEZ7scD5h4CdyRHfgrDjLRvDchafshso6w7xsRxfL8pT78HmzbT2reoqwk2LitbspHB8cTYW9hurhsu",
  "key26": "xyDwBkDc2Pv9a7TqWsWZdzuw2Ymyzks5CKwLJjKeXeyXoHkHeSfwLJ5YFZjkVWsdndR9Hk8sF4QnZtJZib4fog5",
  "key27": "5gNaCQhbj4unG34jKUxaeyRcUnim3D1pkjc1KRr2XLEBnDgNJNVrWXx2uYU2W86XjyyajWeDBiBh9ZBMfdeR5pG",
  "key28": "3a1Cw3Xm9kmMYHv2DyHKX27gypz2DhGjYTdPwZg4gs9ukBaJWDT81sDAumegVdTRsXLr2TgZTRH5t5NPJsdg7Vsw",
  "key29": "XJ1XAeniqhpzanwfu7Bbjsz9z2sLCZyzm56TDDvSgXjAqDq13Y16XJZ5Rm8VzwYPsjrGA5njJLDmRRxAwV5anJF",
  "key30": "3GdaxKyv43zTJz3YtyqMBMuktmSEXJcnr2oCb7gx88d4UuDWs7vKaMEoAXiFzsiep41YmiXeQqv4TYUSXdNzT2cP",
  "key31": "3jys9GbpnocrbZJXp7UpsUpS3gScrYV7fezRgzf2DrZauEVnGF7RdBoU1Brc3Et4xzmGsG1fBSgH2LPhn9qBdQio",
  "key32": "4SsJsFB7SK4tkeK5A9ex7X7UjEXHmGGvAKth94sbYjtwdTNNPLou6bs5ECZ3cAgxkveWmR4qdRhJSBedHcGYUzip",
  "key33": "5SVEhTQieH8Ggrv2VSdSz3wWtRTUGucECErSXLpsZSZVX6yKYdEYeHb1P5syrpDHQ1qZHPNNfmF63K4YdkW5d8L8",
  "key34": "4raG28yX5CDrtreiFA3rRuqebFvVUeRn7cK119gWVzET1yK5V9nmsVZhdaz7JUSoDqduNC4jmm7tUTLYGu15Z2Cx",
  "key35": "9wBPX4oyGar8zkahS9nV1UacU1YiaTefeftsyCHBuvnkVww2781mxj6c5pgxQFLm6VgdM6uB6wZhJPnecUQTjgr",
  "key36": "27omZcwfS242CXVYen7PAQVvan2E7AwwgKtJQFXk6VjQqoZZUPKt6PVNf5B42vd4tvg6VUnWSrTo22FcXtkZjvAA",
  "key37": "jWfGvEUiFpTXMFEAwDhTMeQ7F44n8qfiKaNcoJtSzUHukdBsjxcWeoiRznzBmVsfqvfSsp1wQN8SsycvpLkuNao",
  "key38": "47Mryg6hTbYpGXi637j7eAdvbXmfQ249KryUJmQyMHUJVAgsjhtCy2KQgC6PAe7CnrK648YM5ASAdmdmM44KCjyK",
  "key39": "XgNX5B8NFjdYNSJkusamHrebpTMh48neSEAFbbG3RVmzdxfHdYiTjKQgjD8Uh18jTHc6e1Ag48RZDP5gFKa38cU",
  "key40": "5BzbtJ7NZpYtr9TqcS2rCa9dqVsdaCqdTE4SWMGzW2rGEiz2e8Q8XUuYTgvTXAMHLzCaU6tKsvhvah6Hi2pm5XxR",
  "key41": "5xRBuJ9VNiAhZ6aJ4ry65mgYuv9g1hW1y9gVpPJsBozhj8NsqSwbMKYeKMJ7TuykePG3ZLA9HSm3ogJ77mBkmiE7",
  "key42": "3cFreo1poFQwW6LBJzGPZoLkxYLrBecszMAVcW7T7NXzmC2Rf9vbakzmyeCnXQVQvzP4AdNdHsNtNoAWiw49f9c1"
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
