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
    "3n2dwYimxZGMT8Ye16EDrfK48msF3mgikJd8GTcuWDoMQbsiaLiwi62TRg52h1WiWZn3SCGPwRcDKjdYVmuswk1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCmSmz5DWXBQkK7egqsNhAmHWPhxpzm4kKtppbr5eFhACQfhgKYYdDE9GV8y1kdnN8SUzYS17L6Ki9QFucGqRRF",
  "key1": "2NKfwxPPAf4jG3MDzZMMwd3Hcjfv2ebCr76yjxT5rFoyq6T4Yrha1P3op1wxD4ednCdAxBbh9WwHSUnTQgZ5L7sS",
  "key2": "2E9mAKDfTLfhri2vS6mERsPvrF9C7mp7Un4NzVJ6Ys3ZiZZEAwdE2c4ZUsXX8nEkimPVJFK6jRFMWci2yZ4HC7C5",
  "key3": "RNEU9kbwPBVqF55NaAqXnLKZvbJXD7wLjMoxL1YHhaMS7ZFLPtaev6yzrA39Hehq2UfvChqvfZpTAwPhFQey7eD",
  "key4": "3hrRnDKHURYJdXZb24LXrm2sAqccPtPEkFCVxePFUJykt2jDARqNhNpg6t8DQPHXqAxxwKYBEbXGLNh3ToPp19xA",
  "key5": "2WQp5RGUpLcmET8jWKUew4b4DmhmkrQBeFHXxNtmGq1VaN8wcQxyRKqwChWrFKD5Jgy7fvurJS2SVGX1WorxbepW",
  "key6": "27ETUugfMBMR6pZwqjkhk57cb3JXK2AZZwmCaaEyhxiQaA6t81YBtL3UhaYn9Ww5rV7teajcKJ2k8LbGQdui5tBY",
  "key7": "2GuQssN8H1ZWtS5fuckgi1J1HPsggynxnjncjJfW9k6AcL8NcPvvaEt2ig8Jndy5YW49Q1HomtH8mH7rmPWmXmih",
  "key8": "4QqNdDixq8hfwPYQfMNEfhZ9AtWGaxma8ro21qKbbn4QhCb3kDdjC1VeRv1o9txobKondJSyCWs4yNF9bohJbQoT",
  "key9": "5RvyPTyYpTNpVBh7j2UMNbkSjPzKK7tG3oeUtQuLBfhC83DqmR7yPgPkQLyzEfadyi4QF6VEkYeJ5hVkDd5FFKRE",
  "key10": "59vVw3yGDCDKd56ssFRHrXpN2eyrSBKdBfQpuSLCARWzXKAcqZDY6PnjEAaSSNSPqULzvvE42zVmp3B2eRBLRK7o",
  "key11": "BmHnAPC9ZRJoikyzePqYF5kqacDjkEvHbfQSVMJ1Z851BkykFtw6uD5kk1WEFsLkhAZVCxAMcg5rczR8bSJEGFp",
  "key12": "4iFYePLQAqC9xGJyCbGLXVxf7LzvePfZFwQZxv2g4jBLUTToti7ygWSirJaUVzJmLHSszYjnCKu85mZCgXyiP6Qt",
  "key13": "3Z5K74q24p42m5b283MnSGZJRKZvVBru8rwwHnSQpyxF5vEBeAe2hLqqmuWBrWA9xsUUhwjMgRvpGnrkPqG4YNwZ",
  "key14": "5HFKQVYv7wUoDStppe8kQf2b6JQPtASwnbTcPuJpxNKuSTKZyiPypt84TqJrsTtBrUhxcbA3bXt4vGxNwE9DrPbf",
  "key15": "4rVmWHY8Qha7PhZvgNafuhgqznyVTXAvXMGSCeYdrnpU21hDhQ7siEPvP8Wtb5xCpBaDqYtC4XPFLctvusPxpfVW",
  "key16": "4B3zPxrbCiH3MFmWiZ7rb39sGE8JSPqJmvyo837Lp83zPjs9zDYTCNgnL8FyWLqdEcVnvMdmg9RpSYXrL5CAUs5d",
  "key17": "3Cu4ubcH7B6iTvc3Mi2WPEmzf2Xc66aPabd3rphCW86GFyuGNAFkgpjgoSP9cCRxhmKaYnuTyKFi6std7E3Ne9Ek",
  "key18": "29ffVcL4tR9yX6F283yjwsq7qY4WxFSACgmm2FqNGht9HUxN4p9Wbc8bb6gNSEVKDF7pTxEY6pmqBuj6ptUj8aBU",
  "key19": "37Jh8SSnywG4nfVobttPfCvudBdd1CmuxSas1ufygBRGNq3Ee3JydAMi4yLXXG3FcmpLCLeRBitGavQ4yfPJwuDD",
  "key20": "4CzuBjchrAVSi3tKjtShiZuWeqL9BSKDcwjq1i7VeVDX2DB2RJh8YdmkdFJH2veM1E47Uwb1arvWoLp1c1JhbEST",
  "key21": "2Bb4UPwtdhtSBpUhB9vJEfyvNuBxB1NDw4zDgsTbPaswCv1rWiYSdTT5VD6C3yBpi5jNT4wZCNeRmHTrqteFtWHC",
  "key22": "o48H523UwwjJRkY7PufYCURaaW1nZCLHPiYBNL5jzPyu8wxeqgnuL2ZdX11vkNYQiRsQWie5xMhNNF5QHoDcGpz",
  "key23": "5aUTKmVSCJehRLo5yTNAbNzQT3hqwx9MhfG5vNYf8SA7cR5J5p1cDim8mFDtSsTWURid1C5o6hCEfs5PaEHA7SUE",
  "key24": "dZ1PvZoATDn29Zqvj26GzZsRCewfHJLqj6heEgpEGNBy4fbVeq8ZtQCB6AibjhEFFQdqgnVUsDbxxcoBjY9Np6B",
  "key25": "44RRGzxPykhuCkidh5oYepqoJtoBbShP4M1eFHapr99QdQfXDdwdtdBzxLYKKkoTGFsmZX4YyHcPgsFvnXsEUjBE",
  "key26": "5QMuAsdNeoX5XkDj5PQq1sKfS959bzsc1cqdog1ycYQW7jGeEu2QuxbrF2jWE8RynWCqnJBQR1Tso6hdU8XPM4EV",
  "key27": "23n4BG2mjaFj7MeHZJSJAHBGS7orGXsnHfX8L9oDyrWvYbvDr5WMZsSk7PKH3BY9y3MURm9viZGrXfJ3oqUC29xm",
  "key28": "2RTqWRs3iia6WsVWeP8RBJWykxJjm26SAfNak1Ztv6TTyYnV4sVK4EgQibYJs8Js9pdsMnNtu9vwcd72Gk7eKrHE",
  "key29": "5YT4UyvZHMgpV9BpgLnm2x1By9cczDzxdnHEjp6Ao1iVuV6GvZtVV8KmqtBchq1mi5dZYjZD3CPzqsV7TLzkT97e",
  "key30": "3SQWTdUTgGcXtyV6RapULUGwrR16uuBdJgN6VYwN4YSYfSNUXGt3eF7yUaQvbSBkVSFa7PtbYoLzPsrDVjrQsdi4",
  "key31": "vYaKJ6bZf9uupDNat8T4Mk7T1TNNoDsRFGQMnAo2HxqvgumNsrq9WK1RMKMd4BJwS4YYmHxp6p5nc4u7UfRXmH4",
  "key32": "Niqkrg7fZ5Wy3LWRy2FwShJ3v6BbrkTN92BgdKjXUAttxS6zmMyu4V315uc1aCTPiMc5qLkwZcspWabvjmVsZKn",
  "key33": "voXER5VwstSCrjEb1ZbcYFP2hhya2H8qosfNVBQhZ5fxmoW5p1u7bAVYBKexQP3VEjD88mkY6rk3z6936x5HFAM",
  "key34": "2xz4aWAKuzD5ihqyt8eKqPuRppGDQwrLuy5D913BqqmRcbXFSeqXdr8HbWU1BETg8NGPaoRYATPT31uS9TZVMfEz",
  "key35": "2Aib1Td2myr8dpoXBtDcfj1da6xLqGyy4nS5Ey4DTvNxoxEywQ6KekzCFWrWvv7W1fbRJRVBztPigxbwPv1aJ4SA",
  "key36": "2V341dggr5Y4rap3GRrPViiYgS6Csko1rnWkwi7YaDJc7ce1ATWFnJZZheMqr6p1GiiW1VJxJ3svPFRY9xGdcuzx",
  "key37": "5xk76ww2WodGktWmUKXXqZwtCsSWt5Qw4Gw5ASW5amnPQ3fMB4vVQEEzVDnM84da4MN4PVWsXPRZNG9YRr5zvm6z",
  "key38": "39GhiE2RmmKf6jq9RdyVEyZNoVBzEt24rwDgot2VMm1twPfwmbeiz6hgJTZ2SzAz9Zb6WZ5kLmfiV7N6qhhxKcNd",
  "key39": "2DpTRLCm7xKg3FHa6JZeCmtBNWJgvRWhxphqEcDUj5Fc5ap7bHjGWJxY4ofUz6y81hQ985dtg1PhpQN742Td4CL9",
  "key40": "2dDQXCZ9uiw2KS5eHYNU9dYpRgm3K4faSkkz7iUfM1XsMDhFqYDmpvXTVH9Nu2PuxfDVSkP1o8ufCXzZLffQekFg",
  "key41": "3MiM6LM6bXMfXFq4LLTuE4vbGMt43kfaEc3aB2iLjQpqPiMCs25Au1hsSW2ug8oduUGZMdfeuX1LsRhBFGWiVKUL",
  "key42": "4EhnUNfJiTjU1yvnSU2uT4nERfaa9AF1AYZcFTjM7yhUUH2SoQBSBtAYigSNExZaW3HLnQ1xw35Z8d4CMPAJz9ZK"
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
