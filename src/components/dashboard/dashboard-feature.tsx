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
    "627Zcj96uqWXkB3xTvmKNWAEHTWhhsHFV4kK15HiLfJJzbSohmp38V6hPWA54UBHTT5GPKLRvA2L58Jd54QRyoaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Y72wR4e9Nyydush5vHWik39gtfCsHMS78mWKkqmLZteaKjoNsnAnnSd4yNeSGdMv8wrpgBJDGgzEEpr5xKxnqP",
  "key1": "2a9TprAHEcU5DBuXogaDthPmKyfgDeonfgrXSCteUiB338vJ1rZR3Gq7n3kFRmdUDUifSPmxz9yPfBLj3TXc318Z",
  "key2": "x6Rf3saeQ6VuCLEracwpyZQA5mbmY5Tf3FCh4HCXtRJiAzaMh7v8RFKVzr3hmgjtbw73e9nvJaiBMiJ6D3pc91m",
  "key3": "YJKTGKeTStbS9bhMDe65Ai3D8Fw36kAYQig2BYkD6R9fRx2Gg54zXsUpRCBAm643XuctUYZVJcYxMuMVVDjhnYH",
  "key4": "GDgyAkTTYPjcH2GUB89378ssLjmmaR6utGqj5rQCm5rczeMcFcCj3buVvJrjkFojKnb8VotjGZCZXgibq8mqtgr",
  "key5": "4LgsV9AXrXTpcfMQZuZQBGoxjjzpxqGySfpzEjoZvjzQ4gzgJi4FX5Z9GFL8MdqkpMyjqrK5bHEYwumm43E2UKmb",
  "key6": "3RqDbLdAdrY5dV9C7pHjDqHw924TvsPA5p58n8qo9SV9aspXMbGcpcZbB99jZRzJjtNTZi22PYZFA8tQiRnR1Mdp",
  "key7": "5ADmJseZSxy38UTyQWCb5SBnRhGT81pKudkFPE6sDaSeUzfzftCxBBCXzuaJxeaRxh2L8RwrtGgVPJrPZTjb2n5K",
  "key8": "5SYoLLCdTzHcGnaLujPvK9s66vDWjFF1xZvBaG7qtYoHq8FwvCaz4Z7XJZidkHvob7r7PKtGkaDE1fxf5388jzVu",
  "key9": "5YfTSCQwjMdrFNjwNqeERC674buvQxHVVjn7oJD22dFiHu1N8gLxK6go2qDK62Ex98vP6kvseRzZXfo6WS3x1XJ7",
  "key10": "5AF2PkQSw1g1G6kywVSiDaEe6LAMZNhUUfNaHTdA9xLqQr67ZqSXk1qSGBtQxR5DkCEuNrqdb1M3wLfH7B4RTHbf",
  "key11": "3gmvJRrFcrj1NKAFQN1jJxZ9W4Qi3ywX2ZXTeHwotVsL4y1XoBvMjBQ2QAqVRS2N7352qgDoKNDXBPrNMUD4pngj",
  "key12": "3ZuCbSyYYyvdK8nBTcGKG2feEBJ6QesdyZN8y3wYfgaYM3E65hdFAgrHFTBLhSqz4CuwhhUB9Ftd3zFTCE2YccHV",
  "key13": "5wv1DdNqsSdpdycNE9tc3QhhUe3UgRvcWP47ZPAnDEuDd3TfSXTsZUyfUuufTEJMyJBPc989Zo4DYMnKJiwkDCHL",
  "key14": "5U1p6TXdyfayPUAKQ82QA8TMcectXgsLKH5uN66bocukySVMPq5EXb4sUT4M2qfuM5rSXkNCB8mmbqRkdFHnKwm8",
  "key15": "p7Qqer3jAhcHdLvj6Z7NWj1kk8PSY8An4LAhgKYtKnehZTbQErk6U1TmALLtmRZhTxhy7CWouo8vXcncADh3MDp",
  "key16": "2Jo79kwiDyVLdPPTccPUSbfWkcUv3fW5hA51jvk8CB83DHfNzVnEDYzuBonKEbXwmU474shUBKFxtpxbP5wTcmWJ",
  "key17": "2vAPunRPxCqkRWZ4LAFH9HNVFi2uxthk1s4MDUK33ev9MacUadbhpmKnS4xBvAsqY3r6TPJDGMCXAjWqU1AiX5N",
  "key18": "3GY7NYTEHCXyqgz175aUfYfxqPZ1NaHQANRQYx6PukVgjjWEBBTn4MshJx9CzPceXGy82miRJ1RFGtdoJhKig9H",
  "key19": "3Xgt4xKdE1oswNmFKRRzvZTR3GUDchFhAP2SVwuV6GU4TktK5Qjp2cyCmfdaNnWD6rJS9uYLExbvGymy8UnjEmAT",
  "key20": "1w2q8kWDU4nBKNp3NDMe4zQYu5Mvt7mZiRvbdiaDYfwk9fA8kWAHZQp6C6nxgG7WrBvQYmAA17u7UoyPXsXLR4x",
  "key21": "2CtJwt5AH2pQQ8M1gFhvgonjMchh31JWhu81NDnuU5QuzKFTccA7tZe1Z44xigKcj6htv1HDQiYEhuEJCQMQBUaY",
  "key22": "6pVDEhE3z8t5HxtCBzEPukT56MPAYy27qDFeWPM8p3mGeFPYjNxifUsj3Z7YqaLK4UiEiX2XaLvhZ4zj1V5wQ7Y",
  "key23": "2Mcvf1NjQPDaURmUfrsxGbgeSUjdXeoFiGsAXuvWf2Zbfr1nZckn1KNQGQJoqqS81NcKDNrLGZarvq9Yc57Sen3z",
  "key24": "3er8Ev3eFY2sNDTESFrZLcyXPb93GQUPufRfYipBCvXs1VkLYup6Bn8Pzj7A2DtExCFiffQnWmo9PPeHXSH9xZQG",
  "key25": "2KmS5jetSf2WLC4WeY6NHAq97qiGyHkVxYDY1DowG9qwrZKemCbFDa876Lb8QaGRwDuR7wJfzx9DucD4x3KvF7JX",
  "key26": "53ke7jfe3Fmm5JPdBHTBNfYEGmZ877bh3UHiAsaY24MpTbeN5bwz7ABMd7LGt8nJ7WwErBKTvjLbXEYDMzgjB3Hi",
  "key27": "2szB6bVjRRg2hPoRQRenDxDvL1oBkd7PWQQjV2mNyuTmpCM3F89jY4em9RE1wkCeN5EfL7EKHDAwDPpA9a2G4pag",
  "key28": "4bPaBkTiCKLiRABQTqFhfin75PnBoLD95EJfhRoxkfgbEJyDSntzdrPoEwh2T53EwUvKSguHpDmAx54uUWHNczhK",
  "key29": "4afZ3uv9RdxmMkZa15uvPc1f9rv46G78RLFMX37mC64wYKSZdN9kCtddrAF2C2jcPworsaaQPApZ97AhoJZ4wfYK",
  "key30": "4vc5AyVrya7UhsNYX9McsyeHiQrVqgBfv2GLdvQ2Mpz9fH8KhhEQQX4JAf95hPDRXksuPsJhFvKnbQPaafzZbKpF",
  "key31": "o7YFnxxGWx69QHt5RReNzpXZa13EwYY9Y29bvxW7WkdDE9fwBtaf3pVy5hqzWbmLdNh34fwFSiQLXTqH2jha9Rb",
  "key32": "2uRJbJS6BdDXZEXVio61useg3AHFQVyhN1LqbWz38KuGRDW8DQ9UtUkEt3bjiTxWJYRxqrzQruDedEDmkRumEmUW",
  "key33": "5vH1LfTFg7aFHtNykrzU1QRZ77aTrTDWzkXA8sESMadVPm32ori9cSKY6EPqho3G2KANLmMhcmstxpCe1mzGxRQg",
  "key34": "3ZBLD3k8i9AYQs9WE9afBt8GMQtQ6z5s4isRCsr7EKyfftcoNrYYd922HASsyQNPnRQsrDUL2vyCaJ53s8pUebYo",
  "key35": "3qUBQh3MTg2ByMRptddexqbPx4VdN8JDyocm5BwYPLD35qM3dk9n2qHnhkAak5XRztbkPWt4oaXqA68DNTquqm4U"
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
