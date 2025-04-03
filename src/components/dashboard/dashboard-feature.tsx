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
    "SGqecTPQSQrTqQ8wiPByryjBHGKQFCXVody5xJMKBBYGavAW7pDYgz1a8NnRRLba5oqAZAqoK3J4KrhFfEF34Sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDXHRzrKZYb2hXnKoGxWqC3uzLFJFq4qnHcnXe1CmE633KhvtapyKooVWo9EqUKRHYrTkkrED7Q4FsKgjeenExp",
  "key1": "2zpk2TVWnb1J5JEnyGkfrFgGu5ALvhXzuGQYF3xhi2X8ewHop44hrhRWNgeb2oxbEKuMG4gXJqi6o4bJ7nGwxvYj",
  "key2": "2J7dZHZea7KfPn4ERP4WZjTUdzby644vuzt316wLQyNctSVHUvKmQsaCGffhghHVYmMgoR6wSW1jEnMVfFBJ1pFB",
  "key3": "5vidANiGHfuJhVDP1yCFNRbrBJXBcohQGmPxtkN28wTxSCN6sjBUXhDoHQUsiDb7kGZtqTU9TZLFW7K1m3mnXmmY",
  "key4": "3aoGT9nW1QuNCXo27R7McNrrxk4ExpSR7SHshP5ivSgVqDZ8yarkpPmUhb7FVAm3GTi9Hmu4xpEqcgrE3TQM99A2",
  "key5": "5fU4xxiHCMpzJdF9Qr24witFtLmFhAV3zsxsMduZgLjQcCKGoCpPtmDs2LEraJkTgxipGHzBCmD8p72K1UHqzLHh",
  "key6": "4M2e9Rhib9dG4UjAqq8qJpbY7szzWyYsWJiQxqTVQ46oNUBGWuxtzaJfZ1napFLh6AvbguPn7pXnECGLXJ6bJDZQ",
  "key7": "4wBk6W37VKtyDrq8X6ge7U7TAtLP9XbvNigkMTeP1eH3hwu8ccoCUPTVsxR2hGDgymkNaWMEFoWsmXHDLgxPRykB",
  "key8": "2hHzBnVxsRTixUVn6uprgix5xqNWfPygYukneMPwDKuVZGtnYUyqe7U2itpHDyrshQTYDefGzznRPgBncAw36wbP",
  "key9": "2UuLUnLnweeygDJciR7x7UkkwsY3QxHquX833KvAujQFearBEGX3WBZ3XRvFmnLpAE2L89EWTwHgFpFUs2GFQTQA",
  "key10": "2LzaeMaqeT7svxq9kTxGsGd6tVpR7APvyEruhvPJzM4AZh8pyu2sCG5EjxkXhmf6kFBYmoCShME7WHr6xAC5qSUL",
  "key11": "5oVd4qWXgG8XV1Qdbgdrkgq6h7rUT8stvnTQDAPAmC14vaYvncGXp69Fo3C1qnRDQm2P2R54s7gVUhY4RhWEXS35",
  "key12": "4SAUB1vZhwpA4Tk4eXrLDgLTprnJVy9Mc4fW8Q62xhVgqjbvkKcyiYBZwDUDT6knsxHvho9b7ZYTLoEHqJW1ZpfT",
  "key13": "2vijWyMj2BNnrGha6nuYesvoV6xMafjhADMcXr3A1NY7LPJg9Be5DCWxgsta4rLMnRbGJaFozZvqGoaJLWqVwL9c",
  "key14": "3ztvwRfgrpJ5Vu9uYrFsN3i2wqHyLSMP1JD8mERMLpcyndoj73SHXHtnXFXJyBw8a1uPa54JroqTGEA1T63GjdCW",
  "key15": "bJ7CSjJGMeqtCB3L1Bv8vf5KXQvKT9KvqsKGGYErXt9bdZ7qQnSjvdtwdcbcqUpf6iZhT31p84xwte9ZXqLyrgr",
  "key16": "RydWssirXJDaDDan9Q4fDKmoE8maXDT4A78BRQUc4gnMv4E56Kncvkps3QSycSUbTX6pmtJR7DMUs8hqqBKdFg5",
  "key17": "2dmMMKeP2f8tWV2X22KoA5J5Nv6GrzHWbzNYUWYKwg7E4oLtcY37zUq7Erowt4Lmr3gGJXPrqFXsyuuMA3hupyUQ",
  "key18": "2D3fKHW2gFjd95zo1x7HTyTFYBxhdMobNXae7Q5kNeBn2gFNYgAk7hfw6gy4xY3Q4HzHd3gaDREEEUjoSwBoaenN",
  "key19": "3gzi9hPb74twQxeBd4dfwy6jyP6MZeNZPCKZZoBqHABvXxTHGwuTXtxgWgm21fKZidPZb9pV4TKRG3W3zGka8X6B",
  "key20": "2LtW5dbgHjmGFStZfNS5PUV2yCfn5TbgcwW2ZExTewwBf8UbnwqXEkuZLxKhJd88VoDXFteGMSkjNxfxpTukXMo5",
  "key21": "4gfSNvVcBMwmzodEY2Fd2F8Toi1nVbfTFrXMA8qASvUqvKVN638ktegP1BkKM3KkanFsgaVFfXNRGz46PybwJpXV",
  "key22": "4E6KUkQ8BBeeXx83hKe3Vnd96ose4YqmnUEuJEV7oMm472Lh84Ya9tdmU3k6c8DbQ6KWdbeWdC2LDUXTxsPqh7Lf",
  "key23": "48hhfnbrX69ncjFQ6K93CAoUohDBZkPpa5pREYvjXUdMJEeddzQBNNU8CUCbJ3iRXedjExRkEoDYnrikPKz8KV7f",
  "key24": "5DbcNDmXxTN876TehyveDv1Gqo8x4XRioA15MDKMo1fcGTkWrZTuhFP4TFfBgTzcmYqD1w88PWihF1CxRUPyL3Di",
  "key25": "EKq94GAnNR2XQRXUdiSPAStQs4qGxRRdEPC31JsdxRsCkhpUeFkxosXf6vQfsCqfZLAB6cTXKaCFpRAX97Ddqnq",
  "key26": "HXNcFMK8SLzYSWi6ivmj82zagpQrjJQEdMkqFNUCzsBpzEhNTNq5aguiCzikHtdbx6F5grZU4p13DV8HvViLPzh",
  "key27": "2LZMtYeyus61gCcdEfZzKLDm2UMkQrRpqQjBPDgAxFonar8D5gXNnQwm4cAsdPY4yrLcEm5DktzmxeWs26hACZpR",
  "key28": "3gppvwknEotdjj5BXi4cFJErd7SHLPEATjLWCqPb3Zph1JerWPApabyB1TU1DRD9GL6cofchT5vZEkNbc5Am59B",
  "key29": "2S8c2vVaRBDLeA2NqDY3WSWBecWUVDWNVFHFsCT7Q3pqhV6L5Cowr8mQKs2BQzGUVbT9mpBJ6dzsM1hWdpfexTkR",
  "key30": "4rMyXYFzKMQ2ThDwjuVZ7PK4eq3WpnUdFYyo1bb1BVfS6vZhjXeaiwMBhjUtaeg6c3jCRQpkDnhyGRDDhB4ewNfJ",
  "key31": "4DCrrBroaBGjjQTV4ChU8Yq6StjFkJnaPX3aehoC5vYDSKtERJzcGgS3nnuLNy3bFGbC3emRqbhpAS3xZhf5H8bh",
  "key32": "2hG4BuUHDVPhasQ5UyKvcRXvUbmYySr8UJWQCsmBC5T8J5UAxMgKyKwPEtwN4po32m3BKrcEWS3JLHRTrqHczChQ",
  "key33": "3pn1md4NDPkP2xNJrS5m82QQNv6mMqDqm1UmcvukZLpf8kpMz8PSCZ4rd4B6WA1Gbuc5gzHLqALgoszxLKjEALx9",
  "key34": "3Bt2u9RGDzhC9Ck1hvhPaVC3F7rUNHe7wFjLXtZvijgCnjNKLFdMpVJncxsZMxiMXRey3KBJ7H4HT3WRLNGjumMt"
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
