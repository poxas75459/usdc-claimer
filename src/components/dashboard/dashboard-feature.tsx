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
    "3QXR9uerrkBWfEuBVdCqdta8CAToAxS8EKFys3RJ6vqxS5UJr3Esr5p1W6Fr9zW3xTNQqxJuyqvgxebEzFz3Cmvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25mMjnB28cVeWarMbKSPg3acKgWaNkoQyn9b48HQNrFSe8EajT1c8YUnnfaB5G4kM85xj9twfXpEZH3xrnH3sVhR",
  "key1": "HyP75Y3xcVAB88GXktnqX4uhrbCLRWy59ZPRd1QbLpfZqHycAaizh9NgkvmP67vXxRHwkXwkrXcwV4NJchnUfmG",
  "key2": "NuapiNw1W2bFi7dFHEE63uYvPHPje3Uu2DgfdywqN7zKU6pSqrWT5T2tPfXkxMaZ3qjbRUALk11gfx4c4EZ2rUs",
  "key3": "671EU6aZqTSowKAwmQAvHTtR8xMRNJiKCX5MdGZ2emg3W18TKY2ai2s5HtboiYxAoVThBYLhcvWpvkSyzynoN4Ts",
  "key4": "31WVbHaNwzUGGHQ79DniPoDxhMvvCJrjsAHqFHj77U93C6Jw2LD7wsgftjfiqwN6oumXfXNXKoNyENhXc1Pj8VW6",
  "key5": "61eCpv8ojyf25yXk3xGSUe7MdsCmH3g7bjdeivYStbFBYBG5zQuFSrLxuDzPvWTo85pnV4LyMbbsFE4qiwaBUBYU",
  "key6": "4PVKDz3dm28qK5rywcZwjxCyPjBLYXrKTbF67LDKSF7jac7BUyKesiswmG4zbL1WdjpQT7DamPnwpjUQB7fxAQXx",
  "key7": "5kwZvoohYLH28NUhrn9Ey2FGWrSLj2rC4mtcs4NuUqhrP8gbR1qNdZqAFeJ1ndqVCaowvypQzTXtiwCjNx2D8sgp",
  "key8": "4BbRwP2CKK5pVyLDgH2YgVD38cxa5qVgGhHzTJyjwpFcqM1P713AsZ7C1NU6aqsQTTC8tsB8NtBqWAGS9copupLZ",
  "key9": "4ivEvDNa11VMBekC2KPkh3sn9caD9nyeYhEiRNDmuByi8UGFRs6LrtMyqeNLiuTT9DYvepA5tATFXraUi8RF5F1A",
  "key10": "2epLnRX7UdSm3ohVV6JrUAiyQVXAsYewUC9ApTaDfZ32wQJrFNbq2KwhJ8wx1MNtJpzNXao2wUYLQ6U4fjKegqwK",
  "key11": "63Mb7dqezEQLadfsaNou7JDdzVa4AZz5Rvg1AAaTgVbhLPu1oAWJZkGzEDeisndZ9Riuvt1M4qpAKddNCuKh1acb",
  "key12": "zCA8C2bt64QUZEC2Zw4Q64WDkZLT7Q6VX8t8QJu9Buwrq4QZBgSh4Qznb6DtJKbKiYHe1DtPEK1kaLPutnhiih4",
  "key13": "5yZzDVYbKkF1zi2mhdZX2rm3m2xwyeHkvfQ5dKSYQDBNj53Q81EVGHmHb6irTUbCoWTeexEXVYS3rnQJKvkvbtbo",
  "key14": "58X2a7bLoVSKcRNe1qWzQzRWzLrDuZTyKFAzenRUCmsomUcGUWXJ7Jna2GDwfJTtfzyQ4uKpE45ZX21hi1FnNBym",
  "key15": "4iWTjVBrbN4xadWYWi7SAaxFtDCachdqTLbLREBzQTfehhMRQoZqhjvXpsmk31jtARgbsPqvN24pkG8Zp65DdJfe",
  "key16": "3Y2o6Qm2Zd6NHQ9xVM8319C4YRGNo7yqU4UkaLGMuTvsyLR9H92p5tLTtFiz3MTgEuZuwXbALt9AqmHgXsx5QXog",
  "key17": "5jkAAR5Szu5sgm69QEz7o7Ao8Nx1gbtHzLUJDhp2dJjDZ79uTauzUc8zbShePeccTssrkHmpNQb2c5DeDhVekuAF",
  "key18": "66dEBWmHRmL6kZ82zPzYg2gn7jGcsSTdGdjNCSx9Gg5ewVfm92r71ZHHRfirHSKHy75JVvMLooHg4QjZ4wUyhWzV",
  "key19": "67VYzyXcNSDtjJrjkUFiArXFdLTGqCgX7gk7wQU71NzTdmTZHTUYYWFH9J3ETMW1sb6hj23rSBLWH5R1RdAbrnMf",
  "key20": "zK7Z9tNBimLbbKYyb3BL8EJrzLZxDqKAQgSgyMt8wYZCyVGWFzTS8V47G72dR9EJJgAy6z49q3oescoynwobYfd",
  "key21": "2nQGXnrTyojJmbwsBU7GCJzZLUuEE4eGizXNMgndYnH8hhJ4koR11BE6VD4Sm1aD9dqtHh6VumjVVADq8xesgN4X",
  "key22": "3uT8ByE3VHKRQuqqCf1X8aCSKLqb7hd8GjAsQxh3j3aGgdbBjQiKCKPHtkB6qmJG4VCW9M3KTv5jVW44HiXfAVnt",
  "key23": "3BB1aiBCtZgfsTsC1zXhw2LZULWMwzv3dJcJZXFqaaeBMU3xsQ6wmu2TTpzRZ4QPNyP5aUgUGqrRh1LH8W2kwmH8",
  "key24": "2ZtGS99SwmyPDpTm8jv7cXGhEDiHShaVUe7xUEYF5fdfHzSUE3byRZTUmd5NyCukaA5m3Eg7DEQC1xYtAKu8urRo",
  "key25": "4zM9fjFyPcoPbawJ86FDAyRPpuwvL9BWW1vHwQKRTeCVbdFtWHHx9nNcVcBWUMdikkGhButDhKpHfKKSxmvq98Ry",
  "key26": "4CeFAf4nnJvzET31FXKvNmeVbx7Sh84VsyqCpkRnSA4KrZuomHyBZrXRvNZZPGyrKxwEfHQ4kbdrTnPY1FvuCgbf",
  "key27": "2JDK4GYDwh2vT26Xp1QH253gjwFo4i8a7dYnYbwi1X2ZVup9eH6kfzAp3yAQ9dbeZJsxSrPx9yAEbB93iNXeqyym",
  "key28": "38THyS5Qxc4MiYsiNcYaon5LJKhp1Zc5vduzv8qgfxMLAPVCYBFuFEd8ctFDcJE7GmSxbZyMNGkTNAxSwMZbZShw",
  "key29": "8fnq9oR7Cr1ofaZTNUmusFSeUg2naj9e1eLomVgoDZscvbb4hMCFhzjEtxUhsBvR8jhANY45kehN88zzCSX7f8K",
  "key30": "3mBYRYhdHPvJA9bcnETT8ZuVUUsL3E54Ah6Wb2KmfQJiHyTureoRbCk1HEK2nmnnAjKQNaMPexeUZ7yVT1qdhbDJ",
  "key31": "5q4aiqBNwpAv1DckBtqjEGvKRGGVG8Y5ncPT5m7GLm7EniUr1htimKrMs9VLBdScoYoPqFXhLAEAfubjyNH1Zuw2",
  "key32": "4FkR4fBtuANwToKYXaDeYmKC32zhawCizVfADKP3oxjwyMZhfUt1skDdKFCQLD2Jch5ZnHB12gxMwUGc7DUgrmKq",
  "key33": "4EAne6RcbYnT6iovEawJr2DcCQ9NEMHpvNgBBX1yGuhS17haMc9pJ1tbSmKzTZM9pXabxDn1PSVWqbiLxSUfHsih",
  "key34": "4FrpZS1CACuw49keX3tFXBZ5b1PWTAEtgku7LPrscmz5LgVegoRrWkxbf3heNypuyMnBkEubuYAiqRtRSKyC2wt5",
  "key35": "2W8KGDLzov3w5HEYi45pvpaF4DAdm87hEBov9JcW2W5cW4NWQax9hMYo7o8qYStaV7hAUQ6xzRVSzM7M8BHJXt1u",
  "key36": "4veJkkRd3y6wUdWzimcsDnA6ca7GyH3ZAeWjxF9YywKsDYg7sV7greba8TBm3U92wLpmjaPL71f1SLdgwY93KQRY",
  "key37": "9rE4EizmNquAiVYoWgrdYXGkiaX9n3aakyTnX7zYqfmKwud8GYAf7qfLF9g7gb5Ect5zRu8wBHw4n7h7tV2ScUv",
  "key38": "MJioFYM51DsehkA4qxYNBvMh9tpuwz8HRd4YsSFE9iJJXfmUd19NbkGqQStLRr58bxw5diKoheCnnsPf4oLBJxG",
  "key39": "4JrKRu9iF1EtEbSA79AgSWcF6oCpmkJL7GtXDtpPFbAPrYvbfk1UfFM4bqrfJ7Kf6tzaZ11uFcm3i71pYjyZC7JU",
  "key40": "vYjTpEHP6yegiAKtt4WtZtaqtyv6NQG6Gn8YHbn3AjDNxZaitc8c2Dy5i3gVH6oMavm2c9DZbf3v3Pf1RmceG55",
  "key41": "33BSunzyJZ1ehSWwxP6dtUJqUcUiUDTJRbz3VdfDTDz6GHevbXJfa4LnMjzNuuc1edhANG7bezMpQDrJuwr99ZjB",
  "key42": "3jHKv4fLW3QbeHoM5xTbsHNTcqzFAkcRHVq8LXbE89riib59RMCdiXC5zvJAz4LPUKCeFMADbEot8Ud6uShiGW5r",
  "key43": "irqeLhuBxQ9CsUqNgEdfRamfgt7JWpHkB2aV2QExMF9BnovewtoF2dwee5y7FtYubSZWL5JLF2tyA29Pzn22fbU"
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
