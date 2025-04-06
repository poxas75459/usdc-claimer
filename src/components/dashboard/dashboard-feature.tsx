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
    "2wDKcJ5AQbsoyFtzhkPvQ3SpbKVjABadeG2PMqnb7pUr3tpJk26t36Q7NDQquafT4fjwJnvg8Do9vFVagj6bTK5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zBjmucZDfQPz7ZYzkmqfAsiRk6XgkgbzAn6VcVtqZGfNUpnTyyjvaV6f7R7Ae7BgFP6KXQ7HLMWrXWxmfX1JEAQ",
  "key1": "43VAGbCSjckVRSBFdwKCCoKAxvds1MWGXeMeRNLG4MAdBxr3ThsnEUDz8UMqx9mtAA9hm6ijbcidVJE88VZ9RkUL",
  "key2": "293H7aavqtrstzpHNV6S9Fr8o59ojAVK7S8SsozLWgM621Hd7nBoDjCBaGwZzDWEGCcSvF2i2LRkgcS2V8336rob",
  "key3": "7imyHKSRLshDQeGjgrBcsbtv4kntogFRBgxhASjVPPFVfgyiWYqpMEzALXY698cu9WASp83V2UeTsvShYrFWsnj",
  "key4": "QXjgmTNJdigRa7farimtW59jeUZfY7wxs7GoU7aWwPLheuKE33ibdpMrb7QU8jpTupiNzsipEi8DyH9sVLadB3K",
  "key5": "t4DcsaguaRrGEu8UbvD2BCsfQ5pamdAtMFFGkr67r5LkqN5V566UxyYpHds74RqFLp2MuXE71koXB293X4cD1E9",
  "key6": "2kzGjADQN2JyxAwvxPmtqJLbZ4A7vVKtPPxxKVrtf9Vh8MNPfvYqzK4h5VSb7ceA3t2AqKANurg92FH57xuocoqh",
  "key7": "5gJPxUBhicUmzVhW85Pn9La9LTvfNzWi4tVJsHBnrGKoWJau8tGnwv7V6U1asUPDenGmFz2wDjDs2pocj8wak9de",
  "key8": "2FepD2sHJQhEpGiNGZwGeiPhQ639zdv7FnLwkPxyAnXt71Vh1o9CmDNFbfoWhG4gKg7t6NEKiaUXSQv6QzWrK7Zi",
  "key9": "5fKQ41VsfkS5Lf35nGiXxsC8T7Rt3eQCy74GWMfUFfZrFViRJd4AMcNQnVAxEjp5rw6fRSNorVVywWdYuxpBLAVA",
  "key10": "3bVC1RwpTpFj12nCbT5RNuHXCFSSNLTQDcvC4fhz3nbP1sTYRcpprorCSnpzM4Few69W5RfqScqLMxgj1LPhUusi",
  "key11": "3yih3fXUS7ExxqHsyJrYW1nh155vwEXbE27QZPsTPXhB3iToZdESGdFRQXjQcPYqMq2pZ6MpBPdWZHJJ9fxQkx6M",
  "key12": "C6zpqKiqb54H3y5jHxAgBftpiUqMxi22XTHmEV94Vet98i8fVHcWhx3PsBDCU5MgGGTzi95oWnoDT2JwyQN4p5W",
  "key13": "i2soAoYxWx3aYwTRgZWfDs4aMjXqcjSzyDu388Q8fBN9y5fDgxYvriEXFp8o7BCMJsPBkmRpTKv1eiD4ZUVQfyu",
  "key14": "29qx9FSCWyferbwzrBMRXL37XhrLetET2fgfvw1TfskL1sN6AgrCuZCkLqXLn3sYdkeU3wrCEgSyxU8oQJT8ARu4",
  "key15": "5nNoiCN4YKweeNK1axBe7tPKdDJRLjTzKBf59AdtMaPkiLPgYnr3ropfoLuFohnLt9hzqnJZczR1bCQt91cf6oq4",
  "key16": "JZ8QpQSwR7ChMpJDV2DjfZqvWqUwKQ3xnCD666MshSYo7ZhUfvbqpzWNdSdzRUnY7DSu3PfQJpvu1gByfmmKzHa",
  "key17": "4ABf96CT2LAoUrNiSMi31Y43yUFF88C3yjXKZN43msiAksc7uB71aYH1xHuQfuv2i5ar7n3Dhx3n3wtxQjszkfm8",
  "key18": "srLiWiBnw9Gp3ZB7aMPJqfizPZ8TxJQP4jVDysS2VUma8mZbqbwRnji1en9rum1PCqWZbzVi4CnN9fN2fiJpYor",
  "key19": "65NANJhB3FqJ2WgpZqHWektjJke3ekGj6XP342zVN6bBzVqjo99R8L7ZuqTrDnFG3oribrV1VrmcwBUFz3kumpic",
  "key20": "5svFLDDAsEaorSmbwWxk9fF7ErT2gd5CqDt2E25Xrhrg7Ra99YgxbX4dwUoX2T98HmwZAp44AtbbkNUkJfMRWbk5",
  "key21": "5aXDBUUbrYC9nF5qAFXPyBf7A4Dn9CDbzA7fvo8nEdGDz4C1fnJKJoi4iruAkLBFdi6Lxv5KAfd2DkLY5sYo1ggu",
  "key22": "5ijNhNeTyh7vRjKXcsWyQ49ETb2JMEZ1GoSeffuDvkV7yuuumUEQyGeWVTfumR3oDPGry3fEhN2CYuQvc3htqvcj",
  "key23": "39smNoDMciZsfzykJisBXVUGd6mtmprkTe1fwZWUAyMvkhysbcyiEQQEY6ZzzTGSWudvYgVUc37W9bLNMNbyvBYS",
  "key24": "3cFa8oHXGK3Amceena1HgrdArHKUGRLPnzeLwM1sY4eboUwXLkLTM6p9r9yf6mLZgf9mBKNCnf3WuaxZJ1VNDJJj",
  "key25": "3JLcBRibCGYDffQABBPdBm5VXrLD3HmDQLqVMr7sLinzYuH7XhcQZby3JkCzUvv4zNZKsURbRBiMuGq3eFT5jkvw",
  "key26": "avMcyq1G6LAhZgFssF92AEkx17Lz2WDqgUUWp3BQhx7ARaDrBybYsjX9NJqnVcX5cq5UQLzsM4wcaD87RPTDZRJ",
  "key27": "3bjAh1G1yuv3neFw1GrE81hqV3yD7PUDaHdCjcv5bpy8WNeHKcR8zeMoPcjYFDwTHZ3Qw9wzbRCHAcemXJTBuh6b",
  "key28": "Veyztsn37Yvu3sFHJV44rF1F2y6fqVh4ZboFjo3SW7MeAYywz1kPa2FnwsZRZAHoKDG26tVFQcCrjZic3TVWJ28",
  "key29": "2YMXxX4LQ8r1on2H7BuGbL6PD5oSLicHudKzKpmawpd17chkX4NSZXkykmm5HFvRtzitRKGZ5JFbtbZ5YTKmg7dL",
  "key30": "3w3Yp8Cd2XLxTfEqzAjKoQEFZA2CD1BiGfaLnqD5dGhsetDoSKW2GHwY4HZyYJwPbHNyoooiSarCDGA4cyfFarSd",
  "key31": "3moSbuRSk864dTNjZuccdxvQMb5k7tof9Hu7rApQ25EbJtqYovYRCPo9XGCY67ZvUvWb4XyLgYjnxMWEg6Hg4s3F",
  "key32": "51juaaJv8hmPEkpNGRx1BKunZUgaKaNZqvG432iwHLFaBwBfuCvzad5YdQ2V7XTSQneiWLq1h5uZgwpqSGmNXdcP"
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
