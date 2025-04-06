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
    "LLs62zQCSdQf1XHJbpdD3nPBddaPmVcg6wng6Rh2F6TYnXz8zfpm7weEEoFhnsLK1zYi6E45pgtYU8WR4MfcteB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "511E954HcqRHZpoSSTjaihynBQYvNqSs5QMjUp9g1nZp6kdN9FNK4Mw5rNEN8JZTxYu8GB9hBpCbjjqFsR2vtYzq",
  "key1": "x8QvP1MJYYbu9dWnHtpFAKffUCeRASMkL5gVbkgjsceBeekapyv3UqFQk3G9UdzdY8Zt3q9881WBDCNMhkU32vD",
  "key2": "4sfTxgshvWMGsUsJTgBDTizHE95XTKrzKiKhnt8RcouFxKcozuVoffoT3joMdQeFbSiNcrFLS9QHMHEjLb89wkBB",
  "key3": "6d5BDRitk86Yd8JafLzjmbateLSK57t5pFcC39GaMKtH9Ty6WRjbDmxftauWRKVLMvZeAfDvQsncjhM1PCrDuZB",
  "key4": "4mY35wFzbVDuApLr9F1Jnz5farEi6qECADusKY854efGjMUntugnofttNSC1JqjLKsDQcYL7GvH6MjeSU1MQGWhv",
  "key5": "4sLa3LthSRdj9xrH9tsKtzZHKCps2qMneezUBF9Pu2RpHEiQAY6DTLy6N3xKqPKNcbNDWwSW2sjR2qrKgPNF96er",
  "key6": "2CLAiHZ1138wUDqADFTqcuUUJMCxGvRK2FHnrxNpsYPYHzT7sP3EEy7nAYSMSpiFeBHffZud4gGepaGYuRyzwPDV",
  "key7": "mdCBc7Smm48z6vz3NSb7hmNAUfhmgBSfy1mQ7Xx6KqagyEaqAdf5Ej93oj9zvpd6GLdGQTBMUNZKnGpxkh2TUrp",
  "key8": "5uwdKwTVGcp2HSfZGuM1sv27sEiUsfYsVbSecv2fQuzNYH21DzuPv9RPwfzyUB6gxKLNym2Kpas4tSthP5RJwpkc",
  "key9": "2rnko5cdrYBKUQEqRxRCJkhTZwRiJuTrvWUx3Tc8Xr2A9TeGo2yWah8ZxrE2rQUMzWKvZyZwhtSs5Qb6Z9zimUwC",
  "key10": "37C7HihzepyWoMGEa4vv7Lu46WyKnqq2QnXVdqpyKx1oKAitaTaE2DuUbj82wbbDaDqtufzSFVkF8Eek7UmPAo5",
  "key11": "5DTVvQamPLrdw1x8yTfhcbW27htFK8XXHmeZV4Pi3s6Vf1DcKwZZZ3fcHtSYsbUGyDgRrAWTYCodR8cTvuuU1M8q",
  "key12": "3oqXBemxCbc6V7LFka1rEJftz3szR8HZTJKEsuAjLfeqqLgzqmBBtfRZ4cNgLSPYPZp6FPkn2ENknfEDFP2hTder",
  "key13": "4HswDvB4SnydjMGMNREHPzgPpBQyHRTUvQAMGZnnjfdji7NK7csbcfuM3aKgU6r56etQere1iqV1J12t4gQAbgH5",
  "key14": "qSsgUU1g45qHEbb3AxgtvH4QdSRXdagVF1q8cohYjRpdxeTcWHCJFdR84ATdbfpqWNT29jDjttBQNhAKPpAfApT",
  "key15": "5k47PBaG79FvD94cJyw91Kp7Ut1z75SqK12YcyPz8bUtRjGKCrEmS4X63gDrtosJ4LpYdZxb1t1MmRyM1S8nQyqj",
  "key16": "5s4PSBVjgx8Gn7ofWijCZNwn4Snwm1CUiEcLVRYAJV8DouP3o8TwDeXo7nxkqpspaKSoX3zQmsxHFsC4SHaeQYab",
  "key17": "UQ1q8YpEwTuAmivLzgQbb7bFBjDtCqdRVDvDANwEZdPugdFcaKL9jEMyLQNF97HNqQiQ5H1pMfCSKYpLc63pvA7",
  "key18": "2m9UcW52XTeWdfGGNwgoDG446hPw5ayzZdzjyWP5BBLHfDxoQba97NGf2erdjydaGeCbRMK73HzvRwsZMXyvWLBE",
  "key19": "5HL2dg34Q5KmHBKS3rEKdYahCsM6Yw582sirDJwzy55uXskxPKYL16sKMTUxmAm1iq6TKJ3KNgkBc1Byifz9kFU6",
  "key20": "5HhPeTs9vGc5Vu2tGGBtGbkwpMKxFHXtJLVL61rTDoJ9nDF8Em8FJSJ86kDeaPnYCNPbMFznDs1cULpKiVh1jnxx",
  "key21": "3j36dnYZACanp75rK3TniL28xvdWUQyDmXRs5wXKSjEEzotSLChbyGkSp4REqXHPpgkXJFig7XYBfVUmkaDw9RUd",
  "key22": "BMmzCBBQo88c12hHU3tEPKPXRek9ZLSJXUk4PBmumcPHyxxroXyvfG5Zn4brEPYf4R8PvA4HnVrJxwdbcJdrZNk",
  "key23": "5dMm4mntrjG9neXLmx5UeAQ2HHz6BDFWbpvQ3Jk9v6PoRgXThFFjKbbbPrj1NbmJpZtr3iPBEkoLeF49pttXMBcA",
  "key24": "3CkBeJyAVrifCZYjFb893e9kzjpco7rkS5DiFGR49HRLhxRdwxRpEegTgoAG6oTbohvGVNdtfy71eH8N4UpFL85n",
  "key25": "3JwhEzodZcToqq6hQsxLrVkkaWeojCEp3mnHEEZvKByCKvckbHFPbN9VmkgCowTHt52rzzWKwMFnq97JQMsqSNST",
  "key26": "4tfkdez7dGiqrcAen99u2qjpQdJYLVLTnPRpw49iBQuVeNvdpMUUuvEvzPPY8WCw2U5p1Sv26L5Z5t8JFPmVZ8Hu",
  "key27": "4ex3d21gVwKrCW48A79j3i4QF3n4APYEkBAzZYjH58HPeCcLR1KbdtsGecRDe3D4rAUuqJuG7jQaZoeA8dv3Zif5",
  "key28": "66L1iknqqkmuVztxrC9MTeYNt5M8RGeJQ6jAMjBEcqgRDzN7QNGa3rCGGq6VovUZzoJ11Atr8f23kiZNDygXJnLM",
  "key29": "3Yv4UopAhL43fyjTGEgG6yt9PQ79EFPqCZMguWfCgPECtsCMB9DuMHKf6XFaSddcbsa4FYM78yK1XqGFq6zz85iC",
  "key30": "4mjwgsf9FKNvRHdrGKAvMSgbpcPoZ2GWCsM1wSbe2Q4xcBWUXwVMdVGY5yQJomU413UVMEEhVRLVVUUKckba12pk",
  "key31": "5WD1jdgqurkwFmyUcZmHB8YNt5CtUUFdKUoKzkigoUJXfsbeRniBKAWimxQBsg1fNFaHAb82Xjynt5RTqBWbp9dF",
  "key32": "CtguBXuzNL47d39qsk13KqZaYPCHEhmubw49p1SHibJMJBNgDk4JTz4gwPaDrQbX8wXTF67gWyBmTHWrDWaQ1ct",
  "key33": "5U4xN2mHii8DSRLCCCtd5cN3umJ4eYeA57zfZeMvon4s2Zx4Z9deQkYz1ZDU6bAMWzFRyL4xNy8XaeVgteJQLrUY",
  "key34": "3LUvxi2x79C1twKo7bMT26UCrqegew9Pw8JYyeD6ARrNxkPELfTDeEUQHisQfaV64e3EwxhcLSzuSVoy1UNrRczb",
  "key35": "b7Gccu7udzYGmKrHYSGnbBHVuqdFmxAtqewHDwU2NRPqGj1iP4tbwpBqd7f86ESCCi4jbe7C6H6Lnhy91PrtbzD",
  "key36": "5zpeFNsauhVyrJyyY5ncQu9DYAGrkryWAouerUSbJ6biZzHKiX2Xqdxb643BfaUzs1Xn9ATgB4YUvMg8ehpxF2Jz",
  "key37": "491z3ZUVSwcRPXKGJZwzWHWRTUKvMcGVy269ECvaXXWBt2b71DYikeZPQCBDa6AEhWEVWLR64r1QRUQ38kW1WRuV",
  "key38": "5pH7q69yURwo8e5yCeu9kptvrx3VAzJKv6xPLe8CPXBGrytZXBB7WJAdmCaxpxNcxsfpJt4nKBosYusBmiJLNHk7"
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
