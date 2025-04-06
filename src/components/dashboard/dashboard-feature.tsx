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
    "5r5oZpoDx6ps8stdik4kCdyWr6xMMvbYm5TN8cnVkBgfuCFEJ4MnMdUpGvZTaAJ4kezembMZairzriTxSKa5Pox7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLvfzgjUy8J8Kn6o8qbkKgoiJJKhEZfXuNCh3JHezHWRXqsmxYbvUt8tEFkw7dRbtv6echWDh8G823sytKaw2gZ",
  "key1": "sjDXV2QEH2kwkw9VcEY7FhLAc7yU8wEmp4maqYvJCSjiURJsL1tkw1nQEiKTRcrLo8yNKuhKN7VCM3XGrzfA1oF",
  "key2": "4xPT9xeo7BVvkww8xz4fraX6aSuGH1qumvrmfVwqgg4SMDrCKvHNqZjaNEb2P9xBADiZwCk1bb56KB6pZr8CMS6W",
  "key3": "FUERWyZnkFDKrb2cotBne298kYHmstu8mAiVWhdzidWW1Gae4uPzHqKzVfRMzNanRzyRSGofSMk3k1JgKSEAyAQ",
  "key4": "uZpfdYdCzfZTsn4zzPmkAcD8CzSUbaNab2tMr3cZG8rrBuPJTAubJU16rUqAhgJ7RJGhF6kUhoEhFszZRYE2H3E",
  "key5": "cKG6WWFLgYr2pxt2thCH2EQ7KW4WHrEgmYNRtsFnGMukxgnVLb31aUc4haCd7T6XD4L7XoLYCAPB5mrta6YeBR1",
  "key6": "ZV74wKEToyRPwfs2Ha9ZL8eiivnzEEFfk4vhJYZzH5cNPkKongPZUdCWMroRfxD4HiNqT8gL9RMMKZrBzcL28fi",
  "key7": "wSvG6mMSWNqNKhmi3Cb9AEY5hN7dzWonE85T6ALQnriDJVpW3nvmkFMreWM6doSnEiRLFd7z6E2C3ECZqqWj5nV",
  "key8": "2LojDEQZWyC37NcZykPmJeMf6sKzCWx5JD4HcKYuZevCP7xhmmf9M1pkNiMegbNJM3maaLNAPkvbTRgDMAofHqpN",
  "key9": "4aFCp3jC9eVkgmFXAWujnae69aDtBn1UyrksMUezU4H7p2PMWMF2mLUsJdHBLXZVLUcaGFHcNNzhYwnT6ByVS5X6",
  "key10": "4rHe6DVc3sWxhnxRmJETTBmmVRbj4Nsz1iAR75TZTiEXN6y3FXyjebgA65zM8EFJCh5Je4CLJjWfimZuFtoPHyrX",
  "key11": "3LAU7ZhGe7e8HqYmAhy5JAhYDkFZo9EBb3yTs7xw2AbVRECpRVBUgB8JUc9yyPNQtgsvSkLogdDF7kL976d2faN4",
  "key12": "4cHQToEfPvmn4hL9tjoNuwNi8Do3mjoQbF45QoYVv5GwjVVzT5weh8M2rAGMowi5gGDzoKPCcP1Rj4bH8VFR1moB",
  "key13": "24z81us63vSKwNQmE3uirvUQzCitxxu5cqEedoYUz1cQKWYM6zcZNEARuYVcor68wD9h5ZrfeUyp2ELwyWFBx8oY",
  "key14": "KA3Q7MKLJefwzjuKX5ZM5KKNsmkwWGp12nTRN6pPq7Xor8x8jVXrZRAw1GJrRBhYBWxjJZ3sDyRj5JpVJk7GqWB",
  "key15": "3Ung7Hop4ocSAkSCP68J6NoNZKaQaCqfdt4GTQWhNThuB7u3DqoFsxB193r7gvzCssqtFFskRLke8BNT6GoQNfoA",
  "key16": "5yLsYGvXBBuU44p5LNxJSamm9TgcfR4zTWkfPUb4aXLYenipEXpRsdV4SjaYrvcFCr3uTN9a1avzQ6tBU9iAEQ7u",
  "key17": "5kNvPntGNMeo6Wo4jEVUXYSaiEiRD9AtHULtfJ75Zf1hspffj7os6B8xRYaNdYdHV7yGKaZp7JJQFe7tQgGVU21p",
  "key18": "4Lgg6kkkLnKWFPyfRd6biLN3Bk2KpBKMcAhkR6T7qShv3oLJSiXcvdUCLhmyjZaGqh4qzSjseuQoHuPUQvuGoVNS",
  "key19": "jXpDv3aqKu1xkHPa7jLBNF2RqXzjSzFpC88EGexbwPiwdAXDXzCxzrnBRWqAZ9H6NnCzZzsMJwKWDBpSxj1pmbP",
  "key20": "i2rDAZW5bdTJvzYGZuyRq4p5ZJDbTLzTTRs9mGtsYwCan7gfJXA7qWbnHwAstcneziMdXGJFwykGo6cdYJZYfyq",
  "key21": "5EaLusY57NZv3vyBYqZyLXHX5DpPkXrv2g4b8bpcBhFDP9fAb9MoyS5s9ErDCzjzqm2NKFLnt9vTC5tjtmM8YHan",
  "key22": "3rEVcAMRkbiANp69HcqadjbrqZDX5xvAFU9Pit65xeUCGdL6mrrsb1tYqpkRon73nRZFxtbsNGjjjZqv8JYLLJEt",
  "key23": "Ni2n71gmoZsHNrYhZP1bhCd6FFHSJz1rW3ASbu2qhSf5DV8KEE8tSZaXQCz3TVXDBFiADF6NWbvSGskfWENY8G4",
  "key24": "gTQe6qR8BxCsT1dv36ifYQ8GYanfSeYmFM2Lm7KUyv2Rn5NSGS3LMmyybVcUzasmuMKQY99Mpf5AjyMeUanj8wq",
  "key25": "4fVf8tp3Hf1zwTUZs3GEf1NpPoLQJwekEfjN3GE9TK6mhJiG2K2x8ANCDLCykgZcJan7cqQp6ruiy5A4Yj18WuA2",
  "key26": "4wDPgWgcvfjDTcfYch3mXrh9Kw4pJT1xcbLACdDYwYb8M9SXhrW7ZSuVXwxd7VmVKhWqnVEKNDyaB5JW2Wcg32iR",
  "key27": "3rTkMGVpGN9AAb71MDWkYrRZgThKv6AB8h1w46BWEL4G23xJDxQLcPBd21EQH73ra9FWhc4fgGSGrZXicYFbDX5b",
  "key28": "4ubupUL4LvUyKDeaSgsLyUpBKti169ao65kMjN3WM2GAbSf3TLqqwCAsvkBaqNQd94bHyfB3ouGqNhrfAkhCSiD",
  "key29": "i6kU68yDNeymQN9PLfw3pNdpKRFYWdinQySs19gWhbXvWfJouyEvqCaYpFghBnVjS5g48x9gpxsJgE5L3YJwrT6",
  "key30": "vE4LpWvQk1DhZ7MRxwbKJbdttqfD6zHDMV7PNCfEiXxUVqNVM9cfkF6iXxaWWVgvaemtpN5MHmfGtNuf5qyaBPG",
  "key31": "5U5UinRfWgCtQskYg69tum5jkUfKgeKaN8YLkWBzDGN1RV9Ynd43M3oDD6c94YCYdX8cCqNowq4jZ1zxJYVE3XuZ",
  "key32": "2Xxn3eV8RG9Zu97aWbP5YQctoDiM5FpDgtpcM2J8VkRfkvMacygbkg7DiDrBUcHYNH5ihbnfDPLvfvY5bQ7QvSbu",
  "key33": "4AMnyDWmCsDjkNgeXgcqanT7rzsbrDv3UmVGyvMY9Mt4ga8BGR18XbwrBPEz8QNiPvpd6xFYLzZUeZAtjLXd7JA4",
  "key34": "3PMDZpGTA3pXAnD1KnGaczwus5Jt2je9NdHU4nXCatYQoRaTfrWJLPTCbGbZkvZu3kTicBwZmM7icgbNbDLYLGyH",
  "key35": "2nKisYwm4eotWuiE7EAUYoJwxat4WDKhj2ebXJowxjydd8Hu6hNiRPgREVFf9EGoDcJ5By7BVxU2jgVkGkR4Xrrv",
  "key36": "2hTQPG2oif71vPwP1uP23UxS9Y1RtJDC4c2UJQxjw59Pxo7iqzcXCCb6pHg3FtqhAjpRpDvR81gmM8qrma2Nfttu"
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
