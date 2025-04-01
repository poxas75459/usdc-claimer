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
    "4PigazmtDzNWyzczoru7EhTanUz6KfEK5WXEuz5bKrZfgpCXYW7xaRdxqPpC4wBySfyAKqbmKTFXpCZjgbHATiEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BuHJwBVAYn3gCVQHE7fabiBxLUAe4ktDkTaGNY5gHJ9w6Ujo99mmhx4kqpktVXUHGyUL6Q8BSfFJDeDZ5WCNyLC",
  "key1": "5eeHDZM6y7NtLUerRY23N9J8kj9mjwHnCJ4TTaCWxt9VquWQtc5ViAB5S4Aipft4PhfgXgNDoa7V84Ue63QhuTNj",
  "key2": "2qqegcPZvGtzQ7Zjy6gTJV2yDbQMtksDNcwNtsSAr59KssQxBZN2dF7ksGrHGZDFUJ6ARkZFRFEWZh8G1pyX94VE",
  "key3": "5Ncoo1GJ3ofHrPBHmigSna1oUxnMSYggZcMvXoVb4XwK5jhsAjXF4A9mg3ERT8zZLeFohkwA26fHbxEfHMqQMMrU",
  "key4": "5xWv6txS4sEeFCLHnHiUDJNkViUTBQdfm9PRrCKRUo2c4Ltiwv34a3tru56HUAHTnAssUVBdBMNj6BCnqBqQxE9R",
  "key5": "2cMyq25uJWvr2y3gQy8hwCF1JdASv9qfbA6V37BoJMGsgjEbJQzFHaVcJw1pSfqMWxqDqTr6NTYau1nb3yEieaFP",
  "key6": "4XmDibYoHQpedP7yEH12tfTAPieLMaYZ6c3kgTq1TqZhEwu9ibmG3QyS9eSCfEzTpwy8PP6r8fNrNJJzosSg5Qxt",
  "key7": "5i9rcFutJHrC6s6tcVcggeUXrHLuhjYcLN8He1rU1b8AwhR5AtxAonihz5eHZ44RmroRfvY8d2gZFCa1NPLEWXtM",
  "key8": "6mSaouYL9TR87fUpN1dsaeTP2GsxQHHTC8nZpajfoDroB39vGexV7gQRjGcGTeQUJHJjbCsGcNwgHzxhAUsCwor",
  "key9": "w5697PGdND2zJmUmg2JLQjpGb2RQAvvrWdLVC4NWB5yka2VAdq5bh5fopEx58qxgH5bF12nmkSyJ7o51zCKiDze",
  "key10": "2aw577iw3wU4HftvYj8fU5UK7udqb2ia5FCvbtZydLWCrkYdELDMVLtz3XUbeZUEhsVjCS7Y9kTsoBr85e8CkhPK",
  "key11": "4EJMewZHyMzMAqFbHSNgeP39ZHWh8NTKbxfHewCamDRncjSvYxrTi4Um7hbDVQ2cgQGNb2KP4vpLFkgWSyZp4skN",
  "key12": "bz4CwwMkkiDxyFeEXpU1kFsUYp3sKDeVo9uLviff7LFxaquL22ZjjXuGiaFRaLzkCZFsEPqkRmDELDywrCyhsLB",
  "key13": "36C49iGUNf9D1dd7xcyZxczjXETAweLtwzYYzu3RyNkCMD3nmthFrZYtmcGqiULdxXpAvYBGV6RpQK7hi8p3MPRz",
  "key14": "25MBGF8PbkNKkfsQAPYWddh3KxBEPLeNZruXVQBGDrcUSSDXwDWc3aEeYvWBo5Ftmm1xMTkKzpXgod4ZwTgZE6MP",
  "key15": "52SQJbdemEvaLc96CS9KzbqPE5fMcDh3En1Yo3yiswfedgCDZk23HsRxfvuAN3Nfo2rWWeNLDnARRpAnu4CAFTuB",
  "key16": "5V7AiY1uAxL5taxXndJXhbvD4hpvwL3JbixU7hN1kZ4Y1q7UJFuDetiX8fhnHXBogMR52n1w97nkZeRyEkNgZm3B",
  "key17": "yrpy69WrGEzF8VGZFNzPBfzqFuzzqCzibvGwqhy7Qv6r576iQwqQmUYyeCLjz3xsqeoZKxEPGfyRdWHfjz1qTK1",
  "key18": "33Hbsju4rntmb1xtKi9UXzzvpE4VYVFBBTswTmrDN7o7oN3X6UEGmVXjLRX2JmaYu4r2tXj12ZxBCFCLqJNPUC9A",
  "key19": "31zZeyAAnEUgsMnBA9Ym6CFSXcKgsGNmiUPzz1bXXX26gcA3T5Uq5EuRFz5kcj758Hd2j1hbgKkyfouRA5QrbD8n",
  "key20": "5vWoje5BcdKjUpWjBhHCpdB8JdRiZE15gSNVMNX6NkKwYGB9FzeXXtQC51KcJw5sfk2eofhmfHrZrPPahRmd4J4d",
  "key21": "2vwgt4yMc6dVMfSvGpvHnNABb9ykm24hAV5CM5S8jBN39JCAhmt2ditvrkRsprrmxAs4WvqUm2DUg1iogxZBmRdB",
  "key22": "GN9psTysRNhU8HuGGRZKNJY6QF8pN5NMqAqu5T4S5PXE5mj4BAK1x8UGoHWm1HqqBKejUNq9ojitXvL6pmoZbnV",
  "key23": "2BCW5mdg6rbL1C29tHtfTxKp4QFirJJGb2CBt6579U5HzH6jeu7coDfa6da9Z4aW8mVoRvuB4jkJJtPyesMubwyf",
  "key24": "3xT62bwxJAJyn7eNTU47EjGbtxZdfgx5m2DYWjp1uRbJ5FHUXx2iAGVXVjU2WYA1vz28BCnGxkece7VK96Fhaeot",
  "key25": "5g8fTJKiBCL2JUkDR9ghcaiNn87bwkmgUha96vgSkxB6YAUtUvd1Mn5oYJDiA5fWFiQaJiqL5QWskyoni1JxHMqn",
  "key26": "4uG1aUHYfCiQxzeQxEgiYY7RvKau95jNmh9bmFXoCn4k5WyBTpNSicK7TJrZgrE9RDNdzorPU8Bo31CXTQDMhzHq",
  "key27": "5StGXvdiC2wFDoX8yhH59wszjG8WWwZSpYZLAaTXMAKMZMEX34VWGi9k6e514vhjPG8CGnBjtLH5sa6jhMssVwiY",
  "key28": "5J2NQyrS8uqgoGPEXL7UygMphKPtqizhBBVxPDMdXrZTT3Aw3t76pQx2ZkNQCRHzMoxLs1hgPYQ59M26TPYzbT9h",
  "key29": "266i2X2FMSmbZAJ9tC5Hoc9q4koZd76RmimSCMhEj6b1Xi7wTJKBu7RwMuTJWDubfo6qS8eRMRi69BBkUdDvvKJY",
  "key30": "4chFENRPvxDuWLoLQZd23kfe9LLT7M2SiQCjvG2pAGfkgMS9Mdvrx8YWZe5si2M2mkryE26gGoSdEcnRF27yeAdE",
  "key31": "kEszJE7C7PK3xnk1vTdijQQqnXdf2AJz45KFKz7KVVDN2Y1YntqMufPTG886fsTR2y9ys3UB3zWkPuUgUpF2dsf",
  "key32": "3G31SHHm87tLUxKYNUueCHFTarJo6cpPVnatpuxJsiEox4LaWsyQyZH4UCFGoSTEjVkbMUnADH8zz5J4MJ6MaKna",
  "key33": "4voMWb1m4eBPRFFMW7oopi32VUoNbguSMZrUDuogfufmn2YfThu9jp1f2y5qifNSH47oe7L3arHN1CT4Jz1Cf1RD",
  "key34": "5EtB4tVmE5WQYS8HZk9xMKpJTaQEk4npJqwyjeRKtgkhnifVrkxyLVoSxoXNmiKhbuH3Gvwt3Y9s6wsZdJeAFRP5",
  "key35": "4nmsbwZ3srjFrxS7fAhJpGsozNvTAXgp7ejEMKm5ySMmXBWtafwiYnJZFs2q9iF3YDNKAFcNVWnGpvGUQwbYHYFr",
  "key36": "eQWdKVzq1r1bKTavPaJ7SsACKaSZt3YTt2SMxi6F3pyoJaTiRf4jCkftNDrqaLsTsVChpZjkzSrh8CY79acJiMx",
  "key37": "oR65sy8H1S25T3nNFb2GRj76Z1rfJCZwLJsv5mdCbGLt6q3ePFLYxR7tJ72NsykiLjjwy6QPTeD8uRYryN8EhD9",
  "key38": "wARmxe4WhwvqyZqmvHbTgehvaaAz1wBDBcff1zenxvQhSiNbkhkhH7UpWXVGNVFVh9z2kYnDFSt741N79JzVE18",
  "key39": "3egsr6WCrahmh7zXZKiqXA3frVAKNwTXMQ39HH8ridhvg6mcQ7cPLS3KQhouhMybhAwu14awy75ZmaV8CZfjZ14F",
  "key40": "3j87w6zGqNNo4FVd1VYc2ZAZ9fR9WCjjRGDSi9UtCLQRPdzXKj122hwPrav2z3KsULS5HXhJb9b4EAKw1MivsaUP",
  "key41": "5R8FsEQCbXyaxzqD1xH9MPqXfxR5yJAVRbBtjuEyBnLFxYH3QpjcP8K2dVNpPoaZZnAYEEzuGLTzhTYEZMBfWQgT",
  "key42": "2VwL7XxoqHGuGNiLazTDt2LJ9q7qviHJN2BFfum3VW5XPiQQHaE47XxZc9VDx7spjj98T646Wp4fU5ng9AtUUVAR",
  "key43": "4BfP5RCJqoweySvBAR9jJvwAjE8k5fKjzAr3Wxf2rk87hs28t8YpCTHyxy4mJa218skEAJfqV8RZmPDAZLsHToG",
  "key44": "BpAJ4dbsyTmzaYK3BuKPEJduWhzpfKjm1xBS86SwHUqTeqeChK6mGrjE9Aa3SUexCtCGJDe3yz66pe3njKTxc7R",
  "key45": "4LQ3tj6kv852raosbQ3WUVLWccK4mWfJUAYSqqTvqk2PZiZAVBNcAopQfPf2rWZ32Pmo2qJ6vSPxkAfuH1gPxzWu",
  "key46": "5LLXbsc4omdzm6MHTYqytxvWEUGsnY6Fbn8pnnfhgm6kUDUkfcN5o7XDcrSPNHz738rvcwRB7Dkx97hQzg7PyiXQ",
  "key47": "48L3or8pH2or87zhXBtHErDJeD554We4CRjysNWDNCXupN1WheQMVEDnNVpzfidptDzbB83BKnfsqvYTfDnRXqcG",
  "key48": "35GrtkAwwxxR83L4bokMyz2Mgihk19Ros8YHKKFvqLSZRT3W3Y5TzMRz3i5tdfF9KonTvS1YhQE4Pv9UX7as6CUo",
  "key49": "3cEUqZ2YbkmJQWXuvBRfQPgz8yggGxS7d8CMbxx9TN6ptBWtVDbrDJNJe7bT14ubtc2pz3P5WDmsHCsUbP7Lnp4Z"
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
