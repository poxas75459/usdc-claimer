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
    "3wpr6WMp1QL1vM9n1ivbhWSX5KLV4Cuf6ybSZbnNSDpkb5tJdyGVJHpBt4AkTk5p4HY31z53DMbX7DF9hJkKpqTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnwbN1S9taCQY1Yx4w8W8SvNE43rVqye2xkLkTT63uUG14B4Bf6MFFbkcPWCijA16YuswiLM4XtPw1YdjVSG5fh",
  "key1": "2qLySNEdRErciLUCW1kZF7ncMCsi2mgh6vJziaCUEJn6qf56vrGd2BVWo2ExLsWqkPQZSgfVANvGWJSXmLcLhQiu",
  "key2": "2QXrZsbi11M2EL5KCGLZyCTpk8LAhPyBJeiJmzamyxnbXMJqVUTfkWMkXYC6akAtyNBdsWehEHqW5raCz5XLeH6s",
  "key3": "4Whfwr3esVb1Q5UNkHywVZuZudd3E7GaY6P3owFMULsguAZSSzRumigw4EgcT9xSaSxE7M8WJSLJrWfCEDdmCMDC",
  "key4": "4wbDnt581VeUAKH6BL1nV2mUjZWdcptLcYkjW4QXAckQ8egVFVHJPp6u5FAnnAu7SvmGuq8fgFi3CLnzn8ReeZ9c",
  "key5": "2RPvngLwtmff4dCLgpKJSvfSWfzKte6iRCgHCUmBMz3MngTkc6q5tSMjvxjiqzCmNjdHhJZw1rAX7cV44ZgUyE3M",
  "key6": "2y4j4ZU5ZgbDeGFr5o4TyLVuNhmVv31TZpZ1spAYSfJHmobGW4Us6Ytb1EUu9zm8TNSXYxnPQBB2jjRmyyegUGZY",
  "key7": "vGm1gSaGz8sAUvf42pqeyqRf39nxx8BLTpGETC3XDx7K3h7fNpZE3VE322UypLQ1HSFePYxvgZqjJpBBd4vRtSV",
  "key8": "5Xfh4oH2a2EntL7i5fcP1igvUsRbiKed5GXDaouDYuvqhqqPGytfYjEr2NFyMJA7jcrboKiTPk5VVZqB4mdDfiad",
  "key9": "4A3nQQvKwnjAN9v1vnDqeMScEzjiiuLPpPf5wLNtLqpLXdaMEi5BCrsniuRVwcq8ExTiYxmZ5mMRE6ZmCXc9NA1Z",
  "key10": "5U4uDKcSS8uAGARuMvcwmKhRyYMfz9BcsLntE8VRH4mVcc86iPp5V33PncFUkztEVdmVHcskVPdPYeu3EVpRpzWV",
  "key11": "5WtXSUKvtgaEWABaFxTzb1wyGGT4GknF8Hmyz2Mg3XuhcLYsyj4Q2PSagbmcoEwHoHvvemtYczUCx53aBSoUn5N6",
  "key12": "2CXUf343276jzpLbv1TjhGJNgW4eGqndoRDwefZQVgMp5SXa4oehZYUzayhXeNqgasjhZFtBxNUdKCtuE2YCpRVW",
  "key13": "3vxmCqC69WaPCyNQxz6bd7uavi24hz2izkgFXPfMQfMqxSSnL2bvTNWmAAEoAYzr9sArpoqVpLAocChn8x4GaYbC",
  "key14": "52bvMtKZncCNXpaM4h8JZTQzootezAM6Bhxzxj8pug7ZHohVzYGDfQidZisWceVTQ4U4PrMFtecVCZV17FsZTRWr",
  "key15": "5CabixFZd8CopBJeqJZi3HfR8oGHhCJmWNDNSoQagnQQ1Hw3hw8uF2qDzzJuMHLRL9oSHiurVs4q9LwdXULNRsnY",
  "key16": "5CJYoWY4iSwUfvy3L7xiPoZmBfaW7MJ1TDHZS6xoQFVtXubakpZjn5pg8TbU7ovddWLMkBe1uvoE4wrvopuoBK9r",
  "key17": "33NUrEaYnDk114HERMCosKpJZVyZjUDr4Gkxh4FYjosytNpP1iZ1V7KXqunejAd3zmzCRWoaPHYKewjPrTfKbkyt",
  "key18": "3iZzayLAt9z6ksgmszmM5fg9u9J7P43RbJnMkjgri7AgmTav66McV9doF3D7Zn4fZtDhggefu8pWvAeHbw4vfs1L",
  "key19": "5bjnSejH6XUMYZcEWc1mBiSWc7FfWy2tgT5T9mRyyJ9QQW3WrDJwAhVmr2Mr3M7emCmvnBgJe2JTMKLURoxAsUF7",
  "key20": "351nSBYmRu5nvUux1JK1SPd3LcFKzricwtif5rc5B4gku3RaSVEpLPU2wfAQLV3zKLeTSwdUh3tQQbafAzF6ugbZ",
  "key21": "2Ead3exGhbscRWBbSQP78RoJr7wCLn9fhji93pXqBmaCsWS34B4hS8qjNJjGZhFy3cAFa2JN8J8Ae4WMd5aabvTF",
  "key22": "iX2VPHwaoZXomVQyQQ1pqCd5pgThitsGk1FAZC6o7AsSXsJnza5fjpBUwDj4s2q5nAmt4aeWXBd8AeY9kCev8Ky",
  "key23": "2RNhdYv1P2YjRZHAAtNoCCKm7tViVzNYcd5F3tVHLBidKGswqb95YXRp2ym3shfjjfcqhVxdEFfK6m6A4J8djTiH",
  "key24": "g18QepNcEyFJV5CjGyGakoN2cM5jhLjy8PFph5oXVWpz7x3JzQLEygca9gry9JX6S24L72q3wzRuUzVoZjb9p7s",
  "key25": "2TrzRdjSASgaktwXGULhsgSYXK27VS7hPhK7F86RUYuowbAZ8eU4hw75HSRKkGfNkMZG63h4Fxh8XGmzPMy5BeYg",
  "key26": "4sMXgocCdsaEtWfxfpzgpJefCs9ZKpusQ7BL64gxkGvcfzUuAs95gm7D9yAJ65iS9Q8BYVxDhgFKDMrpfKxp4gjC",
  "key27": "5KkZsYVi8W7DQAcEPnNuVserHcZcJu37NAdDnRRLrd6oLsRiJ8AMQ2xoKUjyHawuxHZXTWLsfWNwnK9XFobSUGM2",
  "key28": "4uE84jy3YZjGgJurC1qKPLv8sAc7eUNdP4i4dGn8c7GV65p75eVJMXuiKdHYSftKurQ1PoBSiM52WzVXDMLXw1Gd",
  "key29": "5imMEFtsEr5q5WC2CkVS2cD1tNM97xrNNEGcamMRQWf8qoQ75ZdjmYJi11kErjK9vWuUsj8YGUkuFGLqAkgpTMex",
  "key30": "E1JvRzpCFrnoW3Gf8msKNF5TP5yFtUSNeT4NdeXCdeBjXaKdum2vLqF9T6HtQQkAEaQit3k9Znq1yd5NnHUFGx7",
  "key31": "3psG1qT4hTobmPAAMDBwdf7uV8dHptBPXWHjiQton8QirepHx4cvbPjJxLC7SEWU3x9a2xd6BTEd9mn2FyfNJsx8",
  "key32": "2o4Uf1EagJwMPAgviBA2ZN8E9FfG9vEkTc9Sk7N1ZcrucpaHBNP16AxMzP4oX6BsDTKZ6ZTnTtapiAXUr7ovG4Lj",
  "key33": "3cDq4rDE4Usxxs7JtZ9hDjWxPC7kH5MHxnzBw8sdYMHLxMv2KGb5We91MWu3Wr8UPKyZ9q7r2SVXc33khYwBUG3W",
  "key34": "5TQxvsnzBC2oYDxfFrPDzX6C6bTzj8VQKueBoscCURgdBBeE87HpQJWWM1krdXDxttxq5UnLDLFX6HHp6qGpgL48",
  "key35": "k6CrYa88dWzCXU9udU9BSrrSuE8k6uEAsSmmSJTJXAtdTKjWU9g6ZMQZdrZ6fYtZapvVZ6HosVwFUYGbK58TfgU",
  "key36": "43vXaFcYFLEss9wY6Wq9kyacBRQsdc7AFDCCLuz5Jarr8xLcRvbnnogMrM1XGUcteTMeDNPcB6BAw19Pm4k5xp6N",
  "key37": "2STQVFEB7PVjdG7DeesRDYMw2iNtXbrJwyMsGPUgH2iM51i3WsUdWowAfsVo4UTfwhJjmnKCCoozCV6H949QJNtT",
  "key38": "5551ve57WZ1QKpxP9RSkyvvKmfkAfMSA8fduuChkkWCPKc7v2Zjmo6vv7aFBfG2PJqh4DBvCjeRRkkXfZgxHPa9q",
  "key39": "34C5TmV25UK23kGh2Goes32krt3kF4bpXzbZVtNNrtr34zeiYD4JjPjb9kC3emRqep1MTqTKdvn1ZPLVq58sFDmm",
  "key40": "5edUBNCUFbQyDookiBtjy2pYRqV8cdF1PyJ68fPYboHNUYij6QRZrv92TAfAQjm5Uojr77v9MNHx5irQzahe57HV",
  "key41": "4LwMhMrbjmbE28Y21Ry2dsAKuqTZhdfQvnois5ekBuwrQXw9N5GWJQExBAxDqBGqfyemGDAf4vZ84jrfkGYfj5kr",
  "key42": "3tnpdopyxoDVpCrmssHcikiWZfh3ruoEVZfNGCCVrbKshmV1tjYPCcGA6YHjHuK4v2MeNdbX9ZJzXj5ouxDzRWCx",
  "key43": "5PHv7drgVkUM8kijQgK3fEKvjjmH2u3KrsAqtUhBnqJD9Z3L9dwUytp3CYWSfq1z8cDx1ihf7QmJwhVo9fLHW82m",
  "key44": "5jSUSKmdiSqV92GcfbAnpixpHwLRorGmGKV2f7f66REV69mndK6gcNgtTFQkJSYV1csKTLuPJYsaYAK5MYUxpLpi",
  "key45": "3E9xEVJECV6TAKH5ByJ2gtPU3ZeGfU3R9MhATmPtZRZ4kyCLgzH4kvWiaJuTygMw26hhYwtzwXszhW1aJMX7XLFQ",
  "key46": "2ySoBNVwRGCukpCbPTSKRYjJyo15wE31Y49mY2jaR6R1kmFprwyWeurv91UbbFKyYabVtudYQgmUMRp2yS7L8tLa",
  "key47": "5E9GY5CPo6wUCHwjyQEv9HACXD6sziGXJzQFbUxPjqsWU6aWbndKdDzp7xbSBudSKJeSpyxKVnHYhjnSqKnDkVG5",
  "key48": "2E6YakAZWTMjNbvyUj9it2kKA59B73e9XszJaD4aAjfeSW3dJFXJwyYp7dw6MfDmjomdSD3zUzyFWcDfRmNuHHBd"
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
