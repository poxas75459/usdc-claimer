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
    "2AudA8a4Djkmbwr893dc9F6pDAr5CrTW92wmcD18RWi7iXmCPAz4RYtB8bstXb6H6SpjA9nTeoTh7b4SaaPzTnDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eXBifrt1nuJyRYeWkF8Denkh3AF1CUFPE9425Sco13QmNGXY3baRByXaKFjTHpQ6AhC2eVLuCmwuWArbcyijwBH",
  "key1": "2qhKarUdXr8KKtD2VQn7ar4qkCmYAerydFVM66raWtsVkQPRc61KjKZdj1SAhvRpbDr3MMhFU8cdnjXHqVJ3cYMF",
  "key2": "deUQg72Tb7CYEMfuieBXGrLzsAhpwCLECNXzRyg7MpTxgE4npm6JRc28AbtMeJ92xZwJR4558xUm8AYDx4KBGKj",
  "key3": "533DB297vFsRXJG3kwx5mEBYkDcQna9AMxmpQzmqQZQUQgSuHwdj7VR9VhvccnEhMG5pYb5H64AN8w6CDL9V1oNZ",
  "key4": "5bKNW3Us8H6YrRr6TWuUbzm8vyAXELQpcKMQ8AyA65nRrAgNssiQStYvj6hzw23CoZFMVKBQp6KUPoMhrcCgaD2L",
  "key5": "AddUVWZaUCCdhL7VB4j2NVKPHnKMbnQbhq6ab9qudGWemJMj9CVjkKosNsBWajxz91eVN6zjSfedck5XHGArDPD",
  "key6": "5C2x99b4J7Xo6ArnG4jHCG5EYHFL7Z9yj6d5mHD9ec8Gh2up67YStvAuG7Yxk1UhxtuJDWmdVVNgaMTK7pW96dPY",
  "key7": "2W9z3YuobzkVwwkBtmh9BPiumLjPtGEx3FsJhtKxLHfuEAgW6BpzvMmHYZTw26jQzkzdei86FGN29qcc1UovQCHu",
  "key8": "679MDkRFTsxGPjBr9jkczQmxDhD5nf24tG8aeQ2rfeHntUcGQ6ivYt8LypzZcbUwL3aFoycZq8t6HYRbLjLYsh3w",
  "key9": "3gdCo27AsVBWcNtWoPqA5jXQb8YNe5KFqREjo21Q1Z9DUbN4o6cbiWtW2ZRBXBEVbHv4kXCkHTnERNnmqNsL6fnY",
  "key10": "5NnP6kHdhR7ZYrorPxMiwKKtqug3EhrRzrvxxbJ8gtAmoAvVP7tigdPei68LbtzxiM5sSPXEzvEJ8LCLA4uR8R51",
  "key11": "5w3hFrTohw2XJxDN55NLmsyBqr5z1q668bFa4veZHUiHiQmrpFLFrD2YUNS2Mob9hPnGBo56X1fJrC43RMsFsp5S",
  "key12": "45zP1S62C89wD6KztJU4hnug8tTEcbAvd4oEjAWN6tDANFfbMpBRniHPU3X3thDUEfF8WVuyTqMY6CNNXYLvQgVK",
  "key13": "4Z8NGhRWxAWrRiR2NvXpgu2SZce7nJr2oDF5S2aEjxrLoLRt7Cg4rSY26gAmzTfRzn7qRrV1nPVfWX2BnF67gsrj",
  "key14": "qT6aaJBBNxCK2yue1ntkoUXcpJEMBxuagK6VAvPG6GsYeV6Am3tcxGGctnUkRA25fQWkCWAfwKkdJ5d23sRAH24",
  "key15": "3ndNPtXZuP7tbsUZWGNbTeoastRGcXo9wKniAhT5vz3726zPZY6JCPryf27YwZsStPzJsrhDVpX8PHjRCBq1kcJE",
  "key16": "65HeaBxaiwvTkUfaRteYZLzzdStpyHQhCfH5DBqgcpY9YWXZ5Fc6AoJR6xDyoMbbpNBDrSxhHVftXhLLgzohmMdQ",
  "key17": "4rmRh8FgaNCw8FF1CBrswhKE7TEEKVdocqfNvpgufP4ZBxi9TiAWNXbaDWvFrDvFbvXd6KkmdJmGfCjHFXA9QFNx",
  "key18": "67Zd9edF1F5dQ2uV6duJmotkp2xmo874K6cugm6C2NG5xbLMMLHCDWSYEMn7MkjwBUe2n44viYy2MAxFmJfHcAhL",
  "key19": "GBc6E4zvLwKxC7ThhqgsgAH7e8GAZHo7efrVSEin8ktQXuUojPnmg3pxz9f3pj92Vyzebj7T7uNJLuQz3vxAwA3",
  "key20": "2xBhYDS4casjSGXz8z5DS9275ZmK6xQmqLALiX6jqirnZEUDdSzoAxa1xEKu5e3xsop74i2kEwgTpRbgiVrLqdYK",
  "key21": "61Gy8cu2X5WXkk7Gg8tkM5TBUzWFGTbzMUKoCg4BWd8XVsddFH69ZEJd8TvuKjcCKAUV1MNH51nNy6kKcF7JKqMs",
  "key22": "JMmAi2z2Ke44z4PCXy9A1Kcq6B28NhgLdDQTR7jLLZrFRKxf5T5inxpR8r6gZBrGrbz9pgQ7naFG9D1i7QhMhsY",
  "key23": "368326ge8Ff1aABmKbJq7W1wkffqPaSFK6AW87yyZkuFV77WnyrFH7khmgMK9KynTgFBkFkH2k91fHYCm4wiZ3tC",
  "key24": "5hfjxh1FBi13oY7dDmusQ7xe7PqA44XJdHa2RAy2iK9ZJpG5qhnun1MQurhxUKX8Cg6bmzWEChbF6LmEqbndWRbA",
  "key25": "376qxcdAvLGYyi4SvELGmpkbpWvggEDHYiuBULjDtvBHq4dy7qm2hNXt6H5v1pS4pktcZnqGUJzcjRKFhbiiANGY",
  "key26": "3ZvpXqDppzM2EFZUABaHD4dDV7ykoBPiS9s887eUvwLCiALboNgv41USCD1yJnptp9obMXFN79QzrAMBQoWgQ6zV",
  "key27": "4jJg2GUGMjGCCeG2JW2nXLCNwcWx74LrZHkKDtsoJPY3YXFfZU3kCqUcm4NqN8PAHsf19a2KiX5BKpp5oHnCbJxo",
  "key28": "4t5TkdAjofqDxTDKRFwKx4QzvjjJYEiyMgdTFCzKrU5Y84ArXNFHAfLyLDvNRH1vFRBh4iUm5nwabUaFgxsT9Vyo",
  "key29": "3zsAVQnnP3jwXYYNUT1LBnDsVZaq9AHPihJpTzsgyCE5J8Ticv2SxP6ipxD6gfhevMaJG47fSJZ2fgbckKfXFaNz",
  "key30": "3iELmPzjtCoqoQsP5dNjGkNyxiiFYJP1qiGy9uk2uWfKwCgXbeNiYjxAi7WuxbRKcmXeckx9wiwQojhtBBqn1TUL",
  "key31": "4AcjiUzP6uDR3gR21gvfTpMjChcoNe1xt1ejEJMLsjH52pgWXVU2FnDSxjuECCHan8Ut41Bjb8rw3zB7uRbnZjqH",
  "key32": "JMr56wGY9XCP8j2mrWYgV5u3qwCNCD32zoWS3QRPy1xExTBrZqGNRWjc9qNxGyVsypN83HGUAGvkD56zTzvhKJq",
  "key33": "2kPso1Pp5rnq8dW68KnXiKKta4KHKm7QksHhsNLLDuDJCxxmkJJj1tJiKSq4HAbhFNgEb8dvfuDVenz9UXQLqyB4",
  "key34": "62Geni7M4dhQA3RWyKvoDJQsYEVDSrhRniYS3zNA3yYubKWLZWMAzz2j9BRncJiWctKhstUEnP17Ez71TFV1bRw1",
  "key35": "5MPxnQU8Cd4yuTofSmM3mS3k2k1p4vm1oP6PbxSNwQ81AfcxBuj3zkWAi3kNZwA1tEcHVwuRkTAMXJsTRpJbTm4X",
  "key36": "4Xjnavgg8d1sWniavKqBwiqE8i5uEHFN1FDGUcArEEULtooP83GGJeP8bbDBhRf1H897c7xsiCniXg3syxnaQ8KT",
  "key37": "4TJxwcwrgXoCtpY1FAq2SZmvDRwgg1voYXs6d6eWbDMwdyDFB25bAbYGHpjzcjBGs8qMk5wWuVyYzu3rWPGTvVB9",
  "key38": "DJA5hBhWaV5PLaLydH9WQtk8Dx33aJsT6bRcCdfB1uzjTcq9CBCqdAyWsTdL4kwNZeJRigN6sPcsSAY6Y3a2M9h",
  "key39": "5hWf2YerqqDbxPugxkmquZeSgf3yv4Bo3ScEme3xkd4u1hNQ4uCMTPPNkd6xHvSYEykqSmy7crGd4cSho1oAkMHp",
  "key40": "3J8beQxWVjVS9aoeYZNFEbDo29QytRBypx2vT82wRVipb2won5sNks3skGqPUSmgRo3ZARfWoqNmxiGf71RGRocY",
  "key41": "5RfjxQz7HwrhTerF9LVohL25GPF6HeS8Fim8HDq9pSmE9DaZBGQG6jNaKLkCt9Nrus4ebbHA15N1Vmiur36xLcRZ",
  "key42": "3PoQAV3MuuGcopDxdfCYzLqquXzzowFgUWA6QvsuwjvMC5UXvLiSRhfmxTNwSeh1Nq9SFTM9XYx1HAN3tYPAS6zQ"
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
