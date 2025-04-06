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
    "RtR1UYX32jRetUcCBDg4Xp6NGdHWGk5vbvMq7oKQVLKmagSajtqn4YK2FTA1hut2FthHnw1hLpau3gddtpvR1RR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvjDgkQGrCKPcw7esqAJnztfdvmxdVbHkKERHwGNbSzExm3P1Wc3ZdWUrAavEMiDVSn4sXcPXFAGS2ACvaLV6YT",
  "key1": "4ZwGShsEPXzZKugg7GodC1fY844nWGzENuqVcRRqT85bKv9N6tJoz9i4pVKGtD1UMTXPU94v1HVEiDu4UbzEwNf",
  "key2": "4c8fuZJAHUFRYFhr9iKvfQNVVmv9DLPMDineaEcPpCSwvE2yVdcQsNgQ2kQhGrKqCEmzCFMxdQf8acVURexuSw3E",
  "key3": "t961UMDGZmP1vpAhe5PW2oepHNETQgUGT45hYKuEmZ3yaTapg5wRCuERfVPCyR4cD8atVAUkqgcr7CFNN7xA7kU",
  "key4": "5LEfnectcNe5m5feBPSbJm7fZ4k2xZKagjbH4rUsz8hKZKMwqPFRH7qfeSzqzqhpU1iqE2JbF6ZChtXHihrnDyVP",
  "key5": "4ez3Lg1Tif2Zy7noxLHdJiuNxBu4BDDn5z515iqXCAksiCh6Jza2t9wBDmwDemDkuCF5vmSWUrH6hHeHLnTaQEK6",
  "key6": "3GjMX6dVVR6rWciNX8VZMQR2cQme17piRj7tF6FnickWNVgWZDTrVLKfuHg4a9inKXGfZ4QQbr9LhTFadfAK6iox",
  "key7": "5qbFo591VqKDHzsrKp2yjVrr8gt9dDuyhpG29KTNDeZ3Sh1hh6TJrgsGVAWWTxLqskr1GR2xkNDws4D2sHpnoscg",
  "key8": "2xYxq4CeFhbRXwB6Na1hnQfgiU7JFdvMXhwrQzQeUqVSWy51NXsuQt8FozJBPx3hxAY1aTZ6y234aMBiiHzYXGra",
  "key9": "5qqG27kdKmNCNmRDES4vrBx4xWE7FbXukmqqZv3N9u8yBQ6Xo44QzsQCcNUyMQiP5qtRn7wtkmCudURwtqCdAKt6",
  "key10": "5HVY44BNo7vrMD65KFgWEW7422yXP7MiTN8VPtnk71j1dc4ANetRSU4Cmo3w6BFriXuyxaqj3eiBHNaqTCBUdVYQ",
  "key11": "T3hKhFuFMDPU7SWJUeMpGbEgRyX4rhYzYn9jUJ2KC3ndCoKH6zX7xzE7khobwhPwnchDGaPgDF5ERy1shwyXFdw",
  "key12": "4FTKyaE5VohkS87wJkrE39vBwqtWrJCMA9oYLRGsDbCkMtgvPJmVSK22QPo8kEZjmD41bAiuy6BLga66AuHzunRU",
  "key13": "62u7bzwGrxRdJaDrv9q4iHaxoTXrhBJtc36bCCD3woTbuVDjgVJu8JoDyVkEEub1kw73M17ig2h8PNGF8jPSGsej",
  "key14": "Az56eAsMxKRYuCgYCj66omGEbMokNdGCFMAABFCgdJ1heFwrjUgpnV5RWpEVgL5hMpQrmGiXxoyA1UMyAafmw2t",
  "key15": "4A6BubR5vBu4Ryq6S5UKYABpHcU7nwKd7Jre8YRa8ZPAGS8qKHYXBSPGoqjh79rCvDQqu1363Sv82f9NWP7WrYvh",
  "key16": "xCBQ66KUkZa6YBkJZWghyPABoR8EGtoeYkATEwovYYEX7aVLo7o3q5DPQjSUR3YEGFgSL2vfpMj154aEouA9kV2",
  "key17": "62SBVZ1hx7xSMpV8ScnbEwANt1SJU2o8xufhNfPYznQg5s3VEZvr8GjL8d13bEJQXZZSrGck9gr8TGC6bHCYg1fP",
  "key18": "NPMWQp2xuW3x3JT7a16Kavh7SzU7kvoGtAqP2wZo8H648U3wCNYnTXp9sog5yL7uqpcsuZn51yqk4nSK2MkYgQ4",
  "key19": "5m1FDdfDuZn6xpSNVC5zZCUhMKSwCDtbnTcyU3fxz8DB9wT6mf1UWaV3UP5sSQoo7WJanbjtcnMTvZeSRX14yPBG",
  "key20": "2PvS5XmGmtTLT5KrwmTQEpjrR46Q8Ug4TxsHnUfMk2bvrmrBsHpTYZKRdR1ZFHbtinix9DAd4QPnF333U45hD8vG",
  "key21": "LSTZsm384S8mk2uMXffNj4wu5oDpk27gFToydRuQdNYjnse4xr3F16cLu3mfMvfvNhu1hQ2eLBQvsjBvnzyS7JT",
  "key22": "2DTXHcV9fXmbuFJPTKNLnX33oLnC2NCQum1VGhoccLeXJvbQdvLCjx2jL1Bb6yyaX4rnPJs6E4hyjuiivb3zqgZx",
  "key23": "4JqmrKYvtHXsncWB9wHNs6gUkdKZoPKDsBHjJYuJ9T5xWvbkeQfKPPaWUDguibqMaodigLETL2mteEkrjjqcEAcJ",
  "key24": "2XGHtRcMMb5n9qyrzzteuczhq9bPamQ8tJvU7CngKb8gPdXLrVA9FiwkS6KxEkLrzYErjZQwcuNKUFQxjUtHDtdw",
  "key25": "x8oJfAgccjoPDof8uMvXeDGpufBnuHxniedAQVKgr1Ww5528746RbzW6c2xnKgPq2f4oRuLkCWaQVAwbx8YoLMs",
  "key26": "4ZGWQZagVANAdSeNdeqS3gdY2yS2UrSV8aw8XgsXYmEBWRDSq5CjMMmUH58KdWRTVvTqnNSRB9tbWf1wxSkNx4FF",
  "key27": "592wrxqBe1heq8jw2Ld6bBD1cAcMjpG3dqQ3ctSrKKstdB8K9QUoR3JXua1ZQmAcxybFVhChpKn8qm1qzwXJ41mP",
  "key28": "1jD1FTjDboZxmZwtmjKjhB2qA41VxkUsAbvzLosoYb5ibnEXYNr6wWZzkoV5x4xGSENUyDeKGow7RzPNgpqC6hK",
  "key29": "QKzhVUEJdWCJtzXi3thcbPsY2hUDh2VvsKgyH6Kg1Pd8oYyivnoJAiuEEU4g82wgNp6WiYsirYzZkNxnMqhPiQx",
  "key30": "3az9qCjZ9hJAzFnYNLsHv9g3qdhR2jDRthyXu61UrSD8K9wL9xsk4i3zfHEGhsXyEFv6RRAwGFj5juUAqxn7ayaQ",
  "key31": "5zxAjDBei41XkT3ptvXfsQoWmCWefY1jAxPiMaSgxi9A1WY68gC9ZCewtPohRT4ZwFN9YL3CnWu2AuwH2Gu2freq",
  "key32": "msjmyUeNRRseitwWSmPzWJVKVcPHgHmK1Jk37hsCEEj8iRXK79r7b9nGECDg5et1CQvyjaPRcdXh16PGu4pbYqk",
  "key33": "658KgQXEqNVdiYGnhstZ5AUdwCweRLSud1HRC8bgRGNwntKeL6wTuWGYpUFZG6zHHKV1FVimywzdPLxJ2oYLuTrm",
  "key34": "5LkYvfztb5MrcZkBr1sF1BG8mu8m271BkgqTUUE15ymxBPJKKUK58LTyBqdqa5eujzBsVb6q7v5q8oBkew2qu1ju",
  "key35": "5hVL5hw6g4XizaFAFj89ed9ABLTghfVNi6Bo1yoesQiz5KVNhz8y9mz8meMEcpgGREcaWZuYqRMU8yLaZXCLBRyF",
  "key36": "vtqrqUEvGjds5dMcgHa4ktGEdcEWwkBgpu3Z3yYHXDyBXm9yA6qqUiPryGx8hMZ9VmizNWrwtx9KcXyc9666cJ9",
  "key37": "4QMLJVTgWh3mzPvaJuyDSYRXBioVCTofdbaHEHiE7CF1QdDAmpsbSs43EQp3BKY9z5JGGYxHjU34A4tfvUD2SFgD",
  "key38": "52h2Unz7qwJrFv2PsY85xmYdEDD5ArswjJT1oKUw4D9MUF3Yrr2bNSjvA6D4sfX7qnaRRbCjciRwUBHe3h6tKD65",
  "key39": "3GA1ow3FL3kBZYaSqC12SVjXNCG2mAKMDvRq2Fmk7EadDJ6ZvZdK2PMNPxCBpwywkKwnGGAyh91qZkNcngUJcvNe",
  "key40": "2yrXQnAbyzDz8PJARQfmUdQrtWnE7spn2xLNbtRe6MaXzpCbnMjduNnjWH7d4BdxrYXeJT7fVXZ3xefGx4JW9zHt",
  "key41": "52Js7TL6bhe6xGciJbYQQ3ShfEqEdrHFDftwRQFLr4ALtQw5BP6xNSqh2eKktV37AqhHXdP48ygWf9k61aCqAvuH",
  "key42": "5YXXkUbbAYsWimbnpKGyoKUjuh8vcs4FCrvHAG9aSoSxRB5AJ61WA1mU6YqaBEFVUX438Y6yPc3rQsRFgEZSyJB8",
  "key43": "4ppRcswpmaGeLkGfTsHHtshbVMei7eNUzjetnsQKVU3Mp8mfdXv41HyXofDSxewgY2cfchQvM2BD7fmUzLMU4pDF",
  "key44": "2zNEa33QfWfHpgLokEq1tMAPnja1WaNMWStzLCtKS7tjsnJzfMsuhXaJY8Q9uYRJT79ksiwGVVPJ3sR5G65joXu1",
  "key45": "p899X1Xq4P2joPSGuUUY9Afa48nzTQWsSBSjhqL2ynmayJ62uZDMA3uxrzbjSMFkFKa3iSthChbh4TGYZEGnmwx",
  "key46": "2oW94q1uhXHNSUVkBtqJuY5MvPQ8tfNC1TQkEGaWkWsVfVPG4jR3BiXQAVGhYvvrags5gJbXNq2uZvBEWPcULeZv"
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
