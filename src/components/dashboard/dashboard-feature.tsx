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
    "5G91APWZLYT1LqGFekS63AK9NjsUQojF3t1wRXv7SAwzn9ZrkZRKQEoJ4pNgiBYAtKe7q6f5di2UPkgFYUDHUAfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wf4vifacvctZ827QZWpHzAkeQg1i8BtoEjjZUpgMcsYJyKZ2yuMwmKwBrnBaDgs1GrafhoXYpuNppktG9wjf7dA",
  "key1": "4H2KniobFxiarUsVCe5Zfma6qLN4x6NZQTtvabATqThrVm4RFwDGChgb3mAzzmfzzgQ8ueBoxnS3Kwy6erAzkGM5",
  "key2": "4AdCCYF4HgZ73wiZpSWwFjYczEPTaicmEoJ3kNNTGDzSU5KCj57ZFMaNkbB9XbNq8pxp4T4aWAmvzecNLYPZFxjQ",
  "key3": "31yZgJtaNPxQWVL9tSneEXYWD78gw2gdXNWWrCZrBecnjW4BZhGxVtnDwBPXvgeHYnzsGw4twJQ5adytKMfJcPTZ",
  "key4": "53fTuFuiSZwUK32jPGs3hduLYgNoMJBYZmQTXHjCZVNVWpmEpatLYxgcvfiFJaeTzYGDaT4DZjvaHqqT7eV6UfrM",
  "key5": "AtiUc37aV6d9evFq55rhzVCfhWw3zzUGwejxpze24BJ3iHnQFKtk5iCkJmiXdUQyGDyfm1P7jBgbM8obGKmYxpj",
  "key6": "36TzKoXJwY4z4Yf2Q5D51Puwgc2htvTGSU8P5oQL47ciZHPHVu2Rm6rTEr7exVEZZhidU27nkBJHvcbt3odphy2a",
  "key7": "bP5iCQB7Fu86tVQYoGReVhWbUM2NiFkiikvtMvo3tpE25KqwHujsf3ZgkKgkcxWi1jY5E3jnkCTvQq1qURF8NXt",
  "key8": "3EqNBpg661jUXqGqowmE4idGe8hjZELiaE1toJWpmVcZFp7BP1tz9EriVCSHAa18UsrSafBDbAJb3iBfw3bAyv83",
  "key9": "k6ogMHgY6eL1AQfFk943DtbnayRymwGQ9Cpn4DViiFbXQy8Mzo8eGRDgURVdvkD7jxsQ2cfHLuNgNsEnLX6zGw3",
  "key10": "5GFDZjYE4RePFs6GKRHjLi8avF8Sr6cu2toxWq1qVsZ3YuYXXgq6YY8XsqWqDaEe8DzDEvGbG25MWamKwP7XC7LJ",
  "key11": "mvtDEin8W6yfpWb7jPY9Pshd8XdYcPz8Wn3HJZar9PDDJHAHQ2vn5y72u8mdKxzw7AoUQ8HTL4ZH2FoSQrF5NML",
  "key12": "3KsotxUTbAja4mZGEBHykbQ6v7mJ7Be3PfXtPNd84jeSB1szjC4mzrEPYu3Q6c52nGpHspApp9aDpmtuJ1oHDQoS",
  "key13": "4ivsBzgRungyLsxMpd2WkQZzhYye12U2syVWfjqzfq8pQUdDKZXQ1tNc4GXS1bfMH9ZTT9xA9f2Mrxzbj8Tqk9iz",
  "key14": "TGXaQT5N2ka7cAkXkNQG1oDZoZoX66A23zUw5AG4WjE97Lbs2j3zAHuCvtw5r6BzmVTNmrx4P5pQ7Gz3bmSNKgg",
  "key15": "2KGoxTFeJKGKa88qMNXHjt2JhhqTcpHLKr3dEerMdYLcUKAfT8tFq5fznjsXfJzWaVkGSUoCDNLwTBwGnda9mJ72",
  "key16": "1evh3cH4zCwKthNhnuTjbKwhry2xZXWjUou9rUEapK4f5aGLvsR5fEtqQkNEmpTLubfM3GskAEseGxBE6STDEfu",
  "key17": "2zEHCFW8nK6mZgyFYS9opY44MiTFVzFeCE7wCpXjiKDdqF731eVU9Bua4oYCJjixZdqFKAx8zpktUhpTRbggyZaV",
  "key18": "YKaAP6YE4Bgd2kQiubnMC5rNHmCUiZunD9H1oerDo8LHqv3VqZWXAUjBXMcriaYVNCCQKr8Y5gPjfyTL1iWFsdn",
  "key19": "2XACwAxxHCT2rqzyjkwBFKpkKNmqAfgdMB4HRWgXdvD7LCCmpoJB6DjqyXSSGLf8GWPRwUfVqVcTTiQobxazype",
  "key20": "5rB6LCuNnUVsTtKW8qjdgBNgyYxBKrK8hksHrJXRK66xLxxgnyLXRu8gkas9yvqnyjKhf9SgaTFM2MTn75x98XWk",
  "key21": "4u8wDPxYK5dk6KhTT5sgwx8S1jZTmLBRdmmrTzc9Cn3u1fM2XYZjjhN2KX9iYM6sjTndMsuaz9MfysCBwfotqqoF",
  "key22": "5j6qCQFJ4YkX3Y36hSi8v4RiJYw7mrhYnVGrJWqLdwY8K3165mRAw2crrkHqFNGGhp1VwWT6fenW6XCJu6SYcMUt",
  "key23": "88UZUFKZ11WGG2FAr6eyXWiNrMuRLKLzPhsBu2xQkSB3k2GUK2EzTQ1VaW5eFtNfr85JrjYdKGJzQWV3a1ALAEG",
  "key24": "4xMnPjrvhJb2u6aAdUBaSTHjXcEVYcWLyKt9pLNLXcZitbQD5eDQ35q941CmD9daJ94FWA4K5sVxmvs8ymjRaNHa",
  "key25": "3NY2dsdnzujuRL8Kexk6JofnAdiAu7ZYZfjK55j2ysMyFJ4k4c3Z4cigmW3L4hcnRcuXNEzLDsrkw7AAYKBeDRZx",
  "key26": "4sfw74oMESWWZJje1BSm3cufUtKbDZWBGep7M3Q2vNtWTu9EmUdTfN2S9juoWncMpVme29Zyv3R1iufV8Rv9vLhf",
  "key27": "55144j1Rmk44xc3HPFPmm57522uCihUsJc3x5E1ndfWzRkihNgcZPrAkyKagBf6MGqRtdL1V3hjF1JjoxmYN1uc5",
  "key28": "3FzkmGYNuTa9FsqsGQYTUxrpc5cmoJF5rHBcVtUhZjWv99gAkmYHYf82r2Tq3viKBxBiZDw2t6Ryynp2qZKy7aRz",
  "key29": "ybmSDzRQqTUPciyhGaEJ5FTHpc93ikWgCpr9mLQxtpFAXSbeZy2WHogQq9gcd3vLakDmtnJ6p5CpG1NQ6MWMnpz",
  "key30": "41WXiDk63w4faUBvP7J9SwF3A3KAp33fQNGKdAXbhRj4rqKHtWH5HAbH71thk2oKyGznnYUVnMMqJmT7529juJxK",
  "key31": "4vKBgbwrQCfcgHdkm4HaKR2mB4crvEqF3LaisxKgL763dBqTCt3GRQ8PBpJ9MkNie5LAu8QV7nWwpAoBYY8xLJ83",
  "key32": "3rrqh6SGGtKr7rx9aU8fStabv6hupfReMu2HiL2F7My2sWrmYHzBu59Xkamw1WtoSgc4LybPi4ykdcBzUTcBfh9a",
  "key33": "5WcYTos5VG96Np31uFsVB9GZVYQJAZfNWHW3XYWddSto8uTfjiSR4jsvka3bEfNGrnycKtY2BqQdTH7fXyh2qGMZ",
  "key34": "4J3M4ATy6xdxjs7C7JaTiNTTGUAyNSiXWLUavRfMwKuQ3Enapg6U5EKoXXQztKdYTbpmHYjV5UDLRH6FiPJmJahd",
  "key35": "4sFELnr5Cz8RVQLf4FBRXFGjS365x9Q7B9caXYRLmNQa2XRTkDxwSSZXsND6ALhHAjMjf5gKXLGyjRcUQnQYFGE",
  "key36": "ZeA15cLjJhd8M4vHoP8SPNKtkob35qBb3898JhDfu9dCRtbjMz9wBq8aNMjKupcZfoy7b2SHyHTp4o9sejdsjQR",
  "key37": "5Fq2vc5pMUewF6EvYf294UeSznV92otqcZj7e9TeR3dQUsEpA5mP4NnJhGvLXxeRKsbjhSc9LHmDz8MK9V4embif"
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
