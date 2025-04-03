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
    "5JjxBFCuGG5CBVUXBktA9kPkbBRgMPJb17RYSrh27NfNCVGGyr7w4SxwWVyxk61mZjTovbvmKqrBsoWm7zoGTRBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47W2okEMERfJBsdNwPnSiJszWZEjmUzZjBQHaBwNVaPNq68mdNjaLywDuEdrGj32RUUCPxpYjeLwXszFGBPvEM7L",
  "key1": "3Yk6thHEmBVh4iNcbzVoZwhs26TjHpbLNfZoFMjaVsNAjkABSCHXwu5V3msUfeyAd7GeT2EVUABDpZUhFtS9y8Z3",
  "key2": "4JcRyYBit2sF6Sd7PUhv5scjsZUyk91v1kZSUKkrUzQkvaupHNTnLondpVzSphkXcwkyakk7v3QEh5GCzTru4JYn",
  "key3": "5jMT1ANbfnJy9KvzP5A7vuhQmtYxjk2LJRH5Eeu7wV11Ue7VoRJkMAwNAJtXzFb7WGJtvUsEyzaJ9nDcdZpEbSfe",
  "key4": "3tDtzV9qUpAze45AoG2t4MSBoJYcwhAun31LXfVuVLx14VagPCN2m3ieGk6sM2DTEDKzJbaMRFiqKBTQbHuUc6W2",
  "key5": "3yUCp4iwn4tKvZxRNuWHQGEu1g28eh9htXoVxYNmyoAu75hmeBrQZZbgwVexQSBsmmciVG2Kxh9xKmNSHwv4Qetw",
  "key6": "3tdVPmhVLpN8nby2whtmdZsY7tap94JUQmM6kfRajmg9YputBHvT6PUfYCkQE4bH25McHuD5VevMWqGiwjfvHUyX",
  "key7": "2K3TXjMqnvpQAJyUkcsoJny7gYjGYCbgAvhW6h6TLGoRo4fiMbgS411SgEK6ks9UzYE7BRfsMTefoaL9SnJyYFHP",
  "key8": "3b92FRyZaGXZFA7jfydvYGs7zBo9ULfXH1gB1cpDNXgPLcYf7d7g7biLSBgLrMLiwghAcXWFUWwxZ5TCsHoQqZp8",
  "key9": "5FDnTksE1BHjc9sz458keEpmg6oYpBpD8JHDj5XfKCK87kFmNn1MSxhHeykpceeccjRS3Do2HBMuDoH4JGSJvG6G",
  "key10": "3nKcqGtcbwxNWMM3XESrczFd35rAenTWfoDRxKdKQkJiJVnGL14jwyUcRqwTR4PYjznd7ACKNEvAUE25RafEmWu9",
  "key11": "2xX89CVCVAN5QnRVZwFuXxmWx83NqnCcN22emBcqPLABLpEVG8paf4WPadJP8ua3R76XLfR2geTG931xWB5nVjRE",
  "key12": "4WVN5Z1EoCCekjbpqL5F9JaePuHQpv9Yxgs4gNLJq9Va6kxNBwhmXUfPGr2im7RSy1cd1tjAjERLnP5L5E73wz7N",
  "key13": "4EkioT7Y6JHvX8fzmytJfzrvVSLXj26vts9LhVsyeU14SnX72ZDcbzjP51qRPy5YZK7sTbnAA6Rrrtd2MLP1qjqy",
  "key14": "5UQBVQiDMkNeBpRzyWyZqYdpLrPt4AHeaMeLddYx7zSgc9tYPEnQBCsgsmPuPD9ygX1W2VrVbBEoEtvmbv4C5LDW",
  "key15": "492SRuk6S1C1WvDcxMo7N9LMjAPNsAYL7fotjBsboJqMJ8JpmpWKaJLRbDwuufm9Jf1HjmviFX8jSn4tf9n7PkNS",
  "key16": "53ZfPx3a4rZNyRMDsDi5jP8911S56WLAh4D3TCQNjbKFEnLUfPmk117zwVcXoFeeyYGEJnQvFZnwPxeL4kGFDHFt",
  "key17": "umKvRy7ozEnXp72tDVuWrKB4RinmcD6h8kc1KGsG4Y6wbMmbfjXu1aDM9tgEeDGV6TLRfUUNTvdz1z8sop7yNmg",
  "key18": "276rn7V3mMYgF7ZNZzSK3GGUMB5HuZJEp7zyad2ySgnbBndLgAGsdPALBAbQVuc55cDgkGVP2g1QKJ4aEsB78U2g",
  "key19": "411zgRSuyCF3ZwQ8iEcTGYZCk59XHmephitRUE8ZZp78t3wHUrYVFQj3uuSL6ftYgtEf6PzvHAERNhqUZnS926zo",
  "key20": "34hBWUDcTHidHDDJUhic4Zy6zkxmTqQVr1GXQZnKSpFQoBCWGKo8FRrJcXGdRaouQGD4CQHtG4N1JVPr48pejZmJ",
  "key21": "46R7qq2uF1c41RJMEgcUfArZmdLGH1M6dpSJGoPXz3Qb8XNqx6dS45WkYBdDJ54zNC75TU2yjyaX9huupZrRuuaA",
  "key22": "24bwGXUa3VZ9Hjt1f9tRDRqYEXbqpn5BANxZ79AFiDqgSpCFd5nh2UPmQP4mZnyemZsVAskfxzkk7rQGycHmXU1s",
  "key23": "5SE3JjfhdnJuTLuzCh1mrgTFQTUhfYNjBETMTZmrYdj4MTYqFxLmVhP4BMUm75991dccNuT3gBGYDypXnSubzQmK",
  "key24": "397qnEXv7NkoCo638NmfAXX3pRW8YcSCsMscDF3553fEhpSZ1z7LuBv9uuiZHQCAwdtipJNhsEmR8H42CjVQQ5uf",
  "key25": "bLqtqG9pTdSRxmFtQzmFV55oojxvmXaFb1noZD4tFJCCn9ii8EzZQgDownpeEcjT3vRcKCKwxSS5FU5zfPvUMUP",
  "key26": "2f1wjCfYbYFBUdSHi5aXyxEbXwBECYM1eD6DSnQabmMsNcMLtXhTZcuU5iPmKWoVPMpczytGm72ugmgm4rTny51n",
  "key27": "4a63FrGPCBQACiBbxCqeR3Bmuy3rkXNn2LKsvxq6Dk7og4e1EgKYUMXk6MuFXWphe1TK9KFM2zFxCAeG41RBt4Cc",
  "key28": "cKTbZzsi1sZMGBQLUzVdD1XmwKPcN4CUn7qP61fRf1QToyGCBYqeSWmwEpgfx2kKR3mrzQiEJMX4qFFSC454YFA",
  "key29": "24z7oHPiHjgUW9SeqDMBWM32YGY8ybJUF3o2A3tcs7KXNyJzhVndhk3JUkyYuoMohDLiDs3ikHMFpCUxuir6eSgS",
  "key30": "L45HBHYNHq8pRjq3t2s6ZJVXy3puu6VWaW6itX6rvQq3fFEP9172Jz7wpTtvcBTPhqnYAVAfqCnnLAc6DgdamnB",
  "key31": "4tCiFWPo2ZaoR1zpVH3dpdsueHKFbNU4DuXAUe7bnWRoVu63kQDh44n8wnSqanp7HcQqTC7x39QUrvGM6Ncho697",
  "key32": "2qVm43qsTuFnxSX83zDfH2BPSsfQhuqiuf1gQNbTdFXEYmF5N46pMYm5zFarJoRDM7UBaSh5mgELTzB5ZtPbMKvY",
  "key33": "4aeDMMDXPjE5ubupdg1wVQY6jB2G9m1mMySQKHbqwy63JGc9JUBJHNXgSqB3MC8DzKgMthopL4r95zeWB5JTouwR",
  "key34": "4uPKifeYHsfeTSwRdGqEucD3nbHBAq4ZcFApvoNb2KaAsNPUSC3ya2JcNXKrV7jpuLwEqfqGGPPeRQgu1q3Hz3TL",
  "key35": "2dbDZVCQrvvnidMrr42gzjJzf8tYt4f6wWFgbVfM1KFWXxGM619TiN2kVvnkDmdaV4EomNXKQPzyLxRp4Ku2Q15a",
  "key36": "5m2axrsLbtavL49vfTSmyeg12zzoXnuoPcVVDZbL8AMQe77S7ff5rUWvyvrKfE5Zcqyspe1E2z1CzDoopCMMtqqz",
  "key37": "QE7a6jzokcfwa89RRMs3YaKnUXtidhAEqccdZA58qT1VDnkWvRdpZZVTK43BkMmMGtYCtcb1NFFf5qFAfXAsKM4",
  "key38": "vWg5bEU2RZeKzoLrAkXFp4SrBgmacZV5mcD1uHAahLrnjXsUTKwUJyACkufKNV5tmNQ1iS4d2BdQxBavG7SKKrM",
  "key39": "326V1Pz6jdqxV6TyrNQT4Kw6fHimBujCPDBfrzxJNguPnv98B5jTWGuELJwU8r7TsDBmBZ8z1279EYecJepVaxP9",
  "key40": "GaTunhyTw4mKaRFJWqp22RnUhFrr783JrvrYMHVYW79Kaxh2cHYpkP1fvUZB37fDrfHxCAoyD4ZirDS7towBMPA",
  "key41": "39yG3SacM9kNYZxTkW63wY24E6gGQcoz4S1SvUm9DSgaqgAGyt5rrVQbPfdLJvSZetZiwMSDqKLhgWKGa6QXD86T",
  "key42": "2pYUkHHsnowY2pin5xojK1d19SB7TGNrX3cwNKKiGHoqdcLpvxuiBDSD5u9S3Lg9W92jeYqik7XvEqRrRCZKWr4k",
  "key43": "23tUcKBvMiBA9jFPYNAN4cKvVzzuzFqn2CQNVrKJcnRc4jFxuhiKLx5fXFduRKYMQDrMHFceBeeV3PBq3JRVvcWr",
  "key44": "5DcSCKbwDyU2yDzpNFGnCo94Hs8ktUeXr31YGYauprhdJUsGd1FTYbrHeMAehrj6XKk5gaBwonwsNokWsxyuGyao",
  "key45": "3rBLvZ77ULWpC2bQniiPbZyKR5h783BzQFuSWnvWisrg17tpHFgPcwtD83epi9YyyDjfSMPCcaLrqok6ZMCzebym",
  "key46": "5Uiain2hHnkmL3STcPavCjkzyQmQktxYtgvRbT9d3EV8DwWNSUhucAoM8F7UqqLVuSU2Cp6ptiVNt9cyFGbcYAWc"
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
