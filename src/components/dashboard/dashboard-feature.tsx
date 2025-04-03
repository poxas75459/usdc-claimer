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
    "4FoveG8kYqsANVZhxkJgY1t8j4WPS5eJmKSUDPxMWmUimt55m1iPzeSA7YrbKTPN78TwWaSR1W3ScBpewf7x9Wku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkvNRC7xqBjU6NnapaPPLiSFWoVmtcFs9b4EZY91Lp7uDbS4gLXCiUkJi4sLSV5xpZKJgSfezVF54XW8hMmkmGe",
  "key1": "2D9JaPoxE7s1ySyj22CXzhdR4svDEEgcsAuC8uN4sSqhKmuhteemSh2GGKbbBnMfZtRfxEaSzi5WS9aqBjtk1WCU",
  "key2": "64GZyHsZee4FdhUmmZWAnbmDtZNZtBC649BfG6DC3EaCdifac52KxFWXG9ytNpQBsohfB13R46VjjTzMMicoKQ2t",
  "key3": "2MwcTmzqtyGRUYYPTpLebbjtrmqcvmW2egoo97G6onmrijs1Pssy98GVf88vamEnwpjPDrJvEsRbBbRjKNyf6V56",
  "key4": "4iopZ5NDtf6vkryBp2z9fcPyjG4ebgGJjzDaGaq9zQrPrBjSsZRKRqjZ9FsEo39d1XnMYRPFD1dHNCN33pteHMzJ",
  "key5": "5D3Pv4VMCVT5UZfg3rhY94djHsjSwG36FBAWWnL1hH8Tgf5fxLrErEL9FsyB5ro8ye9ft34Hm282N5zzxqft6tMh",
  "key6": "2pZbSC9EPh6FKJB3HzA2BiXs7gXGnERyw7VQb8ZRi4Dvv8cAjqb7jUgwdeddY67v9ELXShqwyubQZFaKLqbjydoe",
  "key7": "37DfcQama5tQFkPtFaDsZnqMBbLnBMzun6vCfremXui26DxmeX3Bo5g3KfLqxDa1BS5ukBoC5F73Ujmf6ATWVBUj",
  "key8": "5NXw9ARnVRTATQSgLFCWbSio3JJVTEGgk6J8kpR61zQ7Bdop2Vz25gQ4DPgkMndqc5rUV4L7R2V19Ehq3yegxZX",
  "key9": "ze6mbm1Y6mGcHjcdtf7osZmmXMgzQrndNXK3auk9jrEkxWQ7oVfs1YXALRSxtsLivjqSNrxjoQ3jSJqFCuapeHo",
  "key10": "4gvpF99Y8VsPhsY35hoCMPmf9A1FqbyofrSc3LwFRmFANoKFDhtAeasFi53g56roTkfb2UdiSC23ojd5TB1BidWN",
  "key11": "2jSeFj47ANY3NTvCkn9jFrr7ssYL6kVcRhn7eSA9bGjc2K38Y97J8Gmbyd5vJx2dWGjGH987T9WA5D3WDKqA9YuA",
  "key12": "5AVeg4ynSiicj8gYm7jyt17RtrBpiVBfHTwHno8fj2iDJeqKnZ5UhEK1oBMxc9zCvMFoA5373XtjFG1ssRdgBrm3",
  "key13": "9q5ok4b7QFHoePHGo48EGZyoBUop7sZSMDQYJXfM1cXVm4hWev3ZJTRDyjUFcXrUgdc7Z1sAJrrtjx5WQRwDY9d",
  "key14": "34sU1G5tpatfiFhro8vJptd56TRJtsXJDTvbNKyZS118sYbzVWrXeWntbrwN8cbEh7ctViJbf2DGfQjdjYDKwtuG",
  "key15": "4rftSYkscLWckmYk9shfuQ9yhBd7eueJ1p4aDbThrd5NfW6SpwAeYLPhF9kDCbQxjNvHGcFdzECzWwZ8Bzz5KMAa",
  "key16": "5t2CdbzowTr446x1zVjmvpVGyW28BCRSxZEWRdVzmy5CbNhBbWzVbwxGvt7b4QQcEkRYEu1fgQu8yvJ8CvPgXc46",
  "key17": "4JYq9nZEFuDc79GwFvw8KYqsbekbfppHzatmn6Zr6XQEqg849fKgH3vP7ByW9moYXgo3Tu9roLnyCXazTyeyFhM9",
  "key18": "5r7MENxFcbtGtodJ5A8xV9fABz79CXysitLPqqSwKqKf9GwB53wdb1ne6WPjXbEZFCDyvjFK12zZRmSN3czYS1hA",
  "key19": "5nogNwC6oHuGqyvy5UAqfmjSZQPiNHbwmBT9GRgxJfVcmTzK6c7rnLxNwqZLJAR7LkVfr1oecDLs8Q6msi15SSee",
  "key20": "1aAwjNWCcu9ZtZwuM1suSDM3Y7riPh2EraXSkjqG2b4EvA3vXnxD7gTXgq8V6jDKT1jmWofKvQVUU2XqbQz9syi",
  "key21": "pruwMuowkBvQdyuNuCPDbtRTacRsdtqZRsrmfKyA1b4h65T7a3bDCCngj3Q1uqeFrnYHyRpBfUd4H69qRds7HEG",
  "key22": "5MBw5XxhmdFvewqDWNDUVBMGRPN24CzDAsHtmxo3BfZcT5i7avXf8qkDRCG3mnrpj1UaZJedtvtd18dj91bjEDm5",
  "key23": "BasyDYEmwpsFicLKZgmGvxEaM8YCXAzwcM1RdSLxBkjkSyzwRYnKkdgCEHGffYmSdY7kxBGvt9WeYXNaLwoEsnx",
  "key24": "5N9jjXdSenJXEWGBFiTepuKmMXoETAARFe5tcmv3wQ2neN1WALZW2ptXQpEgummsgWeUWK1cBTG1ZzRRLaVeo45d",
  "key25": "54HCE7uDRCh2zRNCiATRt7Uq38Txmsx4NrxtBmBTx8ntcGZ5LVQf2fx8dcAJwSZ6M7tegFvuhbYeWVK9hUaxrnAr",
  "key26": "5LHuhPtuFji9LprHiyxQ796V2X78fgnvM5gzQfHYKBkZ2DTELKj4NurNL8W8hopB6J8iZfkjb46EdN6jtoSa4vyq",
  "key27": "3tiDHgBV38JsDZwbCuADcoFEWdybumSvnbspjnGhSJeSzZiVDzFuyKvJBdeSqyvCKiCA5Scbo3nHPJogWkh4pLk7",
  "key28": "4vVym2BVxddn4o3d97wj4JDX4dA7df3pwtwRwzQDScbbYDemoW5Gf6Z8n7jFZJ1YpHet95hapXWnj9xCJeU9vzGh",
  "key29": "2NbetZSG9njTg47h84sKrayUb6QsJwoV1bTmDvvasmWuP6tvPcxxyy9ozAMF5LdamSMPuXhtA5Ugp4fbfERxsFM7",
  "key30": "551mpkLgU27YKeYf6qUvfs2oPBzCtManogaZpdGGYrxUoS21mmZUcoP3s2nWcfoWTXUfo55Hf9NLHZRr5ysRpqqk"
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
