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
    "EwFVgykpJo2fqh1L3fw3FQUuZb2XzYt3o2ebpdEC4xEvD8n6zkqEG84ixR353TG9XL9cTygJXKfjrGpCBs7d29M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXrgV2r8UGWa1P2pvJ4XsfPzmCNsKhd8p8T1qyavLGKCy3kELdkcWHYznh1g4U4dCQit9XADpLUyGPGS5zRBUrG",
  "key1": "5MjzLTKr32bStJ1SK3KnzmGE45fm95AMnzMDkM71GjJ2yVoGbvPfyX84Kh8kZ2vhpUYGPEuxBb6ffguG4qiysRTp",
  "key2": "2Vt72wSbNJ6R2ZvzbRAioroHSMz1DaKDrwT3UhEaGShGvDSqdQdfBnfeGcTzz2GnE1uzoM5DZc6Afm5gHRZWZLwa",
  "key3": "Lev1ZoKqVpBv9wu6BiAKjp4bAKYpm6LyJBU27iVyotUPChacjan3MsWvtecjNuRypPtAgEH3YWPRHST98DFmgdN",
  "key4": "3hPuMZGkYWm5gsBuzaEKf1jk1G9THct6B14RBBoqSeGYejEYpeFM1vdELXDgFjGTPJtvSP1SPWBVkhybQYBWEUZs",
  "key5": "5inAWLSg8GZ63TQJbe6S8d97YwxSXjxh5YEfCjURYYM867FSr78r7fw2KaeDaYe32AaFrM1iQcgBPVSxGmKDWeMg",
  "key6": "5tKFcw5FSPdBDbQ4C72Et2rsjRjBpRReycrqFos64x4uFT7PrrKoNMkExNWmavjWazFVndueuytdvwU2LAvxjojD",
  "key7": "4kKY5pcSrrJEVZvmxwEc5WqCNYUw2qciQVae7Md9V43qFHKn4VHrtFiBbtE5qBi4PTProAmMrJ3WqDptn3eCFrfh",
  "key8": "3ndaAEoDkioJiuDn5mADhqiuxijFtg4XtvVQmWfrq2pW845UmWzd6EBw6nVZVauTTXjDJw3aKqrNKwuxdBf7MLpr",
  "key9": "59G3Tv2QUm9RUHFtwZofAjeJREErA5ANJiRhjw2GJLhecx8gkQYPJ2Ry4XAwaBZ3P9YDx6PDzpSzsDV2vdr5yhGr",
  "key10": "4WrxPQ978g9hv5erxJ6b6921BGTgJPK25cfFY3fYhnwAGHGa3jZWdkCwU2hjoic3FcxEJTB2bJTWbPHcWFc3H5ig",
  "key11": "5ZZ4QqfWD99YpLQfK2barZb75NL1fanoKXAymijszw5JsuTtuygPptfKW7G3QBDc8Ni4u795yFj8EbB6L7nB2Ue7",
  "key12": "4fQm92NN5JsfxcaohDqeyLLkQBZsTXRiAKmjfc364CKJVRyeJauaR8Yc9BXj8Pn1WJNNgh9BaTsrsucaVqzSH8Dr",
  "key13": "5QKz6kX2vjn98cZeGtrd2U8HJxDuECdof3rQYpwAgjYgBmqMob2f6nUB3AYNDASteUpQnirhcmScvzo6oGjycVek",
  "key14": "3wmXjnFeEvjisi7ChiQD3Cwv9YEzdMwJ65WTFEzRFc2CAQBrSwcUAJL3nPfMoQAzDirD1ScAW4m8mTG7ChiD7abf",
  "key15": "5wUA6BG6PWbeUjYVkxYBPd5pGgeN8JEVya5mCMzA1Ne9yvmT7VPawR92DXaJJ6zmcMcY2PBKg5QLcYuUCZoZhUTb",
  "key16": "HXfVbeQhrG1BXr4nhtDnTZ6qRSxSdD5LfDVe5x5M3GN8gPEiSWZd8cz4KPJyQaGvJQekc7T7bynWRG8kfcQNjRw",
  "key17": "swQWvg3BiMf93QWoeBTSt9TyVa7PpQpgpT8EAVRMRFyYY29aJRwkzefVGHCEJx7fpmMJwQ5vQUgfHeE5uYMBxoU",
  "key18": "3uQPHq6ETdvZAe1xGHGSP28QpVTFSfSRRW6W6gFqaQ8aAEA1Z77xG2T8B57Ep3LB3SdZAQhuYQTVdhdG9HvVdj4",
  "key19": "3FvLabBXpnmaThNmtWBxaexguKWB76wmJMzwuprJUDTWF5NVbLhzp8VzdQoPgyTeSChZjSwf84MXER5o6WChYUyi",
  "key20": "3ykHQTjULhDLDuupZ62Ku8or5pt3KvHhixGJu8RXqYgp3fodv8fjzFHQWkYPZhWKNTPjWYDDyWyrpLYM3VfgZX8n",
  "key21": "FKmXgsUSj8qnyUnMuh9ymu5FohZEjd31uNcUsmTs2ZFJAnBYP8KnhVnoxXoM8eYX4qCWSZ82Jcuk5xUMbzgK7Vr",
  "key22": "62VC3FQvQqqGersXnFJKfCQSD3D5moPZx3pQjDtm9tV7d5EUux6Xu5RQBJHdV9U5cxPog9D9yNZrnCLWMwHEcLqC",
  "key23": "eW9y2NHBWGwMXuauGonYCdTBbRkr7YGzKXnuSD3aFFmJaPiHHPjTGPkgRDis7kUDyPRBuyEYsR8k6dNnhGLiWmN",
  "key24": "2DDJAhCVMZaPEevEqxGFjv3mLnDRz1PwwBv5GXssmxQ8S7Hqv1Tr6GvHZy3nDcKVxTLVzf6itgmFvzXrCNLDDCm1",
  "key25": "3BNKghUygXscesQgK5NN63ESCiaoigHLyByCAqRfgcc4S54gziJS3sRseBRuRYNW9uQfQhuS8CDAJz1xbcVF1nym",
  "key26": "3YeQ5UAG1K3buf5Jy2VCdhMiU3EqkLpd1DmrDSLXuTHeDeTaYNoVbCdCPWaJz7UTNMz4KFzfJZxVcWk2bkXPczy5",
  "key27": "3HLdFN8pxCZfqE2Z9Hv2nhbcgPCT6JJe4CU1LGM5TDa3mSt4Rc7Y5qUTBcty4bMaa764qG8MoKnQ9oAAAG7oPkMX",
  "key28": "MRAv6C4YKhKaBYfAzhA62p6P3UVRycPTQuDtEg9hYV2oQDbKspa6jJBsrz7qJ9F3MXfoUpAzi8TMgfVDbmnzFge",
  "key29": "3CLS5wW5z3wpbDT2YN4MPE1mxeDZcYHoXghXevuQgnTPHuwLPgbc5qxR6nSnthYcE5YD7eFGiRy7tiJ7THDp1dy5",
  "key30": "2DVMapPCKgf5HYRFg1dLqrfnKpHgqsZG69XNzE2nrzF5EEhHcjgNKyGy5TerCRhP1Be7d62CHykdfsZkBhonfAGP",
  "key31": "5rGL1oUGoKQymgYRX8TEsMVwXZCtFSivirUzWeuHzy1Nx7fcmKeoU7aix783zqrb8g1ycqduukaJV4qPnGscHeUf",
  "key32": "kBrwHiDCNqMSorYycGqA6VWCwm5VbxiLXs6KRDatyNEjMdouz2unsMWFsgN1erqtviUDDAs2cXh4iYCCf6VGm2g",
  "key33": "3Q3fFer8TVMmrfyaLRhmZ5KWoVDAA78Hbp91kS5rBZ8hNFwmTJyaMWtkKvcLxv2fmW2it8Pj8ZVKuDFsshCTvHs",
  "key34": "4SH9BbgyDSdcnrQ1x8sVDM1EXqtQro64tkko8AK7RxS65xbE9qoBaYi23WiM92EcjJHmwSWdhEeLAgP4hsncwQaB",
  "key35": "3wqAqm3pm3RnwqLYawNZ2wPaWqterwBKfa3DYZ4mnMBdfG6txpugsm926rfKQYm3RkcKdXs5rTGxVNVLLE7RQE3T",
  "key36": "46Xp6KGJ6dEspe7h7tyukPco375eetsh17v6Hiocws93bwuhDJ8VMs3d1iQXoi7rR58pibhggp62tDcS1X2iqPAC",
  "key37": "zXZmYAwMaozhvp4ZiJMmqDPNFpCeq1xkf5pc4DHE98ZminCzD4VA9zmZ1L6B6YbF9xY4oBbsBWjy9VqTBcKYeB4",
  "key38": "2AG6yxUsHvyUPjFWG4uTYHcwnkac2GLAg84RDTPoq8JiyyogVLfHZXLSCxYRNeQVTMrLgvMZ9ZxqsaVLGGEdj2j9",
  "key39": "5cnzbnrqi4vvsFKB5FrAaVpKJARH7kuKrDbPqjcAYALUVuh9AxCX1c988pj4CFcHznvdpuPWtHeciNTiP7uMnEiB",
  "key40": "5BX3K4CzPvvGWp65EsyS4Uy6KmgmBMGhdWBFtpmf35DJMAS78ge8QoLtv4cV6JJupdZHRekAkcvRHW5BgKC9sDFC",
  "key41": "2q2me6Ae3M3cnFEvRR8crXGRqZYzxyN6KygHykEE2CLMMrFcEhST4CLQ2ZL1QAogpARuwV13GZS9fddUDv186jLd"
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
