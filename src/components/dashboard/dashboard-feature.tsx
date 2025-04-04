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
    "3v74NK953drNc8VbmpvvQZC5p6Qq75isTFgFBoUHSNV6Bfkaoq2i7naSrsJWoqP8QzoNSsUkBrSRCPm3i3TWNaTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sijY5rs5FfnejcGkPQ64T7L6PNmKzxvsxrZJ5CrSGZWfiFYnLj66EEaaTy6vM5U6PpSzNZq4rz3WB5RsRtHF3FR",
  "key1": "66Pu8AgM2zxDgpfJ559fBBhwp29kdAynB41NJem5dMPBeHEfdXyxjbq4QqDRAWZoCEW1aLZpauRnT87PzuLbhQp2",
  "key2": "5UN3jTRGLZYbJ6QZYZ36K7E9Yg5giAC3xigDurAiYf4wzEzAnz5H5qBRCezwASUwyaMMQ3pNsyZCKs4nEouEQ3TW",
  "key3": "3VEpfT4QHMVH9JZxAPuLQ3yzhLRFbPdknMPZQLeKcfk7AAJhzKHoC78qiecpZZ3U3R3Mm7esY76c6LVW2ok7b55p",
  "key4": "4Nt2PJw86bDKR6pkHBnVMxyGiGjzMUtL6Lp8CdLnfq47FzarCdNMP44R2Qga4MHDBgN94C9e4Ut9Moth7dgqHweg",
  "key5": "WXRU2B9kXErTkV9yN1X3XXT2sSNvUsM3N7MCp7SwPtFr7tPSqxbF9pV8QggUDWQc2mKRP2cH45BGbYgu6YhYDxy",
  "key6": "5Nunx7DbqcfRnTUvwtF4RkZdtAVgWvwvJu1gHQkDEQXCCcco5CdGhKQUDSmxhpmasv9rWhJmvaapNpUdZZuLHAxr",
  "key7": "4KAFCHudeQDdNRFXjvCUJ6z4P5XXKFfHDchksnZuHdDYvFMftePqUPZRK2msUzhwdxusouwhq1mAKvQsU7ZDRods",
  "key8": "3ZrRuzHM7uBsJ6F794Z9gyj2oxbt2UU1snmEaM2iynKWrGpXXxrREaTGd8wSmmZ843EHtyGKtk6AeAKPzgzJMqVz",
  "key9": "4Lt3zNJoKVm7jbjzgvLepLePoT72qbbZTtycMN68C54rBUSswXWWMekN97nad7n5fMfSXA9swoo2Af411qMJ1gjw",
  "key10": "3dZG2VxRRhy6DAsX3YbbqoKo28CEi83kL79KhcEGZoWZqrYnPJmo8H36BDTWsLUjZ4uNaTEWH4htVX3F2SuVtYd9",
  "key11": "AigEK1K6cged5yVpZHyQaxa6h3HLao58sihmjLQuLA2GQouC6uC2y1ByZuRvsNcCSwH5qAMfBhtanCpHwK7k8gd",
  "key12": "2LinE87zC2XBzXEhK1Pc6ZR5ZgniZDEpjwFSQem1tW8FSwfdpgosa6WBsrBgb2TuUK1boW6h9TpsapPcvBXHzkmW",
  "key13": "LD7NjZsbmecRu1pMFhr2qxiVnT1FKS2ZDADXLSCugLGbPR53qHvM4xZpnMW88t4smYNfqLRzxD9ES2vcEUt4Dxj",
  "key14": "6ZUV3yQvox63EXRMxzw2kUu7UoPAZ7gUjwpotUYfsPsbqKGfhcG2qFSZ7iYcejFjY73oe4oTbgui3pruCcQjFFy",
  "key15": "FDafg2PCtWKGrceiUqGwEy9XTZwpBnb7U7hZvZVweyHHQgSH1SVzqFLoQ1AhErmCuvUpkkLX4hN1NEMTZsDimy5",
  "key16": "4zo5x3M5jD452VTqAiY6JKwkHyKAjFGkt3SiYFBeC4NgNz5SFGWARrao1LyDaaNEHHVmiGphGhweAXqFwu4oS2si",
  "key17": "5HD3qTR9vKUn29Qmk69x1r9QzNJN2oG5heM73EzWgJTZ6UHP9AG81tqTMJkPax9boMVtFZ6aVgDw339DTbEzV3BT",
  "key18": "Mvgv4naE9jdSDSQQdMvhsfqMWasssUsSsdbCSZPGhNnRXbLGnCFcRH861YErLmDk55FRSU6JCoi9EAuthG3jMnt",
  "key19": "3vg7PBagFSjViuQrsoKZgGgDqZwwJk422m2EjCLFsyKXdpeuDpuSNsSwaZN5w7X8zhVt881Jjab126Sx9PotvkPg",
  "key20": "3g9adRjWGXD74twSSaRmYKCj8YEdnoXoCeG3niUjQYNpCxdpT58vMq9Wy6ZWkk2tYR9yvNzUXxdqVXQyUVWs9Sgh",
  "key21": "PCmdCZUzSeFGuPNQXC56pn3fJFaDxc3eBXepUMzSi8qBL2xuiDXhn9DeW3NzbnXCYUFjey9C9oKEXntKXUVNXEo",
  "key22": "4XDh7fGZx7ycEUDesQW3CWeS9Yft5jz4Jbk9aRdtWTtux7Ma9RFUhCRQ2VHLX99DnJ2GM9Yq6NQ9RjotE7RMKG4t",
  "key23": "2qdre3g8j98pTD2PqaCaMQS1skzxmfSo7btik5UkdhGLush3ppGn2e3BXNrqqqvmX7BNR78LojGZQG3g8S6cs7om",
  "key24": "5vs4w3C2znkgN7sYB5T1sUHLDDt1XYLX57B4AUQNdr5aKgcgXGLcLUzZN9MpbRK4odMuuxCY5o8RaPJf1P1yuje4",
  "key25": "4wqg3fZJRP5uAE7MhBvqnGa6RfqvpKMaHJaB2WcNZRs6AWhh5MGV2G3k35cLKe8dGuYvA849DamcAYUY92SMgh63",
  "key26": "4ws79s6NZ7cptHYvt4v2kTLqpEt66w4eao2jVbFv26kr5Ubq1rKJ4d7KcuH2RZFFCTYxd9erejdamHMH9waGpC1G",
  "key27": "32jK6ngKs76o3zYG5tZqrAFsWanMFLNf3aybX82C69Cc2YiwrYVpkDKirymcvmSoi83fzQecvdrMkht19PErPMKw",
  "key28": "3Q6NamPDMFxH3D2i9jkTfxNSTawcvWH5gNi6F6R49yxkzPCfHzvcz96aNkrxCqZ5ji9LL17ud2EyM1yfj7Xn19Na",
  "key29": "4tRPGz9gWmR3azfQ2EWCSvALKWLReqbgw185oHMUvk62v35dAtrC7isAsQLPXirpN5rkn35Ran72wm1NpsVSvft3",
  "key30": "2XK9sSjpSwMXvdud8rLUeyH4LvZHmYTL7piyEDTVsWLPDr8vtsLYcf95pV6YRNszY3q19Pny71kSTEpSF5noQi1C",
  "key31": "3keCDtNCxUbpdVDX8H2nKR8Z9jyrrGRMtNLnXmY9BBYHxkTTbPFDoxYp4LCj6JMgxvbzp5s2Mmk79XN2VGsLJ3Hg",
  "key32": "27mL2V7MLE9CSh5eN37gEBRk9GmTPCGEkehK5dsmCbziBCYUMVUHk5dBVMMFC7eFrAyhqU3qoY2usfaTQnBe419V",
  "key33": "5zojwsPkqfPBETwtndZCNVPz66EPNxM13phqywSVNj1tegYFr36RuVSL2YEuEupMWjMTR6QVNH7ivsZeAcH6oqnQ",
  "key34": "5VhbHrdhtzN5fnbaYqid2LabsSA7M9o8u9tnzFnUyEcXqETKfKa1CiPyZN7mQzuHYTBg4SDJL6re2cHf61b91ncZ",
  "key35": "5QUUNnTEdRGaoBmceuJ9eqz9ej79nphb6ymChyxH7v1WYqF3LJVk7kKGh3QquFzAztYHtX7xteBLQk89A5x8Ho4h"
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
