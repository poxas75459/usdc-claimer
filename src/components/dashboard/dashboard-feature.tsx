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
    "4Qf25NrV9GYGozLTNk3J2SEbXRydwp52cQqpWLCYENxTjnpCtf444hHQB2viUh8jgU3QVvsYbkRrsGiueVz635BH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48YSAEs33cLVatufCBAp81Z3zSJv8JL3xDbPUyfA6UXZQs5D69236xmtSak8dtaN35jQ88ZXupdbdTim4foEgbgB",
  "key1": "4UdTFvRN6gpTsK3sH96AYZ6WfP1x4GBt1h57zyh467LHSZd88wJP4jxNqTizvfUqah5GDCcg26oJpiHyeXMt4dxY",
  "key2": "4cKKWhzXJ9jFxKDwe2KBqzgM61VpMew2vGBhH6xCfVp63s3U3CDCSNDkiN9ThGFoYQXEFZYVcmoR8PESHQFeAueW",
  "key3": "3aDZvKzkKJdAsXbFkt77SSQSDupyM77htZj8PM82TA9ryFakfGhaVtbm15VRmzxa5m9Y3hRzkJ2n18AakAui5vV5",
  "key4": "3mQ1sLL6oybmXtyBSNHHBBmQeJURpGC5bUx4dhuBpjnhwkkKe7n8pbdru4tHoViQAvGwTRJM8P9CQBUghhmMqbEm",
  "key5": "4pNmF1QKRM3cdJcTaqTsKNcsyuGzqpqQopCp1wDmzQkQuhY9yJfEKwxon8a6qLPvaqwGaSPEo2VQcnHBcucTicR8",
  "key6": "28AWtVww1JMBhF37mwu2PErASsfg8NonRRLbS8RDNTFJZHfr9LgQHnJVJAYGnu77EnAMhVWuzRmfC4Jd7XLfbJBP",
  "key7": "2HZoG8jNZuV85498ytw31wA9HCZaoHnbRZougvEJzxZcwhxtW4cw1aiQrrpL1aX67jLasJXAzCJBXpmcs4z9191w",
  "key8": "3EV5LGRk2SzB37kaVHCrezzTXThbYn5ZQRZxHDojsEU1KH3chzPxxt5iLLPiFPT8hhuS7Ka4eqxecXRMzzbVtuyo",
  "key9": "5jmmR9gBZntkGuuSPzaiJEAeU1xdJSsoaUF1V3jU4d958vzsS8kAFZfiUNV1vHrMQXv3ZCWjovejG244bsmyZMCz",
  "key10": "5VJCgGk8dNdg3TQWUGSYj1zDY3FNZH4Z665sWF98vjkEFT9igc3WEWnyMWJmQfPHL6tNgrsu9zdshViYRR1eEffa",
  "key11": "3qrd7ArXpwzGgyy9zhU1vNK6Nmsf18zF7xbjPcY8m42kc8CEzyfNwy9kv9RCaX7LWFr6RQt1ATYJKCfHTrzvEYqL",
  "key12": "5DGr7hV6p5y6ePUWwZXWfdJjZVrwpAXfUcY1WyNqyLHRetdnYhGBKGWuWniJq8YeFvGGeGFgLYi3qpoqoEVy8Df",
  "key13": "3CDjvH9w1wsV2zMQkjAZNw5BcZzD8gpsBceNqzttP8YX5UKkDu6GgiHRQb2J8rUUfBNejDL9Sk6deqaD6x3vzXHy",
  "key14": "3arqArY2yMYUG2JPdyb4hnQX6BrFEbytkkA39WFf9WdLr5tEMpwY3xepRdjMb4nZA4HqNHDjW7gQbAukydJsfhHz",
  "key15": "tsKX1n6YwGTzUJmxCcpzds1ELHQCBEcCTXdnGYKcjhGkRLAjZMUjWLw6J3KXcoGRZbp53AWfB7Au2vpnugnqJ13",
  "key16": "4pnQffzZtf4LUHhwTiaJBMw1PfqzSPRob7mt8Mop2ZXa9gZzKDyGNbv3GTwumGTMjrZzkEHzRL6VFYkMGqisJnWd",
  "key17": "3RV21zeL5TvKXxsTVxJ8No4ekhG1keZLsXBPfkkoxm5vXwdcGzzM6d2HJRMUxjAs52HzDC14XPX9c1Em3qXLmjjC",
  "key18": "2bBVDsJMKKjMpUEPYEsfJybp789nbWPKqR6fpmKSF4z9PEZgPC2B8JsGodAqnSaedLiRYvsrxDdsB36rX7cNgzdM",
  "key19": "3rbB9QxmRw9URzw5g8gai1GuQ6gWZcZyUKbvMwVdAVL9taizVERdKsdruX8JfUeSf99N41EewYFTuUu1wp8MoPX9",
  "key20": "5f49gX4Pi2dFxQQAaNo85HYj2JeqrqBPTmGbW5X5QKJpKo7aEBKoPFT89yasrreiPDYzbgYSZ1TQR8zH7cEmHjqf",
  "key21": "2zHFjmbt5G6kFiJeArccsAiyTXGb71WE21PHYiqZqTZJ9MsZcYKigYZoVyCgxiacotBW5Ec9Jmev5cZ4XVimZqVQ",
  "key22": "2Lzrh83uwz8wUKKFvSgbka9LV5HfikPMU25GmVJmZzUAbeL7CyWyPRrHFw93AoRMYCdaRnid6YQ4RJWZ5cZSd7uD",
  "key23": "58iPL9Gjh23wZiYMn68smZtLrs8tSYWfDqpce3RZsL12GYYW4TkknYrayy5m42yP1xM7xdDUHeayBZ8Souzg63gF",
  "key24": "3kFN6rsjXS8ePzofuGES8e4ti4tq5YjEwQPkAGcc7Sj2eiwXL6GoJNVEHYTBoKY5tM7eGrE5u9AgkEUsoPvhgUZC",
  "key25": "4eTapSB7kuF7ggrm7iS2Ne4SYaoPq3H87uw5BcxW5a8EM1V3372EuZQeVQDe5Mz9yLs39LNJPu8qawWVzGA7ACxQ",
  "key26": "z3Z1RiWivoTe5vhCLGPqp1ZWyPdtjPUqon7xsaFk6ktFqiV1ady1x3DkugBhnypYcRy3ECmQWmN87xEcnubBsox",
  "key27": "2iy1pxq6KfG1H1sREi81Z55u2Fyisu7qbaLwrLxxDG5GZHkBMTpTYeKYV8oKQB1cGaFeZqR9mUyN26qfg45SjM85",
  "key28": "36yjtTMNiv1vsxqLzFRWneb688k6gQJQ91bf9DerwuVVBJJ3SbZoAkcDPREJpLkM5Fa6entUcntXKzJMmwzCWgnC",
  "key29": "2ruSL5Rzs6K3Jf932x7WGTKF9cZXm6G2YDPRueSTrSuRC9BfWukEgGhoRwFAZcEcwuiaeVzKS5pfY4F6YEtkACCq",
  "key30": "5ExRh796VZ53Aq9ax64wCzKbrANyo52UuRVjZpmd8mGQjE1X77tCQXhQ9EAYm56x16s9vB1dv7qKzKscCKR87a8x",
  "key31": "39zF3WiTFCujUqxrFHqSLCLbV3JkFrNuXBR6ExnWtPRnbDX58pTUPuGsNNShJ2kKftij8d2Mr84fqY2MtZCpRM54",
  "key32": "HCUT9cNm6aGJWDKUu9jFriXamdmVGu351283J6VCHY4vr1z5ychjVAQPyyQRA1s5ho6NUrpTJYUH15RvJEWutKt",
  "key33": "3duqRPyoHcw2hDoWoTXui98KTF8nJ36HQNWF3Yo8d751x1pbP4W78SXyzBLSCGkB9wBZjFzVDf4coKWJ4WRjWHy4",
  "key34": "56ajunNPMrivExk6qWvvP1xfZvxYSnZhxZeToC5nfiPUQrhBfRvzKdxYKYnVoTT95HC8T5pZFk2BA2mLoPMSBsDd",
  "key35": "21cM2gfWbubYBpHb1EU5qj3oqsS1YcLTZo8WwzrnzKrehMUMyjqVNnQkaLMs8xqDjrMYFhEHBAgrKn4Jw8uTitPp",
  "key36": "bYjxnetMkghAU1mXJMZEZV1fptQL9JovrfhMA8oF3WixG84CDJtCiYj1BYHAiE7JHYGxzkSRux2q8TLiQ9b1Eij",
  "key37": "54wL8hSjSdYpr9swiF9ZFYL5B1xNLBegXVbDkGhEZKh6fi5FzxX4yhv5a6cZavfQgNoT1BWeU9DsLto5oJZZZaQa",
  "key38": "22m8b523U1UqWfZzLwqokW3qodEhkdfk5eHq2PwNrhJgKQ3HBJ1cwe93TkYtH9JtibVtjpAyFbZCDsEdaBS4QVZG",
  "key39": "4qf6QBWpXNEEikjeKDNCrHdEcuKqKku2TkfugYyezHp7Hytoge7wSxrSJDnVA27LBrZZZCaRFBX9wXdQWrR2uThG",
  "key40": "5EhWni9u9GfrQeTtbDtdfJZkc21S9bpjy9RmHpbEV12mkGY8CLrFmbtPCetHH5MZNzmhVVmFQ7rwAXxFYKAHhgkw",
  "key41": "5Lx2DXzC9M1i9w7QickbVzK1h1A8WQ38jxtGojhz8vTXWMj96X4bKcSrRSAWd8UKmA7xT7eY4G3gDBoGvrAR8CDz",
  "key42": "4xtcPLqJeQCTh1KS2Yk4oNVN7yjTdBFE76G9DTaxpzn4eRZbNBxL2dHbAhUm9x98z9TR68z717ooyW52NezfC2sz"
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
