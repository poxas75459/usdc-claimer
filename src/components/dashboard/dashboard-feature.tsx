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
    "341JDV1NTA7YjbNJEh7unUTaqdHVEem9hGrBGnn5TYxLnj3tYXBr5axX8tAzoBh7NBrymqYKvHdXS7SVvTJeRro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C4WBPnS6fUu41h1wB1LpKQHzcSfhJqVFJ6NWZN69MKX4JJ2vW1Tmk1QPkH1i458iYxiXPiqnaAPkZvjgd7tsGH2",
  "key1": "5YSKWfBPW5sXV9dS3oGghAZhqb9FdrGEhL4ikXXziWJfLSjiaK7jwi9b7wUtM9377N1rDpnC4xDyPWUU49Yxvku9",
  "key2": "2tBxsbxJBxjdtFH3sBmBH9iSkCNUK3uoY9uJUV4e7Nw8nipTJ39ZiqSuwVwnZBf4H6g2VCcCcKTAxsawsoFaeynR",
  "key3": "5aYtYmeFjL9umVN757JrjaTqTqqcmbbHGnTFBWZEvNcZDfawyRLPnbtrqGyeLFEhi19u1QFbQj9vkr3AFUPnftAh",
  "key4": "3KqTmdxNncVZXEA2zApMr81R6SWVzxgVU9GZTBM5C6Q6DNdQDcjDRckxHYazjTGZ7Fq6haMHfJfmu1RdhEgpQ6My",
  "key5": "yPZcS5uN2YULLHCZkjHiYGDSR3CEnoB8qgPDP8ZGZeRaZ8afDBpVQeQCnpFu7E5VoJwbNkA7s4XN5kHUzDfvQgi",
  "key6": "2Xtyp4gzvHYJaXy4KtVyiUMJ4RCKevogSc79GNL42bRoravx1mPaLnbNf8z3kddnuTKNfK6F4TAQRqgM9dCgFfxh",
  "key7": "3xistKvA6Y7PLRqAF1XcyiQMJYFspiCQeYFfp4pjWt3p5TCi7y6x5YtjLt51y9Z2qPqLUzXqNv5vmpZRAYsM5fbF",
  "key8": "3H1T2SCQCQaPHCsvCa9PrRfoeQ2HgXNi8ByuuYs818aBCNfjPbendwSEvJtCFNcPvFAbAKiMeavzSKAd6EcTMWbX",
  "key9": "5mx9Q3PYK6TYgA9UqJG5jSQ3hCLS9gSNGYsFYr6DxyXpnJHY95S2XoXzPjXDcjdbK2s4eZqskaimVke8EYgP3SsB",
  "key10": "5r2E95FvrJGNjPFkP355xEzKhRtrpsPmcfxk6ceZ2WrTvPRbzBk6EXYkzgRGwsTYU8nE8CstLK5X4xi3P1jBAqNC",
  "key11": "2oNoREA88sxeHTs8ZSAYjNB5BzB89R7QcHUkiDSfqccAygz7XuGK9mmmSNFjXPGEwRfWX5J4Nsd2wJkbqp7f6vj3",
  "key12": "vtz7vTiFwTtjRmVfRTep9bkhfwzKE21aGaqzSrqgmzb1Av6dCKYGFkL9Te9ALZRWMgiRt3ws3mugy7jLRcmk9kw",
  "key13": "4V2dqb8Y5akogDGhvEcWLPyYU7ioKgAJgjZwwAfBxbb17NjjzoLZtps36dWi5YQiYtTNtCfhmYY3CS2aY9pMEnyd",
  "key14": "Knu3G2TokCbFND1kDb9jpNWsWJgBVFkt64FskQxL3ZsyHWcZ756rjZgpcnMPXW9Bxp3DS7NfF6o6BiVUQigxHVt",
  "key15": "3QC4TFwVA4bnWtCPwPuPKg4DuwBhX6cyfotkEdELtx49uoUwfxeZp2feZCS2wCh6ejhRwz9Z3tGUA1C5fGyuYJLn",
  "key16": "65FXLhvcw55RjXBGcbHPSmdWmQVyzGabWA2DazDQ2J2o5pM9Runcs5QohtsM5Gf3fsFHu2UZCyDiJHsVeTjwtoW5",
  "key17": "4n9GseRHc9DoLWEKjCsqYLQ2LRdNYm7k9eq9VEutPzK9qCr4JZ6YJTBbaRt1tnpJfEXo15fuQWSfAj4rGt7gMETJ",
  "key18": "wqfiHsFTZeE6q7a94JynKvfTeKRTZSZEbsMypmavgtMAzeswyzBFbbYBtSfgPA21n7qbHQzL4Dvnf1zJC3HxetA",
  "key19": "3pAUmFzGkQngGitdjnHYCQxQEnSbkuvXNwd97raAb4nnkQDWGZtSTYhXCxK7fkScbZUByUE9VCi4tMAFPEKDkQgX",
  "key20": "5g2TRnGuEJqxFpMdKMtMwnGdydQnVwje4SdYrrAkJHbWGiwdoVFFAR6gvT1yKURqU7sLaNy9uP5zhBpyR2BzDH6J",
  "key21": "3oq8uHEcGjh7msL9ZW9kA9vL83iYDBMTTpwCQrbrdxBdUhfbn4b5pUMukPJLpL9uQ5YWVdGitMiZThvFo61a3Pc8",
  "key22": "5RET7RNNNcGgvQSSDeV9jFeoGgWAbbmea2FfykAcxNwcZH1VhfKdwP9hQDYgHALX8Wbvb9vU1AZ5A74GfZX1Mf4q",
  "key23": "BaDHCZVkPGizk9YWk274NFzZ5otZVTWYymjLDi2UZJYfXcdZpStQ9vSN5RvxrepBGJUGyHcEdTYaXfwqzwRnejW",
  "key24": "4dGA2hgCQ4WsysWn2WbdR5iFmPF3cWYoScXDkH52NGSBVUuaKLThdumkV1mSJBqTzzf3ff9Kqd53Zxy4fQB5zWqQ",
  "key25": "34ZiCXQ6De5KFQPRGoWTEeBJC8kMGJfcNZc6LHqtV6ttRieUZXDBjSH7A96z9UronQJPsVuPf3YjRzqe7rbAMTw5",
  "key26": "2hHgKKrXvKcU9rgGDmEuPv1B5ejdESV6iQ5YLw2RcB3bCiBGmDq83NSv6i1quEDVbZCKnSimf5Zk27HnX5Xt4DYp",
  "key27": "5uVrdrzsSqEnF7gRyz5q4Hoogr8zThWmbfUMZ4BZocho6WD3LsBEfFw6DTyKHe8iobi9GEX5CSjtnCyCcQJWG39W",
  "key28": "4xz2bP21rAFQnc5LdQn5akQaAHP2X3RsEtyMXmcjLxBzxrjMeXD9MnDA3jhouYXuq7dt3Dc6dDX3HQowF8tXWC7k",
  "key29": "3wK7pF9uEc65kipTR7tdbUkwnRdrAhez7w36s5eT835P7sDvzacuhmZVWX21mLWh78wZjEA3RdnmNr9SYmV9C6XJ",
  "key30": "4SjBCLQoPXzpzZCT8yNJMvEuqcDcUjig9C5HEE1intHK95E4moiyxxkizbBUNpJ9aogDXLc1om1uHLSpswzB38ft",
  "key31": "4z24VQr73FA3driFC1uf2CZvXWQmJHDNeExuPkswsv8q8u8X8Gc3e2e47pMPmWHotKPP7xM9FUpR5TYZqW6Zopvy",
  "key32": "395Fz5keHTc1VGgRMza9MrcXTyMk1Q7GaHp4VKhrMWXMwFKpE4FQ3A2Ydnniktw9gQSvggjpKmy3XkSVx5prr2kS",
  "key33": "622rzKYQ6RXQkTp28F8wQsuvbUFynjv5bG2s3dxd56pDaGcRamHyptzCGaaw48HpuAqiM34VkGvSBS3yo9R9PgR1",
  "key34": "4H13NQDZyq3Pmx1uY6hU8EtXMb43Frr6mzAWkJARWbzgNCxKn4vA4PfFvNt9zpAirET2DjUKLa5Lwq9aHzyykbgJ",
  "key35": "61Yn1RHrz6YMdNL1dyR2muB257TWaZjXgP3DTVpsq3K3fVRERa9ysec67rnrsoZRLxCmF6YKNyKoVvCVk9tuHCFq",
  "key36": "5ZDuSS2TqSPsuiyAnN8pKUQj8NgX6UbfSL8Zoqa7a3KjB2uREt1jTPcmSxm49Kr3esHAtS4rNfDr3UiT47jzqavA"
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
