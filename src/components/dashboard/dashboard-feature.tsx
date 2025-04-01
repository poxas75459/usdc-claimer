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
    "2QxDKF6TnvQ8ttb3XRuNx7WmWLymSB7fifze7Xb1Aa3vyZLSLp5DcKwCRRsd7y6W1p8ZjD3nL6PUdpWccQHiKume"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qi9jTvAiSmJbvEFYidAoeTnRVn2YQVxiKTJN4AV57Tf7WJQPyN1q76if6xZ55xPyUs4S6bpu5Um7N9sKiniQxLP",
  "key1": "1aHjrMpBVybK8GdZxhdvyrp7uP9GiQncvUqDGLxzHzdUCzTSRHVKvLvojnH7uUW999L6WGQvWoZ5BuopSHGKZSM",
  "key2": "5x4oJovJcbHRDNPk7ZySGQg1w68xWyRK4J2Y4xaDKj93y62qMRNwcU9XAYc4KGaFxWLXdGCZ9SbYMjLPobMbKmNP",
  "key3": "3vDkUu7V8zZR9GGmJu6WK4D23c5kkFP5kzx5rpK4GjbQgrihkijobBqby2x738XSsWVsPYaDizQuiXYxjZtojMCZ",
  "key4": "5ZckvGyv77p6qNG1koWiTcEPLPHedCB3rcR3c4drauLK2miwNjUr6PNra821QNtq436471d1FhCHC3n2GE1t78Hg",
  "key5": "444iT2U3QgWBPAxhAG7ZGKBKSJdxPSJ4Nq4egVLdma8btP4zzV8AZjsPkviTrhJkze7q4cpEkqKeB36osuivLRVN",
  "key6": "5VmMcX6otTW4fwAEefhdj1G48qBGp7wBNhsaoLPQ2Q9JKCFLS3bwM3nPqUb9QXSi1SsSnyRL5TB5b2hLyj8BBV21",
  "key7": "2RfSwSDewaiNiCpWyCdkn7H5BAEaZA7kicGnVaS3AmQi6wyE5X4iM9ZwwejmQutsHCeFnLS2dmT8TYZsRvr5S8Bj",
  "key8": "3N5jpEQQQffNqAJa59vRwZi9F5531u6FbUQbg4LdDPr4zCSdHKQuLgLtLJWBFMHgyTxNQJXCzfEqg21ndVpYSdeE",
  "key9": "4FDNUMZD556hsJsr3rv8NS9tBP4iyM5JhRx8cLxwmPPGN9QE1x3avFrxnMPyhJP5YetCY3aMxhQGsFYjv19Qkj8H",
  "key10": "pRkTEb8UvgP8CgP7REaaCbv7Bmyv4NFo6bhXEoQiUXZpQTW1LhpyR2DXARU5svT1m8GCGvWJtckKmD9tvGxU3iB",
  "key11": "42rXBCHSchnXjLTLC7bjmJ2G3G8YKURWW3orzGYcANsduWfSX3qVRhZNSGX2NNCDzR8dhHXWEUvyEpZDv5CpubZA",
  "key12": "b4kKf13bo1JNnpinnxadpdQ2SpHHcWcsShX6UzBQmXwXYG8miu6y618HPwqwaAWDCQzTYWeJCQ2k6ymZmU1ptXF",
  "key13": "i6MAnGwQTztdYyahsLK6BNNJgcUgQEyWr8tCgnfJCfmV6fPVhrjJoMhgB9s43RoVm9H1LagBo9DKN5XsA1QhSC3",
  "key14": "urYYVu6MqkSCmfRPWtE5ZJfrhNVs1os4Yvjo3S2MnHX86Bs7xBfWfzrfZsVoQhbN7oyCwb6cvCH25KC2oPqYfFV",
  "key15": "514TkNLHYFdXLxqrNfeMpM77mPckiAfGV7zHptq3Rh5JqSPbEGeMfd1R5tdWxaWtFQ7kNsNCnRuZbhCuEeEroxMN",
  "key16": "tiwUggyDC4CaezCqXREF6LHbGhTgwKKQTpSGhqzLKzushX4RX5iidwgSj1LfAD9LUng6RXhLUY9xinJKHEdQftr",
  "key17": "49GjZsvJXQyz1P2RVCBB8Zry2fUDkyJcgv3movr7d7Swv3UdivNBfrVscHTJ6Y1wq2r7NbxWBWf66UXcNKsGppGt",
  "key18": "63CmQwHwz2T4RMez2jZAgpunsEkKEKT2qCZhA4DhbmAJFv7DSLiJZkgdveJkGsBntAJi81urCg9PiTQLU311ataM",
  "key19": "CM6SYU9Vbtad7ThzaTYtDKe3dYPQTLxfQddcbnn1t7zjj5sRFDzwgfd999jaDEJ9GgKHuD6N3iQJUnQ2ZSVHiYi",
  "key20": "9iqWtZDkBgxQG3bGhDdgdefQHaF1bXE4gz8drnMzY3kuCRYCcy1iTgTVY93xKbYhUAY4SMa2secZ684HKVgn6Ue",
  "key21": "3P1bo3p1HUTaAsC6rxhmhxVYwxqXteaogWYmkAXUAi9N59eoQJFiGF8vxBn8QJpr9iPUjXN1TirMJuVQscAdBKF7",
  "key22": "57QmP5gWpsN8AjkmVX4dDmreYXP9h8JJ7WoyeRAg9ri9EXmN7cXFtXo1ujmi9vVfkdQT19ryuhtDj21uWH2KbZGx",
  "key23": "2qbd1aUow1aQosPW7A7w4obeV9sk7qfe6aegHEq2wrjHCNvSMjaqSMF5oGagiRLxkwTB1BND8bMVxTprLzWDBi9o",
  "key24": "3yz6Absu82jZxzzsb7oZoQUYD8g2rjGPtEvzwQadkCiPvBUjUcwzZ5w4ntFbvNXT9xaiPUGVe5YFHHy3wFCxxU9",
  "key25": "9owaFhgMH9RWPotNkguiB4iEXY3i7hw1Z2Dy4yd8aAePT897nmpgJeJAgz6guXYqZY5ituJf4hmWaEYhxbEtf5k",
  "key26": "3BpgNDa2aqGv13pQW8A594JUPXpfUFmUJdxmDKVN1UDneCLd54PFXgtM25fTVpSNk9GLiHFnisXH4uxycbW8YHx",
  "key27": "3J6J79aC98aEd9asTTyEyi4gULGYWn7voPFbRt2RrDM4LG5Uq8qcxn8vsn9RHqAwQr8dVwaJzNdCadqKPdsgFP7R",
  "key28": "2oEsbKgGwYcRhuNNV8BMXXaGxa33Fc7FSvdFdz3BDafe6R2c9B5zamQbpskSAhPFkU3Xg8vj8jbhg8bPRHN9W6eJ",
  "key29": "2Kbhr6ejSYJEcxQ5WaWUKrMXEHJ1gdQyUiDg6HwMq4brMxBKujdF4xyJwC8JUWRSe3HEN9DmRFzcf3YHD31wUWz1",
  "key30": "4S9zkh2MrvSZAy6LBq8BctMqzcYKDS8wjXW8awCySmZ2xdjoq6u4326bjpaDgYpHWZEyfrdiL5d2n37SAdqJYcCM",
  "key31": "2gUjZrez5iHwyhdF3oXYt3ERoukEGMZHmFant5d6ghKSA5z4saKf6pHsq8PehS2nJRS2L8UjbBq6vbYg4C7oXNVW",
  "key32": "414DBKQ1STsEvJP9p3M987UsrktFut5pDFxs4FWBPzNjraGpmggkkv3Dhia6YE5hCdWk8Do3re1gfvGx2GwZwgAB",
  "key33": "2fFsbdbaR61yq1TUuZh4688oLGzsRUbKEaQE4qCiVJJYb2YmobAp4swzh76yNkL1mQ4qypjEhqbnoG3YH5PKo65q",
  "key34": "3LAxvP7xbDHoro4KUMxQbwdb6jkycGNL69AKpEiT4W4Pxftw8hTi5SbbT4ubt1ZjyWYdMQ4FRkaFCGminDyhCbbe",
  "key35": "UM1x7sDP5CyTrmZ78cQASTE91z68hTzQEA7zriD7vWCcKumSGE98YEWQLGGyGW4QWz5DMqWqBWjfEwpoXCXkrA7",
  "key36": "5pdmJ66h1jJHoPcsBNghU6YWATiMudnpZLRpDN7J18kzVdFQshWQJE6MhApr9KBdEmHVTs9bDUih6xDu5YKRDv8k",
  "key37": "pTnff78jg7BJznTJZizAQqvDv6qFbTwpn5F7LaPqMbf1zs8g3jVhruFtv62FEVzMnee566fdDsb3FaN6K3FcQjM",
  "key38": "2MFAZQhZRq5tomDgTGWS4YyNGpK7oKGFAxsfCGHEYyTand1D6SkSytaUhXg7JK2ieZf65dFEwZeBMYbuvvQtMAe",
  "key39": "3MmJQWDshTtnHXzw73duBVbkbxBEt26K5ZGN3JoWqCouBpKh7wvXnYqojpc27K2SqtJYMYJ9H4a5ewi6tJfoHTHX",
  "key40": "4FoT1wCDtGP6AwSF1Ao42m4Z4cjjYHnxUeRikdWB1Rh5UZ1km5CBzoCvoATMPvNR7YZVBZoaNVzQeFjMozAiatro",
  "key41": "RYj9qaLS2NrR9igRm4PojSxoni239oypvjy3YXum3KBFpkr8ttkf536QngCwNeT2vgKbr4hU4PT6bAdkXZ9YtFL",
  "key42": "3UksK22eaNu2NVgFtz5ehMWVirqR44pKrzYgEAxiKV8oz4fY2j1i1GosT74QStkzNMeP8wUGn3vCPD2znZBSDgXW",
  "key43": "3MYyCYYvBp8shFMXGaxYG2SRV1gWrFNQCrVf8WVTGyA7csiFeDE4VGVCPwfVzcpV9eQ3ecNdH1Nm9gCtTxP9XLQi",
  "key44": "K348kF2nkmY9ayjSwxuSzxtLVaK6MrVtL2mGEDxxA9x5AsgnzroixchffM8qBmSmso8ukDfiALh3Dg3PzRx3Dop",
  "key45": "L4EeJdgwN5azhf6f9YK85cXCRCGUuP6C5RBJNVzHcnDBtEbLA1nmy94NSHieef9FHBurJJqQnxUfbDCwttRohxV",
  "key46": "28FagwtGV52UNN5e7gHr3U7r6QqjG8qYj4LfmHkK6GHyF8eN1C54uvrcMRtsGQTV1DiaG3z7jbucHWeQ7nvvodZG"
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
