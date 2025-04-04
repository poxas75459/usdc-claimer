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
    "3qaPvoQucu6SMZjJmiWqeLtEK6qAzRgmshiA5cveVFj7XmELFXWUq2RqtzR9CyGuTaeok2gSXmPV5CVHDJGueJtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vqwqNqw9BAyKwWcwKY1xmZptRR2zzcC7Ehjt5wcUxKd4jmY8QLEfndj1LcJNbXNdC4LFnQsDgkZwn3CLctGnYsY",
  "key1": "3eggFBmCmonbjV6rAsb4GqYQcMqpYZGGEjAgLawuYfuLgThqQhY3mTGUZkuk6swWyfvh9mqwkdWCVHPPuUCb8Nje",
  "key2": "4YNbfKu94LTSjxCU5KwvLbVahiGE4VFNZNLFxwexzRY3Y8379bp41AHeCxec17TG6feduXtSRXtKxC9weuHad8S4",
  "key3": "5Yj6So2FnxmENzpr3zi2XXEDuEDyPJkEVUdbC31vFWGeFZdjKXxnaaMN4DvE5mjoNwPTkB6Zat4kNBzNja4kzuhm",
  "key4": "58fBhJRXdu3ggrqBs7Hi4sDEq5rYAx3ZDyt3p3h5B2jA9VAZFqJoBCKSKKUsmp5FYz7msWWVSQ8deUwLyb8GhuxF",
  "key5": "UUTTvy8T3Hbhbzh6CUnNVdrsqBLQGe9uCG8JBEbVNSNw3DytsVZsxL1qnCBnyfijLwQTFXLhAtx2bq44g946aDs",
  "key6": "sjSbvjAtu5QmiLV4PU7MhCmPyXGUxnimNABC9L7VkvYT2cEfG5wGM6Dhom9jS7rSVWCKAeRMu5qsk8A3yCqAHqJ",
  "key7": "5hhnEsWKDUEBWGD1uPokHGGN4CNG1dnGDCa2wNdojb1vr3NBP8vEAqaxDYt93YWg2HCcqgdmDo9UqJx1caxig4j5",
  "key8": "4CkC3KeBo7fvKzL4LmefTujqECP9ToS99kgMRBHGCgdmsJWpNkpfik5V1oC8ymboA3sKGafu8zj79Bs4KN8WjTcs",
  "key9": "41iHE54EhCxS3FS35DavgPREtLZVJS9rBmzcsVMjG2kL7cEDMRr4XphSMJvAQG7NdvqjfUqp6PCTubK2AWcFT5Fa",
  "key10": "5aMbSwMdSRozbKCvQnNzEJTgMp1nzdBHS7UVxBqZEY9r8vzXCAnG9nRCp2iQZNunrzqNAyXwbQTYEyXXvgP29wrX",
  "key11": "6514BcccMsPmPB8rCs2ApHkoumB46F8gMFcEcooBMYSYBYnFwLd7Z3eT21aqDBCyvUMpEpsFjMsS4UrxqmA85KWe",
  "key12": "zJ8zu3CagMaWT7qCgVsbR3DRKCiFAG7MUp9CgBKSR4NxcYfDpJDu8xTy9VZpfFRnxB9NvZfqcUCLJopeDFwHQAj",
  "key13": "3tLnhsEJhRhuZ7oT4vVgExhkkUAaomedeTQj5fLbpXi5dTVBL7zmHiHNhYuJ8fJ11tsbbXRSff3Wn3nFYSz4YE9j",
  "key14": "3deExPPDzz299Z3Dx8GEEJoyfB56agFXUsLU3xZ97Y34y74Vsg64eQK2Uo813M7oAwNzeUAtyGoiaDJHeMVxFSVX",
  "key15": "3ob5kNv8RTSR4XitoNPCudEhx7a2sAazCkpxHXLka4LG4S39QVcZAZaPQFtbHgitJznbkBVd3b9PZFb2MGEPwL7n",
  "key16": "3VCM8c9nv8B5cVE8TwTZcyzgCCL6mbxcEVMopLqbkMQacfbB7H9Qpy3KyETqumTtm6maxpbb6ReVAE8dgCRDiEya",
  "key17": "4BDmWULmSTCsmimZSe8CHUsrQ5qfsoGBbTCMyrqb7yr4SiVjFMWaFgenaZjCRH4xWTZyVt1LBRPtZbHLmdpaaCG9",
  "key18": "3DBc3uWZ1BKenRY3b3TxRg9XFKMPxgCxFXsNDLQGctCyihpwV7esj1FXwb3QFqo9i62Fuwxe8Xq7j8qwsgKwjJnj",
  "key19": "2NZg7Q6bk3K2dyECjPrJL2GbSBA9FAZqhB9NRszMnmbwP5e5q7tnUx3YYLV6gptEZPqk8hGs3YEKePPaLi6N4k8X",
  "key20": "39WCdBC4AKoNNkM9QPDUnoMbiHjcsdKaCujyT8EUtdjHvWZ7M5CQENnos3xfCHA4LmFcEBFZfuwbSqkY1NtKYiqy",
  "key21": "3hnwPzt8H3teqM5NPsNqftVBJJUsJWu2RGU9fgkrUne7w2iKnx3BAWYTCiQ41nrxogf8uZMne11JPtRZbZRPFSVK",
  "key22": "2FuBuiXrCaoxn5qxP1NU66bazZKtY3BnumDdzNMnjAuZ5Un8stSu4aqfDA5NCfrqaCEaKpMGQbNBDbb6Uh6voWaA",
  "key23": "wLnwmxjXhnWSR8u6c6bWSbwqpTyhV2Q42seoBTAw2LBCb7vQx5AdVLNKof1m43KxHRAcgFcTaGyaURNQMmpo2Nq",
  "key24": "5Jgti6hMaYDYmR787ohv8Hh4zvsMEWydGoeXierpJ5ADJsb1pUwZAENFCPswe6jB5t7yPkSdhFTqJjAjJtTjb2au",
  "key25": "2TZDPWcJYx7YArNHmUTWs3XFGzsVGhXBCKhWYBab5mMMs7N6fYApwA65LdyR2GHB7PqEtGn6X6Ua6177M6wvgSfE",
  "key26": "FtAGGfPi6JfNotLrudYo7FjcZRsdUKBwvWyeicWaJGL6HeJVESazkAsepNWtknrBAzDGnrYGZAvLGqEBA9r4SGy",
  "key27": "313MhcS74hozrZUE3e98kCRiyyLeGd85kgDmvQJadRrKQeEDMnNQkiRnRAm6nPHRA1DiG2kua1xg9iQkzCQDoo3S",
  "key28": "5zWMXLqX3arVUDzkcU2Gs4ghus2uDB8Vs5MCB4tVMM8zcjPDGniGuah1sRBQ9yxKwpZCVL7U6kzbS2gH4tiYumi4",
  "key29": "3U6NeBzZ4wqAttUWzDD3XqJqFASnNJf9iiQRagT5huY5AYZJMwMxKtvtCU4faLA2eM4MABZntyUUMvSVaw1NS7VL",
  "key30": "384R8ZMZFdPnKE7pMCa7Fvp3QP9xQa4gM2eGRLVpJb8WHwF94UMPFUkKFu3mfm8MchbYbdTGNEeSVjFcTTw774ci",
  "key31": "4256CddRBTbRpzUAMxNoApMGGuK8b7k4RXcET5bAet3kcMsfnk6PAxtBXZUhtGKzGZ944rFctKdq9hV8daZRXb3s",
  "key32": "4e1MadbSujfzpTZfUC16wP8PuHMJbCBRHZbc1Yycup4PavRJSKUSm1d73Q5hZRaeDbrnGdAHgVdACZY6fMu88ctD",
  "key33": "3aotQsBJ3ox3cxJwKowmFKhCGn2Ur1odfTaaFmYqAq8BZzUtpAvw16viurHXteXadukq31igUajofaVSijJgLnHg",
  "key34": "2ohfALtCkMf4Y7sLyZ7iB5BJ6FoJd5btPFe5V9F9uvFzeCkE8b2Wq54EX2LZtzJWQ4qvgNBbiYHH967noEzxvxao",
  "key35": "oXAKrWjRUs8EN2S3x9YrQaCXVrNEMUNK7eEmzyjLDNP7DQQijiRJ6nqoDfu38QhNsWbHaAkFKyuoeLvuLmZoV9Q",
  "key36": "5M2aakvHRqSQbJDZEC2Lh8PCezeEQT2sFcfKgAE5jxZSB36xZXPHspBzUbbn8YwhZhwKpYxeq6rFG1gySxNBmjfj",
  "key37": "gfhd85ezx2sYGgvvkUL2MBxv6NGNuLr6eWeNxS9vinT8kwd8x9azz5aaEJ7yHPanuLPg3fsCDDqHZdVXXW2UbK5",
  "key38": "7XtnEsq1RAZr4yFVX7XbE2BMynqS5ZvS59puFRHXu6wwynHBST9eYAjuCZVuCEJtXie7sMrmjqsUbrzvdp1BeSP",
  "key39": "2prw9k8vne6oNcGtBCQkhn2WtMm9PBQo8pA93Fh5YhKWSuwCAZ2rmREfcCZyYZgqTRwBWtnvPwDEPNfz5TXYQdjA",
  "key40": "3xGLv4zfHjQvQVhoWUZnhRjDSyVG3JHPfYq5nmeMaa95e939EFJWSh2Geb1UwJvzpPCnjgpJa1HqjcdsJzLJydpx",
  "key41": "45WqWa2L9K4B1SSpBcGPazeTGpGwAFNJFQY8fmUEovEzRbzcBLFWFAW67LYW9VBcQoWpPMEWRwwqtGXRBAqUVnHJ"
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
