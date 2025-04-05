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
    "nd65jYCHd9kpBz9WcHa4Gc6FEHWkLCQTnzA9K9DTLj6BJbj3hTici8gzvLWUNMPKW2rCGggfRF9FGFjvyYpx5rX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3vHv2rwZR5vegHv3vX1GAsXfeB1ZYsvbNHKtfKioAW7wD8ufUPRZo9bNgn4YcJR53TcwtyB2unyT5bKWjjgA3i",
  "key1": "5FCjjetUd4LVbx6wL8Z8WX9a4uaRRhyNDvzubbrh6bctU1qJu1LB6Xqh8TkWWvRefZhdKvmrmtHcYF6Ct6LMwazj",
  "key2": "5vBewsTz1jmYHb4FTMGCsfBwnj7bkYFUcDmKv7pF2GCvZTZBFRsHqLHdaHUb6J8QNAxc9pVvWQvtJxV7Xg4GrkX6",
  "key3": "3nEQJNFkrwWAAwFXxyAJhH8oqcnpBsX5KvhAqZsTXQeo6K97JhpYxE37STGMkLpVZVuo5HtGzuvgfzWjmW3HigCi",
  "key4": "djcu1UJ7cUdAiN5QKXRoWmZmZHcpp2DkrHTixswps1n5HTWoghYz6eoBWFaALg71abQuUy16HmWWmk5bjg4zZSS",
  "key5": "Z1RY6CHRJ6AETUAehhtEGAksKXCJdxastHgT2XYExbkF1qEEQn8ep1fQtPyeu9jTb6UM78roVJvjypKVrvS2pen",
  "key6": "5P3ULGzURihV78qNWL2Gv5Nfd5j72omxqaSxVCQxXzqAM5kjSbmE8BajGHPaMcm3Bsx24dK7ZohWD9fuxumBXHsn",
  "key7": "4iBZzkVVsHCC5nSaD2wpcyUr2BoAe7V3cpUN2h9zueAB4fHQkEsBUQb1xcmpNH7atjmxc9LdE1wE5UFogeZLFfTv",
  "key8": "3mNuu7G66NMhgRbn8Z5ZAoMxjaCp11e1n4yz3qCFV4kZFGfAccq3Mdzz9jy2rZt1xdpADDJrs9o4uskyC22tgJo1",
  "key9": "3t4z6G39vNKEghXD7DRtDdyEFMA8SM6F3phmLfnmJi8HXBd7twsMSE9K8FasyhNwBTBPdPbQNSryFF2ja5SuegsQ",
  "key10": "5QfCsL1hsvFuPeLbiEhtdgKKsQ7oWSJE8kVuZ5kUSeoq9fwPBZnQ4YxeRt4pWZ8mogUA81MAQaJb3Cx5VsZMfSf",
  "key11": "4DegwGE4NYM5Qg49f7zB3LKiKbuCFSHfP1GwyaMEwNFCWxuSvUq2g4XWHn3gtP6QeiY6jTztDUgU9i7EoNoxfe9Z",
  "key12": "477xu9Z4XKPjwmZUPxzEDKgCMyBPDkA9nyCMNCLHt8hyrUJAU1tzrm4zu4cAbtccLgQ4fHjFxydpZ1A1QvBDaCvi",
  "key13": "54eQ7Cc8jMmCDmozKTvhbecve123UBrmpUwSRhEuXeMb3m7WMsLPejKckszg3j681xtG1AEihMJMxm1GqkHurPRJ",
  "key14": "3znJuMoqQbDFq7R2LnM76A6oinvzVXQ54xpRg5xAMG3U1GoMpX1HbTZRg72AfEDqdB9MGoQHH3BELxVn73rWPNBo",
  "key15": "EZF6mFQNovZEao56t7UMtJV7UyAxrxTVFGwDGTrAdxaL3fnsbZBhHbxtmdizmcnuydjUFUhp9X5EXP37tNfjS3J",
  "key16": "4JGYMstHzv6RRB7aC6yQgGKnVWn4n1DnMKdYMwFa4UbteDTeR3FUDmACGPC1U5z1TuUWhsNQ9Zognk5oadoc3hHn",
  "key17": "5x3TMbWpFhETUeD3SbiPgec9RQHJbuBpeqLJfkqdN71zsjepXKR42BPRe58JYE4Qkz4PYhUgQVq3Hz2HpRHwEBWJ",
  "key18": "88TuYHgmgMmYhpNpKHoyBUGw6FZd72vZuyS8HHLwpimjRoqsoXoRwE3eigTZEZfpSBbsyk5uTr6d4N5Eba1rY4F",
  "key19": "oB2B17tpzysS4SDCBdNFeEHc88uXnjt97YaMPrcs9A48Krr5m9QC6yuVn5ag6u4B9jEio3e5AH2tNnzPjRaQRns",
  "key20": "2rDCJz7CbxvGvGgZUYKsbuH4c959YU3TmLH3YCsdvZnNjYatrmDAZBujyCVpLQbuGM3aSCU1PmGKN1YR6urtRbiL",
  "key21": "4dd5j38EcaAjLgXbRRComjor1XXXLNjNs4tNCZvYh7EMbTseK6gQs84Lab7DfKY8jUeyqbJddGpqa1CR5kzKuqXH",
  "key22": "2E88yBXd1uQsgPJQkC3wJPaWhzg2toEiHai55Mj445RYZ5pen66VUVcmV3oWskUmxmJ9q2UL3PRB6nRKU75TVVzh",
  "key23": "5hVuQws36GuyfW8KmyqyykDX6fF8ieZyqwX4rLv7ZFjPESMrvN9PYdv9wLnbpwCzm6A7k5aCvhL1sK9ctzSjdhiM",
  "key24": "5ibEpMgufp3vG69nchZaw2Q2HbzjpBzLZNrWdEELMRzEwaGpYoRnkJsFmrvdessQEGchos2YNJqnorrfo2vtWsx8",
  "key25": "3EVicETQ6J6MCf5K7fqrVkfERvtMGtuq9eoDveYFgqUJLZW9HryeW9aaHkprafAK43S9fzSSSVsWLHjHynGeyQiV",
  "key26": "4dEsaXo5oYXfhMBkDLyENfzZVL76HaueoZoKF2kQJ2ZFpm8TMFmhVTuwuvy4cfjrQzS9hAQXt2tQ3jC97Hr5T5kd",
  "key27": "2qy5FTDMo9j2A5q7r82EK15hZ61wKiTa8WR6pvzYXajNr9xBqVtbP4aBsCqNgWpexUn4iZknoCokPigXz2jLeiXt",
  "key28": "5MQLCAxQxVAFg8oQV2rpNrNY7vMDkCYoEk9i8zPAS8oeApJTP9TN7x7nGE3cDUr1tYw5rSe8eVdirvhuFez9MqwX",
  "key29": "2GzGEWjb3TfQudBJiyefroKu3rMM3fxX551SG3q85gPJUEWckqSLM5NEJHDcMgEn15q13QdZ1UiyQbmmV9M93xBn",
  "key30": "4BkTBeG4yKVqoR31iZgJQcuur3UK8yUwrLXTBQJ3rdvfnrk6ZE5zbccLrBrcKR1NMSjE1BPTj49BoLRASuQqmpHJ",
  "key31": "2FUmg8oAnR7NXxisz9ckQHgUY4oGzcKZmN7wE66iMNu66D1BdgXprxUKk5WxaxjdhRhmbsGRTC6J9HdGNNzZXzTB",
  "key32": "3zC9DfoYvzZDL8fy3beGBq4wpnAKG58m6C6UKKUpDPQ3pe5ptjP4PYwrWyKZEY4oh2upuaxhoJxidccGLj9htBfj",
  "key33": "64LfN5kEDtUbeeCwywBTBfbebUBR8MyphheCr1MNGZffL9MRHp5H9VhpQae3en29GXG4MLFeJkYRbFuRjUUpcAfA",
  "key34": "LucC9UJaXXhdLVd8CpvmaCavTHYm6iK9psvURE1iQvdbJhwBbodcX84UCaxesqzaa3Eac5CkdBifCsLneEPaBAz",
  "key35": "xzRQt4NvUXfTVPVkjhhUPNat7wKBdkz83NBA5EjZxDRd6xhcyXE9TP8W8G6QtKkZqw1WAZnjKVo1jZK7zDouqGN",
  "key36": "4qMKVc27hudgWUdNTdQHAwHSGUaZzu1iALzzi4nVBSKQxqmB7KgKH5wxSK6iZK9c3kdndrhxbACZzTu16xbBierq",
  "key37": "5eeZMFaTEcPfR6HR7QYNKbbrwCKEzkBJHb29zzqfKdi5YVxaWUZZsaQhQGU4aUV9hGbdqUJQeRCY3Wpao6SA3KuH",
  "key38": "5qM7gPvpqwzQWNB6So3KQPR2rJ8RGqWHYxuCz6fe3TWUamLqGQG3HFk7XaiyFQHBukVe9oWjhy1MeWihNmHUU2NP",
  "key39": "5p13Y3V1Qj7V65gFahePWSTNPAQckenkRbJJ9Sqk89zyMsn3CEcKxztUsFyxdyViUXhuRtHQNYsfbR5yq6ZcF5GV",
  "key40": "2EzwgEHFXPJNUZDwa1tgDja31bw35rj5PDsgHqkWQSeU1sGPC6ySQqzH4uH3NZQTpFE3DCfUGx9wBr9b4aXBsawT",
  "key41": "3qf6h6Vgv7cNKQV8qanU2RickH9dVTSzgSmMmTjZ684wnEkrYTa77A8t5iyFG1Vq63dJActX4QFt9oH22y724xVg",
  "key42": "1XokPfcR27iCqRmDE4nvQxtivqxCrb8hxbmSu4LgfTwuvPtTBanqTG9kGhUVmtzVr5C9Spd3Cp9jq1EkZjfPDiu",
  "key43": "5EPM2qWQzWpeRgZmB7oPQZmCpZ3GfUCL9ULxSB9hZ1HEy7XNc3XqhrFaHQSQBPZ5w6CpiKFqPLjWfmp4Q44Xf4vM",
  "key44": "2c3LAs1hdKhrwRb8Mqm1t2tPAoNoYuxhPnZ1NZkv9g5KrD1ZXtVUvLzQjr3Zj3LNB6yp7dYJDwQtDPn9gGp7gWFE",
  "key45": "3Uzpj1LFLww5cW1fw4ro1iatWBWebsnF2J43mWGwaViHff1TrXK6AJqJLfBoHiDoM1eM7HBCr2YmVjZ7z52etvfp",
  "key46": "3K78coinJioSJoWYX5EHong7bru7UVFSqjCxPsbPrcisqykTLgN3CQPXCmVtDxfJWVCRk5JUZzwuhWCuLanZyxbK",
  "key47": "4BgU4e25EsPJmzUjcam42MmuenzRBLAn3NGUMbArbkEwbNbFuXnBERUnRCCwHZJouohwAhEs3RrAHHrHfRbgp5mB"
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
