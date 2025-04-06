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
    "4j2FvrTpap3DioZnqGDJVXziGg5ZJ7v5XPgdVk2NDGzTQ6nsSptYWPssgeQgbpNE7JkByfD5BvQ7QdjUtxc8oXgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s1WGxsGUkfNw61UzZiWa1ezrkqm5PTQtsW7PiQmXtXZRZgwoxznyb4sZVeNLUgg7ad1jJoG8F19bXY819X3Jb57",
  "key1": "3QnxgACXTu55EVuqcWNmFsfd4f2rR6oGdjuG4qmH7v6a2eJSsH8Bjm3EeJXTMGtmJNmHvsWAuDJ22hLiMkLfkWwA",
  "key2": "2cv11aSoYXMomRAqdsSuDZtt3KTgq9158V5Ssn1N4YewKZAgi1c1EZxreQeQPvaHTYTxXdNtKEyPuc7z6VwCxRQ3",
  "key3": "5dteWUTeeSq1PvJrXn4CNZ7PN6UxdPT1FhNFDCUMBDnm17zXpAiZK8HjS4RaTizH1PgewZYdPPBK96ZY3KY4CGiG",
  "key4": "3miFKGumn7FAbPcqXGtUsQHyjMKRixhH7bhAYVrv9BYHAFGB5fH8nYQqD2RCwhBsTDzcboajP15spG8F4hXHifqj",
  "key5": "4ccMYhq99hE4gYYL4HA9o6jQvm74zgbqXTpg5trpUjYX2DsyuJziJU3pBRGNbuAuXY9kogHjdcBo6wkoHRMKFKxJ",
  "key6": "1vUa9haKaZKm8sKSf8yyMYV7XNRrPvFRwecyhuutFN4dehbatoPCogi7KUw98dXD1wqGAsHx19wzjALzgz9UxNi",
  "key7": "ipbDnQZjdjGpaxRV8KEGtQwXirdpTfJdigEtitgtqYa2BscPhJ2YTuU26nG1w7HhQwUQenoP2xr5ow9ACCrSUVE",
  "key8": "3gFduntCepMc7LNpdKNy9ZfwympaqFHjLyAkUzwngf5Gio62WedQv8MaUNLEnBcxA5Zws2cho199Pn5vU2Y4CShS",
  "key9": "4szbpobx97E9XTEmd58ELmHXYHju68agozG9NhoKCjKJYCwak4B4cU9kTMPpAUPsvaKgP8PovaVKq7TSKRuNFiUt",
  "key10": "2an27fHnuUWwk9vkoDkMtooyiiNfvFuPEjoDeMUCtcA7hNaNnivrUPDSMucu4Q62jhA737WMtqQHmKJEabBwG6ay",
  "key11": "2Pw5gQPawDQEWbNBNRcGUTAeyMFVXYXMV8SPyibpcBQFkXuASzCNBHMxbzJi7is8jHDMKLDzAPkxEyBp2npueeNo",
  "key12": "eMAd7HZXrgfHaXZ7TJTYuyEDrZUAhaenXhDVSapSn5cu9SA9Ygowiqy9m8aw56UxBAh8A7noEKQA1oBxv7nvukB",
  "key13": "4wXr7jadZFQhq9LrkjP5MoBvxmWR3w1uVZd7XZTt4GEaYsdjcfGwg1mNp99UdSkWnPDQbaatjB4A5auaj3DBZvoY",
  "key14": "4csJL2MFLw2MQRm7WooP3khLhd7W3b3mX3XwHeoZACDtchdr18VRdvTVYAJ3t7AU8NZBry4bLJmQfe5G6nt7pUY9",
  "key15": "3ka3PykrUuwSF5wzxXFSM57mdYyhaSB4RTFojjKUv1bPMXq1SRPPPwMCB6RKGeyG5ESY75ru33eD4AZFxzmhdi7t",
  "key16": "3WL1Q1S9x7oDVr99D5DL5inMzQgyLU3apEX1KpV3fQBTzu3jxoEKdmAZ7H7zSra9W8PsYMTX1aqSFo4gLmy1xY6T",
  "key17": "fQ1hpvNS2e2fA2dDVfyWnAaBRgS2fqAZw8QoywWQF44Jqq1eMvWAetSoXAVu1PbVJVWPCxbFf6rf7cJ9CTKnoXU",
  "key18": "24kdGpA3N3VShtS9mfF8Work79pg3Svh7JjyqD9gLFoZ2gKBGXefSKUKTpj5URo2tb3TRTkktCVqyzzH55RGiTBg",
  "key19": "5wfnBgxZ82NqDwz3Bv8PQYjcZDsGJY2PpZbd6Ucn41p1NzoMy2vBiWuvEFNhDHz99PVQwRVGrhHrRFvJtoMxvJYH",
  "key20": "22SFxuRDyMD3LTKBWfba5BPmHU7UL8GRNhAsgPwCmnQPRxnuwwJsK7ozVivf7qYUjiLYSTgBNn17SZ96Z4wnZvzq",
  "key21": "4gCcZEfsSTUkvoYfmCMcAJk9fapzjSen1t7V4EP4jWGqjnvLiv1tkP5iiKqK8gDEsRyAfZgoATJA4qP3RdYnM4QP",
  "key22": "2RZfw5kEV68j95J2JeLGmV6mf2XNbiypzNdPEGGTkGP7NKmasnfUpg1LHEsXvnVDFtoWPm9pZbNnzoeGd5zNrMUe",
  "key23": "5ypY914icy42m7xtnfjmgobaLQdEPV8eVzxoAxVeWS8mQ8Q1S2qMySHC75Q7QbN3nV5ysreDTQFZnkJcdvUCHvmk",
  "key24": "2v25py1ZRm2WYYbfxfuxwygRZLPqZU5u8uf34a2EPjoNJWT1grZzehCtQvR4UnhYcyhsaFrcaPamZ9V49nMqDc82",
  "key25": "2w6HtTice2VCPUWVs7peP4iCXkvt9rNnmtqG9NoU2QbgwEMWggfV66T9i2ChFE1DCAcRj4Tw4NMH9GyvmkdGD9k5",
  "key26": "2fyW7ka36qAfK4qp6uL9URSpyErsZYyJYeSrJPzWJmcFPqDd3oY8QZ1vjxQyaJEN6arCMWocyyeYrwyYNcQUN8Ss",
  "key27": "3JXEfgDQzYmGxAA4hffEC3xQFDtzZr9FYos5ei2XAFvWJewS2VALF4QZBbHJLnjttm3Zqm9bcdxzGoyvAionfU2E",
  "key28": "3QR1UeGphr95avEnhjpfin7U59Ufdpgi862fCz7xYWTedrzkYtrSGByNBnD2xTLmfoDLcbzwDEGtEf5wRGecEC5U",
  "key29": "3Y7k7k7jwrWbi9ULcaak2DVuS1qKqL4DDprJV576WYAP7RBgAVhcQ2sN2fofNXbEQFH6RxJjxCFcjcapoYtQnSdS",
  "key30": "Dv2o3WLCKC5dxSZ43wnzFyHty5AsFqhSD8MqbktkNsdaMpM4UYcMNy5yVLjZ6cUKbbZHfsYmzqoedZakdLu8rL5",
  "key31": "X97K14pgVWLk45F8DaGdWSKyHuuTWgmFVgUtcWDN6J12E3obpnYjs8ResC1ZFdNL7xYSt79gsB5CXX3qmrLsR6G",
  "key32": "2rnJvDVnZqiEymZvAnsd6sVukAa2G5jwQ4hm513YPeUnrz1RxTBEoxUXATcMaaFu6MUoA6zdFJYs9XfDj6zxgSAd",
  "key33": "3FSZ3weXoshze9qcJfnC3kTW6gYBMMDUTnY86hoBkAwTsBYEKYh6fYKFv4KoX6nnGGPpx59aRt3fgKvxwfb6Wh5C",
  "key34": "4H5pQomrGZbczxEnShYkewwkdcsG69dZXz3dGn8EAXa6H4WEUqjAB2e9TtUYNrqGErJ8FhqBZgf4BCyPoRsX8LA9",
  "key35": "634yHxBfQ8FKCmonFwwxLu9KyU3h3xVKyD2XH9yzUwf2ptm2ud7xEX5HqFMbrLvE7j161PEdGAd1QDhVQxX78HdP",
  "key36": "31ZpUCt2RA1drHmm5RD5WzaRstaK2ZUEpo3WfwJMXrweVztGdjrHufo1nCuikjyw3pJyGLxvjjJRQt6fFa9mv4Ap"
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
