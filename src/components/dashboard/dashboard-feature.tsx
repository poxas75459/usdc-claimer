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
    "3DJC6RT68r8aPvdLnVoMFvCchTh44uBHpvW15mShRAyiAeXD739UNWLq3vAFV6D7JrmFoB3eWwjXjoBQMAzgvfsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g1dpcgE2bqVuWzdVK2bkk4RoeXEvcex6eYhCyGPL68RziGaadbcsZBWkZApCSKPvJ3xuYkT8yzMhs9uAtdzPXJv",
  "key1": "4RKNkw66TMbkpx2MNQrmMv9Y5iBzJ358VuaFJZoLMPhwUopuuE619CkykKLJwfSWcDq2ahXbZRCbiMSxNtj6ReHq",
  "key2": "3dyd8XowEVS4m61Ug8rB5dNN9fdmqQQnKRua9Z6WNUT51XyeAQtMTmRZ3jCJGsJgtjLS3jAqAUfUit4pfffac984",
  "key3": "4MEf8yGChPicjzLkUzBcVThrUAeee4rFsKhXSb5kPpbD2htYEX3m7e1TLaFwFDnwanHQn7dUuskcsBKtRJRScyMG",
  "key4": "4cxq8f9uqqrM1ssYZEPMXG8ZxwzoLLfZXhY1iNs29zjmpFFq7d4F8rcybE6tR77Up9NQBrjPxE2EqwFQihHE6DFm",
  "key5": "3GuW7m3o9ZnbtcwK3tsJW8A8nTpYM9XvSp1XUva7SvnL4GbmJsZfmBiSCYoasAeYEZhdGBj7AHfrvSBTTcgjB4JA",
  "key6": "orp9SsX5hBiNZPjDVqwJqq6SvyZCf4b82N2M96HiMcmQFPaPSFBiMh9wCsVcHTKiSC9yitasHcJKVqzSdZMHqcP",
  "key7": "55vfMy2zszj8PiBYJMDsh86Ucjg4g9M8Rd8xBUPD31UNMznFRK4MWQ8qcf7zkNF5zDG5AvPRRbFvFTp1bsQDPSF4",
  "key8": "4a7bpFhPEGhDxDb4CSnu2XFcZ4qERUNczq1DwWsCG8EfRLqqLVgZzHBonVetjKL44zQQhZFSZEEyqE7i9bQ1Qxxv",
  "key9": "2BQztNjoMqxRfBPiHohZivDmFoHZMTNk5D9jzpsTYMeMWhKmyQrSpqf5WvKyJsSmZ5Zak4ZYxUYR6v7wWjZn2APZ",
  "key10": "5FJ8yVCC9LdS3y3CqQpvqbZAnnvzGcsD8DGjs1KtUfJp3ccRRrDpamgm8KQ19hUXGaYu4WvLAAB3gjo7fR3hXPKv",
  "key11": "44hoKe5VnajDMFAgW18dXyi8ZGyhSGHzuNTV8WQvpLUtvnjddEYU7G1GoXqtordYvHJsjM6ckrVLKwLre2mmUdbY",
  "key12": "sGjPHC26a8LSK9rAebas8KFuCnMBGJ93i3TsakdZpFJ28av16sJik6ceHSa1GfB73bQudPWCrUNxy22np6JQCR1",
  "key13": "56wjmYTeRDZxSfGJ7CqDZzLGBz2A342irdzBdC5VYwXCSkzGCzpz2GZWSTYg5SmshL3MvMt8keEUjEbSn2JvmqDU",
  "key14": "3dD4tp2m8XqpHqULGdSvEqnMyTeN9DDqeDam51VG7MowL8xJWoBDuTmXe5ZmYDtFKWYLSEgp4f39gKuya1MUQgYN",
  "key15": "2WSyiRDZgDSEfepApcCzpRUfj8p7qE8tKW1Hu1BjmUBAsTwUsrZGSbXMCgr5XvUiCGpU2ewndKJQK5FptWvtq5uT",
  "key16": "3ikGsYFrTmcg8TKTPHAbUF9hhnwf9j8fqJaSNPifTec926wFCaB37k9LiToZwX8DJR5kLM4mnZ2PjjZH4JGHK2kD",
  "key17": "58avtRa2dvbAt3RDaKpBaqXFuyhxUSLkpT7n19Xs6Vx4dusueTznekyaGR6szc1Ud6sPrq9yuL35EoUw9yNxgE3t",
  "key18": "6sfi5JVdSYKXDPBbjsJ3MZ4dVGzLhWcNRtW3ARsMNN3dkCm98THNRPLcaedeCemKYD9z3fjH4GN4rGJkYBkRsEh",
  "key19": "47C2PxsyiAJR1ui8DeMSFGGRdMn8FJmLhXHzhR9m2rc965SxWME7bc3XNuxgAyogFg6eR9X6A9KdhhXwaryqQuau",
  "key20": "5rdpfU9aBmokdb9jGkBdUddLwKqRHrEqkHCuR5v4CtiktEii84p4Fy5aq6BR1au1FEU3YrGFiYvgtxKdJQiU3uGz",
  "key21": "D5q9yc1hA6FQUWTqFeJ25hS7j1xEttuVM7yYYMZdhA931vceTuPd4npB2TjycvurkSKWzfVt46KTu5WuwyWwWCv",
  "key22": "3UAjxw7yACFLBfNFsswygupDhtKVAoSCTwRucR2bk9nG3P8D7yHQ4rjJEvMx74shZ9mJYnWVuERP1uYM4zapB1dQ",
  "key23": "5Lwwhn6VzsJo9B7A7nZk8RFD3snrTKMYcSVRSmfZu9HqA7KNiLwagkVsDPsAPEKFRRrPdycSGHWZ1VE4aeAqjaN4",
  "key24": "RcjgefEFHKGLFmUzxwej1btnJSUU6k2BBVRxCfMLXkXbSioDaM2LWLX1ckAXAR4nc9nF4EMqAdUBNVn6AWm1JCM",
  "key25": "4i9gbvYUkLunommBrkpMcHPTZ9ZonAbJisAucJc1pHwBxgwanxnHLL1LcBhjQEguDDEvnwAFcBk8Bt2wZ7cjFUd9",
  "key26": "4PKuuGG1xUJk2vDR8wvk8k2jQAq4v4FgZY7P5ax5Hezo5GoqozTfMLbvu2SCzEgrUnMXKb1iBmNF7PXRR32Lgd2Z",
  "key27": "25P2jgL8CMA81g5LaEi7vyTvkru4F1fKwbiCM7rACqgdxCTGU49Q1GGGqVxYAT2KLJUT7r81n9ee5ia63SsXXs7D",
  "key28": "4TDcEsqy852cn2MCvmG3nZdv99g4BFhGLi1cRF7UdheE1iVFr6ccYDcJnWwCrpLYpSHWumpyPGFc7iu2NwJ131ni",
  "key29": "2T4zERowzAW1yNGUEvjCoZdDinen5cghbYxTAHJFF3EPUojvZqKF81QnCZZvZwFSZMCLHWTyMgxG8TL4voeWGHmw",
  "key30": "VwYB6cHxqcm71XpMhs7C1VzUMGCAq5xrpHv5KKa5NrmUtnsYA4eHB7dzutKdy5TE3hcCVnrgWWkrX8gMTK5NRw3",
  "key31": "53nKJoyLXgeCqekmLcw4c3wRq5VLBd3rtFDTiZSSgdoMREASwpvdAqcuFwAsrqnhpswpGz1vKwunXu58WRXQXLTg",
  "key32": "5qTe8auar6NZooV9jNPF6Qxzruxx3b5zmLeryHobrkHQPBSy5cPwgpiB2Eg2g6XEVy253Qe4We6NKv7K9atRPhTo",
  "key33": "4SAb1t256yazetyjWENnmUqTiha7mbZjuVVeiFWWCFK8L5craursgKTDmoTNgasu6hHmT9HijSBNKhqv2XHu1cKa",
  "key34": "56CEbdN45hWncDGhSGsFDAY5mwGkr45JLu37JV6xx9BNaaktaeoCmah2kARPcnUTT7JKzWWbbsAnTcZLUw3ekgML",
  "key35": "e2KknqMkE7cFNhXktSWkBSKcYy8S9t8vShQghSmTFwkU3Y1WBM93WTDHUHvZXKVadsKta7caSFNSLCXUZQ66bb5",
  "key36": "25Yd7fakKYKsAxJWzJMjFNdKXqF6fAhp45hCAe9P4EAiMGtroWDWeYzW8FpEEZ9KCGYpcda6GeYm5uuWtSk72soL",
  "key37": "2RVwVkN7JhraNstsxxd717vxRrGDHVitYEARR36Qsgj235YY3t55KFAQP6ixT2vmT3oTWJ55xRBDnUpu22hShDeT",
  "key38": "JfHWGdLFKx7T9UEpY6N2EHtsd2sy3xqbWWpEDUSQwz7xJcrzQn1KxZyD2LzU1CQciQ2WwZw75QuPrPJPpYfgKa7"
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
