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
    "xkiuNHH4qZSmjcBzeCTfDTdhDgxobq9BDUZASjfghphCZeqv6QPRNjbzzwCw7ikjHRduQdBA5aff7f9cV4XofgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PTYxwTUTRm5hvsz5dobMia5CvrjKK6WqsK1f5bZnVMpkHZ5WcF4rS5SRNLvec5TToZ6R478N1kSCtaqEduradrr",
  "key1": "4NC2c5EFjpAfC67mkVS9F7erN33Y6CBB37sNUTsknEzTsXhxuBq1Y4YPaeK2Xbg9VqvRC5LspYCMrAwBBFggMbqc",
  "key2": "5hdM9a5P4Ty18orL3ShuJkQztWsj3WqC7TytQPJwKTC84WU11RgaWewamJNBRX2k9Yj2QomeetG5GbznqkhsJWWT",
  "key3": "5Gyq6YAzPqn4QsgmjEjbbPKTvu8bzs3sTVLsW7muntNhZ1MvwJp3sMJ1xhvDmfKaXVd55AdgneqTq5HfAo71AmEP",
  "key4": "4ouZJi4Pypi8b49sRmHLzjTomWXkMxryt1jRzdVrtX8F96E6nDnW9Sz7ycKh5tad75zT4oW3pRSLiRA5ATrNPevT",
  "key5": "4fMAy2v4MUpK1XeiiEV4bL6x4Km6ugbNzL6JrevugX8XLd71vwP2fBExdFznYBabcMdd3SUAGMwgRm2Nz9UF6Rrh",
  "key6": "BUtfuqXHK53jjLVPxg9nTyRRx8D7SErDPuM77DvEvFt78ny87B4zjnALPfifH4FDRw3oN4EqzUzLEtqtvmdtB3h",
  "key7": "5acrdCqShymE6WddvBL5D51TW7xQsBtXmiDxaUakEGRFNjaPZjQujYB3G8to6hr4b22FjSt834Ny3oMzGjPRTeDb",
  "key8": "4sLT1pH1CvV9nr79LwoSJVNUA3PvZKwYyffU2rduUXH5gSwWjtdGqtG1UBic59jtrPDrfhfhLFSPeshstgHPhYtf",
  "key9": "dQdt6bZt4zVu87ZLx6zSeNGSfa6stKau66GCAAWiDeTxDAtaJrktaFSAhrAFW16UjxWXZrTvvNcBp3SW1LbKy6o",
  "key10": "2VeKcARZP1bAiNcxU3rZhpxatbQtCNEBQW1KEbieqx6wySDYVLS4xi1swHhMdxKLo7f5yesqKy3ce7Ksx3zqQ4eU",
  "key11": "a3yLTxCMCw4eqtz5UM7UBmpaVNFb2eLw91BBZLPn5uFuzrqwFNHudKXBLQK16unztrFhwqoY2HBpcMU6di7eJQW",
  "key12": "APj3V4TJMomqEqwm5P3QMeQUUAkdaWGxvAuuQLhtmZtStmjYTTSa6vuru682em81ETZ3CdZRKdc3XtxMGsn6RmD",
  "key13": "juSpVAHizNvPd277csBSk4181qJvXqn2hyPqnrjc9paZXSVPx1TiFEZfCUFkx4APBHDX8JLjK1j4W5zYCtWutWd",
  "key14": "2Wsm33Yk8ZtVZL2qqfdb41Xezy85rb31bhEbSxQTGStRjgGt9LRjGGSUche8c8PjzToxtz5f1gufPmcaBTgFNnwz",
  "key15": "5jTo88Hmo2TapPmkBTvNndCfQ1LPCMjj7pGnUQ9NkiFoY43vUJFYe7dfmUEWsYhPSf6xNELFaC9211ZPUTbmbWDT",
  "key16": "5XUfyCzGsW1SHFvEFSFgZTQAUDsjHsMPP2agiEkFcuyDQt5TxfuPxUpUuu5QumdPPprd5EodaHGHSd7M87nw25fW",
  "key17": "5kQsr7Cw47urMY8N8KhjYms1HqEoCmZBxoBdmNcejargREbxikyNg4Tyc7kSWXoEbp5YXiSHi5SY7DG8YSHvVBLa",
  "key18": "5TmTSAmX1Psp44CTDfqKbzKPiYkNjumVLM1JkTSuKFCG1hzopbicYgqbCsQRbV5MBwGN7E7hgVf5YWuVHjkhnz9h",
  "key19": "scyxNCdoCrN7eqGzP8uMCDQbFjBFtPDDR6UcP4vKrjfbKj6f67ZqCZjAB6x2QQzN4Jngki4Vka4uxUD91vT9KtV",
  "key20": "jrn8GFi248gynt4C5AJY2DscCxukVxX4onYExkPo2fccBwAX5MrKbuR4u4LZMpxooNQMUaXpfWYMLgi84E1pfs7",
  "key21": "2J4Q1QPKccwkaMWLqn4N88UhpK4Ui8oJQTi5X2ERsZEe8f1Mok5MMnJXF1i2qzFenFFw4dPV2Sq5RR6t6VG32aQa",
  "key22": "2Q1EqnYaw8uzTw6pFvoQ3uDKrhsJvaaNVVKyHk2wy8bc86C5JcMrzhtp73eS3rzzwZisvwcQjNStjR2HwcPTk8R7",
  "key23": "3QYeGWZAK4cypRUc58Cxcti9HXKmpdatRWGsVpFAFKS2e8SaJqErre9twqCviy9Z32KGurRuNkyo5y58hiRYQohq",
  "key24": "pzEPgooqmAY32yGaFqXj6BmtoggYWgG9oevUJQqaCXkFbuDX33wmyKDmJw3P8Eh4uobFUbfLiCuuvcjcpv52b2Y",
  "key25": "5NamvfpGW1hJbmKSQDGHNmTXcqawswAJVD6r2kSGtNrEuKBNdukEaYVNHxz5Hjr8zXBhKwCfNWbDa7R57TXXdMgo",
  "key26": "3WuFU7EokAhjqJ1xErmyHhmCACRP5UfvQEVkZaEiSoqBQQV5SCVi2s4LYgkRD4wj1Mx3eYNvQrKPNbnE2JLMEREX"
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
