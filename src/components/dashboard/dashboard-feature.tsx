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
    "4GepdKSLWnHWfBqWnwReWP3gTFz9VtLMLf2S9UEMyFkWWpTaqHsiYG1WQh8PdrDErXC22dYjBDkdvfjYdA26AeH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63vk8WeMYMFeud69jcYPRaFMHyB1FHrYmHw8GqVzoBBZkv9PRRUfRQ5CVdQZLvPfmpfCQMkoxa66sWgSaHHVWPkW",
  "key1": "KrHgM63dDB5Rz5D9wsbUFuW3LLUVKd1JBpEotvEgukKjF9Gj58tMxBFwqpSWa2KJd4yEXnyAnQpj1PdqtMzVLoH",
  "key2": "n9YFngP7Z35pMXgPwT2a17SNBVohvLiigXMKF6UCGqiyoCM68F6WQpMKuWou6MNJkMEk9g8k4hWZtKH7Sn35wGQ",
  "key3": "5bt8jFFFmunSiCrEf8Rxk7ELfA7Su7ZshtXa1WnSVsmY8QmpuxoGx7tHr8v8KQ5Ki1Smjec5QJ8gpBUuWGrzMaSD",
  "key4": "2Euz83FstiHqAtpqYZ1L7bWVC9ouPrXGN3qn7rQgr7LXv5uoGg91GVFG5SuZXK3QNi1tCViQKVhN3N3zaNcbFQFU",
  "key5": "4YPZykib1V1KutDw9dYaTrAFWELzMbjXLFd2KwL9rRdREwntRxHLR6GhMgH9yrTPJ1wxF5UPwDiqX9Bw7QhB8r1k",
  "key6": "4KFFV5bzixsRgyuKnQJJMbYktyWePEWzDBPWN2bH42x2vQS3oZWK3EufDEdb3ZitPoye6is8h8eQnLY1nMuMm7zC",
  "key7": "26FFDMTWXkkQdg1RvVmV1u7YvFXjohBr7WE7hyToeQfV7KkXEv5Ex34tKNXRDcpDtg4uYavkX73zNqcvgVLHngYn",
  "key8": "23KaVRqGTroGwPcje74ZxM4Y1tnjnivfEek6HsX9iubHnuveSsppAAxMnnYeY3sPVoLRX58CJwzf1Bs7RGECtBFr",
  "key9": "43uwzzNN6BrTKKdjP4d7XQM3U278nREuPy7DjLqgFCDKcWN7QNwQM5AqPJmgCpZ5CcoWRJEhSXCtCB7kYejqotNa",
  "key10": "3CZ6j6RBB6pp8AyEvGmQoRNYk51XRybPrpMDzw688HShCHq3PAdw2VP2jbnBDGJD3VSZYZcjCRUxVVdcGpP21U4J",
  "key11": "3VQAjsdtoi3LyJiA46niu2SRgWoV9sVEVoWyKDvWmK6bkSMM8beiU5oc2RCBE1hTAiCvLZm9KGgLU1PhDanRwNAd",
  "key12": "5jBQJ8GnxY6gtEaTNkjZGFtsh2NLem1CBhoHpQyyyXWyAmP17181pFT7tFqjgKYrcGsLZbkzUivHXEDGMri8E8mp",
  "key13": "66GHY4FFESycH5uKXQDiU9wiVzVdUfpEuuJPSDStbTjE2JZ85XmzUcksKrqEVybFbzVb5qkSBcV8xSdP4YqUcbnH",
  "key14": "4Mt9kiQKqaNguX6ncPnzKm27rL9meiDvPihh4m3LNMseoE97VZbzW67jLCSRnyu3YGiQzSNRzgHbhpaxtC2xRkgw",
  "key15": "5qLC7jNoQ5PvEL6EpxJdDLpqUMMTfmStruSxK6H9UeQcNG1t3LGxh5XkYyDrgqqtSfsMQUh5d2m5nYMsVkdBPfy7",
  "key16": "52L4KXSi4xF55nAq5SYczsEX2csDmDNmgTMTmN3aHwB5wzB3dy2QCuokZo2wQ27WhP9i95nxqKefHYrNmC6JDUCv",
  "key17": "2dQxxGwYNVVAEquJmRYVo219t3VDZhyzQhN1GJF9BwN4sd5PiizGkFesnYnJSb7KRhJzzdZW1vp94vxFDtgiJmha",
  "key18": "3jTHix2veKuavsY2VuZMHAojCHpEiykXyx1vbKwnCxxGYocj4L3eehmYxdKXAumvLh3nAJREH3ph5uAfqeKb3hQM",
  "key19": "5SgDTNNP8dnHftMcGVFJfTyBNzLMZhg59r3JT7ptLt3mAZigNttTcoUywq2Z9igh4pBUPMb5C2D1ggRpbtfaVArh",
  "key20": "5mDg9TUZLTH5ADbEErmDcdDRyqjHgPZrbk6E431KyVj6uH7kDxqePA9JGUbAwLEHN9VXxYV7d7wkzy1gxSKwXu83",
  "key21": "4GRHN8QSDcYAW1BDB4DuapqPyHyvQ8JzCPUvEyi3rtGdfu3Drr3W7KJnUMpBjF8K9s2r55DGsVoLeFnxTQ22CzjC",
  "key22": "8DjqpWPDSDozP8ft7nk3ynn9EUMw5dFPnvw2NGH5RcqyrABJWRNK6nbAGV2eZMQqEGGLepeyAk8A4c838TVsGQr",
  "key23": "2jKvDuH2c9amA1hLzzM4kLphRVNRFjtUU62FBSnaaMUs4QUgGVUJJH4DBYZmxN6tczxaS5deVMV1wEnLiAJGprYp",
  "key24": "4UKmfWTM7X7JvF7ayHbdZZ2zKskxGY1qNw9PHK9Fw8WeLXrbGKcAJaSpYpwjdbkkw4X5EBZ1XnPJeqxzoCi9ykrT",
  "key25": "5n7R2mmJM1r7TdcaAWDXoXLyP3kuXA4wrq3avybPUuN1jYpcq7hmegM1wGBZ4aaZ58TM6vR1MYJNkecP8fXu7k86",
  "key26": "4BNwDP35JEKEuJxm7DMsZi7YbiK9xP7vKouwzfbVSkWoTsghXwdWRzffN7DSgpKSf5Th6tiFfhHnSMoPkkNxRV9p",
  "key27": "4CoMYWLSenEAH3yqtTZDcTL1jKSbpGuEQmiznnnhL3YMxYzwfoS9X4hxyTZV3WPfMNyBG1awrs1uUkp2jV7ogC9o",
  "key28": "4AneSKvNAdtLWjpaQdoEjUbNh3gXG19djQDdbooFVGZ88DRSqGh8Ekea9e6zQhWP6ijBt7A6dwC8GSoFuZ3VWanV",
  "key29": "5m8NE767jJg7M8dbLv5tn4W8yNWqEaP4vEEQgEwGAnz8nwtnvKDx46kBp2yVowtYsEXHaJyyjUK9hi34hKhc2fHk",
  "key30": "3CX5EdUa4sQREUFemvRekVY8NDqYABG22DTZtZZewmNKzqV1QxNqtLTzLqEyhkGBF7bxCbdWdH2tBgLUPCcpJPMB",
  "key31": "4exuWULmC3WadtHiPU1ddz3YkZ7X1XXRNAYkaA1GbuJbdK81bWkR7mmgTmoYbzkPWg6dyiAJToPscMN9FQcLUSVG",
  "key32": "3EKDNXoz5cftpS7VS8ifCBFfE48Nf7T8n2Fx6wEthTRFTNbnHmVnE5UV2uBcyh89k4szddkVMWFUgxMSP1XaMzHs",
  "key33": "4ChvdxbimajP52y3q5Zn2KquT3t5TNtzsWzzvN9hVgAcz4ZmDAKZ7W69ff9SV7uQEsNywXy8d3zr5mm6FWxECLN3",
  "key34": "38NDTzDfJTrd1p79wb2yHpGqeLSU5x9e9pvHwzNUnZbhhyC9zi9egpt9gMd7yWYbGHxgteMKNwGpkswsmMwQWFSG",
  "key35": "quGeqEKfpCMkmJhGX2JRmCgYDAcM7Xsj9HWU2hGdWTDzySRVPM9EUyYAmniHk7MSXZ6L27Ck2xhVjRnTmQZL8sX",
  "key36": "3FypSV91hfF3oA7RZGdQCW5EsrokmFDfW9ZcSqna1GxbrRn1DbkzXaLbq8SAyVcdGqATRjXUmBNnAAG9oJQEWt57",
  "key37": "291RRQ9zuD3BggiwTZVikdpvNcEv7eys1LLyMfnzqctAfLdtRFYuiE9fbL7PshwrwKHhac8XoTvw6WQmxQ9QrReF",
  "key38": "5mJygJ9Swb7M5ZZxjTmoBMChoLA1NYvvM5bKaLEeyDwHbaEUDk2wRnmDRPse7LuQvHMQHDUYc6q2XC4KDFN4BTuc",
  "key39": "5zFzBdPeDiFgPjHqdyXsSpDvJVMcaMPaFmtezn78m4bJeSL5z9KPyZhkEhok7SaMkAxxFoeG26hZfE4e69rewNG4",
  "key40": "249stB5tzGHx5H3YD5tNdvDgNRz6RwewrvoERea9JbSRf4rKsxt9ZWC7NwqsGHAUF5QwRMrKaABFan6VTfbtEdQG",
  "key41": "2WvKkk6kybLEgCdtRJMWbpJU1tDJtCg84LpruuC5kmxtqtYW2SHmAK5wEqpP81kKyNWqHBgzbP1viYjesJhGSbhS",
  "key42": "2GdbT6a177y2mXhJMUL4TMpkYRvU6YzWC218ovrem3mnkw8SCYAVTsBnLXRuUU9PFaqnFmtBuZ6uq52svfpHcvo3",
  "key43": "3ec91JZvexjyAUHfdtcvx6SUsguYMepmW9bLR2NVEYiVsAPV6GLr5WhdDk8zEHHtNKNzxVGBaRq4CmF7Th9YDBLV",
  "key44": "2BJkCJd9vGdRRgkNvScbEG4xY7RbMniLHArVY2YvTbs5bJ5pmcM4FW5nJ9TiQ1dNms9ujHCKTcgxwm7MD8tMSVuG",
  "key45": "3yvm62EcSN51h6ZcgKJbd6c6sQLj1WtYprMxXTbWXdXPdVywWNATuwGi7tYptgiAmBaAhrGnLXdMLHRCGATzeMv"
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
