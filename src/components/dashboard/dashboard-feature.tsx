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
    "StK6KnMB49v96CuX3VaLXtDNc7F6nbPCshdBniEJTe2STv1dtomPo62aVGpXJvFmMqjQjqBHr1tnoAsgo6cMU3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sV6yjVRypW6RjThDamxox6QvmerfDBoMjeh1h85vXNmTqYrNnibcE3b9kjBNtDY5p2D1pcwbnENUQ6CYyvDQpb",
  "key1": "37equdUK3msbyrU5TQPKYePvdKE6ZriWvfF2uqGwp8iSz9BiFKH6mWgRaWFyQ9ei4NEUN9V9vfL7p3GXkyfvrU7w",
  "key2": "4dZQ9xA8fQDHb4JBw3NRXRNN7w1XSizWRrY2eZm7wnrrqTTVwA4obHHhXW3cbzu5HKydtXikvaerqbUrgW82GQnf",
  "key3": "24WdG9R2AFS5NqQ8bTfA6vwdBK6A1Eo1vsiAbLSLwRZ5dZUXgsu3kAyzM2MdKrRHZdMFtXVdxi1B88CYEWeDikyb",
  "key4": "34akEveXKxZXdhnjvMcACo6BtvMQ8owzt8CA5x5N7FjTCGuABBNBhD99yf16mR4SsuGP6NomfzCoDdqhFaJnDDPg",
  "key5": "4C7crj1AUXevCRxGEMEGWGYtwEFk2YG6TCJogXWg5dhYUiAsJeJ9kkqj1mrRAomua4UhGsBZsfSzLTEcL1Vs6cHB",
  "key6": "5kmyp7NyCpg55j4LNqY7NNk2ZAdqAERWFkhY6cpN5BQzV8mQu2bPFt2wxf4g2pwb1Qs1yxdGKj9wdF3RyiS2A9zJ",
  "key7": "2uFTY43b1vPfBkxHwauFxcCRzgLsTAci6DiLeDhYV2YytzmE2YCgCRHUtfGo2Z6TZysj9TXWwi2TEGcufZ2h3gDJ",
  "key8": "1hpYP9cc4EzwhpiUfnXwpvhCHBeofc1A2NmX4HtNrvp9gXN7x4DCPJDozh4QaqmztAfwCuFWWqy1KydPjTKTL2q",
  "key9": "5LMj1MSRAkAPid5w9mTkrQsQ72ErwxfhUF2t1E9PisXj1yWysMdybcHt7R6zbixqCgdBEd4kv1Ph2vEwkfuh9i5u",
  "key10": "YL8eNadiPXSvCb1vXMD2kNoFjQYAWxxRpzK1RLTVyM2F2auUtpmmJ6tJuxitho9vPyNHuTvsrkmUTBfiqpmhdWH",
  "key11": "5cvmnVB6Zj9uLwicfZRCmNPDhFcELGq4PgdBUcD9W1txssWU4sFXQervCVhtJbDvab3Z5wGkJQVHQKuePjSmAKt6",
  "key12": "58u2QwVEujZdN9PFFLUp1aHKyrw2ubLnVGJH8AuokxiPDEwQkeaQ2jzGuuNeJzBqrNbXa594zXvPHFTssWttFNz5",
  "key13": "5uMP3C1H9vieU3Fb8zRiQzxSR1LxQCKWhtLRsfTMNgJL2FcearaTGQrTqqutH8dtBNWA7dtV8AauHw5qXBkcfZG6",
  "key14": "CJa7zdeqPzMduVFNzzDPjU4kJY4ZStF9DaLr6ecK6NK5Yf6G5pMeAgBHhxcoPvznoZJJiq1CBv7aqRn1DYUWDYv",
  "key15": "2ha6V4kyS9sTbyCaZWPofWJVNCZfrz7h8EtYr7uRsJ2a35eUWmZ29mB5s9zhrVFu1LtroFgRPoUP2aPv8pE8Q9Uc",
  "key16": "2pKcoMZb6svfViASeDckKL77z5SPn8cFRqXHtd2GzP9d9zHtTWnK1dXCyShKNDC7fZyBhZWHxq6BXJXkUMoVrm5b",
  "key17": "3AauDbahySMU5gkviEMGqZZHgqrj2fEGFZikMHM1WUz1TpuEgdgPUSi6pJnSe5yqsPf3cCTVKdrUPWRFxx1t5cc2",
  "key18": "WF1WWXEBAvHX1sCb5h1MpPVN1biMLu13JVqfoqJSUiQuYLT2tAAhGcqiPf8Jhz7HQe2TsfQuwDv26h8F7y9jMNe",
  "key19": "iBx9iPmf8EjSYChMxvSMuWUyoLoUHPcceV9SeqMLjjBujAdU8DcGPTjp5pAx2wjLtiN85HMHUZBfY5qiVmMnuhX",
  "key20": "5E5AJcYoaajRNaD7ytiUZVem8yvNjic53L6faKgdkg58Tudbmgdh46cj72qoQFWGmBDbXrTDdNPwWu8EkPmWo2wW",
  "key21": "ERXnLWUof45YKfW1BEvJWGSG85sELSsX3RGNiUpmc5qzZuxuK9k7jhd6ksMV4jfQRGpvjo25owxuUCjzRofJ5zj",
  "key22": "483XayXRYzSersh9wUY1a71a4GBttXQ2MmvxtmkfimqSkGe4VBVQ473AjB7RhABKuQp9fgyTZarLm9GgynUzRKvP",
  "key23": "4pHbPgYphjvZyJNdmQQ6p6RQvUzVVk9PoMxVhfbBi69UXk3cxmcBy7ptjbuxUGUvAi4idGPi8yvZfae5AXHRv14n",
  "key24": "3saqXksaaNmwVwn7UAog5VbVKaG6CYCZdBarh7CnxBscv1xS7oVXMcmTJSSkcQHF37EH2hC7PcvKexrnmiD6UNuk",
  "key25": "4T2PD69P9BswTGeAJKPH1BdVtz9UJprt3LTNq6jhE1Hghb3M3dNXvo55MF6MQLwEuG7VSSK3D4HsADH2TxEwsnvC",
  "key26": "UyVgTh8jCnGTrut2xXKoXY7MJioYZw5baLyEjUGPQwocfwQhw9iJQBJgkWB4KCBH5nfNvGRy3saMBfc4TGS6peC",
  "key27": "3zP1uicGVjaZSgfByXWYjgGNz2z7nRAy3CtdwwAYMvf2EjysEfFvu1b4UFcJTQhRwGTdDc4a55Tt8UwGh5y1MjDj",
  "key28": "5qxnY1LdT33u9d1WLgyafALu1yZJFqXVrPmSGsxs6WtH6oidPfNAYkrJbwji9T1ytU1gW4Nv799d6HNN4p7PwNZ3"
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
