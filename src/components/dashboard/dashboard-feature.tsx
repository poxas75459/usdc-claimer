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
    "5kMArgSiMMpJnHfKfnmdQjsARg6M6xhMWeWfD2XPtPPBEDTwCCuPqth62dih1YyP294GgAHMWNaM3qY9jF6ayhRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5riruTs9VpXrQktaYGtqYieArpLTpGskDMAzvFReEX8Te9aGvmFePoLzwyA8KvzJhy92wV35JATVhJss28zRqHvo",
  "key1": "4TndSeMVW1ktx9Mq76BnUsmHE7EEEzs26jL2cD28iRWD7Ny3tdxKyMtZ6672B1thyTEpVDTX7WdZSAnFwS9faRG3",
  "key2": "4T7SSRqwkUsdZfAg3j5gYLC7AjsBYqiN1xoAXDPBascvM7K2t4FBrbdx1RHRRizY5geYzFzsV9iYu4SHvc2SNqMY",
  "key3": "4zRce2rPuoZWkvKHFFykXo6axe22ziPrEojXqHqwQxCVK2p18DRzxNgVdx5oFAxfpeMqTZN1AhQ4D5cn9ES8bpZj",
  "key4": "5zN2FozmgQhVNBhvoeEjgBijuqcjQPEBFc6n9Gw78WVfbemRUU6KHtR7L3P9PK8eHVYNwMp1mefnpPiYJSjPcmv6",
  "key5": "64yX2Ky4Y7DZLqw5k5kUwsa7JxuFUGR89P8tnV57gqkr1MmdgTeiuki69jfDkjUcyjpvP2cAqnURSYZRzzMAmdVv",
  "key6": "3gxbYULQjPmAmFEkqWe7ps3pNkgRn5mWZM7NVCseueksQA3EaUX7VJSGnWGCHvuJAPpPUNoP45oWV6dLV75KSjW4",
  "key7": "2nE6cpYiCZpnfzm9yWd6DJYRZM2n7TdWstTXz6GpBcdpjNRWaVo4rHDV5nfSAUiu5jT9MJu8KJjf59bbYEDmr3ft",
  "key8": "4AkxetqkdTPvUdmB6w4kAKE9EPVhoCVMreDRCPs6h3D5gbKKt6RmTyHzNaZjL1dTDdBbmUChjHtEKPvk7N6kg7Le",
  "key9": "2Ly4VRtBdpzWGebbvyVonLJ9sf1mZDqv52nqsBwN3sNXy8hfHNRBm6jYVeAw72sdT2oXNUFNRgt1SDLAVwbGXYMD",
  "key10": "55K4RiTUq7hWrQjeG7uD6EhS3GbViC4v8oHDCayzXTzg4mAeK5rwemCrb1V5ExqHjNyP3vgfBwyX3EWKWcdGWdeE",
  "key11": "ynvB5TZUuvfSRm1t3Jb4wvL6fmwHxfT9WM9t8RLdKMPiFpRibKuGkugTCuMHypSuUG57RfSirQDhedqGc5x883q",
  "key12": "i9WzyGC2KH7YrZitzD3GNTac7mgattzF5oETxGp5FGSxcDxnB1EZmcTLgvZwZ1MG5SdFxuUwWAbffRcGyqY1PwE",
  "key13": "wmd9FnQyZPscibCDkMWR6YioURo6TDUPxsbTU1KBoiVMuf1Fgj8p5YufypXFAMb2392YxNJmcoQXd46VcUNpkqr",
  "key14": "5JALvkW1qr9i2MGT9gxe1V1uusXK7NRse5UieKWVirvPdkg7H1PREr66ikRxQsBwvd3FFDDzLPiugFTo59jsUA4A",
  "key15": "48jKfgB3xkFiLCu3DjdQ6bFtuMNfFJBU4CmdHUpbDwaAP9tWMa2uXCpg5SzpuW49jmj4crb1ND4PNYRP45uR818a",
  "key16": "4BW75eHL3hYXprYroFojkqEw5FDKb9szYLeBNPyn1QQro7krSznedTgWfLJ7Vu7dC37qhr391rURWkeZS6piLe8i",
  "key17": "2AX541k4dywuNRAyWgEXAjbpxvEtj2HE9zbEL3sgLUdc6epAqhLnBynv6RcYMBHskY7vEff1aUieprMPByyGFRg6",
  "key18": "4LzTyi13hJ17FFX2VG6gyT8RRinAqkw7nRdK2G7PEfBRbCtvogEYPzbJou7ZcsAUAuv9GqQNkFr3eub6mFF7Scbj",
  "key19": "3wPFLxXPc5QZaePzbkDE6p85ryJiCXziAP4NsWjDWH22RYiNGWmJwoqaHD3GvwvdWa3QxTpdrsM1ww3SzrRV9RxH",
  "key20": "45zwh436X8scRu2aUUn2FnkFN6uN39L3Khmj2iZ1jdxFUkB6DM7Uv3UWEyRjBnQQJihUsq8uQjVevyvwvWBpL2YB",
  "key21": "4CjbhJbcF8H2PGcdhF1AUzgAiMSoerv9Wu9NkgqqyKaCpcmpDFdHEoSuaUM9ByMPz9GgzjW6eWweYwmeVMrry3dq",
  "key22": "3oEJYt929YrLhDsqKUYWfFoQe34HBgdyqMTeEuEDUoTNpB76mUwwJ1ocXRVXG2eUjVaBiDjdgLjosy2k3JXXwrjg",
  "key23": "5MjWvFFcykjUJbM9m9YaTXV2KNhrpgeCxrt5Tovc9eU6hmH3PAkqP2nzDutxypskmwAximfZQZpfPCjywwH5GdeH",
  "key24": "bpa2j3xhGuEjStpZK6xEbgmuwWMLf7YGTKdUsDbPwJ8LPgit4KJsQ3U5v9M6qJ5RUDep9MptcjK8HsTq1wcbKer",
  "key25": "5cxv6DvGrQ9ZRqJz1VbUkQHSa1kbQpZ7cWN3J987cowyyngBAHawXiQi3mj1TVSHQ8t9vNdEjc7heJW6WvLKr8mi",
  "key26": "4zyXBfuTHT1gXvUz6xM6KqKjR2ZRvzXLM4qArJyNY3f9nDLARePpgvDkmwuV3cqpv3uGsvKUMgs3cwTidHfueHiV",
  "key27": "2Qy5E28iXazudTM2iE6TUu1LDjyAnd2h5UJKQKmJpFrK4v2a1AGjbf5eQF1jnm6drqpw7Uv2M7EPiy5LPtrvVqbu",
  "key28": "5u4c4LRvhe4j2xTqEKdGanXbQeM9yvBTRxAeE3kgPzH8aqhKW3waP9ysxPYnDsR1FMkzUxmVUH9qTP6NV4pMkofb",
  "key29": "5xAGmmcg6bSZdBqmAC17AfXSKbnLeyvrpTbgJLqfL6jQXXHbU7NpD6q3CTwvnwo5f9PiyhwWh3iSM7VoW52wpQEm",
  "key30": "2NfanjLy6g2vCVGR2BFMZpiUnmKActjTyyYR152mU3fpvMo93UccDjGNmBFa87TkRHTn5f5N6WbjFRBD4HZb4XDX",
  "key31": "TTNivsaQizZPxWMJNHneTtsVSE573SSVevZTELD71mj2vJh2iJAXB1EPrtn7ndThKErqv3Jt3MsgVf7rajoo3AP",
  "key32": "5cDxj8NMFNXpB8vpEs4rYgFQqkWcRDV5kgPTGphZjS9N8PqwXZJWdk8xVqpzNyYkqRDCR3P7wixvkxbedtUPe4qF",
  "key33": "K3BHYjvZD7QTMREZ9g7ZBrnymzzBfoAe7gMqPUKZW4Z4ktomzURLCLL6JGea5ToNwQQ77gMGz918WLYY6mKxduX",
  "key34": "3UsvtHcTpTc2ruKYjWFEf7C93vS3ocVapLWBHymhGY922Csdobac4Z3XwUvapQJ7xYYxmbuBbtPCzTPWButRMWyS",
  "key35": "2wm7EbgidfDJ3bJy2fheadhahirhRcba1an5d9jnSU4eEkRw1UBjRcAS12WcpNfvNcrvGvA1m4eqswXQYFurxspa",
  "key36": "5nYWYQaTsTZPzAbnfZV2WT4nio29nkKZyAYxM3g2NbUP7JnTWY4Go93hYUFVVTfYexrAT4GSm9NTDJg6UHs8FDst",
  "key37": "5M77VPZyidVjzsPoZ1kYL4x4Tm6W2ajgEw49AAUETrQz16xNTTKwHKTG6KVxKXEw4NuLB4o9FFNgMPjyRDg3ScGe",
  "key38": "35jnY8EATfMaJJ1kt21KKrFargEXAEpapGMqFAvuMFAKBs9uyCjBvoEGLbk8HUqgyH3sMW1USLLZqUXCNW5uWZAf",
  "key39": "3HRcPkFJPfGBw4VZ6vni5r2Dzo6RyvgcxpZG1tBYVKnmJNAf9hJ3hpxEiZNbMrQLkptELWgFSdZrekcEmaoS465r",
  "key40": "u3KdqRRGvsDJeqe9Zq2dzgGPSppWM7abMv5MnPFtJny7Q7Tr39ZeUUizDzUgnqXD1pWoDLdcgMXTqkm54vWVZzq",
  "key41": "2Nh3aaQNTSp6eny1VYREPqBo6FBaigFobmm4EjfnVYjdRq31giiFTfR9vqutAE1mksVyuuYoFKowoDMt41FU1v1i",
  "key42": "3qWjfGspa2oNyJjqE9i3QUpUoypEVe5c8o2Gqm5UfoUi1ZDx6feti1tmSjMU4ZG9mgpe2ttoepCjwe163ygYrUxt",
  "key43": "3Dt5yBNCwvWZFKfXJgAErcjyJLE9CbNs1GtCH3xZKDcjwDwUEKcsDZWY3BS4dEuJ867pMV7wnzy3AbsF3hfvFikY",
  "key44": "5NKV25gLFpqFSnrFxbHcziboVgJctZ1kQKeAMVpCXfsuo6yU5ssMCznxyPFaJScq1sDB9MDMpCxrmnghYDR1bWN3",
  "key45": "2DN3p3v4DqrEhBcxxp82WnhvcwCFx7YQXA8SdVQacXqFTkuKXeKswZapCNRHiJTgmCXgZiV9H22HTsR8bkvmYnw",
  "key46": "aLwrfzma7BKywZ3KKbQLnuUTWEdPAtit8yAoTUj9Zy8MFi12UTfqihxY4ZnUuy96VHCA2Hu5cTGXRvGvGm5ARsC"
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
