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
    "7yycTd7fJjjcP8HV3SHUHQjfyEhZofF6zNi51ZpuiRh3VnBUURmtXcepRPr6U9bXZ4fT2zn3WeFUpxVGxa9kFhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618kS2wobpv9BQBZwqkRaELhCT48UHAEFqYfufNsskgCqrzoXNjr5zCfMtSCfTGbx9eVqLGqLTJ2JxZTLjuGf6Py",
  "key1": "32LissM9XNz7hH4eNitqWHsJXPoUzYhkXRXi15rXzv768pYo1xktaEUTP18UWBTv8E59zbeDZiKg4Ybu3nrZqjeG",
  "key2": "3wYxMfwGubxWtf4SpaASdJHdvxv1vMR6cQFALuKtgdU2Zkvjfc3ysU2bpHsgRRazatys61C7nNjzPo3pbGNrw5yu",
  "key3": "2H4xmT7QdwhXYg5Xyufnzhjd9Ge397TmcZbPYjWuyogPEQsvmoW83SPycxiD7aeom1nLxwdAVW5kgEPQbcQHGfyT",
  "key4": "2ADA5iAfvSNSeeF9Gf88hxykhGToKJRQxc1jKkMzi34RjJGEkGkeBBXH5zGsy2jmd7T9UNM9oWGxn5arRjFWGKLa",
  "key5": "LQ73a8ipEz1jQR1jsi1P3zXwST8JxFqQwRiUdH7S1XGKkU2CWYNeHxzNxPmE34x4C79Ss3jV5LSFqKyhbZWXATe",
  "key6": "ddfFpju2vhE9PBpS5pxgBjkZsqF1onm8QUwe2NpAHoWe72NFQyLjV1W1kWQ8yhcoMfu85dSYRtRd7GJckyy19Si",
  "key7": "46f61adM7vvss5v7XoZ6nxMMkhAn32pVyHsvsFW4rKMzR3AFvFEobK876GAt8Ts18W96Gab7B3vDDto865ok4bmF",
  "key8": "CUCR9FCdUREFkmxL8wEbQwAuaCoURaQ7tKuKScntA6ig26UpLCnYbyNQ2KJynBG5vgqExtQUE1Y2X6R1FTQ12Gj",
  "key9": "5o4FgGGWN2BTP9jWtRZC8iPyvDQPXavXaNDDGFrmvMdFhVhH2LdWZEMzH58oCmAbCmuu1FRCDWrz3XnSaYULzfTi",
  "key10": "2pBtupXAWgwMuXDCQAw6jeKLUwmZp1p39NhLVGV6fzA9uXZcMiZdCFUhmFcb8c5ebNs1WzHTGncjUXreQ9DWokn7",
  "key11": "2JwPvDDmXA22u36fLn6Geg8fakbMk9Z8kU1GK8PWqNWp8dfA8VhsmE8HA9raAY8fWpSQsQgsMWAQbext8o7YnEhJ",
  "key12": "133jbjW9EFX7TU7k6qkF5tMJYsknbaAFNZGoiza8QARYdgj4bnQk9WZWEE3bV1qD7ShMd3suAqKPY5tpoDyRKSz",
  "key13": "4hb5U66PazTNtheyXP3xa23pUbLHo3V1d7jEMfjNVXX1muVBWNDAisE1ZuMqxawWUWj1ahcii2Hn6znkiRoWfn82",
  "key14": "2VLAkQoMZUdKd7B4fXFSNTNWJJGxAzpkjvzJcDTcszcJwbQG6jQWXraGoedgy2USEe25YaD4K5yMAHV4jzu2UCuJ",
  "key15": "3P3UV3YKqRc4gjhCnVRUn35KGFS15FY5PLoGdrBveLyzbhmBvSjDF74FKbL6AyXt1CxgqsK1zMijjz4kkMJZBe8",
  "key16": "66RRwJS3AubnPd1G7tayMWynUFG7bbmZLEuXJe2ZLBaFm49LNHjNjJrqgGANXBzT7VYARd99h7xwFPcsgsFq2wxG",
  "key17": "rjm8cgAfEaLvmLqQF7X6x1h8PihTDPb9jhS1C1mmRZZjsKAtxA27ZL3Lgr1PYvmEv8KcmRrhHuHWKS6t45L7X8B",
  "key18": "3Kj1XAkSsGmmLwBvnomYLmzPYiBPNRjKxEuhNZ6uG6cKy6wK6x6M3Pa3GsxdMefUZ1toNyMLVtCz6anszV7FTWSg",
  "key19": "2L8u1x9C9VK3KgQ85KbHnMvMzT5Qd5712HZNtHsCa2U24xBe8Z7X4CcCG4ZEdN9Xym3twN1qdyXGEWCL6NTHgjEo",
  "key20": "ixo65K5pM4b8YgWFyFPNd2tg3kNcgBV1XwAYxDffup7Zm3FMZ2FTF3ETHc4bHtueDW2p2wPKVqoVEW1XEdG1ino",
  "key21": "2qqE5chhuJhFcknng9Tg8c4rMa1JBe7CUB3qRLQSWXEawSMWXd9v527ZnGqy7cN2z9kdjeUJq6QrCFkaK9EjZhhX",
  "key22": "5bjRyAKMF2e1wn6D57Wh8kGBZBSaX6yES3ZySqtDGuKjHrYciBhtx4BAr7cQQKBAvwFNN8zYjwTEg8dz4cPZYi8w",
  "key23": "354iAyLW1JBgsAWnedNDLWFDSeWm6NNbEeos2ArD2smEUCy3HSgiZNy47uzQA7ndkK6PGfDuYxs1dFDNwUtUudFE",
  "key24": "5T6gZmQpeXXgLbp8gAoMHu8Vq33Mbojf63oy9WrZwd5o4ScG1wZ8PhzjYVL8RrzYu9czWNsUYz81PuXJNr8fXxff",
  "key25": "2fg1u6BJBPkvzLgrkQT3LrjxxD851mcoKyWwvmctZHzRf9K6XrJhvqA1aQFNCezdtUNgu1uNX6PChFSrWTcUVyiW",
  "key26": "YTfjsaAFFAK62kwkftboUppXJ1BT9Ngw9FSVcRTcawE3YGk1S1HBybfvUkGDheRuSUao327v2b4otoXavmdub9B",
  "key27": "GJ3tYWSR2KZyiGHCzqKfmT4kTH72DSGNhH1mtDhoaHAxSBt5GvAsbQN4jFiNUTosZHXFsYRsTmQwgxB9dCVSP5y",
  "key28": "3nPXP2M5QfNySYijXYJcLsNPxYg8xTuAoHMDnj1piczAtPhU5q2icu6A1N9bgj2o7FJ7AeTq52fuvHKdJhHJrA11"
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
