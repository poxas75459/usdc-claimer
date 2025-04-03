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
    "3VYgnCejj9cYBVwTqqChN1FEmhp1z8EMhgFFp12ySM2FeaVixHfQYy1PSfLdrNhx5G8ardMA7N7XfBSWTfQRCThF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FJ7rsibtwbcMWCehs7xneWDV5VYEeL7B38yzDVF861caXs21fNShx1j7ZCSSCVpFHvyN83sZj1Drn7PbamYFveY",
  "key1": "5bSNgE9cn4eewL5kQHMd5u6QwWZLK6HVKd2P4GZjmGgU3thUwshYNnxFz9jMDyK1EQJYWUMQ7Rt7Pk6bPJyu7RDi",
  "key2": "3KGuH8NMaLFWpg2V9esQg59jHDVaAHy8kwAvcQ59YaMuf5cpvvpKjaMDZYdq9BrsPL9wjjMZBc54SPEk8Bji9ACn",
  "key3": "2GDYBRhferyLD1LS1j4pjounhoqVzFz54ExooRXQxG2UPLF11z2nMPEMuDYCP3THCRxH6m9gbhDuFNs9pxgcWw7q",
  "key4": "5jvdK93P4vwP9vTyUB5MRDCaXZJF5k6n1d32aZwEpmmPHmkkGeyWhvHTGDyouvUW6kmdZgUVTJH8vCd47dWAuvf2",
  "key5": "3qMWh5hW2F5Bt1WBmS7gxfC7Q5bAwAL1V94dAkZqrpc6jbo1FyH8JFv1XzQitQUBjDS8B3cm84ASwU1fDDVVP9Wo",
  "key6": "5qTs9Aji3F5Vfh2PT7C5K5A4stHhXhivwHFU9zBnQq2QzxJesW8a73qXeJ9Raumgg4JqNGcWdF2AGLuC7DuuY8t1",
  "key7": "2obY1pKwE8pDhCt94KTNPaFSFsbvHpdUfq3dpJQPBs4Kqm6P5DL7Sbh3AEdnk7DjM6m8Ty9UkBt3k5XeS39Krdr4",
  "key8": "CNQWYReZjELXXze5sGi83YDjgqP5WF4oXuhJLwAWxrsqeJ2jKo8LKrZBew8UiBf7sLNmJLtfn3J5JQBLZqQSkJL",
  "key9": "Ccb2GePD6Xu8tzdBfNi1pERHBsd82CJ24q5Kp4wDNMpUtpc8nbRKW7hh1FGwcYvtbf14KAg8hgWb51SAEtygFGx",
  "key10": "3LoGrha2Z5mh2pwN3iauSDJpRwksLSZu3NDZVcq5o2NrudrRBHePXpTCo3G8ihuYQ7AehnDu5HTwhBBc5yyK3THV",
  "key11": "Jmf2fvAPwy74iMqbzCCTgYMRGtNEuYwmS9HERJQ2pj7waRxce86ZrJ4VKdVdQtRbGRsPgxkSvAzTWDrV42Xb5tY",
  "key12": "R5rZpxsqoUqbMfPGFGeUTSqxwnQX4znmpLQfCh1C51xkpVa2EYKjy1kUTYLnBR5CGBDoPhmHyhJDgNK1pvE3ajp",
  "key13": "5A8nQQqFTRExJyAFEs77hawEJfQ2Qx7PrVkqzsba5aYnPL77XUpNE8FZfTRWbTBECdS5ihKdkrmi1Cn2Fd6NHNgo",
  "key14": "4EQGQdtJtensKyCJQjyjRoHJacPgqV2cJJs1eut8uH1BUZyAyCcUJMnkS3vdiNbCCbye6yPkkF4oR3W658wiiJ2j",
  "key15": "45qaEHrvHAuAqogdz7VyVJkxLUVfYLQ5L9zRdsNMZ13shRo4UWzMgKZPuUjRvgSqpBgBLhSZHzFz53SN7Tx4AcYL",
  "key16": "2ixexR58bmEQ1eXUwfhNiD96jABYNCubY7RdRp9qt8BzodaYp2TxEnNBC4MgZWANeF8ShpCy179v9Dew92mmJzqA",
  "key17": "2XdnbCpBWdgAAVUQpEgm8mxf71NPD4cH5mSZ9TvKhedeX15R72vdTJVKG7YB8auvZJLAYnSXsG5hqWRbnvyYeVJ7",
  "key18": "5v1nu81dMjpNBgCxdc9ixtwrx79y1HZx1bXABxb1tc6SJNTUFrL7GzrMKCEyA5mzFxCXuk5cMKFNRDDxphcVPKq",
  "key19": "59zx339eXBSHswpXB3ByUk5trPRXtKyRAQZasB6LEbbH8DdMRvZSehgQCdoGqZvkvAuyM8uA43ixd8usvV51KQEi",
  "key20": "4MWinJBtyNA3xcT8VFSsWQEHiZoiiHXDqMEVdfNWAsU78PHbaFQbWFc7WGDJjeDEgpXxGKuTPZHbWHW2fxfNf9SJ",
  "key21": "3ijoTbURbYhjVm6jYw9znFXboertgmXSo2Bca7CbaWHsG9pFFD8yRauccUxXThYFFvoctQittrQ97GaoT65Bs2Hf",
  "key22": "3P5grWRaAfZiZZFupDEpLtyVc8GgJ2FB5xmhGNDDdqYSo7nLsT9fW5zm3q25ZaT7tiVKi1qWdbyU58t7dDZTgErr",
  "key23": "qU5X3LJovqMoNBWj3nvfJJ9sgTMsK5pK1KJBhTpndp42JnPmcdTjSnegTUHhGHkwbXpHgAmokuuL5FaDtg38Hgf",
  "key24": "5keX6yaERS3Uo1LX1FgiSp9vcBYD3oQ8sgzK715U3P1KcTCd9N7DTtRQmn8CcmPP2M1j9u9EppLVYyjDguRMLusK",
  "key25": "5ZSkg8sbjxzRtp9RL1PgaNPrPfvLjm9Dtx5HQ9Gk1jPxUpEXr71x95eCj84Lc9E3dVNwvQmopyKW6w5zmN6S4Kai",
  "key26": "pqfroGPjNcK753nRoq8VdFGBAqGdruECZfT7sshwGxfAnkj9ejiMwS9pDfqMpizsETJZscNq6vgWzYtZcHi2sBi",
  "key27": "ErZq8A8eYqfi7eZbzUfnByNpBveLHpe8TkeaTQCaf22nxctAwpc2zwivSGuWC7iQvPcReMBSnGJWXYgSrftG1xT",
  "key28": "4a92jCbJ72ziHauFLBUmZaP8keh6TYsG6P4FhuEDF2TsbGkt52yfbadFsZD1hiN1BLR5XxhHArFGEQWahCTFG7FE",
  "key29": "5x95EbRV8XWfSss49jbLM4fN2tqBCCfNnjngkj2amHiNafAU2tbdqWRh6z9HDiYT7vEF57LkJodRup6QdmgANfWX",
  "key30": "5dd7BcVAS73ppnNhvi57yJH4VfHLbNnxw7BPDhG6TdyjaZEqyKV3ZmwYtdT54CjG5GayFHnvjRx3CtS56EejrDXo",
  "key31": "MhQpzzzyBq2C66Qr18khvhYXuyCr9WfJndmCKzjieHkmHwfpHoJTTjz8jqXiBafRyoVPAjEJ9yNUsspnr8Fxj6m",
  "key32": "3Hbp84aEK7BCeHnxYE1cmjjJ7o6oJHYxew7xCqqka9rgkTjULj98kSdqNxndDEZpPbPMYVMb65TSpGBkReMGgfJf",
  "key33": "XBk6TDJs4fxVB4JVeZNQTHuY5uZ3VtmBLf2cLKabkxgLMHFwSQAqC6aChHppD1sRRd4Y7hkLCp6xHveEu3vBLGJ",
  "key34": "ehryoYjVrnBw5XB2Pt5rnopfNXcPi5oiZsheXFXsVrrdddGmPJhRw6XQ95Mwnp4WfsBpEgztYwPsmk5FcpWA8Rr",
  "key35": "2E5qEpPHCtNeuBv6UHMxuCMnCHopm9HuxQPnD5WdVi4BoPVbFB1TLRxKLnNGm9zMjyJY4A4sVdGfmDXGS8fcM44E",
  "key36": "4XaB7Z1r7frGbmAsKHr2UgNS3ZZ8Fw8CHZmo6ew4nLWbSrpvAVZGLWQcFSQuwFKFJxBT4VMdBe2Ap6ALoY2mrgSd",
  "key37": "2YEjDppGa6pYGSkdySobGcR6qVnUUS56ksZ4BqP8gZyKqXEP7EsncKEzUAonQS5NZFgxmHiA2rtHC2pKVrNxU5zn"
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
