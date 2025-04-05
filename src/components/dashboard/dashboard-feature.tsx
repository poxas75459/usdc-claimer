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
    "26v76WiHLtBPYQFJ9TbdyeaannxEXr8CJa2p4V2N4i9FE6fnJsDdCSk1A5LpumcyiHLTNctZEDXQ5Uu7qCkznQCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b4Lx34xWKrnytmUpvDH7noN6eUznQkTS3hjpVZdBfztLgFbHn12ykyYXYTykGDYvP7ePRsSGMNK4mDDEzPnfHam",
  "key1": "2aodU3pRSzHatZq2Y4kfRZzeNXUi4p4rcfFeHG13qjgbZdHXwvjWXvLuQJb6vmtVmPK8tHE3zHj6kVa74AUi6nt9",
  "key2": "5rhdMbDgFB3x31a9JUGY2vqKZ6kCcCs2gwZUeHFZYUyEWzypKECZvF2wfcfBPVEdySBRqRyG55Cd3DLTqjB3yoM8",
  "key3": "5hA4NuHVaJgAUnJzdvzkZy48Y4k3AiyvLrFoA28qs7uerciicBZRbZWB25FL2utP3LvaVqbQQvsR7Tq3Eseq71wZ",
  "key4": "378H7BpUH94jA1PWaYqcmba7sb6Q59HazpxEf3vatipdqTbhpcvYiXPvCRXyZCBQt2u2FwnGJ6DYmUkgr3Syg9ej",
  "key5": "42JjGjJGcV56esniMKXednazu5MDaMjG2QrmB9SHKXa6Gpc7sS7SMQnhwzFqSdh5jTukW8utDeWncn23FcFUim22",
  "key6": "bL3eRsMR8YZP1G3TzYZtj86faXKdEQMiPygxkKfbV1KiDE55W8wtu8zL8gEfjV4bWFWEfvCPpLAu7GSoihNXHsw",
  "key7": "5Zrox8V81tcFeT7vogC8rLkSZoE8uZJCr4xZUsYUBbQDH1zB1RF6etquHKx5n8RZzCSDydc8QSnwVRrss279Mj6d",
  "key8": "4ijjJniYWXtkdphQeGn7ppuQ6SrQ8fK6Frq2hRzzsjMLpja4roc7f9zzZEuRQ3F7YjDKNbNwu9oJ7dFnrjAy9cm",
  "key9": "2RFa9gc1X7bygBfy2hrfTs2m6UtFo9xU92R51LrvsiCs7ThXY1bFK2A18VeUH1gnJiahe1sE9ufzhhhPQnRSrwYg",
  "key10": "3gBxrg9BkUxDFvx52K2FtzanMzy9dBctrwCWvahkjyRe1LXeCsDnAKzyZFrNMrfZmAq1V9pxJKjKh6L8zBTEtAY6",
  "key11": "4MaWQFy1cFj6PEDSYagF67FtjehD7kyGPT7gikxhPTqUdyfvc2rxy5VSGs5Vh5YiB7EAozoBjEKWL9Lc4fHGZzxR",
  "key12": "CDBoJXw9ARTX1s4iF7Aa49EoEzZBC8Ftkcn1MMTB1d1xERiEPWNL4K4cLuCmtaogjsfQ6d45UahQzXHziX3RkSe",
  "key13": "4hpS9kpVoqgwtioRqUxBgkgFMM5r1dyPTi1sr7kHnbCmfadWoCpxU5Sq1ZAho8WTDNNSEnkANBkTqBGa5pewNbaQ",
  "key14": "4DDnBSjbxDKuFa5MCURT6NoR2VcGaCAn3PmGPP5KAudhuM8yLgrky9fDJH9SbbtCCqv38Qn4r7n7uUbwBbjGNprY",
  "key15": "efBhutp7f863SjS4gGifbYq7qs5L7vEZtMzAhwtYRqZPfKgesU7oxadAvAJHzgppc123VETYvrWjMWFBsYAf6BL",
  "key16": "3NvL6i4pTc13VSC9uJLVRyvwTrvcewxdp25Bpx3ev2annu1taGHSdq91Fo8QLdXEvo3HGjmuaKe6vpJxf5pdbZ6H",
  "key17": "2hL9hnyTVW8G2D1qNg8Y7WJkY3JZSYrtszH6nsbrNfm3hETKTUHewDcabTdQEUMBmKrgsefHhz8DbVSRGXpJvqRx",
  "key18": "5CZufSdhaW5Cdcfue2mdH3bA4TEBEQ9xHtWUNjDJkiE3PwgKErF3fX8GQX9yCGkNuxwxd8tMvtRqGv76HjMurfF9",
  "key19": "4ciMDfu8eMvYUNfoBhr4EFvkY9ZKjGE8mb8a9yHn62aT2VysPE7jSnccXHrqq7Yrh71xsrMqXUSffNnh9pkJznZC",
  "key20": "3di1fkkeBrxrYQCYPjXjHgTpvms3fE2azJ6bFPbvL9VBE2NFLHcSxYE7McmfbmP4LbPrQ9mniKRXf3SSd1cXds9G",
  "key21": "4Csi5i4i1ZALYqT2MjZx5tFYRdnvYPt4p99jobErvhh2kJ2e1nkVJQRWswDWmFVq8mhVWZ2vZLBG4e2HSDfemTXX",
  "key22": "2KsVf3P44WpdwNvxpHpgdgSuJiDENtKgkxcYj3b1YRXpvD7n2jEdG8qjbgv2JMXVC8hu7pVTJ974UMV6NnVCrZnK",
  "key23": "4rrK1LgGjEHvgtSXuyWGpErC4C1jm9oN9VCWQZGarAGP2pQHxaymPBb1SAcCLeRY9H9ScGbcvHcRuB2LMyzDkoSt",
  "key24": "67ohrtGiwGwseHnCCqdSssFZm6LD5DQQji9QqtH1dgfJwPXr1tFVmn8pVhYxRxz4ryGTVxrqFDZriyYtwiLHFHKx",
  "key25": "2t3RZVtsLyZ7iPBSnqwaULJZ3DyXXiygpWL3R3tyiCbvxLbnYYPuWy5Ez2NgB1n8JWJ2FqXPXECzbn54H6tmv2re",
  "key26": "3ADsAo1j59DoCSr2tsmvS2csELJUaawxi8h8P1wHhLcY7nDuCMYzvtvN2BJvYoCSUjaz2jWkKzPYYRn9bWLmqEcg",
  "key27": "5iCwVViqBBUsYqxQGNGdjtA9YXpfKJ11aajm5oxL6bNQynkdN8pFBqtKmXK7GGpaNGESBgnqHC2VXs9neW5xazqa",
  "key28": "3zW6yPu57GkaUY4X3zMHuXqPGQ8qbCamc7NFF1AAMQgWeRaj7o36BnZzrDYaeA48d3LVgidaWSYRPiBiY2U453eb",
  "key29": "3MBJ6ShWVNCK4vKixiCCt1WAsbY5wK1TnxrXaEXcjWtSGA24JWuyhY7q7BERh1kgyNU9W29k1pY8gtnFgEEeFtnv",
  "key30": "G61aej5SYjavbRXiBZqqbUUTigz8cXAL4pPyWiDEsPN7PPsB8uRCkgkfuTGdy1BSGHGgGGFkwcD3bpktsY5M1FS",
  "key31": "9NjVZsRY74W44T7SvGo9kEeqj8PrR4MPM7DJEQyMn5ferSQkruzSdimhViWcUCqj9D8e9fwJofiMkTA13thtAVE",
  "key32": "3ukS4CtXrjnDM39r44MfvAdRKKss5faG1ERFda2AMSHyJus3NpAPe6xVcwHyxfFgsrDvPeWAsTZ7mfAXtuoRw2K3",
  "key33": "2XnoSjcwonTmvVxiLCemmKi7Ghme7y82iouDzpsQ3c1rek5RCr5VvkCiaZAFacvij2k3SyuApGorjAjMFUQmdctH",
  "key34": "35WjhUnUUu4tx4YNLXPPVE9kNdKg7LQzpVYfgSie71qmp7y4Jd1mS76joQEx7WZCY3ZWwgKjGHDBjcY14vGpxjwy"
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
