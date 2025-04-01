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
    "62F6jq2MykgMRJCegSBH5ujK24nNwSaxRn8kMd1u3HanRi5xUT3rJbGndy15yJNUgwH5EBM7Qi87WCB9yVJ1EnJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XHhapLftZbN7wGdzVxGUdVoD1VVpY3yLr3vJFYgAXtFaU2Scz16JNQ1WfK6byubEpDtYMB2deN5SNAp4pUAXYEt",
  "key1": "2rREXfE3kYDfFVu6NzK8xJH6neiYLJTwYsPonivyjf7FXRjppNH295fMmyKT4yTHKDC9FepzPGFfB2r1WoGmsEbe",
  "key2": "62rr54CMcF5y6EAmhu3bEcqdv1u2Yw8ks3cGG3rB8Pki3givNMnWuuweyWDPspS28i6HQ3tmJtZJ1nV5TGtbe84W",
  "key3": "5q3Yk6sy4DdsrDLBiCWFoGgbKsz1PnvrBYXK9Zn7AdDyNAoe3d7ch5t3ESTnCWZAkNrWqF6uLCLg5vNY5pw67nF",
  "key4": "4kBJ4MjZ2mtQQQnEAnzBFLT46QTi83c7V42f6R3RPNovLekXBHbxiYoCdBcRtdvHZpR8pUuQzL5JiAAhYqyL6qWi",
  "key5": "4DTd4qfr6HidAZ6fmoX9AdJBrnrg5gz6LEP3EB8BCX5ngUqjAkcZS4gvp3hg1YHZTmNDiHMegfYUKkc2WEREJZAj",
  "key6": "46VYx2ukMc4n8HGyzSb9txsiWgPaRt6NWNKnjSnEtkLPSb71GDeq7YJCEbM3Uuyj3JEjqe4vv63ZhWRgD7t1eRNb",
  "key7": "3xQZnPMYCBANBS7edkBRwdLEgiJ6cBbzeQQZR7Gbv7BuitPKfkLuZAjoYqRtN7CrTsetParJhXdNam4mXcjSUqyV",
  "key8": "35FrvKBAJB3uwvyFkW2Zd6yav367pEE8aeEaAazck4Rp1mBfh8kdC5BpVNwCGTtYatzRKm6wsusUx4fqXF1iyYFH",
  "key9": "5FGL7rPViBBsdjGQhYh1jKY4inNY5AeZEqLkMrKtvod175bv85xi5vmHnDmAAwrYF3m1m8aFpMGxPTnQPRigmMzC",
  "key10": "4Wq84P2LUNchjEoiGRJb1W5DsE2jtncAA8WXNigg9akbwW21arTvMKxNNBSGgkTejf1S1vHyE16XpkrW5jL6h3zw",
  "key11": "5WpNhGc6n8zrddXSH3rqBTaDdk4mwBbFhCJunQpRZ7F8mSj62jQX3A2NtjYdBdiJ5nkm7RiZGtgadYvYuRzsnHC8",
  "key12": "5j1Vuis46eJDJqqVc35PSJpRR78K4kpJs7MccqQGu9nBKvQ1H7igfLwLWke9VNCAawrb1KCb5KTM4Zip2qdWvQNF",
  "key13": "4uy5fgD65vvTL3uULqTjgjqSc97hz6pPbyJ5RAHN6mDNCWbe1PtYKLpiJzEuwH3PXQBAEqbXFv53hehejdik3BpB",
  "key14": "2fPaqSgH9wvGhFJDxZoeuyC17KzRzYjFGPPuzH62CcPw9FXDxKhzCqsUoccsViC9ecuv7th3ZYUHLR4DdTAmS7Y1",
  "key15": "5srGjs29kEaBdRJPp1Yr4Ekz4uM3ZuEqWn1SdzZ99CS9DfCounSc2eqkRDVvLN1VzTzcMoMkM1vGqeMgUpDZdMiY",
  "key16": "61N8gAAi1zc76z5byjNqfbx1MMvzdHMyDZBiQFJcYNqMnwok9tk6dLiVx7GZsdLE5UUyKs924q1mdYSWCArzxR3o",
  "key17": "cESZwKnibbGW6FLgCwQQj35i8ERyvZwrsuA2aC5rRMbR7LHLnEEfLxgjLEr3ihV2J9NcXBb7wWppBEaWUxrcmS7",
  "key18": "57xw7Vnfov6vFMikmhehXKMoQCYVU5V1eLTnYqRZ2VErSKkps1gezA1LXCmMwTAAWd3RfNdY2r8xp3ZeMR4UEoGu",
  "key19": "5H6KcLHjn4VYyHVhJ1JcYFHF1PoHF1cueVPmz5aHpPCurVq7fY4h2ku1rJSHRtPZT4ke4oT3v2dgyfhkU1WBxicX",
  "key20": "5fwkaMZMq9rSwb643ZU9LJmcejwoNptRhyA43Efg1LWkUoecNzQ8yXBCs7CEoc4AtCuzqdkrnf2RRxsyUTcpygYi",
  "key21": "HTAoG1NgkRqBFghwT6qCme19BRtLeaBdmaooZTR1t3Xf5DhMSMDZdLx4zziP5uLs97MPdc8JQSK5BfxFiVN6C9S",
  "key22": "5mxiyD4QrixXdvoMcMS3TURgUFoV8Xy2mK4mMriuKfBDbBbA6w2N9HwYe2D2hj57ob4CD2Jt4qnSAZQishB74BZX",
  "key23": "5CVRgbcqzamapxfMwos8zGbUjGxSEMb6cunm2kpn5AtFpspDu5R9RBge1fMxUifmCJXq3d4TxgoKSXNndEDMMN1e",
  "key24": "2VJBXSsMeLtBPa8haByCWpoJAG1FESnbr7uDE2kNJidMEaH6AXDevrNMhPSZRRaKWvcPRo31NR3ymPPuCq6JeFgb",
  "key25": "38MJoRWZ8WHAtvD4hu1xEUBSswaPzBs5UfqN3KDjvk8e74DmVfLTgVfVc87oHhRVKhPz7Xkugt9mMzNno9W4zxdp",
  "key26": "2QouH5WJi5EkHyLGE1Dyv8dJUR25fdFvNSpSGKBXCNdZpNM5iYLm7BdGDc9tZNsmWV6RX5b68RWMib38p8roXiZv"
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
