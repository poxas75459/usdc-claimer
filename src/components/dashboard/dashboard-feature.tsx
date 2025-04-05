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
    "xmBxTziyaPXT4pmYgMUz5QJCHbmabMDkjHzEPUTNx1WB946pmvupYiweifE5JdNjaoaeMWY7Si1PEPtxMmarHy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whZ7LZdJAqmM5aRvzN3HkMmz3u7Fr2jwgFJrG5uzed66ryHpNBH6jZcyCV4sBmwjcg5QTz4EJaVxurme6YW6uEB",
  "key1": "4KYDnA5cCzWCkUoms3gBwPAXkRZoFn2Y8JErMhcE982t1M3PwoYZEzSWpk3AWerMVHmeR1gJTPZkLBVVCdx3rBRF",
  "key2": "qLpurJUd6VNN8FGJ8sxdm8JaYHXJY1UGgmJn6HetoHVHX9d5SsdmmF8NCj5x8xqmBr5arRPhmHNDeNhLsMoCwhV",
  "key3": "3J14JhEK8oKGUT2RQRCRx4vWXFgTdm4MVnb99kdtxkhjDybjAE8boLKwSP3UXX89B9Nj2FiE34VokVnLUgCA2Nj8",
  "key4": "aCWbuXcZ9twgUaRBuyvb7dAG8LZAeRTqrFMXrcP36PuUG9WhfqFYuQ5fSY8oXRSu74k91zP4uQCHt96r18JAv3R",
  "key5": "2sAdsgJfeLGwopJiQPCxG96EJBrzPZvbrp1WN3vDjNNSm4aUmKnDkeX5Pj7dLDbhsuYJo8cPWfH7Wieo5QUCp2dU",
  "key6": "5v6ncRi1zFthqo9kLxLXHmqRhPCtVCj1AKUNBVF8Z9wS8YcxJDYxK7dTDC6Z5b11eeTtWdfADuGwnNeeqLWVGDzA",
  "key7": "3jVoivTymCgdaXtJqWDotjhazZjipEEiAQcp1Xw9RqfVwxn3ByCni3QXF6MHc2esdaAGRoK8fwf5uyxQvRDt9WzZ",
  "key8": "53pGE5gT2xAF8NRbHpeCCLF1Vtf12uPgpgijvFTLqvmydTqv8hoZdnqMdfajaRGUuhHwE51tHc6KtqhxzVMdVkqr",
  "key9": "58qiN27WrSbMNAqqaSq6DVVVfSYRkW3YWF6baUqBu4TnmyPhGY2BxLQLD4LoYHKu3c8xmga9YsZqNwtDn9Gebpzy",
  "key10": "3iASTHMDwe8QksEW8hfwhH1g8N313FPQqmKukNsJivJsZ6rnNWme29Ww8x1XtFmuwUuNYt95BBgJ6hmxddY1f6Yk",
  "key11": "2FzekffWDZp7Cc46TPkyB8eQhALuv6WYntijT28Pb4Z7CcrxfwvnW71M5t22YsRELCTFuysQ4JDwgLgAf4PkjKKC",
  "key12": "2upY6VkgZ3Ff7M4yfX642CCpfvwohWwE5aZRpZhLkEzZkN3vZQg7Sj9vDMpH6WPVkh9ygXkiSFKhZaAJbpNhhuw2",
  "key13": "4wu3CqXow47MZB6cQkgcDhNorMU4TU4HGx4z193aLXBS4keYto2peAqVDibNUsg8CM59Wrv4nWq3TQRDuqYB8AsY",
  "key14": "4P3EdwHN3ZiaQMsjKjiognAiRLhUgnGy9HXQDwGpV9okTZ8d3Eru5xXrz1Lwhf3QJAuYoEVbxqcJfquEYeaRj1cW",
  "key15": "2JQoUi9LCaAuqrdFBJ51TBPBB9HruQHWTwJiUkFqniqBJqSmNhKvCCfrvzgHE1ZJHmq2tJiBeaKLtePQjhGBaGMm",
  "key16": "3D9tR6CdYu8yeBuNHxbmTSceBFdSo44zW3jCwWy9h1pe4pAhLxdxhYopejL6LBVGF5VP1Lz3P4dJiEvbXhTvZ4u5",
  "key17": "WED9VCyFWaC7mqtX8tUzWTQHqTf1AjhjgkpAMkVUMNQaT8ojPkqhu9UKb7NEiAaGA8WBPMTHGmPRszYHuxmZuSW",
  "key18": "45xhp1bEDa3aMnd6CPGQyCdxAoDXSi6sZJNXhw9AKpenUXAXnpG56vgdJaohK9HGVkMwLumEo6JKsrYafiDE9DNC",
  "key19": "3Kj7mTPiPXrJ3Ys2pgUTS4J1bJ7rBFiv7dSyMJnSRMrTf2rbeYsic1SgawXUcEPu8mnB2KUYDDmHNCnQAYjBeawh",
  "key20": "3XvLivZf5DQkCZWgnQAJbsuJGZcyeb8YNFceDUKBHkTnWADHcUxd4jXVFGpH8TUkqXTkEDxu1w4rDmuj4h8963Ps",
  "key21": "35ynb9win78f4HZWA7xtw7EwJCBCeQixPbipUbkVW5MuUheyW5ZdL5wW3RudfJaFoF5BnjhucmRJFbG5Ua4S19pj",
  "key22": "2uhpBqeJDju6zEi6xd2YUi3LvXbbaT5cbd5Yznupx4amNaSaxM5N6RoeEyemEXVM97jHPH9VRhpojKLFskdvnras",
  "key23": "5kpR4MQ17YYBg6vmLh29VbxKbskxWMmoTxXyRWZeuXbZbTaNxq31P468FXqwc8DAs6vVaUPX4TEGZ5sY5XRk67RA",
  "key24": "2SNikPqd3CRHorTZfQdufmF2ZkN1X4zPmGz6xZWfKh7kHmecD78xJVjX9dEVp77WARsrce8W4Gd5Sc8xSxmQw9tQ",
  "key25": "AtphNDRKMhmCVjQ5CapDdQ2WJicKvcpFajiCgf8ce8PgH17UA3gPEZEaX69a7kzM2uY2HXrZhCvR1zh7gNMnD4X",
  "key26": "4xqtNvkp6YqL8KsdQEogSUSVhq85agnivAN51CZ57cTQ8kcM2ueCaT4PZNDoErSN1BND3BncwCHrm1Z242Qeys1i",
  "key27": "Wgm1poUYZfvbHZPBiQSMMxgCW5ZYr3L2LMJENbnfU4qcxCZhnzbR6KmNx1FXEviRATSYiKg5vjvvmV9Kt6uRJHH",
  "key28": "61TvVT6E5uZt2MkA8kS2Ls16tEzXtQe73qarq1yx62hcg2xKfNspJ7ZHSecWg3WAvpAyTSSJcy8X79aZh9QDvcGq",
  "key29": "3YEnpioipH3qLrjuedPDxY3kJRpduJwzyqnDomzQLpR3jxX5mqAYsTvuHJVGtz1rEL8wr4ZzQfx5Nw1bCpmdr1QH",
  "key30": "wSPiWAmcg3cUBaHtttJCCW2XHvf43UbF5qjr6eJMbePqiN1eYNPuL9WePKTFFjHZW1nXyEqzihqwE11UwEAqdvT",
  "key31": "4GHA3vpGZvhYxe276MHqD6UkkpFyQko9cniRCnSqFHjikmuAGBKhMRwxvQGzJkBHNNQfEmwJReEAwPDbApKbLQWb",
  "key32": "49W5xdjvYwA9a44QGWUoy2XPsKM95B4iWkPmXB87Ee4RPooRAgRbq9omj2LwjdYkgQ4i7DK11S27irAMVoZGzeqh",
  "key33": "2QPc4MyZnAdxF1v25wtvwAHArM3hkkxRJpgJnmvLFV6fwd9MGcnqzmsEpozGuXqa3x3GnvyvDt4xhiEKKGBMtzsa",
  "key34": "rchzVqTPTUHSJwVVZg8cgC9puAmU3MAeDhe8fNScbkssLYP9rv24rA94FNRBGTwASfHW3ne4UvpWsqzgRy6ytqS",
  "key35": "3qKfS6aps1B7duZH1w6VtqxkKKeESSy6tM2vB5iPPM7fRmB35szESeNY59WAEtzgKnaiFv1H5tw5Nnt1mix5ruLL",
  "key36": "5eQyi5sjPuRgsLm5W62t4ficu4QRfFVPoqaEEtvcN9V6tm5Y2EqDaGTYcDU93yyU7oscPvSj2fuojKtiuL7rCCE",
  "key37": "21dwn9VQk96TaqP87ua6yhkN23Fphf46dCb63GnSbseLhwhpYCrwxtghDrGWcnFqs5CqFEs44Saos1HrzJLBmHRw",
  "key38": "38tP2n4ZvmnfyMJXqGa5yTieHBgGx9Xt8W6avvBNBj2VvWfQWAQ1UNWMwi2zLR7Bdzn7xfofHukGdPaL23wNsfXU",
  "key39": "3yY1hSN4svwcqcn8i82n1WWWgfgmgzbFJ5zdpvHvnxXp3ZLxqndxLgRSYyh3bv7HRjdRrFWve9XdNU79jMWjGE7H",
  "key40": "4tRth6QjqEdKsyVmRPJaAMajcnvsbjYyqKcfpmCPnaCHdMPJULMT2tusRYFfKS5giscBM4zDUscWpJVESBD7gSdf"
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
