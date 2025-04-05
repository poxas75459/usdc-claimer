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
    "3r6F7BXJHMW9Ud499NpZ1y6vqqy4YQXJX2BUjnc9YKSckqeJXNMv1WG3Jdi2eUScoGzGEUMe8XUedNT1FeBZozzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21DQMBiNweyZuPBibFPqf5HbMayfes383tqBndQvQgjVZFzP8RT556SBNeZpvEVhV1ApAeYNJmKdwP66jsXomu1s",
  "key1": "4GjC2TZ2vtseBXNgKJzujdoKYhW8tn5kF2HN6vAryD4T2LwF6B8fsQ7S3x765rnkesu8GD7MMhaPviyQgNgyy9tm",
  "key2": "589BE7b1G1sh8344Lp1njJZWojeMu2HVRvbW5wKbS8CXEX55KiDWSf1SXDtVLpBk5NcFassH2JwXDhowvCqQfEsS",
  "key3": "Vuu6XTz2MdgmuR8SfYQHk1w4RjcGNcXxPRCDKNhto1TkekBXqJovKGdWBZhWzciV8JTjoaMjHasrUd4iUfsEjfR",
  "key4": "3AKESidfRtCHm1wLprvUUXk5h2Y3uuCG9Qd3w4s6MM9f39Npk21hEpMJw9KNJrshzwEsbwtrArkXCNYqAcLSGfQa",
  "key5": "58UbYyC6sw2UNBzpzkEQUQZgN6nWAcMvb8DnM9q6Caku6F85S7Ew8z4TwDW8zuyEPqZCdCLxHwwHh1WNrL82VEVc",
  "key6": "46N7zLJJjwESeBTfpDr7XhzXDEQKs4CSnUPpDHteW4n9XXrZLsVKRkHXFFPHLCXDHFnNskNMs3gQxTV5zfZ5Cr2n",
  "key7": "62uBDYmhX5WgoJu1mpkgi1ooAKtyKGJCjHT9VoVyGZpqpWJkrpGxb7MS4PnJPNmojwYy6kRXjXjW2rT8dLMddfMZ",
  "key8": "2ACy7TuEKM1AjpUcGXb23mT7C9BvKY1ecfP4akfrnepRC7Z9119MknhCcCoo9yMgTeovxFjGYAwWDX5FakS4v87e",
  "key9": "jXKyKs7siGVPCmoCkxhWGtRyzwC7Z97m9E9KSbbAbiz9BCouGEsDXxcx8iAexY4cwMZhmxSE5jKaj2XCgkhVgY3",
  "key10": "5DZfqin8j14uRuM3sUgvWy9CwwsWv47eoeykXfxsqwa2bHKsptbU5cRc3JiBm4znuefwXwAKJNCBbr7gQg7nomEy",
  "key11": "4mqbzt66YzzntffSk59PTCfAaUm3EyM4Gz4ywT6qE8F5RC8LfR71JtV9WaD5xy4c48ngPH5qHoFSZm7xWY3k7Rxw",
  "key12": "2d8JisBz8JLL2ExET4k5YFa9S72JAXSrMEeSuLEiKVEFNcwVoKNCfsVgtTgQWaEnhC7KB4rA36mdzMHVowkcFd8e",
  "key13": "7ahbf9D6hUDcsmePMjy6RyNsaEwnoxcYfvm4YEuEgarA5QAeCZxL8Bkvz5iVW1hxAH2t6hpJuVS1diKKYo4rdxL",
  "key14": "s5CnJxAx4FyZUngaK9cgs51PiarujTN3bh3bWWZXNw7wSwvUt7PReMFjQ2cvCg9hKzGtikzTrUscy9isQwus84z",
  "key15": "3EFixbhTvjLv6ik3zYV1H8SH3aNCxgBMntb9LF897hLCxZvFgQiiQbVNboHrnGqxeeRvbvf83yWucUX1LSdAVwwh",
  "key16": "3aXdKvkzYBUZdWXodh3SrA5Pek9PWza8vtQm9boFRL6UgEXz1VKQEJFei2YWkGB3iHxqwrSyf31KH9gQy7d9sBbt",
  "key17": "3zrwdz1Wg5ZprekYyc1XcvAzpgFDRHsbCMX6qh6ueAwHp8Mpaa5Y2NbVVs294vZ88cbTK2bYDxS2iuMdHwAgi3QP",
  "key18": "8pSwnwQLLxmfurKxTkxAtZw86cUpuEjTRLkNjDprZCvG9T2eDbynTDRfV8c9NBAQt2QaF1aAbQL2WGxFGb1mP9z",
  "key19": "4z4s1mD4skhSnEUDJrgxctNM9372CLriErGHWLgCMtuQxttYLcKSawCbUbe1rr9EoJgzW2u4q6UkGPa9f5y1xc3U",
  "key20": "h1RE1azR9jVNquuWh76MayrHC4U3NG3C6mhTj6x2mhX4LkT5vnFhTA29fyC2nM2fJPMEE2qoH27uxPF6YY1AXXt",
  "key21": "5bkDci9kacZEiiDSFSAGtmJaC8JsxSofWfdLEQWuWK7SUoSMDMWsVMs7YBFpv65XjRrpfWNadMMCvEysony4Dtti",
  "key22": "gYuxv1MErQ2Y99njL6RQRKy5HEpETbXYJaqZNYkMevth4pyJarXPnt1qH21WQJWyD2PUaFe8prpYiwpAeWNMzeD",
  "key23": "CDcgb1Wnqw87yU9uYkp9kPt88f7rCvrcwZUh7XLZerCPdfeHARBFfWYPJHLT14GCT7B8VxJQmMxcKxRU7cziBHF",
  "key24": "3iSWYrJqB7Q8WtuFJNvD1QmGbUDJ2Nk7b1AGP4oNMeKrsdGb49StS71HWxz4Lk4NKugMY4qg4Rs87163aPUgd7k1",
  "key25": "4HtREpZEVh3TnpHcQMncYwPBUMsjYKF5KLF6Ci56rA28373pEeCn3sX4MYUPSbi7a7WAV1eRSUMaib7oqhSwUPm7",
  "key26": "4D5od1vQacDKq6zU2UKmL54mhdGP4JA2vrnirXfSG8m5zyLup2frr6Krqe8k1KUwEmsAJfojFR99viJRXQoU5A87",
  "key27": "4C9yLwdrrQRt7VdiamKcjSGJKBk8YMLAxZwMso8pe72GtEoA4QAxQuTGfpDprV7u3pDXeybDdSk3oNCbvkjGgfoA",
  "key28": "4pquvuB9YmLhAdckDFdodPdRu1HUrJj62JFvA4kmmARdzVYmUWsV1RNg9EJ4pzWhw74bFsw4WQgANqxCeEvmW8tX",
  "key29": "3MiFi99uojWuxorrQMC3TkbTd1jbDUKhk1nTMryCXtzSQnti7JJfK3j42FzosfVAJzqKdF4bePRAkSGyDtPUTBs5"
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
