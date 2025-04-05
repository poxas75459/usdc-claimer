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
    "2xP85bo2pqdMfA2MzCEvg1dah6LJ1NXPqs1zZApX7dyZz229RY3PA9WLLAJr4YygJLVKh2qjXLDgeMJzM3KF9wce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQoQidJ3hJyJXvmfjCBLovmtN23ZDSjpZwKH59cBWe9Ux7NDY6KL3uTR5M2jEt3GkMESvQ39n4WJpoiQbXdf51Z",
  "key1": "rRZTjHyZiSbugXAxrDLsdhBk2uf8FfymHXDYEQLqxw4XfNQdSNmCkxjcD9jSnBo1JeEVMC8yhQGVuGHt5X47ezR",
  "key2": "GsfvG2dvU6i2wku27eiUSowhvPELkNLxHzdxYXnMJ7j3yA19uiT6asdpqtrL2D8uLwtS1R7UVKgjWgszMEowMmy",
  "key3": "2kmqqyAtmjwAzaaVbzBk5cyRN9UoHUfMiA5qA6cQkg9Lx4ueeqfx9S3sb68V9WK2A4xCeVSguqgeH3NukJePBQpU",
  "key4": "4HSUTEzmGtYGp2TR2ueDjZpASXkU22WfxZfXDQs2uige29PZg1tEdZJDNTWeY51hw3N9s2khShQ6BQv9ro5MAEry",
  "key5": "4y9VjvKVMfX6HfyaWEiJnwimAJiS1K9a1F4rxhyHVa3RXLsFuinj6XvZbZmV4DRMCyxkQ2oZEeCnk5QMXsELg2NH",
  "key6": "22jtmkzASUc3thvx2Fn2eaEiRPVomrwiJeAmkEaNo3E82RyAKykRNdTtiT176Wu16fUmGK1v2WPUFGBRq7BN1V8B",
  "key7": "54hpLrBPSC5SKXA9Lm4duvAgynSWjgYZLPgj3eqKMPSiwuGuGiRx6YxksCitr14vqA5vodb2koukRkd8Jw7ZfoUu",
  "key8": "2rGvhrXUCYAhdovR2f2MumLF2b28cYg6zSGL3vtXvYyVvzkizSGc5XzD1ENsvmh2hfXfL3aiqDSMEMtZ4HwPgMMP",
  "key9": "63HRo81EwaJSmLPf83MP8bNge2pcZcUG7FbsSLEy5PoFkdSU7v9CnZJFXs28kMuTa8VMyBJCBWAYtYLTYZzt7GA",
  "key10": "3sdTe7NDsaDKLWiSnyeAAD6Yi5WQ4PhaFHU4gi5pr4xccDGFPLBxHrS3HwafiV2Xa5cGqFpL6zP6tJnaEzHod7Zq",
  "key11": "4Vnbtrbfs5NWK8B32h6PEFPDT8G6T5cwVMVATu3ggnmH8Z7VyChyHtw29khND7DL8DJTpYu1i4GrMW2Ss46iu37c",
  "key12": "3L8kKocHRSATET83BnwUuPXRCr1E97XGc8W3wSRPokDTgsALhRaYvoC94Yv2txJEcNFqXwdxXfZGMDn9n7Dp9mzJ",
  "key13": "UF9BmweGnzULbrkHLueGp2LMRu1adeeKuvJsthfRAsNRjtWGY1VuBiPkJZYN9D3uxi178A9asQQVY5zbUo2JJok",
  "key14": "2emN1FLhuk88SN56KJ9WmxDzdXvf3f5VQV8SKvJv2LCx2jp6yDwtbDYU33KVGuMDftWMpEpm2VJihaBvP4sdXahE",
  "key15": "eL42tmCoKixiC2nQNfvx4eto1PJTk9DPU6BJf9jX4p5HfcqEJePdVfWykGUiAhef9JcTJ9aoncXZrX7eqv3n5jL",
  "key16": "2VRgA9cTrutCWsfTV5xYaK6xqt1hvsVfeQ66upKe7rp5Qk8M2vjbR87ykDAtbydhFdg11kiTKXKBi2MjCPUs9vPc",
  "key17": "3Q7BXWoJ8KhAsirZLyza4GZUGQrnwWrKHECWvg8uceHJPs1iW5VQmCEkYx9GiRS7QnmQccoeG6KMZSbN8ZfGRMSN",
  "key18": "4GnDwc75Sp4d32uMK6Bid8Amrw3P7sANPrnPMheK8xnAzUAxvLT5zuUWwYgh4yAFMuXE7E74bQLJunNP98F3xqZC",
  "key19": "3Bv6X7Y3v1fKUab1otfVAiPArB3AaecwjfB2vgr6nG1Nwtxhi2BFbyzXKqQBGkWr6MKKwXKp5K7jTiSC8BDKsETf",
  "key20": "2ocMSHYazmW5YNWPAiWP8RKzKCYzAoeZ185AdFBzP1dUht28poEq62c2kBjhVU69ESnuDpXbjuXs9Cbo3u8HYHRv",
  "key21": "5SLAhXibySZNzWbUWHDSpK1H4ABmxKuUC2W67KgXFgRi9tFJMcKD5idwUL3DgVK3SN8dtRFBhmkinQNwcgBWX3pv",
  "key22": "5YYEXcpkJsZ9fyjqXumX4ikGLVdKEkt7MaZUCDMps3hdzQxpvf7k9Uvoz4Dvi93LmpiRdszGgPKDKGnxB1EmMQfr",
  "key23": "5Wv83zwwmHTagrfgCJd4eSLPySoV2pg8xgXAnejVRQZ5N9sMof9kvxpqY8R6XmCcVFP5zmei7HmZT231Y9WcuHmM",
  "key24": "3B2ixxRu76kBcPo5rNvjDPeJEbuz3PBJjQE5gXZ1FtrdEASfBBvz9nUQhcR6mRJoDBjb7kux2zgTF2g9ixB16H1q",
  "key25": "gGtcjTCM2YGrmm5r6N37C7bek4ZXpYy1JNtJkyixgQh8MaVWoQ4zRiTEyYLrAYYQT5b5Ub3PxqRT5ApXLJg4LXF",
  "key26": "2HDNpCVhZ46GrJC5dFyL1mZ99Sky4UyKj1SHcT9YwPaNwUG11b9iYu8kJA1bU5vtu1uS3YeRKvUbRejSaaoKiDs4",
  "key27": "mouPydQoxBCocL5PruxuYjVz2ZgsysoYYsdktBKSgt8wWYWMpHNZxrAurniTDjKYBLKNLMCRy4dAf2A9TVSTY1D",
  "key28": "4SurhAJgBTkAfbLnuDjAanxPrHQEsWjbYq5c4vQxrbvMYhMZbkzZ3XNSY34xpFFdTNJ5AAzbxTkyUPePSSQ3AaBN",
  "key29": "2EkxA8WdCeiRmxni1SEE8fmjRRgYAhwWbpCTTLAhEVVYgGPZfougWrFHh1ZmoPLi4GS7479N3qyvYK9cJGStjsZQ",
  "key30": "4kbJXLCUMMhaQxykihVVtm2aap8cuzcGbbiLhcnxLnfLDPvxjbsjTNXa5ShpWFa6iL6d3TByEQiLC4PmB5y4DdZe",
  "key31": "5zM7iZNUsjc1kG9Hwe143HxWcbBQhhETm7YYr48mdE4E4UQzT2J8FzJmfg9soAoEgJM5n8cpTDhqhuMKiEZgBRp1",
  "key32": "3BhbooTcWK3zFCgQVtr5rMwG5FnQSie6TH1NDG45oWrFBSnRp4bak4GYddCK6CnqtLptEBDymDui6BgFfDfmYrQT",
  "key33": "3yu279pwjEWsYgeiCfDeBS8E9RS4HS4mgvFuMpxVwCt1kJ3eLSmDS2cp89KN2J4ambLxWtwP5y9wKTmJkd7iKij",
  "key34": "3qx7qX1BXnoZTUfkK5kFgP3FoMC6XM4UMdw4u5JhUgvqLXFrmbYvANejtJKpBpcd7oi14B2ggCmigvGnwEm7mHwC",
  "key35": "CJxjyumG9sqzKtPiCmyrmW1asL11ASjJchJ8XuR3GZjsH3pUV5CNNH6CFZ9wvLXMPvTkzLjWeKuXvqaBV1oLYK5",
  "key36": "61zPpp6zzqA9rXAeNPp4fJmwsTK3cHZuZpcMpyP44sJoS5cLDwxUdrsy2QdwCxM3EB37S1nXfaC6PLDKRKuBoaox",
  "key37": "3TmPi3TkxYyzTJSkfQFWqEMLHe2nFGm94KcUaeCCZCiBFA1X8nLFJ1fhDFTgYsqwnWp7QWWr7nVRjdwVarAPuyyw",
  "key38": "31HdpQqw1YecZmgEvzAfKrADhzjfENtRjW9Z3MmYJrJtXcMR5TxsUt7bfXBPzfzK9ZNpVzKWXcU4cCUyrwrRDpQC",
  "key39": "37kA51MG8ik3abjRJ61QKRwodvtKFj5QCTeqzoqR6k5ViRDb8q1KGwuiDxc932SRjUaep6DfYqZcwt87ssoJKqSJ",
  "key40": "MUzqGKbBGgQBuaqtP4ZYj6a4kW2ecQpd5mmw3TFXb9YZ15VVaRGJ8HYgAntwqsSLfAAWJofgSgA4WJEY7XEfKJz",
  "key41": "5gUbckgKkdqnWwSXc68H8pqAxzYyPTyAQLySomFeDCLqobRchUYouPDTgGwHbhx7Hm2JJF2WUEFMsJuJj9GGLTJk",
  "key42": "3LCo51baARpYLXN95xpbBNjMhC8C39iJ1GaAf6bU2yDzfJzsqSx7KRoU6ybWw3S6sj6JePQJRu7YdcyHcvhnTMGq"
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
