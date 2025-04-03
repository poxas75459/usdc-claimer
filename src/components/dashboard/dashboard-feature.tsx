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
    "53WVkXcCCoqzo78Nn589BjYuX7qCWxZSpozp6XomFCeHq8u34PcYTekN2gX8GmzB3vxoEq5aroVKgknsgaMz626b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537ddbiiNDmRQXsNAVBV17BHQ3dSwATSRF83EkuwrEG7JTZch419pitKbz42vd3cMontutN6ZHVTycL8DPspMuZZ",
  "key1": "54VuysMRatr5gxL7pSo3yTxJZtR6hLLJuEWAzTPfknHxcY1R9VejWGJPwbvHun2U2KG9U37epTFxSbPZopswpvz3",
  "key2": "4T2Gr45NcUQGNexBsuVARLcUCFrGBCSDDjHpfu4AZZJqo9389t6McvFC9PFtxZRPwpD9iAxnfShACcZLj4vgapy1",
  "key3": "2sPWjk7wyUpE2Cw8MPZoxgCuWKD9Au1Aif9XUpFUGiiHXqNiqyG6jGN3CNXFwcQKQwW9giKs83xQvHkvDRd3oiof",
  "key4": "65TNJSHQrJzTVB56VtsMFxfoL4bPT7AjryfW2bHqo57LzT5w63cE3zYVEa1HB4ajQwfkpHXCRJ8dkhxAyVgJusvj",
  "key5": "3cvBFQBibRhhq3FUh2iPLrLwShxp2vDE6QE6djegak5DSqX2BzyCkcsSUnPCPqC53wkMNnrT6LDvAb5HLxQrXvvo",
  "key6": "3jwbgVE8k5fdWtfQR1Ng6TivDGDEPLrsdxgoz3PpH48xKqzyRpHNugaKu6ygbgHC1LFphzTqr1sVmtaTTPRBK6KR",
  "key7": "3z5BSKDFQJZw5mfgEfZbxnjoEgJzGmJQQ6B2ZvAbF4ZwaxUfFV4VByMg827HGGoBmSaf3TPySYrW6CqMVaAApUZa",
  "key8": "2HYTojsZHNTZRC2f7TqwvaTuAZoKavUfc9YsYkjZrfykqQgCmkJdwHEXoSwHmLp86vjvouQe5kuNLXSWPpaKFG7d",
  "key9": "2UjhEw9DBqCuZGgaHAsEBw3AVPPyrUwLaG8pUKL5ELxs38WA3Zboo81BudMdo8qXFpNAs4Kx5ZYZhBz1NsjFgXkp",
  "key10": "62YpJ1DjXHRK9nvNA8ywFYxngHgLz2p3LgxLJHBNi5TydqDH8urs1pBQTWL3qwwNNWXzhuXvmrsSoYQXtLL9WhMZ",
  "key11": "5FQDa3zJS9Q3Zbk3qT98rsvk65DyAWkwV2N9DEKoTqnn4qqAYz4vnoAKe6KfgkC5RYCxnm4LcE6MzjahdRG7HWbv",
  "key12": "4SrXWds8ZiojQdzYbyKncH8LbtpM4nLSs3BYh5gctWX1N7XAqFLoJ7SmcmeJXj9oSQHc665m8VEz6gq5cZj3CjWv",
  "key13": "39Q95n2frbtwivJwYUshf3W48hnLjYCFzzxNjfyocNyq83frYHanw2Gyrk3e7vYqEbtvXQM9uDyHtydA34KBDSAb",
  "key14": "2iQpP96JSv3d88aAUQf8EpkPA4NTC78RY9xqn6Asx35WQDUj2YCrqKAeM8vFtn7gip26J16CbgkB5nCFCfEXKKez",
  "key15": "5AsjaP34N5mh8BcDVfn7uNsTEgWnqhtKkmbUaoE7yrJiqVKP43PFLL5WyPZmuBiDFj3mgupAwXXmy365Q9LWGjGw",
  "key16": "6fFqyFA2mpPF8HGMiWknuvjc8i54xMbb7iNBTEb78wcjvzesPj9s1q41unup8iMnV6ogofAaXQNoTj4p4oGnfXk",
  "key17": "4sMCGiNJYFiNnCaPoFzinZ3dxHuqChHRg5e5tV3qri6dQuZqMsa56ShGxECGSTtG8fcFFK48jTcuEHR5u5eLbstj",
  "key18": "4nhNxryijEZtgZxG4QYRtQuPgpSESXg2anQFAHVzvNryT2wSKM2JTeMbu8Humrt7qBsHbY4YGGMfBnpBqMcQEkEe",
  "key19": "5YaRaoGCpMRrPugde6ASStLM5knfkfdQYQNxseLSgYPLrc2Cc4CkJvwCSm8vUt6qD7jsnGQXtK7kYr8SXRxLPy7s",
  "key20": "51byvsRWwqSpBChUdXvdgNCTj1CPBRRX5jXVAs1QwkAz7L28w4WK2vAvEEe1UdbRMwaBrBtYtwhzMjZTSNnobKLP",
  "key21": "4fs1FAYB67rd56Xw6dhfQDF9DdaktikJfSvZikYkMmda45pxG6hy9bPoqJ7KF9VHa3qMFTsiDUnoyQTdd2JJHrEr",
  "key22": "4qpqdJowxHQ9Lm4jEgWz18sZ6DPtWfYnhLBiCSzF2qAUp831qdjWju68h2bdisKdAcmNLzFyiE7vMgNLnwzYBmk5",
  "key23": "3YvtoZ79VpPPnV8DQCF6ESbBL43eW9wUHDXsEVgCpbqBmeTdHyoyctYvSuV8s66fJ1DWyZbKDKQDFqv5eWMnDBVh",
  "key24": "3pLouUyAv6MPWMuaM4PBLVCBH9AmWh5mDPctnqxDQxMSitbkkUCBy5U9ZAhWduhjsqDr917sVHMLmDeQA9LNbjbU",
  "key25": "2fBQ1RHRpTkK1hpHtmyHcLJmsExP927rg1YBNeaSg1Pix1p9Fi41BqirYiWKTBduoAFQ4yGYPUFW6h89WrMejk1w",
  "key26": "5t9QoHJrN2aQZi7mhS6LiwEJ7Rz9wDRdkjCBqofqAkYA5XYzTLsF5KckhNKM9LEPLAYhaXCwMHmopvryLxEKwEdc",
  "key27": "3cgFSxFcwQfaGLRbpZWdGARiW9QySQkgg5JT4jAxNNn66qczq2Hu9UrRAkRjFtsXcXZwzbN6G3ugYft94Yqn1gQh",
  "key28": "4U8nDUYk4qHzjW9ig8cBjMKuFc7dnY9v1TyjmMZpJycqCeRGth2jNBhVCepF6rnAzyqkTahvnHijQKZdXb41qarP",
  "key29": "3qUkGHffBZ2Cywr9QVUCQbymSt9raED8cv93XcnGqDXJGbZuTLabpJYEUQWQEwfvHYwH9wea49dXxyVYXd8Enjbr",
  "key30": "89MNBd89ABdHwMrjWenN4XQFseAmFmGsqwfCMsTFWGnDNYE1fpfC5LGUU5QyCQ6hbR3evd87eoiSza6Mn2ddr7k",
  "key31": "vqewJ3B4zr8nBF5dXBqdP3TM8PSmN8EQeDn9rT9zKFWVyuyZVP8duk3mWW1crqPNrPDdU8D35ToHby6cbCvqJKd",
  "key32": "3iB1cA272WxwAQ1zA9iea31Ma3htBEQFssWAipCqUkysxgLVYQ8QADsu9cpr7Pu9HNyMksUTMLnkhvs4hqanZdL1",
  "key33": "5ahcuWSioq53utzvCJncsmBJUVfs65ZYEGSqTNQ45voWXA6GuWm5Njfhr5zhKr8P18eJs3tk7r8W87vAPyEamMs8",
  "key34": "487KkzDq3Mav32mNW8R5ZnVMKRW9A8dyWCycx1CYb7eGrXoSdEqf4rgkgtAHQzmWrQnZHeJ25E8Avp5EmpM8o5f3",
  "key35": "2jcKdqvbtgY7smAhWKgA9hf6KJA6nDjW8PrFVuUv4nw7DeiXahG9357crfLFAJ1PHGW6D9YkHJ9myU4iNVpxP6Kz",
  "key36": "5KKQtgknvwRtf53WxH1QWtgqcVNZfhzFfxWBLEbrwS9MijHr5gZzsCL6Uzjg7ygHns2iYzn52TvFB9tK7oDCfaYv",
  "key37": "5nnwMeRnXPznM8nnFuzAaTeoZUe6a1bfqWfVL1sU8YnhhERjZvQz3YA2E1KFCRSaTPmfb2ZNtXfMovFDgpgPJsBG",
  "key38": "3SGAk8TddU3WBmKqhzDH3WwAih1FiBw3voWUz6E88F2b1Qq4g6qFcVzCut36ATZYQczwx3b29ETh7Mg96XPvWk5c",
  "key39": "4sT13kA18kMma14GUmJbaCaQAh5cc6gxmWAAQtcaRnJRvT8xEJEtJx4ePAW1dByPoL1Y3AQ1c2Vss6y2y4XfKWm8",
  "key40": "3JfPWSxgu7xF65yyY5yHnRH5sAPYffXoBsnG216Rz3opZjLUkvysNTeu3dt1S6aSzE6fpAr4wUHUKiwbZCDsPtDm",
  "key41": "5yPvYVRWgSAnpL1Ge59hSJDPxy4P2JYwPt1buPSCeaeFDw5UHhzMreQMaRpQnjT1upkXk3mj6WTFjJQjwnm2J2iv",
  "key42": "2rJT4c45nnNwwb3eCdQWWebaY6wgriCutjRbUKNZebdJfviwNWAhd51MLc5GuNNnjwhKJJmdvhxe4pmqYiV11KPs",
  "key43": "4KBpvhntEYqvLd6iZzHBW3koimoHvMGMyi2m4Y9YJshDQNVG4pcBWcmeDEo8cM1npSLmMG6F3gB92vEjJQVTFetR",
  "key44": "4Ctrn2bqD6hR14iVWvrdLWiahL7bbrKXyb3Ax5EqnsUrk92exuRPJ172anYeZMR26cBNx1ji7tJTmuPQUuspbi7p",
  "key45": "5BqzyAryCi4yBtHiAj89pFUwp4HgAdnhSGcAY2UZtf7JePqiZCfzgW9k6dzkDhfR5FuXB4TqTURhdoTnH6kJ4Xnv"
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
