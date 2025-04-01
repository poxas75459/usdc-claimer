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
    "5djvFUdttJxq8DQAFYzQLvgJRDUjLmNMtLLd4noAD3rJoovhHmPr3n2bSzLspLsRzocCHeQGXuc5Ch1845CSk6jA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LhsgiwvzjPyNhA7LFiThhpfhfoSi41Eu83FXpC1MKc23gGEX18p2fjjMwhmcKLNGNhW6FESWbmE8iithDbC9fgx",
  "key1": "2uY3WKkDPZE5m4bpVF4M9zQVDBFsTeX54h4aTL8xdrMFikhrsAoiYWdcUEanVgFt8rHCDbYsjHfMcfSGQ3CN3miL",
  "key2": "3huTzt7k5Vz4yLbmUMRHW4ReMKL1PR87q4BU5ob6n7PE5nVi6pbvNAVqGugqCLBNmAy8VCDNQege4LNAnt8mEGPx",
  "key3": "4YETnvfZf3jSMmuAtfXK4Tw4WRWiWCaR6AjXDVizseYKcm1BWvWfNY4GXkKPz6KzgQaevFgdE81g8rpDNWiw6o1A",
  "key4": "3TfUWqfTe7kMUurnxjSiUG9AhGMpv4iUodXRs5SU2MXZ89A1GgttnjY4X9Bz3eCDA2epZaWrRzoC1hpuYC3FYwNh",
  "key5": "UJUcNPitpxyxabQxaCbCaVgByRHwePkg4VW7z1VXph1fk5ou6YJv37HnfWMN29cZ2cVmPLzcwG8MbpopS3pAayw",
  "key6": "2xUA9SC2QF4VkLysgfxGiMT6tNkAas6gQCevVKfLMjSVnF6nUKT5Rmh3RsttjEkv5GMRWSUwAkLRrhc7z995Gjka",
  "key7": "5oWy7M1AzG1fQFPt7mE8fm3LBa2MfEqScK2M4N1bT4HdWEiR9bg4i88PZyfvyo1qfUbZ7uKEyLwCmG4VgdcKX7wB",
  "key8": "4sBkMDT612LPCoXiswDuXjzQX3EEn3EQa1D2CccCDNDMhxgsgvE7jQCFGQdH1qwRdhuqkeNGqHw1dT82QXqkcMPH",
  "key9": "eucbEDbVCQxXKb4g7iQnHPHUW2YJu4GycniiTpJyp2gmHPPd9vgwqwPqPfxxssUrcDAnpCffdWYQpTWbemMKvih",
  "key10": "2bnXqGrbyUjWYudiLLNVZryipfWBDs8M5tv17mphoAD7y1332Ad2Nw47Ntm9DMagPUwp3EzGYCu3qGpofSJijWs4",
  "key11": "2sWHc6QD2QjKb5hAgQyzwLSyZDtb9UKEdyjLSVVR8L4e993Lk442xMqRFY2PLS6BfRUB8j77S8EwDFmgDBGu6Rge",
  "key12": "5bMZqQAz5SN2QHDDRNSYJ58q6MXua3vJy7Jj2UQ55LXMaTpcSgQZU5PV6e64pxQsFppHcBxBXJAc2LW7FfrmfA2u",
  "key13": "KJAjK7Bv7aPy6kM77w1bu83rdZoedVdS8BhFDvZmBSxva2xA5X8p9ZgtBbt7LamfR793cTYymKprLR4QvysFCMA",
  "key14": "4BnRNnNvriEcHFWrgRZ7oHWPnoBAbcSdEWU3DD4WBwQkAnx7qmXdRQnCw3SHN4myakE1J8XV6SeCCCuuDE7uaiq3",
  "key15": "4mUzCYxgkQXH3wbFZuM4eq41kwcBTWp9eh9fhy8xUL4MngYnog5AUvFeP6HZH6GQoWsyLQrvfsyM4ftB9AsFsHtJ",
  "key16": "2uT8biH7WdvVnUNCXE22XE8dKxrwwHNkSYPWJkJVooP3sNjc2vBjxzBgbirks4smmE12fzTU7gRj59cqBhWoTYkN",
  "key17": "3xwzEe8An4KxhgzNHH3wAa1tMd4MnU498if8fDNtkKTRRhipx6LaVhK8CMYnteE9esinV4sMXZKuwjUBzpsUoq1b",
  "key18": "4GXFJTyo6tzL1oLFjZbyWmrhu5YhcRRxtDfSkgGqw2598cyvtq87yp3LwYuSCwdwuFU1gesmteeQahQDR26dauT6",
  "key19": "5Vzks2JS6vbtj7bJNJP5J7JkG1XHPdibhMNZTdS1bbLeCR9CEGB9MSUjWFNCocCAEZ6tFNcfNUiLG67wbDCFpSPR",
  "key20": "4xrKxeeQPJLdWZKKKgwV5bWyeL8vXmMA97x7oQm9ob6qw2FSJ4Dawvr1kmp6AdfVB7bDwfT1A8bFCZRamFfibBvG",
  "key21": "3Whi9wfjVQTWkSy7ADPCC7WwPTVLeY4iawUtaCssRoWepSN4KFjPKr2wPZKftwxTrKGb7GgVq5moWqyP1PvgB5od",
  "key22": "4VsX7g4NuQc9MGXsPugLNUYnA1i3GE4nDyupiWQp4pzq6kvzGCa2e86ooPD2dH6xu6HnQBjSPX7P4o3RfJkBpTPr",
  "key23": "2TqtwzoNMMoMRUUBXa1vA4fnNoAqtE5MyWwh4kMFhF2VwgcPkMtS3uLKZ6nus64vS8wfhZJY3B91LYG98T5rqKKn",
  "key24": "5Z9HRuptUFrRFDCA9GbUzcReP78qUA82Hkxpr3VzXC4yCymYsri7PPA6MjimVVLDMV6u6Q6GgYC3Xbt9PyjfedNU",
  "key25": "5nqfjvWxt8zarjByM23oFqzzeUEC3exwQvWUp77BkJfdHEFJmgL4RaTMtmmX6z1KadpXk3ZMFHUYo4uYkpPgeccr",
  "key26": "1mXxZBvsAPwxAAoBXDSxF7V7RXDbkPGprru3GvTLZxpQetE2w65PbnkW1jsXzmcpxaABbhFiw7PT6jrHXqZVV89",
  "key27": "3ZvQTd1TUoq5A4KByvtjAtZJ45gztKeC67nef9XY7nFh4ovL84McX9yng7YZ61DzXLg51VVhtf3bTSbGMctSWMJH",
  "key28": "2qg16y7ei9yE7g94XKLgSEtkGtYtdNcNJskYzUuNsozbkvVZhvorBBVVWR2M1PFhSbsQLQ1JCr58xC1EWRrUi2zS",
  "key29": "m5QmV1vs58zUZpijR49QjJbQppwY1SYwxDDqwVdRRxBiztDgXJjUN2FRjxoWmmutgnCpeywAgTfmRFFtbHNA5vf",
  "key30": "3qzzzbXUZWKJ1CFMMnpgHh15anydW4y1WwgzkaaZgvEjoiYCYeRJ5PcmqzM5a1BCit2FvmyCmGCj89gVr3YP49ME",
  "key31": "3eGVHjDDyLbP8YdnWezGvBQ5j7WSb1ZrQKDRqSpA8ToSLpX1EKGLzMoZMtCaqWSN9c41HY3sYSjdttz93R7T4s1a",
  "key32": "vsub8eDyC4MzECJymrYuzowhtM8PLWdmZLEwx9k6ryNmfphbZHCR61zSuZAEeSqWCaEvt9gSmdidr2y5Gzcdihc",
  "key33": "24jbCma8xGqzGHULhFccSmvFi9j5ARbVLtmeSrddCKRPAmWYbyfoynPPHSTkCapURtDf1StMJK3vu6zt1ngjpCH8",
  "key34": "326kEKC4B61cCcuimFzizryHGTMVeCTcTQYY5SvLsw4hBZsPPnd18QewPgk7Fu21u9U5XJLMfDT4LAdqmjGra3zE",
  "key35": "5HV4Us3jcrRzJYxBCL372VkSv7So66GgLoghnTTnr6cnSgScQw45Y7QvUCLwJBmhahr66cUVjWicsDaqRwDMHyhs",
  "key36": "4hQePo6NUvyWaSuApFKb3QM7DKquwaca8EVDYeTyhgdUBWMBSY7fvACXSP9EnHCZHRBVRgWAkfGAJ2rhSYgwNy4E",
  "key37": "5w2wZnxzVccPNhxFLXwRzf9XvqPD65Y51pEx4fTMPMWCyDWeTe2mMgWLtMJNqRiA6K83tgozjHiHj2svQPRb1k9A",
  "key38": "47meLCW7MkPK5x1XgGH8qXwSBAxRYPFxEbWn6LGsoEZbPsKaRUvsyqnLMHNwrDiqhMqxbviB7cjLQ2fkKHPzvvif"
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
