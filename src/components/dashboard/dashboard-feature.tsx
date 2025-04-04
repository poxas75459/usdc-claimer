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
    "B24Ho2q5zGRmnGekcD7htT78Wh4FntbHU6Hi1LtWm66qZw2bid96vSsPswbdWjU1dzoA7x6YBs4xbW2YAXg4mYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41b1hCXQ7foMGx9bnf38P2kruRF1tPGyXWtJWJ2iRgN2vKUs3gCDt9q4T5n6JKBFWBNwiusJJDLHX97yLdFjyKbD",
  "key1": "2x1Di3sRjWUs72QQkvCfrioK1vUnR2s9KBpJ1QeHH7NE57fa3fFqVrgHuK5diY4m26WG6JyoAbqSUd8P7U1TQWdH",
  "key2": "2BXRum1Bq2a4KDhzR7DTFrrbMs3U8w2TpcBj1jfGtBnjvx5umfy7Y4yjsVc11okjwRHVm7761SHDP7LAFG3vyVFS",
  "key3": "2RBrH1hL3oTPY7eQX7WtG3skA77UWpydJ2czjTgbiVrpsNF917NKsyTpETwumTu3PgFvKDPfhtQZ3gGDVqqnazqf",
  "key4": "2huaMTX9oa9ettG2BJFXAqtUvBTh7H4TMQB9vv4PH8FaBcFZQh9fZQi16s5Wdd3Yi5KsZRiPKTsd51j25rP5pZcw",
  "key5": "4RqQ45SPjCECPnwG63KisYG9ZBnRGGtPU73ZeByZmMevjwhToowiyCkbykocC5nJwtXJck8RzVBHZnCeaZSiWaB4",
  "key6": "3J4Yb7WmixE2dF3eXLmNP2E7jbEodghAehU7mC1naEqZgUUVWgmeJRp3saPa5FDjF3ftewTGCo3YnG7MrGB644wg",
  "key7": "3ddzmDAz8if43WQ1EQ5Jc63THNfTJ2GR3Vc5wM1XhAfBWsfQYvAV5VUrBRC9sZgsKhq4f5hHRFjkEpRxsNvnfSSD",
  "key8": "6jsyp1QarHKLS4s9p8nQvVNxhSLvQK4rbnqkEvMYutRnmkn7MFPhrj1moDteSTHHYDhwy6F7JdWSafQtUdGiXMk",
  "key9": "3pgi9eKLpPVYv32MMwhNBmjhtBjXuSdfr9HqDjpHMKLJQXXRwGnZDSNodLZRbHGZjo6kVzpKro3bJfguQpvdJSzg",
  "key10": "2vCRbpvy9K48gGRmzu2cif35wntNx36sUWwSE4qe56ZUwq4rJig8yV7iX7XLBEEc3wkPR5KBjNzyFL327zsFX3JE",
  "key11": "2ysvRAEUV8B5PHQeMbvi2DR12xeDxZRQkn22SXnoRTZp2xykTfUrw73CknxWZMaa3rTdPoiQ4WYTHHJmxdnum63H",
  "key12": "5u6kwQbAfepfoy7qJGv9yMpTUnp5k31Na6xMKEmktNt2QqGeVpe5YKaGChieh2EtRZ8GBNTMgQdDewGf7LuLcPK6",
  "key13": "3jgfUeJXxXhoE9KycDLrB2mYn1RaYSS7sEtp9bPXyPuLLHpgKusrDDSrUwRkyVdpazbgEK9NgfE5CSiJVNSgMJU2",
  "key14": "4wKo9Gt3qExj6EtjFJ2aGDRyLXURvgzv7j8FwPWLWHbpKzccRyskDJ3EUYbQacBrd3DrjXV1HAGCdCKYhWAaaKof",
  "key15": "5LYcYSuBQPwPLLtW4E9mm3psKKQ1QamCeoDSFhgrx5nHo5U46mSDdXACnoBGJGAHFAZHuKkAuaSbgTHtiKYTtn5k",
  "key16": "4MneB4qS2M2pTaGHKbsqHxdXxFgEDWQLoEd4MVVaYy5BUyak3Q2TkYE8DGm9MnehjawuyrkgGAHZB5ZBG67HmxbJ",
  "key17": "4pSRHK3GxxhJREPQc6mED65YHB75Y3g2SYQSkU7FQmr2jP7zbvdcGa8FTnTVh4T9ZJzq62p4EsQi4fDeaK1JFRVy",
  "key18": "49GcztnEUbMQoRFSgoeVoophwiXo4vEPVYoMwwju7xQzua1bVVDZcTmhdEiLm1fPt3StSvE5x9aoLf9NbbixcAW1",
  "key19": "58ymmfEh7SAcMpj6cn8sza9BMnDwtqM6w4RHd1GJBQfJVd91jVWUoDYHfDdk7vUiYqcZPpJd3Fxp3c3LV5NJegWU",
  "key20": "66Nnf1wXQTCocvhqQKcbsh963scUxTW5wHZrAzxqctGQAhmHSHR8BoBe6kSu4XLLkcQVZueqwdKiywUdjxRzNvVo",
  "key21": "64CXEYezX2k9WaKBE6E744xE7BgkhWJVLKbX1roGjFbeRDc9zF5NbCzjRV6HhgwuqvCAJZwQE4fKA8aGbFPyXwPk",
  "key22": "4TCLuVSSC1F6aYJ4cc7J5ybyd2Gg8GV7Z311w5diz6jdU9ks1Sqwizfe7a6wfWxetikjeqMtcf1cHeeH1wJ4mWSe",
  "key23": "2JkQcNq9rm9dvyy8aMea6ttdo9mVmPaRVNETC1MUBPGfMpPVdiQB4uQVSauAeW2GziPKXLuvkc2VdrU3a4S9xhPp",
  "key24": "3MsEMFndsZ1hSHQYKCjUBuvvxDbRzdjMvRjES8QoFYzj4KCsUPy8VmgZ6vV87y2HkhtYawcF4eW5Gtuqx4z87EaZ",
  "key25": "4nZyMEbZmC2MmEGD5RM6cAPj28aDnM54vSTSiB8nhaxQR8oXRxxosUpnZAX5Dw3ThDF1WChf2U1mPDimsPR2ncak",
  "key26": "5xjwnBpTdeqXdXUDjwGc43TEtBtULHMZozev3BmnqyyTocMLeV3rspD7WH57sAAMFACP6N77E5D5wiPYvSUcocFy",
  "key27": "NVkSu4GLFyWgc81Qnqn8R1gAQjJpZpkKAzQTiFQVpaX7UfsEaN9L9fT6QABcejUy4JnGbN9pWbmBip2HPbtrwwV",
  "key28": "2FnjHuqxQXc5veVhkCbrWwTxKvnzK2DQrzH64PXKLBi5MLGE5meg2vQdWGHNTE6yMjGmwQYHYMJ12h5MwzphTaEZ",
  "key29": "4qjMh6roJL4otD3QVSBpLPbWNFj5QQjupj2uQ2cmzygjJxf2eSyQPuzSDrWSfuo9xZ8azsJGzbkwCKARPbZeGs96",
  "key30": "46BGrTPbSkKDXabniDcKRUq3jVvyvc2pSJttD91C2uAheVsj1D36Dq9vyDMVysG97XYUmxaUZGXWEwQL9BKQnzhW",
  "key31": "2qufgo8M93Tf1g7AeLjkHh2cgh1Vhx1tQrcY1XMH6y7qWMMzCJA8Cqg3PsyPBMajC3G5u6UXJoi548vKza7iFouV",
  "key32": "4SgoNvq79Nx5iRon4fj69QJn9KST5Lps2w2JFtwAY1PLM1boeV1oGyoQUGperxpu6o9gcCuGzCy864etxf9LdeMF",
  "key33": "5HiAboeKhr6icL8MPq2zBSAC6kfVkUVnb5cZDSLAnfgzxazprMjHkzCbTNomzLBPLhSzMVmbDGPiQvZDc1PPEVNX"
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
