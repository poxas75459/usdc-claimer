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
    "4Mz6DE4WeAmKiafydxUuJoemYz3DniJQ2H8HmUhLk8KhWh74yMxUSLV64y3twRXG2zLGiVRrCfUfDhe2bNaoheQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66EQp6gCwowntqPbMmU7xgYvvUPQzsAR6jiAfPGvt2YLR95kZfNYbsNZwUcpnC38yYPYW5jwKFGB8ofgyAtHebfS",
  "key1": "3JCteqddVB5Aat9FKDNetBD6xF1VHAEEAENEAmeUBhArySW8N8pLwBFFebetzCdk8pMDmCUsiD44asxv4GxvPjnM",
  "key2": "M3tkmcxzKPsYpLFEXiaqmSvoRsSzbmNb2HNrx7tuehewTjeyLApNPqkV6o4n3e4VEPMGjoXgwj69CxJ9TFToWqW",
  "key3": "38qgwqZiZLqz4fgNGyT6JiCVmMigYENRhGh6UWHQAgRfhFPKy5aTuvBGLb1kG6gRBT4mfUxVXfMtLVpfLLxcJEFx",
  "key4": "on3Las3HK3EgaoAkVYtEqJMmDxev3PbSF8h9nj5n72jfVpWhYU7g1b9Th972FL8uV9iPJXqCEFxN88wFG4vABBd",
  "key5": "2SCsvUBZU5SV7yRYweARVSgDFNg6o8F71hEHGUACSkQeFHRxKd6hfVPikjcauwPRtXfYFbgsH75yL2ufREE4mFRs",
  "key6": "3cZc4xUFg8vUh7Scn3XzhBwapuRrqaTi57KYioqpEU4GjUVBa3g2hoRmRDcFQZMmGzKsvgARmdU9rYUEJANhb8pu",
  "key7": "3jZ9p1pBnQQPF6QTCwpb511jrK5SBL68MLkZt9hPrQf5vDLtB5uPNL6AMdR2kFv3GMUNSLguJ2ZSJxXvY6hxDTPs",
  "key8": "3S6E84DSoN8og8EusXoSR6GaRGzt954wrv9nEhZFnMJ9PqdFm3SN3WrKg3URsERuwXxVyVxKqNrdi2sATYRdrYai",
  "key9": "3MGfbMMeq8KDJk23bATRgQJhZqL6cGxpWFEDTwvhkDEJwtoc6FewD5DsZBKswEUTVtrfxVsMagjtkUG6J2epfqwq",
  "key10": "45eodvw9N3qdrhwqXq1arUK3zexqRW1BdphYwjrqPyH5JBgFd6h2WubHmLYTN6B45wahEzo26FxmCCErb3spZTnG",
  "key11": "2sxW6W6Zbzc8driDgFo72YePzgohd7xXuDEPj3YarKAXnuuw4PHJihv689CaXNoYqguHERYjWB2gWZq9ozgUctvX",
  "key12": "57zJTUk18KGcqcfgNQgNQ182GYYG34wU8DLT7qMXgRmHoEb3F3F5DEh5DsiMUAHHSJL8Er8GS1Z1wJYHD6U19okG",
  "key13": "2tYLuGz8UkHq1rMC5xkypvSZdjowy3ndsxCrtmiBnfs7vWaZNsWe71zZWkGV7ZASFJ8NDfsMu2PTKL4LLfmuL4Ao",
  "key14": "3gf8uxWaKThGWivK9WVnpzMaMmHq1c18CpwJo6CvHGhxf3uvVXnTzdDqBktWBSQvnhkm3GSnENeRy91uDMJGmddG",
  "key15": "2ytUjd2R5QBmsafhZrUpfKHc8xi2cb7P7Zpzk5ruUoSSQZXjqzRUoamTnf1CSB6tyWZdpZ5XsMtaTQagDFXNbwuW",
  "key16": "WqjnPxXdF5U1ykUNXEbTyEDZsNfhViR3qRwTGpTbbxkYDQjtNgktmj7ayYMWFFQkbzy6ZzVXdxAa9sKkxLJ2ZQi",
  "key17": "4AYqnVtHnmrvcKvufRAPdFB56s6WYr7fAyF7bEWujCER7XMFWzE6Tdjpjpm535dXgjbdNvcEnrSf5m4YYRS5k6zq",
  "key18": "5afpLrjME58vk6nnRe4CSKWYMieqdkqPWEVQyqaLfGX5KQmT6NpdaWCJR17xkXeJiqwh3SrKwXwAevUAqwPKTYAx",
  "key19": "3HkEYXag95LEYCbCjwt8Be42z7ZgWw8KgPmQAdPJkL2od1YwZQVXqkd2xVZhhgPpYgZgdHjRqqVFHuEM4ki2kR4d",
  "key20": "3xJ7H47QCBrpB3G5bfYweGu9My7tkFDWkif7HKNqhsaM6A3r7Z2dmfMnSFWhuDbqSpZxFsS1YUQFQrZQ9nmkNMER",
  "key21": "3w8nkcCAAHP76C9P5z4wBBRUhitgQuFw3NkPAq4ZCBy5AuGHsszZeaTSRYicMEAi2k3jqKpixdwTrr2uopXcfZua",
  "key22": "MJssyB5snuR2EgXZFyCa9tv8QBxKtfShY9xoSENzfKkx3G22AxACjwG1Y1pFwqYVyeDuNVcKmfy6d8MYsanEu6X",
  "key23": "2S2G5bfTfeVj77meCHwSg5imLA8bHa6KjrfPFnf1qVA76zv6gwzvRuTzjjVrbbNDgnEhL84ZHhENVTtfWeinR5JE",
  "key24": "mw7LNxxsPxssow54CrWfwubpj5Ez8S5B6gSLeXQH6R2fkT3oJddiRYG6DF9DXfGjQS3pzv77k6PTinwGn8mNvjZ",
  "key25": "3ciD2PaNU5dTWWUxf6YHHvtKJMK7K279T1dsUP1kdqQXpAgRrJcpJ63j4WkDb4t9HPpN2nZoo48ZEfw4uWLwpv4k",
  "key26": "5HRBYENXK6DFZzJzCYt1dAYfc6DNFD6t8NeFmZ7xothjpZ7KHFA2MEydV9eC268xQVJQFmhr4BmgHqz7rMmnDERr",
  "key27": "3VTyfctHQku6Rj4NH6BG8jcXsNwx6WzVnAxLB8XgCCyYsBCgBDLscuHnZb1Vxm9wXfQP5DiE3AgikvLZFHLm66Lr",
  "key28": "66c3y9sPWVCfaf8FfFvfwdfquiimq1m26QhkekoWHwZwnrQocnzBSBWexwZ3bDpr7MPHVESuq8iz6n6ycMNvG3PR",
  "key29": "Qe1kGnMtM862ZVDVm8tq4vCuur5iV6vuFJ93NSXCsSUDc8j7TUSEUPy7SMZPD4ZzRZJ46U5CW66nkcS3wDmHSf3",
  "key30": "KuAdQLfDxHSWbzQkaeMs5MbXAq4Kt4qSzHEw8W8yNeWGDuRScTjSUr7ks3VnLDCSzpE12MU7Lr29W5gEjQMSDrC",
  "key31": "ZF2C9Egz6vt9c2TsLiT8BZFbvLgqmG923z32QKPvZLcDtW3wnFgcKgzrGkpeMeLziK4NsTA1k2LifFjBun37SdJ",
  "key32": "2hcGExhxEVmfv8gCmVk87Azs3rKUJDABkAS3J24TYGa3EX36xcaTvfbd5M9ErpUWKcHVyiDRjsVXSwsqHuuq5TAw",
  "key33": "3aYqXeE2ALyNp7xdBZo8M1U5hRrV6FxGoJcHxnAhw1bMAJ8by53kPqU9FVynUDEgu3GwEmhzqcrA2BA3M6AanDVA",
  "key34": "588FkEJZQoWj4GxU1AQJNYGx5VBggxcwW8JSrZC9uLFS9bFQ1gXG4NoBekYH5Ln8FN6Rnpm7KAg51D6wVm8NR6UF",
  "key35": "4geAnRFknfb5VZ16aJjBMyZvYWwTiWNrwZep346bbrvyyH3dRUEEfmKAhRft5hDtijjXsHxQSWvJYixy6JVW2BS",
  "key36": "3rGQotTa6sGzyMphTr6uk63UsS12ZDbgBSztKQMvBvsraHyYdKZFk9r4PMs2WbhMZzwg23HbtQNe9VRMijmWMdZ7",
  "key37": "2yDPodsvNyMfNBvrxtrDjT2xcRDLe5hsw55qS8VSHqKgzYrBczoZMuTZmXAXdfADiQo3re83Ps6UBiE1cH1hVRh8",
  "key38": "5ki3nm32gvEWVLFbxGv3xKvYpYf5hvPFrMFwwshq7oF7wXdkw82Dg1f8qUnZH1GruvXA93tsxUR7mNvtrMRUKAGs",
  "key39": "gdafKrkVEW8kxtrMJ9g6kSGXf7dWLshmx8b1aVfWaELLT8u13mAhAp42CxZmXhWgQgStH3RsyJhk8yUgcMdEiNU",
  "key40": "4rkNrrKHXJ6zxGwawi2KjCCAbtSj1GupA53cKTd6sgTYs4uejiutEEPKUraY8sqaGcLUBgdXeV8A8R7R8KpsR9aX",
  "key41": "3KcZqb1c5JfSXpTSPeK4ptsZGzRFMUkv8x82x7URBGPbM9rt9Zh3H8XEc4dgQs4A5WHvd4EpNEqx6chbBnA1FDJc",
  "key42": "3Lfe8KnDm4XcXBX6JiCvyGyi8CMRCeLkaZVJU5B27Eao2Pegeefekpa3ABhCXRVfsPgZ9GxwZ65GMWqywbGNKpfj"
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
