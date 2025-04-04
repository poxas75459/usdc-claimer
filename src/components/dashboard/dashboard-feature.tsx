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
    "KySzgVDZ6eDBumRn7eckeqh1AV4PpcSqi9fLrcNzT8ABy1zr2bNinSz7VRKB4r5bQwRAhU2FMPeLpuz2eKKVZY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AurfsHiq2UUzbepQvkCvbSXzdr7j1DTfv4u8Z5Ukfqet4h55M4jwHHRjUa3gzMxnbdnWaaNHHymug5FwJzGGyTG",
  "key1": "EJ8fZtrnSqLT5E7sadfexcNxEgviDt6mXFhiKi1SG3dnNeorfDkrxWbhMCi5YuV2aF6241bmA9LdZTcGejxr2eh",
  "key2": "2SFmQFPoFzJx5W442XoYRVxQuwXwV1wd4YVXb1eT17iQv3G5N1RuvrHCCkwHN8Qy3WVtLdUtcDYMER7U861L2f9r",
  "key3": "jtvwsABzCx6Q2J7YFJAic2gVy11d4zyBM28wScXCcoqNVaz5vbmmW9esPFE3V2aBqyFb1ERKXFor5mn6YwZZkS8",
  "key4": "qCFTxqRXzom7f7yXpzBKTviWr6dwR9nN4fWiRihnKB5Bt3Mmz3V1NcbsfvMAtbX2PgxnAWGSLFKjw1BSbGTZhvU",
  "key5": "5bVpewdsRc7gLqSyMoMvfStT4My2qVHg5RLgGja74ud5DcG2BkursEFdirHdEHBurRjDFXQr3q5PytxCypvXVWqS",
  "key6": "2Dbzeoq1w8LDUoA5vsfKV6mfDqE4F3kt8AkFnjxLmaW93tUMoGpobXquVruBUq929ZF7yjq61KTSohEWXt3tr4wv",
  "key7": "4QNUbQGxveGwznz5mR4ukUf57aQ6xNKiQYw5n4hrMCghWdHBH5qpLZSEC3o8M2SED4SPrtSUFQhn4rV8suCLijxK",
  "key8": "4ZbpAFPavVhAicKNjnpNoeq6kAt4HUaVwpkxxhM4re27bYiDw2JxnFV2V79cCwU4ecDijJW2Xq9SzFtuU9q4f31g",
  "key9": "39LEfHP1eddc5xiEAUJnrXnTuSKuW9u3Lu5gwwv1zoY91LKHSCei7L5KcQGX7zkffLE6jHMPwUyQbXFxSG3NMUER",
  "key10": "2vpy7kC397TeevYTdk7UKNRK4XXw46Hd4w7dfwprYujsznJHjY49sGP27FkFHDwD4UBgxPdngTs9ce5Dxp64Vsce",
  "key11": "3dGdS9fNPmeQrSrmBS9FfjUWhvYVBFSktBbtFGCFKX3SoYi7kJgYmmEgKNrtusAbUnrU2yx582uugtgLBwMoBv3W",
  "key12": "2RyLbRpoHZX8n75MNm8W63bqVmwuK2Qis99AhEncwJxn6DYWCNyHhL6aN5nBq2ZTrnozikc8a2P2aD6Fa8yp7Lii",
  "key13": "9ze9PyRjZTeuBkirqDzWGXnsqaBSUDE6xvp62mTW1xQrbF7LFa9pueYKQhRgh64Ap6s7QBbe9nssEbW1EAC6uCm",
  "key14": "54V98r8AsxjeyELf9RcPEQ1UoqXzVnuwNTQVRgohuLxMFAAC7zKXvCBgoA7ZTSLFriE1NVsMYennyxES4Uq5abdh",
  "key15": "5uzThgL8hY8dJtdVtxkZN749qX2t8dk9eVurSBgd7J7Lzc2aWLLg8qfgSvDhrXkkvE251Kb8cDrJi6PgSs6i5oX3",
  "key16": "4HC5tnt62fb7wytjiDkM9SEE25NfugAMhoAyW18iWcDPmGdRBUy9b36FrvL8qeukTGwajeFitrYc9BdPGU9N321h",
  "key17": "4nLvR61DT5xPFtr8X8ENzXioova4aRtKHaovhVdB86Q1fA7Bvy5TYhA4FpGC2jKDEfXacTjLhbFecmcFBywXFhUA",
  "key18": "3gCvnfeWD1SSSrAwqmBqmGqyNXxzg4amaNdoHnptDXMQcAv3hSwPhpzGGaFjtvirApGWyURo3Ze8rqzwpTh4Nebp",
  "key19": "4nxXc8BSWNZVyVmELGvmvyuBRTwCCkrMfB3p5Xrjnic3Fw59oFt2os8N68HuozLiyeuTQssWLAUxydoR5YWG62PZ",
  "key20": "5ek7vFLjgDvErnh8725mAH2cWSCoxKSgbSZ7QVFJJo4GnMS6TyjnNyAb5KKLKbp1yqihhB8TcMZF4qjgMpWu66Ue",
  "key21": "3YYc8JswEcLDA1juH8ATwGDtXuBRMPHmczNzXNGwdVvUcKN5yihZft8zpfwwpY9jAqkmZ9t9Hs39qz9KnCJstmAo",
  "key22": "5i5WVJN2887U3v6JnYFdyTwEEBtqFSM4PYC2QZZrnzCBKCPj6CnU7uBHGowqnbnhrXUab1grfUYYB5prwxBkwFXh",
  "key23": "4PFLygHshGbDpkuazoqjVemUHz5JfPdVCmbdEK425XpgPnAZNEFUWiaFooNe1qD6GABS49iEzsz7vuvQhcChSJmu",
  "key24": "4eTrU1Cn63fWxShEdCGVSbB97oJqoBaeBJY4GfjNqWmYRsUi2HEsf896ahDishfojQhHY16f3CYGr6YRQGzeY9BM",
  "key25": "3LhznXMbeTLtL87xscwVTRbmGvtR5u8xURSW8nqSzf7vvbVmyqKrgNAmca73KzwH3CnpvR2psbNWNPUGNtKeaAb6",
  "key26": "5e9zTkjEd3CG4ccNQC1tYpJhx895zCHo9XXHyb535Yeg2Sf6af4fHP3SHq3hG3ppqDdb9JXrnKH395tfvuJ2A4KK",
  "key27": "4hc9eZBKZtRSKUvAk6Djx66rVSPojwDvSczxzoH9AgBWH2jtSPa8FReHgrzu4Zfv6i9skqZZeQqPCXsn7ZvRnMcC",
  "key28": "64Th5kaBgZHNDLKEX1k2bMFjMgAuN2QWWVN5s1a12xx42iJdZynfpdftNiaGQbZLepcUnFGVzcvs6nUoRjaKnKmz",
  "key29": "2oe9W5d6PpRSgPUW5xEKzMD8ejkDKMqaJ8vqQTXdaxCTaURGJHZAgFVuK6F6xELxkEE8EwoQSn8WLUPN29hC7iEN",
  "key30": "4q4zkWBdVKHeBEi2hJqCFsMLNNCEz9mQZUSSWuwt2TF1XQdkZWU68fxQmtqRYQFaj75qGeAXMRf5FzzRkCaTkpDm",
  "key31": "4MaDYY19RHv7djezWTncnMC9sDuCrTgJPkXaDBitFJ9fuzaNC9rqAtbV7xg2thfwqXVrCJ4aDes1nFTgebiJRqfc",
  "key32": "3oUsWzgdApgqWbsKtxhwPAqJgJUM2dqwtpGyULCQF2u2mSh9YQkZt5RxSQ3DXEukTN5FachGm6rsJaYwHh9guKW4",
  "key33": "UySFnSYVLDtxyv645wxAWQUNcQFG3q66uMtC81NXebqBg9Mpwd8THufSHkLXTpRVvWMkVQXeUjTiFY5EwpFLoyP",
  "key34": "dY4AnH6uZ6EmKAFqRcGe455kMLrfhciziakyztJPR3ar1DR6WRzv8WgiDRqZd8sBYRtL9cUrKFHKvSSqPWLut3X",
  "key35": "2C1tEbRZLDmVTZAZM8U6kMr5pRQCzJZ7NeZ7x5jpuC6LWTnYTBsaV55UrGR2EYNtQaFbf3A2nXkGFxLAt4ZqBNQE",
  "key36": "5pcn5tjowCbzoNjbvVYKFAxkj3gRk3Wttic5gWKEENfY3mFrBa7qZRYnq2pjP7R9HYdxjjHLXQLKKJzM2s5mTBqf",
  "key37": "zpVhKF4228KjFJejEvTxEdLcbsE1PBfBh3tqsqPYeDjFfQUuBtmp1HgXzHkb3KvVpLMthdZXrXoGTYoh3BB8bBB",
  "key38": "4YnVocpJiRJYVgHsAy3TwKhJjQnrbArZmoq4KFqEPczS2LYGHEueZKNBdxazpjZeXHL58KaujAX1hJXUQm9NAVZ9",
  "key39": "2JDkdwuMYX6GCui9csRTRiWX6444wsAYGdZmL1yd7aN2coR3BnCHbQH5SRY6tfsiSwqtkAb9NhYrvKqPEA73WU6z"
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
