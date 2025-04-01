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
    "5EeQGusGxGhg61UKReN5os9Mh7hrZFtcMitwsTpABU6uu5SFBBW8ZR8f69GDkggGER7YiqPRxLJc2KBasDnFhr6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8RxYdo1y3ADemFTLMwGMMGXnADqo2nbY4K1QtG2Kem5QsUG6WqPUyoefGWCXmTbG7wmGpbE7mxNaVmCfrQcxsq2",
  "key1": "23NmREdmRuExedk4SSeMXK7JNQdot3YbyjNxzd8nLbWnQBwwCDmrZpQ3hFMcpj9BbqBZNLzrVn4t5HCSNPEruPip",
  "key2": "3RA5ixva99tzqBKLWq1bdwpSq3ZCDXM3rx3tdosfYwUtHokQAN6d6GjKwwkLiDe8ybZoNRYsrugVHTo1nUfJzQJH",
  "key3": "2JwDfuYgisxr842KrbS23pKvv4mD78HY7sQrudrxeoiktemEoPxnSghqk2s7UsVMMESeyCYh197odoBXGxZU9Cvp",
  "key4": "5kggPT8yRL2w3tpKV76e95tFjpapBzEZtyGuzRp33aBBuoBXZEeouH8rcCk5WjzxE5nqo1FfCAcpd4CcNnqHaFvc",
  "key5": "2H6VjK2LZ4rtPQvEuqxufb3oEpBciragDwdwNxryw4yZujkNi7tkQUZw7CsV9Q4Q473MfMgP2JUqSnNuBKvRSbqa",
  "key6": "b5CY4RgsRijvAscRdcBcwC8qw2Te6QgHAtWcYqjdGU8QjwBu9wwE5E2wbi3xsoSVh1FWUL4t9pkP9xa8FYXYpZf",
  "key7": "3FkEf3hnQEsUh8EJtSryw8QcwujsRMBjXZwXfnvse2BPodtKoQjojHFE3QoZcrTDUh4S2xwjS5mLu72WiJxUoaJ",
  "key8": "4RjasYNQuJJmyhBwkYepMA7ZPG39a63ntfwo2DScnJG9YTqKtdZdXankHFgeuvA1gVTq1Zn5KFrHDx6PWQDhF8hm",
  "key9": "AuBRo51MtABvJ6Ypp5QxYUNFbWsv8jVgFiV6DN4KCwMpHw8wjmJSGktqGnv92GtMenPpnsghpX3BFj4vKBN7Hyc",
  "key10": "2UxGwGy8X6CDZq6FY8cSEp5nedTpMYUmH87nhscxFYJ9DqjyFLGRCCWe4ymL5mPMNmrrVLa8VKGp72AY97fgj5aV",
  "key11": "5MoAhou9m63DB34jLDwodtdiYjgS72AeHismWjYW6Xz8Dm6ipFN1ykCo1VCM8ZKJscWUfG8ER4snQ5ckLq16BzPw",
  "key12": "2MN8tgK2sVui89nn8PsMPiDcNZKPwzzYQ28MT9kPmo6DfJ9WasQjP3v5sQEkZBcwVepuusEXRGY6CrSJtFy98F2j",
  "key13": "2ZuGoZ6mEQzMdPWAA5ea2Eai8QgKfcC8wewQwxV2Fgqc821U43tzyatycFigrXuBcTmcA2n2k7Eyha2jkD9XLMnC",
  "key14": "27UFNakDJM6m8qfo9MLcRFi9StXZg39NU4pMDCCMFMHyfiW5VNt77ZviYMf5ggDiNyJWn1PoSjE2w7dpEY2eNzrK",
  "key15": "2GKvrmEHc92BoUF2RudC7SGbCFENJRUS7Zg4B1X1WvDuPmVztsYXXqbRDHX2pT1S6MqgL8426TDrZAfC9DXmuwsf",
  "key16": "3ybWB7jdqp1sYKGQWPNHDNgEN6Hd2M7YG1VtfBA73uxYPHorRKP871iTFEgvfFrujCj3e3jzgnnuh6wvyH7yNums",
  "key17": "5MDBL4zzkxZYJqdLMFuWc7CrcHYg1pqkBWoWhojaHpkR3jznZ3idr5BGe8D6K1MAv4HJP2SMhAJRBRVYFaGtYRWN",
  "key18": "2n732LnsMTan3G9Wicjk5VYA1nhHRra8kcx6j726xYxqyDDZsx1qqrXjzLfcHUK4hfGgQPW5jUHGPVhQ6LxM2NGB",
  "key19": "37NgjrYtiaB19PVGdyCWgCzv1dJNaHtHzvgUzBYdcwGRHE2Hb3s7gYGMrCtLF4cQsVfNgko7sZ8CrEbSFuCwgcPq",
  "key20": "5g8nePqeh5H4btHdfHec8pjTTMX9orvudZE1EaGDHCLTggR67aeMqxM2LWqZpwHe1jSbdVUb6KmHnkqBzVAN5nzP",
  "key21": "57WGDDMxGcJE7m64Wh1bQCzhu6n2ztufXDTbZ7gBSJsNxybQdnVhCB9aV49Kd7kKzVREqHTC6gBef2GQBpqYUHex",
  "key22": "22WsRStMvvXwHHgCRfzbnMfqXZV88u3VeGNHE7g6aJRFMShsm7MxzKThBWCk3NQ4yzvG5SHD7cwq94qf6yASNfMn",
  "key23": "25bTeQmJrSaBJ1kAJNUei5fpFGZXfLH6J7MEJqLoMPszQwJ3nbZQuN7domfiEQ6UUsbu6phWL86A2dxnovk8Ht7r",
  "key24": "Gq3QCRqYCo8XwHNtV3WH2vjpBJMe92PWcV9bL9VZ78sPJjmX6D1bLud665TbGuSdpDGunKzDMXxEMPqjo4Z7M4A",
  "key25": "5PY59Sb2r5QfZjkDhhPCAWCAqeieKa9wg5ioL6bJuBXSkhjX7ffnfecYqHZ8Sox1WFH9NrdpJE8M6FSBVYPdEXfx",
  "key26": "r2UmuMaDQZuALnwaCcUhBSWS7y8dDtLRF9tgePdCUd5Y3K9xLx9rUrpmrrTyGQzWWsRZeSp2htcq1vWn8jJTZC9",
  "key27": "K214ieHkMiWwGMfaNB6CUiPxoRbrEhHnNHn9Vme8FQaBB5ookLmx7CyZ7kktQD8AgX8cNyA4mmNmWWD7oKDZctv",
  "key28": "4eabujP1VDAvVxrQS5Sv2zuxmA5eyEPzpNRwW3sMVDkjJMyJgfsuYo4enKfFJPNs6Uy3H74cuRemQY6vUEfgQ3Xa",
  "key29": "3NfoZGXoCgWDDVH6e4sapgDejXcXTHf8ytDNNdGaCzzwo5Cx8EBDKFeHU2ZvgWTvoJ3dT1QzS2bfcPiSELUEa2Ra",
  "key30": "2s49LQqw9qBA58yj1aQSw7NwkdNK496Nj9FeK2pSoDvTQCfPZ8RmMmpzmLq59PM2Z3f1Y3tEgkNUAifAjzKMdzab",
  "key31": "3VXcMQm6nEPYqQUHZCfGkhrCTzPV7ngsaxooA5h1Jrgv9gUr2jRSeVokn9HDdoJ9qhnmiEULqTqUL7gkneVTNCHY",
  "key32": "R4hAudaHivXkRui8h8DXEJKBsGxTUh1wKqkBzPFk2Rxz6Xu2MqawAQKEUgiPgRwQhELogrVgg8H517vLMWVENjf",
  "key33": "4C4k8tJXLD6FP2GtAnVn5cKhYCky1KwUBDDAjP7kCvQf9V63XNF11tsSzQzsf2m9Cnxqxx6tkyomhyfucabctwGG",
  "key34": "5t6D8KRdwX4e1ghdArKoqJZdSSsbNUDmnWJ2jptMoZnu9jfmmDS7X3o17JD42DsYas1e5Jhjx9UYiyuayT3uvj1B",
  "key35": "5gWkNmQCLbVRhrYdbnUjW4EJTEcAe7UwXAaEqkdhz3pL1ma9rxpDzewUhbCo5Zcakf8ZidsGWY71mxBPD7iGK45V",
  "key36": "3F4npx8BYaqBTWJLiCyvtRCmYfrVbriDwdvp9ra7z28fxFq1FAg6KoY9AKsaz7B23SVWUbYxQFrrR6FHjonEDTZ8",
  "key37": "m5fX3gPJXxHaakwQiUug8psJ7gkSm4bY3iJuCmAVWuq9HraufTXesgUB7DCDfKaTNfJoJF9hSZtWoz5jM4DueBm",
  "key38": "44PPtqvfN9DrkvVDFmqfvgEgPVXocA5jF2YhcSFvXKgAqJ62YnAFCTFAzrpHs4PVa87YFKWmT25orQd8HDyghK3V"
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
