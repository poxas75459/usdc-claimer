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
    "5kmMZEbWHS7CzrCLzLxk3qLTqmH6jiJmiKgg1RanF4YUNWPwZjxjHdomoFGh94RDMDadTXyi8diJr2ziWj3VMZ8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uw5RijuhFv2Kzmnbz6bRVvFVm14XidzMaGp9ptiEB9oWStuWAhrKXwPTCqP9yn4bDikhWWao6nQ87R3AEHP86oD",
  "key1": "5H3JuZxcxQNXb1g3VxUuvg9kum1aaX9hV1oog8aoPifPtmLbHA7aXHJyL4Gq9NefFSHTrtLrZyM5jUPfRSgDE8Sj",
  "key2": "57jVHcor6MnrVAXc9DrNnhrwvZ6jQgU33d3NZYXpVe9GptWLZnVBt46YM3uYXzmLFvVuRd35jSwmxErqGEUJSPd8",
  "key3": "3oKZS1Wia8md2L5WPBZCwTj8kFBXzVbJP6ttpXUkwm2mhnaD2APnJCchgYS2qDJQJWk1UPPjkxT6bwaobmRj7xEM",
  "key4": "2ssWgZZvNXmn5G6KJc78dRNyQ4UKSdcAmEor6yTUV5p5ziqQpne1QuNxrtzzmo9xDhPYehhKShPKjy6j7UyVXUJQ",
  "key5": "47unEtFMzMWhYhpT6LsrbkZaoPvTBQXfXstcaNgs8qybMSZmUCckZXf5LexbMNt9VFH821tDPitLwxaPiUMCFB2B",
  "key6": "QoAuZVQDyfAf27t48MpFEwqG8ua15XWte8wRuZ95tbzTvE5XmdKVK1iVic1WHwc58S9mhrj6zmAi6G3BNNGjqFY",
  "key7": "33PhTfdqhiyi3B5TBtQqxEmTkSmVjzEqGuARqaUNRhsJNEh5L4ohhNS3hccjBVgAxg3YMxXF8gXY7iqNnc7i57Yo",
  "key8": "5aC7Ht9FMbQiDBruH1G8AQjv2u6AAHfyMZagiw6rcTxK2rpsjGpTbWyuticRCGhbKZ77QY9bcyMCMZ4iiqj6vHUt",
  "key9": "43UJhsDdoRf1oC86fkzPx8mxD89GhtW3auRAvVgXWv3gCmAdYqo2fKBnd5TPzEPKtvDZXi7pu6zeSYNhLrHAmxjs",
  "key10": "2ZBhPVSnsnBND4iK84UsiGJfFaBnQDvYhyyzDesneQdWUnfqRASyVH8WUKoQ9dzXs53FZfEsf3Dx8n7ZqemLHNAd",
  "key11": "4jix39V1Ux2rMtUt8rvYNbMBbKgkid5D7WntxbDymLjzDSC6vD1USQZDawpzQaPHLQiaYbFkjAPFr1xZThL8V5Jx",
  "key12": "7zB53PqB9yYtQEQngVUC8nyZSkpettFiVfpQjbbVhxAP9HSftkzcjpuZ3cVCU12P8BDzBaKkLMb6p1U3i2rzgNk",
  "key13": "67AFRECs5FfrUL286VmVGzhUVuNzixFvjbY4KbczCiCo2Qs5arGtGXWMERqKn41jMSunujPqUZSN2vjYjoy3jQdp",
  "key14": "3SGnSHad79ZMXGVrbD6RYwGB4ACP7C4BkHV1yM7qqWofYEXDSWHbuwPHXxxjfdfvfFTtAyNHu2mhWDPHAbDqYben",
  "key15": "2w82krUWz7hQnHKwRxxAY18RjSt4LEgZE8b5GkcTtShwdhEGZ7PUbeQKsddMLpeAdsj3jVHPrJkagxMFCDH5YPHa",
  "key16": "2GqjEPrECdhd1q5DQcCuAzxFwDuHgm7cAU5Tq7D99eWv44JF879um21W64WeRv7Kb4LQ3Z3RjHJGYyPNmf4n2nva",
  "key17": "4aMKkiynFUcU1YgWFsHHmoi157136ZKXhLQ5sSQviE4GXJKXi4AiexVZJyeHi7sxbrSpZFBjHK15aWmuJfdAa5r7",
  "key18": "4gyTh13wwPfM8J7rLsFfNSyax42FF8LVRPbevV81C8fvfbmmRbvQZKPJmWGxg74sKgKZLCp2Fs8KAGzmiWnXQCR1",
  "key19": "2PPQdAvmxzxqEuoMPme3pWMCrKecJsKqJFbXgR1qULsRFQDqaBPBDWobCkoufDxs17E76dcT7du5FWiHuSe682Sb",
  "key20": "66fau3VcUM6FUs8urF2Zaa4xh4DwEYrngYdhWYK6rnj3fYiBZaAP6Um8JEGzg4KJPXgRsc3aAcDvCjSE1gwe2VK1",
  "key21": "Wai6tt3iJXDNBwut5TPpWoGZVzFEp1orSAmRPB3scYBBXvZaAwq2XYs4YwwaJbw3ydigiVBue6gUdS6GqX5xD6M",
  "key22": "3vBaVzAxVmzR9BqVS5nX49J2a8FM5sEq7SvkijHtqn4SeMpnF14u6sUDttjEjjuw8mMDLCiqpADNRnym1fsLe3MY",
  "key23": "5mnkWjAdNzPrUHmKjPWhqrNSYoGd2g534LdUrcrvXbvVnJGL3iUbJzENg1MZfgMBvsDde7Yz3BBo7oCuBcebT5k2",
  "key24": "4eRDUekvT98muDfzy5hCaiaVSsD3Pru3frMwcCmyU9Duz1GQhJh5nMxBgb54zD1s9Nny8DQ69reX8WrXaxhATobW",
  "key25": "4w3knWHL2w5GA9EdtB7cudCJ5J1j83SdGyxBDvMMBGLRokkEf7o9MU2CPxN7q3AMzcL6d1yVzuYDXVDZB5oW5Z1c",
  "key26": "2o5Czb7BxQ9i5YVMjsHiRp5riYjvdvaZEGLq2vbqeBwDgA5cjSXWxgMcoqrdGJHfq4iW3pv5XFMP82ZQ7QB6fKKp",
  "key27": "5ENAqXz7kpTXcPumhE2vXPeN61aULFcC84enHEziN9MGmryhVy1wxHyLDuyLa3G9FdJPZTHw91JNioSwrLRmwbj5",
  "key28": "3wF9dHDqu6JsZuJfecnKEo2wzPeWzAyuL5N1aCDWjDTXc49L5G9rzJBiLRhVFSRREsjd87AbGjVWJNH5TGvRsWDZ",
  "key29": "5pgMDGSPEU1TqDGkXfJj9q1hXcgC44XtJe9euMSt9WUtraNdtQcqZhh1Z6XYii54hinvADL4A8bD7xUWQGxMUwXj",
  "key30": "5WhB3hNPsAc79QCaAYoaWJgcwiwTdPi71bf1vXnSh6kSRizthSjz7UJpPJfXzLStwqhdsJkCwysCBp5L4JrTnL7k",
  "key31": "5T7DCwH71xNG4CCc5Saj79jcwNG1tugZDC7pPuJHrPbcq5hBUjQwHnKKfRLj6SPEfZNXEi3vUCRQwwam1RfJc6c2",
  "key32": "5XaV6LHUqLRrevZUrbNrGcGRN5j2dmwL5EzavbiGEiT2Q72c1s6MQh2EpgoBseuZ3HmaUWDsdCnVEx2d18mNp9hS",
  "key33": "xsg2z2JJLpNUvwoj1RCRtvvpaEJfFMzhZE8vWjR6Tm3DiSpFMCNq99FMKTL8zeEwYkem3W2GyVRNvzQqzayybhQ",
  "key34": "434WLXPvcVKUVj587VsUm7MrA4gsoRP3g9RGBYUrqTX6oyx3sPRANZFw3k9sTSYGBSE7umeVwgDAQZX8BEjt9z4f",
  "key35": "2KwSKk2v6cNNmc43CJVvxbHfcegruNyFX2puVDPDyiEThVoe6STEesPpx6iBtjhStdn9TUy7PCfVVhvvman4Mdi9",
  "key36": "3HAkEDtsLrGg3zJ8amWmtYe7BvPoQm8R8G2uMC4h1HzZs86pmcFh5fNVY2KKZK2ofmzDPAMA2aF3ytouq86k6oRT",
  "key37": "2in6y4eyNJebCzGehVLa4WuwQrSFMoSAy3ExU3gWUpBiMXjSLKgRquKpm7u55SmrkPgBaqYwsr55XPebi2QraEQh",
  "key38": "33CUoMQwmJstziUR7eRkEWnCsCu8eQYHD3YAoyUskQWjdgzUiSnbDGDaRY6mZxsR6Mhstjum7sNYEdbgQzDvu6zw",
  "key39": "wYUD8kCsKMiYjXMbJ5uAd7w9a1ZnoLGiGmez5rnTkeWK7vSzXYdcEVne1JhWafDMV5EAgKahLE6y1zdH6Hc1Wvj",
  "key40": "2ziZcAiHqVfNKgwot5NUQVPoTAs8rYzQNibETaYLu9S6WdVZCcnTBYgqaRPxJfo8Wmv8ACWyHntNAHiVQVeWgFnr",
  "key41": "FiAnTPPS3HPxH7rEB3c9z8w2fqkTn9CkjwKvWv2nmBA2ZDmB2sSAmHkWcxoeE5SWdKeq8Ko5ZACSCvMYnBSzhWR",
  "key42": "3cdgTPXWiVKPcpo1cUQEYtcPzh9WRnV7Ay24w9kHgpPgyHqnP2pA3bTYNATuN5p2RYtYs8qmXnByfnYcTNhsRXxu",
  "key43": "656Z3A1knt3vanMrEd4LYnfh4SUjydYcPdVYLxT2njJKm7i1EBFBJr6jcT5gouCWq6REQno18iyBFXopbGJ7tWmG",
  "key44": "KEF8b5KWJ3wcNAtuPdgfRRV7nNR4yQTpfuCqrfFVnkCitepNuy1L4rzJb2QF4gN6Cx7XSERJfj9dWMMB1b1bU4D",
  "key45": "3TozGkR8KSTT4tzRXsx4sA37Ub3MoWGzV2bP25Xaxd5mD786cDQFT1BxUZBGXngfHMiPtkcEUXU5K3A29qAAVhTX",
  "key46": "5uR5nxCwwG9ZXaKsNMu1DHbW3eJgp1xjS9YvTqL5ucRBsgTGHQT6zTXJ1RzcYQ2ZAzqgcQnsodaVveLyECK8QS5i",
  "key47": "5x8CPT26DBqMvLTve2ubsZ3DABJmtf7T88JT8kVZboQ7bjbEBYSPVWP4KgXAfXC5vde6yEVa6tkhrZw8vH7ZWeZA"
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
